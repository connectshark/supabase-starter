import{q as u,s as p,w as _,o as a,e as l,f as e,i as m,j as x,v as b,g as t,k as f,F as h}from"./index.02d11855.js";const g=e("h2",{class:"bg-primary py-10 text-white text-center font-bold text-3xl mb-8 leading-loose"},"\u5FD8\u8A18\u5BC6\u78BC",-1),y={class:"max-w-lg mx-auto w-5/6"},v={class:"mb-4"},w=["disabled"],k={class:"flex justify-end items-center space-x-6"},F=["disabled"],V={key:0},B={key:1},j=e("i",{class:"bx bx-loader-alt bx-spin"},null,-1),q=[j],E={key:0},C={__name:"ForgotView",setup(M){const{forgotPsd:c,loading:i,success:n,error:N}=u(),s=p("");return _(n,d=>{d&&(s.value="")}),(d,o)=>(a(),l(h,null,[g,e("div",y,[e("form",{onSubmit:o[1]||(o[1]=m(r=>t(c)(s.value),["prevent"]))},[e("p",v,[x(e("input",{disabled:t(i),"onUpdate:modelValue":o[0]||(o[0]=r=>s.value=r),required:"",class:"focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100",placeholder:"\u4FE1\u7BB1",type:"email"},null,8,w),[[b,s.value]])]),e("div",k,[e("button",{disabled:t(i),class:"text-md font-bold hover:opacity-80 text-white bg-primary py-4 px-8 rounded-full",type:"submit"},[t(i)?(a(),l("span",B,q)):(a(),l("span",V,"\u9001\u51FAemail"))],8,F)]),t(n)?(a(),l("div",E,"\u91CD\u7F6EEmail\u5DF2\u9001\u51FA \u8ACB\u524D\u5F80\u4FE1\u7BB1\u91CD\u7F6E\u5BC6\u78BC")):f("",!0)],32)])],64))}};export{C as default};