(this["webpackJsonptokyo-2020-medal-race"]=this["webpackJsonptokyo-2020-medal-race"]||[]).push([[0],{148:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(57),i=n.n(r),o=(n(148),n(0)),s=function(e){var t=e.user,n=e.repo;return Object(o.jsx)("div",{style:{marginTop:"0.5rem",marginLeft:"0.5rem"},children:Object(o.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=".concat(t,"&repo=").concat(n,"&type=star&count=false&size=large"),frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"})})},l=n(3),d=n(2),u=n(22),j=n.n(u),m=function(e){var t=e.children;return Object(o.jsx)("li",{className:j.a.flexCardListItem,children:Object(o.jsx)("div",{className:j.a.flexCard,children:t})})},h=n(58),b=n.n(h),x=function(e){var t=e.min,n=e.max,a=e.selected,c=e.handleChange;return Object(o.jsxs)("div",{className:b.a.inputContainer,children:[Object(o.jsxs)("p",{children:["Include ",Number(a)===n?"all":"top"]}),Object(o.jsx)("input",{type:"number",min:t,max:n,step:"10",value:a,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("p",{children:" entities"})]})},O=n(23),f=n(6),p=n.n(f),v=function(e){var t=e.view,n=e.setView,c=[{name:"Medals Per Capita",view_name:"medals_per_million",className:"medals_per_million"===t?"".concat(p.a.active," ").concat(p.a.viewButton):p.a.viewButton},{name:"Plain Medal Count",view_name:"medals",className:"medals"===t?"".concat(p.a.active," ").concat(p.a.viewButton):p.a.viewButton}];return Object(o.jsxs)("div",{className:p.a.nav,children:["Sort by"," ",c.map((function(e){return Object(a.createElement)(_,Object(O.a)(Object(O.a)({setView:n},e),{},{key:e.view_name}))}))]})},_=function(e){var t=e.name,n=e.view_name,a=e.className,c=e.setView;return Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),c(n)},type:"button",className:a,children:t})},g=n(4),y=n.n(g),k=function(e){var t=e.xScale,n=e.innerHeight,a=e.tickFormat,c=e.tickOffset,r=void 0===c?3:c,i=e.tickCount,s=void 0===i?6:i;return t.ticks(s).map((function(e){return Object(o.jsxs)("g",{className:y.a.tick,transform:"translate(".concat(t(e),", 0)"),children:[Object(o.jsx)("line",{y2:n}),Object(o.jsx)("text",{y:n+r,dy:"0.71em",style:{textAnchor:"middle"},children:a(e)})]},e)}))},S=function(e){var t=e.yScale,n=e.tickOffset,a=void 0===n?3:n;return t.domain().map((function(e){return Object(o.jsx)("g",{className:y.a.tick,transform:"translate(0,".concat(t(e)+t.bandwidth()/2,")"),children:Object(o.jsx)("text",{x:-a,style:{fontWeight:"bold",textAnchor:"end",dominantBaseline:"central"},children:e})},e)}))},w=function(e){e.view;var t=e.data,n=e.xScale,a=e.xValue,c=e.yScale,r=e.yValue,i=e.colorScale,s=e.tooltipFormat,l=e.onHover,u=e.onMove,j=e.hoveredValue,m=e.fadeOpacity,h=void 0===m?.2:m,b=e.tooltipOffset,x=void 0===b?10:b;return t.map((function(e,m){return Object(o.jsxs)("g",{className:y.a.marks,onMouseEnter:function(){return l(r(e))},onMouseLeave:function(){return l(null)},onPointerMove:function(t){l(r(e)),u(Object(d.h)(t))},opacity:j&&j!==r(e)?h:1,children:[Object(o.jsx)("rect",{x:0,y:c(r(e)),width:n(a(e)),height:c.bandwidth(),fill:i((t.length-m)/t.length)}),Object(o.jsx)("text",{className:y.a.tooltipStroke,x:n(a(e))+x,y:c(r(e))+c.bandwidth()/2,dominantBaseline:"central",children:s(a(e))}),Object(o.jsx)("text",{className:y.a.tooltip,x:n(a(e))+x,y:c(r(e))+c.bandwidth()/2,dominantBaseline:"central",children:s(a(e))})]},r(e))}))},C=function(e){var t=e.hoveredValue,n=e.data,a=e.points,c=e.tooltipOffset,r=n.find((function(e){return e.entity===t}));return Object(o.jsxs)("g",{children:[Object(o.jsxs)("text",{className:y.a.tooltipStroke,x:a[0]+c,y:a[1],dy:".42em",children:[Object(o.jsx)("tspan",{x:a[0]+c,children:"".concat(r.medals>1?"Medals":"Medal",": ").concat(r.medals.toLocaleString()," ")}),Object(o.jsx)("tspan",{x:a[0]+c,dy:"1.3em",children:"Population: ".concat(r.population.toLocaleString())})]}),Object(o.jsxs)("text",{className:y.a.tooltip,x:a[0]+c,y:a[1],dy:".42em",children:[Object(o.jsx)("tspan",{x:a[0]+c,children:"".concat(r.medals>1?"Medals":"Medal",": ").concat(r.medals.toLocaleString()," ")}),Object(o.jsx)("tspan",{x:a[0]+c,dy:"1.3em",children:"Population: ".concat(r.population.toLocaleString())})]})]})},N=window.innerWidth<1e3?window.innerWidth:1e3,M={top:5,right:50,bottom:45,left:160},L=function(e){return e.entity},B=function(e){return Object(d.d)("~r")(e)},V=function(e){var t=e.view,n=e.data,c=Object(a.useState)(null),r=Object(l.a)(c,2),i=r[0],s=r[1],u=Object(a.useState)(null),j=Object(l.a)(u,2),m=j[0],h=j[1],b=Object(a.useCallback)(s,[s]),x=Object(a.useCallback)(h,[h]),O=20*n.length+M.top+M.bottom,f=O-M.top-M.bottom,p=N-M.left-M.right,v=Object(a.useMemo)((function(){return function(e){return e[t]}}),[t]),_=Object(a.useMemo)((function(){return"medals"===t?Object(d.j)().domain([0,Object(d.f)(n,v)]).range([0,p]).nice():Object(d.k)().domain(Object(d.c)(n,v)).range([0,p]).nice()}),[t,n,v,p]),g=Object(a.useMemo)((function(){return Object(d.i)().domain(n.map((function(e){return L(e)}))).range([0,f]).paddingInner(.2)}),[n,f]),y=Object(a.useMemo)((function(){return Object(d.l)(d.e)}),[]),V="medals_per_million"===t?Object(d.d)(".2"):Object(d.d)("~r");return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("svg",{viewBox:"0 0 ".concat(N," ").concat(O),preserveAspectRatio:"xMinYMid",children:Object(o.jsxs)("g",{transform:"translate(".concat(M.left,", ").concat(M.top,")"),children:[Object(o.jsx)(k,{innerHeight:f,xScale:_,tickFormat:B,tickOffset:8,tickCount:N>480?3:2}),Object(o.jsx)(S,{yScale:g,tickOffset:8}),Object(o.jsx)(w,{view:t,data:n,margin:M,innerWidth:p,xScale:_,xValue:v,yScale:g,yValue:L,colorScale:y,tooltipFormat:V,onHover:b,onMove:x,hoveredValue:i,fadeOpacity:.3,tooltipOffset:10}),i&&m?Object(o.jsx)(C,{data:n,hoveredValue:i,points:m,tooltipOffset:10}):null]})})})},P=function(){var e=Object(a.useState)("medals_per_million"),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(30),i=Object(l.a)(r,2),s=i[0],u=i[1],j=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=!0;return Object(d.b)("https://raw.githubusercontent.com/edomt/tokyo2020/main/output/medals_per_million.csv",d.a).then((function(t){e&&c(t)})),function(){e=!1}}),[]),n}();if(!j)return Object(o.jsx)("pre",{children:'"Loading..."'});var h=j.sort((function(e,t){return t[n]-e[n]})).slice(0,s>0?s:10);return Object(o.jsxs)(m,{children:[Object(o.jsx)(I,{title:"2020 Summer Olympics ".concat("medals_per_million"===n?"medals per million people":"medals won")}),Object(o.jsxs)("pre",{children:["Last updated: ",h[0].last_updated.toLocaleDateString("ja")]}),Object(o.jsx)(x,{min:10,max:j.length,selected:s,handleChange:u}),Object(o.jsx)(v,{view:n,setView:c}),Object(o.jsx)(V,{view:n,data:h}),Object(o.jsx)(F,{})]})},I=function(e){var t=e.title;return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{margin:0},children:t})})},F=function(){return Object(o.jsxs)("p",{className:"credit",children:["Credit: This chart is created based on Edouard Mathieu's"," ",Object(o.jsx)("a",{href:"https://twitter.com/redouad/status/1418976240954978309",children:"idea"})," ","and ",Object(o.jsx)("a",{href:"https://github.com/edomt/tokyo2020",children:"his project on GitHub"}),"."]})},H=n(59),A=n.n(H),W=function(e){var t=e.min,n=e.max,a=e.selected,c=e.handleChange;return Object(o.jsxs)("div",{className:A.a.inputContainer,children:[Object(o.jsx)("p",{children:"Include entities with at least "}),Object(o.jsx)("input",{type:"number",min:t,max:n,value:a,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("p",{children:" medals"})]})},E=n(24),R=n.n(E),T=function(e){var t=e.children;return Object(o.jsx)("li",{className:R.a.flexCardListItem,children:Object(o.jsx)("div",{className:R.a.flexCard,children:t})})},J=n(7),Z=n.n(J),D=function(e){var t=e.xScale,n=e.innerHeight,a=e.tickFormat,c=e.tickOffset,r=void 0===c?3:c;return t.ticks().map((function(e){return Object(o.jsxs)("g",{className:Z.a.tick,transform:"translate(".concat(t(e),", 0)"),children:[Object(o.jsx)("line",{y2:n}),Object(o.jsx)("text",{y:n+r,dy:"0.71em",style:{textAnchor:"middle"},children:a(e)})]},e)}))},G=function(e){var t=e.yScale,n=e.innerWidth,a=e.tickOffset,c=void 0===a?3:a;return t.ticks(2).map((function(e){return Object(o.jsxs)("g",{className:Z.a.tick,transform:"translate(0,".concat(t(e),")"),children:[Object(o.jsx)("line",{x2:n}),Object(o.jsx)("text",{dy:".32em",x:c+n,style:{textAnchor:"start"},children:e})]},e)}))},z=function(e){var t=e.xScale,n=e.xValue,a=e.yScale,c=e.yValue,r=e.data,i=e.tooltipFormat,s=e.colorScale,l=e.circleRadius,u=void 0===l?10:l,j=e.onHover,m=e.hoveredValue,h=e.fadeOpacity,b=void 0===h?.2:h;return r.map((function(e,l){return Object(o.jsxs)("g",{onMouseEnter:function(){return j(c(e))},onMouseLeave:function(){return j(null)},onPointerMove:function(){j(c(e))},opacity:m&&m!==c(e)?b:1,children:[Object(o.jsx)("circle",{fill:s((r.length-l)/r.length),cx:t(n(e)),cy:a(c(e)),r:u,children:Object(o.jsx)("title",{children:"".concat(e.entity," has earned ").concat(i(n(e))," medals, resulting in ").concat(c(e)," medals per million people")})}),Object(o.jsx)("text",{x:t(n(e))>.9*t(Object(d.f)(r,n))?t(n(e))-u-3:t(n(e))+u+3,y:a(c(e)),dominantBaseline:"central",textAnchor:t(n(e))>.9*t(Object(d.f)(r,n))?"end":"start",children:e.entity})]},"mark".concat(l))}))},Q=window.innerWidth<1e3?window.innerWidth:1e3,X=Q>480?.7*Q:1*Q,Y=20,q=55,U=X-Y-60,K=Q-q-50,$=function(e){return e.medals},ee=function(e){return Object(d.d)("~")(e)},te=function(e){return e.medals_per_million},ne=function(){var e=Object(a.useState)(10),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(l.a)(r,2),s=i[0],u=i[1],j=Object(a.useCallback)(u,[u]),m=Object(a.useMemo)((function(){return Object(d.l)(d.e)}),[]),h=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=!0;return Object(d.b)("https://raw.githubusercontent.com/edomt/tokyo2020/main/output/medals_per_million.csv",d.a).then((function(t){e&&c(t)})),function(){e=!1}}),[]),n}();if(!h)return Object(o.jsx)("pre",{children:'"Loading..."'});var b=h.filter((function(e){return e.medals>=n})),x=Object(d.j)().domain([0,Object(d.f)(b,$)]).range([0,K]).nice(),O=Object(d.k)().domain([Object(d.f)(b,te),Object(d.g)(b,te)]).range([0,U]);return Object(o.jsxs)(T,{children:[Object(o.jsx)(ae,{title:"2020 Summer Olympics: medals per capita vs. plain medal count"}),Object(o.jsxs)("pre",{children:["Last updated: ",b[0].last_updated.toLocaleDateString("ja")]}),Object(o.jsx)(W,{min:1,max:20,selected:n,handleChange:c}),Object(o.jsx)("svg",{viewBox:"0 0 ".concat(Q," ").concat(X),preserveAspectRatio:"xMinYMid",children:Object(o.jsxs)("g",{transform:"translate(".concat(q,", ").concat(Y,")"),children:[Object(o.jsx)(D,{innerHeight:U,xScale:x,tickFormat:ee,tickOffset:7}),Object(o.jsx)(ce,{}),Object(o.jsx)(G,{innerWidth:K,yScale:O,tickOffset:7}),Object(o.jsx)(re,{}),Object(o.jsx)(z,{xScale:x,xValue:$,yScale:O,yValue:te,data:b,tooltipFormat:ee,colorScale:m,circleRadius:6,onHover:j,hoveredValue:s,fadeOpacity:.2})]})}),Object(o.jsx)(ie,{})]})},ae=function(e){var t=e.title;return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{margin:0},children:t})})},ce=function(){return Object(o.jsx)("text",{className:Z.a.axisLabel,x:K/2,y:U+50,textAnchor:"middle",children:"Total Medals"})},re=function(){return Object(o.jsx)("text",{className:Z.a.axisLabel,textAnchor:"middle",transform:"translate(".concat(-20,", ").concat(U/2,") rotate(-90)"),children:"Medals Per Million People"})},ie=function(){return Object(o.jsxs)("p",{className:"credit",children:["Credit: This chart is created based on Edouard Mathieu's"," ",Object(o.jsx)("a",{href:"https://twitter.com/redouad/status/1418976240954978309",children:"idea"})," ","and ",Object(o.jsx)("a",{href:"https://github.com/edomt/tokyo2020",children:"his project on GitHub"}),"."]})},oe=(n(151),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"intro",children:"A fairer medal system"}),Object(o.jsx)("p",{className:"intro",children:"When you look at Olympic's official medal count, it is easy to find that countries with a larger population tend to sit on the top of the chart. Although there are limits to the number of athletes each country can send to the Olympic games, larger countries do have a bigger pool to choose the best of their athletes. Obviously there should be a fairer way to count the medals."}),Object(o.jsx)("p",{className:"intro",children:"So what if we count the medals considering the population of each country? Which country wins the most medals per capita? That is what these charts are about."})]})}),se=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s,{user:"mgeorgetw",repo:"Tokyo2020MedalRace"}),Object(o.jsx)(oe,{}),Object(o.jsx)(P,{}),Object(o.jsx)(ne,{})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(se,{})}),document.getElementById("root"))},22:function(e,t,n){e.exports={flexCardListItem:"Card_flexCardListItem__1UgbI",flexCard:"Card_flexCard__aF9iL"}},24:function(e,t,n){e.exports={flexCardListItem:"Card_flexCardListItem__khSI4",flexCard:"Card_flexCard__1o6wJ"}},4:function(e,t,n){e.exports={axisLabel:"BarChart_axisLabel__3vnVy",marks:"BarChart_marks__2eNyt",tooltip:"BarChart_tooltip__3dfDM",tooltipStroke:"BarChart_tooltipStroke__3EqPW",tick:"BarChart_tick__G8viQ",legendLabel:"BarChart_legendLabel__9sZvi",legend:"BarChart_legend__2Julh"}},58:function(e,t,n){e.exports={inputContainer:"Input_inputContainer__2JRdm"}},59:function(e,t,n){e.exports={inputContainer:"Input_inputContainer__29_xR"}},6:function(e,t,n){e.exports={nav:"Nav_nav__2NhzP",viewButton:"Nav_viewButton__16msS",active:"Nav_active__1r6HR"}},7:function(e,t,n){e.exports={axisLabel:"ScatterPlot_axisLabel__1sZtS",marks:"ScatterPlot_marks__3XQOs",tick:"ScatterPlot_tick__3XZMt",tooltip:"ScatterPlot_tooltip__3bZZR",tooltipStroke:"ScatterPlot_tooltipStroke__23dOv"}}},[[152,1,2]]]);
//# sourceMappingURL=main.890ce509.chunk.js.map