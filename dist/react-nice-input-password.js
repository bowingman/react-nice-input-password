!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["shared-components"]=t():e["shared-components"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){e.exports=n(3)()},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var r=n(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0};n(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r)()(!1);o.push([e.i,":global .input-password{box-sizing:border-box}:global .input-password input{box-sizing:border-box;display:block}:global .input-password input:focus{outline:none}:global .input-password--wide input{width:100%}:global .input-password__field{display:flex;flex-direction:row;align-items:center;position:relative}:global .input-password__description{list-style:none;padding:0;margin:0;margin-bottom:25px}:global .input-password__description li{font-size:16px;margin-bottom:12px;margin-left:20px;position:relative;color:#696D8C}:global .input-password__description li:before{content:' ';width:10px;height:10px;border-radius:100%;background-color:#F2F2F2;position:absolute;left:-20px;top:4px}:global .input-password__description li.danger:before{background-color:#F79682}:global .input-password__description li.success:before{background-color:#17D499}:global .input-password__marker{display:flex;margin-bottom:15px}:global .input-password__marker>div{background-color:#F2F2F2;border-radius:10px;height:8px;width:33%;flex:1;margin:0 4px}:global .input-password__marker>div:last-child{margin-right:0}:global .input-password__marker>div:first-child{margin-left:0}:global .input-password__marker>div.danger{background-color:#F79682}:global .input-password__marker>div.warning{background-color:#F7BC1C}:global .input-password__marker>div.success{background-color:#17D499}:global .input-password .none input{border-color:#F2F2F2}:global .input-password .danger input{border-color:#F79682}:global .input-password .warning input{border-color:#F7BC1C}:global .input-password .success input{border-color:#17D499}\n",""]),t.default=o},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}((function(e){return document.querySelector(e)})),l=null,c=0,u=[],p=n(8);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(y(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function m(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");return e.attrs.type="text/css",h(t,e.attrs),m(e,t),t}function h(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var i=c++;n=l||(l=v(t)),r=C.bind(null,n,i,!1),o=C.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",h(t,e.attrs),m(e,t),t}(t),r=x.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=_.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&f(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function C(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function _(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function x(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=n.n(a);n(5);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={name:i.a.string.isRequired,label:i.a.oneOfType([i.a.string,i.a.element]).isRequired,className:i.a.string,style:i.a.object,placeholder:i.a.string,value:i.a.string,onChange:i.a.func.isRequired,startAdornment:i.a.node,endAdornment:i.a.node,visible:i.a.bool,LabelComponent:i.a.any,InputComponent:i.a.any,InputComponentProps:i.a.object},c={placeholder:"",value:"",className:"",style:null,startAdornment:null,endAdornment:null,visible:!1,LabelComponent:function(e){return o.a.createElement("label",e)},InputComponent:function(e){return o.a.createElement("input",e)},InputComponentProps:{}},u=function(e){var t=e.name,n=e.label,r=e.placeholder,a=e.value,i=e.className,l=e.startAdornment,c=e.endAdornment,u=e.style,p=e.visible,f=e.onChange,d=e.LabelComponent,m=e.InputComponent,b=e.InputComponentProps;return o.a.createElement(d,{htmlFor:t,className:i},n,o.a.createElement("div",{className:"input-password__field"},l&&o.a.createElement("div",{className:"input-password__startAdornment"},l),o.a.createElement(m,s({name:t,id:t,className:i,value:a,type:p?"text":"password",style:u,placeholder:r,onChange:f},b)),c&&o.a.createElement("div",{className:"input-password__endAdornment"},c)))};u.propTypes=l,u.defaultProps=c;var p=u;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g={label:i.a.oneOfType([i.a.string,i.a.element]).isRequired,name:i.a.string.isRequired,className:i.a.string,style:i.a.object,value:i.a.string,visible:i.a.bool,LabelComponent:i.a.any,InputComponent:i.a.any,InputComponentProps:i.a.object,startAdornment:i.a.node,endAdornment:i.a.node,showSecurityLevelBar:i.a.bool,showSecurityLevelDescription:i.a.bool,normalClassName:i.a.string,dangerClassName:i.a.string,warningClassName:i.a.string,placeholder:i.a.string,successClassName:i.a.string,securityLevels:i.a.arrayOf(i.a.shape({descriptionLabel:i.a.oneOfType([i.a.string,i.a.object,i.a.element]).isRequired,validator:i.a.oneOfType([i.a.func,i.a.object]).isRequired})),onChange:i.a.func},w={value:"",className:"",placeholder:"",style:null,showSecurityLevelBar:!1,showSecurityLevelDescription:!1,securityLevels:[],visible:!1,LabelComponent:function(e){return o.a.createElement("label",e)},InputComponent:function(e){return o.a.createElement("input",e)},InputComponentProps:{},normalClassName:"none",dangerClassName:"danger",warningClassName:"warning",successClassName:"success",onChange:function(){},startAdornment:null,endAdornment:null},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,a=b(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={levels:t.handleValidateAndGetLevels("")},t.handleChange=t.handleChange.bind(h(t)),t.handleValidateAndGetLevels=t.handleValidateAndGetLevels.bind(h(t)),t}return t=i,(n=[{key:"handleValidateAndGetLevels",value:function(e){return this.props.securityLevels.map((function(t){var n=!1;return t.validator&&"function"==typeof t.validator?n=t.validator(e):t.validator&&(n=t.validator.test(e)),{descriptionLabel:t.descriptionLabel,isValid:n}}))}},{key:"handleChange",value:function(e){var t=e.target,n=this.handleValidateAndGetLevels(t.value);this.setState({levels:n}),this.props.onChange({name:this.props.name,value:t.value,isValid:n.filter((function(e){return e.isValid})).length===n.length})}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,r=t.name,a=t.showSecurityLevelBar,i=t.showSecurityLevelDescription,s=t.securityLevels,l=t.normalClassName,c=t.dangerClassName,u=t.warningClassName,f=t.successClassName,d=t.className,m=t.value,b=t.placeholder,v=t.startAdornment,h=t.endAdornment,y=t.style,g=t.visible,w=t.LabelComponent,C=t.InputComponent,_=t.InputComponentProps,x="",O=this.state.levels.map((function(t,n){var r="",a=e.state.levels.length,i=e.state.levels.filter((function(e){return e.isValid})).length;if(""!==m)switch(!0){case a===i:r=f;break;case 1===i&&0===n:r=c;break;case i>1&&n<i:r=u;break;default:r=l}return 0===n&&(x=r),o.a.createElement("div",{className:r,key:"marker-".concat(n)})})),L=this.state.levels.map((function(e,t){var n="";return e.isValid&&""!==m?n=f:e.isValid||""===m||(n=c),o.a.createElement("li",{className:n,key:"description-node-".concat(t)},e.descriptionLabel)}));return o.a.createElement("div",{className:"form-group input-password ".concat(d)},o.a.createElement(p,{label:n,name:r,placeholder:b,className:x,value:m,style:y,startAdornment:v,visible:g,endAdornment:h,onChange:this.handleChange,LabelComponent:w,InputComponent:C,InputComponentProps:_}),s&&s.length>0?o.a.createElement("div",{className:"input-password__level"},a?o.a.createElement("div",{className:"input-password__marker"},O):null,i?o.a.createElement("ul",{className:"input-password__description"},L):null):null)}}])&&d(t.prototype,n),r&&d(t,r),i}(o.a.Component);C.propTypes=g,C.defaultProps=w;var _=C;t.default=_}])}));