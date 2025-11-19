function Hu(n,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in n)){const l=Object.getOwnPropertyDescriptor(a,i);l&&Object.defineProperty(n,i,l.get?l:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Ku(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vs={exports:{}},di={},Is={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),Uu=Symbol.for("react.portal"),Vu=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.memo"),ac=Symbol.for("react.lazy"),ir=Symbol.iterator;function ic(n){return n===null||typeof n!="object"?null:(n=ir&&n[ir]||n["@@iterator"],typeof n=="function"?n:null)}var Ls={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Os=Object.assign,Ns={};function ft(n,e,t){this.props=n,this.context=e,this.refs=Ns,this.updater=t||Ls}ft.prototype.isReactComponent={};ft.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ft.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ps(){}Ps.prototype=ft.prototype;function io(n,e,t){this.props=n,this.context=e,this.refs=Ns,this.updater=t||Ls}var lo=io.prototype=new Ps;lo.constructor=io;Os(lo,ft.prototype);lo.isPureReactComponent=!0;var lr=Array.isArray,Cs=Object.prototype.hasOwnProperty,oo={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function Fs(n,e,t){var a,i={},l=null,o=null;if(e!=null)for(a in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(l=""+e.key),e)Cs.call(e,a)&&!ws.hasOwnProperty(a)&&(i[a]=e[a]);var r=arguments.length-2;if(r===1)i.children=t;else if(1<r){for(var s=Array(r),p=0;p<r;p++)s[p]=arguments[p+2];i.children=s}if(n&&n.defaultProps)for(a in r=n.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return{$$typeof:aa,type:n,key:l,ref:o,props:i,_owner:oo.current}}function lc(n,e){return{$$typeof:aa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ro(n){return typeof n=="object"&&n!==null&&n.$$typeof===aa}function oc(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var or=/\/+/g;function Di(n,e){return typeof n=="object"&&n!==null&&n.key!=null?oc(""+n.key):e.toString(36)}function Ca(n,e,t,a,i){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case aa:case Uu:o=!0}}if(o)return o=n,i=i(o),n=a===""?"."+Di(o,0):a,lr(i)?(t="",n!=null&&(t=n.replace(or,"$&/")+"/"),Ca(i,e,t,"",function(p){return p})):i!=null&&(ro(i)&&(i=lc(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(or,"$&/")+"/")+n)),e.push(i)),1;if(o=0,a=a===""?".":a+":",lr(n))for(var r=0;r<n.length;r++){l=n[r];var s=a+Di(l,r);o+=Ca(l,e,t,s,i)}else if(s=ic(n),typeof s=="function")for(n=s.call(n),r=0;!(l=n.next()).done;)l=l.value,s=a+Di(l,r++),o+=Ca(l,e,t,s,i);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(n,e,t){if(n==null)return n;var a=[],i=0;return Ca(n,a,"","",function(l){return e.call(t,l,i++)}),a}function rc(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},wa={transition:null},sc={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:wa,ReactCurrentOwner:oo};function ks(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ca,forEach:function(n,e,t){ca(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ca(n,function(){e++}),e},toArray:function(n){return ca(n,function(e){return e})||[]},only:function(n){if(!ro(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};z.Component=ft;z.Fragment=Vu;z.Profiler=Zu;z.PureComponent=io;z.StrictMode=$u;z.Suspense=ec;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sc;z.act=ks;z.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var a=Os({},n.props),i=n.key,l=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,o=oo.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var r=n.type.defaultProps;for(s in e)Cs.call(e,s)&&!ws.hasOwnProperty(s)&&(a[s]=e[s]===void 0&&r!==void 0?r[s]:e[s])}var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){r=Array(s);for(var p=0;p<s;p++)r[p]=arguments[p+2];a.children=r}return{$$typeof:aa,type:n.type,key:i,ref:l,props:a,_owner:o}};z.createContext=function(n){return n={$$typeof:Ju,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Qu,_context:n},n.Consumer=n};z.createElement=Fs;z.createFactory=function(n){var e=Fs.bind(null,n);return e.type=n,e};z.createRef=function(){return{current:null}};z.forwardRef=function(n){return{$$typeof:nc,render:n}};z.isValidElement=ro;z.lazy=function(n){return{$$typeof:ac,_payload:{_status:-1,_result:n},_init:rc}};z.memo=function(n,e){return{$$typeof:tc,type:n,compare:e===void 0?null:e}};z.startTransition=function(n){var e=wa.transition;wa.transition={};try{n()}finally{wa.transition=e}};z.unstable_act=ks;z.useCallback=function(n,e){return cn.current.useCallback(n,e)};z.useContext=function(n){return cn.current.useContext(n)};z.useDebugValue=function(){};z.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};z.useEffect=function(n,e){return cn.current.useEffect(n,e)};z.useId=function(){return cn.current.useId()};z.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};z.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};z.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};z.useMemo=function(n,e){return cn.current.useMemo(n,e)};z.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};z.useRef=function(n){return cn.current.useRef(n)};z.useState=function(n){return cn.current.useState(n)};z.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};z.useTransition=function(){return cn.current.useTransition()};z.version="18.3.1";Is.exports=z;var I=Is.exports;const Rs=Ku(I),pc=Hu({__proto__:null,default:Rs},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc=I,cc=Symbol.for("react.element"),fc=Symbol.for("react.fragment"),dc=Object.prototype.hasOwnProperty,mc=uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hc={key:!0,ref:!0,__self:!0,__source:!0};function zs(n,e,t){var a,i={},l=null,o=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(o=e.ref);for(a in e)dc.call(e,a)&&!hc.hasOwnProperty(a)&&(i[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)i[a]===void 0&&(i[a]=e[a]);return{$$typeof:cc,type:n,key:l,ref:o,props:i,_owner:mc.current}}di.Fragment=fc;di.jsx=zs;di.jsxs=zs;vs.exports=di;var v=vs.exports,rl={},Ds={exports:{}},vn={},Ms={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,k){var R=P.length;P.push(k);n:for(;0<R;){var G=R-1>>>1,Q=P[G];if(0<i(Q,k))P[G]=k,P[R]=Q,R=G;else break n}}function t(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var k=P[0],R=P.pop();if(R!==k){P[0]=R;n:for(var G=0,Q=P.length,pa=Q>>>1;G<pa;){var Ie=2*(G+1)-1,zi=P[Ie],Le=Ie+1,ua=P[Le];if(0>i(zi,R))Le<Q&&0>i(ua,zi)?(P[G]=ua,P[Le]=R,G=Le):(P[G]=zi,P[Ie]=R,G=Ie);else if(Le<Q&&0>i(ua,R))P[G]=ua,P[Le]=R,G=Le;else break n}}return k}function i(P,k){var R=P.sortIndex-k.sortIndex;return R!==0?R:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var o=Date,r=o.now();n.unstable_now=function(){return o.now()-r}}var s=[],p=[],d=1,f=null,h=3,x=!1,b=!1,T=!1,L=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var k=t(p);k!==null;){if(k.callback===null)a(p);else if(k.startTime<=P)a(p),k.sortIndex=k.expirationTime,e(s,k);else break;k=t(p)}}function y(P){if(T=!1,m(P),!b)if(t(s)!==null)b=!0,ki(g);else{var k=t(p);k!==null&&Ri(y,k.startTime-P)}}function g(P,k){b=!1,T&&(T=!1,c(w),w=-1),x=!0;var R=h;try{for(m(k),f=t(s);f!==null&&(!(f.expirationTime>k)||P&&!Z());){var G=f.callback;if(typeof G=="function"){f.callback=null,h=f.priorityLevel;var Q=G(f.expirationTime<=k);k=n.unstable_now(),typeof Q=="function"?f.callback=Q:f===t(s)&&a(s),m(k)}else a(s);f=t(s)}if(f!==null)var pa=!0;else{var Ie=t(p);Ie!==null&&Ri(y,Ie.startTime-k),pa=!1}return pa}finally{f=null,h=R,x=!1}}var O=!1,C=null,w=-1,A=5,F=-1;function Z(){return!(n.unstable_now()-F<A)}function Bn(){if(C!==null){var P=n.unstable_now();F=P;var k=!0;try{k=C(!0,P)}finally{k?gt():(O=!1,C=null)}}else O=!1}var gt;if(typeof u=="function")gt=function(){u(Bn)};else if(typeof MessageChannel<"u"){var ar=new MessageChannel,Gu=ar.port2;ar.port1.onmessage=Bn,gt=function(){Gu.postMessage(null)}}else gt=function(){L(Bn,0)};function ki(P){C=P,O||(O=!0,gt())}function Ri(P,k){w=L(function(){P(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){b||x||(b=!0,ki(g))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(s)},n.unstable_next=function(P){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var R=h;h=k;try{return P()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=h;h=P;try{return k()}finally{h=R}},n.unstable_scheduleCallback=function(P,k,R){var G=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,P){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,P={id:d++,callback:k,priorityLevel:P,startTime:R,expirationTime:Q,sortIndex:-1},R>G?(P.sortIndex=R,e(p,P),t(s)===null&&P===t(p)&&(T?(c(w),w=-1):T=!0,Ri(y,R-G))):(P.sortIndex=Q,e(s,P),b||x||(b=!0,ki(g))),P},n.unstable_shouldYield=Z,n.unstable_wrapCallback=function(P){var k=h;return function(){var R=h;h=k;try{return P.apply(this,arguments)}finally{h=R}}}})(As);Ms.exports=As;var gc=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=I,Sn=gc;function S(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _s=new Set,Et={};function _e(n,e){lt(n,e),lt(n+"Capture",e)}function lt(n,e){for(Et[n]=e,n=0;n<e.length;n++)_s.add(e[n])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,xc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rr={},sr={};function bc(n){return sl.call(sr,n)?!0:sl.call(rr,n)?!1:xc.test(n)?sr[n]=!0:(rr[n]=!0,!1)}function Tc(n,e,t,a){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Sc(n,e,t,a){if(e===null||typeof e>"u"||Tc(n,e,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,a,i,l,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){an[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];an[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){an[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){an[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){an[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){an[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){an[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){an[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){an[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var so=/[\-:]([a-z])/g;function po(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(so,po);an[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(so,po);an[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(so,po);an[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){an[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});an.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){an[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function uo(n,e,t,a){var i=an.hasOwnProperty(e)?an[e]:null;(i!==null?i.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sc(e,t,i,a)&&(t=null),a||i===null?bc(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,a=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?n.setAttributeNS(a,e,t):n.setAttribute(e,t))))}var Qn=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),je=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),co=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),Es=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),pr=Symbol.iterator;function yt(n){return n===null||typeof n!="object"?null:(n=pr&&n[pr]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,Mi;function Ot(n){if(Mi===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Mi=e&&e[1]||""}return`
`+Mi+n}var Ai=!1;function _i(n,e){if(!n||Ai)return"";Ai=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(p){var a=p}Reflect.construct(n,[],e)}else{try{e.call()}catch(p){a=p}n.call(e.prototype)}else{try{throw Error()}catch(p){a=p}n()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),l=a.stack.split(`
`),o=i.length-1,r=l.length-1;1<=o&&0<=r&&i[o]!==l[r];)r--;for(;1<=o&&0<=r;o--,r--)if(i[o]!==l[r]){if(o!==1||r!==1)do if(o--,r--,0>r||i[o]!==l[r]){var s=`
`+i[o].replace(" at new "," at ");return n.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",n.displayName)),s}while(1<=o&&0<=r);break}}}finally{Ai=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ot(n):""}function vc(n){switch(n.tag){case 5:return Ot(n.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return n=_i(n.type,!1),n;case 11:return n=_i(n.type.render,!1),n;case 1:return n=_i(n.type,!0),n;default:return""}}function fl(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Be:return"Fragment";case je:return"Portal";case pl:return"Profiler";case co:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ys:return(n.displayName||"Context")+".Consumer";case Es:return(n._context.displayName||"Context")+".Provider";case fo:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case mo:return e=n.displayName||null,e!==null?e:fl(n.type)||"Memo";case ee:e=n._payload,n=n._init;try{return fl(n(e))}catch{}}return null}function Ic(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(e);case 8:return e===co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function js(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lc(n){var e=js(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function da(n){n._valueTracker||(n._valueTracker=Lc(n))}function Bs(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=js(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Ba(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dl(n,e){var t=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function ur(n,e){var t=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;t=ye(e.value!=null?e.value:t),n._wrapperState={initialChecked:a,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xs(n,e){e=e.checked,e!=null&&uo(n,"checked",e,!1)}function ml(n,e){Xs(n,e);var t=ye(e.value),a=e.type;if(t!=null)a==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(a==="submit"||a==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?hl(n,e.type,t):e.hasOwnProperty("defaultValue")&&hl(n,e.type,ye(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function cr(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function hl(n,e,t){(e!=="number"||Ba(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Nt=Array.isArray;function Je(n,e,t,a){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&a&&(n[t].defaultSelected=!0)}else{for(t=""+ye(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,a&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function gl(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fr(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(S(92));if(Nt(t)){if(1<t.length)throw Error(S(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ye(t)}}function Ws(n,e){var t=ye(e.value),a=ye(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),a!=null&&(n.defaultValue=""+a)}function dr(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Gs(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Gs(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ma,Hs=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,a,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,a,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Yt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(wt).forEach(function(n){Oc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),wt[e]=wt[n]})});function Ks(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||wt.hasOwnProperty(n)&&wt[n]?(""+e).trim():e+"px"}function Us(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=Ks(t,e[t],a);t==="float"&&(t="cssFloat"),a?n.setProperty(t,i):n[t]=i}}var Nc=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(n,e){if(e){if(Nc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function bl(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function ho(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sl=null,nt=null,et=null;function mr(n){if(n=oa(n)){if(typeof Sl!="function")throw Error(S(280));var e=n.stateNode;e&&(e=xi(e),Sl(n.stateNode,n.type,e))}}function Vs(n){nt?et?et.push(n):et=[n]:nt=n}function $s(){if(nt){var n=nt,e=et;if(et=nt=null,mr(n),e)for(n=0;n<e.length;n++)mr(e[n])}}function Zs(n,e){return n(e)}function Qs(){}var Ei=!1;function Js(n,e,t){if(Ei)return n(e,t);Ei=!0;try{return Zs(n,e,t)}finally{Ei=!1,(nt!==null||et!==null)&&(Qs(),$s())}}function qt(n,e){var t=n.stateNode;if(t===null)return null;var a=xi(t);if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(S(231,e,typeof t));return t}var vl=!1;if(Un)try{var xt={};Object.defineProperty(xt,"passive",{get:function(){vl=!0}}),window.addEventListener("test",xt,xt),window.removeEventListener("test",xt,xt)}catch{vl=!1}function Pc(n,e,t,a,i,l,o,r,s){var p=Array.prototype.slice.call(arguments,3);try{e.apply(t,p)}catch(d){this.onError(d)}}var Ft=!1,Xa=null,Wa=!1,Il=null,Cc={onError:function(n){Ft=!0,Xa=n}};function wc(n,e,t,a,i,l,o,r,s){Ft=!1,Xa=null,Pc.apply(Cc,arguments)}function Fc(n,e,t,a,i,l,o,r,s){if(wc.apply(this,arguments),Ft){if(Ft){var p=Xa;Ft=!1,Xa=null}else throw Error(S(198));Wa||(Wa=!0,Il=p)}}function Ee(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function np(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function hr(n){if(Ee(n)!==n)throw Error(S(188))}function kc(n){var e=n.alternate;if(!e){if(e=Ee(n),e===null)throw Error(S(188));return e!==n?null:n}for(var t=n,a=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return hr(i),n;if(l===a)return hr(i),e;l=l.sibling}throw Error(S(188))}if(t.return!==a.return)t=i,a=l;else{for(var o=!1,r=i.child;r;){if(r===t){o=!0,t=i,a=l;break}if(r===a){o=!0,a=i,t=l;break}r=r.sibling}if(!o){for(r=l.child;r;){if(r===t){o=!0,t=l,a=i;break}if(r===a){o=!0,a=l,t=i;break}r=r.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==a)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?n:e}function ep(n){return n=kc(n),n!==null?tp(n):null}function tp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=tp(n);if(e!==null)return e;n=n.sibling}return null}var ap=Sn.unstable_scheduleCallback,gr=Sn.unstable_cancelCallback,Rc=Sn.unstable_shouldYield,zc=Sn.unstable_requestPaint,H=Sn.unstable_now,Dc=Sn.unstable_getCurrentPriorityLevel,go=Sn.unstable_ImmediatePriority,ip=Sn.unstable_UserBlockingPriority,Ga=Sn.unstable_NormalPriority,Mc=Sn.unstable_LowPriority,lp=Sn.unstable_IdlePriority,mi=null,qn=null;function Ac(n){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(mi,n,void 0,(n.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:Yc,_c=Math.log,Ec=Math.LN2;function Yc(n){return n>>>=0,n===0?32:31-(_c(n)/Ec|0)|0}var ha=64,ga=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ha(n,e){var t=n.pendingLanes;if(t===0)return 0;var a=0,i=n.suspendedLanes,l=n.pingedLanes,o=t&268435455;if(o!==0){var r=o&~i;r!==0?a=Pt(r):(l&=o,l!==0&&(a=Pt(l)))}else o=t&~i,o!==0?a=Pt(o):l!==0&&(a=Pt(l));if(a===0)return 0;if(e!==0&&e!==a&&!(e&i)&&(i=a&-a,l=e&-e,i>=l||i===16&&(l&4194240)!==0))return e;if(a&4&&(a|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=a;0<e;)t=31-Dn(e),i=1<<t,a|=n[t],e&=~i;return a}function qc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jc(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes;0<l;){var o=31-Dn(l),r=1<<o,s=i[o];s===-1?(!(r&t)||r&a)&&(i[o]=qc(r,e)):s<=e&&(n.expiredLanes|=r),l&=~r}}function Ll(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function op(){var n=ha;return ha<<=1,!(ha&4194240)&&(ha=64),n}function Yi(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ia(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Dn(e),n[e]=t}function Bc(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var a=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-Dn(t),l=1<<i;e[i]=0,a[i]=-1,n[i]=-1,t&=~l}}function yo(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-Dn(t),i=1<<a;i&e|n[a]&e&&(n[a]|=e),t&=~i}}var M=0;function rp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var sp,xo,pp,up,cp,Ol=!1,ya=[],se=null,pe=null,ue=null,jt=new Map,Bt=new Map,ae=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yr(n,e){switch(n){case"focusin":case"focusout":se=null;break;case"dragenter":case"dragleave":pe=null;break;case"mouseover":case"mouseout":ue=null;break;case"pointerover":case"pointerout":jt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bt.delete(e.pointerId)}}function bt(n,e,t,a,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=oa(e),e!==null&&xo(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function Wc(n,e,t,a,i){switch(e){case"focusin":return se=bt(se,n,e,t,a,i),!0;case"dragenter":return pe=bt(pe,n,e,t,a,i),!0;case"mouseover":return ue=bt(ue,n,e,t,a,i),!0;case"pointerover":var l=i.pointerId;return jt.set(l,bt(jt.get(l)||null,n,e,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Bt.set(l,bt(Bt.get(l)||null,n,e,t,a,i)),!0}return!1}function fp(n){var e=Pe(n.target);if(e!==null){var t=Ee(e);if(t!==null){if(e=t.tag,e===13){if(e=np(t),e!==null){n.blockedOn=e,cp(n.priority,function(){pp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Nl(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);Tl=a,t.target.dispatchEvent(a),Tl=null}else return e=oa(t),e!==null&&xo(e),n.blockedOn=t,!1;e.shift()}return!0}function xr(n,e,t){Fa(n)&&t.delete(e)}function Gc(){Ol=!1,se!==null&&Fa(se)&&(se=null),pe!==null&&Fa(pe)&&(pe=null),ue!==null&&Fa(ue)&&(ue=null),jt.forEach(xr),Bt.forEach(xr)}function Tt(n,e){n.blockedOn===e&&(n.blockedOn=null,Ol||(Ol=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Gc)))}function Xt(n){function e(i){return Tt(i,n)}if(0<ya.length){Tt(ya[0],n);for(var t=1;t<ya.length;t++){var a=ya[t];a.blockedOn===n&&(a.blockedOn=null)}}for(se!==null&&Tt(se,n),pe!==null&&Tt(pe,n),ue!==null&&Tt(ue,n),jt.forEach(e),Bt.forEach(e),t=0;t<ae.length;t++)a=ae[t],a.blockedOn===n&&(a.blockedOn=null);for(;0<ae.length&&(t=ae[0],t.blockedOn===null);)fp(t),t.blockedOn===null&&ae.shift()}var tt=Qn.ReactCurrentBatchConfig,Ka=!0;function Hc(n,e,t,a){var i=M,l=tt.transition;tt.transition=null;try{M=1,bo(n,e,t,a)}finally{M=i,tt.transition=l}}function Kc(n,e,t,a){var i=M,l=tt.transition;tt.transition=null;try{M=4,bo(n,e,t,a)}finally{M=i,tt.transition=l}}function bo(n,e,t,a){if(Ka){var i=Nl(n,e,t,a);if(i===null)Vi(n,e,a,Ua,t),yr(n,a);else if(Wc(i,n,e,t,a))a.stopPropagation();else if(yr(n,a),e&4&&-1<Xc.indexOf(n)){for(;i!==null;){var l=oa(i);if(l!==null&&sp(l),l=Nl(n,e,t,a),l===null&&Vi(n,e,a,Ua,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else Vi(n,e,a,null,t)}}var Ua=null;function Nl(n,e,t,a){if(Ua=null,n=ho(a),n=Pe(n),n!==null)if(e=Ee(n),e===null)n=null;else if(t=e.tag,t===13){if(n=np(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ua=n,null}function dp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dc()){case go:return 1;case ip:return 4;case Ga:case Mc:return 16;case lp:return 536870912;default:return 16}default:return 16}}var le=null,To=null,ka=null;function mp(){if(ka)return ka;var n,e=To,t=e.length,a,i="value"in le?le.value:le.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(a=1;a<=o&&e[t-a]===i[l-a];a++);return ka=i.slice(n,1<a?1-a:void 0)}function Ra(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function br(){return!1}function In(n){function e(t,a,i,l,o){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],this[r]=t?t(l):l[r]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xa:br,this.isPropagationStopped=br,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=In(dt),la=X({},dt,{view:0,detail:0}),Uc=In(la),qi,ji,St,hi=X({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==St&&(St&&n.type==="mousemove"?(qi=n.screenX-St.screenX,ji=n.screenY-St.screenY):ji=qi=0,St=n),qi)},movementY:function(n){return"movementY"in n?n.movementY:ji}}),Tr=In(hi),Vc=X({},hi,{dataTransfer:0}),$c=In(Vc),Zc=X({},la,{relatedTarget:0}),Bi=In(Zc),Qc=X({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),Jc=In(Qc),nf=X({},dt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ef=In(nf),tf=X({},dt,{data:0}),Sr=In(tf),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=of[n])?!!e[n]:!1}function vo(){return rf}var sf=X({},la,{key:function(n){if(n.key){var e=af[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lf[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vo,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pf=In(sf),uf=X({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vr=In(uf),cf=X({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vo}),ff=In(cf),df=X({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=In(df),hf=X({},hi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=In(hf),yf=[9,13,27,32],Io=Un&&"CompositionEvent"in window,kt=null;Un&&"documentMode"in document&&(kt=document.documentMode);var xf=Un&&"TextEvent"in window&&!kt,hp=Un&&(!Io||kt&&8<kt&&11>=kt),Ir=" ",Lr=!1;function gp(n,e){switch(n){case"keyup":return yf.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xe=!1;function bf(n,e){switch(n){case"compositionend":return yp(e);case"keypress":return e.which!==32?null:(Lr=!0,Ir);case"textInput":return n=e.data,n===Ir&&Lr?null:n;default:return null}}function Tf(n,e){if(Xe)return n==="compositionend"||!Io&&gp(n,e)?(n=mp(),ka=To=le=null,Xe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hp&&e.locale!=="ko"?null:e.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Sf[n.type]:e==="textarea"}function xp(n,e,t,a){Vs(a),e=Va(e,"onChange"),0<e.length&&(t=new So("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Rt=null,Wt=null;function vf(n){wp(n,0)}function gi(n){var e=He(n);if(Bs(e))return n}function If(n,e){if(n==="change")return e}var bp=!1;if(Un){var Xi;if(Un){var Wi="oninput"in document;if(!Wi){var Nr=document.createElement("div");Nr.setAttribute("oninput","return;"),Wi=typeof Nr.oninput=="function"}Xi=Wi}else Xi=!1;bp=Xi&&(!document.documentMode||9<document.documentMode)}function Pr(){Rt&&(Rt.detachEvent("onpropertychange",Tp),Wt=Rt=null)}function Tp(n){if(n.propertyName==="value"&&gi(Wt)){var e=[];xp(e,Wt,n,ho(n)),Js(vf,e)}}function Lf(n,e,t){n==="focusin"?(Pr(),Rt=e,Wt=t,Rt.attachEvent("onpropertychange",Tp)):n==="focusout"&&Pr()}function Of(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gi(Wt)}function Nf(n,e){if(n==="click")return gi(e)}function Pf(n,e){if(n==="input"||n==="change")return gi(e)}function Cf(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var An=typeof Object.is=="function"?Object.is:Cf;function Gt(n,e){if(An(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!sl.call(e,i)||!An(n[i],e[i]))return!1}return!0}function Cr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wr(n,e){var t=Cr(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Cr(t)}}function Sp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Sp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function vp(){for(var n=window,e=Ba();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ba(n.document)}return e}function Lo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function wf(n){var e=vp(),t=n.focusedElem,a=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Sp(t.ownerDocument.documentElement,t)){if(a!==null&&Lo(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!n.extend&&l>a&&(i=a,a=l,l=i),i=wr(t,l);var o=wr(t,a);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),l>a?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ff=Un&&"documentMode"in document&&11>=document.documentMode,We=null,Pl=null,zt=null,Cl=!1;function Fr(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cl||We==null||We!==Ba(a)||(a=We,"selectionStart"in a&&Lo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),zt&&Gt(zt,a)||(zt=a,a=Va(Pl,"onSelect"),0<a.length&&(e=new So("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=We)))}function ba(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ge={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Gi={},Ip={};Un&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ge.animationend.animation,delete Ge.animationiteration.animation,delete Ge.animationstart.animation),"TransitionEvent"in window||delete Ge.transitionend.transition);function yi(n){if(Gi[n])return Gi[n];if(!Ge[n])return n;var e=Ge[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ip)return Gi[n]=e[t];return n}var Lp=yi("animationend"),Op=yi("animationiteration"),Np=yi("animationstart"),Pp=yi("transitionend"),Cp=new Map,kr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function be(n,e){Cp.set(n,e),_e(e,[n])}for(var Hi=0;Hi<kr.length;Hi++){var Ki=kr[Hi],kf=Ki.toLowerCase(),Rf=Ki[0].toUpperCase()+Ki.slice(1);be(kf,"on"+Rf)}be(Lp,"onAnimationEnd");be(Op,"onAnimationIteration");be(Np,"onAnimationStart");be("dblclick","onDoubleClick");be("focusin","onFocus");be("focusout","onBlur");be(Pp,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);_e("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_e("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_e("onBeforeInput",["compositionend","keypress","textInput","paste"]);_e("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_e("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_e("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));function Rr(n,e,t){var a=n.type||"unknown-event";n.currentTarget=t,Fc(a,e,void 0,n),n.currentTarget=null}function wp(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],i=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var o=a.length-1;0<=o;o--){var r=a[o],s=r.instance,p=r.currentTarget;if(r=r.listener,s!==l&&i.isPropagationStopped())break n;Rr(i,r,p),l=s}else for(o=0;o<a.length;o++){if(r=a[o],s=r.instance,p=r.currentTarget,r=r.listener,s!==l&&i.isPropagationStopped())break n;Rr(i,r,p),l=s}}}if(Wa)throw n=Il,Wa=!1,Il=null,n}function E(n,e){var t=e[zl];t===void 0&&(t=e[zl]=new Set);var a=n+"__bubble";t.has(a)||(Fp(e,n,2,!1),t.add(a))}function Ui(n,e,t){var a=0;e&&(a|=4),Fp(t,n,a,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Ht(n){if(!n[Ta]){n[Ta]=!0,_s.forEach(function(t){t!=="selectionchange"&&(zf.has(t)||Ui(t,!1,n),Ui(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Ui("selectionchange",!1,e))}}function Fp(n,e,t,a){switch(dp(e)){case 1:var i=Hc;break;case 4:i=Kc;break;default:i=bo}t=i.bind(null,e,t,n),i=void 0,!vl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Vi(n,e,t,a,i){var l=a;if(!(e&1)&&!(e&2)&&a!==null)n:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===i||r.nodeType===8&&r.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;r!==null;){if(o=Pe(r),o===null)return;if(s=o.tag,s===5||s===6){a=l=o;continue n}r=r.parentNode}}a=a.return}Js(function(){var p=l,d=ho(t),f=[];n:{var h=Cp.get(n);if(h!==void 0){var x=So,b=n;switch(n){case"keypress":if(Ra(t)===0)break n;case"keydown":case"keyup":x=pf;break;case"focusin":b="focus",x=Bi;break;case"focusout":b="blur",x=Bi;break;case"beforeblur":case"afterblur":x=Bi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=$c;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=ff;break;case Lp:case Op:case Np:x=Jc;break;case Pp:x=mf;break;case"scroll":x=Uc;break;case"wheel":x=gf;break;case"copy":case"cut":case"paste":x=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=vr}var T=(e&4)!==0,L=!T&&n==="scroll",c=T?h!==null?h+"Capture":null:h;T=[];for(var u=p,m;u!==null;){m=u;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,c!==null&&(y=qt(u,c),y!=null&&T.push(Kt(u,y,m)))),L)break;u=u.return}0<T.length&&(h=new x(h,b,null,t,d),f.push({event:h,listeners:T}))}}if(!(e&7)){n:{if(h=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",h&&t!==Tl&&(b=t.relatedTarget||t.fromElement)&&(Pe(b)||b[Vn]))break n;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(b=t.relatedTarget||t.toElement,x=p,b=b?Pe(b):null,b!==null&&(L=Ee(b),b!==L||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=p),x!==b)){if(T=Tr,y="onMouseLeave",c="onMouseEnter",u="mouse",(n==="pointerout"||n==="pointerover")&&(T=vr,y="onPointerLeave",c="onPointerEnter",u="pointer"),L=x==null?h:He(x),m=b==null?h:He(b),h=new T(y,u+"leave",x,t,d),h.target=L,h.relatedTarget=m,y=null,Pe(d)===p&&(T=new T(c,u+"enter",b,t,d),T.target=m,T.relatedTarget=L,y=T),L=y,x&&b)e:{for(T=x,c=b,u=0,m=T;m;m=qe(m))u++;for(m=0,y=c;y;y=qe(y))m++;for(;0<u-m;)T=qe(T),u--;for(;0<m-u;)c=qe(c),m--;for(;u--;){if(T===c||c!==null&&T===c.alternate)break e;T=qe(T),c=qe(c)}T=null}else T=null;x!==null&&zr(f,h,x,T,!1),b!==null&&L!==null&&zr(f,L,b,T,!0)}}n:{if(h=p?He(p):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var g=If;else if(Or(h))if(bp)g=Pf;else{g=Of;var O=Lf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(g=Nf);if(g&&(g=g(n,p))){xp(f,g,t,d);break n}O&&O(n,h,p),n==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&hl(h,"number",h.value)}switch(O=p?He(p):window,n){case"focusin":(Or(O)||O.contentEditable==="true")&&(We=O,Pl=p,zt=null);break;case"focusout":zt=Pl=We=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Fr(f,t,d);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Fr(f,t,d)}var C;if(Io)n:{switch(n){case"compositionstart":var w="onCompositionStart";break n;case"compositionend":w="onCompositionEnd";break n;case"compositionupdate":w="onCompositionUpdate";break n}w=void 0}else Xe?gp(n,t)&&(w="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(hp&&t.locale!=="ko"&&(Xe||w!=="onCompositionStart"?w==="onCompositionEnd"&&Xe&&(C=mp()):(le=d,To="value"in le?le.value:le.textContent,Xe=!0)),O=Va(p,w),0<O.length&&(w=new Sr(w,n,null,t,d),f.push({event:w,listeners:O}),C?w.data=C:(C=yp(t),C!==null&&(w.data=C)))),(C=xf?bf(n,t):Tf(n,t))&&(p=Va(p,"onBeforeInput"),0<p.length&&(d=new Sr("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:p}),d.data=C))}wp(f,e)})}function Kt(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Va(n,e){for(var t=e+"Capture",a=[];n!==null;){var i=n,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qt(n,t),l!=null&&a.unshift(Kt(n,l,i)),l=qt(n,e),l!=null&&a.push(Kt(n,l,i))),n=n.return}return a}function qe(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zr(n,e,t,a,i){for(var l=e._reactName,o=[];t!==null&&t!==a;){var r=t,s=r.alternate,p=r.stateNode;if(s!==null&&s===a)break;r.tag===5&&p!==null&&(r=p,i?(s=qt(t,l),s!=null&&o.unshift(Kt(t,s,r))):i||(s=qt(t,l),s!=null&&o.push(Kt(t,s,r)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Df=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function Dr(n){return(typeof n=="string"?n:""+n).replace(Df,`
`).replace(Mf,"")}function Sa(n,e,t){if(e=Dr(e),Dr(n)!==e&&t)throw Error(S(425))}function $a(){}var wl=null,Fl=null;function kl(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,Mr=typeof Promise=="function"?Promise:void 0,_f=typeof queueMicrotask=="function"?queueMicrotask:typeof Mr<"u"?function(n){return Mr.resolve(null).then(n).catch(Ef)}:Rl;function Ef(n){setTimeout(function(){throw n})}function $i(n,e){var t=e,a=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){n.removeChild(i),Xt(e);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);Xt(e)}function ce(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ar(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var mt=Math.random().toString(36).slice(2),Yn="__reactFiber$"+mt,Ut="__reactProps$"+mt,Vn="__reactContainer$"+mt,zl="__reactEvents$"+mt,Yf="__reactListeners$"+mt,qf="__reactHandles$"+mt;function Pe(n){var e=n[Yn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vn]||t[Yn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ar(n);n!==null;){if(t=n[Yn])return t;n=Ar(n)}return e}n=t,t=n.parentNode}return null}function oa(n){return n=n[Yn]||n[Vn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function He(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(S(33))}function xi(n){return n[Ut]||null}var Dl=[],Ke=-1;function Te(n){return{current:n}}function Y(n){0>Ke||(n.current=Dl[Ke],Dl[Ke]=null,Ke--)}function _(n,e){Ke++,Dl[Ke]=n.current,n.current=e}var xe={},sn=Te(xe),hn=Te(!1),Re=xe;function ot(n,e){var t=n.type.contextTypes;if(!t)return xe;var a=n.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=e[l];return a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function gn(n){return n=n.childContextTypes,n!=null}function Za(){Y(hn),Y(sn)}function _r(n,e,t){if(sn.current!==xe)throw Error(S(168));_(sn,e),_(hn,t)}function kp(n,e,t){var a=n.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in e))throw Error(S(108,Ic(n)||"Unknown",i));return X({},t,a)}function Qa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xe,Re=sn.current,_(sn,n),_(hn,hn.current),!0}function Er(n,e,t){var a=n.stateNode;if(!a)throw Error(S(169));t?(n=kp(n,e,Re),a.__reactInternalMemoizedMergedChildContext=n,Y(hn),Y(sn),_(sn,n)):Y(hn),_(hn,t)}var Wn=null,bi=!1,Zi=!1;function Rp(n){Wn===null?Wn=[n]:Wn.push(n)}function jf(n){bi=!0,Rp(n)}function Se(){if(!Zi&&Wn!==null){Zi=!0;var n=0,e=M;try{var t=Wn;for(M=1;n<t.length;n++){var a=t[n];do a=a(!0);while(a!==null)}Wn=null,bi=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(n+1)),ap(go,Se),i}finally{M=e,Zi=!1}}return null}var Ue=[],Ve=0,Ja=null,ni=0,Ln=[],On=0,ze=null,Gn=1,Hn="";function Oe(n,e){Ue[Ve++]=ni,Ue[Ve++]=Ja,Ja=n,ni=e}function zp(n,e,t){Ln[On++]=Gn,Ln[On++]=Hn,Ln[On++]=ze,ze=n;var a=Gn;n=Hn;var i=32-Dn(a)-1;a&=~(1<<i),t+=1;var l=32-Dn(e)+i;if(30<l){var o=i-i%5;l=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Gn=1<<32-Dn(e)+i|t<<i|a,Hn=l+n}else Gn=1<<l|t<<i|a,Hn=n}function Oo(n){n.return!==null&&(Oe(n,1),zp(n,1,0))}function No(n){for(;n===Ja;)Ja=Ue[--Ve],Ue[Ve]=null,ni=Ue[--Ve],Ue[Ve]=null;for(;n===ze;)ze=Ln[--On],Ln[On]=null,Hn=Ln[--On],Ln[On]=null,Gn=Ln[--On],Ln[On]=null}var Tn=null,bn=null,q=!1,zn=null;function Dp(n,e){var t=Nn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Yr(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,bn=ce(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ze!==null?{id:Gn,overflow:Hn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Nn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,bn=null,!0):!1;default:return!1}}function Ml(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Al(n){if(q){var e=bn;if(e){var t=e;if(!Yr(n,e)){if(Ml(n))throw Error(S(418));e=ce(t.nextSibling);var a=Tn;e&&Yr(n,e)?Dp(a,t):(n.flags=n.flags&-4097|2,q=!1,Tn=n)}}else{if(Ml(n))throw Error(S(418));n.flags=n.flags&-4097|2,q=!1,Tn=n}}}function qr(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function va(n){if(n!==Tn)return!1;if(!q)return qr(n),q=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!kl(n.type,n.memoizedProps)),e&&(e=bn)){if(Ml(n))throw Mp(),Error(S(418));for(;e;)Dp(n,e),e=ce(e.nextSibling)}if(qr(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=ce(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=Tn?ce(n.stateNode.nextSibling):null;return!0}function Mp(){for(var n=bn;n;)n=ce(n.nextSibling)}function rt(){bn=Tn=null,q=!1}function Po(n){zn===null?zn=[n]:zn.push(n)}var Bf=Qn.ReactCurrentBatchConfig;function vt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var a=t.stateNode}if(!a)throw Error(S(147,n));var i=a,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(o){var r=i.refs;o===null?delete r[l]:r[l]=o},e._stringRef=l,e)}if(typeof n!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,n))}return n}function Ia(n,e){throw n=Object.prototype.toString.call(e),Error(S(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function jr(n){var e=n._init;return e(n._payload)}function Ap(n){function e(c,u){if(n){var m=c.deletions;m===null?(c.deletions=[u],c.flags|=16):m.push(u)}}function t(c,u){if(!n)return null;for(;u!==null;)e(c,u),u=u.sibling;return null}function a(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=he(c,u),c.index=0,c.sibling=null,c}function l(c,u,m){return c.index=m,n?(m=c.alternate,m!==null?(m=m.index,m<u?(c.flags|=2,u):m):(c.flags|=2,u)):(c.flags|=1048576,u)}function o(c){return n&&c.alternate===null&&(c.flags|=2),c}function r(c,u,m,y){return u===null||u.tag!==6?(u=il(m,c.mode,y),u.return=c,u):(u=i(u,m),u.return=c,u)}function s(c,u,m,y){var g=m.type;return g===Be?d(c,u,m.props.children,y,m.key):u!==null&&(u.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ee&&jr(g)===u.type)?(y=i(u,m.props),y.ref=vt(c,u,m),y.return=c,y):(y=Ya(m.type,m.key,m.props,null,c.mode,y),y.ref=vt(c,u,m),y.return=c,y)}function p(c,u,m,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=ll(m,c.mode,y),u.return=c,u):(u=i(u,m.children||[]),u.return=c,u)}function d(c,u,m,y,g){return u===null||u.tag!==7?(u=ke(m,c.mode,y,g),u.return=c,u):(u=i(u,m),u.return=c,u)}function f(c,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=il(""+u,c.mode,m),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case fa:return m=Ya(u.type,u.key,u.props,null,c.mode,m),m.ref=vt(c,null,u),m.return=c,m;case je:return u=ll(u,c.mode,m),u.return=c,u;case ee:var y=u._init;return f(c,y(u._payload),m)}if(Nt(u)||yt(u))return u=ke(u,c.mode,m,null),u.return=c,u;Ia(c,u)}return null}function h(c,u,m,y){var g=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return g!==null?null:r(c,u,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:return m.key===g?s(c,u,m,y):null;case je:return m.key===g?p(c,u,m,y):null;case ee:return g=m._init,h(c,u,g(m._payload),y)}if(Nt(m)||yt(m))return g!==null?null:d(c,u,m,y,null);Ia(c,m)}return null}function x(c,u,m,y,g){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(m)||null,r(u,c,""+y,g);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fa:return c=c.get(y.key===null?m:y.key)||null,s(u,c,y,g);case je:return c=c.get(y.key===null?m:y.key)||null,p(u,c,y,g);case ee:var O=y._init;return x(c,u,m,O(y._payload),g)}if(Nt(y)||yt(y))return c=c.get(m)||null,d(u,c,y,g,null);Ia(u,y)}return null}function b(c,u,m,y){for(var g=null,O=null,C=u,w=u=0,A=null;C!==null&&w<m.length;w++){C.index>w?(A=C,C=null):A=C.sibling;var F=h(c,C,m[w],y);if(F===null){C===null&&(C=A);break}n&&C&&F.alternate===null&&e(c,C),u=l(F,u,w),O===null?g=F:O.sibling=F,O=F,C=A}if(w===m.length)return t(c,C),q&&Oe(c,w),g;if(C===null){for(;w<m.length;w++)C=f(c,m[w],y),C!==null&&(u=l(C,u,w),O===null?g=C:O.sibling=C,O=C);return q&&Oe(c,w),g}for(C=a(c,C);w<m.length;w++)A=x(C,c,w,m[w],y),A!==null&&(n&&A.alternate!==null&&C.delete(A.key===null?w:A.key),u=l(A,u,w),O===null?g=A:O.sibling=A,O=A);return n&&C.forEach(function(Z){return e(c,Z)}),q&&Oe(c,w),g}function T(c,u,m,y){var g=yt(m);if(typeof g!="function")throw Error(S(150));if(m=g.call(m),m==null)throw Error(S(151));for(var O=g=null,C=u,w=u=0,A=null,F=m.next();C!==null&&!F.done;w++,F=m.next()){C.index>w?(A=C,C=null):A=C.sibling;var Z=h(c,C,F.value,y);if(Z===null){C===null&&(C=A);break}n&&C&&Z.alternate===null&&e(c,C),u=l(Z,u,w),O===null?g=Z:O.sibling=Z,O=Z,C=A}if(F.done)return t(c,C),q&&Oe(c,w),g;if(C===null){for(;!F.done;w++,F=m.next())F=f(c,F.value,y),F!==null&&(u=l(F,u,w),O===null?g=F:O.sibling=F,O=F);return q&&Oe(c,w),g}for(C=a(c,C);!F.done;w++,F=m.next())F=x(C,c,w,F.value,y),F!==null&&(n&&F.alternate!==null&&C.delete(F.key===null?w:F.key),u=l(F,u,w),O===null?g=F:O.sibling=F,O=F);return n&&C.forEach(function(Bn){return e(c,Bn)}),q&&Oe(c,w),g}function L(c,u,m,y){if(typeof m=="object"&&m!==null&&m.type===Be&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:n:{for(var g=m.key,O=u;O!==null;){if(O.key===g){if(g=m.type,g===Be){if(O.tag===7){t(c,O.sibling),u=i(O,m.props.children),u.return=c,c=u;break n}}else if(O.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ee&&jr(g)===O.type){t(c,O.sibling),u=i(O,m.props),u.ref=vt(c,O,m),u.return=c,c=u;break n}t(c,O);break}else e(c,O);O=O.sibling}m.type===Be?(u=ke(m.props.children,c.mode,y,m.key),u.return=c,c=u):(y=Ya(m.type,m.key,m.props,null,c.mode,y),y.ref=vt(c,u,m),y.return=c,c=y)}return o(c);case je:n:{for(O=m.key;u!==null;){if(u.key===O)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){t(c,u.sibling),u=i(u,m.children||[]),u.return=c,c=u;break n}else{t(c,u);break}else e(c,u);u=u.sibling}u=ll(m,c.mode,y),u.return=c,c=u}return o(c);case ee:return O=m._init,L(c,u,O(m._payload),y)}if(Nt(m))return b(c,u,m,y);if(yt(m))return T(c,u,m,y);Ia(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(t(c,u.sibling),u=i(u,m),u.return=c,c=u):(t(c,u),u=il(m,c.mode,y),u.return=c,c=u),o(c)):t(c,u)}return L}var st=Ap(!0),_p=Ap(!1),ei=Te(null),ti=null,$e=null,Co=null;function wo(){Co=$e=ti=null}function Fo(n){var e=ei.current;Y(ei),n._currentValue=e}function _l(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function at(n,e){ti=n,Co=$e=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Cn(n){var e=n._currentValue;if(Co!==n)if(n={context:n,memoizedValue:e,next:null},$e===null){if(ti===null)throw Error(S(308));$e=n,ti.dependencies={lanes:0,firstContext:n}}else $e=$e.next=n;return e}var Ce=null;function ko(n){Ce===null?Ce=[n]:Ce.push(n)}function Ep(n,e,t,a){var i=e.interleaved;return i===null?(t.next=t,ko(e)):(t.next=i.next,i.next=t),e.interleaved=t,$n(n,a)}function $n(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var te=!1;function Ro(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function fe(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,D&2){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,$n(n,t)}return i=a.interleaved,i===null?(e.next=e,ko(a)):(e.next=i.next,i.next=e),a.interleaved=e,$n(n,t)}function za(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,yo(n,t)}}function Br(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ai(n,e,t,a){var i=n.updateQueue;te=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var s=r,p=s.next;s.next=null,o===null?l=p:o.next=p,o=s;var d=n.alternate;d!==null&&(d=d.updateQueue,r=d.lastBaseUpdate,r!==o&&(r===null?d.firstBaseUpdate=p:r.next=p,d.lastBaseUpdate=s))}if(l!==null){var f=i.baseState;o=0,d=p=s=null,r=l;do{var h=r.lane,x=r.eventTime;if((a&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});n:{var b=n,T=r;switch(h=e,x=t,T.tag){case 1:if(b=T.payload,typeof b=="function"){f=b.call(x,f,h);break n}f=b;break n;case 3:b.flags=b.flags&-65537|128;case 0:if(b=T.payload,h=typeof b=="function"?b.call(x,f,h):b,h==null)break n;f=X({},f,h);break n;case 2:te=!0}}r.callback!==null&&r.lane!==0&&(n.flags|=64,h=i.effects,h===null?i.effects=[r]:h.push(r))}else x={eventTime:x,lane:h,tag:r.tag,payload:r.payload,callback:r.callback,next:null},d===null?(p=d=x,s=f):d=d.next=x,o|=h;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;h=r,r=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(s=f),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else l===null&&(i.shared.lanes=0);Me|=o,n.lanes=o,n.memoizedState=f}}function Xr(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var a=n[e],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(S(191,i));i.call(a)}}}var ra={},jn=Te(ra),Vt=Te(ra),$t=Te(ra);function we(n){if(n===ra)throw Error(S(174));return n}function zo(n,e){switch(_($t,e),_(Vt,n),_(jn,ra),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yl(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yl(e,n)}Y(jn),_(jn,e)}function pt(){Y(jn),Y(Vt),Y($t)}function qp(n){we($t.current);var e=we(jn.current),t=yl(e,n.type);e!==t&&(_(Vt,n),_(jn,t))}function Do(n){Vt.current===n&&(Y(jn),Y(Vt))}var j=Te(0);function ii(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qi=[];function Mo(){for(var n=0;n<Qi.length;n++)Qi[n]._workInProgressVersionPrimary=null;Qi.length=0}var Da=Qn.ReactCurrentDispatcher,Ji=Qn.ReactCurrentBatchConfig,De=0,B=null,V=null,J=null,li=!1,Dt=!1,Zt=0,Xf=0;function ln(){throw Error(S(321))}function Ao(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!An(n[t],e[t]))return!1;return!0}function _o(n,e,t,a,i,l){if(De=l,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=n===null||n.memoizedState===null?Kf:Uf,n=t(a,i),Dt){l=0;do{if(Dt=!1,Zt=0,25<=l)throw Error(S(301));l+=1,J=V=null,e.updateQueue=null,Da.current=Vf,n=t(a,i)}while(Dt)}if(Da.current=oi,e=V!==null&&V.next!==null,De=0,J=V=B=null,li=!1,e)throw Error(S(300));return n}function Eo(){var n=Zt!==0;return Zt=0,n}function En(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=n:J=J.next=n,J}function wn(){if(V===null){var n=B.alternate;n=n!==null?n.memoizedState:null}else n=V.next;var e=J===null?B.memoizedState:J.next;if(e!==null)J=e,V=n;else{if(n===null)throw Error(S(310));V=n,n={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},J===null?B.memoizedState=J=n:J=J.next=n}return J}function Qt(n,e){return typeof e=="function"?e(n):e}function nl(n){var e=wn(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=n;var a=V,i=a.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}a.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,a=a.baseState;var r=o=null,s=null,p=l;do{var d=p.lane;if((De&d)===d)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),a=p.hasEagerState?p.eagerState:n(a,p.action);else{var f={lane:d,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(r=s=f,o=a):s=s.next=f,B.lanes|=d,Me|=d}p=p.next}while(p!==null&&p!==l);s===null?o=a:s.next=r,An(a,e.memoizedState)||(mn=!0),e.memoizedState=a,e.baseState=o,e.baseQueue=s,t.lastRenderedState=a}if(n=t.interleaved,n!==null){i=n;do l=i.lane,B.lanes|=l,Me|=l,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function el(n){var e=wn(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=n;var a=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=n(l,o.action),o=o.next;while(o!==i);An(l,e.memoizedState)||(mn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function jp(){}function Bp(n,e){var t=B,a=wn(),i=e(),l=!An(a.memoizedState,i);if(l&&(a.memoizedState=i,mn=!0),a=a.queue,Yo(Gp.bind(null,t,a,n),[n]),a.getSnapshot!==e||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,Jt(9,Wp.bind(null,t,a,i,e),void 0,null),nn===null)throw Error(S(349));De&30||Xp(t,e,i)}return i}function Xp(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Wp(n,e,t,a){e.value=t,e.getSnapshot=a,Hp(e)&&Kp(n)}function Gp(n,e,t){return t(function(){Hp(e)&&Kp(n)})}function Hp(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!An(n,t)}catch{return!0}}function Kp(n){var e=$n(n,1);e!==null&&Mn(e,n,1,-1)}function Wr(n){var e=En();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:n},e.queue=n,n=n.dispatch=Hf.bind(null,B,n),[e.memoizedState,n]}function Jt(n,e,t,a){return n={tag:n,create:e,destroy:t,deps:a,next:null},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n)),n}function Up(){return wn().memoizedState}function Ma(n,e,t,a){var i=En();B.flags|=n,i.memoizedState=Jt(1|e,t,void 0,a===void 0?null:a)}function Ti(n,e,t,a){var i=wn();a=a===void 0?null:a;var l=void 0;if(V!==null){var o=V.memoizedState;if(l=o.destroy,a!==null&&Ao(a,o.deps)){i.memoizedState=Jt(e,t,l,a);return}}B.flags|=n,i.memoizedState=Jt(1|e,t,l,a)}function Gr(n,e){return Ma(8390656,8,n,e)}function Yo(n,e){return Ti(2048,8,n,e)}function Vp(n,e){return Ti(4,2,n,e)}function $p(n,e){return Ti(4,4,n,e)}function Zp(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Qp(n,e,t){return t=t!=null?t.concat([n]):null,Ti(4,4,Zp.bind(null,e,n),t)}function qo(){}function Jp(n,e){var t=wn();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&Ao(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function nu(n,e){var t=wn();e=e===void 0?null:e;var a=t.memoizedState;return a!==null&&e!==null&&Ao(e,a[1])?a[0]:(n=n(),t.memoizedState=[n,e],n)}function eu(n,e,t){return De&21?(An(t,e)||(t=op(),B.lanes|=t,Me|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function Wf(n,e){var t=M;M=t!==0&&4>t?t:4,n(!0);var a=Ji.transition;Ji.transition={};try{n(!1),e()}finally{M=t,Ji.transition=a}}function tu(){return wn().memoizedState}function Gf(n,e,t){var a=me(n);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},au(n))iu(e,t);else if(t=Ep(n,e,t,a),t!==null){var i=un();Mn(t,n,a,i),lu(t,e,a)}}function Hf(n,e,t){var a=me(n),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(au(n))iu(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,r=l(o,t);if(i.hasEagerState=!0,i.eagerState=r,An(r,o)){var s=e.interleaved;s===null?(i.next=i,ko(e)):(i.next=s.next,s.next=i),e.interleaved=i;return}}catch{}finally{}t=Ep(n,e,i,a),t!==null&&(i=un(),Mn(t,n,a,i),lu(t,e,a))}}function au(n){var e=n.alternate;return n===B||e!==null&&e===B}function iu(n,e){Dt=li=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function lu(n,e,t){if(t&4194240){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,yo(n,t)}}var oi={readContext:Cn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Kf={readContext:Cn,useCallback:function(n,e){return En().memoizedState=[n,e===void 0?null:e],n},useContext:Cn,useEffect:Gr,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ma(4194308,4,Zp.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ma(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ma(4,2,n,e)},useMemo:function(n,e){var t=En();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var a=En();return e=t!==void 0?t(e):e,a.memoizedState=a.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},a.queue=n,n=n.dispatch=Gf.bind(null,B,n),[a.memoizedState,n]},useRef:function(n){var e=En();return n={current:n},e.memoizedState=n},useState:Wr,useDebugValue:qo,useDeferredValue:function(n){return En().memoizedState=n},useTransition:function(){var n=Wr(!1),e=n[0];return n=Wf.bind(null,n[1]),En().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var a=B,i=En();if(q){if(t===void 0)throw Error(S(407));t=t()}else{if(t=e(),nn===null)throw Error(S(349));De&30||Xp(a,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,Gr(Gp.bind(null,a,l,n),[n]),a.flags|=2048,Jt(9,Wp.bind(null,a,l,t,e),void 0,null),t},useId:function(){var n=En(),e=nn.identifierPrefix;if(q){var t=Hn,a=Gn;t=(a&~(1<<32-Dn(a)-1)).toString(32)+t,e=":"+e+"R"+t,t=Zt++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Xf++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Uf={readContext:Cn,useCallback:Jp,useContext:Cn,useEffect:Yo,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:$p,useMemo:nu,useReducer:nl,useRef:Up,useState:function(){return nl(Qt)},useDebugValue:qo,useDeferredValue:function(n){var e=wn();return eu(e,V.memoizedState,n)},useTransition:function(){var n=nl(Qt)[0],e=wn().memoizedState;return[n,e]},useMutableSource:jp,useSyncExternalStore:Bp,useId:tu,unstable_isNewReconciler:!1},Vf={readContext:Cn,useCallback:Jp,useContext:Cn,useEffect:Yo,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:$p,useMemo:nu,useReducer:el,useRef:Up,useState:function(){return el(Qt)},useDebugValue:qo,useDeferredValue:function(n){var e=wn();return V===null?e.memoizedState=n:eu(e,V.memoizedState,n)},useTransition:function(){var n=el(Qt)[0],e=wn().memoizedState;return[n,e]},useMutableSource:jp,useSyncExternalStore:Bp,useId:tu,unstable_isNewReconciler:!1};function kn(n,e){if(n&&n.defaultProps){e=X({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function El(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:X({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Si={isMounted:function(n){return(n=n._reactInternals)?Ee(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var a=un(),i=me(n),l=Kn(a,i);l.payload=e,t!=null&&(l.callback=t),e=fe(n,l,i),e!==null&&(Mn(e,n,i,a),za(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=un(),i=me(n),l=Kn(a,i);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=fe(n,l,i),e!==null&&(Mn(e,n,i,a),za(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=un(),a=me(n),i=Kn(t,a);i.tag=2,e!=null&&(i.callback=e),e=fe(n,i,a),e!==null&&(Mn(e,n,a,t),za(e,n,a))}};function Hr(n,e,t,a,i,l,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,o):e.prototype&&e.prototype.isPureReactComponent?!Gt(t,a)||!Gt(i,l):!0}function ou(n,e,t){var a=!1,i=xe,l=e.contextType;return typeof l=="object"&&l!==null?l=Cn(l):(i=gn(e)?Re:sn.current,a=e.contextTypes,l=(a=a!=null)?ot(n,i):xe),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Si,n.stateNode=e,e._reactInternals=n,a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=l),e}function Kr(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&Si.enqueueReplaceState(e,e.state,null)}function Yl(n,e,t,a){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},Ro(n);var l=e.contextType;typeof l=="object"&&l!==null?i.context=Cn(l):(l=gn(e)?Re:sn.current,i.context=ot(n,l)),i.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(El(n,e,l,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Si.enqueueReplaceState(i,i.state,null),ai(n,t,i,a),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function ut(n,e){try{var t="",a=e;do t+=vc(a),a=a.return;while(a);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:i,digest:null}}function tl(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ql(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $f=typeof WeakMap=="function"?WeakMap:Map;function ru(n,e,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var a=e.value;return t.callback=function(){si||(si=!0,$l=a),ql(n,e)},t}function su(n,e,t){t=Kn(-1,t),t.tag=3;var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=e.value;t.payload=function(){return a(i)},t.callback=function(){ql(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ql(n,e),typeof a!="function"&&(de===null?de=new Set([this]):de.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ur(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new $f;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(t)||(i.add(t),n=ud.bind(null,n,e,t),e.then(n,n))}function Vr(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function $r(n,e,t,a,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Kn(-1,1),e.tag=2,fe(t,e,1))),t.lanes|=1),n)}var Zf=Qn.ReactCurrentOwner,mn=!1;function pn(n,e,t,a){e.child=n===null?_p(e,null,t,a):st(e,n.child,t,a)}function Zr(n,e,t,a,i){t=t.render;var l=e.ref;return at(e,i),a=_o(n,e,t,a,l,i),t=Eo(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Zn(n,e,i)):(q&&t&&Oo(e),e.flags|=1,pn(n,e,a,i),e.child)}function Qr(n,e,t,a,i){if(n===null){var l=t.type;return typeof l=="function"&&!Uo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,pu(n,e,l,a,i)):(n=Ya(t.type,null,a,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(o,a)&&n.ref===e.ref)return Zn(n,e,i)}return e.flags|=1,n=he(l,a),n.ref=e.ref,n.return=e,e.child=n}function pu(n,e,t,a,i){if(n!==null){var l=n.memoizedProps;if(Gt(l,a)&&n.ref===e.ref)if(mn=!1,e.pendingProps=a=l,(n.lanes&i)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Zn(n,e,i)}return jl(n,e,t,a,i)}function uu(n,e,t){var a=e.pendingProps,i=a.children,l=n!==null?n.memoizedState:null;if(a.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Qe,xn),xn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,_(Qe,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:t,_(Qe,xn),xn|=a}else l!==null?(a=l.baseLanes|t,e.memoizedState=null):a=t,_(Qe,xn),xn|=a;return pn(n,e,i,t),e.child}function cu(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function jl(n,e,t,a,i){var l=gn(t)?Re:sn.current;return l=ot(e,l),at(e,i),t=_o(n,e,t,a,l,i),a=Eo(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Zn(n,e,i)):(q&&a&&Oo(e),e.flags|=1,pn(n,e,t,i),e.child)}function Jr(n,e,t,a,i){if(gn(t)){var l=!0;Qa(e)}else l=!1;if(at(e,i),e.stateNode===null)Aa(n,e),ou(e,t,a),Yl(e,t,a,i),a=!0;else if(n===null){var o=e.stateNode,r=e.memoizedProps;o.props=r;var s=o.context,p=t.contextType;typeof p=="object"&&p!==null?p=Cn(p):(p=gn(t)?Re:sn.current,p=ot(e,p));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==a||s!==p)&&Kr(e,o,a,p),te=!1;var h=e.memoizedState;o.state=h,ai(e,a,o,i),s=e.memoizedState,r!==a||h!==s||hn.current||te?(typeof d=="function"&&(El(e,t,d,a),s=e.memoizedState),(r=te||Hr(e,t,r,a,h,s,p))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=s),o.props=a,o.state=s,o.context=p,a=r):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{o=e.stateNode,Yp(n,e),r=e.memoizedProps,p=e.type===e.elementType?r:kn(e.type,r),o.props=p,f=e.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Cn(s):(s=gn(t)?Re:sn.current,s=ot(e,s));var x=t.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==f||h!==s)&&Kr(e,o,a,s),te=!1,h=e.memoizedState,o.state=h,ai(e,a,o,i);var b=e.memoizedState;r!==f||h!==b||hn.current||te?(typeof x=="function"&&(El(e,t,x,a),b=e.memoizedState),(p=te||Hr(e,t,p,a,h,b,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,b,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,b,s)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=b),o.props=a,o.state=b,o.context=s,a=p):(typeof o.componentDidUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),a=!1)}return Bl(n,e,t,a,l,i)}function Bl(n,e,t,a,i,l){cu(n,e);var o=(e.flags&128)!==0;if(!a&&!o)return i&&Er(e,t,!1),Zn(n,e,l);a=e.stateNode,Zf.current=e;var r=o&&typeof t.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,n!==null&&o?(e.child=st(e,n.child,null,l),e.child=st(e,null,r,l)):pn(n,e,r,l),e.memoizedState=a.state,i&&Er(e,t,!0),e.child}function fu(n){var e=n.stateNode;e.pendingContext?_r(n,e.pendingContext,e.pendingContext!==e.context):e.context&&_r(n,e.context,!1),zo(n,e.containerInfo)}function ns(n,e,t,a,i){return rt(),Po(i),e.flags|=256,pn(n,e,t,a),e.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Wl(n){return{baseLanes:n,cachePool:null,transitions:null}}function du(n,e,t){var a=e.pendingProps,i=j.current,l=!1,o=(e.flags&128)!==0,r;if((r=o)||(r=n!==null&&n.memoizedState===null?!1:(i&2)!==0),r?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),_(j,i&1),n===null)return Al(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=a.children,n=a.fallback,l?(a=e.mode,l=e.child,o={mode:"hidden",children:o},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Li(o,a,0,null),n=ke(n,a,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=Wl(t),e.memoizedState=Xl,n):jo(e,o));if(i=n.memoizedState,i!==null&&(r=i.dehydrated,r!==null))return Qf(n,e,o,a,r,i,t);if(l){l=a.fallback,o=e.mode,i=n.child,r=i.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&e.child!==i?(a=e.child,a.childLanes=0,a.pendingProps=s,e.deletions=null):(a=he(i,s),a.subtreeFlags=i.subtreeFlags&14680064),r!==null?l=he(r,l):(l=ke(l,o,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,o=n.child.memoizedState,o=o===null?Wl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=n.childLanes&~t,e.memoizedState=Xl,a}return l=n.child,n=l.sibling,a=he(l,{mode:"visible",children:a.children}),!(e.mode&1)&&(a.lanes=t),a.return=e,a.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=a,e.memoizedState=null,a}function jo(n,e){return e=Li({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function La(n,e,t,a){return a!==null&&Po(a),st(e,n.child,null,t),n=jo(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Qf(n,e,t,a,i,l,o){if(t)return e.flags&256?(e.flags&=-257,a=tl(Error(S(422))),La(n,e,o,a)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=a.fallback,i=e.mode,a=Li({mode:"visible",children:a.children},i,0,null),l=ke(l,i,o,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,e.mode&1&&st(e,n.child,null,o),e.child.memoizedState=Wl(o),e.memoizedState=Xl,l);if(!(e.mode&1))return La(n,e,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var r=a.dgst;return a=r,l=Error(S(419)),a=tl(l,a,void 0),La(n,e,o,a)}if(r=(o&n.childLanes)!==0,mn||r){if(a=nn,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,$n(n,i),Mn(a,n,i,-1))}return Ko(),a=tl(Error(S(421))),La(n,e,o,a)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=cd.bind(null,n),i._reactRetry=e,null):(n=l.treeContext,bn=ce(i.nextSibling),Tn=e,q=!0,zn=null,n!==null&&(Ln[On++]=Gn,Ln[On++]=Hn,Ln[On++]=ze,Gn=n.id,Hn=n.overflow,ze=e),e=jo(e,a.children),e.flags|=4096,e)}function es(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),_l(n.return,e,t)}function al(n,e,t,a,i){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=i)}function mu(n,e,t){var a=e.pendingProps,i=a.revealOrder,l=a.tail;if(pn(n,e,a.children,t),a=j.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&es(n,t,e);else if(n.tag===19)es(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}if(_(j,a),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&ii(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),al(e,!1,i,t,l);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&ii(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}al(e,!0,t,null,l);break;case"together":al(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Me|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(S(153));if(e.child!==null){for(n=e.child,t=he(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=he(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Jf(n,e,t){switch(e.tag){case 3:fu(e),rt();break;case 5:qp(e);break;case 1:gn(e.type)&&Qa(e);break;case 4:zo(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,i=e.memoizedProps.value;_(ei,a._currentValue),a._currentValue=i;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(_(j,j.current&1),e.flags|=128,null):t&e.child.childLanes?du(n,e,t):(_(j,j.current&1),n=Zn(n,e,t),n!==null?n.sibling:null);_(j,j.current&1);break;case 19:if(a=(t&e.childLanes)!==0,n.flags&128){if(a)return mu(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(j,j.current),a)break;return null;case 22:case 23:return e.lanes=0,uu(n,e,t)}return Zn(n,e,t)}var hu,Gl,gu,yu;hu=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Gl=function(){};gu=function(n,e,t,a){var i=n.memoizedProps;if(i!==a){n=e.stateNode,we(jn.current);var l=null;switch(t){case"input":i=dl(n,i),a=dl(n,a),l=[];break;case"select":i=X({},i,{value:void 0}),a=X({},a,{value:void 0}),l=[];break;case"textarea":i=gl(n,i),a=gl(n,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(n.onclick=$a)}xl(t,a);var o;t=null;for(p in i)if(!a.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var r=i[p];for(o in r)r.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Et.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in a){var s=a[p];if(r=i!=null?i[p]:void 0,a.hasOwnProperty(p)&&s!==r&&(s!=null||r!=null))if(p==="style")if(r){for(o in r)!r.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&r[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(p,t)),t=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,r=r?r.__html:void 0,s!=null&&r!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Et.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&E("scroll",n),l||r===s||(l=[])):(l=l||[]).push(p,s))}t&&(l=l||[]).push("style",t);var p=l;(e.updateQueue=p)&&(e.flags|=4)}};yu=function(n,e,t,a){t!==a&&(e.flags|=4)};function It(n,e){if(!q)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function on(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function nd(n,e,t){var a=e.pendingProps;switch(No(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return gn(e.type)&&Za(),on(e),null;case 3:return a=e.stateNode,pt(),Y(hn),Y(sn),Mo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(va(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Jl(zn),zn=null))),Gl(n,e),on(e),null;case 5:Do(e);var i=we($t.current);if(t=e.type,n!==null&&e.stateNode!=null)gu(n,e,t,a,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(S(166));return on(e),null}if(n=we(jn.current),va(e)){a=e.stateNode,t=e.type;var l=e.memoizedProps;switch(a[Yn]=e,a[Ut]=l,n=(e.mode&1)!==0,t){case"dialog":E("cancel",a),E("close",a);break;case"iframe":case"object":case"embed":E("load",a);break;case"video":case"audio":for(i=0;i<Ct.length;i++)E(Ct[i],a);break;case"source":E("error",a);break;case"img":case"image":case"link":E("error",a),E("load",a);break;case"details":E("toggle",a);break;case"input":ur(a,l),E("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},E("invalid",a);break;case"textarea":fr(a,l),E("invalid",a)}xl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var r=l[o];o==="children"?typeof r=="string"?a.textContent!==r&&(l.suppressHydrationWarning!==!0&&Sa(a.textContent,r,n),i=["children",r]):typeof r=="number"&&a.textContent!==""+r&&(l.suppressHydrationWarning!==!0&&Sa(a.textContent,r,n),i=["children",""+r]):Et.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&E("scroll",a)}switch(t){case"input":da(a),cr(a,l,!0);break;case"textarea":da(a),dr(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=$a)}a=i,e.updateQueue=a,a!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gs(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof a.is=="string"?n=o.createElement(t,{is:a.is}):(n=o.createElement(t),t==="select"&&(o=n,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):n=o.createElementNS(n,t),n[Yn]=e,n[Ut]=a,hu(n,e,!1,!1),e.stateNode=n;n:{switch(o=bl(t,a),t){case"dialog":E("cancel",n),E("close",n),i=a;break;case"iframe":case"object":case"embed":E("load",n),i=a;break;case"video":case"audio":for(i=0;i<Ct.length;i++)E(Ct[i],n);i=a;break;case"source":E("error",n),i=a;break;case"img":case"image":case"link":E("error",n),E("load",n),i=a;break;case"details":E("toggle",n),i=a;break;case"input":ur(n,a),i=dl(n,a),E("invalid",n);break;case"option":i=a;break;case"select":n._wrapperState={wasMultiple:!!a.multiple},i=X({},a,{value:void 0}),E("invalid",n);break;case"textarea":fr(n,a),i=gl(n,a),E("invalid",n);break;default:i=a}xl(t,i),r=i;for(l in r)if(r.hasOwnProperty(l)){var s=r[l];l==="style"?Us(n,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hs(n,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Yt(n,s):typeof s=="number"&&Yt(n,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Et.hasOwnProperty(l)?s!=null&&l==="onScroll"&&E("scroll",n):s!=null&&uo(n,l,s,o))}switch(t){case"input":da(n),cr(n,a,!1);break;case"textarea":da(n),dr(n);break;case"option":a.value!=null&&n.setAttribute("value",""+ye(a.value));break;case"select":n.multiple=!!a.multiple,l=a.value,l!=null?Je(n,!!a.multiple,l,!1):a.defaultValue!=null&&Je(n,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=$a)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(n&&e.stateNode!=null)yu(n,e,n.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(S(166));if(t=we($t.current),we(jn.current),va(e)){if(a=e.stateNode,t=e.memoizedProps,a[Yn]=e,(l=a.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:Sa(a.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sa(a.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Yn]=e,e.stateNode=a}return on(e),null;case 13:if(Y(j),a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(q&&bn!==null&&e.mode&1&&!(e.flags&128))Mp(),rt(),e.flags|=98560,l=!1;else if(l=va(e),a!==null&&a.dehydrated!==null){if(n===null){if(!l)throw Error(S(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Yn]=e}else rt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),l=!1}else zn!==null&&(Jl(zn),zn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(a=a!==null,a!==(n!==null&&n.memoizedState!==null)&&a&&(e.child.flags|=8192,e.mode&1&&(n===null||j.current&1?$===0&&($=3):Ko())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return pt(),Gl(n,e),n===null&&Ht(e.stateNode.containerInfo),on(e),null;case 10:return Fo(e.type._context),on(e),null;case 17:return gn(e.type)&&Za(),on(e),null;case 19:if(Y(j),l=e.memoizedState,l===null)return on(e),null;if(a=(e.flags&128)!==0,o=l.rendering,o===null)if(a)It(l,!1);else{if($!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ii(n),o!==null){for(e.flags|=128,It(l,!1),a=o.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=t,t=e.child;t!==null;)l=t,n=a,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,n=o.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return _(j,j.current&1|2),e.child}n=n.sibling}l.tail!==null&&H()>ct&&(e.flags|=128,a=!0,It(l,!1),e.lanes=4194304)}else{if(!a)if(n=ii(o),n!==null){if(e.flags|=128,a=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),It(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!q)return on(e),null}else 2*H()-l.renderingStartTime>ct&&t!==1073741824&&(e.flags|=128,a=!0,It(l,!1),e.lanes=4194304);l.isBackwards?(o.sibling=e.child,e.child=o):(t=l.last,t!==null?t.sibling=o:e.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=H(),e.sibling=null,t=j.current,_(j,a?t&1|2:t&1),e):(on(e),null);case 22:case 23:return Ho(),a=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==a&&(e.flags|=8192),a&&e.mode&1?xn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function ed(n,e){switch(No(e),e.tag){case 1:return gn(e.type)&&Za(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return pt(),Y(hn),Y(sn),Mo(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Do(e),null;case 13:if(Y(j),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(S(340));rt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Y(j),null;case 4:return pt(),null;case 10:return Fo(e.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Oa=!1,rn=!1,td=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ze(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){W(n,e,a)}else t.current=null}function Hl(n,e,t){try{t()}catch(a){W(n,e,a)}}var ts=!1;function ad(n,e){if(wl=Ka,n=vp(),Lo(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var o=0,r=-1,s=-1,p=0,d=0,f=n,h=null;e:for(;;){for(var x;f!==t||i!==0&&f.nodeType!==3||(r=o+i),f!==l||a!==0&&f.nodeType!==3||(s=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===n)break e;if(h===t&&++p===i&&(r=o),h===l&&++d===a&&(s=o),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}t=r===-1||s===-1?null:{start:r,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fl={focusedElem:n,selectionRange:t},Ka=!1,N=e;N!==null;)if(e=N,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,N=n;else for(;N!==null;){e=N;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var T=b.memoizedProps,L=b.memoizedState,c=e.stateNode,u=c.getSnapshotBeforeUpdate(e.elementType===e.type?T:kn(e.type,T),L);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){W(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}return b=ts,ts=!1,b}function Mt(n,e,t){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&n)===n){var l=i.destroy;i.destroy=void 0,l!==void 0&&Hl(e,t,l)}i=i.next}while(i!==a)}}function vi(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var a=t.create;t.destroy=a()}t=t.next}while(t!==e)}}function Kl(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function xu(n){var e=n.alternate;e!==null&&(n.alternate=null,xu(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Yn],delete e[Ut],delete e[zl],delete e[Yf],delete e[qf])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bu(n){return n.tag===5||n.tag===3||n.tag===4}function as(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||bu(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ul(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=$a));else if(a!==4&&(n=n.child,n!==null))for(Ul(n,e,t),n=n.sibling;n!==null;)Ul(n,e,t),n=n.sibling}function Vl(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(n=n.child,n!==null))for(Vl(n,e,t),n=n.sibling;n!==null;)Vl(n,e,t),n=n.sibling}var en=null,Rn=!1;function ne(n,e,t){for(t=t.child;t!==null;)Tu(n,e,t),t=t.sibling}function Tu(n,e,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(mi,t)}catch{}switch(t.tag){case 5:rn||Ze(t,e);case 6:var a=en,i=Rn;en=null,ne(n,e,t),en=a,Rn=i,en!==null&&(Rn?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(Rn?(n=en,t=t.stateNode,n.nodeType===8?$i(n.parentNode,t):n.nodeType===1&&$i(n,t),Xt(n)):$i(en,t.stateNode));break;case 4:a=en,i=Rn,en=t.stateNode.containerInfo,Rn=!0,ne(n,e,t),en=a,Rn=i;break;case 0:case 11:case 14:case 15:if(!rn&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Hl(t,e,o),i=i.next}while(i!==a)}ne(n,e,t);break;case 1:if(!rn&&(Ze(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(r){W(t,e,r)}ne(n,e,t);break;case 21:ne(n,e,t);break;case 22:t.mode&1?(rn=(a=rn)||t.memoizedState!==null,ne(n,e,t),rn=a):ne(n,e,t);break;default:ne(n,e,t)}}function is(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new td),e.forEach(function(a){var i=fd.bind(null,n,a);t.has(a)||(t.add(a),a.then(i,i))})}}function Fn(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var l=n,o=e,r=o;n:for(;r!==null;){switch(r.tag){case 5:en=r.stateNode,Rn=!1;break n;case 3:en=r.stateNode.containerInfo,Rn=!0;break n;case 4:en=r.stateNode.containerInfo,Rn=!0;break n}r=r.return}if(en===null)throw Error(S(160));Tu(l,o,i),en=null,Rn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){W(i,e,p)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Su(e,n),e=e.sibling}function Su(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(e,n),_n(n),a&4){try{Mt(3,n,n.return),vi(3,n)}catch(T){W(n,n.return,T)}try{Mt(5,n,n.return)}catch(T){W(n,n.return,T)}}break;case 1:Fn(e,n),_n(n),a&512&&t!==null&&Ze(t,t.return);break;case 5:if(Fn(e,n),_n(n),a&512&&t!==null&&Ze(t,t.return),n.flags&32){var i=n.stateNode;try{Yt(i,"")}catch(T){W(n,n.return,T)}}if(a&4&&(i=n.stateNode,i!=null)){var l=n.memoizedProps,o=t!==null?t.memoizedProps:l,r=n.type,s=n.updateQueue;if(n.updateQueue=null,s!==null)try{r==="input"&&l.type==="radio"&&l.name!=null&&Xs(i,l),bl(r,o);var p=bl(r,l);for(o=0;o<s.length;o+=2){var d=s[o],f=s[o+1];d==="style"?Us(i,f):d==="dangerouslySetInnerHTML"?Hs(i,f):d==="children"?Yt(i,f):uo(i,d,f,p)}switch(r){case"input":ml(i,l);break;case"textarea":Ws(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Je(i,!!l.multiple,x,!1):h!==!!l.multiple&&(l.defaultValue!=null?Je(i,!!l.multiple,l.defaultValue,!0):Je(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ut]=l}catch(T){W(n,n.return,T)}}break;case 6:if(Fn(e,n),_n(n),a&4){if(n.stateNode===null)throw Error(S(162));i=n.stateNode,l=n.memoizedProps;try{i.nodeValue=l}catch(T){W(n,n.return,T)}}break;case 3:if(Fn(e,n),_n(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Xt(e.containerInfo)}catch(T){W(n,n.return,T)}break;case 4:Fn(e,n),_n(n);break;case 13:Fn(e,n),_n(n),i=n.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Wo=H())),a&4&&is(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(rn=(p=rn)||d,Fn(e,n),rn=p):Fn(e,n),_n(n),a&8192){if(p=n.memoizedState!==null,(n.stateNode.isHidden=p)&&!d&&n.mode&1)for(N=n,d=n.child;d!==null;){for(f=N=d;N!==null;){switch(h=N,x=h.child,h.tag){case 0:case 11:case 14:case 15:Mt(4,h,h.return);break;case 1:Ze(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){a=h,t=h.return;try{e=a,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(T){W(a,t,T)}}break;case 5:Ze(h,h.return);break;case 22:if(h.memoizedState!==null){os(f);continue}}x!==null?(x.return=h,N=x):os(f)}d=d.sibling}n:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,p?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(r=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,r.style.display=Ks("display",o))}catch(T){W(n,n.return,T)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=p?"":f.memoizedProps}catch(T){W(n,n.return,T)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break n;for(;f.sibling===null;){if(f.return===null||f.return===n)break n;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,n),_n(n),a&4&&is(n);break;case 21:break;default:Fn(e,n),_n(n)}}function _n(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(bu(t)){var a=t;break n}t=t.return}throw Error(S(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Yt(i,""),a.flags&=-33);var l=as(n);Vl(n,l,i);break;case 3:case 4:var o=a.stateNode.containerInfo,r=as(n);Ul(n,r,o);break;default:throw Error(S(161))}}catch(s){W(n,n.return,s)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function id(n,e,t){N=n,vu(n)}function vu(n,e,t){for(var a=(n.mode&1)!==0;N!==null;){var i=N,l=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Oa;if(!o){var r=i.alternate,s=r!==null&&r.memoizedState!==null||rn;r=Oa;var p=rn;if(Oa=o,(rn=s)&&!p)for(N=i;N!==null;)o=N,s=o.child,o.tag===22&&o.memoizedState!==null?rs(i):s!==null?(s.return=o,N=s):rs(i);for(;l!==null;)N=l,vu(l),l=l.sibling;N=i,Oa=r,rn=p}ls(n)}else i.subtreeFlags&8772&&l!==null?(l.return=i,N=l):ls(n)}}function ls(n){for(;N!==null;){var e=N;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||vi(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!rn)if(t===null)a.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:kn(e.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&Xr(e,l,a);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Xr(e,o,t)}break;case 5:var r=e.stateNode;if(t===null&&e.flags&4){t=r;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var p=e.alternate;if(p!==null){var d=p.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xt(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}rn||e.flags&512&&Kl(e)}catch(h){W(e,e.return,h)}}if(e===n){N=null;break}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}}function os(n){for(;N!==null;){var e=N;if(e===n){N=null;break}var t=e.sibling;if(t!==null){t.return=e.return,N=t;break}N=e.return}}function rs(n){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{vi(4,e)}catch(s){W(e,t,s)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var i=e.return;try{a.componentDidMount()}catch(s){W(e,i,s)}}var l=e.return;try{Kl(e)}catch(s){W(e,l,s)}break;case 5:var o=e.return;try{Kl(e)}catch(s){W(e,o,s)}}}catch(s){W(e,e.return,s)}if(e===n){N=null;break}var r=e.sibling;if(r!==null){r.return=e.return,N=r;break}N=e.return}}var ld=Math.ceil,ri=Qn.ReactCurrentDispatcher,Bo=Qn.ReactCurrentOwner,Pn=Qn.ReactCurrentBatchConfig,D=0,nn=null,U=null,tn=0,xn=0,Qe=Te(0),$=0,na=null,Me=0,Ii=0,Xo=0,At=null,dn=null,Wo=0,ct=1/0,Xn=null,si=!1,$l=null,de=null,Na=!1,oe=null,pi=0,_t=0,Zl=null,_a=-1,Ea=0;function un(){return D&6?H():_a!==-1?_a:_a=H()}function me(n){return n.mode&1?D&2&&tn!==0?tn&-tn:Bf.transition!==null?(Ea===0&&(Ea=op()),Ea):(n=M,n!==0||(n=window.event,n=n===void 0?16:dp(n.type)),n):1}function Mn(n,e,t,a){if(50<_t)throw _t=0,Zl=null,Error(S(185));ia(n,t,a),(!(D&2)||n!==nn)&&(n===nn&&(!(D&2)&&(Ii|=t),$===4&&ie(n,tn)),yn(n,a),t===1&&D===0&&!(e.mode&1)&&(ct=H()+500,bi&&Se()))}function yn(n,e){var t=n.callbackNode;jc(n,e);var a=Ha(n,n===nn?tn:0);if(a===0)t!==null&&gr(t),n.callbackNode=null,n.callbackPriority=0;else if(e=a&-a,n.callbackPriority!==e){if(t!=null&&gr(t),e===1)n.tag===0?jf(ss.bind(null,n)):Rp(ss.bind(null,n)),_f(function(){!(D&6)&&Se()}),t=null;else{switch(rp(a)){case 1:t=go;break;case 4:t=ip;break;case 16:t=Ga;break;case 536870912:t=lp;break;default:t=Ga}t=Fu(t,Iu.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Iu(n,e){if(_a=-1,Ea=0,D&6)throw Error(S(327));var t=n.callbackNode;if(it()&&n.callbackNode!==t)return null;var a=Ha(n,n===nn?tn:0);if(a===0)return null;if(a&30||a&n.expiredLanes||e)e=ui(n,a);else{e=a;var i=D;D|=2;var l=Ou();(nn!==n||tn!==e)&&(Xn=null,ct=H()+500,Fe(n,e));do try{sd();break}catch(r){Lu(n,r)}while(!0);wo(),ri.current=l,D=i,U!==null?e=0:(nn=null,tn=0,e=$)}if(e!==0){if(e===2&&(i=Ll(n),i!==0&&(a=i,e=Ql(n,i))),e===1)throw t=na,Fe(n,0),ie(n,a),yn(n,H()),t;if(e===6)ie(n,a);else{if(i=n.current.alternate,!(a&30)&&!od(i)&&(e=ui(n,a),e===2&&(l=Ll(n),l!==0&&(a=l,e=Ql(n,l))),e===1))throw t=na,Fe(n,0),ie(n,a),yn(n,H()),t;switch(n.finishedWork=i,n.finishedLanes=a,e){case 0:case 1:throw Error(S(345));case 2:Ne(n,dn,Xn);break;case 3:if(ie(n,a),(a&130023424)===a&&(e=Wo+500-H(),10<e)){if(Ha(n,0)!==0)break;if(i=n.suspendedLanes,(i&a)!==a){un(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Rl(Ne.bind(null,n,dn,Xn),e);break}Ne(n,dn,Xn);break;case 4:if(ie(n,a),(a&4194240)===a)break;for(e=n.eventTimes,i=-1;0<a;){var o=31-Dn(a);l=1<<o,o=e[o],o>i&&(i=o),a&=~l}if(a=i,a=H()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ld(a/1960))-a,10<a){n.timeoutHandle=Rl(Ne.bind(null,n,dn,Xn),a);break}Ne(n,dn,Xn);break;case 5:Ne(n,dn,Xn);break;default:throw Error(S(329))}}}return yn(n,H()),n.callbackNode===t?Iu.bind(null,n):null}function Ql(n,e){var t=At;return n.current.memoizedState.isDehydrated&&(Fe(n,e).flags|=256),n=ui(n,e),n!==2&&(e=dn,dn=t,e!==null&&Jl(e)),n}function Jl(n){dn===null?dn=n:dn.push.apply(dn,n)}function od(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!An(l(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ie(n,e){for(e&=~Xo,e&=~Ii,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Dn(e),a=1<<t;n[t]=-1,e&=~a}}function ss(n){if(D&6)throw Error(S(327));it();var e=Ha(n,0);if(!(e&1))return yn(n,H()),null;var t=ui(n,e);if(n.tag!==0&&t===2){var a=Ll(n);a!==0&&(e=a,t=Ql(n,a))}if(t===1)throw t=na,Fe(n,0),ie(n,e),yn(n,H()),t;if(t===6)throw Error(S(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ne(n,dn,Xn),yn(n,H()),null}function Go(n,e){var t=D;D|=1;try{return n(e)}finally{D=t,D===0&&(ct=H()+500,bi&&Se())}}function Ae(n){oe!==null&&oe.tag===0&&!(D&6)&&it();var e=D;D|=1;var t=Pn.transition,a=M;try{if(Pn.transition=null,M=1,n)return n()}finally{M=a,Pn.transition=t,D=e,!(D&6)&&Se()}}function Ho(){xn=Qe.current,Y(Qe)}function Fe(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Af(t)),U!==null)for(t=U.return;t!==null;){var a=t;switch(No(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Za();break;case 3:pt(),Y(hn),Y(sn),Mo();break;case 5:Do(a);break;case 4:pt();break;case 13:Y(j);break;case 19:Y(j);break;case 10:Fo(a.type._context);break;case 22:case 23:Ho()}t=t.return}if(nn=n,U=n=he(n.current,null),tn=xn=e,$=0,na=null,Xo=Ii=Me=0,dn=At=null,Ce!==null){for(e=0;e<Ce.length;e++)if(t=Ce[e],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,a.next=o}t.pending=a}Ce=null}return n}function Lu(n,e){do{var t=U;try{if(wo(),Da.current=oi,li){for(var a=B.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}li=!1}if(De=0,J=V=B=null,Dt=!1,Zt=0,Bo.current=null,t===null||t.return===null){$=1,na=e,U=null;break}n:{var l=n,o=t.return,r=t,s=e;if(e=tn,r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,d=r,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Vr(o);if(x!==null){x.flags&=-257,$r(x,o,r,l,e),x.mode&1&&Ur(l,p,e),e=x,s=p;var b=e.updateQueue;if(b===null){var T=new Set;T.add(s),e.updateQueue=T}else b.add(s);break n}else{if(!(e&1)){Ur(l,p,e),Ko();break n}s=Error(S(426))}}else if(q&&r.mode&1){var L=Vr(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),$r(L,o,r,l,e),Po(ut(s,r));break n}}l=s=ut(s,r),$!==4&&($=2),At===null?At=[l]:At.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var c=ru(l,s,e);Br(l,c);break n;case 1:r=s;var u=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(de===null||!de.has(m)))){l.flags|=65536,e&=-e,l.lanes|=e;var y=su(l,r,e);Br(l,y);break n}}l=l.return}while(l!==null)}Pu(t)}catch(g){e=g,U===t&&t!==null&&(U=t=t.return);continue}break}while(!0)}function Ou(){var n=ri.current;return ri.current=oi,n===null?oi:n}function Ko(){($===0||$===3||$===2)&&($=4),nn===null||!(Me&268435455)&&!(Ii&268435455)||ie(nn,tn)}function ui(n,e){var t=D;D|=2;var a=Ou();(nn!==n||tn!==e)&&(Xn=null,Fe(n,e));do try{rd();break}catch(i){Lu(n,i)}while(!0);if(wo(),D=t,ri.current=a,U!==null)throw Error(S(261));return nn=null,tn=0,$}function rd(){for(;U!==null;)Nu(U)}function sd(){for(;U!==null&&!Rc();)Nu(U)}function Nu(n){var e=wu(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?Pu(n):U=e,Bo.current=null}function Pu(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ed(t,e),t!==null){t.flags&=32767,U=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$=6,U=null;return}}else if(t=nd(t,e,xn),t!==null){U=t;return}if(e=e.sibling,e!==null){U=e;return}U=e=n}while(e!==null);$===0&&($=5)}function Ne(n,e,t){var a=M,i=Pn.transition;try{Pn.transition=null,M=1,pd(n,e,t,a)}finally{Pn.transition=i,M=a}return null}function pd(n,e,t,a){do it();while(oe!==null);if(D&6)throw Error(S(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(S(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(Bc(n,l),n===nn&&(U=nn=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Na||(Na=!0,Fu(Ga,function(){return it(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Pn.transition,Pn.transition=null;var o=M;M=1;var r=D;D|=4,Bo.current=null,ad(n,t),Su(t,n),wf(Fl),Ka=!!wl,Fl=wl=null,n.current=t,id(t),zc(),D=r,M=o,Pn.transition=l}else n.current=t;if(Na&&(Na=!1,oe=n,pi=i),l=n.pendingLanes,l===0&&(de=null),Ac(t.stateNode),yn(n,H()),e!==null)for(a=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,n=$l,$l=null,n;return pi&1&&n.tag!==0&&it(),l=n.pendingLanes,l&1?n===Zl?_t++:(_t=0,Zl=n):_t=0,Se(),null}function it(){if(oe!==null){var n=rp(pi),e=Pn.transition,t=M;try{if(Pn.transition=null,M=16>n?16:n,oe===null)var a=!1;else{if(n=oe,oe=null,pi=0,D&6)throw Error(S(331));var i=D;for(D|=4,N=n.current;N!==null;){var l=N,o=l.child;if(N.flags&16){var r=l.deletions;if(r!==null){for(var s=0;s<r.length;s++){var p=r[s];for(N=p;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Mt(8,d,l)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var h=d.sibling,x=d.return;if(xu(d),d===p){N=null;break}if(h!==null){h.return=x,N=h;break}N=x}}}var b=l.alternate;if(b!==null){var T=b.child;if(T!==null){b.child=null;do{var L=T.sibling;T.sibling=null,T=L}while(T!==null)}}N=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,N=o;else n:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Mt(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,N=c;break n}N=l.return}}var u=n.current;for(N=u;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else n:for(o=u;N!==null;){if(r=N,r.flags&2048)try{switch(r.tag){case 0:case 11:case 15:vi(9,r)}}catch(g){W(r,r.return,g)}if(r===o){N=null;break n}var y=r.sibling;if(y!==null){y.return=r.return,N=y;break n}N=r.return}}if(D=i,Se(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(mi,n)}catch{}a=!0}return a}finally{M=t,Pn.transition=e}}return!1}function ps(n,e,t){e=ut(t,e),e=ru(n,e,1),n=fe(n,e,1),e=un(),n!==null&&(ia(n,1,e),yn(n,e))}function W(n,e,t){if(n.tag===3)ps(n,n,t);else for(;e!==null;){if(e.tag===3){ps(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(de===null||!de.has(a))){n=ut(t,n),n=su(e,n,1),e=fe(e,n,1),n=un(),e!==null&&(ia(e,1,n),yn(e,n));break}}e=e.return}}function ud(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),e=un(),n.pingedLanes|=n.suspendedLanes&t,nn===n&&(tn&t)===t&&($===4||$===3&&(tn&130023424)===tn&&500>H()-Wo?Fe(n,0):Xo|=t),yn(n,e)}function Cu(n,e){e===0&&(n.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var t=un();n=$n(n,e),n!==null&&(ia(n,e,t),yn(n,t))}function cd(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Cu(n,t)}function fd(n,e){var t=0;switch(n.tag){case 13:var a=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=n.stateNode;break;default:throw Error(S(314))}a!==null&&a.delete(e),Cu(n,t)}var wu;wu=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||hn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,Jf(n,e,t);mn=!!(n.flags&131072)}else mn=!1,q&&e.flags&1048576&&zp(e,ni,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;Aa(n,e),n=e.pendingProps;var i=ot(e,sn.current);at(e,t),i=_o(null,e,a,n,i,t);var l=Eo();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(a)?(l=!0,Qa(e)):l=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ro(e),i.updater=Si,e.stateNode=i,i._reactInternals=e,Yl(e,a,n,t),e=Bl(null,e,a,!0,l,t)):(e.tag=0,q&&l&&Oo(e),pn(null,e,i,t),e=e.child),e;case 16:a=e.elementType;n:{switch(Aa(n,e),n=e.pendingProps,i=a._init,a=i(a._payload),e.type=a,i=e.tag=md(a),n=kn(a,n),i){case 0:e=jl(null,e,a,n,t);break n;case 1:e=Jr(null,e,a,n,t);break n;case 11:e=Zr(null,e,a,n,t);break n;case 14:e=Qr(null,e,a,kn(a.type,n),t);break n}throw Error(S(306,a,""))}return e;case 0:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:kn(a,i),jl(n,e,a,i,t);case 1:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:kn(a,i),Jr(n,e,a,i,t);case 3:n:{if(fu(e),n===null)throw Error(S(387));a=e.pendingProps,l=e.memoizedState,i=l.element,Yp(n,e),ai(e,a,null,t);var o=e.memoizedState;if(a=o.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){i=ut(Error(S(423)),e),e=ns(n,e,a,t,i);break n}else if(a!==i){i=ut(Error(S(424)),e),e=ns(n,e,a,t,i);break n}else for(bn=ce(e.stateNode.containerInfo.firstChild),Tn=e,q=!0,zn=null,t=_p(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rt(),a===i){e=Zn(n,e,t);break n}pn(n,e,a,t)}e=e.child}return e;case 5:return qp(e),n===null&&Al(e),a=e.type,i=e.pendingProps,l=n!==null?n.memoizedProps:null,o=i.children,kl(a,i)?o=null:l!==null&&kl(a,l)&&(e.flags|=32),cu(n,e),pn(n,e,o,t),e.child;case 6:return n===null&&Al(e),null;case 13:return du(n,e,t);case 4:return zo(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=st(e,null,a,t):pn(n,e,a,t),e.child;case 11:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:kn(a,i),Zr(n,e,a,i,t);case 7:return pn(n,e,e.pendingProps,t),e.child;case 8:return pn(n,e,e.pendingProps.children,t),e.child;case 12:return pn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(a=e.type._context,i=e.pendingProps,l=e.memoizedProps,o=i.value,_(ei,a._currentValue),a._currentValue=o,l!==null)if(An(l.value,o)){if(l.children===i.children&&!hn.current){e=Zn(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){o=l.child;for(var s=r.firstContext;s!==null;){if(s.context===a){if(l.tag===1){s=Kn(-1,t&-t),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var d=p.pending;d===null?s.next=s:(s.next=d.next,d.next=s),p.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),_l(l.return,t,e),r.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===e.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=t,r=o.alternate,r!==null&&(r.lanes|=t),_l(o,t,e),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}pn(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,a=e.pendingProps.children,at(e,t),i=Cn(i),a=a(i),e.flags|=1,pn(n,e,a,t),e.child;case 14:return a=e.type,i=kn(a,e.pendingProps),i=kn(a.type,i),Qr(n,e,a,i,t);case 15:return pu(n,e,e.type,e.pendingProps,t);case 17:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:kn(a,i),Aa(n,e),e.tag=1,gn(a)?(n=!0,Qa(e)):n=!1,at(e,t),ou(e,a,i),Yl(e,a,i,t),Bl(null,e,a,!0,n,t);case 19:return mu(n,e,t);case 22:return uu(n,e,t)}throw Error(S(156,e.tag))};function Fu(n,e){return ap(n,e)}function dd(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,e,t,a){return new dd(n,e,t,a)}function Uo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function md(n){if(typeof n=="function")return Uo(n)?1:0;if(n!=null){if(n=n.$$typeof,n===fo)return 11;if(n===mo)return 14}return 2}function he(n,e){var t=n.alternate;return t===null?(t=Nn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ya(n,e,t,a,i,l){var o=2;if(a=n,typeof n=="function")Uo(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case Be:return ke(t.children,i,l,e);case co:o=8,i|=8;break;case pl:return n=Nn(12,t,e,i|2),n.elementType=pl,n.lanes=l,n;case ul:return n=Nn(13,t,e,i),n.elementType=ul,n.lanes=l,n;case cl:return n=Nn(19,t,e,i),n.elementType=cl,n.lanes=l,n;case qs:return Li(t,i,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Es:o=10;break n;case Ys:o=9;break n;case fo:o=11;break n;case mo:o=14;break n;case ee:o=16,a=null;break n}throw Error(S(130,n==null?n:typeof n,""))}return e=Nn(o,t,e,i),e.elementType=n,e.type=a,e.lanes=l,e}function ke(n,e,t,a){return n=Nn(7,n,a,e),n.lanes=t,n}function Li(n,e,t,a){return n=Nn(22,n,a,e),n.elementType=qs,n.lanes=t,n.stateNode={isHidden:!1},n}function il(n,e,t){return n=Nn(6,n,null,e),n.lanes=t,n}function ll(n,e,t){return e=Nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function hd(n,e,t,a,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vo(n,e,t,a,i,l,o,r,s){return n=new hd(n,e,t,r,s),e===1?(e=1,l===!0&&(e|=8)):e=0,l=Nn(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(l),n}function gd(n,e,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:a==null?null:""+a,children:n,containerInfo:e,implementation:t}}function ku(n){if(!n)return xe;n=n._reactInternals;n:{if(Ee(n)!==n||n.tag!==1)throw Error(S(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(S(171))}if(n.tag===1){var t=n.type;if(gn(t))return kp(n,t,e)}return e}function Ru(n,e,t,a,i,l,o,r,s){return n=Vo(t,a,!0,n,i,l,o,r,s),n.context=ku(null),t=n.current,a=un(),i=me(t),l=Kn(a,i),l.callback=e??null,fe(t,l,i),n.current.lanes=i,ia(n,i,a),yn(n,a),n}function Oi(n,e,t,a){var i=e.current,l=un(),o=me(i);return t=ku(t),e.context===null?e.context=t:e.pendingContext=t,e=Kn(l,o),e.payload={element:n},a=a===void 0?null:a,a!==null&&(e.callback=a),n=fe(i,e,o),n!==null&&(Mn(n,i,o,l),za(n,i,o)),o}function ci(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function us(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function $o(n,e){us(n,e),(n=n.alternate)&&us(n,e)}function yd(){return null}var zu=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zo(n){this._internalRoot=n}Ni.prototype.render=Zo.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(S(409));Oi(n,e,null,null)};Ni.prototype.unmount=Zo.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ae(function(){Oi(null,n,null,null)}),e[Vn]=null}};function Ni(n){this._internalRoot=n}Ni.prototype.unstable_scheduleHydration=function(n){if(n){var e=up();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ae.length&&e!==0&&e<ae[t].priority;t++);ae.splice(t,0,n),t===0&&fp(n)}};function Qo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pi(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cs(){}function xd(n,e,t,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var p=ci(o);l.call(p)}}var o=Ru(e,a,n,0,null,!1,!1,"",cs);return n._reactRootContainer=o,n[Vn]=o.current,Ht(n.nodeType===8?n.parentNode:n),Ae(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof a=="function"){var r=a;a=function(){var p=ci(s);r.call(p)}}var s=Vo(n,0,!1,null,null,!1,!1,"",cs);return n._reactRootContainer=s,n[Vn]=s.current,Ht(n.nodeType===8?n.parentNode:n),Ae(function(){Oi(e,s,t,a)}),s}function Ci(n,e,t,a,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var r=i;i=function(){var s=ci(o);r.call(s)}}Oi(e,o,n,i)}else o=xd(t,e,n,i,a);return ci(o)}sp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Pt(e.pendingLanes);t!==0&&(yo(e,t|1),yn(e,H()),!(D&6)&&(ct=H()+500,Se()))}break;case 13:Ae(function(){var a=$n(n,1);if(a!==null){var i=un();Mn(a,n,1,i)}}),$o(n,1)}};xo=function(n){if(n.tag===13){var e=$n(n,134217728);if(e!==null){var t=un();Mn(e,n,134217728,t)}$o(n,134217728)}};pp=function(n){if(n.tag===13){var e=me(n),t=$n(n,e);if(t!==null){var a=un();Mn(t,n,e,a)}$o(n,e)}};up=function(){return M};cp=function(n,e){var t=M;try{return M=n,e()}finally{M=t}};Sl=function(n,e,t){switch(e){case"input":if(ml(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var i=xi(a);if(!i)throw Error(S(90));Bs(a),ml(a,i)}}}break;case"textarea":Ws(n,t);break;case"select":e=t.value,e!=null&&Je(n,!!t.multiple,e,!1)}};Zs=Go;Qs=Ae;var bd={usingClientEntryPoint:!1,Events:[oa,He,xi,Vs,$s,Go]},Lt={findFiberByHostInstance:Pe,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Td={bundleType:Lt.bundleType,version:Lt.version,rendererPackageName:Lt.rendererPackageName,rendererConfig:Lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ep(n),n===null?null:n.stateNode},findFiberByHostInstance:Lt.findFiberByHostInstance||yd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{mi=Pa.inject(Td),qn=Pa}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bd;vn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(e))throw Error(S(200));return gd(n,e,null,t)};vn.createRoot=function(n,e){if(!Qo(n))throw Error(S(299));var t=!1,a="",i=zu;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vo(n,1,!1,null,null,t,!1,a,i),n[Vn]=e.current,Ht(n.nodeType===8?n.parentNode:n),new Zo(e)};vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(S(188)):(n=Object.keys(n).join(","),Error(S(268,n)));return n=ep(e),n=n===null?null:n.stateNode,n};vn.flushSync=function(n){return Ae(n)};vn.hydrate=function(n,e,t){if(!Pi(e))throw Error(S(200));return Ci(null,n,e,!0,t)};vn.hydrateRoot=function(n,e,t){if(!Qo(n))throw Error(S(405));var a=t!=null&&t.hydratedSources||null,i=!1,l="",o=zu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Ru(e,null,n,1,t??null,i,!1,l,o),n[Vn]=e.current,Ht(n),a)for(n=0;n<a.length;n++)t=a[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new Ni(e)};vn.render=function(n,e,t){if(!Pi(e))throw Error(S(200));return Ci(null,n,e,!1,t)};vn.unmountComponentAtNode=function(n){if(!Pi(n))throw Error(S(40));return n._reactRootContainer?(Ae(function(){Ci(null,null,n,!1,function(){n._reactRootContainer=null,n[Vn]=null})}),!0):!1};vn.unstable_batchedUpdates=Go;vn.unstable_renderSubtreeIntoContainer=function(n,e,t,a){if(!Pi(t))throw Error(S(200));if(n==null||n._reactInternals===void 0)throw Error(S(38));return Ci(n,e,t,!1,a)};vn.version="18.3.1-next-f1338f8080-20240426";function Du(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Du)}catch(n){console.error(n)}}Du(),Ds.exports=vn;var Sd=Ds.exports,fs=Sd;rl.createRoot=fs.createRoot,rl.hydrateRoot=fs.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},ea.apply(this,arguments)}var re;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(re||(re={}));const ds="popstate";function vd(n){n===void 0&&(n={});function e(i,l){let{pathname:o="/",search:r="",hash:s=""}=Ye(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),no("",{pathname:o,search:r,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let o=i.document.querySelector("base"),r="";if(o&&o.getAttribute("href")){let s=i.location.href,p=s.indexOf("#");r=p===-1?s:s.slice(0,p)}return r+"#"+(typeof l=="string"?l:fi(l))}function a(i,l){wi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Ld(e,t,a,n)}function K(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function wi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Id(){return Math.random().toString(36).substr(2,8)}function ms(n,e){return{usr:n.state,key:n.key,idx:e}}function no(n,e,t,a){return t===void 0&&(t=null),ea({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ye(e):e,{state:t,key:e&&e.key||a||Id()})}function fi(n){let{pathname:e="/",search:t="",hash:a=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Ye(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let a=n.indexOf("?");a>=0&&(e.search=n.substr(a),n=n.substr(0,a)),n&&(e.pathname=n)}return e}function Ld(n,e,t,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:l=!1}=a,o=i.history,r=re.Pop,s=null,p=d();p==null&&(p=0,o.replaceState(ea({},o.state,{idx:p}),""));function d(){return(o.state||{idx:null}).idx}function f(){r=re.Pop;let L=d(),c=L==null?null:L-p;p=L,s&&s({action:r,location:T.location,delta:c})}function h(L,c){r=re.Push;let u=no(T.location,L,c);t&&t(u,L),p=d()+1;let m=ms(u,p),y=T.createHref(u);try{o.pushState(m,"",y)}catch(g){if(g instanceof DOMException&&g.name==="DataCloneError")throw g;i.location.assign(y)}l&&s&&s({action:r,location:T.location,delta:1})}function x(L,c){r=re.Replace;let u=no(T.location,L,c);t&&t(u,L),p=d();let m=ms(u,p),y=T.createHref(u);o.replaceState(m,"",y),l&&s&&s({action:r,location:T.location,delta:0})}function b(L){let c=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof L=="string"?L:fi(L);return u=u.replace(/ $/,"%20"),K(c,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,c)}let T={get action(){return r},get location(){return n(i,o)},listen(L){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(ds,f),s=L,()=>{i.removeEventListener(ds,f),s=null}},createHref(L){return e(i,L)},createURL:b,encodeLocation(L){let c=b(L);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:x,go(L){return o.go(L)}};return T}var hs;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(hs||(hs={}));function Od(n,e,t){return t===void 0&&(t="/"),Nd(n,e,t)}function Nd(n,e,t,a){let i=typeof e=="string"?Ye(e):e,l=Jo(i.pathname||"/",t);if(l==null)return null;let o=Mu(n);Pd(o);let r=null;for(let s=0;r==null&&s<o.length;++s){let p=Yd(l);r=Ad(o[s],p)}return r}function Mu(n,e,t,a){e===void 0&&(e=[]),t===void 0&&(t=[]),a===void 0&&(a="");let i=(l,o,r)=>{let s={relativePath:r===void 0?l.path||"":r,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let p=ge([a,s.relativePath]),d=t.concat(s);l.children&&l.children.length>0&&(K(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Mu(l.children,e,d,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Dd(p,l.index),routesMeta:d})};return n.forEach((l,o)=>{var r;if(l.path===""||!((r=l.path)!=null&&r.includes("?")))i(l,o);else for(let s of Au(l.path))i(l,o,s)}),e}function Au(n){let e=n.split("/");if(e.length===0)return[];let[t,...a]=e,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(a.length===0)return i?[l,""]:[l];let o=Au(a.join("/")),r=[];return r.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&r.push(...o),r.map(s=>n.startsWith("/")&&s===""?"/":s)}function Pd(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Md(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const Cd=/^:[\w-]+$/,wd=3,Fd=2,kd=1,Rd=10,zd=-2,gs=n=>n==="*";function Dd(n,e){let t=n.split("/"),a=t.length;return t.some(gs)&&(a+=zd),e&&(a+=Fd),t.filter(i=>!gs(i)).reduce((i,l)=>i+(Cd.test(l)?wd:l===""?kd:Rd),a)}function Md(n,e){return n.length===e.length&&n.slice(0,-1).every((a,i)=>a===e[i])?n[n.length-1]-e[e.length-1]:0}function Ad(n,e,t){let{routesMeta:a}=n,i={},l="/",o=[];for(let r=0;r<a.length;++r){let s=a[r],p=r===a.length-1,d=l==="/"?e:e.slice(l.length)||"/",f=_d({path:s.relativePath,caseSensitive:s.caseSensitive,end:p},d),h=s.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ge([l,f.pathname]),pathnameBase:Wd(ge([l,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(l=ge([l,f.pathnameBase]))}return o}function _d(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,a]=Ed(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),r=i.slice(1);return{params:a.reduce((p,d,f)=>{let{paramName:h,isOptional:x}=d;if(h==="*"){let T=r[f]||"";o=l.slice(0,l.length-T.length).replace(/(.)\/+$/,"$1")}const b=r[f];return x&&!b?p[h]=void 0:p[h]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:o,pattern:n}}function Ed(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),wi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let a=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,r,s)=>(a.push({paramName:r,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),a]}function Yd(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wi(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Jo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=n.charAt(t);return a&&a!=="/"?null:n.slice(t)||"/"}const qd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jd=n=>qd.test(n);function Bd(n,e){e===void 0&&(e="/");let{pathname:t,search:a="",hash:i=""}=typeof n=="string"?Ye(n):n,l;if(t)if(jd(t))l=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),wi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?l=ys(t.substring(1),"/"):l=ys(t,e)}else l=e;return{pathname:l,search:Gd(a),hash:Hd(i)}}function ys(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ol(n,e,t,a){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xd(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function nr(n,e){let t=Xd(n);return e?t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function er(n,e,t,a){a===void 0&&(a=!1);let i;typeof n=="string"?i=Ye(n):(i=ea({},n),K(!i.pathname||!i.pathname.includes("?"),ol("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),ol("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),ol("#","search","hash",i)));let l=n===""||i.pathname==="",o=l?"/":i.pathname,r;if(o==null)r=t;else{let f=e.length-1;if(!a&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}r=f>=0?e[f]:"/"}let s=Bd(i,r),p=o&&o!=="/"&&o.endsWith("/"),d=(l||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(p||d)&&(s.pathname+="/"),s}const ge=n=>n.join("/").replace(/\/\/+/g,"/"),Wd=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Gd=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Hd=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Kd(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const _u=["post","put","patch","delete"];new Set(_u);const Ud=["get",..._u];new Set(Ud);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},ta.apply(this,arguments)}const tr=I.createContext(null),Vd=I.createContext(null),ve=I.createContext(null),Fi=I.createContext(null),Jn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Eu=I.createContext(null);function $d(n,e){let{relative:t}=e===void 0?{}:e;ht()||K(!1);let{basename:a,navigator:i}=I.useContext(ve),{hash:l,pathname:o,search:r}=ju(n,{relative:t}),s=o;return a!=="/"&&(s=o==="/"?a:ge([a,o])),i.createHref({pathname:s,search:r,hash:l})}function ht(){return I.useContext(Fi)!=null}function sa(){return ht()||K(!1),I.useContext(Fi).location}function Yu(n){I.useContext(ve).static||I.useLayoutEffect(n)}function qu(){let{isDataRoute:n}=I.useContext(Jn);return n?u1():Zd()}function Zd(){ht()||K(!1);let n=I.useContext(tr),{basename:e,future:t,navigator:a}=I.useContext(ve),{matches:i}=I.useContext(Jn),{pathname:l}=sa(),o=JSON.stringify(nr(i,t.v7_relativeSplatPath)),r=I.useRef(!1);return Yu(()=>{r.current=!0}),I.useCallback(function(p,d){if(d===void 0&&(d={}),!r.current)return;if(typeof p=="number"){a.go(p);return}let f=er(p,JSON.parse(o),l,d.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ge([e,f.pathname])),(d.replace?a.replace:a.push)(f,d.state,d)},[e,a,o,l,n])}function Qd(){let{matches:n}=I.useContext(Jn),e=n[n.length-1];return e?e.params:{}}function ju(n,e){let{relative:t}=e===void 0?{}:e,{future:a}=I.useContext(ve),{matches:i}=I.useContext(Jn),{pathname:l}=sa(),o=JSON.stringify(nr(i,a.v7_relativeSplatPath));return I.useMemo(()=>er(n,JSON.parse(o),l,t==="path"),[n,o,l,t])}function Jd(n,e){return n1(n,e)}function n1(n,e,t,a){ht()||K(!1);let{navigator:i}=I.useContext(ve),{matches:l}=I.useContext(Jn),o=l[l.length-1],r=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let p=sa(),d;if(e){var f;let L=typeof e=="string"?Ye(e):e;s==="/"||(f=L.pathname)!=null&&f.startsWith(s)||K(!1),d=L}else d=p;let h=d.pathname||"/",x=h;if(s!=="/"){let L=s.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(L.length).join("/")}let b=Od(n,{pathname:x}),T=l1(b&&b.map(L=>Object.assign({},L,{params:Object.assign({},r,L.params),pathname:ge([s,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?s:ge([s,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),l,t,a);return e&&T?I.createElement(Fi.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:re.Pop}},T):T}function e1(){let n=p1(),e=Kd(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),t?I.createElement("pre",{style:i},t):null,null)}const t1=I.createElement(e1,null);class a1 extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?I.createElement(Jn.Provider,{value:this.props.routeContext},I.createElement(Eu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i1(n){let{routeContext:e,match:t,children:a}=n,i=I.useContext(tr);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),I.createElement(Jn.Provider,{value:e},a)}function l1(n,e,t,a){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),a===void 0&&(a=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=a)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,r=(i=t)==null?void 0:i.errors;if(r!=null){let d=o.findIndex(f=>f.route.id&&(r==null?void 0:r[f.route.id])!==void 0);d>=0||K(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,p=-1;if(t&&a&&a.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(p=d),f.route.id){let{loaderData:h,errors:x}=t,b=f.route.loader&&h[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||b){s=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let x,b=!1,T=null,L=null;t&&(x=r&&f.route.id?r[f.route.id]:void 0,T=f.route.errorElement||t1,s&&(p<0&&h===0?(c1("route-fallback"),b=!0,L=null):p===h&&(b=!0,L=f.route.hydrateFallbackElement||null)));let c=e.concat(o.slice(0,h+1)),u=()=>{let m;return x?m=T:b?m=L:f.route.Component?m=I.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,I.createElement(i1,{match:f,routeContext:{outlet:d,matches:c,isDataRoute:t!=null},children:m})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?I.createElement(a1,{location:t.location,revalidation:t.revalidation,component:T,error:x,children:u(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):u()},null)}var Bu=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Bu||{}),Xu=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Xu||{});function o1(n){let e=I.useContext(tr);return e||K(!1),e}function r1(n){let e=I.useContext(Vd);return e||K(!1),e}function s1(n){let e=I.useContext(Jn);return e||K(!1),e}function Wu(n){let e=s1(),t=e.matches[e.matches.length-1];return t.route.id||K(!1),t.route.id}function p1(){var n;let e=I.useContext(Eu),t=r1(),a=Wu();return e!==void 0?e:(n=t.errors)==null?void 0:n[a]}function u1(){let{router:n}=o1(Bu.UseNavigateStable),e=Wu(Xu.UseNavigateStable),t=I.useRef(!1);return Yu(()=>{t.current=!0}),I.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,ta({fromRouteId:e},l)))},[n,e])}const xs={};function c1(n,e,t){xs[n]||(xs[n]=!0)}function f1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function d1(n){let{to:e,replace:t,state:a,relative:i}=n;ht()||K(!1);let{future:l,static:o}=I.useContext(ve),{matches:r}=I.useContext(Jn),{pathname:s}=sa(),p=qu(),d=er(e,nr(r,l.v7_relativeSplatPath),s,i==="path"),f=JSON.stringify(d);return I.useEffect(()=>p(JSON.parse(f),{replace:t,state:a,relative:i}),[p,f,i,t,a]),null}function qa(n){K(!1)}function m1(n){let{basename:e="/",children:t=null,location:a,navigationType:i=re.Pop,navigator:l,static:o=!1,future:r}=n;ht()&&K(!1);let s=e.replace(/^\/*/,"/"),p=I.useMemo(()=>({basename:s,navigator:l,static:o,future:ta({v7_relativeSplatPath:!1},r)}),[s,r,l,o]);typeof a=="string"&&(a=Ye(a));let{pathname:d="/",search:f="",hash:h="",state:x=null,key:b="default"}=a,T=I.useMemo(()=>{let L=Jo(d,s);return L==null?null:{location:{pathname:L,search:f,hash:h,state:x,key:b},navigationType:i}},[s,d,f,h,x,b,i]);return T==null?null:I.createElement(ve.Provider,{value:p},I.createElement(Fi.Provider,{children:t,value:T}))}function h1(n){let{children:e,location:t}=n;return Jd(eo(e),t)}new Promise(()=>{});function eo(n,e){e===void 0&&(e=[]);let t=[];return I.Children.forEach(n,(a,i)=>{if(!I.isValidElement(a))return;let l=[...e,i];if(a.type===I.Fragment){t.push.apply(t,eo(a.props.children,l));return}a.type!==qa&&K(!1),!a.props.index||!a.props.children||K(!1);let o={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=eo(a.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},to.apply(this,arguments)}function g1(n,e){if(n==null)return{};var t={},a=Object.keys(n),i,l;for(l=0;l<a.length;l++)i=a[l],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function y1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function x1(n,e){return n.button===0&&(!e||e==="_self")&&!y1(n)}const b1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T1="6";try{window.__reactRouterVersion=T1}catch{}const S1="startTransition",bs=pc[S1];function v1(n){let{basename:e,children:t,future:a,window:i}=n,l=I.useRef();l.current==null&&(l.current=vd({window:i,v5Compat:!0}));let o=l.current,[r,s]=I.useState({action:o.action,location:o.location}),{v7_startTransition:p}=a||{},d=I.useCallback(f=>{p&&bs?bs(()=>s(f)):s(f)},[s,p]);return I.useLayoutEffect(()=>o.listen(d),[o,d]),I.useEffect(()=>f1(a),[a]),I.createElement(m1,{basename:e,children:t,location:r.location,navigationType:r.action,navigator:o,future:a})}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ao=I.forwardRef(function(e,t){let{onClick:a,relative:i,reloadDocument:l,replace:o,state:r,target:s,to:p,preventScrollReset:d,viewTransition:f}=e,h=g1(e,b1),{basename:x}=I.useContext(ve),b,T=!1;if(typeof p=="string"&&L1.test(p)&&(b=p,I1))try{let m=new URL(window.location.href),y=p.startsWith("//")?new URL(m.protocol+p):new URL(p),g=Jo(y.pathname,x);y.origin===m.origin&&g!=null?p=g+y.search+y.hash:T=!0}catch{}let L=$d(p,{relative:i}),c=O1(p,{replace:o,state:r,target:s,preventScrollReset:d,relative:i,viewTransition:f});function u(m){a&&a(m),m.defaultPrevented||c(m)}return I.createElement("a",to({},h,{href:b||L,onClick:T||l?a:u,ref:t,target:s}))});var Ts;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ts||(Ts={}));var Ss;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Ss||(Ss={}));function O1(n,e){let{target:t,replace:a,state:i,preventScrollReset:l,relative:o,viewTransition:r}=e===void 0?{}:e,s=qu(),p=sa(),d=ju(n,{relative:o});return I.useCallback(f=>{if(x1(f,t)){f.preventDefault();let h=a!==void 0?a:fi(p)===fi(d);s(n,{replace:h,state:i,preventScrollReset:l,relative:o,viewTransition:r})}},[p,s,d,a,i,t,n,l,o,r])}const N1=[{id:"of",title:"of - G10TINPOS\r",description:"G10TINPOS\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"Positive Thin Lens - Image Position",tags:["lens","positive-lens","focal-length","thin-lens","image-position","chapter1","geometrical-optics","3d-visualization"]},{id:"of",title:"of - G12TINNEG\r",description:"G12TINNEG\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"Negative Thin Lens - Image Position",tags:["lens","negative-lens","focal-length","thin-lens","image-position","chapter1","geometrical-optics","3d-visualization"]},{id:"G14TINFOC",title:"G14TINFOC - G14TINFOC\r",description:"G14TINFOC\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('fff(nnn1)');`,cCode:"",defaultParams:{},displayName:"Thin Lens Focal Length Calculator",tags:["lens","focal-length","refractive-index","thin-lens","curvature","chapter1","geometrical-optics","3d-visualization"]},{id:"G1FERMAT",title:"G1FERMAT - G1FERMAT\r",description:"G1FERMAT\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"Fermat's Principle - Travel Time",tags:["fermat-principle","optical-path","travel-time","refraction","chapter1","geometrical-optics"]},{id:"G2FERMAT",title:"G2FERMAT - G2FERMAT\r",description:"G2FERMAT\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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



`,cCode:"",defaultParams:{},displayName:"Fermat's Principle - Multi-Medium Path",tags:["fermat-principle","optical-path","multi-medium","3d-visualization","chapter1","geometrical-optics","contour-plot"]},{id:"G30MIRCV",title:"G30MIRCV - G30MIRCV\r",description:"G30MIRCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"Concave Mirror - Image Formation",tags:["mirror","concave-mirror","reflection","image-formation","chapter1","geometrical-optics"]},{id:"G31MIRCX",title:"G31MIRCX - G31MIRCV\r",description:"G31MIRCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"Convex Mirror - Image Formation",tags:["mirror","convex-mirror","reflection","image-formation","chapter1","geometrical-optics"]},{id:"G32RESGG",title:"G32RESGG - G32RESGG\r",description:"G32RESGG\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"G32RESGG",tags:["chapter1","geometrical-optics"]},{id:"G4PRISM",title:"G4PRISM - G4PRISM\r",description:"G4PRISM\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('delta(	heta1)');`,cCode:"",defaultParams:{},displayName:"G4PRISM",tags:["chapter1","geometrical-optics","prism","refraction"]},{id:"of",title:"of - G6SINGCX\r",description:"G6SINGCX\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('xxxi(xxxo)');`,cCode:"",defaultParams:{},displayName:"G6SINGCX",tags:["chapter1","geometrical-optics","3d-visualization"]},{id:"of",title:"of - G8SINGCV\r",description:"G8SINGCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('xxxi(xxxo)');`,cCode:"",defaultParams:{},displayName:"G8SINGCV",tags:["chapter1","geometrical-optics","3d-visualization"]}],P1=[{id:"W10BES3DS",title:"W10BES3DS - W10BES3DS\r",description:"W10BES3DS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"W10BES3DS",tags:["chapter10","wavefront-analysis","aperture","wavelength","pattern","3d-visualization"]},{id:"W11TWOROJ1Sl",title:"W11TWOROJ1Sl - W11TWOROJ1S\r",description:"W11TWOROJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"W11TWOROJ1S",tags:["chapter10","wavefront-analysis","lens","aperture"]},{id:"W12TWOROCOHS",title:"W12TWOROCOHS - W12TWOROCOHS\r",description:"W12TWOROCOHS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"W12TWOROCOHS",tags:["chapter10","wavefront-analysis","lens","aperture","amplitude"]},{id:"function",title:"function - W13TRANCOHSIS\r",description:"W13TRANCOHSIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"W13TRANCOHSIS",tags:["chapter10","wavefront-analysis","amplitude","fourier-transform","fft"]},{id:"function",title:"function - W14TRANJ1S\r",description:"W14TRANJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"W14TRANJ1S",tags:["chapter10","wavefront-analysis","amplitude","fourier-transform","fft"]},{id:"fow",title:"fow - W15HOGRIBLOHIS\r",description:"W15HOGRIBLOHIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"W15HOGRIBLOHIS",tags:["chapter10","wavefront-analysis","fft"]},{id:"for",title:"for - W16HOGRIBLOLOS\r",description:"W16HOGRIBLOLOS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"W16HOGRIBLOLOS",tags:["chapter10","wavefront-analysis","fft"]},{id:"has",title:"has - W17HOGRPERS\r",description:"W17HOGRPERS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"W17HOGRPERS",tags:["chapter10","wavefront-analysis","fft"]},{id:"W18HOSTEPS",title:"W18HOSTEPS - W18HOSTEPS\r",description:"W18HOSTEPS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"W18HOSTEPS",tags:["chapter10","wavefront-analysis","lens","focal-length","fft"]},{id:"W1FTSERIS",title:"W1FTSERIS - W1FTSERIS\r",description:"W1FTSERIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"W1FTSERIS",tags:["chapter10","wavefront-analysis","wavelength","amplitude","fourier-transform"]},{id:"W2FTCFTS",title:"W2FTCFTS - W2FTCFTS\r",description:"W2FTCFTS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"W2FTCFTS",tags:["chapter10","wavefront-analysis","fourier-transform","fft"]},{id:"W3IMONEBS",title:"W3IMONEBS - W3IMONEBS\r",description:"W3IMONEBS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"W3IMONEBS",tags:["chapter10","wavefront-analysis","lens"]},{id:"W4IMTWOBS",title:"W4IMTWOBS - W4IMTWOBS\r",description:"W4IMTWOBS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"W4IMTWOBS",tags:["chapter10","wavefront-analysis","lens"]},{id:"W5IMONEROS",title:"W5IMONEROS - W5IMONEROS\r",description:"W5IMONEROS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"W5IMONEROS",tags:["chapter10","wavefront-analysis","lens","aperture"]},{id:"W6IMTWOROS",title:"W6IMTWOROS - W6IMTWOROS\r",description:"W6IMTWOROS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"W6IMTWOROS",tags:["chapter10","wavefront-analysis","lens","aperture"]},{id:"W7PUTRAS",title:"W7PUTRAS - W7PUTRAS\r",description:"W7PUTRAS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('yy');`,cCode:"",defaultParams:{},displayName:"W7PUTRAS",tags:["chapter10","wavefront-analysis","lens","fft"]},{id:"the",title:"the - W8TRASIS\r",description:"W8TRASIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('yy');`,cCode:"",defaultParams:{},displayName:"W8TRASIS",tags:["chapter10","wavefront-analysis","fourier-transform","fft"]},{id:"W9TRAJ1S",title:"W9TRAJ1S - W9TRAJ1S\r",description:"W9TRAJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('yy');`,cCode:"",defaultParams:{},displayName:"W9TRAJ1S",tags:["chapter10","wavefront-analysis","fourier-transform","fft"]}],C1=[{id:"A2SPASSS",title:"A2SPASSS - A2SPASSS\r",description:"A2SPASSS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('xi(rrr)-xiisph(rrr)');`,cCode:"",defaultParams:{},displayName:"A2SPASSS",tags:["chapter11","aberrations","3d-visualization"]},{id:"A4SPHLSIPIS",title:"A4SPHLSIPIS - A4SPHLSIPIS\r",description:"A4SPHLSIPIS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"A4SPHLSIPIS",tags:["chapter11","aberrations","focal-length"]},{id:"A5COMAS",title:"A5COMAS - A5COMAS\r",description:"A5COMAS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
% CS = 1/3 CT`,cCode:"",defaultParams:{},displayName:"A5COMAS",tags:["chapter11","aberrations"]},{id:"A6COMPLANS",title:"A6COMPLANS - A6COMPLANS\r",description:"A6COMPLANS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = ((Rho.^2*tan(Beta))/(f^2))*(W(Rho)*Sigma+G(Rho)*pi);`,cCode:"",defaultParams:{},displayName:"A6COMPLANS",tags:["chapter11","aberrations","lens"]},{id:"A7ASTSINS",title:"A7ASTSINS - A7ASTSINS\r",description:"A7ASTSINS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('ASD(phi)');`,cCode:"",defaultParams:{},displayName:"A7ASTSINS",tags:["chapter11","aberrations","refraction","3d-visualization"]},{id:"of",title:"of - A8ASTISMS\r",description:"A8ASTISMS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"A8ASTISMS",tags:["chapter11","aberrations","lens","refraction"]}],w1=[{id:"I10WEDGES",title:"I10WEDGES - I10WEDGES\r",description:"I10WEDGES\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I10WEDGES",tags:["chapter2","interference","fringe-pattern"]},{id:"I11NEWTONS",title:"I11NEWTONS - I11NEWTONS\r",description:"I11NEWTONS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I11NEWTONS",tags:["chapter2","interference","lens"]},{id:"I12MICHDLS",title:"I12MICHDLS - I12MICHDLS\r",description:"I12MICHDLS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I12MICHDLS",tags:["chapter2","interference","wavelength","fringe-pattern","pattern"]},{id:"I13MICHANS",title:"I13MICHANS - I13MICHANS\r",description:"I13MICHANS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I13MICHANS",tags:["chapter2","interference","wavelength","fringe-pattern","pattern"]},{id:"I14PLANIDS",title:"I14PLANIDS - I14PLANIDS\r",description:"I14PLANIDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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



`,cCode:"",defaultParams:{},displayName:"I14PLANIDS",tags:["chapter2","interference","reflection","wavelength","intensity","fringe-pattern","pattern","3d-visualization"]},{id:"I15PLANIDS",title:"I15PLANIDS - I15PLANIDS\r",description:"I15PLANIDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"I15PLANIDS",tags:["chapter2","interference","reflection","wavelength","intensity","fringe-pattern","pattern","3d-visualization"]},{id:"I16FABRYS",title:"I16FABRYS - I16FABRYS\r",description:"I16FABRYS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I16FABRYS",tags:["chapter2","interference","reflection","wavelength"]},{id:"I17FABRYLS",title:"I17FABRYLS - I17FABRYLS\r",description:"I17FABRYLS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I17FABRYLS",tags:["chapter2","interference","reflection","wavelength"]},{id:"I18FABRYRDS",title:"I18FABRYRDS - I18FABRYRDS\r",description:"I18FABRYRDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I18FABRYRDS",tags:["chapter2","interference","reflection","pattern"]},{id:"I19FABRYAS",title:"I19FABRYAS - I19FABRYAS\r",description:"I19FABRYAS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I19FABRYAS",tags:["chapter2","interference","reflection","pattern"]},{id:"depending",title:"depending - I1COSWS\r",description:"I1COSWS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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






`,cCode:"",defaultParams:{},displayName:"I1COSWS",tags:["chapter2","interference","phase"]},{id:"of",title:"of - I20ARRAYS\r",description:"I20ARRAYS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I20ARRAYS",tags:["chapter2","interference","wavelength","pattern"]},{id:"I21RANDS",title:"I21RANDS - I21RANDS\r",description:"I21RANDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"I21RANDS",tags:["chapter2","interference"]},{id:"I2COSSUPS",title:"I2COSSUPS - I2COSSUPS\r",description:"I2COSSUPS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('(u1(x))^2','(u2(x))^2','(u3(x))^2','(u4(x))^2','(u5(x))^2','(u6(x))^2');`,cCode:"",defaultParams:{},displayName:"I2COSSUPS",tags:["chapter2","interference","intensity"]},{id:"I3COSGRA",title:"I3COSGRA - I3COSGRA\r",description:"I3COSGRA\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
mesh(MM);`,cCode:"",defaultParams:{},displayName:"I3COSGRA",tags:["chapter2","interference","wavelength","intensity","3d-visualization"]},{id:"I4COSINTS",title:"I4COSINTS - I4COSINTS\r",description:"I4COSINTS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
% We see the "fringe pattern"`,cCode:"",defaultParams:{},displayName:"I4COSINTS",tags:["chapter2","interference","intensity","fringe-pattern","pattern"]},{id:"I5YOUNGS",title:"I5YOUNGS - I5YOUNGS\r",description:"I5YOUNGS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"I5YOUNGS",tags:["chapter2","interference"]},{id:"I6LOYDS",title:"I6LOYDS - I6LOYDS\r",description:"I6LOYDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
% considered fixed.`,cCode:"",defaultParams:{},displayName:"I6LOYDS",tags:["chapter2","interference","mirror"]},{id:"I7FREMIRS",title:"I7FREMIRS - I7FREMIRS\r",description:"I7FREMIRS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"I7FREMIRS",tags:["chapter2","interference","mirror"]},{id:"I8FRYOLOS",title:"I8FRYOLOS - I8FRYOLOS\r",description:"I8FRYOLOS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"I8FRYOLOS",tags:["chapter2","interference","mirror","slit","phase","fringe-pattern"]},{id:"I9PLANS",title:"I9PLANS - I9PLANS\r",description:"I9PLANS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('I2(lambdalambda)');`,cCode:"",defaultParams:{},displayName:"I9PLANS",tags:["chapter2","interference","fringe-pattern"]}],F1=[{id:"D10FAGRDSLS",title:"D10FAGRDSLS - D10FAGRDSLS\r",description:"D10FAGRDSLS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D10FAGRDSLS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"]},{id:"D11FAGRANGS",title:"D11FAGRANGS - D11FAGRANGS\r",description:"D11FAGRANGS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"D11FAGRANGS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"]},{id:"D12FAELGRS",title:"D12FAELGRS - D12FAELGRS\r",description:"D12FAELGRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D12FAELGRS",tags:["chapter3","diffraction","grating","wavelength"]},{id:"D13FAGRRES",title:"D13FAGRRES - D13FAGRRES\r",description:"D13FAGRRES\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D13FAGRRES",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude","pattern"]},{id:"D14FAGRRES3DS",title:"D14FAGRRES3DS - D14FAGRRES3DS\r",description:"D14FAGRRES3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
%                       ?? = 6.125 * 10 ^ (-4)`,cCode:"",defaultParams:{},displayName:"D14FAGRRES3DS",tags:["chapter3","diffraction","grating","aperture","wavelength","pattern","3d-visualization"]},{id:"D15FABAGRS",title:"D15FABAGRS - D15FABAGRS\r",description:"D15FABAGRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"D15FABAGRS",tags:["chapter3","diffraction","grating","interference","wavelength","intensity","amplitude","pattern"]},{id:"D16FAGRRANS",title:"D16FAGRRANS - D16FAGRRANS\r",description:"D16FAGRRANS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D16FAGRRANS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"]},{id:"D17ARAYRA3DS",title:"D17ARAYRA3DS - D17ARAYRA3DS\r",description:"D17ARAYRA3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('MM');`,cCode:"",defaultParams:{},displayName:"D17ARAYRA3DS",tags:["chapter3","diffraction","aperture","pattern","3d-visualization"]},{id:"D18FEFNCS",title:"D18FEFNCS - D18FEFNCS\r",description:"D18FEFNCS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D18FEFNCS",tags:["chapter3","diffraction"]},{id:"D19FESLITS",title:"D19FESLITS - D19FESLITS\r",description:"D19FESLITS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = cos((pi/2)*(mu.^2));`,cCode:"",defaultParams:{},displayName:"D19FESLITS",tags:["chapter3","diffraction","slit"]},{id:"D1CIRS",title:"D1CIRS - D1CIRS\r",description:"D1CIRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D1CIRS",tags:["chapter3","diffraction","intensity"]},{id:"D20FEEDGES",title:"D20FEEDGES - D20FEEDGES\r",description:"D20FEEDGES\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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



`,cCode:"",defaultParams:{},displayName:"D20FEEDGES",tags:["chapter3","diffraction","slit"]},{id:"D2FASLITS",title:"D2FASLITS - D2FASLITS\r",description:"D2FASLITS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"D2FASLITS",tags:["chapter3","diffraction","slit","wavelength"]},{id:"D3FASLITEXS",title:"D3FASLITEXS - D3FASLITEXS\r",description:"D3FASLITEXS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"D3FASLITEXS",tags:["chapter3","diffraction","slit","wavelength"]},{id:"of",title:"of - D4FASLITFTS\r",description:"D4FASLITFTS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(Z(I))','imag(Z(I))');`,cCode:"",defaultParams:{},displayName:"D4FASLITFTS",tags:["chapter3","diffraction","slit","fourier-transform","fft"]},{id:"D5FARECTS",title:"D5FARECTS - D5FARECTS The diffraction pattern of a rectangular aperture.\r",description:"D5FARECTS The diffraction pattern of a rectangular aperture.\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"D5FARECTS The diffraction pattern of a rectangular aperture.",tags:["chapter3","diffraction","aperture","pattern","contour-plot","3d-visualization"]},{id:"D6FARONS",title:"D6FARONS - D6FARONS\r",description:"D6FARONS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"D6FARONS",tags:["chapter3","diffraction","slit","aperture","wavelength"]},{id:"D7FARON3DS",title:"D7FARON3DS - D7FARON3DS\r",description:"D7FARON3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
axis([0 N 0 N 0 0.3])`,cCode:"",defaultParams:{},displayName:"D7FARON3DS",tags:["chapter3","diffraction","aperture","wavelength","pattern","contour-plot","3d-visualization"]},{id:"D8FARONEXS",title:"D8FARONEXS - D8FARONEXS\r",description:"D8FARONEXS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"D8FARONEXS",tags:["chapter3","diffraction","slit","aperture","wavelength","pattern"]},{id:"D9FAGRAMPS",title:"D9FAGRAMPS - D9FAGRAMPS\r",description:"D9FAGRAMPS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"D9FAGRAMPS",tags:["chapter3","diffraction","grating","interference","wavelength","amplitude"]},{id:"DA1FAGRSTEP1S",title:"DA1FAGRSTEP1S - DA1FAGRSTEP1S\r",description:"DA1FAGRSTEP1S\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"DA1FAGRSTEP1S",tags:["chapter3","diffraction","grating","interference","wavelength","intensity"]},{id:"DA2FAGRSTEP2S",title:"DA2FAGRSTEP2S - DA2FAGRSTEP2S\r",description:"DA2FAGRSTEP2S\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('P3(	heta)','P4(	heta)','D3(	heta)','D4(	heta)');`,cCode:"",defaultParams:{},displayName:"DA2FAGRSTEP2S",tags:["chapter3","diffraction","grating","interference","wavelength","intensity"]},{id:"DA3FECOR",title:"DA3FECOR - DA3FECOR\r",description:"DA3FECOR\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"DA3FECOR",tags:["chapter3","diffraction"]}],k1=[{id:"C1COH2S",title:"C1COH2S - C1COH2S\r",description:"C1COH2S\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


`,cCode:"",defaultParams:{},displayName:"C1COH2S",tags:["chapter4","coherence","slit","intensity","fringe-pattern","pattern"]},{id:"C2COHEX",title:"C2COHEX - C2COHEX\r",description:"C2COHEX\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"C2COHEX",tags:["chapter4","coherence","slit","diffraction","intensity"]},{id:"C3VIS2S",title:"C3VIS2S - C3VIS2S\r",description:"C3VIS2S\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('abs(V(s))');`,cCode:"",defaultParams:{},displayName:"C3VIS2S",tags:["chapter4","coherence"]},{id:"C4VISEX",title:"C4VISEX - C4VISEX\r",description:"C4VISEX\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('abs(VV(s))')`,cCode:"",defaultParams:{},displayName:"C4VISEX",tags:["chapter4","coherence"]},{id:"C5MICHSTS",title:"C5MICHSTS - C5MICHSTS\r",description:"C5MICHSTS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('uI(Y)+uII(Y)','uI(Y)','uII(Y)');`,cCode:"",defaultParams:{},displayName:"C5MICHSTS",tags:["chapter4","coherence","mirror","diffraction","wavelength","fringe-pattern","pattern"]},{id:"C6SUPERS",title:"C6SUPERS - C6SUPERS\r",description:"C6SUPERS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{},displayName:"C6SUPERS",tags:["chapter4","coherence","wavelength"]},{id:"C7COHTEMS",title:"C7COHTEMS - C7COHTEMS\r",description:"C7COHTEMS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{},displayName:"C7COHTEMS",tags:["chapter4","coherence","grating","wavelength","phase"]},{id:"C8CCOHINTS",title:"C8CCOHINTS - C8COHINTS\r",description:"C8COHINTS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{},displayName:"C8COHINTS",tags:["chapter4","coherence","grating","wavelength","intensity","phase"]}],R1=[{id:"M11POELIPLIS",title:"M11POELIPLIS - M11POELIPLIS\r",description:"M11POELIPLIS\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('yy8(x)');`,cCode:"",defaultParams:{},displayName:"M11POELIPLIS",tags:["chapter5","matrix-methods"]},{id:"of",title:"of - M2FRN2L\r",description:"M2FRN2L\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"M2FRN2L",tags:["chapter5","matrix-methods","reflection"]},{id:"of",title:"of - M3FRN2S\r",description:"M3FRN2S\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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



`,cCode:"",defaultParams:{},displayName:"M3FRN2S",tags:["chapter5","matrix-methods","reflection"]},{id:"M4SNELL",title:"M4SNELL - M4SNELL\r",description:"M4SNELL\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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


Thetac = (360/(2*pi))*asin(nn2/nn1)`,cCode:"",defaultParams:{},displayName:"M4SNELL",tags:["chapter5","matrix-methods","refraction"]},{id:"of",title:"of - M5FRINTN2L\r",description:"M5FRINTN2L\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"M5FRINTN2L",tags:["chapter5","matrix-methods","reflection","amplitude"]},{id:"of",title:"of - M6FRINTN2S\r",description:"M6FRINTN2S\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('Ts(	heta)');`,cCode:"",defaultParams:{},displayName:"M6FRINTN2S",tags:["chapter5","matrix-methods","reflection","amplitude"]},{id:"M7FREVA",title:"M7FREVA - M7FREVA. Penetration into the less dense medium at total reflection.\r",description:"M7FREVA. Penetration into the less dense medium at total reflection.\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
% to values larger than 2.`,cCode:"",defaultParams:{},displayName:"M7FREVA. Penetration into the less dense medium at total reflection.",tags:["chapter5","matrix-methods","reflection","amplitude"]},{id:"M8POLIN",title:"M8POLIN - M8POLIN\r",description:"M8POLIN\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

% The resulting vibration is along the diagonal`,cCode:"",defaultParams:{},displayName:"M8POLIN",tags:["chapter5","matrix-methods","fringe-pattern"]},{id:"M9POELIP",title:"M9POELIP - M9POELIP Circular and ellipticlly polarized light\r",description:"M9POELIP Circular and ellipticlly polarized light\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"M9POELIP Circular and ellipticlly polarized light",tags:["chapter5","matrix-methods"]},{id:"of",title:"of - MA3DIFINTRO\r",description:"MA3DIFINTRO\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('angle(rp(	heta))-angle(rs(	heta))');`,cCode:"",defaultParams:{},displayName:"MA3DIFINTRO",tags:["chapter5","matrix-methods","3d-visualization"]}],z1=[{id:"N1RECBOX",title:"N1RECBOX - N1RECBOX\r",description:"N1RECBOX\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"N1RECBOX",tags:["chapter6","intensity","amplitude","contour-plot","3d-visualization"]},{id:"N4SYMULANTb",title:"N4SYMULANTb - N4SYMULANTb Page 2 \r",description:"N4SYMULANTb Page 2 \r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"N4SYMULANTb Page 2",tags:["chapter6","reflection"]},{id:"N6PLSPS",title:"N6PLSPS - N6PLSPS\r",description:"N6PLSPS\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('angle(ys(	heta))','angle(yys(	heta))','angle(yyys(	heta))');`,cCode:"",defaultParams:{},displayName:"N6PLSPS",tags:["chapter6","reflection","polarization"]},{id:"N7PLPPS",title:"N7PLPPS - N7PLPPS\r",description:"N7PLPPS\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"N7PLPPS",tags:["chapter6","reflection","polarization"]},{id:"N8CWGK",title:"N8CWGK - N8CWGK\r",description:"N8CWGK\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"N8CWGK",tags:["chapter6","wavelength"]}],D1=[{id:"L10WRS",title:"L10WRS - L10WRS Radius of curvature and Beam waist.\r",description:"L10WRS Radius of curvature and Beam waist.\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"L10WRS Radius of curvature and Beam waist.",tags:["chapter7","light-sources","mirror"]},{id:"L11MOCONFCS",title:"L11MOCONFCS - L11MOCONFCS\r",description:"L11MOCONFCS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"L11MOCONFCS",tags:["chapter7","light-sources","mirror","focal-length","contour-plot"]},{id:"L12MOCY1to4S",title:"L12MOCY1to4S - L12MOCY1to4S\r",description:"L12MOCY1to4S\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"L12MOCY1to4S",tags:["chapter7","light-sources","mirror","focal-length","contour-plot","3d-visualization"]},{id:"L12MOCY5to9S",title:"L12MOCY5to9S - L12MOCY5to9S\r",description:"L12MOCY5to9S\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"L12MOCY5to9S",tags:["chapter7","light-sources","mirror","focal-length","contour-plot","3d-visualization"]},{id:"LIRJEANS",title:"LIRJEANS - L1RJEANS\r",description:"L1RJEANS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"L1RJEANS",tags:["chapter7","light-sources","frequency"]},{id:"L2BBLS",title:"L2BBLS - L2BBLS\r",description:"L2BBLS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = c1./((x.^5).*(exp(c2./(x*T))-1));`,cCode:"",defaultParams:{},displayName:"L2BBLS",tags:["chapter7","light-sources","grating","wavelength","frequency"]},{id:"L3BBFS",title:"L3BBFS - L3BBFS\r",description:"L3BBFS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = (c3./(exp(c4*v/T)-1)).*(v.^3);`,cCode:"",defaultParams:{},displayName:"L3BBFS",tags:["chapter7","light-sources","grating","wavelength","frequency"]},{id:"L4STEFS",title:"L4STEFS - L4STEFS\r",description:"L4STEFS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('y(T)');`,cCode:"",defaultParams:{},displayName:"L4STEFS",tags:["chapter7","light-sources"]},{id:"L5WIENS",title:"L5WIENS - L5WienS\r",description:"L5WienS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"L5WienS",tags:["chapter7","light-sources","wavelength"]},{id:"L6BANDS",title:"L6BANDS - L6BANDS\r",description:"L6BANDS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('g1(omega)');`,cCode:"",defaultParams:{},displayName:"L6BANDS",tags:["chapter7","light-sources","frequency"]}],M1=[{id:"of",title:"of - O1FRNKPSS\r",description:"O1FRNKPSS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"O1FRNKPSS",tags:["chapter8","optical-materials","reflection"]},{id:"of",title:"of - O2FRSOPS Graphs of Ratios of reflection coefficients\r",description:"O2FRSOPS Graphs of Ratios of reflection coefficients\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"O2FRSOPS Graphs of Ratios of reflection coefficients",tags:["chapter8","optical-materials","reflection"]},{id:"O3OSTINS",title:"O3OSTINS - O3OSTINS Graphs of n and K\r",description:"O3OSTINS Graphs of n and K\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"O3OSTINS Graphs of n and K",tags:["chapter8","optical-materials"]},{id:"O4SELMRS",title:"O4SELMRS - O4SELMRS\r",description:"O4SELMRS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('n(lambda)');`,cCode:"",defaultParams:{},displayName:"O4SELMRS",tags:["chapter8","optical-materials"]},{id:"O5METALS",title:"O5METALS - O5METALS Calculation of n and K for Copper using the Drude model. \r",description:"O5METALS Calculation of n and K for Copper using the Drude model. \r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"O5METALS Calculation of n and K for Copper using the Drude model.",tags:["chapter8","optical-materials","wavelength","frequency"]},{id:"O6SKINS",title:"O6SKINS - O6SKINS Skin Depth\r",description:"O6SKINS Skin Depth\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

% 1 10^-9 meter is 1 nm =.001 microns= 10A`,cCode:"",defaultParams:{},displayName:"O6SKINS Skin Depth",tags:["chapter8","optical-materials","wavelength","intensity","frequency"]},{id:"O7REFNKS",title:"O7REFNKS - O7REFNKS\r",description:"O7REFNKS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('R(K)');`,cCode:"",defaultParams:{},displayName:"O7REFNKS",tags:["chapter8","optical-materials"]},{id:"of",title:"of - O8ARDELS Fresnel's Formulas with Absorption\r",description:"O8ARDELS Fresnel's Formulas with Absorption\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('argDelta(	heta)');`,cCode:"",defaultParams:{},displayName:"O8ARDELS Fresnel's Formulas with Absorption",tags:["chapter8","optical-materials","reflection"]},{id:"of",title:"of - OA1DELTAFfS\r",description:"OA1DELTAFfS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('psi');`,cCode:"",defaultParams:{},displayName:"OA1DELTAFfS",tags:["chapter8","optical-materials"]},{id:"OA2METPDS",title:"OA2METPDS - OA2METPDS\r",description:"OA2METPDS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('KKk','imag(zk)','imag(z1k)');`,cCode:"",defaultParams:{},displayName:"OA2METPDS",tags:["chapter8","optical-materials"]}],A1=[{id:"for",title:"for - F10FTGAUSGS\r",description:"F10FTGAUSGS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"F10FTGAUSGS",tags:["chapter9","fourier-transform","fft"]},{id:"F11CONVOS",title:"F11CONVOS - F11CONVOS\r",description:"F11CONVOS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
Out = y(XX).*(sin(k*a*(X-XX)/f));`,cCode:"",defaultParams:{},displayName:"F11CONVOS",tags:["chapter9","fourier-transform","convolution"]},{id:"F12FTDISC1S",title:"F12FTDISC1S - F12FTDISC1S\r",description:"F12FTDISC1S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('y127','y128','y129','y130');`,cCode:"",defaultParams:{},displayName:"F12FTDISC1S",tags:["chapter9","fourier-transform","frequency"]},{id:"show",title:"show - F13DTDISC2S\r",description:"F13DTDISC2S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"F13DTDISC2S",tags:["chapter9","fourier-transform","mirror","3d-visualization"]},{id:"F14MICHOPS",title:"F14MICHOPS - F14MICHOPS\r",description:"F14MICHOPS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('(u2)^2');`,cCode:"",defaultParams:{},displayName:"F14MICHOPS",tags:["chapter9","fourier-transform","mirror","intensity","amplitude","frequency","fringe-pattern","pattern"]},{id:"F15FOLDS",title:"F15FOLDS - F15FOLDS\r",description:"F15FOLDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"F15FOLDS",tags:["chapter9","fourier-transform","frequency","fft"]},{id:"and",title:"and - F16APODIS\r",description:"F16APODIS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"F16APODIS",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F1FTSTEPS\r",description:"F1FTSTEPS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(y)','imag(y)');`,cCode:"",defaultParams:{},displayName:"F1FTSTEPS",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F2FTSTEPDS\r",description:"F2FTSTEPDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F2FTSTEPDS",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F2FTSTEPDS\r",description:"F2FTSTEPDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F2FTSTEPDS",tags:["chapter9","fourier-transform","3d-visualization","fft"]},{id:"of",title:"of - F4FTSTEPOSS\r",description:"F4FTSTEPOSS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
`,cCode:"",defaultParams:{},displayName:"F4FTSTEPOSS",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F5FTSINCRS\r",description:"F5FTSINCRS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F5FTSINCRS",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F6FTSINCCS\r",description:"F6FTSINCCS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F6FTSINCCS",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F7FTSTEP183S\r",description:"F7FTSTEP183S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F7FTSTEP183S",tags:["chapter9","fourier-transform","fft"]},{id:"of",title:"of - F8FTSINC183S\r",description:"F8FTSINC183S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{},displayName:"F8FTSINC183S",tags:["chapter9","fourier-transform","fft"]},{id:"for",title:"for - F9FTGAUSS\r",description:"F9FTGAUSS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
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

`,cCode:"",defaultParams:{},displayName:"F9FTGAUSS",tags:["chapter9","fourier-transform","fft"]}],_1=[...N1,...P1,...C1,...w1,...F1,...k1,...R1,...z1,...D1,...M1,...A1],ja=[..._1];function E1(){const[n,e]=I.useState(""),[t,a]=I.useState(new Set),i=I.useMemo(()=>{const p=new Set;return ja.forEach(d=>{d.tags&&Array.isArray(d.tags)&&d.tags.forEach(f=>p.add(f))}),Array.from(p).sort()},[]),l=I.useMemo(()=>ja.filter(p=>{const d=!n||(p.displayName||p.title||"").toLowerCase().includes(n.toLowerCase())||(p.description||"").toLowerCase().includes(n.toLowerCase())||(p.id||"").toLowerCase().includes(n.toLowerCase()),f=t.size===0||p.tags&&p.tags.some(h=>t.has(h));return d&&f}),[n,t]),o=I.useMemo(()=>{const p={};return l.forEach(d=>{const f=d.category||"Other";p[f]||(p[f]=[]),p[f].push(d)}),p},[l]),r=p=>{const d=new Set(t);d.has(p)?d.delete(p):d.add(p),a(d)},s=()=>{e(""),a(new Set)};return v.jsxs("div",{className:"program-list",children:[v.jsxs("div",{className:"header",children:[v.jsx("h1",{children:"🔬 Optics & Berkeley Extension Programs"}),v.jsxs("p",{className:"subtitle",children:[l.length," of ",ja.length," programs"]})]}),v.jsxs("div",{className:"filter-section",children:[v.jsxs("div",{className:"search-bar",children:[v.jsx("input",{type:"text",placeholder:"Search programs by name, description, or ID...",value:n,onChange:p=>e(p.target.value),className:"search-input"}),(n||t.size>0)&&v.jsx("button",{onClick:s,className:"clear-button",children:"✕ Clear Filters"})]}),v.jsxs("div",{className:"tag-filter",children:[v.jsx("div",{className:"tag-filter-header",children:"Filter by tags:"}),v.jsx("div",{className:"tag-cloud",children:i.map(p=>v.jsxs("button",{onClick:()=>r(p),className:`tag-button ${t.has(p)?"active":""}`,children:["#",p]},p))})]})]}),v.jsx("div",{className:"categories",children:Object.keys(o).length===0?v.jsxs("div",{className:"no-results",children:[v.jsx("p",{children:"No programs found matching your criteria."}),v.jsx("button",{onClick:s,className:"clear-button-large",children:"Clear Filters"})]}):Object.keys(o).sort().map(p=>v.jsxs("div",{className:"category-section",children:[v.jsxs("h2",{children:[p," (",o[p].length,")"]}),v.jsx("div",{className:"program-grid",children:o[p].map(d=>v.jsxs(ao,{to:`/program/${d.id}`,className:"program-card",children:[v.jsx("div",{className:"program-title",children:d.displayName||d.title}),v.jsx("div",{className:"program-description",children:d.description}),d.tags&&d.tags.length>0&&v.jsxs("div",{className:"program-tags",children:[d.tags.slice(0,5).map(f=>v.jsxs("span",{className:"tag-chip",children:["#",f]},f)),d.tags.length>5&&v.jsxs("span",{className:"tag-more",children:["+",d.tags.length-5]})]}),v.jsxs("div",{className:"program-meta",children:[v.jsx("span",{className:"program-source",children:d.source.toUpperCase()}),d.chapter&&v.jsxs("span",{className:"program-chapter",children:["Chapter ",d.chapter]})]})]},d.id))})]},p))})]})}function Y1({imageData:n}){const e=()=>{const t=document.createElement("a");t.href=`data:image/png;base64,${n}`,t.download=`plot_${Date.now()}.png`,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return v.jsxs("div",{className:"plot-container",children:[v.jsxs("div",{className:"plot-header",children:[v.jsx("h3",{children:"Plot Output"}),v.jsx("button",{className:"download-plot-button",onClick:e,title:"Download plot as PNG",children:"⬇ Download Plot"})]}),v.jsx("img",{src:`data:image/png;base64,${n}`,alt:"Plot"})]})}function q1({text:n}){const e=n.startsWith("❌");return v.jsx("div",{className:`text-output ${e?"error":""}`,children:n})}function j1({pyodide:n,program:e}){const[t,a]=I.useState("python"),[i,l]=I.useState(e.pythonCode||""),[o,r]=I.useState(e.pythonCode||""),[s,p]=I.useState(!1),[d,f]=I.useState(null),[h,x]=I.useState(""),[b,T]=I.useState(e.defaultParams||{}),[L,c]=I.useState("");I.useEffect(()=>{l(e.pythonCode||""),r(e.pythonCode||""),T(e.defaultParams||{}),f(null),x("")},[e]);const u=(g,O)=>{navigator.clipboard.writeText(g).then(()=>{c(O),setTimeout(()=>c(""),2e3)}).catch(C=>{console.error("Failed to copy: ",C)})};async function m(){if(!(!n||s)){p(!0),f(null),x("⏳ Running...");try{let g=t==="compiler"?o:i;Object.keys(b).forEach(Z=>{const Bn=b[Z];typeof Bn=="string"?g=g.replace(new RegExp(`\\{\\{${Z}\\}\\}`,"g"),`"${Bn}"`):g=g.replace(new RegExp(`\\{\\{${Z}\\}\\}`,"g"),Bn)});const O=`
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
`;await n.runPythonAsync(O);const C=n.globals.get("out"),w=n.globals.get("err");let A=null,F=C||"";if(F&&F.includes("data:image/png;base64,")){const Z=F.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);Z&&(A=Z[1],F=F.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/,"").trim())}A&&f(A),x(w?`❌ Error:
`+w+(F?`

Output:
`+F:""):F||(A?"":"✅ Program executed successfully"))}catch(g){x(`❌ Error:
`+(g&&g.message?g.message:String(g))),console.error("Error:",g)}finally{p(!1)}}}if(!n)return v.jsx("div",{className:"ide-layout",children:v.jsx("div",{className:"loading-container",children:v.jsx("div",{className:"loading",children:"⏳ Loading Python environment..."})})});const y=[];return e.matlabCode&&y.push({id:"matlab",label:"MATLAB",code:e.matlabCode}),y.push({id:"python",label:"Python",code:i}),y.push({id:"compiler",label:"Compiler Editor",code:o}),v.jsxs("div",{className:"ide-layout",children:[v.jsxs("div",{className:"ide-left-panel",children:[v.jsx("div",{className:"ide-tabs",children:y.map(g=>v.jsx("button",{className:`ide-tab ${t===g.id?"active":""}`,onClick:()=>a(g.id),children:g.label},g.id))}),v.jsxs("div",{className:"ide-editor-container",children:[v.jsx("button",{className:"ide-copy-button",onClick:()=>{const g=y.find(O=>O.id===t);g&&u(g.code,t)},title:"Copy code to clipboard",children:L===t?"✓ Copied!":"📋 Copy"}),t==="matlab"&&e.matlabCode&&v.jsx("pre",{className:"ide-code-display",children:v.jsx("code",{children:e.matlabCode})}),t==="python"&&v.jsx("textarea",{className:"ide-code-editor",value:i,onChange:g=>l(g.target.value),spellCheck:!1,placeholder:"Write your Python code here..."}),t==="compiler"&&v.jsx("textarea",{className:"ide-code-editor",value:o,onChange:g=>r(g.target.value),spellCheck:!1,placeholder:"Write your compiler code here..."})]}),e.params&&e.params.length>0&&v.jsxs("div",{className:"ide-params-section",children:[v.jsx("div",{className:"ide-params-header",children:"Parameters"}),v.jsx("div",{className:"ide-params-list",children:e.params.map(g=>v.jsxs("div",{className:"ide-param-input",children:[v.jsxs("label",{htmlFor:g.name,children:[g.label," ",g.unit&&`(${g.unit})`]}),v.jsx("input",{id:g.name,type:g.step===null?"text":"number",step:g.step||.01,value:b[g.name]!==void 0?b[g.name]:g.default,onChange:O=>T({...b,[g.name]:g.step===null?O.target.value:parseFloat(O.target.value)||g.default})})]},g.name))})]}),v.jsx("div",{className:"ide-actions",children:v.jsx("button",{onClick:m,disabled:s,className:"ide-run-button",children:s?"⏳ Running...":"▶ Run Program"})})]}),v.jsxs("div",{className:"ide-right-panel",children:[v.jsx("div",{className:"ide-results-header",children:v.jsx("span",{children:"📊 Output"})}),v.jsxs("div",{className:"ide-results-content",children:[d&&v.jsx(Y1,{imageData:d}),h?v.jsx(q1,{text:h}):!d&&v.jsx("div",{className:"ide-no-output",children:'Click "Run Program" to see results here'})]})]})]})}function B1(){const[n,e]=I.useState(null),[t,a]=I.useState(!0),[i,l]=I.useState("正在加载 Python 环境...");return I.useEffect(()=>{async function o(){try{l("正在加载 Pyodide...（首次较慢，后续会缓存）");const r=document.createElement("script");r.src="https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js",r.async=!0,r.onload=async()=>{const s=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"});l("📦 正在加载 NumPy 和 Matplotlib..."),await s.loadPackage(["numpy","matplotlib"]),await s.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
          `),e(s),a(!1),console.log("Pyodide loaded successfully")},document.body.appendChild(r)}catch(r){l("❌ 加载失败: "+r.message),console.error("Failed to load Pyodide:",r)}}o()},[]),t?v.jsx("div",{className:"app",children:v.jsxs("div",{style:{padding:"3rem",textAlign:"center"},children:[v.jsx("h1",{children:"Optics & Berkeley Extension Programs"}),v.jsx("p",{style:{color:"#6b7280",margin:"1rem 0"},children:"基于 React + Pyodide 的光学程序集"}),v.jsxs("div",{style:{fontSize:"1.2rem",color:"#9ca3af",marginTop:"2rem"},children:["⏳ ",i]})]})}):v.jsx("div",{className:"app",children:v.jsxs(h1,{children:[v.jsx(qa,{path:"/",element:v.jsx(E1,{})}),v.jsx(qa,{path:"/program/:programId",element:v.jsx(X1,{pyodide:n})}),v.jsx(qa,{path:"*",element:v.jsx(d1,{to:"/",replace:!0})})]})})}function X1({pyodide:n}){const{programId:e}=Qd(),t=ja.find(a=>a.id===e);return t?v.jsxs("div",{children:[v.jsxs("div",{className:"header",children:[v.jsx(ao,{to:"/",className:"back-link",children:"← 返回列表"}),v.jsx("h1",{children:t.title}),v.jsx("p",{className:"subtitle",children:t.description})]}),v.jsx(j1,{pyodide:n,program:t})]}):v.jsxs("div",{className:"error-page",children:[v.jsx("h1",{children:"程序未找到"}),v.jsx(ao,{to:"/",children:"返回首页"})]})}rl.createRoot(document.getElementById("root")).render(v.jsx(Rs.StrictMode,{children:v.jsx(v1,{children:v.jsx(B1,{})})}));
