(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{9350:function(e,s,t){Promise.resolve().then(t.bind(t,2225))},6463:function(e,s,t){"use strict";var a=t(1169);t.o(a,"useRouter")&&t.d(s,{useRouter:function(){return a.useRouter}})},2225:function(e,s,t){"use strict";t.r(s);var a=t(7437),n=t(2265),i=t(728),r=t(771),c=t(7446);s.default=()=>{let[e,s]=(0,n.useState)({continents:[],countries:[],activities:[],medicalServices:[]}),[t,l]=(0,n.useState)([]),o=()=>{let s=new URLSearchParams,t=[...e.continents,...e.countries,...e.activities,...e.medicalServices];return t.length>0&&s.set("categories",t.join(",").toLowerCase()),"?".concat(s.toString())};return(0,n.useEffect)(()=>{(async()=>{try{let e=o(),s=await (0,c.t)(e);l(s)}catch(e){console.error("Error fetching products:",e)}})()},[e]),(0,a.jsxs)("div",{className:"flex justify-center p-8 bg-white mt-16",children:[(0,a.jsx)("aside",{className:"w-1/4 mr-6",children:(0,a.jsx)(i.Z,{setFilters:s})}),(0,a.jsxs)("main",{className:"w-3/4",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"\xa1Personaliza Tu Aventura!"}),(0,a.jsx)(r.Z,{tours:t,filters:e})]})]})}},728:function(e,s,t){"use strict";var a=t(7437),n=t(2265),i=t(6463);s.Z=e=>{let{setFilters:s}=e,t=(0,i.useRouter)(),[r,c]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!1),[d,x]=(0,n.useState)(!1),[h,u]=(0,n.useState)(!1),[m,j]=(0,n.useState)([]),p=e=>{let s=new URLSearchParams(window.location.search);if(e.length>0){let t=e.map(e=>e.toLowerCase());s.set("categories",t.join(","))}else s.delete("categories");t.push("?".concat(s.toString()))},f=e=>{let s=m.includes(e)?m.filter(s=>s!==e):[...m,e];j(s),p(s)},g={Asia:["Jap\xf3n"],África:["Egipto"],América:["Estados Unidos","Brasil"],Europa:["Italia"],Oceanía:["Australia","Haw\xe1ii"]},b=m.filter(e=>Object.keys(g).includes(e)).flatMap(e=>g[e]||[]),N=e=>"transition-transform transform ".concat(e?"rotate-180":"rotate-0"," text-xs");return(0,a.jsxs)("div",{className:"p-4 bg-white rounded-lg shadow-md",children:[(0,a.jsx)("div",{className:"bg-orange-500 text-white p-4 rounded-t-lg",children:(0,a.jsx)("h2",{className:"text-lg font-bold",children:"Escoja el lugar de su servicio."})}),(0,a.jsxs)("div",{className:"p-4 space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{onClick:()=>c(!r),className:"text-md font-semibold mb-2 cursor-pointer flex items-center justify-between",children:[(0,a.jsx)("span",{children:"Continente"}),(0,a.jsx)("span",{className:N(r),children:"▼"})]}),r&&(0,a.jsx)("ul",{className:"pl-4 space-y-2",children:Object.keys(g).map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",className:"mr-2",checked:m.includes(e),onChange:()=>f(e)}),e]})},e))})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{onClick:()=>o(!l),className:"text-md font-semibold mb-2 cursor-pointer flex items-center justify-between",children:[(0,a.jsx)("span",{children:"Pa\xeds"}),(0,a.jsx)("span",{className:N(l),children:"▼"})]}),l&&(0,a.jsx)("ul",{className:"pl-4 space-y-2",children:b.length>0?b.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",className:"mr-2",checked:m.includes(e),onChange:()=>f(e)}),e]})},e)):(0,a.jsx)("li",{children:"No hay pa\xedses disponibles"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{onClick:()=>x(!d),className:"text-md font-semibold mb-2 cursor-pointer flex items-center justify-between",children:[(0,a.jsx)("span",{children:"Actividad"}),(0,a.jsx)("span",{className:N(d),children:"▼"})]}),d&&(0,a.jsx)("ul",{className:"pl-4 space-y-2",children:["Avistamiento de aves","Pesca deportiva"].map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",className:"mr-2",checked:m.includes(e),onChange:()=>f(e)}),e]})},e))})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{onClick:()=>u(!h),className:"text-md font-semibold mb-2 cursor-pointer flex items-center justify-between",children:[(0,a.jsx)("span",{children:"Servicios M\xe9dicos"}),(0,a.jsx)("span",{className:N(h),children:"▼"})]}),h&&(0,a.jsx)("ul",{className:"pl-4 space-y-2",children:["Dise\xf1o de sonrisa"].map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",className:"mr-2",checked:m.includes(e),onChange:()=>f(e)}),e]})},e))})]})]})]})}},771:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(7437);t(2265);var n=t(7138),i=e=>{let{tour:s}=e;return(0,a.jsxs)("div",{className:"flex border border-gray-200 rounded-lg overflow-hidden shadow-lg",children:[(0,a.jsxs)("div",{className:"relative w-1/3 flex-shrink-0",children:[s.discount&&(0,a.jsx)("div",{className:"absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded",children:s.discount}),(0,a.jsx)("img",{src:s.image,alt:s.title,className:"w-[280px] h-[230px] object-cover"})]}),(0,a.jsxs)("div",{className:"p-6 w-2/3 flex flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-gray-400 text-xs",children:s.location}),(0,a.jsx)("h3",{className:"text-xl font-bold mt-1 text-gray-800",children:s.title}),(0,a.jsx)("p",{className:"text-gray-600 mt-2 text-sm",children:s.description})]}),(0,a.jsx)("div",{className:"flex items-center mt-4",children:s.rating&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"text-yellow-500 text-lg",children:s.rating}),(0,a.jsxs)("span",{className:"ml-2 text-gray-500 text-sm",children:["(",s.reviews,")"]})]})}),(0,a.jsxs)("div",{className:"mt-4 flex justify-between",children:[(0,a.jsx)("span",{className:"text-xs text-orange-500 font-semibold",children:"Best Price Guarantee"}),(0,a.jsx)("span",{className:"text-xs text-orange-500 font-semibold",children:"Free Cancellation"})]})]}),(0,a.jsxs)("div",{className:"p-6 border-l border-gray-200 w-1/3 flex flex-col justify-between",children:[(0,a.jsx)("p",{className:"text-gray-500 text-xs mb-1",children:s.duration}),(0,a.jsxs)("div",{className:"mt-4",children:[s.oldPrice&&(0,a.jsx)("span",{className:"line-through text-gray-400 text-sm",children:s.oldPrice}),(0,a.jsxs)("span",{className:"text-lg font-semibold text-red-600 ml-2",children:["From ",s.price]})]}),(0,a.jsx)(n.default,{href:"/paquetes/".concat(s.id),children:(0,a.jsx)("button",{className:"bg-orange-500 text-white mt-4 py-2 px-6 rounded text-sm hover:bg-orange-600 transition duration-200",children:"View Details"})})]})]})},r=e=>{let{tours:s,filters:t}=e,{continents:n,countries:r,activities:c,medicalServices:l}=t,o=s.filter(e=>{if(!e.categories)return!1;let s=0===n.length||n.some(s=>e.categories.includes(s.toLowerCase())),t=0===r.length||r.some(s=>e.categories.includes(s.toLowerCase())),a=0===c.length||c.some(s=>e.categories.includes(s.toLowerCase())),i=0===l.length||l.some(s=>e.categories.includes(s.toLowerCase()));return s&&t&&a&&i});return(0,a.jsx)("div",{className:"space-y-6",children:o.map(e=>(0,a.jsx)(i,{tour:e},e.id))})}},7446:function(e,s,t){"use strict";async function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s="".concat("https://pf-grupo03-back.onrender.com/products").concat(e),t=await fetch(s);if(!t.ok)throw Error("Failed to fetch products");return await t.json()}async function n(e){let s=await fetch("https://pf-grupo03-back.onrender.com/products/".concat(e));if(!s.ok)throw Error("Failed to fetch products");return await s.json()}t.d(s,{d:function(){return n},t:function(){return a}})}},function(e){e.O(0,[138,971,23,744],function(){return e(e.s=9350)}),_N_E=e.O()}]);