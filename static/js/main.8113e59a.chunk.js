(this.webpackJsonpcontactbooks=this.webpackJsonpcontactbooks||[]).push([[0],{42:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),s=a.n(r),l=(a(42),a(6)),i=a(3),o=a(4),b=a(33),j=a.n(b),x=a(32),d=a.n(x),m=a(36),u=a(15),p=Object(u.b)({name:"data",initialState:{data:[]},reducers:{add:function(e,t){e.data=[].concat(Object(m.a)(e.data),[t.payload])},remove:function(e,t){e.data=e.data.filter((function(e,a){return a!==t.payload}))},update:function(e,t){e.data[t.payload.id]=t.payload.data},selectDelete:function(e,t){e.data=[]}}}),h=p.actions,O=h.add,f=h.remove,g=h.update,N=h.selectDelete,v=p.reducer,y=a(7),E=a(1),w=function(e){var t=e.id,a=e.name,c=e.email,n=e.phone,r=e.checkval,s=Object(i.b)(),l=Object(o.g)();return console.log(r),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("tr",{children:[Object(E.jsxs)("td",{scope:"row",className:"text-center",children:[Object(E.jsx)("input",{id:"check",checked:r,type:"checkbox"})," ".concat(t+1),Object(E.jsx)("label",{htmlFor:"check"})]}),Object(E.jsx)("td",{className:"text-center",children:"".concat(a)}),Object(E.jsx)("td",{className:"text-center",children:c}),Object(E.jsx)("td",{className:"text-center",children:n}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(y.b,{to:"/table/edit/".concat(t),className:"btn btn-info mr-1",style:{zIndex:"1000",color:"#fff"},children:Object(E.jsx)(d.a,{})}),Object(E.jsx)("button",{className:"btn btn-danger",onClick:function(){s(f(t)),l.push("/table")},style:{zIndex:"1000"},children:Object(E.jsx)(j.a,{})})]})]})})},P=a(34),k=a.n(P),S=a(35),C=a.n(S),I=function(){var e=Object(i.c)((function(e){return e.rightUser.ruser}));return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("header",{className:"bg-primary py-2 mb-4",children:Object(E.jsxs)("div",{className:"container text-light d-flex flex-column flex-sm-row justify-content-between  align-items-center",children:[Object(E.jsxs)("h3",{className:"d-flex align-items-center justify-content-center",children:[Object(E.jsx)(k.a,{style:{fontSize:"40px"}}),"Contact book"]}),Object(E.jsx)("div",{children:Object(E.jsx)("h3",{children:e.Email.slice(0,10)})}),Object(E.jsxs)(y.b,{to:"/table/create-contact",className:"btn btn-danger text-light",children:[Object(E.jsx)(C.a,{}),"Add"]})]})})})},G=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(i.c)((function(e){return e.tableData.data})),s=Object(i.b)();Object(o.g)();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(I,{}),Object(E.jsxs)("div",{className:"container",children:[1==a?Object(E.jsx)("button",{onClick:function(){s(N())},className:"btn btn-danger",children:"Delete All"}):null,Object(E.jsxs)("table",{className:"table table-shadow",children:[Object(E.jsx)("thead",{className:"bg-danger text-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{scope:"col",className:"text-center",children:Object(E.jsx)("input",{onClick:function(){return n(1!=a)},value:a,type:"checkbox"})}),Object(E.jsx)("th",{scope:"col",className:"text-center",children:"Name"}),Object(E.jsx)("th",{scope:"col",className:"text-center",children:"Email"}),Object(E.jsx)("th",{scope:"col",className:"text-center",children:"Phone"}),Object(E.jsx)("th",{scope:"col",className:"text-center",children:"Action"})]})}),Object(E.jsx)("tbody",{children:r.map((function(e,t){return Object(E.jsx)(w,{id:t,name:e.Name,email:e.Email,phone:e.Phone,checkval:a},t)}))})]})]})]})},D=Object(u.b)({name:"ruser",initialState:{ruser:null},reducers:{login:function(e,t){e.ruser=t.payload}}}),A=D.actions.login,F=D.reducer,H=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),b=s[0],j=s[1],x=Object(i.c)((function(e){return e.user.user})),d=Object(o.g)(),m=Object(i.b)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"d-flex justify-content-center align-items-center bg-dark",style:{height:"100vh"},children:Object(E.jsx)("div",{className:"w-50 p-3",style:{boxShadow:"5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",border:"3px solid #343a40",maxWidth:"350px"},children:Object(E.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),""!==a&&(""!==b&&(a!==x.Email?(alert("Please enter the Corect Email"),!1):b!==x.Password?(alert("Please enter the Corect PassWord"),!1):void(a===x.Email&&b===x.Password&&(m(A({Email:x.Email,Password:x.Password})),d.push("/table")))))},children:[Object(E.jsx)("h3",{className:"text-light",style:{textAlign:"center"},children:"Login"}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"exampleInputEmail1",children:"Email address"}),Object(E.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(E.jsx)("small",{id:"emailHelp",className:"form-text text-muted text-light",children:"We'll never share your email with anyone else."})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"exampleInputPassword1",children:"Password"}),Object(E.jsx)("input",{value:b,onChange:function(e){return j(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(E.jsxs)("div",{className:"form-check",children:[Object(E.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(E.jsx)("label",{className:"mb-2 form-check-label text-light",for:"exampleCheck1",children:"remember me"})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Submit"}),Object(E.jsx)("br",{}),Object(E.jsx)(y.b,{className:"pb-5 text-light",to:"/login/ragister",children:" Ragister Account Now"})]})})})})},W=Object(u.b)({name:"user",initialState:{user:{Email:"",Password:""}},reducers:{ragister:function(e,t){e.user=t.payload}}}),z=W.actions.ragister,R=W.reducer,U=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),b=s[0],j=s[1],x=Object(c.useState)(""),d=Object(l.a)(x,2),m=d[0],u=d[1],p=Object(i.b)(),h=Object(o.g)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"d-flex justify-content-center align-items-center bg-dark",style:{height:"100vh"},children:Object(E.jsx)("div",{className:"w-50 p-3",style:{boxShadow:"5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",border:"3px solid #343a40",maxWidth:"350px"},children:Object(E.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),b===m&&(""!==a&&(""!==b&&(""!==m&&(p(z({Email:a,Password:b})),n(""),j(""),u(""),void h.push("/")))))},children:[Object(E.jsx)("h3",{className:"text-light",style:{textAlign:"center"},children:"Ragister"}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"exampleInputEmail1",children:"Email address"}),Object(E.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(E.jsx)("small",{id:"emailHelp",className:"form-text text-muted text-light",children:"We'll never share your email with anyone else."})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"exampleInputPassword1",children:"Password"}),Object(E.jsx)("input",{value:b,onChange:function(e){return j(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"exampleInputPassword2",children:"Confirm Password"}),Object(E.jsx)("input",{value:m,onChange:function(e){return u(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword2",placeholder:"Password"})]}),Object(E.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Ragister"})]})})})})},J=a(25),B=a.n(J),L=a(24),M=a.n(L),q=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),b=s[0],j=s[1],x=Object(c.useState)(""),d=Object(l.a)(x,2),m=d[0],u=d[1],p=Object(i.b)(),h=Object(o.g)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"d-flex justify-content-center align-items-center bg-dark",style:{minHeight:"100vh"},children:Object(E.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),p(O({Name:a,Email:b,Phone:m})),""==a||""==b||""==m)return!1;n(""),j(""),u(""),h.push("/table")},className:"p-5",style:{width:"800px",boxShadow:"5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",border:"3px solid #343a40"},children:[Object(E.jsx)("h2",{className:"text-center text-light",children:"Create Contact"}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"formGroupExampleInput",children:"Name"}),Object(E.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Example input"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"formGroupExampleInput2",children:"Email"}),Object(E.jsx)("input",{value:b,onChange:function(e){return j(e.target.value)},type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"formGroupExampleInput2",children:"Phone"}),Object(E.jsx)("input",{value:m,onChange:function(e){return u(e.target.value)},type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]}),Object(E.jsx)("button",{className:"btn btn-info",onClick:function(){return h.push("/table")},children:Object(E.jsx)(M.a,{})}),Object(E.jsx)("button",{className:"float-right btn btn-info",type:"submit",children:Object(E.jsx)(B.a,{})})]})})})},K=function(){var e=Object(o.h)().id,t=Object(i.c)((function(t){return t.tableData.data[e]})),a=(Object(i.c)((function(e){return e.tableData.data})),Object(c.useState)(t.Name)),n=Object(l.a)(a,2),r=n[0],s=n[1],b=Object(c.useState)(t.Email),j=Object(l.a)(b,2),x=j[0],d=j[1],m=Object(c.useState)(t.Phone),u=Object(l.a)(m,2),p=u[0],h=u[1],O=Object(i.b)(),f=Object(o.g)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"d-flex justify-content-center align-items-center bg-dark",style:{minHeight:"100vh"},children:Object(E.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O(g({id:e,data:{Name:r,Email:x,Phone:p}})),s(""),d(""),h(""),f.push("/table")},className:"p-5",style:{width:"800px",boxShadow:"5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",border:"3px solid #343a40"},children:[Object(E.jsx)("h2",{className:"text-center text-light",children:"Edit Contact"}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"formGroupExampleInput",children:"Name"}),Object(E.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Example input"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"formGroupExampleInput2",children:"Email"}),Object(E.jsx)("input",{value:x,onChange:function(e){return d(e.target.value)},type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{className:"text-light",for:"formGroupExampleInput2",children:"Phone"}),Object(E.jsx)("input",{value:p,onChange:function(e){return h(e.target.value)},type:"text",className:"form-control",id:"formGroupExampleInput2",placeholder:"Another input"})]}),Object(E.jsx)("button",{className:"btn btn-info",onClick:function(){return f.push("/table")},children:Object(E.jsx)(M.a,{})}),Object(E.jsx)("button",{className:"float-right btn btn-info",type:"submit",children:Object(E.jsx)(B.a,{})})]})})})};var Q=function(){var e=Object(i.c)((function(e){return e.rightUser.ruser}));return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(o.d,{children:[Object(E.jsx)(o.b,{exact:!0,path:"/",component:H}),Object(E.jsx)(o.b,{exact:!0,path:"/login/ragister",component:U}),Object(E.jsx)(o.b,{exact:!0,path:"/table",component:e?G:H}),Object(E.jsx)(o.b,{exact:!0,path:"/table/create-contact",component:e?q:H}),Object(E.jsx)(o.b,{exact:!0,path:"/table/edit/:id",component:e?K:H}),Object(E.jsx)(o.a,{to:H})]})})},T=(a(50),Object(u.a)({reducer:{tableData:v,user:R,rightUser:F}}));s.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(i.a,{store:T,children:Object(E.jsx)(y.a,{children:Object(E.jsx)(Q,{})})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8113e59a.chunk.js.map