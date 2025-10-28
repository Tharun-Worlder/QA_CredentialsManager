(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(o){if(o.ep)return;o.ep=!0;const f=i(o);fetch(o.href,f)}})();var yf={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function hb(){if(a_)return rl;a_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(l,o,f){var h=null;if(f!==void 0&&(h=""+f),o.key!==void 0&&(h=""+o.key),"key"in o){f={};for(var m in o)m!=="key"&&(f[m]=o[m])}else f=o;return o=f.ref,{$$typeof:a,type:l,key:h,ref:o!==void 0?o:null,props:f}}return rl.Fragment=t,rl.jsx=i,rl.jsxs=i,rl}var l_;function db(){return l_||(l_=1,yf.exports=hb()),yf.exports}var x=db(),vf={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function mb(){if(r_)return Z;r_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function L(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,he={};function ye(T,k,B){this.props=T,this.context=k,this.refs=he,this.updater=B||z}ye.prototype.isReactComponent={},ye.prototype.setState=function(T,k){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,k,"setState")},ye.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function F(){}F.prototype=ye.prototype;function $(T,k,B){this.props=T,this.context=k,this.refs=he,this.updater=B||z}var oe=$.prototype=new F;oe.constructor=$,G(oe,ye.prototype),oe.isPureReactComponent=!0;var qe=Array.isArray;function $e(){}var ie={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function nn(T,k,B){var q=B.ref;return{$$typeof:a,type:T,key:k,ref:q!==void 0?q:null,props:B}}function ss(T,k){return nn(T.type,k,T.props)}function sn(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function ht(T){var k={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(B){return k[B]})}var Ai=/\/+/g;function fn(T,k){return typeof T=="object"&&T!==null&&T.key!=null?ht(""+T.key):k.toString(36)}function Yt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then($e,$e):(T.status="pending",T.then(function(k){T.status==="pending"&&(T.status="fulfilled",T.value=k)},function(k){T.status==="pending"&&(T.status="rejected",T.reason=k)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function D(T,k,B,q,W){var se=typeof T;(se==="undefined"||se==="boolean")&&(T=null);var _e=!1;if(T===null)_e=!0;else switch(se){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(T.$$typeof){case a:case t:_e=!0;break;case E:return _e=T._init,D(_e(T._payload),k,B,q,W)}}if(_e)return W=W(T),_e=q===""?"."+fn(T,0):q,qe(W)?(B="",_e!=null&&(B=_e.replace(Ai,"$&/")+"/"),D(W,k,B,"",function(ma){return ma})):W!=null&&(sn(W)&&(W=ss(W,B+(W.key==null||T&&T.key===W.key?"":(""+W.key).replace(Ai,"$&/")+"/")+_e)),k.push(W)),1;_e=0;var ut=q===""?".":q+":";if(qe(T))for(var He=0;He<T.length;He++)q=T[He],se=ut+fn(q,He),_e+=D(q,k,B,se,W);else if(He=L(T),typeof He=="function")for(T=He.call(T),He=0;!(q=T.next()).done;)q=q.value,se=ut+fn(q,He++),_e+=D(q,k,B,se,W);else if(se==="object"){if(typeof T.then=="function")return D(Yt(T),k,B,q,W);throw k=String(T),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return _e}function H(T,k,B){if(T==null)return T;var q=[],W=0;return D(T,q,"","",function(se){return k.call(B,se,W++)}),q}function K(T){if(T._status===-1){var k=T._result;k=k(),k.then(function(B){(T._status===0||T._status===-1)&&(T._status=1,T._result=B)},function(B){(T._status===0||T._status===-1)&&(T._status=2,T._result=B)}),T._status===-1&&(T._status=0,T._result=k)}if(T._status===1)return T._result.default;throw T._result}var Se=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},we={map:H,forEach:function(T,k,B){H(T,function(){k.apply(this,arguments)},B)},count:function(T){var k=0;return H(T,function(){k++}),k},toArray:function(T){return H(T,function(k){return k})||[]},only:function(T){if(!sn(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Z.Activity=y,Z.Children=we,Z.Component=ye,Z.Fragment=i,Z.Profiler=o,Z.PureComponent=$,Z.StrictMode=l,Z.Suspense=g,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,Z.__COMPILER_RUNTIME={__proto__:null,c:function(T){return ie.H.useMemoCache(T)}},Z.cache=function(T){return function(){return T.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(T,k,B){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var q=G({},T.props),W=T.key;if(k!=null)for(se in k.key!==void 0&&(W=""+k.key),k)!lt.call(k,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&k.ref===void 0||(q[se]=k[se]);var se=arguments.length-2;if(se===1)q.children=B;else if(1<se){for(var _e=Array(se),ut=0;ut<se;ut++)_e[ut]=arguments[ut+2];q.children=_e}return nn(T.type,W,q)},Z.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},Z.createElement=function(T,k,B){var q,W={},se=null;if(k!=null)for(q in k.key!==void 0&&(se=""+k.key),k)lt.call(k,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(W[q]=k[q]);var _e=arguments.length-2;if(_e===1)W.children=B;else if(1<_e){for(var ut=Array(_e),He=0;He<_e;He++)ut[He]=arguments[He+2];W.children=ut}if(T&&T.defaultProps)for(q in _e=T.defaultProps,_e)W[q]===void 0&&(W[q]=_e[q]);return nn(T,se,W)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(T){return{$$typeof:m,render:T}},Z.isValidElement=sn,Z.lazy=function(T){return{$$typeof:E,_payload:{_status:-1,_result:T},_init:K}},Z.memo=function(T,k){return{$$typeof:p,type:T,compare:k===void 0?null:k}},Z.startTransition=function(T){var k=ie.T,B={};ie.T=B;try{var q=T(),W=ie.S;W!==null&&W(B,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then($e,Se)}catch(se){Se(se)}finally{k!==null&&B.types!==null&&(k.types=B.types),ie.T=k}},Z.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},Z.use=function(T){return ie.H.use(T)},Z.useActionState=function(T,k,B){return ie.H.useActionState(T,k,B)},Z.useCallback=function(T,k){return ie.H.useCallback(T,k)},Z.useContext=function(T){return ie.H.useContext(T)},Z.useDebugValue=function(){},Z.useDeferredValue=function(T,k){return ie.H.useDeferredValue(T,k)},Z.useEffect=function(T,k){return ie.H.useEffect(T,k)},Z.useEffectEvent=function(T){return ie.H.useEffectEvent(T)},Z.useId=function(){return ie.H.useId()},Z.useImperativeHandle=function(T,k,B){return ie.H.useImperativeHandle(T,k,B)},Z.useInsertionEffect=function(T,k){return ie.H.useInsertionEffect(T,k)},Z.useLayoutEffect=function(T,k){return ie.H.useLayoutEffect(T,k)},Z.useMemo=function(T,k){return ie.H.useMemo(T,k)},Z.useOptimistic=function(T,k){return ie.H.useOptimistic(T,k)},Z.useReducer=function(T,k,B){return ie.H.useReducer(T,k,B)},Z.useRef=function(T){return ie.H.useRef(T)},Z.useState=function(T){return ie.H.useState(T)},Z.useSyncExternalStore=function(T,k,B){return ie.H.useSyncExternalStore(T,k,B)},Z.useTransition=function(){return ie.H.useTransition()},Z.version="19.2.0",Z}var o_;function uh(){return o_||(o_=1,vf.exports=mb()),vf.exports}var Ue=uh(),Ef={exports:{}},ol={},Sf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function pb(){return u_||(u_=1,(function(a){function t(D,H){var K=D.length;D.push(H);e:for(;0<K;){var Se=K-1>>>1,we=D[Se];if(0<o(we,H))D[Se]=H,D[K]=we,K=Se;else break e}}function i(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var H=D[0],K=D.pop();if(K!==H){D[0]=K;e:for(var Se=0,we=D.length,T=we>>>1;Se<T;){var k=2*(Se+1)-1,B=D[k],q=k+1,W=D[q];if(0>o(B,K))q<we&&0>o(W,B)?(D[Se]=W,D[q]=K,Se=q):(D[Se]=B,D[k]=K,Se=k);else if(q<we&&0>o(W,K))D[Se]=W,D[q]=K,Se=q;else break e}}return H}function o(D,H){var K=D.sortIndex-H.sortIndex;return K!==0?K:D.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();a.unstable_now=function(){return h.now()-m}}var g=[],p=[],E=1,y=null,S=3,L=!1,z=!1,G=!1,he=!1,ye=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function oe(D){for(var H=i(p);H!==null;){if(H.callback===null)l(p);else if(H.startTime<=D)l(p),H.sortIndex=H.expirationTime,t(g,H);else break;H=i(p)}}function qe(D){if(G=!1,oe(D),!z)if(i(g)!==null)z=!0,$e||($e=!0,ht());else{var H=i(p);H!==null&&Yt(qe,H.startTime-D)}}var $e=!1,ie=-1,lt=5,nn=-1;function ss(){return he?!0:!(a.unstable_now()-nn<lt)}function sn(){if(he=!1,$e){var D=a.unstable_now();nn=D;var H=!0;try{e:{z=!1,G&&(G=!1,F(ie),ie=-1),L=!0;var K=S;try{t:{for(oe(D),y=i(g);y!==null&&!(y.expirationTime>D&&ss());){var Se=y.callback;if(typeof Se=="function"){y.callback=null,S=y.priorityLevel;var we=Se(y.expirationTime<=D);if(D=a.unstable_now(),typeof we=="function"){y.callback=we,oe(D),H=!0;break t}y===i(g)&&l(g),oe(D)}else l(g);y=i(g)}if(y!==null)H=!0;else{var T=i(p);T!==null&&Yt(qe,T.startTime-D),H=!1}}break e}finally{y=null,S=K,L=!1}H=void 0}}finally{H?ht():$e=!1}}}var ht;if(typeof $=="function")ht=function(){$(sn)};else if(typeof MessageChannel<"u"){var Ai=new MessageChannel,fn=Ai.port2;Ai.port1.onmessage=sn,ht=function(){fn.postMessage(null)}}else ht=function(){ye(sn,0)};function Yt(D,H){ie=ye(function(){D(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(D){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var K=S;S=H;try{return D()}finally{S=K}},a.unstable_requestPaint=function(){he=!0},a.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=S;S=D;try{return H()}finally{S=K}},a.unstable_scheduleCallback=function(D,H,K){var Se=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Se+K:Se):K=Se,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=K+we,D={id:E++,callback:H,priorityLevel:D,startTime:K,expirationTime:we,sortIndex:-1},K>Se?(D.sortIndex=K,t(p,D),i(g)===null&&D===i(p)&&(G?(F(ie),ie=-1):G=!0,Yt(qe,K-Se))):(D.sortIndex=we,t(g,D),z||L||(z=!0,$e||($e=!0,ht()))),D},a.unstable_shouldYield=ss,a.unstable_wrapCallback=function(D){var H=S;return function(){var K=S;S=H;try{return D.apply(this,arguments)}finally{S=K}}}})(bf)),bf}var c_;function gb(){return c_||(c_=1,Sf.exports=pb()),Sf.exports}var Tf={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function _b(){if(f_)return rt;f_=1;var a=uh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function f(g,p,E){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:g,containerInfo:p,implementation:E}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,rt.createPortal=function(g,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return f(g,p,null,E)},rt.flushSync=function(g){var p=h.T,E=l.p;try{if(h.T=null,l.p=2,g)return g()}finally{h.T=p,l.p=E,l.d.f()}},rt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(g,p))},rt.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},rt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var E=p.as,y=m(E,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?l.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:L}):E==="script"&&l.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);l.d.M(g,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(g)},rt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,y=m(E,p.crossOrigin);l.d.L(g,E,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rt.preloadModule=function(g,p){if(typeof g=="string")if(p){var E=m(p.as,p.crossOrigin);l.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(g)},rt.requestFormReset=function(g){l.d.r(g)},rt.unstable_batchedUpdates=function(g,p){return g(p)},rt.useFormState=function(g,p,E){return h.H.useFormState(g,p,E)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.2.0",rt}var h_;function yb(){if(h_)return Tf.exports;h_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Tf.exports=_b(),Tf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function vb(){if(d_)return ol;d_=1;var a=gb(),t=uh(),i=yb();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(l(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(l(188));return n!==e?null:e}for(var s=e,r=n;;){var u=s.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){s=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===s)return g(u),e;if(c===r)return g(u),n;c=c.sibling}throw Error(l(188))}if(s.return!==r.return)s=u,r=c;else{for(var d=!1,_=u.child;_;){if(_===s){d=!0,s=u,r=c;break}if(_===r){d=!0,r=u,s=c;break}_=_.sibling}if(!d){for(_=c.child;_;){if(_===s){d=!0,s=c,r=u;break}if(_===r){d=!0,r=c,s=u;break}_=_.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==r)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),$=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),nn=Symbol.for("react.activity"),ss=Symbol.for("react.memo_cache_sentinel"),sn=Symbol.iterator;function ht(e){return e===null||typeof e!="object"?null:(e=sn&&e[sn]||e["@@iterator"],typeof e=="function"?e:null)}var Ai=Symbol.for("react.client.reference");function fn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ai?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case ye:return"Profiler";case he:return"StrictMode";case qe:return"Suspense";case $e:return"SuspenseList";case nn:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case $:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case oe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return n=e.displayName||null,n!==null?n:fn(e.type)||"Memo";case lt:n=e._payload,e=e._init;try{return fn(e(n))}catch{}}return null}var Yt=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Se=[],we=-1;function T(e){return{current:e}}function k(e){0>we||(e.current=Se[we],Se[we]=null,we--)}function B(e,n){we++,Se[we]=e.current,e.current=n}var q=T(null),W=T(null),se=T(null),_e=T(null);function ut(e,n){switch(B(se,n),B(W,e),B(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=Og(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(q),B(q,e)}function He(){k(q),k(W),k(se)}function ma(e){e.memoizedState!==null&&B(_e,e);var n=q.current,s=Og(n,e.type);n!==s&&(B(W,e),B(q,s))}function Pl(e){W.current===e&&(k(q),k(W)),_e.current===e&&(k(_e),il._currentValue=K)}var $o,sd;function wi(e){if($o===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);$o=n&&n[1]||"",sd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$o+e+sd}var eu=!1;function tu(e,n){if(!e||eu)return"";eu=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(R){var N=R}Reflect.construct(e,[],M)}else{try{M.call()}catch(R){N=R}e.call(M.prototype)}}else{try{throw Error()}catch(R){N=R}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(R){if(R&&N&&typeof R.stack=="string")return[R.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),d=c[0],_=c[1];if(d&&_){var v=d.split(`
`),w=_.split(`
`);for(u=r=0;r<v.length&&!v[r].includes("DetermineComponentFrameRoot");)r++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(r===v.length||u===w.length)for(r=v.length-1,u=w.length-1;1<=r&&0<=u&&v[r]!==w[u];)u--;for(;1<=r&&0<=u;r--,u--)if(v[r]!==w[u]){if(r!==1||u!==1)do if(r--,u--,0>u||v[r]!==w[u]){var O=`
`+v[r].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=r&&0<=u);break}}}finally{eu=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?wi(s):""}function P0(e,n){switch(e.tag){case 26:case 27:case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return e.child!==n&&n!==null?wi("Suspense Fallback"):wi("Suspense");case 19:return wi("SuspenseList");case 0:case 15:return tu(e.type,!1);case 11:return tu(e.type.render,!1);case 1:return tu(e.type,!0);case 31:return wi("Activity");default:return""}}function ad(e){try{var n="",s=null;do n+=P0(e,s),s=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var nu=Object.prototype.hasOwnProperty,iu=a.unstable_scheduleCallback,su=a.unstable_cancelCallback,G0=a.unstable_shouldYield,Y0=a.unstable_requestPaint,Ct=a.unstable_now,F0=a.unstable_getCurrentPriorityLevel,ld=a.unstable_ImmediatePriority,rd=a.unstable_UserBlockingPriority,Gl=a.unstable_NormalPriority,Q0=a.unstable_LowPriority,od=a.unstable_IdlePriority,K0=a.log,X0=a.unstable_setDisableYieldValue,pa=null,At=null;function Bn(e){if(typeof K0=="function"&&X0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(pa,e)}catch{}}var wt=Math.clz32?Math.clz32:J0,Z0=Math.log,W0=Math.LN2;function J0(e){return e>>>=0,e===0?32:31-(Z0(e)/W0|0)|0}var Yl=256,Fl=262144,Ql=4194304;function Ni(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kl(e,n,s){var r=e.pendingLanes;if(r===0)return 0;var u=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var _=r&134217727;return _!==0?(r=_&~c,r!==0?u=Ni(r):(d&=_,d!==0?u=Ni(d):s||(s=_&~e,s!==0&&(u=Ni(s))))):(_=r&~c,_!==0?u=Ni(_):d!==0?u=Ni(d):s||(s=r&~e,s!==0&&(u=Ni(s)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,s=n&-n,c>=s||c===32&&(s&4194048)!==0)?n:u}function ga(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function $0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(){var e=Ql;return Ql<<=1,(Ql&62914560)===0&&(Ql=4194304),e}function au(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function _a(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function eE(e,n,s,r,u,c){var d=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var _=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(s=d&~s;0<s;){var O=31-wt(s),M=1<<O;_[O]=0,v[O]=-1;var N=w[O];if(N!==null)for(w[O]=null,O=0;O<N.length;O++){var R=N[O];R!==null&&(R.lane&=-536870913)}s&=~M}r!==0&&cd(e,r,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~n))}function cd(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-wt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|s&261930}function fd(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var r=31-wt(s),u=1<<r;u&n|e[r]&n&&(e[r]|=n),s&=~u}}function hd(e,n){var s=n&-n;return s=(s&42)!==0?1:lu(s),(s&(e.suspendedLanes|n))!==0?0:s}function lu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ru(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dd(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function md(e,n){var s=H.p;try{return H.p=e,n()}finally{H.p=s}}var jn=Math.random().toString(36).slice(2),et="__reactFiber$"+jn,dt="__reactProps$"+jn,as="__reactContainer$"+jn,ou="__reactEvents$"+jn,tE="__reactListeners$"+jn,nE="__reactHandles$"+jn,pd="__reactResources$"+jn,ya="__reactMarker$"+jn;function uu(e){delete e[et],delete e[dt],delete e[ou],delete e[tE],delete e[nE]}function ls(e){var n=e[et];if(n)return n;for(var s=e.parentNode;s;){if(n=s[as]||s[et]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=Ug(e);e!==null;){if(s=e[et])return s;e=Ug(e)}return n}e=s,s=e.parentNode}return null}function rs(e){if(e=e[et]||e[as]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function va(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function os(e){var n=e[pd];return n||(n=e[pd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ke(e){e[ya]=!0}var gd=new Set,_d={};function Ri(e,n){us(e,n),us(e+"Capture",n)}function us(e,n){for(_d[e]=n,e=0;e<n.length;e++)gd.add(n[e])}var iE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yd={},vd={};function sE(e){return nu.call(vd,e)?!0:nu.call(yd,e)?!1:iE.test(e)?vd[e]=!0:(yd[e]=!0,!1)}function Xl(e,n,s){if(sE(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Zl(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function hn(e,n,s,r){if(r===null)e.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+r)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function aE(e,n,s){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function cu(e){if(!e._valueTracker){var n=Ed(e)?"checked":"value";e._valueTracker=aE(e,n,""+e[n])}}function Sd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==s?(n.setValue(e),!0):!1}function Wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lE=/[\n"\\]/g;function Lt(e){return e.replace(lE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function fu(e,n,s,r,u,c,d,_){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kt(n)):e.value!==""+kt(n)&&(e.value=""+kt(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?hu(e,d,kt(n)):s!=null?hu(e,d,kt(s)):r!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+kt(_):e.removeAttribute("name")}function bd(e,n,s,r,u,c,d,_){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||s!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){cu(e);return}s=s!=null?""+kt(s):"",n=n!=null?""+kt(n):s,_||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=_?e.checked:!!r,e.defaultChecked=!!r,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),cu(e)}function hu(e,n,s){n==="number"&&Wl(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function cs(e,n,s,r){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&r&&(e[s].defaultSelected=!0)}else{for(s=""+kt(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,s){if(n!=null&&(n=""+kt(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+kt(s):""}function Cd(e,n,s,r){if(n==null){if(r!=null){if(s!=null)throw Error(l(92));if(Yt(r)){if(1<r.length)throw Error(l(93));r=r[0]}s=r}s==null&&(s=""),n=s}s=kt(n),e.defaultValue=s,r=e.textContent,r===s&&r!==""&&r!==null&&(e.value=r),cu(e)}function fs(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var rE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(e,n,s){var r=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,s):typeof s!="number"||s===0||rE.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function wd(e,n,s){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&s[u]!==r&&Ad(e,u,r)}else for(var c in n)n.hasOwnProperty(c)&&Ad(e,c,n[c])}function du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return uE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var mu=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,ds=null;function Nd(e){var n=rs(e);if(n&&(e=n.stateNode)){var s=e[dt]||null;e:switch(e=n.stateNode,n.type){case"input":if(fu(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Lt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var r=s[n];if(r!==e&&r.form===e.form){var u=r[dt]||null;if(!u)throw Error(l(90));fu(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)r=s[n],r.form===e.form&&Sd(r)}break e;case"textarea":Td(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&cs(e,!!s.multiple,n,!1)}}}var gu=!1;function Rd(e,n,s){if(gu)return e(n,s);gu=!0;try{var r=e(n);return r}finally{if(gu=!1,(hs!==null||ds!==null)&&(Br(),hs&&(n=hs,e=ds,ds=hs=null,Nd(n),e)))for(n=0;n<e.length;n++)Nd(e[n])}}function Ea(e,n){var s=e.stateNode;if(s===null)return null;var r=s[dt]||null;if(r===null)return null;s=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,n,typeof s));return s}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(mn)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{_u=!1}var qn=null,yu=null,$l=null;function Od(){if($l)return $l;var e,n=yu,s=n.length,r,u="value"in qn?qn.value:qn.textContent,c=u.length;for(e=0;e<s&&n[e]===u[e];e++);var d=s-e;for(r=1;r<=d&&n[s-r]===u[c-r];r++);return $l=u.slice(e,1<r?1-r:void 0)}function er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function Dd(){return!1}function mt(e){function n(s,r,u,c,d){this._reactName=s,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(s=e[_],this[_]=s?s(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?tr:Dd,this.isPropagationStopped=Dd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=mt(Oi),ba=y({},Oi,{view:0,detail:0}),cE=mt(ba),vu,Eu,Ta,ir=y({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ta&&(Ta&&e.type==="mousemove"?(vu=e.screenX-Ta.screenX,Eu=e.screenY-Ta.screenY):Eu=vu=0,Ta=e),vu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Id=mt(ir),fE=y({},ir,{dataTransfer:0}),hE=mt(fE),dE=y({},ba,{relatedTarget:0}),Su=mt(dE),mE=y({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),pE=mt(mE),gE=y({},Oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_E=mt(gE),yE=y({},Oi,{data:0}),Md=mt(yE),vE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=SE[e])?!!n[e]:!1}function bu(){return bE}var TE=y({},ba,{key:function(e){if(e.key){var n=vE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?EE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CE=mt(TE),AE=y({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=mt(AE),wE=y({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),NE=mt(wE),RE=y({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),OE=mt(RE),DE=y({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IE=mt(DE),ME=y({},Oi,{newState:0,oldState:0}),xE=mt(ME),kE=[9,13,27,32],Tu=mn&&"CompositionEvent"in window,Ca=null;mn&&"documentMode"in document&&(Ca=document.documentMode);var LE=mn&&"TextEvent"in window&&!Ca,kd=mn&&(!Tu||Ca&&8<Ca&&11>=Ca),Ld=" ",Ud=!1;function zd(e,n){switch(e){case"keyup":return kE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ms=!1;function UE(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Ud=!0,Ld);case"textInput":return e=n.data,e===Ld&&Ud?null:e;default:return null}}function zE(e,n){if(ms)return e==="compositionend"||!Tu&&zd(e,n)?(e=Od(),$l=yu=qn=null,ms=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var HE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!HE[e.type]:n==="textarea"}function jd(e,n,s,r){hs?ds?ds.push(r):ds=[r]:hs=r,n=Fr(n,"onChange"),0<n.length&&(s=new nr("onChange","change",null,s,r),e.push({event:s,listeners:n}))}var Aa=null,wa=null;function BE(e){bg(e,0)}function sr(e){var n=va(e);if(Sd(n))return e}function qd(e,n){if(e==="change")return n}var Vd=!1;if(mn){var Cu;if(mn){var Au="oninput"in document;if(!Au){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Au=typeof Pd.oninput=="function"}Cu=Au}else Cu=!1;Vd=Cu&&(!document.documentMode||9<document.documentMode)}function Gd(){Aa&&(Aa.detachEvent("onpropertychange",Yd),wa=Aa=null)}function Yd(e){if(e.propertyName==="value"&&sr(wa)){var n=[];jd(n,wa,e,pu(e)),Rd(BE,n)}}function jE(e,n,s){e==="focusin"?(Gd(),Aa=n,wa=s,Aa.attachEvent("onpropertychange",Yd)):e==="focusout"&&Gd()}function qE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(wa)}function VE(e,n){if(e==="click")return sr(n)}function PE(e,n){if(e==="input"||e==="change")return sr(n)}function GE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nt=typeof Object.is=="function"?Object.is:GE;function Na(e,n){if(Nt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),r=Object.keys(n);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var u=s[r];if(!nu.call(n,u)||!Nt(e[u],n[u]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qd(e,n){var s=Fd(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=n&&r>=n)return{node:s,offset:n-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Fd(s)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Wl(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Wl(e.document)}return n}function wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var YE=mn&&"documentMode"in document&&11>=document.documentMode,ps=null,Nu=null,Ra=null,Ru=!1;function Zd(e,n,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ru||ps==null||ps!==Wl(r)||(r=ps,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ra&&Na(Ra,r)||(Ra=r,r=Fr(Nu,"onSelect"),0<r.length&&(n=new nr("onSelect","select",null,n,s),e.push({event:n,listeners:r}),n.target=ps)))}function Di(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var gs={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionrun:Di("Transition","TransitionRun"),transitionstart:Di("Transition","TransitionStart"),transitioncancel:Di("Transition","TransitionCancel"),transitionend:Di("Transition","TransitionEnd")},Ou={},Wd={};mn&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Ii(e){if(Ou[e])return Ou[e];if(!gs[e])return e;var n=gs[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Wd)return Ou[e]=n[s];return e}var Jd=Ii("animationend"),$d=Ii("animationiteration"),em=Ii("animationstart"),FE=Ii("transitionrun"),QE=Ii("transitionstart"),KE=Ii("transitioncancel"),tm=Ii("transitionend"),nm=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ft(e,n){nm.set(e,n),Ri(n,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],_s=0,Iu=0;function lr(){for(var e=_s,n=Iu=_s=0;n<e;){var s=Ut[n];Ut[n++]=null;var r=Ut[n];Ut[n++]=null;var u=Ut[n];Ut[n++]=null;var c=Ut[n];if(Ut[n++]=null,r!==null&&u!==null){var d=r.pending;d===null?u.next=u:(u.next=d.next,d.next=u),r.pending=u}c!==0&&im(s,u,c)}}function rr(e,n,s,r){Ut[_s++]=e,Ut[_s++]=n,Ut[_s++]=s,Ut[_s++]=r,Iu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mu(e,n,s,r){return rr(e,n,s,r),or(e)}function Mi(e,n){return rr(e,null,null,n),or(e)}function im(e,n,s){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s);for(var u=!1,c=e.return;c!==null;)c.childLanes|=s,r=c.alternate,r!==null&&(r.childLanes|=s),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&n!==null&&(u=31-wt(s),e=c.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=s|536870912),c):null}function or(e){if(50<Za)throw Za=0,qc=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ys={};function XE(e,n,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,n,s,r){return new XE(e,n,s,r)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,n){var s=e.alternate;return s===null?(s=Rt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function sm(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ur(e,n,s,r,u,c){var d=0;if(r=e,typeof e=="function")xu(e)&&(d=1);else if(typeof e=="string")d=eb(e,s,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case nn:return e=Rt(31,s,n,u),e.elementType=nn,e.lanes=c,e;case G:return xi(s.children,u,c,n);case he:d=8,u|=24;break;case ye:return e=Rt(12,s,n,u|2),e.elementType=ye,e.lanes=c,e;case qe:return e=Rt(13,s,n,u),e.elementType=qe,e.lanes=c,e;case $e:return e=Rt(19,s,n,u),e.elementType=$e,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:d=10;break e;case F:d=9;break e;case oe:d=11;break e;case ie:d=14;break e;case lt:d=16,r=null;break e}d=29,s=Error(l(130,e===null?"null":typeof e,"")),r=null}return n=Rt(d,s,n,u),n.elementType=e,n.type=r,n.lanes=c,n}function xi(e,n,s,r){return e=Rt(7,e,r,n),e.lanes=s,e}function ku(e,n,s){return e=Rt(6,e,null,n),e.lanes=s,e}function am(e){var n=Rt(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,s){return n=Rt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lm=new WeakMap;function zt(e,n){if(typeof e=="object"&&e!==null){var s=lm.get(e);return s!==void 0?s:(n={value:e,source:n,stack:ad(n)},lm.set(e,n),n)}return{value:e,source:n,stack:ad(n)}}var vs=[],Es=0,cr=null,Oa=0,Ht=[],Bt=0,Vn=null,an=1,ln="";function gn(e,n){vs[Es++]=Oa,vs[Es++]=cr,cr=e,Oa=n}function rm(e,n,s){Ht[Bt++]=an,Ht[Bt++]=ln,Ht[Bt++]=Vn,Vn=e;var r=an;e=ln;var u=32-wt(r)-1;r&=~(1<<u),s+=1;var c=32-wt(n)+u;if(30<c){var d=u-u%5;c=(r&(1<<d)-1).toString(32),r>>=d,u-=d,an=1<<32-wt(n)+u|s<<u|r,ln=c+e}else an=1<<c|s<<u|r,ln=e}function Uu(e){e.return!==null&&(gn(e,1),rm(e,1,0))}function zu(e){for(;e===cr;)cr=vs[--Es],vs[Es]=null,Oa=vs[--Es],vs[Es]=null;for(;e===Vn;)Vn=Ht[--Bt],Ht[Bt]=null,ln=Ht[--Bt],Ht[Bt]=null,an=Ht[--Bt],Ht[Bt]=null}function om(e,n){Ht[Bt++]=an,Ht[Bt++]=ln,Ht[Bt++]=Vn,an=n.id,ln=n.overflow,Vn=e}var tt=null,De=null,fe=!1,Pn=null,jt=!1,Hu=Error(l(519));function Gn(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Da(zt(n,e)),Hu}function um(e){var n=e.stateNode,s=e.type,r=e.memoizedProps;switch(n[et]=e,n[dt]=r,s){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(s=0;s<Ja.length;s++)le(Ja[s],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),bd(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),Cd(n,r.value,r.defaultValue,r.children)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||r.suppressHydrationWarning===!0||wg(n.textContent,s)?(r.popover!=null&&(le("beforetoggle",n),le("toggle",n)),r.onScroll!=null&&le("scroll",n),r.onScrollEnd!=null&&le("scrollend",n),r.onClick!=null&&(n.onclick=dn),n=!0):n=!1,n||Gn(e,!0)}function cm(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:tt=tt.return}}function Ss(e){if(e!==tt)return!1;if(!fe)return cm(e),fe=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||nf(e.type,e.memoizedProps)),s=!s),s&&De&&Gn(e),cm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));De=Lg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));De=Lg(e)}else n===27?(n=De,si(e.type)?(e=of,of=null,De=e):De=n):De=tt?Vt(e.stateNode.nextSibling):null;return!0}function ki(){De=tt=null,fe=!1}function Bu(){var e=Pn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Pn=null),e}function Da(e){Pn===null?Pn=[e]:Pn.push(e)}var ju=T(null),Li=null,_n=null;function Yn(e,n,s){B(ju,n._currentValue),n._currentValue=s}function yn(e){e._currentValue=ju.current,k(ju)}function qu(e,n,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===s)break;e=e.return}}function Vu(e,n,s,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var d=u.child;c=c.firstContext;e:for(;c!==null;){var _=c;c=u;for(var v=0;v<n.length;v++)if(_.context===n[v]){c.lanes|=s,_=c.alternate,_!==null&&(_.lanes|=s),qu(c.return,s,e),r||(d=null);break e}c=_.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=s,c=d.alternate,c!==null&&(c.lanes|=s),qu(d,s,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function bs(e,n,s,r){e=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var _=u.type;Nt(u.pendingProps.value,d.value)||(e!==null?e.push(_):e=[_])}}else if(u===_e.current){if(d=u.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}u=u.return}e!==null&&Vu(n,e,s,r),n.flags|=262144}function fr(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ui(e){Li=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return fm(Li,e)}function hr(e,n){return Li===null&&Ui(e),fm(e,n)}function fm(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},_n===null){if(e===null)throw Error(l(308));_n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _n=_n.next=n;return s}var ZE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},WE=a.unstable_scheduleCallback,JE=a.unstable_NormalPriority,Ve={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new ZE,data:new Map,refCount:0}}function Ia(e){e.refCount--,e.refCount===0&&WE(JE,function(){e.controller.abort()})}var Ma=null,Gu=0,Ts=0,Cs=null;function $E(e,n){if(Ma===null){var s=Ma=[];Gu=0,Ts=Qc(),Cs={status:"pending",value:void 0,then:function(r){s.push(r)}}}return Gu++,n.then(hm,hm),n}function hm(){if(--Gu===0&&Ma!==null){Cs!==null&&(Cs.status="fulfilled");var e=Ma;Ma=null,Ts=0,Cs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eS(e,n){var s=[],r={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),r}var dm=D.S;D.S=function(e,n){Zp=Ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$E(e,n),dm!==null&&dm(e,n)};var zi=T(null);function Yu(){var e=zi.current;return e!==null?e:Ne.pooledCache}function dr(e,n){n===null?B(zi,zi.current):B(zi,n.pool)}function mm(){var e=Yu();return e===null?null:{parent:Ve._currentValue,pool:e}}var As=Error(l(460)),Fu=Error(l(474)),mr=Error(l(542)),pr={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(dn,dn),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e;default:if(typeof n.status=="string")n.then(dn,dn);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e}throw Bi=n,As}}function Hi(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Bi=s,As):s}}var Bi=null;function _m(){if(Bi===null)throw Error(l(459));var e=Bi;return Bi=null,e}function ym(e){if(e===As||e===mr)throw Error(l(483))}var ws=null,xa=0;function gr(e){var n=xa;return xa+=1,ws===null&&(ws=[]),gm(ws,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _r(e,n){throw n.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vm(e){function n(C,b){if(e){var A=C.deletions;A===null?(C.deletions=[b],C.flags|=16):A.push(b)}}function s(C,b){if(!e)return null;for(;b!==null;)n(C,b),b=b.sibling;return null}function r(C){for(var b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function u(C,b){return C=pn(C,b),C.index=0,C.sibling=null,C}function c(C,b,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<b?(C.flags|=67108866,b):A):(C.flags|=67108866,b)):(C.flags|=1048576,b)}function d(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function _(C,b,A,I){return b===null||b.tag!==6?(b=ku(A,C.mode,I),b.return=C,b):(b=u(b,A),b.return=C,b)}function v(C,b,A,I){var P=A.type;return P===G?O(C,b,A.props.children,I,A.key):b!==null&&(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lt&&Hi(P)===b.type)?(b=u(b,A.props),ka(b,A),b.return=C,b):(b=ur(A.type,A.key,A.props,null,C.mode,I),ka(b,A),b.return=C,b)}function w(C,b,A,I){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=Lu(A,C.mode,I),b.return=C,b):(b=u(b,A.children||[]),b.return=C,b)}function O(C,b,A,I,P){return b===null||b.tag!==7?(b=xi(A,C.mode,I,P),b.return=C,b):(b=u(b,A),b.return=C,b)}function M(C,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=ku(""+b,C.mode,A),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case L:return A=ur(b.type,b.key,b.props,null,C.mode,A),ka(A,b),A.return=C,A;case z:return b=Lu(b,C.mode,A),b.return=C,b;case lt:return b=Hi(b),M(C,b,A)}if(Yt(b)||ht(b))return b=xi(b,C.mode,A,null),b.return=C,b;if(typeof b.then=="function")return M(C,gr(b),A);if(b.$$typeof===$)return M(C,hr(C,b),A);_r(C,b)}return null}function N(C,b,A,I){var P=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:_(C,b,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case L:return A.key===P?v(C,b,A,I):null;case z:return A.key===P?w(C,b,A,I):null;case lt:return A=Hi(A),N(C,b,A,I)}if(Yt(A)||ht(A))return P!==null?null:O(C,b,A,I,null);if(typeof A.then=="function")return N(C,b,gr(A),I);if(A.$$typeof===$)return N(C,b,hr(C,A),I);_r(C,A)}return null}function R(C,b,A,I,P){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(A)||null,_(b,C,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case L:return C=C.get(I.key===null?A:I.key)||null,v(b,C,I,P);case z:return C=C.get(I.key===null?A:I.key)||null,w(b,C,I,P);case lt:return I=Hi(I),R(C,b,A,I,P)}if(Yt(I)||ht(I))return C=C.get(A)||null,O(b,C,I,P,null);if(typeof I.then=="function")return R(C,b,A,gr(I),P);if(I.$$typeof===$)return R(C,b,A,hr(b,I),P);_r(b,I)}return null}function j(C,b,A,I){for(var P=null,de=null,V=b,ee=b=0,ce=null;V!==null&&ee<A.length;ee++){V.index>ee?(ce=V,V=null):ce=V.sibling;var me=N(C,V,A[ee],I);if(me===null){V===null&&(V=ce);break}e&&V&&me.alternate===null&&n(C,V),b=c(me,b,ee),de===null?P=me:de.sibling=me,de=me,V=ce}if(ee===A.length)return s(C,V),fe&&gn(C,ee),P;if(V===null){for(;ee<A.length;ee++)V=M(C,A[ee],I),V!==null&&(b=c(V,b,ee),de===null?P=V:de.sibling=V,de=V);return fe&&gn(C,ee),P}for(V=r(V);ee<A.length;ee++)ce=R(V,C,ee,A[ee],I),ce!==null&&(e&&ce.alternate!==null&&V.delete(ce.key===null?ee:ce.key),b=c(ce,b,ee),de===null?P=ce:de.sibling=ce,de=ce);return e&&V.forEach(function(ui){return n(C,ui)}),fe&&gn(C,ee),P}function Y(C,b,A,I){if(A==null)throw Error(l(151));for(var P=null,de=null,V=b,ee=b=0,ce=null,me=A.next();V!==null&&!me.done;ee++,me=A.next()){V.index>ee?(ce=V,V=null):ce=V.sibling;var ui=N(C,V,me.value,I);if(ui===null){V===null&&(V=ce);break}e&&V&&ui.alternate===null&&n(C,V),b=c(ui,b,ee),de===null?P=ui:de.sibling=ui,de=ui,V=ce}if(me.done)return s(C,V),fe&&gn(C,ee),P;if(V===null){for(;!me.done;ee++,me=A.next())me=M(C,me.value,I),me!==null&&(b=c(me,b,ee),de===null?P=me:de.sibling=me,de=me);return fe&&gn(C,ee),P}for(V=r(V);!me.done;ee++,me=A.next())me=R(V,C,ee,me.value,I),me!==null&&(e&&me.alternate!==null&&V.delete(me.key===null?ee:me.key),b=c(me,b,ee),de===null?P=me:de.sibling=me,de=me);return e&&V.forEach(function(fb){return n(C,fb)}),fe&&gn(C,ee),P}function Ce(C,b,A,I){if(typeof A=="object"&&A!==null&&A.type===G&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case L:e:{for(var P=A.key;b!==null;){if(b.key===P){if(P=A.type,P===G){if(b.tag===7){s(C,b.sibling),I=u(b,A.props.children),I.return=C,C=I;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lt&&Hi(P)===b.type){s(C,b.sibling),I=u(b,A.props),ka(I,A),I.return=C,C=I;break e}s(C,b);break}else n(C,b);b=b.sibling}A.type===G?(I=xi(A.props.children,C.mode,I,A.key),I.return=C,C=I):(I=ur(A.type,A.key,A.props,null,C.mode,I),ka(I,A),I.return=C,C=I)}return d(C);case z:e:{for(P=A.key;b!==null;){if(b.key===P)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){s(C,b.sibling),I=u(b,A.children||[]),I.return=C,C=I;break e}else{s(C,b);break}else n(C,b);b=b.sibling}I=Lu(A,C.mode,I),I.return=C,C=I}return d(C);case lt:return A=Hi(A),Ce(C,b,A,I)}if(Yt(A))return j(C,b,A,I);if(ht(A)){if(P=ht(A),typeof P!="function")throw Error(l(150));return A=P.call(A),Y(C,b,A,I)}if(typeof A.then=="function")return Ce(C,b,gr(A),I);if(A.$$typeof===$)return Ce(C,b,hr(C,A),I);_r(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(s(C,b.sibling),I=u(b,A),I.return=C,C=I):(s(C,b),I=ku(A,C.mode,I),I.return=C,C=I),d(C)):s(C,b)}return function(C,b,A,I){try{xa=0;var P=Ce(C,b,A,I);return ws=null,P}catch(V){if(V===As||V===mr)throw V;var de=Rt(29,V,null,C.mode);return de.lanes=I,de.return=C,de}finally{}}}var ji=vm(!0),Em=vm(!1),Fn=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(pe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=or(e),im(e,null,s),n}return rr(e,r,n,s),or(e)}function La(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,s|=r,n.lanes=s,fd(e,s)}}function Xu(e,n){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var u=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var d={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};c===null?u=c=d:c=c.next=d,s=s.next}while(s!==null);c===null?u=c=n:c=c.next=n}else u=c=n;s={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Zu=!1;function Ua(){if(Zu){var e=Cs;if(e!==null)throw e}}function za(e,n,s,r){Zu=!1;var u=e.updateQueue;Fn=!1;var c=u.firstBaseUpdate,d=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var v=_,w=v.next;v.next=null,d===null?c=w:d.next=w,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,_=O.lastBaseUpdate,_!==d&&(_===null?O.firstBaseUpdate=w:_.next=w,O.lastBaseUpdate=v))}if(c!==null){var M=u.baseState;d=0,O=w=v=null,_=c;do{var N=_.lane&-536870913,R=N!==_.lane;if(R?(ue&N)===N:(r&N)===N){N!==0&&N===Ts&&(Zu=!0),O!==null&&(O=O.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var j=e,Y=_;N=n;var Ce=s;switch(Y.tag){case 1:if(j=Y.payload,typeof j=="function"){M=j.call(Ce,M,N);break e}M=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=Y.payload,N=typeof j=="function"?j.call(Ce,M,N):j,N==null)break e;M=y({},M,N);break e;case 2:Fn=!0}}N=_.callback,N!==null&&(e.flags|=64,R&&(e.flags|=8192),R=u.callbacks,R===null?u.callbacks=[N]:R.push(N))}else R={lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},O===null?(w=O=R,v=M):O=O.next=R,d|=N;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;R=_,_=R.next,R.next=null,u.lastBaseUpdate=R,u.shared.pending=null}}while(!0);O===null&&(v=M),u.baseState=v,u.firstBaseUpdate=w,u.lastBaseUpdate=O,c===null&&(u.shared.lanes=0),$n|=d,e.lanes=d,e.memoizedState=M}}function Sm(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function bm(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Sm(s[e],n)}var Ns=T(null),yr=T(0);function Tm(e,n){e=Nn,B(yr,e),B(Ns,n),Nn=e|n.baseLanes}function Wu(){B(yr,Nn),B(Ns,Ns.current)}function Ju(){Nn=yr.current,k(Ns),k(yr)}var Ot=T(null),qt=null;function Xn(e){var n=e.alternate;B(Be,Be.current&1),B(Ot,e),qt===null&&(n===null||Ns.current!==null||n.memoizedState!==null)&&(qt=e)}function $u(e){B(Be,Be.current),B(Ot,e),qt===null&&(qt=e)}function Cm(e){e.tag===22?(B(Be,Be.current),B(Ot,e),qt===null&&(qt=e)):Zn()}function Zn(){B(Be,Be.current),B(Ot,Ot.current)}function Dt(e){k(Ot),qt===e&&(qt=null),k(Be)}var Be=T(0);function vr(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||lf(s)||rf(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vn=0,J=null,be=null,Pe=null,Er=!1,Rs=!1,qi=!1,Sr=0,Ha=0,Os=null,tS=0;function ke(){throw Error(l(321))}function ec(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Nt(e[s],n[s]))return!1;return!0}function tc(e,n,s,r,u,c){return vn=c,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?rp:gc,qi=!1,c=s(r,u),qi=!1,Rs&&(c=wm(n,s,r,u)),Am(e),c}function Am(e){D.H=qa;var n=be!==null&&be.next!==null;if(vn=0,Pe=be=J=null,Er=!1,Ha=0,Os=null,n)throw Error(l(300));e===null||Ge||(e=e.dependencies,e!==null&&fr(e)&&(Ge=!0))}function wm(e,n,s,r){J=e;var u=0;do{if(Rs&&(Os=null),Ha=0,Rs=!1,25<=u)throw Error(l(301));if(u+=1,Pe=be=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=op,c=n(s,r)}while(Rs);return c}function nS(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Ba(n):n,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(J.flags|=1024),n}function nc(){var e=Sr!==0;return Sr=0,e}function ic(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function sc(e){if(Er){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Er=!1}vn=0,Pe=be=J=null,Rs=!1,Ha=Sr=0,Os=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?J.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function je(){if(be===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var n=Pe===null?J.memoizedState:Pe.next;if(n!==null)Pe=n,be=e;else{if(e===null)throw J.alternate===null?Error(l(467)):Error(l(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Pe===null?J.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function br(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ba(e){var n=Ha;return Ha+=1,Os===null&&(Os=[]),e=gm(Os,e,n),n=J,(Pe===null?n.memoizedState:Pe.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?rp:gc),e}function Tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ba(e);if(e.$$typeof===$)return nt(e)}throw Error(l(438,String(e)))}function ac(e){var n=null,s=J.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=br(),J.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),r=0;r<e;r++)s[r]=ss;return n.index++,s}function En(e,n){return typeof n=="function"?n(e):n}function Cr(e){var n=je();return lc(n,be,e)}function lc(e,n,s){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=s;var u=e.baseQueue,c=r.pending;if(c!==null){if(u!==null){var d=u.next;u.next=c.next,c.next=d}n.baseQueue=u=c,r.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{n=u.next;var _=d=null,v=null,w=n,O=!1;do{var M=w.lane&-536870913;if(M!==w.lane?(ue&M)===M:(vn&M)===M){var N=w.revertLane;if(N===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),M===Ts&&(O=!0);else if((vn&N)===N){w=w.next,N===Ts&&(O=!0);continue}else M={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(_=v=M,d=c):v=v.next=M,J.lanes|=N,$n|=N;M=w.action,qi&&s(c,M),c=w.hasEagerState?w.eagerState:s(c,M)}else N={lane:M,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(_=v=N,d=c):v=v.next=N,J.lanes|=M,$n|=M;w=w.next}while(w!==null&&w!==n);if(v===null?d=c:v.next=_,!Nt(c,e.memoizedState)&&(Ge=!0,O&&(s=Cs,s!==null)))throw s;e.memoizedState=c,e.baseState=d,e.baseQueue=v,r.lastRenderedState=c}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function rc(e){var n=je(),s=n.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var r=s.dispatch,u=s.pending,c=n.memoizedState;if(u!==null){s.pending=null;var d=u=u.next;do c=e(c,d.action),d=d.next;while(d!==u);Nt(c,n.memoizedState)||(Ge=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),s.lastRenderedState=c}return[c,r]}function Nm(e,n,s){var r=J,u=je(),c=fe;if(c){if(s===void 0)throw Error(l(407));s=s()}else s=n();var d=!Nt((be||u).memoizedState,s);if(d&&(u.memoizedState=s,Ge=!0),u=u.queue,cc(Dm.bind(null,r,u,e),[e]),u.getSnapshot!==n||d||Pe!==null&&Pe.memoizedState.tag&1){if(r.flags|=2048,Ds(9,{destroy:void 0},Om.bind(null,r,u,s,n),null),Ne===null)throw Error(l(349));c||(vn&127)!==0||Rm(r,n,s)}return s}function Rm(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=J.updateQueue,n===null?(n=br(),J.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Om(e,n,s,r){n.value=s,n.getSnapshot=r,Im(n)&&Mm(e)}function Dm(e,n,s){return s(function(){Im(n)&&Mm(e)})}function Im(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Nt(e,s)}catch{return!0}}function Mm(e){var n=Mi(e,2);n!==null&&vt(n,e,2)}function oc(e){var n=ct();if(typeof e=="function"){var s=e;if(e=s(),qi){Bn(!0);try{s()}finally{Bn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},n}function xm(e,n,s,r){return e.baseState=s,lc(e,be,typeof r=="function"?r:En)}function iS(e,n,s,r,u){if(Nr(e))throw Error(l(485));if(e=n.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};D.T!==null?s(!0):c.isTransition=!1,r(c),s=n.pending,s===null?(c.next=n.pending=c,km(n,c)):(c.next=s.next,n.pending=s.next=c)}}function km(e,n){var s=n.action,r=n.payload,u=e.state;if(n.isTransition){var c=D.T,d={};D.T=d;try{var _=s(u,r),v=D.S;v!==null&&v(d,_),Lm(e,n,_)}catch(w){uc(e,n,w)}finally{c!==null&&d.types!==null&&(c.types=d.types),D.T=c}}else try{c=s(u,r),Lm(e,n,c)}catch(w){uc(e,n,w)}}function Lm(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){Um(e,n,r)},function(r){return uc(e,n,r)}):Um(e,n,s)}function Um(e,n,s){n.status="fulfilled",n.value=s,zm(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,km(e,s)))}function uc(e,n,s){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=s,zm(n),n=n.next;while(n!==r)}e.action=null}function zm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hm(e,n){return n}function Bm(e,n){if(fe){var s=Ne.formState;if(s!==null){e:{var r=J;if(fe){if(De){t:{for(var u=De,c=jt;u.nodeType!==8;){if(!c){u=null;break t}if(u=Vt(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){De=Vt(u.nextSibling),r=u.data==="F!";break e}}Gn(r)}r=!1}r&&(n=s[0])}}return s=ct(),s.memoizedState=s.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},s.queue=r,s=sp.bind(null,J,r),r.dispatch=s,r=oc(!1),c=pc.bind(null,J,!1,r.queue),r=ct(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,s=iS.bind(null,J,u,c,s),u.dispatch=s,r.memoizedState=e,[n,s,!1]}function jm(e){var n=je();return qm(n,be,e)}function qm(e,n,s){if(n=lc(e,n,Hm)[0],e=Cr(En)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ba(n)}catch(d){throw d===As?mr:d}else r=n;n=je();var u=n.queue,c=u.dispatch;return s!==n.memoizedState&&(J.flags|=2048,Ds(9,{destroy:void 0},sS.bind(null,u,s),null)),[r,c,e]}function sS(e,n){e.action=n}function Vm(e){var n=je(),s=be;if(s!==null)return qm(n,s,e);je(),n=n.memoizedState,s=je();var r=s.queue.dispatch;return s.memoizedState=e,[n,r,!1]}function Ds(e,n,s,r){return e={tag:e,create:s,deps:r,inst:n,next:null},n=J.updateQueue,n===null&&(n=br(),J.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,n.lastEffect=e),e}function Pm(){return je().memoizedState}function Ar(e,n,s,r){var u=ct();J.flags|=e,u.memoizedState=Ds(1|n,{destroy:void 0},s,r===void 0?null:r)}function wr(e,n,s,r){var u=je();r=r===void 0?null:r;var c=u.memoizedState.inst;be!==null&&r!==null&&ec(r,be.memoizedState.deps)?u.memoizedState=Ds(n,c,s,r):(J.flags|=e,u.memoizedState=Ds(1|n,c,s,r))}function Gm(e,n){Ar(8390656,8,e,n)}function cc(e,n){wr(2048,8,e,n)}function aS(e){J.flags|=4;var n=J.updateQueue;if(n===null)n=br(),J.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function Ym(e){var n=je().memoizedState;return aS({ref:n,nextImpl:e}),function(){if((pe&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function Fm(e,n){return wr(4,2,e,n)}function Qm(e,n){return wr(4,4,e,n)}function Km(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xm(e,n,s){s=s!=null?s.concat([e]):null,wr(4,4,Km.bind(null,n,e),s)}function fc(){}function Zm(e,n){var s=je();n=n===void 0?null:n;var r=s.memoizedState;return n!==null&&ec(n,r[1])?r[0]:(s.memoizedState=[e,n],e)}function Wm(e,n){var s=je();n=n===void 0?null:n;var r=s.memoizedState;if(n!==null&&ec(n,r[1]))return r[0];if(r=e(),qi){Bn(!0);try{e()}finally{Bn(!1)}}return s.memoizedState=[r,n],r}function hc(e,n,s){return s===void 0||(vn&1073741824)!==0&&(ue&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=Jp(),J.lanes|=e,$n|=e,s)}function Jm(e,n,s,r){return Nt(s,n)?s:Ns.current!==null?(e=hc(e,s,r),Nt(e,n)||(Ge=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(ue&261930)===0?(Ge=!0,e.memoizedState=s):(e=Jp(),J.lanes|=e,$n|=e,n)}function $m(e,n,s,r,u){var c=H.p;H.p=c!==0&&8>c?c:8;var d=D.T,_={};D.T=_,pc(e,!1,n,s);try{var v=u(),w=D.S;if(w!==null&&w(_,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=eS(v,r);ja(e,n,O,xt(e))}else ja(e,n,r,xt(e))}catch(M){ja(e,n,{then:function(){},status:"rejected",reason:M},xt())}finally{H.p=c,d!==null&&_.types!==null&&(d.types=_.types),D.T=d}}function lS(){}function dc(e,n,s,r){if(e.tag!==5)throw Error(l(476));var u=ep(e).queue;$m(e,u,n,K,s===null?lS:function(){return tp(e),s(r)})}function ep(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:K},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function tp(e){var n=ep(e);n.next===null&&(n=e.alternate.memoizedState),ja(e,n.next.queue,{},xt())}function mc(){return nt(il)}function np(){return je().memoizedState}function ip(){return je().memoizedState}function rS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=xt();e=Qn(s);var r=Kn(n,e,s);r!==null&&(vt(r,n,s),La(r,n,s)),n={cache:Pu()},e.payload=n;return}n=n.return}}function oS(e,n,s){var r=xt();s={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nr(e)?ap(n,s):(s=Mu(e,n,s,r),s!==null&&(vt(s,e,r),lp(s,n,r)))}function sp(e,n,s){var r=xt();ja(e,n,s,r)}function ja(e,n,s,r){var u={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))ap(n,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var d=n.lastRenderedState,_=c(d,s);if(u.hasEagerState=!0,u.eagerState=_,Nt(_,d))return rr(e,n,u,0),Ne===null&&lr(),!1}catch{}finally{}if(s=Mu(e,n,u,r),s!==null)return vt(s,e,r),lp(s,n,r),!0}return!1}function pc(e,n,s,r){if(r={lane:2,revertLane:Qc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(n)throw Error(l(479))}else n=Mu(e,s,r,2),n!==null&&vt(n,e,2)}function Nr(e){var n=e.alternate;return e===J||n!==null&&n===J}function ap(e,n){Rs=Er=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function lp(e,n,s){if((s&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,s|=r,n.lanes=s,fd(e,s)}}var qa={readContext:nt,use:Tr,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};qa.useEffectEvent=ke;var rp={readContext:nt,use:Tr,useCallback:function(e,n){return ct().memoizedState=[e,n===void 0?null:n],e},useContext:nt,useEffect:Gm,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Ar(4194308,4,Km.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Ar(4194308,4,e,n)},useInsertionEffect:function(e,n){Ar(4,2,e,n)},useMemo:function(e,n){var s=ct();n=n===void 0?null:n;var r=e();if(qi){Bn(!0);try{e()}finally{Bn(!1)}}return s.memoizedState=[r,n],r},useReducer:function(e,n,s){var r=ct();if(s!==void 0){var u=s(n);if(qi){Bn(!0);try{s(n)}finally{Bn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=oS.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var n=ct();return e={current:e},n.memoizedState=e},useState:function(e){e=oc(e);var n=e.queue,s=sp.bind(null,J,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:fc,useDeferredValue:function(e,n){var s=ct();return hc(s,e,n)},useTransition:function(){var e=oc(!1);return e=$m.bind(null,J,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var r=J,u=ct();if(fe){if(s===void 0)throw Error(l(407));s=s()}else{if(s=n(),Ne===null)throw Error(l(349));(ue&127)!==0||Rm(r,n,s)}u.memoizedState=s;var c={value:s,getSnapshot:n};return u.queue=c,Gm(Dm.bind(null,r,c,e),[e]),r.flags|=2048,Ds(9,{destroy:void 0},Om.bind(null,r,c,s,n),null),s},useId:function(){var e=ct(),n=Ne.identifierPrefix;if(fe){var s=ln,r=an;s=(r&~(1<<32-wt(r)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Sr++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=tS++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:mc,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=ct();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=pc.bind(null,J,!0,s),s.dispatch=n,[e,n]},useMemoCache:ac,useCacheRefresh:function(){return ct().memoizedState=rS.bind(null,J)},useEffectEvent:function(e){var n=ct(),s={impl:e};return n.memoizedState=s,function(){if((pe&2)!==0)throw Error(l(440));return s.impl.apply(void 0,arguments)}}},gc={readContext:nt,use:Tr,useCallback:Zm,useContext:nt,useEffect:cc,useImperativeHandle:Xm,useInsertionEffect:Fm,useLayoutEffect:Qm,useMemo:Wm,useReducer:Cr,useRef:Pm,useState:function(){return Cr(En)},useDebugValue:fc,useDeferredValue:function(e,n){var s=je();return Jm(s,be.memoizedState,e,n)},useTransition:function(){var e=Cr(En)[0],n=je().memoizedState;return[typeof e=="boolean"?e:Ba(e),n]},useSyncExternalStore:Nm,useId:np,useHostTransitionStatus:mc,useFormState:jm,useActionState:jm,useOptimistic:function(e,n){var s=je();return xm(s,be,e,n)},useMemoCache:ac,useCacheRefresh:ip};gc.useEffectEvent=Ym;var op={readContext:nt,use:Tr,useCallback:Zm,useContext:nt,useEffect:cc,useImperativeHandle:Xm,useInsertionEffect:Fm,useLayoutEffect:Qm,useMemo:Wm,useReducer:rc,useRef:Pm,useState:function(){return rc(En)},useDebugValue:fc,useDeferredValue:function(e,n){var s=je();return be===null?hc(s,e,n):Jm(s,be.memoizedState,e,n)},useTransition:function(){var e=rc(En)[0],n=je().memoizedState;return[typeof e=="boolean"?e:Ba(e),n]},useSyncExternalStore:Nm,useId:np,useHostTransitionStatus:mc,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var s=je();return be!==null?xm(s,be,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ac,useCacheRefresh:ip};op.useEffectEvent=Ym;function _c(e,n,s,r){n=e.memoizedState,s=s(r,n),s=s==null?n:y({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var yc={enqueueSetState:function(e,n,s){e=e._reactInternals;var r=xt(),u=Qn(r);u.payload=n,s!=null&&(u.callback=s),n=Kn(e,u,r),n!==null&&(vt(n,e,r),La(n,e,r))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var r=xt(),u=Qn(r);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Kn(e,u,r),n!==null&&(vt(n,e,r),La(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=xt(),r=Qn(s);r.tag=2,n!=null&&(r.callback=n),n=Kn(e,r,s),n!==null&&(vt(n,e,s),La(n,e,s))}};function up(e,n,s,r,u,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,d):n.prototype&&n.prototype.isPureReactComponent?!Na(s,r)||!Na(u,c):!0}function cp(e,n,s,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,r),n.state!==e&&yc.enqueueReplaceState(n,n.state,null)}function Vi(e,n){var s=n;if("ref"in n){s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}if(e=e.defaultProps){s===n&&(s=y({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function fp(e){ar(e)}function hp(e){console.error(e)}function dp(e){ar(e)}function Rr(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mp(e,n,s){try{var r=e.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vc(e,n,s){return s=Qn(s),s.tag=3,s.payload={element:null},s.callback=function(){Rr(e,n)},s}function pp(e){return e=Qn(e),e.tag=3,e}function gp(e,n,s,r){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;e.payload=function(){return u(c)},e.callback=function(){mp(n,s,r)}}var d=s.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){mp(n,s,r),typeof u!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})})}function uS(e,n,s,r,u){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=s.alternate,n!==null&&bs(n,s,u,!0),s=Ot.current,s!==null){switch(s.tag){case 31:case 13:return qt===null?jr():s.alternate===null&&Le===0&&(Le=3),s.flags&=-257,s.flags|=65536,s.lanes=u,r===pr?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([r]):n.add(r),Gc(e,r,u)),!1;case 22:return s.flags|=65536,r===pr?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([r]):s.add(r)),Gc(e,r,u)),!1}throw Error(l(435,s.tag))}return Gc(e,r,u),jr(),!1}if(fe)return n=Ot.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Hu&&(e=Error(l(422),{cause:r}),Da(zt(e,s)))):(r!==Hu&&(n=Error(l(423),{cause:r}),Da(zt(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=zt(r,s),u=vc(e.stateNode,r,u),Xu(e,u),Le!==4&&(Le=2)),!1;var c=Error(l(520),{cause:r});if(c=zt(c,s),Xa===null?Xa=[c]:Xa.push(c),Le!==4&&(Le=2),n===null)return!0;r=zt(r,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=vc(s.stateNode,r,e),Xu(s,e),!1;case 1:if(n=s.type,c=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))))return s.flags|=65536,u&=-u,s.lanes|=u,u=pp(u),gp(u,e,s,r),Xu(s,u),!1}s=s.return}while(s!==null);return!1}var Ec=Error(l(461)),Ge=!1;function it(e,n,s,r){n.child=e===null?Em(n,null,s,r):ji(n,e.child,s,r)}function _p(e,n,s,r,u){s=s.render;var c=n.ref;if("ref"in r){var d={};for(var _ in r)_!=="ref"&&(d[_]=r[_])}else d=r;return Ui(n),r=tc(e,n,s,d,c,u),_=nc(),e!==null&&!Ge?(ic(e,n,u),Sn(e,n,u)):(fe&&_&&Uu(n),n.flags|=1,it(e,n,r,u),n.child)}function yp(e,n,s,r,u){if(e===null){var c=s.type;return typeof c=="function"&&!xu(c)&&c.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=c,vp(e,n,c,r,u)):(e=ur(s.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!Rc(e,u)){var d=c.memoizedProps;if(s=s.compare,s=s!==null?s:Na,s(d,r)&&e.ref===n.ref)return Sn(e,n,u)}return n.flags|=1,e=pn(c,r),e.ref=n.ref,e.return=n,n.child=e}function vp(e,n,s,r,u){if(e!==null){var c=e.memoizedProps;if(Na(c,r)&&e.ref===n.ref)if(Ge=!1,n.pendingProps=r=c,Rc(e,u))(e.flags&131072)!==0&&(Ge=!0);else return n.lanes=e.lanes,Sn(e,n,u)}return Sc(e,n,s,r,u)}function Ep(e,n,s,r){var u=r.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|s:s,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return Sp(e,n,c,s,r)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dr(n,c!==null?c.cachePool:null),c!==null?Tm(n,c):Wu(),Cm(n);else return r=n.lanes=536870912,Sp(e,n,c!==null?c.baseLanes|s:s,s,r)}else c!==null?(dr(n,c.cachePool),Tm(n,c),Zn(),n.memoizedState=null):(e!==null&&dr(n,null),Wu(),Zn());return it(e,n,u,s),n.child}function Va(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sp(e,n,s,r,u){var c=Yu();return c=c===null?null:{parent:Ve._currentValue,pool:c},n.memoizedState={baseLanes:s,cachePool:c},e!==null&&dr(n,null),Wu(),Cm(n),e!==null&&bs(e,n,r,!0),n.childLanes=u,null}function Or(e,n){return n=Ir({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function bp(e,n,s){return ji(n,e.child,null,s),e=Or(n,n.pendingProps),e.flags|=2,Dt(n),n.memoizedState=null,e}function cS(e,n,s){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(fe){if(r.mode==="hidden")return e=Or(n,r),n.lanes=536870912,Va(null,e);if($u(n),(e=De)?(e=kg(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},s=am(e),s.return=n,n.child=s,tt=n,De=null)):e=null,e===null)throw Gn(n);return n.lanes=536870912,null}return Or(n,r)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=bp(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(Ge||bs(e,n,s,!1),u=(s&e.childLanes)!==0,Ge||u){if(r=Ne,r!==null&&(d=hd(r,s),d!==0&&d!==c.retryLane))throw c.retryLane=d,Mi(e,d),vt(r,e,d),Ec;jr(),n=bp(e,n,s)}else e=c.treeContext,De=Vt(d.nextSibling),tt=n,fe=!0,Pn=null,jt=!1,e!==null&&om(n,e),n=Or(n,r),n.flags|=4096;return n}return e=pn(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(l(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function Sc(e,n,s,r,u){return Ui(n),s=tc(e,n,s,r,void 0,u),r=nc(),e!==null&&!Ge?(ic(e,n,u),Sn(e,n,u)):(fe&&r&&Uu(n),n.flags|=1,it(e,n,s,u),n.child)}function Tp(e,n,s,r,u,c){return Ui(n),n.updateQueue=null,s=wm(n,r,s,u),Am(e),r=nc(),e!==null&&!Ge?(ic(e,n,c),Sn(e,n,c)):(fe&&r&&Uu(n),n.flags|=1,it(e,n,s,c),n.child)}function Cp(e,n,s,r,u){if(Ui(n),n.stateNode===null){var c=ys,d=s.contextType;typeof d=="object"&&d!==null&&(c=nt(d)),c=new s(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=yc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Qu(n),d=s.contextType,c.context=typeof d=="object"&&d!==null?nt(d):ys,c.state=n.memoizedState,d=s.getDerivedStateFromProps,typeof d=="function"&&(_c(n,s,d,r),c.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&yc.enqueueReplaceState(c,c.state,null),za(n,r,c,u),Ua(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){c=n.stateNode;var _=n.memoizedProps,v=Vi(s,_);c.props=v;var w=c.context,O=s.contextType;d=ys,typeof O=="object"&&O!==null&&(d=nt(O));var M=s.getDerivedStateFromProps;O=typeof M=="function"||typeof c.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_||w!==d)&&cp(n,c,r,d),Fn=!1;var N=n.memoizedState;c.state=N,za(n,r,c,u),Ua(),w=n.memoizedState,_||N!==w||Fn?(typeof M=="function"&&(_c(n,s,M,r),w=n.memoizedState),(v=Fn||up(n,s,v,r,N,w,d))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=w),c.props=r,c.state=w,c.context=d,r=v):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Ku(e,n),d=n.memoizedProps,O=Vi(s,d),c.props=O,M=n.pendingProps,N=c.context,w=s.contextType,v=ys,typeof w=="object"&&w!==null&&(v=nt(w)),_=s.getDerivedStateFromProps,(w=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==M||N!==v)&&cp(n,c,r,v),Fn=!1,N=n.memoizedState,c.state=N,za(n,r,c,u),Ua();var R=n.memoizedState;d!==M||N!==R||Fn||e!==null&&e.dependencies!==null&&fr(e.dependencies)?(typeof _=="function"&&(_c(n,s,_,r),R=n.memoizedState),(O=Fn||up(n,s,O,r,N,R,v)||e!==null&&e.dependencies!==null&&fr(e.dependencies))?(w||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,R,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,R,v)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=R),c.props=r,c.state=R,c.context=v,r=O):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),r=!1)}return c=r,Dr(e,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&r?(n.child=ji(n,e.child,null,u),n.child=ji(n,null,s,u)):it(e,n,s,u),n.memoizedState=c.state,e=n.child):e=Sn(e,n,u),e}function Ap(e,n,s,r){return ki(),n.flags|=256,it(e,n,s,r),n.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:mm()}}function Cc(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Mt),e}function wp(e,n,s){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(fe){if(u?Xn(n):Zn(),(e=De)?(e=kg(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},s=am(e),s.return=n,n.child=s,tt=n,De=null)):e=null,e===null)throw Gn(n);return rf(e)?n.lanes=32:n.lanes=536870912,null}var _=r.children;return r=r.fallback,u?(Zn(),u=n.mode,_=Ir({mode:"hidden",children:_},u),r=xi(r,u,s,null),_.return=n,r.return=n,_.sibling=r,n.child=_,r=n.child,r.memoizedState=Tc(s),r.childLanes=Cc(e,d,s),n.memoizedState=bc,Va(null,r)):(Xn(n),Ac(n,_))}var v=e.memoizedState;if(v!==null&&(_=v.dehydrated,_!==null)){if(c)n.flags&256?(Xn(n),n.flags&=-257,n=wc(e,n,s)):n.memoizedState!==null?(Zn(),n.child=e.child,n.flags|=128,n=null):(Zn(),_=r.fallback,u=n.mode,r=Ir({mode:"visible",children:r.children},u),_=xi(_,u,s,null),_.flags|=2,r.return=n,_.return=n,r.sibling=_,n.child=r,ji(n,e.child,null,s),r=n.child,r.memoizedState=Tc(s),r.childLanes=Cc(e,d,s),n.memoizedState=bc,n=Va(null,r));else if(Xn(n),rf(_)){if(d=_.nextSibling&&_.nextSibling.dataset,d)var w=d.dgst;d=w,r=Error(l(419)),r.stack="",r.digest=d,Da({value:r,source:null,stack:null}),n=wc(e,n,s)}else if(Ge||bs(e,n,s,!1),d=(s&e.childLanes)!==0,Ge||d){if(d=Ne,d!==null&&(r=hd(d,s),r!==0&&r!==v.retryLane))throw v.retryLane=r,Mi(e,r),vt(d,e,r),Ec;lf(_)||jr(),n=wc(e,n,s)}else lf(_)?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,De=Vt(_.nextSibling),tt=n,fe=!0,Pn=null,jt=!1,e!==null&&om(n,e),n=Ac(n,r.children),n.flags|=4096);return n}return u?(Zn(),_=r.fallback,u=n.mode,v=e.child,w=v.sibling,r=pn(v,{mode:"hidden",children:r.children}),r.subtreeFlags=v.subtreeFlags&65011712,w!==null?_=pn(w,_):(_=xi(_,u,s,null),_.flags|=2),_.return=n,r.return=n,r.sibling=_,n.child=r,Va(null,r),r=n.child,_=e.child.memoizedState,_===null?_=Tc(s):(u=_.cachePool,u!==null?(v=Ve._currentValue,u=u.parent!==v?{parent:v,pool:v}:u):u=mm(),_={baseLanes:_.baseLanes|s,cachePool:u}),r.memoizedState=_,r.childLanes=Cc(e,d,s),n.memoizedState=bc,Va(e.child,r)):(Xn(n),s=e.child,e=s.sibling,s=pn(s,{mode:"visible",children:r.children}),s.return=n,s.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=s,n.memoizedState=null,s)}function Ac(e,n){return n=Ir({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ir(e,n){return e=Rt(22,e,null,n),e.lanes=0,e}function wc(e,n,s){return ji(n,e.child,null,s),e=Ac(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Np(e,n,s){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),qu(e.return,n,s)}function Nc(e,n,s,r,u,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:u,treeForkCount:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=s,d.tailMode=u,d.treeForkCount=c)}function Rp(e,n,s){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var d=Be.current,_=(d&2)!==0;if(_?(d=d&1|2,n.flags|=128):d&=1,B(Be,d),it(e,n,r,s),r=fe?Oa:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Np(e,s,n);else if(e.tag===19)Np(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&vr(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),Nc(n,!1,u,s,c,r);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vr(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Nc(n,!0,s,null,c,r);break;case"together":Nc(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Sn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(bs(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,s=pn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=pn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Rc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fr(e)))}function fS(e,n,s){switch(n.tag){case 3:ut(n,n.stateNode.containerInfo),Yn(n,Ve,e.memoizedState.cache),ki();break;case 27:case 5:ma(n);break;case 4:ut(n,n.stateNode.containerInfo);break;case 10:Yn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Xn(n),n.flags|=128,null):(s&n.child.childLanes)!==0?wp(e,n,s):(Xn(n),e=Sn(e,n,s),e!==null?e.sibling:null);Xn(n);break;case 19:var u=(e.flags&128)!==0;if(r=(s&n.childLanes)!==0,r||(bs(e,n,s,!1),r=(s&n.childLanes)!==0),u){if(r)return Rp(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),B(Be,Be.current),r)break;return null;case 22:return n.lanes=0,Ep(e,n,s,n.pendingProps);case 24:Yn(n,Ve,e.memoizedState.cache)}return Sn(e,n,s)}function Op(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ge=!0;else{if(!Rc(e,s)&&(n.flags&128)===0)return Ge=!1,fS(e,n,s);Ge=(e.flags&131072)!==0}else Ge=!1,fe&&(n.flags&1048576)!==0&&rm(n,Oa,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Hi(n.elementType),n.type=e,typeof e=="function")xu(e)?(r=Vi(e,r),n.tag=1,n=Cp(null,n,e,r,s)):(n.tag=0,n=Sc(null,n,e,r,s));else{if(e!=null){var u=e.$$typeof;if(u===oe){n.tag=11,n=_p(null,n,e,r,s);break e}else if(u===ie){n.tag=14,n=yp(null,n,e,r,s);break e}}throw n=fn(e)||e,Error(l(306,n,""))}}return n;case 0:return Sc(e,n,n.type,n.pendingProps,s);case 1:return r=n.type,u=Vi(r,n.pendingProps),Cp(e,n,r,u,s);case 3:e:{if(ut(n,n.stateNode.containerInfo),e===null)throw Error(l(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,Ku(e,n),za(n,r,null,s);var d=n.memoizedState;if(r=d.cache,Yn(n,Ve,r),r!==c.cache&&Vu(n,[Ve],s,!0),Ua(),r=d.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Ap(e,n,r,s);break e}else if(r!==u){u=zt(Error(l(424)),n),Da(u),n=Ap(e,n,r,s);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Vt(e.firstChild),tt=n,fe=!0,Pn=null,jt=!0,s=Em(n,null,r,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ki(),r===u){n=Sn(e,n,s);break e}it(e,n,r,s)}n=n.child}return n;case 26:return Dr(e,n),e===null?(s=jg(n.type,null,n.pendingProps,null))?n.memoizedState=s:fe||(s=n.type,e=n.pendingProps,r=Qr(se.current).createElement(s),r[et]=n,r[dt]=e,st(r,s,e),Ke(r),n.stateNode=r):n.memoizedState=jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ma(n),e===null&&fe&&(r=n.stateNode=zg(n.type,n.pendingProps,se.current),tt=n,jt=!0,u=De,si(n.type)?(of=u,De=Vt(r.firstChild)):De=u),it(e,n,n.pendingProps.children,s),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&fe&&((u=r=De)&&(r=qS(r,n.type,n.pendingProps,jt),r!==null?(n.stateNode=r,tt=n,De=Vt(r.firstChild),jt=!1,u=!0):u=!1),u||Gn(n)),ma(n),u=n.type,c=n.pendingProps,d=e!==null?e.memoizedProps:null,r=c.children,nf(u,c)?r=null:d!==null&&nf(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=tc(e,n,nS,null,null,s),il._currentValue=u),Dr(e,n),it(e,n,r,s),n.child;case 6:return e===null&&fe&&((e=s=De)&&(s=VS(s,n.pendingProps,jt),s!==null?(n.stateNode=s,tt=n,De=null,e=!0):e=!1),e||Gn(n)),null;case 13:return wp(e,n,s);case 4:return ut(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ji(n,null,r,s):it(e,n,r,s),n.child;case 11:return _p(e,n,n.type,n.pendingProps,s);case 7:return it(e,n,n.pendingProps,s),n.child;case 8:return it(e,n,n.pendingProps.children,s),n.child;case 12:return it(e,n,n.pendingProps.children,s),n.child;case 10:return r=n.pendingProps,Yn(n,n.type,r.value),it(e,n,r.children,s),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Ui(n),u=nt(u),r=r(u),n.flags|=1,it(e,n,r,s),n.child;case 14:return yp(e,n,n.type,n.pendingProps,s);case 15:return vp(e,n,n.type,n.pendingProps,s);case 19:return Rp(e,n,s);case 31:return cS(e,n,s);case 22:return Ep(e,n,s,n.pendingProps);case 24:return Ui(n),r=nt(Ve),e===null?(u=Yu(),u===null&&(u=Ne,c=Pu(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=s),u=c),n.memoizedState={parent:r,cache:u},Qu(n),Yn(n,Ve,u)):((e.lanes&s)!==0&&(Ku(e,n),za(n,null,null,s),Ua()),u=e.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Yn(n,Ve,r)):(r=c.cache,Yn(n,Ve,r),r!==u.cache&&Vu(n,[Ve],s,!0))),it(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function bn(e){e.flags|=4}function Oc(e,n,s,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw Bi=pr,Fu}else e.flags&=-16777217}function Dp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yg(n))if(ng())e.flags|=8192;else throw Bi=pr,Fu}function Mr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ud():536870912,e.lanes|=n,ks|=n)}function Pa(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=s,n}function hS(e,n,s){var r=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return s=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),yn(Ve),He(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ss(n)?bn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),Ie(n),null;case 26:var u=n.type,c=n.memoizedState;return e===null?(bn(n),c!==null?(Ie(n),Dp(n,c)):(Ie(n),Oc(n,u,null,r,s))):c?c!==e.memoizedState?(bn(n),Ie(n),Dp(n,c)):(Ie(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&bn(n),Ie(n),Oc(n,u,e,r,s)),null;case 27:if(Pl(n),s=se.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&bn(n);else{if(!r){if(n.stateNode===null)throw Error(l(166));return Ie(n),null}e=q.current,Ss(n)?um(n):(e=zg(u,r,s),n.stateNode=e,bn(n))}return Ie(n),null;case 5:if(Pl(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&bn(n);else{if(!r){if(n.stateNode===null)throw Error(l(166));return Ie(n),null}if(c=q.current,Ss(n))um(n);else{var d=Qr(se.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?d.createElement("select",{is:r.is}):d.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?d.createElement(u,{is:r.is}):d.createElement(u)}}c[et]=n,c[dt]=r;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=c;e:switch(st(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&bn(n)}}return Ie(n),Oc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&bn(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(l(166));if(e=se.current,Ss(n)){if(e=n.stateNode,s=n.memoizedProps,r=null,u=tt,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[et]=n,e=!!(e.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||wg(e.nodeValue,s)),e||Gn(n,!0)}else e=Qr(e).createTextNode(r),e[et]=n,n.stateNode=e}return Ie(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ss(n),s!==null){if(e===null){if(!r)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[et]=n}else ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),e=!1}else s=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(Dt(n),n):(Dt(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ie(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ss(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[et]=n}else ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),u=!1}else u=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Dt(n),n):(Dt(n),null)}return Dt(n),(n.flags&128)!==0?(n.lanes=s,n):(s=r!==null,e=e!==null&&e.memoizedState!==null,s&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),Mr(n,n.updateQueue),Ie(n),null);case 4:return He(),e===null&&Wc(n.stateNode.containerInfo),Ie(n),null;case 10:return yn(n.type),Ie(n),null;case 19:if(k(Be),r=n.memoizedState,r===null)return Ie(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)Pa(r,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=vr(e),c!==null){for(n.flags|=128,Pa(r,!1),e=c.updateQueue,n.updateQueue=e,Mr(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)sm(s,e),s=s.sibling;return B(Be,Be.current&1|2),fe&&gn(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Ct()>zr&&(n.flags|=128,u=!0,Pa(r,!1),n.lanes=4194304)}else{if(!u)if(e=vr(c),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Mr(n,e),Pa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!fe)return Ie(n),null}else 2*Ct()-r.renderingStartTime>zr&&s!==536870912&&(n.flags|=128,u=!0,Pa(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(e=r.last,e!==null?e.sibling=c:n.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ct(),e.sibling=null,s=Be.current,B(Be,u?s&1|2:s&1),fe&&gn(n,r.treeForkCount),e):(Ie(n),null);case 22:case 23:return Dt(n),Ju(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(s&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),s=n.updateQueue,s!==null&&Mr(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==s&&(n.flags|=2048),e!==null&&k(zi),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),yn(Ve),Ie(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function dS(e,n){switch(zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yn(Ve),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pl(n),null;case 31:if(n.memoizedState!==null){if(Dt(n),n.alternate===null)throw Error(l(340));ki()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Dt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));ki()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(Be),null;case 4:return He(),null;case 10:return yn(n.type),null;case 22:case 23:return Dt(n),Ju(),e!==null&&k(zi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return yn(Ve),null;case 25:return null;default:return null}}function Ip(e,n){switch(zu(n),n.tag){case 3:yn(Ve),He();break;case 26:case 27:case 5:Pl(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Dt(n);break;case 13:Dt(n);break;case 19:k(Be);break;case 10:yn(n.type);break;case 22:case 23:Dt(n),Ju(),e!==null&&k(zi);break;case 24:yn(Ve)}}function Ga(e,n){try{var s=n.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var u=r.next;s=u;do{if((s.tag&e)===e){r=void 0;var c=s.create,d=s.inst;r=c(),d.destroy=r}s=s.next}while(s!==u)}}catch(_){Ee(n,n.return,_)}}function Wn(e,n,s){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&e)===e){var d=r.inst,_=d.destroy;if(_!==void 0){d.destroy=void 0,u=n;var v=s,w=_;try{w()}catch(O){Ee(u,v,O)}}}r=r.next}while(r!==c)}}catch(O){Ee(n,n.return,O)}}function Mp(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{bm(n,s)}catch(r){Ee(e,e.return,r)}}}function xp(e,n,s){s.props=Vi(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(r){Ee(e,n,r)}}function Ya(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof s=="function"?e.refCleanup=s(r):s.current=r}}catch(u){Ee(e,n,u)}}function rn(e,n){var s=e.ref,r=e.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(u){Ee(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ee(e,n,u)}else s.current=null}function kp(e){var n=e.type,s=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break e;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(u){Ee(e,e.return,u)}}function Dc(e,n,s){try{var r=e.stateNode;LS(r,e.type,s,n),r[dt]=n}catch(u){Ee(e,e.return,u)}}function Lp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&si(e.type)||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&si(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,n,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=dn));else if(r!==4&&(r===27&&si(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(Mc(e,n,s),e=e.sibling;e!==null;)Mc(e,n,s),e=e.sibling}function xr(e,n,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(r!==4&&(r===27&&si(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(xr(e,n,s),e=e.sibling;e!==null;)xr(e,n,s),e=e.sibling}function Up(e){var n=e.stateNode,s=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);st(n,r,s),n[et]=e,n[dt]=s}catch(c){Ee(e,e.return,c)}}var Tn=!1,Ye=!1,xc=!1,zp=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function mS(e,n){if(e=e.containerInfo,ef=eo,e=Xd(e),wu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var u=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var d=0,_=-1,v=-1,w=0,O=0,M=e,N=null;t:for(;;){for(var R;M!==s||u!==0&&M.nodeType!==3||(_=d+u),M!==c||r!==0&&M.nodeType!==3||(v=d+r),M.nodeType===3&&(d+=M.nodeValue.length),(R=M.firstChild)!==null;)N=M,M=R;for(;;){if(M===e)break t;if(N===s&&++w===u&&(_=d),N===c&&++O===r&&(v=d),(R=M.nextSibling)!==null)break;M=N,N=M.parentNode}M=R}s=_===-1||v===-1?null:{start:_,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(tf={focusedElem:e,selectionRange:s},eo=!1,Xe=n;Xe!==null;)if(n=Xe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Xe=e;else for(;Xe!==null;){switch(n=Xe,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,s=n,u=c.memoizedProps,c=c.memoizedState,r=s.stateNode;try{var j=Vi(s.type,u);e=r.getSnapshotBeforeUpdate(j,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(Y){Ee(s,s.return,Y)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)af(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":af(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,Xe=e;break}Xe=n.return}}function Hp(e,n,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:An(e,s),r&4&&Ga(5,s);break;case 1:if(An(e,s),r&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(d){Ee(s,s.return,d)}else{var u=Vi(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ee(s,s.return,d)}}r&64&&Mp(s),r&512&&Ya(s,s.return);break;case 3:if(An(e,s),r&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{bm(e,n)}catch(d){Ee(s,s.return,d)}}break;case 27:n===null&&r&4&&Up(s);case 26:case 5:An(e,s),n===null&&r&4&&kp(s),r&512&&Ya(s,s.return);break;case 12:An(e,s);break;case 31:An(e,s),r&4&&qp(e,s);break;case 13:An(e,s),r&4&&Vp(e,s),r&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=TS.bind(null,s),PS(e,s))));break;case 22:if(r=s.memoizedState!==null||Tn,!r){n=n!==null&&n.memoizedState!==null||Ye,u=Tn;var c=Ye;Tn=r,(Ye=n)&&!c?wn(e,s,(s.subtreeFlags&8772)!==0):An(e,s),Tn=u,Ye=c}break;case 30:break;default:An(e,s)}}function Bp(e){var n=e.alternate;n!==null&&(e.alternate=null,Bp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&uu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,pt=!1;function Cn(e,n,s){for(s=s.child;s!==null;)jp(e,n,s),s=s.sibling}function jp(e,n,s){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(pa,s)}catch{}switch(s.tag){case 26:Ye||rn(s,n),Cn(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ye||rn(s,n);var r=xe,u=pt;si(s.type)&&(xe=s.stateNode,pt=!1),Cn(e,n,s),el(s.stateNode),xe=r,pt=u;break;case 5:Ye||rn(s,n);case 6:if(r=xe,u=pt,xe=null,Cn(e,n,s),xe=r,pt=u,xe!==null)if(pt)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(s.stateNode)}catch(c){Ee(s,n,c)}else try{xe.removeChild(s.stateNode)}catch(c){Ee(s,n,c)}break;case 18:xe!==null&&(pt?(e=xe,Mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Vs(e)):Mg(xe,s.stateNode));break;case 4:r=xe,u=pt,xe=s.stateNode.containerInfo,pt=!0,Cn(e,n,s),xe=r,pt=u;break;case 0:case 11:case 14:case 15:Wn(2,s,n),Ye||Wn(4,s,n),Cn(e,n,s);break;case 1:Ye||(rn(s,n),r=s.stateNode,typeof r.componentWillUnmount=="function"&&xp(s,n,r)),Cn(e,n,s);break;case 21:Cn(e,n,s);break;case 22:Ye=(r=Ye)||s.memoizedState!==null,Cn(e,n,s),Ye=r;break;default:Cn(e,n,s)}}function qp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vs(e)}catch(s){Ee(n,n.return,s)}}}function Vp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vs(e)}catch(s){Ee(n,n.return,s)}}function pS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zp),n;default:throw Error(l(435,e.tag))}}function kr(e,n){var s=pS(e);n.forEach(function(r){if(!s.has(r)){s.add(r);var u=CS.bind(null,e,r);r.then(u,u)}})}function gt(e,n){var s=n.deletions;if(s!==null)for(var r=0;r<s.length;r++){var u=s[r],c=e,d=n,_=d;e:for(;_!==null;){switch(_.tag){case 27:if(si(_.type)){xe=_.stateNode,pt=!1;break e}break;case 5:xe=_.stateNode,pt=!1;break e;case 3:case 4:xe=_.stateNode.containerInfo,pt=!0;break e}_=_.return}if(xe===null)throw Error(l(160));jp(c,d,u),xe=null,pt=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Pp(n,e),n=n.sibling}var Qt=null;function Pp(e,n){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(n,e),_t(e),r&4&&(Wn(3,e,e.return),Ga(3,e),Wn(5,e,e.return));break;case 1:gt(n,e),_t(e),r&512&&(Ye||s===null||rn(s,s.return)),r&64&&Tn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var u=Qt;if(gt(n,e),_t(e),r&512&&(Ye||s===null||rn(s,s.return)),r&4){var c=s!==null?s.memoizedState:null;if(r=e.memoizedState,s===null)if(r===null)if(e.stateNode===null){e:{r=e.type,s=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":c=u.getElementsByTagName("title")[0],(!c||c[ya]||c[et]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(r),u.head.insertBefore(c,u.querySelector("head > title"))),st(c,r,s),c[et]=e,Ke(c),r=c;break e;case"link":var d=Pg("link","href",u).get(r+(s.href||""));if(d){for(var _=0;_<d.length;_++)if(c=d[_],c.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&c.getAttribute("rel")===(s.rel==null?null:s.rel)&&c.getAttribute("title")===(s.title==null?null:s.title)&&c.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(_,1);break t}}c=u.createElement(r),st(c,r,s),u.head.appendChild(c);break;case"meta":if(d=Pg("meta","content",u).get(r+(s.content||""))){for(_=0;_<d.length;_++)if(c=d[_],c.getAttribute("content")===(s.content==null?null:""+s.content)&&c.getAttribute("name")===(s.name==null?null:s.name)&&c.getAttribute("property")===(s.property==null?null:s.property)&&c.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&c.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(_,1);break t}}c=u.createElement(r),st(c,r,s),u.head.appendChild(c);break;default:throw Error(l(468,r))}c[et]=e,Ke(c),r=c}e.stateNode=r}else Gg(u,e.type,e.stateNode);else e.stateNode=Vg(u,r,e.memoizedProps);else c!==r?(c===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):c.count--,r===null?Gg(u,e.type,e.stateNode):Vg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,s.memoizedProps)}break;case 27:gt(n,e),_t(e),r&512&&(Ye||s===null||rn(s,s.return)),s!==null&&r&4&&Dc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(gt(n,e),_t(e),r&512&&(Ye||s===null||rn(s,s.return)),e.flags&32){u=e.stateNode;try{fs(u,"")}catch(j){Ee(e,e.return,j)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Dc(e,u,s!==null?s.memoizedProps:u)),r&1024&&(xc=!0);break;case 6:if(gt(n,e),_t(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,s=e.stateNode;try{s.nodeValue=r}catch(j){Ee(e,e.return,j)}}break;case 3:if(Zr=null,u=Qt,Qt=Kr(n.containerInfo),gt(n,e),Qt=u,_t(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{Vs(n.containerInfo)}catch(j){Ee(e,e.return,j)}xc&&(xc=!1,Gp(e));break;case 4:r=Qt,Qt=Kr(e.stateNode.containerInfo),gt(n,e),_t(e),Qt=r;break;case 12:gt(n,e),_t(e);break;case 31:gt(n,e),_t(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kr(e,r)));break;case 13:gt(n,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ur=Ct()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kr(e,r)));break;case 22:u=e.memoizedState!==null;var v=s!==null&&s.memoizedState!==null,w=Tn,O=Ye;if(Tn=w||u,Ye=O||v,gt(n,e),Ye=O,Tn=w,_t(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||v||Tn||Ye||Pi(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){v=s=n;try{if(c=v.stateNode,u)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=v.stateNode;var M=v.memoizedProps.style,N=M!=null&&M.hasOwnProperty("display")?M.display:null;_.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(j){Ee(v,v.return,j)}}}else if(n.tag===6){if(s===null){v=n;try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(j){Ee(v,v.return,j)}}}else if(n.tag===18){if(s===null){v=n;try{var R=v.stateNode;u?xg(R,!0):xg(v.stateNode,!1)}catch(j){Ee(v,v.return,j)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,kr(e,s))));break;case 19:gt(n,e),_t(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kr(e,r)));break;case 30:break;case 21:break;default:gt(n,e),_t(e)}}function _t(e){var n=e.flags;if(n&2){try{for(var s,r=e.return;r!==null;){if(Lp(r)){s=r;break}r=r.return}if(s==null)throw Error(l(160));switch(s.tag){case 27:var u=s.stateNode,c=Ic(e);xr(e,c,u);break;case 5:var d=s.stateNode;s.flags&32&&(fs(d,""),s.flags&=-33);var _=Ic(e);xr(e,_,d);break;case 3:case 4:var v=s.stateNode.containerInfo,w=Ic(e);Mc(e,w,v);break;default:throw Error(l(161))}}catch(O){Ee(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function An(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hp(e,n.alternate,n),n=n.sibling}function Pi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Wn(4,n,n.return),Pi(n);break;case 1:rn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&xp(n,n.return,s),Pi(n);break;case 27:el(n.stateNode);case 26:case 5:rn(n,n.return),Pi(n);break;case 22:n.memoizedState===null&&Pi(n);break;case 30:Pi(n);break;default:Pi(n)}e=e.sibling}}function wn(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,c=n,d=c.flags;switch(c.tag){case 0:case 11:case 15:wn(u,c,s),Ga(4,c);break;case 1:if(wn(u,c,s),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){Ee(r,r.return,w)}if(r=c,u=r.updateQueue,u!==null){var _=r.stateNode;try{var v=u.shared.hiddenCallbacks;if(v!==null)for(u.shared.hiddenCallbacks=null,u=0;u<v.length;u++)Sm(v[u],_)}catch(w){Ee(r,r.return,w)}}s&&d&64&&Mp(c),Ya(c,c.return);break;case 27:Up(c);case 26:case 5:wn(u,c,s),s&&r===null&&d&4&&kp(c),Ya(c,c.return);break;case 12:wn(u,c,s);break;case 31:wn(u,c,s),s&&d&4&&qp(u,c);break;case 13:wn(u,c,s),s&&d&4&&Vp(u,c);break;case 22:c.memoizedState===null&&wn(u,c,s),Ya(c,c.return);break;case 30:break;default:wn(u,c,s)}n=n.sibling}}function kc(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ia(s))}function Lc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ia(e))}function Kt(e,n,s,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yp(e,n,s,r),n=n.sibling}function Yp(e,n,s,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Kt(e,n,s,r),u&2048&&Ga(9,n);break;case 1:Kt(e,n,s,r);break;case 3:Kt(e,n,s,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ia(e)));break;case 12:if(u&2048){Kt(e,n,s,r),e=n.stateNode;try{var c=n.memoizedProps,d=c.id,_=c.onPostCommit;typeof _=="function"&&_(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(n,n.return,v)}}else Kt(e,n,s,r);break;case 31:Kt(e,n,s,r);break;case 13:Kt(e,n,s,r);break;case 23:break;case 22:c=n.stateNode,d=n.alternate,n.memoizedState!==null?c._visibility&2?Kt(e,n,s,r):Fa(e,n):c._visibility&2?Kt(e,n,s,r):(c._visibility|=2,Is(e,n,s,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&kc(d,n);break;case 24:Kt(e,n,s,r),u&2048&&Lc(n.alternate,n);break;default:Kt(e,n,s,r)}}function Is(e,n,s,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,d=n,_=s,v=r,w=d.flags;switch(d.tag){case 0:case 11:case 15:Is(c,d,_,v,u),Ga(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?Is(c,d,_,v,u):Fa(c,d):(O._visibility|=2,Is(c,d,_,v,u)),u&&w&2048&&kc(d.alternate,d);break;case 24:Is(c,d,_,v,u),u&&w&2048&&Lc(d.alternate,d);break;default:Is(c,d,_,v,u)}n=n.sibling}}function Fa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,r=n,u=r.flags;switch(r.tag){case 22:Fa(s,r),u&2048&&kc(r.alternate,r);break;case 24:Fa(s,r),u&2048&&Lc(r.alternate,r);break;default:Fa(s,r)}n=n.sibling}}var Qa=8192;function Ms(e,n,s){if(e.subtreeFlags&Qa)for(e=e.child;e!==null;)Fp(e,n,s),e=e.sibling}function Fp(e,n,s){switch(e.tag){case 26:Ms(e,n,s),e.flags&Qa&&e.memoizedState!==null&&tb(s,Qt,e.memoizedState,e.memoizedProps);break;case 5:Ms(e,n,s);break;case 3:case 4:var r=Qt;Qt=Kr(e.stateNode.containerInfo),Ms(e,n,s),Qt=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Qa,Qa=16777216,Ms(e,n,s),Qa=r):Ms(e,n,s));break;default:Ms(e,n,s)}}function Qp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ka(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];Xe=r,Xp(r,e)}Qp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kp(e),e=e.sibling}function Kp(e){switch(e.tag){case 0:case 11:case 15:Ka(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Ka(e);break;case 12:Ka(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Lr(e)):Ka(e);break;default:Ka(e)}}function Lr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];Xe=r,Xp(r,e)}Qp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Wn(8,n,n.return),Lr(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Lr(n));break;default:Lr(n)}e=e.sibling}}function Xp(e,n){for(;Xe!==null;){var s=Xe;switch(s.tag){case 0:case 11:case 15:Wn(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ia(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,Xe=r;else e:for(s=e;Xe!==null;){r=Xe;var u=r.sibling,c=r.return;if(Bp(r),r===s){Xe=null;break e}if(u!==null){u.return=c,Xe=u;break e}Xe=c}}}var gS={getCacheForType:function(e){var n=nt(Ve),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return nt(Ve).controller.signal}},_S=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ne=null,ae=null,ue=0,ve=0,It=null,Jn=!1,xs=!1,Uc=!1,Nn=0,Le=0,$n=0,Gi=0,zc=0,Mt=0,ks=0,Xa=null,yt=null,Hc=!1,Ur=0,Zp=0,zr=1/0,Hr=null,ei=null,Fe=0,ti=null,Ls=null,Rn=0,Bc=0,jc=null,Wp=null,Za=0,qc=null;function xt(){return(pe&2)!==0&&ue!==0?ue&-ue:D.T!==null?Qc():dd()}function Jp(){if(Mt===0)if((ue&536870912)===0||fe){var e=Fl;Fl<<=1,(Fl&3932160)===0&&(Fl=262144),Mt=e}else Mt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Mt}function vt(e,n,s){(e===Ne&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Us(e,0),ni(e,ue,Mt,!1)),_a(e,s),((pe&2)===0||e!==Ne)&&(e===Ne&&((pe&2)===0&&(Gi|=s),Le===4&&ni(e,ue,Mt,!1)),on(e))}function $p(e,n,s){if((pe&6)!==0)throw Error(l(327));var r=!s&&(n&127)===0&&(n&e.expiredLanes)===0||ga(e,n),u=r?ES(e,n):Pc(e,n,!0),c=r;do{if(u===0){xs&&!r&&ni(e,n,0,!1);break}else{if(s=e.current.alternate,c&&!yS(s)){u=Pc(e,n,!1),c=!1;continue}if(u===2){if(c=n,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var _=e;u=Xa;var v=_.current.memoizedState.isDehydrated;if(v&&(Us(_,d).flags|=256),d=Pc(_,d,!1),d!==2){if(Uc&&!v){_.errorRecoveryDisabledLanes|=c,Gi|=c,u=4;break e}c=yt,yt=u,c!==null&&(yt===null?yt=c:yt.push.apply(yt,c))}u=d}if(c=!1,u!==2)continue}}if(u===1){Us(e,0),ni(e,n,0,!0);break}e:{switch(r=e,c=u,c){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:ni(r,n,Mt,!Jn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(u=Ur+300-Ct(),10<u)){if(ni(r,n,Mt,!Jn),Kl(r,0,!0)!==0)break e;Rn=n,r.timeoutHandle=Dg(eg.bind(null,r,s,yt,Hr,Hc,n,Mt,Gi,ks,Jn,c,"Throttled",-0,0),u);break e}eg(r,s,yt,Hr,Hc,n,Mt,Gi,ks,Jn,c,null,-0,0)}}break}while(!0);on(e)}function eg(e,n,s,r,u,c,d,_,v,w,O,M,N,R){if(e.timeoutHandle=-1,M=n.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Fp(n,c,M);var j=(c&62914560)===c?Ur-Ct():(c&4194048)===c?Zp-Ct():0;if(j=nb(M,j),j!==null){Rn=c,e.cancelPendingCommit=j(og.bind(null,e,n,c,s,r,u,d,_,v,O,M,null,N,R)),ni(e,c,d,!w);return}}og(e,n,c,s,r,u,d,_,v)}function yS(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var u=s[r],c=u.getSnapshot;u=u.value;try{if(!Nt(c(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(e,n,s,r){n&=~zc,n&=~Gi,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var c=31-wt(u),d=1<<c;r[c]=-1,u&=~d}s!==0&&cd(e,s,n)}function Br(){return(pe&6)===0?(Wa(0),!1):!0}function Vc(){if(ae!==null){if(ve===0)var e=ae.return;else e=ae,_n=Li=null,sc(e),ws=null,xa=0,e=ae;for(;e!==null;)Ip(e.alternate,e),e=e.return;ae=null}}function Us(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,HS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Rn=0,Vc(),Ne=e,ae=s=pn(e.current,null),ue=n,ve=0,It=null,Jn=!1,xs=ga(e,n),Uc=!1,ks=Mt=zc=Gi=$n=Le=0,yt=Xa=null,Hc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-wt(r),c=1<<u;n|=e[u],r&=~c}return Nn=n,lr(),s}function tg(e,n){J=null,D.H=qa,n===As||n===mr?(n=_m(),ve=3):n===Fu?(n=_m(),ve=4):ve=n===Ec?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,It=n,ae===null&&(Le=1,Rr(e,zt(n,e.current)))}function ng(){var e=Ot.current;return e===null?!0:(ue&4194048)===ue?qt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===qt:!1}function ig(){var e=D.H;return D.H=qa,e===null?qa:e}function sg(){var e=D.A;return D.A=gS,e}function jr(){Le=4,Jn||(ue&4194048)!==ue&&Ot.current!==null||(xs=!0),($n&134217727)===0&&(Gi&134217727)===0||Ne===null||ni(Ne,ue,Mt,!1)}function Pc(e,n,s){var r=pe;pe|=2;var u=ig(),c=sg();(Ne!==e||ue!==n)&&(Hr=null,Us(e,n)),n=!1;var d=Le;e:do try{if(ve!==0&&ae!==null){var _=ae,v=It;switch(ve){case 8:Vc(),d=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(n=!0);var w=ve;if(ve=0,It=null,zs(e,_,v,w),s&&xs){d=0;break e}break;default:w=ve,ve=0,It=null,zs(e,_,v,w)}}vS(),d=Le;break}catch(O){tg(e,O)}while(!0);return n&&e.shellSuspendCounter++,_n=Li=null,pe=r,D.H=u,D.A=c,ae===null&&(Ne=null,ue=0,lr()),d}function vS(){for(;ae!==null;)ag(ae)}function ES(e,n){var s=pe;pe|=2;var r=ig(),u=sg();Ne!==e||ue!==n?(Hr=null,zr=Ct()+500,Us(e,n)):xs=ga(e,n);e:do try{if(ve!==0&&ae!==null){n=ae;var c=It;t:switch(ve){case 1:ve=0,It=null,zs(e,n,c,1);break;case 2:case 9:if(pm(c)){ve=0,It=null,lg(n);break}n=function(){ve!==2&&ve!==9||Ne!==e||(ve=7),on(e)},c.then(n,n);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:pm(c)?(ve=0,It=null,lg(n)):(ve=0,It=null,zs(e,n,c,7));break;case 5:var d=null;switch(ae.tag){case 26:d=ae.memoizedState;case 5:case 27:var _=ae;if(d?Yg(d):_.stateNode.complete){ve=0,It=null;var v=_.sibling;if(v!==null)ae=v;else{var w=_.return;w!==null?(ae=w,qr(w)):ae=null}break t}}ve=0,It=null,zs(e,n,c,5);break;case 6:ve=0,It=null,zs(e,n,c,6);break;case 8:Vc(),Le=6;break e;default:throw Error(l(462))}}SS();break}catch(O){tg(e,O)}while(!0);return _n=Li=null,D.H=r,D.A=u,pe=s,ae!==null?0:(Ne=null,ue=0,lr(),Le)}function SS(){for(;ae!==null&&!G0();)ag(ae)}function ag(e){var n=Op(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,n===null?qr(e):ae=n}function lg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Tp(s,n,n.pendingProps,n.type,void 0,ue);break;case 11:n=Tp(s,n,n.pendingProps,n.type.render,n.ref,ue);break;case 5:sc(n);default:Ip(s,n),n=ae=sm(n,Nn),n=Op(s,n,Nn)}e.memoizedProps=e.pendingProps,n===null?qr(e):ae=n}function zs(e,n,s,r){_n=Li=null,sc(n),ws=null,xa=0;var u=n.return;try{if(uS(e,u,n,s,ue)){Le=1,Rr(e,zt(s,e.current)),ae=null;return}}catch(c){if(u!==null)throw ae=u,c;Le=1,Rr(e,zt(s,e.current)),ae=null;return}n.flags&32768?(fe||r===1?e=!0:xs||(ue&536870912)!==0?e=!1:(Jn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ot.current,r!==null&&r.tag===13&&(r.flags|=16384))),rg(n,e)):qr(n)}function qr(e){var n=e;do{if((n.flags&32768)!==0){rg(n,Jn);return}e=n.return;var s=hS(n.alternate,n,Nn);if(s!==null){ae=s;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);Le===0&&(Le=5)}function rg(e,n){do{var s=dS(e.alternate,e);if(s!==null){s.flags&=32767,ae=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ae=e;return}ae=e=s}while(e!==null);Le=6,ae=null}function og(e,n,s,r,u,c,d,_,v){e.cancelPendingCommit=null;do Vr();while(Fe!==0);if((pe&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(c=n.lanes|n.childLanes,c|=Iu,eE(e,s,c,d,_,v),e===Ne&&(ae=Ne=null,ue=0),Ls=n,ti=e,Rn=s,Bc=c,jc=u,Wp=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AS(Gl,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null,u=H.p,H.p=2,d=pe,pe|=4;try{mS(e,n,s)}finally{pe=d,H.p=u,D.T=r}}Fe=1,ug(),cg(),fg()}}function ug(){if(Fe===1){Fe=0;var e=ti,n=Ls,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var r=H.p;H.p=2;var u=pe;pe|=4;try{Pp(n,e);var c=tf,d=Xd(e.containerInfo),_=c.focusedElem,v=c.selectionRange;if(d!==_&&_&&_.ownerDocument&&Kd(_.ownerDocument.documentElement,_)){if(v!==null&&wu(_)){var w=v.start,O=v.end;if(O===void 0&&(O=w),"selectionStart"in _)_.selectionStart=w,_.selectionEnd=Math.min(O,_.value.length);else{var M=_.ownerDocument||document,N=M&&M.defaultView||window;if(N.getSelection){var R=N.getSelection(),j=_.textContent.length,Y=Math.min(v.start,j),Ce=v.end===void 0?Y:Math.min(v.end,j);!R.extend&&Y>Ce&&(d=Ce,Ce=Y,Y=d);var C=Qd(_,Y),b=Qd(_,Ce);if(C&&b&&(R.rangeCount!==1||R.anchorNode!==C.node||R.anchorOffset!==C.offset||R.focusNode!==b.node||R.focusOffset!==b.offset)){var A=M.createRange();A.setStart(C.node,C.offset),R.removeAllRanges(),Y>Ce?(R.addRange(A),R.extend(b.node,b.offset)):(A.setEnd(b.node,b.offset),R.addRange(A))}}}}for(M=[],R=_;R=R.parentNode;)R.nodeType===1&&M.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<M.length;_++){var I=M[_];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}eo=!!ef,tf=ef=null}finally{pe=u,H.p=r,D.T=s}}e.current=n,Fe=2}}function cg(){if(Fe===2){Fe=0;var e=ti,n=Ls,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var r=H.p;H.p=2;var u=pe;pe|=4;try{Hp(e,n.alternate,n)}finally{pe=u,H.p=r,D.T=s}}Fe=3}}function fg(){if(Fe===4||Fe===3){Fe=0,Y0();var e=ti,n=Ls,s=Rn,r=Wp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Fe=5:(Fe=0,Ls=ti=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ei=null),ru(s),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(pa,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var c=e.onRecoverableError,d=0;d<r.length;d++){var _=r[d];c(_.value,{componentStack:_.stack})}}finally{D.T=n,H.p=u}}(Rn&3)!==0&&Vr(),on(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===qc?Za++:(Za=0,qc=e):Za=0,Wa(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ia(n)))}function Vr(){return ug(),cg(),fg(),dg()}function dg(){if(Fe!==5)return!1;var e=ti,n=Bc;Bc=0;var s=ru(Rn),r=D.T,u=H.p;try{H.p=32>s?32:s,D.T=null,s=jc,jc=null;var c=ti,d=Rn;if(Fe=0,Ls=ti=null,Rn=0,(pe&6)!==0)throw Error(l(331));var _=pe;if(pe|=4,Kp(c.current),Yp(c,c.current,d,s),pe=_,Wa(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(pa,c)}catch{}return!0}finally{H.p=u,D.T=r,hg(e,n)}}function mg(e,n,s){n=zt(s,n),n=vc(e.stateNode,n,2),e=Kn(e,n,2),e!==null&&(_a(e,2),on(e))}function Ee(e,n,s){if(e.tag===3)mg(e,e,s);else for(;n!==null;){if(n.tag===3){mg(n,e,s);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ei===null||!ei.has(r))){e=zt(s,e),s=pp(2),r=Kn(n,s,2),r!==null&&(gp(s,r,n,e),_a(r,2),on(r));break}}n=n.return}}function Gc(e,n,s){var r=e.pingCache;if(r===null){r=e.pingCache=new _S;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(s)||(Uc=!0,u.add(s),e=bS.bind(null,e,n,s),n.then(e,e))}function bS(e,n,s){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ne===e&&(ue&s)===s&&(Le===4||Le===3&&(ue&62914560)===ue&&300>Ct()-Ur?(pe&2)===0&&Us(e,0):zc|=s,ks===ue&&(ks=0)),on(e)}function pg(e,n){n===0&&(n=ud()),e=Mi(e,n),e!==null&&(_a(e,n),on(e))}function TS(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),pg(e,s)}function CS(e,n){var s=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(n),pg(e,s)}function AS(e,n){return iu(e,n)}var Pr=null,Hs=null,Yc=!1,Gr=!1,Fc=!1,ii=0;function on(e){e!==Hs&&e.next===null&&(Hs===null?Pr=Hs=e:Hs=Hs.next=e),Gr=!0,Yc||(Yc=!0,NS())}function Wa(e,n){if(!Fc&&Gr){Fc=!0;do for(var s=!1,r=Pr;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var d=r.suspendedLanes,_=r.pingedLanes;c=(1<<31-wt(42|e)+1)-1,c&=u&~(d&~_),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(s=!0,vg(r,c))}else c=ue,c=Kl(r,r===Ne?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ga(r,c)||(s=!0,vg(r,c));r=r.next}while(s);Fc=!1}}function wS(){gg()}function gg(){Gr=Yc=!1;var e=0;ii!==0&&zS()&&(e=ii);for(var n=Ct(),s=null,r=Pr;r!==null;){var u=r.next,c=_g(r,n);c===0?(r.next=null,s===null?Pr=u:s.next=u,u===null&&(Hs=s)):(s=r,(e!==0||(c&3)!==0)&&(Gr=!0)),r=u}Fe!==0&&Fe!==5||Wa(e),ii!==0&&(ii=0)}function _g(e,n){for(var s=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-wt(c),_=1<<d,v=u[d];v===-1?((_&s)===0||(_&r)!==0)&&(u[d]=$0(_,n)):v<=n&&(e.expiredLanes|=_),c&=~_}if(n=Ne,s=ue,s=Kl(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,s===0||e===n&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&su(r),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ga(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(r!==null&&su(r),ru(s)){case 2:case 8:s=rd;break;case 32:s=Gl;break;case 268435456:s=od;break;default:s=Gl}return r=yg.bind(null,e),s=iu(s,r),e.callbackPriority=n,e.callbackNode=s,n}return r!==null&&r!==null&&su(r),e.callbackPriority=2,e.callbackNode=null,2}function yg(e,n){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Vr()&&e.callbackNode!==s)return null;var r=ue;return r=Kl(e,e===Ne?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:($p(e,r,n),_g(e,Ct()),e.callbackNode!=null&&e.callbackNode===s?yg.bind(null,e):null)}function vg(e,n){if(Vr())return null;$p(e,n,!0)}function NS(){BS(function(){(pe&6)!==0?iu(ld,wS):gg()})}function Qc(){if(ii===0){var e=Ts;e===0&&(e=Yl,Yl<<=1,(Yl&261888)===0&&(Yl=256)),ii=e}return ii}function Eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function Sg(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function RS(e,n,s,r,u){if(n==="submit"&&s&&s.stateNode===u){var c=Eg((u[dt]||null).action),d=r.submitter;d&&(n=(n=d[dt]||null)?Eg(n.formAction):d.getAttribute("formAction"),n!==null&&(c=n,d=null));var _=new nr("action","action",null,r,u);e.push({event:_,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ii!==0){var v=d?Sg(u,d):new FormData(u);dc(s,{pending:!0,data:v,method:u.method,action:c},null,v)}}else typeof c=="function"&&(_.preventDefault(),v=d?Sg(u,d):new FormData(u),dc(s,{pending:!0,data:v,method:u.method,action:c},c,v))},currentTarget:u}]})}}for(var Kc=0;Kc<Du.length;Kc++){var Xc=Du[Kc],OS=Xc.toLowerCase(),DS=Xc[0].toUpperCase()+Xc.slice(1);Ft(OS,"on"+DS)}Ft(Jd,"onAnimationEnd"),Ft($d,"onAnimationIteration"),Ft(em,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(FE,"onTransitionRun"),Ft(QE,"onTransitionStart"),Ft(KE,"onTransitionCancel"),Ft(tm,"onTransitionEnd"),us("onMouseEnter",["mouseout","mouseover"]),us("onMouseLeave",["mouseout","mouseover"]),us("onPointerEnter",["pointerout","pointerover"]),us("onPointerLeave",["pointerout","pointerover"]),Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));function bg(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],u=r.event;r=r.listeners;e:{var c=void 0;if(n)for(var d=r.length-1;0<=d;d--){var _=r[d],v=_.instance,w=_.currentTarget;if(_=_.listener,v!==c&&u.isPropagationStopped())break e;c=_,u.currentTarget=w;try{c(u)}catch(O){ar(O)}u.currentTarget=null,c=v}else for(d=0;d<r.length;d++){if(_=r[d],v=_.instance,w=_.currentTarget,_=_.listener,v!==c&&u.isPropagationStopped())break e;c=_,u.currentTarget=w;try{c(u)}catch(O){ar(O)}u.currentTarget=null,c=v}}}}function le(e,n){var s=n[ou];s===void 0&&(s=n[ou]=new Set);var r=e+"__bubble";s.has(r)||(Tg(n,e,2,!1),s.add(r))}function Zc(e,n,s){var r=0;n&&(r|=4),Tg(s,e,r,n)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Wc(e){if(!e[Yr]){e[Yr]=!0,gd.forEach(function(s){s!=="selectionchange"&&(IS.has(s)||Zc(s,!1,e),Zc(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yr]||(n[Yr]=!0,Zc("selectionchange",!1,n))}}function Tg(e,n,s,r){switch(Jg(n)){case 2:var u=ab;break;case 8:u=lb;break;default:u=df}s=u.bind(null,n,s,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function Jc(e,n,s,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var _=r.stateNode.containerInfo;if(_===u)break;if(d===4)for(d=r.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;_!==null;){if(d=ls(_),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){r=c=d;continue e}_=_.parentNode}}r=r.return}Rd(function(){var w=c,O=pu(s),M=[];e:{var N=nm.get(e);if(N!==void 0){var R=nr,j=e;switch(e){case"keypress":if(er(s)===0)break e;case"keydown":case"keyup":R=CE;break;case"focusin":j="focus",R=Su;break;case"focusout":j="blur",R=Su;break;case"beforeblur":case"afterblur":R=Su;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=hE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=NE;break;case Jd:case $d:case em:R=pE;break;case tm:R=OE;break;case"scroll":case"scrollend":R=cE;break;case"wheel":R=IE;break;case"copy":case"cut":case"paste":R=_E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=xd;break;case"toggle":case"beforetoggle":R=xE}var Y=(n&4)!==0,Ce=!Y&&(e==="scroll"||e==="scrollend"),C=Y?N!==null?N+"Capture":null:N;Y=[];for(var b=w,A;b!==null;){var I=b;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||C===null||(I=Ea(b,C),I!=null&&Y.push($a(b,I,A))),Ce)break;b=b.return}0<Y.length&&(N=new R(N,j,null,s,O),M.push({event:N,listeners:Y}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&s!==mu&&(j=s.relatedTarget||s.fromElement)&&(ls(j)||j[as]))break e;if((R||N)&&(N=O.window===O?O:(N=O.ownerDocument)?N.defaultView||N.parentWindow:window,R?(j=s.relatedTarget||s.toElement,R=w,j=j?ls(j):null,j!==null&&(Ce=f(j),Y=j.tag,j!==Ce||Y!==5&&Y!==27&&Y!==6)&&(j=null)):(R=null,j=w),R!==j)){if(Y=Id,I="onMouseLeave",C="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Y=xd,I="onPointerLeave",C="onPointerEnter",b="pointer"),Ce=R==null?N:va(R),A=j==null?N:va(j),N=new Y(I,b+"leave",R,s,O),N.target=Ce,N.relatedTarget=A,I=null,ls(O)===w&&(Y=new Y(C,b+"enter",j,s,O),Y.target=A,Y.relatedTarget=Ce,I=Y),Ce=I,R&&j)t:{for(Y=MS,C=R,b=j,A=0,I=C;I;I=Y(I))A++;I=0;for(var P=b;P;P=Y(P))I++;for(;0<A-I;)C=Y(C),A--;for(;0<I-A;)b=Y(b),I--;for(;A--;){if(C===b||b!==null&&C===b.alternate){Y=C;break t}C=Y(C),b=Y(b)}Y=null}else Y=null;R!==null&&Cg(M,N,R,Y,!1),j!==null&&Ce!==null&&Cg(M,Ce,j,Y,!0)}}e:{if(N=w?va(w):window,R=N.nodeName&&N.nodeName.toLowerCase(),R==="select"||R==="input"&&N.type==="file")var de=qd;else if(Bd(N))if(Vd)de=PE;else{de=qE;var V=jE}else R=N.nodeName,!R||R.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?w&&du(w.elementType)&&(de=qd):de=VE;if(de&&(de=de(e,w))){jd(M,de,s,O);break e}V&&V(e,N,w),e==="focusout"&&w&&N.type==="number"&&w.memoizedProps.value!=null&&hu(N,"number",N.value)}switch(V=w?va(w):window,e){case"focusin":(Bd(V)||V.contentEditable==="true")&&(ps=V,Nu=w,Ra=null);break;case"focusout":Ra=Nu=ps=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Zd(M,s,O);break;case"selectionchange":if(YE)break;case"keydown":case"keyup":Zd(M,s,O)}var ee;if(Tu)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ms?zd(e,s)&&(ce="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ce="onCompositionStart");ce&&(kd&&s.locale!=="ko"&&(ms||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ms&&(ee=Od()):(qn=O,yu="value"in qn?qn.value:qn.textContent,ms=!0)),V=Fr(w,ce),0<V.length&&(ce=new Md(ce,e,null,s,O),M.push({event:ce,listeners:V}),ee?ce.data=ee:(ee=Hd(s),ee!==null&&(ce.data=ee)))),(ee=LE?UE(e,s):zE(e,s))&&(ce=Fr(w,"onBeforeInput"),0<ce.length&&(V=new Md("onBeforeInput","beforeinput",null,s,O),M.push({event:V,listeners:ce}),V.data=ee)),RS(M,e,w,s,O)}bg(M,n)})}function $a(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Fr(e,n){for(var s=n+"Capture",r=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=Ea(e,s),u!=null&&r.unshift($a(e,u,c)),u=Ea(e,n),u!=null&&r.push($a(e,u,c))),e.tag===3)return r;e=e.return}return[]}function MS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,n,s,r,u){for(var c=n._reactName,d=[];s!==null&&s!==r;){var _=s,v=_.alternate,w=_.stateNode;if(_=_.tag,v!==null&&v===r)break;_!==5&&_!==26&&_!==27||w===null||(v=w,u?(w=Ea(s,c),w!=null&&d.unshift($a(s,w,v))):u||(w=Ea(s,c),w!=null&&d.push($a(s,w,v)))),s=s.return}d.length!==0&&e.push({event:n,listeners:d})}var xS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function Ag(e){return(typeof e=="string"?e:""+e).replace(xS,`
`).replace(kS,"")}function wg(e,n){return n=Ag(n),Ag(e)===n}function Te(e,n,s,r,u,c){switch(s){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||fs(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&fs(e,""+r);break;case"className":Zl(e,"class",r);break;case"tabIndex":Zl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(e,s,r);break;case"style":wd(e,r,c);break;case"data":if(n!=="object"){Zl(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=Jl(""+r),e.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(s==="formAction"?(n!=="input"&&Te(e,n,"name",u.name,u,null),Te(e,n,"formEncType",u.formEncType,u,null),Te(e,n,"formMethod",u.formMethod,u,null),Te(e,n,"formTarget",u.formTarget,u,null)):(Te(e,n,"encType",u.encType,u,null),Te(e,n,"method",u.method,u,null),Te(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=Jl(""+r),e.setAttribute(s,r);break;case"onClick":r!=null&&(e.onclick=dn);break;case"onScroll":r!=null&&le("scroll",e);break;case"onScrollEnd":r!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}s=Jl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""+r):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":r===!0?e.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,r):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(s,r):e.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(s):e.setAttribute(s,r);break;case"popover":le("beforetoggle",e),le("toggle",e),Xl(e,"popover",r);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=oE.get(s)||s,Xl(e,s,r))}}function $c(e,n,s,r,u,c){switch(s){case"style":wd(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"children":typeof r=="string"?fs(e,r):(typeof r=="number"||typeof r=="bigint")&&fs(e,""+r);break;case"onScroll":r!=null&&le("scroll",e);break;case"onScrollEnd":r!=null&&le("scrollend",e);break;case"onClick":r!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_d.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),c=e[dt]||null,c=c!=null?c[s]:null,typeof c=="function"&&e.removeEventListener(n,c,u),typeof r=="function")){typeof c!="function"&&c!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,r,u);break e}s in e?e[s]=r:r===!0?e.setAttribute(s,""):Xl(e,s,r)}}}function st(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var r=!1,u=!1,c;for(c in s)if(s.hasOwnProperty(c)){var d=s[c];if(d!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Te(e,n,c,d,s,null)}}u&&Te(e,n,"srcSet",s.srcSet,s,null),r&&Te(e,n,"src",s.src,s,null);return;case"input":le("invalid",e);var _=c=d=u=null,v=null,w=null;for(r in s)if(s.hasOwnProperty(r)){var O=s[r];if(O!=null)switch(r){case"name":u=O;break;case"type":d=O;break;case"checked":v=O;break;case"defaultChecked":w=O;break;case"value":c=O;break;case"defaultValue":_=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,n));break;default:Te(e,n,r,O,s,null)}}bd(e,c,_,v,w,d,u,!1);return;case"select":le("invalid",e),r=d=c=null;for(u in s)if(s.hasOwnProperty(u)&&(_=s[u],_!=null))switch(u){case"value":c=_;break;case"defaultValue":d=_;break;case"multiple":r=_;default:Te(e,n,u,_,s,null)}n=c,s=d,e.multiple=!!r,n!=null?cs(e,!!r,n,!1):s!=null&&cs(e,!!r,s,!0);return;case"textarea":le("invalid",e),c=u=r=null;for(d in s)if(s.hasOwnProperty(d)&&(_=s[d],_!=null))switch(d){case"value":r=_;break;case"defaultValue":u=_;break;case"children":c=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(91));break;default:Te(e,n,d,_,s,null)}Cd(e,r,u,c);return;case"option":for(v in s)if(s.hasOwnProperty(v)&&(r=s[v],r!=null))switch(v){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Te(e,n,v,r,s,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(r=0;r<Ja.length;r++)le(Ja[r],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in s)if(s.hasOwnProperty(w)&&(r=s[w],r!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Te(e,n,w,r,s,null)}return;default:if(du(n)){for(O in s)s.hasOwnProperty(O)&&(r=s[O],r!==void 0&&$c(e,n,O,r,s,void 0));return}}for(_ in s)s.hasOwnProperty(_)&&(r=s[_],r!=null&&Te(e,n,_,r,s,null))}function LS(e,n,s,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,d=null,_=null,v=null,w=null,O=null;for(R in s){var M=s[R];if(s.hasOwnProperty(R)&&M!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=M;default:r.hasOwnProperty(R)||Te(e,n,R,null,r,M)}}for(var N in r){var R=r[N];if(M=s[N],r.hasOwnProperty(N)&&(R!=null||M!=null))switch(N){case"type":c=R;break;case"name":u=R;break;case"checked":w=R;break;case"defaultChecked":O=R;break;case"value":d=R;break;case"defaultValue":_=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,n));break;default:R!==M&&Te(e,n,N,R,r,M)}}fu(e,d,_,v,w,O,c,u);return;case"select":R=d=_=N=null;for(c in s)if(v=s[c],s.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":R=v;default:r.hasOwnProperty(c)||Te(e,n,c,null,r,v)}for(u in r)if(c=r[u],v=s[u],r.hasOwnProperty(u)&&(c!=null||v!=null))switch(u){case"value":N=c;break;case"defaultValue":_=c;break;case"multiple":d=c;default:c!==v&&Te(e,n,u,c,r,v)}n=_,s=d,r=R,N!=null?cs(e,!!s,N,!1):!!r!=!!s&&(n!=null?cs(e,!!s,n,!0):cs(e,!!s,s?[]:"",!1));return;case"textarea":R=N=null;for(_ in s)if(u=s[_],s.hasOwnProperty(_)&&u!=null&&!r.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Te(e,n,_,null,r,u)}for(d in r)if(u=r[d],c=s[d],r.hasOwnProperty(d)&&(u!=null||c!=null))switch(d){case"value":N=u;break;case"defaultValue":R=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==c&&Te(e,n,d,u,r,c)}Td(e,N,R);return;case"option":for(var j in s)if(N=s[j],s.hasOwnProperty(j)&&N!=null&&!r.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:Te(e,n,j,null,r,N)}for(v in r)if(N=r[v],R=s[v],r.hasOwnProperty(v)&&N!==R&&(N!=null||R!=null))switch(v){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Te(e,n,v,N,r,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in s)N=s[Y],s.hasOwnProperty(Y)&&N!=null&&!r.hasOwnProperty(Y)&&Te(e,n,Y,null,r,N);for(w in r)if(N=r[w],R=s[w],r.hasOwnProperty(w)&&N!==R&&(N!=null||R!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,n));break;default:Te(e,n,w,N,r,R)}return;default:if(du(n)){for(var Ce in s)N=s[Ce],s.hasOwnProperty(Ce)&&N!==void 0&&!r.hasOwnProperty(Ce)&&$c(e,n,Ce,void 0,r,N);for(O in r)N=r[O],R=s[O],!r.hasOwnProperty(O)||N===R||N===void 0&&R===void 0||$c(e,n,O,N,r,R);return}}for(var C in s)N=s[C],s.hasOwnProperty(C)&&N!=null&&!r.hasOwnProperty(C)&&Te(e,n,C,null,r,N);for(M in r)N=r[M],R=s[M],!r.hasOwnProperty(M)||N===R||N==null&&R==null||Te(e,n,M,N,r,R)}function Ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),r=0;r<s.length;r++){var u=s[r],c=u.transferSize,d=u.initiatorType,_=u.duration;if(c&&_&&Ng(d)){for(d=0,_=u.responseEnd,r+=1;r<s.length;r++){var v=s[r],w=v.startTime;if(w>_)break;var O=v.transferSize,M=v.initiatorType;O&&Ng(M)&&(v=v.responseEnd,d+=O*(v<_?1:(_-w)/(v-w)))}if(--r,n+=8*(c+d)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ef=null,tf=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sf=null;function zS(){var e=window.event;return e&&e.type==="popstate"?e===sf?!1:(sf=e,!0):(sf=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(e){return Ig.resolve(null).then(e).catch(jS)}:Dg;function jS(e){setTimeout(function(){throw e})}function si(e){return e==="head"}function Mg(e,n){var s=n,r=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(r===0){e.removeChild(u),Vs(n);return}r--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")r++;else if(s==="html")el(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,el(s);for(var c=s.firstChild;c;){var d=c.nextSibling,_=c.nodeName;c[ya]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&c.rel.toLowerCase()==="stylesheet"||s.removeChild(c),c=d}}else s==="body"&&el(e.ownerDocument.body);s=u}while(s);Vs(n)}function xg(e,n){var s=e;e=0;do{var r=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=r}while(s)}function af(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":af(s),uu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function qS(e,n,s,r){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function VS(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Vt(e.nextSibling),e===null))return null;return e}function kg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function lf(e){return e.data==="$?"||e.data==="$~"}function rf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PS(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var r=function(){n(),s.removeEventListener("DOMContentLoaded",r)};s.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Vt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var of=null;function Lg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return Vt(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function zg(e,n,s){switch(n=Qr(s),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function el(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);uu(e)}var Pt=new Map,Hg=new Set;function Kr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=H.d;H.d={f:GS,r:YS,D:FS,C:QS,L:KS,m:XS,X:WS,S:ZS,M:JS};function GS(){var e=On.f(),n=Br();return e||n}function YS(e){var n=rs(e);n!==null&&n.tag===5&&n.type==="form"?tp(n):On.r(e)}var Bs=typeof document>"u"?null:document;function Bg(e,n,s){var r=Bs;if(r&&typeof n=="string"&&n){var u=Lt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Hg.has(u)||(Hg.add(u),e={rel:e,crossOrigin:s,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),st(n,"link",e),Ke(n),r.head.appendChild(n)))}}function FS(e){On.D(e),Bg("dns-prefetch",e,null)}function QS(e,n){On.C(e,n),Bg("preconnect",e,n)}function KS(e,n,s){On.L(e,n,s);var r=Bs;if(r&&e&&n){var u='link[rel="preload"][as="'+Lt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Lt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Lt(s.imageSizes)+'"]')):u+='[href="'+Lt(e)+'"]';var c=u;switch(n){case"style":c=js(e);break;case"script":c=qs(e)}Pt.has(c)||(e=y({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Pt.set(c,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(tl(c))||n==="script"&&r.querySelector(nl(c))||(n=r.createElement("link"),st(n,"link",e),Ke(n),r.head.appendChild(n)))}}function XS(e,n){On.m(e,n);var s=Bs;if(s&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Lt(r)+'"][href="'+Lt(e)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=qs(e)}if(!Pt.has(c)&&(e=y({rel:"modulepreload",href:e},n),Pt.set(c,e),s.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(nl(c)))return}r=s.createElement("link"),st(r,"link",e),Ke(r),s.head.appendChild(r)}}}function ZS(e,n,s){On.S(e,n,s);var r=Bs;if(r&&e){var u=os(r).hoistableStyles,c=js(e);n=n||"default";var d=u.get(c);if(!d){var _={loading:0,preload:null};if(d=r.querySelector(tl(c)))_.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Pt.get(c))&&uf(e,s);var v=d=r.createElement("link");Ke(v),st(v,"link",e),v._p=new Promise(function(w,O){v.onload=w,v.onerror=O}),v.addEventListener("load",function(){_.loading|=1}),v.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Xr(d,n,r)}d={type:"stylesheet",instance:d,count:1,state:_},u.set(c,d)}}}function WS(e,n){On.X(e,n);var s=Bs;if(s&&e){var r=os(s).hoistableScripts,u=qs(e),c=r.get(u);c||(c=s.querySelector(nl(u)),c||(e=y({src:e,async:!0},n),(n=Pt.get(u))&&cf(e,n),c=s.createElement("script"),Ke(c),st(c,"link",e),s.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function JS(e,n){On.M(e,n);var s=Bs;if(s&&e){var r=os(s).hoistableScripts,u=qs(e),c=r.get(u);c||(c=s.querySelector(nl(u)),c||(e=y({src:e,async:!0,type:"module"},n),(n=Pt.get(u))&&cf(e,n),c=s.createElement("script"),Ke(c),st(c,"link",e),s.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function jg(e,n,s,r){var u=(u=se.current)?Kr(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=js(s.href),s=os(u).hoistableStyles,r=s.get(n),r||(r={type:"style",instance:null,count:0,state:null},s.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=js(s.href);var c=os(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(tl(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Pt.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pt.set(e,s),c||$S(u,e,s,d.state))),n&&r===null)throw Error(l(528,""));return d}if(n&&r!==null)throw Error(l(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qs(s),s=os(u).hoistableScripts,r=s.get(n),r||(r={type:"script",instance:null,count:0,state:null},s.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function js(e){return'href="'+Lt(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function qg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,n,s,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),st(n,"link",s),Ke(n),e.head.appendChild(n))}function qs(e){return'[src="'+Lt(e)+'"]'}function nl(e){return"script[async]"+e}function Vg(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Lt(s.href)+'"]');if(r)return n.instance=r,Ke(r),r;var u=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ke(r),st(r,"style",u),Xr(r,s.precedence,e),n.instance=r;case"stylesheet":u=js(s.href);var c=e.querySelector(tl(u));if(c)return n.state.loading|=4,n.instance=c,Ke(c),c;r=qg(s),(u=Pt.get(u))&&uf(r,u),c=(e.ownerDocument||e).createElement("link"),Ke(c);var d=c;return d._p=new Promise(function(_,v){d.onload=_,d.onerror=v}),st(c,"link",r),n.state.loading|=4,Xr(c,s.precedence,e),n.instance=c;case"script":return c=qs(s.src),(u=e.querySelector(nl(c)))?(n.instance=u,Ke(u),u):(r=s,(u=Pt.get(c))&&(r=y({},s),cf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ke(u),st(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xr(r,s.precedence,e));return n.instance}function Xr(e,n,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,d=0;d<r.length;d++){var _=r[d];if(_.dataset.precedence===n)c=_;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zr=null;function Pg(e,n,s){if(Zr===null){var r=new Map,u=Zr=new Map;u.set(s,r)}else u=Zr,r=u.get(s),r||(r=new Map,u.set(s,r));if(r.has(e))return r;for(r.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var c=s[u];if(!(c[ya]||c[et]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(n)||"";d=e+d;var _=r.get(d);_?_.push(c):r.set(d,[c])}}return r}function Gg(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function eb(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tb(e,n,s,r){if(s.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=js(r.href),c=n.querySelector(tl(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wr.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=c,Ke(c);return}c=n.ownerDocument||n,r=qg(r),(u=Pt.get(u))&&uf(r,u),c=c.createElement("link"),Ke(c);var d=c;d._p=new Promise(function(_,v){d.onload=_,d.onerror=v}),st(c,"link",r),s.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Wr.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var ff=0;function nb(e,n){return e.stylesheets&&e.count===0&&$r(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var r=setTimeout(function(){if(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&ff===0&&(ff=62500*US());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ff?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$r(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jr=null;function $r(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jr=new Map,n.forEach(ib,e),Jr=null,Wr.call(e))}function ib(e,n){if(!(n.state.loading&4)){var s=Jr.get(e);if(s)var r=s.get(null);else{s=new Map,Jr.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var d=u[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(s.set(d.dataset.precedence,d),r=d)}r&&s.set(null,r)}u=n.instance,d=u.getAttribute("data-precedence"),c=s.get(d)||r,c===r&&s.set(null,u),s.set(d,u),this.count++,r=Wr.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var il={$$typeof:$,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function sb(e,n,s,r,u,c,d,_,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Fg(e,n,s,r,u,c,d,_,v,w,O,M){return e=new sb(e,n,s,d,v,w,O,M,_),n=1,c===!0&&(n|=24),c=Rt(3,null,null,n),e.current=c,c.stateNode=e,n=Pu(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:s,cache:n},Qu(c),e}function Qg(e){return e?(e=ys,e):ys}function Kg(e,n,s,r,u,c){u=Qg(u),r.context===null?r.context=u:r.pendingContext=u,r=Qn(n),r.payload={element:s},c=c===void 0?null:c,c!==null&&(r.callback=c),s=Kn(e,r,n),s!==null&&(vt(s,e,n),La(s,e,n))}function Xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function hf(e,n){Xg(e,n),(e=e.alternate)&&Xg(e,n)}function Zg(e){if(e.tag===13||e.tag===31){var n=Mi(e,67108864);n!==null&&vt(n,e,67108864),hf(e,67108864)}}function Wg(e){if(e.tag===13||e.tag===31){var n=xt();n=lu(n);var s=Mi(e,n);s!==null&&vt(s,e,n),hf(e,n)}}var eo=!0;function ab(e,n,s,r){var u=D.T;D.T=null;var c=H.p;try{H.p=2,df(e,n,s,r)}finally{H.p=c,D.T=u}}function lb(e,n,s,r){var u=D.T;D.T=null;var c=H.p;try{H.p=8,df(e,n,s,r)}finally{H.p=c,D.T=u}}function df(e,n,s,r){if(eo){var u=mf(r);if(u===null)Jc(e,n,r,to,s),$g(e,r);else if(ob(u,e,n,s,r))r.stopPropagation();else if($g(e,r),n&4&&-1<rb.indexOf(e)){for(;u!==null;){var c=rs(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=Ni(c.pendingLanes);if(d!==0){var _=c;for(_.pendingLanes|=2,_.entangledLanes|=2;d;){var v=1<<31-wt(d);_.entanglements[1]|=v,d&=~v}on(c),(pe&6)===0&&(zr=Ct()+500,Wa(0))}}break;case 31:case 13:_=Mi(c,2),_!==null&&vt(_,c,2),Br(),hf(c,2)}if(c=mf(r),c===null&&Jc(e,n,r,to,s),c===u)break;u=c}u!==null&&r.stopPropagation()}else Jc(e,n,r,null,s)}}function mf(e){return e=pu(e),pf(e)}var to=null;function pf(e){if(to=null,e=ls(e),e!==null){var n=f(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=h(n),e!==null)return e;e=null}else if(s===31){if(e=m(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F0()){case ld:return 2;case rd:return 8;case Gl:case Q0:return 32;case od:return 268435456;default:return 32}default:return 32}}var gf=!1,ai=null,li=null,ri=null,sl=new Map,al=new Map,oi=[],rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function ll(e,n,s,r,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:s,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=rs(n),n!==null&&Zg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ob(e,n,s,r,u){switch(n){case"focusin":return ai=ll(ai,e,n,s,r,u),!0;case"dragenter":return li=ll(li,e,n,s,r,u),!0;case"mouseover":return ri=ll(ri,e,n,s,r,u),!0;case"pointerover":var c=u.pointerId;return sl.set(c,ll(sl.get(c)||null,e,n,s,r,u)),!0;case"gotpointercapture":return c=u.pointerId,al.set(c,ll(al.get(c)||null,e,n,s,r,u)),!0}return!1}function e_(e){var n=ls(e.target);if(n!==null){var s=f(n);if(s!==null){if(n=s.tag,n===13){if(n=h(s),n!==null){e.blockedOn=n,md(e.priority,function(){Wg(s)});return}}else if(n===31){if(n=m(s),n!==null){e.blockedOn=n,md(e.priority,function(){Wg(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=mf(e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);mu=r,s.target.dispatchEvent(r),mu=null}else return n=rs(s),n!==null&&Zg(n),e.blockedOn=s,!1;n.shift()}return!0}function t_(e,n,s){no(e)&&s.delete(n)}function ub(){gf=!1,ai!==null&&no(ai)&&(ai=null),li!==null&&no(li)&&(li=null),ri!==null&&no(ri)&&(ri=null),sl.forEach(t_),al.forEach(t_)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,gf||(gf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ub)))}var so=null;function n_(e){so!==e&&(so=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var s=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(pf(r||s)===null)continue;break}var c=rs(s);c!==null&&(e.splice(n,3),n-=3,dc(c,{pending:!0,data:u,method:s.method,action:r},r,u))}}))}function Vs(e){function n(v){return io(v,e)}ai!==null&&io(ai,e),li!==null&&io(li,e),ri!==null&&io(ri,e),sl.forEach(n),al.forEach(n);for(var s=0;s<oi.length;s++){var r=oi[s];r.blockedOn===e&&(r.blockedOn=null)}for(;0<oi.length&&(s=oi[0],s.blockedOn===null);)e_(s),s.blockedOn===null&&oi.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var u=s[r],c=s[r+1],d=u[dt]||null;if(typeof c=="function")d||n_(s);else if(d){var _=null;if(c&&c.hasAttribute("formAction")){if(u=c,d=c[dt]||null)_=d.formAction;else if(pf(u)!==null)continue}else _=d.action;typeof _=="function"?s[r+1]=_:(s.splice(r,3),r-=3),n_(s)}}}function i_(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return u=d})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(s,20)}function s(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _f(e){this._internalRoot=e}ao.prototype.render=_f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var s=n.current,r=xt();Kg(s,r,e,n,null,null)},ao.prototype.unmount=_f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kg(e.current,2,null,e,null,null),Br(),n[as]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var n=dd();e={blockedOn:null,target:e,priority:n};for(var s=0;s<oi.length&&n!==0&&n<oi[s].priority;s++);oi.splice(s,0,e),s===0&&e_(e)}};var s_=t.version;if(s_!=="19.2.0")throw Error(l(527,s_,"19.2.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var cb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{pa=lo.inject(cb),At=lo}catch{}}return ol.createRoot=function(e,n){if(!o(e))throw Error(l(299));var s=!1,r="",u=fp,c=hp,d=dp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Fg(e,1,!1,null,null,s,r,null,u,c,d,i_),e[as]=n.current,Wc(e),new _f(n)},ol.hydrateRoot=function(e,n,s){if(!o(e))throw Error(l(299));var r=!1,u="",c=fp,d=hp,_=dp,v=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(c=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError),s.formState!==void 0&&(v=s.formState)),n=Fg(e,1,!0,n,s??null,r,u,v,c,d,_,i_),n.context=Qg(null),s=n.current,r=xt(),r=lu(r),u=Qn(r),u.callback=null,Kn(s,u,r),s=r,n.current.lanes=s,_a(n,s),on(n),e[as]=n.current,Wc(e),new ao(n)},ol.version="19.2.0",ol}var m_;function Eb(){if(m_)return Ef.exports;m_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Ef.exports=vb(),Ef.exports}var Sb=Eb();/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tb=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,l)=>l?l.toUpperCase():i.toLowerCase()),p_=a=>{const t=Tb(a);return t.charAt(0).toUpperCase()+t.slice(1)},Oy=(...a)=>a.filter((t,i,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===i).join(" ").trim(),Cb=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ab={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=Ue.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:f,iconNode:h,...m},g)=>Ue.createElement("svg",{ref:g,...Ab,width:t,height:t,stroke:a,strokeWidth:l?Number(i)*24/Number(t):i,className:Oy("lucide",o),...!f&&!Cb(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,E])=>Ue.createElement(p,E)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=(a,t)=>{const i=Ue.forwardRef(({className:l,...o},f)=>Ue.createElement(wb,{ref:f,iconNode:t,className:Oy(`lucide-${bb(p_(a))}`,`lucide-${a}`,l),...o}));return i.displayName=p_(a),i};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Hf=sa("database",Nb);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Bf=sa("folder-open",Rb);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Db=sa("house",Ob);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],g_=sa("plus",Ib);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],xb=sa("save",Mb);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Dy=sa("trash-2",kb);function Lb({currentPage:a,onPageChange:t,onLogout:i}){return x.jsx("nav",{className:"bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 sticky top-0 z-50",children:x.jsx("div",{className:"max-w-7xl mx-auto px-8",children:x.jsxs("div",{className:"flex items-center justify-between h-16",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx(Hf,{className:"w-8 h-8 text-white"}),x.jsx("h1",{className:"text-xl font-bold text-white",children:"Credentials Manager"})]}),x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsxs("div",{className:"flex gap-2",children:[x.jsxs("button",{onClick:()=>t("home"),className:`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${a==="home"?"bg-white text-black":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,children:[x.jsx(Db,{className:"w-4 h-4"}),"Home"]}),x.jsxs("button",{onClick:()=>t("view"),className:`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${a==="view"?"bg-white text-black":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,children:[x.jsx(Hf,{className:"w-4 h-4"}),"View Data"]})]}),i&&x.jsx("button",{onClick:i,className:"ml-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all",children:"Logout"})]})]})})})}const Ub=()=>{};var __={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(a,t){if(!a)throw aa(t)},aa=function(a){return new Error("Firebase Database ("+Iy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=function(a){const t=[];let i=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&l+1<a.length&&(a.charCodeAt(l+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++l)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},zb=function(a){const t=[];let i=0,l=0;for(;i<a.length;){const o=a[i++];if(o<128)t[l++]=String.fromCharCode(o);else if(o>191&&o<224){const f=a[i++];t[l++]=String.fromCharCode((o&31)<<6|f&63)}else if(o>239&&o<365){const f=a[i++],h=a[i++],m=a[i++],g=((o&7)<<18|(f&63)<<12|(h&63)<<6|m&63)-65536;t[l++]=String.fromCharCode(55296+(g>>10)),t[l++]=String.fromCharCode(56320+(g&1023))}else{const f=a[i++],h=a[i++];t[l++]=String.fromCharCode((o&15)<<12|(f&63)<<6|h&63)}}return t.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,t){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let o=0;o<a.length;o+=3){const f=a[o],h=o+1<a.length,m=h?a[o+1]:0,g=o+2<a.length,p=g?a[o+2]:0,E=f>>2,y=(f&3)<<4|m>>4;let S=(m&15)<<2|p>>6,L=p&63;g||(L=64,h||(S=64)),l.push(i[E],i[y],i[S],i[L])}return l.join("")},encodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(a):this.encodeByteArray(My(a),t)},decodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(a):zb(this.decodeStringToByteArray(a,t))},decodeStringToByteArray(a,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let o=0;o<a.length;){const f=i[a.charAt(o++)],m=o<a.length?i[a.charAt(o)]:0;++o;const p=o<a.length?i[a.charAt(o)]:64;++o;const y=o<a.length?i[a.charAt(o)]:64;if(++o,f==null||m==null||p==null||y==null)throw new Hb;const S=f<<2|m>>4;if(l.push(S),p!==64){const L=m<<4&240|p>>2;if(l.push(L),y!==64){const z=p<<6&192|y;l.push(z)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class Hb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xy=function(a){const t=My(a);return ch.encodeByteArray(t,!0)},go=function(a){return xy(a).replace(/\./g,"")},_o=function(a){try{return ch.decodeString(a,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(a){return ky(void 0,a)}function ky(a,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!jb(i)||(a[i]=ky(a[i],t[i]));return a}function jb(a){return a!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=()=>qb().__FIREBASE_DEFAULTS__,Pb=()=>{if(typeof process>"u"||typeof __>"u")return;const a=__.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},Gb=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=a&&_o(a[1]);return t&&JSON.parse(t)},fh=()=>{try{return Ub()||Vb()||Pb()||Gb()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},Ly=a=>fh()?.emulatorHosts?.[a],Yb=a=>{const t=Ly(a);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const l=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),l]:[t.substring(0,i),l]},Uy=()=>fh()?.config,zy=a=>fh()?.[`_${a}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,l)=>{i?this.reject(i):this.resolve(l),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,l))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hy(a){return(await fetch(a,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(a,t){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},l=t||"demo-project",o=a.iat||0,f=a.sub||a.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${l}`,aud:l,iat:o,exp:o+3600,auth_time:o,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}},...a};return[go(JSON.stringify(i)),go(JSON.stringify(h)),""].join(".")}const pl={};function Qb(){const a={prod:[],emulator:[]};for(const t of Object.keys(pl))pl[t]?a.emulator.push(t):a.prod.push(t);return a}function Kb(a){let t=document.getElementById(a),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",a),i=!0),{created:i,element:t}}let y_=!1;function By(a,t){if(typeof window>"u"||typeof document>"u"||!la(window.location.host)||pl[a]===t||pl[a]||y_)return;pl[a]=t;function i(S){return`__firebase__banner__${S}`}const l="__firebase__banner",f=Qb().prod.length>0;function h(){const S=document.getElementById(l);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,L){S.setAttribute("width","24"),S.setAttribute("id",L),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function p(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{y_=!0,h()},S}function E(S,L){S.setAttribute("id",L),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function y(){const S=Kb(l),L=i("text"),z=document.getElementById(L)||document.createElement("span"),G=i("learnmore"),he=document.getElementById(G)||document.createElement("a"),ye=i("preprendIcon"),F=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const $=S.element;m($),E(he,G);const oe=p();g(F,ye),$.append(F,z,he,oe),document.body.appendChild($)}f?(z.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Xb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zb(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function jy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wb(){const a=ft();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function Jb(){return Iy.NODE_ADMIN===!0}function $b(){try{return typeof indexedDB=="object"}catch{return!1}}function eT(){return new Promise((a,t)=>{try{let i=!0;const l="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(l);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(l),a(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="FirebaseError";class bi extends Error{constructor(t,i,l){super(i),this.code=t,this.customData=l,this.name=tT,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kl.prototype.create)}}class kl{constructor(t,i,l){this.service=t,this.serviceName=i,this.errors=l}create(t,...i){const l=i[0]||{},o=`${this.service}/${t}`,f=this.errors[t],h=f?nT(f,l):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new bi(o,m,l)}}function nT(a,t){return a.replace(iT,(i,l)=>{const o=t[l];return o!=null?String(o):`<${l}?>`})}const iT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(a){return JSON.parse(a)}function Je(a){return JSON.stringify(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(a){let t={},i={},l={},o="";try{const f=a.split(".");t=Cl(_o(f[0])||""),i=Cl(_o(f[1])||""),o=f[2],l=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:l,signature:o}},sT=function(a){const t=qy(a),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},aT=function(a){const t=qy(a).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(a,t){return Object.prototype.hasOwnProperty.call(a,t)}function Js(a,t){if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}function jf(a){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t))return!1;return!0}function yo(a,t,i){const l={};for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&(l[o]=t.call(i,a[o],o,a));return l}function Xi(a,t){if(a===t)return!0;const i=Object.keys(a),l=Object.keys(t);for(const o of i){if(!l.includes(o))return!1;const f=a[o],h=t[o];if(v_(f)&&v_(h)){if(!Xi(f,h))return!1}else if(f!==h)return!1}for(const o of l)if(!i.includes(o))return!1;return!0}function v_(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(a){const t=[];for(const[i,l]of Object.entries(a))Array.isArray(l)?l.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(l));return t.length?"&"+t.join("&"):""}function dl(a){const t={};return a.replace(/^\?/,"").split("&").forEach(l=>{if(l){const[o,f]=l.split("=");t[decodeURIComponent(o)]=decodeURIComponent(f)}}),t}function ml(a){const t=a.indexOf("?");if(!t)return"";const i=a.indexOf("#",t);return a.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const l=this.W_;if(typeof t=="string")for(let y=0;y<16;y++)l[y]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let y=0;y<16;y++)l[y]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let y=16;y<80;y++){const S=l[y-3]^l[y-8]^l[y-14]^l[y-16];l[y]=(S<<1|S>>>31)&4294967295}let o=this.chain_[0],f=this.chain_[1],h=this.chain_[2],m=this.chain_[3],g=this.chain_[4],p,E;for(let y=0;y<80;y++){y<40?y<20?(p=m^f&(h^m),E=1518500249):(p=f^h^m,E=1859775393):y<60?(p=f&h|m&(f|h),E=2400959708):(p=f^h^m,E=3395469782);const S=(o<<5|o>>>27)+p+g+E+l[y]&4294967295;g=m,m=h,h=(f<<30|f>>>2)&4294967295,f=o,o=S}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+f&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const l=i-this.blockSize;let o=0;const f=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=l;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(f[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(f),h=0;break}}else for(;o<i;)if(f[h]=t[o],++h,++o,h===this.blockSize){this.compress_(f),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let l=0;for(let o=0;o<5;o++)for(let f=24;f>=0;f-=8)t[l]=this.chain_[o]>>f&255,++l;return t}}function rT(a,t){const i=new oT(a,t);return i.subscribe.bind(i)}class oT{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(l=>{this.error(l)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,l){let o;if(t===void 0&&i===void 0&&l===void 0)throw new Error("Missing Observer.");uT(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:l},o.next===void 0&&(o.next=Cf),o.error===void 0&&(o.error=Cf),o.complete===void 0&&(o.complete=Cf);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),f}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uT(a,t){if(typeof a!="object"||a===null)return!1;for(const i of t)if(i in a&&typeof a[i]=="function")return!0;return!1}function Cf(){}function dh(a,t){return`${a} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=function(a){const t=[];let i=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);if(o>=55296&&o<=56319){const f=o-55296;l++,U(l<a.length,"Surrogate pair missing trail surrogate.");const h=a.charCodeAt(l)-56320;o=65536+(f<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},jo=function(a){let t=0;for(let i=0;i<a.length;i++){const l=a.charCodeAt(i);l<128?t++:l<2048?t+=2:l>=55296&&l<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(a){return a&&a._delegate?a._delegate:a}class Zi{constructor(t,i,l){this.name=t,this.instanceFactory=i,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const l=new Bo;if(this.instancesDeferred.set(i,l),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&l.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),l=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(l)return null;throw o}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dT(t))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[i,l]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const f=this.getOrInitializeService({instanceIdentifier:o});l.resolve(f)}catch{}}}}clearInstance(t=Yi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yi){return this.instances.has(t)}getOptions(t=Yi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,l=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:l,options:i});for(const[f,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(f);l===m&&h.resolve(o)}return o}onInit(t,i){const l=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(l)??new Set;o.add(t),this.onInitCallbacks.set(l,o);const f=this.instances.get(l);return f&&t(f,l),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const l=this.onInitCallbacks.get(i);if(l)for(const o of l)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let l=this.instances.get(t);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:hT(t),options:i}),this.instances.set(t,l),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(l,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,l)}catch{}return l||null}normalizeInstanceIdentifier(t=Yi){return this.component?this.component.multipleInstances?t:Yi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hT(a){return a===Yi?void 0:a}function dT(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new fT(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ae||(Ae={}));const pT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},gT=Ae.INFO,_T={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},yT=(a,t,...i)=>{if(t<a.logLevel)return;const l=new Date().toISOString(),o=_T[t];if(o)console[o](`[${l}]  ${a.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mh{constructor(t){this.name=t,this._logLevel=gT,this._logHandler=yT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...t),this._logHandler(this,Ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...t),this._logHandler(this,Ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...t),this._logHandler(this,Ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...t),this._logHandler(this,Ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...t),this._logHandler(this,Ae.ERROR,...t)}}const vT=(a,t)=>t.some(i=>a instanceof i);let E_,S_;function ET(){return E_||(E_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ST(){return S_||(S_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,qf=new WeakMap,Py=new WeakMap,Af=new WeakMap,ph=new WeakMap;function bT(a){const t=new Promise((i,l)=>{const o=()=>{a.removeEventListener("success",f),a.removeEventListener("error",h)},f=()=>{i(pi(a.result)),o()},h=()=>{l(a.error),o()};a.addEventListener("success",f),a.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Vy.set(i,a)}).catch(()=>{}),ph.set(t,a),t}function TT(a){if(qf.has(a))return;const t=new Promise((i,l)=>{const o=()=>{a.removeEventListener("complete",f),a.removeEventListener("error",h),a.removeEventListener("abort",h)},f=()=>{i(),o()},h=()=>{l(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",f),a.addEventListener("error",h),a.addEventListener("abort",h)});qf.set(a,t)}let Vf={get(a,t,i){if(a instanceof IDBTransaction){if(t==="done")return qf.get(a);if(t==="objectStoreNames")return a.objectStoreNames||Py.get(a);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return pi(a[t])},set(a,t,i){return a[t]=i,!0},has(a,t){return a instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in a}};function CT(a){Vf=a(Vf)}function AT(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const l=a.call(wf(this),t,...i);return Py.set(l,t.sort?t.sort():[t]),pi(l)}:ST().includes(a)?function(...t){return a.apply(wf(this),t),pi(Vy.get(this))}:function(...t){return pi(a.apply(wf(this),t))}}function wT(a){return typeof a=="function"?AT(a):(a instanceof IDBTransaction&&TT(a),vT(a,ET())?new Proxy(a,Vf):a)}function pi(a){if(a instanceof IDBRequest)return bT(a);if(Af.has(a))return Af.get(a);const t=wT(a);return t!==a&&(Af.set(a,t),ph.set(t,a)),t}const wf=a=>ph.get(a);function NT(a,t,{blocked:i,upgrade:l,blocking:o,terminated:f}={}){const h=indexedDB.open(a,t),m=pi(h);return l&&h.addEventListener("upgradeneeded",g=>{l(pi(h.result),g.oldVersion,g.newVersion,pi(h.transaction),g)}),i&&h.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{f&&g.addEventListener("close",()=>f()),o&&g.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const RT=["get","getKey","getAll","getAllKeys","count"],OT=["put","add","delete","clear"],Nf=new Map;function b_(a,t){if(!(a instanceof IDBDatabase&&!(t in a)&&typeof t=="string"))return;if(Nf.get(t))return Nf.get(t);const i=t.replace(/FromIndex$/,""),l=t!==i,o=OT.includes(i);if(!(i in(l?IDBIndex:IDBObjectStore).prototype)||!(o||RT.includes(i)))return;const f=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let p=g.store;return l&&(p=p.index(m.shift())),(await Promise.all([p[i](...m),o&&g.done]))[0]};return Nf.set(t,f),f}CT(a=>({...a,get:(t,i,l)=>b_(t,i)||a.get(t,i,l),has:(t,i)=>!!b_(t,i)||a.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(IT(i)){const l=i.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(i=>i).join(" ")}}function IT(a){return a.getComponent()?.type==="VERSION"}const Pf="@firebase/app",T_="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new mh("@firebase/app"),MT="@firebase/app-compat",xT="@firebase/analytics-compat",kT="@firebase/analytics",LT="@firebase/app-check-compat",UT="@firebase/app-check",zT="@firebase/auth",HT="@firebase/auth-compat",BT="@firebase/database",jT="@firebase/data-connect",qT="@firebase/database-compat",VT="@firebase/functions",PT="@firebase/functions-compat",GT="@firebase/installations",YT="@firebase/installations-compat",FT="@firebase/messaging",QT="@firebase/messaging-compat",KT="@firebase/performance",XT="@firebase/performance-compat",ZT="@firebase/remote-config",WT="@firebase/remote-config-compat",JT="@firebase/storage",$T="@firebase/storage-compat",e1="@firebase/firestore",t1="@firebase/ai",n1="@firebase/firestore-compat",i1="firebase",s1="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="[DEFAULT]",a1={[Pf]:"fire-core",[MT]:"fire-core-compat",[kT]:"fire-analytics",[xT]:"fire-analytics-compat",[UT]:"fire-app-check",[LT]:"fire-app-check-compat",[zT]:"fire-auth",[HT]:"fire-auth-compat",[BT]:"fire-rtdb",[jT]:"fire-data-connect",[qT]:"fire-rtdb-compat",[VT]:"fire-fn",[PT]:"fire-fn-compat",[GT]:"fire-iid",[YT]:"fire-iid-compat",[FT]:"fire-fcm",[QT]:"fire-fcm-compat",[KT]:"fire-perf",[XT]:"fire-perf-compat",[ZT]:"fire-rc",[WT]:"fire-rc-compat",[JT]:"fire-gcs",[$T]:"fire-gcs-compat",[e1]:"fire-fst",[n1]:"fire-fst-compat",[t1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map,l1=new Map,Yf=new Map;function C_(a,t){try{a.container.addComponent(t)}catch(i){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${a.name}`,i)}}function $s(a){const t=a.name;if(Yf.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;Yf.set(t,a);for(const i of vo.values())C_(i,a);for(const i of l1.values())C_(i,a);return!0}function gh(a,t){const i=a.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),a.container.getProvider(t)}function Xt(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new kl("app","Firebase",r1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(t,i,l){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=s1;function Gy(a,t={}){let i=a;typeof t!="object"&&(t={name:t});const l={name:Gf,automaticDataCollectionEnabled:!0,...t},o=l.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(i||(i=Uy()),!i)throw gi.create("no-options");const f=vo.get(o);if(f){if(Xi(i,f.options)&&Xi(l,f.config))return f;throw gi.create("duplicate-app",{appName:o})}const h=new mT(o);for(const g of Yf.values())h.addComponent(g);const m=new o1(i,l,h);return vo.set(o,m),m}function Yy(a=Gf){const t=vo.get(a);if(!t&&a===Gf&&Uy())return Gy();if(!t)throw gi.create("no-app",{appName:a});return t}function _i(a,t,i){let l=a1[a]??a;i&&(l+=`-${i}`);const o=l.match(/\s|\//),f=t.match(/\s|\//);if(o||f){const h=[`Unable to register library "${l}" with version "${t}":`];o&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),o&&f&&h.push("and"),f&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(h.join(" "));return}$s(new Zi(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firebase-heartbeat-database",c1=1,Al="firebase-heartbeat-store";let Rf=null;function Fy(){return Rf||(Rf=NT(u1,c1,{upgrade:(a,t)=>{switch(t){case 0:try{a.createObjectStore(Al)}catch(i){console.warn(i)}}}}).catch(a=>{throw gi.create("idb-open",{originalErrorMessage:a.message})})),Rf}async function f1(a){try{const i=(await Fy()).transaction(Al),l=await i.objectStore(Al).get(Qy(a));return await i.done,l}catch(t){if(t instanceof bi)kn.warn(t.message);else{const i=gi.create("idb-get",{originalErrorMessage:t?.message});kn.warn(i.message)}}}async function A_(a,t){try{const l=(await Fy()).transaction(Al,"readwrite");await l.objectStore(Al).put(t,Qy(a)),await l.done}catch(i){if(i instanceof bi)kn.warn(i.message);else{const l=gi.create("idb-set",{originalErrorMessage:i?.message});kn.warn(l.message)}}}function Qy(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=1024,d1=30;class m1{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new g1(i),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=w_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(o=>o.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:i}),this._heartbeatsCache.heartbeats.length>d1){const o=_1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){kn.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=w_(),{heartbeatsToSend:i,unsentEntries:l}=p1(this._heartbeatsCache.heartbeats),o=go(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return kn.warn(t),""}}}function w_(){return new Date().toISOString().substring(0,10)}function p1(a,t=h1){const i=[];let l=a.slice();for(const o of a){const f=i.find(h=>h.agent===o.agent);if(f){if(f.dates.push(o.date),N_(i)>t){f.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),N_(i)>t){i.pop();break}l=l.slice(1)}return{heartbeatsToSend:i,unsentEntries:l}}class g1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $b()?eT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await f1(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const l=await this.read();return A_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const l=await this.read();return A_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function N_(a){return go(JSON.stringify({version:2,heartbeats:a})).length}function _1(a){if(a.length===0)return-1;let t=0,i=a[0].date;for(let l=1;l<a.length;l++)a[l].date<i&&(i=a[l].date,t=l);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(a){$s(new Zi("platform-logger",t=>new DT(t),"PRIVATE")),$s(new Zi("heartbeat",t=>new m1(t),"PRIVATE")),_i(Pf,T_,a),_i(Pf,T_,"esm2020"),_i("fire-js","")}y1("");var R_={};const O_="@firebase/database",D_="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ky="";function v1(a){Ky=a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Je(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Cl(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return Hn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const t=window[a];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new E1(t)}}catch{}return new S1},Qi=Xy("localStorage"),b1=Xy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new mh("@firebase/database"),T1=(function(){let a=1;return function(){return a++}})(),Zy=function(a){const t=cT(a),i=new lT;i.update(t);const l=i.digest();return ch.encodeByteArray(l)},Ll=function(...a){let t="";for(let i=0;i<a.length;i++){const l=a[i];Array.isArray(l)||l&&typeof l=="object"&&typeof l.length=="number"?t+=Ll.apply(null,l):typeof l=="object"?t+=Je(l):t+=l,t+=" "}return t};let gl=null,I_=!0;const C1=function(a,t){U(!0,"Can't turn on custom loggers persistently."),Fs.logLevel=Ae.VERBOSE,gl=Fs.log.bind(Fs)},ot=function(...a){if(I_===!0&&(I_=!1,gl===null&&b1.get("logging_enabled")===!0&&C1()),gl){const t=Ll.apply(null,a);gl(t)}},Ul=function(a){return function(...t){ot(a,...t)}},Ff=function(...a){const t="FIREBASE INTERNAL ERROR: "+Ll(...a);Fs.error(t)},Ln=function(...a){const t=`FIREBASE FATAL ERROR: ${Ll(...a)}`;throw Fs.error(t),new Error(t)},bt=function(...a){const t="FIREBASE WARNING: "+Ll(...a);Fs.warn(t)},A1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wy=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},w1=function(a){if(document.readyState==="complete")a();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},ea="[MIN_NAME]",Wi="[MAX_NAME]",ua=function(a,t){if(a===t)return 0;if(a===ea||t===Wi)return-1;if(t===ea||a===Wi)return 1;{const i=M_(a),l=M_(t);return i!==null?l!==null?i-l===0?a.length-t.length:i-l:-1:l!==null?1:a<t?-1:1}},N1=function(a,t){return a===t?0:a<t?-1:1},ul=function(a,t){if(t&&a in t)return t[a];throw new Error("Missing required key ("+a+") in object: "+Je(t))},_h=function(a){if(typeof a!="object"||a===null)return Je(a);const t=[];for(const l in a)t.push(l);t.sort();let i="{";for(let l=0;l<t.length;l++)l!==0&&(i+=","),i+=Je(t[l]),i+=":",i+=_h(a[t[l]]);return i+="}",i},Jy=function(a,t){const i=a.length;if(i<=t)return[a];const l=[];for(let o=0;o<i;o+=t)o+t>i?l.push(a.substring(o,i)):l.push(a.substring(o,o+t));return l};function Tt(a,t){for(const i in a)a.hasOwnProperty(i)&&t(i,a[i])}const $y=function(a){U(!Wy(a),"Invalid JSON number");const t=11,i=52,l=(1<<t-1)-1;let o,f,h,m,g;a===0?(f=0,h=0,o=1/a===-1/0?1:0):(o=a<0,a=Math.abs(a),a>=Math.pow(2,1-l)?(m=Math.min(Math.floor(Math.log(a)/Math.LN2),l),f=m+l,h=Math.round(a*Math.pow(2,i-m)-Math.pow(2,i))):(f=0,h=Math.round(a/Math.pow(2,1-l-i))));const p=[];for(g=i;g;g-=1)p.push(h%2?1:0),h=Math.floor(h/2);for(g=t;g;g-=1)p.push(f%2?1:0),f=Math.floor(f/2);p.push(o?1:0),p.reverse();const E=p.join("");let y="";for(g=0;g<64;g+=8){let S=parseInt(E.substr(g,8),2).toString(16);S.length===1&&(S="0"+S),y=y+S}return y.toLowerCase()},R1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function D1(a,t){let i="Unknown Error";a==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?i="Client doesn't have permission to access the desired data.":a==="unavailable"&&(i="The service is unavailable");const l=new Error(a+" at "+t._path.toString()+": "+i);return l.code=a.toUpperCase(),l}const I1=new RegExp("^-?(0*)\\d{1,10}$"),M1=-2147483648,x1=2147483647,M_=function(a){if(I1.test(a)){const t=Number(a);if(t>=M1&&t<=x1)return t}return null},ca=function(a){try{a()}catch(t){setTimeout(()=>{const i=t.stack||"";throw bt("Exception was thrown by user callback.",i),t},Math.floor(0))}},k1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_l=function(a,t){const i=setTimeout(a,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Xt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(l=>this.appCheck=l)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,l)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,l):i(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(t,i,l){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=l,this.auth_=null,this.auth_=l.getImmediate({optional:!0}),this.auth_||l.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,l)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,l):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(t)}}class co{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}co.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="5",ev="v",tv="s",nv="r",iv="f",sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,av="ls",lv="p",Qf="ac",rv="websocket",ov="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t,i,l,o,f=!1,h="",m=!1,g=!1,p=null){this.secure=i,this.namespace=l,this.webSocketOnly=o,this.nodeAdmin=f,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=g,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function z1(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function cv(a,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let l;if(t===rv)l=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(t===ov)l=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);z1(a)&&(i.ns=a.namespace);const o=[];return Tt(i,(f,h)=>{o.push(f+"="+h)}),l+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.counters_={}}incrementCounter(t,i=1){Hn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return Bb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={},Df={};function vh(a){const t=a.toString();return Of[t]||(Of[t]=new H1),Of[t]}function B1(a,t){const i=a.toString();return Df[i]||(Df[i]=t()),Df[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const l=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<l.length;++o)l[o]&&ca(()=>{this.onMessage_(l[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="start",q1="close",V1="pLPCommand",P1="pRTLPCB",fv="id",hv="pw",dv="ser",G1="cb",Y1="seg",F1="ts",Q1="d",K1="dframe",mv=1870,pv=30,X1=mv-pv,Z1=25e3,W1=3e4;class Gs{constructor(t,i,l,o,f,h,m){this.connId=t,this.repoInfo=i,this.applicationId=l,this.appCheckToken=o,this.authToken=f,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ul(t),this.stats_=vh(i),this.urlFn=g=>(this.appCheckToken&&(g[Qf]=this.appCheckToken),cv(i,ov,g))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new j1(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(W1)),w1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Eh((...f)=>{const[h,m,g,p,E]=f;if(this.incrementIncomingBytes_(f),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===x_)this.id=m,this.password=g;else if(h===q1)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...f)=>{const[h,m]=f;this.incrementIncomingBytes_(f),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const l={};l[x_]="t",l[dv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(l[G1]=this.scriptTagHolder.uniqueCallbackIdentifier),l[ev]=yh,this.transportSessionId&&(l[tv]=this.transportSessionId),this.lastSessionId&&(l[av]=this.lastSessionId),this.applicationId&&(l[lv]=this.applicationId),this.appCheckToken&&(l[Qf]=this.appCheckToken),typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(l[nv]=iv);const o=this.urlFn(l);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!R1()&&!O1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=Je(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const l=xy(i),o=Jy(l,X1);for(let f=0;f<o.length;f++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[f]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const l={};l[K1]="t",l[fv]=t,l[hv]=i,this.myDisconnFrame.src=this.urlFn(l),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=Je(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Eh{constructor(t,i,l,o){this.onDisconnect=l,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=T1(),window[V1+this.uniqueCallbackIdentifier]=t,window[P1+this.uniqueCallbackIdentifier]=i,this.myIFrame=Eh.createIFrame_();let f="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(f='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+f+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){ot("frame writing exception"),m.stack&&ot(m.stack),ot(m)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ot("No IE domain setting required")}catch{const l=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+l+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[fv]=this.myID,t[hv]=this.myPW,t[dv]=this.currentSerial;let i=this.urlFn(t),l="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pv+l.length<=mv;){const h=this.pendingSegs.shift();l=l+"&"+Y1+o+"="+h.seg+"&"+F1+o+"="+h.ts+"&"+Q1+o+"="+h.d,o++}return i=i+l,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,l){this.pendingSegs.push({seg:t,ts:i,d:l}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const l=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(l,Math.floor(Z1)),f=()=>{clearTimeout(o),l()};this.addTag(t,f)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const l=this.myIFrame.doc.createElement("script");l.type="text/javascript",l.async=!0,l.src=t,l.onload=l.onreadystatechange=function(){const o=l.readyState;(!o||o==="loaded"||o==="complete")&&(l.onload=l.onreadystatechange=null,l.parentNode&&l.parentNode.removeChild(l),i())},l.onerror=()=>{ot("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(l)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=16384,$1=45e3;let Eo=null;typeof MozWebSocket<"u"?Eo=MozWebSocket:typeof WebSocket<"u"&&(Eo=WebSocket);class Zt{constructor(t,i,l,o,f,h,m){this.connId=t,this.applicationId=l,this.appCheckToken=o,this.authToken=f,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ul(this.connId),this.stats_=vh(i),this.connURL=Zt.connectionURL_(i,h,m,o,l),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,l,o,f){const h={};return h[ev]=yh,typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(h[nv]=iv),i&&(h[tv]=i),l&&(h[av]=l),o&&(h[Qf]=o),f&&(h[lv]=f),cv(t,rv,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let l;Jb(),this.mySock=new Eo(this.connURL,[],l)}catch(l){this.log_("Error instantiating WebSocket.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=l=>{this.handleIncomingFrame(l)},this.mySock.onerror=l=>{this.log_("WebSocket error.  Closing connection.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,l=navigator.userAgent.match(i);l&&l.length>1&&parseFloat(l[1])<4.4&&(t=!0)}return!t&&Eo!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const l=Cl(i);this.onMessage(l)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const l=this.extractFrameCount_(i);l!==null&&this.appendFrame_(l)}}send(t){this.resetKeepAlive();const i=Je(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const l=Jy(i,J1);l.length>1&&this.sendString_(String(l.length));for(let o=0;o<l.length;o++)this.sendString_(l[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($1))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{static get ALL_TRANSPORTS(){return[Gs,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Zt&&Zt.isAvailable();let l=i&&!Zt.previouslyFailed();if(t.webSocketOnly&&(i||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),l=!0),l)this.transports_=[Zt];else{const o=this.transports_=[];for(const f of wl.ALL_TRANSPORTS)f&&f.isAvailable()&&o.push(f);wl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=6e4,tC=5e3,nC=10*1024,iC=100*1024,If="t",k_="d",sC="s",L_="r",aC="e",U_="o",z_="a",H_="n",B_="p",lC="h";class rC{constructor(t,i,l,o,f,h,m,g,p,E){this.id=t,this.repoInfo_=i,this.applicationId_=l,this.appCheckToken_=o,this.authToken_=f,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=g,this.onKill_=p,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ul("c:"+this.id+":"),this.transportManager_=new wl(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),l=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,l)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=_l(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(If in t){const i=t[If];i===z_?this.upgradeIfSecondaryHealthy_():i===L_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===U_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=ul("t",t),l=ul("d",t);if(i==="c")this.onSecondaryControl_(l);else if(i==="d")this.pendingDataMessages.push(l);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:B_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:H_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=ul("t",t),l=ul("d",t);i==="c"?this.onControl_(l):i==="d"&&this.onDataMessage_(l)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=ul(If,t);if(k_ in t){const l=t[k_];if(i===lC){const o={...l};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===H_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===sC?this.onConnectionShutdown_(l):i===L_?this.onReset_(l):i===aC?Ff("Server Error: "+l):i===U_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ff("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,l=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),yh!==l&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),l=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,l),_l(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eC))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_l(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:B_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{put(t,i,l,o){}merge(t,i,l,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,l){}onDisconnectMerge(t,i,l){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const l=[...this.listeners_[t]];for(let o=0;o<l.length;o++)l[o].callback.apply(l[o].context,i)}}on(t,i,l){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:l});const o=this.getInitialEvent(t);o&&i.apply(l,o)}off(t,i,l){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let f=0;f<o.length;f++)if(o[f].callback===i&&(!l||l===o[f].context)){o.splice(f,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends _v{static getInstance(){return new So}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=32,q_=768;class Re{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let l=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[l]=this.pieces_[o],l++);this.pieces_.length=l,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function ge(){return new Re("")}function te(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function Ei(a){return a.pieces_.length-a.pieceNum_}function Oe(a){let t=a.pieceNum_;return t<a.pieces_.length&&t++,new Re(a.pieces_,t)}function yv(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function oC(a){let t="";for(let i=a.pieceNum_;i<a.pieces_.length;i++)a.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(a.pieces_[i])));return t||"/"}function vv(a,t=0){return a.pieces_.slice(a.pieceNum_+t)}function Ev(a){if(a.pieceNum_>=a.pieces_.length)return null;const t=[];for(let i=a.pieceNum_;i<a.pieces_.length-1;i++)t.push(a.pieces_[i]);return new Re(t,0)}function Qe(a,t){const i=[];for(let l=a.pieceNum_;l<a.pieces_.length;l++)i.push(a.pieces_[l]);if(t instanceof Re)for(let l=t.pieceNum_;l<t.pieces_.length;l++)i.push(t.pieces_[l]);else{const l=t.split("/");for(let o=0;o<l.length;o++)l[o].length>0&&i.push(l[o])}return new Re(i,0)}function re(a){return a.pieceNum_>=a.pieces_.length}function Et(a,t){const i=te(a),l=te(t);if(i===null)return t;if(i===l)return Et(Oe(a),Oe(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+a+")")}function Sh(a,t){if(Ei(a)!==Ei(t))return!1;for(let i=a.pieceNum_,l=t.pieceNum_;i<=a.pieces_.length;i++,l++)if(a.pieces_[i]!==t.pieces_[l])return!1;return!0}function Wt(a,t){let i=a.pieceNum_,l=t.pieceNum_;if(Ei(a)>Ei(t))return!1;for(;i<a.pieces_.length;){if(a.pieces_[i]!==t.pieces_[l])return!1;++i,++l}return!0}class uC{constructor(t,i){this.errorPrefix_=i,this.parts_=vv(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let l=0;l<this.parts_.length;l++)this.byteLength_+=jo(this.parts_[l]);Sv(this)}}function cC(a,t){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(t),a.byteLength_+=jo(t),Sv(a)}function fC(a){const t=a.parts_.pop();a.byteLength_-=jo(t),a.parts_.length>0&&(a.byteLength_-=1)}function Sv(a){if(a.byteLength_>q_)throw new Error(a.errorPrefix_+"has a key path longer than "+q_+" bytes ("+a.byteLength_+").");if(a.parts_.length>j_)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+j_+") or object contains a cycle "+Fi(a))}function Fi(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends _v{static getInstance(){return new bh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const l=!document[t];l!==this.visible_&&(this.visible_=l,this.trigger("visible",l))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=1e3,hC=300*1e3,V_=30*1e3,dC=1.3,mC=3e4,pC="server_kill",P_=3;class xn extends gv{constructor(t,i,l,o,f,h,m,g){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=l,this.onConnectStatus_=o,this.onServerInfoUpdate_=f,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=g,this.id=xn.nextPersistentConnectionId_++,this.log_=Ul("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cl,this.maxReconnectDelay_=hC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&So.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,l){const o=++this.requestNumber_,f={r:o,a:t,b:i};this.log_(Je(f)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(f),l&&(this.requestCBHash_[o]=l)}get(t){this.initConnection_();const i=new Bo,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?i.resolve(m):i.reject(m)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const f=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(f),i.promise}listen(t,i,l,o){this.initConnection_();const f=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+f),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(f),"listen() called twice for same path/queryId.");const m={onComplete:o,hashFn:i,query:t,tag:l};this.listens.get(h).set(f,m),this.connected_&&this.sendListen_(m)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,l=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(l)})}sendListen_(t){const i=t.query,l=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+l+" for "+o);const f={p:l},h="q";t.tag&&(f.q=i._queryObject,f.t=t.tag),f.h=t.hashFn(),this.sendRequest(h,f,m=>{const g=m.d,p=m.s;xn.warnOnListenWarnings_(g,i),(this.listens.get(l)&&this.listens.get(l).get(o))===t&&(this.log_("listen response",m),p!=="ok"&&this.removeListen_(l,o),t.onComplete&&t.onComplete(p,g))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&Hn(t,"w")){const l=Js(t,"w");if(Array.isArray(l)&&~l.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',f=i._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${f} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||aT(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=V_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=sT(t)?"auth":"gauth",l={cred:t};this.authOverride_===null?l.noauth=!0:typeof this.authOverride_=="object"&&(l.authvar=this.authOverride_),this.sendRequest(i,l,o=>{const f=o.s,h=o.d||"error";this.authToken_===t&&(f==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(f,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,l=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,l)})}unlisten(t,i){const l=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+l+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(l,o)&&this.connected_&&this.sendUnlisten_(l,o,t._queryObject,i)}sendUnlisten_(t,i,l,o){this.log_("Unlisten on "+t+" for "+i);const f={p:t},h="n";o&&(f.q=l,f.t=o),this.sendRequest(h,f)}onDisconnectPut(t,i,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,l):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:l})}onDisconnectMerge(t,i,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,l):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:l})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,l,o){const f={p:i,d:l};this.log_("onDisconnect "+t,f),this.sendRequest(t,f,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,l,o){this.putInternal("p",t,i,l,o)}merge(t,i,l,o){this.putInternal("m",t,i,l,o)}putInternal(t,i,l,o,f){this.initConnection_();const h={p:i,d:l};f!==void 0&&(h.h=f),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,l=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,l,f=>{this.log_(i+" response",f),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(f.s,f.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,l=>{if(l.s!=="ok"){const f=l.d;this.log_("reportStats","Error sending stats: "+f)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Je(t));const i=t.r,l=this.requestCBHash_[i];l&&(delete this.requestCBHash_[i],l(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Ff("Unrecognized action received from server: "+Je(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cl,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=cl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mC&&(this.reconnectDelay_=cl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),l=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+xn.nextConnectionId_++,f=this.lastSessionId;let h=!1,m=null;const g=function(){m?m.close():(h=!0,l())},p=function(y){U(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(y)};this.realtime_={close:g,sendRequest:p};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,S]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);h?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=S&&S.token,m=new rC(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,l,L=>{bt(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(pC)},f))}catch(y){this.log_("Failed to get token: "+y),h||(this.repoInfo_.nodeAdmin&&bt(y),g())}}}interrupt(t){ot("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ot("Resuming connection for reason: "+t),delete this.interruptReasons_[t],jf(this.interruptReasons_)&&(this.reconnectDelay_=cl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let l;i?l=i.map(f=>_h(f)).join("$"):l="default";const o=this.removeListen_(t,l);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const l=new Re(t).toString();let o;if(this.listens.has(l)){const f=this.listens.get(l);o=f.get(i),f.delete(i),f.size===0&&this.listens.delete(l)}else o=void 0;return o}onAuthRevoked_(t,i){ot("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P_&&(this.reconnectDelay_=V_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){ot("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Ky.replace(/\./g,"-")]=1,hh()?t["framework.cordova"]=1:jy()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=So.getInstance().currentlyOnline();return jf(this.interruptReasons_)&&t}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ne(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const l=new ne(ea,t),o=new ne(ea,i);return this.compare(l,o)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;class bv extends qo{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(t){ro=t}compare(t,i){return ua(t.name,i.name)}isDefinedOn(t){throw aa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Wi,ro)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ne(t,ro)}toString(){return".key"}}const Qs=new bv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,i,l,o,f=null){this.isReverse_=o,this.resultGenerator_=f,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?l(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class We{constructor(t,i,l,o,f){this.key=t,this.value=i,this.color=l??We.RED,this.left=o??St.EMPTY_NODE,this.right=f??St.EMPTY_NODE}copy(t,i,l,o,f){return new We(t??this.key,i??this.value,l??this.color,o??this.left,f??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,l){let o=this;const f=l(t,o.key);return f<0?o=o.copy(null,null,null,o.left.insert(t,i,l),null):f===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,l)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let l,o;if(l=this,i(t,l.key)<0)!l.left.isEmpty()&&!l.left.isRed_()&&!l.left.left.isRed_()&&(l=l.moveRedLeft_()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed_()&&(l=l.rotateRight_()),!l.right.isEmpty()&&!l.right.isRed_()&&!l.right.left.isRed_()&&(l=l.moveRedRight_()),i(t,l.key)===0){if(l.right.isEmpty())return St.EMPTY_NODE;o=l.right.min_(),l=l.copy(o.key,o.value,null,null,l.right.removeMin_())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class gC{copy(t,i,l,o,f){return this}insert(t,i,l){return new We(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(t,i=St.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new St(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(t){return new St(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,We.BLACK,null,null))}get(t){let i,l=this.root_;for(;!l.isEmpty();){if(i=this.comparator_(t,l.key),i===0)return l.value;i<0?l=l.left:i>0&&(l=l.right)}return null}getPredecessorKey(t){let i,l=this.root_,o=null;for(;!l.isEmpty();)if(i=this.comparator_(t,l.key),i===0){if(l.left.isEmpty())return o?o.key:null;for(l=l.left;!l.right.isEmpty();)l=l.right;return l.key}else i<0?l=l.left:i>0&&(o=l,l=l.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new oo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new oo(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new oo(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new oo(this.root_,null,this.comparator_,!0,t)}}St.EMPTY_NODE=new gC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(a,t){return ua(a.name,t.name)}function Th(a,t){return ua(a,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;function yC(a){Kf=a}const Tv=function(a){return typeof a=="number"?"number:"+$y(a):"string:"+a},Cv=function(a){if(a.isLeafNode()){const t=a.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Hn(t,".sv"),"Priority must be a string or number.")}else U(a===Kf||a.isEmpty(),"priority of unexpected type.");U(a===Kf||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_;class Ze{static set __childrenNodeConstructor(t){G_=t}static get __childrenNodeConstructor(){return G_}constructor(t,i=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ze(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return re(t)?this:te(t)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const l=te(t);return l===null?i:i.isEmpty()&&l!==".priority"?this:(U(l!==".priority"||Ei(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(l,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Tv(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=$y(this.value_):t+=this.value_,this.lazyHash_=Zy(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ze.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ze.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,l=typeof this.value_,o=Ze.VALUE_TYPE_ORDER.indexOf(i),f=Ze.VALUE_TYPE_ORDER.indexOf(l);return U(o>=0,"Unknown leaf type: "+i),U(f>=0,"Unknown leaf type: "+l),o===f?l==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:f-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av,wv;function vC(a){Av=a}function EC(a){wv=a}class SC extends qo{compare(t,i){const l=t.node.getPriority(),o=i.node.getPriority(),f=l.compareTo(o);return f===0?ua(t.name,i.name):f}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Wi,new Ze("[PRIORITY-POST]",wv))}makePost(t,i){const l=Av(t);return new ne(i,new Ze("[PRIORITY-POST]",l))}toString(){return".priority"}}const ze=new SC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=Math.log(2);class TC{constructor(t){const i=f=>parseInt(Math.log(f)/bC,10),l=f=>parseInt(Array(f+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=l(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const bo=function(a,t,i,l){a.sort(t);const o=function(g,p){const E=p-g;let y,S;if(E===0)return null;if(E===1)return y=a[g],S=i?i(y):y,new We(S,y.node,We.BLACK,null,null);{const L=parseInt(E/2,10)+g,z=o(g,L),G=o(L+1,p);return y=a[L],S=i?i(y):y,new We(S,y.node,We.BLACK,z,G)}},f=function(g){let p=null,E=null,y=a.length;const S=function(z,G){const he=y-z,ye=y;y-=z;const F=o(he+1,ye),$=a[he],oe=i?i($):$;L(new We(oe,$.node,G,null,F))},L=function(z){p?(p.left=z,p=z):(E=z,p=z)};for(let z=0;z<g.count;++z){const G=g.nextBitIsOne(),he=Math.pow(2,g.count-(z+1));G?S(he,We.BLACK):(S(he,We.BLACK),S(he,We.RED))}return E},h=new TC(a.length),m=f(h);return new St(l||t,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mf;const Ps={};class Dn{static get Default(){return U(Ps&&ze,"ChildrenNode.ts has not been loaded"),Mf=Mf||new Dn({".priority":Ps},{".priority":ze}),Mf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Js(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof St?i:null}hasIndex(t){return Hn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const l=[];let o=!1;const f=i.getIterator(ne.Wrap);let h=f.getNext();for(;h;)o=o||t.isDefinedOn(h.node),l.push(h),h=f.getNext();let m;o?m=bo(l,t.getCompare()):m=Ps;const g=t.toString(),p={...this.indexSet_};p[g]=t;const E={...this.indexes_};return E[g]=m,new Dn(E,p)}addToIndexes(t,i){const l=yo(this.indexes_,(o,f)=>{const h=Js(this.indexSet_,f);if(U(h,"Missing index implementation for "+f),o===Ps)if(h.isDefinedOn(t.node)){const m=[],g=i.getIterator(ne.Wrap);let p=g.getNext();for(;p;)p.name!==t.name&&m.push(p),p=g.getNext();return m.push(t),bo(m,h.getCompare())}else return Ps;else{const m=i.get(t.name);let g=o;return m&&(g=g.remove(new ne(t.name,m))),g.insert(t,t.node)}});return new Dn(l,this.indexSet_)}removeFromIndexes(t,i){const l=yo(this.indexes_,o=>{if(o===Ps)return o;{const f=i.get(t.name);return f?o.remove(new ne(t.name,f)):o}});return new Dn(l,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;class X{static get EMPTY_NODE(){return fl||(fl=new X(new St(Th),null,Dn.Default))}constructor(t,i,l){this.children_=t,this.priorityNode_=i,this.indexMap_=l,this.lazyHash_=null,this.priorityNode_&&Cv(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fl}updatePriority(t){return this.children_.isEmpty()?this:new X(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?fl:i}}getChild(t){const i=te(t);return i===null?this:this.getImmediateChild(i).getChild(Oe(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const l=new ne(t,i);let o,f;i.isEmpty()?(o=this.children_.remove(t),f=this.indexMap_.removeFromIndexes(l,this.children_)):(o=this.children_.insert(t,i),f=this.indexMap_.addToIndexes(l,this.children_));const h=o.isEmpty()?fl:this.priorityNode_;return new X(o,h,f)}}updateChild(t,i){const l=te(t);if(l===null)return i;{U(te(t)!==".priority"||Ei(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(l).updateChild(Oe(t),i);return this.updateImmediateChild(l,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let l=0,o=0,f=!0;if(this.forEachChild(ze,(h,m)=>{i[h]=m.val(t),l++,f&&X.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):f=!1}),!t&&f&&o<2*l){const h=[];for(const m in i)h[m]=i[m];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(ze,(i,l)=>{const o=l.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Zy(t)}return this.lazyHash_}getPredecessorChildName(t,i,l){const o=this.resolveIndex_(l);if(o){const f=o.getPredecessorKey(new ne(t,i));return f?f.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const l=i.minKey();return l&&l.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ne(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const l=i.maxKey();return l&&l.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ne(i,this.children_.get(i)):null}forEachChild(t,i){const l=this.resolveIndex_(t);return l?l.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const l=this.resolveIndex_(i);if(l)return l.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ne.Wrap);let f=o.peek();for(;f!=null&&i.compare(f,t)<0;)o.getNext(),f=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const l=this.resolveIndex_(i);if(l)return l.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ne.Wrap);let f=o.peek();for(;f!=null&&i.compare(f,t)>0;)o.getNext(),f=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===zl?-1:0}withIndex(t){if(t===Qs||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new X(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Qs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const l=this.getIterator(ze),o=i.getIterator(ze);let f=l.getNext(),h=o.getNext();for(;f&&h;){if(f.name!==h.name||!f.node.equals(h.node))return!1;f=l.getNext(),h=o.getNext()}return f===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Qs?null:this.indexMap_.get(t.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CC extends X{constructor(){super(new St(Th),X.EMPTY_NODE,Dn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return X.EMPTY_NODE}isEmpty(){return!1}}const zl=new CC;Object.defineProperties(ne,{MIN:{value:new ne(ea,X.EMPTY_NODE)},MAX:{value:new ne(Wi,zl)}});bv.__EMPTY_NODE=X.EMPTY_NODE;Ze.__childrenNodeConstructor=X;yC(zl);EC(zl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=!0;function at(a,t=null){if(a===null)return X.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(t=a[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const i=a;return new Ze(i,at(t))}if(!(a instanceof Array)&&AC){const i=[];let l=!1;if(Tt(a,(h,m)=>{if(h.substring(0,1)!=="."){const g=at(m);g.isEmpty()||(l=l||!g.getPriority().isEmpty(),i.push(new ne(h,g)))}}),i.length===0)return X.EMPTY_NODE;const f=bo(i,_C,h=>h.name,Th);if(l){const h=bo(i,ze.getCompare());return new X(f,at(t),new Dn({".priority":h},{".priority":ze}))}else return new X(f,at(t),Dn.Default)}else{let i=X.EMPTY_NODE;return Tt(a,(l,o)=>{if(Hn(a,l)&&l.substring(0,1)!=="."){const f=at(o);(f.isLeafNode()||!f.isEmpty())&&(i=i.updateImmediateChild(l,f))}}),i.updatePriority(at(t))}}vC(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC extends qo{constructor(t){super(),this.indexPath_=t,U(!re(t)&&te(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const l=this.extractChild(t.node),o=this.extractChild(i.node),f=l.compareTo(o);return f===0?ua(t.name,i.name):f}makePost(t,i){const l=at(t),o=X.EMPTY_NODE.updateChild(this.indexPath_,l);return new ne(i,o)}maxPost(){const t=X.EMPTY_NODE.updateChild(this.indexPath_,zl);return new ne(Wi,t)}toString(){return vv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends qo{compare(t,i){const l=t.node.compareTo(i.node);return l===0?ua(t.name,i.name):l}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(t,i){const l=at(t);return new ne(i,l)}toString(){return".value"}}const RC=new NC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(a){return{type:"value",snapshotNode:a}}function ta(a,t){return{type:"child_added",snapshotNode:t,childName:a}}function Nl(a,t){return{type:"child_removed",snapshotNode:t,childName:a}}function Rl(a,t,i){return{type:"child_changed",snapshotNode:t,childName:a,oldSnap:i}}function OC(a,t){return{type:"child_moved",snapshotNode:t,childName:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.index_=t}updateChild(t,i,l,o,f,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=t.getImmediateChild(i);return m.getChild(o).equals(l.getChild(o))&&m.isEmpty()===l.isEmpty()||(h!=null&&(l.isEmpty()?t.hasChild(i)?h.trackChildChange(Nl(i,m)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(ta(i,l)):h.trackChildChange(Rl(i,l,m))),t.isLeafNode()&&l.isEmpty())?t:t.updateImmediateChild(i,l).withIndex(this.index_)}updateFullNode(t,i,l){return l!=null&&(t.isLeafNode()||t.forEachChild(ze,(o,f)=>{i.hasChild(o)||l.trackChildChange(Nl(o,f))}),i.isLeafNode()||i.forEachChild(ze,(o,f)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(f)||l.trackChildChange(Rl(o,f,h))}else l.trackChildChange(ta(o,f))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?X.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.indexedFilter_=new Ch(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Ol.getStartPost_(t),this.endPost_=Ol.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,l=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&l}updateChild(t,i,l,o,f,h){return this.matches(new ne(i,l))||(l=X.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,l,o,f,h)}updateFullNode(t,i,l){i.isLeafNode()&&(i=X.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(X.EMPTY_NODE);const f=this;return i.forEachChild(ze,(h,m)=>{f.matches(new ne(h,m))||(o=o.updateImmediateChild(h,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,l)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const l=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?l<=0:l<0},this.withinEndPost=i=>{const l=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?l<=0:l<0},this.rangedFilter_=new Ol(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,l,o,f,h){return this.rangedFilter_.matches(new ne(i,l))||(l=X.EMPTY_NODE),t.getImmediateChild(i).equals(l)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,l,o,f,h):this.fullLimitUpdateChild_(t,i,l,f,h)}updateFullNode(t,i,l){let o;if(i.isLeafNode()||i.isEmpty())o=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=X.EMPTY_NODE.withIndex(this.index_);let f;this.reverse_?f=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):f=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;f.hasNext()&&h<this.limit_;){const m=f.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))o=o.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(X.EMPTY_NODE);let f;this.reverse_?f=o.getReverseIterator(this.index_):f=o.getIterator(this.index_);let h=0;for(;f.hasNext();){const m=f.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:o=o.updateImmediateChild(m.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,l)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,l,o,f){let h;if(this.reverse_){const y=this.index_.getCompare();h=(S,L)=>y(L,S)}else h=this.index_.getCompare();const m=t;U(m.numChildren()===this.limit_,"");const g=new ne(i,l),p=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),E=this.rangedFilter_.matches(g);if(m.hasChild(i)){const y=m.getImmediateChild(i);let S=o.getChildAfterChild(this.index_,p,this.reverse_);for(;S!=null&&(S.name===i||m.hasChild(S.name));)S=o.getChildAfterChild(this.index_,S,this.reverse_);const L=S==null?1:h(S,g);if(E&&!l.isEmpty()&&L>=0)return f?.trackChildChange(Rl(i,l,y)),m.updateImmediateChild(i,l);{f?.trackChildChange(Nl(i,y));const G=m.updateImmediateChild(i,X.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(f?.trackChildChange(ta(S.name,S.node)),G.updateImmediateChild(S.name,S.node)):G}}else return l.isEmpty()?t:E&&h(p,g)>=0?(f!=null&&(f.trackChildChange(Nl(p.name,p.node)),f.trackChildChange(ta(i,l))),m.updateImmediateChild(i,l).updateImmediateChild(p.name,X.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ea}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const t=new Ah;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function IC(a){return a.loadsAllData()?new Ch(a.getIndex()):a.hasLimit()?new DC(a):new Ol(a)}function Y_(a){const t={};if(a.isDefault())return t;let i;if(a.index_===ze?i="$priority":a.index_===RC?i="$value":a.index_===Qs?i="$key":(U(a.index_ instanceof wC,"Unrecognized index type!"),i=a.index_.toString()),t.orderBy=Je(i),a.startSet_){const l=a.startAfterSet_?"startAfter":"startAt";t[l]=Je(a.indexStartValue_),a.startNameSet_&&(t[l]+=","+Je(a.indexStartName_))}if(a.endSet_){const l=a.endBeforeSet_?"endBefore":"endAt";t[l]=Je(a.indexEndValue_),a.endNameSet_&&(t[l]+=","+Je(a.indexEndName_))}return a.limitSet_&&(a.isViewFromLeft()?t.limitToFirst=a.limit_:t.limitToLast=a.limit_),t}function F_(a){const t={};if(a.startSet_&&(t.sp=a.indexStartValue_,a.startNameSet_&&(t.sn=a.indexStartName_),t.sin=!a.startAfterSet_),a.endSet_&&(t.ep=a.indexEndValue_,a.endNameSet_&&(t.en=a.indexEndName_),t.ein=!a.endBeforeSet_),a.limitSet_){t.l=a.limit_;let i=a.viewFrom_;i===""&&(a.isViewFromLeft()?i="l":i="r"),t.vf=i}return a.index_!==ze&&(t.i=a.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends gv{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,l,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=l,this.appCheckTokenProvider_=o,this.log_=Ul("p:rest:"),this.listens_={}}listen(t,i,l,o){const f=t._path.toString();this.log_("Listen called for "+f+" "+t._queryIdentifier);const h=To.getListenId_(t,l),m={};this.listens_[h]=m;const g=Y_(t._queryParams);this.restRequest_(f+".json",g,(p,E)=>{let y=E;if(p===404&&(y=null,p=null),p===null&&this.onDataUpdate_(f,y,!1,l),Js(this.listens_,h)===m){let S;p?p===401?S="permission_denied":S="rest_error:"+p:S="ok",o(S,null)}})}unlisten(t,i){const l=To.getListenId_(t,i);delete this.listens_[l]}get(t){const i=Y_(t._queryParams),l=t._path.toString(),o=new Bo;return this.restRequest_(l+".json",i,(f,h)=>{let m=h;f===404&&(m=null,f=null),f===null?(this.onDataUpdate_(l,m,!1,null),o.resolve(m)):o.reject(new Error(m))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},l){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,f])=>{o&&o.accessToken&&(i.auth=o.accessToken),f&&f.token&&(i.ac=f.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ra(i);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(l&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let g=null;if(m.status>=200&&m.status<300){try{g=Cl(m.responseText)}catch{bt("Failed to parse JSON response for "+h+": "+m.responseText)}l(null,g)}else m.status!==401&&m.status!==404&&bt("Got unsuccessful REST response for "+h+" Status: "+m.status),l(m.status);l=null}},m.open("GET",h,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){return{value:null,children:new Map}}function Rv(a,t,i){if(re(t))a.value=i,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(t,i);else{const l=te(t);a.children.has(l)||a.children.set(l,Co());const o=a.children.get(l);t=Oe(t),Rv(o,t,i)}}function Xf(a,t,i){a.value!==null?i(t,a.value):xC(a,(l,o)=>{const f=new Re(t.toString()+"/"+l);Xf(o,f,i)})}function xC(a,t){a.children.forEach((i,l)=>{t(l,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i={...t};return this.last_&&Tt(this.last_,(l,o)=>{i[l]=i[l]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=10*1e3,LC=30*1e3,UC=300*1e3;class zC{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new kC(t);const l=Q_+(LC-Q_)*Math.random();_l(this.reportStats_.bind(this),Math.floor(l))}reportStats_(){const t=this.statsListener_.get(),i={};let l=!1;Tt(t,(o,f)=>{f>0&&Hn(this.statsToReport_,o)&&(i[o]=f,l=!0)}),l&&this.server_.reportStats(i),_l(this.reportStats_.bind(this),Math.floor(Math.random()*2*UC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function Ov(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nh(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,i,l){this.path=t,this.affectedTree=i,this.revert=l,this.type=Jt.ACK_USER_WRITE,this.source=Ov()}operationForChild(t){if(re(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Re(t));return new Ao(ge(),i,this.revert)}}else return U(te(this.path)===t,"operationForChild called for unrelated child."),new Ao(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,i){this.source=t,this.path=i,this.type=Jt.LISTEN_COMPLETE}operationForChild(t){return re(this.path)?new Dl(this.source,ge()):new Dl(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,i,l){this.source=t,this.path=i,this.snap=l,this.type=Jt.OVERWRITE}operationForChild(t){return re(this.path)?new Ji(this.source,ge(),this.snap.getImmediateChild(t)):new Ji(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t,i,l){this.source=t,this.path=i,this.children=l,this.type=Jt.MERGE}operationForChild(t){if(re(this.path)){const i=this.children.subtree(new Re(t));return i.isEmpty()?null:i.value?new Ji(this.source,ge(),i.value):new Il(this.source,ge(),i)}else return U(te(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Il(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,i,l){this.node_=t,this.fullyInitialized_=i,this.filtered_=l}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(re(t))return this.isFullyInitialized()&&!this.filtered_;const i=te(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function BC(a,t,i,l){const o=[],f=[];return t.forEach(h=>{h.type==="child_changed"&&a.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&f.push(OC(h.childName,h.snapshotNode))}),hl(a,o,"child_removed",t,l,i),hl(a,o,"child_added",t,l,i),hl(a,o,"child_moved",f,l,i),hl(a,o,"child_changed",t,l,i),hl(a,o,"value",t,l,i),o}function hl(a,t,i,l,o,f){const h=l.filter(m=>m.type===i);h.sort((m,g)=>qC(a,m,g)),h.forEach(m=>{const g=jC(a,m,f);o.forEach(p=>{p.respondsTo(m.type)&&t.push(p.createEvent(g,a.query_))})})}function jC(a,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,a.index_)),t}function qC(a,t,i){if(t.childName==null||i.childName==null)throw aa("Should only compare child_ events.");const l=new ne(t.childName,t.snapshotNode),o=new ne(i.childName,i.snapshotNode);return a.index_.compare(l,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(a,t){return{eventCache:a,serverCache:t}}function yl(a,t,i,l){return Vo(new $i(t,i,l),a.serverCache)}function Dv(a,t,i,l){return Vo(a.eventCache,new $i(t,i,l))}function Zf(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function es(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;const VC=()=>(xf||(xf=new St(N1)),xf);class Me{static fromObject(t){let i=new Me(null);return Tt(t,(l,o)=>{i=i.set(new Re(l),o)}),i}constructor(t,i=VC()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:ge(),value:this.value};if(re(t))return null;{const l=te(t),o=this.children.get(l);if(o!==null){const f=o.findRootMostMatchingPathAndValue(Oe(t),i);return f!=null?{path:Qe(new Re(l),f.path),value:f.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(re(t))return this;{const i=te(t),l=this.children.get(i);return l!==null?l.subtree(Oe(t)):new Me(null)}}set(t,i){if(re(t))return new Me(i,this.children);{const l=te(t),f=(this.children.get(l)||new Me(null)).set(Oe(t),i),h=this.children.insert(l,f);return new Me(this.value,h)}}remove(t){if(re(t))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const i=te(t),l=this.children.get(i);if(l){const o=l.remove(Oe(t));let f;return o.isEmpty()?f=this.children.remove(i):f=this.children.insert(i,o),this.value===null&&f.isEmpty()?new Me(null):new Me(this.value,f)}else return this}}get(t){if(re(t))return this.value;{const i=te(t),l=this.children.get(i);return l?l.get(Oe(t)):null}}setTree(t,i){if(re(t))return i;{const l=te(t),f=(this.children.get(l)||new Me(null)).setTree(Oe(t),i);let h;return f.isEmpty()?h=this.children.remove(l):h=this.children.insert(l,f),new Me(this.value,h)}}fold(t){return this.fold_(ge(),t)}fold_(t,i){const l={};return this.children.inorderTraversal((o,f)=>{l[o]=f.fold_(Qe(t,o),i)}),i(t,this.value,l)}findOnPath(t,i){return this.findOnPath_(t,ge(),i)}findOnPath_(t,i,l){const o=this.value?l(i,this.value):!1;if(o)return o;if(re(t))return null;{const f=te(t),h=this.children.get(f);return h?h.findOnPath_(Oe(t),Qe(i,f),l):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,ge(),i)}foreachOnPath_(t,i,l){if(re(t))return this;{this.value&&l(i,this.value);const o=te(t),f=this.children.get(o);return f?f.foreachOnPath_(Oe(t),Qe(i,o),l):new Me(null)}}foreach(t){this.foreach_(ge(),t)}foreach_(t,i){this.children.inorderTraversal((l,o)=>{o.foreach_(Qe(t,l),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,l)=>{l.value&&t(i,l.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.writeTree_=t}static empty(){return new en(new Me(null))}}function vl(a,t,i){if(re(t))return new en(new Me(i));{const l=a.writeTree_.findRootMostValueAndPath(t);if(l!=null){const o=l.path;let f=l.value;const h=Et(o,t);return f=f.updateChild(h,i),new en(a.writeTree_.set(o,f))}else{const o=new Me(i),f=a.writeTree_.setTree(t,o);return new en(f)}}}function K_(a,t,i){let l=a;return Tt(i,(o,f)=>{l=vl(l,Qe(t,o),f)}),l}function X_(a,t){if(re(t))return en.empty();{const i=a.writeTree_.setTree(t,new Me(null));return new en(i)}}function Wf(a,t){return ns(a,t)!=null}function ns(a,t){const i=a.writeTree_.findRootMostValueAndPath(t);return i!=null?a.writeTree_.get(i.path).getChild(Et(i.path,t)):null}function Z_(a){const t=[],i=a.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(ze,(l,o)=>{t.push(new ne(l,o))}):a.writeTree_.children.inorderTraversal((l,o)=>{o.value!=null&&t.push(new ne(l,o.value))}),t}function yi(a,t){if(re(t))return a;{const i=ns(a,t);return i!=null?new en(new Me(i)):new en(a.writeTree_.subtree(t))}}function Jf(a){return a.writeTree_.isEmpty()}function na(a,t){return Iv(ge(),a.writeTree_,t)}function Iv(a,t,i){if(t.value!=null)return i.updateChild(a,t.value);{let l=null;return t.children.inorderTraversal((o,f)=>{o===".priority"?(U(f.value!==null,"Priority writes must always be leaf nodes"),l=f.value):i=Iv(Qe(a,o),f,i)}),!i.getChild(a).isEmpty()&&l!==null&&(i=i.updateChild(Qe(a,".priority"),l)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(a,t){return Lv(t,a)}function PC(a,t,i,l,o){U(l>a.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),a.allWrites.push({path:t,snap:i,writeId:l,visible:o}),o&&(a.visibleWrites=vl(a.visibleWrites,t,i)),a.lastWriteId=l}function GC(a,t){for(let i=0;i<a.allWrites.length;i++){const l=a.allWrites[i];if(l.writeId===t)return l}return null}function YC(a,t){const i=a.allWrites.findIndex(m=>m.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const l=a.allWrites[i];a.allWrites.splice(i,1);let o=l.visible,f=!1,h=a.allWrites.length-1;for(;o&&h>=0;){const m=a.allWrites[h];m.visible&&(h>=i&&FC(m,l.path)?o=!1:Wt(l.path,m.path)&&(f=!0)),h--}if(o){if(f)return QC(a),!0;if(l.snap)a.visibleWrites=X_(a.visibleWrites,l.path);else{const m=l.children;Tt(m,g=>{a.visibleWrites=X_(a.visibleWrites,Qe(l.path,g))})}return!0}else return!1}function FC(a,t){if(a.snap)return Wt(a.path,t);for(const i in a.children)if(a.children.hasOwnProperty(i)&&Wt(Qe(a.path,i),t))return!0;return!1}function QC(a){a.visibleWrites=Mv(a.allWrites,KC,ge()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function KC(a){return a.visible}function Mv(a,t,i){let l=en.empty();for(let o=0;o<a.length;++o){const f=a[o];if(t(f)){const h=f.path;let m;if(f.snap)Wt(i,h)?(m=Et(i,h),l=vl(l,m,f.snap)):Wt(h,i)&&(m=Et(h,i),l=vl(l,ge(),f.snap.getChild(m)));else if(f.children){if(Wt(i,h))m=Et(i,h),l=K_(l,m,f.children);else if(Wt(h,i))if(m=Et(h,i),re(m))l=K_(l,ge(),f.children);else{const g=Js(f.children,te(m));if(g){const p=g.getChild(Oe(m));l=vl(l,ge(),p)}}}else throw aa("WriteRecord should have .snap or .children")}}return l}function xv(a,t,i,l,o){if(!l&&!o){const f=ns(a.visibleWrites,t);if(f!=null)return f;{const h=yi(a.visibleWrites,t);if(Jf(h))return i;if(i==null&&!Wf(h,ge()))return null;{const m=i||X.EMPTY_NODE;return na(h,m)}}}else{const f=yi(a.visibleWrites,t);if(!o&&Jf(f))return i;if(!o&&i==null&&!Wf(f,ge()))return null;{const h=function(p){return(p.visible||o)&&(!l||!~l.indexOf(p.writeId))&&(Wt(p.path,t)||Wt(t,p.path))},m=Mv(a.allWrites,h,t),g=i||X.EMPTY_NODE;return na(m,g)}}}function XC(a,t,i){let l=X.EMPTY_NODE;const o=ns(a.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(ze,(f,h)=>{l=l.updateImmediateChild(f,h)}),l;if(i){const f=yi(a.visibleWrites,t);return i.forEachChild(ze,(h,m)=>{const g=na(yi(f,new Re(h)),m);l=l.updateImmediateChild(h,g)}),Z_(f).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}else{const f=yi(a.visibleWrites,t);return Z_(f).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}}function ZC(a,t,i,l,o){U(l||o,"Either existingEventSnap or existingServerSnap must exist");const f=Qe(t,i);if(Wf(a.visibleWrites,f))return null;{const h=yi(a.visibleWrites,f);return Jf(h)?o.getChild(i):na(h,o.getChild(i))}}function WC(a,t,i,l){const o=Qe(t,i),f=ns(a.visibleWrites,o);if(f!=null)return f;if(l.isCompleteForChild(i)){const h=yi(a.visibleWrites,o);return na(h,l.getNode().getImmediateChild(i))}else return null}function JC(a,t){return ns(a.visibleWrites,t)}function $C(a,t,i,l,o,f,h){let m;const g=yi(a.visibleWrites,t),p=ns(g,ge());if(p!=null)m=p;else if(i!=null)m=na(g,i);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const E=[],y=h.getCompare(),S=f?m.getReverseIteratorFrom(l,h):m.getIteratorFrom(l,h);let L=S.getNext();for(;L&&E.length<o;)y(L,l)!==0&&E.push(L),L=S.getNext();return E}else return[]}function eA(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function wo(a,t,i,l){return xv(a.writeTree,a.treePath,t,i,l)}function Oh(a,t){return XC(a.writeTree,a.treePath,t)}function W_(a,t,i,l){return ZC(a.writeTree,a.treePath,t,i,l)}function No(a,t){return JC(a.writeTree,Qe(a.treePath,t))}function tA(a,t,i,l,o,f){return $C(a.writeTree,a.treePath,t,i,l,o,f)}function Dh(a,t,i){return WC(a.writeTree,a.treePath,t,i)}function kv(a,t){return Lv(Qe(a.treePath,t),a.writeTree)}function Lv(a,t){return{treePath:a,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,l=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(l!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(l);if(o){const f=o.type;if(i==="child_added"&&f==="child_removed")this.changeMap.set(l,Rl(l,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&f==="child_added")this.changeMap.delete(l);else if(i==="child_removed"&&f==="child_changed")this.changeMap.set(l,Nl(l,o.oldSnap));else if(i==="child_changed"&&f==="child_added")this.changeMap.set(l,ta(l,t.snapshotNode));else if(i==="child_changed"&&f==="child_changed")this.changeMap.set(l,Rl(l,t.snapshotNode,o.oldSnap));else throw aa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(l,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{getCompleteChild(t){return null}getChildAfterChild(t,i,l){return null}}const Uv=new iA;class Ih{constructor(t,i,l=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=l}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const l=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dh(this.writes_,t,l)}}getChildAfterChild(t,i,l){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:es(this.viewCache_),f=tA(this.writes_,o,i,1,l,t);return f.length===0?null:f[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(a){return{filter:a}}function aA(a,t){U(t.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function lA(a,t,i,l,o){const f=new nA;let h,m;if(i.type===Jt.OVERWRITE){const p=i;p.source.fromUser?h=$f(a,t,p.path,p.snap,l,o,f):(U(p.source.fromServer,"Unknown source."),m=p.source.tagged||t.serverCache.isFiltered()&&!re(p.path),h=Ro(a,t,p.path,p.snap,l,o,m,f))}else if(i.type===Jt.MERGE){const p=i;p.source.fromUser?h=oA(a,t,p.path,p.children,l,o,f):(U(p.source.fromServer,"Unknown source."),m=p.source.tagged||t.serverCache.isFiltered(),h=eh(a,t,p.path,p.children,l,o,m,f))}else if(i.type===Jt.ACK_USER_WRITE){const p=i;p.revert?h=fA(a,t,p.path,l,o,f):h=uA(a,t,p.path,p.affectedTree,l,o,f)}else if(i.type===Jt.LISTEN_COMPLETE)h=cA(a,t,i.path,l,f);else throw aa("Unknown operation type: "+i.type);const g=f.getChanges();return rA(t,h,g),{viewCache:h,changes:g}}function rA(a,t,i){const l=t.eventCache;if(l.isFullyInitialized()){const o=l.getNode().isLeafNode()||l.getNode().isEmpty(),f=Zf(a);(i.length>0||!a.eventCache.isFullyInitialized()||o&&!l.getNode().equals(f)||!l.getNode().getPriority().equals(f.getPriority()))&&i.push(Nv(Zf(t)))}}function zv(a,t,i,l,o,f){const h=t.eventCache;if(No(l,i)!=null)return t;{let m,g;if(re(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=es(t),E=p instanceof X?p:X.EMPTY_NODE,y=Oh(l,E);m=a.filter.updateFullNode(t.eventCache.getNode(),y,f)}else{const p=wo(l,es(t));m=a.filter.updateFullNode(t.eventCache.getNode(),p,f)}else{const p=te(i);if(p===".priority"){U(Ei(i)===1,"Can't have a priority with additional path components");const E=h.getNode();g=t.serverCache.getNode();const y=W_(l,i,E,g);y!=null?m=a.filter.updatePriority(E,y):m=h.getNode()}else{const E=Oe(i);let y;if(h.isCompleteForChild(p)){g=t.serverCache.getNode();const S=W_(l,i,h.getNode(),g);S!=null?y=h.getNode().getImmediateChild(p).updateChild(E,S):y=h.getNode().getImmediateChild(p)}else y=Dh(l,p,t.serverCache);y!=null?m=a.filter.updateChild(h.getNode(),p,y,E,o,f):m=h.getNode()}}return yl(t,m,h.isFullyInitialized()||re(i),a.filter.filtersNodes())}}function Ro(a,t,i,l,o,f,h,m){const g=t.serverCache;let p;const E=h?a.filter:a.filter.getIndexedFilter();if(re(i))p=E.updateFullNode(g.getNode(),l,null);else if(E.filtersNodes()&&!g.isFiltered()){const L=g.getNode().updateChild(i,l);p=E.updateFullNode(g.getNode(),L,null)}else{const L=te(i);if(!g.isCompleteForPath(i)&&Ei(i)>1)return t;const z=Oe(i),he=g.getNode().getImmediateChild(L).updateChild(z,l);L===".priority"?p=E.updatePriority(g.getNode(),he):p=E.updateChild(g.getNode(),L,he,z,Uv,null)}const y=Dv(t,p,g.isFullyInitialized()||re(i),E.filtersNodes()),S=new Ih(o,y,f);return zv(a,y,i,o,S,m)}function $f(a,t,i,l,o,f,h){const m=t.eventCache;let g,p;const E=new Ih(o,t,f);if(re(i))p=a.filter.updateFullNode(t.eventCache.getNode(),l,h),g=yl(t,p,!0,a.filter.filtersNodes());else{const y=te(i);if(y===".priority")p=a.filter.updatePriority(t.eventCache.getNode(),l),g=yl(t,p,m.isFullyInitialized(),m.isFiltered());else{const S=Oe(i),L=m.getNode().getImmediateChild(y);let z;if(re(S))z=l;else{const G=E.getCompleteChild(y);G!=null?yv(S)===".priority"&&G.getChild(Ev(S)).isEmpty()?z=G:z=G.updateChild(S,l):z=X.EMPTY_NODE}if(L.equals(z))g=t;else{const G=a.filter.updateChild(m.getNode(),y,z,S,E,h);g=yl(t,G,m.isFullyInitialized(),a.filter.filtersNodes())}}}return g}function J_(a,t){return a.eventCache.isCompleteForChild(t)}function oA(a,t,i,l,o,f,h){let m=t;return l.foreach((g,p)=>{const E=Qe(i,g);J_(t,te(E))&&(m=$f(a,m,E,p,o,f,h))}),l.foreach((g,p)=>{const E=Qe(i,g);J_(t,te(E))||(m=$f(a,m,E,p,o,f,h))}),m}function $_(a,t,i){return i.foreach((l,o)=>{t=t.updateChild(l,o)}),t}function eh(a,t,i,l,o,f,h,m){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let g=t,p;re(i)?p=l:p=new Me(null).setTree(i,l);const E=t.serverCache.getNode();return p.children.inorderTraversal((y,S)=>{if(E.hasChild(y)){const L=t.serverCache.getNode().getImmediateChild(y),z=$_(a,L,S);g=Ro(a,g,new Re(y),z,o,f,h,m)}}),p.children.inorderTraversal((y,S)=>{const L=!t.serverCache.isCompleteForChild(y)&&S.value===null;if(!E.hasChild(y)&&!L){const z=t.serverCache.getNode().getImmediateChild(y),G=$_(a,z,S);g=Ro(a,g,new Re(y),G,o,f,h,m)}}),g}function uA(a,t,i,l,o,f,h){if(No(o,i)!=null)return t;const m=t.serverCache.isFiltered(),g=t.serverCache;if(l.value!=null){if(re(i)&&g.isFullyInitialized()||g.isCompleteForPath(i))return Ro(a,t,i,g.getNode().getChild(i),o,f,m,h);if(re(i)){let p=new Me(null);return g.getNode().forEachChild(Qs,(E,y)=>{p=p.set(new Re(E),y)}),eh(a,t,i,p,o,f,m,h)}else return t}else{let p=new Me(null);return l.foreach((E,y)=>{const S=Qe(i,E);g.isCompleteForPath(S)&&(p=p.set(E,g.getNode().getChild(S)))}),eh(a,t,i,p,o,f,m,h)}}function cA(a,t,i,l,o){const f=t.serverCache,h=Dv(t,f.getNode(),f.isFullyInitialized()||re(i),f.isFiltered());return zv(a,h,i,l,Uv,o)}function fA(a,t,i,l,o,f){let h;if(No(l,i)!=null)return t;{const m=new Ih(l,t,o),g=t.eventCache.getNode();let p;if(re(i)||te(i)===".priority"){let E;if(t.serverCache.isFullyInitialized())E=wo(l,es(t));else{const y=t.serverCache.getNode();U(y instanceof X,"serverChildren would be complete if leaf node"),E=Oh(l,y)}E=E,p=a.filter.updateFullNode(g,E,f)}else{const E=te(i);let y=Dh(l,E,t.serverCache);y==null&&t.serverCache.isCompleteForChild(E)&&(y=g.getImmediateChild(E)),y!=null?p=a.filter.updateChild(g,E,y,Oe(i),m,f):t.eventCache.getNode().hasChild(E)?p=a.filter.updateChild(g,E,X.EMPTY_NODE,Oe(i),m,f):p=g,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=wo(l,es(t)),h.isLeafNode()&&(p=a.filter.updateFullNode(p,h,f)))}return h=t.serverCache.isFullyInitialized()||No(l,ge())!=null,yl(t,p,h,a.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const l=this.query_._queryParams,o=new Ch(l.getIndex()),f=IC(l);this.processor_=sA(f);const h=i.serverCache,m=i.eventCache,g=o.updateFullNode(X.EMPTY_NODE,h.getNode(),null),p=f.updateFullNode(X.EMPTY_NODE,m.getNode(),null),E=new $i(g,h.isFullyInitialized(),o.filtersNodes()),y=new $i(p,m.isFullyInitialized(),f.filtersNodes());this.viewCache_=Vo(y,E),this.eventGenerator_=new HC(this.query_)}get query(){return this.query_}}function dA(a){return a.viewCache_.serverCache.getNode()}function mA(a,t){const i=es(a.viewCache_);return i&&(a.query._queryParams.loadsAllData()||!re(t)&&!i.getImmediateChild(te(t)).isEmpty())?i.getChild(t):null}function ey(a){return a.eventRegistrations_.length===0}function pA(a,t){a.eventRegistrations_.push(t)}function ty(a,t,i){const l=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=a.query._path;a.eventRegistrations_.forEach(f=>{const h=f.createCancelEvent(i,o);h&&l.push(h)})}if(t){let o=[];for(let f=0;f<a.eventRegistrations_.length;++f){const h=a.eventRegistrations_[f];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(a.eventRegistrations_.slice(f+1));break}}a.eventRegistrations_=o}else a.eventRegistrations_=[];return l}function ny(a,t,i,l){t.type===Jt.MERGE&&t.source.queryId!==null&&(U(es(a.viewCache_),"We should always have a full cache before handling merges"),U(Zf(a.viewCache_),"Missing event cache, even though we have a server cache"));const o=a.viewCache_,f=lA(a.processor_,o,t,i,l);return aA(a.processor_,f.viewCache),U(f.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=f.viewCache,Hv(a,f.changes,f.viewCache.eventCache.getNode(),null)}function gA(a,t){const i=a.viewCache_.eventCache,l=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(ze,(f,h)=>{l.push(ta(f,h))}),i.isFullyInitialized()&&l.push(Nv(i.getNode())),Hv(a,l,i.getNode(),t)}function Hv(a,t,i,l){const o=l?[l]:a.eventRegistrations_;return BC(a.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;class _A{constructor(){this.views=new Map}}function yA(a){U(!Oo,"__referenceConstructor has already been defined"),Oo=a}function vA(){return U(Oo,"Reference.ts has not been loaded"),Oo}function EA(a){return a.views.size===0}function Mh(a,t,i,l){const o=t.source.queryId;if(o!==null){const f=a.views.get(o);return U(f!=null,"SyncTree gave us an op for an invalid query."),ny(f,t,i,l)}else{let f=[];for(const h of a.views.values())f=f.concat(ny(h,t,i,l));return f}}function SA(a,t,i,l,o){const f=t._queryIdentifier,h=a.views.get(f);if(!h){let m=wo(i,o?l:null),g=!1;m?g=!0:l instanceof X?(m=Oh(i,l),g=!1):(m=X.EMPTY_NODE,g=!1);const p=Vo(new $i(m,g,!1),new $i(l,o,!1));return new hA(t,p)}return h}function bA(a,t,i,l,o,f){const h=SA(a,t,l,o,f);return a.views.has(t._queryIdentifier)||a.views.set(t._queryIdentifier,h),pA(h,i),gA(h,i)}function TA(a,t,i,l){const o=t._queryIdentifier,f=[];let h=[];const m=Si(a);if(o==="default")for(const[g,p]of a.views.entries())h=h.concat(ty(p,i,l)),ey(p)&&(a.views.delete(g),p.query._queryParams.loadsAllData()||f.push(p.query));else{const g=a.views.get(o);g&&(h=h.concat(ty(g,i,l)),ey(g)&&(a.views.delete(o),g.query._queryParams.loadsAllData()||f.push(g.query)))}return m&&!Si(a)&&f.push(new(vA())(t._repo,t._path)),{removed:f,events:h}}function Bv(a){const t=[];for(const i of a.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Ks(a,t){let i=null;for(const l of a.views.values())i=i||mA(l,t);return i}function jv(a,t){if(t._queryParams.loadsAllData())return Po(a);{const l=t._queryIdentifier;return a.views.get(l)}}function qv(a,t){return jv(a,t)!=null}function Si(a){return Po(a)!=null}function Po(a){for(const t of a.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;function CA(a){U(!Do,"__referenceConstructor has already been defined"),Do=a}function AA(){return U(Do,"Reference.ts has not been loaded"),Do}let wA=1;class iy{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Me(null),this.pendingWriteTree_=eA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vv(a,t,i,l,o){return PC(a.pendingWriteTree_,t,i,l,o),o?Hl(a,new Ji(Ov(),t,i)):[]}function Ki(a,t,i=!1){const l=GC(a.pendingWriteTree_,t);if(YC(a.pendingWriteTree_,t)){let f=new Me(null);return l.snap!=null?f=f.set(ge(),!0):Tt(l.children,h=>{f=f.set(new Re(h),!0)}),Hl(a,new Ao(l.path,f,i))}else return[]}function Go(a,t,i){return Hl(a,new Ji(wh(),t,i))}function NA(a,t,i){const l=Me.fromObject(i);return Hl(a,new Il(wh(),t,l))}function RA(a,t){return Hl(a,new Dl(wh(),t))}function OA(a,t,i){const l=kh(a,i);if(l){const o=Lh(l),f=o.path,h=o.queryId,m=Et(f,t),g=new Dl(Nh(h),m);return Uh(a,f,g)}else return[]}function th(a,t,i,l,o=!1){const f=t._path,h=a.syncPointTree_.get(f);let m=[];if(h&&(t._queryIdentifier==="default"||qv(h,t))){const g=TA(h,t,i,l);EA(h)&&(a.syncPointTree_=a.syncPointTree_.remove(f));const p=g.removed;if(m=g.events,!o){const E=p.findIndex(S=>S._queryParams.loadsAllData())!==-1,y=a.syncPointTree_.findOnPath(f,(S,L)=>Si(L));if(E&&!y){const S=a.syncPointTree_.subtree(f);if(!S.isEmpty()){const L=MA(S);for(let z=0;z<L.length;++z){const G=L[z],he=G.query,ye=Yv(a,G);a.listenProvider_.startListening(El(he),Io(a,he),ye.hashFn,ye.onComplete)}}}!y&&p.length>0&&!l&&(E?a.listenProvider_.stopListening(El(t),null):p.forEach(S=>{const L=a.queryToTagMap.get(Yo(S));a.listenProvider_.stopListening(El(S),L)}))}xA(a,p)}return m}function DA(a,t,i,l){const o=kh(a,l);if(o!=null){const f=Lh(o),h=f.path,m=f.queryId,g=Et(h,t),p=new Ji(Nh(m),g,i);return Uh(a,h,p)}else return[]}function IA(a,t,i,l){const o=kh(a,l);if(o){const f=Lh(o),h=f.path,m=f.queryId,g=Et(h,t),p=Me.fromObject(i),E=new Il(Nh(m),g,p);return Uh(a,h,E)}else return[]}function sy(a,t,i,l=!1){const o=t._path;let f=null,h=!1;a.syncPointTree_.foreachOnPath(o,(S,L)=>{const z=Et(S,o);f=f||Ks(L,z),h=h||Si(L)});let m=a.syncPointTree_.get(o);m?(h=h||Si(m),f=f||Ks(m,ge())):(m=new _A,a.syncPointTree_=a.syncPointTree_.set(o,m));let g;f!=null?g=!0:(g=!1,f=X.EMPTY_NODE,a.syncPointTree_.subtree(o).foreachChild((L,z)=>{const G=Ks(z,ge());G&&(f=f.updateImmediateChild(L,G))}));const p=qv(m,t);if(!p&&!t._queryParams.loadsAllData()){const S=Yo(t);U(!a.queryToTagMap.has(S),"View does not exist, but we have a tag");const L=kA();a.queryToTagMap.set(S,L),a.tagToQueryMap.set(L,S)}const E=Rh(a.pendingWriteTree_,o);let y=bA(m,t,i,E,f,g);if(!p&&!h&&!l){const S=jv(m,t);y=y.concat(LA(a,t,S))}return y}function xh(a,t,i){const o=a.pendingWriteTree_,f=a.syncPointTree_.findOnPath(t,(h,m)=>{const g=Et(h,t),p=Ks(m,g);if(p)return p});return xv(o,t,f,i,!0)}function Hl(a,t){return Pv(t,a.syncPointTree_,null,Rh(a.pendingWriteTree_,ge()))}function Pv(a,t,i,l){if(re(a.path))return Gv(a,t,i,l);{const o=t.get(ge());i==null&&o!=null&&(i=Ks(o,ge()));let f=[];const h=te(a.path),m=a.operationForChild(h),g=t.children.get(h);if(g&&m){const p=i?i.getImmediateChild(h):null,E=kv(l,h);f=f.concat(Pv(m,g,p,E))}return o&&(f=f.concat(Mh(o,a,l,i))),f}}function Gv(a,t,i,l){const o=t.get(ge());i==null&&o!=null&&(i=Ks(o,ge()));let f=[];return t.children.inorderTraversal((h,m)=>{const g=i?i.getImmediateChild(h):null,p=kv(l,h),E=a.operationForChild(h);E&&(f=f.concat(Gv(E,m,g,p)))}),o&&(f=f.concat(Mh(o,a,l,i))),f}function Yv(a,t){const i=t.query,l=Io(a,i);return{hashFn:()=>(dA(t)||X.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return l?OA(a,i._path,l):RA(a,i._path);{const f=D1(o,i);return th(a,i,null,f)}}}}function Io(a,t){const i=Yo(t);return a.queryToTagMap.get(i)}function Yo(a){return a._path.toString()+"$"+a._queryIdentifier}function kh(a,t){return a.tagToQueryMap.get(t)}function Lh(a){const t=a.indexOf("$");return U(t!==-1&&t<a.length-1,"Bad queryKey."),{queryId:a.substr(t+1),path:new Re(a.substr(0,t))}}function Uh(a,t,i){const l=a.syncPointTree_.get(t);U(l,"Missing sync point for query tag that we're tracking");const o=Rh(a.pendingWriteTree_,t);return Mh(l,i,o,null)}function MA(a){return a.fold((t,i,l)=>{if(i&&Si(i))return[Po(i)];{let o=[];return i&&(o=Bv(i)),Tt(l,(f,h)=>{o=o.concat(h)}),o}})}function El(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(AA())(a._repo,a._path):a}function xA(a,t){for(let i=0;i<t.length;++i){const l=t[i];if(!l._queryParams.loadsAllData()){const o=Yo(l),f=a.queryToTagMap.get(o);a.queryToTagMap.delete(o),a.tagToQueryMap.delete(f)}}}function kA(){return wA++}function LA(a,t,i){const l=t._path,o=Io(a,t),f=Yv(a,i),h=a.listenProvider_.startListening(El(t),o,f.hashFn,f.onComplete),m=a.syncPointTree_.subtree(l);if(o)U(!Si(m.value),"If we're adding a query, it shouldn't be shadowed");else{const g=m.fold((p,E,y)=>{if(!re(p)&&E&&Si(E))return[Po(E).query];{let S=[];return E&&(S=S.concat(Bv(E).map(L=>L.query))),Tt(y,(L,z)=>{S=S.concat(z)}),S}});for(let p=0;p<g.length;++p){const E=g[p];a.listenProvider_.stopListening(El(E),Io(a,E))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new zh(i)}node(){return this.node_}}class Hh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Qe(this.path_,t);return new Hh(this.syncTree_,i)}node(){return xh(this.syncTree_,this.path_)}}const UA=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},ay=function(a,t,i){if(!a||typeof a!="object")return a;if(U(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return zA(a[".sv"],t,i);if(typeof a[".sv"]=="object")return HA(a[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},zA=function(a,t,i){switch(a){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+a)}},HA=function(a,t,i){a.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const l=a.increment;typeof l!="number"&&U(!1,"Unexpected increment value: "+l);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return l;const h=o.getValue();return typeof h!="number"?l:h+l},BA=function(a,t,i,l){return Bh(t,new Hh(i,a),l)},Fv=function(a,t,i){return Bh(a,new zh(t),i)};function Bh(a,t,i){const l=a.getPriority().val(),o=ay(l,t.getImmediateChild(".priority"),i);let f;if(a.isLeafNode()){const h=a,m=ay(h.getValue(),t,i);return m!==h.getValue()||o!==h.getPriority().val()?new Ze(m,at(o)):a}else{const h=a;return f=h,o!==h.getPriority().val()&&(f=f.updatePriority(new Ze(o))),h.forEachChild(ze,(m,g)=>{const p=Bh(g,t.getImmediateChild(m),i);p!==g&&(f=f.updateImmediateChild(m,p))}),f}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t="",i=null,l={children:{},childCount:0}){this.name=t,this.parent=i,this.node=l}}function qh(a,t){let i=t instanceof Re?t:new Re(t),l=a,o=te(i);for(;o!==null;){const f=Js(l.node.children,o)||{children:{},childCount:0};l=new jh(o,l,f),i=Oe(i),o=te(i)}return l}function fa(a){return a.node.value}function Qv(a,t){a.node.value=t,nh(a)}function Kv(a){return a.node.childCount>0}function jA(a){return fa(a)===void 0&&!Kv(a)}function Fo(a,t){Tt(a.node.children,(i,l)=>{t(new jh(i,a,l))})}function Xv(a,t,i,l){i&&t(a),Fo(a,o=>{Xv(o,t,!0)})}function qA(a,t,i){let l=a.parent;for(;l!==null;){if(t(l))return!0;l=l.parent}return!1}function Bl(a){return new Re(a.parent===null?a.name:Bl(a.parent)+"/"+a.name)}function nh(a){a.parent!==null&&VA(a.parent,a.name,a)}function VA(a,t,i){const l=jA(i),o=Hn(a.node.children,t);l&&o?(delete a.node.children[t],a.node.childCount--,nh(a)):!l&&!o&&(a.node.children[t]=i.node,a.node.childCount++,nh(a))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/[\[\].#$\/\u0000-\u001F\u007F]/,GA=/[\[\].#$\u0000-\u001F\u007F]/,kf=10*1024*1024,Zv=function(a){return typeof a=="string"&&a.length!==0&&!PA.test(a)},Wv=function(a){return typeof a=="string"&&a.length!==0&&!GA.test(a)},YA=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),Wv(a)},FA=function(a,t,i,l){Vh(dh(a,"value"),t,i)},Vh=function(a,t,i){const l=i instanceof Re?new uC(i,a):i;if(t===void 0)throw new Error(a+"contains undefined "+Fi(l));if(typeof t=="function")throw new Error(a+"contains a function "+Fi(l)+" with contents = "+t.toString());if(Wy(t))throw new Error(a+"contains "+t.toString()+" "+Fi(l));if(typeof t=="string"&&t.length>kf/3&&jo(t)>kf)throw new Error(a+"contains a string greater than "+kf+" utf8 bytes "+Fi(l)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,f=!1;if(Tt(t,(h,m)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(f=!0,!Zv(h)))throw new Error(a+" contains an invalid key ("+h+") "+Fi(l)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cC(l,h),Vh(a,m,l),fC(l)}),o&&f)throw new Error(a+' contains ".value" child '+Fi(l)+" in addition to actual children.")}},Jv=function(a,t,i,l){if(!Wv(i))throw new Error(dh(a,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},QA=function(a,t,i,l){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Jv(a,t,i)},$v=function(a,t){if(te(t)===".info")throw new Error(a+" failed = Can't modify data under /.info/")},KA=function(a,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Zv(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!YA(i))throw new Error(dh(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ph(a,t){let i=null;for(let l=0;l<t.length;l++){const o=t[l],f=o.getPath();i!==null&&!Sh(f,i.path)&&(a.eventLists_.push(i),i=null),i===null&&(i={events:[],path:f}),i.events.push(o)}i&&a.eventLists_.push(i)}function e0(a,t,i){Ph(a,i),t0(a,l=>Sh(l,t))}function Un(a,t,i){Ph(a,i),t0(a,l=>Wt(l,t)||Wt(t,l))}function t0(a,t){a.recursionDepth_++;let i=!0;for(let l=0;l<a.eventLists_.length;l++){const o=a.eventLists_[l];if(o){const f=o.path;t(f)?(ZA(a.eventLists_[l]),a.eventLists_[l]=null):i=!1}}i&&(a.eventLists_=[]),a.recursionDepth_--}function ZA(a){for(let t=0;t<a.events.length;t++){const i=a.events[t];if(i!==null){a.events[t]=null;const l=i.getEventRunner();gl&&ot("event: "+i.toString()),ca(l)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="repo_interrupt",JA=25;class $A{constructor(t,i,l,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=l,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Co(),this.transactionQueueTree_=new jh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ew(a,t,i){if(a.stats_=vh(a.repoInfo_),a.forceRestClient_||k1())a.server_=new To(a.repoInfo_,(l,o,f,h)=>{ly(a,l,o,f,h)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>ry(a,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(i)}catch(l){throw new Error("Invalid authOverride provided: "+l)}}a.persistentConnection_=new xn(a.repoInfo_,t,(l,o,f,h)=>{ly(a,l,o,f,h)},l=>{ry(a,l)},l=>{nw(a,l)},a.authTokenProvider_,a.appCheckProvider_,i),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(l=>{a.server_.refreshAuthToken(l)}),a.appCheckProvider_.addTokenChangeListener(l=>{a.server_.refreshAppCheckToken(l.token)}),a.statsReporter_=B1(a.repoInfo_,()=>new zC(a.stats_,a.server_)),a.infoData_=new MC,a.infoSyncTree_=new iy({startListening:(l,o,f,h)=>{let m=[];const g=a.infoData_.getNode(l._path);return g.isEmpty()||(m=Go(a.infoSyncTree_,l._path,g),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),Yh(a,"connected",!1),a.serverSyncTree_=new iy({startListening:(l,o,f,h)=>(a.server_.listen(l,f,o,(m,g)=>{const p=h(m,g);Un(a.eventQueue_,l._path,p)}),[]),stopListening:(l,o)=>{a.server_.unlisten(l,o)}})}function tw(a){const i=a.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Gh(a){return UA({timestamp:tw(a)})}function ly(a,t,i,l,o){a.dataUpdateCount++;const f=new Re(t);i=a.interceptServerDataCallback_?a.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(l){const g=yo(i,p=>at(p));h=IA(a.serverSyncTree_,f,g,o)}else{const g=at(i);h=DA(a.serverSyncTree_,f,g,o)}else if(l){const g=yo(i,p=>at(p));h=NA(a.serverSyncTree_,f,g)}else{const g=at(i);h=Go(a.serverSyncTree_,f,g)}let m=f;h.length>0&&(m=Qo(a,f)),Un(a.eventQueue_,m,h)}function ry(a,t){Yh(a,"connected",t),t===!1&&sw(a)}function nw(a,t){Tt(t,(i,l)=>{Yh(a,i,l)})}function Yh(a,t,i){const l=new Re("/.info/"+t),o=at(i);a.infoData_.updateSnapshot(l,o);const f=Go(a.infoSyncTree_,l,o);Un(a.eventQueue_,l,f)}function n0(a){return a.nextWriteId_++}function iw(a,t,i,l,o){Fh(a,"set",{path:t.toString(),value:i,priority:l});const f=Gh(a),h=at(i,l),m=xh(a.serverSyncTree_,t),g=Fv(h,m,f),p=n0(a),E=Vv(a.serverSyncTree_,t,g,p,!0);Ph(a.eventQueue_,E),a.server_.put(t.toString(),h.val(!0),(S,L)=>{const z=S==="ok";z||bt("set at "+t+" failed: "+S);const G=Ki(a.serverSyncTree_,p,!z);Un(a.eventQueue_,t,G),ow(a,o,S,L)});const y=r0(a,t);Qo(a,y),Un(a.eventQueue_,y,[])}function sw(a){Fh(a,"onDisconnectEvents");const t=Gh(a),i=Co();Xf(a.onDisconnect_,ge(),(o,f)=>{const h=BA(o,f,a.serverSyncTree_,t);Rv(i,o,h)});let l=[];Xf(i,ge(),(o,f)=>{l=l.concat(Go(a.serverSyncTree_,o,f));const h=r0(a,o);Qo(a,h)}),a.onDisconnect_=Co(),Un(a.eventQueue_,ge(),l)}function aw(a,t,i){let l;te(t._path)===".info"?l=sy(a.infoSyncTree_,t,i):l=sy(a.serverSyncTree_,t,i),e0(a.eventQueue_,t._path,l)}function lw(a,t,i){let l;te(t._path)===".info"?l=th(a.infoSyncTree_,t,i):l=th(a.serverSyncTree_,t,i),e0(a.eventQueue_,t._path,l)}function rw(a){a.persistentConnection_&&a.persistentConnection_.interrupt(WA)}function Fh(a,...t){let i="";a.persistentConnection_&&(i=a.persistentConnection_.id+":"),ot(i,...t)}function ow(a,t,i,l){t&&ca(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let f=o;l&&(f+=": "+l);const h=new Error(f);h.code=o,t(h)}})}function i0(a,t,i){return xh(a.serverSyncTree_,t,i)||X.EMPTY_NODE}function Qh(a,t=a.transactionQueueTree_){if(t||Ko(a,t),fa(t)){const i=a0(a,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&uw(a,Bl(t),i)}else Kv(t)&&Fo(t,i=>{Qh(a,i)})}function uw(a,t,i){const l=i.map(p=>p.currentWriteId),o=i0(a,t,l);let f=o;const h=o.hash();for(let p=0;p<i.length;p++){const E=i[p];U(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const y=Et(t,E.path);f=f.updateChild(y,E.currentOutputSnapshotRaw)}const m=f.val(!0),g=t;a.server_.put(g.toString(),m,p=>{Fh(a,"transaction put response",{path:g.toString(),status:p});let E=[];if(p==="ok"){const y=[];for(let S=0;S<i.length;S++)i[S].status=2,E=E.concat(Ki(a.serverSyncTree_,i[S].currentWriteId)),i[S].onComplete&&y.push(()=>i[S].onComplete(null,!0,i[S].currentOutputSnapshotResolved)),i[S].unwatcher();Ko(a,qh(a.transactionQueueTree_,t)),Qh(a,a.transactionQueueTree_),Un(a.eventQueue_,t,E);for(let S=0;S<y.length;S++)ca(y[S])}else{if(p==="datastale")for(let y=0;y<i.length;y++)i[y].status===3?i[y].status=4:i[y].status=0;else{bt("transaction at "+g.toString()+" failed: "+p);for(let y=0;y<i.length;y++)i[y].status=4,i[y].abortReason=p}Qo(a,t)}},h)}function Qo(a,t){const i=s0(a,t),l=Bl(i),o=a0(a,i);return cw(a,o,l),l}function cw(a,t,i){if(t.length===0)return;const l=[];let o=[];const h=t.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<t.length;m++){const g=t[m],p=Et(i,g.path);let E=!1,y;if(U(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)E=!0,y=g.abortReason,o=o.concat(Ki(a.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=JA)E=!0,y="maxretry",o=o.concat(Ki(a.serverSyncTree_,g.currentWriteId,!0));else{const S=i0(a,g.path,h);g.currentInputSnapshot=S;const L=t[m].update(S.val());if(L!==void 0){Vh("transaction failed: Data returned ",L,g.path);let z=at(L);typeof L=="object"&&L!=null&&Hn(L,".priority")||(z=z.updatePriority(S.getPriority()));const he=g.currentWriteId,ye=Gh(a),F=Fv(z,S,ye);g.currentOutputSnapshotRaw=z,g.currentOutputSnapshotResolved=F,g.currentWriteId=n0(a),h.splice(h.indexOf(he),1),o=o.concat(Vv(a.serverSyncTree_,g.path,F,g.currentWriteId,g.applyLocally)),o=o.concat(Ki(a.serverSyncTree_,he,!0))}else E=!0,y="nodata",o=o.concat(Ki(a.serverSyncTree_,g.currentWriteId,!0))}Un(a.eventQueue_,i,o),o=[],E&&(t[m].status=2,(function(S){setTimeout(S,Math.floor(0))})(t[m].unwatcher),t[m].onComplete&&(y==="nodata"?l.push(()=>t[m].onComplete(null,!1,t[m].currentInputSnapshot)):l.push(()=>t[m].onComplete(new Error(y),!1,null))))}Ko(a,a.transactionQueueTree_);for(let m=0;m<l.length;m++)ca(l[m]);Qh(a,a.transactionQueueTree_)}function s0(a,t){let i,l=a.transactionQueueTree_;for(i=te(t);i!==null&&fa(l)===void 0;)l=qh(l,i),t=Oe(t),i=te(t);return l}function a0(a,t){const i=[];return l0(a,t,i),i.sort((l,o)=>l.order-o.order),i}function l0(a,t,i){const l=fa(t);if(l)for(let o=0;o<l.length;o++)i.push(l[o]);Fo(t,o=>{l0(a,o,i)})}function Ko(a,t){const i=fa(t);if(i){let l=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[l]=i[o],l++);i.length=l,Qv(t,i.length>0?i:void 0)}Fo(t,l=>{Ko(a,l)})}function r0(a,t){const i=Bl(s0(a,t)),l=qh(a.transactionQueueTree_,t);return qA(l,o=>{Lf(a,o)}),Lf(a,l),Xv(l,o=>{Lf(a,o)}),i}function Lf(a,t){const i=fa(t);if(i){const l=[];let o=[],f=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(f===h-1,"All SENT items should be at beginning of queue."),f=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Ki(a.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&l.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));f===-1?Qv(t,void 0):i.length=f+1,Un(a.eventQueue_,Bl(t),o);for(let h=0;h<l.length;h++)ca(l[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(a){let t="";const i=a.split("/");for(let l=0;l<i.length;l++)if(i[l].length>0){let o=i[l];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function hw(a){const t={};a.charAt(0)==="?"&&(a=a.substring(1));for(const i of a.split("&")){if(i.length===0)continue;const l=i.split("=");l.length===2?t[decodeURIComponent(l[0])]=decodeURIComponent(l[1]):bt(`Invalid query segment '${i}' in query '${a}'`)}return t}const oy=function(a,t){const i=dw(a),l=i.namespace;i.domain==="firebase.com"&&Ln(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!l||l==="undefined")&&i.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||A1();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new uv(i.host,i.secure,l,o,t,"",l!==i.subdomain),path:new Re(i.pathString)}},dw=function(a){let t="",i="",l="",o="",f="",h=!0,m="https",g=443;if(typeof a=="string"){let p=a.indexOf("//");p>=0&&(m=a.substring(0,p-1),a=a.substring(p+2));let E=a.indexOf("/");E===-1&&(E=a.length);let y=a.indexOf("?");y===-1&&(y=a.length),t=a.substring(0,Math.min(E,y)),E<y&&(o=fw(a.substring(E,y)));const S=hw(a.substring(Math.min(a.length,y)));p=t.indexOf(":"),p>=0?(h=m==="https"||m==="wss",g=parseInt(t.substring(p+1),10)):p=t.length;const L=t.slice(0,p);if(L.toLowerCase()==="localhost")i="localhost";else if(L.split(".").length<=2)i=L;else{const z=t.indexOf(".");l=t.substring(0,z).toLowerCase(),i=t.substring(z+1),f=l}"ns"in S&&(f=S.ns)}return{host:t,port:g,domain:i,subdomain:l,secure:h,scheme:m,pathString:o,namespace:f}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,i,l,o){this.eventType=t,this.eventRegistration=i,this.snapshot=l,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class pw{constructor(t,i,l){this.eventRegistration=t,this.error=i,this.path=l}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,i,l,o){this._repo=t,this._path=i,this._queryParams=l,this._orderByCalled=o}get key(){return re(this._path)?null:yv(this._path)}get ref(){return new Ti(this._repo,this._path)}get _queryIdentifier(){const t=F_(this._queryParams),i=_h(t);return i==="{}"?"default":i}get _queryObject(){return F_(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof Kh))return!1;const i=this._repo===t._repo,l=Sh(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&l&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+oC(this._path)}}class Ti extends Kh{constructor(t,i){super(t,i,new Ah,!1)}get parent(){const t=Ev(this._path);return t===null?null:new Ti(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Mo{constructor(t,i,l){this._node=t,this.ref=i,this._index=l}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Re(t),l=ih(this.ref,t);return new Mo(this._node.getChild(i),l,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(l,o)=>t(new Mo(o,ih(this.ref,l),ze)))}hasChild(t){const i=new Re(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sl(a,t){return a=Gt(a),a._checkNotDeleted("ref"),t!==void 0?ih(a._root,t):a._root}function ih(a,t){return a=Gt(a),te(a._path)===null?QA("child","path",t):Jv("child","path",t),new Ti(a._repo,Qe(a._path,t))}function _w(a){return $v("remove",a._path),o0(a,null)}function o0(a,t){a=Gt(a),$v("set",a._path),FA("set",t,a._path);const i=new Bo;return iw(a._repo,a._path,t,null,i.wrapCallback(()=>{})),i.promise}class Xh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const l=i._queryParams.getIndex();return new mw("value",this,new Mo(t.snapshotNode,new Ti(i._repo,i._path),l))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new pw(this,t,i):null}matches(t){return t instanceof Xh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function yw(a,t,i,l,o){const f=new gw(i,void 0),h=new Xh(f);return aw(a._repo,a,h),()=>lw(a._repo,a,h)}function sh(a,t,i,l){return yw(a,"value",t)}yA(Ti);CA(Ti);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="FIREBASE_DATABASE_EMULATOR_HOST",ah={};let Ew=!1;function Sw(a,t,i,l){const o=t.lastIndexOf(":"),f=t.substring(0,o),h=la(f);a.repoInfo_=new uv(t,h,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,i),l&&(a.authTokenProvider_=l)}function bw(a,t,i,l,o){let f=l||a.options.databaseURL;f===void 0&&(a.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",a.options.projectId),f=`${a.options.projectId}-default-rtdb.firebaseio.com`);let h=oy(f,o),m=h.repoInfo,g;typeof process<"u"&&R_&&(g=R_[vw]),g?(f=`http://${g}?ns=${m.namespace}`,h=oy(f,o),m=h.repoInfo):h.repoInfo.secure;const p=new U1(a.name,a.options,t);KA("Invalid Firebase Database URL",h),re(h.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const E=Cw(m,a,p,new L1(a,i));return new Aw(E,a)}function Tw(a,t){const i=ah[t];(!i||i[a.key]!==a)&&Ln(`Database ${t}(${a.repoInfo_}) has already been deleted.`),rw(a),delete i[a.key]}function Cw(a,t,i,l){let o=ah[t.name];o||(o={},ah[t.name]=o);let f=o[a.toURLString()];return f&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),f=new $A(a,Ew,i,l),o[a.toURLString()]=f,f}class Aw{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ew(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ti(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Ln("Cannot call "+t+" on a deleted database.")}}function ww(a=Yy(),t){const i=gh(a,"database").getImmediate({identifier:t});if(!i._instanceStarted){const l=Yb("database");l&&Nw(i,...l)}return i}function Nw(a,t,i,l={}){a=Gt(a),a._checkNotDeleted("useEmulator");const o=`${t}:${i}`,f=a._repoInternal;if(a._instanceStarted){if(o===a._repoInternal.repoInfo_.host&&Xi(l,f.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(f.repoInfo_.nodeAdmin)l.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new co(co.OWNER);else if(l.mockUserToken){const m=typeof l.mockUserToken=="string"?l.mockUserToken:Fb(l.mockUserToken,a.app.options.projectId);h=new co(m)}la(t)&&(Hy(t),By("Database",!0)),Sw(f,o,l,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(a){v1(oa),$s(new Zi("database",(t,{instanceIdentifier:i})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),f=t.getProvider("app-check-internal");return bw(l,o,f,i)},"PUBLIC").setMultipleInstances(!0)),_i(O_,D_,a),_i(O_,D_,"esm2020")}xn.prototype.simpleListen=function(a,t){this.sendRequest("q",{p:a},t)};xn.prototype.echo=function(a,t){this.sendRequest("echo",{d:a},t)};Rw();var Ow="firebase",Dw="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_i(Ow,Dw,"app");function u0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Iw=u0,c0=new kl("auth","Firebase",u0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new mh("@firebase/auth");function Mw(a,...t){xo.logLevel<=Ae.WARN&&xo.warn(`Auth (${oa}): ${a}`,...t)}function fo(a,...t){xo.logLevel<=Ae.ERROR&&xo.error(`Auth (${oa}): ${a}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(a,...t){throw Zh(a,...t)}function un(a,...t){return Zh(a,...t)}function f0(a,t,i){const l={...Iw(),[t]:i};return new kl("auth","Firebase",l).create(t,{appName:a.name})}function vi(a){return f0(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zh(a,...t){if(typeof a!="string"){const i=t[0],l=[...t.slice(1)];return l[0]&&(l[0].appName=a.name),a._errorFactory.create(i,...l)}return c0.create(a,...t)}function Q(a,t,...i){if(!a)throw Zh(t,...i)}function In(a){const t="INTERNAL ASSERTION FAILED: "+a;throw fo(t),new Error(t)}function zn(a,t){a||In(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){return typeof self<"u"&&self.location?.href||""}function xw(){return uy()==="http:"||uy()==="https:"}function uy(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||Zb()||"connection"in navigator)?navigator.onLine:!0}function Lw(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,i){this.shortDelay=t,this.longDelay=i,zn(i>t,"Short delay should be less than long delay!"),this.isMobile=hh()||jy()}get(){return kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(a,t){zn(a.emulator,"Emulator should always be set here");const{url:i}=a.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{static initialize(t,i,l){this.fetchImpl=t,i&&(this.headersImpl=i),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hw=new jl(3e4,6e4);function is(a,t){return a.tenantId&&!t.tenantId?{...t,tenantId:a.tenantId}:t}async function Ci(a,t,i,l,o={}){return d0(a,o,async()=>{let f={},h={};l&&(t==="GET"?h=l:f={body:JSON.stringify(l)});const m=ra({key:a.config.apiKey,...h}).slice(1),g=await a._getAdditionalHeaders();g["Content-Type"]="application/json",a.languageCode&&(g["X-Firebase-Locale"]=a.languageCode);const p={method:t,headers:g,...f};return Xb()||(p.referrerPolicy="no-referrer"),a.emulatorConfig&&la(a.emulatorConfig.host)&&(p.credentials="include"),h0.fetch()(await m0(a,a.config.apiHost,i,m),p)})}async function d0(a,t,i){a._canInitEmulator=!1;const l={...Uw,...t};try{const o=new jw(a),f=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await f.json();if("needConfirmation"in h)throw uo(a,"account-exists-with-different-credential",h);if(f.ok&&!("errorMessage"in h))return h;{const m=f.ok?h.errorMessage:h.error.message,[g,p]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(a,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw uo(a,"email-already-in-use",h);if(g==="USER_DISABLED")throw uo(a,"user-disabled",h);const E=l[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw f0(a,E,p);tn(a,E)}}catch(o){if(o instanceof bi)throw o;tn(a,"network-request-failed",{message:String(o)})}}async function Xo(a,t,i,l,o={}){const f=await Ci(a,t,i,l,o);return"mfaPendingCredential"in f&&tn(a,"multi-factor-auth-required",{_serverResponse:f}),f}async function m0(a,t,i,l){const o=`${t}${i}?${l}`,f=a,h=f.config.emulator?Wh(a.config,o):`${a.config.apiScheme}://${o}`;return zw.includes(i)&&(await f._persistenceManagerAvailable,f._getPersistenceType()==="COOKIE")?f._getPersistence()._getFinalTarget(h).toString():h}function Bw(a){switch(a){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,l)=>{this.timer=setTimeout(()=>l(un(this.auth,"network-request-failed")),Hw.get())})}}function uo(a,t,i){const l={appName:a.name};i.email&&(l.email=i.email),i.phoneNumber&&(l.phoneNumber=i.phoneNumber);const o=un(a,t,l);return o.customData._tokenResponse=i,o}function cy(a){return a!==void 0&&a.enterprise!==void 0}class qw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return Bw(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vw(a,t){return Ci(a,"GET","/v2/recaptchaConfig",is(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(a,t){return Ci(a,"POST","/v1/accounts:delete",t)}async function ko(a,t){return Ci(a,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(a){if(a)try{const t=new Date(Number(a));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Gw(a,t=!1){const i=Gt(a),l=await i.getIdToken(t),o=Jh(l);Q(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const f=typeof o.firebase=="object"?o.firebase:void 0,h=f?.sign_in_provider;return{claims:o,token:l,authTime:bl(Uf(o.auth_time)),issuedAtTime:bl(Uf(o.iat)),expirationTime:bl(Uf(o.exp)),signInProvider:h||null,signInSecondFactor:f?.sign_in_second_factor||null}}function Uf(a){return Number(a)*1e3}function Jh(a){const[t,i,l]=a.split(".");if(t===void 0||i===void 0||l===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const o=_o(i);return o?JSON.parse(o):(fo("Failed to decode base64 JWT payload"),null)}catch(o){return fo("Caught error parsing JWT payload as JSON",o?.toString()),null}}function fy(a){const t=Jh(a);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(a,t,i=!1){if(i)return t;try{return await t}catch(l){throw l instanceof bi&&Yw(l)&&a.auth.currentUser===a&&await a.auth.signOut(),l}}function Yw({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const l=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(a){const t=a.auth,i=await a.getIdToken(),l=await Ml(a,ko(t,{idToken:i}));Q(l?.users.length,t,"internal-error");const o=l.users[0];a._notifyReloadListener(o);const f=o.providerUserInfo?.length?p0(o.providerUserInfo):[],h=Kw(a.providerData,f),m=a.isAnonymous,g=!(a.email&&o.passwordHash)&&!h?.length,p=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new rh(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(a,E)}async function Qw(a){const t=Gt(a);await Lo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Kw(a,t){return[...a.filter(l=>!t.some(o=>o.providerId===l.providerId)),...t]}function p0(a){return a.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(a,t){const i=await d0(a,{},async()=>{const l=ra({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:f}=a.config,h=await m0(a,o,"/v1/token",`key=${f}`),m=await a._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:l};return a.emulatorConfig&&la(a.emulatorConfig.host)&&(g.credentials="include"),h0.fetch()(h,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Zw(a,t){return Ci(a,"POST","/v2/accounts:revokeToken",is(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const i=fy(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:l,refreshToken:o,expiresIn:f}=await Xw(t,i);this.updateTokensAndExpiration(l,o,Number(f))}updateTokensAndExpiration(t,i,l){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(t,i){const{refreshToken:l,accessToken:o,expirationTime:f}=i,h=new Xs;return l&&(Q(typeof l=="string","internal-error",{appName:t}),h.refreshToken=l),o&&(Q(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),f&&(Q(typeof f=="number","internal-error",{appName:t}),h.expirationTime=f),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(a,t){Q(typeof a=="string"||typeof a>"u","internal-error",{appName:t})}class $t{constructor({uid:t,auth:i,stsTokenManager:l,...o}){this.providerId="firebase",this.proactiveRefresh=new Fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const i=await Ml(this,this.stsTokenManager.getToken(this.auth,t));return Q(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return Gw(this,t)}reload(){return Qw(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new $t({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let l=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),l=!0),i&&await Lo(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(vi(this.auth));const t=await this.getIdToken();return await Ml(this,Pw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const l=i.displayName??void 0,o=i.email??void 0,f=i.phoneNumber??void 0,h=i.photoURL??void 0,m=i.tenantId??void 0,g=i._redirectEventId??void 0,p=i.createdAt??void 0,E=i.lastLoginAt??void 0,{uid:y,emailVerified:S,isAnonymous:L,providerData:z,stsTokenManager:G}=i;Q(y&&G,t,"internal-error");const he=Xs.fromJSON(this.name,G);Q(typeof y=="string",t,"internal-error"),ci(l,t.name),ci(o,t.name),Q(typeof S=="boolean",t,"internal-error"),Q(typeof L=="boolean",t,"internal-error"),ci(f,t.name),ci(h,t.name),ci(m,t.name),ci(g,t.name),ci(p,t.name),ci(E,t.name);const ye=new $t({uid:y,auth:t,email:o,emailVerified:S,displayName:l,isAnonymous:L,photoURL:h,phoneNumber:f,tenantId:m,stsTokenManager:he,createdAt:p,lastLoginAt:E});return z&&Array.isArray(z)&&(ye.providerData=z.map(F=>({...F}))),g&&(ye._redirectEventId=g),ye}static async _fromIdTokenResponse(t,i,l=!1){const o=new Xs;o.updateFromServerResponse(i);const f=new $t({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:l});return await Lo(f),f}static async _fromGetAccountInfoResponse(t,i,l){const o=i.users[0];Q(o.localId!==void 0,"internal-error");const f=o.providerUserInfo!==void 0?p0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!f?.length,m=new Xs;m.updateFromIdToken(l);const g=new $t({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new rh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!f?.length};return Object.assign(g,p),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new Map;function Mn(a){zn(a instanceof Function,"Expected a class definition");let t=hy.get(a);return t?(zn(t instanceof a,"Instance stored in cache mismatched with class"),t):(t=new a,hy.set(a,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}g0.type="NONE";const dy=g0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(a,t,i){return`firebase:${a}:${t}:${i}`}class Zs{constructor(t,i,l){this.persistence=t,this.auth=i,this.userKey=l;const{config:o,name:f}=this.auth;this.fullUserKey=ho(this.userKey,o.apiKey,f),this.fullPersistenceKey=ho("persistence",o.apiKey,f),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await ko(this.auth,{idToken:t}).catch(()=>{});return i?$t._fromGetAccountInfoResponse(this.auth,i,t):null}return $t._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,l="authUser"){if(!i.length)return new Zs(Mn(dy),t,l);const o=(await Promise.all(i.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let f=o[0]||Mn(dy);const h=ho(l,t.config.apiKey,t.name);let m=null;for(const p of i)try{const E=await p._get(h);if(E){let y;if(typeof E=="string"){const S=await ko(t,{idToken:E}).catch(()=>{});if(!S)break;y=await $t._fromGetAccountInfoResponse(t,S,E)}else y=$t._fromJSON(t,E);p!==f&&(m=y),f=p;break}}catch{}const g=o.filter(p=>p._shouldAllowMigration);return!f._shouldAllowMigration||!g.length?new Zs(f,t,l):(f=g[0],m&&await f._set(h,m.toJSON()),await Promise.all(i.map(async p=>{if(p!==f)try{await p._remove(h)}catch{}})),new Zs(f,t,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(a){const t=a.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(E0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(b0(t))return"Blackberry";if(T0(t))return"Webos";if(y0(t))return"Safari";if((t.includes("chrome/")||v0(t))&&!t.includes("edge/"))return"Chrome";if(S0(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=a.match(i);if(l?.length===2)return l[1]}return"Other"}function _0(a=ft()){return/firefox\//i.test(a)}function y0(a=ft()){const t=a.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function v0(a=ft()){return/crios\//i.test(a)}function E0(a=ft()){return/iemobile/i.test(a)}function S0(a=ft()){return/android/i.test(a)}function b0(a=ft()){return/blackberry/i.test(a)}function T0(a=ft()){return/webos/i.test(a)}function $h(a=ft()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function Ww(a=ft()){return $h(a)&&!!window.navigator?.standalone}function Jw(){return Wb()&&document.documentMode===10}function C0(a=ft()){return $h(a)||S0(a)||T0(a)||b0(a)||/windows phone/i.test(a)||E0(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(a,t=[]){let i;switch(a){case"Browser":i=my(ft());break;case"Worker":i=`${my(ft())}-${a}`;break;default:i=a}const l=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${oa}/${l}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const l=f=>new Promise((h,m)=>{try{const g=t(f);h(g)}catch(g){m(g)}});l.onAbort=i,this.queue.push(l);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const l of this.queue)await l(t),l.onAbort&&i.push(l.onAbort)}catch(l){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(a,t={}){return Ci(a,"GET","/v2/passwordPolicy",is(a,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=6;class nN{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??tN,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const l=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;l&&(i.meetsMinPasswordLength=t.length>=l),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let l;for(let o=0;o<t.length;o++)l=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(t,i,l,o,f){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(t,i,l,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=l,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new py(this),this.idTokenSubscription=new py(this),this.beforeStateQueue=new $w(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(f=>this._resolvePersistenceManagerAvailable=f)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Mn(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Zs.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await ko(this,{idToken:t}),l=await $t._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(l)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Xt(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let l=i,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=this.redirectUser?._redirectEventId,h=l?._redirectEventId,m=await this.tryRedirectSignIn(t);(!f||f===h)&&m?.user&&(l=m.user,o=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(l)}catch(f){l=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Lo(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Lw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Xt(this.app))return Promise.reject(vi(this));const i=t?Gt(t):null;return i&&Q(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Xt(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await eN(this),i=new nN(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new kl("auth","Firebase",t())}onAuthStateChanged(t,i,l){return this.registerStateListener(this.authStateSubscription,t,i,l)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,l){return this.registerStateListener(this.idTokenSubscription,t,i,l)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const l=this.onAuthStateChanged(()=>{l(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(l.tenantId=this.tenantId),await Zw(this,l)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const l=await this.getOrInitRedirectPersistenceManager(i);return t===null?l.removeCurrentUser():l.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Mn(t)||this._popupRedirectResolver;Q(i,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Mn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,l,o){if(this._deleted)return()=>{};const f=typeof i=="function"?i:i.next.bind(i);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(m,this,"internal-error"),m.then(()=>{h||f(this.currentUser)}),typeof i=="function"){const g=t.addObserver(i,l,o);return()=>{h=!0,g()}}else{const g=t.addObserver(i);return()=>{h=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){if(Xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Mw(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ha(a){return Gt(a)}class py{constructor(t){this.auth=t,this.observer=null,this.addObserver=rT(i=>this.observer=i)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sN(a){Zo=a}function w0(a){return Zo.loadJS(a)}function aN(){return Zo.recaptchaEnterpriseScript}function lN(){return Zo.gapiScript}function rN(a){return`__${a}${Math.floor(Math.random()*1e6)}`}class oN{constructor(){this.enterprise=new uN}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class uN{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const cN="recaptcha-enterprise",N0="NO_RECAPTCHA";class fN{constructor(t){this.type=cN,this.auth=ha(t)}async verify(t="verify",i=!1){async function l(f){if(!i){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(h,m)=>{Vw(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const p=new qw(g);return f.tenantId==null?f._agentRecaptchaConfig=p:f._tenantRecaptchaConfigs[f.tenantId]=p,h(p.siteKey)}}).catch(g=>{m(g)})})}function o(f,h,m){const g=window.grecaptcha;cy(g)?g.enterprise.ready(()=>{g.enterprise.execute(f,{action:t}).then(p=>{h(p)}).catch(()=>{h(N0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oN().execute("siteKey",{action:"verify"}):new Promise((f,h)=>{l(this.auth).then(m=>{if(!i&&cy(window.grecaptcha))o(m,f,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=aN();g.length!==0&&(g+=m),w0(g).then(()=>{o(m,f,h)}).catch(p=>{h(p)})}}).catch(m=>{h(m)})})}}async function gy(a,t,i,l=!1,o=!1){const f=new fN(a);let h;if(o)h=N0;else try{h=await f.verify(i)}catch{h=await f.verify(i,!0)}const m={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,p=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return l?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function _y(a,t,i,l,o){if(a._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await gy(a,t,i,i==="getOobCode");return l(a,f)}else return l(a,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await gy(a,t,i,i==="getOobCode");return l(a,h)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(a,t){const i=gh(a,"auth");if(i.isInitialized()){const o=i.getImmediate(),f=i.getOptions();if(Xi(f,t??{}))return o;tn(o,"already-initialized")}return i.initialize({options:t})}function dN(a,t){const i=t?.persistence||[],l=(Array.isArray(i)?i:[i]).map(Mn);t?.errorMap&&a._updateErrorMap(t.errorMap),a._initializeWithPersistence(l,t?.popupRedirectResolver)}function mN(a,t,i){const l=ha(a);Q(/^https?:\/\//.test(t),l,"invalid-emulator-scheme");const o=!1,f=R0(t),{host:h,port:m}=pN(t),g=m===null?"":`:${m}`,p={url:`${f}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!l._canInitEmulator){Q(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),Q(Xi(p,l.config.emulator)&&Xi(E,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=p,l.emulatorConfig=E,l.settings.appVerificationDisabledForTesting=!0,la(h)?(Hy(`${f}//${h}${g}`),By("Auth",!0)):gN()}function R0(a){const t=a.indexOf(":");return t<0?"":a.substr(0,t+1)}function pN(a){const t=R0(a),i=/(\/\/)?([^?#/]+)/.exec(a.substr(t.length));if(!i)return{host:"",port:null};const l=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(l);if(o){const f=o[1];return{host:f,port:yy(l.substr(f.length+1))}}else{const[f,h]=l.split(":");return{host:f,port:yy(h)}}}function yy(a){if(!a)return null;const t=Number(a);return isNaN(t)?null:t}function gN(){function a(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return In("not implemented")}_getIdTokenResponse(t){return In("not implemented")}_linkToIdToken(t,i){return In("not implemented")}_getReauthenticationResolver(t){return In("not implemented")}}async function _N(a,t){return Ci(a,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(a,t){return Xo(a,"POST","/v1/accounts:signInWithPassword",is(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(a,t){return Xo(a,"POST","/v1/accounts:signInWithEmailLink",is(a,t))}async function EN(a,t){return Xo(a,"POST","/v1/accounts:signInWithEmailLink",is(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends ed{constructor(t,i,l,o=null){super("password",l),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new xl(t,i,"password")}static _fromEmailAndCode(t,i,l=null){return new xl(t,i,"emailLink",l)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _y(t,i,"signInWithPassword",yN);case"emailLink":return vN(t,{email:this._email,oobCode:this._password});default:tn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const l={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _y(t,l,"signUpPassword",_N);case"emailLink":return EN(t,{idToken:i,email:this._email,oobCode:this._password});default:tn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(a,t){return Xo(a,"POST","/v1/accounts:signInWithIdp",is(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="http://localhost";class ts extends ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new ts(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):tn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:l,signInMethod:o,...f}=i;if(!l||!o)return null;const h=new ts(l,o);return h.idToken=f.idToken||void 0,h.accessToken=f.accessToken||void 0,h.secret=f.secret,h.nonce=f.nonce,h.pendingToken=f.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Ws(t,i)}_linkToIdToken(t,i){const l=this.buildRequest();return l.idToken=i,Ws(t,l)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ws(t,i)}buildRequest(){const t={requestUri:SN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=ra(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TN(a){const t=dl(ml(a)).link,i=t?dl(ml(t)).deep_link_id:null,l=dl(ml(a)).deep_link_id;return(l?dl(ml(l)).link:null)||l||i||t||a}class td{constructor(t){const i=dl(ml(t)),l=i.apiKey??null,o=i.oobCode??null,f=bN(i.mode??null);Q(l&&o&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=o,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=TN(t);try{return new td(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.providerId=da.PROVIDER_ID}static credential(t,i){return xl._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const l=td.parseLink(i);return Q(l,"argument-error"),xl._fromEmailAndCode(t,l.code,l.tenantId)}}da.PROVIDER_ID="password";da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends O0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ql{constructor(){super("facebook.com")}static credential(t){return ts._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fi.credential(t.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return ts._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:l}=t;if(!i&&!l)return null;try{return hi.credential(i,l)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ql{constructor(){super("github.com")}static credential(t){return ts._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return di.credential(t.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends ql{constructor(){super("twitter.com")}static credential(t,i){return ts._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return mi.credentialFromTaggedObject(t)}static credentialFromError(t){return mi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:l}=t;if(!i||!l)return null;try{return mi.credential(i,l)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,l,o=!1){const f=await $t._fromIdTokenResponse(t,l,o),h=vy(l);return new ia({user:f,providerId:h,_tokenResponse:l,operationType:i})}static async _forOperation(t,i,l){await t._updateTokensIfNecessary(l,!0);const o=vy(l);return new ia({user:t,providerId:o,_tokenResponse:l,operationType:i})}}function vy(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends bi{constructor(t,i,l,o){super(i.code,i.message),this.operationType=l,this.user=o,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(t,i,l,o){return new Uo(t,i,l,o)}}function D0(a,t,i,l){return(t==="reauthenticate"?i._getReauthenticationResolver(a):i._getIdTokenResponse(a)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(a,f,t,l):f})}async function CN(a,t,i=!1){const l=await Ml(a,t._linkToIdToken(a.auth,await a.getIdToken()),i);return ia._forOperation(a,"link",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(a,t,i=!1){const{auth:l}=a;if(Xt(l.app))return Promise.reject(vi(l));const o="reauthenticate";try{const f=await Ml(a,D0(l,o,t,a),i);Q(f.idToken,l,"internal-error");const h=Jh(f.idToken);Q(h,l,"internal-error");const{sub:m}=h;return Q(a.uid===m,l,"user-mismatch"),ia._forOperation(a,o,f)}catch(f){throw f?.code==="auth/user-not-found"&&tn(l,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(a,t,i=!1){if(Xt(a.app))return Promise.reject(vi(a));const l="signIn",o=await D0(a,l,t),f=await ia._fromIdTokenResponse(a,l,o);return i||await a._updateCurrentUser(f.user),f}async function wN(a,t){return I0(ha(a),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(a){const t=ha(a);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function RN(a,t,i){return Xt(a.app)?Promise.reject(vi(a)):wN(Gt(a),da.credential(t,i)).catch(async l=>{throw l.code==="auth/password-does-not-meet-requirements"&&NN(a),l})}function ON(a,t,i,l){return Gt(a).onIdTokenChanged(t,i,l)}function DN(a,t,i){return Gt(a).beforeAuthStateChanged(t,i)}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=1e3,MN=10;class x0 extends M0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const l=this.storage.getItem(i),o=this.localCache[i];l!==o&&t(i,o,l)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const l=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(l);!i&&this.localCache[l]===h||this.notifyListeners(l,h)},f=this.storage.getItem(l);Jw()&&f!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,MN):o()}notifyListeners(t,i){this.localCache[t]=i;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:l}),!0)})},IN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}x0.type="LOCAL";const xN=x0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends M0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}k0.type="SESSION";const L0=k0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(a){return Promise.all(a.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const l=new Wo(t);return this.receivers.push(l),l}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:l,eventType:o,data:f}=i.data,h=this.handlersMap[o];if(!h?.size)return;i.ports[0].postMessage({status:"ack",eventId:l,eventType:o});const m=Array.from(h).map(async p=>p(i.origin,f)),g=await kN(m);i.ports[0].postMessage({status:"done",eventId:l,eventType:o,response:g})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(a="",t=10){let i="";for(let l=0;l<t;l++)i+=Math.floor(Math.random()*10);return a+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,l=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let f,h;return new Promise((m,g)=>{const p=nd("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},l);h={messageChannel:o,onMessage(y){const S=y;if(S.data.eventId===p)switch(S.data.status){case"ack":clearTimeout(E),f=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),m(S.data.response);break;default:clearTimeout(E),clearTimeout(f),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:p,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function UN(a){cn().location.href=a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function zN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HN(){return navigator?.serviceWorker?.controller||null}function BN(){return U0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="firebaseLocalStorageDb",jN=1,Ho="firebaseLocalStorage",H0="fbase_key";class Vl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Jo(a,t){return a.transaction([Ho],t?"readwrite":"readonly").objectStore(Ho)}function qN(){const a=indexedDB.deleteDatabase(z0);return new Vl(a).toPromise()}function oh(){const a=indexedDB.open(z0,jN);return new Promise((t,i)=>{a.addEventListener("error",()=>{i(a.error)}),a.addEventListener("upgradeneeded",()=>{const l=a.result;try{l.createObjectStore(Ho,{keyPath:H0})}catch(o){i(o)}}),a.addEventListener("success",async()=>{const l=a.result;l.objectStoreNames.contains(Ho)?t(l):(l.close(),await qN(),t(await oh()))})})}async function Ey(a,t,i){const l=Jo(a,!0).put({[H0]:t,value:i});return new Vl(l).toPromise()}async function VN(a,t){const i=Jo(a,!1).get(t),l=await new Vl(i).toPromise();return l===void 0?null:l.value}function Sy(a,t){const i=Jo(a,!0).delete(t);return new Vl(i).toPromise()}const PN=800,GN=3;class B0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oh(),this.db)}async _withRetries(t){let i=0;for(;;)try{const l=await this._openDb();return await t(l)}catch(l){if(i++>GN)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wo._getInstance(BN()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await zN(),!this.activeServiceWorker)return;this.sender=new LN(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||HN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await oh();return await Ey(t,zo,"1"),await Sy(t,zo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(l=>Ey(l,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(l=>VN(l,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Sy(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const f=Jo(o,!1).getAll();return new Vl(f).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],l=new Set;if(t.length!==0)for(const{fbase_key:o,value:f}of t)l.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(f)&&(this.notifyListeners(o,f),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!l.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B0.type="LOCAL";const YN=B0;new jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(a,t){return t?Mn(t):(Q(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends ed{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ws(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ws(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ws(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function QN(a){return I0(a.auth,new id(a),a.bypassAuthState)}function KN(a){const{auth:t,user:i}=a;return Q(i,t,"internal-error"),AN(i,new id(a),a.bypassAuthState)}async function XN(a){const{auth:t,user:i}=a;return Q(i,t,"internal-error"),CN(i,new id(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(t,i,l,o,f=!1){this.auth=t,this.resolver=l,this.user=o,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:l,postBody:o,tenantId:f,error:h,type:m}=t;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:i,sessionId:l,tenantId:f||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return QN;case"linkViaPopup":case"linkViaRedirect":return XN;case"reauthViaPopup":case"reauthViaRedirect":return KN;default:tn(this.auth,"internal-error")}}resolve(t){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new jl(2e3,1e4);class Ys extends j0{constructor(t,i,l,o,f){super(t,i,o,f),this.provider=l,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const t=nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ZN.get())};t()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN="pendingRedirect",mo=new Map;class JN extends j0{constructor(t,i,l=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,l),this.eventId=null}async execute(){let t=mo.get(this.auth._key());if(!t){try{const l=await $N(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(l)}catch(i){t=()=>Promise.reject(i)}mo.set(this.auth._key(),t)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $N(a,t){const i=nR(t),l=tR(a);if(!await l._isAvailable())return!1;const o=await l._get(i)==="true";return await l._remove(i),o}function eR(a,t){mo.set(a._key(),t)}function tR(a){return Mn(a._redirectPersistence)}function nR(a){return ho(WN,a.config.apiKey,a.name)}async function iR(a,t,i=!1){if(Xt(a.app))return Promise.reject(vi(a));const l=ha(a),o=FN(l,t),h=await new JN(l,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await l._persistUserIfCurrent(h.user),await l._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=600*1e3;class aR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(t,l)&&(i=!0,this.sendToConsumer(t,l),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lR(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!q0(t)){const l=t.error.code?.split("auth/")[1]||"internal-error";i.onError(un(this.auth,l))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const l=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&l}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sR&&this.cachedEventUids.clear(),this.cachedEventUids.has(by(t))}saveEventToCache(t){this.cachedEventUids.add(by(t)),this.lastProcessedEventTime=Date.now()}}function by(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(t=>t).join("-")}function q0({type:a,error:t}){return a==="unknown"&&t?.code==="auth/no-auth-event"}function lR(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(a,t={}){return Ci(a,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uR=/^https?/;async function cR(a){if(a.config.emulator)return;const{authorizedDomains:t}=await rR(a);for(const i of t)try{if(fR(i))return}catch{}tn(a,"unauthorized-domain")}function fR(a){const t=lh(),{protocol:i,hostname:l}=new URL(t);if(a.startsWith("chrome-extension://")){const h=new URL(a);return h.hostname===""&&l===""?i==="chrome-extension:"&&a.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===l}if(!uR.test(i))return!1;if(oR.test(a))return l===a;const o=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(l)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new jl(3e4,6e4);function Ty(){const a=cn().___jsl;if(a?.H){for(const t of Object.keys(a.H))if(a.H[t].r=a.H[t].r||[],a.H[t].L=a.H[t].L||[],a.H[t].r=[...a.H[t].L],a.CP)for(let i=0;i<a.CP.length;i++)a.CP[i]=null}}function dR(a){return new Promise((t,i)=>{function l(){Ty(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ty(),i(un(a,"network-request-failed"))},timeout:hR.get()})}if(cn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(cn().gapi?.load)l();else{const o=rN("iframefcb");return cn()[o]=()=>{gapi.load?l():i(un(a,"network-request-failed"))},w0(`${lN()}?onload=${o}`).catch(f=>i(f))}}).catch(t=>{throw po=null,t})}let po=null;function mR(a){return po=po||dR(a),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new jl(5e3,15e3),gR="__/auth/iframe",_R="emulator/auth/iframe",yR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ER(a){const t=a.config;Q(t.authDomain,a,"auth-domain-config-required");const i=t.emulator?Wh(t,_R):`https://${a.config.authDomain}/${gR}`,l={apiKey:t.apiKey,appName:a.name,v:oa},o=vR.get(a.config.apiHost);o&&(l.eid=o);const f=a._getFrameworks();return f.length&&(l.fw=f.join(",")),`${i}?${ra(l).slice(1)}`}async function SR(a){const t=await mR(a),i=cn().gapi;return Q(i,a,"internal-error"),t.open({where:document.body,url:ER(a),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yR,dontclear:!0},l=>new Promise(async(o,f)=>{await l.restyle({setHideOnLeave:!1});const h=un(a,"network-request-failed"),m=cn().setTimeout(()=>{f(h)},pR.get());function g(){cn().clearTimeout(m),o(l)}l.ping(g).then(g,()=>{f(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TR=500,CR=600,AR="_blank",wR="http://localhost";class Cy{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NR(a,t,i,l=TR,o=CR){const f=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-l)/2,0).toString();let m="";const g={...bR,width:l.toString(),height:o.toString(),top:f,left:h},p=ft().toLowerCase();i&&(m=v0(p)?AR:i),_0(p)&&(t=t||wR,g.scrollbars="yes");const E=Object.entries(g).reduce((S,[L,z])=>`${S}${L}=${z},`,"");if(Ww(p)&&m!=="_self")return RR(t||"",m),new Cy(null);const y=window.open(t||"",m,E);Q(y,a,"popup-blocked");try{y.focus()}catch{}return new Cy(y)}function RR(a,t){const i=document.createElement("a");i.href=a,i.target=t;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="__/auth/handler",DR="emulator/auth/handler",IR=encodeURIComponent("fac");async function Ay(a,t,i,l,o,f){Q(a.config.authDomain,a,"auth-domain-config-required"),Q(a.config.apiKey,a,"invalid-api-key");const h={apiKey:a.config.apiKey,appName:a.name,authType:i,redirectUrl:l,v:oa,eventId:o};if(t instanceof O0){t.setDefaultLanguage(a.languageCode),h.providerId=t.providerId||"",jf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,y]of Object.entries({}))h[E]=y}if(t instanceof ql){const E=t.getScopes().filter(y=>y!=="");E.length>0&&(h.scopes=E.join(","))}a.tenantId&&(h.tid=a.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await a._getAppCheckToken(),p=g?`#${IR}=${encodeURIComponent(g)}`:"";return`${MR(a)}?${ra(m).slice(1)}${p}`}function MR({config:a}){return a.emulator?Wh(a,DR):`https://${a.authDomain}/${OR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="webStorageSupport";class xR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L0,this._completeRedirectFn=iR,this._overrideRedirectResult=eR}async _openPopup(t,i,l,o){zn(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const f=await Ay(t,i,l,lh(),o);return NR(t,f,nd())}async _openRedirect(t,i,l,o){await this._originValidation(t);const f=await Ay(t,i,l,lh(),o);return UN(f),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:f}=this.eventManagers[i];return o?Promise.resolve(o):(zn(f,"If manager is not set, promise should be"),f)}const l=this.initAndGetManager(t);return this.eventManagers[i]={promise:l},l.catch(()=>{delete this.eventManagers[i]}),l}async initAndGetManager(t){const i=await SR(t),l=new aR(t);return i.register("authEvent",o=>(Q(o?.authEvent,t,"invalid-auth-event"),{status:l.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:l},this.iframes[t._key()]=i,l}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(zf,{type:zf},o=>{const f=o?.[0]?.[zf];f!==void 0&&i(!!f),tn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=cR(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return C0()||y0()||$h()}}const kR=xR;var wy="@firebase/auth",Ny="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(l=>{t(l?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zR(a){$s(new Zi("auth",(t,{options:i})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),f=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=l.options;Q(h&&!h.includes(":"),"invalid-api-key",{appName:l.name});const g={apiKey:h,authDomain:m,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(a)},p=new iN(l,o,f,g);return dN(p,i),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,l)=>{t.getProvider("auth-internal").initialize()})),$s(new Zi("auth-internal",t=>{const i=ha(t.getProvider("auth").getImmediate());return(l=>new LR(l))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(wy,Ny,UR(a)),_i(wy,Ny,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=300,BR=zy("authIdTokenMaxAge")||HR;let Ry=null;const jR=a=>async t=>{const i=t&&await t.getIdTokenResult(),l=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(l&&l>BR)return;const o=i?.token;Ry!==o&&(Ry=o,await fetch(a,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function qR(a=Yy()){const t=gh(a,"auth");if(t.isInitialized())return t.getImmediate();const i=hN(a,{popupRedirectResolver:kR,persistence:[YN,xN,L0]}),l=zy("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(l,location.origin);if(location.origin===f.origin){const h=jR(f.toString());DN(i,h,()=>h(i.currentUser)),ON(i,m=>h(m))}}const o=Ly("auth");return o&&mN(i,`http://${o}`),i}function VR(){return document.getElementsByTagName("head")?.[0]??document}sN({loadJS(a){return new Promise((t,i)=>{const l=document.createElement("script");l.setAttribute("src",a),l.onload=t,l.onerror=o=>{const f=un("internal-error");f.customData=o,i(f)},l.type="text/javascript",l.charset="UTF-8",VR().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zR("Browser");const PR={apiKey:"AIzaSyAqkdli4knKkabDs08kLErv9QOf69RgctI",authDomain:"cred-manager-1d672.firebaseapp.com",databaseURL:"https://cred-manager-1d672-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"cred-manager-1d672",storageBucket:"cred-manager-1d672.firebasestorage.app",messagingSenderId:"338339493037",appId:"1:338339493037:web:0c3bd0263eabe45b440224"},V0=Gy(PR),GR=qR(V0),Tl=ww(V0);function YR(){const[a,t]=Ue.useState("qa"),[i,l]=Ue.useState([]),[o,f]=Ue.useState(""),[h,m]=Ue.useState(""),[g,p]=Ue.useState(!1),[E,y]=Ue.useState([{key:"email",value:""},{key:"password",value:""}]);Ue.useEffect(()=>{const F=Sl(Tl,`${a}`),$=sh(F,oe=>{if(oe.exists()){const qe=Object.keys(oe.val());l(qe)}else l([])});return()=>$()},[a]),Ue.useEffect(()=>{if(o){const F=Sl(Tl,`${a}/${o}`),$=sh(F,oe=>{if(oe.exists()){const qe=oe.val(),$e=Object.entries(qe).map(([ie,lt])=>({key:ie,value:String(lt)}));y($e.length>0?$e:[{key:"email",value:""},{key:"password",value:""}])}});return()=>$()}},[a,o]);const S=()=>{h.trim()&&(f(h.trim()),m(""),p(!1),y([{key:"email",value:""},{key:"password",value:""}]))},L=()=>{y([...E,{key:"",value:""}])},z=F=>{E.length>1&&y(E.filter(($,oe)=>oe!==F))},G=(F,$)=>{const oe=[...E];oe[F].key=$,y(oe)},he=(F,$)=>{const oe=[...E];oe[F].value=$,y(oe)},ye=async()=>{if(!o){alert("Please select or create a subfolder");return}const F={};let $=!1;if(E.forEach(qe=>{qe.key.trim()?F[qe.key.trim()]=qe.value:qe.key===""&&qe.value!==""&&($=!0)}),$){alert("Please provide a key name for all fields");return}if(Object.keys(F).length===0){alert("Please add at least one field with a key");return}const oe=Sl(Tl,`${a}/${o}`);await o0(oe,F),alert("Data saved successfully!")};return x.jsx("div",{className:"min-h-screen bg-black text-white p-8",children:x.jsxs("div",{className:"max-w-5xl mx-auto",children:[x.jsxs("div",{className:"mb-12",children:[x.jsx("h1",{className:"text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",children:"Manage Test Data"}),x.jsx("p",{className:"text-gray-400",children:"Create and manage test automation data"})]}),x.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl space-y-6",children:[x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-300",children:"Select Folder Type"}),x.jsxs("select",{value:a,onChange:F=>{t(F.target.value),f(""),y([{key:"email",value:""},{key:"password",value:""}])},className:"w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all",children:[x.jsx("option",{value:"qa",children:"QA"}),x.jsx("option",{value:"uat",children:"UAT"})]})]}),x.jsxs("div",{children:[x.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-300",children:"Select or Create Subfolder"}),x.jsx("div",{className:"flex gap-2",children:g?x.jsxs(x.Fragment,{children:[x.jsx("input",{type:"text",value:h,onChange:F=>m(F.target.value),placeholder:"e.g., automation1",className:"flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all",onKeyPress:F=>F.key==="Enter"&&S()}),x.jsx("button",{onClick:S,className:"bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium",children:"Create"}),x.jsx("button",{onClick:()=>{p(!1),m("")},className:"bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all font-medium",children:"Cancel"})]}):x.jsxs(x.Fragment,{children:[x.jsxs("select",{value:o,onChange:F=>f(F.target.value),className:"flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all",children:[x.jsx("option",{value:"",children:"Select a subfolder..."}),i.map(F=>x.jsx("option",{value:F,children:F},F))]}),x.jsxs("button",{onClick:()=>p(!0),className:"bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium flex items-center gap-2",children:[x.jsx(g_,{className:"w-4 h-4"}),"New"]})]})})]}),o&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"border-t border-gray-800 pt-6",children:[x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(Bf,{className:"w-5 h-5 text-gray-400"}),x.jsxs("h3",{className:"text-xl font-semibold",children:[a.toUpperCase()," / ",o]})]}),x.jsxs("button",{onClick:L,className:"bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2 text-sm",children:[x.jsx(g_,{className:"w-4 h-4"}),"Add Field"]})]}),x.jsx("div",{className:"space-y-3",children:E.map((F,$)=>x.jsxs("div",{className:"flex gap-3 items-center",children:[x.jsx("input",{type:"text",value:F.key,onChange:oe=>G($,oe.target.value),placeholder:"Key (e.g., email)",className:"flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"}),x.jsx("input",{type:"text",value:F.value,onChange:oe=>he($,oe.target.value),placeholder:"Value",className:"flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"}),x.jsx("button",{onClick:()=>z($),className:"p-3 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900 transition-all",disabled:E.length===1,children:x.jsx(Dy,{className:"w-4 h-4"})})]},$))})]}),x.jsxs("button",{onClick:ye,className:"w-full bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2",children:[x.jsx(xb,{className:"w-5 h-5"}),"Save Data"]})]})]})]})})}function FR(){const[a,t]=Ue.useState("qa"),[i,l]=Ue.useState({}),[o,f]=Ue.useState(!0);Ue.useEffect(()=>{f(!0);const E=Sl(Tl,a),y=sh(E,S=>{S.exists()?l(S.val()):l({}),f(!1)});return()=>y()},[a]);const h=async E=>{if(confirm(`Are you sure you want to delete "${E}"?`)){const y=Sl(Tl,`${a}/${E}`);await _w(y)}},g=(()=>{const E=new Set;return Object.values(i).forEach(y=>{Object.keys(y).forEach(S=>E.add(S))}),Array.from(E)})(),p=Object.keys(i);return x.jsx("div",{className:"min-h-screen bg-black text-white p-8",children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsxs("div",{className:"mb-12",children:[x.jsx("h1",{className:"text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",children:"View All Data"}),x.jsx("p",{className:"text-gray-400",children:"Browse and manage your test data"})]}),x.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-8 shadow-2xl",children:[x.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-300",children:"Select Folder Type"}),x.jsxs("select",{value:a,onChange:E=>t(E.target.value),className:"w-full max-w-xs bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all",children:[x.jsx("option",{value:"qa",children:"QA"}),x.jsx("option",{value:"uat",children:"UAT"})]})]}),x.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-2xl",children:[x.jsx("div",{className:"p-8 border-b border-gray-800",children:x.jsx("div",{className:"flex items-center justify-between",children:x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[x.jsx(Hf,{className:"w-6 h-6"}),x.jsxs("h2",{className:"text-2xl font-semibold",children:[a.toUpperCase()," Data"]})]}),x.jsxs("p",{className:"text-gray-400",children:[p.length," ",p.length===1?"subfolder":"subfolders"," found"]})]})})}),o?x.jsxs("div",{className:"p-12 text-center",children:[x.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"}),x.jsx("p",{className:"mt-4 text-gray-400",children:"Loading data..."})]}):p.length===0?x.jsx("div",{className:"p-12 text-center",children:x.jsxs("p",{className:"text-gray-400 text-lg",children:["No data available in ",a.toUpperCase(),". Create some data first."]})}):x.jsx("div",{className:"overflow-x-auto",children:x.jsxs("table",{className:"w-full",children:[x.jsx("thead",{children:x.jsxs("tr",{className:"bg-black border-b border-gray-800",children:[x.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider sticky left-0 bg-black",children:x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(Bf,{className:"w-4 h-4"}),"Subfolder"]})}),g.map(E=>x.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider",children:E},E)),x.jsx("th",{className:"px-6 py-4 text-right text-sm font-semibold text-gray-300 uppercase tracking-wider",children:"Actions"})]})}),x.jsx("tbody",{className:"divide-y divide-gray-800",children:p.map(E=>x.jsxs("tr",{className:"hover:bg-gray-900/50 transition-colors",children:[x.jsx("td",{className:"px-6 py-4 font-medium text-white sticky left-0 bg-gradient-to-r from-gray-900 to-transparent",children:x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(Bf,{className:"w-4 h-4 text-gray-400"}),E]})}),g.map(y=>x.jsx("td",{className:"px-6 py-4 text-gray-300",children:i[E][y]!==void 0?x.jsx("span",{className:"font-mono text-sm bg-gray-800 px-3 py-1 rounded",children:String(i[E][y])}):x.jsx("span",{className:"text-gray-600",children:"-"})},y)),x.jsx("td",{className:"px-6 py-4",children:x.jsx("div",{className:"flex justify-end gap-2",children:x.jsx("button",{onClick:()=>h(E),className:"p-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900 transition-all transform hover:scale-110",title:"Delete",children:x.jsx(Dy,{className:"w-4 h-4"})})})})]},E))})]})})]})]})})}function QR({onAuth:a}){const[t,i]=Ue.useState(""),[l,o]=Ue.useState(""),f=async h=>{h?.preventDefault();try{await RN(GR,t,l),a()}catch(m){alert("Login failed: "+m.message)}};return x.jsx("div",{className:"min-h-screen bg-black text-white flex items-center justify-center p-8",children:x.jsxs("form",{onSubmit:f,className:"w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl",children:[x.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Sign in"}),x.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-300",children:"Email"}),x.jsx("input",{type:"email",value:t,onChange:h=>i(h.target.value),className:"w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white mb-4",placeholder:"Enter email",autoFocus:!0}),x.jsx("label",{className:"block text-sm font-medium mb-2 text-gray-300",children:"Password"}),x.jsx("input",{type:"password",value:l,onChange:h=>o(h.target.value),className:"w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white mb-6",placeholder:"Enter password"}),x.jsx("button",{type:"submit",className:"w-full bg-white text-black font-semibold px-4 py-3 rounded-lg hover:bg-gray-200 transition-all",children:"Sign in"})]})})}function KR(){const[a,t]=Ue.useState("home"),[i,l]=Ue.useState(()=>localStorage.getItem("isAuthed")==="true"),o=()=>{localStorage.setItem("isAuthed","true"),l(!0)},f=()=>{localStorage.removeItem("isAuthed"),l(!1),t("home")};return i?x.jsxs("div",{className:"min-h-screen bg-black",children:[x.jsx(Lb,{currentPage:a,onPageChange:t,onLogout:f}),a==="home"?x.jsx(YR,{}):x.jsx(FR,{})]}):x.jsx(QR,{onAuth:o})}Sb.createRoot(document.getElementById("root")).render(x.jsx(Ue.StrictMode,{children:x.jsx(KR,{})}));
