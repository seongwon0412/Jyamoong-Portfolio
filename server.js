const express = require('express');
const cors = require('cors');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');
const next = require('next');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== 'production';
const frontendDir = isDev ? path.join(__dirname, '..', 'frontend') : __dirname;
const frontendApp = next({ dev: isDev, dir: frontendDir });
const handleNextRequests = frontendApp.getRequestHandler();

// DB 설정
const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db = low(adapter);

// 기본 데이터 구조 설정
db.defaults({ comics: [], illustrations: [], profile: {}, settings: {} }).write();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // Base64 이미지를 처리하기 위해 제한 상향

// API 라우트
app.get('/api/data', (req, res) => {
  const data = db.value();
  res.json(data);
});

app.post('/api/upload/comic', (req, res) => {
  const comic = req.body;
  db.get('comics')
    .push({ ...comic, id: Date.now().toString() })
    .write();
  res.json({ success: true, message: 'Comic uploaded successfully' });
});

app.post('/api/upload/illustration', (req, res) => {
  const illustration = req.body;
  db.get('illustrations')
    .push({ ...illustration, id: Date.now().toString() })
    .write();
  res.json({ success: true, message: 'Illustration uploaded successfully' });
});

app.post('/api/profile', (req, res) => {
  const profile = req.body;
  db.set('profile', profile).write();
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
