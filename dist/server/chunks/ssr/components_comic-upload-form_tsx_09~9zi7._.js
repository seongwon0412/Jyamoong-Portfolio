module.exports=[4255,84581,33098,77687,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(68515),e=a.i(40695),f=a.i(5522),g=a.i(46893),h=a.i(17171),i=a.i(73320),j=a.i(33508),k=a.i(14548);let l=(0,a.i(70106).default)("grip-vertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);a.s(["GripVertical",0,l],84581);var m=a.i(77156),n=a.i(35345),o=a.i(34157),o=o,p=a.i(79165),q=a.i(65733);function r(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s({isOpen:a,onClose:d,htmlText:f,onComplete:g}){let[h,i]=(0,c.useState)({}),[j,k]=(0,c.useState)(""),l=(0,c.useRef)(null),m=(0,c.useRef)({}),{entries:n,speakers:t}=(0,c.useMemo)(()=>{let a,b,c;return a=new DOMParser().parseFromString(f,"text/html"),b=[],c=new Set,a.querySelectorAll("p").forEach(a=>{var d;let e=a.style.color||"#333333",f=a.querySelectorAll("span"),g="MAIN",h="System",i="";if(f.length>=3)g=f[0].textContent?.trim().replace(/\[|\]/g,"")||"MAIN",h=f[1].textContent?.replace(/ :$/,"").trim()||"Unknown",i=Array.from(f).slice(2).map(a=>a.innerHTML).join("");else{let b=a.textContent||"",c=b.match(/\[(.*?)\]\s*(.*?)\s*:\s*(.*)/);c?(g=c[1]||"MAIN",h=c[2]?.trim()||"Unknown",i=c[3]||""):i=a.innerHTML||b}h&&c.add(h),b.push({tab:g,name:h,color:e,text:i,isSystem:(d=i,/(CC<=\s*\d+|choice|\b\d+d\d+\b)/i.test(d))})}),{entries:b,speakers:Array.from(c)}},[f]),u=(0,c.useMemo)(()=>{let a,b,c,d;return f?(a=f.replace(/<!--\s*LOG_META:[\s\S]*?-->/g,""),b=btoa(unescape(encodeURIComponent(JSON.stringify({thumbnails:h,bgImage:j})))),c=a.includes("</body>")?"\n":"\n\n",d=`${a}${c}<!-- LOG_META:${b} -->`,`data:text/html;charset=utf-8,${encodeURIComponent(d)}`):""},[f,h,j]),v=(0,c.useMemo)(()=>f?function(a,b,c){let d=[];for(let b of a){let a=(b.tab||"MAIN").trim(),c=a.toLowerCase().includes("info")||"정보"===a;if(b.isSystem){d.push({tab:a,entries:[b],isSystem:!0,isInfo:!1});continue}let e=d[d.length-1];e&&!e.isSystem&&e.tab===a?e.entries.push(b):d.push({tab:a,entries:[b],isSystem:!1,isInfo:c})}let e=Object.entries(b).filter(([,a])=>!!a),f=e.map(([a,b],c)=>`.speaker-thumb-${c} { background-image: url('${b}'); }`).join("\n"),g=new Map(e.map(([a],b)=>[a,`speaker-thumb-${b}`])),h=a=>{let b=g.get(a.name),c=b?`<div class="log-avatar ${b}"></div>`:'<div class="log-avatar log-avatar--empty"></div>';return`
      <article class="message-card">
        <div class="message-head">
          ${c}
          <div class="message-meta">
            <div class="message-tab">${r(a.tab||"MAIN")}</div>
            <div class="message-name" style="color:${r(a.color)}">${r(a.name||"Unknown")}</div>
          </div>
        </div>
        <div class="message-body ccfolia-text" style="color:${r(a.color)}">${a.text}</div>
      </article>
    `},i=d.map(a=>a.isSystem?`
        <section class="system-wrap">
          <div class="system-card ccfolia-text">${a.entries[0].text}</div>
        </section>
      `:a.isInfo?`
        <section class="info-panel">
          <header class="info-head">
            <span class="info-badge">${r(a.tab)}</span>
          </header>
          <div class="message-stack">
            ${a.entries.map(h).join("")}
          </div>
        </section>
      `:"MAIN"===a.tab.toUpperCase()?`
        <section class="tab-group">
          <div class="tab-summary no-arrow" style="cursor: default;">${r(a.tab)}</div>
          <div class="message-stack">
            ${a.entries.map(h).join("")}
          </div>
        </section>
      `:`
      <details class="tab-group" open>
        <summary class="tab-summary">${r(a.tab)}</summary>
        <div class="message-stack">
          ${a.entries.map(h).join("")}
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
  ${f}
  :root {
    color-scheme: light;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: "Malgun Gothic", "Apple SD Gothic Neo", system-ui, sans-serif;
    background: ${c?`url('${c}') center/cover fixed`:"#f7f4ee"};
    color: #151515;
  }
  .page-shell {
    min-height: 100vh;
    padding: 28px 18px 40px;
    background: ${c?"rgba(247, 244, 238, 0.68)":"transparent"};
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
      ${i}
    </div>
  </div>
</body>
</html>
`}(n,h,j):"",[n,f,h,j]);(0,c.useEffect)(()=>{a||(i({}),k(""))},[a]);let w=()=>{if(!v)return;let a=window.open("","_blank","noopener,noreferrer,width=1280,height=960");a&&(a.document.open(),a.document.write(v),a.document.close())};return(0,b.jsx)(q.Dialog,{open:a,onOpenChange:a=>!a&&d(),children:(0,b.jsxs)(q.DialogContent,{className:"max-w-5xl max-h-[90vh] overflow-y-auto",children:[(0,b.jsx)(q.DialogHeader,{children:(0,b.jsx)(q.DialogTitle,{children:"HTML 로그 변환 설정"})}),(0,b.jsxs)("div",{className:"grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]",children:[(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsx)("h3",{className:"font-semibold text-lg border-b pb-2",children:"배경 이미지 설정"}),(0,b.jsx)("input",{type:"file",accept:"image/*",className:"hidden",ref:l,onChange:a=>{var b;let c;a.target.files?.[0]&&(b=a.target.files[0],(c=new FileReader).onload=a=>{k(a.target?.result)},c.readAsDataURL(b)),a.target.value=""}}),(0,b.jsxs)("div",{className:"flex items-center gap-3 flex-wrap",children:[(0,b.jsxs)(e.Button,{variant:"outline",onClick:()=>l.current?.click(),children:[(0,b.jsx)(p.ImageIcon,{className:"w-4 h-4 mr-2"}),"배경 이미지 선택"]}),j&&(0,b.jsxs)("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[(0,b.jsx)(o.default,{className:"w-4 h-4 text-green-500"}),"설정됨",(0,b.jsx)(e.Button,{variant:"ghost",size:"sm",onClick:()=>k(""),children:"취소"})]})]}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:"설정하지 않으면 기본 흰색 배경이 사용됩니다."})]}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsx)("h3",{className:"font-semibold text-lg border-b pb-2",children:"발언자 썸네일 설정"}),(0,b.jsx)("div",{className:"space-y-3 max-h-[42vh] overflow-y-auto pr-1",children:t.length>0?t.map(a=>(0,b.jsxs)("div",{className:"flex items-center gap-3 p-3 border rounded-lg bg-muted/20",children:[(0,b.jsx)("div",{className:"w-12 h-12 rounded-lg bg-muted flex items-center justify-center bg-cover bg-center shrink-0 border",style:{backgroundImage:h[a]?`url('${h[a]}')`:"none"},children:!h[a]&&(0,b.jsx)("span",{className:"text-[10px] text-muted-foreground",children:"No img"})}),(0,b.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,b.jsx)("p",{className:"font-medium text-sm truncate",title:a,children:a}),(0,b.jsx)("input",{type:"file",accept:"image/*",className:"hidden",ref:b=>{m.current[a]=b},onChange:b=>{var c;let d;b.target.files?.[0]&&(c=b.target.files[0],(d=new FileReader).onload=b=>{i(c=>({...c,[a]:b.target?.result}))},d.readAsDataURL(c)),b.target.value=""}}),(0,b.jsx)(e.Button,{variant:"secondary",size:"sm",className:"text-xs h-7 mt-1 w-full",onClick:()=>m.current[a]?.click(),children:"이미지 업로드"})]})]},a)):(0,b.jsx)("div",{className:"rounded-lg border border-dashed p-4 text-sm text-muted-foreground",children:"발언자 정보를 읽는 중입니다. HTML 구조에 따라 일부 이름은 수동 표시될 수 있습니다."})})]}),(0,b.jsxs)("div",{className:"flex justify-between gap-2 pt-2 border-t flex-wrap",children:[(0,b.jsx)(e.Button,{variant:"secondary",onClick:w,disabled:!v,children:"새 창 미리보기"}),(0,b.jsx)(e.Button,{variant:"outline",onClick:d,children:"취소"}),(0,b.jsx)(e.Button,{onClick:()=>{g(u)},className:"bg-primary text-primary-foreground",children:"변환 및 적용완료"})]})]}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,b.jsx)("h3",{className:"font-semibold text-lg",children:"미리보기 안내"}),(0,b.jsx)("span",{className:"text-xs text-muted-foreground",children:"화면이 넓은 새 창에서 확인합니다."})]}),(0,b.jsxs)("div",{className:"rounded-xl border bg-muted/20 p-6 shadow-sm min-h-[68vh] flex flex-col items-center justify-center text-center gap-4",children:[(0,b.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-background border flex items-center justify-center shadow-sm",children:(0,b.jsx)(p.ImageIcon,{className:"w-8 h-8 text-primary"})}),(0,b.jsxs)("div",{className:"space-y-2 max-w-md",children:[(0,b.jsx)("p",{className:"font-semibold text-lg",children:"미리보기는 새 창에서 열립니다"}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:"썸네일, 배경, 연속 탭 그룹, 시스템 판정 레이아웃을 포함한 전체 결과를 넓은 화면으로 확인할 수 있습니다."})]}),(0,b.jsx)(e.Button,{onClick:w,disabled:!v,children:"새 창 미리보기 열기"})]})]})]})]})})}a.s(["HtmlLogPreview",0,s],33098);let t=0,u=new Map,v=a=>{if(u.has(a))return;let b=setTimeout(()=>{u.delete(a),y({type:"REMOVE_TOAST",toastId:a})},1e6);u.set(a,b)},w=[],x={toasts:[]};function y(a){x=((a,b)=>{switch(b.type){case"ADD_TOAST":return{...a,toasts:[b.toast,...a.toasts].slice(0,1)};case"UPDATE_TOAST":return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case"DISMISS_TOAST":{let{toastId:c}=b;return c?v(c):a.toasts.forEach(a=>{v(a.id)}),{...a,toasts:a.toasts.map(a=>a.id===c||void 0===c?{...a,open:!1}:a)}}case"REMOVE_TOAST":if(void 0===b.toastId)return{...a,toasts:[]};return{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)}}})(x,a),w.forEach(a=>{a(x)})}function z({...a}){let b=(t=(t+1)%Number.MAX_SAFE_INTEGER).toString(),c=()=>y({type:"DISMISS_TOAST",toastId:b});return y({type:"ADD_TOAST",toast:{...a,id:b,open:!0,onOpenChange:a=>{a||c()}}}),{id:b,dismiss:c,update:a=>y({type:"UPDATE_TOAST",toast:{...a,id:b}})}}function A(){let[a,b]=c.useState(x);return c.useEffect(()=>(w.push(b),()=>{let a=w.indexOf(b);a>-1&&w.splice(a,1)}),[a]),{...a,toast:z,dismiss:a=>y({type:"DISMISS_TOAST",toastId:a})}}a.s(["useToast",0,A],77687),a.s(["ComicUploadForm",0,function({type:a,initialType:o,category:p,initialCategory:q,initialData:r,onClose:t,onSuccess:u}){let{addComic:v,updateComic:w}=(0,d.useAppStore)(),{toast:x}=A(),y=!!r,z=a||o||"short",B=p||q||"",[C,D]=(0,c.useState)(r?.title||""),[E,F]=(0,c.useState)(r?.description||""),[G,H]=(0,c.useState)(r?.images||[]),[I,J]=(0,c.useState)(!1),[K,L]=(0,c.useState)(null),[M,N]=(0,c.useState)([]),O=(0,c.useRef)(null),P=(0,c.useRef)(null),Q=(0,c.useRef)(null),R=(a,b)=>{H(c=>{let d=[...c],[e]=d.splice(a,1);return d.splice(b,0,e),d})},S=()=>{null!==P.current&&null!==Q.current&&P.current!==Q.current&&R(P.current,Q.current),P.current=null,Q.current=null},T=a=>{a.preventDefault()},U=async a=>{a.preventDefault(),C.trim()&&0!==G.length&&(J(!0),await new Promise(a=>setTimeout(a,500)),y&&r?w(r.id,{title:C.trim(),description:E.trim(),thumbnailUrl:G[0],images:G,type:z,category:B}):v({id:Date.now().toString(),title:C.trim(),description:E.trim(),thumbnailUrl:G[0],images:G,type:z,category:B,createdAt:new Date().toISOString()}),x({title:y?"작품이 수정되었습니다.":"새 작품이 업로드되었습니다.",description:"작업을 성공적으로 저장했습니다."}),D(""),F(""),H([]),J(!1),u&&u(),t&&t())};return(0,b.jsxs)("div",{className:"p-6 rounded-2xl bg-card border border-border",children:[M.length>0&&(0,b.jsx)(s,{isOpen:!0,onClose:()=>N(a=>a.slice(1)),htmlText:M[0].text,onComplete:a=>{H(b=>[...b,a]),N(a=>a.slice(1))}}),K&&(0,b.jsxs)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-background/90 backdrop-blur-sm",onClick:()=>L(null)}),(0,b.jsxs)("div",{className:"relative z-10 w-full max-w-5xl h-full max-h-[90vh] flex flex-col bg-card rounded-2xl shadow-2xl border cursor-auto overflow-hidden",children:[(0,b.jsxs)("div",{className:"shrink-0 flex items-center justify-between p-4 border-b bg-muted/30",children:[(0,b.jsx)("h3",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wider",children:"미리보기 (Preview)"}),(0,b.jsx)("button",{type:"button",onClick:()=>L(null),className:"p-2 hover:bg-muted rounded-lg transition-colors",children:(0,b.jsx)(j.X,{className:"w-5 h-5"})})]}),(0,b.jsx)("div",{className:"flex-1 overflow-y-auto p-4 md:p-6 bg-muted/10",children:(0,b.jsx)(n.MediaRenderer,{src:K,alt:"미리보기 화면",className:"max-w-4xl mx-auto w-full"})})]})]}),(0,b.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,b.jsx)("h2",{className:"text-lg font-semibold",children:y?"작품 수정":`새 ${"long"===z?"로그 백업/작품":"단편만화"} 업로드`}),(0,b.jsx)("button",{onClick:t,className:"p-1 hover:bg-muted rounded-lg",children:(0,b.jsx)(j.X,{className:"w-5 h-5"})})]}),(0,b.jsxs)("form",{onSubmit:U,className:"space-y-4",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{htmlFor:"title",children:"제목"}),(0,b.jsx)(f.Input,{id:"title",value:C,onChange:a=>D(a.target.value),placeholder:"제목을 입력하세요",className:"bg-input",required:!0})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{htmlFor:"description",children:"설명"}),(0,b.jsx)(g.Textarea,{id:"description",value:E,onChange:a=>F(a.target.value),placeholder:"작품에 대한 설명을 작성하세요",rows:3,className:"resize-none bg-input"})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(h.Label,{children:"페이지 콘텐츠 (webp, jpg, png, apng, gif, mp4, html 등 허용)"}),(0,b.jsx)("input",{ref:O,type:"file",accept:".webp,.jpg,.jpeg,.png,.apng,.gif,.mp4,.html,.htm,image/*,video/mp4,text/html",multiple:!0,onChange:a=>{Array.from(a.target.files||[]).forEach((a,b)=>{if("text/html"===a.type||a.name.endsWith(".html")||a.name.endsWith(".htm")){let c=new FileReader;c.onload=a=>{N(c=>[...c,{text:a.target?.result,fileIndex:b}])},c.readAsText(a)}else{let b=new FileReader;b.onload=a=>{let b=a.target?.result;H(a=>[...a,b])},b.readAsDataURL(a)}}),a.target.value=""},className:"hidden"}),(0,b.jsxs)("div",{className:"space-y-2",children:[G.map((a,c)=>(0,b.jsxs)("div",{draggable:!0,onDragStart:()=>{P.current=c},onDragEnter:()=>{Q.current=c},onDragEnd:S,onDragOver:T,className:"flex items-center gap-2 p-2 rounded-lg bg-muted/50 cursor-move hover:bg-muted transition-colors",children:[(0,b.jsx)(l,{className:"w-4 h-4 text-muted-foreground"}),(0,b.jsx)("div",{className:"w-12 h-16 object-cover rounded overflow-hidden drag-none pointer-events-none",children:(0,b.jsx)(n.MediaRenderer,{src:a,alt:`페이지 ${c+1}`,className:"w-full h-full object-cover"})}),(0,b.jsxs)("div",{className:"flex-1 pointer-events-none",children:[(0,b.jsxs)("span",{className:"text-sm font-medium",children:["페이지 ",c+1]}),0===c&&(0,b.jsx)("span",{className:"ml-2 text-xs px-1.5 py-0.5 rounded bg-primary text-primary-foreground",children:"썸네일"})]}),(0,b.jsxs)("div",{className:"flex gap-1",children:[c>0&&(0,b.jsx)("button",{type:"button",onClick:a=>{a.stopPropagation(),R(c,c-1)},className:"p-1 text-xs hover:bg-muted-foreground/20 rounded cursor-pointer",children:"위로"}),c<G.length-1&&(0,b.jsx)("button",{type:"button",onClick:a=>{a.stopPropagation(),R(c,c+1)},className:"p-1 text-xs hover:bg-muted-foreground/20 rounded cursor-pointer",children:"아래로"}),(0,b.jsx)("button",{type:"button",onClick:b=>{b.stopPropagation(),L(a)},className:"p-1 text-primary hover:bg-primary/10 rounded cursor-pointer",title:"미리보기",children:(0,b.jsx)(m.Eye,{className:"w-4 h-4"})}),(0,b.jsx)("button",{type:"button",onClick:a=>{a.stopPropagation(),H(a=>a.filter((a,b)=>b!==c))},className:"p-1 text-destructive hover:bg-destructive/10 rounded cursor-pointer",children:(0,b.jsx)(j.X,{className:"w-4 h-4"})})]})]},c)),(0,b.jsxs)("button",{type:"button",onClick:()=>O.current?.click(),className:"w-full p-4 rounded-lg border-2 border-dashed border-border hover:border-primary flex items-center justify-center gap-2 transition-colors",children:[(0,b.jsx)(i.Upload,{className:"w-5 h-5 text-muted-foreground"}),(0,b.jsx)("span",{className:"text-sm text-muted-foreground",children:"이미지 추가"})]})]}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"첫 번째 이미지가 썸네일로 사용됩니다. 업로드된 이미지는 자동으로 최적화됩니다. (드래그하여 순서 변경 가능)"})]}),(0,b.jsxs)("div",{className:"flex justify-end gap-2 pt-2",children:[(0,b.jsx)(e.Button,{type:"button",variant:"outline",onClick:t,children:"취소"}),(0,b.jsxs)(e.Button,{type:"submit",disabled:I||!C.trim()||0===G.length,children:[(0,b.jsx)(k.Save,{className:"w-4 h-4 mr-2"}),I?"저장 중...":y?"수정 완료":"업로드"]})]})]})]})}],4255)}];

//# sourceMappingURL=components_comic-upload-form_tsx_09~9zi7._.js.map