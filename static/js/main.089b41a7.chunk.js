(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{28:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(13),s=c.n(r),i=c(10),l=(c(28),c(0)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)(i.b,{to:"/",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.c,{to:"/",activeStyle:{color:"#9F0013"},exact:!0,children:"  Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)(i.c,{to:"/comics",activeStyle:{color:"#9F0013"},children:"Comics"})})]})})]})},j=c(3),u=c(4),b=(c(38),c.p,c(6)),m=c.n(b),d=c(11),h=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),i=s[0],l=s[1];return{loading:c,error:i,request:Object(n.useCallback)(function(){var e=Object(d.a)(m.a.mark((function e(t){var c,n,r,s,i,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch url: ".concat(t,",  status ").concat(t.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(n.useCallback)((function(){return l(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="apikey=c5d6fc8b83116d92ed468ce36bac6c62",l=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,c("".concat(s,"characters?limit=9&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters?name=").concat(t,"&").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,c("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"comics/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},f=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:a,clearError:r,getAllCharacters:l,getCharacterByName:o,getCharacter:j,getAllComics:b,getComic:h}},O=function(){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},f=c.p+"static/media/error.42292aa1.gif",x=function(){return Object(l.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:f,alt:"Error"})},p=(c(40),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),g=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:"abyss"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},v=function(e){var t=Object(n.useState)(null),c=Object(u.a)(t,2),a=c[0],r=c[1],s=h(),i=s.loading,o=s.error,j=s.getCharacter;Object(n.useEffect)((function(){b()}),[e.charId]);var b=function(){var t=e.charId;t&&j(t).then(m)},m=function(e){r(e)},d=a||i||o?null:Object(l.jsx)(p,{}),f=i?Object(l.jsx)(O,{}):null,v=o?Object(l.jsx)(x,{}):null,_=i||o||!a?null:Object(l.jsx)(g,{char:a});return Object(l.jsxs)("div",{className:"char__info",children:[d,f,v,_]})},_=c(15),N=c(49),y=c(50),k=(c(41),function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),o=i[0],j=i[1],b=Object(n.useState)(210),f=Object(u.a)(b,2),p=f[0],g=f[1],v=Object(n.useState)(!1),k=Object(u.a)(v,2),C=k[0],w=k[1],T=h(),S=T.loading,E=T.error,F=T.getAllCharacters;Object(n.useEffect)((function(){A(p,!0)}),[]);var A=function(e,t){j(!t),F(e).then(I)},I=function(){var e=Object(d.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=!1,t.length<9&&(c=!0),r([].concat(Object(_.a)(a),Object(_.a)(t))),j(!1),g(p+9),w(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(n.useRef)([]),B=function(e){M.current.forEach((function(e){return e.classList.remove("char__item_selected")})),M.current[e].classList.add("char__item_selected"),M.current[e].focus()};var R=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(l.jsx)(N.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return M.current[c]=e},onClick:function(){e.onCharSelected(t.id),B(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),B(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(y.a,{component:null,children:c})})}(a),L=E?Object(l.jsx)(x,{}):null,q=S&&!o?Object(l.jsx)(O,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[L,q,R,Object(l.jsx)("button",{disabled:o,style:{display:C?"none":"block"},className:"button button__main button__long",onClick:function(){return A(p)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),C=(c(42),c.p+"static/media/mjolnir.61f31e18.png"),w=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img"}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},T=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],a=t[1],r=h(),s=r.loading,i=r.error,o=r.getCharacter;Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=Math.floor(400*Math.random()+1011e3);o(e).then(b)},b=function(e){a(e)},m=s?Object(l.jsx)(O,{}):null,d=i?Object(l.jsx)(x,{}):null,f=s||i?null:Object(l.jsx)(w,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[m,d,f,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:j,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:C,alt:"mjolnir",className:"randomchar__decoration"})]})]})},S=c.p+"static/media/vision.067d4ae1.png",E=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(k,{onCharSelected:function(e){a(e)}}),Object(l.jsx)(v,{charId:c})]}),Object(l.jsx)("img",{className:"bg-decoration",src:S,alt:"vision"})]})},F=(c(43),c.p+"static/media/Avengers.4065c8f9.png"),A=c.p+"static/media/Avengers_logo.9eaf2193.png",I=function(){return Object(l.jsxs)("div",{className:"app__banner",children:[Object(l.jsx)("img",{src:F,alt:"Avengers"}),Object(l.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(l.jsx)("br",{}),"Stay tuned!"]}),Object(l.jsx)("img",{src:A,alt:"Avengers logo"})]})},M=(c(44),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),o=s[0],j=s[1],b=Object(n.useState)(0),m=Object(u.a)(b,2),d=m[0],f=m[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),v=g[0],N=g[1],y=h(),k=y.loading,C=y.error,w=y.getAllComics;Object(n.useEffect)((function(){T(d,!0)}),[]);var T=function(e,t){j(!t),w(e).then(S)},S=function(e){var t=!1;e.length<8&&(t=!0),a([].concat(Object(_.a)(c),Object(_.a)(e))),j(!1),f(d+8),N(t)};var E=function(e){var t=e.map((function(e,t){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(i.b,{to:"/comics/".concat(e.id),children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:e.title}),Object(l.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(l.jsx)("ul",{className:"comics__grid",children:t})}(c),F=C?Object(l.jsx)(x,{}):null,A=k&&!o?Object(l.jsx)(O,{}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[F,A,E,Object(l.jsx)("button",{disabled:o,style:{display:v?"none":"block"},className:"button button__main button__long",onClick:function(){return T(d)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),B=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(I,{}),Object(l.jsx)(M,{})]})},R=(c(45),function(e){var t=e.comic,c=t.name,n=t.description,a=t.pageCount,r=t.thumbnail,s=t.language,o=t.price;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsx)("img",{src:r,alt:"x-men",className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:c}),Object(l.jsx)("p",{className:"single-comic__descr",children:n}),Object(l.jsxs)("p",{className:"single-comic__descr",children:[a," pages"]}),Object(l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",s]}),Object(l.jsxs)("div",{className:"single-comic__price",children:[o," $"]})]}),Object(l.jsx)(i.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})}),L=function(e){var t=Object(j.e)().comicId,c=Object(n.useState)([]),a=Object(u.a)(c,2),r=a[0],s=a[1],i=h(),o=i.error,b=i.loading,m=i.getComic;Object(n.useEffect)((function(){d()}),[t]);var d=function(){m(t).then(f)},f=function(e){s(e)},p=b?Object(l.jsx)(O,{}):null,g=o?Object(l.jsx)(x,{}):null,v=b||o?null:Object(l.jsx)(R,{comic:r});return Object(l.jsxs)(l.Fragment,{children:[p,g,v]})},q=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,children:Object(l.jsx)(E,{})}),Object(l.jsx)(j.a,{path:"/comics/:comicId",exact:!0,children:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{path:"/comics",exact:!0,children:Object(l.jsx)(B,{})})]})]})})};c(46);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.089b41a7.chunk.js.map