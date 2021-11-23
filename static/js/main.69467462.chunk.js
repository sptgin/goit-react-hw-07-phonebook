(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(15),o=n.n(i),s=n(6),u=n(8),l=n(1),d=Object(l.b)("filter/set"),b=Object(l.d)("",Object(u.a)({},d,(function(t,e){return e.payload}))),j=n(7),m=n(20),h=n(10),p=Object(m.a)({reducerPath:"phoneBookApi",baseQuery:Object(h.d)({baseUrl:"https://619b5e6c2782760017445557.mockapi.io/"}),tagTypes:["Contacts"],endpoints:function(t){return{getContacts:t.query({query:function(){return"contacts"},providesTags:function(t){return t?[].concat(Object(j.a)(t.map((function(t){return{type:"Contacts",id:t.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContact:t.mutation({query:function(t){return{url:"contacts",method:"POST",body:t}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),delContact:t.mutation({query:function(t){return{url:"contacts/".concat(t),method:"DELETE"}},invalidatesTags:function(t,e,n){return[{type:"Contacts",id:n}]}})}}}),f=p.useGetContactsQuery,O=(p.useDelContactMutation,p.useAddContactMutation),x=Object(l.a)({reducer:(c={},Object(u.a)(c,p.reducerPath,p.reducer),Object(u.a)(c,"filter",b),c),middleware:function(t){return t().concat(p.middleware)}}),v=(n(33),n(34),n(35),n(2));var y=function(t){var e=t.title,n=t.children;return Object(v.jsxs)("div",{className:"task__section",children:[e&&Object(v.jsx)("h2",{children:e}),n]})},_=n(16),C=n(12),N=n(4),g=n.n(N),q=(n(37),n(22));function T(){var t,e,n,c,a=Object(q.a)(),r=a.register,i=a.handleSubmit,o=a.reset,s=a.formState.errors,u=f().data,l=O(),d=Object(C.a)(l,1)[0];return Object(v.jsxs)("form",{className:"contacts__form",onSubmit:i((function(t){console.log(u),u.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already exists")):(d(t),o())})),children:[Object(v.jsxs)("label",{className:"contcts__form-label",children:["Name",Object(v.jsx)("input",Object(_.a)({className:"contcts__form-input",type:"text",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},r("name",{required:!0,pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/}))),"required"===(null===s||void 0===s||null===(t=s.name)||void 0===t?void 0:t.type)&&Object(v.jsx)("p",{children:"This field is required"}),"pattern"===(null===s||void 0===s||null===(e=s.name)||void 0===e?void 0:e.type)&&Object(v.jsx)("p",{children:"Alphabetical characters only"})]}),Object(v.jsxs)("label",{className:"contcts__form-label",children:["Number",Object(v.jsx)("input",Object(_.a)(Object(_.a)({className:"contcts__form-input",type:"tel"},r("phone",{required:!0,pattern:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/})),{},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"})),"required"===(null===s||void 0===s||null===(n=s.number)||void 0===n?void 0:n.type)&&Object(v.jsx)("p",{children:"This field is required"}),"pattern"===(null===s||void 0===s||null===(c=s.number)||void 0===c?void 0:c.type)&&Object(v.jsx)("p",{children:"Numeric characters only"})]}),Object(v.jsx)("button",{className:"contacts__form-button",type:"submit",children:"Add contact"})]})}T.PropsType={onSubmit:g.a.func.isRequired};n(39);function k(){var t=Object(s.e)((function(t){return t.filter})),e=Object(s.d)();return Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{className:"filter__header",children:"Find contacts by name :"}),Object(v.jsx)("input",{type:"text",name:"filter",value:t,className:"filter__input",onChange:function(t){return e(d(t.target.value))}})]})}n(40);function S(t){var e=t.contact,n=t.handleDelContact;return Object(v.jsxs)("li",{className:"contact__list-item",children:[Object(v.jsxs)("div",{children:[e.name,": ",e.number]}),Object(v.jsx)("button",{className:"contact__list-delete-button",type:"submit",id:e.id,onClick:n,children:"Delete"})]})}S.prototype={id:g.a.number.isRequired,name:g.a.string.isRequired,number:g.a.number.isRequired,onDeleteContact:g.a.func.isRequired};var w=n(21),A=n.n(w);n(59);var L=function(){return Object(v.jsx)(A.a,{className:"SpinnerLoader",type:"Watch",color:"#303f9f",height:100,width:100,timeout:3e3})};n(60);function P(){Object(s.e)((function(t){return t.filter}));var t=f(),e=t.data,n=t.isFetching;return console.log(e),Object(v.jsxs)("div",{children:[n&&Object(v.jsx)(L,{}),e&&!n&&Object(v.jsx)("ul",{className:"contact__list",children:e.map((function(t){return Object(v.jsx)(S,{className:"contacts__list-item",contact:t},t.id)}))})]})}n(61);function R(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"header__main",children:"React HW 007 Phonebook"}),Object(v.jsx)(y,{title:"Phonebook",children:Object(v.jsx)(T,{})}),Object(v.jsxs)(y,{title:"Contacts",children:[Object(v.jsx)(k,{}),Object(v.jsx)(P,{})]})]})}o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(s.a,{store:x,children:Object(v.jsx)(R,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.69467462.chunk.js.map