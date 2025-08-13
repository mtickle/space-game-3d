(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function FS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function HS(){if(L_)return No;L_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=n,No.jsxs=n,No}var N_;function GS(){return N_||(N_=1,uh.exports=HS()),uh.exports}var re=GS(),fh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function VS(){if(O_)return le;O_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function M(w,Q,pt){this.props=w,this.context=Q,this.refs=R,this.updater=pt||S}M.prototype.isReactComponent={},M.prototype.setState=function(w,Q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Q,"setState")},M.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=M.prototype;function I(w,Q,pt){this.props=w,this.context=Q,this.refs=R,this.updater=pt||S}var O=I.prototype=new _;O.constructor=I,E(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function H(w,Q,pt,xt,Rt,it){return pt=it.ref,{$$typeof:r,type:w,key:Q,ref:pt!==void 0?pt:null,props:it}}function K(w,Q){return H(w.type,Q,void 0,void 0,void 0,w.props)}function U(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function C(w){var Q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(pt){return Q[pt]})}var B=/\/+/g;function $(w,Q){return typeof w=="object"&&w!==null&&w.key!=null?C(""+w.key):Q.toString(36)}function J(){}function ot(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(J,J):(w.status="pending",w.then(function(Q){w.status==="pending"&&(w.status="fulfilled",w.value=Q)},function(Q){w.status==="pending"&&(w.status="rejected",w.reason=Q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function nt(w,Q,pt,xt,Rt){var it=typeof w;(it==="undefined"||it==="boolean")&&(w=null);var dt=!1;if(w===null)dt=!0;else switch(it){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(w.$$typeof){case r:case t:dt=!0;break;case g:return dt=w._init,nt(dt(w._payload),Q,pt,xt,Rt)}}if(dt)return Rt=Rt(w),dt=xt===""?"."+$(w,0):xt,D(Rt)?(pt="",dt!=null&&(pt=dt.replace(B,"$&/")+"/"),nt(Rt,Q,pt,"",function(Lt){return Lt})):Rt!=null&&(U(Rt)&&(Rt=K(Rt,pt+(Rt.key==null||w&&w.key===Rt.key?"":(""+Rt.key).replace(B,"$&/")+"/")+dt)),Q.push(Rt)),1;dt=0;var _t=xt===""?".":xt+":";if(D(w))for(var Mt=0;Mt<w.length;Mt++)xt=w[Mt],it=_t+$(xt,Mt),dt+=nt(xt,Q,pt,it,Rt);else if(Mt=y(w),typeof Mt=="function")for(w=Mt.call(w),Mt=0;!(xt=w.next()).done;)xt=xt.value,it=_t+$(xt,Mt++),dt+=nt(xt,Q,pt,it,Rt);else if(it==="object"){if(typeof w.then=="function")return nt(ot(w),Q,pt,xt,Rt);throw Q=String(w),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return dt}function L(w,Q,pt){if(w==null)return w;var xt=[],Rt=0;return nt(w,xt,"","",function(it){return Q.call(pt,it,Rt++)}),xt}function Y(w){if(w._status===-1){var Q=w._result;Q=Q(),Q.then(function(pt){(w._status===0||w._status===-1)&&(w._status=1,w._result=pt)},function(pt){(w._status===0||w._status===-1)&&(w._status=2,w._result=pt)}),w._status===-1&&(w._status=0,w._result=Q)}if(w._status===1)return w._result.default;throw w._result}var X=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function mt(){}return le.Children={map:L,forEach:function(w,Q,pt){L(w,function(){Q.apply(this,arguments)},pt)},count:function(w){var Q=0;return L(w,function(){Q++}),Q},toArray:function(w){return L(w,function(Q){return Q})||[]},only:function(w){if(!U(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},le.Component=M,le.Fragment=n,le.Profiler=l,le.PureComponent=I,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(w){return z.H.useMemoCache(w)}},le.cache=function(w){return function(){return w.apply(null,arguments)}},le.cloneElement=function(w,Q,pt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var xt=E({},w.props),Rt=w.key,it=void 0;if(Q!=null)for(dt in Q.ref!==void 0&&(it=void 0),Q.key!==void 0&&(Rt=""+Q.key),Q)!V.call(Q,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&Q.ref===void 0||(xt[dt]=Q[dt]);var dt=arguments.length-2;if(dt===1)xt.children=pt;else if(1<dt){for(var _t=Array(dt),Mt=0;Mt<dt;Mt++)_t[Mt]=arguments[Mt+2];xt.children=_t}return H(w.type,Rt,void 0,void 0,it,xt)},le.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},le.createElement=function(w,Q,pt){var xt,Rt={},it=null;if(Q!=null)for(xt in Q.key!==void 0&&(it=""+Q.key),Q)V.call(Q,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Rt[xt]=Q[xt]);var dt=arguments.length-2;if(dt===1)Rt.children=pt;else if(1<dt){for(var _t=Array(dt),Mt=0;Mt<dt;Mt++)_t[Mt]=arguments[Mt+2];Rt.children=_t}if(w&&w.defaultProps)for(xt in dt=w.defaultProps,dt)Rt[xt]===void 0&&(Rt[xt]=dt[xt]);return H(w,it,void 0,void 0,null,Rt)},le.createRef=function(){return{current:null}},le.forwardRef=function(w){return{$$typeof:d,render:w}},le.isValidElement=U,le.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:Y}},le.memo=function(w,Q){return{$$typeof:p,type:w,compare:Q===void 0?null:Q}},le.startTransition=function(w){var Q=z.T,pt={};z.T=pt;try{var xt=w(),Rt=z.S;Rt!==null&&Rt(pt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(mt,X)}catch(it){X(it)}finally{z.T=Q}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(w){return z.H.use(w)},le.useActionState=function(w,Q,pt){return z.H.useActionState(w,Q,pt)},le.useCallback=function(w,Q){return z.H.useCallback(w,Q)},le.useContext=function(w){return z.H.useContext(w)},le.useDebugValue=function(){},le.useDeferredValue=function(w,Q){return z.H.useDeferredValue(w,Q)},le.useEffect=function(w,Q,pt){var xt=z.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(w,Q)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(w,Q,pt){return z.H.useImperativeHandle(w,Q,pt)},le.useInsertionEffect=function(w,Q){return z.H.useInsertionEffect(w,Q)},le.useLayoutEffect=function(w,Q){return z.H.useLayoutEffect(w,Q)},le.useMemo=function(w,Q){return z.H.useMemo(w,Q)},le.useOptimistic=function(w,Q){return z.H.useOptimistic(w,Q)},le.useReducer=function(w,Q,pt){return z.H.useReducer(w,Q,pt)},le.useRef=function(w){return z.H.useRef(w)},le.useState=function(w){return z.H.useState(w)},le.useSyncExternalStore=function(w,Q,pt){return z.H.useSyncExternalStore(w,Q,pt)},le.useTransition=function(){return z.H.useTransition()},le.version="19.1.1",le}var P_;function kd(){return P_||(P_=1,fh.exports=VS()),fh.exports}var Ue=kd();const kS=FS(Ue);class XS extends kS.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("Caught by Error Boundary:",t,n),this.setState({errorInfo:n})}render(){var t,n;if(this.state.hasError){const s=["“Mistakes are the portals of discovery.” — James Joyce","“Every flower must grow through dirt.” — Laurie Jean Sennott","“Even the darkest night will end and the sun will rise.” — Victor Hugo","“There are always flowers for those who want to see them.” — Henri Matisse","“Failure is simply the opportunity to begin again, this time more intelligently.” — Henry Ford"],l=s[Math.floor(Math.random()*s.length)];return re.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center text-center p-8",style:{background:"linear-gradient(to bottom, #d0f0c0 0%, #ffffff 100%)",fontFamily:"'Segoe UI', sans-serif"},children:[re.jsxs("div",{className:"bg-green-50 text-green-900 border border-green-200 rounded p-6 text-sm text-left overflow-x-auto whitespace-pre-wrap max-h-300 mt-6",children:[re.jsx("div",{className:"text-6xl mb-4",children:"🐝🌸"}),re.jsx("h1",{className:"text-2xl font-semibold text-green-800 mb-2",children:"Something fluttered out of place..."}),re.jsx("p",{className:"text-green-700 mb-4",children:"But growth comes with a few stumbles."}),re.jsx("blockquote",{className:"italic text-sm text-green-600 mb-4",children:l}),re.jsxs("div",{className:"bg-green-50 text-green-900 border border-green-200 rounded p-4 text-xs text-left overflow-x-auto whitespace-pre-wrap max-h-60",children:[re.jsx("strong",{children:"Error:"})," ",(t=this.state.error)==null?void 0:t.toString(),re.jsx("br",{}),re.jsx("br",{}),re.jsx("strong",{children:"Component Stack:"}),re.jsx("pre",{className:"mt-2",children:(n=this.state.errorInfo)==null?void 0:n.componentStack})]})]}),re.jsx("div",{className:"mt-8 opacity-50 text-sm",children:re.jsx("p",{children:"🌼 The meadow will bloom again 🌼"})})]})}return this.props.children}}var hh={exports:{}},Oo={},dh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function WS(){return z_||(z_=1,function(r){function t(L,Y){var X=L.length;L.push(Y);t:for(;0<X;){var mt=X-1>>>1,w=L[mt];if(0<l(w,Y))L[mt]=Y,L[X]=w,X=mt;else break t}}function n(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var Y=L[0],X=L.pop();if(X!==Y){L[0]=X;t:for(var mt=0,w=L.length,Q=w>>>1;mt<Q;){var pt=2*(mt+1)-1,xt=L[pt],Rt=pt+1,it=L[Rt];if(0>l(xt,X))Rt<w&&0>l(it,xt)?(L[mt]=it,L[Rt]=X,mt=Rt):(L[mt]=xt,L[pt]=X,mt=pt);else if(Rt<w&&0>l(it,X))L[mt]=it,L[Rt]=X,mt=Rt;else break t}}return Y}function l(L,Y){var X=L.sortIndex-Y.sortIndex;return X!==0?X:L.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,y=3,S=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var Y=n(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=L)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=n(p)}}function z(L){if(R=!1,D(L),!E)if(n(m)!==null)E=!0,V||(V=!0,$());else{var Y=n(p);Y!==null&&nt(z,Y.startTime-L)}}var V=!1,H=-1,K=5,U=-1;function C(){return M?!0:!(r.unstable_now()-U<K)}function B(){if(M=!1,V){var L=r.unstable_now();U=L;var Y=!0;try{t:{E=!1,R&&(R=!1,I(H),H=-1),S=!0;var X=y;try{e:{for(D(L),v=n(m);v!==null&&!(v.expirationTime>L&&C());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,y=v.priorityLevel;var w=mt(v.expirationTime<=L);if(L=r.unstable_now(),typeof w=="function"){v.callback=w,D(L),Y=!0;break e}v===n(m)&&s(m),D(L)}else s(m);v=n(m)}if(v!==null)Y=!0;else{var Q=n(p);Q!==null&&nt(z,Q.startTime-L),Y=!1}}break t}finally{v=null,y=X,S=!1}Y=void 0}}finally{Y?$():V=!1}}}var $;if(typeof O=="function")$=function(){O(B)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ot=J.port2;J.port1.onmessage=B,$=function(){ot.postMessage(null)}}else $=function(){_(B,0)};function nt(L,Y){H=_(function(){L(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(L){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var X=y;y=Y;try{return L()}finally{y=X}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=y;y=L;try{return Y()}finally{y=X}},r.unstable_scheduleCallback=function(L,Y,X){var mt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?mt+X:mt):X=mt,L){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=X+w,L={id:g++,callback:Y,priorityLevel:L,startTime:X,expirationTime:w,sortIndex:-1},X>mt?(L.sortIndex=X,t(p,L),n(m)===null&&L===n(p)&&(R?(I(H),H=-1):R=!0,nt(z,X-mt))):(L.sortIndex=w,t(m,L),E||S||(E=!0,V||(V=!0,$()))),L},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(L){var Y=y;return function(){var X=y;y=Y;try{return L.apply(this,arguments)}finally{y=X}}}}(ph)),ph}var B_;function YS(){return B_||(B_=1,dh.exports=WS()),dh.exports}var mh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function qS(){if(I_)return Dn;I_=1;var r=kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var F_;function ZS(){if(F_)return mh.exports;F_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),mh.exports=qS(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function jS(){if(H_)return Oo;H_=1;var r=YS(),t=kd(),n=ZS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),i;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,o=h;break}if(b===o){x=!0,o=u,a=h;break}b=b.sibling}if(!x){for(b=h.child;b;){if(b===a){x=!0,a=h,o=u;break}if(b===o){x=!0,o=h,a=u;break}b=b.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case V:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case O:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return i=e.displayName||null,i!==null?i:ot(e.type)||"Memo";case K:i=e._payload,e=e._init;try{return ot(e(i))}catch{}}return null}var nt=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},mt=[],w=-1;function Q(e){return{current:e}}function pt(e){0>w||(e.current=mt[w],mt[w]=null,w--)}function xt(e,i){w++,mt[w]=e.current,e.current=i}var Rt=Q(null),it=Q(null),dt=Q(null),_t=Q(null);function Mt(e,i){switch(xt(dt,i),xt(it,e),xt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=r_(i),e=o_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(Rt),xt(Rt,e)}function Lt(){pt(Rt),pt(it),pt(dt)}function $t(e){e.memoizedState!==null&&xt(_t,e);var i=Rt.current,a=o_(i,e.type);i!==a&&(xt(it,e),xt(Rt,a))}function Se(e){it.current===e&&(pt(Rt),pt(it)),_t.current===e&&(pt(_t),wo._currentValue=X)}var pe=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,Me=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,Te=r.unstable_requestPaint,Ht=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Gt=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,N=r.unstable_IdlePriority,T=r.log,at=r.unstable_setDisableYieldValue,ft=null,St=null;function ut(e){if(typeof T=="function"&&at(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(ft,e)}catch{}}var Bt=Math.clz32?Math.clz32:qt,wt=Math.log,Wt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(wt(e)/Wt|0)|0}var Et=256,Nt=4194304;function jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?u=jt(o):(x&=b,x!==0?u=jt(x):a||(a=b&~e,a!==0&&(u=jt(a))))):(b=o&~h,b!==0?u=jt(b):x!==0?u=jt(x):a||(a=o&~e,a!==0&&(u=jt(a)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:u}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Ct(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function It(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,i,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Bt(a),vt=1<<ht;b[ht]=0,P[ht]=-1;var st=et[ht];if(st!==null)for(et[ht]=null,ht=0;ht<st.length;ht++){var rt=st[ht];rt!==null&&(rt.lane&=-536870913)}a&=~vt}o!==0&&yt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~i))}function yt(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Bt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function kt(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function mi(e,i){var a=Y.p;try{return Y.p=e,i()}finally{Y.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,$e="__reactProps$"+un,Ri="__reactContainer$"+un,As="__reactEvents$"+un,rl="__reactListeners$"+un,Rs="__reactHandles$"+un,Fr="__reactResources$"+un,wi="__reactMarker$"+un;function ws(e){delete e[fn],delete e[$e],delete e[As],delete e[rl],delete e[Rs]}function Hi(e){var i=e[fn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ri]||a[fn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=f_(e);e!==null;){if(a=e[fn])return a;e=f_(e)}return i}e=a,a=e.parentNode}return null}function fa(e){if(e=e[fn]||e[Ri]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function qa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function ha(e){var i=e[Fr];return i||(i=e[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function rn(e){e[wi]=!0}var ol=new Set,ll={};function A(e,i){q(e,i),q(e+"Capture",i)}function q(e,i){for(ll[e]=i,e=0;e<i.length;e++)ol.add(i[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},j={};function bt(e){return pe.call(j,e)?!0:pe.call(ct,e)?!1:lt.test(e)?j[e]=!0:(ct[e]=!0,!1)}function Ut(e,i,a){if(bt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Ft(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ot(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var Jt,ee;function Yt(e){if(Jt===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Jt=i&&i[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+ee}var ue=!1;function Ae(e,i){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(rt){var st=rt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(rt){st=rt}e.call(vt.prototype)}}else{try{throw Error()}catch(rt){st=rt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(rt){if(rt&&st&&typeof rt.stack=="string")return[rt.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],b=h[1];if(x&&b){var P=x.split(`
`),et=b.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===et.length)for(o=P.length-1,u=et.length-1;1<=o&&0<=u&&P[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==et[u]){var ht=`
`+P[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Ze(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Yt("Activity");default:return""}}function Pe(e){try{var i="";do i+=Ze(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(e){var i=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){o=""+x,h.call(this,x)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function _e(e){e._valueTracker||(e._valueTracker=qe(e))}function Rn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function _n(e){return e.replace(Nn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ve(e,i,a,o,u,h,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),i!=null?x==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),i!=null?wn(e,x,fe(i)):a!=null?wn(e,x,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function On(e,i,a,o,u,h,x,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||i!=null))return;a=a!=null?""+fe(a):"",i=i!=null?""+fe(i):a,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function wn(e,i,a){i==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Mn(e,i,a){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+fe(a):""}function Cs(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(nt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=fe(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Hn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rp(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||zv.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function op(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&rp(e,u,o)}else for(var h in i)i.hasOwnProperty(h)&&rp(e,h,i[h])}function lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return Iv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var cu=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function lp(e){var i=fa(e);if(i&&(e=i.stateNode)){var a=e[$e]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ve(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[$e]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Rn(o)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&tn(e,!!a.multiple,i,!1)}}}var fu=!1;function cp(e,i,a){if(fu)return e(i,a);fu=!0;try{var o=e(i);return o}finally{if(fu=!1,(Ds!==null||Us!==null)&&(Zl(),Ds&&(i=Ds,e=Us,Us=Ds=null,lp(i),e)))for(i=0;i<e.length;i++)lp(e[i])}}function Hr(e,i){var a=e.stateNode;if(a===null)return null;var o=a[$e]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Gi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{hu=!1}var da=null,du=null,ul=null;function up(){if(ul)return ul;var e,i=du,a=i.length,o,u="value"in da?da.value:da.textContent,h=u.length;for(e=0;e<a&&i[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&i[a-o]===u[h-o];o++);return ul=u.slice(e,1<o?1-o:void 0)}function fl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function fp(){return!1}function Gn(e){function i(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?hl:fp,this.isPropagationStopped=fp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),i}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Gn(Za),Vr=g({},Za,{view:0,detail:0}),Fv=Gn(Vr),pu,mu,kr,pl=g({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(pu=e.screenX-kr.screenX,mu=e.screenY-kr.screenY):mu=pu=0,kr=e),pu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),hp=Gn(pl),Hv=g({},pl,{dataTransfer:0}),Gv=Gn(Hv),Vv=g({},Vr,{relatedTarget:0}),gu=Gn(Vv),kv=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Gn(kv),Wv=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yv=Gn(Wv),qv=g({},Za,{data:0}),dp=Gn(qv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Kv[e])?!!i[e]:!1}function _u(){return Qv}var Jv=g({},Vr,{key:function(e){if(e.key){var i=Zv[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$v=Gn(Jv),ty=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Gn(ty),ey=g({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),ny=Gn(ey),iy=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=Gn(iy),sy=g({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Gn(sy),oy=g({},Za,{newState:0,oldState:0}),ly=Gn(oy),cy=[9,13,27,32],vu=Gi&&"CompositionEvent"in window,Xr=null;Gi&&"documentMode"in document&&(Xr=document.documentMode);var uy=Gi&&"TextEvent"in window&&!Xr,mp=Gi&&(!vu||Xr&&8<Xr&&11>=Xr),gp=" ",_p=!1;function vp(e,i){switch(e){case"keyup":return cy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ls=!1;function fy(e,i){switch(e){case"compositionend":return yp(i);case"keypress":return i.which!==32?null:(_p=!0,gp);case"textInput":return e=i.data,e===gp&&_p?null:e;default:return null}}function hy(e,i){if(Ls)return e==="compositionend"||!vu&&vp(e,i)?(e=up(),ul=du=da=null,Ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mp&&i.locale!=="ko"?null:i.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!dy[e.type]:i==="textarea"}function xp(e,i,a,o){Ds?Us?Us.push(o):Us=[o]:Ds=o,i=tc(i,"onChange"),0<i.length&&(a=new dl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Wr=null,Yr=null;function py(e){e_(e,0)}function ml(e){var i=qa(e);if(Rn(i))return e}function Mp(e,i){if(e==="change")return i}var Ep=!1;if(Gi){var yu;if(Gi){var Su="oninput"in document;if(!Su){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),Su=typeof Tp.oninput=="function"}yu=Su}else yu=!1;Ep=yu&&(!document.documentMode||9<document.documentMode)}function bp(){Wr&&(Wr.detachEvent("onpropertychange",Ap),Yr=Wr=null)}function Ap(e){if(e.propertyName==="value"&&ml(Yr)){var i=[];xp(i,Yr,e,uu(e)),cp(py,i)}}function my(e,i,a){e==="focusin"?(bp(),Wr=i,Yr=a,Wr.attachEvent("onpropertychange",Ap)):e==="focusout"&&bp()}function gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Yr)}function _y(e,i){if(e==="click")return ml(i)}function vy(e,i){if(e==="input"||e==="change")return ml(i)}function yy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Yn=typeof Object.is=="function"?Object.is:yy;function qr(e,i){if(Yn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!pe.call(i,u)||!Yn(e[u],i[u]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,i){var a=Rp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rp(a)}}function Cp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Cp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=gi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=gi(e.document)}return i}function xu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Sy=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,Mu=null,Zr=null,Eu=!1;function Up(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Ns==null||Ns!==gi(o)||(o=Ns,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&qr(Zr,o)||(Zr=o,o=tc(Mu,"onSelect"),0<o.length&&(i=new dl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Ns)))}function ja(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Os={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Tu={},Lp={};Gi&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ka(e){if(Tu[e])return Tu[e];if(!Os[e])return e;var i=Os[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lp)return Tu[e]=i[a];return e}var Np=Ka("animationend"),Op=Ka("animationiteration"),Pp=Ka("animationstart"),xy=Ka("transitionrun"),My=Ka("transitionstart"),Ey=Ka("transitioncancel"),zp=Ka("transitionend"),Bp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function _i(e,i){Bp.set(e,i),A(i,[e])}var Ip=new WeakMap;function ai(e,i){if(typeof e=="object"&&e!==null){var a=Ip.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Pe(i)},Ip.set(e,i),i)}return{value:e,source:i,stack:Pe(i)}}var si=[],Ps=0,Au=0;function gl(){for(var e=Ps,i=Au=Ps=0;i<e;){var a=si[i];si[i++]=null;var o=si[i];si[i++]=null;var u=si[i];si[i++]=null;var h=si[i];if(si[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Fp(a,u,h)}}function _l(e,i,a,o){si[Ps++]=e,si[Ps++]=i,si[Ps++]=a,si[Ps++]=o,Au|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ru(e,i,a,o){return _l(e,i,a,o),vl(e)}function zs(e,i){return _l(e,null,null,i),vl(e)}function Fp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&i!==null&&(u=31-Bt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),h):null}function vl(e){if(50<So)throw So=0,Of=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Bs={};function Ty(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,i,a,o){return new Ty(e,i,a,o)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,i){var a=e.alternate;return a===null?(a=qn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function yl(e,i,a,o,u,h){var x=0;if(o=e,typeof e=="function")wu(e)&&(x=1);else if(typeof e=="string")x=AS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=qn(31,a,i,u),e.elementType=U,e.lanes=h,e;case E:return Qa(a.children,u,h,i);case R:x=8,u|=24;break;case M:return e=qn(12,a,i,u|2),e.elementType=M,e.lanes=h,e;case z:return e=qn(13,a,i,u),e.elementType=z,e.lanes=h,e;case V:return e=qn(19,a,i,u),e.elementType=V,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:x=10;break t;case I:x=9;break t;case D:x=11;break t;case H:x=14;break t;case K:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=qn(x,a,i,u),i.elementType=e,i.type=o,i.lanes=h,i}function Qa(e,i,a,o){return e=qn(7,e,o,i),e.lanes=a,e}function Cu(e,i,a){return e=qn(6,e,null,i),e.lanes=a,e}function Du(e,i,a){return i=qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Is=[],Fs=0,Sl=null,xl=0,ri=[],oi=0,Ja=null,ki=1,Xi="";function $a(e,i){Is[Fs++]=xl,Is[Fs++]=Sl,Sl=e,xl=i}function Gp(e,i,a){ri[oi++]=ki,ri[oi++]=Xi,ri[oi++]=Ja,Ja=e;var o=ki;e=Xi;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var h=32-Bt(i)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ki=1<<32-Bt(i)+u|a<<u|o,Xi=h+e}else ki=1<<h|a<<u|o,Xi=e}function Uu(e){e.return!==null&&($a(e,1),Gp(e,1,0))}function Lu(e){for(;e===Sl;)Sl=Is[--Fs],Is[Fs]=null,xl=Is[--Fs],Is[Fs]=null;for(;e===Ja;)Ja=ri[--oi],ri[oi]=null,Xi=ri[--oi],ri[oi]=null,ki=ri[--oi],ri[oi]=null}var Pn=null,en=null,Ce=!1,ts=null,Ci=!1,Nu=Error(s(519));function es(e){var i=Error(s(418,""));throw Qr(ai(i,e)),Nu}function Vp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[fn]=e,i[$e]=o,a){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ye(Mo[a],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),On(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_e(i);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),Cs(i,o.value,o.defaultValue,o.children),_e(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||s_(i.textContent,a)?(o.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),o.onScroll!=null&&ye("scroll",i),o.onScrollEnd!=null&&ye("scrollend",i),o.onClick!=null&&(i.onclick=ec),i=!0):i=!1,i||es(e)}function kp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Pn=Pn.return}}function jr(e){if(e!==Pn)return!1;if(!Ce)return kp(e),Ce=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&en&&es(e),kp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){en=yi(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,Ca(e.type)?(e=th,th=null,en=e):en=i):en=Pn?yi(e.stateNode.nextSibling):null;return!0}function Kr(){en=Pn=null,Ce=!1}function Xp(){var e=ts;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),ts=null),e}function Qr(e){ts===null?ts=[e]:ts.push(e)}var Ou=Q(null),ns=null,Wi=null;function pa(e,i,a){xt(Ou,i._currentValue),i._currentValue=a}function Yi(e){e._currentValue=Ou.current,pt(Ou)}function Pu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function zu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=u;for(var P=0;P<i.length;P++)if(b.context===i[P]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),Pu(h.return,a,e),o||(x=null);break t}h=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Pu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Jr(e,i,a,o){e=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var b=u.type;Yn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===_t.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&zu(i,e,a,o),i.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Wp(ns,e)}function El(e,i){return ns===null&&is(e),Wp(e,i)}function Wp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return a}var by=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},Ay=r.unstable_scheduleCallback,Ry=r.unstable_NormalPriority,hn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new by,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&Ay(Ry,function(){e.controller.abort()})}var to=null,Iu=0,Hs=0,Gs=null;function wy(e,i){if(to===null){var a=to=[];Iu=0,Hs=Gf(),Gs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,i.then(Yp,Yp),i}function Yp(){if(--Iu===0&&to!==null){Gs!==null&&(Gs.status="fulfilled");var e=to;to=null,Hs=0,Gs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Cy(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=L.S;L.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&wy(e,i),qp!==null&&qp(e,i)};var as=Q(null);function Fu(){var e=as.current;return e!==null?e:Ye.pooledCache}function Tl(e,i){i===null?xt(as,as.current):xt(as,i.pool)}function Zp(){var e=Fu();return e===null?null:{parent:hn._currentValue,pool:e}}var eo=Error(s(460)),jp=Error(s(474)),bl=Error(s(542)),Hu={then:function(){}};function Kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Al(){}function Qp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Al,Al),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$p(e),e;default:if(typeof i.status=="string")i.then(Al,Al);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$p(e),e}throw no=i,eo}}var no=null;function Jp(){if(no===null)throw Error(s(459));var e=no;return no=null,e}function $p(e){if(e===eo||e===bl)throw Error(s(483))}var ma=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=vl(e),Fp(e,null,a),i}return _l(e,o,i,a),vl(e)}function io(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,kt(e,a)}}function ku(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Xu=!1;function ao(){if(Xu){var e=Gs;if(e!==null)throw e}}function so(e,i,a,o){Xu=!1;var u=e.updateQueue;ma=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var P=b,et=P.next;P.next=null,x===null?h=et:x.next=et,x=P;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==x&&(b===null?ht.firstBaseUpdate=et:b.next=et,ht.lastBaseUpdate=P))}if(h!==null){var vt=u.baseState;x=0,ht=et=P=null,b=h;do{var st=b.lane&-536870913,rt=st!==b.lane;if(rt?(Ee&st)===st:(o&st)===st){st!==0&&st===Hs&&(Xu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ie=e,te=b;st=i;var Ie=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){vt=ie.call(Ie,vt,st);break t}vt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,st=typeof ie=="function"?ie.call(Ie,vt,st):ie,st==null)break t;vt=g({},vt,st);break t;case 2:ma=!0}}st=b.callback,st!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[st]:rt.push(st))}else rt={lane:st,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(et=ht=rt,P=vt):ht=ht.next=rt,x|=st;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;rt=b,b=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ht===null&&(P=vt),u.baseState=P,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),ba|=x,e.lanes=x,e.memoizedState=vt}}function tm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function em(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tm(a[e],i)}var Vs=Q(null),Rl=Q(0);function nm(e,i){e=$i,xt(Rl,e),xt(Vs,i),$i=e|i.baseLanes}function Wu(){xt(Rl,$i),xt(Vs,Vs.current)}function Yu(){$i=Rl.current,pt(Vs),pt(Rl)}var va=0,me=null,ze=null,on=null,wl=!1,ks=!1,ss=!1,Cl=0,ro=0,Xs=null,Dy=0;function an(){throw Error(s(321))}function qu(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Yn(e[a],i[a]))return!1;return!0}function Zu(e,i,a,o,u,h){return va=h,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=e===null||e.memoizedState===null?Fm:Hm,ss=!1,h=a(o,u),ss=!1,ks&&(h=am(i,a,o,u)),im(e),h}function im(e){L.H=Pl;var i=ze!==null&&ze.next!==null;if(va=0,on=ze=me=null,wl=!1,ro=0,Xs=null,i)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&Ml(e)&&(vn=!0))}function am(e,i,a,o){me=e;var u=0;do{if(ks&&(Xs=null),ro=0,ks=!1,25<=u)throw Error(s(301));if(u+=1,on=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}L.H=By,h=i(a,o)}while(ks);return h}function Uy(){var e=L.H,i=e.useState()[0];return i=typeof i.then=="function"?oo(i):i,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(me.flags|=1024),i}function ju(){var e=Cl!==0;return Cl=0,e}function Ku(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Qu(e){if(wl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}wl=!1}va=0,on=ze=me=null,ks=!1,ro=Cl=0,Xs=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?me.memoizedState=on=e:on=on.next=e,on}function ln(){if(ze===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var i=on===null?me.memoizedState:on.next;if(i!==null)on=i,ze=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},on===null?me.memoizedState=on=e:on=on.next=e}return on}function Ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var i=ro;return ro+=1,Xs===null&&(Xs=[]),e=Qp(Xs,e,i),i=me,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?Fm:Hm),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===O)return Cn(e)}throw Error(s(438,String(e)))}function $u(e){var i=null,a=me.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ju(),me.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=C;return i.index++,a}function qi(e,i){return typeof i=="function"?i(e):i}function Ul(e){var i=ln();return tf(i,ze,e)}function tf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}i.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{i=u.next;var b=x=null,P=null,et=i,ht=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(Ee&vt)===vt:(va&vt)===vt){var st=et.revertLane;if(st===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Hs&&(ht=!0);else if((va&st)===st){et=et.next,st===Hs&&(ht=!0);continue}else vt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},P===null?(b=P=vt,x=h):P=P.next=vt,me.lanes|=st,ba|=st;vt=et.action,ss&&a(h,vt),h=et.hasEagerState?et.eagerState:a(h,vt)}else st={lane:vt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},P===null?(b=P=st,x=h):P=P.next=st,me.lanes|=vt,ba|=vt;et=et.next}while(et!==null&&et!==i);if(P===null?x=h:P.next=b,!Yn(h,e.memoizedState)&&(vn=!0,ht&&(a=Gs,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ef(e){var i=ln(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Yn(h,i.memoizedState)||(vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,o]}function sm(e,i,a){var o=me,u=ln(),h=Ce;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=i();var x=!Yn((ze||u).memoizedState,a);x&&(u.memoizedState=a,vn=!0),u=u.queue;var b=lm.bind(null,o,u,e);if(lo(2048,8,b,[e]),u.getSnapshot!==i||x||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Ws(9,Ll(),om.bind(null,o,u,a,i),null),Ye===null)throw Error(s(349));h||(va&124)!==0||rm(o,i,a)}return a}function rm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=me.updateQueue,i===null?(i=Ju(),me.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function om(e,i,a,o){i.value=a,i.getSnapshot=o,cm(i)&&um(e)}function lm(e,i,a){return a(function(){cm(i)&&um(e)})}function cm(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Yn(e,a)}catch{return!0}}function um(e){var i=zs(e,2);i!==null&&Jn(i,e,2)}function nf(e){var i=Vn();if(typeof e=="function"){var a=e;if(e=a(),ss){ut(!0);try{a()}finally{ut(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},i}function fm(e,i,a,o){return e.baseState=a,tf(e,ze,typeof o=="function"?o:qi)}function Ly(e,i,a,o,u){if(Ol(e))throw Error(s(485));if(e=i.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};L.T!==null?a(!0):h.isTransition=!1,o(h),a=i.pending,a===null?(h.next=i.pending=h,hm(i,h)):(h.next=a.next,i.pending=a.next=h)}}function hm(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var h=L.T,x={};L.T=x;try{var b=a(u,o),P=L.S;P!==null&&P(x,b),dm(e,i,b)}catch(et){af(e,i,et)}finally{L.T=h}}else try{h=a(u,o),dm(e,i,h)}catch(et){af(e,i,et)}}function dm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){pm(e,i,o)},function(o){return af(e,i,o)}):pm(e,i,a)}function pm(e,i,a){i.status="fulfilled",i.value=a,mm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,hm(e,a)))}function af(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,mm(i),i=i.next;while(i!==o)}e.action=null}function mm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function gm(e,i){return i}function _m(e,i){if(Ce){var a=Ye.formState;if(a!==null){t:{var o=me;if(Ce){if(en){e:{for(var u=en,h=Ci;u.nodeType!==8;){if(!h){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){en=yi(u.nextSibling),o=u.data==="F!";break t}}es(o)}o=!1}o&&(i=a[0])}}return a=Vn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:i},a.queue=o,a=zm.bind(null,me,o),o.dispatch=a,o=nf(!1),h=cf.bind(null,me,!1,o.queue),o=Vn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=Ly.bind(null,me,u,h,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function vm(e){var i=ln();return ym(i,ze,e)}function ym(e,i,a){if(i=tf(e,i,gm)[0],e=Ul(qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=oo(i)}catch(x){throw x===eo?bl:x}else o=i;i=ln();var u=i.queue,h=u.dispatch;return a!==i.memoizedState&&(me.flags|=2048,Ws(9,Ll(),Ny.bind(null,u,a),null)),[o,h,e]}function Ny(e,i){e.action=i}function Sm(e){var i=ln(),a=ze;if(a!==null)return ym(i,a,e);ln(),i=i.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Ws(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=me.updateQueue,i===null&&(i=Ju(),me.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Ll(){return{destroy:void 0,resource:void 0}}function xm(){return ln().memoizedState}function Nl(e,i,a,o){var u=Vn();o=o===void 0?null:o,me.flags|=e,u.memoizedState=Ws(1|i,Ll(),a,o)}function lo(e,i,a,o){var u=ln();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&qu(o,ze.memoizedState.deps)?u.memoizedState=Ws(i,h,a,o):(me.flags|=e,u.memoizedState=Ws(1|i,h,a,o))}function Mm(e,i){Nl(8390656,8,e,i)}function Em(e,i){lo(2048,8,e,i)}function Tm(e,i){return lo(4,2,e,i)}function bm(e,i){return lo(4,4,e,i)}function Am(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Rm(e,i,a){a=a!=null?a.concat([e]):null,lo(4,4,Am.bind(null,i,e),a)}function sf(){}function wm(e,i){var a=ln();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&qu(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Cm(e,i){var a=ln();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&qu(i,o[1]))return o[0];if(o=e(),ss){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,i],o}function rf(e,i,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Lg(),me.lanes|=e,ba|=e,a)}function Dm(e,i,a,o){return Yn(a,i)?a:Vs.current!==null?(e=rf(e,a,o),Yn(e,i)||(vn=!0),e):(va&42)===0?(vn=!0,e.memoizedState=a):(e=Lg(),me.lanes|=e,ba|=e,i)}function Um(e,i,a,o,u){var h=Y.p;Y.p=h!==0&&8>h?h:8;var x=L.T,b={};L.T=b,cf(e,!1,i,a);try{var P=u(),et=L.S;if(et!==null&&et(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=Cy(P,o);co(e,i,ht,Qn(e))}else co(e,i,o,Qn(e))}catch(vt){co(e,i,{then:function(){},status:"rejected",reason:vt},Qn())}finally{Y.p=h,L.T=x}}function Oy(){}function of(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=Lm(e).queue;Um(e,u,i,X,a===null?Oy:function(){return Nm(e),a(o)})}function Lm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:X},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Nm(e){var i=Lm(e).next.queue;co(e,i,{},Qn())}function lf(){return Cn(wo)}function Om(){return ln().memoizedState}function Pm(){return ln().memoizedState}function Py(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Qn();e=ga(a);var o=_a(i,e,a);o!==null&&(Jn(o,i,a),io(o,i,a)),i={cache:Bu()},e.payload=i;return}i=i.return}}function zy(e,i,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Bm(i,a):(a=Ru(e,i,a,o),a!==null&&(Jn(a,e,o),Im(a,i,o)))}function zm(e,i,a){var o=Qn();co(e,i,a,o)}function co(e,i,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Bm(i,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var x=i.lastRenderedState,b=h(x,a);if(u.hasEagerState=!0,u.eagerState=b,Yn(b,x))return _l(e,i,u,0),Ye===null&&gl(),!1}catch{}finally{}if(a=Ru(e,i,u,o),a!==null)return Jn(a,e,o),Im(a,i,o),!0}return!1}function cf(e,i,a,o){if(o={lane:2,revertLane:Gf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(i)throw Error(s(479))}else i=Ru(e,a,o,2),i!==null&&Jn(i,e,2)}function Ol(e){var i=e.alternate;return e===me||i!==null&&i===me}function Bm(e,i){ks=wl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Im(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,kt(e,a)}}var Pl={readContext:Cn,use:Dl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Fm={readContext:Cn,use:Dl,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Cn,useEffect:Mm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,Am.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Nl(4194308,4,e,i)},useInsertionEffect:function(e,i){Nl(4,2,e,i)},useMemo:function(e,i){var a=Vn();i=i===void 0?null:i;var o=e();if(ss){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Vn();if(a!==void 0){var u=a(i);if(ss){ut(!0);try{a(i)}finally{ut(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=zy.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=nf(e);var i=e.queue,a=zm.bind(null,me,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,i){var a=Vn();return rf(a,e,i)},useTransition:function(){var e=nf(!1);return e=Um.bind(null,me,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=me,u=Vn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ye===null)throw Error(s(349));(Ee&124)!==0||rm(o,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,Mm(lm.bind(null,o,h,e),[e]),o.flags|=2048,Ws(9,Ll(),om.bind(null,o,h,a,i),null),a},useId:function(){var e=Vn(),i=Ye.identifierPrefix;if(Ce){var a=Xi,o=ki;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Cl++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Dy++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:lf,useFormState:_m,useActionState:_m,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=cf.bind(null,me,!0,a),a.dispatch=i,[e,i]},useMemoCache:$u,useCacheRefresh:function(){return Vn().memoizedState=Py.bind(null,me)}},Hm={readContext:Cn,use:Dl,useCallback:wm,useContext:Cn,useEffect:Em,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:Cm,useReducer:Ul,useRef:xm,useState:function(){return Ul(qi)},useDebugValue:sf,useDeferredValue:function(e,i){var a=ln();return Dm(a,ze.memoizedState,e,i)},useTransition:function(){var e=Ul(qi)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:oo(e),i]},useSyncExternalStore:sm,useId:Om,useHostTransitionStatus:lf,useFormState:vm,useActionState:vm,useOptimistic:function(e,i){var a=ln();return fm(a,ze,e,i)},useMemoCache:$u,useCacheRefresh:Pm},By={readContext:Cn,use:Dl,useCallback:wm,useContext:Cn,useEffect:Em,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:Cm,useReducer:ef,useRef:xm,useState:function(){return ef(qi)},useDebugValue:sf,useDeferredValue:function(e,i){var a=ln();return ze===null?rf(a,e,i):Dm(a,ze.memoizedState,e,i)},useTransition:function(){var e=ef(qi)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:oo(e),i]},useSyncExternalStore:sm,useId:Om,useHostTransitionStatus:lf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,i){var a=ln();return ze!==null?fm(a,ze,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Pm},Ys=null,uo=0;function zl(e){var i=uo;return uo+=1,Ys===null&&(Ys=[]),Qp(Ys,e,i)}function fo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Bl(e,i){throw i.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Gm(e){var i=e._init;return i(e._payload)}function Vm(e){function i(Z,k){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Vi(Z,k),Z.index=0,Z.sibling=null,Z}function h(Z,k,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,k,tt,gt){return k===null||k.tag!==6?(k=Cu(tt,Z.mode,gt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function P(Z,k,tt,gt){var Vt=tt.type;return Vt===E?ht(Z,k,tt.props.children,gt,tt.key):k!==null&&(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===K&&Gm(Vt)===k.type)?(k=u(k,tt.props),fo(k,tt),k.return=Z,k):(k=yl(tt.type,tt.key,tt.props,null,Z.mode,gt),fo(k,tt),k.return=Z,k)}function et(Z,k,tt,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=Du(tt,Z.mode,gt),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function ht(Z,k,tt,gt,Vt){return k===null||k.tag!==7?(k=Qa(tt,Z.mode,gt,Vt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function vt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Cu(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return tt=yl(k.type,k.key,k.props,null,Z.mode,tt),fo(tt,k),tt.return=Z,tt;case S:return k=Du(k,Z.mode,tt),k.return=Z,k;case K:var gt=k._init;return k=gt(k._payload),vt(Z,k,tt)}if(nt(k)||$(k))return k=Qa(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return vt(Z,zl(k),tt);if(k.$$typeof===O)return vt(Z,El(Z,k),tt);Bl(Z,k)}return null}function st(Z,k,tt,gt){var Vt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Vt!==null?null:b(Z,k,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===Vt?P(Z,k,tt,gt):null;case S:return tt.key===Vt?et(Z,k,tt,gt):null;case K:return Vt=tt._init,tt=Vt(tt._payload),st(Z,k,tt,gt)}if(nt(tt)||$(tt))return Vt!==null?null:ht(Z,k,tt,gt,null);if(typeof tt.then=="function")return st(Z,k,zl(tt),gt);if(tt.$$typeof===O)return st(Z,k,El(Z,tt),gt);Bl(Z,tt)}return null}function rt(Z,k,tt,gt,Vt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(tt)||null,b(k,Z,""+gt,Vt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Z=Z.get(gt.key===null?tt:gt.key)||null,P(k,Z,gt,Vt);case S:return Z=Z.get(gt.key===null?tt:gt.key)||null,et(k,Z,gt,Vt);case K:var ge=gt._init;return gt=ge(gt._payload),rt(Z,k,tt,gt,Vt)}if(nt(gt)||$(gt))return Z=Z.get(tt)||null,ht(k,Z,gt,Vt,null);if(typeof gt.then=="function")return rt(Z,k,tt,zl(gt),Vt);if(gt.$$typeof===O)return rt(Z,k,tt,El(k,gt),Vt);Bl(k,gt)}return null}function ie(Z,k,tt,gt){for(var Vt=null,ge=null,Zt=k,ne=k=0,Sn=null;Zt!==null&&ne<tt.length;ne++){Zt.index>ne?(Sn=Zt,Zt=null):Sn=Zt.sibling;var Re=st(Z,Zt,tt[ne],gt);if(Re===null){Zt===null&&(Zt=Sn);break}e&&Zt&&Re.alternate===null&&i(Z,Zt),k=h(Re,k,ne),ge===null?Vt=Re:ge.sibling=Re,ge=Re,Zt=Sn}if(ne===tt.length)return a(Z,Zt),Ce&&$a(Z,ne),Vt;if(Zt===null){for(;ne<tt.length;ne++)Zt=vt(Z,tt[ne],gt),Zt!==null&&(k=h(Zt,k,ne),ge===null?Vt=Zt:ge.sibling=Zt,ge=Zt);return Ce&&$a(Z,ne),Vt}for(Zt=o(Zt);ne<tt.length;ne++)Sn=rt(Zt,Z,ne,tt[ne],gt),Sn!==null&&(e&&Sn.alternate!==null&&Zt.delete(Sn.key===null?ne:Sn.key),k=h(Sn,k,ne),ge===null?Vt=Sn:ge.sibling=Sn,ge=Sn);return e&&Zt.forEach(function(Oa){return i(Z,Oa)}),Ce&&$a(Z,ne),Vt}function te(Z,k,tt,gt){if(tt==null)throw Error(s(151));for(var Vt=null,ge=null,Zt=k,ne=k=0,Sn=null,Re=tt.next();Zt!==null&&!Re.done;ne++,Re=tt.next()){Zt.index>ne?(Sn=Zt,Zt=null):Sn=Zt.sibling;var Oa=st(Z,Zt,Re.value,gt);if(Oa===null){Zt===null&&(Zt=Sn);break}e&&Zt&&Oa.alternate===null&&i(Z,Zt),k=h(Oa,k,ne),ge===null?Vt=Oa:ge.sibling=Oa,ge=Oa,Zt=Sn}if(Re.done)return a(Z,Zt),Ce&&$a(Z,ne),Vt;if(Zt===null){for(;!Re.done;ne++,Re=tt.next())Re=vt(Z,Re.value,gt),Re!==null&&(k=h(Re,k,ne),ge===null?Vt=Re:ge.sibling=Re,ge=Re);return Ce&&$a(Z,ne),Vt}for(Zt=o(Zt);!Re.done;ne++,Re=tt.next())Re=rt(Zt,Z,ne,Re.value,gt),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?ne:Re.key),k=h(Re,k,ne),ge===null?Vt=Re:ge.sibling=Re,ge=Re);return e&&Zt.forEach(function(IS){return i(Z,IS)}),Ce&&$a(Z,ne),Vt}function Ie(Z,k,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var Vt=tt.key;k!==null;){if(k.key===Vt){if(Vt=tt.type,Vt===E){if(k.tag===7){a(Z,k.sibling),gt=u(k,tt.props.children),gt.return=Z,Z=gt;break t}}else if(k.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===K&&Gm(Vt)===k.type){a(Z,k.sibling),gt=u(k,tt.props),fo(gt,tt),gt.return=Z,Z=gt;break t}a(Z,k);break}else i(Z,k);k=k.sibling}tt.type===E?(gt=Qa(tt.props.children,Z.mode,gt,tt.key),gt.return=Z,Z=gt):(gt=yl(tt.type,tt.key,tt.props,null,Z.mode,gt),fo(gt,tt),gt.return=Z,Z=gt)}return x(Z);case S:t:{for(Vt=tt.key;k!==null;){if(k.key===Vt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),gt=u(k,tt.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,k);break}else i(Z,k);k=k.sibling}gt=Du(tt,Z.mode,gt),gt.return=Z,Z=gt}return x(Z);case K:return Vt=tt._init,tt=Vt(tt._payload),Ie(Z,k,tt,gt)}if(nt(tt))return ie(Z,k,tt,gt);if($(tt)){if(Vt=$(tt),typeof Vt!="function")throw Error(s(150));return tt=Vt.call(tt),te(Z,k,tt,gt)}if(typeof tt.then=="function")return Ie(Z,k,zl(tt),gt);if(tt.$$typeof===O)return Ie(Z,k,El(Z,tt),gt);Bl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),gt=u(k,tt),gt.return=Z,Z=gt):(a(Z,k),gt=Cu(tt,Z.mode,gt),gt.return=Z,Z=gt),x(Z)):a(Z,k)}return function(Z,k,tt,gt){try{uo=0;var Vt=Ie(Z,k,tt,gt);return Ys=null,Vt}catch(Zt){if(Zt===eo||Zt===bl)throw Zt;var ge=qn(29,Zt,null,Z.mode);return ge.lanes=gt,ge.return=Z,ge}finally{}}}var qs=Vm(!0),km=Vm(!1),li=Q(null),Di=null;function ya(e){var i=e.alternate;xt(dn,dn.current&1),xt(li,e),Di===null&&(i===null||Vs.current!==null||i.memoizedState!==null)&&(Di=e)}function Xm(e){if(e.tag===22){if(xt(dn,dn.current),xt(li,e),Di===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Di=e)}}else Sa()}function Sa(){xt(dn,dn.current),xt(li,li.current)}function Zi(e){pt(li),Di===e&&(Di=null),pt(dn)}var dn=Q(0);function Il(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||$f(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function uf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:g({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ff={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Qn(),u=ga(o);u.payload=i,a!=null&&(u.callback=a),i=_a(e,u,o),i!==null&&(Jn(i,e,o),io(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Qn(),u=ga(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=_a(e,u,o),i!==null&&(Jn(i,e,o),io(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Qn(),o=ga(a);o.tag=2,i!=null&&(o.callback=i),i=_a(e,o,a),i!==null&&(Jn(i,e,a),io(i,e,a))}};function Wm(e,i,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):i.prototype&&i.prototype.isPureReactComponent?!qr(a,o)||!qr(u,h):!0}function Ym(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&ff.enqueueReplaceState(i,i.state,null)}function rs(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qm(e){Fl(e)}function Zm(e){console.error(e)}function jm(e){Fl(e)}function Hl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Km(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(e,i,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,i)},a}function Qm(e){return e=ga(e),e.tag=3,e}function Jm(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Km(i,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Km(i,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Iy(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Jr(i,a,u,!0),a=li.current,a!==null){switch(a.tag){case 13:return Di===null?zf():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Hu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),If(e,o,u)),!1;case 22:return a.flags|=65536,o===Hu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),If(e,o,u)),!1}throw Error(s(435,a.tag))}return If(e,o,u),zf(),!1}if(Ce)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Nu&&(e=Error(s(422),{cause:o}),Qr(ai(e,a)))):(o!==Nu&&(i=Error(s(423),{cause:o}),Qr(ai(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ai(o,a),u=hf(e.stateNode,o,u),ku(e,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=ai(h,a),yo===null?yo=[h]:yo.push(h),nn!==4&&(nn=2),i===null)return!0;o=ai(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=hf(a.stateNode,o,e),ku(a,e),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,e,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var $m=Error(s(461)),vn=!1;function En(e,i,a,o){i.child=e===null?km(i,null,a,o):qs(i,e.child,a,o)}function tg(e,i,a,o,u){a=a.render;var h=i.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return is(i),o=Zu(e,i,a,x,h,u),b=ju(),e!==null&&!vn?(Ku(e,i,u),ji(e,i,u)):(Ce&&b&&Uu(i),i.flags|=1,En(e,i,o,u),i.child)}function eg(e,i,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!wu(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,ng(e,i,h,o,u)):(e=yl(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!Sf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(x,o)&&e.ref===i.ref)return ji(e,i,u)}return i.flags|=1,e=Vi(h,o),e.ref=i.ref,e.return=i,i.child=e}function ng(e,i,a,o,u){if(e!==null){var h=e.memoizedProps;if(qr(h,o)&&e.ref===i.ref)if(vn=!1,i.pendingProps=o=h,Sf(e,u))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,ji(e,i,u)}return df(e,i,a,o,u)}function ig(e,i,a){var o=i.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;i.childLanes=h&~o}else i.childLanes=0,i.child=null;return ag(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(i,h!==null?h.cachePool:null),h!==null?nm(i,h):Wu(),Xm(i);else return i.lanes=i.childLanes=536870912,ag(e,i,h!==null?h.baseLanes|a:a,a)}else h!==null?(Tl(i,h.cachePool),nm(i,h),Sa(),i.memoizedState=null):(e!==null&&Tl(i,null),Wu(),Sa());return En(e,i,u,a),i.child}function ag(e,i,a,o){var u=Fu();return u=u===null?null:{parent:hn._currentValue,pool:u},i.memoizedState={baseLanes:a,cachePool:u},e!==null&&Tl(i,null),Wu(),Xm(i),e!==null&&Jr(e,i,o,!0),null}function Gl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function df(e,i,a,o,u){return is(i),a=Zu(e,i,a,o,void 0,u),o=ju(),e!==null&&!vn?(Ku(e,i,u),ji(e,i,u)):(Ce&&o&&Uu(i),i.flags|=1,En(e,i,a,u),i.child)}function sg(e,i,a,o,u,h){return is(i),i.updateQueue=null,a=am(i,o,a,u),im(e),o=ju(),e!==null&&!vn?(Ku(e,i,h),ji(e,i,h)):(Ce&&o&&Uu(i),i.flags|=1,En(e,i,a,h),i.child)}function rg(e,i,a,o,u){if(is(i),i.stateNode===null){var h=Bs,x=a.contextType;typeof x=="object"&&x!==null&&(h=Cn(x)),h=new a(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ff,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Gu(i),x=a.contextType,h.context=typeof x=="object"&&x!==null?Cn(x):Bs,h.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(uf(i,a,x,o),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&ff.enqueueReplaceState(h,h.state,null),so(i,o,h,u),ao(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var b=i.memoizedProps,P=rs(a,b);h.props=P;var et=h.context,ht=a.contextType;x=Bs,typeof ht=="object"&&ht!==null&&(x=Cn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||et!==x)&&Ym(i,h,o,x),ma=!1;var st=i.memoizedState;h.state=st,so(i,o,h,u),ao(),et=i.memoizedState,b||st!==et||ma?(typeof vt=="function"&&(uf(i,a,vt,o),et=i.memoizedState),(P=ma||Wm(i,a,P,o,st,et,x))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),h.props=o,h.state=et,h.context=x,o=P):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,Vu(e,i),x=i.memoizedProps,ht=rs(a,x),h.props=ht,vt=i.pendingProps,st=h.context,et=a.contextType,P=Bs,typeof et=="object"&&et!==null&&(P=Cn(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||st!==P)&&Ym(i,h,o,P),ma=!1,st=i.memoizedState,h.state=st,so(i,o,h,u),ao();var rt=i.memoizedState;x!==vt||st!==rt||ma||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof b=="function"&&(uf(i,a,b,o),rt=i.memoizedState),(ht=ma||Wm(i,a,ht,o,st,rt,P)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,rt,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,rt,P)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=rt),h.props=o,h.state=rt,h.context=P,o=ht):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,Gl(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=qs(i,e.child,null,u),i.child=qs(i,null,a,u)):En(e,i,a,u),i.memoizedState=h.state,e=i.child):e=ji(e,i,u),e}function og(e,i,a,o){return Kr(),i.flags|=256,En(e,i,a,o),i.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:Zp()}}function gf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ci),e}function lg(e,i,a){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(u?ya(i):Sa(),Ce){var b=en,P;if(P=b){t:{for(P=b,b=Ci;P.nodeType!==8;){if(!b){b=null;break t}if(P=yi(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(i.memoizedState={dehydrated:b,treeContext:Ja!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=b,P.return=i,i.child=P,Pn=i,en=null,P=!0):P=!1}P||es(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return $f(b)?i.lanes=32:i.lanes=536870912,null;Zi(i)}return b=o.children,o=o.fallback,u?(Sa(),u=i.mode,b=Vl({mode:"hidden",children:b},u),o=Qa(o,u,a,null),b.return=i,o.return=i,b.sibling=o,i.child=b,u=i.child,u.memoizedState=mf(a),u.childLanes=gf(e,x,a),i.memoizedState=pf,o):(ya(i),_f(i,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(h)i.flags&256?(ya(i),i.flags&=-257,i=vf(e,i,a)):i.memoizedState!==null?(Sa(),i.child=e.child,i.flags|=128,i=null):(Sa(),u=o.fallback,b=i.mode,o=Vl({mode:"visible",children:o.children},b),u=Qa(u,b,a,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,qs(i,e.child,null,a),o=i.child,o.memoizedState=mf(a),o.childLanes=gf(e,x,a),i.memoizedState=pf,i=u);else if(ya(i),$f(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(s(419)),o.stack="",o.digest=x,Qr({value:o,source:null,stack:null}),i=vf(e,i,a)}else if(vn||Jr(e,i,a,!1),x=(a&e.childLanes)!==0,vn||x){if(x=Ye,x!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(x.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,zs(e,o),Jn(x,e,o),$m;b.data==="$?"||zf(),i=vf(e,i,a)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=P.treeContext,en=yi(b.nextSibling),Pn=i,Ce=!0,ts=null,Ci=!1,e!==null&&(ri[oi++]=ki,ri[oi++]=Xi,ri[oi++]=Ja,ki=e.id,Xi=e.overflow,Ja=i),i=_f(i,o.children),i.flags|=4096);return i}return u?(Sa(),u=o.fallback,b=i.mode,P=e.child,et=P.sibling,o=Vi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,et!==null?u=Vi(et,u):(u=Qa(u,b,a,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,b=e.child.memoizedState,b===null?b=mf(a):(P=b.cachePool,P!==null?(et=hn._currentValue,P=P.parent!==et?{parent:et,pool:et}:P):P=Zp(),b={baseLanes:b.baseLanes|a,cachePool:P}),u.memoizedState=b,u.childLanes=gf(e,x,a),i.memoizedState=pf,o):(ya(i),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(x=i.deletions,x===null?(i.deletions=[e],i.flags|=16):x.push(e)),i.child=a,i.memoizedState=null,a)}function _f(e,i){return i=Vl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Vl(e,i){return e=qn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function vf(e,i,a){return qs(i,e.child,null,a),e=_f(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function cg(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Pu(e.return,i,a)}function yf(e,i,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function ug(e,i,a){var o=i.pendingProps,u=o.revealOrder,h=o.tail;if(En(e,i,o.children,a),o=dn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,i);else if(e.tag===19)cg(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(dn,o),u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),yf(i,!1,u,a,h);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Il(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(i,!0,a,null,h);break;case"together":yf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ji(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),ba|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Jr(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Vi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Sf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function Fy(e,i,a){switch(i.tag){case 3:Mt(i,i.stateNode.containerInfo),pa(i,hn,e.memoizedState.cache),Kr();break;case 27:case 5:$t(i);break;case 4:Mt(i,i.stateNode.containerInfo);break;case 10:pa(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(i),i.flags|=128,null):(a&i.child.childLanes)!==0?lg(e,i,a):(ya(i),e=ji(e,i,a),e!==null?e.sibling:null);ya(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Jr(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return ug(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(dn,dn.current),o)break;return null;case 22:case 23:return i.lanes=0,ig(e,i,a);case 24:pa(i,hn,e.memoizedState.cache)}return ji(e,i,a)}function fg(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!Sf(e,a)&&(i.flags&128)===0)return vn=!1,Fy(e,i,a);vn=(e.flags&131072)!==0}else vn=!1,Ce&&(i.flags&1048576)!==0&&Gp(i,xl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")wu(o)?(e=rs(o,e),i.tag=1,i=rg(null,i,o,e,a)):(i.tag=0,i=df(null,i,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){i.tag=11,i=tg(null,i,o,e,a);break t}else if(u===H){i.tag=14,i=eg(null,i,o,e,a);break t}}throw i=ot(o)||o,Error(s(306,i,""))}}return i;case 0:return df(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=rs(o,i.pendingProps),rg(e,i,o,u,a);case 3:t:{if(Mt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,Vu(e,i),so(i,o,null,a);var x=i.memoizedState;if(o=x.cache,pa(i,hn,o),o!==h.cache&&zu(i,[hn],a,!0),ao(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=og(e,i,o,a);break t}else if(o!==u){u=ai(Error(s(424)),i),Qr(u),i=og(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=yi(e.firstChild),Pn=i,Ce=!0,ts=null,Ci=!0,a=km(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kr(),o===u){i=ji(e,i,a);break t}En(e,i,o,a)}i=i.child}return i;case 26:return Gl(e,i),e===null?(a=m_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ce||(a=i.type,e=i.pendingProps,o=nc(dt.current).createElement(a),o[fn]=i,o[$e]=e,bn(o,a,e),rn(o),i.stateNode=o):i.memoizedState=m_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return $t(i),e===null&&Ce&&(o=i.stateNode=h_(i.type,i.pendingProps,dt.current),Pn=i,Ci=!0,u=en,Ca(i.type)?(th=u,en=yi(o.firstChild)):en=u),En(e,i,i.pendingProps.children,a),Gl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((u=o=en)&&(o=dS(o,i.type,i.pendingProps,Ci),o!==null?(i.stateNode=o,Pn=i,en=yi(o.firstChild),Ci=!1,u=!0):u=!1),u||es(i)),$t(i),u=i.type,h=i.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Kf(u,h)?o=null:x!==null&&Kf(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=Zu(e,i,Uy,null,null,a),wo._currentValue=u),Gl(e,i),En(e,i,o,a),i.child;case 6:return e===null&&Ce&&((e=a=en)&&(a=pS(a,i.pendingProps,Ci),a!==null?(i.stateNode=a,Pn=i,en=null,e=!0):e=!1),e||es(i)),null;case 13:return lg(e,i,a);case 4:return Mt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=qs(i,null,o,a):En(e,i,o,a),i.child;case 11:return tg(e,i,i.type,i.pendingProps,a);case 7:return En(e,i,i.pendingProps,a),i.child;case 8:return En(e,i,i.pendingProps.children,a),i.child;case 12:return En(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,pa(i,i.type,o.value),En(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,is(i),u=Cn(u),o=o(u),i.flags|=1,En(e,i,o,a),i.child;case 14:return eg(e,i,i.type,i.pendingProps,a);case 15:return ng(e,i,i.type,i.pendingProps,a);case 19:return ug(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Vl(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Vi(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ig(e,i,a);case 24:return is(i),o=Cn(hn),e===null?(u=Fu(),u===null&&(u=Ye,h=Bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),i.memoizedState={parent:o,cache:u},Gu(i),pa(i,hn,u)):((e.lanes&a)!==0&&(Vu(e,i),so(i,null,null,a),ao()),u=e.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),pa(i,hn,o)):(o=h.cache,pa(i,hn,o),o!==u.cache&&zu(i,[hn],a,!0))),En(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ki(e){e.flags|=4}function hg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!S_(i)){if(i=li.current,i!==null&&((Ee&4194048)===Ee?Di!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||i!==Di))throw no=Hu,jp;e.flags|=8192}}function kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?At():536870912,e.lanes|=i,Qs|=i)}function ho(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Hy(e,i,a){var o=i.pendingProps;switch(Lu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Yi(hn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jr(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xp())),Je(i),null;case 26:return a=i.memoizedState,e===null?(Ki(i),a!==null?(Je(i),hg(i,a)):(Je(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ki(i),Je(i),hg(i,a)):(Je(i),i.flags&=-16777217):(e.memoizedProps!==o&&Ki(i),Je(i),i.flags&=-16777217),null;case 27:Se(i),a=dt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Je(i),null}e=Rt.current,jr(i)?Vp(i):(e=h_(u,o,a),i.stateNode=e,Ki(i))}return Je(i),null;case 5:if(Se(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Je(i),null}if(e=Rt.current,jr(i))Vp(i);else{switch(u=nc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[fn]=i,e[$e]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=dt.current,jr(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||s_(e.nodeValue,a)),e||es(i)}else e=nc(e).createTextNode(o),e[fn]=i,i.stateNode=e}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=jr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=i}else Kr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=Xp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Zi(i),i):(Zi(i),null)}if(Zi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),kl(i,i.updateQueue),Je(i),null;case 4:return Lt(),e===null&&Wf(i.stateNode.containerInfo),Je(i),null;case 10:return Yi(i.type),Je(i),null;case 19:if(pt(dn),u=i.memoizedState,u===null)return Je(i),null;if(o=(i.flags&128)!==0,h=u.rendering,h===null)if(o)ho(u,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Il(e),h!==null){for(i.flags|=128,ho(u,!1),e=h.updateQueue,i.updateQueue=e,kl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Hp(a,e),a=a.sibling;return xt(dn,dn.current&1|2),i.child}e=e.sibling}u.tail!==null&&Ht()>Yl&&(i.flags|=128,o=!0,ho(u,!1),i.lanes=4194304)}else{if(!o)if(e=Il(h),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,kl(i,e),ho(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ce)return Je(i),null}else 2*Ht()-u.renderingStartTime>Yl&&a!==536870912&&(i.flags|=128,o=!0,ho(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(e=u.last,e!==null?e.sibling=h:i.child=h,u.last=h)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Ht(),i.sibling=null,e=dn.current,xt(dn,o?e&1|2:e&1),i):(Je(i),null);case 22:case 23:return Zi(i),Yu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),a=i.updateQueue,a!==null&&kl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&pt(as),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Yi(hn),Je(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Gy(e,i){switch(Lu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Yi(hn),Lt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Se(i),null;case 13:if(Zi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Kr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return pt(dn),null;case 4:return Lt(),null;case 10:return Yi(i.type),null;case 22:case 23:return Zi(i),Yu(),e!==null&&pt(as),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Yi(hn),null;case 25:return null;default:return null}}function dg(e,i){switch(Lu(i),i.tag){case 3:Yi(hn),Lt();break;case 26:case 27:case 5:Se(i);break;case 4:Lt();break;case 13:Zi(i);break;case 19:pt(dn);break;case 10:Yi(i.type);break;case 22:case 23:Zi(i),Yu(),e!==null&&pt(as);break;case 24:Yi(hn)}}function po(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(b){ke(i,i.return,b)}}function xa(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=i;var P=a,et=b;try{et()}catch(ht){ke(u,P,ht)}}}o=o.next}while(o!==h)}}catch(ht){ke(i,i.return,ht)}}function pg(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{em(i,a)}catch(o){ke(e,e.return,o)}}}function mg(e,i,a){a.props=rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ke(e,i,o)}}function mo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ke(e,i,u)}}function Ui(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ke(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(e,i,u)}else a.current=null}function gg(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ke(e,e.return,u)}}function xf(e,i,a){try{var o=e.stateNode;lS(o,e.type,a,i),o[$e]=i}catch(u){ke(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ec));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Ef(e,i,a),e=e.sibling;e!==null;)Ef(e,i,a),e=e.sibling}function Xl(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,i,a),e=e.sibling;e!==null;)Xl(e,i,a),e=e.sibling}function vg(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);bn(i,o,a),i[fn]=e,i[$e]=a}catch(h){ke(e,e.return,h)}}var Qi=!1,sn=!1,Tf=!1,yg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Vy(e,i){if(e=e.containerInfo,Zf=lc,e=Dp(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,b=-1,P=-1,et=0,ht=0,vt=e,st=null;e:for(;;){for(var rt;vt!==a||u!==0&&vt.nodeType!==3||(b=x+u),vt!==h||o!==0&&vt.nodeType!==3||(P=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(rt=vt.firstChild)!==null;)st=vt,vt=rt;for(;;){if(vt===e)break e;if(st===a&&++et===u&&(b=x),st===h&&++ht===o&&(P=x),(rt=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=rt}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},lc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,h=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=i,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ie=rs(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){ke(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function Sg(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&po(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(x){ke(a,a.return,x)}else{var u=rs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ke(a,a.return,x)}}o&64&&pg(a),o&512&&mo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{em(e,i)}catch(x){ke(a,a.return,x)}}break;case 27:i===null&&o&4&&vg(a);case 26:case 5:Ma(e,a),i===null&&o&4&&gg(a),o&512&&mo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&Eg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qy.bind(null,a),mS(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){i=i!==null&&i.memoizedState!==null||sn,u=Qi;var h=sn;Qi=o,(sn=i)&&!h?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Qi=u,sn=h}break;case 30:break;default:Ma(e,a)}}function xg(e){var i=e.alternate;i!==null&&(e.alternate=null,xg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ws(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,kn=!1;function Ji(e,i,a){for(a=a.child;a!==null;)Mg(e,i,a),a=a.sibling}function Mg(e,i,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:sn||Ui(a,i),Ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ui(a,i);var o=je,u=kn;Ca(a.type)&&(je=a.stateNode,kn=!1),Ji(e,i,a),To(a.stateNode),je=o,kn=u;break;case 5:sn||Ui(a,i);case 6:if(o=je,u=kn,je=null,Ji(e,i,a),je=o,kn=u,je!==null)if(kn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(h){ke(a,i,h)}else try{je.removeChild(a.stateNode)}catch(h){ke(a,i,h)}break;case 18:je!==null&&(kn?(e=je,u_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):u_(je,a.stateNode));break;case 4:o=je,u=kn,je=a.stateNode.containerInfo,kn=!0,Ji(e,i,a),je=o,kn=u;break;case 0:case 11:case 14:case 15:sn||xa(2,a,i),sn||xa(4,a,i),Ji(e,i,a);break;case 1:sn||(Ui(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,i,o)),Ji(e,i,a);break;case 21:Ji(e,i,a);break;case 22:sn=(o=sn)||a.memoizedState!==null,Ji(e,i,a),sn=o;break;default:Ji(e,i,a)}}function Eg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){ke(i,i.return,a)}}function ky(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new yg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new yg),i;default:throw Error(s(435,e.tag))}}function bf(e,i){var a=ky(e);i.forEach(function(o){var u=Jy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Zn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=i,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){je=b.stateNode,kn=!1;break t}break;case 5:je=b.stateNode,kn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,kn=!0;break t}b=b.return}if(je===null)throw Error(s(160));Mg(h,x,u),je=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Tg(i,e),i=i.sibling}var vi=null;function Tg(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(i,e),jn(e),o&4&&(xa(3,e,e.return),po(3,e),xa(5,e,e.return));break;case 1:Zn(i,e),jn(e),o&512&&(sn||a===null||Ui(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Zn(i,e),jn(e),o&512&&(sn||a===null||Ui(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[wi]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),bn(h,o,a),h[fn]=e,rn(h),o=h;break t;case"link":var x=v_("link","href",u).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(h=x[b],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=v_("meta","content",u).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(h=x[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}h=u.createElement(o),bn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[fn]=e,rn(h),o=h}e.stateNode=o}else y_(u,e.type,e.stateNode);else e.stateNode=__(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?y_(u,e.type,e.stateNode):__(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(i,e),jn(e),o&512&&(sn||a===null||Ui(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(i,e),jn(e),o&512&&(sn||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(rt){ke(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(Zn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){ke(e,e.return,rt)}}break;case 3:if(sc=null,u=vi,vi=ic(i.containerInfo),Zn(i,e),vi=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(i.containerInfo)}catch(rt){ke(e,e.return,rt)}Tf&&(Tf=!1,bg(e));break;case 4:o=vi,vi=ic(e.stateNode.containerInfo),Zn(i,e),jn(e),vi=o;break;case 12:Zn(i,e),jn(e);break;case 13:Zn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Uf=Ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bf(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,et=Qi,ht=sn;if(Qi=et||u,sn=ht||P,Zn(i,e),sn=ht,Qi=et,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||P||Qi||sn||os(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){P=a=i;try{if(h=P.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=P.stateNode;var vt=P.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(rt){ke(P,P.return,rt)}}}else if(i.tag===6){if(a===null){P=i;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(rt){ke(P,P.return,rt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bf(e,a))));break;case 19:Zn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bf(e,o)));break;case 30:break;case 21:break;default:Zn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(_g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Mf(e);Xl(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Hn(x,""),a.flags&=-33);var b=Mf(e);Xl(e,b,x);break;case 3:case 4:var P=a.stateNode.containerInfo,et=Mf(e);Ef(e,et,P);break;default:throw Error(s(161))}}catch(ht){ke(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ma(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Sg(e,i.alternate,i),i=i.sibling}function os(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:xa(4,i,i.return),os(i);break;case 1:Ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&mg(i,i.return,a),os(i);break;case 27:To(i.stateNode);case 26:case 5:Ui(i,i.return),os(i);break;case 22:i.memoizedState===null&&os(i);break;case 30:os(i);break;default:os(i)}e=e.sibling}}function Ea(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,h=i,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ea(u,h,a),po(4,h);break;case 1:if(Ea(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ke(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var b=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)tm(P[u],b)}catch(et){ke(o,o.return,et)}}a&&x&64&&pg(h),mo(h,h.return);break;case 27:vg(h);case 26:case 5:Ea(u,h,a),a&&o===null&&x&4&&gg(h),mo(h,h.return);break;case 12:Ea(u,h,a);break;case 13:Ea(u,h,a),a&&x&4&&Eg(u,h);break;case 22:h.memoizedState===null&&Ea(u,h,a),mo(h,h.return);break;case 30:break;default:Ea(u,h,a)}i=i.sibling}}function Af(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function Rf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&$r(e))}function Li(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ag(e,i,a,o),i=i.sibling}function Ag(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,a,o),u&2048&&po(9,i);break;case 1:Li(e,i,a,o);break;case 3:Li(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&$r(e)));break;case 12:if(u&2048){Li(e,i,a,o),e=i.stateNode;try{var h=i.memoizedProps,x=h.id,b=h.onPostCommit;typeof b=="function"&&b(x,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){ke(i,i.return,P)}}else Li(e,i,a,o);break;case 13:Li(e,i,a,o);break;case 23:break;case 22:h=i.stateNode,x=i.alternate,i.memoizedState!==null?h._visibility&2?Li(e,i,a,o):go(e,i):h._visibility&2?Li(e,i,a,o):(h._visibility|=2,Zs(e,i,a,o,(i.subtreeFlags&10256)!==0)),u&2048&&Af(x,i);break;case 24:Li(e,i,a,o),u&2048&&Rf(i.alternate,i);break;default:Li(e,i,a,o)}}function Zs(e,i,a,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var h=e,x=i,b=a,P=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:Zs(h,x,b,P,u),po(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Zs(h,x,b,P,u):go(h,x):(ht._visibility|=2,Zs(h,x,b,P,u)),u&&et&2048&&Af(x.alternate,x);break;case 24:Zs(h,x,b,P,u),u&&et&2048&&Rf(x.alternate,x);break;default:Zs(h,x,b,P,u)}i=i.sibling}}function go(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:go(a,o),u&2048&&Af(o.alternate,o);break;case 24:go(a,o),u&2048&&Rf(o.alternate,o);break;default:go(a,o)}i=i.sibling}}var _o=8192;function js(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 26:js(e),e.flags&_o&&e.memoizedState!==null&&wS(vi,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var i=vi;vi=ic(e.stateNode.containerInfo),js(e),vi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=_o,_o=16777216,js(e),_o=i):js(e));break;default:js(e)}}function wg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function vo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,Dg(o,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cg(e),e=e.sibling}function Cg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Wl(e)):vo(e);break;default:vo(e)}}function Wl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,Dg(o,e)}wg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:xa(8,i,i.return),Wl(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(i));break;default:Wl(i)}e=e.sibling}}function Dg(e,i){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:xa(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$r(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,h=o.return;if(xg(o),o===a){yn=null;break t}if(u!==null){u.return=h,yn=u;break t}yn=h}}}var Xy={getCacheForType:function(e){var i=Cn(hn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},Wy=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ye=null,ve=null,Ee=0,Ne=0,Kn=null,Ta=!1,Ks=!1,wf=!1,$i=0,nn=0,ba=0,ls=0,Cf=0,ci=0,Qs=0,yo=null,Xn=null,Df=!1,Uf=0,Yl=1/0,ql=null,Aa=null,Tn=0,Ra=null,Js=null,$s=0,Lf=0,Nf=null,Ug=null,So=0,Of=null;function Qn(){if((Le&2)!==0&&Ee!==0)return Ee&-Ee;if(L.T!==null){var e=Hs;return e!==0?e:Gf()}return be()}function Lg(){ci===0&&(ci=(Ee&536870912)===0||Ce?W():536870912);var e=li.current;return e!==null&&(e.flags|=32),ci}function Jn(e,i,a){(e===Ye&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(tr(e,0),wa(e,Ee,ci,!1)),It(e,a),((Le&2)===0||e!==Ye)&&(e===Ye&&((Le&2)===0&&(ls|=a),nn===4&&wa(e,Ee,ci,!1)),Ni(e))}function Ng(e,i,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),u=o?Zy(e,i):Bf(e,i,!0),h=o;do{if(u===0){Ks&&!o&&wa(e,i,0,!1);break}else{if(a=e.current.alternate,h&&!Yy(a)){u=Bf(e,i,!1),h=!1;continue}if(u===2){if(h=i,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;t:{var b=e;u=yo;var P=b.current.memoizedState.isDehydrated;if(P&&(tr(b,x).flags|=256),x=Bf(b,x,!1),x!==2){if(wf&&!P){b.errorRecoveryDisabledLanes|=h,ls|=h,u=4;break t}h=Xn,Xn=u,h!==null&&(Xn===null?Xn=h:Xn.push.apply(Xn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){tr(e,0),wa(e,i,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:wa(o,i,ci,!Ta);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Uf+300-Ht(),10<u)){if(wa(o,i,ci,!Ta),Xt(o,0,!0)!==0)break t;o.timeoutHandle=l_(Og.bind(null,o,a,Xn,ql,Df,i,ci,ls,Qs,Ta,h,2,-0,0),u);break t}Og(o,a,Xn,ql,Df,i,ci,ls,Qs,Ta,h,0,-0,0)}}break}while(!0);Ni(e)}function Og(e,i,a,o,u,h,x,b,P,et,ht,vt,st,rt){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:RS},Rg(i),vt=CS(),vt!==null)){e.cancelPendingCommit=vt(Gg.bind(null,e,i,h,a,o,u,x,b,P,ht,1,st,rt)),wa(e,h,x,!et);return}Gg(e,i,h,a,o,u,x,b,P)}function Yy(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Yn(h(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wa(e,i,a,o){i&=~Cf,i&=~ls,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var h=31-Bt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&yt(e,a,i)}function Zl(){return(Le&6)===0?(xo(0),!1):!0}function Pf(){if(ve!==null){if(Ne===0)var e=ve.return;else e=ve,Wi=ns=null,Qu(e),Ys=null,uo=0,e=ve;for(;e!==null;)dg(e.alternate,e),e=e.return;ve=null}}function tr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pf(),Ye=e,ve=a=Vi(e.current,null),Ee=i,Ne=0,Kn=null,Ta=!1,Ks=Dt(e,i),wf=!1,Qs=ci=Cf=ls=ba=nn=0,Xn=yo=null,Df=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Bt(o),h=1<<u;i|=e[u],o&=~h}return $i=i,gl(),a}function Pg(e,i){me=null,L.H=Pl,i===eo||i===bl?(i=Jp(),Ne=3):i===jp?(i=Jp(),Ne=4):Ne=i===$m?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,ve===null&&(nn=1,Hl(e,ai(i,e.current)))}function zg(){var e=L.H;return L.H=Pl,e===null?Pl:e}function Bg(){var e=L.A;return L.A=Xy,e}function zf(){nn=4,Ta||(Ee&4194048)!==Ee&&li.current!==null||(Ks=!0),(ba&134217727)===0&&(ls&134217727)===0||Ye===null||wa(Ye,Ee,ci,!1)}function Bf(e,i,a){var o=Le;Le|=2;var u=zg(),h=Bg();(Ye!==e||Ee!==i)&&(ql=null,tr(e,i)),i=!1;var x=nn;t:do try{if(Ne!==0&&ve!==null){var b=ve,P=Kn;switch(Ne){case 8:Pf(),x=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var et=Ne;if(Ne=0,Kn=null,er(e,b,P,et),a&&Ks){x=0;break t}break;default:et=Ne,Ne=0,Kn=null,er(e,b,P,et)}}qy(),x=nn;break}catch(ht){Pg(e,ht)}while(!0);return i&&e.shellSuspendCounter++,Wi=ns=null,Le=o,L.H=u,L.A=h,ve===null&&(Ye=null,Ee=0,gl()),x}function qy(){for(;ve!==null;)Ig(ve)}function Zy(e,i){var a=Le;Le|=2;var o=zg(),u=Bg();Ye!==e||Ee!==i?(ql=null,Yl=Ht()+500,tr(e,i)):Ks=Dt(e,i);t:do try{if(Ne!==0&&ve!==null){i=ve;var h=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,er(e,i,h,1);break;case 2:case 9:if(Kp(h)){Ne=0,Kn=null,Fg(i);break}i=function(){Ne!==2&&Ne!==9||Ye!==e||(Ne=7),Ni(e)},h.then(i,i);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Kp(h)?(Ne=0,Kn=null,Fg(i)):(Ne=0,Kn=null,er(e,i,h,7));break;case 5:var x=null;switch(ve.tag){case 26:x=ve.memoizedState;case 5:case 27:var b=ve;if(!x||S_(x)){Ne=0,Kn=null;var P=b.sibling;if(P!==null)ve=P;else{var et=b.return;et!==null?(ve=et,jl(et)):ve=null}break e}}Ne=0,Kn=null,er(e,i,h,5);break;case 6:Ne=0,Kn=null,er(e,i,h,6);break;case 8:Pf(),nn=6;break t;default:throw Error(s(462))}}jy();break}catch(ht){Pg(e,ht)}while(!0);return Wi=ns=null,L.H=o,L.A=u,Le=a,ve!==null?0:(Ye=null,Ee=0,gl(),nn)}function jy(){for(;ve!==null&&!Qt();)Ig(ve)}function Ig(e){var i=fg(e.alternate,e,$i);e.memoizedProps=e.pendingProps,i===null?jl(e):ve=i}function Fg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=sg(a,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=sg(a,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:Qu(i);default:dg(a,i),i=ve=Hp(i,$i),i=fg(a,i,$i)}e.memoizedProps=e.pendingProps,i===null?jl(e):ve=i}function er(e,i,a,o){Wi=ns=null,Qu(i),Ys=null,uo=0;var u=i.return;try{if(Iy(e,u,i,a,Ee)){nn=1,Hl(e,ai(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;nn=1,Hl(e,ai(a,e.current)),ve=null;return}i.flags&32768?(Ce||o===1?e=!0:Ks||(Ee&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(i,e)):jl(i)}function jl(e){var i=e;do{if((i.flags&32768)!==0){Hg(i,Ta);return}e=i.return;var a=Hy(i.alternate,i,$i);if(a!==null){ve=a;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);nn===0&&(nn=5)}function Hg(e,i){do{var a=Gy(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);nn=6,ve=null}function Gg(e,i,a,o,u,h,x,b,P){e.cancelPendingCommit=null;do Kl();while(Tn!==0);if((Le&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=Au,Tt(e,a,h,x,b,P),e===Ye&&(ve=Ye=null,Ee=0),Js=i,Ra=e,$s=a,Lf=h,Nf=u,Ug=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$y(Ke,function(){return Yg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=Y.p,Y.p=2,x=Le,Le|=4;try{Vy(e,i,a)}finally{Le=x,Y.p=u,L.T=o}}Tn=1,Vg(),kg(),Xg()}}function Vg(){if(Tn===1){Tn=0;var e=Ra,i=Js,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=Y.p;Y.p=2;var u=Le;Le|=4;try{Tg(i,e);var h=jf,x=Dp(e.containerInfo),b=h.focusedElem,P=h.selectionRange;if(x!==b&&b&&b.ownerDocument&&Cp(b.ownerDocument.documentElement,b)){if(P!==null&&xu(b)){var et=P.start,ht=P.end;if(ht===void 0&&(ht=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(ht,b.value.length);else{var vt=b.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var rt=st.getSelection(),ie=b.textContent.length,te=Math.min(P.start,ie),Ie=P.end===void 0?te:Math.min(P.end,ie);!rt.extend&&te>Ie&&(x=Ie,Ie=te,te=x);var Z=wp(b,te),k=wp(b,Ie);if(Z&&k&&(rt.rangeCount!==1||rt.anchorNode!==Z.node||rt.anchorOffset!==Z.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var tt=vt.createRange();tt.setStart(Z.node,Z.offset),rt.removeAllRanges(),te>Ie?(rt.addRange(tt),rt.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),rt.addRange(tt))}}}}for(vt=[],rt=b;rt=rt.parentNode;)rt.nodeType===1&&vt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var gt=vt[b];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}lc=!!Zf,jf=Zf=null}finally{Le=u,Y.p=o,L.T=a}}e.current=i,Tn=2}}function kg(){if(Tn===2){Tn=0;var e=Ra,i=Js,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=Y.p;Y.p=2;var u=Le;Le|=4;try{Sg(e,i.alternate,i)}finally{Le=u,Y.p=o,L.T=a}}Tn=3}}function Xg(){if(Tn===4||Tn===3){Tn=0,Te();var e=Ra,i=Js,a=$s,o=Ug;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,Js=Ra=null,Wg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),De(a),i=i.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=L.T,u=Y.p,Y.p=2,L.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];h(b.value,{componentStack:b.stack})}}finally{L.T=i,Y.p=u}}($s&3)!==0&&Kl(),Ni(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Of?So++:(So=0,Of=e):So=0,xo(0)}}function Wg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,$r(i)))}function Kl(e){return Vg(),kg(),Xg(),Yg()}function Yg(){if(Tn!==5)return!1;var e=Ra,i=Lf;Lf=0;var a=De($s),o=L.T,u=Y.p;try{Y.p=32>a?32:a,L.T=null,a=Nf,Nf=null;var h=Ra,x=$s;if(Tn=0,Js=Ra=null,$s=0,(Le&6)!==0)throw Error(s(331));var b=Le;if(Le|=4,Cg(h.current),Ag(h,h.current,x,a),Le=b,xo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{Y.p=u,L.T=o,Wg(e,i)}}function qg(e,i,a){i=ai(a,i),i=hf(e.stateNode,i,2),e=_a(e,i,2),e!==null&&(It(e,2),Ni(e))}function ke(e,i,a){if(e.tag===3)qg(e,e,a);else for(;i!==null;){if(i.tag===3){qg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ai(a,e),a=Qm(2),o=_a(i,a,2),o!==null&&(Jm(a,o,i,e),It(o,2),Ni(o));break}}i=i.return}}function If(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Wy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(wf=!0,u.add(a),e=Ky.bind(null,e,i,a),i.then(e,e))}function Ky(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ee&a)===a&&(nn===4||nn===3&&(Ee&62914560)===Ee&&300>Ht()-Uf?(Le&2)===0&&tr(e,0):Cf|=a,Qs===Ee&&(Qs=0)),Ni(e)}function Zg(e,i){i===0&&(i=At()),e=zs(e,i),e!==null&&(It(e,i),Ni(e))}function Qy(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Zg(e,a)}function Jy(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Zg(e,a)}function $y(e,i){return F(e,i)}var Ql=null,nr=null,Ff=!1,Jl=!1,Hf=!1,cs=0;function Ni(e){e!==nr&&e.next===null&&(nr===null?Ql=nr=e:nr=nr.next=e),Jl=!0,Ff||(Ff=!0,eS())}function xo(e,i){if(!Hf&&Jl){Hf=!0;do for(var a=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(x&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Jg(o,h))}else h=Ee,h=Xt(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Dt(o,h)||(a=!0,Jg(o,h));o=o.next}while(a);Hf=!1}}function tS(){jg()}function jg(){Jl=Ff=!1;var e=0;cs!==0&&(cS()&&(e=cs),cs=0);for(var i=Ht(),a=null,o=Ql;o!==null;){var u=o.next,h=Kg(o,i);h===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(nr=a)):(a=o,(e!==0||(h&3)!==0)&&(Jl=!0)),o=u}xo(e)}function Kg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Bt(h),b=1<<x,P=u[x];P===-1?((b&a)===0||(b&o)!==0)&&(u[x]=se(b,i)):P<=i&&(e.expiredLanes|=b),h&=~b}if(i=Ye,a=Ee,a=Xt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Me(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Me(o),De(a)){case 2:case 8:a=oe;break;case 32:a=Ke;break;case 268435456:a=N;break;default:a=Ke}return o=Qg.bind(null,e),a=F(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Me(o),e.callbackPriority=2,e.callbackNode=null,2}function Qg(e,i){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var o=Ee;return o=Xt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ng(e,o,i),Kg(e,Ht()),e.callbackNode!=null&&e.callbackNode===a?Qg.bind(null,e):null)}function Jg(e,i){if(Kl())return null;Ng(e,i,!0)}function eS(){fS(function(){(Le&6)!==0?F(Gt,tS):jg()})}function Gf(){return cs===0&&(cs=W()),cs}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function t_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function nS(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var h=$g((u[$e]||null).action),x=o.submitter;x&&(i=(i=x[$e]||null)?$g(i.formAction):x.getAttribute("formAction"),i!==null&&(h=i,x=null));var b=new dl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cs!==0){var P=x?t_(u,x):new FormData(u);of(a,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(b.preventDefault(),P=x?t_(u,x):new FormData(u),of(a,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var Vf=0;Vf<bu.length;Vf++){var kf=bu[Vf],iS=kf.toLowerCase(),aS=kf[0].toUpperCase()+kf.slice(1);_i(iS,"on"+aS)}_i(Np,"onAnimationEnd"),_i(Op,"onAnimationIteration"),_i(Pp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(xy,"onTransitionRun"),_i(My,"onTransitionStart"),_i(Ey,"onTransitionCancel"),_i(zp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function e_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var x=o.length-1;0<=x;x--){var b=o[x],P=b.instance,et=b.currentTarget;if(b=b.listener,P!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=et;try{h(u)}catch(ht){Fl(ht)}u.currentTarget=null,h=P}else for(x=0;x<o.length;x++){if(b=o[x],P=b.instance,et=b.currentTarget,b=b.listener,P!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=et;try{h(u)}catch(ht){Fl(ht)}u.currentTarget=null,h=P}}}}function ye(e,i){var a=i[As];a===void 0&&(a=i[As]=new Set);var o=e+"__bubble";a.has(o)||(n_(i,e,2,!1),a.add(o))}function Xf(e,i,a){var o=0;i&&(o|=4),n_(a,e,o,i)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[$l]){e[$l]=!0,ol.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||Xf(a,!1,e),Xf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[$l]||(i[$l]=!0,Xf("selectionchange",!1,i))}}function n_(e,i,a,o){switch(A_(i)){case 2:var u=LS;break;case 8:u=NS;break;default:u=sh}a=u.bind(null,i,a,e),u=void 0,!hu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function Yf(e,i,a,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=o.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=Hi(b),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){o=h=x;continue t}b=b.parentNode}}o=o.return}cp(function(){var et=h,ht=uu(a),vt=[];t:{var st=Bp.get(e);if(st!==void 0){var rt=dl,ie=e;switch(e){case"keypress":if(fl(a)===0)break t;case"keydown":case"keyup":rt=$v;break;case"focusin":ie="focus",rt=gu;break;case"focusout":ie="blur",rt=gu;break;case"beforeblur":case"afterblur":rt=gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=ny;break;case Np:case Op:case Pp:rt=Xv;break;case zp:rt=ay;break;case"scroll":case"scrollend":rt=Fv;break;case"wheel":rt=ry;break;case"copy":case"cut":case"paste":rt=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=pp;break;case"toggle":case"beforetoggle":rt=ly}var te=(i&4)!==0,Ie=!te&&(e==="scroll"||e==="scrollend"),Z=te?st!==null?st+"Capture":null:st;te=[];for(var k=et,tt;k!==null;){var gt=k;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||Z===null||(gt=Hr(k,Z),gt!=null&&te.push(Eo(k,gt,tt))),Ie)break;k=k.return}0<te.length&&(st=new rt(st,ie,null,a,ht),vt.push({event:st,listeners:te}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",st&&a!==cu&&(ie=a.relatedTarget||a.fromElement)&&(Hi(ie)||ie[Ri]))break t;if((rt||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,rt?(ie=a.relatedTarget||a.toElement,rt=et,ie=ie?Hi(ie):null,ie!==null&&(Ie=c(ie),te=ie.tag,ie!==Ie||te!==5&&te!==27&&te!==6)&&(ie=null)):(rt=null,ie=et),rt!==ie)){if(te=hp,gt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=pp,gt="onPointerLeave",Z="onPointerEnter",k="pointer"),Ie=rt==null?st:qa(rt),tt=ie==null?st:qa(ie),st=new te(gt,k+"leave",rt,a,ht),st.target=Ie,st.relatedTarget=tt,gt=null,Hi(ht)===et&&(te=new te(Z,k+"enter",ie,a,ht),te.target=tt,te.relatedTarget=Ie,gt=te),Ie=gt,rt&&ie)e:{for(te=rt,Z=ie,k=0,tt=te;tt;tt=ir(tt))k++;for(tt=0,gt=Z;gt;gt=ir(gt))tt++;for(;0<k-tt;)te=ir(te),k--;for(;0<tt-k;)Z=ir(Z),tt--;for(;k--;){if(te===Z||Z!==null&&te===Z.alternate)break e;te=ir(te),Z=ir(Z)}te=null}else te=null;rt!==null&&i_(vt,st,rt,te,!1),ie!==null&&Ie!==null&&i_(vt,Ie,ie,te,!0)}}t:{if(st=et?qa(et):window,rt=st.nodeName&&st.nodeName.toLowerCase(),rt==="select"||rt==="input"&&st.type==="file")var Vt=Mp;else if(Sp(st))if(Ep)Vt=vy;else{Vt=gy;var ge=my}else rt=st.nodeName,!rt||rt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&lu(et.elementType)&&(Vt=Mp):Vt=_y;if(Vt&&(Vt=Vt(e,et))){xp(vt,Vt,a,ht);break t}ge&&ge(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&wn(st,"number",st.value)}switch(ge=et?qa(et):window,e){case"focusin":(Sp(ge)||ge.contentEditable==="true")&&(Ns=ge,Mu=et,Zr=null);break;case"focusout":Zr=Mu=Ns=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Up(vt,a,ht);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Up(vt,a,ht)}var Zt;if(vu)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Ls?vp(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(mp&&a.locale!=="ko"&&(Ls||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Ls&&(Zt=up()):(da=ht,du="value"in da?da.value:da.textContent,Ls=!0)),ge=tc(et,ne),0<ge.length&&(ne=new dp(ne,e,null,a,ht),vt.push({event:ne,listeners:ge}),Zt?ne.data=Zt:(Zt=yp(a),Zt!==null&&(ne.data=Zt)))),(Zt=uy?fy(e,a):hy(e,a))&&(ne=tc(et,"onBeforeInput"),0<ne.length&&(ge=new dp("onBeforeInput","beforeinput",null,a,ht),vt.push({event:ge,listeners:ne}),ge.data=Zt)),nS(vt,e,et,a,ht)}e_(vt,i)})}function Eo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function tc(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Hr(e,a),u!=null&&o.unshift(Eo(e,u,h)),u=Hr(e,i),u!=null&&o.push(Eo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i_(e,i,a,o,u){for(var h=i._reactName,x=[];a!==null&&a!==o;){var b=a,P=b.alternate,et=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||et===null||(P=et,u?(et=Hr(a,h),et!=null&&x.unshift(Eo(a,et,P))):u||(et=Hr(a,h),et!=null&&x.push(Eo(a,et,P)))),a=a.return}x.length!==0&&e.push({event:i,listeners:x})}var rS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function a_(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(oS,"")}function s_(e,i){return i=a_(i),a_(e)===i}function ec(){}function Be(e,i,a,o,u,h){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Hn(e,""+o);break;case"className":Ft(e,"class",o);break;case"tabIndex":Ft(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,a,o);break;case"style":op(e,o,h);break;case"data":if(i!=="object"){Ft(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(i!=="input"&&Be(e,i,"name",u.name,u,null),Be(e,i,"formEncType",u.formEncType,u,null),Be(e,i,"formMethod",u.formMethod,u,null),Be(e,i,"formTarget",u.formTarget,u,null)):(Be(e,i,"encType",u.encType,u,null),Be(e,i,"method",u.method,u,null),Be(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ec);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bv.get(a)||a,Ut(e,a,o))}}function qf(e,i,a,o,u,h){switch(a){case"style":op(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),h=e[$e]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function bn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(e,i,h,x,a,null)}}u&&Be(e,i,"srcSet",a.srcSet,a,null),o&&Be(e,i,"src",a.src,a,null);return;case"input":ye("invalid",e);var b=h=x=u=null,P=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":x=ht;break;case"checked":P=ht;break;case"defaultChecked":et=ht;break;case"value":h=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,i));break;default:Be(e,i,o,ht,a,null)}}On(e,h,b,P,et,x,u,!1),_e(e);return;case"select":ye("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":h=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Be(e,i,u,b,a,null)}i=h,a=x,e.multiple=!!o,i!=null?tn(e,!!o,i,!1):a!=null&&tn(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":u=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Be(e,i,x,b,a,null)}Cs(e,o,u,h),_e(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,i,P,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)ye(Mo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(e,i,et,o,a,null)}return;default:if(lu(i)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&qf(e,i,ht,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Be(e,i,b,o,a,null))}function lS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,b=null,P=null,et=null,ht=null;for(rt in a){var vt=a[rt];if(a.hasOwnProperty(rt)&&vt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(rt)||Be(e,i,rt,null,o,vt)}}for(var st in o){var rt=o[st];if(vt=a[st],o.hasOwnProperty(st)&&(rt!=null||vt!=null))switch(st){case"type":h=rt;break;case"name":u=rt;break;case"checked":et=rt;break;case"defaultChecked":ht=rt;break;case"value":x=rt;break;case"defaultValue":b=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,i));break;default:rt!==vt&&Be(e,i,st,rt,o,vt)}}Ve(e,x,b,P,et,ht,h,u);return;case"select":rt=x=b=st=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":rt=P;default:o.hasOwnProperty(h)||Be(e,i,h,null,o,P)}for(u in o)if(h=o[u],P=a[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":st=h;break;case"defaultValue":b=h;break;case"multiple":x=h;default:h!==P&&Be(e,i,u,h,o,P)}i=b,a=x,o=rt,st!=null?tn(e,!!a,st,!1):!!o!=!!a&&(i!=null?tn(e,!!a,i,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":rt=st=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,i,b,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Be(e,i,x,u,o,h)}Mn(e,st,rt);return;case"option":for(var ie in a)if(st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Be(e,i,ie,null,o,st)}for(P in o)if(st=o[P],rt=a[P],o.hasOwnProperty(P)&&st!==rt&&(st!=null||rt!=null))switch(P){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Be(e,i,P,st,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)st=a[te],a.hasOwnProperty(te)&&st!=null&&!o.hasOwnProperty(te)&&Be(e,i,te,null,o,st);for(et in o)if(st=o[et],rt=a[et],o.hasOwnProperty(et)&&st!==rt&&(st!=null||rt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,i));break;default:Be(e,i,et,st,o,rt)}return;default:if(lu(i)){for(var Ie in a)st=a[Ie],a.hasOwnProperty(Ie)&&st!==void 0&&!o.hasOwnProperty(Ie)&&qf(e,i,Ie,void 0,o,st);for(ht in o)st=o[ht],rt=a[ht],!o.hasOwnProperty(ht)||st===rt||st===void 0&&rt===void 0||qf(e,i,ht,st,o,rt);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&Be(e,i,Z,null,o,st);for(vt in o)st=o[vt],rt=a[vt],!o.hasOwnProperty(vt)||st===rt||st==null&&rt==null||Be(e,i,vt,st,o,rt)}var Zf=null,jf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Kf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qf=null;function cS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var l_=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,c_=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof c_<"u"?function(e){return c_.resolve(null).then(e).catch(hS)}:l_;function hS(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function u_(e,i){var a=i,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var x=e.ownerDocument;if(a&1&&To(x.documentElement),a&2&&To(x.body),a&4)for(a=x.head,To(a),x=a.firstChild;x;){var b=x.nextSibling,P=x.nodeName;x[wi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=b}}if(u===0){e.removeChild(h),Lo(i);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Lo(i)}function Jf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dS(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function pS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function mS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var th=null;function f_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function h_(e,i,a){switch(i=nc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ws(e)}var ui=new Map,d_=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=Y.d;Y.d={f:gS,r:_S,D:vS,C:yS,L:SS,m:xS,X:ES,S:MS,M:TS};function gS(){var e=ta.f(),i=Zl();return e||i}function _S(e){var i=fa(e);i!==null&&i.tag===5&&i.type==="form"?Nm(i):ta.r(e)}var ar=typeof document>"u"?null:document;function p_(e,i,a){var o=ar;if(o&&typeof i=="string"&&i){var u=_n(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),d_.has(u)||(d_.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),bn(i,"link",e),rn(i),o.head.appendChild(i)))}}function vS(e){ta.D(e),p_("dns-prefetch",e,null)}function yS(e,i){ta.C(e,i),p_("preconnect",e,i)}function SS(e,i,a){ta.L(e,i,a);var o=ar;if(o&&e&&i){var u='link[rel="preload"][as="'+_n(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_n(a.imageSizes)+'"]')):u+='[href="'+_n(e)+'"]';var h=u;switch(i){case"style":h=sr(e);break;case"script":h=rr(e)}ui.has(h)||(e=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),ui.set(h,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(bo(h))||i==="script"&&o.querySelector(Ao(h))||(i=o.createElement("link"),bn(i,"link",e),rn(i),o.head.appendChild(i)))}}function xS(e,i){ta.m(e,i);var a=ar;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+_n(o)+'"][href="'+_n(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=rr(e)}if(!ui.has(h)&&(e=g({rel:"modulepreload",href:e},i),ui.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(h)))return}o=a.createElement("link"),bn(o,"link",e),rn(o),a.head.appendChild(o)}}}function MS(e,i,a){ta.S(e,i,a);var o=ar;if(o&&e){var u=ha(o).hoistableStyles,h=sr(e);i=i||"default";var x=u.get(h);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(bo(h)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},a),(a=ui.get(h))&&eh(e,a);var P=x=o.createElement("link");rn(P),bn(P,"link",e),P._p=new Promise(function(et,ht){P.onload=et,P.onerror=ht}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ac(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(h,x)}}}function ES(e,i){ta.X(e,i);var a=ar;if(a&&e){var o=ha(a).hoistableScripts,u=rr(e),h=o.get(u);h||(h=a.querySelector(Ao(u)),h||(e=g({src:e,async:!0},i),(i=ui.get(u))&&nh(e,i),h=a.createElement("script"),rn(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function TS(e,i){ta.M(e,i);var a=ar;if(a&&e){var o=ha(a).hoistableScripts,u=rr(e),h=o.get(u);h||(h=a.querySelector(Ao(u)),h||(e=g({src:e,async:!0,type:"module"},i),(i=ui.get(u))&&nh(e,i),h=a.createElement("script"),rn(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function m_(e,i,a,o){var u=(u=dt.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=sr(a.href),a=ha(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var h=ha(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(bo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),h||bS(u,e,a,x.state))),i&&o===null)throw Error(s(528,""));return x}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=rr(a),a=ha(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+_n(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function g_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function bS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),bn(i,"link",a),rn(i),e.head.appendChild(i))}function rr(e){return'[src="'+_n(e)+'"]'}function Ao(e){return"script[async]"+e}function __(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+_n(a.href)+'"]');if(o)return i.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),bn(o,"style",u),ac(o,a.precedence,e),i.instance=o;case"stylesheet":u=sr(a.href);var h=e.querySelector(bo(u));if(h)return i.state.loading|=4,i.instance=h,rn(h),h;o=g_(a),(u=ui.get(u))&&eh(o,u),h=(e.ownerDocument||e).createElement("link"),rn(h);var x=h;return x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),bn(h,"link",o),i.state.loading|=4,ac(h,a.precedence,e),i.instance=h;case"script":return h=rr(a.src),(u=e.querySelector(Ao(h)))?(i.instance=u,rn(u),u):(o=a,(u=ui.get(h))&&(o=g({},a),nh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),bn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,ac(o,a.precedence,e));return i.instance}function ac(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===i)h=b;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function eh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function nh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var sc=null;function v_(e,i,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[wi]||h[fn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(i)||"";x=e+x;var b=o.get(x);b?b.push(h):o.set(x,[h])}}return o}function y_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function AS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function S_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function RS(){}function wS(e,i,a){if(Ro===null)throw Error(s(475));var o=Ro;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=sr(a.href),h=e.querySelector(bo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=rc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=h,rn(h);return}h=e.ownerDocument||e,a=g_(a),(u=ui.get(u))&&eh(a,u),h=h.createElement("link"),rn(h);var x=h;x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),bn(h,"link",a),i.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=rc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function CS(){if(Ro===null)throw Error(s(475));var e=Ro;return e.stylesheets&&e.count===0&&ih(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&ih(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)ih(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function ih(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,i.forEach(DS,e),oc=null,rc.call(e))}function DS(e,i){if(!(i.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var wo={$$typeof:O,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function US(e,i,a,o,u,h,x,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function x_(e,i,a,o,u,h,x,b,P,et,ht,vt){return e=new US(e,i,a,x,b,P,et,vt),i=1,h===!0&&(i|=24),h=qn(3,null,null,i),e.current=h,h.stateNode=e,i=Bu(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:i},Gu(h),e}function M_(e){return e?(e=Bs,e):Bs}function E_(e,i,a,o,u,h){u=M_(u),o.context===null?o.context=u:o.pendingContext=u,o=ga(i),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=_a(e,o,i),a!==null&&(Jn(a,e,i),io(a,e,i))}function T_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function ah(e,i){T_(e,i),(e=e.alternate)&&T_(e,i)}function b_(e){if(e.tag===13){var i=zs(e,67108864);i!==null&&Jn(i,e,67108864),ah(e,67108864)}}var lc=!0;function LS(e,i,a,o){var u=L.T;L.T=null;var h=Y.p;try{Y.p=2,sh(e,i,a,o)}finally{Y.p=h,L.T=u}}function NS(e,i,a,o){var u=L.T;L.T=null;var h=Y.p;try{Y.p=8,sh(e,i,a,o)}finally{Y.p=h,L.T=u}}function sh(e,i,a,o){if(lc){var u=rh(o);if(u===null)Yf(e,i,o,cc,a),R_(e,o);else if(PS(u,e,i,a,o))o.stopPropagation();else if(R_(e,o),i&4&&-1<OS.indexOf(e)){for(;u!==null;){var h=fa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=jt(h.pendingLanes);if(x!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var P=1<<31-Bt(x);b.entanglements[1]|=P,x&=~P}Ni(h),(Le&6)===0&&(Yl=Ht()+500,xo(0))}}break;case 13:b=zs(h,2),b!==null&&Jn(b,h,2),Zl(),ah(h,2)}if(h=rh(o),h===null&&Yf(e,i,o,cc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Yf(e,i,o,null,a)}}function rh(e){return e=uu(e),oh(e)}var cc=null;function oh(e){if(cc=null,e=Hi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return cc=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Gt:return 2;case oe:return 8;case Ke:case Qe:return 32;case N:return 268435456;default:return 32}default:return 32}}var lh=!1,Da=null,Ua=null,La=null,Co=new Map,Do=new Map,Na=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(e,i){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(i.pointerId)}}function Uo(e,i,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=fa(i),i!==null&&b_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function PS(e,i,a,o,u){switch(i){case"focusin":return Da=Uo(Da,e,i,a,o,u),!0;case"dragenter":return Ua=Uo(Ua,e,i,a,o,u),!0;case"mouseover":return La=Uo(La,e,i,a,o,u),!0;case"pointerover":var h=u.pointerId;return Co.set(h,Uo(Co.get(h)||null,e,i,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Do.set(h,Uo(Do.get(h)||null,e,i,a,o,u)),!0}return!1}function w_(e){var i=Hi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,mi(e.priority,function(){if(a.tag===13){var o=Qn();o=ae(o);var u=zs(a,o);u!==null&&Jn(u,a,o),ah(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=rh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);cu=o,a.target.dispatchEvent(o),cu=null}else return i=fa(a),i!==null&&b_(i),e.blockedOn=a,!1;i.shift()}return!0}function C_(e,i,a){uc(e)&&a.delete(i)}function zS(){lh=!1,Da!==null&&uc(Da)&&(Da=null),Ua!==null&&uc(Ua)&&(Ua=null),La!==null&&uc(La)&&(La=null),Co.forEach(C_),Do.forEach(C_)}function fc(e,i){e.blockedOn===i&&(e.blockedOn=null,lh||(lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,zS)))}var hc=null;function D_(e){hc!==e&&(hc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(oh(o||a)===null)continue;break}var h=fa(a);h!==null&&(e.splice(i,3),i-=3,of(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Lo(e){function i(P){return fc(P,e)}Da!==null&&fc(Da,e),Ua!==null&&fc(Ua,e),La!==null&&fc(La,e),Co.forEach(i),Do.forEach(i);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)w_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[$e]||null;if(typeof h=="function")x||D_(a);else if(x){var b=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[$e]||null)b=x.formAction;else if(oh(u)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),D_(a)}}}function ch(e){this._internalRoot=e}dc.prototype.render=ch.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Qn();E_(a,o,e,i,null,null)},dc.prototype.unmount=ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;E_(e.current,2,null,e,null,null),Zl(),i[Ri]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=be();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Na.length&&i!==0&&i<Na[a].priority;a++);Na.splice(a,0,e),a===0&&w_(e)}};var U_=t.version;if(U_!=="19.1.1")throw Error(s(527,U_,"19.1.1"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var BS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ft=pc.inject(BS),St=pc}catch{}}return Oo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=qm,h=Zm,x=jm,b=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=x_(e,1,!1,null,null,a,o,u,h,x,b,null),e[Ri]=i.current,Wf(e),new ch(i)},Oo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=qm,x=Zm,b=jm,P=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),i=x_(e,1,!0,i,a??null,o,u,h,x,b,P,et),i.context=M_(null),a=i.current,o=Qn(),o=ae(o),u=ga(o),u.callback=null,_a(a,u,o),a=o,i.current.lanes=a,It(i,a),Ni(i),e[Ri]=i.current,Wf(e),new dc(i)},Oo.version="19.1.1",Oo}var G_;function KS(){if(G_)return hh.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hh.exports=jS(),hh.exports}var QS=KS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="179",Cr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JS=0,V_=1,$S=2,J0=1,tx=2,ra=3,Wa=0,In=1,Pi=2,ka=0,Dr=1,Jc=2,k_=3,X_=4,ex=5,_s=100,nx=101,ix=102,ax=103,sx=104,rx=200,ox=201,lx=202,cx=203,td=204,ed=205,ux=206,fx=207,hx=208,dx=209,px=210,mx=211,gx=212,_x=213,vx=214,nd=0,id=1,ad=2,Nr=3,sd=4,rd=5,od=6,ld=7,$0=0,yx=1,Sx=2,Xa=0,xx=1,Mx=2,Ex=3,Tx=4,bx=5,Ax=6,Rx=7,tv=300,Or=301,Pr=302,cd=303,ud=304,su=306,fd=1e3,ys=1001,hd=1002,bi=1003,wx=1004,mc=1005,zi=1006,gh=1007,Ss=1008,Ii=1009,ev=1010,nv=1011,Ko=1012,Wd=1013,xs=1014,oa=1015,el=1016,Yd=1017,qd=1018,Qo=1020,iv=35902,av=1021,sv=1022,Ti=1023,Jo=1026,$o=1027,rv=1028,Zd=1029,ov=1030,jd=1031,Kd=1033,Wc=33776,Yc=33777,qc=33778,Zc=33779,dd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,yd=37496,Sd=37808,xd=37809,Md=37810,Ed=37811,Td=37812,bd=37813,Ad=37814,Rd=37815,wd=37816,Cd=37817,Dd=37818,Ud=37819,Ld=37820,Nd=37821,jc=36492,Od=36494,Pd=36495,lv=36283,zd=36284,Bd=36285,Id=36286,Cx=3200,Dx=3201,Ux=0,Lx=1,Va="",hi="srgb",zr="srgb-linear",$c="linear",Fe="srgb",or=7680,W_=519,Nx=512,Ox=513,Px=514,cv=515,zx=516,Bx=517,Ix=518,Fx=519,Fd=35044,Y_="300 es",Bi=2e3,tu=2001;class Ts{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let q_=1234567;const Wo=Math.PI/180,tl=180/Math.PI;function la(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function de(r,t,n){return Math.max(t,Math.min(n,r))}function Qd(r,t){return(r%t+t)%t}function Hx(r,t,n,s,l){return s+(r-t)*(l-s)/(n-t)}function Gx(r,t,n){return r!==t?(n-r)/(t-r):0}function Yo(r,t,n){return(1-n)*r+n*t}function Vx(r,t,n,s){return Yo(r,t,1-Math.exp(-n*s))}function kx(r,t=1){return t-Math.abs(Qd(r,t*2)-t)}function Xx(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function Wx(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function Yx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function qx(r,t){return r+Math.random()*(t-r)}function Zx(r){return r*(.5-Math.random())}function jx(r){r!==void 0&&(q_=r);let t=q_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kx(r){return r*Wo}function Qx(r){return r*tl}function Jx(r){return(r&r-1)===0&&r!==0}function $x(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function eM(r,t,n,s,l){const c=Math.cos,f=Math.sin,d=c(n/2),m=f(n/2),p=c((t+s)/2),g=f((t+s)/2),v=c((t-s)/2),y=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*g,m*v,m*y,d*p);break;case"YZY":r.set(m*y,d*g,m*v,d*p);break;case"ZXZ":r.set(m*v,m*y,d*g,d*p);break;case"XZX":r.set(d*g,m*E,m*S,d*p);break;case"YXY":r.set(m*S,d*g,m*E,d*p);break;case"ZYZ":r.set(m*E,m*S,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Kc={DEG2RAD:Wo,RAD2DEG:tl,generateUUID:la,clamp:de,euclideanModulo:Qd,mapLinear:Hx,inverseLerp:Gx,lerp:Yo,damp:Vx,pingpong:kx,smoothstep:Xx,smootherstep:Wx,randInt:Yx,randFloat:qx,randFloatSpread:Zx,seededRandom:jx,degToRad:Kx,radToDeg:Qx,isPowerOfTwo:Jx,ceilPowerOfTwo:$x,floorPowerOfTwo:tM,setQuaternionFromProperEuler:eM,normalize:Oe,denormalize:Ei};class zt{constructor(t=0,n=0){zt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ms{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],R=c[f+3];if(d===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(d===1){t[n+0]=y,t[n+1]=S,t[n+2]=E,t[n+3]=R;return}if(v!==R||m!==y||p!==S||g!==E){let M=1-d;const _=m*y+p*S+g*E+v*R,I=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const z=Math.sqrt(O),V=Math.atan2(z,_*I);M=Math.sin(M*V)/z,d=Math.sin(d*V)/z}const D=d*I;if(m=m*M+y*D,p=p*M+S*D,g=g*M+E*D,v=v*M+R*D,M===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return t[n]=d*E+g*v+m*S-p*y,t[n+1]=m*E+g*y+p*v-d*S,t[n+2]=p*E+g*S+d*y-m*v,t[n+3]=g*E-d*v-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),y=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*g*v+p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v-y*S*E;break;case"YXZ":this._x=y*g*v+p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v+y*S*E;break;case"ZXY":this._x=y*g*v-p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v-y*S*E;break;case"ZYX":this._x=y*g*v-p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v+y*S*E;break;case"YZX":this._x=y*g*v+p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v-y*S*E;break;case"XZY":this._x=y*g*v-p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],d=n[5],m=n[9],p=n[2],g=n[6],v=n[10],y=s+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*s+n*this._x,this._y=S*l+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-n)*g)/p,y=Math.sin(n*g)/p;return this._w=f*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,n=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Z_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Z_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*n-c*l),v=2*(c*s-f*n);return this.x=n+m*p+f*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new G,Z_=new Ms;class ce{constructor(t,n,s,l,c,f,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,d,m,p)}set(t,n,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],y=s[2],S=s[5],E=s[8],R=l[0],M=l[3],_=l[6],I=l[1],O=l[4],D=l[7],z=l[2],V=l[5],H=l[8];return c[0]=f*R+d*I+m*z,c[3]=f*M+d*O+m*V,c[6]=f*_+d*D+m*H,c[1]=p*R+g*I+v*z,c[4]=p*M+g*O+v*V,c[7]=p*_+g*D+v*H,c[2]=y*R+S*I+E*z,c[5]=y*M+S*O+E*V,c[8]=y*_+S*D+E*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*f-d*p,y=d*m-g*c,S=p*c-f*m,E=n*v+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*f)*R,t[3]=y*R,t[4]=(g*n-l*m)*R,t[5]=(l*c-d*n)*R,t[6]=S*R,t[7]=(s*m-p*n)*R,t[8]=(f*n-s*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(vh.makeScale(t,n)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,n){return this.premultiply(vh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new ce;function uv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nM(){const r=eu("canvas");return r.style.display="block",r}const j_={};function Ur(r){r in j_||(j_[r]=!0,console.warn(r))}function iM(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const K_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const r={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Fe&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?$c:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[zr]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}const we=aM();function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class sM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{lr===void 0&&(lr=eu("canvas")),lr.width=t.width,lr.height=t.height;const l=lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=lr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=eu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(ca(n[s]/255)*255):n[s]=ca(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class Jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(yh(l[f].image)):c.push(yh(l[f]))}else c=yh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function yh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;const Sh=new G;class Fn extends Ts{constructor(t=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,s=ys,l=ys,c=zi,f=Ss,d=Ti,m=Ii,p=Fn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=la(),this.name="",this.source=new Jd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=tv;Fn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,n=0,s=0,l=1){Ge.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],y=m[1],S=m[5],E=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(p+1)/2,D=(S+1)/2,z=(_+1)/2,V=(g+y)/4,H=(v+R)/4,K=(E+M)/4;return O>D&&O>z?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=V/s,c=H/s):D>z?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=V/l,c=K/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=H/c,l=K/c),this.set(s,l,c,n),this}let I=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(M-E)/I,this.y=(v-R)/I,this.z=(y-g)/I,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this.w=de(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this.w=de(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Ts{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Fn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Jd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends lM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class fv extends Fn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Fn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),_c.subVectors(this.max,Po),cr.subVectors(t.a,Po),ur.subVectors(t.b,Po),fr.subVectors(t.c,Po),Pa.subVectors(ur,cr),za.subVectors(fr,ur),us.subVectors(cr,fr);let n=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-us.z,us.y,Pa.z,0,-Pa.x,za.z,0,-za.x,us.z,0,-us.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-us.y,us.x,0];return!xh(n,cr,ur,fr,_c)||(n=[1,0,0,0,1,0,0,0,1],!xh(n,cr,ur,fr,_c))?!1:(vc.crossVectors(Pa,za),n=[vc.x,vc.y,vc.z],xh(n,cr,ur,fr,_c))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new G,new G,new G,new G,new G,new G,new G,new G],Si=new G,gc=new nl,cr=new G,ur=new G,fr=new G,Pa=new G,za=new G,us=new G,Po=new G,_c=new G,vc=new G,fs=new G;function xh(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){fs.fromArray(r,c);const d=l.x*Math.abs(fs.x)+l.y*Math.abs(fs.y)+l.z*Math.abs(fs.z),m=t.dot(fs),p=n.dot(fs),g=s.dot(fs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const uM=new nl,zo=new G,Mh=new G;class il{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):uM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Mh)),this.expandByPoint(zo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new G,Eh=new G,yc=new G,Ba=new G,Th=new G,Sc=new G,bh=new G;class al{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){Eh.copy(t).add(n).multiplyScalar(.5),yc.copy(n).sub(t).normalize(),Ba.copy(this.origin).sub(Eh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(yc),d=Ba.dot(this.direction),m=-Ba.dot(yc),p=Ba.lengthSq(),g=Math.abs(1-f*f);let v,y,S,E;if(g>0)if(v=f*m-d,y=f*d-m,E=c*g,v>=0)if(y>=-E)if(y<=E){const R=1/g;v*=R,y*=R,S=v*(v+f*y+2*d)+y*(f*v+y+2*m)+p}else y=c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+p;else y<=-E?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+p):y<=E?(v=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+p);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Eh).addScaledVector(yc,y),S}intersectSphere(t,n){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,n,s,l,c){Th.subVectors(n,t),Sc.subVectors(s,t),bh.crossVectors(Th,Sc);let f=this.direction.dot(bh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(Sc.crossVectors(Ba,Sc));if(m<0)return null;const p=d*this.direction.dot(Th.cross(Ba));if(p<0||m+p>f)return null;const g=-d*Ba.dot(bh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,s,l,c,f,d,m,p,g,v,y,S,E,R,M){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,d,m,p,g,v,y,S,E,R,M)}set(t,n,s,l,c,f,d,m,p,g,v,y,S,E,R,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,l=1/hr.setFromMatrixColumn(t,0).length(),c=1/hr.setFromMatrixColumn(t,1).length(),f=1/hr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*v,E=d*g,R=d*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=S+E*p,n[5]=y-R*p,n[9]=-d*m,n[2]=R-y*p,n[6]=E+S*p,n[10]=f*m}else if(t.order==="YXZ"){const y=m*g,S=m*v,E=p*g,R=p*v;n[0]=y+R*d,n[4]=E*d-S,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-d,n[2]=S*d-E,n[6]=R+y*d,n[10]=f*m}else if(t.order==="ZXY"){const y=m*g,S=m*v,E=p*g,R=p*v;n[0]=y-R*d,n[4]=-f*v,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*g,n[9]=R-y*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(t.order==="ZYX"){const y=f*g,S=f*v,E=d*g,R=d*v;n[0]=m*g,n[4]=E*p-S,n[8]=y*p+R,n[1]=m*v,n[5]=R*p+y,n[9]=S*p-E,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(t.order==="YZX"){const y=f*m,S=f*p,E=d*m,R=d*p;n[0]=m*g,n[4]=R-y*v,n[8]=E*v+S,n[1]=v,n[5]=f*g,n[9]=-d*g,n[2]=-p*g,n[6]=S*v+E,n[10]=y-R*v}else if(t.order==="XZY"){const y=f*m,S=f*p,E=d*m,R=d*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=y*v+R,n[5]=f*g,n[9]=S*v-E,n[2]=E*v-S,n[6]=d*g,n[10]=R*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,hM)}lookAt(t,n,s){const l=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(s,$n),Ia.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(s,$n)),Ia.normalize(),xc.crossVectors($n,Ia),l[0]=Ia.x,l[4]=xc.x,l[8]=$n.x,l[1]=Ia.y,l[5]=xc.y,l[9]=$n.y,l[2]=Ia.z,l[6]=xc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],y=s[9],S=s[13],E=s[2],R=s[6],M=s[10],_=s[14],I=s[3],O=s[7],D=s[11],z=s[15],V=l[0],H=l[4],K=l[8],U=l[12],C=l[1],B=l[5],$=l[9],J=l[13],ot=l[2],nt=l[6],L=l[10],Y=l[14],X=l[3],mt=l[7],w=l[11],Q=l[15];return c[0]=f*V+d*C+m*ot+p*X,c[4]=f*H+d*B+m*nt+p*mt,c[8]=f*K+d*$+m*L+p*w,c[12]=f*U+d*J+m*Y+p*Q,c[1]=g*V+v*C+y*ot+S*X,c[5]=g*H+v*B+y*nt+S*mt,c[9]=g*K+v*$+y*L+S*w,c[13]=g*U+v*J+y*Y+S*Q,c[2]=E*V+R*C+M*ot+_*X,c[6]=E*H+R*B+M*nt+_*mt,c[10]=E*K+R*$+M*L+_*w,c[14]=E*U+R*J+M*Y+_*Q,c[3]=I*V+O*C+D*ot+z*X,c[7]=I*H+O*B+D*nt+z*mt,c[11]=I*K+O*$+D*L+z*w,c[15]=I*U+O*J+D*Y+z*Q,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],y=t[10],S=t[14],E=t[3],R=t[7],M=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*d*y+s*p*y+l*d*S-s*m*S)+R*(+n*m*S-n*p*y+c*f*y-l*f*S+l*p*g-c*m*g)+M*(+n*p*v-n*d*S-c*f*v+s*f*S+c*d*g-s*p*g)+_*(-l*d*g-n*m*v+n*d*y+l*f*v-s*f*y+s*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],y=t[10],S=t[11],E=t[12],R=t[13],M=t[14],_=t[15],I=v*M*p-R*y*p+R*m*S-d*M*S-v*m*_+d*y*_,O=E*y*p-g*M*p-E*m*S+f*M*S+g*m*_-f*y*_,D=g*R*p-E*v*p+E*d*S-f*R*S-g*d*_+f*v*_,z=E*v*m-g*R*m-E*d*y+f*R*y+g*d*M-f*v*M,V=n*I+s*O+l*D+c*z;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return t[0]=I*H,t[1]=(R*y*c-v*M*c-R*l*S+s*M*S+v*l*_-s*y*_)*H,t[2]=(d*M*c-R*m*c+R*l*p-s*M*p-d*l*_+s*m*_)*H,t[3]=(v*m*c-d*y*c-v*l*p+s*y*p+d*l*S-s*m*S)*H,t[4]=O*H,t[5]=(g*M*c-E*y*c+E*l*S-n*M*S-g*l*_+n*y*_)*H,t[6]=(E*m*c-f*M*c-E*l*p+n*M*p+f*l*_-n*m*_)*H,t[7]=(f*y*c-g*m*c+g*l*p-n*y*p-f*l*S+n*m*S)*H,t[8]=D*H,t[9]=(E*v*c-g*R*c-E*s*S+n*R*S+g*s*_-n*v*_)*H,t[10]=(f*R*c-E*d*c+E*s*p-n*R*p-f*s*_+n*d*_)*H,t[11]=(g*d*c-f*v*c-g*s*p+n*v*p+f*s*S-n*d*S)*H,t[12]=z*H,t[13]=(g*R*l-E*v*l+E*s*y-n*R*y-g*s*M+n*v*M)*H,t[14]=(E*d*l-f*R*l-E*s*m+n*R*m+f*s*M-n*d*M)*H,t[15]=(f*v*l-g*d*l+g*s*m-n*v*m-f*s*y+n*d*y)*H,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,d=n._z,m=n._w,p=c+c,g=f+f,v=d+d,y=c*p,S=c*g,E=c*v,R=f*g,M=f*v,_=d*v,I=m*p,O=m*g,D=m*v,z=s.x,V=s.y,H=s.z;return l[0]=(1-(R+_))*z,l[1]=(S+D)*z,l[2]=(E-O)*z,l[3]=0,l[4]=(S-D)*V,l[5]=(1-(y+_))*V,l[6]=(M+I)*V,l[7]=0,l[8]=(E+O)*H,l[9]=(M-I)*H,l[10]=(1-(y+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;let c=hr.set(l[0],l[1],l[2]).length();const f=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/c,g=1/f,v=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,n.setFromRotationMatrix(xi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,n,s,l,c,f,d=Bi,m=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(s-l),y=(n+t)/(n-t),S=(s+l)/(s-l);let E,R;if(m)E=c/(f-c),R=f*c/(f-c);else if(d===Bi)E=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(d===tu)E=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,f,d=Bi,m=!1){const p=this.elements,g=2/(n-t),v=2/(s-l),y=-(n+t)/(n-t),S=-(s+l)/(s-l);let E,R;if(m)E=1/(f-c),R=f/(f-c);else if(d===Bi)E=-2/(f-c),R=-(f+c)/(f-c);else if(d===tu)E=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const hr=new G,xi=new Xe,fM=new G(0,0,0),hM=new G(1,1,1),Ia=new G,xc=new G,$n=new G,J_=new Xe,$_=new Ms;class ua{constructor(t=0,n=0,s=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-de(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(de(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-de(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(de(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return $_.setFromEuler(this),this.setFromQuaternion($_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class $d{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const t0=new G,dr=new Ms,ia=new Xe,Mc=new G,Bo=new G,pM=new G,mM=new Ms,e0=new G(1,0,0),n0=new G(0,1,0),i0=new G(0,0,1),a0={type:"added"},gM={type:"removed"},pr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class An extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new G,n=new ua,s=new Ms,l=new G(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ce}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return dr.setFromAxisAngle(t,n),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,n){return dr.setFromAxisAngle(t,n),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(e0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(i0,t)}translateOnAxis(t,n){return t0.copy(t).applyQuaternion(this.quaternion),this.position.add(t0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(e0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(i0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Mc.copy(t):Mc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Bo,Mc,this.up):ia.lookAt(Mc,Bo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ia),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(a0),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gM),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(a0),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),y=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new G(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new G,aa=new G,Rh=new G,sa=new G,mr=new G,gr=new G,s0=new G,wh=new G,Ch=new G,Dh=new G,Uh=new Ge,Lh=new Ge,Nh=new Ge;class di{constructor(t=new G,n=new G,s=new G){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Mi.subVectors(t,n),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Mi.subVectors(l,n),aa.subVectors(s,n),Rh.subVectors(t,n);const f=Mi.dot(Mi),d=Mi.dot(aa),m=Mi.dot(Rh),p=aa.dot(aa),g=aa.dot(Rh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(p*m-d*g)*y,E=(f*g-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,n,s,l,c,f,d,m){return this.getBarycoord(t,n,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(f,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,n,s,l,c,f){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,n),Lh.fromBufferAttribute(t,s),Nh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,c.x),f.addScaledVector(Lh,c.y),f.addScaledVector(Nh,c.z),f}static isFrontFacing(t,n,s,l){return Mi.subVectors(s,n),aa.subVectors(t,n),Mi.cross(aa).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Mi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return di.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return di.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,d;mr.subVectors(l,s),gr.subVectors(c,s),wh.subVectors(t,s);const m=mr.dot(wh),p=gr.dot(wh);if(m<=0&&p<=0)return n.copy(s);Ch.subVectors(t,l);const g=mr.dot(Ch),v=gr.dot(Ch);if(g>=0&&v<=g)return n.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(s).addScaledVector(mr,f);Dh.subVectors(t,c);const S=mr.dot(Dh),E=gr.dot(Dh);if(E>=0&&S<=E)return n.copy(c);const R=S*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(s).addScaledVector(gr,d);const M=g*E-S*v;if(M<=0&&v-g>=0&&S-E>=0)return s0.subVectors(c,l),d=(v-g)/(v-g+(S-E)),n.copy(l).addScaledVector(s0,d);const _=1/(M+R+y);return f=R*_,d=y*_,n.copy(s).addScaledVector(mr,f).addScaledVector(gr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Oh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class xe{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=we.workingColorSpace){return this.r=t,this.g=n,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=we.workingColorSpace){if(t=Qd(t,1),n=de(n,0,1),s=de(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Oh(f,c,t+1/3),this.g=Oh(f,c,t),this.b=Oh(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,n=hi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=hi){const s=hv[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return we.workingToColorSpace(Ln.copy(this),t),Math.round(de(Ln.r*255,0,255))*65536+Math.round(de(Ln.g*255,0,255))*256+Math.round(de(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(Ln.copy(this),n);const s=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){we.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+n,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Fa),t.getHSL(Ec);const s=Yo(Fa.h,Ec.h,n),l=Yo(Fa.s,Ec.s,n),c=Yo(Fa.l,Ec.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new xe;xe.NAMES=hv;let _M=0;class bs extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Dr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==td&&(s.blendSrc=this.blendSrc),this.blendDst!==ed&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ar extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new G,Tc=new zt;let vM=0;class Ai{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=Fd,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Tc.fromBufferAttribute(this,n),Tc.applyMatrix3(t),this.setXY(n,Tc.x,Tc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Ei(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Oe(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(t,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(t,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(t,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Oe(n,this.array),s=Oe(s,this.array),l=Oe(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Oe(n,this.array),s=Oe(s,this.array),l=Oe(l,this.array),c=Oe(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fd&&(t.usage=this.usage),t}}class dv extends Ai{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class pv extends Ai{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class pi extends Ai{constructor(t,n,s){super(new Float32Array(t),n,s)}}let yM=0;const fi=new Xe,Ph=new An,_r=new G,ti=new nl,Io=new nl,xn=new G;class ii extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?pv:dv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,n,s){return fi.makeTranslation(t,n,s),this.applyMatrix4(fi),this}scale(t,n,s){return fi.makeScale(t,n,s),this.applyMatrix4(fi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new pi(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ti.min,Io.min),ti.expandByPoint(xn),xn.addVectors(ti.max,Io.max),ti.expandByPoint(xn)):(ti.expandByPoint(Io.min),ti.expandByPoint(Io.max))}ti.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(t,p),xn.add(_r)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new G,m[K]=new G;const p=new G,g=new G,v=new G,y=new zt,S=new zt,E=new zt,R=new G,M=new G;function _(K,U,C){p.fromBufferAttribute(s,K),g.fromBufferAttribute(s,U),v.fromBufferAttribute(s,C),y.fromBufferAttribute(c,K),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),g.sub(p),v.sub(p),S.sub(y),E.sub(y);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(B),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(B),d[K].add(R),d[U].add(R),d[C].add(R),m[K].add(M),m[U].add(M),m[C].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let K=0,U=I.length;K<U;++K){const C=I[K],B=C.start,$=C.count;for(let J=B,ot=B+$;J<ot;J+=3)_(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const O=new G,D=new G,z=new G,V=new G;function H(K){z.fromBufferAttribute(l,K),V.copy(z);const U=d[K];O.copy(U),O.sub(z.multiplyScalar(z.dot(U))).normalize(),D.crossVectors(V,U);const B=D.dot(m[K])<0?-1:1;f.setXYZW(K,O.x,O.y,O.z,B)}for(let K=0,U=I.length;K<U;++K){const C=I[K],B=C.start,$=C.count;for(let J=B,ot=B+$;J<ot;J+=3)H(t.getX(J+0)),H(t.getX(J+1)),H(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new G,c=new G,f=new G,d=new G,m=new G,p=new G,g=new G,v=new G;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),R=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,R),f.fromBufferAttribute(n,M),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)l.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let S=0,E=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*g;for(let _=0;_<g;_++)y[E++]=p[S++]}return new Ai(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],S=t(y,s);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new Xe,hs=new al,bc=new il,o0=new G,Ac=new G,Rc=new G,wc=new G,zh=new G,Cc=new G,l0=new G,Dc=new G;class ni extends An{constructor(t=new ii,n=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(zh.fromBufferAttribute(v,t),f?Cc.addScaledVector(zh,g):Cc.addScaledVector(zh.sub(n),g))}n.add(Cc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),hs.copy(t.ray).recast(t.near),!(bc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(bc,o0)===null||hs.origin.distanceToSquared(o0)>(t.far-t.near)**2))&&(r0.copy(c).invert(),hs.copy(t.ray).applyMatrix4(r0),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,hs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,R=y.length;E<R;E++){const M=y[E],_=f[M.materialIndex],I=Math.max(M.start,S.start),O=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=I,z=O;D<z;D+=3){const V=d.getX(D),H=d.getX(D+1),K=d.getX(D+2);l=Uc(this,_,t,s,p,g,v,V,H,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,_=R;M<_;M+=3){const I=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=Uc(this,f,t,s,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,R=y.length;E<R;E++){const M=y[E],_=f[M.materialIndex],I=Math.max(M.start,S.start),O=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=I,z=O;D<z;D+=3){const V=D,H=D+1,K=D+2;l=Uc(this,_,t,s,p,g,v,V,H,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=E,_=R;M<_;M+=3){const I=M,O=M+1,D=M+2;l=Uc(this,f,t,s,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function SM(r,t,n,s,l,c,f,d){let m;if(t.side===In?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Wa,d),m===null)return null;Dc.copy(d),Dc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Dc);return p<n.near||p>n.far?null:{distance:p,point:Dc.clone(),object:r}}function Uc(r,t,n,s,l,c,f,d,m,p){r.getVertexPosition(d,Ac),r.getVertexPosition(m,Rc),r.getVertexPosition(p,wc);const g=SM(r,t,n,s,Ac,Rc,wc,l0);if(g){const v=new G;di.getBarycoord(l0,Ac,Rc,wc,v),l&&(g.uv=di.getInterpolatedAttribute(l,d,m,p,v,new zt)),c&&(g.uv1=di.getInterpolatedAttribute(c,d,m,p,v,new zt)),f&&(g.normal=di.getInterpolatedAttribute(f,d,m,p,v,new G),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new G,materialIndex:0};di.getNormal(Ac,Rc,wc,y.normal),g.face=y,g.barycoord=v}return g}class sl extends ii{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pi(p,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(v,2));function E(R,M,_,I,O,D,z,V,H,K,U){const C=D/H,B=z/K,$=D/2,J=z/2,ot=V/2,nt=H+1,L=K+1;let Y=0,X=0;const mt=new G;for(let w=0;w<L;w++){const Q=w*B-J;for(let pt=0;pt<nt;pt++){const xt=pt*C-$;mt[R]=xt*I,mt[M]=Q*O,mt[_]=ot,p.push(mt.x,mt.y,mt.z),mt[R]=0,mt[M]=0,mt[_]=V>0?1:-1,g.push(mt.x,mt.y,mt.z),v.push(pt/H),v.push(1-w/K),Y+=1}}for(let w=0;w<K;w++)for(let Q=0;Q<H;Q++){const pt=y+Q+nt*w,xt=y+Q+nt*(w+1),Rt=y+(Q+1)+nt*(w+1),it=y+(Q+1)+nt*w;m.push(pt,xt,it),m.push(xt,Rt,it),X+=6}d.addGroup(S,X,U),S+=X,y+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function Bn(r){const t={};for(let n=0;n<r.length;n++){const s=Br(r[n]);for(const l in s)t[l]=s[l]}return t}function xM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function mv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const MM={clone:Br,merge:Bn};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class gv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new G,c0=new zt,u0=new zt;class ei extends gv{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,n){return this.getViewBounds(t,c0,u0),n.subVectors(u0,c0)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Wo*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vr=-90,yr=1;class bM extends An{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(vr,yr,t,n);l.layers=this.layers,this.add(l);const c=new ei(vr,yr,t,n);c.layers=this.layers,this.add(c);const f=new ei(vr,yr,t,n);f.layers=this.layers,this.add(f);const d=new ei(vr,yr,t,n);d.layers=this.layers,this.add(d);const m=new ei(vr,yr,t,n);m.layers=this.layers,this.add(m);const p=new ei(vr,yr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,d,m]=n;for(const p of n)this.remove(p);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,d),t.setRenderTarget(s,3,l),t.render(n,m),t.setRenderTarget(s,4,l),t.render(n,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(v,y,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class _v extends Fn{constructor(t=[],n=Or,s,l,c,f,d,m,p,g){super(t,n,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AM extends Es{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _v(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new sl(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:In,blending:ka});c.uniforms.tEquirect.value=n;const f=new ni(l,c),d=n.minFilter;return n.minFilter===Ss&&(n.minFilter=zi),new bM(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class Rr extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,s),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Rr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class wM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class CM{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Fd,this.updateRanges=[],this.version=0,this.uuid=la()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,s){t*=this.stride,s*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[s+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=la()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=la()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new G;class nu{constructor(t,n,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,s=this.data.count;n<s;n++)zn.fromBufferAttribute(this,n),zn.applyMatrix4(t),this.setXYZ(n,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)zn.fromBufferAttribute(this,n),zn.applyNormalMatrix(t),this.setXYZ(n,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)zn.fromBufferAttribute(this,n),zn.transformDirection(t),this.setXYZ(n,zn.x,zn.y,zn.z);return this}getComponent(t,n){let s=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(s=Ei(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Oe(s,this.array)),this.data.array[t*this.data.stride+this.offset+n]=s,this}setX(t,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(t,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Oe(n,this.array),s=Oe(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this}setXYZ(t,n,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=Oe(n,this.array),s=Oe(s,this.array),l=Oe(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Oe(n,this.array),s=Oe(s,this.array),l=Oe(l,this.array),c=Oe(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Ai(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vv extends bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Sr;const Fo=new G,xr=new G,Mr=new G,Er=new zt,Ho=new zt,yv=new Xe,Lc=new G,Go=new G,Nc=new G,f0=new zt,Ih=new zt,h0=new zt;class DM extends An{constructor(t=new vv){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new ii;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new CM(n,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new nu(s,3,0,!1)),Sr.setAttribute("uv",new nu(s,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new zt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),yv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-Mr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;Oc(Lc.set(-.5,-.5,0),Mr,f,xr,l,c),Oc(Go.set(.5,-.5,0),Mr,f,xr,l,c),Oc(Nc.set(.5,.5,0),Mr,f,xr,l,c),f0.set(0,0),Ih.set(1,0),h0.set(1,1);let d=t.ray.intersectTriangle(Lc,Go,Nc,!1,Fo);if(d===null&&(Oc(Go.set(-.5,.5,0),Mr,f,xr,l,c),Ih.set(0,1),d=t.ray.intersectTriangle(Lc,Nc,Go,!1,Fo),d===null))return;const m=t.ray.origin.distanceTo(Fo);m<t.near||m>t.far||n.push({distance:m,point:Fo.clone(),uv:di.getInterpolation(Fo,Lc,Go,Nc,f0,Ih,h0,new zt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oc(r,t,n,s,l,c){Er.subVectors(r,n).addScalar(.5).multiply(s),l!==void 0?(Ho.x=c*Er.x-l*Er.y,Ho.y=l*Er.x+c*Er.y):Ho.copy(Er),r.copy(t),r.x+=Ho.x,r.y+=Ho.y,r.applyMatrix4(yv)}const Fh=new G,UM=new G,LM=new ce;class Ga{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=Fh.subVectors(s,n).cross(UM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||LM.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new il,NM=new zt(.5,.5),Pc=new G;class tp{constructor(t=new Ga,n=new Ga,s=new Ga,l=new Ga,c=new Ga,f=new Ga){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Bi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],y=c[6],S=c[7],E=c[8],R=c[9],M=c[10],_=c[11],I=c[12],O=c[13],D=c[14],z=c[15];if(l[0].setComponents(p-f,S-g,_-E,z-I).normalize(),l[1].setComponents(p+f,S+g,_+E,z+I).normalize(),l[2].setComponents(p+d,S+v,_+R,z+O).normalize(),l[3].setComponents(p-d,S-v,_-R,z-O).normalize(),s)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,S-y,_-M,z-D).normalize();else if(l[4].setComponents(p-m,S-y,_-M,z-D).normalize(),n===Bi)l[5].setComponents(p+m,S+y,_+M,z+D).normalize();else if(n===tu)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const n=NM.distanceTo(t.center);return ds.radius=.7071067811865476+n,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new G,au=new G,d0=new Xe,Vo=new al,zc=new il,Hh=new G,p0=new G;class OM extends An{constructor(t=new ii,n=new Sv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let l=1,c=n.count;l<c;l++)iu.fromBufferAttribute(n,l-1),au.fromBufferAttribute(n,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new pi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;d0.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(d0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let R=S,M=E-1;R<M;R+=p){const _=g.getX(R),I=g.getX(R+1),O=Bc(this,t,Vo,m,_,I,R);O&&n.push(O)}if(this.isLineLoop){const R=g.getX(E-1),M=g.getX(S),_=Bc(this,t,Vo,m,R,M,E-1);_&&n.push(_)}}else{const S=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let R=S,M=E-1;R<M;R+=p){const _=Bc(this,t,Vo,m,R,R+1,R);_&&n.push(_)}if(this.isLineLoop){const R=Bc(this,t,Vo,m,E-1,S,E-1);R&&n.push(R)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Bc(r,t,n,s,l,c,f){const d=r.geometry.attributes.position;if(iu.fromBufferAttribute(d,l),au.fromBufferAttribute(d,c),n.distanceSqToSegment(iu,au,Hh,p0)>s)return;Hh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Hh);if(!(p<t.near||p>t.far))return{distance:p,point:p0.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class xv extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const m0=new Xe,Hd=new al,Ic=new il,Fc=new G;class PM extends An{constructor(t=new ii,n=new xv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;m0.copy(l).invert(),Hd.copy(t.ray).applyMatrix4(m0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=y,R=S;E<R;E++){const M=p.getX(E);Fc.fromBufferAttribute(v,M),g0(Fc,M,m,l,t,n,this)}}else{const y=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=y,R=S;E<R;E++)Fc.fromBufferAttribute(v,E),g0(Fc,E,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function g0(r,t,n,s,l,c,f){const d=Hd.distanceSqToPoint(r);if(d<n){const m=new G;Hd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class ep extends Fn{constructor(t,n,s,l,c,f,d,m,p){super(t,n,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mv extends Fn{constructor(t,n,s=xs,l,c,f,d=bi,m=bi,p,g=Jo,v=1){if(g!==Jo&&g!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:n,depth:v};super(y,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],y=s[l+1]-g,S=(f-g)/y;return(l+S)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=n||(f.isVector2?new zt:new G);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new G,l=[],c=[],f=[],d=new G,m=new Xe;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new G)}c[0]=new G,f[0]=new G;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),y<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(de(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(n===!0){let S=Math.acos(de(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class np extends Fi{constructor(t=0,n=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,n=new zt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=m-this.aX,S=p-this.aY;m=y*g-S*v+this.aX,p=y*v+S*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zM extends np{constructor(t,n,s,l,c,f){super(t,n,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function ip(){let r=0,t=0,n=0,s=0;function l(c,f,d,m){r=c,t=d,n=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,g,v){let y=(f-c)/p-(d-c)/(p+g)+(d-f)/g,S=(d-f)/g-(m-f)/(g+v)+(m-d)/v;y*=g,S*=g,l(f,d,y,S)},calc:function(c){const f=c*c,d=f*c;return r+t*c+n*f+s*d}}}const Hc=new G,Gh=new ip,Vh=new ip,kh=new ip;class BM extends Fi{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new G){const s=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Hc.subVectors(l[0],l[1]).add(l[0]),p=Hc);const v=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Hc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),R=Math.pow(v.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(g),S);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),Gh.initNonuniformCatmullRom(p.x,v.x,y.x,g.x,E,R,M),Vh.initNonuniformCatmullRom(p.y,v.y,y.y,g.y,E,R,M),kh.initNonuniformCatmullRom(p.z,v.z,y.z,g.z,E,R,M)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(p.x,v.x,y.x,g.x,this.tension),Vh.initCatmullRom(p.y,v.y,y.y,g.y,this.tension),kh.initCatmullRom(p.z,v.z,y.z,g.z,this.tension));return s.set(Gh.calc(m),Vh.calc(m),kh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _0(r,t,n,s,l){const c=(s-t)*.5,f=(l-n)*.5,d=r*r,m=r*d;return(2*n-2*s+c+f)*m+(-3*n+3*s-2*c-f)*d+c*r+n}function IM(r,t){const n=1-r;return n*n*t}function FM(r,t){return 2*(1-r)*r*t}function HM(r,t){return r*r*t}function qo(r,t,n,s){return IM(r,t)+FM(r,n)+HM(r,s)}function GM(r,t){const n=1-r;return n*n*n*t}function VM(r,t){const n=1-r;return 3*n*n*r*t}function kM(r,t){return 3*(1-r)*r*r*t}function XM(r,t){return r*r*r*t}function Zo(r,t,n,s,l){return GM(r,t)+VM(r,n)+kM(r,s)+XM(r,l)}class Ev extends Fi{constructor(t=new zt,n=new zt,s=new zt,l=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new zt){const s=n,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Zo(t,l.x,c.x,f.x,d.x),Zo(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WM extends Fi{constructor(t=new G,n=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new G){const s=n,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Zo(t,l.x,c.x,f.x,d.x),Zo(t,l.y,c.y,f.y,d.y),Zo(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tv extends Fi{constructor(t=new zt,n=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new zt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new zt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends Fi{constructor(t=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new G){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bv extends Fi{constructor(t=new zt,n=new zt,s=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new zt){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(qo(t,l.x,c.x,f.x),qo(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qM extends Fi{constructor(t=new G,n=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new G){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(qo(t,l.x,c.x,f.x),qo(t,l.y,c.y,f.y),qo(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Av extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new zt){const s=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(_0(d,m.x,p.x,g.x,v.x),_0(d,m.y,p.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new zt().fromArray(l))}return this}}var v0=Object.freeze({__proto__:null,ArcCurve:zM,CatmullRomCurve3:BM,CubicBezierCurve:Ev,CubicBezierCurve3:WM,EllipseCurve:np,LineCurve:Tv,LineCurve3:YM,QuadraticBezierCurve:bv,QuadraticBezierCurve3:qM,SplineCurve:Av});class ZM extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new v0[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];s&&s.equals(g)||(n.push(g),s=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new v0[l.type]().fromJSON(l))}return this}}class jM extends ZM{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new Tv(this.currentPoint.clone(),new zt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new bv(this.currentPoint.clone(),new zt(t,n),new zt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,f){const d=new Ev(this.currentPoint.clone(),new zt(t,n),new zt(s,l),new zt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new Av(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,n+m,s,l,c,f),this}absarc(t,n,s,l,c,f){return this.absellipse(t,n,s,s,l,c,f),this}ellipse(t,n,s,l,c,f,d,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,s,l,c,f,d,m),this}absellipse(t,n,s,l,c,f,d,m){const p=new np(t,n,s,l,c,f,d,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ru extends ii{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,y=n/m,S=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const I=_*y-f;for(let O=0;O<p;O++){const D=O*v-c;E.push(D,-I,0),R.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const O=I+p*_,D=I+p*(_+1),z=I+1+p*(_+1),V=I+1+p*_;S.push(O,D,V),S.push(D,z,V)}this.setIndex(S),this.setAttribute("position",new pi(E,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class jo extends ii{constructor(t=1,n=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const g=[],v=new G,y=new G,S=[],E=[],R=[],M=[];for(let _=0;_<=s;_++){const I=[],O=_/s;let D=0;_===0&&f===0?D=.5/n:_===s&&m===Math.PI&&(D=-.5/n);for(let z=0;z<=n;z++){const V=z/n;v.x=-t*Math.cos(l+V*c)*Math.sin(f+O*d),v.y=t*Math.cos(f+O*d),v.z=t*Math.sin(l+V*c)*Math.sin(f+O*d),E.push(v.x,v.y,v.z),y.copy(v).normalize(),R.push(y.x,y.y,y.z),M.push(V+D,1-O),I.push(p++)}g.push(I)}for(let _=0;_<s;_++)for(let I=0;I<n;I++){const O=g[_][I+1],D=g[_][I],z=g[_+1][I],V=g[_+1][I+1];(_!==0||f>0)&&S.push(O,D,V),(_!==s-1||m<Math.PI)&&S.push(D,z,V)}this.setIndex(S),this.setAttribute("position",new pi(E,3)),this.setAttribute("normal",new pi(R,3)),this.setAttribute("uv",new pi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class KM extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QM extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rv extends An{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xh=new Xe,y0=new G,S0=new G;class JM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;y0.setFromMatrixPosition(t.matrixWorld),n.position.copy(y0),S0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(S0),n.updateMatrixWorld(),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const x0=new Xe,ko=new G,Wh=new G;class $M extends JM{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,n=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),s.position.copy(ko),Wh.copy(s.position),Wh.add(this._cubeDirections[n]),s.up.copy(this._cubeUps[n]),s.lookAt(Wh),s.updateMatrixWorld(),l.makeTranslation(-ko.x,-ko.y,-ko.z),x0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(x0,s.coordinateSystem,s.reversedDepth)}}class tE extends Rv{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class eE extends gv{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nE extends Rv{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class iE extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class aE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const M0=new Xe;class sE{constructor(t,n,s=0,l=1/0){this.ray=new al(t,n),this.near=s,this.far=l,this.camera=null,this.layers=new $d,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return M0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(M0),this}intersectObject(t,n=!0,s=[]){return Gd(t,this,s,n),s.sort(E0),s}intersectObjects(t,n=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Gd(t[l],this,s,n);return s.sort(E0),s}}function E0(r,t){return r.distance-t.distance}function Gd(r,t,n,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Gd(c[f],t,n,!0)}}class T0{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(de(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rE extends Ts{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function b0(r,t,n,s){const l=oE(s);switch(n){case av:return r*t;case rv:return r*t/l.components*l.byteLength;case Zd:return r*t/l.components*l.byteLength;case ov:return r*t*2/l.components*l.byteLength;case jd:return r*t*2/l.components*l.byteLength;case sv:return r*t*3/l.components*l.byteLength;case Ti:return r*t*4/l.components*l.byteLength;case Kd:return r*t*4/l.components*l.byteLength;case Wc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:case gd:return Math.max(r,16)*Math.max(t,8)/4;case dd:case md:return Math.max(r,8)*Math.max(t,8)/2;case _d:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jc:case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case lv:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bd:case Id:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oE(r){switch(r){case Ii:case ev:return{byteLength:1,components:1};case Ko:case nv:case el:return{byteLength:2,components:1};case Yd:case qd:return{byteLength:2,components:4};case xs:case Wd:case oa:return{byteLength:4,components:1};case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function lE(r){const t=new WeakMap;function n(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],R=v[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,v[y]=R)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const R=v[S];r.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var cE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ME=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FE="gl_FragColor = linearToOutputTexel( gl_FragColor );",HE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ST=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Db=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:cE,alphahash_pars_fragment:uE,alphamap_fragment:fE,alphamap_pars_fragment:hE,alphatest_fragment:dE,alphatest_pars_fragment:pE,aomap_fragment:mE,aomap_pars_fragment:gE,batching_pars_vertex:_E,batching_vertex:vE,begin_vertex:yE,beginnormal_vertex:SE,bsdfs:xE,iridescence_fragment:ME,bumpmap_pars_fragment:EE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:AE,clipping_planes_vertex:RE,color_fragment:wE,color_pars_fragment:CE,color_pars_vertex:DE,color_vertex:UE,common:LE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:OE,displacementmap_pars_vertex:PE,displacementmap_vertex:zE,emissivemap_fragment:BE,emissivemap_pars_fragment:IE,colorspace_fragment:FE,colorspace_pars_fragment:HE,envmap_fragment:GE,envmap_common_pars_fragment:VE,envmap_pars_fragment:kE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:eT,envmap_vertex:WE,fog_vertex:YE,fog_pars_vertex:qE,fog_fragment:ZE,fog_pars_fragment:jE,gradientmap_pars_fragment:KE,lightmap_pars_fragment:QE,lights_lambert_fragment:JE,lights_lambert_pars_fragment:$E,lights_pars_begin:tT,lights_toon_fragment:nT,lights_toon_pars_fragment:iT,lights_phong_fragment:aT,lights_phong_pars_fragment:sT,lights_physical_fragment:rT,lights_physical_pars_fragment:oT,lights_fragment_begin:lT,lights_fragment_maps:cT,lights_fragment_end:uT,logdepthbuf_fragment:fT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:dT,logdepthbuf_vertex:pT,map_fragment:mT,map_pars_fragment:gT,map_particle_fragment:_T,map_particle_pars_fragment:vT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:ST,morphinstance_vertex:xT,morphcolor_vertex:MT,morphnormal_vertex:ET,morphtarget_pars_vertex:TT,morphtarget_vertex:bT,normal_fragment_begin:AT,normal_fragment_maps:RT,normal_pars_fragment:wT,normal_pars_vertex:CT,normal_vertex:DT,normalmap_pars_fragment:UT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:NT,clearcoat_pars_fragment:OT,iridescence_pars_fragment:PT,opaque_fragment:zT,packing:BT,premultiplied_alpha_fragment:IT,project_vertex:FT,dithering_fragment:HT,dithering_pars_fragment:GT,roughnessmap_fragment:VT,roughnessmap_pars_fragment:kT,shadowmap_pars_fragment:XT,shadowmap_pars_vertex:WT,shadowmap_vertex:YT,shadowmask_pars_fragment:qT,skinbase_vertex:ZT,skinning_pars_vertex:jT,skinning_vertex:KT,skinnormal_vertex:QT,specularmap_fragment:JT,specularmap_pars_fragment:$T,tonemapping_fragment:tb,tonemapping_pars_fragment:eb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:ab,uv_pars_vertex:sb,uv_vertex:rb,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:fb,cube_vert:hb,cube_frag:db,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:_b,equirect_vert:vb,equirect_frag:yb,linedashed_vert:Sb,linedashed_frag:xb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:Tb,meshlambert_frag:bb,meshmatcap_vert:Ab,meshmatcap_frag:Rb,meshnormal_vert:wb,meshnormal_frag:Cb,meshphong_vert:Db,meshphong_frag:Ub,meshphysical_vert:Lb,meshphysical_frag:Nb,meshtoon_vert:Ob,meshtoon_frag:Pb,points_vert:zb,points_frag:Bb,shadow_vert:Ib,shadow_frag:Fb,sprite_vert:Hb,sprite_frag:Gb},Pt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Oi={basic:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Bn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Bn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Bn([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Bn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Bn([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Bn([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Bn([Pt.common,Pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Bn([Pt.lights,Pt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Oi.physical={uniforms:Bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Gc={r:0,b:0,g:0},ps=new ua,Vb=new Xe;function kb(r,t,n,s,l,c,f){const d=new xe(0);let m=c===!0?0:1,p,g,v=null,y=0,S=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?n:t).get(D)),D}function R(O){let D=!1;const z=E(O);z===null?_(d,m):z&&z.isColor&&(_(z,1),D=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,f):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(O,D){const z=E(D);z&&(z.isCubeTexture||z.mapping===su)?(g===void 0&&(g=new ni(new sl(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Br(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,H,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ps.copy(D.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(ps)),g.material.toneMapped=we.getTransfer(z.colorSpace)!==Fe,(v!==z||y!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=z,y=z.version,S=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new ni(new ru(2,2),new Ya({name:"BackgroundMaterial",uniforms:Br(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(z.colorSpace)!==Fe,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||y!==z.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=z,y=z.version,S=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(Gc,mv(r)),s.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,f)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:R,addToRenderList:M,dispose:I}}function Xb(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function d(C,B,$,J,ot){let nt=!1;const L=v(J,$,B);c!==L&&(c=L,p(c.object)),nt=S(C,J,$,ot),nt&&E(C,J,$,ot),ot!==null&&t.update(ot,r.ELEMENT_ARRAY_BUFFER),(nt||f)&&(f=!1,D(C,B,$,J),ot!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,B,$){const J=$.wireframe===!0;let ot=s[C.id];ot===void 0&&(ot={},s[C.id]=ot);let nt=ot[B.id];nt===void 0&&(nt={},ot[B.id]=nt);let L=nt[J];return L===void 0&&(L=y(m()),nt[J]=L),L}function y(C){const B=[],$=[],J=[];for(let ot=0;ot<n;ot++)B[ot]=0,$[ot]=0,J[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,B,$,J){const ot=c.attributes,nt=B.attributes;let L=0;const Y=$.getAttributes();for(const X in Y)if(Y[X].location>=0){const w=ot[X];let Q=nt[X];if(Q===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),w===void 0||w.attribute!==Q||Q&&w.data!==Q.data)return!0;L++}return c.attributesNum!==L||c.index!==J}function E(C,B,$,J){const ot={},nt=B.attributes;let L=0;const Y=$.getAttributes();for(const X in Y)if(Y[X].location>=0){let w=nt[X];w===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(w=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(w=C.instanceColor));const Q={};Q.attribute=w,w&&w.data&&(Q.data=w.data),ot[X]=Q,L++}c.attributes=ot,c.attributesNum=L,c.index=J}function R(){const C=c.newAttributes;for(let B=0,$=C.length;B<$;B++)C[B]=0}function M(C){_(C,0)}function _(C,B){const $=c.newAttributes,J=c.enabledAttributes,ot=c.attributeDivisors;$[C]=1,J[C]===0&&(r.enableVertexAttribArray(C),J[C]=1),ot[C]!==B&&(r.vertexAttribDivisor(C,B),ot[C]=B)}function I(){const C=c.newAttributes,B=c.enabledAttributes;for(let $=0,J=B.length;$<J;$++)B[$]!==C[$]&&(r.disableVertexAttribArray($),B[$]=0)}function O(C,B,$,J,ot,nt,L){L===!0?r.vertexAttribIPointer(C,B,$,ot,nt):r.vertexAttribPointer(C,B,$,J,ot,nt)}function D(C,B,$,J){R();const ot=J.attributes,nt=$.getAttributes(),L=B.defaultAttributeValues;for(const Y in nt){const X=nt[Y];if(X.location>=0){let mt=ot[Y];if(mt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(mt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(mt=C.instanceColor)),mt!==void 0){const w=mt.normalized,Q=mt.itemSize,pt=t.get(mt);if(pt===void 0)continue;const xt=pt.buffer,Rt=pt.type,it=pt.bytesPerElement,dt=Rt===r.INT||Rt===r.UNSIGNED_INT||mt.gpuType===Wd;if(mt.isInterleavedBufferAttribute){const _t=mt.data,Mt=_t.stride,Lt=mt.offset;if(_t.isInstancedInterleavedBuffer){for(let $t=0;$t<X.locationSize;$t++)_(X.location+$t,_t.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let $t=0;$t<X.locationSize;$t++)M(X.location+$t);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let $t=0;$t<X.locationSize;$t++)O(X.location+$t,Q/X.locationSize,Rt,w,Mt*it,(Lt+Q/X.locationSize*$t)*it,dt)}else{if(mt.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)_(X.location+_t,mt.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let _t=0;_t<X.locationSize;_t++)M(X.location+_t);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let _t=0;_t<X.locationSize;_t++)O(X.location+_t,Q/X.locationSize,Rt,w,Q*it,Q/X.locationSize*_t*it,dt)}}else if(L!==void 0){const w=L[Y];if(w!==void 0)switch(w.length){case 2:r.vertexAttrib2fv(X.location,w);break;case 3:r.vertexAttrib3fv(X.location,w);break;case 4:r.vertexAttrib4fv(X.location,w);break;default:r.vertexAttrib1fv(X.location,w)}}}}I()}function z(){K();for(const C in s){const B=s[C];for(const $ in B){const J=B[$];for(const ot in J)g(J[ot].object),delete J[ot];delete B[$]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const $ in B){const J=B[$];for(const ot in J)g(J[ot].object),delete J[ot];delete B[$]}delete s[C.id]}function H(C){for(const B in s){const $=s[B];if($[C.id]===void 0)continue;const J=$[C.id];for(const ot in J)g(J[ot].object),delete J[ot];delete $[C.id]}}function K(){U(),f=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:U,dispose:z,releaseStatesOfGeometry:V,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function Wb(r,t,n){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),n.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),n.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];n.update(S,s,1)}function m(p,g,v,y){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*y[R];n.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Yb(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ti&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const K=H===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Ii&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==oa&&!K)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:z,maxSamples:V}}function qb(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new Ga,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||l;return l=y,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){n=g(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const I=c?0:s,O=I*4;let D=_.clippingState||null;m.value=D,D=g(E,y,O,S);for(let z=0;z!==O;++z)D[z]=n[z];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,y,S,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const _=S+R*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,D=S;O!==R;++O,D+=4)f.copy(v[O]).applyMatrix4(I,d),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function Zb(r){let t=new WeakMap;function n(f,d){return d===cd?f.mapping=Or:d===ud&&(f.mapping=Pr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===cd||d===ud)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new AM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const wr=4,A0=[.125,.215,.35,.446,.526,.582],vs=20,Yh=new eE,R0=new xe;let qh=null,Zh=0,jh=0,Kh=!1;const gs=(1+Math.sqrt(5))/2,Tr=1/gs,w0=[new G(-gs,Tr,0),new G(gs,Tr,0),new G(-Tr,0,gs),new G(Tr,0,gs),new G(0,gs,-Tr),new G(0,gs,Tr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],jb=new G;class C0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:d=jb}=c;qh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Zh,jh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Or||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:el,format:Ti,colorSpace:zr,depthBuffer:!1},l=D0(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(t,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kb(c)),this._blurMaterial=Qb(c,t,n)}return l}_compileMaterial(t){const n=new ni(this._lodPlanes[0],t);this._renderer.compile(n,Yh)}_sceneToCubeUV(t,n,s,l,c){const m=new ei(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(R0),v.toneMapping=Xa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new Ar({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new ni(new sl,R);let _=!1;const I=t.background;I?I.isColor&&(R.color.copy(I),t.background=null,_=!0):(R.color.copy(R0),_=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const z=this._cubeSize;Vc(l,D*z,O>2?z:0,z,z),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=I}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Or||t.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ni(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Vc(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(f,Yh)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=w0[(l-c-1)%w0.length];this._blur(t,c-1,c,f,d)}n.autoClear=s}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ni(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*vs-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):vs;M>vs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vs}`);const _=[];let I=0;for(let H=0;H<vs;++H){const K=H/R,U=Math.exp(-K*K/2);_.push(U),H===0?I+=U:H<M&&(I+=2*U)}for(let H=0;H<_.length;H++)_[H]=_[H]/I;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=E,y.mipInt.value=O-s;const D=this._sizeLods[l],z=3*D*(l>O-wr?l-O+wr:0),V=4*(this._cubeSize-D);Vc(n,z,V,3*D,2*D),m.setRenderTarget(n),m.render(v,Yh)}}function Kb(r){const t=[],n=[],s=[];let l=r;const c=r-wr+1+A0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);n.push(d);let m=1/d;f>r-wr?m=A0[f-r+wr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,R=3,M=2,_=1,I=new Float32Array(R*E*S),O=new Float32Array(M*E*S),D=new Float32Array(_*E*S);for(let V=0;V<S;V++){const H=V%3*2/3-1,K=V>2?0:-1,U=[H,K,0,H+2/3,K,0,H+2/3,K+1,0,H,K,0,H+2/3,K+1,0,H,K+1,0];I.set(U,R*E*V),O.set(y,M*E*V);const C=[V,V,V,V,V,V];D.set(C,_*E*V)}const z=new ii;z.setAttribute("position",new Ai(I,R)),z.setAttribute("uv",new Ai(O,M)),z.setAttribute("faceIndex",new Ai(D,_)),t.push(z),l>wr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function D0(r,t,n){const s=new Es(r,t,n);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vc(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function Qb(r,t,n){const s=new Float32Array(vs),l=new G(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function U0(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function L0(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jb(r){let t=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===cd||m===ud,g=m===Or||m===Pr;if(p||g){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new C0(r)),v=p?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new C0(r)),v=p?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function $b(r){const t={};function n(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&Ur("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function tA(r,t,n,s){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,n.memory.geometries++),y}function m(v){const y=v.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let O=0,D=I.length;O<D;O+=3){const z=I[O+0],V=I[O+1],H=I[O+2];y.push(z,V,V,H,H,z)}}else if(E!==void 0){const I=E.array;R=E.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const z=O+0,V=O+1,H=O+2;y.push(z,V,V,H,H,z)}}else return;const M=new(uv(y)?pv:dv)(y,1);M.version=R;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function eA(r,t,n){let s;function l(y){s=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function m(y,S){r.drawElements(s,S,c,y*f),n.update(S,s,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,y*f,E),n.update(S,s,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];n.update(M,s,1)}function v(y,S,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/f,S[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,R,0,E);let _=0;for(let I=0;I<E;I++)_+=S[I]*R[I];n.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function nA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function iA(r,t,n){const s=new WeakMap,l=new Ge;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let z=d.attributes.position.count*D,V=1;z>t.maxTextureSize&&(V=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const H=new Float32Array(z*V*4*v),K=new fv(H,z,V,v);K.type=oa,K.needsUpdate=!0;const U=D*4;for(let B=0;B<v;B++){const $=_[B],J=I[B],ot=O[B],nt=z*V*4*B;for(let L=0;L<$.count;L++){const Y=L*U;E===!0&&(l.fromBufferAttribute($,L),H[nt+Y+0]=l.x,H[nt+Y+1]=l.y,H[nt+Y+2]=l.z,H[nt+Y+3]=0),R===!0&&(l.fromBufferAttribute(J,L),H[nt+Y+4]=l.x,H[nt+Y+5]=l.y,H[nt+Y+6]=l.z,H[nt+Y+7]=0),M===!0&&(l.fromBufferAttribute(ot,L),H[nt+Y+8]=l.x,H[nt+Y+9]=l.y,H[nt+Y+10]=l.z,H[nt+Y+11]=ot.itemSize===4?l.w:1)}}y={count:v,texture:K,size:new zt(z,V)},s.set(d,y),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function aA(r,t,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Cv=new Fn,N0=new Mv(1,1),Dv=new fv,Uv=new cM,Lv=new _v,O0=[],P0=[],z0=new Float32Array(16),B0=new Float32Array(9),I0=new Float32Array(4);function Ir(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=O0[l];if(c===void 0&&(c=new Float32Array(l),O0[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=n,r[f].toArray(c,d)}return c}function mn(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function gn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function ou(r,t){let n=P0[t];n===void 0&&(n=new Int32Array(t),P0[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function sA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function rA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2fv(this.addr,t),gn(n,t)}}function oA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;r.uniform3fv(this.addr,t),gn(n,t)}}function lA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4fv(this.addr,t),gn(n,t)}}function cA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,s))return;I0.set(s),r.uniformMatrix2fv(this.addr,!1,I0),gn(n,s)}}function uA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,s))return;B0.set(s),r.uniformMatrix3fv(this.addr,!1,B0),gn(n,s)}}function fA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,s))return;z0.set(s),r.uniformMatrix4fv(this.addr,!1,z0),gn(n,s)}}function hA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function dA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2iv(this.addr,t),gn(n,t)}}function pA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3iv(this.addr,t),gn(n,t)}}function mA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4iv(this.addr,t),gn(n,t)}}function gA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function _A(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2uiv(this.addr,t),gn(n,t)}}function vA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3uiv(this.addr,t),gn(n,t)}}function yA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4uiv(this.addr,t),gn(n,t)}}function SA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(N0.compareFunction=cv,c=N0):c=Cv,n.setTexture2D(t||c,l)}function xA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||Uv,l)}function MA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||Lv,l)}function EA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||Dv,l)}function TA(r){switch(r){case 5126:return sA;case 35664:return rA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}function bA(r,t){r.uniform1fv(this.addr,t)}function AA(r,t){const n=Ir(t,this.size,2);r.uniform2fv(this.addr,n)}function RA(r,t){const n=Ir(t,this.size,3);r.uniform3fv(this.addr,n)}function wA(r,t){const n=Ir(t,this.size,4);r.uniform4fv(this.addr,n)}function CA(r,t){const n=Ir(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function DA(r,t){const n=Ir(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function UA(r,t){const n=Ir(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function LA(r,t){r.uniform1iv(this.addr,t)}function NA(r,t){r.uniform2iv(this.addr,t)}function OA(r,t){r.uniform3iv(this.addr,t)}function PA(r,t){r.uniform4iv(this.addr,t)}function zA(r,t){r.uniform1uiv(this.addr,t)}function BA(r,t){r.uniform2uiv(this.addr,t)}function IA(r,t){r.uniform3uiv(this.addr,t)}function FA(r,t){r.uniform4uiv(this.addr,t)}function HA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||Cv,c[f])}function GA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||Uv,c[f])}function VA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||Lv,c[f])}function kA(r,t,n){const s=this.cache,l=t.length,c=ou(n,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||Dv,c[f])}function XA(r){switch(r){case 5126:return bA;case 35664:return AA;case 35665:return RA;case 35666:return wA;case 35674:return CA;case 35675:return DA;case 35676:return UA;case 5124:case 35670:return LA;case 35667:case 35671:return NA;case 35668:case 35672:return OA;case 35669:case 35673:return PA;case 5125:return zA;case 36294:return BA;case 36295:return IA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return kA}}class WA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=TA(n.type)}}class YA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XA(n.type)}}class qA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,n[d.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function F0(r,t){r.seq.push(t),r.map[t.id]=t}function ZA(r,t,n){const s=r.name,l=s.length;for(Qh.lastIndex=0;;){const c=Qh.exec(s),f=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){F0(n,p===void 0?new WA(d,r,t):new YA(d,r,t));break}else{let v=n.map[d];v===void 0&&(v=new qA(d),F0(n,v)),n=v}}}class Qc{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);ZA(c,f,this)}}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function H0(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const jA=37297;let KA=0;function QA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return s.join(`
`)}const G0=new ce;function JA(r){we._getMatrix(G0,we.workingColorSpace,r);const t=`mat3( ${G0.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(r)){case $c:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function V0(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+QA(r.getShaderSource(t),d)}else return c}function $A(r,t){const n=JA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function t1(r,t){let n;switch(t){case xx:n="Linear";break;case Mx:n="Reinhard";break;case Ex:n="Cineon";break;case Tx:n="ACESFilmic";break;case Ax:n="AgX";break;case Rx:n="Neutral";break;case bx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kc=new G;function e1(){we.getLuminanceCoefficients(kc);const r=kc.x.toFixed(4),t=kc.y.toFixed(4),n=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function i1(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function a1(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return n}function Xo(r){return r!==""}function k0(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(r){return r.replace(s1,o1)}const r1=new Map;function o1(r,t){let n=he[t];if(n===void 0){const s=r1.get(t);if(s!==void 0)n=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Vd(n)}const l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(r){return r.replace(l1,c1)}function c1(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===tx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function f1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Or:case Pr:t="ENVMAP_TYPE_CUBE";break;case su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function d1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $0:t="ENVMAP_BLENDING_MULTIPLY";break;case yx:t="ENVMAP_BLENDING_MIX";break;case Sx:t="ENVMAP_BLENDING_ADD";break}return t}function p1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function m1(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=u1(n),p=f1(n),g=h1(n),v=d1(n),y=p1(n),S=n1(n),E=i1(c),R=l.createProgram();let M,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Xo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(M=[Y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[Y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?he.tonemapping_pars_fragment:"",n.toneMapping!==Xa?t1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,$A("linearToOutputTexel",n.outputColorSpace),e1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Vd(f),f=k0(f,n),f=X0(f,n),d=Vd(d),d=k0(d,n),d=X0(d,n),f=W0(f),d=W0(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=I+M+f,D=I+_+d,z=H0(l,l.VERTEX_SHADER,O),V=H0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,z),l.attachShader(R,V),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(B){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(R)||"",J=l.getShaderInfoLog(z)||"",ot=l.getShaderInfoLog(V)||"",nt=$.trim(),L=J.trim(),Y=ot.trim();let X=!0,mt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,z,V);else{const w=V0(l,z,"vertex"),Q=V0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+nt+`
`+w+`
`+Q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(L===""||Y==="")&&(mt=!1);mt&&(B.diagnostics={runnable:X,programLog:nt,vertexShader:{log:L,prefix:M},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(z),l.deleteShader(V),K=new Qc(l,R),U=a1(l,R)}let K;this.getUniforms=function(){return K===void 0&&H(this),K};let U;this.getAttributes=function(){return U===void 0&&H(this),U};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,jA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=V,this}let g1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new v1(t),n.set(t,s)),s}}class v1{constructor(t){this.id=g1++,this.code=t,this.usedTimes=0}}function y1(r,t,n,s,l,c,f){const d=new $d,m=new _1,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return p.add(U),U===0?"uv":`uv${U}`}function M(U,C,B,$,J){const ot=$.fog,nt=J.geometry,L=U.isMeshStandardMaterial?$.environment:null,Y=(U.isMeshStandardMaterial?n:t).get(U.envMap||L),X=Y&&Y.mapping===su?Y.image.height:null,mt=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const w=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Q=w!==void 0?w.length:0;let pt=0;nt.morphAttributes.position!==void 0&&(pt=1),nt.morphAttributes.normal!==void 0&&(pt=2),nt.morphAttributes.color!==void 0&&(pt=3);let xt,Rt,it,dt;if(mt){const be=Oi[mt];xt=be.vertexShader,Rt=be.fragmentShader}else xt=U.vertexShader,Rt=U.fragmentShader,m.update(U),it=m.getVertexShaderID(U),dt=m.getFragmentShaderID(U);const _t=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Lt=J.isInstancedMesh===!0,$t=J.isBatchedMesh===!0,Se=!!U.map,pe=!!U.matcap,F=!!Y,Me=!!U.aoMap,Qt=!!U.lightMap,Te=!!U.bumpMap,Ht=!!U.normalMap,We=!!U.displacementMap,Gt=!!U.emissiveMap,oe=!!U.metalnessMap,Ke=!!U.roughnessMap,Qe=U.anisotropy>0,N=U.clearcoat>0,T=U.dispersion>0,at=U.iridescence>0,ft=U.sheen>0,St=U.transmission>0,ut=Qe&&!!U.anisotropyMap,Bt=N&&!!U.clearcoatMap,wt=N&&!!U.clearcoatNormalMap,Wt=N&&!!U.clearcoatRoughnessMap,qt=at&&!!U.iridescenceMap,Et=at&&!!U.iridescenceThicknessMap,Nt=ft&&!!U.sheenColorMap,jt=ft&&!!U.sheenRoughnessMap,Xt=!!U.specularMap,Dt=!!U.specularColorMap,se=!!U.specularIntensityMap,W=St&&!!U.transmissionMap,At=St&&!!U.thicknessMap,Ct=!!U.gradientMap,It=!!U.alphaMap,Tt=U.alphaTest>0,yt=!!U.alphaHash,kt=!!U.extensions;let ae=Xa;U.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=r.toneMapping);const De={shaderID:mt,shaderType:U.type,shaderName:U.name,vertexShader:xt,fragmentShader:Rt,defines:U.defines,customVertexShaderID:it,customFragmentShaderID:dt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:$t,batchingColor:$t&&J._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&J.instanceColor!==null,instancingMorph:Lt&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:zr,alphaToCoverage:!!U.alphaToCoverage,map:Se,matcap:pe,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:X,aoMap:Me,lightMap:Qt,bumpMap:Te,normalMap:Ht,displacementMap:y&&We,emissiveMap:Gt,normalMapObjectSpace:Ht&&U.normalMapType===Lx,normalMapTangentSpace:Ht&&U.normalMapType===Ux,metalnessMap:oe,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ut,clearcoat:N,clearcoatMap:Bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:at,iridescenceMap:qt,iridescenceThicknessMap:Et,sheen:ft,sheenColorMap:Nt,sheenRoughnessMap:jt,specularMap:Xt,specularColorMap:Dt,specularIntensityMap:se,transmission:St,transmissionMap:W,thicknessMap:At,gradientMap:Ct,opaque:U.transparent===!1&&U.blending===Dr&&U.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:yt,combine:U.combine,mapUv:Se&&R(U.map.channel),aoMapUv:Me&&R(U.aoMap.channel),lightMapUv:Qt&&R(U.lightMap.channel),bumpMapUv:Te&&R(U.bumpMap.channel),normalMapUv:Ht&&R(U.normalMap.channel),displacementMapUv:We&&R(U.displacementMap.channel),emissiveMapUv:Gt&&R(U.emissiveMap.channel),metalnessMapUv:oe&&R(U.metalnessMap.channel),roughnessMapUv:Ke&&R(U.roughnessMap.channel),anisotropyMapUv:ut&&R(U.anisotropyMap.channel),clearcoatMapUv:Bt&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:wt&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:jt&&R(U.sheenRoughnessMap.channel),specularMapUv:Xt&&R(U.specularMap.channel),specularColorMapUv:Dt&&R(U.specularColorMap.channel),specularIntensityMapUv:se&&R(U.specularIntensityMap.channel),transmissionMapUv:W&&R(U.transmissionMap.channel),thicknessMapUv:At&&R(U.thicknessMap.channel),alphaMapUv:It&&R(U.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Ht||Qe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!nt.attributes.uv&&(Se||It),fog:!!ot,useFog:U.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Mt,skinning:J.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:pt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:Se&&U.map.isVideoTexture===!0&&we.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:Gt&&U.emissiveMap.isVideoTexture===!0&&we.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Pi,flipSided:U.side===In,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:kt&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&U.extensions.multiDraw===!0||$t)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function _(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const B in U.defines)C.push(B),C.push(U.defines[B]);return U.isRawShaderMaterial===!1&&(I(C,U),O(C,U),C.push(r.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function I(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function O(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function D(U){const C=E[U.type];let B;if(C){const $=Oi[C];B=MM.clone($.uniforms)}else B=U.uniforms;return B}function z(U,C){let B;for(let $=0,J=g.length;$<J;$++){const ot=g[$];if(ot.cacheKey===C){B=ot,++B.usedTimes;break}}return B===void 0&&(B=new m1(r,C,U,c),g.push(B)),B}function V(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function H(U){m.remove(U)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:z,releaseProgram:V,releaseShaderCache:H,programs:g,dispose:K}}function S1(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function x1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function q0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Z0(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(v,y,S,E,R,M){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:R,group:M},r[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=M),t++,_}function d(v,y,S,E,R,M){const _=f(v,y,S,E,R,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):n.push(_)}function m(v,y,S,E,R,M){const _=f(v,y,S,E,R,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):n.unshift(_)}function p(v,y){n.length>1&&n.sort(v||x1),s.length>1&&s.sort(y||q0),l.length>1&&l.sort(y||q0)}function g(){for(let v=t,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function M1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Z0,r.set(s,[f])):l>=c.length?(f=new Z0,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function E1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new xe};break;case"SpotLight":n={position:new G,direction:new G,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":n={color:new xe,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=n,n}}}function T1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let b1=0;function A1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function R1(r){const t=new E1,n=T1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new G);const l=new G,c=new Xe,f=new Xe;function d(p){let g=0,v=0,y=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,E=0,R=0,M=0,_=0,I=0,O=0,D=0,z=0,V=0,H=0;p.sort(A1);for(let U=0,C=p.length;U<C;U++){const B=p[U],$=B.color,J=B.intensity,ot=B.distance,nt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=$.r*J,v+=$.g*J,y+=$.b*J;else if(B.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(B.sh.coefficients[L],J);H++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Y=B.shadow,X=n.get(B);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,s.directionalShadow[S]=X,s.directionalShadowMap[S]=nt,s.directionalShadowMatrix[S]=B.shadow.matrix,I++}s.directional[S]=L,S++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy($).multiplyScalar(J),L.distance=ot,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,s.spot[R]=L;const Y=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,Y.updateMatrices(B),B.castShadow&&V++),s.spotLightMatrix[R]=Y.matrix,B.castShadow){const X=n.get(B);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=nt,D++}R++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy($).multiplyScalar(J),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const Y=B.shadow,X=n.get(B);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=nt,s.pointShadowMatrix[E]=B.shadow.matrix,O++}s.point[E]=L,E++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(J),L.groundColor.copy(B.groundColor).multiplyScalar(J),s.hemi[_]=L,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==S||K.pointLength!==E||K.spotLength!==R||K.rectAreaLength!==M||K.hemiLength!==_||K.numDirectionalShadows!==I||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==z||K.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=R,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+z-V,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=H,K.directionalLength=S,K.pointLength=E,K.spotLength=R,K.rectAreaLength=M,K.hemiLength=_,K.numDirectionalShadows=I,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=z,K.numLightProbes=H,s.version=b1++)}function m(p,g){let v=0,y=0,S=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const O=p[_];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(O.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(O.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(O.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(O.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:s}}function j0(r){const t=new R1(r),n=[],s=[];function l(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function d(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function w1(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new j0(r),t.set(l,[d])):c>=f.length?(d=new j0(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:n,dispose:s}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U1(r,t,n){let s=new tp;const l=new zt,c=new zt,f=new Ge,d=new KM({depthPacking:Dx}),m=new QM,p={},g=n.maxTextureSize,v={[Wa]:In,[In]:Wa,[Pi]:Pi},y=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:C1,fragmentShader:D1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ni(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let _=this.type;this.render=function(V,H,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const U=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ka),$.buffers.depth.getReversed()?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=_!==ra&&this.type===ra,ot=_===ra&&this.type!==ra;for(let nt=0,L=V.length;nt<L;nt++){const Y=V[nt],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const mt=X.getFrameExtents();if(l.multiply(mt),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/mt.x),l.x=c.x*mt.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/mt.y),l.y=c.y*mt.y,X.mapSize.y=c.y)),X.map===null||J===!0||ot===!0){const Q=this.type!==ra?{minFilter:bi,magFilter:bi}:{};X.map!==null&&X.map.dispose(),X.map=new Es(l.x,l.y,Q),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const w=X.getViewportCount();for(let Q=0;Q<w;Q++){const pt=X.getViewport(Q);f.set(c.x*pt.x,c.y*pt.y,c.x*pt.z,c.y*pt.w),$.viewport(f),X.updateMatrices(Y,Q),s=X.getFrustum(),D(H,K,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===ra&&I(X,K),X.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(U,C,B)};function I(V,H){const K=t.update(R);y.defines.VSM_SAMPLES!==V.blurSamples&&(y.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Es(l.x,l.y)),y.uniforms.shadow_pass.value=V.map.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(H,null,K,y,R,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(H,null,K,S,R,null)}function O(V,H,K,U){let C=null;const B=K.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)C=B;else if(C=K.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const $=C.uuid,J=H.uuid;let ot=p[$];ot===void 0&&(ot={},p[$]=ot);let nt=ot[J];nt===void 0&&(nt=C.clone(),ot[J]=nt,H.addEventListener("dispose",z)),C=nt}if(C.visible=H.visible,C.wireframe=H.wireframe,U===ra?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:v[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=r.properties.get(C);$.light=K}return C}function D(V,H,K,U,C){if(V.visible===!1)return;if(V.layers.test(H.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ra)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,V.matrixWorld);const J=t.update(V),ot=V.material;if(Array.isArray(ot)){const nt=J.groups;for(let L=0,Y=nt.length;L<Y;L++){const X=nt[L],mt=ot[X.materialIndex];if(mt&&mt.visible){const w=O(V,mt,U,C);V.onBeforeShadow(r,V,H,K,J,w,X),r.renderBufferDirect(K,null,J,w,V,X),V.onAfterShadow(r,V,H,K,J,w,X)}}}else if(ot.visible){const nt=O(V,ot,U,C);V.onBeforeShadow(r,V,H,K,J,nt,null),r.renderBufferDirect(K,null,J,nt,V,null),V.onAfterShadow(r,V,H,K,J,nt,null)}}const $=V.children;for(let J=0,ot=$.length;J<ot;J++)D($[J],H,K,U,C)}function z(V){V.target.removeEventListener("dispose",z);for(const K in p){const U=p[K],C=V.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const L1={[nd]:id,[ad]:od,[sd]:ld,[Nr]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Nr};function N1(r,t){function n(){let W=!1;const At=new Ge;let Ct=null;const It=new Ge(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,yt,kt,ae,De){De===!0&&(Tt*=ae,yt*=ae,kt*=ae),At.set(Tt,yt,kt,ae),It.equals(At)===!1&&(r.clearColor(Tt,yt,kt,ae),It.copy(At))},reset:function(){W=!1,Ct=null,It.set(-1,0,0,0)}}}function s(){let W=!1,At=!1,Ct=null,It=null,Tt=null;return{setReversed:function(yt){if(At!==yt){const kt=t.get("EXT_clip_control");yt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),At=yt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(yt){yt?_t(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(yt){Ct!==yt&&!W&&(r.depthMask(yt),Ct=yt)},setFunc:function(yt){if(At&&(yt=L1[yt]),It!==yt){switch(yt){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case ad:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case rd:r.depthFunc(r.GEQUAL);break;case od:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=yt}},setLocked:function(yt){W=yt},setClear:function(yt){Tt!==yt&&(At&&(yt=1-yt),r.clearDepth(yt),Tt=yt)},reset:function(){W=!1,Ct=null,It=null,Tt=null,At=!1}}}function l(){let W=!1,At=null,Ct=null,It=null,Tt=null,yt=null,kt=null,ae=null,De=null;return{setTest:function(be){W||(be?_t(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(be){At!==be&&!W&&(r.stencilMask(be),At=be)},setFunc:function(be,mi,un){(Ct!==be||It!==mi||Tt!==un)&&(r.stencilFunc(be,mi,un),Ct=be,It=mi,Tt=un)},setOp:function(be,mi,un){(yt!==be||kt!==mi||ae!==un)&&(r.stencilOp(be,mi,un),yt=be,kt=mi,ae=un)},setLocked:function(be){W=be},setClear:function(be){De!==be&&(r.clearStencil(be),De=be)},reset:function(){W=!1,At=null,Ct=null,It=null,Tt=null,yt=null,kt=null,ae=null,De=null}}}const c=new n,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,S=[],E=null,R=!1,M=null,_=null,I=null,O=null,D=null,z=null,V=null,H=new xe(0,0,0),K=0,U=!1,C=null,B=null,$=null,J=null,ot=null;const nt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,Y=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),L=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),L=Y>=2);let mt=null,w={};const Q=r.getParameter(r.SCISSOR_BOX),pt=r.getParameter(r.VIEWPORT),xt=new Ge().fromArray(Q),Rt=new Ge().fromArray(pt);function it(W,At,Ct,It){const Tt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(W,yt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<Ct;kt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(At+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return yt}const dt={};dt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),dt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),dt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_t(r.DEPTH_TEST),f.setFunc(Nr),Te(!1),Ht(V_),_t(r.CULL_FACE),Me(ka);function _t(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Mt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Lt(W,At){return v[W]!==At?(r.bindFramebuffer(W,At),v[W]=At,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=At),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=At),!0):!1}function $t(W,At){let Ct=S,It=!1;if(W){Ct=y.get(At),Ct===void 0&&(Ct=[],y.set(At,Ct));const Tt=W.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,kt=Tt.length;yt<kt;yt++)Ct[yt]=r.COLOR_ATTACHMENT0+yt;Ct.length=Tt.length,It=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,It=!0);It&&r.drawBuffers(Ct)}function Se(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const pe={[_s]:r.FUNC_ADD,[nx]:r.FUNC_SUBTRACT,[ix]:r.FUNC_REVERSE_SUBTRACT};pe[ax]=r.MIN,pe[sx]=r.MAX;const F={[rx]:r.ZERO,[ox]:r.ONE,[lx]:r.SRC_COLOR,[td]:r.SRC_ALPHA,[px]:r.SRC_ALPHA_SATURATE,[hx]:r.DST_COLOR,[ux]:r.DST_ALPHA,[cx]:r.ONE_MINUS_SRC_COLOR,[ed]:r.ONE_MINUS_SRC_ALPHA,[dx]:r.ONE_MINUS_DST_COLOR,[fx]:r.ONE_MINUS_DST_ALPHA,[mx]:r.CONSTANT_COLOR,[gx]:r.ONE_MINUS_CONSTANT_COLOR,[_x]:r.CONSTANT_ALPHA,[vx]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(W,At,Ct,It,Tt,yt,kt,ae,De,be){if(W===ka){R===!0&&(Mt(r.BLEND),R=!1);return}if(R===!1&&(_t(r.BLEND),R=!0),W!==ex){if(W!==M||be!==U){if((_!==_s||D!==_s)&&(r.blendEquation(r.FUNC_ADD),_=_s,D=_s),be)switch(W){case Dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jc:r.blendFunc(r.ONE,r.ONE);break;case k_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case X_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case k_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,O=null,z=null,V=null,H.set(0,0,0),K=0,M=W,U=be}return}Tt=Tt||At,yt=yt||Ct,kt=kt||It,(At!==_||Tt!==D)&&(r.blendEquationSeparate(pe[At],pe[Tt]),_=At,D=Tt),(Ct!==I||It!==O||yt!==z||kt!==V)&&(r.blendFuncSeparate(F[Ct],F[It],F[yt],F[kt]),I=Ct,O=It,z=yt,V=kt),(ae.equals(H)===!1||De!==K)&&(r.blendColor(ae.r,ae.g,ae.b,De),H.copy(ae),K=De),M=W,U=!1}function Qt(W,At){W.side===Pi?Mt(r.CULL_FACE):_t(r.CULL_FACE);let Ct=W.side===In;At&&(Ct=!Ct),Te(Ct),W.blending===Dr&&W.transparent===!1?Me(ka):Me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function Ht(W){W!==JS?(_t(r.CULL_FACE),W!==B&&(W===V_?r.cullFace(r.BACK):W===$S?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),B=W}function We(W){W!==$&&(L&&r.lineWidth(W),$=W)}function Gt(W,At,Ct){W?(_t(r.POLYGON_OFFSET_FILL),(J!==At||ot!==Ct)&&(r.polygonOffset(At,Ct),J=At,ot=Ct)):Mt(r.POLYGON_OFFSET_FILL)}function oe(W){W?_t(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function Ke(W){W===void 0&&(W=r.TEXTURE0+nt-1),mt!==W&&(r.activeTexture(W),mt=W)}function Qe(W,At,Ct){Ct===void 0&&(mt===null?Ct=r.TEXTURE0+nt-1:Ct=mt);let It=w[Ct];It===void 0&&(It={type:void 0,texture:void 0},w[Ct]=It),(It.type!==W||It.texture!==At)&&(mt!==Ct&&(r.activeTexture(Ct),mt=Ct),r.bindTexture(W,At||dt[W]),It.type=W,It.texture=At)}function N(){const W=w[mt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(W){xt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function jt(W){Rt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Xt(W,At){let Ct=p.get(At);Ct===void 0&&(Ct=new WeakMap,p.set(At,Ct));let It=Ct.get(W);It===void 0&&(It=r.getUniformBlockIndex(At,W.name),Ct.set(W,It))}function Dt(W,At){const It=p.get(At).get(W);m.get(At)!==It&&(r.uniformBlockBinding(At,It,W.__bindingPointIndex),m.set(At,It))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},mt=null,w={},v={},y=new WeakMap,S=[],E=null,R=!1,M=null,_=null,I=null,O=null,D=null,z=null,V=null,H=new xe(0,0,0),K=0,U=!1,C=null,B=null,$=null,J=null,ot=null,xt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:_t,disable:Mt,bindFramebuffer:Lt,drawBuffers:$t,useProgram:Se,setBlending:Me,setMaterial:Qt,setFlipSided:Te,setCullFace:Ht,setLineWidth:We,setPolygonOffset:Gt,setScissorTest:oe,activeTexture:Ke,bindTexture:Qe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:at,texImage2D:qt,texImage3D:Et,updateUBOMapping:Xt,uniformBlockBinding:Dt,texStorage2D:wt,texStorage3D:Wt,texSubImage2D:ft,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Bt,scissor:Nt,viewport:jt,reset:se}}function O1(r,t,n,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return S?new OffscreenCanvas(N,T):eu("canvas")}function R(N,T,at){let ft=1;const St=Qe(N);if((St.width>at||St.height>at)&&(ft=at/Math.max(St.width,St.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ft*St.width),Bt=Math.floor(ft*St.height);v===void 0&&(v=E(ut,Bt));const wt=T?E(ut,Bt):v;return wt.width=ut,wt.height=Bt,wt.getContext("2d").drawImage(N,0,0,ut,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Bt+")."),wt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(N,T,at,ft,St=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=T;if(T===r.RED&&(at===r.FLOAT&&(ut=r.R32F),at===r.HALF_FLOAT&&(ut=r.R16F),at===r.UNSIGNED_BYTE&&(ut=r.R8)),T===r.RED_INTEGER&&(at===r.UNSIGNED_BYTE&&(ut=r.R8UI),at===r.UNSIGNED_SHORT&&(ut=r.R16UI),at===r.UNSIGNED_INT&&(ut=r.R32UI),at===r.BYTE&&(ut=r.R8I),at===r.SHORT&&(ut=r.R16I),at===r.INT&&(ut=r.R32I)),T===r.RG&&(at===r.FLOAT&&(ut=r.RG32F),at===r.HALF_FLOAT&&(ut=r.RG16F),at===r.UNSIGNED_BYTE&&(ut=r.RG8)),T===r.RG_INTEGER&&(at===r.UNSIGNED_BYTE&&(ut=r.RG8UI),at===r.UNSIGNED_SHORT&&(ut=r.RG16UI),at===r.UNSIGNED_INT&&(ut=r.RG32UI),at===r.BYTE&&(ut=r.RG8I),at===r.SHORT&&(ut=r.RG16I),at===r.INT&&(ut=r.RG32I)),T===r.RGB_INTEGER&&(at===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),at===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),at===r.UNSIGNED_INT&&(ut=r.RGB32UI),at===r.BYTE&&(ut=r.RGB8I),at===r.SHORT&&(ut=r.RGB16I),at===r.INT&&(ut=r.RGB32I)),T===r.RGBA_INTEGER&&(at===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),at===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),at===r.UNSIGNED_INT&&(ut=r.RGBA32UI),at===r.BYTE&&(ut=r.RGBA8I),at===r.SHORT&&(ut=r.RGBA16I),at===r.INT&&(ut=r.RGBA32I)),T===r.RGB&&at===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),T===r.RGBA){const Bt=St?$c:we.getTransfer(ft);at===r.FLOAT&&(ut=r.RGBA32F),at===r.HALF_FLOAT&&(ut=r.RGBA16F),at===r.UNSIGNED_BYTE&&(ut=Bt===Fe?r.SRGB8_ALPHA8:r.RGBA8),at===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),at===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(N,T){let at;return N?T===null||T===xs||T===Qo?at=r.DEPTH24_STENCIL8:T===oa?at=r.DEPTH32F_STENCIL8:T===Ko&&(at=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xs||T===Qo?at=r.DEPTH_COMPONENT24:T===oa?at=r.DEPTH_COMPONENT32F:T===Ko&&(at=r.DEPTH_COMPONENT16),at}function z(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function V(N){const T=N.target;T.removeEventListener("dispose",V),K(T),T.isVideoTexture&&g.delete(T)}function H(N){const T=N.target;T.removeEventListener("dispose",H),C(T)}function K(N){const T=s.get(N);if(T.__webglInit===void 0)return;const at=N.source,ft=y.get(at);if(ft){const St=ft[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(N),Object.keys(ft).length===0&&y.delete(at)}s.remove(N)}function U(N){const T=s.get(N);r.deleteTexture(T.__webglTexture);const at=N.source,ft=y.get(at);delete ft[T.__cacheKey],f.memory.textures--}function C(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let St=0;St<T.__webglFramebuffer[ft].length;St++)r.deleteFramebuffer(T.__webglFramebuffer[ft][St]);else r.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)r.deleteFramebuffer(T.__webglFramebuffer[ft]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=N.textures;for(let ft=0,St=at.length;ft<St;ft++){const ut=s.get(at[ft]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(at[ft])}s.remove(N)}let B=0;function $(){B=0}function J(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function ot(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function nt(N,T){const at=s.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&at.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(at,N,T);return}}else N.isExternalTexture&&(at.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,at.__webglTexture,r.TEXTURE0+T)}function L(N,T){const at=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){dt(at,N,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,at.__webglTexture,r.TEXTURE0+T)}function Y(N,T){const at=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){dt(at,N,T);return}n.bindTexture(r.TEXTURE_3D,at.__webglTexture,r.TEXTURE0+T)}function X(N,T){const at=s.get(N);if(N.version>0&&at.__version!==N.version){_t(at,N,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture,r.TEXTURE0+T)}const mt={[fd]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[hd]:r.MIRRORED_REPEAT},w={[bi]:r.NEAREST,[wx]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[gh]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},Q={[Nx]:r.NEVER,[Fx]:r.ALWAYS,[Ox]:r.LESS,[cv]:r.LEQUAL,[Px]:r.EQUAL,[Ix]:r.GEQUAL,[zx]:r.GREATER,[Bx]:r.NOTEQUAL};function pt(N,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===gh||T.magFilter===mc||T.magFilter===Ss||T.minFilter===zi||T.minFilter===gh||T.minFilter===mc||T.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,mt[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,mt[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,mt[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,w[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,w[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bi||T.minFilter!==mc&&T.minFilter!==Ss||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function xt(N,T){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",V));const ft=T.source;let St=y.get(ft);St===void 0&&(St={},y.set(ft,St));const ut=ot(T);if(ut!==N.__cacheKey){St[ut]===void 0&&(St[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,at=!0),St[ut].usedTimes++;const Bt=St[N.__cacheKey];Bt!==void 0&&(St[N.__cacheKey].usedTimes--,Bt.usedTimes===0&&U(T)),N.__cacheKey=ut,N.__webglTexture=St[ut].texture}return at}function Rt(N,T,at){return Math.floor(Math.floor(N/at)/T)}function it(N,T,at,ft){const ut=N.updateRanges;if(ut.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,at,ft,T.data);else{ut.sort((Et,Nt)=>Et.start-Nt.start);let Bt=0;for(let Et=1;Et<ut.length;Et++){const Nt=ut[Bt],jt=ut[Et],Xt=Nt.start+Nt.count,Dt=Rt(jt.start,T.width,4),se=Rt(Nt.start,T.width,4);jt.start<=Xt+1&&Dt===se&&Rt(jt.start+jt.count-1,T.width,4)===Dt?Nt.count=Math.max(Nt.count,jt.start+jt.count-Nt.start):(++Bt,ut[Bt]=jt)}ut.length=Bt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Et=0,Nt=ut.length;Et<Nt;Et++){const jt=ut[Et],Xt=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),se=Xt%T.width,W=Math.floor(Xt/T.width),At=Dt,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,se),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,se,W,At,Ct,at,ft,T.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,qt)}}function dt(N,T,at){let ft=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=r.TEXTURE_3D);const St=xt(N,T),ut=T.source;n.bindTexture(ft,N.__webglTexture,r.TEXTURE0+at);const Bt=s.get(ut);if(ut.version!==Bt.__version||St===!0){n.activeTexture(r.TEXTURE0+at);const wt=we.getPrimaries(we.workingColorSpace),Wt=T.colorSpace===Va?null:we.getPrimaries(T.colorSpace),qt=T.colorSpace===Va||wt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Et=R(T.image,!1,l.maxTextureSize);Et=Ke(T,Et);const Nt=c.convert(T.format,T.colorSpace),jt=c.convert(T.type);let Xt=O(T.internalFormat,Nt,jt,T.colorSpace,T.isVideoTexture);pt(ft,T);let Dt;const se=T.mipmaps,W=T.isVideoTexture!==!0,At=Bt.__version===void 0||St===!0,Ct=ut.dataReady,It=z(T,Et);if(T.isDepthTexture)Xt=D(T.format===$o,T.type),At&&(W?n.texStorage2D(r.TEXTURE_2D,1,Xt,Et.width,Et.height):n.texImage2D(r.TEXTURE_2D,0,Xt,Et.width,Et.height,0,Nt,jt,null));else if(T.isDataTexture)if(se.length>0){W&&At&&n.texStorage2D(r.TEXTURE_2D,It,Xt,se[0].width,se[0].height);for(let Tt=0,yt=se.length;Tt<yt;Tt++)Dt=se[Tt],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Tt,Xt,Dt.width,Dt.height,0,Nt,jt,Dt.data);T.generateMipmaps=!1}else W?(At&&n.texStorage2D(r.TEXTURE_2D,It,Xt,Et.width,Et.height),Ct&&it(T,Et,Nt,jt)):n.texImage2D(r.TEXTURE_2D,0,Xt,Et.width,Et.height,0,Nt,jt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&At&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,Xt,se[0].width,se[0].height,Et.depth);for(let Tt=0,yt=se.length;Tt<yt;Tt++)if(Dt=se[Tt],T.format!==Ti)if(Nt!==null)if(W){if(Ct)if(T.layerUpdates.size>0){const kt=b0(Dt.width,Dt.height,T.format,T.type);for(const ae of T.layerUpdates){const De=Dt.data.subarray(ae*kt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*kt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,ae,Dt.width,Dt.height,1,Nt,De)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Xt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,jt,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Xt,Dt.width,Dt.height,Et.depth,0,Nt,jt,Dt.data)}else{W&&At&&n.texStorage2D(r.TEXTURE_2D,It,Xt,se[0].width,se[0].height);for(let Tt=0,yt=se.length;Tt<yt;Tt++)Dt=se[Tt],T.format!==Ti?Nt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,Tt,Xt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,jt,Dt.data):n.texImage2D(r.TEXTURE_2D,Tt,Xt,Dt.width,Dt.height,0,Nt,jt,Dt.data)}else if(T.isDataArrayTexture)if(W){if(At&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,Xt,Et.width,Et.height,Et.depth),Ct)if(T.layerUpdates.size>0){const Tt=b0(Et.width,Et.height,T.format,T.type);for(const yt of T.layerUpdates){const kt=Et.data.subarray(yt*Tt/Et.data.BYTES_PER_ELEMENT,(yt+1)*Tt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,Et.width,Et.height,1,Nt,jt,kt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,jt,Et.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Et.width,Et.height,Et.depth,0,Nt,jt,Et.data);else if(T.isData3DTexture)W?(At&&n.texStorage3D(r.TEXTURE_3D,It,Xt,Et.width,Et.height,Et.depth),Ct&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,jt,Et.data)):n.texImage3D(r.TEXTURE_3D,0,Xt,Et.width,Et.height,Et.depth,0,Nt,jt,Et.data);else if(T.isFramebufferTexture){if(At)if(W)n.texStorage2D(r.TEXTURE_2D,It,Xt,Et.width,Et.height);else{let Tt=Et.width,yt=Et.height;for(let kt=0;kt<It;kt++)n.texImage2D(r.TEXTURE_2D,kt,Xt,Tt,yt,0,Nt,jt,null),Tt>>=1,yt>>=1}}else if(se.length>0){if(W&&At){const Tt=Qe(se[0]);n.texStorage2D(r.TEXTURE_2D,It,Xt,Tt.width,Tt.height)}for(let Tt=0,yt=se.length;Tt<yt;Tt++)Dt=se[Tt],W?Ct&&n.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Nt,jt,Dt):n.texImage2D(r.TEXTURE_2D,Tt,Xt,Nt,jt,Dt);T.generateMipmaps=!1}else if(W){if(At){const Tt=Qe(Et);n.texStorage2D(r.TEXTURE_2D,It,Xt,Tt.width,Tt.height)}Ct&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Nt,jt,Et)}else n.texImage2D(r.TEXTURE_2D,0,Xt,Nt,jt,Et);M(T)&&_(ft),Bt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _t(N,T,at){if(T.image.length!==6)return;const ft=xt(N,T),St=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+at);const ut=s.get(St);if(St.version!==ut.__version||ft===!0){n.activeTexture(r.TEXTURE0+at);const Bt=we.getPrimaries(we.workingColorSpace),wt=T.colorSpace===Va?null:we.getPrimaries(T.colorSpace),Wt=T.colorSpace===Va||Bt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let yt=0;yt<6;yt++)!qt&&!Et?Nt[yt]=R(T.image[yt],!0,l.maxCubemapSize):Nt[yt]=Et?T.image[yt].image:T.image[yt],Nt[yt]=Ke(T,Nt[yt]);const jt=Nt[0],Xt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),se=O(T.internalFormat,Xt,Dt,T.colorSpace),W=T.isVideoTexture!==!0,At=ut.__version===void 0||ft===!0,Ct=St.dataReady;let It=z(T,jt);pt(r.TEXTURE_CUBE_MAP,T);let Tt;if(qt){W&&At&&n.texStorage2D(r.TEXTURE_CUBE_MAP,It,se,jt.width,jt.height);for(let yt=0;yt<6;yt++){Tt=Nt[yt].mipmaps;for(let kt=0;kt<Tt.length;kt++){const ae=Tt[kt];T.format!==Ti?Xt!==null?W?Ct&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt,0,0,ae.width,ae.height,Xt,ae.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt,0,0,ae.width,ae.height,Xt,Dt,ae.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt,se,ae.width,ae.height,0,Xt,Dt,ae.data)}}}else{if(Tt=T.mipmaps,W&&At){Tt.length>0&&It++;const yt=Qe(Nt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,It,se,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Et){W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Nt[yt].width,Nt[yt].height,Xt,Dt,Nt[yt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,se,Nt[yt].width,Nt[yt].height,0,Xt,Dt,Nt[yt].data);for(let kt=0;kt<Tt.length;kt++){const De=Tt[kt].image[yt].image;W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt+1,0,0,De.width,De.height,Xt,Dt,De.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt+1,se,De.width,De.height,0,Xt,Dt,De.data)}}else{W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Xt,Dt,Nt[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,se,Xt,Dt,Nt[yt]);for(let kt=0;kt<Tt.length;kt++){const ae=Tt[kt];W?Ct&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt+1,0,0,Xt,Dt,ae.image[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,kt+1,se,Xt,Dt,ae.image[yt])}}}M(T)&&_(r.TEXTURE_CUBE_MAP),ut.__version=St.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Mt(N,T,at,ft,St,ut){const Bt=c.convert(at.format,at.colorSpace),wt=c.convert(at.type),Wt=O(at.internalFormat,Bt,wt,at.colorSpace),qt=s.get(T),Et=s.get(at);if(Et.__renderTarget=T,!qt.__hasExternalTextures){const Nt=Math.max(1,T.width>>ut),jt=Math.max(1,T.height>>ut);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?n.texImage3D(St,ut,Wt,Nt,jt,T.depth,0,Bt,wt,null):n.texImage2D(St,ut,Wt,Nt,jt,0,Bt,wt,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),Gt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,St,Et.__webglTexture,0,We(T)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,St,Et.__webglTexture,ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(N,T,at){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const ft=T.depthTexture,St=ft&&ft.isDepthTexture?ft.type:null,ut=D(T.stencilBuffer,St),Bt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=We(T);Gt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,ut,T.width,T.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ut,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ut,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Bt,r.RENDERBUFFER,N)}else{const ft=T.textures;for(let St=0;St<ft.length;St++){const ut=ft[St],Bt=c.convert(ut.format,ut.colorSpace),wt=c.convert(ut.type),Wt=O(ut.internalFormat,Bt,wt,ut.colorSpace),qt=We(T);at&&Gt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Wt,T.width,T.height):Gt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,Wt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $t(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),nt(T.depthTexture,0);const St=ft.__webglTexture,ut=We(T);if(T.depthTexture.format===Jo)Gt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0);else if(T.depthTexture.format===$o)Gt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Se(N){const T=s.get(N),at=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",St)};ft.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=ft}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?$t(T.__webglFramebuffer[0],N):$t(T.__webglFramebuffer,N)}else if(at){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=r.createRenderbuffer(),Lt(T.__webglDepthbuffer[ft],N,!1);else{const St=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Lt(T.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(N,T,at){const ft=s.get(N);T!==void 0&&Mt(ft.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),at!==void 0&&Se(N)}function F(N){const T=N.texture,at=s.get(N),ft=s.get(T);N.addEventListener("dispose",H);const St=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Bt=St.length>1;if(Bt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=T.version,f.memory.textures++),ut){at.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[wt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)at.__webglFramebuffer[wt][Wt]=r.createFramebuffer()}else at.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)at.__webglFramebuffer[wt]=r.createFramebuffer()}else at.__webglFramebuffer=r.createFramebuffer();if(Bt)for(let wt=0,Wt=St.length;wt<Wt;wt++){const qt=s.get(St[wt]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&Gt(N)===!1){at.__webglMultisampledFramebuffer=r.createFramebuffer(),at.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Wt=St[wt];at.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,at.__webglColorRenderbuffer[wt]);const qt=c.convert(Wt.format,Wt.colorSpace),Et=c.convert(Wt.type),Nt=O(Wt.internalFormat,qt,Et,Wt.colorSpace,N.isXRRenderTarget===!0),jt=We(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Nt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,at.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(at.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){n.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),pt(r.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Mt(at.__webglFramebuffer[wt][Wt],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Wt);else Mt(at.__webglFramebuffer[wt],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(T)&&_(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Bt){for(let wt=0,Wt=St.length;wt<Wt;wt++){const qt=St[wt],Et=s.get(qt);let Nt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Et.__webglTexture),pt(Nt,qt),Mt(at.__webglFramebuffer,N,qt,r.COLOR_ATTACHMENT0+wt,Nt,0),M(qt)&&_(Nt)}n.unbindTexture()}else{let wt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(wt,ft.__webglTexture),pt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Mt(at.__webglFramebuffer[Wt],N,T,r.COLOR_ATTACHMENT0,wt,Wt);else Mt(at.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,wt,0);M(T)&&_(wt),n.unbindTexture()}N.depthBuffer&&Se(N)}function Me(N){const T=N.textures;for(let at=0,ft=T.length;at<ft;at++){const St=T[at];if(M(St)){const ut=I(N),Bt=s.get(St).__webglTexture;n.bindTexture(ut,Bt),_(ut),n.unbindTexture()}}}const Qt=[],Te=[];function Ht(N){if(N.samples>0){if(Gt(N)===!1){const T=N.textures,at=N.width,ft=N.height;let St=r.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=s.get(N),wt=T.length>1;if(wt)for(let qt=0;qt<T.length;qt++)n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[qt]);const Et=s.get(T[qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,at,ft,0,0,at,ft,St,r.NEAREST),m===!0&&(Qt.length=0,Te.length=0,Qt.push(r.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(ut),Te.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let qt=0;qt<T.length;qt++){n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[qt]);const Et=s.get(T[qt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,Et,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function We(N){return Math.min(l.maxSamples,N.samples)}function Gt(N){const T=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(N){const T=f.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ke(N,T){const at=N.colorSpace,ft=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==zr&&at!==Va&&(we.getTransfer(at)===Fe?(ft!==Ti||St!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function Qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=$,this.setTexture2D=nt,this.setTexture2DArray=L,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=pe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Gt}function P1(r,t){function n(s,l=Va){let c;const f=we.getTransfer(l);if(s===Ii)return r.UNSIGNED_BYTE;if(s===Yd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===qd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===iv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ev)return r.BYTE;if(s===nv)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===Wd)return r.INT;if(s===xs)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===el)return r.HALF_FLOAT;if(s===av)return r.ALPHA;if(s===sv)return r.RGB;if(s===Ti)return r.RGBA;if(s===Jo)return r.DEPTH_COMPONENT;if(s===$o)return r.DEPTH_STENCIL;if(s===rv)return r.RED;if(s===Zd)return r.RED_INTEGER;if(s===ov)return r.RG;if(s===jd)return r.RG_INTEGER;if(s===Kd)return r.RGBA_INTEGER;if(s===Wc||s===Yc||s===qc||s===Zc)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dd||s===pd||s===md||s===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===vd||s===yd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_d||s===vd)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sd||s===xd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Rd||s===wd||s===Cd||s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Sd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Md)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ed)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Td)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ad)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ud)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ld)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===Od||s===Pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===jc)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lv||s===zd||s===Bd||s===Id)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}class Nv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new Nv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Ya({vertexShader:z1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ni(new ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F1 extends Ts{constructor(t,n){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,S=null,E=null;const R=new I1,M={},_=n.getContextAttributes();let I=null,O=null;const D=[],z=[],V=new zt;let H=null;const K=new ei;K.viewport=new Ge;const U=new ei;U.viewport=new Ge;const C=[K,U],B=new iE;let $=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=D[it];return dt===void 0&&(dt=new Bh,D[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=D[it];return dt===void 0&&(dt=new Bh,D[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=D[it];return dt===void 0&&(dt=new Bh,D[it]=dt),dt.getHandSpace()};function ot(it){const dt=z.indexOf(it.inputSource);if(dt===-1)return;const _t=D[dt];_t!==void 0&&(_t.update(it.inputSource,it.frame,p||f),_t.dispatchEvent({type:it.type,data:it.inputSource}))}function nt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",nt),l.removeEventListener("inputsourceschange",L);for(let it=0;it<D.length;it++){const dt=z[it];dt!==null&&(z[it]=null,D[it].disconnect(dt))}$=null,J=null,R.reset();for(const it in M)delete M[it];t.setRenderTarget(I),S=null,y=null,v=null,l=null,O=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",nt),l.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,n)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Mt=null,Lt=null;_.depth&&(Lt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_t=_.stencil?$o:Jo,Mt=_.stencil?Qo:xs);const $t={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:c};y=v.createProjectionLayer($t),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),O=new Es(y.textureWidth,y.textureHeight,{format:Ti,type:Ii,depthTexture:new Mv(y.textureWidth,y.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _t={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,_t),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Es(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function L(it){for(let dt=0;dt<it.removed.length;dt++){const _t=it.removed[dt],Mt=z.indexOf(_t);Mt>=0&&(z[Mt]=null,D[Mt].disconnect(_t))}for(let dt=0;dt<it.added.length;dt++){const _t=it.added[dt];let Mt=z.indexOf(_t);if(Mt===-1){for(let $t=0;$t<D.length;$t++)if($t>=z.length){z.push(_t),Mt=$t;break}else if(z[$t]===null){z[$t]=_t,Mt=$t;break}if(Mt===-1)break}const Lt=D[Mt];Lt&&Lt.connect(_t)}}const Y=new G,X=new G;function mt(it,dt,_t){Y.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(_t.matrixWorld);const Mt=Y.distanceTo(X),Lt=dt.projectionMatrix.elements,$t=_t.projectionMatrix.elements,Se=Lt[14]/(Lt[10]-1),pe=Lt[14]/(Lt[10]+1),F=(Lt[9]+1)/Lt[5],Me=(Lt[9]-1)/Lt[5],Qt=(Lt[8]-1)/Lt[0],Te=($t[8]+1)/$t[0],Ht=Se*Qt,We=Se*Te,Gt=Mt/(-Qt+Te),oe=Gt*-Qt;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(oe),it.translateZ(Gt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Lt[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ke=Se+Gt,Qe=pe+Gt,N=Ht-oe,T=We+(Mt-oe),at=F*pe/Qe*Ke,ft=Me*pe/Qe*Ke;it.projectionMatrix.makePerspective(N,T,at,ft,Ke,Qe),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function w(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let dt=it.near,_t=it.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(_t=R.depthFar)),B.near=U.near=K.near=dt,B.far=U.far=K.far=_t,($!==B.near||J!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),$=B.near,J=B.far),B.layers.mask=it.layers.mask|6,K.layers.mask=B.layers.mask&3,U.layers.mask=B.layers.mask&5;const Mt=it.parent,Lt=B.cameras;w(B,Mt);for(let $t=0;$t<Lt.length;$t++)w(Lt[$t],Mt);Lt.length===2?mt(B,K,U):B.projectionMatrix.copy(K.projectionMatrix),Q(it,B,Mt)};function Q(it,dt,_t){_t===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(_t.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=tl*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(it){m=it,y!==null&&(y.fixedFoveation=it),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=it)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(B)},this.getCameraTexture=function(it){return M[it]};let pt=null;function xt(it,dt){if(g=dt.getViewerPose(p||f),E=dt,g!==null){const _t=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Mt=!1;_t.length!==B.cameras.length&&(B.cameras.length=0,Mt=!0);for(let pe=0;pe<_t.length;pe++){const F=_t[pe];let Me=null;if(S!==null)Me=S.getViewport(F);else{const Te=v.getViewSubImage(y,F);Me=Te.viewport,pe===0&&(t.setRenderTargetTextures(O,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(O))}let Qt=C[pe];Qt===void 0&&(Qt=new ei,Qt.layers.enable(pe),Qt.viewport=new Ge,C[pe]=Qt),Qt.matrix.fromArray(F.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(F.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Me.x,Me.y,Me.width,Me.height),pe===0&&(B.matrix.copy(Qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Mt===!0&&B.cameras.push(Qt)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const pe=v.getDepthInformation(_t[0]);pe&&pe.isValid&&pe.texture&&R.init(pe,l.renderState)}if(Lt&&Lt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let pe=0;pe<_t.length;pe++){const F=_t[pe].camera;if(F){let Me=M[F];Me||(Me=new Nv,M[F]=Me);const Qt=v.getCameraImage(F);Me.sourceTexture=Qt}}}for(let _t=0;_t<D.length;_t++){const Mt=z[_t],Lt=D[_t];Mt!==null&&Lt!==void 0&&Lt.update(Mt,dt,p||f)}pt&&pt(it,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Rt=new wv;Rt.setAnimationLoop(xt),this.setAnimationLoop=function(it){pt=it},this.dispose=function(){}}}const ms=new ua,H1=new Xe;function G1(r,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,mv(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,I,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,I,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=t.get(_),O=I.envMap,D=I.envMapRotation;O&&(M.envMap.value=O,ms.copy(D),ms.x*=-1,ms.y*=-1,ms.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),M.envMapRotation.value.setFromMatrix4(H1.makeRotationFromEuler(ms)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,I,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=O*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const I=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function V1(r,t,n,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const D=O.program;s.uniformBlockBinding(I,D)}function p(I,O){let D=l[I.id];D===void 0&&(E(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",M));const z=O.program;s.updateUBOMapping(I,z);const V=t.render.frame;c[I.id]!==V&&(y(I),c[I.id]=V)}function g(I){const O=v();I.__bindingPointIndex=O;const D=r.createBuffer(),z=I.__size,V=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,z,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const O=l[I.id],D=I.uniforms,z=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let V=0,H=D.length;V<H;V++){const K=Array.isArray(D[V])?D[V]:[D[V]];for(let U=0,C=K.length;U<C;U++){const B=K[U];if(S(B,V,U,z)===!0){const $=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let ot=0;for(let nt=0;nt<J.length;nt++){const L=J[nt],Y=R(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,$+ot,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):(L.toArray(B.__data,ot),ot+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(I,O,D,z){const V=I.value,H=O+"_"+D;if(z[H]===void 0)return typeof V=="number"||typeof V=="boolean"?z[H]=V:z[H]=V.clone(),!0;{const K=z[H];if(typeof V=="number"||typeof V=="boolean"){if(K!==V)return z[H]=V,!0}else if(K.equals(V)===!1)return K.copy(V),!0}return!1}function E(I){const O=I.uniforms;let D=0;const z=16;for(let H=0,K=O.length;H<K;H++){const U=Array.isArray(O[H])?O[H]:[O[H]];for(let C=0,B=U.length;C<B;C++){const $=U[C],J=Array.isArray($.value)?$.value:[$.value];for(let ot=0,nt=J.length;ot<nt;ot++){const L=J[ot],Y=R(L),X=D%z,mt=X%Y.boundary,w=X+mt;D+=mt,w!==0&&z-w<Y.storage&&(D+=z-w),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=Y.storage}}}const V=D%z;return V>0&&(D+=z-V),I.__size=D,I.__cache={},this}function R(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function M(I){const O=I.target;O.removeEventListener("dispose",M);const D=f.indexOf(O.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class k1{constructor(t={}){const{canvas:n=nM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const I=[],O=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let z=!1;this._outputColorSpace=hi;let V=0,H=0,K=null,U=-1,C=null;const B=new Ge,$=new Ge;let J=null;const ot=new xe(0);let nt=0,L=n.width,Y=n.height,X=1,mt=null,w=null;const Q=new Ge(0,0,L,Y),pt=new Ge(0,0,L,Y);let xt=!1;const Rt=new tp;let it=!1,dt=!1;const _t=new Xe,Mt=new G,Lt=new Ge,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function pe(){return K===null?X:1}let F=s;function Me(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xd}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const q="webgl2";if(F=Me(q,A),F===null)throw Me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Te,Ht,We,Gt,oe,Ke,Qe,N,T,at,ft,St,ut,Bt,wt,Wt,qt,Et,Nt,jt,Xt,Dt,se;function W(){Qt=new $b(F),Qt.init(),Xt=new P1(F,Qt),Te=new Yb(F,Qt,t,Xt),Ht=new N1(F,Qt),Te.reversedDepthBuffer&&y&&Ht.buffers.depth.setReversed(!0),We=new nA(F),Gt=new S1,oe=new O1(F,Qt,Ht,Gt,Te,Xt,We),Ke=new Zb(D),Qe=new Jb(D),N=new lE(F),Dt=new Xb(F,N),T=new tA(F,N,We,Dt),at=new aA(F,T,N,We),Et=new iA(F,Te,oe),wt=new qb(Gt),ft=new y1(D,Ke,Qe,Qt,Te,Dt,wt),St=new G1(D,Gt),ut=new M1,Bt=new w1(Qt),qt=new kb(D,Ke,Qe,Ht,at,S,m),Wt=new U1(D,at,Te),se=new V1(F,We,Te,Ht),Nt=new Wb(F,Qt,We),jt=new eA(F,Qt,We),We.programs=ft.programs,D.capabilities=Te,D.extensions=Qt,D.properties=Gt,D.renderLists=ut,D.shadowMap=Wt,D.state=Ht,D.info=We}W();const At=new F1(D,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(L,Y,!1))},this.getSize=function(A){return A.set(L,Y)},this.setSize=function(A,q,lt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,Y=q,n.width=Math.floor(A*X),n.height=Math.floor(q*X),lt===!0&&(n.style.width=A+"px",n.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(L*X,Y*X).floor()},this.setDrawingBufferSize=function(A,q,lt){L=A,Y=q,X=lt,n.width=Math.floor(A*lt),n.height=Math.floor(q*lt),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,q,lt,ct){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,q,lt,ct),Ht.viewport(B.copy(Q).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,q,lt,ct){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,q,lt,ct),Ht.scissor($.copy(pt).multiplyScalar(X).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Ht.setScissorTest(xt=A)},this.setOpaqueSort=function(A){mt=A},this.setTransparentSort=function(A){w=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,lt=!0){let ct=0;if(A){let j=!1;if(K!==null){const bt=K.texture.format;j=bt===Kd||bt===jd||bt===Zd}if(j){const bt=K.texture.type,Ut=bt===Ii||bt===xs||bt===Ko||bt===Qo||bt===Yd||bt===qd,Ft=qt.getClearColor(),Ot=qt.getClearAlpha(),Jt=Ft.r,ee=Ft.g,Yt=Ft.b;Ut?(E[0]=Jt,E[1]=ee,E[2]=Yt,E[3]=Ot,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=Jt,R[1]=ee,R[2]=Yt,R[3]=Ot,F.clearBufferiv(F.COLOR,0,R))}else ct|=F.COLOR_BUFFER_BIT}q&&(ct|=F.DEPTH_BUFFER_BIT),lt&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),qt.dispose(),ut.dispose(),Bt.dispose(),Gt.dispose(),Ke.dispose(),Qe.dispose(),at.dispose(),Dt.dispose(),se.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",un),At.removeEventListener("sessionend",fn),$e.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=We.autoReset,q=Wt.enabled,lt=Wt.autoUpdate,ct=Wt.needsUpdate,j=Wt.type;W(),We.autoReset=A,Wt.enabled=q,Wt.autoUpdate=lt,Wt.needsUpdate=ct,Wt.type=j}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yt(A){const q=A.target;q.removeEventListener("dispose",yt),kt(q)}function kt(A){ae(A),Gt.remove(A)}function ae(A){const q=Gt.get(A).programs;q!==void 0&&(q.forEach(function(lt){ft.releaseProgram(lt)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,lt,ct,j,bt){q===null&&(q=$t);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,Ft=fa(A,q,lt,ct,j);Ht.setMaterial(ct,Ut);let Ot=lt.index,Jt=1;if(ct.wireframe===!0){if(Ot=T.getWireframeAttribute(lt),Ot===void 0)return;Jt=2}const ee=lt.drawRange,Yt=lt.attributes.position;let ue=ee.start*Jt,Ae=(ee.start+ee.count)*Jt;bt!==null&&(ue=Math.max(ue,bt.start*Jt),Ae=Math.min(Ae,(bt.start+bt.count)*Jt)),Ot!==null?(ue=Math.max(ue,0),Ae=Math.min(Ae,Ot.count)):Yt!=null&&(ue=Math.max(ue,0),Ae=Math.min(Ae,Yt.count));const Ze=Ae-ue;if(Ze<0||Ze===1/0)return;Dt.setup(j,ct,Ft,lt,Ot);let Pe,fe=Nt;if(Ot!==null&&(Pe=N.get(Ot),fe=jt,fe.setIndex(Pe)),j.isMesh)ct.wireframe===!0?(Ht.setLineWidth(ct.wireframeLinewidth*pe()),fe.setMode(F.LINES)):fe.setMode(F.TRIANGLES);else if(j.isLine){let Kt=ct.linewidth;Kt===void 0&&(Kt=1),Ht.setLineWidth(Kt*pe()),j.isLineSegments?fe.setMode(F.LINES):j.isLineLoop?fe.setMode(F.LINE_LOOP):fe.setMode(F.LINE_STRIP)}else j.isPoints?fe.setMode(F.POINTS):j.isSprite&&fe.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,qe=j._multiDrawCounts,_e=j._multiDrawCount,Rn=Ot?N.get(Ot).bytesPerElement:1,gi=Gt.get(ct).currentProgram.getUniforms();for(let Nn=0;Nn<_e;Nn++)gi.setValue(F,"_gl_DrawID",Nn),fe.render(Kt[Nn]/Rn,qe[Nn])}else if(j.isInstancedMesh)fe.renderInstances(ue,Ze,j.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,qe=Math.min(lt.instanceCount,Kt);fe.renderInstances(ue,Ze,qe)}else fe.render(ue,Ze)};function De(A,q,lt){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,wi(A,q,lt),A.side=Wa,A.needsUpdate=!0,wi(A,q,lt),A.side=Pi):wi(A,q,lt)}this.compile=function(A,q,lt=null){lt===null&&(lt=A),_=Bt.get(lt),_.init(q),O.push(_),lt.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==lt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ct=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Ft=bt[Ut];De(Ft,lt,j),ct.add(Ft)}else De(bt,lt,j),ct.add(bt)}),_=O.pop(),ct},this.compileAsync=function(A,q,lt=null){const ct=this.compile(A,q,lt);return new Promise(j=>{function bt(){if(ct.forEach(function(Ut){Gt.get(Ut).currentProgram.isReady()&&ct.delete(Ut)}),ct.size===0){j(A);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let be=null;function mi(A){be&&be(A)}function un(){$e.stop()}function fn(){$e.start()}const $e=new wv;$e.setAnimationLoop(mi),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(A){be=A,At.setAnimationLoop(A),A===null?$e.stop():$e.start()},At.addEventListener("sessionstart",un),At.addEventListener("sessionend",fn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,q,K),_=Bt.get(A,O.length),_.init(q),O.push(_),_t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Rt.setFromProjectionMatrix(_t,Bi,q.reversedDepth),dt=this.localClippingEnabled,it=wt.init(this.clippingPlanes,dt),M=ut.get(A,I.length),M.init(),I.push(M),At.enabled===!0&&At.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&Ri(bt,q,-1/0,D.sortObjects)}Ri(A,q,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(mt,w),Se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Se&&qt.addToRenderList(M,A),this.info.render.frame++,it===!0&&wt.beginShadows();const lt=_.state.shadowsArray;Wt.render(lt,A,q),it===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,j=M.transmissive;if(_.setupLights(),q.isArrayCamera){const bt=q.cameras;if(j.length>0)for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++){const Ot=bt[Ut];rl(ct,j,A,Ot)}Se&&qt.render(A);for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++){const Ot=bt[Ut];As(M,A,Ot,Ot.viewport)}}else j.length>0&&rl(ct,j,A,q),Se&&qt.render(A),As(M,A,q);K!==null&&H===0&&(oe.updateMultisampleRenderTarget(K),oe.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(D,A,q),Dt.resetDefaultState(),U=-1,C=null,O.pop(),O.length>0?(_=O[O.length-1],it===!0&&wt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Ri(A,q,lt,ct){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)lt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Rt.intersectsSprite(A)){ct&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const Ut=at.update(A),Ft=A.material;Ft.visible&&M.push(A,Ut,Ft,lt,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Rt.intersectsObject(A))){const Ut=at.update(A),Ft=A.material;if(ct&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Lt.copy(Ut.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Ft)){const Ot=Ut.groups;for(let Jt=0,ee=Ot.length;Jt<ee;Jt++){const Yt=Ot[Jt],ue=Ft[Yt.materialIndex];ue&&ue.visible&&M.push(A,Ut,ue,lt,Lt.z,Yt)}}else Ft.visible&&M.push(A,Ut,Ft,lt,Lt.z,null)}}const bt=A.children;for(let Ut=0,Ft=bt.length;Ut<Ft;Ut++)Ri(bt[Ut],q,lt,ct)}function As(A,q,lt,ct){const j=A.opaque,bt=A.transmissive,Ut=A.transparent;_.setupLightsView(lt),it===!0&&wt.setGlobalState(D.clippingPlanes,lt),ct&&Ht.viewport(B.copy(ct)),j.length>0&&Rs(j,q,lt),bt.length>0&&Rs(bt,q,lt),Ut.length>0&&Rs(Ut,q,lt),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function rl(A,q,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ct.id]===void 0&&(_.state.transmissionRenderTarget[ct.id]=new Es(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?el:Ii,minFilter:Ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const bt=_.state.transmissionRenderTarget[ct.id],Ut=ct.viewport||B;bt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Jt=D.getActiveMipmapLevel();D.setRenderTarget(bt),D.getClearColor(ot),nt=D.getClearAlpha(),nt<1&&D.setClearColor(16777215,.5),D.clear(),Se&&qt.render(lt);const ee=D.toneMapping;D.toneMapping=Xa;const Yt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),_.setupLightsView(ct),it===!0&&wt.setGlobalState(D.clippingPlanes,ct),Rs(A,lt,ct),oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ae=0,Ze=q.length;Ae<Ze;Ae++){const Pe=q[Ae],fe=Pe.object,Kt=Pe.geometry,qe=Pe.material,_e=Pe.group;if(qe.side===Pi&&fe.layers.test(ct.layers)){const Rn=qe.side;qe.side=In,qe.needsUpdate=!0,Fr(fe,lt,ct,Kt,qe,_e),qe.side=Rn,qe.needsUpdate=!0,ue=!0}}ue===!0&&(oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt))}D.setRenderTarget(Ft,Ot,Jt),D.setClearColor(ot,nt),Yt!==void 0&&(ct.viewport=Yt),D.toneMapping=ee}function Rs(A,q,lt){const ct=q.isScene===!0?q.overrideMaterial:null;for(let j=0,bt=A.length;j<bt;j++){const Ut=A[j],Ft=Ut.object,Ot=Ut.geometry,Jt=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&ct!==null&&(ee=ct),Ft.layers.test(lt.layers)&&Fr(Ft,q,lt,Ot,ee,Jt)}}function Fr(A,q,lt,ct,j,bt){A.onBeforeRender(D,q,lt,ct,j,bt),A.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,q,lt,ct,A,bt),j.transparent===!0&&j.side===Pi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,D.renderBufferDirect(lt,q,ct,j,A,bt),j.side=Wa,j.needsUpdate=!0,D.renderBufferDirect(lt,q,ct,j,A,bt),j.side=Pi):D.renderBufferDirect(lt,q,ct,j,A,bt),A.onAfterRender(D,q,lt,ct,j,bt)}function wi(A,q,lt){q.isScene!==!0&&(q=$t);const ct=Gt.get(A),j=_.state.lights,bt=_.state.shadowsArray,Ut=j.state.version,Ft=ft.getParameters(A,j.state,bt,q,lt),Ot=ft.getProgramCacheKey(Ft);let Jt=ct.programs;ct.environment=A.isMeshStandardMaterial?q.environment:null,ct.fog=q.fog,ct.envMap=(A.isMeshStandardMaterial?Qe:Ke).get(A.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",yt),Jt=new Map,ct.programs=Jt);let ee=Jt.get(Ot);if(ee!==void 0){if(ct.currentProgram===ee&&ct.lightsStateVersion===Ut)return Hi(A,Ft),ee}else Ft.uniforms=ft.getUniforms(A),A.onBeforeCompile(Ft,D),ee=ft.acquireProgram(Ft,Ot),Jt.set(Ot,ee),ct.uniforms=Ft.uniforms;const Yt=ct.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),Hi(A,Ft),ct.needsLights=ha(A),ct.lightsStateVersion=Ut,ct.needsLights&&(Yt.ambientLightColor.value=j.state.ambient,Yt.lightProbe.value=j.state.probe,Yt.directionalLights.value=j.state.directional,Yt.directionalLightShadows.value=j.state.directionalShadow,Yt.spotLights.value=j.state.spot,Yt.spotLightShadows.value=j.state.spotShadow,Yt.rectAreaLights.value=j.state.rectArea,Yt.ltc_1.value=j.state.rectAreaLTC1,Yt.ltc_2.value=j.state.rectAreaLTC2,Yt.pointLights.value=j.state.point,Yt.pointLightShadows.value=j.state.pointShadow,Yt.hemisphereLights.value=j.state.hemi,Yt.directionalShadowMap.value=j.state.directionalShadowMap,Yt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Yt.spotShadowMap.value=j.state.spotShadowMap,Yt.spotLightMatrix.value=j.state.spotLightMatrix,Yt.spotLightMap.value=j.state.spotLightMap,Yt.pointShadowMap.value=j.state.pointShadowMap,Yt.pointShadowMatrix.value=j.state.pointShadowMatrix),ct.currentProgram=ee,ct.uniformsList=null,ee}function ws(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Qc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Hi(A,q){const lt=Gt.get(A);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function fa(A,q,lt,ct,j){q.isScene!==!0&&(q=$t),oe.resetTextureUnits();const bt=q.fog,Ut=ct.isMeshStandardMaterial?q.environment:null,Ft=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:zr,Ot=(ct.isMeshStandardMaterial?Qe:Ke).get(ct.envMap||Ut),Jt=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Yt=!!lt.morphAttributes.position,ue=!!lt.morphAttributes.normal,Ae=!!lt.morphAttributes.color;let Ze=Xa;ct.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ze=D.toneMapping);const Pe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,fe=Pe!==void 0?Pe.length:0,Kt=Gt.get(ct),qe=_.state.lights;if(it===!0&&(dt===!0||A!==C)){const tn=A===C&&ct.id===U;wt.setState(ct,A,tn)}let _e=!1;ct.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==qe.state.version||Kt.outputColorSpace!==Ft||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||ct.fog===!0&&Kt.fog!==bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==wt.numPlanes||Kt.numIntersection!==wt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==ee||Kt.morphTargets!==Yt||Kt.morphNormals!==ue||Kt.morphColors!==Ae||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==fe)&&(_e=!0):(_e=!0,Kt.__version=ct.version);let Rn=Kt.currentProgram;_e===!0&&(Rn=wi(ct,q,j));let gi=!1,Nn=!1,_n=!1;const Ve=Rn.getUniforms(),On=Kt.uniforms;if(Ht.useProgram(Rn.program)&&(gi=!0,Nn=!0,_n=!0),ct.id!==U&&(U=ct.id,Nn=!0),gi||C!==A){Ht.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(F,"projectionMatrix",A.projectionMatrix),Ve.setValue(F,"viewMatrix",A.matrixWorldInverse);const Mn=Ve.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,Mt.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Nn=!0,_n=!0)}if(j.isSkinnedMesh){Ve.setOptional(F,j,"bindMatrix"),Ve.setOptional(F,j,"bindMatrixInverse");const tn=j.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ve.setValue(F,"boneTexture",tn.boneTexture,oe))}j.isBatchedMesh&&(Ve.setOptional(F,j,"batchingTexture"),Ve.setValue(F,"batchingTexture",j._matricesTexture,oe),Ve.setOptional(F,j,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",j._indirectTexture,oe),Ve.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",j._colorsTexture,oe));const wn=lt.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Et.update(j,lt,Rn),(Nn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Ve.setValue(F,"receiveShadow",j.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(On.envMap.value=Ot,On.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&q.environment!==null&&(On.envMapIntensity.value=q.environmentIntensity),Nn&&(Ve.setValue(F,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&qa(On,_n),bt&&ct.fog===!0&&St.refreshFogUniforms(On,bt),St.refreshMaterialUniforms(On,ct,X,Y,_.state.transmissionRenderTarget[A.id]),Qc.upload(F,ws(Kt),On,oe)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Qc.upload(F,ws(Kt),On,oe),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ve.setValue(F,"center",j.center),Ve.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ve.setValue(F,"normalMatrix",j.normalMatrix),Ve.setValue(F,"modelMatrix",j.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const tn=ct.uniformsGroups;for(let Mn=0,Cs=tn.length;Mn<Cs;Mn++){const Hn=tn[Mn];se.update(Hn,Rn),se.bind(Hn,Rn)}}return Rn}function qa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function ha(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,q,lt){const ct=Gt.get(A);ct.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=q,Gt.get(A.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const lt=Gt.get(A);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const rn=F.createFramebuffer();this.setRenderTarget=function(A,q=0,lt=0){K=A,V=q,H=lt;let ct=!0,j=null,bt=!1,Ut=!1;if(A){const Ot=Gt.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(Ot.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Ot.__hasExternalTextures)oe.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Gt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const ee=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?j=ee[q][lt]:j=ee[q],bt=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?j=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[lt]:j=ee,B.copy(A.viewport),$.copy(A.scissor),J=A.scissorTest}else B.copy(Q).multiplyScalar(X).floor(),$.copy(pt).multiplyScalar(X).floor(),J=xt;if(lt!==0&&(j=rn),Ht.bindFramebuffer(F.FRAMEBUFFER,j)&&ct&&Ht.drawBuffers(A,j),Ht.viewport(B),Ht.scissor($),Ht.setScissorTest(J),bt){const Ot=Gt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,lt)}else if(Ut){const Ot=q;for(let Jt=0;Jt<A.textures.length;Jt++){const ee=Gt.get(A.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,lt,Ot)}}else if(A!==null&&lt!==0){const Ot=Gt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ot.__webglTexture,lt)}U=-1},this.readRenderTargetPixels=function(A,q,lt,ct,j,bt,Ut,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Ht.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Jt=A.textures[Ft],ee=Jt.format,Yt=Jt.type;if(!Te.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ct&&lt>=0&&lt<=A.height-j&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(q,lt,ct,j,Xt.convert(ee),Xt.convert(Yt),bt))}finally{const Jt=K!==null?Gt.get(K).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,q,lt,ct,j,bt,Ut,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(q>=0&&q<=A.width-ct&&lt>=0&&lt<=A.height-j){Ht.bindFramebuffer(F.FRAMEBUFFER,Ot);const Jt=A.textures[Ft],ee=Jt.format,Yt=Jt.type;if(!Te.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(q,lt,ct,j,Xt.convert(ee),Xt.convert(Yt),0);const Ae=K!==null?Gt.get(K).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,Ae);const Ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await iM(F,Ze,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(ue),F.deleteSync(Ze),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,lt=0){const ct=Math.pow(2,-lt),j=Math.floor(A.image.width*ct),bt=Math.floor(A.image.height*ct),Ut=q!==null?q.x:0,Ft=q!==null?q.y:0;oe.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,lt,0,0,Ut,Ft,j,bt),Ht.unbindTexture()};const ol=F.createFramebuffer(),ll=F.createFramebuffer();this.copyTextureToTexture=function(A,q,lt=null,ct=null,j=0,bt=null){bt===null&&(j!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=j,j=0):bt=0);let Ut,Ft,Ot,Jt,ee,Yt,ue,Ae,Ze;const Pe=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(lt!==null)Ut=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Ot=lt.isBox3?lt.max.z-lt.min.z:1,Jt=lt.min.x,ee=lt.min.y,Yt=lt.isBox3?lt.min.z:0;else{const wn=Math.pow(2,-j);Ut=Math.floor(Pe.width*wn),Ft=Math.floor(Pe.height*wn),A.isDataArrayTexture?Ot=Pe.depth:A.isData3DTexture?Ot=Math.floor(Pe.depth*wn):Ot=1,Jt=0,ee=0,Yt=0}ct!==null?(ue=ct.x,Ae=ct.y,Ze=ct.z):(ue=0,Ae=0,Ze=0);const fe=Xt.convert(q.format),Kt=Xt.convert(q.type);let qe;q.isData3DTexture?(oe.setTexture3D(q,0),qe=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(oe.setTexture2DArray(q,0),qe=F.TEXTURE_2D_ARRAY):(oe.setTexture2D(q,0),qe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const _e=F.getParameter(F.UNPACK_ROW_LENGTH),Rn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gi=F.getParameter(F.UNPACK_SKIP_PIXELS),Nn=F.getParameter(F.UNPACK_SKIP_ROWS),_n=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const Ve=A.isDataArrayTexture||A.isData3DTexture,On=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const wn=Gt.get(A),tn=Gt.get(q),Mn=Gt.get(wn.__renderTarget),Cs=Gt.get(tn.__renderTarget);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Hn=0;Hn<Ot;Hn++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,j,Yt+Hn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.get(q).__webglTexture,bt,Ze+Hn)),F.blitFramebuffer(Jt,ee,Ut,Ft,ue,Ae,Ut,Ft,F.DEPTH_BUFFER_BIT,F.NEAREST);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Gt.has(A)){const wn=Gt.get(A),tn=Gt.get(q);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,ol),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,ll);for(let Mn=0;Mn<Ot;Mn++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wn.__webglTexture,j,Yt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wn.__webglTexture,j),On?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,bt,Ze+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,bt),j!==0?F.blitFramebuffer(Jt,ee,Ut,Ft,ue,Ae,Ut,Ft,F.COLOR_BUFFER_BIT,F.NEAREST):On?F.copyTexSubImage3D(qe,bt,ue,Ae,Ze+Mn,Jt,ee,Ut,Ft):F.copyTexSubImage2D(qe,bt,ue,Ae,Jt,ee,Ut,Ft);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else On?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(qe,bt,ue,Ae,Ze,Ut,Ft,Ot,fe,Kt,Pe.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,bt,ue,Ae,Ze,Ut,Ft,Ot,fe,Pe.data):F.texSubImage3D(qe,bt,ue,Ae,Ze,Ut,Ft,Ot,fe,Kt,Pe):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,ue,Ae,Ut,Ft,fe,Kt,Pe.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,ue,Ae,Pe.width,Pe.height,fe,Pe.data):F.texSubImage2D(F.TEXTURE_2D,bt,ue,Ae,Ut,Ft,fe,Kt,Pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,_e),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Nn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_n),bt===0&&q.generateMipmaps&&F.generateMipmap(qe),Ht.unbindTexture()},this.copyTextureToTexture3D=function(A,q,lt=null,ct=null,j=0){return Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,lt,ct,j)},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Ht.unbindTexture()},this.resetState=function(){V=0,H=0,K=null,Ht.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}const K0={type:"change"},sp={type:"start"},Ov={type:"end"},Xc=new al,Q0=new Ga,X1=Math.cos(70*Kc.DEG2RAD),pn=new G,Wn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jh=1e-6;class W1 extends rE{constructor(t,n=null){super(t,n),this.state=He.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Ms,this._lastTargetPosition=new G,this._quat=new Ms().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new T0,this._sphericalDelta=new T0,this._scale=1,this._panOffset=new G,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new G,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q1.bind(this),this._onPointerDown=Y1.bind(this),this._onPointerUp=Z1.bind(this),this._onContextMenu=eR.bind(this),this._onMouseWheel=Q1.bind(this),this._onKeyDown=J1.bind(this),this._onTouchStart=$1.bind(this),this._onTouchMove=tR.bind(this),this._onMouseDown=j1.bind(this),this._onMouseMove=K1.bind(this),this._interceptControlDown=nR.bind(this),this._interceptControlUp=iR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=He.NONE}update(t=null){const n=this.object.position;pn.copy(n).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),n.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=pn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new G(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new G(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Xc.origin.copy(this.object.position),Xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xc.direction))<X1?this.object.lookAt(this.target):(Q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xc.intersectPlane(Q0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jh||this._lastTargetPosition.distanceToSquared(this.target)>Jh?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){pn.setFromMatrixColumn(n,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,n){this.screenSpacePanning===!0?pn.setFromMatrixColumn(n,1):(pn.setFromMatrixColumn(n,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let c=pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new zt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Y1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function q1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Z1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ov),this.state=He.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function j1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=He.DOLLY;break;case Cr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}break;case Cr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(sp)}function K1(r){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Q1(r){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(r.preventDefault(),this.dispatchEvent(sp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ov))}function J1(r){this.enabled!==!1&&this._handleKeyDown(r)}function $1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=He.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=He.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(sp)}function tR(r){switch(this._trackPointer(r),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=He.NONE}}function eR(r){this.enabled!==!1&&r.preventDefault()}function nR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pv=function(){this.p=new Uint8Array(512),this.init=function(r){for(let t=0;t<256;t++)r[t]=t;for(let t=255;t>0;t--){const n=Math.floor((t+1)*Math.random()),s=r[t];r[t]=r[n],r[n]=s}for(let t=0;t<256;t++)r[t+256]=r[t]}(this.p)};Pv.prototype={noise:function(r,t,n){const s=this.p;let l=Math.floor(r)&255,c=Math.floor(t)&255,f=Math.floor(n)&255;r-=Math.floor(r),t-=Math.floor(t),n-=Math.floor(n);const d=this.fade(r),m=this.fade(t),p=this.fade(n),g=s[l]+c,v=s[g]+f,y=s[g+1]+f,S=s[l+1]+c,E=s[S]+f,R=s[S+1]+f;return this.lerp(p,this.lerp(m,this.lerp(d,this.grad(s[v],r,t,n),this.grad(s[E],r-1,t,n)),this.lerp(d,this.grad(s[y],r,t-1,n),this.grad(s[R],r-1,t-1,n))),this.lerp(m,this.lerp(d,this.grad(s[v+1],r,t,n-1),this.grad(s[E+1],r-1,t,n-1)),this.lerp(d,this.grad(s[y+1],r,t-1,n-1),this.grad(s[R+1],r-1,t-1,n-1))))},noise4D:function(r,t,n,s){return(this.noise(r,t,n)+this.noise(t,n,s)+this.noise(n,s,r)+this.noise(s,r,t))/4},fade:function(r){return r*r*r*(r*(r*6-15)+10)},lerp:function(r,t,n){return t+r*(n-t)},grad:function(r,t,n,s){const l=r&15,c=l<8?t:n,f=l<4?n:l===12||l===14?t:s;return((l&1)===0?c:-c)+((l&2)===0?f:-f)}};function aR(r){const n=document.createElement("canvas");n.width=n.height=256;const s=n.getContext("2d"),l=s.createImageData(256,256),c=l.data,f=new Pv,d=5/256;for(let m=0;m<256;m++)for(let p=0;p<256;p++){const g=p/256,v=m/256,y=256/(2*Math.PI),S=y*Math.cos(2*Math.PI*g),E=y*Math.sin(2*Math.PI*g),R=y*Math.cos(2*Math.PI*v),M=y*Math.sin(2*Math.PI*v),I=(f.noise4D(S*d,E*d,R*d,M*d)+1)*128,O=new xe(r),D=O.r*I,z=O.g*I,V=O.b*I,H=(m*256+p)*4;c[H]=D,c[H+1]=z,c[H+2]=V,c[H+3]=255}return s.putImageData(l,0,0),new ep(n)}function sR(){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),s=n.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return s.addColorStop(0,"rgba(255,255,255,0.4)"),s.addColorStop(.5,"rgba(255,200,50,0.2)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.beginPath(),n.arc(256/2,256/2,256/2,0,Math.PI*2),n.fill(),new ep(t)}function rR(r){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64),l=new xe(r);return s.addColorStop(0,"rgba(255, 255, 255, 0.8)"),s.addColorStop(.3,`rgba(${l.r*255}, ${l.g*255}, ${l.b*255}, 0.5)`),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),new ep(t)}const oR=({system:r,onClose:t})=>{const n=r?"transform-none":"-translate-x-full";return re.jsx("div",{className:`absolute top-0 left-0 h-full w-80 bg-black/70 text-white font-mono p-5 border-r border-gray-700 backdrop-blur-sm overflow-y-auto transition-transform duration-500 ease-in-out ${n}`,children:r&&re.jsxs(re.Fragment,{children:[re.jsxs("div",{children:[re.jsx("h2",{className:"text-2xl font-bold text-cyan-400 mb-2",children:r.starName}),re.jsx("p",{className:"text-sm text-gray-400 mb-6",children:r.starDescription})]}),re.jsxs("div",{children:[re.jsxs("h3",{className:"border-b border-gray-600 pb-2 mb-3 text-lg",children:["Planets (",r.planets.length,")"]}),re.jsx("ul",{className:"list-none p-0 space-y-4",children:r.planets.map(s=>re.jsxs("li",{children:[re.jsx("strong",{style:{color:s.planetColor},children:s.planetName}),re.jsxs("span",{className:"text-xs text-gray-500 ml-2",children:["(",s.planetType,")"]}),re.jsxs("p",{className:"text-xs mt-1 ml-2 text-gray-400",children:["Moons: ",s.moons.length]})]},s.planetId))})]}),re.jsx("button",{onClick:t,className:"absolute bottom-5 left-5 right-5 py-3 px-4 bg-gray-800/80 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors",children:"Back to Galaxy"})]})})},$h=500,lR=()=>{const r=Ue.useRef(null),[t,n]=Ue.useState([]),[s,l]=Ue.useState(null),[c,f]=Ue.useState(null),[d,m]=Ue.useState(null),[p,g]=Ue.useState(null),[v,y]=Ue.useState(null),S=Ue.useRef(null),E=Ue.useRef(null),R=Ue.useRef(null),M=Ue.useRef(null),_=Ue.useRef([]),I=Ue.useRef([]),O=Ue.useRef([]),D=Ue.useRef([]),z=Ue.useRef(new Set),V=Ue.useRef(null),H=Ue.useRef(new G);Ue.useEffect(()=>{const $=localStorage.getItem("homeSystem");$&&y(JSON.parse($))},[]);const K=Ue.useCallback(async($,J,ot)=>{const nt=`${$},${J},${ot}`;if(!z.current.has(nt)){z.current.add(nt);try{const X=await fetch(`https://space-game-api.onrender.com/api/generateStars3d?sectorX=${$}&sectorY=${J}&sectorZ=${ot}`,{headers:{"x-api-key":"da25f85c-850f-4b85-b1df-c080a4386dc0"}});if(!X.ok)throw new Error(`Network error for sector ${nt}`);const mt=await X.json();n(w=>[...w,...mt])}catch(L){console.error(`Failed to fetch stars for sector ${nt}:`,L),z.current.delete(nt)}}},[]),U=Ue.useCallback(async $=>{if(!(!$||!$.id))try{const J="da25f85c-850f-4b85-b1df-c080a4386dc0",ot="https://space-game-api.onrender.com";let nt=await fetch(`${ot}/api/v1/systems/${$.id}`,{headers:{"x-api-key":J}});if(nt.status===404&&(nt=await fetch(`${ot}/api/v1/systems`,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":J},body:JSON.stringify($)})),!nt.ok)throw new Error("Failed to fetch or create system details");const L=await nt.json();m(L)}catch(J){console.error(J)}},[]);Ue.useEffect(()=>{const $=new wM,J=new ei(75,window.innerWidth/window.innerHeight,.1,5e3),ot=new k1({antialias:!0});S.current=$,E.current=J,R.current=ot,$.background=new xe(328981),ot.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(ot.domElement);const nt=new nE(16777215,.3);$.add(nt);const L=new W1(J,ot.domElement);L.enableDamping=!0,L.zoomSpeed=2.5,M.current=L,$.add(B()),J.position.z=100;const Y=new aE,X=()=>{V.current=requestAnimationFrame(X);const _t=Y.getDelta();_.current.forEach(Mt=>{if(Mt.rotation.y+=.05*_t,Mt.parent){const Lt=Mt.parent.children.find($t=>{var Se;return(Se=$t.userData)==null?void 0:Se.isFlare});Lt&&(Lt.rotation.y-=.02*_t)}}),O.current.forEach(Mt=>{Mt.userData.angle+=Mt.userData.speed*_t;const Lt=Mt.userData.starPosition;Mt.position.x=Lt.x+Math.cos(Mt.userData.angle)*Mt.userData.orbitRadius,Mt.position.y=Lt.y,Mt.position.z=Lt.z+Math.sin(Mt.userData.angle)*Mt.userData.orbitRadius,Mt.rotation.y+=.05}),L.update(),ot.render($,J)};X();const mt=()=>{const{x:_t,y:Mt,z:Lt}=J.position,$t=Math.floor(_t/$h),Se=Math.floor(Mt/$h),pe=Math.floor(Lt/$h);for(let F=-1;F<=1;F++)for(let Me=-1;Me<=1;Me++)K($t+F,Se+Me,pe)};L.addEventListener("end",mt),mt();const w=new sE,Q=new zt,pt=_t=>{Q.x=_t.clientX/window.innerWidth*2-1,Q.y=-(_t.clientY/window.innerHeight)*2+1,w.setFromCamera(Q,J);const Mt=[..._.current,...I.current],Lt=w.intersectObjects(Mt);if(Lt.length>0){const Se=Lt[0].object.userData;Se.isPlanet?(g({...Se,screenX:_t.clientX,screenY:_t.clientY}),l(null)):(l({...Se,screenX:_t.clientX,screenY:_t.clientY}),g(null))}else l(null),g(null)},xt=_t=>{Q.x=_t.clientX/window.innerWidth*2-1,Q.y=-(_t.clientY/window.innerHeight)*2+1,w.setFromCamera(Q,J);const Mt=w.intersectObjects(_.current);if(Mt.length>0){const Lt=Mt[0].object.userData;H.current.copy(J.position),f(Lt)}},Rt=_t=>{_t.preventDefault(),Q.x=_t.clientX/window.innerWidth*2-1,Q.y=-(_t.clientY/window.innerHeight)*2+1,w.setFromCamera(Q,J);const Mt=w.intersectObjects(_.current);if(Mt.length>0){const Lt=Mt[0].object.userData;y(Lt),localStorage.setItem("homeSystem",JSON.stringify(Lt)),console.log("Home system set to:",Lt.name)}};window.addEventListener("mousemove",pt),window.addEventListener("click",xt),window.addEventListener("contextmenu",Rt);const it=()=>{J.aspect=window.innerWidth/window.innerHeight,J.updateProjectionMatrix(),ot.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",it);let dt=r.current;return()=>{cancelAnimationFrame(V.current),L.removeEventListener("end",mt),window.removeEventListener("resize",it),window.removeEventListener("mousemove",pt),window.removeEventListener("click",xt),window.removeEventListener("contextmenu",Rt),ot.dispose(),dt&&dt.removeChild(ot.domElement)}},[K]),Ue.useEffect(()=>{const $=S.current;if(!$)return;const J=new Set(_.current.map(nt=>nt.userData.id));t.filter(nt=>!J.has(nt.id)).forEach(nt=>{const L=new Rr,Y=new jo(nt.size,32,32),X=new Ar({map:aR(nt.color)}),mt=new ni(Y,X);mt.userData=nt;const w=new jo(nt.size*1.3,32,32),Q=new Ar({map:sR(),transparent:!0,blending:Jc,depthWrite:!1,side:Pi}),pt=new ni(w,Q);pt.userData.isFlare=!0;const xt=new DM(new vv({map:rR(nt.color),transparent:!0,blending:Jc}));xt.scale.set(nt.size*3,nt.size*3,1);const Rt=new tE(nt.color,2,150);L.add(mt,pt,xt,Rt),L.position.set(nt.x,nt.y,nt.z),$.add(L),_.current.push(mt)})},[t]),Ue.useEffect(()=>{const $=E.current,J=M.current;if(c&&$&&J){U(c);const ot=new G(c.x,c.y,c.z),nt=ot.clone().add(new G(0,80,100)),L=$.position.clone(),Y=J.target.clone();let X=0;const mt=()=>{X+=.02,X>1&&(X=1),$.position.lerpVectors(L,nt,X),J.target.lerpVectors(Y,ot,X),X<1&&requestAnimationFrame(mt)};mt()}},[c,U]),Ue.useEffect(()=>{const $=S.current;if($&&(O.current.forEach(J=>$.remove(J)),O.current=[],I.current=[],D.current.forEach(J=>$.remove(J)),D.current=[],d&&d.planets&&c)){const J=new G(c.x,c.y,c.z);d.planets.forEach(ot=>{const nt=ot.orbitRadius*1.5,L=ot.planetSize*.2,Y=new jo(L,16,16),X=new Ar({color:ot.planetColor}),mt=new ni(Y,X);mt.userData={...ot,isPlanet:!0};const w=new Ar({color:0,side:In}),Q=new ni(Y,w);Q.scale.multiplyScalar(1.15);const pt=new Rr;pt.add(Q),pt.add(mt),pt.userData={orbitRadius:nt,speed:(Math.random()*.2+.05)/(nt/50),angle:Math.random()*Math.PI*2,starPosition:J};const xt=new ii().setFromPoints(new jM().absarc(0,0,nt,0,Math.PI*2,!1).getSpacedPoints(128)),Rt=new Sv({color:4473924}),it=new OM(xt,Rt);it.position.copy(J),it.rotation.x=Math.PI/2,$.add(it),$.add(pt),D.current.push(it),O.current.push(pt),I.current.push(mt)})}},[d,c]);const C=()=>{f(null),m(null);const $=E.current,J=M.current;if($&&J){const ot=$.position.clone(),nt=J.target.clone();let L=0;const Y=()=>{L+=.02,L>1&&(L=1),$.position.lerpVectors(ot,H.current,L),J.target.lerpVectors(nt,new G(0,0,0),L),L<1&&requestAnimationFrame(Y)};Y()}};function B(){const $=[];for(let nt=0;nt<2e3;nt++){const L=Kc.randFloatSpread(4e3),Y=Kc.randFloatSpread(4e3),X=Kc.randFloatSpread(4e3);$.push(L,Y,X)}const J=new ii;J.setAttribute("position",new pi($,3));const ot=new xv({color:16777215,size:.2});return new PM(J,ot)}return re.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh"},children:[re.jsx("div",{ref:r}),s&&re.jsx("div",{style:{position:"absolute",left:s.screenX+15,top:s.screenY+15,color:"white",backgroundColor:"rgba(0,0,0,0.7)",padding:"5px 10px",borderRadius:"5px",pointerEvents:"none",fontFamily:"monospace"},children:s.name}),p&&re.jsx("div",{style:{position:"absolute",left:p.screenX+15,top:p.screenY+15,color:"white",backgroundColor:"rgba(0,0,0,0.7)",padding:"5px 10px",borderRadius:"5px",pointerEvents:"none",fontFamily:"monospace"},children:p.planetName}),re.jsx(oR,{system:d,onClose:C})]})};function cR({isOpen:r,message:t}){return r?re.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:re.jsxs("div",{className:"rounded-lg bg-white p-8 text-center shadow-xl",children:[re.jsx("div",{className:"mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600"}),re.jsx("p",{className:"text-lg font-medium text-gray-700",children:t})]})}):null}function uR(){const[r,t]=Ue.useState(!1),[n,s]=Ue.useState("");return Ue.useEffect(()=>{(async()=>{s("Waking up the API because I'm cheap... 😴"),t(!0);try{const d=await fetch("https://space-game-api.onrender.com/api/about/",{headers:{"x-api-key":"da25f85c-850f-4b85-b1df-c080a4386dc0"}});if(!d.ok)throw new Error(`API responded with status: ${d.status}`);const m=await d.json();console.log("API is awake!",m)}catch(c){console.error("Error waking up API:",c),s("Could not connect to the API."),setTimeout(()=>t(!1),3e3);return}t(!1)})()},[]),re.jsxs("div",{className:"App",children:[re.jsx(lR,{}),re.jsx(cR,{isOpen:r,message:n})]})}QS.createRoot(document.getElementById("root")).render(re.jsx(Ue.StrictMode,{children:re.jsx(XS,{children:re.jsx(uR,{})})}));
