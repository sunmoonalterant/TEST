(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const a={project:{eyebrow:"社区服务微信小程序项目",headline:"把居民服务和网格员日常工作放到一个小程序项目里。",summary:"居民可以签到、报名活动、查看积分；网格员可以安排走访、处理工单和查看关怀提醒。",badges:["居民服务","网格治理","积分激励","规则预警"]},roles:[{id:"resident",label:"居民端",caption:"把日常服务做得更贴近社区生活。",features:[{icon:"01",title:"每日签到",text:"完成日常签到并积累社区积分。"},{icon:"02",title:"活动报名",text:"查看社区活动并在线报名参与。"},{icon:"03",title:"积分兑换",text:"查询积分余额，兑换社区服务与商品。"},{icon:"04",title:"公告通知",text:"及时获取社区动态与服务信息。"}]},{id:"grid",label:"网格员端",caption:"把被动接单转为有序、主动的关怀处置。",features:[{icon:"01",title:"任务看板",text:"聚合待办任务与社区服务进度。"},{icon:"02",title:"走访签到",text:"记录网格走访与现场服务情况。"},{icon:"03",title:"工单处理",text:"处理问题上报，记录每项工单的进度。"},{icon:"04",title:"高风险预警",text:"查看需要重点关怀的老人预警信息。"}]}],architecture:[{layer:"服务触点",items:["居民端微信小程序","网格员端微信小程序","Vue 管理后台"]},{layer:"业务中枢",items:["Spring Boot REST API","用户、活动、积分、工单与预警模型"]},{layer:"数据与预警",items:["MySQL / Redis 演进规划","Python 规则预警服务"]}],techStack:["微信小程序","Vue","Spring Boot","Python","Docker Compose","MySQL","Redis"],screenshots:[{title:"居民首页",tag:"服务入口",description:"活动、签到、积分与公告的入口页。",image:"af4796c9-f3b3-47f2-8cb2-2c788134b85e.png"},{title:"积分商城",tag:"激励体系",description:"展示可用积分、分类与兑换商品。",image:"2f265a16-e277-438a-ab45-0cb4a90b3f11.png".png"},{title:"网格员看板",tag:"任务协同",description:"聚合走访、待办任务与处置进度。",image:"67bab653-ddf0-403b-8865-6e391a325a61.png"},{title:"预警与工单",tag:"主动关怀",description:"呈现高风险预警和工单处理流程。",image:"e858e243-244c-4403-8a97-59b83500a6c4.png"}]},s=e=>document.getElementById(e);function d(e){return e.map(t=>`<span class="badge">${t}</span>`).join("")}function l(e){const t=s("role-panel");t.setAttribute("aria-labelledby",`${e.id}-tab`),t.innerHTML=`
    <div class="role-panel-heading">
      <span class="role-dot" aria-hidden="true"></span>
      <p>${e.caption}</p>
    </div>
    <div class="feature-grid">
      ${e.features.map(r=>`
        <article class="feature-card">
          <span class="feature-index">${r.icon}</span>
          <h3>${r.title}</h3>
          <p>${r.text}</p>
        </article>
      `).join("")}
    </div>
  `}function p(){s("architecture-flow").innerHTML=a.architecture.map((e,t)=>`
    <article class="architecture-layer">
      <span class="architecture-number">0${t+1}</span>
      <div>
        <h3>${e.layer}</h3>
        <div class="architecture-items">${e.items.map(r=>`<span>${r}</span>`).join("")}</div>
      </div>
    </article>
  `).join(""),s("tech-stack").innerHTML=a.techStack.map(e=>`<span>${e}</span>`).join("")}function u(){s("screenshot-grid").innerHTML=a.screenshots.map((e,t)=>`
    <article class="screenshot-card">
      <div class="screen-frame">
        ${e.image?`<img src="${e.image}" alt="${e.title}截图">`:`<div class="screen-placeholder"><span>SCREEN ${String(t+1).padStart(2,"0")}</span><i aria-hidden="true"></i><b>替换真实截图</b></div>`}
      </div>
      <p class="screen-tag">${e.tag}</p>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
    </article>
  `).join("")}function f(){const e=document.querySelectorAll("[data-role]");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(r=>r.setAttribute("aria-selected",String(r===t))),l(a.roles.find(r=>r.id===t.dataset.role))}))}function m(){const e=document.querySelector(".menu-toggle"),t=s("site-nav");e.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!r)),t.dataset.open=String(!r)}),t.querySelectorAll("a").forEach(r=>r.addEventListener("click",()=>{e.setAttribute("aria-expanded","false"),t.dataset.open="false"}))}s("project-eyebrow").textContent=a.project.eyebrow;s("hero-title").textContent=a.project.headline;s("project-summary").textContent=a.project.summary;s("project-badges").innerHTML=d(a.project.badges);l(a.roles[0]);p();u();f();m();
