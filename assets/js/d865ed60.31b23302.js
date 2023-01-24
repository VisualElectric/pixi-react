"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[341],{1729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7896),r=(n(2784),n(3905));const i={},o="Stage",p={unversionedId:"stage/Stage",id:"stage/Stage",title:"Stage",description:"The Stage component renders a PIXI.Application onto a canvas element and makes the PIXI.Application available for child components using the React's Context API.",source:"@site/docs/stage/Stage.mdx",sourceDirName:"stage",slug:"/stage/",permalink:"/stage/",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/stage/Stage.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Render",permalink:"/render/"},next:{title:"TypeScript",permalink:"/typescript"}},l={},s=[{value:"Props",id:"props",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Custom Updates",id:"custom-updates",level:2},{value:"Update stage on React component changes",id:"update-stage-on-react-component-changes",level:3},{value:"Update stage manually",id:"update-stage-manually",level:3},{value:"Accessing PIXI.Application",id:"accessing-pixiapplication",level:2},{value:"AppConsumer",id:"appconsumer",level:4},{value:"withPixiApp",id:"withpixiapp",level:4},{value:"useApp",id:"useapp",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stage"},"Stage"),(0,r.kt)("p",null,"The Stage component renders a ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.Application")," onto a canvas element and makes the ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.Application")," available for child components using the React's Context API."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"the width of the renderers view"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"800"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"the height of the renderers view"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"600"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onMount")),(0,r.kt)("td",{parentName:"tr",align:null},"callback function for the created app instance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onUnMount")),(0,r.kt)("td",{parentName:"tr",align:null},"callback function when the Stage gets unmounted"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"raf")),(0,r.kt)("td",{parentName:"tr",align:null},"use the internal PIXI ticker (requestAnimationFrame)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"renderOnComponentChange")),(0,r.kt)("td",{parentName:"tr",align:null},"render stage on component changes. Only useful in combination with ",(0,r.kt)("inlineCode",{parentName:"td"},"raf")," disabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"https://pixijs.download/release/docs/PIXI.Application.html"},"PIXI.Application options")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render } from 'react-dom'\nimport { Stage, Container, Sprite } from '@pixi/react'\n\nconst App = () => (\n  <Stage width={500} height={400}>\n    { // Pixi React components here... }\n  </Stage>\n)\n\nrender(<App />, document.getElementById('root'))\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const count = 10;\nconst width = 300;\nconst height = 300;\nconst stageProps = {\n  height,\n  width,\n  options: {\n    backgroundAlpha: 0,\n    antialias: true,\n  },\n};\n\nrender(\n  <Stage {...stageProps}>\n    {lodash.times(count, (i) => (\n      <Sprite\n        key={i}\n        image="/img/coin.png"\n        scale={(360 / count) * 0.004}\n        anchor={0.5}\n        rotation={i * (360 / count) * (Math.PI / 180)}\n        x={width / 2 + Math.cos(i * (360 / count) * (Math.PI / 180)) * 100}\n        y={height / 2 + Math.sin(i * (360 / count) * (Math.PI / 180)) * 100}\n      />\n    ))}\n  </Stage>,\n);\n')),(0,r.kt)("h2",{id:"custom-updates"},"Custom Updates"),(0,r.kt)("p",null,"By default the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Stage>")," component creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pixi.Application")," and updates the stage in a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," loop.\nIt tries to update and render the stage at the max browser rate (~60fps).\nIt updates and renders the stage, even when there are no visual changes.\nThis might result in faster running cooling fans on your computer due the overhead of GPU and CPU calculations."),(0,r.kt)("h3",{id:"update-stage-on-react-component-changes"},"Update stage on React component changes"),(0,r.kt)("p",null,"If you want to know when components have changed, you can listen to the ",(0,r.kt)("inlineCode",{parentName:"p"},"__REACT_PIXI_REQUEST_RENDER__")," event on the root container (app.stage)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Disable ",(0,r.kt)("inlineCode",{parentName:"p"},"raf")," and enable ",(0,r.kt)("inlineCode",{parentName:"p"},"renderOnComponentChange"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function DisableRAFExample() {\n  // a simple incremental hook\n  // https://gist.github.com/inlet/3e80965127d16c056da247f66839f51d\n  const i = useIteration(0.1);\n\n  return (\n    <Stage\n      width={300}\n      height={300}\n      raf={false}\n      renderOnComponentChange={true}\n      options={{ antialias: true, backgroundAlpha: 0 }}\n    >\n      <Sprite\n        anchor={[-(2 + Math.sin(i / 5) * 2), 0.5]}\n        position={150}\n        rotation={(Math.PI / 180) * 90 + -i}\n        image="/img/bunny.png"\n      />\n    </Stage>\n  );\n}\n')),(0,r.kt)("h3",{id:"update-stage-manually"},"Update stage manually"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Disable ",(0,r.kt)("inlineCode",{parentName:"p"},"raf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"renderOnComponentChange"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function DisableRAFWithManualRenderExample() {\n  const [app, setApp] = useState();\n  const i = useIteration(0.1);\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column' }}>\n      <Stage\n        width={300}\n        height={300}\n        raf={false}\n        renderOnComponentChange={false}\n        onMount={setApp}\n        options={{ backgroundColor: 0xeef1f5, antialias: true }}\n      >\n        <Sprite\n          anchor={0.5}\n          position={[150 + Math.cos(i) * 50, 150]}\n          rotation={i}\n          image=\"/img/bunny.png\"\n        />\n      </Stage>\n      <button\n        style={{ margin: '20px auto 0 0' }}\n        onClick={() => app.renderer.render(app.stage)}\n      >\n        Render\n      </button>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"accessing-pixiapplication"},"Accessing PIXI.Application"),(0,r.kt)("p",null,"To access the ",(0,r.kt)("inlineCode",{parentName:"p"},"PIXI.Application")," in your child components you can use one of the following:"),(0,r.kt)("h4",{id:"appconsumer"},"AppConsumer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppConsumer } from '@pixi/react';\n\nconst MyComponent = () => (\n  <AppConsumer>{(app) => <OtherComponent app={app} />}</AppConsumer>\n);\n")),(0,r.kt)("h4",{id:"withpixiapp"},"withPixiApp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withPixiApp } from '@pixi/react';\n\nconst MyComponent = withPixiApp(OtherComponent);\n")),(0,r.kt)("h4",{id:"useapp"},"useApp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useApp } from '@pixi/react';\n\nconst MyComponent = () => {\n  const app = useApp();\n  // app => PIXI.Application\n};\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);