"use strict";(self.webpackChunkbhanu_patial=self.webpackChunkbhanu_patial||[]).push([[678,34],{9527:function(e,t,n){n.r(t);var a=n(7294),r=n(3906),i=n(7182),o=n(96),l=n(7933),s=n(9657),m=n(3621);t.default=()=>a.createElement(r.Z,{sx:{flexGrow:1}},a.createElement(i.ZP,{container:!0,spacing:1,sx:{flexDirection:{xs:"column",sm:"row"},alignItems:"stretch"}},a.createElement(i.ZP,{item:!0,xs:12,sm:8},a.createElement(r.Z,{sx:{p:1,height:"100%",width:"100%"}},a.createElement(o.default,null))),a.createElement(i.ZP,{item:!0,xs:12,sm:4},a.createElement(r.Z,{sx:{p:1,height:"100%",width:"100%"}},a.createElement(l.default,null)))),a.createElement(i.ZP,{container:!0,spacing:1,sx:{flexDirection:{xs:"column",sm:"row"},alignItems:"stretch"}},a.createElement(i.ZP,{item:!0,xs:12,sm:4,sx:{height:"100%",width:"100%"}},a.createElement(r.Z,{sx:{p:1,height:"100%"}},a.createElement(s.default,null))),a.createElement(i.ZP,{item:!0,xs:12,sm:8,sx:{height:"100%",width:"100%"}},a.createElement(r.Z,{sx:{p:1,height:"100%"}},a.createElement(m.default,null)))))},7394:function(e,t,n){n.r(t),n.d(t,{Head:function(){return _},default:function(){return O}});var a=n(7294),r=n(3366),i=n(7462),o=n(512),l=n(8027),s=n(8510),m=n(2908),c=n(3207),d=n(7815),u=n(4110),p=n(7408),h=n(6523);const f=["ownerState"],g=["variants"],y=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function v(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const x=(0,p.Z)(),E=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b({defaultTheme:e,theme:t,themeId:n}){return a=t,0===Object.keys(a).length?e:t[n]||t;var a}function Z(e){return e?(t,n)=>n[e]:null}function w(e,t){let{ownerState:n}=t,a=(0,r.Z)(t,f);const o="function"==typeof e?e((0,i.Z)({ownerState:n},a)):e;if(Array.isArray(o))return o.flatMap((e=>w(e,(0,i.Z)({ownerState:n},a))));if(o&&"object"==typeof o&&Array.isArray(o.variants)){const{variants:e=[]}=o;let t=(0,r.Z)(o,g);return e.forEach((e=>{let r=!0;"function"==typeof e.props?r=e.props((0,i.Z)({ownerState:n},a,n)):Object.keys(e.props).forEach((t=>{(null==n?void 0:n[t])!==e.props[t]&&a[t]!==e.props[t]&&(r=!1)})),r&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,i.Z)({ownerState:n},a,n)):e.style))})),t}return o}const S=function(e={}){const{themeId:t,defaultTheme:n=x,rootShouldForwardProp:a=v,slotShouldForwardProp:o=v}=e,l=e=>(0,h.Z)((0,i.Z)({},e,{theme:b((0,i.Z)({},e,{defaultTheme:n,themeId:t}))}));return l.__mui_systemSx=!0,(e,s={})=>{(0,d.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:m,slot:c,skipVariantsResolver:p,skipSx:h,overridesResolver:f=Z(E(c))}=s,g=(0,r.Z)(s,y),x=void 0!==p?p:c&&"Root"!==c&&"root"!==c||!1,S=h||!1;let k=v;"Root"===c||"root"===c?k=a:c?k=o:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(k=void 0);const I=(0,d.default)(e,(0,i.Z)({shouldForwardProp:k,label:undefined},g)),A=e=>"function"==typeof e&&e.__emotion_real!==e||(0,u.P)(e)?a=>w(e,(0,i.Z)({},a,{theme:b({theme:a.theme,defaultTheme:n,themeId:t})})):e,C=(a,...r)=>{let o=A(a);const s=r?r.map(A):[];m&&f&&s.push((e=>{const a=b((0,i.Z)({},e,{defaultTheme:n,themeId:t}));if(!a.components||!a.components[m]||!a.components[m].styleOverrides)return null;const r=a.components[m].styleOverrides,o={};return Object.entries(r).forEach((([t,n])=>{o[t]=w(n,(0,i.Z)({},e,{theme:a}))})),f(e,o)})),m&&!x&&s.push((e=>{var a;const r=b((0,i.Z)({},e,{defaultTheme:n,themeId:t}));return w({variants:null==r||null==(a=r.components)||null==(a=a[m])?void 0:a.variants},(0,i.Z)({},e,{theme:r}))})),S||s.push(l);const c=s.length-r.length;if(Array.isArray(a)&&c>0){const e=new Array(c).fill("");o=[...a,...e],o.raw=[...a.raw,...e]}const d=I(o,...s);return e.muiName&&(d.muiName=e.muiName),d};return I.withConfig&&(C.withConfig=I.withConfig),C}}();var k=S,I=n(5893);const A=["className","component","disableGutters","fixed","maxWidth","classes"],C=(0,p.Z)(),P=k("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,m.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),B=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:C});var T=n(8216),W=n(784),L=n(1657);const D=function(e={}){const{createStyledComponent:t=P,useThemeProps:n=B,componentName:c="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const a=n,r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=a.forwardRef((function(e,t){const a=n(e),{className:u,component:p="div",disableGutters:h=!1,fixed:f=!1,maxWidth:g="lg"}=a,y=(0,r.Z)(a,A),v=(0,i.Z)({},a,{component:p,disableGutters:h,fixed:f,maxWidth:g}),x=((e,t)=>{const{classes:n,fixed:a,disableGutters:r,maxWidth:i}=e,o={root:["root",i&&`maxWidth${(0,m.Z)(String(i))}`,a&&"fixed",r&&"disableGutters"]};return(0,s.Z)(o,(e=>(0,l.ZP)(t,e)),n)})(v,c);return(0,I.jsx)(d,(0,i.Z)({as:p,ownerState:v,className:(0,o.Z)(x.root,u),ref:t},y))}));return u}({createStyledComponent:(0,W.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,T.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,L.Z)({props:e,name:"MuiContainer"})});var R=D,G=n(9527);var O=()=>a.createElement(R,null,a.createElement(G.default,null));const _=()=>a.createElement("title",null,"Bhanu Patial")},9657:function(e,t,n){n.r(t);var a=n(7294),r=n(4680),i=n(7182),o=n(2658);t.default=()=>a.createElement(r.Z,{elevation:3,style:{padding:"20px",backgroundColor:"#f2f2f2",borderRadius:"10px"}},a.createElement(i.ZP,{container:!0,spacing:1},a.createElement(i.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"h6",gutterBottom:!0},"Skills"),a.createElement("ul",null,a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"In-depth knowledge of C, Linux system programming, Java, Spring Boot, Kafka, Cloud, CI/CD, DevOps, and Test Automation.am experienced in C, Linux system programming, Java, Springboot, Kafka, Cloud, CI/CD, DevOps, and Test Automation.")),a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"Experienced as a skilled solution architect with specialized knowledge in Oracle Tuxedo, virtualization, Linux, Oracle database, microservices, and Kubernetes.")),a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"In-depth expertise in data centers, infrastructure components, network components, and the deployment of large-scale applications with robust load management.")),a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"Experienced in telecom billing, rating, and customer service management.")),a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"Self-learning in Golang.")))),a.createElement(i.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"h6",gutterBottom:!0},"Education"),a.createElement("ul",null,a.createElement("li",null,a.createElement(o.Z,{variant:"body1"},"Master of Computer Applications",a.createElement("br",null),"-- Visvesvaraya Technological University")),a.createElement("li",null,a.createElement(o.Z,{variant:"body1"},"Bachelor of Computer Applications",a.createElement("br",null),"-- Himachal Pradesh University")))),a.createElement(i.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"h6",gutterBottom:!0},"Achievements And Innovations"),a.createElement("ul",null,a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"I orchestrated and directed a cost-saving initiative amounting to several million dollars, culminating in the replacement of the prominent ETL software, SyncSort, with an in-house solution for the Amdocs Billing product.")),a.createElement("li",null,a.createElement(o.Z,{variant:"body1",style:{marginBottom:"10px"}},"As the lead consultant and designer, I was in charge of ensuring that the Amdocs Ensemble modernization from legacy HP-UX to Linux was highly resilient, scalable, and capable of supporting three times the current capacity."))))))},3621:function(e,t,n){n.r(t);var a=n(7294),r=n(3906),i=n(2658),o=n(7182);t.default=()=>a.createElement(r.Z,{sx:{flexGrow:1}},a.createElement(i.Z,{variant:"h6",gutterBottom:!0},"Work Experience"),a.createElement(o.ZP,{container:!0,spacing:1},a.createElement(o.ZP,{item:!0,xs:12},a.createElement(i.Z,{variant:"h6",style:{fontStyle:"italic"}},"Lead Software Architect"),a.createElement(i.Z,{variant:"h7"},"Amdocs Development Centre INDIA Pvt. Ltd. (Sep 2022 – present)"),a.createElement("ul",null,a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"Ideated and lead the implementation of CI/CD initiatives that improved the software delivery process and reduced time-to-market.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"Responsible for managing the technical product roadmap and optimizing the development process.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"I successfully evaluated the technology of Copilot and OpenAI and demonstrated its practicality for day-to-day developer use. By integrating these tools into our workflow, I was able to significantly improve our coding proficiency, enhance code quality, and achieve considerable cost savings in our development processes.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"Leading team of Architects and Development Experts and DevOps specialists in matrix manager.")))),a.createElement(o.ZP,{item:!0,xs:12},a.createElement(i.Z,{variant:"h6",style:{fontStyle:"italic"}},"Systems Architect"),a.createElement(i.Z,{variant:"h7"},"Netcracker Technology Solutions (INDIA) Pvt. Ltd. (June 2021 – September 2022)"),a.createElement("ul",null,a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"I was responsible for developing the product roadmap and driving continuous improvements.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"Led the initiative to modernize our build infrastructure, ensuring seamless product packaging for different platforms within our legacy system. Additionally, provided contrarian perspectives to validate the thoroughness of the team's approach.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"In my role as the systems architect, I was responsible for designing a cost-effective solution to manage system telemetry and monitoring within a distributed applications environment. Our implementation efficiently gathers and analyzes data from various sources within the distributed applications, ensuring seamless monitoring and control.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"I successfully led the re-architecture of multiple application security systems, focusing on authentication and authorization, to centrally manage users with Microsoft Active Directory. This initiative greatly enhanced our product's security and streamlined user management processes.")))),a.createElement(o.ZP,{item:!0,xs:12},a.createElement(i.Z,{variant:"h6",style:{fontStyle:"italic"}},"Software Architect"),a.createElement(i.Z,{variant:"h7"},"Amdocs Development Centre INDIA Pvt. Ltd. (Jan 2008 – May 2021)"),a.createElement("ul",null,a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"Successfully laid the groundwork for the seamless migration of the legacy monolith Amdocs Ensemble product to the cloud, showcasing advanced expertise in software and infrastructure domains.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"I successfully led the ideation, design, and implementation of a major infrastructure transformation, focusing on platform and application portability. In my role as lead consultant and designer, I ensured the highly resilient, scalable transition of Amdocs Ensemble from legacy HP-UX to Linux. This transformation empowered the system to support three times the previous capacity, enhancing its overall resilience and performance.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"I designed and led the implementation of a multi-million-dollar cost-saving idea for a major US-based client. Through this initiative, I was able to save more than 10 million USD in license costs by creating a product that replaced industry-leading ETL software without impacting system performance.")),a.createElement("li",null," ",a.createElement(i.Z,{variant:"body1",style:{marginBottom:"10px"}},"I lead the design and development of a sophisticated binary linkage analyzer to streamline product complexity. This product was meticulously crafted to identify redundant linked subtrees during the build process and propose their elimination, resulting in a leaner and quicker system startup, as well as a reduction in overall ecosystem storage requirements."))))))}}]);
//# sourceMappingURL=component---src-pages-index-js-1d460a0ee1f93414c3cd.js.map