import{d as e,o as t,r as n,c as a,w as r,a as s,K as o,b as l,e as i,h as u,R as c,f as p,g as d,i as h,j as g,u as m,k as f,l as y,m as v,n as P,p as b,Q as w,q as $,s as k,t as q}from"./vendor.62829c0d.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const x="森",N="寻的碎碎念",S="https://innei.ren",_="https://api.innei.ren";var E=e({setup(){t((()=>{document.title=`${x} | ${N}`}))}});E.render=function(e,t,i,u,c,p){const d=n("router-view");return s(),a(d,null,{default:r((({Component:e})=>[(s(),a(o,{exclude:["note"]},[(s(),a(l(e)))],1024))])),_:1})};var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const L={},C=new i.GraphQLClient(_+"/graphql",{});const T=e({setup:()=>()=>u("header",{class:"header-wrapper"},u(c,{to:"/"},u("h1",null,x,u("small",null,N))),u("div",{class:"links"},u(c,{to:"/about"},"About"),u("a",{href:S,target:"_blank"},"Website")))}),z=e({setup:()=>()=>{const e=(new Date).getFullYear();return u("a",{href:S},u("footer",{class:"text-text-gray font-serif text-xs pb-6 block text-center"},"Copyright © ",e," Innei. Powered by Vue 3."))}});var A=e({components:{Header:T,Footer:z}});const W={class:"wrap"};A.render=function(e,t,a,r,o,l){const i=n("Header"),u=n("Footer");return s(),p("div",W,[d(i),h("main",null,[g(e.$slots,"default")]),d(u)])};const D=e({name:"note",setup(){const e=m(),t=parseInt(e.params.id),n=f({note:{}});return y((()=>{document.title=`${x} | ${N}`})),v((async()=>{n.note=await(async e=>{const t=i.gql`
    query getNoteContent($nid: Int) {
      getNoteById(nid: $nid) {
        data {
          title
          created
          modified
          text
          nid
          id
        }
      }
    }
  `;return(await C.request(t,{nid:e})).getNoteById.data})(t),document.title=n.note.title+" | "+x;const e=await fetch(`${_}/v2/markdown/render/${n.note.id}`,{}),a=await e.text(),r=document.getElementById("html");try{const e=(new DOMParser).parseFromString(a,"text/html"),t=e.querySelector("article");t.querySelector("h1").style.cssText="text-align:center",r.appendChild(t);e.querySelectorAll("style").forEach((e=>{r.prepend(e)}))}catch(s){console.error(s),r.innerHTML="<p>404</p>"}})),()=>u(A,null,n.note.id&&u("div",{id:"html"}))}});const H=e({props:{notes:{type:Array,required:!0,default:[]}},setup:e=>()=>u("ul",{class:"list-root"},e.notes.map((e=>{const t=new Date(e.created),n=t.getDate(),a=t.getMonth()+1;return u("li",{key:e._id},u(c,{to:`/notes/${e.nid}`},u("span",{class:"title"},e.title),u("span",{class:"created"},`${a}/${n}`)))})))});const M=e({setup(){const e=P(!0),t=f({notes:[],pager:{hasNextPage:!1,hasPrevPage:!1,totalPage:1}}),n=m(),a=P(parseInt(n.query.page)||1);v((async()=>{await r(a.value)}));const r=async(n=1,r=15)=>{const s=await(async(e=1,t=10)=>{const n=i.gql`
    query getNoteList($page: Int, $size: Int) {
      getNotesWithPager(page: $page, size: $size) {
        data {
          created
          title
          nid
          id
        }
        pagination {
          hasNextPage
          hasPrevPage
          totalPage
        }
      }
    }
  `,a=await C.request(n,{page:e,size:t});return{data:a.getNotesWithPager.data,pagination:a.getNotesWithPager.pagination}})(n,r);t.notes=s.data,t.pager=s.pagination,e.value=!1,a.value=n};return()=>u(A,null,u(H,{notes:t.notes}),!e.value&&u("div",{class:"pager"},u("div",{class:b("prev",!t.pager.hasPrevPage&&"disable"),onClick:()=>{if(!t.pager.hasPrevPage)return;const e=a.value-1;r(e),J.push({path:"/",query:{page:e}})}},"上一页"),u("div",{class:b("next",!t.pager.hasNextPage&&"disable"),onClick:()=>{if(!t.pager.hasNextPage)return;const e=a.value+1;r(e),J.push({path:"/",query:{page:e}})}},"下一页")))}});const O=e({setup:()=>()=>u(A,null,u("article",{class:"page-wrapper"},u("h1",null,"This Site"),u("p",null,"Powered by Vue 3 &"),u("p",null,"Build with Vite"),u("p",null,"Use the GraphQL"),u("h1",null,"And me"),u("p",null,"Undergraduate 2022"),u("p",null,"Wenzhou University of Technology(aka. 温州理工学院)"),u("p",null,"TypeScript, NodeJS"),u("p",null,"NestJS, NextJS, NuxtJS, React, Vue, and more."),u("p",null,"Coding with love, to make something possible."),u("p",null,u("a",{href:"http://innei.ren",target:"_blank"},"Home Page"),u("a",{href:"http://github.com/innei",target:"_blank"},"GitHub"),u("a",{href:"http://innei.ren/feed",target:"_blank"},"RSS")),u("blockquote",{class:"mt-12"},u("p",null,"幻なんかじゃない"),u("p",null,"人生は夢じゃない"),u("p",null,"僕達ははっきりと生きてるんだ"),u("p",null,"夕焼け空は赤い 炎のように赤い "),u("p",null,"この星の半分を真っ赤に染めた"),u("p",null,"それよりももっと赤い血が"),u("p",null,"体中を流れてるんだぜ"))))}),V=new w,B=[{name:"root",path:"/",component:()=>{return e=()=>Promise.resolve().then((function(){return I})),(t=void 0)&&0!==t.length?Promise.all(t.map((e=>{if((e=`${e}`)in L)return;L[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t},children:[{path:"/",component:M,meta:{title:x+" | "+N,fulltitle:!0},name:"home"},{path:"/notes/:id",props:!0,component:D,meta:{title:""},name:"note"},{path:"/about",component:O,meta:{title:"关于"}}]}],F=$({history:k(),routes:B});F.beforeEach(((e,t,n)=>{V.start(),t.meta.title&&(document.title=t.meta.fulltitle?t.meta.title:t.meta.title+" | "+x),n()})),F.afterEach((()=>{V.finish()})),F.onError((()=>{V.finish()}));var J=F;q(E).use(J).mount("#app");
