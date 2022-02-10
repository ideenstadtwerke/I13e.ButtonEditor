/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(o,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function verb(i){return function(u){return function step(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(i[0][2],e)}(o[e](t))}catch(e){settle(i[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),i.shift(),i.length&&resume(i[0][0],i[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=n.__importDefault(r(9)),i=n.__importDefault(r(10)),a=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var o=this._registry.findIndex((function(t){return t.key===e}));return-1===o?this._registry.push(n):this._registry[o]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return i.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return i.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(o.default);t.default=a},function(e,t,r){"use strict";r(4)},function(e,t,r){"use strict";var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=_interopRequireDefault(r(5)),i=_interopRequireDefault(r(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(0,o.default)("I13e.ButtonEditor:ButtonEditor",{},(function(e,t){var r=t.frontendConfiguration,o=e.get("inspector").get("editors"),a=r["I13e.ButtonEditor:ButtonEditor"];o.set("I13e.ButtonEditor/ButtonEditor",{component:function(e){function component(){return _classCallCheck(this,component),_possibleConstructorReturn(this,(component.__proto__||Object.getPrototypeOf(component)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(component,e),n(component,[{key:"getConfig",value:function getConfig(){return a}}]),component}(i.default)})}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=n.__importDefault(r(6));t.createConsumerApi=o.default;var i=n.__importDefault(r(0));t.readFromConsumerApi=i.default;var a=r(8);t.SynchronousRegistry=a.SynchronousRegistry,t.SynchronousMetaRegistry=a.SynchronousMetaRegistry,t.default=i.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1).__importDefault(r(7)),o=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,o(t[e]))})),Object.defineProperty(r,"@manifest",o(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",o(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var o;e.push(((o={})[t]={options:r,bootstrap:n},o))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=n.__importDefault(r(2));t.SynchronousRegistry=o.default;var i=n.__importDefault(r(11));t.SynchronousMetaRegistry=i.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function positionalArraySorter(e,t,r){var o,i,a,u,s,l,c,f,_,d,p,y,v,h;void 0===t&&(t="position"),void 0===r&&(r="key");var b="string"==typeof t?function(e){return e[t]}:t,g={},m={},w={},S={},O={},P={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);g[n]=t;var o=b(e),i=String(o||t),a=!1;if(i.startsWith("start")){var u=(s=i.match(/start\s+(\d+)/))&&s[1]?Number(s[1]):0;w[u]||(w[u]=[]),w[u].push(n)}else if(i.startsWith("end")){var s;u=(s=i.match(/end\s+(\d+)/))&&s[1]?Number(s[1]):0;S[u]||(S[u]=[]),S[u].push(n)}else if(i.startsWith("before")){if(c=i.match(/before\s+(\S+)(\s+(\d+))?/)){var l=c[1];u=c[3]?Number(c[3]):0;O[l]||(O[l]={}),O[l][u]||(O[l][u]=[]),O[l][u].push(n)}else a=!0}else if(i.startsWith("after")){var c;if(c=i.match(/after\s+(\S+)(\s+(\d+))?/)){l=c[1],u=c[3]?Number(c[3]):0;P[l]||(P[l]={}),P[l][u]||(P[l][u]=[]),P[l][u].push(n)}else a=!0}else a=!0;if(a){var f=parseFloat(i);!isNaN(f)&&isFinite(f)||(f=t),m[f]||(m[f]=[]),m[f].push(n)}}));var R=[],x=[],j=[],k=[],E=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},A=function addToResults(e,t){e.forEach((function(e){var r,o,i,a;if(!(k.indexOf(e)>=0)){if(k.push(e),O[e]){var u=E(O[e],!0);try{for(var s=n.__values(u),l=s.next();!l.done;l=s.next()){var c=l.value;addToResults(O[e][c],t)}}catch(e){r={error:e}}finally{try{l&&!l.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}}if(t.push(e),P[e]){var f=E(P[e],!1);try{for(var _=n.__values(f),d=_.next();!d.done;d=_.next()){c=d.value;addToResults(P[e][c],t)}}catch(e){i={error:e}}finally{try{d&&!d.done&&(a=_.return)&&a.call(_)}finally{if(i)throw i.error}}}}}))};try{for(var D=n.__values(E(w,!1)),M=D.next();!M.done;M=D.next()){var q=M.value;A(w[q],R)}}catch(e){o={error:e}}finally{try{M&&!M.done&&(i=D.return)&&i.call(D)}finally{if(o)throw o.error}}try{for(var C=n.__values(E(m,!0)),I=C.next();!I.done;I=C.next()){q=I.value;A(m[q],x)}}catch(e){a={error:e}}finally{try{I&&!I.done&&(u=C.return)&&u.call(C)}finally{if(a)throw a.error}}try{for(var N=n.__values(E(S,!0)),T=N.next();!T.done;T=N.next()){q=T.value;A(S[q],j)}}catch(e){s={error:e}}finally{try{T&&!T.done&&(l=N.return)&&l.call(N)}finally{if(s)throw s.error}}try{for(var B=n.__values(Object.keys(O)),V=B.next();!V.done;V=B.next()){var F=V.value;if(!(k.indexOf(F)>=0))try{for(var L=(_=void 0,n.__values(E(O[F],!1))),W=L.next();!W.done;W=L.next()){q=W.value;A(O[F][q],R)}}catch(e){_={error:e}}finally{try{W&&!W.done&&(d=L.return)&&d.call(L)}finally{if(_)throw _.error}}}}catch(e){c={error:e}}finally{try{V&&!V.done&&(f=B.return)&&f.call(B)}finally{if(c)throw c.error}}try{for(var U=n.__values(Object.keys(P)),G=U.next();!G.done;G=U.next()){F=G.value;if(!(k.indexOf(F)>=0))try{for(var H=(v=void 0,n.__values(E(P[F],!1))),K=H.next();!K.done;K=H.next()){q=K.value;A(P[F][q],x)}}catch(e){v={error:e}}finally{try{K&&!K.done&&(h=H.return)&&h.call(H)}finally{if(v)throw v.error}}}}catch(e){p={error:e}}finally{try{G&&!G.done&&(y=U.return)&&y.call(U)}finally{if(p)throw p.error}}return n.__spread(R,x,j).map((function(e){return g[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),o=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(2)).default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,i,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),s=r(13),l=_interopRequireDefault(s),c=_interopRequireDefault(r(14)),f=r(15),_=_interopRequireDefault(r(16)),d=r(17),p=r(18),y=r(19),v=r(20);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var h=(0,d.neos)((function(e){return{i18nRegistry:e.get("i18n"),dataSourcesDataLoader:e.get("dataLoaders").get("DataSources")}}))(n=(0,y.connect)((0,p.$transform)({focusedNodePath:v.selectors.CR.Nodes.focusedNodePathSelector}))((i=o=function(e){function ButtonEditor(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonEditor);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ButtonEditor.__proto__||Object.getPrototypeOf(ButtonEditor)).call(this,e));t.state={active:[],isLoading:!1,buttons:[]},t.initialValueType="string";var r=e.commit,n=e.options,o=e.value;return t.initialValueType=Array.isArray(o)?"array":"string",n.multiple&&"string"===t.initialValueType&&console.warn('Misconfiguration in property "'+e.identifier+'". Multiple is activated but value type seems to be "string" but should be "array".'),t.state={active:Array.isArray(o)?o:o?[o]:[],buttons:t.hasDataSource()?[]:t.flattenValues(n.values)},t.commit=r,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonEditor,e),u(ButtonEditor,[{key:"hasDataSource",value:function hasDataSource(){return this.props.options.dataSourceIdentifier||this.props.options.dataSourceUri}},{key:"componentDidMount",value:function componentDidMount(){this.hasDataSource()&&this.loadOptions()}},{key:"loadOptions",value:function loadOptions(){var e=this;this.setState({isLoading:!0}),this.props.dataSourcesDataLoader.resolveValue(function getDataLoaderOptionsForProps(e){return{contextNodePath:e.focusedNodePath,dataSourceIdentifier:e.options.dataSourceIdentifier,dataSourceUri:e.options.dataSourceUri,dataSourceAdditionalData:e.options.dataSourceAdditionalData,dataSourceDisableCaching:Boolean(e.options.dataSourceDisableCaching)}}(this.props),this.props.value).then((function(t){e.setState({isLoading:!1,buttons:t})}))}},{key:"flattenValues",value:function flattenValues(e){var t=this;return Object.entries(e).map((function(e){var r=_slicedToArray(e,2),n=r[0],o=r[1];return a({},o,{value:n,label:t.props.i18nRegistry.translate(o.label)})}))}},{key:"toggleActive",value:function toggleActive(e){var t=this.props.options,r=t.multiple,n=t.allowEmpty,o=[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.state.active));!1===r?o=o.includes(e)?[]:[e]:o.includes(e)?o.splice(o.indexOf(e),1):o.push(e),(n||0!==o.length)&&(this.setState({active:o}),this.commit("string"===this.initialValueType?o[0]||"":o))}},{key:"isActive",value:function isActive(e){return this.state.active.includes(e)}},{key:"render",value:function render(){var e=this,t=Object.assign({},this.constructor.defaultOptions,this.props.options);return l.default.createElement("div",{className:_.default.buttonEditor},this.state.isLoading?l.default.createElement(f.Icon,{icon:"spinner",size:"lg",spin:!0}):this.state.buttons.map((function(r){return l.default.createElement(f.IconButton,{style:"lighter",hoverStyle:"darken",className:_.default.button,icon:r.iconActive&&e.isActive(r.value)?r.iconActive:r.icon,title:r.label,disabled:t.disabled||r.disabled,isActive:e.isActive(r.value),onClick:e.toggleActive.bind(e,r.value)})})))}}]),ButtonEditor}(s.Component),o.propTypes={commit:c.default.func.isRequired,value:c.default.any,className:c.default.string,options:c.default.shape({allowEmpty:c.default.bool,multiple:c.default.bool,disabled:c.default.bool,values:c.default.objectOf(c.default.shape({label:c.default.string,icon:c.default.string,iconActive:c.default.string,disabled:c.default.bool})),dataSourceIdentifier:c.default.string,dataSourceUri:c.default.string,dataSourceDisableCaching:c.default.bool,dataSourceAdditionalData:c.default.objectOf(c.default.any)}).isRequired,i18nRegistry:c.default.object.isRequired},o.defaultOptions={allowEmpty:!1,multiple:!1,disabled:!1},n=i))||n)||n;t.default=h},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("NeosProjectPackages")().ReactUiComponents},function(e,t,r){e.exports={buttonEditor:"ButtonEditor__buttonEditor___1T5Av",button:"ButtonEditor__button___UuFrQ"}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiDecorators},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("vendor")().plow},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("vendor")().reactRedux},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(0));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiReduxStore}]);
//# sourceMappingURL=Plugin.js.map