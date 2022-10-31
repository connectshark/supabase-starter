import{t as y,g as _,o as l,e as u,f as m,A as $,y as v,j as x,F as k,B as A,z as b}from"./index.c91e31df.js";import{u as Y}from"./useGallery.8c6977d7.js";var p;const H=typeof window!="undefined";H&&((p=window==null?void 0:window.navigator)==null?void 0:p.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function S(t){return typeof t=="function"?t():_(t)}const L=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F=(t,e,s,a)=>{let r=t<12?"AM":"PM";return a&&(r=r.split("").reduce((i,o)=>i+=`${o}.`,"")),s?r.toLowerCase():r},B=(t,e,s={})=>{var a;const r=t.getFullYear(),i=t.getMonth(),o=t.getDate(),n=t.getHours(),c=t.getMinutes(),g=t.getSeconds(),h=t.getMilliseconds(),f=t.getDay(),d=(a=s.customMeridiem)!=null?a:F,D={YY:()=>String(r).slice(-2),YYYY:()=>r,M:()=>i+1,MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(s.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(s.locales,{month:"long"}),D:()=>String(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(n),HH:()=>`${n}`.padStart(2,"0"),h:()=>`${n%12||12}`.padStart(1,"0"),hh:()=>`${n%12||12}`.padStart(2,"0"),m:()=>String(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(g),ss:()=>`${g}`.padStart(2,"0"),SSS:()=>`${h}`.padStart(3,"0"),d:()=>f,dd:()=>t.toLocaleDateString(s.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(s.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(s.locales,{weekday:"long"}),A:()=>d(n,c),AA:()=>d(n,c,!1,!0),a:()=>d(n,c,!0),aa:()=>d(n,c,!0,!0)};return e.replace(E,(w,M)=>M||D[w]())},G=t=>{if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(L);if(e){const s=e[2]-1||0,a=(e[7]||"0").substring(0,3);return new Date(e[1],s,e[3]||1,e[4]||0,e[5]||0,e[6]||0,a)}}return new Date(t)};function R(t,e="HH:mm:ss",s={}){return y(()=>B(G(S(t)),S(e),s))}const z={class:"shadow-lg rounded-br-3xl"},N={class:"mb-4"},P=["src"],j={class:"p-4"},C={__name:"FigureWrapper",props:{img_url:String,created_at:String},setup(t){const e=t,s=R(e.created_at,"MM/DD");return(a,r)=>(l(),u("li",z,[m("figure",N,[m("img",{class:"block w-full h-52 object-contain",src:e.img_url,loading:"lazy"},null,8,P)]),m("p",j,"\u4E0A\u50B3\u65E5\u671F: "+$(_(s)),1)]))}},T={class:"grid grid-cols-2 gap-2 p-4 max-w-md mx-auto"},X={key:0,class:"text-center col-span-2 text-primary"},Z=m("i",{class:"bx bx-loader-alt bx-spin bx-lg"},null,-1),O=[Z],W={__name:"Gallery",setup(t){const{loading:e,list:s,reload:a}=Y();return(r,i)=>{const o=v("auto-animate");return x((l(),u("ul",T,[_(e)?(l(),u("div",X,O)):(l(!0),u(k,{key:1},A(_(s),n=>(l(),b(C,{key:n.id,img_url:n.img_url,created_at:n.created_at},null,8,["img_url","created_at"]))),128))])),[[o]])}}};export{W as default};
