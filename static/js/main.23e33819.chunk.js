(this["webpackJsonptokyo-2020-medal-race"]=this["webpackJsonptokyo-2020-medal-race"]||[]).push([[0],{148:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(57),i=n.n(r),o=(n(148),n(0)),l=function(e){var t=e.user,n=e.repo;return Object(o.jsx)("div",{style:{marginTop:"0.5rem",marginLeft:"0.5rem"},children:Object(o.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=".concat(t,"&repo=").concat(n,"&type=star&count=false&size=large"),frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"})})},s=n(3),d=n(2),u=n(22),j=n.n(u),m=function(e){var t=e.children;return Object(o.jsx)("li",{className:j.a.flexCardListItem,children:Object(o.jsx)("div",{className:j.a.flexCard,children:t})})},b=n(58),x=n.n(b),h=function(e){var t=e.min,n=e.max,a=e.selected,c=e.handleChange;return Object(o.jsxs)("div",{className:x.a.inputContainer,children:[Object(o.jsxs)("p",{children:["Include ",Number(a)===n?"all":"top"]}),Object(o.jsx)("input",{type:"number",min:t,max:n,step:"10",value:a,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("p",{children:" entities"})]})},O=n(23),f=n(6),p=n.n(f),v=function(e){var t=e.view,n=e.setView,c=[{name:"Medals Per Capita",view_name:"medals_per_million",className:"medals_per_million"===t?"".concat(p.a.active," ").concat(p.a.viewButton):p.a.viewButton},{name:"Plain Medals Count",view_name:"medals",className:"medals"===t?"".concat(p.a.active," ").concat(p.a.viewButton):p.a.viewButton}];return Object(o.jsxs)("div",{className:p.a.nav,children:["Sort by"," ",c.map((function(e){return Object(a.createElement)(_,Object(O.a)(Object(O.a)({setView:n},e),{},{key:e.view_name}))}))]})},_=function(e){var t=e.name,n=e.view_name,a=e.className,c=e.setView;return Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),c(n)},type:"button",className:a,children:t})},g=n(4),y=n.n(g),k=function(e){var t=e.xScale,n=e.innerHeight,a=e.tickFormat,c=e.tickOffset,r=void 0===c?3:c,i=e.tickCount,l=void 0===i?6:i;return t.ticks(l).map((function(e){return Object(o.jsxs)("g",{className:y.a.tick,transform:"translate(".concat(t(e),", 0)"),children:[Object(o.jsx)("line",{y2:n}),Object(o.jsx)("text",{y:n+r,dy:"0.71em",style:{textAnchor:"middle"},children:a(e)})]},e)}))},S=function(e){var t=e.yScale,n=e.tickOffset,a=void 0===n?3:n;return t.domain().map((function(e){return Object(o.jsx)("g",{className:y.a.tick,transform:"translate(0,".concat(t(e)+t.bandwidth()/2,")"),children:Object(o.jsx)("text",{x:-a,style:{fontWeight:"bold",textAnchor:"end",dominantBaseline:"central"},children:e})},e)}))},w=function(e){e.view;var t=e.data,n=e.xScale,a=e.xValue,c=e.yScale,r=e.yValue,i=e.colorScale,l=e.tooltipFormat,s=e.onHover,u=e.onMove,j=e.hoveredValue,m=e.fadeOpacity,b=void 0===m?.2:m,x=e.tooltipOffset,h=void 0===x?10:x;return t.map((function(e,m){return Object(o.jsxs)("g",{className:y.a.marks,onMouseEnter:function(){return s(r(e))},onMouseLeave:function(){return s(null)},onPointerMove:function(t){s(r(e)),u(Object(d.h)(t))},opacity:j&&j!==r(e)?b:1,children:[Object(o.jsx)("rect",{x:0,y:c(r(e)),width:n(a(e)),height:c.bandwidth(),fill:i((t.length-m)/t.length)}),Object(o.jsx)("text",{className:y.a.tooltipStroke,x:n(a(e))+h,y:c(r(e))+c.bandwidth()/2,dominantBaseline:"central",children:l(a(e))}),Object(o.jsx)("text",{className:y.a.tooltip,x:n(a(e))+h,y:c(r(e))+c.bandwidth()/2,dominantBaseline:"central",children:l(a(e))})]},r(e))}))},C=function(e){var t=e.hoveredValue,n=e.data,a=e.points,c=e.tooltipOffset,r=n.find((function(e){return e.entity===t}));return Object(o.jsxs)("g",{children:[Object(o.jsxs)("text",{className:y.a.tooltipStroke,x:a[0]+c,y:a[1],dy:".42em",children:[Object(o.jsx)("tspan",{x:a[0]+c,children:"".concat(r.medals>1?"Medals":"Medal",": ").concat(r.medals.toLocaleString()," ")}),Object(o.jsx)("tspan",{x:a[0]+c,dy:"1.3em",children:"Population: ".concat(r.population.toLocaleString())})]}),Object(o.jsxs)("text",{className:y.a.tooltip,x:a[0]+c,y:a[1],dy:".42em",children:[Object(o.jsx)("tspan",{x:a[0]+c,children:"".concat(r.medals>1?"Medals":"Medal",": ").concat(r.medals.toLocaleString()," ")}),Object(o.jsx)("tspan",{x:a[0]+c,dy:"1.3em",children:"Population: ".concat(r.population.toLocaleString())})]})]})},M=window.innerWidth<1e3?window.innerWidth:1e3,N={top:5,right:50,bottom:45,left:160},L=function(e){return e.entity},B=function(e){return Object(d.d)("~r")(e)},V=function(e){var t=e.view,n=e.data,c=Object(a.useState)(null),r=Object(s.a)(c,2),i=r[0],l=r[1],u=Object(a.useState)(null),j=Object(s.a)(u,2),m=j[0],b=j[1],x=Object(a.useCallback)(l,[l]),h=Object(a.useCallback)(b,[b]),O=20*n.length+N.top+N.bottom,f=O-N.top-N.bottom,p=M-N.left-N.right,v=Object(a.useMemo)((function(){return function(e){return e[t]}}),[t]),_=Object(a.useMemo)((function(){return"medals"===t?Object(d.j)().domain([0,Object(d.f)(n,v)]).range([0,p]).nice():Object(d.k)().domain(Object(d.c)(n,v)).range([0,p]).nice()}),[t,n,v,p]),g=Object(a.useMemo)((function(){return Object(d.i)().domain(n.map((function(e){return L(e)}))).range([0,f]).paddingInner(.2)}),[n,f]),y=Object(a.useMemo)((function(){return Object(d.l)(d.e)}),[]),V="medals_per_million"===t?Object(d.d)(".2"):Object(d.d)("~r");return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("svg",{viewBox:"0 0 ".concat(M," ").concat(O),preserveAspectRatio:"xMinYMid",children:Object(o.jsxs)("g",{transform:"translate(".concat(N.left,", ").concat(N.top,")"),children:[Object(o.jsx)(k,{innerHeight:f,xScale:_,tickFormat:B,tickOffset:8,tickCount:M>480?3:2}),Object(o.jsx)(S,{yScale:g,tickOffset:8}),Object(o.jsx)(w,{view:t,data:n,margin:N,innerWidth:p,xScale:_,xValue:v,yScale:g,yValue:L,colorScale:y,tooltipFormat:V,onHover:x,onMove:h,hoveredValue:i,fadeOpacity:.3,tooltipOffset:10}),i&&m?Object(o.jsx)(C,{data:n,hoveredValue:i,points:m,tooltipOffset:10}):null]})})})},P=function(){var e=Object(a.useState)("medals_per_million"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(30),i=Object(s.a)(r,2),l=i[0],u=i[1],j=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=!0;return Object(d.b)("https://raw.githubusercontent.com/edomt/tokyo2020/main/output/medals_per_million.csv",d.a).then((function(t){e&&c(t)})),function(){e=!1}}),[]),n}();if(!j)return Object(o.jsx)("pre",{children:'"Loading..."'});var b=j.sort((function(e,t){return t[n]-e[n]})).slice(0,l>0?l:10);return Object(o.jsxs)(m,{children:[Object(o.jsx)(I,{title:"2020 Summer Olympics ".concat("medals_per_million"===n?"medals per million people":"medals won")}),Object(o.jsxs)("pre",{children:["Last updated: ",b[0].last_updated.toLocaleDateString("ja")]}),Object(o.jsx)(h,{min:10,max:j.length,selected:l,handleChange:u}),Object(o.jsx)(v,{view:n,setView:c}),Object(o.jsx)(V,{view:n,data:b}),Object(o.jsx)(H,{})]})},I=function(e){var t=e.title;return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{margin:0},children:t})})},H=function(){return Object(o.jsxs)("p",{className:"credit",children:["Credit: This chart is created based on Edouard Mathieu's"," ",Object(o.jsx)("a",{href:"https://twitter.com/redouad/status/1418976240954978309",children:"idea"})," ","and ",Object(o.jsx)("a",{href:"https://github.com/edomt/tokyo2020",children:"his project on GitHub"}),"."]})},F=n(59),A=n.n(F),E=function(e){var t=e.min,n=e.max,a=e.selected,c=e.handleChange;return Object(o.jsxs)("div",{className:A.a.inputContainer,children:[Object(o.jsx)("p",{children:"Include entities with at least "}),Object(o.jsx)("input",{type:"number",min:t,max:n,value:a,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("p",{children:" medals"})]})},R=n(24),W=n.n(R),J=function(e){var t=e.children;return Object(o.jsx)("li",{className:W.a.flexCardListItem,children:Object(o.jsx)("div",{className:W.a.flexCard,children:t})})},T=n(7),Z=n.n(T),D=function(e){var t=e.xScale,n=e.innerHeight,a=e.tickFormat,c=e.tickOffset,r=void 0===c?3:c;return t.ticks().map((function(e){return Object(o.jsxs)("g",{className:Z.a.tick,transform:"translate(".concat(t(e),", 0)"),children:[Object(o.jsx)("line",{y2:n}),Object(o.jsx)("text",{y:n+r,dy:"0.71em",style:{textAnchor:"middle"},children:a(e)})]},e)}))},G=function(e){var t=e.yScale,n=e.innerWidth,a=e.tickOffset,c=void 0===a?3:a;return t.ticks(2).map((function(e){return Object(o.jsxs)("g",{className:Z.a.tick,transform:"translate(0,".concat(t(e),")"),children:[Object(o.jsx)("line",{x2:n}),Object(o.jsx)("text",{dy:".32em",x:c+n,style:{textAnchor:"start"},children:e})]},e)}))},z=function(e){var t=e.xScale,n=e.xValue,a=e.yScale,c=e.yValue,r=e.data,i=e.tooltipFormat,l=e.colorScale,s=e.circleRadius,u=void 0===s?10:s,j=e.onHover,m=e.hoveredValue,b=e.fadeOpacity,x=void 0===b?.2:b;return r.map((function(e,s){return Object(o.jsxs)("g",{onMouseEnter:function(){return j(c(e))},onMouseLeave:function(){return j(null)},onPointerMove:function(){j(c(e))},opacity:m&&m!==c(e)?x:1,children:[Object(o.jsx)("circle",{fill:l((r.length-s)/r.length),cx:t(n(e)),cy:a(c(e)),r:u,children:Object(o.jsx)("title",{children:"".concat(e.entity," has earned ").concat(i(n(e))," medals, resulting in ").concat(c(e)," medals per million people")})}),Object(o.jsx)("text",{x:t(n(e))>.9*t(Object(d.f)(r,n))?t(n(e))-u-3:t(n(e))+u+3,y:a(c(e)),dominantBaseline:"central",textAnchor:t(n(e))>.9*t(Object(d.f)(r,n))?"end":"start",children:e.entity})]},"mark".concat(s))}))},Q=window.innerWidth<1e3?window.innerWidth:1e3,X=Q>480?.7*Q:1*Q,Y=20,q=55,U=X-Y-60,K=Q-q-50,$=function(e){return e.medals},ee=function(e){return Object(d.d)("~")(e)},te=function(e){return e.medals_per_million},ne=function(){var e=Object(a.useState)(10),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(s.a)(r,2),l=i[0],u=i[1],j=Object(a.useCallback)(u,[u]),m=Object(a.useMemo)((function(){return Object(d.l)(d.e)}),[]),b=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=!0;return Object(d.b)("https://raw.githubusercontent.com/edomt/tokyo2020/main/output/medals_per_million.csv",d.a).then((function(t){e&&c(t)})),function(){e=!1}}),[]),n}();if(!b)return Object(o.jsx)("pre",{children:'"Loading..."'});var x=b.filter((function(e){return e.medals>=n})),h=Object(d.j)().domain([0,Object(d.f)(x,$)]).range([0,K]).nice(),O=Object(d.k)().domain([Object(d.f)(x,te),Object(d.g)(x,te)]).range([0,U]);return Object(o.jsxs)(J,{children:[Object(o.jsx)(ae,{title:"2020 Summer Olympics: medals per capita vs. plain medal count"}),Object(o.jsxs)("pre",{children:["Last updated: ",x[0].last_updated.toLocaleDateString("ja")]}),Object(o.jsx)(E,{min:1,max:20,selected:n,handleChange:c}),Object(o.jsx)("svg",{viewBox:"0 0 ".concat(Q," ").concat(X),preserveAspectRatio:"xMinYMid",children:Object(o.jsxs)("g",{transform:"translate(".concat(q,", ").concat(Y,")"),children:[Object(o.jsx)(D,{innerHeight:U,xScale:h,tickFormat:ee,tickOffset:7}),Object(o.jsx)(ce,{}),Object(o.jsx)(G,{innerWidth:K,yScale:O,tickOffset:7}),Object(o.jsx)(re,{}),Object(o.jsx)(z,{xScale:h,xValue:$,yScale:O,yValue:te,data:x,tooltipFormat:ee,colorScale:m,circleRadius:6,onHover:j,hoveredValue:l,fadeOpacity:.2})]})}),Object(o.jsx)(ie,{})]})},ae=function(e){var t=e.title;return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{margin:0},children:t})})},ce=function(){return Object(o.jsx)("text",{className:Z.a.axisLabel,x:K/2,y:U+50,textAnchor:"middle",children:"Total Medals"})},re=function(){return Object(o.jsx)("text",{className:Z.a.axisLabel,textAnchor:"middle",transform:"translate(".concat(-20,", ").concat(U/2,") rotate(-90)"),children:"Medals Per Million People"})},ie=function(){return Object(o.jsxs)("p",{className:"credit",children:["Credit: This chart is created based on Edouard Mathieu's"," ",Object(o.jsx)("a",{href:"https://twitter.com/redouad/status/1418976240954978309",children:"idea"})," ","and ",Object(o.jsx)("a",{href:"https://github.com/edomt/tokyo2020",children:"his project on GitHub"}),"."]})},oe=(n(151),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{user:"mgeorgetw",repo:"Tokyo2020MedalRace"}),Object(o.jsx)(P,{}),Object(o.jsx)(ne,{})]})});i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(oe,{})}),document.getElementById("root"))},22:function(e,t,n){e.exports={flexCardListItem:"Card_flexCardListItem__1UgbI",flexCard:"Card_flexCard__aF9iL"}},24:function(e,t,n){e.exports={flexCardListItem:"Card_flexCardListItem__khSI4",flexCard:"Card_flexCard__1o6wJ"}},4:function(e,t,n){e.exports={axisLabel:"BarChart_axisLabel__3vnVy",marks:"BarChart_marks__2eNyt",tooltip:"BarChart_tooltip__3dfDM",tooltipStroke:"BarChart_tooltipStroke__3EqPW",tick:"BarChart_tick__G8viQ",legendLabel:"BarChart_legendLabel__9sZvi",legend:"BarChart_legend__2Julh"}},58:function(e,t,n){e.exports={inputContainer:"Input_inputContainer__2JRdm"}},59:function(e,t,n){e.exports={inputContainer:"Input_inputContainer__29_xR"}},6:function(e,t,n){e.exports={nav:"Nav_nav__2NhzP",viewButton:"Nav_viewButton__16msS",active:"Nav_active__1r6HR"}},7:function(e,t,n){e.exports={axisLabel:"ScatterPlot_axisLabel__1sZtS",marks:"ScatterPlot_marks__3XQOs",tick:"ScatterPlot_tick__3XZMt",tooltip:"ScatterPlot_tooltip__3bZZR",tooltipStroke:"ScatterPlot_tooltipStroke__23dOv"}}},[[152,1,2]]]);
//# sourceMappingURL=main.23e33819.chunk.js.map