import{d as e,o as t,r as n,c as r,a,w as s,K as o,b as l,h as i,R as u,e as p,f as c,g as d,u as h,i as m,j as g,k as f,l as v,m as y,n as b,p as x,q as w,s as P,Q as $,t as _,v as k,x as S}from"./vendor.bda91df1.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const o=new URL(e,r);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),a(i)},onload(){n(self[t].moduleMap[o]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("https:/cdn.jsdelivr.net/gh/mx-space/nai-vue@gh-pages/assets/");const L="森",N="寻的碎碎念",q="https://innei.ren",E="https://api.innei.ren/graphql";var I=e({setup(){t((()=>{document.title=`${L} | ${N}`}))}});I.render=function(e,t,i,u,p,c){const d=n("router-view");return a(),r(d,null,{default:s((({Component:e})=>[(a(),r(o,{exclude:["note"]},[(a(),r(l(e)))],1024))])),_:1})};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});let O;const R={};const j=e({setup:()=>()=>i("header",{class:"header-wrapper"},i(u,{to:"/"},i("h1",null,L,i("small",null,N))),i("div",{class:"links"},i(u,{to:"/about"},"About"),i("a",{href:q,target:"_blank"},"Website")))}),T=e({setup:()=>()=>{const e=(new Date).getFullYear();return i("a",{href:q},i("footer",{class:"text-text-gray font-serif text-xs pb-6 inline-block"},"Copyright © ",e," Innei. Powered by Vue 3."))}});var z=e({components:{Header:j,Footer:T}});const C={class:"wrap"};z.render=function(e,t,s,o,l,i){const u=n("Header"),d=n("Footer");return a(),r("div",C,[p(u),p("main",null,[c(e.$slots,"default")]),p(d)])};const F=new d.GraphQLClient(E,{});function U(e,t,n){const r=/\((@(\w+\b))\)\s(?!\[.*?\])/.exec(t);if(r){if(n)return!0;try{return e(r[0])({type:"link",url:"https://github.com/"+r[2],children:[{type:"text",value:r[1]}]})}catch(a){}}}function D(e,t,n){const r=/^\|\|([\s\S]+?)\|\|(?!\|)/.exec(t);if(r){if(n)return!0;try{return e(r[0])({type:"spoiler",value:r[1]})}catch(a){}}}U.notInLink=!0,U.locator=function(e,t){return e.indexOf("@",t)},D.notInLink=!0,D.locator=function(e,t){return e.indexOf("||",t)};const V={mentions:function(){const e=this.Parser,t=e.prototype.inlineTokenizers,n=e.prototype.inlineMethods;t.mention=U,n.splice(n.indexOf("text"),0,"mention")},spoiler:function(){const e=this.Parser,t=e.prototype.inlineTokenizers,n=e.prototype.inlineMethods;t.spoiler=D,n.splice(n.indexOf("text"),0,"spoiler")}};var W=Object.values(V);const A=h().use(m).use(g).use(W).use(f,{handlers:{spoiler:(e,t)=>e(t,"del",{class:"spoiler"},[{type:"text",value:t.value}])}}),H=e({name:"note",setup(){const e=x(),t=parseInt(e.params.id),n=v({note:{}});y((async()=>{n.note=await(async e=>{const t=d.gql`
    query getNoteContent($nid: Int) {
      getNoteById(nid: $nid) {
        data {
          title
          created
          modified
          text
          nid
          _id
        }
      }
    }
  `;return(await F.request(t,{nid:e})).getNoteById.data})(t),document.title=n.note.title+" | "+L}));const r=b((()=>{const e=new Date(n.note.created),t=e.getDate(),r=e.getMonth()+1;return`${e.getFullYear()}-${r.toString().padStart(2,"0")}-${t.toString().padStart(2,"0")}`}));return()=>i(z,null,n.note._id&&i("div",{class:"content-wrapper"},i("h1",null,n.note.title),i("div",{class:"time"},r.value),i("article",null,i("h1",{style:{display:"none"}},n.note.title),i("div",{innerHTML:A.processSync(n.note.text).toString()})),i("div",{class:"notice"},"Visit Full version:"," ",i("a",{href:`//innei.ren/notes/${n.note.nid}`,target:"_blank",rel:"noopener noreferrer"},"https://innei.ren/notes/",n.note.nid))))}});const J=e({props:{notes:{type:Array,required:!0,default:[]}},setup:e=>()=>i("ul",{class:"list-root"},e.notes.map((e=>{const t=new Date(e.created),n=t.getDate(),r=t.getMonth()+1;return i("li",{key:e._id},i(u,{to:`/notes/${e.nid}`},i("span",{class:"title"},e.title),i("span",{class:"created"},`${r}/${n}`)))})))});const B=e({setup(){const e=w(!0),t=v({notes:[],pager:{hasNextPage:!1,hasPrevPage:!1,totalPage:1}}),n=x(),r=w(parseInt(n.query.page)||1);y((async()=>{await a(r.value)}));const a=async(n=1,a=15)=>{const s=await(async(e=1,t=10)=>{const n=d.gql`
    query getNoteList($page: Int, $size: Int) {
      getNotesWithPager(page: $page, size: $size) {
        data {
          created
          title
          nid
          _id
        }
        pager {
          hasNextPage
          hasPrevPage
          totalPage
        }
      }
    }
  `,r=await F.request(n,{page:e,size:t});return{data:r.getNotesWithPager.data,pager:r.getNotesWithPager.pager}})(n,a);t.notes=s.data,t.pager=s.pager,e.value=!1,r.value=n};return()=>i(z,null,i(J,{notes:t.notes}),!e.value&&i("div",{class:"pager"},i("div",{class:P("prev",!t.pager.hasPrevPage&&"disable"),onClick:()=>{if(!t.pager.hasPrevPage)return;const e=r.value-1;a(e),K.push({path:"/",query:{page:e}})}},"上一页"),i("div",{class:P("next",!t.pager.hasNextPage&&"disable"),onClick:()=>{if(!t.pager.hasNextPage)return;const e=r.value+1;a(e),K.push({path:"/",query:{page:e}})}},"下一页")))}});const G=e({setup:()=>()=>i(z,null,i("article",{class:"page-wrapper"},i("h1",null,"This Site."),i("p",null,"Powered by Vue 3 & Vite"),i("p",null,"GraphQL supported."),i("h1",null,"And me.."),i("p",null,"Third-year undergrad"),i("p",null,"Wenzhou University of Technology"),i("p",null,"TypeScript, NodeJS"),i("p",null,"NestJS, NextJS, NuxtJS, React, Vue"),i("p",null,i("a",{href:"http://github.com/innei",target:"_blank",rel:"noopener noreferrer"},"GitHub"),i("a",{href:"http://innei.ren/feed",target:"_blank",rel:"noopener noreferrer"},"RSS")),i("blockquote",{class:"mt-12"},i("p",null,"幻なんかじゃない"),i("p",null,"人生は夢じゃない"),i("p",null,"僕達ははっきりと生きてるんだ"),i("p",null,"夕焼け空は赤い 炎のように赤い "),i("p",null,"この星の半分を真っ赤に染めた"),i("p",null,"それよりももっと赤い血が"),i("p",null,"体中を流れてるんだぜ"))))}),Q=new $,Y=[{name:"root",path:"/",component:()=>function(e,t){if(!t)return e();if(void 0===O){const e=document.createElement("link").relList;O=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in R)return;R[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":O,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>Promise.resolve().then((function(){return M}))),void 0),children:[{path:"/",component:B,meta:{title:L+" | "+N,fulltitle:!0},name:"home"},{path:"/notes/:id",props:!0,component:H,meta:{title:""},name:"note"},{path:"/about",component:G,meta:{title:"关于"}}]}],K=_({history:k(),routes:Y});K.beforeEach(((e,t,n)=>{Q.start(),t.meta.title&&(document.title=t.meta.fulltitle?t.meta.title:t.meta.title+" | "+L),n()})),K.afterEach((()=>{Q.finish()})),K.onError((()=>{Q.finish()}));S(I).use(K).mount("#app");
