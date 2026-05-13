const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const next = require('next');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== 'production';
const frontendDir = isDev ? path.join(__dirname, '..', 'frontend') : __dirname;
const frontendApp = next({ dev: isDev, dir: frontendDir });
const handleNextRequests = frontendApp.getRequestHandler();

const DB_PATH = path.join(__dirname, 'db.json');
const PUBLIC_DIR = path.join(__dirname, 'public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'uploads');

fs.mkdirSync(UPLOADS_DIR, { recursive: true });

function getExtensionFromMime(mimeType) {
  switch (mimeType) {
    case 'image/jpeg':
      return '.jpg';
    case 'image/png':
      return '.png';
    case 'image/webp':
      return '.webp';
    case 'image/gif':
      return '.gif';
    case 'image/svg+xml':
      return '.svg';
    case 'video/mp4':
      return '.mp4';
    case 'audio/mpeg':
      return '.mp3';
    case 'audio/mp4':
      return '.m4a';
    default:
      return '.bin';
  }
}

function parseDataUrl(dataUrl) {
  const commaIndex = dataUrl.indexOf(',');
  if (commaIndex === -1) {
    return null;
  }

  const header = dataUrl.slice(5, commaIndex);
  const payload = dataUrl.slice(commaIndex + 1);
  const headerParts = header.split(';').filter(Boolean);
  const mimeType = headerParts[0] || 'application/octet-stream';
  const isBase64 = headerParts.includes('base64');

  return { mimeType, payload, isBase64 };
}

function storeBinaryDataUrl(dataUrl) {
  const parsed = parseDataUrl(dataUrl);
  if (!parsed) {
    return dataUrl;
  }

  const { mimeType, payload, isBase64 } = parsed;
  const buffer = isBase64 ? Buffer.from(payload, 'base64') : Buffer.from(decodeURIComponent(payload), 'utf8');
  const hash = crypto.createHash('sha1').update(buffer).digest('hex');
  const fileName = `${hash}${getExtensionFromMime(mimeType)}`;
  const filePath = path.join(UPLOADS_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, buffer);
  }

  return `/uploads/${fileName}`;
}

function decodeHtmlDataUrl(dataUrl) {
  const parsed = parseDataUrl(dataUrl);
  if (!parsed) {
    return dataUrl;
  }

  const { payload, isBase64 } = parsed;
  return isBase64 ? Buffer.from(payload, 'base64').toString('utf8') : decodeURIComponent(payload);
}

function normalizeMediaValue(value, state) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeMediaValue(item, state));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, normalizeMediaValue(nestedValue, state)])
    );
  }

  if (typeof value === 'string' && value.startsWith('data:')) {
    if (value.startsWith('data:text/html')) {
      state.changed = true;
      return decodeHtmlDataUrl(value);
    }

    if (
      value.startsWith('data:image/') ||
      value.startsWith('data:video/') ||
      value.startsWith('data:audio/')
    ) {
      state.changed = true;
      return storeBinaryDataUrl(value);
    }
  }

  return value;
}

function ensureDatabaseShape(data) {
  return {
    comics: Array.isArray(data.comics) ? data.comics : [],
    illustrations: Array.isArray(data.illustrations) ? data.illustrations : [],
    profile: data.profile && typeof data.profile === 'object' ? data.profile : {},
    settings: data.settings && typeof data.settings === 'object' ? data.settings : {},
  };
}

function loadDatabase() {
  if (!fs.existsSync(DB_PATH)) {
    return ensureDatabaseShape({ comics: [], illustrations: [], profile: {}, settings: {} });
  }

  const raw = fs.readFileSync(DB_PATH, 'utf8');
  const parsed = raw.trim() ? JSON.parse(raw) : {};
  const state = { changed: false };
  const normalized = normalizeMediaValue(ensureDatabaseShape(parsed), state);

  if (state.changed) {
    fs.writeFileSync(DB_PATH, `${JSON.stringify(normalized, null, 2)}\n`);
  }

  return normalized;
}

let dbState = loadDatabase();

function persistDatabase() {
  fs.writeFileSync(DB_PATH, `${JSON.stringify(dbState, null, 2)}\n`);
}

app.use(cors());
app.use(express.json({ limit: '50mb' })); // Base64 이미지를 처리하기 위해 제한 상향
app.use('/uploads', express.static(UPLOADS_DIR));

// API 라우트
app.get('/api/data', (req, res) => {
  res.json(dbState);
});

app.post('/api/upload/comic', (req, res) => {
  const state = { changed: false };
  const comic = normalizeMediaValue(req.body, state);

  dbState.comics.push({ ...comic, id: Date.now().toString() });
  persistDatabase();
  res.json({ success: true, message: 'Comic uploaded successfully' });
});

app.post('/api/upload/illustration', (req, res) => {
  const state = { changed: false };
  const illustration = normalizeMediaValue(req.body, state);

  dbState.illustrations.push({ ...illustration, id: Date.now().toString() });
  persistDatabase();
  res.json({ success: true, message: 'Illustration uploaded successfully' });
});

app.post('/api/profile', (req, res) => {
  const state = { changed: false };
  const profile = normalizeMediaValue(req.body, state);

  dbState.profile = profile;
  persistDatabase();
  res.json({ success: true, message: 'Profile updated successfully' });
});

app.all('*', (req, res) => {
  return handleNextRequests(req, res);
});

frontendApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
