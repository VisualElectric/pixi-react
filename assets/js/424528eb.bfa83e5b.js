"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[395],{4508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7896),r=(n(2784),n(3905));const i={},l="ParticleContainer",o={unversionedId:"components/ParticleContainer",id:"components/ParticleContainer",title:"ParticleContainer",description:"NOTE: Writing PIXI apps in vanilla js (the imperative way) is always more performant.",source:"@site/docs/components/ParticleContainer.mdx",sourceDirName:"components",slug:"/components/ParticleContainer",permalink:"/components/ParticleContainer",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/components/ParticleContainer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NineSlicePlane",permalink:"/components/NineSlicePlane"},next:{title:"SimpleMesh",permalink:"/components/SimpleMesh"}},p={},s=[{value:"Props",id:"props",level:2},{value:"maxSize",id:"maxsize",level:3},{value:"properties",id:"properties",level:3},{value:"batchSize",id:"batchsize",level:3},{value:"autoResize",id:"autoresize",level:3},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"particlecontainer"},"ParticleContainer"),(0,r.kt)("p",null,"NOTE: Writing PIXI apps in vanilla js (the imperative way) is always more performant.\nThe React reconciler needs to pass and validate props which can be costly when dealing with lots of components."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Most of the time you won't notice any difference though (rendering 1000 sprites in a particle container is still fast).")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/dev/docs/PIXI.ParticleContainer.html"},"https://pixijs.download/dev/docs/PIXI.ParticleContainer.html")),(0,r.kt)("h3",{id:"maxsize"},"maxSize"),(0,r.kt)("p",null,"The maximum number of particles that can be rendered by the container. Affects size of allocated buffers.\nThis will only affect the component once and will be applied during creation."),(0,r.kt)("h3",{id:"properties"},(0,r.kt)("a",{parentName:"h3",href:"https://pixijs.download/dev/docs/PIXI.ParticleContainer.html#ParticleContainer"},"properties")),(0,r.kt)("p",null,"The properties of children that should be uploaded to the gpu and applied."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertices ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When true, vertices be uploaded and applied. if sprite's ",(0,r.kt)("inlineCode",{parentName:"td"},"scale/anchor/trim/frame/orig")," is dynamic, please set true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When true, position be uploaded and applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rotation ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When true, rotation be uploaded and applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uvs ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When true, uvs be uploaded and applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tint ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When true, alpha and tint be uploaded and applied.")))),(0,r.kt)("h3",{id:"batchsize"},"batchSize"),(0,r.kt)("p",null,"Number of particles per batch. If less than ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize"),", it uses maxSize instead."),(0,r.kt)("h3",{id:"autoresize"},"autoResize"),(0,r.kt)("p",null,"If true, container allocates more batches in case there are more than ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," particles."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ExampleAssetLoader name="bunny" url="/img/bunny.png">\n  <Stage width={300} height={300} options={{ backgroundColor: 0xffffff }}>\n    <ParticleContainer position={[150, 150]} properties={{ position: true }}>\n      <Sprite anchor={0.5} x={-75} y={-75} image="bunny" />\n      <Sprite anchor={0.5} x={0} y={0} image="bunny" />\n      <Sprite anchor={0.5} x={75} y={75} image="bunny" />\n    </ParticleContainer>\n  </Stage>\n</ExampleAssetLoader>\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("iframe",{height:600,scrolling:"no",title:"Particle Container",src:"//codepen.io/inlet/embed/db5dc6ecfb42bbf8dd5322a1015dff70/?height=600&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);