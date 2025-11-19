function Hu(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Ku(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ss={exports:{}},ca={},ks={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),Uu=Symbol.for("react.portal"),Vu=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),af=Symbol.for("react.lazy"),io=Symbol.iterator;function lf(n){return n===null||typeof n!="object"?null:(n=io&&n[io]||n["@@iterator"],typeof n=="function"?n:null)}var ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Ls={};function dt(n,e,t){this.props=n,this.context=e,this.refs=Ls,this.updater=t||ws}dt.prototype.isReactComponent={};dt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};dt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Os(){}Os.prototype=dt.prototype;function ar(n,e,t){this.props=n,this.context=e,this.refs=Ls,this.updater=t||ws}var lr=ar.prototype=new Os;lr.constructor=ar;Is(lr,dt.prototype);lr.isPureReactComponent=!0;var ao=Array.isArray,Fs=Object.prototype.hasOwnProperty,rr={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function Cs(n,e,t){var i,a={},l=null,r=null;if(e!=null)for(i in e.ref!==void 0&&(r=e.ref),e.key!==void 0&&(l=""+e.key),e)Fs.call(e,i)&&!Ns.hasOwnProperty(i)&&(a[i]=e[i]);var o=arguments.length-2;if(o===1)a.children=t;else if(1<o){for(var s=Array(o),p=0;p<o;p++)s[p]=arguments[p+2];a.children=s}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)a[i]===void 0&&(a[i]=o[i]);return{$$typeof:ii,type:n,key:l,ref:r,props:a,_owner:rr.current}}function rf(n,e){return{$$typeof:ii,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function or(n){return typeof n=="object"&&n!==null&&n.$$typeof===ii}function of(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var lo=/\/+/g;function Da(n,e){return typeof n=="object"&&n!==null&&n.key!=null?of(""+n.key):e.toString(36)}function Fi(n,e,t,i,a){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var r=!1;if(n===null)r=!0;else switch(l){case"string":case"number":r=!0;break;case"object":switch(n.$$typeof){case ii:case Uu:r=!0}}if(r)return r=n,a=a(r),n=i===""?"."+Da(r,0):i,ao(a)?(t="",n!=null&&(t=n.replace(lo,"$&/")+"/"),Fi(a,e,t,"",function(p){return p})):a!=null&&(or(a)&&(a=rf(a,t+(!a.key||r&&r.key===a.key?"":(""+a.key).replace(lo,"$&/")+"/")+n)),e.push(a)),1;if(r=0,i=i===""?".":i+":",ao(n))for(var o=0;o<n.length;o++){l=n[o];var s=i+Da(l,o);r+=Fi(l,e,t,s,a)}else if(s=lf(n),typeof s=="function")for(n=s.call(n),o=0;!(l=n.next()).done;)l=l.value,s=i+Da(l,o++),r+=Fi(l,e,t,s,a);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return r}function fi(n,e,t){if(n==null)return n;var i=[],a=0;return Fi(n,i,"","",function(l){return e.call(t,l,a++)}),i}function sf(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Ni={transition:null},pf={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Ni,ReactCurrentOwner:rr};function Ps(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:fi,forEach:function(n,e,t){fi(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return fi(n,function(){e++}),e},toArray:function(n){return fi(n,function(e){return e})||[]},only:function(n){if(!or(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};R.Component=dt;R.Fragment=Vu;R.Profiler=Zu;R.PureComponent=ar;R.StrictMode=$u;R.Suspense=ef;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;R.act=Ps;R.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Is({},n.props),a=n.key,l=n.ref,r=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,r=rr.current),e.key!==void 0&&(a=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(s in e)Fs.call(e,s)&&!Ns.hasOwnProperty(s)&&(i[s]=e[s]===void 0&&o!==void 0?o[s]:e[s])}var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){o=Array(s);for(var p=0;p<s;p++)o[p]=arguments[p+2];i.children=o}return{$$typeof:ii,type:n.type,key:a,ref:l,props:i,_owner:r}};R.createContext=function(n){return n={$$typeof:Ju,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Qu,_context:n},n.Consumer=n};R.createElement=Cs;R.createFactory=function(n){var e=Cs.bind(null,n);return e.type=n,e};R.createRef=function(){return{current:null}};R.forwardRef=function(n){return{$$typeof:nf,render:n}};R.isValidElement=or;R.lazy=function(n){return{$$typeof:af,_payload:{_status:-1,_result:n},_init:sf}};R.memo=function(n,e){return{$$typeof:tf,type:n,compare:e===void 0?null:e}};R.startTransition=function(n){var e=Ni.transition;Ni.transition={};try{n()}finally{Ni.transition=e}};R.unstable_act=Ps;R.useCallback=function(n,e){return fn.current.useCallback(n,e)};R.useContext=function(n){return fn.current.useContext(n)};R.useDebugValue=function(){};R.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};R.useEffect=function(n,e){return fn.current.useEffect(n,e)};R.useId=function(){return fn.current.useId()};R.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};R.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};R.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};R.useMemo=function(n,e){return fn.current.useMemo(n,e)};R.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};R.useRef=function(n){return fn.current.useRef(n)};R.useState=function(n){return fn.current.useState(n)};R.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};R.useTransition=function(){return fn.current.useTransition()};R.version="18.3.1";ks.exports=R;var k=ks.exports;const _s=Ku(k),uf=Hu({__proto__:null,default:_s},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=k,df=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),mf=Object.prototype.hasOwnProperty,hf=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gf={key:!0,ref:!0,__self:!0,__source:!0};function Rs(n,e,t){var i,a={},l=null,r=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(r=e.ref);for(i in e)mf.call(e,i)&&!gf.hasOwnProperty(i)&&(a[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)a[i]===void 0&&(a[i]=e[i]);return{$$typeof:df,type:n,key:l,ref:r,props:a,_owner:hf.current}}ca.Fragment=cf;ca.jsx=Rs;ca.jsxs=Rs;Ss.exports=ca;var v=Ss.exports,ol={},Ds={exports:{}},Sn={},Ms={exports:{}},zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,P){var _=O.length;O.push(P);n:for(;0<_;){var G=_-1>>>1,Q=O[G];if(0<a(Q,P))O[G]=P,O[_]=Q,_=G;else break n}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var P=O[0],_=O.pop();if(_!==P){O[0]=_;n:for(var G=0,Q=O.length,pi=Q>>>1;G<pi;){var ke=2*(G+1)-1,Ra=O[ke],we=ke+1,ui=O[we];if(0>a(Ra,_))we<Q&&0>a(ui,Ra)?(O[G]=ui,O[we]=_,G=we):(O[G]=Ra,O[ke]=_,G=ke);else if(we<Q&&0>a(ui,_))O[G]=ui,O[we]=_,G=we;else break n}}return P}function a(O,P){var _=O.sortIndex-P.sortIndex;return _!==0?_:O.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var r=Date,o=r.now();n.unstable_now=function(){return r.now()-o}}var s=[],p=[],c=1,d=null,h=3,x=!1,b=!1,T=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var P=t(p);P!==null;){if(P.callback===null)i(p);else if(P.startTime<=O)i(p),P.sortIndex=P.expirationTime,e(s,P);else break;P=t(p)}}function y(O){if(T=!1,m(O),!b)if(t(s)!==null)b=!0,Pa(g);else{var P=t(p);P!==null&&_a(y,P.startTime-O)}}function g(O,P){b=!1,T&&(T=!1,f(N),N=-1),x=!0;var _=h;try{for(m(P),d=t(s);d!==null&&(!(d.expirationTime>P)||O&&!Z());){var G=d.callback;if(typeof G=="function"){d.callback=null,h=d.priorityLevel;var Q=G(d.expirationTime<=P);P=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(s)&&i(s),m(P)}else i(s);d=t(s)}if(d!==null)var pi=!0;else{var ke=t(p);ke!==null&&_a(y,ke.startTime-P),pi=!1}return pi}finally{d=null,h=_,x=!1}}var I=!1,F=null,N=-1,z=5,C=-1;function Z(){return!(n.unstable_now()-C<z)}function Wn(){if(F!==null){var O=n.unstable_now();C=O;var P=!0;try{P=F(!0,O)}finally{P?gt():(I=!1,F=null)}}else I=!1}var gt;if(typeof u=="function")gt=function(){u(Wn)};else if(typeof MessageChannel<"u"){var to=new MessageChannel,Gu=to.port2;to.port1.onmessage=Wn,gt=function(){Gu.postMessage(null)}}else gt=function(){w(Wn,0)};function Pa(O){F=O,I||(I=!0,gt())}function _a(O,P){N=w(function(){O(n.unstable_now())},P)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){b||x||(b=!0,Pa(g))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(s)},n.unstable_next=function(O){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var _=h;h=P;try{return O()}finally{h=_}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var _=h;h=O;try{return P()}finally{h=_}},n.unstable_scheduleCallback=function(O,P,_){var G=n.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=_+Q,O={id:c++,callback:P,priorityLevel:O,startTime:_,expirationTime:Q,sortIndex:-1},_>G?(O.sortIndex=_,e(p,O),t(s)===null&&O===t(p)&&(T?(f(N),N=-1):T=!0,_a(y,_-G))):(O.sortIndex=Q,e(s,O),b||x||(b=!0,Pa(g))),O},n.unstable_shouldYield=Z,n.unstable_wrapCallback=function(O){var P=h;return function(){var _=h;h=P;try{return O.apply(this,arguments)}finally{h=_}}}})(zs);Ms.exports=zs;var yf=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=k,vn=yf;function S(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var As=new Set,Et={};function Ae(n,e){lt(n,e),lt(n+"Capture",e)}function lt(n,e){for(Et[n]=e,n=0;n<e.length;n++)As.add(e[n])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,bf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ro={},oo={};function Tf(n){return sl.call(oo,n)?!0:sl.call(ro,n)?!1:bf.test(n)?oo[n]=!0:(ro[n]=!0,!1)}function vf(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Sf(n,e,t,i){if(e===null||typeof e>"u"||vf(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,a,l,r){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=r}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){an[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];an[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){an[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){an[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){an[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){an[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){an[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){an[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){an[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var sr=/[\-:]([a-z])/g;function pr(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(sr,pr);an[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(sr,pr);an[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(sr,pr);an[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){an[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});an.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){an[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ur(n,e,t,i){var a=an.hasOwnProperty(e)?an[e]:null;(a!==null?a.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sf(e,t,a,i)&&(t=null),i||a===null?Tf(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):a.mustUseProperty?n[a.propertyName]=t===null?a.type===3?!1:"":t:(e=a.attributeName,i=a.attributeNamespace,t===null?n.removeAttribute(e):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qn=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),je=Symbol.for("react.portal"),We=Symbol.for("react.fragment"),fr=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),Es=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),dr=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),cr=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),so=Symbol.iterator;function yt(n){return n===null||typeof n!="object"?null:(n=so&&n[so]||n["@@iterator"],typeof n=="function"?n:null)}var B=Object.assign,Ma;function It(n){if(Ma===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ma=e&&e[1]||""}return`
`+Ma+n}var za=!1;function Aa(n,e){if(!n||za)return"";za=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(p){var i=p}Reflect.construct(n,[],e)}else{try{e.call()}catch(p){i=p}n.call(e.prototype)}else{try{throw Error()}catch(p){i=p}n()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=i.stack.split(`
`),r=a.length-1,o=l.length-1;1<=r&&0<=o&&a[r]!==l[o];)o--;for(;1<=r&&0<=o;r--,o--)if(a[r]!==l[o]){if(r!==1||o!==1)do if(r--,o--,0>o||a[r]!==l[o]){var s=`
`+a[r].replace(" at new "," at ");return n.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",n.displayName)),s}while(1<=r&&0<=o);break}}}finally{za=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?It(n):""}function kf(n){switch(n.tag){case 5:return It(n.type);case 16:return It("Lazy");case 13:return It("Suspense");case 19:return It("SuspenseList");case 0:case 2:case 15:return n=Aa(n.type,!1),n;case 11:return n=Aa(n.type.render,!1),n;case 1:return n=Aa(n.type,!0),n;default:return""}}function dl(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case We:return"Fragment";case je:return"Portal";case pl:return"Profiler";case fr:return"StrictMode";case ul:return"Suspense";case fl:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ys:return(n.displayName||"Context")+".Consumer";case Es:return(n._context.displayName||"Context")+".Provider";case dr:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cr:return e=n.displayName||null,e!==null?e:dl(n.type)||"Memo";case ee:e=n._payload,n=n._init;try{return dl(n(e))}catch{}}return null}function wf(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(e);case 8:return e===fr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function js(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function If(n){var e=js(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){i=""+r,l.call(this,r)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ci(n){n._valueTracker||(n._valueTracker=If(n))}function Ws(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=js(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Wi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function cl(n,e){var t=e.checked;return B({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function po(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ye(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bs(n,e){e=e.checked,e!=null&&ur(n,"checked",e,!1)}function ml(n,e){Bs(n,e);var t=ye(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?hl(n,e.type,t):e.hasOwnProperty("defaultValue")&&hl(n,e.type,ye(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function uo(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function hl(n,e,t){(e!=="number"||Wi(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lt=Array.isArray;function Je(n,e,t,i){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ye(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,i&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function gl(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return B({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fo(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(S(92));if(Lt(t)){if(1<t.length)throw Error(S(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ye(t)}}function Xs(n,e){var t=ye(e.value),i=ye(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function co(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Gs(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Gs(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var mi,Hs=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,a){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,a)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mi.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Yt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lf=["Webkit","ms","Moz","O"];Object.keys(Nt).forEach(function(n){Lf.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Nt[e]=Nt[n]})});function Ks(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Nt.hasOwnProperty(n)&&Nt[n]?(""+e).trim():e+"px"}function Us(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,a=Ks(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,a):n[t]=a}}var Of=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(n,e){if(e){if(Of[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function bl(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function mr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vl=null,nt=null,et=null;function mo(n){if(n=ri(n)){if(typeof vl!="function")throw Error(S(280));var e=n.stateNode;e&&(e=xa(e),vl(n.stateNode,n.type,e))}}function Vs(n){nt?et?et.push(n):et=[n]:nt=n}function $s(){if(nt){var n=nt,e=et;if(et=nt=null,mo(n),e)for(n=0;n<e.length;n++)mo(e[n])}}function Zs(n,e){return n(e)}function Qs(){}var Ea=!1;function Js(n,e,t){if(Ea)return n(e,t);Ea=!0;try{return Zs(n,e,t)}finally{Ea=!1,(nt!==null||et!==null)&&(Qs(),$s())}}function qt(n,e){var t=n.stateNode;if(t===null)return null;var i=xa(t);if(i===null)return null;t=i[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(S(231,e,typeof t));return t}var Sl=!1;if(Un)try{var xt={};Object.defineProperty(xt,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",xt,xt),window.removeEventListener("test",xt,xt)}catch{Sl=!1}function Ff(n,e,t,i,a,l,r,o,s){var p=Array.prototype.slice.call(arguments,3);try{e.apply(t,p)}catch(c){this.onError(c)}}var Ct=!1,Bi=null,Xi=!1,kl=null,Nf={onError:function(n){Ct=!0,Bi=n}};function Cf(n,e,t,i,a,l,r,o,s){Ct=!1,Bi=null,Ff.apply(Nf,arguments)}function Pf(n,e,t,i,a,l,r,o,s){if(Cf.apply(this,arguments),Ct){if(Ct){var p=Bi;Ct=!1,Bi=null}else throw Error(S(198));Xi||(Xi=!0,kl=p)}}function Ee(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function np(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ho(n){if(Ee(n)!==n)throw Error(S(188))}function _f(n){var e=n.alternate;if(!e){if(e=Ee(n),e===null)throw Error(S(188));return e!==n?null:n}for(var t=n,i=e;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){t=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return ho(a),n;if(l===i)return ho(a),e;l=l.sibling}throw Error(S(188))}if(t.return!==i.return)t=a,i=l;else{for(var r=!1,o=a.child;o;){if(o===t){r=!0,t=a,i=l;break}if(o===i){r=!0,i=a,t=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===t){r=!0,t=l,i=a;break}if(o===i){r=!0,i=l,t=a;break}o=o.sibling}if(!r)throw Error(S(189))}}if(t.alternate!==i)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?n:e}function ep(n){return n=_f(n),n!==null?tp(n):null}function tp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=tp(n);if(e!==null)return e;n=n.sibling}return null}var ip=vn.unstable_scheduleCallback,go=vn.unstable_cancelCallback,Rf=vn.unstable_shouldYield,Df=vn.unstable_requestPaint,H=vn.unstable_now,Mf=vn.unstable_getCurrentPriorityLevel,hr=vn.unstable_ImmediatePriority,ap=vn.unstable_UserBlockingPriority,Gi=vn.unstable_NormalPriority,zf=vn.unstable_LowPriority,lp=vn.unstable_IdlePriority,ma=null,qn=null;function Af(n){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(ma,n,void 0,(n.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:qf,Ef=Math.log,Yf=Math.LN2;function qf(n){return n>>>=0,n===0?32:31-(Ef(n)/Yf|0)|0}var hi=64,gi=4194304;function Ot(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hi(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,a=n.suspendedLanes,l=n.pingedLanes,r=t&268435455;if(r!==0){var o=r&~a;o!==0?i=Ot(o):(l&=r,l!==0&&(i=Ot(l)))}else r=t&~a,r!==0?i=Ot(r):l!==0&&(i=Ot(l));if(i===0)return 0;if(e!==0&&e!==i&&!(e&a)&&(a=i&-i,l=e&-e,a>=l||a===16&&(l&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Dn(e),a=1<<t,i|=n[t],e&=~a;return i}function jf(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes;0<l;){var r=31-Dn(l),o=1<<r,s=a[r];s===-1?(!(o&t)||o&i)&&(a[r]=jf(o,e)):s<=e&&(n.expiredLanes|=o),l&=~o}}function wl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function rp(){var n=hi;return hi<<=1,!(hi&4194240)&&(hi=64),n}function Ya(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ai(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Dn(e),n[e]=t}function Bf(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var a=31-Dn(t),l=1<<a;e[a]=0,i[a]=-1,n[a]=-1,t&=~l}}function gr(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Dn(t),a=1<<i;a&e|n[i]&e&&(n[i]|=e),t&=~a}}var M=0;function op(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var sp,yr,pp,up,fp,Il=!1,yi=[],se=null,pe=null,ue=null,jt=new Map,Wt=new Map,ie=[],Xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yo(n,e){switch(n){case"focusin":case"focusout":se=null;break;case"dragenter":case"dragleave":pe=null;break;case"mouseover":case"mouseout":ue=null;break;case"pointerover":case"pointerout":jt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(e.pointerId)}}function bt(n,e,t,i,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},e!==null&&(e=ri(e),e!==null&&yr(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function Gf(n,e,t,i,a){switch(e){case"focusin":return se=bt(se,n,e,t,i,a),!0;case"dragenter":return pe=bt(pe,n,e,t,i,a),!0;case"mouseover":return ue=bt(ue,n,e,t,i,a),!0;case"pointerover":var l=a.pointerId;return jt.set(l,bt(jt.get(l)||null,n,e,t,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Wt.set(l,bt(Wt.get(l)||null,n,e,t,i,a)),!0}return!1}function dp(n){var e=Oe(n.target);if(e!==null){var t=Ee(e);if(t!==null){if(e=t.tag,e===13){if(e=np(t),e!==null){n.blockedOn=e,fp(n.priority,function(){pp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ci(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ll(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Tl=i,t.target.dispatchEvent(i),Tl=null}else return e=ri(t),e!==null&&yr(e),n.blockedOn=t,!1;e.shift()}return!0}function xo(n,e,t){Ci(n)&&t.delete(e)}function Hf(){Il=!1,se!==null&&Ci(se)&&(se=null),pe!==null&&Ci(pe)&&(pe=null),ue!==null&&Ci(ue)&&(ue=null),jt.forEach(xo),Wt.forEach(xo)}function Tt(n,e){n.blockedOn===e&&(n.blockedOn=null,Il||(Il=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Hf)))}function Bt(n){function e(a){return Tt(a,n)}if(0<yi.length){Tt(yi[0],n);for(var t=1;t<yi.length;t++){var i=yi[t];i.blockedOn===n&&(i.blockedOn=null)}}for(se!==null&&Tt(se,n),pe!==null&&Tt(pe,n),ue!==null&&Tt(ue,n),jt.forEach(e),Wt.forEach(e),t=0;t<ie.length;t++)i=ie[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ie.length&&(t=ie[0],t.blockedOn===null);)dp(t),t.blockedOn===null&&ie.shift()}var tt=Qn.ReactCurrentBatchConfig,Ki=!0;function Kf(n,e,t,i){var a=M,l=tt.transition;tt.transition=null;try{M=1,xr(n,e,t,i)}finally{M=a,tt.transition=l}}function Uf(n,e,t,i){var a=M,l=tt.transition;tt.transition=null;try{M=4,xr(n,e,t,i)}finally{M=a,tt.transition=l}}function xr(n,e,t,i){if(Ki){var a=Ll(n,e,t,i);if(a===null)Va(n,e,i,Ui,t),yo(n,i);else if(Gf(a,n,e,t,i))i.stopPropagation();else if(yo(n,i),e&4&&-1<Xf.indexOf(n)){for(;a!==null;){var l=ri(a);if(l!==null&&sp(l),l=Ll(n,e,t,i),l===null&&Va(n,e,i,Ui,t),l===a)break;a=l}a!==null&&i.stopPropagation()}else Va(n,e,i,null,t)}}var Ui=null;function Ll(n,e,t,i){if(Ui=null,n=mr(i),n=Oe(n),n!==null)if(e=Ee(n),e===null)n=null;else if(t=e.tag,t===13){if(n=np(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ui=n,null}function cp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mf()){case hr:return 1;case ap:return 4;case Gi:case zf:return 16;case lp:return 536870912;default:return 16}default:return 16}}var le=null,br=null,Pi=null;function mp(){if(Pi)return Pi;var n,e=br,t=e.length,i,a="value"in le?le.value:le.textContent,l=a.length;for(n=0;n<t&&e[n]===a[n];n++);var r=t-n;for(i=1;i<=r&&e[t-i]===a[l-i];i++);return Pi=a.slice(n,1<i?1-i:void 0)}function _i(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xi(){return!0}function bo(){return!1}function kn(n){function e(t,i,a,l,r){this._reactName=t,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xi:bo,this.isPropagationStopped=bo,this}return B(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),e}var ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tr=kn(ct),li=B({},ct,{view:0,detail:0}),Vf=kn(li),qa,ja,vt,ha=B({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vt&&(vt&&n.type==="mousemove"?(qa=n.screenX-vt.screenX,ja=n.screenY-vt.screenY):ja=qa=0,vt=n),qa)},movementY:function(n){return"movementY"in n?n.movementY:ja}}),To=kn(ha),$f=B({},ha,{dataTransfer:0}),Zf=kn($f),Qf=B({},li,{relatedTarget:0}),Wa=kn(Qf),Jf=B({},ct,{animationName:0,elapsedTime:0,pseudoElement:0}),nd=kn(Jf),ed=B({},ct,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),td=kn(ed),id=B({},ct,{data:0}),vo=kn(id),ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function od(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=rd[n])?!!e[n]:!1}function vr(){return od}var sd=B({},li,{key:function(n){if(n.key){var e=ad[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=_i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ld[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vr,charCode:function(n){return n.type==="keypress"?_i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pd=kn(sd),ud=B({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),So=kn(ud),fd=B({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vr}),dd=kn(fd),cd=B({},ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),md=kn(cd),hd=B({},ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gd=kn(hd),yd=[9,13,27,32],Sr=Un&&"CompositionEvent"in window,Pt=null;Un&&"documentMode"in document&&(Pt=document.documentMode);var xd=Un&&"TextEvent"in window&&!Pt,hp=Un&&(!Sr||Pt&&8<Pt&&11>=Pt),ko=" ",wo=!1;function gp(n,e){switch(n){case"keyup":return yd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Be=!1;function bd(n,e){switch(n){case"compositionend":return yp(e);case"keypress":return e.which!==32?null:(wo=!0,ko);case"textInput":return n=e.data,n===ko&&wo?null:n;default:return null}}function Td(n,e){if(Be)return n==="compositionend"||!Sr&&gp(n,e)?(n=mp(),Pi=br=le=null,Be=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hp&&e.locale!=="ko"?null:e.data;default:return null}}var vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vd[n.type]:e==="textarea"}function xp(n,e,t,i){Vs(i),e=Vi(e,"onChange"),0<e.length&&(t=new Tr("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var _t=null,Xt=null;function Sd(n){Np(n,0)}function ga(n){var e=He(n);if(Ws(e))return n}function kd(n,e){if(n==="change")return e}var bp=!1;if(Un){var Ba;if(Un){var Xa="oninput"in document;if(!Xa){var Lo=document.createElement("div");Lo.setAttribute("oninput","return;"),Xa=typeof Lo.oninput=="function"}Ba=Xa}else Ba=!1;bp=Ba&&(!document.documentMode||9<document.documentMode)}function Oo(){_t&&(_t.detachEvent("onpropertychange",Tp),Xt=_t=null)}function Tp(n){if(n.propertyName==="value"&&ga(Xt)){var e=[];xp(e,Xt,n,mr(n)),Js(Sd,e)}}function wd(n,e,t){n==="focusin"?(Oo(),_t=e,Xt=t,_t.attachEvent("onpropertychange",Tp)):n==="focusout"&&Oo()}function Id(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ga(Xt)}function Ld(n,e){if(n==="click")return ga(e)}function Od(n,e){if(n==="input"||n==="change")return ga(e)}function Fd(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var zn=typeof Object.is=="function"?Object.is:Fd;function Gt(n,e){if(zn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var a=t[i];if(!sl.call(e,a)||!zn(n[a],e[a]))return!1}return!0}function Fo(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function No(n,e){var t=Fo(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Fo(t)}}function vp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?vp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Sp(){for(var n=window,e=Wi();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wi(n.document)}return e}function kr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Nd(n){var e=Sp(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&vp(t.ownerDocument.documentElement,t)){if(i!==null&&kr(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,l=Math.min(i.start,a);i=i.end===void 0?l:Math.min(i.end,a),!n.extend&&l>i&&(a=i,i=l,l=a),a=No(t,l);var r=No(t,i);a&&r&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==r.node||n.focusOffset!==r.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),l>i?(n.addRange(e),n.extend(r.node,r.offset)):(e.setEnd(r.node,r.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Cd=Un&&"documentMode"in document&&11>=document.documentMode,Xe=null,Ol=null,Rt=null,Fl=!1;function Co(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fl||Xe==null||Xe!==Wi(i)||(i=Xe,"selectionStart"in i&&kr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Rt&&Gt(Rt,i)||(Rt=i,i=Vi(Ol,"onSelect"),0<i.length&&(e=new Tr("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Xe)))}function bi(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ge={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},Ga={},kp={};Un&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ge.animationend.animation,delete Ge.animationiteration.animation,delete Ge.animationstart.animation),"TransitionEvent"in window||delete Ge.transitionend.transition);function ya(n){if(Ga[n])return Ga[n];if(!Ge[n])return n;var e=Ge[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in kp)return Ga[n]=e[t];return n}var wp=ya("animationend"),Ip=ya("animationiteration"),Lp=ya("animationstart"),Op=ya("transitionend"),Fp=new Map,Po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function be(n,e){Fp.set(n,e),Ae(e,[n])}for(var Ha=0;Ha<Po.length;Ha++){var Ka=Po[Ha],Pd=Ka.toLowerCase(),_d=Ka[0].toUpperCase()+Ka.slice(1);be(Pd,"on"+_d)}be(wp,"onAnimationEnd");be(Ip,"onAnimationIteration");be(Lp,"onAnimationStart");be("dblclick","onDoubleClick");be("focusin","onFocus");be("focusout","onBlur");be(Op,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);Ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ae("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ft="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ft));function _o(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Pf(i,e,void 0,n),n.currentTarget=null}function Np(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],a=i.event;i=i.listeners;n:{var l=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],s=o.instance,p=o.currentTarget;if(o=o.listener,s!==l&&a.isPropagationStopped())break n;_o(a,o,p),l=s}else for(r=0;r<i.length;r++){if(o=i[r],s=o.instance,p=o.currentTarget,o=o.listener,s!==l&&a.isPropagationStopped())break n;_o(a,o,p),l=s}}}if(Xi)throw n=kl,Xi=!1,kl=null,n}function E(n,e){var t=e[Rl];t===void 0&&(t=e[Rl]=new Set);var i=n+"__bubble";t.has(i)||(Cp(e,n,2,!1),t.add(i))}function Ua(n,e,t){var i=0;e&&(i|=4),Cp(t,n,i,e)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Ht(n){if(!n[Ti]){n[Ti]=!0,As.forEach(function(t){t!=="selectionchange"&&(Rd.has(t)||Ua(t,!1,n),Ua(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ti]||(e[Ti]=!0,Ua("selectionchange",!1,e))}}function Cp(n,e,t,i){switch(cp(e)){case 1:var a=Kf;break;case 4:a=Uf;break;default:a=xr}t=a.bind(null,e,t,n),a=void 0,!Sl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function Va(n,e,t,i,a){var l=i;if(!(e&1)&&!(e&2)&&i!==null)n:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(r===4)for(r=i.return;r!==null;){var s=r.tag;if((s===3||s===4)&&(s=r.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;r=r.return}for(;o!==null;){if(r=Oe(o),r===null)return;if(s=r.tag,s===5||s===6){i=l=r;continue n}o=o.parentNode}}i=i.return}Js(function(){var p=l,c=mr(t),d=[];n:{var h=Fp.get(n);if(h!==void 0){var x=Tr,b=n;switch(n){case"keypress":if(_i(t)===0)break n;case"keydown":case"keyup":x=pd;break;case"focusin":b="focus",x=Wa;break;case"focusout":b="blur",x=Wa;break;case"beforeblur":case"afterblur":x=Wa;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=To;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=dd;break;case wp:case Ip:case Lp:x=nd;break;case Op:x=md;break;case"scroll":x=Vf;break;case"wheel":x=gd;break;case"copy":case"cut":case"paste":x=td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=So}var T=(e&4)!==0,w=!T&&n==="scroll",f=T?h!==null?h+"Capture":null:h;T=[];for(var u=p,m;u!==null;){m=u;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,f!==null&&(y=qt(u,f),y!=null&&T.push(Kt(u,y,m)))),w)break;u=u.return}0<T.length&&(h=new x(h,b,null,t,c),d.push({event:h,listeners:T}))}}if(!(e&7)){n:{if(h=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",h&&t!==Tl&&(b=t.relatedTarget||t.fromElement)&&(Oe(b)||b[Vn]))break n;if((x||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,x?(b=t.relatedTarget||t.toElement,x=p,b=b?Oe(b):null,b!==null&&(w=Ee(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=p),x!==b)){if(T=To,y="onMouseLeave",f="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(T=So,y="onPointerLeave",f="onPointerEnter",u="pointer"),w=x==null?h:He(x),m=b==null?h:He(b),h=new T(y,u+"leave",x,t,c),h.target=w,h.relatedTarget=m,y=null,Oe(c)===p&&(T=new T(f,u+"enter",b,t,c),T.target=m,T.relatedTarget=w,y=T),w=y,x&&b)e:{for(T=x,f=b,u=0,m=T;m;m=qe(m))u++;for(m=0,y=f;y;y=qe(y))m++;for(;0<u-m;)T=qe(T),u--;for(;0<m-u;)f=qe(f),m--;for(;u--;){if(T===f||f!==null&&T===f.alternate)break e;T=qe(T),f=qe(f)}T=null}else T=null;x!==null&&Ro(d,h,x,T,!1),b!==null&&w!==null&&Ro(d,w,b,T,!0)}}n:{if(h=p?He(p):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var g=kd;else if(Io(h))if(bp)g=Od;else{g=Id;var I=wd}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(g=Ld);if(g&&(g=g(n,p))){xp(d,g,t,c);break n}I&&I(n,h,p),n==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&hl(h,"number",h.value)}switch(I=p?He(p):window,n){case"focusin":(Io(I)||I.contentEditable==="true")&&(Xe=I,Ol=p,Rt=null);break;case"focusout":Rt=Ol=Xe=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,Co(d,t,c);break;case"selectionchange":if(Cd)break;case"keydown":case"keyup":Co(d,t,c)}var F;if(Sr)n:{switch(n){case"compositionstart":var N="onCompositionStart";break n;case"compositionend":N="onCompositionEnd";break n;case"compositionupdate":N="onCompositionUpdate";break n}N=void 0}else Be?gp(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(hp&&t.locale!=="ko"&&(Be||N!=="onCompositionStart"?N==="onCompositionEnd"&&Be&&(F=mp()):(le=c,br="value"in le?le.value:le.textContent,Be=!0)),I=Vi(p,N),0<I.length&&(N=new vo(N,n,null,t,c),d.push({event:N,listeners:I}),F?N.data=F:(F=yp(t),F!==null&&(N.data=F)))),(F=xd?bd(n,t):Td(n,t))&&(p=Vi(p,"onBeforeInput"),0<p.length&&(c=new vo("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:p}),c.data=F))}Np(d,e)})}function Kt(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Vi(n,e){for(var t=e+"Capture",i=[];n!==null;){var a=n,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=qt(n,t),l!=null&&i.unshift(Kt(n,l,a)),l=qt(n,e),l!=null&&i.push(Kt(n,l,a))),n=n.return}return i}function qe(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ro(n,e,t,i,a){for(var l=e._reactName,r=[];t!==null&&t!==i;){var o=t,s=o.alternate,p=o.stateNode;if(s!==null&&s===i)break;o.tag===5&&p!==null&&(o=p,a?(s=qt(t,l),s!=null&&r.unshift(Kt(t,s,o))):a||(s=qt(t,l),s!=null&&r.push(Kt(t,s,o)))),t=t.return}r.length!==0&&n.push({event:e,listeners:r})}var Dd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Do(n){return(typeof n=="string"?n:""+n).replace(Dd,`
`).replace(Md,"")}function vi(n,e,t){if(e=Do(e),Do(n)!==e&&t)throw Error(S(425))}function $i(){}var Nl=null,Cl=null;function Pl(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,zd=typeof clearTimeout=="function"?clearTimeout:void 0,Mo=typeof Promise=="function"?Promise:void 0,Ad=typeof queueMicrotask=="function"?queueMicrotask:typeof Mo<"u"?function(n){return Mo.resolve(null).then(n).catch(Ed)}:_l;function Ed(n){setTimeout(function(){throw n})}function $a(n,e){var t=e,i=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(i===0){n.removeChild(a),Bt(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=a}while(t);Bt(e)}function fe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function zo(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var mt=Math.random().toString(36).slice(2),Yn="__reactFiber$"+mt,Ut="__reactProps$"+mt,Vn="__reactContainer$"+mt,Rl="__reactEvents$"+mt,Yd="__reactListeners$"+mt,qd="__reactHandles$"+mt;function Oe(n){var e=n[Yn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vn]||t[Yn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=zo(n);n!==null;){if(t=n[Yn])return t;n=zo(n)}return e}n=t,t=n.parentNode}return null}function ri(n){return n=n[Yn]||n[Vn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function He(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(S(33))}function xa(n){return n[Ut]||null}var Dl=[],Ke=-1;function Te(n){return{current:n}}function Y(n){0>Ke||(n.current=Dl[Ke],Dl[Ke]=null,Ke--)}function A(n,e){Ke++,Dl[Ke]=n.current,n.current=e}var xe={},sn=Te(xe),hn=Te(!1),_e=xe;function rt(n,e){var t=n.type.contextTypes;if(!t)return xe;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=e[l];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=a),a}function gn(n){return n=n.childContextTypes,n!=null}function Zi(){Y(hn),Y(sn)}function Ao(n,e,t){if(sn.current!==xe)throw Error(S(168));A(sn,e),A(hn,t)}function Pp(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var a in i)if(!(a in e))throw Error(S(108,wf(n)||"Unknown",a));return B({},t,i)}function Qi(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xe,_e=sn.current,A(sn,n),A(hn,hn.current),!0}function Eo(n,e,t){var i=n.stateNode;if(!i)throw Error(S(169));t?(n=Pp(n,e,_e),i.__reactInternalMemoizedMergedChildContext=n,Y(hn),Y(sn),A(sn,n)):Y(hn),A(hn,t)}var Xn=null,ba=!1,Za=!1;function _p(n){Xn===null?Xn=[n]:Xn.push(n)}function jd(n){ba=!0,_p(n)}function ve(){if(!Za&&Xn!==null){Za=!0;var n=0,e=M;try{var t=Xn;for(M=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Xn=null,ba=!1}catch(a){throw Xn!==null&&(Xn=Xn.slice(n+1)),ip(hr,ve),a}finally{M=e,Za=!1}}return null}var Ue=[],Ve=0,Ji=null,na=0,wn=[],In=0,Re=null,Gn=1,Hn="";function Ie(n,e){Ue[Ve++]=na,Ue[Ve++]=Ji,Ji=n,na=e}function Rp(n,e,t){wn[In++]=Gn,wn[In++]=Hn,wn[In++]=Re,Re=n;var i=Gn;n=Hn;var a=32-Dn(i)-1;i&=~(1<<a),t+=1;var l=32-Dn(e)+a;if(30<l){var r=a-a%5;l=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Gn=1<<32-Dn(e)+a|t<<a|i,Hn=l+n}else Gn=1<<l|t<<a|i,Hn=n}function wr(n){n.return!==null&&(Ie(n,1),Rp(n,1,0))}function Ir(n){for(;n===Ji;)Ji=Ue[--Ve],Ue[Ve]=null,na=Ue[--Ve],Ue[Ve]=null;for(;n===Re;)Re=wn[--In],wn[In]=null,Hn=wn[--In],wn[In]=null,Gn=wn[--In],wn[In]=null}var Tn=null,bn=null,q=!1,Rn=null;function Dp(n,e){var t=Ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Yo(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,bn=fe(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Re!==null?{id:Gn,overflow:Hn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,bn=null,!0):!1;default:return!1}}function Ml(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zl(n){if(q){var e=bn;if(e){var t=e;if(!Yo(n,e)){if(Ml(n))throw Error(S(418));e=fe(t.nextSibling);var i=Tn;e&&Yo(n,e)?Dp(i,t):(n.flags=n.flags&-4097|2,q=!1,Tn=n)}}else{if(Ml(n))throw Error(S(418));n.flags=n.flags&-4097|2,q=!1,Tn=n}}}function qo(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function Si(n){if(n!==Tn)return!1;if(!q)return qo(n),q=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Pl(n.type,n.memoizedProps)),e&&(e=bn)){if(Ml(n))throw Mp(),Error(S(418));for(;e;)Dp(n,e),e=fe(e.nextSibling)}if(qo(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=fe(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=Tn?fe(n.stateNode.nextSibling):null;return!0}function Mp(){for(var n=bn;n;)n=fe(n.nextSibling)}function ot(){bn=Tn=null,q=!1}function Lr(n){Rn===null?Rn=[n]:Rn.push(n)}var Wd=Qn.ReactCurrentBatchConfig;function St(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var i=t.stateNode}if(!i)throw Error(S(147,n));var a=i,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(r){var o=a.refs;r===null?delete o[l]:o[l]=r},e._stringRef=l,e)}if(typeof n!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,n))}return n}function ki(n,e){throw n=Object.prototype.toString.call(e),Error(S(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function jo(n){var e=n._init;return e(n._payload)}function zp(n){function e(f,u){if(n){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function t(f,u){if(!n)return null;for(;u!==null;)e(f,u),u=u.sibling;return null}function i(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function a(f,u){return f=he(f,u),f.index=0,f.sibling=null,f}function l(f,u,m){return f.index=m,n?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=2,u):m):(f.flags|=2,u)):(f.flags|=1048576,u)}function r(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,u,m,y){return u===null||u.tag!==6?(u=al(m,f.mode,y),u.return=f,u):(u=a(u,m),u.return=f,u)}function s(f,u,m,y){var g=m.type;return g===We?c(f,u,m.props.children,y,m.key):u!==null&&(u.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ee&&jo(g)===u.type)?(y=a(u,m.props),y.ref=St(f,u,m),y.return=f,y):(y=Yi(m.type,m.key,m.props,null,f.mode,y),y.ref=St(f,u,m),y.return=f,y)}function p(f,u,m,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=ll(m,f.mode,y),u.return=f,u):(u=a(u,m.children||[]),u.return=f,u)}function c(f,u,m,y,g){return u===null||u.tag!==7?(u=Pe(m,f.mode,y,g),u.return=f,u):(u=a(u,m),u.return=f,u)}function d(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=al(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case di:return m=Yi(u.type,u.key,u.props,null,f.mode,m),m.ref=St(f,null,u),m.return=f,m;case je:return u=ll(u,f.mode,m),u.return=f,u;case ee:var y=u._init;return d(f,y(u._payload),m)}if(Lt(u)||yt(u))return u=Pe(u,f.mode,m,null),u.return=f,u;ki(f,u)}return null}function h(f,u,m,y){var g=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return g!==null?null:o(f,u,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case di:return m.key===g?s(f,u,m,y):null;case je:return m.key===g?p(f,u,m,y):null;case ee:return g=m._init,h(f,u,g(m._payload),y)}if(Lt(m)||yt(m))return g!==null?null:c(f,u,m,y,null);ki(f,m)}return null}function x(f,u,m,y,g){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(m)||null,o(u,f,""+y,g);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case di:return f=f.get(y.key===null?m:y.key)||null,s(u,f,y,g);case je:return f=f.get(y.key===null?m:y.key)||null,p(u,f,y,g);case ee:var I=y._init;return x(f,u,m,I(y._payload),g)}if(Lt(y)||yt(y))return f=f.get(m)||null,c(u,f,y,g,null);ki(u,y)}return null}function b(f,u,m,y){for(var g=null,I=null,F=u,N=u=0,z=null;F!==null&&N<m.length;N++){F.index>N?(z=F,F=null):z=F.sibling;var C=h(f,F,m[N],y);if(C===null){F===null&&(F=z);break}n&&F&&C.alternate===null&&e(f,F),u=l(C,u,N),I===null?g=C:I.sibling=C,I=C,F=z}if(N===m.length)return t(f,F),q&&Ie(f,N),g;if(F===null){for(;N<m.length;N++)F=d(f,m[N],y),F!==null&&(u=l(F,u,N),I===null?g=F:I.sibling=F,I=F);return q&&Ie(f,N),g}for(F=i(f,F);N<m.length;N++)z=x(F,f,N,m[N],y),z!==null&&(n&&z.alternate!==null&&F.delete(z.key===null?N:z.key),u=l(z,u,N),I===null?g=z:I.sibling=z,I=z);return n&&F.forEach(function(Z){return e(f,Z)}),q&&Ie(f,N),g}function T(f,u,m,y){var g=yt(m);if(typeof g!="function")throw Error(S(150));if(m=g.call(m),m==null)throw Error(S(151));for(var I=g=null,F=u,N=u=0,z=null,C=m.next();F!==null&&!C.done;N++,C=m.next()){F.index>N?(z=F,F=null):z=F.sibling;var Z=h(f,F,C.value,y);if(Z===null){F===null&&(F=z);break}n&&F&&Z.alternate===null&&e(f,F),u=l(Z,u,N),I===null?g=Z:I.sibling=Z,I=Z,F=z}if(C.done)return t(f,F),q&&Ie(f,N),g;if(F===null){for(;!C.done;N++,C=m.next())C=d(f,C.value,y),C!==null&&(u=l(C,u,N),I===null?g=C:I.sibling=C,I=C);return q&&Ie(f,N),g}for(F=i(f,F);!C.done;N++,C=m.next())C=x(F,f,N,C.value,y),C!==null&&(n&&C.alternate!==null&&F.delete(C.key===null?N:C.key),u=l(C,u,N),I===null?g=C:I.sibling=C,I=C);return n&&F.forEach(function(Wn){return e(f,Wn)}),q&&Ie(f,N),g}function w(f,u,m,y){if(typeof m=="object"&&m!==null&&m.type===We&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case di:n:{for(var g=m.key,I=u;I!==null;){if(I.key===g){if(g=m.type,g===We){if(I.tag===7){t(f,I.sibling),u=a(I,m.props.children),u.return=f,f=u;break n}}else if(I.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ee&&jo(g)===I.type){t(f,I.sibling),u=a(I,m.props),u.ref=St(f,I,m),u.return=f,f=u;break n}t(f,I);break}else e(f,I);I=I.sibling}m.type===We?(u=Pe(m.props.children,f.mode,y,m.key),u.return=f,f=u):(y=Yi(m.type,m.key,m.props,null,f.mode,y),y.ref=St(f,u,m),y.return=f,f=y)}return r(f);case je:n:{for(I=m.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){t(f,u.sibling),u=a(u,m.children||[]),u.return=f,f=u;break n}else{t(f,u);break}else e(f,u);u=u.sibling}u=ll(m,f.mode,y),u.return=f,f=u}return r(f);case ee:return I=m._init,w(f,u,I(m._payload),y)}if(Lt(m))return b(f,u,m,y);if(yt(m))return T(f,u,m,y);ki(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(t(f,u.sibling),u=a(u,m),u.return=f,f=u):(t(f,u),u=al(m,f.mode,y),u.return=f,f=u),r(f)):t(f,u)}return w}var st=zp(!0),Ap=zp(!1),ea=Te(null),ta=null,$e=null,Or=null;function Fr(){Or=$e=ta=null}function Nr(n){var e=ea.current;Y(ea),n._currentValue=e}function Al(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function it(n,e){ta=n,Or=$e=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Fn(n){var e=n._currentValue;if(Or!==n)if(n={context:n,memoizedValue:e,next:null},$e===null){if(ta===null)throw Error(S(308));$e=n,ta.dependencies={lanes:0,firstContext:n}}else $e=$e.next=n;return e}var Fe=null;function Cr(n){Fe===null?Fe=[n]:Fe.push(n)}function Ep(n,e,t,i){var a=e.interleaved;return a===null?(t.next=t,Cr(e)):(t.next=a.next,a.next=t),e.interleaved=t,$n(n,i)}function $n(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var te=!1;function Pr(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function de(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,D&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,$n(n,t)}return a=i.interleaved,a===null?(e.next=e,Cr(i)):(e.next=a.next,a.next=e),i.interleaved=e,$n(n,t)}function Ri(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gr(n,t)}}function Wo(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=r:l=l.next=r,t=t.next}while(t!==null);l===null?a=l=e:l=l.next=e}else a=l=e;t={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ia(n,e,t,i){var a=n.updateQueue;te=!1;var l=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var s=o,p=s.next;s.next=null,r===null?l=p:r.next=p,r=s;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==r&&(o===null?c.firstBaseUpdate=p:o.next=p,c.lastBaseUpdate=s))}if(l!==null){var d=a.baseState;r=0,c=p=s=null,o=l;do{var h=o.lane,x=o.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var b=n,T=o;switch(h=e,x=t,T.tag){case 1:if(b=T.payload,typeof b=="function"){d=b.call(x,d,h);break n}d=b;break n;case 3:b.flags=b.flags&-65537|128;case 0:if(b=T.payload,h=typeof b=="function"?b.call(x,d,h):b,h==null)break n;d=B({},d,h);break n;case 2:te=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,h=a.effects,h===null?a.effects=[o]:h.push(o))}else x={eventTime:x,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(p=c=x,s=d):c=c.next=x,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(c===null&&(s=d),a.baseState=s,a.firstBaseUpdate=p,a.lastBaseUpdate=c,e=a.shared.interleaved,e!==null){a=e;do r|=a.lane,a=a.next;while(a!==e)}else l===null&&(a.shared.lanes=0);Me|=r,n.lanes=r,n.memoizedState=d}}function Bo(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],a=i.callback;if(a!==null){if(i.callback=null,i=t,typeof a!="function")throw Error(S(191,a));a.call(i)}}}var oi={},jn=Te(oi),Vt=Te(oi),$t=Te(oi);function Ne(n){if(n===oi)throw Error(S(174));return n}function _r(n,e){switch(A($t,e),A(Vt,n),A(jn,oi),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yl(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yl(e,n)}Y(jn),A(jn,e)}function pt(){Y(jn),Y(Vt),Y($t)}function qp(n){Ne($t.current);var e=Ne(jn.current),t=yl(e,n.type);e!==t&&(A(Vt,n),A(jn,t))}function Rr(n){Vt.current===n&&(Y(jn),Y(Vt))}var j=Te(0);function aa(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qa=[];function Dr(){for(var n=0;n<Qa.length;n++)Qa[n]._workInProgressVersionPrimary=null;Qa.length=0}var Di=Qn.ReactCurrentDispatcher,Ja=Qn.ReactCurrentBatchConfig,De=0,W=null,V=null,J=null,la=!1,Dt=!1,Zt=0,Bd=0;function ln(){throw Error(S(321))}function Mr(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!zn(n[t],e[t]))return!1;return!0}function zr(n,e,t,i,a,l){if(De=l,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Di.current=n===null||n.memoizedState===null?Kd:Ud,n=t(i,a),Dt){l=0;do{if(Dt=!1,Zt=0,25<=l)throw Error(S(301));l+=1,J=V=null,e.updateQueue=null,Di.current=Vd,n=t(i,a)}while(Dt)}if(Di.current=ra,e=V!==null&&V.next!==null,De=0,J=V=W=null,la=!1,e)throw Error(S(300));return n}function Ar(){var n=Zt!==0;return Zt=0,n}function En(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=n:J=J.next=n,J}function Nn(){if(V===null){var n=W.alternate;n=n!==null?n.memoizedState:null}else n=V.next;var e=J===null?W.memoizedState:J.next;if(e!==null)J=e,V=n;else{if(n===null)throw Error(S(310));V=n,n={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},J===null?W.memoizedState=J=n:J=J.next=n}return J}function Qt(n,e){return typeof e=="function"?e(n):e}function nl(n){var e=Nn(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=n;var i=V,a=i.baseQueue,l=t.pending;if(l!==null){if(a!==null){var r=a.next;a.next=l.next,l.next=r}i.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,i=i.baseState;var o=r=null,s=null,p=l;do{var c=p.lane;if((De&c)===c)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:n(i,p.action);else{var d={lane:c,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(o=s=d,r=i):s=s.next=d,W.lanes|=c,Me|=c}p=p.next}while(p!==null&&p!==l);s===null?r=i:s.next=o,zn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=r,e.baseQueue=s,t.lastRenderedState=i}if(n=t.interleaved,n!==null){a=n;do l=a.lane,W.lanes|=l,Me|=l,a=a.next;while(a!==n)}else a===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function el(n){var e=Nn(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=n;var i=t.dispatch,a=t.pending,l=e.memoizedState;if(a!==null){t.pending=null;var r=a=a.next;do l=n(l,r.action),r=r.next;while(r!==a);zn(l,e.memoizedState)||(mn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,i]}function jp(){}function Wp(n,e){var t=W,i=Nn(),a=e(),l=!zn(i.memoizedState,a);if(l&&(i.memoizedState=a,mn=!0),i=i.queue,Er(Gp.bind(null,t,i,n),[n]),i.getSnapshot!==e||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,Jt(9,Xp.bind(null,t,i,a,e),void 0,null),nn===null)throw Error(S(349));De&30||Bp(t,e,a)}return a}function Bp(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=W.updateQueue,e===null?(e={lastEffect:null,stores:null},W.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xp(n,e,t,i){e.value=t,e.getSnapshot=i,Hp(e)&&Kp(n)}function Gp(n,e,t){return t(function(){Hp(e)&&Kp(n)})}function Hp(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!zn(n,t)}catch{return!0}}function Kp(n){var e=$n(n,1);e!==null&&Mn(e,n,1,-1)}function Xo(n){var e=En();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:n},e.queue=n,n=n.dispatch=Hd.bind(null,W,n),[e.memoizedState,n]}function Jt(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=W.updateQueue,e===null?(e={lastEffect:null,stores:null},W.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Up(){return Nn().memoizedState}function Mi(n,e,t,i){var a=En();W.flags|=n,a.memoizedState=Jt(1|e,t,void 0,i===void 0?null:i)}function Ta(n,e,t,i){var a=Nn();i=i===void 0?null:i;var l=void 0;if(V!==null){var r=V.memoizedState;if(l=r.destroy,i!==null&&Mr(i,r.deps)){a.memoizedState=Jt(e,t,l,i);return}}W.flags|=n,a.memoizedState=Jt(1|e,t,l,i)}function Go(n,e){return Mi(8390656,8,n,e)}function Er(n,e){return Ta(2048,8,n,e)}function Vp(n,e){return Ta(4,2,n,e)}function $p(n,e){return Ta(4,4,n,e)}function Zp(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Qp(n,e,t){return t=t!=null?t.concat([n]):null,Ta(4,4,Zp.bind(null,e,n),t)}function Yr(){}function Jp(n,e){var t=Nn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Mr(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function nu(n,e){var t=Nn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Mr(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function eu(n,e,t){return De&21?(zn(t,e)||(t=rp(),W.lanes|=t,Me|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function Xd(n,e){var t=M;M=t!==0&&4>t?t:4,n(!0);var i=Ja.transition;Ja.transition={};try{n(!1),e()}finally{M=t,Ja.transition=i}}function tu(){return Nn().memoizedState}function Gd(n,e,t){var i=me(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},iu(n))au(e,t);else if(t=Ep(n,e,t,i),t!==null){var a=un();Mn(t,n,i,a),lu(t,e,i)}}function Hd(n,e,t){var i=me(n),a={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(iu(n))au(e,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var r=e.lastRenderedState,o=l(r,t);if(a.hasEagerState=!0,a.eagerState=o,zn(o,r)){var s=e.interleaved;s===null?(a.next=a,Cr(e)):(a.next=s.next,s.next=a),e.interleaved=a;return}}catch{}finally{}t=Ep(n,e,a,i),t!==null&&(a=un(),Mn(t,n,i,a),lu(t,e,i))}}function iu(n){var e=n.alternate;return n===W||e!==null&&e===W}function au(n,e){Dt=la=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function lu(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gr(n,t)}}var ra={readContext:Fn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Kd={readContext:Fn,useCallback:function(n,e){return En().memoizedState=[n,e===void 0?null:e],n},useContext:Fn,useEffect:Go,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Mi(4194308,4,Zp.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Mi(4194308,4,n,e)},useInsertionEffect:function(n,e){return Mi(4,2,n,e)},useMemo:function(n,e){var t=En();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=En();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Gd.bind(null,W,n),[i.memoizedState,n]},useRef:function(n){var e=En();return n={current:n},e.memoizedState=n},useState:Xo,useDebugValue:Yr,useDeferredValue:function(n){return En().memoizedState=n},useTransition:function(){var n=Xo(!1),e=n[0];return n=Xd.bind(null,n[1]),En().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=W,a=En();if(q){if(t===void 0)throw Error(S(407));t=t()}else{if(t=e(),nn===null)throw Error(S(349));De&30||Bp(i,e,t)}a.memoizedState=t;var l={value:t,getSnapshot:e};return a.queue=l,Go(Gp.bind(null,i,l,n),[n]),i.flags|=2048,Jt(9,Xp.bind(null,i,l,t,e),void 0,null),t},useId:function(){var n=En(),e=nn.identifierPrefix;if(q){var t=Hn,i=Gn;t=(i&~(1<<32-Dn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Zt++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Bd++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ud={readContext:Fn,useCallback:Jp,useContext:Fn,useEffect:Er,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:$p,useMemo:nu,useReducer:nl,useRef:Up,useState:function(){return nl(Qt)},useDebugValue:Yr,useDeferredValue:function(n){var e=Nn();return eu(e,V.memoizedState,n)},useTransition:function(){var n=nl(Qt)[0],e=Nn().memoizedState;return[n,e]},useMutableSource:jp,useSyncExternalStore:Wp,useId:tu,unstable_isNewReconciler:!1},Vd={readContext:Fn,useCallback:Jp,useContext:Fn,useEffect:Er,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:$p,useMemo:nu,useReducer:el,useRef:Up,useState:function(){return el(Qt)},useDebugValue:Yr,useDeferredValue:function(n){var e=Nn();return V===null?e.memoizedState=n:eu(e,V.memoizedState,n)},useTransition:function(){var n=el(Qt)[0],e=Nn().memoizedState;return[n,e]},useMutableSource:jp,useSyncExternalStore:Wp,useId:tu,unstable_isNewReconciler:!1};function Pn(n,e){if(n&&n.defaultProps){e=B({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function El(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:B({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var va={isMounted:function(n){return(n=n._reactInternals)?Ee(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=un(),a=me(n),l=Kn(i,a);l.payload=e,t!=null&&(l.callback=t),e=de(n,l,a),e!==null&&(Mn(e,n,a,i),Ri(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=un(),a=me(n),l=Kn(i,a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=de(n,l,a),e!==null&&(Mn(e,n,a,i),Ri(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=un(),i=me(n),a=Kn(t,i);a.tag=2,e!=null&&(a.callback=e),e=de(n,a,i),e!==null&&(Mn(e,n,i,t),Ri(e,n,i))}};function Ho(n,e,t,i,a,l,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,l,r):e.prototype&&e.prototype.isPureReactComponent?!Gt(t,i)||!Gt(a,l):!0}function ru(n,e,t){var i=!1,a=xe,l=e.contextType;return typeof l=="object"&&l!==null?l=Fn(l):(a=gn(e)?_e:sn.current,i=e.contextTypes,l=(i=i!=null)?rt(n,a):xe),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=va,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=l),e}function Ko(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&va.enqueueReplaceState(e,e.state,null)}function Yl(n,e,t,i){var a=n.stateNode;a.props=t,a.state=n.memoizedState,a.refs={},Pr(n);var l=e.contextType;typeof l=="object"&&l!==null?a.context=Fn(l):(l=gn(e)?_e:sn.current,a.context=rt(n,l)),a.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(El(n,e,l,t),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&va.enqueueReplaceState(a,a.state,null),ia(n,t,a,i),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function ut(n,e){try{var t="",i=e;do t+=kf(i),i=i.return;while(i);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:a,digest:null}}function tl(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ql(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $d=typeof WeakMap=="function"?WeakMap:Map;function ou(n,e,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sa||(sa=!0,$l=i),ql(n,e)},t}function su(n,e,t){t=Kn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var a=e.value;t.payload=function(){return i(a)},t.callback=function(){ql(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ql(n,e),typeof i!="function"&&(ce===null?ce=new Set([this]):ce.add(this));var r=e.stack;this.componentDidCatch(e.value,{componentStack:r!==null?r:""})}),t}function Uo(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $d;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(t)||(a.add(t),n=uc.bind(null,n,e,t),e.then(n,n))}function Vo(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function $o(n,e,t,i,a){return n.mode&1?(n.flags|=65536,n.lanes=a,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Kn(-1,1),e.tag=2,de(t,e,1))),t.lanes|=1),n)}var Zd=Qn.ReactCurrentOwner,mn=!1;function pn(n,e,t,i){e.child=n===null?Ap(e,null,t,i):st(e,n.child,t,i)}function Zo(n,e,t,i,a){t=t.render;var l=e.ref;return it(e,a),i=zr(n,e,t,i,l,a),t=Ar(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Zn(n,e,a)):(q&&t&&wr(e),e.flags|=1,pn(n,e,i,a),e.child)}function Qo(n,e,t,i,a){if(n===null){var l=t.type;return typeof l=="function"&&!Kr(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,pu(n,e,l,i,a)):(n=Yi(t.type,null,i,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&a)){var r=l.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(r,i)&&n.ref===e.ref)return Zn(n,e,a)}return e.flags|=1,n=he(l,i),n.ref=e.ref,n.return=e,e.child=n}function pu(n,e,t,i,a){if(n!==null){var l=n.memoizedProps;if(Gt(l,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=l,(n.lanes&a)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Zn(n,e,a)}return jl(n,e,t,i,a)}function uu(n,e,t){var i=e.pendingProps,a=i.children,l=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Qe,xn),xn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,A(Qe,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=l!==null?l.baseLanes:t,A(Qe,xn),xn|=i}else l!==null?(i=l.baseLanes|t,e.memoizedState=null):i=t,A(Qe,xn),xn|=i;return pn(n,e,a,t),e.child}function fu(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function jl(n,e,t,i,a){var l=gn(t)?_e:sn.current;return l=rt(e,l),it(e,a),t=zr(n,e,t,i,l,a),i=Ar(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Zn(n,e,a)):(q&&i&&wr(e),e.flags|=1,pn(n,e,t,a),e.child)}function Jo(n,e,t,i,a){if(gn(t)){var l=!0;Qi(e)}else l=!1;if(it(e,a),e.stateNode===null)zi(n,e),ru(e,t,i),Yl(e,t,i,a),i=!0;else if(n===null){var r=e.stateNode,o=e.memoizedProps;r.props=o;var s=r.context,p=t.contextType;typeof p=="object"&&p!==null?p=Fn(p):(p=gn(t)?_e:sn.current,p=rt(e,p));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function";d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==i||s!==p)&&Ko(e,r,i,p),te=!1;var h=e.memoizedState;r.state=h,ia(e,i,r,a),s=e.memoizedState,o!==i||h!==s||hn.current||te?(typeof c=="function"&&(El(e,t,c,i),s=e.memoizedState),(o=te||Ho(e,t,o,i,h,s,p))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=s),r.props=i,r.state=s,r.context=p,i=o):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Yp(n,e),o=e.memoizedProps,p=e.type===e.elementType?o:Pn(e.type,o),r.props=p,d=e.pendingProps,h=r.context,s=t.contextType,typeof s=="object"&&s!==null?s=Fn(s):(s=gn(t)?_e:sn.current,s=rt(e,s));var x=t.getDerivedStateFromProps;(c=typeof x=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==d||h!==s)&&Ko(e,r,i,s),te=!1,h=e.memoizedState,r.state=h,ia(e,i,r,a);var b=e.memoizedState;o!==d||h!==b||hn.current||te?(typeof x=="function"&&(El(e,t,x,i),b=e.memoizedState),(p=te||Ho(e,t,p,i,h,b,s)||!1)?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,b,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,b,s)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=b),r.props=i,r.state=b,r.context=s,i=p):(typeof r.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Wl(n,e,t,i,l,a)}function Wl(n,e,t,i,a,l){fu(n,e);var r=(e.flags&128)!==0;if(!i&&!r)return a&&Eo(e,t,!1),Zn(n,e,l);i=e.stateNode,Zd.current=e;var o=r&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&r?(e.child=st(e,n.child,null,l),e.child=st(e,null,o,l)):pn(n,e,o,l),e.memoizedState=i.state,a&&Eo(e,t,!0),e.child}function du(n){var e=n.stateNode;e.pendingContext?Ao(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ao(n,e.context,!1),_r(n,e.containerInfo)}function ns(n,e,t,i,a){return ot(),Lr(a),e.flags|=256,pn(n,e,t,i),e.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Xl(n){return{baseLanes:n,cachePool:null,transitions:null}}function cu(n,e,t){var i=e.pendingProps,a=j.current,l=!1,r=(e.flags&128)!==0,o;if((o=r)||(o=n!==null&&n.memoizedState===null?!1:(a&2)!==0),o?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),A(j,a&1),n===null)return zl(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(r=i.children,n=i.fallback,l?(i=e.mode,l=e.child,r={mode:"hidden",children:r},!(i&1)&&l!==null?(l.childLanes=0,l.pendingProps=r):l=wa(r,i,0,null),n=Pe(n,i,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=Xl(t),e.memoizedState=Bl,n):qr(e,r));if(a=n.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Qd(n,e,r,i,o,a,t);if(l){l=i.fallback,r=e.mode,a=n.child,o=a.sibling;var s={mode:"hidden",children:i.children};return!(r&1)&&e.child!==a?(i=e.child,i.childLanes=0,i.pendingProps=s,e.deletions=null):(i=he(a,s),i.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=he(o,l):(l=Pe(l,r,t,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,i=l,l=e.child,r=n.child.memoizedState,r=r===null?Xl(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},l.memoizedState=r,l.childLanes=n.childLanes&~t,e.memoizedState=Bl,i}return l=n.child,n=l.sibling,i=he(l,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qr(n,e){return e=wa({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wi(n,e,t,i){return i!==null&&Lr(i),st(e,n.child,null,t),n=qr(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Qd(n,e,t,i,a,l,r){if(t)return e.flags&256?(e.flags&=-257,i=tl(Error(S(422))),wi(n,e,r,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=i.fallback,a=e.mode,i=wa({mode:"visible",children:i.children},a,0,null),l=Pe(l,a,r,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,e.mode&1&&st(e,n.child,null,r),e.child.memoizedState=Xl(r),e.memoizedState=Bl,l);if(!(e.mode&1))return wi(n,e,r,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var o=i.dgst;return i=o,l=Error(S(419)),i=tl(l,i,void 0),wi(n,e,r,i)}if(o=(r&n.childLanes)!==0,mn||o){if(i=nn,i!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|r)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,$n(n,a),Mn(i,n,a,-1))}return Hr(),i=tl(Error(S(421))),wi(n,e,r,i)}return a.data==="$?"?(e.flags|=128,e.child=n.child,e=fc.bind(null,n),a._reactRetry=e,null):(n=l.treeContext,bn=fe(a.nextSibling),Tn=e,q=!0,Rn=null,n!==null&&(wn[In++]=Gn,wn[In++]=Hn,wn[In++]=Re,Gn=n.id,Hn=n.overflow,Re=e),e=qr(e,i.children),e.flags|=4096,e)}function es(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Al(n.return,e,t)}function il(n,e,t,i,a){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=t,l.tailMode=a)}function mu(n,e,t){var i=e.pendingProps,a=i.revealOrder,l=i.tail;if(pn(n,e,i.children,t),i=j.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&es(n,t,e);else if(n.tag===19)es(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(A(j,i),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&aa(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),il(e,!1,a,t,l);break;case"backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&aa(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}il(e,!0,t,null,l);break;case"together":il(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zi(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Me|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(S(153));if(e.child!==null){for(n=e.child,t=he(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=he(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Jd(n,e,t){switch(e.tag){case 3:du(e),ot();break;case 5:qp(e);break;case 1:gn(e.type)&&Qi(e);break;case 4:_r(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,a=e.memoizedProps.value;A(ea,i._currentValue),i._currentValue=a;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(A(j,j.current&1),e.flags|=128,null):t&e.child.childLanes?cu(n,e,t):(A(j,j.current&1),n=Zn(n,e,t),n!==null?n.sibling:null);A(j,j.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return mu(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),A(j,j.current),i)break;return null;case 22:case 23:return e.lanes=0,uu(n,e,t)}return Zn(n,e,t)}var hu,Gl,gu,yu;hu=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Gl=function(){};gu=function(n,e,t,i){var a=n.memoizedProps;if(a!==i){n=e.stateNode,Ne(jn.current);var l=null;switch(t){case"input":a=cl(n,a),i=cl(n,i),l=[];break;case"select":a=B({},a,{value:void 0}),i=B({},i,{value:void 0}),l=[];break;case"textarea":a=gl(n,a),i=gl(n,i),l=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=$i)}xl(t,i);var r;t=null;for(p in a)if(!i.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var o=a[p];for(r in o)o.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Et.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in i){var s=i[p];if(o=a!=null?a[p]:void 0,i.hasOwnProperty(p)&&s!==o&&(s!=null||o!=null))if(p==="style")if(o){for(r in o)!o.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in s)s.hasOwnProperty(r)&&o[r]!==s[r]&&(t||(t={}),t[r]=s[r])}else t||(l||(l=[]),l.push(p,t)),t=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Et.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&E("scroll",n),l||o===s||(l=[])):(l=l||[]).push(p,s))}t&&(l=l||[]).push("style",t);var p=l;(e.updateQueue=p)&&(e.flags|=4)}};yu=function(n,e,t,i){t!==i&&(e.flags|=4)};function kt(n,e){if(!q)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function nc(n,e,t){var i=e.pendingProps;switch(Ir(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return gn(e.type)&&Zi(),rn(e),null;case 3:return i=e.stateNode,pt(),Y(hn),Y(sn),Dr(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Si(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Jl(Rn),Rn=null))),Gl(n,e),rn(e),null;case 5:Rr(e);var a=Ne($t.current);if(t=e.type,n!==null&&e.stateNode!=null)gu(n,e,t,i,a),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(S(166));return rn(e),null}if(n=Ne(jn.current),Si(e)){i=e.stateNode,t=e.type;var l=e.memoizedProps;switch(i[Yn]=e,i[Ut]=l,n=(e.mode&1)!==0,t){case"dialog":E("cancel",i),E("close",i);break;case"iframe":case"object":case"embed":E("load",i);break;case"video":case"audio":for(a=0;a<Ft.length;a++)E(Ft[a],i);break;case"source":E("error",i);break;case"img":case"image":case"link":E("error",i),E("load",i);break;case"details":E("toggle",i);break;case"input":po(i,l),E("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!l.multiple},E("invalid",i);break;case"textarea":fo(i,l),E("invalid",i)}xl(t,l),a=null;for(var r in l)if(l.hasOwnProperty(r)){var o=l[r];r==="children"?typeof o=="string"?i.textContent!==o&&(l.suppressHydrationWarning!==!0&&vi(i.textContent,o,n),a=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&vi(i.textContent,o,n),a=["children",""+o]):Et.hasOwnProperty(r)&&o!=null&&r==="onScroll"&&E("scroll",i)}switch(t){case"input":ci(i),uo(i,l,!0);break;case"textarea":ci(i),co(i);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(i.onclick=$i)}i=a,e.updateQueue=i,i!==null&&(e.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gs(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=r.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=r.createElement(t,{is:i.is}):(n=r.createElement(t),t==="select"&&(r=n,i.multiple?r.multiple=!0:i.size&&(r.size=i.size))):n=r.createElementNS(n,t),n[Yn]=e,n[Ut]=i,hu(n,e,!1,!1),e.stateNode=n;n:{switch(r=bl(t,i),t){case"dialog":E("cancel",n),E("close",n),a=i;break;case"iframe":case"object":case"embed":E("load",n),a=i;break;case"video":case"audio":for(a=0;a<Ft.length;a++)E(Ft[a],n);a=i;break;case"source":E("error",n),a=i;break;case"img":case"image":case"link":E("error",n),E("load",n),a=i;break;case"details":E("toggle",n),a=i;break;case"input":po(n,i),a=cl(n,i),E("invalid",n);break;case"option":a=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},a=B({},i,{value:void 0}),E("invalid",n);break;case"textarea":fo(n,i),a=gl(n,i),E("invalid",n);break;default:a=i}xl(t,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="style"?Us(n,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hs(n,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Yt(n,s):typeof s=="number"&&Yt(n,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Et.hasOwnProperty(l)?s!=null&&l==="onScroll"&&E("scroll",n):s!=null&&ur(n,l,s,r))}switch(t){case"input":ci(n),uo(n,i,!1);break;case"textarea":ci(n),co(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ye(i.value));break;case"select":n.multiple=!!i.multiple,l=i.value,l!=null?Je(n,!!i.multiple,l,!1):i.defaultValue!=null&&Je(n,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=$i)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(n&&e.stateNode!=null)yu(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(S(166));if(t=Ne($t.current),Ne(jn.current),Si(e)){if(i=e.stateNode,t=e.memoizedProps,i[Yn]=e,(l=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:vi(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vi(i.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return rn(e),null;case 13:if(Y(j),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(q&&bn!==null&&e.mode&1&&!(e.flags&128))Mp(),ot(),e.flags|=98560,l=!1;else if(l=Si(e),i!==null&&i.dehydrated!==null){if(n===null){if(!l)throw Error(S(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Yn]=e}else ot(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),l=!1}else Rn!==null&&(Jl(Rn),Rn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||j.current&1?$===0&&($=3):Hr())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return pt(),Gl(n,e),n===null&&Ht(e.stateNode.containerInfo),rn(e),null;case 10:return Nr(e.type._context),rn(e),null;case 17:return gn(e.type)&&Zi(),rn(e),null;case 19:if(Y(j),l=e.memoizedState,l===null)return rn(e),null;if(i=(e.flags&128)!==0,r=l.rendering,r===null)if(i)kt(l,!1);else{if($!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(r=aa(n),r!==null){for(e.flags|=128,kt(l,!1),i=r.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)l=t,n=i,l.flags&=14680066,r=l.alternate,r===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,l.type=r.type,n=r.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return A(j,j.current&1|2),e.child}n=n.sibling}l.tail!==null&&H()>ft&&(e.flags|=128,i=!0,kt(l,!1),e.lanes=4194304)}else{if(!i)if(n=aa(r),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),kt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!q)return rn(e),null}else 2*H()-l.renderingStartTime>ft&&t!==1073741824&&(e.flags|=128,i=!0,kt(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(t=l.last,t!==null?t.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=H(),e.sibling=null,t=j.current,A(j,i?t&1|2:t&1),e):(rn(e),null);case 22:case 23:return Gr(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function ec(n,e){switch(Ir(e),e.tag){case 1:return gn(e.type)&&Zi(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return pt(),Y(hn),Y(sn),Dr(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rr(e),null;case 13:if(Y(j),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ot()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Y(j),null;case 4:return pt(),null;case 10:return Nr(e.type._context),null;case 22:case 23:return Gr(),null;case 24:return null;default:return null}}var Ii=!1,on=!1,tc=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ze(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){X(n,e,i)}else t.current=null}function Hl(n,e,t){try{t()}catch(i){X(n,e,i)}}var ts=!1;function ic(n,e){if(Nl=Ki,n=Sp(),kr(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var r=0,o=-1,s=-1,p=0,c=0,d=n,h=null;e:for(;;){for(var x;d!==t||a!==0&&d.nodeType!==3||(o=r+a),d!==l||i!==0&&d.nodeType!==3||(s=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(x=d.firstChild)!==null;)h=d,d=x;for(;;){if(d===n)break e;if(h===t&&++p===a&&(o=r),h===l&&++c===i&&(s=r),(x=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=x}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Cl={focusedElem:n,selectionRange:t},Ki=!1,L=e;L!==null;)if(e=L,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,L=n;else for(;L!==null;){e=L;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var T=b.memoizedProps,w=b.memoizedState,f=e.stateNode,u=f.getSnapshotBeforeUpdate(e.elementType===e.type?T:Pn(e.type,T),w);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){X(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}return b=ts,ts=!1,b}function Mt(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var l=a.destroy;a.destroy=void 0,l!==void 0&&Hl(e,t,l)}a=a.next}while(a!==i)}}function Sa(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Kl(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function xu(n){var e=n.alternate;e!==null&&(n.alternate=null,xu(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Yn],delete e[Ut],delete e[Rl],delete e[Yd],delete e[qd])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bu(n){return n.tag===5||n.tag===3||n.tag===4}function is(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||bu(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ul(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=$i));else if(i!==4&&(n=n.child,n!==null))for(Ul(n,e,t),n=n.sibling;n!==null;)Ul(n,e,t),n=n.sibling}function Vl(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Vl(n,e,t),n=n.sibling;n!==null;)Vl(n,e,t),n=n.sibling}var en=null,_n=!1;function ne(n,e,t){for(t=t.child;t!==null;)Tu(n,e,t),t=t.sibling}function Tu(n,e,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(ma,t)}catch{}switch(t.tag){case 5:on||Ze(t,e);case 6:var i=en,a=_n;en=null,ne(n,e,t),en=i,_n=a,en!==null&&(_n?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(_n?(n=en,t=t.stateNode,n.nodeType===8?$a(n.parentNode,t):n.nodeType===1&&$a(n,t),Bt(n)):$a(en,t.stateNode));break;case 4:i=en,a=_n,en=t.stateNode.containerInfo,_n=!0,ne(n,e,t),en=i,_n=a;break;case 0:case 11:case 14:case 15:if(!on&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var l=a,r=l.destroy;l=l.tag,r!==void 0&&(l&2||l&4)&&Hl(t,e,r),a=a.next}while(a!==i)}ne(n,e,t);break;case 1:if(!on&&(Ze(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){X(t,e,o)}ne(n,e,t);break;case 21:ne(n,e,t);break;case 22:t.mode&1?(on=(i=on)||t.memoizedState!==null,ne(n,e,t),on=i):ne(n,e,t);break;default:ne(n,e,t)}}function as(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new tc),e.forEach(function(i){var a=dc.bind(null,n,i);t.has(i)||(t.add(i),i.then(a,a))})}}function Cn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];try{var l=n,r=e,o=r;n:for(;o!==null;){switch(o.tag){case 5:en=o.stateNode,_n=!1;break n;case 3:en=o.stateNode.containerInfo,_n=!0;break n;case 4:en=o.stateNode.containerInfo,_n=!0;break n}o=o.return}if(en===null)throw Error(S(160));Tu(l,r,a),en=null,_n=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(p){X(a,e,p)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vu(e,n),e=e.sibling}function vu(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(e,n),An(n),i&4){try{Mt(3,n,n.return),Sa(3,n)}catch(T){X(n,n.return,T)}try{Mt(5,n,n.return)}catch(T){X(n,n.return,T)}}break;case 1:Cn(e,n),An(n),i&512&&t!==null&&Ze(t,t.return);break;case 5:if(Cn(e,n),An(n),i&512&&t!==null&&Ze(t,t.return),n.flags&32){var a=n.stateNode;try{Yt(a,"")}catch(T){X(n,n.return,T)}}if(i&4&&(a=n.stateNode,a!=null)){var l=n.memoizedProps,r=t!==null?t.memoizedProps:l,o=n.type,s=n.updateQueue;if(n.updateQueue=null,s!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Bs(a,l),bl(o,r);var p=bl(o,l);for(r=0;r<s.length;r+=2){var c=s[r],d=s[r+1];c==="style"?Us(a,d):c==="dangerouslySetInnerHTML"?Hs(a,d):c==="children"?Yt(a,d):ur(a,c,d,p)}switch(o){case"input":ml(a,l);break;case"textarea":Xs(a,l);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Je(a,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?Je(a,!!l.multiple,l.defaultValue,!0):Je(a,!!l.multiple,l.multiple?[]:"",!1))}a[Ut]=l}catch(T){X(n,n.return,T)}}break;case 6:if(Cn(e,n),An(n),i&4){if(n.stateNode===null)throw Error(S(162));a=n.stateNode,l=n.memoizedProps;try{a.nodeValue=l}catch(T){X(n,n.return,T)}}break;case 3:if(Cn(e,n),An(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Bt(e.containerInfo)}catch(T){X(n,n.return,T)}break;case 4:Cn(e,n),An(n);break;case 13:Cn(e,n),An(n),a=n.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Br=H())),i&4&&as(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(on=(p=on)||c,Cn(e,n),on=p):Cn(e,n),An(n),i&8192){if(p=n.memoizedState!==null,(n.stateNode.isHidden=p)&&!c&&n.mode&1)for(L=n,c=n.child;c!==null;){for(d=L=c;L!==null;){switch(h=L,x=h.child,h.tag){case 0:case 11:case 14:case 15:Mt(4,h,h.return);break;case 1:Ze(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(T){X(i,t,T)}}break;case 5:Ze(h,h.return);break;case 22:if(h.memoizedState!==null){rs(d);continue}}x!==null?(x.return=h,L=x):rs(d)}c=c.sibling}n:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=d.stateNode,s=d.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Ks("display",r))}catch(T){X(n,n.return,T)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=p?"":d.memoizedProps}catch(T){X(n,n.return,T)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break n;for(;d.sibling===null;){if(d.return===null||d.return===n)break n;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,n),An(n),i&4&&as(n);break;case 21:break;default:Cn(e,n),An(n)}}function An(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(bu(t)){var i=t;break n}t=t.return}throw Error(S(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Yt(a,""),i.flags&=-33);var l=is(n);Vl(n,l,a);break;case 3:case 4:var r=i.stateNode.containerInfo,o=is(n);Ul(n,o,r);break;default:throw Error(S(161))}}catch(s){X(n,n.return,s)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ac(n,e,t){L=n,Su(n)}function Su(n,e,t){for(var i=(n.mode&1)!==0;L!==null;){var a=L,l=a.child;if(a.tag===22&&i){var r=a.memoizedState!==null||Ii;if(!r){var o=a.alternate,s=o!==null&&o.memoizedState!==null||on;o=Ii;var p=on;if(Ii=r,(on=s)&&!p)for(L=a;L!==null;)r=L,s=r.child,r.tag===22&&r.memoizedState!==null?os(a):s!==null?(s.return=r,L=s):os(a);for(;l!==null;)L=l,Su(l),l=l.sibling;L=a,Ii=o,on=p}ls(n)}else a.subtreeFlags&8772&&l!==null?(l.return=a,L=l):ls(n)}}function ls(n){for(;L!==null;){var e=L;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Sa(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(t===null)i.componentDidMount();else{var a=e.elementType===e.type?t.memoizedProps:Pn(e.type,t.memoizedProps);i.componentDidUpdate(a,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&Bo(e,l,i);break;case 3:var r=e.updateQueue;if(r!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Bo(e,r,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var p=e.alternate;if(p!==null){var c=p.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Bt(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}on||e.flags&512&&Kl(e)}catch(h){X(e,e.return,h)}}if(e===n){L=null;break}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}}function rs(n){for(;L!==null;){var e=L;if(e===n){L=null;break}var t=e.sibling;if(t!==null){t.return=e.return,L=t;break}L=e.return}}function os(n){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sa(4,e)}catch(s){X(e,t,s)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var a=e.return;try{i.componentDidMount()}catch(s){X(e,a,s)}}var l=e.return;try{Kl(e)}catch(s){X(e,l,s)}break;case 5:var r=e.return;try{Kl(e)}catch(s){X(e,r,s)}}}catch(s){X(e,e.return,s)}if(e===n){L=null;break}var o=e.sibling;if(o!==null){o.return=e.return,L=o;break}L=e.return}}var lc=Math.ceil,oa=Qn.ReactCurrentDispatcher,jr=Qn.ReactCurrentOwner,On=Qn.ReactCurrentBatchConfig,D=0,nn=null,U=null,tn=0,xn=0,Qe=Te(0),$=0,ni=null,Me=0,ka=0,Wr=0,zt=null,cn=null,Br=0,ft=1/0,Bn=null,sa=!1,$l=null,ce=null,Li=!1,re=null,pa=0,At=0,Zl=null,Ai=-1,Ei=0;function un(){return D&6?H():Ai!==-1?Ai:Ai=H()}function me(n){return n.mode&1?D&2&&tn!==0?tn&-tn:Wd.transition!==null?(Ei===0&&(Ei=rp()),Ei):(n=M,n!==0||(n=window.event,n=n===void 0?16:cp(n.type)),n):1}function Mn(n,e,t,i){if(50<At)throw At=0,Zl=null,Error(S(185));ai(n,t,i),(!(D&2)||n!==nn)&&(n===nn&&(!(D&2)&&(ka|=t),$===4&&ae(n,tn)),yn(n,i),t===1&&D===0&&!(e.mode&1)&&(ft=H()+500,ba&&ve()))}function yn(n,e){var t=n.callbackNode;Wf(n,e);var i=Hi(n,n===nn?tn:0);if(i===0)t!==null&&go(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&go(t),e===1)n.tag===0?jd(ss.bind(null,n)):_p(ss.bind(null,n)),Ad(function(){!(D&6)&&ve()}),t=null;else{switch(op(i)){case 1:t=hr;break;case 4:t=ap;break;case 16:t=Gi;break;case 536870912:t=lp;break;default:t=Gi}t=Cu(t,ku.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ku(n,e){if(Ai=-1,Ei=0,D&6)throw Error(S(327));var t=n.callbackNode;if(at()&&n.callbackNode!==t)return null;var i=Hi(n,n===nn?tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ua(n,i);else{e=i;var a=D;D|=2;var l=Iu();(nn!==n||tn!==e)&&(Bn=null,ft=H()+500,Ce(n,e));do try{sc();break}catch(o){wu(n,o)}while(!0);Fr(),oa.current=l,D=a,U!==null?e=0:(nn=null,tn=0,e=$)}if(e!==0){if(e===2&&(a=wl(n),a!==0&&(i=a,e=Ql(n,a))),e===1)throw t=ni,Ce(n,0),ae(n,i),yn(n,H()),t;if(e===6)ae(n,i);else{if(a=n.current.alternate,!(i&30)&&!rc(a)&&(e=ua(n,i),e===2&&(l=wl(n),l!==0&&(i=l,e=Ql(n,l))),e===1))throw t=ni,Ce(n,0),ae(n,i),yn(n,H()),t;switch(n.finishedWork=a,n.finishedLanes=i,e){case 0:case 1:throw Error(S(345));case 2:Le(n,cn,Bn);break;case 3:if(ae(n,i),(i&130023424)===i&&(e=Br+500-H(),10<e)){if(Hi(n,0)!==0)break;if(a=n.suspendedLanes,(a&i)!==i){un(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=_l(Le.bind(null,n,cn,Bn),e);break}Le(n,cn,Bn);break;case 4:if(ae(n,i),(i&4194240)===i)break;for(e=n.eventTimes,a=-1;0<i;){var r=31-Dn(i);l=1<<r,r=e[r],r>a&&(a=r),i&=~l}if(i=a,i=H()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lc(i/1960))-i,10<i){n.timeoutHandle=_l(Le.bind(null,n,cn,Bn),i);break}Le(n,cn,Bn);break;case 5:Le(n,cn,Bn);break;default:throw Error(S(329))}}}return yn(n,H()),n.callbackNode===t?ku.bind(null,n):null}function Ql(n,e){var t=zt;return n.current.memoizedState.isDehydrated&&(Ce(n,e).flags|=256),n=ua(n,e),n!==2&&(e=cn,cn=t,e!==null&&Jl(e)),n}function Jl(n){cn===null?cn=n:cn.push.apply(cn,n)}function rc(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var a=t[i],l=a.getSnapshot;a=a.value;try{if(!zn(l(),a))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ae(n,e){for(e&=~Wr,e&=~ka,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Dn(e),i=1<<t;n[t]=-1,e&=~i}}function ss(n){if(D&6)throw Error(S(327));at();var e=Hi(n,0);if(!(e&1))return yn(n,H()),null;var t=ua(n,e);if(n.tag!==0&&t===2){var i=wl(n);i!==0&&(e=i,t=Ql(n,i))}if(t===1)throw t=ni,Ce(n,0),ae(n,e),yn(n,H()),t;if(t===6)throw Error(S(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Le(n,cn,Bn),yn(n,H()),null}function Xr(n,e){var t=D;D|=1;try{return n(e)}finally{D=t,D===0&&(ft=H()+500,ba&&ve())}}function ze(n){re!==null&&re.tag===0&&!(D&6)&&at();var e=D;D|=1;var t=On.transition,i=M;try{if(On.transition=null,M=1,n)return n()}finally{M=i,On.transition=t,D=e,!(D&6)&&ve()}}function Gr(){xn=Qe.current,Y(Qe)}function Ce(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,zd(t)),U!==null)for(t=U.return;t!==null;){var i=t;switch(Ir(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zi();break;case 3:pt(),Y(hn),Y(sn),Dr();break;case 5:Rr(i);break;case 4:pt();break;case 13:Y(j);break;case 19:Y(j);break;case 10:Nr(i.type._context);break;case 22:case 23:Gr()}t=t.return}if(nn=n,U=n=he(n.current,null),tn=xn=e,$=0,ni=null,Wr=ka=Me=0,cn=zt=null,Fe!==null){for(e=0;e<Fe.length;e++)if(t=Fe[e],i=t.interleaved,i!==null){t.interleaved=null;var a=i.next,l=t.pending;if(l!==null){var r=l.next;l.next=a,i.next=r}t.pending=i}Fe=null}return n}function wu(n,e){do{var t=U;try{if(Fr(),Di.current=ra,la){for(var i=W.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}la=!1}if(De=0,J=V=W=null,Dt=!1,Zt=0,jr.current=null,t===null||t.return===null){$=1,ni=e,U=null;break}n:{var l=n,r=t.return,o=t,s=e;if(e=tn,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=Vo(r);if(x!==null){x.flags&=-257,$o(x,r,o,l,e),x.mode&1&&Uo(l,p,e),e=x,s=p;var b=e.updateQueue;if(b===null){var T=new Set;T.add(s),e.updateQueue=T}else b.add(s);break n}else{if(!(e&1)){Uo(l,p,e),Hr();break n}s=Error(S(426))}}else if(q&&o.mode&1){var w=Vo(r);if(w!==null){!(w.flags&65536)&&(w.flags|=256),$o(w,r,o,l,e),Lr(ut(s,o));break n}}l=s=ut(s,o),$!==4&&($=2),zt===null?zt=[l]:zt.push(l),l=r;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var f=ou(l,s,e);Wo(l,f);break n;case 1:o=s;var u=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ce===null||!ce.has(m)))){l.flags|=65536,e&=-e,l.lanes|=e;var y=su(l,o,e);Wo(l,y);break n}}l=l.return}while(l!==null)}Ou(t)}catch(g){e=g,U===t&&t!==null&&(U=t=t.return);continue}break}while(!0)}function Iu(){var n=oa.current;return oa.current=ra,n===null?ra:n}function Hr(){($===0||$===3||$===2)&&($=4),nn===null||!(Me&268435455)&&!(ka&268435455)||ae(nn,tn)}function ua(n,e){var t=D;D|=2;var i=Iu();(nn!==n||tn!==e)&&(Bn=null,Ce(n,e));do try{oc();break}catch(a){wu(n,a)}while(!0);if(Fr(),D=t,oa.current=i,U!==null)throw Error(S(261));return nn=null,tn=0,$}function oc(){for(;U!==null;)Lu(U)}function sc(){for(;U!==null&&!Rf();)Lu(U)}function Lu(n){var e=Nu(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?Ou(n):U=e,jr.current=null}function Ou(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ec(t,e),t!==null){t.flags&=32767,U=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$=6,U=null;return}}else if(t=nc(t,e,xn),t!==null){U=t;return}if(e=e.sibling,e!==null){U=e;return}U=e=n}while(e!==null);$===0&&($=5)}function Le(n,e,t){var i=M,a=On.transition;try{On.transition=null,M=1,pc(n,e,t,i)}finally{On.transition=a,M=i}return null}function pc(n,e,t,i){do at();while(re!==null);if(D&6)throw Error(S(327));t=n.finishedWork;var a=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(S(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(Bf(n,l),n===nn&&(U=nn=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Li||(Li=!0,Cu(Gi,function(){return at(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=On.transition,On.transition=null;var r=M;M=1;var o=D;D|=4,jr.current=null,ic(n,t),vu(t,n),Nd(Cl),Ki=!!Nl,Cl=Nl=null,n.current=t,ac(t),Df(),D=o,M=r,On.transition=l}else n.current=t;if(Li&&(Li=!1,re=n,pa=a),l=n.pendingLanes,l===0&&(ce=null),Af(t.stateNode),yn(n,H()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)a=e[t],i(a.value,{componentStack:a.stack,digest:a.digest});if(sa)throw sa=!1,n=$l,$l=null,n;return pa&1&&n.tag!==0&&at(),l=n.pendingLanes,l&1?n===Zl?At++:(At=0,Zl=n):At=0,ve(),null}function at(){if(re!==null){var n=op(pa),e=On.transition,t=M;try{if(On.transition=null,M=16>n?16:n,re===null)var i=!1;else{if(n=re,re=null,pa=0,D&6)throw Error(S(331));var a=D;for(D|=4,L=n.current;L!==null;){var l=L,r=l.child;if(L.flags&16){var o=l.deletions;if(o!==null){for(var s=0;s<o.length;s++){var p=o[s];for(L=p;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Mt(8,c,l)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var h=c.sibling,x=c.return;if(xu(c),c===p){L=null;break}if(h!==null){h.return=x,L=h;break}L=x}}}var b=l.alternate;if(b!==null){var T=b.child;if(T!==null){b.child=null;do{var w=T.sibling;T.sibling=null,T=w}while(T!==null)}}L=l}}if(l.subtreeFlags&2064&&r!==null)r.return=l,L=r;else n:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Mt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,L=f;break n}L=l.return}}var u=n.current;for(L=u;L!==null;){r=L;var m=r.child;if(r.subtreeFlags&2064&&m!==null)m.return=r,L=m;else n:for(r=u;L!==null;){if(o=L,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Sa(9,o)}}catch(g){X(o,o.return,g)}if(o===r){L=null;break n}var y=o.sibling;if(y!==null){y.return=o.return,L=y;break n}L=o.return}}if(D=a,ve(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(ma,n)}catch{}i=!0}return i}finally{M=t,On.transition=e}}return!1}function ps(n,e,t){e=ut(t,e),e=ou(n,e,1),n=de(n,e,1),e=un(),n!==null&&(ai(n,1,e),yn(n,e))}function X(n,e,t){if(n.tag===3)ps(n,n,t);else for(;e!==null;){if(e.tag===3){ps(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ce===null||!ce.has(i))){n=ut(t,n),n=su(e,n,1),e=de(e,n,1),n=un(),e!==null&&(ai(e,1,n),yn(e,n));break}}e=e.return}}function uc(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=un(),n.pingedLanes|=n.suspendedLanes&t,nn===n&&(tn&t)===t&&($===4||$===3&&(tn&130023424)===tn&&500>H()-Br?Ce(n,0):Wr|=t),yn(n,e)}function Fu(n,e){e===0&&(n.mode&1?(e=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):e=1);var t=un();n=$n(n,e),n!==null&&(ai(n,e,t),yn(n,t))}function fc(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Fu(n,t)}function dc(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(S(314))}i!==null&&i.delete(e),Fu(n,t)}var Nu;Nu=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||hn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,Jd(n,e,t);mn=!!(n.flags&131072)}else mn=!1,q&&e.flags&1048576&&Rp(e,na,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zi(n,e),n=e.pendingProps;var a=rt(e,sn.current);it(e,t),a=zr(null,e,i,n,a,t);var l=Ar();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(l=!0,Qi(e)):l=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Pr(e),a.updater=va,e.stateNode=a,a._reactInternals=e,Yl(e,i,n,t),e=Wl(null,e,i,!0,l,t)):(e.tag=0,q&&l&&wr(e),pn(null,e,a,t),e=e.child),e;case 16:i=e.elementType;n:{switch(zi(n,e),n=e.pendingProps,a=i._init,i=a(i._payload),e.type=i,a=e.tag=mc(i),n=Pn(i,n),a){case 0:e=jl(null,e,i,n,t);break n;case 1:e=Jo(null,e,i,n,t);break n;case 11:e=Zo(null,e,i,n,t);break n;case 14:e=Qo(null,e,i,Pn(i.type,n),t);break n}throw Error(S(306,i,""))}return e;case 0:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:Pn(i,a),jl(n,e,i,a,t);case 1:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:Pn(i,a),Jo(n,e,i,a,t);case 3:n:{if(du(e),n===null)throw Error(S(387));i=e.pendingProps,l=e.memoizedState,a=l.element,Yp(n,e),ia(e,i,null,t);var r=e.memoizedState;if(i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){a=ut(Error(S(423)),e),e=ns(n,e,i,t,a);break n}else if(i!==a){a=ut(Error(S(424)),e),e=ns(n,e,i,t,a);break n}else for(bn=fe(e.stateNode.containerInfo.firstChild),Tn=e,q=!0,Rn=null,t=Ap(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),i===a){e=Zn(n,e,t);break n}pn(n,e,i,t)}e=e.child}return e;case 5:return qp(e),n===null&&zl(e),i=e.type,a=e.pendingProps,l=n!==null?n.memoizedProps:null,r=a.children,Pl(i,a)?r=null:l!==null&&Pl(i,l)&&(e.flags|=32),fu(n,e),pn(n,e,r,t),e.child;case 6:return n===null&&zl(e),null;case 13:return cu(n,e,t);case 4:return _r(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=st(e,null,i,t):pn(n,e,i,t),e.child;case 11:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:Pn(i,a),Zo(n,e,i,a,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(i=e.type._context,a=e.pendingProps,l=e.memoizedProps,r=a.value,A(ea,i._currentValue),i._currentValue=r,l!==null)if(zn(l.value,r)){if(l.children===a.children&&!hn.current){e=Zn(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){r=l.child;for(var s=o.firstContext;s!==null;){if(s.context===i){if(l.tag===1){s=Kn(-1,t&-t),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var c=p.pending;c===null?s.next=s:(s.next=c.next,c.next=s),p.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Al(l.return,t,e),o.lanes|=t;break}s=s.next}}else if(l.tag===10)r=l.type===e.type?null:l.child;else if(l.tag===18){if(r=l.return,r===null)throw Error(S(341));r.lanes|=t,o=r.alternate,o!==null&&(o.lanes|=t),Al(r,t,e),r=l.sibling}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}pn(n,e,a.children,t),e=e.child}return e;case 9:return a=e.type,i=e.pendingProps.children,it(e,t),a=Fn(a),i=i(a),e.flags|=1,pn(n,e,i,t),e.child;case 14:return i=e.type,a=Pn(i,e.pendingProps),a=Pn(i.type,a),Qo(n,e,i,a,t);case 15:return pu(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:Pn(i,a),zi(n,e),e.tag=1,gn(i)?(n=!0,Qi(e)):n=!1,it(e,t),ru(e,i,a),Yl(e,i,a,t),Wl(null,e,i,!0,n,t);case 19:return mu(n,e,t);case 22:return uu(n,e,t)}throw Error(S(156,e.tag))};function Cu(n,e){return ip(n,e)}function cc(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(n,e,t,i){return new cc(n,e,t,i)}function Kr(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mc(n){if(typeof n=="function")return Kr(n)?1:0;if(n!=null){if(n=n.$$typeof,n===dr)return 11;if(n===cr)return 14}return 2}function he(n,e){var t=n.alternate;return t===null?(t=Ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yi(n,e,t,i,a,l){var r=2;if(i=n,typeof n=="function")Kr(n)&&(r=1);else if(typeof n=="string")r=5;else n:switch(n){case We:return Pe(t.children,a,l,e);case fr:r=8,a|=8;break;case pl:return n=Ln(12,t,e,a|2),n.elementType=pl,n.lanes=l,n;case ul:return n=Ln(13,t,e,a),n.elementType=ul,n.lanes=l,n;case fl:return n=Ln(19,t,e,a),n.elementType=fl,n.lanes=l,n;case qs:return wa(t,a,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Es:r=10;break n;case Ys:r=9;break n;case dr:r=11;break n;case cr:r=14;break n;case ee:r=16,i=null;break n}throw Error(S(130,n==null?n:typeof n,""))}return e=Ln(r,t,e,a),e.elementType=n,e.type=i,e.lanes=l,e}function Pe(n,e,t,i){return n=Ln(7,n,i,e),n.lanes=t,n}function wa(n,e,t,i){return n=Ln(22,n,i,e),n.elementType=qs,n.lanes=t,n.stateNode={isHidden:!1},n}function al(n,e,t){return n=Ln(6,n,null,e),n.lanes=t,n}function ll(n,e,t){return e=Ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function hc(n,e,t,i,a){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ur(n,e,t,i,a,l,r,o,s){return n=new hc(n,e,t,o,s),e===1?(e=1,l===!0&&(e|=8)):e=0,l=Ln(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pr(l),n}function gc(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Pu(n){if(!n)return xe;n=n._reactInternals;n:{if(Ee(n)!==n||n.tag!==1)throw Error(S(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(S(171))}if(n.tag===1){var t=n.type;if(gn(t))return Pp(n,t,e)}return e}function _u(n,e,t,i,a,l,r,o,s){return n=Ur(t,i,!0,n,a,l,r,o,s),n.context=Pu(null),t=n.current,i=un(),a=me(t),l=Kn(i,a),l.callback=e??null,de(t,l,a),n.current.lanes=a,ai(n,a,i),yn(n,i),n}function Ia(n,e,t,i){var a=e.current,l=un(),r=me(a);return t=Pu(t),e.context===null?e.context=t:e.pendingContext=t,e=Kn(l,r),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=de(a,e,r),n!==null&&(Mn(n,a,r,l),Ri(n,a,r)),r}function fa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function us(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Vr(n,e){us(n,e),(n=n.alternate)&&us(n,e)}function yc(){return null}var Ru=typeof reportError=="function"?reportError:function(n){console.error(n)};function $r(n){this._internalRoot=n}La.prototype.render=$r.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(S(409));Ia(n,e,null,null)};La.prototype.unmount=$r.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ze(function(){Ia(null,n,null,null)}),e[Vn]=null}};function La(n){this._internalRoot=n}La.prototype.unstable_scheduleHydration=function(n){if(n){var e=up();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ie.length&&e!==0&&e<ie[t].priority;t++);ie.splice(t,0,n),t===0&&dp(n)}};function Zr(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fs(){}function xc(n,e,t,i,a){if(a){if(typeof i=="function"){var l=i;i=function(){var p=fa(r);l.call(p)}}var r=_u(e,i,n,0,null,!1,!1,"",fs);return n._reactRootContainer=r,n[Vn]=r.current,Ht(n.nodeType===8?n.parentNode:n),ze(),r}for(;a=n.lastChild;)n.removeChild(a);if(typeof i=="function"){var o=i;i=function(){var p=fa(s);o.call(p)}}var s=Ur(n,0,!1,null,null,!1,!1,"",fs);return n._reactRootContainer=s,n[Vn]=s.current,Ht(n.nodeType===8?n.parentNode:n),ze(function(){Ia(e,s,t,i)}),s}function Fa(n,e,t,i,a){var l=t._reactRootContainer;if(l){var r=l;if(typeof a=="function"){var o=a;a=function(){var s=fa(r);o.call(s)}}Ia(e,r,n,a)}else r=xc(t,e,n,a,i);return fa(r)}sp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ot(e.pendingLanes);t!==0&&(gr(e,t|1),yn(e,H()),!(D&6)&&(ft=H()+500,ve()))}break;case 13:ze(function(){var i=$n(n,1);if(i!==null){var a=un();Mn(i,n,1,a)}}),Vr(n,1)}};yr=function(n){if(n.tag===13){var e=$n(n,134217728);if(e!==null){var t=un();Mn(e,n,134217728,t)}Vr(n,134217728)}};pp=function(n){if(n.tag===13){var e=me(n),t=$n(n,e);if(t!==null){var i=un();Mn(t,n,e,i)}Vr(n,e)}};up=function(){return M};fp=function(n,e){var t=M;try{return M=n,e()}finally{M=t}};vl=function(n,e,t){switch(e){case"input":if(ml(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var a=xa(i);if(!a)throw Error(S(90));Ws(i),ml(i,a)}}}break;case"textarea":Xs(n,t);break;case"select":e=t.value,e!=null&&Je(n,!!t.multiple,e,!1)}};Zs=Xr;Qs=ze;var bc={usingClientEntryPoint:!1,Events:[ri,He,xa,Vs,$s,Xr]},wt={findFiberByHostInstance:Oe,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tc={bundleType:wt.bundleType,version:wt.version,rendererPackageName:wt.rendererPackageName,rendererConfig:wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ep(n),n===null?null:n.stateNode},findFiberByHostInstance:wt.findFiberByHostInstance||yc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{ma=Oi.inject(Tc),qn=Oi}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bc;Sn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zr(e))throw Error(S(200));return gc(n,e,null,t)};Sn.createRoot=function(n,e){if(!Zr(n))throw Error(S(299));var t=!1,i="",a=Ru;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Ur(n,1,!1,null,null,t,!1,i,a),n[Vn]=e.current,Ht(n.nodeType===8?n.parentNode:n),new $r(e)};Sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(S(188)):(n=Object.keys(n).join(","),Error(S(268,n)));return n=ep(e),n=n===null?null:n.stateNode,n};Sn.flushSync=function(n){return ze(n)};Sn.hydrate=function(n,e,t){if(!Oa(e))throw Error(S(200));return Fa(null,n,e,!0,t)};Sn.hydrateRoot=function(n,e,t){if(!Zr(n))throw Error(S(405));var i=t!=null&&t.hydratedSources||null,a=!1,l="",r=Ru;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),e=_u(e,null,n,1,t??null,a,!1,l,r),n[Vn]=e.current,Ht(n),i)for(n=0;n<i.length;n++)t=i[n],a=t._getVersion,a=a(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,a]:e.mutableSourceEagerHydrationData.push(t,a);return new La(e)};Sn.render=function(n,e,t){if(!Oa(e))throw Error(S(200));return Fa(null,n,e,!1,t)};Sn.unmountComponentAtNode=function(n){if(!Oa(n))throw Error(S(40));return n._reactRootContainer?(ze(function(){Fa(null,null,n,!1,function(){n._reactRootContainer=null,n[Vn]=null})}),!0):!1};Sn.unstable_batchedUpdates=Xr;Sn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Oa(t))throw Error(S(200));if(n==null||n._reactInternals===void 0)throw Error(S(38));return Fa(n,e,t,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Du(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Du)}catch(n){console.error(n)}}Du(),Ds.exports=Sn;var vc=Ds.exports,ds=vc;ol.createRoot=ds.createRoot,ol.hydrateRoot=ds.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ei.apply(this,arguments)}var oe;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(oe||(oe={}));const cs="popstate";function Sc(n){n===void 0&&(n={});function e(a,l){let{pathname:r="/",search:o="",hash:s=""}=Ye(a.location.hash.substr(1));return!r.startsWith("/")&&!r.startsWith(".")&&(r="/"+r),nr("",{pathname:r,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let r=a.document.querySelector("base"),o="";if(r&&r.getAttribute("href")){let s=a.location.href,p=s.indexOf("#");o=p===-1?s:s.slice(0,p)}return o+"#"+(typeof l=="string"?l:da(l))}function i(a,l){Na(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return wc(e,t,i,n)}function K(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Na(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kc(){return Math.random().toString(36).substr(2,8)}function ms(n,e){return{usr:n.state,key:n.key,idx:e}}function nr(n,e,t,i){return t===void 0&&(t=null),ei({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ye(e):e,{state:t,key:e&&e.key||i||kc()})}function da(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ye(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function wc(n,e,t,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:l=!1}=i,r=a.history,o=oe.Pop,s=null,p=c();p==null&&(p=0,r.replaceState(ei({},r.state,{idx:p}),""));function c(){return(r.state||{idx:null}).idx}function d(){o=oe.Pop;let w=c(),f=w==null?null:w-p;p=w,s&&s({action:o,location:T.location,delta:f})}function h(w,f){o=oe.Push;let u=nr(T.location,w,f);t&&t(u,w),p=c()+1;let m=ms(u,p),y=T.createHref(u);try{r.pushState(m,"",y)}catch(g){if(g instanceof DOMException&&g.name==="DataCloneError")throw g;a.location.assign(y)}l&&s&&s({action:o,location:T.location,delta:1})}function x(w,f){o=oe.Replace;let u=nr(T.location,w,f);t&&t(u,w),p=c();let m=ms(u,p),y=T.createHref(u);r.replaceState(m,"",y),l&&s&&s({action:o,location:T.location,delta:0})}function b(w){let f=a.location.origin!=="null"?a.location.origin:a.location.href,u=typeof w=="string"?w:da(w);return u=u.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let T={get action(){return o},get location(){return n(a,r)},listen(w){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(cs,d),s=w,()=>{a.removeEventListener(cs,d),s=null}},createHref(w){return e(a,w)},createURL:b,encodeLocation(w){let f=b(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:x,go(w){return r.go(w)}};return T}var hs;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(hs||(hs={}));function Ic(n,e,t){return t===void 0&&(t="/"),Lc(n,e,t)}function Lc(n,e,t,i){let a=typeof e=="string"?Ye(e):e,l=Qr(a.pathname||"/",t);if(l==null)return null;let r=Mu(n);Oc(r);let o=null;for(let s=0;o==null&&s<r.length;++s){let p=Yc(l);o=zc(r[s],p)}return o}function Mu(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let a=(l,r,o)=>{let s={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:r,route:l};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(i.length));let p=ge([i,s.relativePath]),c=t.concat(s);l.children&&l.children.length>0&&(K(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Mu(l.children,e,c,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Dc(p,l.index),routesMeta:c})};return n.forEach((l,r)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))a(l,r);else for(let s of zu(l.path))a(l,r,s)}),e}function zu(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let r=zu(i.join("/")),o=[];return o.push(...r.map(s=>s===""?l:[l,s].join("/"))),a&&o.push(...r),o.map(s=>n.startsWith("/")&&s===""?"/":s)}function Oc(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Mc(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Fc=/^:[\w-]+$/,Nc=3,Cc=2,Pc=1,_c=10,Rc=-2,gs=n=>n==="*";function Dc(n,e){let t=n.split("/"),i=t.length;return t.some(gs)&&(i+=Rc),e&&(i+=Cc),t.filter(a=>!gs(a)).reduce((a,l)=>a+(Fc.test(l)?Nc:l===""?Pc:_c),i)}function Mc(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function zc(n,e,t){let{routesMeta:i}=n,a={},l="/",r=[];for(let o=0;o<i.length;++o){let s=i[o],p=o===i.length-1,c=l==="/"?e:e.slice(l.length)||"/",d=Ac({path:s.relativePath,caseSensitive:s.caseSensitive,end:p},c),h=s.route;if(!d)return null;Object.assign(a,d.params),r.push({params:a,pathname:ge([l,d.pathname]),pathnameBase:Xc(ge([l,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(l=ge([l,d.pathnameBase]))}return r}function Ac(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Ec(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],r=l.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((p,c,d)=>{let{paramName:h,isOptional:x}=c;if(h==="*"){let T=o[d]||"";r=l.slice(0,l.length-T.length).replace(/(.)\/+$/,"$1")}const b=o[d];return x&&!b?p[h]=void 0:p[h]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:r,pattern:n}}function Ec(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Na(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,s)=>(i.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function Yc(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Na(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Qr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const qc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jc=n=>qc.test(n);function Wc(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:a=""}=typeof n=="string"?Ye(n):n,l;if(t)if(jc(t))l=t;else{if(t.includes("//")){let r=t;t=t.replace(/\/\/+/g,"/"),Na(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+t))}t.startsWith("/")?l=ys(t.substring(1),"/"):l=ys(t,e)}else l=e;return{pathname:l,search:Gc(i),hash:Hc(a)}}function ys(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function rl(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bc(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jr(n,e){let t=Bc(n);return e?t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function no(n,e,t,i){i===void 0&&(i=!1);let a;typeof n=="string"?a=Ye(n):(a=ei({},n),K(!a.pathname||!a.pathname.includes("?"),rl("?","pathname","search",a)),K(!a.pathname||!a.pathname.includes("#"),rl("#","pathname","hash",a)),K(!a.search||!a.search.includes("#"),rl("#","search","hash",a)));let l=n===""||a.pathname==="",r=l?"/":a.pathname,o;if(r==null)o=t;else{let d=e.length-1;if(!i&&r.startsWith("..")){let h=r.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}o=d>=0?e[d]:"/"}let s=Wc(a,o),p=r&&r!=="/"&&r.endsWith("/"),c=(l||r===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(p||c)&&(s.pathname+="/"),s}const ge=n=>n.join("/").replace(/\/\/+/g,"/"),Xc=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Gc=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Hc=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Kc(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Au=["post","put","patch","delete"];new Set(Au);const Uc=["get",...Au];new Set(Uc);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ti.apply(this,arguments)}const eo=k.createContext(null),Vc=k.createContext(null),Se=k.createContext(null),Ca=k.createContext(null),Jn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Eu=k.createContext(null);function $c(n,e){let{relative:t}=e===void 0?{}:e;ht()||K(!1);let{basename:i,navigator:a}=k.useContext(Se),{hash:l,pathname:r,search:o}=ju(n,{relative:t}),s=r;return i!=="/"&&(s=r==="/"?i:ge([i,r])),a.createHref({pathname:s,search:o,hash:l})}function ht(){return k.useContext(Ca)!=null}function si(){return ht()||K(!1),k.useContext(Ca).location}function Yu(n){k.useContext(Se).static||k.useLayoutEffect(n)}function qu(){let{isDataRoute:n}=k.useContext(Jn);return n?u1():Zc()}function Zc(){ht()||K(!1);let n=k.useContext(eo),{basename:e,future:t,navigator:i}=k.useContext(Se),{matches:a}=k.useContext(Jn),{pathname:l}=si(),r=JSON.stringify(Jr(a,t.v7_relativeSplatPath)),o=k.useRef(!1);return Yu(()=>{o.current=!0}),k.useCallback(function(p,c){if(c===void 0&&(c={}),!o.current)return;if(typeof p=="number"){i.go(p);return}let d=no(p,JSON.parse(r),l,c.relative==="path");n==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ge([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,r,l,n])}function Qc(){let{matches:n}=k.useContext(Jn),e=n[n.length-1];return e?e.params:{}}function ju(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=k.useContext(Se),{matches:a}=k.useContext(Jn),{pathname:l}=si(),r=JSON.stringify(Jr(a,i.v7_relativeSplatPath));return k.useMemo(()=>no(n,JSON.parse(r),l,t==="path"),[n,r,l,t])}function Jc(n,e){return n1(n,e)}function n1(n,e,t,i){ht()||K(!1);let{navigator:a}=k.useContext(Se),{matches:l}=k.useContext(Jn),r=l[l.length-1],o=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let p=si(),c;if(e){var d;let w=typeof e=="string"?Ye(e):e;s==="/"||(d=w.pathname)!=null&&d.startsWith(s)||K(!1),c=w}else c=p;let h=c.pathname||"/",x=h;if(s!=="/"){let w=s.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=Ic(n,{pathname:x}),T=l1(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:ge([s,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:ge([s,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,t,i);return e&&T?k.createElement(Ca.Provider,{value:{location:ti({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:oe.Pop}},T):T}function e1(){let n=p1(),e=Kc(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:a},t):null,null)}const t1=k.createElement(e1,null);class i1 extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?k.createElement(Jn.Provider,{value:this.props.routeContext},k.createElement(Eu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a1(n){let{routeContext:e,match:t,children:i}=n,a=k.useContext(eo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(Jn.Provider,{value:e},i)}function l1(n,e,t,i){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let r=n,o=(a=t)==null?void 0:a.errors;if(o!=null){let c=r.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);c>=0||K(!1),r=r.slice(0,Math.min(r.length,c+1))}let s=!1,p=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<r.length;c++){let d=r[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(p=c),d.route.id){let{loaderData:h,errors:x}=t,b=d.route.loader&&h[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||b){s=!0,p>=0?r=r.slice(0,p+1):r=[r[0]];break}}}return r.reduceRight((c,d,h)=>{let x,b=!1,T=null,w=null;t&&(x=o&&d.route.id?o[d.route.id]:void 0,T=d.route.errorElement||t1,s&&(p<0&&h===0?(f1("route-fallback"),b=!0,w=null):p===h&&(b=!0,w=d.route.hydrateFallbackElement||null)));let f=e.concat(r.slice(0,h+1)),u=()=>{let m;return x?m=T:b?m=w:d.route.Component?m=k.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,k.createElement(a1,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:t!=null},children:m})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?k.createElement(i1,{location:t.location,revalidation:t.revalidation,component:T,error:x,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var Wu=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Wu||{}),Bu=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Bu||{});function r1(n){let e=k.useContext(eo);return e||K(!1),e}function o1(n){let e=k.useContext(Vc);return e||K(!1),e}function s1(n){let e=k.useContext(Jn);return e||K(!1),e}function Xu(n){let e=s1(),t=e.matches[e.matches.length-1];return t.route.id||K(!1),t.route.id}function p1(){var n;let e=k.useContext(Eu),t=o1(),i=Xu();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function u1(){let{router:n}=r1(Wu.UseNavigateStable),e=Xu(Bu.UseNavigateStable),t=k.useRef(!1);return Yu(()=>{t.current=!0}),k.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?n.navigate(a):n.navigate(a,ti({fromRouteId:e},l)))},[n,e])}const xs={};function f1(n,e,t){xs[n]||(xs[n]=!0)}function d1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function c1(n){let{to:e,replace:t,state:i,relative:a}=n;ht()||K(!1);let{future:l,static:r}=k.useContext(Se),{matches:o}=k.useContext(Jn),{pathname:s}=si(),p=qu(),c=no(e,Jr(o,l.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(c);return k.useEffect(()=>p(JSON.parse(d),{replace:t,state:i,relative:a}),[p,d,a,t,i]),null}function qi(n){K(!1)}function m1(n){let{basename:e="/",children:t=null,location:i,navigationType:a=oe.Pop,navigator:l,static:r=!1,future:o}=n;ht()&&K(!1);let s=e.replace(/^\/*/,"/"),p=k.useMemo(()=>({basename:s,navigator:l,static:r,future:ti({v7_relativeSplatPath:!1},o)}),[s,o,l,r]);typeof i=="string"&&(i=Ye(i));let{pathname:c="/",search:d="",hash:h="",state:x=null,key:b="default"}=i,T=k.useMemo(()=>{let w=Qr(c,s);return w==null?null:{location:{pathname:w,search:d,hash:h,state:x,key:b},navigationType:a}},[s,c,d,h,x,b,a]);return T==null?null:k.createElement(Se.Provider,{value:p},k.createElement(Ca.Provider,{children:t,value:T}))}function h1(n){let{children:e,location:t}=n;return Jc(er(e),t)}new Promise(()=>{});function er(n,e){e===void 0&&(e=[]);let t=[];return k.Children.forEach(n,(i,a)=>{if(!k.isValidElement(i))return;let l=[...e,a];if(i.type===k.Fragment){t.push.apply(t,er(i.props.children,l));return}i.type!==qi&&K(!1),!i.props.index||!i.props.children||K(!1);let r={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(r.children=er(i.props.children,l)),t.push(r)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},tr.apply(this,arguments)}function g1(n,e){if(n==null)return{};var t={},i=Object.keys(n),a,l;for(l=0;l<i.length;l++)a=i[l],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function y1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function x1(n,e){return n.button===0&&(!e||e==="_self")&&!y1(n)}const b1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T1="6";try{window.__reactRouterVersion=T1}catch{}const v1="startTransition",bs=uf[v1];function S1(n){let{basename:e,children:t,future:i,window:a}=n,l=k.useRef();l.current==null&&(l.current=Sc({window:a,v5Compat:!0}));let r=l.current,[o,s]=k.useState({action:r.action,location:r.location}),{v7_startTransition:p}=i||{},c=k.useCallback(d=>{p&&bs?bs(()=>s(d)):s(d)},[s,p]);return k.useLayoutEffect(()=>r.listen(c),[r,c]),k.useEffect(()=>d1(i),[i]),k.createElement(m1,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:r,future:i})}const k1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ir=k.forwardRef(function(e,t){let{onClick:i,relative:a,reloadDocument:l,replace:r,state:o,target:s,to:p,preventScrollReset:c,viewTransition:d}=e,h=g1(e,b1),{basename:x}=k.useContext(Se),b,T=!1;if(typeof p=="string"&&w1.test(p)&&(b=p,k1))try{let m=new URL(window.location.href),y=p.startsWith("//")?new URL(m.protocol+p):new URL(p),g=Qr(y.pathname,x);y.origin===m.origin&&g!=null?p=g+y.search+y.hash:T=!0}catch{}let w=$c(p,{relative:a}),f=I1(p,{replace:r,state:o,target:s,preventScrollReset:c,relative:a,viewTransition:d});function u(m){i&&i(m),m.defaultPrevented||f(m)}return k.createElement("a",tr({},h,{href:b||w,onClick:T||l?i:u,ref:t,target:s}))});var Ts;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ts||(Ts={}));var vs;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(vs||(vs={}));function I1(n,e){let{target:t,replace:i,state:a,preventScrollReset:l,relative:r,viewTransition:o}=e===void 0?{}:e,s=qu(),p=si(),c=ju(n,{relative:r});return k.useCallback(d=>{if(x1(d,t)){d.preventDefault();let h=i!==void 0?i:da(p)===da(c);s(n,{replace:h,state:a,preventScrollReset:l,relative:r,viewTransition:o})}},[p,s,c,i,a,t,n,l,r,o])}const L1=[{id:"of",title:"of - G10TINPOS\r",description:"G10TINPOS\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G10TINPOS

# Positive Lens
# Focal length f is positive, light from left propagating from medium with index 1 to lens
# of refractive index n.
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of f.
# graph for xi as function of xo over the range of xo to the right of f.


f = 10
# image focus: f
# object focus: -f

xo = np.arange(-100.001, 100+0.07, 0.07)
xi = 1/(1/f+1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-500, 200)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-50.001, -11+0.07, 0.07)
xxi = 1/(1/f+1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-55, -10)
plt.ylim(0, 100)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo =np.arange(-9.001, 50+0.07, 0.07)
xxxi = 1/(1/f+1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(-10, 50)
plt.ylim(-100, 50)

plt.xlabel('xxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G10TINPOS

% Positive Lens
% Focal length f is positive, light from left propagating from medium with index 1 to lens
% of refractive index n.
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of f.
% graph for xi as function of xo over the range of xo to the right of f.

function G10TINPOS;
f = 10;
% image focus: f
% object focus: -f

xo = (-100.001:0.07:100);
xi = 1./(1/f+1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -500 200]);
xlabel('xo');
legend('xi(xo)');

xxo = (-50.001:0.07:-11);
xxi = 1./(1/f+1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-55 -10 0 100]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo =(-9.001:0.07:50);
xxxi = 1./(1/f+1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([-10 50 -100 50]);
xlabel('xxo');
legend('xxxi(xxxo)');

`,cCode:"",defaultParams:{},displayName:"Positive Thin Lens - Image Position",tags:["lens","positive-lens","focal-length","thin-lens","image-position","chapter1","geometrical-optics","3d-visualization"],wikipediaLinks:[{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Converging lens",url:"https://en.wikipedia.org/wiki/Lens_(optics)#Types_of_simple_lenses"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Thin lens",url:"https://en.wikipedia.org/wiki/Thin_lens"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"of",title:"of - G12TINNEG\r",description:"G12TINNEG\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G12TINNEG

# Negative Lens
# Focal length f is negative, light from left propagating from medium with index 1 to lens
# of refractive index n.
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of f.
# graph for xi as function of xo over the range of xo to the right of f.
# graph for xi as function of xo over the range of xo to the right of f.


f = -10
# image focus: -f
# object focus: f

xo = np.arange(-100.001, 100+0.07, 0.07)
xi = 1/(1/f+1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-200, 300)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-50.001, 9+0.07, 0.07)
xxi = 1/(1/f+1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-60, 10)
plt.ylim(-20, 60)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo =np.arange(11.001, 50+0.07, 0.07)
xxxi = 1/(1/f+1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(10, 50)
plt.ylim(-150, 0)

plt.xlabel('xxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G12TINNEG

% Negative Lens
% Focal length f is negative, light from left propagating from medium with index 1 to lens
% of refractive index n.
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of f.
% graph for xi as function of xo over the range of xo to the right of f.
% graph for xi as function of xo over the range of xo to the right of f.

function G12TINNEG;
f = -10;
% image focus: -f
% object focus: f

xo = (-100.001:0.07:100);
xi = 1./(1/f+1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -200 300]);
xlabel('xo');
legend('xi(xo)');

xxo = (-50.001:0.07:9);
xxi = 1./(1/f+1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-60 10 -20 60]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo =(11.001:0.07:50);
xxxi = 1./(1/f+1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([10 50 -150 0]);
xlabel('xxo');
legend('xxxi(xxxo)');

`,cCode:"",defaultParams:{},displayName:"Negative Thin Lens - Image Position",tags:["lens","negative-lens","focal-length","thin-lens","image-position","chapter1","geometrical-optics","3d-visualization"],wikipediaLinks:[{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Diverging lens",url:"https://en.wikipedia.org/wiki/Lens_(optics)#Types_of_simple_lenses"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Thin lens",url:"https://en.wikipedia.org/wiki/Thin_lens"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G14TINFOC",title:"G14TINFOC - G14TINFOC\r",description:"G14TINFOC\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G14TINFOC
# Focal length 


# 1. Calculation of focal length of thin lens of refractive index n2 in medium with
# refractive index n1.

# R is positive for convex surface, negative for concave surface
r1 = -5;    # First surface
r2 = 5;     # Second surface

n2 = 1;     # Refractive index of lens n2
n1 = 1.5;   # Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  # f = 7.5

# 2. Graph of focal length of thin lens with index n2 depending on
# refractive index of medium n1.

# The radii of curvature are chosen above. The range of n1 is divided into
# lower and higher range because of singularity.

nn2 = 1.5;  # Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  # Lower range
nnn1 = (nn2+0.1:0.1:4);     # Upper range

ff = 1/((nn2-nn1)/r1+(nn1-nn2)/r2)
fff = 1/((nn2-nnn1)/r1+(nnn1-nn2)/r2)
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(nn1,ff)

plt.xlim(1, 1.4)
plt.ylim(-30, 0)

plt.xlabel('nn1')
plt.legend(['ff(nn1)'])
plt.subplot(1, 2, 2)

plt.plot(nnn1,fff)

plt.xlim(1, 4)
plt.ylim(0, 30)

plt.xlabel('nnn1')
plt.legend(['fff(nnn1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G14TINFOC
% Focal length 

function G14TINFOC;

% 1. Calculation of focal length of thin lens of refractive index n2 in medium with
% refractive index n1.

% R is positive for convex surface, negative for concave surface
r1 = -5;    % First surface
r2 = 5;     % Second surface

n2 = 1;     % Refractive index of lens n2
n1 = 1.5;   % Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  % f = 7.5

% 2. Graph of focal length of thin lens with index n2 depending on
% refractive index of medium n1.

% The radii of curvature are chosen above. The range of n1 is divided into
% lower and higher range because of singularity.

nn2 = 1.5;  % Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  % Lower range
nnn1 = (nn2+0.1:0.1:4);     % Upper range

ff = 1./((nn2-nn1)/r1+(nn1-nn2)/r2);
fff = 1./((nn2-nnn1)/r1+(nnn1-nn2)/r2);

figure(1);
subplot(1,2,1);
plot(nn1,ff);
axis([1 1.4 -30 0]);
xlabel('nn1');
legend('ff(nn1)');

subplot(1,2,2);
plot(nnn1,fff);
axis([1 4 0 30]);
xlabel('nnn1');
legend('fff(nnn1)');`,cCode:"",defaultParams:{},displayName:"Thin Lens Focal Length Calculator",tags:["lens","focal-length","refractive-index","thin-lens","curvature","chapter1","geometrical-optics","3d-visualization"],wikipediaLinks:[{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"},{title:"Thin lens",url:"https://en.wikipedia.org/wiki/Thin_lens"},{title:"Radius of curvature",url:"https://en.wikipedia.org/wiki/Radius_of_curvature"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G1FERMAT",title:"G1FERMAT - G1FERMAT\r",description:"G1FERMAT\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G1FERMAT
# Fermat's Principle
# Graph of total travel time
# t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
# velocity v1
# t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
# velocity v2
# there is a y value for minimum time
xq=20
xf=40
yf=40
y=np.arange(0, 40+1, 1)
# velocity
v1=1
v2=2.5
# v1 and v2 are at the Graph
# time in medium 1
t1=(1/v1)*np.sqrt((xq)**2+(y)**2)
# time in medium 2
t2=(1/v2)*np.sqrt((xf-xq)**2+(yf-y)**2)
T=t1+t2
fig = plt.figure(1)

plt.plot(y,T)

plt.xlim(0, 40)
plt.ylim(35, 55)
;                  # PLOTS LIMITS                    
xlabel('y','Fontsize',12)
plt.legend(['T(y)'])
title('Figure 1','FontSize',12)
# Changing the paramaters v1 and v2 changes the minimum time for total travel



# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G1FERMAT
% Fermat's Principle
% Graph of total travel time
% t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
% velocity v1
% t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
% velocity v2
% there is a y value for minimum time
xq=20;
xf=40;
yf=40;
y=(0:1:40);
% velocity
v1=1;
v2=2.5;
% v1 and v2 are at the Graph
% time in medium 1
t1=(1/v1)*sqrt((xq)^2+(y).^2);
% time in medium 2
t2=(1/v2)*sqrt((xf-xq)^2+(yf-y).^2);
T=t1+t2;

figure(1);
plot(y,T);
axis([0 40 35 55]);                  % PLOTS LIMITS                    
xlabel('y','Fontsize',12);
legend('T(y)');
title('Figure 1','FontSize',12);

% Changing the paramaters v1 and v2 changes the minimum time for total travel


`,cCode:"",defaultParams:{},displayName:"Fermat's Principle - Travel Time",tags:["fermat-principle","optical-path","travel-time","refraction","chapter1","geometrical-optics"],wikipediaLinks:[{title:"Fermat's principle",url:"https://en.wikipedia.org/wiki/Fermat%27s_principle"},{title:"Optical path length",url:"https://en.wikipedia.org/wiki/Optical_path_length"},{title:"Refraction",url:"https://en.wikipedia.org/wiki/Refraction"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G2FERMAT",title:"G2FERMAT - G2FERMAT\r",description:"G2FERMAT\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# G2FERMAT

# FERMAT's PRINCIPLE

# t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
# tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
# ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
# There is a q and p value for minimum time


N = 20
i = (0:1:N)
k = (0:1:N)
q = i
p = k
xq = 20
xp = 40
xf = 60
yf = 60
v1 = 14
v2 = 21
v3 = 52
t = np.sqrt((xq)**2+(q)**2)/v1
for r in range(len(q)):
    for c in range(len(p)):
        tt(r,c) = np.sqrt((xp-xq)**2+(p(c)-q(r))**2)/v2
ttt = np.sqrt((xf-xq)**2+(yf-p)**2)/v3
for r in range(len(q)):
    for c in range(len(p)):
        T(c,r) = tt(r)+tt(r,c) + ttt(c)
M =T
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.contour(M)
plt.subplot(1, 2, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G2FERMAT

% FERMAT's PRINCIPLE

% t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
% tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
% ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
% There is a q and p value for minimum time

function G2FERMAT;
N = 20;
i = (0:1:N);
k = (0:1:N);
q = i;
p = k;
xq = 20;
xp = 40;
xf = 60;
yf = 60;
v1 = 14;
v2 = 21;
v3 = 52;

t = sqrt((xq)^2+(q).^2)/v1;
for r=1:length(q);
    for c=1:length(p);
        tt(r,c) = sqrt((xp-xq)^2+(p(c)-q(r)).^2)/v2;
    end;
end;
ttt = sqrt((xf-xq)^2+(yf-p).^2)/v3;

for r=1:length(q);
    for c=1:length(p);
        T(c,r) = tt(r)+tt(r,c) + ttt(c);
    end;
end;
M =T;

figure(1);
subplot(1,2,1);
contour(M);
subplot(1,2,2);
mesh(M);



`,cCode:"",defaultParams:{},displayName:"Fermat's Principle - Multi-Medium Path",tags:["fermat-principle","optical-path","multi-medium","3d-visualization","chapter1","geometrical-optics","contour-plot"],wikipediaLinks:[{title:"Fermat's principle",url:"https://en.wikipedia.org/wiki/Fermat%27s_principle"},{title:"Optical path length",url:"https://en.wikipedia.org/wiki/Optical_path_length"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G30MIRCV",title:"G30MIRCV - G30MIRCV\r",description:"G30MIRCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G30MIRCV

# Concave mirror.

# Radius of curvature is neg., xo is on left, is negative.
# To get around the singularity at -xo = f one chooses the increments such that the
# value for the singularity does not appear.


r = -50
xo = -60
xi = 1/(1/(r/2) - 1/xo) # xi = -42.857
m = -xi/xo              # m = -0.714

# Graph
xxo = np.arange(-100, -0.1+0.9, 0.9)
xxi = 1/(1/(r/2)-1/xxo)
fig = plt.figure(1)

plt.plot(xxo,xxi)

plt.xlim(-100, 0)
plt.ylim(-4000, 2000)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G30MIRCV

% Concave mirror.

% Radius of curvature is neg., xo is on left, is negative.
% To get around the singularity at -xo = f one chooses the increments such that the
% value for the singularity does not appear.

function G30MIRCV;
r = -50;
xo = -60;
xi = 1/(1/(r/2) - 1/xo) % xi = -42.857
m = -xi/xo              % m = -0.714

% Graph
xxo = (-100:0.9:-0.1);
xxi = 1./(1/(r/2)-1./xxo);

figure(1);
plot(xxo,xxi);
axis([-100 0 -4000 2000]);
xlabel('xxo');
legend('xxi(xxo)');
`,cCode:"",defaultParams:{},displayName:"Concave Mirror - Image Formation",tags:["mirror","concave-mirror","reflection","image-formation","chapter1","geometrical-optics"],wikipediaLinks:[{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Curved mirror",url:"https://en.wikipedia.org/wiki/Curved_mirror"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Image formation",url:"https://en.wikipedia.org/wiki/Image_formation"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G31MIRCX",title:"G31MIRCX - G31MIRCV\r",description:"G31MIRCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G31MIRCV

# Convex mirror.

# Radius of curvature is positive, xo is on left, is negative.
# No singularity. Only virtual images.


r = 50
xo = -10
xi = 1/(1/(r/2) - 1/xo) # xi = 7.143

# Graph
xxo = np.arange(-100, -0.1+0.9, 0.9)
xxi = 1/(1/(r/2)-1/xxo)
fig = plt.figure(1)

plt.plot(xxo,xxi)

plt.xlim(-100, 0)
plt.ylim(0, 20)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G31MIRCV

% Convex mirror.

% Radius of curvature is positive, xo is on left, is negative.
% No singularity. Only virtual images.

function G31MIRCX;
r = 50;
xo = -10;
xi = 1/(1/(r/2) - 1/xo) % xi = 7.143

% Graph
xxo = (-100:0.9:-0.1);
xxi = 1./(1/(r/2)-1./xxo);

figure(1);
plot(xxo,xxi);
axis([-100 0 0 20]);
xlabel('xxo');
legend('xxi(xxo)');
`,cCode:"",defaultParams:{},displayName:"Convex Mirror - Image Formation",tags:["mirror","convex-mirror","reflection","image-formation","chapter1","geometrical-optics"],wikipediaLinks:[{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Curved mirror",url:"https://en.wikipedia.org/wiki/Curved_mirror"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Image formation",url:"https://en.wikipedia.org/wiki/Image_formation"},{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G32RESGG",title:"G32RESGG - G32RESGG\r",description:"G32RESGG\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G32RESGG
# Calculation of Resonator using g1, g2, and d

r1 = 1
r2 = 1
d = 2
g1 = 1 - d/r1
g2 = 1 - d/r2
Lamda1 = -1 + 2*g1*g2+2*np.sqrt(-g1*g2+(g1**2)*(g2**2))
Lamda2 = -1 + 2*g1*g2-2*np.sqrt(-g1*g2+(g1**2)*(g2**2))
# Lamda1 = 1
# Lamda2 = 1


# we set the product g1g2 = x and plot it over the range from -1 to 2
x = np.arange(-1, 2+0.1, 0.1)
y = np.abs((2*x-1)+np.sqrt((2*x-1)**2-1))-1
yy = np.abs((2*x-1)-np.sqrt((2*x-1)**2-1))-1
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(x,y)

plt.xlim(-1, 2)
plt.ylim(-5, 5)

plt.xlabel('x')
plt.legend(['y(x)'])
plt.subplot(1, 2, 2)

plt.plot(x,yy)

plt.xlim(-1, 2)
plt.ylim(-5, 5)

plt.xlabel('x')
plt.legend(['yy(x)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G32RESGG
% Calculation of Resonator using g1, g2, and d
function G32RESGG;

r1 = 1;
r2 = 1;
d = 2;
g1 = 1 - d/r1;
g2 = 1 - d/r2;

Lamda1 = -1 + 2*g1*g2+2*sqrt(-g1*g2+(g1^2)*(g2^2))
Lamda2 = -1 + 2*g1*g2-2*sqrt(-g1*g2+(g1^2)*(g2^2))
% Lamda1 = 1
% Lamda2 = 1


% we set the product g1g2 = x and plot it over the range from -1 to 2
x = (-1:0.1:2);
y = abs((2*x-1)+sqrt((2*x-1).^2-1))-1;
yy = abs((2*x-1)-sqrt((2*x-1).^2-1))-1;

figure(1);
subplot(1,2,1);
plot(x,y);
axis([-1 2 -5 5]);
xlabel('x');
legend('y(x)');

subplot(1,2,2);
plot(x,yy);
axis([-1 2 -5 5]);
xlabel('x');
legend('yy(x)');
`,cCode:"",defaultParams:{},displayName:"G32RESGG",tags:["chapter1","geometrical-optics"],wikipediaLinks:[{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"G4PRISM",title:"G4PRISM - G4PRISM\r",description:"G4PRISM\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G4PRISM

# Graph of the angle of deviation for refraction on a prism
# depending on the angle of incidence

# ?1 is the angle of incidence with respect to the normal
# ?1 is the angle of deviation
# n is the refractive index and A is the apex angle.


Theta1 = np.arange(0, 1+0.001, 0.001)
n = 2
A = ((2*np.pi)/360)*30
Delta = Theta1+ asin(np.sqrt(n**2-(np.sin(Theta1))**2)*np.sin(A)-np.sin(Theta1)*np.cos(A))-A
fig = plt.figure(1)

plt.plot(Theta1,Delta)

plt.xlim(0, 1)
plt.ylim(0.4, 1.2)

plt.xlabel('	heta1')
plt.legend(['delta(	heta1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G4PRISM

% Graph of the angle of deviation for refraction on a prism
% depending on the angle of incidence

% ?1 is the angle of incidence with respect to the normal
% ?1 is the angle of deviation
% n is the refractive index and A is the apex angle.

function G4PRISM;
Theta1 = (0:0.001:1);
n = 2;
A = ((2*pi)/360)*30;
Delta = Theta1+ asin(sqrt(n^2-(sin(Theta1)).^2)*sin(A)-sin(Theta1)*cos(A))-A;

figure(1);
plot(Theta1,Delta);
axis([0 1 0.4 1.2]);
xlabel('	heta1');
legend('delta(	heta1)');`,cCode:"",defaultParams:{},displayName:"G4PRISM",tags:["chapter1","geometrical-optics","prism","refraction"],wikipediaLinks:[{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Prism (optics)",url:"https://en.wikipedia.org/wiki/Prism_(optics)"},{title:"Refraction",url:"https://en.wikipedia.org/wiki/Refraction"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"of",title:"of - G6SINGCX\r",description:"G6SINGCX\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G6SINGCX

# Convex single refracting surface
# r is positive, light from left propagating from medium with n1 to medium with n2
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of xof.
# graph for xi as function of xo over the range of xo to the right of xof.


r = 10
n1 = 1
n2 = 1.5
# image focus
xif = n2*(r/(n2-n1))    # xif = 30;:
# object focus
xof = n1*(r/(n1-n2))    # xof = -20
xo = np.arange(-100.001, 100+0.07, 0.07)
xi = n2/(((n2-n1)/r)+n1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-1500, 1500)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-100.001, -22+0.07, 0.07)
xxi = n2/(((n2-n1)/r)+n1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-110, -20)
plt.ylim(0, 300)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo = np.arange(-15.001, 50+0.07, 0.07)
xxxi = n2/(((n2-n1)/r)+n1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(-20, 50)
plt.ylim(-100, 50)

plt.xlabel('xxxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G6SINGCX

% Convex single refracting surface
% r is positive, light from left propagating from medium with n1 to medium with n2
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of xof.
% graph for xi as function of xo over the range of xo to the right of xof.

function G6SINGCX;
r = 10;
n1 = 1;
n2 = 1.5;
% image focus
xif = n2*(r/(n2-n1))    % xif = 30;
% object focus
xof = n1*(r/(n1-n2))    % xof = -20;

xo = (-100.001:0.07:100);
xi = n2./(((n2-n1)/r)+n1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -1500 1500]);
xlabel('xo');
legend('xi(xo)');

xxo = (-100.001:0.07:-22);
xxi = n2./(((n2-n1)/r)+n1./xxo);


subplot(1,3,2);
plot(xxo,xxi);
axis([-110 -20 0 300]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo = (-15.001:0.07:50);
xxxi = n2./(((n2-n1)/r)+n1./xxxo);


subplot(1,3,3);
plot(xxxo,xxxi);
axis([-20 50 -100 50]);
xlabel('xxxo');
legend('xxxi(xxxo)');`,cCode:"",defaultParams:{},displayName:"G6SINGCX",tags:["chapter1","geometrical-optics","3d-visualization"],wikipediaLinks:[{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]},{id:"of",title:"of - G8SINGCV\r",description:"G8SINGCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G8SINGCV

# Convex single refracting surface
# r is negative, light from left propagating from medium with n1 to medium with n2
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of xof.
# graph for xi as function of xo over the range of xo to the right of xof.


r = -10
n1 = 1
n2 = 1.5
# image focus
xif = n2*(r/(n2-n1))    # xif = -30;:
# object focus
xof = n1*(r/(n1-n2))    # xof = 20
xo = np.arange(-100.001, 100+0.07, 0.07)
xi = n2/(((n2-n1)/r)+n1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-2500, 1000)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-100.001, 15+0.07, 0.07)
xxi = n2/(((n2-n1)/r)+n1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-120, 20)
plt.ylim(-50, 100)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo = np.arange(22.001, 50+0.07, 0.07)
xxxi = n2/(((n2-n1)/r)+n1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(20, 50)
plt.ylim(-400, 0)

plt.xlabel('xxxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G8SINGCV

% Convex single refracting surface
% r is negative, light from left propagating from medium with n1 to medium with n2
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of xof.
% graph for xi as function of xo over the range of xo to the right of xof.

function G8SINGCV;
r = -10;
n1 = 1;
n2 = 1.5;
% image focus
xif = n2*(r/(n2-n1))    % xif = -30;
% object focus
xof = n1*(r/(n1-n2))    % xof = 20;

xo = (-100.001:0.07:100);
xi = n2./(((n2-n1)/r)+n1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -2500 1000]);
xlabel('xo');
legend('xi(xo)');

xxo = (-100.001:0.07:15);
xxi = n2./(((n2-n1)/r)+n1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-120 20 -50 100]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo = (22.001:0.07:50);
xxxi = n2./(((n2-n1)/r)+n1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([20 50 -400 0]);
xlabel('xxxo');
legend('xxxi(xxxo)');`,cCode:"",defaultParams:{},displayName:"G8SINGCV",tags:["chapter1","geometrical-optics","3d-visualization"],wikipediaLinks:[{title:"Geometrical optics",url:"https://en.wikipedia.org/wiki/Geometrical_optics"},{title:"Ray tracing",url:"https://en.wikipedia.org/wiki/Ray_tracing_(physics)"}]}],O1=[{id:"W10BES3DS",title:"W10BES3DS - W10BES3DS\r",description:"W10BES3DS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# W10BES3DS
# 1. Rayleigh distance corresponding to "resolution" is determined for two round
# apertures at distance d between them.
# 2. 3D graph of pattern of two round apertures at distance d.

# Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
# distance from aperture to screen is X


# 1. Determination of Rayleigh distance.
Lamda = 0.0005
a = 0.05
d = 24.5
X = 4000
R = np.arange(0, 50+0.1, 0.1)
g1R = (besselj(1,(2*np.pi*a*(R/(X*Lamda))))/(2*np.pi*a*(R/(X*Lamda))))**2
gg1R = (besselj(1,(2*np.pi*a*((R-d)/(X*Lamda))))/(2*np.pi*a*((R-d)/(X*Lamda))))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(R,g1R,R,gg1R)

plt.xlim(0, 50)
plt.ylim(0, 0.25)

plt.xlabel('R')
plt.legend(['g1(R)', 'gg1(R)'])
# 2. 3D Graph Distance d

N = 60
X = 4000
M = zeros(N,N)
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i
        yj = (-40) + 2.0001*j
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj)
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
axis([0 N 0 N 0 0.3])
plt.legend(['M'])



Out = np.sqrt(x**2+y**2)
Out = (besselj(1,(2*np.pi*a*(RR(x,y)/(X*Lamda))))/(2*np.pi*a*(RR(x,y)/(X*Lamda))))**2
Out = (besselj(1,(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))/(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W10BES3DS
% 1. Rayleigh distance corresponding to "resolution" is determined for two round
% apertures at distance d between them.
% 2. 3D graph of pattern of two round apertures at distance d.

% Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
% distance from aperture to screen is X

function W10BES3DS;
global a d X Lamda;
% 1. Determination of Rayleigh distance.
Lamda = 0.0005;
a = 0.05;
d = 24.5;
X = 4000;
R = (0:0.1:50);
g1R = (besselj(1,(2*pi*a*(R/(X*Lamda))))./(2*pi*a*(R/(X*Lamda)))).^2;
gg1R = (besselj(1,(2*pi*a*((R-d)/(X*Lamda))))./(2*pi*a*((R-d)/(X*Lamda)))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1R,R,gg1R);
axis([0 50 0 0.25]);
xlabel('R');
legend('g1(R)','gg1(R)');

% 2. 3D Graph Distance d

N = 60;
X = 4000;
M = zeros(N,N);
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i;
        yj = (-40) + 2.0001*j;
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj);
    end;
end;

subplot(2,1,2);
mesh(M);
axis([0 N 0 N 0 0.3]);
legend('M');


function Out=RR(x,y)
Out = sqrt(x.^2+y.^2);

function Out=g2(x,y)
global a X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y)/(X*Lamda))))./(2*pi*a*(RR(x,y)/(X*Lamda)))).^2;

function Out=gg2(x,y)
global a d X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y-d)/(X*Lamda))))./(2*pi*a*(RR(x,y-d)/(X*Lamda)))).^2;
`,cCode:"",defaultParams:{},displayName:"W10BES3DS",tags:["chapter10","wavefront-analysis","aperture","wavelength","pattern","3d-visualization"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W11TWOROJ1Sl",title:"W11TWOROJ1Sl - W11TWOROJ1S\r",description:"W11TWOROJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W11TWOROJ1S

# Imaging: Object of "Two round apertures", at Rayleigh distance
# and round lens, Y is used for R'


# Object
# For choice of f# f/10=f/2a
f = 500
a = 25
Lamda = 0.0005
k = (2*np.pi)/Lamda
Y = np.arange(-0.01, 0.02+0.0001, 0.0001)
# limits of integration
b1 = -0.00025
b2 = 0.00025
b3 = 0.00585
b4 = 0.00635
Io1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Io2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)
Io = Io1 + Io2
# Tol = 0.1
# Image


for ind in range(len(Y)):
    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Y,Io)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.subplot(1, 2, 2)

plt.plot(Y,Iim)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 0.4)

Out = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W11TWOROJ1S

% Imaging: Object of "Two round apertures", at Rayleigh distance
% and round lens, Y is used for R'

function W11TWOROJ1Sl;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.0001:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;



Io1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Io2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Io = Io1 + Io2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind));    
end;

figure(1);
subplot(1,2,1);
plot(Y,Io);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 0.4]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2;

`,cCode:"",defaultParams:{},displayName:"W11TWOROJ1S",tags:["chapter10","wavefront-analysis","lens","aperture"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W12TWOROCOHS",title:"W12TWOROCOHS - W12TWOROCOHS\r",description:"W12TWOROCOHS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W12TWOROCOHS

# Imaging with coherent light:
# Two round apertures at Rayleigh distance, and round lens(T is R')


# Object
# For choice of f# f/10=f/2a
f = 500
a = 25
Lamda = 0.0005
k = (2*np.pi)/Lamda
Y = np.arange(-0.01, 0.02+0.00011, 0.00011)
# limits of integration
b1 = -0.00025
b2 = 0.00025
b3 = 0.00585
b4 = 0.00635
# Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)
Iob = Iob1 + Iob2
# Tol = 0.1
# Image


for ind in range(len(Y)):
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind)))**2
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Y,Iob)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.subplot(1, 2, 2)

plt.plot(Y,Iim)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 1)

Out = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W12TWOROCOHS

% Imaging with coherent light:
% Two round apertures at Rayleigh distance, and round lens(T is R')

function W12TWOROCOHS;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.00011:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;


% Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Iob = Iob1 + Iob2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))).^2;    
end;

figure(1);
subplot(1,2,1);
plot(Y,Iob);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 1]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f)));

`,cCode:"",defaultParams:{},displayName:"W12TWOROCOHS",tags:["chapter10","wavefront-analysis","lens","aperture","amplitude"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"function",title:"function - W13TRANCOHSIS\r",description:"W13TRANCOHSIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W13TRANCOHSIS
# Coherent light.
# Fourier transformation of a periodic structure using FT of sinx/x as
# transfer function

# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# The transfer function is FT of
# s (and not s squared)

# FT of s is transfer function Tau
Si = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))
Si(1) = 0; # Error correction
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.2, 0.1)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and transform function is the modified FT:Phi
Phi = Tau*Omega
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.5)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# FT(inverse) of the modified FT is the amplitude of the image yy
yy = ifft(Phi/np.sqrt(N))
N2 = length(Phi)
# The image is the absolute value of yy squared
plt.subplot(3, 1, 3)

plt.plot(i,(yy)
**2)
plt.xlim(0, 300)
plt.ylim(0, 0.005)

plt.xlabel('i')
plt.legend(['(yy)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W13TRANCOHSIS
% Coherent light.
% Fourier transformation of a periodic structure using FT of sinx/x as
% transfer function
function W13TRANCOHSIS;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.2 0.1]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(phi)/N');

% FT(inverse) of the modified FT is the amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
`,cCode:"",defaultParams:{},displayName:"W13TRANCOHSIS",tags:["chapter10","wavefront-analysis","amplitude","fourier-transform","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"function",title:"function - W14TRANJ1S\r",description:"W14TRANJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W14TRANJ1S
# Coherent light.
# Fourier transformation of a periodic structure using FT of Bessel as
# transfer function

# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# The transfer function is FT of
# s (and not s squared)

# FT of s is transfer function Tau
Si = 4*(besselj(1,(np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))
Si(1) = 0; # Error correction
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.1, 0.05)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and transform function is the modified FT:Phi
Phi = Tau*Omega
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.5)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/np.sqrt(N))
N2 = length(Phi)
# The image is the absolute value of yy squared
plt.subplot(3, 1, 3)

plt.plot(i,(yy)
**2)
plt.xlim(0, 300)
plt.ylim(0, 0.005)

plt.xlabel('i')
plt.legend(['(yy)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W14TRANJ1S
% Coherent light.
% Fourier transformation of a periodic structure using FT of Bessel as
% transfer function
function W14TRANJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(besselj(1,(pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.1 0.05]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(phi)/N');

% FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
`,cCode:"",defaultParams:{},displayName:"W14TRANJ1S",tags:["chapter10","wavefront-analysis","amplitude","fourier-transform","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"fow",title:"fow - W15HOGRIBLOHIS\r",description:"W15HOGRIBLOHIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W15HOGRIBLOHIS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function fow low frequencies.
# The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(2, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Blocking function y

# Low frequencies may pass
a = 25
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0)
plt.subplot(2, 2, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['	au'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
plt.subplot(2, 2, 4)

plt.plot(i,real(Phi)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(phi)/sqrt(N)'])
# The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,real(y)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1)

plt.xlabel('i')
plt.legend(['real(y)'])
# For comparison: FT(inverse) of the unmodified FT
plt.title('FT (inverse) of the modified FT')
x = ifft(Omega)
N2 = length(Omega)
plt.subplot(1, 2, 2)

plt.plot(i,real(x)
)
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(x)'])
plt.title('FT (inverse) of the unmodified FT')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W15HOGRIBLOHIS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function fow low frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W15HOGRIBLOHIS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% Blocking function y

% Low frequencies may pass
a = 25;
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('	au');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -1 2]);
xlabel('i');
legend('real(x)');
title('FT (inverse) of the unmodified FT');


`,cCode:"",defaultParams:{},displayName:"W15HOGRIBLOHIS",tags:["chapter10","wavefront-analysis","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"for",title:"for - W16HOGRIBLOLOS\r",description:"W16HOGRIBLOLOS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W16HOGRIBLOLOS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function for high frequencies.
# The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(2, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Blocking function y


a = 15
n = 1
Tau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0)
plt.subplot(2, 2, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['	au'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
plt.subplot(2, 2, 4)

plt.plot(i,real(Phi)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(phi)/sqrt(N)'])
# The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,real(y)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1)

plt.xlabel('i')
plt.legend(['Real(y)'])
# For comparison: FT(inverse) of the unmodified FT
plt.title('FT (inverse) of the modified FT')
x = ifft(Omega)
N2 = length(Omega)
plt.subplot(1, 2, 2)

plt.plot(i,real(x)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['Real(x)'])
plt.title('FT (inverse) of the unmodified FT')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W16HOGRIBLOLOS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function for high frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W16HOGRIBLOLOS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(omega)/sqrt(N)');
% Blocking function y


a = 15;
n = 1;
Tau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('	au');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('Real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -0.5 1.5]);
xlabel('i');
legend('Real(x)');
title('FT (inverse) of the unmodified FT');


`,cCode:"",defaultParams:{},displayName:"W16HOGRIBLOLOS",tags:["chapter10","wavefront-analysis","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"has",title:"has - W17HOGRPERS\r",description:"W17HOGRPERS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W17HOGRPERS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function. A blocking function has been chosen for blocking certain
# frequencies such that there are twice as many peaks in the image.

# The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])
# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 1, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Blocking function y

q=5
a=5
Tau = 0
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0)
plt.subplot(3, 1, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['	au'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
# The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,yy)

plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['yy'])

plt.title('Product: FT (inverse) of object and Blocking Function')
# For comparison: The original object
plt.subplot(1, 2, 2)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(-0.5, 2)

plt.xlabel('i')
plt.legend(['yi'])
plt.title('The Original Object')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W17HOGRPERS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function. A blocking function has been chosen for blocking certain
% frequencies such that there are twice as many peaks in the image.

% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W17HOGRPERS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(3,1,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');
% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,1,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(omega)/sqrt(N)');
% Blocking function y

q=5;
a=5;
Tau = 0;
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0);
end;
subplot(3,1,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('	au');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;


% The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,yy);
axis([0 150 -1 2]);
xlabel('i');
legend('yy');

title('Product: FT (inverse) of object and Blocking Function');
% For comparison: The original object
subplot(1,2,2);
plot(i,yi);
axis([0 150 -0.5 2]);
xlabel('i');
legend('yi');
title('The Original Object');


`,cCode:"",defaultParams:{},displayName:"W17HOGRPERS",tags:["chapter10","wavefront-analysis","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W18HOSTEPS",title:"W18HOSTEPS - W18HOSTEPS\r",description:"W18HOSTEPS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W18HOSTEPS

# The object y has a complicated shape. Its FT is the hologram c. It may be
# produced in the focal plane of a lens, using parallel light.

# The illumination of the hologram with parallel light will reproduce the object,
# that is the FT(inverse) of the FT, called here cc.

# We want to study the reproduced object when the information in the hologram
# is only partly used, that is we multiply cc with a filter f.
# We show separately f and the FT of the product of f and cc.

# The width of the filter f may be changed by using various values for "a" and "b",
# corresponding to changing the size of the hologram.

# The Object
A = [33 80 80 50 20 99 160 200]
i = np.arange(0, 255+1, 1)
yi = 0
for n in range(1, 3+1):yi = yi +(-(logical(A(n)-i)>=0))
for n in range(4, 8+1):yi = yi +((logical(A(n)-i)>=0)*((-1)**n))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The hologram
c = fft(yi)
N = length(c)
k= (0:1:N-1)
j= (0:1:N-1)
plt.subplot(3, 2, 2)

plt.plot(k,real(c)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['real(c)/sqrt(N)'])
# The FT of the hologram
# The FT of the FT(hologram)

cc = c
yy = ifft(cc)
N = length(cc)
j = (0:1:N-1)
plt.subplot(3, 2, 3)

plt.plot(j, real(yy)
)
plt.xlim(0, 255)
plt.ylim(-4, 2)

plt.xlabel('j')
plt.legend(['real(yy)'])
# The filter
a= 60
b= 60
f = (logical(a-j)>=0) + (logical(j-255+b)>=0)
plt.subplot(3, 2, 4)

plt.plot(j,f)

plt.xlim(0, 300)
plt.ylim(0, 2)

plt.xlabel('j')
plt.legend(['f'])

# The product: hologram x filter
plt.subplot(3, 1, 3)

plt.plot(k,f*real(c)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['f*real(c)/sqrt(N)'])
# The FT (inverse) of the changed hologram (hologram x filter),
# similar to the object
ccc = c*f
x = ifft(ccc)
N = length(ccc)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(k, real(x)
)
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.title('The FT (inverse) of the changed hologram (hologram x filter)')
plt.subplot(1, 2, 2)

# For comparison: The object.
plt.plot(i, yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.title('The Object')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W18HOSTEPS

% The object y has a complicated shape. Its FT is the hologram c. It may be
% produced in the focal plane of a lens, using parallel light.

% The illumination of the hologram with parallel light will reproduce the object,
% that is the FT(inverse) of the FT, called here cc.

% We want to study the reproduced object when the information in the hologram
% is only partly used, that is we multiply cc with a filter f.
% We show separately f and the FT of the product of f and cc.

% The width of the filter f may be changed by using various values for "a" and "b",
% corresponding to changing the size of the hologram.
function W18HOSTEPS;
% The Object
A = [33 80 80 50 20 99 160 200];
i = (0:1:255);
yi = 0;
for n=1:3
    yi = yi +(-(logical(A(n)-i)>=0));
end;
for n=4:8
    yi = yi +((logical(A(n)-i)>=0)*((-1)^n));
end;
figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The hologram
c = fft(yi);
N = length(c);
k= (0:1:N-1);
j= (0:1:N-1);

subplot(3,2,2);
plot(k,real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('real(c)/sqrt(N)');

% The FT of the hologram
% The FT of the FT(hologram)

cc = c;
yy = ifft(cc);
N = length(cc);
j = (0:1:N-1);

subplot(3,2,3);
plot(j, real(yy));
axis([0 255 -4 2]);
xlabel('j');
legend('real(yy)');

% The filter
a= 60;
b= 60;
f = (logical(a-j)>=0) + (logical(j-255+b)>=0);

subplot(3,2,4);
plot(j,f);
axis([0 300 0 2]);
xlabel('j');
legend('f');

% The product: hologram x filter
subplot(3,1,3);
plot(k,f.*real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('f*real(c)/sqrt(N)');

% The FT (inverse) of the changed hologram (hologram x filter),
% similar to the object
ccc = c.*f;
x = ifft(ccc);
N = length(ccc);

figure(2);

subplot(1,2,1);
plot(k, real(x));
axis([0 300 -4 2]);
xlabel('k');
title('The FT (inverse) of the changed hologram (hologram x filter)');

subplot(1,2,2);
% For comparison: The object.
plot(i, yi);
axis([0 300 -2 2]);
xlabel('i');
title('The Object');
`,cCode:"",defaultParams:{},displayName:"W18HOSTEPS",tags:["chapter10","wavefront-analysis","lens","focal-length","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W1FTSERIS",title:"W1FTSERIS - W1FTSERIS\r",description:"W1FTSERIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W1FTSERIS
# Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
# For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
# For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
# For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
# If N is large, we see a perfect step function.
# For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
# are not round and there is "overshooting". For large N it disappears.

x = np.arange(-1, 1.9+0.01, 0.01)
n = np.arange(0, 200+1, 1)
N = 100
Lamda = 1
# For larger and larger N one can see how more and more
# waves with shorter and shorter wavelength are used to build the step
# function.

g0 = (4*np.sin(np.pi*x*(1/Lamda)))/np.pi
g1 = (4*np.sin(np.pi*x*((2*1+1)/Lamda)))/((2*1+1)*np.pi)
g2 = (4*np.sin(np.pi*x*((2*2+1)/Lamda)))/((2*2+1)*np.pi)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(x,g0,x,g1,x,g2)

plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g0(x)', 'g1(x)', 'g2(x)'])
plt.subplot(2, 2, 2)

plt.plot(x,g0+g1+g2)

plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g0(x)+g1(x)+g2(x)'])
plt.subplot(2, 1, 2)

plt.plot(x,g(x)
)
plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g(x)'])
Out = (2*n+1)/(2*Lamda)
sum = 0
for n=0:N
    sum = sum + (4*np.sin(2*np.pi*x*f(n)))/((2*n+1)*np.pi)
Out = sum
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W1FTSERIS
% Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
% For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
% For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
% For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
% If N is large, we see a perfect step function.
% For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
% are not round and there is "overshooting". For large N it disappears.
function W1FTSERIS;
global N Lamda;
x = (-1:0.01:1.9);
n = (0:1:200);
N = 100;
Lamda = 1;


% For larger and larger N one can see how more and more
% waves with shorter and shorter wavelength are used to build the step
% function.

g0 = (4*sin(pi*x*(1/Lamda)))/pi;
g1 = (4*sin(pi*x*((2*1+1)/Lamda)))/((2*1+1)*pi);
g2 = (4*sin(pi*x*((2*2+1)/Lamda)))/((2*2+1)*pi);

figure(1);
subplot(2,2,1);
plot(x,g0,x,g1,x,g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)','g1(x)','g2(x)');

subplot(2,2,2);
plot(x,g0+g1+g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)+g1(x)+g2(x)');

subplot(2,1,2);
plot(x,g(x));
axis([-1 2 -2 2]);
xlabel('x');
legend('g(x)');




function Out=f(n)
global Lamda;
Out = (2*n+1)/(2*Lamda);

function Out=g(x)
global N;
sum = 0;
for n=0:N
    sum = sum + (4*sin(2*pi*x*f(n)))/((2*n+1)*pi);    
end;
Out = sum;
`,cCode:"",defaultParams:{},displayName:"W1FTSERIS",tags:["chapter10","wavefront-analysis","wavelength","amplitude","fourier-transform"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W2FTCFTS",title:"W2FTCFTS - W2FTCFTS\r",description:"W2FTCFTS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W2FTCFTS
# Example of real fft and complex cfft on a real object function.

# 1. The real FT fft
# The Object
i = np.arange(0, 255+1, 1)
A = [33 80 80 50 20 99 160 200]
yi = y(i)
fig = plt.figure(1)

plt.subplot(3, 3, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The real Fourier Transformation
c = fft(yi)
N2 = length(c)
j = (0:1:N2-1)
plt.subplot(3, 3, 2)

plt.plot(j,real(c)
/np.sqrt(N2))
plt.xlim(0, 150)
plt.ylim(-5, 5)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N2)'])
# The inverse fourier transformation
x = ifft(c)
Nx = length(x)
k = (0:1:Nx-1)
plt.subplot(3, 3, 3)

plt.plot(k,x)

plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.legend(['x'])

# We can not use x = fft(c) we get
# the "Error Message"
# c must be real

# 2. The complex Fourier Transformation
# The Object
i = np.arange(0, 255+1, 1)
A = [33 80 80 50 20 99 160 200]
yi = y(i)
plt.subplot(3, 3, 4)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The complex Fourier Transformation
cc = fft(yi)
Ncc = length(cc)
k = (0:1:Ncc-1)
plt.subplot(3, 3, 5)

plt.plot(k,real(cc)
/np.sqrt(Ncc))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['real(cc)/sqrt(Ncc)'])
# The inverse Fourier Transformation
xx = ifft(cc)
Nxx = length(xx)
k = (0:1:Nxx-1)
plt.subplot(3, 3, 6)

plt.plot(k,real(xx)
)
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.legend(['real(xx)'])
# 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/np.sqrt(Ncc))
Nxxx = length(xxx)
f = (0:1:Nxxx - 1)
plt.subplot(3, 3, 8)

plt.plot(f,real(xxx)
/np.sqrt(Nxxx))
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('f')
plt.legend(['real(xxx)/sqrt(Nxxx)'])
for k in range(len(i)):
    
    sum1 = 0
    for n in range(1, 3+1):sum1 = sum1 - (logical(A(n)-i(k))>=0)
    sum2 = 0
    for n in range(4, 8+1):sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)**n)
    output(k) = sum1+sum2
Out = output
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W2FTCFTS
% Example of real fft and complex cfft on a real object function.
function W2FTCFTS;
global A;
% 1. The real FT fft
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

figure(1);
subplot(3,3,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The real Fourier Transformation
c = fft(yi);
N2 = length(c);
j = (0:1:N2-1);

subplot(3,3,2);
plot(j,real(c)/sqrt(N2));
axis([0 150 -5 5]);
xlabel('j');
legend('real(c)/sqrt(N2)');

% The inverse fourier transformation
x = ifft(c);
Nx = length(x);
k = (0:1:Nx-1);

subplot(3,3,3);
plot(k,x);
axis([0 300 -4 2]);
xlabel('k');
legend('x');

% We can not use x = fft(c) we get
% the "Error Message"
% c must be real

% 2. The complex Fourier Transformation
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

subplot(3,3,4);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The complex Fourier Transformation
cc = fft(yi);
Ncc = length(cc);
k = (0:1:Ncc-1);

subplot(3,3,5);
plot(k,real(cc)/sqrt(Ncc));
axis([0 300 -5 5]);
xlabel('k');
legend('real(cc)/sqrt(Ncc)');

% The inverse Fourier Transformation
xx = ifft(cc);
Nxx = length(xx);
k = (0:1:Nxx-1);

subplot(3,3,6);
plot(k,real(xx));
axis([0 300 -4 2]);
xlabel('k');
legend('real(xx)');

% 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/sqrt(Ncc));
Nxxx = length(xxx);
f = (0:1:Nxxx - 1);

subplot(3,3,8);
plot(f,real(xxx)/sqrt(Nxxx));
axis([0 300 -4 2]);
xlabel('f');
legend('real(xxx)/sqrt(Nxxx)');




function Out=y(i);
global A;
for k=1:length(i)
    
    sum1 = 0;
    for n=1:3
        sum1 = sum1 - (logical(A(n)-i(k))>=0);
    end;
    sum2 = 0;
    for n=4:8
        sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)^n);
    end;
    output(k) = sum1+sum2;
end;
Out = output;
`,cCode:"",defaultParams:{},displayName:"W2FTCFTS",tags:["chapter10","wavefront-analysis","fourier-transform","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W3IMONEBS",title:"W3IMONEBS - W3IMONEBS\r",description:"W3IMONEBS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W3IMONEBS
# Imaging: Object is one bar and a cylindrical lens is used.
# f#10 is f/2a equal 10    a is "radius of cylindrical lens

Y = np.arange(-0.01, 0.01+0.0001, 0.0001)
b1 = -0.002
b2 = 0.002
Lamda = 0.0005
f = 500
a = 25
k = (2*np.pi)/Lamda
# TOL = 0.01
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Y,Iob(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 2)

plt.xlabel('Y')
plt.legend(['Iob(Y)'])
plt.subplot(2, 2, 2)

plt.plot(Y,S(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 3000)

plt.xlabel('Y')
plt.legend(['S(Y)'])
# Unnormalized
for j in range(len(Y)):
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 10)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0)
Out = 4*(a**2)*((np.sin((k*a*Y)/f))/(k*a*(Y/f)))**2
Out = Iob(YY)*4*(a**2)*((np.sin((k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W3IMONEBS
% Imaging: Object is one bar and a cylindrical lens is used.
% f#10 is f/2a equal 10    a is "radius of cylindrical lens
function W3IMONEBS;
global k a f b1 b2;
Y = (-0.01:0.0001:0.01);
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;
% TOL = 0.01;

figure(1);
subplot(2,2,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 2]);
xlabel('Y');
legend('Iob(Y)');



subplot(2,2,2);
plot(Y,S(Y));
axis([-0.01 0.01 0 3000]);
xlabel('Y');
legend('S(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0);


function Out=S(Y);
global k a f;
Out = 4*(a^2)*((sin((k*a*Y)/f))./(k*a*(Y/f))).^2;

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*((sin((k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2);

`,cCode:"",defaultParams:{},displayName:"W3IMONEBS",tags:["chapter10","wavefront-analysis","lens"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W4IMTWOBS",title:"W4IMTWOBS - W4IMTWOBS\r",description:"W4IMTWOBS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W4IMTWOBS
# Imaging: Object is "Two bars" and cylindrical lens is used.
# f/10= f/2a            a is "radius" of cylindrical lens

Y = np.arange(-0.02, 0.02+0.0011, 0.0011)
b1 = -0.008
b2 = -0.005
b3 = 0.005
b4 = 0.008
Lamda = 0.0005
k = (2*np.pi)/Lamda
f = 500
a = 25
Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)
Io = Io1 + Io2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Io)

plt.legend(['Io(Y)'])
plt.xlim(-0.02, 0.02)
plt.ylim(0, 2)

plt.xlabel('Y')
for j in range(len(Y)):
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j))
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j))
Iim = Iim1+Iim2
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.02, 0.02)
plt.ylim(0, 10)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = 4*(a**2)*((np.sin((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W4IMTWOBS
% Imaging: Object is "Two bars" and cylindrical lens is used.
% f/10= f/2a            a is "radius" of cylindrical lens
function W4IMTWOBS;
global k a f;
Y = (-0.02:0.0011:0.02);
b1 = -0.008;
b2 = -0.005;
b3 = 0.005;
b4 = 0.008;
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
legend('Io(Y)');

axis([-0.02 0.02 0 2]);
xlabel('Y');

for j=1:length(Y)
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j));
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j));
end;
Iim = Iim1+Iim2;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.02 0.02 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2)*((sin((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

`,cCode:"",defaultParams:{},displayName:"W4IMTWOBS",tags:["chapter10","wavefront-analysis","lens"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W5IMONEROS",title:"W5IMONEROS - W5IMONEROS\r",description:"W5IMONEROS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W5IMONEROS
# Imaging:Object is one round aperture and round lens is
# used
# Object:
# Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
# f#10 is f/2a equal 10

Y = np.arange(-0.01, 0.01+0.0001, 0.0001)
# tol = 0.01
b1 = -0.002
b2 = 0.002
Lamda = 0.0005
f = 500
a = 25
k = (2*np.pi)/Lamda
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Iob(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 1.1)

plt.xlabel('Y')
plt.legend(['Iob(Y)'])
# Unnormalized
for j in range(len(Y)):
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Out = Iob(YY)*4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W5IMONEROS
% Imaging:Object is one round aperture and round lens is
% used
% Object:
% Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
% f#10 is f/2a equal 10
function W5IMONEROS;
global b1 b2 k a f;
Y = (-0.01:0.0001:0.01);
% tol = 0.01;
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;

figure(1);
subplot(2,1,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 1.1]);
xlabel('Y');
legend('Iob(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

`,cCode:"",defaultParams:{},displayName:"W5IMONEROS",tags:["chapter10","wavefront-analysis","lens","aperture"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W6IMTWOROS",title:"W6IMTWOROS - W6IMTWOROS\r",description:"W6IMTWOROS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W6IMTWOROS
# Imaging: Two round apertures and a round lens, (R' is X)


Y = np.arange(-0.1, 0.6+0.00111, 0.00111)
b1 = -0.002
b2 = 0.002
b3 = 0.012
b4 = 0.016
# tol = 0.1
# f/10 = f/2a
Lamda = 0.0005
k = (2*np.pi)/Lamda
f = 500
a = 25
Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)
Io = Io1 + Io2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Io)

plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
for j in range(len(Y)):
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.03)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = 4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W6IMTWOROS
% Imaging: Two round apertures and a round lens, (R' is X)

function W6IMTWOROS;
global k a f;
Y = (-0.1:0.00111:0.6);
b1 = -0.002;
b2 = 0.002;
b3 = 0.012;
b4 = 0.016;
% tol = 0.1
% f/10 = f/2a
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
axis([-0.01 0.02 0 2]);
xlabel('Y');
legend('Io(Y)');

for j=1:length(Y)
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.03 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;


`,cCode:"",defaultParams:{},displayName:"W6IMTWOROS",tags:["chapter10","wavefront-analysis","lens","aperture"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W7PUTRAS",title:"W7PUTRAS - W7PUTRAS\r",description:"W7PUTRAS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W7PUTRAS
# Incoherent case, one dimensional.
# Object is a pulse y. Lens is cylindrical with spread function (sinx/x)**2.
# FT of spread Functoin = transfer function.

# The image is FT of ( FT of spread function (transfer function) times FT of object).


# Object: Sum of step functions
k = np.arange(0, 255+1, 1)
b1 = 100
b2 = 140
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(k,yk)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('k')
plt.legend(['yk'])

# FT of the Object y is Omega

Omega = fft(yk)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(k,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-4, 4)

plt.xlabel('k')
plt.legend(['real(omega)/sqrt(N)'])
# The spread function is (sinz/z)**2 because of cylindrical lens
# FT of spread function is transfer function Tau
# f# = f/2a = fn
Sk = (np.sin((np.pi*k)/(fn*Lamda*255))/((np.pi*k)/(fn*Lamda*255)))**2
Sk(1)=0; # error correction, division by zero at first element
Tau = fft(Sk)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(k,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.005, 0.01)

plt.xlabel('k')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(k,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.1, 0.1)

plt.xlabel('k')
plt.legend(['real(phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(k,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.02)

plt.xlabel('k')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W7PUTRAS
% Incoherent case, one dimensional.
% Object is a pulse y. Lens is cylindrical with spread function (sinx/x)^2.
% FT of spread Functoin = transfer function.

% The image is FT of ( FT of spread function (transfer function) times FT of object).

function W7PUTRAS;
% Object: Sum of step functions
k = (0:1:255);
b1 = 100;
b2 = 140;
b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0);

figure(1);
subplot(3,2,1);
plot(k,yk);
axis([0 300 0 1.5]);
xlabel('k');
legend('yk');

% FT of the Object y is Omega

Omega = fft(yk);
N = length(Omega);

subplot(3,2,2);
plot(k,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('k');
legend('real(omega)/sqrt(N)');
% The spread function is (sinz/z)^2 because of cylindrical lens
% FT of spread function is transfer function Tau
% f# = f/2a = fn
Sk = (sin((pi*k)/(fn*Lamda*255))./((pi*k)/(fn*Lamda*255))).^2;
Sk(1)=0; % error correction, division by zero at first element
Tau = fft(Sk);
N = length(Tau);

subplot(3,2,3);
plot(k,real(Tau)/sqrt(N));
axis([0 300 -0.005 0.01]);
xlabel('k');
legend('real(	au)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(k,real(Phi)/N);
axis([0 300 -0.1 0.1]);
xlabel('k');
legend('real(phi)/N');
% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(k,yy);
axis([0 300 0 0.02]);
xlabel('k');
legend('yy');`,cCode:"",defaultParams:{},displayName:"W7PUTRAS",tags:["chapter10","wavefront-analysis","lens","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"the",title:"the - W8TRASIS\r",description:"W8TRASIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W8TRASIS
# Incoherent case, Fourier transformation of a periodic
# structure using as transfer function the sinc function



# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is c

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-4, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Ft of spread function is transfer function Tau
# f#=f/2a=fn

Si = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))**2
Si(1)=0; # error correction, division by zero at first element
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.01, 0.03)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.2)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(i,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.04)

plt.xlabel('i')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W8TRASIS
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function the sinc function


function W8TRASIS;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;


figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.03]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.2]);
xlabel('i');
legend('real(phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.04]);
xlabel('i');
legend('yy');`,cCode:"",defaultParams:{},displayName:"W8TRASIS",tags:["chapter10","wavefront-analysis","fourier-transform","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]},{id:"W9TRAJ1S",title:"W9TRAJ1S - W9TRAJ1S\r",description:"W9TRAJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W9TRAJ1S
# Incoherent case, Fourier transformation of a periodic
# structure using as transfer function: Bessel



# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is c

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Ft of spread function is transfer function Tau
# f#=f/2a=fn

Si = 4*(besselj(1,((np.pi*i)/(fn*Lamda*255)))/((np.pi*i)/(fn*Lamda*255)))**2
Si(1)=0; # error correction, division by zero at first element
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.01, 0.02)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.02, 0.06)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(i,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.01)

plt.xlabel('i')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W9TRAJ1S
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function: Bessel


function W9TRAJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;


figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(besselj(1,((pi*i)/(fn*Lamda*255)))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.02]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.02 0.06]);
xlabel('i');
legend('real(phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.01]);
xlabel('i');
legend('yy');`,cCode:"",defaultParams:{},displayName:"W9TRAJ1S",tags:["chapter10","wavefront-analysis","fourier-transform","fft"],wikipediaLinks:[{title:"Wavefront",url:"https://en.wikipedia.org/wiki/Wavefront"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Wavefront sensor",url:"https://en.wikipedia.org/wiki/Wavefront_sensor"}]}],F1=[{id:"A2SPASSS",title:"A2SPASSS - A2SPASSS\r",description:"A2SPASSS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A2SPASSS
# Spherical aberration of a single refracting surface.
# Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
# Calculation of image point xi and corrected image point xiisph
# All lengths in cm.

# 1. Calculation of xi(xo) for negative values of xo
ro = 2
n = 1.5
r = 10
xo = np.arange(-20, -101, -1)
xi = 1 / (((n - 1) / (n * r)) + 1 / (n * xo))

# 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A
xiisph = n / (
    ((n - 1) / r)
    + 1 / xo
    + ((n - 1) / (n ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xo) ** 2) * (1 / r - ((n + 1) / xo)))
)

fig = plt.figure(figsize=(10, 12))

plt.subplot(4, 2, 1)
plt.plot(xo, xi, label='xi(xo)')
plt.plot(xo, xiisph, label='xiisph(xo)')
plt.xlim(-100, 0)
plt.ylim(0, 100)
plt.xlabel('xo')
plt.legend(['xi(xo)', 'xiisph(xo)'])

plt.subplot(4, 2, 2)
plt.plot(xo, xi - xiisph, label='xi - xiisph')
plt.xlim(-100, 0)
plt.ylim(-10, 20)
plt.xlabel('xo')
plt.legend(['xi(xo)-xiisph(xo)'])

# 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30
rr = 10
nn = np.arange(1.4, 4.01, 0.01)
xi = 1 / ((nn - 1) / (nn * rr) + 1 / (nn * xxo))
xiisph = nn / (
    ((nn - 1) / r)
    + 1 / xxo
    + ((nn - 1) / (nn ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xxo) ** 2) * (1 / r - ((nn + 1) / xxo)))
)

plt.subplot(4, 2, 3)
plt.plot(nn, xi, label='xi(nn)')
plt.xlim(1, 4)
plt.ylim(0, 300)
plt.xlabel('nn')
plt.legend(['xi(nn)'])

plt.subplot(4, 2, 4)
plt.plot(nn, xiisph, label='xiisph(nn)')
plt.xlim(1, 4)
plt.ylim(0, 200)
plt.xlabel('nn')
plt.legend(['xiisph(nn)'])

plt.subplot(4, 2, 5)
plt.plot(nn, xi - xiisph, label='xi - xiisph')
plt.xlim(1, 4)
plt.ylim(0, 100)
plt.xlabel('nn')
plt.legend(['xi(nn)-xiisph(nn)'])

# 4. Calculation of xiisph(rrr) depending on the radius of curvature rrr
nnn = 1.5
xxxo = 10
rrr = np.arange(1, 21, 1)
xi = 1 / ((nnn - 1) / (nnn * rrr) + 1 / (nnn * xxxo))
xiisph = nnn / (
    ((nnn - 1) / rrr)
    + 1 / xxxo
    + ((nnn - 1) / (nnn ** 2)) * ((ro ** 2) / 2) * (((1 / rrr - 1 / xxxo) ** 2) * (1 / rrr - ((nnn + 1) / xxxo)))
)

plt.subplot(4, 2, 6)
plt.plot(rrr, xi, label='xi(rrr)')
plt.xlim(0, 20)
plt.ylim(0, 15)
plt.xlabel('rrr')
plt.legend(['xi(rrr)'])

plt.subplot(4, 2, 7)
plt.plot(rrr, xiisph, label='xiisph(rrr)')
plt.xlim(0, 20)
plt.ylim(0, 15)
plt.xlabel('rrr')
plt.legend(['xiisph(rrr)'])

plt.subplot(4, 2, 8)
plt.plot(rrr, xi - xiisph, label='xi - xiisph')
plt.xlim(0, 20)
plt.ylim(-0.5, 1)
plt.xlabel('rrr')
plt.legend(['xi(rrr)-xiisph(rrr)'])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A2SPASSS
% Spherical aberration of a single refracting surface.
% Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
% Calculation of image point xi and corrected image point xiisph
% All length in cm.

function A2SPASSS;
% 1. Calculation of xi(xo) for negative values of xo
ro = 2;
n = 1.5;
r = 10;
xo = (-20:-1:-100);
xi = 1./(((n-1)/(n*r))+1./(n*xo));

% 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A

xiisph = n./(((n-1)/r)+1./xo+((n-1)/(n^2))*((ro^2)/2)*(((1/r-1./xo).^2).*(1/r-((n+1)./xo))));

figure(1);
subplot(4,2,1);
plot(xo,xi,xo,xiisph);
axis([-100 0 0 100]);
xlabel('xo');
legend('xi(xo)','xiisph(xo)');

subplot(4,2,2);
plot(xo,xi-xiisph);
axis([-100 0 -10 20]);
xlabel('xo');
legend('xi(xo)-xiisph(xo)');

% 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30;
rr = 10;
nn = (1.4:0.01:4);
xi = 1./((nn-1)./(nn*rr)+1./(nn*xxo));
xiisph = n./(((nn-1)/r)+1/xxo+((nn-1)./(nn.^2))*((ro^2)/2).*(((1/r-1/xxo)^2).*(1/r-((nn+1)/xxo))));

subplot(4,2,3);
plot(nn,xi);
axis([1 4 0 300]);
xlabel('nn');
legend('xi(nn)');

subplot(4,2,4);
plot(nn,xiisph);
axis([1 4 0 200]);
xlabel('nn');
legend('xiisph(nn)');

% There is no value for which LSA = 0
subplot(4,2,5);
plot(nn,xi-xiisph);
axis([1 4 0 100]);
xlabel('nn');
legend('xi(nn)-xiisph(nn)');


% 4. Calculation of xiisph(rrr) depending on the radius of curvature rrrr
nnn = 1.5;
xxxo = 10;
rrr = (1:1:20);
xi = 1./((nnn-1)./(nnn*rrr)+1./(nnn*xxxo));
xiisph = n./(((nnn-1)./rrr)+1/xxxo+((nnn-1)/(nnn.^2))*((ro^2)/2)*(((1./rrr-1/xxxo).^2).*(1./rrr-((nnn+1)/xxxo))));

subplot(4,2,6);
plot(rrr,xi);
axis([0 20 0 15]);
xlabel('rrr');
legend('xi(rrr)');

subplot(4,2,7);
plot(rrr,xiisph);
axis([0 20 0 15]);
xlabel('rrr');
legend('xiisph(rrr)');

subplot(4,2,8);
plot(rrr,xi-xiisph);
axis([0 20 -0.5 1]);
xlabel('rrr');
legend('xi(rrr)-xiisph(rrr)');`,cCode:"",defaultParams:{},displayName:"A2SPASSS",tags:["chapter11","aberrations","3d-visualization"],wikipediaLinks:[{title:"Optical aberration",url:"https://en.wikipedia.org/wiki/Optical_aberration"},{title:"Spherical aberration",url:"https://en.wikipedia.org/wiki/Spherical_aberration"},{title:"Chromatic aberration",url:"https://en.wikipedia.org/wiki/Chromatic_aberration"}]},{id:"A4SPHLSIPIS",title:"A4SPHLSIPIS - A4SPHLSIPIS\r",description:"A4SPHLSIPIS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A4SPHLSIPIS

# Spherical Aberration. The pi_val-sigma equation
# We assume n=1.5 and compare the cases of real and virtual images.

# 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated

r1 = 10
r2 = -10
n = 1.5
ro = 4
xo = 4
f = 1/((n-1)*(1/r1-1/r2))   # f = 10
xi = 1/(1/f+1/xo)           # xi = 2.857

# 2. Definitions
# Definition: Sigma = (r2-r1)/(r2+r1)
Sigma = np.arange(-10, 10+0.1, 0.1)
# 3. pi_val-Sigma Equation
pi_val = (xi+xo)/(xi-xo)       # pi_val = -6



fig = plt.figure(1)

plt.plot(Sigma,Y(Sigma)
)
plt.xlim(-10, 10)
plt.ylim(0, 0.1)

plt.xlabel('sigma')
plt.legend(['Y(sigma)'])
# 4. Minimum value of Y(?)
# The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.
# The result is
Sigmamin = -B(n)*(pi_val/(2*A(n)))  # Sigmamin = 4.286

# Calculation of the corresponding value of Y(Sigmamin)
Ymin = Y(Sigmamin)     # Ymin = -0.013




Out = (n+2)/(8*n*((n-1)**2))
Out = (n+1)/(2*n*(n-1))
Out = (3*n+2)/(8*n)
Out = (n**2)/(8*((n-1)**2))
Out = ((ro**2)/(f**3))*(A(n)*(Sigma**2)+B(n)*Sigma*pi_val+C(n)*(pi_val**2)+D(n))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A4SPHLSIPIS

% Spherical Aberration. The pi-sigma equation
% We assume n=1.5 and compare the cases of real and virtual images.
function A4SPHLSIPIS;
% 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated
global ro f pi n;
r1 = 10;
r2 = -10;
n = 1.5;
ro = 4;
xo = 4;

f = 1/((n-1)*(1/r1-1/r2))   % f = 10
xi = 1/(1/f+1/xo)           % xi = 2.857

% 2. Definitions
% Definition: Sigma = (r2-r1)/(r2+r1)
Sigma = (-10:0.1:10);

% 3. pi-Sigma Equation
pi = (xi+xo)/(xi-xo)       % pi = -6



figure(1);
plot(Sigma,Y(Sigma));
axis([-10 10 0 0.1]);
xlabel('sigma');
legend('Y(sigma)');
% 4. Minimum value of Y(?)
% The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.
% The result is
Sigmamin = -B(n)*(pi/(2*A(n)))  % Sigmamin = 4.286

% Calculation of the corresponding value of Y(Sigmamin)
Ymin = Y(Sigmamin)     % Ymin = -0.013



function Out=A(n)
Out = (n+2)./(8*n.*((n-1).^2));

function Out=B(n)
Out = (n+1)./(2*n.*(n-1));

function Out=C(n)
Out = (3*n+2)./(8*n);

function Out=D(n)
Out = (n.^2)./(8*((n-1).^2));

function Out=Y(Sigma)
global ro f pi n;
Out = ((ro^2)/(f^3))*(A(n)*(Sigma.^2)+B(n)*Sigma*pi+C(n)*(pi^2)+D(n));

`,cCode:"",defaultParams:{},displayName:"A4SPHLSIPIS",tags:["chapter11","aberrations","focal-length"],wikipediaLinks:[{title:"Optical aberration",url:"https://en.wikipedia.org/wiki/Optical_aberration"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Spherical aberration",url:"https://en.wikipedia.org/wiki/Spherical_aberration"},{title:"Chromatic aberration",url:"https://en.wikipedia.org/wiki/Chromatic_aberration"}]},{id:"A5COMAS",title:"A5COMAS - A5COMAS\r",description:"A5COMAS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A5COMAS

# The tangential coma CT and the sagittal coma CS are calulated depending on
# using expressions of the third order theory. For similar expressions see
# Jenkins and White, 4th Ed, p.163.


# 1. No coma and spherical aberration
r1 = 11
r2 = -10
xo = -30
n = 1.3168
f = 1/((1/r1-1/r2)*(n-1))
xi = 1/(1/f + 1/xo)         # xi = 36.837

# 2. Definitions for calculations on coma

pi_val = (xi + xo)/(xi-xo)      # pi_val = 0.102
Sigma = (r2+r1)/(r2-r1)     # Sigma = -0.048
Rho = 1.5
G = (3*(2*n+1))/(4*n)       # G = 2.07
W = (3*(n+1))/(4*n*(n-1))   # W = 4.165

ZZ = W*Sigma + G*pi_val
# Tangential Coma CT as function of Rho

Rho =np.arange(0, 1+0.01, 0.01)
Beta = 0.05
CT = (Rho**2)*((ZZ*np.tan(Beta))/(f**2))
fig = plt.figure(1)

plt.plot(Rho,CT)

plt.xlim(0, 1)
plt.ylim(0, 3e-6)

plt.xlabel('\rho')
plt.legend(['CT(\rho)'])
# Condition for elimination of coma
# if Rho = -((2n+1)(n-1)/(n+1))pi_val:
# CT is zero for all zones
# CS = 1/3 CT
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A5COMAS

% The tangential coma CT and the sagittal coma CS are calulated depending on
% using expressions of the third order theory. For similar expressions see
% Jenkins and White, 4th Ed, p.163.

function A5COMAS;
% 1. No coma and spherical aberration
r1 = 11;
r2 = -10;
xo = -30;
n = 1.3168;
f = 1/((1/r1-1/r2)*(n-1));
xi = 1/(1/f + 1/xo)         % xi = 36.837

% 2. Definitions for calculations on coma

pi = (xi + xo)/(xi-xo)      % pi = 0.102
Sigma = (r2+r1)/(r2-r1)     % Sigma = -0.048
Rho = 1.5;
G = (3*(2*n+1))/(4*n)       % G = 2.07
W = (3*(n+1))/(4*n*(n-1))   % W = 4.165

ZZ = W*Sigma + G*pi;

% Tangential Coma CT as function of Rho

Rho =(0:0.01:1);
Beta = 0.05;


CT = (Rho.^2)*((ZZ*tan(Beta))/(f^2));
figure(1);
plot(Rho,CT);
axis([0 1 0 3e-6]);
xlabel('\rho');
legend('CT(\rho)');
% Condition for elimination of coma
% if Rho = -((2n+1)(n-1)/(n+1))pi
% CT is zero for all zones
% CS = 1/3 CT`,cCode:"",defaultParams:{},displayName:"A5COMAS",tags:["chapter11","aberrations"],wikipediaLinks:[{title:"Optical aberration",url:"https://en.wikipedia.org/wiki/Optical_aberration"},{title:"Spherical aberration",url:"https://en.wikipedia.org/wiki/Spherical_aberration"},{title:"Chromatic aberration",url:"https://en.wikipedia.org/wiki/Chromatic_aberration"}]},{id:"A6COMPLANS",title:"A6COMPLANS - A6COMPLANS\r",description:"A6COMPLANS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A6COMPLANS
# For the aplanatic lens, both, spherical aberration and coma are zero. For the
# calculation of coma, the incident light is assumed to be parallel.


# 1.The aplanatic lens
r1 = -30
xo = r1
n = 1.5
Rho = 1
Beta = 0.05
r2 = (xo*n)/(n+1)
xi = n*xo
f = ((n+1)/(n-1))*r2
# and for pi_val, sigma, W, G
pi_val = (xi+xo)/(xi-xo)    # pi_val = 5
Sigma = (r2+xo)/(r2-xo) # Sigma = -4

# 2. The correction for coma
# Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi_val) is 0, or Sigma = -pi_val(G(n)/W(n)):
# 3. Graph of y(n) = W(n)*Sigma + G(n)*pi_val
# we double up and use nn
nn = np.arange(1, 4+0.01, 0.01)
pp = (nn*xo + xo)/(nn*xo - xo)
r2 = xo*((nn)/(nn+1))
ss = (r2+r1)/(r2-r1)
y = W(nn)*ss+G(nn)*pp
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(nn,y)

plt.xlim(1, 4)
plt.ylim(-1e-12, 5e-13)

plt.xlabel('nn')
plt.legend(['y(nn)'])
# Coma is zero for most values of nn
plt.subplot(2, 1, 2)

plt.plot(nn,ss)

plt.xlim(1, 4)
plt.ylim(-10, 0)

plt.xlabel('nn')
plt.legend(['ss(nn)'])
Out = (3*(n+1))/(4*n*(n-1))
Out = (3*(2*n+1))/(4*n)
Out = ((Rho**2*np.tan(Beta))/(f**2))*(W(Rho)*Sigma+G(Rho)*pi_val)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A6COMPLANS
% For the aplanatic lens, both, spherical aberration and coma are zero. For the
% calculation of coma, the incident light is assumed to be parallel.

function A6COMPLANS;
global Beta f Sigma pi n;
% 1.The aplanatic lens
r1 = -30
xo = r1;
n = 1.5;
Rho = 1;
Beta = 0.05;
r2 = (xo*n)/(n+1);
xi = n*xo;
f = ((n+1)/(n-1))*r2;
% and for pi, sigma, W, G
pi = (xi+xo)/(xi-xo)    % pi = 5
Sigma = (r2+xo)/(r2-xo) % Sigma = -4

% 2. The correction for coma
% Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi) is 0, or Sigma = -pi(G(n)/W(n))

% 3. Graph of y(n) = W(n)*Sigma + G(n)*pi
% we double up and use nn
nn = (1:0.01:4);
pp = (nn*xo + xo)./(nn*xo - xo);
r2 = xo*((nn)./(nn+1));
ss = (r2+r1)./(r2-r1);
y = W(nn).*ss+G(nn).*pp;

figure(1);
subplot(2,1,1);
plot(nn,y);
axis([1 4 -1e-12 5e-13]);
xlabel('nn');
legend('y(nn)');

% Coma is zero for most values of nn
subplot(2,1,2);
plot(nn,ss);
axis([1 4 -10 0]);
xlabel('nn');
legend('ss(nn)');


function Out=W(n)
Out = (3*(n+1))./(4*n.*(n-1));

function Out=G(n)
Out = (3*(2*n+1))./(4*n);

function Out=Co(Rho)
global Beta f Sigma pi n;
Out = ((Rho.^2*tan(Beta))/(f^2))*(W(Rho)*Sigma+G(Rho)*pi);`,cCode:"",defaultParams:{},displayName:"A6COMPLANS",tags:["chapter11","aberrations","lens"],wikipediaLinks:[{title:"Optical aberration",url:"https://en.wikipedia.org/wiki/Optical_aberration"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Spherical aberration",url:"https://en.wikipedia.org/wiki/Spherical_aberration"},{title:"Chromatic aberration",url:"https://en.wikipedia.org/wiki/Chromatic_aberration"}]},{id:"A7ASTSINS",title:"A7ASTSINS - A7ASTSINS\r",description:"A7ASTSINS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A7ASTSINS

# Astigmatism on a single surface.

# We have for the horizontal and vertical direction each an imaging equation which
# looks like the imaging equation for the single spherical surface, but the expressions
# depend on angles.


# 1. The vertical and horizontal imaging equations.
# We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r
# and for vertical -cos?**2/xo +ncos?'**2/xiv = (ncos?'-cos?)/r
# using the law of refraction we can replace ?' by ?. We call np.cos( ? ') = c(?)

# 2. For fixed n we make calculate xih(?) as a function of ?

Phi = (.1:0.01:0.5)
xo = -100
r = 10
n = 1.2
c = np.sqrt(1-((np.sin(2*np.pi*(Phi/360)))**2)/(n**2))
xih = n/((n*c-np.cos(2*Phi*(np.pi/360)))/r + 1/xo)
# 3. For fixed n we make calculate xiv(?) as a function of ?

xiv = (n*(c**2))/((n*c-np.cos(2*Phi*(np.pi/360)))/r+((np.cos(2*np.pi*(Phi/360)))**2)/xo)
# 4. Graph of the difference ASD for fixed n
ASD = xih - xiv
fig = plt.figure(1)

plt.plot(Phi,ASD)

plt.xlim(0.1, 0.5)
plt.ylim(0, 0.015)

plt.xlabel('phi')
plt.legend(['ASD(phi)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A7ASTSINS

% Astigmatism on a single surface.

% We have for the horizontal and vertical direction each an imaging equation which
% looks like the imaging equation for the single spherical surface, but the expressions
% depend on angles.

function A7ASTSINS;
% 1. The vertical and horizontal imaging equations.
% We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r
% and for vertical -cos?^2/xo +ncos?'^2/xiv = (ncos?'-cos?)/r
% using the law of refraction we can replace ?' by ?. We call cos( ? ') = c(?)

% 2. For fixed n we make calculate xih(?) as a function of ?

Phi = (.1:0.01:0.5);
xo = -100;
r = 10;
n = 1.2
c = sqrt(1-((sin(2*pi*(Phi/360))).^2)/(n^2));
xih = n./((n*c-cos(2*Phi*(pi/360)))/r + 1/xo);

% 3. For fixed n we make calculate xiv(?) as a function of ?

xiv = (n*(c.^2))./((n*c-cos(2*Phi*(pi/360)))/r+((cos(2*pi*(Phi/360))).^2)/xo);

% 4. Graph of the difference ASD for fixed n
ASD = xih - xiv;

figure(1);
plot(Phi,ASD);
axis([0.1 0.5 0 0.015]);
xlabel('phi');
legend('ASD(phi)');`,cCode:"",defaultParams:{},displayName:"A7ASTSINS",tags:["chapter11","aberrations","refraction","3d-visualization"],wikipediaLinks:[{title:"Optical aberration",url:"https://en.wikipedia.org/wiki/Optical_aberration"},{title:"Refraction",url:"https://en.wikipedia.org/wiki/Refraction"},{title:"Spherical aberration",url:"https://en.wikipedia.org/wiki/Spherical_aberration"},{title:"Chromatic aberration",url:"https://en.wikipedia.org/wiki/Chromatic_aberration"}]},{id:"of",title:"of - A8ASTISMS\r",description:"A8ASTISMS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A8ASTISMS
# Astigmatism of a thin lens.

# We have for the horizontal and vertical direction each an imaging equation which
# looks like the imaging equation for the thin lens, but the expressions depend on angles.

# We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)
# and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)

# using the law of refraction we can replace ?' by ? and make a plot of the difference
# xih-xiv as function of ?.

# 1. Graph of ASD for fixed n and dependence on ?
Phi = np.arange(1, 10+1, 1)
xoo = -400
r1 = 10
r2 = -12
n = 1.3
c = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))
xih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
xiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
ASD = xih - xiv
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Phi,ASD)

plt.xlim(0, 10)
plt.ylim(0, 20)

plt.xlabel('phi')
plt.legend(['ASD(phi)'])
# 2. Graph of ASD for fixed ? and dependence on n

Phi = 5
xoo = -400
r1 = 10
r2 = -12
n=np.arange(1.3, 3+0.001, 0.001)
c = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))
xih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
xiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
ASD = xih - xiv
plt.subplot(2, 1, 2)

plt.plot(n,ASD)

plt.xlim(1, 3)
plt.ylim(0, 2)

plt.xlabel('n')
plt.legend(['ASD(n)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A8ASTISMS
% Astigmatism of a thin lens.

% We have for the horizontal and vertical direction each an imaging equation which
% looks like the imaging equation for the thin lens, but the expressions depend on angles.

% We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)
% and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)

% using the law of refraction we can replace ?' by ? and make a plot of the difference
% xih-xiv as function of ?.
function A8ASTISMS;
% 1. Graph of ASD for fixed n and dependence on ?
Phi = (1:1:10);
xoo = -400;
r1 = 10;
r2 = -12;
n = 1.3;
c = sqrt(1-(((sin(2*pi*(Phi/360))).^2)/(n^2)));
xih = 1./(((cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
xiv = 1./(((1./cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);

ASD = xih - xiv;

figure(1);
subplot(2,1,1);
plot(Phi,ASD);
axis([0 10 0 20]);
xlabel('phi');
legend('ASD(phi)');

% 2. Graph of ASD for fixed ? and dependence on n

Phi = 5;
xoo = -400;
r1 = 10;
r2 = -12
n=(1.3:0.001:3);
c = sqrt(1-(((sin(2*pi*(Phi/360)))^2)./(n.^2)));

xih = 1./(((cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
xiv = 1./(((1/cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
ASD = xih - xiv;

subplot(2,1,2);
plot(n,ASD);
axis([1 3 0 2]);
xlabel('n');
legend('ASD(n)');
`,cCode:"",defaultParams:{},displayName:"A8ASTISMS",tags:["chapter11","aberrations","lens","refraction"],wikipediaLinks:[{title:"Optical aberration",url:"https://en.wikipedia.org/wiki/Optical_aberration"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Refraction",url:"https://en.wikipedia.org/wiki/Refraction"},{title:"Spherical aberration",url:"https://en.wikipedia.org/wiki/Spherical_aberration"},{title:"Chromatic aberration",url:"https://en.wikipedia.org/wiki/Chromatic_aberration"}]}],N1=[{id:"I10WEDGES",title:"I10WEDGES - I10WEDGES\r",description:"I10WEDGES\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I10WEDGES
# Fringes of a wedge given by y.

# The distance is given by yy
Alpha = 0.002
Lamda1 = 0.0005
Lamda2 = 0.0008
Lamda3 = 0.0012
x = np.arange(0, 1+0.01, 0.01)
y1 = y(x,Lamda1)
y2 = y(x,Lamda2)
y3 = y(x,Lamda3)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x,y1,x,y2,x,y3)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('x')
plt.legend(['y1(x,lambda1)', 'y2(x,lambda2)', 'y3(x,lambda3)'])

# Height at x
h = x*np.tan(Alpha)
plt.subplot(3, 2, 5)

plt.plot(x,h)

plt.xlim(0, 1)
plt.ylim(0, 0.003)

plt.xlabel('x')
plt.legend(['h(x)'])
# Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = np.arange(0.0001, 0.0015+0.0001, 0.0001)
xx = Lamda/(2*np.tan(Alpha))
plt.subplot(3, 2, 6)

plt.plot(Lamda,xx)

plt.xlim(0, 0.0015)
plt.ylim(0, 0.4)

plt.xlabel('lambda')
plt.legend(['xx(lambda)'])
Out = np.cos(2*np.pi*x*(np.tan(Alpha)/Lamda)+np.pi/2)**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I10WEDGES
% Fringes of a wedge given by y.
function I10WEDGES;
% The distance is given by yy;
global Alpha;
Alpha = 0.002;
Lamda1 = 0.0005;
Lamda2 = 0.0008;
Lamda3 = 0.0012;
x = (0:0.01:1);
y1 = y(x,Lamda1);
y2 = y(x,Lamda2);
y3 = y(x,Lamda3);

figure(1);
subplot(2,1,1);
plot(x,y1,x,y2,x,y3);
axis([0 1 0 1]);
xlabel('x');
legend('y1(x,lambda1)','y2(x,lambda2)','y3(x,lambda3)')

% Height at x
h = x*tan(Alpha);

subplot(3,2,5);
plot(x,h);
axis([0 1 0 0.003]);
xlabel('x');
legend('h(x)');

% Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = (0.0001:0.0001:0.0015);
xx = Lamda/(2*tan(Alpha));

subplot(3,2,6);
plot(Lamda,xx);
axis([0 0.0015 0 0.4]);
xlabel('lambda');
legend('xx(lambda)');


function Out=y(x,Lamda)
global Alpha;
Out = cos(2*pi*x*(tan(Alpha)/Lamda)+pi/2).^2;
`,cCode:"",defaultParams:{},displayName:"I10WEDGES",tags:["chapter2","interference","fringe-pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I11NEWTONS",title:"I11NEWTONS - I11NEWTONS\r",description:"I11NEWTONS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I11NEWTONS
# Newton's rings
# Path difference d=(R -SQ(R**2-r**2))

# R is radius of curvature of the lens in mm
# r is the distance from the center in mm


r = np.arange(0, 4+0.01, 0.01)
R = 2000
Lamda = 0.0005
d = R-np.sqrt(R**2-r**2)
INR = np.cos(2*np.pi*(d/Lamda)+np.pi/2)**2
INT = np.cos(2*np.pi*(d/Lamda))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(r,INT)

plt.xlim(0, 4)
plt.ylim(0, 1)

plt.xlabel('r')
plt.legend(['INT(r)'])
plt.subplot(2, 1, 2)

plt.plot(r,INR)

plt.xlim(0, 4)
plt.ylim(0, 1)

plt.xlabel('r')
plt.legend(['INR(r)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I11NEWTONS
% Newton's rings
% Path difference d=(R -SQ(R^2-r^2))

% R is radius of curvature of the lens in mm
% r is the distance from the center in mm

function I11NEWTONS;
r = (0:0.01:4);
R = 2000;
Lamda = 0.0005;
d = R-sqrt(R^2-r.^2);
INR = cos(2*pi*(d/Lamda)+pi/2).^2;
INT = cos(2*pi*(d/Lamda)).^2;

figure(1);
subplot(2,1,1);
plot(r,INT);
axis([0 4 0 1]);
xlabel('r');
legend('INT(r)');

subplot(2,1,2);
plot(r,INR);
axis([0 4 0 1]);
xlabel('r');
legend('INR(r)');
`,cCode:"",defaultParams:{},displayName:"I11NEWTONS",tags:["chapter2","interference","lens"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Lens (optics)",url:"https://en.wikipedia.org/wiki/Lens_(optics)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I12MICHDLS",title:"I12MICHDLS - I12MICHDLS\r",description:"I12MICHDLS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I12MICHDLS

# Michelson interferometer
# Beamsplitter is assumed to be a plane parallel plate
# Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
# ? for D = .003. The angle ? = 0.
# All length in mm.


# 1. Dependence on D
Theta = 0
Lamda = 0.0005
D = np.arange(0.027, 0.0325+0.00001, 0.00001)
I1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(D,I1)

plt.xlim(0.026, 0.033)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['I1(D)'])
# 2. Dependence on Lamda
Lamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)
D = 0.003
I2 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
plt.subplot(2, 1, 2)

plt.plot(Lamda,I2)

plt.xlim(3e-4, 8e-4)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['I2(lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I12MICHDLS

% Michelson interferometer
% Beamsplitter is assumed to be a plane parallel plate
% Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
% ? for D = .003. The angle ? = 0.
% All length in mm.

function I12MICHDLS;
% 1. Dependence on D
Theta = 0;
Lamda = 0.0005;
D = (0.027:0.00001:0.0325);
I1 = cos((2*pi*D*cos(Theta))/Lamda).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([0.026 0.033 0 1]);
xlabel('D');
legend('I1(D)');

%2. Dependence on Lamda
Lamda = (0.0004:0.000001:0.0008);
D = 0.003;
I2 = cos((2*pi*D*cos(Theta))./Lamda).^2;
subplot(2,1,2);
plot(Lamda,I2);
axis([3e-4 8e-4 0 1]);
xlabel('lambda');
legend('I2(lambda)');
`,cCode:"",defaultParams:{},displayName:"I12MICHDLS",tags:["chapter2","interference","wavelength","fringe-pattern","pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I13MICHANS",title:"I13MICHANS - I13MICHANS\r",description:"I13MICHANS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I13MICHANS

# Michelson interferometer, Dependence on ?.
# (Beamsplitter is assumed to be a dialectric plate)
# Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
# displacement D.
# All length in mm.


Lamda = 0.0005
D = 0.05
LamdaLamda = 0.00052
Theta = np.arange(-0.301, 0.3+0.001, 0.001)
IM1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
IM2 = np.cos((2*np.pi*D*np.cos(Theta))/LamdaLamda)**2
fig = plt.figure(1)

plt.plot(Theta,IM1,Theta,IM2)

plt.xlim(-0.4, 0.3)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IM1(	heta,D)', 'IM2(	heta,D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I13MICHANS

% Michelson interferometer, Dependence on ?.
% (Beamsplitter is assumed to be a dialectric plate)
% Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
% displacement D.
% All length in mm.

function I13MICHANS;
Lamda = 0.0005;
D = 0.05;
LamdaLamda = 0.00052;
Theta = (-0.301:0.001:0.3);

IM1 = cos((2*pi*D*cos(Theta))/Lamda).^2;
IM2 = cos((2*pi*D*cos(Theta))/LamdaLamda).^2;

figure(1);
plot(Theta,IM1,Theta,IM2);
axis([-0.4 0.3 0 1]);
xlabel('	heta');
legend('IM1(	heta,D)','IM2(	heta,D)');
`,cCode:"",defaultParams:{},displayName:"I13MICHANS",tags:["chapter2","interference","wavelength","fringe-pattern","pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I14PLANIDS",title:"I14PLANIDS - I14PLANIDS\r",description:"I14PLANIDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I14PLANIDS

# Normal incidence. Plane parallel plate, reflected and transmitted intensity
# depending on thickness for fixed wavelength.
# The reflection coefficients are calculated from Fresnels formulas for ? = 0
# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
# for both surfaces are calculated.
# The calculation of the fringe pattern is done depending on D for fixed ?, .


# Delta = 2*np.pi/Lamda   2dn2
Theta1 = 1
n1 = 1
n2 = 1.5
n3 = 1
# Delta = 2*np.pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) # r12 = 0.2
r23 = (n3 - n2)/(n3+n2) # r23 = -0.2
Lamda = 0.0005
D = np.arange(0.0002, 0.002+0.00001, 0.00001)
IT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))
IR = 1 - IT
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(D,IT)

plt.xlim(0, 0.002)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT(D)'])
plt.title('Transmitted Pattern')
plt.subplot(1, 2, 2)

plt.plot(D,IR)

plt.xlim(0, 0.002)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IR(D)'])
plt.title('Reflected Pattern')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I14PLANIDS

% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on thickness for fixed wavelength.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on D for fixed ?, .

function I14PLANIDS;
% Delta = 2*pi/Lamda   2dn2
Theta1 = 1;
n1 = 1;
n2 = 1.5;
n3 = 1;
% Delta = 2*pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) %r12 = 0.2;
r23 = (n3 - n2)/(n3+n2) %r23 = -0.2
Lamda = 0.0005;
D = (0.0002:0.00001:0.002);
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D/Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(D,IT);
axis([0 0.002 0 1]);
xlabel('D');
legend('IT(D)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(D,IR);
axis([0 0.002 0 1]);
xlabel('D');
legend('IR(D)');
title('Reflected Pattern');



`,cCode:"",defaultParams:{},displayName:"I14PLANIDS",tags:["chapter2","interference","reflection","wavelength","intensity","fringe-pattern","pattern","3d-visualization"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I15PLANIDS",title:"I15PLANIDS - I15PLANIDS\r",description:"I15PLANIDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I15PLANIDS
# Normal incidence. Plane parallel plate, reflected and transmitted intensity
# depending on wavelength for fisec thickness.
# The reflection coefficients are calculated from Fresnels formulas for ? = 0
# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
# for both surfaces are calculated.
# The calculation of the fringe pattern is done depending on ? for fixed D.

# Delta = 2*np.pi/Lamda   2dn2
n1 = 1
n2 = 1.5
n3 = 1
r12 = (n2-n1)/(n2+n1)   # r12 = 0.2
r23 = (n3-n2)/(n3+n2)   # r23 = -0.2
# Delta = 2*np.pi/Lamda   2dn2
Lamda = np.arange(0.021, 1+0.001, 0.001)
D = 0.2
IT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))
IR = 1 - IT
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Lamda,IT)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['IT(lambda)'])
plt.title('Transmitted Pattern')
plt.subplot(1, 2, 2)

plt.plot(Lamda,IR)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['IR(lambda)'])
plt.title('Reflected Pattern')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I15PLANIDS
% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on wavelength for fisec thickness.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on ? for fixed D.
function I15PLANIDS;
% Delta = 2*pi/Lamda   2dn2
n1 = 1;
n2 = 1.5;
n3 = 1;
r12 = (n2-n1)/(n2+n1)   % r12 = 0.2;
r23 = (n3-n2)/(n3+n2)   % r23 = -0.2
% Delta = 2*pi/Lamda   2dn2
Lamda = (0.021:0.001:1);
D = 0.2;
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D./Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(Lamda,IT);
axis([0 1 0 1]);
xlabel('lambda');
legend('IT(lambda)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(Lamda,IR);
axis([0 1 0 1]);
xlabel('lambda');
legend('IR(lambda)');
title('Reflected Pattern');

`,cCode:"",defaultParams:{},displayName:"I15PLANIDS",tags:["chapter2","interference","reflection","wavelength","intensity","fringe-pattern","pattern","3d-visualization"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I16FABRYS",title:"I16FABRYS - I16FABRYS\r",description:"I16FABRYS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I16FABRYS
# Fabry-Perot Transmission depending on D.
# ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
# See for global definition.The finess ?g/2 is ?/ ??. All length in mm.

# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)
D = np.arange(0, 0.11+0.001, 0.001)
n2 = 1
Lamda = 0.1
r1 = 0.7
r2 = 0.9
r3 = 0.97
g1 = (2*r1)/(1-r1**2)
g2 = (2*r2)/(1-r2**2)
g3 = (2*r1)/(1-r3**2)
IT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
fig = plt.figure(1)

plt.plot(D,IT1,D,IT2,D,IT3)

plt.xlim(0, 0.12)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT1(D)', 'IT2(D)', 'IT3(D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I16FABRYS
% Fabry-Perot Transmission depending on D.
% ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
% See for global definition.The finess ?g/2 is ?/ ??. All length in mm.
function I16FABRYS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
D = (0:0.001:0.11);
n2 = 1;
Lamda = 0.1;
r1 = 0.7
r2 = 0.9
r3 = 0.97;
g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi/Lamda)*D*n2)).^2));

figure(1);
plot(D,IT1,D,IT2,D,IT3);
axis([0 0.12 0 1]);
xlabel('D');
legend('IT1(D)','IT2(D)','IT3(D)');
`,cCode:"",defaultParams:{},displayName:"I16FABRYS",tags:["chapter2","interference","reflection","wavelength"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I17FABRYLS",title:"I17FABRYLS - I17FABRYLS\r",description:"I17FABRYLS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I17FABRYLS

# Fabry-Perot Transmission depending on wavelength. 
# ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
# All length in mm.
# See for global definition.The finess ?g/2 is ?/ ??.

# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)
n2 = 1
r1 = 0.7
r2 = 0.9
r3 = 0.97
D = 0.0025
Lamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)
g1 = (2*r1)/(1-r1**2)
g2 = (2*r2)/(1-r2**2)
g3 = (2*r1)/(1-r3**2)
IT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
fig = plt.figure(1)

plt.plot(Lamda,IT1,Lamda,IT2,Lamda,IT3)

plt.xlim(3.5e-4, 8e-4)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['IT1(lambda)', 'IT2(lambda)', 'IT3(lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I17FABRYLS

% Fabry-Perot Transmission depending on wavelength. 
% ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
% All length in mm.
% See for global definition.The finess ?g/2 is ?/ ??.
function I17FABRYLS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
n2 = 1;
r1 = 0.7;
r2 = 0.9;
r3 = 0.97;
D = 0.0025;
Lamda = (0.0004:0.000001:0.0008);


g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi./Lamda)*D*n2)).^2));

figure(1);
plot(Lamda,IT1,Lamda,IT2,Lamda,IT3);
axis([3.5e-4 8e-4 0 1]);
xlabel('lambda');
legend('IT1(lambda)','IT2(lambda)','IT3(lambda)');
`,cCode:"",defaultParams:{},displayName:"I17FABRYLS",tags:["chapter2","interference","reflection","wavelength"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I18FABRYRDS",title:"I18FABRYRDS - I18FABRYRDS\r",description:"I18FABRYRDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I18FABRYRDS

# Fabry-Perot Ring pattern in Transmission and Reflection depending on
# angle.

# ?ear normal incidence. Parameters: reflection coefficient, thickness d,
# refractive index
# and range of angles in Rad. All length in mm.


r = 0.7
Lamda1 = 0.0005
Lamda2 = 0.0006
g = (2*r)/(1-r**2)
D = np.arange(0, 0.001+0.00001, 0.00001)
IT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda1)*D)**2))
IIT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda2)*D)**2))
# Graph for transmission depending on angle for fixed ratio of D/l
fig = plt.figure(1)

plt.plot(D,IT,D,IIT)

plt.xlim(0, 0.001)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT(D)', 'IIT(D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I18FABRYRDS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on
% angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d,
% refractive index
% and range of angles in Rad. All length in mm.

function I18FABRYRDS;
r = 0.7;
Lamda1 = 0.0005;
Lamda2 = 0.0006;
g = (2*r)/(1-r^2);
D = (0:0.00001:0.001);
IT = 1./(1+(g^2)*(sin(2*(pi/Lamda1)*D).^2));
IIT = 1./(1+(g^2)*(sin(2*(pi/Lamda2)*D).^2));

% Graph for transmission depending on angle for fixed ratio of D/l
figure(1);
plot(D,IT,D,IIT);
axis([0 0.001 0 1]);
xlabel('D');
legend('IT(D)','IIT(D)');
`,cCode:"",defaultParams:{},displayName:"I18FABRYRDS",tags:["chapter2","interference","reflection","pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I19FABRYAS",title:"I19FABRYAS - I19FABRYAS\r",description:"I19FABRYAS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I19FABRYAS

# Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

# ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
# and range of angles in Rad. All length in mm.


# Delta = 2*np.pi/Lamda   2dn2 np.cos(Theta)
n2 = 1
r = 0.9
D = 0.01
Lamda1 = 0.0005
Lamda2=0.0005025
Theta=np.arange(0, 40+0.01, 0.01)
g = (2*r)/(1-r**2)
IT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda1)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)
IIT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda2)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)
# Graph for transmission depending on angle for fixed ratio of D/Lamda
fig = plt.figure(1)

plt.plot(Theta,IT,Theta,IIT)

plt.xlim(0, 40)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IT(	heta)', 'IIT(	heta)'])
plt.title('Graph for transmission depending on angle for fixed ratio of D/lambda')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I19FABRYAS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
% and range of angles in Rad. All length in mm.

function I19FABRYAS;
% Delta = 2*pi/Lamda   2dn2 cos(Theta)
n2 = 1;
r = 0.9;
D = 0.01;
Lamda1 = 0.0005;
Lamda2=0.0005025;
Theta=(0:0.01:40);

g = (2*r)/(1-r^2);

IT = 1./(1+(g^2)*sin(2*(pi/Lamda1)*D*n2*cos(2*(pi/360)*Theta)).^2);
IIT = 1./(1+(g^2)*sin(2*(pi/Lamda2)*D*n2*cos(2*(pi/360)*Theta)).^2);

% Graph for transmission depending on angle for fixed ratio of D/Lamda
figure(1);
plot(Theta,IT,Theta,IIT);
axis([0 40 0 1]);
xlabel('	heta');
legend('IT(	heta)','IIT(	heta)');
title('Graph for transmission depending on angle for fixed ratio of D/lambda');
`,cCode:"",defaultParams:{},displayName:"I19FABRYAS",tags:["chapter2","interference","reflection","pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"depending",title:"depending - I1COSWS\r",description:"I1COSWS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I1COSWS

# Cosine function depending on x, t, and a phase constant.
# Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
# cosine function.We see an equivalent dependence of the cos-function on x/?
# and t/T.
# Two sets of each three functions are shown, they give the same graphs
# when changing the dependence on x or t, using the same range, and leaving
# the other corresponding parameters the same.
# In the way the cosine functions are written, an additional phase factor may
# have its origin in the space or time part, we do not know.


x1=(0:.1:10); Lamda=1; T=10
A1=1; t1=1; theta1=0.5
A2=1; t2=2; theta2=0.2
A3=1; t3=3; theta3=0.1
ua1=A1*np.cos(2*np.pi*((x1/Lamda)-t1/T+theta1))
ua2=A2*np.cos(2*np.pi*((x1/Lamda)-t2/T+theta2))
ua3=A3*np.cos(2*np.pi*((x1/Lamda)-t3/T+theta3))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x1,ua1,x1,ua2,x1,ua3)

plt.xlim(0, 10)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
xlabel('x1','Fontsize',12)
plt.legend(['ua1(x1)', 'ua2(x1)', 'ua3(x1)'])
t1=(0:.1:10); LamdaLamda=10; TT=1
B1=1; x1=1; psi1=1
B2=1; x2=2; psi2=1
B3=1; x3=3; psi3=1
ub1=B1*np.cos(2*np.pi*((x1/LamdaLamda)-t1/TT+psi1))
ub2=B2*np.cos(2*np.pi*((x2/LamdaLamda)-t1/TT+psi2))
ub3=B3*np.cos(2*np.pi*((x3/LamdaLamda)-t1/TT+psi3))
plt.subplot(2, 1, 2)

plt.plot(t1,ub1,t1,ub2,t1,ub3)

plt.xlim(0, 10)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
xlabel('t1','Fontsize',12)
plt.legend(['ub1(t1)', 'ub2(t1)', 'ub3(t1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`%I1COSWS

% Cosine function depending on x, t, and a phase constant.
% Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
% cosine function.We see an equivalent dependence of the cos-function on x/?
% and t/T.
% Two sets of each three functions are shown, they give the same graphs
% when changing the dependence on x or t, using the same range, and leaving
% the other corresponding parameters the same.
% In the way the cosine functions are written, an additional phase factor may
% have its origin in the space or time part, we do not know.

function I1COSWS;
x1=(0:.1:10); Lamda=1; T=10;
A1=1; t1=1; theta1=0.5;
A2=1; t2=2; theta2=0.2;
A3=1; t3=3; theta3=0.1;
ua1=A1*cos(2*pi*((x1./Lamda)-t1/T+theta1));
ua2=A2*cos(2*pi*((x1./Lamda)-t2/T+theta2));
ua3=A3*cos(2*pi*((x1./Lamda)-t3/T+theta3));

figure(1);
subplot(2,1,1);
plot(x1,ua1,x1,ua2,x1,ua3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('x1','Fontsize',12);
legend('ua1(x1)','ua2(x1)','ua3(x1)');


t1=(0:.1:10); LamdaLamda=10; TT=1;
B1=1; x1=1; psi1=1;
B2=1; x2=2; psi2=1;
B3=1; x3=3; psi3=1;
ub1=B1*cos(2*pi*((x1/LamdaLamda)-t1./TT+psi1));
ub2=B2*cos(2*pi*((x2/LamdaLamda)-t1./TT+psi2));
ub3=B3*cos(2*pi*((x3/LamdaLamda)-t1./TT+psi3));

subplot(2,1,2);
plot(t1,ub1,t1,ub2,t1,ub3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('t1','Fontsize',12);
legend('ub1(t1)','ub2(t1)','ub3(t1)');






`,cCode:"",defaultParams:{},displayName:"I1COSWS",tags:["chapter2","interference","phase"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Phase (waves)",url:"https://en.wikipedia.org/wiki/Phase_(waves)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"of",title:"of - I20ARRAYS\r",description:"I20ARRAYS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I20ARRAYS
# Interference pattern of N sources 

# Parameters: Opening a, Wavelength ? , Number of lines N.
# Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
# For comparison of maxima, the numerator is plotted separately.


Theta = np.arange(0, 0.5+0.001, 0.001)
Lamda = 0.0005
a = 0.1
aa = 0.2
N = 5
NN = 5
IA1 = (np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))/(N*np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2
y = np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2
y1 = np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2
IA2 = (np.sin(np.pi*NN*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))/(NN*np.sin(np.pi*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,IA1,Theta,y,Theta,y1)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IA1(	heta)', 'y(	heta)', 'y1(	heta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,IA2)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IA2(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I20ARRAYS
% Interference pattern of N sources 

% Parameters: Opening a, Wavelength ? , Number of lines N.
% Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
% For comparison of maxima, the numerator is plotted separately.

function I20ARRAYS;
Theta = (0:0.001:0.5);
Lamda = 0.0005;
a = 0.1;
aa = 0.2;
N = 5;
NN = 5;
IA1 = (sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta))./(N*sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)))).^2;
y = sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
y1 = sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
IA2 = (sin(pi*NN*(aa/Lamda)*sin(2*(pi/360)*Theta))./(NN*sin(pi*(aa/Lamda)*sin(2*(pi/360)*Theta)))).^2;

figure(1);
subplot(2,1,1);
plot(Theta,IA1,Theta,y,Theta,y1);
axis([0 0.5 0 1]);
xlabel('	heta');
legend('IA1(	heta)','y(	heta)','y1(	heta)');

subplot(2,1,2);
plot(Theta,IA2);
axis([0 0.5 0 1]);
xlabel('	heta');
legend('IA2(	heta)');
`,cCode:"",defaultParams:{},displayName:"I20ARRAYS",tags:["chapter2","interference","wavelength","pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I21RANDS",title:"I21RANDS - I21RANDS\r",description:"I21RANDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I21RANDS

# Addition of exponential-functions with random angles

# The real part of the sum of exp i Theta is plotted.
f = np.arange(1, 100+1, 1)
N = f
k = np.arange(1, 1000+1, 1)
# i = np.sqrt(-1)
Theta = rand(size(k))*2*np.pi
for ind in range(len(f)):
    y(ind)=0
    for k=1:N(ind)
        y(ind) = y(ind) + np.exp(i*(Theta(k)))
    y(ind) = (1/N(ind))*(y(ind))
fig = plt.figure(1)

plt.plot(f,real(y)
)
plt.xlabel('f')
plt.legend(['real(y(f))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I21RANDS

% Addition of exponential-functions with random angles
function I21RANDS;
% The real part of the sum of exp i Theta is plotted.
f = (1:1:100);
N = f;
k = (1:1:1000);
% i = sqrt(-1);

Theta = rand(size(k)).*2*pi;

for ind=1:length(f)
    y(ind)=0;
    for k=1:N(ind)
        y(ind) = y(ind) + exp(i*(Theta(k)));
    end;
    y(ind) = (1/N(ind))*(y(ind));
end;
figure(1);
plot(f,real(y));
xlabel('f');
legend('real(y(f))');

`,cCode:"",defaultParams:{},displayName:"I21RANDS",tags:["chapter2","interference"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I2COSSUPS",title:"I2COSSUPS - I2COSSUPS\r",description:"I2COSSUPS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I2COSSUPS

# Superposition of two cosine waves, one having an optical path differnce ? with respect to the
# other. The sum is squared to result in the intensity.

# We are looking at a time instance and graphs are shown for six different path differences.


X = np.arange(0, 4+0.05, 0.05)
Lamda = 1
A = 1
t1 = 0.1
T = 1
delta1 = 0
delta2 = 0.1
delta3 = 0.2
delta4 = 0.3
delta5 = 0.4
delta6 = 0.5
u1 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta1)/Lamda)-(t1/T)))
u2 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta2)/Lamda)-(t1/T)))
u3 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta3)/Lamda)-(t1/T)))
u4 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta4)/Lamda)-(t1/T)))
u5 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta5)/Lamda)-(t1/T)))
u6 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta6)/Lamda)-(t1/T)))
fig = plt.figure(1)

plt.plot(X,u1**2,X,u2**2,X,u3**2,X,u4**2,X,u5**2,X,u6**2)

plt.xlim(0, 4)
plt.ylim(0, 4)
;                  # PLOTS LIMITS                    
xlabel('x','Fontsize',12)
title('Figure 1','FontSize',12)
plt.legend(['(u1(x))^2', '(u2(x))^2', '(u3(x))^2', '(u4(x))^2', '(u5(x))^2', '(u6(x))^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I2COSSUPS

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at a time instance and graphs are shown for six different path differences.

function I2COSSUPS;

X = (0:0.05:4);
Lamda = 1;
A = 1;
t1 = 0.1;
T = 1;
delta1 = 0;
delta2 = 0.1;
delta3 = 0.2;
delta4 = 0.3;
delta5 = 0.4;
delta6 = 0.5;

u1 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta1)/Lamda)-(t1/T)));
u2 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta2)/Lamda)-(t1/T)));
u3 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta3)/Lamda)-(t1/T)));
u4 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta4)/Lamda)-(t1/T)));
u5 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta5)/Lamda)-(t1/T)));
u6 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta6)/Lamda)-(t1/T)));

figure(1);
plot(X,u1.^2,X,u2.^2,X,u3.^2,X,u4.^2,X,u5.^2,X,u6.^2);
axis([0 4 0 4]);                  % PLOTS LIMITS                    
xlabel('x','Fontsize',12);
title('Figure 1','FontSize',12);
legend('(u1(x))^2','(u2(x))^2','(u3(x))^2','(u4(x))^2','(u5(x))^2','(u6(x))^2');`,cCode:"",defaultParams:{},displayName:"I2COSSUPS",tags:["chapter2","interference","intensity"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I3COSGRA",title:"I3COSGRA - I3COSGRA\r",description:"I3COSGRA\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# I3COSGRA

# Superposition of two cosine waves, one having an optical path differnce ? with respect to the
# other. The sum is squared to result in the intensity.

# We are looking at the time dependence, the graphs are plots in space x and time t.
# Period T, path difference ? , wavelength ?.


# 1. Graph for optical path difference corresponding to a maximum
Lamda = 1
A = 1
N = 15
T = 1
Delta1 = 1
i = (0:1:N)
j = (0:1:N)
x = -0.2 + 0.05*i
t1 = -0.2 + 0.05*j
for r in range(len(x)):
    for c in range(len(t1)):
        uc(r,c) = ((2*A*np.cos(2*np.pi*(Delta1/(2*Lamda))))*(np.cos(2*np.pi*(x(r)/Lamda-t1(c)/T)-2*np.pi*(Delta1/(2*Lamda)))))**2
M = uc
fig = plt.figure(1)

plt.subplot(2, 1, 1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
# 2. Graph for optical path difference corresponding to a minimum
N = 40
i = (0:1:N)
j = (0:1:N)
xx = -0.2+ 0.04*i
t1 = -0.2 + 0.02*j
Delta2 = 0.5
T = 1
for r in range(len(xx)):
    for c in range(len(t1)):
        ud(r,c) = ((2*A*np.cos(2*np.pi*(Delta2/(2*Lamda))))*(np.cos(2*np.pi*(xx(r)/Lamda-t1(c)/T)-2*np.pi*(Delta2/(2*Lamda)))))**2
MM = ud
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))
    ax.plot_surface(X, Y, MM, cmap='viridis')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I3COSGRA

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at the time dependence, the graphs are plots in space x and time t.
% Period T, path difference ? , wavelength ?.

function I3COSGRA;
% 1. Graph for optical path difference corresponding to a maximum
Lamda = 1;
A = 1;
N = 15;
T = 1;
Delta1 = 1;

i = (0:1:N);
j = (0:1:N);
x = -0.2 + 0.05*i;
t1 = -0.2 + 0.05*j;

for r=1:length(x);
    for c=1:length(t1);
        uc(r,c) = ((2*A*cos(2*pi*(Delta1/(2*Lamda))))*(cos(2*pi*(x(r)/Lamda-t1(c)/T)-2*pi*(Delta1/(2*Lamda)))))^2;
    end;
end;

M = uc;

figure(1);
subplot(2,1,1);
mesh(M);

% 2. Graph for optical path difference corresponding to a minimum
N = 40;
i = (0:1:N);
j = (0:1:N);

xx = -0.2+ 0.04*i;
t1 = -0.2 + 0.02*j;
Delta2 = 0.5;
T = 1;

for r=1:length(xx);
    for c=1:length(t1);
        ud(r,c) = ((2*A*cos(2*pi*(Delta2/(2*Lamda))))*(cos(2*pi*(xx(r)/Lamda-t1(c)/T)-2*pi*(Delta2/(2*Lamda)))))^2;
    end;
end;
MM = ud;

subplot(2,1,2);
mesh(MM);`,cCode:"",defaultParams:{},displayName:"I3COSGRA",tags:["chapter2","interference","wavelength","intensity","3d-visualization"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I4COSINTS",title:"I4COSINTS - I4COSINTS\r",description:"I4COSINTS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I4COSINTS
# Intensity in real and complex notation
# Real notation for maxima

x = np.arange(0, 4+0.01, 0.01)
Lamda = 1
A = 1
t = 1
T = 10
Delta = 0
u = A*np.cos(2*np.pi*(x/Lamda-t/T)) +A*np.cos(2*np.pi*((x-Delta)/Lamda-t/T))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(x,u)

plt.xlim(0, 4)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['u(x)'])
plt.subplot(3, 2, 2)

plt.plot(x,u**2)

plt.xlim(0, 4)
plt.ylim(0, 4)

plt.xlabel('x')
plt.legend(['(u(x))^2'])
# The time average of the intensity is 1/2 of the maximum value 4
t = 1
# Complex notation
# i = np.sqrt(-1)
z = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-Delta)/Lamda-t/T))
# The real part of z(x) is real(z(x))
plt.subplot(3, 2, 3)

plt.plot(x,real(z)
)
plt.xlim(0, 4)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['real(z(x))'])
# The real part squared is (real(z(x)))**2

plt.subplot(3, 2, 4)

plt.plot(x,real(z)
**2)
plt.xlim(0, 4)
plt.ylim(0, 4)

plt.xlabel('x')
plt.legend(['real(z(x))^2'])
# When taking z time z*, the time dependence is automatically eliminated and we get
# twice of the average value.

plt.subplot(3, 2, 5)

plt.plot(x,z*conj(z)
)
plt.xlim(0, 4)
plt.ylim(3.995, 4.005)

plt.xlabel('x')
plt.legend(['z(x)*conj(z(x))'])
# Complex notation and dependance on the optical path difference DeltaDelta
x = 1
DeltaDelta = np.arange(0, 5+0.01, 0.01)
zz = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-DeltaDelta)/Lamda-t/T))
plt.subplot(3, 2, 6)

plt.plot(DeltaDelta,zz*conj(zz)
)
plt.xlim(0, 6)
plt.ylim(0, 4)

plt.xlabel('deltadelta')
plt.legend(['zz(deltadelta)*conj(zz(deltadelta))'])
# We see the "fringe pattern"
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I4COSINTS
% Intensity in real and complex notation
% Real notation for maxima
function I4COSINTS;
x = (0:0.01:4);
Lamda = 1;
A = 1;
t = 1;
T = 10;
Delta = 0;
u = A*cos(2*pi*(x/Lamda-t/T)) +A*cos(2*pi*((x-Delta)/Lamda-t/T));

figure(1);
subplot(3,2,1);
plot(x,u);
axis([0 4 -2 2]);
xlabel('x');
legend('u(x)');

subplot(3,2,2);
plot(x,u.^2);
axis([0 4 0 4]);
xlabel('x');
legend('(u(x))^2');


% The time average of the intensity is 1/2 of the maximum value 4
t = 1;

% Complex notation
% i = sqrt(-1)
z = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-Delta)/Lamda-t/T));
% The real part of z(x) is real(z(x))
subplot(3,2,3);
plot(x,real(z));
axis([0 4 -2 2]);
xlabel('x');
legend('real(z(x))');

% The real part squared is (real(z(x)))^2

subplot(3,2,4);
plot(x,real(z).^2);
axis([0 4 0 4]);
xlabel('x');
legend('real(z(x))^2');

% When taking z time z*, the time dependence is automatically eliminated and we get
% twice of the average value.

subplot(3,2,5);
plot(x,z.*conj(z));
axis([0 4 3.995 4.005]);
xlabel('x');
legend('z(x)*conj(z(x))');

% Complex notation and dependance on the optical path difference DeltaDelta
x = 1;
DeltaDelta = (0:0.01:5);
zz = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-DeltaDelta)/Lamda-t/T));

subplot(3,2,6);
plot(DeltaDelta,zz.*conj(zz));
axis([0 6 0 4]);
xlabel('deltadelta');
legend('zz(deltadelta)*conj(zz(deltadelta))');
% We see the "fringe pattern"`,cCode:"",defaultParams:{},displayName:"I4COSINTS",tags:["chapter2","interference","intensity","fringe-pattern","pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I5YOUNGS",title:"I5YOUNGS - I5YOUNGS\r",description:"I5YOUNGS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I5YOUNGS
# Young's Experiment


Con = 1
Lamda = 0.0005
a = 0.4
X = 4000
Y = np.arange(-10, 10+0.1, 0.1); # All length in mm
I = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I5YOUNGS
% Young's Experiment

function I5YOUNGS;

Con = 1;
Lamda = 0.0005;
a = 0.4;
X = 4000;
Y = (-10:0.1:10); % All length in mm
I = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');
`,cCode:"",defaultParams:{},displayName:"I5YOUNGS",tags:["chapter2","interference"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I6LOYDS",title:"I6LOYDS - I6LOYDS\r",description:"I6LOYDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I6LOYDS
# Lloyd's mirror experiment


Con = 1
# All length in mm
a = 0.4
X = 4000
Lamda = 0.0005
Y = np.arange(-10, 10+0.1, 0.1)
I = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)+np.pi/2))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
# considered fixed.
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I6LOYDS
% Lloyd's mirror experiment

function I6LOYDS;
Con = 1;
% All length in mm
a = 0.4;
X = 4000;
Lamda = 0.0005;
Y = (-10:0.1:10);

I = Con*(cos(pi*((Y*a)/(Lamda*X)+pi/2)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

% We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.`,cCode:"",defaultParams:{},displayName:"I6LOYDS",tags:["chapter2","interference","mirror"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I7FREMIRS",title:"I7FREMIRS - I7FREMIRS\r",description:"I7FREMIRS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I7FREMIRS
# Fresnel's mirror

# 1. Fresnel's Mirror
# Y, c, f, b, and ? in mm, ? in Radc
# is about b for calculation of X = c + f
# All length in mm
Con = 1
b = 1000
f = 5000
Beta = 0.0002
Lamda = 0.0005
c = b * np.cos(Beta)
Y = np.arange(-10, 10+0.1, 0.1)
I = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I7FREMIRS
% Fresnel's mirror
function I7FREMIRS;
% 1. Fresnel's Mirror
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b * cos(Beta);
Y = (-10:0.1:10);
I = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

`,cCode:"",defaultParams:{},displayName:"I7FREMIRS",tags:["chapter2","interference","mirror"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I8FRYOLOS",title:"I8FRYOLOS - I8FRYOLOS\r",description:"I8FRYOLOS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I8FRYOLOS
# Fresnel's mirror, Young's double slit, and Lloyd's mirror,

# 1. Fresnel's Mirror  
# Y, c, f, b, and ? in mm, ? in Radc
# is about b for calculation of X = c + f
# All length in mm
Con = 1
b = 1000
f = 5000
Beta = 0.0002
Lamda = 0.0005
c = b*np.cos(Beta)
Y = np.arange(-10, 10+0.1, 0.1)
IF = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)
# 2. Young's Experiment
a = 0.4
X = 4000
IY = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)
# 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(np.cos(np.pi*((Y*a)/(Lamda*X))+np.pi/2)**2)
fig = plt.figure(1)

plt.plot(Y,IF,Y,IY,Y,IL)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['IF(Y)', 'IY(Y)', 'IL(Y)'])
# We see that at Y=0 Young has a maximum, Lloyd a minimum
# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
# considered fixed.

# For Fresnel, a,b are fixed, position of fringes changes with ? and ?.



# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I8FRYOLOS
% Fresnel's mirror, Young's double slit, and Lloyd's mirror,
function I8FRYOLOS;
% 1. Fresnel's Mirror  
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b*cos(Beta);
Y = (-10:0.1:10);

IF = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

% 2. Young's Experiment
a = 0.4;
X = 4000;
IY = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

% 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(cos(pi*((Y*a)/(Lamda*X))+pi/2).^2);

figure(1);
plot(Y,IF,Y,IY,Y,IL);
axis([-10 10 0 1]);
xlabel('Y');
legend('IF(Y)','IY(Y)','IL(Y)');


% We see that at Y=0 Young has a maximum, Lloyd a minimum
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.

% For Fresnel, a,b are fixed, position of fringes changes with ? and ?.


`,cCode:"",defaultParams:{},displayName:"I8FRYOLOS",tags:["chapter2","interference","mirror","slit","phase","fringe-pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Phase (waves)",url:"https://en.wikipedia.org/wiki/Phase_(waves)"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]},{id:"I9PLANS",title:"I9PLANS - I9PLANS\r",description:"I9PLANS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I9PLANS

# Fringes of plane parallel plate produced by two waves


# 1.For normal incidence depending on D
Lamda = 0.0005
n2 = 1.5
D = np.arange(-0.00051, 0.005+0.00001, 0.00001)
I1 = np.cos((2*np.pi*D*n2)/Lamda + np.pi/2)**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(D,I1)

plt.xlim(-0.001, 0.005)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['I1(D)'])
# 2. For normal incidence depending on Lamda

LamdaLamda = np.arange(0.05, 0.5+0.001, 0.001)
DD = 0.05
I2 = np.cos((2*np.pi*DD*(n2))/LamdaLamda + np.pi/2)**2
plt.subplot(2, 1, 2)

plt.plot(LamdaLamda,I2)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('lambdalambda')
plt.legend(['I2(lambdalambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I9PLANS

% Fringes of plane parallel plate produced by two waves

function I9PLANS;
% 1.For normal incidence depending on D
Lamda = 0.0005;
n2 = 1.5;
D = (-0.00051:0.00001:0.005);
I1 = cos((2*pi*D*n2)/Lamda + pi/2).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([-0.001 0.005 0 1]);
xlabel('D');
legend('I1(D)');

% 2. For normal incidence depending on Lamda

LamdaLamda = (0.05:0.001:0.5);
DD = 0.05;
I2 = cos((2*pi*DD*(n2))./LamdaLamda + pi/2).^2;

subplot(2,1,2);
plot(LamdaLamda,I2);
axis([0 0.5 0 1]);
xlabel('lambdalambda');
legend('I2(lambdalambda)');`,cCode:"",defaultParams:{},displayName:"I9PLANS",tags:["chapter2","interference","fringe-pattern"],wikipediaLinks:[{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Young's double-slit experiment",url:"https://en.wikipedia.org/wiki/Double-slit_experiment"}]}],C1=[{id:"D10FAGRDSLS",title:"D10FAGRDSLS - D10FAGRDSLS\r",description:"D10FAGRDSLS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D10FAGRDSLS
# Diffraction on an amplitude grating at normal incidence.
# Width of openings d, center to center distance of strips a, wavelength ????, distance
# from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N.
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1.
# P(A) is the product of interference and diffraction factor.


Y = np.arange(-800, 800+0.1, 0.1)
X = 4000
d = 0.02
Lamda = 0.0005
a = 0.2
N = 2
D = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2
I = (np.sin(np.pi*(a/Lamda)*(Y/X)*N)/(N*np.sin(np.pi*(a/Lamda)*(Y/X))))**2
P = D*I
fig = plt.figure(1)

plt.plot(Y,D,Y,P)

plt.xlim(-600, 600)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['D(Y)', 'P(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D10FAGRDSLS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1.
% P(A) is the product of interference and diffraction factor.

function D10FAGRDSLS;

Y = (-800:0.1:800);
X = 4000;
d = 0.02;
Lamda = 0.0005;
a = 0.2;
N = 2;
D = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;
I = (sin(pi*(a/Lamda)*(Y/X)*N)./(N*sin(pi*(a/Lamda)*(Y/X)))).^2;
P = D.*I;

figure(1);
plot(Y,D,Y,P);
axis([-600 600 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('D(Y)','P(Y)');

`,cCode:"",defaultParams:{},displayName:"D10FAGRDSLS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D11FAGRANGS",title:"D11FAGRANGS - D11FAGRANGS\r",description:"D11FAGRANGS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D11FAGRANGS
# Diffraction on an amplitude grating. Non normal incidence
# with angle ? with respect to the normal.
# Width of grating openings d, center to center distance of strips a,
# wavelength ?, distance from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N .
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1. The numerator is plotted
# separately to show where the main maxima are located (0/0).
# P(A) is the product of interference and diffraction factor.

# The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
d = 0.001
Lamda = 0.0005
a = 0.002
N = 6
Psi = -0.2
D = (np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))/(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi))))**2
I = (np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi))*N)/(N*np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))))**2
P = D*I
fig = plt.figure(1)

plt.plot(Theta,I,Theta,D,Theta,P)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I(	heta)', 'D(	heta)', 'P(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D11FAGRANGS
% Diffraction on an amplitude grating. Non normal incidence
% with angle ? with respect to the normal.
% Width of grating openings d, center to center distance of strips a,
% wavelength ?, distance from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N .
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted
% separately to show where the main maxima are located (0/0).
% P(A) is the product of interference and diffraction factor.

% The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2

function D11FAGRANGS;

Theta = (-0.5001:0.0002:0.5);
d = 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;
Psi = -0.2;

D = (sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))./(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))).^2;
I = (sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))*N)./(N*sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))))).^2;
P = D.*I;


figure(1);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I(	heta)','D(	heta)','P(	heta)');
`,cCode:"",defaultParams:{},displayName:"D11FAGRANGS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D12FAELGRS",title:"D12FAELGRS - D12FAELGRS\r",description:"D12FAELGRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D12FAELGRS

# Diffraction on an echelette grating.
# The graphs for three different values of ?.

# D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
# The angle in radians of the echelle is ?.Diffraction angle ? in radians,
# wavelength ?, width of openings d, and separation of openings a in mm.
# N is the number of lines.
# All parameters are defined globally above the graph.


Theta = np.arange(-1.301, 1.3+0.002, 0.002)
Epsilon1 = -0.25
Epsilon2 = 0.25
Epsilon3 = -0.52
d = 37
Lamda = 10
a = 40
N = 20
D1 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon1))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon1)))**2
D2 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon2))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon2)))**2
D3 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon3))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon3)))**2
I = (np.sin(np.pi*a*np.sin(Theta)*N/Lamda)/(N*np.sin(np.pi*a*np.sin(Theta)/Lamda)))**2
P1 = D1*I
P2 = D2*I
P3 = D3*I
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(Theta,D1,Theta,I,Theta,P1)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['D1(	heta)', 'I(	heta)', 'P1(	heta)'])
plt.subplot(3, 1, 2)

plt.plot(Theta,D2,Theta,I,Theta,P2)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['D2(	heta)', 'I(	heta)', 'P2(	heta)'])
plt.subplot(3, 1, 3)

plt.plot(Theta,D3,Theta,I,Theta,P3)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['D3(	heta)', 'I(	heta)', 'P3(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D12FAELGRS

% Diffraction on an echelette grating.
% The graphs for three different values of ?.

% D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
% The angle in radians of the echelle is ?.Diffraction angle ? in radians,
% wavelength ?, width of openings d, and separation of openings a in mm.
% N is the number of lines.
% All parameters are defined globally above the graph.

function D12FAELGRS;

Theta = (-1.301:0.002:1.3);
Epsilon1 = -0.25;
Epsilon2 = 0.25;
Epsilon3 = -0.52;

d = 37;
Lamda = 10;
a = 40;
N = 20;

D1 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon1))./(pi*(d/Lamda)*sin(Theta+Epsilon1))).^2;
D2 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon2))./(pi*(d/Lamda)*sin(Theta+Epsilon2))).^2;
D3 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon3))./(pi*(d/Lamda)*sin(Theta+Epsilon3))).^2;

I = (sin(pi*a*sin(Theta)*N/Lamda)./(N*sin(pi*a*sin(Theta)/Lamda))).^2;

P1 = D1.*I;
P2 = D2.*I;
P3 = D3.*I;

figure(1);
subplot(3,1,1);
plot(Theta,D1,Theta,I,Theta,P1);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('D1(	heta)','I(	heta)','P1(	heta)');


subplot(3,1,2);
plot(Theta,D2,Theta,I,Theta,P2);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('D2(	heta)','I(	heta)','P2(	heta)');


subplot(3,1,3);
plot(Theta,D3,Theta,I,Theta,P3);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('D3(	heta)','I(	heta)','P3(	heta)');

`,cCode:"",defaultParams:{},displayName:"D12FAELGRS",tags:["chapter3","diffraction","grating","wavelength"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D13FAGRRES",title:"D13FAGRRES - D13FAGRRES\r",description:"D13FAGRRES\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D13FAGRRES
# Two diffraction pattern of a grating to study resolution.

# Diffraction on an amplitude grating with width of openings d, center to center
# distance of strips a, wavelength ?, distance from grating to screen X and
# coordinate on screen Y.
# All distances and wavelength in mm, number of lines N. Normal incidence.
# All parameters are globally defined above the graph.
# P(A) is the product of interference and diffraction factor.
# The resolution is given as ?/?? = N and introduced in the formulas of the
# second grating.


Theta = np.arange(-0.7001, 0.7+0.0002, 0.0002)
d = 0.0001
Lamda = 0.0005
LamdaLamda = 0.0006
a = 0.002
N = 6
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
DD = (np.sin(np.pi*(d/LamdaLamda)*np.sin(Theta))/(np.pi*(d/LamdaLamda)*np.sin(Theta)))**2
I= (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
II= (np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta))))**2
P = D*I
PP = DD*II
fig = plt.figure(1)

plt.plot(Theta,P,Theta,PP)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['P(	heta)', 'PP(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D13FAGRRES
% Two diffraction pattern of a grating to study resolution.

% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and
% coordinate on screen Y.
% All distances and wavelength in mm, number of lines N. Normal incidence.
% All parameters are globally defined above the graph.
% P(A) is the product of interference and diffraction factor.
% The resolution is given as ?/?? = N and introduced in the formulas of the
% second grating.

function D13FAGRRES;

Theta = (-0.7001:0.0002:0.7);
d = 0.0001;
Lamda = 0.0005;
LamdaLamda = 0.0006;
a = 0.002;
N = 6;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
DD = (sin(pi*(d/LamdaLamda)*sin(Theta))./(pi*(d/LamdaLamda)*sin(Theta))).^2;

I= (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II= (sin(pi*(a/LamdaLamda)*sin(Theta)*N)./(N*sin(pi*(a/LamdaLamda)*sin(Theta)))).^2;

P = D.*I;
PP = DD.*II;

figure(1);
plot(Theta,P,Theta,PP);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('P(	heta)','PP(	heta)');

`,cCode:"",defaultParams:{},displayName:"D13FAGRRES",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude","pattern"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D14FAGRRES3DS",title:"D14FAGRRES3DS - D14FAGRRES3DS\r",description:"D14FAGRRES3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D14FAGRRES3DS
# Determination of the wavelength difference for two peaks,
# resolved according to the Rayleigh criterion

# 1. Determination of Rayleigh distantance.
# We call the distance between the maxima b. Radius of apertures a, distance
# between the apertures d, coordinate on the observation screen R,
# wavelength ?, and distance from aperture to screen X.


a = 0.05; X = 4000; R=np.arange(0, 50+0.1, 0.1); b = 24.5;%?
Lamda = 0.0005
g1=(besselj(1,(2*np.pi*a*R/(X*Lamda)))/(2*np.pi*a*R/(X*Lamda)))**2
gg1=(besselj(1,(2*np.pi*a*(R-b)/(X*Lamda)))/(2*np.pi*a*(R-b)/(X*Lamda)))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(R,g1,R,gg1)

plt.xlim(0, 50)
plt.ylim(0, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['g1(R)', 'gg1(R)'])
# 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000
N = 40
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
g2 = zeros(nx,ny)
gg2 = zeros(nx,ny)
M = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -30 + 2.0001*r
            Yi = -30 + 2.0001*c
            RR = np.sqrt(Xi**2+Yi**2)
            g2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2
            RR = np.sqrt(Xi**2+(Yi-b)**2)
            gg2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2
M = g2 + gg2
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
# PLOTS LIMITS                    
axis([0 40 0 40 0 0.3])
# 3. Calculation of wavelength difference corresponding to b
# The diffraction angle is calculated from b/X = ??
# The grating is made of round apertures of diameter a and spaced at
# distance d.
# From the grating formula we have for the wavelength difference
# ??=d?? or ?? = (d/X)b.
# # For d := .1
# ?? := d*b/X
# ?? = 6.125 * 10 ** (-4)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D14FAGRRES3DS
% Determination of the wavelength difference for two peaks,
% resolved according to the Rayleigh criterion

% 1. Determination of Rayleigh distantance.
% We call the distance between the maxima b. Radius of apertures a, distance
% between the apertures d, coordinate on the observation screen R,
% wavelength ?, and distance from aperture to screen X.

function D14FAGRRES3DS;

a = 0.05; X = 4000; R=(0:0.1:50); b = 24.5;%?
Lamda = 0.0005;
g1=(besselj(1,(2*pi*a*R/(X*Lamda)))./(2*pi*a*R/(X*Lamda))).^2;
gg1=(besselj(1,(2*pi*a*(R-b)/(X*Lamda)))./(2*pi*a*(R-b)/(X*Lamda))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1,R,gg1);
axis([0 50 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('g1(R)','gg1(R)');


% 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000;
N = 40;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
g2 = zeros(nx,ny);
gg2 = zeros(nx,ny);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -30 + 2.0001*r; 
            Yi = -30 + 2.0001*c;
            RR = sqrt(Xi^2+Yi^2);               
            g2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
            RR = sqrt(Xi^2+(Yi-b)^2);
            gg2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
        end;
end;
M = g2 + gg2;
subplot(2,1,2);
mesh(M);
                 % PLOTS LIMITS                    
axis([0 40 0 40 0 0.3]);


% 3. Calculation of wavelength difference corresponding to b
% The diffraction angle is calculated from b/X = ??
% The grating is made of round apertures of diameter a and spaced at
% distance d.
% From the grating formula we have for the wavelength difference
% ??=d?? or ?? = (d/X)b.
% 
% For d := .1
%            ?? := d*b/X
%                       ?? = 6.125 * 10 ^ (-4)`,cCode:"",defaultParams:{},displayName:"D14FAGRRES3DS",tags:["chapter3","diffraction","grating","aperture","wavelength","pattern","3d-visualization"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D15FABAGRS",title:"D15FABAGRS - D15FABAGRS\r",description:"D15FABAGRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D15FABAGRS

# Babinets Theorem. Diffraction on two amplitude gratings, one with width of
# openings d1, the other with width of opening d2, and both have center to center
# distance of strips a = d1 +d2.


# Diffraction pattern of the two complementary screens, one is a grating of width
# of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
# Wavelength ?, distance from gratings to screen X and coordinate on
# screen Y. All distances and wavelength in mm, both have number of lines N .Normal
# incidence.

# D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
# P(A) is the product of Interference and diffraction factor.

# We see that the intensity of the diffraction peaks is different for the two
# complementarypattern, but the position of the peaks is the same, and
# that is what Babinets Principle tells us.


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
Lamda = 0.0005
N = 6
d1 = 0.002
d2 = 0.001
a = d1 + d2
D1 = (np.sin(np.pi*(d1/Lamda)*np.sin(Theta))/(np.pi*(d1/Lamda)*np.sin(Theta)))**2
D2 = (np.sin(np.pi*(d2/Lamda)*np.sin(Theta))/(np.pi*(d2/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
P1 = D1*I
P2 = D2*I
fig = plt.figure(1)

plt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['P1(	heta)', 'P2(	heta)', 'D1(	heta)', 'D2(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D15FABAGRS

% Babinets Theorem. Diffraction on two amplitude gratings, one with width of
% openings d1, the other with width of opening d2, and both have center to center
% distance of strips a = d1 +d2.


% Diffraction pattern of the two complementary screens, one is a grating of width
% of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
% Wavelength ?, distance from gratings to screen X and coordinate on
% screen Y. All distances and wavelength in mm, both have number of lines N .Normal
% incidence.

% D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
% P(A) is the product of Interference and diffraction factor.

% We see that the intensity of the diffraction peaks is different for the two
% complementarypattern, but the position of the peaks is the same, and
% that is what Babinets Principle tells us.

function D15FABAGRS;

Theta = (-0.5001:0.0002:0.5); 
Lamda = 0.0005;
N = 6;

d1 = 0.002;
d2 = 0.001;
a = d1 + d2;


D1 = (sin(pi*(d1/Lamda)*sin(Theta))./(pi*(d1/Lamda)*sin(Theta))).^2;
D2 = (sin(pi*(d2/Lamda)*sin(Theta))./(pi*(d2/Lamda)*sin(Theta))).^2;

I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D1.*I;
P2 = D2.*I;

figure(1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('P1(	heta)','P2(	heta)','D1(	heta)','D2(	heta)');
`,cCode:"",defaultParams:{},displayName:"D15FABAGRS",tags:["chapter3","diffraction","grating","interference","wavelength","intensity","amplitude","pattern"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D16FAGRRANS",title:"D16FAGRRANS - D16FAGRRANS\r",description:"D16FAGRRANS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D16FAGRRANS
# One dimensional periodic and random arrangement for interference and
# diffraction
# Diffraction on an amplitude grating with width of openings d, center to center
# distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
# screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor
# I(?) is the interference factor, normalized to 1.
# P1(?) is the product of interference and diffraction factor.
# P2(?) is for the case that the lines are not periodic and the interfernce factor averages
# to a constant.


Theta = np.arange(-1.001, 1.001+0.0011, 0.0011)
d = 0.002
Lamda = 0.0005
a = 0.008
N = 20
C = 0.5
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
P1 = D*I
P2 = D*C
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Theta,P1)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['P1(	heta)'])
plt.subplot(1, 2, 2)

plt.plot(Theta,P2)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 0.5)

plt.xlabel('	heta')
plt.legend(['P2(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D16FAGRRANS
% One dimensional periodic and random arrangement for interference and
% diffraction
% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
% screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor
% I(?) is the interference factor, normalized to 1.
% P1(?) is the product of interference and diffraction factor.
% P2(?) is for the case that the lines are not periodic and the interfernce factor averages
% to a constant.

function D16FAGRRANS;

Theta = (-1.001:0.0011:1.001);

d = 0.002;
Lamda = 0.0005;
a = 0.008;
N = 20;
C = 0.5;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D.*I;
P2 = D.*C;

figure(1);
subplot(1,2,1);
plot(Theta,P1);
axis([-1.5 1.5 0 1]);
xlabel('	heta');
legend('P1(	heta)');

subplot(1,2,2);
plot(Theta,P2);
axis([-1.5 1.5 0 0.5]);
xlabel('	heta');
legend('P2(	heta)');

`,cCode:"",defaultParams:{},displayName:"D16FAGRRANS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D17ARAYRA3DS",title:"D17ARAYRA3DS - D17ARAYRA3DS\r",description:"D17ARAYRA3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D17ARAYRA3DS

# 3D Graph of diffraction pattern of a periodic array of
# rectangular apertures.
# In comparison the diffraction pattern of rectangular
# apertures in random array.

# 1. Periodic array


Lamda = 4
p = 6
d = 2
d1 =2
a1 = 4
a = 4
N = 30
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
M = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -2 + 0.20001*r
            Yj = -3 + 0.20001*c
            F = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*d1*Yj/(2*Lamda))/(2*np.pi*d1*Yj/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Xi*p/(2*Lamda))/(p*np.sin(2*np.pi*a*Xi/(2*Lamda))))**2)*((np.sin(2*np.pi*a1*Yj*p/(2*Lamda))/(p*np.sin(2*np.pi*a1*Yj/(2*Lamda))))**2)
            M(r,c) = F
fig = plt.figure(1)

plt.subplot(2, 1, 1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
axis([0 N 0 N 0 1])
plt.legend(['M'])

# 2. Random array

MM = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -2 + 0.20001*r
            Yj = -3 + 0.20001*c
            F1 = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Yj/(2*Lamda))/(2*np.pi*a*Yj/(2*Lamda)))**2)
            MM(r,c) = F1
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))
    ax.plot_surface(X, Y, MM, cmap='viridis')
axis([0 N 0 N 0 1])
plt.legend(['MM'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D17ARAYRA3DS

% 3D Graph of diffraction pattern of a periodic array of
% rectangular apertures.
% In comparison the diffraction pattern of rectangular
% apertures in random array.

% 1. Periodic array

function D17ARAYRA3DS;

Lamda = 4;
p = 6;
d = 2;
d1 =2;
a1 = 4;
a = 4;
N = 30;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*d1*Yj/(2*Lamda))./(2*pi*d1*Yj/(2*Lamda))).^2).*((sin(2*pi*a*Xi*p/(2*Lamda))./(p*sin(2*pi*a*Xi/(2*Lamda)))).^2).*((sin(2*pi*a1*Yj*p/(2*Lamda))./(p*sin(2*pi*a1*Yj/(2*Lamda)))).^2);
            M(r,c) = F;
        end;
end;



figure(1);
subplot(2,1,1);
mesh(M);               
axis([0 N 0 N 0 1]);
legend('M');

% 2. Random array

MM = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F1 = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*a*Yj/(2*Lamda))./(2*pi*a*Yj/(2*Lamda))).^2);
            MM(r,c) = F1;
        end;
end;

subplot(2,1,2);

mesh(MM);               
axis([0 N 0 N 0 1]);
legend('MM');`,cCode:"",defaultParams:{},displayName:"D17ARAYRA3DS",tags:["chapter3","diffraction","aperture","pattern","3d-visualization"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D18FEFNCS",title:"D18FEFNCS - D18FEFNCS\r",description:"D18FEFNCS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64


# D18FEFNCS
# Fresnel's Integrals C(Y) and S(Y).


Y = np.arange(0, 5+0.01, 0.01)
[t,cy]=ode45(@D18COS,Y,[0])
[t,sy]=ode45(@D18SIN,Y,[0])
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(t,cy)

plt.xlim(0, 6)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['C(Y)'])
plt.subplot(3, 2, 2)

plt.plot(t,sy)

plt.xlim(0, 6)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['S(Y)'])
plt.subplot(2, 1, 2)

plt.plot(t,cy,t,sy)

plt.xlim(0, 5)
plt.ylim(0, 0.8)

plt.xlabel('Y')
plt.legend(['C(Y)', 'S(Y)'])
Out=[np.cos((np.pi/2)*(T**2))]
Out=[np.sin((np.pi/2)*(T**2))]
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`
% D18FEFNCS
% Fresnel's Integrals C(Y) and S(Y).

function D18FEFNCS;


Y = (0:0.01:5);
[t,cy]=ode45(@D18COS,Y,[0]);
[t,sy]=ode45(@D18SIN,Y,[0]);



figure(1);
subplot(3,2,1);
plot(t,cy);
axis([0 6 0 1]);                
xlabel('Y');
legend('C(Y)');

subplot(3,2,2);
plot(t,sy);
axis([0 6 0 1]);                
xlabel('Y');
legend('S(Y)');


subplot(2,1,2);
plot(t,cy,t,sy);
axis([0 5 0 0.8]);                
xlabel('Y');
legend('C(Y)','S(Y)');

function Out=D18COS(T,X)
Out=[cos((pi/2)*(T^2))];

function Out=D18SIN(T,X)
Out=[sin((pi/2)*(T^2))];

`,cCode:"",defaultParams:{},displayName:"D18FEFNCS",tags:["chapter3","diffraction"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D19FESLITS",title:"D19FESLITS - D19FESLITS\r",description:"D19FESLITS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D19FESLITS
# Fresnel's Integrals for the calculation of the diffraction on a slit.
# All units in mm, globally definition of parameters.

Lamda =  5e-4
X = 4000
d = 1.5
Y = np.arange(0, 10+0.1, 0.1)
nY = length(Y)
for k=1:nY
   I(k) = (Cp(Y(k))-Cq(Y(k)))**2 + (Sp(Y(k))-Sq(Y(k)))**2 
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(0, 7.5)
plt.ylim(0, 2.5)

plt.xlabel('Y')
plt.legend(['I(Y)'])
Out = (Y + d/2)*(np.sqrt(2/(Lamda*X)))
Out = (Y - d/2)*(np.sqrt(2/(Lamda*X)))
Out = quad(@sinf,0,p(Y))
Out = quad(@sinf,0,q(Y))
Out = quad(@cosf,0,q(Y))
Out = quad(@cosf,0,p(Y))
Out = np.sin((np.pi/2)*(mu**2))
Out = np.cos((np.pi/2)*(mu**2))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D19FESLITS
% Fresnel's Integrals for the calculation of the diffraction on a slit.
% All units in mm, globally definition of parameters.
function D19FESLITS;
global Lamda X d;
Lamda =  5e-4;
X = 4000;
d = 1.5;

Y = (0:0.1:10);
nY = length(Y);
for k=1:nY;
   I(k) = (Cp(Y(k))-Cq(Y(k)))^2 + (Sp(Y(k))-Sq(Y(k)))^2 ;    
end;


figure(1);
plot(Y,I);
axis([0 7.5 0 2.5]);
xlabel('Y');
legend('I(Y)');






function Out=q(Y)
global Lamda X d;
Out = (Y + d/2).*(sqrt(2/(Lamda*X)));

function Out=p(Y)
global Lamda X d;
Out = (Y - d/2).*(sqrt(2/(Lamda*X)));


function Out=Sp(Y);
Out = quad(@sinf,0,p(Y));
function Out=Sq(Y);
Out = quad(@sinf,0,q(Y));
function Out=Cq(Y);
Out = quad(@cosf,0,q(Y));
function Out=Cp(Y);
Out = quad(@cosf,0,p(Y));

function Out=sinf(mu)
Out = sin((pi/2)*(mu.^2));
function Out=cosf(mu)
Out = cos((pi/2)*(mu.^2));`,cCode:"",defaultParams:{},displayName:"D19FESLITS",tags:["chapter3","diffraction","slit"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D1CIRS",title:"D1CIRS - D1CIRS\r",description:"D1CIRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D1CIRS

# Circular Opening, normalized intensity.
# When making the opening larger and larger,
# at the center is a change from minima to maxima
# to minima and so on.


po = 4000
Lamda = 0.0005
a=np.arange(0.1, 5+0.01, 0.01)
k =2*np.pi/Lamda
I=(Lamda**2)*power((np.sin((k*(power(a,2)))/(2*po))),2)
fig = plt.figure(1)

plt.plot(a,I)

plt.xlim(0, 5)
plt.ylim(0, 3*10**(-7))
;                  # PLOTS LIMITS                    
plt.xlabel('a')
plt.legend(['I(a)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D1CIRS

% Circular Opening, normalized intensity.
% When making the opening larger and larger,
% at the center is a change from minima to maxima
% to minima and so on.

function D1CIRS;
po = 4000;
Lamda = 0.0005;

a=(0.1:0.01:5);
k =2*pi/Lamda;


I=(Lamda^2)*power((sin((k*(power(a,2)))/(2*po))),2);

figure(1);
plot(a,I);
axis([0 5 0 3*10^(-7)]);                  % PLOTS LIMITS                    
xlabel('a');
legend('I(a)');

`,cCode:"",defaultParams:{},displayName:"D1CIRS",tags:["chapter3","diffraction","intensity"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D20FEEDGES",title:"D20FEEDGES - D20FEEDGES\r",description:"D20FEEDGES\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D20FEEDGES
# Fresnel's Integrals for the calculation of the diffractionon an edge.
# All units in mm, global definition of the parameters.

X = 4000
Lamda = 5*10**(-4)
Y = np.arange(-4, 15+0.05, 0.05)
# We treat the diffraction at an edge like diffraction on a large slit.
# One side is set at d = 0, the other at d = -inif. This translates into

# For p(Y) = - infinite  
# we have Cp(Y) = Sp(Y) = -0.5
# np.sqrt(2/(Lamda*X))=1

qY = Y*1
# We take q(Y) equal Y for scaling,

qY = Y
qY1 = np.arange(0, -4+-0.05, -0.05)
qY2 = np.arange(0.05, 15+0.05, 0.05)
[t,Cq1] = ode45(@C,qY1,[0])
[t,Cq2] = ode45(@C,qY2,[0])
Cq = [flipud(Cq1);Cq2]
[t,Sq1] = ode45(@S,qY1,[0])
[t,Sq2] = ode45(@S,qY2,[0])
Sq = [flipud(Sq1);Sq2]
IY = ((Cq-(-0.5))**2)+((Sq-(-0.5))**2)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,IY)

plt.xlim(-5, 15)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['IY(Y)'])
pY = Y-10
pY1 = np.arange(0, -14+-0.05, -0.05)
pY2 = np.arange(0.05, 5+0.05, 0.05)
[t,Cp1] = ode45(@C,pY1,[0])
[t,Cp2] = ode45(@C,pY2,[0])
Cp = [flipud(Cp1);Cp2]
[t,Sp1] = ode45(@S,pY1,[0])
[t,Sp2] = ode45(@S,pY2,[0])
Sp = [flipud(Sp1);Sp2]
IIY = ((Cq-Cp)**2)+((Sq-Sp)**2)
plt.subplot(2, 1, 2)

plt.plot(Y,IIY)

plt.xlim(-4, 16)
plt.ylim(0, 4)

plt.xlabel('Y')
plt.legend(['IIY(Y)'])
Out = np.sin((np.pi/2)*T**2)
Out = np.cos((np.pi/2)*T**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D20FEEDGES
% Fresnel's Integrals for the calculation of the diffractionon an edge.
% All units in mm, global definition of the parameters.
function D20FEEDGES;
X = 4000;
Lamda = 5*10^(-4);

Y = (-4:0.05:15);


% We treat the diffraction at an edge like diffraction on a large slit.
% One side is set at d = 0, the other at d = -inif. This translates into

% For p(Y) = - infinite  
%                         we have Cp(Y) = Sp(Y) = -0.5
% sqrt(2/(Lamda*X))=1

qY = Y*1;

% We take q(Y) equal Y for scaling,

qY = Y;
qY1 = (0:-0.05:-4);
qY2 = (0.05:0.05:15);

[t,Cq1] = ode45(@C,qY1,[0]);
[t,Cq2] = ode45(@C,qY2,[0]);
Cq = [flipud(Cq1);Cq2];
[t,Sq1] = ode45(@S,qY1,[0]);
[t,Sq2] = ode45(@S,qY2,[0]);
Sq = [flipud(Sq1);Sq2];

IY = ((Cq-(-0.5)).^2)+((Sq-(-0.5)).^2);

figure(1);
subplot(2,1,1);
plot(Y,IY);
axis([-5 15 0 3]);                
xlabel('Y');
legend('IY(Y)');


pY = Y-10;
pY1 = (0:-0.05:-14);
pY2 = (0.05:0.05:5);

[t,Cp1] = ode45(@C,pY1,[0]);
[t,Cp2] = ode45(@C,pY2,[0]);
Cp = [flipud(Cp1);Cp2];

[t,Sp1] = ode45(@S,pY1,[0]);
[t,Sp2] = ode45(@S,pY2,[0]);
Sp = [flipud(Sp1);Sp2];

IIY = ((Cq-Cp).^2)+((Sq-Sp).^2);

subplot(2,1,2);
plot(Y,IIY);
axis([-4 16 0 4]);                
xlabel('Y');
legend('IIY(Y)');


function Out=S(T,X)
Out = sin((pi/2)*T^2);
function Out=C(T,X)
Out = cos((pi/2)*T^2);



`,cCode:"",defaultParams:{},displayName:"D20FEEDGES",tags:["chapter3","diffraction","slit"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D2FASLITS",title:"D2FASLITS - D2FASLITS\r",description:"D2FASLITS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D2FASLITS
# Diffraction on a slit of width d at wavelength ????.
# X is distance: Slit-Screen,
# Y is coordinate on Screen.
# For small angles, Y/X is proportional to the diffraction angle ?.
# All length in mm.
# MCAD notice the singularity at 0. for the graph we get around it using
# the range Y = -100.1, -99.1 to 100.1
# Three slits with different width d1, d2, and d3


d1 = 0.08
d2 = 0.12
d3 = 0.16
X = 4000; # nu
Lamda = 0.0005
Theta = np.arange(-2, 2+0.01, 0.01)
I1 = (np.sin(np.pi*(d1/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d1/Lamda)*(2*np.pi/360)*Theta) )**2
I2 = (np.sin(np.pi*(d2/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d2/Lamda)*(2*np.pi/360)*Theta) )**2
I3 = (np.sin(np.pi*(d3/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d3/Lamda)*(2*np.pi/360)*Theta) )**2
fig = plt.figure(1)

plt.plot(Theta,I1,Theta,I2,Theta,I3)

plt.xlim(-1, 1)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)', 'I2(	heta)', 'I3(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D2FASLITS
% Diffraction on a slit of width d at wavelength ????.
% X is distance: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle ?.
% All length in mm.
% MCAD notice the singularity at 0. for the graph we get around it using
% the range Y = -100.1, -99.1 to 100.1
% Three slits with different width d1, d2, and d3

function D2FASLITS;
d1 = 0.08;
d2 = 0.12;
d3 = 0.16;
X = 4000; %nu
Lamda = 0.0005;
Theta = (-2:0.01:2);
I1 = (sin(pi*(d1/Lamda)*sin((2*pi/360)*Theta))./(pi*(d1/Lamda)*(2*pi/360)*Theta) ).^2;
I2 = (sin(pi*(d2/Lamda)*sin((2*pi/360)*Theta))./(pi*(d2/Lamda)*(2*pi/360)*Theta) ).^2;
I3 = (sin(pi*(d3/Lamda)*sin((2*pi/360)*Theta))./(pi*(d3/Lamda)*(2*pi/360)*Theta) ).^2;

figure(1);
plot(Theta,I1,Theta,I2,Theta,I3);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)','I2(	heta)','I3(	heta)');
`,cCode:"",defaultParams:{},displayName:"D2FASLITS",tags:["chapter3","diffraction","slit","wavelength"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D3FASLITEXS",title:"D3FASLITEXS - D3FASLITEXS\r",description:"D3FASLITEXS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D3FASLITEXS
# Study of side maxima and minima of the Slit
# Diffraction on a slit of width d and wavelength ?.
# X is distace: Slit-Screen,
# Y is coordinate on Screen.
# For small angles, Y/X is proportional to the diffraction angle.
# All length in mm.


Lamda = 0.0005
X = 4000
Y = np.arange(18, 150+1, 1)
d = 0.08
I1 = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2
fig = plt.figure(1)

plt.plot(Y,real(I1)
,Y,imag(I1))
plt.xlim(0, 150)
plt.ylim(0, 0.12)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['I1(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D3FASLITEXS
% Study of side maxima and minima of the Slit
% Diffraction on a slit of width d and wavelength ?.
% X is distace: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle.
% All length in mm.

function D3FASLITEXS;

Lamda = 0.0005;
X = 4000;
Y = (18:1:150);
d = 0.08;
I1 = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;


figure(1);
plot(Y,real(I1),Y,imag(I1));
axis([0 150 0 0.12]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('I1(Y)');
`,cCode:"",defaultParams:{},displayName:"D3FASLITEXS",tags:["chapter3","diffraction","slit","wavelength"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"of",title:"of - D4FASLITFTS\r",description:"D4FASLITFTS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64


# D4FASLITFTS
# Fourier transformation of step function of width 0 to d.
# The FT of the FT is also shown

I=np.arange(0, 255+1, 1)
d=20
X= (logical(I)>0) - (logical(I-d)>0)
fig = plt.figure(1)

plt.plot(I,real(X)
,I,imag(X))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('i')
plt.legend(['I1(Y)'])
C= fft(X)
N = length(C)
J= (0:1:N-1)
fig = plt.figure(2)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.plot(J/255,real(C)
/np.sqrt(N),J/255,-imag(C)/np.sqrt(N))
                # PLOTS LIMITS        
plt.xlim(0, 0.6)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(C)/sqrt(N)', '-imag(C)/sqrt(N)'])
Z = ifft(C)
fig = plt.figure(3)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.plot(I,real(Z)
,I,imag(Z))
plt.legend(['real(Z(I))', 'imag(Z(I))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`
% D4FASLITFTS
% Fourier transformation of step function of width 0 to d.
% The FT of the FT is also shown
function D4FASLITFTS;


I=(0:1:255);
d=20;

X= (logical(I)>0) - (logical(I-d)>0);

figure(1);
plot(I,real(X),I,imag(X));
axis([0 300 -0.5 1.5]);                  % PLOTS LIMITS                    
xlabel('i');
legend('I1(Y)');





C= fft(X);
N = length(C);
J= (0:1:N-1);
figure(2);
axis([0 0.6 0 1]);  

plot(J/255,real(C)/sqrt(N),J/255,-imag(C)/sqrt(N));
                % PLOTS LIMITS        
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(C)/sqrt(N)','-imag(C)/sqrt(N)');



Z = ifft(C);
figure(3);
axis([0 0.6 0 1]);  
plot(I,real(Z),I,imag(Z));
legend('real(Z(I))','imag(Z(I))');`,cCode:"",defaultParams:{},displayName:"D4FASLITFTS",tags:["chapter3","diffraction","slit","fourier-transform","fft"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D5FARECTS",title:"D5FARECTS - D5FARECTS The diffraction pattern of a rectangular aperture.\r",description:"D5FARECTS The diffraction pattern of a rectangular aperture.\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D5FARECTS The diffraction pattern of a rectangular aperture.
# The width in the x-direction is d, in y-direction a.
# One may look at the plot from different angles, change colors
# and make a "Contour Plot".


N = 40
D = 4
A = 2
Lamda = 4
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
Z = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -4 + 0.20001*r
            Yi = -4 + 0.20001*c
            Z(r,c)= power(np.sin(2*np.pi*D*(Xi/(2*Lamda)))/(2*np.pi*D*(Xi/(2*Lamda))),2)*power(np.sin(2*np.pi*A*(Yi/(2*Lamda)))/(2*np.pi*A*(Yi/(2*Lamda))),2)
F= Z
fig = plt.figure(1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(F.shape[1]), np.arange(F.shape[0]))
    ax.plot_surface(X, Y, F, cmap='viridis')
# PLOTS LIMITS                    
axis([0 40 0 40 0 1])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D5FARECTS The diffraction pattern of a rectangular aperture.
% The width in the x-direction is d, in y-direction a.
% One may look at the plot from different angles, change colors
% and make a "Contour Plot".

function D5FARECTS;

N = 40;
D = 4;
A = 2;
Lamda = 4;


I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -4 + 0.20001*r; 
            Yi = -4 + 0.20001*c;
            Z(r,c)= power(sin(2*pi*D*(Xi/(2*Lamda)))/(2*pi*D*(Xi/(2*Lamda))),2)*power(sin(2*pi*A*(Yi/(2*Lamda)))/(2*pi*A*(Yi/(2*Lamda))),2);
        end;
end;




F= Z;

figure(1);

mesh(F);



                 % PLOTS LIMITS                    
axis([0 40 0 40 0 1]);


`,cCode:"",defaultParams:{},displayName:"D5FARECTS The diffraction pattern of a rectangular aperture.",tags:["chapter3","diffraction","aperture","pattern","contour-plot","3d-visualization"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D6FARONS",title:"D6FARONS - D6FARONS\r",description:"D6FARONS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D6FARONS
# Diffraction on a round aperture of radius a, using wavelength ?.
# The graph is not normalized.
# X is distace:Slit-Screen,
# R is coordinate on Screen,
# All length in mm, parameters are globally defined above the graph.
# Three round apertures with different Radii a1, a2, and a3


R = np.arange(-10.01, 10.01+0.1, 0.1)
X = 1000
Lamda = 0.010
a1 = 1.5
a2 = 3
a3 = 6
I1 = (besselj(1,(2*np.pi*a1*R/(Lamda*X)))/(2*np.pi*a1*R/(Lamda*X)))**2
I2 = (besselj(1,(2*np.pi*a2*R/(Lamda*X)))/(2*np.pi*a2*R/(Lamda*X)))**2
I3 = (besselj(1,(2*np.pi*a3*R/(Lamda*X)))/(2*np.pi*a3*R/(Lamda*X)))**2
fig = plt.figure(1)

plt.plot(R,I1,R,I2,R,I3)

plt.xlim(-15, 10)
plt.ylim(0, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['I1(R)', 'I2(R)', 'I3(R)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D6FARONS
% Diffraction on a round aperture of radius a, using wavelength ?.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.
% Three round apertures with different Radii a1, a2, and a3

function D6FARONS;

R = (-10.01:0.1:10.01);
X = 1000;
Lamda = 0.010;
a1 = 1.5;
a2 = 3;
a3 = 6;

I1 = (besselj(1,(2*pi*a1*R/(Lamda*X)))./(2*pi*a1*R/(Lamda*X))).^2;
I2 = (besselj(1,(2*pi*a2*R/(Lamda*X)))./(2*pi*a2*R/(Lamda*X))).^2;
I3 = (besselj(1,(2*pi*a3*R/(Lamda*X)))./(2*pi*a3*R/(Lamda*X))).^2;

figure(1);
plot(R,I1,R,I2,R,I3);
axis([-15 10 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I1(R)','I2(R)','I3(R)');
`,cCode:"",defaultParams:{},displayName:"D6FARONS",tags:["chapter3","diffraction","slit","aperture","wavelength"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D7FARON3DS",title:"D7FARON3DS - D7FARON3DS\r",description:"D7FARON3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D7FARON3DS
# One may look at the plot from different angles, change colors, and make a "Contour Plot".
# Radius of aperture is a
# The coordinate on the observation screen is R
# Wavelength ?, distance from aperture to screen is X.
# 3D diffraction pattern of a round aperture as a circular
# symmetric plot using two coordinates.


N = 30
D = 2
A = 0.1
Lamda = 0.0005
X = 4000
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
G = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -20 + 1.5001*r
            Yi = -20 + 1.5001*c
            R = np.sqrt(Xi**2+Yi**2)
            G(r,c)= (( besselj(1,(2*np.pi*A*R/(X*Lamda)))/(2*np.pi*A*R/(X*Lamda))))**2
fig = plt.figure(1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(real(G.shape[1]), np.arange(real(G.shape[0]))
    ax.plot_surface(X, Y, real(G, cmap='viridis')
)
                 # PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D7FARON3DS
% One may look at the plot from different angles, change colors, and make a "Contour Plot".
% Radius of aperture is a
% The coordinate on the observation screen is R
% Wavelength ?, distance from aperture to screen is X.
% 3D diffraction pattern of a round aperture as a circular
% symmetric plot using two coordinates.

function D7FARON3DS;

N = 30;
D = 2;
A = 0.1;
Lamda = 0.0005;
X = 4000;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
G = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -20 + 1.5001*r;
            Yi = -20 + 1.5001*c; 
            R = sqrt(Xi^2+Yi^2);
            G(r,c)= (( besselj(1,(2*pi*A*R/(X*Lamda)))/(2*pi*A*R/(X*Lamda))))^2;
        end;
end;






figure(1);

mesh(real(G));
                 % PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])`,cCode:"",defaultParams:{},displayName:"D7FARON3DS",tags:["chapter3","diffraction","aperture","wavelength","pattern","contour-plot","3d-visualization"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D8FARONEXS",title:"D8FARONEXS - D8FARONEXS\r",description:"D8FARONEXS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D8FARONEXS
# Graph of part of the diffraction pattern of a round aperture of radius a and
# wavelength ????.
# The graph is not normalized.
# X is distace:Slit-Screen,
# R is coordinate on Screen,
# All length in mm, parameters are globally defined above the graph.


R = np.arange(3, 10+0.1, 0.1)
X = 1000
Lamda = 0.010
a = 1.5
I = (besselj(1,(2*np.pi*a*R/(Lamda*X)))/(2*np.pi*a*R/(Lamda*X)))**2
fig = plt.figure(1)

plt.plot(R,I)

plt.xlim(3, 10)
plt.ylim(0, 0.02)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['I(R)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D8FARONEXS
% Graph of part of the diffraction pattern of a round aperture of radius a and
% wavelength ????.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.

function D8FARONEXS;
R = (3:0.1:10);
X = 1000;
Lamda = 0.010;
a = 1.5;

I = (besselj(1,(2*pi*a*R/(Lamda*X)))./(2*pi*a*R/(Lamda*X))).^2;

figure(1);
plot(R,I);
axis([3 10 0 0.02]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I(R)');

`,cCode:"",defaultParams:{},displayName:"D8FARONEXS",tags:["chapter3","diffraction","slit","aperture","wavelength","pattern"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Aperture",url:"https://en.wikipedia.org/wiki/Aperture"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"D9FAGRAMPS",title:"D9FAGRAMPS - D9FAGRAMPS\r",description:"D9FAGRAMPS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D9FAGRAMPS
# Diffraction on an amplitude grating at normal incidence.
# Width of openings d, center to center distance of strips a, wavelength ????, distance
# from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N.
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
# show where the main maxima are located (0/0).
# P(A) is the product of Interference and diffraction factor.


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
d= 0.001
Lamda = 0.0005
a = 0.002
N = 6
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
Y = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N))**2
P = D*I
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,I,Theta,Y)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I(	heta)', 'Y(	heta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,I,Theta,D,Theta,P)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I(	heta)', 'D(	heta)', 'P(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D9FAGRAMPS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
% show where the main maxima are located (0/0).
% P(A) is the product of Interference and diffraction factor.

function D9FAGRAMPS;

Theta = (-0.5001:0.0002:0.5);
d= 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
Y = (sin(pi*(a/Lamda).*sin(Theta)*N)).^2;
P = D.*I;


figure(1);
subplot(2,1,1);
plot(Theta,I,Theta,Y);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I(	heta)','Y(	heta)');


subplot(2,1,2);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I(	heta)','D(	heta)','P(	heta)');
`,cCode:"",defaultParams:{},displayName:"D9FAGRAMPS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"DA1FAGRSTEP1S",title:"DA1FAGRSTEP1S - DA1FAGRSTEP1S\r",description:"DA1FAGRSTEP1S\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA1FAGRSTEP1S
# Diffraction on an step grating with width d, center to center distance of steps a,
# height H, wavelength ????, distance from grating to screen X and coordinate on
# Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
# II(?) is the interfernce factor of the gratings with respect to the two planes.
# P(A) is the product of interference and diffraction factors.
# The intensity of the zeroth order and of the first orders change depending on the heigth H.
# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:
# the first order.


Theta =np.arange(-0.5001, 0.5+0.0002, 0.0002)
Lamda = 0.0005
a = 0.002
N = 6
d = 0.001
n1 = 10.25
n2 = 10
n3 = 10.37
n4 = 10.5
H1 = n1*Lamda
H2 = n2*Lamda
H3 = n3*Lamda
H4 = n4*Lamda
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
II1 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H1)))**2
II2 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H2)))**2
II3 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H3)))**2
II4 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H4)))**2
P1 = D*I*II1
P2 = D*I*II2
P3 = D*I*II3
P4 = D*I*II4
fig = plt.figure(1)

plt.plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D)

plt.xlim(-1, 1)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['P1(	heta)', 'P2(	heta)', 'P3(	heta)', 'P4(	heta)', 'D(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% DA1FAGRSTEP1S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, wavelength ????, distance from grating to screen X and coordinate on
% Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interfernce factor of the gratings with respect to the two planes.
% P(A) is the product of interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA1FAGRSTEP1S;

Theta =(-0.5001:0.0002:0.5);
Lamda = 0.0005;

a = 0.002;
N = 6;
d = 0.001;
n1 = 10.25;
n2 = 10;
n3 = 10.37;
n4 = 10.5;
H1 = n1*Lamda;
H2 = n2*Lamda;
H3 = n3*Lamda;
H4 = n4*Lamda;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II1 =  (cos((pi/Lamda)*(d*sin(Theta)+H1))).^2;
II2 =  (cos((pi/Lamda)*(d*sin(Theta)+H2))).^2;
II3 =  (cos((pi/Lamda)*(d*sin(Theta)+H3))).^2;
II4 =  (cos((pi/Lamda)*(d*sin(Theta)+H4))).^2;

P1 = D.*I.*II1;
P2 = D.*I.*II2;
P3 = D.*I.*II3;
P4 = D.*I.*II4;

figure(1);
plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('P1(	heta)','P2(	heta)','P3(	heta)','P4(	heta)','D(	heta)');
`,cCode:"",defaultParams:{},displayName:"DA1FAGRSTEP1S",tags:["chapter3","diffraction","grating","interference","wavelength","intensity"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"DA2FAGRSTEP2S",title:"DA2FAGRSTEP2S - DA2FAGRSTEP2S\r",description:"DA2FAGRSTEP2S\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA2FAGRSTEP2S
# Diffraction on an step grating with width d, center to center distance of steps a,
# height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
# screen X and coordinate on screen Y.
# All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
# II(?) is the interference factor of the gratings with respect to the two planes.
# P(A) is the product of Interference and diffraction factors.
# The intensity of the zeroth order and of the first orders change depending on the heigth H.
# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:
# the first order.


Theta = np.arange(-0.7001, 0.7+0.0002, 0.0002)
d = 0.001
a = 0.002
N = 6
Lamda1 = 0.0007
Lamda2 = 0.0005
n1 = 1
n2 = 0.5
H = 0.00035
H1 = n1*Lamda1
H2 = n1*Lamda2
H3 = n2*Lamda1
H4 = n2*Lamda2
D1 = (np.sin(np.pi*(d/Lamda1)*np.sin(Theta))/(np.pi*(d/Lamda1)*np.sin(Theta)))**2
D2 = (np.sin(np.pi*(d/Lamda2)*np.sin(Theta))/(np.pi*(d/Lamda2)*np.sin(Theta)))**2
D3 = D1
D4 = D2
I1 = (np.sin(np.pi*(a/Lamda1)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda1)*np.sin(Theta))))**2
I2 = (np.sin(np.pi*(a/Lamda2)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda2)*np.sin(Theta))))**2
I3 = I1
I4 = I2
II1 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H1)))**2
II2 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H2)))**2
II3 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H3)))**2
II4 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H4)))**2
P1 = D1*I1*II1
P2 = D2*I2*II2
P3 = D1*I1*II3
P4 = D2*I2*II4
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('	heta','Fontsize',12)
plt.legend(['P1(	heta)', 'P2(	heta)', 'D1(	heta)', 'D2(	heta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('	heta','Fontsize',12)
plt.legend(['P3(	heta)', 'P4(	heta)', 'D3(	heta)', 'D4(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% DA2FAGRSTEP2S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
% screen X and coordinate on screen Y.
% All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interference factor of the gratings with respect to the two planes.
% P(A) is the product of Interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA2FAGRSTEP2S;

Theta = (-0.7001:0.0002:0.7);
d = 0.001;
a = 0.002;
N = 6;
Lamda1 = 0.0007;
Lamda2 = 0.0005;
n1 = 1;
n2 = 0.5;
H = 0.00035;
H1 = n1*Lamda1;
H2 = n1*Lamda2;
H3 = n2*Lamda1;
H4 = n2*Lamda2;


D1 = (sin(pi*(d/Lamda1)*sin(Theta))./(pi*(d/Lamda1)*sin(Theta))).^2;
D2 = (sin(pi*(d/Lamda2)*sin(Theta))./(pi*(d/Lamda2)*sin(Theta))).^2;
D3 = D1;
D4 = D2;

I1 = (sin(pi*(a/Lamda1)*sin(Theta)*N)./(N*sin(pi*(a/Lamda1)*sin(Theta)))).^2;
I2 = (sin(pi*(a/Lamda2)*sin(Theta)*N)./(N*sin(pi*(a/Lamda2)*sin(Theta)))).^2;
I3 = I1;
I4 = I2;

II1 = (cos((pi/Lamda1)*(d*sin(Theta)+H1))).^2;
II2 = (cos((pi/Lamda2)*(d*sin(Theta)+H2))).^2;
II3 = (cos((pi/Lamda1)*(d*sin(Theta)+H3))).^2;
II4 = (cos((pi/Lamda2)*(d*sin(Theta)+H4))).^2;

P1 = D1.*I1.*II1;
P2 = D2.*I2.*II2;
P3 = D1.*I1.*II3;
P4 = D2.*I2.*II4;

figure(1);
subplot(2,1,1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta','Fontsize',12);
legend('P1(	heta)','P2(	heta)','D1(	heta)','D2(	heta)');

subplot(2,1,2);
plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta','Fontsize',12);
legend('P3(	heta)','P4(	heta)','D3(	heta)','D4(	heta)');`,cCode:"",defaultParams:{},displayName:"DA2FAGRSTEP2S",tags:["chapter3","diffraction","grating","interference","wavelength","intensity"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wave interference",url:"https://en.wikipedia.org/wiki/Wave_interference"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]},{id:"DA3FECOR",title:"DA3FECOR - DA3FECOR\r",description:"DA3FECOR\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA3FECOR
# Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
# axis, respectively.
# The highest value f of Y is globally defined


f=5
Y=(0:0.01:f)
[t,SY] = ode45(@Sf,Y,[0])
[t,CY] = ode45(@Cf,Y,[0])
fig = plt.figure(1)

plt.plot(CY,SY)

plt.xlim(0, 0.8)
plt.ylim(0, 0.8)

xlabel('C(Y)','Fontsize',12)
plt.legend(['S(Y)'])
Out = np.sin((np.pi/2)*T**2)
Out = np.cos((np.pi/2)*T**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% DA3FECOR
% Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
% axis, respectively.
% The highest value f of Y is globally defined
function DA3FECOR()

f=5;
Y=(0:0.01:f);

[t,SY] = ode45(@Sf,Y,[0]);
[t,CY] = ode45(@Cf,Y,[0]);


figure(1);
plot(CY,SY);
axis([0 0.8 0 0.8]);                
xlabel('C(Y)','Fontsize',12);
legend('S(Y)');





function Out=Sf(T,X)
Out = sin((pi/2)*T^2);
function Out=Cf(T,X)
Out = cos((pi/2)*T^2);
`,cCode:"",defaultParams:{},displayName:"DA3FECOR",tags:["chapter3","diffraction"],wikipediaLinks:[{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Fraunhofer diffraction",url:"https://en.wikipedia.org/wiki/Fraunhofer_diffraction"},{title:"Fresnel diffraction",url:"https://en.wikipedia.org/wiki/Fresnel_diffraction"}]}],P1=[{id:"C1COH2S",title:"C1COH2S - C1COH2S\r",description:"C1COH2S\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C1COH2S
# Intensity of two sources separated by s. Superposition of two double
# slit pattern.
# The slits have width d and separation a, one pattern is untilted with ? = 0, the
# other tilted by ? = s/Z , distance from sources to slit is Z.
# Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
# By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
# is further enlarged, the fringes reappear, but now the minima are not zero.
# Another point of view: Fringes may disapear for constant s and changing a.


Theta = np.arange(-0.006, 0.006+0.00009, 0.00009)
d = 0.05
a = 1
Z = 9000
s1 = 0
s2 = 1.5
s3 = 2.25
s4 = 2.6
Psi1 = s1/Z
Psi2 = s2/Z
Psi3 = s3/Z
Psi4 = s4/Z
Lamda = 0.0005
I1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*np.sin(Theta)))**2
II1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi1))))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,I1+II1)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II1(	heta)'])
II2= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi2))))**2
plt.subplot(2, 2, 2)

plt.plot(Theta,I1+II2)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II2(	heta)'])
II3= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi3))))**2
plt.subplot(2, 2, 3)

plt.plot(Theta,I1+II3)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II3(	heta)'])
II4= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi4))))**2
plt.subplot(2, 2, 4)

plt.plot(Theta,I1+II4)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II4(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`%C1COH2S
%Intensity of two sources separated by s. Superposition of two double
%slit pattern.
%The slits have width d and separation a, one pattern is untilted with ? = 0, the
%other tilted by ? = s/Z , distance from sources to slit is Z.
%Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
%By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
%is further enlarged, the fringes reappear, but now the minima are not zero.
%Another point of view: Fringes may disapear for constant s and changing a.

function C1COH2S;

Theta = (-0.006:0.00009:0.006);
d = 0.05;
a = 1;
Z = 9000;
s1 = 0;
s2 = 1.5;
s3 = 2.25;
s4 = 2.6;
Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;
Lamda = 0.0005;

I1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*sin(Theta))).^2;

II1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi1)))).^2;

figure(1);
subplot(2,2,1);
plot(Theta,I1+II1);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II1(	heta)'); 

II2= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi2)))).^2;

subplot(2,2,2);
plot(Theta,I1+II2);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II2(	heta)'); 

II3= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi3)))).^2;

subplot(2,2,3);
plot(Theta,I1+II3);
axis([-0.006 0.006 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II3(	heta)'); 

II4= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi4)))).^2;

subplot(2,2,4);
plot(Theta,I1+II4);
axis([-0.006 0.006 0 1.5]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II4(	heta)'); 


`,cCode:"",defaultParams:{},displayName:"C1COH2S",tags:["chapter4","coherence","slit","intensity","fringe-pattern","pattern"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C2COHEX",title:"C2COHEX - C2COHEX\r",description:"C2COHEX\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C2COHEX

# Intensity of an extended source of width s and interfernce diffraction on a
# double slit.

# Slit openings d and separation a. Distance from source to slit Z, from slit to
# screen X, coordinate on screen is Y, small angle approximation Y/X = ?.




a=1
d=0.05
Lamda = 0.0005
Z = 9000
s1 = 1
s2 = 1.5
s3 = 4.5
s4 = 5
Psi1 = s1/Z
Psi2 = s2/Z
Psi3 = s3/Z
Psi4 = s4/Z
k=0:1:200
Theta =0.01-k*0.0001
 nx = length(Theta)
 for r=1:nx
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r))
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r))
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r))
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,I1)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)'])
plt.subplot(2, 2, 2)

plt.plot(Theta,I2)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I2(	heta)'])
plt.subplot(2, 2, 3)

plt.plot(Theta,I3)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I3(	heta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,I4)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I4(	heta)'])
Out = ((np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2)/((np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2))*np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C2COHEX

% Intensity of an extended source of width s and interfernce diffraction on a
% double slit.

% Slit openings d and separation a. Distance from source to slit Z, from slit to
% screen X, coordinate on screen is Y, small angle approximation Y/X = ?.



function C2COHEX;
global a d Lamda Z s1 Psi1 k Theta;
a=1;
d=0.05;
Lamda = 0.0005;
Z = 9000;
s1 = 1;
s2 = 1.5;
s3 = 4.5;
s4 = 5;

Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;

k=0:1:200;
Theta =0.01-k*0.0001;


 nx = length(Theta);
 for r=1:nx;
  
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r));
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r));
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r));
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r));
   
   
    
end;


figure(1);
subplot(2,2,1);
plot(Theta,I1);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)');

subplot(2,2,2);
plot(Theta,I2);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I2(	heta)');

subplot(2,2,3);
plot(Theta,I3);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I3(	heta)');

subplot(2,2,4);
plot(Theta,I4);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I4(	heta)');

function Out=fc(Psi,Theta)
global a d Lamda Z s1 Psi1;
Out = ((sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)./((pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)).*cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi))).^2;
`,cCode:"",defaultParams:{},displayName:"C2COHEX",tags:["chapter4","coherence","slit","diffraction","intensity"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C3VIS2S",title:"C3VIS2S - C3VIS2S\r",description:"C3VIS2S\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C3VIS2S

# Visibility for two point sources.
# We have set Y'/X equal to s/Z


a = 1
Lamda = 0.0005
Z = 9000
s = np.arange(0.01, 10+0.01, 0.01)
V = np.cos(np.pi*((a*s)/(Lamda*Z)))
fig = plt.figure(1)

plt.plot(s,np.abs(V)
)
plt.xlim(0, 10)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('s')
plt.legend(['abs(V(s))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C3VIS2S

% Visibility for two point sources.
% We have set Y'/X equal to s/Z

function C3VIS2S;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = (0.01:0.01:10);

V = cos(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(V));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(V(s))');`,cCode:"",defaultParams:{},displayName:"C3VIS2S",tags:["chapter4","coherence"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C4VISEX",title:"C4VISEX - C4VISEX\r",description:"C4VISEX\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C4VISEX
# Visibility for an extended source.
# We have set Y'/X equal to s/Z

a = 1
Lamda = 0.0005
Z = 9000
s = 0.01:0.01:10
VV = np.sin(np.pi*((a*s)/(Lamda*Z)))/(np.pi*((a*s)/(Lamda*Z)))
fig = plt.figure(1)

plt.plot(s,np.abs(VV)
)
plt.xlim(0, 10)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('s')
plt.legend(['abs(VV(s))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C4VISEX
% Visibility for an extended source.
% We have set Y'/X equal to s/Z
function C4VISEX;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = 0.01:0.01:10;

VV = sin(pi*((a*s)/(Lamda*Z)))./(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(VV));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(VV(s))')`,cCode:"",defaultParams:{},displayName:"C4VISEX",tags:["chapter4","coherence"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C5MICHSTS",title:"C5MICHSTS - C5MICHSTS\r",description:"C5MICHSTS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C5MICHSTS
# Michelson's Stellar Interferometer
# Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
# Interferometer distance of Mirror M1 and M4 is h.

# In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
# difference of these two values we calculate the angle ?.

# ?n this simulation we choose an angle ? and show that the fringe pattern
# changes for the two values of h we determine.
# Example h equal 100 and 95.

Phi = 0.00005
X = 4000
Lamda = 0.0005
d = 0.5
h = 95
Y= np.arange(-30, 30+0.1, 0.1)
uI = (np.cos(np.pi*d*(Y/(X*Lamda))))**2
uII = (np.cos(np.pi*((Y/X)*d-h*Phi)/Lamda))**2
# This is an indication if there are fringes or not:
fig = plt.figure(1)

plt.plot(Y,uI+uII,Y,uI,Y,uII)

plt.xlim(-30, 30)
plt.ylim(0, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['uI(Y)+uII(Y)', 'uI(Y)', 'uII(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C5MICHSTS
% Michelson's Stellar Interferometer
% Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
% Interferometer distance of Mirror M1 and M4 is h.

% In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
% difference of these two values we calculate the angle ?.

% ?n this simulation we choose an angle ? and show that the fringe pattern
% changes for the two values of h we determine.
% Example h equal 100 and 95.
function C5MICHSTS;

Phi = 0.00005;
X = 4000;
Lamda = 0.0005;
d = 0.5;
h = 95;
Y= (-30:0.1:30);

uI = (cos(pi*d*(Y/(X*Lamda)))).^2;
uII = (cos(pi*((Y/X)*d-h*Phi)/Lamda)).^2;

%  This is an indication if there are fringes or not

figure(1);
plot(Y,uI+uII,Y,uI,Y,uII);
axis([-30 30 0 1.5]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('uI(Y)+uII(Y)','uI(Y)','uII(Y)');`,cCode:"",defaultParams:{},displayName:"C5MICHSTS",tags:["chapter4","coherence","mirror","diffraction","wavelength","fringe-pattern","pattern"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Diffraction",url:"https://en.wikipedia.org/wiki/Diffraction"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C6SUPERS",title:"C6SUPERS - C6SUPERS\r",description:"C6SUPERS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C6SUPERS

# (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
# Demonstration of the superposition of waves .
# The medium wavelength is ?m = 2

# 1. Summation over four waves


x = np.arange(-200, 200+0.5, 0.5)
Lamda1=1.85
Lamda2=1.95
Lamda3=2.05
Lamda4=2.15
y11=np.cos(2*np.pi*x/Lamda1)
y12=np.cos(2*np.pi*x/Lamda2)
y13=np.cos(2*np.pi*x/Lamda3)
y14=np.cos(2*np.pi*x/Lamda4)
y1=y11+y12+y13+y14
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x,y1)

plt.xlim(-200, 200)
plt.ylim(-5, 5)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y1(x)'])
# 2.Integration over the wavelength interval fro the superposition
nx = length(x)
for r=1:nx
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r))
# y41=quad(@y41f,1.85,2.15,0.1)
# y41 = quad(y41f,1.85,2.15,0.1)
plt.subplot(2, 1, 2)

plt.plot(x,y41)

plt.xlim(-200, 200)
plt.ylim(-0.5, 0.5)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)'])
Out = np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C6SUPERS

% (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
% Demonstration of the superposition of waves .
% The medium wavelength is ?m = 2

% 1. Summation over four waves

function C6SUPERS;

x = (-200:0.5:200);

Lamda1=1.85;
Lamda2=1.95;
Lamda3=2.05;
Lamda4=2.15;
y11=cos(2*pi*x/Lamda1);
y12=cos(2*pi*x/Lamda2);
y13=cos(2*pi*x/Lamda3);
y14=cos(2*pi*x/Lamda4);
y1=y11+y12+y13+y14;

figure(1);
subplot(2,1,1);
plot(x,y1);
axis([-200 200 -5 5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y1(x)');

% 2.Integration over the wavelength interval fro the superposition
nx = length(x);
for r=1:nx;
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r));    
end;
%y41=quad(@y41f,1.85,2.15,0.1);
%y41 = quad(y41f,1.85,2.15,0.1);


   

subplot(2,1,2);
plot(x,y41);
axis([-200 200 -0.5 0.5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


function Out = y41f(Lamda,x) 
Out = cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{},displayName:"C6SUPERS",tags:["chapter4","coherence","wavelength"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C7COHTEMS",title:"C7COHTEMS - C7COHTEMS\r",description:"C7COHTEMS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C7COHTEMS

# Demonstration of the superposition of two waves when integrating over a
# wavelength interval.

# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
# for 0, 1/2 and 1 medium wavelength.


x = np.arange(-200, 200+1, 1)
LamdaM = 2
a1 = 0
a2 = 0.5
a3 = 1
Delta1 = LamdaM * a1
Delta2 = LamdaM * a2
Delta3 = LamdaM * a3
nx = length(x)
for r=1:nx
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))
# 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
# of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(x,y41)

plt.xlim(-200, 200)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)'])
# 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
# waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
# We have to use an expanded scale to see the result
plt.subplot(3, 1, 2)

plt.plot(x,y51)

plt.xlim(-200, 200)
plt.ylim(-0.05, 0.05)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y51(x)'])
# 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
# superposition of two waves, for phase difference, using ?3 = ??m*a3.
# The phase difference is 1 ?m. .

plt.subplot(3, 1, 3)

plt.plot(x,y61)

plt.xlim(-200, 200)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y61(x)'])
Out = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C7COHTEMS

% Demonstration of the superposition of two waves when integrating over a
% wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.

function C7COHTEMS;
global Delta1 Delta2 Delta3;
x = (-200:1:200);

LamdaM = 2;
a1 = 0;
a2 = 0.5;
a3 = 1;
Delta1 = LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;



% 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
figure(1);
subplot(3,1,1);
plot(x,y41);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


% 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
% We have to use an expanded scale to see the result
subplot(3,1,2);
plot(x,y51);
axis([-200 200 -0.05 0.05]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
% superposition of two waves, for phase difference, using ?3 = ??m*a3.
% The phase difference is 1 ?m. .

subplot(3,1,3);
plot(x,y61);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)');






function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{},displayName:"C7COHTEMS",tags:["chapter4","coherence","grating","wavelength","phase"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Phase (waves)",url:"https://en.wikipedia.org/wiki/Phase_(waves)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]},{id:"C8CCOHINTS",title:"C8CCOHINTS - C8COHINTS\r",description:"C8COHINTS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C8COHINTS

# Graphs for demonstration of the intensity of the superposition of two waves when
# integrating over a wavelength interval.

# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
# for 0, 1/2 and 1 medium wavelength.

x = np.arange(-200, 200+0.75, 0.75)
LamdaM = 2
a1 = 0
a2 = 0.5
a3 = 1
Delta1 =LamdaM * a1
Delta2 = LamdaM * a2
Delta3 = LamdaM * a3
# 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
# superposition of two of the waves, no phase difference, using ????1 = ????m*a1,
# where ?m is the medium wavelength .
nx = length(x)
for r=1:nx
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(x,y41**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.4)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)^2'])
# 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
# superposition of two waves, for phase difference, using ? = a2.
# The phase difference is (1/2) ?m


plt.subplot(3, 1, 2)

plt.plot(x,y51**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.01)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y51(x)^2'])
# 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition
# of two waves, for phase difference, using ?3 = LamdaM*a3.
# The phase difference is 1 LamdaM

plt.subplot(3, 1, 3)

plt.plot(x,y61**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.4)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y61(x)^2'])
Out = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C8COHINTS

% Graphs for demonstration of the intensity of the superposition of two waves when
% integrating over a wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.
function C8CCOHINTS;
global Delta1 Delta2 Delta3;
x = (-200:0.75:200);

LamdaM = 2;

a1 = 0;
a2 = 0.5;
a3 = 1;


Delta1 =LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

% 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
% superposition of two of the waves, no phase difference, using ????1 = ????m*a1,
% where ?m is the medium wavelength .
nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;

figure(1);
subplot(3,1,1);
plot(x,y41.^2);
axis([-200 200 0 0.4]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)^2');

% 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
% superposition of two waves, for phase difference, using ? = a2.
% The phase difference is (1/2) ?m


subplot(3,1,2);
plot(x,y51.^2);
axis([-200 200 0 0.01]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)^2');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition
% of two waves, for phase difference, using ?3 = LamdaM*a3.
% The phase difference is 1 LamdaM

subplot(3,1,3);
plot(x,y61.^2);
axis([-200 200 0 0.4]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)^2');




function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{},displayName:"C8COHINTS",tags:["chapter4","coherence","grating","wavelength","intensity","phase"],wikipediaLinks:[{title:"Coherence (physics)",url:"https://en.wikipedia.org/wiki/Coherence_(physics)"},{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Phase (waves)",url:"https://en.wikipedia.org/wiki/Phase_(waves)"},{title:"Coherence length",url:"https://en.wikipedia.org/wiki/Coherence_length"}]}],_1=[{id:"M11POELIPLIS",title:"M11POELIPLIS - M11POELIPLIS\r",description:"M11POELIPLIS\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M11POELIPLIS
# Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
# np.cos( -2????x/360) on z- axis and np.cos( -2????x/360 + ????) on y-axis

x = np.arange(1, 360+1, 1)
Phi1 = 0
Phi2 = np.pi/4
Phi3 = np.pi/2
Phi4 = 3*np.pi/4
Phi5 = np.pi
Phi6 = (5*np.pi)/4
Phi7 = (3*np.pi)/2
Phi8 = 7*np.pi/4
y1 = np.cos(-2*np.pi*(x/360))
y2 = np.cos(-2*np.pi*(x/360))
y3 = np.cos(-2*np.pi*(x/360))
y4 = np.cos(-2*np.pi*(x/360))
y5 = np.cos(-2*np.pi*(x/360))
y6 = np.cos(-2*np.pi*(x/360))
y7 = np.cos(-2*np.pi*(x/360))
y8 = np.cos(-2*np.pi*(x/360))
yy1 = np.cos(-2*np.pi*(x/360) + Phi1)
yy2 = np.cos(-2*np.pi*(x/360) + Phi2)
yy3 = np.cos(-2*np.pi*(x/360) + Phi3)
yy4 = np.cos(-2*np.pi*(x/360) + Phi4)
yy5 = np.cos(-2*np.pi*(x/360) + Phi5)
yy6 = np.cos(-2*np.pi*(x/360) + Phi6)
yy7 = np.cos(-2*np.pi*(x/360) + Phi7)
yy8 = np.cos(-2*np.pi*(x/360) + Phi8)
fig = plt.figure(1)

plt.subplot(4, 1, 1)

plt.plot(y1,yy1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1(x)')
plt.legend(['yy1(x)'])
plt.subplot(4, 1, 2)

plt.plot(y2,yy2)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y2(x)')
plt.legend(['yy2(x)'])
plt.subplot(4, 1, 3)

plt.plot(y3,yy3)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y3(x)')
plt.legend(['yy3(x)'])
plt.subplot(4, 1, 4)

plt.plot(y4,yy4)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y4(x)')
plt.legend(['yy4(x)'])
fig = plt.figure(2)

plt.subplot(4, 1, 1)

plt.plot(y5,yy5)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y5(x)')
plt.legend(['yy5(x)'])
plt.subplot(4, 1, 2)

plt.plot(y6,yy6)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y6(x)')
plt.legend(['yy6(x)'])
plt.subplot(4, 1, 3)

plt.plot(y7,yy7)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y7(x)')
plt.legend(['yy7(x)'])
plt.subplot(4, 1, 4)

plt.plot(y8,yy8)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y8(x)')
plt.legend(['yy8(x)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M11POELIPLIS
% Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
% cos( -2????x/360) on z- axis and cos( -2????x/360 + ????) on y-axis
function M11POELIPLIS;
x = (1:1:360);
Phi1 = 0;
Phi2 = pi/4;
Phi3 = pi/2;
Phi4 = 3*pi/4;
Phi5 = pi;
Phi6 = (5*pi)/4;
Phi7 = (3*pi)/2;
Phi8 = 7*pi/4;
y1 = cos(-2*pi*(x/360));
y2 = cos(-2*pi*(x/360));
y3 = cos(-2*pi*(x/360));
y4 = cos(-2*pi*(x/360));
y5 = cos(-2*pi*(x/360));
y6 = cos(-2*pi*(x/360));
y7 = cos(-2*pi*(x/360));
y8 = cos(-2*pi*(x/360));
yy1 = cos(-2*pi*(x/360) + Phi1);
yy2 = cos(-2*pi*(x/360) + Phi2);
yy3 = cos(-2*pi*(x/360) + Phi3);
yy4 = cos(-2*pi*(x/360) + Phi4);
yy5 = cos(-2*pi*(x/360) + Phi5);
yy6 = cos(-2*pi*(x/360) + Phi6);
yy7 = cos(-2*pi*(x/360) + Phi7);
yy8 = cos(-2*pi*(x/360) + Phi8);


figure(1);
subplot(4,1,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x)');
legend('yy1(x)');

subplot(4,1,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x)');
legend('yy2(x)');

subplot(4,1,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x)');
legend('yy3(x)');

subplot(4,1,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x)');
legend('yy4(x)');

figure(2);
subplot(4,1,1);
plot(y5,yy5);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y5(x)');
legend('yy5(x)');

subplot(4,1,2);
plot(y6,yy6);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y6(x)');
legend('yy6(x)');

subplot(4,1,3);
plot(y7,yy7);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y7(x)');
legend('yy7(x)');

subplot(4,1,4);
plot(y8,yy8);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y8(x)');
legend('yy8(x)');`,cCode:"",defaultParams:{},displayName:"M11POELIPLIS",tags:["chapter5","matrix-methods"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"of",title:"of - M2FRN2L\r",description:"M2FRN2L\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M2FRN2L
# Fresnel's formulas as function of angle of incidence for first medium 1 and
# second medium 2 and n1<n2.
# .
# 1. Reflection coefficients.
# Absolute value and imaginary parts for p-case and s-case.

Theta = np.arange(0.1, 90+0.1, 0.1)
n1 = 1
n2 = 1.5
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(rp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(rp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(rs)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(rs(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(rp)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(rs)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rs(	heta))'])
# 2. Transimission coefficient.
# Absolute value and imaginary value part for p-case and s-case.

tp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
ts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(tp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(tp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(ts)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(ts(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(tp)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(tp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(ts)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(ts(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M2FRN2L
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1<n2.
% .
% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M2FRN2L;
Theta = (0.1:0.1:90);
n1 = 1;
n2 = 1.5;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(rp(	heta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(rs(	heta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rp(	heta))');


subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rs(	heta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(tp(	heta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(ts(	heta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(tp(	heta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(ts(	heta))');

`,cCode:"",defaultParams:{},displayName:"M2FRN2L",tags:["chapter5","matrix-methods","reflection"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"of",title:"of - M3FRN2S\r",description:"M3FRN2S\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M3FRN2S
# Fresnel's formulas as function of angle of incidence for first medium 1 and
# second medium 2 and n1>n2.

# 1. Reflection coefficients.
# Absolute value and imaginary parts for p-case and s-case.

n1 = 1.5
n2 = 1
Theta = np.arange(0.1, 90+0.1, 0.1)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(rp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(rp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(rs)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(rs(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(rp)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(rs)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rs(	heta))'])
# 2. Transimission coefficient.
# Absolute value and imaginary value part for p-case and s-case.

tp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
ts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(tp)
)
plt.xlim(0, 100)
plt.ylim(0, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(tp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(ts)
)
plt.xlim(0, 100)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(ts(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(tp)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(tp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(ts)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(ts(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M3FRN2S
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1>n2.

% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M3FRN2S;
n1 = 1.5;
n2 = 1;

Theta = (0.1:0.1:90);


rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(rp(	heta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(rs(	heta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rp(	heta))');

subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rs(	heta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(tp(	heta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(ts(	heta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(tp(	heta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(ts(	heta))');



`,cCode:"",defaultParams:{},displayName:"M3FRN2S",tags:["chapter5","matrix-methods","reflection"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"M4SNELL",title:"M4SNELL - M4SNELL\r",description:"M4SNELL\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M4SNELL
# Snellius Law for real and imaginary angle of refraction.
# We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
# For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
# with x + iy for ?2



# 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = np.arange(1, 90+1, 1)
n1 = 1
n2 = 1.5
Theta2 = asin((n1/n2)*np.sin(2*(np.pi/360)*Theta1))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta1,Theta2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['	heta2(	heta1)'])
plt.title('n1<n2')
# 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = np.arange(1, 90+1, 1)
nn1 = 1.5
nn2 =1
Theta2 = asin((nn1/nn2)*np.sin(2*(np.pi/360)*Theta1))
plt.subplot(2, 1, 2)

plt.plot(Theta1,Theta2)

plt.xlim(0, 60)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['	heta2(	heta1)'])
plt.title('n1>n2')
# 3. Graphs of real and imaginary parts separately.

fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(Theta1,real(Theta2)
)
plt.xlim(0, 100)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['real(	heta2(	heta1))'])
plt.subplot(1, 2, 2)

plt.plot(Theta1,-imag(Theta2)
)
plt.xlim(0, 100)
plt.ylim(-1, 0)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['-imag(	heta2(	heta1))'])
Thetac = (360/(2*np.pi))*asin(nn2/nn1)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M4SNELL
% Snellius Law for real and imaginary angle of refraction.
% We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
% For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
% with x + iy for ?2


function M4SNELL;
% 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = (1:1:90);
n1 = 1;
n2 = 1.5;
Theta2 = asin((n1/n2)*sin(2*(pi/360)*Theta1));

figure(1);
subplot(2,1,1);
plot(Theta1,Theta2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('	heta2(	heta1)');
title('n1<n2');

% 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = (1:1:90);
nn1 = 1.5;
nn2 =1;
Theta2 = asin((nn1/nn2)*sin(2*(pi/360)*Theta1));

subplot(2,1,2);
plot(Theta1,Theta2);
axis([0 60 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('	heta2(	heta1)');
title('n1>n2');

% 3. Graphs of real and imaginary parts separately.

figure(2);
subplot(1,2,1);
plot(Theta1,real(Theta2));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('real(	heta2(	heta1))');

subplot(1,2,2);
plot(Theta1,-imag(Theta2));
axis([0 100 -1 0]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('-imag(	heta2(	heta1))');


Thetac = (360/(2*pi))*asin(nn2/nn1)`,cCode:"",defaultParams:{},displayName:"M4SNELL",tags:["chapter5","matrix-methods","refraction"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Refraction",url:"https://en.wikipedia.org/wiki/Refraction"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"of",title:"of - M5FRINTN2L\r",description:"M5FRINTN2L\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M5FRINTN2L

# Fresnel's formulas as function of angle of incidence for n1<n2
# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs

# 1. Amplitude reflection coefficients.


n1 = 1
n2 = 1.5
Theta = np.arange(0, 90+0.4, 0.4)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# 2. Reflection: Intensities

Rp = rp**2
Rs = rs**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,rp**2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['rp(	heta)^2'])
plt.subplot(2, 2, 2)

plt.plot(Theta,rs**2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['rs(	heta)^2'])
# 3. Transmission: Intensities

Tp = 1 - Rp
Ts = 1 - Rs
plt.subplot(2, 2, 3)

plt.plot(Theta,Tp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['Tp(	heta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,Ts)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['Ts(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M5FRINTN2L

% Fresnel's formulas as function of angle of incidence for n1<n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M5FRINTN2L;
n1 = 1;
n2 = 1.5;
Theta = (0:0.4:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.^2;
Rs = rs.^2;

figure(1);
subplot(2,2,1);
plot(Theta,rp.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('rp(	heta)^2');

subplot(2,2,2);
plot(Theta,rs.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('rs(	heta)^2');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;

subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('Tp(	heta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('Ts(	heta)');
`,cCode:"",defaultParams:{},displayName:"M5FRINTN2L",tags:["chapter5","matrix-methods","reflection","amplitude"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"of",title:"of - M6FRINTN2S\r",description:"M6FRINTN2S\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M6FRINTN2S

# Fresnel's formulas as function of angle of incidence for n1>n2
# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs

# 1. Amplitude reflection coefficients.


n1 = 1.5
n2 = 1
Theta = np.arange(0, 90+0.01, 0.01)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# 2. Reflection: Intensities

Rp = rp*conj(rp)
Rs = rs*conj(rs)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,Rp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['Rp(	heta)'])
plt.subplot(2, 2, 2)

plt.plot(Theta,Rs)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['Rs(	heta)'])
# 3. Transmission: Intensities

Tp = 1 - Rp
Ts = 1 - Rs
plt.subplot(2, 2, 3)

plt.plot(Theta,Tp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['Tp(	heta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,Ts)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['Ts(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M6FRINTN2S

% Fresnel's formulas as function of angle of incidence for n1>n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M6FRINTN2S;

n1 = 1.5;
n2 = 1;
Theta = (0:0.01:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.*conj(rp);
Rs = rs.*conj(rs);


figure(1);
subplot(2,2,1);
plot(Theta,Rp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('Rp(	heta)');

subplot(2,2,2);
plot(Theta,Rs);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('Rs(	heta)');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;


subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('Tp(	heta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('Ts(	heta)');`,cCode:"",defaultParams:{},displayName:"M6FRINTN2S",tags:["chapter5","matrix-methods","reflection","amplitude"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"M7FREVA",title:"M7FREVA - M7FREVA. Penetration into the less dense medium at total reflection.\r",description:"M7FREVA. Penetration into the less dense medium at total reflection.\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M7FREVA. Penetration into the less dense medium at total reflection.

# Exponential factor for decrease of amplitude into the less
# dense medium with -Y for two different refractive indices:

# ?c is the critical angle

# Different refractive indices. The value "a" is used to "be off" the critical angle


# First we set
a = 2
n1 = 1.5
n2 = 1
Lamda = 0.0005
nn1 = 3.4
nn2 = 1
z = asin(n2/n1)
zz = asin(nn2/nn1)
Y = np.arange(-0.00005, -0.001+-0.00005, -0.00005)
Theta1c = z * 360/(2*np.pi)
Theta2c = zz * 360/(2*np.pi)

# Theta1c = 41.81
# Theta2c = 17.105
Theta1  = Theta1c + 2
Theta2 =  Theta2c + a
k2 = 2*(np.pi/Lamda) * n2
A = 1
kk2 = 2 * (np.pi/Lamda) * nn2
y1 = A*np.exp(Y*k2*np.sqrt((n1*np.sin((2*np.pi/360)*Theta1)/n2)**2 - 1))
y2 = A*np.exp(Y*kk2*np.sqrt((nn1*np.sin((2*np.pi/360)*Theta2)/nn2)**2 - 1))
fig = plt.figure(1)

plt.plot(Y,y1,Y,y2)

plt.xlim(-1e-3, 0)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['y1(Y)', 'y2(Y)'])
# To study different angles, make refractive indices the same for both and change "a"
# to values larger than 2.
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M7FREVA. Penetration into the less dense medium at total reflection.

% Exponential factor for decrease of amplitude into the less
% dense medium with -Y for two different refractive indices:

% ?c is the critical angle

% Different refractive indices. The value "a" is used to "be off" the critical angle

function M7FREVA;
% First we set
a = 2;
n1 = 1.5;
n2 = 1;
Lamda = 0.0005;
nn1 = 3.4;
nn2 = 1;
z = asin(n2/n1);  
zz = asin(nn2/nn1);

Y = (-0.00005:-0.00005:-0.001);

Theta1c = z * 360/(2*pi)
Theta2c = zz * 360/(2*pi)

% Theta1c = 41.81;
% Theta2c = 17.105;

Theta1  = Theta1c + 2;
Theta2 =  Theta2c + a;

k2 = 2*(pi/Lamda) * n2;
A = 1;
kk2 = 2 * (pi/Lamda) * nn2;

y1 = A*exp(Y*k2*sqrt((n1*sin((2*pi/360)*Theta1)/n2)^2 - 1));
y2 = A*exp(Y*kk2*sqrt((nn1*sin((2*pi/360)*Theta2)/nn2)^2 - 1));

figure(1);
plot(Y,y1,Y,y2);
axis([-1e-3 0 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('y1(Y)','y2(Y)');

% To study different angles, make refractive indices the same for both and change "a"
% to values larger than 2.`,cCode:"",defaultParams:{},displayName:"M7FREVA. Penetration into the less dense medium at total reflection.",tags:["chapter5","matrix-methods","reflection","amplitude"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"M8POLIN",title:"M8POLIN - M8POLIN\r",description:"M8POLIN\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M8POLIN
# Linearly polarized light.
# Graph of np.cos( 2?x/360) on x-axis and np.cos(2?x/360 + ?) on y-axis

x = np.arange(1, 360+1, 1)
# 1. Before enterting the birifringent plate X = 0
Phi1 = 0
y1 = np.cos(2*np.pi*(x/360))
z1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi1)/360)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(x,y1,x,z1)

plt.xlim(0, 400)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.title('Each seperate')
plt.legend(['y1(x)', 'z1(x)'])
plt.subplot(2, 2, 2)

plt.plot(y1,z1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1')
plt.title('One plotted against the other')
plt.legend(['z1(y1)'])
# 2. At the plane X = L
Phi2 = 180
y1 = np.cos(2*np.pi*(x/360))
z1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi2)/360)
plt.subplot(2, 2, 3)

plt.plot(x,y1,x,z1)

plt.xlim(0, 400)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.title('Each seperate')
plt.legend(['y1(x)', 'z1(x)'])
plt.subplot(2, 2, 4)

plt.plot(y1,z1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1')
plt.title('One plotted against the other')
plt.legend(['z1(y1)'])
# The resulting vibration is along the diagonal
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M8POLIN
% Linearly polarized light.
% Graph of cos( 2?x/360) on x-axis and cos(2?x/360 + ?) on y-axis
function M8POLIN;
x = (1:1:360);

% 1. Before enterting the birifringent plate X = 0;
Phi1 = 0;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi1)/360);

figure(1);
subplot(2,2,1);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,2);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% 2. At the plane X = L
Phi2 = 180;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi2)/360);

subplot(2,2,3);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,4);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% The resulting vibration is along the diagonal`,cCode:"",defaultParams:{},displayName:"M8POLIN",tags:["chapter5","matrix-methods","fringe-pattern"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"M9POELIP",title:"M9POELIP - M9POELIP Circular and ellipticlly polarized light\r",description:"M9POELIP Circular and ellipticlly polarized light\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M9POELIP Circular and ellipticlly polarized light

# To demonstrate of circular or elliptically polarized light turning "left or "right".
# Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
# and 0 to 315 degrees.

# The angle ranges (x) correspond to chosen time ranges. Left and right
# polarized light is described by positive or negative ?=?/2 in one component:
# Positive ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

# Negative ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
# We write for Ez = bAsin(x). When looking in direction of the incoming light,
# "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
# polarized light (clock wise).


x1 = np.arange(1, 90+1, 1)
x2 = np.arange(1, 160+1, 1)
x3 = np.arange(1, 235+1, 1)
x4 = np.arange(1, 315+1, 1)
b = -1
y1 = np.cos(-2*np.pi*(x1/360))
y2 = np.cos(-2*np.pi*(x2/360))
y3 = np.cos(-2*np.pi*(x3/360))
y4 = np.cos(-2*np.pi*(x4/360))
yy1 = b*np.sin(-2*np.pi*(x1/360))
yy2 = b*np.sin(-2*np.pi*(x2/360))
yy3 = b*np.sin(-2*np.pi*(x3/360))
yy4 = b*np.sin(-2*np.pi*(x4/360))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(y1,yy1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1(x1)')
plt.legend(['yy1(x1)'])
plt.subplot(2, 2, 2)

plt.plot(y2,yy2)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y2(x2)')
plt.legend(['yy2(x2)'])
plt.subplot(2, 2, 3)

plt.plot(y3,yy3)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y3(x3)')
plt.legend(['yy3(x3)'])
plt.subplot(2, 2, 4)

plt.plot(y4,yy4)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y4(x4)')
plt.legend(['yy4(x4)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M9POELIP Circular and ellipticlly polarized light

% To demonstrate of circular or elliptically polarized light turning "left or "right".
% Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
% and 0 to 315 degrees.

% The angle ranges (x) correspond to chosen time ranges. Left and right
% polarized light is described by positive or negative ?=?/2 in one component:
% Positive ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

% Negative ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
% We write for Ez = bAsin(x). When looking in direction of the incoming light,
% "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
% polarized light (clock wise).

function M9POELIP;
x1 = (1:1:90);
x2 = (1:1:160);
x3 = (1:1:235);
x4 = (1:1:315);
b = -1;

y1 = cos(-2*pi*(x1/360));
y2 = cos(-2*pi*(x2/360));
y3 = cos(-2*pi*(x3/360));
y4 = cos(-2*pi*(x4/360));

yy1 = b*sin(-2*pi*(x1/360));
yy2 = b*sin(-2*pi*(x2/360));
yy3 = b*sin(-2*pi*(x3/360));
yy4 = b*sin(-2*pi*(x4/360));

figure(1);
subplot(2,2,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x1)');
legend('yy1(x1)');

subplot(2,2,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x2)');
legend('yy2(x2)');

subplot(2,2,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x3)');
legend('yy3(x3)');


subplot(2,2,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x4)');
legend('yy4(x4)');
`,cCode:"",defaultParams:{},displayName:"M9POELIP Circular and ellipticlly polarized light",tags:["chapter5","matrix-methods"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]},{id:"of",title:"of - MA3DIFINTRO\r",description:"MA3DIFINTRO\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# MA3DIFINTRO

# Fresnel's formulas as function of angle of incidence for n2<n1
# Graph of arg(zr) - arg(zrr).

# Complex zr for parallel and zrr for perpendicular case.

Theta = np.arange(0, 90+1, 1)
n2 = 1
n1 = 1.9
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.plot(Theta,angle(rp)
-angle(rs))
plt.xlim(0, 100)
plt.ylim(-3.5, 3.5)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rp(	heta))-angle(rs(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% MA3DIFINTRO

% Fresnel's formulas as function of angle of incidence for n2<n1
% Graph of arg(zr) - arg(zrr).

% Complex zr for parallel and zrr for perpendicular case.
function MA3DIFINTRO;
Theta = (0:1:90);
n2 = 1;
n1 = 1.9;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));


figure(1);
plot(Theta,angle(rp)-angle(rs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rp(	heta))-angle(rs(	heta))');`,cCode:"",defaultParams:{},displayName:"MA3DIFINTRO",tags:["chapter5","matrix-methods","3d-visualization"],wikipediaLinks:[{title:"Ray transfer matrix analysis",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"},{title:"ABCD matrix",url:"https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis"}]}],R1=[{id:"N1RECBOX",title:"N1RECBOX - N1RECBOX\r",description:"N1RECBOX\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# N1RECBOX
# Modes of the rectangular box in two dimensions 
# Standing sine waves in x and y direction. Mode number and constants.
# x direction n1 and a
# y direction n2 and b
# The wave in each direction is shown and Contour and surface plots.
# The square is also shown as surface plot.

N = 20
a = 40
b = 40
n1 = 2
n2 = 2
Lamda1 = 2 * a /n1
Lamda2 = 2 * b /n2
i =(0:1:N)
j =(0:1:N)
x = (-40) + 2.001*i
y = (-40) + 2.0001*j
y1 = np.sin(2*np.pi*x/Lamda1)
y2 = np.sin(2*np.pi*y/Lamda2)
# 1. One Dimension
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(x,y1)

plt.xlim(-40, 20)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Xi')
plt.legend(['y1(x)'])
plt.subplot(1, 2, 2)

plt.plot(y,y2)

plt.xlim(-40, 20)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Yj')
plt.legend(['y2(y)'])
# 2. Amplitude, 2D
nx = length(x)
ny = length(y)
Z = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            M11(r,c)= y1(r)*y2(c)
            MM11(r,c)= (y1(r)*y2(c))**2
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.contour(M11)
plt.xlim(0, 20)
plt.ylim(0, 20)

plt.subplot(2, 2, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M11.shape[1]), np.arange(M11.shape[0]))
    ax.plot_surface(X, Y, M11, cmap='viridis')
axis([0 20 0 20 -1 1])

# 3. Intensity, 2D

plt.subplot(2, 2, 3)

plt.contour(MM11)
plt.xlim(0, 20)
plt.ylim(0, 20)

plt.subplot(2, 2, 4)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM11.shape[1]), np.arange(MM11.shape[0]))
    ax.plot_surface(X, Y, MM11, cmap='viridis')
axis([0 20 0 20 0 1])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N1RECBOX
% Modes of the rectangular box in two dimensions 
% Standing sine waves in x and y direction. Mode number and constants.
% x direction n1 and a
% y direction n2 and b
% The wave in each direction is shown and Contour and surface plots.
% The square is also shown as surface plot.
function N1RECBOX;
N = 20;
a = 40;
b = 40;
n1 = 2;
n2 = 2;

Lamda1 = 2 * a /n1;
Lamda2 = 2 * b /n2;

i =(0:1:N); 
j =(0:1:N);

x = (-40) + 2.001*i;
y = (-40) + 2.0001*j;

y1 = sin(2*pi*x/Lamda1);
y2 = sin(2*pi*y/Lamda2);

% 1. One Dimension
figure(1);
subplot(1,2,1);
plot(x,y1);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Xi');
legend('y1(x)');

subplot(1,2,2);
plot(y,y2);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Yj');
legend('y2(y)');

% 2. Amplitude, 2D
nx = length(x);
ny = length(y);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            M11(r,c)= y1(r)*y2(c);
            MM11(r,c)= (y1(r)*y2(c))^2;
        end;
end;

figure(2);
subplot(2,2,1);
              
contour(M11);
axis([0 20 0 20]);  



subplot(2,2,2);
mesh(M11);
axis([0 20 0 20 -1 1])

% 3. Intensity, 2D

subplot(2,2,3);              
contour(MM11);
axis([0 20 0 20]);  

subplot(2,2,4);
mesh(MM11);
axis([0 20 0 20 0 1])
`,cCode:"",defaultParams:{},displayName:"N1RECBOX",tags:["chapter6","intensity","amplitude","contour-plot","3d-visualization"],wikipediaLinks:[{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"}]},{id:"N4SYMULANTb",title:"N4SYMULANTb - N4SYMULANTb Page 2 \r",description:"N4SYMULANTb Page 2 \r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N4SYMULANTb Page 2 
# Numerical calculation

n1 = 1
n2 = 1.5
n3 = 2
# i = np.sqrt(-1)
# for a single interface, that is
M11= 1
M12 = 0
M21 = 0
M22 = 1
tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
# tt = 0.444
R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))**2
# R = 0.111
# One sees that R+TT is not 1 and tt is not the transmitted power
# However if n3*tt is the transmitted power T, one has:
T = n3*tt
# T=0.889
# T+R = 1
# and if n1 is not 1 we have more generally to write:
T = (n3/n1)*tt
# For antireflection coating one has eq. 6.27
nn1 = 1
nn2 = np.arange(1.1, 2+0.01, 0.01)
nn3 = 1.5
MM12 = (-i)/nn2
MM21 = (-i)*nn2
r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1))
# since -i cancels out we have
MM12 = 1/nn2
MM21 = nn2
R = ((-(-nn3*MM12*nn1+MM21))/(MM21+nn3*MM12*nn1))**2
fig = plt.figure(1)

plt.plot(nn2,R)

plt.xlim(1, 1.5)
plt.ylim(0, 0.1)
;                  # PLOTS LIMITS                    
plt.xlabel('nn2')
plt.legend(['R(nn2)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N4SYMULANTb Page 2 
% Numerical calculation
function N4SYMULANTb;
n1 = 1;
n2 = 1.5;
n3 = 2;
% i = sqrt(-1);
% for a single interface, that is
M11= 1;
M12 = 0;
M21 = 0;
M22 = 1;

tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
% tt = 0.444;

R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))^2;
% R = 0.111;

% One sees that R+TT is not 1 and tt is not the transmitted power
% However if n3*tt is the transmitted power T, one has
T = n3*tt;
% T=0.889
% T+R = 1;
% and if n1 is not 1 we have more generally to write
T = (n3/n1)*tt;
% For antireflection coating one has eq. 6.27
nn1 = 1;
nn2 = (1.1:0.01:2);
nn3 = 1.5;
MM12 = (-i)./nn2;
MM21 = (-i).*nn2;

r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1));




% since -i cancels out we have
MM12 = 1./nn2;
MM21 = nn2;

R = ((-(-nn3*MM12*nn1+MM21))./(MM21+nn3*MM12*nn1)).^2;
figure(1);
plot(nn2,R);
axis([1 1.5 0 0.1]);                  % PLOTS LIMITS                    
xlabel('nn2');
legend('R(nn2)');
`,cCode:"",defaultParams:{},displayName:"N4SYMULANTb Page 2",tags:["chapter6","reflection"],wikipediaLinks:[{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"}]},{id:"N6PLSPS",title:"N6PLSPS - N6PLSPS\r",description:"N6PLSPS\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N6PLSPS
# Wave traveling with total internal reflection through a planar waveguide.
# Resonance condition of s-polarization.
# Global definition of n1, n2, n3, d and ? above the graph


n1 = 1.5
n2 = 1
n3 = 1
d = 18
Lamda = 2
Theta = np.arange(0, 90+1, 1)
y = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)
zs1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2))/(n1*np.cos(2*np.pi*Theta/360))
ys1 = -atan(zs1)
zs3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2))/(n1*np.cos(2*np.pi*Theta/360))
ys3 = -atan(zs3)
# ys is for m=1, yys for m=2, yyys for m=3
# For these parameters the angle
# Theta of the first three possible modes is determined

ys = -ys1 -ys3 + np.pi
yys = -ys1 -ys3 + np.pi*2
yyys = -ys1 -ys3 + np.pi*3
# Global Definition
Thetac = asin(n2/n1)
ThetaThetac = 360*Thetac/(2*np.pi)
# ThetaThetac = 41.81

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys)

plt.xlim(0, 90)
plt.ylim(0, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['y(	heta)', 'ys(	heta)', 'yys(	heta)', 'yyys(	heta)'])
# At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
# fulfilled.
# The functions ys, yys and yyys are complex in the region from horizontal appearance to
# zero. This is shown in the next graph where the argument is plotted. The complex region
# has to be disregarded for the determination of the cross-over point.

plt.subplot(2, 1, 2)

plt.plot(Theta,angle(ys)
,Theta,angle(yys),Theta,angle(yyys))
plt.xlim(0, 100)
plt.ylim(0, 0.6)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(ys(	heta))', 'angle(yys(	heta))', 'angle(yyys(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N6PLSPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition of s-polarization.
% Global definition of n1, n2, n3, d and ? above the graph

function N6PLSPS;
n1 = 1.5;
n2 = 1;
n3 = 1;
d = 18;
Lamda = 2;
Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zs1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2))./(n1*cos(2*pi*Theta/360));
ys1 = -atan(zs1);
zs3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2))./(n1*cos(2*pi*Theta/360));
ys3 = -atan(zs3);

% ys is for m=1, yys for m=2, yyys for m=3
% For these parameters the angle
% Theta of the first three possible modes is determined

ys = -ys1 -ys3 + pi;
yys = -ys1 -ys3 + pi*2;
yyys = -ys1 -ys3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('y(	heta)','ys(	heta)','yys(	heta)','yyys(	heta)');


% At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
% fulfilled.
% The functions ys, yys and yyys are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(ys),Theta,angle(yys),Theta,angle(yyys));
axis([0 100 0 0.6]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(ys(	heta))','angle(yys(	heta))','angle(yyys(	heta))');`,cCode:"",defaultParams:{},displayName:"N6PLSPS",tags:["chapter6","reflection","polarization"],wikipediaLinks:[{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Polarization (waves)",url:"https://en.wikipedia.org/wiki/Polarization_(waves)"}]},{id:"N7PLPPS",title:"N7PLPPS - N7PLPPS\r",description:"N7PLPPS\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N7PLPPS
# Wave traveling with total internal reflection through a planar waveguide.
# Resonance condition for p-polarization.
# global definition of n1,n2,n3, d and ? above the graph

n1 = 1.5
n2 = 1
n3 = 1
d = 6
Lamda = 4.3
LamdaLamda = Lamda/n1
# LamdaLamda = 2.867

Theta = np.arange(0, 90+1, 1)
y = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)
zp1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2)*n1)/((n2**2)*np.cos(2*np.pi*Theta/360))
yp1 = -atan(zp1)
zp3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2)*n1)/((n3**2)*np.cos(2*np.pi*Theta/360))
yp3 = -atan(zp3)
# For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + np.pi
yyp = -yp1 -yp3 + np.pi*2
yyyp = -yp1 -yp3 + np.pi*3
# Global Definition
Thetac = asin(n2/n1)
ThetaThetac = 360*Thetac/(2*np.pi)
# ThetaThetac = 41.81

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp)

plt.xlim(0, 90)
plt.ylim(0, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['y(	heta)', 'yp(	heta)', 'yyp(	heta)', 'yyyp(	heta)'])
# At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
# fulfilled.
# The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
# zero. This is shown in the next graph where the argument is plotted. The complex region
# has to be disregarded for the determination of the cross-over point.

plt.subplot(2, 1, 2)

plt.plot(Theta,angle(yp)
,Theta,angle(yyp),Theta,angle(yyyp))
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(yp(	heta))', 'angle(yyp(	heta))', 'angle(yyyp(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N7PLPPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition for p-polarization.
% global definition of n1,n2,n3, d and ? above the graph
function N7PLPPS;

n1 = 1.5;
n2 = 1;
n3 = 1;
d = 6;
Lamda = 4.3;
LamdaLamda = Lamda/n1
% LamdaLamda = 2.867

Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zp1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2)*n1)./((n2^2)*cos(2*pi*Theta/360));
yp1 = -atan(zp1);
zp3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2)*n1)./((n3^2)*cos(2*pi*Theta/360));
yp3 = -atan(zp3);

% For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + pi;
yyp = -yp1 -yp3 + pi*2;
yyyp = -yp1 -yp3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('y(	heta)','yp(	heta)','yyp(	heta)','yyyp(	heta)');

% At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
% fulfilled.
% The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(yp),Theta,angle(yyp),Theta,angle(yyyp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(yp(	heta))','angle(yyp(	heta))','angle(yyyp(	heta))');

`,cCode:"",defaultParams:{},displayName:"N7PLPPS",tags:["chapter6","reflection","polarization"],wikipediaLinks:[{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Polarization (waves)",url:"https://en.wikipedia.org/wiki/Polarization_(waves)"}]},{id:"N8CWGK",title:"N8CWGK - N8CWGK\r",description:"N8CWGK\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N8CWGK
# Dielectric circular waveguide, determination of k
# 1. Check for positive values of argument for J0, J1 and K0, K1

# Input Data: radius, wavelength and refractive
# indices
a = 3
Lamda = 2.39
n1 = 1.5
no =1
# We try the interval 
k = np.arange(2.65, 3.8+0.01, 0.01)
# Since x = (?a)**2 and y= (?a)**2
# We have for the square of the arguments of the Bessel functions
xx = (a**2)*(((n1**2)*4*np.pi**2)/(Lamda**2)-k**2)
yy = (a**2)*(k**2-((no**2)*4*np.pi**2)/(Lamda**2))
x = np.sqrt(xx)
y = np.sqrt(yy)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(k,x,k,y)

plt.xlim(2.6, 3.8)
plt.ylim(0, 20)
;                  # PLOTS LIMITS                    
plt.xlabel('k')
plt.legend(['x(k)', 'y(k)'])
plt.subplot(2, 1, 2)

plt.plot(k,-besselj(1,x)
/(x*besselj(0,x)),k,besselk(1,y)/(y*besselk(0,y)))
plt.xlim(2.6, 3.8)
plt.ylim(-40, 10)
;                  # PLOTS LIMITS                    
plt.xlabel('k')
plt.legend(['-besselj(1,x)/(x*besselj(0,x))', 'besselk(1,y)/(y*besselk(0,y))'])
# From graph: First intersection
kk = 2.66
LamdaLamda = (2*np.pi)/kk
# LamdaLamda = 2.362
# Side calculation. If
LamdaLamdaLamda = 8
# we get
kkk = 2*np.pi/LamdaLamdaLamda
# and kkk = 0.785

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N8CWGK
% Dielectric circular waveguide, determination of k
% 1. Check for positive values of argument for J0, J1 and K0, K1
function N8CWGK;
%Input Data: radius, wavelength and refractive
% indices
a = 3;
Lamda = 2.39;
n1 = 1.5;
no =1;


% We try the interval 
k = (2.65:0.01:3.8);


% Since x = (?a)^2 and y= (?a)^2
% We have for the square of the arguments of the Bessel functions
xx = (a^2)*(((n1^2)*4*pi^2)/(Lamda^2)-k.^2);
yy = (a^2)*(k.^2-((no^2)*4*pi^2)/(Lamda^2));

x = sqrt(xx);
y = sqrt(yy);

figure(1);
subplot(2,1,1);
plot(k,x,k,y);
axis([2.6 3.8 0 20]);                  % PLOTS LIMITS                    
xlabel('k');
legend('x(k)','y(k)');

subplot(2,1,2);
plot(k,-besselj(1,x)./(x.*besselj(0,x)),k,besselk(1,y)./(y.*besselk(0,y)));
axis([2.6 3.8 -40 10]);                  % PLOTS LIMITS                    
xlabel('k');
legend('-besselj(1,x)/(x*besselj(0,x))','besselk(1,y)/(y*besselk(0,y))');


% From graph: First intersection
kk = 2.66;
LamdaLamda = (2*pi)/kk
% LamdaLamda = 2.362;

% Side calculation. If
LamdaLamdaLamda = 8;
% we get
kkk = 2*pi/LamdaLamdaLamda
% and kkk = 0.785
`,cCode:"",defaultParams:{},displayName:"N8CWGK",tags:["chapter6","wavelength"],wikipediaLinks:[{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"}]}],D1=[{id:"L10WRS",title:"L10WRS - L10WRS Radius of curvature and Beam waist.\r",description:"L10WRS Radius of curvature and Beam waist.\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L10WRS Radius of curvature and Beam waist.
# 1. Radius of curvature
# Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)**2) and set
# w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
# Radius of curvature R(z) = z + (zR)**2/z


zR = 100
z = np.arange(-100, 100+0.01, 0.01)
R = np.abs(z+((zR)**2)/z)
Rm = 2*zR
# At z = 1/2 of distance of mirrors, that is
# for for distance 200 at 100,
# the radius of curvature must be
# equal to the distance of the mirrors.

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(z,R)

plt.xlim(-100, 100)
plt.ylim(0, 1000)
;                  # PLOTS LIMITS                    
plt.xlabel('z')
plt.legend(['R(z)'])
# 2. Beam waist
# Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
# If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; # and for the asymptote
yy = -y
w = 0.1*np.sqrt(1+(z/zR)**2); # and for the asymptote
ww = -0.1*np.sqrt(1+(z/zR)**2)
plt.subplot(2, 1, 2)

plt.plot(z,w,z,ww,z,y,z,yy)

plt.xlim(-100, 100)
plt.ylim(-0.2, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('z')
plt.legend(['w(z)', 'ww(z)', 'y(z)', 'yy(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L10WRS Radius of curvature and Beam waist.
% 1. Radius of curvature
% Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)^2) and set
% w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
% Radius of curvature R(z) = z + (zR)^2/z

function L10WRS;

zR = 100;
z = (-100:0.01:100);
R = abs(z+((zR)^2)./z);
Rm = 2*zR;

% At z = 1/2 of distance of mirrors, that is
% for for distance 200 at 100,
% the radius of curvature must be
% equal to the distance of the mirrors.

figure(1);
subplot(2,1,1);
plot(z,R);
axis([-100 100 0 1000]);                  % PLOTS LIMITS                    
xlabel('z');
legend('R(z)');

% 2. Beam waist
% Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
% If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; % and for the asymptote
yy = -y;

w = 0.1*sqrt(1+(z/zR).^2); % and for the asymptote
ww = -0.1*sqrt(1+(z/zR).^2);

subplot(2,1,2);
plot(z,w,z,ww,z,y,z,yy);
axis([-100 100 -0.2 0.3]);                  % PLOTS LIMITS                    
xlabel('z');
legend('w(z)','ww(z)','y(z)','yy(z)');
`,cCode:"",defaultParams:{},displayName:"L10WRS Radius of curvature and Beam waist.",tags:["chapter7","light-sources","mirror"],wikipediaLinks:[{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L11MOCONFCS",title:"L11MOCONFCS - L11MOCONFCS\r",description:"L11MOCONFCS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L11MOCONFCS

# Cartesian Coordinates for rectangular mirrors in confocal resonator.
# Field distribution as contour plot..

# The mode numbers m and n are for Hermitian Polynomials.
# The constant in the exponential is simulated by X.
# Small X correspond to small "waist width".


N = 40
X = 100
Y = 100
i = (0:1:N)
j = (0:1:N)
xi = (-20) + 1.00*i
yj = (-20) + 1.00*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M00(r,k)  =(g(x,y)*H00(x,y))**2
            M01(r,k)  =(g(x,y)*H01(x,y))**2
            M02(r,k)  =(g(x,y)*H02(x,y))**2
            M10(r,k)  =(g(x,y)*H10(x,y))**2
            M11(r,k)  =(g(x,y)*H11(x,y))**2
            M12(r,k)  =(g(x,y)*H12(x,y))**2
            M20(r,k)  =(g(x,y)*H20(x,y))**2
            M21(r,k)  =(g(x,y)*H21(x,y))**2
            M22(r,k)  =(g(x,y)*H22(x,y))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.contour(M00)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M00'])

plt.subplot(2, 2, 2)

plt.contour(M10)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M10'])


plt.subplot(2, 2, 3)

plt.contour(M01)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M01'])

plt.subplot(2, 2, 4)

plt.contour(M11)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M11'])

fig = plt.figure(2)

plt.subplot(3, 2, 1)

plt.contour(M20)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M20'])


plt.subplot(3, 2, 2)

plt.contour(M21)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M21'])

plt.subplot(3, 2, 3)

plt.contour(M02)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M02'])

plt.subplot(3, 2, 4)

plt.contour(M12)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M12'])

plt.subplot(3, 1, 3)

plt.contour(M22)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M22'])



Out = x**2+y**2
Out = np.exp(-R(x,y)/X)
Out = 1
Out = 1
Out = x*np.sqrt(2/X)
Out = y*np.sqrt(2/Y)
Out = 4*((np.sqrt(2/Y)*y)**2)-2
Out =  4*((np.sqrt(2/X)*x)**2)-2
Out = H0x(x)*H0y(y)
Out = H0x(x)*H1y(y)
Out = H0x(x)*H2y(y)
Out = H1x(x)*H0y(y)
Out = H1x(x)*H1y(y)
Out = H1x(x)*H2y(y)
Out = H2x(x)*H0y(y)
Out = H2x(x)*H1y(y)
Out = H2x(x)*H2y(y)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L11MOCONFCS

% Cartesian Coordinates for rectangular mirrors in confocal resonator.
% Field distribution as contour plot..

% The mode numbers m and n are for Hermitian Polynomials.
% The constant in the exponential is simulated by X.
% Small X correspond to small "waist width".

function L11MOCONFCS;
global X Y;
N = 40;
X = 100;
Y = 100;
i = (0:1:N);
j = (0:1:N);

xi = (-20) + 1.00*i;
yj = (-20) + 1.00*j;
nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(g(x,y).*H00(x,y)).^2;
            M01(r,k)  =(g(x,y).*H01(x,y)).^2;
            M02(r,k)  =(g(x,y).*H02(x,y)).^2;
            M10(r,k)  =(g(x,y).*H10(x,y)).^2;
            M11(r,k)  =(g(x,y).*H11(x,y)).^2;
            M12(r,k)  =(g(x,y).*H12(x,y)).^2;
            M20(r,k)  =(g(x,y).*H20(x,y)).^2;
            M21(r,k)  =(g(x,y).*H21(x,y)).^2;
            M22(r,k)  =(g(x,y).*H22(x,y)).^2;
       end;
end;



figure(1);
subplot(2,2,1);
contour(M00);
axis([0 40 0 40]);  
legend('M00');

subplot(2,2,2);
contour(M10);
axis([0 40 0 40]);  
legend('M10');


subplot(2,2,3);    
contour(M01);
axis([0 40 0 40]);  
legend('M01');

subplot(2,2,4);      
contour(M11);
axis([0 40 0 40]);  
legend('M11');

figure(2);         
subplot(3,2,1);
contour(M20);
axis([0 40 0 40]);  
legend('M20');


subplot(3,2,2);
contour(M21);
axis([0 40 0 40]);  
legend('M21');

subplot(3,2,3);      
contour(M02);
axis([0 40 0 40]);  
legend('M02');

subplot(3,2,4);      
contour(M12);
axis([0 40 0 40]);  
legend('M12');

subplot(3,1,3);      
contour(M22);
axis([0 40 0 40]);  
legend('M22');


function Out=R(x,y)
Out = x.^2+y.^2;

function Out=g(x,y)
global X;
Out = exp(-R(x,y)./X);

function Out=H0x(x)
Out = 1;
function Out=H0y(y)
Out = 1;

function Out=H1x(x)
global Y;
Out = x.*sqrt(2/X);

function Out=H1y(y)
global Y;
Out = y.*sqrt(2/Y);

function Out=H2y(y)
global Y;
Out = 4*((sqrt(2/Y).*y).^2)-2;

function Out=H2x(x)
Out =  4*((sqrt(2/X).*x).^2)-2;

function Out=H00(x,y)
Out = H0x(x).*H0y(y);

function Out=H01(x,y)
Out = H0x(x).*H1y(y);

function Out=H02(x,y)
Out = H0x(x).*H2y(y);

function Out=H10(x,y)
Out = H1x(x).*H0y(y);

function Out=H11(x,y)
Out = H1x(x).*H1y(y);

function Out=H12(x,y)
Out = H1x(x).*H2y(y);

function Out=H20(x,y)
Out = H2x(x).*H0y(y);

function Out=H21(x,y)
Out = H2x(x).*H1y(y);

function Out=H22(x,y)
Out = H2x(x).*H2y(y);
`,cCode:"",defaultParams:{},displayName:"L11MOCONFCS",tags:["chapter7","light-sources","mirror","focal-length","contour-plot"],wikipediaLinks:[{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L12MOCY1to4S",title:"L12MOCY1to4S - L12MOCY1to4S\r",description:"L12MOCY1to4S\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L12MOCY1to4S
# Cylindircal Coordinates for circular mirrors in confocal resonator.
# Field distribution as contour plot for graph 00, 10, 01, and 11.
# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
# X


X = 3
N = 30
i = (0:1:N)
j = (0:1:N)
xi = -3 + 0.20001*i
yj = -3 + 0.20001*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M00(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L00(x,y))**2
            M10(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L01(x,y))**2
            M01(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L10(x,y))**2
            M11(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L11(x,y))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

Mesh(M00)
axis([0 30 0 30 0 1])
plt.legend(['M00'])

plt.subplot(2, 2, 2)

Mesh(M10)
axis([0 30 0 30 0 1.5])
plt.legend(['M10'])

plt.subplot(2, 2, 3)

Mesh(M01)
axis([0 30 0 30 0 1])
plt.legend(['M01'])

plt.subplot(2, 2, 4)

Mesh(M11)
axis([0 30 0 30 0 3.5])
plt.legend(['M11'])


Out = x**2+y**2
Out = atan(x/y)
Out = np.exp(-R(x,y)/X)
Out = 4*R(x,y)/X
Out = np.cos(0*Beta(x,y))
Out = 1
Out = 1-u(x,y)
Out = 1
Out = 2-u(x,y)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L12MOCY1to4S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot for graph 00, 10, 01, and 11.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X

function L12MOCY1to4S;
global X;
X = 3;
N = 30;
i = (0:1:N);
j = (0:1:N);
xi = -3 + 0.20001*i;
yj = -3 + 0.20001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L00(x,y)).^2;
            M10(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L01(x,y)).^2;
            M01(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L10(x,y)).^2;
            M11(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L11(x,y)).^2;
       end;
end;

figure(1);         
subplot(2,2,1);
Mesh(M00);
axis([0 30 0 30 0 1]); 
legend('M00');

subplot(2,2,2);    
Mesh(M10);
axis([0 30 0 30 0 1.5]); 
legend('M10');

subplot(2,2,3);    
Mesh(M01);
axis([0 30 0 30 0 1]); 
legend('M01');

subplot(2,2,4);          
Mesh(M11);
axis([0 30 0 30 0 3.5]); 
legend('M11');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L00(x,y)
Out = 1;

function Out=L01(x,y)
Out = 1-u(x,y);

function Out=L10(x,y)
Out = 1;

function Out=L11(x,y)
Out = 2-u(x,y);
`,cCode:"",defaultParams:{},displayName:"L12MOCY1to4S",tags:["chapter7","light-sources","mirror","focal-length","contour-plot","3d-visualization"],wikipediaLinks:[{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L12MOCY5to9S",title:"L12MOCY5to9S - L12MOCY5to9S\r",description:"L12MOCY5to9S\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L12MOCY5to9S
# Cylindircal Coordinates for circular mirrors in confocal resonator.
# Field distribution as contour plot of 02 to 20.
# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
# X.


X = 2
N = 30
i = (0:1:N)
j = (0:1:N)
xi = -4 + 0.30001*i
yj = -4 + 0.30001*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M02(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L20(x,y))**2
            M20(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L02(x,y))**2
            M12(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L21(x,y))**2
            M21(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L12(x,y))**2
            M22(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L22(x,y))**2
fig = plt.figure(1)

plt.subplot(3, 2, 1)

Mesh(M02)
axis([0 30 0 30 0 0.6])
plt.legend(['M02'])

plt.subplot(3, 2, 2)

Mesh(M20)
axis([0 30 0 30 0 6])
plt.legend(['M20'])

plt.subplot(3, 2, 3)

Mesh(M12)
axis([0 30 0 30 0 5])
plt.legend(['M12'])

plt.subplot(3, 2, 4)

Mesh(M21)
axis([0 30 0 30 0 5])
plt.legend(['M21'])

plt.subplot(3, 1, 3)

Mesh(M22)
axis([0 30 0 30 0 15])
plt.legend(['M22'])


Out = x**2+y**2
Out = atan(x/y)
Out = np.exp(-R(x,y)/X)
Out = 4*R(x,y)/X
Out = np.cos(0*Beta(x,y))
Out = 1-2*u(x,y)+(1/2)*u(x,y)**2
Out = 3-3*u(x,y)+(1/2)*u(x,y)**2
Out = 1
Out = 3 - u(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L12MOCY5to9S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot of 02 to 20.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X.

function L12MOCY5to9S;
global X;
X = 2;
N = 30;
i = (0:1:N);
j = (0:1:N);

xi = -4 + 0.30001*i;
yj = -4 + 0.30001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M02(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L20(x,y)).^2;
            M20(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L02(x,y)).^2;
            M12(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L21(x,y)).^2;
            M21(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L12(x,y)).^2;
            M22(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L22(x,y)).^2;
       end;
end;

figure(1);
subplot(3,2,1);
Mesh(M02);
axis([0 30 0 30 0 0.6]); 
legend('M02');

subplot(3,2,2);
Mesh(M20);
axis([0 30 0 30 0 6]); 
legend('M20');

subplot(3,2,3);      
Mesh(M12);
axis([0 30 0 30 0 5]); 
legend('M12');

subplot(3,2,4);      
Mesh(M21);
axis([0 30 0 30 0 5]); 
legend('M21');

subplot(3,1,3);         
Mesh(M22);
axis([0 30 0 30 0 15]); 
legend('M22');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L02(x,y)
Out = 1-2*u(x,y)+(1/2)*u(x,y)^2;

function Out=L12(x,y)
Out = 3-3*u(x,y)+(1/2)*u(x,y)^2;

function Out=L20(x,y)
Out = 1;

function Out=L21(x,y)
Out = 3 - u(x,y);

function Out=L22(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)^2;
`,cCode:"",defaultParams:{},displayName:"L12MOCY5to9S",tags:["chapter7","light-sources","mirror","focal-length","contour-plot","3d-visualization"],wikipediaLinks:[{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Focal length",url:"https://en.wikipedia.org/wiki/Focal_length"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"LIRJEANS",title:"LIRJEANS - L1RJEANS\r",description:"L1RJEANS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L1RJEANS
# The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
# and per volume.It is given here as Ws/{(1/s)m**3}


v = (5e14:-0.01e14:1e12)
c = 3e8
k = 1.38e-23
T = 1000
y = 8*np.pi*k*T*(v**2)/(c**3)
fig = plt.figure(1)

plt.plot(v,y)

plt.xlim(0, 5e14)
plt.ylim(0, 3e-15)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['y(v)'])
# Frequency
# 1e11 is 3mm
# 1e14 is 3micron
# 1e17 is 3nm is 30A
# 3e11 is 1mm   
# 3e14 is 1micron
# 3e17 is 1nm is 10A


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L1RJEANS
% The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
% and per volume.It is given here as Ws/{(1/s)m^3}

function LIRJEANS;
v = (5e14:-0.01e14:1e12);
c = 3e8;
k = 1.38e-23
T = 1000;

y = 8*pi*k*T*(v.^2)/(c^3);
figure(1);
plot(v,y);
axis([0 5e14 0 3e-15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('y(v)');

% Frequency
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A
% 3e11 is 1mm   
% 3e14 is 1micron
% 3e17 is 1nm is 10A

`,cCode:"",defaultParams:{},displayName:"L1RJEANS",tags:["chapter7","light-sources","frequency"],wikipediaLinks:[{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L2BBLS",title:"L2BBLS - L2BBLS\r",description:"L2BBLS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L2BBLS
# 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
# 2. Integration over the wavelength range from 3*10**-6 to 3*10**-5 meters to obtain the
# Radiance.
# 3. Multiplication with area times solid angle to obtain the Radiant energy.

# 1. Black body Radiation. Graph of dL/d????
# Constants for wavelength dependence

c2 = 1.43e-2
c1 = 1.18e-16
T = 1000
x=(3e-5:-0.01e-5:1e-7); # x in meters
# Planck's Law depending on wavelength

fig = plt.figure(1)

plt.plot(x,f(x)
)
plt.xlim(0, 3e-5)
plt.ylim(0, 5e9)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['f(x)'])
R = quad(@f,3e-6,3e-5)
# Radiance  R = 1.316e4

# 3. Multiplication with area times solid angle to obtain the Radiant energy.
# Area A, Solid angle SA

A = 0.1
SA = 4
RR = A*SA*R  
# RR = 5.263e3 Watts

# RR has the same value as the corresponding value when integrating over frequency.




Out = c1/((x**5)*(np.exp(c2/(x*T))-1))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L2BBLS
% 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
% 2. Integration over the wavelength range from 3*10^-6 to 3*10^-5 meters to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% 1. Black body Radiation. Graph of dL/d????
% Constants for wavelength dependence
function L2BBLS;
global c1 c2 T;
c2 = 1.43e-2;
c1 = 1.18e-16;
T = 1000;

x=(3e-5:-0.01e-5:1e-7); % x in meters
% Planck's Law depending on wavelength

figure(1);
plot(x,f(x));
axis([0 3e-5 0 5e9]);                  % PLOTS LIMITS                    
xlabel('x');
legend('f(x)');

R = quad(@f,3e-6,3e-5)
% Radiance  R = 1.316e4

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over frequency.


function Out = f(x) 
global c1 c2 T;
Out = c1./((x.^5).*(exp(c2./(x*T))-1));`,cCode:"",defaultParams:{},displayName:"L2BBLS",tags:["chapter7","light-sources","grating","wavelength","frequency"],wikipediaLinks:[{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L3BBFS",title:"L3BBFS - L3BBFS\r",description:"L3BBFS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L3BBFS

# 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
# 2. Integration over the wavelength range from 10**14 to 3*10**13 1/s to obtain the
# Radiance.
# 3. Multiplication with area times solid angle to obtain the Radiant energy.

# Constants for frequency dependence


c4 = 4.78e-11
c3 = 1.47e-50
T = 1000
v=(5e14:-0.01e14:1e12)
# Planck's Law depending on frequency

fig = plt.figure(1)

plt.plot(v,f(v)
)
plt.xlim(0, 5e14)
plt.ylim(0, 2e-10)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['f(v)'])
R = quad(@f,1e13,1e14)
# Radiance  R = 1.316e4 Watts

# 3. Multiplication with area times solid angle to obtain the Radiant energy.
# Area A, Solid angle SA

A = 0.1
SA = 4
RR = A*SA*R  
# RR = 5.263e3 Watts

# RR has the same value as the corresponding value when integrating over wavelength.


Out = (c3/(np.exp(c4*v/T)-1))*(v**3)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L3BBFS

% 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
% 2. Integration over the wavelength range from 10^14 to 3*10^13 1/s to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% Constants for frequency dependence

function L3BBFS;
global c3 c4 T;
c4 = 4.78e-11;
c3 = 1.47e-50;
T = 1000;

v=(5e14:-0.01e14:1e12);
% Planck's Law depending on frequency

figure(1);
plot(v,f(v));
axis([0 5e14 0 2e-10]);                  % PLOTS LIMITS                    
xlabel('v');
legend('f(v)');

R = quad(@f,1e13,1e14)
% Radiance  R = 1.316e4 Watts

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over wavelength.
function Out = f(v) 
global c3 c4 T;
Out = (c3./(exp(c4*v/T)-1)).*(v.^3);`,cCode:"",defaultParams:{},displayName:"L3BBFS",tags:["chapter7","light-sources","grating","wavelength","frequency"],wikipediaLinks:[{title:"Diffraction grating",url:"https://en.wikipedia.org/wiki/Diffraction_grating"},{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L4STEFS",title:"L4STEFS - L4STEFS\r",description:"L4STEFS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L4STEFS

# The Stefan Boltzmann Law. The units are Power/area in Watt/m**2
# A linear and a logarithmic scale are used.

h = 6.626e-34
c = 3e8
k = 1.38e-23
T = np.arange(10, 10000+10, 10)
Sigma = (2/15)*(( (np.pi**5)*(k**4))/((c**2)*(h**3)))
# Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T**4)
# Linear y-scale
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(T,yT)

plt.xlim(0, 1e4)
plt.ylim(0, 6e8)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.title('Linear y-scale')
plt.legend(['y(T)'])
# Logarithmic y-scale
plt.subplot(2, 1, 2)

semilogy(T,yT)
plt.xlim(0, 1e4)
plt.ylim(1e-4, 1e9)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.title('Logarithmic y-scale')
plt.legend(['y(T)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L4STEFS

% The Stefan Boltzmann Law. The units are Power/area in Watt/m^2
% A linear and a logarithmic scale are used.
function L4STEFS;
h = 6.626e-34;
c = 3e8;
k = 1.38e-23;
T = (10:10:10000);
Sigma = (2/15)*(( (pi^5)*(k^4))/((c^2)*(h^3)))
% Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T.^4);

% Linear y-scale
figure(1);
subplot(2,1,1);
plot(T,yT);
axis([0 1e4 0 6e8]);                  % PLOTS LIMITS                    
xlabel('T');
title('Linear y-scale');
legend('y(T)');

% Logarithmic y-scale
subplot(2,1,2);
semilogy(T,yT);
axis([0 1e4 1e-4 1e9]);                  % PLOTS LIMITS                    
xlabel('T');
title('Logarithmic y-scale');
legend('y(T)');`,cCode:"",defaultParams:{},displayName:"L4STEFS",tags:["chapter7","light-sources"],wikipediaLinks:[{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L5WIENS",title:"L5WIENS - L5WienS\r",description:"L5WienS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L5WienS
# Wien's displacement Law
# Graphs of Wien's displacement Law T = 0 to 8000

# Temperature in Kelvin
# Wavelength in meter

T = np.arange(100, 8000+1, 1)
Lamda = (1/T)*2.89e-6
fig = plt.figure(1)

plt.subplot(2, 1, 1)

semilogy(T,Lamda)
plt.xlim(0, 8000)
plt.ylim(1e-10, 1e-7)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.legend(['lambda(T)'])
# Graphs of Wien's displacement Law T = 0 to 500
TT = np.arange(10, 500+1, 1)
LamdaLamda = (1/TT)*2.89e-6
plt.subplot(2, 1, 2)

semilogy(TT,LamdaLamda)
plt.xlim(0, 500)
plt.ylim(1e-9, 1e-6)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.legend(['lambdalambda(TT)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L5WienS
% Wien's displacement Law
% Graphs of Wien's displacement Law T = 0 to 8000

% Temperature in Kelvin
% Wavelength in meter
function L5WIENS;
T = (100:1:8000);
Lamda = (1./T)*2.89e-6;

figure(1);
subplot(2,1,1);
semilogy(T,Lamda);
axis([0 8000 1e-10 1e-7]);                  % PLOTS LIMITS                    
xlabel('T');
legend('lambda(T)');

% Graphs of Wien's displacement Law T = 0 to 500
TT = (10:1:500);
LamdaLamda = (1./TT)*2.89e-6;

subplot(2,1,2);
semilogy(TT,LamdaLamda);
axis([0 500 1e-9 1e-6]);                  % PLOTS LIMITS                    
xlabel('T');
legend('lambdalambda(TT)');

`,cCode:"",defaultParams:{},displayName:"L5WienS",tags:["chapter7","light-sources","wavelength"],wikipediaLinks:[{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]},{id:"L6BANDS",title:"L6BANDS - L6BANDS\r",description:"L6BANDS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L6BANDS
# Lorentian Line shape

# Frequency interval
m=11
Omega0 = 49/(2**m-1)
OmegaStep = 1/(2**m-1)
Omega = (OmegaStep:OmegaStep:1)
Tau = 1000
g1 = 2*((1/(2*Tau))/((1/((2*Tau)**2))+(Omega-Omega0)**2))
Q = Tau*Omega0
# Q = 23.937

fig = plt.figure(1)

plt.plot(Omega,g1)

plt.xlim(0, 0.04)
plt.ylim(0, 4000)
;                  # PLOTS LIMITS                    
plt.xlabel('omega')
plt.legend(['g1(omega)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L6BANDS
% Lorentian Line shape
function L6BANDS;
% Frequency interval
m=11;

Omega0 = 49/(2^m-1);

OmegaStep = 1/(2^m-1);
Omega = (OmegaStep:OmegaStep:1);
Tau = 1000;

g1 = 2*((1/(2*Tau))./((1/((2*Tau)^2))+(Omega-Omega0).^2));
Q = Tau*Omega0
% Q = 23.937

figure(1);
plot(Omega,g1);
axis([0 0.04 0 4000]);                  % PLOTS LIMITS                    
xlabel('omega');
legend('g1(omega)');`,cCode:"",defaultParams:{},displayName:"L6BANDS",tags:["chapter7","light-sources","frequency"],wikipediaLinks:[{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Light source",url:"https://en.wikipedia.org/wiki/Light_source"},{title:"Laser",url:"https://en.wikipedia.org/wiki/Laser"}]}],M1=[{id:"of",title:"of - O1FRNKPSS\r",description:"O1FRNKPSS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O1FRNKPSS
# Complex reflection coefficients of Fresnel' formulas as function of angle
# of incidence for values of n2 and K.

# Absolute value and imaginary parts are plotted.

# n1, n2, K and ? are globally defined at the graphs.
# Complex reflection coefficients zrp for parallel and zrs for perpendicular case.


Theta = np.arange(0, 90+1, 1)
K = 2
n1 = 1
n2 = 1.5
zrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,np.abs(zrp)
,Theta,np.abs(zrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['abs(zrp(	heta))', 'abs(zrs(	heta))'])
plt.subplot(2, 1, 2)

plt.plot(Theta,angle(zrp)
,Theta,angle(zrs))
plt.xlim(0, 100)
plt.ylim(-3.5, 3.5)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(zrp(	heta))', 'angle(zrs(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O1FRNKPSS
% Complex reflection coefficients of Fresnel' formulas as function of angle
% of incidence for values of n2 and K.

% Absolute value and imaginary parts are plotted.

% n1, n2, K and ? are globally defined at the graphs.
% Complex reflection coefficients zrp for parallel and zrs for perpendicular case.

function O1FRNKPSS;
Theta = (0:1:90);
K = 2;
n1 = 1;
n2 = 1.5;

zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));


figure(1);
subplot(2,1,1);
plot(Theta,abs(zrp),Theta,abs(zrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('abs(zrp(	heta))','abs(zrs(	heta))');

subplot(2,1,2);
plot(Theta,angle(zrp),Theta,angle(zrs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(zrp(	heta))','angle(zrs(	heta))');
`,cCode:"",defaultParams:{},displayName:"O1FRNKPSS",tags:["chapter8","optical-materials","reflection"],wikipediaLinks:[{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"of",title:"of - O2FRSOPS Graphs of Ratios of reflection coefficients\r",description:"O2FRSOPS Graphs of Ratios of reflection coefficients\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O2FRSOPS Graphs of Ratios of reflection coefficients
# Reflection coefficients of Fresnel's formulas as function of angle
# of incidence for n and K. Real part and ratios of real parts are plotted.
# Refractive indices, K values, and ? are globally defined at the graphs.

# Complex zrp, zzrp, zzzrp for parallel and
# zrs, zzrs, zzzrs for perpendicular case.


K = 0.1
KK = 0.5
KKK = 2
n1 = 1
n2 = 1.5
nn2 = 3
Theta = np.arange(0, 90+1, 1)
# K = 0


zrp0 = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
zrs0 = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# K not 0

zrp = (((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
# For differen n and K

zzrp = (((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))
zzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))
zzzrp = (((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))
zzzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(Theta,real(zrp0)
,Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrp0(	heta))', 'real(zrp(	heta))', 'real(zzrp(	heta))', 'real(zzzrp(	heta))'])
plt.subplot(3, 2, 2)

plt.plot(Theta,real(zrs0)
,Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrs0(	heta))', 'real(zrs(	heta))', 'real(zzrs(	heta))', 'real(zzzrs(	heta))'])
# Ratio: p/s

plt.subplot(3, 1, 2)

plt.plot(Theta,real(zrp0)
/real(zrs0),Theta,real(zrp)/real(zrs),Theta,real(zzrp)/real(zzrs),Theta,real(zzzrp)/real(zzzrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrp0(	heta))/real(zrs0(	heta))', 'real(zrp(	heta))/real(zrs(	heta))', 'real(zzrp(	heta))/real(zzrs(	heta))', 'real(zzzrp(	heta))/real(zzzrs(	heta))'])
# Ratio: s/p

plt.subplot(3, 1, 3)

plt.plot(Theta,real(zrs0)
/real(zrp0),Theta,real(zrs)/real(zrp),Theta,real(zzrs)/real(zzrp),Theta,real(zzzrs)/real(zzzrp))
plt.xlim(0, 100)
plt.ylim(-300, 200)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrs0(	heta))/real(zrp0(	heta))', 'real(zrs(	heta))/real(zrp(	heta))', 'real(zzrs(	heta))/real(zzrp(	heta))', 'real(zzzrs(	heta))/real(zzzrp(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O2FRSOPS Graphs of Ratios of reflection coefficients
% Reflection coefficients of Fresnel's formulas as function of angle
% of incidence for n and K. Real part and ratios of real parts are plotted.
% Refractive indices, K values, and ? are globally defined at the graphs.

% Complex zrp, zzrp, zzzrp for parallel and
% zrs, zzrs, zzzrs for perpendicular case.

function O2FRSOPS;
K = 0.1;
KK = 0.5;
KKK = 2;
n1 = 1;
n2 = 1.5;
nn2 = 3;
Theta = (0:1:90);
% K = 0


zrp0 = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
zrs0 = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% K not 0

zrp = (((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

% For differen n and K

zzrp = (((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzzrp = (((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));
zzzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(3,2,1);
plot(Theta,real(zrp0),Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('real(zrp0(	heta))','real(zrp(	heta))','real(zzrp(	heta))','real(zzzrp(	heta))');

subplot(3,2,2);
plot(Theta,real(zrs0),Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('real(zrs0(	heta))','real(zrs(	heta))','real(zzrs(	heta))','real(zzzrs(	heta))');

% Ratio: p/s

subplot(3,1,2);
plot(Theta,real(zrp0)./real(zrs0),Theta,real(zrp)./real(zrs),Theta,real(zzrp)./real(zzrs),Theta,real(zzzrp)./real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');

legend('real(zrp0(	heta))/real(zrs0(	heta))','real(zrp(	heta))/real(zrs(	heta))','real(zzrp(	heta))/real(zzrs(	heta))','real(zzzrp(	heta))/real(zzzrs(	heta))');

% Ratio: s/p

subplot(3,1,3);
plot(Theta,real(zrs0)./real(zrp0),Theta,real(zrs)./real(zrp),Theta,real(zzrs)./real(zzrp),Theta,real(zzzrs)./real(zzzrp));
axis([0 100 -300 200]);                  % PLOTS LIMITS                    
xlabel('	heta');

legend('real(zrs0(	heta))/real(zrp0(	heta))','real(zrs(	heta))/real(zrp(	heta))','real(zzrs(	heta))/real(zzrp(	heta))','real(zzzrs(	heta))/real(zzzrp(	heta))');

`,cCode:"",defaultParams:{},displayName:"O2FRSOPS Graphs of Ratios of reflection coefficients",tags:["chapter8","optical-materials","reflection"],wikipediaLinks:[{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"O3OSTINS",title:"O3OSTINS - O3OSTINS Graphs of n and K\r",description:"O3OSTINS Graphs of n and K\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O3OSTINS Graphs of n and K
# 1. Dielectric Function for models with one oscillator in the infrared spectral
# region.
# The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
# The model parameters are S, ?1, ?o. We set z = n - iK
# S and ?1 are dimensionless,
# ?o in cm**-1 i

v = np.arange(900, 1200+1, 1)
S1 = 0.09
Gamma1 = 0.02
Epsiloninf = 20
vo1 = 1050
z1 = np.sqrt(Epsiloninf+ S1/(1-(v/vo1)**2-(Gamma1*v)/vo1))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(v,real(z1)
)
plt.xlim(900, 1200)
plt.ylim(-2, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['real(z1(v))'])
plt.subplot(3, 1, 2)

plt.plot(v,imag(z1)
)
plt.xlim(900, 1200)
plt.ylim(-2, 22)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['imag(z1(v))'])
# 2. For an optical thin medium with little absorption we have the following
# approximations. The parameters must be chosen such that n is close to
# 1 and K is small.

vv = np.arange(0, 2+0.1, 0.1)
a = 0.5e-5
c = 1e-3
n = 1 + a*((1-vv**2)/((1-vv**2)**2+(vv**2)*c**2))
k = (a*(vv*c))/((1-vv**2)**2+(vv**2)*c**2)
plt.subplot(3, 2, 5)

plt.plot(vv,n)

plt.xlim(0, 2)
plt.ylim(0.99995, 1.00005)
;                  # PLOTS LIMITS                    
plt.xlabel('vv')
plt.legend(['n(vv)'])
plt.subplot(3, 2, 6)

plt.plot(vv,k)

plt.xlim(0, 2)
plt.ylim(0, 0.006)
;                  # PLOTS LIMITS                    
plt.xlabel('vv')
plt.legend(['k(vv)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O3OSTINS Graphs of n and K
% 1. Dielectric Function for models with one oscillator in the infrared spectral
% region.
% The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
% The model parameters are S, ?1, ?o. We set z = n - iK
% S and ?1 are dimensionless,
% ?o in cm^-1 i
function O3OSTINS;
v = (900:1:1200);
S1 = 0.09;
Gamma1 = 0.02;
Epsiloninf = 20;
vo1 = 1050;
z1 = sqrt(Epsiloninf+ S1./(1-(v/vo1).^2-(Gamma1*v)/vo1));


figure(1);
subplot(3,1,1);
plot(v,real(z1));
axis([900 1200 -2 15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('real(z1(v))');

subplot(3,1,2);
plot(v,imag(z1));
axis([900 1200 -2 22]);                  % PLOTS LIMITS                    
xlabel('v');
legend('imag(z1(v))');

% 2. For an optical thin medium with little absorption we have the following
% approximations. The parameters must be chosen such that n is close to
% 1 and K is small.

vv = (0:0.1:2);
a = 0.5e-5;
c = 1e-3;
n = 1 + a*((1-vv.^2)./((1-vv.^2).^2+(vv.^2)*c^2));
k = (a*(vv*c))./((1-vv.^2).^2+(vv.^2)*c^2);

subplot(3,2,5);
plot(vv,n);
axis([0 2 0.99995 1.00005]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('n(vv)');

subplot(3,2,6);
plot(vv,k);
axis([0 2 0 0.006]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('k(vv)');
`,cCode:"",defaultParams:{},displayName:"O3OSTINS Graphs of n and K",tags:["chapter8","optical-materials"],wikipediaLinks:[{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"O4SELMRS",title:"O4SELMRS - O4SELMRS\r",description:"O4SELMRS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O4SELMRS
# Graph for a demonstration of the "Sellmeir" presentation of the refractive index.

# For fused quartz we have
c1 = 1.448
c2 = 3.3e5
c3 = 1.23e11
Lamda = np.arange(4000, 8000+1, 1)
n = c1 + c2/(Lamda**2) + c3/(Lamda**4)
fig = plt.figure(1)

plt.plot(Lamda,n)

plt.xlim(4000, 8000)
plt.ylim(1.45, 1.47)
;                  # PLOTS LIMITS                    
xlabel('lambda','Fontsize',12)
plt.legend(['n(lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O4SELMRS
% Graph for a demonstration of the "Sellmeir" presentation of the refractive index.
function O4SELMRS;
% For fused quartz we have
c1 = 1.448;
c2 = 3.3e5;
c3 = 1.23e11;
Lamda = (4000:1:8000);
n = c1 + c2./(Lamda.^2) + c3./(Lamda.^4);

figure(1);
plot(Lamda,n);
axis([4000 8000 1.45 1.47]);                  % PLOTS LIMITS                    
xlabel('lambda','Fontsize',12);
legend('n(lambda)');`,cCode:"",defaultParams:{},displayName:"O4SELMRS",tags:["chapter8","optical-materials"],wikipediaLinks:[{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"O5METALS",title:"O5METALS - O5METALS Calculation of n and K for Copper using the Drude model. \r",description:"O5METALS Calculation of n and K for Copper using the Drude model. \r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O5METALS Calculation of n and K for Copper using the Drude model. 
# Calculation of real and imaginary part.
# Expression for low and high frequencies depending on angular frequency.
# 1. General Expression

c = 3e8
Sigma = 6e7; # (OHM m)**-1
Epsilono = 8.85e-12; # C**2/Nm
Tau = 1/4.1e11; # sec

# Angular frequency for 1mm wavelength is 2pi*300*10**9 see below
Omega = linspace(1e11,1e18,5000)
# Omega = (1e11:1e11:1e18)
# The general expression for n+iK=zM(Omega)
zm = np.sqrt(1+((i*Sigma)/(Epsilono*Omega))*(1/(1-i*Omega*Tau)))
fig = plt.figure(1)

plt.subplot(4, 1, 1)

loglog(Omega,real(zm))
plt.xlim(1e11, 1e18)
plt.ylim(1e-4, 1e5)

plt.xlabel('omega')
plt.legend(['real(zm(omega))'])
plt.subplot(4, 1, 2)

loglog(Omega,imag(zm))
plt.xlim(1e11, 1e18)
plt.ylim(1e-13, 1e5)

plt.xlabel('omega')
plt.legend(['imag(zm(omega))'])
# 2. High frequency limit

nh = 1 - Sigma/(Epsilono*(Omega**2)*Tau)
plt.subplot(4, 1, 3)

semilogx(Omega,nh,Omega,real(zm))
plt.xlim(1e14, 1e18)
plt.ylim(-1, 1.1)

plt.xlabel('omega')
plt.legend(['nh(omega)', 'real(zm(omega))'])
# 3. Low frequency limit

n1 = np.sqrt(Sigma/(2*Epsilono*Omega))
plt.subplot(4, 1, 4)

semilogx(Omega,n1,Omega,real(zm))
plt.xlim(1e11, 1e14)
plt.ylim(0, 6e3)

plt.xlabel('omega')
plt.legend(['n1(omega)', 'real(zm(omega))'])
# frequency
# 3e11 is 1mm
# 3e14 is 1micron
# 3e17 is 1nm is 10A
# 1e11 is 3mm
# 1e14 is 3micron
# 1e17 is 3nm is 30A

# angular frequency
# 1e11 is 3/(2pi) =0.477 mm
# 1e14 is 0.477 micron
# 1e17 is 0.477 nm is 47A

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O5METALS Calculation of n and K for Copper using the Drude model. 
% Calculation of real and imaginary part.
% Expression for low and high frequencies depending on angular frequency.
% 1. General Expression
function O5METALS;
c = 3e8; 
Sigma = 6e7; % (OHM m)^-1
Epsilono = 8.85e-12; %C^2/Nm
Tau = 1/4.1e11; %sec

% Angular frequency for 1mm wavelength is 2pi*300*10^9 see below
Omega = linspace(1e11,1e18,5000);
%Omega = (1e11:1e11:1e18);

% The general expression for n+iK=zM(Omega)
zm = sqrt(1+((i*Sigma)./(Epsilono*Omega)).*(1./(1-i*Omega*Tau)));

figure(1);
subplot(4,1,1);
loglog(Omega,real(zm))
axis([1e11 1e18 1e-4 1e5]);
xlabel('omega');
legend('real(zm(omega))');

subplot(4,1,2);
loglog(Omega,imag(zm))
axis([1e11 1e18 1e-13 1e5]);
xlabel('omega');
legend('imag(zm(omega))');

%2. High frequency limit

nh = 1 - Sigma./(Epsilono*(Omega.^2)*Tau);

subplot(4,1,3);
semilogx(Omega,nh,Omega,real(zm))
axis([1e14 1e18 -1 1.1]);
xlabel('omega');
legend('nh(omega)','real(zm(omega))');

% 3. Low frequency limit

n1 = sqrt(Sigma./(2*Epsilono*Omega));

subplot(4,1,4);
semilogx(Omega,n1,Omega,real(zm));
axis([1e11 1e14 0 6e3]);
xlabel('omega');
legend('n1(omega)','real(zm(omega))');


% frequency
% 3e11 is 1mm
% 3e14 is 1micron
% 3e17 is 1nm is 10A
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A

% angular frequency
% 1e11 is 3/(2pi) =0.477 mm
% 1e14 is 0.477 micron
% 1e17 is 0.477 nm is 47A
`,cCode:"",defaultParams:{},displayName:"O5METALS Calculation of n and K for Copper using the Drude model.",tags:["chapter8","optical-materials","wavelength","frequency"],wikipediaLinks:[{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"O6SKINS",title:"O6SKINS - O6SKINS Skin Depth\r",description:"O6SKINS Skin Depth\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O6SKINS Skin Depth
# 1. Skin depth (in meters) for intensity depending on frequency


Epsilono = 8.85e-12 # C**2/Nm
c = 3e8
Omega = logspace(10,14,100)
Sigma = 6e7
One = np.sqrt((Epsilono*c**2)/(2*Omega*Sigma)); # in meter

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Omega,One)
plt.xlim(0, 1e14)
plt.ylim(0, 10e-8)

plt.xlabel('omega')
plt.legend(['I(omega)'])
# 2. Skin depth (in meters) for intensity depending on wavelength
# ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10**9)

Lamda = logspace(-9,-3,100)
One = np.sqrt((Epsilono*c*Lamda)/(4*np.pi*Sigma))
plt.subplot(2, 1, 2)

semilogx(Lamda,One)
plt.xlim(1e-7, 1e-3)
plt.ylim(0, 6e-8)

plt.xlabel('lambda')
plt.legend(['I(lambda)'])
# 1 10**-9 meter is 1 nm =.001 microns= 10A
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O6SKINS Skin Depth
% 1. Skin depth (in meters) for intensity depending on frequency

function O6SKINS;

Epsilono = 8.85e-12 % C^2/Nm
c = 3e8;
Omega = logspace(10,14,100);
Sigma = 6e7;

One = sqrt((Epsilono*c^2)./(2*Omega*Sigma)); % in meter

figure(1);
subplot(2,1,1);
plot(Omega,One)
axis([0 1e14 0 10e-8]);
xlabel('omega');
legend('I(omega)');

% 2. Skin depth (in meters) for intensity depending on wavelength
% ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10^9)

Lamda = logspace(-9,-3,100);
One = sqrt((Epsilono*c*Lamda)/(4*pi*Sigma));

subplot(2,1,2);
semilogx(Lamda,One)
axis([1e-7 1e-3 0 6e-8]);
xlabel('lambda');
legend('I(lambda)');

% 1 10^-9 meter is 1 nm =.001 microns= 10A`,cCode:"",defaultParams:{},displayName:"O6SKINS Skin Depth",tags:["chapter8","optical-materials","wavelength","intensity","frequency"],wikipediaLinks:[{title:"Wavelength",url:"https://en.wikipedia.org/wiki/Wavelength"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"O7REFNKS",title:"O7REFNKS - O7REFNKS\r",description:"O7REFNKS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O7REFNKS
# The reflectance R is plotted for normal incidence for fixed
# n depending on K.

Theta = 0
n1 = 1
n2 = 10
K = logspace(-3,2,100)
z = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
R = z*conj(z)
fig = plt.figure(1)

plt.plot(K,R)

plt.xlim(0, 100)
plt.ylim(0.6, 1)

plt.xlabel('K')
plt.legend(['R(K)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O7REFNKS
% The reflectance R is plotted for normal incidence for fixed
% n depending on K.
function O7REFNKS;

Theta = 0;
n1 = 1;
n2 = 10;
K = logspace(-3,2,100);
z = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

R = z.*conj(z);
figure(1);
plot(K,R);
axis([0 100 0.6 1]);
xlabel('K');
legend('R(K)');`,cCode:"",defaultParams:{},displayName:"O7REFNKS",tags:["chapter8","optical-materials"],wikipediaLinks:[{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"of",title:"of - O8ARDELS Fresnel's Formulas with Absorption\r",description:"O8ARDELS Fresnel's Formulas with Absorption\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O8ARDELS Fresnel's Formulas with Absorption

# Calculation of real part and argument of parallel zrp and perpendicular zrs case
# of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
# and the argument as function of q.
# The difference of the angle of the two components of the reflected light is plotted.
# This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.


n1 = 1
n2 = 3
K = 5
Theta = np.arange(0, 89.9+1, 1)
zrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
argDelta = angle(zrs)-angle(zrp)-np.pi
fig = plt.figure(1)

plt.plot(Theta,argDelta)

plt.xlim(0, 100)
plt.ylim(-0.1, 6.5)

plt.xlabel('	heta')
plt.legend(['argDelta(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O8ARDELS Fresnel's Formulas with Absorption

% Calculation of real part and argument of parallel zrp and perpendicular zrs case
% of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
% and the argument as function of q.
% The difference of the angle of the two components of the reflected light is plotted.
% This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.

function O8ARDELS;
n1 = 1;
n2 = 3;
K = 5;

Theta = (0:1:89.9);
zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

argDelta = angle(zrs)-angle(zrp)-pi;

figure(1);
plot(Theta,argDelta);
axis([0 100 -0.1 6.5]);
xlabel('	heta');
legend('argDelta(	heta)');`,cCode:"",defaultParams:{},displayName:"O8ARDELS Fresnel's Formulas with Absorption",tags:["chapter8","optical-materials","reflection"],wikipediaLinks:[{title:"Reflection (physics)",url:"https://en.wikipedia.org/wiki/Reflection_(physics)"},{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"of",title:"of - OA1DELTAFfS\r",description:"OA1DELTAFfS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# OA1DELTAFfS
# Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
# and the difference of the arguments of Fresnel's formulas with absorption.
# For values of K we calculate the absolute values of zp = rp exp i?p and
# zs = rs exp i?s and the argument as function of ?.

n = 2
K = 2
Theta = np.arange(0, 90+1, 1)
zp = ((n-i*K)*np.cos(2*np.pi*(Theta/360))-np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/((n-i*K)*np.cos(2*np.pi*(Theta/360))+np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))
zs = (np.cos(2*np.pi*(Theta/360))-(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/(np.cos(2*np.pi*(Theta/360))+(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(zp)
)
plt.xlim(0, 90)
plt.ylim(0.2, 1)

plt.xlabel('	heta')
plt.legend(['abs(zp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,angle(zp)
)
plt.xlim(0, 90)
plt.ylim(-4, 0)

plt.xlabel('	heta')
plt.legend(['angle(zp(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,np.abs(zs)
)
plt.xlim(0, 90)
plt.ylim(0.6, 1)

plt.xlabel('	heta')
plt.legend(['abs(zs(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(zs)
)
plt.xlim(0, 100)
plt.ylim(0, 4)

plt.xlabel('	heta')
plt.legend(['angle(zs(	heta))'])
# The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
# arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
fig = plt.figure(2)

plt.subplot(3, 1, 1)

plt.plot(Theta,np.abs(zs)
/np.abs(zp))
plt.xlim(0, 100)
plt.ylim(1, 3)

plt.xlabel('	heta')
plt.legend(['abs(zs(	heta))/abs(zp(	heta))'])
Delta = angle(zs)-angle(zp)
plt.subplot(3, 1, 2)

plt.plot(Theta,-Delta)

plt.xlim(0, 90)
plt.ylim(-8, 0)

plt.xlabel('	heta')
plt.legend(['-Delta'])
Psi = atan(np.abs(zs)/np.abs(zp))
plt.subplot(3, 1, 3)

plt.plot(Theta,Psi)

plt.xlim(0, 90)
plt.ylim(0.7, 1.2)

plt.xlabel('	heta')
plt.legend(['psi'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% OA1DELTAFfS
% Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
% and the difference of the arguments of Fresnel's formulas with absorption.
% For values of K we calculate the absolute values of zp = rp exp i?p and
% zs = rs exp i?s and the argument as function of ?.
function OA1DELTAFFS;
n = 2;
K = 2;
Theta = (0:1:90);

zp = ((n-i*K)*cos(2*pi*(Theta/360))-sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./((n-i*K)*cos(2*pi*(Theta/360))+sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

zs = (cos(2*pi*(Theta/360))-(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./(cos(2*pi*(Theta/360))+(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

figure(1);
subplot(2,2,1);
plot(Theta,abs(zp));
axis([0 90 0.2 1]);
xlabel('	heta');
legend('abs(zp(	heta))');

subplot(2,2,2);
plot(Theta,angle(zp));
axis([0 90 -4 0]);
xlabel('	heta');
legend('angle(zp(	heta))');

subplot(2,2,3);
plot(Theta,abs(zs));
axis([0 90 0.6 1]);
xlabel('	heta');
legend('abs(zs(	heta))');

subplot(2,2,4);
plot(Theta,angle(zs));
axis([0 100 0 4]);
xlabel('	heta');
legend('angle(zs(	heta))');

% The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
% arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
figure(2);
subplot(3,1,1);
plot(Theta,abs(zs)./abs(zp));
axis([0 100 1 3]);
xlabel('	heta');
legend('abs(zs(	heta))/abs(zp(	heta))');

Delta = angle(zs)-angle(zp);

subplot(3,1,2);
plot(Theta,-Delta);
axis([0 90 -8 0]);
xlabel('	heta');
legend('-Delta');
Psi = atan(abs(zs)./abs(zp));

subplot(3,1,3);
plot(Theta,Psi);
axis([0 90 0.7 1.2]);
xlabel('	heta');
legend('psi');`,cCode:"",defaultParams:{},displayName:"OA1DELTAFfS",tags:["chapter8","optical-materials"],wikipediaLinks:[{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]},{id:"OA2METPDS",title:"OA2METPDS - OA2METPDS\r",description:"OA2METPDS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# OA2METPDS
# Calculation of n and K from input values P and ? for
# exact and approximate expressions

Delta = 114
P = 0.50
Psi = atan(P)
k = np.arange(1, 40+1, 1)
Thetak = k * 2
# 1.Exact Expression

zk = np.sqrt((np.sin((2*np.pi*Thetak)/360)**2)+(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))**2)
nk = real(zk)
Kk = imag(zk)
# 2.For the approximation one disregards the sin**2 term
z1k =(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))
nnk = real(z1k)
KKk = imag(z1k)
# 3.Comparison
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(Thetak,real(zk)
,Thetak,real(z1k))
plt.xlim(0, 100)
plt.ylim(0, 4)

plt.xlabel('	hetak')
plt.legend(['real(zk)', 'real(z1k)'])
plt.subplot(3, 2, 2)

plt.plot(Thetak,imag(zk)
,Thetak,imag(z1k))
plt.xlim(0, 100)
plt.ylim(0, 8)

plt.xlabel('	hetak')
plt.legend(['imag(zk)', 'imag(z1k)'])
# 4. The approximation can be written as two real expressions

nnk = ((np.sin((2*np.pi*Thetak)/360)**2)*np.cos(2*Psi))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))
KKk = ((np.sin((2*np.pi*Thetak)/360)**2)*(np.sin(Delta)*np.sin(2*Psi)))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))
plt.subplot(3, 1, 2)

plt.plot(Thetak,nnk,Thetak,real(zk)
,Thetak,real(z1k))
plt.xlim(0, 80)
plt.ylim(0, 2)

plt.xlabel('	hetak')
plt.legend(['nnk', 'real(zk)', 'real(z1k)'])
plt.subplot(3, 1, 3)

plt.plot(Thetak,KKk,Thetak,imag(zk)
,Thetak,imag(z1k))
plt.xlim(0, 80)
plt.ylim(0, 8)

plt.xlabel('	hetak')
plt.legend(['KKk', 'imag(zk)', 'imag(z1k)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% OA2METPDS
% Calculation of n and K from input values P and ? for
% exact and approximate expressions
function OA2METPDS;
Delta = 114;
P = 0.50;
Psi = atan(P);
k = (1:1:40);
Thetak = k * 2;
% 1.Exact Expression

zk = sqrt((sin((2*pi*Thetak)/360).^2)+(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1))).^2);
nk = real(zk);
Kk = imag(zk);
% 2.For the approximation one disregards the sin^2 term
z1k =(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1)));
nnk = real(z1k);
KKk = imag(z1k);
% 3.Comparison
figure(1);
subplot(3,2,1);
plot(Thetak,real(zk),Thetak,real(z1k));
axis([0 100 0 4]);
xlabel('	hetak');
legend('real(zk)','real(z1k)');

subplot(3,2,2);
plot(Thetak,imag(zk),Thetak,imag(z1k));
axis([0 100 0 8]);
xlabel('	hetak');
legend('imag(zk)','imag(z1k)');

%4. The approximation can be written as two real expressions

nnk = ((sin((2*pi*Thetak)/360).^2)*cos(2*Psi))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

KKk = ((sin((2*pi*Thetak)/360).^2)*(sin(Delta)*sin(2*Psi)))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

subplot(3,1,2);
plot(Thetak,nnk,Thetak,real(zk),Thetak,real(z1k));
axis([0 80 0 2]);
xlabel('	hetak');
legend('nnk','real(zk)','real(z1k)');

subplot(3,1,3);
plot(Thetak,KKk,Thetak,imag(zk),Thetak,imag(z1k));
axis([0 80 0 8]);
xlabel('	hetak');
legend('KKk','imag(zk)','imag(z1k)');`,cCode:"",defaultParams:{},displayName:"OA2METPDS",tags:["chapter8","optical-materials"],wikipediaLinks:[{title:"Optical materials",url:"https://en.wikipedia.org/wiki/Optical_materials"},{title:"Refractive index",url:"https://en.wikipedia.org/wiki/Refractive_index"}]}],z1=[{id:"for",title:"for - F10FTGAUSGS\r",description:"F10FTGAUSGS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F10FTGAUSGS
# Complex Fourier transformation of Gauss function for
# two values of a and for general Fourier Transformation.
# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.

i = np.arange(0, 325+1, 1)
A = 1
a = 100
aa = 50
y1 = A*np.exp(-a*((i/255)**2))
y2 = A*np.exp(-aa*((i/255)**2))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,y1,i/255,y2)

plt.xlim(0, 1.5)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['y1', 'y2'])

c1 = fft(y1)
c2 = fft(y2)
N = length(c2)-1; # N=325
j=(0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c1)
/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))
plt.xlim(0, 400)
plt.ylim(0, 2)

plt.xlabel('j')
plt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])
zf1 = ifft(c1)
zf2 = ifft(c2)
N2 = length(zf2)-1
i = (0:1:N2)
plt.subplot(3, 1, 3)

plt.plot(i/255,zf1,i/255,zf2)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['zf1', 'zf2'])
# The coordinate is again i/255


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F10FTGAUSGS
% Complex Fourier transformation of Gauss function for
% two values of a and for general Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F10FTGAUSGS;
i = (0:1:325);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1.5 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=325
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 400 0 2]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.6 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

`,cCode:"",defaultParams:{},displayName:"F10FTGAUSGS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"F11CONVOS",title:"F11CONVOS - F11CONVOS\r",description:"F11CONVOS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F11CONVOS
# Convolution integral for functions y and S

b2 = 0.2
f = 800
a = 1
Lamda = 0.0005
k = (2*np.pi)/Lamda
X = np.arange(0, 1+0.001, 0.001)
# tol = 0.01
# Function S
Sx = S(X)
# Function y
yx = y(X)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(X,yx)

plt.xlim(0, 1)
plt.ylim(0, 1.5)

plt.xlabel('X')
plt.legend(['y(X)'])
plt.subplot(2, 2, 2)

plt.plot(X,Sx)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('X')
plt.legend(['S(X)'])
nx = length(X)
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk))
plt.subplot(2, 1, 2)

plt.plot(X,Ix,X,Sx)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('X')
plt.legend(['I(X)', 'S(X)'])
Out = (logical(b2-X)>=0)
Out = np.sin((k*a*X)/f)
Out = y(XX)*(np.sin(k*a*(X-XX)/f))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F11CONVOS
% Convolution integral for functions y and S
function F11CONVOS;
global k a f b2;
b2 = 0.2;
f = 800;
a = 1;
Lamda = 0.0005;
k = (2*pi)/Lamda;

X = (0:0.001:1);
% tol = 0.01;
% Function S
Sx = S(X);

% Function y
yx = y(X);

figure(1);
subplot(2,2,1);
plot(X,yx);
axis([0 1 0 1.5]);
xlabel('X');
legend('y(X)');

subplot(2,2,2);
plot(X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('S(X)');

nx = length(X);
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk));
end;

subplot(2,1,2);
plot(X,Ix,X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('I(X)','S(X)');

function Out=y(X)
global b2;
Out = (logical(b2-X)>=0);

function Out=S(X)
global k a f;
Out = sin((k*a*X)/f);

function Out=If(XX,X)
global k a f;
Out = y(XX).*(sin(k*a*(X-XX)/f));`,cCode:"",defaultParams:{},displayName:"F11CONVOS",tags:["chapter9","fourier-transform","convolution"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Convolution",url:"https://en.wikipedia.org/wiki/Convolution"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"F12FTDISC1S",title:"F12FTDISC1S - F12FTDISC1S\r",description:"F12FTDISC1S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F12FTDISC1S

# Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
# and so on to 130/128. Look for the repetition.

# Length interval is i = 1,2,3...

i = np.arange(0, 140+1, 1)
# 1.Frequencies
# f = 1/128, 2/128, 3/128
y1 = np.cos(2*np.pi*(1/128)*i)
y2 = np.cos(2*np.pi*(2/128)*i)
y3 = np.cos(2*np.pi*(3/128)*i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,y1,i,y2,i,y3)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y1', 'y2', 'y3'])

# 2.Frequency 64/128
y64 = np.cos(2*np.pi*(64/128)*i)
plt.subplot(3, 1, 2)

plt.plot(i,y64)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y64'])

# 3.Frequencies
# 127/128, 128/128, 129/128, 130/128

y127 = np.cos(2*np.pi*(127/128)*i)
y128 = np.cos(2*np.pi*(128/128)*i); # will not show up on the graph
y129 = np.cos(2*np.pi*(129/128)*i); # same as 127/128 and 1/128
y130 = np.cos(2*np.pi*(130/128)*i); # same as 2/128

plt.subplot(3, 1, 3)

plt.plot(i,y127,i,y128,i,y129,i,y130)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y127', 'y128', 'y129', 'y130'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F12FTDISC1S

% Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
% and so on to 130/128. Look for the repetition.

% Length interval is i = 1,2,3...
function F12FTDISC1S;
i = (0:1:140);

% 1.Frequencies
% f = 1/128, 2/128, 3/128
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(3/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequency 64/128
y64 = cos(2*pi*(64/128)*i);

subplot(3,1,2);
plot(i,y64);
axis([0 140 -1 1]);
xlabel('i');
legend('y64');

% 3.Frequencies
% 127/128, 128/128, 129/128, 130/128

y127 = cos(2*pi*(127/128)*i);
y128 = cos(2*pi*(128/128)*i); % will not show up on the graph
y129 = cos(2*pi*(129/128)*i); % same as 127/128 and 1/128
y130 = cos(2*pi*(130/128)*i); % same as 2/128

subplot(3,1,3);
plot(i,y127,i,y128,i,y129,i,y130);
axis([0 140 -1 1]);
xlabel('i');
legend('y127','y128','y129','y130');`,cCode:"",defaultParams:{},displayName:"F12FTDISC1S",tags:["chapter9","fourier-transform","frequency"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"show",title:"show - F13DTDISC2S\r",description:"F13DTDISC2S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F13DTDISC2S
# The cos-function show "mirror" symmetry around the
# middle of the interval, at the beginning and at the end.

# Length interval is 1,2,3...
# 1.Frequencies f = 1/128, 2/128, 3/128
i = np.arange(0, 127+1, 1)
y1 = np.cos(2*np.pi*(1/128)*i)
y2 = np.cos(2*np.pi*(2/128)*i)
y3 = np.cos(2*np.pi*(63/128)*i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,y1,i,y2,i,y3)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y1', 'y2', 'y3'])

# 2.Frequencies f=63/128, 64/128, 65/128
y63 = np.cos(2*np.pi*(63/128)*i)
y64 = np.cos(2*np.pi*(64/128)*i)
y65 = np.cos(2*np.pi*(65/128)*i)
plt.subplot(3, 1, 2)

plt.plot(i,y63,i,y64,i,y65)

plt.xlim(0, 128)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y63', 'y64', 'y65'])

# 3.Expended graph
j = np.arange(20, 50+1, 1)
y63j = np.cos(2*np.pi*(63/128)*j)
y64j = np.cos(2*np.pi*(64/128)*j)
y65j = np.cos(2*np.pi*(65/128)*j)
plt.subplot(3, 1, 3)

plt.plot(j,y63j,j,y64j,j,y65j)

plt.xlim(20, 50)
plt.ylim(-1, 1)

plt.xlabel('j')
plt.legend(['y63j', 'y64j', 'y65j'])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F13DTDISC2S
% The cos-function show "mirror" symmetry around the
% middle of the interval, at the beginning and at the end.
function F13DTDISC2S;
% Length interval is 1,2,3...
% 1.Frequencies f = 1/128, 2/128, 3/128
i = (0:1:127);
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(63/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequencies f=63/128, 64/128, 65/128
y63 = cos(2*pi*(63/128)*i);
y64 = cos(2*pi*(64/128)*i);
y65 = cos(2*pi*(65/128)*i);

subplot(3,1,2);
plot(i,y63,i,y64,i,y65);
axis([0 128 -1 1]);
xlabel('i');
legend('y63','y64','y65');

% 3.Expended graph
j = (20:1:50);
y63j = cos(2*pi*(63/128)*j);
y64j = cos(2*pi*(64/128)*j);
y65j = cos(2*pi*(65/128)*j);

subplot(3,1,3);
plot(j,y63j,j,y64j,j,y65j);
axis([20 50 -1 1]);
xlabel('j');
legend('y63j','y64j','y65j');
`,cCode:"",defaultParams:{},displayName:"F13DTDISC2S",tags:["chapter9","fourier-transform","mirror","3d-visualization"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"F14MICHOPS",title:"F14MICHOPS - F14MICHOPS\r",description:"F14MICHOPS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F14MICHOPS

# Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
# efficinecy.Fringe pattern on displacement of mirrors.

# Amplitude and intensity pattern depending on displacement x of mirror.
# The "space coordinate" is a sequence of discreate points, all having the same
# distance.


# 1. Cosine function, one frequency, amplitude.
# The space coordinate runs from 0 to 127
i = np.arange(0, 127+1, 1)
kmax = 1; # we have k=1/128 as the frequency

nx = length(i)
for ui=1:nx
    sum = 0
    for rk=1:kmax
        sum = sum + np.cos(2*np.pi*(rk/128)*i(ui))
    u1(ui) = sum
fig = plt.figure(1)

plt.subplot(4, 1, 1)

plt.plot(i,u1)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['u1'])

# We just go through one cycle

# 2. Cosine function, one frequency, intensity.
plt.subplot(4, 1, 2)

plt.plot(i,(u1)
**2)
plt.xlim(0, 128)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['(u1)^2'])
# 3. Cosine function, many frequencies, amplitude.
i = np.arange(0, 127+1, 1)
nx = length(i)
kmax = 20
for u2i=1:nx
    sum = 0
    for rk=1:kmax
        sum = sum + np.cos(2*np.pi*(rk/128)*i(u2i))
    u2(u2i) = sum
# k = 1/128, 2/128.. 20/128 are the frequencies,

plt.subplot(4, 1, 3)

plt.plot(i,u2)

plt.xlim(0, 140)
plt.ylim(-20, 20)

plt.xlabel('i')
plt.legend(['u2'])
# 4. Cosine function, many frequencies, intensity.


plt.subplot(4, 1, 4)

plt.plot(i,(u2**2)
)
plt.xlim(0, 140)
plt.ylim(0, 400)

plt.xlabel('i')
plt.legend(['(u2)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F14MICHOPS

% Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
% efficinecy.Fringe pattern on displacement of mirrors.

% Amplitude and intensity pattern depending on displacement x of mirror.
% The "space coordinate" is a sequence of discreate points, all having the same
% distance.

function F14MICHOPS;
% 1. Cosine function, one frequency, amplitude.
% The space coordinate runs from 0 to 127
i = (0:1:127);
kmax = 1; % we have k=1/128 as the frequency

nx = length(i);
for ui=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(ui));            
    end;
    u1(ui) = sum;
end;


figure(1);
subplot(4,1,1);
plot(i,u1);
axis([0 140 -1 1]);
xlabel('i');
legend('u1');

% We just go through one cycle

% 2. Cosine function, one frequency, intensity.
subplot(4,1,2);
plot(i,(u1).^2);
axis([0 128 -1 1]);
xlabel('i');
legend('(u1)^2');
% 3. Cosine function, many frequencies, amplitude.
i = (0:1:127);
nx = length(i);
kmax = 20;
for u2i=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(u2i));            
    end;
    u2(u2i) = sum;
end;
% k = 1/128, 2/128.. 20/128 are the frequencies,

subplot(4,1,3);
plot(i,u2);
axis([0 140 -20 20]);
xlabel('i');
legend('u2');
% 4. Cosine function, many frequencies, intensity.


subplot(4,1,4);
plot(i,(u2.^2));
axis([0 140 0 400]);
xlabel('i');
legend('(u2)^2');`,cCode:"",defaultParams:{},displayName:"F14MICHOPS",tags:["chapter9","fourier-transform","mirror","intensity","amplitude","frequency","fringe-pattern","pattern"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Mirror",url:"https://en.wikipedia.org/wiki/Mirror"},{title:"Intensity (physics)",url:"https://en.wikipedia.org/wiki/Intensity_(physics)"},{title:"Amplitude",url:"https://en.wikipedia.org/wiki/Amplitude"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Interference (wave propagation)",url:"https://en.wikipedia.org/wiki/Interference_(wave_propagation)"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"F15FOLDS",title:"F15FOLDS - F15FOLDS\r",description:"F15FOLDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F15FOLDS
# Folding of the spectrum.
# For the sampling interval 1/255, highest frequency is 128,
# the frequencies are at 65, 85, 105, all below 127.

# a.Sample interval i/255
i = np.arange(0, 255+1, 1)
y1 = np.cos(2*np.pi*65*(i/255)) + np.cos(2*np.pi*85*(i/255)) + np.cos(2*np.pi*105*(i/255))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i/255,y1)

plt.xlim(0, 1)
plt.ylim(-2, 4)

plt.xlabel('i/255')
plt.legend(['y1'])

c = fft(y1)
N = length(c) - 1
j = (0:1:N)
plt.subplot(3, 2, 2)

plt.plot(j,real(c)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# Frequency peaks are at 65 85 105

# b.Sample interval 2i/255

# For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
# 65, 85, 105, all larger than 64 and appear folded.

y2 = np.cos(2*np.pi*65*((2*i)/255))+np.cos(2*np.pi*85*((2*i)/255)) + np.cos(2*np.pi*105*((2*i)/255))
plt.subplot(3, 2, 3)

plt.plot(2*(i/255)
,y2)
plt.xlim(0, 2)
plt.ylim(-2, 4)

plt.xlabel('2*(i/255)')
plt.legend(['y2'])

cc = fft(y2)
N = length(cc) - 1
j = (0:1:N)
plt.subplot(3, 2, 4)

plt.plot(j,real(cc)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(cc)/sqrt(N+1)'])
# Frequency peaks appear 65 at--> 125
# 85 at--> 85
# 105 at--> 45

# c. Sample interval 4i/255
# For the sampling interval 4/255, highest frequency 32, the frequencies are
# higher than 1 times 32 and 2 times 32.

y4 = np.cos(2*np.pi*65*((4*i)/255)) + np.cos(2*np.pi*85*((4*i)/255)) + np.cos(2*np.pi*105*((4*i)/255))
plt.subplot(3, 2, 5)

plt.plot(4*(i/255)
, y4)
plt.xlim(0, 4)
plt.ylim(-2, 4)

plt.xlabel('4*(i/255)')
plt.legend(['y4'])

ccc = fft(y4)
N = length(ccc)-1
j = (0:1:N)
plt.subplot(3, 2, 6)

plt.plot(j,real(ccc)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(ccc)/sqrt(N+1)'])
# Frequency peaks appear 65 at--> 5
# 85 at--> 85
# 105 at--> 90

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F15FOLDS
% Folding of the spectrum.
% For the sampling interval 1/255, highest frequency is 128,
% the frequencies are at 65, 85, 105, all below 127.
function F15FOLDS;
% a.Sample interval i/255
i = (0:1:255);
y1 = cos(2*pi*65*(i/255)) + cos(2*pi*85*(i/255)) + cos(2*pi*105*(i/255));

figure(1);
subplot(3,2,1);
plot(i/255,y1);
axis([0 1 -2 4]);
xlabel('i/255');
legend('y1');

c = fft(y1);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,2);
plot(j,real(c)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(c)/sqrt(N+1)');
% Frequency peaks are at 65 85 105

% b.Sample interval 2i/255

% For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
% 65, 85, 105, all larger than 64 and appear folded.

y2 = cos(2*pi*65*((2*i)/255))+cos(2*pi*85*((2*i)/255)) + cos(2*pi*105*((2*i)/255));

subplot(3,2,3);
plot(2*(i/255),y2);
axis([0 2 -2 4]);
xlabel('2*(i/255)');
legend('y2');

cc = fft(y2);
N = length(cc) - 1;
j = (0:1:N);


subplot(3,2,4);
plot(j,real(cc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(cc)/sqrt(N+1)');
% Frequency peaks appear 65 at--> 125
%                        85 at--> 85
%                       105 at--> 45

% c. Sample interval 4i/255
% For the sampling interval 4/255, highest frequency 32, the frequencies are
% higher than 1 times 32 and 2 times 32.

y4 = cos(2*pi*65*((4*i)/255)) + cos(2*pi*85*((4*i)/255)) + cos(2*pi*105*((4*i)/255));

subplot(3,2,5);
plot(4*(i/255), y4);
axis([0 4 -2 4]);
xlabel('4*(i/255)');
legend('y4');

ccc = fft(y4);
N = length(ccc)-1;
j = (0:1:N);

subplot(3,2,6);
plot(j,real(ccc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(ccc)/sqrt(N+1)');

% Frequency peaks appear 65 at--> 5
%                        85 at--> 85
%                       105 at--> 90
`,cCode:"",defaultParams:{},displayName:"F15FOLDS",tags:["chapter9","fourier-transform","frequency","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Frequency",url:"https://en.wikipedia.org/wiki/Frequency"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"and",title:"and - F16APODIS\r",description:"F16APODIS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F16APODIS
# Fourier transformation of sine-function and Appodisation


# 1.Original function
f = 31
k = np.arange(0, 255+1, 1)
y = np.cos(2*np.pi*f*(k/255))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(k/255,y)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('k/255')
plt.legend(['y'])

# 2.Step function
d = 255
i = np.arange(0, 400+1, 1)
p = ((logical(i)>=0) - (logical(i-d)>=0))
plt.subplot(3, 2, 2)

plt.plot(i/255,real(p)
,i/255,imag(p))
plt.xlim(0, 2)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(p)', 'imag(p)'])
yp = np.cos(2*np.pi*f*(i/255))*p
plt.subplot(3, 2, 3)

plt.plot(i/255,yp)

plt.xlim(0, 1.6)
plt.ylim(-1, 1)

plt.xlabel('i/255')
plt.legend(['yp'])

# 3.Fourier transformation of y times p, we have to use 255 points
k = np.arange(0, 255+1, 1)
x = np.cos(2*np.pi*f*(k/255))*((logical(k)>=0) - (logical(k-d)>=0))
c = fft(x)
N = length(c) - 1
j =(0:1:N)
plt.subplot(3, 2, 4)

plt.plot(j,real(c)
/np.sqrt(N+1))
plt.xlim(-5, 140)
plt.ylim(-2, 8)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# 4.Triangle function
q = 1-k/255
ay = q*y
plt.subplot(3, 2, 5)

plt.plot(k/255,ay)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('k/255')
plt.legend(['ay'])

# 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay)
N = length(c) - 1
j = (0:1:N)
plt.subplot(3, 2, 6)

plt.plot(j, real(c)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-2, 8)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F16APODIS
% Fourier transformation of sine-function and Appodisation

function F16APODIS;
% 1.Original function
f = 31;
k = (0:1:255);
y = cos(2*pi*f*(k/255));

figure(1);
subplot(3,2,1);
plot(k/255,y);
axis([0 1 -1 1]);
xlabel('k/255');
legend('y');

% 2.Step function
d = 255;
i = (0:1:400);
p = ((logical(i)>=0) - (logical(i-d)>=0));

subplot(3,2,2);
plot(i/255,real(p),i/255,imag(p));
axis([0 2 -0.5 1.5]);
xlabel('i/255');
legend('real(p)','imag(p)');

yp = cos(2*pi*f*(i/255)).*p;

subplot(3,2,3);
plot(i/255,yp);
axis([0 1.6 -1 1]);
xlabel('i/255');
legend('yp');

% 3.Fourier transformation of y times p, we have to use 255 points
k = (0:1:255);
x = cos(2*pi*f*(k/255)).*((logical(k)>=0) - (logical(k-d)>=0));
c = fft(x);
N = length(c) - 1;
j =(0:1:N);



subplot(3,2,4);
plot(j,real(c)/sqrt(N+1));
axis([-5 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

% 4.Triangle function
q = 1-k/255;
ay = q.*y;

subplot(3,2,5);
plot(k/255,ay);
axis([0 1 -1 1]);
xlabel('k/255');
legend('ay');

% 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,6);
plot(j, real(c)/sqrt(N+1));
axis([0 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

`,cCode:"",defaultParams:{},displayName:"F16APODIS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F1FTSTEPS\r",description:"F1FTSTEPS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F1FTSTEPS
# The real FT is used.
# Fourier transform of a SINGLE SIDED step function of width 0 to d.


i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0)

fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform - inverse of Fourier transform
y = ifft(c)
N = length(c)-1
j = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(j/255,real(y)
,j/255,imag(y))
plt.xlim(0, 0.6)
plt.ylim(-0.5, 1.5)

plt.xlabel('j/255')
plt.legend(['real(y)', 'imag(y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F1FTSTEPS
% The real FT is used.
% Fourier transform of a SINGLE SIDED step function of width 0 to d.

function F1FTSTEPS;
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0)

figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform - inverse of Fourier transform
y = ifft(c);
N = length(c)-1;
j = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(j/255,real(y),j/255,imag(y));
axis([0 0.6 -0.5 1.5]);
xlabel('j/255');
legend('real(y)','imag(y)');`,cCode:"",defaultParams:{},displayName:"F1FTSTEPS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F2FTSTEPDS\r",description:"F2FTSTEPDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F2FTSTEPDS
# The real FT is used.
# Fourier transform of DOUBLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-2, 4)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F2FTSTEPDS
% The real FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F2FTSTEPDS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');


% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F2FTSTEPDS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F2FTSTEPDS\r",description:"F2FTSTEPDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F2FTSTEPDS
# The complex FT is used.
# Fourier transform of SINGLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F2FTSTEPDS
% The complex FT is used.
% Fourier transform of SINGLE SIDED step function of width 0 to d.

function F3DTSTEPC1S;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F2FTSTEPDS",tags:["chapter9","fourier-transform","3d-visualization","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F4FTSTEPOSS\r",description:"F4FTSTEPOSS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F4FTSTEPOSS
# The complex FT is used.
# Fourier transform of DOUBLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.legend(['real(x)', 'imag(x)'])
plt.xlabel('i')
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-2, 4)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F4FTSTEPOSS
% The complex FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F4FTSTEPOSS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
legend('real(x)','imag(x)');
xlabel('i');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');
`,cCode:"",defaultParams:{},displayName:"F4FTSTEPOSS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F5FTSINCRS\r",description:"F5FTSINCRS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F5FTSINCRS
# The real FT is used.
# Fourier transform of sinz/z function of width 0 to d


# Original Function
i = np.arange(0, 255+1, 1)
d = 40
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-0.1, 0.3)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.013

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F5FTSINCRS
% The real FT is used.
% Fourier transform of sinz/z function of width 0 to d

function F5FTSINCRS;
% Original Function
i = (0:1:255);
d = 40;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -0.1 0.3]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.013

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F5FTSINCRS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F6FTSINCCS\r",description:"F6FTSINCCS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F6FTSINCCS
# The complex FT is used.
# Fourier transform of sinz/z function of width 0 to d


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-0.5, 0.5)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F6FTSINCCS
% The complex FT is used.
% Fourier transform of sinz/z function of width 0 to d

function F6FTSINCCS;
% Original Function
i = (0:1:255);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -0.5 0.5]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F6FTSINCCS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F7FTSTEP183S\r",description:"F7FTSTEP183S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F7FTSTEP183S
# Complex Fourier transform of step function of width 0 to d.
# 183 points are used. The FT(inverse) of the FT is also shown.


# Original Function
i = np.arange(0, 183+1, 1)
d = 20
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c)
/np.sqrt(N+1),j,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 200)
plt.ylim(-2, 2)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F7FTSTEP183S
% Complex Fourier transform of step function of width 0 to d.
% 183 points are used. The FT(inverse) of the FT is also shown.

function F7FTSTEP183S;
% Original Function
i = (0:1:183);
d = 20;
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j,real(c)/sqrt(N+1),j,-imag(c)/sqrt(N+1));
axis([0 200 -2 2]);
xlabel('j');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');
% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F7FTSTEP183S",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"of",title:"of - F8FTSINC183S\r",description:"F8FTSINC183S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F8FTSINC183S
# Fourier transform of sinz/z function of width 0 to d
# The FT (inverse) of the FT is also shown


# Original Function
i = np.arange(0, 183+1, 1)
d = 20
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 0.8)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 183
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.8)
plt.ylim(-0.5, 0.5)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F8FTSINC183S
% Fourier transform of sinz/z function of width 0 to d
% The FT (inverse) of the FT is also shown

function F8FTSINC183S;
% Original Function
i = (0:1:183);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 0.8 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 183
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.8 -0.5 0.5]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F8FTSINC183S",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]},{id:"for",title:"for - F9FTGAUSS\r",description:"F9FTGAUSS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F9FTGAUSS
# Complex Fourier transformation of Gauss function for two values of a
# and for Fast Fourier Transformation.
# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.

i = np.arange(0, 255+1, 1)
A = 1
a = 100
aa = 50
y1 = A*np.exp(-a*((i/255)**2))
y2 = A*np.exp(-aa*((i/255)**2))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,y1,i/255,y2)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['y1', 'y2'])

c1 = fft(y1)
c2 = fft(y2)
N = length(c2)-1; # N=255
j=(0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c1)
/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))
plt.xlim(0, 300)
plt.ylim(0, 3)

plt.xlabel('j')
plt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])
zf1 = ifft(c1)
zf2 = ifft(c2)
N2 = length(zf2)-1
i = (0:1:N2)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i/255,zf1,i/255,zf2)

plt.xlim(0, 0.4)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['zf1', 'zf2'])
# The coordinate is again i/255


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F9FTGAUSS
% Complex Fourier transformation of Gauss function for two values of a
% and for Fast Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F9FTGAUSS;
i = (0:1:255);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=255
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 300 0 3]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);
% 1/(2*d)=0.025

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.4 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

`,cCode:"",defaultParams:{},displayName:"F9FTGAUSS",tags:["chapter9","fourier-transform","fft"],wikipediaLinks:[{title:"Fourier transform",url:"https://en.wikipedia.org/wiki/Fourier_transform"},{title:"Fast Fourier transform",url:"https://en.wikipedia.org/wiki/Fast_Fourier_transform"},{title:"Fourier optics",url:"https://en.wikipedia.org/wiki/Fourier_optics"}]}],A1=[...L1,...O1,...F1,...N1,...C1,...P1,..._1,...R1,...D1,...M1,...z1],ji=[...A1];function E1(){const[n,e]=k.useState(""),[t,i]=k.useState(new Set),a=k.useMemo(()=>{const p=new Set;return ji.forEach(c=>{c.tags&&Array.isArray(c.tags)&&c.tags.forEach(d=>p.add(d))}),Array.from(p).sort()},[]),l=k.useMemo(()=>ji.filter(p=>{const c=!n||(p.displayName||p.title||"").toLowerCase().includes(n.toLowerCase())||(p.description||"").toLowerCase().includes(n.toLowerCase())||(p.id||"").toLowerCase().includes(n.toLowerCase()),d=t.size===0||p.tags&&p.tags.some(h=>t.has(h));return c&&d}),[n,t]),r=k.useMemo(()=>{const p={};return l.forEach(c=>{const d=c.category||"Other";p[d]||(p[d]=[]),p[d].push(c)}),p},[l]),o=p=>{const c=new Set(t);c.has(p)?c.delete(p):c.add(p),i(c)},s=()=>{e(""),i(new Set)};return v.jsxs("div",{className:"program-list",children:[v.jsxs("div",{className:"header",children:[v.jsx("h1",{children:"🔬 Optics & Berkeley Extension Programs"}),v.jsxs("p",{className:"subtitle",children:[l.length," of ",ji.length," programs"]}),v.jsx("div",{className:"reference-link",children:v.jsx("a",{href:"https://link.springer.com/book/10.1007/978-0-387-69492-4",target:"_blank",rel:"noopener noreferrer",className:"book-link",children:"📚 Reference: Field Guide to Geometrical Optics (Springer)"})})]}),v.jsxs("div",{className:"filter-section",children:[v.jsxs("div",{className:"search-bar",children:[v.jsx("input",{type:"text",placeholder:"Search programs by name, description, or ID...",value:n,onChange:p=>e(p.target.value),className:"search-input"}),(n||t.size>0)&&v.jsx("button",{onClick:s,className:"clear-button",children:"✕ Clear Filters"})]}),v.jsxs("div",{className:"tag-filter",children:[v.jsx("div",{className:"tag-filter-header",children:"Filter by tags:"}),v.jsx("div",{className:"tag-cloud",children:a.map(p=>v.jsxs("button",{onClick:()=>o(p),className:`tag-button ${t.has(p)?"active":""}`,children:["#",p]},p))})]})]}),v.jsx("div",{className:"categories",children:Object.keys(r).length===0?v.jsxs("div",{className:"no-results",children:[v.jsx("p",{children:"No programs found matching your criteria."}),v.jsx("button",{onClick:s,className:"clear-button-large",children:"Clear Filters"})]}):Object.keys(r).sort().map(p=>v.jsxs("div",{className:"category-section",children:[v.jsxs("h2",{children:[p," (",r[p].length,")"]}),v.jsx("div",{className:"program-grid",children:r[p].map(c=>v.jsxs(ir,{to:`/program/${c.id}`,className:"program-card",children:[v.jsx("div",{className:"program-title",children:c.displayName||c.title}),v.jsx("div",{className:"program-description",children:c.description}),c.tags&&c.tags.length>0&&v.jsxs("div",{className:"program-tags",children:[c.tags.slice(0,5).map(d=>v.jsxs("span",{className:"tag-chip",children:["#",d]},d)),c.tags.length>5&&v.jsxs("span",{className:"tag-more",children:["+",c.tags.length-5]})]}),v.jsxs("div",{className:"program-meta",children:[v.jsx("span",{className:"program-source",children:c.source.toUpperCase()}),c.chapter&&v.jsxs("span",{className:"program-chapter",children:["Chapter ",c.chapter]})]})]},c.id))})]},p))})]})}function Y1({imageData:n}){const e=()=>{const t=document.createElement("a");t.href=`data:image/png;base64,${n}`,t.download=`plot_${Date.now()}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return v.jsxs("div",{className:"plot-container",children:[v.jsxs("div",{className:"plot-header",children:[v.jsx("h3",{children:"Plot Output"}),v.jsx("button",{className:"download-plot-button",onClick:e,title:"Download plot as PNG",children:"⬇ Download Plot"})]}),v.jsx("img",{src:`data:image/png;base64,${n}`,alt:"Plot"})]})}function q1({text:n}){const e=n.startsWith("❌");return v.jsx("div",{className:`text-output ${e?"error":""}`,children:n})}function j1({pyodide:n,program:e}){const[t,i]=k.useState("python"),[a,l]=k.useState(e.pythonCode||""),[r,o]=k.useState(e.pythonCode||""),[s,p]=k.useState(!1),[c,d]=k.useState(null),[h,x]=k.useState(""),[b,T]=k.useState(e.defaultParams||{}),[w,f]=k.useState("");k.useEffect(()=>{l(e.pythonCode||""),o(e.pythonCode||""),T(e.defaultParams||{}),d(null),x("")},[e]);const u=(g,I)=>{navigator.clipboard.writeText(g).then(()=>{f(I),setTimeout(()=>f(""),2e3)}).catch(F=>{console.error("Failed to copy: ",F)})};async function m(){if(!(!n||s)){p(!0),d(null),x("⏳ Running...");try{let g=t==="compiler"?r:a;Object.keys(b).forEach(Z=>{const Wn=b[Z];typeof Wn=="string"?g=g.replace(new RegExp(`\\{\\{${Z}\\}\\}`,"g"),`"${Wn}"`):g=g.replace(new RegExp(`\\{\\{${Z}\\}\\}`,"g"),Wn)});const I=`
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        ${JSON.stringify(g)},
        '<program>', 'exec'
    ), globals(), globals())
except Exception:
    traceback.print_exc()
finally:
    sys.stdout, sys.stderr = sys_stdout_bak, sys_stderr_bak
out = _stdout.getvalue()
err = _stderr.getvalue()
`;await n.runPythonAsync(I);const F=n.globals.get("out"),N=n.globals.get("err");let z=null,C=F||"";if(C&&C.includes("data:image/png;base64,")){const Z=C.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);Z&&(z=Z[1],C=C.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/,"").trim())}z&&d(z),x(N?`❌ Error:
`+N+(C?`

Output:
`+C:""):C||(z?"":"✅ Program executed successfully"))}catch(g){x(`❌ Error:
`+(g&&g.message?g.message:String(g))),console.error("Error:",g)}finally{p(!1)}}}if(!n)return v.jsx("div",{className:"ide-layout",children:v.jsx("div",{className:"loading-container",children:v.jsx("div",{className:"loading",children:"⏳ Loading Python environment..."})})});const y=[];return e.matlabCode&&y.push({id:"matlab",label:"MATLAB",code:e.matlabCode}),y.push({id:"python",label:"Python",code:a}),y.push({id:"compiler",label:"Compiler Editor",code:r}),v.jsxs("div",{className:"ide-layout",children:[v.jsxs("div",{className:"ide-left-panel",children:[v.jsx("div",{className:"ide-tabs",children:y.map(g=>v.jsx("button",{className:`ide-tab ${t===g.id?"active":""}`,onClick:()=>i(g.id),children:g.label},g.id))}),v.jsxs("div",{className:"ide-editor-container",children:[v.jsx("button",{className:"ide-copy-button",onClick:()=>{const g=y.find(I=>I.id===t);g&&u(g.code,t)},title:"Copy code to clipboard",children:w===t?"✓ Copied!":"📋 Copy"}),t==="matlab"&&e.matlabCode&&v.jsx("pre",{className:"ide-code-display",children:v.jsx("code",{children:e.matlabCode})}),t==="python"&&v.jsx("textarea",{className:"ide-code-editor",value:a,onChange:g=>l(g.target.value),spellCheck:!1,placeholder:"Write your Python code here..."}),t==="compiler"&&v.jsx("textarea",{className:"ide-code-editor",value:r,onChange:g=>o(g.target.value),spellCheck:!1,placeholder:"Write your compiler code here..."})]}),e.params&&e.params.length>0&&v.jsxs("div",{className:"ide-params-section",children:[v.jsx("div",{className:"ide-params-header",children:"Parameters"}),v.jsx("div",{className:"ide-params-list",children:e.params.map(g=>v.jsxs("div",{className:"ide-param-input",children:[v.jsxs("label",{htmlFor:g.name,children:[g.label," ",g.unit&&`(${g.unit})`]}),v.jsx("input",{id:g.name,type:g.step===null?"text":"number",step:g.step||.01,value:b[g.name]!==void 0?b[g.name]:g.default,onChange:I=>T({...b,[g.name]:g.step===null?I.target.value:parseFloat(I.target.value)||g.default})})]},g.name))})]}),e.wikipediaLinks&&e.wikipediaLinks.length>0&&v.jsxs("div",{className:"ide-wiki-section",children:[v.jsx("div",{className:"ide-wiki-header",children:"📖 Related Wikipedia Articles"}),v.jsx("div",{className:"ide-wiki-links",children:e.wikipediaLinks.map((g,I)=>v.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"ide-wiki-link",children:g.title},I))})]}),v.jsx("div",{className:"ide-actions",children:v.jsx("button",{onClick:m,disabled:s,className:"ide-run-button",children:s?"⏳ Running...":"▶ Run Program"})})]}),v.jsxs("div",{className:"ide-right-panel",children:[v.jsx("div",{className:"ide-results-header",children:v.jsx("span",{children:"📊 Output"})}),v.jsxs("div",{className:"ide-results-content",children:[c&&v.jsx(Y1,{imageData:c}),h?v.jsx(q1,{text:h}):!c&&v.jsx("div",{className:"ide-no-output",children:'Click "Run Program" to see results here'})]})]})]})}function W1(){const[n,e]=k.useState(null),[t,i]=k.useState(!0),[a,l]=k.useState("正在加载 Python 环境...");return k.useEffect(()=>{async function r(){try{l("正在加载 Pyodide...（首次较慢，后续会缓存）");const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js",o.async=!0,o.onload=async()=>{const s=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"});l("📦 正在加载 NumPy 和 Matplotlib..."),await s.loadPackage(["numpy","matplotlib"]),await s.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
          `),e(s),i(!1),console.log("Pyodide loaded successfully")},document.body.appendChild(o)}catch(o){l("❌ 加载失败: "+o.message),console.error("Failed to load Pyodide:",o)}}r()},[]),t?v.jsx("div",{className:"app",children:v.jsxs("div",{style:{padding:"3rem",textAlign:"center"},children:[v.jsx("h1",{children:"Optics & Berkeley Extension Programs"}),v.jsx("p",{style:{color:"#6b7280",margin:"1rem 0"},children:"基于 React + Pyodide 的光学程序集"}),v.jsxs("div",{style:{fontSize:"1.2rem",color:"#9ca3af",marginTop:"2rem"},children:["⏳ ",a]})]})}):v.jsx("div",{className:"app",children:v.jsxs(h1,{children:[v.jsx(qi,{path:"/",element:v.jsx(E1,{})}),v.jsx(qi,{path:"/program/:programId",element:v.jsx(B1,{pyodide:n})}),v.jsx(qi,{path:"*",element:v.jsx(c1,{to:"/",replace:!0})})]})})}function B1({pyodide:n}){const{programId:e}=Qc(),t=ji.find(i=>i.id===e);return t?v.jsxs("div",{children:[v.jsxs("div",{className:"header",children:[v.jsx(ir,{to:"/",className:"back-link",children:"← 返回列表"}),v.jsx("h1",{children:t.title}),v.jsx("p",{className:"subtitle",children:t.description})]}),v.jsx(j1,{pyodide:n,program:t})]}):v.jsxs("div",{className:"error-page",children:[v.jsx("h1",{children:"程序未找到"}),v.jsx(ir,{to:"/",children:"返回首页"})]})}ol.createRoot(document.getElementById("root")).render(v.jsx(_s.StrictMode,{children:v.jsx(S1,{children:v.jsx(W1,{})})}));
