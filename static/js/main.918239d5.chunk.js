(this["webpackJsonpwall-gallery"]=this["webpackJsonpwall-gallery"]||[]).push([[0],{31:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,l,b=t(0),d=t.n(b),x=t(22),p=t.n(x),g=(t(31),t(10)),u=t(11),j=t(3),m=t(4),h=t(1),O=m.a.header(r||(r=Object(j.a)(["\n  max-width: 70rem;\n  margin: 2rem auto;\n  text-align: center;\n"]))),f=m.a.h1(a||(a=Object(j.a)(["\n  margin-bottom: 0.5em;\n  color: black;\n  text-shadow: 3px 3px 3px gray;\n"]))),w=m.a.p(c||(c=Object(j.a)(["\ncolor: gray;\n"]))),v=m.a.span(i||(i=Object(j.a)(["\ncolor: green;\n"]))),y=function(){return Object(h.jsxs)(O,{children:[Object(h.jsxs)(f,{children:["Wall-",Object(h.jsx)(v,{children:"Gallary"})," "]}),Object(h.jsx)(w,{children:"Source of freely usable images."})]})},k=m.a.img(o||(o=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  object-fit: cover;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    border-color: rgba(249, 249, 249, 0.8);\n  transition: opacity 500ms ease-in-out 0s;\n  border-radius: 10px;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  \n &:hover{\n    transform: scale(1.05);\n    transition-duration: 0.5s;\n    \n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n      border: 3px solid rgba(249, 249, 249, 0.1);\n  }\n"]))),I=function(e){var n=e.url,t=e.key,r=e.setslectedImg;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"imageGrid",style:{margin:"10px 10px "},onClick:function(){return r(n)},children:Object(h.jsx)(k,{src:n,alt:"images"},t)})})},C=t(26),F=t.n(C),S=function(e){var n=e.slectedImg,t=e.setslectedImg;return Object(h.jsx)(B,{className:"backdrop",onClick:function(e){t(null)},children:Object(h.jsx)("img",{src:n,alt:"preview img"})})},B=m.a.div(s||(s=Object(j.a)(["\nposition: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  img{\n  display: block;\n  max-width: 60%;\n  max-height: 80%;\n  margin: 60px auto;\n  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);\n  border: 3px solid white;\n  border-radius: 10px;\n  }\n"]))),E=m.a.section(l||(l=Object(j.a)(["\n  max-width: 70rem;\n  margin: 4rem auto;\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-auto-rows: 300px;\n"])));var G=function(){var e=Object(b.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(b.useState)(null),c=Object(u.a)(a,2),i=c[0],o=c[1];Object(b.useEffect)((function(){s()}),[]);var s=function(){F.a.get(" http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0").then((function(e){r([].concat(Object(g.a)(t),Object(g.a)(e.data)))}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{}),Object(h.jsx)(E,{children:t.map((function(e){return Object(h.jsx)(I,{url:e.urls.regular,setslectedImg:o},e.id)}))}),i&&Object(h.jsx)(S,{slectedImg:i,setslectedImg:o})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};p.a.render(Object(h.jsx)(d.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),J()}},[[51,1,2]]]);
//# sourceMappingURL=main.918239d5.chunk.js.map