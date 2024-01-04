"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{7485:function(e,n,i){i.r(n),i.d(n,{default:function(){return je}});var t=i(6582),r=i(9439),a=i(1022),o=i(824),s=i(2791),c=i(9434),l=i(5036),d=i(1413),u=i(2233),h=i(8555),x=i(2063),j=i(6916),p=function(e){return e.trim().toLowerCase()},f=function(e){return e.contacts.items},m=function(e){return e.filter},v=function(e){return e.contacts.isLoading},g=(0,j.P1)([f,m],(function(e,n){return e.filter((function(e){var i=e.name;return p(i).includes(p(n))}))})),y=i(6355),b=i(201),k=i(9381),C=i(884),Z=i(2631),w=i(6108),I=i(3426),S=i(7883),E=i(5497),z=i(7869),q=i(4868),N=i(5202),F=i(3329),Y=function(e){var n=e.handleOpenModal,i=(0,c.v9)(g),r=(0,c.I0)(),a=.3;return i.map((function(e){var i,o=e.id,s=e.name,c=e.phone;return a+=.05,(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},{initial:{opacity:0,x:50},animate:{x:0,opacity:1,transition:{x:{duration:.5,ease:[.05,.08,.24,.96],delay:i=a},opacity:{duration:.3,ease:"easeIn",delay:i}}}}),{},{children:(0,F.jsxs)(t.k,{alignItems:"center",paddingX:"1rem",paddingY:"0.5rem",borderBottom:"1px solid",borderColor:"gray.200",children:[(0,F.jsx)(k.q,{name:s,mr:3}),(0,F.jsxs)(t.k,{alignItems:{base:"start",sm:"center"},justifyContent:"space-between",direction:{base:"column",sm:"row"},width:"100%",pr:5,children:[(0,F.jsxs)(C.x,{fontWeight:"bold",children:[s,":"]}),(0,F.jsx)(C.x,{children:c})]}),(0,F.jsxs)(t.k,{children:[(0,F.jsx)(Z.u,{hasArrow:!0,label:"Call",bg:"gray.500",children:(0,F.jsx)(w.h,{"aria-label":"Call",icon:(0,F.jsx)(u.q,{}),as:"a",href:"tel:".concat(c),mr:2})}),(0,F.jsxs)(I.v,{children:[(0,F.jsx)(S.j,{as:w.h,"aria-label":"settings",icon:(0,F.jsx)(y.EAB,{}),variant:"ghost"}),(0,F.jsx)(E.h,{children:(0,F.jsx)(z.q,{children:(0,F.jsxs)(q.k,{title:"Settings",children:[(0,F.jsxs)(N.s,{gap:"2",fontSize:"0.9rem",onClick:function(){return n(o,s,c)},children:[(0,F.jsx)(h.d,{}),"Edit"]}),(0,F.jsxs)(N.s,{gap:"2",fontSize:"0.9rem",onClick:function(){return r((0,l.ij)(o))},children:[(0,F.jsx)(x.p,{}),"Delete"]})]})})})]})]})]})}),o)}))},_=function(){return(0,F.jsx)(t.k,{justifyContent:"center",alignItems:"center",height:"100%",children:(0,F.jsx)(C.x,{fontSize:"lg",color:"gray",children:"Your contact book is empty. Add your first contact!"})})},A=function(){return(0,F.jsx)(t.k,{justifyContent:"center",alignItems:"center",height:"100%",children:(0,F.jsx)(C.x,{fontSize:"lg",color:"gray",children:"No contacts found with that name."})})},J=i(990),O=i(8874),W=i(9029),B=i(5473),T=i(634),V=i(6241),D=function(e){var n=e.isOpen,i=e.onClose,t=e.title,r=e.children;return(0,F.jsxs)(J.u_,{isOpen:n,onClose:i,children:[(0,F.jsx)(O.Z,{}),(0,F.jsxs)(W.h,{ml:5,mr:5,children:[(0,F.jsx)(B.x,{children:t}),(0,F.jsx)(T.o,{}),(0,F.jsx)(V.f,{children:r})]})]})},K=i(5705),L=i(8382),P=i(4390),M=i(9055),X=i(9657),$=i(930),G=i(1692),H=i(7943),Q=i(9640),R=i(6336),U=i(2437),ee=function(e){var n=e.variant;return(0,F.jsx)(K.gN,{name:"name",validate:function(e){if(!e)return"Name is required"},children:function(e){var i=e.field,t=e.form;return(0,F.jsxs)(X.NI,{isInvalid:t.errors.name&&t.touched.name,children:[(0,F.jsx)($.l,{children:"Name"}),(0,F.jsxs)(G.B,{children:[(0,F.jsx)(H.Z,{pointerEvents:"none",children:(0,F.jsx)(Q.J,{as:y.q1E,color:"gray.300"})}),(0,F.jsx)(R.I,(0,d.Z)({type:"text",required:!0,autoComplete:"name",placeholder:"Full Name",color:"black",variant:n,_focus:{color:"filled"===n?"white":"black"}},i))]}),(0,F.jsx)(U.J1,{children:t.errors.name})]})}})},ne=function(e){var n=e.variant;return(0,F.jsx)(K.gN,{name:"phone",validate:function(e){if(!e)return"Phone is required"},children:function(e){var i=e.field,t=e.form;return(0,F.jsxs)(X.NI,{isInvalid:t.errors.phone&&t.touched.phone,children:[(0,F.jsx)($.l,{children:"Phone"}),(0,F.jsxs)(G.B,{children:[(0,F.jsx)(H.Z,{pointerEvents:"none",children:(0,F.jsx)(u.q,{color:"gray.300"})}),(0,F.jsx)(R.I,(0,d.Z)({type:"tel",required:!0,autoComplete:"",placeholder:"123-456-7890",color:"black",variant:n,_focus:{color:"filled"===n?"white":"black"}},i))]}),(0,F.jsx)(U.J1,{children:t.errors.phone})]})}})},ie=function(e){var n=e.id,i=e.initialValues,r=e.onClose,a=(0,c.v9)(f),o=(0,c.I0)(),s=(0,L.p)();return(0,F.jsx)(t.k,{direction:"column",paddingY:"5",width:"100%",children:(0,F.jsx)(K.J9,{initialValues:i,onSubmit:function(e,i){var t,c=e.name,d=e.phone;if(t=c,a.find((function(e){return p(e.name)===p(t)&&e.id!==n})))return s({title:"Duplicate Contact",description:'"'.concat(c,'" is already in contacts.'),status:"error",duration:5e3,isClosable:!0,position:"top"}),void i.setSubmitting(!1);o((0,l.hx)({id:n,name:c,phone:d})),i.setSubmitting(!1),r()},children:function(e){return(0,F.jsxs)(P.K,{as:K.l0,gap:3,children:[(0,F.jsx)(ee,{variant:"outline"}),(0,F.jsx)(ne,{variant:"outline"}),(0,F.jsxs)(t.k,{justifyContent:"end",gap:"3",pt:"5",children:[(0,F.jsx)(M.z,{colorScheme:"blue",isLoading:e.isSubmitting,type:"submit",children:"Save"}),(0,F.jsx)(M.z,{onClick:r,children:"Cancel"})]})]})}})})},te=i(3555),re=function(){var e=(0,s.useState)(""),n=(0,r.Z)(e,2),i=n[0],d=n[1],u=(0,s.useState)(""),h=(0,r.Z)(u,2),x=h[0],j=h[1],p=(0,s.useState)(""),m=(0,r.Z)(p,2),v=m[0],y=m[1],b=(0,c.v9)(f),k=(0,c.v9)(g),C=(0,c.I0)(),Z=(0,a.q)(),w=Z.isOpen,I=Z.onOpen,S=Z.onClose,E="desktop"===(0,te.F)().deviceType;(0,s.useEffect)((function(){C((0,l.m$)())}),[C]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(t.k,{direction:"column",w:E?"50%":"100%",h:E?"100vh":"calc(100vh - 102px)",pt:E?"42px":"0",children:(0,F.jsx)(o.xu,{height:"100%",overflowY:"auto",children:0===b.length?(0,F.jsx)(_,{}):0===k.length?(0,F.jsx)(A,{}):(0,F.jsx)(Y,{handleOpenModal:function(e,n,i){d(e),j(n),y(i),I()}})})}),(0,F.jsx)(D,{isOpen:w,onClose:S,title:"Edit Contact",children:(0,F.jsx)(ie,{id:i,initialValues:{name:x,phone:v},onClose:S})})]})},ae=i(2577),oe=function(){var e=(0,c.v9)(v),n=(0,c.v9)(f),i=(0,c.I0)(),r=(0,L.p)(),a="desktop"===(0,te.F)().deviceType,o=function(e){return{initial:{opacity:0},animate:{opacity:1,transition:{opacity:{duration:.3,ease:"easeIn",delay:e}}}}};return(0,F.jsx)(t.k,{direction:"column",maxW:"380px",paddingY:a?"5":"2",width:"100%",children:(0,F.jsx)(K.J9,{initialValues:{name:"",phone:""},onSubmit:function(e,t){var a,o=e.name,s=e.phone;if(a=o,n.find((function(e){var n=e.name;return p(n)===p(a)})))return r({title:"Duplicate Contact",description:'"'.concat(o,'" is already in contacts.'),status:"error",duration:5e3,isClosable:!0,position:"top"}),void t.setSubmitting(!1);i((0,l.je)({name:o,phone:s})),t.setSubmitting(!1),t.resetForm()},children:function(n){return(0,F.jsxs)(P.K,{as:K.l0,gap:3,children:[(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},o(.3)),{},{children:(0,F.jsx)(ee,{variant:"filled"})})),(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},o(.4)),{},{children:(0,F.jsx)(ne,{variant:"filled"})})),(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},o(.5)),{},{children:(0,F.jsx)(M.z,{textColor:"fff",colorScheme:"blue",isLoading:n.isSubmitting,type:"submit",w:"100%",disabled:e,children:e?(0,F.jsx)(ae.$,{}):"Add contact"})}))]})}})})},se=i(7127),ce=i(2276),le=i(5095),de=i.n(le),ue=function(){var e=(0,c.v9)(m),n=(0,c.I0)(),i=de()((function(e){n((0,se.T)(e))}),300);(0,s.useEffect)((function(){return function(){i.cancel()}}),[i]);return(0,F.jsx)(t.k,{direction:"column",maxW:"380px",width:"100%",children:(0,F.jsx)(K.J9,{initialValues:{filter:e},children:function(){return(0,F.jsx)(P.K,{as:K.l0,children:(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},(e=.65,{initial:{opacity:0},animate:{opacity:1,transition:{opacity:{duration:.3,ease:"easeIn",delay:e}}}})),{},{children:(0,F.jsx)(K.gN,{name:"filter",children:function(e){var n=e.field;return(0,F.jsxs)(X.NI,{children:[(0,F.jsx)($.l,{children:"Filter"}),(0,F.jsxs)(G.B,{children:[(0,F.jsx)(H.Z,{pointerEvents:"none",children:(0,F.jsx)(ce.W,{color:"gray.300"})}),(0,F.jsx)(R.I,(0,d.Z)((0,d.Z)({type:"text",variant:"filled",placeholder:"Find contacts by name",color:"black",_focus:{color:"white"}},n),{},{onChange:function(e){n.onChange(e),i(e.target.value)}}))]})]})}})}))});var e}})})},he=i(9589),xe=function(){var e="desktop"===(0,te.F)().deviceType,n=function(e){return{initial:{opacity:0,y:-20},animate:{y:0,opacity:1,transition:{y:{duration:.5,ease:[.05,.08,.24,.96],delay:e},opacity:{duration:.3,ease:"easeIn",delay:e}}}}};return(0,F.jsxs)(t.k,{direction:"column",padding:e?"56px":"20px 56px",color:"#fff",w:e?"50%":"100%",h:e?"100vh":"80vh",justify:e?"center":"space-between",alignItems:"center",children:[(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},n(.1)),{},{children:(0,F.jsx)(he.X,{as:"h1",size:e?"2xl":"xl",paddingY:e?"5":"2",children:"Contact Keeper"})})),(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},n(.2)),{},{children:(0,F.jsx)(C.x,{paddingY:e?"5":"2",textAlign:"center",fontSize:e?"lg":"md",maxW:"380px",children:"Add your contacts and keep them organized in one place. Get started now!"})})),(0,F.jsx)(oe,{}),(0,F.jsx)(b.E.div,(0,d.Z)((0,d.Z)({},n(.5)),{},{children:(0,F.jsx)(C.x,{paddingY:e?"5":"2",textAlign:"center",fontSize:e?"md":"sm",maxW:"380px",children:"Too many contacts? Just start typing a name and let the magic happen!"})})),(0,F.jsx)(ue,{})]})},je=function(){return(0,F.jsxs)(t.k,{flexDir:{base:"column",lg:"row"},align:"center",children:[(0,F.jsx)(xe,{}),(0,F.jsx)(re,{})]})}}}]);
//# sourceMappingURL=485.49074fbf.chunk.js.map