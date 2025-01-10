function YC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f0={exports:{}},xo={},h0={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),XC=Symbol.for("react.portal"),ZC=Symbol.for("react.fragment"),QC=Symbol.for("react.strict_mode"),eR=Symbol.for("react.profiler"),tR=Symbol.for("react.provider"),nR=Symbol.for("react.context"),rR=Symbol.for("react.forward_ref"),aR=Symbol.for("react.suspense"),iR=Symbol.for("react.memo"),oR=Symbol.for("react.lazy"),sh=Symbol.iterator;function sR(e){return e===null||typeof e!="object"?null:(e=sh&&e[sh]||e["@@iterator"],typeof e=="function"?e:null)}var y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b0=Object.assign,v0={};function _r(e,t,n){this.props=e,this.context=t,this.refs=v0,this.updater=n||y0}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S0(){}S0.prototype=_r.prototype;function pg(e,t,n){this.props=e,this.context=t,this.refs=v0,this.updater=n||y0}var mg=pg.prototype=new S0;mg.constructor=pg;b0(mg,_r.prototype);mg.isPureReactComponent=!0;var lh=Array.isArray,E0=Object.prototype.hasOwnProperty,gg={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function x0(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)E0.call(t,r)&&!w0.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Ua,type:e,key:i,ref:o,props:a,_owner:gg.current}}function lR(e,t){return{$$typeof:Ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function uR(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uh=/\/+/g;function ns(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uR(""+e.key):t.toString(36)}function Ti(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ua:case XC:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ns(o,0):r,lh(a)?(n="",e!=null&&(n=e.replace(uh,"$&/")+"/"),Ti(a,t,n,"",function(u){return u})):a!=null&&(fg(a)&&(a=lR(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(uh,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",lh(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+ns(i,s);o+=Ti(i,t,n,l,a)}else if(l=sR(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+ns(i,s++),o+=Ti(i,t,n,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(e,t,n){if(e==null)return e;var r=[],a=0;return Ti(e,r,"","",function(i){return t.call(n,i,a++)}),r}function cR(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ai={transition:null},dR={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:gg};function T0(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Qa,forEach:function(e,t,n){Qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qa(e,function(){t++}),t},toArray:function(e){return Qa(e,function(t){return t})||[]},only:function(e){if(!fg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=_r;W.Fragment=ZC;W.Profiler=eR;W.PureComponent=pg;W.StrictMode=QC;W.Suspense=aR;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dR;W.act=T0;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b0({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=gg.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)E0.call(t,l)&&!w0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ua,type:e.type,key:a,ref:i,props:r,_owner:o}};W.createContext=function(e){return e={$$typeof:nR,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tR,_context:e},e.Consumer=e};W.createElement=x0;W.createFactory=function(e){var t=x0.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:rR,render:e}};W.isValidElement=fg;W.lazy=function(e){return{$$typeof:oR,_payload:{_status:-1,_result:e},_init:cR}};W.memo=function(e,t){return{$$typeof:iR,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};W.unstable_act=T0;W.useCallback=function(e,t){return Ge.current.useCallback(e,t)};W.useContext=function(e){return Ge.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ge.current.useEffect(e,t)};W.useId=function(){return Ge.current.useId()};W.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ge.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};W.useRef=function(e){return Ge.current.useRef(e)};W.useState=function(e){return Ge.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ge.current.useTransition()};W.version="18.3.1";h0.exports=W;var k=h0.exports;const Te=g0(k),pR=YC({__proto__:null,default:Te},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mR=k,gR=Symbol.for("react.element"),fR=Symbol.for("react.fragment"),hR=Object.prototype.hasOwnProperty,yR=mR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bR={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)hR.call(t,r)&&!bR.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:gR,type:e,key:i,ref:o,props:a,_owner:yR.current}}xo.Fragment=fR;xo.jsx=A0;xo.jsxs=A0;f0.exports=xo;var c=f0.exports,C0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ch=Te.createContext&&Te.createContext(C0),vR=["attr","size","title"];function SR(e,t){if(e==null)return{};var n=ER(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ER(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}function dh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function zi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dh(Object(n),!0).forEach(function(r){wR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wR(e,t,n){return t=xR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xR(e){var t=TR(e,"string");return typeof t=="symbol"?t:t+""}function TR(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R0(e){return e&&e.map((t,n)=>Te.createElement(t.tag,zi({key:n},t.attr),R0(t.child)))}function qe(e){return t=>Te.createElement(AR,qi({attr:zi({},e.attr)},t),R0(e.child))}function AR(e){var t=n=>{var{attr:r,size:a,title:i}=e,o=SR(e,vR),s=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Te.createElement("svg",qi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:zi(zi({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Te.createElement("title",null,i),e.children)};return ch!==void 0?Te.createElement(ch.Consumer,null,n=>t(n)):t(C0)}function CR(e){return qe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(e)}function ei(e){return qe({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(e)}function H(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function RR(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function rs(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function kR(e){return qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function IR(e){return qe({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function ti(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"},child:[]}]})(e)}function NR(e){return qe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"},child:[]}]})(e)}const hg="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20id='Artwork'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='10.75'%20y='10.61'%20width='2.57'%20height='2.57'%20transform='translate(-4.89%2012)%20rotate(-45.01)'%20style='fill:%23E76F00'/%3e%3cpolygon%20points='17.87%2011.89%2017.8%2011.95%2014.03%2015.73%2012.97%2014.68%2015.77%2011.89%2010.06%206.18%2010.06%204.08%2010.13%204.15%2017.87%2011.89'%20style='fill:%23E76F00;fill-rule:evenodd'/%3e%3cpolygon%20points='10.06%206.18%204.36%2011.89%2011.11%2018.65%2010.06%2019.7%2010%2019.63%202.25%2011.89%2010.06%204.08%2010.06%206.18'%20style='fill:%23E76F00;fill-rule:evenodd'/%3e%3cpolygon%20points='13.94%2017.6%2013.94%2019.7%2013.88%2019.63%206.13%2011.9%209.97%208.05%2011.03%209.11%208.23%2011.9%2013.94%2017.6'%20style='fill:%23E76F00;fill-rule:evenodd'/%3e%3cpolygon%20points='13.94%2017.6%2019.64%2011.9%2012.89%205.14%2013.94%204.08%2014%204.15%2021.75%2011.9%2021.68%2011.96%2013.94%2019.7%2013.94%2017.6'%20style='fill:%23E76F00'/%3e%3c/g%3e%3c/svg%3e";var k0={exports:{}},nt={},I0={exports:{}},N0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,L){var O=I.length;I.push(L);e:for(;0<O;){var P=O-1>>>1,j=I[P];if(0<a(j,L))I[P]=L,I[O]=j,O=P;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var L=I[0],O=I.pop();if(O!==L){I[0]=O;e:for(var P=0,j=I.length,Re=j>>>1;P<Re;){var ie=2*(P+1)-1,Pe=I[ie],ge=ie+1,Fe=I[ge];if(0>a(Pe,O))ge<j&&0>a(Fe,Pe)?(I[P]=Fe,I[ge]=O,P=ge):(I[P]=Pe,I[ie]=O,P=ie);else if(ge<j&&0>a(Fe,O))I[P]=Fe,I[ge]=O,P=ge;else break e}}return L}function a(I,L){var O=I.sortIndex-L.sortIndex;return O!==0?O:I.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],p=1,d=null,g=3,h=!1,v=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=I)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function E(I){if(b=!1,f(I),!v)if(n(l)!==null)v=!0,J(x);else{var L=n(u);L!==null&&te(E,L.startTime-I)}}function x(I,L){v=!1,b&&(b=!1,y(A),A=-1),h=!0;var O=g;try{for(f(L),d=n(l);d!==null&&(!(d.expirationTime>L)||I&&!D());){var P=d.callback;if(typeof P=="function"){d.callback=null,g=d.priorityLevel;var j=P(d.expirationTime<=L);L=e.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&r(l),f(L)}else r(l);d=n(l)}if(d!==null)var Re=!0;else{var ie=n(u);ie!==null&&te(E,ie.startTime-L),Re=!1}return Re}finally{d=null,g=O,h=!1}}var T=!1,C=null,A=-1,R=5,N=-1;function D(){return!(e.unstable_now()-N<R)}function G(){if(C!==null){var I=e.unstable_now();N=I;var L=!0;try{L=C(!0,I)}finally{L?Y():(T=!1,C=null)}}else T=!1}var Y;if(typeof m=="function")Y=function(){m(G)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,q=ee.port2;ee.port1.onmessage=G,Y=function(){q.postMessage(null)}}else Y=function(){w(G,0)};function J(I){C=I,T||(T=!0,Y())}function te(I,L){A=w(function(){I(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,J(x))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var O=g;g=L;try{return I()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,L){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=g;g=I;try{return L()}finally{g=O}},e.unstable_scheduleCallback=function(I,L,O){var P=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?P+O:P):O=P,I){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=O+j,I={id:p++,callback:L,priorityLevel:I,startTime:O,expirationTime:j,sortIndex:-1},O>P?(I.sortIndex=O,t(u,I),n(l)===null&&I===n(u)&&(b?(y(A),A=-1):b=!0,te(E,O-P))):(I.sortIndex=j,t(l,I),v||h||(v=!0,J(x))),I},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(I){var L=g;return function(){var O=g;g=L;try{return I.apply(this,arguments)}finally{g=O}}}})(N0);I0.exports=N0;var _R=I0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LR=k,et=_R;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _0=new Set,fa={};function Gn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(fa[e]=t,e=0;e<t.length;e++)_0.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xp=Object.prototype.hasOwnProperty,OR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function DR(e){return Xp.call(mh,e)?!0:Xp.call(ph,e)?!1:OR.test(e)?mh[e]=!0:(ph[e]=!0,!1)}function MR(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function PR(e,t,n,r){if(t===null||typeof t>"u"||MR(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var yg=/[\-:]([a-z])/g;function bg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yg,bg);Ce[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yg,bg);Ce[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yg,bg);Ce[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function vg(e,t,n,r){var a=Ce.hasOwnProperty(t)?Ce[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(PR(t,n,a,r)&&(n=null),r||a===null?DR(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=LR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),Zp=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),em=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),gh=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=gh&&e[gh]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,as;function Wr(e){if(as===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);as=t&&t[1]||""}return`
`+as+e}var is=!1;function os(e,t){if(!e||is)return"";is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function FR(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=os(e.type,!1),e;case 11:return e=os(e.type.render,!1),e;case 1:return e=os(e.type,!0),e;default:return""}}function tm(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case Zp:return"Profiler";case Sg:return"StrictMode";case Qp:return"Suspense";case em:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O0:return(e.displayName||"Context")+".Consumer";case L0:return(e._context.displayName||"Context")+".Provider";case Eg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wg:return t=e.displayName||null,t!==null?t:tm(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return tm(e(t))}catch{}}return null}function BR(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tm(t);case 8:return t===Sg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jR(e){var t=M0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=jR(e))}function P0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=M0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nm(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function F0(e,t){t=t.checked,t!=null&&vg(e,"checked",t,!1)}function rm(e,t){F0(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?am(e,t.type,n):t.hasOwnProperty("defaultValue")&&am(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function am(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function im(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Jr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function B0(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function j0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function om(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?j0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,U0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UR=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(e){UR.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),na[t]=na[e]})});function G0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||na.hasOwnProperty(e)&&na[e]?(""+t).trim():t+"px"}function q0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=G0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var GR=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sm(e,t){if(t){if(GR[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function lm(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var um=null;function xg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cm=null,yr=null,br=null;function vh(e){if(e=za(e)){if(typeof cm!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ko(t),cm(e.stateNode,e.type,t))}}function z0(e){yr?br?br.push(e):br=[e]:yr=e}function $0(){if(yr){var e=yr,t=br;if(br=yr=null,vh(e),t)for(e=0;e<t.length;e++)vh(t[e])}}function V0(e,t){return e(t)}function H0(){}var ss=!1;function W0(e,t,n){if(ss)return e(t,n);ss=!0;try{return V0(e,t,n)}finally{ss=!1,(yr!==null||br!==null)&&(H0(),$0())}}function ya(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var dm=!1;if(qt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){dm=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{dm=!1}function qR(e,t,n,r,a,i,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var ra=!1,Vi=null,Hi=!1,pm=null,zR={onError:function(e){ra=!0,Vi=e}};function $R(e,t,n,r,a,i,o,s,l){ra=!1,Vi=null,qR.apply(zR,arguments)}function VR(e,t,n,r,a,i,o,s,l){if($R.apply(this,arguments),ra){if(ra){var u=Vi;ra=!1,Vi=null}else throw Error(_(198));Hi||(Hi=!0,pm=u)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function J0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sh(e){if(qn(e)!==e)throw Error(_(188))}function HR(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Sh(a),e;if(i===r)return Sh(a),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function K0(e){return e=HR(e),e!==null?Y0(e):null}function Y0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Y0(e);if(t!==null)return t;e=e.sibling}return null}var X0=et.unstable_scheduleCallback,Eh=et.unstable_cancelCallback,WR=et.unstable_shouldYield,JR=et.unstable_requestPaint,me=et.unstable_now,KR=et.unstable_getCurrentPriorityLevel,Tg=et.unstable_ImmediatePriority,Z0=et.unstable_UserBlockingPriority,Wi=et.unstable_NormalPriority,YR=et.unstable_LowPriority,Q0=et.unstable_IdlePriority,To=null,Rt=null;function XR(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:ek,ZR=Math.log,QR=Math.LN2;function ek(e){return e>>>=0,e===0?32:31-(ZR(e)/QR|0)|0}var ii=64,oi=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=Kr(s):(i&=o,i!==0&&(r=Kr(i)))}else o=n&~a,o!==0?r=Kr(o):i!==0&&(r=Kr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),a=1<<n,r|=e[n],t&=~a;return r}function tk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-vt(i),s=1<<o,l=a[o];l===-1?(!(s&n)||s&r)&&(a[o]=tk(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function mm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eT(){var e=ii;return ii<<=1,!(ii&4194240)&&(ii=64),e}function ls(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function rk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-vt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ag(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var X=0;function tT(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nT,Cg,rT,aT,iT,gm=!1,si=[],rn=null,an=null,on=null,ba=new Map,va=new Map,Zt=[],ak="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function jr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=za(t),t!==null&&Cg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ik(e,t,n,r,a){switch(t){case"focusin":return rn=jr(rn,e,t,n,r,a),!0;case"dragenter":return an=jr(an,e,t,n,r,a),!0;case"mouseover":return on=jr(on,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return ba.set(i,jr(ba.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,va.set(i,jr(va.get(i)||null,e,t,n,r,a)),!0}return!1}function oT(e){var t=In(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=J0(n),t!==null){e.blockedOn=t,iT(e.priority,function(){rT(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fm(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);um=r,n.target.dispatchEvent(r),um=null}else return t=za(n),t!==null&&Cg(t),e.blockedOn=n,!1;t.shift()}return!0}function xh(e,t,n){Ci(e)&&n.delete(t)}function ok(){gm=!1,rn!==null&&Ci(rn)&&(rn=null),an!==null&&Ci(an)&&(an=null),on!==null&&Ci(on)&&(on=null),ba.forEach(xh),va.forEach(xh)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,gm||(gm=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,ok)))}function Sa(e){function t(a){return Ur(a,e)}if(0<si.length){Ur(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Ur(rn,e),an!==null&&Ur(an,e),on!==null&&Ur(on,e),ba.forEach(t),va.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)oT(n),n.blockedOn===null&&Zt.shift()}var vr=Wt.ReactCurrentBatchConfig,Ki=!0;function sk(e,t,n,r){var a=X,i=vr.transition;vr.transition=null;try{X=1,Rg(e,t,n,r)}finally{X=a,vr.transition=i}}function lk(e,t,n,r){var a=X,i=vr.transition;vr.transition=null;try{X=4,Rg(e,t,n,r)}finally{X=a,vr.transition=i}}function Rg(e,t,n,r){if(Ki){var a=fm(e,t,n,r);if(a===null)bs(e,t,r,Yi,n),wh(e,r);else if(ik(a,e,t,n,r))r.stopPropagation();else if(wh(e,r),t&4&&-1<ak.indexOf(e)){for(;a!==null;){var i=za(a);if(i!==null&&nT(i),i=fm(e,t,n,r),i===null&&bs(e,t,r,Yi,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else bs(e,t,r,null,n)}}var Yi=null;function fm(e,t,n,r){if(Yi=null,e=xg(r),e=In(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=J0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yi=e,null}function sT(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KR()){case Tg:return 1;case Z0:return 4;case Wi:case YR:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var en=null,kg=null,Ri=null;function lT(){if(Ri)return Ri;var e,t=kg,n=t.length,r,a="value"in en?en.value:en.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Ri=a.slice(e,1<r?1-r:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Th(){return!1}function rt(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?li:Th,this.isPropagationStopped=Th,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ig=rt(Lr),qa=ce({},Lr,{view:0,detail:0}),uk=rt(qa),us,cs,Gr,Ao=ce({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ng,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(us=e.screenX-Gr.screenX,cs=e.screenY-Gr.screenY):cs=us=0,Gr=e),us)},movementY:function(e){return"movementY"in e?e.movementY:cs}}),Ah=rt(Ao),ck=ce({},Ao,{dataTransfer:0}),dk=rt(ck),pk=ce({},qa,{relatedTarget:0}),ds=rt(pk),mk=ce({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),gk=rt(mk),fk=ce({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hk=rt(fk),yk=ce({},Lr,{data:0}),Ch=rt(yk),bk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ek(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sk[e])?!!t[e]:!1}function Ng(){return Ek}var wk=ce({},qa,{key:function(e){if(e.key){var t=bk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ng,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xk=rt(wk),Tk=ce({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=rt(Tk),Ak=ce({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ng}),Ck=rt(Ak),Rk=ce({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kk=rt(Rk),Ik=ce({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nk=rt(Ik),_k=[9,13,27,32],_g=qt&&"CompositionEvent"in window,aa=null;qt&&"documentMode"in document&&(aa=document.documentMode);var Lk=qt&&"TextEvent"in window&&!aa,uT=qt&&(!_g||aa&&8<aa&&11>=aa),kh=" ",Ih=!1;function cT(e,t){switch(e){case"keyup":return _k.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Ok(e,t){switch(e){case"compositionend":return dT(t);case"keypress":return t.which!==32?null:(Ih=!0,kh);case"textInput":return e=t.data,e===kh&&Ih?null:e;default:return null}}function Dk(e,t){if(Qn)return e==="compositionend"||!_g&&cT(e,t)?(e=lT(),Ri=kg=en=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uT&&t.locale!=="ko"?null:t.data;default:return null}}var Mk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mk[e.type]:t==="textarea"}function pT(e,t,n,r){z0(r),t=Xi(t,"onChange"),0<t.length&&(n=new Ig("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ia=null,Ea=null;function Pk(e){xT(e,0)}function Co(e){var t=nr(e);if(P0(t))return e}function Fk(e,t){if(e==="change")return t}var mT=!1;if(qt){var ps;if(qt){var ms="oninput"in document;if(!ms){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),ms=typeof _h.oninput=="function"}ps=ms}else ps=!1;mT=ps&&(!document.documentMode||9<document.documentMode)}function Lh(){ia&&(ia.detachEvent("onpropertychange",gT),Ea=ia=null)}function gT(e){if(e.propertyName==="value"&&Co(Ea)){var t=[];pT(t,Ea,e,xg(e)),W0(Pk,t)}}function Bk(e,t,n){e==="focusin"?(Lh(),ia=t,Ea=n,ia.attachEvent("onpropertychange",gT)):e==="focusout"&&Lh()}function jk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Ea)}function Uk(e,t){if(e==="click")return Co(t)}function Gk(e,t){if(e==="input"||e==="change")return Co(t)}function qk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:qk;function wa(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Xp.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dh(e,t){var n=Oh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function fT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hT(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zk(e){var t=hT(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fT(n.ownerDocument.documentElement,n)){if(r!==null&&Lg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Dh(n,i);var o=Dh(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $k=qt&&"documentMode"in document&&11>=document.documentMode,er=null,hm=null,oa=null,ym=!1;function Mh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ym||er==null||er!==$i(r)||(r=er,"selectionStart"in r&&Lg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&wa(oa,r)||(oa=r,r=Xi(hm,"onSelect"),0<r.length&&(t=new Ig("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},gs={},yT={};qt&&(yT=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ro(e){if(gs[e])return gs[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yT)return gs[e]=t[n];return e}var bT=Ro("animationend"),vT=Ro("animationiteration"),ST=Ro("animationstart"),ET=Ro("transitionend"),wT=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){wT.set(e,t),Gn(t,[e])}for(var fs=0;fs<Ph.length;fs++){var hs=Ph[fs],Vk=hs.toLowerCase(),Hk=hs[0].toUpperCase()+hs.slice(1);yn(Vk,"on"+Hk)}yn(bT,"onAnimationEnd");yn(vT,"onAnimationIteration");yn(ST,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(ET,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Fh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,VR(r,t,void 0,e),e.currentTarget=null}function xT(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Fh(a,s,u),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Fh(a,s,u),i=l}}}if(Hi)throw e=pm,Hi=!1,pm=null,e}function re(e,t){var n=t[wm];n===void 0&&(n=t[wm]=new Set);var r=e+"__bubble";n.has(r)||(TT(t,e,2,!1),n.add(r))}function ys(e,t,n){var r=0;t&&(r|=4),TT(n,e,r,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function xa(e){if(!e[ci]){e[ci]=!0,_0.forEach(function(n){n!=="selectionchange"&&(Wk.has(n)||ys(n,!1,e),ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,ys("selectionchange",!1,t))}}function TT(e,t,n,r){switch(sT(t)){case 1:var a=sk;break;case 4:a=lk;break;default:a=Rg}n=a.bind(null,t,n,e),a=void 0,!dm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bs(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=In(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}W0(function(){var u=i,p=xg(n),d=[];e:{var g=wT.get(e);if(g!==void 0){var h=Ig,v=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":h=xk;break;case"focusin":v="focus",h=ds;break;case"focusout":v="blur",h=ds;break;case"beforeblur":case"afterblur":h=ds;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ck;break;case bT:case vT:case ST:h=gk;break;case ET:h=kk;break;case"scroll":h=uk;break;case"wheel":h=Nk;break;case"copy":case"cut":case"paste":h=hk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Rh}var b=(t&4)!==0,w=!b&&e==="scroll",y=b?g!==null?g+"Capture":null:g;b=[];for(var m=u,f;m!==null;){f=m;var E=f.stateNode;if(f.tag===5&&E!==null&&(f=E,y!==null&&(E=ya(m,y),E!=null&&b.push(Ta(m,E,f)))),w)break;m=m.return}0<b.length&&(g=new h(g,v,null,n,p),d.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&n!==um&&(v=n.relatedTarget||n.fromElement)&&(In(v)||v[zt]))break e;if((h||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?In(v):null,v!==null&&(w=qn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(b=Ah,E="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Rh,E="onPointerLeave",y="onPointerEnter",m="pointer"),w=h==null?g:nr(h),f=v==null?g:nr(v),g=new b(E,m+"leave",h,n,p),g.target=w,g.relatedTarget=f,E=null,In(p)===u&&(b=new b(y,m+"enter",v,n,p),b.target=f,b.relatedTarget=w,E=b),w=E,h&&v)t:{for(b=h,y=v,m=0,f=b;f;f=Jn(f))m++;for(f=0,E=y;E;E=Jn(E))f++;for(;0<m-f;)b=Jn(b),m--;for(;0<f-m;)y=Jn(y),f--;for(;m--;){if(b===y||y!==null&&b===y.alternate)break t;b=Jn(b),y=Jn(y)}b=null}else b=null;h!==null&&Bh(d,g,h,b,!1),v!==null&&w!==null&&Bh(d,w,v,b,!0)}}e:{if(g=u?nr(u):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var x=Fk;else if(Nh(g))if(mT)x=Gk;else{x=jk;var T=Bk}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=Uk);if(x&&(x=x(e,u))){pT(d,x,n,p);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&am(g,"number",g.value)}switch(T=u?nr(u):window,e){case"focusin":(Nh(T)||T.contentEditable==="true")&&(er=T,hm=u,oa=null);break;case"focusout":oa=hm=er=null;break;case"mousedown":ym=!0;break;case"contextmenu":case"mouseup":case"dragend":ym=!1,Mh(d,n,p);break;case"selectionchange":if($k)break;case"keydown":case"keyup":Mh(d,n,p)}var C;if(_g)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Qn?cT(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(uT&&n.locale!=="ko"&&(Qn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Qn&&(C=lT()):(en=p,kg="value"in en?en.value:en.textContent,Qn=!0)),T=Xi(u,A),0<T.length&&(A=new Ch(A,e,null,n,p),d.push({event:A,listeners:T}),C?A.data=C:(C=dT(n),C!==null&&(A.data=C)))),(C=Lk?Ok(e,n):Dk(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(p=new Ch("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=C))}xT(d,t)})}function Ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ya(e,n),i!=null&&r.unshift(Ta(e,i,a)),i=ya(e,t),i!=null&&r.push(Ta(e,i,a))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bh(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,a?(l=ya(n,i),l!=null&&o.unshift(Ta(n,l,s))):a||(l=ya(n,i),l!=null&&o.push(Ta(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jk=/\r\n?/g,Kk=/\u0000|\uFFFD/g;function jh(e){return(typeof e=="string"?e:""+e).replace(Jk,`
`).replace(Kk,"")}function di(e,t,n){if(t=jh(t),jh(e)!==t&&n)throw Error(_(425))}function Zi(){}var bm=null,vm=null;function Sm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Em=typeof setTimeout=="function"?setTimeout:void 0,Yk=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Xk=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(e){return Uh.resolve(null).then(e).catch(Zk)}:Em;function Zk(e){setTimeout(function(){throw e})}function vs(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Sa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Sa(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Or,Aa="__reactProps$"+Or,zt="__reactContainer$"+Or,wm="__reactEvents$"+Or,Qk="__reactListeners$"+Or,eI="__reactHandles$"+Or;function In(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gh(e);e!==null;){if(n=e[Ct])return n;e=Gh(e)}return t}e=n,n=e.parentNode}return null}function za(e){return e=e[Ct]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ko(e){return e[Aa]||null}var xm=[],rr=-1;function bn(e){return{current:e}}function ae(e){0>rr||(e.current=xm[rr],xm[rr]=null,rr--)}function Q(e,t){rr++,xm[rr]=e.current,e.current=t}var gn={},Me=bn(gn),We=bn(!1),Pn=gn;function xr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function Qi(){ae(We),ae(Me)}function qh(e,t,n){if(Me.current!==gn)throw Error(_(168));Q(Me,t),Q(We,n)}function AT(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,BR(e)||"Unknown",a));return ce({},n,r)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Pn=Me.current,Q(Me,e),Q(We,We.current),!0}function zh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=AT(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ae(We),ae(Me),Q(Me,e)):ae(We),Q(We,n)}var Lt=null,Io=!1,Ss=!1;function CT(e){Lt===null?Lt=[e]:Lt.push(e)}function tI(e){Io=!0,CT(e)}function vn(){if(!Ss&&Lt!==null){Ss=!0;var e=0,t=X;try{var n=Lt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,Io=!1}catch(a){throw Lt!==null&&(Lt=Lt.slice(e+1)),X0(Tg,vn),a}finally{X=t,Ss=!1}}return null}var ar=[],ir=0,to=null,no=0,st=[],lt=0,Fn=null,Ot=1,Dt="";function An(e,t){ar[ir++]=no,ar[ir++]=to,to=e,no=t}function RT(e,t,n){st[lt++]=Ot,st[lt++]=Dt,st[lt++]=Fn,Fn=e;var r=Ot;e=Dt;var a=32-vt(r)-1;r&=~(1<<a),n+=1;var i=32-vt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ot=1<<32-vt(t)+a|n<<a|r,Dt=i+e}else Ot=1<<i|n<<a|r,Dt=e}function Og(e){e.return!==null&&(An(e,1),RT(e,1,0))}function Dg(e){for(;e===to;)to=ar[--ir],ar[ir]=null,no=ar[--ir],ar[ir]=null;for(;e===Fn;)Fn=st[--lt],st[lt]=null,Dt=st[--lt],st[lt]=null,Ot=st[--lt],st[lt]=null}var Qe=null,Ze=null,oe=!1,bt=null;function kT(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $h(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ze=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Ot,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ze=null,!0):!1;default:return!1}}function Tm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Am(e){if(oe){var t=Ze;if(t){var n=t;if(!$h(e,t)){if(Tm(e))throw Error(_(418));t=sn(n.nextSibling);var r=Qe;t&&$h(e,t)?kT(r,n):(e.flags=e.flags&-4097|2,oe=!1,Qe=e)}}else{if(Tm(e))throw Error(_(418));e.flags=e.flags&-4097|2,oe=!1,Qe=e}}}function Vh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function pi(e){if(e!==Qe)return!1;if(!oe)return Vh(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sm(e.type,e.memoizedProps)),t&&(t=Ze)){if(Tm(e))throw IT(),Error(_(418));for(;t;)kT(e,t),t=sn(t.nextSibling)}if(Vh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Qe?sn(e.stateNode.nextSibling):null;return!0}function IT(){for(var e=Ze;e;)e=sn(e.nextSibling)}function Tr(){Ze=Qe=null,oe=!1}function Mg(e){bt===null?bt=[e]:bt.push(e)}var nI=Wt.ReactCurrentBatchConfig;function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hh(e){var t=e._init;return t(e._payload)}function NT(e){function t(y,m){if(e){var f=y.deletions;f===null?(y.deletions=[m],y.flags|=16):f.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function a(y,m){return y=dn(y,m),y.index=0,y.sibling=null,y}function i(y,m,f){return y.index=f,e?(f=y.alternate,f!==null?(f=f.index,f<m?(y.flags|=2,m):f):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,m,f,E){return m===null||m.tag!==6?(m=Rs(f,y.mode,E),m.return=y,m):(m=a(m,f),m.return=y,m)}function l(y,m,f,E){var x=f.type;return x===Zn?p(y,m,f.props.children,E,f.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Yt&&Hh(x)===m.type)?(E=a(m,f.props),E.ref=qr(y,m,f),E.return=y,E):(E=Mi(f.type,f.key,f.props,null,y.mode,E),E.ref=qr(y,m,f),E.return=y,E)}function u(y,m,f,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==f.containerInfo||m.stateNode.implementation!==f.implementation?(m=ks(f,y.mode,E),m.return=y,m):(m=a(m,f.children||[]),m.return=y,m)}function p(y,m,f,E,x){return m===null||m.tag!==7?(m=Dn(f,y.mode,E,x),m.return=y,m):(m=a(m,f),m.return=y,m)}function d(y,m,f){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Rs(""+m,y.mode,f),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ni:return f=Mi(m.type,m.key,m.props,null,y.mode,f),f.ref=qr(y,null,m),f.return=y,f;case Xn:return m=ks(m,y.mode,f),m.return=y,m;case Yt:var E=m._init;return d(y,E(m._payload),f)}if(Jr(m)||Fr(m))return m=Dn(m,y.mode,f,null),m.return=y,m;mi(y,m)}return null}function g(y,m,f,E){var x=m!==null?m.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:s(y,m,""+f,E);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ni:return f.key===x?l(y,m,f,E):null;case Xn:return f.key===x?u(y,m,f,E):null;case Yt:return x=f._init,g(y,m,x(f._payload),E)}if(Jr(f)||Fr(f))return x!==null?null:p(y,m,f,E,null);mi(y,f)}return null}function h(y,m,f,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(f)||null,s(m,y,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ni:return y=y.get(E.key===null?f:E.key)||null,l(m,y,E,x);case Xn:return y=y.get(E.key===null?f:E.key)||null,u(m,y,E,x);case Yt:var T=E._init;return h(y,m,f,T(E._payload),x)}if(Jr(E)||Fr(E))return y=y.get(f)||null,p(m,y,E,x,null);mi(m,E)}return null}function v(y,m,f,E){for(var x=null,T=null,C=m,A=m=0,R=null;C!==null&&A<f.length;A++){C.index>A?(R=C,C=null):R=C.sibling;var N=g(y,C,f[A],E);if(N===null){C===null&&(C=R);break}e&&C&&N.alternate===null&&t(y,C),m=i(N,m,A),T===null?x=N:T.sibling=N,T=N,C=R}if(A===f.length)return n(y,C),oe&&An(y,A),x;if(C===null){for(;A<f.length;A++)C=d(y,f[A],E),C!==null&&(m=i(C,m,A),T===null?x=C:T.sibling=C,T=C);return oe&&An(y,A),x}for(C=r(y,C);A<f.length;A++)R=h(C,y,A,f[A],E),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?A:R.key),m=i(R,m,A),T===null?x=R:T.sibling=R,T=R);return e&&C.forEach(function(D){return t(y,D)}),oe&&An(y,A),x}function b(y,m,f,E){var x=Fr(f);if(typeof x!="function")throw Error(_(150));if(f=x.call(f),f==null)throw Error(_(151));for(var T=x=null,C=m,A=m=0,R=null,N=f.next();C!==null&&!N.done;A++,N=f.next()){C.index>A?(R=C,C=null):R=C.sibling;var D=g(y,C,N.value,E);if(D===null){C===null&&(C=R);break}e&&C&&D.alternate===null&&t(y,C),m=i(D,m,A),T===null?x=D:T.sibling=D,T=D,C=R}if(N.done)return n(y,C),oe&&An(y,A),x;if(C===null){for(;!N.done;A++,N=f.next())N=d(y,N.value,E),N!==null&&(m=i(N,m,A),T===null?x=N:T.sibling=N,T=N);return oe&&An(y,A),x}for(C=r(y,C);!N.done;A++,N=f.next())N=h(C,y,A,N.value,E),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?A:N.key),m=i(N,m,A),T===null?x=N:T.sibling=N,T=N);return e&&C.forEach(function(G){return t(y,G)}),oe&&An(y,A),x}function w(y,m,f,E){if(typeof f=="object"&&f!==null&&f.type===Zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ni:e:{for(var x=f.key,T=m;T!==null;){if(T.key===x){if(x=f.type,x===Zn){if(T.tag===7){n(y,T.sibling),m=a(T,f.props.children),m.return=y,y=m;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Yt&&Hh(x)===T.type){n(y,T.sibling),m=a(T,f.props),m.ref=qr(y,T,f),m.return=y,y=m;break e}n(y,T);break}else t(y,T);T=T.sibling}f.type===Zn?(m=Dn(f.props.children,y.mode,E,f.key),m.return=y,y=m):(E=Mi(f.type,f.key,f.props,null,y.mode,E),E.ref=qr(y,m,f),E.return=y,y=E)}return o(y);case Xn:e:{for(T=f.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===f.containerInfo&&m.stateNode.implementation===f.implementation){n(y,m.sibling),m=a(m,f.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=ks(f,y.mode,E),m.return=y,y=m}return o(y);case Yt:return T=f._init,w(y,m,T(f._payload),E)}if(Jr(f))return v(y,m,f,E);if(Fr(f))return b(y,m,f,E);mi(y,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,m!==null&&m.tag===6?(n(y,m.sibling),m=a(m,f),m.return=y,y=m):(n(y,m),m=Rs(f,y.mode,E),m.return=y,y=m),o(y)):n(y,m)}return w}var Ar=NT(!0),_T=NT(!1),ro=bn(null),ao=null,or=null,Pg=null;function Fg(){Pg=or=ao=null}function Bg(e){var t=ro.current;ae(ro),e._currentValue=t}function Cm(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){ao=e,Pg=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Pg!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(ao===null)throw Error(_(308));or=e,ao.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Nn=null;function jg(e){Nn===null?Nn=[e]:Nn.push(e)}function LT(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,jg(t)):(n.next=a.next,a.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Ug(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function OT(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,$t(e,n)}return a=r.interleaved,a===null?(t.next=t,jg(r)):(t.next=a.next,a.next=t),r.interleaved=t,$t(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ag(e,n)}}function Wh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var a=e.updateQueue;Xt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=l))}if(i!==null){var d=a.baseState;o=0,p=u=l=null,s=i;do{var g=s.lane,h=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,b=s;switch(g=t,h=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(h,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,g=typeof v=="function"?v.call(h,d,g):v,g==null)break e;d=ce({},d,g);break e;case 2:Xt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else h={eventTime:h,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=h,l=d):p=p.next=h,o|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(p===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);jn|=o,e.lanes=o,e.memoizedState=d}}function Jh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var $a={},kt=bn($a),Ca=bn($a),Ra=bn($a);function _n(e){if(e===$a)throw Error(_(174));return e}function Gg(e,t){switch(Q(Ra,t),Q(Ca,e),Q(kt,$a),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:om(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=om(t,e)}ae(kt),Q(kt,t)}function Cr(){ae(kt),ae(Ca),ae(Ra)}function DT(e){_n(Ra.current);var t=_n(kt.current),n=om(t,e.type);t!==n&&(Q(Ca,e),Q(kt,n))}function qg(e){Ca.current===e&&(ae(kt),ae(Ca))}var se=bn(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=[];function zg(){for(var e=0;e<Es.length;e++)Es[e]._workInProgressVersionPrimary=null;Es.length=0}var Ni=Wt.ReactCurrentDispatcher,ws=Wt.ReactCurrentBatchConfig,Bn=0,ue=null,be=null,Se=null,so=!1,sa=!1,ka=0,rI=0;function ke(){throw Error(_(321))}function $g(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Vg(e,t,n,r,a,i){if(Bn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?sI:lI,e=n(r,a),sa){i=0;do{if(sa=!1,ka=0,25<=i)throw Error(_(301));i+=1,Se=be=null,t.updateQueue=null,Ni.current=uI,e=n(r,a)}while(sa)}if(Ni.current=lo,t=be!==null&&be.next!==null,Bn=0,Se=be=ue=null,so=!1,t)throw Error(_(300));return e}function Hg(){var e=ka!==0;return ka=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ue.memoizedState=Se=e:Se=Se.next=e,Se}function pt(){if(be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Se===null?ue.memoizedState:Se.next;if(t!==null)Se=t,be=e;else{if(e===null)throw Error(_(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Se===null?ue.memoizedState=Se=e:Se=Se.next=e}return Se}function Ia(e,t){return typeof t=="function"?t(e):t}function xs(e){var t=pt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=be,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,l=null,u=i;do{var p=u.lane;if((Bn&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,ue.lanes|=p,jn|=p}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=s,Et(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ue.lanes|=i,jn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ts(e){var t=pt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Et(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function MT(){}function PT(e,t){var n=ue,r=pt(),a=t(),i=!Et(r.memoizedState,a);if(i&&(r.memoizedState=a,He=!0),r=r.queue,Wg(jT.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Na(9,BT.bind(null,n,r,a,t),void 0,null),Ee===null)throw Error(_(349));Bn&30||FT(n,t,a)}return a}function FT(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function BT(e,t,n,r){t.value=n,t.getSnapshot=r,UT(t)&&GT(e)}function jT(e,t,n){return n(function(){UT(t)&&GT(e)})}function UT(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function GT(e){var t=$t(e,1);t!==null&&St(t,e,1,-1)}function Kh(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},t.queue=e,e=e.dispatch=oI.bind(null,ue,e),[t.memoizedState,e]}function Na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qT(){return pt().memoizedState}function _i(e,t,n,r){var a=Tt();ue.flags|=e,a.memoizedState=Na(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var a=pt();r=r===void 0?null:r;var i=void 0;if(be!==null){var o=be.memoizedState;if(i=o.destroy,r!==null&&$g(r,o.deps)){a.memoizedState=Na(t,n,i,r);return}}ue.flags|=e,a.memoizedState=Na(1|t,n,i,r)}function Yh(e,t){return _i(8390656,8,e,t)}function Wg(e,t){return No(2048,8,e,t)}function zT(e,t){return No(4,2,e,t)}function $T(e,t){return No(4,4,e,t)}function VT(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function HT(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,VT.bind(null,t,e),n)}function Jg(){}function WT(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$g(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function JT(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$g(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function KT(e,t,n){return Bn&21?(Et(n,t)||(n=eT(),ue.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function aI(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=ws.transition;ws.transition={};try{e(!1),t()}finally{X=n,ws.transition=r}}function YT(){return pt().memoizedState}function iI(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},XT(e))ZT(t,n);else if(n=LT(e,t,n,r),n!==null){var a=Ue();St(n,e,r,a),QT(n,t,r)}}function oI(e,t,n){var r=cn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(XT(e))ZT(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,Et(s,o)){var l=t.interleaved;l===null?(a.next=a,jg(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=LT(e,t,a,r),n!==null&&(a=Ue(),St(n,e,r,a),QT(n,t,r))}}function XT(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function ZT(e,t){sa=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function QT(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ag(e,n)}}var lo={readContext:dt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},sI={readContext:dt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Yh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,VT.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iI.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Kh,useDebugValue:Jg,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Kh(!1),t=e[0];return e=aI.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,a=Tt();if(oe){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ee===null)throw Error(_(349));Bn&30||FT(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Yh(jT.bind(null,r,i,e),[e]),r.flags|=2048,Na(9,BT.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ee.identifierPrefix;if(oe){var n=Dt,r=Ot;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lI={readContext:dt,useCallback:WT,useContext:dt,useEffect:Wg,useImperativeHandle:HT,useInsertionEffect:zT,useLayoutEffect:$T,useMemo:JT,useReducer:xs,useRef:qT,useState:function(){return xs(Ia)},useDebugValue:Jg,useDeferredValue:function(e){var t=pt();return KT(t,be.memoizedState,e)},useTransition:function(){var e=xs(Ia)[0],t=pt().memoizedState;return[e,t]},useMutableSource:MT,useSyncExternalStore:PT,useId:YT,unstable_isNewReconciler:!1},uI={readContext:dt,useCallback:WT,useContext:dt,useEffect:Wg,useImperativeHandle:HT,useInsertionEffect:zT,useLayoutEffect:$T,useMemo:JT,useReducer:Ts,useRef:qT,useState:function(){return Ts(Ia)},useDebugValue:Jg,useDeferredValue:function(e){var t=pt();return be===null?t.memoizedState=e:KT(t,be.memoizedState,e)},useTransition:function(){var e=Ts(Ia)[0],t=pt().memoizedState;return[e,t]},useMutableSource:MT,useSyncExternalStore:PT,useId:YT,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=cn(e),i=Pt(r,a);i.payload=t,n!=null&&(i.callback=n),t=ln(e,i,a),t!==null&&(St(t,e,a,r),Ii(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=cn(e),i=Pt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ln(e,i,a),t!==null&&(St(t,e,a,r),Ii(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=cn(e),a=Pt(n,r);a.tag=2,t!=null&&(a.callback=t),t=ln(e,a,r),t!==null&&(St(t,e,r,n),Ii(t,e,r))}};function Xh(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!wa(n,r)||!wa(a,i):!0}function eA(e,t,n){var r=!1,a=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(a=Je(t)?Pn:Me.current,r=t.contextTypes,i=(r=r!=null)?xr(e,a):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function km(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ug(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=dt(i):(i=Je(t)?Pn:Me.current,a.context=xr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rm(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_o.enqueueReplaceState(a,a.state,null),io(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=FR(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Im(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cI=typeof WeakMap=="function"?WeakMap:Map;function tA(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){co||(co=!0,jm=r),Im(e,t)},n}function nA(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Im(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Im(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cI;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=TI.bind(null,e,t,n),t.then(e,e))}function ey(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ty(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var dI=Wt.ReactCurrentOwner,He=!1;function je(e,t,n,r){t.child=e===null?_T(t,null,n,r):Ar(t,e.child,n,r)}function ny(e,t,n,r,a){n=n.render;var i=t.ref;return Sr(t,a),r=Vg(e,t,n,r,i,a),n=Hg(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vt(e,t,a)):(oe&&n&&Og(t),t.flags|=1,je(e,t,r,a),t.child)}function ry(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!nf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rA(e,t,i,r,a)):(e=Mi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&e.ref===t.ref)return Vt(e,t,a)}return t.flags|=1,e=dn(i,r),e.ref=t.ref,e.return=t,t.child=e}function rA(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(wa(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Vt(e,t,a)}return Nm(e,t,n,r,a)}function aA(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(lr,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(lr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Q(lr,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Q(lr,Xe),Xe|=r;return je(e,t,a,n),t.child}function iA(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nm(e,t,n,r,a){var i=Je(n)?Pn:Me.current;return i=xr(t,i),Sr(t,a),n=Vg(e,t,n,r,i,a),r=Hg(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vt(e,t,a)):(oe&&r&&Og(t),t.flags|=1,je(e,t,n,a),t.child)}function ay(e,t,n,r,a){if(Je(n)){var i=!0;eo(t)}else i=!1;if(Sr(t,a),t.stateNode===null)Li(e,t),eA(t,n,r),km(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Je(n)?Pn:Me.current,u=xr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Zh(t,o,r,u),Xt=!1;var g=t.memoizedState;o.state=g,io(t,r,o,a),l=t.memoizedState,s!==r||g!==l||We.current||Xt?(typeof p=="function"&&(Rm(t,n,p,r),l=t.memoizedState),(s=Xt||Xh(t,n,s,r,g,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,OT(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ft(t.type,s),o.props=u,d=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Je(n)?Pn:Me.current,l=xr(t,l));var h=n.getDerivedStateFromProps;(p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||g!==l)&&Zh(t,o,r,l),Xt=!1,g=t.memoizedState,o.state=g,io(t,r,o,a);var v=t.memoizedState;s!==d||g!==v||We.current||Xt?(typeof h=="function"&&(Rm(t,n,h,r),v=t.memoizedState),(u=Xt||Xh(t,n,u,r,g,v,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return _m(e,t,n,r,i,a)}function _m(e,t,n,r,a,i){iA(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&zh(t,n,!1),Vt(e,t,i);r=t.stateNode,dI.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ar(t,e.child,null,i),t.child=Ar(t,null,s,i)):je(e,t,s,i),t.memoizedState=r.state,a&&zh(t,n,!0),t.child}function oA(e){var t=e.stateNode;t.pendingContext?qh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qh(e,t.context,!1),Gg(e,t.containerInfo)}function iy(e,t,n,r,a){return Tr(),Mg(a),t.flags|=256,je(e,t,n,r),t.child}var Lm={dehydrated:null,treeContext:null,retryLane:0};function Om(e){return{baseLanes:e,cachePool:null,transitions:null}}function sA(e,t,n){var r=t.pendingProps,a=se.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Q(se,a&1),e===null)return Am(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Do(o,r,0,null),e=Dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Om(n),t.memoizedState=Lm,e):Kg(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return pI(e,t,o,r,s,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=dn(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=dn(s,i):(i=Dn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Om(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Lm,r}return i=e.child,e=i.sibling,r=dn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kg(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,r){return r!==null&&Mg(r),Ar(t,e.child,null,n),e=Kg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pI(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=As(Error(_(422))),gi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Do({mode:"visible",children:r.children},a,0,null),i=Dn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ar(t,e.child,null,o),t.child.memoizedState=Om(o),t.memoizedState=Lm,i);if(!(t.mode&1))return gi(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=As(i,r,void 0),gi(e,t,o,r)}if(s=(o&e.childLanes)!==0,He||s){if(r=Ee,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,$t(e,a),St(r,e,a,-1))}return tf(),r=As(Error(_(421))),gi(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=AI.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ze=sn(a.nextSibling),Qe=t,oe=!0,bt=null,e!==null&&(st[lt++]=Ot,st[lt++]=Dt,st[lt++]=Fn,Ot=e.id,Dt=e.overflow,Fn=t),t=Kg(t,r.children),t.flags|=4096,t)}function oy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cm(e.return,t,n)}function Cs(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function lA(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(je(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oy(e,n,t);else if(e.tag===19)oy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(se,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Cs(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&oo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Cs(t,!0,n,null,i);break;case"together":Cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mI(e,t,n){switch(t.tag){case 3:oA(t),Tr();break;case 5:DT(t);break;case 1:Je(t.type)&&eo(t);break;case 4:Gg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Q(ro,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?sA(e,t,n):(Q(se,se.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);Q(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lA(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Q(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,aA(e,t,n)}return Vt(e,t,n)}var uA,Dm,cA,dA;uA=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dm=function(){};cA=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,_n(kt.current);var i=null;switch(n){case"input":a=nm(e,a),r=nm(e,r),i=[];break;case"select":a=ce({},a,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":a=im(e,a),r=im(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}sm(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};dA=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gI(e,t,n){var r=t.pendingProps;switch(Dg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Je(t.type)&&Qi(),Ie(t),null;case 3:return r=t.stateNode,Cr(),ae(We),ae(Me),zg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(qm(bt),bt=null))),Dm(e,t),Ie(t),null;case 5:qg(t);var a=_n(Ra.current);if(n=t.type,e!==null&&t.stateNode!=null)cA(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ie(t),null}if(e=_n(kt.current),pi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[Aa]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(a=0;a<Yr.length;a++)re(Yr[a],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":fh(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":yh(r,i),re("invalid",r)}sm(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&di(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&di(r.textContent,s,e),a=["children",""+s]):fa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":ri(r),hh(r,i,!0);break;case"textarea":ri(r),bh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=j0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ct]=t,e[Aa]=r,uA(e,t,!1,!1),t.stateNode=e;e:{switch(o=lm(n,r),n){case"dialog":re("cancel",e),re("close",e),a=r;break;case"iframe":case"object":case"embed":re("load",e),a=r;break;case"video":case"audio":for(a=0;a<Yr.length;a++)re(Yr[a],e);a=r;break;case"source":re("error",e),a=r;break;case"img":case"image":case"link":re("error",e),re("load",e),a=r;break;case"details":re("toggle",e),a=r;break;case"input":fh(e,r),a=nm(e,r),re("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":yh(e,r),a=im(e,r),re("invalid",e);break;default:a=r}sm(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?q0(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&U0(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(e,l):typeof l=="number"&&ha(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fa.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",e):l!=null&&vg(e,i,l,o))}switch(n){case"input":ri(e),hh(e,r,!1);break;case"textarea":ri(e),bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hr(e,!!r.multiple,i,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)dA(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=_n(Ra.current),_n(kt.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ie(t),null;case 13:if(ae(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ze!==null&&t.mode&1&&!(t.flags&128))IT(),Tr(),t.flags|=98560,i=!1;else if(i=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Ct]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else bt!==null&&(qm(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):tf())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Cr(),Dm(e,t),e===null&&xa(t.stateNode.containerInfo),Ie(t),null;case 10:return Bg(t.type._context),Ie(t),null;case 17:return Je(t.type)&&Qi(),Ie(t),null;case 19:if(ae(se),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)zr(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oo(e),o!==null){for(t.flags|=128,zr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>kr&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=oo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!oe)return Ie(t),null}else 2*me()-i.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=se.current,Q(se,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return ef(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function fI(e,t){switch(Dg(t),t.tag){case 1:return Je(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),ae(We),ae(Me),zg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qg(t),null;case 13:if(ae(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(se),null;case 4:return Cr(),null;case 10:return Bg(t.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var fi=!1,_e=!1,hI=typeof WeakSet=="function"?WeakSet:Set,M=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Mm(e,t,n){try{n()}catch(r){de(e,t,r)}}var sy=!1;function yI(e,t){if(bm=Ki,e=hT(),Lg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,p=0,d=e,g=null;t:for(;;){for(var h;d!==n||a!==0&&d.nodeType!==3||(s=o+a),d!==i||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)g=d,d=h;for(;;){if(d===e)break t;if(g===n&&++u===a&&(s=o),g===i&&++p===r&&(l=o),(h=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vm={focusedElem:e,selectionRange:n},Ki=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,w=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:ft(t.type,b),w);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(E){de(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=sy,sy=!1,v}function la(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Mm(t,n,i)}a=a.next}while(a!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pm(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pA(e){var t=e.alternate;t!==null&&(e.alternate=null,pA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Aa],delete t[wm],delete t[Qk],delete t[eI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mA(e){return e.tag===5||e.tag===3||e.tag===4}function ly(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(Fm(e,t,n),e=e.sibling;e!==null;)Fm(e,t,n),e=e.sibling}function Bm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bm(e,t,n),e=e.sibling;e!==null;)Bm(e,t,n),e=e.sibling}var we=null,yt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)gA(e,t,n),n=n.sibling}function gA(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:_e||sr(n,t);case 6:var r=we,a=yt;we=null,Jt(e,t,n),we=r,yt=a,we!==null&&(yt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(yt?(e=we,n=n.stateNode,e.nodeType===8?vs(e.parentNode,n):e.nodeType===1&&vs(e,n),Sa(e)):vs(we,n.stateNode));break;case 4:r=we,a=yt,we=n.stateNode.containerInfo,yt=!0,Jt(e,t,n),we=r,yt=a;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mm(n,t,o),a=a.next}while(a!==r)}Jt(e,t,n);break;case 1:if(!_e&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Jt(e,t,n),_e=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function uy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hI),t.forEach(function(r){var a=CI.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,yt=!1;break e;case 3:we=s.stateNode.containerInfo,yt=!0;break e;case 4:we=s.stateNode.containerInfo,yt=!0;break e}s=s.return}if(we===null)throw Error(_(160));gA(i,o,a),we=null,yt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){de(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fA(t,e),t=t.sibling}function fA(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),wt(e),r&4){try{la(3,e,e.return),Lo(3,e)}catch(b){de(e,e.return,b)}try{la(5,e,e.return)}catch(b){de(e,e.return,b)}}break;case 1:gt(t,e),wt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(gt(t,e),wt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var a=e.stateNode;try{ha(a,"")}catch(b){de(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&F0(a,i),lm(s,o);var u=lm(s,i);for(o=0;o<l.length;o+=2){var p=l[o],d=l[o+1];p==="style"?q0(a,d):p==="dangerouslySetInnerHTML"?U0(a,d):p==="children"?ha(a,d):vg(a,p,d,u)}switch(s){case"input":rm(a,i);break;case"textarea":B0(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?hr(a,!!i.multiple,h,!1):g!==!!i.multiple&&(i.defaultValue!=null?hr(a,!!i.multiple,i.defaultValue,!0):hr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Aa]=i}catch(b){de(e,e.return,b)}}break;case 6:if(gt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){de(e,e.return,b)}}break;case 3:if(gt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(b){de(e,e.return,b)}break;case 4:gt(t,e),wt(e);break;case 13:gt(t,e),wt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Zg=me())),r&4&&uy(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||p,gt(t,e),_e=u):gt(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(M=e,p=e.child;p!==null;){for(d=M=p;M!==null;){switch(g=M,h=g.child,g.tag){case 0:case 11:case 14:case 15:la(4,g,g.return);break;case 1:sr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){de(r,n,b)}}break;case 5:sr(g,g.return);break;case 22:if(g.memoizedState!==null){dy(d);continue}}h!==null?(h.return=g,M=h):dy(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=G0("display",o))}catch(b){de(e,e.return,b)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){de(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(t,e),wt(e),r&4&&uy(e);break;case 21:break;default:gt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mA(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(ha(a,""),r.flags&=-33);var i=ly(e);Bm(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ly(e);Fm(e,s,o);break;default:throw Error(_(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bI(e,t,n){M=e,hA(e)}function hA(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var a=M,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||fi;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||_e;s=fi;var u=_e;if(fi=o,(_e=l)&&!u)for(M=a;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?py(a):l!==null?(l.return=o,M=l):py(a);for(;i!==null;)M=i,hA(i),i=i.sibling;M=a,fi=s,_e=u}cy(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,M=i):cy(e)}}function cy(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Jh(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}_e||t.flags&512&&Pm(t)}catch(g){de(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function dy(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function py(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(l){de(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){de(t,a,l)}}var i=t.return;try{Pm(t)}catch(l){de(t,i,l)}break;case 5:var o=t.return;try{Pm(t)}catch(l){de(t,o,l)}}}catch(l){de(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var vI=Math.ceil,uo=Wt.ReactCurrentDispatcher,Yg=Wt.ReactCurrentOwner,ct=Wt.ReactCurrentBatchConfig,K=0,Ee=null,fe=null,Ae=0,Xe=0,lr=bn(0),ve=0,_a=null,jn=0,Oo=0,Xg=0,ua=null,Ve=null,Zg=0,kr=1/0,_t=null,co=!1,jm=null,un=null,hi=!1,tn=null,po=0,ca=0,Um=null,Oi=-1,Di=0;function Ue(){return K&6?me():Oi!==-1?Oi:Oi=me()}function cn(e){return e.mode&1?K&2&&Ae!==0?Ae&-Ae:nI.transition!==null?(Di===0&&(Di=eT()),Di):(e=X,e!==0||(e=window.event,e=e===void 0?16:sT(e.type)),e):1}function St(e,t,n,r){if(50<ca)throw ca=0,Um=null,Error(_(185));Ga(e,n,r),(!(K&2)||e!==Ee)&&(e===Ee&&(!(K&2)&&(Oo|=n),ve===4&&Qt(e,Ae)),Ke(e,r),n===1&&K===0&&!(t.mode&1)&&(kr=me()+500,Io&&vn()))}function Ke(e,t){var n=e.callbackNode;nk(e,t);var r=Ji(e,e===Ee?Ae:0);if(r===0)n!==null&&Eh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eh(n),t===1)e.tag===0?tI(my.bind(null,e)):CT(my.bind(null,e)),Xk(function(){!(K&6)&&vn()}),n=null;else{switch(tT(r)){case 1:n=Tg;break;case 4:n=Z0;break;case 16:n=Wi;break;case 536870912:n=Q0;break;default:n=Wi}n=TA(n,yA.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yA(e,t){if(Oi=-1,Di=0,K&6)throw Error(_(327));var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var r=Ji(e,e===Ee?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var a=K;K|=2;var i=vA();(Ee!==e||Ae!==t)&&(_t=null,kr=me()+500,On(e,t));do try{wI();break}catch(s){bA(e,s)}while(!0);Fg(),uo.current=i,K=a,fe!==null?t=0:(Ee=null,Ae=0,t=ve)}if(t!==0){if(t===2&&(a=mm(e),a!==0&&(r=a,t=Gm(e,a))),t===1)throw n=_a,On(e,0),Qt(e,r),Ke(e,me()),n;if(t===6)Qt(e,r);else{if(a=e.current.alternate,!(r&30)&&!SI(a)&&(t=mo(e,r),t===2&&(i=mm(e),i!==0&&(r=i,t=Gm(e,i))),t===1))throw n=_a,On(e,0),Qt(e,r),Ke(e,me()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Cn(e,Ve,_t);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=Zg+500-me(),10<t)){if(Ji(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Em(Cn.bind(null,e,Ve,_t),t);break}Cn(e,Ve,_t);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-vt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vI(r/1960))-r,10<r){e.timeoutHandle=Em(Cn.bind(null,e,Ve,_t),r);break}Cn(e,Ve,_t);break;case 5:Cn(e,Ve,_t);break;default:throw Error(_(329))}}}return Ke(e,me()),e.callbackNode===n?yA.bind(null,e):null}function Gm(e,t){var n=ua;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=mo(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&qm(t)),e}function qm(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function SI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Et(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Xg,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function my(e){if(K&6)throw Error(_(327));Er();var t=Ji(e,0);if(!(t&1))return Ke(e,me()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=mm(e);r!==0&&(t=r,n=Gm(e,r))}if(n===1)throw n=_a,On(e,0),Qt(e,t),Ke(e,me()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,Ve,_t),Ke(e,me()),null}function Qg(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(kr=me()+500,Io&&vn())}}function Un(e){tn!==null&&tn.tag===0&&!(K&6)&&Er();var t=K;K|=1;var n=ct.transition,r=X;try{if(ct.transition=null,X=1,e)return e()}finally{X=r,ct.transition=n,K=t,!(K&6)&&vn()}}function ef(){Xe=lr.current,ae(lr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yk(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Dg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Cr(),ae(We),ae(Me),zg();break;case 5:qg(r);break;case 4:Cr();break;case 13:ae(se);break;case 19:ae(se);break;case 10:Bg(r.type._context);break;case 22:case 23:ef()}n=n.return}if(Ee=e,fe=e=dn(e.current,null),Ae=Xe=t,ve=0,_a=null,Xg=Oo=jn=0,Ve=ua=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}Nn=null}return e}function bA(e,t){do{var n=fe;try{if(Fg(),Ni.current=lo,so){for(var r=ue.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}so=!1}if(Bn=0,Se=be=ue=null,sa=!1,ka=0,Yg.current=null,n===null||n.return===null){ve=1,_a=t,fe=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=Ae,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=s,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=ey(o);if(h!==null){h.flags&=-257,ty(h,o,s,i,t),h.mode&1&&Qh(i,u,t),t=h,l=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(l),t.updateQueue=b}else v.add(l);break e}else{if(!(t&1)){Qh(i,u,t),tf();break e}l=Error(_(426))}}else if(oe&&s.mode&1){var w=ey(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ty(w,o,s,i,t),Mg(Rr(l,s));break e}}i=l=Rr(l,s),ve!==4&&(ve=2),ua===null?ua=[i]:ua.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=tA(i,l,t);Wh(i,y);break e;case 1:s=l;var m=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(un===null||!un.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=nA(i,s,t);Wh(i,E);break e}}i=i.return}while(i!==null)}EA(n)}catch(x){t=x,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function vA(){var e=uo.current;return uo.current=lo,e===null?lo:e}function tf(){(ve===0||ve===3||ve===2)&&(ve=4),Ee===null||!(jn&268435455)&&!(Oo&268435455)||Qt(Ee,Ae)}function mo(e,t){var n=K;K|=2;var r=vA();(Ee!==e||Ae!==t)&&(_t=null,On(e,t));do try{EI();break}catch(a){bA(e,a)}while(!0);if(Fg(),K=n,uo.current=r,fe!==null)throw Error(_(261));return Ee=null,Ae=0,ve}function EI(){for(;fe!==null;)SA(fe)}function wI(){for(;fe!==null&&!WR();)SA(fe)}function SA(e){var t=xA(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?EA(e):fe=t,Yg.current=null}function EA(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fI(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,fe=null;return}}else if(n=gI(n,t,Xe),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ve===0&&(ve=5)}function Cn(e,t,n){var r=X,a=ct.transition;try{ct.transition=null,X=1,xI(e,t,n,r)}finally{ct.transition=a,X=r}return null}function xI(e,t,n,r){do Er();while(tn!==null);if(K&6)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rk(e,i),e===Ee&&(fe=Ee=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,TA(Wi,function(){return Er(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ct.transition,ct.transition=null;var o=X;X=1;var s=K;K|=4,Yg.current=null,yI(e,n),fA(n,e),zk(vm),Ki=!!bm,vm=bm=null,e.current=n,bI(n),JR(),K=s,X=o,ct.transition=i}else e.current=n;if(hi&&(hi=!1,tn=e,po=a),i=e.pendingLanes,i===0&&(un=null),XR(n.stateNode),Ke(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(co)throw co=!1,e=jm,jm=null,e;return po&1&&e.tag!==0&&Er(),i=e.pendingLanes,i&1?e===Um?ca++:(ca=0,Um=e):ca=0,vn(),null}function Er(){if(tn!==null){var e=tT(po),t=ct.transition,n=X;try{if(ct.transition=null,X=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,po=0,K&6)throw Error(_(331));var a=K;for(K|=4,M=e.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:la(8,p,i)}var d=p.child;if(d!==null)d.return=p,M=d;else for(;M!==null;){p=M;var g=p.sibling,h=p.return;if(pA(p),p===u){M=null;break}if(g!==null){g.return=h,M=g;break}M=h}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:la(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,M=y;break e}M=i.return}}var m=e.current;for(M=m;M!==null;){o=M;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,M=f;else e:for(o=m;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Lo(9,s)}}catch(x){de(s,s.return,x)}if(s===o){M=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,M=E;break e}M=s.return}}if(K=a,vn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{X=n,ct.transition=t}}return!1}function gy(e,t,n){t=Rr(n,t),t=tA(e,t,1),e=ln(e,t,1),t=Ue(),e!==null&&(Ga(e,1,t),Ke(e,t))}function de(e,t,n){if(e.tag===3)gy(e,e,n);else for(;t!==null;){if(t.tag===3){gy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=Rr(n,e),e=nA(t,e,1),t=ln(t,e,1),e=Ue(),t!==null&&(Ga(t,1,e),Ke(t,e));break}}t=t.return}}function TI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Ae&n)===n&&(ve===4||ve===3&&(Ae&130023424)===Ae&&500>me()-Zg?On(e,0):Xg|=n),Ke(e,t)}function wA(e,t){t===0&&(e.mode&1?(t=oi,oi<<=1,!(oi&130023424)&&(oi=4194304)):t=1);var n=Ue();e=$t(e,t),e!==null&&(Ga(e,t,n),Ke(e,n))}function AI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wA(e,n)}function CI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),wA(e,n)}var xA;xA=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,mI(e,t,n);He=!!(e.flags&131072)}else He=!1,oe&&t.flags&1048576&&RT(t,no,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var a=xr(t,Me.current);Sr(t,n),a=Vg(null,t,r,e,a,n);var i=Hg();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(i=!0,eo(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ug(t),a.updater=_o,t.stateNode=a,a._reactInternals=t,km(t,r,e,n),t=_m(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Og(t),je(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=kI(r),e=ft(r,e),a){case 0:t=Nm(null,t,r,e,n);break e;case 1:t=ay(null,t,r,e,n);break e;case 11:t=ny(null,t,r,e,n);break e;case 14:t=ry(null,t,r,ft(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),Nm(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),ay(e,t,r,a,n);case 3:e:{if(oA(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,a=i.element,OT(e,t),io(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Rr(Error(_(423)),t),t=iy(e,t,r,n,a);break e}else if(r!==a){a=Rr(Error(_(424)),t),t=iy(e,t,r,n,a);break e}else for(Ze=sn(t.stateNode.containerInfo.firstChild),Qe=t,oe=!0,bt=null,n=_T(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===a){t=Vt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return DT(t),e===null&&Am(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Sm(r,a)?o=null:i!==null&&Sm(r,i)&&(t.flags|=32),iA(e,t),je(e,t,o,n),t.child;case 6:return e===null&&Am(t),null;case 13:return sA(e,t,n);case 4:return Gg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),ny(e,t,r,a,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Q(ro,r._currentValue),r._currentValue=o,i!==null)if(Et(i.value,o)){if(i.children===a.children&&!We.current){t=Vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Pt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Cm(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Cm(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}je(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Sr(t,n),a=dt(a),r=r(a),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,a=ft(r,t.pendingProps),a=ft(r.type,a),ry(e,t,r,a,n);case 15:return rA(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ft(r,a),Li(e,t),t.tag=1,Je(r)?(e=!0,eo(t)):e=!1,Sr(t,n),eA(t,r,a),km(t,r,a,n),_m(null,t,r,!0,e,n);case 19:return lA(e,t,n);case 22:return aA(e,t,n)}throw Error(_(156,t.tag))};function TA(e,t){return X0(e,t)}function RI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new RI(e,t,n,r)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kI(e){if(typeof e=="function")return nf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eg)return 11;if(e===wg)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")nf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return Dn(n.children,a,i,t);case Sg:o=8,a|=8;break;case Zp:return e=ut(12,n,t,a|2),e.elementType=Zp,e.lanes=i,e;case Qp:return e=ut(13,n,t,a),e.elementType=Qp,e.lanes=i,e;case em:return e=ut(19,n,t,a),e.elementType=em,e.lanes=i,e;case D0:return Do(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L0:o=10;break e;case O0:o=9;break e;case Eg:o=11;break e;case wg:o=14;break e;case Yt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ut(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Dn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=ut(22,e,r,t),e.elementType=D0,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function II(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ls(0),this.expirationTimes=ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function rf(e,t,n,r,a,i,o,s,l){return e=new II(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ut(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ug(i),e}function NI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function AA(e){if(!e)return gn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Je(n))return AT(e,n,t)}return t}function CA(e,t,n,r,a,i,o,s,l){return e=rf(n,r,!0,e,a,i,o,s,l),e.context=AA(null),n=e.current,r=Ue(),a=cn(n),i=Pt(r,a),i.callback=t??null,ln(n,i,a),e.current.lanes=a,Ga(e,a,r),Ke(e,r),e}function Mo(e,t,n,r){var a=t.current,i=Ue(),o=cn(a);return n=AA(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(a,t,o),e!==null&&(St(e,a,o,i),Ii(e,a,o)),o}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function af(e,t){fy(e,t),(e=e.alternate)&&fy(e,t)}function _I(){return null}var RA=typeof reportError=="function"?reportError:function(e){console.error(e)};function of(e){this._internalRoot=e}Po.prototype.render=of.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Mo(e,t,null,null)};Po.prototype.unmount=of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Mo(null,e,null,null)}),t[zt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=aT();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&oT(e)}};function sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hy(){}function LI(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=go(o);i.call(u)}}var o=CA(t,r,e,0,null,!1,!1,"",hy);return e._reactRootContainer=o,e[zt]=o.current,xa(e.nodeType===8?e.parentNode:e),Un(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var u=go(l);s.call(u)}}var l=rf(e,0,!1,null,null,!1,!1,"",hy);return e._reactRootContainer=l,e[zt]=l.current,xa(e.nodeType===8?e.parentNode:e),Un(function(){Mo(t,l,n,r)}),l}function Bo(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=go(o);s.call(l)}}Mo(t,o,e,a)}else o=LI(n,t,e,a,r);return go(o)}nT=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(Ag(t,n|1),Ke(t,me()),!(K&6)&&(kr=me()+500,vn()))}break;case 13:Un(function(){var r=$t(e,1);if(r!==null){var a=Ue();St(r,e,1,a)}}),af(e,1)}};Cg=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ue();St(t,e,134217728,n)}af(e,134217728)}};rT=function(e){if(e.tag===13){var t=cn(e),n=$t(e,t);if(n!==null){var r=Ue();St(n,e,t,r)}af(e,t)}};aT=function(){return X};iT=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};cm=function(e,t,n){switch(t){case"input":if(rm(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ko(r);if(!a)throw Error(_(90));P0(r),rm(r,a)}}}break;case"textarea":B0(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};V0=Qg;H0=Un;var OI={usingClientEntryPoint:!1,Events:[za,nr,ko,z0,$0,Qg]},$r={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DI={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=K0(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||_I,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{To=yi.inject(DI),Rt=yi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(t))throw Error(_(200));return NI(e,t,null,n)};nt.createRoot=function(e,t){if(!sf(e))throw Error(_(299));var n=!1,r="",a=RA;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=rf(e,1,!1,null,null,n,!1,r,a),e[zt]=t.current,xa(e.nodeType===8?e.parentNode:e),new of(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=K0(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Un(e)};nt.hydrate=function(e,t,n){if(!Fo(t))throw Error(_(200));return Bo(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!sf(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=RA;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=CA(t,null,e,1,n??null,a,!1,i,o),e[zt]=t.current,xa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Po(t)};nt.render=function(e,t,n){if(!Fo(t))throw Error(_(200));return Bo(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(_(40));return e._reactRootContainer?(Un(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};nt.unstable_batchedUpdates=Qg;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Bo(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function kA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kA)}catch(e){console.error(e)}}kA(),k0.exports=nt;var MI=k0.exports;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}var nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nn||(nn={}));const yy="popstate";function PI(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:s="",hash:l=""}=zn(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),zm("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=a.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof i=="string"?i:fo(i))}function r(a,i){lf(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return BI(t,n,r,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function FI(){return Math.random().toString(36).substr(2,8)}function by(e,t){return{usr:e.state,key:e.key,idx:t}}function zm(e,t,n,r){return n===void 0&&(n=null),La({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zn(t):t,{state:n,key:t&&t.key||r||FI()})}function fo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function BI(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=nn.Pop,l=null,u=p();u==null&&(u=0,o.replaceState(La({},o.state,{idx:u}),""));function p(){return(o.state||{idx:null}).idx}function d(){s=nn.Pop;let w=p(),y=w==null?null:w-u;u=w,l&&l({action:s,location:b.location,delta:y})}function g(w,y){s=nn.Push;let m=zm(b.location,w,y);n&&n(m,w),u=p()+1;let f=by(m,u),E=b.createHref(m);try{o.pushState(f,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;a.location.assign(E)}i&&l&&l({action:s,location:b.location,delta:1})}function h(w,y){s=nn.Replace;let m=zm(b.location,w,y);n&&n(m,w),u=p();let f=by(m,u),E=b.createHref(m);o.replaceState(f,"",E),i&&l&&l({action:s,location:b.location,delta:0})}function v(w){let y=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof w=="string"?w:fo(w);return m=m.replace(/ $/,"%20"),he(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let b={get action(){return s},get location(){return e(a,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(yy,d),l=w,()=>{a.removeEventListener(yy,d),l=null}},createHref(w){return t(a,w)},createURL:v,encodeLocation(w){let y=v(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:h,go(w){return o.go(w)}};return b}var vy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vy||(vy={}));function jI(e,t,n){return n===void 0&&(n="/"),UI(e,t,n,!1)}function UI(e,t,n,r){let a=typeof t=="string"?zn(t):t,i=uf(a.pathname||"/",n);if(i==null)return null;let o=IA(e);GI(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let u=ZI(i);s=YI(o[l],u,r)}return s}function IA(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=pn([r,l.relativePath]),p=n.concat(l);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),IA(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:JI(u,i.index),routesMeta:p})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of NA(i.path))a(i,o,l)}),t}function NA(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=NA(r.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function GI(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:KI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qI=/^:[\w-]+$/,zI=3,$I=2,VI=1,HI=10,WI=-2,Sy=e=>e==="*";function JI(e,t){let n=e.split("/"),r=n.length;return n.some(Sy)&&(r+=WI),t&&(r+=$I),n.filter(a=>!Sy(a)).reduce((a,i)=>a+(qI.test(i)?zI:i===""?VI:HI),r)}function KI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function YI(e,t,n){let{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",d=Ey({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p),g=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ey({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},p)),!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:pn([i,d.pathname]),pathnameBase:nN(pn([i,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(i=pn([i,d.pathnameBase]))}return o}function Ey(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=XI(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:g,isOptional:h}=p;if(g==="*"){let b=s[d]||"";o=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const v=s[d];return h&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function XI(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function ZI(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function QI(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?zn(e):e;return{pathname:n?n.startsWith("/")?n:eN(n,t):t,search:rN(r),hash:aN(a)}}function eN(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tN(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _A(e,t){let n=tN(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function LA(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=zn(e):(a=La({},e),he(!a.pathname||!a.pathname.includes("?"),Is("?","pathname","search",a)),he(!a.pathname||!a.pathname.includes("#"),Is("#","pathname","hash",a)),he(!a.search||!a.search.includes("#"),Is("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;a.pathname=g.join("/")}s=d>=0?t[d]:"/"}let l=QI(a,s),u=o&&o!=="/"&&o.endsWith("/"),p=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||p)&&(l.pathname+="/"),l}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),nN=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rN=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aN=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iN(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const OA=["post","put","patch","delete"];new Set(OA);const oN=["get",...OA];new Set(oN);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}const cf=k.createContext(null),sN=k.createContext(null),$n=k.createContext(null),jo=k.createContext(null),Vn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),DA=k.createContext(null);function lN(e,t){let{relative:n}=t===void 0?{}:t;Va()||he(!1);let{basename:r,navigator:a}=k.useContext($n),{hash:i,pathname:o,search:s}=PA(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:pn([r,o])),a.createHref({pathname:l,search:s,hash:i})}function Va(){return k.useContext(jo)!=null}function Uo(){return Va()||he(!1),k.useContext(jo).location}function MA(e){k.useContext($n).static||k.useLayoutEffect(e)}function uN(){let{isDataRoute:e}=k.useContext(Vn);return e?wN():cN()}function cN(){Va()||he(!1);let e=k.useContext(cf),{basename:t,future:n,navigator:r}=k.useContext($n),{matches:a}=k.useContext(Vn),{pathname:i}=Uo(),o=JSON.stringify(_A(a,n.v7_relativeSplatPath)),s=k.useRef(!1);return MA(()=>{s.current=!0}),k.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=LA(u,JSON.parse(o),i,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pn([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,o,i,e])}function PA(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext($n),{matches:a}=k.useContext(Vn),{pathname:i}=Uo(),o=JSON.stringify(_A(a,r.v7_relativeSplatPath));return k.useMemo(()=>LA(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function dN(e,t){return pN(e,t)}function pN(e,t,n,r){Va()||he(!1);let{navigator:a}=k.useContext($n),{matches:i}=k.useContext(Vn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Uo(),p;if(t){var d;let w=typeof t=="string"?zn(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||he(!1),p=w}else p=u;let g=p.pathname||"/",h=g;if(l!=="/"){let w=l.replace(/^\//,"").split("/");h="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=jI(e,{pathname:h}),b=yN(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:pn([l,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:pn([l,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&b?k.createElement(jo.Provider,{value:{location:Oa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:nn.Pop}},b):b}function mN(){let e=EN(),t=iN(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:a},n):null,null)}const gN=k.createElement(mN,null);class fN extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Vn.Provider,{value:this.props.routeContext},k.createElement(DA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hN(e){let{routeContext:t,match:n,children:r}=e,a=k.useContext(cf);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Vn.Provider,{value:t},r)}function yN(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let p=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);p>=0||he(!1),o=o.slice(0,Math.min(o.length,p+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let d=o[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:g,errors:h}=n,v=d.route.loader&&g[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((p,d,g)=>{let h,v=!1,b=null,w=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,b=d.route.errorElement||gN,l&&(u<0&&g===0?(v=!0,w=null):u===g&&(v=!0,w=d.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,g+1)),m=()=>{let f;return h?f=b:v?f=w:d.route.Component?f=k.createElement(d.route.Component,null):d.route.element?f=d.route.element:f=p,k.createElement(hN,{match:d,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:f})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?k.createElement(fN,{location:n.location,revalidation:n.revalidation,component:b,error:h,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}var FA=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(FA||{}),ho=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ho||{});function bN(e){let t=k.useContext(cf);return t||he(!1),t}function vN(e){let t=k.useContext(sN);return t||he(!1),t}function SN(e){let t=k.useContext(Vn);return t||he(!1),t}function BA(e){let t=SN(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function EN(){var e;let t=k.useContext(DA),n=vN(ho.UseRouteError),r=BA(ho.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wN(){let{router:e}=bN(FA.UseNavigateStable),t=BA(ho.UseNavigateStable),n=k.useRef(!1);return MA(()=>{n.current=!0}),k.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Oa({fromRouteId:t},i)))},[e,t])}function U(e){he(!1)}function xN(e){let{basename:t="/",children:n=null,location:r,navigationType:a=nn.Pop,navigator:i,static:o=!1,future:s}=e;Va()&&he(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:i,static:o,future:Oa({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);typeof r=="string"&&(r=zn(r));let{pathname:p="/",search:d="",hash:g="",state:h=null,key:v="default"}=r,b=k.useMemo(()=>{let w=uf(p,l);return w==null?null:{location:{pathname:w,search:d,hash:g,state:h,key:v},navigationType:a}},[l,p,d,g,h,v,a]);return b==null?null:k.createElement($n.Provider,{value:u},k.createElement(jo.Provider,{children:n,value:b}))}function TN(e){let{children:t,location:n}=e;return dN($m(t),n)}new Promise(()=>{});function $m(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,a)=>{if(!k.isValidElement(r))return;let i=[...t,a];if(r.type===k.Fragment){n.push.apply(n,$m(r.props.children,i));return}r.type!==U&&he(!1),!r.props.index||!r.props.children||he(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$m(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vm(){return Vm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vm.apply(this,arguments)}function AN(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function CN(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function RN(e,t){return e.button===0&&(!t||t==="_self")&&!CN(e)}const kN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],IN="6";try{window.__reactRouterVersion=IN}catch{}const NN="startTransition",wy=pR[NN];function _N(e){let{basename:t,children:n,future:r,window:a}=e,i=k.useRef();i.current==null&&(i.current=PI({window:a,v5Compat:!0}));let o=i.current,[s,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},p=k.useCallback(d=>{u&&wy?wy(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>o.listen(p),[o,p]),k.createElement(xN,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const LN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ON=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F=k.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:u,preventScrollReset:p,unstable_viewTransition:d}=t,g=AN(t,kN),{basename:h}=k.useContext($n),v,b=!1;if(typeof u=="string"&&ON.test(u)&&(v=u,LN))try{let f=new URL(window.location.href),E=u.startsWith("//")?new URL(f.protocol+u):new URL(u),x=uf(E.pathname,h);E.origin===f.origin&&x!=null?u=x+E.search+E.hash:b=!0}catch{}let w=lN(u,{relative:a}),y=DN(u,{replace:o,state:s,target:l,preventScrollReset:p,relative:a,unstable_viewTransition:d});function m(f){r&&r(f),f.defaultPrevented||y(f)}return k.createElement("a",Vm({},g,{href:v||w,onClick:b||i?r:m,ref:n,target:l}))});var xy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xy||(xy={}));var Ty;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ty||(Ty={}));function DN(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=uN(),u=Uo(),p=PA(e,{relative:o});return k.useCallback(d=>{if(RN(d,n)){d.preventDefault();let g=r!==void 0?r:fo(u)===fo(p);l(e,{replace:g,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:s})}},[u,l,p,r,a,n,e,i,o,s])}function MN(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"},child:[]}]})(e)}const PN=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-section",id:"footer-logo",children:[c.jsx("img",{src:hg,alt:"",className:"logo",width:180}),c.jsx("h1",{children:"LearnJava"})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Quick Links"}),c.jsxs("ul",{children:[c.jsx(F,{to:"/",onClick:e,children:c.jsx("li",{children:"Home"})}),c.jsx(F,{to:"/Java/",onClick:e,children:c.jsx("li",{children:"Course"})}),c.jsx(F,{to:"/practise/",onClick:e,children:c.jsx("li",{children:"Practise"})}),c.jsx(F,{to:"/learning/",onClick:e,children:c.jsx("li",{children:"My Learning"})}),c.jsx(F,{to:"/join/",onClick:e,children:c.jsx("li",{children:"Join Us"})})]})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{children:"Contact Us"}),c.jsx("a",{href:"https://andorkadominik.hu",target:"_blank",children:"Creator"}),c.jsx("br",{}),c.jsx("a",{href:"mailto:dominik.andorka@gmail.com",target:"_blank",children:"Gmail"}),c.jsx("br",{}),c.jsx("a",{href:"https://github.com/AndorkaDominik",target:"_blank",children:"Github"})]}),c.jsxs("div",{className:"footer-section social-media",children:[c.jsx("h3",{children:"Follow Us"}),c.jsx("a",{href:"https://github.com/AndorkaDominik",target:"_blank",rel:"noopener noreferrer",children:c.jsx(MN,{})}),c.jsx("a",{href:"https://discord.com",target:"_blank",rel:"noopener noreferrer",children:c.jsx(CR,{})})]})]}),c.jsx("div",{className:"footer-bottom",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," LearnLab. All rights reserved."]})})]})},FN=()=>{const e=k.useRef(),[t,n]=k.useState(!1),r=()=>{n(!t)},a=()=>{n(!1)};function i(){window.scrollTo({top:0,behavior:"smooth"})}function o(){i(),a()}return c.jsxs("div",{className:"navbar",children:[c.jsx(F,{to:"/",className:"logo-container",onClick:i,children:c.jsx("img",{src:hg,alt:"",className:"logo"})}),!t&&c.jsx(RR,{className:"menu-btn",onClick:r}),t&&c.jsx(IR,{className:"menu-btn",onClick:r}),c.jsxs("ul",{className:t?"show":"",ref:e,children:[c.jsx(F,{to:"/",onClick:o,children:c.jsx("li",{children:"Home"})}),c.jsx(F,{to:"/Java/",onClick:o,children:c.jsx("li",{children:"Course"})}),c.jsx(F,{to:"/practise/",onClick:o,children:c.jsx("li",{children:"Practise"})}),c.jsx(F,{to:"/learning/",onClick:o,children:c.jsx("li",{children:"My Learning"})}),c.jsx(F,{to:"/join/",onClick:o,children:c.jsx("li",{children:"Join Us"})}),c.jsx("div",{className:"under768px",children:c.jsx(F,{to:"/Java/",className:"cta",onClick:o,children:"Get Started"})})]}),c.jsx("div",{className:"nav-right over768px",children:c.jsx(F,{to:"/Java/",className:"cta",onClick:o,children:"Get Started"})})]})};function BN(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}const jA=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Go=k.createContext({}),df=k.createContext(null),pf=typeof window<"u",jN=pf?k.useLayoutEffect:k.useEffect,UA=k.createContext({strict:!1}),qo=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),UN="framerAppearId",GA="data-"+qo(UN),GN={skipAnimations:!1,useManualTiming:!1};function qN(e){let t=new Set,n=new Set,r=!1,a=!1;const i=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(u){i.has(u)&&(l.schedule(u),e()),u(o)}const l={schedule:(u,p=!1,d=!1)=>{const h=d&&r?t:n;return p&&i.add(u),h.has(u)||h.add(u),u},cancel:u=>{n.delete(u),i.delete(u)},process:u=>{if(o=u,r){a=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,a&&(a=!1,l.process(u))}};return l}const bi=["read","resolveKeyframes","update","preRender","render","postRender"],zN=40;function qA(e,t){let n=!1,r=!0;const a={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,o=bi.reduce((y,m)=>(y[m]=qN(i),y),{}),{read:s,resolveKeyframes:l,update:u,preRender:p,render:d,postRender:g}=o,h=()=>{const y=performance.now();n=!1,a.delta=r?1e3/60:Math.max(Math.min(y-a.timestamp,zN),1),a.timestamp=y,a.isProcessing=!0,s.process(a),l.process(a),u.process(a),p.process(a),d.process(a),g.process(a),a.isProcessing=!1,n&&t&&(r=!1,e(h))},v=()=>{n=!0,r=!0,a.isProcessing||e(h)};return{schedule:bi.reduce((y,m)=>{const f=o[m];return y[m]=(E,x=!1,T=!1)=>(n||v(),f.schedule(E,x,T)),y},{}),cancel:y=>{for(let m=0;m<bi.length;m++)o[bi[m]].cancel(y)},state:a,steps:o}}const{schedule:mf,cancel:e5}=qA(queueMicrotask,!1);function ur(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const zA=k.createContext({});let Ay=!1;function $N(e,t,n,r,a){var i;const{visualElement:o}=k.useContext(Go),s=k.useContext(UA),l=k.useContext(df),u=k.useContext(jA).reducedMotion,p=k.useRef();r=r||s.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const d=p.current,g=k.useContext(zA);d&&!d.projection&&a&&(d.type==="html"||d.type==="svg")&&HN(p.current,n,a,g),k.useInsertionEffect(()=>{d&&d.update(n,l)});const h=n[GA],v=k.useRef(!!h&&!window.MotionHandoffIsComplete&&((i=window.MotionHasOptimisedAnimation)===null||i===void 0?void 0:i.call(window,h)));return jN(()=>{d&&(d.updateFeatures(),mf.render(d.render),v.current&&d.animationState&&d.animationState.animateChanges())}),k.useEffect(()=>{d&&(!v.current&&d.animationState&&d.animationState.animateChanges(),v.current=!1,Ay||(Ay=!0,queueMicrotask(VN)))}),d}function VN(){window.MotionHandoffIsComplete=!0}function HN(e,t,n,r){const{layoutId:a,layout:i,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:$A(e.parent)),e.projection.setOptions({layoutId:a,layout:i,alwaysMeasureLayout:!!o||s&&ur(s),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function $A(e){if(e)return e.options.allowProjection!==!1?e.projection:$A(e.parent)}function WN(e,t,n){return k.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ur(n)&&(n.current=r))},[t])}function Da(e){return typeof e=="string"||Array.isArray(e)}function Ma(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const gf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ff=["initial",...gf];function zo(e){return Ma(e.animate)||ff.some(t=>Da(e[t]))}function VA(e){return!!(zo(e)||e.variants)}function JN(e,t){if(zo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Da(n)?n:void 0,animate:Da(r)?r:void 0}}return e.inherit!==!1?t:{}}function KN(e){const{initial:t,animate:n}=JN(e,k.useContext(Go));return k.useMemo(()=>({initial:t,animate:n}),[Cy(t),Cy(n)])}function Cy(e){return Array.isArray(e)?e.join(" "):e}const Ry={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ir={};for(const e in Ry)Ir[e]={isEnabled:t=>Ry[e].some(n=>!!t[n])};function YN(e){for(const t in e)Ir[t]={...Ir[t],...e[t]}}const HA=k.createContext({}),XN=Symbol.for("motionComponentSymbol"),De=e=>e;let Hm=De;function ZN({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:a}){e&&YN(e);function i(s,l){let u;const p={...k.useContext(jA),...s,layoutId:QN(s)},{isStatic:d}=p,g=KN(s),h=r(s,d);if(!d&&pf){e2();const v=t2(p);u=v.MeasureLayout,g.visualElement=$N(a,h,p,t,v.ProjectionNode)}return c.jsxs(Go.Provider,{value:g,children:[u&&g.visualElement?c.jsx(u,{visualElement:g.visualElement,...p}):null,n(a,s,WN(h,g.visualElement,l),h,d,g.visualElement)]})}const o=k.forwardRef(i);return o[XN]=a,o}function QN({layoutId:e}){const t=k.useContext(HA).id;return t&&e!==void 0?t+"-"+e:e}function e2(e,t){k.useContext(UA).strict}function t2(e){const{drag:t,layout:n}=Ir;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function n2(e){function t(r,a={}){return ZN(e(r,a))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,a)=>(n.has(a)||n.set(a,t(a)),n.get(a))})}const r2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hf(e){return typeof e!="string"||e.includes("-")?!1:!!(r2.indexOf(e)>-1||/[A-Z]/u.test(e))}const yo={};function a2(e){Object.assign(yo,e)}const Ha=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sn=new Set(Ha);function WA(e,{layout:t,layoutId:n}){return Sn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!yo[e]||e==="opacity")}const Oe=e=>!!(e&&e.getVelocity),JA=(e,t)=>t&&typeof e=="number"?t.transform(e):e,fn=(e,t,n)=>n>t?t:n<e?e:n,Dr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},da={...Dr,transform:e=>fn(0,1,e)},vi={...Dr,default:1},pa=e=>Math.round(e*1e5)/1e5,yf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,i2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,o2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Wa(e){return typeof e=="string"}function s2(e){return e==null}const Ja=e=>({test:t=>Wa(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Kt=Ja("deg"),It=Ja("%"),B=Ja("px"),l2=Ja("vh"),u2=Ja("vw"),ky={...It,parse:e=>It.parse(e)/100,transform:e=>It.transform(e*100)},Iy={...Dr,transform:Math.round},bf={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:Kt,rotateX:Kt,rotateY:Kt,rotateZ:Kt,scale:vi,scaleX:vi,scaleY:vi,scaleZ:vi,skew:Kt,skewX:Kt,skewY:Kt,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:da,originX:ky,originY:ky,originZ:B,zIndex:Iy,backgroundPositionX:B,backgroundPositionY:B,fillOpacity:da,strokeOpacity:da,numOctaves:Iy},c2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},d2=Ha.length;function p2(e,t,n){let r="",a=!0;for(let i=0;i<d2;i++){const o=Ha[i],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=JA(s,bf[o]);if(!l){a=!1;const p=c2[o]||o;r+=`${p}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,a?"":r):a&&(r="none"),r}const KA=e=>t=>typeof t=="string"&&t.startsWith(e),YA=KA("--"),m2=KA("var(--"),vf=e=>m2(e)?g2.test(e.split("/*")[0].trim()):!1,g2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Sf(e,t,n){const{style:r,vars:a,transformOrigin:i}=e;let o=!1,s=!1;for(const l in t){const u=t[l];if(Sn.has(l)){o=!0;continue}else if(YA(l)){a[l]=u;continue}else{const p=JA(u,bf[l]);l.startsWith("origin")?(s=!0,i[l]=p):r[l]=p}}if(t.transform||(o||n?r.transform=p2(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:p=0}=i;r.transformOrigin=`${l} ${u} ${p}`}}const Ef=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function XA(e,t,n){for(const r in t)!Oe(t[r])&&!WA(r,n)&&(e[r]=t[r])}function f2({transformTemplate:e},t){return k.useMemo(()=>{const n=Ef();return Sf(n,t,e),Object.assign({},n.vars,n.style)},[t])}function h2(e,t){const n=e.style||{},r={};return XA(r,n,e),Object.assign(r,f2(e,t)),r}function y2(e,t){const n={},r=h2(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const b2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function bo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||b2.has(e)}let ZA=e=>!bo(e);function v2(e){e&&(ZA=t=>t.startsWith("on")?!bo(t):e(t))}try{v2(require("@emotion/is-prop-valid").default)}catch{}function S2(e,t,n){const r={};for(const a in e)a==="values"&&typeof e.values=="object"||(ZA(a)||n===!0&&bo(a)||!t&&!bo(a)||e.draggable&&a.startsWith("onDrag"))&&(r[a]=e[a]);return r}function Ny(e,t,n){return typeof e=="string"?e:B.transform(t+n*e)}function E2(e,t,n){const r=Ny(t,e.x,e.width),a=Ny(n,e.y,e.height);return`${r} ${a}`}const w2={offset:"stroke-dashoffset",array:"stroke-dasharray"},x2={offset:"strokeDashoffset",array:"strokeDasharray"};function T2(e,t,n=1,r=0,a=!0){e.pathLength=1;const i=a?w2:x2;e[i.offset]=B.transform(-r);const o=B.transform(t),s=B.transform(n);e[i.array]=`${o} ${s}`}function wf(e,{attrX:t,attrY:n,attrScale:r,originX:a,originY:i,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...u},p,d){if(Sf(e,u,d),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:h,dimensions:v}=e;g.transform&&(v&&(h.transform=g.transform),delete g.transform),v&&(a!==void 0||i!==void 0||h.transform)&&(h.transformOrigin=E2(v,a!==void 0?a:.5,i!==void 0?i:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&T2(g,o,s,l,!1)}const QA=()=>({...Ef(),attrs:{}}),xf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function A2(e,t,n,r){const a=k.useMemo(()=>{const i=QA();return wf(i,t,xf(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};XA(i,e.style,e),a.style={...i,...a.style}}return a}function C2(e=!1){return(n,r,a,{latestValues:i},o)=>{const l=(hf(n)?A2:y2)(r,i,o,n),u=S2(r,typeof n=="string",e),p=n!==k.Fragment?{...u,...l,ref:a}:{},{children:d}=r,g=k.useMemo(()=>Oe(d)?d.get():d,[d]);return k.createElement(n,{...p,children:g})}}function e1(e,{style:t,vars:n},r,a){Object.assign(e.style,t,a&&a.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const t1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function n1(e,t,n,r){e1(e,t,void 0,r);for(const a in t.attrs)e.setAttribute(t1.has(a)?a:qo(a),t.attrs[a])}function Tf(e,t,n){var r;const{style:a}=e,i={};for(const o in a)(Oe(a[o])||t.style&&Oe(t.style[o])||WA(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(i[o]=a[o]);return n&&a&&typeof a.willChange=="string"&&(n.applyWillChange=!1),i}function r1(e,t,n){const r=Tf(e,t,n);for(const a in e)if(Oe(e[a])||Oe(t[a])){const i=Ha.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;r[i]=e[a]}return r}function _y(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Af(e,t,n,r){if(typeof t=="function"){const[a,i]=_y(r);t=t(n!==void 0?n:e.custom,a,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[a,i]=_y(r);t=t(n!==void 0?n:e.custom,a,i)}return t}function R2(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const Wm=e=>Array.isArray(e),k2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),I2=e=>Wm(e)?e[e.length-1]||0:e;function Pi(e){const t=Oe(e)?e.get():e;return k2(t)?t.toValue():t}const a1=new Set(["opacity","clipPath","filter","transform"]);function i1(e){if(Sn.has(e))return"transform";if(a1.has(e))return qo(e)}function $o(e,t){e.indexOf(t)===-1&&e.push(t)}function Vo(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function N2({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},a,i,o,s){const l={latestValues:L2(a,i,o,s?!1:e,t),renderState:n()};return r&&(l.mount=u=>r(a,u,l)),l}const o1=e=>(t,n)=>{const r=k.useContext(Go),a=k.useContext(df),i=()=>N2(e,t,r,a,n);return n?i():R2(i)};function _2(e,t){const n=i1(t);n&&$o(e,n)}function Ly(e,t,n){const r=Array.isArray(t)?t:[t];for(let a=0;a<r.length;a++){const i=Af(e,r[a]);if(i){const{transitionEnd:o,transition:s,...l}=i;n(l,o)}}}function L2(e,t,n,r,a){var i;const o={},s=[],l=r&&((i=e.style)===null||i===void 0?void 0:i.willChange)===void 0,u=a(e,{});for(const w in u)o[w]=Pi(u[w]);let{initial:p,animate:d}=e;const g=zo(e),h=VA(e);t&&h&&!g&&e.inherit!==!1&&(p===void 0&&(p=t.initial),d===void 0&&(d=t.animate));let v=n?n.initial===!1:!1;v=v||p===!1;const b=v?d:p;return b&&typeof b!="boolean"&&!Ma(b)&&Ly(e,b,(w,y)=>{for(const m in w){let f=w[m];if(Array.isArray(f)){const E=v?f.length-1:0;f=f[E]}f!==null&&(o[m]=f)}for(const m in y)o[m]=y[m]}),l&&(d&&p!==!1&&!Ma(d)&&Ly(e,d,w=>{for(const y in w)_2(s,y)}),s.length&&(o.willChange=s.join(","))),o}const{schedule:Z,cancel:Ht,state:xe,steps:Ns}=qA(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0),O2={useVisualState:o1({scrapeMotionValuesFromProps:r1,createRenderState:QA,onMount:(e,t,{renderState:n,latestValues:r})=>{Z.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Z.render(()=>{wf(n,r,xf(t.tagName),e.transformTemplate),n1(t,n)})}})},D2={useVisualState:o1({applyWillChange:!0,scrapeMotionValuesFromProps:Tf,createRenderState:Ef})};function M2(e,{forwardMotionProps:t=!1},n,r){return{...hf(e)?O2:D2,preloadedFeatures:n,useRender:C2(t),createVisualElement:r,Component:e}}function Mt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const s1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ho(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const P2=e=>t=>s1(t)&&e(t,Ho(t));function Ft(e,t,n,r){return Mt(e,t,P2(n),r)}const F2=(e,t)=>n=>t(e(n)),Bt=(...e)=>e.reduce(F2);function l1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Oy=l1("dragHorizontal"),Dy=l1("dragVertical");function u1(e){let t=!1;if(e==="y")t=Dy();else if(e==="x")t=Oy();else{const n=Oy(),r=Dy();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function c1(){const e=u1(!0);return e?(e(),!1):!0}class En{constructor(t){this.isMounted=!1,this.node=t}update(){}}function My(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",a=(i,o)=>{if(i.pointerType==="touch"||c1())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&Z.postRender(()=>l(i,o))};return Ft(e.current,n,a,{passive:!e.getProps()[r]})}class B2 extends En{mount(){this.unmount=Bt(My(this.node,!0),My(this.node,!1))}unmount(){}}class j2 extends En{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Bt(Mt(this.node.current,"focus",()=>this.onFocus()),Mt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const d1=(e,t)=>t?e===t?!0:d1(e,t.parentElement):!1;function _s(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ho(n))}class U2 extends En{constructor(){super(...arguments),this.removeStartListeners=De,this.removeEndListeners=De,this.removeAccessibleListeners=De,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Ft(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:p,globalTapTarget:d}=this.node.getProps(),g=!d&&!d1(this.node.current,s.target)?p:u;g&&Z.update(()=>g(s,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Ft(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Bt(i,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const o=s=>{s.key!=="Enter"||!this.checkPressEnd()||_s("up",(l,u)=>{const{onTap:p}=this.node.getProps();p&&Z.postRender(()=>p(l,u))})};this.removeEndListeners(),this.removeEndListeners=Mt(this.node.current,"keyup",o),_s("down",(s,l)=>{this.startPress(s,l)})},n=Mt(this.node.current,"keydown",t),r=()=>{this.isPressing&&_s("cancel",(i,o)=>this.cancelPress(i,o))},a=Mt(this.node.current,"blur",r);this.removeAccessibleListeners=Bt(n,a)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:a}=this.node.getProps();a&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Z.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!c1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Z.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ft(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Bt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Jm=new WeakMap,Ls=new WeakMap,G2=e=>{const t=Jm.get(e.target);t&&t(e)},q2=e=>{e.forEach(G2)};function z2({root:e,...t}){const n=e||document;Ls.has(n)||Ls.set(n,{});const r=Ls.get(n),a=JSON.stringify(t);return r[a]||(r[a]=new IntersectionObserver(q2,{root:e,...t})),r[a]}function $2(e,t,n){const r=z2(t);return Jm.set(e,n),r.observe(e),()=>{Jm.delete(e),r.unobserve(e)}}const V2={some:0,all:1};class H2 extends En{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:a="some",once:i}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof a=="number"?a:V2[a]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:p,onViewportLeave:d}=this.node.getProps(),g=u?p:d;g&&g(l)};return $2(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(W2(t,n))&&this.startObserver()}unmount(){}}function W2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const J2={inView:{Feature:H2},tap:{Feature:U2},focus:{Feature:j2},hover:{Feature:B2}};function p1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Wo(e,t,n){const r=e.getProps();return Af(r,t,n!==void 0?n:r.custom,e)}const jt=e=>e*1e3,Ut=e=>e/1e3,K2={type:"spring",stiffness:500,damping:25,restSpeed:10},Y2=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),X2={type:"keyframes",duration:.8},Z2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q2=(e,{keyframes:t})=>t.length>2?X2:Sn.has(e)?e.startsWith("scale")?Y2(t[1]):K2:Z2;function e_({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:a,repeat:i,repeatType:o,repeatDelay:s,from:l,elapsed:u,...p}){return!!Object.keys(p).length}function Cf(e,t){return e[t]||e.default||e}const t_=e=>e!==null;function Jo(e,{repeat:t,repeatType:n="loop"},r){const a=e.filter(t_),i=t&&n!=="loop"&&t%2===1?0:a.length-1;return!i||r===void 0?a[i]:r}const m1=e=>/^0[^.\s]+$/u.test(e);function n_(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||m1(e):!0}const g1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),r_=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function a_(e){const t=r_.exec(e);if(!t)return[,];const[,n,r,a]=t;return[`--${n??r}`,a]}function f1(e,t,n=1){const[r,a]=a_(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const o=i.trim();return g1(o)?parseFloat(o):o}return vf(a)?f1(a,t,n+1):a}const i_=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Py=e=>e===Dr||e===B,Fy=(e,t)=>parseFloat(e.split(", ")[t]),By=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const a=r.match(/^matrix3d\((.+)\)$/u);if(a)return Fy(a[1],t);{const i=r.match(/^matrix\((.+)\)$/u);return i?Fy(i[1],e):0}},o_=new Set(["x","y","z"]),s_=Ha.filter(e=>!o_.has(e));function l_(e){const t=[];return s_.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Nr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:By(4,13),y:By(5,14)};Nr.translateX=Nr.x;Nr.translateY=Nr.y;const h1=e=>t=>t.test(e),u_={test:e=>e==="auto",parse:e=>e},y1=[Dr,B,It,Kt,u2,l2,u_],jy=e=>y1.find(h1(e)),Mn=new Set;let Km=!1,Ym=!1;function b1(){if(Ym){const e=Array.from(Mn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const a=l_(r);a.length&&(n.set(r,a),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const a=n.get(r);a&&a.forEach(([i,o])=>{var s;(s=r.getValue(i))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ym=!1,Km=!1,Mn.forEach(e=>e.complete()),Mn.clear()}function v1(){Mn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ym=!0)})}function c_(){v1(),b1()}class Rf{constructor(t,n,r,a,i,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=a,this.element=i,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Mn.add(this),Km||(Km=!0,Z.read(v1),Z.resolveKeyframes(b1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:a}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const o=a==null?void 0:a.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),a&&o===void 0&&a.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Mn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Mn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const kf=(e,t)=>n=>!!(Wa(n)&&o2.test(n)&&n.startsWith(e)||t&&!s2(n)&&Object.prototype.hasOwnProperty.call(n,t)),S1=(e,t,n)=>r=>{if(!Wa(r))return r;const[a,i,o,s]=r.match(yf);return{[e]:parseFloat(a),[t]:parseFloat(i),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},d_=e=>fn(0,255,e),Os={...Dr,transform:e=>Math.round(d_(e))},Ln={test:kf("rgb","red"),parse:S1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Os.transform(e)+", "+Os.transform(t)+", "+Os.transform(n)+", "+pa(da.transform(r))+")"};function p_(e){let t="",n="",r="",a="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),a=e.substring(4,5),t+=t,n+=n,r+=r,a+=a),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:a?parseInt(a,16)/255:1}}const Xm={test:kf("#"),parse:p_,transform:Ln.transform},cr={test:kf("hsl","hue"),parse:S1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+It.transform(pa(t))+", "+It.transform(pa(n))+", "+pa(da.transform(r))+")"},Ne={test:e=>Ln.test(e)||Xm.test(e)||cr.test(e),parse:e=>Ln.test(e)?Ln.parse(e):cr.test(e)?cr.parse(e):Xm.parse(e),transform:e=>Wa(e)?e:e.hasOwnProperty("red")?Ln.transform(e):cr.transform(e)};function m_(e){var t,n;return isNaN(e)&&Wa(e)&&(((t=e.match(yf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(i2))===null||n===void 0?void 0:n.length)||0)>0}const E1="number",w1="color",g_="var",f_="var(",Uy="${}",h_=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Pa(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},a=[];let i=0;const s=t.replace(h_,l=>(Ne.test(l)?(r.color.push(i),a.push(w1),n.push(Ne.parse(l))):l.startsWith(f_)?(r.var.push(i),a.push(g_),n.push(l)):(r.number.push(i),a.push(E1),n.push(parseFloat(l))),++i,Uy)).split(Uy);return{values:n,split:s,indexes:r,types:a}}function x1(e){return Pa(e).values}function T1(e){const{split:t,types:n}=Pa(e),r=t.length;return a=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],a[o]!==void 0){const s=n[o];s===E1?i+=pa(a[o]):s===w1?i+=Ne.transform(a[o]):i+=a[o]}return i}}const y_=e=>typeof e=="number"?0:e;function b_(e){const t=x1(e);return T1(e)(t.map(y_))}const hn={test:m_,parse:x1,createTransformer:T1,getAnimatableNone:b_},v_=new Set(["brightness","contrast","saturate","opacity"]);function S_(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(yf)||[];if(!r)return e;const a=n.replace(r,"");let i=v_.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+a+")"}const E_=/\b([a-z-]*)\(.*?\)/gu,Zm={...hn,getAnimatableNone:e=>{const t=e.match(E_);return t?t.map(S_).join(" "):e}},w_={...bf,color:Ne,backgroundColor:Ne,outlineColor:Ne,fill:Ne,stroke:Ne,borderColor:Ne,borderTopColor:Ne,borderRightColor:Ne,borderBottomColor:Ne,borderLeftColor:Ne,filter:Zm,WebkitFilter:Zm},If=e=>w_[e];function A1(e,t){let n=If(e);return n!==Zm&&(n=hn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const x_=new Set(["auto","none","0"]);function T_(e,t,n){let r=0,a;for(;r<e.length&&!a;){const i=e[r];typeof i=="string"&&!x_.has(i)&&Pa(i).values.length&&(a=e[r]),r++}if(a&&n)for(const i of t)e[i]=A1(n,a)}class C1 extends Rf{constructor(t,n,r,a,i){super(t,n,r,a,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),vf(u))){const p=f1(u,n.current);p!==void 0&&(t[l]=p),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!i_.has(r)||t.length!==2)return;const[a,i]=t,o=jy(a),s=jy(i);if(o!==s)if(Py(o)&&Py(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let a=0;a<t.length;a++)n_(t[a])&&r.push(a);r.length&&T_(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Nr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const a=n[n.length-1];a!==void 0&&t.getValue(r,a).jump(a,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const i=n.getValue(r);i&&i.jump(this.measuredOrigin,!1);const o=a.length-1,s=a[o];a[o]=Nr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function R1(e){let t;return()=>(t===void 0&&(t=e()),t)}let Fi;function A_(){Fi=void 0}const Gt={now:()=>(Fi===void 0&&Gt.set(xe.isProcessing||GN.useManualTiming?xe.timestamp:performance.now()),Fi),set:e=>{Fi=e,queueMicrotask(A_)}},Gy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(hn.test(e)||e==="0")&&!e.startsWith("url("));function C_(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function R_(e,t,n,r){const a=e[0];if(a===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],o=Gy(a,t),s=Gy(i,t);return!o||!s?!1:C_(e)||n==="spring"&&r}const k_=40;class k1{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:a=0,repeatDelay:i=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Gt.now(),this.options={autoplay:t,delay:n,type:r,repeat:a,repeatDelay:i,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>k_?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&c_(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Gt.now(),this.hasAttemptedResolve=!0;const{name:r,type:a,velocity:i,delay:o,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!R_(t,r,a,i))if(o)this.options.duration=0;else{l==null||l(Jo(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const p=this.initPlayback(t,n);p!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...p},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function I1(e,t){return t?e*(1e3/t):0}const I_=5;function N1(e,t,n){const r=Math.max(t-I_,0);return I1(n-e(r),t-r)}const Ds=.001,N_=.01,__=10,L_=.05,O_=1;function D_({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let a,i,o=1-t;o=fn(L_,O_,o),e=fn(N_,__,Ut(e)),o<1?(a=u=>{const p=u*o,d=p*e,g=p-n,h=Qm(u,o),v=Math.exp(-d);return Ds-g/h*v},i=u=>{const d=u*o*e,g=d*n+n,h=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-d),b=Qm(Math.pow(u,2),o);return(-a(u)+Ds>0?-1:1)*((g-h)*v)/b}):(a=u=>{const p=Math.exp(-u*e),d=(u-n)*e+1;return-Ds+p*d},i=u=>{const p=Math.exp(-u*e),d=(n-u)*(e*e);return p*d});const s=5/e,l=P_(a,i,s);if(e=jt(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const M_=12;function P_(e,t,n){let r=n;for(let a=1;a<M_;a++)r=r-e(r)/t(r);return r}function Qm(e,t){return e*Math.sqrt(1-t*t)}const F_=["duration","bounce"],B_=["stiffness","damping","mass"];function qy(e,t){return t.some(n=>e[n]!==void 0)}function j_(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!qy(e,B_)&&qy(e,F_)){const n=D_(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function _1({keyframes:e,restDelta:t,restSpeed:n,...r}){const a=e[0],i=e[e.length-1],o={done:!1,value:a},{stiffness:s,damping:l,mass:u,duration:p,velocity:d,isResolvedFromDuration:g}=j_({...r,velocity:-Ut(r.velocity||0)}),h=d||0,v=l/(2*Math.sqrt(s*u)),b=i-a,w=Ut(Math.sqrt(s/u)),y=Math.abs(b)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let m;if(v<1){const f=Qm(w,v);m=E=>{const x=Math.exp(-v*w*E);return i-x*((h+v*w*b)/f*Math.sin(f*E)+b*Math.cos(f*E))}}else if(v===1)m=f=>i-Math.exp(-w*f)*(b+(h+w*b)*f);else{const f=w*Math.sqrt(v*v-1);m=E=>{const x=Math.exp(-v*w*E),T=Math.min(f*E,300);return i-x*((h+v*w*b)*Math.sinh(T)+f*b*Math.cosh(T))/f}}return{calculatedDuration:g&&p||null,next:f=>{const E=m(f);if(g)o.done=f>=p;else{let x=0;v<1&&(x=f===0?jt(h):N1(m,f,E));const T=Math.abs(x)<=n,C=Math.abs(i-E)<=t;o.done=T&&C}return o.value=o.done?i:E,o}}}function zy({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:a=10,bounceStiffness:i=500,modifyTarget:o,min:s,max:l,restDelta:u=.5,restSpeed:p}){const d=e[0],g={done:!1,value:d},h=A=>s!==void 0&&A<s||l!==void 0&&A>l,v=A=>s===void 0?l:l===void 0||Math.abs(s-A)<Math.abs(l-A)?s:l;let b=n*t;const w=d+b,y=o===void 0?w:o(w);y!==w&&(b=y-d);const m=A=>-b*Math.exp(-A/r),f=A=>y+m(A),E=A=>{const R=m(A),N=f(A);g.done=Math.abs(R)<=u,g.value=g.done?y:N};let x,T;const C=A=>{h(g.value)&&(x=A,T=_1({keyframes:[g.value,v(g.value)],velocity:N1(f,A,g.value),damping:a,stiffness:i,restDelta:u,restSpeed:p}))};return C(0),{calculatedDuration:null,next:A=>{let R=!1;return!T&&x===void 0&&(R=!0,E(A),C(A)),x!==void 0&&A>=x?T.next(A-x):(!R&&E(A),g)}}}const L1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,U_=1e-7,G_=12;function q_(e,t,n,r,a){let i,o,s=0;do o=t+(n-t)/2,i=L1(o,r,a)-e,i>0?n=o:t=o;while(Math.abs(i)>U_&&++s<G_);return o}function Ka(e,t,n,r){if(e===t&&n===r)return De;const a=i=>q_(i,0,1,e,n);return i=>i===0||i===1?i:L1(a(i),t,r)}const z_=Ka(.42,0,1,1),$_=Ka(0,0,.58,1),O1=Ka(.42,0,.58,1),V_=e=>Array.isArray(e)&&typeof e[0]!="number",D1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,M1=e=>t=>1-e(1-t),Nf=e=>1-Math.sin(Math.acos(e)),P1=M1(Nf),H_=D1(Nf),F1=Ka(.33,1.53,.69,.99),_f=M1(F1),W_=D1(_f),J_=e=>(e*=2)<1?.5*_f(e):.5*(2-Math.pow(2,-10*(e-1))),$y={linear:De,easeIn:z_,easeInOut:O1,easeOut:$_,circIn:Nf,circInOut:H_,circOut:P1,backIn:_f,backInOut:W_,backOut:F1,anticipate:J_},Vy=e=>{if(Array.isArray(e)){Hm(e.length===4);const[t,n,r,a]=e;return Ka(t,n,r,a)}else if(typeof e=="string")return Hm($y[e]!==void 0),$y[e];return e},Fa=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},le=(e,t,n)=>e+(t-e)*n;function Ms(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function K_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let a=0,i=0,o=0;if(!t)a=i=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;a=Ms(l,s,e+1/3),i=Ms(l,s,e),o=Ms(l,s,e-1/3)}return{red:Math.round(a*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}function vo(e,t){return n=>n>0?t:e}const Ps=(e,t,n)=>{const r=e*e,a=n*(t*t-r)+r;return a<0?0:Math.sqrt(a)},Y_=[Xm,Ln,cr],X_=e=>Y_.find(t=>t.test(e));function Hy(e){const t=X_(e);if(!t)return!1;let n=t.parse(e);return t===cr&&(n=K_(n)),n}const Wy=(e,t)=>{const n=Hy(e),r=Hy(t);if(!n||!r)return vo(e,t);const a={...n};return i=>(a.red=Ps(n.red,r.red,i),a.green=Ps(n.green,r.green,i),a.blue=Ps(n.blue,r.blue,i),a.alpha=le(n.alpha,r.alpha,i),Ln.transform(a))},eg=new Set(["none","hidden"]);function Z_(e,t){return eg.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Q_(e,t){return n=>le(e,t,n)}function Lf(e){return typeof e=="number"?Q_:typeof e=="string"?vf(e)?vo:Ne.test(e)?Wy:nL:Array.isArray(e)?B1:typeof e=="object"?Ne.test(e)?Wy:eL:vo}function B1(e,t){const n=[...e],r=n.length,a=e.map((i,o)=>Lf(i)(i,t[o]));return i=>{for(let o=0;o<r;o++)n[o]=a[o](i);return n}}function eL(e,t){const n={...e,...t},r={};for(const a in n)e[a]!==void 0&&t[a]!==void 0&&(r[a]=Lf(e[a])(e[a],t[a]));return a=>{for(const i in r)n[i]=r[i](a);return n}}function tL(e,t){var n;const r=[],a={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][a[o]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[i]=l,a[o]++}return r}const nL=(e,t)=>{const n=hn.createTransformer(t),r=Pa(e),a=Pa(t);return r.indexes.var.length===a.indexes.var.length&&r.indexes.color.length===a.indexes.color.length&&r.indexes.number.length>=a.indexes.number.length?eg.has(e)&&!a.values.length||eg.has(t)&&!r.values.length?Z_(e,t):Bt(B1(tL(r,a),a.values),n):vo(e,t)};function j1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?le(e,t,n):Lf(e)(e,t)}function rL(e,t,n){const r=[],a=n||j1,i=e.length-1;for(let o=0;o<i;o++){let s=a(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||De:t;s=Bt(l,s)}r.push(s)}return r}function aL(e,t,{clamp:n=!0,ease:r,mixer:a}={}){const i=e.length;if(Hm(i===t.length),i===1)return()=>t[0];if(i===2&&e[0]===e[1])return()=>t[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=rL(t,r,a),s=o.length,l=u=>{let p=0;if(s>1)for(;p<e.length-2&&!(u<e[p+1]);p++);const d=Fa(e[p],e[p+1],u);return o[p](d)};return n?u=>l(fn(e[0],e[i-1],u)):l}function iL(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const a=Fa(0,t,r);e.push(le(n,1,a))}}function oL(e){const t=[0];return iL(t,e.length-1),t}function sL(e,t){return e.map(n=>n*t)}function lL(e,t){return e.map(()=>t||O1).splice(0,e.length-1)}function So({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const a=V_(r)?r.map(Vy):Vy(r),i={done:!1,value:t[0]},o=sL(n&&n.length===t.length?n:oL(t),e),s=aL(o,t,{ease:Array.isArray(a)?a:lL(t,a)});return{calculatedDuration:e,next:l=>(i.value=s(l),i.done=l>=e,i)}}const Jy=2e4;function uL(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Jy;)t+=n,r=e.next(t);return t>=Jy?1/0:t}const cL=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Z.update(t,!0),stop:()=>Ht(t),now:()=>xe.isProcessing?xe.timestamp:Gt.now()}},dL={decay:zy,inertia:zy,tween:So,keyframes:So,spring:_1},pL=e=>e/100;class Of extends k1{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:a,keyframes:i}=this.options,o=(a==null?void 0:a.KeyframeResolver)||Rf,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(i,s,n,r,a),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:i,velocity:o=0}=this.options,s=dL[n]||So;let l,u;s!==So&&typeof t[0]!="number"&&(l=Bt(pL,j1(t[0],t[1])),t=[0,100]);const p=s({...this.options,keyframes:t});i==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),p.calculatedDuration===null&&(p.calculatedDuration=uL(p));const{calculatedDuration:d}=p,g=d+a,h=g*(r+1)-a;return{generator:p,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:g,totalDuration:h}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:A}=this.options;return{done:!0,value:A[A.length-1]}}const{finalKeyframe:a,generator:i,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:p,resolvedDuration:d}=r;if(this.startTime===null)return i.next(0);const{delay:g,repeat:h,repeatType:v,repeatDelay:b,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-p/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const y=this.currentTime-g*(this.speed>=0?1:-1),m=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let f=this.currentTime,E=i;if(h){const A=Math.min(this.currentTime,p)/d;let R=Math.floor(A),N=A%1;!N&&A>=1&&(N=1),N===1&&R--,R=Math.min(R,h+1),!!(R%2)&&(v==="reverse"?(N=1-N,b&&(N-=b/d)):v==="mirror"&&(E=o)),f=fn(0,1,N)*d}const x=m?{done:!1,value:l[0]}:E.next(f);s&&(x.value=s(x.value));let{done:T}=x;!m&&u!==null&&(T=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&a!==void 0&&(x.value=Jo(l,this.options,a)),w&&w(x.value),C&&this.finish(),x}get duration(){const{resolved:t}=this;return t?Ut(t.calculatedDuration):0}get time(){return Ut(this.currentTime)}set time(t){t=jt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ut(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=cL,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(i=>this.tick(i))),n&&n();const a=this.driver.now();this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=a):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const U1=e=>Array.isArray(e)&&typeof e[0]=="number";function G1(e){return!!(!e||typeof e=="string"&&e in Df||U1(e)||Array.isArray(e)&&e.every(G1))}const Xr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Df={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xr([0,.65,.55,1]),circOut:Xr([.55,0,1,.45]),backIn:Xr([.31,.01,.66,-.59]),backOut:Xr([.33,1.53,.69,.99])};function mL(e){return q1(e)||Df.easeOut}function q1(e){if(e)return U1(e)?Xr(e):Array.isArray(e)?e.map(mL):Df[e]}function gL(e,t,n,{delay:r=0,duration:a=300,repeat:i=0,repeatType:o="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const p=q1(s);return Array.isArray(p)&&(u.easing=p),e.animate(u,{delay:r,duration:a,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"})}const fL=R1(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Eo=10,hL=2e4;function yL(e){return e.type==="spring"||!G1(e.ease)}function bL(e,t){const n=new Of({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const a=[];let i=0;for(;!r.done&&i<hL;)r=n.sample(i),a.push(r.value),i+=Eo;return{times:void 0,keyframes:a,duration:i-Eo,ease:"linear"}}class Ky extends k1{constructor(t){super(t);const{name:n,motionValue:r,element:a,keyframes:i}=this.options;this.resolver=new C1(i,(o,s)=>this.onKeyframesResolved(o,s),n,r,a),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:a=300,times:i,ease:o,type:s,motionValue:l,name:u,startTime:p}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(yL(this.options)){const{onComplete:g,onUpdate:h,motionValue:v,element:b,...w}=this.options,y=bL(t,w);t=y.keyframes,t.length===1&&(t[1]=t[0]),a=y.duration,i=y.times,o=y.ease,s="keyframes"}const d=gL(l.owner.current,u,t,{...this.options,duration:a,times:i,ease:o});return d.startTime=p??this.calcStartTime(),this.pendingTimeline?(d.timeline=this.pendingTimeline,this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:g}=this.options;l.set(Jo(t,this.options,n)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:a,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Ut(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Ut(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=jt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return De;const{animation:r}=n;r.timeline=t,r.onfinish=null}return De}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:a,type:i,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:p,onComplete:d,element:g,...h}=this.options,v=new Of({...h,keyframes:r,duration:a,type:i,ease:o,times:s,isGenerator:!0}),b=jt(this.time);u.setWithVelocity(v.sample(b-Eo).value,v.sample(b).value,Eo)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:a,repeatType:i,damping:o,type:s}=t;return fL()&&r&&a1.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!a&&i!=="mirror"&&o!==0&&s!=="inertia"}}function vL(e,t){let n;const r=()=>{const{currentTime:a}=t,o=(a===null?0:a.value)/100;n!==o&&e(o),n=o};return Z.update(r,!0),()=>Ht(r)}const SL=R1(()=>window.ScrollTimeline!==void 0);class EL{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t){const n=this.animations.map(r=>{if(SL()&&r.attachTimeline)r.attachTimeline(t);else return r.pause(),vL(a=>{r.time=r.duration*a},t)});return()=>{n.forEach((r,a)=>{r&&r(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const Mf=(e,t,n,r={},a,i,o)=>s=>{const l=Cf(r,e)||{},u=l.delay||r.delay||0;let{elapsed:p=0}=r;p=p-jt(u);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-p,onUpdate:h=>{t.set(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{s(),l.onComplete&&l.onComplete(),o&&o()},onStop:o,name:e,motionValue:t,element:i?void 0:a};e_(l)||(d={...d,...Q2(e,d)}),d.duration&&(d.duration=jt(d.duration)),d.repeatDelay&&(d.repeatDelay=jt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let g=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(g=!0)),g&&!i&&t.get()!==void 0){const h=Jo(d.keyframes,l);if(h!==void 0)return Z.update(()=>{d.onUpdate(h),d.onComplete()}),new EL([])}return!i&&Ky.supports(d)?new Ky(d):new Of(d)};class Pf{constructor(){this.subscriptions=[]}add(t){return $o(this.subscriptions,t),()=>Vo(this.subscriptions,t)}notify(t,n,r){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](t,n,r);else for(let i=0;i<a;i++){const o=this.subscriptions[i];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yy=30,wL=e=>!isNaN(parseFloat(e));class z1{constructor(t,n={}){this.version="11.3.28",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,a=!0)=>{const i=Gt.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),a&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Gt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=wL(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Pf);const r=this.events[t].add(n);return t==="change"?()=>{r(),Z.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Gt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Yy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Yy);return I1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ba(e,t){return new z1(e,t)}function xL(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ba(n))}function TL(e,t){const n=Wo(e,t);let{transitionEnd:r={},transition:a={},...i}=n||{};i={...i,...r};for(const o in i){const s=I2(i[o]);xL(e,o,s)}}function $1(e){return e.getProps()[GA]}class AL extends z1{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(t){const n=i1(t);if(!n)return;const r=this.counts.get(n)||0;this.counts.set(n,r+1),r===0&&(this.output.push(n),this.update());let a=!1;return()=>{if(a)return;a=!0;const i=this.counts.get(n)-1;this.counts.set(n,i),i===0&&(Vo(this.output,n),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}function CL(e){return!!(Oe(e)&&e.add)}function tg(e,t){var n;if(!e.applyWillChange)return;let r=e.getValue("willChange");if(!r&&!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&(r=new AL("auto"),e.addValue("willChange",r)),CL(r))return r.add(t)}function RL({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function V1(e,t,{delay:n=0,transitionOverride:r,type:a}={}){var i;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const u=[],p=a&&e.animationState&&e.animationState.getState()[a];for(const d in l){const g=e.getValue(d,(i=e.latestValues[d])!==null&&i!==void 0?i:null),h=l[d];if(h===void 0||p&&RL(p,d))continue;const v={delay:n,...Cf(o||{},d)};let b=!1;if(window.MotionHandoffAnimation){const y=$1(e);if(y){const m=window.MotionHandoffAnimation(y,d,Z);m!==null&&(v.startTime=m,b=!0)}}g.start(Mf(d,g,h,e.shouldReduceMotion&&Sn.has(d)?{type:!1}:v,e,b,tg(e,d)));const w=g.animation;w&&u.push(w)}return s&&Promise.all(u).then(()=>{Z.update(()=>{s&&TL(e,s)})}),u}function ng(e,t,n={}){var r;const a=Wo(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(i=n.transitionOverride);const o=a?()=>Promise.all(V1(e,a,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:p=0,staggerChildren:d,staggerDirection:g}=i;return kL(e,t,p+u,d,g,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,p]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>p())}else return Promise.all([o(),s(n.delay)])}function kL(e,t,n=0,r=0,a=1,i){const o=[],s=(e.variantChildren.size-1)*r,l=a===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(IL).forEach((u,p)=>{u.notify("AnimationStart",t),o.push(ng(u,t,{...i,delay:n+l(p)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function IL(e,t){return e.sortNodePosition(t)}function NL(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const a=t.map(i=>ng(e,i,n));r=Promise.all(a)}else if(typeof t=="string")r=ng(e,t,n);else{const a=typeof t=="function"?Wo(e,t,n.custom):t;r=Promise.all(V1(e,a,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const _L=[...gf].reverse(),LL=gf.length;function OL(e){return t=>Promise.all(t.map(({animation:n,options:r})=>NL(e,n,r)))}function DL(e){let t=OL(e),n=Xy(),r=!0;const a=l=>(u,p)=>{var d;const g=Wo(e,p,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(g){const{transition:h,transitionEnd:v,...b}=g;u={...u,...b,...v}}return u};function i(l){t=l(e)}function o(l){const u=e.getProps(),p=e.getVariantContext(!0)||{},d=[],g=new Set;let h={},v=1/0;for(let w=0;w<LL;w++){const y=_L[w],m=n[y],f=u[y]!==void 0?u[y]:p[y],E=Da(f),x=y===l?m.isActive:null;x===!1&&(v=w);let T=f===p[y]&&f!==u[y]&&E;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...h},!m.isActive&&x===null||!f&&!m.prevProp||Ma(f)||typeof f=="boolean")continue;let A=ML(m.prevProp,f)||y===l&&m.isActive&&!T&&E||w>v&&E,R=!1;const N=Array.isArray(f)?f:[f];let D=N.reduce(a(y),{});x===!1&&(D={});const{prevResolvedValues:G={}}=m,Y={...G,...D},ee=q=>{A=!0,g.has(q)&&(R=!0,g.delete(q)),m.needsAnimating[q]=!0;const J=e.getValue(q);J&&(J.liveStyle=!1)};for(const q in Y){const J=D[q],te=G[q];if(h.hasOwnProperty(q))continue;let I=!1;Wm(J)&&Wm(te)?I=!p1(J,te):I=J!==te,I?J!=null?ee(q):g.add(q):J!==void 0&&g.has(q)?ee(q):m.protectedKeys[q]=!0}m.prevProp=f,m.prevResolvedValues=D,m.isActive&&(h={...h,...D}),r&&e.blockInitialAnimation&&(A=!1),A&&(!T||R)&&d.push(...N.map(q=>({animation:q,options:{type:y}})))}if(g.size){const w={};g.forEach(y=>{const m=e.getBaseTarget(y),f=e.getValue(y);f&&(f.liveStyle=!0),w[y]=m??null}),d.push({animation:w})}let b=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(d):Promise.resolve()}function s(l,u){var p;if(n[l].isActive===u)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(g=>{var h;return(h=g.animationState)===null||h===void 0?void 0:h.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const g in n)n[g].protectedKeys={};return d}return{animateChanges:o,setActive:s,setAnimateFunction:i,getState:()=>n,reset:()=>{n=Xy(),r=!0}}}function ML(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!p1(t,e):!1}function xn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xy(){return{animate:xn(!0),whileInView:xn(),whileHover:xn(),whileTap:xn(),whileDrag:xn(),whileFocus:xn(),exit:xn()}}class PL extends En{constructor(t){super(t),t.animationState||(t.animationState=DL(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ma(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let FL=0;class BL extends En{constructor(){super(...arguments),this.id=FL++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const a=this.node.animationState.setActive("exit",!t);n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const jL={animation:{Feature:PL},exit:{Feature:BL}},Zy=(e,t)=>Math.abs(e-t);function UL(e,t){const n=Zy(e.x,t.x),r=Zy(e.y,t.y);return Math.sqrt(n**2+r**2)}class H1{constructor(t,n,{transformPagePoint:r,contextWindow:a,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Bs(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,h=UL(d.offset,{x:0,y:0})>=3;if(!g&&!h)return;const{point:v}=d,{timestamp:b}=xe;this.history.push({...v,timestamp:b});const{onStart:w,onMove:y}=this.handlers;g||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,d)},this.handlePointerMove=(d,g)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Fs(g,this.transformPagePoint),Z.update(this.updatePoint,!0)},this.handlePointerUp=(d,g)=>{this.end();const{onEnd:h,onSessionEnd:v,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Bs(d.type==="pointercancel"?this.lastMoveEventInfo:Fs(g,this.transformPagePoint),this.history);this.startEvent&&h&&h(d,w),v&&v(d,w)},!s1(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=a||window;const o=Ho(t),s=Fs(o,this.transformPagePoint),{point:l}=s,{timestamp:u}=xe;this.history=[{...l,timestamp:u}];const{onSessionStart:p}=n;p&&p(t,Bs(s,this.history)),this.removeListeners=Bt(Ft(this.contextWindow,"pointermove",this.handlePointerMove),Ft(this.contextWindow,"pointerup",this.handlePointerUp),Ft(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ht(this.updatePoint)}}function Fs(e,t){return t?{point:t(e.point)}:e}function Qy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Bs({point:e},t){return{point:e,delta:Qy(e,W1(t)),offset:Qy(e,GL(t)),velocity:qL(t,.1)}}function GL(e){return e[0]}function W1(e){return e[e.length-1]}function qL(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const a=W1(e);for(;n>=0&&(r=e[n],!(a.timestamp-r.timestamp>jt(t)));)n--;if(!r)return{x:0,y:0};const i=Ut(a.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const o={x:(a.x-r.x)/i,y:(a.y-r.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const J1=1e-4,zL=1-J1,$L=1+J1,K1=.01,VL=0-K1,HL=0+K1;function tt(e){return e.max-e.min}function WL(e,t,n){return Math.abs(e-t)<=n}function eb(e,t,n,r=.5){e.origin=r,e.originPoint=le(t.min,t.max,e.origin),e.scale=tt(n)/tt(t),e.translate=le(n.min,n.max,e.origin)-e.originPoint,(e.scale>=zL&&e.scale<=$L||isNaN(e.scale))&&(e.scale=1),(e.translate>=VL&&e.translate<=HL||isNaN(e.translate))&&(e.translate=0)}function ma(e,t,n,r){eb(e.x,t.x,n.x,r?r.originX:void 0),eb(e.y,t.y,n.y,r?r.originY:void 0)}function tb(e,t,n){e.min=n.min+t.min,e.max=e.min+tt(t)}function JL(e,t,n){tb(e.x,t.x,n.x),tb(e.y,t.y,n.y)}function nb(e,t,n){e.min=t.min-n.min,e.max=e.min+tt(t)}function ga(e,t,n){nb(e.x,t.x,n.x),nb(e.y,t.y,n.y)}function KL(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?le(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?le(n,e,r.max):Math.min(e,n)),e}function rb(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function YL(e,{top:t,left:n,bottom:r,right:a}){return{x:rb(e.x,n,a),y:rb(e.y,t,r)}}function ab(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function XL(e,t){return{x:ab(e.x,t.x),y:ab(e.y,t.y)}}function ZL(e,t){let n=.5;const r=tt(e),a=tt(t);return a>r?n=Fa(t.min,t.max-r,e.min):r>a&&(n=Fa(e.min,e.max-a,t.min)),fn(0,1,n)}function QL(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const rg=.35;function eO(e=rg){return e===!1?e=0:e===!0&&(e=rg),{x:ib(e,"left","right"),y:ib(e,"top","bottom")}}function ib(e,t,n){return{min:ob(e,t),max:ob(e,n)}}function ob(e,t){return typeof e=="number"?e:e[t]||0}const sb=()=>({translate:0,scale:1,origin:0,originPoint:0}),dr=()=>({x:sb(),y:sb()}),lb=()=>({min:0,max:0}),pe=()=>({x:lb(),y:lb()});function ot(e){return[e("x"),e("y")]}function Y1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function tO({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function nO(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function js(e){return e===void 0||e===1}function ag({scale:e,scaleX:t,scaleY:n}){return!js(e)||!js(t)||!js(n)}function Rn(e){return ag(e)||X1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function X1(e){return ub(e.x)||ub(e.y)}function ub(e){return e&&e!=="0%"}function wo(e,t,n){const r=e-n,a=t*r;return n+a}function cb(e,t,n,r,a){return a!==void 0&&(e=wo(e,a,r)),wo(e,n,r)+t}function ig(e,t=0,n=1,r,a){e.min=cb(e.min,t,n,r,a),e.max=cb(e.max,t,n,r,a)}function Z1(e,{x:t,y:n}){ig(e.x,t.translate,t.scale,t.originPoint),ig(e.y,n.translate,n.scale,n.originPoint)}const db=.999999999999,pb=1.0000000000001;function rO(e,t,n,r=!1){const a=n.length;if(!a)return;t.x=t.y=1;let i,o;for(let s=0;s<a;s++){i=n[s],o=i.projectionDelta;const{visualElement:l}=i.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&mr(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Z1(e,o)),r&&Rn(i.latestValues)&&mr(e,i.latestValues))}t.x<pb&&t.x>db&&(t.x=1),t.y<pb&&t.y>db&&(t.y=1)}function pr(e,t){e.min=e.min+t,e.max=e.max+t}function mb(e,t,n,r,a=.5){const i=le(e.min,e.max,a);ig(e,t,n,i,r)}function mr(e,t){mb(e.x,t.x,t.scaleX,t.scale,t.originX),mb(e.y,t.y,t.scaleY,t.scale,t.originY)}function Q1(e,t){return Y1(nO(e.getBoundingClientRect(),t))}function aO(e,t,n){const r=Q1(e,n),{scroll:a}=t;return a&&(pr(r.x,a.offset.x),pr(r.y,a.offset.y)),r}const eC=({current:e})=>e?e.ownerDocument.defaultView:null,iO=new WeakMap;class oO{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const a=p=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ho(p,"page").point)},i=(p,d)=>{var g;const{drag:h,dragPropagation:v,onDragStart:b}=this.getProps();if(h&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=u1(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ot(y=>{let m=this.getAxisMotionValue(y).get()||0;if(It.test(m)){const{projection:f}=this.visualElement;if(f&&f.layout){const E=f.layout.layoutBox[y];E&&(m=tt(E)*(parseFloat(m)/100))}}this.originPoint[y]=m}),b&&Z.postRender(()=>b(p,d)),(g=this.removeWillChange)===null||g===void 0||g.call(this),this.removeWillChange=tg(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},o=(p,d)=>{const{dragPropagation:g,dragDirectionLock:h,onDirectionLock:v,onDrag:b}=this.getProps();if(!g&&!this.openGlobalLock)return;const{offset:w}=d;if(h&&this.currentDirection===null){this.currentDirection=sO(w),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),b&&b(p,d)},s=(p,d)=>this.stop(p,d),l=()=>ot(p=>{var d;return this.getAnimationState(p)==="paused"&&((d=this.getAxisMotionValue(p).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new H1(t,{onSessionStart:a,onStart:i,onMove:o,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:eC(this.visualElement)})}stop(t,n){var r;(r=this.removeWillChange)===null||r===void 0||r.call(this);const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&Z.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:a}=this.getProps();if(!r||!Si(t,a,this.currentDirection))return;const i=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=KL(o,this.constraints[t],this.elastic[t])),i.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&ur(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=YL(a.layoutBox,n):this.constraints=!1,this.elastic=eO(r),i!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&ot(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=QL(a.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ur(t))return!1;const r=t.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const i=aO(r,a.root,this.visualElement.getTransformPagePoint());let o=XL(a.layout.layoutBox,i);if(n){const s=n(tO(o));this.hasMutatedConstraints=!!s,s&&(o=Y1(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:a,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=ot(p=>{if(!Si(p,n,this.currentDirection))return;let d=l&&l[p]||{};o&&(d={min:0,max:0});const g=a?200:1e6,h=a?40:1e7,v={type:"inertia",velocity:r?t[p]:0,bounceStiffness:g,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(p,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Mf(t,r,0,n,this.visualElement,!1,tg(this.visualElement,t)))}stopAnimation(){ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),a=r[n];return a||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ot(n=>{const{drag:r}=this.getProps();if(!Si(n,r,this.currentDirection))return;const{projection:a}=this.visualElement,i=this.getAxisMotionValue(n);if(a&&a.layout){const{min:o,max:s}=a.layout.layoutBox[n];i.set(t[n]-le(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ur(n)||!r||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};ot(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();a[o]=ZL({min:l,max:l},this.constraints[o])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ot(o=>{if(!Si(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];s.set(le(l,u,a[o]))})}addListeners(){if(!this.visualElement.current)return;iO.set(this.visualElement,this);const t=this.visualElement.current,n=Ft(t,"pointerdown",l=>{const{drag:u,dragListener:p=!0}=this.getProps();u&&p&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ur(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",r);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Z.read(r);const o=Mt(window,"resize",()=>this.scalePositionWithinConstraints()),s=a.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ot(p=>{const d=this.getAxisMotionValue(p);d&&(this.originPoint[p]+=l[p].translate,d.set(d.get()+l[p].translate))}),this.visualElement.render())});return()=>{o(),n(),i(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:a=!1,dragConstraints:i=!1,dragElastic:o=rg,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:a,dragConstraints:i,dragElastic:o,dragMomentum:s}}}function Si(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function sO(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class lO extends En{constructor(t){super(t),this.removeGroupControls=De,this.removeListeners=De,this.controls=new oO(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const gb=e=>(t,n)=>{e&&Z.postRender(()=>e(t,n))};class uO extends En{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(t){this.session=new H1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eC(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:a}=this.node.getProps();return{onSessionStart:gb(t),onStart:gb(n),onMove:r,onEnd:(i,o)=>{delete this.session,a&&Z.postRender(()=>a(i,o))}}}mount(){this.removePointerDownListener=Ft(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function cO(){const e=k.useContext(df);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,a=k.useId();k.useEffect(()=>r(a),[]);const i=k.useCallback(()=>n&&n(a),[a,n]);return!t&&n?[!1,i]:[!0]}const Bi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fb(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Vr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(B.test(e))e=parseFloat(e);else return e;const n=fb(e,t.target.x),r=fb(e,t.target.y);return`${n}% ${r}%`}},dO={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,a=hn.parse(e);if(a.length>5)return r;const i=hn.createTransformer(e),o=typeof a[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;a[0+o]/=s,a[1+o]/=l;const u=le(s,l,.5);return typeof a[2+o]=="number"&&(a[2+o]/=u),typeof a[3+o]=="number"&&(a[3+o]/=u),i(a)}};class pO extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:a}=this.props,{projection:i}=t;a2(mO),i&&(n.group&&n.group.add(i),r&&r.register&&a&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Bi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:a,isPresent:i}=this.props,o=r.projection;return o&&(o.isPresent=i,a||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?o.promote():o.relegate()||Z.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),mf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:a}=t;a&&(a.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(a),r&&r.deregister&&r.deregister(a))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function tC(e){const[t,n]=cO(),r=k.useContext(HA);return c.jsx(pO,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(zA),isPresent:t,safeToRemove:n})}const mO={borderRadius:{...Vr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Vr,borderTopRightRadius:Vr,borderBottomLeftRadius:Vr,borderBottomRightRadius:Vr,boxShadow:dO},nC=["TopLeft","TopRight","BottomLeft","BottomRight"],gO=nC.length,hb=e=>typeof e=="string"?parseFloat(e):e,yb=e=>typeof e=="number"||B.test(e);function fO(e,t,n,r,a,i){a?(e.opacity=le(0,n.opacity!==void 0?n.opacity:1,hO(r)),e.opacityExit=le(t.opacity!==void 0?t.opacity:1,0,yO(r))):i&&(e.opacity=le(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<gO;o++){const s=`border${nC[o]}Radius`;let l=bb(t,s),u=bb(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||yb(l)===yb(u)?(e[s]=Math.max(le(hb(l),hb(u),r),0),(It.test(u)||It.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=le(t.rotate||0,n.rotate||0,r))}function bb(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const hO=rC(0,.5,P1),yO=rC(.5,.95,De);function rC(e,t,n){return r=>r<e?0:r>t?1:n(Fa(e,t,r))}function vb(e,t){e.min=t.min,e.max=t.max}function at(e,t){vb(e.x,t.x),vb(e.y,t.y)}function Sb(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Eb(e,t,n,r,a){return e-=t,e=wo(e,1/n,r),a!==void 0&&(e=wo(e,1/a,r)),e}function bO(e,t=0,n=1,r=.5,a,i=e,o=e){if(It.test(t)&&(t=parseFloat(t),t=le(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=le(i.min,i.max,r);e===i&&(s-=t),e.min=Eb(e.min,t,n,s,a),e.max=Eb(e.max,t,n,s,a)}function wb(e,t,[n,r,a],i,o){bO(e,t[n],t[r],t[a],t.scale,i,o)}const vO=["x","scaleX","originX"],SO=["y","scaleY","originY"];function xb(e,t,n,r){wb(e.x,t,vO,n?n.x:void 0,r?r.x:void 0),wb(e.y,t,SO,n?n.y:void 0,r?r.y:void 0)}function Tb(e){return e.translate===0&&e.scale===1}function aC(e){return Tb(e.x)&&Tb(e.y)}function Ab(e,t){return e.min===t.min&&e.max===t.max}function EO(e,t){return Ab(e.x,t.x)&&Ab(e.y,t.y)}function Cb(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function iC(e,t){return Cb(e.x,t.x)&&Cb(e.y,t.y)}function Rb(e){return tt(e.x)/tt(e.y)}function kb(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class wO{constructor(){this.members=[]}add(t){$o(this.members,t),t.scheduleRender()}remove(t){if(Vo(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(a=>t===a);if(n===0)return!1;let r;for(let a=n;a>=0;a--){const i=this.members[a];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function xO(e,t,n){let r="";const a=e.x.translate/t.x,i=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((a||i||o)&&(r=`translate3d(${a}px, ${i}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:p,rotateX:d,rotateY:g,skewX:h,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),p&&(r+=`rotate(${p}deg) `),d&&(r+=`rotateX(${d}deg) `),g&&(r+=`rotateY(${g}deg) `),h&&(r+=`skewX(${h}deg) `),v&&(r+=`skewY(${v}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const TO=(e,t)=>e.depth-t.depth;class AO{constructor(){this.children=[],this.isDirty=!1}add(t){$o(this.children,t),this.isDirty=!0}remove(t){Vo(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(TO),this.isDirty=!1,this.children.forEach(t)}}function CO(e,t){const n=Gt.now(),r=({timestamp:a})=>{const i=a-n;i>=t&&(Ht(r),e(i-t))};return Z.read(r,!0),()=>Ht(r)}function RO(e){return e instanceof SVGElement&&e.tagName!=="svg"}function kO(e,t,n){const r=Oe(e)?e:Ba(e);return r.start(Mf("",r,t,n)),r.animation}const kn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Zr=typeof window<"u"&&window.MotionDebug!==void 0,Us=["","X","Y","Z"],IO={visibility:"hidden"},Ib=1e3;let NO=0;function Gs(e,t,n,r){const{latestValues:a}=t;a[e]&&(n[e]=a[e],t.setStaticValue(e,0),r&&(r[e]=0))}function oC(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;const{visualElement:t}=e.options;return t?window.MotionHasOptimisedTransformAnimation($1(t))?!0:e.parent&&!e.parent.hasCheckedOptimisedAppear?oC(e.parent):!1:!1}function sC({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:a}){return class{constructor(o={},s=t==null?void 0:t()){this.id=NO++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zr&&(kn.totalNodes=kn.resolvedTargetDeltas=kn.recalculatedProjection=0),this.nodes.forEach(OO),this.nodes.forEach(BO),this.nodes.forEach(jO),this.nodes.forEach(DO),Zr&&window.MotionDebug.record(kn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new AO)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Pf),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=RO(o),this.instance=o;const{layoutId:l,layout:u,visualElement:p}=this.options;if(p&&!p.current&&p.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const g=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=CO(g,250),Bi.hasAnimatedSinceResize&&(Bi.hasAnimatedSinceResize=!1,this.nodes.forEach(_b))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&p&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:g,hasRelativeTargetChanged:h,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||p.getDefaultTransition()||$O,{onLayoutAnimationStart:w,onLayoutAnimationComplete:y}=p.getProps(),m=!this.targetLayout||!iC(this.targetLayout,v)||h,f=!g&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||f||g&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,f);const E={...Cf(b,"layout"),onPlay:w,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else g||_b(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ht(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UO),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionHandoffCancelAll&&oC(this)&&window.MotionHandoffCancelAll(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const d=this.path[p];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Nb);return}this.isUpdating||this.nodes.forEach(PO),this.isUpdating=!1,this.nodes.forEach(FO),this.nodes.forEach(_O),this.nodes.forEach(LO),this.clearAllSnapshots();const s=Gt.now();xe.delta=fn(0,1e3/60,s-xe.timestamp),xe.timestamp=s,xe.isProcessing=!0,Ns.update.process(xe),Ns.preRender.process(xe),Ns.render.process(xe),xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,mf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(MO),this.sharedNodes.forEach(GO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Z.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Z.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!a)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!aC(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,p=u!==this.prevTransformTemplateValue;o&&(s||Rn(this.latestValues)||p)&&(a(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),VO(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return pe();const l=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(HO))){const{scroll:p}=this.root;p&&(pr(l.x,p.offset.x),pr(l.y,p.offset.y))}return l}removeElementScroll(o){var s;const l=pe();if(at(l,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const p=this.path[u],{scroll:d,options:g}=p;p!==this.root&&d&&g.layoutScroll&&(d.wasRoot&&at(l,o),pr(l.x,d.offset.x),pr(l.y,d.offset.y))}return l}applyTransform(o,s=!1){const l=pe();at(l,o);for(let u=0;u<this.path.length;u++){const p=this.path[u];!s&&p.options.layoutScroll&&p.scroll&&p!==p.root&&mr(l,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Rn(p.latestValues)&&mr(l,p.latestValues)}return Rn(this.latestValues)&&mr(l,this.latestValues),l}removeTransform(o){const s=pe();at(s,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Rn(u.latestValues))continue;ag(u.latestValues)&&u.updateSnapshot();const p=pe(),d=u.measurePageBox();at(p,d),xb(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,p)}return Rn(this.latestValues)&&xb(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:g}=this.options;if(!(!this.layout||!(d||g))){if(this.resolvedRelativeTargetAt=xe.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),ga(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),JL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):at(this.target,this.layout.layoutBox),Z1(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),ga(this.relativeTargetOrigin,this.target,h.target),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zr&&kn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ag(this.parent.latestValues)||X1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===xe.timestamp&&(u=!1),u)return;const{layout:p,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||d))return;at(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,h=this.treeScale.y;rO(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=pe());const{target:v}=s;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sb(this.prevProjectionDelta.x,this.projectionDelta.x),Sb(this.prevProjectionDelta.y,this.projectionDelta.y)),ma(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==h||!kb(this.projectionDelta.x,this.prevProjectionDelta.x)||!kb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Zr&&kn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=dr(),this.projectionDelta=dr(),this.projectionDeltaWithTransform=dr()}setAnimationOrigin(o,s=!1){const l=this.snapshot,u=l?l.latestValues:{},p={...this.latestValues},d=dr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const g=pe(),h=l?l.source:void 0,v=this.layout?this.layout.source:void 0,b=h!==v,w=this.getStack(),y=!w||w.members.length<=1,m=!!(b&&!y&&this.options.crossfade===!0&&!this.path.some(zO));this.animationProgress=0;let f;this.mixTargetDelta=E=>{const x=E/1e3;Lb(d.x,o.x,x),Lb(d.y,o.y,x),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ga(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),qO(this.relativeTarget,this.relativeTargetOrigin,g,x),f&&EO(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||(f=pe()),at(f,this.relativeTarget)),b&&(this.animationValues=p,fO(p,u,this.latestValues,x,m,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ht(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Z.update(()=>{Bi.hasAnimatedSinceResize=!0,this.currentAnimation=kO(0,Ib,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ib),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:p}=o;if(!(!s||!l||!u)){if(this!==o&&this.layout&&u&&lC(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||pe();const d=tt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const g=tt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+g}at(s,l),mr(s,p),ma(this.projectionDeltaWithTransform,this.layoutCorrected,s,p)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new wO),this.sharedNodes.get(o).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&Gs("z",o,u,this.animationValues);for(let p=0;p<Us.length;p++)Gs(`rotate${Us[p]}`,o,u,this.animationValues),Gs(`skew${Us[p]}`,o,u,this.animationValues);o.render();for(const p in u)o.setStaticValue(p,u[p]),this.animationValues&&(this.animationValues[p]=u[p]);o.scheduleRender()}getProjectionStyles(o){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return IO;const u={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Pi(o==null?void 0:o.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Pi(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Rn(this.latestValues)&&(b.transform=p?p({},""):"none",this.hasProjected=!1),b}const g=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=xO(this.projectionDeltaWithTransform,this.treeScale,g),p&&(u.transform=p(g,u.transform));const{x:h,y:v}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${v.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(s=g.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in yo){if(g[b]===void 0)continue;const{correct:w,applyTo:y}=yo[b],m=u.transform==="none"?g[b]:w(g[b],d);if(y){const f=y.length;for(let E=0;E<f;E++)u[y[E]]=m}else u[b]=m}return this.options.layoutId&&(u.pointerEvents=d===this?Pi(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Nb),this.root.sharedNodes.clear()}}}function _O(e){e.updateLayout()}function LO(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:a}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;i==="size"?ot(d=>{const g=o?n.measuredBox[d]:n.layoutBox[d],h=tt(g);g.min=r[d].min,g.max=g.min+h}):lC(i,n.layoutBox,r)&&ot(d=>{const g=o?n.measuredBox[d]:n.layoutBox[d],h=tt(r[d]);g.max=g.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+h)});const s=dr();ma(s,r,n.layoutBox);const l=dr();o?ma(l,e.applyTransform(a,!0),n.measuredBox):ma(l,r,n.layoutBox);const u=!aC(s);let p=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:g,layout:h}=d;if(g&&h){const v=pe();ga(v,n.layoutBox,g.layoutBox);const b=pe();ga(b,r,h.layoutBox),iC(v,b)||(p=!0),d.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:p})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function OO(e){Zr&&kn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function DO(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function MO(e){e.clearSnapshot()}function Nb(e){e.clearMeasurements()}function PO(e){e.isLayoutDirty=!1}function FO(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function _b(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function BO(e){e.resolveTargetDelta()}function jO(e){e.calcProjection()}function UO(e){e.resetSkewAndRotation()}function GO(e){e.removeLeadSnapshot()}function Lb(e,t,n){e.translate=le(t.translate,0,n),e.scale=le(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ob(e,t,n,r){e.min=le(t.min,n.min,r),e.max=le(t.max,n.max,r)}function qO(e,t,n,r){Ob(e.x,t.x,n.x,r),Ob(e.y,t.y,n.y,r)}function zO(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const $O={duration:.45,ease:[.4,0,.1,1]},Db=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Mb=Db("applewebkit/")&&!Db("chrome/")?Math.round:De;function Pb(e){e.min=Mb(e.min),e.max=Mb(e.max)}function VO(e){Pb(e.x),Pb(e.y)}function lC(e,t,n){return e==="position"||e==="preserve-aspect"&&!WL(Rb(t),Rb(n),.2)}function HO(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const WO=sC({attachResizeListener:(e,t)=>Mt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qs={current:void 0},uC=sC({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!qs.current){const e=new WO({});e.mount(window),e.setOptions({layoutScroll:!0}),qs.current=e}return qs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),JO={pan:{Feature:uO},drag:{Feature:lO,ProjectionNode:uC,MeasureLayout:tC}},og={current:null},cC={current:!1};function KO(){if(cC.current=!0,!!pf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>og.current=e.matches;e.addListener(t),t()}else og.current=!1}function YO(e,t,n){for(const r in t){const a=t[r],i=n[r];if(Oe(a))e.addValue(r,a);else if(Oe(i))e.addValue(r,Ba(a,{owner:e}));else if(i!==a)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(a):o.hasAnimated||o.set(a)}else{const o=e.getStaticValue(r);e.addValue(r,Ba(o!==void 0?o:a,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Fb=new WeakMap,XO=[...y1,Ne,hn],ZO=e=>XO.find(h1(e)),Bb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],QO=ff.length;class eD{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:a,blockInitialAnimation:i,visualState:o},s={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,Z.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.options=s,this.blockInitialAnimation=!!i,this.isControllingVariants=zo(n),this.isVariantNode=VA(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in d){const h=d[g];l[g]!==void 0&&Oe(h)&&h.set(l[g],!1)}}mount(t){this.current=t,Fb.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),cC.current||KO(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:og.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Fb.delete(this.current),this.projection&&this.projection.unmount(),Ht(this.notifyUpdate),Ht(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){const r=Sn.has(t),a=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Z.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{a(),i(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ir){const n=Ir[t];if(!n)continue;const{isEnabled:r,Feature:a}=n;if(!this.features[t]&&a&&r(this.props)&&(this.features[t]=new a(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Bb.length;r++){const a=Bb[r];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const i="on"+a,o=t[i];o&&(this.propEventSubscriptions[a]=this.on(a,o))}this.prevMotionValues=YO(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<QO;r++){const a=ff[r],i=this.props[a];(Da(i)||i===!1)&&(n[a]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ba(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(g1(a)||m1(a))?a=parseFloat(a):!ZO(a)&&hn.test(n)&&(a=A1(t,n)),this.setBaseTarget(t,Oe(a)?a.get():a)),Oe(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const o=Af(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(a=o[t])}if(r&&a!==void 0)return a;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Oe(i)?i:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Pf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class dC extends eD{constructor(){super(...arguments),this.KeyframeResolver=C1}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function tD(e){return window.getComputedStyle(e)}class nD extends dC{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=e1}readValueFromInstance(t,n){if(Sn.has(n)){const r=If(n);return r&&r.default||0}else{const r=tD(t),a=(YA(n)?r.getPropertyValue(n):r[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Q1(t,n)}build(t,n,r){Sf(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Tf(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Oe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class rD extends dC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Sn.has(n)){const r=If(n);return r&&r.default||0}return n=t1.has(n)?n:qo(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return r1(t,n,r)}build(t,n,r){wf(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,a){n1(t,n,r,a)}mount(t){this.isSVGTag=xf(t.tagName),super.mount(t)}}const aD=(e,t)=>hf(e)?new rD(t):new nD(t,{allowProjection:e!==k.Fragment}),iD={layout:{ProjectionNode:uC,MeasureLayout:tC}},oD={...jL,...J2,...JO,...iD},Le=n2((e,t)=>M2(e,t,oD,aD)),sD="/LearnJava/assets/welcome-lJxpkq19.png";var ji={},pC;Object.defineProperty(ji,"__esModule",{value:!0});var Qr=c,xt=k,ht=function(){return ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ht.apply(this,arguments)};function lD(e,t){var n,r;switch(t.type){case"TYPE":return ht(ht({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return ht(ht({},e),{speed:t.payload});case"DELETE":return ht(ht({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return ht(ht({},e),{count:e.count+1});default:return e}}var jb=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,a=r===void 0?1:r,i=e.typeSpeed,o=i===void 0?80:i,s=e.deleteSpeed,l=s===void 0?50:s,u=e.delaySpeed,p=u===void 0?1500:u,d=e.onLoopDone,g=e.onType,h=e.onDelete,v=e.onDelay,b=xt.useReducer(lD,{speed:o,text:"",count:0}),w=b[0],y=w.speed,m=w.text,f=w.count,E=b[1],x=xt.useRef(0),T=xt.useRef(!1),C=xt.useRef(!1),A=xt.useRef(!1),R=xt.useRef(!1),N=xt.useCallback(function(){var D=f%n.length,G=n[D];C.current?(E({type:"DELETE",payload:G,speed:l}),m===""&&(C.current=!1,E({type:"COUNT"}))):(E({type:"TYPE",payload:G,speed:o}),A.current=!0,m===G&&(E({type:"DELAY",payload:p}),A.current=!1,R.current=!0,setTimeout(function(){R.current=!1,C.current=!0},p),a>0&&(x.current+=1,x.current/n.length===a&&(R.current=!1,T.current=!0)))),A.current&&g&&g(x.current),C.current&&h&&h(),R.current&&v&&v()},[f,p,l,a,o,n,m,g,h,v]);return xt.useEffect(function(){var D=setTimeout(N,y);return T.current&&clearTimeout(D),function(){return clearTimeout(D)}},[N,y]),xt.useEffect(function(){d&&T.current&&d()},[d]),[m,{isType:A.current,isDelay:R.current,isDelete:C.current,isDone:T.current}]},uD="styles-module_blinkingCursor__yugAC",cD="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var Ub=xt.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,a=r===void 0?"|":r,i=e.cursorColor,o=i===void 0?"inherit":i;return Qr.jsx("span",ht({style:{color:o},className:"".concat(uD," ").concat(n?cD:"")},{children:a}))});ji.Cursor=Ub,pC=ji.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,a=r===void 0?1:r,i=e.typeSpeed,o=i===void 0?80:i,s=e.deleteSpeed,l=s===void 0?50:s,u=e.delaySpeed,p=u===void 0?1500:u,d=e.cursor,g=d!==void 0&&d,h=e.cursorStyle,v=h===void 0?"|":h,b=e.cursorColor,w=b===void 0?"inherit":b,y=e.cursorBlinking,m=y===void 0||y,f=e.onLoopDone,E=e.onType,x=e.onDelay,T=e.onDelete,C=jb({words:n,loop:a,typeSpeed:o,deleteSpeed:l,delaySpeed:p,onLoopDone:f,onType:E,onDelay:x,onDelete:T})[0];return Qr.jsxs(Qr.Fragment,{children:[Qr.jsx("span",{children:C}),g&&Qr.jsx(Ub,{cursorStyle:v,cursorColor:w,cursorBlinking:m})]})},ji.useTypewriter=jb;const dD="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-label='JavaScript'%20role='img'%20viewBox='0%200%20512%20512'%3e%3crect%20width='512'%20height='512'%20rx='15%25'%20fill='%23f7df1e'/%3e%3cpath%20d='M324%20370c10%2017%2024%2029%2047%2029c20%200%2033-10%2033%20-24c0-16%20-13%20-22%20-35%20-32l-12-5c-35-15%20-58%20-33%20-58%20-72c0-36%2027%20-64%2070%20-64c31%200%2053%2011%2068%2039l-37%2024c-8-15%20-17%20-21%20-31%20-21c-14%200-23%209%20-23%2021c0%2014%209%2020%2030%2029l12%205c41%2018%2064%2035%2064%2076c0%2043-34%2067%20-80%2067c-45%200-74%20-21%20-88%20-49zm-170%204c8%2013%2014%2025%2031%2025c16%200%2026-6%2026%20-30V203h48v164c0%2050-29%2072%20-72%2072c-39%200-61%20-20%20-72%20-44z'/%3e%3c/svg%3e",gr="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.0497%208.44062C22.6378%203.32607%2019.2566%200%2019.2566%200C19.7598%205.28738%2013.813%206.53583%2012.2189%2010.1692C11.1312%2012.6485%2012.9638%2014.8193%2016.0475%2017.5554C15.7749%2016.9494%2015.3544%2016.3606%2014.9288%2015.7645C13.4769%2013.7313%2011.9645%2011.6132%2016.0497%208.44062Z'%20fill='%23E76F00'/%3e%3cpath%20d='M17.1015%2018.677C17.1015%2018.677%2019.0835%2017.0779%2017.5139%2015.3008C12.1931%209.27186%2023.3333%206.53583%2023.3333%206.53583C16.5317%209.8125%2017.5471%2011.7574%2019.2567%2014.1202C21.0871%2016.6538%2017.1015%2018.677%2017.1015%2018.677Z'%20fill='%23E76F00'/%3e%3cpath%20d='M22.937%2023.4456C29.0423%2020.3258%2026.2195%2017.3278%2024.2492%2017.7317C23.7662%2017.8305%2023.5509%2017.9162%2023.5509%2017.9162C23.5509%2017.9162%2023.7302%2017.64%2024.0726%2017.5204C27.9705%2016.1729%2030.9682%2021.4949%2022.8143%2023.6028C22.8143%2023.6029%2022.9088%2023.5198%2022.937%2023.4456Z'%20fill='%235382A1'/%3e%3cpath%20d='M10.233%2019.4969C6.41312%2018.9953%2012.3275%2017.6139%2012.3275%2017.6139C12.3275%2017.6139%2010.0307%2017.4616%207.20592%2018.8043C3.86577%2020.3932%2015.4681%2021.1158%2021.474%2019.5625C22.0984%2019.1432%2022.9614%2018.7798%2022.9614%2018.7798C22.9614%2018.7798%2020.5037%2019.2114%2018.0561%2019.4145C15.0612%2019.6612%2011.8459%2019.7093%2010.233%2019.4969Z'%20fill='%235382A1'/%3e%3cpath%20d='M11.6864%2022.4758C9.55624%2022.2592%2010.951%2021.2439%2010.951%2021.2439C5.43898%2023.0429%2014.0178%2025.083%2021.7199%2022.8682C20.9012%2022.5844%2020.3806%2022.0653%2020.3806%2022.0653C16.6163%2022.7781%2014.441%2022.7553%2011.6864%2022.4758Z'%20fill='%235382A1'/%3e%3cpath%20d='M12.6145%2025.6991C10.486%2025.4585%2011.7295%2024.7474%2011.7295%2024.7474C6.72594%2026.1222%2014.7729%2028.9625%2021.1433%2026.2777C20.0999%2025.8787%2019.3528%2025.4181%2019.3528%2025.4181C16.5111%2025.9469%2015.1931%2025.9884%2012.6145%2025.6991Z'%20fill='%235382A1'/%3e%3cpath%20d='M25.9387%2027.3388C25.9387%2027.3388%2026.8589%2028.0844%2024.9252%2028.6612C21.2481%2029.7566%209.62093%2030.0874%206.39094%2028.7049C5.22984%2028.2082%207.40723%2027.5189%208.09215%2027.3742C8.80646%2027.2219%209.21466%2027.2503%209.21466%2027.2503C7.9234%2026.3558%200.868489%2029.0067%205.63111%2029.7659C18.6195%2031.8372%2029.3077%2028.8331%2025.9387%2027.3388Z'%20fill='%235382A1'/%3e%3cpath%20d='M28%2028.9679C27.7869%2031.6947%2018.7877%2032.2683%2012.9274%2031.8994C9.10432%2031.6583%208.33812%2031.0558%208.32691%2031.047C11.9859%2031.6402%2018.1549%2031.7482%2023.1568%2030.8225C27.5903%2030.0016%2028%2028.9679%2028%2028.9679Z'%20fill='%235382A1'/%3e%3c/svg%3e",Gb="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7559.000000)'%20fill='%23000000'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M94,7399%20C99.523,7399%20104,7403.59%20104,7409.253%20C104,7413.782%20101.138,7417.624%2097.167,7418.981%20C96.66,7419.082%2096.48,7418.762%2096.48,7418.489%20C96.48,7418.151%2096.492,7417.047%2096.492,7415.675%20C96.492,7414.719%2096.172,7414.095%2095.813,7413.777%20C98.04,7413.523%20100.38,7412.656%20100.38,7408.718%20C100.38,7407.598%2099.992,7406.684%2099.35,7405.966%20C99.454,7405.707%2099.797,7404.664%2099.252,7403.252%20C99.252,7403.252%2098.414,7402.977%2096.505,7404.303%20C95.706,7404.076%2094.85,7403.962%2094,7403.958%20C93.15,7403.962%2092.295,7404.076%2091.497,7404.303%20C89.586,7402.977%2088.746,7403.252%2088.746,7403.252%20C88.203,7404.664%2088.546,7405.707%2088.649,7405.966%20C88.01,7406.684%2087.619,7407.598%2087.619,7408.718%20C87.619,7412.646%2089.954,7413.526%2092.175,7413.785%20C91.889,7414.041%2091.63,7414.493%2091.54,7415.156%20C90.97,7415.418%2089.522,7415.871%2088.63,7414.304%20C88.63,7414.304%2088.101,7413.319%2087.097,7413.247%20C87.097,7413.247%2086.122,7413.234%2087.029,7413.87%20C87.029,7413.87%2087.684,7414.185%2088.139,7415.37%20C88.139,7415.37%2088.726,7417.2%2091.508,7416.58%20C91.513,7417.437%2091.522,7418.245%2091.522,7418.489%20C91.522,7418.76%2091.338,7419.077%2090.839,7418.982%20C86.865,7417.627%2084,7413.783%2084,7409.253%20C84,7403.59%2088.478,7399%2094,7399'%20id='github-[%23142]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",pD="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.58536%2017.4132C1.80488%2016.6327%201.80488%2015.3673%202.58536%2014.5868L14.5868%202.58536C15.3673%201.80488%2016.6327%201.80488%2017.4132%202.58536L29.4146%2014.5868C30.1951%2015.3673%2030.1951%2016.6327%2029.4146%2017.4132L17.4132%2029.4146C16.6327%2030.1951%2015.3673%2030.1951%2014.5868%2029.4146L2.58536%2017.4132Z'%20fill='%23EE513B'/%3e%3cpath%20d='M12.1489%205.06152L10.9336%206.27686L14.0725%209.41577C13.9455%209.68819%2013.8746%209.99201%2013.8746%2010.3124C13.8746%2011.222%2014.4461%2011.9981%2015.2496%2012.3012V19.9798C14.4461%2020.2829%2013.8746%2021.059%2013.8746%2021.9686C13.8746%2023.1422%2014.826%2024.0936%2015.9996%2024.0936C17.1732%2024.0936%2018.1246%2023.1422%2018.1246%2021.9686C18.1246%2021.144%2017.6549%2020.429%2016.9684%2020.0768V12.3117L19.9689%2015.3122C19.8481%2015.5791%2019.7809%2015.8754%2019.7809%2016.1874C19.7809%2017.361%2020.7323%2018.3124%2021.9059%2018.3124C23.0795%2018.3124%2024.0309%2017.361%2024.0309%2016.1874C24.0309%2015.0138%2023.0795%2014.0624%2021.9059%2014.0624C21.6778%2014.0624%2021.4582%2014.0983%2021.2522%2014.1648L18.0297%2010.9423C18.0914%2010.7433%2018.1246%2010.5317%2018.1246%2010.3124C18.1246%209.13878%2017.1732%208.18738%2015.9996%208.18738C15.7803%208.18738%2015.5688%208.22061%2015.3697%208.2823L12.1489%205.06152Z'%20fill='white'/%3e%3c/svg%3e",mD="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3ccircle%20style='fill:%2391C0F1;'%20cx='255.999'%20cy='255.998'%20r='255.998'/%3e%3cpath%20style='fill:%23D7EDF3;'%20d='M256,512C114.615,512,0.001,397.384,0.001,255.999S114.615,0,256,0V512z'/%3e%3cpath%20style='fill:%23A2CE86;'%20d='M142.83,345.053l3.763-4.164c12.842-14.212,12.595-35.91-0.567-49.827l-2.011-2.126%20c-8.623-9.118-11.989-22.007-8.927-34.176c4.016-15.959-3.08-32.639-17.363-40.814l-97.426-58.006%20C7.234,186.676,0.001,220.493,0.001,255.999c0,100.778,58.241,187.938,142.892,229.702l-9.008-109.85%20C131.987,364.756,135.284,353.404,142.83,345.053z'/%3e%3cg%3e%3cpath%20style='fill:%23489B6D;'%20d='M436.811,74.777l-16.915,18.486c-7.363,8.047-17.639,12.812-28.537,13.235l-76.503,2.969%20c-13.56,0.527-25.973,7.756-33.121,19.291l-19.61,31.644c-8.866,14.308-8.044,32.59,2.072,46.044l12.178,16.196%20c9.245,12.295,14.206,27.278,14.127,42.66l-0.259,50.205c-0.136,26.442,23.649,46.589,49.708,42.106l55.769-9.597%20c15.328-2.637,29.349-10.278,39.875-21.727l0,0c18.726-20.368,46.625-27.139,71.444-19.946c3.247-16.279,4.961-33.111,4.961-50.344%20C512.001,185.203,483.26,121.12,436.811,74.777z'/%3e%3cpath%20style='fill:%23489B6D;'%20d='M270.438,450.438L270.438,450.438c-17.042,7.556-26.831,25.666-23.817,44.062l2.854,17.416%20c2.168,0.054,4.343,0.082,6.525,0.082c41.38,0,80.46-9.831,115.051-27.265l-4.36-6.497%20C345.611,446.832,305.017,435.108,270.438,450.438z'/%3e%3c/g%3e%3cpath%20style='fill:%23A2CE86;'%20d='M145.49,101.316l51.928-29.224c8.166-4.596,14.086-12.345,16.373-21.433l12.308-48.911%20c-58.35,6.789-110.711,33.189-150.316,72.45l32.275,24.542C118.906,106.986,133.616,107.999,145.49,101.316z'/%3e%3c/svg%3e",qb="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-8.78%200%2070%2070'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cmetadata%3e%3crdf:rdf%3e%3ccc:work%3e%3cdc:subject%3e%20Data%20%3c/dc:subject%3e%3cdc:identifier%3e%20sql-database-generic%20%3c/dc:identifier%3e%3cdc:title%3e%20SQL%20Database%20(Generic)%20%3c/dc:title%3e%3cdc:format%3e%20image/svg+xml%20%3c/dc:format%3e%3cdc:publisher%3e%20Amido%20Limited%20%3c/dc:publisher%3e%3cdc:creator%3e%20Richard%20Slater%20%3c/dc:creator%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3e%3c/cc:work%3e%3c/rdf:rdf%3e%3c/metadata%3e%3cpath%20d='m%20852.97077,1013.9363%20c%20-6.55238,-0.4723%20-13.02857,-2.1216%20-17.00034,-4.3296%20-2.26232,-1.2576%20-3.98589,-2.8032%20-4.66223,-4.1807%20l%20-0.4024,-0.8196%200,-25.70807%200,-25.7081%200.31843,-0.6465%20c%201.42297,-2.889%205.96432,-5.4935%2012.30378,-7.0562%202.15195,-0.5305%205.2586,-1.0588%207.79304,-1.3252%202.58797,-0.2721%209.44765,-0.2307%2012.02919,0.073%206.86123,0.8061%2012.69967,2.6108%2016.29768,5.0377%201.38756,0.9359%202.81137,2.4334%203.29371,3.4642%20l%200.41358,0.8838%20-0.0354,25.6303%20-0.0354,25.63047%20-0.33195,0.6744%20c%20-0.18257,0.3709%20-0.73406,1.1007%20-1.22553,1.6216%20-2.99181,3.1715%20-9.40919,5.5176%20-17.8267,6.5172%20-1.71567,0.2038%20-9.16916,0.3686%20-10.92937,0.2417%20z%20m%2012.07501,-22.02839%20c%20-0.0252,-0.0657%20-1.00472,-0.93831%20-2.17671,-1.93922%20-1.17199,-1.00091%20-2.18138,-1.86687%20-2.24309,-1.92436%20-0.0617,-0.0575%200.15481,-0.26106%200.48117,-0.45237%200.32635,-0.19131%200.95163,-0.7235%201.3895,-1.18265%201.2805,-1.34272%201.88466,-3.00131%201.88466,-5.17388%200,-2.1388%20-0.65162,-3.8645%20-1.95671,-5.1818%20-1.31533,-1.3278%20-2.82554,-1.8983%20-5.02486,-1.8983%20-3.39007,0%20-5.99368,1.9781%20-6.82468,5.1851%20-0.28586,1.1031%20-0.28432,3.33211%200.003,4.31023%200.74941,2.55136%202.79044,4.40434%205.33062,4.83946%200.8596,0.14724%200.97605,0.21071%201.5621,0.85144%200.34829,0.38078%201.06301,1.14085%201.58827,1.68904%20l%200.95501,0.9967%202.53878,0%20c%201.39633,0%202.51816,-0.0537%202.49296,-0.11939%20z%20m%20-8.70653,-7.10848%20c%20-0.61119,-0.31868%20-0.84225,-0.56599%20-1.19079,-1.27453%20-0.26919,-0.54724%20-0.31522,-0.85851%20-0.31824,-2.15197%20-0.003,-1.3143%200.0388,-1.5983%200.31987,-2.169%200.45985,-0.9339%201.09355,-1.376%202.07384,-1.4469%201.36454,-0.099%202.15217,0.5707%202.56498,2.1801%200.50612,1.97321%20-0.0504,4.07107%20-1.26471,4.76729%20-0.63707,0.36527%20-1.58737,0.40659%20-2.18495,0.095%20z%20m%20-11.25315,3.66269%20c%202.66179,-0.5048%204.1728,-2.0528%204.1728,-4.27495%200,-1.97137%20-0.97548,-3.12004%20-3.6716,-4.32364%20-1.54338,-0.689%20-2.10241,-1.1215%20-2.10241,-1.6268%200,-0.4188%200.53052,-0.8777%201.14813,-0.993%200.60302,-0.1126%202.20237,0.1652%203.14683,0.5467%20l%200.79167,0.3198%200,-1.7524%200,-1.7525%20-0.85923,-0.1906%20c%20-0.53103,-0.1178%20-1.64689,-0.1885%20-2.92137,-0.1849%20-1.80528,0%20-2.15881,0.044%20-2.83818,0.3138%20-1.98445,0.7878%20-2.92613,2.1298%20-2.91107,4.1485%200.0141,1.8898%201.01108,3.06864%203.49227,4.12912%201.46399,0.62572%202.05076,1.10218%202.05076,1.66522%200,1.1965%20-1.99362,1.34375%20-4.10437,0.30315%20-0.57805,-0.28498%20-1.09739,-0.54137%20-1.1541,-0.56976%20-0.0567,-0.0284%20-0.10311,0.79023%20-0.10311,1.81917%200,1.86239%200.002,1.87137%200.33919,1.99974%201.26979,0.48278%204.07626,0.69787%205.52379,0.42335%20z%20m%2030.4308,-1.72766%200,-1.58098%20-2.40584,0%20-2.40583,0%200,-5.43035%200,-5.4303%20-2.13089,0%20-2.13088,0%200,7.0113%200,7.01131%204.53672,0%204.53672,0%200,-1.58098%20z%20m%20-14.84745,-27.70503%20c%204.23447,-0.2937%207.4086,-0.8482%2010.20178,-1.7821%202.78264,-0.9304%204.42643,-2.0562%204.79413,-3.2834%200.14166,-0.4729%200.13146,-0.6523%20-0.0665,-1.1708%20-0.88775,-2.3245%20-5.84694,-4.1104%20-13.42493,-4.8345%20-3.24154,-0.3098%20-9.13671,-0.2094%20-12.22745,0.2081%20-4.71604,0.6372%20-8.54333,1.8208%20-10.2451,3.1683%20-3.44251,2.726%200.19793,5.7242%208.66397,7.1354%203.67084,0.6119%208.42674,0.828%2012.30414,0.559%20z'%20fill='%23E76F00'%20transform='translate(-830.906%20-943.981)'/%3e%3c/g%3e%3c/svg%3e",zb=[{img:"https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",title:"Learn from the Basics of Java",description:"Start with the fundamentals of Java."},{img:"https://hasznaltalma.hu/upload/default/1697487717_1192_ai-jpeg",title:"Master Advanced Techniques",description:"Dive deep into Java's advanced features."},{img:"https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",title:"Boost Your Productivity With Us",description:"Write cleaner, more efficient code with Java."},{img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",title:"Debug with Confidence",description:"Identify, troubleshoot, and fix errors swiftly with precise debugging tools and best practices."},{img:"https://images.unsplash.com/photo-1504639725590-34d0984388bd",title:"Stay Ahead in Tech",description:"Keep your skills relevant, up-to-date, and in line with industry trends."}],gD=()=>{const[e,t]=k.useState(!0),n=()=>{t(!e)},r=()=>{window.scrollBy({top:550,behavior:"smooth"})};function a(){window.scrollTo({top:0,behavior:"smooth"})}return k.useEffect(()=>{},[]),k.useEffect(()=>{localStorage.getItem("completedModules")||localStorage.setItem("completedModules",JSON.stringify({module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1,module16:!1})),localStorage.getItem("completedSpringBoot")||localStorage.setItem("completedModules",JSON.stringify({module17:!1,module18:!1,module19:!1,module20:!1,module21:!1,module22:!1,module23:!1,module24:!1,module25:!1,module26:!1,module27:!1})),localStorage.getItem("completedProjects")||localStorage.setItem("completedProjects",JSON.stringify({project1:!1,project2:!1,project3:!1,project4:!1,project5:!1})),localStorage.getItem("completedAdvancedProjects")||localStorage.setItem("completedProjects",JSON.stringify({project6:!1,project7:!1,project8:!1,project9:!1,project10:!1}))},[]),console.log(localStorage.getItem("completedProjects")),console.log(localStorage.getItem("completedModules")),console.log(localStorage.getItem("completedSpringBoot")),console.log(localStorage.getItem("completedAdvancedProjects")),c.jsx("div",{className:"landing-page",children:c.jsxs("section",{className:"hero",children:[c.jsxs(Le.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8},children:["Start as a Beginner, ",c.jsx("br",{}),"  End as a ",c.jsx("span",{children:"Java Expert"})]}),c.jsx(Le.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:"Master Java through our detailed course, and learn to create efficient, reliable applications with industry-best practices."}),c.jsxs(Le.div,{className:"btn-container",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6,delay:1},children:[c.jsx(F,{to:"/Java/",onClick:a,className:"cta",children:"Get Started"}),c.jsx(F,{to:"/join/",onClick:a,className:"cta-secondary",children:"Join Us"})]}),c.jsx(Le.a,{className:"invite",onClick:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:"Learn more"}),c.jsx(Le.div,{className:"invite-arrow",onClick:r,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:c.jsx(BN,{})}),c.jsxs(Le.div,{className:"welcome",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:1.4},children:[c.jsxs("div",{className:"header",children:[c.jsxs("div",{className:"action-btn-container",onClick:n,children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]}),c.jsx("p",{children:c.jsx(pC,{words:["Hello.java","World.java"],loop:5,cursor:!0,cursorStyle:"_",typeSpeed:70,deleteSpeed:50,delaySpeed:900})})]}),e&&c.jsx("img",{src:sD,alt:"Welcome",className:`welcomeImg ${e?"":"hidden"}`,draggable:"false"})]}),c.jsxs("div",{className:"why-container",children:[c.jsxs("h2",{children:["Why should you learn ",c.jsx("span",{children:"Java"}),"?"]}),c.jsxs("p",{children:["Learning Java improves your development skills by ",c.jsx("strong",{children:"providing a strong object-oriented foundation"}),", which enhances your ability to build robust and scalable applications. Ready to take your programming to the next level? Discover the power of Java today!"]})]}),c.jsxs("div",{className:"showcase",children:[c.jsxs("div",{className:"logo-container",children:[c.jsx("div",{children:c.jsx("img",{src:pD,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:qb,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:gr,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:dD,alt:""})}),c.jsx("div",{children:c.jsx("img",{src:Gb,alt:""})})]}),c.jsxs("h2",{children:["Here is what we can do ",c.jsx("span",{children:"cross-functionally"})]}),c.jsx("p",{children:"With LearnLab, you can master Java and boost your career prospects, paving the way for that well-deserved raise at your job."}),c.jsx("div",{className:"showcase-content",children:c.jsxs("div",{className:"card-container",children:[c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:mD,alt:""}),c.jsx(rs,{}),c.jsx("img",{src:gr,alt:""})]}),c.jsxs("div",{className:"bottom",children:[c.jsxs("div",{children:[c.jsx("p",{children:"Number of new members"}),c.jsx("b",{children:"+8020"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Members who uses Java"}),c.jsx("b",{children:"13,139"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"New member growth"}),c.jsx("b",{children:"+120%"})]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:qb,alt:""}),c.jsx(rs,{}),c.jsx("img",{src:gr,alt:""})]}),c.jsxs("div",{className:"bottom",children:[c.jsxs("div",{children:[c.jsx("p",{children:"New DataBase Registrations"}),c.jsx("b",{children:"+4,567"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Active Java & Sql Users"}),c.jsx("b",{children:"12,345"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Monthly Growth Rate"}),c.jsx("b",{children:"18%"})]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top",children:[c.jsx("img",{src:Gb,alt:""}),c.jsx(rs,{}),c.jsx("img",{src:gr,alt:""})]}),c.jsxs("div",{className:"bottom",children:[c.jsxs("div",{children:[c.jsx("p",{children:"New Contributors"}),c.jsx("b",{children:"3,210"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Projects Using Java"}),c.jsx("b",{children:"120,109"})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Weekly Growth Trend"}),c.jsx("b",{children:"+25%"})]})]})]})]})})]}),c.jsxs("div",{className:"need",children:[c.jsxs("h2",{children:["Everything you need. ",c.jsx("br",{}),c.jsx("span",{children:"Nothing you don't."})]}),c.jsxs("div",{className:"need-content",children:[c.jsx("div",{className:"top",children:zb.slice(0,3).map((i,o)=>c.jsxs("div",{className:"card",children:[c.jsx("img",{src:i.img,alt:i.title}),c.jsxs("div",{className:"text",children:[c.jsx("h4",{children:i.title}),c.jsx("p",{children:i.description})]})]},o))}),c.jsx("div",{className:"bottom",children:zb.slice(3,5).map((i,o)=>c.jsxs("div",{className:"card",children:[c.jsx("img",{src:i.img,alt:i.title}),c.jsxs("div",{className:"text",children:[c.jsx("h4",{children:i.title}),c.jsx("p",{children:i.description})]})]},o))})]})]}),c.jsx("hr",{className:"separator"}),c.jsxs("h2",{children:["See where our ",c.jsx("span",{children:"coding courses"}),"  can take you!"]}),c.jsxs("h2",{children:["All our courses ",c.jsx("span",{children:"are next level..."})]}),c.jsxs("div",{className:"btn-container",children:[c.jsx(F,{to:"/Java/",onClick:a,className:"cta",children:"Get Started"}),c.jsx(F,{to:"/join/",onClick:a,className:"cta-secondary",children:"Join Us"})]}),c.jsx("hr",{className:"separator"})]})})},$={preview:[{type:"header",level:1,text:"Master Java: A Comprehensive Guide for Developers"},{type:"header",level:2,text:"Course Overview"},{type:"point",text:"This course is designed for developers who want to master Java. You will explore the fundamentals of Java, dive into advanced concepts, and learn how to build robust applications using Java. The course will cover how to leverage Java's features in real-world applications, and best practices for Java development."},{type:"header",level:2,text:"Prerequisites"},{type:"point",text:"Basic to intermediate knowledge of programming concepts."},{type:"point",text:"Familiarity with object-oriented programming principles."}],module1:[{type:"margin"},{type:"header",level:2,text:"Module 1: Introduction to Java"},{type:"header",level:3,text:"Lesson 1.1: What is Java?"},{type:"point",text:"Overview of Java: What it is and why it’s useful."},{type:"example",code:`// Java Code
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
  }`}],module5:[{type:"margin"},{type:"header",level:2,text:"Module 5: Basic Input and Output"},{type:"header",level:3,text:"Lesson 5.1: Reading User Input"},{type:"point",text:"Using Scanner for user input."},{type:"example",code:`import java.util.Scanner;

public class InputExample {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = scanner.nextLine();
    System.out.println("Hello, " + name + "!");
  }
}`},{type:"header",level:3,text:"Lesson 5.2: Writing Output"},{type:"point",text:"Using System.out.println for output."},{type:"example",code:`// Output example
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
  }`},{type:"point",text:"Complex processing often involves chaining multiple operations and utilizing both intermediate and terminal operations."},{type:"point",text:"Understanding how to effectively use streams and lambdas can lead to more concise and readable code."}],module10:[{type:"margin"},{type:"header",level:2,text:"Module 10: GUI Development in Java"},{type:"header",level:3,text:"Lesson 10.1: Introduction to Java GUI"},{type:"point",text:"Overview of GUI in Java: Understanding Graphical User Interfaces (GUIs) and their significance in creating user-friendly applications."},{type:"point",text:"Java's GUI frameworks: Swing and JavaFX. Swing is older and provides a lightweight, platform-independent windowing system. JavaFX is newer, offering modern UI controls, 3D graphics, and a more flexible design system."},{type:"point",text:"Why learn GUI development? GUIs allow users to interact with software visually, making applications accessible to a broader audience and enhancing user experience."},{type:"example",code:`// Java Swing Example: Basic Frame
import javax.swing.JFrame;

public class MyFrame {
  public static void main(String[] args) {
    JFrame frame = new JFrame("My First GUI");
    frame.setSize(400, 400);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"Explanation: The code above creates a basic Swing application with a window (JFrame). The window size is set to 400x400 pixels, and the program terminates when the window is closed."},{type:"header",level:3,text:"Lesson 10.2: Components and Layouts"},{type:"point",text:"Introduction to GUI components: Components are the building blocks of any GUI. They include elements like buttons, labels, text fields, checkboxes, and more."},{type:"point",text:"Using JButton, JLabel, and JTextField: These are commonly used components in Swing. JButton represents a clickable button, JLabel is used for displaying text or images, and JTextField allows for user input."},{type:"example",code:`// Java Swing Example: Adding Components
import javax.swing.*;

public class MyFrame {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Component Example");
    JButton button = new JButton("Click Me!");
    JLabel label = new JLabel("Label Example");
    JTextField textField = new JTextField("Enter Text Here");

    frame.setLayout(null); // Disable default layout
    button.setBounds(150, 100, 100, 40);
    label.setBounds(150, 50, 200, 30);
    textField.setBounds(150, 150, 200, 30);

    frame.add(button);
    frame.add(label);
    frame.add(textField);

    frame.setSize(500, 400);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"Explanation: In the code above, we create a window and add three components: a button, a label, and a text field. The setBounds method is used to manually set the position and size of each component."},{type:"point",text:"Introduction to Layout Managers: Layout managers handle the positioning and sizing of components within a container. Java provides several layout managers, such as FlowLayout, BorderLayout, GridLayout, and more."},{type:"point",text:"FlowLayout: Arranges components in a left-to-right flow, like text in a paragraph."},{type:"example",code:`// Java Swing Example: FlowLayout
import javax.swing.*;
import java.awt.*;

public class FlowLayoutExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("FlowLayout Example");
    frame.setLayout(new FlowLayout());

    frame.add(new JButton("Button 1"));
    frame.add(new JButton("Button 2"));
    frame.add(new JButton("Button 3"));

    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"BorderLayout: Divides the container into five regions: North, South, East, West, and Center. Each component is placed in one of these regions."},{type:"example",code:`// Java Swing Example: BorderLayout
import javax.swing.*;
import java.awt.*;

public class BorderLayoutExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("BorderLayout Example");
    frame.setLayout(new BorderLayout());

    frame.add(new JButton("North"), BorderLayout.NORTH);
    frame.add(new JButton("South"), BorderLayout.SOUTH);
    frame.add(new JButton("East"), BorderLayout.EAST);
    frame.add(new JButton("West"), BorderLayout.WEST);
    frame.add(new JButton("Center"), BorderLayout.CENTER);

    frame.setSize(400, 400);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"GridLayout: Arranges components in a grid of cells, where each cell has the same size. It’s useful for creating forms and tables."},{type:"example",code:`// Java Swing Example: GridLayout
import javax.swing.*;
import java.awt.*;

public class GridLayoutExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("GridLayout Example");
    frame.setLayout(new GridLayout(2, 3)); // 2 rows, 3 columns

    frame.add(new JButton("Button 1"));
    frame.add(new JButton("Button 2"));
    frame.add(new JButton("Button 3"));
    frame.add(new JButton("Button 4"));
    frame.add(new JButton("Button 5"));
    frame.add(new JButton("Button 6"));

    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"Explanation: The GridLayout example arranges buttons in a 2x3 grid. Each button occupies one cell in the grid."},{type:"header",level:3,text:"Lesson 10.3: Event Handling in GUI"},{type:"point",text:"Understanding Event-Driven Programming: In GUI applications, actions such as button clicks, mouse movements, or keyboard inputs are events. Event-driven programming involves writing code that responds to these events."},{type:"point",text:"ActionListener: An interface used to handle action events, such as button clicks. The ActionListener interface must be implemented by a class that processes the event."},{type:"example",code:`// Java Swing Example: Handling Button Click with ActionListener
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonClickExample implements ActionListener {
  private JButton button;

  public ButtonClickExample() {
    JFrame frame = new JFrame("Event Handling Example");
    button = new JButton("Click Me!");
    button.addActionListener(this);

    frame.add(button);
    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    button.setText("Clicked!");
  }

  public static void main(String[] args) {
    new ButtonClickExample();
  }
}`},{type:"point",text:"Explanation: The code above changes the button’s label when it is clicked. The ActionListener is implemented by the ButtonClickExample class, and the actionPerformed method is overridden to define the action that occurs when the button is clicked."},{type:"point",text:"Using Anonymous Inner Classes for Event Handling: Anonymous inner classes are a concise way to implement listeners directly within the component that generates the event."},{type:"example",code:`// Java Swing Example: Anonymous Inner Class for Event Handling
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AnonymousClassExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Anonymous Inner Class Example");
    JButton button = new JButton("Click Me!");

    button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent e) {
        button.setText("Clicked!");
      }
    });

    frame.add(button);
    frame.setSize(300, 200);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"Explanation: Here, an ActionListener is implemented as an anonymous inner class. This method is more concise, especially when the listener is only needed in one place."},{type:"header",level:3,text:"Lesson 10.4: Working with Menus and Toolbars"},{type:"point",text:"Adding Menus to a GUI: Menus provide a structured way to present a list of commands or options to the user. In Swing, you can create menus using the JMenu, JMenuItem, and JMenuBar classes."},{type:"example",code:`// Java Swing Example: Creating a Simple Menu
import javax.swing.*;

public class MenuExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Menu Example");
    JMenuBar menuBar = new JMenuBar();

    JMenu fileMenu = new JMenu("File");
    JMenuItem openItem = new JMenuItem("Open");
    JMenuItem saveItem = new JMenuItem("Save");
    JMenuItem exitItem = new JMenuItem("Exit");

    fileMenu.add(openItem);
    fileMenu.add(saveItem);
    fileMenu.addSeparator(); // Adds a separator line
    fileMenu.add(exitItem);

    menuBar.add(fileMenu);
    frame.setJMenuBar(menuBar);

    frame.setSize(400, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"Explanation: The code above demonstrates how to create a basic menu with 'File' as the main menu and 'Open', 'Save', and 'Exit' as menu items. The separator adds a dividing line between the items."},{type:"point",text:"Toolbars: Toolbars offer quick access to frequently used actions. In Swing, you can create a toolbar using the JToolBar class, which can contain buttons, separators, and other components."},{type:"example",code:`// Java Swing Example: Creating a Toolbar
import javax.swing.*;

public class ToolbarExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Toolbar Example");
    JToolBar toolbar = new JToolBar();

    JButton newButton = new JButton("New");
    JButton openButton = new JButton("Open");
    JButton saveButton = new JButton("Save");

    toolbar.add(newButton);
    toolbar.add(openButton);
    toolbar.add(saveButton);

    frame.add(toolbar, "North");

    frame.setSize(400, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
  }
}`},{type:"point",text:"Explanation: The code above creates a toolbar with three buttons: 'New', 'Open', and 'Save'. The toolbar is added to the top (North) of the window using a BorderLayout."},{type:"header",level:3,text:"Lesson 5.5: Dialogs and Pop-up Windows"},{type:"point",text:"Understanding Dialogs: Dialogs are small windows that prompt the user for input or provide information. Swing provides various dialog classes, such as JOptionPane for standard dialogs."},{type:"point",text:"Using JOptionPane for Message Dialogs: JOptionPane can be used to display information, warnings, or error messages to the user."},{type:"example",code:`// Java Swing Example: JOptionPane for Information Dialog
import javax.swing.*;

public class MessageDialogExample {
  public static void main(String[] args) {
    JFrame frame = new JFrame();
    JOptionPane.showMessageDialog(frame, "This is an information dialog.", "Information", JOptionPane.INFORMATION_MESSAGE);
  }
}`},{type:"point",text:"Explanation: The code above creates a simple information dialog that displays a message to the user. The message type is set to INFORMATION_MESSAGE."},{type:"point",text:"Input Dialogs: Input dialogs prompt the user to enter a value, which can then be used within the application."},{type:"example",code:`// Java Swing Example: Input Dialog
import javax.swing.*;

public class InputDialogExample {
  public static void main(String[] args) {
    String name = JOptionPane.showInputDialog("Enter your name:");
    System.out.println("Name entered: " + name);
  }
}`},{type:"point",text:"Explanation: The code above creates an input dialog that prompts the user to enter their name. The entered value is then printed to the console."},{type:"point",text:"Confirm Dialogs: Confirm dialogs ask the user to make a decision, typically presented as Yes/No or OK/Cancel options."},{type:"example",code:`// Java Swing Example: Confirm Dialog
import javax.swing.*;

public class ConfirmDialogExample {
  public static void main(String[] args) {
    int response = JOptionPane.showConfirmDialog(null, "Do you want to proceed?", "Confirmation", JOptionPane.YES_NO_OPTION);

    if (response == JOptionPane.YES_OPTION) {
      System.out.println("User chose to proceed.");
    } else {
      System.out.println("User chose not to proceed.");
    }
  }
}`},{type:"point",text:"Explanation: The code above shows a confirmation dialog with 'Yes' and 'No' options. The user's response is captured and handled accordingly."},{type:"header",level:3,text:"Lesson 10.6: Advanced GUI Design with JavaFX"},{type:"point",text:"Introduction to JavaFX: JavaFX is a modern UI toolkit for Java that provides rich features for developing visually appealing desktop applications. It supports advanced graphics, animations, and media playback."},{type:"point",text:"Setting up JavaFX: Unlike Swing, JavaFX is not included in the standard JDK after Java 8. You'll need to download and configure it separately or use a build tool like Maven or Gradle."},{type:"example",code:`// JavaFX Example: Basic Application
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class JavaFXExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Click Me!");
    btn.setOnAction(e -> System.out.println("Button Clicked"));

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`},{type:"point",text:"Explanation: The code above demonstrates a basic JavaFX application. It creates a window with a button. When the button is clicked, a message is printed to the console. The StackPane layout is used to center the button within the window."},{type:"point",text:"Working with Scenes and Nodes: In JavaFX, every UI element is a node, and a scene represents a container for all the nodes in a window. Nodes can include controls, shapes, images, and more."},{type:"example",code:`// JavaFX Example: Working with Multiple Nodes
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class MultiNodeExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn1 = new Button("Button 1");
    Button btn2 = new Button("Button 2");

    VBox vbox = new VBox(10); // VBox with spacing of 10 pixels
    vbox.getChildren().addAll(btn1, btn2);

    Scene scene = new Scene(vbox, 300, 250);
    primaryStage.setTitle("JavaFX Multi-Node Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`},{type:"point",text:"Explanation: This example creates a VBox layout, which arranges two buttons vertically with a 10-pixel space between them. The scene is then set to the primary stage and displayed."},{type:"point",text:"JavaFX Controls: JavaFX offers a wide range of controls, such as TextField, Label, Checkbox, RadioButton, and more, which can be used to build complex UIs."},{type:"header",level:3,text:"Lesson 10.7: Styling and Theming GUIs with CSS"},{type:"point",text:"Introduction to CSS in JavaFX: JavaFX allows you to style your GUI components using CSS (Cascading Style Sheets). This enables you to separate the design from the application logic, making it easier to maintain and update the look and feel of your application."},{type:"point",text:"Applying CSS Styles: You can apply CSS styles directly in your JavaFX application or link to an external CSS file. Styles can be applied to individual components or globally across the entire application."},{type:"example",code:`/* Example of an external CSS file for JavaFX */
.button {
  -fx-background-color: #2a9d8f;
  -fx-text-fill: white;
  -fx-font-size: 14px;
  -fx-padding: 10px;
}

/* JavaFX Example: Applying CSS Styles */
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class CssExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Styled Button");
    btn.getStyleClass().add("button"); // Applying CSS class

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    scene.getStylesheets().add("styles.css"); // Linking CSS file
    primaryStage.setTitle("JavaFX CSS Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`},{type:"point",text:'Explanation: The example shows how to style a button in JavaFX using an external CSS file. The CSS class `.button` is defined in the CSS file, and the style is applied to the button in the JavaFX application using `getStyleClass().add("button")`.'},{type:"point",text:"Theming Applications: JavaFX allows you to apply different themes by simply switching the CSS files. This provides a flexible way to change the entire appearance of an application with minimal code changes."},{type:"header",level:3,text:"Lesson 10.8: Animations and Effects in JavaFX"},{type:"point",text:"Introduction to JavaFX Animations: JavaFX provides powerful animation features that allow you to create dynamic, visually engaging UIs. Animations can be used to move objects, fade elements in and out, rotate components, and more."},{type:"point",text:"Using the Timeline Class: The Timeline class is used to define a sequence of keyframes that can animate the properties of nodes over time."},{type:"example",code:`// JavaFX Example: Simple Animation using Timeline
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.util.Duration;

public class AnimationExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Animate Me");

    Timeline timeline = new Timeline(
        new KeyFrame(Duration.ZERO, e -> btn.setScaleX(1)),
        new KeyFrame(new Duration(500), e -> btn.setScaleX(1.5)),
        new KeyFrame(new Duration(1000), e -> btn.setScaleX(1))
    );

    timeline.setCycleCount(Timeline.INDEFINITE);
    timeline.play();

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX Animation Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`},{type:"point",text:"Explanation: In this example, a simple animation is applied to a button, causing it to scale up and down continuously. The Timeline class is used to define the keyframes for the animation, and `setCycleCount(Timeline.INDEFINITE)` makes the animation repeat indefinitely."},{type:"point",text:"Working with Transition Classes: JavaFX provides several transition classes, such as FadeTransition, TranslateTransition, RotateTransition, and ScaleTransition, that make it easier to implement common animations."},{type:"example",code:`// JavaFX Example: RotateTransition
import javafx.animation.RotateTransition;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import javafx.util.Duration;

public class RotateTransitionExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Rotate Me");

    RotateTransition rotateTransition = new RotateTransition(Duration.millis(2000), btn);
    rotateTransition.setByAngle(360);
    rotateTransition.setCycleCount(RotateTransition.INDEFINITE);
    rotateTransition.setAutoReverse(true);

    btn.setOnAction(e -> rotateTransition.play());

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX Rotate Transition Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`},{type:"point",text:"Explanation: This example uses the RotateTransition class to rotate a button 360 degrees when it is clicked. The rotation repeats indefinitely and reverses after each cycle."},{type:"point",text:"Applying Effects: JavaFX also supports visual effects, such as shadows, lighting, and reflections, which can be applied to nodes to enhance the visual appeal of your application."},{type:"example",code:`// JavaFX Example: DropShadow Effect
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.effect.DropShadow;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class DropShadowExample extends Application {
  @Override
  public void start(Stage primaryStage) {
    Button btn = new Button("Button with Shadow");
    btn.setEffect(new DropShadow());

    StackPane root = new StackPane();
    root.getChildren().add(btn);

    Scene scene = new Scene(root, 300, 250);
    primaryStage.setTitle("JavaFX DropShadow Example");
    primaryStage.setScene(scene);
    primaryStage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}`},{type:"point",text:"Explanation: In this example, a DropShadow effect is applied to a button, giving it a shadowed appearance. The DropShadow effect is just one of many effects available in JavaFX."},{type:"header",level:3,text:"Lesson 10.9: Best Practices in GUI Development"},{type:"point",text:"Consistency: Ensure that your GUI is consistent across different parts of the application. This includes using similar colors, fonts, and layouts to provide a cohesive user experience."},{type:"point",text:"Usability: Focus on creating an intuitive and easy-to-use interface. Avoid cluttering the UI with too many elements and ensure that the most important features are easily accessible."},{type:"point",text:"Responsiveness: Design your GUI to be responsive, meaning it should adapt to different screen sizes and resolutions. In JavaFX, this can be achieved by using flexible layouts and avoiding fixed sizes where possible."},{type:"point",text:"Accessibility: Consider accessibility in your design by providing keyboard shortcuts, screen reader support, and ensuring that color schemes are usable by people with visual impairments."},{type:"point",text:"Performance: Optimize your GUI to run smoothly, especially when dealing with complex animations or large datasets. Avoid unnecessary redraws and optimize event handling to reduce lag."},{type:"header",level:3,text:"Conclusion and Further Resources"},{type:"point",text:"This module has provided an in-depth look at GUI development in Java, covering both Swing and JavaFX. With these skills, you're now equipped to create user-friendly, visually appealing desktop applications."},{type:"point",text:"Further Learning: Explore the official [JavaFX documentation](https://openjfx.io/) and [Swing tutorials](https://docs.oracle.com/javase/tutorial/uiswing/) to deepen your understanding and learn about more advanced features."},{type:"point",text:"Practice: Build small projects, such as a calculator, a simple game, or a text editor, to apply what you've learned and gain hands-on experience."},{type:"margin"}],module11:[{type:"margin"},{type:"header",level:2,text:"Module 11: Multithreading and Concurrency"},{type:"header",level:3,text:"Lesson 11.1: Basics of Multithreading"},{type:"point",text:"Creating and managing threads."},{type:"point",text:"Multithreading allows multiple threads to run concurrently, making efficient use of CPU resources and improving performance."},{type:"point",text:"Threads in Java can be created by either implementing the `Runnable` interface or extending the `Thread` class."},{type:"example",code:`// Multithreading example using Runnable
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
}`},{type:"point",text:"In the example, two threads are created and started. They execute the same task concurrently, demonstrating basic multithreading."},{type:"header",level:3,text:"Lesson 11.2: Synchronization and Concurrency Utilities"},{type:"point",text:"Using synchronization to prevent thread interference."},{type:"point",text:"Thread interference occurs when multiple threads access shared data simultaneously, potentially leading to inconsistent or incorrect results."},{type:"point",text:"Synchronization is used to control the access of multiple threads to shared resources, ensuring that only one thread can access the resource at a time."},{type:"example",code:`// Synchronization example
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
}`},{type:"point",text:"In the example, the `increment` method is synchronized to prevent thread interference. Each thread waits its turn to execute this method, ensuring data consistency."},{type:"header",level:3,text:"Lesson 11.3: Advanced Synchronization Techniques"},{type:"point",text:"Advanced synchronization techniques include using `ReentrantLock`, `ReadWriteLock`, and concurrent collections."},{type:"point",text:"The `ReentrantLock` class provides more flexibility than synchronized blocks, including try-lock and timed lock features."},{type:"example",code:`// ReentrantLock example
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
}`},{type:"point",text:"In this example, `ReentrantLock` is used to provide thread-safe access to the shared `count` variable. The `lock` and `unlock` methods ensure that only one thread can update the count at a time."},{type:"header",level:3,text:"Lesson 11.4: Concurrency Utilities"},{type:"point",text:"Java provides several utilities in the `java.util.concurrent` package to simplify concurrent programming."},{type:"point",text:"Key utilities include `ExecutorService` for managing thread pools, `Callable` for tasks that return results, and `Future` for handling asynchronous computation results."},{type:"example",code:`// ExecutorService example
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
}`},{type:"point",text:"The `ExecutorService` manages a pool of threads and executes tasks asynchronously. The `Future` interface is used to retrieve results from these tasks."},{type:"header",level:3,text:"Lesson 11.5: Thread Safety and Avoiding Deadlocks"},{type:"point",text:"Ensuring thread safety involves careful management of shared resources and synchronization to prevent race conditions and deadlocks."},{type:"point",text:"A deadlock occurs when two or more threads are waiting for each other to release resources, resulting in a standstill."},{type:"point",text:"Avoiding deadlocks involves strategies such as acquiring locks in a consistent order, using timeout mechanisms, and avoiding nested locks."},{type:"example",code:`// Deadlock example
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
}`},{type:"point",text:"In the example, `thread1` and `thread2` each hold one lock while waiting for the other, resulting in a deadlock situation."}],module12:[{type:"margin"},{type:"header",level:2,text:"Module 12: Networking in Java"},{type:"header",level:3,text:"Lesson 12.1: Basics of Java Networking"},{type:"point",text:"Understanding sockets and basic networking concepts."},{type:"point",text:"Networking in Java involves using sockets to establish communication between a client and a server over a network."},{type:"point",text:"A `ServerSocket` is used by the server to listen for incoming connections, while a `Socket` is used by the client to connect to the server."},{type:"example",code:`// Simple client-server example

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
  }`},{type:"point",text:"In this example, the server listens for connections on port 12345 and responds to messages from the client. The client connects to the server, sends a message, and prints the server's response."},{type:"header",level:3,text:"Lesson 12.2: HTTP Networking"},{type:"point",text:"Using HTTP requests with `HttpURLConnection` for communication over the web."},{type:"point",text:"The `HttpURLConnection` class is used to make HTTP requests and handle responses from web servers."},{type:"point",text:"You can use methods like `setRequestMethod`, `getInputStream`, and `disconnect` to interact with the server and handle the response."},{type:"example",code:`// HTTP request example
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
  }`},{type:"point",text:"This example demonstrates how to perform a GET request to a web API, read the response, and output it. The `HttpURLConnection` is configured to make the request and handle the response appropriately."},{type:"header",level:3,text:"Lesson 12.3: Advanced Networking Techniques"},{type:"point",text:"Advanced networking techniques include handling different types of HTTP requests, managing cookies, and dealing with various response codes."},{type:"point",text:"Understanding these advanced techniques allows for more robust and interactive network communication, such as handling POST requests and managing authentication."},{type:"example",code:`// Advanced HTTP request example: POST request with JSON
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
  }`},{type:"point",text:"In this example, a POST request is made to send JSON data to the server. The request headers are set for content type and accepted response format. The response from the server is read and printed."}],module13:[{type:"margin"},{type:"header",level:2,text:"Module 13: Java Database Connectivity (JDBC)"},{type:"header",level:3,text:"Lesson 13.1: Introduction to JDBC"},{type:"point",text:"Connecting to a database and executing queries."},{type:"point",text:"JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases using SQL."},{type:"point",text:"The `DriverManager` class is used to establish a connection to the database. You need to specify the database URL, username, and password."},{type:"point",text:"A `Statement` object is used to execute SQL queries. The `ResultSet` object holds the results returned by the query."},{type:"example",code:`// JDBC example
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
  }`},{type:"point",text:"This example demonstrates connecting to a MySQL database, executing a query to retrieve data from a table, and processing the results."},{type:"header",level:3,text:"Lesson 13.2: Prepared Statements and Transactions"},{type:"point",text:"Using prepared statements to prevent SQL injection and manage transactions for maintaining data integrity."},{type:"point",text:"Prepared statements are precompiled SQL statements that improve performance and security by avoiding SQL injection attacks."},{type:"point",text:"Transactions are used to ensure that a series of database operations are completed successfully or not at all, maintaining the integrity of the database."},{type:"example",code:`// Prepared Statement and Transaction example
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
  }`},{type:"point",text:"In this example, a transaction is started by setting `autoCommit` to `false`. After executing the prepared statement, the transaction is committed if successful. If an error occurs, the transaction is rolled back to maintain data integrity."},{type:"header",level:3,text:"Lesson 13.3: Handling Database Metadata and Batch Processing"},{type:"point",text:"Retrieving database metadata and performing batch processing for efficiency."},{type:"point",text:"Database metadata can provide information about database structure, such as tables, columns, and data types, using the `DatabaseMetaData` class."},{type:"point",text:"Batch processing allows multiple SQL statements to be executed as a batch, improving performance by reducing the number of database round-trips."},{type:"example",code:`// Database Metadata and Batch Processing example
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
  }`},{type:"point",text:"This example shows how to retrieve metadata about the database and perform batch processing. Metadata provides information about the database system, while batch processing groups multiple SQL statements to be executed together for efficiency."},{type:"header",level:3,text:"Lesson 13.4: Error Handling and Connection Management"},{type:"point",text:"Handling SQL exceptions and managing database connections effectively."},{type:"point",text:"Handling SQL exceptions is crucial for debugging and ensuring that your application can recover gracefully from database errors."},{type:"point",text:"Proper connection management involves closing connections, statements, and result sets to avoid resource leaks and ensure optimal performance."},{type:"example",code:`// Error Handling and Connection Management example
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
  }`},{type:"point",text:"This example illustrates proper error handling for SQL operations and database connections. It ensures that exceptions are caught and logged, and resources are closed properly."}],module14:[{type:"margin"},{type:"header",level:2,text:"Module 14: Java Reflection and Annotations"},{type:"header",level:3,text:"Lesson 14.1: Understanding Reflection"},{type:"point",text:"Using reflection to inspect and manipulate classes at runtime."},{type:"point",text:"Reflection in Java allows you to analyze and interact with classes, methods, fields, and other elements of the Java language at runtime, providing flexibility and introspection capabilities."},{type:"point",text:"The `Class` class is the entry point for reflection. You can obtain a `Class` object representing a class or interface using methods like `Class.forName()`, `.getClass()`, or `.class`."},{type:"point",text:"You can inspect class details (e.g., methods, fields, constructors) using methods of the `Class` class, such as `getDeclaredMethods()`, `getDeclaredFields()`, and `getConstructors()`. You can also manipulate fields and invoke methods dynamically."},{type:"example",code:`// Reflection example
  import java.lang.reflect.Method;

  public class ReflectionExample {
    public static void main(String[] args) throws Exception {
      Class<?> clazz = Class.forName("java.lang.String");
      Method[] methods = clazz.getDeclaredMethods();

      for (Method method : methods) {
        System.out.println("Method: " + method.getName());
      }
    }
  }`},{type:"point",text:"In this example, we use reflection to inspect the `java.lang.String` class. We retrieve and print the names of all declared methods in the `String` class."},{type:"header",level:3,text:"Lesson 14.2: Annotations in Java"},{type:"point",text:"Creating and using custom annotations for metadata and runtime processing."},{type:"point",text:"Annotations are a form of metadata that provide additional information about code elements (e.g., classes, methods, fields). They do not affect program semantics but can be used by the compiler or runtime environment for various purposes."},{type:"point",text:"Custom annotations are defined using the `@interface` keyword. Annotations can include elements (methods) that can be used to provide values."},{type:"point",text:"Annotations can be retained at runtime or compile-time. The `@Retention` annotation specifies how long annotations are retained. Use `RetentionPolicy.RUNTIME` for runtime processing."},{type:"example",code:`// Custom annotation example
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
  }`},{type:"point",text:"In this example, we define a custom annotation `@MyCustomAnnotation` with a single element `value`. We apply this annotation to a method and then retrieve and print the annotation value using reflection."},{type:"header",level:3,text:"Lesson 14.3: Practical Uses of Reflection and Annotations"},{type:"point",text:"Exploring practical applications of reflection and annotations in Java."},{type:"point",text:"Reflection is often used in frameworks and libraries to provide features such as dependency injection, serialization, and object mapping. It allows these tools to interact with objects dynamically without needing compile-time knowledge."},{type:"point",text:"Annotations are commonly used in Java frameworks such as Spring and Hibernate to define configuration, behavior, and mappings in a declarative manner. For example, `@Autowired` in Spring and `@Entity` in Hibernate."},{type:"example",code:`// Example of using reflection for a simple dependency injection framework
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
  }`},{type:"point",text:"In this example, we demonstrate a simple dependency injection mechanism using reflection. We create an instance of `MyService` using reflection to call its constructor. This is a simplified version of what frameworks like Spring do under the hood."}],module15:[{type:"margin"},{type:"header",level:2,text:"Module 15: Building Java Applications"},{type:"header",level:3,text:"Lesson 15.1: Building a Simple Java Application"},{type:"point",text:"Setting up a project structure."},{type:"point",text:"A well-organized project structure improves maintainability and scalability. A standard Maven project structure includes separate directories for main source code and test code."},{type:"point",text:"Here is a basic Maven project structure:"},{type:"example",code:`// Basic project structure
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
        - pom.xml is the Maven build configuration file that manages project dependencies and build lifecycle.`},{type:"header",level:3,text:"Lesson 15.2: Implementing Core Features and Functionalities"},{type:"point",text:"Implementing core features involves writing the main application logic and ensuring that it meets the requirements. It’s important to follow good coding practices and maintain code quality."},{type:"point",text:"In the example below, we create a basic Java application with a greeting feature and a corresponding JUnit test case."},{type:"example",code:`// Core functionality - App.java
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
  `},{type:"point",text:"The `App` class contains a `getGreeting` method that returns a greeting string. The `AppTest` class uses JUnit to test that the `getGreeting` method returns the expected string."},{type:"header",level:3,text:"Lesson 15.3: Building, Deploying, and Running the Application"},{type:"point",text:"After implementing the core features, you need to build, deploy, and run the application. Maven is commonly used for building and managing Java projects."},{type:"point",text:"Build the application using Maven. This will compile the code, run tests, and package the application into a JAR file."},{type:"example",code:`// Build and run commands
  // Run these commands from the root directory of your project where the pom.xml file is located.

  mvn clean package   // Cleans previous builds and packages the application

  java -jar target/app.jar  // Runs the packaged JAR file
  `},{type:"point",text:"The `mvn clean package` command cleans any previously compiled files and then packages the application into a JAR file located in the `target` directory. The `java -jar` command runs the JAR file."},{type:"header",level:3,text:"Lesson 15.4: Continuous Integration and Deployment"},{type:"point",text:"Integrating Continuous Integration (CI) and Continuous Deployment (CD) practices into your workflow can streamline development, testing, and deployment processes."},{type:"point",text:"Tools like Jenkins, Travis CI, and GitHub Actions can automate the build, test, and deployment pipeline. For instance, a CI/CD pipeline can automatically build and deploy the application whenever changes are pushed to the repository."},{type:"example",code:`// Example of a simple GitHub Actions workflow file (.github/workflows/ci.yml)
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
  `},{type:"point",text:"This GitHub Actions workflow sets up a JDK environment, checks out the code, and builds the project using Maven. You can extend this workflow to include deployment steps as needed."}],module16:[{type:"margin"},{type:"header",level:2,text:"Module 16: Java Development Tools"},{type:"header",level:3,text:"Lesson 16.1: Using IDEs for Java Development"},{type:"point",text:"Setting up and using popular IDEs."},{type:"point",text:"Integrated Development Environments (IDEs) streamline Java development by providing tools for coding, debugging, and project management."},{type:"point",text:"Popular IDEs include IntelliJ IDEA and Eclipse. Here’s how to set up a Java project in these IDEs:"},{type:"example",code:`// IntelliJ IDEA setup example
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
  `},{type:"header",level:3,text:"Lesson 16.2: Build Tools"},{type:"point",text:"Introduction to Maven and Gradle."},{type:"point",text:"Build tools automate the build process, manage dependencies, and facilitate project management. Maven and Gradle are two popular build tools in the Java ecosystem."},{type:"point",text:"Here's a basic overview of how to use Maven and Gradle:"},{type:"example",code:`// Maven example
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
  `},{type:"point",text:"Maven and Gradle handle dependencies and build configurations differently:"},{type:"point",text:"- Maven uses XML for its configuration and has a lifecycle model with predefined phases."},{type:"point",text:"- Gradle uses a Groovy or Kotlin DSL for configuration and provides more flexibility with its build scripts."},{type:"header",level:3,text:"Lesson 16.3: Version Control Systems"},{type:"point",text:"Version control systems (VCS) like Git help manage code changes and collaborate with other developers."},{type:"point",text:"Git is the most widely used VCS, and platforms like GitHub, GitLab, and Bitbucket facilitate remote repository hosting and collaboration."},{type:"example",code:`// Basic Git commands
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
`},{type:"point",text:"Git commands are essential for version control:"},{type:"point",text:"- ' git init ' : Initializes a new Git repository."},{type:"point",text:"- ' git add . ' : Stages all changes for the next commit."},{type:"point",text:`- ' git commit -m "message" ' : Commits changes with a message.`},{type:"point",text:"- ' git branch branch-name ' : Creates a new branch."},{type:"point",text:"- ' git checkout branch-name ' : Switches to the specified branch."},{type:"point",text:"- ' git push origin branch-name ' : Pushes commits to the remote repository."}],module17:[{type:"margin"},{type:"header",level:2,text:"Module 17: Introduction to Spring Boot"},{type:"header",level:3,text:"Lesson 17.1: What is Spring Boot?"},{type:"point",text:"Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring applications quickly and easily."},{type:"point",text:"Simplifies dependency management and configuration."},{type:"point",text:"Uses embedded servers such as Tomcat or Jetty to run applications without requiring external servers."},{type:"example",code:`// Hello World with Spring Boot
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class HelloWorldApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }
}

@RestController
class HelloWorldController {
    @GetMapping("/")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}`},{type:"header",level:3,text:"Lesson 17.2: Features of Spring Boot"},{type:"point",text:"Provides a wide range of features like auto-configuration, embedded servers, and production-ready tools."},{type:"point",text:"Supports microservices architecture."},{type:"example",code:`// Enabling Auto-Configuration
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// Auto-configures components such as:
// - DataSource for databases
// - Message queues like RabbitMQ
// - Embedded servers like Tomcat`},{type:"point",text:"Production-ready features like health checks, metrics, and monitoring."},{type:"example",code:`// Enabling Actuator for Monitoring
import org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MonitoringApplication {
    public static void main(String[] args) {
        SpringApplication.run(MonitoringApplication.class, args);
    }
}

// Use actuator endpoints like:
// - /actuator/health
// - /actuator/metrics`},{type:"header",level:3,text:"Lesson 17.3: Setting Up Spring Boot"},{type:"point",text:"Install Java Development Kit (JDK) and Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse."},{type:"point",text:"Use Spring Initializr to create a Spring Boot project with required dependencies."},{type:"example",code:`// Steps to create a Spring Boot project using Spring Initializr:
// 1. Visit https://start.spring.io/
// 2. Choose "Maven Project" or "Gradle Project".
// 3. Select Java as the language.
// 4. Add dependencies (e.g., Spring Web, Spring Data JPA).
// 5. Generate the project and import it into your IDE.`},{type:"point",text:"Run the application using the embedded server with `SpringApplication.run()`."},{type:"example",code:`// Running a Spring Boot Application
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RunApplication {
    public static void main(String[] args) {
        SpringApplication.run(RunApplication.class, args);
    }
}

// Once the application starts, access it at:
// http://localhost:8080`},{type:"header",level:3,text:"Lesson 17.4: Understanding Dependencies in Spring Boot"},{type:"point",text:"Dependencies in Spring Boot are managed through Maven or Gradle build tools."},{type:"example",code:`// Maven Dependencies for Spring Boot
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

// Gradle Dependencies for Spring Boot
implementation 'org.springframework.boot:spring-boot-starter-web'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'`},{type:"point",text:"Spring Boot Starter dependencies simplify configuration and include all necessary libraries."},{type:"example",code:`// Spring Boot Starter Web includes:
// - Spring MVC
// - Jackson JSON processing
// - Embedded Tomcat

// Just include one dependency:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`}],module18:[{type:"margin"},{type:"header",level:2,text:"Module 18: Setting Up a Spring Boot Project and Understanding Annotations & Configuration"},{type:"header",level:3,text:"Lesson 18.1: Introduction to Spring Boot"},{type:"point",text:"Spring Boot simplifies the development of Java applications by providing default configurations and minimizing boilerplate code."},{type:"point",text:"It integrates with the Spring Framework, offering embedded servers, auto-configuration, and a production-ready environment."},{type:"header",level:3,text:"Lesson 18.2: Setting Up a Spring Boot Project"},{type:"point",text:"You can create a Spring Boot project using Spring Initializr or manually through Maven or Gradle."},{type:"example",code:`// Example: Using Spring Initializr
// 1. Go to https://start.spring.io/
// 2. Choose your project settings:
//    - Project: Maven
//    - Language: Java
//    - Spring Boot Version: 3.x.x (latest stable)
//    - Dependencies: Spring Web, Spring Data JPA, H2 Database
// 3. Download the generated project.
// 4. Open it in your favorite IDE (e.g., IntelliJ IDEA, Eclipse).
`},{type:"point",text:"To run the project, use the command `mvn spring-boot:run` or the IDE's built-in tools."},{type:"example",code:`// Running a Spring Boot application
// Navigate to the project directory and execute the following:
mvn spring-boot:run

// Alternatively, run the application using the main method in the generated Application class:
public static void main(String[] args) {
  SpringApplication.run(MyApplication.class, args);
}`},{type:"point",text:"Spring Boot projects are structured with default folders like `src/main/java`, `src/main/resources`, and `src/test` for a clear separation of code and resources."},{type:"header",level:3,text:"Lesson 18.3: Spring Boot Annotations and Configuration"},{type:"point",text:"Annotations in Spring Boot simplify the configuration process by reducing XML-based configuration."},{type:"point",text:"@SpringBootApplication is a combination of three annotations: @Configuration, @EnableAutoConfiguration, and @ComponentScan."},{type:"example",code:`// Example: @SpringBootApplication
@SpringBootApplication
public class MyApplication {
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}`},{type:"point",text:"Other commonly used annotations include @Component, @Service, @Repository, and @Controller."},{type:"example",code:`// Example: Using @Component
@Component
public class MyComponent {
  public String sayHello() {
    return "Hello from MyComponent!";
  }
}

// Using @Controller for handling HTTP requests
@Controller
public class MyController {
  @RequestMapping("/hello")
  @ResponseBody
  public String hello() {
    return "Hello, World!";
  }
}`},{type:"point",text:"Spring Boot uses application.properties or application.yml files for configuring application settings, such as server port and database connections."},{type:"example",code:`# Example: application.properties
server.port=8081
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password`},{type:"point",text:"Profiles can be used to define environment-specific configurations. Use @Profile annotation to activate configurations for specific environments (e.g., dev, prod)."},{type:"example",code:`// Example: Using @Profile
@Configuration
@Profile("dev")
public class DevConfig {
  @Bean
  public String devBean() {
    return "Development Bean";
  }
}

@Configuration
@Profile("prod")
public class ProdConfig {
  @Bean
  public String prodBean() {
    return "Production Bean";
  }
}`},{type:"header",level:3,text:"Lesson 18.4: Auto-Configuration"},{type:"point",text:"Spring Boot's @EnableAutoConfiguration enables automatic configuration based on the project's dependencies."},{type:"example",code:`// Example: Auto-Configuration
@SpringBootApplication
public class MyApplication {
  // Spring Boot will auto-configure a default DataSource bean
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}`},{type:"point",text:"You can exclude unwanted auto-configurations using exclude or excludeName attributes."},{type:"example",code:`// Example: Excluding auto-configuration
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class MyApplication {
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}`},{type:"header",level:3,text:"Lesson 18.5: Dependency Injection in Spring Boot"},{type:"point",text:"Dependency Injection (DI) is a core feature of the Spring Framework that simplifies object creation and dependency management."},{type:"point",text:"Spring Boot uses annotations like @Autowired and @Qualifier to inject dependencies into beans."},{type:"example",code:`// Example: @Autowired for Dependency Injection
  @Component
  public class GreetingService {
    public String getGreeting() {
      return "Hello, Dependency Injection!";
    }
  }

  @RestController
  public class GreetingController {
    private final GreetingService greetingService;

    @Autowired
    public GreetingController(GreetingService greetingService) {
      this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    public String greet() {
      return greetingService.getGreeting();
    }
  }`},{type:"point",text:"Use @Qualifier to specify which bean to inject when multiple beans of the same type exist."},{type:"example",code:`// Example: Using @Qualifier
  @Component("morningGreeting")
  public class MorningGreetingService implements GreetingService {
    public String getGreeting() {
      return "Good morning!";
    }
  }

  @Component("eveningGreeting")
  public class EveningGreetingService implements GreetingService {
    public String getGreeting() {
      return "Good evening!";
    }
  }

  @RestController
  public class GreetingController {
    private final GreetingService greetingService;

    @Autowired
    public GreetingController(@Qualifier("morningGreeting") GreetingService greetingService) {
      this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    public String greet() {
      return greetingService.getGreeting();
    }
  }`},{type:"header",level:3,text:"Lesson 18.6: Monitoring and Actuators"},{type:"point",text:"Spring Boot Actuator provides production-ready features to monitor and manage your application."},{type:"point",text:"Add the `spring-boot-starter-actuator` dependency to enable Actuator endpoints."},{type:"example",code:`// Example: Adding Actuator to your project
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
  </dependency>`},{type:"point",text:"By default, Actuator enables several endpoints such as /actuator/health, /actuator/metrics, and /actuator/info."},{type:"example",code:`# Example: application.properties for Actuator
  management.endpoints.web.exposure.include=health,info,metrics

  # Customizing the /info endpoint
  info.app.name=My Spring Boot App
  info.app.version=1.0.0
  info.app.description=An example of using Spring Boot Actuator`},{type:"point",text:"Use tools like Prometheus and Grafana for advanced monitoring and visualization by integrating with Actuator's metrics endpoints."},{type:"example",code:`// Example: Accessing Actuator Endpoints
  // After running the application, visit the following URLs:
  // - Health: http://localhost:8080/actuator/health
  // - Metrics: http://localhost:8080/actuator/metrics
  // - Info: http://localhost:8080/actuator/info`}],module19:[{type:"margin"},{type:"header",level:2,text:"Module 19: Dependency Injection and Spring Context"},{type:"header",level:3,text:"Lesson 19.1: What is Dependency Injection (DI)?"},{type:"point",text:"Dependency Injection (DI) is a design pattern that allows objects to be loosely coupled by providing their dependencies from an external source rather than the object creating them itself."},{type:"point",text:"Spring uses DI to manage the lifecycle and configuration of objects, simplifying application development."},{type:"example",code:`// Without Dependency Injection
public class UserService {
  private UserRepository userRepository = new UserRepository(); // tightly coupled
}

// With Dependency Injection
public class UserService {
  private UserRepository userRepository;
  
  // Dependency injected via constructor
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
}`},{type:"header",level:3,text:"Lesson 19.2: Types of Dependency Injection in Spring"},{type:"point",text:"Spring supports three types of dependency injection: Constructor Injection, Setter Injection, and Field Injection."},{type:"point",text:"Constructor Injection: Dependencies are injected through the constructor of the class."},{type:"example",code:`// Example: Constructor Injection
@Component
public class UserService {
  private final UserRepository userRepository;
  
  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
}`},{type:"point",text:"Setter Injection: Dependencies are injected through a setter method."},{type:"example",code:`// Example: Setter Injection
@Component
public class UserService {
  private UserRepository userRepository;
  
  @Autowired
  public void setUserRepository(UserRepository userRepository) {
    this.userRepository = userRepository;
  }
}`},{type:"point",text:"Field Injection: Dependencies are injected directly into the fields using the @Autowired annotation."},{type:"example",code:`// Example: Field Injection
@Component
public class UserService {
  @Autowired
  private UserRepository userRepository;
}`},{type:"header",level:3,text:"Lesson 19.3: Spring Context"},{type:"point",text:"The Spring Context is the central interface for accessing the Spring container, which manages the lifecycle of beans and their dependencies."},{type:"point",text:"ApplicationContext is a subinterface of the BeanFactory, providing more advanced container capabilities like event propagation and AOP integration."},{type:"example",code:`// Example: Using ApplicationContext
@SpringBootApplication
public class MyApplication {
  public static void main(String[] args) {
    ApplicationContext context = SpringApplication.run(MyApplication.class, args);
    
    // Accessing a bean from the context
    UserService userService = context.getBean(UserService.class);
    System.out.println(userService.getUserDetails());
  }
}`},{type:"point",text:"Beans in the Spring Context can be defined through annotations (@Component, @Service, @Repository) or XML configuration."},{type:"header",level:3,text:"Lesson 19.4: Bean Scopes in Spring"},{type:"point",text:"Spring supports different bean scopes to define the lifecycle of a bean within the application context."},{type:"point",text:"Common scopes include: singleton (default), prototype, request, session, and application."},{type:"example",code:`// Example: Defining Bean Scope
@Component
@Scope("prototype")
public class PrototypeBean {
  public String getMessage() {
    return "This is a prototype-scoped bean!";
  }
}`},{type:"header",level:3,text:"Lesson 19.5: @Autowired and @Qualifier"},{type:"point",text:"The @Autowired annotation is used for automatic dependency injection by type."},{type:"point",text:"The @Qualifier annotation is used to resolve conflicts when multiple beans of the same type are available."},{type:"example",code:`// Example: Using @Autowired and @Qualifier
@Component
public class MyService {
  @Autowired
  @Qualifier("specificBean")
  private MyBean myBean;
}`}],module20:[{type:"margin"},{type:"header",level:2,text:"Module 20: Creating RESTful APIs with Spring Boot"},{type:"header",level:3,text:"Lesson 20.1: Understanding RESTful APIs"},{type:"point",text:"REST (Representational State Transfer) is an architectural style for designing networked applications."},{type:"point",text:"A RESTful API uses HTTP methods like GET, POST, PUT, and DELETE to perform CRUD operations on resources."},{type:"point",text:"Spring Boot simplifies the creation of RESTful APIs with annotations and built-in support for HTTP handling."},{type:"example",code:`// Basic REST Controller
@RestController
@RequestMapping("/api")
public class HelloController {
  
  @GetMapping("/hello")
  public String sayHello() {
    return "Hello, World!";
  }
}`},{type:"header",level:3,text:"Lesson 20.2: Creating a RESTful API"},{type:"point",text:"Use the @RestController annotation to mark a class as a REST controller."},{type:"point",text:"Define endpoints using @RequestMapping and HTTP method-specific annotations like @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping."},{type:"example",code:`// Example: CRUD operations for a User resource
@RestController
@RequestMapping("/api/users")
public class UserController {
  
  private List<User> users = new ArrayList<>();

  @GetMapping
  public List<User> getAllUsers() {
    return users;
  }

  @PostMapping
  public User createUser(@RequestBody User user) {
    users.add(user);
    return user;
  }

  @PutMapping("/{id}")
  public User updateUser(@PathVariable int id, @RequestBody User updatedUser) {
    users.set(id, updatedUser);
    return updatedUser;
  }

  @DeleteMapping("/{id}")
  public String deleteUser(@PathVariable int id) {
    users.remove(id);
    return "User deleted successfully!";
  }
}`},{type:"header",level:3,text:"Lesson 20.3: Handling Path Variables and Query Parameters"},{type:"point",text:"Use @PathVariable to capture dynamic values from the URL path."},{type:"point",text:"Use @RequestParam to handle query parameters passed in the URL."},{type:"example",code:`// Example: Handling Path Variables and Query Parameters
@RestController
@RequestMapping("/api/greetings")
public class GreetingController {

  @GetMapping("/{name}")
  public String greet(@PathVariable String name, @RequestParam(required = false, defaultValue = "Hello") String prefix) {
    return prefix + ", " + name + "!";
  }
}`},{type:"header",level:3,text:"Lesson 20.4: Returning JSON Responses"},{type:"point",text:"Spring Boot automatically converts Java objects to JSON using the Jackson library."},{type:"example",code:`// Example: Returning JSON Response
@RestController
@RequestMapping("/api/users")
public class UserController {

  @GetMapping("/{id}")
  public User getUser(@PathVariable int id) {
    return new User(id, "John Doe", "john.doe@example.com");
  }
}

// User model
public class User {
  private int id;
  private String name;
  private String email;

  // Constructor, Getters, and Setters
}`},{type:"header",level:3,text:"Lesson 20.5: Exception Handling in REST APIs"},{type:"point",text:"Use @ExceptionHandler to handle specific exceptions in a controller."},{type:"point",text:"Create a global exception handler using @ControllerAdvice to handle exceptions across all controllers."},{type:"example",code:`// Example: Global Exception Handling
@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<String> handleResourceNotFound(ResourceNotFoundException ex) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
  }
}

// Custom exception
public class ResourceNotFoundException extends RuntimeException {
  public ResourceNotFoundException(String message) {
    super(message);
  }
}`},{type:"header",level:3,text:"Lesson 20.6: Testing RESTful APIs"},{type:"point",text:"Use tools like Postman or curl to manually test your APIs."},{type:"point",text:"Automate API testing using JUnit and Spring Boot's MockMvc framework."},{type:"example",code:`// Example: Testing with MockMvc
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Test
  public void testGetAllUsers() throws Exception {
    mockMvc.perform(get("/api/users"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$").isArray());
  }
}`}],module21:[{type:"margin"},{type:"header",level:2,text:"Module 21: Spring Boot and Database Integration"},{type:"header",level:3,text:"Lesson 21.1: Introduction to Database Integration"},{type:"point",text:"Database integration in Spring Boot simplifies interaction with relational and non-relational databases. Spring Boot's auto-configuration and abstraction layers like JPA reduce boilerplate code."},{type:"example",code:`// Example: Adding Database Dependencies in pom.xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
  <scope>runtime</scope>
</dependency>`},{type:"point",text:"Spring Boot supports common databases like MySQL, PostgreSQL, H2, and MongoDB. Use the correct dependencies for the database you plan to integrate."},{type:"header",level:3,text:"Lesson 21.2: Configuring a DataSource"},{type:"point",text:"A DataSource is a factory for connections to a physical database. Spring Boot can configure it automatically, or you can configure it explicitly in `application.properties` or `application.yml`."},{type:"example",code:`// Example: application.properties for H2 Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`},{type:"point",text:"For production databases like MySQL or PostgreSQL, replace H2 configurations with the appropriate database URL, username, and password."},{type:"example",code:`// Example: application.properties for MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=password`},{type:"header",level:3,text:"Lesson 21.3: Using JPA and Hibernate"},{type:"point",text:"JPA (Java Persistence API) is a specification for ORM (Object-Relational Mapping). Hibernate is one of its most widely used implementations."},{type:"example",code:`// Example: Annotating an Entity Class
@Entity
@Table(name = "users") // Optional: Maps the class to a specific table
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate primary key
  private Long id;

  @Column(nullable = false) // Map fields to specific columns
  private String name;

  @Column(unique = true)
  private String email;

  // Constructors, Getters, and Setters
}`},{type:"header",level:3,text:"Lesson 21.4: Creating Repositories"},{type:"point",text:"Spring Data JPA provides pre-built repository interfaces like `JpaRepository` and `CrudRepository` that abstract common operations like saving, finding, and deleting records."},{type:"example",code:`// Example: Creating a User Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  // Custom Query Method: Find users by name
  List<User> findByName(String name);

  // Custom Query Method: Find by email
  Optional<User> findByEmail(String email);
}`},{type:"header",level:3,text:"Lesson 21.5: Database Initialization with Spring Boot"},{type:"point",text:"Spring Boot can initialize your database schema and data using SQL scripts or JPA schema generation. Place these scripts in the `resources` folder."},{type:"example",code:`// Example: application.properties for Database Initialization
spring.sql.init.mode=always
spring.sql.init.schema-locations=classpath:schema.sql
spring.sql.init.data-locations=classpath:data.sql

// schema.sql
CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

// data.sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');`},{type:"header",level:3,text:"Lesson 21.6: Using Spring JDBC"},{type:"point",text:"Spring JDBC provides `JdbcTemplate` for executing SQL queries and mapping results. It is faster and less resource-intensive than ORM solutions like Hibernate."},{type:"example",code:`// Example: Using JdbcTemplate to Query Users
@Autowired
private JdbcTemplate jdbcTemplate;

public List<User> findAllUsers() {
  String sql = "SELECT * FROM users";
  return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
}`},{type:"header",level:3,text:"Lesson 21.7: Transaction Management"},{type:"point",text:"Spring provides seamless transaction management with the `@Transactional` annotation. It ensures that a block of code runs within a transaction boundary."},{type:"example",code:`// Example: Transactional Service
@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Transactional
  public void updateUserEmail(Long userId, String newEmail) {
    User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    user.setEmail(newEmail);
    userRepository.save(user);
  }
}`},{type:"header",level:3,text:"Lesson 21.8: Testing Database Integration"},{type:"point",text:"Spring Boot supports testing with in-memory databases like H2 or external tools like Testcontainers. These environments isolate tests from the production database."},{type:"example",code:`// Example: Testing User Repository with H2 Database
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
public class UserRepositoryTest {

  @Autowired
  private UserRepository userRepository;

  @Test
  public void testFindByEmail() {
    Optional<User> user = userRepository.findByEmail("john.doe@example.com");
    Assertions.assertTrue(user.isPresent());
    Assertions.assertEquals("John Doe", user.get().getName());
  }
}`}],module22:[{type:"margin"},{type:"header",level:2,text:"Module 22: Spring Boot Security Basics"},{type:"header",level:3,text:"Lesson 22.1: Introduction to Spring Security"},{type:"point",text:"Spring Security is a powerful and customizable authentication and access control framework for Java applications. It integrates seamlessly with Spring Boot to handle security aspects like authentication, authorization, and CSRF protection."},{type:"example",code:`// Example: Adding Spring Security dependency in pom.xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`},{type:"point",text:"Spring Security provides built-in mechanisms for securing REST APIs, form-based login, and securing methods through annotations like `@PreAuthorize`."},{type:"header",level:3,text:"Lesson 22.2: Basic Authentication with Spring Security"},{type:"point",text:"Basic Authentication is one of the simplest forms of authentication in Spring Security, where the client sends a username and password with each request."},{type:"example",code:`// Example: Configuring Basic Authentication in Spring Security
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/public/**").permitAll() // Allowing public paths without authentication
        .anyRequest().authenticated() // All other requests require authentication
      .and()
      .httpBasic(); // Enable HTTP Basic Authentication
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
      .withUser("user")
      .password("{noop}password") // No encoding for simplicity (use BCrypt in production)
      .roles("USER");
  }
}`},{type:"point",text:"In this configuration, we enable Basic Authentication and configure a user with the username `user` and password `password` for testing purposes. `{noop}` is used to specify no password encoder (this is insecure for production)."},{type:"header",level:3,text:"Lesson 22.3: Form-Based Authentication"},{type:"point",text:"Spring Security also supports form-based authentication. This allows the user to submit their username and password through an HTML form, and Spring Security will handle the authentication process."},{type:"example",code:`// Example: Configuring Form-Based Authentication in Spring Security
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/login", "/register").permitAll() // Allowing public access to login and register pages
        .anyRequest().authenticated() // All other requests require authentication
      .and()
      .formLogin() // Enabling form-based login
        .loginPage("/login") // Custom login page URL
        .permitAll(); // Allowing public access to the login page
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
      .withUser("user")
      .password("{noop}password") // No encoding for simplicity
      .roles("USER");
  }
}`},{type:"point",text:"In this example, we configure a custom login page (`/login`) and allow public access to it. After successful login, users are redirected to the default page or the one they tried to access before login."},{type:"header",level:3,text:"Lesson 22.4: Role-Based Authorization"},{type:"point",text:"Role-based access control (RBAC) is a method of restricting access based on user roles. In Spring Security, roles can be defined and used to authorize or restrict access to specific resources."},{type:"example",code:`// Example: Role-Based Authorization
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/admin/**").hasRole("ADMIN") // Only ADMIN role can access /admin paths
        .antMatchers("/user/**").hasRole("USER") // Only USER role can access /user paths
        .anyRequest().authenticated() // All other requests require authentication
      .and()
      .formLogin();
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
      .withUser("admin")
      .password("{noop}adminpassword")
      .roles("ADMIN")
      .and()
      .withUser("user")
      .password("{noop}userpassword")
      .roles("USER");
  }
}`},{type:"point",text:"This configuration ensures that only users with the `ADMIN` role can access the `/admin/**` path and users with the `USER` role can access the `/user/**` path."},{type:"header",level:3,text:"Lesson 22.5: Protecting REST APIs with JWT"},{type:"point",text:"JSON Web Tokens (JWT) are commonly used to secure REST APIs. Spring Security allows you to integrate JWT for stateless authentication. After successful login, a JWT is issued and must be included in the `Authorization` header of subsequent requests."},{type:"example",code:`// Example: JWT Authentication Filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JwtTokenProvider jwtTokenProvider;

  public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    String token = extractJwtFromRequest(request);

    if (token != null && jwtTokenProvider.validateToken(token)) {
      Authentication authentication = jwtTokenProvider.getAuthentication(token);
      SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    filterChain.doFilter(request, response);
  }

  private String extractJwtFromRequest(HttpServletRequest request) {
    String bearerToken = request.getHeader("Authorization");
    if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
      return bearerToken.substring(7);
    }
    return null;
  }
}`},{type:"point",text:"In this example, a custom `JwtAuthenticationFilter` intercepts each request, extracts the JWT from the `Authorization` header, validates it, and sets the authentication context for the request."},{type:"header",level:3,text:"Lesson 22.6: Customizing Authentication and Authorization"},{type:"point",text:"Spring Security provides many ways to customize authentication and authorization logic. You can define custom `UserDetailsService` for loading user-specific data or write custom authorization logic using annotations like `@PreAuthorize`."},{type:"example",code:`// Example: Custom UserDetailsService Implementation
@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
      .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), 
        AuthorityUtils.createAuthorityList(user.getRole()));
  }
}`},{type:"point",text:"The custom `UserDetailsService` implementation loads user information from a database, maps it to Spring Security's `UserDetails` interface, and provides roles/authorities for authorization."},{type:"header",level:3,text:"Lesson 22.7: Securing Method Calls with @PreAuthorize"},{type:"point",text:"Spring Security provides method-level security with annotations like `@PreAuthorize`. This allows you to restrict access to specific methods based on roles or permissions."},{type:"example",code:`// Example: Using @PreAuthorize for Method-Level Security
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long userId) {
  // Only users with the ADMIN role can delete users
  userRepository.deleteById(userId);
}`},{type:"point",text:"In this example, the method `deleteUser` is protected by the `@PreAuthorize` annotation, ensuring that only users with the `ADMIN` role can call it."}],module23:[{type:"margin"},{type:"header",level:2,text:"Module 23: Building Microservices with Spring Boot"},{type:"header",level:3,text:"Lesson 23.1: Introduction to Microservices Architecture"},{type:"point",text:"Microservices is an architectural style where an application is composed of small, independently deployable services that communicate with each other over well-defined APIs. These services are loosely coupled and can be developed, deployed, and scaled independently."},{type:"point",text:"Each microservice focuses on a specific business function and can be written in different languages, use different databases, and can be independently scaled."},{type:"header",level:3,text:"Lesson 23.2: Setting Up a Spring Boot Microservice"},{type:"point",text:"To set up a Spring Boot microservice, you start with a basic Spring Boot application and configure it to expose RESTful endpoints. Each microservice should have its own isolated functionality."},{type:"example",code:`// Example: Setting up a simple Spring Boot RESTful microservice
@SpringBootApplication
@RestController
public class ProductServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProductServiceApplication.class, args);
  }

  @GetMapping("/products")
  public List<Product> getAllProducts() {
    return Arrays.asList(new Product("Laptop", 1000), new Product("Smartphone", 800));
  }
}

// Product class
public class Product {
  private String name;
  private int price;

  // Constructor, getters and setters
  public Product(String name, int price) {
    this.name = name;
    this.price = price;
  }
  
  public String getName() { return name; }
  public int getPrice() { return price; }
}`},{type:"point",text:"In this example, we create a simple Spring Boot microservice that exposes a `/products` endpoint. When a GET request is sent to this endpoint, it returns a list of products."},{type:"header",level:3,text:"Lesson 23.3: Service Discovery with Eureka"},{type:"point",text:"Service Discovery is an important aspect of microservices architecture. Eureka, a service discovery tool by Netflix, is commonly used with Spring Cloud to enable services to discover each other dynamically at runtime."},{type:"example",code:`// Example: Adding Eureka Server to the Application
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

  public static void main(String[] args) {
    SpringApplication.run(EurekaServerApplication.class, args);
  }
}

// Eureka Client configuration in the microservice
@SpringBootApplication
@EnableEurekaClient
public class ProductServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(ProductServiceApplication.class, args);
  }
}`},{type:"point",text:"In the example above, we have set up an Eureka Server with `@EnableEurekaServer` and a microservice with `@EnableEurekaClient` to register itself with the Eureka server."},{type:"header",level:3,text:"Lesson 23.4: Communication Between Microservices with RestTemplate"},{type:"point",text:"Microservices often need to communicate with each other. `RestTemplate` is a Spring class used to perform HTTP requests to other services. We can use it to call other microservices from within our service."},{type:"example",code:`// Example: Using RestTemplate to call another microservice
@Configuration
public class RestTemplateConfig {

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }
}

@RestController
public class OrderService {

  @Autowired
  private RestTemplate restTemplate;

  @GetMapping("/order")
  public String placeOrder() {
    String productDetails = restTemplate.getForObject("http://product-service/products", String.class);
    return "Order placed for: " + productDetails;
  }
}`},{type:"point",text:"In this example, the `OrderService` microservice uses `RestTemplate` to fetch product details from the `ProductService` microservice. The `@GetMapping` method makes an HTTP GET request to another service's endpoint."},{type:"header",level:3,text:"Lesson 23.5: API Gateway with Spring Cloud Gateway"},{type:"point",text:"An API Gateway acts as an entry point for all microservices. It handles routing, load balancing, and security. Spring Cloud Gateway provides a simple and powerful way to route requests to microservices."},{type:"example",code:`// Example: Setting up Spring Cloud Gateway
@SpringBootApplication
@EnableGateway
public class ApiGatewayApplication {

  public static void main(String[] args) {
    SpringApplication.run(ApiGatewayApplication.class, args);
  }

  @Bean
  public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
    return builder.routes()
      .route(r -> r.path("/product/**")
        .uri("lb://PRODUCT-SERVICE") // Load-balanced route to product service
        .id("productModule"))
      .build();
  }
}`},{type:"point",text:"In the example, we configure Spring Cloud Gateway to route requests to `/product/**` to the `PRODUCT-SERVICE` microservice using service discovery. The `lb://` prefix indicates that the service is load-balanced and registered in Eureka."},{type:"header",level:3,text:"Lesson 23.6: Externalized Configuration with Spring Cloud Config"},{type:"point",text:"Spring Cloud Config provides server and client-side support for externalized configuration in a microservices architecture. It allows services to retrieve their configuration from a central configuration server."},{type:"example",code:`// Example: Config Server Setup
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {

  public static void main(String[] args) {
    SpringApplication.run(ConfigServerApplication.class, args);
  }
}

// Application config client setup
@Configuration
@EnableConfigClient
public class ConfigClientApplication {

  public static void main(String[] args) {
    SpringApplication.run(ConfigClientApplication.class, args);
  }
}`},{type:"point",text:"Here, `ConfigServerApplication` acts as a configuration server, and the client applications use `@EnableConfigClient` to retrieve configuration from the server."},{type:"header",level:3,text:"Lesson 23.7: Resilience with Spring Cloud Circuit Breaker"},{type:"point",text:"Resilience in microservices can be achieved using tools like circuit breakers. Spring Cloud Circuit Breaker integrates with libraries such as Resilience4j or Hystrix to handle service failures gracefully."},{type:"example",code:`// Example: Using Resilience4j Circuit Breaker
@Bean
public CircuitBreakerFactory circuitBreakerFactory() {
  return new Resilience4JCircuitBreakerFactory();
}

public String callProductService() {
  CircuitBreaker circuitBreaker = circuitBreakerFactory.create("productService");
  return circuitBreaker.run(() -> restTemplate.getForObject("http://product-service/products", String.class), 
                            throwable -> "Product service is unavailable");
}`},{type:"point",text:"The `callProductService` method demonstrates how to wrap a service call with a circuit breaker. If the service is down or fails, a fallback response is returned."},{type:"header",level:3,text:"Lesson 23.8: Monitoring and Logging in Microservices"},{type:"point",text:"Monitoring and logging are critical in microservices to track performance, detect failures, and troubleshoot issues. Spring Boot integrates well with tools like Spring Boot Actuator and Sleuth for tracing and monitoring microservices."},{type:"example",code:`// Example: Enabling Spring Boot Actuator for monitoring
@SpringBootApplication
@EnableActuator
public class MonitoringApplication {

  public static void main(String[] args) {
    SpringApplication.run(MonitoringApplication.class, args);
  }
}

management.endpoints.web.exposure.include=health,info,metrics`},{type:"point",text:"By including Spring Boot Actuator, we can monitor the health, metrics, and other endpoints of our microservice. The `management.endpoints.web.exposure.include` configuration allows us to expose specific actuator endpoints for monitoring."}],module24:[{type:"margin"},{type:"header",level:2,text:"Module 24: Spring Boot Testing and Debugging"},{type:"header",level:3,text:"Lesson 24.1: Introduction to Spring Boot Testing"},{type:"point",text:"Testing is essential in Spring Boot to ensure the application works as expected. Spring Boot provides various tools to test different layers of the application, such as unit testing, integration testing, and acceptance testing."},{type:"point",text:"Spring Boot’s testing support is based on JUnit and integrates seamlessly with other testing frameworks like TestNG and Mockito."},{type:"header",level:3,text:"Lesson 24.2: Unit Testing with JUnit and Mockito"},{type:"point",text:"Unit testing focuses on testing individual units of functionality in isolation, typically using mock objects to simulate dependencies. Mockito is commonly used for mocking dependencies in Spring Boot applications."},{type:"example",code:`// Example: Unit Test with JUnit and Mockito
@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

  @Mock
  private ProductRepository productRepository;

  @InjectMocks
  private ProductService productService;

  @Test
  public void testGetProductById() {
    Product product = new Product(1L, "Laptop", 1000);
    Mockito.when(productRepository.findById(1L)).thenReturn(Optional.of(product));

    Product result = productService.getProductById(1L);
    
    assertNotNull(result);
    assertEquals("Laptop", result.getName());
  }
}`},{type:"point",text:"In this example, we mock the `ProductRepository` dependency and inject it into the `ProductService`. The `@Test` annotation marks a method as a test, and `Mockito.when()` is used to simulate the repository's behavior."},{type:"header",level:3,text:"Lesson 24.3: Integration Testing with @SpringBootTest"},{type:"point",text:"Integration testing involves testing the interaction between different layers or components of the application. Spring Boot makes integration testing easy with the `@SpringBootTest` annotation."},{type:"example",code:`// Example: Integration Test with @SpringBootTest
@SpringBootTest
public class ProductControllerTest {

  @Autowired
  private ProductController productController;

  @Autowired
  private MockMvc mockMvc;

  @Test
  public void testGetProducts() throws Exception {
    mockMvc.perform(get("/products"))
           .andExpect(status().isOk())
           .andExpect(jsonPath("$[0].name").value("Laptop"));
  }
}`},{type:"point",text:"The `@SpringBootTest` annotation tells Spring to load the full application context for testing. The `MockMvc` object is used to perform HTTP requests and assert the results, like checking the response status and content."},{type:"header",level:3,text:"Lesson 24.4: Testing with @DataJpaTest for JPA Repositories"},{type:"point",text:"When testing Spring Data JPA repositories, you can use the `@DataJpaTest` annotation. It configures an embedded database and performs tests related to JPA repositories without starting the whole application context."},{type:"example",code:`// Example: Repository Test with @DataJpaTest
@DataJpaTest
public class ProductRepositoryTest {

  @Autowired
  private ProductRepository productRepository;

  @Test
  public void testFindByName() {
    Product product = new Product("Laptop", 1000);
    productRepository.save(product);

    Product result = productRepository.findByName("Laptop");
    
    assertNotNull(result);
    assertEquals("Laptop", result.getName());
  }
}`},{type:"point",text:"In this example, we use `@DataJpaTest` to test the repository layer, focusing on JPA functionality. The embedded database is used for saving and querying the `Product` entity."},{type:"header",level:3,text:"Lesson 24.5: Testing Service Layer with MockBeans"},{type:"point",text:"In integration tests, sometimes you need to mock a service layer bean to isolate the test. You can use `@MockBean` to mock beans within the application context."},{type:"example",code:`// Example: Mocking Service Layer Bean
@SpringBootTest
public class OrderServiceTest {

  @Autowired
  private OrderService orderService;

  @MockBean
  private ProductService productService;

  @Test
  public void testPlaceOrder() {
    Product product = new Product(1L, "Laptop", 1000);
    Mockito.when(productService.getProductById(1L)).thenReturn(product);

    String result = orderService.placeOrder(1L);
    
    assertEquals("Order placed for: Laptop", result);
  }
}`},{type:"point",text:"In this example, the `ProductService` is mocked using `@MockBean`. The `orderService` method can then use the mocked service in the test, ensuring the unit is isolated."},{type:"header",level:3,text:"Lesson 24.6: Debugging Spring Boot Applications"},{type:"point",text:"Debugging Spring Boot applications involves using standard debugging tools like breakpoints, logging, and debugging the application context. Spring Boot also has built-in features for tracing issues."},{type:"point",text:"Common ways to debug Spring Boot applications include:"},{type:"list",list:["Using `@Slf4j` or `Logger` for logging messages","Setting breakpoints in the IDE and running the application in debug mode","Using Spring Boot's `actuator` endpoints to monitor the application health and metrics","Enabling debug-level logging by setting `logging.level.root=DEBUG` in `application.properties`"]},{type:"header",level:3,text:"Lesson 24.7: Using Spring Boot Actuator for Monitoring and Debugging"},{type:"point",text:"Spring Boot Actuator provides several built-in endpoints to help with debugging, including `/health`, `/info`, and `/metrics`. These can give insights into the status of the application and performance."},{type:"example",code:`// Example: Enabling Spring Boot Actuator
@SpringBootApplication
@EnableActuator
public class DebugApplication {

  public static void main(String[] args) {
    SpringApplication.run(DebugApplication.class, args);
  }
}

// application.properties
management.endpoints.web.exposure.include=health,info,metrics`},{type:"point",text:"In this example, we enable Spring Boot Actuator and configure it to expose the health, info, and metrics endpoints. These endpoints can be used for debugging and monitoring the application."},{type:"header",level:3,text:"Lesson 24.8: Test Coverage and Quality with Jacoco"},{type:"point",text:"Jacoco is a popular tool used to measure code coverage in Java projects. Integrating Jacoco with Spring Boot allows you to analyze test coverage and improve the quality of your tests."},{type:"example",code:`// Example: Integrating Jacoco in Maven
<plugin>
  <groupId>org.jacoco</groupId>
  <artifactId>jacoco-maven-plugin</artifactId>
  <version>0.8.7</version>
  <executions>
    <execution>
      <goals>
        <goal>prepare-agent</goal>
      </goals>
    </execution>
  </executions>
</plugin>`},{type:"point",text:"In this example, we configure Jacoco in the `pom.xml` to collect code coverage data during the test phase. This helps you monitor the effectiveness of your tests and ensures your application is thoroughly tested."}],module25:[{type:"margin"},{type:"header",level:2,text:"Module 25: Spring Boot and Thymeleaf"},{type:"header",level:3,text:"Lesson 25.1: Introduction to Thymeleaf in Spring Boot"},{type:"point",text:"Thymeleaf is a modern server-side Java template engine for web and standalone environments. It is well-suited for use with Spring Boot for rendering dynamic web pages."},{type:"point",text:"Thymeleaf integrates well with Spring Boot and provides a simple way to create dynamic web applications without the complexity of JavaServer Pages (JSP)."},{type:"header",level:3,text:"Lesson 25.2: Setting Up Thymeleaf in Spring Boot"},{type:"point",text:"Setting up Thymeleaf in Spring Boot is easy, as it is included by default in Spring Boot's web starter. You don’t need to add any additional configuration."},{type:"example",code:`// pom.xml dependency for Spring Boot and Thymeleaf
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>`},{type:"point",text:"After adding the necessary dependencies, Thymeleaf templates should be placed in the `src/main/resources/templates` directory, and static resources like CSS and JavaScript in `src/main/resources/static`."},{type:"header",level:3,text:"Lesson 25.3: Thymeleaf Template Syntax"},{type:"point",text:"Thymeleaf uses a simple and intuitive syntax. Most Thymeleaf expressions are wrapped in `${}` to indicate variables or expressions."},{type:"example",code:`<!-- Example: Thymeleaf Template -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>Product List</title>
</head>
<body>
  <h1>Product List</h1>
  <ul>
    <li th:each="product : $ {products}" th:text="$ {product.name}">Product Name</li>
  </ul>
</body>
</html>`},{type:"point",text:"In the example above, the `th:each` attribute is used to loop through a list of products. The `${product.name}` expression will dynamically display the name of each product in the list."},{type:"header",level:3,text:"Lesson 25.4: Integrating Thymeleaf with Spring Boot Controllers"},{type:"point",text:"Thymeleaf templates are rendered by controllers in Spring Boot. A controller method can return a `String`, which corresponds to the name of the Thymeleaf template to render."},{type:"example",code:`// Example: Spring Boot Controller
@Controller
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/products")
  public String getProducts(Model model) {
    List<Product> products = productService.getAllProducts();
    model.addAttribute("products", products);
    return "productList";  // This corresponds to the productList.html template
  }
}`},{type:"point",text:"In this example, the `Model` is used to pass the list of products from the controller to the Thymeleaf template. The template name is `productList`, and it will be resolved to `productList.html` in the `templates` folder."},{type:"header",level:3,text:"Lesson 25.5: Thymeleaf Expressions and Variables"},{type:"point",text:"Thymeleaf expressions allow you to output variables, conditionally render elements, and perform simple operations."},{type:"example",code:`<!-- Example: Thymeleaf Expressions -->
<p th:text="'Hello, ' + $ {username}">Hello, user</p>
<p th:if="$ {user != null}" th:text="'Welcome ' + $ {user.name}">Welcome</p>`},{type:"point",text:"In the example, `${username}` is rendered directly, while `th:if` is used to conditionally display a message if the `user` object is not null. Thymeleaf supports logical conditions and string concatenation."},{type:"header",level:3,text:"Lesson 25.6: Thymeleaf Layouts and Fragments"},{type:"point",text:"Thymeleaf allows you to create reusable layouts and fragments to avoid code duplication. A fragment is a snippet of HTML that can be reused across multiple templates."},{type:"example",code:`<!-- Example: Layout with Fragments -->
<!-- header.html -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>My Application</title>
</head>
<body>
  <div th:fragment="header">
    <h1>Welcome to My Application</h1>
  </div>
</body>
</html>`},{type:"point",text:"In the example, the `header.html` template defines a fragment named `header`. You can include this fragment in other templates using the `th:replace` or `th:include` attributes."},{type:"example",code:`<!-- Example: Using Fragment -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>Product List</title>
</head>
<body>
  <div th:replace="~{header}"></div>
  <h2>Product List</h2>
  <ul>
    <li th:each="product : $ {products}" th:text="$ {product.name}">Product Name</li>
  </ul>
</body>
</html>`},{type:"point",text:"Here, the `th:replace` attribute is used to include the `header` fragment from the `header.html` template. This allows for modular code and easy reuse of common components like headers, footers, etc."},{type:"header",level:3,text:"Lesson 25.7: Form Handling with Thymeleaf"},{type:"point",text:"Thymeleaf integrates seamlessly with Spring Boot for form handling. You can bind form fields to model attributes and process them easily in the controller."},{type:"example",code:`<!-- Example: Thymeleaf Form -->
<form action="#" th:action="@{/products}" th:object="$ {product}" method="post">
  <label for="name">Product Name:</label>
  <input type="text" th:field="*{name}" />
  <label for="price">Product Price:</label>
  <input type="text" th:field="*{price}" />
  <button type="submit">Submit</button>
</form>`},{type:"point",text:"In this form, the `th:action` attribute binds the form submission to a Spring controller endpoint, while `th:field` binds the form fields to the corresponding properties in the `product` model object."},{type:"header",level:3,text:"Lesson 25.8: Error Handling with Thymeleaf"},{type:"point",text:"Thymeleaf also supports error handling in forms. You can display error messages for form fields by checking for validation errors in the model."},{type:"example",code:`<!-- Example: Error Handling in Thymeleaf -->
<form action="#" th:action="@{/products}" th:object="$ {product}" method="post">
  <label for="name">Product Name:</label>
  <input type="text" th:field="*{name}" />
  <span th:if="$ {#fields.hasErrors('name')}" th:errors="*{name}"></span>
  <button type="submit">Submit</button>
</form>`},{type:"point",text:"In this example, the `th:if` condition checks if there are validation errors for the `name` field, and `th:errors` displays the error message for that field."},{type:"header",level:3,text:"Lesson 25.9: Internationalization (i18n) in Thymeleaf"},{type:"point",text:"Thymeleaf supports internationalization (i18n) by enabling language-specific messages through message bundles."},{type:"example",code:`<!-- Example: Messages in Thymeleaf -->
<p th:text="#{product.name}">Product Name</p>`},{type:"point",text:"In this example, the `#{product.name}` expression will look for the `product.name` key in the message properties files, allowing the template to be displayed in different languages based on the configured locale."}],module26:[{type:"margin"},{type:"header",level:2,text:"Module 26: Working with Spring Boot Actuator"},{type:"header",level:3,text:"Lesson 26.1: Introduction to Spring Boot Actuator"},{type:"point",text:"Spring Boot Actuator is a powerful tool that provides production-ready features like monitoring, health checks, and metrics for Spring Boot applications."},{type:"point",text:"It allows you to gain insights into your application’s health, environment, and performance without the need for additional tools or setup."},{type:"header",level:3,text:"Lesson 26.2: Setting Up Spring Boot Actuator"},{type:"point",text:"To enable Spring Boot Actuator, add the `spring-boot-starter-actuator` dependency in your `pom.xml` or `build.gradle` file."},{type:"example",code:`<!-- pom.xml Dependency for Spring Boot Actuator -->
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
  </dependency>
</dependencies>`},{type:"point",text:"Once added, Spring Boot Actuator exposes various endpoints for health, metrics, environment details, and more."},{type:"header",level:3,text:"Lesson 26.3: Actuator Endpoints Overview"},{type:"point",text:"Spring Boot Actuator provides several built-in endpoints to monitor and manage your application. Common endpoints include `/actuator/health`, `/actuator/metrics`, `/actuator/env`, and `/actuator/beans`."},{type:"point",text:"You can view the health status of your application, metrics related to performance, and configuration properties through these endpoints."},{type:"example",code:`# Example: Actuator Endpoint Configuration in application.properties
management.endpoints.web.exposure.include=health,metrics,env`},{type:"point",text:"In this example, the `application.properties` configuration ensures that only the `health`, `metrics`, and `env` endpoints are exposed. By default, some endpoints are disabled for security reasons."},{type:"header",level:3,text:"Lesson 26.4: Health Check Endpoint"},{type:"point",text:"The `/actuator/health` endpoint provides information about the health of your application, including database connection status, disk space, and custom health indicators."},{type:"example",code:`<!-- Example: Health Check Response -->
$ curl http://localhost:8080/actuator/health
{
  "status": "UP",
  "components": {
    "diskSpace": {
      "status": "UP",
      "details": {
        "total": 1024,
        "free": 512,
        "threshold": 10485760
      }
    },
    "db": {
      "status": "UP"
    }
  }
}`},{type:"point",text:"The health check will return a JSON response, indicating the overall health status (`UP`, `DOWN`, etc.), and detailed status for components like the database or disk space."},{type:"header",level:3,text:"Lesson 26.5: Custom Health Checks"},{type:"point",text:"Spring Boot Actuator allows you to define custom health indicators if you want to monitor specific application components."},{type:"example",code:`// Example: Custom Health Indicator
@Component
public class CustomHealthIndicator extends AbstractHealthIndicator {

    @Override
    protected void doHealthCheck(Health.Builder builder) throws Exception {
        // Custom health check logic
        builder.up().withDetail("CustomCheck", "Everything is fine");
    }
}`},{type:"point",text:"In this example, the `CustomHealthIndicator` class extends `AbstractHealthIndicator` and provides custom logic to determine the health of the application. You can add custom checks for components like external services, queues, etc."},{type:"header",level:3,text:"Lesson 26.6: Metrics Endpoint"},{type:"point",text:"The `/actuator/metrics` endpoint provides various metrics, such as JVM memory usage, HTTP request counts, garbage collection statistics, and more."},{type:"example",code:`# Example: Metrics Endpoint
$ curl http://localhost:8080/actuator/metrics
{
  "mem": {
    "used": 123456,
    "free": 654321,
    "max": 987654
  },
  "http.server.requests": {
    "count": 125,
    "averageResponseTime": 200
  }
}`},{type:"point",text:"The metrics endpoint returns a JSON response that includes system-related metrics like memory usage, request statistics, and more."},{type:"header",level:3,text:"Lesson 26.7: Exposing Additional Endpoints"},{type:"point",text:"You can expose more actuator endpoints by modifying the `application.properties` file to include additional endpoints like `/actuator/logfile`, `/actuator/heapdump`, and `/actuator/threaddump`."},{type:"example",code:`# Example: Exposing Additional Actuator Endpoints
management.endpoints.web.exposure.include=health,metrics,env,logfile,heapdump,threaddump`},{type:"point",text:"This configuration will expose the log file, heap dump, and thread dump endpoints, providing deeper insights into the application’s status and performance."},{type:"header",level:3,text:"Lesson 26.8: Securing Actuator Endpoints"},{type:"point",text:"Actuator endpoints often contain sensitive information, so securing them is important. Spring Boot supports security for actuator endpoints via HTTP basic authentication or other security mechanisms."},{type:"example",code:`# Example: Securing Actuator Endpoints in application.properties
management.endpoints.web.exposure.include=health,metrics
management.endpoints.web.exposure.exclude=beans
spring.security.user.name=admin
spring.security.user.password=admin`},{type:"point",text:"In this example, basic authentication is enabled for the actuator endpoints. Only users with the specified username and password can access the endpoints."},{type:"header",level:3,text:"Lesson 26.9: Logfile and Log Management"},{type:"point",text:"The `/actuator/logfile` endpoint provides access to the application’s log file, which can be useful for debugging or monitoring the application in production."},{type:"example",code:`# Example: Logfile Endpoint Access
$ curl http://localhost:8080/actuator/logfile
2024-12-28 12:30:12 INFO  ProductController - Product List Retrieved`},{type:"point",text:"You can use the `/actuator/logfile` endpoint to read the application's log file. This is especially useful for debugging purposes or for monitoring application logs in production environments."},{type:"header",level:3,text:"Lesson 26.10: Monitoring and Alerts with Actuator"},{type:"point",text:"You can use Spring Boot Actuator in combination with monitoring tools like Prometheus, Grafana, or Micrometer to create advanced monitoring and alerting systems."},{type:"point",text:"Micrometer, a metrics collection library included with Spring Boot, can be integrated with Actuator to expose metrics to external monitoring systems like Prometheus."},{type:"example",code:`# Example: Prometheus and Micrometer Setup
<dependency>
  <groupId>io.micrometer</groupId>
  <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>`},{type:"point",text:"By including the Prometheus registry in your project, you can configure Spring Boot Actuator to expose metrics in a format that Prometheus can scrape and visualize using Grafana."}],module27:[{type:"margin"},{type:"header",level:2,text:"Module 27: Deploying Spring Boot Applications"},{type:"header",level:3,text:"Lesson 27.1: Introduction to Deployment Strategies"},{type:"point",text:"Deploying a Spring Boot application involves various strategies depending on the hosting environment, such as cloud platforms, virtual machines, or containerized environments."},{type:"point",text:"Spring Boot makes it easy to deploy by packaging your application as a JAR or WAR file that can be executed independently or deployed to a web server like Tomcat or Jetty."},{type:"header",level:3,text:"Lesson 27.2: Packaging Spring Boot Application as a JAR or WAR"},{type:"point",text:"Spring Boot supports both executable JAR and WAR files, with JAR being the default format. A JAR file contains everything needed to run your application, including dependencies, embedded servlet containers, and application code."},{type:"point",text:"To package your Spring Boot application as a JAR or WAR, use Maven or Gradle. The `spring-boot-maven-plugin` simplifies this process."},{type:"example",code:`<!-- Example: Packaging Spring Boot Application as a JAR in pom.xml -->
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>`},{type:"point",text:"To build the JAR file, run `mvn clean install` in the terminal, and it will generate an executable JAR file that can be executed with `java -jar`."},{type:"header",level:3,text:"Lesson 27.3: Deploying on a Virtual Machine (VM)"},{type:"point",text:"A virtual machine can be a cost-effective way to host your Spring Boot application, especially for smaller applications or development environments."},{type:"point",text:"To deploy on a VM, copy the packaged JAR file to the remote server and run it using `java -jar`."},{type:"example",code:`# Example: Deploying Spring Boot Application on a VM
scp target/myapp.jar user@remote-server:/path/to/deploy/
ssh user@remote-server
java -jar /path/to/deploy/myapp.jar`},{type:"point",text:"In this example, the JAR file is copied to a remote VM using `scp`, and then executed using `java -jar` after SSH access to the server."},{type:"header",level:3,text:"Lesson 27.4: Deploying to Cloud Platforms"},{type:"point",text:"Spring Boot applications can be deployed to popular cloud platforms such as AWS, Google Cloud, and Heroku. Cloud providers offer managed services like load balancing, scaling, and monitoring."},{type:"point",text:"To deploy on these platforms, you typically need to create a project, configure your application, and deploy the packaged JAR/WAR file."},{type:"example",code:`# Example: Deploying to Heroku
heroku create my-spring-boot-app
git push heroku master
heroku open`},{type:"point",text:"In this example, the Spring Boot application is deployed to Heroku using Git. The application is automatically detected, and Heroku handles the deployment process."},{type:"header",level:3,text:"Lesson 27.5: Deploying on Docker Containers"},{type:"point",text:"Docker provides a portable and consistent environment for deploying Spring Boot applications. You can package your Spring Boot application into a Docker container and deploy it on any environment that supports Docker."},{type:"point",text:"To deploy your Spring Boot app on Docker, create a `Dockerfile` that defines how the application should be built and run in a container."},{type:"example",code:`# Example: Dockerfile for Spring Boot Application
FROM openjdk:11-jdk
VOLUME /tmp
COPY target/myapp.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]`},{type:"point",text:"Once the `Dockerfile` is created, build the Docker image using the `docker build` command, and run the application in a container using `docker run`."},{type:"example",code:`# Example: Build and Run Docker Container
docker build -t my-spring-boot-app .
docker run -p 8080:8080 my-spring-boot-app`},{type:"point",text:"This Docker setup ensures that your Spring Boot application can run consistently across different environments by encapsulating it inside a container."},{type:"header",level:3,text:"Lesson 27.6: Deploying to Kubernetes"},{type:"point",text:"Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications."},{type:"point",text:"To deploy your Spring Boot application to Kubernetes, you need to create Kubernetes manifests such as `deployment.yaml`, `service.yaml`, and other configuration files."},{type:"example",code:`# Example: Kubernetes Deployment YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: spring-boot-app
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
        - name: spring-boot-app
          image: my-spring-boot-app:latest
          ports:
            - containerPort: 8080`},{type:"point",text:"The deployment YAML file defines how the Spring Boot app is deployed on Kubernetes, including replicas and container specifications."},{type:"header",level:3,text:"Lesson 27.7: Configuring Application for Production Environments"},{type:"point",text:"Before deploying to production, it’s important to optimize your Spring Boot application for performance, security, and scalability."},{type:"point",text:"Consider settings like database connection pools, external configuration management, logging configurations, and security configurations."},{type:"example",code:`# Example: application.properties for Production
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/prod_db
spring.datasource.username=prod_user
spring.datasource.password=prod_password`},{type:"point",text:"In this example, production-specific configuration values like database URL and credentials are set in the `application.properties` file to ensure the app runs in the production environment."},{type:"header",level:3,text:"Lesson 27.8: Monitoring and Logging in Production"},{type:"point",text:"Once deployed, monitoring and logging are critical to ensure that the application is running smoothly and to troubleshoot issues."},{type:"point",text:"Spring Boot integrates with popular monitoring and logging tools like Prometheus, Grafana, and ELK stack for centralized logging and application performance monitoring."},{type:"example",code:`# Example: Enabling Prometheus Metrics
management.metrics.export.prometheus.enabled=true`},{type:"point",text:"This configuration enables Prometheus metrics collection for the Spring Boot application, allowing you to integrate with Grafana for visualization and alerting."}],project1:[{type:"margin"},{type:"header",level:2,text:"Project 1: Simple Calculator"},{type:"point",text:"Create a command-line calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division."},{type:"example",code:`import java.util.Scanner;

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
`}],project6:[{type:"margin"},{type:"header",level:2,text:"Project 6: Advanced Inventory Management System with User Authentication"},{type:"point",text:"Create a more advanced inventory management system where users can add, remove, view, and update products. The system should include user authentication and role-based access (admin and regular user). Data should be saved and loaded from a file."},{type:"example",code:`import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

// User class for authentication
class User {
    private String username;
    private String password;
    private boolean isAdmin;

    public User(String username, String password, boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    public String getUsername() {
        return username;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public boolean authenticate(String password) {
        return this.password.equals(password);
    }
}

// Product class
class Product implements Serializable {
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

// Inventory Management System
public class AdvancedInventoryManagementSystem {
    private static ArrayList<Product> inventory = new ArrayList<>();
    private static ArrayList<User> users = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        loadInventory();
        createDefaultUsers();

        User loggedInUser = authenticateUser(scanner);
        if (loggedInUser == null) {
            System.out.println("Authentication failed. Exiting.");
            return;
        }

        while (true) {
            System.out.println("Advanced Inventory Management System");
            System.out.println("1. Add Product");
            System.out.println("2. View Products");
            System.out.println("3. Remove Product");
            System.out.println("4. Update Product");
            System.out.println("5. Save & Exit");
            System.out.print("Choose an option: ");
            int option = scanner.nextInt();

            switch (option) {
                case 1:
                    if (loggedInUser.isAdmin()) {
                        addProduct(scanner);
                    } else {
                        System.out.println("Access denied. Only admins can add products.");
                    }
                    break;
                case 2:
                    viewProducts();
                    break;
                case 3:
                    if (loggedInUser.isAdmin()) {
                        removeProduct(scanner);
                    } else {
                        System.out.println("Access denied. Only admins can remove products.");
                    }
                    break;
                case 4:
                    if (loggedInUser.isAdmin()) {
                        updateProduct(scanner);
                    } else {
                        System.out.println("Access denied. Only admins can update products.");
                    }
                    break;
                case 5:
                    saveInventory();
                    System.out.println("Exiting and saving the system.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }

    private static void createDefaultUsers() {
        users.add(new User("admin", "admin123", true));
        users.add(new User("user", "user123", false));
    }

    private static User authenticateUser(Scanner scanner) {
        System.out.print("Enter username: ");
        String username = scanner.next();
        System.out.print("Enter password: ");
        String password = scanner.next();

        for (User user : users) {
            if (user.getUsername().equals(username) && user.authenticate(password)) {
                System.out.println("Authentication successful. Welcome, " + username);
                return user;
            }
        }
        return null;
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

    private static void updateProduct(Scanner scanner) {
        System.out.print("Enter the name of the product to update: ");
        scanner.nextLine(); // Consume newline
        String name = scanner.nextLine();

        for (Product product : inventory) {
            if (product.getName().equalsIgnoreCase(name)) {
                System.out.print("Enter new quantity: ");
                int quantity = scanner.nextInt();
                System.out.print("Enter new price: ");
                double price = scanner.nextDouble();

                product.setQuantity(quantity);
                product.setPrice(price);
                System.out.println("Product updated successfully.");
                return;
            }
        }
        System.out.println("Product not found.");
    }

    private static void loadInventory() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("inventory.dat"))) {
            inventory = (ArrayList<Product>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("No saved inventory found. Starting fresh.");
        }
    }

    private static void saveInventory() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("inventory.dat"))) {
            oos.writeObject(inventory);
        } catch (IOException e) {
            System.out.println("Error saving inventory.");
        }
    }
}
`}],project7:[{type:"margin"},{type:"header",level:2,text:"Project 7: Online Exam System"},{type:"point",text:"Develop an online exam system where teachers can add questions, and students can take tests. The questions should be stored using JSON, and the system should support multithreading for exam timers. Testing should be done using JUnit."},{type:"example",code:`import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import java.util.List;
import org.json.*;
import java.util.concurrent.*;

// Question class for managing questions
class Question {
    private String questionText;
    private List<String> options;
    private int correctOption;

    public Question(String questionText, List<String> options, int correctOption) {
        this.questionText = questionText;
        this.options = options;
        this.correctOption = correctOption;
    }

    public String getQuestionText() {
        return questionText;
    }

    public List<String> getOptions() {
        return options;
    }

    public int getCorrectOption() {
        return correctOption;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("questionText", questionText);
        json.put("options", options);
        json.put("correctOption", correctOption);
        return json;
    }

    public static Question fromJSON(JSONObject json) {
        String questionText = json.getString("questionText");
        List<String> options = new ArrayList<>();
        JSONArray optionsArray = json.getJSONArray("options");
        for (int i = 0; i < optionsArray.length(); i++) {
            options.add(optionsArray.getString(i));
        }
        int correctOption = json.getInt("correctOption");
        return new Question(questionText, options, correctOption);
    }
}

// ExamSystem class to manage the system
public class OnlineExamSystem {
    private static List<Question> questions = new ArrayList<>();
    private static String questionFile = "questions.json";

    public static void main(String[] args) {
        loadQuestions();

        JFrame frame = new JFrame("Online Exam System");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel userLabel = new JLabel("Username:");
        userLabel.setBounds(10, 20, 80, 25);
        panel.add(userLabel);

        JTextField userText = new JTextField(20);
        userText.setBounds(100, 20, 165, 25);
        panel.add(userText);

        JButton teacherButton = new JButton("Teacher");
        teacherButton.setBounds(10, 80, 150, 25);
        panel.add(teacherButton);

        JButton studentButton = new JButton("Student");
        studentButton.setBounds(10, 110, 150, 25);
        panel.add(studentButton);

        teacherButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("teacher")) {
                openTeacherPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only teachers can add questions.");
            }
        });

        studentButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("student")) {
                openStudentPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only students can take exams.");
            }
        });
    }

    // Teacher Panel to add questions
    private static void openTeacherPanel() {
        JFrame teacherFrame = new JFrame("Teacher - Add Questions");
        teacherFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        teacherFrame.add(panel);
        panel.setLayout(new GridLayout(5, 2));

        JTextField questionText = new JTextField();
        panel.add(new JLabel("Question:"));
        panel.add(questionText);

        JTextField option1 = new JTextField();
        panel.add(new JLabel("Option 1:"));
        panel.add(option1);

        JTextField option2 = new JTextField();
        panel.add(new JLabel("Option 2:"));
        panel.add(option2);

        JTextField option3 = new JTextField();
        panel.add(new JLabel("Option 3:"));
        panel.add(option3);

        JTextField correctOption = new JTextField();
        panel.add(new JLabel("Correct Option (1/2/3):"));
        panel.add(correctOption);

        JButton addButton = new JButton("Add Question");
        addButton.addActionListener(e -> {
            String qText = questionText.getText();
            List<String> options = Arrays.asList(option1.getText(), option2.getText(), option3.getText());
            int correct = Integer.parseInt(correctOption.getText());

            questions.add(new Question(qText, options, correct));
            saveQuestions();
            JOptionPane.showMessageDialog(null, "Question added successfully.");
        });
        panel.add(addButton);

        teacherFrame.setVisible(true);
    }

    // Student Panel to take exams
    private static void openStudentPanel() {
        JFrame studentFrame = new JFrame("Student - Take Exam");
        studentFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        studentFrame.add(panel);
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        for (Question question : questions) {
            panel.add(new JLabel(question.getQuestionText()));

            ButtonGroup group = new ButtonGroup();
            for (String option : question.getOptions()) {
                JRadioButton button = new JRadioButton(option);
                group.add(button);
                panel.add(button);
            }
        }

        JButton submitButton = new JButton("Submit");
        panel.add(submitButton);

        // Timer with multithreading
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        scheduler.schedule(() -> {
            JOptionPane.showMessageDialog(null, "Time's up!");
            studentFrame.dispose();
        }, 5, TimeUnit.MINUTES);

        submitButton.addActionListener(e -> {
            JOptionPane.showMessageDialog(null, "Exam Submitted!");
            studentFrame.dispose();
            scheduler.shutdownNow();
        });

        studentFrame.setVisible(true);
    }

    // Load questions from JSON file
    private static void loadQuestions() {
        try (BufferedReader reader = new BufferedReader(new FileReader(questionFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONArray jsonArray = new JSONArray(jsonText.toString());
            for (int i = 0; i < jsonArray.length(); i++) {
                questions.add(Question.fromJSON(jsonArray.getJSONObject(i)));
            }
        } catch (IOException e) {
            System.out.println("Error loading questions: " + e.getMessage());
        }
    }

    // Save questions to JSON file
    private static void saveQuestions() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(questionFile))) {
            JSONArray jsonArray = new JSONArray();
            for (Question question : questions) {
                jsonArray.put(question.toJSON());
            }
            writer.write(jsonArray.toString());
        } catch (IOException e) {
            System.out.println("Error saving questions: " + e.getMessage());
        }
    }
}
`}],project8:[{type:"margin"},{type:"header",level:2,text:"Project 8: Online Course Management System"},{type:"point",text:"Develop an online course management system where teachers can create courses, upload materials, assign quizzes or assignments, and track student progress. Students can view materials, complete quizzes, and see their progress."},{type:"example",code:`import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import org.json.*;
import java.util.concurrent.*;

class Course {
    private String courseName;
    private String courseMaterial;
    private List<String> assignments;
    private List<String> quizzes;

    public Course(String courseName, String courseMaterial) {
        this.courseName = courseName;
        this.courseMaterial = courseMaterial;
        this.assignments = new ArrayList<>();
        this.quizzes = new ArrayList<>();
    }

    public String getCourseName() {
        return courseName;
    }

    public String getCourseMaterial() {
        return courseMaterial;
    }

    public void addAssignment(String assignment) {
        assignments.add(assignment);
    }

    public void addQuiz(String quiz) {
        quizzes.add(quiz);
    }

    public List<String> getAssignments() {
        return assignments;
    }

    public List<String> getQuizzes() {
        return quizzes;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("courseName", courseName);
        json.put("courseMaterial", courseMaterial);
        json.put("assignments", assignments);
        json.put("quizzes", quizzes);
        return json;
    }

    public static Course fromJSON(JSONObject json) {
        String courseName = json.getString("courseName");
        String courseMaterial = json.getString("courseMaterial");
        Course course = new Course(courseName, courseMaterial);

        JSONArray assignmentArray = json.getJSONArray("assignments");
        for (int i = 0; i < assignmentArray.length(); i++) {
            course.addAssignment(assignmentArray.getString(i));
        }

        JSONArray quizArray = json.getJSONArray("quizzes");
        for (int i = 0; i < quizArray.length(); i++) {
            course.addQuiz(quizArray.getString(i));
        }

        return course;
    }
}

// Main class for Online Course Management
public class OnlineCourseManagementSystem {
    private static List<Course> courses = new ArrayList<>();
    private static String coursesFile = "courses.json";

    public static void main(String[] args) {
        loadCourses();

        JFrame frame = new JFrame("Online Course Management System");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel userLabel = new JLabel("Username:");
        userLabel.setBounds(10, 20, 80, 25);
        panel.add(userLabel);

        JTextField userText = new JTextField(20);
        userText.setBounds(100, 20, 165, 25);
        panel.add(userText);

        JButton teacherButton = new JButton("Teacher");
        teacherButton.setBounds(10, 80, 150, 25);
        panel.add(teacherButton);

        JButton studentButton = new JButton("Student");
        studentButton.setBounds(10, 110, 150, 25);
        panel.add(studentButton);

        teacherButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("teacher")) {
                openTeacherPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only teachers can manage courses.");
            }
        });

        studentButton.addActionListener(e -> {
            String username = userText.getText();
            if (username.equalsIgnoreCase("student")) {
                openStudentPanel();
            } else {
                JOptionPane.showMessageDialog(null, "Access denied. Only students can view courses.");
            }
        });
    }

    // Teacher panel to create courses and upload materials
    private static void openTeacherPanel() {
        JFrame teacherFrame = new JFrame("Teacher - Manage Courses");
        teacherFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        teacherFrame.add(panel);
        panel.setLayout(new GridLayout(5, 2));

        JTextField courseNameField = new JTextField();
        panel.add(new JLabel("Course Name:"));
        panel.add(courseNameField);

        JTextField courseMaterialField = new JTextField();
        panel.add(new JLabel("Course Material:"));
        panel.add(courseMaterialField);

        JButton addCourseButton = new JButton("Add Course");
        addCourseButton.addActionListener(e -> {
            String courseName = courseNameField.getText();
            String courseMaterial = courseMaterialField.getText();

            Course course = new Course(courseName, courseMaterial);
            courses.add(course);
            saveCourses();
            JOptionPane.showMessageDialog(null, "Course added successfully.");
        });
        panel.add(addCourseButton);

        JButton manageCoursesButton = new JButton("Manage Courses");
        manageCoursesButton.addActionListener(e -> openManageCoursesPanel());
        panel.add(manageCoursesButton);

        teacherFrame.setVisible(true);
    }

    // Manage existing courses (assignments and quizzes)
    private static void openManageCoursesPanel() {
        JFrame manageFrame = new JFrame("Teacher - Manage Existing Courses");
        manageFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        manageFrame.add(panel);
        panel.setLayout(new GridLayout(4, 2));

        JComboBox<String> courseComboBox = new JComboBox<>();
        for (Course course : courses) {
            courseComboBox.addItem(course.getCourseName());
        }
        panel.add(new JLabel("Select Course:"));
        panel.add(courseComboBox);

        JTextField assignmentField = new JTextField();
        panel.add(new JLabel("New Assignment:"));
        panel.add(assignmentField);

        JButton addAssignmentButton = new JButton("Add Assignment");
        addAssignmentButton.addActionListener(e -> {
            String selectedCourseName = (String) courseComboBox.getSelectedItem();
            String assignment = assignmentField.getText();
            courses.stream()
                    .filter(c -> c.getCourseName().equals(selectedCourseName))
                    .findFirst()
                    .ifPresent(c -> c.addAssignment(assignment));
            saveCourses();
            JOptionPane.showMessageDialog(null, "Assignment added successfully.");
        });
        panel.add(addAssignmentButton);

        JTextField quizField = new JTextField();
        panel.add(new JLabel("New Quiz:"));
        panel.add(quizField);

        JButton addQuizButton = new JButton("Add Quiz");
        addQuizButton.addActionListener(e -> {
            String selectedCourseName = (String) courseComboBox.getSelectedItem();
            String quiz = quizField.getText();
            courses.stream()
                    .filter(c -> c.getCourseName().equals(selectedCourseName))
                    .findFirst()
                    .ifPresent(c -> c.addQuiz(quiz));
            saveCourses();
            JOptionPane.showMessageDialog(null, "Quiz added successfully.");
        });
        panel.add(addQuizButton);

        manageFrame.setVisible(true);
    }

    // Student panel to view courses and track progress
    private static void openStudentPanel() {
        JFrame studentFrame = new JFrame("Student - View Courses");
        studentFrame.setSize(400, 300);
        JPanel panel = new JPanel();
        studentFrame.add(panel);
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));

        for (Course course : courses) {
            JLabel courseLabel = new JLabel("Course: " + course.getCourseName());
            panel.add(courseLabel);

            JLabel materialLabel = new JLabel("Material: " + course.getCourseMaterial());
            panel.add(materialLabel);

            JButton viewAssignmentsButton = new JButton("View Assignments");
            panel.add(viewAssignmentsButton);
            viewAssignmentsButton.addActionListener(e -> {
                JOptionPane.showMessageDialog(null, "Assignments: " + course.getAssignments());
            });

            JButton viewQuizzesButton = new JButton("View Quizzes");
            panel.add(viewQuizzesButton);
            viewQuizzesButton.addActionListener(e -> {
                JOptionPane.showMessageDialog(null, "Quizzes: " + course.getQuizzes());
            });
        }

        studentFrame.setVisible(true);
    }

    // Load courses from JSON file
    private static void loadCourses() {
        try (BufferedReader reader = new BufferedReader(new FileReader(coursesFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONArray jsonArray = new JSONArray(jsonText.toString());
            for (int i = 0; i < jsonArray.length(); i++) {
                courses.add(Course.fromJSON(jsonArray.getJSONObject(i)));
            }
        } catch (IOException e) {
            System.out.println("Error loading courses: " + e.getMessage());
        }
    }

    // Save courses to JSON file
    private static void saveCourses() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(coursesFile))) {
            JSONArray jsonArray = new JSONArray();
            for (Course course : courses) {
                jsonArray.put(course.to
                jsonArray.put(course.toJSON());
            }
            writer.write(jsonArray.toString());
        } catch (IOException e) {
            System.out.println("Error saving courses: " + e.getMessage());
        }
    }
}
`},{type:"header",level:3,text:"Example JSON Structure:"},{type:"example",code:`
[
    {
        "courseName": "Introduction to Programming",
        "courseMaterial": "ProgrammingBasics.pdf",
        "assignments": ["Assignment 1", "Assignment 2"],
        "quizzes": ["Quiz 1", "Quiz 2"]
    },
    {
        "courseName": "Data Structures",
        "courseMaterial": "DataStructures.pdf",
        "assignments": ["Assignment 1"],
        "quizzes": ["Quiz 1"]
    }
]

      `}],project9:[{type:"margin"},{type:"header",level:2,text:"Project 9: Fitness Tracker Application"},{type:"point",text:"Develop a fitness tracker application that allows users to log their activities, set fitness goals, track health metrics, and receive exercise routine suggestions."},{type:"example",code:`import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import org.json.*;

class User {
    private String name;
    private int age;
    private double weight;
    private double height;
    private List<Activity> activities;

    public User(String name, int age, double weight, double height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.activities = new ArrayList<>();
    }

    public void addActivity(Activity activity) {
        activities.add(activity);
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("name", name);
        json.put("age", age);
        json.put("weight", weight);
        json.put("height", height);
        
        JSONArray activityArray = new JSONArray();
        for (Activity activity : activities) {
            activityArray.put(activity.toJSON());
        }
        json.put("activities", activityArray);
        return json;
    }

    public static User fromJSON(JSONObject json) {
        String name = json.getString("name");
        int age = json.getInt("age");
        double weight = json.getDouble("weight");
        double height = json.getDouble("height");
        
        User user = new User(name, age, weight, height);
        JSONArray activityArray = json.getJSONArray("activities");
        for (int i = 0; i < activityArray.length(); i++) {
            user.addActivity(Activity.fromJSON(activityArray.getJSONObject(i)));
        }
        return user;
    }
}

class Activity {
    private String name;
    private int duration; // in minutes
    private int caloriesBurned;

    public Activity(String name, int duration, int caloriesBurned) {
        this.name = name;
        this.duration = duration;
        this.caloriesBurned = caloriesBurned;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("name", name);
        json.put("duration", duration);
        json.put("caloriesBurned", caloriesBurned);
        return json;
    }

    public static Activity fromJSON(JSONObject json) {
        String name = json.getString("name");
        int duration = json.getInt("duration");
        int caloriesBurned = json.getInt("caloriesBurned");
        return new Activity(name, duration, caloriesBurned);
    }

    @Override
    public String toString() {
        return name + " - Duration: " + duration + " mins, Calories Burned: " + caloriesBurned;
    }
}

// Main class for Fitness Tracker Application
public class FitnessTrackerApplication {
    private static User user;
    private static String userFile = "user.json";

    public static void main(String[] args) {
        loadUser();

        JFrame frame = new JFrame("Fitness Tracker Application");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel nameLabel = new JLabel("Name:");
        nameLabel.setBounds(10, 20, 80, 25);
        panel.add(nameLabel);

        JTextField nameField = new JTextField(user.getName());
        nameField.setBounds(100, 20, 165, 25);
        panel.add(nameField);

        JButton addActivityButton = new JButton("Add Activity");
        addActivityButton.setBounds(10, 80, 150, 25);
        panel.add(addActivityButton);

        JButton viewActivitiesButton = new JButton("View Activities");
        viewActivitiesButton.setBounds(10, 110, 150, 25);
        panel.add(viewActivitiesButton);

        addActivityButton.addActionListener(e -> {
            String activityName = JOptionPane.showInputDialog("Enter activity name:");
            int duration = Integer.parseInt(JOptionPane.showInputDialog("Enter duration in minutes:"));
            int caloriesBurned = Integer.parseInt(JOptionPane.showInputDialog("Enter calories burned:"));

            Activity activity = new Activity(activityName, duration, caloriesBurned);
            user.addActivity(activity);
            saveUser();
            JOptionPane.showMessageDialog(null, "Activity added successfully.");
        });

        viewActivitiesButton.addActionListener(e -> {
            StringBuilder activitiesList = new StringBuilder("Activities:
");
            for (Activity activity : user.getActivities()) {
                activitiesList.append(activity).append("\\n");
            }
            JOptionPane.showMessageDialog(null, activitiesList.toString());
        });
    }

    // Load user data from JSON file
    private static void loadUser() {
        try (BufferedReader reader = new BufferedReader(new FileReader(userFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONObject json = new JSONObject(jsonText.toString());
            user = User.fromJSON(json);
        } catch (IOException e) {
            System.out.println("Error loading user data: " + e.getMessage());
            user = new User("Default User", 25, 70.0, 175.0); // Default user if not found
        }
    }

    // Save user data to JSON file
    private static void saveUser() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(userFile))) {
            writer.write(user.toJSON().toString());
        } catch (IOException e) {
            System.out.println("Error saving user data: " + e.getMessage());
        }
    }
}
`}],project10:[{type:"margin"},{type:"header",level:2,text:"Project 10: Job Portal with Resume Parsing"},{type:"point",text:"Develop a job portal that enables job seekers to upload their resumes, which are then automatically parsed to extract relevant information and matched with job listings."},{type:"example",code:`import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.util.*;
import org.json.*;
import java.util.regex.*;

class JobListing {
    private String title;
    private String description;
    private String company;
    
    public JobListing(String title, String description, String company) {
        this.title = title;
        this.description = description;
        this.company = company;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCompany() {
        return company;
    }

    public JSONObject toJSON() {
        JSONObject json = new JSONObject();
        json.put("title", title);
        json.put("description", description);
        json.put("company", company);
        return json;
    }

    public static JobListing fromJSON(JSONObject json) {
        return new JobListing(json.getString("title"), json.getString("description"), json.getString("company"));
    }
}

class ResumeParser {
    public static Map<String, String> parseResume(String resumeText) {
        Map<String, String> parsedData = new HashMap<>();

        // Example regex patterns for name and email
        String namePattern = "Name: (.+)";
        String emailPattern = "Email: (\\S+@\\S+\\.\\S+)";
        
        Matcher nameMatcher = Pattern.compile(namePattern).matcher(resumeText);
        Matcher emailMatcher = Pattern.compile(emailPattern).matcher(resumeText);

        if (nameMatcher.find()) {
            parsedData.put("name", nameMatcher.group(1));
        }
        if (emailMatcher.find()) {
            parsedData.put("email", emailMatcher.group(1));
        }

        return parsedData;
    }
}

// Main class for Job Portal
public class JobPortal {
    private static List<JobListing> jobListings = new ArrayList<>();
    private static String jobListingsFile = "job_listings.json";

    public static void main(String[] args) {
        loadJobListings();

        JFrame frame = new JFrame("Job Portal");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JButton uploadResumeButton = new JButton("Upload Resume");
        uploadResumeButton.setBounds(10, 20, 150, 25);
        panel.add(uploadResumeButton);

        JButton viewJobListingsButton = new JButton("View Job Listings");
        viewJobListingsButton.setBounds(10, 60, 150, 25);
        panel.add(viewJobListingsButton);

        uploadResumeButton.addActionListener(e -> {
            JFileChooser fileChooser = new JFileChooser();
            int returnValue = fileChooser.showOpenDialog(null);
            if (returnValue == JFileChooser.APPROVE_OPTION) {
                File file = fileChooser.getSelectedFile();
                String resumeText = readResumeFile(file);
                Map<String, String> parsedData = ResumeParser.parseResume(resumeText);
                JOptionPane.showMessageDialog(null, "Parsed Data: " + parsedData);
            }
        });

        viewJobListingsButton.addActionListener(e -> {
            StringBuilder jobListingsList = new StringBuilder("Job Listings:
");
            for (JobListing job : jobListings) {
                jobListingsList.append(job.getTitle()).append(" at ").append(job.getCompany()).append("\\n");
            }
            JOptionPane.showMessageDialog(null, jobListingsList.toString());
        });
    }

    // Load job listings from JSON file
    private static void loadJobListings() {
        try (BufferedReader reader = new BufferedReader(new FileReader(jobListingsFile))) {
            StringBuilder jsonText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonText.append(line);
            }
            JSONArray jsonArray = new JSONArray(jsonText.toString());
            for (int i = 0; i < jsonArray.length(); i++) {
                jobListings.add(JobListing.fromJSON(jsonArray.getJSONObject(i)));
            }
        } catch (IOException e) {
            System.out.println("Error loading job listings: " + e.getMessage());
        }
    }

    // Read resume file and return its content as a string
    private static String readResumeFile(File file) {
        StringBuilder resumeText = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                resumeText.append(line).append("\\n");
            }
        } catch (IOException e) {
            System.out.println("Error reading resume file: " + e.getMessage());
        }
        return resumeText.toString();
    }
}
`},{type:"header",level:3,text:"Example Resume Format:"},{type:"example",code:`
Name: John Doe
Email: john.doe@example.com

Experience:
- Software Engineer at Tech Company A
- Data Analyst at Data Company B
      `}]};function fD(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(e)}function hD(e){return qe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"},child:[]}]})(e)}function yD(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function bD(e,t){if(e==null)return{};var n,r,a=yD(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function vD(e){if(Array.isArray(e))return sg(e)}function SD(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ED(e,t){if(e){if(typeof e=="string")return sg(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?sg(e,t):void 0}}function wD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xD(e){return vD(e)||SD(e)||ED(e)||wD()}function ja(e){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ja(e)}function TD(e,t){if(ja(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ja(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function AD(e){var t=TD(e,"string");return ja(t)=="symbol"?t:t+""}function mC(e,t,n){return(t=AD(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lg(){return lg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lg.apply(null,arguments)}function $b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function fr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$b(Object(n),!0).forEach(function(r){mC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$b(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function CD(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var zs={};function RD(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return zs[t]||(zs[t]=CD(e)),zs[t]}function kD(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(i){return i!=="token"}),a=RD(r);return a.reduce(function(i,o){return fr(fr({},i),n[o])},t)}function Vb(e){return e.join(" ")}function ID(e,t){var n=0;return function(r){return n+=1,r.map(function(a,i){return gC({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(i)})})}}function gC(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,i=e.useInlineStyles,o=e.key,s=t.properties,l=t.type,u=t.tagName,p=t.value;if(l==="text")return p;if(u){var d=ID(n,i),g;if(!i)g=fr(fr({},s),{},{className:Vb(s.className)});else{var h=Object.keys(n).reduce(function(y,m){return m.split(".").forEach(function(f){y.includes(f)||y.push(f)}),y},[]),v=s.className&&s.className.includes("token")?["token"]:[],b=s.className&&v.concat(s.className.filter(function(y){return!h.includes(y)}));g=fr(fr({},s),{},{className:Vb(b)||void 0,style:kD(s.className,Object.assign({},s.style,a),n)})}var w=d(t.children);return Te.createElement(u,lg({key:o},g),w)}}const ND=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var _D=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Hb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function At(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hb(Object(n),!0).forEach(function(r){mC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var LD=/\n/g;function OD(e){return e.match(LD)}function DD(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,i){var o=i+n;return Te.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(o):r},"".concat(o,`
`))})}function MD(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,i=e.numberStyle,o=i===void 0?{}:i,s=e.startingLineNumber;return Te.createElement("code",{style:Object.assign({},n,a)},DD({lines:t.replace(/\n$/,"").split(`
`),style:o,startingLineNumber:s}))}function PD(e){return"".concat(e.toString().length,".25em")}function fC(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function hC(e,t,n){var r={display:"inline-block",minWidth:PD(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,i=At(At({},r),a);return i}function Ui(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,i=e.showInlineLineNumbers,o=e.lineProps,s=o===void 0?{}:o,l=e.className,u=l===void 0?[]:l,p=e.showLineNumbers,d=e.wrapLongLines,g=typeof s=="function"?s(n):s;if(g.className=u,n&&i){var h=hC(r,n,a);t.unshift(fC(n,h))}return d&p&&(g.style=At(At({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:t}}function yC(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(Ui({children:[a],className:xD(new Set(t))}));else if(a.children){var i=t.concat(a.properties.className);yC(a.children,i).forEach(function(o){return n.push(o)})}}return n}function FD(e,t,n,r,a,i,o,s,l){var u,p=yC(e.value),d=[],g=-1,h=0;function v(x,T){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Ui({children:x,lineNumber:T,lineNumberStyle:s,largestLineNumber:o,showInlineLineNumbers:a,lineProps:n,className:C,showLineNumbers:r,wrapLongLines:l})}function b(x,T){if(r&&T&&a){var C=hC(s,T,o);x.unshift(fC(T,C))}return x}function w(x,T){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||C.length>0?v(x,T,C):b(x,T)}for(var y=function(){var T=p[h],C=T.children[0].value,A=OD(C);if(A){var R=C.split(`
`);R.forEach(function(N,D){var G=r&&d.length+i,Y={type:"text",value:"".concat(N,`
`)};if(D===0){var ee=p.slice(g+1,h).concat(Ui({children:[Y],className:T.properties.className})),q=w(ee,G);d.push(q)}else if(D===R.length-1){var J=p[h+1]&&p[h+1].children&&p[h+1].children[0],te={type:"text",value:"".concat(N)};if(J){var I=Ui({children:[te],className:T.properties.className});p.splice(h+1,0,I)}else{var L=[te],O=w(L,G,T.properties.className);d.push(O)}}else{var P=[Y],j=w(P,G,T.properties.className);d.push(j)}}),g=h}h++};h<p.length;)y();if(g!==p.length-1){var m=p.slice(g+1,p.length);if(m&&m.length){var f=r&&d.length+i,E=w(m,f);d.push(E)}}return t?d:(u=[]).concat.apply(u,d)}function BD(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,i){return gC({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(i)})})}function bC(e){return e&&typeof e.highlightAuto<"u"}function jD(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(bC(t)){var i=ND(t,n);return n==="text"?{value:a,language:"text"}:i?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function UD(e,t){return function(r){var a=r.language,i=r.children,o=r.style,s=o===void 0?t:o,l=r.customStyle,u=l===void 0?{}:l,p=r.codeTagProps,d=p===void 0?{className:a?"language-".concat(a):void 0,style:At(At({},s['code[class*="language-"]']),s['code[class*="language-'.concat(a,'"]')])}:p,g=r.useInlineStyles,h=g===void 0?!0:g,v=r.showLineNumbers,b=v===void 0?!1:v,w=r.showInlineLineNumbers,y=w===void 0?!0:w,m=r.startingLineNumber,f=m===void 0?1:m,E=r.lineNumberContainerStyle,x=r.lineNumberStyle,T=x===void 0?{}:x,C=r.wrapLines,A=r.wrapLongLines,R=A===void 0?!1:A,N=r.lineProps,D=N===void 0?{}:N,G=r.renderer,Y=r.PreTag,ee=Y===void 0?"pre":Y,q=r.CodeTag,J=q===void 0?"code":q,te=r.code,I=te===void 0?(Array.isArray(i)?i[0]:i)||"":te,L=r.astGenerator,O=bD(r,_D);L=L||e;var P=b?Te.createElement(MD,{containerStyle:E,codeStyle:d.style||{},numberStyle:T,startingLineNumber:f,codeString:I}):null,j=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},Re=bC(L)?"hljs":"prismjs",ie=h?Object.assign({},O,{style:Object.assign({},j,u)}):Object.assign({},O,{className:O.className?"".concat(Re," ").concat(O.className):Re,style:Object.assign({},u)});if(R?d.style=At(At({},d.style),{},{whiteSpace:"pre-wrap"}):d.style=At(At({},d.style),{},{whiteSpace:"pre"}),!L)return Te.createElement(ee,ie,P,Te.createElement(J,d,I));(C===void 0&&G||R)&&(C=!0),G=G||BD;var Pe=[{type:"text",value:I}],ge=jD({astGenerator:L,language:a,code:I,defaultCodeValue:Pe});ge.language===null&&(ge.value=Pe);var Fe=ge.value.length+f,Pr=FD(ge,C,D,b,y,f,Fe,T,R);return Te.createElement(ee,ie,Te.createElement(J,d,!y&&P,G({rows:Pr,stylesheet:s,useInlineStyles:h})))}}const GD=["abap","abnf","actionscript","ada","agda","al","antlr4","apacheconf","apex","apl","applescript","aql","arduino","arff","asciidoc","asm6502","asmatmel","aspnet","autohotkey","autoit","avisynth","avro-idl","bash","basic","batch","bbcode","bicep","birb","bison","bnf","brainfuck","brightscript","bro","bsl","c","cfscript","chaiscript","cil","clike","clojure","cmake","cobol","coffeescript","concurnas","coq","cpp","crystal","csharp","cshtml","csp","css-extras","css","csv","cypher","d","dart","dataweave","dax","dhall","diff","django","dns-zone-file","docker","dot","ebnf","editorconfig","eiffel","ejs","elixir","elm","erb","erlang","etlua","excel-formula","factor","false","firestore-security-rules","flow","fortran","fsharp","ftl","gap","gcode","gdscript","gedcom","gherkin","git","glsl","gml","gn","go-module","go","graphql","groovy","haml","handlebars","haskell","haxe","hcl","hlsl","hoon","hpkp","hsts","http","ichigojam","icon","icu-message-format","idris","iecst","ignore","inform7","ini","io","j","java","javadoc","javadoclike","javascript","javastacktrace","jexl","jolie","jq","js-extras","js-templates","jsdoc","json","json5","jsonp","jsstacktrace","jsx","julia","keepalived","keyman","kotlin","kumir","kusto","latex","latte","less","lilypond","liquid","lisp","livescript","llvm","log","lolcode","lua","magma","makefile","markdown","markup-templating","markup","matlab","maxscript","mel","mermaid","mizar","mongodb","monkey","moonscript","n1ql","n4js","nand2tetris-hdl","naniscript","nasm","neon","nevod","nginx","nim","nix","nsis","objectivec","ocaml","opencl","openqasm","oz","parigp","parser","pascal","pascaligo","pcaxis","peoplecode","perl","php-extras","php","phpdoc","plsql","powerquery","powershell","processing","prolog","promql","properties","protobuf","psl","pug","puppet","pure","purebasic","purescript","python","q","qml","qore","qsharp","r","racket","reason","regex","rego","renpy","rest","rip","roboconf","robotframework","ruby","rust","sas","sass","scala","scheme","scss","shell-session","smali","smalltalk","smarty","sml","solidity","solution-file","soy","sparql","splunk-spl","sqf","sql","squirrel","stan","stylus","swift","systemd","t4-cs","t4-templating","t4-vb","tap","tcl","textile","toml","tremor","tsx","tt2","turtle","twig","typescript","typoscript","unrealscript","uorazor","uri","v","vala","vbnet","velocity","verilog","vhdl","vim","visual-basic","warpscript","wasm","web-idl","wiki","wolfram","wren","xeora","xml-doc","xojo","xquery","yaml","yang","zig"];var qD=$D,zD=Object.prototype.hasOwnProperty;function $D(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)zD.call(n,r)&&(e[r]=n[r])}return e}var vC=SC,Ff=SC.prototype;Ff.space=null;Ff.normal={};Ff.property={};function SC(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Wb=qD,VD=vC,HD=WD;function WD(e){for(var t=e.length,n=[],r=[],a=-1,i,o;++a<t;)i=e[a],n.push(i.property),r.push(i.normal),o=i.space;return new VD(Wb.apply(null,n),Wb.apply(null,r),o)}var Bf=JD;function JD(e){return e.toLowerCase()}var EC=wC,mt=wC.prototype;mt.space=null;mt.attribute=null;mt.property=null;mt.boolean=!1;mt.booleanish=!1;mt.overloadedBoolean=!1;mt.number=!1;mt.commaSeparated=!1;mt.spaceSeparated=!1;mt.commaOrSpaceSeparated=!1;mt.mustUseProperty=!1;mt.defined=!1;function wC(e,t){this.property=e,this.attribute=t}var Nt={},KD=0;Nt.boolean=Hn();Nt.booleanish=Hn();Nt.overloadedBoolean=Hn();Nt.number=Hn();Nt.spaceSeparated=Hn();Nt.commaSeparated=Hn();Nt.commaOrSpaceSeparated=Hn();function Hn(){return Math.pow(2,++KD)}var xC=EC,Jb=Nt,TC=jf;jf.prototype=new xC;jf.prototype.defined=!0;var AC=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],YD=AC.length;function jf(e,t,n,r){var a=-1,i;for(Kb(this,"space",r),xC.call(this,e,t);++a<YD;)i=AC[a],Kb(this,i,(n&Jb[i])===Jb[i])}function Kb(e,t,n){n&&(e[t]=n)}var Yb=Bf,XD=vC,ZD=TC,Ya=QD;function QD(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,i=e.transform,o={},s={},l,u;for(l in a)u=new ZD(l,i(r,l),a[l],t),n.indexOf(l)!==-1&&(u.mustUseProperty=!0),o[l]=u,s[Yb(l)]=l,s[Yb(u.attribute)]=l;return new XD(o,s,t)}var eM=Ya,tM=eM({space:"xlink",transform:nM,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function nM(e,t){return"xlink:"+t.slice(5).toLowerCase()}var rM=Ya,aM=rM({space:"xml",transform:iM,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function iM(e,t){return"xml:"+t.slice(3).toLowerCase()}var oM=sM;function sM(e,t){return t in e?e[t]:t}var lM=oM,CC=uM;function uM(e,t){return lM(e,t.toLowerCase())}var cM=Ya,dM=CC,pM=cM({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:dM,properties:{xmlns:null,xmlnsXLink:null}}),Uf=Nt,mM=Ya,$e=Uf.booleanish,it=Uf.number,Tn=Uf.spaceSeparated,gM=mM({transform:fM,properties:{ariaActiveDescendant:null,ariaAtomic:$e,ariaAutoComplete:null,ariaBusy:$e,ariaChecked:$e,ariaColCount:it,ariaColIndex:it,ariaColSpan:it,ariaControls:Tn,ariaCurrent:null,ariaDescribedBy:Tn,ariaDetails:null,ariaDisabled:$e,ariaDropEffect:Tn,ariaErrorMessage:null,ariaExpanded:$e,ariaFlowTo:Tn,ariaGrabbed:$e,ariaHasPopup:null,ariaHidden:$e,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Tn,ariaLevel:it,ariaLive:null,ariaModal:$e,ariaMultiLine:$e,ariaMultiSelectable:$e,ariaOrientation:null,ariaOwns:Tn,ariaPlaceholder:null,ariaPosInSet:it,ariaPressed:$e,ariaReadOnly:$e,ariaRelevant:null,ariaRequired:$e,ariaRoleDescription:Tn,ariaRowCount:it,ariaRowIndex:it,ariaRowSpan:it,ariaSelected:$e,ariaSetSize:it,ariaSort:null,ariaValueMax:it,ariaValueMin:it,ariaValueNow:it,ariaValueText:null,role:null}});function fM(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Mr=Nt,hM=Ya,yM=CC,z=Mr.boolean,bM=Mr.overloadedBoolean,Hr=Mr.booleanish,ne=Mr.number,Be=Mr.spaceSeparated,Ei=Mr.commaSeparated,vM=hM({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:yM,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ei,acceptCharset:Be,accessKey:Be,action:null,allow:null,allowFullScreen:z,allowPaymentRequest:z,allowUserMedia:z,alt:null,as:null,async:z,autoCapitalize:null,autoComplete:Be,autoFocus:z,autoPlay:z,capture:z,charSet:null,checked:z,cite:null,className:Be,cols:ne,colSpan:null,content:null,contentEditable:Hr,controls:z,controlsList:Be,coords:ne|Ei,crossOrigin:null,data:null,dateTime:null,decoding:null,default:z,defer:z,dir:null,dirName:null,disabled:z,download:bM,draggable:Hr,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:z,formTarget:null,headers:Be,height:ne,hidden:z,high:ne,href:null,hrefLang:null,htmlFor:Be,httpEquiv:Be,id:null,imageSizes:null,imageSrcSet:Ei,inputMode:null,integrity:null,is:null,isMap:z,itemId:null,itemProp:Be,itemRef:Be,itemScope:z,itemType:Be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:z,low:ne,manifest:null,max:null,maxLength:ne,media:null,method:null,min:null,minLength:ne,multiple:z,muted:z,name:null,nonce:null,noModule:z,noValidate:z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:z,optimum:ne,pattern:null,ping:Be,placeholder:null,playsInline:z,poster:null,preload:null,readOnly:z,referrerPolicy:null,rel:Be,required:z,reversed:z,rows:ne,rowSpan:ne,sandbox:Be,scope:null,scoped:z,seamless:z,selected:z,shape:null,size:ne,sizes:null,slot:null,span:ne,spellCheck:Hr,src:null,srcDoc:null,srcLang:null,srcSet:Ei,start:ne,step:null,style:null,tabIndex:ne,target:null,title:null,translate:null,type:null,typeMustMatch:z,useMap:null,value:Hr,width:ne,wrap:null,align:null,aLink:null,archive:Be,axis:null,background:null,bgColor:null,border:ne,borderColor:null,bottomMargin:ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:z,declare:z,event:null,face:null,frame:null,frameBorder:null,hSpace:ne,leftMargin:ne,link:null,longDesc:null,lowSrc:null,marginHeight:ne,marginWidth:ne,noResize:z,noHref:z,noShade:z,noWrap:z,object:null,profile:null,prompt:null,rev:null,rightMargin:ne,rules:null,scheme:null,scrolling:Hr,standby:null,summary:null,text:null,topMargin:ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:z,disableRemotePlayback:z,prefix:null,property:null,results:ne,security:null,unselectable:null}}),SM=HD,EM=tM,wM=aM,xM=pM,TM=gM,AM=vM,CM=SM([wM,EM,xM,TM,AM]),RM=Bf,kM=TC,IM=EC,Gf="data",NM=OM,_M=/^data[-\w.:]+$/i,RC=/-[a-z]/g,LM=/[A-Z]/g;function OM(e,t){var n=RM(t),r=t,a=IM;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Gf&&_M.test(t)&&(t.charAt(4)==="-"?r=DM(t):t=MM(t),a=kM),new a(r,t))}function DM(e){var t=e.slice(5).replace(RC,FM);return Gf+t.charAt(0).toUpperCase()+t.slice(1)}function MM(e){var t=e.slice(4);return RC.test(t)?e:(t=t.replace(LM,PM),t.charAt(0)!=="-"&&(t="-"+t),Gf+t)}function PM(e){return"-"+e.toLowerCase()}function FM(e){return e.charAt(1).toUpperCase()}var BM=jM,Xb=/[#.]/g;function jM(e,t){for(var n=e||"",r=t||"div",a={},i=0,o,s,l;i<n.length;)Xb.lastIndex=i,l=Xb.exec(n),o=n.slice(i,l?l.index:n.length),o&&(s?s==="#"?a.id=o:a.className?a.className.push(o):a.className=[o]:r=o,i+=o.length),l&&(s=l[0],i++);return{type:"element",tagName:r,properties:a,children:[]}}var qf={};qf.parse=qM;qf.stringify=zM;var Zb="",UM=" ",GM=/[ \t\n\r\f]+/g;function qM(e){var t=String(e||Zb).trim();return t===Zb?[]:t.split(GM)}function zM(e){return e.join(UM).trim()}var zf={};zf.parse=$M;zf.stringify=VM;var ug=",",Qb=" ",ea="";function $M(e){for(var t=[],n=String(e||ea),r=n.indexOf(ug),a=0,i=!1,o;!i;)r===-1&&(r=n.length,i=!0),o=n.slice(a,r).trim(),(o||!i)&&t.push(o),a=r+1,r=n.indexOf(ug,a);return t}function VM(e,t){var n=t||{},r=n.padLeft===!1?ea:Qb,a=n.padRight?Qb:ea;return e[e.length-1]===ea&&(e=e.concat(ea)),e.join(a+ug+r).trim()}var HM=NM,ev=Bf,WM=BM,tv=qf.parse,nv=zf.parse,JM=YM,KM={}.hasOwnProperty;function YM(e,t,n){var r=n?tP(n):null;return a;function a(o,s){var l=WM(o,t),u=Array.prototype.slice.call(arguments,2),p=l.tagName.toLowerCase(),d;if(l.tagName=r&&KM.call(r,p)?r[p]:p,s&&XM(s,l)&&(u.unshift(s),s=null),s)for(d in s)i(l.properties,d,s[d]);return kC(l.children,u),l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}function i(o,s,l){var u,p,d;l==null||l!==l||(u=HM(e,s),p=u.property,d=l,typeof d=="string"&&(u.spaceSeparated?d=tv(d):u.commaSeparated?d=nv(d):u.commaOrSpaceSeparated&&(d=tv(nv(d).join(" ")))),p==="style"&&typeof l!="string"&&(d=eP(d)),p==="className"&&o.className&&(d=o.className.concat(d)),o[p]=QM(u,p,d))}}function XM(e,t){return typeof e=="string"||"length"in e||ZM(t.tagName,e)}function ZM(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function kC(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)kC(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function QM(e,t,n){var r,a,i;if(typeof n!="object"||!("length"in n))return rv(e,t,n);for(a=n.length,r=-1,i=[];++r<a;)i[r]=rv(e,t,n[r]);return i}function rv(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||ev(n)===ev(t))&&(r=!0),r}function eP(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function tP(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var nP=CM,rP=JM,IC=rP(nP,"div");IC.displayName="html";var aP=IC,iP=aP;const oP="Æ",sP="&",lP="Á",uP="Â",cP="À",dP="Å",pP="Ã",mP="Ä",gP="©",fP="Ç",hP="Ð",yP="É",bP="Ê",vP="È",SP="Ë",EP=">",wP="Í",xP="Î",TP="Ì",AP="Ï",CP="<",RP="Ñ",kP="Ó",IP="Ô",NP="Ò",_P="Ø",LP="Õ",OP="Ö",DP='"',MP="®",PP="Þ",FP="Ú",BP="Û",jP="Ù",UP="Ü",GP="Ý",qP="á",zP="â",$P="´",VP="æ",HP="à",WP="&",JP="å",KP="ã",YP="ä",XP="¦",ZP="ç",QP="¸",e3="¢",t3="©",n3="¤",r3="°",a3="÷",i3="é",o3="ê",s3="è",l3="ð",u3="ë",c3="½",d3="¼",p3="¾",m3=">",g3="í",f3="î",h3="¡",y3="ì",b3="¿",v3="ï",S3="«",E3="<",w3="¯",x3="µ",T3="·",A3=" ",C3="¬",R3="ñ",k3="ó",I3="ô",N3="ò",_3="ª",L3="º",O3="ø",D3="õ",M3="ö",P3="¶",F3="±",B3="£",j3='"',U3="»",G3="®",q3="§",z3="­",$3="¹",V3="²",H3="³",W3="ß",J3="þ",K3="×",Y3="ú",X3="û",Z3="ù",Q3="¨",eF="ü",tF="ý",nF="¥",rF="ÿ",aF={AElig:oP,AMP:sP,Aacute:lP,Acirc:uP,Agrave:cP,Aring:dP,Atilde:pP,Auml:mP,COPY:gP,Ccedil:fP,ETH:hP,Eacute:yP,Ecirc:bP,Egrave:vP,Euml:SP,GT:EP,Iacute:wP,Icirc:xP,Igrave:TP,Iuml:AP,LT:CP,Ntilde:RP,Oacute:kP,Ocirc:IP,Ograve:NP,Oslash:_P,Otilde:LP,Ouml:OP,QUOT:DP,REG:MP,THORN:PP,Uacute:FP,Ucirc:BP,Ugrave:jP,Uuml:UP,Yacute:GP,aacute:qP,acirc:zP,acute:$P,aelig:VP,agrave:HP,amp:WP,aring:JP,atilde:KP,auml:YP,brvbar:XP,ccedil:ZP,cedil:QP,cent:e3,copy:t3,curren:n3,deg:r3,divide:a3,eacute:i3,ecirc:o3,egrave:s3,eth:l3,euml:u3,frac12:c3,frac14:d3,frac34:p3,gt:m3,iacute:g3,icirc:f3,iexcl:h3,igrave:y3,iquest:b3,iuml:v3,laquo:S3,lt:E3,macr:w3,micro:x3,middot:T3,nbsp:A3,not:C3,ntilde:R3,oacute:k3,ocirc:I3,ograve:N3,ordf:_3,ordm:L3,oslash:O3,otilde:D3,ouml:M3,para:P3,plusmn:F3,pound:B3,quot:j3,raquo:U3,reg:G3,sect:q3,shy:z3,sup1:$3,sup2:V3,sup3:H3,szlig:W3,thorn:J3,times:K3,uacute:Y3,ucirc:X3,ugrave:Z3,uml:Q3,uuml:eF,yacute:tF,yen:nF,yuml:rF},iF={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var NC=oF;function oF(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var sF=lF;function lF(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var uF=cF;function cF(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var dF=uF,pF=NC,mF=gF;function gF(e){return dF(e)||pF(e)}var wi,fF=59,hF=yF;function yF(e){var t="&"+e+";",n;return wi=wi||document.createElement("i"),wi.innerHTML=t,n=wi.textContent,n.charCodeAt(n.length-1)===fF&&e!=="semi"||n===t?!1:n}var av=aF,iv=iF,bF=NC,vF=sF,_C=mF,SF=hF,EF=DF,wF={}.hasOwnProperty,Kn=String.fromCharCode,xF=Function.prototype,ov={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},TF=9,sv=10,AF=12,CF=32,lv=38,RF=59,kF=60,IF=61,NF=35,_F=88,LF=120,OF=65533,Yn="named",$f="hexadecimal",Vf="decimal",Hf={};Hf[$f]=16;Hf[Vf]=10;var Ko={};Ko[Yn]=_C;Ko[Vf]=bF;Ko[$f]=vF;var LC=1,OC=2,DC=3,MC=4,PC=5,cg=6,FC=7,wn={};wn[LC]="Named character references must be terminated by a semicolon";wn[OC]="Numeric character references must be terminated by a semicolon";wn[DC]="Named character references cannot be empty";wn[MC]="Numeric character references cannot be empty";wn[PC]="Named character references must be known";wn[cg]="Numeric character references cannot be disallowed";wn[FC]="Numeric character references cannot be outside the permissible Unicode range";function DF(e,t){var n={},r,a;t||(t={});for(a in ov)r=t[a],n[a]=r??ov[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),MF(e,n)}function MF(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,i=t.reference,o=t.warning,s=t.textContext,l=t.referenceContext,u=t.warningContext,p=t.position,d=t.indent||[],g=e.length,h=0,v=-1,b=p.column||1,w=p.line||1,y="",m=[],f,E,x,T,C,A,R,N,D,G,Y,ee,q,J,te,I,L,O,P;for(typeof n=="string"&&(n=n.charCodeAt(0)),I=j(),N=o?Re:xF,h--,g++;++h<g;)if(C===sv&&(b=d[v]||1),C=e.charCodeAt(h),C===lv){if(R=e.charCodeAt(h+1),R===TF||R===sv||R===AF||R===CF||R===lv||R===kF||R!==R||n&&R===n){y+=Kn(C),b++;continue}for(q=h+1,ee=q,P=q,R===NF?(P=++ee,R=e.charCodeAt(P),R===_F||R===LF?(J=$f,P=++ee):J=Vf):J=Yn,f="",Y="",T="",te=Ko[J],P--;++P<g&&(R=e.charCodeAt(P),!!te(R));)T+=Kn(R),J===Yn&&wF.call(av,T)&&(f=T,Y=av[T]);x=e.charCodeAt(P)===RF,x&&(P++,E=J===Yn?SF(T):!1,E&&(f=T,Y=E)),O=1+P-q,!x&&!r||(T?J===Yn?(x&&!Y?N(PC,1):(f!==T&&(P=ee+f.length,O=1+P-ee,x=!1),x||(D=f?LC:DC,t.attribute?(R=e.charCodeAt(P),R===IF?(N(D,O),Y=null):_C(R)?Y=null:N(D,O)):N(D,O))),A=Y):(x||N(OC,O),A=parseInt(T,Hf[J]),PF(A)?(N(FC,O),A=Kn(OF)):A in iv?(N(cg,O),A=iv[A]):(G="",FF(A)&&N(cg,O),A>65535&&(A-=65536,G+=Kn(A>>>10|55296),A=56320|A&1023),A=G+Kn(A))):J!==Yn&&N(MC,O)),A?(ie(),I=j(),h=P-1,b+=P-q+1,m.push(A),L=j(),L.offset++,i&&i.call(l,A,{start:I,end:L},e.slice(q-1,P)),I=L):(T=e.slice(q-1,P),y+=T,b+=T.length,h=P-1)}else C===10&&(w++,v++,b=0),C===C?(y+=Kn(C),b++):ie();return m.join("");function j(){return{line:w,column:b,offset:h+(p.offset||0)}}function Re(Pe,ge){var Fe=j();Fe.column+=ge,Fe.offset+=ge,o.call(u,wn[Pe],Fe,Pe)}function ie(){y&&(m.push(y),a&&a.call(s,y,{start:I,end:j()}),y="")}}function PF(e){return e>=55296&&e<=57343||e>1114111}function FF(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var BC={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function m(f){return f instanceof l?new l(f.type,m(f.content),f.alias):Array.isArray(f)?f.map(m):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++i}),m.__id},clone:function m(f,E){E=E||{};var x,T;switch(s.util.type(f)){case"Object":if(T=s.util.objId(f),E[T])return E[T];x={},E[T]=x;for(var C in f)f.hasOwnProperty(C)&&(x[C]=m(f[C],E));return x;case"Array":return T=s.util.objId(f),E[T]?E[T]:(x=[],E[T]=x,f.forEach(function(A,R){x[R]=m(A,E)}),x);default:return f}},getLanguage:function(m){for(;m;){var f=a.exec(m.className);if(f)return f[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,f){m.className=m.className.replace(RegExp(a,"gi"),""),m.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(x){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(m){var f=document.getElementsByTagName("script");for(var E in f)if(f[E].src==m)return f[E]}return null}},isActive:function(m,f,E){for(var x="no-"+f;m;){var T=m.classList;if(T.contains(f))return!0;if(T.contains(x))return!1;m=m.parentElement}return!!E}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(m,f){var E=s.util.clone(s.languages[m]);for(var x in f)E[x]=f[x];return E},insertBefore:function(m,f,E,x){x=x||s.languages;var T=x[m],C={};for(var A in T)if(T.hasOwnProperty(A)){if(A==f)for(var R in E)E.hasOwnProperty(R)&&(C[R]=E[R]);E.hasOwnProperty(A)||(C[A]=T[A])}var N=x[m];return x[m]=C,s.languages.DFS(s.languages,function(D,G){G===N&&D!=m&&(this[D]=C)}),C},DFS:function m(f,E,x,T){T=T||{};var C=s.util.objId;for(var A in f)if(f.hasOwnProperty(A)){E.call(f,A,f[A],x||A);var R=f[A],N=s.util.type(R);N==="Object"&&!T[C(R)]?(T[C(R)]=!0,m(R,E,null,T)):N==="Array"&&!T[C(R)]&&(T[C(R)]=!0,m(R,E,A,T))}}},plugins:{},highlightAll:function(m,f){s.highlightAllUnder(document,m,f)},highlightAllUnder:function(m,f,E){var x={callback:E,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),s.hooks.run("before-all-elements-highlight",x);for(var T=0,C;C=x.elements[T++];)s.highlightElement(C,f===!0,x.callback)},highlightElement:function(m,f,E){var x=s.util.getLanguage(m),T=s.languages[x];s.util.setLanguage(m,x);var C=m.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(C,x);var A=m.textContent,R={element:m,language:x,grammar:T,code:A};function N(G){R.highlightedCode=G,s.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,s.hooks.run("after-highlight",R),s.hooks.run("complete",R),E&&E.call(R.element)}if(s.hooks.run("before-sanity-check",R),C=R.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!R.code){s.hooks.run("complete",R),E&&E.call(R.element);return}if(s.hooks.run("before-highlight",R),!R.grammar){N(s.util.encode(R.code));return}if(f&&r.Worker){var D=new Worker(s.filename);D.onmessage=function(G){N(G.data)},D.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else N(s.highlight(R.code,R.grammar,R.language))},highlight:function(m,f,E){var x={code:m,grammar:f,language:E};if(s.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=s.tokenize(x.code,x.grammar),s.hooks.run("after-tokenize",x),l.stringify(s.util.encode(x.tokens),x.language)},tokenize:function(m,f){var E=f.rest;if(E){for(var x in E)f[x]=E[x];delete f.rest}var T=new d;return g(T,T.head,m),p(m,T,f,T.head,0),v(T)},hooks:{all:{},add:function(m,f){var E=s.hooks.all;E[m]=E[m]||[],E[m].push(f)},run:function(m,f){var E=s.hooks.all[m];if(!(!E||!E.length))for(var x=0,T;T=E[x++];)T(f)}},Token:l};r.Prism=s;function l(m,f,E,x){this.type=m,this.content=f,this.alias=E,this.length=(x||"").length|0}l.stringify=function m(f,E){if(typeof f=="string")return f;if(Array.isArray(f)){var x="";return f.forEach(function(N){x+=m(N,E)}),x}var T={type:f.type,content:m(f.content,E),tag:"span",classes:["token",f.type],attributes:{},language:E},C=f.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(T.classes,C):T.classes.push(C)),s.hooks.run("wrap",T);var A="";for(var R in T.attributes)A+=" "+R+'="'+(T.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+A+">"+T.content+"</"+T.tag+">"};function u(m,f,E,x){m.lastIndex=f;var T=m.exec(E);if(T&&x&&T[1]){var C=T[1].length;T.index+=C,T[0]=T[0].slice(C)}return T}function p(m,f,E,x,T,C){for(var A in E)if(!(!E.hasOwnProperty(A)||!E[A])){var R=E[A];R=Array.isArray(R)?R:[R];for(var N=0;N<R.length;++N){if(C&&C.cause==A+","+N)return;var D=R[N],G=D.inside,Y=!!D.lookbehind,ee=!!D.greedy,q=D.alias;if(ee&&!D.pattern.global){var J=D.pattern.toString().match(/[imsuy]*$/)[0];D.pattern=RegExp(D.pattern.source,J+"g")}for(var te=D.pattern||D,I=x.next,L=T;I!==f.tail&&!(C&&L>=C.reach);L+=I.value.length,I=I.next){var O=I.value;if(f.length>m.length)return;if(!(O instanceof l)){var P=1,j;if(ee){if(j=u(te,L,m,Y),!j||j.index>=m.length)break;var ge=j.index,Re=j.index+j[0].length,ie=L;for(ie+=I.value.length;ge>=ie;)I=I.next,ie+=I.value.length;if(ie-=I.value.length,L=ie,I.value instanceof l)continue;for(var Pe=I;Pe!==f.tail&&(ie<Re||typeof Pe.value=="string");Pe=Pe.next)P++,ie+=Pe.value.length;P--,O=m.slice(L,ie),j.index-=L}else if(j=u(te,0,O,Y),!j)continue;var ge=j.index,Fe=j[0],Pr=O.slice(0,ge),oh=O.slice(ge+Fe.length),es=L+O.length;C&&es>C.reach&&(C.reach=es);var Za=I.prev;Pr&&(Za=g(f,Za,Pr),L+=Pr.length),h(f,Za,P);var KC=new l(A,G?s.tokenize(Fe,G):Fe,q,Fe);if(I=g(f,Za,KC),oh&&g(f,I,oh),P>1){var ts={cause:A+","+N,reach:es};p(m,f,E,I.prev,L,ts),C&&ts.reach>C.reach&&(C.reach=ts.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},f={value:null,prev:m,next:null};m.next=f,this.head=m,this.tail=f,this.length=0}function g(m,f,E){var x=f.next,T={value:E,prev:f,next:x};return f.next=T,x.prev=T,m.length++,T}function h(m,f,E){for(var x=f.next,T=0;T<E&&x!==m.tail;T++)x=x.next;f.next=x,x.prev=f,m.length-=T}function v(m){for(var f=[],E=m.head.next;E!==m.tail;)f.push(E.value),E=E.next;return f}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(m){var f=JSON.parse(m.data),E=f.language,x=f.code,T=f.immediateClose;r.postMessage(s.highlight(x,s.languages[E],E)),T&&r.close()},!1)),s;var b=s.util.currentScript();b&&(s.filename=b.src,b.hasAttribute("data-manual")&&(s.manual=!0));function w(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",w):window.requestAnimationFrame?window.requestAnimationFrame(w):window.setTimeout(w,16)}return s}(t);e.exports&&(e.exports=n),typeof Gi<"u"&&(Gi.Prism=n)})(BC);var BF=BC.exports,jF=Wf;Wf.displayName="markup";Wf.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Wf(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var o={};o[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var UF=Jf;Jf.displayName="css";Jf.aliases=[];function Jf(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}var GF=Kf;Kf.displayName="clike";Kf.aliases=[];function Kf(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var qF=Yf;Yf.displayName="javascript";Yf.aliases=["js"];function Yf(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ta=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Gi=="object"?Gi:{},zF=iB();ta.Prism={manual:!0,disableWorkerMessageHandler:!0};var $F=iP,VF=EF,jC=BF,HF=jF,WF=UF,JF=GF,KF=qF;zF();var Xf={}.hasOwnProperty;function UC(){}UC.prototype=jC;var ye=new UC,YF=ye;ye.highlight=ZF;ye.register=Xa;ye.alias=XF;ye.registered=QF;ye.listLanguages=eB;Xa(HF);Xa(WF);Xa(JF);Xa(KF);ye.util.encode=rB;ye.Token.stringify=tB;function Xa(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");ye.languages[e.displayName]===void 0&&e(ye)}function XF(e,t){var n=ye.languages,r=e,a,i,o,s;t&&(r={},r[e]=t);for(a in r)for(i=r[a],i=typeof i=="string"?[i]:i,o=i.length,s=-1;++s<o;)n[i[s]]=n[a]}function ZF(e,t){var n=jC.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(ye.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Xf.call(ye.languages,t))r=ye.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function QF(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Xf.call(ye.languages,e)}function eB(){var e=ye.languages,t=[],n;for(n in e)Xf.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function tB(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:ye.util.type(e)==="Array"?nB(e,t):(r={type:e.type,content:ye.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),ye.hooks.run("wrap",r),$F(r.tag+"."+r.classes.join("."),aB(r.attributes),r.content))}function nB(e,t){for(var n=[],r=e.length,a=-1,i;++a<r;)i=e[a],i!==""&&i!==null&&i!==void 0&&n.push(i);for(a=-1,r=n.length;++a<r;)i=n[a],n[a]=ye.Token.stringify(i,t,n);return n}function rB(e){return e}function aB(e){var t;for(t in e)e[t]=VF(e[t]);return e}function iB(){var e="Prism"in ta,t=e?ta.Prism:void 0;return n;function n(){e?ta.Prism=t:delete ta.Prism,e=void 0,t=void 0}}const oB={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};var $s,uv;function sB(){if(uv)return $s;uv=1,$s=e,e.displayName="abap",e.aliases=[];function e(t){t.languages.abap={comment:/^\*.*/m,string:/(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/,"string-template":{pattern:/([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,lookbehind:!0,alias:"string"},"eol-comment":{pattern:/(^|\s)".*/m,lookbehind:!0,alias:"comment"},keyword:{pattern:/(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,lookbehind:!0},number:/\b\d+\b/,operator:{pattern:/(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,lookbehind:!0},"string-operator":{pattern:/(\s)&&?(?=\s)/,lookbehind:!0,alias:"keyword"},"token-operator":[{pattern:/(\w)(?:->?|=>|[~|{}])(?=\w)/,lookbehind:!0,alias:"punctuation"},{pattern:/[|{}]/,alias:"punctuation"}],punctuation:/[,.:()]/}}return $s}var Vs,cv;function lB(){if(cv)return Vs;cv=1,Vs=e,e.displayName="abnf",e.aliases=[];function e(t){(function(n){var r="(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";n.languages.abnf={comment:/;.*/,string:{pattern:/(?:%[is])?"[^"\n\r]*"/,greedy:!0,inside:{punctuation:/^%[is]/}},range:{pattern:/%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,alias:"number"},terminal:{pattern:/%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,alias:"number"},repetition:{pattern:/(^|[^\w-])(?:\d*\*\d*|\d+)/,lookbehind:!0,alias:"operator"},definition:{pattern:/(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,lookbehind:!0,alias:"keyword",inside:{punctuation:/<|>/}},"core-rule":{pattern:RegExp("(?:(^|[^<\\w-])"+r+"|<"+r+">)(?![\\w-])","i"),lookbehind:!0,alias:["rule","constant"],inside:{punctuation:/<|>/}},rule:{pattern:/(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,lookbehind:!0,inside:{punctuation:/<|>/}},operator:/=\/?|\//,punctuation:/[()\[\]]/}})(t)}return Vs}var Hs,dv;function uB(){if(dv)return Hs;dv=1,Hs=e,e.displayName="actionscript",e.aliases=[];function e(t){t.languages.actionscript=t.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),t.languages.actionscript["class-name"].alias="function",delete t.languages.actionscript.parameter,delete t.languages.actionscript["literal-property"],t.languages.markup&&t.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:t.languages.markup}})}return Hs}var Ws,pv;function cB(){if(pv)return Ws;pv=1,Ws=e,e.displayName="ada",e.aliases=[];function e(t){t.languages.ada={comment:/--.*/,string:/"(?:""|[^"\r\f\n])*"/,number:[{pattern:/\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i},{pattern:/\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i}],"attr-name":/\b'\w+/,keyword:/\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,boolean:/\b(?:false|true)\b/i,operator:/<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,punctuation:/\.\.?|[,;():]/,char:/'.'/,variable:/\b[a-z](?:\w)*\b/i}}return Ws}var Js,mv;function dB(){if(mv)return Js;mv=1,Js=e,e.displayName="agda",e.aliases=[];function e(t){(function(n){n.languages.agda={comment:/\{-[\s\S]*?(?:-\}|$)|--.*/,string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},punctuation:/[(){}⦃⦄.;@]/,"class-name":{pattern:/((?:data|record) +)\S+/,lookbehind:!0},function:{pattern:/(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,lookbehind:!0},operator:{pattern:/(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,lookbehind:!0},keyword:/\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/}})(t)}return Js}var Ks,gv;function pB(){if(gv)return Ks;gv=1,Ks=e,e.displayName="al",e.aliases=[];function e(t){t.languages.al={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,greedy:!0},function:{pattern:/(\b(?:event|procedure|trigger)\s+|(?:^|[^.])\.\s*)[a-z_]\w*(?=\s*\()/i,lookbehind:!0},keyword:[/\b(?:array|asserterror|begin|break|case|do|downto|else|end|event|exit|for|foreach|function|if|implements|in|indataset|interface|internal|local|of|procedure|program|protected|repeat|runonclient|securityfiltering|suppressdispose|temporary|then|to|trigger|until|var|while|with|withevents)\b/i,/\b(?:action|actions|addafter|addbefore|addfirst|addlast|area|assembly|chartpart|codeunit|column|controladdin|cuegroup|customizes|dataitem|dataset|dotnet|elements|enum|enumextension|extends|field|fieldattribute|fieldelement|fieldgroup|fieldgroups|fields|filter|fixed|grid|group|key|keys|label|labels|layout|modify|moveafter|movebefore|movefirst|movelast|page|pagecustomization|pageextension|part|profile|query|repeater|report|requestpage|schema|separator|systempart|table|tableelement|tableextension|textattribute|textelement|type|usercontrol|value|xmlport)\b/i],number:/\b(?:0x[\da-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(?:F|LL?|U(?:LL?)?)?\b/i,boolean:/\b(?:false|true)\b/i,variable:/\b(?:Curr(?:FieldNo|Page|Report)|x?Rec|RequestOptionsPage)\b/,"class-name":/\b(?:automation|biginteger|bigtext|blob|boolean|byte|char|clienttype|code|completiontriggererrorlevel|connectiontype|database|dataclassification|datascope|date|dateformula|datetime|decimal|defaultlayout|dialog|dictionary|dotnetassembly|dotnettypedeclaration|duration|errorinfo|errortype|executioncontext|executionmode|fieldclass|fieldref|fieldtype|file|filterpagebuilder|guid|httpclient|httpcontent|httpheaders|httprequestmessage|httpresponsemessage|instream|integer|joker|jsonarray|jsonobject|jsontoken|jsonvalue|keyref|list|moduledependencyinfo|moduleinfo|none|notification|notificationscope|objecttype|option|outstream|pageresult|record|recordid|recordref|reportformat|securityfilter|sessionsettings|tableconnectiontype|tablefilter|testaction|testfield|testfilterfield|testpage|testpermissions|testrequestpage|text|textbuilder|textconst|textencoding|time|transactionmodel|transactiontype|variant|verbosity|version|view|views|webserviceactioncontext|webserviceactionresultcode|xmlattribute|xmlattributecollection|xmlcdata|xmlcomment|xmldeclaration|xmldocument|xmldocumenttype|xmlelement|xmlnamespacemanager|xmlnametable|xmlnode|xmlnodelist|xmlprocessinginstruction|xmlreadoptions|xmltext|xmlwriteoptions)\b/i,operator:/\.\.|:[=:]|[-+*/]=?|<>|[<>]=?|=|\b(?:and|div|mod|not|or|xor)\b/i,punctuation:/[()\[\]{}:.;,]/}}return Ks}var Ys,fv;function mB(){if(fv)return Ys;fv=1,Ys=e,e.displayName="antlr4",e.aliases=["g4"];function e(t){t.languages.antlr4={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,string:{pattern:/'(?:\\.|[^\\'\r\n])*'/,greedy:!0},"character-class":{pattern:/\[(?:\\.|[^\\\]\r\n])*\]/,greedy:!0,alias:"regex",inside:{range:{pattern:/([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,lookbehind:!0,alias:"punctuation"},escape:/\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,punctuation:/[\[\]]/}},action:{pattern:/\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,greedy:!0,inside:{content:{pattern:/(\{)[\s\S]+(?=\})/,lookbehind:!0},punctuation:/[{}]/}},command:{pattern:/(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,lookbehind:!0,inside:{function:/\b\w+(?=\s*(?:[,(]|$))/,punctuation:/[,()]/}},annotation:{pattern:/@\w+(?:::\w+)*/,alias:"keyword"},label:{pattern:/#[ \t]*\w+/,alias:"punctuation"},keyword:/\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,definition:[{pattern:/\b[a-z]\w*(?=\s*:)/,alias:["rule","class-name"]},{pattern:/\b[A-Z]\w*(?=\s*:)/,alias:["token","constant"]}],constant:/\b[A-Z][A-Z_]*\b/,operator:/\.\.|->|[|~]|[*+?]\??/,punctuation:/[;:()=]/},t.languages.g4=t.languages.antlr4}return Ys}var Xs,hv;function gB(){if(hv)return Xs;hv=1,Xs=e,e.displayName="apacheconf",e.aliases=[];function e(t){t.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(?:[\w=],?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}},variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/,regex:/\^?.*\$|\^.*\$?/}}return Xs}var Zs,yv;function Zf(){if(yv)return Zs;yv=1,Zs=e,e.displayName="sql",e.aliases=[];function e(t){t.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/}}return Zs}var Qs,bv;function fB(){if(bv)return Qs;bv=1;var e=Zf();Qs=t,t.displayName="apex",t.aliases=[];function t(n){n.register(e),function(r){var a=/\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i,i=/\b(?:(?=[a-z_]\w*\s*[<\[])|(?!<keyword>))[A-Z_]\w*(?:\s*\.\s*[A-Z_]\w*)*\b(?:\s*(?:\[\s*\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*/.source.replace(/<keyword>/g,function(){return a.source});function o(l){return RegExp(l.replace(/<CLASS-NAME>/g,function(){return i}),"i")}var s={keyword:a,punctuation:/[()\[\]{};,:.<>]/};r.languages.apex={comment:r.languages.clike.comment,string:r.languages.clike.string,sql:{pattern:/((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,lookbehind:!0,greedy:!0,alias:"language-sql",inside:r.languages.sql},annotation:{pattern:/@\w+\b/,alias:"punctuation"},"class-name":[{pattern:o(/(\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\s+\w+\s+on)\s+)<CLASS-NAME>/.source),lookbehind:!0,inside:s},{pattern:o(/(\(\s*)<CLASS-NAME>(?=\s*\)\s*[\w(])/.source),lookbehind:!0,inside:s},{pattern:o(/<CLASS-NAME>(?=\s*\w+\s*[;=,(){:])/.source),inside:s}],trigger:{pattern:/(\btrigger\s+)\w+\b/i,lookbehind:!0,alias:"class-name"},keyword:a,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,operator:/[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,punctuation:/[()\[\]{};,.]/}}(n)}return Qs}var el,vv;function hB(){if(vv)return el;vv=1,el=e,e.displayName="apl",e.aliases=[];function e(t){t.languages.apl={comment:/(?:⍝|#[! ]).*$/m,string:{pattern:/'(?:[^'\r\n]|'')*'/,greedy:!0},number:/¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,statement:/:[A-Z][a-z][A-Za-z]*\b/,"system-function":{pattern:/⎕[A-Z]+/i,alias:"function"},constant:/[⍬⌾#⎕⍞]/,function:/[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,"monadic-operator":{pattern:/[\\\/⌿⍀¨⍨⌶&∥]/,alias:"operator"},"dyadic-operator":{pattern:/[.⍣⍠⍤∘⌸@⌺⍥]/,alias:"operator"},assignment:{pattern:/←/,alias:"keyword"},punctuation:/[\[;\]()◇⋄]/,dfn:{pattern:/[{}⍺⍵⍶⍹∇⍫:]/,alias:"builtin"}}}return el}var tl,Sv;function yB(){if(Sv)return tl;Sv=1,tl=e,e.displayName="applescript",e.aliases=[];function e(t){t.languages.applescript={comment:[/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,/--.+/,/#.+/],string:/"(?:\\.|[^"\\\r\n])*"/,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i,operator:[/[&=≠≤≥*+\-\/÷^]|[<>]=?/,/\b(?:(?:begin|end|start)s? with|(?:contains?|(?:does not|doesn't) contain)|(?:is|isn't|is not) (?:contained by|in)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:comes|(?:does not|doesn't) come) (?:after|before)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equal to|equals|is not|isn't)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|as|div|mod|not|or))\b/],keyword:/\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,"class-name":/\b(?:POSIX file|RGB color|alias|application|boolean|centimeters|centimetres|class|constant|cubic centimeters|cubic centimetres|cubic feet|cubic inches|cubic meters|cubic metres|cubic yards|date|degrees Celsius|degrees Fahrenheit|degrees Kelvin|feet|file|gallons|grams|inches|integer|kilograms|kilometers|kilometres|list|liters|litres|meters|metres|miles|number|ounces|pounds|quarts|real|record|reference|script|square feet|square kilometers|square kilometres|square meters|square metres|square miles|square yards|text|yards)\b/,punctuation:/[{}():,¬«»《》]/}}return tl}var nl,Ev;function bB(){if(Ev)return nl;Ev=1,nl=e,e.displayName="aql",e.aliases=[];function e(t){t.languages.aql={comment:/\/\/.*|\/\*[\s\S]*?\*\//,property:{pattern:/([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},identifier:{pattern:/([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},variable:/@@?\w+/,keyword:[{pattern:/(\bWITH\s+)COUNT(?=\s+INTO\b)/i,lookbehind:!0},/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,{pattern:/(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,lookbehind:!0},{pattern:/(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,lookbehind:!0},{pattern:/\bOPTIONS(?=\s*\{)/i}],function:/\b(?!\d)\w+(?=\s*\()/,boolean:/\b(?:false|true)\b/i,range:{pattern:/\.\./,alias:"operator"},number:[/\b0b[01]+/i,/\b0x[0-9a-f]+/i,/(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i],operator:/\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,punctuation:/::|[?.:,;()[\]{}]/}}return nl}var rl,wv;function Wn(){if(wv)return rl;wv=1,rl=e,e.displayName="c",e.aliases=[];function e(t){t.languages.c=t.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),t.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),t.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},t.languages.c.string],char:t.languages.c.char,comment:t.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:t.languages.c}}}}),t.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete t.languages.c.boolean}return rl}var al,xv;function Qf(){if(xv)return al;xv=1;var e=Wn();al=t,t.displayName="cpp",t.aliases=[];function t(n){n.register(e),function(r){var a=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,i=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return a.source});r.languages.cpp=r.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return a.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:a,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),r.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return i})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),r.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r.languages.cpp}}}}),r.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),r.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:r.languages.extend("cpp",{})}}),r.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},r.languages.cpp["base-clause"])}(n)}return al}var il,Tv;function vB(){if(Tv)return il;Tv=1;var e=Qf();il=t,t.displayName="arduino",t.aliases=["ino"];function t(n){n.register(e),n.languages.arduino=n.languages.extend("cpp",{keyword:/\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,constant:/\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,builtin:/\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/}),n.languages.ino=n.languages.arduino}return il}var ol,Av;function SB(){if(Av)return ol;Av=1,ol=e,e.displayName="arff",e.aliases=[];function e(t){t.languages.arff={comment:/%.*/,string:{pattern:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/@(?:attribute|data|end|relation)\b/i,number:/\b\d+(?:\.\d+)?\b/,punctuation:/[{},]/}}return ol}var sl,Cv;function EB(){if(Cv)return sl;Cv=1,sl=e,e.displayName="asciidoc",e.aliases=["adoc"];function e(t){(function(n){var r={pattern:/(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,lookbehind:!0,inside:{quoted:{pattern:/([$`])(?:(?!\1)[^\\]|\\.)*\1/,inside:{punctuation:/^[$`]|[$`]$/}},interpreted:{pattern:/'(?:[^'\\]|\\.)*'/,inside:{punctuation:/^'|'$/}},string:/"(?:[^"\\]|\\.)*"/,variable:/\w+(?==)/,punctuation:/^\[|\]$|,/,operator:/=/,"attr-value":/(?!^\s+$).+/}},a=n.languages.asciidoc={"comment-block":{pattern:/^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,alias:"comment"},table:{pattern:/^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,inside:{specifiers:{pattern:/(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,alias:"attr-value"},punctuation:{pattern:/(^|[^\\])[|!]=*/,lookbehind:!0}}},"passthrough-block":{pattern:/^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^\++|\++$/}},"literal-block":{pattern:/^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^(?:-+|\.+)|(?:-+|\.+)$/}},"other-block":{pattern:/^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/}},"list-punctuation":{pattern:/(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,lookbehind:!0,alias:"punctuation"},"list-label":{pattern:/(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,lookbehind:!0,alias:"symbol"},"indented-block":{pattern:/((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,lookbehind:!0},comment:/^\/\/.*/m,title:{pattern:/^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,alias:"important",inside:{punctuation:/^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/}},"attribute-entry":{pattern:/^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,alias:"tag"},attributes:r,hr:{pattern:/^'{3,}$/m,alias:"punctuation"},"page-break":{pattern:/^<{3,}$/m,alias:"punctuation"},admonition:{pattern:/^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,alias:"keyword"},callout:[{pattern:/(^[ \t]*)<?\d*>/m,lookbehind:!0,alias:"symbol"},{pattern:/<\d+>/,alias:"symbol"}],macro:{pattern:/\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:{function:/^[a-z\d-]+(?=:)/,punctuation:/^::?/,attributes:{pattern:/(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:r.inside}}},inline:{pattern:/(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,lookbehind:!0,inside:{attributes:r,url:{pattern:/^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,inside:{punctuation:/^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/}},"attribute-ref":{pattern:/^\{.+\}$/,inside:{variable:{pattern:/(^\{)[a-z\d,+_-]+/,lookbehind:!0},operator:/^[=?!#%@$]|!(?=[:}])/,punctuation:/^\{|\}$|::?/}},italic:{pattern:/^(['_])[\s\S]+\1$/,inside:{punctuation:/^(?:''?|__?)|(?:''?|__?)$/}},bold:{pattern:/^\*[\s\S]+\*$/,inside:{punctuation:/^\*\*?|\*\*?$/}},punctuation:/^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/}},replacement:{pattern:/\((?:C|R|TM)\)/,alias:"builtin"},entity:/&#?[\da-z]{1,8};/i,"line-continuation":{pattern:/(^| )\+$/m,lookbehind:!0,alias:"punctuation"}};function i(o){o=o.split(" ");for(var s={},l=0,u=o.length;l<u;l++)s[o[l]]=a[o[l]];return s}r.inside.interpreted.inside.rest=i("macro inline replacement entity"),a["passthrough-block"].inside.rest=i("macro"),a["literal-block"].inside.rest=i("callout"),a.table.inside.rest=i("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"),a["other-block"].inside.rest=i("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"),a.title.inside.rest=i("macro inline replacement entity"),n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.value.replace(/&amp;/,"&"))}),n.languages.adoc=n.languages.asciidoc})(t)}return sl}var ll,Rv;function wB(){if(Rv)return ll;Rv=1,ll=e,e.displayName="asm6502",e.aliases=[];function e(t){t.languages.asm6502={comment:/;.*/,directive:{pattern:/\.\w+(?= )/,alias:"property"},string:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,"op-code":{pattern:/\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{1,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[xya]\b/i,alias:"variable"},punctuation:/[(),:]/}}return ll}var ul,kv;function xB(){if(kv)return ul;kv=1,ul=e,e.displayName="asmatmel",e.aliases=[];function e(t){t.languages.asmatmel={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},constant:/\b(?:PORT[A-Z]|DDR[A-Z]|(?:DD|P)[A-Z](?:\d|[0-2]\d|3[01]))\b/,directive:{pattern:/\.\w+(?= )/,alias:"property"},"r-register":{pattern:/\br(?:\d|[12]\d|3[01])\b/,alias:"variable"},"op-code":{pattern:/\b(?:ADC|ADD|ADIW|AND|ANDI|ASR|BCLR|BLD|BRBC|BRBS|BRCC|BRCS|BREAK|BREQ|BRGE|BRHC|BRHS|BRID|BRIE|BRLO|BRLT|BRMI|BRNE|BRPL|BRSH|BRTC|BRTS|BRVC|BRVS|BSET|BST|CALL|CBI|CBR|CLC|CLH|CLI|CLN|CLR|CLS|CLT|CLV|CLZ|COM|CP|CPC|CPI|CPSE|DEC|DES|EICALL|EIJMP|ELPM|EOR|FMUL|FMULS|FMULSU|ICALL|IJMP|IN|INC|JMP|LAC|LAS|LAT|LD|LD[A-Za-z0-9]|LPM|LSL|LSR|MOV|MOVW|MUL|MULS|MULSU|NEG|NOP|OR|ORI|OUT|POP|PUSH|RCALL|RET|RETI|RJMP|ROL|ROR|SBC|SBCI|SBI|SBIC|SBIS|SBIW|SBR|SBRC|SBRS|SEC|SEH|SEI|SEN|SER|SES|SET|SEV|SEZ|SLEEP|SPM|ST|ST[A-Z0-9]|SUB|SUBI|SWAP|TST|WDR|XCH|adc|add|adiw|and|andi|asr|bclr|bld|brbc|brbs|brcc|brcs|break|breq|brge|brhc|brhs|brid|brie|brlo|brlt|brmi|brne|brpl|brsh|brtc|brts|brvc|brvs|bset|bst|call|cbi|cbr|clc|clh|cli|cln|clr|cls|clt|clv|clz|com|cp|cpc|cpi|cpse|dec|des|eicall|eijmp|elpm|eor|fmul|fmuls|fmulsu|icall|ijmp|in|inc|jmp|lac|las|lat|ld|ld[a-z0-9]|lpm|lsl|lsr|mov|movw|mul|muls|mulsu|neg|nop|or|ori|out|pop|push|rcall|ret|reti|rjmp|rol|ror|sbc|sbci|sbi|sbic|sbis|sbiw|sbr|sbrc|sbrs|sec|seh|sei|sen|ser|ses|set|sev|sez|sleep|spm|st|st[a-zA-Z0-9]|sub|subi|swap|tst|wdr|xch)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{2,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[acznvshtixy]\b/i,alias:"variable"},operator:/>>=?|<<=?|&&?|\|\|?|[-+*/%&|^!=<>?]=?/,punctuation:/[(),:]/}}return ul}var cl,Iv;function Yo(){if(Iv)return cl;Iv=1,cl=e,e.displayName="csharp",e.aliases=["dotnet","cs"];function e(t){(function(n){function r(P,j){return P.replace(/<<(\d+)>>/g,function(Re,ie){return"(?:"+j[+ie]+")"})}function a(P,j,Re){return RegExp(r(P,j),"")}function i(P,j){for(var Re=0;Re<j;Re++)P=P.replace(/<<self>>/g,function(){return"(?:"+P+")"});return P.replace(/<<self>>/g,"[^\\s\\S]")}var o={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function s(P){return"\\b(?:"+P.trim().replace(/ /g,"|")+")\\b"}var l=s(o.typeDeclaration),u=RegExp(s(o.type+" "+o.typeDeclaration+" "+o.contextual+" "+o.other)),p=s(o.typeDeclaration+" "+o.contextual+" "+o.other),d=s(o.type+" "+o.typeDeclaration+" "+o.other),g=i(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=i(/\((?:[^()]|<<self>>)*\)/.source,2),v=/@?\b[A-Za-z_]\w*\b/.source,b=r(/<<0>>(?:\s*<<1>>)?/.source,[v,g]),w=r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,b]),y=/\[\s*(?:,\s*)*\]/.source,m=r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[w,y]),f=r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,h,y]),E=r(/\(<<0>>+(?:,<<0>>+)+\)/.source,[f]),x=r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[E,w,y]),T={keyword:u,punctuation:/[<>()?,.:[\]]/},C=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,A=/"(?:\\.|[^\\"\r\n])*"/.source,R=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;n.languages.csharp=n.languages.extend("clike",{string:[{pattern:a(/(^|[^$\\])<<0>>/.source,[R]),lookbehind:!0,greedy:!0},{pattern:a(/(^|[^@$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:a(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[w]),lookbehind:!0,inside:T},{pattern:a(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[v,x]),lookbehind:!0,inside:T},{pattern:a(/(\busing\s+)<<0>>(?=\s*=)/.source,[v]),lookbehind:!0},{pattern:a(/(\b<<0>>\s+)<<1>>/.source,[l,b]),lookbehind:!0,inside:T},{pattern:a(/(\bcatch\s*\(\s*)<<0>>/.source,[w]),lookbehind:!0,inside:T},{pattern:a(/(\bwhere\s+)<<0>>/.source,[v]),lookbehind:!0},{pattern:a(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[m]),lookbehind:!0,inside:T},{pattern:a(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[x,d,v]),inside:T}],keyword:u,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),n.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),n.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:a(/([(,]\s*)<<0>>(?=\s*:)/.source,[v]),lookbehind:!0,alias:"punctuation"}}),n.languages.insertBefore("csharp","class-name",{namespace:{pattern:a(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[v]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:a(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:T},"return-type":{pattern:a(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[x,w]),inside:T,alias:"class-name"},"constructor-invocation":{pattern:a(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[x]),lookbehind:!0,inside:T,alias:"class-name"},"generic-method":{pattern:a(/<<0>>\s*<<1>>(?=\s*\()/.source,[v,g]),inside:{function:a(/^<<0>>/.source,[v]),generic:{pattern:RegExp(g),alias:"class-name",inside:T}}},"type-list":{pattern:a(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[l,b,v,x,u.source,h,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:a(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[b,h]),lookbehind:!0,greedy:!0,inside:n.languages.csharp},keyword:u,"class-name":{pattern:RegExp(x),greedy:!0,inside:T},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var N=A+"|"+C,D=r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[N]),G=i(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[D]),2),Y=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,ee=r(/<<0>>(?:\s*\(<<1>>*\))?/.source,[w,G]);n.languages.insertBefore("csharp","class-name",{attribute:{pattern:a(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[Y,ee]),lookbehind:!0,greedy:!0,inside:{target:{pattern:a(/^<<0>>(?=\s*:)/.source,[Y]),alias:"keyword"},"attribute-arguments":{pattern:a(/\(<<0>>*\)/.source,[G]),inside:n.languages.csharp},"class-name":{pattern:RegExp(w),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var q=/:[^}\r\n]+/.source,J=i(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[D]),2),te=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[J,q]),I=i(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[N]),2),L=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[I,q]);function O(P,j){return{interpolation:{pattern:a(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[P]),lookbehind:!0,inside:{"format-string":{pattern:a(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[j,q]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:n.languages.csharp}}},string:/[\s\S]+/}}n.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:a(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[te]),lookbehind:!0,greedy:!0,inside:O(te,J)},{pattern:a(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[L]),lookbehind:!0,greedy:!0,inside:O(L,I)}],char:{pattern:RegExp(C),greedy:!0}}),n.languages.dotnet=n.languages.cs=n.languages.csharp})(t)}return cl}var dl,Nv;function TB(){if(Nv)return dl;Nv=1;var e=Yo();dl=t,t.displayName="aspnet",t.aliases=[];function t(n){n.register(e),n.languages.aspnet=n.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:n.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:n.languages.csharp}}}),n.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,n.languages.insertBefore("inside","punctuation",{directive:n.languages.aspnet.directive},n.languages.aspnet.tag.inside["attr-value"]),n.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),n.languages.insertBefore("aspnet",n.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:n.languages.csharp||{}}})}return dl}var pl,_v;function AB(){if(_v)return pl;_v=1,pl=e,e.displayName="autohotkey",e.aliases=[];function e(t){t.languages.autohotkey={comment:[{pattern:/(^|\s);.*/,lookbehind:!0},{pattern:/(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,lookbehind:!0,greedy:!0}],tag:{pattern:/^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,lookbehind:!0},string:/"(?:[^"\n\r]|"")*"/,variable:/%\w+%/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,boolean:/\b(?:false|true)\b/,selector:/\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,constant:/\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,builtin:/\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,symbol:/\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,important:/#\b(?:AllowSameLineComments|ClipboardTimeout|CommentFlag|DerefChar|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|If|IfTimeout|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InputLevel|InstallKeybdHook|InstallMouseHook|KeyHistory|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|MenuMaskKey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|Warn|WinActivateForce)\b/i,keyword:/\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,function:/[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,punctuation:/[{}[\]():,]/}}return pl}var ml,Lv;function CB(){if(Lv)return ml;Lv=1,ml=e,e.displayName="autoit",e.aliases=[];function e(t){t.languages.autoit={comment:[/;.*/,{pattern:/(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,lookbehind:!0}],url:{pattern:/(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^[\t ]*)#[\w-]+/m,lookbehind:!0,alias:"keyword"},function:/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,boolean:/\b(?:False|True)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,punctuation:/[\[\]().,:]/}}return ml}var gl,Ov;function RB(){if(Ov)return gl;Ov=1,gl=e,e.displayName="avisynth",e.aliases=["avs"];function e(t){(function(n){function r(p,d){return p.replace(/<<(\d+)>>/g,function(g,h){return d[+h]})}function a(p,d,g){return RegExp(r(p,d),g)}var i=/bool|clip|float|int|string|val/.source,o=[/is(?:bool|clip|float|int|string)|defined|(?:(?:internal)?function|var)?exists?/.source,/apply|assert|default|eval|import|nop|select|undefined/.source,/opt_(?:allowfloataudio|avipadscanlines|dwchannelmask|enable_(?:b64a|planartopackedrgb|v210|y3_10_10|y3_10_16)|usewaveextensible|vdubplanarhack)|set(?:cachemode|maxcpu|memorymax|planarlegacyalignment|workingdir)/.source,/hex(?:value)?|value/.source,/abs|ceil|continued(?:denominator|numerator)?|exp|floor|fmod|frac|log(?:10)?|max|min|muldiv|pi|pow|rand|round|sign|spline|sqrt/.source,/a?sinh?|a?cosh?|a?tan[2h]?/.source,/(?:bit(?:and|not|x?or|[lr]?shift[aslu]?|sh[lr]|sa[lr]|[lr]rotatel?|ro[rl]|te?st|set(?:count)?|cl(?:ea)?r|ch(?:an)?ge?))/.source,/average(?:[bgr]|chroma[uv]|luma)|(?:[rgb]|chroma[uv]|luma|rgb|[yuv](?=difference(?:fromprevious|tonext)))difference(?:fromprevious|tonext)?|[yuvrgb]plane(?:median|min|max|minmaxdifference)/.source,/getprocessinfo|logmsg|script(?:dir(?:utf8)?|file(?:utf8)?|name(?:utf8)?)|setlogparams/.source,/chr|(?:fill|find|left|mid|replace|rev|right)str|format|[lu]case|ord|str(?:cmpi?|fromutf8|len|toutf8)|time|trim(?:all|left|right)/.source,/isversionorgreater|version(?:number|string)/.source,/buildpixeltype|colorspacenametopixeltype/.source,/addautoloaddir|on(?:cpu|cuda)|prefetch|setfiltermtmode/.source].join("|"),s=[/has(?:audio|video)/.source,/height|width/.source,/frame(?:count|rate)|framerate(?:denominator|numerator)/.source,/getparity|is(?:field|frame)based/.source,/bitspercomponent|componentsize|hasalpha|is(?:planar(?:rgba?)?|interleaved|rgb(?:24|32|48|64)?|y(?:8|u(?:va?|y2))?|yv(?:12|16|24|411)|420|422|444|packedrgb)|numcomponents|pixeltype/.source,/audio(?:bits|channels|duration|length(?:[fs]|hi|lo)?|rate)|isaudio(?:float|int)/.source].join("|"),l=[/avi(?:file)?source|directshowsource|image(?:reader|source|sourceanim)|opendmlsource|segmented(?:avisource|directshowsource)|wavsource/.source,/coloryuv|convertbacktoyuy2|convertto(?:RGB(?:24|32|48|64)|(?:planar)?RGBA?|Y8?|YV(?:12|16|24|411)|YUVA?(?:411|420|422|444)|YUY2)|fixluminance|gr[ae]yscale|invert|levels|limiter|mergea?rgb|merge(?:chroma|luma)|rgbadjust|show(?:alpha|blue|green|red)|swapuv|tweak|[uv]toy8?|ytouv/.source,/(?:colorkey|reset)mask|layer|mask(?:hs)?|merge|overlay|subtract/.source,/addborders|(?:bicubic|bilinear|blackman|gauss|lanczos4|lanczos|point|sinc|spline(?:16|36|64))resize|crop(?:bottom)?|flip(?:horizontal|vertical)|(?:horizontal|vertical)?reduceby2|letterbox|skewrows|turn(?:180|left|right)/.source,/blur|fixbrokenchromaupsampling|generalconvolution|(?:spatial|temporal)soften|sharpen/.source,/trim|(?:un)?alignedsplice|(?:assume|assumescaled|change|convert)FPS|(?:delete|duplicate)frame|dissolve|fade(?:in|io|out)[02]?|freezeframe|interleave|loop|reverse|select(?:even|odd|(?:range)?every)/.source,/assume[bt]ff|assume(?:field|frame)based|bob|complementparity|doubleweave|peculiarblend|pulldown|separate(?:columns|fields|rows)|swapfields|weave(?:columns|rows)?/.source,/amplify(?:db)?|assumesamplerate|audiodub(?:ex)?|audiotrim|convertaudioto(?:(?:8|16|24|32)bit|float)|converttomono|delayaudio|ensurevbrmp3sync|get(?:left|right)?channel|kill(?:audio|video)|mergechannels|mixaudio|monotostereo|normalize|resampleaudio|ssrc|supereq|timestretch/.source,/animate|applyrange|conditional(?:filter|reader|select)|frameevaluate|scriptclip|tcp(?:server|source)|writefile(?:end|if|start)?/.source,/imagewriter/.source,/blackness|blankclip|colorbars(?:hd)?|compare|dumpfiltergraph|echo|histogram|info|messageclip|preroll|setgraphanalysis|show(?:framenumber|smpte|time)|showfiveversions|stack(?:horizontal|vertical)|subtitle|tone|version/.source].join("|"),u=[o,s,l].join("|");n.languages.avisynth={comment:[{pattern:/(^|[^\\])\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|\[\*(?:[^\[*]|\[(?!\*)|\*(?!\]))*\*\])*\*\]/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],argument:{pattern:a(/\b(?:<<0>>)\s+("?)\w+\1/.source,[i],"i"),inside:{keyword:/^\w+/}},"argument-label":{pattern:/([,(][\s\\]*)\w+\s*=(?!=)/,lookbehind:!0,inside:{"argument-name":{pattern:/^\w+/,alias:"punctuation"},punctuation:/=$/}},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0,inside:{constant:{pattern:/\b(?:DEFAULT_MT_MODE|(?:MAINSCRIPT|PROGRAM|SCRIPT)DIR|(?:MACHINE|USER)_(?:CLASSIC|PLUS)_PLUGINS)\b/}}}],variable:/\b(?:last)\b/i,boolean:/\b(?:false|no|true|yes)\b/i,keyword:/\b(?:catch|else|for|function|global|if|return|try|while|__END__)\b/i,constant:/\bMT_(?:MULTI_INSTANCE|NICE_FILTER|SERIALIZED|SPECIAL_MT)\b/,"builtin-function":{pattern:a(/\b(?:<<0>>)\b/.source,[u],"i"),alias:"function"},"type-cast":{pattern:a(/\b(?:<<0>>)(?=\s*\()/.source,[i],"i"),alias:"keyword"},function:{pattern:/\b[a-z_]\w*(?=\s*\()|(\.)[a-z_]\w*\b/i,lookbehind:!0},"line-continuation":{pattern:/(^[ \t]*)\\|\\(?=[ \t]*$)/m,lookbehind:!0,alias:"punctuation"},number:/\B\$(?:[\da-f]{6}|[\da-f]{8})\b|(?:(?:\b|\B-)\d+(?:\.\d*)?\b|\B\.\d+\b)/i,operator:/\+\+?|[!=<>]=?|&&|\|\||[?:*/%-]/,punctuation:/[{}\[\]();,.]/},n.languages.avs=n.languages.avisynth})(t)}return gl}var fl,Dv;function kB(){if(Dv)return fl;Dv=1,fl=e,e.displayName="avroIdl",e.aliases=[];function e(t){t.languages["avro-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0},annotation:{pattern:/@(?:[$\w.-]|`[^\r\n`]+`)+/,greedy:!0,alias:"function"},"function-identifier":{pattern:/`[^\r\n`]+`(?=\s*\()/,greedy:!0,alias:"function"},identifier:{pattern:/`[^\r\n`]+`/,greedy:!0},"class-name":{pattern:/(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,lookbehind:!0,greedy:!0},keyword:/\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:[{pattern:/(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,lookbehind:!0},/-?\b(?:Infinity|NaN)\b/],operator:/=/,punctuation:/[()\[\]{}<>.:,;-]/},t.languages.avdl=t.languages["avro-idl"]}return fl}var hl,Mv;function GC(){if(Mv)return hl;Mv=1,hl=e,e.displayName="bash",e.aliases=["shell"];function e(t){(function(n){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:a,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=n.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=i.variable[1].inside,l=0;l<o.length;l++)s[o[l]]=n.languages.bash[o[l]];n.languages.shell=n.languages.bash})(t)}return hl}var yl,Pv;function qC(){if(Pv)return yl;Pv=1,yl=e,e.displayName="basic",e.aliases=[];function e(t){t.languages.basic={comment:{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,greedy:!0},number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,function:/\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,punctuation:/[,;:()]/}}return yl}var bl,Fv;function IB(){if(Fv)return bl;Fv=1,bl=e,e.displayName="batch",e.aliases=[];function e(t){(function(n){var r=/%%?[~:\w]+%?|!\S+!/,a={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},i=/"(?:[\\"]"|[^"])*"(?!")/,o=/(?:\b|-)\d+\b/;n.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:i,parameter:a,variable:r,number:o,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:i,parameter:a,variable:r,number:o,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:i,parameter:a,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:o,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:i,parameter:a,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:r,number:o,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(t)}return bl}var vl,Bv;function NB(){if(Bv)return vl;Bv=1,vl=e,e.displayName="bbcode",e.aliases=["shortcode"];function e(t){t.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},t.languages.shortcode=t.languages.bbcode}return vl}var Sl,jv;function _B(){if(jv)return Sl;jv=1,Sl=e,e.displayName="bicep",e.aliases=[];function e(t){t.languages.bicep={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],property:[{pattern:/([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,lookbehind:!0},{pattern:/([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,lookbehind:!0,greedy:!0}],string:[{pattern:/'''[^'][\s\S]*?'''/,greedy:!0},{pattern:/(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0}],"interpolated-string":{pattern:/(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}\r\n]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0},punctuation:/^\$\{|\}$/}},string:/[\s\S]+/}},datatype:{pattern:/(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,lookbehind:!0,alias:"class-name"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,decorator:/@\w+\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,punctuation:/[{}[\];(),.:]/},t.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside=t.languages.bicep}return Sl}var El,Uv;function LB(){if(Uv)return El;Uv=1,El=e,e.displayName="birb",e.aliases=[];function e(t){t.languages.birb=t.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),t.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})}return El}var wl,Gv;function OB(){if(Gv)return wl;Gv=1;var e=Wn();wl=t,t.displayName="bison",t.aliases=[];function t(n){n.register(e),n.languages.bison=n.languages.extend("c",{}),n.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:n.languages.c}},comment:n.languages.c.comment,string:n.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}return wl}var xl,qv;function DB(){if(qv)return xl;qv=1,xl=e,e.displayName="bnf",e.aliases=["rbnf"];function e(t){t.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/},t.languages.rbnf=t.languages.bnf}return xl}var Tl,zv;function MB(){if(zv)return Tl;zv=1,Tl=e,e.displayName="brainfuck",e.aliases=[];function e(t){t.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/}}return Tl}var Al,$v;function PB(){if($v)return Al;$v=1,Al=e,e.displayName="brightscript",e.aliases=[];function e(t){t.languages.brightscript={comment:/(?:\brem|').*/i,"directive-statement":{pattern:/(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,lookbehind:!0,alias:"property",inside:{"error-message":{pattern:/(^#error).+/,lookbehind:!0},directive:{pattern:/^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,alias:"keyword"},expression:{pattern:/[\s\S]+/,inside:null}}},property:{pattern:/([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},"class-name":{pattern:/(\bAs[\t ]+)\w+/i,lookbehind:!0},keyword:/\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?!\d)\w+(?=[\t ]*\()/,number:/(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,operator:/--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,punctuation:/[.,;()[\]{}]/,constant:/\b(?:LINE_NUM)\b/i},t.languages.brightscript["directive-statement"].inside.expression.inside=t.languages.brightscript}return Al}var Cl,Vv;function FB(){if(Vv)return Cl;Vv=1,Cl=e,e.displayName="bro",e.aliases=[];function e(t){t.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(?:FIXME|TODO|XXX)\b/}},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},boolean:/\b[TF]\b/,function:{pattern:/(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/,lookbehind:!0},builtin:/(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/,constant:{pattern:/(\bconst[ \t]+)\w+/i,lookbehind:!0},keyword:/\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,punctuation:/[{}[\];(),.:]/}}return Cl}var Rl,Hv;function BB(){if(Hv)return Rl;Hv=1,Rl=e,e.displayName="bsl",e.aliases=[];function e(t){t.languages.bsl={comment:/\/\/.*/,string:[{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},{pattern:/'(?:[^'\r\n\\]|\\.)*'/}],keyword:[{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i}],number:{pattern:/(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,lookbehind:!0},operator:[/[<>+\-*/]=?|[%=]/,{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:and|not|or)\b/i}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/,directive:[{pattern:/^([ \t]*)&.*/m,lookbehind:!0,greedy:!0,alias:"important"},{pattern:/^([ \t]*)#.*/gm,lookbehind:!0,greedy:!0,alias:"important"}]},t.languages.oscript=t.languages.bsl}return Rl}var kl,Wv;function jB(){if(Wv)return kl;Wv=1,kl=e,e.displayName="cfscript",e.aliases=[];function e(t){t.languages.cfscript=t.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,inside:{annotation:{pattern:/(?:^|[^.])@[\w\.]+/,alias:"punctuation"}}},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],keyword:/\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,operator:[/\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/,/\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],scope:{pattern:/\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,alias:"global"},type:{pattern:/\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,alias:"builtin"}}),t.languages.insertBefore("cfscript","keyword",{"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"}}),delete t.languages.cfscript["class-name"],t.languages.cfc=t.languages.cfscript}return kl}var Il,Jv;function UB(){if(Jv)return Il;Jv=1;var e=Qf();Il=t,t.displayName="chaiscript",t.aliases=[];function t(n){n.register(e),n.languages.chaiscript=n.languages.extend("clike",{string:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,lookbehind:!0,greedy:!0},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},{pattern:/(\b(?:attr|def)\s+)\w+(?=\s*::)/,lookbehind:!0}],keyword:/\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,number:[n.languages.cpp.number,/\b(?:Infinity|NaN)\b/],operator:/>>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/}),n.languages.insertBefore("chaiscript","operator",{"parameter-type":{pattern:/([,(]\s*)\w+(?=\s+\w)/,lookbehind:!0,alias:"class-name"}}),n.languages.insertBefore("chaiscript","string",{"string-interpolation":{pattern:/(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,lookbehind:!0,inside:{"interpolation-expression":{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:n.languages.chaiscript},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"}}},string:/[\s\S]+/}}})}return Il}var Nl,Kv;function GB(){if(Kv)return Nl;Kv=1,Nl=e,e.displayName="cil",e.aliases=[];function e(t){t.languages.cil={comment:/\/\/.*/,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},directive:{pattern:/(^|\W)\.[a-z]+(?=\s)/,lookbehind:!0,alias:"class-name"},variable:/\[[\w\.]+\]/,keyword:/\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|u?int(?:8|16|32|64)?|iant|idispatch|implements|import|initonly|instance|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,function:/\b(?:(?:constrained|no|readonly|tail|unaligned|volatile)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.\d+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(?:i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.\d+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|castclass|ldvirtftn|beq(?:\.s)?|ckfinite|ldsflda|ldtoken|localloc|mkrefany|rethrow|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|cgt|ceq|box|and|or|br)\b/,boolean:/\b(?:false|true)\b/,number:/\b-?(?:0x[0-9a-f]+|\d+)(?:\.[0-9a-f]+)?\b/i,punctuation:/[{}[\];(),:=]|IL_[0-9A-Za-z]+/}}return Nl}var _l,Yv;function qB(){if(Yv)return _l;Yv=1,_l=e,e.displayName="clojure",e.aliases=[];function e(t){t.languages.clojure={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},char:/\\\w+/,symbol:{pattern:/(^|[\s()\[\]{},])::?[\w*+!?'<>=/.-]+/,lookbehind:!0},keyword:{pattern:/(\()(?:-|->|->>|\.|\.\.|\*|\/|\+|<|<=|=|==|>|>=|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|cond|conj|cons|constantly|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|declare|def|def-|definline|definterface|defmacro|defmethod|defmulti|defn|defn-|defonce|defproject|defprotocol|defrecord|defstruct|deftype|deref|difference|disj|dissoc|distinct|do|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|fn|fnseq|for|frest|gensym|get|get-proxy-class|hash-map|hash-set|identical\?|identity|if|if-let|if-not|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|let|line-seq|list|list\*|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|monitor-enter|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|quote|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|recur|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|set!|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|throw|time|to-array|to-array-2d|tree-seq|true\?|try|union|up|update-proxy|val|vals|var|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[\s)]|$)/,lookbehind:!0},boolean:/\b(?:false|nil|true)\b/,number:{pattern:/(^|[^\w$@])(?:\d+(?:[/.]\d+)?(?:e[+-]?\d+)?|0x[a-f0-9]+|[1-9]\d?r[a-z0-9]+)[lmn]?(?![\w$@])/i,lookbehind:!0},function:{pattern:/((?:^|[^'])\()[\w*+!?'<>=/.-]+(?=[\s)]|$)/,lookbehind:!0},operator:/[#@^`~]/,punctuation:/[{}\[\](),]/}}return _l}var Ll,Xv;function zB(){if(Xv)return Ll;Xv=1,Ll=e,e.displayName="cmake",e.aliases=[];function e(t){t.languages.cmake={comment:/#.*/,string:{pattern:/"(?:[^\\"]|\\.)*"/,greedy:!0,inside:{interpolation:{pattern:/\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,inside:{punctuation:/\$\{|\}/,variable:/\w+/}}}},variable:/\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,property:/\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,keyword:/\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,boolean:/\b(?:FALSE|OFF|ON|TRUE)\b/,namespace:/\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,operator:/\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,inserted:{pattern:/\b\w+::\w+\b/,alias:"class-name"},number:/\b\d+(?:\.\d+)*\b/,function:/\b[a-z_]\w*(?=\s*\()\b/i,punctuation:/[()>}]|\$[<{]/}}return Ll}var Ol,Zv;function $B(){if(Zv)return Ol;Zv=1,Ol=e,e.displayName="cobol",e.aliases=[];function e(t){t.languages.cobol={comment:{pattern:/\*>.*|(^[ \t]*)\*.*/m,lookbehind:!0,greedy:!0},string:{pattern:/[xzgn]?(?:"(?:[^\r\n"]|"")*"(?!")|'(?:[^\r\n']|'')*'(?!'))/i,greedy:!0},level:{pattern:/(^[ \t]*)\d+\b/m,lookbehind:!0,greedy:!0,alias:"number"},"class-name":{pattern:/(\bpic(?:ture)?\s+)(?:(?:[-\w$/,:*+<>]|\.(?!\s|$))(?:\(\d+\))?)+/i,lookbehind:!0,inside:{number:{pattern:/(\()\d+/,lookbehind:!0},punctuation:/[()]/}},keyword:{pattern:/(^|[^\w-])(?:ABORT|ACCEPT|ACCESS|ADD|ADDRESS|ADVANCING|AFTER|ALIGNED|ALL|ALPHABET|ALPHABETIC|ALPHABETIC-LOWER|ALPHABETIC-UPPER|ALPHANUMERIC|ALPHANUMERIC-EDITED|ALSO|ALTER|ALTERNATE|ANY|ARE|AREA|AREAS|AS|ASCENDING|ASCII|ASSIGN|ASSOCIATED-DATA|ASSOCIATED-DATA-LENGTH|AT|ATTRIBUTE|AUTHOR|AUTO|AUTO-SKIP|BACKGROUND-COLOR|BACKGROUND-COLOUR|BASIS|BEEP|BEFORE|BEGINNING|BELL|BINARY|BIT|BLANK|BLINK|BLOCK|BOTTOM|BOUNDS|BY|BYFUNCTION|BYTITLE|CALL|CANCEL|CAPABLE|CCSVERSION|CD|CF|CH|CHAINING|CHANGED|CHANNEL|CHARACTER|CHARACTERS|CLASS|CLASS-ID|CLOCK-UNITS|CLOSE|CLOSE-DISPOSITION|COBOL|CODE|CODE-SET|COL|COLLATING|COLUMN|COM-REG|COMMA|COMMITMENT|COMMON|COMMUNICATION|COMP|COMP-1|COMP-2|COMP-3|COMP-4|COMP-5|COMPUTATIONAL|COMPUTATIONAL-1|COMPUTATIONAL-2|COMPUTATIONAL-3|COMPUTATIONAL-4|COMPUTATIONAL-5|COMPUTE|CONFIGURATION|CONTAINS|CONTENT|CONTINUE|CONTROL|CONTROL-POINT|CONTROLS|CONVENTION|CONVERTING|COPY|CORR|CORRESPONDING|COUNT|CRUNCH|CURRENCY|CURSOR|DATA|DATA-BASE|DATE|DATE-COMPILED|DATE-WRITTEN|DAY|DAY-OF-WEEK|DBCS|DE|DEBUG-CONTENTS|DEBUG-ITEM|DEBUG-LINE|DEBUG-NAME|DEBUG-SUB-1|DEBUG-SUB-2|DEBUG-SUB-3|DEBUGGING|DECIMAL-POINT|DECLARATIVES|DEFAULT|DEFAULT-DISPLAY|DEFINITION|DELETE|DELIMITED|DELIMITER|DEPENDING|DESCENDING|DESTINATION|DETAIL|DFHRESP|DFHVALUE|DISABLE|DISK|DISPLAY|DISPLAY-1|DIVIDE|DIVISION|DONTCARE|DOUBLE|DOWN|DUPLICATES|DYNAMIC|EBCDIC|EGCS|EGI|ELSE|EMI|EMPTY-CHECK|ENABLE|END|END-ACCEPT|END-ADD|END-CALL|END-COMPUTE|END-DELETE|END-DIVIDE|END-EVALUATE|END-IF|END-MULTIPLY|END-OF-PAGE|END-PERFORM|END-READ|END-RECEIVE|END-RETURN|END-REWRITE|END-SEARCH|END-START|END-STRING|END-SUBTRACT|END-UNSTRING|END-WRITE|ENDING|ENTER|ENTRY|ENTRY-PROCEDURE|ENVIRONMENT|EOL|EOP|EOS|ERASE|ERROR|ESCAPE|ESI|EVALUATE|EVENT|EVERY|EXCEPTION|EXCLUSIVE|EXHIBIT|EXIT|EXPORT|EXTEND|EXTENDED|EXTERNAL|FD|FILE|FILE-CONTROL|FILLER|FINAL|FIRST|FOOTING|FOR|FOREGROUND-COLOR|FOREGROUND-COLOUR|FROM|FULL|FUNCTION|FUNCTION-POINTER|FUNCTIONNAME|GENERATE|GIVING|GLOBAL|GO|GOBACK|GRID|GROUP|HEADING|HIGH-VALUE|HIGH-VALUES|HIGHLIGHT|I-O|I-O-CONTROL|ID|IDENTIFICATION|IF|IMPLICIT|IMPORT|IN|INDEX|INDEXED|INDICATE|INITIAL|INITIALIZE|INITIATE|INPUT|INPUT-OUTPUT|INSPECT|INSTALLATION|INTEGER|INTO|INVALID|INVOKE|IS|JUST|JUSTIFIED|KANJI|KEPT|KEY|KEYBOARD|LABEL|LANGUAGE|LAST|LB|LD|LEADING|LEFT|LEFTLINE|LENGTH|LENGTH-CHECK|LIBACCESS|LIBPARAMETER|LIBRARY|LIMIT|LIMITS|LINAGE|LINAGE-COUNTER|LINE|LINE-COUNTER|LINES|LINKAGE|LIST|LOCAL|LOCAL-STORAGE|LOCK|LONG-DATE|LONG-TIME|LOW-VALUE|LOW-VALUES|LOWER|LOWLIGHT|MEMORY|MERGE|MESSAGE|MMDDYYYY|MODE|MODULES|MORE-LABELS|MOVE|MULTIPLE|MULTIPLY|NAMED|NATIONAL|NATIONAL-EDITED|NATIVE|NEGATIVE|NETWORK|NEXT|NO|NO-ECHO|NULL|NULLS|NUMBER|NUMERIC|NUMERIC-DATE|NUMERIC-EDITED|NUMERIC-TIME|OBJECT-COMPUTER|OCCURS|ODT|OF|OFF|OMITTED|ON|OPEN|OPTIONAL|ORDER|ORDERLY|ORGANIZATION|OTHER|OUTPUT|OVERFLOW|OVERLINE|OWN|PACKED-DECIMAL|PADDING|PAGE|PAGE-COUNTER|PASSWORD|PERFORM|PF|PH|PIC|PICTURE|PLUS|POINTER|PORT|POSITION|POSITIVE|PRINTER|PRINTING|PRIVATE|PROCEDURE|PROCEDURE-POINTER|PROCEDURES|PROCEED|PROCESS|PROGRAM|PROGRAM-ID|PROGRAM-LIBRARY|PROMPT|PURGE|QUEUE|QUOTE|QUOTES|RANDOM|RD|READ|READER|REAL|RECEIVE|RECEIVED|RECORD|RECORDING|RECORDS|RECURSIVE|REDEFINES|REEL|REF|REFERENCE|REFERENCES|RELATIVE|RELEASE|REMAINDER|REMARKS|REMOTE|REMOVAL|REMOVE|RENAMES|REPLACE|REPLACING|REPORT|REPORTING|REPORTS|REQUIRED|RERUN|RESERVE|RESET|RETURN|RETURN-CODE|RETURNING|REVERSE-VIDEO|REVERSED|REWIND|REWRITE|RF|RH|RIGHT|ROUNDED|RUN|SAME|SAVE|SCREEN|SD|SEARCH|SECTION|SECURE|SECURITY|SEGMENT|SEGMENT-LIMIT|SELECT|SEND|SENTENCE|SEPARATE|SEQUENCE|SEQUENTIAL|SET|SHARED|SHAREDBYALL|SHAREDBYRUNUNIT|SHARING|SHIFT-IN|SHIFT-OUT|SHORT-DATE|SIGN|SIZE|SORT|SORT-CONTROL|SORT-CORE-SIZE|SORT-FILE-SIZE|SORT-MERGE|SORT-MESSAGE|SORT-MODE-SIZE|SORT-RETURN|SOURCE|SOURCE-COMPUTER|SPACE|SPACES|SPECIAL-NAMES|STANDARD|STANDARD-1|STANDARD-2|START|STATUS|STOP|STRING|SUB-QUEUE-1|SUB-QUEUE-2|SUB-QUEUE-3|SUBTRACT|SUM|SUPPRESS|SYMBOL|SYMBOLIC|SYNC|SYNCHRONIZED|TABLE|TALLY|TALLYING|TAPE|TASK|TERMINAL|TERMINATE|TEST|TEXT|THEN|THREAD|THREAD-LOCAL|THROUGH|THRU|TIME|TIMER|TIMES|TITLE|TO|TODAYS-DATE|TODAYS-NAME|TOP|TRAILING|TRUNCATED|TYPE|TYPEDEF|UNDERLINE|UNIT|UNSTRING|UNTIL|UP|UPON|USAGE|USE|USING|VALUE|VALUES|VARYING|VIRTUAL|WAIT|WHEN|WHEN-COMPILED|WITH|WORDS|WORKING-STORAGE|WRITE|YEAR|YYYYDDD|YYYYMMDD|ZERO-FILL|ZEROES|ZEROS)(?![\w-])/i,lookbehind:!0},boolean:{pattern:/(^|[^\w-])(?:false|true)(?![\w-])/i,lookbehind:!0},number:{pattern:/(^|[^\w-])(?:[+-]?(?:(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?|zero))(?![\w-])/i,lookbehind:!0},operator:[/<>|[<>]=?|[=+*/&]/,{pattern:/(^|[^\w-])(?:-|and|equal|greater|less|not|or|than)(?![\w-])/i,lookbehind:!0}],punctuation:/[.:,()]/}}return Ol}var Dl,Qv;function VB(){if(Qv)return Dl;Qv=1,Dl=e,e.displayName="coffeescript",e.aliases=["coffee"];function e(t){(function(n){var r=/#(?!\{).+/,a={pattern:/#\{[^}]+\}/,alias:"variable"};n.languages.coffeescript=n.languages.extend("javascript",{comment:r,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:a}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),n.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:r,interpolation:a}}}),n.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:n.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:a}}]}),n.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete n.languages.coffeescript["template-string"],n.languages.coffee=n.languages.coffeescript})(t)}return Dl}var Ml,eS;function HB(){if(eS)return Ml;eS=1,Ml=e,e.displayName="concurnas",e.aliases=["conc"];function e(t){t.languages.concurnas={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*)/,lookbehind:!0,greedy:!0},langext:{pattern:/\b\w+\s*\|\|[\s\S]+?\|\|/,greedy:!0,inside:{"class-name":/^\w+/,string:{pattern:/(^\s*\|\|)[\s\S]+(?=\|\|$)/,lookbehind:!0},punctuation:/\|\|/}},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,lookbehind:!0},keyword:/\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,boolean:/\b(?:false|true)\b/,number:/\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,punctuation:/[{}[\];(),.:]/,operator:/<==|>==|=>|->|<-|<>|&==|&<>|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|[!^~]|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,annotation:{pattern:/@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,alias:"builtin"}},t.languages.insertBefore("concurnas","langext",{"regex-literal":{pattern:/\br("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:t.languages.concurnas},regex:/[\s\S]+/}},"string-literal":{pattern:/(?:\B|\bs)("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:t.languages.concurnas},string:/[\s\S]+/}}}),t.languages.conc=t.languages.concurnas}return Ml}var Pl,tS;function WB(){if(tS)return Pl;tS=1,Pl=e,e.displayName="coq",e.aliases=[];function e(t){(function(n){for(var r=/\(\*(?:[^(*]|\((?!\*)|\*(?!\))|<self>)*\*\)/.source,a=0;a<2;a++)r=r.replace(/<self>/g,function(){return r});r=r.replace(/<self>/g,"[]"),n.languages.coq={comment:RegExp(r),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},attribute:[{pattern:RegExp(/#\[(?:[^\[\]("]|"(?:[^"]|"")*"(?!")|\((?!\*)|<comment>)*\]/.source.replace(/<comment>/g,function(){return r})),greedy:!0,alias:"attr-name",inside:{comment:RegExp(r),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},operator:/=/,punctuation:/^#\[|\]$|[,()]/}},{pattern:/\b(?:Cumulative|Global|Local|Monomorphic|NonCumulative|Polymorphic|Private|Program)\b/,alias:"attr-name"}],keyword:/\b(?:Abort|About|Add|Admit|Admitted|All|Arguments|As|Assumptions|Axiom|Axioms|Back|BackTo|Backtrace|BinOp|BinOpSpec|BinRel|Bind|Blacklist|Canonical|Case|Cd|Check|Class|Classes|Close|CoFixpoint|CoInductive|Coercion|Coercions|Collection|Combined|Compute|Conjecture|Conjectures|Constant|Constants|Constraint|Constructors|Context|Corollary|Create|CstOp|Custom|Cut|Debug|Declare|Defined|Definition|Delimit|Dependencies|Dependent|Derive|Diffs|Drop|Elimination|End|Entry|Equality|Eval|Example|Existential|Existentials|Existing|Export|Extern|Extraction|Fact|Fail|Field|File|Firstorder|Fixpoint|Flags|Focus|From|Funclass|Function|Functional|GC|Generalizable|Goal|Grab|Grammar|Graph|Guarded|Haskell|Heap|Hide|Hint|HintDb|Hints|Hypotheses|Hypothesis|IF|Identity|Immediate|Implicit|Implicits|Import|Include|Induction|Inductive|Infix|Info|Initial|InjTyp|Inline|Inspect|Instance|Instances|Intro|Intros|Inversion|Inversion_clear|JSON|Language|Left|Lemma|Let|Lia|Libraries|Library|Load|LoadPath|Locate|Ltac|Ltac2|ML|Match|Method|Minimality|Module|Modules|Morphism|Next|NoInline|Notation|Number|OCaml|Obligation|Obligations|Opaque|Open|Optimize|Parameter|Parameters|Parametric|Path|Paths|Prenex|Preterm|Primitive|Print|Profile|Projections|Proof|Prop|PropBinOp|PropOp|PropUOp|Property|Proposition|Pwd|Qed|Quit|Rec|Record|Recursive|Redirect|Reduction|Register|Relation|Remark|Remove|Require|Reserved|Reset|Resolve|Restart|Rewrite|Right|Ring|Rings|SProp|Saturate|Save|Scheme|Scope|Scopes|Search|SearchHead|SearchPattern|SearchRewrite|Section|Separate|Set|Setoid|Show|Signatures|Solve|Solver|Sort|Sortclass|Sorted|Spec|Step|Strategies|Strategy|String|Structure|SubClass|Subgraph|SuchThat|Tactic|Term|TestCompile|Theorem|Time|Timeout|To|Transparent|Type|Typeclasses|Types|Typing|UnOp|UnOpSpec|Undelimit|Undo|Unfocus|Unfocused|Unfold|Universe|Universes|Unshelve|Variable|Variables|Variant|Verbose|View|Visibility|Zify|_|apply|as|at|by|cofix|else|end|exists|exists2|fix|for|forall|fun|if|in|let|match|measure|move|removed|return|struct|then|using|wf|where|with)\b/,number:/\b(?:0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]+)?(?:p[+-]?\d[\d_]*)?|\d[\d_]*(?:\.[\d_]+)?(?:e[+-]?\d[\d_]*)?)\b/i,punct:{pattern:/@\{|\{\||\[=|:>/,alias:"punctuation"},operator:/\/\\|\\\/|\.{2,3}|:{1,2}=|\*\*|[-=]>|<(?:->?|[+:=>]|<:)|>(?:=|->)|\|[-|]?|[-!%&*+/<=>?@^~']/,punctuation:/\.\(|`\(|@\{|`\{|\{\||\[=|:>|[:.,;(){}\[\]]/}})(t)}return Pl}var Fl,nS;function Xo(){if(nS)return Fl;nS=1,Fl=e,e.displayName="ruby",e.aliases=["rb"];function e(t){(function(n){n.languages.ruby=n.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),n.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var r={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:n.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete n.languages.ruby.function;var a="(?:"+[/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|")+")",i=/(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;n.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp(/%r/.source+a+/[egimnosux]{0,6}/.source),greedy:!0,inside:{interpolation:r,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:r,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(/(^|[^:]):/.source+i),lookbehind:!0,greedy:!0},{pattern:RegExp(/([\r\n{(,][ \t]*)/.source+i+/(?=:(?!:))/.source),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),n.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp(/%[qQiIwWs]?/.source+a),greedy:!0,inside:{interpolation:r,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:r,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:r,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(/%x/.source+a),greedy:!0,inside:{interpolation:r,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:r,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete n.languages.ruby.string,n.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),n.languages.rb=n.languages.ruby})(t)}return Fl}var Bl,rS;function JB(){if(rS)return Bl;rS=1;var e=Xo();Bl=t,t.displayName="crystal",t.aliases=[];function t(n){n.register(e),function(r){r.languages.crystal=r.languages.extend("ruby",{keyword:[/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,operator:[/->/,r.languages.ruby.operator],punctuation:/[(){}[\].,;\\]/}),r.languages.insertBefore("crystal","string-literal",{attribute:{pattern:/@\[.*?\]/,inside:{delimiter:{pattern:/^@\[|\]$/,alias:"punctuation"},attribute:{pattern:/^(\s*)\w+/,lookbehind:!0,alias:"class-name"},args:{pattern:/\S(?:[\s\S]*\S)?/,inside:r.languages.crystal}}},expansion:{pattern:/\{(?:\{.*?\}|%.*?%)\}/,inside:{content:{pattern:/^(\{.)[\s\S]+(?=.\}$)/,lookbehind:!0,inside:r.languages.crystal},delimiter:{pattern:/^\{[\{%]|[\}%]\}$/,alias:"operator"}}},char:{pattern:/'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,greedy:!0}})}(n)}return Bl}var jl,aS;function KB(){if(aS)return jl;aS=1;var e=Yo();jl=t,t.displayName="cshtml",t.aliases=["razor"];function t(n){n.register(e),function(r){var a=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,i=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function o(w,y){for(var m=0;m<y;m++)w=w.replace(/<self>/g,function(){return"(?:"+w+")"});return w.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+i+")").replace(/<comment>/g,"(?:"+a+")")}var s=o(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),l=o(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),u=o(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),p=o(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),d=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,g=/(?!\d)[^\s>\/=$<%]+/.source+d+/\s*\/?>/.source,h=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+d+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+g+"|"+o(/<\1/.source+d+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+g+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+g+")";r.languages.cshtml=r.languages.extend("markup",{});var v=r.languages.insertBefore("csharp","string",{html:{pattern:RegExp(h),greedy:!0,inside:r.languages.cshtml}},{csharp:r.languages.extend("csharp",{})}),b={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:v};r.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[u,/(?:code|functions)\s*/.source+u,/(?:for|foreach|lock|switch|using|while)\s*/.source+s+/\s*/.source+u,/do\s*/.source+u+/\s*while\s*/.source+s+/(?:\s*;)?/.source,/try\s*/.source+u+/\s*catch\s*/.source+s+/\s*/.source+u+/\s*finally\s*/.source+u,/if\s*/.source+s+/\s*/.source+u+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+s+")?"+/\s*/.source+u+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:b}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:b}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+s+")(?:"+/[?!]?\.\w+\b/.source+"|"+s+"|"+l+"|"+p+s+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:b}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),r.languages.razor=r.languages.cshtml}(n)}return jl}var Ul,iS;function YB(){if(iS)return Ul;iS=1,Ul=e,e.displayName="csp",e.aliases=[];function e(t){(function(n){function r(a){return RegExp(/([ \t])/.source+"(?:"+a+")"+/(?=[\s;]|$)/.source,"i")}n.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:r(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:r(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:r(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:r(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:r(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:r(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:r(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(t)}return Ul}var Gl,oS;function XB(){if(oS)return Gl;oS=1,Gl=e,e.displayName="cssExtras",e.aliases=[];function e(t){(function(n){var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,a;n.languages.css.selector={pattern:n.languages.css.selector.pattern,lookbehind:!0,inside:a={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+r.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[r,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},n.languages.css.atrule.inside["selector-function-argument"].inside=a,n.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};n.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:o})})(t)}return Gl}var ql,sS;function ZB(){if(sS)return ql;sS=1,ql=e,e.displayName="csv",e.aliases=[];function e(t){t.languages.csv={value:/[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,punctuation:/,/}}return ql}var zl,lS;function QB(){if(lS)return zl;lS=1,zl=e,e.displayName="cypher",e.aliases=[];function e(t){t.languages.cypher={comment:/\/\/.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,greedy:!0},"class-name":{pattern:/(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,lookbehind:!0,greedy:!0},relationship:{pattern:/(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,lookbehind:!0,greedy:!0,alias:"property"},identifier:{pattern:/`(?:[^`\\\r\n])*`/,greedy:!0},variable:/\$\w+/,keyword:/\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,function:/\b\w+\b(?=\s*\()/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,operator:/:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,punctuation:/[()[\]{},;.]/}}return zl}var $l,uS;function ej(){if(uS)return $l;uS=1,$l=e,e.displayName="d",e.aliases=[];function e(t){t.languages.d=t.languages.extend("clike",{comment:[{pattern:/^\s*#!.+/,greedy:!0},{pattern:RegExp(/(^|[^\\])/.source+"(?:"+[/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,/\/\/.*/.source,/\/\*[\s\S]*?\*\//.source].join("|")+")"),lookbehind:!0,greedy:!0}],string:[{pattern:RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,/\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,/\bq"(.)[\s\S]*?\2"/.source,/(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"),"m"),greedy:!0},{pattern:/\bq\{(?:\{[^{}]*\}|[^{}])*\}/,greedy:!0,alias:"token-string"}],keyword:/\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,lookbehind:!0}],operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),t.languages.insertBefore("d","string",{char:/'(?:\\(?:\W|\w+)|[^\\])'/}),t.languages.insertBefore("d","keyword",{property:/\B@\w*/}),t.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}})}return $l}var Vl,cS;function tj(){if(cS)return Vl;cS=1,Vl=e,e.displayName="dart",e.aliases=[];function e(t){(function(n){var r=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],a=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,i={pattern:RegExp(a+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};n.languages.dart=n.languages.extend("clike",{"class-name":[i,{pattern:RegExp(a+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:i.inside}],keyword:r,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),n.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:n.languages.dart}}},string:/[\s\S]+/}},string:void 0}),n.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),n.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":i,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})})(t)}return Vl}var Hl,dS;function nj(){if(dS)return Hl;dS=1,Hl=e,e.displayName="dataweave",e.aliases=[];function e(t){(function(n){n.languages.dataweave={url:/\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,property:{pattern:/(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,greedy:!0},string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},"mime-type":/\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,date:{pattern:/\|[\w:+-]+\|/,greedy:!0},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],regex:{pattern:/\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,greedy:!0},keyword:/\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,function:/\b[A-Z_]\w*(?=\s*\()/i,number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\];(),.:@]/,operator:/<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,boolean:/\b(?:false|true)\b/}})(t)}return Hl}var Wl,pS;function rj(){if(pS)return Wl;pS=1,Wl=e,e.displayName="dax",e.aliases=[];function e(t){t.languages.dax={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/).*)/,lookbehind:!0},"data-field":{pattern:/'(?:[^']|'')*'(?!')(?:\[[ \w\xA0-\uFFFF]+\])?|\w+\[[ \w\xA0-\uFFFF]+\]/,alias:"symbol"},measure:{pattern:/\[[ \w\xA0-\uFFFF]+\]/,alias:"constant"},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},function:/\b(?:ABS|ACOS|ACOSH|ACOT|ACOTH|ADDCOLUMNS|ADDMISSINGITEMS|ALL|ALLCROSSFILTERED|ALLEXCEPT|ALLNOBLANKROW|ALLSELECTED|AND|APPROXIMATEDISTINCTCOUNT|ASIN|ASINH|ATAN|ATANH|AVERAGE|AVERAGEA|AVERAGEX|BETA\.DIST|BETA\.INV|BLANK|CALCULATE|CALCULATETABLE|CALENDAR|CALENDARAUTO|CEILING|CHISQ\.DIST|CHISQ\.DIST\.RT|CHISQ\.INV|CHISQ\.INV\.RT|CLOSINGBALANCEMONTH|CLOSINGBALANCEQUARTER|CLOSINGBALANCEYEAR|COALESCE|COMBIN|COMBINA|COMBINEVALUES|CONCATENATE|CONCATENATEX|CONFIDENCE\.NORM|CONFIDENCE\.T|CONTAINS|CONTAINSROW|CONTAINSSTRING|CONTAINSSTRINGEXACT|CONVERT|COS|COSH|COT|COTH|COUNT|COUNTA|COUNTAX|COUNTBLANK|COUNTROWS|COUNTX|CROSSFILTER|CROSSJOIN|CURRENCY|CURRENTGROUP|CUSTOMDATA|DATATABLE|DATE|DATEADD|DATEDIFF|DATESBETWEEN|DATESINPERIOD|DATESMTD|DATESQTD|DATESYTD|DATEVALUE|DAY|DEGREES|DETAILROWS|DISTINCT|DISTINCTCOUNT|DISTINCTCOUNTNOBLANK|DIVIDE|EARLIER|EARLIEST|EDATE|ENDOFMONTH|ENDOFQUARTER|ENDOFYEAR|EOMONTH|ERROR|EVEN|EXACT|EXCEPT|EXP|EXPON\.DIST|FACT|FALSE|FILTER|FILTERS|FIND|FIRSTDATE|FIRSTNONBLANK|FIRSTNONBLANKVALUE|FIXED|FLOOR|FORMAT|GCD|GENERATE|GENERATEALL|GENERATESERIES|GEOMEAN|GEOMEANX|GROUPBY|HASONEFILTER|HASONEVALUE|HOUR|IF|IF\.EAGER|IFERROR|IGNORE|INT|INTERSECT|ISBLANK|ISCROSSFILTERED|ISEMPTY|ISERROR|ISEVEN|ISFILTERED|ISINSCOPE|ISLOGICAL|ISNONTEXT|ISNUMBER|ISO\.CEILING|ISODD|ISONORAFTER|ISSELECTEDMEASURE|ISSUBTOTAL|ISTEXT|KEEPFILTERS|KEYWORDMATCH|LASTDATE|LASTNONBLANK|LASTNONBLANKVALUE|LCM|LEFT|LEN|LN|LOG|LOG10|LOOKUPVALUE|LOWER|MAX|MAXA|MAXX|MEDIAN|MEDIANX|MID|MIN|MINA|MINUTE|MINX|MOD|MONTH|MROUND|NATURALINNERJOIN|NATURALLEFTOUTERJOIN|NEXTDAY|NEXTMONTH|NEXTQUARTER|NEXTYEAR|NONVISUAL|NORM\.DIST|NORM\.INV|NORM\.S\.DIST|NORM\.S\.INV|NOT|NOW|ODD|OPENINGBALANCEMONTH|OPENINGBALANCEQUARTER|OPENINGBALANCEYEAR|OR|PARALLELPERIOD|PATH|PATHCONTAINS|PATHITEM|PATHITEMREVERSE|PATHLENGTH|PERCENTILE\.EXC|PERCENTILE\.INC|PERCENTILEX\.EXC|PERCENTILEX\.INC|PERMUT|PI|POISSON\.DIST|POWER|PREVIOUSDAY|PREVIOUSMONTH|PREVIOUSQUARTER|PREVIOUSYEAR|PRODUCT|PRODUCTX|QUARTER|QUOTIENT|RADIANS|RAND|RANDBETWEEN|RANK\.EQ|RANKX|RELATED|RELATEDTABLE|REMOVEFILTERS|REPLACE|REPT|RIGHT|ROLLUP|ROLLUPADDISSUBTOTAL|ROLLUPGROUP|ROLLUPISSUBTOTAL|ROUND|ROUNDDOWN|ROUNDUP|ROW|SAMEPERIODLASTYEAR|SAMPLE|SEARCH|SECOND|SELECTCOLUMNS|SELECTEDMEASURE|SELECTEDMEASUREFORMATSTRING|SELECTEDMEASURENAME|SELECTEDVALUE|SIGN|SIN|SINH|SQRT|SQRTPI|STARTOFMONTH|STARTOFQUARTER|STARTOFYEAR|STDEV\.P|STDEV\.S|STDEVX\.P|STDEVX\.S|SUBSTITUTE|SUBSTITUTEWITHINDEX|SUM|SUMMARIZE|SUMMARIZECOLUMNS|SUMX|SWITCH|T\.DIST|T\.DIST\.2T|T\.DIST\.RT|T\.INV|T\.INV\.2T|TAN|TANH|TIME|TIMEVALUE|TODAY|TOPN|TOPNPERLEVEL|TOPNSKIP|TOTALMTD|TOTALQTD|TOTALYTD|TREATAS|TRIM|TRUE|TRUNC|UNICHAR|UNICODE|UNION|UPPER|USERELATIONSHIP|USERNAME|USEROBJECTID|USERPRINCIPALNAME|UTCNOW|UTCTODAY|VALUE|VALUES|VAR\.P|VAR\.S|VARX\.P|VARX\.S|WEEKDAY|WEEKNUM|XIRR|XNPV|YEAR|YEARFRAC)(?=\s*\()/i,keyword:/\b(?:DEFINE|EVALUATE|MEASURE|ORDER\s+BY|RETURN|VAR|START\s+AT|ASC|DESC)\b/i,boolean:{pattern:/\b(?:FALSE|NULL|TRUE)\b/i,alias:"constant"},number:/\b\d+(?:\.\d*)?|\B\.\d+\b/,operator:/:=|[-+*\/=^]|&&?|\|\||<(?:=>?|<|>)?|>[>=]?|\b(?:IN|NOT)\b/i,punctuation:/[;\[\](){}`,.]/}}return Wl}var Jl,mS;function aj(){if(mS)return Jl;mS=1,Jl=e,e.displayName="dhall",e.aliases=[];function e(t){t.languages.dhall={comment:/--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,string:{pattern:/"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,alias:"language-dhall",inside:null},punctuation:/\$\{|\}/}}}},label:{pattern:/`[^`]*`/,greedy:!0},url:{pattern:/\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,greedy:!0},env:{pattern:/\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,greedy:!0,inside:{function:/^env/,operator:/^:/,variable:/[\s\S]+/}},hash:{pattern:/\bsha256:[\da-fA-F]{64}\b/,inside:{function:/sha256/,operator:/:/,number:/[\da-fA-F]{64}/}},keyword:/\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,builtin:/\b(?:None|Some)\b/,boolean:/\b(?:False|True)\b/,number:/\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,operator:/\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,punctuation:/\.\.|[{}\[\](),./]/,"class-name":/\b[A-Z]\w*\b/},t.languages.dhall.string.inside.interpolation.inside.expression.inside=t.languages.dhall}return Jl}var Kl,gS;function ij(){if(gS)return Kl;gS=1,Kl=e,e.displayName="diff",e.aliases=[];function e(t){(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(a){var i=r[a],o=[];/^\w+$/.test(a)||o.push(/\w+/.exec(a)[0]),a==="diff"&&o.push("bold"),n.languages.diff[a]={pattern:RegExp("^(?:["+i+`].*(?:\r
?|
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+a+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:r,quoted:{pattern:RegExp(/(^|\s)/.source+a),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(t)}return cp}var dp,Nx;function ih(){if(Nx)return dp;Nx=1,dp=e,e.displayName="t4Templating",e.aliases=[];function e(t){(function(n){function r(i,o,s){return{pattern:RegExp("<#"+i+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+i+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:o,alias:s}}}}function a(i){var o=n.languages[i],s="language-"+i;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:r("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:r("=",o,s),"class-feature":r("\\+",o,s),standard:r("",o,s)}}}}n.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:a})})(t)}return dp}var pp,_x;function c8(){if(_x)return pp;_x=1;var e=ih(),t=Yo();pp=n,n.displayName="t4Cs",n.aliases=[];function n(r){r.register(e),r.register(t),r.languages.t4=r.languages["t4-cs"]=r.languages["t4-templating"].createT4("csharp")}return pp}var mp,Lx;function HC(){if(Lx)return mp;Lx=1;var e=qC();mp=t,t.displayName="vbnet",t.aliases=[];function t(n){n.register(e),n.languages.vbnet=n.languages.extend("basic",{comment:[{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},{pattern:/(^|[^\\:])'.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^"])"(?:""|[^"])*"(?!")/,lookbehind:!0,greedy:!0},keyword:/(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,punctuation:/[,;:(){}]/})}return mp}var gp,Ox;function d8(){if(Ox)return gp;Ox=1;var e=ih(),t=HC();gp=n,n.displayName="t4Vb",n.aliases=[];function n(r){r.register(e),r.register(t),r.languages["t4-vb"]=r.languages["t4-templating"].createT4("vbnet")}return gp}var fp,Dx;function WC(){if(Dx)return fp;Dx=1,fp=e,e.displayName="yaml",e.aliases=["yml"];function e(t){(function(n){var r=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,i="(?:"+a.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+a.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(u,p){p=(p||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return i}).replace(/<<value>>/g,function(){return u});return RegExp(d,p)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return i})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return i}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:a,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(t)}return fp}var hp,Mx;function p8(){if(Mx)return hp;Mx=1;var e=WC();hp=t,t.displayName="tap",t.aliases=[];function t(n){n.register(e),n.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:n.languages.yaml,alias:"language-yaml"}}}return hp}var yp,Px;function m8(){if(Px)return yp;Px=1,yp=e,e.displayName="tcl",e.aliases=[];function e(t){t.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,greedy:!0},variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,lookbehind:!0},{pattern:/(\$)\{[^}]+\}/,lookbehind:!0},{pattern:/(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,lookbehind:!0}],function:{pattern:/(^[\t ]*proc[ \t]+)\S+/m,lookbehind:!0},builtin:[{pattern:/(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,lookbehind:!0},/\b(?:else|elseif)\b/],scope:{pattern:/(^[\t ]*)(?:global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,punctuation:/[{}()\[\]]/}}return yp}var bp,Fx;function g8(){if(Fx)return bp;Fx=1,bp=e,e.displayName="textile",e.aliases=[];function e(t){(function(n){var r=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,a=/\)|\((?![^|()\n]+\))/.source;function i(g,h){return RegExp(g.replace(/<MOD>/g,function(){return"(?:"+r+")"}).replace(/<PAR>/g,function(){return"(?:"+a+")"}),h||"")}var o={css:{pattern:/\{[^{}]+\}/,inside:{rest:n.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},s=n.languages.textile=n.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:i(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:i(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:o},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:i(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:i(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:o},punctuation:/^[*#]+/}},table:{pattern:i(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:i(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:o},punctuation:/\||^\./}},inline:{pattern:i(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:i(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:i(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:i(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:i(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:i(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:i(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:i(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:i(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:o},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:i(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:i(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:i(/(^")<MOD>+/.source),lookbehind:!0,inside:o},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:i(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:i(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:i(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:o},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),l=s.phrase.inside,u={inline:l.inline,link:l.link,image:l.image,footnote:l.footnote,acronym:l.acronym,mark:l.mark};s.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var p=l.inline.inside;p.bold.inside=u,p.italic.inside=u,p.inserted.inside=u,p.deleted.inside=u,p.span.inside=u;var d=l.table.inside;d.inline=u.inline,d.link=u.link,d.image=u.image,d.footnote=u.footnote,d.acronym=u.acronym,d.mark=u.mark})(t)}return bp}var vp,Bx;function f8(){if(Bx)return vp;Bx=1,vp=e,e.displayName="toml",e.aliases=[];function e(t){(function(n){var r=/(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;function a(i){return i.replace(/__/g,function(){return r})}n.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(a(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source),"m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp(a(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),"m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:"number"},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(t)}return vp}var Sp,jx;function h8(){if(jx)return Sp;jx=1,Sp=e,e.displayName="tremor",e.aliases=[];function e(t){(function(n){n.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var r=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;n.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+r+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+r+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(r),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:n.languages.tremor}}},string:/[\s\S]+/}},n.languages.troy=n.languages.tremor,n.languages.trickle=n.languages.tremor})(t)}return Sp}var Ep,Ux;function y8(){if(Ux)return Ep;Ux=1;var e=$C(),t=nh();Ep=n,n.displayName="tsx",n.aliases=[];function n(r){r.register(e),r.register(t),function(a){var i=a.util.clone(a.languages.typescript);a.languages.tsx=a.languages.extend("jsx",i),delete a.languages.tsx.parameter,delete a.languages.tsx["literal-property"];var o=a.languages.tsx.tag;o.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+o.pattern.source+")",o.pattern.flags),o.lookbehind=!0}(r)}return Ep}var wp,Gx;function b8(){if(Gx)return wp;Gx=1;var e=Ye();wp=t,t.displayName="tt2",t.aliases=[];function t(n){n.register(e),function(r){r.languages.tt2=r.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),r.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),r.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),r.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete r.languages.tt2.string,r.hooks.add("before-tokenize",function(a){var i=/\[%[\s\S]+?%\]/g;r.languages["markup-templating"].buildPlaceholders(a,"tt2",i)}),r.hooks.add("after-tokenize",function(a){r.languages["markup-templating"].tokenizePlaceholders(a,"tt2")})}(n)}return wp}var xp,qx;function v8(){if(qx)return xp;qx=1;var e=Ye();xp=t,t.displayName="twig",t.aliases=[];function t(n){n.register(e),n.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},n.hooks.add("before-tokenize",function(r){if(r.language==="twig"){var a=/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;n.languages["markup-templating"].buildPlaceholders(r,"twig",a)}}),n.hooks.add("after-tokenize",function(r){n.languages["markup-templating"].tokenizePlaceholders(r,"twig")})}return xp}var Tp,zx;function S8(){if(zx)return Tp;zx=1,Tp=e,e.displayName="typoscript",e.aliases=["tsconfig"];function e(t){(function(n){var r=/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;n.languages.typoscript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^"'])#.*/,lookbehind:!0,greedy:!0}],function:[{pattern:/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,inside:{string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,inside:{keyword:r}},keyword:{pattern:/INCLUDE_TYPOSCRIPT/}}},{pattern:/@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,inside:{string:/"[^"\r\n]*"|'[^'\r\n]*'/}}],string:{pattern:/^([^=]*=[< ]?)(?:(?!\]\n).)*/,lookbehind:!0,inside:{function:/\{\$.*\}/,keyword:r,number:/^\d+$/,punctuation:/[,|:]/}},keyword:r,number:{pattern:/\b\d+\s*[.{=]/,inside:{operator:/[.{=]/}},tag:{pattern:/\.?[-\w\\]+\.?/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:|]/,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/},n.languages.tsconfig=n.languages.typoscript})(t)}return Tp}var Ap,$x;function E8(){if($x)return Ap;$x=1,Ap=e,e.displayName="unrealscript",e.aliases=["uc","uscript"];function e(t){t.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},t.languages.uc=t.languages.uscript=t.languages.unrealscript}return Ap}var Cp,Vx;function w8(){if(Vx)return Cp;Vx=1,Cp=e,e.displayName="uorazor",e.aliases=[];function e(t){t.languages.uorazor={"comment-hash":{pattern:/#.*/,alias:"comment",greedy:!0},"comment-slash":{pattern:/\/\/.*/,alias:"comment",greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/},greedy:!0},"source-layers":{pattern:/\b(?:arms|backpack|blue|bracelet|cancel|clear|cloak|criminal|earrings|enemy|facialhair|friend|friendly|gloves|gray|grey|ground|hair|head|innerlegs|innertorso|innocent|lefthand|middletorso|murderer|neck|nonfriendly|onehandedsecondary|outerlegs|outertorso|pants|red|righthand|ring|self|shirt|shoes|talisman|waist)\b/i,alias:"function"},"source-commands":{pattern:/\b(?:alliance|attack|cast|clearall|clearignore|clearjournal|clearlist|clearsysmsg|createlist|createtimer|dclick|dclicktype|dclickvar|dress|dressconfig|drop|droprelloc|emote|getlabel|guild|gumpclose|gumpresponse|hotkey|ignore|lasttarget|lift|lifttype|menu|menuresponse|msg|org|organize|organizer|overhead|pause|poplist|potion|promptresponse|pushlist|removelist|removetimer|rename|restock|say|scav|scavenger|script|setability|setlasttarget|setskill|settimer|setvar|sysmsg|target|targetloc|targetrelloc|targettype|undress|unignore|unsetvar|useobject|useonce|useskill|usetype|virtue|wait|waitforgump|waitformenu|waitforprompt|waitforstat|waitforsysmsg|waitfortarget|walk|wfsysmsg|wft|whisper|yell)\b/,alias:"function"},"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},function:/\b(?:atlist|close|closest|count|counter|counttype|dead|dex|diffhits|diffmana|diffstam|diffweight|find|findbuff|finddebuff|findlayer|findtype|findtypelist|followers|gumpexists|hidden|hits|hp|hue|human|humanoid|ingump|inlist|insysmessage|insysmsg|int|invul|lhandempty|list|listexists|mana|maxhits|maxhp|maxmana|maxstam|maxweight|monster|mounted|name|next|noto|paralyzed|poisoned|position|prev|previous|queued|rand|random|rhandempty|skill|stam|str|targetexists|timer|timerexists|varexist|warmode|weight)\b/,keyword:/\b(?:and|as|break|continue|else|elseif|endfor|endif|endwhile|for|if|loop|not|or|replay|stop|while)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/}}return Cp}var Rp,Hx;function x8(){if(Hx)return Rp;Hx=1,Rp=e,e.displayName="uri",e.aliases=["url"];function e(t){t.languages.uri={scheme:{pattern:/^[a-z][a-z0-9+.-]*:/im,greedy:!0,inside:{"scheme-delimiter":/:$/}},fragment:{pattern:/#[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"fragment-delimiter":/^#/}},query:{pattern:/\?[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"query-delimiter":{pattern:/^\?/,greedy:!0},"pair-delimiter":/[&;]/,pair:{pattern:/^[^=][\s\S]*/,inside:{key:/^[^=]+/,value:{pattern:/(^=)[\s\S]+/,lookbehind:!0}}}}},authority:{pattern:RegExp(/^\/\//.source+/(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source+("(?:"+/\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source+"|"+/[\w\-.~!$&'()*+,;=%]*/.source+")")+/(?::\d*)?/.source,"m"),inside:{"authority-delimiter":/^\/\//,"user-info-segment":{pattern:/^[\w\-.~!$&'()*+,;=%:]*@/,inside:{"user-info-delimiter":/@$/,"user-info":/^[\w\-.~!$&'()*+,;=%:]+/}},"port-segment":{pattern:/:\d*$/,inside:{"port-delimiter":/^:/,port:/^\d+/}},host:{pattern:/[\s\S]+/,inside:{"ip-literal":{pattern:/^\[[\s\S]+\]$/,inside:{"ip-literal-delimiter":/^\[|\]$/,"ipv-future":/^v[\s\S]+/,"ipv6-address":/^[\s\S]+/}},"ipv4-address":/^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/}}}},path:{pattern:/^[\w\-.~!$&'()*+,;=%:@/]+/m,inside:{"path-separator":/\//}}},t.languages.url=t.languages.uri}return Rp}var kp,Wx;function T8(){if(Wx)return kp;Wx=1,kp=e,e.displayName="v",e.aliases=[];function e(t){(function(n){var r={pattern:/[\s\S]+/,inside:null};n.languages.v=n.languages.extend("clike",{string:{pattern:/r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,alias:"quoted-string",greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,lookbehind:!0,inside:{"interpolation-variable":{pattern:/^\$\w[\s\S]*$/,alias:"variable"},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},"interpolation-expression":r}}}},"class-name":{pattern:/(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,lookbehind:!0},keyword:/(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/,number:/\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,operator:/~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,builtin:/\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/}),r.inside=n.languages.v,n.languages.insertBefore("v","string",{char:{pattern:/`(?:\\`|\\?[^`]{1,2})`/,alias:"rune"}}),n.languages.insertBefore("v","operator",{attribute:{pattern:/(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m,lookbehind:!0,alias:"annotation",inside:{punctuation:/[\[\]]/,keyword:/\w+/}},generic:{pattern:/<\w+>(?=\s*[\)\{])/,inside:{punctuation:/[<>]/,"class-name":/\w+/}}}),n.languages.insertBefore("v","function",{"generic-function":{pattern:/\b\w+\s*<\w+>(?=\()/,inside:{function:/^\w+/,generic:{pattern:/<\w+>/,inside:n.languages.v.generic.inside}}}})})(t)}return kp}var Ip,Jx;function A8(){if(Jx)return Ip;Jx=1,Ip=e,e.displayName="vala",e.aliases=[];function e(t){t.languages.vala=t.languages.extend("clike",{"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],keyword:/\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,function:/\b\w+(?=\s*\()/,number:/(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,operator:/\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,punctuation:/[{}[\];(),.:]/,constant:/\b[A-Z0-9_]+\b/}),t.languages.insertBefore("vala","string",{"raw-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"template-string":{pattern:/@"[\s\S]*?"/,greedy:!0,inside:{interpolation:{pattern:/\$(?:\([^)]*\)|[a-zA-Z]\w*)/,inside:{delimiter:{pattern:/^\$\(?|\)$/,alias:"punctuation"},rest:t.languages.vala}},string:/[\s\S]+/}}}),t.languages.insertBefore("vala","keyword",{regex:{pattern:/\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\//,"regex-flags":/^[a-z]+$/}}})}return Ip}var Np,Kx;function C8(){if(Kx)return Np;Kx=1,Np=e,e.displayName="velocity",e.aliases=[];function e(t){(function(n){n.languages.velocity=n.languages.extend("markup",{});var r={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};r.variable.inside={string:r.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:r.number,boolean:r.boolean,punctuation:r.punctuation},n.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?\]\]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|\]\]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,inside:{punctuation:/[{}]/}},rest:r}},variable:r.variable}),n.languages.velocity.tag.inside["attr-value"].inside.rest=n.languages.velocity})(t)}return Np}var _p,Yx;function R8(){if(Yx)return _p;Yx=1,_p=e,e.displayName="verilog",e.aliases=[];function e(t){t.languages.verilog={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"kernel-function":{pattern:/\B\$\w+\b/,alias:"property"},constant:/\B`\w+\b/,function:/\b\w+(?=\()/,keyword:/\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,important:/\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,number:/\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,operator:/[-+{}^~%*\/?=!<>&|]+/,punctuation:/[[\];(),.:]/}}return _p}var Lp,Xx;function k8(){if(Xx)return Lp;Xx=1,Lp=e,e.displayName="vhdl",e.aliases=[];function e(t){t.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,constant:/\b(?:library|use)\b/i,keyword:/\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,boolean:/\b(?:false|true)\b/i,function:/\w+(?=\()/,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,punctuation:/[{}[\];(),.:]/}}return Lp}var Op,Zx;function I8(){if(Zx)return Op;Zx=1,Op=e,e.displayName="vim",e.aliases=[];function e(t){t.languages.vim={string:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,comment:/".*/,function:/\b\w+(?=\()/,keyword:/\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,builtin:/\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,operator:/\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,punctuation:/[{}[\](),;:]/}}return Op}var Dp,Qx;function N8(){if(Qx)return Dp;Qx=1,Dp=e,e.displayName="visualBasic",e.aliases=[];function e(t){t.languages["visual-basic"]={comment:{pattern:/(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,inside:{keyword:/^REM/i}},directive:{pattern:/#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,alias:"property",greedy:!0},string:{pattern:/\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,greedy:!0},date:{pattern:/#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,alias:"number"},number:/(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,boolean:/\b(?:False|Nothing|True)\b/i,keyword:/\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,operator:/[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,punctuation:/[{}().,:?]/},t.languages.vb=t.languages["visual-basic"],t.languages.vba=t.languages["visual-basic"]}return Dp}var Mp,e0;function _8(){if(e0)return Mp;e0=1,Mp=e,e.displayName="warpscript",e.aliases=[];function e(t){t.languages.warpscript={comment:/#.*|\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,greedy:!0},variable:/\$\S+/,macro:{pattern:/@\S+/,alias:"property"},keyword:/\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,number:/[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,boolean:/\b(?:F|T|false|true)\b/,punctuation:/<%|%>|[{}[\]()]/,operator:/==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/}}return Mp}var Pp,t0;function L8(){if(t0)return Pp;t0=1,Pp=e,e.displayName="wasm",e.aliases=[];function e(t){t.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/}}return Pp}var Fp,n0;function O8(){if(n0)return Fp;n0=1,Fp=e,e.displayName="webIdl",e.aliases=[];function e(t){(function(n){var r=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,a="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+r+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,i={};n.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+r),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:i},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+a),lookbehind:!0,inside:i},{pattern:RegExp("("+/\bcallback\s+/.source+r+/\s*=\s*/.source+")"+a),lookbehind:!0,inside:i},{pattern:RegExp(/(\btypedef\b\s*)/.source+a),lookbehind:!0,inside:i},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+r),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+r),lookbehind:!0},RegExp(r+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+r),lookbehind:!0},{pattern:RegExp(a+"(?="+/\s*(?:\.{3}\s*)?/.source+r+/\s*[(),;=]/.source+")"),inside:i}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var o in n.languages["web-idl"])o!=="class-name"&&(i[o]=n.languages["web-idl"][o]);n.languages.webidl=n.languages["web-idl"]})(t)}return Fp}var Bp,r0;function D8(){if(r0)return Bp;r0=1,Bp=e,e.displayName="wiki",e.aliases=[];function e(t){t.languages.wiki=t.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+)[^=\r\n].*?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold-italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0,alias:["bold","italic"]},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?\}\}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:t.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),t.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,inside:t.languages.markup.tag.inside}}}})}return Bp}var jp,a0;function M8(){if(a0)return jp;a0=1,jp=e,e.displayName="wolfram",e.aliases=["mathematica","wl","nb"];function e(t){t.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},t.languages.mathematica=t.languages.wolfram,t.languages.wl=t.languages.wolfram,t.languages.nb=t.languages.wolfram}return jp}var Up,i0;function P8(){if(i0)return Up;i0=1,Up=e,e.displayName="wren",e.aliases=[];function e(t){t.languages.wren={comment:[{pattern:/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"string-literal":null,hashbang:{pattern:/^#!\/.+/,greedy:!0,alias:"comment"},attribute:{pattern:/#!?[ \t\u3000]*\w+/,alias:"keyword"},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},/\b[A-Z][a-z\d_]*\b/],constant:/\b[A-Z][A-Z\d_]*\b/,null:{pattern:/\bnull\b/,alias:"keyword"},keyword:/\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,function:/\b[a-z_]\w*(?=\s*[({])/i,operator:/<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,punctuation:/[\[\](){}.,;]/},t.languages.wren["string-literal"]={pattern:/(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,lookbehind:!0,inside:{expression:{pattern:/^(%\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:t.languages.wren},"interpolation-punctuation":{pattern:/^%\(|\)$/,alias:"punctuation"}}},string:/[\s\S]+/}}}return Up}var Gp,o0;function F8(){if(o0)return Gp;o0=1,Gp=e,e.displayName="xeora",e.aliases=["xeoracube"];function e(t){(function(n){n.languages.xeora=n.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),n.languages.insertBefore("inside","punctuation",{variable:n.languages.xeora["function-inline"].inside.variable},n.languages.xeora["function-block"]),n.languages.xeoracube=n.languages.xeora})(t)}return Gp}var qp,s0;function B8(){if(s0)return qp;s0=1,qp=e,e.displayName="xmlDoc",e.aliases=[];function e(t){(function(n){function r(s,l){n.languages[s]&&n.languages.insertBefore(s,"comment",{"doc-comment":l})}var a=n.languages.markup.tag,i={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:a}},o={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:a}};r("csharp",i),r("fsharp",i),r("vbnet",o)})(t)}return qp}var zp,l0;function j8(){if(l0)return zp;l0=1,zp=e,e.displayName="xojo",e.aliases=[];function e(t){t.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,greedy:!0},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],directive:{pattern:/#(?:Else|ElseIf|Endif|If|Pragma)\b/i,alias:"property"},keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,punctuation:/[.,;:()]/}}return zp}var $p,u0;function U8(){if(u0)return $p;u0=1,$p=e,e.displayName="xquery",e.aliases=[];function e(t){(function(n){n.languages.xquery=n.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),n.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,n.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,n.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,n.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:n.languages.xquery,alias:"language-xquery"};var r=function(i){return typeof i=="string"?i:typeof i.content=="string"?i.content:i.content.map(r).join("")},a=function(i){for(var o=[],s=0;s<i.length;s++){var l=i[s],u=!1;if(typeof l!="string"&&(l.type==="tag"&&l.content[0]&&l.content[0].type==="tag"?l.content[0].content[0].content==="</"?o.length>0&&o[o.length-1].tagName===r(l.content[0].content[1])&&o.pop():l.content[l.content.length-1].content==="/>"||o.push({tagName:r(l.content[0].content[1]),openedBraces:0}):o.length>0&&l.type==="punctuation"&&l.content==="{"&&(!i[s+1]||i[s+1].type!=="punctuation"||i[s+1].content!=="{")&&(!i[s-1]||i[s-1].type!=="plain-text"||i[s-1].content!=="{")?o[o.length-1].openedBraces++:o.length>0&&o[o.length-1].openedBraces>0&&l.type==="punctuation"&&l.content==="}"?o[o.length-1].openedBraces--:l.type!=="comment"&&(u=!0)),(u||typeof l=="string")&&o.length>0&&o[o.length-1].openedBraces===0){var p=r(l);s<i.length-1&&(typeof i[s+1]=="string"||i[s+1].type==="plain-text")&&(p+=r(i[s+1]),i.splice(s+1,1)),s>0&&(typeof i[s-1]=="string"||i[s-1].type==="plain-text")&&(p=r(i[s-1])+p,i.splice(s-1,1),s--),/^\s+$/.test(p)?i[s]=p:i[s]=new n.Token("plain-text",p,null,p)}l.content&&typeof l.content!="string"&&a(l.content)}};n.hooks.add("after-tokenize",function(i){i.language==="xquery"&&a(i.tokens)})})(t)}return $p}var Vp,c0;function G8(){if(c0)return Vp;c0=1,Vp=e,e.displayName="yang",e.aliases=[];function e(t){t.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:!0},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:!0},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:!0},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/}}return Vp}var Hp,d0;function q8(){if(d0)return Hp;d0=1,Hp=e,e.displayName="zig",e.aliases=[];function e(t){(function(n){function r(p){return function(){return p}}var a=/\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,i="\\b(?!"+a.source+")(?!\\d)\\w+\\b",o=/align\s*\((?:[^()]|\([^()]*\))*\)/.source,s=/(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g,r(o)),l=/(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g,r(i)),u="(?!\\s)(?:!?\\s*(?:"+s+"\\s*)*"+l+")+";n.languages.zig={comment:[{pattern:/\/\/[/!].*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0}],char:{pattern:/(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0},builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g,r(u)).replace(/<ALIGN>/g,r(o))),lookbehind:!0,inside:null},{pattern:RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g,r(u)).replace(/<ALIGN>/g,r(o))),lookbehind:!0,inside:null}],"builtin-type":{pattern:/\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,alias:"keyword"},keyword:a,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},n.languages.zig["class-name"].forEach(function(p){p.inside===null&&(p.inside=n.languages.zig)})})(t)}return Hp}var S=YF,z8=S;S.register(sB());S.register(lB());S.register(uB());S.register(cB());S.register(dB());S.register(pB());S.register(mB());S.register(gB());S.register(fB());S.register(hB());S.register(yB());S.register(bB());S.register(vB());S.register(SB());S.register(EB());S.register(wB());S.register(xB());S.register(TB());S.register(AB());S.register(CB());S.register(RB());S.register(kB());S.register(GC());S.register(qC());S.register(IB());S.register(NB());S.register(_B());S.register(LB());S.register(OB());S.register(DB());S.register(MB());S.register(PB());S.register(FB());S.register(BB());S.register(Wn());S.register(jB());S.register(UB());S.register(GB());S.register(qB());S.register(zB());S.register($B());S.register(VB());S.register(HB());S.register(WB());S.register(Qf());S.register(JB());S.register(Yo());S.register(KB());S.register(YB());S.register(XB());S.register(ZB());S.register(QB());S.register(ej());S.register(tj());S.register(nj());S.register(rj());S.register(aj());S.register(ij());S.register(oj());S.register(sj());S.register(lj());S.register(uj());S.register(cj());S.register(dj());S.register(pj());S.register(mj());S.register(gj());S.register(fj());S.register(hj());S.register(yj());S.register(bj());S.register(vj());S.register(Sj());S.register(Ej());S.register(wj());S.register(xj());S.register(Tj());S.register(Aj());S.register(Cj());S.register(Rj());S.register(kj());S.register(Ij());S.register(Nj());S.register(_j());S.register(Lj());S.register(Oj());S.register(Dj());S.register(Mj());S.register(Pj());S.register(Fj());S.register(Bj());S.register(jj());S.register(Uj());S.register(Gj());S.register(eh());S.register(qj());S.register(zj());S.register($j());S.register(Vj());S.register(Hj());S.register(Wj());S.register(Jj());S.register(Kj());S.register(Yj());S.register(Xj());S.register(Zj());S.register(Qj());S.register(eU());S.register(tU());S.register(nU());S.register(rU());S.register(aU());S.register(th());S.register(iU());S.register(Zo());S.register(oU());S.register(sU());S.register(lU());S.register(uU());S.register(cU());S.register(dU());S.register(pU());S.register(rh());S.register(mU());S.register(gU());S.register(fU());S.register($C());S.register(hU());S.register(yU());S.register(bU());S.register(vU());S.register(SU());S.register(EU());S.register(wU());S.register(xU());S.register(TU());S.register(AU());S.register(CU());S.register(RU());S.register(kU());S.register(IU());S.register(NU());S.register(_U());S.register(zC());S.register(LU());S.register(OU());S.register(DU());S.register(Ye());S.register(MU());S.register(PU());S.register(FU());S.register(BU());S.register(jU());S.register(UU());S.register(GU());S.register(qU());S.register(zU());S.register($U());S.register(VU());S.register(HU());S.register(WU());S.register(JU());S.register(KU());S.register(YU());S.register(XU());S.register(ZU());S.register(QU());S.register(e4());S.register(t4());S.register(n4());S.register(r4());S.register(a4());S.register(i4());S.register(o4());S.register(s4());S.register(l4());S.register(u4());S.register(c4());S.register(d4());S.register(p4());S.register(Qo());S.register(m4());S.register(g4());S.register(f4());S.register(h4());S.register(y4());S.register(b4());S.register(v4());S.register(S4());S.register(E4());S.register(w4());S.register(x4());S.register(T4());S.register(A4());S.register(C4());S.register(R4());S.register(k4());S.register(I4());S.register(N4());S.register(_4());S.register(L4());S.register(O4());S.register(D4());S.register(M4());S.register(P4());S.register(F4());S.register(B4());S.register(j4());S.register(U4());S.register(G4());S.register(q4());S.register(Xo());S.register(z4());S.register($4());S.register(V4());S.register(H4());S.register(ah());S.register(W4());S.register(J4());S.register(K4());S.register(Y4());S.register(X4());S.register(Z4());S.register(Q4());S.register(e8());S.register(t8());S.register(n8());S.register(r8());S.register(a8());S.register(Zf());S.register(i8());S.register(o8());S.register(s8());S.register(l8());S.register(u8());S.register(c8());S.register(ih());S.register(d8());S.register(p8());S.register(m8());S.register(g8());S.register(f8());S.register(h8());S.register(y8());S.register(b8());S.register(VC());S.register(v8());S.register(nh());S.register(S8());S.register(E8());S.register(w8());S.register(x8());S.register(T8());S.register(A8());S.register(HC());S.register(C8());S.register(R8());S.register(k8());S.register(I8());S.register(N8());S.register(_8());S.register(L8());S.register(O8());S.register(D8());S.register(M8());S.register(P8());S.register(F8());S.register(B8());S.register(j8());S.register(U8());S.register(WC());S.register(G8());S.register(q8());const $8=g0(z8);var JC=UD($8,oB);JC.supportedLanguages=GD;const V8={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#272822",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#272822",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"#8292a2"},prolog:{color:"#8292a2"},doctype:{color:"#8292a2"},cdata:{color:"#8292a2"},punctuation:{color:"#f8f8f2"},namespace:{Opacity:".7"},property:{color:"#f92672"},tag:{color:"#f92672"},constant:{color:"#f92672"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},boolean:{color:"#ae81ff"},number:{color:"#ae81ff"},selector:{color:"#a6e22e"},"attr-name":{color:"#a6e22e"},string:{color:"#a6e22e"},char:{color:"#a6e22e"},builtin:{color:"#a6e22e"},inserted:{color:"#a6e22e"},operator:{color:"#f8f8f2"},entity:{color:"#f8f8f2",cursor:"help"},url:{color:"#f8f8f2"},".language-css .token.string":{color:"#f8f8f2"},".style .token.string":{color:"#f8f8f2"},variable:{color:"#f8f8f2"},atrule:{color:"#e6db74"},"attr-value":{color:"#e6db74"},function:{color:"#e6db74"},"class-name":{color:"#e6db74"},keyword:{color:"#66d9ef"},regex:{color:"#fd971f"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}},V=({courseData:e,module:t})=>{const[n,r]=k.useState(null),[a,i]=k.useState("1rem"),[o,s]=k.useState("1.5rem"),l=(p,d)=>{navigator.clipboard.writeText(p).then(()=>{r(d),setTimeout(()=>r(null),2e3)}).catch(g=>{console.error("Failed to copy: ",g)})},u=()=>{window.innerWidth<400?(i("0.7rem"),s(".7rem")):window.innerWidth<768?(i("0.9rem"),s("1rem")):(i("1rem"),s("1.5rem"))};return k.useEffect(()=>{const p=()=>{let b;try{b=JSON.parse(localStorage.getItem("completedModules"))}catch(w){console.error("Error parsing completedModules from localStorage",w),completedProjects=null}b||(b={module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1,module16:!1}),b[t]=!0,localStorage.setItem("completedModules",JSON.stringify(b));try{localStorage.setItem("completedModules",JSON.stringify(b))}catch(w){console.error("Error setting completedModules in localStorage",w)}},d=()=>{let b;try{b=JSON.parse(localStorage.getItem("completedSpringBoot"))}catch(w){console.error("Error parsing completedSpringBoot from localStorage",w),completedProjects=null}b||(b={module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1,module16:!1}),b[t]=!0,localStorage.setItem("completedSpringBoot",JSON.stringify(b));try{localStorage.setItem("completedSpringBoot",JSON.stringify(b))}catch(w){console.error("Error setting completedSpringBoot in localStorage",w)}},g=()=>{let b;try{b=JSON.parse(localStorage.getItem("completedProjects"))}catch(w){console.error("Error parsing completedProjects from localStorage",w),b=null}b||(b={project1:!1,project2:!1,project3:!1,project4:!1,project5:!1}),b[t]=!0;try{localStorage.setItem("completedProjects",JSON.stringify(b))}catch(w){console.error("Error setting completedProjects in localStorage",w)}},h=()=>{let b;try{b=JSON.parse(localStorage.getItem("completedAdvancedProjects"))}catch(w){console.error("Error parsing completedProjects from localStorage",w),b=null}b||(b={project6:!1,project7:!1,project8:!1,project9:!1,project10:!1}),b[t]=!0;try{localStorage.setItem("completedAdvancedProjects",JSON.stringify(b))}catch(w){console.error("Error setting completedAdvancedProjects in localStorage",w)}},v=setInterval(()=>{p(),d(),g(),h()},6e4);return()=>clearInterval(v)},[]),k.useEffect(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[]),c.jsx("div",{className:"course-content ",children:e.map((p,d)=>{switch(p.type){case"margin":return c.jsx("div",{className:"margin"});case"header":switch(p.level){case 1:return c.jsx("h1",{children:p.text},d);case 2:return c.jsx("h2",{children:p.text},d);case 3:return c.jsx("h3",{children:p.text},d);default:return null}case"point":return c.jsx("p",{children:p.text},d);case"example":return c.jsxs("div",{className:"example-container",children:[c.jsx(JC,{language:"java",style:V8,wrapLongLines:!0,className:"pre",customStyle:{fontSize:a,lineHeight:o},children:p.code},d),c.jsxs("button",{className:"copy-button",onClick:()=>l(p.code,d),children:[n===d?c.jsx(hD,{}):c.jsx(fD,{}),n===d?" Copied!":" Copy Code"]})]},d);default:return null}})})},H8=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("div",{className:"course",children:[c.jsx(Le.img,{src:gr,alt:"",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8}}),c.jsxs(Le.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:[c.jsxs("div",{className:"course-content",children:[c.jsxs("h1",{children:[c.jsx("span",{children:"Master Java:"})," A Comprehensive Guide for Developers"]}),c.jsx("h2",{children:"Course Overview"}),c.jsx("p",{children:"This course is designed for developers who want to master Java. You will explore the fundamentals of Java, dive into advanced concepts, and learn how to build robust applications using Java. The course will cover how to leverage Java's features in real-world applications, and best practices for Java development."}),c.jsx("h2",{children:"Prerequisites"}),c.jsx("p",{children:"Basic to intermediate knowledge of programming concepts."}),c.jsx("p",{children:"Familiarity with object-oriented programming principles."})]}),c.jsxs("div",{className:"module-container",children:[c.jsx(F,{to:"/Java/module1/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 1:"})," Introduction to Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module2/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 2:"})," Java Syntax and Conventions"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module3/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 3:"})," Object-Oriented Programming in Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module4/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 4:"})," Data Structures in Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module5/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 5:"})," Basic Input and Output"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module6/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 6:"})," Debugging and Error Handling"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module7/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 7:"})," Advanced Java Programming"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module8/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 8:"})," Collections Framework"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module9/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 9:"})," Java Streams and Lambdas"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module10/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 10:"})," GUI Development"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module11/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 11:"})," Multithreading and Concurrency"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module12/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 12:"})," Networking in Java"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module13/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 13:"})," Java Database Connectivity (JDBC)"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module14/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 14:"})," Java Reflection and Annotations"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module15/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 15:"}),"  Building Java Applications"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/module16/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 16:"})," Java Development Tools"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})})]})]}),c.jsxs("div",{className:"SpringBoot",children:[c.jsxs("h1",{children:["Get a job with Java: ",c.jsx("span",{children:"Spring Boot"})]}),c.jsx("p",{children:"Learn how to build and deploy Spring Boot applications with ease."}),c.jsx("br",{}),c.jsxs("div",{className:"module-container",children:[c.jsx(F,{to:"/Java/SpringBoot/module17",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 17:"})," Introduction to Spring Boot"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module18",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 18:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module19",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 19:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module20",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 20:"})," Creating RESTful APIs with Spring Boot"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module21",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 21:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module22",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 22:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module23",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 23:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module24",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 24:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module25",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 25:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module26",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 26:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/Java/SpringBoot/module27",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Module 27:"})," Set Up, Annotations & Configuration"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})})]})]})]})};function xi(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}const W8=[{user:"Frank",comment:"The combination of Java and Spring Boot was just what I needed to take my Java projects to the next level. The course provided real-world examples that I could apply immediately.",star:5},{user:"Grace",comment:"I had no experience with Spring Boot before, but this course made it so approachable. The projects really helped solidify my understanding.",star:4},{user:"Hannah",comment:"Great course! Learning Java alongside Spring Boot opened up so many new possibilities for building scalable and efficient web applications.",star:5}],Wp=[{id:1,name:"Module 1: Introduction to Java",moduleKey:"module1",completed:!1},{id:2,name:"Module 2: Object-Oriented Programming in Java",moduleKey:"module2",completed:!1},{id:3,name:"Module 3: Advanced Java Programming",moduleKey:"module3",completed:!1},{id:4,name:"Module 4: Building Java Applications",moduleKey:"module4",completed:!1},{id:5,name:"Module 5: Java Syntax and Conventions",moduleKey:"module5",completed:!1},{id:6,name:"Module 6: Data Structures in Java",moduleKey:"module6",completed:!1},{id:7,name:"Module 7: Basic Input and Output",moduleKey:"module7",completed:!1},{id:8,name:"Module 8: Debugging and Error Handling",moduleKey:"module8",completed:!1},{id:9,name:"Module 9: Java Development Tools",moduleKey:"module9",completed:!1},{id:10,name:"Module 10: GUI Development",moduleKey:"module10",completed:!1},{id:11,name:"Module 11: Collections Framework",moduleKey:"module11",completed:!1},{id:12,name:"Module 12: Java Streams and Lambdas",moduleKey:"module12",completed:!1},{id:13,name:"Module 13: Multithreading and Concurrency",moduleKey:"module13",completed:!1},{id:14,name:"Module 14: Networking in Java",moduleKey:"module14",completed:!1},{id:15,name:"Module 15: Java Database Connectivity (JDBC)",moduleKey:"module15",completed:!1},{id:16,name:"Module 16: Java Reflection and Annotations",moduleKey:"module16",completed:!1}],Jp=[{id:17,name:"Module 17: Introduction to Spring Boot",moduleKey:"module17",completed:!1},{id:18,name:"Module 18: Setting Up, Annotations & Configuration",moduleKey:"module18",completed:!1},{id:19,name:"Module 19: Dependency Injection and Spring Context",moduleKey:"module19",completed:!1},{id:20,name:"Module 20: RESTful APIs with Spring Boot",moduleKey:"module20",completed:!1},{id:21,name:"Module 21: Spring Boot and Database Integration",moduleKey:"module21",completed:!1},{id:22,name:"Module 22: Spring Boot Security Basics",moduleKey:"module22",completed:!1},{id:23,name:"Module 23: Building Microservices",moduleKey:"module23",completed:!1},{id:24,name:"Module 24: Testing and Debugging",moduleKey:"module24",completed:!1},{id:25,name:"Module 25: Spring Boot and Thymeleaf",moduleKey:"module25",completed:!1},{id:26,name:"Module 26: Working with Spring Boot Actuator",moduleKey:"module26",completed:!1},{id:27,name:"Module 27: Deploying Spring Boot Applications",moduleKey:"module27",completed:!1}],Kp=[{id:1,name:"Project 1: Introduction to Java",moduleKey:"project1",completed:!1},{id:2,name:"Project 2: Object-Oriented Programming in Java",moduleKey:"project2",completed:!1},{id:3,name:"Project 3: Advanced Java Programming",moduleKey:"project3",completed:!1},{id:4,name:"Project 4: Building Java Applications",moduleKey:"project4",completed:!1},{id:5,name:"Project 5: Java Syntax and Conventions",moduleKey:"project5",completed:!1}],Yp=[{id:6,name:"Project 6: Collections with Inventory",moduleKey:"project6",completed:!1},{id:7,name:"Project 7: Online Exam System",moduleKey:"project7",completed:!1},{id:8,name:"Project 8: Online Course Management System",moduleKey:"project8",completed:!1},{id:9,name:"Project 9: Fitness Tracker Application",moduleKey:"project9",completed:!1},{id:10,name:"Project 10: Job Portal with Resume Parsing",moduleKey:"project10",completed:!1}],J8=()=>{const[e,t]=k.useState([]),[n,r]=k.useState([]),[a,i]=k.useState([]),[o,s]=k.useState([]);k.useEffect(()=>{const h=JSON.parse(localStorage.getItem("completedModules"));console.log(h);const v=Wp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));t(v),console.log(v)},[Wp]),k.useEffect(()=>{const h=JSON.parse(localStorage.getItem("completedSpringBoot"));console.log(h);const v=Jp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));r(v),console.log(v)},[Jp]),k.useEffect(()=>{const h=JSON.parse(localStorage.getItem("completedProjects"));console.log(h);const v=Kp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));i(v),console.log(v)},[Kp]),k.useEffect(()=>{const h=JSON.parse(localStorage.getItem("completedAdvancedProjects"));console.log(h);const v=Yp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));s(v),console.log(v)},[Yp]);const l=()=>{localStorage.setItem("completedModules",JSON.stringify({module1:!1,module2:!1,module3:!1,module4:!1,module5:!1,module6:!1,module7:!1,module8:!1,module9:!1,module10:!1,module11:!1,module12:!1,module13:!1,module14:!1,module15:!1,module16:!1})),console.log(localStorage.getItem("completedModules"));const h=JSON.parse(localStorage.getItem("completedModules"));console.log(h);const v=Wp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));t(v),console.log(v)},u=()=>{localStorage.setItem("completedSpringBoot",JSON.stringify({module17:!1,module18:!1,module19:!1,module20:!1,module21:!1,module22:!1,module23:!1,module24:!1,module25:!1,module26:!1,module27:!1})),console.log(localStorage.getItem("completedSpringBoot"));const h=JSON.parse(localStorage.getItem("completedSpringBoot"));console.log(h);const v=Jp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));r(v),console.log(v)},p=()=>{localStorage.setItem("completedProjects",JSON.stringify({project1:!1,project2:!1,project3:!1,project4:!1,project5:!1})),console.log(localStorage.getItem("completedProjects"));const h=JSON.parse(localStorage.getItem("completedProjects"));console.log(h);const v=Kp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));i(v),console.log(v)},d=()=>{localStorage.setItem("completedAdvancedProjects",JSON.stringify({project6:!1,project7:!1,project8:!1,project9:!1,project10:!1})),console.log(localStorage.getItem("completedAdvancedProjects"));const h=JSON.parse(localStorage.getItem("completedAdvancedProjects"));console.log(h);const v=Yp.map(b=>({...b,completed:h?h[b.moduleKey]:!1}));s(v),console.log(v)};function g(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("div",{className:"my-learning",children:[c.jsxs(Le.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:["My ",c.jsx("span",{children:"Learning Progress"})]}),c.jsx(Le.p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Track your learning journey and explore new resources to enhance your skills."}),c.jsxs(Le.section,{className:"course-overview",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[c.jsxs("h2",{children:["Your ",c.jsx("span",{children:"Courses"})]}),c.jsxs("h3",{children:[c.jsx(ei,{}),"Java"]}),c.jsx("div",{className:"course-list",children:e.map(h=>c.jsxs("div",{className:h.completed?"course-card completed":"course-card",children:[c.jsx("h3",{children:h.name}),h.completed?c.jsx(xi,{className:"blue"}):c.jsx(ti,{})]},h.id))}),c.jsx("button",{onClick:l,className:"cta",children:"Reset modules"}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsxs("h3",{children:[c.jsx(ei,{}),"SpringBoot"]}),c.jsx("div",{className:"course-list",children:n.map(h=>c.jsxs("div",{className:h.completed?"course-card completed":"course-card",children:[c.jsx("h3",{children:h.name}),h.completed?c.jsx(xi,{className:"blue"}):c.jsx(ti,{})]},h.id))}),c.jsx("button",{onClick:u,className:"cta",children:"Reset modules"}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsxs("h2",{children:["Reviewed ",c.jsx("span",{children:"Practise"})]}),c.jsxs("h3",{children:[c.jsx(ei,{}),"Easy Projects"]}),c.jsx("div",{className:"course-list",children:a.map(h=>c.jsxs("div",{className:h.completed?"course-card completed":"course-card",children:[c.jsx("h3",{children:h.name}),h.completed?c.jsx(xi,{className:"blue"}):c.jsx(ti,{})]},h.id))}),c.jsx("button",{onClick:p,className:"cta",children:"Reset projects"}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("br",{}),c.jsxs("h3",{children:[c.jsx(ei,{}),"Advanced Projects"]}),c.jsx("div",{className:"course-list",children:o.map(h=>c.jsxs("div",{className:h.completed?"course-card completed":"course-card",children:[c.jsx("h3",{children:h.name}),h.completed?c.jsx(xi,{className:"blue"}):c.jsx(ti,{})]},h.id))}),c.jsx("button",{onClick:d,className:"cta",children:"Reset projects"})]}),c.jsxs("section",{className:"feedback",children:[c.jsxs("h2",{children:["User ",c.jsx("span",{children:"Feedback"})]}),c.jsx("div",{className:"feedback-list",children:W8.map((h,v)=>c.jsxs("div",{className:"feedback-card",children:[c.jsx("div",{className:"stars",children:Array.from({length:5},(b,w)=>w<h.star?c.jsx(kR,{},w):c.jsx(NR,{},w))}),c.jsxs("p",{children:[c.jsx("strong",{children:h.user}),": ",c.jsx("br",{})," ",h.comment]})]},v))})]}),c.jsxs("section",{className:"cta",children:[c.jsx("h2",{children:"Ready to enhance your skills?"}),c.jsxs("div",{className:"btn-container",children:[c.jsx(F,{to:"/typescript/",onClick:g,className:"cta-btn",children:"Learn more"}),c.jsx(F,{to:"/join/",onClick:g,className:"cta-secondary",children:"Join Us"})]})]})]})},p0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-28.5%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cpath%20d='M216.856339,16.5966031%20C200.285002,8.84328665%20182.566144,3.2084988%20164.041564,0%20C161.766523,4.11318106%20159.108624,9.64549908%20157.276099,14.0464379%20C137.583995,11.0849896%20118.072967,11.0849896%2098.7430163,14.0464379%20C96.9108417,9.64549908%2094.1925838,4.11318106%2091.8971895,0%20C73.3526068,3.2084988%2055.6133949,8.86399117%2039.0420583,16.6376612%20C5.61752293,67.146514%20-3.4433191,116.400813%201.08711069,164.955721%20C23.2560196,181.510915%2044.7403634,191.567697%2065.8621325,198.148576%20C71.0772151,190.971126%2075.7283628,183.341335%2079.7352139,175.300261%20C72.104019,172.400575%2064.7949724,168.822202%2057.8887866,164.667963%20C59.7209612,163.310589%2061.5131304,161.891452%2063.2445898,160.431257%20C105.36741,180.133187%20151.134928,180.133187%20192.754523,160.431257%20C194.506336,161.891452%20196.298154,163.310589%20198.110326,164.667963%20C191.183787,168.842556%20183.854737,172.420929%20176.223542,175.320965%20C180.230393,183.341335%20184.861538,190.991831%20190.096624,198.16893%20C211.238746,191.588051%20232.743023,181.531619%20254.911949,164.955721%20C260.227747,108.668201%20245.831087,59.8662432%20216.856339,16.5966031%20Z%20M85.4738752,135.09489%20C72.8290281,135.09489%2062.4592217,123.290155%2062.4592217,108.914901%20C62.4592217,94.5396472%2072.607595,82.7145587%2085.4738752,82.7145587%20C98.3405064,82.7145587%20108.709962,94.5189427%20108.488529,108.914901%20C108.508531,123.290155%2098.3405064,135.09489%2085.4738752,135.09489%20Z%20M170.525237,135.09489%20C157.88039,135.09489%20147.510584,123.290155%20147.510584,108.914901%20C147.510584,94.5396472%20157.658606,82.7145587%20170.525237,82.7145587%20C183.391518,82.7145587%20193.761324,94.5189427%20193.539891,108.914901%20C193.539891,123.290155%20183.391518,135.09489%20170.525237,135.09489%20Z'%20fill='%23E76F00'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",K8="/LearnJava/assets/community-BAxjZy9F.png";function Y8(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25 173.31 173.31 0 0 1-35.11 10.39 170.05 170.05 0 0 1-62.72-.24 184.45 184.45 0 0 1-35.59-10.4 141.46 141.46 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49 205.62 205.62 0 0 1 48.91-.48 201.62 201.62 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"},child:[]},{tag:"path",attr:{d:"M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zm88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"},child:[]}]})(e)}const X8=()=>{const[e,t]=k.useState(null),n=a=>{t(e===a?null:a)},r=[{question:"Is this community free to join?",answer:"Yes, joining our community on Discord is completely free. We welcome developers of all levels to participate."},{question:"What if I’m new to programming?",answer:"No worries! Our community is very supportive, and we have resources specifically for beginners."},{question:"How active is the community?",answer:"Our community is very active with members from around the globe, so you'll always find someone online to chat with or collaborate on projects."},{question:"Can I contribute to the community?",answer:"Absolutely! We encourage members to share their knowledge, contribute to discussions, and even lead their own sessions or projects."},{question:"How do I stay updated on community activities?",answer:"We have announcement channels where we post updates about upcoming events, new resources, and important community news."}];return c.jsxs("div",{className:"join-community-page",children:[c.jsx("section",{className:"intro-section",children:c.jsxs("div",{className:"intro-content",children:[c.jsxs(Le.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:["Join Our ",c.jsx("span",{children:"Developer Community"})," on Discord"]}),c.jsx(Le.p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Connect, collaborate, and grow with fellow developers in our vibrant Discord community. Whether you're a seasoned pro or just starting, you'll find valuable resources, support, and friendships here."}),c.jsx(Le.img,{src:K8,alt:"Community",draggable:"false",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:1,delay:.6}})]})}),c.jsxs("section",{className:"why-join-section",children:[c.jsxs("h2",{children:["Why ",c.jsx("span",{children:"Join Us"}),"?"]}),c.jsxs("div",{className:"reasons-container",children:[c.jsxs("div",{className:"reason-card",children:[c.jsx("img",{src:p0,alt:"Discord"}),c.jsx("h4",{children:"Real-time Collaboration"}),c.jsx("p",{children:"Work on projects, share your progress, and get instant feedback from a community of like-minded developers and contributors."})]}),c.jsxs("div",{className:"reason-card",children:[c.jsx("img",{src:hg,alt:"Discord"}),c.jsx("h4",{children:"Exclusive Content"}),c.jsx("p",{children:"Access to exclusive tutorials, coding challenges, and live events tailored for our community members on this server."})]}),c.jsxs("div",{className:"reason-card",children:[c.jsx("img",{src:p0,alt:"Discord"}),c.jsx("h4",{children:"Networking Opportunities"}),c.jsx("p",{children:"Expand your professional network, meet potential collaborators, and land job opportunities through our community."})]})]})]}),c.jsxs("section",{className:"get-started-section",children:[c.jsxs("h2",{children:[c.jsx(Y8,{})," How to ",c.jsx("span",{children:"Get Started "})," "]}),c.jsx("p",{children:"Joining is easy! Just follow these steps:"}),c.jsxs("ol",{children:[c.jsxs("li",{children:[c.jsx("strong",{children:"Sign Up:"})," If you don't already have a Discord account, create one for free."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Click the Link:"})," Use the invite link below to join our server."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Introduce Yourself:"})," Head over to the introduction channel and tell us a bit about yourself!"]})]}),c.jsxs("div",{className:"btn-container",children:[c.jsx("a",{href:"https://discord.com/invite/your-server-invite-link",target:"_blank",rel:"noopener noreferrer",className:"cta",children:"Join Discord"}),c.jsx(F,{to:"/",className:"cta-secondary",children:"Return Home"})]})]}),c.jsxs("section",{className:"testimonials-section",children:[c.jsxs("h2",{children:["What Our ",c.jsx("span",{children:"Members Say"})]}),c.jsxs("div",{className:"testimonials-container",children:[c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:'"This community has completely transformed my learning journey. The support and resources available here are unmatched!"'}),c.jsx("h4",{children:"- Jane Doe"})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:'"Joining this Discord server was the best decision I made as a developer. The networking opportunities are fantastic!"'}),c.jsx("h4",{children:"- John Smith"})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:'"The exclusive content and real-time collaboration have helped me grow both personally and professionally."'}),c.jsx("h4",{children:"- Emily Davis"})]})]})]}),c.jsxs("section",{className:"faqs-section",children:[c.jsxs("h2",{children:[c.jsx("span",{children:"F"}),"requently ",c.jsx("span",{children:"A"}),"sked ",c.jsx("span",{children:"Q"}),"uestions"]}),c.jsx("div",{className:"faqs-container",children:r.map((a,i)=>c.jsxs("div",{className:"faq-item",children:[c.jsxs("h4",{onClick:()=>n(i),className:"faq-question",children:[a.question,c.jsx("span",{className:`faq-toggle-icon ${e===i?"open":""}`,children:e===i?"-":"+"})]}),c.jsx("p",{className:`faq-answer ${e===i?"open":""}`,children:a.answer})]},i))})]})]})},Z8=()=>{function e(){window.scrollTo({top:0,behavior:"smooth"})}return c.jsxs("div",{className:"course",children:[c.jsx(Le.img,{src:gr,alt:"",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8}}),c.jsxs(Le.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:[c.jsxs("div",{className:"course-content",children:[c.jsxs("h1",{children:["Practise Through ",c.jsx("span",{children:"Projects"})]}),c.jsx("p",{children:"Engage with real-world Java programming by building practical projects that reinforce your understanding of core concepts. Below are a series of projects, each focusing on different aspects of Java development. Each project includes a brief description, followed by the core concepts and features you’ll work on. These projects are designed to progressively challenge your skills, ensuring a comprehensive learning experience."})]}),c.jsx("h2",{children:"Intermediate level:"}),c.jsx("br",{}),c.jsxs("div",{className:"module-container",children:[c.jsx(F,{to:"/practise/project1/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 1:"})," Simple Calculator"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project2/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 2:"})," Todo List Application"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project3/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 3:"})," Currency Converter"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project4/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 4:"})," Tic-Tac-Toe Game"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project5/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 5:"})," Basic Inventory Management System"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})})]}),c.jsx("h2",{children:"Advanced level:"}),c.jsx("br",{}),c.jsxs("div",{className:"module-container",children:[c.jsx(F,{to:"/practise/project6/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 6:"})," Collections with Inventory"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project7/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 7:"})," Online Exam System"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project8/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 8:"})," Online Course Management System"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project9/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 9:"})," Fitness Tracker Application"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})}),c.jsx(F,{to:"/practise/project10/",onClick:e,children:c.jsxs("div",{className:"module-link",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Project 10:"})," Job Portal with Resume Parsing"]}),c.jsxs("p",{children:["Start now ",c.jsx(H,{})]})]})})]})]})]})};function Q8(){return c.jsxs(c.Fragment,{children:[c.jsx(FN,{}),c.jsxs(TN,{children:[c.jsx(U,{exact:!0,path:"/",element:c.jsx(gD,{})}),c.jsx(U,{path:"/Java/",element:c.jsx(H8,{})}),c.jsx(U,{path:"/Java/module1",element:c.jsx(V,{courseData:$.module1,module:"module1"})}),c.jsx(U,{path:"/Java/module2",element:c.jsx(V,{courseData:$.module2,module:"module2"})}),c.jsx(U,{path:"/Java/module3",element:c.jsx(V,{courseData:$.module3,module:"module3"})}),c.jsx(U,{path:"/Java/module4",element:c.jsx(V,{courseData:$.module4,module:"module4"})}),c.jsx(U,{path:"/Java/module5",element:c.jsx(V,{courseData:$.module5,module:"module5"})}),c.jsx(U,{path:"/Java/module6",element:c.jsx(V,{courseData:$.module6,module:"module6"})}),c.jsx(U,{path:"/Java/module7",element:c.jsx(V,{courseData:$.module7,module:"module7"})}),c.jsx(U,{path:"/Java/module8",element:c.jsx(V,{courseData:$.module8,module:"module8"})}),c.jsx(U,{path:"/Java/module9",element:c.jsx(V,{courseData:$.module9,module:"module9"})}),c.jsx(U,{path:"/Java/module10",element:c.jsx(V,{courseData:$.module10,module:"module10"})}),c.jsx(U,{path:"/Java/module11",element:c.jsx(V,{courseData:$.module11,module:"module11"})}),c.jsx(U,{path:"/Java/module12",element:c.jsx(V,{courseData:$.module12,module:"module12"})}),c.jsx(U,{path:"/Java/module13",element:c.jsx(V,{courseData:$.module13,module:"module13"})}),c.jsx(U,{path:"/Java/module14",element:c.jsx(V,{courseData:$.module14,module:"module14"})}),c.jsx(U,{path:"/Java/module15",element:c.jsx(V,{courseData:$.module15,module:"module15"})}),c.jsx(U,{path:"/Java/module16",element:c.jsx(V,{courseData:$.module16,module:"module16"})}),c.jsx(U,{path:"/Java/SpringBoot/module17",element:c.jsx(V,{courseData:$.module17,module:"module17"})}),c.jsx(U,{path:"/Java/SpringBoot/module18",element:c.jsx(V,{courseData:$.module18,module:"module18"})}),c.jsx(U,{path:"/Java/SpringBoot/module19",element:c.jsx(V,{courseData:$.module19,module:"module19"})}),c.jsx(U,{path:"/Java/SpringBoot/module20",element:c.jsx(V,{courseData:$.module20,module:"module20"})}),c.jsx(U,{path:"/Java/SpringBoot/module21",element:c.jsx(V,{courseData:$.module21,module:"module21"})}),c.jsx(U,{path:"/Java/SpringBoot/module22",element:c.jsx(V,{courseData:$.module22,module:"module22"})}),c.jsx(U,{path:"/Java/SpringBoot/module23",element:c.jsx(V,{courseData:$.module23,module:"module23"})}),c.jsx(U,{path:"/Java/SpringBoot/module24",element:c.jsx(V,{courseData:$.module24,module:"module24"})}),c.jsx(U,{path:"/Java/SpringBoot/module25",element:c.jsx(V,{courseData:$.module25,module:"module25"})}),c.jsx(U,{path:"/Java/SpringBoot/module26",element:c.jsx(V,{courseData:$.module26,module:"module26"})}),c.jsx(U,{path:"/Java/SpringBoot/module27",element:c.jsx(V,{courseData:$.module27,module:"module26"})}),c.jsx(U,{path:"/practise/",element:c.jsx(Z8,{})}),c.jsx(U,{path:"/practise/project1",element:c.jsx(V,{courseData:$.project1,module:"project1"})}),c.jsx(U,{path:"/practise/project2",element:c.jsx(V,{courseData:$.project2,module:"project2"})}),c.jsx(U,{path:"/practise/project3",element:c.jsx(V,{courseData:$.project3,module:"project3"})}),c.jsx(U,{path:"/practise/project4",element:c.jsx(V,{courseData:$.project4,module:"project4"})}),c.jsx(U,{path:"/practise/project5",element:c.jsx(V,{courseData:$.project5,module:"project5"})}),c.jsx(U,{path:"/practise/project6",element:c.jsx(V,{courseData:$.project6,module:"project6"})}),c.jsx(U,{path:"/practise/project7",element:c.jsx(V,{courseData:$.project7,module:"project7"})}),c.jsx(U,{path:"/practise/project8",element:c.jsx(V,{courseData:$.project8,module:"project8"})}),c.jsx(U,{path:"/practise/project9",element:c.jsx(V,{courseData:$.project9,module:"project9"})}),c.jsx(U,{path:"/practise/project10",element:c.jsx(V,{courseData:$.project10,module:"project10"})}),c.jsx(U,{path:"/learning/",element:c.jsx(J8,{})}),c.jsx(U,{path:"/join/",element:c.jsx(X8,{})})]}),c.jsx(PN,{})]})}var dg={},m0=MI;dg.createRoot=m0.createRoot,dg.hydrateRoot=m0.hydrateRoot;dg.createRoot(document.getElementById("root")).render(c.jsx(Te.StrictMode,{children:c.jsx(_N,{children:c.jsx(Q8,{})})}));