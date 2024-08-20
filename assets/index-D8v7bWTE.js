function E0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function P0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pp={exports:{}},Uo={},Lp={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),L0=Symbol.for("react.portal"),b0=Symbol.for("react.fragment"),M0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),I0=Symbol.for("react.suspense"),O0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Fu=Symbol.iterator;function _0(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Ap={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||bp}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dp(){}Dp.prototype=ur.prototype;function ml(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||bp}var gl=ml.prototype=new Dp;gl.constructor=ml;Mp(gl,ur.prototype);gl.isPureReactComponent=!0;var Bu=Array.isArray,Rp=Object.prototype.hasOwnProperty,yl={current:null},Np={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Rp.call(t,r)&&!Np.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fi,type:e,key:o,ref:s,props:i,_owner:yl.current}}function F0(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function B0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zu=/\/+/g;function ms(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B0(""+e.key):t.toString(36)}function Wi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fi:case L0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ms(s,0):r,Bu(i)?(n="",e!=null&&(n=e.replace(zu,"$&/")+"/"),Wi(i,t,n,"",function(u){return u})):i!=null&&(vl(i)&&(i=F0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Bu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ms(o,a);s+=Wi(o,t,n,l,i)}else if(l=_0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ms(o,a++),s+=Wi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return Wi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function z0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},$i={transition:null},U0={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:$i,ReactCurrentOwner:yl};function Op(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=ur;O.Fragment=b0;O.Profiler=A0;O.PureComponent=ml;O.StrictMode=M0;O.Suspense=I0;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;O.act=Op;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=yl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Rp.call(t,l)&&!Np.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fi,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:R0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:D0,_context:e},e.Consumer=e};O.createElement=Ip;O.createFactory=function(e){var t=Ip.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:N0,render:e}};O.isValidElement=vl;O.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:z0}};O.memo=function(e,t){return{$$typeof:O0,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};O.unstable_act=Op;O.useCallback=function(e,t){return Te.current.useCallback(e,t)};O.useContext=function(e){return Te.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};O.useEffect=function(e,t){return Te.current.useEffect(e,t)};O.useId=function(){return Te.current.useId()};O.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Te.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};O.useRef=function(e){return Te.current.useRef(e)};O.useState=function(e){return Te.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Te.current.useTransition()};O.version="18.3.1";Lp.exports=O;var C=Lp.exports;const gt=P0(C),H0=E0({__proto__:null,default:gt},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=C,W0=Symbol.for("react.element"),$0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,K0=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q0={key:!0,ref:!0,__self:!0,__source:!0};function Vp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)G0.call(t,r)&&!q0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:W0,type:e,key:o,ref:s,props:i,_owner:K0.current}}Uo.Fragment=$0;Uo.jsx=Vp;Uo.jsxs=Vp;Pp.exports=Uo;var c=Pp.exports,_p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uu=gt.createContext&&gt.createContext(_p),Q0=["attr","size","title"];function Y0(e,t){if(e==null)return{};var n=X0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function X0(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}function Hu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function lo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hu(Object(n),!0).forEach(function(r){Z0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z0(e,t,n){return t=eg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eg(e){var t=tg(e,"string");return typeof t=="symbol"?t:t+""}function tg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fp(e){return e&&e.map((t,n)=>gt.createElement(t.tag,lo({key:n},t.attr),Fp(t.child)))}function Ee(e){return t=>gt.createElement(ng,ao({attr:lo({},e.attr)},t),Fp(e.child))}function ng(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=Y0(e,Q0),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),gt.createElement("svg",ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:lo(lo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&gt.createElement("title",null,o),e.children)};return Uu!==void 0?gt.createElement(Uu.Consumer,null,n=>t(n)):t(_p)}function rg(e){return Ee({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(e)}function Ju(e){return Ee({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(e)}function ne(e){return Ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function ig(e){return Ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function gs(e){return Ee({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function og(e){return Ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function sg(e){return Ee({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Wu(e){return Ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"},child:[]}]})(e)}function ag(e){return Ee({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"},child:[]}]})(e)}const xl="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='Artwork'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='10.75'%20y='10.61'%20width='2.57'%20height='2.57'%20transform='translate(-4.89%2012)%20rotate(-45.01)'%20style='fill:%23E76F00'/%3e%3cpolygon%20points='17.87%2011.89%2017.8%2011.95%2014.03%2015.73%2012.97%2014.68%2015.77%2011.89%2010.06%206.18%2010.06%204.08%2010.13%204.15%2017.87%2011.89'%20style='fill:%23E76F00;fill-rule:evenodd'/%3e%3cpolygon%20points='10.06%206.18%204.36%2011.89%2011.11%2018.65%2010.06%2019.7%2010%2019.63%202.25%2011.89%2010.06%204.08%2010.06%206.18'%20style='fill:%23E76F00;fill-rule:evenodd'/%3e%3cpolygon%20points='13.94%2017.6%2013.94%2019.7%2013.88%2019.63%206.13%2011.9%209.97%208.05%2011.03%209.11%208.23%2011.9%2013.94%2017.6'%20style='fill:%23E76F00;fill-rule:evenodd'/%3e%3cpolygon%20points='13.94%2017.6%2019.64%2011.9%2012.89%205.14%2013.94%204.08%2014%204.15%2021.75%2011.9%2021.68%2011.96%2013.94%2019.7%2013.94%2017.6'%20style='fill:%23E76F00'/%3e%3c/g%3e%3c/svg%3e";var Bp={exports:{}},Fe={},zp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,D){var I=L.length;L.push(D);e:for(;0<I;){var Y=I-1>>>1,ae=L[Y];if(0<i(ae,D))L[Y]=D,L[I]=ae,I=Y;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var D=L[0],I=L.pop();if(I!==D){L[0]=I;e:for(var Y=0,ae=L.length,ji=ae>>>1;Y<ji;){var on=2*(Y+1)-1,hs=L[on],sn=on+1,ki=L[sn];if(0>i(hs,I))sn<ae&&0>i(ki,hs)?(L[Y]=ki,L[sn]=I,Y=sn):(L[Y]=hs,L[on]=I,Y=on);else if(sn<ae&&0>i(ki,I))L[Y]=ki,L[sn]=I,Y=sn;else break e}}return D}function i(L,D){var I=L.sortIndex-D.sortIndex;return I!==0?I:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],p=1,d=null,f=3,y=!1,v=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=L)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function S(L){if(x=!1,g(L),!v)if(n(l)!==null)v=!0,Re(j);else{var D=n(u);D!==null&&rn(S,D.startTime-L)}}function j(L,D){v=!1,x&&(x=!1,m(T),T=-1),y=!0;var I=f;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||L&&!W());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,f=d.priorityLevel;var ae=Y(d.expirationTime<=D);D=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var ji=!0;else{var on=n(u);on!==null&&rn(S,on.startTime-D),ji=!1}return ji}finally{d=null,f=I,y=!1}}var E=!1,P=null,T=-1,R=5,M=-1;function W(){return!(e.unstable_now()-M<R)}function ze(){if(P!==null){var L=e.unstable_now();M=L;var D=!0;try{D=P(!0,L)}finally{D?nn():(E=!1,P=null)}}else E=!1}var nn;if(typeof h=="function")nn=function(){h(ze)};else if(typeof MessageChannel<"u"){var fr=new MessageChannel,ce=fr.port2;fr.port1.onmessage=ze,nn=function(){ce.postMessage(null)}}else nn=function(){w(ze,0)};function Re(L){P=L,E||(E=!0,nn())}function rn(L,D){T=w(function(){L(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Re(j))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var I=f;f=D;try{return L()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=f;f=L;try{return D()}finally{f=I}},e.unstable_scheduleCallback=function(L,D,I){var Y=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Y+I:Y):I=Y,L){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=I+ae,L={id:p++,callback:D,priorityLevel:L,startTime:I,expirationTime:ae,sortIndex:-1},I>Y?(L.sortIndex=I,t(u,L),n(l)===null&&L===n(u)&&(x?(m(T),T=-1):x=!0,rn(S,I-Y))):(L.sortIndex=ae,t(l,L),v||y||(v=!0,Re(j))),L},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(L){var D=f;return function(){var I=f;f=D;try{return L.apply(this,arguments)}finally{f=I}}}})(Up);zp.exports=Up;var lg=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=C,Ve=lg;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hp=new Set,Hr={};function kn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Hr[e]=t,e=0;e<t.length;e++)Hp.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,cg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$u={},Gu={};function dg(e){return ia.call(Gu,e)?!0:ia.call($u,e)?!1:cg.test(e)?Gu[e]=!0:($u[e]=!0,!1)}function pg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fg(e,t,n,r){if(t===null||typeof t>"u"||pg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sl,wl);he[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sl,wl);he[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sl,wl);he[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fg(t,n,i,r)&&(n=null),r||i===null?dg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),Ku=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ys;function jr(e){if(ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||""}return`
`+ys+e}var vs=!1;function xs(e,t){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function hg(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=xs(e.type,!1),e;case 11:return e=xs(e.type.render,!1),e;case 1:return e=xs(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Mn:return"Portal";case oa:return"Profiler";case jl:return"StrictMode";case sa:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wp:return(e.displayName||"Context")+".Consumer";case Jp:return(e._context.displayName||"Context")+".Provider";case kl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gg(e){var t=Gp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=gg(e))}function Kp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qp(e,t){t=t.checked,t!=null&&Cl(e,"checked",t,!1)}function ca(e,t){qp(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(kr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Qp(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,Xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yg=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){yg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vg=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(e,t){if(t){if(vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,qn=null,Qn=null;function Zu(e){if(e=gi(e)){if(typeof ya!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Go(t),ya(e.stateNode,e.type,t))}}function tf(e){qn?Qn?Qn.push(e):Qn=[e]:qn=e}function nf(){if(qn){var e=qn,t=Qn;if(Qn=qn=null,Zu(e),t)for(e=0;e<t.length;e++)Zu(t[e])}}function rf(e,t){return e(t)}function of(){}var Ss=!1;function sf(e,t,n){if(Ss)return e(t,n);Ss=!0;try{return rf(e,t,n)}finally{Ss=!1,(qn!==null||Qn!==null)&&(of(),nf())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var va=!1;if(jt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){va=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{va=!1}function xg(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Ar=!1,co=null,po=!1,xa=null,Sg={onError:function(e){Ar=!0,co=e}};function wg(e,t,n,r,i,o,s,a,l){Ar=!1,co=null,xg.apply(Sg,arguments)}function Cg(e,t,n,r,i,o,s,a,l){if(wg.apply(this,arguments),Ar){if(Ar){var u=co;Ar=!1,co=null}else throw Error(k(198));po||(po=!0,xa=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ec(e){if(Tn(e)!==e)throw Error(k(188))}function jg(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ec(i),e;if(o===r)return ec(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function lf(e){return e=jg(e),e!==null?uf(e):null}function uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uf(e);if(t!==null)return t;e=e.sibling}return null}var cf=Ve.unstable_scheduleCallback,tc=Ve.unstable_cancelCallback,kg=Ve.unstable_shouldYield,Tg=Ve.unstable_requestPaint,te=Ve.unstable_now,Eg=Ve.unstable_getCurrentPriorityLevel,Pl=Ve.unstable_ImmediatePriority,df=Ve.unstable_UserBlockingPriority,fo=Ve.unstable_NormalPriority,Pg=Ve.unstable_LowPriority,pf=Ve.unstable_IdlePriority,Ho=null,lt=null;function Lg(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Ag,bg=Math.log,Mg=Math.LN2;function Ag(e){return e>>>=0,e===0?32:31-(bg(e)/Mg|0)|0}var bi=64,Mi=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Tr(a):(o&=s,o!==0&&(r=Tr(o)))}else s=n&~i,s!==0?r=Tr(s):o!==0&&(r=Tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Dg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Dg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ff(){var e=bi;return bi<<=1,!(bi&4194240)&&(bi=64),e}function ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Ng(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _=0;function hf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,bl,gf,yf,vf,wa=!1,Ai=[],_t=null,Ft=null,Bt=null,$r=new Map,Gr=new Map,Rt=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Og(e,t,n,r,i){switch(t){case"focusin":return _t=gr(_t,e,t,n,r,i),!0;case"dragenter":return Ft=gr(Ft,e,t,n,r,i),!0;case"mouseover":return Bt=gr(Bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return $r.set(o,gr($r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gr.set(o,gr(Gr.get(o)||null,e,t,n,r,i)),!0}return!1}function xf(e){var t=pn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=af(n),t!==null){e.blockedOn=t,vf(e.priority,function(){gf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ga=r,n.target.dispatchEvent(r),ga=null}else return t=gi(n),t!==null&&bl(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){Gi(e)&&n.delete(t)}function Vg(){wa=!1,_t!==null&&Gi(_t)&&(_t=null),Ft!==null&&Gi(Ft)&&(Ft=null),Bt!==null&&Gi(Bt)&&(Bt=null),$r.forEach(rc),Gr.forEach(rc)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Vg)))}function Kr(e){function t(i){return yr(i,e)}if(0<Ai.length){yr(Ai[0],e);for(var n=1;n<Ai.length;n++){var r=Ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&yr(_t,e),Ft!==null&&yr(Ft,e),Bt!==null&&yr(Bt,e),$r.forEach(t),Gr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)xf(n),n.blockedOn===null&&Rt.shift()}var Yn=Lt.ReactCurrentBatchConfig,mo=!0;function _g(e,t,n,r){var i=_,o=Yn.transition;Yn.transition=null;try{_=1,Ml(e,t,n,r)}finally{_=i,Yn.transition=o}}function Fg(e,t,n,r){var i=_,o=Yn.transition;Yn.transition=null;try{_=4,Ml(e,t,n,r)}finally{_=i,Yn.transition=o}}function Ml(e,t,n,r){if(mo){var i=Ca(e,t,n,r);if(i===null)As(e,t,r,go,n),nc(e,r);else if(Og(i,e,t,n,r))r.stopPropagation();else if(nc(e,r),t&4&&-1<Ig.indexOf(e)){for(;i!==null;){var o=gi(i);if(o!==null&&mf(o),o=Ca(e,t,n,r),o===null&&As(e,t,r,go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else As(e,t,r,null,n)}}var go=null;function Ca(e,t,n,r){if(go=null,e=El(r),e=pn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function Sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eg()){case Pl:return 1;case df:return 4;case fo:case Pg:return 16;case pf:return 536870912;default:return 16}default:return 16}}var It=null,Al=null,Ki=null;function wf(){if(Ki)return Ki;var e,t=Al,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ki=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function ic(){return!1}function Be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Di:ic,this.isPropagationStopped=ic,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Be(cr),mi=q({},cr,{view:0,detail:0}),Bg=Be(mi),Cs,js,vr,Jo=q({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Cs=e.screenX-vr.screenX,js=e.screenY-vr.screenY):js=Cs=0,vr=e),Cs)},movementY:function(e){return"movementY"in e?e.movementY:js}}),oc=Be(Jo),zg=q({},Jo,{dataTransfer:0}),Ug=Be(zg),Hg=q({},mi,{relatedTarget:0}),ks=Be(Hg),Jg=q({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wg=Be(Jg),$g=q({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=Be($g),Kg=q({},cr,{data:0}),sc=Be(Kg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yg[e])?!!t[e]:!1}function Rl(){return Xg}var Zg=q({},mi,{key:function(e){if(e.key){var t=qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e1=Be(Zg),t1=q({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Be(t1),n1=q({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),r1=Be(n1),i1=q({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=Be(i1),s1=q({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=Be(s1),l1=[9,13,27,32],Nl=jt&&"CompositionEvent"in window,Dr=null;jt&&"documentMode"in document&&(Dr=document.documentMode);var u1=jt&&"TextEvent"in window&&!Dr,Cf=jt&&(!Nl||Dr&&8<Dr&&11>=Dr),lc=" ",uc=!1;function jf(e,t){switch(e){case"keyup":return l1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function c1(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(uc=!0,lc);case"textInput":return e=t.data,e===lc&&uc?null:e;default:return null}}function d1(e,t){if(Dn)return e==="compositionend"||!Nl&&jf(e,t)?(e=wf(),Ki=Al=It=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cf&&t.locale!=="ko"?null:t.data;default:return null}}var p1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p1[e.type]:t==="textarea"}function Tf(e,t,n,r){tf(r),t=yo(t,"onChange"),0<t.length&&(n=new Dl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,qr=null;function f1(e){Of(e,0)}function Wo(e){var t=In(e);if(Kp(t))return e}function h1(e,t){if(e==="change")return t}var Ef=!1;if(jt){var Ts;if(jt){var Es="oninput"in document;if(!Es){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Es=typeof dc.oninput=="function"}Ts=Es}else Ts=!1;Ef=Ts&&(!document.documentMode||9<document.documentMode)}function pc(){Rr&&(Rr.detachEvent("onpropertychange",Pf),qr=Rr=null)}function Pf(e){if(e.propertyName==="value"&&Wo(qr)){var t=[];Tf(t,qr,e,El(e)),sf(f1,t)}}function m1(e,t,n){e==="focusin"?(pc(),Rr=t,qr=n,Rr.attachEvent("onpropertychange",Pf)):e==="focusout"&&pc()}function g1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wo(qr)}function y1(e,t){if(e==="click")return Wo(t)}function v1(e,t){if(e==="input"||e==="change")return Wo(t)}function x1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:x1;function Qr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ia.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var n=fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bf(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S1(e){var t=bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hc(n,o);var s=hc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w1=jt&&"documentMode"in document&&11>=document.documentMode,Rn=null,ja=null,Nr=null,ka=!1;function mc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ka||Rn==null||Rn!==uo(r)||(r=Rn,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Qr(Nr,r)||(Nr=r,r=yo(ja,"onSelect"),0<r.length&&(t=new Dl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function Ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},Ps={},Mf={};jt&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function $o(e){if(Ps[e])return Ps[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mf)return Ps[e]=t[n];return e}var Af=$o("animationend"),Df=$o("animationiteration"),Rf=$o("animationstart"),Nf=$o("transitionend"),If=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){If.set(e,t),kn(t,[e])}for(var Ls=0;Ls<gc.length;Ls++){var bs=gc[Ls],C1=bs.toLowerCase(),j1=bs[0].toUpperCase()+bs.slice(1);Yt(C1,"on"+j1)}Yt(Af,"onAnimationEnd");Yt(Df,"onAnimationIteration");Yt(Rf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Nf,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cg(r,t,void 0,e),e.currentTarget=null}function Of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;yc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;yc(i,a,u),o=l}}}if(po)throw e=xa,po=!1,xa=null,e}function U(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var r=e+"__bubble";n.has(r)||(Vf(t,e,2,!1),n.add(r))}function Ms(e,t,n){var r=0;t&&(r|=4),Vf(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Ni]){e[Ni]=!0,Hp.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||Ms(n,!1,e),Ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Ms("selectionchange",!1,t))}}function Vf(e,t,n,r){switch(Sf(t)){case 1:var i=_g;break;case 4:i=Fg;break;default:i=Ml}n=i.bind(null,t,n,e),i=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function As(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=pn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}sf(function(){var u=o,p=El(n),d=[];e:{var f=If.get(e);if(f!==void 0){var y=Dl,v=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":y=e1;break;case"focusin":v="focus",y=ks;break;case"focusout":v="blur",y=ks;break;case"beforeblur":case"afterblur":y=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=r1;break;case Af:case Df:case Rf:y=Wg;break;case Nf:y=o1;break;case"scroll":y=Bg;break;case"wheel":y=a1;break;case"copy":case"cut":case"paste":y=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ac}var x=(t&4)!==0,w=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Wr(h,m),S!=null&&x.push(Xr(h,S,g)))),w)break;h=h.return}0<x.length&&(f=new y(f,v,null,n,p),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==ga&&(v=n.relatedTarget||n.fromElement)&&(pn(v)||v[kt]))break e;if((y||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?pn(v):null,v!==null&&(w=Tn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=oc,S="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=ac,S="onPointerLeave",m="onPointerEnter",h="pointer"),w=y==null?f:In(y),g=v==null?f:In(v),f=new x(S,h+"leave",y,n,p),f.target=w,f.relatedTarget=g,S=null,pn(p)===u&&(x=new x(m,h+"enter",v,n,p),x.target=g,x.relatedTarget=w,S=x),w=S,y&&v)t:{for(x=y,m=v,h=0,g=x;g;g=bn(g))h++;for(g=0,S=m;S;S=bn(S))g++;for(;0<h-g;)x=bn(x),h--;for(;0<g-h;)m=bn(m),g--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=bn(x),m=bn(m)}x=null}else x=null;y!==null&&vc(d,f,y,x,!1),v!==null&&w!==null&&vc(d,w,v,x,!0)}}e:{if(f=u?In(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var j=h1;else if(cc(f))if(Ef)j=v1;else{j=g1;var E=m1}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=y1);if(j&&(j=j(e,u))){Tf(d,j,n,p);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&da(f,"number",f.value)}switch(E=u?In(u):window,e){case"focusin":(cc(E)||E.contentEditable==="true")&&(Rn=E,ja=u,Nr=null);break;case"focusout":Nr=ja=Rn=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,mc(d,n,p);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":mc(d,n,p)}var P;if(Nl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Dn?jf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Cf&&n.locale!=="ko"&&(Dn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Dn&&(P=wf()):(It=p,Al="value"in It?It.value:It.textContent,Dn=!0)),E=yo(u,T),0<E.length&&(T=new sc(T,e,null,n,p),d.push({event:T,listeners:E}),P?T.data=P:(P=kf(n),P!==null&&(T.data=P)))),(P=u1?c1(e,n):d1(e,n))&&(u=yo(u,"onBeforeInput"),0<u.length&&(p=new sc("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=P))}Of(d,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wr(e,n),o!=null&&r.unshift(Xr(e,o,i)),o=Wr(e,t),o!=null&&r.push(Xr(e,o,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wr(n,o),l!=null&&s.unshift(Xr(n,l,a))):i||(l=Wr(n,o),l!=null&&s.push(Xr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var T1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(T1,`
`).replace(E1,"")}function Ii(e,t,n){if(t=xc(t),xc(e)!==t&&n)throw Error(k(425))}function vo(){}var Ta=null,Ea=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc<"u"?function(e){return Sc.resolve(null).then(e).catch(b1)}:La;function b1(e){setTimeout(function(){throw e})}function Ds(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),at="__reactFiber$"+dr,Zr="__reactProps$"+dr,kt="__reactContainer$"+dr,ba="__reactEvents$"+dr,M1="__reactListeners$"+dr,A1="__reactHandles$"+dr;function pn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[at])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[at]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Go(e){return e[Zr]||null}var Ma=[],On=-1;function Xt(e){return{current:e}}function H(e){0>On||(e.current=Ma[On],Ma[On]=null,On--)}function z(e,t){On++,Ma[On]=e.current,e.current=t}var Kt={},Ce=Xt(Kt),Me=Xt(!1),xn=Kt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function xo(){H(Me),H(Ce)}function Cc(e,t,n){if(Ce.current!==Kt)throw Error(k(168));z(Ce,t),z(Me,n)}function _f(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,mg(e)||"Unknown",i));return q({},n,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,xn=Ce.current,z(Ce,e),z(Me,Me.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=_f(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,H(Me),H(Ce),z(Ce,e)):H(Me),z(Me,n)}var pt=null,Ko=!1,Rs=!1;function Ff(e){pt===null?pt=[e]:pt.push(e)}function D1(e){Ko=!0,Ff(e)}function Zt(){if(!Rs&&pt!==null){Rs=!0;var e=0,t=_;try{var n=pt;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,Ko=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),cf(Pl,Zt),i}finally{_=t,Rs=!1}}return null}var Vn=[],_n=0,wo=null,Co=0,Je=[],We=0,Sn=null,ft=1,ht="";function ln(e,t){Vn[_n++]=Co,Vn[_n++]=wo,wo=e,Co=t}function Bf(e,t,n){Je[We++]=ft,Je[We++]=ht,Je[We++]=Sn,Sn=e;var r=ft;e=ht;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-tt(t)+i|n<<i|r,ht=o+e}else ft=1<<o|n<<i|r,ht=e}function Ol(e){e.return!==null&&(ln(e,1),Bf(e,1,0))}function Vl(e){for(;e===wo;)wo=Vn[--_n],Vn[_n]=null,Co=Vn[--_n],Vn[_n]=null;for(;e===Sn;)Sn=Je[--We],Je[We]=null,ht=Je[--We],Je[We]=null,ft=Je[--We],Je[We]=null}var Oe=null,Ie=null,J=!1,et=null;function zf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Ie=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Ie=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(J){var t=Ie;if(t){var n=t;if(!kc(e,t)){if(Aa(e))throw Error(k(418));t=zt(n.nextSibling);var r=Oe;t&&kc(e,t)?zf(r,n):(e.flags=e.flags&-4097|2,J=!1,Oe=e)}}else{if(Aa(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,Oe=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function Oi(e){if(e!==Oe)return!1;if(!J)return Tc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Ie)){if(Aa(e))throw Uf(),Error(k(418));for(;t;)zf(e,t),t=zt(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Oe?zt(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=Ie;e;)e=zt(e.nextSibling)}function nr(){Ie=Oe=null,J=!1}function _l(e){et===null?et=[e]:et.push(e)}var R1=Lt.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Vi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ec(e){var t=e._init;return t(e._payload)}function Hf(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Wt(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,S){return h===null||h.tag!==6?(h=Bs(g,m.mode,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,S){var j=g.type;return j===An?p(m,h,g.props.children,S,g.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===At&&Ec(j)===h.type)?(S=i(h,g.props),S.ref=xr(m,h,g),S.return=m,S):(S=no(g.type,g.key,g.props,null,m.mode,S),S.ref=xr(m,h,g),S.return=m,S)}function u(m,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=zs(g,m.mode,S),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function p(m,h,g,S,j){return h===null||h.tag!==7?(h=yn(g,m.mode,S,j),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Bs(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ei:return g=no(h.type,h.key,h.props,null,m.mode,g),g.ref=xr(m,null,h),g.return=m,g;case Mn:return h=zs(h,m.mode,g),h.return=m,h;case At:var S=h._init;return d(m,S(h._payload),g)}if(kr(h)||hr(h))return h=yn(h,m.mode,g,null),h.return=m,h;Vi(m,h)}return null}function f(m,h,g,S){var j=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:a(m,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:return g.key===j?l(m,h,g,S):null;case Mn:return g.key===j?u(m,h,g,S):null;case At:return j=g._init,f(m,h,j(g._payload),S)}if(kr(g)||hr(g))return j!==null?null:p(m,h,g,S,null);Vi(m,g)}return null}function y(m,h,g,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,a(h,m,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ei:return m=m.get(S.key===null?g:S.key)||null,l(h,m,S,j);case Mn:return m=m.get(S.key===null?g:S.key)||null,u(h,m,S,j);case At:var E=S._init;return y(m,h,g,E(S._payload),j)}if(kr(S)||hr(S))return m=m.get(g)||null,p(h,m,S,j,null);Vi(h,S)}return null}function v(m,h,g,S){for(var j=null,E=null,P=h,T=h=0,R=null;P!==null&&T<g.length;T++){P.index>T?(R=P,P=null):R=P.sibling;var M=f(m,P,g[T],S);if(M===null){P===null&&(P=R);break}e&&P&&M.alternate===null&&t(m,P),h=o(M,h,T),E===null?j=M:E.sibling=M,E=M,P=R}if(T===g.length)return n(m,P),J&&ln(m,T),j;if(P===null){for(;T<g.length;T++)P=d(m,g[T],S),P!==null&&(h=o(P,h,T),E===null?j=P:E.sibling=P,E=P);return J&&ln(m,T),j}for(P=r(m,P);T<g.length;T++)R=y(P,m,T,g[T],S),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?T:R.key),h=o(R,h,T),E===null?j=R:E.sibling=R,E=R);return e&&P.forEach(function(W){return t(m,W)}),J&&ln(m,T),j}function x(m,h,g,S){var j=hr(g);if(typeof j!="function")throw Error(k(150));if(g=j.call(g),g==null)throw Error(k(151));for(var E=j=null,P=h,T=h=0,R=null,M=g.next();P!==null&&!M.done;T++,M=g.next()){P.index>T?(R=P,P=null):R=P.sibling;var W=f(m,P,M.value,S);if(W===null){P===null&&(P=R);break}e&&P&&W.alternate===null&&t(m,P),h=o(W,h,T),E===null?j=W:E.sibling=W,E=W,P=R}if(M.done)return n(m,P),J&&ln(m,T),j;if(P===null){for(;!M.done;T++,M=g.next())M=d(m,M.value,S),M!==null&&(h=o(M,h,T),E===null?j=M:E.sibling=M,E=M);return J&&ln(m,T),j}for(P=r(m,P);!M.done;T++,M=g.next())M=y(P,m,T,M.value,S),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?T:M.key),h=o(M,h,T),E===null?j=M:E.sibling=M,E=M);return e&&P.forEach(function(ze){return t(m,ze)}),J&&ln(m,T),j}function w(m,h,g,S){if(typeof g=="object"&&g!==null&&g.type===An&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:e:{for(var j=g.key,E=h;E!==null;){if(E.key===j){if(j=g.type,j===An){if(E.tag===7){n(m,E.sibling),h=i(E,g.props.children),h.return=m,m=h;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===At&&Ec(j)===E.type){n(m,E.sibling),h=i(E,g.props),h.ref=xr(m,E,g),h.return=m,m=h;break e}n(m,E);break}else t(m,E);E=E.sibling}g.type===An?(h=yn(g.props.children,m.mode,S,g.key),h.return=m,m=h):(S=no(g.type,g.key,g.props,null,m.mode,S),S.ref=xr(m,h,g),S.return=m,m=S)}return s(m);case Mn:e:{for(E=g.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=zs(g,m.mode,S),h.return=m,m=h}return s(m);case At:return E=g._init,w(m,h,E(g._payload),S)}if(kr(g))return v(m,h,g,S);if(hr(g))return x(m,h,g,S);Vi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Bs(g,m.mode,S),h.return=m,m=h),s(m)):n(m,h)}return w}var rr=Hf(!0),Jf=Hf(!1),jo=Xt(null),ko=null,Fn=null,Fl=null;function Bl(){Fl=Fn=ko=null}function zl(e){var t=jo.current;H(jo),e._currentValue=t}function Ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){ko=e,Fl=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(ko===null)throw Error(k(308));Fn=e,ko.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function Ul(e){fn===null?fn=[e]:fn.push(e)}function Wf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ul(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ul(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ll(e,n)}}function Pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function To(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,p=u=l=null,a=o;do{var f=a.lane,y=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=q({},d,f);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,l=d):p=p.next=y,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(p===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Cn|=s,e.lanes=s,e.memoizedState=d}}function Lc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var yi={},ut=Xt(yi),ei=Xt(yi),ti=Xt(yi);function hn(e){if(e===yi)throw Error(k(174));return e}function Jl(e,t){switch(z(ti,t),z(ei,e),z(ut,yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}H(ut),z(ut,t)}function ir(){H(ut),H(ei),H(ti)}function Gf(e){hn(ti.current);var t=hn(ut.current),n=fa(t,e.type);t!==n&&(z(ei,e),z(ut,n))}function Wl(e){ei.current===e&&(H(ut),H(ei))}var $=Xt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function $l(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var Yi=Lt.ReactCurrentDispatcher,Is=Lt.ReactCurrentBatchConfig,wn=0,K=null,oe=null,le=null,Po=!1,Ir=!1,ni=0,N1=0;function me(){throw Error(k(321))}function Gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Kl(e,t,n,r,i,o){if(wn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?_1:F1,e=n(r,i),Ir){o=0;do{if(Ir=!1,ni=0,25<=o)throw Error(k(301));o+=1,le=oe=null,t.updateQueue=null,Yi.current=B1,e=n(r,i)}while(Ir)}if(Yi.current=Lo,t=oe!==null&&oe.next!==null,wn=0,le=oe=K=null,Po=!1,t)throw Error(k(300));return e}function ql(){var e=ni!==0;return ni=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function qe(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(k(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function ri(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var p=u.lane;if((wn&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,K.lanes|=p,Cn|=p}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,rt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,Cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vs(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kf(){}function qf(e,t){var n=K,r=qe(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,Ql(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ii(9,Yf.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(k(349));wn&30||Qf(n,t,i)}return i}function Qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,r){t.value=n,t.getSnapshot=r,Zf(t)&&eh(e)}function Xf(e,t,n){return n(function(){Zf(t)&&eh(e)})}function Zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function eh(e){var t=Tt(e,1);t!==null&&nt(t,e,1,-1)}function bc(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},t.queue=e,e=e.dispatch=V1.bind(null,K,e),[t.memoizedState,e]}function ii(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function th(){return qe().memoizedState}function Xi(e,t,n,r){var i=st();K.flags|=e,i.memoizedState=ii(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var i=qe();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Gl(r,s.deps)){i.memoizedState=ii(t,n,o,r);return}}K.flags|=e,i.memoizedState=ii(1|t,n,o,r)}function Mc(e,t){return Xi(8390656,8,e,t)}function Ql(e,t){return qo(2048,8,e,t)}function nh(e,t){return qo(4,2,e,t)}function rh(e,t){return qo(4,4,e,t)}function ih(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function oh(e,t,n){return n=n!=null?n.concat([e]):null,qo(4,4,ih.bind(null,t,e),n)}function Yl(){}function sh(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ah(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lh(e,t,n){return wn&21?(rt(n,t)||(n=ff(),K.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function I1(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=Is.transition;Is.transition={};try{e(!1),t()}finally{_=n,Is.transition=r}}function uh(){return qe().memoizedState}function O1(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ch(e))dh(t,n);else if(n=Wf(e,t,n,r),n!==null){var i=ke();nt(n,e,r,i),ph(n,t,r)}}function V1(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ch(e))dh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var l=t.interleaved;l===null?(i.next=i,Ul(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wf(e,t,i,r),n!==null&&(i=ke(),nt(n,e,r,i),ph(n,t,r))}}function ch(e){var t=e.alternate;return e===K||t!==null&&t===K}function dh(e,t){Ir=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ph(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ll(e,n)}}var Lo={readContext:Ke,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},_1={readContext:Ke,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,ih.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O1.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:Yl,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=I1.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=st();if(J){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ue===null)throw Error(k(349));wn&30||Qf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mc(Xf.bind(null,r,o,e),[e]),r.flags|=2048,ii(9,Yf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ue.identifierPrefix;if(J){var n=ht,r=ft;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},F1={readContext:Ke,useCallback:sh,useContext:Ke,useEffect:Ql,useImperativeHandle:oh,useInsertionEffect:nh,useLayoutEffect:rh,useMemo:ah,useReducer:Os,useRef:th,useState:function(){return Os(ri)},useDebugValue:Yl,useDeferredValue:function(e){var t=qe();return lh(t,oe.memoizedState,e)},useTransition:function(){var e=Os(ri)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:qf,useId:uh,unstable_isNewReconciler:!1},B1={readContext:Ke,useCallback:sh,useContext:Ke,useEffect:Ql,useImperativeHandle:oh,useInsertionEffect:nh,useLayoutEffect:rh,useMemo:ah,useReducer:Vs,useRef:th,useState:function(){return Vs(ri)},useDebugValue:Yl,useDeferredValue:function(e){var t=qe();return oe===null?t.memoizedState=e:lh(t,oe.memoizedState,e)},useTransition:function(){var e=Vs(ri)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Kf,useSyncExternalStore:qf,useId:uh,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qo={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Jt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,i),t!==null&&(nt(t,e,i,r),Qi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Jt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,i),t!==null&&(nt(t,e,i,r),Qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Jt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(nt(t,e,r,n),Qi(t,e,r))}};function Ac(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(i,o):!0}function fh(e,t,n){var r=!1,i=Kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Ae(t)?xn:Ce.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):Kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qo.enqueueReplaceState(t,t.state,null)}function Ia(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Ae(t)?xn:Ce.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Na(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qo.enqueueReplaceState(i,i.state,null),To(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=hg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _s(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var z1=typeof WeakMap=="function"?WeakMap:Map;function hh(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,$a=r),Oa(e,t)},n}function mh(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new z1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ty.bind(null,e,t,n),t.then(e,e))}function Nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ic(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var U1=Lt.ReactCurrentOwner,be=!1;function je(e,t,n,r){t.child=e===null?Jf(t,null,n,r):rr(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var o=t.ref;return Xn(t,i),r=Kl(e,t,n,r,o,i),n=ql(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(J&&n&&Ol(t),t.flags|=1,je(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gh(e,t,o,r,i)):(e=no(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(s,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function gh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qr(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Et(e,t,i)}return Va(e,t,n,r,i)}function yh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(zn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(zn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(zn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(zn,Ne),Ne|=r;return je(e,t,i,n),t.child}function vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,n,r,i){var o=Ae(n)?xn:Ce.current;return o=tr(t,o),Xn(t,i),n=Kl(e,t,n,r,o,i),r=ql(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(J&&r&&Ol(t),t.flags|=1,je(e,t,n,i),t.child)}function _c(e,t,n,r,i){if(Ae(n)){var o=!0;So(t)}else o=!1;if(Xn(t,i),t.stateNode===null)Zi(e,t),fh(t,n,r),Ia(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Ae(n)?xn:Ce.current,u=tr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dc(t,s,r,u),Dt=!1;var f=t.memoizedState;s.state=f,To(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Me.current||Dt?(typeof p=="function"&&(Na(t,n,p,r),l=t.memoizedState),(a=Dt||Ac(t,n,a,r,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$f(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ye(t.type,a),s.props=u,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=Ae(n)?xn:Ce.current,l=tr(t,l));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Dc(t,s,r,l),Dt=!1,f=t.memoizedState,s.state=f,To(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||Me.current||Dt?(typeof y=="function"&&(Na(t,n,y,r),v=t.memoizedState),(u=Dt||Ac(t,n,u,r,f,v,l)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return _a(e,t,n,r,o,i)}function _a(e,t,n,r,i,o){vh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&jc(t,n,!1),Et(e,t,o);r=t.stateNode,U1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,a,o)):je(e,t,a,o),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function xh(e){var t=e.stateNode;t.pendingContext?Cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cc(e,t.context,!1),Jl(e,t.containerInfo)}function Fc(e,t,n,r,i){return nr(),_l(i),t.flags|=256,je(e,t,n,r),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sh(e,t,n){var r=t.pendingProps,i=$.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z($,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zo(s,r,0,null),e=yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ba(n),t.memoizedState=Fa,e):Xl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return H1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=yn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ba(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Fa,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xl(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&_l(r),rr(t,e.child,null,n),e=Xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=_s(Error(k(422))),_i(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Zo({mode:"visible",children:r.children},i,0,null),o=yn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rr(t,e.child,null,s),t.child.memoizedState=Ba(s),t.memoizedState=Fa,o);if(!(t.mode&1))return _i(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=_s(o,r,void 0),_i(e,t,s,r)}if(a=(s&e.childLanes)!==0,be||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tt(e,i),nt(r,e,i,-1))}return iu(),r=_s(Error(k(421))),_i(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ny.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ie=zt(i.nextSibling),Oe=t,J=!0,et=null,e!==null&&(Je[We++]=ft,Je[We++]=ht,Je[We++]=Sn,ft=e.id,ht=e.overflow,Sn=t),t=Xl(t,r.children),t.flags|=4096,t)}function Bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ra(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bc(e,n,t);else if(e.tag===19)Bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function J1(e,t,n){switch(t.tag){case 3:xh(t),nr();break;case 5:Gf(t);break;case 1:Ae(t.type)&&So(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Sh(e,t,n):(z($,$.current&1),e=Et(e,t,n),e!==null?e.sibling:null);z($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,yh(e,t,n)}return Et(e,t,n)}var Ch,za,jh,kh;Ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};jh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,hn(ut.current);var o=null;switch(n){case"input":i=ua(e,i),r=ua(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=pa(e,i),r=pa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}ha(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};kh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W1(e,t,n){var r=t.pendingProps;switch(Vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ae(t.type)&&xo(),ge(t),null;case 3:return r=t.stateNode,ir(),H(Me),H(Ce),$l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(qa(et),et=null))),za(e,t),ge(t),null;case 5:Wl(t);var i=hn(ti.current);if(n=t.type,e!==null&&t.stateNode!=null)jh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ge(t),null}if(e=hn(ut.current),Oi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Zr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)U(Er[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":qu(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Yu(r,o),U("invalid",r)}ha(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ii(r.textContent,a,e),i=["children",""+a]):Hr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":Pi(r),Qu(r,o,!0);break;case"textarea":Pi(r),Xu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Zr]=r,Ch(e,t,!1,!1),t.stateNode=e;e:{switch(s=ma(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)U(Er[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":qu(e,r),i=ua(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),U("invalid",e);break;case"textarea":Yu(e,r),i=pa(e,r),U("invalid",e);break;default:i=r}ha(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ef(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jr(e,l):typeof l=="number"&&Jr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&U("scroll",e):l!=null&&Cl(e,o,l,s))}switch(n){case"input":Pi(e),Qu(e,r,!1);break;case"textarea":Pi(e),Xu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)kh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=hn(ti.current),hn(ut.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ge(t),null;case 13:if(H($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Ie!==null&&t.mode&1&&!(t.flags&128))Uf(),nr(),t.flags|=98560,o=!1;else if(o=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[at]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),o=!1}else et!==null&&(qa(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?se===0&&(se=3):iu())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return ir(),za(e,t),e===null&&Yr(t.stateNode.containerInfo),ge(t),null;case 10:return zl(t.type._context),ge(t),null;case 17:return Ae(t.type)&&xo(),ge(t),null;case 19:if(H($),o=t.memoizedState,o===null)return ge(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Sr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Eo(e),s!==null){for(t.flags|=128,Sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z($,$.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>sr&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return ge(t),null}else 2*te()-o.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=$.current,z($,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function $1(e,t){switch(Vl(t),t.tag){case 1:return Ae(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),H(Me),H(Ce),$l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wl(t),null;case 13:if(H($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H($),null;case 4:return ir(),null;case 10:return zl(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Fi=!1,ve=!1,G1=typeof WeakSet=="function"?WeakSet:Set,b=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ua(e,t,n){try{n()}catch(r){Q(e,t,r)}}var zc=!1;function K1(e,t){if(Ta=mo,e=bf(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++p===r&&(l=s),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},mo=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,w=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),w);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){Q(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return v=zc,zc=!1,v}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ua(t,n,o)}i=i.next}while(i!==r)}}function Yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Th(e){var t=e.alternate;t!==null&&(e.alternate=null,Th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Zr],delete t[ba],delete t[M1],delete t[A1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eh(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var de=null,Ze=!1;function bt(e,t,n){for(n=n.child;n!==null;)Ph(e,t,n),n=n.sibling}function Ph(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:ve||Bn(n,t);case 6:var r=de,i=Ze;de=null,bt(e,t,n),de=r,Ze=i,de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?Ds(e.parentNode,n):e.nodeType===1&&Ds(e,n),Kr(e)):Ds(de,n.stateNode));break;case 4:r=de,i=Ze,de=n.stateNode.containerInfo,Ze=!0,bt(e,t,n),de=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ua(n,t,s),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!ve&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,bt(e,t,n),ve=r):bt(e,t,n);break;default:bt(e,t,n)}}function Hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G1),t.forEach(function(r){var i=ry.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ze=!1;break e;case 3:de=a.stateNode.containerInfo,Ze=!0;break e;case 4:de=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(de===null)throw Error(k(160));Ph(o,s,i),de=null,Ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),it(e),r&4){try{Or(3,e,e.return),Yo(3,e)}catch(x){Q(e,e.return,x)}try{Or(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Qe(t,e),it(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(Qe(t,e),it(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qp(i,o),ma(a,s);var u=ma(a,o);for(s=0;s<l.length;s+=2){var p=l[s],d=l[s+1];p==="style"?ef(i,d):p==="dangerouslySetInnerHTML"?Xp(i,d):p==="children"?Jr(i,d):Cl(i,p,d,u)}switch(a){case"input":ca(i,o);break;case"textarea":Qp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Kn(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?Kn(i,!!o.multiple,o.defaultValue,!0):Kn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zr]=o}catch(x){Q(e,e.return,x)}}break;case 6:if(Qe(t,e),it(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Q(e,e.return,x)}}break;case 3:if(Qe(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Qe(t,e),it(e);break;case 13:Qe(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=te())),r&4&&Hc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||p,Qe(t,e),ve=u):Qe(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(b=e,p=e.child;p!==null;){for(d=b=p;b!==null;){switch(f=b,y=f.child,f.tag){case 0:case 11:case 14:case 15:Or(4,f,f.return);break;case 1:Bn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Bn(f,f.return);break;case 22:if(f.memoizedState!==null){Wc(d);continue}}y!==null?(y.return=f,b=y):Wc(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zp("display",s))}catch(x){Q(e,e.return,x)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Q(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(t,e),it(e),r&4&&Hc(e);break;case 21:break;default:Qe(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Eh(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var o=Uc(e);Wa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Uc(e);Ja(e,a,s);break;default:throw Error(k(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q1(e,t,n){b=e,bh(e)}function bh(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Fi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ve;a=Fi;var u=ve;if(Fi=s,(ve=l)&&!u)for(b=i;b!==null;)s=b,l=s.child,s.tag===22&&s.memoizedState!==null?$c(i):l!==null?(l.return=s,b=l):$c(i);for(;o!==null;)b=o,bh(o),o=o.sibling;b=i,Fi=a,ve=u}Jc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):Jc(e)}}function Jc(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Lc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ve||t.flags&512&&Ha(t)}catch(f){Q(t,t.return,f)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Wc(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function $c(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yo(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var o=t.return;try{Ha(t)}catch(l){Q(t,o,l)}break;case 5:var s=t.return;try{Ha(t)}catch(l){Q(t,s,l)}}}catch(l){Q(t,t.return,l)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var Q1=Math.ceil,bo=Lt.ReactCurrentDispatcher,Zl=Lt.ReactCurrentOwner,Ge=Lt.ReactCurrentBatchConfig,V=0,ue=null,re=null,fe=0,Ne=0,zn=Xt(0),se=0,oi=null,Cn=0,Xo=0,eu=0,Vr=null,Le=null,tu=0,sr=1/0,dt=null,Mo=!1,$a=null,Ht=null,Bi=!1,Ot=null,Ao=0,_r=0,Ga=null,eo=-1,to=0;function ke(){return V&6?te():eo!==-1?eo:eo=te()}function Jt(e){return e.mode&1?V&2&&fe!==0?fe&-fe:R1.transition!==null?(to===0&&(to=ff()),to):(e=_,e!==0||(e=window.event,e=e===void 0?16:Sf(e.type)),e):1}function nt(e,t,n,r){if(50<_r)throw _r=0,Ga=null,Error(k(185));hi(e,n,r),(!(V&2)||e!==ue)&&(e===ue&&(!(V&2)&&(Xo|=n),se===4&&Nt(e,fe)),De(e,r),n===1&&V===0&&!(t.mode&1)&&(sr=te()+500,Ko&&Zt()))}function De(e,t){var n=e.callbackNode;Rg(e,t);var r=ho(e,e===ue?fe:0);if(r===0)n!==null&&tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tc(n),t===1)e.tag===0?D1(Gc.bind(null,e)):Ff(Gc.bind(null,e)),L1(function(){!(V&6)&&Zt()}),n=null;else{switch(hf(r)){case 1:n=Pl;break;case 4:n=df;break;case 16:n=fo;break;case 536870912:n=pf;break;default:n=fo}n=Vh(n,Mh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mh(e,t){if(eo=-1,to=0,V&6)throw Error(k(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=ho(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var i=V;V|=2;var o=Dh();(ue!==e||fe!==t)&&(dt=null,sr=te()+500,gn(e,t));do try{Z1();break}catch(a){Ah(e,a)}while(!0);Bl(),bo.current=o,V=i,re!==null?t=0:(ue=null,fe=0,t=se)}if(t!==0){if(t===2&&(i=Sa(e),i!==0&&(r=i,t=Ka(e,i))),t===1)throw n=oi,gn(e,0),Nt(e,r),De(e,te()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Y1(i)&&(t=Do(e,r),t===2&&(o=Sa(e),o!==0&&(r=o,t=Ka(e,o))),t===1))throw n=oi,gn(e,0),Nt(e,r),De(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:un(e,Le,dt);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=tu+500-te(),10<t)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=La(un.bind(null,e,Le,dt),t);break}un(e,Le,dt);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){e.timeoutHandle=La(un.bind(null,e,Le,dt),r);break}un(e,Le,dt);break;case 5:un(e,Le,dt);break;default:throw Error(k(329))}}}return De(e,te()),e.callbackNode===n?Mh.bind(null,e):null}function Ka(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Le,Le=n,t!==null&&qa(t)),e}function qa(e){Le===null?Le=e:Le.push.apply(Le,e)}function Y1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~eu,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Gc(e){if(V&6)throw Error(k(327));Zn();var t=ho(e,0);if(!(t&1))return De(e,te()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=Sa(e);r!==0&&(t=r,n=Ka(e,r))}if(n===1)throw n=oi,gn(e,0),Nt(e,t),De(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Le,dt),De(e,te()),null}function nu(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(sr=te()+500,Ko&&Zt())}}function jn(e){Ot!==null&&Ot.tag===0&&!(V&6)&&Zn();var t=V;V|=1;var n=Ge.transition,r=_;try{if(Ge.transition=null,_=1,e)return e()}finally{_=r,Ge.transition=n,V=t,!(V&6)&&Zt()}}function ru(){Ne=zn.current,H(zn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P1(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:ir(),H(Me),H(Ce),$l();break;case 5:Wl(r);break;case 4:ir();break;case 13:H($);break;case 19:H($);break;case 10:zl(r.type._context);break;case 22:case 23:ru()}n=n.return}if(ue=e,re=e=Wt(e.current,null),fe=Ne=t,se=0,oi=null,eu=Xo=Cn=0,Le=Vr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}fn=null}return e}function Ah(e,t){do{var n=re;try{if(Bl(),Yi.current=Lo,Po){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(wn=0,le=oe=K=null,Ir=!1,ni=0,Zl.current=null,n===null||n.return===null){se=1,oi=t,re=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Nc(s);if(y!==null){y.flags&=-257,Ic(y,s,a,o,t),y.mode&1&&Rc(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Rc(o,u,t),iu();break e}l=Error(k(426))}}else if(J&&a.mode&1){var w=Nc(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ic(w,s,a,o,t),_l(or(l,a));break e}}o=l=or(l,a),se!==4&&(se=2),Vr===null?Vr=[o]:Vr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=hh(o,l,t);Pc(o,m);break e;case 1:a=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ht===null||!Ht.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=mh(o,a,t);Pc(o,S);break e}}o=o.return}while(o!==null)}Nh(n)}catch(j){t=j,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Dh(){var e=bo.current;return bo.current=Lo,e===null?Lo:e}function iu(){(se===0||se===3||se===2)&&(se=4),ue===null||!(Cn&268435455)&&!(Xo&268435455)||Nt(ue,fe)}function Do(e,t){var n=V;V|=2;var r=Dh();(ue!==e||fe!==t)&&(dt=null,gn(e,t));do try{X1();break}catch(i){Ah(e,i)}while(!0);if(Bl(),V=n,bo.current=r,re!==null)throw Error(k(261));return ue=null,fe=0,se}function X1(){for(;re!==null;)Rh(re)}function Z1(){for(;re!==null&&!kg();)Rh(re)}function Rh(e){var t=Oh(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Nh(e):re=t,Zl.current=null}function Nh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$1(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=W1(n,t,Ne),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function un(e,t,n){var r=_,i=Ge.transition;try{Ge.transition=null,_=1,ey(e,t,n,r)}finally{Ge.transition=i,_=r}return null}function ey(e,t,n,r){do Zn();while(Ot!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ng(e,o),e===ue&&(re=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,Vh(fo,function(){return Zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var s=_;_=1;var a=V;V|=4,Zl.current=null,K1(e,n),Lh(n,e),S1(Ea),mo=!!Ta,Ea=Ta=null,e.current=n,q1(n),Tg(),V=a,_=s,Ge.transition=o}else e.current=n;if(Bi&&(Bi=!1,Ot=e,Ao=i),o=e.pendingLanes,o===0&&(Ht=null),Lg(n.stateNode),De(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,e=$a,$a=null,e;return Ao&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===Ga?_r++:(_r=0,Ga=e):_r=0,Zt(),null}function Zn(){if(Ot!==null){var e=hf(Ao),t=Ge.transition,n=_;try{if(Ge.transition=null,_=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,Ao=0,V&6)throw Error(k(331));var i=V;for(V|=4,b=e.current;b!==null;){var o=b,s=o.child;if(b.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var p=b;switch(p.tag){case 0:case 11:case 15:Or(8,p,o)}var d=p.child;if(d!==null)d.return=p,b=d;else for(;b!==null;){p=b;var f=p.sibling,y=p.return;if(Th(p),p===u){b=null;break}if(f!==null){f.return=y,b=f;break}b=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}b=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,b=s;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Or(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,b=m;break e}b=o.return}}var h=e.current;for(b=h;b!==null;){s=b;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,b=g;else e:for(s=h;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yo(9,a)}}catch(j){Q(a,a.return,j)}if(a===s){b=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,b=S;break e}b=a.return}}if(V=i,Zt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{_=n,Ge.transition=t}}return!1}function Kc(e,t,n){t=or(n,t),t=hh(e,t,1),e=Ut(e,t,1),t=ke(),e!==null&&(hi(e,1,t),De(e,t))}function Q(e,t,n){if(e.tag===3)Kc(e,e,n);else for(;t!==null;){if(t.tag===3){Kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=or(n,e),e=mh(t,e,1),t=Ut(t,e,1),e=ke(),t!==null&&(hi(t,1,e),De(t,e));break}}t=t.return}}function ty(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(se===4||se===3&&(fe&130023424)===fe&&500>te()-tu?gn(e,0):eu|=n),De(e,t)}function Ih(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var n=ke();e=Tt(e,t),e!==null&&(hi(e,t,n),De(e,n))}function ny(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ih(e,n)}function ry(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ih(e,n)}var Oh;Oh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,J1(e,t,n);be=!!(e.flags&131072)}else be=!1,J&&t.flags&1048576&&Bf(t,Co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var i=tr(t,Ce.current);Xn(t,n),i=Kl(null,t,r,e,i,n);var o=ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,So(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hl(t),i.updater=Qo,t.stateNode=i,i._reactInternals=t,Ia(t,r,e,n),t=_a(null,t,r,!0,o,n)):(t.tag=0,J&&o&&Ol(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=oy(r),e=Ye(r,e),i){case 0:t=Va(null,t,r,e,n);break e;case 1:t=_c(null,t,r,e,n);break e;case 11:t=Oc(null,t,r,e,n);break e;case 14:t=Vc(null,t,r,Ye(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),_c(e,t,r,i,n);case 3:e:{if(xh(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$f(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(k(423)),t),t=Fc(e,t,r,n,i);break e}else if(r!==i){i=or(Error(k(424)),t),t=Fc(e,t,r,n,i);break e}else for(Ie=zt(t.stateNode.containerInfo.firstChild),Oe=t,J=!0,et=null,n=Jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Et(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Gf(t),e===null&&Da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Pa(r,i)?s=null:o!==null&&Pa(r,o)&&(t.flags|=32),vh(e,t),je(e,t,s,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Sh(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Oc(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(jo,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Me.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ra(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ra(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=Ke(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Vc(e,t,r,i,n);case 15:return gh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Zi(e,t),t.tag=1,Ae(r)?(e=!0,So(t)):e=!1,Xn(t,n),fh(t,r,i),Ia(t,r,i,n),_a(null,t,r,!0,e,n);case 19:return wh(e,t,n);case 22:return yh(e,t,n)}throw Error(k(156,t.tag))};function Vh(e,t){return cf(e,t)}function iy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new iy(e,t,n,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oy(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kl)return 11;if(e===Tl)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function no(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ou(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case An:return yn(n.children,i,o,t);case jl:s=8,i|=8;break;case oa:return e=$e(12,n,t,i|2),e.elementType=oa,e.lanes=o,e;case sa:return e=$e(13,n,t,i),e.elementType=sa,e.lanes=o,e;case aa:return e=$e(19,n,t,i),e.elementType=aa,e.lanes=o,e;case $p:return Zo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jp:s=10;break e;case Wp:s=9;break e;case kl:s=11;break e;case Tl:s=14;break e;case At:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function yn(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=$p,e.lanes=n,e.stateNode={isHidden:!1},e}function Bs(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function su(e,t,n,r,i,o,s,a,l){return e=new sy(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hl(o),e}function ay(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _h(e){if(!e)return Kt;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ae(n))return _f(e,n,t)}return t}function Fh(e,t,n,r,i,o,s,a,l){return e=su(n,r,!0,e,i,o,s,a,l),e.context=_h(null),n=e.current,r=ke(),i=Jt(n),o=yt(r,i),o.callback=t??null,Ut(n,o,i),e.current.lanes=i,hi(e,i,r),De(e,r),e}function es(e,t,n,r){var i=t.current,o=ke(),s=Jt(i);return n=_h(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,s),e!==null&&(nt(e,i,s,o),Qi(e,i,s)),s}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function au(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}function ly(){return null}var Bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}ts.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));es(e,t,null,null)};ts.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){es(null,e,null,null)}),t[kt]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&xf(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qc(){}function uy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ro(s);o.call(u)}}var s=Fh(t,r,e,0,null,!1,!1,"",Qc);return e._reactRootContainer=s,e[kt]=s.current,Yr(e.nodeType===8?e.parentNode:e),jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ro(l);a.call(u)}}var l=su(e,0,!1,null,null,!1,!1,"",Qc);return e._reactRootContainer=l,e[kt]=l.current,Yr(e.nodeType===8?e.parentNode:e),jn(function(){es(t,l,n,r)}),l}function rs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ro(s);a.call(l)}}es(t,s,e,i)}else s=uy(n,t,e,i,r);return Ro(s)}mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(Ll(t,n|1),De(t,te()),!(V&6)&&(sr=te()+500,Zt()))}break;case 13:jn(function(){var r=Tt(e,1);if(r!==null){var i=ke();nt(r,e,1,i)}}),au(e,1)}};bl=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=ke();nt(t,e,134217728,n)}au(e,134217728)}};gf=function(e){if(e.tag===13){var t=Jt(e),n=Tt(e,t);if(n!==null){var r=ke();nt(n,e,t,r)}au(e,t)}};yf=function(){return _};vf=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};ya=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Go(r);if(!i)throw Error(k(90));Kp(r),ca(r,i)}}}break;case"textarea":Qp(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};rf=nu;of=jn;var cy={usingClientEntryPoint:!1,Events:[gi,In,Go,tf,nf,nu]},wr={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dy={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lf(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{Ho=zi.inject(dy),lt=zi}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(t))throw Error(k(200));return ay(e,t,null,n)};Fe.createRoot=function(e,t){if(!uu(e))throw Error(k(299));var n=!1,r="",i=Bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=su(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,Yr(e.nodeType===8?e.parentNode:e),new lu(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=lf(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return jn(e)};Fe.hydrate=function(e,t,n){if(!ns(t))throw Error(k(200));return rs(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!uu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Bh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fh(t,null,e,1,n??null,i,!1,o,s),e[kt]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ts(t)};Fe.render=function(e,t,n){if(!ns(t))throw Error(k(200));return rs(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!ns(e))throw Error(k(40));return e._reactRootContainer?(jn(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Fe.unstable_batchedUpdates=nu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return rs(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh)}catch(e){console.error(e)}}zh(),Bp.exports=Fe;var py=Bp.exports;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}var Vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vt||(Vt={}));const Yc="popstate";function fy(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=En(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Qa("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:No(o))}function r(i,o){cu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return my(t,n,r,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hy(){return Math.random().toString(36).substr(2,8)}function Xc(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n,r){return n===void 0&&(n=null),si({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?En(t):t,{state:n,key:t&&t.key||r||hy()})}function No(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function En(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function my(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Vt.Pop,l=null,u=p();u==null&&(u=0,s.replaceState(si({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function d(){a=Vt.Pop;let w=p(),m=w==null?null:w-u;u=w,l&&l({action:a,location:x.location,delta:m})}function f(w,m){a=Vt.Push;let h=Qa(x.location,w,m);n&&n(h,w),u=p()+1;let g=Xc(h,u),S=x.createHref(h);try{s.pushState(g,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(S)}o&&l&&l({action:a,location:x.location,delta:1})}function y(w,m){a=Vt.Replace;let h=Qa(x.location,w,m);n&&n(h,w),u=p();let g=Xc(h,u),S=x.createHref(h);s.replaceState(g,"",S),o&&l&&l({action:a,location:x.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:No(w);return h=h.replace(/ $/,"%20"),ie(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return a},get location(){return e(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yc,d),l=w,()=>{i.removeEventListener(Yc,d),l=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:y,go(w){return s.go(w)}};return x}var Zc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zc||(Zc={}));function gy(e,t,n){return n===void 0&&(n="/"),yy(e,t,n,!1)}function yy(e,t,n,r){let i=typeof t=="string"?En(t):t,o=du(i.pathname||"/",n);if(o==null)return null;let s=Uh(e);vy(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=by(o);a=Py(s[l],u,r)}return a}function Uh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=$t([r,l.relativePath]),p=n.concat(l);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Uh(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ty(u,o.index),routesMeta:p})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Hh(o.path))i(o,s,l)}),t}function Hh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Hh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function vy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ey(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xy=/^:[\w-]+$/,Sy=3,wy=2,Cy=1,jy=10,ky=-2,ed=e=>e==="*";function Ty(e,t){let n=e.split("/"),r=n.length;return n.some(ed)&&(r+=ky),t&&(r+=wy),n.filter(i=>!ed(i)).reduce((i,o)=>i+(xy.test(o)?Sy:o===""?Cy:jy),r)}function Ey(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Py(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",d=td({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p),f=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=td({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},p)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:$t([o,d.pathname]),pathnameBase:Ry($t([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=$t([o,d.pathnameBase]))}return s}function td(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ly(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:f,isOptional:y}=p;if(f==="*"){let x=a[d]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return y&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Ly(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function by(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function du(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function My(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?En(e):e;return{pathname:n?n.startsWith("/")?n:Ay(n,t):t,search:Ny(r),hash:Iy(i)}}function Ay(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jh(e,t){let n=Dy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=En(e):(i=si({},e),ie(!i.pathname||!i.pathname.includes("?"),Us("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),Us("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),Us("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=My(i,a),u=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||p)&&(l.pathname+="/"),l}const $t=e=>e.join("/").replace(/\/\/+/g,"/"),Ry=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Iy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Oy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $h=["post","put","patch","delete"];new Set($h);const Vy=["get",...$h];new Set(Vy);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}const pu=C.createContext(null),_y=C.createContext(null),Pn=C.createContext(null),is=C.createContext(null),Ln=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Gh=C.createContext(null);function Fy(e,t){let{relative:n}=t===void 0?{}:t;vi()||ie(!1);let{basename:r,navigator:i}=C.useContext(Pn),{hash:o,pathname:s,search:a}=qh(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:$t([r,s])),i.createHref({pathname:l,search:a,hash:o})}function vi(){return C.useContext(is)!=null}function os(){return vi()||ie(!1),C.useContext(is).location}function Kh(e){C.useContext(Pn).static||C.useLayoutEffect(e)}function By(){let{isDataRoute:e}=C.useContext(Ln);return e?Zy():zy()}function zy(){vi()||ie(!1);let e=C.useContext(pu),{basename:t,future:n,navigator:r}=C.useContext(Pn),{matches:i}=C.useContext(Ln),{pathname:o}=os(),s=JSON.stringify(Jh(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return Kh(()=>{a.current=!0}),C.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Wh(u,JSON.parse(s),o,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:$t([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,s,o,e])}function qh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Pn),{matches:i}=C.useContext(Ln),{pathname:o}=os(),s=JSON.stringify(Jh(i,r.v7_relativeSplatPath));return C.useMemo(()=>Wh(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Uy(e,t){return Hy(e,t)}function Hy(e,t,n,r){vi()||ie(!1);let{navigator:i}=C.useContext(Pn),{matches:o}=C.useContext(Ln),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=os(),p;if(t){var d;let w=typeof t=="string"?En(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||ie(!1),p=w}else p=u;let f=p.pathname||"/",y=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=gy(e,{pathname:y}),x=Ky(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:$t([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:$t([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return t&&x?C.createElement(is.Provider,{value:{location:ai({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Vt.Pop}},x):x}function Jy(){let e=Xy(),t=Oy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const Wy=C.createElement(Jy,null);class $y extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Ln.Provider,{value:this.props.routeContext},C.createElement(Gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gy(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(pu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ln.Provider,{value:t},r)}function Ky(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||ie(!1),s=s.slice(0,Math.min(s.length,p+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let d=s[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:f,errors:y}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,d,f)=>{let y,v=!1,x=null,w=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Wy,l&&(u<0&&f===0?(v=!0,w=null):u===f&&(v=!0,w=d.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,f+1)),h=()=>{let g;return y?g=x:v?g=w:d.route.Component?g=C.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,C.createElement(Gy,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?C.createElement($y,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Qh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qh||{}),Io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Io||{});function qy(e){let t=C.useContext(pu);return t||ie(!1),t}function Qy(e){let t=C.useContext(_y);return t||ie(!1),t}function Yy(e){let t=C.useContext(Ln);return t||ie(!1),t}function Yh(e){let t=Yy(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function Xy(){var e;let t=C.useContext(Gh),n=Qy(Io.UseRouteError),r=Yh(Io.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Zy(){let{router:e}=qy(Qh.UseNavigateStable),t=Yh(Io.UseNavigateStable),n=C.useRef(!1);return Kh(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ai({fromRouteId:t},o)))},[e,t])}function B(e){ie(!1)}function e2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vt.Pop,navigator:o,static:s=!1,future:a}=e;vi()&&ie(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:s,future:ai({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=En(r));let{pathname:p="/",search:d="",hash:f="",state:y=null,key:v="default"}=r,x=C.useMemo(()=>{let w=du(p,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:y,key:v},navigationType:i}},[l,p,d,f,y,v,i]);return x==null?null:C.createElement(Pn.Provider,{value:u},C.createElement(is.Provider,{children:n,value:x}))}function t2(e){let{children:t,location:n}=e;return Uy(Ya(t),n)}new Promise(()=>{});function Ya(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Ya(r.props.children,o));return}r.type!==B&&ie(!1),!r.props.index||!r.props.children||ie(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ya(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}function n2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function r2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i2(e,t){return e.button===0&&(!t||t==="_self")&&!r2(e)}const o2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],s2="6";try{window.__reactRouterVersion=s2}catch{}const a2="startTransition",nd=H0[a2];function l2(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=fy({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},p=C.useCallback(d=>{u&&nd?nd(()=>l(d)):l(d)},[l,u]);return C.useLayoutEffect(()=>s.listen(p),[s,p]),C.createElement(e2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const u2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",c2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:p,unstable_viewTransition:d}=t,f=n2(t,o2),{basename:y}=C.useContext(Pn),v,x=!1;if(typeof u=="string"&&c2.test(u)&&(v=u,u2))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),j=du(S.pathname,y);S.origin===g.origin&&j!=null?u=j+S.search+S.hash:x=!0}catch{}let w=Fy(u,{relative:i}),m=d2(u,{replace:s,state:a,target:l,preventScrollReset:p,relative:i,unstable_viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||m(g)}return C.createElement("a",Xa({},f,{href:v||w,onClick:x||o?r:h,ref:n,target:l}))});var rd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rd||(rd={}));var id;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(id||(id={}));function d2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=By(),u=os(),p=qh(e,{relative:s});return C.useCallback(d=>{if(i2(d,n)){d.preventDefault();let f=r!==void 0?r:No(u)===No(p);l(e,{replace:f,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,p,r,i,n,e,o,s,a])}function p2(e){return Ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"},child:[]}]})(e)}const f2=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-section",children:[c.jsx("img",{src:xl,alt:"",className:"logo",width:180}),c.jsx("h1",{children:"LearnJava"})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Quick Links"}),c.jsxs("ul",{children:[c.jsx(N,{to:"/",onClick:e,children:c.jsx("li",{children:"Home"})}),c.jsx(N,{to:"/Java/",onClick:e,children:c.jsx("li",{children:"Course"})}),c.jsx(N,{to:"/practise/",onClick:e,children:c.jsx("li",{children:"Practise"})}),c.jsx(N,{to:"/learning/",onClick:e,children:c.jsx("li",{children:"My Learning"})}),c.jsx(N,{to:"/join/",onClick:e,children:c.jsx("li",{children:"Join Us"})})]})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Contact Us"}),c.jsx("a",{href:"mailto:dominik.andorka@gmail.com",children:"Gmail"}),c.jsx("br",{}),c.jsx("a",{href:"https://github.com/AndorkaDominik",children:"Github"})]}),c.jsxs("div",{className:"footer-section social-media",children:[c.jsx("h3",{children:"Follow Us"}),c.jsx("a",{href:"https://github.com/AndorkaDominik",target:"_blank",rel:"noopener noreferrer",children:c.jsx(p2,{})}),c.jsx("a",{href:"https://discord.com",target:"_blank",rel:"noopener noreferrer",children:c.jsx(rg,{})})]})]}),c.jsx("div",{className:"footer-bottom",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," LearnLab. All rights reserved."]})})]})},h2=()=>{const e=C.useRef(),[t,n]=C.useState(!1),r=()=>{n(!t)},i=()=>{n(!1)};function o(){window.scrollTo({top:0,behavior:"smooth"})}function s(){o(),i()}return c.jsxs("div",{className:"navbar",children:[c.jsx(N,{to:"/",className:"logo-container",onClick:o,children:c.jsx("img",{src:xl,alt:"",className:"logo"})}),!t&&c.jsx(ig,{className:"menu-btn",onClick:r}),t&&c.jsx(sg,{className:"menu-btn",onClick:r}),c.jsxs("ul",{className:t?"show":"",ref:e,children:[c.jsx(N,{to:"/",onClick:s,children:c.jsx("li",{children:"Home"})}),c.jsx(N,{to:"/Java/",onClick:s,children:c.jsx("li",{children:"Course"})}),c.jsx(N,{to:"/practise/",onClick:s,children:c.jsx("li",{children:"Practise"})}),c.jsx(N,{to:"/learning/",onClick:s,children:c.jsx("li",{children:"My Learning"})}),c.jsx(N,{to:"/join/",onClick:s,children:c.jsx("li",{children:"Join Us"})}),c.jsx("div",{className:"under768px",children:c.jsx(N,{to:"/Java/",className:"cta",onClick:s,children:"Get Started"})})]}),c.jsx("div",{className:"nav-right over768px",children:c.jsx(N,{to:"/Java/",className:"cta",onClick:s,children:"Get Started"})})]})};function m2(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}const Xh=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ss=C.createContext({}),fu=C.createContext(null),hu=typeof window<"u",g2=hu?C.useLayoutEffect:C.useEffect,Zh=C.createContext({strict:!1}),as=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),y2="framerAppearId",em="data-"+as(y2),v2={skipAnimations:!1,useManualTiming:!1};function x2(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,p=!1,d=!1)=>{const y=d&&r?t:n;return p&&o.add(u),y.has(u)||y.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(a),r=!1,i&&(i=!1,l.process(u))}};return l}const Ui=["read","resolveKeyframes","update","preRender","render","postRender"],S2=40;function tm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ui.reduce((m,h)=>(m[h]=x2(o),m),{}),{read:a,resolveKeyframes:l,update:u,preRender:p,render:d,postRender:f}=s,y=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,S2),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),p.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},v=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ui.reduce((m,h)=>{const g=s[h];return m[h]=(S,j=!1,E=!1)=>(n||v(),g.schedule(S,j,E)),m},{}),cancel:m=>{for(let h=0;h<Ui.length;h++)s[Ui[h]].cancel(m)},state:i,steps:s}}const{schedule:mu,cancel:nw}=tm(queueMicrotask,!1);function Un(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const nm=C.createContext({});let od=!1;function w2(e,t,n,r,i){var o;const{visualElement:s}=C.useContext(ss),a=C.useContext(Zh),l=C.useContext(fu),u=C.useContext(Xh).reducedMotion,p=C.useRef();r=r||a.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const d=p.current,f=C.useContext(nm);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&j2(p.current,n,i,f),C.useInsertionEffect(()=>{d&&d.update(n,l)});const y=n[em],v=C.useRef(!!y&&!window.MotionHandoffIsComplete&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return g2(()=>{d&&(d.updateFeatures(),mu.render(d.render),v.current&&d.animationState&&d.animationState.animateChanges())}),C.useEffect(()=>{d&&(!v.current&&d.animationState&&d.animationState.animateChanges(),v.current=!1,od||(od=!0,queueMicrotask(C2)))}),d}function C2(){window.MotionHandoffIsComplete=!0}function j2(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:rm(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Un(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function rm(e){if(e)return e.options.allowProjection!==!1?e.projection:rm(e.parent)}function k2(e,t,n){return C.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Un(n)&&(n.current=r))},[t])}function li(e){return typeof e=="string"||Array.isArray(e)}function ui(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const gu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yu=["initial",...gu];function ls(e){return ui(e.animate)||yu.some(t=>li(e[t]))}function im(e){return!!(ls(e)||e.variants)}function T2(e,t){if(ls(e)){const{initial:n,animate:r}=e;return{initial:n===!1||li(n)?n:void 0,animate:li(r)?r:void 0}}return e.inherit!==!1?t:{}}function E2(e){const{initial:t,animate:n}=T2(e,C.useContext(ss));return C.useMemo(()=>({initial:t,animate:n}),[sd(t),sd(n)])}function sd(e){return Array.isArray(e)?e.join(" "):e}const ad={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ar={};for(const e in ad)ar[e]={isEnabled:t=>ad[e].some(n=>!!t[n])};function P2(e){for(const t in e)ar[t]={...ar[t],...e[t]}}const om=C.createContext({}),L2=Symbol.for("motionComponentSymbol"),we=e=>e;let Za=we;function b2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&P2(e);function o(a,l){let u;const p={...C.useContext(Xh),...a,layoutId:M2(a)},{isStatic:d}=p,f=E2(a),y=r(a,d);if(!d&&hu){A2();const v=D2(p);u=v.MeasureLayout,f.visualElement=w2(i,y,p,t,v.ProjectionNode)}return c.jsxs(ss.Provider,{value:f,children:[u&&f.visualElement?c.jsx(u,{visualElement:f.visualElement,...p}):null,n(i,a,k2(y,f.visualElement,l),y,d,f.visualElement)]})}const s=C.forwardRef(o);return s[L2]=i,s}function M2({layoutId:e}){const t=C.useContext(om).id;return t&&e!==void 0?t+"-"+e:e}function A2(e,t){C.useContext(Zh).strict}function D2(e){const{drag:t,layout:n}=ar;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function R2(e){function t(r,i={}){return b2(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const N2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vu(e){return typeof e!="string"||e.includes("-")?!1:!!(N2.indexOf(e)>-1||/[A-Z]/u.test(e))}const Oo={};function I2(e){Object.assign(Oo,e)}const xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],en=new Set(xi);function sm(e,{layout:t,layoutId:n}){return en.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Oo[e]||e==="opacity")}const Se=e=>!!(e&&e.getVelocity),am=(e,t)=>t&&typeof e=="number"?t.transform(e):e,qt=(e,t,n)=>n>t?t:n<e?e:n,pr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fr={...pr,transform:e=>qt(0,1,e)},Hi={...pr,default:1},Br=e=>Math.round(e*1e5)/1e5,xu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,O2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,V2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Si(e){return typeof e=="string"}function _2(e){return e==null}const wi=e=>({test:t=>Si(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Mt=wi("deg"),ct=wi("%"),A=wi("px"),F2=wi("vh"),B2=wi("vw"),ld={...ct,parse:e=>ct.parse(e)/100,transform:e=>ct.transform(e*100)},ud={...pr,transform:Math.round},Su={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,radius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,size:A,top:A,right:A,bottom:A,left:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,rotate:Mt,rotateX:Mt,rotateY:Mt,rotateZ:Mt,scale:Hi,scaleX:Hi,scaleY:Hi,scaleZ:Hi,skew:Mt,skewX:Mt,skewY:Mt,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:Fr,originX:ld,originY:ld,originZ:A,zIndex:ud,backgroundPositionX:A,backgroundPositionY:A,fillOpacity:Fr,strokeOpacity:Fr,numOctaves:ud},z2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},U2=xi.length;function H2(e,t,n){let r="",i=!0;for(let o=0;o<U2;o++){const s=xi[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=am(a,Su[s]);if(!l){i=!1;const p=z2[s]||s;r+=`${p}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}const lm=e=>t=>typeof t=="string"&&t.startsWith(e),um=lm("--"),J2=lm("var(--"),wu=e=>J2(e)?W2.test(e.split("/*")[0].trim()):!1,W2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Cu(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(en.has(l)){s=!0;continue}else if(um(l)){i[l]=u;continue}else{const p=am(u,Su[l]);l.startsWith("origin")?(a=!0,o[l]=p):r[l]=p}}if(t.transform||(s||n?r.transform=H2(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:p=0}=o;r.transformOrigin=`${l} ${u} ${p}`}}const ju=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cm(e,t,n){for(const r in t)!Se(t[r])&&!sm(r,n)&&(e[r]=t[r])}function $2({transformTemplate:e},t){return C.useMemo(()=>{const n=ju();return Cu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function G2(e,t){const n=e.style||{},r={};return cm(r,n,e),Object.assign(r,$2(e,t)),r}function K2(e,t){const n={},r=G2(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const q2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||q2.has(e)}let dm=e=>!Vo(e);function Q2(e){e&&(dm=t=>t.startsWith("on")?!Vo(t):e(t))}try{Q2(require("@emotion/is-prop-valid").default)}catch{}function Y2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(dm(i)||n===!0&&Vo(i)||!t&&!Vo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function cd(e,t,n){return typeof e=="string"?e:A.transform(t+n*e)}function X2(e,t,n){const r=cd(t,e.x,e.width),i=cd(n,e.y,e.height);return`${r} ${i}`}const Z2={offset:"stroke-dashoffset",array:"stroke-dasharray"},ev={offset:"strokeDashoffset",array:"strokeDasharray"};function tv(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Z2:ev;e[o.offset]=A.transform(-r);const s=A.transform(t),a=A.transform(n);e[o.array]=`${s} ${a}`}function ku(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},p,d){if(Cu(e,u,d),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:y,dimensions:v}=e;f.transform&&(v&&(y.transform=f.transform),delete f.transform),v&&(i!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=X2(v,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),s!==void 0&&tv(f,s,a,l,!1)}const pm=()=>({...ju(),attrs:{}}),Tu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function nv(e,t,n,r){const i=C.useMemo(()=>{const o=pm();return ku(o,t,Tu(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};cm(o,e.style,e),i.style={...o,...i.style}}return i}function rv(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(vu(n)?nv:K2)(r,o,s,n),u=Y2(r,typeof n=="string",e),p=n!==C.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=C.useMemo(()=>Se(d)?d.get():d,[d]);return C.createElement(n,{...p,children:f})}}function fm(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const hm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function mm(e,t,n,r){fm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(hm.has(i)?i:as(i),t.attrs[i])}function Eu(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Se(i[s])||t.style&&Se(t.style[s])||sm(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),o}function gm(e,t,n){const r=Eu(e,t,n);for(const i in e)if(Se(e[i])||Se(t[i])){const o=xi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function dd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Pu(e,t,n,r){if(typeof t=="function"){const[i,o]=dd(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=dd(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function iv(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const el=e=>Array.isArray(e),ov=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),sv=e=>el(e)?e[e.length-1]||0:e;function ro(e){const t=Se(e)?e.get():e;return ov(t)?t.toValue():t}const ym=new Set(["opacity","clipPath","filter","transform"]);function vm(e){if(en.has(e))return"transform";if(ym.has(e))return as(e)}function us(e,t){e.indexOf(t)===-1&&e.push(t)}function cs(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function av({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,o,s,a){const l={latestValues:uv(i,o,s,a?!1:e,t),renderState:n()};return r&&(l.mount=u=>r(i,u,l)),l}const xm=e=>(t,n)=>{const r=C.useContext(ss),i=C.useContext(fu),o=()=>av(e,t,r,i,n);return n?o():iv(o)};function lv(e,t){const n=vm(t);n&&us(e,n)}function pd(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const o=Pu(e,r[i]);if(o){const{transitionEnd:s,transition:a,...l}=o;n(l,s)}}}function uv(e,t,n,r,i){var o;const s={},a=[],l=r&&((o=e.style)===null||o===void 0?void 0:o.willChange)===void 0,u=i(e,{});for(const w in u)s[w]=ro(u[w]);let{initial:p,animate:d}=e;const f=ls(e),y=im(e);t&&y&&!f&&e.inherit!==!1&&(p===void 0&&(p=t.initial),d===void 0&&(d=t.animate));let v=n?n.initial===!1:!1;v=v||p===!1;const x=v?d:p;return x&&typeof x!="boolean"&&!ui(x)&&pd(e,x,(w,m)=>{for(const h in w){let g=w[h];if(Array.isArray(g)){const S=v?g.length-1:0;g=g[S]}g!==null&&(s[h]=g)}for(const h in m)s[h]=m[h]}),l&&(d&&p!==!1&&!ui(d)&&pd(e,d,w=>{for(const m in w)lv(a,m)}),a.length&&(s.willChange=a.join(","))),s}const{schedule:F,cancel:Pt,state:pe,steps:Hs}=tm(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),cv={useVisualState:xm({scrapeMotionValuesFromProps:gm,createRenderState:pm,onMount:(e,t,{renderState:n,latestValues:r})=>{F.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),F.render(()=>{ku(n,r,Tu(t.tagName),e.transformTemplate),mm(t,n)})}})},dv={useVisualState:xm({applyWillChange:!0,scrapeMotionValuesFromProps:Eu,createRenderState:ju})};function pv(e,{forwardMotionProps:t=!1},n,r){return{...vu(e)?cv:dv,preloadedFeatures:n,useRender:rv(t),createVisualElement:r,Component:e}}function mt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Sm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ds(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const fv=e=>t=>Sm(t)&&e(t,ds(t));function vt(e,t,n,r){return mt(e,t,fv(n),r)}const hv=(e,t)=>n=>t(e(n)),xt=(...e)=>e.reduce(hv);function wm(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const fd=wm("dragHorizontal"),hd=wm("dragVertical");function Cm(e){let t=!1;if(e==="y")t=hd();else if(e==="x")t=fd();else{const n=fd(),r=hd();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function jm(){const e=Cm(!0);return e?(e(),!1):!0}class tn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function md(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||jm())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&F.postRender(()=>l(o,s))};return vt(e.current,n,i,{passive:!e.getProps()[r]})}class mv extends tn{mount(){this.unmount=xt(md(this.node,!0),md(this.node,!1))}unmount(){}}class gv extends tn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xt(mt(this.node.current,"focus",()=>this.onFocus()),mt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const km=(e,t)=>t?e===t?!0:km(e,t.parentElement):!1;function Js(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ds(n))}class yv extends tn{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=vt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:p,globalTapTarget:d}=this.node.getProps(),f=!d&&!km(this.node.current,a.target)?p:u;f&&F.update(()=>f(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=vt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=xt(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Js("up",(l,u)=>{const{onTap:p}=this.node.getProps();p&&F.postRender(()=>p(l,u))})};this.removeEndListeners(),this.removeEndListeners=mt(this.node.current,"keyup",s),Js("down",(a,l)=>{this.startPress(a,l)})},n=mt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Js("cancel",(o,s)=>this.cancelPress(o,s))},i=mt(this.node.current,"blur",r);this.removeAccessibleListeners=xt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&F.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!jm()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&F.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=vt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=mt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=xt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const tl=new WeakMap,Ws=new WeakMap,vv=e=>{const t=tl.get(e.target);t&&t(e)},xv=e=>{e.forEach(vv)};function Sv({root:e,...t}){const n=e||document;Ws.has(n)||Ws.set(n,{});const r=Ws.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(xv,{root:e,...t})),r[i]}function wv(e,t,n){const r=Sv(t);return tl.set(e,n),r.observe(e),()=>{tl.delete(e),r.unobserve(e)}}const Cv={some:0,all:1};class jv extends tn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Cv[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:p,onViewportLeave:d}=this.node.getProps(),f=u?p:d;f&&f(l)};return wv(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(kv(t,n))&&this.startObserver()}unmount(){}}function kv({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Tv={inView:{Feature:jv},tap:{Feature:yv},focus:{Feature:gv},hover:{Feature:mv}};function Tm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ps(e,t,n){const r=e.getProps();return Pu(r,t,n!==void 0?n:r.custom,e)}const St=e=>e*1e3,wt=e=>e/1e3,Ev={type:"spring",stiffness:500,damping:25,restSpeed:10},Pv=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Lv={type:"keyframes",duration:.8},bv={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Mv=(e,{keyframes:t})=>t.length>2?Lv:en.has(e)?e.startsWith("scale")?Pv(t[1]):Ev:bv;function Av({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...p}){return!!Object.keys(p).length}function Lu(e,t){return e[t]||e.default||e}const Dv=e=>e!==null;function fs(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Dv),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Em=e=>/^0[^.\s]+$/u.test(e);function Rv(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Em(e):!0}const Pm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Nv=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Iv(e){const t=Nv.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Lm(e,t,n=1){const[r,i]=Iv(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Pm(s)?parseFloat(s):s}return wu(i)?Lm(i,t,n+1):i}const Ov=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),gd=e=>e===pr||e===A,yd=(e,t)=>parseFloat(e.split(", ")[t]),vd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return yd(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?yd(o[1],e):0}},Vv=new Set(["x","y","z"]),_v=xi.filter(e=>!Vv.has(e));function Fv(e){const t=[];return _v.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const lr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:vd(4,13),y:vd(5,14)};lr.translateX=lr.x;lr.translateY=lr.y;const bm=e=>t=>t.test(e),Bv={test:e=>e==="auto",parse:e=>e},Mm=[pr,A,ct,Mt,B2,F2,Bv],xd=e=>Mm.find(bm(e)),vn=new Set;let nl=!1,rl=!1;function Am(){if(rl){const e=Array.from(vn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Fv(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}rl=!1,nl=!1,vn.forEach(e=>e.complete()),vn.clear()}function Dm(){vn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(rl=!0)})}function zv(){Dm(),Am()}class bu{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(vn.add(this),nl||(nl=!0,F.read(Dm),F.resolveKeyframes(Am))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),vn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,vn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Mu=(e,t)=>n=>!!(Si(n)&&V2.test(n)&&n.startsWith(e)||t&&!_2(n)&&Object.prototype.hasOwnProperty.call(n,t)),Rm=(e,t,n)=>r=>{if(!Si(r))return r;const[i,o,s,a]=r.match(xu);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Uv=e=>qt(0,255,e),$s={...pr,transform:e=>Math.round(Uv(e))},mn={test:Mu("rgb","red"),parse:Rm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+$s.transform(e)+", "+$s.transform(t)+", "+$s.transform(n)+", "+Br(Fr.transform(r))+")"};function Hv(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const il={test:Mu("#"),parse:Hv,transform:mn.transform},Hn={test:Mu("hsl","hue"),parse:Rm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ct.transform(Br(t))+", "+ct.transform(Br(n))+", "+Br(Fr.transform(r))+")"},ye={test:e=>mn.test(e)||il.test(e)||Hn.test(e),parse:e=>mn.test(e)?mn.parse(e):Hn.test(e)?Hn.parse(e):il.parse(e),transform:e=>Si(e)?e:e.hasOwnProperty("red")?mn.transform(e):Hn.transform(e)};function Jv(e){var t,n;return isNaN(e)&&Si(e)&&(((t=e.match(xu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(O2))===null||n===void 0?void 0:n.length)||0)>0}const Nm="number",Im="color",Wv="var",$v="var(",Sd="${}",Gv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ci(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(Gv,l=>(ye.test(l)?(r.color.push(o),i.push(Im),n.push(ye.parse(l))):l.startsWith($v)?(r.var.push(o),i.push(Wv),n.push(l)):(r.number.push(o),i.push(Nm),n.push(parseFloat(l))),++o,Sd)).split(Sd);return{values:n,split:a,indexes:r,types:i}}function Om(e){return ci(e).values}function Vm(e){const{split:t,types:n}=ci(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Nm?o+=Br(i[s]):a===Im?o+=ye.transform(i[s]):o+=i[s]}return o}}const Kv=e=>typeof e=="number"?0:e;function qv(e){const t=Om(e);return Vm(e)(t.map(Kv))}const Qt={test:Jv,parse:Om,createTransformer:Vm,getAnimatableNone:qv},Qv=new Set(["brightness","contrast","saturate","opacity"]);function Yv(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(xu)||[];if(!r)return e;const i=n.replace(r,"");let o=Qv.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Xv=/\b([a-z-]*)\(.*?\)/gu,ol={...Qt,getAnimatableNone:e=>{const t=e.match(Xv);return t?t.map(Yv).join(" "):e}},Zv={...Su,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:ol,WebkitFilter:ol},Au=e=>Zv[e];function _m(e,t){let n=Au(e);return n!==ol&&(n=Qt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ex=new Set(["auto","none","0"]);function tx(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!ex.has(o)&&ci(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=_m(n,i)}class Fm extends bu{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),wu(u))){const p=Lm(u,n.current);p!==void 0&&(t[l]=p),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Ov.has(r)||t.length!==2)return;const[i,o]=t,s=xd(i),a=xd(o);if(s!==a)if(gd(s)&&gd(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Rv(t[i])&&r.push(i);r.length&&tx(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=lr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=lr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function Bm(e){let t;return()=>(t===void 0&&(t=e()),t)}let io;function nx(){io=void 0}const Ct={now:()=>(io===void 0&&Ct.set(pe.isProcessing||v2.useManualTiming?pe.timestamp:performance.now()),io),set:e=>{io=e,queueMicrotask(nx)}},wd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Qt.test(e)||e==="0")&&!e.startsWith("url("));function rx(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ix(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=wd(i,t),a=wd(o,t);return!s||!a?!1:rx(e)||n==="spring"&&r}const ox=40;class zm{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ct.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ox?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&zv(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Ct.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!ix(t,r,i,o))if(s)this.options.duration=0;else{l==null||l(fs(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const p=this.initPlayback(t,n);p!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...p},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Um(e,t){return t?e*(1e3/t):0}const sx=5;function Hm(e,t,n){const r=Math.max(t-sx,0);return Um(n-e(r),t-r)}const Gs=.001,ax=.01,lx=10,ux=.05,cx=1;function dx({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=qt(ux,cx,s),e=qt(ax,lx,wt(e)),s<1?(i=u=>{const p=u*s,d=p*e,f=p-n,y=sl(u,s),v=Math.exp(-d);return Gs-f/y*v},o=u=>{const d=u*s*e,f=d*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-d),x=sl(Math.pow(u,2),s);return(-i(u)+Gs>0?-1:1)*((f-y)*v)/x}):(i=u=>{const p=Math.exp(-u*e),d=(u-n)*e+1;return-Gs+p*d},o=u=>{const p=Math.exp(-u*e),d=(n-u)*(e*e);return p*d});const a=5/e,l=fx(i,o,a);if(e=St(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const px=12;function fx(e,t,n){let r=n;for(let i=1;i<px;i++)r=r-e(r)/t(r);return r}function sl(e,t){return e*Math.sqrt(1-t*t)}const hx=["duration","bounce"],mx=["stiffness","damping","mass"];function Cd(e,t){return t.some(n=>e[n]!==void 0)}function gx(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Cd(e,mx)&&Cd(e,hx)){const n=dx(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Jm({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:p,velocity:d,isResolvedFromDuration:f}=gx({...r,velocity:-wt(r.velocity||0)}),y=d||0,v=l/(2*Math.sqrt(a*u)),x=o-i,w=wt(Math.sqrt(a/u)),m=Math.abs(x)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let h;if(v<1){const g=sl(w,v);h=S=>{const j=Math.exp(-v*w*S);return o-j*((y+v*w*x)/g*Math.sin(g*S)+x*Math.cos(g*S))}}else if(v===1)h=g=>o-Math.exp(-w*g)*(x+(y+w*x)*g);else{const g=w*Math.sqrt(v*v-1);h=S=>{const j=Math.exp(-v*w*S),E=Math.min(g*S,300);return o-j*((y+v*w*x)*Math.sinh(E)+g*x*Math.cosh(E))/g}}return{calculatedDuration:f&&p||null,next:g=>{const S=h(g);if(f)s.done=g>=p;else{let j=0;v<1&&(j=g===0?St(y):Hm(h,g,S));const E=Math.abs(j)<=n,P=Math.abs(o-S)<=t;s.done=E&&P}return s.value=s.done?o:S,s}}}function jd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:p}){const d=e[0],f={done:!1,value:d},y=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const w=d+x,m=s===void 0?w:s(w);m!==w&&(x=m-d);const h=T=>-x*Math.exp(-T/r),g=T=>m+h(T),S=T=>{const R=h(T),M=g(T);f.done=Math.abs(R)<=u,f.value=f.done?m:M};let j,E;const P=T=>{y(f.value)&&(j=T,E=Jm({keyframes:[f.value,v(f.value)],velocity:Hm(g,T,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:p}))};return P(0),{calculatedDuration:null,next:T=>{let R=!1;return!E&&j===void 0&&(R=!0,S(T),P(T)),j!==void 0&&T>=j?E.next(T-j):(!R&&S(T),f)}}}const Wm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,yx=1e-7,vx=12;function xx(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Wm(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>yx&&++a<vx);return s}function Ci(e,t,n,r){if(e===t&&n===r)return we;const i=o=>xx(o,0,1,e,n);return o=>o===0||o===1?o:Wm(i(o),t,r)}const Sx=Ci(.42,0,1,1),wx=Ci(0,0,.58,1),$m=Ci(.42,0,.58,1),Cx=e=>Array.isArray(e)&&typeof e[0]!="number",Gm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Km=e=>t=>1-e(1-t),Du=e=>1-Math.sin(Math.acos(e)),qm=Km(Du),jx=Gm(Du),Qm=Ci(.33,1.53,.69,.99),Ru=Km(Qm),kx=Gm(Ru),Tx=e=>(e*=2)<1?.5*Ru(e):.5*(2-Math.pow(2,-10*(e-1))),kd={linear:we,easeIn:Sx,easeInOut:$m,easeOut:wx,circIn:Du,circInOut:jx,circOut:qm,backIn:Ru,backInOut:kx,backOut:Qm,anticipate:Tx},Td=e=>{if(Array.isArray(e)){Za(e.length===4);const[t,n,r,i]=e;return Ci(t,n,r,i)}else if(typeof e=="string")return Za(kd[e]!==void 0),kd[e];return e},di=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},G=(e,t,n)=>e+(t-e)*n;function Ks(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ex({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Ks(l,a,e+1/3),o=Ks(l,a,e),s=Ks(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function _o(e,t){return n=>n>0?t:e}const qs=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Px=[il,mn,Hn],Lx=e=>Px.find(t=>t.test(e));function Ed(e){const t=Lx(e);if(!t)return!1;let n=t.parse(e);return t===Hn&&(n=Ex(n)),n}const Pd=(e,t)=>{const n=Ed(e),r=Ed(t);if(!n||!r)return _o(e,t);const i={...n};return o=>(i.red=qs(n.red,r.red,o),i.green=qs(n.green,r.green,o),i.blue=qs(n.blue,r.blue,o),i.alpha=G(n.alpha,r.alpha,o),mn.transform(i))},al=new Set(["none","hidden"]);function bx(e,t){return al.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Mx(e,t){return n=>G(e,t,n)}function Nu(e){return typeof e=="number"?Mx:typeof e=="string"?wu(e)?_o:ye.test(e)?Pd:Rx:Array.isArray(e)?Ym:typeof e=="object"?ye.test(e)?Pd:Ax:_o}function Ym(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Nu(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function Ax(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Nu(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Dx(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const Rx=(e,t)=>{const n=Qt.createTransformer(t),r=ci(e),i=ci(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?al.has(e)&&!i.values.length||al.has(t)&&!r.values.length?bx(e,t):xt(Ym(Dx(r,i),i.values),n):_o(e,t)};function Xm(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?G(e,t,n):Nu(e)(e,t)}function Nx(e,t,n){const r=[],i=n||Xm,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||we:t;a=xt(l,a)}r.push(a)}return r}function Ix(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Za(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=Nx(t,r,i),a=s.length,l=u=>{let p=0;if(a>1)for(;p<e.length-2&&!(u<e[p+1]);p++);const d=di(e[p],e[p+1],u);return s[p](d)};return n?u=>l(qt(e[0],e[o-1],u)):l}function Ox(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=di(0,t,r);e.push(G(n,1,i))}}function Vx(e){const t=[0];return Ox(t,e.length-1),t}function _x(e,t){return e.map(n=>n*t)}function Fx(e,t){return e.map(()=>t||$m).splice(0,e.length-1)}function Fo({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Cx(r)?r.map(Td):Td(r),o={done:!1,value:t[0]},s=_x(n&&n.length===t.length?n:Vx(t),e),a=Ix(s,t,{ease:Array.isArray(i)?i:Fx(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const Ld=2e4;function Bx(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ld;)t+=n,r=e.next(t);return t>=Ld?1/0:t}const zx=e=>{const t=({timestamp:n})=>e(n);return{start:()=>F.update(t,!0),stop:()=>Pt(t),now:()=>pe.isProcessing?pe.timestamp:Ct.now()}},Ux={decay:jd,inertia:jd,tween:Fo,keyframes:Fo,spring:Jm},Hx=e=>e/100;class Iu extends zm{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||bu,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Ux[n]||Fo;let l,u;a!==Fo&&typeof t[0]!="number"&&(l=xt(Hx,Xm(t[0],t[1])),t=[0,100]);const p=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),p.calculatedDuration===null&&(p.calculatedDuration=Bx(p));const{calculatedDuration:d}=p,f=d+i,y=f*(r+1)-i;return{generator:p,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:p,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:y,repeatType:v,repeatDelay:x,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-p/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>p;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let g=this.currentTime,S=o;if(y){const T=Math.min(this.currentTime,p)/d;let R=Math.floor(T),M=T%1;!M&&T>=1&&(M=1),M===1&&R--,R=Math.min(R,y+1),!!(R%2)&&(v==="reverse"?(M=1-M,x&&(M-=x/d)):v==="mirror"&&(S=s)),g=qt(0,1,M)*d}const j=h?{done:!1,value:l[0]}:S.next(g);a&&(j.value=a(j.value));let{done:E}=j;!h&&u!==null&&(E=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return P&&i!==void 0&&(j.value=fs(l,this.options,i)),w&&w(j.value),P&&this.finish(),j}get duration(){const{resolved:t}=this;return t?wt(t.calculatedDuration):0}get time(){return wt(this.currentTime)}set time(t){t=St(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=wt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=zx,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Zm=e=>Array.isArray(e)&&typeof e[0]=="number";function e0(e){return!!(!e||typeof e=="string"&&e in Ou||Zm(e)||Array.isArray(e)&&e.every(e0))}const Pr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ou={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pr([0,.65,.55,1]),circOut:Pr([.55,0,1,.45]),backIn:Pr([.31,.01,.66,-.59]),backOut:Pr([.33,1.53,.69,.99])};function Jx(e){return t0(e)||Ou.easeOut}function t0(e){if(e)return Zm(e)?Pr(e):Array.isArray(e)?e.map(Jx):Ou[e]}function Wx(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const p=t0(a);return Array.isArray(p)&&(u.easing=p),e.animate(u,{delay:r,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const $x=Bm(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Bo=10,Gx=2e4;function Kx(e){return e.type==="spring"||!e0(e.ease)}function qx(e,t){const n=new Iu({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<Gx;)r=n.sample(o),i.push(r.value),o+=Bo;return{times:void 0,keyframes:i,duration:o-Bo,ease:"linear"}}class bd extends zm{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Fm(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:u,startTime:p}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(Kx(this.options)){const{onComplete:f,onUpdate:y,motionValue:v,element:x,...w}=this.options,m=qx(t,w);t=m.keyframes,t.length===1&&(t[1]=t[0]),i=m.duration,o=m.times,s=m.ease,a="keyframes"}const d=Wx(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:s});return d.startTime=p??this.calcStartTime(),this.pendingTimeline?(d.timeline=this.pendingTimeline,this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set(fs(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:o,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return wt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return wt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=St(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return we;const{animation:r}=n;r.timeline=t,r.onfinish=null}return we}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:p,onComplete:d,element:f,...y}=this.options,v=new Iu({...y,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),x=St(this.time);u.setWithVelocity(v.sample(x-Bo).value,v.sample(x).value,Bo)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;return $x()&&r&&ym.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}function Qx(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return F.update(r,!0),()=>Pt(r)}const Yx=Bm(()=>window.ScrollTimeline!==void 0);class Xx{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t){const n=this.animations.map(r=>{if(Yx()&&r.attachTimeline)r.attachTimeline(t);else return r.pause(),Qx(i=>{r.time=r.duration*i},t)});return()=>{n.forEach((r,i)=>{r&&r(),this.animations[i].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const Vu=(e,t,n,r={},i,o,s)=>a=>{const l=Lu(r,e)||{},u=l.delay||r.delay||0;let{elapsed:p=0}=r;p=p-St(u);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-p,onUpdate:y=>{t.set(y),l.onUpdate&&l.onUpdate(y)},onComplete:()=>{a(),l.onComplete&&l.onComplete(),s&&s()},onStop:s,name:e,motionValue:t,element:o?void 0:i};Av(l)||(d={...d,...Mv(e,d)}),d.duration&&(d.duration=St(d.duration)),d.repeatDelay&&(d.repeatDelay=St(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const y=fs(d.keyframes,l);if(y!==void 0)return F.update(()=>{d.onUpdate(y),d.onComplete()}),new Xx([])}return!o&&bd.supports(d)?new bd(d):new Iu(d)};class _u{constructor(){this.subscriptions=[]}add(t){return us(this.subscriptions,t),()=>cs(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Md=30,Zx=e=>!isNaN(parseFloat(e));class n0{constructor(t,n={}){this.version="11.3.28",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Ct.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ct.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Zx(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new _u);const r=this.events[t].add(n);return t==="change"?()=>{r(),F.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Md)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Md);return Um(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pi(e,t){return new n0(e,t)}function e3(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,pi(n))}function t3(e,t){const n=ps(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=sv(o[s]);e3(e,s,a)}}function r0(e){return e.getProps()[em]}class n3 extends n0{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(t){const n=vm(t);if(!n)return;const r=this.counts.get(n)||0;this.counts.set(n,r+1),r===0&&(this.output.push(n),this.update());let i=!1;return()=>{if(i)return;i=!0;const o=this.counts.get(n)-1;this.counts.set(n,o),o===0&&(cs(this.output,n),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}function r3(e){return!!(Se(e)&&e.add)}function ll(e,t){var n;if(!e.applyWillChange)return;let r=e.getValue("willChange");if(!r&&!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&(r=new n3("auto"),e.addValue("willChange",r)),r3(r))return r.add(t)}function i3({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function i0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],p=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(o=e.latestValues[d])!==null&&o!==void 0?o:null),y=l[d];if(y===void 0||p&&i3(p,d))continue;const v={delay:n,...Lu(s||{},d)};let x=!1;if(window.MotionHandoffAnimation){const m=r0(e);if(m){const h=window.MotionHandoffAnimation(m,d,F);h!==null&&(v.startTime=h,x=!0)}}f.start(Vu(d,f,y,e.shouldReduceMotion&&en.has(d)?{type:!1}:v,e,x,ll(e,d)));const w=f.animation;w&&u.push(w)}return a&&Promise.all(u).then(()=>{F.update(()=>{a&&t3(e,a)})}),u}function ul(e,t,n={}){var r;const i=ps(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(i0(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:p=0,staggerChildren:d,staggerDirection:f}=o;return o3(e,t,p+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,p]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>p())}else return Promise.all([s(),a(n.delay)])}function o3(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(s3).forEach((u,p)=>{u.notify("AnimationStart",t),s.push(ul(u,t,{...o,delay:n+l(p)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function s3(e,t){return e.sortNodePosition(t)}function a3(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ul(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ul(e,t,n);else{const i=typeof t=="function"?ps(e,t,n.custom):t;r=Promise.all(i0(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const l3=[...gu].reverse(),u3=gu.length;function c3(e){return t=>Promise.all(t.map(({animation:n,options:r})=>a3(e,n,r)))}function d3(e){let t=c3(e),n=Ad(),r=!0;const i=l=>(u,p)=>{var d;const f=ps(e,p,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:y,transitionEnd:v,...x}=f;u={...u,...x,...v}}return u};function o(l){t=l(e)}function s(l){const u=e.getProps(),p=e.getVariantContext(!0)||{},d=[],f=new Set;let y={},v=1/0;for(let w=0;w<u3;w++){const m=l3[w],h=n[m],g=u[m]!==void 0?u[m]:p[m],S=li(g),j=m===l?h.isActive:null;j===!1&&(v=w);let E=g===p[m]&&g!==u[m]&&S;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),h.protectedKeys={...y},!h.isActive&&j===null||!g&&!h.prevProp||ui(g)||typeof g=="boolean")continue;let T=p3(h.prevProp,g)||m===l&&h.isActive&&!E&&S||w>v&&S,R=!1;const M=Array.isArray(g)?g:[g];let W=M.reduce(i(m),{});j===!1&&(W={});const{prevResolvedValues:ze={}}=h,nn={...ze,...W},fr=ce=>{T=!0,f.has(ce)&&(R=!0,f.delete(ce)),h.needsAnimating[ce]=!0;const Re=e.getValue(ce);Re&&(Re.liveStyle=!1)};for(const ce in nn){const Re=W[ce],rn=ze[ce];if(y.hasOwnProperty(ce))continue;let L=!1;el(Re)&&el(rn)?L=!Tm(Re,rn):L=Re!==rn,L?Re!=null?fr(ce):f.add(ce):Re!==void 0&&f.has(ce)?fr(ce):h.protectedKeys[ce]=!0}h.prevProp=g,h.prevResolvedValues=W,h.isActive&&(y={...y,...W}),r&&e.blockInitialAnimation&&(T=!1),T&&(!E||R)&&d.push(...M.map(ce=>({animation:ce,options:{type:m}})))}if(f.size){const w={};f.forEach(m=>{const h=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),w[m]=h??null}),d.push({animation:w})}let x=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(d):Promise.resolve()}function a(l,u){var p;if(n[l].isActive===u)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ad(),r=!0}}}function p3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Tm(t,e):!1}function an(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ad(){return{animate:an(!0),whileInView:an(),whileHover:an(),whileTap:an(),whileDrag:an(),whileFocus:an(),exit:an()}}class f3 extends tn{constructor(t){super(t),t.animationState||(t.animationState=d3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ui(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let h3=0;class m3 extends tn{constructor(){super(...arguments),this.id=h3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const g3={animation:{Feature:f3},exit:{Feature:m3}},Dd=(e,t)=>Math.abs(e-t);function y3(e,t){const n=Dd(e.x,t.x),r=Dd(e.y,t.y);return Math.sqrt(n**2+r**2)}class o0{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Ys(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=y3(d.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:v}=d,{timestamp:x}=pe;this.history.push({...v,timestamp:x});const{onStart:w,onMove:m}=this.handlers;f||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Qs(f,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Ys(d.type==="pointercancel"?this.lastMoveEventInfo:Qs(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,w),v&&v(d,w)},!Sm(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=ds(t),a=Qs(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=pe;this.history=[{...l,timestamp:u}];const{onSessionStart:p}=n;p&&p(t,Ys(a,this.history)),this.removeListeners=xt(vt(this.contextWindow,"pointermove",this.handlePointerMove),vt(this.contextWindow,"pointerup",this.handlePointerUp),vt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Pt(this.updatePoint)}}function Qs(e,t){return t?{point:t(e.point)}:e}function Rd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ys({point:e},t){return{point:e,delta:Rd(e,s0(t)),offset:Rd(e,v3(t)),velocity:x3(t,.1)}}function v3(e){return e[0]}function s0(e){return e[e.length-1]}function x3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=s0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>St(t)));)n--;if(!r)return{x:0,y:0};const o=wt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const a0=1e-4,S3=1-a0,w3=1+a0,l0=.01,C3=0-l0,j3=0+l0;function _e(e){return e.max-e.min}function k3(e,t,n){return Math.abs(e-t)<=n}function Nd(e,t,n,r=.5){e.origin=r,e.originPoint=G(t.min,t.max,e.origin),e.scale=_e(n)/_e(t),e.translate=G(n.min,n.max,e.origin)-e.originPoint,(e.scale>=S3&&e.scale<=w3||isNaN(e.scale))&&(e.scale=1),(e.translate>=C3&&e.translate<=j3||isNaN(e.translate))&&(e.translate=0)}function zr(e,t,n,r){Nd(e.x,t.x,n.x,r?r.originX:void 0),Nd(e.y,t.y,n.y,r?r.originY:void 0)}function Id(e,t,n){e.min=n.min+t.min,e.max=e.min+_e(t)}function T3(e,t,n){Id(e.x,t.x,n.x),Id(e.y,t.y,n.y)}function Od(e,t,n){e.min=t.min-n.min,e.max=e.min+_e(t)}function Ur(e,t,n){Od(e.x,t.x,n.x),Od(e.y,t.y,n.y)}function E3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?G(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?G(n,e,r.max):Math.min(e,n)),e}function Vd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function P3(e,{top:t,left:n,bottom:r,right:i}){return{x:Vd(e.x,n,i),y:Vd(e.y,t,r)}}function _d(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function L3(e,t){return{x:_d(e.x,t.x),y:_d(e.y,t.y)}}function b3(e,t){let n=.5;const r=_e(e),i=_e(t);return i>r?n=di(t.min,t.max-r,e.min):r>i&&(n=di(e.min,e.max-i,t.min)),qt(0,1,n)}function M3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const cl=.35;function A3(e=cl){return e===!1?e=0:e===!0&&(e=cl),{x:Fd(e,"left","right"),y:Fd(e,"top","bottom")}}function Fd(e,t,n){return{min:Bd(e,t),max:Bd(e,n)}}function Bd(e,t){return typeof e=="number"?e:e[t]||0}const zd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Jn=()=>({x:zd(),y:zd()}),Ud=()=>({min:0,max:0}),ee=()=>({x:Ud(),y:Ud()});function He(e){return[e("x"),e("y")]}function u0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function D3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function R3(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Xs(e){return e===void 0||e===1}function dl({scale:e,scaleX:t,scaleY:n}){return!Xs(e)||!Xs(t)||!Xs(n)}function cn(e){return dl(e)||c0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function c0(e){return Hd(e.x)||Hd(e.y)}function Hd(e){return e&&e!=="0%"}function zo(e,t,n){const r=e-n,i=t*r;return n+i}function Jd(e,t,n,r,i){return i!==void 0&&(e=zo(e,i,r)),zo(e,n,r)+t}function pl(e,t=0,n=1,r,i){e.min=Jd(e.min,t,n,r,i),e.max=Jd(e.max,t,n,r,i)}function d0(e,{x:t,y:n}){pl(e.x,t.translate,t.scale,t.originPoint),pl(e.y,n.translate,n.scale,n.originPoint)}const Wd=.999999999999,$d=1.0000000000001;function N3(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&$n(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,d0(e,s)),r&&cn(o.latestValues)&&$n(e,o.latestValues))}t.x<$d&&t.x>Wd&&(t.x=1),t.y<$d&&t.y>Wd&&(t.y=1)}function Wn(e,t){e.min=e.min+t,e.max=e.max+t}function Gd(e,t,n,r,i=.5){const o=G(e.min,e.max,i);pl(e,t,n,o,r)}function $n(e,t){Gd(e.x,t.x,t.scaleX,t.scale,t.originX),Gd(e.y,t.y,t.scaleY,t.scale,t.originY)}function p0(e,t){return u0(R3(e.getBoundingClientRect(),t))}function I3(e,t,n){const r=p0(e,n),{scroll:i}=t;return i&&(Wn(r.x,i.offset.x),Wn(r.y,i.offset.y)),r}const f0=({current:e})=>e?e.ownerDocument.defaultView:null,O3=new WeakMap;class V3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=p=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ds(p,"page").point)},o=(p,d)=>{var f;const{drag:y,dragPropagation:v,onDragStart:x}=this.getProps();if(y&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Cm(y),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),He(m=>{let h=this.getAxisMotionValue(m).get()||0;if(ct.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const S=g.layout.layoutBox[m];S&&(h=_e(S)*(parseFloat(h)/100))}}this.originPoint[m]=h}),x&&F.postRender(()=>x(p,d)),(f=this.removeWillChange)===null||f===void 0||f.call(this),this.removeWillChange=ll(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(p,d)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:w}=d;if(y&&this.currentDirection===null){this.currentDirection=_3(w),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),x&&x(p,d)},a=(p,d)=>this.stop(p,d),l=()=>He(p=>{var d;return this.getAnimationState(p)==="paused"&&((d=this.getAxisMotionValue(p).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new o0(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:f0(this.visualElement)})}stop(t,n){var r;(r=this.removeWillChange)===null||r===void 0||r.call(this);const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:s}=this.getProps();s&&F.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ji(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=E3(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Un(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=P3(i.layoutBox,n):this.constraints=!1,this.elastic=A3(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&He(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=M3(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Un(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=I3(r,i.root,this.visualElement.getTransformPagePoint());let s=L3(i.layout.layoutBox,o);if(n){const a=n(D3(s));this.hasMutatedConstraints=!!a,a&&(s=u0(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=He(p=>{if(!Ji(p,n,this.currentDirection))return;let d=l&&l[p]||{};s&&(d={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[p]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(p,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Vu(t,r,0,n,this.visualElement,!1,ll(this.visualElement,t)))}stopAnimation(){He(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){He(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){He(n=>{const{drag:r}=this.getProps();if(!Ji(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-G(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Un(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};He(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=b3({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),He(s=>{if(!Ji(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(G(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;O3.set(this.visualElement,this);const t=this.visualElement.current,n=vt(t,"pointerdown",l=>{const{drag:u,dragListener:p=!0}=this.getProps();u&&p&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Un(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),F.read(r);const s=mt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(He(p=>{const d=this.getAxisMotionValue(p);d&&(this.originPoint[p]+=l[p].translate,d.set(d.get()+l[p].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=cl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ji(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function _3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class F3 extends tn{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new V3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const Kd=e=>(t,n)=>{e&&F.postRender(()=>e(t,n))};class B3 extends tn{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new o0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:f0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Kd(t),onStart:Kd(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&F.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=vt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function z3(){const e=C.useContext(fu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=C.useId();C.useEffect(()=>r(i),[]);const o=C.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const oo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function qd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Cr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(A.test(e))e=parseFloat(e);else return e;const n=qd(e,t.target.x),r=qd(e,t.target.y);return`${n}% ${r}%`}},U3={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Qt.parse(e);if(i.length>5)return r;const o=Qt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=G(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class H3 extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;I2(J3),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),oo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||F.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),mu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function h0(e){const[t,n]=z3(),r=C.useContext(om);return c.jsx(H3,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(nm),isPresent:t,safeToRemove:n})}const J3={borderRadius:{...Cr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Cr,borderTopRightRadius:Cr,borderBottomLeftRadius:Cr,borderBottomRightRadius:Cr,boxShadow:U3},m0=["TopLeft","TopRight","BottomLeft","BottomRight"],W3=m0.length,Qd=e=>typeof e=="string"?parseFloat(e):e,Yd=e=>typeof e=="number"||A.test(e);function $3(e,t,n,r,i,o){i?(e.opacity=G(0,n.opacity!==void 0?n.opacity:1,G3(r)),e.opacityExit=G(t.opacity!==void 0?t.opacity:1,0,K3(r))):o&&(e.opacity=G(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<W3;s++){const a=`border${m0[s]}Radius`;let l=Xd(t,a),u=Xd(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Yd(l)===Yd(u)?(e[a]=Math.max(G(Qd(l),Qd(u),r),0),(ct.test(u)||ct.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=G(t.rotate||0,n.rotate||0,r))}function Xd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const G3=g0(0,.5,qm),K3=g0(.5,.95,we);function g0(e,t,n){return r=>r<e?0:r>t?1:n(di(e,t,r))}function Zd(e,t){e.min=t.min,e.max=t.max}function Ue(e,t){Zd(e.x,t.x),Zd(e.y,t.y)}function ep(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function tp(e,t,n,r,i){return e-=t,e=zo(e,1/n,r),i!==void 0&&(e=zo(e,1/i,r)),e}function q3(e,t=0,n=1,r=.5,i,o=e,s=e){if(ct.test(t)&&(t=parseFloat(t),t=G(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=G(o.min,o.max,r);e===o&&(a-=t),e.min=tp(e.min,t,n,a,i),e.max=tp(e.max,t,n,a,i)}function np(e,t,[n,r,i],o,s){q3(e,t[n],t[r],t[i],t.scale,o,s)}const Q3=["x","scaleX","originX"],Y3=["y","scaleY","originY"];function rp(e,t,n,r){np(e.x,t,Q3,n?n.x:void 0,r?r.x:void 0),np(e.y,t,Y3,n?n.y:void 0,r?r.y:void 0)}function ip(e){return e.translate===0&&e.scale===1}function y0(e){return ip(e.x)&&ip(e.y)}function op(e,t){return e.min===t.min&&e.max===t.max}function X3(e,t){return op(e.x,t.x)&&op(e.y,t.y)}function sp(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function v0(e,t){return sp(e.x,t.x)&&sp(e.y,t.y)}function ap(e){return _e(e.x)/_e(e.y)}function lp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Z3{constructor(){this.members=[]}add(t){us(this.members,t),t.scheduleRender()}remove(t){if(cs(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function eS(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:p,rotateX:d,rotateY:f,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),p&&(r+=`rotate(${p}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const tS=(e,t)=>e.depth-t.depth;class nS{constructor(){this.children=[],this.isDirty=!1}add(t){us(this.children,t),this.isDirty=!0}remove(t){cs(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(tS),this.isDirty=!1,this.children.forEach(t)}}function rS(e,t){const n=Ct.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Pt(r),e(o-t))};return F.read(r,!0),()=>Pt(r)}function iS(e){return e instanceof SVGElement&&e.tagName!=="svg"}function oS(e,t,n){const r=Se(e)?e:pi(e);return r.start(Vu("",r,t,n)),r.animation}const dn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Lr=typeof window<"u"&&window.MotionDebug!==void 0,Zs=["","X","Y","Z"],sS={visibility:"hidden"},up=1e3;let aS=0;function ea(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function x0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;const{visualElement:t}=e.options;return t?window.MotionHasOptimisedTransformAnimation(r0(t))?!0:e.parent&&!e.parent.hasCheckedOptimisedAppear?x0(e.parent):!1:!1}function S0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=aS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Lr&&(dn.totalNodes=dn.resolvedTargetDeltas=dn.recalculatedProjection=0),this.nodes.forEach(cS),this.nodes.forEach(mS),this.nodes.forEach(gS),this.nodes.forEach(dS),Lr&&window.MotionDebug.record(dn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new nS)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new _u),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=iS(s),this.instance=s;const{layoutId:l,layout:u,visualElement:p}=this.options;if(p&&!p.current&&p.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=rS(f,250),oo.hasAnimatedSinceResize&&(oo.hasAnimatedSinceResize=!1,this.nodes.forEach(dp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&p&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||wS,{onLayoutAnimationStart:w,onLayoutAnimationComplete:m}=p.getProps(),h=!this.targetLayout||!v0(this.targetLayout,v)||y,g=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const S={...Lu(x,"layout"),onPlay:w,onComplete:m};(p.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||dp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(yS),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionHandoffCancelAll&&x0(this)&&window.MotionHandoffCancelAll(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const d=this.path[p];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cp);return}this.isUpdating||this.nodes.forEach(fS),this.isUpdating=!1,this.nodes.forEach(hS),this.nodes.forEach(lS),this.nodes.forEach(uS),this.clearAllSnapshots();const a=Ct.now();pe.delta=qt(0,1e3/60,a-pe.timestamp),pe.timestamp=a,pe.isProcessing=!0,Hs.update.process(pe),Hs.preRender.process(pe),Hs.render.process(pe),pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,mu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pS),this.sharedNodes.forEach(vS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!y0(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,p=u!==this.prevTransformTemplateValue;s&&(a||cn(this.latestValues)||p)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),CS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return ee();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(jS))){const{scroll:p}=this.root;p&&(Wn(l.x,p.offset.x),Wn(l.y,p.offset.y))}return l}removeElementScroll(s){var a;const l=ee();if(Ue(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const p=this.path[u],{scroll:d,options:f}=p;p!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Ue(l,s),Wn(l.x,d.offset.x),Wn(l.y,d.offset.y))}return l}applyTransform(s,a=!1){const l=ee();Ue(l,s);for(let u=0;u<this.path.length;u++){const p=this.path[u];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&$n(l,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),cn(p.latestValues)&&$n(l,p.latestValues)}return cn(this.latestValues)&&$n(l,this.latestValues),l}removeTransform(s){const a=ee();Ue(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!cn(u.latestValues))continue;dl(u.latestValues)&&u.updateSnapshot();const p=ee(),d=u.measurePageBox();Ue(p,d),rp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,p)}return cn(this.latestValues)&&rp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=pe.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),Ur(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ee(),this.targetWithTransforms=ee()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),T3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ue(this.target,this.layout.layoutBox),d0(this.target,this.targetDelta)):Ue(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),Ur(this.relativeTargetOrigin,this.target,y.target),Ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Lr&&dn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||dl(this.parent.latestValues)||c0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===pe.timestamp&&(u=!1),u)return;const{layout:p,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||d))return;Ue(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;N3(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ee());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ep(this.prevProjectionDelta.x,this.projectionDelta.x),ep(this.prevProjectionDelta.y,this.projectionDelta.y)),zr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==y||!lp(this.projectionDelta.x,this.prevProjectionDelta.x)||!lp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Lr&&dn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Jn(),this.projectionDelta=Jn(),this.projectionDeltaWithTransform=Jn()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},p={...this.latestValues},d=Jn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ee(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,w=this.getStack(),m=!w||w.members.length<=1,h=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(SS));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const j=S/1e3;pp(d.x,s.x,j),pp(d.y,s.y,j),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ur(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xS(this.relativeTarget,this.relativeTargetOrigin,f,j),g&&X3(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ee()),Ue(g,this.relativeTarget)),x&&(this.animationValues=p,$3(p,u,this.latestValues,j,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=F.update(()=>{oo.hasAnimatedSinceResize=!0,this.currentAnimation=oS(0,up,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(up),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:p}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&w0(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ee();const d=_e(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=_e(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}Ue(a,l),$n(a,p),zr(this.projectionDeltaWithTransform,this.layoutCorrected,a,p)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Z3),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&ea("z",s,u,this.animationValues);for(let p=0;p<Zs.length;p++)ea(`rotate${Zs[p]}`,s,u,this.animationValues),ea(`skew${Zs[p]}`,s,u,this.animationValues);s.render();for(const p in u)s.setStaticValue(p,u[p]),this.animationValues&&(this.animationValues[p]=u[p]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return sS;const u={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ro(s==null?void 0:s.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ro(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!cn(this.latestValues)&&(x.transform=p?p({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=eS(this.projectionDeltaWithTransform,this.treeScale,f),p&&(u.transform=p(f,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Oo){if(f[x]===void 0)continue;const{correct:w,applyTo:m}=Oo[x],h=u.transform==="none"?f[x]:w(f[x],d);if(m){const g=m.length;for(let S=0;S<g;S++)u[m[S]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=d===this?ro(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(cp),this.root.sharedNodes.clear()}}}function lS(e){e.updateLayout()}function uS(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?He(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],y=_e(f);f.min=r[d].min,f.max=f.min+y}):w0(o,n.layoutBox,r)&&He(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],y=_e(r[d]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const a=Jn();zr(a,r,n.layoutBox);const l=Jn();s?zr(l,e.applyTransform(i,!0),n.measuredBox):zr(l,r,n.layoutBox);const u=!y0(a);let p=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:y}=d;if(f&&y){const v=ee();Ur(v,n.layoutBox,f.layoutBox);const x=ee();Ur(x,r,y.layoutBox),v0(v,x)||(p=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:p})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function cS(e){Lr&&dn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function dS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pS(e){e.clearSnapshot()}function cp(e){e.clearMeasurements()}function fS(e){e.isLayoutDirty=!1}function hS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function mS(e){e.resolveTargetDelta()}function gS(e){e.calcProjection()}function yS(e){e.resetSkewAndRotation()}function vS(e){e.removeLeadSnapshot()}function pp(e,t,n){e.translate=G(t.translate,0,n),e.scale=G(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fp(e,t,n,r){e.min=G(t.min,n.min,r),e.max=G(t.max,n.max,r)}function xS(e,t,n,r){fp(e.x,t.x,n.x,r),fp(e.y,t.y,n.y,r)}function SS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const wS={duration:.45,ease:[.4,0,.1,1]},hp=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),mp=hp("applewebkit/")&&!hp("chrome/")?Math.round:we;function gp(e){e.min=mp(e.min),e.max=mp(e.max)}function CS(e){gp(e.x),gp(e.y)}function w0(e,t,n){return e==="position"||e==="preserve-aspect"&&!k3(ap(t),ap(n),.2)}function jS(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const kS=S0({attachResizeListener:(e,t)=>mt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ta={current:void 0},C0=S0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ta.current){const e=new kS({});e.mount(window),e.setOptions({layoutScroll:!0}),ta.current=e}return ta.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),TS={pan:{Feature:B3},drag:{Feature:F3,ProjectionNode:C0,MeasureLayout:h0}},fl={current:null},j0={current:!1};function ES(){if(j0.current=!0,!!hu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>fl.current=e.matches;e.addListener(t),t()}else fl.current=!1}function PS(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Se(i))e.addValue(r,i);else if(Se(o))e.addValue(r,pi(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,pi(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const yp=new WeakMap,LS=[...Mm,ye,Qt],bS=e=>LS.find(bm(e)),vp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],MS=yu.length;class AS{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=bu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,F.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ls(n),this.isVariantNode=im(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const y=d[f];l[f]!==void 0&&Se(y)&&y.set(l[f],!1)}}mount(t){this.current=t,yp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),j0.current||ES(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:fl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){yp.delete(this.current),this.projection&&this.projection.unmount(),Pt(this.notifyUpdate),Pt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){const r=en.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&F.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ar){const n=ar[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<vp.length;r++){const i=vp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=PS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<MS;r++){const i=yu[r],o=this.props[i];(li(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=pi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Pm(i)||Em(i))?i=parseFloat(i):!bS(i)&&Qt.test(n)&&(i=_m(t,n)),this.setBaseTarget(t,Se(i)?i.get():i)),Se(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=Pu(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Se(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new _u),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class k0 extends AS{constructor(){super(...arguments),this.KeyframeResolver=Fm}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function DS(e){return window.getComputedStyle(e)}class RS extends k0{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=fm}readValueFromInstance(t,n){if(en.has(n)){const r=Au(n);return r&&r.default||0}else{const r=DS(t),i=(um(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return p0(t,n)}build(t,n,r){Cu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Eu(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Se(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class NS extends k0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ee}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(en.has(n)){const r=Au(n);return r&&r.default||0}return n=hm.has(n)?n:as(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return gm(t,n,r)}build(t,n,r){ku(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){mm(t,n,r,i)}mount(t){this.isSVGTag=Tu(t.tagName),super.mount(t)}}const IS=(e,t)=>vu(e)?new NS(t):new RS(t,{allowProjection:e!==C.Fragment}),OS={layout:{ProjectionNode:C0,MeasureLayout:h0}},VS={...g3,...Tv,...TS,...OS},xe=R2((e,t)=>pv(e,t,VS,IS)),_S="/LearnJava/assets/welcome-lJxpkq19.png";var so={},T0;Object.defineProperty(so,"__esModule",{value:!0});var br=c,ot=C,Xe=function(){return Xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Xe.apply(this,arguments)};function FS(e,t){var n,r;switch(t.type){case"TYPE":return Xe(Xe({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return Xe(Xe({},e),{speed:t.payload});case"DELETE":return Xe(Xe({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return Xe(Xe({},e),{count:e.count+1});default:return e}}var xp=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=r===void 0?1:r,o=e.typeSpeed,s=o===void 0?80:o,a=e.deleteSpeed,l=a===void 0?50:a,u=e.delaySpeed,p=u===void 0?1500:u,d=e.onLoopDone,f=e.onType,y=e.onDelete,v=e.onDelay,x=ot.useReducer(FS,{speed:s,text:"",count:0}),w=x[0],m=w.speed,h=w.text,g=w.count,S=x[1],j=ot.useRef(0),E=ot.useRef(!1),P=ot.useRef(!1),T=ot.useRef(!1),R=ot.useRef(!1),M=ot.useCallback(function(){var W=g%n.length,ze=n[W];P.current?(S({type:"DELETE",payload:ze,speed:l}),h===""&&(P.current=!1,S({type:"COUNT"}))):(S({type:"TYPE",payload:ze,speed:s}),T.current=!0,h===ze&&(S({type:"DELAY",payload:p}),T.current=!1,R.current=!0,setTimeout(function(){R.current=!1,P.current=!0},p),i>0&&(j.current+=1,j.current/n.length===i&&(R.current=!1,E.current=!0)))),T.current&&f&&f(j.current),P.current&&y&&y(),R.current&&v&&v()},[g,p,l,i,s,n,h,f,y,v]);return ot.useEffect(function(){var W=setTimeout(M,m);return E.current&&clearTimeout(W),function(){return clearTimeout(W)}},[M,m]),ot.useEffect(function(){d&&E.current&&d()},[d]),[h,{isType:T.current,isDelay:R.current,isDelete:P.current,isDone:E.current}]},BS="styles-module_blinkingCursor__yugAC",zS="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Sp=ot.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,i=r===void 0?"|":r,o=e.cursorColor,s=o===void 0?"inherit":o;return br.jsx("span",Xe({style:{color:s},className:"".concat(BS," ").concat(n?zS:"")},{children:i}))});so.Cursor=Sp,T0=so.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=r===void 0?1:r,o=e.typeSpeed,s=o===void 0?80:o,a=e.deleteSpeed,l=a===void 0?50:a,u=e.delaySpeed,p=u===void 0?1500:u,d=e.cursor,f=d!==void 0&&d,y=e.cursorStyle,v=y===void 0?"|":y,x=e.cursorColor,w=x===void 0?"inherit":x,m=e.cursorBlinking,h=m===void 0||m,g=e.onLoopDone,S=e.onType,j=e.onDelay,E=e.onDelete,P=xp({words:n,loop:i,typeSpeed:s,deleteSpeed:l,delaySpeed:p,onLoopDone:g,onType:S,onDelay:j,onDelete:E})[0];return br.jsxs(br.Fragment,{children:[br.jsx("span",{children:P}),f&&br.jsx(Sp,{cursorStyle:v,cursorColor:w,cursorBlinking:h})]})},so.useTypewriter=xp;const US="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-label='JavaScript'%20role='img'%20viewBox='0%200%20512%20512'%3e%3crect%20width='512'%20height='512'%20rx='15%25'%20fill='%23f7df1e'/%3e%3cpath%20d='M324%20370c10%2017%2024%2029%2047%2029c20%200%2033-10%2033%20-24c0-16%20-13%20-22%20-35%20-32l-12-5c-35-15%20-58%20-33%20-58%20-72c0-36%2027%20-64%2070%20-64c31%200%2053%2011%2068%2039l-37%2024c-8-15%20-17%20-21%20-31%20-21c-14%200-23%209%20-23%2021c0%2014%209%2020%2030%2029l12%205c41%2018%2064%2035%2064%2076c0%2043-34%2067%20-80%2067c-45%200-74%20-21%20-88%20-49zm-170%204c8%2013%2014%2025%2031%2025c16%200%2026-6%2026%20-30V203h48v164c0%2050-29%2072%20-72%2072c-39%200-61%20-20%20-72%20-44z'/%3e%3c/svg%3e",Gn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.0497%208.44062C22.6378%203.32607%2019.2566%200%2019.2566%200C19.7598%205.28738%2013.813%206.53583%2012.2189%2010.1692C11.1312%2012.6485%2012.9638%2014.8193%2016.0475%2017.5554C15.7749%2016.9494%2015.3544%2016.3606%2014.9288%2015.7645C13.4769%2013.7313%2011.9645%2011.6132%2016.0497%208.44062Z'%20fill='%23E76F00'/%3e%3cpath%20d='M17.1015%2018.677C17.1015%2018.677%2019.0835%2017.0779%2017.5139%2015.3008C12.1931%209.27186%2023.3333%206.53583%2023.3333%206.53583C16.5317%209.8125%2017.5471%2011.7574%2019.2567%2014.1202C21.0871%2016.6538%2017.1015%2018.677%2017.1015%2018.677Z'%20fill='%23E76F00'/%3e%3cpath%20d='M22.937%2023.4456C29.0423%2020.3258%2026.2195%2017.3278%2024.2492%2017.7317C23.7662%2017.8305%2023.5509%2017.9162%2023.5509%2017.9162C23.5509%2017.9162%2023.7302%2017.64%2024.0726%2017.5204C27.9705%2016.1729%2030.9682%2021.4949%2022.8143%2023.6028C22.8143%2023.6029%2022.9088%2023.5198%2022.937%2023.4456Z'%20fill='%235382A1'/%3e%3cpath%20d='M10.233%2019.4969C6.41312%2018.9953%2012.3275%2017.6139%2012.3275%2017.6139C12.3275%2017.6139%2010.0307%2017.4616%207.20592%2018.8043C3.86577%2020.3932%2015.4681%2021.1158%2021.474%2019.5625C22.0984%2019.1432%2022.9614%2018.7798%2022.9614%2018.7798C22.9614%2018.7798%2020.5037%2019.2114%2018.0561%2019.4145C15.0612%2019.6612%2011.8459%2019.7093%2010.233%2019.4969Z'%20fill='%235382A1'/%3e%3cpath%20d='M11.6864%2022.4758C9.55624%2022.2592%2010.951%2021.2439%2010.951%2021.2439C5.43898%2023.0429%2014.0178%2025.083%2021.7199%2022.8682C20.9012%2022.5844%2020.3806%2022.0653%2020.3806%2022.0653C16.6163%2022.7781%2014.441%2022.7553%2011.6864%2022.4758Z'%20fill='%235382A1'/%3e%3cpath%20d='M12.6145%2025.6991C10.486%2025.4585%2011.7295%2024.7474%2011.7295%2024.7474C6.72594%2026.1222%2014.7729%2028.9625%2021.1433%2026.2777C20.0999%2025.8787%2019.3528%2025.4181%2019.3528%2025.4181C16.5111%2025.9469%2015.1931%2025.9884%2012.6145%2025.6991Z'%20fill='%235382A1'/%3e%3cpath%20d='M25.9387%2027.3388C25.9387%2027.3388%2026.8589%2028.0844%2024.9252%2028.6612C21.2481%2029.7566%209.62093%2030.0874%206.39094%2028.7049C5.22984%2028.2082%207.40723%2027.5189%208.09215%2027.3742C8.80646%2027.2219%209.21466%2027.2503%209.21466%2027.2503C7.9234%2026.3558%200.868489%2029.0067%205.63111%2029.7659C18.6195%2031.8372%2029.3077%2028.8331%2025.9387%2027.3388Z'%20fill='%235382A1'/%3e%3cpath%20d='M28%2028.9679C27.7869%2031.6947%2018.7877%2032.2683%2012.9274%2031.8994C9.10432%2031.6583%208.33812%2031.0558%208.32691%2031.047C11.9859%2031.6402%2018.1549%2031.7482%2023.1568%2030.8225C27.5903%2030.0016%2028%2028.9679%2028%2028.9679Z'%20fill='%235382A1'/%3e%3c/svg%3e",wp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7559.000000)'%20fill='%23000000'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M94,7399%20C99.523,7399%20104,7403.59%20104,7409.253%20C104,7413.782%20101.138,7417.624%2097.167,7418.981%20C96.66,7419.082%2096.48,7418.762%2096.48,7418.489%20C96.48,7418.151%2096.492,7417.047%2096.492,7415.675%20C96.492,7414.719%2096.172,7414.095%2095.813,7413.777%20C98.04,7413.523%20100.38,7412.656%20100.38,7408.718%20C100.38,7407.598%2099.992,7406.684%2099.35,7405.966%20C99.454,7405.707%2099.797,7404.664%2099.252,7403.252%20C99.252,7403.252%2098.414,7402.977%2096.505,7404.303%20C95.706,7404.076%2094.85,7403.962%2094,7403.958%20C93.15,7403.962%2092.295,7404.076%2091.497,7404.303%20C89.586,7402.977%2088.746,7403.252%2088.746,7403.252%20C88.203,7404.664%2088.546,7405.707%2088.649,7405.966%20C88.01,7406.684%2087.619,7407.598%2087.619,7408.718%20C87.619,7412.646%2089.954,7413.526%2092.175,7413.785%20C91.889,7414.041%2091.63,7414.493%2091.54,7415.156%20C90.97,7415.418%2089.522,7415.871%2088.63,7414.304%20C88.63,7414.304%2088.101,7413.319%2087.097,7413.247%20C87.097,7413.247%2086.122,7413.234%2087.029,7413.87%20C87.029,7413.87%2087.684,7414.185%2088.139,7415.37%20C88.139,7415.37%2088.726,7417.2%2091.508,7416.58%20C91.513,7417.437%2091.522,7418.245%2091.522,7418.489%20C91.522,7418.76%2091.338,7419.077%2090.839,7418.982%20C86.865,7417.627%2084,7413.783%2084,7409.253%20C84,7403.59%2088.478,7399%2094,7399'%20id='github-[%23142]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",HS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58536%2017.4132C1.80488%2016.6327%201.80488%2015.3673%202.58536%2014.5868L14.5868%202.58536C15.3673%201.80488%2016.6327%201.80488%2017.4132%202.58536L29.4146%2014.5868C30.1951%2015.3673%2030.1951%2016.6327%2029.4146%2017.4132L17.4132%2029.4146C16.6327%2030.1951%2015.3673%2030.1951%2014.5868%2029.4146L2.58536%2017.4132Z'%20fill='%23EE513B'/%3e%3cpath%20d='M12.1489%205.06152L10.9336%206.27686L14.0725%209.41577C13.9455%209.68819%2013.8746%209.99201%2013.8746%2010.3124C13.8746%2011.222%2014.4461%2011.9981%2015.2496%2012.3012V19.9798C14.4461%2020.2829%2013.8746%2021.059%2013.8746%2021.9686C13.8746%2023.1422%2014.826%2024.0936%2015.9996%2024.0936C17.1732%2024.0936%2018.1246%2023.1422%2018.1246%2021.9686C18.1246%2021.144%2017.6549%2020.429%2016.9684%2020.0768V12.3117L19.9689%2015.3122C19.8481%2015.5791%2019.7809%2015.8754%2019.7809%2016.1874C19.7809%2017.361%2020.7323%2018.3124%2021.9059%2018.3124C23.0795%2018.3124%2024.0309%2017.361%2024.0309%2016.1874C24.0309%2015.0138%2023.0795%2014.0624%2021.9059%2014.0624C21.6778%2014.0624%2021.4582%2014.0983%2021.2522%2014.1648L18.0297%2010.9423C18.0914%2010.7433%2018.1246%2010.5317%2018.1246%2010.3124C18.1246%209.13878%2017.1732%208.18738%2015.9996%208.18738C15.7803%208.18738%2015.5688%208.22061%2015.3697%208.2823L12.1489%205.06152Z'%20fill='white'/%3e%3c/svg%3e",JS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3ccircle%20style='fill:%2391C0F1;'%20cx='255.999'%20cy='255.998'%20r='255.998'/%3e%3cpath%20style='fill:%23D7EDF3;'%20d='M256,512C114.615,512,0.001,397.384,0.001,255.999S114.615,0,256,0V512z'/%3e%3cpath%20style='fill:%23A2CE86;'%20d='M142.83,345.053l3.763-4.164c12.842-14.212,12.595-35.91-0.567-49.827l-2.011-2.126%20c-8.623-9.118-11.989-22.007-8.927-34.176c4.016-15.959-3.08-32.639-17.363-40.814l-97.426-58.006%20C7.234,186.676,0.001,220.493,0.001,255.999c0,100.778,58.241,187.938,142.892,229.702l-9.008-109.85%20C131.987,364.756,135.284,353.404,142.83,345.053z'/%3e%3cg%3e%3cpath%20style='fill:%23489B6D;'%20d='M436.811,74.777l-16.915,18.486c-7.363,8.047-17.639,12.812-28.537,13.235l-76.503,2.969%20c-13.56,0.527-25.973,7.756-33.121,19.291l-19.61,31.644c-8.866,14.308-8.044,32.59,2.072,46.044l12.178,16.196%20c9.245,12.295,14.206,27.278,14.127,42.66l-0.259,50.205c-0.136,26.442,23.649,46.589,49.708,42.106l55.769-9.597%20c15.328-2.637,29.349-10.278,39.875-21.727l0,0c18.726-20.368,46.625-27.139,71.444-19.946c3.247-16.279,4.961-33.111,4.961-50.344%20C512.001,185.203,483.26,121.12,436.811,74.777z'/%3e%3cpath%20style='fill:%23489B6D;'%20d='M270.438,450.438L270.438,450.438c-17.042,7.556-26.831,25.666-23.817,44.062l2.854,17.416%20c2.168,0.054,4.343,0.082,6.525,0.082c41.38,0,80.46-9.831,115.051-27.265l-4.36-6.497%20C345.611,446.832,305.017,435.108,270.438,450.438z'/%3e%3c/g%3e%3cpath%20style='fill:%23A2CE86;'%20d='M145.49,101.316l51.928-29.224c8.166-4.596,14.086-12.345,16.373-21.433l12.308-48.911%20c-58.35,6.789-110.711,33.189-150.316,72.45l32.275,24.542C118.906,106.986,133.616,107.999,145.49,101.316z'/%3e%3c/svg%3e",Cp="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-8.78%200%2070%2070'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cmetadata%3e%3crdf:rdf%3e%3ccc:work%3e%3cdc:subject%3e%20Data%20%3c/dc:subject%3e%3cdc:identifier%3e%20sql-database-generic%20%3c/dc:identifier%3e%3cdc:title%3e%20SQL%20Database%20(Generic)%20%3c/dc:title%3e%3cdc:format%3e%20image/svg+xml%20%3c/dc:format%3e%3cdc:publisher%3e%20Amido%20Limited%20%3c/dc:publisher%3e%3cdc:creator%3e%20Richard%20Slater%20%3c/dc:creator%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3e%3c/cc:work%3e%3c/rdf:rdf%3e%3c/metadata%3e%3cpath%20d='m%20852.97077,1013.9363%20c%20-6.55238,-0.4723%20-13.02857,-2.1216%20-17.00034,-4.3296%20-2.26232,-1.2576%20-3.98589,-2.8032%20-4.66223,-4.1807%20l%20-0.4024,-0.8196%200,-25.70807%200,-25.7081%200.31843,-0.6465%20c%201.42297,-2.889%205.96432,-5.4935%2012.30378,-7.0562%202.15195,-0.5305%205.2586,-1.0588%207.79304,-1.3252%202.58797,-0.2721%209.44765,-0.2307%2012.02919,0.073%206.86123,0.8061%2012.69967,2.6108%2016.29768,5.0377%201.38756,0.9359%202.81137,2.4334%203.29371,3.4642%20l%200.41358,0.8838%20-0.0354,25.6303%20-0.0354,25.63047%20-0.33195,0.6744%20c%20-0.18257,0.3709%20-0.73406,1.1007%20-1.22553,1.6216%20-2.99181,3.1715%20-9.40919,5.5176%20-17.8267,6.5172%20-1.71567,0.2038%20-9.16916,0.3686%20-10.92937,0.2417%20z%20m%2012.07501,-22.02839%20c%20-0.0252,-0.0657%20-1.00472,-0.93831%20-2.17671,-1.93922%20-1.17199,-1.00091%20-2.18138,-1.86687%20-2.24309,-1.92436%20-0.0617,-0.0575%200.15481,-0.26106%200.48117,-0.45237%200.32635,-0.19131%200.95163,-0.7235%201.3895,-1.18265%201.2805,-1.34272%201.88466,-3.00131%201.88466,-5.17388%200,-2.1388%20-0.65162,-3.8645%20-1.95671,-5.1818%20-1.31533,-1.3278%20-2.82554,-1.8983%20-5.02486,-1.8983%20-3.39007,0%20-5.99368,1.9781%20-6.82468,5.1851%20-0.28586,1.1031%20-0.28432,3.33211%200.003,4.31023%200.74941,2.55136%202.79044,4.40434%205.33062,4.83946%200.8596,0.14724%200.97605,0.21071%201.5621,0.85144%200.34829,0.38078%201.06301,1.14085%201.58827,1.68904%20l%200.95501,0.9967%202.53878,0%20c%201.39633,0%202.51816,-0.0537%202.49296,-0.11939%20z%20m%20-8.70653,-7.10848%20c%20-0.61119,-0.31868%20-0.84225,-0.56599%20-1.19079,-1.27453%20-0.26919,-0.54724%20-0.31522,-0.85851%20-0.31824,-2.15197%20-0.003,-1.3143%200.0388,-1.5983%200.31987,-2.169%200.45985,-0.9339%201.09355,-1.376%202.07384,-1.4469%201.36454,-0.099%202.15217,0.5707%202.56498,2.1801%200.50612,1.97321%20-0.0504,4.07107%20-1.26471,4.76729%20-0.63707,0.36527%20-1.58737,0.40659%20-2.18495,0.095%20z%20m%20-11.25315,3.66269%20c%202.66179,-0.5048%204.1728,-2.0528%204.1728,-4.27495%200,-1.97137%20-0.97548,-3.12004%20-3.6716,-4.32364%20-1.54338,-0.689%20-2.10241,-1.1215%20-2.10241,-1.6268%200,-0.4188%200.53052,-0.8777%201.14813,-0.993%200.60302,-0.1126%202.20237,0.1652%203.14683,0.5467%20l%200.79167,0.3198%200,-1.7524%200,-1.7525%20-0.85923,-0.1906%20c%20-0.53103,-0.1178%20-1.64689,-0.1885%20-2.92137,-0.1849%20-1.80528,0%20-2.15881,0.044%20-2.83818,0.3138%20-1.98445,0.7878%20-2.92613,2.1298%20-2.91107,4.1485%200.0141,1.8898%201.01108,3.06864%203.49227,4.12912%201.46399,0.62572%202.05076,1.10218%202.05076,1.66522%200,1.1965%20-1.99362,1.34375%20-4.10437,0.30315%20-0.57805,-0.28498%20-1.09739,-0.54137%20-1.1541,-0.56976%20-0.0567,-0.0284%20-0.10311,0.79023%20-0.10311,1.81917%200,1.86239%200.002,1.87137%200.33919,1.99974%201.26979,0.48278%204.07626,0.69787%205.52379,0.42335%20z%20m%2030.4308,-1.72766%200,-1.58098%20-2.40584,0%20-2.40583,0%200,-5.43035%200,-5.4303%20-2.13089,0%20-2.13088,0%200,7.0113%200,7.01131%204.53672,0%204.53672,0%200,-1.58098%20z%20m%20-14.84745,-27.70503%20c%204.23447,-0.2937%207.4086,-0.8482%2010.20178,-1.7821%202.78264,-0.9304%204.42643,-2.0562%204.79413,-3.2834%200.14166,-0.4729%200.13146,-0.6523%20-0.0665,-1.1708%20-0.88775,-2.3245%20-5.84694,-4.1104%20-13.42493,-4.8345%20-3.24154,-0.3098%20-9.13671,-0.2094%20-12.22745,0.2081%20-4.71604,0.6372%20-8.54333,1.8208%20-10.2451,3.1683%20-3.44251,2.726%200.19793,5.7242%208.66397,7.1354%203.67084,0.6119%208.42674,0.828%2012.30414,0.559%20z'%20fill='%23E76F00'%20transform='translate(-830.906%20-943.981)'/%3e%3c/g%3e%3c/svg%3e",jp=[{img:"https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",title:"Learn from the Basics of Java",description:"Start with the fundamentals of Java."},{img:"https://hasznaltalma.hu/upload/default/1697487717_1192_ai-jpeg",title:"Master Advanced Techniques",description:"Dive deep into Java's advanced features."},{img:"https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",title:"Boost Your Productivity With Us",description:"Write cleaner, more efficient code with Java."},{img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",title:"Debug with Confidence",description:"Identify, troubleshoot, and fix errors swiftly with precise debugging tools and best practices."},{img:"https://images.unsplash.com/photo-1504639725590-34d0984388bd",title:"Stay Ahead in Tech",description:"Keep your skills relevant, up-to-date, and in line with industry trends."}],WS=()=>{const e=()=>{window.scrollBy({top:550,behavior:"smooth"})};function t(){window.scrollTo({top:0,behavior:"smooth"})}return C.useEffect(()=>{},[]),C.useEffect(()=>{localStorage.getItem("completedModules")||localStorage.setItem("completedModules",JSON.stringify({module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1})),localStorage.getItem("completedProjects")||localStorage.setItem("completedProjects",JSON.stringify({project1:!1,project2:!1,project3:!1,project4:!1,project5:!1}))},[]),console.log(localStorage.getItem("completedProjects")),console.log(localStorage.getItem("completedModules")),c.jsx("div",{className:"landing-page",children:c.jsxs("section",{className:"hero",children:[c.jsxs(xe.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8},children:["Start as a Beginner, ",c.jsx("br",{}),"  End as a ",c.jsx("span",{children:"Java Expert"})]}),c.jsx(xe.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:"Master Java through our detailed course, and learn to create efficient, reliable applications with industry-best practices."}),c.jsxs(xe.div,{className:"btn-container",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6,delay:1},children:[c.jsx(N,{to:"/Java/",onClick:t,className:"cta",children:"Get Started"}),c.jsx(N,{to:"/join/",onClick:t,className:"cta-secondary",children:"Join Us"})]}),c.jsx(xe.a,{className:"invite",onClick:e,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:"Learn more"}),c.jsx(xe.div,{className:"invite-arrow",onClick:e,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:c.jsx(m2,{})}),c.jsxs(xe.div,{className:"welcome",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.4},children:[c.jsxs("div",{className:"header",children:[c.jsxs("div",{className:"action-btn-container",children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]}),c.jsx("p",{children:c.jsx(T0,{words:["Hello.java","World.java"],loop:5,cursor:!0,cursorStyle:"_",typeSpeed:70,deleteSpeed:50,delaySpeed:900})})]}),c.jsx("img",{src:_S,alt:"",draggable:"false"})]}),c.jsxs("div",{className:"why-container",children:[c.jsxs("h2",{children:["Why should you learn ",c.jsx("span",{children:"Java"}),"?"]}),c.jsxs("p",{children:["Learning Java improves your development skills by ",c.jsx("strong",{children:"providing a strong object-oriented foundation"}),", which enhances your ability to build robust and scalable applications. Ready to take your programming to the next level? Discover the power of Java today!"]})]}),c.jsxs("div",{className:"showcase",children:[c.jsxs("div",{className:"logo-container",children:[c.jsx("div",{children:c.jsx("img",{src:HS,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:Cp,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:Gn,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:US,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:wp,alt:""})})]}),c.jsxs("h2",{children:["Here is what we can do ",c.jsx("span",{children:"cross-functionally"})]}),c.jsx("p",{children:"With LearnLab, you can master Java and boost your career prospects, paving the way for that well-deserved raise at your job."}),c.jsx("div",{className:"showcase-content",children:c.jsxs("div",{className:"card-container",children:[c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:JS,alt:""}),c.jsx(gs,{}),c.jsx("img",{src:Gn,alt:""})]}),c.jsxs("div",{className:"bottom",children:[c.jsxs("div",{children:[c.jsx("p",{children:"Number of new members"}),c.jsx("b",{children:"+8020"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Members who uses Java"}),c.jsx("b",{children:"13,139"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"New member growth"}),c.jsx("b",{children:"+120%"})]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:Cp,alt:""}),c.jsx(gs,{}),c.jsx("img",{src:Gn,alt:""})]}),c.jsxs("div",{className:"bottom",children:[c.jsxs("div",{children:[c.jsx("p",{children:"New DataBase Registrations"}),c.jsx("b",{children:"+4,567"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Active Java & Sql Users"}),c.jsx("b",{children:"12,345"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Monthly Growth Rate"}),c.jsx("b",{children:"18%"})]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:wp,alt:""}),c.jsx(gs,{}),c.jsx("img",{src:Gn,alt:""})]}),c.jsxs("div",{className:"bottom",children:[c.jsxs("div",{children:[c.jsx("p",{children:"New Contributors"}),c.jsx("b",{children:"3,210"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Projects Using Java"}),c.jsx("b",{children:"120,109"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Weekly Growth Trend"}),c.jsx("b",{children:"+25%"})]})]})]})]})})]}),c.jsxs("div",{className:"need",children:[c.jsxs("h2",{children:["Everything you need. ",c.jsx("br",{}),c.jsx("span",{children:"Nothing you don't."})]}),c.jsxs("div",{className:"need-content",children:[c.jsx("div",{className:"top",children:jp.slice(0,3).map((n,r)=>c.jsxs("div",{className:"card",children:[c.jsx("img",{src:n.img,alt:n.title}),c.jsxs("div",{className:"text",children:[c.jsx("h4",{children:n.title}),c.jsx("p",{children:n.description})]})]},r))}),c.jsx("div",{className:"bottom",children:jp.slice(3,5).map((n,r)=>c.jsxs("div",{className:"card",children:[c.jsx("img",{src:n.img,alt:n.title}),c.jsxs("div",{className:"text",children:[c.jsx("h4",{children:n.title}),c.jsx("p",{children:n.description})]})]},r))})]})]}),c.jsx("hr",{className:"separator"}),c.jsxs("h2",{children:["See where our ",c.jsx("span",{children:"coding courses"}),"  can take you!"]}),c.jsxs("h2",{children:["All our courses ",c.jsx("span",{children:"are next level..."})]}),c.jsxs("div",{className:"btn-container",children:[c.jsx(N,{to:"/Java/",onClick:t,className:"cta",children:"Get Started"}),c.jsx(N,{to:"/join/",onClick:t,className:"cta-secondary",children:"Join Us"})]}),c.jsx("hr",{className:"separator"})]})})},X={preview:[{type:"header",level:1,text:"Master Java: A Comprehensive Guide for Developers"},{type:"header",level:2,text:"Course Overview"},{type:"point",text:"This course is designed for developers who want to master Java. You will explore the fundamentals of Java, dive into advanced concepts, and learn how to build robust applications using Java. The course will cover how to leverage Java's features in real-world applications, and best practices for Java development."},{type:"header",level:2,text:"Prerequisites"},{type:"point",text:"Basic to intermediate knowledge of programming concepts."},{type:"point",text:"Familiarity with object-oriented programming principles."}],module1:[{type:"margin"},{type:"header",level:2,text:"Module 1: Introduction to Java"},{type:"header",level:3,text:"Lesson 1.1: What is Java?"},{type:"point",text:"Overview of Java: What it is and why it’s useful."},{type:"example",code:`// Java Code
public class Greeting {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`},{type:"point",text:"Java is a versatile, high-level programming language that is used for developing a wide range of applications, from web and mobile apps to large-scale enterprise systems."},{type:"point",text:"Java vs. Other Languages: Key differences."},{type:"example",code:`// Java vs. JavaScript
// Java is statically typed, JavaScript is dynamically typed
int number = 42; // Java
let number = 42; // JavaScript

// Java uses classes and objects, JavaScript uses prototypes
public class Dog { // Java class
  String name;
  void bark() {
    System.out.println("Woof!");
  }
}

let dog = { // JavaScript object
  name: "Buddy",
  bark() {
    console.log("Woof!");
  }
};
`},{type:"point",text:"Java has a strong emphasis on object-oriented programming (OOP), which allows for code reuse, modularity, and maintainability."},{type:"point",text:"Setting up a Java development environment."},{type:"example",code:`// Install Java Development Kit (JDK)
sudo apt-get install openjdk-11-jdk

// Compile a Java program
javac HelloWorld.java

// Run the compiled Java program
java HelloWorld

// Alternatively, use an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse for a more user-friendly development experience.`},{type:"header",level:3,text:"Lesson 1.2: Java Basics"},{type:"point",text:"Basic data types: int, double, char, boolean, and String."},{type:"example",code:`// Declaring variables of different data types
int age = 30; // Integer
double price = 19.99; // Floating-point number
char grade = 'A'; // Character
boolean isJavaFun = true; // Boolean
String greeting = "Hello, World!"; // String

// Displaying variables
System.out.println("Age: " + age);
System.out.println("Price: " + price);
System.out.println("Grade: " + grade);
System.out.println("Is Java Fun? " + isJavaFun);
System.out.println(greeting);`},{type:"point",text:"Control flow: if, switch, for, while, and do-while."},{type:"example",code:`// If statement
if (age > 18) {
  System.out.println("Adult");
} else {
  System.out.println("Minor");
}

// Switch statement
switch (grade) {
  case 'A':
    System.out.println("Excellent");
    break;
  case 'B':
    System.out.println("Good");
    break;
  default:
    System.out.println("Needs Improvement");
    break;
}

// For loop
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

// While loop
int count = 0;
while (count < 5) {
  System.out.println(count);
  count++;
}

// Do-while loop
int num = 0;
do {
  System.out.println(num);
  num++;
} while (num < 5);`},{type:"point",text:"Defining and using methods."},{type:"example",code:`public class Calculator {
  // Method to add two numbers
  public int add(int a, int b) {
    return a + b;
  }

  // Method to subtract two numbers
  public int subtract(int a, int b) {
    return a - b;
  }

  public static void main(String[] args) {
    Calculator calc = new Calculator();
    int sum = calc.add(5, 3);
    int difference = calc.subtract(10, 4);
    System.out.println("Sum: " + sum);
    System.out.println("Difference: " + difference);
  }
}`},{type:"point",text:"Understanding classes and objects."},{type:"example",code:`public class Person {
  // Instance variables
  String name;
  int age;

  // Constructor
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  public void introduce() {
    System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
  }

  public static void main(String[] args) {
    Person person1 = new Person("Alice", 30);
    Person person2 = new Person("Bob", 25);
    person1.introduce();
    person2.introduce();
  }
}`},{type:"point",text:"Creating and using constructors to initialize objects."},{type:"example",code:`public class Car {
  // Instance variables
  String model;
  int year;

  // Constructor to initialize the car
  public Car(String model, int year) {
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  public void displayDetails() {
    System.out.println("Model: " + model + ", Year: " + year);
  }

  public static void main(String[] args) {
    Car car1 = new Car("Toyota Corolla", 2020);
    Car car2 = new Car("Honda Civic", 2021);
    car1.displayDetails();
    car2.displayDetails();
  }
}`},{type:"point",text:"Exploring access modifiers: public, private, and protected."},{type:"example",code:`public class AccessModifiers {
  public String publicVar = "I'm public";
  private String privateVar = "I'm private";
  protected String protectedVar = "I'm protected";

  public void displayAccess() {
    System.out.println(publicVar);
    System.out.println(privateVar);
    System.out.println(protectedVar);
  }

  public static void main(String[] args) {
    AccessModifiers obj = new AccessModifiers();
    obj.displayAccess();
    System.out.println("Public: " + obj.publicVar);
    // The following line would cause an error if uncommented
    // System.out.println("Private: " + obj.privateVar);
  }
}`}],module2:[{type:"margin"},{type:"header",level:2,text:"Module 2: Java Syntax and Conventions"},{type:"header",level:3,text:"Lesson 2.1: Java Syntax Rules"},{type:"point",text:"Basic syntax rules and conventions for writing Java code."},{type:"example",code:`// Java syntax example
public class SyntaxExample {
  public static void main(String[] args) {
    // This is a comment
    int number = 10; // Variable declaration and initialization
    System.out.println("Number: " + number);
  }
}`},{type:"header",level:3,text:"Lesson 2.2: Naming Conventions"},{type:"point",text:"Conventions for naming classes, methods, and variables in Java."},{type:"example",code:`// Naming conventions
public class MyFirstClass { // Class name in PascalCase
  private int myVariable; // Variable name in camelCase

  public void myMethod() { // Method name in camelCase
    // Method body
  }
}`},{type:"header",level:3,text:"Lesson 2.3: Indentation and Code Structure"},{type:"point",text:"Proper indentation practices and code structure for readability."},{type:"example",code:`// Indentation example
public class IndentationExample {
  public static void main(String[] args) {
    int x = 10;
    if (x > 5) {
      System.out.println("x is greater than 5");
    } else {
      System.out.println("x is 5 or less");
    }
  }
}`},{type:"header",level:3,text:"Lesson 2.4: Commenting Code"},{type:"point",text:"Best practices for commenting code: single-line, multi-line, and Javadoc comments."},{type:"example",code:`// Single-line comment
/*
  Multi-line comment
*/

/**
 * This is a Javadoc comment.
 * It describes the functionality of the class or method.
 */
public class CommentExample {
  public static void main(String[] args) {
    // This is a single-line comment explaining the next line
    System.out.println("Hello, World!");
  }
}`},{type:"header",level:3,text:"Lesson 2.5: Common Coding Standards"},{type:"point",text:"Understanding common coding standards like spacing, line length, and braces placement."},{type:"example",code:`// Common coding standards
public class CodingStandards {
  public static void main(String[] args) {
    int number = 5; // One space between variable type and name
    if (number > 0) {
      System.out.println("Positive number"); // Opening brace on the same line
    } else {
      System.out.println("Non-positive number");
    }
  }
}`},{type:"header",level:3,text:"Lesson 2.6: Java Keywords"},{type:"point",text:"Overview of Java keywords and their usage."},{type:"example",code:`// Java keywords example
public class KeywordExample {
  private int number; // 'private' is a keyword

  public KeywordExample(int number) { // 'public' and 'int' are keywords
    this.number = number; // 'this' is a keyword
  }

  public int getNumber() {
    return number;
  }
}`},{type:"header",level:3,text:"Lesson 2.7: Constants and Final Variables"},{type:"point",text:"Defining constants using the 'final' keyword and naming them in uppercase."},{type:"example",code:`// Constants example
public class ConstantsExample {
  public static final int MAX_HEIGHT = 100; // Constant value

  public static void main(String[] args) {
    System.out.println("Max Height: " + MAX_HEIGHT);
  }
}`},{type:"header",level:3,text:"Lesson 2.8: Code Blocks and Scoping"},{type:"point",text:"Understanding code blocks, local and global scope, and variable lifetimes."},{type:"example",code:`// Code blocks and scoping example
public class ScopingExample {
  public static void main(String[] args) {
    int outerVar = 10; // Variable with global scope within main

    {
      int innerVar = 20; // Variable with local scope within this block
      System.out.println("Inner Variable: " + innerVar);
    }

    // innerVar is not accessible here
    System.out.println("Outer Variable: " + outerVar);
  }
}`},{type:"header",level:3,text:"Lesson 2.9: Special Characters and Escape Sequences"},{type:"point",text:"Using special characters and escape sequences in strings."},{type:"example",code:`// Special characters and escape sequences
public class EscapeSequenceExample {
  public static void main(String[] args) {
    System.out.println("This is a newline character: \\n");
    System.out.println("This is a tab character: \\t");
    System.out.println("This is a backslash: \\\\");
    System.out.println("This is a double quote: \\"");
  }
}`},{type:"header",level:3,text:"Lesson 2.10: Primitive Data Types and Default Values"},{type:"point",text:"Overview of Java's primitive data types and their default values."},{type:"example",code:`// Primitive data types example
public class PrimitiveExample {
  byte byteValue; // Default value: 0
  short shortValue; // Default value: 0
  int intValue; // Default value: 0
  long longValue; // Default value: 0L
  float floatValue; // Default value: 0.0f
  double doubleValue; // Default value: 0.0d
  char charValue; // Default value: '\\u0000'
  boolean booleanValue; // Default value: false

  public void printDefaults() {
    System.out.println("byte: " + byteValue);
    System.out.println("short: " + shortValue);
    System.out.println("int: " + intValue);
    System.out.println("long: " + longValue);
    System.out.println("float: " + floatValue);
    System.out.println("double: " + doubleValue);
    System.out.println("char: " + charValue);
    System.out.println("boolean: " + booleanValue);
  }

  public static void main(String[] args) {
    PrimitiveExample example = new PrimitiveExample();
    example.printDefaults();
  }
}`}],module3:[{type:"margin"},{type:"header",level:2,text:"Module 3: Object-Oriented Programming in Java"},{type:"header",level:3,text:"Lesson 3.1: Classes and Objects"},{type:"point",text:"Defining classes and creating objects in Java."},{type:"example",code:`// Class definition
public class Car {
  // Fields (attributes)
  String model;
  int year;

  // Constructor
  public Car(String model, int year) {
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  public void displayInfo() {
    System.out.println("Model: " + model + ", Year: " + year);
  }
}

// Creating and using an object
public class Main {
  public static void main(String[] args) {
    Car myCar = new Car("Toyota", 2021);
    myCar.displayInfo(); // Output: Model: Toyota, Year: 2021
  }
}`},{type:"point",text:"Constructor methods and overloading."},{type:"example",code:`public class Rectangle {
  int width;
  int height;

  // Constructor with width and height
  public Rectangle(int width, int height) {
    this.width = width;
    this.height = height;
  }

  // Overloaded constructor with a single side
  public Rectangle(int side) {
    this.width = side;
    this.height = side;
  }

  // Method to calculate area
  public int area() {
    return width * height;
  }

  public static void main(String[] args) {
    Rectangle rect1 = new Rectangle(10, 5);
    Rectangle square = new Rectangle(6);
    System.out.println("Rectangle area: " + rect1.area()); // Output: Rectangle area: 50
    System.out.println("Square area: " + square.area()); // Output: Square area: 36
  }
}`},{type:"header",level:3,text:"Lesson 3.2: Inheritance and Polymorphism"},{type:"point",text:"Understanding inheritance and polymorphism in Java."},{type:"example",code:`// Base class
public class Animal {
  public void makeSound() {
    System.out.println("Some sound");
  }
}

// Derived class
public class Dog extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Bark");
  }
}

// Using polymorphism
public class Main {
  public static void main(String[] args) {
    Animal myDog = new Dog();
    myDog.makeSound(); // Output: Bark

    // Upcasting example
    Dog realDog = (Dog) myDog;
    realDog.makeSound(); // Output: Bark
  }
}`},{type:"header",level:3,text:"Lesson 3.3: Interfaces and Abstract Classes"},{type:"point",text:"Differences between interfaces and abstract classes, and their usage."},{type:"example",code:`// Interface definition
interface Shape {
  double area();
}

// Abstract class definition
abstract class ShapeBase {
  abstract double area();
  // Common method
  public void display() {
    System.out.println("Area: " + area());
  }
}

// Concrete class implementing interface
public class Circle implements Shape {
  double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  public double area() {
    return Math.PI * radius * radius;
  }

  public static void main(String[] args) {
    Circle circle = new Circle(5.0);
    System.out.println("Area: " + circle.area()); // Output: Area: 78.53981633974483
  }
}

// Concrete class extending abstract class
public class Rectangle extends ShapeBase {
  double width;
  double height;

  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }

  @Override
  public double area() {
    return width * height;
  }

  public static void main(String[] args) {
    Rectangle rectangle = new Rectangle(4.0, 6.0);
    rectangle.display(); // Output: Area: 24.0
  }
}`},{type:"header",level:3,text:"Lesson 3.4: Encapsulation"},{type:"point",text:"Protecting data through access control (public, private, protected)."},{type:"example",code:`public class BankAccount {
  private double balance;

  // Constructor
  public BankAccount(double initialBalance) {
    this.balance = initialBalance;
  }

  // Method to deposit money
  public void deposit(double amount) {
    if (amount > 0) {
      balance += amount;
    }
  }

  // Method to withdraw money
  public void withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
    }
  }

  // Method to get the balance
  public double getBalance() {
    return balance;
  }

  public static void main(String[] args) {
    BankAccount account = new BankAccount(1000);
    account.deposit(500);
    account.withdraw(200);
    System.out.println("Balance: " + account.getBalance()); // Output: Balance: 1300.0
  }
}`},{type:"header",level:3,text:"Lesson 3.5: Composition and Aggregation"},{type:"point",text:"Understanding the concepts of composition and aggregation in object-oriented design."},{type:"example",code:`// Class representing an Engine
public class Engine {
  String type;

  public Engine(String type) {
    this.type = type;
  }
}

// Class representing a Car that uses Composition
public class Car {
  private Engine engine; // Car "has-a" Engine

  public Car(Engine engine) {
    this.engine = engine;
  }

  public void displayEngine() {
    System.out.println("Engine type: " + engine.type);
  }

  public static void main(String[] args) {
    Engine myEngine = new Engine("V8");
    Car myCar = new Car(myEngine);
    myCar.displayEngine(); // Output: Engine type: V8
  }
}

// Class representing a Team
public class Team {
  String name;

  public Team(String name) {
    this.name = name;
  }
}

// Class representing a Sports League that uses Aggregation
import java.util.ArrayList;
import java.util.List;

public class SportsLeague {
  private List<Team> teams; // League "has-a" list of Teams

  public SportsLeague() {
    teams = new ArrayList<>();
  }

  public void addTeam(Team team) {
    teams.add(team);
  }

  public void displayTeams() {
    for (Team team : teams) {
      System.out.println("Team: " + team.name);
    }
  }

  public static void main(String[] args) {
    SportsLeague league = new SportsLeague();
    league.addTeam(new Team("Team A"));
    league.addTeam(new Team("Team B"));
    league.displayTeams(); // Output: Team: Team A, Team: Team B
  }
}`},{type:"header",level:3,text:"Lesson 3.6: Method Overriding vs Method Overloading"},{type:"point",text:"Differences between method overriding and method overloading in Java."},{type:"example",code:`// Method Overloading: Same method name, different parameters
public class MathOperations {
  public int add(int a, int b) {
    return a + b;
  }

  public double add(double a, double b) {
    return a + b;
  }

  public static void main(String[] args) {
    MathOperations math = new MathOperations();
    System.out.println(math.add(5, 10)); // Output: 15
    System.out.println(math.add(5.5, 10.5)); // Output: 16.0
  }
}

// Method Overriding: Subclass redefines a method from the superclass
class Animal {
  public void sound() {
    System.out.println("Animal makes a sound");
  }
}

class Cat extends Animal {
  @Override
  public void sound() {
    System.out.println("Cat meows");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Cat();
    myAnimal.sound(); // Output: Cat meows
  }
}`},{type:"header",level:3,text:"Lesson 3.7: Static vs Instance Members"},{type:"point",text:"Understanding the difference between static and instance members in Java."},{type:"example",code:`public class Counter {
  static int count = 0; // static member
  int instanceCount = 0; // instance member

  public Counter() {
    count++;
    instanceCount++;
  }

  public static void main(String[] args) {
    Counter c1 = new Counter();
    Counter c2 = new Counter();
    Counter c3 = new Counter();

    System.out.println("Total objects created: " + Counter.count); // Output: Total objects created: 3
    System.out.println("Instance count for c1: " + c1.instanceCount); // Output: Instance count for c1: 1
    System.out.println("Instance count for c2: " + c2.instanceCount); // Output: Instance count for c2: 1
  }
}`},{type:"header",level:3,text:"Lesson 3.8: Final Keyword in Java"},{type:"point",text:"Using the final keyword with classes, methods, and variables."},{type:"example",code:`// Final variable
public class FinalExample {
  final int MAX_VALUE = 100;

  public void showValue() {
    System.out.println("Max value: " + MAX_VALUE);
  }

  public static void main(String[] args) {
    FinalExample example = new FinalExample();
    example.showValue(); // Output: Max value: 100
  }
}

// Final method
class Vehicle {
  public final void start() {
    System.out.println("Vehicle is starting");
  }
}

class Car extends Vehicle {
  // Cannot override the start method because it is final
  // public void start() {
  //   System.out.println("Car is starting");
  // }
}

// Final class
final class Utility {
  public static void printMessage() {
    System.out.println("Utility class");
  }
}

// Cannot extend the Utility class because it is final
// class AdvancedUtility extends Utility {
// }

public class Main {
  public static void main(String[] args) {
    Utility.printMessage(); // Output: Utility class
  }
}`},{type:"header",level:3,text:"Lesson 3.9: Exception Handling"},{type:"point",text:"Basics of exception handling: try, catch, and finally blocks."},{type:"example",code:`public class ExceptionHandling {
  public static void main(String[] args) {
    try {
      int result = 10 / 0; // This will throw an ArithmeticException
      System.out.println("Result: " + result);
    } catch (ArithmeticException e) {
      System.out.println("Error: Cannot divide by zero");
    } finally {
      System.out.println("This block is always executed");
    }
  }
}`},{type:"point",text:"Creating custom exceptions."},{type:"example",code:`// Custom exception class
class InsufficientFundsException extends Exception {
  public InsufficientFundsException(String message) {
    super(message);
  }
}

// Bank account class with custom exception
public class BankAccount {
  private double balance;

  public BankAccount(double balance) {
    this.balance = balance;
  }

  public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
      throw new InsufficientFundsException("Insufficient funds in your account");
    }
    balance -= amount;
  }

  public double getBalance() {
    return balance;
  }

  public static void main(String[] args) {
    BankAccount account = new BankAccount(1000);
    try {
      account.withdraw(1500); // This will throw InsufficientFundsException
    } catch (InsufficientFundsException e) {
      System.out.println("Exception: " + e.getMessage());
    }
  }
}`}],module4:[{type:"margin"},{type:"header",level:2,text:"Module 4: Data Structures in Java"},{type:"header",level:3,text:"Lesson 4.1: Arrays"},{type:"point",text:"Creating and using arrays in Java."},{type:"example",code:`// Array example
public class ArrayExample {
  public static void main(String[] args) {
    int[] numbers = {1, 2, 3, 4, 5}; // Array declaration and initialization
    for (int number : numbers) {
      System.out.println(number);
    }
  }
}`},{type:"point",text:"Multi-dimensional arrays."},{type:"example",code:`// Multi-dimensional array example
public class MultiArrayExample {
  public static void main(String[] args) {
    int[][] matrix = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 9}
    };

    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
      }
      System.out.println();
    }
  }
}`},{type:"point",text:"Common array operations (sorting, searching)."},{type:"example",code:`import java.util.Arrays;

public class ArrayOperations {
  public static void main(String[] args) {
    int[] numbers = {5, 3, 8, 1, 2};
    
    // Sorting array
    Arrays.sort(numbers);
    System.out.println("Sorted array: " + Arrays.toString(numbers)); // Output: [1, 2, 3, 5, 8]

    // Searching in array
    int index = Arrays.binarySearch(numbers, 3);
    System.out.println("Index of 3: " + index); // Output: Index of 3: 2
  }
}`},{type:"header",level:3,text:"Lesson 4.2: ArrayLists"},{type:"point",text:"Using ArrayLists for dynamic arrays in Java."},{type:"example",code:`// ArrayList example
import java.util.ArrayList;

public class ArrayListExample {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>();
    list.add("Apple");
    list.add("Banana");
    list.add("Cherry");

    for (String fruit : list) {
      System.out.println(fruit);
    }
  }
}`},{type:"point",text:"Common operations on ArrayLists (adding, removing, searching)."},{type:"example",code:`import java.util.ArrayList;

public class ArrayListOperations {
  public static void main(String[] args) {
    ArrayList<String> list = new ArrayList<>();
    list.add("Apple");
    list.add("Banana");
    list.add("Cherry");

    // Removing an element
    list.remove("Banana");
    System.out.println("List after removal: " + list); // Output: [Apple, Cherry]

    // Searching for an element
    boolean hasApple = list.contains("Apple");
    System.out.println("Contains Apple: " + hasApple); // Output: Contains Apple: true
  }
}`},{type:"point",text:"ArrayList vs Array: When to use which?"},{type:"text",text:"Arrays are of fixed size, meaning once created, their size cannot be changed. They are more efficient in terms of memory and performance, especially when the size of the data structure is known in advance. On the other hand, ArrayLists are dynamic and can grow or shrink as needed, making them more flexible but slightly less performant due to the overhead of resizing the underlying array. Use Arrays when dealing with a fixed number of elements and ArrayLists when the number of elements can change over time."},{type:"header",level:3,text:"Lesson 4.3: LinkedLists"},{type:"point",text:"Understanding LinkedLists and their usage in Java."},{type:"example",code:`// LinkedList example
import java.util.LinkedList;

public class LinkedListExample {
  public static void main(String[] args) {
    LinkedList<String> list = new LinkedList<>();
    list.add("Red");
    list.add("Green");
    list.add("Blue");

    for (String color : list) {
      System.out.println(color);
    }
  }
}`},{type:"point",text:"Comparing LinkedList with ArrayList."},{type:"text",text:"LinkedLists are better suited for scenarios where frequent insertion and deletion of elements are required, as they can be done in constant time O(1). However, they have a higher memory overhead due to the need for storing references to the next and previous elements. On the other hand, ArrayLists offer faster access time O(1) for getting elements by index but have slower performance for insertion and deletion operations, especially in the middle of the list, since elements need to be shifted."},{type:"header",level:3,text:"Lesson 4.4: HashMaps"},{type:"point",text:"Using HashMaps to store key-value pairs in Java."},{type:"example",code:`// HashMap example
import java.util.HashMap;

public class HashMapExample {
  public static void main(String[] args) {
    HashMap<String, Integer> map = new HashMap<>();
    map.put("Alice", 25);
    map.put("Bob", 30);
    map.put("Charlie", 35);

    // Accessing value by key
    System.out.println("Alice's age: " + map.get("Alice")); // Output: Alice's age: 25

    // Iterating over keys and values
    for (String name : map.keySet()) {
      System.out.println(name + ": " + map.get(name));
    }
  }
}`},{type:"point",text:"Handling collisions in HashMaps."},{type:"text",text:"In a HashMap, collisions occur when multiple keys hash to the same index. Java handles collisions by storing multiple key-value pairs in a linked list at the same bucket (index). In the case of many collisions, this can degrade the performance of the HashMap from O(1) to O(n). Java 8 introduced a change where, after a threshold, the list at each bucket is replaced with a balanced tree, improving the worst-case performance to O(log n)."},{type:"point",text:"Using LinkedHashMap for ordered key-value pairs."},{type:"example",code:`// LinkedHashMap example
import java.util.LinkedHashMap;

public class LinkedHashMapExample {
  public static void main(String[] args) {
    LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
    map.put("Apple", 1);
    map.put("Banana", 2);
    map.put("Cherry", 3);

    // Maintaining insertion order
    for (String key : map.keySet()) {
      System.out.println(key + ": " + map.get(key));
    }
  }
}`},{type:"header",level:3,text:"Lesson 4.5: Stacks and Queues"},{type:"point",text:"Understanding the Stack data structure and its usage in Java."},{type:"example",code:`// Stack example
import java.util.Stack;

public class StackExample {
  public static void main(String[] args) {
    Stack<String> stack = new Stack<>();
    stack.push("First");
    stack.push("Second");
    stack.push("Third");

    // Popping elements from the stack
    while (!stack.isEmpty()) {
      System.out.println(stack.pop());
    }
  }
}`},{type:"point",text:"Understanding the Queue data structure and its usage in Java."},{type:"example",code:`// Queue example
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
  public static void main(String[] args) {
    Queue<String> queue = new LinkedList<>();
    queue.add("First");
    queue.add("Second");
    queue.add("Third");

    // Polling elements from the queue
    while (!queue.isEmpty()) {
      System.out.println(queue.poll());
    }
  }
}`},{type:"point",text:"Deque as a double-ended queue."},{type:"example",code:`// Deque example
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {
  public static void main(String[] args) {
    Deque<String> deque = new ArrayDeque<>();
    
    // Adding elements to both ends
    deque.addFirst("First");
    deque.addLast("Second");
    deque.addLast("Third");
    
    // Removing elements from both ends
    System.out.println("Removed from front: " + deque.removeFirst());
    System.out.println("Removed from end: " + deque.removeLast());
    
    // Displaying remaining elements
    System.out.println("Remaining elements: " + deque);
  }
}`},{type:"point",text:"Choosing between Stack, Queue, and Deque based on use cases."},{type:"text",text:`- **Stack**: A last-in, first-out (LIFO) data structure. Use when you need to keep track of data in a reverse order, like in undo functionality.
- **Queue**: A first-in, first-out (FIFO) data structure. Use when you need to process elements in the order they were added, such as task scheduling.
- **Deque**: A double-ended queue that allows insertion and removal from both ends. Use when you need flexibility to add and remove elements from either end efficiently, like in a sliding window algorithm.`},{type:"header",level:3,text:"Lesson 4.6: Trees and Graphs"},{type:"point",text:"Introduction to Tree data structures."},{type:"example",code:`// Basic Tree Node example
public class TreeNode {
  int value;
  TreeNode left;
  TreeNode right;

  public TreeNode(int value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    System.out.println("Root value: " + root.value); // Output: Root value: 1
    System.out.println("Left child value: " + root.left.value); // Output: Left child value: 2
    System.out.println("Right child value: " + root.right.value); // Output: Right child value: 3
  }
}`},{type:"point",text:"Introduction to Graph data structures."},{type:"example",code:`// Basic Graph example using adjacency list
import java.util.ArrayList;
import java.util.List;

public class GraphExample {
  private List<List<Integer>> adjList;

  public GraphExample(int vertices) {
    adjList = new ArrayList<>();
    for (int i = 0; i < vertices; i++) {
      adjList.add(new ArrayList<>());
    }
  }

  public void addEdge(int v, int w) {
    adjList.get(v).add(w);
    adjList.get(w).add(v); // For undirected graph
  }

  public void printGraph() {
    for (int i = 0; i < adjList.size(); i++) {
      System.out.print("Vertex " + i + ": ");
      for (Integer edge : adjList.get(i)) {
        System.out.print(edge + " ");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    GraphExample graph = new GraphExample(5);
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);

    graph.printGraph();
  }
}`}],module5:[{type:"margin"},{type:"header",level:2,text:"Module 5: Basic Input and Output"},{type:"header",level:3,text:"Lesson 7.1: Reading User Input"},{type:"point",text:"Using Scanner for user input."},{type:"example",code:`import java.util.Scanner;

  public class InputExample {
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Enter your name: ");
      String name = scanner.nextLine();
      System.out.println("Hello, " + name + "!");
    }
  }`},{type:"header",level:3,text:"Lesson 7.2: Writing Output"},{type:"point",text:"Using System.out.println for output."},{type:"example",code:`// Output example
  public class OutputExample {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
      System.out.printf("Formatted output: %d%n", 42);
    }
  }`}],module6:[{type:"margin"},{type:"header",level:2,text:"Module 6: Debugging and Error Handling"},{type:"header",level:3,text:"Lesson 6.1: Debugging Techniques"},{type:"point",text:"Using print statements and debugging tools."},{type:"example",code:`// Debugging example with enhanced logging
import java.util.logging.Level;
import java.util.logging.Logger;

public class DebuggingExample {
  private static final Logger logger = Logger.getLogger(DebuggingExample.class.getName());

  public static void main(String[] args) {
    int result = calculateSum(5, 7);
    logger.log(Level.INFO, "Result: {0}", result);
  }

  public static int calculateSum(int a, int b) {
    int sum = a + b;
    logger.log(Level.INFO, "Debug: sum = {0}", sum); // Debug statement using Logger
    return sum;
  }
}`},{type:"point",text:"Using IDE Debugger Features."},{type:"text",text:`- **Breakpoints**: Pause execution at specific lines to inspect variables and control flow.
- **Step Over/Into/Out**: Navigate through the code line by line or enter/exit methods.
- **Variable Watches**: Monitor variable values in real-time.
- **Call Stack**: View the sequence of method calls leading to the current execution point.`},{type:"header",level:3,text:"Lesson 6.2: Exception Handling Best Practices"},{type:"point",text:"Best practices for handling exceptions."},{type:"example",code:`// Improved exception handling example
public class ImprovedExceptionHandlingExample {
  public static void main(String[] args) {
    try {
      performDivision(10, 0);
    } catch (ArithmeticException e) {
      System.out.println("Error: Division by zero. Details: " + e.getMessage());
    } catch (Exception e) {
      System.out.println("An unexpected error occurred: " + e.getMessage());
    } finally {
      System.out.println("Execution completed.");
    }
  }

  public static void performDivision(int a, int b) {
    if (b == 0) {
      throw new ArithmeticException("Cannot divide by zero");
    }
    System.out.println("Result: " + (a / b));
  }
}`},{type:"point",text:"Creating Custom Exceptions."},{type:"example",code:`// Custom exception example
public class CustomExceptionExample {
  public static void main(String[] args) {
    try {
      checkAge(15);
    } catch (AgeException e) {
      System.out.println("Caught custom exception: " + e.getMessage());
    }
  }

  public static void checkAge(int age) throws AgeException {
    if (age < 18) {
      throw new AgeException("Age must be 18 or older.");
    }
    System.out.println("Age is valid.");
  }
}

// Custom exception class
class AgeException extends Exception {
  public AgeException(String message) {
    super(message);
  }
}`},{type:"point",text:"Exception Chaining."},{type:"example",code:`// Exception chaining example
public class ExceptionChainingExample {
  public static void main(String[] args) {
    try {
      method1();
    } catch (Exception e) {
      System.out.println("Caught in main: " + e.getMessage());
    }
  }

  public static void method1() throws Exception {
    try {
      method2();
    } catch (Exception e) {
      throw new Exception("Exception occurred in method1", e);
    }
  }

  public static void method2() throws Exception {
    throw new Exception("Original exception from method2");
  }
}`},{type:"header",level:3,text:"Lesson 6.3: Advanced Debugging and Error Handling"},{type:"point",text:"Using Logging Frameworks for Error Tracking."},{type:"point",text:"- Log4j: A popular logging framework that provides fine-grained control over logging levels and output."},{type:"point",text:"- SLF4J: A facade for various logging frameworks, allowing you to switch implementations without changing code."},{type:"point",text:"- Java Util Logging: The built-in logging framework in Java, which can be configured to output to various destinations."},{type:"example",code:`// Example using Log4j for logging
import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

public class Log4jExample {
  private static final Logger logger = Logger.getLogger(Log4jExample.class);

  public static void main(String[] args) {
    BasicConfigurator.configure(); // Configure Log4j with default settings
    logger.info("This is an info message");
    logger.error("This is an error message");
  }
}`},{type:"point",text:"Handling Errors in Multi-threaded Applications."},{type:"point",text:"- Thread Interruption: Handle 'InterruptedException' to properly manage thread interruptions."},{type:"point",text:"- Concurrency Issues: Use synchronization to prevent data corruption in concurrent access scenarios."},{type:"point",text:"- Thread Pools: Utilize 'ExecutorService' to manage and monitor threads effectively."},{type:"example",code:`// Handling thread interruption
public class ThreadInterruptionExample {
  public static void main(String[] args) {
    Thread thread = new Thread(() -> {
      try {
        Thread.sleep(5000);
      } catch (InterruptedException e) {
        System.out.println("Thread was interrupted");
      }
    });

    thread.start();
    thread.interrupt(); // Interrupt the thread
  }
}`}],module7:[{type:"margin"},{type:"header",level:2,text:"Module 7: Advanced Java Programming"},{type:"header",level:3,text:"Lesson 7.1: Generics and Collections"},{type:"point",text:"Using generics in classes and methods."},{type:"example",code:`// Generic class
public class Box<T> {
  private T content;

  public void setContent(T content) {
    this.content = content;
  }

  public T getContent() {
    return content;
  }
}

// Usage
Box<String> stringBox = new Box<>();
stringBox.setContent("Hello");
String content = stringBox.getContent();`},{type:"point",text:"Working with Java Collections Framework."},{type:"example",code:`// Using ArrayList
import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

for (String name : names) {
  System.out.println(name);
}

// Using HashMap
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 30);
ages.put("Bob", 25);

for (Map.Entry<String, Integer> entry : ages.entrySet()) {
  System.out.println(entry.getKey() + ": " + entry.getValue());
}`},{type:"header",level:3,text:"Lesson 7.2: Exception Handling and File I/O"},{type:"point",text:"Handling exceptions with try-catch."},{type:"example",code:`// Exception handling
try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero");
} finally {
  System.out.println("Execution completed");
}`},{type:"point",text:"Working with files: reading and writing."},{type:"example",code:`// Reading from a file
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
  String line;
  while ((line = br.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  e.printStackTrace();
}

// Writing to a file
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
  bw.write("Hello, World!");
} catch (IOException e) {
  e.printStackTrace();
}`}],module8:[{type:"margin"},{type:"header",level:2,text:"Module 8: Collections Framework"},{type:"header",level:3,text:"Lesson 8.1: List Interface"},{type:"point",text:"Understanding and using List implementations like ArrayList and LinkedList."},{type:"example",code:`// List example using ArrayList and LinkedList
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ListExample {
  public static void main(String[] args) {
    List<String> arrayList = new ArrayList<>();
    arrayList.add("Apple");
    arrayList.add("Banana");
    arrayList.add("Cherry");

    // ArrayList operations
    System.out.println("ArrayList: " + arrayList);
    arrayList.remove("Banana");
    System.out.println("ArrayList after removal: " + arrayList);
    System.out.println("ArrayList contains Apple? " + arrayList.contains("Apple"));
    System.out.println("ArrayList size: " + arrayList.size());

    List<String> linkedList = new LinkedList<>();
    linkedList.add("Xylophone");
    linkedList.add("Zebra");

    // LinkedList operations
    System.out.println("LinkedList: " + linkedList);
    linkedList.addFirst("Apple");
    linkedList.addLast("Banana");
    System.out.println("LinkedList after additions: " + linkedList);
    System.out.println("LinkedList first element: " + linkedList.getFirst());
    System.out.println("LinkedList last element: " + linkedList.getLast());
  }
}`},{type:"header",level:3,text:"Lesson 8.2: Set Interface"},{type:"point",text:"Using Set implementations like HashSet and TreeSet."},{type:"example",code:`// Set example using HashSet and TreeSet
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetExample {
  public static void main(String[] args) {
    Set<String> hashSet = new HashSet<>();
    hashSet.add("Dog");
    hashSet.add("Cat");
    hashSet.add("Bird");
    hashSet.add("Cat"); // Duplicate element (won't be added)

    // HashSet operations
    System.out.println("HashSet: " + hashSet);
    hashSet.remove("Bird");
    System.out.println("HashSet after removal: " + hashSet);
    System.out.println("HashSet contains Cat? " + hashSet.contains("Cat"));
    System.out.println("HashSet size: " + hashSet.size());

    Set<String> treeSet = new TreeSet<>();
    treeSet.add("Cherry");
    treeSet.add("Apple");
    treeSet.add("Banana");

    // TreeSet operations
    System.out.println("TreeSet: " + treeSet); // Sorted order
    System.out.println("TreeSet first element: " + treeSet.first());
    System.out.println("TreeSet last element: " + treeSet.last());
    System.out.println("TreeSet size: " + treeSet.size());
  }
}`},{type:"header",level:3,text:"Lesson 8.3: Map Interface"},{type:"point",text:"Using Map implementations like HashMap and TreeMap."},{type:"example",code:`// Map example using HashMap and TreeMap
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class MapExample {
  public static void main(String[] args) {
    Map<String, Integer> hashMap = new HashMap<>();
    hashMap.put("Alice", 30);
    hashMap.put("Bob", 25);
    hashMap.put("Charlie", 35);

    // HashMap operations
    System.out.println("HashMap: " + hashMap);
    System.out.println("HashMap value for Bob: " + hashMap.get("Bob"));
    hashMap.remove("Charlie");
    System.out.println("HashMap after removal: " + hashMap);
    System.out.println("HashMap size: " + hashMap.size());

    Map<String, Integer> treeMap = new TreeMap<>();
    treeMap.put("Delta", 40);
    treeMap.put("Echo", 20);
    treeMap.put("Foxtrot", 30);

    // TreeMap operations
    System.out.println("TreeMap: " + treeMap); // Sorted by keys
    System.out.println("TreeMap first key: " + treeMap.firstKey());
    System.out.println("TreeMap last key: " + treeMap.lastKey());
    System.out.println("TreeMap size: " + treeMap.size());
  }
}`},{type:"header",level:3,text:"Lesson 8.4: Queue Interface"},{type:"point",text:"Using Queue implementations like PriorityQueue and ArrayDeque."},{type:"example",code:`// Queue example using PriorityQueue and ArrayDeque
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.ArrayDeque;
import java.util.Deque;

public class QueueExample {
  public static void main(String[] args) {
    Queue<String> priorityQueue = new PriorityQueue<>();
    priorityQueue.add("Peach");
    priorityQueue.add("Apple");
    priorityQueue.add("Banana");

    // PriorityQueue operations
    System.out.println("PriorityQueue: " + priorityQueue);
    System.out.println("PriorityQueue poll: " + priorityQueue.poll());
    System.out.println("PriorityQueue after poll: " + priorityQueue);

    Deque<String> arrayDeque = new ArrayDeque<>();
    arrayDeque.add("Front");
    arrayDeque.addLast("Back");

    // ArrayDeque operations
    System.out.println("ArrayDeque: " + arrayDeque);
    arrayDeque.addFirst("New Front");
    System.out.println("ArrayDeque after addFirst: " + arrayDeque);
    System.out.println("ArrayDeque removeFirst: " + arrayDeque.removeFirst());
    System.out.println("ArrayDeque after removeFirst: " + arrayDeque);
  }
}`},{type:"header",level:3,text:"Lesson 8.5: Collection Utilities"},{type:"point",text:"Using utility classes from the `java.util.Collections` class."},{type:"example",code:`// Collection utilities example
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CollectionUtilitiesExample {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Apple");
    list.add("Banana");
    list.add("Cherry");

    // Collections utility methods
    System.out.println("Original list: " + list);
    Collections.shuffle(list);
    System.out.println("Shuffled list: " + list);
    Collections.sort(list);
    System.out.println("Sorted list: " + list);
    System.out.println("List max element: " + Collections.max(list));
    System.out.println("List min element: " + Collections.min(list));
  }
}`},{type:"header",level:3,text:"Lesson 8.6: Custom Collection Implementations"},{type:"point",text:"Implementing your own collection classes."},{type:"example",code:`// Custom collection implementation example
import java.util.AbstractList;

public class CustomList<E> extends AbstractList<E> {
  private Object[] elements;
  private int size;

  public CustomList(int capacity) {
    elements = new Object[capacity];
    size = 0;
  }

  @Override
  public E get(int index) {
    if (index >= size || index < 0) {
      throw new IndexOutOfBoundsException();
    }
    return (E) elements[index];
  }

  @Override
  public int size() {
    return size;
  }

  @Override
  public boolean add(E e) {
    if (size == elements.length) {
      ensureCapacity();
    }
    elements[size++] = e;
    return true;
  }

  private void ensureCapacity() {
    int newSize = elements.length * 2;
    Object[] newElements = new Object[newSize];
    System.arraycopy(elements, 0, newElements, 0, size);
    elements = newElements;
  }

  public static void main(String[] args) {
    CustomList<String> customList = new CustomList<>(2);
    customList.add("Hello");
    customList.add("World");
    customList.add("!");
    System.out.println("Custom list: " + customList);
  }
}`}],module9:[{type:"margin"},{type:"header",level:2,text:"Module 9: Java Streams and Lambdas"},{type:"header",level:3,text:"Lesson 9.1: Introduction to Streams"},{type:"point",text:"Using Streams to process collections."},{type:"point",text:"Streams are a powerful abstraction for processing sequences of elements, supporting sequential and parallel operations."},{type:"example",code:`// Stream example
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

    // Creating a stream from the list
    List<String> filteredNames = names.stream()
                    .filter(name -> name.startsWith("J")) // Filtering names that start with 'J'
                    .map(String::toUpperCase) // Converting each name to uppercase
                    .sorted() // Sorting the names
                    .collect(Collectors.toList()); // Collecting the results into a new list

    System.out.println("Filtered and Processed Names: " + filteredNames);
  }
}`},{type:"point",text:"The stream pipeline consists of a sequence of operations: source, intermediate operations (filter, map, etc.), and terminal operations (collect, forEach, etc.)."},{type:"point",text:"Intermediate operations are lazy, meaning they are not executed until a terminal operation is invoked."},{type:"header",level:3,text:"Lesson 9.2: Lambda Expressions"},{type:"point",text:"Using Lambda expressions for concise code."},{type:"point",text:"Lambda expressions provide a clear and concise way to represent a function interface using an expression."},{type:"example",code:`// Lambda expression example
import java.util.Arrays;
import java.util.List;

public class LambdaExample {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

    // Using lambda expressions to iterate and print names
    names.forEach(name -> System.out.println(name));

    // Sorting using lambda expressions
    names.sort((a, b) -> b.compareTo(a)); // Sorting in reverse alphabetical order
    System.out.println("Sorted Names: " + names);
  }
}`},{type:"point",text:"Lambda syntax: (parameters) -> expression. Lambda expressions can have zero or more parameters and can return a value."},{type:"point",text:"Common use cases for lambdas include functional interfaces such as `Runnable`, `Callable`, and the `Consumer`, `Function`, and `Predicate` interfaces from `java.util.function`."},{type:"header",level:3,text:"Lesson 9.3: Stream Intermediate Operations"},{type:"point",text:"Common intermediate operations include `filter`, `map`, `flatMap`, `distinct`, `sorted`, and `limit`."},{type:"example",code:`// Stream intermediate operations example
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamIntermediateExample {
  public static void main(String[] args) {
    List<String> sentences = Arrays.asList("Hello world", "Java Streams are cool", "Lambda expressions are powerful");

    List<String> words = sentences.stream()
                    .flatMap(sentence -> Arrays.stream(sentence.split(" "))) // Flattening lists of words
                    .distinct() // Removing duplicates
                    .sorted() // Sorting words
                    .limit(5) // Limiting to first 5 elements
                    .collect(Collectors.toList());

    System.out.println("Processed Words: " + words);
  }
}`},{type:"point",text:"The `flatMap` operation is used to flatten a stream of collections into a single stream."},{type:"point",text:"Intermediate operations do not modify the source but return a new stream."},{type:"header",level:3,text:"Lesson 9.4: Stream Terminal Operations"},{type:"point",text:"Terminal operations include `collect`, `forEach`, `reduce`, `count`, `min`, `max`, and `anyMatch`."},{type:"example",code:`// Stream terminal operations example
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class StreamTerminalExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

    // Reduce example
    Optional<Integer> sum = numbers.stream()
                      .reduce((a, b) -> a + b); // Summing elements
    System.out.println("Sum: " + sum.orElse(0));

    // Count example
    long count = numbers.stream()
                    .filter(num -> num % 2 == 0) // Filtering even numbers
                    .count();
    System.out.println("Count of even numbers: " + count);

    // AnyMatch example
    boolean anyGreaterThanThree = numbers.stream()
                    .anyMatch(num -> num > 3); // Check if any number is greater than 3
    System.out.println("Any number greater than 3? " + anyGreaterThanThree);
  }
}`},{type:"point",text:"Terminal operations produce a result or a side-effect and terminate the stream."},{type:"point",text:"For example, `collect` gathers the results into a collection, while `forEach` performs an action for each element."},{type:"header",level:3,text:"Lesson 9.5: Combining Streams and Lambdas"},{type:"point",text:"Combining streams with lambda expressions to perform complex data processing tasks."},{type:"example",code:`// Combining streams and lambdas example
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CombinedStreamLambdaExample {
  public static void main(String[] args) {
    List<String> phrases = Arrays.asList("The quick brown fox", "jumps over", "the lazy dog");

    // Combining streams and lambdas for complex processing
    List<String> result = phrases.stream()
                    .flatMap(phrase -> Arrays.stream(phrase.split(" "))) // Flattening words
                    .map(String::toLowerCase) // Converting to lowercase
                    .filter(word -> word.length() > 3) // Filtering words longer than 3 characters
                    .distinct() // Removing duplicates
                    .sorted() // Sorting words
                    .collect(Collectors.toList()); // Collecting results

    System.out.println("Processed Words: " + result);
  }
}`},{type:"point",text:"Complex processing often involves chaining multiple operations and utilizing both intermediate and terminal operations."},{type:"point",text:"Understanding how to effectively use streams and lambdas can lead to more concise and readable code."}],module10:[{type:"margin"},{type:"header",level:2,text:"Module 10: Multithreading and Concurrency"},{type:"header",level:3,text:"Lesson 10.1: Basics of Multithreading"},{type:"point",text:"Creating and managing threads."},{type:"point",text:"Multithreading allows multiple threads to run concurrently, making efficient use of CPU resources and improving performance."},{type:"point",text:"Threads in Java can be created by either implementing the `Runnable` interface or extending the `Thread` class."},{type:"example",code:`// Multithreading example using Runnable
public class MultithreadingExample {
  public static void main(String[] args) {
    // Runnable task
    Runnable task = () -> {
      for (int i = 0; i < 5; i++) {
        System.out.println("Task running in thread " + Thread.currentThread().getName());
      }
    };

    // Creating threads
    Thread thread1 = new Thread(task, "Thread-1");
    Thread thread2 = new Thread(task, "Thread-2");

    // Starting threads
    thread1.start();
    thread2.start();
  }
}`},{type:"point",text:"In the example, two threads are created and started. They execute the same task concurrently, demonstrating basic multithreading."},{type:"header",level:3,text:"Lesson 10.2: Synchronization and Concurrency Utilities"},{type:"point",text:"Using synchronization to prevent thread interference."},{type:"point",text:"Thread interference occurs when multiple threads access shared data simultaneously, potentially leading to inconsistent or incorrect results."},{type:"point",text:"Synchronization is used to control the access of multiple threads to shared resources, ensuring that only one thread can access the resource at a time."},{type:"example",code:`// Synchronization example
public class Counter {
  private int count = 0;

  // Synchronized method to ensure thread safety
  public synchronized void increment() {
    count++;
  }

  public int getCount() {
    return count;
  }
}

public class SynchronizedExample {
  public static void main(String[] args) {
    Counter counter = new Counter();

    Runnable task = () -> {
      for (int i = 0; i < 1000; i++) {
        counter.increment();
      }
    };

    // Creating threads
    Thread thread1 = new Thread(task);
    Thread thread2 = new Thread(task);

    // Starting threads
    thread1.start();
    thread2.start();

    try {
      // Waiting for threads to finish
      thread1.join();
      thread2.join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    // Output the final count
    System.out.println("Final Count: " + counter.getCount());
  }
}`},{type:"point",text:"In the example, the `increment` method is synchronized to prevent thread interference. Each thread waits its turn to execute this method, ensuring data consistency."},{type:"header",level:3,text:"Lesson 10.3: Advanced Synchronization Techniques"},{type:"point",text:"Advanced synchronization techniques include using `ReentrantLock`, `ReadWriteLock`, and concurrent collections."},{type:"point",text:"The `ReentrantLock` class provides more flexibility than synchronized blocks, including try-lock and timed lock features."},{type:"example",code:`// ReentrantLock example
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockExample {
  private static final Lock lock = new ReentrantLock();
  private static int count = 0;

  public static void main(String[] args) {
    Runnable task = () -> {
      for (int i = 0; i < 1000; i++) {
        lock.lock();
        try {
          count++;
        } finally {
          lock.unlock();
        }
      }
    };

    Thread thread1 = new Thread(task);
    Thread thread2 = new Thread(task);

    thread1.start();
    thread2.start();

    try {
      thread1.join();
      thread2.join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    System.out.println("Final Count: " + count);
  }
}`},{type:"point",text:"In this example, `ReentrantLock` is used to provide thread-safe access to the shared `count` variable. The `lock` and `unlock` methods ensure that only one thread can update the count at a time."},{type:"header",level:3,text:"Lesson 10.4: Concurrency Utilities"},{type:"point",text:"Java provides several utilities in the `java.util.concurrent` package to simplify concurrent programming."},{type:"point",text:"Key utilities include `ExecutorService` for managing thread pools, `Callable` for tasks that return results, and `Future` for handling asynchronous computation results."},{type:"example",code:`// ExecutorService example
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ExecutorService;

public class ExecutorServiceExample {
  public static void main(String[] args) throws Exception {
    ExecutorService executor = Executors.newFixedThreadPool(2);

    Callable<Integer> task = () -> {
      Thread.sleep(1000); // Simulate work
      return 123;
    };

    Future<Integer> future = executor.submit(task);

    // Retrieve the result
    Integer result = future.get();
    System.out.println("Task result: " + result);

    executor.shutdown();
  }
}`},{type:"point",text:"The `ExecutorService` manages a pool of threads and executes tasks asynchronously. The `Future` interface is used to retrieve results from these tasks."},{type:"header",level:3,text:"Lesson 10.5: Thread Safety and Avoiding Deadlocks"},{type:"point",text:"Ensuring thread safety involves careful management of shared resources and synchronization to prevent race conditions and deadlocks."},{type:"point",text:"A deadlock occurs when two or more threads are waiting for each other to release resources, resulting in a standstill."},{type:"point",text:"Avoiding deadlocks involves strategies such as acquiring locks in a consistent order, using timeout mechanisms, and avoiding nested locks."},{type:"example",code:`// Deadlock example
public class DeadlockExample {
  private static final Object lock1 = new Object();
  private static final Object lock2 = new Object();

  public static void main(String[] args) {
    Runnable task1 = () -> {
      synchronized (lock1) {
        System.out.println("Thread 1: Holding lock 1...");
        try { Thread.sleep(100); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("Thread 1: Waiting for lock 2...");
        synchronized (lock2) {
          System.out.println("Thread 1: Acquired lock 2!");
        }
      }
    };

    Runnable task2 = () -> {
      synchronized (lock2) {
        System.out.println("Thread 2: Holding lock 2...");
        try { Thread.sleep(100); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("Thread 2: Waiting for lock 1...");
        synchronized (lock1) {
          System.out.println("Thread 2: Acquired lock 1!");
        }
      }
    };

    Thread thread1 = new Thread(task1);
    Thread thread2 = new Thread(task2);

    thread1.start();
    thread2.start();
  }
}`},{type:"point",text:"In the example, `thread1` and `thread2` each hold one lock while waiting for the other, resulting in a deadlock situation."}],module11:[{type:"margin"},{type:"header",level:2,text:"Module 11: Networking in Java"},{type:"header",level:3,text:"Lesson 11.1: Basics of Java Networking"},{type:"point",text:"Understanding sockets and basic networking concepts."},{type:"point",text:"Networking in Java involves using sockets to establish communication between a client and a server over a network."},{type:"point",text:"A `ServerSocket` is used by the server to listen for incoming connections, while a `Socket` is used by the client to connect to the server."},{type:"example",code:`// Simple client-server example

// Server code
import java.io.*;
import java.net.*;

public class SimpleServer {
  public static void main(String[] args) throws IOException {
    ServerSocket serverSocket = new ServerSocket(12345);
    System.out.println("Server started. Waiting for a client...");
    Socket clientSocket = serverSocket.accept();
    System.out.println("Client connected.");

    PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

    String inputLine;
    while ((inputLine = in.readLine()) != null) {
      out.println("Server received: " + inputLine);
    }

    in.close();
    out.close();
    clientSocket.close();
    serverSocket.close();
  }
}

// Client code
import java.io.*;
import java.net.*;

public class SimpleClient {
  public static void main(String[] args) throws IOException {
    Socket socket = new Socket("localhost", 12345);
    PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

    out.println("Hello Server");
    String response = in.readLine();
    System.out.println("Server response: " + response);

    in.close();
    out.close();
    socket.close();
  }
}`},{type:"point",text:"In this example, the server listens for connections on port 12345 and responds to messages from the client. The client connects to the server, sends a message, and prints the server's response."},{type:"header",level:3,text:"Lesson 11.2: HTTP Networking"},{type:"point",text:"Using HTTP requests with `HttpURLConnection` for communication over the web."},{type:"point",text:"The `HttpURLConnection` class is used to make HTTP requests and handle responses from web servers."},{type:"point",text:"You can use methods like `setRequestMethod`, `getInputStream`, and `disconnect` to interact with the server and handle the response."},{type:"example",code:`// HTTP request example
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpExample {
  public static void main(String[] args) throws Exception {
    URL url = new URL("https://jsonplaceholder.typicode.com/posts/1");
    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
    connection.setRequestMethod("GET");

    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
    String inputLine;
    StringBuilder content = new StringBuilder();

    while ((inputLine = in.readLine()) != null) {
      content.append(inputLine);
    }

    in.close();
    connection.disconnect();

    System.out.println("Response: " + content.toString());
  }
}`},{type:"point",text:"This example demonstrates how to perform a GET request to a web API, read the response, and output it. The `HttpURLConnection` is configured to make the request and handle the response appropriately."},{type:"header",level:3,text:"Lesson 11.3: Advanced Networking Techniques"},{type:"point",text:"Advanced networking techniques include handling different types of HTTP requests, managing cookies, and dealing with various response codes."},{type:"point",text:"Understanding these advanced techniques allows for more robust and interactive network communication, such as handling POST requests and managing authentication."},{type:"example",code:`// Advanced HTTP request example: POST request with JSON
import java.io.OutputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class AdvancedHttpExample {
  public static void main(String[] args) throws Exception {
    URL url = new URL("https://jsonplaceholder.typicode.com/posts");
    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
    connection.setRequestMethod("POST");
    connection.setRequestProperty("Content-Type", "application/json; utf-8");
    connection.setRequestProperty("Accept", "application/json");
    connection.setDoOutput(true);

    String jsonInputString = "{"title": "foo", "body": "bar", "userId": 1}";

    try (OutputStream os = connection.getOutputStream()) {
      byte[] input = jsonInputString.getBytes("utf-8");
      os.write(input, 0, input.length);
    }

    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
    String inputLine;
    StringBuilder response = new StringBuilder();

    while ((inputLine = in.readLine()) != null) {
      response.append(inputLine.trim());
    }

    in.close();
    connection.disconnect();

    System.out.println("Response: " + response.toString());
  }
}`},{type:"point",text:"In this example, a POST request is made to send JSON data to the server. The request headers are set for content type and accepted response format. The response from the server is read and printed."}],module12:[{type:"margin"},{type:"header",level:2,text:"Module 12: Java Database Connectivity (JDBC)"},{type:"header",level:3,text:"Lesson 12.1: Introduction to JDBC"},{type:"point",text:"Connecting to a database and executing queries."},{type:"point",text:"JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases using SQL."},{type:"point",text:"The `DriverManager` class is used to establish a connection to the database. You need to specify the database URL, username, and password."},{type:"point",text:"A `Statement` object is used to execute SQL queries. The `ResultSet` object holds the results returned by the query."},{type:"example",code:`// JDBC example
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcExample {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/mydatabase";
    String user = "root";
    String password = "password";

    try (Connection connection = DriverManager.getConnection(url, user, password);
         Statement statement = connection.createStatement();
         ResultSet resultSet = statement.executeQuery("SELECT * FROM mytable")) {

      while (resultSet.next()) {
        System.out.println("ID: " + resultSet.getInt("id") + ", Name: " + resultSet.getString("name"));
      }

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`},{type:"point",text:"This example demonstrates connecting to a MySQL database, executing a query to retrieve data from a table, and processing the results."},{type:"header",level:3,text:"Lesson 12.2: Prepared Statements and Transactions"},{type:"point",text:"Using prepared statements to prevent SQL injection and manage transactions for maintaining data integrity."},{type:"point",text:"Prepared statements are precompiled SQL statements that improve performance and security by avoiding SQL injection attacks."},{type:"point",text:"Transactions are used to ensure that a series of database operations are completed successfully or not at all, maintaining the integrity of the database."},{type:"example",code:`// Prepared Statement and Transaction example
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcPreparedStatementExample {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/mydatabase";
    String user = "root";
    String password = "password";

    try (Connection connection = DriverManager.getConnection(url, user, password)) {
      connection.setAutoCommit(false); // Disable auto-commit mode

      String insertSQL = "INSERT INTO mytable (name) VALUES (?)";
      try (PreparedStatement preparedStatement = connection.prepareStatement(insertSQL)) {
        preparedStatement.setString(1, "John Doe");
        preparedStatement.executeUpdate();

        // Commit transaction
        connection.commit();
      } catch (SQLException e) {
        // Rollback transaction on error
        connection.rollback();
        e.printStackTrace();
      }

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`},{type:"point",text:"In this example, a transaction is started by setting `autoCommit` to `false`. After executing the prepared statement, the transaction is committed if successful. If an error occurs, the transaction is rolled back to maintain data integrity."},{type:"header",level:3,text:"Lesson 12.3: Handling Database Metadata and Batch Processing"},{type:"point",text:"Retrieving database metadata and performing batch processing for efficiency."},{type:"point",text:"Database metadata can provide information about database structure, such as tables, columns, and data types, using the `DatabaseMetaData` class."},{type:"point",text:"Batch processing allows multiple SQL statements to be executed as a batch, improving performance by reducing the number of database round-trips."},{type:"example",code:`// Database Metadata and Batch Processing example
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcAdvancedExample {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/mydatabase";
    String user = "root";
    String password = "password";

    try (Connection connection = DriverManager.getConnection(url, user, password)) {
      // Retrieve database metadata
      DatabaseMetaData metaData = connection.getMetaData();
      System.out.println("Database Product Name: " + metaData.getDatabaseProductName());
      System.out.println("Database Product Version: " + metaData.getDatabaseProductVersion());

      // Batch processing
      try (Statement statement = connection.createStatement()) {
        statement.addBatch("INSERT INTO mytable (name) VALUES ('Alice')");
        statement.addBatch("INSERT INTO mytable (name) VALUES ('Bob')");
        statement.addBatch("INSERT INTO mytable (name) VALUES ('Charlie')");
        
        int[] updateCounts = statement.executeBatch();
        System.out.println("Batch executed. Number of rows affected: " + updateCounts.length);
      }

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`},{type:"point",text:"This example shows how to retrieve metadata about the database and perform batch processing. Metadata provides information about the database system, while batch processing groups multiple SQL statements to be executed together for efficiency."},{type:"header",level:3,text:"Lesson 12.4: Error Handling and Connection Management"},{type:"point",text:"Handling SQL exceptions and managing database connections effectively."},{type:"point",text:"Handling SQL exceptions is crucial for debugging and ensuring that your application can recover gracefully from database errors."},{type:"point",text:"Proper connection management involves closing connections, statements, and result sets to avoid resource leaks and ensure optimal performance."},{type:"example",code:`// Error Handling and Connection Management example
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcErrorHandlingExample {
  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/mydatabase";
    String user = "root";
    String password = "password";

    try (Connection connection = DriverManager.getConnection(url, user, password)) {
      String insertSQL = "INSERT INTO mytable (name) VALUES (?)";
      try (PreparedStatement preparedStatement = connection.prepareStatement(insertSQL)) {
        preparedStatement.setString(1, "Jane Doe");
        preparedStatement.executeUpdate();
      } catch (SQLException e) {
        System.err.println("Error executing SQL statement: " + e.getMessage());
      }
    } catch (SQLException e) {
      System.err.println("Error connecting to the database: " + e.getMessage());
    }
  }
}`},{type:"point",text:"This example illustrates proper error handling for SQL operations and database connections. It ensures that exceptions are caught and logged, and resources are closed properly."}],module13:[{type:"margin"},{type:"header",level:2,text:"Module 13: Java Reflection and Annotations"},{type:"header",level:3,text:"Lesson 13.1: Understanding Reflection"},{type:"point",text:"Using reflection to inspect and manipulate classes at runtime."},{type:"point",text:"Reflection in Java allows you to analyze and interact with classes, methods, fields, and other elements of the Java language at runtime, providing flexibility and introspection capabilities."},{type:"point",text:"The `Class` class is the entry point for reflection. You can obtain a `Class` object representing a class or interface using methods like `Class.forName()`, `.getClass()`, or `.class`."},{type:"point",text:"You can inspect class details (e.g., methods, fields, constructors) using methods of the `Class` class, such as `getDeclaredMethods()`, `getDeclaredFields()`, and `getConstructors()`. You can also manipulate fields and invoke methods dynamically."},{type:"example",code:`// Reflection example
import java.lang.reflect.Method;

public class ReflectionExample {
  public static void main(String[] args) throws Exception {
    Class<?> clazz = Class.forName("java.lang.String");
    Method[] methods = clazz.getDeclaredMethods();

    for (Method method : methods) {
      System.out.println("Method: " + method.getName());
    }
  }
}`},{type:"point",text:"In this example, we use reflection to inspect the `java.lang.String` class. We retrieve and print the names of all declared methods in the `String` class."},{type:"header",level:3,text:"Lesson 13.2: Annotations in Java"},{type:"point",text:"Creating and using custom annotations for metadata and runtime processing."},{type:"point",text:"Annotations are a form of metadata that provide additional information about code elements (e.g., classes, methods, fields). They do not affect program semantics but can be used by the compiler or runtime environment for various purposes."},{type:"point",text:"Custom annotations are defined using the `@interface` keyword. Annotations can include elements (methods) that can be used to provide values."},{type:"point",text:"Annotations can be retained at runtime or compile-time. The `@Retention` annotation specifies how long annotations are retained. Use `RetentionPolicy.RUNTIME` for runtime processing."},{type:"example",code:`// Custom annotation example
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@interface MyCustomAnnotation {
  String value();
}

public class AnnotationExample {
  @MyCustomAnnotation("Example")
  public void annotatedMethod() {
    System.out.println("Method with MyCustomAnnotation");
  }

  public static void main(String[] args) throws Exception {
    AnnotationExample example = new AnnotationExample();
    example.annotatedMethod();

    // Checking for annotation
    MyCustomAnnotation annotation = example.getClass()
                    .getMethod("annotatedMethod")
                    .getAnnotation(MyCustomAnnotation.class);

    if (annotation != null) {
      System.out.println("Annotation value: " + annotation.value());
    }
  }
}`},{type:"point",text:"In this example, we define a custom annotation `@MyCustomAnnotation` with a single element `value`. We apply this annotation to a method and then retrieve and print the annotation value using reflection."},{type:"header",level:3,text:"Lesson 13.3: Practical Uses of Reflection and Annotations"},{type:"point",text:"Exploring practical applications of reflection and annotations in Java."},{type:"point",text:"Reflection is often used in frameworks and libraries to provide features such as dependency injection, serialization, and object mapping. It allows these tools to interact with objects dynamically without needing compile-time knowledge."},{type:"point",text:"Annotations are commonly used in Java frameworks such as Spring and Hibernate to define configuration, behavior, and mappings in a declarative manner. For example, `@Autowired` in Spring and `@Entity` in Hibernate."},{type:"example",code:`// Example of using reflection for a simple dependency injection framework
import java.lang.reflect.Constructor;

public class SimpleDIContainer {
  public static void main(String[] args) throws Exception {
    // Assuming we have a class 'MyService' with a constructor
    Class<?> clazz = Class.forName("MyService");
    Constructor<?> constructor = clazz.getConstructor();
    Object instance = constructor.newInstance();

    System.out.println("Created instance of: " + instance.getClass().getName());
  }
}

// A sample service class
class MyService {
  public MyService() {
    System.out.println("MyService instance created");
  }
}`},{type:"point",text:"In this example, we demonstrate a simple dependency injection mechanism using reflection. We create an instance of `MyService` using reflection to call its constructor. This is a simplified version of what frameworks like Spring do under the hood."}],module14:[{type:"margin"},{type:"header",level:2,text:"Module 14: Building Java Applications"},{type:"header",level:3,text:"Lesson 14.1: Building a Simple Java Application"},{type:"point",text:"Setting up a project structure."},{type:"point",text:"A well-organized project structure improves maintainability and scalability. A standard Maven project structure includes separate directories for main source code and test code."},{type:"point",text:"Here is a basic Maven project structure:"},{type:"example",code:`// Basic project structure
src/
  main/
    java/
      com/
        example/
          App.java
  test/
    java/
      com/
        example/
          AppTest.java
pom.xml
`},{type:"point",text:`In this structure:
      - src/main/java/ contains the main application code.
      - src/test/java/ contains test code.
      - pom.xml is the Maven build configuration file that manages project dependencies and build lifecycle.`},{type:"header",level:3,text:"Lesson 14.2: Implementing Core Features and Functionalities"},{type:"point",text:"Implementing core features involves writing the main application logic and ensuring that it meets the requirements. It’s important to follow good coding practices and maintain code quality."},{type:"point",text:"In the example below, we create a basic Java application with a greeting feature and a corresponding JUnit test case."},{type:"example",code:`// Core functionality - App.java
package com.example;

public class App {
  public static void main(String[] args) {
    App app = new App();
    System.out.println(app.getGreeting());
  }

  public String getGreeting() {
    return "Welcome to the Java Application!";
  }
}

// Testing functionality - AppTest.java
package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class AppTest {
  @Test
  public void testGreeting() {
    App app = new App();
    assertEquals("Welcome to the Java Application!", app.getGreeting());
  }
}
`},{type:"point",text:"The `App` class contains a `getGreeting` method that returns a greeting string. The `AppTest` class uses JUnit to test that the `getGreeting` method returns the expected string."},{type:"header",level:3,text:"Lesson 14.3: Building, Deploying, and Running the Application"},{type:"point",text:"After implementing the core features, you need to build, deploy, and run the application. Maven is commonly used for building and managing Java projects."},{type:"point",text:"Build the application using Maven. This will compile the code, run tests, and package the application into a JAR file."},{type:"example",code:`// Build and run commands
// Run these commands from the root directory of your project where the pom.xml file is located.

mvn clean package   // Cleans previous builds and packages the application

java -jar target/app.jar  // Runs the packaged JAR file
`},{type:"point",text:"The `mvn clean package` command cleans any previously compiled files and then packages the application into a JAR file located in the `target` directory. The `java -jar` command runs the JAR file."},{type:"header",level:3,text:"Lesson 14.4: Continuous Integration and Deployment"},{type:"point",text:"Integrating Continuous Integration (CI) and Continuous Deployment (CD) practices into your workflow can streamline development, testing, and deployment processes."},{type:"point",text:"Tools like Jenkins, Travis CI, and GitHub Actions can automate the build, test, and deployment pipeline. For instance, a CI/CD pipeline can automatically build and deploy the application whenever changes are pushed to the repository."},{type:"example",code:`// Example of a simple GitHub Actions workflow file (.github/workflows/ci.yml)
name: Java CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
    - name: Build with Maven
      run: mvn clean package
`},{type:"point",text:"This GitHub Actions workflow sets up a JDK environment, checks out the code, and builds the project using Maven. You can extend this workflow to include deployment steps as needed."}],module15:[{type:"margin"},{type:"header",level:2,text:"Module 15: Java Development Tools"},{type:"header",level:3,text:"Lesson 15.1: Using IDEs for Java Development"},{type:"point",text:"Setting up and using popular IDEs."},{type:"point",text:"Integrated Development Environments (IDEs) streamline Java development by providing tools for coding, debugging, and project management."},{type:"point",text:"Popular IDEs include IntelliJ IDEA and Eclipse. Here’s how to set up a Java project in these IDEs:"},{type:"example",code:`// IntelliJ IDEA setup example
// 1. Download and install IntelliJ IDEA from https://www.jetbrains.com/idea/
// 2. Open IntelliJ IDEA and select "New Project"
// 3. Choose "Java" and configure project SDK (ensure JDK is installed)
// 4. Click "Next" and then "Finish" to create the project
// 5. Add a new Java class by right-clicking on the "src" directory and selecting "New" -> "Java Class"
// 6. Write and run Java code by clicking the green play button or using the Run menu

// Eclipse setup example
// 1. Download and install Eclipse IDE for Java Developers from https://www.eclipse.org/downloads/
// 2. Open Eclipse and select "File" -> "New" -> "Java Project"
// 3. Enter a project name and click "Finish"
// 4. Right-click on the "src" folder, select "New" -> "Class" to create a new Java class
// 5. Write and run Java code by right-clicking on the file and selecting "Run As" -> "Java Application"
  `},{type:"header",level:3,text:"Lesson 15.2: Build Tools"},{type:"point",text:"Introduction to Maven and Gradle."},{type:"point",text:"Build tools automate the build process, manage dependencies, and facilitate project management. Maven and Gradle are two popular build tools in the Java ecosystem."},{type:"point",text:"Here's a basic overview of how to use Maven and Gradle:"},{type:"example",code:`// Maven example
// Maven uses a file named pom.xml to configure the project, manage dependencies, and define the build process.
// Example pom.xml configuration:

<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/POM/4.0.0">

  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0-SNAPSHOT</version>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-api</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

</project>

// Gradle example
// Gradle uses a file named build.gradle for project configuration and dependency management.
// Example build.gradle configuration:

plugins {
  id 'java'
}

repositories {
  mavenCentral()
}

dependencies {
  testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
}
  `},{type:"point",text:"Maven and Gradle handle dependencies and build configurations differently:"},{type:"point",text:"- Maven uses XML for its configuration and has a lifecycle model with predefined phases."},{type:"point",text:"- Gradle uses a Groovy or Kotlin DSL for configuration and provides more flexibility with its build scripts."},{type:"header",level:3,text:"Lesson 15.3: Version Control Systems"},{type:"point",text:"Version control systems (VCS) like Git help manage code changes and collaborate with other developers."},{type:"point",text:"Git is the most widely used VCS, and platforms like GitHub, GitLab, and Bitbucket facilitate remote repository hosting and collaboration."},{type:"example",code:`// Basic Git commands
// Initialize a Git repository
git init

// Add files to staging area
git add .

// Commit changes
git commit -m "Initial commit"

// Create a new branch
git branch feature-branch

// Switch to the new branch
git checkout feature-branch

// Push changes to a remote repository
git push origin feature-branch
`},{type:"point",text:"Git commands are essential for version control:"},{type:"point",text:"- ' git init ' : Initializes a new Git repository."},{type:"point",text:"- ' git add . ' : Stages all changes for the next commit."},{type:"point",text:`- ' git commit -m "message" ' : Commits changes with a message.`},{type:"point",text:"- ' git branch branch-name ' : Creates a new branch."},{type:"point",text:"- ' git checkout branch-name ' : Switches to the specified branch."},{type:"point",text:"- ' git push origin branch-name ' : Pushes commits to the remote repository."}],project1:[{type:"margin"},{type:"header",level:2,text:"Project 1: Simple Calculator"},{type:"point",text:"Create a command-line calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division."},{type:"example",code:`import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Choose an operation: +, -, *, / or type 'exit' to quit:");
            String operation = scanner.next();

            if (operation.equals("exit")) {
                break;
            }

            System.out.print("Enter the first number: ");
            double num1 = scanner.nextDouble();
            System.out.print("Enter the second number: ");
            double num2 = scanner.nextDouble();

            double result = 0;
            boolean validOperation = true;

            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        System.out.println("Error: Division by zero.");
                        validOperation = false;
                    }
                    break;
                default:
                    System.out.println("Invalid operation.");
                    validOperation = false;
            }

            if (validOperation) {
                System.out.println("Result: " + result);
            }
        }
        scanner.close();
    }
}
`}],project2:[{type:"margin"},{type:"header",level:2,text:"Project 2: Todo List Application"},{type:"point",text:"Develop a simple to-do list application where users can add, remove, and view tasks."},{type:"example",code:`import java.util.ArrayList;
import java.util.Scanner;

public class TodoListApp {
    private static ArrayList<String> todoList = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Choose an option: add, remove, view, or exit:");
            String option = scanner.next();

            if (option.equals("exit")) {
                break;
            }

            switch (option) {
                case "add":
                    System.out.println("Enter a task to add:");
                    scanner.nextLine(); // Consume the newline
                    String task = scanner.nextLine();
                    todoList.add(task);
                    System.out.println("Task added.");
                    break;
                case "remove":
                    System.out.println("Enter the task number to remove:");
                    int index = scanner.nextInt() - 1;
                    if (index >= 0 && index < todoList.size()) {
                        todoList.remove(index);
                        System.out.println("Task removed.");
                    } else {
                        System.out.println("Invalid task number.");
                    }
                    break;
                case "view":
                    System.out.println("Todo List:");
                    for (int i = 0; i < todoList.size(); i++) {
                        System.out.println((i + 1) + ". " + todoList.get(i));
                    }
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        }
        scanner.close();
    }
}
`}],project3:[{type:"margin"},{type:"header",level:2,text:"Project 3: Currency Converter"},{type:"point",text:"Develop a program that converts one currency to another based on user input."},{type:"example",code:`import java.util.Scanner;

public class CurrencyConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Hardcoded exchange rates (for simplicity)
        double usdToEurRate = 0.85;
        double eurToUsdRate = 1.18;

        while (true) {
            System.out.println("Currency Converter");
            System.out.println("1: USD to EUR");
            System.out.println("2: EUR to USD");
            System.out.println("Type 'exit' to quit.");
            String choice = scanner.next();

            if (choice.equals("exit")) {
                break;
            }

            double amount = 0;
            double convertedAmount = 0;

            switch (choice) {
                case "1":
                    System.out.print("Enter amount in USD: ");
                    amount = scanner.nextDouble();
                    convertedAmount = amount * usdToEurRate;
                    System.out.printf("Converted amount in EUR: %.2f", convertedAmount);
                    break;
                case "2":
                    System.out.print("Enter amount in EUR: ");
                    amount = scanner.nextDouble();
                    convertedAmount = amount * eurToUsdRate;
                    System.out.printf("Converted amount in USD: %.2f", convertedAmount);
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        }
        scanner.close();
    }
}
`}],project4:[{type:"margin"},{type:"header",level:2,text:"Project 4: Tic-Tac-Toe Game"},{type:"point",text:"Build a simple Tic-Tac-Toe game that two players can play on the command line."},{type:"example",code:`import java.util.Scanner;

public class TicTacToe {
    private static char[][] board = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    private static char currentPlayer = 'X';

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean gameWon = false;

        while (true) {
            printBoard();
            int[] move = getPlayerMove(scanner);
            board[move[0]][move[1]] = currentPlayer;

            if (checkWin()) {
                gameWon = true;
                break;
            }

            if (isBoardFull()) {
                break;
            }

            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'; // Switch player
        }

        printBoard();
        if (gameWon) {
            System.out.println("Player " + currentPlayer + " wins!");
        } else {
            System.out.println("It's a tie!");
        }

        scanner.close();
    }

    private static void printBoard() {
        System.out.println("  0 1 2");
        for (int i = 0; i < 3; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j]);
                if (j < 2) System.out.print("|");
            }
            System.out.println();
            if (i < 2) System.out.println("  -----");
        }
    }

    private static int[] getPlayerMove(Scanner scanner) {
        int row, col;
        while (true) {
            System.out.println("Player " + currentPlayer + ", enter your move (row and column): ");
            row = scanner.nextInt();
            col = scanner.nextInt();
            if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ') {
                break;
            } else {
                System.out.println("This move is not valid. Try again.");
            }
        }
        return new int[]{row, col};
    }

    private static boolean checkWin() {
        // Check rows, columns, and diagonals
        return (checkRowColDiag(board[0][0], board[0][1], board[0][2]) ||
                checkRowColDiag(board[1][0], board[1][1], board[1][2]) ||
                checkRowColDiag(board[2][0], board[2][1], board[2][2]) ||
                checkRowColDiag(board[0][0], board[1][0], board[2][0]) ||
                checkRowColDiag(board[0][1], board[1][1], board[2][1]) ||
                checkRowColDiag(board[0][2], board[1][2], board[2][2]) ||
                checkRowColDiag(board[0][0], board[1][1], board[2][2]) ||
                checkRowColDiag(board[0][2], board[1][1], board[2][0]));
    }

    private static boolean checkRowColDiag(char c1, char c2, char c3) {
        return (c1 == c2 && c2 == c3 && c1 != ' ');
    }

    private static boolean isBoardFull() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == ' ') {
                    return false;
                }
            }
        }
        return true;
    }
}
`}],project5:[{type:"margin"},{type:"header",level:2,text:"Project 5: Basic Inventory Management System"},{type:"point",text:"Create a simple inventory system to manage products in a store, where users can add, remove, and view items."},{type:"example",code:`import java.util.ArrayList;
import java.util.Scanner;

class Product {
    private String name;
    private int quantity;
    private double price;

    public Product(String name, int quantity, double price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Product Name: " + name + ", Quantity: " + quantity + ", Price: $" + price;
    }
}

public class InventoryManagementSystem {
    private static ArrayList<Product> inventory = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Inventory Management System");
            System.out.println("1. Add Product");
            System.out.println("2. View Products");
            System.out.println("3. Remove Product");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();

            switch (option) {
                case 1:
                    addProduct(scanner);
                    break;
                case 2:
                    viewProducts();
                    break;
                case 3:
                    removeProduct(scanner);
                    break;
                case 4:
                    System.out.println("Exiting the system.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }

    private static void addProduct(Scanner scanner) {
        System.out.print("Enter product name: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();
        System.out.print("Enter quantity: ");
        int quantity = scanner.nextInt();
        System.out.print("Enter price: ");
        double price = scanner.nextDouble();

        inventory.add(new Product(name, quantity, price));
        System.out.println("Product added successfully.");
    }

    private static void viewProducts() {
        if (inventory.isEmpty()) {
            System.out.println("No products in inventory.");
        } else {
            System.out.println("Inventory:");
            for (Product product : inventory) {
                System.out.println(product);
            }
        }
    }

    private static void removeProduct(Scanner scanner) {
        System.out.print("Enter the name of the product to remove: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();

        boolean removed = inventory.removeIf(product -> product.getName().equalsIgnoreCase(name));
        if (removed) {
            System.out.println("Product removed successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }
}
`}]};function $S(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(e)}function GS(e){return Ee({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"},child:[]}]})(e)}const Z=({courseData:e,module:t})=>{const[n,r]=C.useState(null);C.useEffect(()=>{const o=()=>{let l=JSON.parse(localStorage.getItem("completedModules"));l||(l={module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1}),l[t]=!0,localStorage.setItem("completedModules",JSON.stringify(l));let u=JSON.parse(localStorage.getItem("completedModules"));console.log(u)},s=()=>{let l=JSON.parse(localStorage.getItem("completedProjects"));l||(l={project1:!1,project2:!1,project3:!1,project4:!1,project5:!1}),l[t]=!0,localStorage.setItem("completedProjects",JSON.stringify(l));let u=JSON.parse(localStorage.getItem("completedProjects"));console.log(u)},a=setInterval(()=>{o(),s()},6e4);return()=>clearInterval(a)},[]);const i=(o,s)=>{navigator.clipboard.writeText(o).then(()=>{r(s),setTimeout(()=>r(null),2e3)}).catch(a=>{console.error("Failed to copy: ",a)})};return c.jsx("div",{className:"course-content ",children:e.map((o,s)=>{switch(o.type){case"margin":return c.jsx("div",{className:"margin"});case"header":switch(o.level){case 1:return c.jsx("h1",{children:o.text},s);case 2:return c.jsx("h2",{children:o.text},s);case 3:return c.jsx("h3",{children:o.text},s);default:return null}case"point":return c.jsx("p",{children:o.text},s);case"example":return c.jsx("div",{className:"example-container",children:c.jsxs("pre",{children:[c.jsx("code",{children:o.code}),c.jsxs("button",{className:"copy-button",onClick:()=>i(o.code,s),children:[n===s?c.jsx(GS,{}):c.jsx($S,{}),n===s?" Copied!":" Copy Code"]})]},s)},s);default:return null}})})},KS=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("div",{className:"course",children:[c.jsx(xe.img,{src:Gn,alt:"",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8}}),c.jsxs(xe.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:[c.jsx(Z,{courseData:X.preview}),c.jsxs("div",{className:"module-container",children:[c.jsx(N,{to:"/Java/module1/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 1:"})," Introduction to Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module2/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 2:"})," Java Syntax and Conventions"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module3/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 3:"})," Object-Oriented Programming in Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module4/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 4:"})," Data Structures in Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module5/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 5:"})," Basic Input and Output"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module6/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 6:"})," Debugging and Error Handling"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module7/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 7:"})," Advanced Java Programming"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module8/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 8:"})," Collections Framework"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module9/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 9:"})," Java Streams and Lambdas"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module10/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 10:"})," Multithreading and Concurrency"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module11/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 11:"})," Networking in Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module12/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 12:"})," Java Database Connectivity (JDBC)"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module13/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 13:"})," Java Reflection and Annotations"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module14/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 14:"})," Building Java Applications"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/Java/module15/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 15:"})," Java Development Tools"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})})]})]})]})};function kp(e){return Ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}const qS=[{user:"Alice",comment:"This course made transitioning from React to TypeScript effortless. The clear, step-by-step guidance was perfect for self-learning!",star:5},{user:"Bob",comment:"Learning at my own pace was great, and the practical examples made TypeScript much easier to grasp for React developers like me.",star:4},{user:"Charlie",comment:"The course was well-organized and intuitive, making it easy to integrate TypeScript into my React projects. Worth every minute!",star:5}],na=[{id:1,name:"Module 1: Introduction to Java",moduleKey:"module1",completed:!1},{id:2,name:"Module 2: Object-Oriented Programming in Java",moduleKey:"module2",completed:!1},{id:3,name:"Module 3: Advanced Java Programming",moduleKey:"module3",completed:!1},{id:4,name:"Module 4: Building Java Applications",moduleKey:"module4",completed:!1},{id:5,name:"Module 5: Java Syntax and Conventions",moduleKey:"module5",completed:!1},{id:6,name:"Module 6: Data Structures in Java",moduleKey:"module6",completed:!1},{id:7,name:"Module 7: Basic Input and Output",moduleKey:"module7",completed:!1},{id:8,name:"Module 8: Debugging and Error Handling",moduleKey:"module8",completed:!1},{id:9,name:"Module 9: Java Development Tools",moduleKey:"module9",completed:!1},{id:10,name:"Module 10: Collections Framework",moduleKey:"module10",completed:!1},{id:11,name:"Module 11: Java Streams and Lambdas",moduleKey:"module11",completed:!1},{id:12,name:"Module 12: Multithreading and Concurrency",moduleKey:"module12",completed:!1},{id:13,name:"Module 13: Networking in Java",moduleKey:"module13",completed:!1},{id:14,name:"Module 14: Java Database Connectivity (JDBC)",moduleKey:"module14",completed:!1},{id:15,name:"Module 15: Java Reflection and Annotations",moduleKey:"module15",completed:!1}],ra=[{id:1,name:"Project 1: Introduction to Java",moduleKey:"project1",completed:!1},{id:2,name:"Project 2: Object-Oriented Programming in Java",moduleKey:"project2",completed:!1},{id:3,name:"Project 3: Advanced Java Programming",moduleKey:"project3",completed:!1},{id:4,name:"Project 4: Building Java Applications",moduleKey:"project4",completed:!1},{id:5,name:"Project 5: Java Syntax and Conventions",moduleKey:"project5",completed:!1}],QS=()=>{const[e,t]=C.useState([]),[n,r]=C.useState([]);C.useEffect(()=>{const a=JSON.parse(localStorage.getItem("completedModules"));console.log(a);const l=na.map(u=>({...u,completed:a?a[u.moduleKey]:!1}));t(l),console.log(l)},[na]),C.useEffect(()=>{const a=JSON.parse(localStorage.getItem("completedProjects"));console.log(a);const l=ra.map(u=>({...u,completed:a?a[u.moduleKey]:!1}));r(l),console.log(l)},[ra]);const i=()=>{localStorage.setItem("completedModules",JSON.stringify({module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1})),console.log(localStorage.getItem("completedModules"));const a=JSON.parse(localStorage.getItem("completedModules"));console.log(a);const l=na.map(u=>({...u,completed:a?a[u.moduleKey]:!1}));t(l),console.log(l)},o=()=>{localStorage.setItem("completedProjects",JSON.stringify({project1:!1,project2:!1,project3:!1,project4:!1,project5:!1})),console.log(localStorage.getItem("completedProjects"));const a=JSON.parse(localStorage.getItem("completedProjects"));console.log(a);const l=ra.map(u=>({...u,completed:a?a[u.moduleKey]:!1}));r(l),console.log(l)};function s(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("div",{className:"my-learning",children:[c.jsxs(xe.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:["My ",c.jsx("span",{children:"Learning Progress"})]}),c.jsx(xe.p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Track your learning journey and explore new resources to enhance your skills."}),c.jsxs(xe.section,{className:"course-overview",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[c.jsxs("h2",{children:["Your ",c.jsx("span",{children:"Courses"})]}),c.jsxs("h3",{children:[c.jsx(Ju,{}),"Java"]}),c.jsx("div",{className:"course-list",children:e.map(a=>c.jsxs("div",{className:"course-card",children:[c.jsx("h3",{children:a.name}),a.completed?c.jsx(kp,{className:"blue"}):c.jsx(Wu,{})]},a.id))}),c.jsx("button",{onClick:i,className:"cta",children:"Reset modules"}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsxs("h2",{children:["Reviewed ",c.jsx("span",{children:"Projects"})]}),c.jsxs("h3",{children:[c.jsx(Ju,{}),"Java Practise"]}),c.jsx("div",{className:"course-list",children:n.map(a=>c.jsxs("div",{className:"course-card",children:[c.jsx("h3",{children:a.name}),a.completed?c.jsx(kp,{className:"blue"}):c.jsx(Wu,{})]},a.id))}),c.jsx("button",{onClick:o,className:"cta",children:"Reset projects"})]}),c.jsxs("section",{className:"feedback",children:[c.jsxs("h2",{children:["User ",c.jsx("span",{children:"Feedback"})]}),c.jsx("div",{className:"feedback-list",children:qS.map((a,l)=>c.jsxs("div",{className:"feedback-card",children:[c.jsx("div",{className:"stars",children:Array.from({length:5},(u,p)=>p<a.star?c.jsx(og,{},p):c.jsx(ag,{},p))}),c.jsxs("p",{children:[c.jsx("strong",{children:a.user}),": ",c.jsx("br",{})," ",a.comment]})]},l))})]}),c.jsxs("section",{className:"cta",children:[c.jsx("h2",{children:"Ready to enhance your skills?"}),c.jsxs("div",{className:"btn-container",children:[c.jsx(N,{to:"/typescript/",onClick:s,className:"cta-btn",children:"Learn more"}),c.jsx(N,{to:"/join/",onClick:s,className:"cta-secondary",children:"Join Us"})]})]})]})},Tp="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-28.5%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M216.856339,16.5966031%20C200.285002,8.84328665%20182.566144,3.2084988%20164.041564,0%20C161.766523,4.11318106%20159.108624,9.64549908%20157.276099,14.0464379%20C137.583995,11.0849896%20118.072967,11.0849896%2098.7430163,14.0464379%20C96.9108417,9.64549908%2094.1925838,4.11318106%2091.8971895,0%20C73.3526068,3.2084988%2055.6133949,8.86399117%2039.0420583,16.6376612%20C5.61752293,67.146514%20-3.4433191,116.400813%201.08711069,164.955721%20C23.2560196,181.510915%2044.7403634,191.567697%2065.8621325,198.148576%20C71.0772151,190.971126%2075.7283628,183.341335%2079.7352139,175.300261%20C72.104019,172.400575%2064.7949724,168.822202%2057.8887866,164.667963%20C59.7209612,163.310589%2061.5131304,161.891452%2063.2445898,160.431257%20C105.36741,180.133187%20151.134928,180.133187%20192.754523,160.431257%20C194.506336,161.891452%20196.298154,163.310589%20198.110326,164.667963%20C191.183787,168.842556%20183.854737,172.420929%20176.223542,175.320965%20C180.230393,183.341335%20184.861538,190.991831%20190.096624,198.16893%20C211.238746,191.588051%20232.743023,181.531619%20254.911949,164.955721%20C260.227747,108.668201%20245.831087,59.8662432%20216.856339,16.5966031%20Z%20M85.4738752,135.09489%20C72.8290281,135.09489%2062.4592217,123.290155%2062.4592217,108.914901%20C62.4592217,94.5396472%2072.607595,82.7145587%2085.4738752,82.7145587%20C98.3405064,82.7145587%20108.709962,94.5189427%20108.488529,108.914901%20C108.508531,123.290155%2098.3405064,135.09489%2085.4738752,135.09489%20Z%20M170.525237,135.09489%20C157.88039,135.09489%20147.510584,123.290155%20147.510584,108.914901%20C147.510584,94.5396472%20157.658606,82.7145587%20170.525237,82.7145587%20C183.391518,82.7145587%20193.761324,94.5189427%20193.539891,108.914901%20C193.539891,123.290155%20183.391518,135.09489%20170.525237,135.09489%20Z'%20fill='%23E76F00'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",YS="/LearnJava/assets/community-BAxjZy9F.png";function XS(e){return Ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25 173.31 173.31 0 0 1-35.11 10.39 170.05 170.05 0 0 1-62.72-.24 184.45 184.45 0 0 1-35.59-10.4 141.46 141.46 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49 205.62 205.62 0 0 1 48.91-.48 201.62 201.62 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"},child:[]},{tag:"path",attr:{d:"M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zm88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"},child:[]}]})(e)}const ZS=()=>{const[e,t]=C.useState(null),n=i=>{t(e===i?null:i)},r=[{question:"Is this community free to join?",answer:"Yes, joining our community on Discord is completely free. We welcome developers of all levels to participate."},{question:"What if I’m new to programming?",answer:"No worries! Our community is very supportive, and we have resources specifically for beginners."},{question:"How active is the community?",answer:"Our community is very active with members from around the globe, so you'll always find someone online to chat with or collaborate on projects."},{question:"Can I contribute to the community?",answer:"Absolutely! We encourage members to share their knowledge, contribute to discussions, and even lead their own sessions or projects."},{question:"How do I stay updated on community activities?",answer:"We have announcement channels where we post updates about upcoming events, new resources, and important community news."}];return c.jsxs("div",{className:"join-community-page",children:[c.jsx("section",{className:"intro-section",children:c.jsxs("div",{className:"intro-content",children:[c.jsxs(xe.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:["Join Our ",c.jsx("span",{children:"Developer Community"})," on Discord"]}),c.jsx(xe.p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Connect, collaborate, and grow with fellow developers in our vibrant Discord community. Whether you're a seasoned pro or just starting, you'll find valuable resources, support, and friendships here."}),c.jsx(xe.img,{src:YS,alt:"Community",draggable:"false",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:1,delay:.6}})]})}),c.jsxs("section",{className:"why-join-section",children:[c.jsxs("h2",{children:["Why ",c.jsx("span",{children:"Join Us"}),"?"]}),c.jsxs("div",{className:"reasons-container",children:[c.jsxs("div",{className:"reason-card",children:[c.jsx("img",{src:Tp,alt:"Discord"}),c.jsx("h4",{children:"Real-time Collaboration"}),c.jsx("p",{children:"Work on projects, share your progress, and get instant feedback from a community of like-minded developers and contributors."})]}),c.jsxs("div",{className:"reason-card",children:[c.jsx("img",{src:xl,alt:"Discord"}),c.jsx("h4",{children:"Exclusive Content"}),c.jsx("p",{children:"Access to exclusive tutorials, coding challenges, and live events tailored for our community members on this server."})]}),c.jsxs("div",{className:"reason-card",children:[c.jsx("img",{src:Tp,alt:"Discord"}),c.jsx("h4",{children:"Networking Opportunities"}),c.jsx("p",{children:"Expand your professional network, meet potential collaborators, and land job opportunities through our community."})]})]})]}),c.jsxs("section",{className:"get-started-section",children:[c.jsxs("h2",{children:[c.jsx(XS,{})," How to ",c.jsx("span",{children:"Get Started "})," "]}),c.jsx("p",{children:"Joining is easy! Just follow these steps:"}),c.jsxs("ol",{children:[c.jsxs("li",{children:[c.jsx("strong",{children:"Sign Up:"})," If you don't already have a Discord account, create one for free."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Click the Link:"})," Use the invite link below to join our server."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Introduce Yourself:"})," Head over to the introduction channel and tell us a bit about yourself!"]})]}),c.jsxs("div",{className:"btn-container",children:[c.jsx("a",{href:"https://discord.com/invite/your-server-invite-link",target:"_blank",rel:"noopener noreferrer",className:"cta",children:"Join Discord"}),c.jsx(N,{to:"/",className:"cta-secondary",children:"Return Home"})]})]}),c.jsxs("section",{className:"testimonials-section",children:[c.jsxs("h2",{children:["What Our ",c.jsx("span",{children:"Members Say"})]}),c.jsxs("div",{className:"testimonials-container",children:[c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:'"This community has completely transformed my learning journey. The support and resources available here are unmatched!"'}),c.jsx("h4",{children:"- Jane Doe"})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:'"Joining this Discord server was the best decision I made as a developer. The networking opportunities are fantastic!"'}),c.jsx("h4",{children:"- John Smith"})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:'"The exclusive content and real-time collaboration have helped me grow both personally and professionally."'}),c.jsx("h4",{children:"- Emily Davis"})]})]})]}),c.jsxs("section",{className:"faqs-section",children:[c.jsxs("h2",{children:[c.jsx("span",{children:"F"}),"requently ",c.jsx("span",{children:"A"}),"sked ",c.jsx("span",{children:"Q"}),"uestions"]}),c.jsx("div",{className:"faqs-container",children:r.map((i,o)=>c.jsxs("div",{className:"faq-item",children:[c.jsxs("h4",{onClick:()=>n(o),className:"faq-question",children:[i.question,c.jsx("span",{className:`faq-toggle-icon ${e===o?"open":""}`,children:e===o?"-":"+"})]}),c.jsx("p",{className:`faq-answer ${e===o?"open":""}`,children:i.answer})]},o))})]})]})},ew=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("div",{className:"course",children:[c.jsx(xe.img,{src:Gn,alt:"",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8}}),c.jsxs(xe.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:[c.jsxs("div",{className:"course-content",children:[c.jsxs("h1",{children:["Practise Through ",c.jsx("span",{children:"Projects"})]}),c.jsx("p",{children:"Engage with real-world Java programming by building practical projects that reinforce your understanding of core concepts. Below are a series of projects, each focusing on different aspects of Java development. Each project includes a brief description, followed by the core concepts and features you’ll work on. These projects are designed to progressively challenge your skills, ensuring a comprehensive learning experience."})]}),c.jsxs("div",{className:"module-container",children:[c.jsx(N,{to:"/practise/project1/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 1:"})," Simple Calculator"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/practise/project2/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 2:"})," Todo List Application"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/practise/project3/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 3:"})," Currency Converter"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/practise/project4/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 4:"})," Tic-Tac-Toe Game"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx(N,{to:"/practise/project5/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 5:"})," Basic Inventory Management System"]}),c.jsxs("p",{children:["Start now ",c.jsx(ne,{})]})]})}),c.jsx("br",{})]})]})]})};function tw(){return c.jsxs(c.Fragment,{children:[c.jsx(h2,{}),c.jsxs(t2,{children:[c.jsx(B,{exact:!0,path:"/",element:c.jsx(WS,{})}),c.jsx(B,{path:"/Java/",element:c.jsx(KS,{})}),c.jsx(B,{path:"/Java/module1",element:c.jsx(Z,{courseData:X.module1,module:"module1"})}),c.jsx(B,{path:"/Java/module2",element:c.jsx(Z,{courseData:X.module2,module:"module2"})}),c.jsx(B,{path:"/Java/module3",element:c.jsx(Z,{courseData:X.module3,module:"module3"})}),c.jsx(B,{path:"/Java/module4",element:c.jsx(Z,{courseData:X.module4,module:"module4"})}),c.jsx(B,{path:"/Java/module5",element:c.jsx(Z,{courseData:X.module5,module:"module5"})}),c.jsx(B,{path:"/Java/module6",element:c.jsx(Z,{courseData:X.module6,module:"module6"})}),c.jsx(B,{path:"/Java/module7",element:c.jsx(Z,{courseData:X.module7,module:"module7"})}),c.jsx(B,{path:"/Java/module8",element:c.jsx(Z,{courseData:X.module8,module:"module8"})}),c.jsx(B,{path:"/Java/module9",element:c.jsx(Z,{courseData:X.module9,module:"module9"})}),c.jsx(B,{path:"/Java/module10",element:c.jsx(Z,{courseData:X.module10,module:"module10"})}),c.jsx(B,{path:"/Java/module11",element:c.jsx(Z,{courseData:X.module11,module:"module11"})}),c.jsx(B,{path:"/Java/module12",element:c.jsx(Z,{courseData:X.module12,module:"module12"})}),c.jsx(B,{path:"/Java/module13",element:c.jsx(Z,{courseData:X.module13,module:"module13"})}),c.jsx(B,{path:"/Java/module14",element:c.jsx(Z,{courseData:X.module14,module:"module14"})}),c.jsx(B,{path:"/Java/module15",element:c.jsx(Z,{courseData:X.module15,module:"module15"})}),c.jsx(B,{path:"/practise/",element:c.jsx(ew,{})}),c.jsx(B,{path:"/practise/project1",element:c.jsx(Z,{courseData:X.project1,module:"project1"})}),c.jsx(B,{path:"/practise/project2",element:c.jsx(Z,{courseData:X.project2,module:"project2"})}),c.jsx(B,{path:"/practise/project3",element:c.jsx(Z,{courseData:X.project3,module:"project3"})}),c.jsx(B,{path:"/practise/project4",element:c.jsx(Z,{courseData:X.project4,module:"project4"})}),c.jsx(B,{path:"/practise/project5",element:c.jsx(Z,{courseData:X.project5,module:"project5"})}),c.jsx(B,{path:"/learning/",element:c.jsx(QS,{})}),c.jsx(B,{path:"/join/",element:c.jsx(ZS,{})})]}),c.jsx(f2,{})]})}var hl={},Ep=py;hl.createRoot=Ep.createRoot,hl.hydrateRoot=Ep.hydrateRoot;hl.createRoot(document.getElementById("root")).render(c.jsx(gt.StrictMode,{children:c.jsx(l2,{children:c.jsx(tw,{})})}));
