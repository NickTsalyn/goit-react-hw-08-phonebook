"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{2164:function(n,e,r){r.r(e),r.d(e,{default:function(){return ln}});var t,o,a,i,c,s,l,d,u,p,x,m,g,b,h,f,v,Z=r(6727),j=r(9434),k=r(5705),w=r(5984),y=r(168),C=r(6487),z=r(1535),F=(0,C.ZP)(k.l0)(t||(t=(0,y.Z)(["\n  margin-top: 30px;\n"]))),A=(0,C.ZP)(z.z)(o||(o=(0,y.Z)(["\n  font-size: 20px;\n  padding: 10px 20px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=C.ZP.label(a||(a=(0,y.Z)(["\n  color: var(--section);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n"]))),L=((0,C.ZP)(k.Bc)(i||(i=(0,y.Z)(["\n  color: var(--accent);\n  font-weight: 600;\n  background-color: var(--section);\n  border-radius: 20px;\n  padding: 5px;\n  margin-bottom: 10px;\n"]))),(0,C.ZP)(k.gN)(c||(c=(0,y.Z)(["\n  display: block;\n  width: inherit;\n  margin-bottom: 10px;\n  margin-top: 7px;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 20px;\n  color: var(--text);\n  border: var(--text);\n  background-color: var(--section);\n  outline: transparent;\n  border-radius: 20px;\n  padding: 10px 20px;\n\n  &:hover,\n  &:focus {\n    outline: 2px solid var(--accent);\n    box-shadow: 1px 1px 1px var(--accent);\n  }\n"])))),_=r(3634),O=function(n){return n.contacts.items},R=function(n){return n.filter},T=r(184),q=Z.Ry().shape({name:Z.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:Z.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),S=function(){var n=(0,j.I0)(),e=(0,j.v9)(O);return(0,T.jsx)(k.J9,{initialValues:{name:"",number:""},validationSchema:q,onSubmit:function(r){var t=r.name,o=r.number,a={id:(0,w.x0)(),name:t,number:o};e.find((function(n){return n.name.toLowerCase()===a.name.toLowerCase()}))?alert("This name already exists. Please enter a different name."):n((0,_.el)(a))},children:(0,T.jsxs)(F,{children:[(0,T.jsxs)(P,{htmlFor:"name",children:["Name",(0,T.jsx)(L,{type:"text",name:"name"})]}),(0,T.jsxs)(P,{htmlFor:"number",children:["Number",(0,T.jsx)(L,{type:"tel",name:"number"})]}),(0,T.jsx)(A,{type:"submit",children:"Add contact"})]})})},M=r(6822),N=M.Z.div(s||(s=(0,y.Z)(["\n  margin: 10px 0 20px;\n"]))),E=M.Z.label(l||(l=(0,y.Z)(["\n  color: var(--section);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n"]))),I=M.Z.input(d||(d=(0,y.Z)(["\n  display: block;\n  width: inherit;\n  margin: 0 auto;\n\n  margin-top: 10px;\n  color: var(--text);\n  font-weight: 600;\n  outline: transparent;\n  border: var(--text);\n  border-radius: 20px;\n  padding: 10px 20px;\n  background-color: var(--section);\n\n  &:hover,\n  &:focus {\n    outline: 2px solid var(--accent);\n    box-shadow: 1px 1px 1px var(--accent);\n  }\n"]))),B=r(4808),D=function(){var n=(0,j.I0)(),e=(0,j.v9)((function(n){return n.filter}));return(0,T.jsxs)(N,{children:[(0,T.jsx)(E,{htmlFor:"Filter",children:"Find contacts by name"}),(0,T.jsx)(I,{type:"text",name:"Filter",value:e,onChange:function(e){return n((0,B.$r)(e.currentTarget.value))}})]})},J=r(9439),$=M.Z.div(u||(u=(0,y.Z)(["\n  color: var(--text);\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),V=M.Z.li(p||(p=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: inherit;\n  background-color: var(--section);\n  border: 1px solid var(--section);\n  border-radius: 20px;\n  padding: 10px 20px;\n  min-width: fit-content;\n"]))),G=r(2791),H=r(7948),K=r.n(H),Q=(M.Z.div(x||(x=(0,y.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  width: 100%;\n  height: 100%;\n\n  backdrop-filter: blur(2px);\n"]))),M.Z.div(m||(m=(0,y.Z)(["\n  z-index: 2;\n\n  max-width: 250px;\n  max-height: 90vh;\n\n\n  padding: 20px;\n\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.1);\n\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 16px;\n\n  backdrop-filter: blur(0.5px);\n  overflow-y: auto;\n"])))),U=M.Z.div(g||(g=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  backdrop-filter: blur(5px);\n  background-color: rgba(255, 255, 255, 0.);\n"]))),W=M.Z.p(b||(b=(0,y.Z)(["\n  margin-bottom: 20px;\n  line-height: 1.6;\n  font-size: 14px;\n  text-align: center;\n  color: var(--text);\n"]))),X=M.Z.span(h||(h=(0,y.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--text);\n"]))),Y=M.Z.button(f||(f=(0,y.Z)(["\n  padding: 8px 18px;\n\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(9, 42, 61, 0.7);\n\n  background-color: transparent;\n\n  border: 1px solid rgba(9, 42, 61, 0.7);\n  border-radius: 10px;\n\n  transition: all 250ms ease-in-out;\n\n  cursor: pointer;\n\n  :hover {\n    color: var(--text);\n    border: 1px solid rgba(9, 42, 61, 1);\n    background-color: rgba(9, 42, 61, 0.09);\n  }\n"]))),nn=M.Z.button(v||(v=(0,y.Z)(["\n  padding: 8px 18px;\n\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(227, 67, 67, 0.7);\n\n  background-color: transparent;\n\n  border: 1px solid rgba(227, 67, 67, 0.7);\n  border-radius: 10px;\n\n  transition: all 250ms ease-in-out;\n\n  cursor: pointer;\n\n  :hover {\n    color: rgba(227, 67, 67, 1);\n    border: 1px solid rgba(227, 67, 67, 1);\n    background-color: rgba(227, 67, 67, 0.1);\n  }\n"]))),en={overlay:{background:"rgba(255, 255, 255, 0.3)",backdropFilter:"blur(2px)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"rgba(255, 255, 255, 0.3)"}};K().setAppElement("#root");var rn,tn=function(n){var e=n.id,r=n.name,t=n.isOpen,o=n.closeModal,a=(0,G.useRef)(),i=(0,j.I0)();return(0,G.useEffect)((function(){a.current&&(a.current.style.color="#f00")}),[t]),(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(K(),{isOpen:t,shouldCloseOnOverlayClick:!0,onRequestClose:o,style:en,contentLabel:"Modal",children:(0,T.jsxs)(Q,{children:[(0,T.jsxs)(W,{children:["Are you sure you want to delete the contact: ",(0,T.jsx)(X,{children:r}),"?"]}),(0,T.jsxs)(U,{children:[(0,T.jsx)(Y,{type:"button",onClick:o,children:"Cancel"}),(0,T.jsx)(nn,{type:"button",onClick:function(){return i((0,_._f)(e))},children:"Delete"})]})]})})})},on=function(){var n=(0,j.v9)(O),e=(0,j.v9)(R),r=(0,G.useState)(!1),t=(0,J.Z)(r,2),o=t[0],a=t[1],i=function(){a(!1)},c=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,T.jsx)(T.Fragment,{children:c.map((function(n){return(0,T.jsxs)(V,{children:[(0,T.jsxs)($,{children:[n.name,": ",n.number]}),(0,T.jsx)(z.z,{onClick:function(){a(!0)},children:"Delete"}),o&&(0,T.jsx)(tn,{id:n.id,name:n.name,isOpen:o,closeModal:i})]},n.id)}))})},an=C.ZP.ul(rn||(rn=(0,y.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),cn=function(){return(0,T.jsx)(an,{children:(0,T.jsx)(on,{})})},sn=r(5693),ln=function(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(sn.eA,{children:"Phonebook"}),(0,T.jsx)(S,{})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(sn.nL,{children:"Contacts"}),(0,T.jsx)(D,{}),(0,T.jsx)(cn,{})]})]})}},5693:function(n,e,r){r.d(e,{E9:function(){return g},OP:function(){return x},eA:function(){return p},nL:function(){return b},oo:function(){return m},pp:function(){return u}});var t,o,a,i,c,s,l=r(168),d=r(6822),u=d.Z.section(t||(t=(0,l.Z)(["\n  margin-top: 30px;\n"]))),p=d.Z.h1(o||(o=(0,l.Z)(["\n  font-size: 40px;\n  color: var(--text);\n  /* background-color: var(--section); */\n  padding: 20px 20px;\n  /* border-radius: 20px; */\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=d.Z.div(a||(a=(0,l.Z)(["\n  color: var(--text);\n  background-color: var(--section);\n  text-align: start;\n  padding: 20px 40px;\n  border-radius: 20px;\n"]))),m=d.Z.ul(i||(i=(0,l.Z)([""]))),g=d.Z.li(c||(c=(0,l.Z)(["\n  list-style: disc;\n  padding: 10px 0px;\n"]))),b=d.Z.h2(s||(s=(0,l.Z)(["\n font-size: 24px;\n  color: var(--text);\n  padding: 20px 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"])))}}]);
//# sourceMappingURL=164.2748a7d1.chunk.js.map