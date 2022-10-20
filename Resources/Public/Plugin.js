/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=9)}([function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(o,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(u){return function step(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}(o[e](t))}catch(e){settle(a[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),a.shift(),a.length&&resume(a[0][0],a[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("NeosProjectPackages")().ReactUiComponents},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=n.__importDefault(r(15)),a=n.__importDefault(r(16)),i=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var o=this._registry.findIndex((function(t){return t.key===e}));return-1===o?this._registry.push(n):this._registry[o]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return a.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return a.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(o.default);t.default=i},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiDecorators},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),u=r(2),l=_interopRequireDefault(u),s=_interopRequireDefault(r(3)),c=r(4);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(o=n=function(e){function OptionWithPreview(){return _classCallCheck(this,OptionWithPreview),_possibleConstructorReturn(this,(OptionWithPreview.__proto__||Object.getPrototypeOf(OptionWithPreview)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(OptionWithPreview,e),i(OptionWithPreview,[{key:"generatePreview",value:function generatePreview(e){var t=100/e.length,r='<svg viewBox="0 0 134 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id="bg">';return e.forEach((function(e,n){r+='<stop stop-color="'+e+'" offset="'+t*n+'%"></stop><stop stop-color="'+e+'" offset="'+t*(n+1)+'%"></stop>'})),r+='</linearGradient></defs><rect fill="url(#bg)" x="0" y="0" width="134" height="100"></rect></svg>',"data:image/svg+xml;base64,"+btoa(r)}},{key:"render",value:function render(){var e=this.props.option;return l.default.createElement(c.SelectBox_Option_MultiLineWithThumbnail,a({},this.props,{imageUri:this.generatePreview(e.colors),label:e.label}))}}]),OptionWithPreview}(u.PureComponent),n.propTypes={option:s.default.shape({label:s.default.string.isRequired,colors:s.default.arrayOf(s.default.string)})},o);t.default=f},function(e,t,r){e.exports={wrapper:"style__wrapper___3dJlT",feedback:"style__feedback___1saVI",error:"style__error___3PUYe",checkboard:"style__checkboard___3FVA1",group:"style__group___3GOOB",list:"style__list___2q8wb",item:"style__item___2aNCr",itemactive:"style__itemactive___3K6cV",disabled:"style__disabled___tF4oo",reset:"style__reset___3i1Wi","text-white":"style__text-white___o5bgp","text-black":"style__text-black___21vNN"}},function(e,t,r){"use strict";r(10)},function(e,t,r){"use strict";var n=_interopRequireDefault(r(11)),o=_interopRequireDefault(r(18)),a=_interopRequireDefault(r(20));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,n.default)("Carbon.TailwindColors:Editors",{},(function(e,t){t.frontendConfiguration;var r=e.get("inspector").get("editors");r.set("Carbon.TailwindColors/Colors",{component:o.default}),r.set("Carbon.TailwindColors/Groups",{component:a.default})}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=n.__importDefault(r(12));t.createConsumerApi=o.default;var a=n.__importDefault(r(1));t.readFromConsumerApi=a.default;var i=r(14);t.SynchronousRegistry=i.SynchronousRegistry,t.SynchronousMetaRegistry=i.SynchronousMetaRegistry,t.default=a.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0).__importDefault(r(13)),o=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,o(t[e]))})),Object.defineProperty(r,"@manifest",o(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",o(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var o;e.push(((o={})[t]={options:r,bootstrap:n},o))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=n.__importDefault(r(5));t.SynchronousRegistry=o.default;var a=n.__importDefault(r(17));t.SynchronousMetaRegistry=a.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function positionalArraySorter(e,t,r){var o,a,i,u,l,s,c,f,_,d,p,y,h,b;void 0===t&&(t="position"),void 0===r&&(r="key");var v="string"==typeof t?function(e){return e[t]}:t,g={},m={},w={},O={},x={},P={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);g[n]=t;var o=v(e),a=String(o||t),i=!1;if(a.startsWith("start")){var u=(l=a.match(/start\s+(\d+)/))&&l[1]?Number(l[1]):0;w[u]||(w[u]=[]),w[u].push(n)}else if(a.startsWith("end")){var l;u=(l=a.match(/end\s+(\d+)/))&&l[1]?Number(l[1]):0;O[u]||(O[u]=[]),O[u].push(n)}else if(a.startsWith("before")){if(c=a.match(/before\s+(\S+)(\s+(\d+))?/)){var s=c[1];u=c[3]?Number(c[3]):0;x[s]||(x[s]={}),x[s][u]||(x[s][u]=[]),x[s][u].push(n)}else i=!0}else if(a.startsWith("after")){var c;if(c=a.match(/after\s+(\S+)(\s+(\d+))?/)){s=c[1],u=c[3]?Number(c[3]):0;P[s]||(P[s]={}),P[s][u]||(P[s][u]=[]),P[s][u].push(n)}else i=!0}else i=!0;if(i){var f=parseFloat(a);!isNaN(f)&&isFinite(f)||(f=t),m[f]||(m[f]=[]),m[f].push(n)}}));var C=[],R=[],j=[],k=[],S=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},E=function addToResults(e,t){e.forEach((function(e){var r,o,a,i;if(!(k.indexOf(e)>=0)){if(k.push(e),x[e]){var u=S(x[e],!0);try{for(var l=n.__values(u),s=l.next();!s.done;s=l.next()){var c=s.value;addToResults(x[e][c],t)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}}if(t.push(e),P[e]){var f=S(P[e],!1);try{for(var _=n.__values(f),d=_.next();!d.done;d=_.next()){c=d.value;addToResults(P[e][c],t)}}catch(e){a={error:e}}finally{try{d&&!d.done&&(i=_.return)&&i.call(_)}finally{if(a)throw a.error}}}}}))};try{for(var M=n.__values(S(w,!1)),q=M.next();!q.done;q=M.next()){var T=q.value;E(w[T],C)}}catch(e){o={error:e}}finally{try{q&&!q.done&&(a=M.return)&&a.call(M)}finally{if(o)throw o.error}}try{for(var D=n.__values(S(m,!0)),A=D.next();!A.done;A=D.next()){T=A.value;E(m[T],R)}}catch(e){i={error:e}}finally{try{A&&!A.done&&(u=D.return)&&u.call(D)}finally{if(i)throw i.error}}try{for(var N=n.__values(S(O,!0)),I=N.next();!I.done;I=N.next()){T=I.value;E(O[T],j)}}catch(e){l={error:e}}finally{try{I&&!I.done&&(s=N.return)&&s.call(N)}finally{if(l)throw l.error}}try{for(var V=n.__values(Object.keys(x)),W=V.next();!W.done;W=V.next()){var B=W.value;if(!(k.indexOf(B)>=0))try{for(var F=(_=void 0,n.__values(S(x[B],!1))),G=F.next();!G.done;G=F.next()){T=G.value;E(x[B][T],C)}}catch(e){_={error:e}}finally{try{G&&!G.done&&(d=F.return)&&d.call(F)}finally{if(_)throw _.error}}}}catch(e){c={error:e}}finally{try{W&&!W.done&&(f=V.return)&&f.call(V)}finally{if(c)throw c.error}}try{for(var L=n.__values(Object.keys(P)),U=L.next();!U.done;U=L.next()){B=U.value;if(!(k.indexOf(B)>=0))try{for(var H=(h=void 0,n.__values(S(P[B],!1))),K=H.next();!K.done;K=H.next()){T=K.value;E(P[B][T],R)}}catch(e){h={error:e}}finally{try{K&&!K.done&&(b=H.return)&&b.call(H)}finally{if(h)throw h.error}}}}catch(e){p={error:e}}finally{try{U&&!U.done&&(y=L.return)&&y.call(L)}finally{if(p)throw p.error}}return n.__spread(C,R,j).map((function(e){return g[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(5)).default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(2),u=_interopRequireDefault(i),l=_interopRequireDefault(r(3)),s=r(4),c=r(6),f=_interopRequireDefault(r(7)),_=r(19),d=_interopRequireDefault(r(8));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(0,c.neos)((function(e){return{i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.TailwindColors")}})),y=(o=n=function(e){function Editor(){var e,t,r;_classCallCheck(this,Editor);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r=_possibleConstructorReturn(this,(e=Editor.__proto__||Object.getPrototypeOf(Editor)).call.apply(e,[this].concat(o))),r.onReset=function(){r.props.commit("")},_possibleConstructorReturn(r,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Editor,e),a(Editor,[{key:"render",value:function render(){var e=this,t=this.props,r=t.value,n=t.options,o=t.i18nRegistry,a=t.config;(n=Object.assign({},this.constructor.defaultOptions,n)).colors&&(a.colors=n.colors);var i=Object.assign({},a.colors);if("grayscale"===n.scheme)for(var l in i)i[l][1e3]||delete i[l];else if("color"===n.scheme)for(var c in i)i[c][1e3]&&delete i[c];if(n.disableStrength.length){var p=function _loop(e){n.disableStrength.forEach((function(t){delete i[e][t.toString()]}))};for(var y in i)p(y)}if(!i)return u.default.createElement("div",{className:d.default.error},o.translate("Carbon.TailwindColors:Main:noColorsDefined"));r=(0,_.returnValues)({group:r.group,strength:r.strength,colors:i});var h=n,b=h.allowEmpty,v=h.disabled,g=h.placeholder,m=Object.keys(i).map((function(e){var t=Object.assign({},i[e]),r=i[e].label||e;return delete t.label,{value:e,colors:Object.values(t),label:r}})),w=[];for(var O in i){var x=i[O],P=x.label||O,C=[];for(var R in x)if("label"!==R){var j=x[R],k=R;"0"==k?k=o.translate("Carbon.TailwindColors:Main:white"):"1000"==k&&(k=o.translate("Carbon.TailwindColors:Main:black")),C.push({strength:R,label:k,color:j})}w.push({group:O,label:P,values:C})}var S={white:o.translate("Carbon.TailwindColors:Main:white"),black:o.translate("Carbon.TailwindColors:Main:black"),selectColor:o.translate("Carbon.TailwindColors:Main:selectColor")};return u.default.createElement("div",{className:v&&d.default.disabled},u.default.createElement("div",{className:d.default.wrapper},u.default.createElement("div",(0,_.getPreviewBoxAttributes)({colors:i,value:r,placeholder:g}),(0,_.getPreviewBoxText)({colors:i,value:r,placeholder:g,i18n:S})),b&&u.default.createElement("div",{className:d.default.reset},u.default.createElement(s.IconButton,{style:"lighter",icon:"times",title:o.translate("Carbon.TailwindColors:Main:resetColor"),onClick:this.onReset}))),u.default.createElement("div",{className:d.default.group},u.default.createElement(s.SelectBox,{options:m,value:r&&r.group,placeholder:o.translate("Carbon.TailwindColors:Main:selectColorGroup"),allowEmpty:!1,onValueChange:function groupChangeHandler(t){var r=e.props.value.strength;e.props.commit((0,_.returnValues)({group:t,strength:r,colors:i}))},ListPreviewElement:f.default})),w.map((function(t){var n=r&&r.group==t.group;return n&&u.default.createElement("div",{className:d.default.list},t.values.map((function(o){return u.default.createElement("button",{key:t.group+o.strength,className:[d.default.item,n&&o.strength==r.strength&&d.default.itemactive].join(" "),style:{backgroundColor:o.color},title:o.label,onClick:function onClick(){return function handleColorClick(t,r){e.props.commit((0,_.returnValues)({group:t,strength:r,colors:i}))}(t.group,o.strength)}})})))})))}}]),Editor}(i.PureComponent),n.propTypes={value:l.default.shape({group:l.default.string,strength:l.default.string||l.default.number,hex:l.default.string,rgb:l.default.string,hsl:l.default.string,rgbValues:l.default.string,hslValues:l.default.string}),commit:l.default.func.isRequired,i18nRegistry:l.default.object.isRequired,options:l.default.shape({allowEmpty:l.default.bool,placeholder:l.default.string,disabled:l.default.bool,scheme:l.default.oneOf(["grayscale","color"]),disableStrength:l.default.arrayOf(l.default.string||l.default.number),colors:l.default.objectOf(l.default.shape({label:l.default.string,0:l.default.string,50:l.default.string,100:l.default.string,200:l.default.string,300:l.default.string,400:l.default.string,500:l.default.string,600:l.default.string,700:l.default.string,800:l.default.string,900:l.default.string,1e3:l.default.string}))}).isRequired},n.defaultOptions={allowEmpty:!1,disabled:!1,placeholder:null,scheme:null,disableStrength:[]},o);t.default=p(y)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.returnValues=t.getPreviewBoxText=t.getPreviewBoxAttributes=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(8));function hex2rgb(e){if(4===e.length){var t=e.slice(1,2),r=e.slice(2,3),n=e.slice(3,4);return{r:t=parseInt(t+t,16),g:r=parseInt(r+r,16),b:n=parseInt(n+n,16)}}return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}function rgb2hsl(e,t,r){e/=255,t/=255,r/=255;var n=Math.min(e,t,r),o=Math.max(e,t,r),a=o-n,i=0,u=0,l=0;return i=0==a?0:o==e?(t-r)/a%6:o==t?(r-e)/a+2:(e-t)/a+4,(i=Math.round(60*i))<0&&(i+=360),l=(o+n)/2,u=+(100*(u=0==a?0:a/(1-Math.abs(2*l-1)))).toFixed(1),l=+(100*l).toFixed(1),[i,u+="%",l+="%"]}function colorValues(e){var t=hex2rgb(e),r=rgb2hsl.apply(void 0,function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t)),n=t.join(" "),o=r.join(" ");return{hex:e,rgb:"rgb("+n+")",hsl:"hsl("+o+")",rgbValues:n,hslValues:o}}t.getPreviewBoxAttributes=function getPreviewBoxAttributes(e){var t=e.colors,r=e.value,n=e.placeholder,a=r||{},i=a.group,u=a.strength,l=!1;i&&u&&(l=!(!t[i]||!t[i][u]));var s=l?t[i][u]:n,c=l?t[i].label+" - "+u:null,f=l?function getTextColor(e){var t=hex2rgb(e);return.299*t[0]+.587*t[1]+.114*t[2]>186?"text-black":"text-white"}(s):null,_=[o.default.feedback,o.default[f]];return l||n||_.push(o.default.checkboard),{className:_.filter((function(e){return!!e})).join(" "),style:{backgroundColor:s},title:c}},t.getPreviewBoxText=function getPreviewBoxText(e){var t=e.colors,r=e.value,n=e.placeholder,o=e.i18n,a=r.strength;return a?"0"==a?o.white:"1000"==a?o.black:(t[r.group].label||r.group)+" - "+a:n?"":o.selectColor},t.returnValues=function returnValues(e){var t=e.group,r=e.strength,o=e.colors;if(!t||!o[t])return"";if(!(r=r||null))return{group:t};var a=o[t][r];return a?n({group:t,strength:r},colorValues(a)):{group:t}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(2),u=_interopRequireDefault(i),l=_interopRequireDefault(r(3)),s=r(4),c=r(6),f=_interopRequireDefault(r(7)),_=_interopRequireDefault(r(21));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(0,c.neos)((function(e){return{i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.TailwindColors")}})),p=(o=n=function(e){function Editor(){var e,t,r;_classCallCheck(this,Editor);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r=_possibleConstructorReturn(this,(e=Editor.__proto__||Object.getPrototypeOf(Editor)).call.apply(e,[this].concat(o))),r.onReset=function(){r.props.commit("")},_possibleConstructorReturn(r,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Editor,e),a(Editor,[{key:"render",value:function render(){var e=this,t=this.props,r=t.value,n=t.options,o=t.i18nRegistry,a=t.config;(n=Object.assign({},this.constructor.defaultOptions,n)).colors&&(a.colors=n.colors);var i=Object.assign({},a.colors);if("grayscale"===n.scheme)for(var l in i)i[l][1e3]||delete i[l];else if("color"===n.scheme)for(var c in i)i[c][1e3]&&delete i[c];if(!i)return u.default.createElement("div",{className:_.default.error},o.translate("Carbon.TailwindColors:Main:noColorsDefined"));var d=n,p=d.allowEmpty,y=d.disabled,h=d.placeholder,b=Object.keys(i).map((function(e){var t=Object.assign({},i[e]),r=i[e].label||e;return delete t.label,{value:e,colors:Object.values(t),label:r}}));return u.default.createElement("div",{className:y&&_.default.disabled},u.default.createElement(s.SelectBox,{options:b,value:r,placeholder:h||o.translate("Carbon.TailwindColors:Main:selectColorGroup"),allowEmpty:p,onValueChange:function onValueChange(t){e.props.commit(t)},ListPreviewElement:f.default}))}}]),Editor}(i.PureComponent),n.propTypes={value:l.default.string,commit:l.default.func.isRequired,i18nRegistry:l.default.object.isRequired,options:l.default.shape({allowEmpty:l.default.bool,placeholder:l.default.string,scheme:l.default.oneOf(["grayscale","color"]),disabled:l.default.bool}).isRequired},n.defaultOptions={allowEmpty:!1,disabled:!1,placeholder:null,scheme:null},o);t.default=d(p)},function(e,t,r){e.exports={error:"style__error___15X2d",disabled:"style__disabled___2nSvC"}}]);
//# sourceMappingURL=Plugin.js.map