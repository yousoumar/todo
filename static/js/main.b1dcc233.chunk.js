(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),r=c(6),l=c.n(r),a=(c(13),c(2)),i=(c(14),c(7)),s=(c(15),c(21)),u=c(0);function d(t){var e=Object(n.useState)(""),c=Object(a.a)(e,2),o=c[0],r=c[1];return Object(u.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),o){var c=[].concat(Object(i.a)(t.state),[{content:o,id:Object(s.a)(),completed:!1}]);localStorage.setItem("state",JSON.stringify(c)),t.setState(c)}t.toggleSetState("all"),r("")}(e)},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nouvelle t\xe2che",onInput:function(t){return function(t){r(t.currentTarget.value)}(t)},value:o}),Object(u.jsx)("button",{type:"submit",children:"Ajouter"})]})}c(17),c(18);var j=c.p+"static/media/trash.4e0143f2.svg",b=function(t){var e=t.ToDoData,c=t.deleteToDo,n=t.toggleState,o=t.checkToDo;return Object(u.jsxs)("li",{className:e.completed?"to-do completed":"to-do ",id:e.id,children:[Object(u.jsxs)("div",{className:"input-label-container",children:[Object(u.jsx)("input",{type:"checkbox",checked:e.completed?"checked":"",onClick:function(t){return o(t.currentTarget.parentElement.parentElement.id)}}),Object(u.jsx)("label",{children:e.content})]}),"completed"===n&&Object(u.jsx)("button",{onClick:function(t){return c(t.currentTarget.parentElement.id)},children:Object(u.jsx)("img",{src:j,alt:"trash"})})]})};function m(t){var e=t.state,c=t.setState,n=t.toggleState;function o(t){var n=e.filter((function(e){return e.id!==t}));localStorage.setItem("state",JSON.stringify(n)),c(n)}function r(t){var n=e.slice(),o=n.find((function(e){return e.id===t}));o.completed=!o.completed,localStorage.setItem("state",JSON.stringify(n)),c(n)}function l(t,e){return"all"===e?t:t="completed"===e?t.filter((function(t){return!0===t.completed})):t.filter((function(t){return!1===t.completed}))}return Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{className:"to-do-list",children:function(t){return t.map((function(t){return Object(u.jsx)(b,{ToDoData:t,deleteToDo:o,toggleState:n,checkToDo:r},t.id)}))}(l(e,n))}),l(e,n).length>=2&&"completed"===n&&Object(u.jsxs)("button",{className:"delete-all",onClick:function(){!function(){var t=e.filter((function(t){return!1===t.completed}));localStorage.setItem("state",JSON.stringify(t)),c(t)}()},children:[Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:j,alt:"trash"})})," ",Object(u.jsx)("span",{children:"Tout supprimer"})]})]})}c(19);function f(){return Object(u.jsxs)("div",{className:"loader",children:[Object(u.jsx)("h1",{children:"#todo"}),Object(u.jsx)("div",{children:"Pour ne plus jamais oublier"})]})}var O=function(){var t=Object(n.useState)(JSON.parse(localStorage.getItem("state"))),e=Object(a.a)(t,2),c=e[0],o=e[1],r=[{content:"Apprendre React",id:Object(s.a)(),completed:!1},{content:"Boire du caf\xe9",id:Object(s.a)(),completed:!1},{content:"Ecouter de la musique",id:Object(s.a)(),completed:!1}],l=Object(n.useState)("all"),i=Object(a.a)(l,2),j=i[0],b=i[1];function O(t){b(t.currentTarget.classList[0])}var p=Object(n.useState)(""),h=Object(a.a)(p,2),x=h[0],g=h[1];return Object(n.useEffect)((function(){setTimeout((function(){g("loaded")}),2e3)}),[]),Object(u.jsx)(u.Fragment,{children:"loaded"===x?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"#todo"}),Object(u.jsxs)("ul",{className:"filter-buttons-container",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"all"===j?"all active ":"all ",onClick:function(t){O(t)},children:"Tout"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"no-completed"===j?"no-completed active ":"no-completed ",onClick:function(t){O(t)},children:"Active"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"completed"===j?"completed active ":"completed ",onClick:function(t){O(t)},children:"Complet\xe9e"})})]}),Object(u.jsx)(d,{state:c||r,setState:o,toggleSetState:b}),Object(u.jsx)(m,{state:c||r,setState:o,toggleState:j}),Object(u.jsxs)("footer",{children:["created by ",Object(u.jsx)("a",{href:"https://github.com/yousoumar",target:"_blank",rel:"noreferrer",children:"yousoumar"})," - devChallenges.io"]})]}):Object(u.jsx)(f,{})})};l.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b1dcc233.chunk.js.map