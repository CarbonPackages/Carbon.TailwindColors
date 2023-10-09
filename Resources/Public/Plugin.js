(()=>{var Xe=Object.create;var A=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var Be=Object.getPrototypeOf,Ae=Object.prototype.hasOwnProperty;var Ne=(e,t,s)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var c=(e,t)=>()=>(e&&(t=e(e=0)),t);var N=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _=(e,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ee(t))!Ae.call(e,o)&&o!==s&&A(e,o,{get:()=>t[o],enumerable:!(r=Ze(t,o))||r.enumerable});return e};var m=(e,t,s)=>(s=e!=null?Xe(Be(e)):{},_(t||!e||!e.__esModule?A(s,"default",{value:e,enumerable:!0}):s,e)),je=e=>_(A({},"__esModule",{value:!0}),e);var w=(e,t,s)=>(Ne(e,typeof t!="symbol"?t+"":t,s),s);var $=c(()=>{});var K=c(()=>{$()});function h(e){return(...t)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...t);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var I=c(()=>{});var q=c(()=>{});var ee=c(()=>{});var H=c(()=>{q();ee()});var re=c(()=>{H()});var oe=c(()=>{H();re()});var se,ie=c(()=>{K();I();oe();se=h("manifest")});var j=N((gt,ne)=>{I();ne.exports=h("vendor")().React});var k=N((bt,ae)=>{I();ae.exports=h("vendor")().PropTypes});var z=N((mt,le)=>{I();le.exports=h("NeosProjectPackages")().ReactUiComponents});var P=N((wt,ce)=>{I();ce.exports=h("NeosProjectPackages")().NeosUiDecorators});var L,v,de,V,M,D=c(()=>{L=m(j()),v=m(k()),de=m(z()),V=class extends L.PureComponent{generatePreview(t){let r=100/t.length,o='<svg viewBox="0 0 134 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id="bg">';return t.forEach((a,i)=>{let p=r*i,d=r*(i+1);o+=`<stop stop-color="${a}" offset="${p}%"></stop><stop stop-color="${a}" offset="${d}%"></stop>`}),o+='</linearGradient></defs><rect fill="url(#bg)" x="0" y="0" width="134" height="100"></rect></svg>',`data:image/svg+xml;base64,${btoa(o)}`}render(){let{option:t}=this.props;return L.default.createElement(de.SelectBox_Option_MultiLineWithThumbnail,{...this.props,imageUri:this.generatePreview(t.colors),label:t.label})}};w(V,"propTypes",{option:v.default.shape({label:v.default.string.isRequired,colors:v.default.arrayOf(v.default.string)})});M=V});var pe=c(()=>{});var b,J=c(()=>{pe();b={feedback:"carbon-tailwind-Wr0QEa-feedback",error:"carbon-tailwind-Wr0QEa-error",wrapper:"carbon-tailwind-Wr0QEa-wrapper",disabled:"carbon-tailwind-Wr0QEa-disabled",checkboard:"carbon-tailwind-Wr0QEa-checkboard",itemactive:"carbon-tailwind-Wr0QEa-itemactive",reset:"carbon-tailwind-Wr0QEa-reset",list:"carbon-tailwind-Wr0QEa-list","text-white":"carbon-tailwind-Wr0QEa-text-white",item:"carbon-tailwind-Wr0QEa-item",group:"carbon-tailwind-Wr0QEa-group","text-black":"carbon-tailwind-Wr0QEa-text-black"}});function ge(e){if(e.length===4){let o=e.slice(1,2),a=e.slice(2,3),i=e.slice(3,4);return o=parseInt(o+o,16),a=parseInt(a+a,16),i=parseInt(i+i,16),{r:o,g:a,b:i}}let t=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return[t,s,r]}function ze(e,t,s){e/=255,t/=255,s/=255;let r=Math.min(e,t,s),o=Math.max(e,t,s),a=o-r,i=0,p=0,d=0;return a==0?i=0:o==e?i=(t-s)/a%6:o==t?i=(s-e)/a+2:i=(e-t)/a+4,i=Math.round(i*60),i<0&&(i+=360),d=(o+r)/2,p=a==0?0:a/(1-Math.abs(2*d-1)),p=+(p*100).toFixed(1),d=+(d*100).toFixed(1),p=p+"%",d=d+"%",[i,p,d]}function Ve(e){let t=ge(e),s=ze(...t),r=t.join(" "),o=s.join(" ");return{hex:e,rgb:`rgb(${r})`,hsl:`hsl(${o})`,rgbValues:r,hslValues:o}}function Le(e){let t=ge(e);return t[0]*.299+t[1]*.587+t[2]*.114>186?"text-black":"text-white"}function ue({colors:e,value:t,placeholder:s}){let{group:r,strength:o}=t||{},a=!1;r&&o&&(a=!!(e[r]&&e[r][o]));let i=a?e[r][o]:s,p=a?`${X(r)} - ${o}`:null,d=a?Le(i):null,C=[b.feedback,b[d]];return!a&&!s&&C.push(b.checkboard),{className:C.filter(O=>!!O).join(" "),style:{backgroundColor:i},title:p}}function be({colors:e,value:t,placeholder:s,i18n:r}){let o=t.strength;return o?o=="0"?r.white:o=="1000"?r.black:`${X(t.group)} - ${o}`:s?"":r.selectColor}function Q(e){let{group:t,strength:s,colors:r}=e;if(!t||!r[t])return"";if(s=s||null,!s)return{group:t};let o=r[t][s];return o?{group:t,strength:s,...Ve(o)}:{group:t}}function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}var fe=c(()=>{J()});var f,n,F,me,Me,Z,he,we=c(()=>{f=m(j()),n=m(k()),F=m(z()),me=m(P());D();fe();J();Me=(0,me.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("CarbonTailwindColors")})),Z=class extends f.PureComponent{constructor(){super(...arguments);w(this,"onReset",()=>{this.props.commit("")})}render(){let{value:s,options:r,i18nRegistry:o,config:a}=this.props;r=Object.assign({},this.constructor.defaultOptions,r),r.colors&&(a.colors=r.colors),r.grayscale&&(a.grayscale=r.grayscale);let i=Object.assign({},a.colors);if(r.scheme==="grayscale")for(let l in i)a.grayscale.includes(l)||delete i[l];else if(r.scheme==="color")for(let l in i)a.grayscale.includes(l)&&delete i[l];if(r.disableStrength.length)for(let l in i)r.disableStrength.forEach(u=>{delete i[l][u.toString()]});if(!i)return f.default.createElement("div",{className:b.error},o.translate("Carbon.TailwindColors:Main:noColorsDefined"));s=Q({group:s.group,strength:s.strength,colors:i});let{allowEmpty:p,disabled:d,placeholder:C}=r,O=Object.keys(i).map(l=>{let u=Object.assign({},i[l]),x=X(l);return{value:l,colors:Object.values(u),label:x}}),B=[];for(let l in i){let u=i[l],x=X(l),S=[];for(let T in u){let ve=u[T],G=T;G=="0"?G=o.translate("Carbon.TailwindColors:Main:white"):G=="1000"&&(G=o.translate("Carbon.TailwindColors:Main:black")),S.push({strength:T,label:G,color:ve})}B.push({group:l,label:x,values:S})}let g=(l,u)=>{this.props.commit(Q({group:l,strength:u,colors:i}))},R=l=>{let{strength:u}=this.props.value;this.props.commit(Q({group:l,strength:u,colors:i}))},Y={white:o.translate("Carbon.TailwindColors:Main:white"),black:o.translate("Carbon.TailwindColors:Main:black"),selectColor:o.translate("Carbon.TailwindColors:Main:selectColor")};return f.default.createElement("div",{className:d&&b.disabled},f.default.createElement("div",{className:b.wrapper},f.default.createElement("div",{...ue({colors:i,value:s,placeholder:C})},be({colors:i,value:s,placeholder:C,i18n:Y})),p&&f.default.createElement("div",{className:b.reset},f.default.createElement(F.IconButton,{style:"lighter",icon:"times",title:o.translate("Carbon.TailwindColors:Main:resetColor"),onClick:this.onReset}))),f.default.createElement("div",{className:b.group},f.default.createElement(F.SelectBox,{options:O,value:s&&s.group,placeholder:o.translate("Carbon.TailwindColors:Main:selectColorGroup"),allowEmpty:!1,onValueChange:R,ListPreviewElement:M})),B.map(l=>{let u=s&&s.group==l.group;return u&&f.default.createElement("div",{className:b.list},l.values.map(x=>f.default.createElement("button",{key:l.group+x.strength,className:[b.item,u&&x.strength==s.strength&&b.itemactive].join(" "),style:{backgroundColor:x.color},title:x.label,onClick:()=>g(l.group,x.strength)})))}))}};w(Z,"propTypes",{value:n.default.shape({group:n.default.string,strength:n.default.string||n.default.number,hex:n.default.string,rgb:n.default.string,hsl:n.default.string,rgbValues:n.default.string,hslValues:n.default.string}),commit:n.default.func.isRequired,i18nRegistry:n.default.object.isRequired,options:n.default.shape({allowEmpty:n.default.bool,placeholder:n.default.string,disabled:n.default.bool,scheme:n.default.oneOf(["grayscale","color"]),disableStrength:n.default.arrayOf(n.default.string||n.default.number),colors:n.default.objectOf(n.default.shape({0:n.default.string,50:n.default.string,100:n.default.string,200:n.default.string,300:n.default.string,400:n.default.string,500:n.default.string,600:n.default.string,700:n.default.string,800:n.default.string,900:n.default.string,1e3:n.default.string}))}).isRequired}),w(Z,"defaultOptions",{allowEmpty:!1,disabled:!1,placeholder:null,scheme:null,disableStrength:[]});he=Me(Z)});var xe=c(()=>{});var U,ye=c(()=>{xe();U={error:"carbon-tailwind-gRELtW-error",disabled:"carbon-tailwind-gRELtW-disabled"}});function Fe(e){return e.charAt(0).toUpperCase()+e.slice(1)}var W,y,Ce,Ie,Qe,E,We,Oe=c(()=>{W=m(j()),y=m(k()),Ce=m(z()),Ie=m(P());D();ye();Qe=(0,Ie.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("CarbonTailwindColors")}));E=class extends W.PureComponent{constructor(){super(...arguments);w(this,"onReset",()=>{this.props.commit("")})}render(){let{value:s,options:r,i18nRegistry:o,config:a}=this.props;r=Object.assign({},this.constructor.defaultOptions,r),r.colors&&(a.colors=r.colors),r.grayscale&&(a.grayscale=r.grayscale);let i=Object.assign({},a.colors);if(r.scheme==="grayscale")for(let g in i)a.grayscale.includes(g)||delete i[g];else if(r.scheme==="color")for(let g in i)a.grayscale.includes(g)&&delete i[g];if(!i)return W.default.createElement("div",{className:U.error},o.translate("Carbon.TailwindColors:Main:noColorsDefined"));let{allowEmpty:p,disabled:d,placeholder:C}=r,O=Object.keys(i).map(g=>{let R=Object.assign({},i[g]),Y=Fe(g);return{value:g,colors:Object.values(R),label:Y}}),B=g=>{this.props.commit(g)};return W.default.createElement("div",{className:d&&U.disabled},W.default.createElement(Ce.SelectBox,{options:O,value:s,placeholder:C||o.translate("Carbon.TailwindColors:Main:selectColorGroup"),allowEmpty:p,onValueChange:B,ListPreviewElement:M}))}};w(E,"propTypes",{value:y.default.string,commit:y.default.func.isRequired,i18nRegistry:y.default.object.isRequired,options:y.default.shape({allowEmpty:y.default.bool,placeholder:y.default.string,scheme:y.default.oneOf(["grayscale","color"]),disabled:y.default.bool}).isRequired}),w(E,"defaultOptions",{allowEmpty:!1,disabled:!1,placeholder:null,scheme:null});We=Qe(E)});var Re={};var Ge=c(()=>{ie();we();Oe();se("Carbon.TailwindColors:Editors",{},e=>{let t=e.get("inspector").get("editors");t.set("Carbon.TailwindColors/Colors",{component:he}),t.set("Carbon.TailwindColors/Groups",{component:We})})});Ge();})();
//# sourceMappingURL=Plugin.js.map
