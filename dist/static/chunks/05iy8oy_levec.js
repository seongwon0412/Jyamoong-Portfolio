(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38863,e=>{"use strict";var t=e.i(43476),s=e.i(71645);e.s(["MediaRenderer",0,function e({src:a,images:r,htmlLogs:l,alt:i="",className:n=""}){if(r||l)return(0,t.jsxs)("div",{className:`flex flex-col items-center w-full gap-4 ${n}`,children:[r?.map((s,a)=>(0,t.jsx)(e,{src:s,alt:`${i} - ${a}`},`img-${a}`)),l?.map((s,a)=>(0,t.jsx)(e,{src:s.startsWith("data:")?s:`data:text/html;charset=utf-8,${encodeURIComponent(s)}`,alt:`${i} - log ${a}`},`html-${a}`))]});let o=a?.startsWith("data:video"),d=a?.startsWith("data:text/html")||a&&!a.startsWith("data:")&&(a.includes("<p")||a.includes("<div")),[c,m]=(0,s.useState)(null),[x,u]=(0,s.useState)(null),[p,h]=(0,s.useState)(null);if((0,s.useEffect)(()=>{if(d)try{let e=a.split(",").slice(1).join(","),t=a.includes(";base64,")?(()=>{try{return decodeURIComponent(escape(atob(e)))}catch{return atob(e)}})():decodeURIComponent(e),s=t.match(/<!--\s*LOG_META:([A-Za-z0-9+/=]+)\s*-->/);if(s?.[1])try{let e=decodeURIComponent(escape(atob(s[1])));h(JSON.parse(e))}catch{h(null)}else h(null);let r=t.replace(/<!--\s*LOG_META:[\s\S]*?-->/g,""),l=new DOMParser().parseFromString(r,"text/html"),i=Array.from(l.querySelectorAll("p"));if(i.length>0){let e=i.map(e=>{let t=e.style.color||"#333333",s=Array.from(e.querySelectorAll("span"));if(!(s.length>=3))return{tab:"system",name:"System",color:"#888888",text:e.innerHTML};{let e=s[0].textContent?.trim()||"",a=s[1].textContent||"";a=a.replace(/ :$/,"").trim();let r=s.slice(2).map(e=>e.innerHTML).join("");return{tab:e,name:a,color:t,text:r}}});u(e)}else m(t)}catch(e){console.error("Failed to parse CCfolia HTML",e)}},[a,d]),o){let e=n.includes("object-cover")||n.includes("opacity");return(0,t.jsx)("video",{src:a,controls:!e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:n||"max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"})}if(d){if(x){let e=p?.thumbnails||{},s=p?.bgImage||"",a=[];x.forEach(e=>{let t=e.tab.replace(/\[|\]/g,"").trim()||"main",s="main"===t.toLowerCase()||"메인"===t,r="정보"===t||t.toLowerCase().includes("info");if("system"===t.toLowerCase()||"#888888"===e.color||/(CC<=\s*\d+|choice|\b\d+d\d+\b)/i.test(e.text))return void a.push({kind:"system",tab:t,entries:[e]});let l=a[a.length-1],i=r?"info":"group";if(l&&l.kind===i&&l.tab===t?l.entries.push(e):a.push({kind:i,tab:t,entries:[e]}),s&&l&&"group"===l.kind&&l.tab===t)return});let r=s=>{let a=e[s.name]||"";return(0,t.jsxs)("article",{className:"rounded-2xl border border-border/70 bg-card/95 shadow-sm overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 px-4 py-3 border-b border-border/40",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-xl bg-muted flex items-center justify-center bg-cover bg-center shrink-0 border border-border/10 shadow-sm",style:a?{backgroundImage:`url(${a})`}:void 0,children:!a&&(0,t.jsx)("span",{className:"text-[10px] text-muted-foreground/60",children:"No img"})}),(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("div",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 leading-none mb-1",children:s.tab.replace(/\[|\]/g,"").trim()||"MAIN"}),(0,t.jsx)("div",{className:"text-[15px] font-black leading-tight break-words",style:{color:s.color},children:s.name||"Unknown"})]})]}),(0,t.jsx)("div",{className:"px-4 py-4 text-[15px] leading-relaxed text-foreground/90 break-words ccfolia-text",dangerouslySetInnerHTML:{__html:s.text}})]})};return(0,t.jsxs)("div",{className:`w-full max-w-4xl mx-auto rounded-lg text-foreground flex flex-col ${n}`,style:{fontFamily:'"Malgun Gothic", "Apple SD Gothic Neo", sans-serif',backgroundImage:s?`url(${s})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`
            .ccfolia-text img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              margin: 12px 0;
              box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            }
            .log-avatar {
              width: 40px;
              height: 40px;
              border-radius: 12px;
              background-size: cover;
              background-position: center;
              background-color: rgb(226 232 240);
              flex-shrink: 0;
            }
          `}}),(0,t.jsx)("div",{className:"w-full space-y-4 bg-background/80 backdrop-blur-sm rounded-xl p-3 md:p-4",children:a.map((e,s)=>"system"===e.kind?(0,t.jsx)("div",{className:"flex w-full justify-center py-2",children:(0,t.jsxs)("div",{className:"w-full max-w-[820px] rounded-2xl border border-slate-700/15 bg-gradient-to-br from-slate-900 to-slate-800 px-5 py-4 text-slate-50 shadow-lg overflow-hidden",children:[(0,t.jsx)("div",{className:"mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-200/70",children:"system"===e.tab?"SYSTEM":e.tab}),(0,t.jsx)("div",{className:"text-[15px] leading-relaxed break-words overflow-wrap-anywhere ccfolia-text",style:{color:"inherit"},dangerouslySetInnerHTML:{__html:e.entries[0].text}})]})},`${e.tab}-${s}`):"info"===e.kind?(0,t.jsxs)("section",{className:"rounded-2xl border-2 shadow-sm overflow-hidden",style:{borderColor:e.entries[0].color,background:"rgba(239, 246, 255, 0.72)"},children:[(0,t.jsx)("div",{className:"px-5 pt-4 pb-2 flex items-center gap-3 border-b",style:{borderBottomColor:`${e.entries[0].color}30`},children:(0,t.jsx)("span",{className:"text-[11px] font-bold px-2.5 py-1 rounded-full bg-background border uppercase tracking-[0.18em]",style:{color:e.entries[0].color},children:e.tab})}),(0,t.jsx)("div",{className:"p-4 grid gap-3",children:e.entries.map((a,l)=>(0,t.jsx)("div",{children:r(a)},`${e.tab}-${s}-${l}`))})]},`${e.tab}-${s}`):"main"===e.tab.toLowerCase()||"메인"===e.tab?(0,t.jsxs)("div",{className:"group rounded-2xl border border-border/70 bg-muted/20 overflow-hidden shadow-sm",children:[(0,t.jsxs)("div",{className:"px-5 py-4 flex items-center gap-3 select-none bg-gradient-to-r from-white to-slate-50",children:[(0,t.jsx)("span",{className:"text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white uppercase tracking-[0.18em]",children:e.tab}),(0,t.jsxs)("span",{className:"text-sm font-semibold text-muted-foreground",children:[e.entries[0].name," ",e.entries.length>1?`외 ${e.entries.length-1}개의 대화`:""]})]}),(0,t.jsx)("div",{className:"p-4 grid gap-3 border-t border-border/50 bg-background/85",children:e.entries.map((a,l)=>(0,t.jsx)("div",{children:r(a)},`${e.tab}-${s}-${l}`))})]},`${e.tab}-${s}`):(0,t.jsxs)("details",{className:"group rounded-2xl border border-border/70 bg-muted/20 overflow-hidden shadow-sm",open:e.entries.length<5,children:[(0,t.jsxs)("summary",{className:"cursor-pointer list-none px-5 py-4 flex items-center gap-3 select-none bg-gradient-to-r from-white to-slate-50",children:[(0,t.jsx)("span",{className:"text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white uppercase tracking-[0.18em]",children:e.tab}),(0,t.jsxs)("span",{className:"text-sm font-semibold text-muted-foreground",children:[e.entries[0].name," ",e.entries.length>1?`외 ${e.entries.length-1}개의 대화`:""]}),(0,t.jsx)("span",{className:"ml-auto text-xs font-bold text-slate-400 group-open:hidden",children:"펼치기"}),(0,t.jsx)("span",{className:"ml-auto text-xs font-bold text-slate-400 hidden group-open:inline",children:"접기"})]}),(0,t.jsx)("div",{className:"p-4 grid gap-3 border-t border-border/50 bg-background/85",children:e.entries.map((a,l)=>(0,t.jsx)("div",{children:r(a)},`${e.tab}-${s}-${l}`))})]},`${e.tab}-${s}`))})]})}return(0,t.jsx)("div",{className:`overflow-hidden rounded-lg bg-white shadow-xl ${n}`,style:{width:"100%",maxWidth:"800px",margin:"0 auto",height:"auto",minHeight:"80vh"},children:(0,t.jsx)("iframe",{srcDoc:c||"",className:"w-full h-full min-h-[80vh] border-none",title:i,sandbox:"allow-same-origin allow-scripts"})})}let g=n||"max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl";return(0,t.jsx)("img",{src:a,alt:i,className:g})}])},71689,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,t],71689)},84762,69074,7233,e=>{"use strict";var t=e.i(43476),s=e.i(47163);e.s(["Textarea",0,function({className:e,...a}){return(0,t.jsx)("textarea",{"data-slot":"textarea",className:(0,s.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...a})}],84762);var a=e.i(75254);let r=(0,a.default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);e.s(["Upload",0,r],69074);let l=(0,a.default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",0,l],7233)},56909,e=>{"use strict";let t=(0,e.i(75254).default)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);e.s(["Save",0,t],56909)},86536,e=>{"use strict";let t=(0,e.i(75254).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",0,t],86536)},35501,e=>{"use strict";var t=e.i(3408);e.s(["ImageIcon",()=>t.default])},52001,50570,86817,20682,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(4421),r=e.i(67881),l=e.i(23750),i=e.i(84762),n=e.i(10708),o=e.i(69074),d=e.i(37727),c=e.i(56909);let m=(0,e.i(75254).default)("grip-vertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);e.s(["GripVertical",0,m],50570);var x=e.i(86536),u=e.i(38863),p=e.i(78745),p=p,h=e.i(35501),g=e.i(30374);function b(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function f({isOpen:e,onClose:a,htmlText:l,onComplete:i}){let[n,o]=(0,s.useState)({}),[d,c]=(0,s.useState)(""),m=(0,s.useRef)(null),x=(0,s.useRef)({}),{entries:u,speakers:v}=(0,s.useMemo)(()=>{let e,t,s;return e=new DOMParser().parseFromString(l,"text/html"),t=[],s=new Set,e.querySelectorAll("p").forEach(e=>{var a;let r=e.style.color||"#333333",l=e.querySelectorAll("span"),i="MAIN",n="System",o="";if(l.length>=3)i=l[0].textContent?.trim().replace(/\[|\]/g,"")||"MAIN",n=l[1].textContent?.replace(/ :$/,"").trim()||"Unknown",o=Array.from(l).slice(2).map(e=>e.innerHTML).join("");else{let t=e.textContent||"",s=t.match(/\[(.*?)\]\s*(.*?)\s*:\s*(.*)/);s?(i=s[1]||"MAIN",n=s[2]?.trim()||"Unknown",o=s[3]||""):o=e.innerHTML||t}n&&s.add(n),t.push({tab:i,name:n,color:r,text:o,isSystem:(a=o,/(CC<=\s*\d+|choice|\b\d+d\d+\b)/i.test(a))})}),{entries:t,speakers:Array.from(s)}},[l]),j=(0,s.useMemo)(()=>{let e,t,s,a;return l?(e=l.replace(/<!--\s*LOG_META:[\s\S]*?-->/g,""),t=btoa(unescape(encodeURIComponent(JSON.stringify({thumbnails:n,bgImage:d})))),s=e.includes("</body>")?"\n":"\n\n",a=`${e}${s}<!-- LOG_META:${t} -->`,`data:text/html;charset=utf-8,${encodeURIComponent(a)}`):""},[l,n,d]),y=(0,s.useMemo)(()=>l?function(e,t,s){let a=[];for(let t of e){let e=(t.tab||"MAIN").trim(),s=e.toLowerCase().includes("info")||"정보"===e;if(t.isSystem){a.push({tab:e,entries:[t],isSystem:!0,isInfo:!1});continue}let r=a[a.length-1];r&&!r.isSystem&&r.tab===e?r.entries.push(t):a.push({tab:e,entries:[t],isSystem:!1,isInfo:s})}let r=Object.entries(t).filter(([,e])=>!!e),l=r.map(([e,t],s)=>`.speaker-thumb-${s} { background-image: url('${t}'); }`).join("\n"),i=new Map(r.map(([e],t)=>[e,`speaker-thumb-${t}`])),n=e=>{let t=i.get(e.name),s=t?`<div class="log-avatar ${t}"></div>`:'<div class="log-avatar log-avatar--empty"></div>';return`
      <article class="message-card">
        <div class="message-head">
          ${s}
          <div class="message-meta">
            <div class="message-tab">${b(e.tab||"MAIN")}</div>
            <div class="message-name" style="color:${b(e.color)}">${b(e.name||"Unknown")}</div>
          </div>
        </div>
        <div class="message-body ccfolia-text" style="color:${b(e.color)}">${e.text}</div>
      </article>
    `},o=a.map(e=>e.isSystem?`
        <section class="system-wrap">
          <div class="system-card ccfolia-text">${e.entries[0].text}</div>
        </section>
      `:e.isInfo?`
        <section class="info-panel">
          <header class="info-head">
            <span class="info-badge">${b(e.tab)}</span>
          </header>
          <div class="message-stack">
            ${e.entries.map(n).join("")}
          </div>
        </section>
      `:"MAIN"===e.tab.toUpperCase()?`
        <section class="tab-group">
          <div class="tab-summary no-arrow" style="cursor: default;">${b(e.tab)}</div>
          <div class="message-stack">
            ${e.entries.map(n).join("")}
          </div>
        </section>
      `:`
      <details class="tab-group" open>
        <summary class="tab-summary">${b(e.tab)}</summary>
        <div class="message-stack">
          ${e.entries.map(n).join("")}
        </div>
      </details>
    `).join("\n");return`
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>HTML 로그 미리보기</title>
<style>
  ${l}
  :root {
    color-scheme: light;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: "Malgun Gothic", "Apple SD Gothic Neo", system-ui, sans-serif;
    background: ${s?`url('${s}') center/cover fixed`:"#f7f4ee"};
    color: #151515;
  }
  .page-shell {
    min-height: 100vh;
    padding: 28px 18px 40px;
    background: ${s?"rgba(247, 244, 238, 0.68)":"transparent"};
    backdrop-filter: blur(10px);
  }
  .log-container {
    width: min(920px, 100%);
    margin: 0 auto;
    display: grid;
    gap: 16px;
  }
  .tab-group {
    border: 1px solid rgba(15, 23, 42, 0.12);
    border-radius: 20px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  }
  .tab-summary {
    list-style: none;
    cursor: pointer;
    padding: 16px 20px;
    font-weight: 800;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(90deg, rgba(255,255,255,0.95), rgba(246,242,235,0.95));
  }
  .tab-summary::before {
    content: '▸';
    transition: transform .2s ease;
  }
  .tab-group[open] .tab-summary::before {
    transform: rotate(90deg);
  }
  .tab-summary.no-arrow::before {
    display: none;
  }
  .message-stack {
    padding: 18px 18px 20px;
    display: grid;
    gap: 14px;
  }
  .message-card {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
    overflow: hidden;
  }
  .message-head {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 16px 10px;
  }
  .log-avatar {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
    border: 1px solid rgba(15, 23, 42, 0.08);
  }
  .log-avatar--empty {
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
  }
  .message-meta { min-width: 0; }
  .message-tab {
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(15, 23, 42, 0.55);
    margin-bottom: 4px;
  }
  .message-name {
    font-size: 16px;
    font-weight: 900;
    line-height: 1.2;
    word-break: break-word;
  }
  .message-body {
    padding: 0 16px 16px 74px;
    font-size: 15px;
    line-height: 1.75;
    word-break: break-word;
    overflow-wrap: anywhere;
  }
  .info-panel {
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    background: rgba(239, 246, 255, 0.88);
    box-shadow: 0 16px 40px rgba(59, 130, 246, 0.08);
    overflow: hidden;
  }
  .info-head {
    padding: 16px 20px 0;
  }
  .info-badge {
    display: inline-flex;
    align-items: center;
    padding: 7px 12px;
    border-radius: 999px;
    background: #0f172a;
    color: white;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .08em;
  }
  .system-wrap {
    display: flex;
    justify-content: center;
  }
  .system-card {
    width: min(100%, 720px);
    border: 1px solid rgba(59, 130, 246, 0.26);
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
    color: #f8fafc;
    padding: 16px 18px;
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.16);
    text-align: left;
    overflow-wrap: anywhere;
  }
  .ccfolia-text img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
    margin: 10px 0;
  }
  @media (max-width: 720px) {
    .page-shell { padding: 18px 12px 30px; }
    .message-body { padding-left: 16px; }
    .message-head { padding: 14px 14px 10px; }
  }
</style>
</head>
<body>
  <div class="page-shell">
    <div class="log-container">
      ${o}
    </div>
  </div>
</body>
</html>
`}(u,n,d):"",[u,l,n,d]);(0,s.useEffect)(()=>{e||(o({}),c(""))},[e]);let w=()=>{if(!y)return;let e=window.open("","_blank","noopener,noreferrer,width=1280,height=960");e&&(e.document.open(),e.document.write(y),e.document.close())};return(0,t.jsx)(g.Dialog,{open:e,onOpenChange:e=>!e&&a(),children:(0,t.jsxs)(g.DialogContent,{className:"max-w-5xl max-h-[90vh] overflow-y-auto",children:[(0,t.jsx)(g.DialogHeader,{children:(0,t.jsx)(g.DialogTitle,{children:"HTML 로그 변환 설정"})}),(0,t.jsxs)("div",{className:"grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]",children:[(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:"font-semibold text-lg border-b pb-2",children:"배경 이미지 설정"}),(0,t.jsx)("input",{type:"file",accept:"image/*",className:"hidden",ref:m,onChange:e=>{var t;let s;e.target.files?.[0]&&(t=e.target.files[0],(s=new FileReader).onload=e=>{c(e.target?.result)},s.readAsDataURL(t)),e.target.value=""}}),(0,t.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,t.jsxs)(r.Button,{variant:"outline",onClick:()=>m.current?.click(),children:[(0,t.jsx)(h.ImageIcon,{className:"w-4 h-4 mr-2"}),"배경 이미지 선택"]}),d&&(0,t.jsxs)("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[(0,t.jsx)(p.default,{className:"w-4 h-4 text-green-500"}),"설정됨",(0,t.jsx)(r.Button,{variant:"ghost",size:"sm",onClick:()=>c(""),children:"취소"})]})]}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"설정하지 않으면 기본 흰색 배경이 사용됩니다."})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:"font-semibold text-lg border-b pb-2",children:"발언자 썸네일 설정"}),(0,t.jsx)("div",{className:"space-y-3 max-h-[42vh] overflow-y-auto pr-1",children:v.length>0?v.map(e=>(0,t.jsxs)("div",{className:"flex items-center gap-3 p-3 border rounded-lg bg-muted/20",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-lg bg-muted flex items-center justify-center bg-cover bg-center shrink-0 border",style:{backgroundImage:n[e]?`url('${n[e]}')`:"none"},children:!n[e]&&(0,t.jsx)("span",{className:"text-[10px] text-muted-foreground",children:"No img"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"font-medium text-sm truncate",title:e,children:e}),(0,t.jsx)("input",{type:"file",accept:"image/*",className:"hidden",ref:t=>{x.current[e]=t},onChange:t=>{var s;let a;t.target.files?.[0]&&(s=t.target.files[0],(a=new FileReader).onload=t=>{o(s=>({...s,[e]:t.target?.result}))},a.readAsDataURL(s)),t.target.value=""}}),(0,t.jsx)(r.Button,{variant:"secondary",size:"sm",className:"text-xs h-7 mt-1 w-full",onClick:()=>x.current[e]?.click(),children:"이미지 업로드"})]})]},e)):(0,t.jsx)("div",{className:"rounded-lg border border-dashed p-4 text-sm text-muted-foreground",children:"발언자 정보를 읽는 중입니다. HTML 구조에 따라 일부 이름은 수동 표시될 수 있습니다."})})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-2 pt-2 border-t flex-wrap",children:[(0,t.jsx)(r.Button,{variant:"secondary",onClick:w,disabled:!y,children:"새 창 미리보기"}),(0,t.jsx)(r.Button,{variant:"outline",onClick:a,children:"취소"}),(0,t.jsx)(r.Button,{onClick:()=>{i(j)},className:"bg-primary text-primary-foreground",children:"변환 및 적용완료"})]})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,t.jsx)("h3",{className:"font-semibold text-lg",children:"미리보기 안내"}),(0,t.jsx)("span",{className:"text-xs text-muted-foreground",children:"화면이 넓은 새 창에서 확인합니다."})]}),(0,t.jsxs)("div",{className:"rounded-xl border bg-muted/20 p-6 shadow-sm min-h-[68vh] flex flex-col items-center justify-center text-center gap-4",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-background border flex items-center justify-center shadow-sm",children:(0,t.jsx)(h.ImageIcon,{className:"w-8 h-8 text-primary"})}),(0,t.jsxs)("div",{className:"space-y-2 max-w-md",children:[(0,t.jsx)("p",{className:"font-semibold text-lg",children:"미리보기는 새 창에서 열립니다"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"썸네일, 배경, 연속 탭 그룹, 시스템 판정 레이아웃을 포함한 전체 결과를 넓은 화면으로 확인할 수 있습니다."})]}),(0,t.jsx)(r.Button,{onClick:w,disabled:!y,children:"새 창 미리보기 열기"})]})]})]})]})})}e.s(["HtmlLogPreview",0,f],86817);let v=0,j=new Map,y=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),k({type:"REMOVE_TOAST",toastId:e})},1e6);j.set(e,t)},w=[],N={toasts:[]};function k(e){N=((e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?y(s):e.toasts.forEach(e=>{y(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}})(N,e),w.forEach(e=>{e(N)})}function S({...e}){let t=(v=(v+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>k({type:"DISMISS_TOAST",toastId:t});return k({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||s()}}}),{id:t,dismiss:s,update:e=>k({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function C(){let[e,t]=s.useState(N);return s.useEffect(()=>(w.push(t),()=>{let e=w.indexOf(t);e>-1&&w.splice(e,1)}),[e]),{...e,toast:S,dismiss:e=>k({type:"DISMISS_TOAST",toastId:e})}}e.s(["useToast",0,C],20682),e.s(["ComicUploadForm",0,function({type:e,initialType:p,category:h,initialCategory:g,initialData:b,onClose:v,onSuccess:j}){let{addComic:y,updateComic:w}=(0,a.useAppStore)(),{toast:N}=C(),k=!!b,S=e||p||"short",$=h||g||"",[M,T]=(0,s.useState)(b?.title||""),[A,I]=(0,s.useState)(b?.description||""),[D,z]=(0,s.useState)(b?.images||[]),[O,L]=(0,s.useState)(!1),[R,U]=(0,s.useState)(null),[E,_]=(0,s.useState)([]),P=(0,s.useRef)(null),H=(0,s.useRef)(null),B=(0,s.useRef)(null),F=(e,t)=>{z(s=>{let a=[...s],[r]=a.splice(e,1);return a.splice(t,0,r),a})},G=()=>{null!==H.current&&null!==B.current&&H.current!==B.current&&F(H.current,B.current),H.current=null,B.current=null},q=e=>{e.preventDefault()},V=async e=>{e.preventDefault(),M.trim()&&0!==D.length&&(L(!0),await new Promise(e=>setTimeout(e,500)),k&&b?w(b.id,{title:M.trim(),description:A.trim(),thumbnailUrl:D[0],images:D,type:S,category:$}):y({id:Date.now().toString(),title:M.trim(),description:A.trim(),thumbnailUrl:D[0],images:D,type:S,category:$,createdAt:new Date().toISOString()}),N({title:k?"작품이 수정되었습니다.":"새 작품이 업로드되었습니다.",description:"작업을 성공적으로 저장했습니다."}),T(""),I(""),z([]),L(!1),j&&j(),v&&v())};return(0,t.jsxs)("div",{className:"p-6 rounded-2xl bg-card border border-border",children:[E.length>0&&(0,t.jsx)(f,{isOpen:!0,onClose:()=>_(e=>e.slice(1)),htmlText:E[0].text,onComplete:e=>{z(t=>[...t,e]),_(e=>e.slice(1))}}),R&&(0,t.jsxs)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-background/90 backdrop-blur-sm",onClick:()=>U(null)}),(0,t.jsxs)("div",{className:"relative z-10 w-full max-w-5xl h-full max-h-[90vh] flex flex-col bg-card rounded-2xl shadow-2xl border cursor-auto overflow-hidden",children:[(0,t.jsxs)("div",{className:"shrink-0 flex items-center justify-between p-4 border-b bg-muted/30",children:[(0,t.jsx)("h3",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wider",children:"미리보기 (Preview)"}),(0,t.jsx)("button",{type:"button",onClick:()=>U(null),className:"p-2 hover:bg-muted rounded-lg transition-colors",children:(0,t.jsx)(d.X,{className:"w-5 h-5"})})]}),(0,t.jsx)("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 bg-muted/10",children:(0,t.jsx)(u.MediaRenderer,{src:R,alt:"미리보기 화면",className:"max-w-4xl mx-auto w-full"})})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold",children:k?"작품 수정":`새 ${"long"===S?"로그 백업/작품":"단편만화"} 업로드`}),(0,t.jsx)("button",{onClick:v,className:"p-1 hover:bg-muted rounded-lg",children:(0,t.jsx)(d.X,{className:"w-5 h-5"})})]}),(0,t.jsxs)("form",{onSubmit:V,className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n.Label,{htmlFor:"title",children:"제목"}),(0,t.jsx)(l.Input,{id:"title",value:M,onChange:e=>T(e.target.value),placeholder:"제목을 입력하세요",className:"bg-input",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n.Label,{htmlFor:"description",children:"설명"}),(0,t.jsx)(i.Textarea,{id:"description",value:A,onChange:e=>I(e.target.value),placeholder:"작품에 대한 설명을 작성하세요",rows:3,className:"resize-none bg-input"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n.Label,{children:"페이지 콘텐츠 (webp, jpg, png, apng, gif, mp4, html 등 허용)"}),(0,t.jsx)("input",{ref:P,type:"file",accept:".webp,.jpg,.jpeg,.png,.apng,.gif,.mp4,.html,.htm,image/*,video/mp4,text/html",multiple:!0,onChange:e=>{Array.from(e.target.files||[]).forEach((e,t)=>{if("text/html"===e.type||e.name.endsWith(".html")||e.name.endsWith(".htm")){let s=new FileReader;s.onload=e=>{_(s=>[...s,{text:e.target?.result,fileIndex:t}])},s.readAsText(e)}else{let t=new FileReader;t.onload=e=>{let t=e.target?.result;z(e=>[...e,t])},t.readAsDataURL(e)}}),e.target.value=""},className:"hidden"}),(0,t.jsxs)("div",{className:"space-y-2",children:[D.map((e,s)=>(0,t.jsxs)("div",{draggable:!0,onDragStart:()=>{H.current=s},onDragEnter:()=>{B.current=s},onDragEnd:G,onDragOver:q,className:"flex items-center gap-2 p-2 rounded-lg bg-muted/50 cursor-move hover:bg-muted transition-colors",children:[(0,t.jsx)(m,{className:"w-4 h-4 text-muted-foreground"}),(0,t.jsx)("div",{className:"w-12 h-16 object-cover rounded overflow-hidden drag-none pointer-events-none",children:(0,t.jsx)(u.MediaRenderer,{src:e,alt:`페이지 ${s+1}`,className:"w-full h-full object-cover"})}),(0,t.jsxs)("div",{className:"flex-1 pointer-events-none",children:[(0,t.jsxs)("span",{className:"text-sm font-medium",children:["페이지 ",s+1]}),0===s&&(0,t.jsx)("span",{className:"ml-2 text-xs px-1.5 py-0.5 rounded bg-primary text-primary-foreground",children:"썸네일"})]}),(0,t.jsxs)("div",{className:"flex gap-1",children:[s>0&&(0,t.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),F(s,s-1)},className:"p-1 text-xs hover:bg-muted-foreground/20 rounded cursor-pointer",children:"위로"}),s<D.length-1&&(0,t.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),F(s,s+1)},className:"p-1 text-xs hover:bg-muted-foreground/20 rounded cursor-pointer",children:"아래로"}),(0,t.jsx)("button",{type:"button",onClick:t=>{t.stopPropagation(),U(e)},className:"p-1 text-primary hover:bg-primary/10 rounded cursor-pointer",title:"미리보기",children:(0,t.jsx)(x.Eye,{className:"w-4 h-4"})}),(0,t.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),z(e=>e.filter((e,t)=>t!==s))},className:"p-1 text-destructive hover:bg-destructive/10 rounded cursor-pointer",children:(0,t.jsx)(d.X,{className:"w-4 h-4"})})]})]},s)),(0,t.jsxs)("button",{type:"button",onClick:()=>P.current?.click(),className:"w-full p-4 rounded-lg border-2 border-dashed border-border hover:border-primary flex items-center justify-center gap-2 transition-colors",children:[(0,t.jsx)(o.Upload,{className:"w-5 h-5 text-muted-foreground"}),(0,t.jsx)("span",{className:"text-sm text-muted-foreground",children:"이미지 추가"})]})]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"첫 번째 이미지가 썸네일로 사용됩니다. 업로드된 이미지는 자동으로 최적화됩니다. (드래그하여 순서 변경 가능)"})]}),(0,t.jsxs)("div",{className:"flex justify-end gap-2 pt-2",children:[(0,t.jsx)(r.Button,{type:"button",variant:"outline",onClick:v,children:"취소"}),(0,t.jsxs)(r.Button,{type:"submit",disabled:O||!M.trim()||0===D.length,children:[(0,t.jsx)(c.Save,{className:"w-4 h-4 mr-2"}),O?"저장 중...":k?"수정 완료":"업로드"]})]})]})]})}],52001)},78745,27612,e=>{"use strict";var t=e.i(75254);let s=(0,t.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["default",0,s],78745);let a=(0,t.default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",0,a],27612)},99219,e=>{"use strict";let t=(0,e.i(75254).default)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);e.s(["default",0,t])},31171,e=>{"use strict";let t=(0,e.i(75254).default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["default",0,t])},14764,e=>{"use strict";let t=(0,e.i(75254).default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);e.s(["Send",0,t],14764)},43522,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(37727),r=e.i(99219),r=r,l=e.i(31171),l=l,i=e.i(4421),n=e.i(67881),o=e.i(23750),d=e.i(84762);let c=(0,e.i(75254).default)("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]);var m=e.i(14764),x=e.i(27612);function u({postId:e,postType:a}){let{comments:r,addComment:l,removeComment:p,isAdmin:h}=(0,i.useAppStore)(),[g,b]=(0,s.useState)(""),[f,v]=(0,s.useState)(""),j=r.filter(t=>t.postId===e&&t.postType===a);return(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)(c,{className:"w-4 h-4 text-muted-foreground"}),(0,t.jsxs)("span",{className:"text-sm font-medium",children:["댓글 ",j.length,"개"]})]}),(0,t.jsxs)("form",{onSubmit:t=>{t.preventDefault(),g.trim()&&f.trim()&&(l({id:Date.now().toString(),postId:e,postType:a,author:g.trim(),content:f.trim(),createdAt:new Date().toISOString()}),v(""))},className:"mb-4 space-y-2",children:[(0,t.jsx)(o.Input,{value:g,onChange:e=>b(e.target.value),placeholder:"닉네임",className:"text-sm bg-input"}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(d.Textarea,{value:f,onChange:e=>v(e.target.value),placeholder:"댓글을 작성하세요...",rows:2,className:"resize-none text-sm bg-input flex-1"}),(0,t.jsx)(n.Button,{type:"submit",size:"icon",disabled:!g.trim()||!f.trim(),children:(0,t.jsx)(m.Send,{className:"w-4 h-4"})})]})]}),(0,t.jsx)("div",{className:"space-y-3",children:j.length>0?j.map(e=>(0,t.jsxs)("div",{className:"p-3 rounded-xl bg-muted/50",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,t.jsx)("span",{className:"text-sm font-medium",children:e.author}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-xs text-muted-foreground",children:new Date(e.createdAt).toLocaleDateString("ko-KR")}),h&&(0,t.jsx)("button",{onClick:()=>p(e.id),className:"p-1 text-destructive hover:bg-destructive/10 rounded",children:(0,t.jsx)(x.Trash2,{className:"w-3 h-3"})})]})]}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground whitespace-pre-wrap",children:e.content})]},e.id)):(0,t.jsx)("p",{className:"text-sm text-muted-foreground text-center py-4",children:"아직 댓글이 없습니다. 첫 댓글을 남겨보세요!"})})]})}var p=e.i(38863);e.s(["ComicModal",0,function({comic:e,onClose:i}){let[n,o]=(0,s.useState)(0),[d,c]=(0,s.useState)(!1);return(0,t.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-foreground/90",onClick:i}),(0,t.jsxs)("div",{className:"relative w-full h-full flex flex-col",children:[(0,t.jsxs)("div",{className:"relative z-10 flex items-center justify-between p-4 bg-gradient-to-b from-foreground/50 to-transparent",children:[(0,t.jsxs)("div",{className:"text-card drop-shadow-md",children:[(0,t.jsx)("h2",{className:"text-lg font-bold",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-card/80",children:`${e.images.length}개의 포스트/미디어`})]}),(0,t.jsx)("button",{onClick:i,className:"p-2 rounded-xl bg-card/20 hover:bg-card/30 text-card transition-colors z-50",children:(0,t.jsx)(a.X,{className:"w-5 h-5"})})]}),(0,t.jsx)("div",{className:"flex-1 overflow-y-auto px-4 pb-24 relative flex flex-col items-center gap-0",children:e.images.map((s,a)=>(0,t.jsx)(p.MediaRenderer,{src:s,alt:`${e.title} - 미디어 ${a+1}`,className:"max-w-3xl w-full object-contain"},a))}),!1,(0,t.jsx)("button",{onClick:()=>c(!d),className:"absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-card text-foreground shadow-lg hover:shadow-xl transition-shadow",children:d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{className:"w-4 h-4"}),"댓글 닫기"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{className:"w-4 h-4"}),"댓글 보기"]})}),d&&(0,t.jsx)("div",{className:"absolute bottom-16 right-4 w-80 max-h-96 bg-card rounded-xl shadow-xl overflow-hidden",children:(0,t.jsx)("div",{className:"max-h-96 overflow-y-auto",children:(0,t.jsx)(u,{postId:e.id,postType:"comic"})})})]})]})}],43522)},51975,3116,e=>{"use strict";var t=e.i(75254);let s=(0,t.default)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);e.s(["Tag",0,s],51975);let a=(0,t.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",0,a],3116)},38197,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(53199),r=e.i(4421),l=e.i(52001),i=e.i(43522),n=e.i(7233),o=e.i(71689),d=e.i(84614),c=e.i(51975),m=e.i(3116),x=e.i(67881),u=e.i(22016),p=e.i(18566);e.s(["default",0,function(){let e=(0,p.useParams)().category,{comics:h,isAdmin:g,removeComic:b,categories:f}=(0,r.useAppStore)(),[v,j]=(0,s.useState)(!1),[y,w]=(0,s.useState)(null),N=f.find(t=>t.id===e),k=N?N.label:"웹툰/개인작",S=h.filter(t=>"short"===t.type&&t.category===e),C=S[S.length-1];return(0,t.jsxs)("div",{className:"min-h-screen bg-[#fcfcfc] dark:bg-background",children:[(0,t.jsx)(a.Sidebar,{}),(0,t.jsxs)("main",{className:"min-h-screen transition-all duration-300 pt-16 lg:pt-0 pb-20",children:[(0,t.jsx)("div",{className:"relative h-64 w-full overflow-hidden bg-slate-900 lg:h-80",children:C&&(0,t.jsxs)("div",{className:"absolute inset-0",children:[(0,t.jsx)("img",{src:C.thumbnailUrl,alt:"header-bg",className:"h-full w-full object-cover blur-2xl opacity-40 brightness-50"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-[#fcfcfc] dark:from-background via-transparent"})]})}),(0,t.jsxs)("div",{className:"mx-auto -mt-48 max-w-6xl px-4 sm:px-6 relative z-10",children:[(0,t.jsxs)(u.default,{href:"/comics/short",className:"mb-6 inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors",children:[(0,t.jsx)(o.ArrowLeft,{className:"mr-2 h-4 w-4"}),"전체 목록으로"]}),(0,t.jsxs)("div",{className:"flex flex-col gap-8 lg:flex-row",children:[(0,t.jsx)("div",{className:"w-full lg:w-[280px] shrink-0",children:(0,t.jsxs)("div",{className:"overflow-hidden rounded-xl border border-border/10 bg-white dark:bg-muted shadow-2xl",children:[(0,t.jsx)("div",{className:"aspect-[3/4] w-full relative",children:(0,t.jsx)("img",{src:C?.thumbnailUrl||"https://via.placeholder.com/300x400",alt:k,className:"h-full w-full object-cover"})}),(0,t.jsxs)("div",{className:"p-5",children:[(0,t.jsx)("h1",{className:"text-xl font-black tracking-tight text-slate-900 dark:text-white",children:k}),(0,t.jsxs)("div",{className:"mt-3 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,t.jsx)(d.User,{className:"h-4 w-4 text-slate-400"}),(0,t.jsx)("span",{className:"font-bold text-slate-700 dark:text-slate-300",children:"JYAMONG"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[(0,t.jsx)(c.Tag,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:C?"웹툰/만화":"작품 준비 중"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[(0,t.jsx)(m.Clock,{className:"h-4 w-4"}),(0,t.jsxs)("span",{children:[S.length,"개 에피소드"]})]})]}),g&&(0,t.jsxs)(x.Button,{className:"mt-6 w-full font-bold shadow-lg",onClick:()=>j(!v),children:[(0,t.jsx)(n.Plus,{className:"mr-2 h-4 w-4"}),"에피소드 업로드"]})]})]})}),(0,t.jsx)("div",{className:"flex-1",children:(0,t.jsxs)("div",{className:"bg-white dark:bg-muted rounded-xl border border-border shadow-sm p-1",children:[(0,t.jsx)("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border",children:(0,t.jsxs)("span",{className:"text-sm font-bold text-slate-900 dark:text-white",children:["전체 (",S.length,")"]})}),(0,t.jsxs)("div",{className:"divide-y divide-border",children:[S.slice().reverse().map((e,s)=>{let a;return(0,t.jsxs)("div",{onClick:()=>w(e),className:"group flex items-center gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors",children:[(0,t.jsx)("div",{className:"relative w-24 aspect-[4/3] rounded-md overflow-hidden bg-slate-100 shrink-0 border border-border/50",children:(0,t.jsx)("img",{src:e.thumbnailUrl||"https://via.placeholder.com/300x400",alt:e.title,className:"w-full h-full object-cover transition-transform group-hover:scale-105"})}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("h3",{className:"font-bold text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-blue-600 transition-colors",children:e.title}),(0,t.jsxs)("div",{className:"mt-1 flex items-center gap-3 text-[12px] text-slate-500",children:[(0,t.jsx)("span",{children:(a=e.updatedAt??e.createdAt)?a.split("T")[0]:"날짜 없음"}),(0,t.jsx)("span",{className:"w-0.5 h-0.5 rounded-full bg-slate-300"}),(0,t.jsxs)("span",{children:[e.images.length,"p"]})]})]}),g&&(0,t.jsx)(x.Button,{variant:"ghost",size:"icon",className:"opacity-0 group-hover:opacity-100 text-destructive hover:bg-destructive/10",onClick:t=>{var s;return s=e.id,void(t.stopPropagation(),confirm("정말로 이 만화를 삭제하시겠습니까?")&&b(s))},children:(0,t.jsx)(n.Plus,{className:"h-4 w-4 rotate-45"})})]},e.id)}),0===S.length&&(0,t.jsx)("div",{className:"py-20 text-center text-slate-400",children:"등록된 에피소드가 없습니다."})]})]})})]})]}),v&&(0,t.jsx)("div",{className:"fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",children:(0,t.jsxs)("div",{className:"bg-background w-full max-w-2xl rounded-2xl shadow-2xl relative my-8",children:[(0,t.jsx)(x.Button,{variant:"ghost",size:"icon",className:"absolute right-4 top-4 z-10",onClick:()=>j(!1),children:(0,t.jsx)(n.Plus,{className:"h-6 w-6 rotate-45"})}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsx)("h2",{className:"text-2xl font-black mb-6",children:"에피소드 업로드"}),(0,t.jsx)(l.ComicUploadForm,{onSuccess:()=>j(!1),initialType:"short",initialCategory:e})]})]})}),y&&(0,t.jsx)(i.ComicModal,{comic:y,isOpen:!!y,onClose:()=>w(null)})]})]})}])}]);