(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),r=c(6),l=c.n(r),i=(c(13),c(3)),a=(c(14),c(7)),s=(c(15),c(20)),d=c(0);function u(t){var e=Object(n.useState)(""),c=Object(i.a)(e,2),o=c[0],r=c[1];return Object(d.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),o){var c=[].concat(Object(a.a)(t.state),[{content:o,id:Object(s.a)(),completed:!1}]);t.setState(c)}r("")}(e)},children:[Object(d.jsx)("input",{type:"text",placeholder:"add task",onInput:function(t){return function(t){r(t.currentTarget.value)}(t)},value:o}),Object(d.jsx)("button",{type:"submit",children:"Add"})]})}c(17),c(18);var j=c.p+"static/media/trash.4e0143f2.svg",b=function(t){var e=t.ToDoData,c=t.deleteToDo,n=t.toggleState,o=t.checkToDo;return Object(d.jsxs)("li",{className:e.completed?"to-do completed":"to-do ",id:e.id,onClick:function(t){return o(t.currentTarget.id)},children:[Object(d.jsxs)("div",{className:"input-label-container",children:[Object(d.jsx)("input",{type:"checkbox",checked:e.completed?"checked":""}),Object(d.jsx)("label",{htmlFor:e.id,children:e.content})]}),"completed"===n&&Object(d.jsx)("button",{onClick:function(t){return c(t.currentTarget.parentElement.id)},children:Object(d.jsx)("img",{src:j,alt:"trash"})})]})};function f(t){var e=t.state,c=t.setState,n=t.toggleState;function o(t){var n=e.filter((function(e){return e.id!==t}));c(n)}function r(t){var n=e.slice(),o=n.find((function(e){return e.id===t}));o.completed=!o.completed,c(n)}function l(t,e){return"all"===e?t:t="completed"===e?t.filter((function(t){return!0===t.completed})):t.filter((function(t){return!1===t.completed}))}return Object(d.jsxs)("div",{className:"to-do-list-container",children:[Object(d.jsx)("ul",{className:"to-do-list",children:function(t){return t.map((function(t){return Object(d.jsx)(b,{ToDoData:t,deleteToDo:o,toggleState:n,checkToDo:r},t.id)}))}(l(e,n))}),l(e,n).length>=2&&"completed"===n&&Object(d.jsxs)("button",{className:"delete-all",onClick:function(){!function(){var t=e.filter((function(t){return!1===t.completed}));c(t)}()},children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:j,alt:"trash"})})," ",Object(d.jsx)("span",{children:"delete all"})]})]})}var h=function(){var t=Object(n.useState)([{content:"Do coding challenges",id:Object(s.a)(),completed:!1},{content:"Drink coffee",id:Object(s.a)(),completed:!1},{content:"Listen to music",id:Object(s.a)(),completed:!1}]),e=Object(i.a)(t,2),c=e[0],o=e[1],r=Object(n.useState)("all"),l=Object(i.a)(r,2),a=l[0],j=l[1];return Object(n.useEffect)((function(){var t=document.querySelectorAll(".toggler");t.forEach((function(e){e.addEventListener("click",(function(e){t.forEach((function(t){return t.classList.remove("active")})),e.currentTarget.classList.add("active"),j(e.currentTarget.classList[0])}))}))}),[a]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"#todo"}),Object(d.jsxs)("ul",{className:"filter-buttons-container",children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"all active toggler",children:"All"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"not-completed toggler",children:"Active"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"completed toggler",children:"Completed"})})]}),Object(d.jsx)(u,{state:c,setState:o}),Object(d.jsx)(f,{state:c,setState:o,toggleState:a}),Object(d.jsxs)("footer",{children:["created by ",Object(d.jsx)("a",{href:"https://devchallenges.io/portfolio/yousoumar",target:"_blank",children:"yousoumar"})," - devChallenges.io"]})]})};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.588b996f.chunk.js.map