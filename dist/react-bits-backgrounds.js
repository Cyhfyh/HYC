(function(){"use strict";var Ch={exports:{}},Sl={};var I0;function OE(){if(I0)return Sl;I0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:r,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Sl.Fragment=e,Sl.jsx=t,Sl.jsxs=t,Sl}var H0;function NE(){return H0||(H0=1,Ch.exports=OE()),Ch.exports}var qn=NE(),Dh={exports:{}},ut={};var G0;function PE(){if(G0)return ut;G0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function y(I,Y,se){this.props=I,this.context=Y,this.refs=M,this.updater=se||E}y.prototype.isReactComponent={},y.prototype.setState=function(I,Y){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Y,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function D(){}D.prototype=y.prototype;function R(I,Y,se){this.props=I,this.context=Y,this.refs=M,this.updater=se||E}var A=R.prototype=new D;A.constructor=R,S(A,y.prototype),A.isPureReactComponent=!0;var L=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function w(I,Y,se){var me=se.ref;return{$$typeof:r,type:I,key:Y,ref:me!==void 0?me:null,props:se}}function C(I,Y){return w(I.type,Y,I.props)}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function X(I){var Y={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return Y[se]})}var W=/\/+/g;function G(I,Y){return typeof I=="object"&&I!==null&&I.key!=null?X(""+I.key):Y.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function(Y){I.status==="pending"&&(I.status="fulfilled",I.value=Y)},function(Y){I.status==="pending"&&(I.status="rejected",I.reason=Y)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,Y,se,me,Q){var ce=typeof I;(ce==="undefined"||ce==="boolean")&&(I=null);var le=!1;if(I===null)le=!0;else switch(ce){case"bigint":case"string":case"number":le=!0;break;case"object":switch(I.$$typeof){case r:case e:le=!0;break;case p:return le=I._init,F(le(I._payload),Y,se,me,Q)}}if(le)return Q=Q(I),le=me===""?"."+G(I,0):me,L(Q)?(se="",le!=null&&(se=le.replace(W,"$&/")+"/"),F(Q,Y,se,"",function(De){return De})):Q!=null&&(B(Q)&&(Q=C(Q,se+(Q.key==null||I&&I.key===Q.key?"":(""+Q.key).replace(W,"$&/")+"/")+le)),Y.push(Q)),1;le=0;var Se=me===""?".":me+":";if(L(I))for(var Te=0;Te<I.length;Te++)me=I[Te],ce=Se+G(me,Te),le+=F(me,Y,se,ce,Q);else if(Te=v(I),typeof Te=="function")for(I=Te.call(I),Te=0;!(me=I.next()).done;)me=me.value,ce=Se+G(me,Te++),le+=F(me,Y,se,ce,Q);else if(ce==="object"){if(typeof I.then=="function")return F(Z(I),Y,se,me,Q);throw Y=String(I),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return le}function k(I,Y,se){if(I==null)return I;var me=[],Q=0;return F(I,me,"","",function(ce){return Y.call(se,ce,Q++)}),me}function V(I){if(I._status===-1){var Y=I._result;Y=Y(),Y.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=Y)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},_e={map:k,forEach:function(I,Y,se){k(I,function(){Y.apply(this,arguments)},se)},count:function(I){var Y=0;return k(I,function(){Y++}),Y},toArray:function(I){return k(I,function(Y){return Y})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ut.Activity=_,ut.Children=_e,ut.Component=y,ut.Fragment=t,ut.Profiler=a,ut.PureComponent=R,ut.StrictMode=i,ut.Suspense=h,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ut.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},ut.cache=function(I){return function(){return I.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(I,Y,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var me=S({},I.props),Q=I.key;if(Y!=null)for(ce in Y.key!==void 0&&(Q=""+Y.key),Y)!P.call(Y,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&Y.ref===void 0||(me[ce]=Y[ce]);var ce=arguments.length-2;if(ce===1)me.children=se;else if(1<ce){for(var le=Array(ce),Se=0;Se<ce;Se++)le[Se]=arguments[Se+2];me.children=le}return w(I.type,Q,me)},ut.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},ut.createElement=function(I,Y,se){var me,Q={},ce=null;if(Y!=null)for(me in Y.key!==void 0&&(ce=""+Y.key),Y)P.call(Y,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Q[me]=Y[me]);var le=arguments.length-2;if(le===1)Q.children=se;else if(1<le){for(var Se=Array(le),Te=0;Te<le;Te++)Se[Te]=arguments[Te+2];Q.children=Se}if(I&&I.defaultProps)for(me in le=I.defaultProps,le)Q[me]===void 0&&(Q[me]=le[me]);return w(I,ce,Q)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(I){return{$$typeof:f,render:I}},ut.isValidElement=B,ut.lazy=function(I){return{$$typeof:p,_payload:{_status:-1,_result:I},_init:V}},ut.memo=function(I,Y){return{$$typeof:d,type:I,compare:Y===void 0?null:Y}},ut.startTransition=function(I){var Y=O.T,se={};O.T=se;try{var me=I(),Q=O.S;Q!==null&&Q(se,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(U,fe)}catch(ce){fe(ce)}finally{Y!==null&&se.types!==null&&(Y.types=se.types),O.T=Y}},ut.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ut.use=function(I){return O.H.use(I)},ut.useActionState=function(I,Y,se){return O.H.useActionState(I,Y,se)},ut.useCallback=function(I,Y){return O.H.useCallback(I,Y)},ut.useContext=function(I){return O.H.useContext(I)},ut.useDebugValue=function(){},ut.useDeferredValue=function(I,Y){return O.H.useDeferredValue(I,Y)},ut.useEffect=function(I,Y){return O.H.useEffect(I,Y)},ut.useEffectEvent=function(I){return O.H.useEffectEvent(I)},ut.useId=function(){return O.H.useId()},ut.useImperativeHandle=function(I,Y,se){return O.H.useImperativeHandle(I,Y,se)},ut.useInsertionEffect=function(I,Y){return O.H.useInsertionEffect(I,Y)},ut.useLayoutEffect=function(I,Y){return O.H.useLayoutEffect(I,Y)},ut.useMemo=function(I,Y){return O.H.useMemo(I,Y)},ut.useOptimistic=function(I,Y){return O.H.useOptimistic(I,Y)},ut.useReducer=function(I,Y,se){return O.H.useReducer(I,Y,se)},ut.useRef=function(I){return O.H.useRef(I)},ut.useState=function(I){return O.H.useState(I)},ut.useSyncExternalStore=function(I,Y,se){return O.H.useSyncExternalStore(I,Y,se)},ut.useTransition=function(){return O.H.useTransition()},ut.version="19.2.8",ut}var V0;function Lh(){return V0||(V0=1,Dh.exports=PE()),Dh.exports}var Le=Lh(),Uh={exports:{}},Ml={},Oh={exports:{}},Nh={};var k0;function FE(){return k0||(k0=1,(function(r){function e(F,k){var V=F.length;F.push(k);e:for(;0<V;){var fe=V-1>>>1,_e=F[fe];if(0<a(_e,k))F[fe]=k,F[V]=_e,V=fe;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var k=F[0],V=F.pop();if(V!==k){F[0]=V;e:for(var fe=0,_e=F.length,I=_e>>>1;fe<I;){var Y=2*(fe+1)-1,se=F[Y],me=Y+1,Q=F[me];if(0>a(se,V))me<_e&&0>a(Q,se)?(F[fe]=Q,F[me]=V,fe=me):(F[fe]=se,F[Y]=V,fe=Y);else if(me<_e&&0>a(Q,V))F[fe]=Q,F[me]=V,fe=me;else break e}}return k}function a(F,k){var V=F.sortIndex-k.sortIndex;return V!==0?V:F.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],d=[],p=1,_=null,x=3,v=!1,E=!1,S=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var k=t(d);k!==null;){if(k.callback===null)i(d);else if(k.startTime<=F)i(d),k.sortIndex=k.expirationTime,e(h,k);else break;k=t(d)}}function L(F){if(S=!1,A(F),!E)if(t(h)!==null)E=!0,U||(U=!0,X());else{var k=t(d);k!==null&&Z(L,k.startTime-F)}}var U=!1,O=-1,P=5,w=-1;function C(){return M?!0:!(r.unstable_now()-w<P)}function B(){if(M=!1,U){var F=r.unstable_now();w=F;var k=!0;try{e:{E=!1,S&&(S=!1,D(O),O=-1),v=!0;var V=x;try{t:{for(A(F),_=t(h);_!==null&&!(_.expirationTime>F&&C());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,x=_.priorityLevel;var _e=fe(_.expirationTime<=F);if(F=r.unstable_now(),typeof _e=="function"){_.callback=_e,A(F),k=!0;break t}_===t(h)&&i(h),A(F)}else i(h);_=t(h)}if(_!==null)k=!0;else{var I=t(d);I!==null&&Z(L,I.startTime-F),k=!1}}break e}finally{_=null,x=V,v=!1}k=void 0}}finally{k?X():U=!1}}}var X;if(typeof R=="function")X=function(){R(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,G=W.port2;W.port1.onmessage=B,X=function(){G.postMessage(null)}}else X=function(){y(B,0)};function Z(F,k){O=y(function(){F(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var V=x;x=k;try{return F()}finally{x=V}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=x;x=F;try{return k()}finally{x=V}},r.unstable_scheduleCallback=function(F,k,V){var fe=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?fe+V:fe):V=fe,F){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=V+_e,F={id:p++,callback:k,priorityLevel:F,startTime:V,expirationTime:_e,sortIndex:-1},V>fe?(F.sortIndex=V,e(d,F),t(h)===null&&F===t(d)&&(S?(D(O),O=-1):S=!0,Z(L,V-fe))):(F.sortIndex=_e,e(h,F),E||v||(E=!0,U||(U=!0,X()))),F},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(F){var k=x;return function(){var V=x;x=k;try{return F.apply(this,arguments)}finally{x=V}}}})(Nh)),Nh}var X0;function zE(){return X0||(X0=1,Oh.exports=FE()),Oh.exports}var Ph={exports:{}},jn={};var W0;function BE(){if(W0)return jn;W0=1;var r=Lh();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)d+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,d,p){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:_==null?null:""+_,children:h,containerInfo:d,implementation:p}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,jn.createPortal=function(h,d){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,p)},jn.flushSync=function(h){var d=c.T,p=i.p;try{if(c.T=null,i.p=2,h)return h()}finally{c.T=d,i.p=p,i.d.f()}},jn.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(h,d))},jn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},jn.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var p=d.as,_=f(p,d.crossOrigin),x=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;p==="style"?i.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:v}):p==="script"&&i.d.X(h,{crossOrigin:_,integrity:x,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},jn.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var p=f(d.as,d.crossOrigin);i.d.M(h,{crossOrigin:p,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(h)},jn.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var p=d.as,_=f(p,d.crossOrigin);i.d.L(h,p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},jn.preloadModule=function(h,d){if(typeof h=="string")if(d){var p=f(d.as,d.crossOrigin);i.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:p,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(h)},jn.requestFormReset=function(h){i.d.r(h)},jn.unstable_batchedUpdates=function(h,d){return h(d)},jn.useFormState=function(h,d,p){return c.H.useFormState(h,d,p)},jn.useFormStatus=function(){return c.H.useHostTransitionStatus()},jn.version="19.2.8",jn}var Y0;function IE(){if(Y0)return Ph.exports;Y0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ph.exports=BE(),Ph.exports}var q0;function HE(){if(q0)return Ml;q0=1;var r=zE(),e=Lh(),t=IE();function i(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function f(n){if(n.tag===31){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(i(188))}function d(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(i(188));return s!==n?null:n}for(var o=n,u=s;;){var m=o.return;if(m===null)break;var g=m.alternate;if(g===null){if(u=m.return,u!==null){o=u;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===o)return h(m),n;if(g===u)return h(m),s;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=m,u=g;else{for(var b=!1,N=m.child;N;){if(N===o){b=!0,o=m,u=g;break}if(N===u){b=!0,u=m,o=g;break}N=N.sibling}if(!b){for(N=g.child;N;){if(N===o){b=!0,o=g,u=m;break}if(N===u){b=!0,u=g,o=m;break}N=N.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:s}function p(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=p(n),s!==null)return s;n=n.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),R=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var W=Symbol.for("react.client.reference");function G(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===W?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case U:return"SuspenseList";case w:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case E:return"Portal";case R:return n.displayName||"Context";case D:return(n._context.displayName||"Context")+".Consumer";case A:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return s=n.displayName||null,s!==null?s:G(n.type)||"Memo";case P:s=n._payload,n=n._init;try{return G(n(s))}catch{}}return null}var Z=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},fe=[],_e=-1;function I(n){return{current:n}}function Y(n){0>_e||(n.current=fe[_e],fe[_e]=null,_e--)}function se(n,s){_e++,fe[_e]=n.current,n.current=s}var me=I(null),Q=I(null),ce=I(null),le=I(null);function Se(n,s){switch(se(ce,s),se(Q,n),se(me,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?tE(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=tE(s),n=nE(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Y(me),se(me,n)}function Te(){Y(me),Y(Q),Y(ce)}function De(n){n.memoizedState!==null&&se(le,n);var s=me.current,o=nE(s,n.type);s!==o&&(se(Q,n),se(me,o))}function st(n){Q.current===n&&(Y(me),Y(Q)),le.current===n&&(Y(le),Jc._currentValue=V)}var it,K;function ht(n){if(it===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);it=s&&s[1]||"",K=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+it+n+K}var je=!1;function Ye(n,s){if(!n||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ge){var ue=ge}Reflect.construct(n,[],Me)}else{try{Me.call()}catch(ge){ue=ge}n.call(Me.prototype)}}else{try{throw Error()}catch(ge){ue=ge}(Me=n())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ge){if(ge&&ue&&typeof ge.stack=="string")return[ge.stack,ue.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),b=g[0],N=g[1];if(b&&N){var q=b.split(`
`),oe=N.split(`
`);for(m=u=0;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;for(;m<oe.length&&!oe[m].includes("DetermineComponentFrameRoot");)m++;if(u===q.length||m===oe.length)for(u=q.length-1,m=oe.length-1;1<=u&&0<=m&&q[u]!==oe[m];)m--;for(;1<=u&&0<=m;u--,m--)if(q[u]!==oe[m]){if(u!==1||m!==1)do if(u--,m--,0>m||q[u]!==oe[m]){var xe=`
`+q[u].replace(" at new "," at ");return n.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",n.displayName)),xe}while(1<=u&&0<=m);break}}}finally{je=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?ht(o):""}function Pe(n,s){switch(n.tag){case 26:case 27:case 5:return ht(n.type);case 16:return ht("Lazy");case 13:return n.child!==s&&s!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return Ye(n.type,!1);case 11:return Ye(n.type.render,!1);case 1:return Ye(n.type,!0);case 31:return ht("Activity");default:return""}}function lt(n){try{var s="",o=null;do s+=Pe(n,o),o=n,n=n.return;while(n);return s}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Ne=Object.prototype.hasOwnProperty,ot=r.unstable_scheduleCallback,Zt=r.unstable_cancelCallback,Jt=r.unstable_shouldYield,H=r.unstable_requestPaint,T=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ve=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,He=r.unstable_LowPriority,Ce=r.unstable_IdlePriority,Xe=r.log,Qe=r.unstable_setDisableYieldValue,Re=null,Ue=null;function $e(n){if(typeof Xe=="function"&&Qe(n),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(Re,n)}catch{}}var Ge=Math.clz32?Math.clz32:$,ze=Math.log,dt=Math.LN2;function $(n){return n>>>=0,n===0?32:31-(ze(n)/dt|0)|0}var we=256,Oe=262144,Ve=4194304;function Ae(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ee(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var m=0,g=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var N=u&134217727;return N!==0?(u=N&~g,u!==0?m=Ae(u):(b&=N,b!==0?m=Ae(b):o||(o=N&~n,o!==0&&(m=Ae(o))))):(N=u&~g,N!==0?m=Ae(N):b!==0?m=Ae(b):o||(o=u&~n,o!==0&&(m=Ae(o)))),m===0?0:s!==0&&s!==m&&(s&g)===0&&(g=m&-m,o=s&-s,g>=o||g===32&&(o&4194048)!==0)?s:m}function We(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function ct(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var n=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),n}function Ct(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function ni(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ji(n,s,o,u,m,g){var b=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var N=n.entanglements,q=n.expirationTimes,oe=n.hiddenUpdates;for(o=b&~o;0<o;){var xe=31-Ge(o),Me=1<<xe;N[xe]=0,q[xe]=-1;var ue=oe[xe];if(ue!==null)for(oe[xe]=null,xe=0;xe<ue.length;xe++){var ge=ue[xe];ge!==null&&(ge.lane&=-536870913)}o&=~Me}u!==0&&hc(n,u,0),g!==0&&m===0&&n.tag!==0&&(n.suspendedLanes|=g&~(b&~s))}function hc(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Ge(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function Er(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Ge(o),m=1<<u;m&s|n[u]&s&&(n[u]|=s),o&=~m}}function Bo(n,s){var o=s&-s;return o=(o&42)!==0?1:Io(o),(o&(n.suspendedLanes|s))!==0?0:o}function Io(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ho(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Aa(){var n=k.p;return n!==0?n:(n=window.event,n===void 0?32:bE(n.type))}function dc(n,s){var o=k.p;try{return k.p=n,s()}finally{k.p=o}}var Oi=Math.random().toString(36).slice(2),En="__reactFiber$"+Oi,Gn="__reactProps$"+Oi,Us="__reactContainer$"+Oi,pc="__reactEvents$"+Oi,Um="__reactListeners$"+Oi,Om="__reactHandles$"+Oi,xf="__reactResources$"+Oi,Ra="__reactMarker$"+Oi;function z(n){delete n[En],delete n[Gn],delete n[pc],delete n[Um],delete n[Om]}function ee(n){var s=n[En];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Us]||o[En]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=cE(n);n!==null;){if(o=n[En])return o;n=cE(n)}return s}n=o,o=n.parentNode}return null}function he(n){if(n=n[En]||n[Us]){var s=n.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return n}return null}function pe(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(i(33))}function ne(n){var s=n[xf];return s||(s=n[xf]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function be(n){n[Ra]=!0}var Be=new Set,Ze={};function Ie(n,s){et(n,s),et(n+"Capture",s)}function et(n,s){for(Ze[n]=s,n=0;n<s.length;n++)Be.add(s[n])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},vt={};function Ft(n){return Ne.call(vt,n)?!0:Ne.call(tt,n)?!1:at.test(n)?vt[n]=!0:(tt[n]=!0,!1)}function Kt(n,s,o){if(Ft(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function zt(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function yt(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}function Ke(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $t(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Dt(n,s,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,s);if(!n.hasOwnProperty(s)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var m=u.get,g=u.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return m.call(this)},set:function(b){o=""+b,g.call(this,b)}}),Object.defineProperty(n,s,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Vn(n){if(!n._valueTracker){var s=$t(n)?"checked":"value";n._valueTracker=Dt(n,s,""+n[s])}}function Xr(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=$t(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function zn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var wa=/[\n"\\]/g;function Et(n){return n.replace(wa,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $n(n,s,o,u,m,g,b,N){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),s!=null?b==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+Ke(s)):n.value!==""+Ke(s)&&(n.value=""+Ke(s)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),s!=null?Un(n,b,Ke(s)):o!=null?Un(n,b,Ke(o)):u!=null&&n.removeAttribute("value"),m==null&&g!=null&&(n.defaultChecked=!!g),m!=null&&(n.checked=m&&typeof m!="function"&&typeof m!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?n.name=""+Ke(N):n.removeAttribute("name")}function ii(n,s,o,u,m,g,b,N){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),s!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||s!=null)){Vn(n);return}o=o!=null?""+Ke(o):"",s=s!=null?""+Ke(s):o,N||s===n.value||(n.value=s),n.defaultValue=s}u=u??m,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=N?n.checked:!!u,n.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),Vn(n)}function Un(n,s,o){s==="number"&&zn(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function _n(n,s,o,u){if(n=n.options,s){s={};for(var m=0;m<o.length;m++)s["$"+o[m]]=!0;for(o=0;o<n.length;o++)m=s.hasOwnProperty("$"+n[o].value),n[o].selected!==m&&(n[o].selected=m),m&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ke(o),s=null,m=0;m<n.length;m++){if(n[m].value===o){n[m].selected=!0,u&&(n[m].defaultSelected=!0);return}s!==null||n[m].disabled||(s=n[m])}s!==null&&(s.selected=!0)}}function Go(n,s,o){if(s!=null&&(s=""+Ke(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+Ke(o):""}function Tr(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(Z(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Ke(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),Vn(n)}function Vo(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var mU=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jy(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||mU.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function $y(n,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var m in s)u=s[m],s.hasOwnProperty(m)&&o[m]!==u&&Jy(n,m,u)}else for(var g in s)s.hasOwnProperty(g)&&Jy(n,g,s[g])}function Nm(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gU=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_U=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yf(n){return _U.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Wr(){}var Pm=null;function Fm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ko=null,Xo=null;function e1(n){var s=he(n);if(s&&(n=s.stateNode)){var o=n[Gn]||null;e:switch(n=s.stateNode,s.type){case"input":if($n(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var m=u[Gn]||null;if(!m)throw Error(i(90));$n(u,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&Xr(u)}break e;case"textarea":Go(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&_n(n,!!o.multiple,s,!1)}}}var zm=!1;function t1(n,s,o){if(zm)return n(s,o);zm=!0;try{var u=n(s);return u}finally{if(zm=!1,(ko!==null||Xo!==null)&&(oh(),ko&&(s=ko,n=Xo,Xo=ko=null,e1(s),n)))for(s=0;s<n.length;s++)e1(n[s])}}function mc(n,s){var o=n.stateNode;if(o===null)return null;var u=o[Gn]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bm=!1;if(Yr)try{var gc={};Object.defineProperty(gc,"passive",{get:function(){Bm=!0}}),window.addEventListener("test",gc,gc),window.removeEventListener("test",gc,gc)}catch{Bm=!1}var Os=null,Im=null,Sf=null;function n1(){if(Sf)return Sf;var n,s=Im,o=s.length,u,m="value"in Os?Os.value:Os.textContent,g=m.length;for(n=0;n<o&&s[n]===m[n];n++);var b=o-n;for(u=1;u<=b&&s[o-u]===m[g-u];u++);return Sf=m.slice(n,1<u?1-u:void 0)}function Mf(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Ef(){return!0}function i1(){return!1}function mi(n){function s(o,u,m,g,b){this._reactName=o,this._targetInst=m,this.type=u,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ef:i1,this.isPropagationStopped=i1,this}return _(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ef)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ef)},persist:function(){},isPersistent:Ef}),s}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=mi(Ca),_c=_({},Ca,{view:0,detail:0}),vU=mi(_c),Hm,Gm,vc,bf=_({},_c,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vc&&(vc&&n.type==="mousemove"?(Hm=n.screenX-vc.screenX,Gm=n.screenY-vc.screenY):Gm=Hm=0,vc=n),Hm)},movementY:function(n){return"movementY"in n?n.movementY:Gm}}),r1=mi(bf),xU=_({},bf,{dataTransfer:0}),yU=mi(xU),SU=_({},_c,{relatedTarget:0}),Vm=mi(SU),MU=_({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),EU=mi(MU),TU=_({},Ca,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bU=mi(TU),AU=_({},Ca,{data:0}),s1=mi(AU),RU={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wU={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CU={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DU(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=CU[n])?!!s[n]:!1}function km(){return DU}var LU=_({},_c,{key:function(n){if(n.key){var s=RU[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Mf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wU[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(n){return n.type==="keypress"?Mf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),UU=mi(LU),OU=_({},bf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a1=mi(OU),NU=_({},_c,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),PU=mi(NU),FU=_({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),zU=mi(FU),BU=_({},bf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),IU=mi(BU),HU=_({},Ca,{newState:0,oldState:0}),GU=mi(HU),VU=[9,13,27,32],Xm=Yr&&"CompositionEvent"in window,xc=null;Yr&&"documentMode"in document&&(xc=document.documentMode);var kU=Yr&&"TextEvent"in window&&!xc,o1=Yr&&(!Xm||xc&&8<xc&&11>=xc),l1=" ",c1=!1;function u1(n,s){switch(n){case"keyup":return VU.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wo=!1;function XU(n,s){switch(n){case"compositionend":return f1(s);case"keypress":return s.which!==32?null:(c1=!0,l1);case"textInput":return n=s.data,n===l1&&c1?null:n;default:return null}}function WU(n,s){if(Wo)return n==="compositionend"||!Xm&&u1(n,s)?(n=n1(),Sf=Im=Os=null,Wo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return o1&&s.locale!=="ko"?null:s.data;default:return null}}var YU={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h1(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!YU[n.type]:s==="textarea"}function d1(n,s,o,u){ko?Xo?Xo.push(u):Xo=[u]:ko=u,s=ph(s,"onChange"),0<s.length&&(o=new Tf("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var yc=null,Sc=null;function qU(n){ZM(n,0)}function Af(n){var s=pe(n);if(Xr(s))return n}function p1(n,s){if(n==="change")return s}var m1=!1;if(Yr){var Wm;if(Yr){var Ym="oninput"in document;if(!Ym){var g1=document.createElement("div");g1.setAttribute("oninput","return;"),Ym=typeof g1.oninput=="function"}Wm=Ym}else Wm=!1;m1=Wm&&(!document.documentMode||9<document.documentMode)}function _1(){yc&&(yc.detachEvent("onpropertychange",v1),Sc=yc=null)}function v1(n){if(n.propertyName==="value"&&Af(Sc)){var s=[];d1(s,Sc,n,Fm(n)),t1(qU,s)}}function jU(n,s,o){n==="focusin"?(_1(),yc=s,Sc=o,yc.attachEvent("onpropertychange",v1)):n==="focusout"&&_1()}function ZU(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Af(Sc)}function KU(n,s){if(n==="click")return Af(s)}function QU(n,s){if(n==="input"||n==="change")return Af(s)}function JU(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Ni=typeof Object.is=="function"?Object.is:JU;function Mc(n,s){if(Ni(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var m=o[u];if(!Ne.call(s,m)||!Ni(n[m],s[m]))return!1}return!0}function x1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function y1(n,s){var o=x1(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=x1(o)}}function S1(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?S1(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function M1(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=zn(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=zn(n.document)}return s}function qm(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var $U=Yr&&"documentMode"in document&&11>=document.documentMode,Yo=null,jm=null,Ec=null,Zm=!1;function E1(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zm||Yo==null||Yo!==zn(u)||(u=Yo,"selectionStart"in u&&qm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ec&&Mc(Ec,u)||(Ec=u,u=ph(jm,"onSelect"),0<u.length&&(s=new Tf("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Yo)))}function Da(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var qo={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Km={},T1={};Yr&&(T1=document.createElement("div").style,"AnimationEvent"in window||(delete qo.animationend.animation,delete qo.animationiteration.animation,delete qo.animationstart.animation),"TransitionEvent"in window||delete qo.transitionend.transition);function La(n){if(Km[n])return Km[n];if(!qo[n])return n;var s=qo[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in T1)return Km[n]=s[o];return n}var b1=La("animationend"),A1=La("animationiteration"),R1=La("animationstart"),eO=La("transitionrun"),tO=La("transitionstart"),nO=La("transitioncancel"),w1=La("transitionend"),C1=new Map,Qm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qm.push("scrollEnd");function ur(n,s){C1.set(n,s),Ie(s,[n])}var Rf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Zi=[],jo=0,Jm=0;function wf(){for(var n=jo,s=Jm=jo=0;s<n;){var o=Zi[s];Zi[s++]=null;var u=Zi[s];Zi[s++]=null;var m=Zi[s];Zi[s++]=null;var g=Zi[s];if(Zi[s++]=null,u!==null&&m!==null){var b=u.pending;b===null?m.next=m:(m.next=b.next,b.next=m),u.pending=m}g!==0&&D1(o,m,g)}}function Cf(n,s,o,u){Zi[jo++]=n,Zi[jo++]=s,Zi[jo++]=o,Zi[jo++]=u,Jm|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function $m(n,s,o,u){return Cf(n,s,o,u),Df(n)}function Ua(n,s){return Cf(n,null,null,s),Df(n)}function D1(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var m=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(m=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,m&&s!==null&&(m=31-Ge(o),n=g.hiddenUpdates,u=n[m],u===null?n[m]=[s]:u.push(s),s.lane=o|536870912),g):null}function Df(n){if(50<Wc)throw Wc=0,l0=null,Error(i(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Zo={};function iO(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(n,s,o,u){return new iO(n,s,o,u)}function eg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qr(n,s){var o=n.alternate;return o===null?(o=Pi(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function L1(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function Lf(n,s,o,u,m,g){var b=0;if(u=n,typeof n=="function")eg(n)&&(b=1);else if(typeof n=="string")b=lN(n,o,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case w:return n=Pi(31,o,s,m),n.elementType=w,n.lanes=g,n;case S:return Oa(o.children,m,g,s);case M:b=8,m|=24;break;case y:return n=Pi(12,o,s,m|2),n.elementType=y,n.lanes=g,n;case L:return n=Pi(13,o,s,m),n.elementType=L,n.lanes=g,n;case U:return n=Pi(19,o,s,m),n.elementType=U,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case D:b=9;break e;case A:b=11;break e;case O:b=14;break e;case P:b=16,u=null;break e}b=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return s=Pi(b,o,s,m),s.elementType=n,s.type=u,s.lanes=g,s}function Oa(n,s,o,u){return n=Pi(7,n,u,s),n.lanes=o,n}function tg(n,s,o){return n=Pi(6,n,null,s),n.lanes=o,n}function U1(n){var s=Pi(18,null,null,0);return s.stateNode=n,s}function ng(n,s,o){return s=Pi(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var O1=new WeakMap;function Ki(n,s){if(typeof n=="object"&&n!==null){var o=O1.get(n);return o!==void 0?o:(s={value:n,source:s,stack:lt(s)},O1.set(n,s),s)}return{value:n,source:s,stack:lt(s)}}var Ko=[],Qo=0,Uf=null,Tc=0,Qi=[],Ji=0,Ns=null,br=1,Ar="";function jr(n,s){Ko[Qo++]=Tc,Ko[Qo++]=Uf,Uf=n,Tc=s}function N1(n,s,o){Qi[Ji++]=br,Qi[Ji++]=Ar,Qi[Ji++]=Ns,Ns=n;var u=br;n=Ar;var m=32-Ge(u)-1;u&=~(1<<m),o+=1;var g=32-Ge(s)+m;if(30<g){var b=m-m%5;g=(u&(1<<b)-1).toString(32),u>>=b,m-=b,br=1<<32-Ge(s)+m|o<<m|u,Ar=g+n}else br=1<<g|o<<m|u,Ar=n}function ig(n){n.return!==null&&(jr(n,1),N1(n,1,0))}function rg(n){for(;n===Uf;)Uf=Ko[--Qo],Ko[Qo]=null,Tc=Ko[--Qo],Ko[Qo]=null;for(;n===Ns;)Ns=Qi[--Ji],Qi[Ji]=null,Ar=Qi[--Ji],Qi[Ji]=null,br=Qi[--Ji],Qi[Ji]=null}function P1(n,s){Qi[Ji++]=br,Qi[Ji++]=Ar,Qi[Ji++]=Ns,br=s.id,Ar=s.overflow,Ns=n}var kn=null,en=null,wt=!1,Ps=null,$i=!1,sg=Error(i(519));function Fs(n){var s=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bc(Ki(s,n)),sg}function F1(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[En]=n,s[Gn]=u,o){case"dialog":Mt("cancel",s),Mt("close",s);break;case"iframe":case"object":case"embed":Mt("load",s);break;case"video":case"audio":for(o=0;o<qc.length;o++)Mt(qc[o],s);break;case"source":Mt("error",s);break;case"img":case"image":case"link":Mt("error",s),Mt("load",s);break;case"details":Mt("toggle",s);break;case"input":Mt("invalid",s),ii(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Mt("invalid",s);break;case"textarea":Mt("invalid",s),Tr(s,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||$M(s.textContent,o)?(u.popover!=null&&(Mt("beforetoggle",s),Mt("toggle",s)),u.onScroll!=null&&Mt("scroll",s),u.onScrollEnd!=null&&Mt("scrollend",s),u.onClick!=null&&(s.onclick=Wr),s=!0):s=!1,s||Fs(n,!0)}function z1(n){for(kn=n.return;kn;)switch(kn.tag){case 5:case 31:case 13:$i=!1;return;case 27:case 3:$i=!0;return;default:kn=kn.return}}function Jo(n){if(n!==kn)return!1;if(!wt)return z1(n),wt=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||E0(n.type,n.memoizedProps)),o=!o),o&&en&&Fs(n),z1(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));en=lE(n)}else if(s===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));en=lE(n)}else s===27?(s=en,Ks(n.type)?(n=w0,w0=null,en=n):en=s):en=kn?tr(n.stateNode.nextSibling):null;return!0}function Na(){en=kn=null,wt=!1}function ag(){var n=Ps;return n!==null&&(xi===null?xi=n:xi.push.apply(xi,n),Ps=null),n}function bc(n){Ps===null?Ps=[n]:Ps.push(n)}var og=I(null),Pa=null,Zr=null;function zs(n,s,o){se(og,s._currentValue),s._currentValue=o}function Kr(n){n._currentValue=og.current,Y(og)}function lg(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function cg(n,s,o,u){var m=n.child;for(m!==null&&(m.return=n);m!==null;){var g=m.dependencies;if(g!==null){var b=m.child;g=g.firstContext;e:for(;g!==null;){var N=g;g=m;for(var q=0;q<s.length;q++)if(N.context===s[q]){g.lanes|=o,N=g.alternate,N!==null&&(N.lanes|=o),lg(g.return,o,n),u||(b=null);break e}g=N.next}}else if(m.tag===18){if(b=m.return,b===null)throw Error(i(341));b.lanes|=o,g=b.alternate,g!==null&&(g.lanes|=o),lg(b,o,n),b=null}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===n){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}}function $o(n,s,o,u){n=null;for(var m=s,g=!1;m!==null;){if(!g){if((m.flags&524288)!==0)g=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var b=m.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var N=m.type;Ni(m.pendingProps.value,b.value)||(n!==null?n.push(N):n=[N])}}else if(m===le.current){if(b=m.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(n!==null?n.push(Jc):n=[Jc])}m=m.return}n!==null&&cg(s,n,o,u),s.flags|=262144}function Of(n){for(n=n.firstContext;n!==null;){if(!Ni(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Fa(n){Pa=n,Zr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Xn(n){return B1(Pa,n)}function Nf(n,s){return Pa===null&&Fa(n),B1(n,s)}function B1(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Zr===null){if(n===null)throw Error(i(308));Zr=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Zr=Zr.next=s;return o}var rO=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},sO=r.unstable_scheduleCallback,aO=r.unstable_NormalPriority,Tn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ug(){return{controller:new rO,data:new Map,refCount:0}}function Ac(n){n.refCount--,n.refCount===0&&sO(aO,function(){n.controller.abort()})}var Rc=null,fg=0,el=0,tl=null;function oO(n,s){if(Rc===null){var o=Rc=[];fg=0,el=p0(),tl={status:"pending",value:void 0,then:function(u){o.push(u)}}}return fg++,s.then(I1,I1),s}function I1(){if(--fg===0&&Rc!==null){tl!==null&&(tl.status="fulfilled");var n=Rc;Rc=null,el=0,tl=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function lO(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(m){o.push(m)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var m=0;m<o.length;m++)(0,o[m])(s)},function(m){for(u.status="rejected",u.reason=m,m=0;m<o.length;m++)(0,o[m])(void 0)}),u}var H1=F.S;F.S=function(n,s){EM=T(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&oO(n,s),H1!==null&&H1(n,s)};var za=I(null);function hg(){var n=za.current;return n!==null?n:Qt.pooledCache}function Pf(n,s){s===null?se(za,za.current):se(za,s.pool)}function G1(){var n=hg();return n===null?null:{parent:Tn._currentValue,pool:n}}var nl=Error(i(460)),dg=Error(i(474)),Ff=Error(i(542)),zf={then:function(){}};function V1(n){return n=n.status,n==="fulfilled"||n==="rejected"}function k1(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Wr,Wr),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,W1(n),n;default:if(typeof s.status=="string")s.then(Wr,Wr);else{if(n=Qt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var m=s;m.status="fulfilled",m.value=u}},function(u){if(s.status==="pending"){var m=s;m.status="rejected",m.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,W1(n),n}throw Ia=s,nl}}function Ba(n){try{var s=n._init;return s(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ia=o,nl):o}}var Ia=null;function X1(){if(Ia===null)throw Error(i(459));var n=Ia;return Ia=null,n}function W1(n){if(n===nl||n===Ff)throw Error(i(483))}var il=null,wc=0;function Bf(n){var s=wc;return wc+=1,il===null&&(il=[]),k1(il,n,s)}function Cc(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function If(n,s){throw s.$$typeof===x?Error(i(525)):(n=Object.prototype.toString.call(s),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function Y1(n){function s(ie,J){if(n){var ae=ie.deletions;ae===null?(ie.deletions=[J],ie.flags|=16):ae.push(J)}}function o(ie,J){if(!n)return null;for(;J!==null;)s(ie,J),J=J.sibling;return null}function u(ie){for(var J=new Map;ie!==null;)ie.key!==null?J.set(ie.key,ie):J.set(ie.index,ie),ie=ie.sibling;return J}function m(ie,J){return ie=qr(ie,J),ie.index=0,ie.sibling=null,ie}function g(ie,J,ae){return ie.index=ae,n?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<J?(ie.flags|=67108866,J):ae):(ie.flags|=67108866,J)):(ie.flags|=1048576,J)}function b(ie){return n&&ie.alternate===null&&(ie.flags|=67108866),ie}function N(ie,J,ae,ye){return J===null||J.tag!==6?(J=tg(ae,ie.mode,ye),J.return=ie,J):(J=m(J,ae),J.return=ie,J)}function q(ie,J,ae,ye){var nt=ae.type;return nt===S?xe(ie,J,ae.props.children,ye,ae.key):J!==null&&(J.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===P&&Ba(nt)===J.type)?(J=m(J,ae.props),Cc(J,ae),J.return=ie,J):(J=Lf(ae.type,ae.key,ae.props,null,ie.mode,ye),Cc(J,ae),J.return=ie,J)}function oe(ie,J,ae,ye){return J===null||J.tag!==4||J.stateNode.containerInfo!==ae.containerInfo||J.stateNode.implementation!==ae.implementation?(J=ng(ae,ie.mode,ye),J.return=ie,J):(J=m(J,ae.children||[]),J.return=ie,J)}function xe(ie,J,ae,ye,nt){return J===null||J.tag!==7?(J=Oa(ae,ie.mode,ye,nt),J.return=ie,J):(J=m(J,ae),J.return=ie,J)}function Me(ie,J,ae){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=tg(""+J,ie.mode,ae),J.return=ie,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return ae=Lf(J.type,J.key,J.props,null,ie.mode,ae),Cc(ae,J),ae.return=ie,ae;case E:return J=ng(J,ie.mode,ae),J.return=ie,J;case P:return J=Ba(J),Me(ie,J,ae)}if(Z(J)||X(J))return J=Oa(J,ie.mode,ae,null),J.return=ie,J;if(typeof J.then=="function")return Me(ie,Bf(J),ae);if(J.$$typeof===R)return Me(ie,Nf(ie,J),ae);If(ie,J)}return null}function ue(ie,J,ae,ye){var nt=J!==null?J.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return nt!==null?null:N(ie,J,""+ae,ye);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case v:return ae.key===nt?q(ie,J,ae,ye):null;case E:return ae.key===nt?oe(ie,J,ae,ye):null;case P:return ae=Ba(ae),ue(ie,J,ae,ye)}if(Z(ae)||X(ae))return nt!==null?null:xe(ie,J,ae,ye,null);if(typeof ae.then=="function")return ue(ie,J,Bf(ae),ye);if(ae.$$typeof===R)return ue(ie,J,Nf(ie,ae),ye);If(ie,ae)}return null}function ge(ie,J,ae,ye,nt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return ie=ie.get(ae)||null,N(J,ie,""+ye,nt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case v:return ie=ie.get(ye.key===null?ae:ye.key)||null,q(J,ie,ye,nt);case E:return ie=ie.get(ye.key===null?ae:ye.key)||null,oe(J,ie,ye,nt);case P:return ye=Ba(ye),ge(ie,J,ae,ye,nt)}if(Z(ye)||X(ye))return ie=ie.get(ae)||null,xe(J,ie,ye,nt,null);if(typeof ye.then=="function")return ge(ie,J,ae,Bf(ye),nt);if(ye.$$typeof===R)return ge(ie,J,ae,Nf(J,ye),nt);If(J,ye)}return null}function qe(ie,J,ae,ye){for(var nt=null,Ot=null,Je=J,_t=J=0,bt=null;Je!==null&&_t<ae.length;_t++){Je.index>_t?(bt=Je,Je=null):bt=Je.sibling;var Nt=ue(ie,Je,ae[_t],ye);if(Nt===null){Je===null&&(Je=bt);break}n&&Je&&Nt.alternate===null&&s(ie,Je),J=g(Nt,J,_t),Ot===null?nt=Nt:Ot.sibling=Nt,Ot=Nt,Je=bt}if(_t===ae.length)return o(ie,Je),wt&&jr(ie,_t),nt;if(Je===null){for(;_t<ae.length;_t++)Je=Me(ie,ae[_t],ye),Je!==null&&(J=g(Je,J,_t),Ot===null?nt=Je:Ot.sibling=Je,Ot=Je);return wt&&jr(ie,_t),nt}for(Je=u(Je);_t<ae.length;_t++)bt=ge(Je,ie,_t,ae[_t],ye),bt!==null&&(n&&bt.alternate!==null&&Je.delete(bt.key===null?_t:bt.key),J=g(bt,J,_t),Ot===null?nt=bt:Ot.sibling=bt,Ot=bt);return n&&Je.forEach(function(ta){return s(ie,ta)}),wt&&jr(ie,_t),nt}function rt(ie,J,ae,ye){if(ae==null)throw Error(i(151));for(var nt=null,Ot=null,Je=J,_t=J=0,bt=null,Nt=ae.next();Je!==null&&!Nt.done;_t++,Nt=ae.next()){Je.index>_t?(bt=Je,Je=null):bt=Je.sibling;var ta=ue(ie,Je,Nt.value,ye);if(ta===null){Je===null&&(Je=bt);break}n&&Je&&ta.alternate===null&&s(ie,Je),J=g(ta,J,_t),Ot===null?nt=ta:Ot.sibling=ta,Ot=ta,Je=bt}if(Nt.done)return o(ie,Je),wt&&jr(ie,_t),nt;if(Je===null){for(;!Nt.done;_t++,Nt=ae.next())Nt=Me(ie,Nt.value,ye),Nt!==null&&(J=g(Nt,J,_t),Ot===null?nt=Nt:Ot.sibling=Nt,Ot=Nt);return wt&&jr(ie,_t),nt}for(Je=u(Je);!Nt.done;_t++,Nt=ae.next())Nt=ge(Je,ie,_t,Nt.value,ye),Nt!==null&&(n&&Nt.alternate!==null&&Je.delete(Nt.key===null?_t:Nt.key),J=g(Nt,J,_t),Ot===null?nt=Nt:Ot.sibling=Nt,Ot=Nt);return n&&Je.forEach(function(xN){return s(ie,xN)}),wt&&jr(ie,_t),nt}function Wt(ie,J,ae,ye){if(typeof ae=="object"&&ae!==null&&ae.type===S&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case v:e:{for(var nt=ae.key;J!==null;){if(J.key===nt){if(nt=ae.type,nt===S){if(J.tag===7){o(ie,J.sibling),ye=m(J,ae.props.children),ye.return=ie,ie=ye;break e}}else if(J.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===P&&Ba(nt)===J.type){o(ie,J.sibling),ye=m(J,ae.props),Cc(ye,ae),ye.return=ie,ie=ye;break e}o(ie,J);break}else s(ie,J);J=J.sibling}ae.type===S?(ye=Oa(ae.props.children,ie.mode,ye,ae.key),ye.return=ie,ie=ye):(ye=Lf(ae.type,ae.key,ae.props,null,ie.mode,ye),Cc(ye,ae),ye.return=ie,ie=ye)}return b(ie);case E:e:{for(nt=ae.key;J!==null;){if(J.key===nt)if(J.tag===4&&J.stateNode.containerInfo===ae.containerInfo&&J.stateNode.implementation===ae.implementation){o(ie,J.sibling),ye=m(J,ae.children||[]),ye.return=ie,ie=ye;break e}else{o(ie,J);break}else s(ie,J);J=J.sibling}ye=ng(ae,ie.mode,ye),ye.return=ie,ie=ye}return b(ie);case P:return ae=Ba(ae),Wt(ie,J,ae,ye)}if(Z(ae))return qe(ie,J,ae,ye);if(X(ae)){if(nt=X(ae),typeof nt!="function")throw Error(i(150));return ae=nt.call(ae),rt(ie,J,ae,ye)}if(typeof ae.then=="function")return Wt(ie,J,Bf(ae),ye);if(ae.$$typeof===R)return Wt(ie,J,Nf(ie,ae),ye);If(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,J!==null&&J.tag===6?(o(ie,J.sibling),ye=m(J,ae),ye.return=ie,ie=ye):(o(ie,J),ye=tg(ae,ie.mode,ye),ye.return=ie,ie=ye),b(ie)):o(ie,J)}return function(ie,J,ae,ye){try{wc=0;var nt=Wt(ie,J,ae,ye);return il=null,nt}catch(Je){if(Je===nl||Je===Ff)throw Je;var Ot=Pi(29,Je,null,ie.mode);return Ot.lanes=ye,Ot.return=ie,Ot}}}var Ha=Y1(!0),q1=Y1(!1),Bs=!1;function pg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mg(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Is(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Hs(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Pt&2)!==0){var m=u.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s,s=Df(n),D1(n,null,o),s}return Cf(n,u,s,o),Df(n)}function Dc(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Er(n,o)}}function gg(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var m=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?m=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?m=g=s:g=g.next=s}else m=g=s;o={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var _g=!1;function Lc(){if(_g){var n=tl;if(n!==null)throw n}}function Uc(n,s,o,u){_g=!1;var m=n.updateQueue;Bs=!1;var g=m.firstBaseUpdate,b=m.lastBaseUpdate,N=m.shared.pending;if(N!==null){m.shared.pending=null;var q=N,oe=q.next;q.next=null,b===null?g=oe:b.next=oe,b=q;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==b&&(N===null?xe.firstBaseUpdate=oe:N.next=oe,xe.lastBaseUpdate=q))}if(g!==null){var Me=m.baseState;b=0,xe=oe=q=null,N=g;do{var ue=N.lane&-536870913,ge=ue!==N.lane;if(ge?(Tt&ue)===ue:(u&ue)===ue){ue!==0&&ue===el&&(_g=!0),xe!==null&&(xe=xe.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var qe=n,rt=N;ue=s;var Wt=o;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){Me=qe.call(Wt,Me,ue);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,ue=typeof qe=="function"?qe.call(Wt,Me,ue):qe,ue==null)break e;Me=_({},Me,ue);break e;case 2:Bs=!0}}ue=N.callback,ue!==null&&(n.flags|=64,ge&&(n.flags|=8192),ge=m.callbacks,ge===null?m.callbacks=[ue]:ge.push(ue))}else ge={lane:ue,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(oe=xe=ge,q=Me):xe=xe.next=ge,b|=ue;if(N=N.next,N===null){if(N=m.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);xe===null&&(q=Me),m.baseState=q,m.firstBaseUpdate=oe,m.lastBaseUpdate=xe,g===null&&(m.shared.lanes=0),Ws|=b,n.lanes=b,n.memoizedState=Me}}function j1(n,s){if(typeof n!="function")throw Error(i(191,n));n.call(s)}function Z1(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)j1(o[n],s)}var rl=I(null),Hf=I(0);function K1(n,s){n=ss,se(Hf,n),se(rl,s),ss=n|s.baseLanes}function vg(){se(Hf,ss),se(rl,rl.current)}function xg(){ss=Hf.current,Y(rl),Y(Hf)}var Fi=I(null),er=null;function Gs(n){var s=n.alternate;se(vn,vn.current&1),se(Fi,n),er===null&&(s===null||rl.current!==null||s.memoizedState!==null)&&(er=n)}function yg(n){se(vn,vn.current),se(Fi,n),er===null&&(er=n)}function Q1(n){n.tag===22?(se(vn,vn.current),se(Fi,n),er===null&&(er=n)):Vs()}function Vs(){se(vn,vn.current),se(Fi,Fi.current)}function zi(n){Y(Fi),er===n&&(er=null),Y(vn)}var vn=I(0);function Gf(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||A0(o)||R0(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Qr=0,pt=null,kt=null,bn=null,Vf=!1,sl=!1,Ga=!1,kf=0,Oc=0,al=null,cO=0;function fn(){throw Error(i(321))}function Sg(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!Ni(n[o],s[o]))return!1;return!0}function Mg(n,s,o,u,m,g){return Qr=g,pt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,F.H=n===null||n.memoizedState===null?NS:zg,Ga=!1,g=o(u,m),Ga=!1,sl&&(g=$1(s,o,u,m)),J1(n),g}function J1(n){F.H=Fc;var s=kt!==null&&kt.next!==null;if(Qr=0,bn=kt=pt=null,Vf=!1,Oc=0,al=null,s)throw Error(i(300));n===null||An||(n=n.dependencies,n!==null&&Of(n)&&(An=!0))}function $1(n,s,o,u){pt=n;var m=0;do{if(sl&&(al=null),Oc=0,sl=!1,25<=m)throw Error(i(301));if(m+=1,bn=kt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}F.H=PS,g=s(o,u)}while(sl);return g}function uO(){var n=F.H,s=n.useState()[0];return s=typeof s.then=="function"?Nc(s):s,n=n.useState()[0],(kt!==null?kt.memoizedState:null)!==n&&(pt.flags|=1024),s}function Eg(){var n=kf!==0;return kf=0,n}function Tg(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function bg(n){if(Vf){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Vf=!1}Qr=0,bn=kt=pt=null,sl=!1,Oc=kf=0,al=null}function ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?pt.memoizedState=bn=n:bn=bn.next=n,bn}function xn(){if(kt===null){var n=pt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var s=bn===null?pt.memoizedState:bn.next;if(s!==null)bn=s,kt=n;else{if(n===null)throw pt.alternate===null?Error(i(467)):Error(i(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},bn===null?pt.memoizedState=bn=n:bn=bn.next=n}return bn}function Xf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nc(n){var s=Oc;return Oc+=1,al===null&&(al=[]),n=k1(al,n,s),s=pt,(bn===null?s.memoizedState:bn.next)===null&&(s=s.alternate,F.H=s===null||s.memoizedState===null?NS:zg),n}function Wf(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Nc(n);if(n.$$typeof===R)return Xn(n)}throw Error(i(438,String(n)))}function Ag(n){var s=null,o=pt.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=pt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(m){return m.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Xf(),pt.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=C;return s.index++,o}function Jr(n,s){return typeof s=="function"?s(n):s}function Yf(n){var s=xn();return Rg(s,kt,n)}function Rg(n,s,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var m=n.baseQueue,g=u.pending;if(g!==null){if(m!==null){var b=m.next;m.next=g.next,g.next=b}s.baseQueue=m=g,u.pending=null}if(g=n.baseState,m===null)n.memoizedState=g;else{s=m.next;var N=b=null,q=null,oe=s,xe=!1;do{var Me=oe.lane&-536870913;if(Me!==oe.lane?(Tt&Me)===Me:(Qr&Me)===Me){var ue=oe.revertLane;if(ue===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Me===el&&(xe=!0);else if((Qr&ue)===ue){oe=oe.next,ue===el&&(xe=!0);continue}else Me={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},q===null?(N=q=Me,b=g):q=q.next=Me,pt.lanes|=ue,Ws|=ue;Me=oe.action,Ga&&o(g,Me),g=oe.hasEagerState?oe.eagerState:o(g,Me)}else ue={lane:Me,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},q===null?(N=q=ue,b=g):q=q.next=ue,pt.lanes|=Me,Ws|=Me;oe=oe.next}while(oe!==null&&oe!==s);if(q===null?b=g:q.next=N,!Ni(g,n.memoizedState)&&(An=!0,xe&&(o=tl,o!==null)))throw o;n.memoizedState=g,n.baseState=b,n.baseQueue=q,u.lastRenderedState=g}return m===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function wg(n){var s=xn(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,m=o.pending,g=s.memoizedState;if(m!==null){o.pending=null;var b=m=m.next;do g=n(g,b.action),b=b.next;while(b!==m);Ni(g,s.memoizedState)||(An=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),o.lastRenderedState=g}return[g,u]}function eS(n,s,o){var u=pt,m=xn(),g=wt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!Ni((kt||m).memoizedState,o);if(b&&(m.memoizedState=o,An=!0),m=m.queue,Lg(iS.bind(null,u,m,n),[n]),m.getSnapshot!==s||b||bn!==null&&bn.memoizedState.tag&1){if(u.flags|=2048,ol(9,{destroy:void 0},nS.bind(null,u,m,o,s),null),Qt===null)throw Error(i(349));g||(Qr&127)!==0||tS(u,s,o)}return o}function tS(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=pt.updateQueue,s===null?(s=Xf(),pt.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function nS(n,s,o,u){s.value=o,s.getSnapshot=u,rS(s)&&sS(n)}function iS(n,s,o){return o(function(){rS(s)&&sS(n)})}function rS(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!Ni(n,o)}catch{return!0}}function sS(n){var s=Ua(n,2);s!==null&&yi(s,n,2)}function Cg(n){var s=ri();if(typeof n=="function"){var o=n;if(n=o(),Ga){$e(!0);try{o()}finally{$e(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:n},s}function aS(n,s,o,u){return n.baseState=o,Rg(n,kt,typeof u=="function"?u:Jr)}function fO(n,s,o,u,m){if(Zf(n))throw Error(i(485));if(n=s.action,n!==null){var g={payload:m,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){g.listeners.push(b)}};F.T!==null?o(!0):g.isTransition=!1,u(g),o=s.pending,o===null?(g.next=s.pending=g,oS(s,g)):(g.next=o.next,s.pending=o.next=g)}}function oS(n,s){var o=s.action,u=s.payload,m=n.state;if(s.isTransition){var g=F.T,b={};F.T=b;try{var N=o(m,u),q=F.S;q!==null&&q(b,N),lS(n,s,N)}catch(oe){Dg(n,s,oe)}finally{g!==null&&b.types!==null&&(g.types=b.types),F.T=g}}else try{g=o(m,u),lS(n,s,g)}catch(oe){Dg(n,s,oe)}}function lS(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){cS(n,s,u)},function(u){return Dg(n,s,u)}):cS(n,s,o)}function cS(n,s,o){s.status="fulfilled",s.value=o,uS(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,oS(n,o)))}function Dg(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,uS(s),s=s.next;while(s!==u)}n.action=null}function uS(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function fS(n,s){return s}function hS(n,s){if(wt){var o=Qt.formState;if(o!==null){e:{var u=pt;if(wt){if(en){t:{for(var m=en,g=$i;m.nodeType!==8;){if(!g){m=null;break t}if(m=tr(m.nextSibling),m===null){m=null;break t}}g=m.data,m=g==="F!"||g==="F"?m:null}if(m){en=tr(m.nextSibling),u=m.data==="F!";break e}}Fs(u)}u=!1}u&&(s=o[0])}}return o=ri(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fS,lastRenderedState:s},o.queue=u,o=LS.bind(null,pt,u),u.dispatch=o,u=Cg(!1),g=Fg.bind(null,pt,!1,u.queue),u=ri(),m={state:s,dispatch:null,action:n,pending:null},u.queue=m,o=fO.bind(null,pt,m,g,o),m.dispatch=o,u.memoizedState=n,[s,o,!1]}function dS(n){var s=xn();return pS(s,kt,n)}function pS(n,s,o){if(s=Rg(n,s,fS)[0],n=Yf(Jr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Nc(s)}catch(b){throw b===nl?Ff:b}else u=s;s=xn();var m=s.queue,g=m.dispatch;return o!==s.memoizedState&&(pt.flags|=2048,ol(9,{destroy:void 0},hO.bind(null,m,o),null)),[u,g,n]}function hO(n,s){n.action=s}function mS(n){var s=xn(),o=kt;if(o!==null)return pS(s,o,n);xn(),s=s.memoizedState,o=xn();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function ol(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=pt.updateQueue,s===null&&(s=Xf(),pt.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function gS(){return xn().memoizedState}function qf(n,s,o,u){var m=ri();pt.flags|=n,m.memoizedState=ol(1|s,{destroy:void 0},o,u===void 0?null:u)}function jf(n,s,o,u){var m=xn();u=u===void 0?null:u;var g=m.memoizedState.inst;kt!==null&&u!==null&&Sg(u,kt.memoizedState.deps)?m.memoizedState=ol(s,g,o,u):(pt.flags|=n,m.memoizedState=ol(1|s,g,o,u))}function _S(n,s){qf(8390656,8,n,s)}function Lg(n,s){jf(2048,8,n,s)}function dO(n){pt.flags|=4;var s=pt.updateQueue;if(s===null)s=Xf(),pt.updateQueue=s,s.events=[n];else{var o=s.events;o===null?s.events=[n]:o.push(n)}}function vS(n){var s=xn().memoizedState;return dO({ref:s,nextImpl:n}),function(){if((Pt&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}function xS(n,s){return jf(4,2,n,s)}function yS(n,s){return jf(4,4,n,s)}function SS(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function MS(n,s,o){o=o!=null?o.concat([n]):null,jf(4,4,SS.bind(null,s,n),o)}function Ug(){}function ES(n,s){var o=xn();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Sg(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function TS(n,s){var o=xn();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Sg(s,u[1]))return u[0];if(u=n(),Ga){$e(!0);try{n()}finally{$e(!1)}}return o.memoizedState=[u,s],u}function Og(n,s,o){return o===void 0||(Qr&1073741824)!==0&&(Tt&261930)===0?n.memoizedState=s:(n.memoizedState=o,n=bM(),pt.lanes|=n,Ws|=n,o)}function bS(n,s,o,u){return Ni(o,s)?o:rl.current!==null?(n=Og(n,o,u),Ni(n,s)||(An=!0),n):(Qr&42)===0||(Qr&1073741824)!==0&&(Tt&261930)===0?(An=!0,n.memoizedState=o):(n=bM(),pt.lanes|=n,Ws|=n,s)}function AS(n,s,o,u,m){var g=k.p;k.p=g!==0&&8>g?g:8;var b=F.T,N={};F.T=N,Fg(n,!1,s,o);try{var q=m(),oe=F.S;if(oe!==null&&oe(N,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var xe=lO(q,u);Pc(n,s,xe,Hi(n))}else Pc(n,s,u,Hi(n))}catch(Me){Pc(n,s,{then:function(){},status:"rejected",reason:Me},Hi())}finally{k.p=g,b!==null&&N.types!==null&&(b.types=N.types),F.T=b}}function pO(){}function Ng(n,s,o,u){if(n.tag!==5)throw Error(i(476));var m=RS(n).queue;AS(n,m,s,V,o===null?pO:function(){return wS(n),o(u)})}function RS(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:V},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function wS(n){var s=RS(n);s.next===null&&(s=n.alternate.memoizedState),Pc(n,s.next.queue,{},Hi())}function Pg(){return Xn(Jc)}function CS(){return xn().memoizedState}function DS(){return xn().memoizedState}function mO(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=Hi();n=Is(o);var u=Hs(s,n,o);u!==null&&(yi(u,s,o),Dc(u,s,o)),s={cache:ug()},n.payload=s;return}s=s.return}}function gO(n,s,o){var u=Hi();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zf(n)?US(s,o):(o=$m(n,s,o,u),o!==null&&(yi(o,n,u),OS(o,s,u)))}function LS(n,s,o){var u=Hi();Pc(n,s,o,u)}function Pc(n,s,o,u){var m={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zf(n))US(s,m);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var b=s.lastRenderedState,N=g(b,o);if(m.hasEagerState=!0,m.eagerState=N,Ni(N,b))return Cf(n,s,m,0),Qt===null&&wf(),!1}catch{}if(o=$m(n,s,m,u),o!==null)return yi(o,n,u),OS(o,s,u),!0}return!1}function Fg(n,s,o,u){if(u={lane:2,revertLane:p0(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Zf(n)){if(s)throw Error(i(479))}else s=$m(n,o,u,2),s!==null&&yi(s,n,2)}function Zf(n){var s=n.alternate;return n===pt||s!==null&&s===pt}function US(n,s){sl=Vf=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function OS(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Er(n,o)}}var Fc={readContext:Xn,use:Wf,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};Fc.useEffectEvent=fn;var NS={readContext:Xn,use:Wf,useCallback:function(n,s){return ri().memoizedState=[n,s===void 0?null:s],n},useContext:Xn,useEffect:_S,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,qf(4194308,4,SS.bind(null,s,n),o)},useLayoutEffect:function(n,s){return qf(4194308,4,n,s)},useInsertionEffect:function(n,s){qf(4,2,n,s)},useMemo:function(n,s){var o=ri();s=s===void 0?null:s;var u=n();if(Ga){$e(!0);try{n()}finally{$e(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=ri();if(o!==void 0){var m=o(s);if(Ga){$e(!0);try{o(s)}finally{$e(!1)}}}else m=s;return u.memoizedState=u.baseState=m,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:m},u.queue=n,n=n.dispatch=gO.bind(null,pt,n),[u.memoizedState,n]},useRef:function(n){var s=ri();return n={current:n},s.memoizedState=n},useState:function(n){n=Cg(n);var s=n.queue,o=LS.bind(null,pt,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:Ug,useDeferredValue:function(n,s){var o=ri();return Og(o,n,s)},useTransition:function(){var n=Cg(!1);return n=AS.bind(null,pt,n.queue,!0,!1),ri().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=pt,m=ri();if(wt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),Qt===null)throw Error(i(349));(Tt&127)!==0||tS(u,s,o)}m.memoizedState=o;var g={value:o,getSnapshot:s};return m.queue=g,_S(iS.bind(null,u,g,n),[n]),u.flags|=2048,ol(9,{destroy:void 0},nS.bind(null,u,g,o,s),null),o},useId:function(){var n=ri(),s=Qt.identifierPrefix;if(wt){var o=Ar,u=br;o=(u&~(1<<32-Ge(u)-1)).toString(32)+o,s="_"+s+"R_"+o,o=kf++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=cO++,s="_"+s+"r_"+o.toString(32)+"_";return n.memoizedState=s},useHostTransitionStatus:Pg,useFormState:hS,useActionState:hS,useOptimistic:function(n){var s=ri();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Fg.bind(null,pt,!0,o),o.dispatch=s,[n,s]},useMemoCache:Ag,useCacheRefresh:function(){return ri().memoizedState=mO.bind(null,pt)},useEffectEvent:function(n){var s=ri(),o={impl:n};return s.memoizedState=o,function(){if((Pt&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},zg={readContext:Xn,use:Wf,useCallback:ES,useContext:Xn,useEffect:Lg,useImperativeHandle:MS,useInsertionEffect:xS,useLayoutEffect:yS,useMemo:TS,useReducer:Yf,useRef:gS,useState:function(){return Yf(Jr)},useDebugValue:Ug,useDeferredValue:function(n,s){var o=xn();return bS(o,kt.memoizedState,n,s)},useTransition:function(){var n=Yf(Jr)[0],s=xn().memoizedState;return[typeof n=="boolean"?n:Nc(n),s]},useSyncExternalStore:eS,useId:CS,useHostTransitionStatus:Pg,useFormState:dS,useActionState:dS,useOptimistic:function(n,s){var o=xn();return aS(o,kt,n,s)},useMemoCache:Ag,useCacheRefresh:DS};zg.useEffectEvent=vS;var PS={readContext:Xn,use:Wf,useCallback:ES,useContext:Xn,useEffect:Lg,useImperativeHandle:MS,useInsertionEffect:xS,useLayoutEffect:yS,useMemo:TS,useReducer:wg,useRef:gS,useState:function(){return wg(Jr)},useDebugValue:Ug,useDeferredValue:function(n,s){var o=xn();return kt===null?Og(o,n,s):bS(o,kt.memoizedState,n,s)},useTransition:function(){var n=wg(Jr)[0],s=xn().memoizedState;return[typeof n=="boolean"?n:Nc(n),s]},useSyncExternalStore:eS,useId:CS,useHostTransitionStatus:Pg,useFormState:mS,useActionState:mS,useOptimistic:function(n,s){var o=xn();return kt!==null?aS(o,kt,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Ag,useCacheRefresh:DS};PS.useEffectEvent=vS;function Bg(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:_({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ig={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Hi(),m=Is(u);m.payload=s,o!=null&&(m.callback=o),s=Hs(n,m,u),s!==null&&(yi(s,n,u),Dc(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Hi(),m=Is(u);m.tag=1,m.payload=s,o!=null&&(m.callback=o),s=Hs(n,m,u),s!==null&&(yi(s,n,u),Dc(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Hi(),u=Is(o);u.tag=2,s!=null&&(u.callback=s),s=Hs(n,u,o),s!==null&&(yi(s,n,o),Dc(s,n,o))}};function FS(n,s,o,u,m,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,b):s.prototype&&s.prototype.isPureReactComponent?!Mc(o,u)||!Mc(m,g):!0}function zS(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Ig.enqueueReplaceState(s,s.state,null)}function Va(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=_({},o));for(var m in n)o[m]===void 0&&(o[m]=n[m])}return o}function BS(n){Rf(n)}function IS(n){console.error(n)}function HS(n){Rf(n)}function Kf(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function GS(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function Hg(n,s,o){return o=Is(o),o.tag=3,o.payload={element:null},o.callback=function(){Kf(n,s)},o}function VS(n){return n=Is(n),n.tag=3,n}function kS(n,s,o,u){var m=o.type.getDerivedStateFromError;if(typeof m=="function"){var g=u.value;n.payload=function(){return m(g)},n.callback=function(){GS(s,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){GS(s,o,u),typeof m!="function"&&(Ys===null?Ys=new Set([this]):Ys.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function _O(n,s,o,u,m){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&$o(s,o,m,!0),o=Fi.current,o!==null){switch(o.tag){case 31:case 13:return er===null?lh():o.alternate===null&&hn===0&&(hn=3),o.flags&=-257,o.flags|=65536,o.lanes=m,u===zf?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),f0(n,u,m)),!1;case 22:return o.flags|=65536,u===zf?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),f0(n,u,m)),!1}throw Error(i(435,o.tag))}return f0(n,u,m),lh(),!1}if(wt)return s=Fi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=m,u!==sg&&(n=Error(i(422),{cause:u}),bc(Ki(n,o)))):(u!==sg&&(s=Error(i(423),{cause:u}),bc(Ki(s,o))),n=n.current.alternate,n.flags|=65536,m&=-m,n.lanes|=m,u=Ki(u,o),m=Hg(n.stateNode,u,m),gg(n,m),hn!==4&&(hn=2)),!1;var g=Error(i(520),{cause:u});if(g=Ki(g,o),Xc===null?Xc=[g]:Xc.push(g),hn!==4&&(hn=2),s===null)return!0;u=Ki(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=m&-m,o.lanes|=n,n=Hg(o.stateNode,u,n),gg(o,n),!1;case 1:if(s=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ys===null||!Ys.has(g))))return o.flags|=65536,m&=-m,o.lanes|=m,m=VS(m),kS(m,n,o,u),gg(o,m),!1}o=o.return}while(o!==null);return!1}var Gg=Error(i(461)),An=!1;function Wn(n,s,o,u){s.child=n===null?q1(s,null,o,u):Ha(s,n.child,o,u)}function XS(n,s,o,u,m){o=o.render;var g=s.ref;if("ref"in u){var b={};for(var N in u)N!=="ref"&&(b[N]=u[N])}else b=u;return Fa(s),u=Mg(n,s,o,b,g,m),N=Eg(),n!==null&&!An?(Tg(n,s,m),$r(n,s,m)):(wt&&N&&ig(s),s.flags|=1,Wn(n,s,u,m),s.child)}function WS(n,s,o,u,m){if(n===null){var g=o.type;return typeof g=="function"&&!eg(g)&&g.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=g,YS(n,s,g,u,m)):(n=Lf(o.type,null,u,s,s.mode,m),n.ref=s.ref,n.return=s,s.child=n)}if(g=n.child,!Zg(n,m)){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:Mc,o(b,u)&&n.ref===s.ref)return $r(n,s,m)}return s.flags|=1,n=qr(g,u),n.ref=s.ref,n.return=s,s.child=n}function YS(n,s,o,u,m){if(n!==null){var g=n.memoizedProps;if(Mc(g,u)&&n.ref===s.ref)if(An=!1,s.pendingProps=u=g,Zg(n,m))(n.flags&131072)!==0&&(An=!0);else return s.lanes=n.lanes,$r(n,s,m)}return Vg(n,s,o,u,m)}function qS(n,s,o,u){var m=u.children,g=n!==null?n.memoizedState:null;if(n===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((s.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,n!==null){for(u=s.child=n.child,m=0;u!==null;)m=m|u.lanes|u.childLanes,u=u.sibling;u=m&~g}else u=0,s.child=null;return jS(n,s,g,o,u)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Pf(s,g!==null?g.cachePool:null),g!==null?K1(s,g):vg(),Q1(s);else return u=s.lanes=536870912,jS(n,s,g!==null?g.baseLanes|o:o,o,u)}else g!==null?(Pf(s,g.cachePool),K1(s,g),Vs(),s.memoizedState=null):(n!==null&&Pf(s,null),vg(),Vs());return Wn(n,s,m,o),s.child}function zc(n,s){return n!==null&&n.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function jS(n,s,o,u,m){var g=hg();return g=g===null?null:{parent:Tn._currentValue,pool:g},s.memoizedState={baseLanes:o,cachePool:g},n!==null&&Pf(s,null),vg(),Q1(s),n!==null&&$o(n,s,u,!0),s.childLanes=m,null}function Qf(n,s){return s=$f({mode:s.mode,children:s.children},n.mode),s.ref=n.ref,n.child=s,s.return=n,s}function ZS(n,s,o){return Ha(s,n.child,null,o),n=Qf(s,s.pendingProps),n.flags|=2,zi(s),s.memoizedState=null,n}function vO(n,s,o){var u=s.pendingProps,m=(s.flags&128)!==0;if(s.flags&=-129,n===null){if(wt){if(u.mode==="hidden")return n=Qf(s,u),s.lanes=536870912,zc(null,n);if(yg(s),(n=en)?(n=oE(n,$i),n=n!==null&&n.data==="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:Ns!==null?{id:br,overflow:Ar}:null,retryLane:536870912,hydrationErrors:null},o=U1(n),o.return=s,s.child=o,kn=s,en=null)):n=null,n===null)throw Fs(s);return s.lanes=536870912,null}return Qf(s,u)}var g=n.memoizedState;if(g!==null){var b=g.dehydrated;if(yg(s),m)if(s.flags&256)s.flags&=-257,s=ZS(n,s,o);else if(s.memoizedState!==null)s.child=n.child,s.flags|=128,s=null;else throw Error(i(558));else if(An||$o(n,s,o,!1),m=(o&n.childLanes)!==0,An||m){if(u=Qt,u!==null&&(b=Bo(u,o),b!==0&&b!==g.retryLane))throw g.retryLane=b,Ua(n,b),yi(u,n,b),Gg;lh(),s=ZS(n,s,o)}else n=g.treeContext,en=tr(b.nextSibling),kn=s,wt=!0,Ps=null,$i=!1,n!==null&&P1(s,n),s=Qf(s,u),s.flags|=4096;return s}return n=qr(n.child,{mode:u.mode,children:u.children}),n.ref=s.ref,s.child=n,n.return=s,n}function Jf(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function Vg(n,s,o,u,m){return Fa(s),o=Mg(n,s,o,u,void 0,m),u=Eg(),n!==null&&!An?(Tg(n,s,m),$r(n,s,m)):(wt&&u&&ig(s),s.flags|=1,Wn(n,s,o,m),s.child)}function KS(n,s,o,u,m,g){return Fa(s),s.updateQueue=null,o=$1(s,u,o,m),J1(n),u=Eg(),n!==null&&!An?(Tg(n,s,g),$r(n,s,g)):(wt&&u&&ig(s),s.flags|=1,Wn(n,s,o,g),s.child)}function QS(n,s,o,u,m){if(Fa(s),s.stateNode===null){var g=Zo,b=o.contextType;typeof b=="object"&&b!==null&&(g=Xn(b)),g=new o(u,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Ig,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=u,g.state=s.memoizedState,g.refs={},pg(s),b=o.contextType,g.context=typeof b=="object"&&b!==null?Xn(b):Zo,g.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(Bg(s,o,b,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(b=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),b!==g.state&&Ig.enqueueReplaceState(g,g.state,null),Uc(s,u,g,m),Lc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){g=s.stateNode;var N=s.memoizedProps,q=Va(o,N);g.props=q;var oe=g.context,xe=o.contextType;b=Zo,typeof xe=="object"&&xe!==null&&(b=Xn(xe));var Me=o.getDerivedStateFromProps;xe=typeof Me=="function"||typeof g.getSnapshotBeforeUpdate=="function",N=s.pendingProps!==N,xe||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(N||oe!==b)&&zS(s,g,u,b),Bs=!1;var ue=s.memoizedState;g.state=ue,Uc(s,u,g,m),Lc(),oe=s.memoizedState,N||ue!==oe||Bs?(typeof Me=="function"&&(Bg(s,o,Me,u),oe=s.memoizedState),(q=Bs||FS(s,o,q,u,ue,oe,b))?(xe||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=oe),g.props=u,g.state=oe,g.context=b,u=q):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{g=s.stateNode,mg(n,s),b=s.memoizedProps,xe=Va(o,b),g.props=xe,Me=s.pendingProps,ue=g.context,oe=o.contextType,q=Zo,typeof oe=="object"&&oe!==null&&(q=Xn(oe)),N=o.getDerivedStateFromProps,(oe=typeof N=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==Me||ue!==q)&&zS(s,g,u,q),Bs=!1,ue=s.memoizedState,g.state=ue,Uc(s,u,g,m),Lc();var ge=s.memoizedState;b!==Me||ue!==ge||Bs||n!==null&&n.dependencies!==null&&Of(n.dependencies)?(typeof N=="function"&&(Bg(s,o,N,u),ge=s.memoizedState),(xe=Bs||FS(s,o,xe,u,ue,ge,q)||n!==null&&n.dependencies!==null&&Of(n.dependencies))?(oe||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,ge,q),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,ge,q)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&ue===n.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&ue===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=ge),g.props=u,g.state=ge,g.context=q,u=xe):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&ue===n.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&ue===n.memoizedState||(s.flags|=1024),u=!1)}return g=u,Jf(n,s),u=(s.flags&128)!==0,g||u?(g=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,n!==null&&u?(s.child=Ha(s,n.child,null,m),s.child=Ha(s,null,o,m)):Wn(n,s,o,m),s.memoizedState=g.state,n=s.child):n=$r(n,s,m),n}function JS(n,s,o,u){return Na(),s.flags|=256,Wn(n,s,o,u),s.child}var kg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xg(n){return{baseLanes:n,cachePool:G1()}}function Wg(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Ii),n}function $S(n,s,o){var u=s.pendingProps,m=!1,g=(s.flags&128)!==0,b;if((b=g)||(b=n!==null&&n.memoizedState===null?!1:(vn.current&2)!==0),b&&(m=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,n===null){if(wt){if(m?Gs(s):Vs(),(n=en)?(n=oE(n,$i),n=n!==null&&n.data!=="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:Ns!==null?{id:br,overflow:Ar}:null,retryLane:536870912,hydrationErrors:null},o=U1(n),o.return=s,s.child=o,kn=s,en=null)):n=null,n===null)throw Fs(s);return R0(n)?s.lanes=32:s.lanes=536870912,null}var N=u.children;return u=u.fallback,m?(Vs(),m=s.mode,N=$f({mode:"hidden",children:N},m),u=Oa(u,m,o,null),N.return=s,u.return=s,N.sibling=u,s.child=N,u=s.child,u.memoizedState=Xg(o),u.childLanes=Wg(n,b,o),s.memoizedState=kg,zc(null,u)):(Gs(s),Yg(s,N))}var q=n.memoizedState;if(q!==null&&(N=q.dehydrated,N!==null)){if(g)s.flags&256?(Gs(s),s.flags&=-257,s=qg(n,s,o)):s.memoizedState!==null?(Vs(),s.child=n.child,s.flags|=128,s=null):(Vs(),N=u.fallback,m=s.mode,u=$f({mode:"visible",children:u.children},m),N=Oa(N,m,o,null),N.flags|=2,u.return=s,N.return=s,u.sibling=N,s.child=u,Ha(s,n.child,null,o),u=s.child,u.memoizedState=Xg(o),u.childLanes=Wg(n,b,o),s.memoizedState=kg,s=zc(null,u));else if(Gs(s),R0(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b)var oe=b.dgst;b=oe,u=Error(i(419)),u.stack="",u.digest=b,bc({value:u,source:null,stack:null}),s=qg(n,s,o)}else if(An||$o(n,s,o,!1),b=(o&n.childLanes)!==0,An||b){if(b=Qt,b!==null&&(u=Bo(b,o),u!==0&&u!==q.retryLane))throw q.retryLane=u,Ua(n,u),yi(b,n,u),Gg;A0(N)||lh(),s=qg(n,s,o)}else A0(N)?(s.flags|=192,s.child=n.child,s=null):(n=q.treeContext,en=tr(N.nextSibling),kn=s,wt=!0,Ps=null,$i=!1,n!==null&&P1(s,n),s=Yg(s,u.children),s.flags|=4096);return s}return m?(Vs(),N=u.fallback,m=s.mode,q=n.child,oe=q.sibling,u=qr(q,{mode:"hidden",children:u.children}),u.subtreeFlags=q.subtreeFlags&65011712,oe!==null?N=qr(oe,N):(N=Oa(N,m,o,null),N.flags|=2),N.return=s,u.return=s,u.sibling=N,s.child=u,zc(null,u),u=s.child,N=n.child.memoizedState,N===null?N=Xg(o):(m=N.cachePool,m!==null?(q=Tn._currentValue,m=m.parent!==q?{parent:q,pool:q}:m):m=G1(),N={baseLanes:N.baseLanes|o,cachePool:m}),u.memoizedState=N,u.childLanes=Wg(n,b,o),s.memoizedState=kg,zc(n.child,u)):(Gs(s),o=n.child,n=o.sibling,o=qr(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(b=s.deletions,b===null?(s.deletions=[n],s.flags|=16):b.push(n)),s.child=o,s.memoizedState=null,o)}function Yg(n,s){return s=$f({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function $f(n,s){return n=Pi(22,n,null,s),n.lanes=0,n}function qg(n,s,o){return Ha(s,n.child,null,o),n=Yg(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function eM(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),lg(n.return,s,o)}function jg(n,s,o,u,m,g){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:m,treeForkCount:g}:(b.isBackwards=s,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=o,b.tailMode=m,b.treeForkCount=g)}function tM(n,s,o){var u=s.pendingProps,m=u.revealOrder,g=u.tail;u=u.children;var b=vn.current,N=(b&2)!==0;if(N?(b=b&1|2,s.flags|=128):b&=1,se(vn,b),Wn(n,s,u,o),u=wt?Tc:0,!N&&n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&eM(n,o,s);else if(n.tag===19)eM(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(m){case"forwards":for(o=s.child,m=null;o!==null;)n=o.alternate,n!==null&&Gf(n)===null&&(m=o),o=o.sibling;o=m,o===null?(m=s.child,s.child=null):(m=o.sibling,o.sibling=null),jg(s,!1,m,o,g,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,m=s.child,s.child=null;m!==null;){if(n=m.alternate,n!==null&&Gf(n)===null){s.child=m;break}n=m.sibling,m.sibling=o,o=m,m=n}jg(s,!0,o,null,g,u);break;case"together":jg(s,!1,null,null,void 0,u);break;default:s.memoizedState=null}return s.child}function $r(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Ws|=s.lanes,(o&s.childLanes)===0)if(n!==null){if($o(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(i(153));if(s.child!==null){for(n=s.child,o=qr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=qr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function Zg(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Of(n)))}function xO(n,s,o){switch(s.tag){case 3:Se(s,s.stateNode.containerInfo),zs(s,Tn,n.memoizedState.cache),Na();break;case 27:case 5:De(s);break;case 4:Se(s,s.stateNode.containerInfo);break;case 10:zs(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,yg(s),null;break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Gs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?$S(n,s,o):(Gs(s),n=$r(n,s,o),n!==null?n.sibling:null);Gs(s);break;case 19:var m=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||($o(n,s,o,!1),u=(o&s.childLanes)!==0),m){if(u)return tM(n,s,o);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),se(vn,vn.current),u)break;return null;case 22:return s.lanes=0,qS(n,s,o,s.pendingProps);case 24:zs(s,Tn,n.memoizedState.cache)}return $r(n,s,o)}function nM(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)An=!0;else{if(!Zg(n,o)&&(s.flags&128)===0)return An=!1,xO(n,s,o);An=(n.flags&131072)!==0}else An=!1,wt&&(s.flags&1048576)!==0&&N1(s,Tc,s.index);switch(s.lanes=0,s.tag){case 16:e:{var u=s.pendingProps;if(n=Ba(s.elementType),s.type=n,typeof n=="function")eg(n)?(u=Va(n,u),s.tag=1,s=QS(null,s,n,u,o)):(s.tag=0,s=Vg(null,s,n,u,o));else{if(n!=null){var m=n.$$typeof;if(m===A){s.tag=11,s=XS(null,s,n,u,o);break e}else if(m===O){s.tag=14,s=WS(null,s,n,u,o);break e}}throw s=G(n)||n,Error(i(306,s,""))}}return s;case 0:return Vg(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,m=Va(u,s.pendingProps),QS(n,s,u,m,o);case 3:e:{if(Se(s,s.stateNode.containerInfo),n===null)throw Error(i(387));u=s.pendingProps;var g=s.memoizedState;m=g.element,mg(n,s),Uc(s,u,null,o);var b=s.memoizedState;if(u=b.cache,zs(s,Tn,u),u!==g.cache&&cg(s,[Tn],o,!0),Lc(),u=b.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){s=JS(n,s,u,o);break e}else if(u!==m){m=Ki(Error(i(424)),s),bc(m),s=JS(n,s,u,o);break e}else for(n=s.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,en=tr(n.firstChild),kn=s,wt=!0,Ps=null,$i=!0,o=q1(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Na(),u===m){s=$r(n,s,o);break e}Wn(n,s,u,o)}s=s.child}return s;case 26:return Jf(n,s),n===null?(o=dE(s.type,null,s.pendingProps,null))?s.memoizedState=o:wt||(o=s.type,n=s.pendingProps,u=mh(ce.current).createElement(o),u[En]=s,u[Gn]=n,Yn(u,o,n),be(u),s.stateNode=u):s.memoizedState=dE(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return De(s),n===null&&wt&&(u=s.stateNode=uE(s.type,s.pendingProps,ce.current),kn=s,$i=!0,m=en,Ks(s.type)?(w0=m,en=tr(u.firstChild)):en=m),Wn(n,s,s.pendingProps.children,o),Jf(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&wt&&((m=u=en)&&(u=ZO(u,s.type,s.pendingProps,$i),u!==null?(s.stateNode=u,kn=s,en=tr(u.firstChild),$i=!1,m=!0):m=!1),m||Fs(s)),De(s),m=s.type,g=s.pendingProps,b=n!==null?n.memoizedProps:null,u=g.children,E0(m,g)?u=null:b!==null&&E0(m,b)&&(s.flags|=32),s.memoizedState!==null&&(m=Mg(n,s,uO,null,null,o),Jc._currentValue=m),Jf(n,s),Wn(n,s,u,o),s.child;case 6:return n===null&&wt&&((n=o=en)&&(o=KO(o,s.pendingProps,$i),o!==null?(s.stateNode=o,kn=s,en=null,n=!0):n=!1),n||Fs(s)),null;case 13:return $S(n,s,o);case 4:return Se(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Ha(s,null,u,o):Wn(n,s,u,o),s.child;case 11:return XS(n,s,s.type,s.pendingProps,o);case 7:return Wn(n,s,s.pendingProps,o),s.child;case 8:return Wn(n,s,s.pendingProps.children,o),s.child;case 12:return Wn(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,zs(s,s.type,u.value),Wn(n,s,u.children,o),s.child;case 9:return m=s.type._context,u=s.pendingProps.children,Fa(s),m=Xn(m),u=u(m),s.flags|=1,Wn(n,s,u,o),s.child;case 14:return WS(n,s,s.type,s.pendingProps,o);case 15:return YS(n,s,s.type,s.pendingProps,o);case 19:return tM(n,s,o);case 31:return vO(n,s,o);case 22:return qS(n,s,o,s.pendingProps);case 24:return Fa(s),u=Xn(Tn),n===null?(m=hg(),m===null&&(m=Qt,g=ug(),m.pooledCache=g,g.refCount++,g!==null&&(m.pooledCacheLanes|=o),m=g),s.memoizedState={parent:u,cache:m},pg(s),zs(s,Tn,m)):((n.lanes&o)!==0&&(mg(n,s),Uc(s,null,null,o),Lc()),m=n.memoizedState,g=s.memoizedState,m.parent!==u?(m={parent:u,cache:u},s.memoizedState=m,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=m),zs(s,Tn,u)):(u=g.cache,zs(s,Tn,u),u!==m.cache&&cg(s,[Tn],o,!0))),Wn(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function es(n){n.flags|=4}function Kg(n,s,o,u,m){if((s=(n.mode&32)!==0)&&(s=!1),s){if(n.flags|=16777216,(m&335544128)===m)if(n.stateNode.complete)n.flags|=8192;else if(CM())n.flags|=8192;else throw Ia=zf,dg}else n.flags&=-16777217}function iM(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!vE(s))if(CM())n.flags|=8192;else throw Ia=zf,dg}function eh(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?It():536870912,n.lanes|=s,fl|=s)}function Bc(n,s){if(!wt)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function tn(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var m=n.child;m!==null;)o|=m.lanes|m.childLanes,u|=m.subtreeFlags&65011712,u|=m.flags&65011712,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)o|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function yO(n,s,o){var u=s.pendingProps;switch(rg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(s),null;case 1:return tn(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Kr(Tn),Te(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Jo(s)?es(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ag())),tn(s),null;case 26:var m=s.type,g=s.memoizedState;return n===null?(es(s),g!==null?(tn(s),iM(s,g)):(tn(s),Kg(s,m,null,u,o))):g?g!==n.memoizedState?(es(s),tn(s),iM(s,g)):(tn(s),s.flags&=-16777217):(n=n.memoizedProps,n!==u&&es(s),tn(s),Kg(s,m,n,u,o)),null;case 27:if(st(s),o=ce.current,m=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&es(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return tn(s),null}n=me.current,Jo(s)?F1(s):(n=uE(m,u,o),s.stateNode=n,es(s))}return tn(s),null;case 5:if(st(s),m=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&es(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return tn(s),null}if(g=me.current,Jo(s))F1(s);else{var b=mh(ce.current);switch(g){case 1:g=b.createElementNS("http://www.w3.org/2000/svg",m);break;case 2:g=b.createElementNS("http://www.w3.org/1998/Math/MathML",m);break;default:switch(m){case"svg":g=b.createElementNS("http://www.w3.org/2000/svg",m);break;case"math":g=b.createElementNS("http://www.w3.org/1998/Math/MathML",m);break;case"script":g=b.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?g.multiple=!0:u.size&&(g.size=u.size);break;default:g=typeof u.is=="string"?b.createElement(m,{is:u.is}):b.createElement(m)}}g[En]=s,g[Gn]=u;e:for(b=s.child;b!==null;){if(b.tag===5||b.tag===6)g.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===s)break e;for(;b.sibling===null;){if(b.return===null||b.return===s)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}s.stateNode=g;e:switch(Yn(g,m,u),m){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&es(s)}}return tn(s),Kg(s,s.type,n===null?null:n.memoizedProps,s.pendingProps,o),null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&es(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(n=ce.current,Jo(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,m=kn,m!==null)switch(m.tag){case 27:case 5:u=m.memoizedProps}n[En]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||$M(n.nodeValue,o)),n||Fs(s,!0)}else n=mh(n).createTextNode(u),n[En]=s,s.stateNode=n}return tn(s),null;case 31:if(o=s.memoizedState,n===null||n.memoizedState!==null){if(u=Jo(s),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[En]=s}else Na(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;tn(s),n=!1}else o=ag(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return s.flags&256?(zi(s),s):(zi(s),null);if((s.flags&128)!==0)throw Error(i(558))}return tn(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(m=Jo(s),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(i(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[En]=s}else Na(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;tn(s),m=!1}else m=ag(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=m),m=!0;if(!m)return s.flags&256?(zi(s),s):(zi(s),null)}return zi(s),(s.flags&128)!==0?(s.lanes=o,s):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=s.child,m=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(m=u.alternate.memoizedState.cachePool.pool),g=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==m&&(u.flags|=2048)),o!==n&&o&&(s.child.flags|=8192),eh(s,s.updateQueue),tn(s),null);case 4:return Te(),n===null&&v0(s.stateNode.containerInfo),tn(s),null;case 10:return Kr(s.type),tn(s),null;case 19:if(Y(vn),u=s.memoizedState,u===null)return tn(s),null;if(m=(s.flags&128)!==0,g=u.rendering,g===null)if(m)Bc(u,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(g=Gf(n),g!==null){for(s.flags|=128,Bc(u,!1),n=g.updateQueue,s.updateQueue=n,eh(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)L1(o,n),o=o.sibling;return se(vn,vn.current&1|2),wt&&jr(s,u.treeForkCount),s.child}n=n.sibling}u.tail!==null&&T()>sh&&(s.flags|=128,m=!0,Bc(u,!1),s.lanes=4194304)}else{if(!m)if(n=Gf(g),n!==null){if(s.flags|=128,m=!0,n=n.updateQueue,s.updateQueue=n,eh(s,n),Bc(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!wt)return tn(s),null}else 2*T()-u.renderingStartTime>sh&&o!==536870912&&(s.flags|=128,m=!0,Bc(u,!1),s.lanes=4194304);u.isBackwards?(g.sibling=s.child,s.child=g):(n=u.last,n!==null?n.sibling=g:s.child=g,u.last=g)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=T(),n.sibling=null,o=vn.current,se(vn,m?o&1|2:o&1),wt&&jr(s,u.treeForkCount),n):(tn(s),null);case 22:case 23:return zi(s),xg(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(tn(s),s.subtreeFlags&6&&(s.flags|=8192)):tn(s),o=s.updateQueue,o!==null&&eh(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&Y(za),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Kr(Tn),tn(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function SO(n,s){switch(rg(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Kr(Tn),Te(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return st(s),null;case 31:if(s.memoizedState!==null){if(zi(s),s.alternate===null)throw Error(i(340));Na()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 13:if(zi(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(i(340));Na()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Y(vn),null;case 4:return Te(),null;case 10:return Kr(s.type),null;case 22:case 23:return zi(s),xg(),n!==null&&Y(za),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Kr(Tn),null;case 25:return null;default:return null}}function rM(n,s){switch(rg(s),s.tag){case 3:Kr(Tn),Te();break;case 26:case 27:case 5:st(s);break;case 4:Te();break;case 31:s.memoizedState!==null&&zi(s);break;case 13:zi(s);break;case 19:Y(vn);break;case 10:Kr(s.type);break;case 22:case 23:zi(s),xg(),n!==null&&Y(za);break;case 24:Kr(Tn)}}function Ic(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var m=u.next;o=m;do{if((o.tag&n)===n){u=void 0;var g=o.create,b=o.inst;u=g(),b.destroy=u}o=o.next}while(o!==m)}}catch(N){Gt(s,s.return,N)}}function ks(n,s,o){try{var u=s.updateQueue,m=u!==null?u.lastEffect:null;if(m!==null){var g=m.next;u=g;do{if((u.tag&n)===n){var b=u.inst,N=b.destroy;if(N!==void 0){b.destroy=void 0,m=s;var q=o,oe=N;try{oe()}catch(xe){Gt(m,q,xe)}}}u=u.next}while(u!==g)}}catch(xe){Gt(s,s.return,xe)}}function sM(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Z1(s,o)}catch(u){Gt(n,n.return,u)}}}function aM(n,s,o){o.props=Va(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Gt(n,s,u)}}function Hc(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(m){Gt(n,s,m)}}function Rr(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(m){Gt(n,s,m)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(m){Gt(n,s,m)}else o.current=null}function oM(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(m){Gt(n,n.return,m)}}function Qg(n,s,o){try{var u=n.stateNode;kO(u,n.type,o,s),u[Gn]=s}catch(m){Gt(n,n.return,m)}}function lM(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ks(n.type)||n.tag===4}function Jg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ks(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $g(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Wr));else if(u!==4&&(u===27&&Ks(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for($g(n,s,o),n=n.sibling;n!==null;)$g(n,s,o),n=n.sibling}function th(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Ks(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(th(n,s,o),n=n.sibling;n!==null;)th(n,s,o),n=n.sibling}function cM(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,m=s.attributes;m.length;)s.removeAttributeNode(m[0]);Yn(s,u,o),s[En]=n,s[Gn]=o}catch(g){Gt(n,n.return,g)}}var ts=!1,Rn=!1,e0=!1,uM=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function MO(n,s){if(n=n.containerInfo,S0=Mh,n=M1(n),qm(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var m=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,N=-1,q=-1,oe=0,xe=0,Me=n,ue=null;t:for(;;){for(var ge;Me!==o||m!==0&&Me.nodeType!==3||(N=b+m),Me!==g||u!==0&&Me.nodeType!==3||(q=b+u),Me.nodeType===3&&(b+=Me.nodeValue.length),(ge=Me.firstChild)!==null;)ue=Me,Me=ge;for(;;){if(Me===n)break t;if(ue===o&&++oe===m&&(N=b),ue===g&&++xe===u&&(q=b),(ge=Me.nextSibling)!==null)break;Me=ue,ue=Me.parentNode}Me=ge}o=N===-1||q===-1?null:{start:N,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(M0={focusedElem:n,selectionRange:o},Mh=!1,Bn=s;Bn!==null;)if(s=Bn,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Bn=n;else for(;Bn!==null;){switch(s=Bn,g=s.alternate,n=s.flags,s.tag){case 0:if((n&4)!==0&&(n=s.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)m=n[o],m.ref.impl=m.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=s,m=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var qe=Va(o.type,m);n=u.getSnapshotBeforeUpdate(qe,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(rt){Gt(o,o.return,rt)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)b0(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":b0(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=s.sibling,n!==null){n.return=s.return,Bn=n;break}Bn=s.return}}function fM(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:is(n,o),u&4&&Ic(5,o);break;case 1:if(is(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(b){Gt(o,o.return,b)}else{var m=Va(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(m,s,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Gt(o,o.return,b)}}u&64&&sM(o),u&512&&Hc(o,o.return);break;case 3:if(is(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Z1(n,s)}catch(b){Gt(o,o.return,b)}}break;case 27:s===null&&u&4&&cM(o);case 26:case 5:is(n,o),s===null&&u&4&&oM(o),u&512&&Hc(o,o.return);break;case 12:is(n,o);break;case 31:is(n,o),u&4&&pM(n,o);break;case 13:is(n,o),u&4&&mM(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=LO.bind(null,o),QO(n,o))));break;case 22:if(u=o.memoizedState!==null||ts,!u){s=s!==null&&s.memoizedState!==null||Rn,m=ts;var g=Rn;ts=u,(Rn=s)&&!g?rs(n,o,(o.subtreeFlags&8772)!==0):is(n,o),ts=m,Rn=g}break;case 30:break;default:is(n,o)}}function hM(n){var s=n.alternate;s!==null&&(n.alternate=null,hM(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&z(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var sn=null,gi=!1;function ns(n,s,o){for(o=o.child;o!==null;)dM(n,s,o),o=o.sibling}function dM(n,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Re,o)}catch{}switch(o.tag){case 26:Rn||Rr(o,s),ns(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rn||Rr(o,s);var u=sn,m=gi;Ks(o.type)&&(sn=o.stateNode,gi=!1),ns(n,s,o),Zc(o.stateNode),sn=u,gi=m;break;case 5:Rn||Rr(o,s);case 6:if(u=sn,m=gi,sn=null,ns(n,s,o),sn=u,gi=m,sn!==null)if(gi)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(o.stateNode)}catch(g){Gt(o,s,g)}else try{sn.removeChild(o.stateNode)}catch(g){Gt(o,s,g)}break;case 18:sn!==null&&(gi?(n=sn,sE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),xl(n)):sE(sn,o.stateNode));break;case 4:u=sn,m=gi,sn=o.stateNode.containerInfo,gi=!0,ns(n,s,o),sn=u,gi=m;break;case 0:case 11:case 14:case 15:ks(2,o,s),Rn||ks(4,o,s),ns(n,s,o);break;case 1:Rn||(Rr(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&aM(o,s,u)),ns(n,s,o);break;case 21:ns(n,s,o);break;case 22:Rn=(u=Rn)||o.memoizedState!==null,ns(n,s,o),Rn=u;break;default:ns(n,s,o)}}function pM(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{xl(n)}catch(o){Gt(s,s.return,o)}}}function mM(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{xl(n)}catch(o){Gt(s,s.return,o)}}function EO(n){switch(n.tag){case 31:case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new uM),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new uM),s;default:throw Error(i(435,n.tag))}}function nh(n,s){var o=EO(n);s.forEach(function(u){if(!o.has(u)){o.add(u);var m=UO.bind(null,n,u);u.then(m,m)}})}function _i(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var m=o[u],g=n,b=s,N=b;e:for(;N!==null;){switch(N.tag){case 27:if(Ks(N.type)){sn=N.stateNode,gi=!1;break e}break;case 5:sn=N.stateNode,gi=!1;break e;case 3:case 4:sn=N.stateNode.containerInfo,gi=!0;break e}N=N.return}if(sn===null)throw Error(i(160));dM(g,b,m),sn=null,gi=!1,g=m.alternate,g!==null&&(g.return=null),m.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)gM(s,n),s=s.sibling}var fr=null;function gM(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:_i(s,n),vi(n),u&4&&(ks(3,n,n.return),Ic(3,n),ks(5,n,n.return));break;case 1:_i(s,n),vi(n),u&512&&(Rn||o===null||Rr(o,o.return)),u&64&&ts&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var m=fr;if(_i(s,n),vi(n),u&512&&(Rn||o===null||Rr(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,m=m.ownerDocument||m;t:switch(u){case"title":g=m.getElementsByTagName("title")[0],(!g||g[Ra]||g[En]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=m.createElement(u),m.head.insertBefore(g,m.querySelector("head > title"))),Yn(g,u,o),g[En]=n,be(g),u=g;break e;case"link":var b=gE("link","href",m).get(u+(o.href||""));if(b){for(var N=0;N<b.length;N++)if(g=b[N],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(N,1);break t}}g=m.createElement(u),Yn(g,u,o),m.head.appendChild(g);break;case"meta":if(b=gE("meta","content",m).get(u+(o.content||""))){for(N=0;N<b.length;N++)if(g=b[N],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(N,1);break t}}g=m.createElement(u),Yn(g,u,o),m.head.appendChild(g);break;default:throw Error(i(468,u))}g[En]=n,be(g),u=g}n.stateNode=u}else _E(m,n.type,n.stateNode);else n.stateNode=mE(m,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?_E(m,n.type,n.stateNode):mE(m,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Qg(n,n.memoizedProps,o.memoizedProps)}break;case 27:_i(s,n),vi(n),u&512&&(Rn||o===null||Rr(o,o.return)),o!==null&&u&4&&Qg(n,n.memoizedProps,o.memoizedProps);break;case 5:if(_i(s,n),vi(n),u&512&&(Rn||o===null||Rr(o,o.return)),n.flags&32){m=n.stateNode;try{Vo(m,"")}catch(qe){Gt(n,n.return,qe)}}u&4&&n.stateNode!=null&&(m=n.memoizedProps,Qg(n,m,o!==null?o.memoizedProps:m)),u&1024&&(e0=!0);break;case 6:if(_i(s,n),vi(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(qe){Gt(n,n.return,qe)}}break;case 3:if(vh=null,m=fr,fr=gh(s.containerInfo),_i(s,n),fr=m,vi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{xl(s.containerInfo)}catch(qe){Gt(n,n.return,qe)}e0&&(e0=!1,_M(n));break;case 4:u=fr,fr=gh(n.stateNode.containerInfo),_i(s,n),vi(n),fr=u;break;case 12:_i(s,n),vi(n);break;case 31:_i(s,n),vi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,nh(n,u)));break;case 13:_i(s,n),vi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(rh=T()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,nh(n,u)));break;case 22:m=n.memoizedState!==null;var q=o!==null&&o.memoizedState!==null,oe=ts,xe=Rn;if(ts=oe||m,Rn=xe||q,_i(s,n),Rn=xe,ts=oe,vi(n),u&8192)e:for(s=n.stateNode,s._visibility=m?s._visibility&-2:s._visibility|1,m&&(o===null||q||ts||Rn||ka(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){q=o=s;try{if(g=q.stateNode,m)b=g.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{N=q.stateNode;var Me=q.memoizedProps.style,ue=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;N.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(qe){Gt(q,q.return,qe)}}}else if(s.tag===6){if(o===null){q=s;try{q.stateNode.nodeValue=m?"":q.memoizedProps}catch(qe){Gt(q,q.return,qe)}}}else if(s.tag===18){if(o===null){q=s;try{var ge=q.stateNode;m?aE(ge,!0):aE(q.stateNode,!1)}catch(qe){Gt(q,q.return,qe)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,nh(n,o))));break;case 19:_i(s,n),vi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,nh(n,u)));break;case 30:break;case 21:break;default:_i(s,n),vi(n)}}function vi(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(lM(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var m=o.stateNode,g=Jg(n);th(n,g,m);break;case 5:var b=o.stateNode;o.flags&32&&(Vo(b,""),o.flags&=-33);var N=Jg(n);th(n,N,b);break;case 3:case 4:var q=o.stateNode.containerInfo,oe=Jg(n);$g(n,oe,q);break;default:throw Error(i(161))}}catch(xe){Gt(n,n.return,xe)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function _M(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;_M(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function is(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)fM(n,s.alternate,s),s=s.sibling}function ka(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:ks(4,s,s.return),ka(s);break;case 1:Rr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&aM(s,s.return,o),ka(s);break;case 27:Zc(s.stateNode);case 26:case 5:Rr(s,s.return),ka(s);break;case 22:s.memoizedState===null&&ka(s);break;case 30:ka(s);break;default:ka(s)}n=n.sibling}}function rs(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,m=n,g=s,b=g.flags;switch(g.tag){case 0:case 11:case 15:rs(m,g,o),Ic(4,g);break;case 1:if(rs(m,g,o),u=g,m=u.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(oe){Gt(u,u.return,oe)}if(u=g,m=u.updateQueue,m!==null){var N=u.stateNode;try{var q=m.shared.hiddenCallbacks;if(q!==null)for(m.shared.hiddenCallbacks=null,m=0;m<q.length;m++)j1(q[m],N)}catch(oe){Gt(u,u.return,oe)}}o&&b&64&&sM(g),Hc(g,g.return);break;case 27:cM(g);case 26:case 5:rs(m,g,o),o&&u===null&&b&4&&oM(g),Hc(g,g.return);break;case 12:rs(m,g,o);break;case 31:rs(m,g,o),o&&b&4&&pM(m,g);break;case 13:rs(m,g,o),o&&b&4&&mM(m,g);break;case 22:g.memoizedState===null&&rs(m,g,o),Hc(g,g.return);break;case 30:break;default:rs(m,g,o)}s=s.sibling}}function t0(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Ac(o))}function n0(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Ac(n))}function hr(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)vM(n,s,o,u),s=s.sibling}function vM(n,s,o,u){var m=s.flags;switch(s.tag){case 0:case 11:case 15:hr(n,s,o,u),m&2048&&Ic(9,s);break;case 1:hr(n,s,o,u);break;case 3:hr(n,s,o,u),m&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Ac(n)));break;case 12:if(m&2048){hr(n,s,o,u),n=s.stateNode;try{var g=s.memoizedProps,b=g.id,N=g.onPostCommit;typeof N=="function"&&N(b,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(q){Gt(s,s.return,q)}}else hr(n,s,o,u);break;case 31:hr(n,s,o,u);break;case 13:hr(n,s,o,u);break;case 23:break;case 22:g=s.stateNode,b=s.alternate,s.memoizedState!==null?g._visibility&2?hr(n,s,o,u):Gc(n,s):g._visibility&2?hr(n,s,o,u):(g._visibility|=2,ll(n,s,o,u,(s.subtreeFlags&10256)!==0||!1)),m&2048&&t0(b,s);break;case 24:hr(n,s,o,u),m&2048&&n0(s.alternate,s);break;default:hr(n,s,o,u)}}function ll(n,s,o,u,m){for(m=m&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var g=n,b=s,N=o,q=u,oe=b.flags;switch(b.tag){case 0:case 11:case 15:ll(g,b,N,q,m),Ic(8,b);break;case 23:break;case 22:var xe=b.stateNode;b.memoizedState!==null?xe._visibility&2?ll(g,b,N,q,m):Gc(g,b):(xe._visibility|=2,ll(g,b,N,q,m)),m&&oe&2048&&t0(b.alternate,b);break;case 24:ll(g,b,N,q,m),m&&oe&2048&&n0(b.alternate,b);break;default:ll(g,b,N,q,m)}s=s.sibling}}function Gc(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,m=u.flags;switch(u.tag){case 22:Gc(o,u),m&2048&&t0(u.alternate,u);break;case 24:Gc(o,u),m&2048&&n0(u.alternate,u);break;default:Gc(o,u)}s=s.sibling}}var Vc=8192;function cl(n,s,o){if(n.subtreeFlags&Vc)for(n=n.child;n!==null;)xM(n,s,o),n=n.sibling}function xM(n,s,o){switch(n.tag){case 26:cl(n,s,o),n.flags&Vc&&n.memoizedState!==null&&cN(o,fr,n.memoizedState,n.memoizedProps);break;case 5:cl(n,s,o);break;case 3:case 4:var u=fr;fr=gh(n.stateNode.containerInfo),cl(n,s,o),fr=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=Vc,Vc=16777216,cl(n,s,o),Vc=u):cl(n,s,o));break;default:cl(n,s,o)}}function yM(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function kc(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Bn=u,MM(u,n)}yM(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)SM(n),n=n.sibling}function SM(n){switch(n.tag){case 0:case 11:case 15:kc(n),n.flags&2048&&ks(9,n,n.return);break;case 3:kc(n);break;case 12:kc(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,ih(n)):kc(n);break;default:kc(n)}}function ih(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Bn=u,MM(u,n)}yM(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:ks(8,s,s.return),ih(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,ih(s));break;default:ih(s)}n=n.sibling}}function MM(n,s){for(;Bn!==null;){var o=Bn;switch(o.tag){case 0:case 11:case 15:ks(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ac(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Bn=u;else e:for(o=n;Bn!==null;){u=Bn;var m=u.sibling,g=u.return;if(hM(u),u===o){Bn=null;break e}if(m!==null){m.return=g,Bn=m;break e}Bn=g}}}var TO={getCacheForType:function(n){var s=Xn(Tn),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o},cacheSignal:function(){return Xn(Tn).controller.signal}},bO=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Qt=null,St=null,Tt=0,Ht=0,Bi=null,Xs=!1,ul=!1,i0=!1,ss=0,hn=0,Ws=0,Xa=0,r0=0,Ii=0,fl=0,Xc=null,xi=null,s0=!1,rh=0,EM=0,sh=1/0,ah=null,Ys=null,On=0,qs=null,hl=null,as=0,a0=0,o0=null,TM=null,Wc=0,l0=null;function Hi(){return(Pt&2)!==0&&Tt!==0?Tt&-Tt:F.T!==null?p0():Aa()}function bM(){if(Ii===0)if((Tt&536870912)===0||wt){var n=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),Ii=n}else Ii=536870912;return n=Fi.current,n!==null&&(n.flags|=32),Ii}function yi(n,s,o){(n===Qt&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)&&(dl(n,0),js(n,Tt,Ii,!1)),ni(n,o),((Pt&2)===0||n!==Qt)&&(n===Qt&&((Pt&2)===0&&(Xa|=o),hn===4&&js(n,Tt,Ii,!1)),wr(n))}function AM(n,s,o){if((Pt&6)!==0)throw Error(i(327));var u=!o&&(s&127)===0&&(s&n.expiredLanes)===0||We(n,s),m=u?wO(n,s):u0(n,s,!0),g=u;do{if(m===0){ul&&!u&&js(n,s,0,!1);break}else{if(o=n.current.alternate,g&&!AO(o)){m=u0(n,s,!1),g=!1;continue}if(m===2){if(g=s,n.errorRecoveryDisabledLanes&g)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var N=n;m=Xc;var q=N.current.memoizedState.isDehydrated;if(q&&(dl(N,b).flags|=256),b=u0(N,b,!1),b!==2){if(i0&&!q){N.errorRecoveryDisabledLanes|=g,Xa|=g,m=4;break e}g=xi,xi=m,g!==null&&(xi===null?xi=g:xi.push.apply(xi,g))}m=b}if(g=!1,m!==2)continue}}if(m===1){dl(n,0),js(n,s,0,!0);break}e:{switch(u=n,g=m,g){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:js(u,s,Ii,!Xs);break e;case 2:xi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(m=rh+300-T(),10<m)){if(js(u,s,Ii,!Xs),Ee(u,0,!0)!==0)break e;as=s,u.timeoutHandle=iE(RM.bind(null,u,o,xi,ah,s0,s,Ii,Xa,fl,Xs,g,"Throttled",-0,0),m);break e}RM(u,o,xi,ah,s0,s,Ii,Xa,fl,Xs,g,null,-0,0)}}break}while(!0);wr(n)}function RM(n,s,o,u,m,g,b,N,q,oe,xe,Me,ue,ge){if(n.timeoutHandle=-1,Me=s.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wr},xM(s,g,Me);var qe=(g&62914560)===g?rh-T():(g&4194048)===g?EM-T():0;if(qe=uN(Me,qe),qe!==null){as=g,n.cancelPendingCommit=qe(PM.bind(null,n,s,g,o,u,m,b,N,q,xe,Me,null,ue,ge)),js(n,g,b,!oe);return}}PM(n,s,g,o,u,m,b,N,q)}function AO(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var m=o[u],g=m.getSnapshot;m=m.value;try{if(!Ni(g(),m))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function js(n,s,o,u){s&=~r0,s&=~Xa,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var m=s;0<m;){var g=31-Ge(m),b=1<<g;u[g]=-1,m&=~b}o!==0&&hc(n,o,s)}function oh(){return(Pt&6)===0?(Yc(0),!1):!0}function c0(){if(St!==null){if(Ht===0)var n=St.return;else n=St,Zr=Pa=null,bg(n),il=null,wc=0,n=St;for(;n!==null;)rM(n.alternate,n),n=n.return;St=null}}function dl(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,YO(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),as=0,c0(),Qt=n,St=o=qr(n.current,null),Tt=s,Ht=0,Bi=null,Xs=!1,ul=We(n,s),i0=!1,fl=Ii=r0=Xa=Ws=hn=0,xi=Xc=null,s0=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var m=31-Ge(u),g=1<<m;s|=n[m],u&=~g}return ss=s,wf(),o}function wM(n,s){pt=null,F.H=Fc,s===nl||s===Ff?(s=X1(),Ht=3):s===dg?(s=X1(),Ht=4):Ht=s===Gg?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Bi=s,St===null&&(hn=1,Kf(n,Ki(s,n.current)))}function CM(){var n=Fi.current;return n===null?!0:(Tt&4194048)===Tt?er===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?n===er:!1}function DM(){var n=F.H;return F.H=Fc,n===null?Fc:n}function LM(){var n=F.A;return F.A=TO,n}function lh(){hn=4,Xs||(Tt&4194048)!==Tt&&Fi.current!==null||(ul=!0),(Ws&134217727)===0&&(Xa&134217727)===0||Qt===null||js(Qt,Tt,Ii,!1)}function u0(n,s,o){var u=Pt;Pt|=2;var m=DM(),g=LM();(Qt!==n||Tt!==s)&&(ah=null,dl(n,s)),s=!1;var b=hn;e:do try{if(Ht!==0&&St!==null){var N=St,q=Bi;switch(Ht){case 8:c0(),b=6;break e;case 3:case 2:case 9:case 6:Fi.current===null&&(s=!0);var oe=Ht;if(Ht=0,Bi=null,pl(n,N,q,oe),o&&ul){b=0;break e}break;default:oe=Ht,Ht=0,Bi=null,pl(n,N,q,oe)}}RO(),b=hn;break}catch(xe){wM(n,xe)}while(!0);return s&&n.shellSuspendCounter++,Zr=Pa=null,Pt=u,F.H=m,F.A=g,St===null&&(Qt=null,Tt=0,wf()),b}function RO(){for(;St!==null;)UM(St)}function wO(n,s){var o=Pt;Pt|=2;var u=DM(),m=LM();Qt!==n||Tt!==s?(ah=null,sh=T()+500,dl(n,s)):ul=We(n,s);e:do try{if(Ht!==0&&St!==null){s=St;var g=Bi;t:switch(Ht){case 1:Ht=0,Bi=null,pl(n,s,g,1);break;case 2:case 9:if(V1(g)){Ht=0,Bi=null,OM(s);break}s=function(){Ht!==2&&Ht!==9||Qt!==n||(Ht=7),wr(n)},g.then(s,s);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:V1(g)?(Ht=0,Bi=null,OM(s)):(Ht=0,Bi=null,pl(n,s,g,7));break;case 5:var b=null;switch(St.tag){case 26:b=St.memoizedState;case 5:case 27:var N=St;if(b?vE(b):N.stateNode.complete){Ht=0,Bi=null;var q=N.sibling;if(q!==null)St=q;else{var oe=N.return;oe!==null?(St=oe,ch(oe)):St=null}break t}}Ht=0,Bi=null,pl(n,s,g,5);break;case 6:Ht=0,Bi=null,pl(n,s,g,6);break;case 8:c0(),hn=6;break e;default:throw Error(i(462))}}CO();break}catch(xe){wM(n,xe)}while(!0);return Zr=Pa=null,F.H=u,F.A=m,Pt=o,St!==null?0:(Qt=null,Tt=0,wf(),hn)}function CO(){for(;St!==null&&!Jt();)UM(St)}function UM(n){var s=nM(n.alternate,n,ss);n.memoizedProps=n.pendingProps,s===null?ch(n):St=s}function OM(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=KS(o,s,s.pendingProps,s.type,void 0,Tt);break;case 11:s=KS(o,s,s.pendingProps,s.type.render,s.ref,Tt);break;case 5:bg(s);default:rM(o,s),s=St=L1(s,ss),s=nM(o,s,ss)}n.memoizedProps=n.pendingProps,s===null?ch(n):St=s}function pl(n,s,o,u){Zr=Pa=null,bg(s),il=null,wc=0;var m=s.return;try{if(_O(n,m,s,o,Tt)){hn=1,Kf(n,Ki(o,n.current)),St=null;return}}catch(g){if(m!==null)throw St=m,g;hn=1,Kf(n,Ki(o,n.current)),St=null;return}s.flags&32768?(wt||u===1?n=!0:ul||(Tt&536870912)!==0?n=!1:(Xs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Fi.current,u!==null&&u.tag===13&&(u.flags|=16384))),NM(s,n)):ch(s)}function ch(n){var s=n;do{if((s.flags&32768)!==0){NM(s,Xs);return}n=s.return;var o=yO(s.alternate,s,ss);if(o!==null){St=o;return}if(s=s.sibling,s!==null){St=s;return}St=s=n}while(s!==null);hn===0&&(hn=5)}function NM(n,s){do{var o=SO(n.alternate,n);if(o!==null){o.flags&=32767,St=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){St=n;return}St=n=o}while(n!==null);hn=6,St=null}function PM(n,s,o,u,m,g,b,N,q){n.cancelPendingCommit=null;do uh();while(On!==0);if((Pt&6)!==0)throw Error(i(327));if(s!==null){if(s===n.current)throw Error(i(177));if(g=s.lanes|s.childLanes,g|=Jm,ji(n,o,g,b,N,q),n===Qt&&(St=Qt=null,Tt=0),hl=s,qs=n,as=o,a0=g,o0=m,TM=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,OO(de,function(){return HM(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,m=k.p,k.p=2,b=Pt,Pt|=4;try{MO(n,s,o)}finally{Pt=b,k.p=m,F.T=u}}On=1,FM(),zM(),BM()}}function FM(){if(On===1){On=0;var n=qs,s=hl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=F.T,F.T=null;var u=k.p;k.p=2;var m=Pt;Pt|=4;try{gM(s,n);var g=M0,b=M1(n.containerInfo),N=g.focusedElem,q=g.selectionRange;if(b!==N&&N&&N.ownerDocument&&S1(N.ownerDocument.documentElement,N)){if(q!==null&&qm(N)){var oe=q.start,xe=q.end;if(xe===void 0&&(xe=oe),"selectionStart"in N)N.selectionStart=oe,N.selectionEnd=Math.min(xe,N.value.length);else{var Me=N.ownerDocument||document,ue=Me&&Me.defaultView||window;if(ue.getSelection){var ge=ue.getSelection(),qe=N.textContent.length,rt=Math.min(q.start,qe),Wt=q.end===void 0?rt:Math.min(q.end,qe);!ge.extend&&rt>Wt&&(b=Wt,Wt=rt,rt=b);var ie=y1(N,rt),J=y1(N,Wt);if(ie&&J&&(ge.rangeCount!==1||ge.anchorNode!==ie.node||ge.anchorOffset!==ie.offset||ge.focusNode!==J.node||ge.focusOffset!==J.offset)){var ae=Me.createRange();ae.setStart(ie.node,ie.offset),ge.removeAllRanges(),rt>Wt?(ge.addRange(ae),ge.extend(J.node,J.offset)):(ae.setEnd(J.node,J.offset),ge.addRange(ae))}}}}for(Me=[],ge=N;ge=ge.parentNode;)ge.nodeType===1&&Me.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Me.length;N++){var ye=Me[N];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Mh=!!S0,M0=S0=null}finally{Pt=m,k.p=u,F.T=o}}n.current=s,On=2}}function zM(){if(On===2){On=0;var n=qs,s=hl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=F.T,F.T=null;var u=k.p;k.p=2;var m=Pt;Pt|=4;try{fM(n,s.alternate,s)}finally{Pt=m,k.p=u,F.T=o}}On=3}}function BM(){if(On===4||On===3){On=0,H();var n=qs,s=hl,o=as,u=TM;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?On=5:(On=0,hl=qs=null,IM(n,n.pendingLanes));var m=n.pendingLanes;if(m===0&&(Ys=null),Ho(o),s=s.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Re,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=F.T,m=k.p,k.p=2,F.T=null;try{for(var g=n.onRecoverableError,b=0;b<u.length;b++){var N=u[b];g(N.value,{componentStack:N.stack})}}finally{F.T=s,k.p=m}}(as&3)!==0&&uh(),wr(n),m=n.pendingLanes,(o&261930)!==0&&(m&42)!==0?n===l0?Wc++:(Wc=0,l0=n):Wc=0,Yc(0)}}function IM(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Ac(s)))}function uh(){return FM(),zM(),BM(),HM()}function HM(){if(On!==5)return!1;var n=qs,s=a0;a0=0;var o=Ho(as),u=F.T,m=k.p;try{k.p=32>o?32:o,F.T=null,o=o0,o0=null;var g=qs,b=as;if(On=0,hl=qs=null,as=0,(Pt&6)!==0)throw Error(i(331));var N=Pt;if(Pt|=4,SM(g.current),vM(g,g.current,b,o),Pt=N,Yc(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Re,g)}catch{}return!0}finally{k.p=m,F.T=u,IM(n,s)}}function GM(n,s,o){s=Ki(o,s),s=Hg(n.stateNode,s,2),n=Hs(n,s,2),n!==null&&(ni(n,2),wr(n))}function Gt(n,s,o){if(n.tag===3)GM(n,n,o);else for(;s!==null;){if(s.tag===3){GM(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ys===null||!Ys.has(u))){n=Ki(o,n),o=VS(2),u=Hs(s,o,2),u!==null&&(kS(o,u,s,n),ni(u,2),wr(u));break}}s=s.return}}function f0(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new bO;var m=new Set;u.set(s,m)}else m=u.get(s),m===void 0&&(m=new Set,u.set(s,m));m.has(o)||(i0=!0,m.add(o),n=DO.bind(null,n,s,o),s.then(n,n))}function DO(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Qt===n&&(Tt&o)===o&&(hn===4||hn===3&&(Tt&62914560)===Tt&&300>T()-rh?(Pt&2)===0&&dl(n,0):r0|=o,fl===Tt&&(fl=0)),wr(n)}function VM(n,s){s===0&&(s=It()),n=Ua(n,s),n!==null&&(ni(n,s),wr(n))}function LO(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),VM(n,o)}function UO(n,s){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,m=n.memoizedState;m!==null&&(o=m.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),VM(n,o)}function OO(n,s){return ot(n,s)}var fh=null,ml=null,h0=!1,hh=!1,d0=!1,Zs=0;function wr(n){n!==ml&&n.next===null&&(ml===null?fh=ml=n:ml=ml.next=n),hh=!0,h0||(h0=!0,PO())}function Yc(n,s){if(!d0&&hh){d0=!0;do for(var o=!1,u=fh;u!==null;){if(n!==0){var m=u.pendingLanes;if(m===0)var g=0;else{var b=u.suspendedLanes,N=u.pingedLanes;g=(1<<31-Ge(42|n)+1)-1,g&=m&~(b&~N),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,YM(u,g))}else g=Tt,g=Ee(u,u===Qt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||We(u,g)||(o=!0,YM(u,g));u=u.next}while(o);d0=!1}}function NO(){kM()}function kM(){hh=h0=!1;var n=0;Zs!==0&&WO()&&(n=Zs);for(var s=T(),o=null,u=fh;u!==null;){var m=u.next,g=XM(u,s);g===0?(u.next=null,o===null?fh=m:o.next=m,m===null&&(ml=o)):(o=u,(n!==0||(g&3)!==0)&&(hh=!0)),u=m}On!==0&&On!==5||Yc(n),Zs!==0&&(Zs=0)}function XM(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,m=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var b=31-Ge(g),N=1<<b,q=m[b];q===-1?((N&o)===0||(N&u)!==0)&&(m[b]=ct(N,s)):q<=s&&(n.expiredLanes|=N),g&=~N}if(s=Qt,o=Tt,o=Ee(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Zt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||We(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&Zt(u),Ho(o)){case 2:case 8:o=ve;break;case 32:o=de;break;case 268435456:o=Ce;break;default:o=de}return u=WM.bind(null,n),o=ot(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&Zt(u),n.callbackPriority=2,n.callbackNode=null,2}function WM(n,s){if(On!==0&&On!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(uh()&&n.callbackNode!==o)return null;var u=Tt;return u=Ee(n,n===Qt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(AM(n,u,s),XM(n,T()),n.callbackNode!=null&&n.callbackNode===o?WM.bind(null,n):null)}function YM(n,s){if(uh())return null;AM(n,s,!0)}function PO(){qO(function(){(Pt&6)!==0?ot(re,NO):kM()})}function p0(){if(Zs===0){var n=el;n===0&&(n=we,we<<=1,(we&261888)===0&&(we=256)),Zs=n}return Zs}function qM(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:yf(""+n)}function jM(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function FO(n,s,o,u,m){if(s==="submit"&&o&&o.stateNode===m){var g=qM((m[Gn]||null).action),b=u.submitter;b&&(s=(s=b[Gn]||null)?qM(s.formAction):b.getAttribute("formAction"),s!==null&&(g=s,b=null));var N=new Tf("action","action",null,u,m);n.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Zs!==0){var q=b?jM(m,b):new FormData(m);Ng(o,{pending:!0,data:q,method:m.method,action:g},null,q)}}else typeof g=="function"&&(N.preventDefault(),q=b?jM(m,b):new FormData(m),Ng(o,{pending:!0,data:q,method:m.method,action:g},g,q))},currentTarget:m}]})}}for(var m0=0;m0<Qm.length;m0++){var g0=Qm[m0],zO=g0.toLowerCase(),BO=g0[0].toUpperCase()+g0.slice(1);ur(zO,"on"+BO)}ur(b1,"onAnimationEnd"),ur(A1,"onAnimationIteration"),ur(R1,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(eO,"onTransitionRun"),ur(tO,"onTransitionStart"),ur(nO,"onTransitionCancel"),ur(w1,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qc));function ZM(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],m=u.event;u=u.listeners;e:{var g=void 0;if(s)for(var b=u.length-1;0<=b;b--){var N=u[b],q=N.instance,oe=N.currentTarget;if(N=N.listener,q!==g&&m.isPropagationStopped())break e;g=N,m.currentTarget=oe;try{g(m)}catch(xe){Rf(xe)}m.currentTarget=null,g=q}else for(b=0;b<u.length;b++){if(N=u[b],q=N.instance,oe=N.currentTarget,N=N.listener,q!==g&&m.isPropagationStopped())break e;g=N,m.currentTarget=oe;try{g(m)}catch(xe){Rf(xe)}m.currentTarget=null,g=q}}}}function Mt(n,s){var o=s[pc];o===void 0&&(o=s[pc]=new Set);var u=n+"__bubble";o.has(u)||(KM(s,n,2,!1),o.add(u))}function _0(n,s,o){var u=0;s&&(u|=4),KM(o,n,u,s)}var dh="_reactListening"+Math.random().toString(36).slice(2);function v0(n){if(!n[dh]){n[dh]=!0,Be.forEach(function(o){o!=="selectionchange"&&(IO.has(o)||_0(o,!1,n),_0(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[dh]||(s[dh]=!0,_0("selectionchange",!1,s))}}function KM(n,s,o,u){switch(bE(s)){case 2:var m=dN;break;case 8:m=pN;break;default:m=O0}o=m.bind(null,s,o,n),m=void 0,!Bm||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),u?m!==void 0?n.addEventListener(s,o,{capture:!0,passive:m}):n.addEventListener(s,o,!0):m!==void 0?n.addEventListener(s,o,{passive:m}):n.addEventListener(s,o,!1)}function x0(n,s,o,u,m){var g=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var N=u.stateNode.containerInfo;if(N===m)break;if(b===4)for(b=u.return;b!==null;){var q=b.tag;if((q===3||q===4)&&b.stateNode.containerInfo===m)return;b=b.return}for(;N!==null;){if(b=ee(N),b===null)return;if(q=b.tag,q===5||q===6||q===26||q===27){u=g=b;continue e}N=N.parentNode}}u=u.return}t1(function(){var oe=g,xe=Fm(o),Me=[];e:{var ue=C1.get(n);if(ue!==void 0){var ge=Tf,qe=n;switch(n){case"keypress":if(Mf(o)===0)break e;case"keydown":case"keyup":ge=UU;break;case"focusin":qe="focus",ge=Vm;break;case"focusout":qe="blur",ge=Vm;break;case"beforeblur":case"afterblur":ge=Vm;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=r1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=yU;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=PU;break;case b1:case A1:case R1:ge=EU;break;case w1:ge=zU;break;case"scroll":case"scrollend":ge=vU;break;case"wheel":ge=IU;break;case"copy":case"cut":case"paste":ge=bU;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=a1;break;case"toggle":case"beforetoggle":ge=GU}var rt=(s&4)!==0,Wt=!rt&&(n==="scroll"||n==="scrollend"),ie=rt?ue!==null?ue+"Capture":null:ue;rt=[];for(var J=oe,ae;J!==null;){var ye=J;if(ae=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ae===null||ie===null||(ye=mc(J,ie),ye!=null&&rt.push(jc(J,ye,ae))),Wt)break;J=J.return}0<rt.length&&(ue=new ge(ue,qe,null,o,xe),Me.push({event:ue,listeners:rt}))}}if((s&7)===0){e:{if(ue=n==="mouseover"||n==="pointerover",ge=n==="mouseout"||n==="pointerout",ue&&o!==Pm&&(qe=o.relatedTarget||o.fromElement)&&(ee(qe)||qe[Us]))break e;if((ge||ue)&&(ue=xe.window===xe?xe:(ue=xe.ownerDocument)?ue.defaultView||ue.parentWindow:window,ge?(qe=o.relatedTarget||o.toElement,ge=oe,qe=qe?ee(qe):null,qe!==null&&(Wt=l(qe),rt=qe.tag,qe!==Wt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(ge=null,qe=oe),ge!==qe)){if(rt=r1,ye="onMouseLeave",ie="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(rt=a1,ye="onPointerLeave",ie="onPointerEnter",J="pointer"),Wt=ge==null?ue:pe(ge),ae=qe==null?ue:pe(qe),ue=new rt(ye,J+"leave",ge,o,xe),ue.target=Wt,ue.relatedTarget=ae,ye=null,ee(xe)===oe&&(rt=new rt(ie,J+"enter",qe,o,xe),rt.target=ae,rt.relatedTarget=Wt,ye=rt),Wt=ye,ge&&qe)t:{for(rt=HO,ie=ge,J=qe,ae=0,ye=ie;ye;ye=rt(ye))ae++;ye=0;for(var nt=J;nt;nt=rt(nt))ye++;for(;0<ae-ye;)ie=rt(ie),ae--;for(;0<ye-ae;)J=rt(J),ye--;for(;ae--;){if(ie===J||J!==null&&ie===J.alternate){rt=ie;break t}ie=rt(ie),J=rt(J)}rt=null}else rt=null;ge!==null&&QM(Me,ue,ge,rt,!1),qe!==null&&Wt!==null&&QM(Me,Wt,qe,rt,!0)}}e:{if(ue=oe?pe(oe):window,ge=ue.nodeName&&ue.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ue.type==="file")var Ot=p1;else if(h1(ue))if(m1)Ot=QU;else{Ot=ZU;var Je=jU}else ge=ue.nodeName,!ge||ge.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?oe&&Nm(oe.elementType)&&(Ot=p1):Ot=KU;if(Ot&&(Ot=Ot(n,oe))){d1(Me,Ot,o,xe);break e}Je&&Je(n,ue,oe),n==="focusout"&&oe&&ue.type==="number"&&oe.memoizedProps.value!=null&&Un(ue,"number",ue.value)}switch(Je=oe?pe(oe):window,n){case"focusin":(h1(Je)||Je.contentEditable==="true")&&(Yo=Je,jm=oe,Ec=null);break;case"focusout":Ec=jm=Yo=null;break;case"mousedown":Zm=!0;break;case"contextmenu":case"mouseup":case"dragend":Zm=!1,E1(Me,o,xe);break;case"selectionchange":if($U)break;case"keydown":case"keyup":E1(Me,o,xe)}var _t;if(Xm)e:{switch(n){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Wo?u1(n,o)&&(bt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(bt="onCompositionStart");bt&&(o1&&o.locale!=="ko"&&(Wo||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Wo&&(_t=n1()):(Os=xe,Im="value"in Os?Os.value:Os.textContent,Wo=!0)),Je=ph(oe,bt),0<Je.length&&(bt=new s1(bt,n,null,o,xe),Me.push({event:bt,listeners:Je}),_t?bt.data=_t:(_t=f1(o),_t!==null&&(bt.data=_t)))),(_t=kU?XU(n,o):WU(n,o))&&(bt=ph(oe,"onBeforeInput"),0<bt.length&&(Je=new s1("onBeforeInput","beforeinput",null,o,xe),Me.push({event:Je,listeners:bt}),Je.data=_t)),FO(Me,n,oe,o,xe)}ZM(Me,s)})}function jc(n,s,o){return{instance:n,listener:s,currentTarget:o}}function ph(n,s){for(var o=s+"Capture",u=[];n!==null;){var m=n,g=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||g===null||(m=mc(n,o),m!=null&&u.unshift(jc(n,m,g)),m=mc(n,s),m!=null&&u.push(jc(n,m,g))),n.tag===3)return u;n=n.return}return[]}function HO(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function QM(n,s,o,u,m){for(var g=s._reactName,b=[];o!==null&&o!==u;){var N=o,q=N.alternate,oe=N.stateNode;if(N=N.tag,q!==null&&q===u)break;N!==5&&N!==26&&N!==27||oe===null||(q=oe,m?(oe=mc(o,g),oe!=null&&b.unshift(jc(o,oe,q))):m||(oe=mc(o,g),oe!=null&&b.push(jc(o,oe,q)))),o=o.return}b.length!==0&&n.push({event:s,listeners:b})}var GO=/\r\n?/g,VO=/\u0000|\uFFFD/g;function JM(n){return(typeof n=="string"?n:""+n).replace(GO,`
`).replace(VO,"")}function $M(n,s){return s=JM(s),JM(n)===s}function Xt(n,s,o,u,m,g){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Vo(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Vo(n,""+u);break;case"className":zt(n,"class",u);break;case"tabIndex":zt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(n,o,u);break;case"style":$y(n,u,g);break;case"data":if(s!=="object"){zt(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=yf(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(s!=="input"&&Xt(n,s,"name",m.name,m,null),Xt(n,s,"formEncType",m.formEncType,m,null),Xt(n,s,"formMethod",m.formMethod,m,null),Xt(n,s,"formTarget",m.formTarget,m,null)):(Xt(n,s,"encType",m.encType,m,null),Xt(n,s,"method",m.method,m,null),Xt(n,s,"target",m.target,m,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=yf(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Wr);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(m.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=yf(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Mt("beforetoggle",n),Mt("toggle",n),Kt(n,"popover",u);break;case"xlinkActuate":yt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":yt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":yt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":yt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":yt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":yt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":yt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":yt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":yt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Kt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=gU.get(o)||o,Kt(n,o,u))}}function y0(n,s,o,u,m,g){switch(o){case"style":$y(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(m.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Vo(n,u):(typeof u=="number"||typeof u=="bigint")&&Vo(n,""+u);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Wr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ze.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(m=o.endsWith("Capture"),s=o.slice(2,m?o.length-7:void 0),g=n[Gn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(s,g,m),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,m);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Kt(n,o,u)}}}function Yn(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",n),Mt("load",n);var u=!1,m=!1,g;for(g in o)if(o.hasOwnProperty(g)){var b=o[g];if(b!=null)switch(g){case"src":u=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:Xt(n,s,g,b,o,null)}}m&&Xt(n,s,"srcSet",o.srcSet,o,null),u&&Xt(n,s,"src",o.src,o,null);return;case"input":Mt("invalid",n);var N=g=b=m=null,q=null,oe=null;for(u in o)if(o.hasOwnProperty(u)){var xe=o[u];if(xe!=null)switch(u){case"name":m=xe;break;case"type":b=xe;break;case"checked":q=xe;break;case"defaultChecked":oe=xe;break;case"value":g=xe;break;case"defaultValue":N=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(i(137,s));break;default:Xt(n,s,u,xe,o,null)}}ii(n,g,N,q,oe,b,m,!1);return;case"select":Mt("invalid",n),u=b=g=null;for(m in o)if(o.hasOwnProperty(m)&&(N=o[m],N!=null))switch(m){case"value":g=N;break;case"defaultValue":b=N;break;case"multiple":u=N;default:Xt(n,s,m,N,o,null)}s=g,o=b,n.multiple=!!u,s!=null?_n(n,!!u,s,!1):o!=null&&_n(n,!!u,o,!0);return;case"textarea":Mt("invalid",n),g=m=u=null;for(b in o)if(o.hasOwnProperty(b)&&(N=o[b],N!=null))switch(b){case"value":u=N;break;case"defaultValue":m=N;break;case"children":g=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(91));break;default:Xt(n,s,b,N,o,null)}Tr(n,u,m,g);return;case"option":for(q in o)o.hasOwnProperty(q)&&(u=o[q],u!=null)&&(q==="selected"?n.selected=u&&typeof u!="function"&&typeof u!="symbol":Xt(n,s,q,u,o,null));return;case"dialog":Mt("beforetoggle",n),Mt("toggle",n),Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":Mt("load",n);break;case"video":case"audio":for(u=0;u<qc.length;u++)Mt(qc[u],n);break;case"image":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"embed":case"source":case"link":Mt("error",n),Mt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in o)if(o.hasOwnProperty(oe)&&(u=o[oe],u!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:Xt(n,s,oe,u,o,null)}return;default:if(Nm(s)){for(xe in o)o.hasOwnProperty(xe)&&(u=o[xe],u!==void 0&&y0(n,s,xe,u,o,void 0));return}}for(N in o)o.hasOwnProperty(N)&&(u=o[N],u!=null&&Xt(n,s,N,u,o,null))}function kO(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,g=null,b=null,N=null,q=null,oe=null,xe=null;for(ge in o){var Me=o[ge];if(o.hasOwnProperty(ge)&&Me!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":q=Me;default:u.hasOwnProperty(ge)||Xt(n,s,ge,null,u,Me)}}for(var ue in u){var ge=u[ue];if(Me=o[ue],u.hasOwnProperty(ue)&&(ge!=null||Me!=null))switch(ue){case"type":g=ge;break;case"name":m=ge;break;case"checked":oe=ge;break;case"defaultChecked":xe=ge;break;case"value":b=ge;break;case"defaultValue":N=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(i(137,s));break;default:ge!==Me&&Xt(n,s,ue,ge,u,Me)}}$n(n,b,N,q,oe,xe,g,m);return;case"select":ge=b=N=ue=null;for(g in o)if(q=o[g],o.hasOwnProperty(g)&&q!=null)switch(g){case"value":break;case"multiple":ge=q;default:u.hasOwnProperty(g)||Xt(n,s,g,null,u,q)}for(m in u)if(g=u[m],q=o[m],u.hasOwnProperty(m)&&(g!=null||q!=null))switch(m){case"value":ue=g;break;case"defaultValue":N=g;break;case"multiple":b=g;default:g!==q&&Xt(n,s,m,g,u,q)}s=N,o=b,u=ge,ue!=null?_n(n,!!o,ue,!1):!!u!=!!o&&(s!=null?_n(n,!!o,s,!0):_n(n,!!o,o?[]:"",!1));return;case"textarea":ge=ue=null;for(N in o)if(m=o[N],o.hasOwnProperty(N)&&m!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Xt(n,s,N,null,u,m)}for(b in u)if(m=u[b],g=o[b],u.hasOwnProperty(b)&&(m!=null||g!=null))switch(b){case"value":ue=m;break;case"defaultValue":ge=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:m!==g&&Xt(n,s,b,m,u,g)}Go(n,ue,ge);return;case"option":for(var qe in o)ue=o[qe],o.hasOwnProperty(qe)&&ue!=null&&!u.hasOwnProperty(qe)&&(qe==="selected"?n.selected=!1:Xt(n,s,qe,null,u,ue));for(q in u)ue=u[q],ge=o[q],u.hasOwnProperty(q)&&ue!==ge&&(ue!=null||ge!=null)&&(q==="selected"?n.selected=ue&&typeof ue!="function"&&typeof ue!="symbol":Xt(n,s,q,ue,u,ge));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in o)ue=o[rt],o.hasOwnProperty(rt)&&ue!=null&&!u.hasOwnProperty(rt)&&Xt(n,s,rt,null,u,ue);for(oe in u)if(ue=u[oe],ge=o[oe],u.hasOwnProperty(oe)&&ue!==ge&&(ue!=null||ge!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(i(137,s));break;default:Xt(n,s,oe,ue,u,ge)}return;default:if(Nm(s)){for(var Wt in o)ue=o[Wt],o.hasOwnProperty(Wt)&&ue!==void 0&&!u.hasOwnProperty(Wt)&&y0(n,s,Wt,void 0,u,ue);for(xe in u)ue=u[xe],ge=o[xe],!u.hasOwnProperty(xe)||ue===ge||ue===void 0&&ge===void 0||y0(n,s,xe,ue,u,ge);return}}for(var ie in o)ue=o[ie],o.hasOwnProperty(ie)&&ue!=null&&!u.hasOwnProperty(ie)&&Xt(n,s,ie,null,u,ue);for(Me in u)ue=u[Me],ge=o[Me],!u.hasOwnProperty(Me)||ue===ge||ue==null&&ge==null||Xt(n,s,Me,ue,u,ge)}function eE(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XO(){if(typeof performance.getEntriesByType=="function"){for(var n=0,s=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var m=o[u],g=m.transferSize,b=m.initiatorType,N=m.duration;if(g&&N&&eE(b)){for(b=0,N=m.responseEnd,u+=1;u<o.length;u++){var q=o[u],oe=q.startTime;if(oe>N)break;var xe=q.transferSize,Me=q.initiatorType;xe&&eE(Me)&&(q=q.responseEnd,b+=xe*(q<N?1:(N-oe)/(q-oe)))}if(--u,s+=8*(g+b)/(m.duration/1e3),n++,10<n)break}}if(0<n)return s/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var S0=null,M0=null;function mh(n){return n.nodeType===9?n:n.ownerDocument}function tE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nE(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function E0(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var T0=null;function WO(){var n=window.event;return n&&n.type==="popstate"?n===T0?!1:(T0=n,!0):(T0=null,!1)}var iE=typeof setTimeout=="function"?setTimeout:void 0,YO=typeof clearTimeout=="function"?clearTimeout:void 0,rE=typeof Promise=="function"?Promise:void 0,qO=typeof queueMicrotask=="function"?queueMicrotask:typeof rE<"u"?function(n){return rE.resolve(null).then(n).catch(jO)}:iE;function jO(n){setTimeout(function(){throw n})}function Ks(n){return n==="head"}function sE(n,s){var o=s,u=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(m),xl(s);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Zc(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,Zc(o);for(var g=o.firstChild;g;){var b=g.nextSibling,N=g.nodeName;g[Ra]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=b}}else o==="body"&&Zc(n.ownerDocument.body);o=m}while(o);xl(s)}function aE(n,s){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function b0(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":b0(o),z(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function ZO(n,s,o,u){for(;n.nodeType===1;){var m=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Ra])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==m.rel||n.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||n.getAttribute("title")!==(m.title==null?null:m.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(m.src==null?null:m.src)||n.getAttribute("type")!==(m.type==null?null:m.type)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var g=m.name==null?null:""+m.name;if(m.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=tr(n.nextSibling),n===null)break}return null}function KO(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=tr(n.nextSibling),n===null))return null;return n}function oE(n,s){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=tr(n.nextSibling),n===null))return null;return n}function A0(n){return n.data==="$?"||n.data==="$~"}function R0(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function QO(n,s){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=s;else if(n.data!=="$?"||o.readyState!=="loading")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function tr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return n}var w0=null;function lE(n){n=n.nextSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(s===0)return tr(n.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}n=n.nextSibling}return null}function cE(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return n;s--}else o!=="/$"&&o!=="/&"||s++}n=n.previousSibling}return null}function uE(n,s,o){switch(s=mh(o),n){case"html":if(n=s.documentElement,!n)throw Error(i(452));return n;case"head":if(n=s.head,!n)throw Error(i(453));return n;case"body":if(n=s.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Zc(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);z(n)}var nr=new Map,fE=new Set;function gh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var os=k.d;k.d={f:JO,r:$O,D:eN,C:tN,L:nN,m:iN,X:sN,S:rN,M:aN};function JO(){var n=os.f(),s=oh();return n||s}function $O(n){var s=he(n);s!==null&&s.tag===5&&s.type==="form"?wS(s):os.r(n)}var gl=typeof document>"u"?null:document;function hE(n,s,o){var u=gl;if(u&&typeof s=="string"&&s){var m=Et(s);m='link[rel="'+n+'"][href="'+m+'"]',typeof o=="string"&&(m+='[crossorigin="'+o+'"]'),fE.has(m)||(fE.add(m),n={rel:n,crossOrigin:o,href:s},u.querySelector(m)===null&&(s=u.createElement("link"),Yn(s,"link",n),be(s),u.head.appendChild(s)))}}function eN(n){os.D(n),hE("dns-prefetch",n,null)}function tN(n,s){os.C(n,s),hE("preconnect",n,s)}function nN(n,s,o){os.L(n,s,o);var u=gl;if(u&&n&&s){var m='link[rel="preload"][as="'+Et(s)+'"]';s==="image"&&o&&o.imageSrcSet?(m+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(m+='[imagesizes="'+Et(o.imageSizes)+'"]')):m+='[href="'+Et(n)+'"]';var g=m;switch(s){case"style":g=_l(n);break;case"script":g=vl(n)}nr.has(g)||(n=_({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),nr.set(g,n),u.querySelector(m)!==null||s==="style"&&u.querySelector(Kc(g))||s==="script"&&u.querySelector(Qc(g))||(s=u.createElement("link"),Yn(s,"link",n),be(s),u.head.appendChild(s)))}}function iN(n,s){os.m(n,s);var o=gl;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",m='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',g=m;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=vl(n)}if(!nr.has(g)&&(n=_({rel:"modulepreload",href:n},s),nr.set(g,n),o.querySelector(m)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Qc(g)))return}u=o.createElement("link"),Yn(u,"link",n),be(u),o.head.appendChild(u)}}}function rN(n,s,o){os.S(n,s,o);var u=gl;if(u&&n){var m=ne(u).hoistableStyles,g=_l(n);s=s||"default";var b=m.get(g);if(!b){var N={loading:0,preload:null};if(b=u.querySelector(Kc(g)))N.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":s},o),(o=nr.get(g))&&C0(n,o);var q=b=u.createElement("link");be(q),Yn(q,"link",n),q._p=new Promise(function(oe,xe){q.onload=oe,q.onerror=xe}),q.addEventListener("load",function(){N.loading|=1}),q.addEventListener("error",function(){N.loading|=2}),N.loading|=4,_h(b,s,u)}b={type:"stylesheet",instance:b,count:1,state:N},m.set(g,b)}}}function sN(n,s){os.X(n,s);var o=gl;if(o&&n){var u=ne(o).hoistableScripts,m=vl(n),g=u.get(m);g||(g=o.querySelector(Qc(m)),g||(n=_({src:n,async:!0},s),(s=nr.get(m))&&D0(n,s),g=o.createElement("script"),be(g),Yn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(m,g))}}function aN(n,s){os.M(n,s);var o=gl;if(o&&n){var u=ne(o).hoistableScripts,m=vl(n),g=u.get(m);g||(g=o.querySelector(Qc(m)),g||(n=_({src:n,async:!0,type:"module"},s),(s=nr.get(m))&&D0(n,s),g=o.createElement("script"),be(g),Yn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(m,g))}}function dE(n,s,o,u){var m=(m=ce.current)?gh(m):null;if(!m)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=_l(o.href),o=ne(m).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=_l(o.href);var g=ne(m).hoistableStyles,b=g.get(n);if(b||(m=m.ownerDocument||m,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,b),(g=m.querySelector(Kc(n)))&&!g._p&&(b.instance=g,b.state.loading=5),nr.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},nr.set(n,o),g||oN(m,n,o,b.state))),s&&u===null)throw Error(i(528,""));return b}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=vl(o),o=ne(m).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function _l(n){return'href="'+Et(n)+'"'}function Kc(n){return'link[rel="stylesheet"]['+n+"]"}function pE(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function oN(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Yn(s,"link",o),be(s),n.head.appendChild(s))}function vl(n){return'[src="'+Et(n)+'"]'}function Qc(n){return"script[async]"+n}function mE(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return s.instance=u,be(u),u;var m=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),be(u),Yn(u,"style",m),_h(u,o.precedence,n),s.instance=u;case"stylesheet":m=_l(o.href);var g=n.querySelector(Kc(m));if(g)return s.state.loading|=4,s.instance=g,be(g),g;u=pE(o),(m=nr.get(m))&&C0(u,m),g=(n.ownerDocument||n).createElement("link"),be(g);var b=g;return b._p=new Promise(function(N,q){b.onload=N,b.onerror=q}),Yn(g,"link",u),s.state.loading|=4,_h(g,o.precedence,n),s.instance=g;case"script":return g=vl(o.src),(m=n.querySelector(Qc(g)))?(s.instance=m,be(m),m):(u=o,(m=nr.get(g))&&(u=_({},o),D0(u,m)),n=n.ownerDocument||n,m=n.createElement("script"),be(m),Yn(m,"link",u),n.head.appendChild(m),s.instance=m);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,_h(u,o.precedence,n));return s.instance}function _h(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=u.length?u[u.length-1]:null,g=m,b=0;b<u.length;b++){var N=u[b];if(N.dataset.precedence===s)g=N;else if(g!==m)break}g?g.parentNode.insertBefore(n,g.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function C0(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function D0(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var vh=null;function gE(n,s,o){if(vh===null){var u=new Map,m=vh=new Map;m.set(o,u)}else m=vh,u=m.get(o),u||(u=new Map,m.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),m=0;m<o.length;m++){var g=o[m];if(!(g[Ra]||g[En]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var b=g.getAttribute(s)||"";b=n+b;var N=u.get(b);N?N.push(g):u.set(b,[g])}}return u}function _E(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function lN(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;return s.rel==="stylesheet"?(n=s.disabled,typeof s.precedence=="string"&&n==null):!0;case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function vE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function cN(n,s,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var m=_l(u.href),g=s.querySelector(Kc(m));if(g){s=g._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(n.count++,n=xh.bind(n),s.then(n,n)),o.state.loading|=4,o.instance=g,be(g);return}g=s.ownerDocument||s,u=pE(u),(m=nr.get(m))&&C0(u,m),g=g.createElement("link"),be(g);var b=g;b._p=new Promise(function(N,q){b.onload=N,b.onerror=q}),Yn(g,"link",u),o.instance=g}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=xh.bind(n),s.addEventListener("load",o),s.addEventListener("error",o))}}var L0=0;function uN(n,s){return n.stylesheets&&n.count===0&&Sh(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&Sh(n,n.stylesheets),n.unsuspend){var g=n.unsuspend;n.unsuspend=null,g()}},6e4+s);0<n.imgBytes&&L0===0&&(L0=62500*XO());var m=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Sh(n,n.stylesheets),n.unsuspend)){var g=n.unsuspend;n.unsuspend=null,g()}},(n.imgBytes>L0?50:800)+s);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(m)}}:null}function xh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var yh=null;function Sh(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,yh=new Map,s.forEach(fN,n),yh=null,xh.call(n))}function fN(n,s){if(!(s.state.loading&4)){var o=yh.get(n);if(o)var u=o.get(null);else{o=new Map,yh.set(n,o);for(var m=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<m.length;g++){var b=m[g];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}m=s.instance,b=m.getAttribute("data-precedence"),g=o.get(b)||u,g===u&&o.set(null,m),o.set(b,m),this.count++,u=xh.bind(this),m.addEventListener("load",u),m.addEventListener("error",u),g?g.parentNode.insertBefore(m,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(m,n.firstChild)),s.state.loading|=4}}var Jc={$$typeof:R,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function hN(n,s,o,u,m,g,b,N,q){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=u,this.onUncaughtError=m,this.onCaughtError=g,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function xE(n,s,o,u,m,g,b,N,q,oe,xe,Me){return n=new hN(n,s,o,b,q,oe,xe,Me,N),s=1,g===!0&&(s|=24),g=Pi(3,null,null,s),n.current=g,g.stateNode=n,s=ug(),s.refCount++,n.pooledCache=s,s.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:s},pg(g),n}function yE(n){return n?(n=Zo,n):Zo}function SE(n,s,o,u,m,g){m=yE(m),u.context===null?u.context=m:u.pendingContext=m,u=Is(s),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Hs(n,u,s),o!==null&&(yi(o,n,s),Dc(o,n,s))}function ME(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function U0(n,s){ME(n,s),(n=n.alternate)&&ME(n,s)}function EE(n){if(n.tag===13||n.tag===31){var s=Ua(n,67108864);s!==null&&yi(s,n,67108864),U0(n,67108864)}}function TE(n){if(n.tag===13||n.tag===31){var s=Hi();s=Io(s);var o=Ua(n,s);o!==null&&yi(o,n,s),U0(n,s)}}var Mh=!0;function dN(n,s,o,u){var m=F.T;F.T=null;var g=k.p;try{k.p=2,O0(n,s,o,u)}finally{k.p=g,F.T=m}}function pN(n,s,o,u){var m=F.T;F.T=null;var g=k.p;try{k.p=8,O0(n,s,o,u)}finally{k.p=g,F.T=m}}function O0(n,s,o,u){if(Mh){var m=N0(u);if(m===null)x0(n,s,u,Eh,o),AE(n,u);else if(gN(m,n,s,o,u))u.stopPropagation();else if(AE(n,u),s&4&&-1<mN.indexOf(n)){for(;m!==null;){var g=he(m);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var b=Ae(g.pendingLanes);if(b!==0){var N=g;for(N.pendingLanes|=2,N.entangledLanes|=2;b;){var q=1<<31-Ge(b);N.entanglements[1]|=q,b&=~q}wr(g),(Pt&6)===0&&(sh=T()+500,Yc(0))}}break;case 31:case 13:N=Ua(g,2),N!==null&&yi(N,g,2),oh(),U0(g,2)}if(g=N0(u),g===null&&x0(n,s,u,Eh,o),g===m)break;m=g}m!==null&&u.stopPropagation()}else x0(n,s,u,null,o)}}function N0(n){return n=Fm(n),P0(n)}var Eh=null;function P0(n){if(Eh=null,n=ee(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===31){if(n=f(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return Eh=n,null}function bE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case re:return 2;case ve:return 8;case de:case He:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var F0=!1,Qs=null,Js=null,$s=null,$c=new Map,eu=new Map,ea=[],mN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function AE(n,s){switch(n){case"focusin":case"focusout":Qs=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":$s=null;break;case"pointerover":case"pointerout":$c.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":eu.delete(s.pointerId)}}function tu(n,s,o,u,m,g){return n===null||n.nativeEvent!==g?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[m]},s!==null&&(s=he(s),s!==null&&EE(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),n)}function gN(n,s,o,u,m){switch(s){case"focusin":return Qs=tu(Qs,n,s,o,u,m),!0;case"dragenter":return Js=tu(Js,n,s,o,u,m),!0;case"mouseover":return $s=tu($s,n,s,o,u,m),!0;case"pointerover":var g=m.pointerId;return $c.set(g,tu($c.get(g)||null,n,s,o,u,m)),!0;case"gotpointercapture":return g=m.pointerId,eu.set(g,tu(eu.get(g)||null,n,s,o,u,m)),!0}return!1}function RE(n){var s=ee(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,dc(n.priority,function(){TE(o)});return}}else if(s===31){if(s=f(o),s!==null){n.blockedOn=s,dc(n.priority,function(){TE(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Th(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=N0(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pm=u,o.target.dispatchEvent(u),Pm=null}else return s=he(o),s!==null&&EE(s),n.blockedOn=o,!1;s.shift()}return!0}function wE(n,s,o){Th(n)&&o.delete(s)}function _N(){F0=!1,Qs!==null&&Th(Qs)&&(Qs=null),Js!==null&&Th(Js)&&(Js=null),$s!==null&&Th($s)&&($s=null),$c.forEach(wE),eu.forEach(wE)}function bh(n,s){n.blockedOn===s&&(n.blockedOn=null,F0||(F0=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_N)))}var Ah=null;function CE(n){Ah!==n&&(Ah=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ah===n&&(Ah=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],m=n[s+2];if(typeof u!="function"){if(P0(u||o)===null)continue;break}var g=he(o);g!==null&&(n.splice(s,3),s-=3,Ng(g,{pending:!0,data:m,method:o.method,action:u},u,m))}}))}function xl(n){function s(q){return bh(q,n)}Qs!==null&&bh(Qs,n),Js!==null&&bh(Js,n),$s!==null&&bh($s,n),$c.forEach(s),eu.forEach(s);for(var o=0;o<ea.length;o++){var u=ea[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ea.length&&(o=ea[0],o.blockedOn===null);)RE(o),o.blockedOn===null&&ea.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var m=o[u],g=o[u+1],b=m[Gn]||null;if(typeof g=="function")b||CE(o);else if(b){var N=null;if(g&&g.hasAttribute("formAction")){if(m=g,b=g[Gn]||null)N=b.formAction;else if(P0(m)!==null)continue}else N=b.action;typeof N=="function"?o[u+1]=N:(o.splice(u,3),u-=3),CE(o)}}}function DE(){function n(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(b){return m=b})},focusReset:"manual",scroll:"manual"})}function s(){m!==null&&(m(),m=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,m=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),m!==null&&(m(),m=null)}}}function z0(n){this._internalRoot=n}Rh.prototype.render=z0.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Hi();SE(o,u,n,s,null,null)},Rh.prototype.unmount=z0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;SE(n.current,2,null,n,null,null),oh(),s[Us]=null}};function Rh(n){this._internalRoot=n}Rh.prototype.unstable_scheduleHydration=function(n){if(n){var s=Aa();n={blockedOn:null,target:n,priority:s};for(var o=0;o<ea.length&&s!==0&&s<ea[o].priority;o++);ea.splice(o,0,n),o===0&&RE(n)}};var LE=e.version;if(LE!=="19.2.8")throw Error(i(527,LE,"19.2.8"));k.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=d(s),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var vN={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wh.isDisabled&&wh.supportsFiber)try{Re=wh.inject(vN),Ue=wh}catch{}}return Ml.createRoot=function(n,s){if(!a(n))throw Error(i(299));var o=!1,u="",m=BS,g=IS,b=HS;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError)),s=xE(n,1,!1,null,null,o,u,null,m,g,b,DE),n[Us]=s.current,v0(n),new z0(s)},Ml.hydrateRoot=function(n,s,o){if(!a(n))throw Error(i(299));var u=!1,m="",g=BS,b=IS,N=HS,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(N=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),s=xE(n,1,!0,s,o??null,u,m,q,g,b,N,DE),s.context=yE(null),o=s.current,u=Hi(),u=Io(u),m=Is(u),m.callback=null,Hs(o,m,u),o=u,s.current.lanes=o,ni(s,o),wr(s),n[Us]=s.current,v0(n),new Rh(s)},Ml.version="19.2.8",Ml}var j0;function GE(){if(j0)return Uh.exports;j0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Uh.exports=HE(),Uh.exports}var VE=GE();const nu="179",kE=0,Z0=1,XE=2,K0=1,WE=2,Cr=3,Dr=0,wn=1,Si=2,dr=0,Wa=1,Fh=2,Q0=3,J0=4,YE=5,na=100,qE=101,jE=102,ZE=103,KE=104,QE=200,JE=201,$E=202,eT=203,zh=204,Bh=205,tT=206,nT=207,iT=208,rT=209,sT=210,aT=211,oT=212,lT=213,cT=214,Ih=0,iu=1,Hh=2,Ya=3,Gh=4,Vh=5,kh=6,Xh=7,Wh=0,uT=1,fT=2,ls=0,hT=1,dT=2,pT=3,$0=4,mT=5,gT=6,_T=7,e_=300,qa=301,ja=302,Yh=303,qh=304,ru=306,jh=1e3,ir=1001,Zh=1002,Mi=1003,vT=1004,su=1005,yn=1006,Kh=1007,ia=1008,si=1009,t_=1010,n_=1011,El=1012,Qh=1013,ra=1014,Gi=1015,Za=1016,Jh=1017,$h=1018,Ka=1020,i_=35902,r_=1021,s_=1022,Vi=1023,Tl=1026,Qa=1027,ed=1028,td=1029,a_=1030,nd=1031,id=1033,au=33776,ou=33777,lu=33778,cu=33779,rd=35840,sd=35841,ad=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,yd=37817,Sd=37818,Md=37819,Ed=37820,Td=37821,uu=36492,bd=36494,Ad=36495,o_=36283,Rd=36284,wd=36285,Cd=36286,bl=3200,xT=3201,Dd=0,yT=1,pr="",an="srgb",cs="srgb-linear",fu="linear",Vt="srgb",Ja=7680,l_=519,ST=512,MT=513,ET=514,c_=515,TT=516,bT=517,AT=518,RT=519,u_=35044,Ld="300 es",mr=2e3,hu=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let f_=1234567;const Al=Math.PI/180,Rl=180/Math.PI;function $a(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[t&63|128]+Zn[t>>8&255]+"-"+Zn[t>>16&255]+Zn[t>>24&255]+Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Ud(r,e){return(r%e+e)%e}function wT(r,e,t,i,a){return i+(r-e)*(a-i)/(t-e)}function CT(r,e,t){return r!==e?(t-r)/(e-r):0}function wl(r,e,t){return(1-t)*r+t*e}function DT(r,e,t,i){return wl(r,e,1-Math.exp(-t*i))}function LT(r,e=1){return e-Math.abs(Ud(r,e*2)-e)}function UT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function OT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function NT(r,e){return r+Math.floor(Math.random()*(e-r+1))}function PT(r,e){return r+Math.random()*(e-r)}function FT(r){return r*(.5-Math.random())}function zT(r){r!==void 0&&(f_=r);let e=f_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BT(r){return r*Al}function IT(r){return r*Rl}function HT(r){return(r&r-1)===0&&r!==0}function GT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function VT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kT(r,e,t,i,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),d=l((e+i)/2),p=c((e+i)/2),_=l((e-i)/2),x=c((e-i)/2),v=l((i-e)/2),E=c((i-e)/2);switch(a){case"XYX":r.set(f*p,h*_,h*x,f*d);break;case"YZY":r.set(h*x,f*p,h*_,f*d);break;case"ZXZ":r.set(h*_,h*x,f*p,f*d);break;case"XZX":r.set(f*p,h*E,h*v,f*d);break;case"YXY":r.set(h*v,f*p,h*E,f*d);break;case"ZYZ":r.set(h*E,h*v,f*p,f*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function eo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:Al,RAD2DEG:Rl,generateUUID:$a,clamp:xt,euclideanModulo:Ud,mapLinear:wT,inverseLerp:CT,lerp:wl,damp:DT,pingpong:LT,smoothstep:UT,smootherstep:OT,randInt:NT,randFloat:PT,randFloatSpread:FT,seededRandom:zT,degToRad:BT,radToDeg:IT,isPowerOfTwo:HT,ceilPowerOfTwo:GT,floorPowerOfTwo:VT,setQuaternionFromProperEuler:kT,normalize:ei,denormalize:eo};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cl{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,c,f){let h=i[a+0],d=i[a+1],p=i[a+2],_=i[a+3];const x=l[c+0],v=l[c+1],E=l[c+2],S=l[c+3];if(f===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=v,e[t+2]=E,e[t+3]=S;return}if(_!==S||h!==x||d!==v||p!==E){let M=1-f;const y=h*x+d*v+p*E+_*S,D=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const L=Math.sqrt(R),U=Math.atan2(L,y*D);M=Math.sin(M*U)/L,f=Math.sin(f*U)/L}const A=f*D;if(h=h*M+x*A,d=d*M+v*A,p=p*M+E*A,_=_*M+S*A,M===1-f){const L=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=L,d*=L,p*=L,_*=L}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,l,c){const f=i[a],h=i[a+1],d=i[a+2],p=i[a+3],_=l[c],x=l[c+1],v=l[c+2],E=l[c+3];return e[t]=f*E+p*_+h*v-d*x,e[t+1]=h*E+p*x+d*_-f*v,e[t+2]=d*E+p*v+f*x-h*_,e[t+3]=p*E-f*_-h*x-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(i/2),p=f(a/2),_=f(l/2),x=h(i/2),v=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*p*_+d*v*E,this._y=d*v*_-x*p*E,this._z=d*p*E+x*v*_,this._w=d*p*_-x*v*E;break;case"YXZ":this._x=x*p*_+d*v*E,this._y=d*v*_-x*p*E,this._z=d*p*E-x*v*_,this._w=d*p*_+x*v*E;break;case"ZXY":this._x=x*p*_-d*v*E,this._y=d*v*_+x*p*E,this._z=d*p*E+x*v*_,this._w=d*p*_-x*v*E;break;case"ZYX":this._x=x*p*_-d*v*E,this._y=d*v*_+x*p*E,this._z=d*p*E-x*v*_,this._w=d*p*_+x*v*E;break;case"YZX":this._x=x*p*_+d*v*E,this._y=d*v*_+x*p*E,this._z=d*p*E-x*v*_,this._w=d*p*_-x*v*E;break;case"XZY":this._x=x*p*_-d*v*E,this._y=d*v*_-x*p*E,this._z=d*p*E+x*v*_,this._w=d*p*_+x*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],d=t[2],p=t[6],_=t[10],x=i+f+_;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(p-h)*v,this._y=(l-d)*v,this._z=(c-a)*v}else if(i>f&&i>_){const v=2*Math.sqrt(1+i-f-_);this._w=(p-h)/v,this._x=.25*v,this._y=(a+c)/v,this._z=(l+d)/v}else if(f>_){const v=2*Math.sqrt(1+f-i-_);this._w=(l-d)/v,this._x=(a+c)/v,this._y=.25*v,this._z=(h+p)/v}else{const v=2*Math.sqrt(1+_-i-f);this._w=(c-a)/v,this._x=(l+d)/v,this._y=(h+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+c*f+a*d-l*h,this._y=a*p+c*h+l*f-i*d,this._z=l*p+c*d+i*h-a*f,this._w=c*p-i*f-a*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const v=1-t;return this._w=v*c+t*this._w,this._x=v*i+t*this._x,this._y=v*a+t*this._y,this._z=v*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,f),_=Math.sin((1-t)*p)/d,x=Math.sin(t*p)/d;return this._w=c*_+this._w*x,this._x=i*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*a-f*i),p=2*(f*t-l*a),_=2*(l*i-c*t);return this.x=t+h*d+c*_-f*p,this.y=i+h*p+f*d-l*_,this.z=a+h*_+l*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-i*h,this.z=i*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new te,h_=new Cl;class mt{constructor(e,t,i,a,l,c,f,h,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,h,d)}set(e,t,i,a,l,c,f,h,d){const p=this.elements;return p[0]=e,p[1]=a,p[2]=f,p[3]=t,p[4]=l,p[5]=h,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[3],h=i[6],d=i[1],p=i[4],_=i[7],x=i[2],v=i[5],E=i[8],S=a[0],M=a[3],y=a[6],D=a[1],R=a[4],A=a[7],L=a[2],U=a[5],O=a[8];return l[0]=c*S+f*D+h*L,l[3]=c*M+f*R+h*U,l[6]=c*y+f*A+h*O,l[1]=d*S+p*D+_*L,l[4]=d*M+p*R+_*U,l[7]=d*y+p*A+_*O,l[2]=x*S+v*D+E*L,l[5]=x*M+v*R+E*U,l[8]=x*y+v*A+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*f*d-i*l*p+i*f*h+a*l*d-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],p=e[8],_=p*c-f*d,x=f*h-p*l,v=d*l-c*h,E=t*_+i*x+a*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=_*S,e[1]=(a*d-p*i)*S,e[2]=(f*i-a*c)*S,e[3]=x*S,e[4]=(p*t-a*h)*S,e[5]=(a*l-f*t)*S,e[6]=v*S,e[7]=(i*h-d*t)*S,e[8]=(c*t-i*l)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(i*h,i*d,-i*(h*c+d*f)+c+e,-a*d,a*h,-a*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Pd.makeScale(e,t)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new mt;function d_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XT(){const r=du("canvas");return r.style.display="block",r}const p_={};function to(r){r in p_||(p_[r]=!0,console.warn(r))}function WT(r,e,t){return new Promise(function(i,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const m_=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YT(){const r={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(a.r=Lr(a.r),a.g=Lr(a.g),a.b=Lr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(a.r=no(a.r),a.g=no(a.g),a.b=no(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pr?fu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[cs]:{primaries:e,whitePoint:i,transfer:fu,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),r}const Lt=YT();function Lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let io;class qT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{io===void 0&&(io=du("canvas")),io.width=e.width,io.height=e.height;const a=io.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=io}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=du("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Lr(l[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lr(t[i]/255)*255):t[i]=Lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jT=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(zd(a[c].image)):l.push(zd(a[c]))}else l=zd(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZT=0;const Bd=new te;class Nn extends us{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,i=ir,a=ir,l=yn,c=ia,f=Vi,h=si,d=Nn.DEFAULT_ANISOTROPY,p=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=$a(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null,Nn.DEFAULT_MAPPING=e_,Nn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const h=e.elements,d=h[0],p=h[4],_=h[8],x=h[1],v=h[5],E=h[9],S=h[2],M=h[6],y=h[10];if(Math.abs(p-x)<.01&&Math.abs(_-S)<.01&&Math.abs(E-M)<.01){if(Math.abs(p+x)<.1&&Math.abs(_+S)<.1&&Math.abs(E+M)<.1&&Math.abs(d+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,A=(v+1)/2,L=(y+1)/2,U=(p+x)/4,O=(_+S)/4,P=(E+M)/4;return R>A&&R>L?R<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(R),a=U/i,l=O/i):A>L?A<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),i=U/a,l=P/a):L<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(L),i=O/l,a=P/l),this.set(i,a,l,t),this}let D=Math.sqrt((M-E)*(M-E)+(_-S)*(_-S)+(x-p)*(x-p));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(_-S)/D,this.z=(x-p)/D,this.w=Math.acos((d+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KT extends us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:i.depth},l=new Nn(a);this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Fd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends KT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class __ extends Nn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QT extends Nn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,rr):rr.fromBufferAttribute(l,c),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pu.copy(i.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),mu.subVectors(this.max,Dl),ro.subVectors(e.a,Dl),so.subVectors(e.b,Dl),ao.subVectors(e.c,Dl),fs.subVectors(so,ro),hs.subVectors(ao,so),aa.subVectors(ro,ao);let t=[0,-fs.z,fs.y,0,-hs.z,hs.y,0,-aa.z,aa.y,fs.z,0,-fs.x,hs.z,0,-hs.x,aa.z,0,-aa.x,-fs.y,fs.x,0,-hs.y,hs.x,0,-aa.y,aa.x,0];return!Id(t,ro,so,ao,mu)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,ro,so,ao,mu))?!1:(gu.crossVectors(fs,hs),t=[gu.x,gu.y,gu.z],Id(t,ro,so,ao,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ur=[new te,new te,new te,new te,new te,new te,new te,new te],rr=new te,pu=new sa,ro=new te,so=new te,ao=new te,fs=new te,hs=new te,aa=new te,Dl=new te,mu=new te,gu=new te,oa=new te;function Id(r,e,t,i,a){for(let l=0,c=r.length-3;l<=c;l+=3){oa.fromArray(r,l);const f=a.x*Math.abs(oa.x)+a.y*Math.abs(oa.y)+a.z*Math.abs(oa.z),h=e.dot(oa),d=t.dot(oa),p=i.dot(oa);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>f)return!1}return!0}const JT=new sa,Ll=new te,Hd=new te;class oo{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):JT.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ll.subVectors(e,this.center);const t=Ll.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ll,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ll.copy(e.center).add(Hd)),this.expandByPoint(Ll.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Or=new te,Gd=new te,_u=new te,ds=new te,Vd=new te,vu=new te,kd=new te;class Xd{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Or.copy(this.origin).addScaledVector(this.direction,t),Or.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Gd.copy(e).add(t).multiplyScalar(.5),_u.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Gd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(_u),f=ds.dot(this.direction),h=-ds.dot(_u),d=ds.lengthSq(),p=Math.abs(1-c*c);let _,x,v,E;if(p>0)if(_=c*h-f,x=c*f-h,E=l*p,_>=0)if(x>=-E)if(x<=E){const S=1/p;_*=S,x*=S,v=_*(_+c*x+2*f)+x*(c*_+x+2*h)+d}else x=l,_=Math.max(0,-(c*x+f)),v=-_*_+x*(x+2*h)+d;else x=-l,_=Math.max(0,-(c*x+f)),v=-_*_+x*(x+2*h)+d;else x<=-E?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),v=-_*_+x*(x+2*h)+d):x<=E?(_=0,x=Math.min(Math.max(-l,-h),l),v=x*(x+2*h)+d):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),v=-_*_+x*(x+2*h)+d);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),v=-_*_+x*(x+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Gd).addScaledVector(_u,x),v}intersectSphere(e,t){Or.subVectors(e.center,this.origin);const i=Or.dot(this.direction),a=Or.dot(Or)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,h=i+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,c,f,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(i=(e.min.x-x.x)*d,a=(e.max.x-x.x)*d):(i=(e.max.x-x.x)*d,a=(e.min.x-x.x)*d),p>=0?(l=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(l=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),i>h||f>a)||((f>i||i!==i)&&(i=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Or)!==null}intersectTriangle(e,t,i,a,l){Vd.subVectors(t,e),vu.subVectors(i,e),kd.crossVectors(Vd,vu);let c=this.direction.dot(kd),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;ds.subVectors(this.origin,e);const h=f*this.direction.dot(vu.crossVectors(ds,vu));if(h<0)return null;const d=f*this.direction.dot(Vd.cross(ds));if(d<0||h+d>c)return null;const p=-f*ds.dot(kd);return p<0?null:this.at(p/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M)}set(e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=d,y[6]=p,y[10]=_,y[14]=x,y[3]=v,y[7]=E,y[11]=S,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/lo.setFromMatrixColumn(e,0).length(),l=1/lo.setFromMatrixColumn(e,1).length(),c=1/lo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),h=Math.cos(a),d=Math.sin(a),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*p,v=c*_,E=f*p,S=f*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=v+E*d,t[5]=x-S*d,t[9]=-f*h,t[2]=S-x*d,t[6]=E+v*d,t[10]=c*h}else if(e.order==="YXZ"){const x=h*p,v=h*_,E=d*p,S=d*_;t[0]=x+S*f,t[4]=E*f-v,t[8]=c*d,t[1]=c*_,t[5]=c*p,t[9]=-f,t[2]=v*f-E,t[6]=S+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*p,v=h*_,E=d*p,S=d*_;t[0]=x-S*f,t[4]=-c*_,t[8]=E+v*f,t[1]=v+E*f,t[5]=c*p,t[9]=S-x*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*p,v=c*_,E=f*p,S=f*_;t[0]=h*p,t[4]=E*d-v,t[8]=x*d+S,t[1]=h*_,t[5]=S*d+x,t[9]=v*d-E,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,v=c*d,E=f*h,S=f*d;t[0]=h*p,t[4]=S-x*_,t[8]=E*_+v,t[1]=_,t[5]=c*p,t[9]=-f*p,t[2]=-d*p,t[6]=v*_+E,t[10]=x-S*_}else if(e.order==="XZY"){const x=c*h,v=c*d,E=f*h,S=f*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=x*_+S,t[5]=c*p,t[9]=v*_-E,t[2]=E*_-v,t[6]=f*p,t[10]=S*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($T,e,eb)}lookAt(e,t,i){const a=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),ps.crossVectors(i,Ti),ps.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),ps.crossVectors(i,Ti)),ps.normalize(),xu.crossVectors(Ti,ps),a[0]=ps.x,a[4]=xu.x,a[8]=Ti.x,a[1]=ps.y,a[5]=xu.y,a[9]=Ti.y,a[2]=ps.z,a[6]=xu.z,a[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[4],h=i[8],d=i[12],p=i[1],_=i[5],x=i[9],v=i[13],E=i[2],S=i[6],M=i[10],y=i[14],D=i[3],R=i[7],A=i[11],L=i[15],U=a[0],O=a[4],P=a[8],w=a[12],C=a[1],B=a[5],X=a[9],W=a[13],G=a[2],Z=a[6],F=a[10],k=a[14],V=a[3],fe=a[7],_e=a[11],I=a[15];return l[0]=c*U+f*C+h*G+d*V,l[4]=c*O+f*B+h*Z+d*fe,l[8]=c*P+f*X+h*F+d*_e,l[12]=c*w+f*W+h*k+d*I,l[1]=p*U+_*C+x*G+v*V,l[5]=p*O+_*B+x*Z+v*fe,l[9]=p*P+_*X+x*F+v*_e,l[13]=p*w+_*W+x*k+v*I,l[2]=E*U+S*C+M*G+y*V,l[6]=E*O+S*B+M*Z+y*fe,l[10]=E*P+S*X+M*F+y*_e,l[14]=E*w+S*W+M*k+y*I,l[3]=D*U+R*C+A*G+L*V,l[7]=D*O+R*B+A*Z+L*fe,l[11]=D*P+R*X+A*F+L*_e,l[15]=D*w+R*W+A*k+L*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],d=e[13],p=e[2],_=e[6],x=e[10],v=e[14],E=e[3],S=e[7],M=e[11],y=e[15];return E*(+l*h*_-a*d*_-l*f*x+i*d*x+a*f*v-i*h*v)+S*(+t*h*v-t*d*x+l*c*x-a*c*v+a*d*p-l*h*p)+M*(+t*d*_-t*f*v-l*c*_+i*c*v+l*f*p-i*d*p)+y*(-a*f*p-t*h*_+t*f*x+a*c*_-i*c*x+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],p=e[8],_=e[9],x=e[10],v=e[11],E=e[12],S=e[13],M=e[14],y=e[15],D=_*M*d-S*x*d+S*h*v-f*M*v-_*h*y+f*x*y,R=E*x*d-p*M*d-E*h*v+c*M*v+p*h*y-c*x*y,A=p*S*d-E*_*d+E*f*v-c*S*v-p*f*y+c*_*y,L=E*_*h-p*S*h-E*f*x+c*S*x+p*f*M-c*_*M,U=t*D+i*R+a*A+l*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return e[0]=D*O,e[1]=(S*x*l-_*M*l-S*a*v+i*M*v+_*a*y-i*x*y)*O,e[2]=(f*M*l-S*h*l+S*a*d-i*M*d-f*a*y+i*h*y)*O,e[3]=(_*h*l-f*x*l-_*a*d+i*x*d+f*a*v-i*h*v)*O,e[4]=R*O,e[5]=(p*M*l-E*x*l+E*a*v-t*M*v-p*a*y+t*x*y)*O,e[6]=(E*h*l-c*M*l-E*a*d+t*M*d+c*a*y-t*h*y)*O,e[7]=(c*x*l-p*h*l+p*a*d-t*x*d-c*a*v+t*h*v)*O,e[8]=A*O,e[9]=(E*_*l-p*S*l-E*i*v+t*S*v+p*i*y-t*_*y)*O,e[10]=(c*S*l-E*f*l+E*i*d-t*S*d-c*i*y+t*f*y)*O,e[11]=(p*f*l-c*_*l-p*i*d+t*_*d+c*i*v-t*f*v)*O,e[12]=L*O,e[13]=(p*S*a-E*_*a+E*i*x-t*S*x-p*i*M+t*_*M)*O,e[14]=(E*f*a-c*S*a-E*i*h+t*S*h+c*i*M-t*f*M)*O,e[15]=(c*_*a-p*f*a+p*i*h-t*_*h-c*i*x+t*f*x)*O,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,c=e.x,f=e.y,h=e.z,d=l*c,p=l*f;return this.set(d*c+i,d*f-a*h,d*h+a*f,0,d*f+a*h,p*f+i,p*h-a*c,0,d*h-a*f,p*h+a*c,l*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,d=l+l,p=c+c,_=f+f,x=l*d,v=l*p,E=l*_,S=c*p,M=c*_,y=f*_,D=h*d,R=h*p,A=h*_,L=i.x,U=i.y,O=i.z;return a[0]=(1-(S+y))*L,a[1]=(v+A)*L,a[2]=(E-R)*L,a[3]=0,a[4]=(v-A)*U,a[5]=(1-(x+y))*U,a[6]=(M+D)*U,a[7]=0,a[8]=(E+R)*O,a[9]=(M-D)*O,a[10]=(1-(x+S))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=lo.set(a[0],a[1],a[2]).length();const c=lo.set(a[4],a[5],a[6]).length(),f=lo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],sr.copy(this);const d=1/l,p=1/c,_=1/f;return sr.elements[0]*=d,sr.elements[1]*=d,sr.elements[2]*=d,sr.elements[4]*=p,sr.elements[5]*=p,sr.elements[6]*=p,sr.elements[8]*=_,sr.elements[9]*=_,sr.elements[10]*=_,t.setFromRotationMatrix(sr),i.x=l,i.y=c,i.z=f,this}makePerspective(e,t,i,a,l,c,f=mr,h=!1){const d=this.elements,p=2*l/(t-e),_=2*l/(i-a),x=(t+e)/(t-e),v=(i+a)/(i-a);let E,S;if(h)E=l/(c-l),S=c*l/(c-l);else if(f===mr)E=-(c+l)/(c-l),S=-2*c*l/(c-l);else if(f===hu)E=-c/(c-l),S=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,l,c,f=mr,h=!1){const d=this.elements,p=2/(t-e),_=2/(i-a),x=-(t+e)/(t-e),v=-(i+a)/(i-a);let E,S;if(h)E=1/(c-l),S=c/(c-l);else if(f===mr)E=-2/(c-l),S=-(c+l)/(c-l);else if(f===hu)E=-1/(c-l),S=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=E,d[14]=S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lo=new te,sr=new Yt,$T=new te(0,0,0),eb=new te(1,1,1),ps=new te,xu=new te,Ti=new te,v_=new Yt,x_=new Cl;let Nr=class UE{constructor(e=0,t=0,i=0,a=UE.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],d=a[5],p=a[9],_=a[2],x=a[6],v=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nr.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tb=0;const y_=new te,co=new Cl,Pr=new Yt,yu=new te,Ul=new te,nb=new te,ib=new Cl,S_=new te(1,0,0),M_=new te(0,1,0),E_=new te(0,0,1),T_={type:"added"},rb={type:"removed"},uo={type:"childadded",child:null},Yd={type:"childremoved",child:null};class In extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new te,t=new Nr,i=new Cl,a=new te(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,t){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yu.copy(e):yu.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Ul,yu,this.up):Pr.lookAt(yu,Ul,this.up),this.quaternion.setFromRotationMatrix(Pr),a&&(Pr.extractRotation(a.matrixWorld),co.setFromRotationMatrix(Pr),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T_),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rb),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T_),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),_=c(e.shapes),x=c(e.skeletons),v=c(e.animations),E=c(e.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),x.length>0&&(i.skeletons=x),v.length>0&&(i.animations=v),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}In.DEFAULT_UP=new te(0,1,0),In.DEFAULT_MATRIX_AUTO_UPDATE=!0,In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ar=new te,Fr=new te,qd=new te,zr=new te,fo=new te,ho=new te,b_=new te,jd=new te,Zd=new te,Kd=new te,Qd=new Bt,Jd=new Bt,$d=new Bt;let Ol=class yl{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ar.subVectors(e,t),a.cross(ar);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){ar.subVectors(a,t),Fr.subVectors(i,t),qd.subVectors(e,t);const c=ar.dot(ar),f=ar.dot(Fr),h=ar.dot(qd),d=Fr.dot(Fr),p=Fr.dot(qd),_=c*d-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,v=(d*h-f*p)*x,E=(c*p-f*h)*x;return l.set(1-v-E,E,v)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(e,t,i,a,l,c,f,h){return this.getBarycoord(e,t,i,a,zr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,zr.x),h.addScaledVector(c,zr.y),h.addScaledVector(f,zr.z),h)}static getInterpolatedAttribute(e,t,i,a,l,c){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(e,t),Jd.fromBufferAttribute(e,i),$d.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Qd,l.x),c.addScaledVector(Jd,l.y),c.addScaledVector($d,l.z),c}static isFrontFacing(e,t,i,a){return ar.subVectors(i,t),Fr.subVectors(e,t),ar.cross(Fr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ar.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),ar.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yl.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yl.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return yl.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return yl.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yl.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let c,f;fo.subVectors(a,i),ho.subVectors(l,i),jd.subVectors(e,i);const h=fo.dot(jd),d=ho.dot(jd);if(h<=0&&d<=0)return t.copy(i);Zd.subVectors(e,a);const p=fo.dot(Zd),_=ho.dot(Zd);if(p>=0&&_<=p)return t.copy(a);const x=h*_-p*d;if(x<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(fo,c);Kd.subVectors(e,l);const v=fo.dot(Kd),E=ho.dot(Kd);if(E>=0&&v<=E)return t.copy(l);const S=v*d-h*E;if(S<=0&&d>=0&&E<=0)return f=d/(d-E),t.copy(i).addScaledVector(ho,f);const M=p*E-v*_;if(M<=0&&_-p>=0&&v-E>=0)return b_.subVectors(l,a),f=(_-p)/(_-p+(v-E)),t.copy(a).addScaledVector(b_,f);const y=1/(M+S+x);return c=S*y,f=x*y,t.copy(i).addScaledVector(fo,c).addScaledVector(ho,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const A_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Su={h:0,s:0,l:0};function ep(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let ft=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Lt.workingColorSpace){if(e=Ud(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=ep(c,l,e+1/3),this.g=ep(c,l,e),this.b=ep(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,a),this}setStyle(e,t=an){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=A_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Lt.workingToColorSpace(Kn.copy(this),e),Math.round(xt(Kn.r*255,0,255))*65536+Math.round(xt(Kn.g*255,0,255))*256+Math.round(xt(Kn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Kn.copy(this),t);const i=Kn.r,a=Kn.g,l=Kn.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let h,d;const p=(f+c)/2;if(f===c)h=0,d=0;else{const _=c-f;switch(d=p<=.5?_/(c+f):_/(2-c-f),c){case i:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-i)/_+2;break;case l:h=(i-a)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=an){Lt.workingToColorSpace(Kn.copy(this),e);const t=Kn.r,i=Kn.g,a=Kn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Su);const i=wl(ms.h,Su.h,t),a=wl(ms.s,Su.s,t),l=wl(ms.l,Su.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Kn=new ft;ft.NAMES=A_;let sb=0;class Br extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Wa,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Bh&&(i.blendDst=this.blendDst),this.blendEquation!==na&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==l_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ja&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ja&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ja&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class R_ extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new te,Mu=new ke;let ab=0;class ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=u_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mu.fromBufferAttribute(this,t),Mu.applyMatrix3(e),this.setXY(t,Mu.x,Mu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),a=ei(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),a=ei(a,this.array),l=ei(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u_&&(e.usage=this.usage),e}}class w_ extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class C_ extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ki extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ob=0;const Xi=new Yt,tp=new In,po=new te,bi=new sa,Nl=new sa,Pn=new te;class or extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?C_:w_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new mt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,i){return Xi.makeTranslation(e,t,i),this.applyMatrix4(Xi),this}scale(e,t,i){return Xi.makeScale(e,t,i),this.applyMatrix4(Xi),this}lookAt(e){return tp.lookAt(e),tp.updateMatrix(),this.applyMatrix4(tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ki(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];bi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Nl.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(bi.min,Nl.min),bi.expandByPoint(Pn),Pn.addVectors(bi.max,Nl.max),bi.expandByPoint(Pn)):(bi.expandByPoint(Nl.min),bi.expandByPoint(Nl.max))}bi.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)Pn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(Pn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,p=f.count;d<p;d++)Pn.fromBufferAttribute(f,d),h&&(po.fromBufferAttribute(e,d),Pn.add(po)),a=Math.max(a,i.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let P=0;P<i.count;P++)f[P]=new te,h[P]=new te;const d=new te,p=new te,_=new te,x=new ke,v=new ke,E=new ke,S=new te,M=new te;function y(P,w,C){d.fromBufferAttribute(i,P),p.fromBufferAttribute(i,w),_.fromBufferAttribute(i,C),x.fromBufferAttribute(l,P),v.fromBufferAttribute(l,w),E.fromBufferAttribute(l,C),p.sub(d),_.sub(d),v.sub(x),E.sub(x);const B=1/(v.x*E.y-E.x*v.y);isFinite(B)&&(S.copy(p).multiplyScalar(E.y).addScaledVector(_,-v.y).multiplyScalar(B),M.copy(_).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(B),f[P].add(S),f[w].add(S),f[C].add(S),h[P].add(M),h[w].add(M),h[C].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let P=0,w=D.length;P<w;++P){const C=D[P],B=C.start,X=C.count;for(let W=B,G=B+X;W<G;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const R=new te,A=new te,L=new te,U=new te;function O(P){L.fromBufferAttribute(a,P),U.copy(L);const w=f[P];R.copy(w),R.sub(L.multiplyScalar(L.dot(w))).normalize(),A.crossVectors(U,w);const B=A.dot(h[P])<0?-1:1;c.setXYZW(P,R.x,R.y,R.z,B)}for(let P=0,w=D.length;P<w;++P){const C=D[P],B=C.start,X=C.count;for(let W=B,G=B+X;W<G;W+=3)O(e.getX(W+0)),O(e.getX(W+1)),O(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let x=0,v=i.count;x<v;x++)i.setXYZ(x,0,0,0);const a=new te,l=new te,c=new te,f=new te,h=new te,d=new te,p=new te,_=new te;if(e)for(let x=0,v=e.count;x<v;x+=3){const E=e.getX(x+0),S=e.getX(x+1),M=e.getX(x+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,S),c.fromBufferAttribute(t,M),p.subVectors(c,l),_.subVectors(a,l),p.cross(_),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),f.add(p),h.add(p),d.add(p),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,h.x,h.y,h.z),i.setXYZ(M,d.x,d.y,d.z)}else for(let x=0,v=t.count;x<v;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,l),_.subVectors(a,l),p.cross(_),i.setXYZ(x+0,p.x,p.y,p.z),i.setXYZ(x+1,p.x,p.y,p.z),i.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,h){const d=f.array,p=f.itemSize,_=f.normalized,x=new d.constructor(h.length*p);let v=0,E=0;for(let S=0,M=h.length;S<M;S++){f.isInterleavedBufferAttribute?v=h[S]*f.data.stride+f.offset:v=h[S]*p;for(let y=0;y<p;y++)x[E++]=d[v++]}return new ai(x,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,i=this.index.array,a=this.attributes;for(const f in a){const h=a[f],d=e(h,i);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let p=0,_=d.length;p<_;p++){const x=d[p],v=e(x,i);h.push(v)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,x=d.length;_<x;_++){const v=d[_];p.push(v.toJSON(e.data))}p.length>0&&(a[h]=p,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(t))}const l=e.morphAttributes;for(const d in l){const p=[],_=l[d];for(let x=0,v=_.length;x<v;x++)p.push(_[x].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new Yt,la=new Xd,Eu=new oo,L_=new te,Tu=new te,bu=new te,Au=new te,np=new te,Ru=new te,U_=new te,wu=new te;let nn=class extends In{constructor(e=new or,t=new R_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ru.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const p=f[h],_=l[h];p!==0&&(np.fromBufferAttribute(_,e),c?Ru.addScaledVector(np,p):Ru.addScaledVector(np.sub(t),p))}t.add(Ru)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eu.copy(i.boundingSphere),Eu.applyMatrix4(l),la.copy(e.ray).recast(e.near),!(Eu.containsPoint(la.origin)===!1&&(la.intersectSphere(Eu,L_)===null||la.origin.distanceToSquared(L_)>(e.far-e.near)**2))&&(D_.copy(l).invert(),la.copy(e.ray).applyMatrix4(D_),!(i.boundingBox!==null&&la.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,la)))}_computeIntersections(e,t,i){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,x=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,S=x.length;E<S;E++){const M=x[E],y=c[M.materialIndex],D=Math.max(M.start,v.start),R=Math.min(f.count,Math.min(M.start+M.count,v.start+v.count));for(let A=D,L=R;A<L;A+=3){const U=f.getX(A),O=f.getX(A+1),P=f.getX(A+2);a=Cu(this,y,e,i,d,p,_,U,O,P),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const E=Math.max(0,v.start),S=Math.min(f.count,v.start+v.count);for(let M=E,y=S;M<y;M+=3){const D=f.getX(M),R=f.getX(M+1),A=f.getX(M+2);a=Cu(this,c,e,i,d,p,_,D,R,A),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,S=x.length;E<S;E++){const M=x[E],y=c[M.materialIndex],D=Math.max(M.start,v.start),R=Math.min(h.count,Math.min(M.start+M.count,v.start+v.count));for(let A=D,L=R;A<L;A+=3){const U=A,O=A+1,P=A+2;a=Cu(this,y,e,i,d,p,_,U,O,P),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const E=Math.max(0,v.start),S=Math.min(h.count,v.start+v.count);for(let M=E,y=S;M<y;M+=3){const D=M,R=M+1,A=M+2;a=Cu(this,c,e,i,d,p,_,D,R,A),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}}};function lb(r,e,t,i,a,l,c,f){let h;if(e.side===wn?h=i.intersectTriangle(c,l,a,!0,f):h=i.intersectTriangle(a,l,c,e.side===Dr,f),h===null)return null;wu.copy(f),wu.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(wu);return d<t.near||d>t.far?null:{distance:d,point:wu.clone(),object:r}}function Cu(r,e,t,i,a,l,c,f,h,d){r.getVertexPosition(f,Tu),r.getVertexPosition(h,bu),r.getVertexPosition(d,Au);const p=lb(r,e,t,i,Tu,bu,Au,U_);if(p){const _=new te;Ol.getBarycoord(U_,Tu,bu,Au,_),a&&(p.uv=Ol.getInterpolatedAttribute(a,f,h,d,_,new ke)),l&&(p.uv1=Ol.getInterpolatedAttribute(l,f,h,d,_,new ke)),c&&(p.normal=Ol.getInterpolatedAttribute(c,f,h,d,_,new te),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const x={a:f,b:h,c:d,normal:new te,materialIndex:0};Ol.getNormal(Tu,bu,Au,x.normal),p.face=x,p.barycoord=_}return p}class mo extends or{constructor(e=1,t=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],p=[],_=[];let x=0,v=0;E("z","y","x",-1,-1,i,t,e,c,l,0),E("z","y","x",1,-1,i,t,-e,c,l,1),E("x","z","y",1,1,e,i,t,a,c,2),E("x","z","y",1,-1,e,i,-t,a,c,3),E("x","y","z",1,-1,e,t,i,a,l,4),E("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(h),this.setAttribute("position",new ki(d,3)),this.setAttribute("normal",new ki(p,3)),this.setAttribute("uv",new ki(_,2));function E(S,M,y,D,R,A,L,U,O,P,w){const C=A/O,B=L/P,X=A/2,W=L/2,G=U/2,Z=O+1,F=P+1;let k=0,V=0;const fe=new te;for(let _e=0;_e<F;_e++){const I=_e*B-W;for(let Y=0;Y<Z;Y++){const se=Y*C-X;fe[S]=se*D,fe[M]=I*R,fe[y]=G,d.push(fe.x,fe.y,fe.z),fe[S]=0,fe[M]=0,fe[y]=U>0?1:-1,p.push(fe.x,fe.y,fe.z),_.push(Y/O),_.push(1-_e/P),k+=1}}for(let _e=0;_e<P;_e++)for(let I=0;I<O;I++){const Y=x+I+Z*_e,se=x+I+Z*(_e+1),me=x+(I+1)+Z*(_e+1),Q=x+(I+1)+Z*_e;h.push(Y,se,Q),h.push(se,me,Q),V+=6}f.addGroup(v,V,w),v+=V,x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function ti(r){const e={};for(let t=0;t<r.length;t++){const i=go(r[t]);for(const a in i)e[a]=i[a]}return e}function cb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function O_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const ub={clone:go,merge:ti};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Du extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=mr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new te,N_=new ke,P_=new ke;class li extends Du{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,N_,P_),t.subVectors(P_,N_)}setViewOffset(e,t,i,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*i/d,a*=c.width/h,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _o=-90,vo=1;class db extends In{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new li(_o,vo,e,t);a.layers=this.layers,this.add(a);const l=new li(_o,vo,e,t);l.layers=this.layers,this.add(l);const c=new li(_o,vo,e,t);c.layers=this.layers,this.add(c);const f=new li(_o,vo,e,t);f.layers=this.layers,this.add(f);const h=new li(_o,vo,e,t);h.layers=this.layers,this.add(h);const d=new li(_o,vo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,c,f,h]=t;for(const d of t)this.remove(d);if(e===mr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,p]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,l),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,f),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(_,x,v),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class F_ extends Nn{constructor(e=[],t=qa,i,a,l,c,f,h,d,p){super(e,t,i,a,l,c,f,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pb extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new F_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new mo(5,5,5),l=new oi({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:dr});l.uniforms.tEquirect.value=t;const c=new nn(a,l),f=t.minFilter;return t.minFilter===ia&&(t.minFilter=yn),new db(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(l)}}class Lu extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const S of e.hand.values()){const M=t.getJointPose(S,i),y=this._getHandJoint(d,S);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=p.position.distanceTo(_.position),v=.02,E=.005;d.inputState.pinching&&x>v+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=v-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _s extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class z_ extends Nn{constructor(e=null,t=1,i=1,a,l,c,f,h,d=Mi,p=Mi,_,x){super(null,c,f,h,d,p,a,l,_,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B_ extends ai{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xo=new Yt,I_=new Yt,Uu=[],H_=new sa,gb=new Yt,Pl=new nn,Fl=new oo;class G_ extends nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new B_(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,gb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),H_.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(H_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),Fl.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Fl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=i.length+1,c=e*l+1;for(let f=0;f<i.length;f++)i[f]=a[c+f]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Pl.geometry=this.geometry,Pl.material=this.material,Pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(i),e.ray.intersectsSphere(Fl)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,xo),I_.multiplyMatrices(i,xo),Pl.matrixWorld=I_,Pl.raycast(e,Uu);for(let c=0,f=Uu.length;c<f;c++){const h=Uu[c];h.instanceId=l,h.object=this,t.push(h)}Uu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new B_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new z_(new Float32Array(a*this.count),a,this.count,ed,Gi));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const f=this.geometry.morphTargetsRelative?1:1-c,h=a*e;l[h]=f,l.set(i,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rp=new te,_b=new te,vb=new mt;class vs{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=rp.subVectors(i,t).cross(_b.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rp),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vb.getNormalMatrix(e),a=this.coplanarPoint(rp).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ca=new oo,xb=new ke(.5,.5),Ou=new te;class sp{constructor(e=new vs,t=new vs,i=new vs,a=new vs,l=new vs,c=new vs){this.planes=[e,t,i,a,l,c]}set(e,t,i,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mr,i=!1){const a=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],d=l[3],p=l[4],_=l[5],x=l[6],v=l[7],E=l[8],S=l[9],M=l[10],y=l[11],D=l[12],R=l[13],A=l[14],L=l[15];if(a[0].setComponents(d-c,v-p,y-E,L-D).normalize(),a[1].setComponents(d+c,v+p,y+E,L+D).normalize(),a[2].setComponents(d+f,v+_,y+S,L+R).normalize(),a[3].setComponents(d-f,v-_,y-S,L-R).normalize(),i)a[4].setComponents(h,x,M,A).normalize(),a[5].setComponents(d-h,v-x,y-M,L-A).normalize();else if(a[4].setComponents(d-h,v-x,y-M,L-A).normalize(),t===mr)a[5].setComponents(d+h,v+x,y+M,L+A).normalize();else if(t===hu)a[5].setComponents(h,x,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ca.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ca.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ca)}intersectsSprite(e){ca.center.set(0,0,0);const t=xb.distanceTo(e.center);return ca.radius=.7071067811865476+t,ca.applyMatrix4(e.matrixWorld),this.intersectsSphere(ca)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ou.x=a.normal.x>0?e.max.x:e.min.x,Ou.y=a.normal.y>0?e.max.y:e.min.y,Ou.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yb extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nu=new te,Pu=new te,V_=new Yt,zl=new Xd,Fu=new oo,ap=new te,k_=new te;class Sb extends In{constructor(e=new or,t=new yb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,l=t.count;a<l;a++)Nu.fromBufferAttribute(t,a-1),Pu.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Nu.distanceTo(Pu);e.setAttribute("lineDistance",new ki(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fu.copy(i.boundingSphere),Fu.applyMatrix4(a),Fu.radius+=l,e.ray.intersectsSphere(Fu)===!1)return;V_.copy(a).invert(),zl.copy(e.ray).applyMatrix4(V_);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,p=i.index,x=i.attributes.position;if(p!==null){const v=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let S=v,M=E-1;S<M;S+=d){const y=p.getX(S),D=p.getX(S+1),R=zu(this,e,zl,h,y,D,S);R&&t.push(R)}if(this.isLineLoop){const S=p.getX(E-1),M=p.getX(v),y=zu(this,e,zl,h,S,M,E-1);y&&t.push(y)}}else{const v=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let S=v,M=E-1;S<M;S+=d){const y=zu(this,e,zl,h,S,S+1,S);y&&t.push(y)}if(this.isLineLoop){const S=zu(this,e,zl,h,E-1,v,E-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function zu(r,e,t,i,a,l,c){const f=r.geometry.attributes.position;if(Nu.fromBufferAttribute(f,a),Pu.fromBufferAttribute(f,l),t.distanceSqToSegment(Nu,Pu,ap,k_)>i)return;ap.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(ap);if(!(d<e.near||d>e.far))return{distance:d,point:k_.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const X_=new te,W_=new te;class Mb extends Sb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,l=t.count;a<l;a+=2)X_.fromBufferAttribute(t,a),W_.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+X_.distanceTo(W_);e.setAttribute("lineDistance",new ki(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class op extends Nn{constructor(e,t,i=ra,a,l,c,f=Mi,h=Mi,d,p=Tl,_=1){if(p!==Tl&&p!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,a,l,c,f,h,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ir extends or{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(i),h=Math.floor(a),d=f+1,p=h+1,_=e/f,x=t/h,v=[],E=[],S=[],M=[];for(let y=0;y<p;y++){const D=y*x-c;for(let R=0;R<d;R++){const A=R*_-l;E.push(A,-D,0),S.push(0,0,1),M.push(R/f),M.push(1-y/h)}}for(let y=0;y<h;y++)for(let D=0;D<f;D++){const R=D+d*y,A=D+d*(y+1),L=D+1+d*(y+1),U=D+1+d*y;v.push(R,A,U),v.push(A,L,U)}this.setIndex(v),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(S,3)),this.setAttribute("uv",new ki(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class lp extends or{constructor(e=1,t=32,i=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+f,Math.PI);let d=0;const p=[],_=new te,x=new te,v=[],E=[],S=[],M=[];for(let y=0;y<=i;y++){const D=[],R=y/i;let A=0;y===0&&c===0?A=.5/t:y===i&&h===Math.PI&&(A=-.5/t);for(let L=0;L<=t;L++){const U=L/t;_.x=-e*Math.cos(a+U*l)*Math.sin(c+R*f),_.y=e*Math.cos(c+R*f),_.z=e*Math.sin(a+U*l)*Math.sin(c+R*f),E.push(_.x,_.y,_.z),x.copy(_).normalize(),S.push(x.x,x.y,x.z),M.push(U+A,1-R),D.push(d++)}p.push(D)}for(let y=0;y<i;y++)for(let D=0;D<t;D++){const R=p[y][D+1],A=p[y][D],L=p[y+1][D],U=p[y+1][D+1];(y!==0||c>0)&&v.push(R,A,U),(y!==i-1||h<Math.PI)&&v.push(A,L,U)}this.setIndex(v),this.setAttribute("position",new ki(E,3)),this.setAttribute("normal",new ki(S,3)),this.setAttribute("uv",new ki(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bu extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cp extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eb extends cp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tb extends Br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bb extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ab extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Y_ extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const up=new Yt,q_=new te,j_=new te;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;q_.setFromMatrixPosition(e.matrixWorld),t.position.copy(q_),j_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(j_),t.updateMatrixWorld(),up.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(up)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Z_=new Yt,Bl=new te,fp=new te;class wb extends Rb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new te(1,0,0),new te(-1,0,0),new te(0,0,1),new te(0,0,-1),new te(0,1,0),new te(0,-1,0)],this._cubeUps=[new te(0,1,0),new te(0,1,0),new te(0,1,0),new te(0,1,0),new te(0,0,1),new te(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),Bl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bl),fp.copy(i.position),fp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fp),i.updateMatrixWorld(),a.makeTranslation(-Bl.x,-Bl.y,-Bl.z),Z_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z_,i.coordinateSystem,i.reversedDepth)}}class K_ extends Y_{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new wb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iu extends Du{constructor(e=-1,t=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=p*this.view.offsetY,h=f-p*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cb extends Y_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class dn{constructor(e){this.value=e}clone(){return new dn(this.value.clone===void 0?this.value:this.value.clone())}}const Q_=new Yt;class Lb{constructor(e,t,i=0,a=1/0){this.ray=new Xd(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Wd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Q_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q_),this}intersectObject(e,t=!0,i=[]){return dp(e,this,i,t),i.sort(J_),i}intersectObjects(e,t=!0,i=[]){for(let a=0,l=e.length;a<l;a++)dp(e[a],this,i,t);return i.sort(J_),i}}function J_(r,e){return r.distance-e.distance}function dp(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const l=r.children;for(let c=0,f=l.length;c<f;c++)dp(l[c],e,t,!0)}}let Ub=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ob.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ob(){this._document.hidden===!1&&this.reset()}function $_(r,e,t,i){const a=Nb(i);switch(t){case r_:return r*e;case ed:return r*e/a.components*a.byteLength;case td:return r*e/a.components*a.byteLength;case a_:return r*e*2/a.components*a.byteLength;case nd:return r*e*2/a.components*a.byteLength;case s_:return r*e*3/a.components*a.byteLength;case Vi:return r*e*4/a.components*a.byteLength;case id:return r*e*4/a.components*a.byteLength;case au:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sd:case od:return Math.max(r,16)*Math.max(e,8)/4;case rd:case ad:return Math.max(r,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case uu:case bd:case Ad:return Math.ceil(r/4)*Math.ceil(e/4)*16;case o_:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wd:case Cd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nb(r){switch(r){case si:case t_:return{byteLength:1,components:1};case El:case n_:case Za:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case ra:case Qh:case Gi:return{byteLength:4,components:1};case i_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);function ev(){let r=null,e=!1,t=null,i=null;function a(l,c){t(l,c),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Pb(r){const e=new WeakMap;function t(f,h){const d=f.array,p=f.usage,_=d.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,d,p),f.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=r.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,h,d){const p=h.array,_=h.updateRanges;if(r.bindBuffer(d,f),_.length===0)r.bufferSubData(d,0,p);else{_.sort((v,E)=>v.start-E.start);let x=0;for(let v=1;v<_.length;v++){const E=_[x],S=_[v];S.start<=E.start+E.count+1?E.count=Math.max(E.count,S.start+S.count-E.start):(++x,_[x]=S)}_.length=x+1;for(let v=0,E=_.length;v<E;v++){const S=_[v];r.bufferSubData(d,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const p=e.get(f);(!p||p.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,h),d.version=f.version}}return{get:a,remove:l,update:c}}var Fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
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
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
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
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zb=`#ifdef USE_IRIDESCENCE
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sA=`#define PI 3.141592653589793
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
} // validated`,aA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oA=`vec3 transformedNormal = objectNormal;
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
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hA="gl_FragColor = linearToOutputTexel( gl_FragColor );",dA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,gA=`#ifdef USE_ENVMAP
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
#endif`,_A=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EA=`#ifdef USE_GRADIENTMAP
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
}`,TA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RA=`uniform bool receiveShadow;
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
#endif`,wA=`#ifdef USE_ENVMAP
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
#endif`,CA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OA=`PhysicalMaterial material;
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
#endif`,NA=`struct PhysicalMaterial {
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
}`,PA=`
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
#endif`,FA=`#if defined( RE_IndirectDiffuse )
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
#endif`,zA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WA=`#if defined( USE_POINTS_UV )
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
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`#ifdef USE_MORPHTARGETS
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
#endif`,JA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r2=`#ifdef USE_NORMALMAP
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
#endif`,s2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y2=`float getShadowMask() {
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
}`,S2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M2=`#ifdef USE_SKINNING
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
#endif`,E2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T2=`#ifdef USE_SKINNING
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
#endif`,b2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C2=`#ifdef USE_TRANSMISSION
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
#endif`,D2=`#ifdef USE_TRANSMISSION
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gt={alphahash_fragment:Fb,alphahash_pars_fragment:zb,alphamap_fragment:Bb,alphamap_pars_fragment:Ib,alphatest_fragment:Hb,alphatest_pars_fragment:Gb,aomap_fragment:Vb,aomap_pars_fragment:kb,batching_pars_vertex:Xb,batching_vertex:Wb,begin_vertex:Yb,beginnormal_vertex:qb,bsdfs:jb,iridescence_fragment:Zb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:eA,color_fragment:tA,color_pars_fragment:nA,color_pars_vertex:iA,color_vertex:rA,common:sA,cube_uv_reflection_fragment:aA,defaultnormal_vertex:oA,displacementmap_pars_vertex:lA,displacementmap_vertex:cA,emissivemap_fragment:uA,emissivemap_pars_fragment:fA,colorspace_fragment:hA,colorspace_pars_fragment:dA,envmap_fragment:pA,envmap_common_pars_fragment:mA,envmap_pars_fragment:gA,envmap_pars_vertex:_A,envmap_physical_pars_fragment:wA,envmap_vertex:vA,fog_vertex:xA,fog_pars_vertex:yA,fog_fragment:SA,fog_pars_fragment:MA,gradientmap_pars_fragment:EA,lightmap_pars_fragment:TA,lights_lambert_fragment:bA,lights_lambert_pars_fragment:AA,lights_pars_begin:RA,lights_toon_fragment:CA,lights_toon_pars_fragment:DA,lights_phong_fragment:LA,lights_phong_pars_fragment:UA,lights_physical_fragment:OA,lights_physical_pars_fragment:NA,lights_fragment_begin:PA,lights_fragment_maps:FA,lights_fragment_end:zA,logdepthbuf_fragment:BA,logdepthbuf_pars_fragment:IA,logdepthbuf_pars_vertex:HA,logdepthbuf_vertex:GA,map_fragment:VA,map_pars_fragment:kA,map_particle_fragment:XA,map_particle_pars_fragment:WA,metalnessmap_fragment:YA,metalnessmap_pars_fragment:qA,morphinstance_vertex:jA,morphcolor_vertex:ZA,morphnormal_vertex:KA,morphtarget_pars_vertex:QA,morphtarget_vertex:JA,normal_fragment_begin:$A,normal_fragment_maps:e2,normal_pars_fragment:t2,normal_pars_vertex:n2,normal_vertex:i2,normalmap_pars_fragment:r2,clearcoat_normal_fragment_begin:s2,clearcoat_normal_fragment_maps:a2,clearcoat_pars_fragment:o2,iridescence_pars_fragment:l2,opaque_fragment:c2,packing:u2,premultiplied_alpha_fragment:f2,project_vertex:h2,dithering_fragment:d2,dithering_pars_fragment:p2,roughnessmap_fragment:m2,roughnessmap_pars_fragment:g2,shadowmap_pars_fragment:_2,shadowmap_pars_vertex:v2,shadowmap_vertex:x2,shadowmask_pars_fragment:y2,skinbase_vertex:S2,skinning_pars_vertex:M2,skinning_vertex:E2,skinnormal_vertex:T2,specularmap_fragment:b2,specularmap_pars_fragment:A2,tonemapping_fragment:R2,tonemapping_pars_fragment:w2,transmission_fragment:C2,transmission_pars_fragment:D2,uv_pars_fragment:L2,uv_pars_vertex:U2,uv_vertex:O2,worldpos_vertex:N2,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},gr={basic:{uniforms:ti([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ti([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ti([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ti([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ti([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ti([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ti([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ti([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ti([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ti([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ti([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:ti([Fe.common,Fe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:ti([Fe.lights,Fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};gr.physical={uniforms:ti([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Hu={r:0,b:0,g:0},ua=new Nr,P2=new Yt;function F2(r,e,t,i,a,l,c){const f=new ft(0);let h=l===!0?0:1,d,p,_=null,x=0,v=null;function E(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function S(R){let A=!1;const L=E(R);L===null?y(f,h):L&&L.isColor&&(y(L,1),A=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(R,A){const L=E(A);L&&(L.isCubeTexture||L.mapping===ru)?(p===void 0&&(p=new nn(new mo(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:go(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,O,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),ua.copy(A.backgroundRotation),ua.x*=-1,ua.y*=-1,ua.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ua.y*=-1,ua.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(P2.makeRotationFromEuler(ua)),p.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Vt,(_!==L||x!==L.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,_=L,x=L.version,v=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new nn(new Ir(2,2),new oi({name:"BackgroundMaterial",uniforms:go(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||x!==L.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,_=L,x=L.version,v=r.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,A){R.getRGB(Hu,O_(r)),i.buffers.color.setClear(Hu.r,Hu.g,Hu.b,A,c)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,A=1){f.set(R),h=A,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(f,h)},render:S,addToRenderList:M,dispose:D}}function z2(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=x(null);let l=a,c=!1;function f(C,B,X,W,G){let Z=!1;const F=_(W,X,B);l!==F&&(l=F,d(l.object)),Z=v(C,W,X,G),Z&&E(C,W,X,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,A(C,B,X,W),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return r.createVertexArray()}function d(C){return r.bindVertexArray(C)}function p(C){return r.deleteVertexArray(C)}function _(C,B,X){const W=X.wireframe===!0;let G=i[C.id];G===void 0&&(G={},i[C.id]=G);let Z=G[B.id];Z===void 0&&(Z={},G[B.id]=Z);let F=Z[W];return F===void 0&&(F=x(h()),Z[W]=F),F}function x(C){const B=[],X=[],W=[];for(let G=0;G<t;G++)B[G]=0,X[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:W,object:C,attributes:{},index:null}}function v(C,B,X,W){const G=l.attributes,Z=B.attributes;let F=0;const k=X.getAttributes();for(const V in k)if(k[V].location>=0){const _e=G[V];let I=Z[V];if(I===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),_e===void 0||_e.attribute!==I||I&&_e.data!==I.data)return!0;F++}return l.attributesNum!==F||l.index!==W}function E(C,B,X,W){const G={},Z=B.attributes;let F=0;const k=X.getAttributes();for(const V in k)if(k[V].location>=0){let _e=Z[V];_e===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor));const I={};I.attribute=_e,_e&&_e.data&&(I.data=_e.data),G[V]=I,F++}l.attributes=G,l.attributesNum=F,l.index=W}function S(){const C=l.newAttributes;for(let B=0,X=C.length;B<X;B++)C[B]=0}function M(C){y(C,0)}function y(C,B){const X=l.newAttributes,W=l.enabledAttributes,G=l.attributeDivisors;X[C]=1,W[C]===0&&(r.enableVertexAttribArray(C),W[C]=1),G[C]!==B&&(r.vertexAttribDivisor(C,B),G[C]=B)}function D(){const C=l.newAttributes,B=l.enabledAttributes;for(let X=0,W=B.length;X<W;X++)B[X]!==C[X]&&(r.disableVertexAttribArray(X),B[X]=0)}function R(C,B,X,W,G,Z,F){F===!0?r.vertexAttribIPointer(C,B,X,G,Z):r.vertexAttribPointer(C,B,X,W,G,Z)}function A(C,B,X,W){S();const G=W.attributes,Z=X.getAttributes(),F=B.defaultAttributeValues;for(const k in Z){const V=Z[k];if(V.location>=0){let fe=G[k];if(fe===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const _e=fe.normalized,I=fe.itemSize,Y=e.get(fe);if(Y===void 0)continue;const se=Y.buffer,me=Y.type,Q=Y.bytesPerElement,ce=me===r.INT||me===r.UNSIGNED_INT||fe.gpuType===Qh;if(fe.isInterleavedBufferAttribute){const le=fe.data,Se=le.stride,Te=fe.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)y(V.location+De,le.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<V.locationSize;De++)M(V.location+De);r.bindBuffer(r.ARRAY_BUFFER,se);for(let De=0;De<V.locationSize;De++)R(V.location+De,I/V.locationSize,me,_e,Se*Q,(Te+I/V.locationSize*De)*Q,ce)}else{if(fe.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)y(V.location+le,fe.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let le=0;le<V.locationSize;le++)M(V.location+le);r.bindBuffer(r.ARRAY_BUFFER,se);for(let le=0;le<V.locationSize;le++)R(V.location+le,I/V.locationSize,me,_e,I*Q,I/V.locationSize*le*Q,ce)}}else if(F!==void 0){const _e=F[k];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(V.location,_e);break;case 3:r.vertexAttrib3fv(V.location,_e);break;case 4:r.vertexAttrib4fv(V.location,_e);break;default:r.vertexAttrib1fv(V.location,_e)}}}}D()}function L(){P();for(const C in i){const B=i[C];for(const X in B){const W=B[X];for(const G in W)p(W[G].object),delete W[G];delete B[X]}delete i[C]}}function U(C){if(i[C.id]===void 0)return;const B=i[C.id];for(const X in B){const W=B[X];for(const G in W)p(W[G].object),delete W[G];delete B[X]}delete i[C.id]}function O(C){for(const B in i){const X=i[B];if(X[C.id]===void 0)continue;const W=X[C.id];for(const G in W)p(W[G].object),delete W[G];delete X[C.id]}}function P(){w(),c=!0,l!==a&&(l=a,d(l.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:M,disableUnusedAttributes:D}}function B2(r,e,t){let i;function a(d){i=d}function l(d,p){r.drawArrays(i,d,p),t.update(p,i,1)}function c(d,p,_){_!==0&&(r.drawArraysInstanced(i,d,p,_),t.update(p,i,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,_);let v=0;for(let E=0;E<_;E++)v+=p[E];t.update(v,i,1)}function h(d,p,_,x){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<d.length;E++)c(d[E],p[E],x[E]);else{v.multiDrawArraysInstancedWEBGL(i,d,0,p,0,x,0,_);let E=0;for(let S=0;S<_;S++)E+=p[S]*x[S];t.update(E,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function I2(r,e,t,i){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==Vi&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const P=O===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==si&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!P)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:v,maxVertexTextures:E,maxTextureSize:S,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:L,maxSamples:U}}function H2(r){const e=this;let t=null,i=0,a=!1,l=!1;const c=new vs,f=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const v=_.length!==0||x||i!==0||a;return a=x,i=_.length,v},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=p(_,x,0)},this.setState=function(_,x,v){const E=_.clippingPlanes,S=_.clipIntersection,M=_.clipShadows,y=r.get(_);if(!a||E===null||E.length===0||l&&!M)l?p(null):d();else{const D=l?0:i,R=D*4;let A=y.clippingState||null;h.value=A,A=p(E,x,R,v);for(let L=0;L!==R;++L)A[L]=t[L];y.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=D}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,x,v,E){const S=_!==null?_.length:0;let M=null;if(S!==0){if(M=h.value,E!==!0||M===null){const y=v+S*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let R=0,A=v;R!==S;++R,A+=4)c.copy(_[R]).applyMatrix4(D,f),c.normal.toArray(M,A),M[A+3]=c.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,M}}function G2(r){let e=new WeakMap;function t(c,f){return f===Yh?c.mapping=qa:f===qh&&(c.mapping=ja),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===Yh||f===qh)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new pb(h.height);return d.fromEquirectangularTexture(r,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const yo=4,tv=[.125,.215,.35,.446,.526,.582],fa=20,pp=new Iu,nv=new ft;let mp=null,gp=0,_p=0,vp=!1;const ha=(1+Math.sqrt(5))/2,So=1/ha,iv=[new te(-ha,So,0),new te(ha,So,0),new te(-So,0,ha),new te(So,0,ha),new te(0,ha,-So),new te(0,ha,So),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],V2=new te;class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,l={}){const{size:c=256,position:f=V2}=l;mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mp,gp,_p),this._renderer.xr.enabled=vp,e.scissorTest=!1,Gu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qa||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Za,format:Vi,colorSpace:cs,depthBuffer:!1},a=rv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k2(l)),this._blurMaterial=X2(l,e,t)}return a}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,pp)}_sceneToCubeUV(e,t,i,a,l){const h=new li(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(nv),_.toneMapping=ls,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const S=new R_({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),M=new nn(new mo,S);let y=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,y=!0):(S.color.copy(nv),y=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+p[R],l.y,l.z)):A===1?(h.up.set(0,0,d[R]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+p[R],l.z)):(h.up.set(0,d[R],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+p[R]));const L=this._cubeSize;Gu(a,A*L,R>2?L:0,L,L),_.setRenderTarget(a),y&&_.render(M,h),_.render(e,h)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=D}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===qa||e.mapping===ja;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new nn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Gu(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,pp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=iv[(a-l-1)%iv.length];this._blur(e,l-1,l,c,f)}t.autoClear=i}_blur(e,t,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",l),this._halfBlur(c,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new nn(this._lodPlanes[a],d),x=d.uniforms,v=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*fa-1),S=l/E,M=isFinite(l)?1+Math.floor(p*S):fa;M>fa&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${fa}`);const y=[];let D=0;for(let O=0;O<fa;++O){const P=O/S,w=Math.exp(-P*P/2);y.push(w),O===0?D+=w:O<M&&(D+=2*w)}for(let O=0;O<y.length;O++)y[O]=y[O]/D;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=E,x.mipInt.value=R-i;const A=this._sizeLods[a],L=3*A*(a>R-yo?a-R+yo:0),U=4*(this._cubeSize-A);Gu(t,L,U,3*A,2*A),h.setRenderTarget(t),h.render(_,pp)}}function k2(r){const e=[],t=[],i=[];let a=r;const l=r-yo+1+tv.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-yo?h=tv[c-r+yo-1]:c===0&&(h=0),i.push(h);const d=1/(f-2),p=-d,_=1+d,x=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,E=6,S=3,M=2,y=1,D=new Float32Array(S*E*v),R=new Float32Array(M*E*v),A=new Float32Array(y*E*v);for(let U=0;U<v;U++){const O=U%3*2/3-1,P=U>2?0:-1,w=[O,P,0,O+2/3,P,0,O+2/3,P+1,0,O,P,0,O+2/3,P+1,0,O,P+1,0];D.set(w,S*E*U),R.set(x,M*E*U);const C=[U,U,U,U,U,U];A.set(C,y*E*U)}const L=new or;L.setAttribute("position",new ai(D,S)),L.setAttribute("uv",new ai(R,M)),L.setAttribute("faceIndex",new ai(A,y)),e.push(L),a>yo&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rv(r,e,t){const i=new Ei(r,e,t);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gu(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function X2(r,e,t){const i=new Float32Array(fa),a=new te(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:fa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yp(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function sv(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function av(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function yp(){return`

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
	`}function W2(r){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const h=f.mapping,d=h===Yh||h===qh,p=h===qa||h===ja;if(d||p){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new xp(r)),_=d?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const v=f.image;return d&&v&&v.height>0||p&&v&&a(v)?(t===null&&(t=new xp(r)),_=d?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const d=6;for(let p=0;p<d;p++)f[p]!==void 0&&h++;return h===d}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Y2(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&to("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function q2(r,e,t,i){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete a[x.id];const v=l.get(x);v&&(e.remove(v),l.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const v in x)e.update(x[v],r.ARRAY_BUFFER)}function d(_){const x=[],v=_.index,E=_.attributes.position;let S=0;if(v!==null){const D=v.array;S=v.version;for(let R=0,A=D.length;R<A;R+=3){const L=D[R+0],U=D[R+1],O=D[R+2];x.push(L,U,U,O,O,L)}}else if(E!==void 0){const D=E.array;S=E.version;for(let R=0,A=D.length/3-1;R<A;R+=3){const L=R+0,U=R+1,O=R+2;x.push(L,U,U,O,O,L)}}else return;const M=new(d_(x)?C_:w_)(x,1);M.version=S;const y=l.get(_);y&&e.remove(y),l.set(_,M)}function p(_){const x=l.get(_);if(x){const v=_.index;v!==null&&x.version<v.version&&d(_)}else d(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:p}}function j2(r,e,t){let i;function a(x){i=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,v){r.drawElements(i,v,l,x*c),t.update(v,i,1)}function d(x,v,E){E!==0&&(r.drawElementsInstanced(i,v,l,x*c,E),t.update(v,i,E))}function p(x,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,l,x,0,E);let M=0;for(let y=0;y<E;y++)M+=v[y];t.update(M,i,1)}function _(x,v,E,S){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<x.length;y++)d(x[y]/c,v[y],S[y]);else{M.multiDrawElementsInstancedWEBGL(i,v,0,l,x,0,S,0,E);let y=0;for(let D=0;D<E;D++)y+=v[D]*S[D];t.update(y,i,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function Z2(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function K2(r,e,t){const i=new WeakMap,a=new Bt;function l(c,f,h){const d=c.morphTargetInfluences,p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=p!==void 0?p.length:0;let x=i.get(f);if(x===void 0||x.count!==_){let w=function(){O.dispose(),i.delete(f),f.removeEventListener("dispose",w)};x!==void 0&&x.texture.dispose();const v=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;v===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let A=f.attributes.position.count*R,L=1;A>e.maxTextureSize&&(L=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const U=new Float32Array(A*L*4*_),O=new __(U,A,L,_);O.type=Gi,O.needsUpdate=!0;const P=R*4;for(let C=0;C<_;C++){const B=M[C],X=y[C],W=D[C],G=A*L*4*C;for(let Z=0;Z<B.count;Z++){const F=Z*P;v===!0&&(a.fromBufferAttribute(B,Z),U[G+F+0]=a.x,U[G+F+1]=a.y,U[G+F+2]=a.z,U[G+F+3]=0),E===!0&&(a.fromBufferAttribute(X,Z),U[G+F+4]=a.x,U[G+F+5]=a.y,U[G+F+6]=a.z,U[G+F+7]=0),S===!0&&(a.fromBufferAttribute(W,Z),U[G+F+8]=a.x,U[G+F+9]=a.y,U[G+F+10]=a.z,U[G+F+11]=W.itemSize===4?a.w:1)}}x={count:_,texture:O,size:new ke(A,L)},i.set(f,x),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let v=0;for(let S=0;S<d.length;S++)v+=d[S];const E=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function Q2(r,e,t,i){let a=new WeakMap;function l(h){const d=i.render.frame,p=h.geometry,_=e.get(h,p);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==d&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==d&&(x.update(),a.set(x,d))}return _}function c(){a=new WeakMap}function f(h){const d=h.target;d.removeEventListener("dispose",f),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const ov=new Nn,lv=new op(1,1),cv=new __,uv=new QT,fv=new F_,hv=[],dv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function Mo(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let l=hv[a];if(l===void 0&&(l=new Float32Array(a),hv[a]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Cn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Dn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Vu(r,e){let t=dv[e];t===void 0&&(t=new Int32Array(e),dv[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function J2(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;r.uniform2fv(this.addr,e),Dn(t,e)}}function eR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;r.uniform3fv(this.addr,e),Dn(t,e)}}function tR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;r.uniform4fv(this.addr,e),Dn(t,e)}}function nR(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Cn(t,i))return;gv.set(i),r.uniformMatrix2fv(this.addr,!1,gv),Dn(t,i)}}function iR(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Cn(t,i))return;mv.set(i),r.uniformMatrix3fv(this.addr,!1,mv),Dn(t,i)}}function rR(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Cn(t,i))return;pv.set(i),r.uniformMatrix4fv(this.addr,!1,pv),Dn(t,i)}}function sR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function aR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;r.uniform2iv(this.addr,e),Dn(t,e)}}function oR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;r.uniform3iv(this.addr,e),Dn(t,e)}}function lR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;r.uniform4iv(this.addr,e),Dn(t,e)}}function cR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function uR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;r.uniform2uiv(this.addr,e),Dn(t,e)}}function fR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;r.uniform3uiv(this.addr,e),Dn(t,e)}}function hR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;r.uniform4uiv(this.addr,e),Dn(t,e)}}function dR(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(lv.compareFunction=c_,l=lv):l=ov,t.setTexture2D(e||l,a)}function pR(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||uv,a)}function mR(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||fv,a)}function gR(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||cv,a)}function _R(r){switch(r){case 5126:return J2;case 35664:return $2;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return aR;case 35668:case 35672:return oR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return fR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}function vR(r,e){r.uniform1fv(this.addr,e)}function xR(r,e){const t=Mo(e,this.size,2);r.uniform2fv(this.addr,t)}function yR(r,e){const t=Mo(e,this.size,3);r.uniform3fv(this.addr,t)}function SR(r,e){const t=Mo(e,this.size,4);r.uniform4fv(this.addr,t)}function MR(r,e){const t=Mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ER(r,e){const t=Mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function TR(r,e){const t=Mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bR(r,e){r.uniform1iv(this.addr,e)}function AR(r,e){r.uniform2iv(this.addr,e)}function RR(r,e){r.uniform3iv(this.addr,e)}function wR(r,e){r.uniform4iv(this.addr,e)}function CR(r,e){r.uniform1uiv(this.addr,e)}function DR(r,e){r.uniform2uiv(this.addr,e)}function LR(r,e){r.uniform3uiv(this.addr,e)}function UR(r,e){r.uniform4uiv(this.addr,e)}function OR(r,e,t){const i=this.cache,a=e.length,l=Vu(t,a);Cn(i,l)||(r.uniform1iv(this.addr,l),Dn(i,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||ov,l[c])}function NR(r,e,t){const i=this.cache,a=e.length,l=Vu(t,a);Cn(i,l)||(r.uniform1iv(this.addr,l),Dn(i,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||uv,l[c])}function PR(r,e,t){const i=this.cache,a=e.length,l=Vu(t,a);Cn(i,l)||(r.uniform1iv(this.addr,l),Dn(i,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||fv,l[c])}function FR(r,e,t){const i=this.cache,a=e.length,l=Vu(t,a);Cn(i,l)||(r.uniform1iv(this.addr,l),Dn(i,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||cv,l[c])}function zR(r){switch(r){case 5126:return vR;case 35664:return xR;case 35665:return yR;case 35666:return SR;case 35674:return MR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return bR;case 35667:case 35671:return AR;case 35668:case 35672:return RR;case 35669:case 35673:return wR;case 5125:return CR;case 36294:return DR;case 36295:return LR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return FR}}class BR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_R(t.type)}}class IR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zR(t.type)}}class HR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],i)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function _v(r,e){r.seq.push(e),r.map[e.id]=e}function GR(r,e,t){const i=r.name,a=i.length;for(Sp.lastIndex=0;;){const l=Sp.exec(i),c=Sp.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===a){_v(t,d===void 0?new BR(f,r,e):new IR(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new HR(f),_v(t,_)),t=_}}}class ku{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);GR(l,c,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=i[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function vv(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const VR=37297;let kR=0;function XR(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const xv=new mt;function WR(r){Lt._getMatrix(xv,Lt.workingColorSpace,r);const e=`mat3( ${xv.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case fu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yv(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+XR(r.getShaderSource(e),f)}else return l}function YR(r,e){const t=WR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qR(r,e){let t;switch(e){case hT:t="Linear";break;case dT:t="Reinhard";break;case pT:t="Cineon";break;case $0:t="ACESFilmic";break;case gT:t="AgX";break;case _T:t="Neutral";break;case mT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xu=new te;function jR(){Lt.getLuminanceCoefficients(Xu);const r=Xu.x.toFixed(4),e=Xu.y.toFixed(4),t=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function KR(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QR(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Il(r){return r!==""}function Sv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(r){return r.replace(JR,ew)}const $R=new Map;function ew(r,e){let t=gt[e];if(t===void 0){const i=$R.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mp(t)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(r){return r.replace(tw,nw)}function nw(r,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Tv(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===WE?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function rw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qa:case ja:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sw(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===ja&&(e="ENVMAP_MODE_REFRACTION"),e}function aw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wh:e="ENVMAP_BLENDING_MULTIPLY";break;case uT:e="ENVMAP_BLENDING_MIX";break;case fT:e="ENVMAP_BLENDING_ADD";break}return e}function ow(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lw(r,e,t,i){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=iw(t),d=rw(t),p=sw(t),_=aw(t),x=ow(t),v=ZR(t),E=KR(l),S=a.createProgram();let M,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Il).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Il).join(`
`),y.length>0&&(y+=`
`)):(M=[Tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),y=[Tv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?gt.tonemapping_pars_fragment:"",t.toneMapping!==ls?qR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,YR("linearToOutputTexel",t.outputColorSpace),jR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Il).join(`
`)),c=Mp(c),c=Sv(c,t),c=Mv(c,t),f=Mp(f),f=Sv(f,t),f=Mv(f,t),c=Ev(c),f=Ev(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=D+M+c,A=D+y+f,L=vv(a,a.VERTEX_SHADER,R),U=vv(a,a.FRAGMENT_SHADER,A);a.attachShader(S,L),a.attachShader(S,U),t.index0AttributeName!==void 0?a.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function O(B){if(r.debug.checkShaderErrors){const X=a.getProgramInfoLog(S)||"",W=a.getShaderInfoLog(L)||"",G=a.getShaderInfoLog(U)||"",Z=X.trim(),F=W.trim(),k=G.trim();let V=!0,fe=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,S,L,U);else{const _e=yv(a,L,"vertex"),I=yv(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Z+`
`+_e+`
`+I)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(F===""||k==="")&&(fe=!1);fe&&(B.diagnostics={runnable:V,programLog:Z,vertexShader:{log:F,prefix:M},fragmentShader:{log:k,prefix:y}})}a.deleteShader(L),a.deleteShader(U),P=new ku(a,S),w=QR(a,S)}let P;this.getUniforms=function(){return P===void 0&&O(this),P};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(S,VR)),C},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=U,this}let cw=0;class uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fw(e),t.set(e,i)),i}}class fw{constructor(e){this.id=cw++,this.code=e,this.usedTimes=0}}function hw(r,e,t,i,a,l,c){const f=new Wd,h=new uw,d=new Set,p=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let v=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return d.add(w),w===0?"uv":`uv${w}`}function M(w,C,B,X,W){const G=X.fog,Z=W.geometry,F=w.isMeshStandardMaterial?X.environment:null,k=(w.isMeshStandardMaterial?t:e).get(w.envMap||F),V=k&&k.mapping===ru?k.image.height:null,fe=E[w.type];w.precision!==null&&(v=a.getMaxPrecision(w.precision),v!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,I=_e!==void 0?_e.length:0;let Y=0;Z.morphAttributes.position!==void 0&&(Y=1),Z.morphAttributes.normal!==void 0&&(Y=2),Z.morphAttributes.color!==void 0&&(Y=3);let se,me,Q,ce;if(fe){const Ct=gr[fe];se=Ct.vertexShader,me=Ct.fragmentShader}else se=w.vertexShader,me=w.fragmentShader,h.update(w),Q=h.getVertexShaderID(w),ce=h.getFragmentShaderID(w);const le=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Te=W.isInstancedMesh===!0,De=W.isBatchedMesh===!0,st=!!w.map,it=!!w.matcap,K=!!k,ht=!!w.aoMap,je=!!w.lightMap,Ye=!!w.bumpMap,Pe=!!w.normalMap,lt=!!w.displacementMap,Ne=!!w.emissiveMap,ot=!!w.metalnessMap,Zt=!!w.roughnessMap,Jt=w.anisotropy>0,H=w.clearcoat>0,T=w.dispersion>0,j=w.iridescence>0,re=w.sheen>0,ve=w.transmission>0,de=Jt&&!!w.anisotropyMap,He=H&&!!w.clearcoatMap,Ce=H&&!!w.clearcoatNormalMap,Xe=H&&!!w.clearcoatRoughnessMap,Qe=j&&!!w.iridescenceMap,Re=j&&!!w.iridescenceThicknessMap,Ue=re&&!!w.sheenColorMap,$e=re&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,ze=!!w.specularColorMap,dt=!!w.specularIntensityMap,$=ve&&!!w.transmissionMap,we=ve&&!!w.thicknessMap,Oe=!!w.gradientMap,Ve=!!w.alphaMap,Ae=w.alphaTest>0,Ee=!!w.alphaHash,We=!!w.extensions;let ct=ls;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ct=r.toneMapping);const It={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:se,fragmentShader:me,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:De,batchingColor:De&&W._colorsTexture!==null,instancing:Te,instancingColor:Te&&W.instanceColor!==null,instancingMorph:Te&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:cs,alphaToCoverage:!!w.alphaToCoverage,map:st,matcap:it,envMap:K,envMapMode:K&&k.mapping,envMapCubeUVHeight:V,aoMap:ht,lightMap:je,bumpMap:Ye,normalMap:Pe,displacementMap:x&&lt,emissiveMap:Ne,normalMapObjectSpace:Pe&&w.normalMapType===yT,normalMapTangentSpace:Pe&&w.normalMapType===Dd,metalnessMap:ot,roughnessMap:Zt,anisotropy:Jt,anisotropyMap:de,clearcoat:H,clearcoatMap:He,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:T,iridescence:j,iridescenceMap:Qe,iridescenceThicknessMap:Re,sheen:re,sheenColorMap:Ue,sheenRoughnessMap:$e,specularMap:Ge,specularColorMap:ze,specularIntensityMap:dt,transmission:ve,transmissionMap:$,thicknessMap:we,gradientMap:Oe,opaque:w.transparent===!1&&w.blending===Wa&&w.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Ae,alphaHash:Ee,combine:w.combine,mapUv:st&&S(w.map.channel),aoMapUv:ht&&S(w.aoMap.channel),lightMapUv:je&&S(w.lightMap.channel),bumpMapUv:Ye&&S(w.bumpMap.channel),normalMapUv:Pe&&S(w.normalMap.channel),displacementMapUv:lt&&S(w.displacementMap.channel),emissiveMapUv:Ne&&S(w.emissiveMap.channel),metalnessMapUv:ot&&S(w.metalnessMap.channel),roughnessMapUv:Zt&&S(w.roughnessMap.channel),anisotropyMapUv:de&&S(w.anisotropyMap.channel),clearcoatMapUv:He&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&S(w.sheenRoughnessMap.channel),specularMapUv:Ge&&S(w.specularMap.channel),specularColorMapUv:ze&&S(w.specularColorMap.channel),specularIntensityMapUv:dt&&S(w.specularIntensityMap.channel),transmissionMapUv:$&&S(w.transmissionMap.channel),thicknessMapUv:we&&S(w.thicknessMap.channel),alphaMapUv:Ve&&S(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Pe||Jt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(st||Ve),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Se,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Y,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:st&&w.map.isVideoTexture===!0&&Lt.getTransfer(w.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ne&&w.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(w.emissiveMap.colorSpace)===Vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Si,flipSided:w.side===wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:We&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&w.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function y(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)C.push(B),C.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(D(C,w),R(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function D(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function R(w,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),w.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),w.push(f.mask)}function A(w){const C=E[w.type];let B;if(C){const X=gr[C];B=ub.clone(X.uniforms)}else B=w.uniforms;return B}function L(w,C){let B;for(let X=0,W=p.length;X<W;X++){const G=p[X];if(G.cacheKey===C){B=G,++B.usedTimes;break}}return B===void 0&&(B=new lw(r,C,w,l),p.push(B)),B}function U(w){if(--w.usedTimes===0){const C=p.indexOf(w);p[C]=p[p.length-1],p.pop(),w.destroy()}}function O(w){h.remove(w)}function P(){h.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:A,acquireProgram:L,releaseProgram:U,releaseShaderCache:O,programs:p,dispose:P}}function dw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function i(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:l}}function pw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Av(){const r=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function c(_,x,v,E,S,M){let y=r[e];return y===void 0?(y={id:_.id,object:_,geometry:x,material:v,groupOrder:E,renderOrder:_.renderOrder,z:S,group:M},r[e]=y):(y.id=_.id,y.object=_,y.geometry=x,y.material=v,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=S,y.group=M),e++,y}function f(_,x,v,E,S,M){const y=c(_,x,v,E,S,M);v.transmission>0?i.push(y):v.transparent===!0?a.push(y):t.push(y)}function h(_,x,v,E,S,M){const y=c(_,x,v,E,S,M);v.transmission>0?i.unshift(y):v.transparent===!0?a.unshift(y):t.unshift(y)}function d(_,x){t.length>1&&t.sort(_||pw),i.length>1&&i.sort(x||bv),a.length>1&&a.sort(x||bv)}function p(){for(let _=e,x=r.length;_<x;_++){const v=r[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:f,unshift:h,finish:p,sort:d}}function mw(){let r=new WeakMap;function e(i,a){const l=r.get(i);let c;return l===void 0?(c=new Av,r.set(i,[c])):a>=l.length?(c=new Av,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function gw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new ft};break;case"SpotLight":t={position:new te,direction:new te,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function _w(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vw=0;function xw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yw(r){const e=new gw,t=_w(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new te);const a=new te,l=new Yt,c=new Yt;function f(d){let p=0,_=0,x=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let v=0,E=0,S=0,M=0,y=0,D=0,R=0,A=0,L=0,U=0,O=0;d.sort(xw);for(let w=0,C=d.length;w<C;w++){const B=d[w],X=B.color,W=B.intensity,G=B.distance,Z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=X.r*W,_+=X.g*W,x+=X.b*W;else if(B.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(B.sh.coefficients[F],W);O++}else if(B.isDirectionalLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const k=B.shadow,V=t.get(B);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,i.directionalShadow[v]=V,i.directionalShadowMap[v]=Z,i.directionalShadowMatrix[v]=B.shadow.matrix,D++}i.directional[v]=F,v++}else if(B.isSpotLight){const F=e.get(B);F.position.setFromMatrixPosition(B.matrixWorld),F.color.copy(X).multiplyScalar(W),F.distance=G,F.coneCos=Math.cos(B.angle),F.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),F.decay=B.decay,i.spot[S]=F;const k=B.shadow;if(B.map&&(i.spotLightMap[L]=B.map,L++,k.updateMatrices(B),B.castShadow&&U++),i.spotLightMatrix[S]=k.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=Z,A++}S++}else if(B.isRectAreaLight){const F=e.get(B);F.color.copy(X).multiplyScalar(W),F.halfWidth.set(B.width*.5,0,0),F.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=F,M++}else if(B.isPointLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),F.distance=B.distance,F.decay=B.decay,B.castShadow){const k=B.shadow,V=t.get(B);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,i.pointShadow[E]=V,i.pointShadowMap[E]=Z,i.pointShadowMatrix[E]=B.shadow.matrix,R++}i.point[E]=F,E++}else if(B.isHemisphereLight){const F=e.get(B);F.skyColor.copy(B.color).multiplyScalar(W),F.groundColor.copy(B.groundColor).multiplyScalar(W),i.hemi[y]=F,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=x;const P=i.hash;(P.directionalLength!==v||P.pointLength!==E||P.spotLength!==S||P.rectAreaLength!==M||P.hemiLength!==y||P.numDirectionalShadows!==D||P.numPointShadows!==R||P.numSpotShadows!==A||P.numSpotMaps!==L||P.numLightProbes!==O)&&(i.directional.length=v,i.spot.length=S,i.rectArea.length=M,i.point.length=E,i.hemi.length=y,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+L-U,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=O,P.directionalLength=v,P.pointLength=E,P.spotLength=S,P.rectAreaLength=M,P.hemiLength=y,P.numDirectionalShadows=D,P.numPointShadows=R,P.numSpotShadows=A,P.numSpotMaps=L,P.numLightProbes=O,i.version=vw++)}function h(d,p){let _=0,x=0,v=0,E=0,S=0;const M=p.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const R=d[y];if(R.isDirectionalLight){const A=i.directional[_];A.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(M),_++}else if(R.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(M),v++}else if(R.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(M),c.identity(),l.copy(R.matrixWorld),l.premultiply(M),c.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(R.isPointLight){const A=i.point[x];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(M),x++}else if(R.isHemisphereLight){const A=i.hemi[S];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(M),S++}}}return{setup:f,setupView:h,state:i}}function Rv(r){const e=new yw(r),t=[],i=[];function a(p){d.camera=p,t.length=0,i.length=0}function l(p){t.push(p)}function c(p){i.push(p)}function f(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Sw(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Rv(r),e.set(a,[f])):l>=c.length?(f=new Rv(r),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
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
}`;function Tw(r,e,t){let i=new sp;const a=new ke,l=new ke,c=new Bt,f=new bb({depthPacking:xT}),h=new Ab,d={},p=t.maxTextureSize,_={[Dr]:wn,[wn]:Dr,[Si]:Si},x=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Mw,fragmentShader:Ew}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const E=new or;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new nn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K0;let y=this.type;this.render=function(U,O,P){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),X=r.state;X.setBlending(dr),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=y!==Cr&&this.type===Cr,G=y===Cr&&this.type!==Cr;for(let Z=0,F=U.length;Z<F;Z++){const k=U[Z],V=k.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const fe=V.getFrameExtents();if(a.multiply(fe),l.copy(V.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(l.x=Math.floor(p/fe.x),a.x=l.x*fe.x,V.mapSize.x=l.x),a.y>p&&(l.y=Math.floor(p/fe.y),a.y=l.y*fe.y,V.mapSize.y=l.y)),V.map===null||W===!0||G===!0){const I=this.type!==Cr?{minFilter:Mi,magFilter:Mi}:{};V.map!==null&&V.map.dispose(),V.map=new Ei(a.x,a.y,I),V.map.texture.name=k.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const _e=V.getViewportCount();for(let I=0;I<_e;I++){const Y=V.getViewport(I);c.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),X.viewport(c),V.updateMatrices(k,I),i=V.getFrustum(),A(O,P,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Cr&&D(V,P),V.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(w,C,B)};function D(U,O){const P=e.update(S);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ei(a.x,a.y)),x.uniforms.shadow_pass.value=U.map.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,P,x,S,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,P,v,S,null)}function R(U,O,P,w){let C=null;const B=P.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)C=B;else if(C=P.isPointLight===!0?h:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const X=C.uuid,W=O.uuid;let G=d[X];G===void 0&&(G={},d[X]=G);let Z=G[W];Z===void 0&&(Z=C.clone(),G[W]=Z,O.addEventListener("dispose",L)),C=Z}if(C.visible=O.visible,C.wireframe=O.wireframe,w===Cr?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,P.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const X=r.properties.get(C);X.light=P}return C}function A(U,O,P,w,C){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===Cr)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,U.matrixWorld);const W=e.update(U),G=U.material;if(Array.isArray(G)){const Z=W.groups;for(let F=0,k=Z.length;F<k;F++){const V=Z[F],fe=G[V.materialIndex];if(fe&&fe.visible){const _e=R(U,fe,w,C);U.onBeforeShadow(r,U,O,P,W,_e,V),r.renderBufferDirect(P,null,W,_e,U,V),U.onAfterShadow(r,U,O,P,W,_e,V)}}}else if(G.visible){const Z=R(U,G,w,C);U.onBeforeShadow(r,U,O,P,W,Z,null),r.renderBufferDirect(P,null,W,Z,U,null),U.onAfterShadow(r,U,O,P,W,Z,null)}}const X=U.children;for(let W=0,G=X.length;W<G;W++)A(X[W],O,P,w,C)}function L(U){U.target.removeEventListener("dispose",L);for(const P in d){const w=d[P],C=U.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const bw={[Ih]:iu,[Hh]:kh,[Gh]:Xh,[Ya]:Vh,[iu]:Ih,[kh]:Hh,[Xh]:Gh,[Vh]:Ya};function Aw(r,e){function t(){let $=!1;const we=new Bt;let Oe=null;const Ve=new Bt(0,0,0,0);return{setMask:function(Ae){Oe!==Ae&&!$&&(r.colorMask(Ae,Ae,Ae,Ae),Oe=Ae)},setLocked:function(Ae){$=Ae},setClear:function(Ae,Ee,We,ct,It){It===!0&&(Ae*=ct,Ee*=ct,We*=ct),we.set(Ae,Ee,We,ct),Ve.equals(we)===!1&&(r.clearColor(Ae,Ee,We,ct),Ve.copy(we))},reset:function(){$=!1,Oe=null,Ve.set(-1,0,0,0)}}}function i(){let $=!1,we=!1,Oe=null,Ve=null,Ae=null;return{setReversed:function(Ee){if(we!==Ee){const We=e.get("EXT_clip_control");Ee?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),we=Ee;const ct=Ae;Ae=null,this.setClear(ct)}},getReversed:function(){return we},setTest:function(Ee){Ee?le(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(Ee){Oe!==Ee&&!$&&(r.depthMask(Ee),Oe=Ee)},setFunc:function(Ee){if(we&&(Ee=bw[Ee]),Ve!==Ee){switch(Ee){case Ih:r.depthFunc(r.NEVER);break;case iu:r.depthFunc(r.ALWAYS);break;case Hh:r.depthFunc(r.LESS);break;case Ya:r.depthFunc(r.LEQUAL);break;case Gh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case kh:r.depthFunc(r.GREATER);break;case Xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ve=Ee}},setLocked:function(Ee){$=Ee},setClear:function(Ee){Ae!==Ee&&(we&&(Ee=1-Ee),r.clearDepth(Ee),Ae=Ee)},reset:function(){$=!1,Oe=null,Ve=null,Ae=null,we=!1}}}function a(){let $=!1,we=null,Oe=null,Ve=null,Ae=null,Ee=null,We=null,ct=null,It=null;return{setTest:function(Ct){$||(Ct?le(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ct){we!==Ct&&!$&&(r.stencilMask(Ct),we=Ct)},setFunc:function(Ct,ni,ji){(Oe!==Ct||Ve!==ni||Ae!==ji)&&(r.stencilFunc(Ct,ni,ji),Oe=Ct,Ve=ni,Ae=ji)},setOp:function(Ct,ni,ji){(Ee!==Ct||We!==ni||ct!==ji)&&(r.stencilOp(Ct,ni,ji),Ee=Ct,We=ni,ct=ji)},setLocked:function(Ct){$=Ct},setClear:function(Ct){It!==Ct&&(r.clearStencil(Ct),It=Ct)},reset:function(){$=!1,we=null,Oe=null,Ve=null,Ae=null,Ee=null,We=null,ct=null,It=null}}}const l=new t,c=new i,f=new a,h=new WeakMap,d=new WeakMap;let p={},_={},x=new WeakMap,v=[],E=null,S=!1,M=null,y=null,D=null,R=null,A=null,L=null,U=null,O=new ft(0,0,0),P=0,w=!1,C=null,B=null,X=null,W=null,G=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=k>=2);let fe=null,_e={};const I=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),se=new Bt().fromArray(I),me=new Bt().fromArray(Y);function Q($,we,Oe,Ve){const Ae=new Uint8Array(4),Ee=r.createTexture();r.bindTexture($,Ee),r.texParameteri($,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri($,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<Oe;We++)$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(we+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Ee}const ce={};ce[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),le(r.DEPTH_TEST),c.setFunc(Ya),Ye(!1),Pe(Z0),le(r.CULL_FACE),ht(dr);function le($){p[$]!==!0&&(r.enable($),p[$]=!0)}function Se($){p[$]!==!1&&(r.disable($),p[$]=!1)}function Te($,we){return _[$]!==we?(r.bindFramebuffer($,we),_[$]=we,$===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=we),$===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=we),!0):!1}function De($,we){let Oe=v,Ve=!1;if($){Oe=x.get(we),Oe===void 0&&(Oe=[],x.set(we,Oe));const Ae=$.textures;if(Oe.length!==Ae.length||Oe[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,We=Ae.length;Ee<We;Ee++)Oe[Ee]=r.COLOR_ATTACHMENT0+Ee;Oe.length=Ae.length,Ve=!0}}else Oe[0]!==r.BACK&&(Oe[0]=r.BACK,Ve=!0);Ve&&r.drawBuffers(Oe)}function st($){return E!==$?(r.useProgram($),E=$,!0):!1}const it={[na]:r.FUNC_ADD,[qE]:r.FUNC_SUBTRACT,[jE]:r.FUNC_REVERSE_SUBTRACT};it[ZE]=r.MIN,it[KE]=r.MAX;const K={[QE]:r.ZERO,[JE]:r.ONE,[$E]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[sT]:r.SRC_ALPHA_SATURATE,[iT]:r.DST_COLOR,[tT]:r.DST_ALPHA,[eT]:r.ONE_MINUS_SRC_COLOR,[Bh]:r.ONE_MINUS_SRC_ALPHA,[rT]:r.ONE_MINUS_DST_COLOR,[nT]:r.ONE_MINUS_DST_ALPHA,[aT]:r.CONSTANT_COLOR,[oT]:r.ONE_MINUS_CONSTANT_COLOR,[lT]:r.CONSTANT_ALPHA,[cT]:r.ONE_MINUS_CONSTANT_ALPHA};function ht($,we,Oe,Ve,Ae,Ee,We,ct,It,Ct){if($===dr){S===!0&&(Se(r.BLEND),S=!1);return}if(S===!1&&(le(r.BLEND),S=!0),$!==YE){if($!==M||Ct!==w){if((y!==na||A!==na)&&(r.blendEquation(r.FUNC_ADD),y=na,A=na),Ct)switch($){case Wa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fh:r.blendFunc(r.ONE,r.ONE);break;case Q0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case J0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Wa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Q0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}D=null,R=null,L=null,U=null,O.set(0,0,0),P=0,M=$,w=Ct}return}Ae=Ae||we,Ee=Ee||Oe,We=We||Ve,(we!==y||Ae!==A)&&(r.blendEquationSeparate(it[we],it[Ae]),y=we,A=Ae),(Oe!==D||Ve!==R||Ee!==L||We!==U)&&(r.blendFuncSeparate(K[Oe],K[Ve],K[Ee],K[We]),D=Oe,R=Ve,L=Ee,U=We),(ct.equals(O)===!1||It!==P)&&(r.blendColor(ct.r,ct.g,ct.b,It),O.copy(ct),P=It),M=$,w=!1}function je($,we){$.side===Si?Se(r.CULL_FACE):le(r.CULL_FACE);let Oe=$.side===wn;we&&(Oe=!Oe),Ye(Oe),$.blending===Wa&&$.transparent===!1?ht(dr):ht($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),l.setMask($.colorWrite);const Ve=$.stencilWrite;f.setTest(Ve),Ve&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ne($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye($){C!==$&&($?r.frontFace(r.CW):r.frontFace(r.CCW),C=$)}function Pe($){$!==kE?(le(r.CULL_FACE),$!==B&&($===Z0?r.cullFace(r.BACK):$===XE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),B=$}function lt($){$!==X&&(F&&r.lineWidth($),X=$)}function Ne($,we,Oe){$?(le(r.POLYGON_OFFSET_FILL),(W!==we||G!==Oe)&&(r.polygonOffset(we,Oe),W=we,G=Oe)):Se(r.POLYGON_OFFSET_FILL)}function ot($){$?le(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function Zt($){$===void 0&&($=r.TEXTURE0+Z-1),fe!==$&&(r.activeTexture($),fe=$)}function Jt($,we,Oe){Oe===void 0&&(fe===null?Oe=r.TEXTURE0+Z-1:Oe=fe);let Ve=_e[Oe];Ve===void 0&&(Ve={type:void 0,texture:void 0},_e[Oe]=Ve),(Ve.type!==$||Ve.texture!==we)&&(fe!==Oe&&(r.activeTexture(Oe),fe=Oe),r.bindTexture($,we||ce[$]),Ve.type=$,Ve.texture=we)}function H(){const $=_e[fe];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function j(){try{r.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function re(){try{r.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{r.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{r.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{r.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{r.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qe(){try{r.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Re(){try{r.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ue($){se.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),se.copy($))}function $e($){me.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),me.copy($))}function Ge($,we){let Oe=d.get(we);Oe===void 0&&(Oe=new WeakMap,d.set(we,Oe));let Ve=Oe.get($);Ve===void 0&&(Ve=r.getUniformBlockIndex(we,$.name),Oe.set($,Ve))}function ze($,we){const Ve=d.get(we).get($);h.get(we)!==Ve&&(r.uniformBlockBinding(we,Ve,$.__bindingPointIndex),h.set(we,Ve))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},fe=null,_e={},_={},x=new WeakMap,v=[],E=null,S=!1,M=null,y=null,D=null,R=null,A=null,L=null,U=null,O=new ft(0,0,0),P=0,w=!1,C=null,B=null,X=null,W=null,G=null,se.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:le,disable:Se,bindFramebuffer:Te,drawBuffers:De,useProgram:st,setBlending:ht,setMaterial:je,setFlipSided:Ye,setCullFace:Pe,setLineWidth:lt,setPolygonOffset:Ne,setScissorTest:ot,activeTexture:Zt,bindTexture:Jt,unbindTexture:H,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:Qe,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:ze,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:re,texSubImage3D:ve,compressedTexSubImage2D:de,compressedTexSubImage3D:He,scissor:Ue,viewport:$e,reset:dt}}function Rw(r,e,t,i,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ke,p=new WeakMap;let _;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(H,T){return v?new OffscreenCanvas(H,T):du("canvas")}function S(H,T,j){let re=1;const ve=Jt(H);if((ve.width>j||ve.height>j)&&(re=j/Math.max(ve.width,ve.height)),re<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const de=Math.floor(re*ve.width),He=Math.floor(re*ve.height);_===void 0&&(_=E(de,He));const Ce=T?E(de,He):_;return Ce.width=de,Ce.height=He,Ce.getContext("2d").drawImage(H,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+He+")."),Ce}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),H;return H}function M(H){return H.generateMipmaps}function y(H){r.generateMipmap(H)}function D(H){return H.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?r.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(H,T,j,re,ve=!1){if(H!==null){if(r[H]!==void 0)return r[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let de=T;if(T===r.RED&&(j===r.FLOAT&&(de=r.R32F),j===r.HALF_FLOAT&&(de=r.R16F),j===r.UNSIGNED_BYTE&&(de=r.R8)),T===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.R8UI),j===r.UNSIGNED_SHORT&&(de=r.R16UI),j===r.UNSIGNED_INT&&(de=r.R32UI),j===r.BYTE&&(de=r.R8I),j===r.SHORT&&(de=r.R16I),j===r.INT&&(de=r.R32I)),T===r.RG&&(j===r.FLOAT&&(de=r.RG32F),j===r.HALF_FLOAT&&(de=r.RG16F),j===r.UNSIGNED_BYTE&&(de=r.RG8)),T===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.RG8UI),j===r.UNSIGNED_SHORT&&(de=r.RG16UI),j===r.UNSIGNED_INT&&(de=r.RG32UI),j===r.BYTE&&(de=r.RG8I),j===r.SHORT&&(de=r.RG16I),j===r.INT&&(de=r.RG32I)),T===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.RGB8UI),j===r.UNSIGNED_SHORT&&(de=r.RGB16UI),j===r.UNSIGNED_INT&&(de=r.RGB32UI),j===r.BYTE&&(de=r.RGB8I),j===r.SHORT&&(de=r.RGB16I),j===r.INT&&(de=r.RGB32I)),T===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),j===r.UNSIGNED_INT&&(de=r.RGBA32UI),j===r.BYTE&&(de=r.RGBA8I),j===r.SHORT&&(de=r.RGBA16I),j===r.INT&&(de=r.RGBA32I)),T===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),T===r.RGBA){const He=ve?fu:Lt.getTransfer(re);j===r.FLOAT&&(de=r.RGBA32F),j===r.HALF_FLOAT&&(de=r.RGBA16F),j===r.UNSIGNED_BYTE&&(de=He===Vt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(H,T){let j;return H?T===null||T===ra||T===Ka?j=r.DEPTH24_STENCIL8:T===Gi?j=r.DEPTH32F_STENCIL8:T===El&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ra||T===Ka?j=r.DEPTH_COMPONENT24:T===Gi?j=r.DEPTH_COMPONENT32F:T===El&&(j=r.DEPTH_COMPONENT16),j}function L(H,T){return M(H)===!0||H.isFramebufferTexture&&H.minFilter!==Mi&&H.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?T.mipmaps.length:1}function U(H){const T=H.target;T.removeEventListener("dispose",U),P(T),T.isVideoTexture&&p.delete(T)}function O(H){const T=H.target;T.removeEventListener("dispose",O),C(T)}function P(H){const T=i.get(H);if(T.__webglInit===void 0)return;const j=H.source,re=x.get(j);if(re){const ve=re[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(H),Object.keys(re).length===0&&x.delete(j)}i.remove(H)}function w(H){const T=i.get(H);r.deleteTexture(T.__webglTexture);const j=H.source,re=x.get(j);delete re[T.__cacheKey],c.memory.textures--}function C(H){const T=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let ve=0;ve<T.__webglFramebuffer[re].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[re][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)r.deleteFramebuffer(T.__webglFramebuffer[re]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=H.textures;for(let re=0,ve=j.length;re<ve;re++){const de=i.get(j[re]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),c.memory.textures--),i.remove(j[re])}i.remove(H)}let B=0;function X(){B=0}function W(){const H=B;return H>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+a.maxTextures),B+=1,H}function G(H){const T=[];return T.push(H.wrapS),T.push(H.wrapT),T.push(H.wrapR||0),T.push(H.magFilter),T.push(H.minFilter),T.push(H.anisotropy),T.push(H.internalFormat),T.push(H.format),T.push(H.type),T.push(H.generateMipmaps),T.push(H.premultiplyAlpha),T.push(H.flipY),T.push(H.unpackAlignment),T.push(H.colorSpace),T.join()}function Z(H,T){const j=i.get(H);if(H.isVideoTexture&&ot(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&j.__version!==H.version){const re=H.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(j,H,T);return}}else H.isExternalTexture&&(j.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+T)}function F(H,T){const j=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&j.__version!==H.version){ce(j,H,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+T)}function k(H,T){const j=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&j.__version!==H.version){ce(j,H,T);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+T)}function V(H,T){const j=i.get(H);if(H.version>0&&j.__version!==H.version){le(j,H,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+T)}const fe={[jh]:r.REPEAT,[ir]:r.CLAMP_TO_EDGE,[Zh]:r.MIRRORED_REPEAT},_e={[Mi]:r.NEAREST,[vT]:r.NEAREST_MIPMAP_NEAREST,[su]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[Kh]:r.LINEAR_MIPMAP_NEAREST,[ia]:r.LINEAR_MIPMAP_LINEAR},I={[ST]:r.NEVER,[RT]:r.ALWAYS,[MT]:r.LESS,[c_]:r.LEQUAL,[ET]:r.EQUAL,[AT]:r.GEQUAL,[TT]:r.GREATER,[bT]:r.NOTEQUAL};function Y(H,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===Kh||T.magFilter===su||T.magFilter===ia||T.minFilter===yn||T.minFilter===Kh||T.minFilter===su||T.minFilter===ia)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(H,r.TEXTURE_WRAP_S,fe[T.wrapS]),r.texParameteri(H,r.TEXTURE_WRAP_T,fe[T.wrapT]),(H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY)&&r.texParameteri(H,r.TEXTURE_WRAP_R,fe[T.wrapR]),r.texParameteri(H,r.TEXTURE_MAG_FILTER,_e[T.magFilter]),r.texParameteri(H,r.TEXTURE_MIN_FILTER,_e[T.minFilter]),T.compareFunction&&(r.texParameteri(H,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(H,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==su&&T.minFilter!==ia||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(H,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function se(H,T){let j=!1;H.__webglInit===void 0&&(H.__webglInit=!0,T.addEventListener("dispose",U));const re=T.source;let ve=x.get(re);ve===void 0&&(ve={},x.set(re,ve));const de=G(T);if(de!==H.__cacheKey){ve[de]===void 0&&(ve[de]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ve[de].usedTimes++;const He=ve[H.__cacheKey];He!==void 0&&(ve[H.__cacheKey].usedTimes--,He.usedTimes===0&&w(T)),H.__cacheKey=de,H.__webglTexture=ve[de].texture}return j}function me(H,T,j){return Math.floor(Math.floor(H/j)/T)}function Q(H,T,j,re){const de=H.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,j,re,T.data);else{de.sort((Re,Ue)=>Re.start-Ue.start);let He=0;for(let Re=1;Re<de.length;Re++){const Ue=de[He],$e=de[Re],Ge=Ue.start+Ue.count,ze=me($e.start,T.width,4),dt=me(Ue.start,T.width,4);$e.start<=Ge+1&&ze===dt&&me($e.start+$e.count-1,T.width,4)===ze?Ue.count=Math.max(Ue.count,$e.start+$e.count-Ue.start):(++He,de[He]=$e)}de.length=He+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Re=0,Ue=de.length;Re<Ue;Re++){const $e=de[Re],Ge=Math.floor($e.start/4),ze=Math.ceil($e.count/4),dt=Ge%T.width,$=Math.floor(Ge/T.width),we=ze,Oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$),t.texSubImage2D(r.TEXTURE_2D,0,dt,$,we,Oe,j,re,T.data)}H.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function ce(H,T,j){let re=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=r.TEXTURE_3D);const ve=se(H,T),de=T.source;t.bindTexture(re,H.__webglTexture,r.TEXTURE0+j);const He=i.get(de);if(de.version!==He.__version||ve===!0){t.activeTexture(r.TEXTURE0+j);const Ce=Lt.getPrimaries(Lt.workingColorSpace),Xe=T.colorSpace===pr?null:Lt.getPrimaries(T.colorSpace),Qe=T.colorSpace===pr||Ce===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Re=S(T.image,!1,a.maxTextureSize);Re=Zt(T,Re);const Ue=l.convert(T.format,T.colorSpace),$e=l.convert(T.type);let Ge=R(T.internalFormat,Ue,$e,T.colorSpace,T.isVideoTexture);Y(re,T);let ze;const dt=T.mipmaps,$=T.isVideoTexture!==!0,we=He.__version===void 0||ve===!0,Oe=de.dataReady,Ve=L(T,Re);if(T.isDepthTexture)Ge=A(T.format===Qa,T.type),we&&($?t.texStorage2D(r.TEXTURE_2D,1,Ge,Re.width,Re.height):t.texImage2D(r.TEXTURE_2D,0,Ge,Re.width,Re.height,0,Ue,$e,null));else if(T.isDataTexture)if(dt.length>0){$&&we&&t.texStorage2D(r.TEXTURE_2D,Ve,Ge,dt[0].width,dt[0].height);for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)ze=dt[Ae],$?Oe&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,ze.width,ze.height,Ue,$e,ze.data):t.texImage2D(r.TEXTURE_2D,Ae,Ge,ze.width,ze.height,0,Ue,$e,ze.data);T.generateMipmaps=!1}else $?(we&&t.texStorage2D(r.TEXTURE_2D,Ve,Ge,Re.width,Re.height),Oe&&Q(T,Re,Ue,$e)):t.texImage2D(r.TEXTURE_2D,0,Ge,Re.width,Re.height,0,Ue,$e,Re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$&&we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ge,dt[0].width,dt[0].height,Re.depth);for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)if(ze=dt[Ae],T.format!==Vi)if(Ue!==null)if($){if(Oe)if(T.layerUpdates.size>0){const We=$_(ze.width,ze.height,T.format,T.type);for(const ct of T.layerUpdates){const It=ze.data.subarray(ct*We/ze.data.BYTES_PER_ELEMENT,(ct+1)*We/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,ct,ze.width,ze.height,1,Ue,It)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,ze.width,ze.height,Re.depth,Ue,ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,Ge,ze.width,ze.height,Re.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?Oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,ze.width,ze.height,Re.depth,Ue,$e,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ae,Ge,ze.width,ze.height,Re.depth,0,Ue,$e,ze.data)}else{$&&we&&t.texStorage2D(r.TEXTURE_2D,Ve,Ge,dt[0].width,dt[0].height);for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)ze=dt[Ae],T.format!==Vi?Ue!==null?$?Oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,ze.width,ze.height,Ue,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,Ae,Ge,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?Oe&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,ze.width,ze.height,Ue,$e,ze.data):t.texImage2D(r.TEXTURE_2D,Ae,Ge,ze.width,ze.height,0,Ue,$e,ze.data)}else if(T.isDataArrayTexture)if($){if(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ge,Re.width,Re.height,Re.depth),Oe)if(T.layerUpdates.size>0){const Ae=$_(Re.width,Re.height,T.format,T.type);for(const Ee of T.layerUpdates){const We=Re.data.subarray(Ee*Ae/Re.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/Re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ee,Re.width,Re.height,1,Ue,$e,We)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ue,$e,Re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,Re.width,Re.height,Re.depth,0,Ue,$e,Re.data);else if(T.isData3DTexture)$?(we&&t.texStorage3D(r.TEXTURE_3D,Ve,Ge,Re.width,Re.height,Re.depth),Oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ue,$e,Re.data)):t.texImage3D(r.TEXTURE_3D,0,Ge,Re.width,Re.height,Re.depth,0,Ue,$e,Re.data);else if(T.isFramebufferTexture){if(we)if($)t.texStorage2D(r.TEXTURE_2D,Ve,Ge,Re.width,Re.height);else{let Ae=Re.width,Ee=Re.height;for(let We=0;We<Ve;We++)t.texImage2D(r.TEXTURE_2D,We,Ge,Ae,Ee,0,Ue,$e,null),Ae>>=1,Ee>>=1}}else if(dt.length>0){if($&&we){const Ae=Jt(dt[0]);t.texStorage2D(r.TEXTURE_2D,Ve,Ge,Ae.width,Ae.height)}for(let Ae=0,Ee=dt.length;Ae<Ee;Ae++)ze=dt[Ae],$?Oe&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Ue,$e,ze):t.texImage2D(r.TEXTURE_2D,Ae,Ge,Ue,$e,ze);T.generateMipmaps=!1}else if($){if(we){const Ae=Jt(Re);t.texStorage2D(r.TEXTURE_2D,Ve,Ge,Ae.width,Ae.height)}Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,$e,Re)}else t.texImage2D(r.TEXTURE_2D,0,Ge,Ue,$e,Re);M(T)&&y(re),He.__version=de.version,T.onUpdate&&T.onUpdate(T)}H.__version=T.version}function le(H,T,j){if(T.image.length!==6)return;const re=se(H,T),ve=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+j);const de=i.get(ve);if(ve.version!==de.__version||re===!0){t.activeTexture(r.TEXTURE0+j);const He=Lt.getPrimaries(Lt.workingColorSpace),Ce=T.colorSpace===pr?null:Lt.getPrimaries(T.colorSpace),Xe=T.colorSpace===pr||He===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Re=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let Ee=0;Ee<6;Ee++)!Qe&&!Re?Ue[Ee]=S(T.image[Ee],!0,a.maxCubemapSize):Ue[Ee]=Re?T.image[Ee].image:T.image[Ee],Ue[Ee]=Zt(T,Ue[Ee]);const $e=Ue[0],Ge=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),dt=R(T.internalFormat,Ge,ze,T.colorSpace),$=T.isVideoTexture!==!0,we=de.__version===void 0||re===!0,Oe=ve.dataReady;let Ve=L(T,$e);Y(r.TEXTURE_CUBE_MAP,T);let Ae;if(Qe){$&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,dt,$e.width,$e.height);for(let Ee=0;Ee<6;Ee++){Ae=Ue[Ee].mipmaps;for(let We=0;We<Ae.length;We++){const ct=Ae[We];T.format!==Vi?Ge!==null?$?Oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,0,0,ct.width,ct.height,Ge,ct.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,dt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,0,0,ct.width,ct.height,Ge,ze,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,dt,ct.width,ct.height,0,Ge,ze,ct.data)}}}else{if(Ae=T.mipmaps,$&&we){Ae.length>0&&Ve++;const Ee=Jt(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,dt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Re){$?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ue[Ee].width,Ue[Ee].height,Ge,ze,Ue[Ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,Ue[Ee].width,Ue[Ee].height,0,Ge,ze,Ue[Ee].data);for(let We=0;We<Ae.length;We++){const It=Ae[We].image[Ee].image;$?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,0,0,It.width,It.height,Ge,ze,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,dt,It.width,It.height,0,Ge,ze,It.data)}}else{$?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ge,ze,Ue[Ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,Ge,ze,Ue[Ee]);for(let We=0;We<Ae.length;We++){const ct=Ae[We];$?Oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,0,0,Ge,ze,ct.image[Ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,dt,Ge,ze,ct.image[Ee])}}}M(T)&&y(r.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}H.__version=T.version}function Se(H,T,j,re,ve,de){const He=l.convert(j.format,j.colorSpace),Ce=l.convert(j.type),Xe=R(j.internalFormat,He,Ce,j.colorSpace),Qe=i.get(T),Re=i.get(j);if(Re.__renderTarget=T,!Qe.__hasExternalTextures){const Ue=Math.max(1,T.width>>de),$e=Math.max(1,T.height>>de);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Xe,Ue,$e,T.depth,0,He,Ce,null):t.texImage2D(ve,de,Xe,Ue,$e,0,He,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,H),Ne(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ve,Re.__webglTexture,0,lt(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ve,Re.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(H,T,j){if(r.bindRenderbuffer(r.RENDERBUFFER,H),T.depthBuffer){const re=T.depthTexture,ve=re&&re.isDepthTexture?re.type:null,de=A(T.stencilBuffer,ve),He=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=lt(T);Ne(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,de,T.width,T.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,H)}else{const re=T.textures;for(let ve=0;ve<re.length;ve++){const de=re[ve],He=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),Xe=R(de.internalFormat,He,Ce,de.colorSpace),Qe=lt(T);j&&Ne(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Xe,T.width,T.height):Ne(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,Xe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(H,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,H),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(T.depthTexture);re.__renderTarget=T,(!re.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const ve=re.__webglTexture,de=lt(T);if(T.depthTexture.format===Tl)Ne(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Qa)Ne(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function st(H){const T=i.get(H),j=H.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==H.depthTexture){const re=H.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",ve)};re.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=re}if(H.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const re=H.texture.mipmaps;re&&re.length>0?De(T.__webglFramebuffer[0],H):De(T.__webglFramebuffer,H)}else if(j){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=r.createRenderbuffer(),Te(T.__webglDepthbuffer[re],H,!1);else{const ve=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}else{const re=H.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Te(T.__webglDepthbuffer,H,!1);else{const ve=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(H,T,j){const re=i.get(H);T!==void 0&&Se(re.__webglFramebuffer,H,H.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&st(H)}function K(H){const T=H.texture,j=i.get(H),re=i.get(T);H.addEventListener("dispose",O);const ve=H.textures,de=H.isWebGLCubeRenderTarget===!0,He=ve.length>1;if(He||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=T.version,c.memory.textures++),de){j.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<T.mipmaps.length;Xe++)j.__webglFramebuffer[Ce][Xe]=r.createFramebuffer()}else j.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)j.__webglFramebuffer[Ce]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(He)for(let Ce=0,Xe=ve.length;Ce<Xe;Ce++){const Qe=i.get(ve[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(H.samples>0&&Ne(H)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Xe=ve[Ce];j.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Ce]);const Qe=l.convert(Xe.format,Xe.colorSpace),Re=l.convert(Xe.type),Ue=R(Xe.internalFormat,Qe,Re,Xe.colorSpace,H.isXRRenderTarget===!0),$e=lt(H);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ue,H.width,H.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,j.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),H.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(j.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Y(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Xe=0;Xe<T.mipmaps.length;Xe++)Se(j.__webglFramebuffer[Ce][Xe],H,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else Se(j.__webglFramebuffer[Ce],H,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(T)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ce=0,Xe=ve.length;Ce<Xe;Ce++){const Qe=ve[Ce],Re=i.get(Qe);let Ue=r.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ue=H.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Re.__webglTexture),Y(Ue,Qe),Se(j.__webglFramebuffer,H,Qe,r.COLOR_ATTACHMENT0+Ce,Ue,0),M(Qe)&&y(Ue)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ce=H.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,re.__webglTexture),Y(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Xe=0;Xe<T.mipmaps.length;Xe++)Se(j.__webglFramebuffer[Xe],H,T,r.COLOR_ATTACHMENT0,Ce,Xe);else Se(j.__webglFramebuffer,H,T,r.COLOR_ATTACHMENT0,Ce,0);M(T)&&y(Ce),t.unbindTexture()}H.depthBuffer&&st(H)}function ht(H){const T=H.textures;for(let j=0,re=T.length;j<re;j++){const ve=T[j];if(M(ve)){const de=D(H),He=i.get(ve).__webglTexture;t.bindTexture(de,He),y(de),t.unbindTexture()}}}const je=[],Ye=[];function Pe(H){if(H.samples>0){if(Ne(H)===!1){const T=H.textures,j=H.width,re=H.height;let ve=r.COLOR_BUFFER_BIT;const de=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(H),Ce=T.length>1;if(Ce)for(let Qe=0;Qe<T.length;Qe++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Xe=H.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[Qe]);const Re=i.get(T[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,j,re,0,0,j,re,ve,r.NEAREST),h===!0&&(je.length=0,Ye.length=0,je.push(r.COLOR_ATTACHMENT0+Qe),H.depthBuffer&&H.resolveDepthBuffer===!1&&(je.push(de),Ye.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Qe=0;Qe<T.length;Qe++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,He.__webglColorRenderbuffer[Qe]);const Re=i.get(T[Qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,Re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&h){const T=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function lt(H){return Math.min(a.maxSamples,H.samples)}function Ne(H){const T=i.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ot(H){const T=c.render.frame;p.get(H)!==T&&(p.set(H,T),H.update())}function Zt(H,T){const j=H.colorSpace,re=H.format,ve=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||j!==cs&&j!==pr&&(Lt.getTransfer(j)===Vt?(re!==Vi||ve!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Jt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(d.width=H.naturalWidth||H.width,d.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(d.width=H.displayWidth,d.height=H.displayHeight):(d.width=H.width,d.height=H.height),d}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=it,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne}function ww(r,e){function t(i,a=pr){let l;const c=Lt.getTransfer(a);if(i===si)return r.UNSIGNED_BYTE;if(i===Jh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return r.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===t_)return r.BYTE;if(i===n_)return r.SHORT;if(i===El)return r.UNSIGNED_SHORT;if(i===Qh)return r.INT;if(i===ra)return r.UNSIGNED_INT;if(i===Gi)return r.FLOAT;if(i===Za)return r.HALF_FLOAT;if(i===r_)return r.ALPHA;if(i===s_)return r.RGB;if(i===Vi)return r.RGBA;if(i===Tl)return r.DEPTH_COMPONENT;if(i===Qa)return r.DEPTH_STENCIL;if(i===ed)return r.RED;if(i===td)return r.RED_INTEGER;if(i===a_)return r.RG;if(i===nd)return r.RG_INTEGER;if(i===id)return r.RGBA_INTEGER;if(i===au||i===ou||i===lu||i===cu)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===au)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===au)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ou)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===sd||i===ad||i===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===cd||i===ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===ld||i===cd)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===ud)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fd||i===hd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===Td)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===fd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_d)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sd)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Md)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Td)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uu||i===bd||i===Ad)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===uu)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ad)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===o_||i===Rd||i===wd||i===Cd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===uu)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Rd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class wv extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
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

}`;class Lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:Cw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uw extends us{constructor(e,t){super();const i=this;let a=null,l=1,c=null,f="local-floor",h=1,d=null,p=null,_=null,x=null,v=null,E=null;const S=new Lw,M={},y=t.getContextAttributes();let D=null,R=null;const A=[],L=[],U=new ke;let O=null;const P=new li;P.viewport=new Bt;const w=new li;w.viewport=new Bt;const C=[P,w],B=new Db;let X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=A[Q];return ce===void 0&&(ce=new ip,A[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=A[Q];return ce===void 0&&(ce=new ip,A[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=A[Q];return ce===void 0&&(ce=new ip,A[Q]=ce),ce.getHandSpace()};function G(Q){const ce=L.indexOf(Q.inputSource);if(ce===-1)return;const le=A[ce];le!==void 0&&(le.update(Q.inputSource,Q.frame,d||c),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",F);for(let Q=0;Q<A.length;Q++){const ce=L[Q];ce!==null&&(L[Q]=null,A[Q].disconnect(ce))}X=null,W=null,S.reset();for(const Q in M)delete M[Q];e.setRenderTarget(D),v=null,x=null,_=null,a=null,R=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(a,t)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Se=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=y.stencil?Qa:Tl,Se=y.stencil?Ka:ra);const De={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};x=_.createProjectionLayer(De),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),R=new Ei(x.textureWidth,x.textureHeight,{format:Vi,type:si,depthTexture:new op(x.textureWidth,x.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const le={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new Ei(v.framebufferWidth,v.framebufferHeight,{format:Vi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await a.requestReferenceSpace(f),me.setContext(a),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(Q){for(let ce=0;ce<Q.removed.length;ce++){const le=Q.removed[ce],Se=L.indexOf(le);Se>=0&&(L[Se]=null,A[Se].disconnect(le))}for(let ce=0;ce<Q.added.length;ce++){const le=Q.added[ce];let Se=L.indexOf(le);if(Se===-1){for(let De=0;De<A.length;De++)if(De>=L.length){L.push(le),Se=De;break}else if(L[De]===null){L[De]=le,Se=De;break}if(Se===-1)break}const Te=A[Se];Te&&Te.connect(le)}}const k=new te,V=new te;function fe(Q,ce,le){k.setFromMatrixPosition(ce.matrixWorld),V.setFromMatrixPosition(le.matrixWorld);const Se=k.distanceTo(V),Te=ce.projectionMatrix.elements,De=le.projectionMatrix.elements,st=Te[14]/(Te[10]-1),it=Te[14]/(Te[10]+1),K=(Te[9]+1)/Te[5],ht=(Te[9]-1)/Te[5],je=(Te[8]-1)/Te[0],Ye=(De[8]+1)/De[0],Pe=st*je,lt=st*Ye,Ne=Se/(-je+Ye),ot=Ne*-je;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(Ne),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Zt=st+Ne,Jt=it+Ne,H=Pe-ot,T=lt+(Se-ot),j=K*it/Jt*Zt,re=ht*it/Jt*Zt;Q.projectionMatrix.makePerspective(H,T,j,re,Zt,Jt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function _e(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ce=Q.near,le=Q.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(le=S.depthFar)),B.near=w.near=P.near=ce,B.far=w.far=P.far=le,(X!==B.near||W!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,W=B.far),B.layers.mask=Q.layers.mask|6,P.layers.mask=B.layers.mask&3,w.layers.mask=B.layers.mask&5;const Se=Q.parent,Te=B.cameras;_e(B,Se);for(let De=0;De<Te.length;De++)_e(Te[De],Se);Te.length===2?fe(B,P,w):B.projectionMatrix.copy(P.projectionMatrix),I(Q,B,Se)};function I(Q,ce,le){le===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&v===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(B)},this.getCameraTexture=function(Q){return M[Q]};let Y=null;function se(Q,ce){if(p=ce.getViewerPose(d||c),E=ce,p!==null){const le=p.views;v!==null&&(e.setRenderTargetFramebuffer(R,v.framebuffer),e.setRenderTarget(R));let Se=!1;le.length!==B.cameras.length&&(B.cameras.length=0,Se=!0);for(let it=0;it<le.length;it++){const K=le[it];let ht=null;if(v!==null)ht=v.getViewport(K);else{const Ye=_.getViewSubImage(x,K);ht=Ye.viewport,it===0&&(e.setRenderTargetTextures(R,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(R))}let je=C[it];je===void 0&&(je=new li,je.layers.enable(it),je.viewport=new Bt,C[it]=je),je.matrix.fromArray(K.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(K.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ht.x,ht.y,ht.width,ht.height),it===0&&(B.matrix.copy(je.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Se===!0&&B.cameras.push(je)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const it=_.getDepthInformation(le[0]);it&&it.isValid&&it.texture&&S.init(it,a.renderState)}if(Te&&Te.includes("camera-access")&&(e.state.unbindTexture(),_))for(let it=0;it<le.length;it++){const K=le[it].camera;if(K){let ht=M[K];ht||(ht=new wv,M[K]=ht);const je=_.getCameraImage(K);ht.sourceTexture=je}}}for(let le=0;le<A.length;le++){const Se=L[le],Te=A[le];Se!==null&&Te!==void 0&&Te.update(Se,ce,d||c)}Y&&Y(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),E=null}const me=new ev;me.setAnimationLoop(se),this.setAnimationLoop=function(Q){Y=Q},this.dispose=function(){}}}const da=new Nr,Ow=new Yt;function Nw(r,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function i(M,y){y.color.getRGB(M.fogColor.value,O_(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function a(M,y,D,R,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(M,y):y.isMeshToonMaterial?(l(M,y),_(M,y)):y.isMeshPhongMaterial?(l(M,y),p(M,y)):y.isMeshStandardMaterial?(l(M,y),x(M,y),y.isMeshPhysicalMaterial&&v(M,y,A)):y.isMeshMatcapMaterial?(l(M,y),E(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),S(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&f(M,y)):y.isPointsMaterial?h(M,y,D,R):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===wn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===wn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=e.get(y),R=D.envMap,A=D.envMapRotation;R&&(M.envMap.value=R,da.copy(A),da.x*=-1,da.y*=-1,da.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(da.y*=-1,da.z*=-1),M.envMapRotation.value.setFromMatrix4(Ow.makeRotationFromEuler(da)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function f(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function h(M,y,D,R){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=R*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function v(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===wn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function S(M,y){const D=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Pw(r,e,t,i){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,R){const A=R.program;i.uniformBlockBinding(D,A)}function d(D,R){let A=a[D.id];A===void 0&&(E(D),A=p(D),a[D.id]=A,D.addEventListener("dispose",M));const L=R.program;i.updateUBOMapping(D,L);const U=e.render.frame;l[D.id]!==U&&(x(D),l[D.id]=U)}function p(D){const R=_();D.__bindingPointIndex=R;const A=r.createBuffer(),L=D.__size,U=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,L,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,A),A}function _(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const R=a[D.id],A=D.uniforms,L=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let U=0,O=A.length;U<O;U++){const P=Array.isArray(A[U])?A[U]:[A[U]];for(let w=0,C=P.length;w<C;w++){const B=P[w];if(v(B,U,w,L)===!0){const X=B.__offset,W=Array.isArray(B.value)?B.value:[B.value];let G=0;for(let Z=0;Z<W.length;Z++){const F=W[Z],k=S(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,X+G,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,G),G+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(D,R,A,L){const U=D.value,O=R+"_"+A;if(L[O]===void 0)return typeof U=="number"||typeof U=="boolean"?L[O]=U:L[O]=U.clone(),!0;{const P=L[O];if(typeof U=="number"||typeof U=="boolean"){if(P!==U)return L[O]=U,!0}else if(P.equals(U)===!1)return P.copy(U),!0}return!1}function E(D){const R=D.uniforms;let A=0;const L=16;for(let O=0,P=R.length;O<P;O++){const w=Array.isArray(R[O])?R[O]:[R[O]];for(let C=0,B=w.length;C<B;C++){const X=w[C],W=Array.isArray(X.value)?X.value:[X.value];for(let G=0,Z=W.length;G<Z;G++){const F=W[G],k=S(F),V=A%L,fe=V%k.boundary,_e=V+fe;A+=fe,_e!==0&&L-_e<k.storage&&(A+=L-_e),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=k.storage}}}const U=A%L;return U>0&&(A+=L-U),D.__size=A,D.__cache={},this}function S(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function M(D){const R=D.target;R.removeEventListener("dispose",M);const A=c.indexOf(R.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function y(){for(const D in a)r.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:d,dispose:y}}class Wu{constructor(e={}){const{canvas:t=XT(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const E=new Uint32Array(4),S=new Int32Array(4);let M=null,y=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=an;let U=0,O=0,P=null,w=-1,C=null;const B=new Bt,X=new Bt;let W=null;const G=new ft(0);let Z=0,F=t.width,k=t.height,V=1,fe=null,_e=null;const I=new Bt(0,0,F,k),Y=new Bt(0,0,F,k);let se=!1;const me=new sp;let Q=!1,ce=!1;const le=new Yt,Se=new te,Te=new Bt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function it(){return P===null?V:1}let K=i;function ht(z,ee){return t.getContext(z,ee)}try{const z={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nu}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),K===null){const ee="webgl2";if(K=ht(ee,z),K===null)throw ht(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let je,Ye,Pe,lt,Ne,ot,Zt,Jt,H,T,j,re,ve,de,He,Ce,Xe,Qe,Re,Ue,$e,Ge,ze,dt;function $(){je=new Y2(K),je.init(),Ge=new ww(K,je),Ye=new I2(K,je,e,Ge),Pe=new Aw(K,je),Ye.reversedDepthBuffer&&x&&Pe.buffers.depth.setReversed(!0),lt=new Z2(K),Ne=new dw,ot=new Rw(K,je,Pe,Ne,Ye,Ge,lt),Zt=new G2(A),Jt=new W2(A),H=new Pb(K),ze=new z2(K,H),T=new q2(K,H,lt,ze),j=new Q2(K,T,H,lt),Re=new K2(K,Ye,ot),Ce=new H2(Ne),re=new hw(A,Zt,Jt,je,Ye,ze,Ce),ve=new Nw(A,Ne),de=new mw,He=new Sw(je),Qe=new F2(A,Zt,Jt,Pe,j,v,h),Xe=new Tw(A,j,Ye),dt=new Pw(K,lt,Ye,Pe),Ue=new B2(K,je,lt),$e=new j2(K,je,lt),lt.programs=re.programs,A.capabilities=Ye,A.extensions=je,A.properties=Ne,A.renderLists=de,A.shadowMap=Xe,A.state=Pe,A.info=lt}$();const we=new Uw(A,K);this.xr=we,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const z=je.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=je.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(z){z!==void 0&&(V=z,this.setSize(F,k,!1))},this.getSize=function(z){return z.set(F,k)},this.setSize=function(z,ee,he=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=z,k=ee,t.width=Math.floor(z*V),t.height=Math.floor(ee*V),he===!0&&(t.style.width=z+"px",t.style.height=ee+"px"),this.setViewport(0,0,z,ee)},this.getDrawingBufferSize=function(z){return z.set(F*V,k*V).floor()},this.setDrawingBufferSize=function(z,ee,he){F=z,k=ee,V=he,t.width=Math.floor(z*he),t.height=Math.floor(ee*he),this.setViewport(0,0,z,ee)},this.getCurrentViewport=function(z){return z.copy(B)},this.getViewport=function(z){return z.copy(I)},this.setViewport=function(z,ee,he,pe){z.isVector4?I.set(z.x,z.y,z.z,z.w):I.set(z,ee,he,pe),Pe.viewport(B.copy(I).multiplyScalar(V).round())},this.getScissor=function(z){return z.copy(Y)},this.setScissor=function(z,ee,he,pe){z.isVector4?Y.set(z.x,z.y,z.z,z.w):Y.set(z,ee,he,pe),Pe.scissor(X.copy(Y).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(z){Pe.setScissorTest(se=z)},this.setOpaqueSort=function(z){fe=z},this.setTransparentSort=function(z){_e=z},this.getClearColor=function(z){return z.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(z=!0,ee=!0,he=!0){let pe=0;if(z){let ne=!1;if(P!==null){const be=P.texture.format;ne=be===id||be===nd||be===td}if(ne){const be=P.texture.type,Be=be===si||be===ra||be===El||be===Ka||be===Jh||be===$h,Ze=Qe.getClearColor(),Ie=Qe.getClearAlpha(),et=Ze.r,at=Ze.g,tt=Ze.b;Be?(E[0]=et,E[1]=at,E[2]=tt,E[3]=Ie,K.clearBufferuiv(K.COLOR,0,E)):(S[0]=et,S[1]=at,S[2]=tt,S[3]=Ie,K.clearBufferiv(K.COLOR,0,S))}else pe|=K.COLOR_BUFFER_BIT}ee&&(pe|=K.DEPTH_BUFFER_BIT),he&&(pe|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Qe.dispose(),de.dispose(),He.dispose(),Ne.dispose(),Zt.dispose(),Jt.dispose(),j.dispose(),ze.dispose(),dt.dispose(),re.dispose(),we.dispose(),we.removeEventListener("sessionstart",ji),we.removeEventListener("sessionend",hc),Er.stop()};function Oe(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const z=lt.autoReset,ee=Xe.enabled,he=Xe.autoUpdate,pe=Xe.needsUpdate,ne=Xe.type;$(),lt.autoReset=z,Xe.enabled=ee,Xe.autoUpdate=he,Xe.needsUpdate=pe,Xe.type=ne}function Ae(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Ee(z){const ee=z.target;ee.removeEventListener("dispose",Ee),We(ee)}function We(z){ct(z),Ne.remove(z)}function ct(z){const ee=Ne.get(z).programs;ee!==void 0&&(ee.forEach(function(he){re.releaseProgram(he)}),z.isShaderMaterial&&re.releaseShaderCache(z))}this.renderBufferDirect=function(z,ee,he,pe,ne,be){ee===null&&(ee=De);const Be=ne.isMesh&&ne.matrixWorld.determinant()<0,Ze=Us(z,ee,he,pe,ne);Pe.setMaterial(pe,Be);let Ie=he.index,et=1;if(pe.wireframe===!0){if(Ie=T.getWireframeAttribute(he),Ie===void 0)return;et=2}const at=he.drawRange,tt=he.attributes.position;let vt=at.start*et,Ft=(at.start+at.count)*et;be!==null&&(vt=Math.max(vt,be.start*et),Ft=Math.min(Ft,(be.start+be.count)*et)),Ie!==null?(vt=Math.max(vt,0),Ft=Math.min(Ft,Ie.count)):tt!=null&&(vt=Math.max(vt,0),Ft=Math.min(Ft,tt.count));const Kt=Ft-vt;if(Kt<0||Kt===1/0)return;ze.setup(ne,pe,Ze,he,Ie);let zt,yt=Ue;if(Ie!==null&&(zt=H.get(Ie),yt=$e,yt.setIndex(zt)),ne.isMesh)pe.wireframe===!0?(Pe.setLineWidth(pe.wireframeLinewidth*it()),yt.setMode(K.LINES)):yt.setMode(K.TRIANGLES);else if(ne.isLine){let Ke=pe.linewidth;Ke===void 0&&(Ke=1),Pe.setLineWidth(Ke*it()),ne.isLineSegments?yt.setMode(K.LINES):ne.isLineLoop?yt.setMode(K.LINE_LOOP):yt.setMode(K.LINE_STRIP)}else ne.isPoints?yt.setMode(K.POINTS):ne.isSprite&&yt.setMode(K.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))yt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Ke=ne._multiDrawStarts,$t=ne._multiDrawCounts,Dt=ne._multiDrawCount,Vn=Ie?H.get(Ie).bytesPerElement:1,Xr=Ne.get(pe).currentProgram.getUniforms();for(let zn=0;zn<Dt;zn++)Xr.setValue(K,"_gl_DrawID",zn),yt.render(Ke[zn]/Vn,$t[zn])}else if(ne.isInstancedMesh)yt.renderInstances(vt,Kt,ne.count);else if(he.isInstancedBufferGeometry){const Ke=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,$t=Math.min(he.instanceCount,Ke);yt.renderInstances(vt,Kt,$t)}else yt.render(vt,Kt)};function It(z,ee,he){z.transparent===!0&&z.side===Si&&z.forceSinglePass===!1?(z.side=wn,z.needsUpdate=!0,Oi(z,ee,he),z.side=Dr,z.needsUpdate=!0,Oi(z,ee,he),z.side=Si):Oi(z,ee,he)}this.compile=function(z,ee,he=null){he===null&&(he=z),y=He.get(he),y.init(ee),R.push(y),he.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),z!==he&&z.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights();const pe=new Set;return z.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const be=ne.material;if(be)if(Array.isArray(be))for(let Be=0;Be<be.length;Be++){const Ze=be[Be];It(Ze,he,ne),pe.add(Ze)}else It(be,he,ne),pe.add(be)}),y=R.pop(),pe},this.compileAsync=function(z,ee,he=null){const pe=this.compile(z,ee,he);return new Promise(ne=>{function be(){if(pe.forEach(function(Be){Ne.get(Be).currentProgram.isReady()&&pe.delete(Be)}),pe.size===0){ne(z);return}setTimeout(be,10)}je.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ct=null;function ni(z){Ct&&Ct(z)}function ji(){Er.stop()}function hc(){Er.start()}const Er=new ev;Er.setAnimationLoop(ni),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(z){Ct=z,we.setAnimationLoop(z),z===null?Er.stop():Er.start()},we.addEventListener("sessionstart",ji),we.addEventListener("sessionend",hc),this.render=function(z,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(ee),ee=we.getCamera()),z.isScene===!0&&z.onBeforeRender(A,z,ee,P),y=He.get(z,R.length),y.init(ee),R.push(y),le.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),me.setFromProjectionMatrix(le,mr,ee.reversedDepth),ce=this.localClippingEnabled,Q=Ce.init(this.clippingPlanes,ce),M=de.get(z,D.length),M.init(),D.push(M),we.enabled===!0&&we.isPresenting===!0){const be=A.xr.getDepthSensingMesh();be!==null&&Bo(be,ee,-1/0,A.sortObjects)}Bo(z,ee,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(fe,_e),st=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,st&&Qe.addToRenderList(M,z),this.info.render.frame++,Q===!0&&Ce.beginShadows();const he=y.state.shadowsArray;Xe.render(he,z,ee),Q===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const pe=M.opaque,ne=M.transmissive;if(y.setupLights(),ee.isArrayCamera){const be=ee.cameras;if(ne.length>0)for(let Be=0,Ze=be.length;Be<Ze;Be++){const Ie=be[Be];Ho(pe,ne,z,Ie)}st&&Qe.render(z);for(let Be=0,Ze=be.length;Be<Ze;Be++){const Ie=be[Be];Io(M,z,Ie,Ie.viewport)}}else ne.length>0&&Ho(pe,ne,z,ee),st&&Qe.render(z),Io(M,z,ee);P!==null&&O===0&&(ot.updateMultisampleRenderTarget(P),ot.updateRenderTargetMipmap(P)),z.isScene===!0&&z.onAfterRender(A,z,ee),ze.resetDefaultState(),w=-1,C=null,R.pop(),R.length>0?(y=R[R.length-1],Q===!0&&Ce.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?M=D[D.length-1]:M=null};function Bo(z,ee,he,pe){if(z.visible===!1)return;if(z.layers.test(ee.layers)){if(z.isGroup)he=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(ee);else if(z.isLight)y.pushLight(z),z.castShadow&&y.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||me.intersectsSprite(z)){pe&&Te.setFromMatrixPosition(z.matrixWorld).applyMatrix4(le);const Be=j.update(z),Ze=z.material;Ze.visible&&M.push(z,Be,Ze,he,Te.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||me.intersectsObject(z))){const Be=j.update(z),Ze=z.material;if(pe&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),Te.copy(z.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Te.copy(Be.boundingSphere.center)),Te.applyMatrix4(z.matrixWorld).applyMatrix4(le)),Array.isArray(Ze)){const Ie=Be.groups;for(let et=0,at=Ie.length;et<at;et++){const tt=Ie[et],vt=Ze[tt.materialIndex];vt&&vt.visible&&M.push(z,Be,vt,he,Te.z,tt)}}else Ze.visible&&M.push(z,Be,Ze,he,Te.z,null)}}const be=z.children;for(let Be=0,Ze=be.length;Be<Ze;Be++)Bo(be[Be],ee,he,pe)}function Io(z,ee,he,pe){const ne=z.opaque,be=z.transmissive,Be=z.transparent;y.setupLightsView(he),Q===!0&&Ce.setGlobalState(A.clippingPlanes,he),pe&&Pe.viewport(B.copy(pe)),ne.length>0&&Aa(ne,ee,he),be.length>0&&Aa(be,ee,he),Be.length>0&&Aa(Be,ee,he),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ho(z,ee,he,pe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[pe.id]===void 0&&(y.state.transmissionRenderTarget[pe.id]=new Ei(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Za:si,minFilter:ia,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const be=y.state.transmissionRenderTarget[pe.id],Be=pe.viewport||B;be.setSize(Be.z*A.transmissionResolutionScale,Be.w*A.transmissionResolutionScale);const Ze=A.getRenderTarget(),Ie=A.getActiveCubeFace(),et=A.getActiveMipmapLevel();A.setRenderTarget(be),A.getClearColor(G),Z=A.getClearAlpha(),Z<1&&A.setClearColor(16777215,.5),A.clear(),st&&Qe.render(he);const at=A.toneMapping;A.toneMapping=ls;const tt=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),y.setupLightsView(pe),Q===!0&&Ce.setGlobalState(A.clippingPlanes,pe),Aa(z,he,pe),ot.updateMultisampleRenderTarget(be),ot.updateRenderTargetMipmap(be),je.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Ft=0,Kt=ee.length;Ft<Kt;Ft++){const zt=ee[Ft],yt=zt.object,Ke=zt.geometry,$t=zt.material,Dt=zt.group;if($t.side===Si&&yt.layers.test(pe.layers)){const Vn=$t.side;$t.side=wn,$t.needsUpdate=!0,dc(yt,he,pe,Ke,$t,Dt),$t.side=Vn,$t.needsUpdate=!0,vt=!0}}vt===!0&&(ot.updateMultisampleRenderTarget(be),ot.updateRenderTargetMipmap(be))}A.setRenderTarget(Ze,Ie,et),A.setClearColor(G,Z),tt!==void 0&&(pe.viewport=tt),A.toneMapping=at}function Aa(z,ee,he){const pe=ee.isScene===!0?ee.overrideMaterial:null;for(let ne=0,be=z.length;ne<be;ne++){const Be=z[ne],Ze=Be.object,Ie=Be.geometry,et=Be.group;let at=Be.material;at.allowOverride===!0&&pe!==null&&(at=pe),Ze.layers.test(he.layers)&&dc(Ze,ee,he,Ie,at,et)}}function dc(z,ee,he,pe,ne,be){z.onBeforeRender(A,ee,he,pe,ne,be),z.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),ne.onBeforeRender(A,ee,he,pe,z,be),ne.transparent===!0&&ne.side===Si&&ne.forceSinglePass===!1?(ne.side=wn,ne.needsUpdate=!0,A.renderBufferDirect(he,ee,pe,ne,z,be),ne.side=Dr,ne.needsUpdate=!0,A.renderBufferDirect(he,ee,pe,ne,z,be),ne.side=Si):A.renderBufferDirect(he,ee,pe,ne,z,be),z.onAfterRender(A,ee,he,pe,ne,be)}function Oi(z,ee,he){ee.isScene!==!0&&(ee=De);const pe=Ne.get(z),ne=y.state.lights,be=y.state.shadowsArray,Be=ne.state.version,Ze=re.getParameters(z,ne.state,be,ee,he),Ie=re.getProgramCacheKey(Ze);let et=pe.programs;pe.environment=z.isMeshStandardMaterial?ee.environment:null,pe.fog=ee.fog,pe.envMap=(z.isMeshStandardMaterial?Jt:Zt).get(z.envMap||pe.environment),pe.envMapRotation=pe.environment!==null&&z.envMap===null?ee.environmentRotation:z.envMapRotation,et===void 0&&(z.addEventListener("dispose",Ee),et=new Map,pe.programs=et);let at=et.get(Ie);if(at!==void 0){if(pe.currentProgram===at&&pe.lightsStateVersion===Be)return Gn(z,Ze),at}else Ze.uniforms=re.getUniforms(z),z.onBeforeCompile(Ze,A),at=re.acquireProgram(Ze,Ie),et.set(Ie,at),pe.uniforms=Ze.uniforms;const tt=pe.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(tt.clippingPlanes=Ce.uniform),Gn(z,Ze),pe.needsLights=Um(z),pe.lightsStateVersion=Be,pe.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMap.value=ne.state.directionalShadowMap,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotShadowMap.value=ne.state.spotShadowMap,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMap.value=ne.state.pointShadowMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),pe.currentProgram=at,pe.uniformsList=null,at}function En(z){if(z.uniformsList===null){const ee=z.currentProgram.getUniforms();z.uniformsList=ku.seqWithValue(ee.seq,z.uniforms)}return z.uniformsList}function Gn(z,ee){const he=Ne.get(z);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function Us(z,ee,he,pe,ne){ee.isScene!==!0&&(ee=De),ot.resetTextureUnits();const be=ee.fog,Be=pe.isMeshStandardMaterial?ee.environment:null,Ze=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:cs,Ie=(pe.isMeshStandardMaterial?Jt:Zt).get(pe.envMap||Be),et=pe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,at=!!he.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),tt=!!he.morphAttributes.position,vt=!!he.morphAttributes.normal,Ft=!!he.morphAttributes.color;let Kt=ls;pe.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Kt=A.toneMapping);const zt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,yt=zt!==void 0?zt.length:0,Ke=Ne.get(pe),$t=y.state.lights;if(Q===!0&&(ce===!0||z!==C)){const Un=z===C&&pe.id===w;Ce.setState(pe,z,Un)}let Dt=!1;pe.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==$t.state.version||Ke.outputColorSpace!==Ze||ne.isBatchedMesh&&Ke.batching===!1||!ne.isBatchedMesh&&Ke.batching===!0||ne.isBatchedMesh&&Ke.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ke.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ke.instancing===!1||!ne.isInstancedMesh&&Ke.instancing===!0||ne.isSkinnedMesh&&Ke.skinning===!1||!ne.isSkinnedMesh&&Ke.skinning===!0||ne.isInstancedMesh&&Ke.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ke.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ke.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ke.instancingMorph===!1&&ne.morphTexture!==null||Ke.envMap!==Ie||pe.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ce.numPlanes||Ke.numIntersection!==Ce.numIntersection)||Ke.vertexAlphas!==et||Ke.vertexTangents!==at||Ke.morphTargets!==tt||Ke.morphNormals!==vt||Ke.morphColors!==Ft||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==yt)&&(Dt=!0):(Dt=!0,Ke.__version=pe.version);let Vn=Ke.currentProgram;Dt===!0&&(Vn=Oi(pe,ee,ne));let Xr=!1,zn=!1,wa=!1;const Et=Vn.getUniforms(),$n=Ke.uniforms;if(Pe.useProgram(Vn.program)&&(Xr=!0,zn=!0,wa=!0),pe.id!==w&&(w=pe.id,zn=!0),Xr||C!==z){Pe.buffers.depth.getReversed()&&z.reversedDepth!==!0&&(z._reversedDepth=!0,z.updateProjectionMatrix()),Et.setValue(K,"projectionMatrix",z.projectionMatrix),Et.setValue(K,"viewMatrix",z.matrixWorldInverse);const _n=Et.map.cameraPosition;_n!==void 0&&_n.setValue(K,Se.setFromMatrixPosition(z.matrixWorld)),Ye.logarithmicDepthBuffer&&Et.setValue(K,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Et.setValue(K,"isOrthographic",z.isOrthographicCamera===!0),C!==z&&(C=z,zn=!0,wa=!0)}if(ne.isSkinnedMesh){Et.setOptional(K,ne,"bindMatrix"),Et.setOptional(K,ne,"bindMatrixInverse");const Un=ne.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Et.setValue(K,"boneTexture",Un.boneTexture,ot))}ne.isBatchedMesh&&(Et.setOptional(K,ne,"batchingTexture"),Et.setValue(K,"batchingTexture",ne._matricesTexture,ot),Et.setOptional(K,ne,"batchingIdTexture"),Et.setValue(K,"batchingIdTexture",ne._indirectTexture,ot),Et.setOptional(K,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Et.setValue(K,"batchingColorTexture",ne._colorsTexture,ot));const ii=he.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Re.update(ne,he,Vn),(zn||Ke.receiveShadow!==ne.receiveShadow)&&(Ke.receiveShadow=ne.receiveShadow,Et.setValue(K,"receiveShadow",ne.receiveShadow)),pe.isMeshGouraudMaterial&&pe.envMap!==null&&($n.envMap.value=Ie,$n.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),pe.isMeshStandardMaterial&&pe.envMap===null&&ee.environment!==null&&($n.envMapIntensity.value=ee.environmentIntensity),zn&&(Et.setValue(K,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&pc($n,wa),be&&pe.fog===!0&&ve.refreshFogUniforms($n,be),ve.refreshMaterialUniforms($n,pe,V,k,y.state.transmissionRenderTarget[z.id]),ku.upload(K,En(Ke),$n,ot)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(ku.upload(K,En(Ke),$n,ot),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Et.setValue(K,"center",ne.center),Et.setValue(K,"modelViewMatrix",ne.modelViewMatrix),Et.setValue(K,"normalMatrix",ne.normalMatrix),Et.setValue(K,"modelMatrix",ne.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){const Un=pe.uniformsGroups;for(let _n=0,Go=Un.length;_n<Go;_n++){const Tr=Un[_n];dt.update(Tr,Vn),dt.bind(Tr,Vn)}}return Vn}function pc(z,ee){z.ambientLightColor.needsUpdate=ee,z.lightProbe.needsUpdate=ee,z.directionalLights.needsUpdate=ee,z.directionalLightShadows.needsUpdate=ee,z.pointLights.needsUpdate=ee,z.pointLightShadows.needsUpdate=ee,z.spotLights.needsUpdate=ee,z.spotLightShadows.needsUpdate=ee,z.rectAreaLights.needsUpdate=ee,z.hemisphereLights.needsUpdate=ee}function Um(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(z,ee,he){const pe=Ne.get(z);pe.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),Ne.get(z.texture).__webglTexture=ee,Ne.get(z.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:he,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,ee){const he=Ne.get(z);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};const Om=K.createFramebuffer();this.setRenderTarget=function(z,ee=0,he=0){P=z,U=ee,O=he;let pe=!0,ne=null,be=!1,Be=!1;if(z){const Ie=Ne.get(z);if(Ie.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(K.FRAMEBUFFER,null),pe=!1;else if(Ie.__webglFramebuffer===void 0)ot.setupRenderTarget(z);else if(Ie.__hasExternalTextures)ot.rebindTextures(z,Ne.get(z.texture).__webglTexture,Ne.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const tt=z.depthTexture;if(Ie.__boundDepthTexture!==tt){if(tt!==null&&Ne.has(tt)&&(z.width!==tt.image.width||z.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(z)}}const et=z.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Be=!0);const at=Ne.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(at[ee])?ne=at[ee][he]:ne=at[ee],be=!0):z.samples>0&&ot.useMultisampledRTT(z)===!1?ne=Ne.get(z).__webglMultisampledFramebuffer:Array.isArray(at)?ne=at[he]:ne=at,B.copy(z.viewport),X.copy(z.scissor),W=z.scissorTest}else B.copy(I).multiplyScalar(V).floor(),X.copy(Y).multiplyScalar(V).floor(),W=se;if(he!==0&&(ne=Om),Pe.bindFramebuffer(K.FRAMEBUFFER,ne)&&pe&&Pe.drawBuffers(z,ne),Pe.viewport(B),Pe.scissor(X),Pe.setScissorTest(W),be){const Ie=Ne.get(z.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie.__webglTexture,he)}else if(Be){const Ie=ee;for(let et=0;et<z.textures.length;et++){const at=Ne.get(z.textures[et]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+et,at.__webglTexture,he,Ie)}}else if(z!==null&&he!==0){const Ie=Ne.get(z.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ie.__webglTexture,he)}w=-1},this.readRenderTargetPixels=function(z,ee,he,pe,ne,be,Be,Ze=0){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ne.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Be!==void 0&&(Ie=Ie[Be]),Ie){Pe.bindFramebuffer(K.FRAMEBUFFER,Ie);try{const et=z.textures[Ze],at=et.format,tt=et.type;if(!Ye.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=z.width-pe&&he>=0&&he<=z.height-ne&&(z.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ze),K.readPixels(ee,he,pe,ne,Ge.convert(at),Ge.convert(tt),be))}finally{const et=P!==null?Ne.get(P).__webglFramebuffer:null;Pe.bindFramebuffer(K.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(z,ee,he,pe,ne,be,Be,Ze=0){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ne.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Be!==void 0&&(Ie=Ie[Be]),Ie)if(ee>=0&&ee<=z.width-pe&&he>=0&&he<=z.height-ne){Pe.bindFramebuffer(K.FRAMEBUFFER,Ie);const et=z.textures[Ze],at=et.format,tt=et.type;if(!Ye.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.bufferData(K.PIXEL_PACK_BUFFER,be.byteLength,K.STREAM_READ),z.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ze),K.readPixels(ee,he,pe,ne,Ge.convert(at),Ge.convert(tt),0);const Ft=P!==null?Ne.get(P).__webglFramebuffer:null;Pe.bindFramebuffer(K.FRAMEBUFFER,Ft);const Kt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await WT(K,Kt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,vt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,be),K.deleteBuffer(vt),K.deleteSync(Kt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,ee=null,he=0){const pe=Math.pow(2,-he),ne=Math.floor(z.image.width*pe),be=Math.floor(z.image.height*pe),Be=ee!==null?ee.x:0,Ze=ee!==null?ee.y:0;ot.setTexture2D(z,0),K.copyTexSubImage2D(K.TEXTURE_2D,he,0,0,Be,Ze,ne,be),Pe.unbindTexture()};const xf=K.createFramebuffer(),Ra=K.createFramebuffer();this.copyTextureToTexture=function(z,ee,he=null,pe=null,ne=0,be=null){be===null&&(ne!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=ne,ne=0):be=0);let Be,Ze,Ie,et,at,tt,vt,Ft,Kt;const zt=z.isCompressedTexture?z.mipmaps[be]:z.image;if(he!==null)Be=he.max.x-he.min.x,Ze=he.max.y-he.min.y,Ie=he.isBox3?he.max.z-he.min.z:1,et=he.min.x,at=he.min.y,tt=he.isBox3?he.min.z:0;else{const ii=Math.pow(2,-ne);Be=Math.floor(zt.width*ii),Ze=Math.floor(zt.height*ii),z.isDataArrayTexture?Ie=zt.depth:z.isData3DTexture?Ie=Math.floor(zt.depth*ii):Ie=1,et=0,at=0,tt=0}pe!==null?(vt=pe.x,Ft=pe.y,Kt=pe.z):(vt=0,Ft=0,Kt=0);const yt=Ge.convert(ee.format),Ke=Ge.convert(ee.type);let $t;ee.isData3DTexture?(ot.setTexture3D(ee,0),$t=K.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ot.setTexture2DArray(ee,0),$t=K.TEXTURE_2D_ARRAY):(ot.setTexture2D(ee,0),$t=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ee.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ee.unpackAlignment);const Dt=K.getParameter(K.UNPACK_ROW_LENGTH),Vn=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Xr=K.getParameter(K.UNPACK_SKIP_PIXELS),zn=K.getParameter(K.UNPACK_SKIP_ROWS),wa=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,zt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,zt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,et),K.pixelStorei(K.UNPACK_SKIP_ROWS,at),K.pixelStorei(K.UNPACK_SKIP_IMAGES,tt);const Et=z.isDataArrayTexture||z.isData3DTexture,$n=ee.isDataArrayTexture||ee.isData3DTexture;if(z.isDepthTexture){const ii=Ne.get(z),Un=Ne.get(ee),_n=Ne.get(ii.__renderTarget),Go=Ne.get(Un.__renderTarget);Pe.bindFramebuffer(K.READ_FRAMEBUFFER,_n.__webglFramebuffer),Pe.bindFramebuffer(K.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let Tr=0;Tr<Ie;Tr++)Et&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ne.get(z).__webglTexture,ne,tt+Tr),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ne.get(ee).__webglTexture,be,Kt+Tr)),K.blitFramebuffer(et,at,Be,Ze,vt,Ft,Be,Ze,K.DEPTH_BUFFER_BIT,K.NEAREST);Pe.bindFramebuffer(K.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ne!==0||z.isRenderTargetTexture||Ne.has(z)){const ii=Ne.get(z),Un=Ne.get(ee);Pe.bindFramebuffer(K.READ_FRAMEBUFFER,xf),Pe.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ra);for(let _n=0;_n<Ie;_n++)Et?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ii.__webglTexture,ne,tt+_n):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ii.__webglTexture,ne),$n?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Un.__webglTexture,be,Kt+_n):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Un.__webglTexture,be),ne!==0?K.blitFramebuffer(et,at,Be,Ze,vt,Ft,Be,Ze,K.COLOR_BUFFER_BIT,K.NEAREST):$n?K.copyTexSubImage3D($t,be,vt,Ft,Kt+_n,et,at,Be,Ze):K.copyTexSubImage2D($t,be,vt,Ft,et,at,Be,Ze);Pe.bindFramebuffer(K.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else $n?z.isDataTexture||z.isData3DTexture?K.texSubImage3D($t,be,vt,Ft,Kt,Be,Ze,Ie,yt,Ke,zt.data):ee.isCompressedArrayTexture?K.compressedTexSubImage3D($t,be,vt,Ft,Kt,Be,Ze,Ie,yt,zt.data):K.texSubImage3D($t,be,vt,Ft,Kt,Be,Ze,Ie,yt,Ke,zt):z.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,be,vt,Ft,Be,Ze,yt,Ke,zt.data):z.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,be,vt,Ft,zt.width,zt.height,yt,zt.data):K.texSubImage2D(K.TEXTURE_2D,be,vt,Ft,Be,Ze,yt,Ke,zt);K.pixelStorei(K.UNPACK_ROW_LENGTH,Dt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Vn),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Xr),K.pixelStorei(K.UNPACK_SKIP_ROWS,zn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,wa),be===0&&ee.generateMipmaps&&K.generateMipmap($t),Pe.unbindTexture()},this.copyTextureToTexture3D=function(z,ee,he=null,pe=null,ne=0){return to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,ee,he,pe,ne)},this.initRenderTarget=function(z){Ne.get(z).__webglFramebuffer===void 0&&ot.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?ot.setTextureCube(z,0):z.isData3DTexture?ot.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?ot.setTexture2DArray(z,0):ot.setTexture2D(z,0),Pe.unbindTexture()},this.resetState=function(){U=0,O=0,P=null,Pe.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}var Fw=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new or;return t.setAttribute("position",new ai(r,3)),t.setAttribute("uv",new ai(e,2)),t})(),xs=class B0{static get fullscreenGeometry(){return Fw}constructor(e="Pass",t=new _s,i=new Iu){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new nn(B0.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new _s),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=bl){}render(e,t,i,a,l){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Ei||t instanceof Br||t instanceof Nn||t instanceof B0)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},zw=class extends xs{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,i,a){const l=r.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},Bw=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Iw="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Hw=class extends oi{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new dn(null),depthBuffer:new dn(null),channelWeights:new dn(null),opacity:new dn(1)},blending:dr,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Bw,vertexShader:Iw}),this.depthFunc=iu}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(r){const e=r!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){const e=r!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=r}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(r){this.colorSpaceConversion!==r&&(r?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(r){r!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=r):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},Gw=class extends xs{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new Hw,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new Ei(1,1,{minFilter:yn,magFilter:yn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,i,a){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==si?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===an&&(this.renderTarget.texture.colorSpace=an))}},Cv=new ft,Dv=class extends xs{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,i,a){const l=this.overrideClearColor,c=this.overrideClearAlpha,f=r.getClearAlpha(),h=l!==null,d=c>=0;h?(r.getClearColor(Cv),r.setClearColor(l,d?c:f)):d&&r.setClearAlpha(c),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),h?r.setClearColor(Cv,f):d&&r.setClearAlpha(f)}},Vw=class extends xs{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new Dv(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,i,a){const l=r.getContext(),c=r.state.buffers,f=this.scene,h=this.camera,d=this.clearPass,p=this.inverted?0:1,_=1-p;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.stencil.setFunc(l.ALWAYS,p,4294967295),c.stencil.setClear(_),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?d.render(r,null):(d.render(r,e),d.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(f,h)):(r.setRenderTarget(e),r.render(f,h),r.setRenderTarget(t),r.render(f,h)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(l.EQUAL,1,4294967295),c.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.stencil.setLocked(!0)}},Ep=1/1e3,kw=1e3,Xw=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Ep}get fixedDelta(){return this._fixedDelta*Ep}set fixedDelta(r){this._fixedDelta=r*kw}get elapsed(){return this._elapsed*Ep}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Lv=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:a}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,a,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Gw,this.depthRenderTarget=null,this.passes=[],this.timer=new Xw,this.autoRenderToScreen=!0,this.setRenderer(r)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(r){this.multisampling!==r&&(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new ke),t=r.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===si&&r.outputColorSpace===an&&(this.inputBuffer.texture.colorSpace=an,this.outputBuffer.texture.colorSpace=an,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const a of this.passes)a.initialize(r,t,i)}}replaceRenderer(r,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(r),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(r.domElement)),t}createDepthTexture(){const r=new op;r.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(r.format=Qa,r.type=Ka):r.type=Gi;const e=r.clone();e.name="EffectComposer.OutputDepth";const t=r.clone();t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=r,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:a}=this.inputBuffer;this.depthRenderTarget=new Ei(i,a,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(r){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,a=e.getContext();e.setRenderTarget(t);const l=i.get(r).__webglFramebuffer,c=i.get(t).__webglFramebuffer,f=r.stencilBuffer?a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT:a.DEPTH_BUFFER_BIT;a.bindFramebuffer(a.READ_FRAMEBUFFER,l),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,c),a.blitFramebuffer(0,0,r.width,r.height,0,0,t.width,t.height,f,a.NEAREST),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const r=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===r&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(r,e,t,i){const a=this.renderer,l=a===null?new ke:a.getDrawingBufferSize(new ke),c=new Ei(l.width,l.height,{minFilter:yn,magFilter:yn,samples:i,stencilBuffer:e,depthBuffer:r,type:t});return t===si&&a!==null&&a.outputColorSpace===an&&(c.texture.colorSpace=an),c.texture.name="EffectComposer.Buffer",c.texture.generateMipmaps=!1,c}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,i=this.renderer,a=i.getDrawingBufferSize(new ke),l=i.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(r.renderer=i,r.setSize(a.width,a.height),r.initialize(i,l,c),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const f of t)f.setDepthTexture(this.stableDepthTexture)}else r.setDepthTexture(this.stableDepthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){const l=this.stableDepthTexture;if(l!==null){const c=(h,d)=>h||d.needsDepthTexture;e.reduce(c,!1)||(r.getDepthTexture()===l&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,a=this.outputBuffer,l,c=!1;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const f of this.passes)if(f.enabled){if(f.render(e,i,a,r,c),f.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),f.needsSwap){if(c){t.renderToScreen=f.renderToScreen;const h=e.getContext(),d=e.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),t.render(e,i,a,r,c),d.setFunc(h.EQUAL,1,4294967295)}l=i,i=a,a=l}f instanceof Vw?c=!0:f instanceof zw&&(c=!1)}}setSize(r,e,t){const i=this.renderer,a=i.getSize(new ke);(r===void 0||e===void 0)&&(r=a.width,e=a.height),(a.width!==r||a.height!==e)&&i.setSize(r,e,t);const l=i.getDrawingBufferSize(new ke);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(l.width,l.height);for(const c of this.passes)c.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],xs.fullscreenGeometry.dispose()}},pa={NONE:0,DEPTH:1,CONVOLUTION:2},Ut={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Ww=class{constructor(){this.shaderParts=new Map([[Ut.FRAGMENT_HEAD,null],[Ut.FRAGMENT_MAIN_UV,null],[Ut.FRAGMENT_MAIN_IMAGE,null],[Ut.VERTEX_HEAD,null],[Ut.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=pa.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=cs}},Tp=!1,Uv=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Si:t=this.materialsFlatShadedDoubleSide;break;case wn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Si:t=this.materialsDoubleSide;break;case wn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof oi))return r.clone();const e=r.uniforms,t=new Map;for(const a in e){const l=e[a].value;l.isRenderTargetTexture&&(e[a].value=null,t.set(a,l))}const i=r.clone();for(const a of t)e[a[0]].value=a[1],i.uniforms[a[0]].value=a[1];return i}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=Dr;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=wn,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=Si,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=wn,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=Si,i})}}render(r,e,t){const i=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,Tp){const a=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const l of a)l[0].material=l[1];this.meshCount!==a.size&&a.clear()}else{const a=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=a}r.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Tp}static set workaroundEnabled(r){Tp=r}},At={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Yw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",jw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$w="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",mC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_C="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",MC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EC="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TC=new Map([[At.ADD,Yw],[At.ALPHA,qw],[At.AVERAGE,jw],[At.COLOR,Zw],[At.COLOR_BURN,Kw],[At.COLOR_DODGE,Qw],[At.DARKEN,Jw],[At.DIFFERENCE,$w],[At.DIVIDE,eC],[At.DST,null],[At.EXCLUSION,tC],[At.HARD_LIGHT,nC],[At.HARD_MIX,iC],[At.HUE,rC],[At.INVERT,sC],[At.INVERT_RGB,aC],[At.LIGHTEN,oC],[At.LINEAR_BURN,lC],[At.LINEAR_DODGE,cC],[At.LINEAR_LIGHT,uC],[At.LUMINOSITY,fC],[At.MULTIPLY,hC],[At.NEGATION,dC],[At.NORMAL,pC],[At.OVERLAY,mC],[At.PIN_LIGHT,gC],[At.REFLECT,_C],[At.SATURATION,vC],[At.SCREEN,xC],[At.SOFT_LIGHT,yC],[At.SRC,SC],[At.SUBTRACT,MC],[At.VIVID_LIGHT,EC]]),bC=class extends us{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new dn(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return TC.get(this.blendFunction)}},Ov=class extends us{constructor(r,e,{attributes:t=pa.NONE,blendFunction:i=At.NORMAL,defines:a=new Map,uniforms:l=new Map,extensions:c=null,vertexShader:f=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=f,this.defines=a,this.uniforms=l,this.extensions=c,this.blendMode=new bC(i),this.blendMode.addEventListener("change",h=>this.setChanged()),this._inputColorSpace=cs,this._outputColorSpace=pr}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=bl){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof Ei||e instanceof Br||e instanceof Nn||e instanceof xs)&&this[r].dispose()}}},Nv=class extends xs{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Dv,this.overrideMaterialManager=t===null?null:new Uv(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new Uv(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,i,a){const l=this.scene,c=this.camera,f=this.selection,h=c.layers.mask,d=l.background,p=r.shadowMap.autoUpdate,_=this.renderToScreen?null:e;f!==null&&c.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,l,c):r.render(l,c),c.layers.mask=h,l.background=d,r.shadowMap.autoUpdate=p}},AC=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,RC="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",wC=class extends oi{constructor(r,e,t,i,a=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:nu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new dn(null),depthBuffer:new dn(null),resolution:new dn(new ke),texelSize:new dn(new ke),cameraNear:new dn(.3),cameraFar:new dn(1e3),aspect:new dn(1),time:new dn(0)},blending:dr,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:a}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=bl){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=AC.replace(Ut.FRAGMENT_HEAD,r.get(Ut.FRAGMENT_HEAD)||"").replace(Ut.FRAGMENT_MAIN_UV,r.get(Ut.FRAGMENT_MAIN_UV)||"").replace(Ut.FRAGMENT_MAIN_IMAGE,r.get(Ut.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=RC.replace(Ut.VERTEX_HEAD,r.get(Ut.VERTEX_HEAD)||"").replace(Ut.VERTEX_MAIN_SUPPORT,r.get(Ut.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof li?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return Ut}};function Pv(r,e,t){for(const i of e){const a="$1"+r+i.charAt(0).toUpperCase()+i.slice(1),l=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const c of t.entries())c[1]!==null&&t.set(c[0],c[1].replace(l,a))}}function CC(r,e,t){let i=e.getFragmentShader(),a=e.getVertexShader();const l=i!==void 0&&/mainImage/.test(i),c=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(t.attributes&pa.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,h=t.shaderParts;let d=h.get(Ut.FRAGMENT_HEAD)||"",p=h.get(Ut.FRAGMENT_MAIN_UV)||"",_=h.get(Ut.FRAGMENT_MAIN_IMAGE)||"",x=h.get(Ut.VERTEX_HEAD)||"",v=h.get(Ut.VERTEX_MAIN_SUPPORT)||"";const E=new Set,S=new Set;if(c&&(p+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),a!==null&&/mainSupport/.test(a)){const D=/mainSupport *\([\w\s]*?uv\s*?\)/.test(a);v+=`	${r}MainSupport(`,v+=D?`vUv);
`:`);
`;for(const R of a.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const A of R[1].split(/\s*,\s*/))t.varyings.add(A),E.add(A),S.add(A);for(const R of a.matchAll(f))S.add(R[1])}for(const D of i.matchAll(f))S.add(D[1]);for(const D of e.defines.keys())S.add(D.replace(/\([\w\s,]*\)/g,""));for(const D of e.uniforms.keys())S.add(D);S.delete("while"),S.delete("for"),S.delete("if"),e.uniforms.forEach((D,R)=>t.uniforms.set(r+R.charAt(0).toUpperCase()+R.slice(1),D)),e.defines.forEach((D,R)=>t.defines.set(r+R.charAt(0).toUpperCase()+R.slice(1),D));const M=new Map([["fragment",i],["vertex",a]]);Pv(r,S,t.defines),Pv(r,S,M),i=M.get("fragment"),a=M.get("vertex");const y=e.blendMode;if(t.blendModes.set(y.blendFunction,y),l){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(_+=e.inputColorSpace===an?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==pr?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const D=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${r}MainImage(color0, UV, `,(t.attributes&pa.DEPTH)!==0&&D.test(i)&&(_+="depth, ",t.readDepth=!0),_+=`color1);
	`;const R=r+"BlendOpacity";t.uniforms.set(R,y.opacity),_+=`color0 = blend${y.blendFunction}(color0, color1, ${R});

	`,d+=`uniform float ${R};

`}if(d+=i+`
`,a!==null&&(x+=a+`
`),h.set(Ut.FRAGMENT_HEAD,d),h.set(Ut.FRAGMENT_MAIN_UV,p),h.set(Ut.FRAGMENT_MAIN_IMAGE,_),h.set(Ut.VERTEX_HEAD,x),h.set(Ut.VERTEX_MAIN_SUPPORT,v),e.extensions!==null)for(const D of e.extensions)t.extensions.add(D)}}var Fv=class extends xs{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new wC(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new Ww;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===At.DST)r.attributes|=c.getAttributes()&pa.DEPTH;else{if((r.attributes&c.getAttributes()&pa.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);CC("e"+e++,c,r)}let t=r.shaderParts.get(Ut.FRAGMENT_HEAD),i=r.shaderParts.get(Ut.FRAGMENT_MAIN_IMAGE),a=r.shaderParts.get(Ut.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const c of r.blendModes.values())t+=c.getShaderCode().replace(l,`blend${c.blendFunction}`)+`
`;(r.attributes&pa.DEPTH)!==0?(r.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===an&&(i+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(a=`vec2 transformedUv = vUv;
`+a,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Ut.FRAGMENT_HEAD,t),r.shaderParts.set(Ut.FRAGMENT_MAIN_IMAGE,i),r.shaderParts.set(Ut.FRAGMENT_MAIN_UV,a);for(const[c,f]of r.shaderParts)f!==null&&r.shaderParts.set(c,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=bl){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,i,a){for(const l of this.effects)l.update(r,e,i);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=i*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const i of this.effects)i.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==si&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){r.type==="change"&&this.recompile()}};const DC=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const i=new Nn(e);i.minFilter=yn,i.magFilter=yn,i.generateMipmaps=!1;const a=[];let l=null;const c=64;let f=.1*64;const h=1/c,d=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},p=v=>{const E={x:v.x*64,y:(1-v.y)*64};let S=1;const M=A=>Math.sin(A*Math.PI/2),y=A=>-A*(A-2);v.age<c*.3?S=M(v.age/(c*.3)):S=y(1-(v.age-c*.3)/(c*.7))||0,S*=v.force;const D=`${(v.vx+1)/2*255}, ${(v.vy+1)/2*255}, ${S*255}`,R=320;t.shadowOffsetX=R,t.shadowOffsetY=R,t.shadowBlur=f,t.shadowColor=`rgba(${D},${.22*S})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(E.x-R,E.y-R,f,0,Math.PI*2),t.fill()};return{canvas:e,texture:i,addTouch:v=>{let E=0,S=0,M=0;if(l){const y=v.x-l.x,D=v.y-l.y;if(y===0&&D===0)return;const R=y*y+D*D,A=Math.sqrt(R);S=y/(A||1),M=D/(A||1),E=Math.min(R*1e4,1)}l={x:v.x,y:v.y},a.push({x:v.x,y:v.y,age:0,force:E,vx:S,vy:M})},update:()=>{d();for(let v=a.length-1;v>=0;v--){const E=a[v],S=E.force*h*(1-E.age/c);E.x+=E.vx*S,E.y+=E.vy*S,E.age++,E.age>c&&a.splice(v,1)}for(let v=0;v<a.length;v++)p(a[v]);i.needsUpdate=!0},set radiusScale(v){f=.1*64*v},get radiusScale(){return f/(.1*64)},size:64}},LC=(r,e)=>{const t=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new Ov("LiquidEffect",t,{uniforms:new Map([["uTexture",new dn(r)],["uStrength",new dn(e?.strength??.025)],["uTime",new dn(0)],["uFreq",new dn(e?.freq??4.5)]])})},zv={square:0,circle:1,triangle:2,diamond:3},UC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,OC=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,bp=10,NC=({variant:r="square",pixelSize:e=3,color:t="#B497CF",className:i,style:a,antialias:l=!0,patternScale:c=2,patternDensity:f=1,liquid:h=!1,liquidStrength:d=.1,liquidRadius:p=1,pixelSizeJitter:_=0,enableRipples:x=!0,rippleIntensityScale:v=1,rippleThickness:E=.1,rippleSpeed:S=.3,liquidWobbleSpeed:M=4.5,autoPauseOffscreen:y=!0,speed:D=.5,transparent:R=!0,edgeFade:A=.5,noiseAmount:L=0})=>{const U=Le.useRef(null),O=Le.useRef({visible:!0}),P=Le.useRef(D),w=Le.useRef(null),C=Le.useRef(null);return Le.useEffect(()=>{const B=U.current;if(!B)return;P.current=D;const X=["antialias","liquid","noiseAmount"],W={antialias:l,liquid:h,noiseAmount:L};let G=!1;if(!w.current)G=!0;else if(C.current){for(const Z of X)if(C.current[Z]!==W[Z]){G=!0;break}}if(G){if(w.current){const Ye=w.current;Ye.resizeObserver?.disconnect(),cancelAnimationFrame(Ye.raf),Ye.quad?.geometry.dispose(),Ye.material.dispose(),Ye.composer?.dispose(),Ye.renderer.dispose(),Ye.renderer.forceContextLoss(),Ye.renderer.domElement.parentElement===B&&B.removeChild(Ye.renderer.domElement),w.current=null}const Z=document.createElement("canvas"),F=new Wu({canvas:Z,antialias:l,alpha:!0,powerPreference:"high-performance"});F.domElement.style.width="100%",F.domElement.style.height="100%",F.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),B.appendChild(F.domElement),R?F.setClearAlpha(0):F.setClearColor(0,1);const k={uResolution:{value:new ke(0,0)},uTime:{value:0},uColor:{value:new ft(t)},uClickPos:{value:Array.from({length:bp},()=>new ke(-1,-1))},uClickTimes:{value:new Float32Array(bp)},uShapeType:{value:zv[r]??0},uPixelSize:{value:e*F.getPixelRatio()},uScale:{value:c},uDensity:{value:f},uPixelJitter:{value:_},uEnableRipples:{value:x?1:0},uRippleSpeed:{value:S},uRippleThickness:{value:E},uRippleIntensity:{value:v},uEdgeFade:{value:A}},V=new _s,fe=new Iu(-1,1,1,-1,0,1),_e=new oi({vertexShader:UC,fragmentShader:OC,uniforms:k,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Ld}),I=new Ir(2,2),Y=new nn(I,_e);V.add(Y);const se=new hp,me=()=>{const Ye=B.clientWidth||1,Pe=B.clientHeight||1;F.setSize(Ye,Pe,!1),k.uResolution.value.set(F.domElement.width,F.domElement.height),w.current?.composer&&w.current.composer.setSize(F.domElement.width,F.domElement.height),k.uPixelSize.value=e*F.getPixelRatio()};me();const Q=new ResizeObserver(me);Q.observe(B);const le=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ye=new Uint32Array(1);return window.crypto.getRandomValues(Ye),Ye[0]/4294967295}return Math.random()})()*1e3;let Se,Te,De;if(h){Te=DC(),Te.radiusScale=p,Se=new Lv(F);const Ye=new Nv(V,fe);De=LC(Te.texture,{strength:d,freq:M});const Pe=new Fv(fe,De);Pe.renderToScreen=!0,Se.addPass(Ye),Se.addPass(Pe)}if(L>0){Se||(Se=new Lv(F),Se.addPass(new Nv(V,fe)));const Ye=new Ov("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new dn(0)],["uAmount",new dn(L)]])}),Pe=new Fv(fe,Ye);Pe.renderToScreen=!0,Se&&Se.passes.length>0&&Se.passes.forEach(lt=>lt.renderToScreen=!1),Se.addPass(Pe)}Se&&Se.setSize(F.domElement.width,F.domElement.height);const st=Ye=>{const Pe=F.domElement.getBoundingClientRect(),lt=F.domElement.width/Pe.width,Ne=F.domElement.height/Pe.height,ot=(Ye.clientX-Pe.left)*lt,Zt=(Pe.height-(Ye.clientY-Pe.top))*Ne;return{fx:ot,fy:Zt,w:F.domElement.width,h:F.domElement.height}},it=Ye=>{const{fx:Pe,fy:lt}=st(Ye),Ne=w.current?.clickIx??0;k.uClickPos.value[Ne].set(Pe,lt),k.uClickTimes.value[Ne]=k.uTime.value,w.current&&(w.current.clickIx=(Ne+1)%bp)},K=Ye=>{if(!Te)return;const{fx:Pe,fy:lt,w:Ne,h:ot}=st(Ye);Te.addTouch({x:Pe/Ne,y:lt/ot})};F.domElement.addEventListener("pointerdown",it,{passive:!0}),F.domElement.addEventListener("pointermove",K,{passive:!0});let ht=0;const je=()=>{if(y&&!O.current.visible){ht=requestAnimationFrame(je);return}k.uTime.value=le+se.getElapsedTime()*P.current,De&&(De.uniforms.get("uTime").value=k.uTime.value),Se?(Te&&Te.update(),Se.passes.forEach(Ye=>{const Pe=Ye.effects;Pe&&Pe.forEach(lt=>{const Ne=lt.uniforms?.get("uTime");Ne&&(Ne.value=k.uTime.value)})}),Se.render()):F.render(V,fe),ht=requestAnimationFrame(je)};ht=requestAnimationFrame(je),w.current={renderer:F,scene:V,camera:fe,material:_e,clock:se,clickIx:0,uniforms:k,resizeObserver:Q,raf:ht,quad:Y,timeOffset:le,composer:Se,touch:Te,liquidEffect:De}}else{const Z=w.current;if(Z.uniforms.uShapeType.value=zv[r]??0,Z.uniforms.uPixelSize.value=e*Z.renderer.getPixelRatio(),Z.uniforms.uColor.value.set(t),Z.uniforms.uScale.value=c,Z.uniforms.uDensity.value=f,Z.uniforms.uPixelJitter.value=_,Z.uniforms.uEnableRipples.value=x?1:0,Z.uniforms.uRippleIntensity.value=v,Z.uniforms.uRippleThickness.value=E,Z.uniforms.uRippleSpeed.value=S,Z.uniforms.uEdgeFade.value=A,R?Z.renderer.setClearAlpha(0):Z.renderer.setClearColor(0,1),Z.liquidEffect){const F=Z.liquidEffect;F&&(F.value=d);const k=Z.liquidEffect.uniforms.get("uFreq");k&&(k.value=M)}Z.touch&&(Z.touch.radiusScale=p)}return C.current=W,()=>{if(w.current&&G||!w.current)return;const Z=w.current;Z.resizeObserver?.disconnect(),cancelAnimationFrame(Z.raf),Z.quad?.geometry.dispose(),Z.material.dispose(),Z.composer?.dispose(),Z.renderer.dispose(),Z.renderer.forceContextLoss(),Z.renderer.domElement.parentElement===B&&B.removeChild(Z.renderer.domElement),w.current=null}},[l,h,L,e,c,f,x,v,E,S,_,A,R,d,p,M,y,r,t,D]),qn.jsx("div",{ref:U,className:`pixel-blast-container ${i??""}`,style:a,"aria-label":"PixelBlast interactive background"})},Yu=8,PC=`
#define MAX_COLORS ${Yu}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    for (int j = 0; j < 5; j++) {
      if (j >= uIterations - 1) break;
      vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
      q += (rr - q) * 0.15;
    }

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    col *= uIntensity;

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,FC=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function zC({className:r,style:e,rotation:t=90,speed:i=.2,colors:a=[],transparent:l=!0,autoRotate:c=0,scale:f=1,frequency:h=1,warpStrength:d=1,mouseInfluence:p=1,parallax:_=.5,noise:x=.15,iterations:v=1,intensity:E=1.5,bandWidth:S=6}){const M=Le.useRef(null),y=Le.useRef(null),D=Le.useRef(null),R=Le.useRef(null),A=Le.useRef(null),L=Le.useRef(t),U=Le.useRef(c),O=Le.useRef(new ke(0,0)),P=Le.useRef(new ke(0,0)),w=Le.useRef(8);return Le.useEffect(()=>{const C=M.current,B=new _s,X=new Iu(-1,1,1,-1,0,1),W=new Ir(2,2),G=Array.from({length:Yu},()=>new te(0,0,0)),Z=new oi({vertexShader:FC,fragmentShader:PC,uniforms:{uCanvas:{value:new ke(1,1)},uTime:{value:0},uSpeed:{value:i},uRot:{value:new ke(1,0)},uColorCount:{value:0},uColors:{value:G},uTransparent:{value:l?1:0},uScale:{value:f},uFrequency:{value:h},uWarpStrength:{value:d},uPointer:{value:new ke(0,0)},uMouseInfluence:{value:p},uParallax:{value:_},uNoise:{value:x},uIterations:{value:v},uIntensity:{value:E},uBandWidth:{value:S}},premultipliedAlpha:!0,transparent:!0});R.current=Z;const F=new nn(W,Z);B.add(F);const k=new Wu({antialias:!1,powerPreference:"high-performance",alpha:!0});y.current=k,k.outputColorSpace=an,k.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),k.setClearColor(0,l?0:1),k.domElement.style.width="100%",k.domElement.style.height="100%",k.domElement.style.display="block",C.appendChild(k.domElement);const V=new hp,fe=()=>{const I=C.clientWidth||1,Y=C.clientHeight||1;k.setSize(I,Y,!1),Z.uniforms.uCanvas.value.set(I,Y)};if(fe(),"ResizeObserver"in window){const I=new ResizeObserver(fe);I.observe(C),A.current=I}else window.addEventListener("resize",fe);const _e=()=>{const I=V.getDelta(),Y=V.elapsedTime;Z.uniforms.uTime.value=Y;const me=(L.current%360+U.current*Y)*Math.PI/180,Q=Math.cos(me),ce=Math.sin(me);Z.uniforms.uRot.value.set(Q,ce);const le=P.current,Se=O.current,Te=Math.min(1,I*w.current);le.lerp(Se,Te),Z.uniforms.uPointer.value.copy(le),k.render(B,X),D.current=requestAnimationFrame(_e)};return D.current=requestAnimationFrame(_e),()=>{D.current!==null&&cancelAnimationFrame(D.current),A.current?A.current.disconnect():window.removeEventListener("resize",fe),W.dispose(),Z.dispose(),k.dispose(),k.forceContextLoss(),k.domElement&&k.domElement.parentElement===C&&C.removeChild(k.domElement)}},[S,h,E,v,p,x,_,f,i,l,d]),Le.useEffect(()=>{const C=R.current,B=y.current;if(!C)return;L.current=t,U.current=c,C.uniforms.uSpeed.value=i,C.uniforms.uScale.value=f,C.uniforms.uFrequency.value=h,C.uniforms.uWarpStrength.value=d,C.uniforms.uMouseInfluence.value=p,C.uniforms.uParallax.value=_,C.uniforms.uNoise.value=x,C.uniforms.uIterations.value=v,C.uniforms.uIntensity.value=E,C.uniforms.uBandWidth.value=S;const X=G=>{const Z=G.replace("#","").trim(),F=Z.length===3?[parseInt(Z[0]+Z[0],16),parseInt(Z[1]+Z[1],16),parseInt(Z[2]+Z[2],16)]:[parseInt(Z.slice(0,2),16),parseInt(Z.slice(2,4),16),parseInt(Z.slice(4,6),16)];return new te(F[0]/255,F[1]/255,F[2]/255)},W=(a||[]).filter(Boolean).slice(0,Yu).map(X);for(let G=0;G<Yu;G++){const Z=C.uniforms.uColors.value[G];G<W.length?Z.copy(W[G]):Z.set(0,0,0)}C.uniforms.uColorCount.value=W.length,C.uniforms.uTransparent.value=l?1:0,B&&B.setClearColor(0,l?0:1)},[t,c,i,f,h,d,p,_,x,v,E,S,a,l]),Le.useEffect(()=>{const C=R.current,B=M.current;if(!C||!B)return;const X=W=>{const G=B.getBoundingClientRect(),Z=(W.clientX-G.left)/(G.width||1)*2-1,F=-((W.clientY-G.top)/(G.height||1)*2-1);O.current.set(Z,F)};return B.addEventListener("pointermove",X),()=>{B.removeEventListener("pointermove",X)}},[]),qn.jsx("div",{ref:M,className:`color-bends-container ${r}`,style:e})}function Hl(r){let e=r[0],t=r[1],i=r[2];return Math.sqrt(e*e+t*t+i*i)}function Ap(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r}function BC(r,e,t,i){return r[0]=e,r[1]=t,r[2]=i,r}function Bv(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r}function Iv(r,e,t){return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r}function IC(r,e,t){return r[0]=e[0]*t[0],r[1]=e[1]*t[1],r[2]=e[2]*t[2],r}function HC(r,e,t){return r[0]=e[0]/t[0],r[1]=e[1]/t[1],r[2]=e[2]/t[2],r}function Rp(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}function GC(r,e){let t=e[0]-r[0],i=e[1]-r[1],a=e[2]-r[2];return Math.sqrt(t*t+i*i+a*a)}function VC(r,e){let t=e[0]-r[0],i=e[1]-r[1],a=e[2]-r[2];return t*t+i*i+a*a}function Hv(r){let e=r[0],t=r[1],i=r[2];return e*e+t*t+i*i}function kC(r,e){return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r}function XC(r,e){return r[0]=1/e[0],r[1]=1/e[1],r[2]=1/e[2],r}function wp(r,e){let t=e[0],i=e[1],a=e[2],l=t*t+i*i+a*a;return l>0&&(l=1/Math.sqrt(l)),r[0]=e[0]*l,r[1]=e[1]*l,r[2]=e[2]*l,r}function Gv(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function Vv(r,e,t){let i=e[0],a=e[1],l=e[2],c=t[0],f=t[1],h=t[2];return r[0]=a*h-l*f,r[1]=l*c-i*h,r[2]=i*f-a*c,r}function WC(r,e,t,i){let a=e[0],l=e[1],c=e[2];return r[0]=a+i*(t[0]-a),r[1]=l+i*(t[1]-l),r[2]=c+i*(t[2]-c),r}function YC(r,e,t,i,a){const l=Math.exp(-i*a);let c=e[0],f=e[1],h=e[2];return r[0]=t[0]+(c-t[0])*l,r[1]=t[1]+(f-t[1])*l,r[2]=t[2]+(h-t[2])*l,r}function qC(r,e,t){let i=e[0],a=e[1],l=e[2],c=t[3]*i+t[7]*a+t[11]*l+t[15];return c=c||1,r[0]=(t[0]*i+t[4]*a+t[8]*l+t[12])/c,r[1]=(t[1]*i+t[5]*a+t[9]*l+t[13])/c,r[2]=(t[2]*i+t[6]*a+t[10]*l+t[14])/c,r}function jC(r,e,t){let i=e[0],a=e[1],l=e[2],c=t[3]*i+t[7]*a+t[11]*l+t[15];return c=c||1,r[0]=(t[0]*i+t[4]*a+t[8]*l)/c,r[1]=(t[1]*i+t[5]*a+t[9]*l)/c,r[2]=(t[2]*i+t[6]*a+t[10]*l)/c,r}function ZC(r,e,t){let i=e[0],a=e[1],l=e[2];return r[0]=i*t[0]+a*t[3]+l*t[6],r[1]=i*t[1]+a*t[4]+l*t[7],r[2]=i*t[2]+a*t[5]+l*t[8],r}function KC(r,e,t){let i=e[0],a=e[1],l=e[2],c=t[0],f=t[1],h=t[2],d=t[3],p=f*l-h*a,_=h*i-c*l,x=c*a-f*i,v=f*x-h*_,E=h*p-c*x,S=c*_-f*p,M=d*2;return p*=M,_*=M,x*=M,v*=2,E*=2,S*=2,r[0]=i+p+v,r[1]=a+_+E,r[2]=l+x+S,r}const QC=(function(){const r=[0,0,0],e=[0,0,0];return function(t,i){Ap(r,t),Ap(e,i),wp(r,r),wp(e,e);let a=Gv(r,e);return a>1?0:a<-1?Math.PI:Math.acos(a)}})();function JC(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]}class lr extends Array{constructor(e=0,t=e,i=e){return super(e,t,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,i=e){return e.length?this.copy(e):(BC(this,e,t,i),this)}copy(e){return Ap(this,e),this}add(e,t){return t?Bv(this,e,t):Bv(this,this,e),this}sub(e,t){return t?Iv(this,e,t):Iv(this,this,e),this}multiply(e){return e.length?IC(this,this,e):Rp(this,this,e),this}divide(e){return e.length?HC(this,this,e):Rp(this,this,1/e),this}inverse(e=this){return XC(this,e),this}len(){return Hl(this)}distance(e){return e?GC(this,e):Hl(this)}squaredLen(){return Hv(this)}squaredDistance(e){return e?VC(this,e):Hv(this)}negate(e=this){return kC(this,e),this}cross(e,t){return t?Vv(this,e,t):Vv(this,this,e),this}scale(e){return Rp(this,this,e),this}normalize(){return wp(this,this),this}dot(e){return Gv(this,e)}equals(e){return JC(this,e)}applyMatrix3(e){return ZC(this,this,e),this}applyMatrix4(e){return qC(this,this,e),this}scaleRotateMatrix4(e){return jC(this,this,e),this}applyQuaternion(e){return KC(this,this,e),this}angle(e){return QC(this,e)}lerp(e,t){return WC(this,this,e,t),this}smoothLerp(e,t,i){return YC(this,this,e,t,i),this}clone(){return new lr(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],i=this[1],a=this[2];return this[0]=e[0]*t+e[4]*i+e[8]*a,this[1]=e[1]*t+e[5]*i+e[9]*a,this[2]=e[2]*t+e[6]*i+e[10]*a,this.normalize()}}const kv=new lr;let $C=1,e3=1,Xv=!1;class t3{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=$C++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in t)this.addAttribute(i,t[i])}addAttribute(e,t){if(this.attributes[e]=t,t.id=e3++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:i,type:a})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const l=this.attributes[i];this.gl.bindBuffer(l.target,l.buffer),this.glState.boundBuffer=l.buffer;let c=1;a===35674&&(c=2),a===35675&&(c=3),a===35676&&(c=4);const f=l.size/c,h=c===1?0:c*c*4,d=c===1?0:c*4;for(let p=0;p<c;p++)this.gl.vertexAttribPointer(t+p,f,l.type,l.normalized,l.stride+h,l.offset+p*d),this.gl.enableVertexAttribArray(t+p),this.gl.renderer.vertexAttribDivisor(t+p,l.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((a,{name:l})=>{const c=this.attributes[l];c.needsUpdate&&this.updateAttribute(c)});let i=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Xv)return console.warn("No position buffer data found to compute bounds"),Xv=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||(this.bounds={min:new lr,max:new lr,center:new lr,scale:new lr,radius:1/0});const a=this.bounds.min,l=this.bounds.max,c=this.bounds.center,f=this.bounds.scale;a.set(1/0),l.set(-1/0);for(let h=0,d=t.length;h<d;h+=i){const p=t[h],_=t[h+1],x=t[h+2];a.x=Math.min(p,a.x),a.y=Math.min(_,a.y),a.z=Math.min(x,a.z),l.x=Math.max(p,l.x),l.y=Math.max(_,l.y),l.z=Math.max(x,l.z)}f.sub(l,a),c.add(a,l).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let a=0;for(let l=0,c=t.length;l<c;l+=i)kv.fromArray(t,l),a=Math.max(a,this.bounds.center.squaredDistance(kv));this.bounds.radius=Math.sqrt(a)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let n3=1;const Wv={};class Gl{constructor(e,{vertex:t,fragment:i,uniforms:a={},transparent:l=!1,cullFace:c=e.BACK,frontFace:f=e.CCW,depthTest:h=!0,depthWrite:d=!0,depthFunc:p=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=a,this.id=n3++,t||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=c,this.frontFace=f,this.depthTest=h,this.depthWrite=d,this.depthFunc=p,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:i})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Yv(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Yv(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let c=0;c<i;c++){let f=this.gl.getActiveUniform(this.program,c);this.uniformLocations.set(f,this.gl.getUniformLocation(this.program,f.name));const h=f.name.match(/(\w+)/g);f.uniformName=h[0],f.nameComponents=h.slice(1)}this.attributeLocations=new Map;const a=[],l=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let c=0;c<l;c++){const f=this.gl.getActiveAttrib(this.program,c),h=this.gl.getAttribLocation(this.program,f.name);h!==-1&&(a[h]=f.name,this.attributeLocations.set(f,h))}this.attributeOrder=a.join("")}setBlendFunc(e,t,i,a){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=a,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,i){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=i}setStencilOp(e,t,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((a,l)=>{let c=this.uniforms[l.uniformName];for(const f of l.nameComponents){if(!c)break;if(f in c)c=c[f];else{if(Array.isArray(c.value))break;c=void 0;break}}if(!c)return qv(`Active uniform ${l.name} has not been supplied`);if(c&&c.value===void 0)return qv(`${l.name} uniform is missing a value parameter`);if(c.value.texture)return t=t+1,c.value.update(t),Cp(this.gl,l.type,a,t);if(c.value.length&&c.value[0].texture){const f=[];return c.value.forEach(h=>{t=t+1,h.update(t),f.push(t)}),Cp(this.gl,l.type,a,f)}Cp(this.gl,l.type,a,c.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Cp(r,e,t,i){i=i.length?i3(i):i;const a=r.renderer.state.uniformLocations.get(t);if(i.length)if(a===void 0||a.length!==i.length)r.renderer.state.uniformLocations.set(t,i.slice(0));else{if(r3(a,i))return;a.set?a.set(i):s3(a,i),r.renderer.state.uniformLocations.set(t,a)}else{if(a===i)return;r.renderer.state.uniformLocations.set(t,i)}switch(e){case 5126:return i.length?r.uniform1fv(t,i):r.uniform1f(t,i);case 35664:return r.uniform2fv(t,i);case 35665:return r.uniform3fv(t,i);case 35666:return r.uniform4fv(t,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?r.uniform1iv(t,i):r.uniform1i(t,i);case 35671:case 35667:return r.uniform2iv(t,i);case 35672:case 35668:return r.uniform3iv(t,i);case 35673:case 35669:return r.uniform4iv(t,i);case 35674:return r.uniformMatrix2fv(t,!1,i);case 35675:return r.uniformMatrix3fv(t,!1,i);case 35676:return r.uniformMatrix4fv(t,!1,i)}}function Yv(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function i3(r){const e=r.length,t=r[0].length;if(t===void 0)return r;const i=e*t;let a=Wv[i];a||(Wv[i]=a=new Float32Array(i));for(let l=0;l<e;l++)a.set(r[l],l*t);return a}function r3(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function s3(r,e){for(let t=0,i=r.length;t<i;t++)r[t]=e[t]}let Dp=0;function qv(r){Dp>100||(console.warn(r),Dp++,Dp>100&&console.warn("More than 100 program warnings - stopping logs."))}const Lp=new lr;let a3=1;class Vl{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:i=150,dpr:a=1,alpha:l=!1,depth:c=!0,stencil:f=!1,antialias:h=!1,premultipliedAlpha:d=!1,preserveDrawingBuffer:p=!1,powerPreference:_="default",autoClear:x=!0,webgl:v=2}={}){const E={alpha:l,depth:c,stencil:f,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_};this.dpr=a,this.alpha=l,this.color=!0,this.depth=c,this.stencil=f,this.premultipliedAlpha=d,this.autoClear=x,this.id=a3++,v===2&&(this.gl=e.getContext("webgl2",E)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",E)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,i=0,a=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=i,this.state.viewport.y=a,this.gl.viewport(i,a,e,t))}setScissor(e,t,i=0,a=0){this.gl.scissor(i,a,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,i,a){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===a||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=a,i!==void 0?this.gl.blendFuncSeparate(e,t,i,a):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,i){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,i||0))}setStencilOp(e,t,i){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=i,this.gl.stencilOp(e,t,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,i){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:i,sort:a}){let l=[];if(t&&i&&t.updateFrustum(),e.traverse(c=>{if(!c.visible)return!0;c.draw&&(i&&c.frustumCulled&&t&&!t.frustumIntersectsMesh(c)||l.push(c))}),a){const c=[],f=[],h=[];l.forEach(d=>{d.program.transparent?d.program.depthTest?f.push(d):h.push(d):c.push(d),d.zDepth=0,!(d.renderOrder!==0||!d.program.depthTest||!t)&&(d.worldMatrix.getTranslation(Lp),Lp.applyMatrix4(t.projectionViewMatrix),d.zDepth=Lp.z)}),c.sort(this.sortOpaque),f.sort(this.sortTransparent),h.sort(this.sortUI),l=c.concat(f,h)}return l}render({scene:e,camera:t,target:i=null,update:a=!0,sort:l=!0,frustumCull:c=!0,clear:f}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(f||this.autoClear&&f!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),a&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:c,sort:l}).forEach(d=>{d.draw({camera:t})})}}function o3(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r}function l3(r,e,t,i,a){return r[0]=e,r[1]=t,r[2]=i,r[3]=a,r}function c3(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=t*t+i*i+a*a+l*l;return c>0&&(c=1/Math.sqrt(c)),r[0]=t*c,r[1]=i*c,r[2]=a*c,r[3]=l*c,r}function u3(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]*e[3]}function f3(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function h3(r,e,t){t=t*.5;let i=Math.sin(t);return r[0]=i*e[0],r[1]=i*e[1],r[2]=i*e[2],r[3]=Math.cos(t),r}function jv(r,e,t){let i=e[0],a=e[1],l=e[2],c=e[3],f=t[0],h=t[1],d=t[2],p=t[3];return r[0]=i*p+c*f+a*d-l*h,r[1]=a*p+c*h+l*f-i*d,r[2]=l*p+c*d+i*h-a*f,r[3]=c*p-i*f-a*h-l*d,r}function d3(r,e,t){t*=.5;let i=e[0],a=e[1],l=e[2],c=e[3],f=Math.sin(t),h=Math.cos(t);return r[0]=i*h+c*f,r[1]=a*h+l*f,r[2]=l*h-a*f,r[3]=c*h-i*f,r}function p3(r,e,t){t*=.5;let i=e[0],a=e[1],l=e[2],c=e[3],f=Math.sin(t),h=Math.cos(t);return r[0]=i*h-l*f,r[1]=a*h+c*f,r[2]=l*h+i*f,r[3]=c*h-a*f,r}function m3(r,e,t){t*=.5;let i=e[0],a=e[1],l=e[2],c=e[3],f=Math.sin(t),h=Math.cos(t);return r[0]=i*h+a*f,r[1]=a*h-i*f,r[2]=l*h+c*f,r[3]=c*h-l*f,r}function g3(r,e,t,i){let a=e[0],l=e[1],c=e[2],f=e[3],h=t[0],d=t[1],p=t[2],_=t[3],x,v,E,S,M;return v=a*h+l*d+c*p+f*_,v<0&&(v=-v,h=-h,d=-d,p=-p,_=-_),1-v>1e-6?(x=Math.acos(v),E=Math.sin(x),S=Math.sin((1-i)*x)/E,M=Math.sin(i*x)/E):(S=1-i,M=i),r[0]=S*a+M*h,r[1]=S*l+M*d,r[2]=S*c+M*p,r[3]=S*f+M*_,r}function _3(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=t*t+i*i+a*a+l*l,f=c?1/c:0;return r[0]=-t*f,r[1]=-i*f,r[2]=-a*f,r[3]=l*f,r}function v3(r,e){return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=e[3],r}function x3(r,e){let t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),r[3]=.5*i,i=.5/i,r[0]=(e[5]-e[7])*i,r[1]=(e[6]-e[2])*i,r[2]=(e[1]-e[3])*i;else{let a=0;e[4]>e[0]&&(a=1),e[8]>e[a*3+a]&&(a=2);let l=(a+1)%3,c=(a+2)%3;i=Math.sqrt(e[a*3+a]-e[l*3+l]-e[c*3+c]+1),r[a]=.5*i,i=.5/i,r[3]=(e[l*3+c]-e[c*3+l])*i,r[l]=(e[l*3+a]+e[a*3+l])*i,r[c]=(e[c*3+a]+e[a*3+c])*i}return r}function y3(r,e,t="YXZ"){let i=Math.sin(e[0]*.5),a=Math.cos(e[0]*.5),l=Math.sin(e[1]*.5),c=Math.cos(e[1]*.5),f=Math.sin(e[2]*.5),h=Math.cos(e[2]*.5);return t==="XYZ"?(r[0]=i*c*h+a*l*f,r[1]=a*l*h-i*c*f,r[2]=a*c*f+i*l*h,r[3]=a*c*h-i*l*f):t==="YXZ"?(r[0]=i*c*h+a*l*f,r[1]=a*l*h-i*c*f,r[2]=a*c*f-i*l*h,r[3]=a*c*h+i*l*f):t==="ZXY"?(r[0]=i*c*h-a*l*f,r[1]=a*l*h+i*c*f,r[2]=a*c*f+i*l*h,r[3]=a*c*h-i*l*f):t==="ZYX"?(r[0]=i*c*h-a*l*f,r[1]=a*l*h+i*c*f,r[2]=a*c*f-i*l*h,r[3]=a*c*h+i*l*f):t==="YZX"?(r[0]=i*c*h+a*l*f,r[1]=a*l*h+i*c*f,r[2]=a*c*f-i*l*h,r[3]=a*c*h-i*l*f):t==="XZY"&&(r[0]=i*c*h-a*l*f,r[1]=a*l*h-i*c*f,r[2]=a*c*f+i*l*h,r[3]=a*c*h+i*l*f),r}const S3=o3,M3=l3,E3=u3,T3=c3;class b3 extends Array{constructor(e=0,t=0,i=0,a=1){super(e,t,i,a),this.onChange=()=>{},this._target=this;const l=["0","1","2","3"];return new Proxy(this,{set(c,f){const h=Reflect.set(...arguments);return h&&l.includes(f)&&c.onChange(),h}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return f3(this._target),this.onChange(),this}set(e,t,i,a){return e.length?this.copy(e):(M3(this._target,e,t,i,a),this.onChange(),this)}rotateX(e){return d3(this._target,this._target,e),this.onChange(),this}rotateY(e){return p3(this._target,this._target,e),this.onChange(),this}rotateZ(e){return m3(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return _3(this._target,e),this.onChange(),this}conjugate(e=this._target){return v3(this._target,e),this.onChange(),this}copy(e){return S3(this._target,e),this.onChange(),this}normalize(e=this._target){return T3(this._target,e),this.onChange(),this}multiply(e,t){return t?jv(this._target,e,t):jv(this._target,this._target,e),this.onChange(),this}dot(e){return E3(this._target,e)}fromMatrix3(e){return x3(this._target,e),this.onChange(),this}fromEuler(e,t){return y3(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return h3(this._target,e,t),this.onChange(),this}slerp(e,t){return g3(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const A3=1e-6;function R3(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function w3(r,e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M){return r[0]=e,r[1]=t,r[2]=i,r[3]=a,r[4]=l,r[5]=c,r[6]=f,r[7]=h,r[8]=d,r[9]=p,r[10]=_,r[11]=x,r[12]=v,r[13]=E,r[14]=S,r[15]=M,r}function C3(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function D3(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],p=e[8],_=e[9],x=e[10],v=e[11],E=e[12],S=e[13],M=e[14],y=e[15],D=t*f-i*c,R=t*h-a*c,A=t*d-l*c,L=i*h-a*f,U=i*d-l*f,O=a*d-l*h,P=p*S-_*E,w=p*M-x*E,C=p*y-v*E,B=_*M-x*S,X=_*y-v*S,W=x*y-v*M,G=D*W-R*X+A*B+L*C-U*w+O*P;return G?(G=1/G,r[0]=(f*W-h*X+d*B)*G,r[1]=(a*X-i*W-l*B)*G,r[2]=(S*O-M*U+y*L)*G,r[3]=(x*U-_*O-v*L)*G,r[4]=(h*C-c*W-d*w)*G,r[5]=(t*W-a*C+l*w)*G,r[6]=(M*A-E*O-y*R)*G,r[7]=(p*O-x*A+v*R)*G,r[8]=(c*X-f*C+d*P)*G,r[9]=(i*C-t*X-l*P)*G,r[10]=(E*U-S*A+y*D)*G,r[11]=(_*A-p*U-v*D)*G,r[12]=(f*w-c*B-h*P)*G,r[13]=(t*B-i*w+a*P)*G,r[14]=(S*R-E*L-M*D)*G,r[15]=(p*L-_*R+x*D)*G,r):null}function Zv(r){let e=r[0],t=r[1],i=r[2],a=r[3],l=r[4],c=r[5],f=r[6],h=r[7],d=r[8],p=r[9],_=r[10],x=r[11],v=r[12],E=r[13],S=r[14],M=r[15],y=e*c-t*l,D=e*f-i*l,R=e*h-a*l,A=t*f-i*c,L=t*h-a*c,U=i*h-a*f,O=d*E-p*v,P=d*S-_*v,w=d*M-x*v,C=p*S-_*E,B=p*M-x*E,X=_*M-x*S;return y*X-D*B+R*C+A*w-L*P+U*O}function Kv(r,e,t){let i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],d=e[6],p=e[7],_=e[8],x=e[9],v=e[10],E=e[11],S=e[12],M=e[13],y=e[14],D=e[15],R=t[0],A=t[1],L=t[2],U=t[3];return r[0]=R*i+A*f+L*_+U*S,r[1]=R*a+A*h+L*x+U*M,r[2]=R*l+A*d+L*v+U*y,r[3]=R*c+A*p+L*E+U*D,R=t[4],A=t[5],L=t[6],U=t[7],r[4]=R*i+A*f+L*_+U*S,r[5]=R*a+A*h+L*x+U*M,r[6]=R*l+A*d+L*v+U*y,r[7]=R*c+A*p+L*E+U*D,R=t[8],A=t[9],L=t[10],U=t[11],r[8]=R*i+A*f+L*_+U*S,r[9]=R*a+A*h+L*x+U*M,r[10]=R*l+A*d+L*v+U*y,r[11]=R*c+A*p+L*E+U*D,R=t[12],A=t[13],L=t[14],U=t[15],r[12]=R*i+A*f+L*_+U*S,r[13]=R*a+A*h+L*x+U*M,r[14]=R*l+A*d+L*v+U*y,r[15]=R*c+A*p+L*E+U*D,r}function L3(r,e,t){let i=t[0],a=t[1],l=t[2],c,f,h,d,p,_,x,v,E,S,M,y;return e===r?(r[12]=e[0]*i+e[4]*a+e[8]*l+e[12],r[13]=e[1]*i+e[5]*a+e[9]*l+e[13],r[14]=e[2]*i+e[6]*a+e[10]*l+e[14],r[15]=e[3]*i+e[7]*a+e[11]*l+e[15]):(c=e[0],f=e[1],h=e[2],d=e[3],p=e[4],_=e[5],x=e[6],v=e[7],E=e[8],S=e[9],M=e[10],y=e[11],r[0]=c,r[1]=f,r[2]=h,r[3]=d,r[4]=p,r[5]=_,r[6]=x,r[7]=v,r[8]=E,r[9]=S,r[10]=M,r[11]=y,r[12]=c*i+p*a+E*l+e[12],r[13]=f*i+_*a+S*l+e[13],r[14]=h*i+x*a+M*l+e[14],r[15]=d*i+v*a+y*l+e[15]),r}function U3(r,e,t){let i=t[0],a=t[1],l=t[2];return r[0]=e[0]*i,r[1]=e[1]*i,r[2]=e[2]*i,r[3]=e[3]*i,r[4]=e[4]*a,r[5]=e[5]*a,r[6]=e[6]*a,r[7]=e[7]*a,r[8]=e[8]*l,r[9]=e[9]*l,r[10]=e[10]*l,r[11]=e[11]*l,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function O3(r,e,t,i){let a=i[0],l=i[1],c=i[2],f=Math.hypot(a,l,c),h,d,p,_,x,v,E,S,M,y,D,R,A,L,U,O,P,w,C,B,X,W,G,Z;return Math.abs(f)<A3?null:(f=1/f,a*=f,l*=f,c*=f,h=Math.sin(t),d=Math.cos(t),p=1-d,_=e[0],x=e[1],v=e[2],E=e[3],S=e[4],M=e[5],y=e[6],D=e[7],R=e[8],A=e[9],L=e[10],U=e[11],O=a*a*p+d,P=l*a*p+c*h,w=c*a*p-l*h,C=a*l*p-c*h,B=l*l*p+d,X=c*l*p+a*h,W=a*c*p+l*h,G=l*c*p-a*h,Z=c*c*p+d,r[0]=_*O+S*P+R*w,r[1]=x*O+M*P+A*w,r[2]=v*O+y*P+L*w,r[3]=E*O+D*P+U*w,r[4]=_*C+S*B+R*X,r[5]=x*C+M*B+A*X,r[6]=v*C+y*B+L*X,r[7]=E*C+D*B+U*X,r[8]=_*W+S*G+R*Z,r[9]=x*W+M*G+A*Z,r[10]=v*W+y*G+L*Z,r[11]=E*W+D*G+U*Z,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r)}function N3(r,e){return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function Qv(r,e){let t=e[0],i=e[1],a=e[2],l=e[4],c=e[5],f=e[6],h=e[8],d=e[9],p=e[10];return r[0]=Math.hypot(t,i,a),r[1]=Math.hypot(l,c,f),r[2]=Math.hypot(h,d,p),r}function P3(r){let e=r[0],t=r[1],i=r[2],a=r[4],l=r[5],c=r[6],f=r[8],h=r[9],d=r[10];const p=e*e+t*t+i*i,_=a*a+l*l+c*c,x=f*f+h*h+d*d;return Math.sqrt(Math.max(p,_,x))}const Jv=(function(){const r=[1,1,1];return function(e,t){let i=r;Qv(i,t);let a=1/i[0],l=1/i[1],c=1/i[2],f=t[0]*a,h=t[1]*l,d=t[2]*c,p=t[4]*a,_=t[5]*l,x=t[6]*c,v=t[8]*a,E=t[9]*l,S=t[10]*c,M=f+_+S,y=0;return M>0?(y=Math.sqrt(M+1)*2,e[3]=.25*y,e[0]=(x-E)/y,e[1]=(v-d)/y,e[2]=(h-p)/y):f>_&&f>S?(y=Math.sqrt(1+f-_-S)*2,e[3]=(x-E)/y,e[0]=.25*y,e[1]=(h+p)/y,e[2]=(v+d)/y):_>S?(y=Math.sqrt(1+_-f-S)*2,e[3]=(v-d)/y,e[0]=(h+p)/y,e[1]=.25*y,e[2]=(x+E)/y):(y=Math.sqrt(1+S-f-_)*2,e[3]=(h-p)/y,e[0]=(v+d)/y,e[1]=(x+E)/y,e[2]=.25*y),e}})();function F3(r,e,t,i){let a=Hl([r[0],r[1],r[2]]);const l=Hl([r[4],r[5],r[6]]),c=Hl([r[8],r[9],r[10]]);Zv(r)<0&&(a=-a),t[0]=r[12],t[1]=r[13],t[2]=r[14];const h=r.slice(),d=1/a,p=1/l,_=1/c;h[0]*=d,h[1]*=d,h[2]*=d,h[4]*=p,h[5]*=p,h[6]*=p,h[8]*=_,h[9]*=_,h[10]*=_,Jv(e,h),i[0]=a,i[1]=l,i[2]=c}function z3(r,e,t,i){const a=r,l=e[0],c=e[1],f=e[2],h=e[3],d=l+l,p=c+c,_=f+f,x=l*d,v=l*p,E=l*_,S=c*p,M=c*_,y=f*_,D=h*d,R=h*p,A=h*_,L=i[0],U=i[1],O=i[2];return a[0]=(1-(S+y))*L,a[1]=(v+A)*L,a[2]=(E-R)*L,a[3]=0,a[4]=(v-A)*U,a[5]=(1-(x+y))*U,a[6]=(M+D)*U,a[7]=0,a[8]=(E+R)*O,a[9]=(M-D)*O,a[10]=(1-(x+S))*O,a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function B3(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=t+t,f=i+i,h=a+a,d=t*c,p=i*c,_=i*f,x=a*c,v=a*f,E=a*h,S=l*c,M=l*f,y=l*h;return r[0]=1-_-E,r[1]=p+y,r[2]=x-M,r[3]=0,r[4]=p-y,r[5]=1-d-E,r[6]=v+S,r[7]=0,r[8]=x+M,r[9]=v-S,r[10]=1-d-_,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function I3(r,e,t,i,a){let l=1/Math.tan(e/2),c=1/(i-a);return r[0]=l/t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=l,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(a+i)*c,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*a*i*c,r[15]=0,r}function H3(r,e,t,i,a,l,c){let f=1/(e-t),h=1/(i-a),d=1/(l-c);return r[0]=-2*f,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*h,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*d,r[11]=0,r[12]=(e+t)*f,r[13]=(a+i)*h,r[14]=(c+l)*d,r[15]=1,r}function G3(r,e,t,i){let a=e[0],l=e[1],c=e[2],f=i[0],h=i[1],d=i[2],p=a-t[0],_=l-t[1],x=c-t[2],v=p*p+_*_+x*x;v===0?x=1:(v=1/Math.sqrt(v),p*=v,_*=v,x*=v);let E=h*x-d*_,S=d*p-f*x,M=f*_-h*p;return v=E*E+S*S+M*M,v===0&&(d?f+=1e-6:h?d+=1e-6:h+=1e-6,E=h*x-d*_,S=d*p-f*x,M=f*_-h*p,v=E*E+S*S+M*M),v=1/Math.sqrt(v),E*=v,S*=v,M*=v,r[0]=E,r[1]=S,r[2]=M,r[3]=0,r[4]=_*M-x*S,r[5]=x*E-p*M,r[6]=p*S-_*E,r[7]=0,r[8]=p,r[9]=_,r[10]=x,r[11]=0,r[12]=a,r[13]=l,r[14]=c,r[15]=1,r}function $v(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r[3]=e[3]+t[3],r[4]=e[4]+t[4],r[5]=e[5]+t[5],r[6]=e[6]+t[6],r[7]=e[7]+t[7],r[8]=e[8]+t[8],r[9]=e[9]+t[9],r[10]=e[10]+t[10],r[11]=e[11]+t[11],r[12]=e[12]+t[12],r[13]=e[13]+t[13],r[14]=e[14]+t[14],r[15]=e[15]+t[15],r}function ex(r,e,t){return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r[3]=e[3]-t[3],r[4]=e[4]-t[4],r[5]=e[5]-t[5],r[6]=e[6]-t[6],r[7]=e[7]-t[7],r[8]=e[8]-t[8],r[9]=e[9]-t[9],r[10]=e[10]-t[10],r[11]=e[11]-t[11],r[12]=e[12]-t[12],r[13]=e[13]-t[13],r[14]=e[14]-t[14],r[15]=e[15]-t[15],r}function V3(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r[4]=e[4]*t,r[5]=e[5]*t,r[6]=e[6]*t,r[7]=e[7]*t,r[8]=e[8]*t,r[9]=e[9]*t,r[10]=e[10]*t,r[11]=e[11]*t,r[12]=e[12]*t,r[13]=e[13]*t,r[14]=e[14]*t,r[15]=e[15]*t,r}class qu extends Array{constructor(e=1,t=0,i=0,a=0,l=0,c=1,f=0,h=0,d=0,p=0,_=1,x=0,v=0,E=0,S=0,M=1){return super(e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M){return e.length?this.copy(e):(w3(this,e,t,i,a,l,c,f,h,d,p,_,x,v,E,S,M),this)}translate(e,t=this){return L3(this,t,e),this}rotate(e,t,i=this){return O3(this,i,e,t),this}scale(e,t=this){return U3(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?$v(this,e,t):$v(this,this,e),this}sub(e,t){return t?ex(this,e,t):ex(this,this,e),this}multiply(e,t){return e.length?t?Kv(this,e,t):Kv(this,this,e):V3(this,this,e),this}identity(){return C3(this),this}copy(e){return R3(this,e),this}fromPerspective({fov:e,aspect:t,near:i,far:a}={}){return I3(this,e,t,i,a),this}fromOrthogonal({left:e,right:t,bottom:i,top:a,near:l,far:c}){return H3(this,e,t,i,a,l,c),this}fromQuaternion(e){return B3(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return D3(this,e),this}compose(e,t,i){return z3(this,e,t,i),this}decompose(e,t,i){return F3(this,e,t,i),this}getRotation(e){return Jv(e,this),this}getTranslation(e){return N3(e,this),this}getScaling(e){return Qv(e,this),this}getMaxScaleOnAxis(){return P3(this)}lookAt(e,t,i){return G3(this,e,t,i),this}determinant(){return Zv(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function k3(r,e,t="YXZ"){return t==="XYZ"?(r[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(r[0]=Math.atan2(-e[9],e[10]),r[2]=Math.atan2(-e[4],e[0])):(r[0]=Math.atan2(e[6],e[5]),r[2]=0)):t==="YXZ"?(r[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(r[1]=Math.atan2(e[8],e[10]),r[2]=Math.atan2(e[1],e[5])):(r[1]=Math.atan2(-e[2],e[0]),r[2]=0)):t==="ZXY"?(r[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(r[1]=Math.atan2(-e[2],e[10]),r[2]=Math.atan2(-e[4],e[5])):(r[1]=0,r[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(r[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(r[0]=Math.atan2(e[6],e[10]),r[2]=Math.atan2(e[1],e[0])):(r[0]=0,r[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(r[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(r[0]=Math.atan2(-e[9],e[5]),r[1]=Math.atan2(-e[2],e[0])):(r[0]=0,r[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(r[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(r[0]=Math.atan2(e[6],e[5]),r[1]=Math.atan2(e[8],e[0])):(r[0]=Math.atan2(-e[9],e[10]),r[1]=0)),r}const tx=new qu;class X3 extends Array{constructor(e=0,t=e,i=e,a="YXZ"){super(e,t,i),this.order=a,this.onChange=()=>{},this._target=this;const l=["0","1","2"];return new Proxy(this,{set(c,f){const h=Reflect.set(...arguments);return h&&l.includes(f)&&c.onChange(),h}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return k3(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,i){return tx.fromQuaternion(e),this._target.fromRotationMatrix(tx,t),i||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class W3{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new qu,this.worldMatrix=new qu,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new lr,this.quaternion=new b3,this.scale=new lr(1),this.rotation=new X3,this.up=new lr(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,i=this.children.length;t<i;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,i=this.children.length;t<i;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function Y3(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[4],r[4]=e[5],r[5]=e[6],r[6]=e[8],r[7]=e[9],r[8]=e[10],r}function q3(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=t+t,f=i+i,h=a+a,d=t*c,p=i*c,_=i*f,x=a*c,v=a*f,E=a*h,S=l*c,M=l*f,y=l*h;return r[0]=1-_-E,r[3]=p-y,r[6]=x+M,r[1]=p+y,r[4]=1-d-E,r[7]=v-S,r[2]=x-M,r[5]=v+S,r[8]=1-d-_,r}function j3(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function Z3(r,e,t,i,a,l,c,f,h,d){return r[0]=e,r[1]=t,r[2]=i,r[3]=a,r[4]=l,r[5]=c,r[6]=f,r[7]=h,r[8]=d,r}function K3(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function Q3(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],p=e[8],_=p*c-f*d,x=-p*l+f*h,v=d*l-c*h,E=t*_+i*x+a*v;return E?(E=1/E,r[0]=_*E,r[1]=(-p*i+a*d)*E,r[2]=(f*i-a*c)*E,r[3]=x*E,r[4]=(p*t-a*h)*E,r[5]=(-f*t+a*l)*E,r[6]=v*E,r[7]=(-d*t+i*h)*E,r[8]=(c*t-i*l)*E,r):null}function nx(r,e,t){let i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],d=e[6],p=e[7],_=e[8],x=t[0],v=t[1],E=t[2],S=t[3],M=t[4],y=t[5],D=t[6],R=t[7],A=t[8];return r[0]=x*i+v*c+E*d,r[1]=x*a+v*f+E*p,r[2]=x*l+v*h+E*_,r[3]=S*i+M*c+y*d,r[4]=S*a+M*f+y*p,r[5]=S*l+M*h+y*_,r[6]=D*i+R*c+A*d,r[7]=D*a+R*f+A*p,r[8]=D*l+R*h+A*_,r}function J3(r,e,t){let i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],d=e[6],p=e[7],_=e[8],x=t[0],v=t[1];return r[0]=i,r[1]=a,r[2]=l,r[3]=c,r[4]=f,r[5]=h,r[6]=x*i+v*c+d,r[7]=x*a+v*f+p,r[8]=x*l+v*h+_,r}function $3(r,e,t){let i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],h=e[5],d=e[6],p=e[7],_=e[8],x=Math.sin(t),v=Math.cos(t);return r[0]=v*i+x*c,r[1]=v*a+x*f,r[2]=v*l+x*h,r[3]=v*c-x*i,r[4]=v*f-x*a,r[5]=v*h-x*l,r[6]=d,r[7]=p,r[8]=_,r}function eD(r,e,t){let i=t[0],a=t[1];return r[0]=i*e[0],r[1]=i*e[1],r[2]=i*e[2],r[3]=a*e[3],r[4]=a*e[4],r[5]=a*e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function tD(r,e){let t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],p=e[8],_=e[9],x=e[10],v=e[11],E=e[12],S=e[13],M=e[14],y=e[15],D=t*f-i*c,R=t*h-a*c,A=t*d-l*c,L=i*h-a*f,U=i*d-l*f,O=a*d-l*h,P=p*S-_*E,w=p*M-x*E,C=p*y-v*E,B=_*M-x*S,X=_*y-v*S,W=x*y-v*M,G=D*W-R*X+A*B+L*C-U*w+O*P;return G?(G=1/G,r[0]=(f*W-h*X+d*B)*G,r[1]=(h*C-c*W-d*w)*G,r[2]=(c*X-f*C+d*P)*G,r[3]=(a*X-i*W-l*B)*G,r[4]=(t*W-a*C+l*w)*G,r[5]=(i*C-t*X-l*P)*G,r[6]=(S*O-M*U+y*L)*G,r[7]=(M*A-E*O-y*R)*G,r[8]=(E*U-S*A+y*D)*G,r):null}class nD extends Array{constructor(e=1,t=0,i=0,a=0,l=1,c=0,f=0,h=0,d=1){return super(e,t,i,a,l,c,f,h,d),this}set(e,t,i,a,l,c,f,h,d){return e.length?this.copy(e):(Z3(this,e,t,i,a,l,c,f,h,d),this)}translate(e,t=this){return J3(this,t,e),this}rotate(e,t=this){return $3(this,t,e),this}scale(e,t=this){return eD(this,t,e),this}multiply(e,t){return t?nx(this,e,t):nx(this,this,e),this}identity(){return K3(this),this}copy(e){return j3(this,e),this}fromMatrix4(e){return Y3(this,e),this}fromQuaternion(e){return q3(this,e),this}fromBasis(e,t,i){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]),this}inverse(e=this){return Q3(this,e),this}getNormalMatrix(e){return tD(this,e),this}}let iD=0;class kl extends W3{constructor(e,{geometry:t,program:i,mode:a=e.TRIANGLES,frustumCulled:l=!0,renderOrder:c=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=iD++,this.geometry=t,this.program=i,this.mode=a,this.frustumCulled=l,this.renderOrder=c,this.modelViewMatrix=new qu,this.normalMatrix=new nD,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}}const ix={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function rx(r){r.length===4&&(r=r[0]+r[1]+r[1]+r[2]+r[2]+r[3]+r[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e||console.warn(`Unable to convert hex string ${r} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function rD(r){return r=parseInt(r),[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function sx(r){return r===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(r)?r[0]==="#"?rx(r):ix[r.toLowerCase()]?rx(ix[r.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):rD(r)}class ju extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...sx(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(sx(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class Xl extends t3{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}const sD=r=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,.5,.2]},aD=`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,oD=60,lD=r=>`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
uniform float uQuality;
uniform float uStepScale;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;

  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);

  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.0; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y));
    p.z -= 4.;
    S = p;
    d = p.y-T;

    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05);
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T));
    z += d = (abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4) * uStepScale;
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
    if (i >= uQuality) break;
  }

  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);

  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));

  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`,cD=({color:r="#ffffff",speed:e=1,direction:t="forward",scale:i=1,opacity:a=1,mouseInteractive:l=!0,renderScale:c=.55,maxDpr:f=1.5,targetFps:h=60,iterations:d=60})=>{const p=Le.useRef(null),_=Le.useRef({x:0,y:0}),x=Le.useRef(null);return Le.useEffect(()=>{if(!p.current)return;const v=p.current,E=typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,S=r?1:0,M=r?sD(r):[1,1,1],y=t==="reverse"?-1:1;let D;try{D=new Vl({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,f)})}catch{return}const R=D.gl;if(!R)return;const A=R.canvas;A.style.display="block",A.style.width="100%",A.style.height="100%",v.appendChild(A);const L=new Xl(R),U=new Gl(R,{vertex:aD,fragment:lD(),uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uCustomColor:{value:new Float32Array(M)},uUseCustomColor:{value:S},uSpeed:{value:e*.4},uDirection:{value:y},uScale:{value:i},uOpacity:{value:a},uMouse:{value:new Float32Array([0,0])},uMouseInteractive:{value:l?1:0},uQuality:{value:d},uStepScale:{value:oD/d}}}),O=new kl(R,{geometry:L,program:U}),P=Q=>{if(!l)return;const ce=v.getBoundingClientRect();x.current={x:Q.clientX-ce.left,y:Q.clientY-ce.top}};l&&v.addEventListener("mousemove",P,{passive:!0});let w=!1;const C=()=>{const Q=v.getBoundingClientRect(),ce=Math.max(1,Math.floor(Q.width*c)),le=Math.max(1,Math.floor(Q.height*c));D.setSize(ce,le),A.style.width="100%",A.style.height="100%";const Se=U.uniforms.iResolution.value;Se[0]=R.drawingBufferWidth,Se[1]=R.drawingBufferHeight},B=new ResizeObserver(()=>{w||(w=!0,requestAnimationFrame(()=>{w=!1,C()}))});B.observe(v),C();let X=0,W=!1,G=!0,Z=document.visibilityState!=="hidden";const F=performance.now(),k=1e3/h;let V=0;const fe=()=>{U.uniforms.iTime.value=0,D.render({scene:O})},_e=Q=>{if(W||!G||!Z)return;if(Q-V<k){X=requestAnimationFrame(_e);return}if(V=Q,x.current){_.current=x.current,x.current=null;const le=U.uniforms.uMouse.value;le[0]=_.current.x,le[1]=_.current.y}let ce=(Q-F)*.001;if(t==="pingpong"){const Se=ce%10,Te=Math.floor(ce/10)%2===0,De=Se/10,st=De*De*(3-2*De),it=Te?st*10:(1-st)*10;U.uniforms.uDirection.value=1,U.uniforms.iTime.value=it}else U.uniforms.iTime.value=ce;D.render({scene:O}),X=requestAnimationFrame(_e)},I=Q=>{Q.preventDefault(),W=!0,cancelAnimationFrame(X)},Y=()=>{W=!1,G&&Z&&!E&&(cancelAnimationFrame(X),X=requestAnimationFrame(_e))};A.addEventListener("webglcontextlost",I),A.addEventListener("webglcontextrestored",Y);const se=new IntersectionObserver(([Q])=>{const ce=G;G=Q.isIntersecting,G&&!ce&&!W&&Z&&!E&&(cancelAnimationFrame(X),X=requestAnimationFrame(_e))},{threshold:0});se.observe(v);const me=()=>{Z=document.visibilityState!=="hidden",Z&&G&&!W&&!E?(cancelAnimationFrame(X),V=0,X=requestAnimationFrame(_e)):cancelAnimationFrame(X)};return document.addEventListener("visibilitychange",me),E?fe():X=requestAnimationFrame(_e),()=>{cancelAnimationFrame(X),B.disconnect(),se.disconnect(),document.removeEventListener("visibilitychange",me),A.removeEventListener("webglcontextlost",I),A.removeEventListener("webglcontextrestored",Y),l&&v&&v.removeEventListener("mousemove",P);try{v?.removeChild(A)}catch{}}},[r,e,t,i,a,l,c,f,h,d]),qn.jsx("div",{ref:p,className:"plasma-container"})};function uD({mouseForce:r=20,cursorSize:e=100,isViscous:t=!1,viscous:i=30,iterationsViscous:a=32,iterationsPoisson:l=32,dt:c=.014,BFECC:f=!0,resolution:h=.5,isBounce:d=!1,colors:p=["#5227FF","#FF9FFC","#B497CF"],style:_={},className:x="",autoDemo:v=!0,autoSpeed:E=.5,autoIntensity:S=2.2,takeoverDuration:M=.25,autoResumeDelay:y=1e3,autoRampDuration:D=.6}){const R=Le.useRef(null),A=Le.useRef(null),L=Le.useRef(null),U=Le.useRef(null),O=Le.useRef(null),P=Le.useRef(!0),w=Le.useRef(null);return Le.useEffect(()=>{if(!R.current)return;function C(H){let T;Array.isArray(H)&&H.length>0?H.length===1?T=[H[0],H[0]]:T=H:T=["#ffffff","#ffffff"];const j=T.length,re=new Uint8Array(j*4);for(let de=0;de<j;de++){const He=new ft(T[de]);re[de*4+0]=Math.round(He.r*255),re[de*4+1]=Math.round(He.g*255),re[de*4+2]=Math.round(He.b*255),re[de*4+3]=255}const ve=new z_(re,j,1,Vi);return ve.magFilter=yn,ve.minFilter=yn,ve.wrapS=ir,ve.wrapT=ir,ve.generateMipmaps=!1,ve.needsUpdate=!0,ve}const B=C(p),X=new Bt(0,0,0,0);class W{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(T){this.container=T,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Wu({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new ft(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new hp,this.clock.start()}resize(){if(!this.container)return;const T=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(T.width)),this.height=Math.max(1,Math.floor(T.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const G=new W;class Z{constructor(){this.mouseMoved=!1,this.coords=new ke,this.coords_old=new ke,this.diff=new ke,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ke,this.takeoverTo=new ke,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(T){this.container=T,this.docTarget=T.ownerDocument||null;const j=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);j&&(this.listenerTarget=j,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(T,j){if(!this.container)return!1;const re=this.container.getBoundingClientRect();return re.width===0||re.height===0?!1:T>=re.left&&T<=re.right&&j>=re.top&&j<=re.bottom}updateHoverState(T,j){return this.isHoverInside=this.isPointInside(T,j),this.isHoverInside}setCoords(T,j){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const re=this.container.getBoundingClientRect();if(re.width===0||re.height===0)return;const ve=(T-re.left)/re.width,de=(j-re.top)/re.height;this.coords.set(ve*2-1,-(de*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(T,j){this.coords.set(T,j),this.mouseMoved=!0}onDocumentMouseMove(T){if(this.updateHoverState(T.clientX,T.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const j=this.container.getBoundingClientRect();if(j.width===0||j.height===0)return;const re=(T.clientX-j.left)/j.width,ve=(T.clientY-j.top)/j.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(re*2-1,-(ve*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(T.clientX,T.clientY),this.hasUserControl=!0}}onDocumentTouchStart(T){if(T.touches.length!==1)return;const j=T.touches[0];this.updateHoverState(j.clientX,j.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(j.clientX,j.clientY),this.hasUserControl=!0)}onDocumentTouchMove(T){if(T.touches.length!==1)return;const j=T.touches[0];this.updateHoverState(j.clientX,j.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(j.clientX,j.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const T=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(T>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const j=T*T*(3-2*T);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,j)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new Z;class k{constructor(T,j,re){this.mouse=T,this.manager=j,this.enabled=re.enabled,this.speed=re.speed,this.resumeDelay=re.resumeDelay||3e3,this.rampDurationMs=(re.rampDuration||0)*1e3,this.active=!1,this.current=new ke(0,0),this.target=new ke,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ke,this.pickNewTarget()}pickNewTarget(){const T=Math.random;this.target.set((T()*2-1)*(1-this.margin),(T()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const T=performance.now();if(T-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=T,this.activationTime=T),!this.active)return;this.mouse.isAutoActive=!0;let re=(T-this.lastTime)/1e3;this.lastTime=T,re>.2&&(re=.016);const ve=this._tmpDir.subVectors(this.target,this.current),de=ve.length();if(de<.01){this.pickNewTarget();return}ve.normalize();let He=1;if(this.rampDurationMs>0){const Qe=Math.min(1,(T-this.activationTime)/this.rampDurationMs);He=Qe*Qe*(3-2*Qe)}const Ce=this.speed*re*He,Xe=Math.min(Ce,de);this.current.addScaledVector(ve,Xe),this.mouse.setNormalized(this.current.x,this.current.y)}}const V=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,fe=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,_e=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,I=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy;
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Y=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,se=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,me=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Q=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ce=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,le=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Se{constructor(T){this.props=T||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new _s,this.camera=new Du,this.uniforms&&(this.material=new Bu(this.props.material),this.geometry=new Ir(2,2),this.plane=new nn(this.geometry,this.material),this.scene.add(this.plane))}update(){G.renderer.setRenderTarget(this.props.output||null),G.renderer.render(this.scene,this.camera),G.renderer.setRenderTarget(null)}}class Te extends Se{constructor(T){super({material:{vertexShader:V,fragmentShader:I,uniforms:{boundarySpace:{value:T.cellScale},px:{value:T.cellScale},fboSize:{value:T.fboSize},velocity:{value:T.src.texture},dt:{value:T.dt},isBFECC:{value:!0}}},output:T.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const T=new or,j=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);T.setAttribute("position",new ai(j,3));const re=new Bu({vertexShader:fe,fragmentShader:I,uniforms:this.uniforms});this.line=new Mb(T,re),this.scene.add(this.line)}update({dt:T,isBounce:j,BFECC:re}){this.uniforms.dt.value=T,this.line.visible=j,this.uniforms.isBFECC.value=re,super.update()}}class De extends Se{constructor(T){super({output:T.dst}),this.init(T)}init(T){super.init();const j=new Ir(1,1),re=new Bu({vertexShader:_e,fragmentShader:me,blending:Fh,depthWrite:!1,uniforms:{px:{value:T.cellScale},force:{value:new ke(0,0)},center:{value:new ke(0,0)},scale:{value:new ke(T.cursor_size,T.cursor_size)}}});this.mouse=new nn(j,re),this.scene.add(this.mouse)}update(T){const j=F.diff.x/2*T.mouse_force,re=F.diff.y/2*T.mouse_force,ve=T.cursor_size*T.cellScale.x,de=T.cursor_size*T.cellScale.y,He=Math.min(Math.max(F.coords.x,-1+ve+T.cellScale.x*2),1-ve-T.cellScale.x*2),Ce=Math.min(Math.max(F.coords.y,-1+de+T.cellScale.y*2),1-de-T.cellScale.y*2),Xe=this.mouse.material.uniforms;Xe.force.value.set(j,re),Xe.center.value.set(He,Ce),Xe.scale.value.set(T.cursor_size,T.cursor_size),super.update()}}class st extends Se{constructor(T){super({material:{vertexShader:V,fragmentShader:le,uniforms:{boundarySpace:{value:T.boundarySpace},velocity:{value:T.src.texture},velocity_new:{value:T.dst_.texture},v:{value:T.viscous},px:{value:T.cellScale},dt:{value:T.dt}}},output:T.dst,output0:T.dst_,output1:T.dst}),this.init()}update({viscous:T,iterations:j,dt:re}){let ve,de;this.uniforms.v.value=T;for(let He=0;He<j;He++)He%2===0?(ve=this.props.output0,de=this.props.output1):(ve=this.props.output1,de=this.props.output0),this.uniforms.velocity_new.value=ve.texture,this.props.output=de,this.uniforms.dt.value=re,super.update();return de}}class it extends Se{constructor(T){super({material:{vertexShader:V,fragmentShader:se,uniforms:{boundarySpace:{value:T.boundarySpace},velocity:{value:T.src.texture},px:{value:T.cellScale},dt:{value:T.dt}}},output:T.dst}),this.init()}update({vel:T}){this.uniforms.velocity.value=T.texture,super.update()}}class K extends Se{constructor(T){super({material:{vertexShader:V,fragmentShader:Q,uniforms:{boundarySpace:{value:T.boundarySpace},pressure:{value:T.dst_.texture},divergence:{value:T.src.texture},px:{value:T.cellScale}}},output:T.dst,output0:T.dst_,output1:T.dst}),this.init()}update({iterations:T}){let j,re;for(let ve=0;ve<T;ve++)ve%2===0?(j=this.props.output0,re=this.props.output1):(j=this.props.output1,re=this.props.output0),this.uniforms.pressure.value=j.texture,this.props.output=re,super.update();return re}}class ht extends Se{constructor(T){super({material:{vertexShader:V,fragmentShader:ce,uniforms:{boundarySpace:{value:T.boundarySpace},pressure:{value:T.src_p.texture},velocity:{value:T.src_v.texture},px:{value:T.cellScale},dt:{value:T.dt}}},output:T.dst}),this.init()}update({vel:T,pressure:j}){this.uniforms.velocity.value=T.texture,this.uniforms.pressure.value=j.texture,super.update()}}class je{constructor(T){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...T},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ke,this.cellScale=new ke,this.boundarySpace=new ke,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Za:Gi}createAllFBO(){const j={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:yn,magFilter:yn,wrapS:ir,wrapT:ir};for(let re in this.fbos)this.fbos[re]=new Ei(this.fboSize.x,this.fboSize.y,j)}createShaderPass(){this.advection=new Te({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new De({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new st({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new it({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new K({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const T=Math.max(1,Math.round(this.options.resolution*G.width)),j=Math.max(1,Math.round(this.options.resolution*G.height)),re=1/T,ve=1/j;this.cellScale.set(re,ve),this.fboSize.set(T,j)}resize(){this.calcSize();for(let T in this.fbos)this.fbos[T].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let T=this.fbos.vel_1;this.options.isViscous&&(T=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:T});const j=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:T,pressure:j})}}class Ye{constructor(){this.init()}init(){this.simulation=new je,this.scene=new _s,this.camera=new Du,this.output=new nn(new Ir(2,2),new Bu({vertexShader:V,fragmentShader:Y,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ke},palette:{value:B},bgColor:{value:X}}})),this.scene.add(this.output)}addScene(T){this.scene.add(T)}resize(){this.simulation.resize()}render(){G.renderer.setRenderTarget(null),G.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Pe{constructor(T){this.props=T,G.init(T.$wrapper),F.init(T.$wrapper),F.autoIntensity=T.autoIntensity,F.takeoverDuration=T.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new k(F,this,{enabled:T.autoDemo,speed:T.autoSpeed,resumeDelay:T.autoResumeDelay,rampDuration:T.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():P.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(G.renderer.domElement),this.output=new Ye}resize(){G.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),G.update(),this.output.update()}loop(){this.running&&(this.render(),U.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,U.current&&(cancelAnimationFrame(U.current),U.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),G.renderer){const T=G.renderer.domElement;T&&T.parentNode&&T.parentNode.removeChild(T),G.renderer.dispose(),G.renderer.forceContextLoss()}}catch{}}}const lt=R.current;lt.style.position=lt.style.position||"relative",lt.style.overflow=lt.style.overflow||"hidden";const Ne=new Pe({$wrapper:lt,autoDemo:v,autoSpeed:E,autoIntensity:S,takeoverDuration:M,autoResumeDelay:y,autoRampDuration:D});A.current=Ne,(()=>{if(!A.current)return;const H=A.current.output?.simulation;if(!H)return;const T=H.options.resolution;Object.assign(H.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:a,iterations_poisson:l,dt:c,BFECC:f,resolution:h,isBounce:d}),h!==T&&H.resize()})(),Ne.start();const Zt=new IntersectionObserver(H=>{const T=H[0],j=T.isIntersecting&&T.intersectionRatio>0;P.current=j,A.current&&(j&&!document.hidden?A.current.start():A.current.pause())},{threshold:[0,.01,.1]});Zt.observe(lt),O.current=Zt;const Jt=new ResizeObserver(()=>{A.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{A.current&&A.current.resize()}))});return Jt.observe(lt),L.current=Jt,()=>{if(U.current&&cancelAnimationFrame(U.current),L.current)try{L.current.disconnect()}catch{}if(O.current)try{O.current.disconnect()}catch{}A.current&&A.current.dispose(),A.current=null}},[f,e,c,d,t,l,a,r,h,i,p,v,E,S,M,y,D]),Le.useEffect(()=>{const C=A.current;if(!C)return;const B=C.output?.simulation;if(!B)return;const X=B.options.resolution;Object.assign(B.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:a,iterations_poisson:l,dt:c,BFECC:f,resolution:h,isBounce:d}),C.autoDriver&&(C.autoDriver.enabled=v,C.autoDriver.speed=E,C.autoDriver.resumeDelay=y,C.autoDriver.rampDurationMs=D*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=S,C.autoDriver.mouse.takeoverDuration=M)),h!==X&&B.resize()},[r,e,t,i,a,l,c,f,h,d,v,E,S,M,y,D]),qn.jsx("div",{ref:R,className:`liquid-ether-container ${x||""}`,style:_})}const fD=({baseColor:r=[.1,.1,.1],speed:e=.2,amplitude:t=.3,frequencyX:i=3,frequencyY:a=3,interactive:l=!0,...c})=>{const f=Le.useRef(null);return Le.useEffect(()=>{if(!f.current)return;const h=f.current,d=new Vl({antialias:!0}),p=d.gl;p.clearColor(1,1,1,1);const _=`
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,x=`
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          for (float i = 1.0; i < 10.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 20.0);
          float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
          uv += (diff / (dist + 0.0001)) * ripple * falloff;

          vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          return vec4(color, 1.0);
      }

      void main() {
          vec4 col = vec4(0.0);
          int samples = 0;
          for (int i = -1; i <= 1; i++){
              for (int j = -1; j <= 1; j++){
                  vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
                  col += renderImage(vUv + offset);
                  samples++;
              }
          }
          gl_FragColor = col / float(samples);
      }
    `,v=new Xl(p),E=new Gl(p,{vertex:_,fragment:x,uniforms:{uTime:{value:0},uResolution:{value:new Float32Array([p.canvas.width,p.canvas.height,p.canvas.width/p.canvas.height])},uBaseColor:{value:new Float32Array(r)},uAmplitude:{value:t},uFrequencyX:{value:i},uFrequencyY:{value:a},uMouse:{value:new Float32Array([0,0])}}}),S=new kl(p,{geometry:v,program:E});function M(){d.setSize(h.offsetWidth*1,h.offsetHeight*1);const U=E.uniforms.uResolution.value;U[0]=p.canvas.width,U[1]=p.canvas.height,U[2]=p.canvas.width/p.canvas.height}window.addEventListener("resize",M),M();function y(L){const U=h.getBoundingClientRect(),O=(L.clientX-U.left)/U.width,P=1-(L.clientY-U.top)/U.height,w=E.uniforms.uMouse.value;w[0]=O,w[1]=P}function D(L){if(L.touches.length>0){const U=L.touches[0],O=h.getBoundingClientRect(),P=(U.clientX-O.left)/O.width,w=1-(U.clientY-O.top)/O.height,C=E.uniforms.uMouse.value;C[0]=P,C[1]=w}}l&&(h.addEventListener("mousemove",y),h.addEventListener("touchmove",D));let R;function A(L){R=requestAnimationFrame(A),E.uniforms.uTime.value=L*.001*e,d.render({scene:S})}return R=requestAnimationFrame(A),h.appendChild(p.canvas),()=>{cancelAnimationFrame(R),window.removeEventListener("resize",M),l&&(h.removeEventListener("mousemove",y),h.removeEventListener("touchmove",D)),p.canvas.parentElement&&p.canvas.parentElement.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}},[r,e,t,i,a,l]),qn.jsx("div",{ref:f,className:"liquidChrome-container",...c})},hD=({direction:r="right",speed:e=1,borderColor:t="#999",squareSize:i=40,hoverFillColor:a="#222",shape:l="square",hoverTrailAmount:c=0,className:f=""})=>{const h=Le.useRef(null),d=Le.useRef(null),p=Le.useRef(),_=Le.useRef(),x=Le.useRef({x:0,y:0}),v=Le.useRef(null),E=Le.useRef([]),S=Le.useRef(new Map);return Le.useEffect(()=>{const M=h.current,y=M.getContext("2d"),D=l==="hexagon",R=l==="triangle",A=i*1.5,L=i*Math.sqrt(3),U=()=>{M.width=M.offsetWidth,M.height=M.offsetHeight,p.current=Math.ceil(M.width/i)+1,_.current=Math.ceil(M.height/i)+1};window.addEventListener("resize",U),U();const O=(I,Y,se)=>{y.beginPath();for(let me=0;me<6;me++){const Q=Math.PI/3*me,ce=I+se*Math.cos(Q),le=Y+se*Math.sin(Q);me===0?y.moveTo(ce,le):y.lineTo(ce,le)}y.closePath()},P=(I,Y,se)=>{y.beginPath(),y.arc(I,Y,se/2,0,Math.PI*2),y.closePath()},w=(I,Y,se,me)=>{y.beginPath(),me?(y.moveTo(I,Y+se/2),y.lineTo(I+se/2,Y-se/2),y.lineTo(I-se/2,Y-se/2)):(y.moveTo(I,Y-se/2),y.lineTo(I+se/2,Y+se/2),y.lineTo(I-se/2,Y+se/2)),y.closePath()},C=()=>{if(y.clearRect(0,0,M.width,M.height),D){const Y=Math.floor(x.current.x/A),se=(x.current.x%A+A)%A,me=(x.current.y%L+L)%L,Q=Math.ceil(M.width/A)+3,ce=Math.ceil(M.height/L)+3;for(let le=-2;le<Q;le++)for(let Se=-2;Se<ce;Se++){const Te=le*A+se,De=Se*L+((le+Y)%2!==0?L/2:0)+me,st=`${le},${Se}`,it=S.current.get(st);it&&(y.globalAlpha=it,O(Te,De,i),y.fillStyle=a,y.fill(),y.globalAlpha=1),O(Te,De,i),y.strokeStyle=t,y.stroke()}}else if(R){const Y=i/2,se=Math.floor(x.current.x/Y),me=Math.floor(x.current.y/i),Q=(x.current.x%Y+Y)%Y,ce=(x.current.y%i+i)%i,le=Math.ceil(M.width/Y)+4,Se=Math.ceil(M.height/i)+4;for(let Te=-2;Te<le;Te++)for(let De=-2;De<Se;De++){const st=Te*Y+Q,it=De*i+i/2+ce,K=((Te+se+De+me)%2+2)%2!==0,ht=`${Te},${De}`,je=S.current.get(ht);je&&(y.globalAlpha=je,w(st,it,i,K),y.fillStyle=a,y.fill(),y.globalAlpha=1),w(st,it,i,K),y.strokeStyle=t,y.stroke()}}else if(l==="circle"){const Y=(x.current.x%i+i)%i,se=(x.current.y%i+i)%i,me=Math.ceil(M.width/i)+3,Q=Math.ceil(M.height/i)+3;for(let ce=-2;ce<me;ce++)for(let le=-2;le<Q;le++){const Se=ce*i+i/2+Y,Te=le*i+i/2+se,De=`${ce},${le}`,st=S.current.get(De);st&&(y.globalAlpha=st,P(Se,Te,i),y.fillStyle=a,y.fill(),y.globalAlpha=1),P(Se,Te,i),y.strokeStyle=t,y.stroke()}}else{const Y=(x.current.x%i+i)%i,se=(x.current.y%i+i)%i,me=Math.ceil(M.width/i)+3,Q=Math.ceil(M.height/i)+3;for(let ce=-2;ce<me;ce++)for(let le=-2;le<Q;le++){const Se=ce*i+Y,Te=le*i+se,De=`${ce},${le}`,st=S.current.get(De);st&&(y.globalAlpha=st,y.fillStyle=a,y.fillRect(Se,Te,i,i),y.globalAlpha=1),y.strokeStyle=t,y.strokeRect(Se,Te,i,i)}}const I=y.createRadialGradient(M.width/2,M.height/2,0,M.width/2,M.height/2,Math.sqrt(M.width**2+M.height**2)/2);I.addColorStop(0,"rgba(0, 0, 0, 0)"),y.fillStyle=I,y.fillRect(0,0,M.width,M.height)},B=()=>{const I=Math.max(e,.1),Y=D?A*2:i,se=D?L:R?i*2:i;switch(r){case"right":x.current.x=(x.current.x-I+Y)%Y;break;case"left":x.current.x=(x.current.x+I+Y)%Y;break;case"up":x.current.y=(x.current.y+I+se)%se;break;case"down":x.current.y=(x.current.y-I+se)%se;break;case"diagonal":x.current.x=(x.current.x-I+Y)%Y,x.current.y=(x.current.y-I+se)%se;break}X(),C(),d.current=requestAnimationFrame(B)},X=()=>{const I=new Map;if(v.current&&I.set(`${v.current.x},${v.current.y}`,1),c>0)for(let Y=0;Y<E.current.length;Y++){const se=E.current[Y],me=`${se.x},${se.y}`;I.has(me)||I.set(me,(E.current.length-Y)/(E.current.length+1))}for(const[Y]of I)S.current.has(Y)||S.current.set(Y,0);for(const[Y,se]of S.current){const me=I.get(Y)||0,Q=se+(me-se)*.15;Q<.005?S.current.delete(Y):S.current.set(Y,Q)}},W=I=>{const Y=M.getBoundingClientRect(),se=I.clientX-Y.left,me=I.clientY-Y.top;if(D){const Q=Math.floor(x.current.x/A),ce=(x.current.x%A+A)%A,le=(x.current.y%L+L)%L,Se=se-ce,Te=me-le,De=Math.round(Se/A),st=(De+Q)%2!==0?L/2:0,it=Math.round((Te-st)/L);(!v.current||v.current.x!==De||v.current.y!==it)&&(v.current&&c>0&&(E.current.unshift({...v.current}),E.current.length>c&&(E.current.length=c)),v.current={x:De,y:it})}else if(R){const Q=i/2,ce=(x.current.x%Q+Q)%Q,le=(x.current.y%i+i)%i,Se=se-ce,Te=me-le,De=Math.round(Se/Q),st=Math.floor(Te/i);(!v.current||v.current.x!==De||v.current.y!==st)&&(v.current&&c>0&&(E.current.unshift({...v.current}),E.current.length>c&&(E.current.length=c)),v.current={x:De,y:st})}else if(l==="circle"){const Q=(x.current.x%i+i)%i,ce=(x.current.y%i+i)%i,le=se-Q,Se=me-ce,Te=Math.round(le/i),De=Math.round(Se/i);(!v.current||v.current.x!==Te||v.current.y!==De)&&(v.current&&c>0&&(E.current.unshift({...v.current}),E.current.length>c&&(E.current.length=c)),v.current={x:Te,y:De})}else{const Q=(x.current.x%i+i)%i,ce=(x.current.y%i+i)%i,le=se-Q,Se=me-ce,Te=Math.floor(le/i),De=Math.floor(Se/i);(!v.current||v.current.x!==Te||v.current.y!==De)&&(v.current&&c>0&&(E.current.unshift({...v.current}),E.current.length>c&&(E.current.length=c)),v.current={x:Te,y:De})}},G=()=>{v.current&&c>0&&(E.current.unshift({...v.current}),E.current.length>c&&(E.current.length=c)),v.current=null};M.addEventListener("mousemove",W),M.addEventListener("mouseleave",G);let Z=!1,F=!document.hidden;const k=()=>{Z&&F&&!d.current&&(d.current=requestAnimationFrame(B))},V=()=>{d.current&&(cancelAnimationFrame(d.current),d.current=null)},fe=new IntersectionObserver(([I])=>{Z=I.isIntersecting,Z?k():V()},{threshold:0});fe.observe(M);const _e=()=>{F=!document.hidden,F?k():V()};return document.addEventListener("visibilitychange",_e),k(),()=>{window.removeEventListener("resize",U),V(),fe.disconnect(),document.removeEventListener("visibilitychange",_e),M.removeEventListener("mousemove",W),M.removeEventListener("mouseleave",G)}},[r,e,t,a,i,l,c]),qn.jsx("canvas",{ref:h,className:`shapegrid-canvas ${f}`})};class dD extends _s{constructor(){super();const e=new mo;e.deleteAttribute("uv");const t=new cp({side:wn}),i=new cp,a=new K_(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);const l=new nn(e,t);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const c=new G_(e,i,6),f=new In;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),c.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),c.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),c.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),c.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),c.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),c.setMatrixAt(5,f.matrix),this.add(c);const h=new nn(e,Eo(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const d=new nn(e,Eo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new nn(e,Eo(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new nn(e,Eo(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const x=new nn(e,Eo(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const v=new nn(e,Eo(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Eo(r){return new Tb({color:0,emissive:16777215,emissiveIntensity:r})}class pD{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#n;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#E;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#s=!1;#i=!1;isDisposed=!1;#a;#o;#l;#r=new Ub;#t={elapsed:0,delta:0};#f;constructor(e){this.#e={...e},this.#m(),this.#g(),this.#_(),this.resize(),this.#v()}#m(){this.camera=new li,this.cameraFov=this.camera.fov}#g(){this.scene=new _s}#_(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const e={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new Wu(e),this.renderer.outputColorSpace=an}#v(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#o=new ResizeObserver(this.#c.bind(this)),this.#o.observe(this.canvas.parentNode))),this.#a=new IntersectionObserver(this.#y.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#a.observe(this.canvas),document.addEventListener("visibilitychange",this.#h.bind(this))}#x(){window.removeEventListener("resize",this.#c.bind(this)),this.#o?.disconnect(),this.#a?.disconnect(),document.removeEventListener("visibilitychange",this.#h.bind(this))}#y(e){this.#s=e[0].isIntersecting,this.#s?this.#p():this.#u()}#h(){this.#s&&(document.hidden?this.#u():this.#p())}#c(){this.#l&&clearTimeout(this.#l),this.#l=setTimeout(this.resize.bind(this),100)}resize(){let e,t;this.#e.size instanceof Object?(e=this.#e.size.width,t=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(e=this.canvas.parentNode.offsetWidth,t=this.canvas.parentNode.offsetHeight):(e=window.innerWidth,t=window.innerHeight),this.size.width=e,this.size.height=t,this.size.ratio=e/t,this.#S(),this.#M(),this.onAfterResize(this.size)}#S(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#d(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#d(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#d(e){const t=Math.tan(Od.degToRad(this.cameraFov/2))/(this.camera.aspect/e);this.camera.fov=2*Od.radToDeg(Math.atan(t))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const e=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(e/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#M(){this.renderer.setSize(this.size.width,this.size.height),this.#n?.setSize(this.size.width,this.size.height);let e=window.devicePixelRatio;this.maxPixelRatio&&e>this.maxPixelRatio?e=this.maxPixelRatio:this.minPixelRatio&&e<this.minPixelRatio&&(e=this.minPixelRatio),this.renderer.setPixelRatio(e),this.size.pixelRatio=e}get postprocessing(){return this.#n}set postprocessing(e){this.#n=e,this.render=e.render.bind(e)}#p(){if(this.#i)return;const e=()=>{this.#f=requestAnimationFrame(e),this.#r.update(),this.#t.delta=this.#r.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#i=!0,this.#r.reset(),e()}#u(){this.#i&&(cancelAnimationFrame(this.#f),this.#i=!1)}#E(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(t=>{const i=e.material[t];i!==null&&typeof i=="object"&&typeof i.dispose=="function"&&i.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){this.#x(),this.#u(),this.#r.dispose(),this.clear(),this.#n?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.isDisposed=!0}}const _r=new Map,cr=new ke;let Up=!1;function mD(r){const e={position:new ke,nPosition:new ke,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...r};return(function(t,i){_r.has(t)||(_r.set(t,i),Up||(document.body.addEventListener("pointermove",ax),document.body.addEventListener("pointerleave",lx),document.body.addEventListener("click",ox),document.body.addEventListener("touchstart",cx,{passive:!1}),document.body.addEventListener("touchmove",ux,{passive:!1}),document.body.addEventListener("touchend",Zu,{passive:!1}),document.body.addEventListener("touchcancel",Zu,{passive:!1}),Up=!0))})(r.domElement,e),e.dispose=()=>{const t=r.domElement;_r.delete(t),_r.size===0&&(document.body.removeEventListener("pointermove",ax),document.body.removeEventListener("pointerleave",lx),document.body.removeEventListener("click",ox),document.body.removeEventListener("touchstart",cx),document.body.removeEventListener("touchmove",ux),document.body.removeEventListener("touchend",Zu),document.body.removeEventListener("touchcancel",Zu),Up=!1)},e}function ax(r){cr.x=r.clientX,cr.y=r.clientY,gD()}function gD(){for(const[r,e]of _r){const t=r.getBoundingClientRect();Qu(t)?(Ku(e,t),e.hover||(e.hover=!0,e.onEnter(e)),e.onMove(e)):e.hover&&!e.touching&&(e.hover=!1,e.onLeave(e))}}function ox(r){cr.x=r.clientX,cr.y=r.clientY;for(const[e,t]of _r){const i=e.getBoundingClientRect();Ku(t,i),Qu(i)&&t.onClick(t)}}function lx(){for(const r of _r.values())r.hover&&(r.hover=!1,r.onLeave(r))}function cx(r){if(r.touches.length>0){r.preventDefault(),cr.x=r.touches[0].clientX,cr.y=r.touches[0].clientY;for(const[e,t]of _r){const i=e.getBoundingClientRect();Qu(i)&&(t.touching=!0,Ku(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t))}}}function ux(r){if(r.touches.length>0){r.preventDefault(),cr.x=r.touches[0].clientX,cr.y=r.touches[0].clientY;for(const[e,t]of _r){const i=e.getBoundingClientRect();Ku(t,i),Qu(i)?(t.hover||(t.hover=!0,t.touching=!0,t.onEnter(t)),t.onMove(t)):t.hover&&t.touching&&t.onMove(t)}}}function Zu(){for(const[,r]of _r)r.touching&&(r.touching=!1,r.hover&&(r.hover=!1,r.onLeave(r)))}function Ku(r,e){const{position:t,nPosition:i}=r;t.x=cr.x-e.left,t.y=cr.y-e.top,i.x=t.x/e.width*2-1,i.y=-t.y/e.height*2+1}function Qu(r){const{x:e,y:t}=cr,{left:i,top:a,width:l,height:c}=r;return e>=i&&e<=i+l&&t>=a&&t<=a+c}const{randFloat:_D,randFloatSpread:Op}=Od,Np=new te,pn=new te,Ju=new te,vD=new te,mn=new te,$u=new te,To=new te,ys=new te,ef=new te,fx=new te;class xD{constructor(e){this.config=e,this.positionData=new Float32Array(3*e.count).fill(0),this.velocityData=new Float32Array(3*e.count).fill(0),this.sizeData=new Float32Array(e.count).fill(1),this.center=new te,this.#e(),this.setSizes()}#e(){const{config:e,positionData:t}=this;this.center.toArray(t,0);for(let i=1;i<e.count;i++){const a=3*i;t[a]=Op(2*e.maxX),t[a+1]=Op(2*e.maxY),t[a+2]=Op(2*e.maxZ)}}setSizes(){const{config:e,sizeData:t}=this;t[0]=e.size0;for(let i=1;i<e.count;i++)t[i]=_D(e.minSize,e.maxSize)}update(e){const{config:t,center:i,positionData:a,sizeData:l,velocityData:c}=this;let f=0;t.controlSphere0&&(f=1,Np.fromArray(a,0),Np.lerp(i,.1).toArray(a,0),vD.set(0,0,0).toArray(c,0));for(let h=f;h<t.count;h++){const d=3*h;pn.fromArray(a,d),mn.fromArray(c,d),mn.y-=e.delta*t.gravity*l[h],mn.multiplyScalar(t.friction),mn.clampLength(0,t.maxVelocity),pn.add(mn),pn.toArray(a,d),mn.toArray(c,d)}for(let h=f;h<t.count;h++){const d=3*h;pn.fromArray(a,d),mn.fromArray(c,d);const p=l[h];for(let x=h+1;x<t.count;x++){const v=3*x;Ju.fromArray(a,v),$u.fromArray(c,v);const E=l[x];To.copy(Ju).sub(pn);const S=To.length(),M=p+E;if(S<M){const y=M-S;ys.copy(To).normalize().multiplyScalar(.5*y),ef.copy(ys).multiplyScalar(Math.max(mn.length(),1)),fx.copy(ys).multiplyScalar(Math.max($u.length(),1)),pn.sub(ys),mn.sub(ef),pn.toArray(a,d),mn.toArray(c,d),Ju.add(ys),$u.add(fx),Ju.toArray(a,v),$u.toArray(c,v)}}if(t.controlSphere0){To.copy(Np).sub(pn);const x=To.length(),v=p+l[0];if(x<v){const E=v-x;ys.copy(To.normalize()).multiplyScalar(E),ef.copy(ys).multiplyScalar(Math.max(mn.length(),2)),pn.sub(ys),mn.sub(ef)}}Math.abs(pn.x)+p>t.maxX&&(pn.x=Math.sign(pn.x)*(t.maxX-p),mn.x=-mn.x*t.wallBounce),t.gravity===0?Math.abs(pn.y)+p>t.maxY&&(pn.y=Math.sign(pn.y)*(t.maxY-p),mn.y=-mn.y*t.wallBounce):pn.y-p<-t.maxY&&(pn.y=-t.maxY+p,mn.y=-mn.y*t.wallBounce);const _=Math.max(t.maxZ,t.maxSize);Math.abs(pn.z)+p>_&&(pn.z=Math.sign(pn.z)*(t.maxZ-p),mn.z=-mn.z*t.wallBounce),pn.toArray(a,d),mn.toArray(c,d)}}}class yD extends Eb{constructor(e){super(e),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=t=>{Object.assign(t.uniforms,this.uniforms),t.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
      `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
      `);const i=gt.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",i),this.onBeforeCompile2&&this.onBeforeCompile2(t)}}}const SD={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},bo=new In;class MD extends G_{constructor(e,t={}){const i={...SD,...t},a=new dD,l=new xp(e,.04).fromScene(a).texture,c=new lp,f=new yD({envMap:l,...i.materialParams});f.envMapRotation.x=-Math.PI/2,super(c,f,i.count),this.config=i,this.physics=new xD(i),this.#e(),this.setColors(i.colors)}#e(){this.ambientLight=new Cb(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new K_(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(e){if(Array.isArray(e)&&e.length>1){const t=(function(i){let a,l;function c(f){a=f,l=[],a.forEach(h=>{l.push(new ft(h))})}return c(i),{setColors:c,getColorAt:function(f,h=new ft){const d=Math.max(0,Math.min(1,f))*(a.length-1),p=Math.floor(d),_=l[p];if(p>=a.length-1)return _.clone();const x=d-p,v=l[p+1];return h.r=_.r+x*(v.r-_.r),h.g=_.g+x*(v.g-_.g),h.b=_.b+x*(v.b-_.b),h}}})(e);for(let i=0;i<this.count;i++)this.setColorAt(i,t.getColorAt(i/this.count)),i===0&&this.light.color.copy(t.getColorAt(i/this.count));this.instanceColor.needsUpdate=!0}}update(e){this.physics.update(e);for(let t=0;t<this.count;t++)bo.position.fromArray(this.physics.positionData,3*t),t===0&&this.config.followCursor===!1?bo.scale.setScalar(0):bo.scale.setScalar(this.physics.sizeData[t]),bo.updateMatrix(),this.setMatrixAt(t,bo.matrix),t===0&&this.light.position.copy(bo.position);this.instanceMatrix.needsUpdate=!0}}function ED(r,e={}){const t=new pD({canvas:r,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let i;t.renderer.toneMapping=$0,t.camera.position.set(0,0,20),t.camera.lookAt(0,0,0),t.cameraMaxAspect=1.5,t.resize(),d(e);const a=new Lb,l=new vs(new te(0,0,1),0),c=new te;let f=!1;r.style.touchAction="none",r.style.userSelect="none",r.style.webkitUserSelect="none";const h=mD({domElement:r,onMove(){a.setFromCamera(h.nPosition,t.camera),t.camera.getWorldDirection(l.normal),a.ray.intersectPlane(l,c),i.physics.center.copy(c),i.config.controlSphere0=!0},onLeave(){i.config.controlSphere0=!1}});function d(p){i&&(t.clear(),t.scene.remove(i)),i=new MD(t.renderer,p),t.scene.add(i)}return t.onBeforeRender=p=>{f||i.update(p)},t.onAfterResize=p=>{i.config.maxX=p.wWidth/2,i.config.maxY=p.wHeight/2},{three:t,get spheres(){return i},setCount(p){d({...i.config,count:p})},updateConfig(p){p.count!==void 0&&p.count!==i.config.count?d({...i.config,...p}):(Object.assign(i.config,p),p.colors&&i.setColors(i.config.colors),(p.minSize!==void 0||p.maxSize!==void 0||p.size0!==void 0)&&i.physics.setSizes())},togglePause(){f=!f},dispose(){h.dispose(),t.dispose()}}}const TD=({className:r="",followCursor:e=!0,...t})=>{const i=Le.useRef(null),a=Le.useRef(null),l=Le.useRef(!0);return Le.useEffect(()=>{const c=i.current;if(c)return a.current=ED(c,{followCursor:e,...t}),()=>{a.current&&(a.current.dispose(),a.current=null)}},[]),Le.useEffect(()=>{if(l.current){l.current=!1;return}a.current&&a.current.updateConfig({followCursor:e,...t})},[t,e]),qn.jsx("canvas",{className:r,ref:i,style:{width:"100%",height:"100%"}})};function Hr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hx(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wl={duration:.5,overwrite:!1,delay:0},Pp,Hn,rn,Wi=1e8,qt=1/Wi,Fp=Math.PI*2,bD=Fp/4,AD=0,dx=Math.sqrt,RD=Math.cos,wD=Math.sin,Fn=function(e){return typeof e=="string"},un=function(e){return typeof e=="function"},Gr=function(e){return typeof e=="number"},zp=function(e){return typeof e>"u"},vr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},Bp=function(){return typeof window<"u"},tf=function(e){return un(e)||Fn(e)},px=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qn=Array.isArray,CD=/random\([^)]+\)/g,DD=/,\s*/g,mx=/(?:-?\.?\d|\.)+/gi,gx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_x=/[+-]=-?[.\d]+/,LD=/[^,'"\[\]\s]+/gi,UD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,on,xr,Hp,Gp,Ri={},nf={},vx,xx=function(e){return(nf=wo(e,Ri))&&di},Vp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yl=function(e,t){return!t&&console.warn(e)},yx=function(e,t){return e&&(Ri[e]=t)&&nf&&(nf[e]=t)||Ri},ql=function(){return 0},OD={suppressEvents:!0,isStart:!0,kill:!1},rf={suppressEvents:!0,kill:!1},ND={suppressEvents:!0},kp={},Ss=[],Xp={},Sx,wi={},Wp={},Mx=30,sf=[],Yp="",qp=function(e){var t=e[0],i,a;if(vr(t)||un(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(a=sf.length;a--&&!sf[a].targetTest(t););i=sf[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Zx(e[a],i)))||e.splice(a,1);return e},ma=function(e){return e._gsap||qp(qi(e))[0]._gsap},Ex=function(e,t,i){return(i=e[t])&&un(i)?e[t]():zp(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},gn=function(e){return Math.round(e*1e5)/1e5||0},ln=function(e){return Math.round(e*1e7)/1e7||0},Ro=function(e,t){var i=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+a:i==="-"?e-a:i==="*"?e*a:e/a},PD=function(e,t){for(var i=t.length,a=0;e.indexOf(t[a])<0&&++a<i;);return a<i},af=function(){var e=Ss.length,t=Ss.slice(0),i,a;for(Xp={},Ss.length=0,i=0;i<e;i++)a=t[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},jp=function(e){return!!(e._initted||e._startAt||e.add)},Tx=function(e,t,i,a){Ss.length&&!Hn&&af(),e.render(t,i,!!(Hn&&t<0&&jp(e))),Ss.length&&!Hn&&af()},bx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(LD).length<2?t:Fn(e)?e.trim():e},Ax=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},FD=function(e){return function(t,i){for(var a in i)a in t||a==="duration"&&e||a==="ease"||(t[a]=i[a])}},wo=function(e,t){for(var i in t)e[i]=t[i];return e},Rx=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=vr(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},of=function(e,t){var i={},a;for(a in e)a in t||(i[a]=e[a]);return i},jl=function(e){var t=e.parent||on,i=e.keyframes?FD(Qn(e.keyframes)):Ci;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},zD=function(e,t){for(var i=e.length,a=i===t.length;a&&i--&&e[i]===t[i];);return i<0},wx=function(e,t,i,a,l){var c=e[a],f;if(l)for(f=t[l];c&&c[l]>f;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[a]=t,t._prev=c,t.parent=t._dp=e,t},lf=function(e,t,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var l=t._prev,c=t._next;l?l._next=c:e[i]===t&&(e[i]=c),c?c._prev=l:e[a]===t&&(e[a]=l),t._next=t._prev=t.parent=null},Ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ga=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},BD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zp=function(e,t,i,a){return e._startAt&&(Hn?e._startAt.revert(rf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},ID=function r(e){return!e||e._ts&&r(e.parent)},Cx=function(e){return e._repeat?Co(e._tTime,e=e.duration()+e._rDelay)*e:0},Co=function(e,t){var i=Math.floor(e=ln(e/t));return e&&i===e?i-1:i},cf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uf=function(e){return e._end=ln(e._start+(e._tDur/Math.abs(e._ts||e._rts||qt)||0))},ff=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ln(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uf(e),i._dirty||ga(i,e)),e},Dx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=cf(e.rawTime(),t),(!t._dur||Kl(0,t.totalDuration(),i)-t._tTime>qt)&&t.render(i,!0)),ga(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-qt}},yr=function(e,t,i,a){return t.parent&&Ms(t),t._start=ln((Gr(i)?i:i||e!==on?Yi(e,i,t):e._time)+t._delay),t._end=ln(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wx(e,t,"_first","_last",e._sort?"_start":0),Kp(t)||(e._recent=t),a||Dx(e,t),e._ts<0&&ff(e,e._tTime),e},Lx=function(e,t){return(Ri.ScrollTrigger||Vp("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},Ux=function(e,t,i,a,l){if(sm(e,t,l),!e._initted)return 1;if(!i&&e._pt&&!Hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sx!==Li.frame)return Ss.push(e),e._lazy=[l,a],1},HD=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Kp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},GD=function(e,t,i,a){var l=e.ratio,c=t<0||!t&&(!e._start&&HD(e)&&!(!e._initted&&Kp(e))||(e._ts<0||e._dp._ts<0)&&!Kp(e))?0:1,f=e._rDelay,h=0,d,p,_;if(f&&e._repeat&&(h=Kl(0,e._tDur,t),p=Co(h,f),e._yoyo&&p&1&&(c=1-c),p!==Co(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Hn||a||e._zTime===qt||!t&&e._zTime){if(!e._initted&&Ux(e,t,a,i,h))return;for(_=e._zTime,e._zTime=t||(i?qt:0),i||(i=t&&!_),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=h,d=e._pt;d;)d.r(c,d.d),d=d._next;t<0&&Zp(e,t,i,!0),e._onUpdate&&!i&&Di(e,"onUpdate"),h&&e._repeat&&!i&&e.parent&&Di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&Ms(e,1),!i&&!Hn&&(Di(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VD=function(e,t,i){var a;if(i>t)for(a=e._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},Do=function(e,t,i,a){var l=e._repeat,c=ln(t)||0,f=e._tTime/e._tDur;return f&&!a&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:ln(c*(l+1)+e._rDelay*l):c,f>0&&!a&&ff(e,e._tTime=e._tDur*f),e.parent&&uf(e),i||ga(e.parent,e),e},Ox=function(e){return e instanceof fi?ga(e):Do(e,e._dur)},kD={_start:0,endTime:ql,totalDuration:ql},Yi=function r(e,t,i){var a=e.labels,l=e._recent||kD,c=e.duration()>=Wi?l.endTime(!1):e._dur,f,h,d;return Fn(t)&&(isNaN(t)||t in a)?(h=t.charAt(0),d=t.substr(-1)==="%",f=t.indexOf("="),h==="<"||h===">"?(f>=0&&(t=t.replace(/=/,"")),(h==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(f<0?l:i).totalDuration()/100:1)):f<0?(t in a||(a[t]=c),a[t]):(h=parseFloat(t.charAt(f-1)+t.substr(f+1)),d&&i&&(h=h/100*(Qn(i)?i[0]:i).totalDuration()),f>1?r(e,t.substr(0,f-1),i)+h:c+h)):t==null?c:+t},Zl=function(e,t,i){var a=Gr(t[1]),l=(a?2:1)+(e<2?0:1),c=t[l],f,h;if(a&&(c.duration=t[1]),c.parent=i,e){for(f=c,h=i;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=ci(h.vars.inherit)&&h.parent;c.immediateRender=ci(f.immediateRender),e<2?c.runBackwards=1:c.startAt=t[l-1]}return new Mn(t[0],c,t[l+1])},Es=function(e,t){return e||e===0?t(e):t},Kl=function(e,t,i){return i<e?e:i>t?t:i},Jn=function(e,t){return!Fn(e)||!(t=UD.exec(e))?"":t[1]},XD=function(e,t,i){return Es(i,function(a){return Kl(e,t,a)})},Qp=[].slice,Nx=function(e,t){return e&&vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vr(e[0]))&&!e.nodeType&&e!==xr},WD=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(a){var l;return Fn(a)&&!t||Nx(a,1)?(l=i).push.apply(l,qi(a)):i.push(a)})||i},qi=function(e,t,i){return rn&&!t&&rn.selector?rn.selector(e):Fn(e)&&!i&&(Hp||!Uo())?Qp.call((t||Gp).querySelectorAll(e),0):Qn(e)?WD(e,i):Nx(e)?Qp.call(e,0):e?[e]:[]},Jp=function(e){return e=qi(e)[0]||Yl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return qi(t,i.querySelectorAll?i:i===e?Yl("Invalid scope")||Gp.createElement("div"):e)}},Px=function(e){return e.sort(function(){return .5-Math.random()})},Fx=function(e){if(un(e))return e;var t=vr(e)?e:{each:e},i=_a(t.ease),a=t.from||0,l=parseFloat(t.base)||0,c={},f=a>0&&a<1,h=isNaN(a)||f,d=t.axis,p=a,_=a;return Fn(a)?p=_={center:.5,edges:.5,end:1}[a]||0:!f&&h&&(p=a[0],_=a[1]),function(x,v,E){var S=(E||t).length,M=c[S],y,D,R,A,L,U,O,P,w;if(!M){if(w=t.grid==="auto"?0:(t.grid||[1,Wi])[1],!w){for(O=-Wi;O<(O=E[w++].getBoundingClientRect().left)&&w<S;);w<S&&w--}for(M=c[S]=[],y=h?Math.min(w,S)*p-.5:a%w,D=w===Wi?0:h?S*_/w-.5:a/w|0,O=0,P=Wi,U=0;U<S;U++)R=U%w-y,A=D-(U/w|0),M[U]=L=d?Math.abs(d==="y"?A:R):dx(R*R+A*A),L>O&&(O=L),L<P&&(P=L);a==="random"&&Px(M),M.max=O-P,M.min=P,M.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(w>S?S-1:d?d==="y"?S/w:w:Math.max(w,S/w))||0)*(a==="edges"?-1:1),M.b=S<0?l-S:l,M.u=Jn(t.amount||t.each)||0,i=i&&S<0?rL(i):i}return S=(M[x]-M.min)/M.max||0,ln(M.b+(i?i(S):S)*M.v)+M.u}},$p=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var a=ln(Math.round(parseFloat(i)/e)*e*t);return(a-a%1)/t+(Gr(i)?0:Jn(i))}},zx=function(e,t){var i=Qn(e),a,l;return!i&&vr(e)&&(a=i=e.radius||Wi,e.values?(e=qi(e.values),(l=!Gr(e[0]))&&(a*=a)):e=$p(e.increment)),Es(t,i?un(e)?function(c){return l=e(c),Math.abs(l-c)<=a?l:c}:function(c){for(var f=parseFloat(l?c.x:c),h=parseFloat(l?c.y:0),d=Wi,p=0,_=e.length,x,v;_--;)l?(x=e[_].x-f,v=e[_].y-h,x=x*x+v*v):x=Math.abs(e[_]-f),x<d&&(d=x,p=_);return p=!a||d<=a?e[p]:c,l||p===c||Gr(c)?p:p+Jn(c)}:$p(e))},Bx=function(e,t,i,a){return Es(Qn(e)?!t:i===!0?!!(i=0):!a,function(){return Qn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*a)/a})},YD=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(a){return t.reduce(function(l,c){return c(l)},a)}},qD=function(e,t){return function(i){return e(parseFloat(i))+(t||Jn(i))}},jD=function(e,t,i){return Hx(e,t,0,1,i)},Ix=function(e,t,i){return Es(i,function(a){return e[~~t(a)]})},ZD=function r(e,t,i){var a=t-e;return Qn(e)?Ix(e,r(0,e.length),t):Es(i,function(l){return(a+(l-e)%a)%a+e})},KD=function r(e,t,i){var a=t-e,l=a*2;return Qn(e)?Ix(e,r(0,e.length-1),t):Es(i,function(c){return c=(l+(c-e)%l)%l||0,e+(c>a?l-c:c)})},Ql=function(e){return e.replace(CD,function(t){var i=t.indexOf("[")+1,a=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(DD);return Bx(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},Hx=function(e,t,i,a,l){var c=t-e,f=a-i;return Es(l,function(h){return i+((h-e)/c*f||0)})},QD=function r(e,t,i,a){var l=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!l){var c=Fn(e),f={},h,d,p,_,x;if(i===!0&&(a=1)&&(i=null),c)e={p:e},t={p:t};else if(Qn(e)&&!Qn(t)){for(p=[],_=e.length,x=_-2,d=1;d<_;d++)p.push(r(e[d-1],e[d]));_--,l=function(E){E*=_;var S=Math.min(x,~~E);return p[S](E-S)},i=t}else a||(e=wo(Qn(e)?[]:{},e));if(!p){for(h in t)im.call(f,e,h,"get",t[h]);l=function(E){return lm(E,f)||(c?e.p:e)}}}return Es(i,l)},Gx=function(e,t,i){var a=e.labels,l=Wi,c,f,h;for(c in a)f=a[c]-t,f<0==!!i&&f&&l>(f=Math.abs(f))&&(h=c,l=f);return h},Di=function(e,t,i){var a=e.vars,l=a[t],c=rn,f=e._ctx,h,d,p;if(l)return h=a[t+"Params"],d=a.callbackScope||e,i&&Ss.length&&af(),f&&(rn=f),p=h?l.apply(d,h):l.call(d),rn=c,p},Jl=function(e){return Ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Hn),e.progress()<1&&Di(e,"onInterrupt"),e},Lo,Vx=[],kx=function(e){if(e)if(e=!e.name&&e.default||e,Bp()||e.headless){var t=e.name,i=un(e),a=t&&!i&&e.init?function(){this._props=[]}:e,l={init:ql,render:lm,add:im,kill:pL,modifier:dL,rawVars:0},c={targetTest:0,get:0,getSetter:om,aliases:{},register:0};if(Uo(),e!==a){if(wi[t])return;Ci(a,Ci(of(e,l),c)),wo(a.prototype,wo(l,of(e,c))),wi[a.prop=t]=a,e.targetTest&&(sf.push(a),kp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yx(t,a),e.register&&e.register(di,a,hi)}else Vx.push(e)},jt=255,$l={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},em=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*jt+.5|0},Xx=function(e,t,i){var a=e?Gr(e)?[e>>16,e>>8&jt,e&jt]:0:$l.black,l,c,f,h,d,p,_,x,v,E;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$l[e])a=$l[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&jt,a&jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&jt,e&jt]}else if(e.substr(0,3)==="hsl"){if(a=E=e.match(mx),!t)h=+a[0]%360/360,d=+a[1]/100,p=+a[2]/100,c=p<=.5?p*(d+1):p+d-p*d,l=p*2-c,a.length>3&&(a[3]*=1),a[0]=em(h+1/3,l,c),a[1]=em(h,l,c),a[2]=em(h-1/3,l,c);else if(~e.indexOf("="))return a=e.match(gx),i&&a.length<4&&(a[3]=1),a}else a=e.match(mx)||$l.transparent;a=a.map(Number)}return t&&!E&&(l=a[0]/jt,c=a[1]/jt,f=a[2]/jt,_=Math.max(l,c,f),x=Math.min(l,c,f),p=(_+x)/2,_===x?h=d=0:(v=_-x,d=p>.5?v/(2-_-x):v/(_+x),h=_===l?(c-f)/v+(c<f?6:0):_===c?(f-l)/v+2:(l-c)/v+4,h*=60),a[0]=~~(h+.5),a[1]=~~(d*100+.5),a[2]=~~(p*100+.5)),i&&a.length<4&&(a[3]=1),a},Wx=function(e){var t=[],i=[],a=-1;return e.split(Ts).forEach(function(l){var c=l.match(Ao)||[];t.push.apply(t,c),i.push(a+=c.length+1)}),t.c=i,t},Yx=function(e,t,i){var a="",l=(e+a).match(Ts),c=t?"hsla(":"rgba(",f=0,h,d,p,_;if(!l)return e;if(l=l.map(function(x){return(x=Xx(x,t,1))&&c+(t?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),i&&(p=Wx(e),h=i.c,h.join(a)!==p.c.join(a)))for(d=e.replace(Ts,"1").split(Ao),_=d.length-1;f<_;f++)a+=d[f]+(~h.indexOf(f)?l.shift()||c+"0,0,0,0)":(p.length?p:l.length?l:i).shift());if(!d)for(d=e.split(Ts),_=d.length-1;f<_;f++)a+=d[f]+l[f];return a+d[_]},Ts=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $l)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),JD=/hsl[a]?\(/,qx=function(e){var t=e.join(" "),i;if(Ts.lastIndex=0,Ts.test(t))return i=JD.test(t),e[1]=Yx(e[1],i),e[0]=Yx(e[0],i,Wx(e[1])),!0},ec,Li=(function(){var r=Date.now,e=500,t=33,i=r(),a=i,l=1e3/240,c=l,f=[],h,d,p,_,x,v,E=function S(M){var y=r()-a,D=M===!0,R,A,L,U;if((y>e||y<0)&&(i+=y-t),a+=y,L=a-i,R=L-c,(R>0||D)&&(U=++_.frame,x=L-_.time*1e3,_.time=L=L/1e3,c+=R+(R>=l?4:l-R),A=1),D||(h=d(S)),A)for(v=0;v<f.length;v++)f[v](L,x,U,M)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(M){return x/(1e3/(M||60))},wake:function(){vx&&(!Hp&&Bp()&&(xr=Hp=window,Gp=xr.document||{},Ri.gsap=di,(xr.gsapVersions||(xr.gsapVersions=[])).push(di.version),xx(nf||xr.GreenSockGlobals||!xr.gsap&&xr||{}),Vx.forEach(kx)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&_.sleep(),d=p||function(M){return setTimeout(M,c-_.time*1e3+1|0)},ec=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(h),ec=0,d=ql},lagSmoothing:function(M,y){e=M||1/0,t=Math.min(y||33,e)},fps:function(M){l=1e3/(M||240),c=_.time*1e3+l},add:function(M,y,D){var R=y?function(A,L,U,O){M(A,L,U,O),_.remove(R)}:M;return _.remove(M),f[D?"unshift":"push"](R),Uo(),R},remove:function(M,y){~(y=f.indexOf(M))&&f.splice(y,1)&&v>=y&&v--},_listeners:f},_})(),Uo=function(){return!ec&&Li.wake()},Rt={},$D=/^[\d.\-M][\d.\-,\s]/,eL=/["']/g,tL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),a=i[0],l=1,c=i.length,f,h,d;l<c;l++)h=i[l],f=l!==c-1?h.lastIndexOf(","):h.length,d=h.substr(0,f),t[a]=isNaN(d)?d.replace(eL,"").trim():+d,a=h.substr(f+1).trim();return t},nL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<i?e.indexOf(")",i+1):i)},iL=function(e){var t=(e+"").split("("),i=Rt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[tL(t[1])]:nL(e).split(",").map(bx)):Rt._CE&&$D.test(e)?Rt._CE("",e):i},rL=function(e){return function(t){return 1-e(1-t)}},_a=function(e,t){return e&&(un(e)?e:Rt[e]||iL(e))||t},va=function(e,t,i,a){i===void 0&&(i=function(h){return 1-t(1-h)}),a===void 0&&(a=function(h){return h<.5?t(h*2)/2:1-t((1-h)*2)/2});var l={easeIn:t,easeOut:i,easeInOut:a},c;return ui(e,function(f){Rt[f]=Ri[f]=l,Rt[c=f.toLowerCase()]=i;for(var h in l)Rt[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Rt[f+"."+h]=l[h]}),l},jx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tm=function r(e,t,i){var a=t>=1?t:1,l=(i||(e?.3:.45))/(t<1?t:1),c=l/Fp*(Math.asin(1/a)||0),f=function(p){return p===1?1:a*Math.pow(2,-10*p)*wD((p-c)*l)+1},h=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:jx(f);return l=Fp/l,h.config=function(d,p){return r(e,d,p)},h},nm=function r(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},a=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:jx(i);return a.config=function(l){return r(e,l)},a};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;va(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),Rt.Linear.easeNone=Rt.none=Rt.Linear.easeIn,va("Elastic",tm("in"),tm("out"),tm()),(function(r,e){var t=1/e,i=2*t,a=2.5*t,l=function(f){return f<t?r*f*f:f<i?r*Math.pow(f-1.5/e,2)+.75:f<a?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};va("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75),va("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)}),va("Circ",function(r){return-(dx(1-r*r)-1)}),va("Sine",function(r){return r===1?1:-RD(r*bD)+1}),va("Back",nm("in"),nm("out"),nm()),Rt.SteppedEase=Rt.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,a=e+(t?0:1),l=t?1:0,c=1-qt;return function(f){return((a*Kl(0,c,f)|0)+l)*i}}},Wl.ease=Rt["quad.out"],ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Yp+=r+","+r+"Params,"});var Zx=function(e,t){this.id=AD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ex,this.set=t?t.getSetter:om},tc=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Do(this,+t.duration,1,1),this.data=t.data,rn&&(this._ctx=rn,rn.data.push(this)),ec||Li.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,a){if(Uo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(ff(this,i),!l._dp||l.parent||Dx(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===qt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Tx(this,i,a)),this},e.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cx(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},e.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cx(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,a):this._repeat?Co(this._tTime,l)+1:1},e.timeScale=function(i,a){if(!arguments.length)return this._rts===-qt?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?cf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-qt?0:this._rts,this.totalTime(Kl(-Math.abs(this._delay),this.totalDuration(),l),a!==!1),uf(this),BD(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ln(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&yr(a,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cf(a.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=ND);var a=Hn;return Hn=i,jp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Hn=a,this},e.globalTime=function(i){for(var a=this,l=arguments.length?i:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ox(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,Ox(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,a){return this.totalTime(Yi(this,i),ci(a))},e.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,ci(a)),this._dur||(this._zTime=-qt),this},e.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},e.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-qt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-qt,this},e.isActive=function(){var i=this.parent||this._dp,a=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=a&&l<this.endTime(!0)-qt)},e.eventCallback=function(i,a,l){var c=this.vars;return arguments.length>1?(a?(c[i]=a,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=a)):delete c[i],this):c[i]},e.then=function(i){var a=this,l=a._prom;return new Promise(function(c){var f=un(i)?i:Ax,h=function(){var p=a.then;a.then=null,l&&l(),un(f)&&(f=f(a))&&(f.then||f===a)&&(a.then=p),c(f),a.then=p};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?h():a._prom=h})},e.kill=function(){Jl(this)},r})();Ci(tc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qt,_prom:0,_ps:!1,_rts:1});var fi=(function(r){hx(e,r);function e(i,a){var l;return i===void 0&&(i={}),l=r.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=ci(i.sortChildren),on&&yr(i.parent||on,Hr(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Lx(Hr(l),i.scrollTrigger),l}var t=e.prototype;return t.to=function(a,l,c){return Zl(0,arguments,this),this},t.from=function(a,l,c){return Zl(1,arguments,this),this},t.fromTo=function(a,l,c,f){return Zl(2,arguments,this),this},t.set=function(a,l,c){return l.duration=0,l.parent=this,jl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Mn(a,l,Yi(this,c),1),this},t.call=function(a,l,c){return yr(this,Mn.delayedCall(0,a,l),c)},t.staggerTo=function(a,l,c,f,h,d,p){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=p,c.parent=this,new Mn(a,c,Yi(this,h)),this},t.staggerFrom=function(a,l,c,f,h,d,p){return c.runBackwards=1,jl(c).immediateRender=ci(c.immediateRender),this.staggerTo(a,l,c,f,h,d,p)},t.staggerFromTo=function(a,l,c,f,h,d,p,_){return f.startAt=c,jl(f).immediateRender=ci(f.immediateRender),this.staggerTo(a,l,f,h,d,p,_)},t.render=function(a,l,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=a<=0?0:ln(a),_=this._zTime<0!=a<0&&(this._initted||!d),x,v,E,S,M,y,D,R,A,L,U,O;if(this!==on&&p>h&&a>=0&&(p=h),p!==this._tTime||c||_){if(f!==this._time&&d&&(p+=this._time-f,a+=this._time-f),x=p,A=this._start,R=this._ts,y=!R,_&&(d||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(U=this._yoyo,M=d+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(M*100+a,l,c);if(x=ln(p%M),p===h?(S=this._repeat,x=d):(L=ln(p/M),S=~~L,S&&S===L&&(x=d,S--),x>d&&(x=d)),L=Co(this._tTime,M),!f&&this._tTime&&L!==S&&this._tTime-L*M-this._dur<=0&&(L=S),U&&S&1&&(x=d-x,O=1),S!==L&&!this._lock){var P=U&&L&1,w=P===(U&&S&1);if(S<L&&(P=!P),f=P?0:p%d?d:p,this._lock=1,this.render(f||(O?0:ln(S*M)),l,!d)._lock=0,this._tTime=p,!l&&this.parent&&Di(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,L=S),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,w&&(this._lock=2,f=P?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=VD(this,ln(f),ln(x)),D&&(p-=x-(x=D._start))),this._tTime=p,this._time=x,this._act=!!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&p&&d&&!l&&!L&&(Di(this,"onStart"),this._tTime!==p))return this;if(x>=f&&a>=0)for(v=this._first;v;){if(E=v._next,(v._act||x>=v._start)&&v._ts&&D!==v){if(v.parent!==this)return this.render(a,l,c);if(v.render(v._ts>0?(x-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(x-v._start)*v._ts,l,c),x!==this._time||!this._ts&&!y){D=0,E&&(p+=this._zTime=-qt);break}}v=E}else{v=this._last;for(var C=a<0?a:x;v;){if(E=v._prev,(v._act||C<=v._end)&&v._ts&&D!==v){if(v.parent!==this)return this.render(a,l,c);if(v.render(v._ts>0?(C-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(C-v._start)*v._ts,l,c||Hn&&jp(v)),x!==this._time||!this._ts&&!y){D=0,E&&(p+=this._zTime=C?-qt:qt);break}}v=E}}if(D&&!l&&(this.pause(),D.render(x>=f?0:-qt)._zTime=x>=f?1:-1,this._ts))return this._start=A,uf(this),this.render(a,l,c);this._onUpdate&&!l&&Di(this,"onUpdate",!0),(p===h&&this._tTime>=this.totalDuration()||!p&&f)&&(A===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((a||!d)&&(p===h&&this._ts>0||!p&&this._ts<0)&&Ms(this,1),!l&&!(a<0&&!f)&&(p||f||!h)&&(Di(this,p===h&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<h&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,l){var c=this;if(Gr(l)||(l=Yi(this,l,a)),!(a instanceof tc)){if(Qn(a))return a.forEach(function(f){return c.add(f,l)}),this;if(Fn(a))return this.addLabel(a,l);if(un(a))a=Mn.delayedCall(0,a);else return this}return this!==a?yr(this,a,l):this},t.getChildren=function(a,l,c,f){a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Wi);for(var h=[],d=this._first;d;)d._start>=f&&(d instanceof Mn?l&&h.push(d):(c&&h.push(d),a&&h.push.apply(h,d.getChildren(!0,l,c)))),d=d._next;return h},t.getById=function(a){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===a)return l[c]},t.remove=function(a){return Fn(a)?this.removeLabel(a):un(a)?this.killTweensOf(a):(a.parent===this&&lf(this,a),a===this._recent&&(this._recent=this._last),ga(this))},t.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ln(Li.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),r.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},t.addLabel=function(a,l){return this.labels[a]=Yi(this,l),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,l,c){var f=Mn.delayedCall(0,l||ql,c);return f.data="isPause",this._hasPause=1,yr(this,f,Yi(this,a))},t.removePause=function(a){var l=this._first;for(a=Yi(this,a);l;)l._start===a&&l.data==="isPause"&&Ms(l),l=l._next},t.killTweensOf=function(a,l,c){for(var f=this.getTweensOf(a,c),h=f.length;h--;)bs!==f[h]&&f[h].kill(a,l);return this},t.getTweensOf=function(a,l){for(var c=[],f=qi(a),h=this._first,d=Gr(l),p;h;)h instanceof Mn?PD(h._targets,f)&&(d?(!bs||h._initted&&h._ts)&&h.globalTime(0)<=l&&h.globalTime(h.totalDuration())>l:!l||h.isActive())&&c.push(h):(p=h.getTweensOf(f,l)).length&&c.push.apply(c,p),h=h._next;return c},t.tweenTo=function(a,l){l=l||{};var c=this,f=Yi(c,a),h=l,d=h.startAt,p=h.onStart,_=h.onStartParams,x=h.immediateRender,v,E=Mn.to(c,Ci({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||qt,onStart:function(){if(c.pause(),!v){var M=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==M&&Do(E,M,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,_||[])}},l));return x?E.render(0):E},t.tweenFromTo=function(a,l,c){return this.tweenTo(l,Ci({startAt:{time:Yi(this,a)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),Gx(this,Yi(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),Gx(this,Yi(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+qt)},t.shiftChildren=function(a,l,c){c===void 0&&(c=0);var f=this._first,h=this.labels,d;for(a=ln(a);f;)f._start>=c&&(f._start+=a,f._end+=a),f=f._next;if(l)for(d in h)h[d]>=c&&(h[d]+=a);return ga(this)},t.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return r.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),ga(this)},t.totalDuration=function(a){var l=0,c=this,f=c._last,h=Wi,d,p,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-a:a));if(c._dirty){for(_=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),p=f._start,p>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,yr(c,f,p-f._delay,1)._lock=0):h=p,p<0&&f._ts&&(l-=p,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=ln(p/c._ts),c._time-=p,c._tTime-=p),c.shiftChildren(-p,!1,-1/0),h=0),f._end>l&&f._ts&&(l=f._end),f=d;Do(c,c===on&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(a){if(on._ts&&(Tx(on,cf(a,on)),Sx=Li.frame),Li.frame>=Mx){Mx+=Ai.autoSleep||120;var l=on._first;if((!l||!l._ts)&&Ai.autoSleep&&Li._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Li.sleep()}}},e})(tc);Ci(fi.prototype,{_lock:0,_hasPause:0,_forcing:0});var sL=function(e,t,i,a,l,c,f){var h=new hi(this._pt,e,t,0,1,ty,null,l),d=0,p=0,_,x,v,E,S,M,y,D;for(h.b=i,h.e=a,i+="",a+="",(y=~a.indexOf("random("))&&(a=Ql(a)),c&&(D=[i,a],c(D,e,t),i=D[0],a=D[1]),x=i.match(Ip)||[];_=Ip.exec(a);)E=_[0],S=a.substring(d,_.index),v?v=(v+1)%5:S.substr(-5)==="rgba("&&(v=1),E!==x[p++]&&(M=parseFloat(x[p-1])||0,h._pt={_next:h._pt,p:S||p===1?S:",",s:M,c:E.charAt(1)==="="?Ro(M,E)-M:parseFloat(E)-M,m:v&&v<4?Math.round:0},d=Ip.lastIndex);return h.c=d<a.length?a.substring(d,a.length):"",h.fp=f,(_x.test(a)||y)&&(h.e=0),this._pt=h,h},im=function(e,t,i,a,l,c,f,h,d,p){un(a)&&(a=a(l||0,e,c));var _=e[t],x=i!=="get"?i:un(_)?d?e[t.indexOf("set")||!un(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():_,v=un(_)?d?uL:$x:am,E;if(Fn(a)&&(~a.indexOf("random(")&&(a=Ql(a)),a.charAt(1)==="="&&(E=Ro(x,a)+(Jn(x)||0),(E||E===0)&&(a=E))),!p||x!==a||rm)return!isNaN(x*a)&&a!==""?(E=new hi(this._pt,e,t,+x||0,a-(x||0),typeof _=="boolean"?hL:ey,0,v),d&&(E.fp=d),f&&E.modifier(f,this,e),this._pt=E):(!_&&!(t in e)&&Vp(t,a),sL.call(this,e,t,x,a,v,h||Ai.stringFilter,d))},aL=function(e,t,i,a,l){if(un(e)&&(e=nc(e,l,t,i,a)),!vr(e)||e.style&&e.nodeType||Qn(e)||px(e))return Fn(e)?nc(e,l,t,i,a):e;var c={},f;for(f in e)c[f]=nc(e[f],l,t,i,a);return c},Kx=function(e,t,i,a,l,c){var f,h,d,p;if(wi[e]&&(f=new wi[e]).init(l,f.rawVars?t[e]:aL(t[e],a,l,c,i),i,a,c)!==!1&&(i._pt=h=new hi(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==Lo))for(d=i._ptLookup[i._targets.indexOf(l)],p=f._props.length;p--;)d[f._props[p]]=h;return f},bs,rm,sm=function r(e,t,i){var a=e.vars,l=a.ease,c=a.startAt,f=a.immediateRender,h=a.lazy,d=a.onUpdate,p=a.runBackwards,_=a.yoyoEase,x=a.keyframes,v=a.autoRevert,E=e._dur,S=e._startAt,M=e._targets,y=e.parent,D=y&&y.data==="nested"?y.vars.targets:M,R=e._overwrite==="auto"&&!Pp,A=e.timeline,L=a.easeReverse||_,U,O,P,w,C,B,X,W,G,Z,F,k,V;if(A&&(!x||!l)&&(l="none"),e._ease=_a(l,Wl.ease),e._rEase=L&&(_a(L)||e._ease),e._from=!A&&!!a.runBackwards,e._from&&(e.ratio=1),!A||x&&!a.stagger){if(W=M[0]?ma(M[0]).harness:0,k=W&&a[W.prop],U=of(a,kp),S&&(S._zTime<0&&S.progress(1),t<0&&p&&f&&!v?S.render(-1,!0):S.revert(p&&E?rf:OD),S._lazy=0),c){if(Ms(e._startAt=Mn.set(M,Ci({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!S&&ci(h),startAt:null,delay:0,onUpdate:d&&function(){return Di(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Hn||!f&&!v)&&e._startAt.revert(rf),f&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!S){if(t&&(f=!1),P=Ci({overwrite:!1,data:"isFromStart",lazy:f&&!S&&ci(h),immediateRender:f,stagger:0,parent:y},U),k&&(P[W.prop]=k),Ms(e._startAt=Mn.set(M,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Hn?e._startAt.revert(rf):e._startAt.render(-1,!0)),e._zTime=t,!f)r(e._startAt,qt,qt);else if(!t)return}for(e._pt=e._ptCache=0,h=E&&ci(h)||h&&!E,O=0;O<M.length;O++){if(C=M[O],X=C._gsap||qp(M)[O]._gsap,e._ptLookup[O]=Z={},Xp[X.id]&&Ss.length&&af(),F=D===M?O:D.indexOf(C),W&&(G=new W).init(C,k||U,e,F,D)!==!1&&(e._pt=w=new hi(e._pt,C,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(fe){Z[fe]=w}),G.priority&&(B=1)),!W||k)for(P in U)wi[P]&&(G=Kx(P,U,e,F,C,D))?G.priority&&(B=1):Z[P]=w=im.call(e,C,P,"get",U[P],F,D,0,a.stringFilter);e._op&&e._op[O]&&e.kill(C,e._op[O]),R&&e._pt&&(bs=e,on.killTweensOf(C,Z,e.globalTime(t)),V=!e.parent,bs=0),e._pt&&h&&(Xp[X.id]=1)}B&&ny(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!V,x&&t<=0&&A.render(Wi,!0,!0)},oL=function(e,t,i,a,l,c,f,h){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,x,v;if(!d)for(d=e._ptCache[t]=[],x=e._ptLookup,v=e._targets.length;v--;){if(p=x[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return rm=1,e.vars[t]="+=0",sm(e,f),rm=0,h?Yl(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(p)}for(v=d.length;v--;)_=d[v],p=_._pt||_,p.s=(a||a===0)&&!l?a:p.s+(a||0)+c*p.c,p.c=i-p.s,_.e&&(_.e=gn(i)+Jn(_.e)),_.b&&(_.b=p.s+Jn(_.b))},lL=function(e,t){var i=e[0]?ma(e[0]).harness:0,a=i&&i.aliases,l,c,f,h;if(!a)return t;l=wo({},t);for(c in a)if(c in l)for(h=a[c].split(","),f=h.length;f--;)l[h[f]]=l[c];return l},cL=function(e,t,i,a){var l=t.ease||a||"power1.inOut",c,f;if(Qn(t))f=i[e]||(i[e]=[]),t.forEach(function(h,d){return f.push({t:d/(t.length-1)*100,v:h,e:l})});else for(c in t)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:t[c],e:l})},nc=function(e,t,i,a,l){return un(e)?e.call(t,i,a,l):Fn(e)&&~e.indexOf("random(")?Ql(e):e},Qx=Yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jx={};ui(Qx+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jx[r]=1});var Mn=(function(r){hx(e,r);function e(i,a,l,c){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=r.call(this,c?a:jl(a))||this;var h=f.vars,d=h.duration,p=h.delay,_=h.immediateRender,x=h.stagger,v=h.overwrite,E=h.keyframes,S=h.defaults,M=h.scrollTrigger,y=a.parent||on,D=(Qn(i)||px(i)?Gr(i[0]):"length"in a)?[i]:qi(i),R,A,L,U,O,P,w,C;if(f._targets=D.length?qp(D):Yl("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,E||x||tf(d)||tf(p)){a=f.vars;var B=a.easeReverse||a.yoyoEase;if(R=f.timeline=new fi({data:"nested",defaults:S||{},targets:y&&y.data==="nested"?y.vars.targets:D}),R.kill(),R.parent=R._dp=Hr(f),R._start=0,x||tf(d)||tf(p)){if(U=D.length,w=x&&Fx(x),vr(x))for(O in x)~Qx.indexOf(O)&&(C||(C={}),C[O]=x[O]);for(A=0;A<U;A++)L=of(a,Jx),L.stagger=0,B&&(L.easeReverse=B),C&&wo(L,C),P=D[A],L.duration=+nc(d,Hr(f),A,P,D),L.delay=(+nc(p,Hr(f),A,P,D)||0)-f._delay,!x&&U===1&&L.delay&&(f._delay=p=L.delay,f._start+=p,L.delay=0),R.to(P,L,w?w(A,P,D):0),R._ease=Rt.none;R.duration()?d=p=0:f.timeline=0}else if(E){jl(Ci(R.vars.defaults,{ease:"none"})),R._ease=_a(E.ease||a.ease||"none");var X=0,W,G,Z;if(Qn(E))E.forEach(function(F){return R.to(D,F,">")}),R.duration();else{L={};for(O in E)O==="ease"||O==="easeEach"||cL(O,E[O],L,E.easeEach);for(O in L)for(W=L[O].sort(function(F,k){return F.t-k.t}),X=0,A=0;A<W.length;A++)G=W[A],Z={ease:G.e,duration:(G.t-(A?W[A-1].t:0))/100*d},Z[O]=G.v,R.to(D,Z,X),X+=Z.duration;R.duration()<d&&R.to({},{duration:d-R.duration()})}}d||f.duration(d=R.duration())}else f.timeline=0;return v===!0&&!Pp&&(bs=Hr(f),on.killTweensOf(D),bs=0),yr(y,Hr(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(_||!d&&!E&&f._start===ln(y._time)&&ci(_)&&ID(Hr(f))&&y.data!=="nested")&&(f._tTime=-qt,f.render(Math.max(0,-p)||0)),M&&Lx(Hr(f),M),f}var t=e.prototype;return t.render=function(a,l,c){var f=this._time,h=this._tDur,d=this._dur,p=a<0,_=a>h-qt&&!p?h:a<qt?0:a,x,v,E,S,M,y,D,R;if(!d)GD(this,a,l,c);else if(_!==this._tTime||!a||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(x=_,R=this.timeline,this._repeat){if(S=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(S*100+a,l,c);if(x=ln(_%S),_===h?(E=this._repeat,x=d):(M=ln(_/S),E=~~M,E&&E===M?(x=d,E--):x>d&&(x=d)),y=this._yoyo&&E&1,y&&(x=d-x),M=Co(this._tTime,S),x===f&&!c&&this._initted&&E===M)return this._tTime=_,this;E!==M&&this.vars.repeatRefresh&&!y&&!this._lock&&x!==S&&this._initted&&(this._lock=c=1,this.render(ln(S*E),!0).invalidate()._lock=0)}if(!this._initted){if(Ux(this,p?a:x,c,l,_))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==M))return this;if(d!==this._dur)return this.render(a,l,c)}if(this._rEase){var A=x<f;if(A!==this._inv){var L=A?f:d-f;this._inv=A,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=L?(A?-1:1)/L:0,this._invScale=A?-this.ratio:1-this.ratio,this._invEase=A?this._rEase:this._ease}this.ratio=D=this._invRatio+this._invScale*this._invEase((x-this._invTime)*this._invRecip)}else this.ratio=D=this._ease(x/d);if(this._from&&(this.ratio=D=1-D),this._tTime=_,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&_&&!l&&!M&&(Di(this,"onStart"),this._tTime!==_))return this;for(v=this._pt;v;)v.r(D,v.d),v=v._next;R&&R.render(a<0?a:R._dur*R._ease(x/this._dur),l,c)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(p&&Zp(this,a,l,c),Di(this,"onUpdate")),this._repeat&&E!==M&&this.vars.onRepeat&&!l&&this.parent&&Di(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&Zp(this,a,!0,!0),(a||!d)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&Ms(this,1),!l&&!(p&&!f)&&(_||f||y)&&(Di(this,_===h?"onComplete":"onReverseComplete",!0),this._prom&&!(_<h&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),r.prototype.invalidate.call(this,a)},t.resetTo=function(a,l,c,f,h){ec||Li.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||sm(this,d),p=this._ease(d/this._dur),oL(this,a,l,c,f,p,d,h)?this.resetTo(a,l,c,f,1):(ff(this,0),this.parent||wx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Jl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Hn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,bs&&bs.vars.overwrite!==!0)._first||Jl(this),this.parent&&c!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=a?qi(a):f,d=this._ptLookup,p=this._pt,_,x,v,E,S,M,y;if((!l||l==="all")&&zD(f,h))return l==="all"&&(this._pt=0),Jl(this);for(_=this._op=this._op||[],l!=="all"&&(Fn(l)&&(S={},ui(l,function(D){return S[D]=1}),l=S),l=lL(f,l)),y=f.length;y--;)if(~h.indexOf(f[y])){x=d[y],l==="all"?(_[y]=l,E=x,v={}):(v=_[y]=_[y]||{},E=l);for(S in E)M=x&&x[S],M&&((!("kill"in M.d)||M.d.kill(S)===!0)&&lf(this,M,"_pt"),delete x[S]),v!=="all"&&(v[S]=1)}return this._initted&&!this._pt&&p&&Jl(this),this},e.to=function(a,l){return new e(a,l,arguments[2])},e.from=function(a,l){return Zl(1,arguments)},e.delayedCall=function(a,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(a,l,c){return Zl(2,arguments)},e.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(a,l)},e.killTweensOf=function(a,l,c){return on.killTweensOf(a,l,c)},e})(tc);Ci(Mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ui("staggerTo,staggerFrom,staggerFromTo",function(r){Mn[r]=function(){var e=new fi,t=Qp.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var am=function(e,t,i){return e[t]=i},$x=function(e,t,i){return e[t](i)},uL=function(e,t,i,a){return e[t](a.fp,i)},fL=function(e,t,i){return e.setAttribute(t,i)},om=function(e,t){return un(e[t])?$x:zp(e[t])&&e.setAttribute?fL:am},ey=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ty=function(e,t){var i=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+a,i=i._next;a+=t.c}t.set(t.t,t.p,a,t)},lm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},dL=function(e,t,i,a){for(var l=this._pt,c;l;)c=l._next,l.p===a&&l.modifier(e,t,i),l=c},pL=function(e){for(var t=this._pt,i,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?lf(this,t,"_pt"):t.dep||(i=1),t=a;return!i},mL=function(e,t,i,a){a.mSet(e,t,a.m.call(a.tween,i,a.mt),a)},ny=function(e){for(var t=e._pt,i,a,l,c;t;){for(i=t._next,a=l;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:c)?t._prev._next=t:l=t,(t._next=a)?a._prev=t:c=t,t=i}e._pt=l},hi=(function(){function r(t,i,a,l,c,f,h,d,p){this.t=i,this.s=l,this.c=c,this.p=a,this.r=f||ey,this.d=h||this,this.set=d||am,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,a,l){this.mSet=this.mSet||this.set,this.set=mL,this.m=i,this.mt=l,this.tween=a},r})();ui(Yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return kp[r]=1}),Ri.TweenMax=Ri.TweenLite=Mn,Ri.TimelineLite=Ri.TimelineMax=fi,on=new fi({sortChildren:!1,defaults:Wl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Ai.stringFilter=qx;var xa=[],hf={},gL=[],iy=0,_L=0,cm=function(e){return(hf[e]||gL).map(function(t){return t()})},um=function(){var e=Date.now(),t=[];e-iy>2&&(cm("matchMediaInit"),xa.forEach(function(i){var a=i.queries,l=i.conditions,c,f,h,d;for(f in a)c=xr.matchMedia(a[f]).matches,c&&(h=1),c!==l[f]&&(l[f]=c,d=1);d&&(i.revert(),h&&t.push(i))}),cm("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),iy=e,cm("matchMedia"))},ry=(function(){function r(t,i){this.selector=i&&Jp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=_L++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,a,l){un(i)&&(l=a,a=i,i=un);var c=this,f=function(){var d=rn,p=c.selector,_;return d&&d!==c&&d.data.push(c),l&&(c.selector=Jp(l)),rn=c,_=a.apply(c,arguments),un(_)&&c._r.push(_),rn=d,c.selector=p,c.isReverted=!1,_};return c.last=f,i===un?f(c,function(h){return c.add(null,h)}):i?c[i]=f:f},e.ignore=function(i){var a=rn;rn=null,i(this),rn=a},e.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof r?i.push.apply(i,a.getTweens()):a instanceof Mn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,a){var l=this;if(i?(function(){for(var f=l.getTweens(),h=l.data.length,d;h--;)d=l.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return f.splice(f.indexOf(p),1)}));for(f.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),h=l.data.length;h--;)d=l.data[h],d instanceof fi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Mn)&&d.revert&&d.revert(i);l._r.forEach(function(p){return p(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var c=xa.length;c--;)xa[c].id===this.id&&xa.splice(c,1)},e.revert=function(i){this.kill(i||{})},r})(),vL=(function(){function r(t){this.contexts=[],this.scope=t,rn&&rn.data.push(this)}var e=r.prototype;return e.add=function(i,a,l){vr(i)||(i={matches:i});var c=new ry(0,l||this.scope),f=c.conditions={},h,d,p;rn&&!c.selector&&(c.selector=rn.selector),this.contexts.push(c),a=c.add("onMatch",a),c.queries=i;for(d in i)d==="all"?p=1:(h=xr.matchMedia(i[d]),h&&(xa.indexOf(c)<0&&xa.push(c),(f[d]=h.matches)&&(p=1),h.addListener?h.addListener(um):h.addEventListener("change",um)));return p&&a(c,function(_){return c.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},r})(),df={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(a){return kx(a)})},timeline:function(e){return new fi(e)},getTweensOf:function(e,t){return on.getTweensOf(e,t)},getProperty:function(e,t,i,a){Fn(e)&&(e=qi(e)[0]);var l=ma(e||{}).get,c=i?Ax:bx;return i==="native"&&(i=""),e&&(t?c((wi[t]&&wi[t].get||l)(e,t,i,a)):function(f,h,d){return c((wi[f]&&wi[f].get||l)(e,f,h,d))})},quickSetter:function(e,t,i){if(e=qi(e),e.length>1){var a=e.map(function(p){return di.quickSetter(p,t,i)}),l=a.length;return function(p){for(var _=l;_--;)a[_](p)}}e=e[0]||{};var c=wi[t],f=ma(e),h=f.harness&&(f.harness.aliases||{})[t]||t,d=c?function(p){var _=new c;Lo._pt=0,_.init(e,i?p+i:p,Lo,0,[e]),_.render(1,_),Lo._pt&&lm(1,Lo)}:f.set(e,h);return c?d:function(p){return d(e,h,i?p+i:p,f,1)}},quickTo:function(e,t,i){var a,l=di.to(e,Ci((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),c=function(h,d,p){return l.resetTo(t,h,d,p)};return c.tween=l,c},isTweening:function(e){return on.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_a(e.ease,Wl.ease)),Rx(Wl,e||{})},config:function(e){return Rx(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,a=e.plugins,l=e.defaults,c=e.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!wi[f]&&!Ri[f]&&Yl(t+" effect requires "+f+" plugin.")}),Wp[t]=function(f,h,d){return i(qi(f),Ci(h||{},l),d)},c&&(fi.prototype[t]=function(f,h,d){return this.add(Wp[t](f,vr(h)?h:(d=h)&&{},this),d)})},registerEase:function(e,t){Rt[e]=_a(t)},parseEase:function(e,t){return arguments.length?_a(e,t):Rt},getById:function(e){return on.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new fi(e),a,l;for(i.smoothChildTiming=ci(e.smoothChildTiming),on.remove(i),i._dp=0,i._time=i._tTime=on._time,a=on._first;a;)l=a._next,(t||!(!a._dur&&a instanceof Mn&&a.vars.onComplete===a._targets[0]))&&yr(i,a,a._start-a._delay),a=l;return yr(on,i,0),i},context:function(e,t){return e?new ry(e,t):rn},matchMedia:function(e){return new vL(e)},matchMediaRefresh:function(){return xa.forEach(function(e){var t=e.conditions,i,a;for(a in t)t[a]&&(t[a]=!1,i=1);i&&e.revert()})||um()},addEventListener:function(e,t){var i=hf[e]||(hf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=hf[e],a=i&&i.indexOf(t);a>=0&&i.splice(a,1)},utils:{wrap:ZD,wrapYoyo:KD,distribute:Fx,random:Bx,snap:zx,normalize:jD,getUnit:Jn,clamp:XD,splitColor:Xx,toArray:qi,selector:Jp,mapRange:Hx,pipe:YD,unitize:qD,interpolate:QD,shuffle:Px},install:xx,effects:Wp,ticker:Li,updateRoot:fi.updateRoot,plugins:wi,globalTimeline:on,core:{PropTween:hi,globals:yx,Tween:Mn,Timeline:fi,Animation:tc,getCache:ma,_removeLinkedListItem:lf,reverting:function(){return Hn},context:function(e){return e&&rn&&(rn.data.push(e),e._ctx=rn),rn},suppressOverwrites:function(e){return Pp=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return df[r]=Mn[r]}),Li.add(fi.updateRoot),Lo=df.to({},{duration:0});var xL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},yL=function(e,t){var i=e._targets,a,l,c;for(a in t)for(l=i.length;l--;)c=e._ptLookup[l][a],c&&(c=c.d)&&(c._pt&&(c=xL(c,a)),c&&c.modifier&&c.modifier(t[a],e,i[l],a))},fm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,l,c){c._onInit=function(f){var h,d;if(Fn(l)&&(h={},ui(l,function(p){return h[p]=1}),l=h),t){h={};for(d in l)h[d]=t(l[d]);l=h}yL(f,l)}}}},di=df.registerPlugin({name:"attr",init:function(e,t,i,a,l){var c,f,h;this.tween=i;for(c in t)h=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(h||0)+"",t[c],a,l,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)Hn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},fm("roundProps",$p),fm("modifiers"),fm("snap",zx))||df;Mn.version=fi.version=di.version="3.15.0",vx=1,Bp()&&Uo(),Rt.Power0,Rt.Power1,Rt.Power2,Rt.Power3,Rt.Power4,Rt.Linear,Rt.Quad,Rt.Cubic,Rt.Quart,Rt.Quint,Rt.Strong,Rt.Elastic,Rt.Back,Rt.SteppedEase,Rt.Bounce,Rt.Sine,Rt.Expo,Rt.Circ;var sy,As,Oo,hm,ya,ay,dm,SL=function(){return typeof window<"u"},Vr={},Sa=180/Math.PI,No=Math.PI/180,Po=Math.atan2,oy=1e8,pm=/([A-Z])/g,ML=/(left|right|width|margin|padding|x)/i,EL=/[\s,\(]\S/,Sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},RL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},ly=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wL=function(e,t,i){return e.style[t]=i},CL=function(e,t,i){return e.style.setProperty(t,i)},DL=function(e,t,i){return e._gsap[t]=i},LL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},UL=function(e,t,i,a,l){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},OL=function(e,t,i,a,l){var c=e._gsap;c[t]=i,c.renderTransform(l,c)},cn="transform",pi=cn+"Origin",NL=function r(e,t){var i=this,a=this.target,l=a.style,c=a._gsap;if(e in Vr&&l){if(this.tfm=this.tfm||{},e!=="transform")e=Sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=kr(a,f)}):this.tfm[e]=c.x?c[e]:kr(a,e),e===pi&&(this.tfm.zOrigin=c.zOrigin);else return Sr.transform.split(",").forEach(function(f){return r.call(i,f,t)});if(this.props.indexOf(cn)>=0)return;c.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=cn}(l||t)&&this.props.push(e,t,l[e])},uy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},PL=function(){var e=this.props,t=this.target,i=t.style,a=t._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(pm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)a[c]=this.tfm[c];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=dm(),(!l||!l.isStart)&&!i[cn]&&(uy(i),a.zOrigin&&i[pi]&&(i[pi]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},fy=function(e,t){var i={target:e,props:[],revert:PL,save:NL};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return i.save(a)}),i},hy,gm=function(e,t){var i=As.createElementNS?As.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):As.createElement(e);return i&&i.style?i:As.createElement(e)},Ui=function r(e,t,i){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(pm,"-$1").toLowerCase())||a.getPropertyValue(t)||!i&&r(e,Fo(t)||t,1)||""},dy="O,Moz,ms,Ms,Webkit".split(","),Fo=function(e,t,i){var a=t||ya,l=a.style,c=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(dy[c]+e in l););return c<0?null:(c===3?"ms":c>=0?dy[c]:"")+e},_m=function(){SL()&&window.document&&(sy=window,As=sy.document,Oo=As.documentElement,ya=gm("div")||{style:{}},gm("div"),cn=Fo(cn),pi=cn+"Origin",ya.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hy=!!Fo("perspective"),dm=di.core.reverting,hm=1)},py=function(e){var t=e.ownerSVGElement,i=gm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),l;a.style.display="block",i.appendChild(a),Oo.appendChild(i);try{l=a.getBBox()}catch{}return i.removeChild(a),Oo.removeChild(i),l},my=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},gy=function(e){var t,i;try{t=e.getBBox()}catch{t=py(e),i=1}return t&&(t.width||t.height)||i||(t=py(e)),t&&!t.width&&!t.x&&!t.y?{x:+my(e,["x","cx","x1"])||0,y:+my(e,["y","cy","y1"])||0,width:0,height:0}:t},_y=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&gy(e))},Rs=function(e,t){if(t){var i=e.style,a;t in Vr&&t!==pi&&(t=cn),i.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(a==="--"?t:t.replace(pm,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,a,l,c){var f=new hi(e._pt,t,i,0,1,c?cy:ly);return e._pt=f,f.b=a,f.e=l,e._props.push(i),f},vy={deg:1,rad:1,turn:1},FL={grid:1,flex:1},Cs=function r(e,t,i,a){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=ya.style,h=ML.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(h?"Width":"Height"),_=100,x=a==="px",v=a==="%",E,S,M,y;if(a===c||!l||vy[a]||vy[c])return l;if(c!=="px"&&!x&&(l=r(e,t,i,"px")),y=e.getCTM&&_y(e),(v||c==="%")&&(Vr[t]||~t.indexOf("adius")))return E=y?e.getBBox()[h?"width":"height"]:e[p],gn(v?l/E*_:l/100*E);if(f[h?"width":"height"]=_+(x?c:a),S=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!d?e:e.parentNode,y&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===As||!S.appendChild)&&(S=As.body),M=S._gsap,M&&v&&M.width&&h&&M.time===Li.time&&!M.uncache)return gn(l/M.width*_);if(v&&(t==="height"||t==="width")){var D=e.style[t];e.style[t]=_+a,E=e[p],D?e.style[t]=D:Rs(e,t)}else(v||c==="%")&&!FL[Ui(S,"display")]&&(f.position=Ui(e,"position")),S===e&&(f.position="static"),S.appendChild(ya),E=ya[p],S.removeChild(ya),f.position="absolute";return h&&v&&(M=ma(S),M.time=Li.time,M.width=S[p]),gn(x?E*l/_:E&&l?_/E*l:0)},kr=function(e,t,i,a){var l;return hm||_m(),t in Sr&&t!=="transform"&&(t=Sr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vr[t]&&t!=="transform"?(l=rc(e,a),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:mf(Ui(e,pi))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=pf[t]&&pf[t](e,t,i)||Ui(e,t)||Ex(e,t)||(t==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Cs(e,t,l,i)+i:l},zL=function(e,t,i,a){if(!i||i==="none"){var l=Fo(t,e,1),c=l&&Ui(e,l,1);c&&c!==i?(t=l,i=c):t==="borderColor"&&(i=Ui(e,"borderTopColor"))}var f=new hi(this._pt,e.style,t,0,1,ty),h=0,d=0,p,_,x,v,E,S,M,y,D,R,A,L;if(f.b=i,f.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=Ui(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(S=e.style[t],e.style[t]=a,a=Ui(e,t)||a,S?e.style[t]=S:Rs(e,t)),p=[i,a],qx(p),i=p[0],a=p[1],x=i.match(Ao)||[],L=a.match(Ao)||[],L.length){for(;_=Ao.exec(a);)M=_[0],D=a.substring(h,_.index),E?E=(E+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(E=1),M!==(S=x[d++]||"")&&(v=parseFloat(S)||0,A=S.substr((v+"").length),M.charAt(1)==="="&&(M=Ro(v,M)+A),y=parseFloat(M),R=M.substr((y+"").length),h=Ao.lastIndex-R.length,R||(R=R||Ai.units[t]||A,h===a.length&&(a+=R,f.e+=R)),A!==R&&(v=Cs(e,t,S,R)||0),f._pt={_next:f._pt,p:D||d===1?D:",",s:v,c:y-v,m:E&&E<4||t==="zIndex"?Math.round:0});f.c=h<a.length?a.substring(h,a.length):""}else f.r=t==="display"&&a==="none"?cy:ly;return _x.test(a)&&(f.e=0),this._pt=f,f},xy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BL=function(e){var t=e.split(" "),i=t[0],a=t[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(e=i,i=a,a=e),t[0]=xy[i]||i,t[1]=xy[a]||a,t.join(" ")},IL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,a=i.style,l=t.u,c=i._gsap,f,h,d;if(l==="all"||l===!0)a.cssText="",h=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Vr[f]&&(h=1,f=f==="transformOrigin"?pi:cn),Rs(i,f);h&&(Rs(i,cn),c&&(c.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",rc(i,1),c.uncache=1,uy(a)))}},pf={clearProps:function(e,t,i,a,l){if(l.data!=="isFromStart"){var c=e._pt=new hi(e._pt,t,i,0,0,IL);return c.u=a,c.pr=-10,c.tween=l,e._props.push(i),1}}},ic=[1,0,0,1,0,0],yy={},Sy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},My=function(e){var t=Ui(e,cn);return Sy(t)?ic:t.substr(7).match(gx).map(gn)},vm=function(e,t){var i=e._gsap||ma(e),a=e.style,l=My(e),c,f,h,d;return i.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,l=[h.a,h.b,h.c,h.d,h.e,h.f],l.join(",")==="1,0,0,1,0,0"?ic:l):(l===ic&&!e.offsetParent&&e!==Oo&&!i.svg&&(h=a.display,a.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,Oo.appendChild(e)),l=My(e),h?a.display=h:Rs(e,"display"),d&&(f?c.insertBefore(e,f):c?c.appendChild(e):Oo.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},xm=function(e,t,i,a,l,c){var f=e._gsap,h=l||vm(e,!0),d=f.xOrigin||0,p=f.yOrigin||0,_=f.xOffset||0,x=f.yOffset||0,v=h[0],E=h[1],S=h[2],M=h[3],y=h[4],D=h[5],R=t.split(" "),A=parseFloat(R[0])||0,L=parseFloat(R[1])||0,U,O,P,w;i?h!==ic&&(O=v*M-E*S)&&(P=A*(M/O)+L*(-S/O)+(S*D-M*y)/O,w=A*(-E/O)+L*(v/O)-(v*D-E*y)/O,A=P,L=w):(U=gy(e),A=U.x+(~R[0].indexOf("%")?A/100*U.width:A),L=U.y+(~(R[1]||R[0]).indexOf("%")?L/100*U.height:L)),a||a!==!1&&f.smooth?(y=A-d,D=L-p,f.xOffset=_+(y*v+D*S)-y,f.yOffset=x+(y*E+D*M)-D):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=L,f.smooth=!!a,f.origin=t,f.originIsAbsolute=!!i,e.style[pi]="0px 0px",c&&(ws(c,f,"xOrigin",d,A),ws(c,f,"yOrigin",p,L),ws(c,f,"xOffset",_,f.xOffset),ws(c,f,"yOffset",x,f.yOffset)),e.setAttribute("data-svg-origin",A+" "+L)},rc=function(e,t){var i=e._gsap||new Zx(e);if("x"in i&&!t&&!i.uncache)return i;var a=e.style,l=i.scaleX<0,c="px",f="deg",h=getComputedStyle(e),d=Ui(e,pi)||"0",p,_,x,v,E,S,M,y,D,R,A,L,U,O,P,w,C,B,X,W,G,Z,F,k,V,fe,_e,I,Y,se,me,Q;return p=_=x=S=M=y=D=R=A=0,v=E=1,i.svg=!!(e.getCTM&&_y(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(a[cn]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[cn]!=="none"?h[cn]:"")),a.scale=a.rotate=a.translate="none"),O=vm(e,i.svg),i.svg&&(i.uncache?(V=e.getBBox(),d=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),xm(e,k||d,!!k||i.originIsAbsolute,i.smooth!==!1,O)),L=i.xOrigin||0,U=i.yOrigin||0,O!==ic&&(B=O[0],X=O[1],W=O[2],G=O[3],p=Z=O[4],_=F=O[5],O.length===6?(v=Math.sqrt(B*B+X*X),E=Math.sqrt(G*G+W*W),S=B||X?Po(X,B)*Sa:0,D=W||G?Po(W,G)*Sa+S:0,D&&(E*=Math.abs(Math.cos(D*No))),i.svg&&(p-=L-(L*B+U*W),_-=U-(L*X+U*G))):(Q=O[6],se=O[7],_e=O[8],I=O[9],Y=O[10],me=O[11],p=O[12],_=O[13],x=O[14],P=Po(Q,Y),M=P*Sa,P&&(w=Math.cos(-P),C=Math.sin(-P),k=Z*w+_e*C,V=F*w+I*C,fe=Q*w+Y*C,_e=Z*-C+_e*w,I=F*-C+I*w,Y=Q*-C+Y*w,me=se*-C+me*w,Z=k,F=V,Q=fe),P=Po(-W,Y),y=P*Sa,P&&(w=Math.cos(-P),C=Math.sin(-P),k=B*w-_e*C,V=X*w-I*C,fe=W*w-Y*C,me=G*C+me*w,B=k,X=V,W=fe),P=Po(X,B),S=P*Sa,P&&(w=Math.cos(P),C=Math.sin(P),k=B*w+X*C,V=Z*w+F*C,X=X*w-B*C,F=F*w-Z*C,B=k,Z=V),M&&Math.abs(M)+Math.abs(S)>359.9&&(M=S=0,y=180-y),v=gn(Math.sqrt(B*B+X*X+W*W)),E=gn(Math.sqrt(F*F+Q*Q)),P=Po(Z,F),D=Math.abs(P)>2e-4?P*Sa:0,A=me?1/(me<0?-me:me):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Sy(Ui(e,cn)),k&&e.setAttribute("transform",k))),Math.abs(D)>90&&Math.abs(D)<270&&(l?(v*=-1,D+=S<=0?180:-180,S+=S<=0?180:-180):(E*=-1,D+=D<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=x+c,i.scaleX=gn(v),i.scaleY=gn(E),i.rotation=gn(S)+f,i.rotationX=gn(M)+f,i.rotationY=gn(y)+f,i.skewX=D+f,i.skewY=R+f,i.transformPerspective=A+c,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(a[pi]=mf(d)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?GL:hy?Ey:HL,i.uncache=0,i},mf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ym=function(e,t,i){var a=Jn(t);return gn(parseFloat(t)+parseFloat(Cs(e,"x",i+"px",a)))+a},HL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ey(e,t)},Ma="0deg",sc="0px",Ea=") ",Ey=function(e,t){var i=t||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.z,d=i.rotation,p=i.rotationY,_=i.rotationX,x=i.skewX,v=i.skewY,E=i.scaleX,S=i.scaleY,M=i.transformPerspective,y=i.force3D,D=i.target,R=i.zOrigin,A="",L=y==="auto"&&e&&e!==1||y===!0;if(R&&(_!==Ma||p!==Ma)){var U=parseFloat(p)*No,O=Math.sin(U),P=Math.cos(U),w;U=parseFloat(_)*No,w=Math.cos(U),c=ym(D,c,O*w*-R),f=ym(D,f,-Math.sin(U)*-R),h=ym(D,h,P*w*-R+R)}M!==sc&&(A+="perspective("+M+Ea),(a||l)&&(A+="translate("+a+"%, "+l+"%) "),(L||c!==sc||f!==sc||h!==sc)&&(A+=h!==sc||L?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+Ea),d!==Ma&&(A+="rotate("+d+Ea),p!==Ma&&(A+="rotateY("+p+Ea),_!==Ma&&(A+="rotateX("+_+Ea),(x!==Ma||v!==Ma)&&(A+="skew("+x+", "+v+Ea),(E!==1||S!==1)&&(A+="scale("+E+", "+S+Ea),D.style[cn]=A||"translate(0, 0)"},GL=function(e,t){var i=t||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.rotation,d=i.skewX,p=i.skewY,_=i.scaleX,x=i.scaleY,v=i.target,E=i.xOrigin,S=i.yOrigin,M=i.xOffset,y=i.yOffset,D=i.forceCSS,R=parseFloat(c),A=parseFloat(f),L,U,O,P,w;h=parseFloat(h),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,h+=p),h||d?(h*=No,d*=No,L=Math.cos(h)*_,U=Math.sin(h)*_,O=Math.sin(h-d)*-x,P=Math.cos(h-d)*x,d&&(p*=No,w=Math.tan(d-p),w=Math.sqrt(1+w*w),O*=w,P*=w,p&&(w=Math.tan(p),w=Math.sqrt(1+w*w),L*=w,U*=w)),L=gn(L),U=gn(U),O=gn(O),P=gn(P)):(L=_,P=x,U=O=0),(R&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(R=Cs(v,"x",c,"px"),A=Cs(v,"y",f,"px")),(E||S||M||y)&&(R=gn(R+E-(E*L+S*O)+M),A=gn(A+S-(E*U+S*P)+y)),(a||l)&&(w=v.getBBox(),R=gn(R+a/100*w.width),A=gn(A+l/100*w.height)),w="matrix("+L+","+U+","+O+","+P+","+R+","+A+")",v.setAttribute("transform",w),D&&(v.style[cn]=w)},VL=function(e,t,i,a,l){var c=360,f=Fn(l),h=parseFloat(l)*(f&&~l.indexOf("rad")?Sa:1),d=h-a,p=a+d+"deg",_,x;return f&&(_=l.split("_")[1],_==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),_==="cw"&&d<0?d=(d+c*oy)%c-~~(d/c)*c:_==="ccw"&&d>0&&(d=(d-c*oy)%c-~~(d/c)*c)),e._pt=x=new hi(e._pt,t,i,a,d,TL),x.e=p,x.u="deg",e._props.push(i),x},Ty=function(e,t){for(var i in t)e[i]=t[i];return e},kL=function(e,t,i){var a=Ty({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,h,d,p,_,x,v,E;a.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),c[cn]=t,f=rc(i,1),Rs(i,cn),i.setAttribute("transform",d)):(d=getComputedStyle(i)[cn],c[cn]=t,f=rc(i,1),c[cn]=d);for(h in Vr)d=a[h],p=f[h],d!==p&&l.indexOf(h)<0&&(v=Jn(d),E=Jn(p),_=v!==E?Cs(i,h,d,E):parseFloat(d),x=parseFloat(p),e._pt=new hi(e._pt,f,h,_,x-_,mm),e._pt.u=E||0,e._props.push(h));Ty(f,a)};ui("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",a="Bottom",l="Left",c=(e<3?[t,i,a,l]:[t+l,t+i,a+i,a+l]).map(function(f){return e<2?r+f:"border"+f+r});pf[e>1?"border"+r:r]=function(f,h,d,p,_){var x,v;if(arguments.length<4)return x=c.map(function(E){return kr(f,E,d)}),v=x.join(" "),v.split(x[0]).length===5?x[0]:v;x=(p+"").split(" "),v={},c.forEach(function(E,S){return v[E]=x[S]=x[S]||x[(S-1)/2|0]}),f.init(h,v,_)}});var by={name:"css",register:_m,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,a,l){var c=this._props,f=e.style,h=i.vars.startAt,d,p,_,x,v,E,S,M,y,D,R,A,L,U,O,P,w;hm||_m(),this.styles=this.styles||fy(e),P=this.styles.props,this.tween=i;for(S in t)if(S!=="autoRound"&&(p=t[S],!(wi[S]&&Kx(S,t,i,a,e,l)))){if(v=typeof p,E=pf[S],v==="function"&&(p=p.call(i,a,e,l),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=Ql(p)),E)E(this,e,S,p,i)&&(O=1);else if(S.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(S)+"").trim(),p+="",Ts.lastIndex=0,Ts.test(d)||(M=Jn(d),y=Jn(p),y?M!==y&&(d=Cs(e,S,d,y)+y):M&&(p+=M)),this.add(f,"setProperty",d,p,a,l,0,0,S),c.push(S),P.push(S,0,f[S]);else if(v!=="undefined"){if(h&&S in h?(d=typeof h[S]=="function"?h[S].call(i,a,e,l):h[S],Fn(d)&&~d.indexOf("random(")&&(d=Ql(d)),Jn(d+"")||d==="auto"||(d+=Ai.units[S]||Jn(kr(e,S))||""),(d+"").charAt(1)==="="&&(d=kr(e,S))):d=kr(e,S),x=parseFloat(d),D=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),D&&(p=p.substr(2)),_=parseFloat(p),S in Sr&&(S==="autoAlpha"&&(x===1&&kr(e,"visibility")==="hidden"&&_&&(x=0),P.push("visibility",0,f.visibility),ws(this,f,"visibility",x?"inherit":"hidden",_?"inherit":"hidden",!_)),S!=="scale"&&S!=="transform"&&(S=Sr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),R=S in Vr,R){if(this.styles.save(S),w=p,v==="string"&&p.substring(0,6)==="var(--"){if(p=Ui(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=p,p=Ui(e,"perspective"),C?e.style.perspective=C:Rs(e,"perspective")}_=parseFloat(p)}if(A||(L=e._gsap,L.renderTransform&&!t.parseTransform||rc(e,t.parseTransform),U=t.smoothOrigin!==!1&&L.smooth,A=this._pt=new hi(this._pt,f,cn,0,1,L.renderTransform,L,0,-1),A.dep=1),S==="scale")this._pt=new hi(this._pt,L,"scaleY",L.scaleY,(D?Ro(L.scaleY,D+_):_)-L.scaleY||0,mm),this._pt.u=0,c.push("scaleY",S),S+="X";else if(S==="transformOrigin"){P.push(pi,0,f[pi]),p=BL(p),L.svg?xm(e,p,0,U,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==L.zOrigin&&ws(this,L,"zOrigin",L.zOrigin,y),ws(this,f,S,mf(d),mf(p)));continue}else if(S==="svgOrigin"){xm(e,p,1,U,0,this);continue}else if(S in yy){VL(this,L,S,x,D?Ro(x,D+p):p);continue}else if(S==="smoothOrigin"){ws(this,L,"smooth",L.smooth,p);continue}else if(S==="force3D"){L[S]=p;continue}else if(S==="transform"){kL(this,p,e);continue}}else S in f||(S=Fo(S)||S);if(R||(_||_===0)&&(x||x===0)&&!EL.test(p)&&S in f)M=(d+"").substr((x+"").length),_||(_=0),y=Jn(p)||(S in Ai.units?Ai.units[S]:M),M!==y&&(x=Cs(e,S,d,y)),this._pt=new hi(this._pt,R?L:f,S,x,(D?Ro(x,D+_):_)-x,!R&&(y==="px"||S==="zIndex")&&t.autoRound!==!1?RL:mm),this._pt.u=y||0,R&&w!==p?(this._pt.b=d,this._pt.e=w,this._pt.r=AL):M!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=bL);else if(S in f)zL.call(this,e,S,d,D?D+p:p);else if(S in e)this.add(e,S,d||e[S],D?D+p:p,a,l);else if(S!=="parseTransform"){Vp(S,p);continue}R||(S in f?P.push(S,0,f[S]):typeof e[S]=="function"?P.push(S,2,e[S]()):P.push(S,1,d||e[S])),c.push(S)}}O&&ny(this)},render:function(e,t){if(t.tween._time||!dm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:kr,aliases:Sr,getSetter:function(e,t,i){var a=Sr[t];return a&&a.indexOf(",")<0&&(t=a),t in Vr&&t!==pi&&(e._gsap.x||kr(e,"x"))?i&&ay===i?t==="scale"?LL:DL:(ay=i||{})&&(t==="scale"?UL:OL):e.style&&!zp(e.style[t])?wL:~t.indexOf("-")?CL:om(e,t)},core:{_removeProperty:Rs,_getMatrix:vm}};di.utils.checkPrefix=Fo,di.core.getStyleSaver=fy,(function(r,e,t,i){var a=ui(r+","+e+","+t,function(l){Vr[l]=1});ui(e,function(l){Ai.units[l]="deg",yy[l]=1}),Sr[a[13]]=r+","+e,ui(i,function(l){var c=l.split(":");Sr[c[1]]=a[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ai.units[r]="px"}),di.registerPlugin(by);var Ds=di.registerPlugin(by)||di;Ds.core.Tween;var Mr,Sm,ac,Ay,zo,Ta,Mm,Ry,wy=function(){return Mr||typeof window<"u"&&(Mr=window.gsap)},Em={},XL=function(e){return Math.round(e*1e4)/1e4},Tm=function(e){return Ry(e).id},oc=function(e){return Em[Tm(typeof e=="string"?ac(e)[0]:e)]},Cy=function(e){var t=zo,i;if(e-Mm>=.05)for(Mm=e;t;)i=t.g(t.t,t.p),(i!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=i,t.t2=t.t1,t.t1=e),t=t._next},WL={deg:360,rad:Math.PI*2},bm=function(){Mr=wy(),Mr&&(ac=Mr.utils.toArray,Ay=Mr.utils.getUnit,Ry=Mr.core.getCache,Ta=Mr.ticker,Sm=1)},YL=function(e,t,i,a){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=WL[i||Ay(this.g(e,t))],this.v1=this.v2=this.g(e,t),this.t1=this.t2=Ta.time,a&&(this._next=a,a._prev=this)},lc=(function(){function r(t,i){Sm||bm(),this.target=ac(t)[0],Em[Tm(this.target)]=this,this._props={},i&&this.add(i)}r.register=function(i){Mr=i,bm()};var e=r.prototype;return e.get=function(i,a){var l=this._props[i]||console.warn("Not tracking "+i+" velocity."),c,f,h;return c=parseFloat(a?l.v1:l.g(l.t,l.p)),f=c-parseFloat(l.v2),h=l.rCap,h&&(f=f%h,f!==f%(h/2)&&(f=f<0?f+h:f-h)),XL(f/((a?l.t1:Ta.time)-l.t2))},e.getAll=function(){var i={},a=this._props,l;for(l in a)i[l]=this.get(l);return i},e.isTracking=function(i){return i in this._props},e.add=function(i,a){var l=this._props[i];l?(l.v1=l.v2=l.g(l.t,l.p),l.t1=l.t2=Ta.time):(zo||(Ta.add(Cy),Mm=Ta.time),zo=this._props[i]=new YL(this.target,i,a,zo))},e.remove=function(i){var a=this._props[i],l,c;a&&(l=a._prev,c=a._next,l&&(l._next=c),c?c._prev=l:zo===a&&(Ta.remove(Cy),zo=0),delete this._props[i])},e.kill=function(i){for(var a in this._props)this.remove(a);i||delete Em[Tm(this.target)]},r.track=function(i,a,l){Sm||bm();for(var c=[],f=ac(i),h=a.split(","),d=(l||"").split(","),p=f.length,_,x;p--;){for(_=oc(f[p])||new r(f[p]),x=h.length;x--;)_.add(h[x],d[x]||d[0]);c.push(_)}return c},r.untrack=function(i,a){var l=a&&a.split(",");ac(i).forEach(function(c){var f=oc(c);f&&(l?l.forEach(function(h){return f.remove(h)}):f.kill(1))})},r.isTracking=function(i,a){var l=oc(i);return l&&l.isTracking(a)},r.getVelocity=function(i,a){var l=oc(i);return!l||!l.isTracking(a)?console.warn("Not tracking velocity of "+a):l.get(a)},r})();lc.getByTarget=oc,wy()&&Mr.registerPlugin(lc);var Ln,Dy,Ly,Uy,Am,cc,Oy,Ny,Py,Rm,Fy,uc,wm,zy,gf=lc.getByTarget,By=function(){return Ln||typeof window<"u"&&(Ln=window.gsap)&&Ln.registerPlugin&&Ln},qL=function(e){return typeof e=="string"},fc=function(e){return typeof e=="number"},Ls=function(e){return typeof e=="object"},Cm=function(e){return typeof e=="function"},jL=1,Iy=Array.isArray,ZL=function(e){return e},ba=1e10,Hy=1/ba,Gy=.05,KL=function(e){return Math.round(e*1e4)/1e4},QL=function(e,t,i){for(var a in t)!(a in e)&&a!==i&&(e[a]=t[a]);return e},JL=function r(e){var t={},i,a;for(i in e)t[i]=Ls(a=e[i])&&!Iy(a)?r(a):a;return t},Vy=function(e,t,i,a,l){var c=t.length,f=0,h=ba,d,p,_,x;if(Ls(e)){for(;c--;){d=t[c],p=0;for(_ in e)x=d[_]-e[_],p+=x*x;p<h&&(f=c,h=p)}if((l||ba)<ba&&l<Math.sqrt(h))return e}else for(;c--;)d=t[c],p=d-e,p<0&&(p=-p),p<h&&d>=a&&d<=i&&(f=c,h=p);return t[f]},ky=function(e,t,i,a,l,c,f){if(e.end==="auto")return e;var h=e.end,d,p;if(i=isNaN(i)?ba:i,a=isNaN(a)?-ba:a,Ls(t)){if(d=t.calculated?t:(Cm(h)?h(t,f):Vy(t,h,i,a,c))||t,!t.calculated){for(p in d)t[p]=d[p];t.calculated=!0}d=d[l]}else d=Cm(h)?h(t,f):Iy(h)?Vy(t,h,i,a,c):parseFloat(h);return d>i?d=i:d<a&&(d=a),{max:d,min:d,unitFactor:e.unitFactor}},_f=function(e,t,i){return isNaN(e[t])?i:+e[t]},Dm=function(e,t){return t*Gy*e/Rm},Xy=function(e,t,i){return Math.abs((t-e)*Rm/i/Gy)},Wy={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},Yy=function(e,t,i,a){if(t.linkedProps){var l=t.linkedProps.split(","),c={},f,h,d,p,_,x;for(f=0;f<l.length;f++)h=l[f],d=t[h],d&&(fc(d.velocity)?p=d.velocity:(_=_||gf(e),p=_&&_.isTracking(h)?_.get(h):0),x=Math.abs(p/_f(d,"resistance",a)),c[h]=parseFloat(i(e,h))+Dm(p,x));return c}},$L=function(e,t,i,a,l,c){if(i===void 0&&(i=10),a===void 0&&(a=.2),l===void 0&&(l=1),qL(e)&&(e=Uy(e)[0]),!e)return 0;var f=0,h=ba,d=t.inertia||t,p=Py(e).get,_=_f(d,"resistance",cc.resistance),x,v,E,S,M,y,D,R,A,L;L=Yy(e,d,p,_);for(x in d)Wy[x]||(v=d[x],Ls(v)||(R=R||gf(e),R&&R.isTracking(x)?v=fc(v)?{velocity:v}:{velocity:R.get(x)}:(S=+v||0,E=Math.abs(S/_))),Ls(v)&&(fc(v.velocity)?S=v.velocity:(R=R||gf(e),S=R&&R.isTracking(x)?R.get(x):0),E=Fy(a,i,Math.abs(S/_f(v,"resistance",_))),M=parseFloat(p(e,x))||0,y=M+Dm(S,E),"end"in v&&(v=ky(v,L&&x in L?L:y,v.max,v.min,x,d.radius,S),uc===t&&(uc=d=JL(t)),d[x]=QL(v,d[x],"end")),"max"in v&&y>+v.max+Hy?(A=v.unitFactor||cc.unitFactors[x]||1,D=M>v.max&&v.min!==v.max||S*A>-15&&S*A<45?a+(i-a)*.1:Xy(M,v.max,S),D+l<h&&(h=D+l)):"min"in v&&y<+v.min-Hy&&(A=v.unitFactor||cc.unitFactors[x]||1,D=M<v.min&&v.min!==v.max||S*A>-45&&S*A<15?a+(i-a)*.1:Xy(M,v.min,S),D+l<h&&(h=D+l)),D>f&&(f=D)),E>f&&(f=E));return f>h&&(f=h),f>i?i:f<a?a:f},qy=function(){Ln=By(),Ln&&(Ly=Ln.parseEase,Uy=Ln.utils.toArray,Oy=Ln.utils.getUnit,Py=Ln.core.getCache,Fy=Ln.utils.clamp,wm=Ln.core.getStyleSaver,zy=Ln.core.reverting||function(){},Am=Ly("power3"),Rm=Am(.05),Ny=Ln.core.PropTween,Ln.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),cc=Ln.config(),Ln.registerPlugin(lc),Dy=1)},Lm={version:"3.15.0",name:"inertia",register:function(e){Ln=e,qy()},init:function(e,t,i,a,l){Dy||qy();var c=gf(e);if(t==="auto"){if(!c){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=c.getAll()}this.styles=wm&&typeof e.style=="object"&&wm(e),this.target=e,this.tween=i,uc=t;var f=e._gsap,h=f.get,d=t.duration,p=Ls(d),_=t.preventOvershoot||p&&d.overshoot===0,x=_f(t,"resistance",cc.resistance),v=fc(d)?d:$L(e,t,p&&d.max||10,p&&d.min||.2,p&&"overshoot"in d?+d.overshoot:_?0:1),E,S,M,y,D,R,A,L,U;t=uc,uc=0,U=Yy(e,t,h,x);for(E in t)Wy[E]||(S=t[E],Cm(S)&&(S=S(a,e,l)),fc(S)?D=S:Ls(S)&&!isNaN(S.velocity)?D=+S.velocity:c&&c.isTracking(E)?D=c.get(E):console.warn("ERROR: No velocity was defined for "+e+" property: "+E),R=Dm(D,v),L=0,M=h(e,E),y=Oy(M),M=parseFloat(M),Ls(S)&&(A=M+R,"end"in S&&(S=ky(S,U&&E in U?U:A,S.max,S.min,E,t.radius,D)),"max"in S&&+S.max<A?_||S.preventOvershoot?R=S.max-M:L=S.max-M-R:"min"in S&&+S.min>A&&(_||S.preventOvershoot?R=S.min-M:L=S.min-M-R)),this._props.push(E),this.styles&&this.styles.save(E),this._pt=new Ny(this._pt,e,E,M,0,ZL,0,f.set(e,E,this)),this._pt.u=y||0,this._pt.c1=R,this._pt.c2=L);return i.duration(v),jL},render:function(e,t){var i=t._pt;if(e=Am(t.tween._time/t.tween._dur),e||!zy())for(;i;)i.set(i.t,i.p,KL(i.s+i.c1*e+i.c2*e*e)+i.u,i.d,e),i=i._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return Lm[r]=lc[r]}),By()&&Ln.registerPlugin(Lm),Ds.registerPlugin(Lm);const eU=(r,e)=>{let t=0;return function(...i){const a=performance.now();a-t>=e&&(t=a,r.apply(this,i))}};function jy(r){const e=r.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:{r:0,g:0,b:0}}const tU=({dotSize:r=16,gap:e=32,baseColor:t="#5227FF",activeColor:i="#5227FF",proximity:a=150,speedTrigger:l=100,shockRadius:c=250,shockStrength:f=5,maxSpeed:h=5e3,resistance:d=750,returnDuration:p=1.5,className:_="",style:x})=>{const v=Le.useRef(null),E=Le.useRef(null),S=Le.useRef([]),M=Le.useRef({x:0,y:0,vx:0,vy:0,speed:0,lastTime:0,lastX:0,lastY:0}),y=Le.useMemo(()=>jy(t),[t]),D=Le.useMemo(()=>jy(i),[i]),R=Le.useMemo(()=>{if(typeof window>"u"||!window.Path2D)return null;const L=new window.Path2D;return L.arc(0,0,r/2,0,Math.PI*2),L},[r]),A=Le.useCallback(()=>{const L=v.current,U=E.current;if(!L||!U)return;const{width:O,height:P}=L.getBoundingClientRect(),w=window.devicePixelRatio||1;U.width=O*w,U.height=P*w,U.style.width=`${O}px`,U.style.height=`${P}px`;const C=U.getContext("2d");C&&C.scale(w,w);const B=Math.floor((O+e)/(r+e)),X=Math.floor((P+e)/(r+e)),W=r+e,G=W*B-e,Z=W*X-e,F=O-G,k=P-Z,V=F/2+r/2,fe=k/2+r/2,_e=[];for(let I=0;I<X;I++)for(let Y=0;Y<B;Y++){const se=V+Y*W,me=fe+I*W;_e.push({cx:se,cy:me,xOffset:0,yOffset:0,_inertiaApplied:!1})}S.current=_e},[r,e]);return Le.useEffect(()=>{if(!R)return;let L;const U=a*a,O=()=>{const P=E.current;if(!P)return;const w=P.getContext("2d");if(!w)return;w.clearRect(0,0,P.width,P.height);const{x:C,y:B}=M.current;for(const X of S.current){const W=X.cx+X.xOffset,G=X.cy+X.yOffset,Z=X.cx-C,F=X.cy-B,k=Z*Z+F*F;let V=t;if(k<=U){const _e=1-Math.sqrt(k)/a,I=Math.round(y.r+(D.r-y.r)*_e),Y=Math.round(y.g+(D.g-y.g)*_e),se=Math.round(y.b+(D.b-y.b)*_e);V=`rgb(${I},${Y},${se})`}w.save(),w.translate(W,G),w.fillStyle=V,w.fill(R),w.restore()}L=requestAnimationFrame(O)};return O(),()=>cancelAnimationFrame(L)},[a,t,D,y,R]),Le.useEffect(()=>{A();let L=null;return"ResizeObserver"in window?(L=new ResizeObserver(A),v.current&&L.observe(v.current)):window.addEventListener("resize",A),()=>{L?L.disconnect():window.removeEventListener("resize",A)}},[A]),Le.useEffect(()=>{const L=P=>{const w=performance.now(),C=M.current,B=C.lastTime?w-C.lastTime:16,X=P.clientX-C.lastX,W=P.clientY-C.lastY;let G=X/B*1e3,Z=W/B*1e3,F=Math.hypot(G,Z);if(F>h){const V=h/F;G*=V,Z*=V,F=h}C.lastTime=w,C.lastX=P.clientX,C.lastY=P.clientY,C.vx=G,C.vy=Z,C.speed=F;const k=E.current.getBoundingClientRect();C.x=P.clientX-k.left,C.y=P.clientY-k.top;for(const V of S.current){const fe=Math.hypot(V.cx-C.x,V.cy-C.y);if(F>l&&fe<a&&!V._inertiaApplied){V._inertiaApplied=!0,Ds.killTweensOf(V);const _e=V.cx-C.x+G*.005,I=V.cy-C.y+Z*.005;Ds.to(V,{inertia:{xOffset:_e,yOffset:I,resistance:d},onComplete:()=>{Ds.to(V,{xOffset:0,yOffset:0,duration:p,ease:"elastic.out(1,0.75)"}),V._inertiaApplied=!1}})}}},U=P=>{const w=E.current.getBoundingClientRect(),C=P.clientX-w.left,B=P.clientY-w.top;for(const X of S.current){const W=Math.hypot(X.cx-C,X.cy-B);if(W<c&&!X._inertiaApplied){X._inertiaApplied=!0,Ds.killTweensOf(X);const G=Math.max(0,1-W/c),Z=(X.cx-C)*f*G,F=(X.cy-B)*f*G;Ds.to(X,{inertia:{xOffset:Z,yOffset:F,resistance:d},onComplete:()=>{Ds.to(X,{xOffset:0,yOffset:0,duration:p,ease:"elastic.out(1,0.75)"}),X._inertiaApplied=!1}})}}},O=eU(L,50);return window.addEventListener("mousemove",O,{passive:!0}),window.addEventListener("click",U),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("click",U)}},[h,l,a,d,p,c,f]),qn.jsx("section",{className:`dot-grid ${_}`,style:x,children:qn.jsx("div",{ref:v,className:"dot-grid__wrap",children:qn.jsx("canvas",{ref:E,className:"dot-grid__canvas"})})})},nU=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,iU=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);

      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;

      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);

  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;function rU({focal:r=[.5,.5],rotation:e=[1,0],starSpeed:t=.5,density:i=1,hueShift:a=140,disableAnimation:l=!1,speed:c=1,mouseInteraction:f=!0,glowIntensity:h=.3,saturation:d=0,mouseRepulsion:p=!0,repulsionStrength:_=2,twinkleIntensity:x=.3,rotationSpeed:v=.1,autoCenterRepulsion:E=0,transparent:S=!0,...M}){const y=Le.useRef(null),D=Le.useRef({x:.5,y:.5}),R=Le.useRef({x:.5,y:.5}),A=Le.useRef(0),L=Le.useRef(0);return Le.useEffect(()=>{if(!y.current)return;const U=y.current,O=new Vl({alpha:S,premultipliedAlpha:!1}),P=O.gl;S?(P.enable(P.BLEND),P.blendFunc(P.SRC_ALPHA,P.ONE_MINUS_SRC_ALPHA),P.clearColor(0,0,0,0)):P.clearColor(0,0,0,1);let w;function C(){O.setSize(U.offsetWidth*1,U.offsetHeight*1),w&&(w.uniforms.uResolution.value=new ju(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height))}window.addEventListener("resize",C,!1),C();const B=new Xl(P);w=new Gl(P,{vertex:nU,fragment:iU,uniforms:{uTime:{value:0},uResolution:{value:new ju(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height)},uFocal:{value:new Float32Array(r)},uRotation:{value:new Float32Array(e)},uStarSpeed:{value:t},uDensity:{value:i},uHueShift:{value:a},uSpeed:{value:c},uMouse:{value:new Float32Array([R.current.x,R.current.y])},uGlowIntensity:{value:h},uSaturation:{value:d},uMouseRepulsion:{value:p},uTwinkleIntensity:{value:x},uRotationSpeed:{value:v},uRepulsionStrength:{value:_},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:E},uTransparent:{value:S}}});const X=new kl(P,{geometry:B,program:w});let W;function G(k){W=requestAnimationFrame(G),l||(w.uniforms.uTime.value=k*.001,w.uniforms.uStarSpeed.value=k*.001*t/10);const V=.05;R.current.x+=(D.current.x-R.current.x)*V,R.current.y+=(D.current.y-R.current.y)*V,L.current+=(A.current-L.current)*V,w.uniforms.uMouse.value[0]=R.current.x,w.uniforms.uMouse.value[1]=R.current.y,w.uniforms.uMouseActiveFactor.value=L.current,O.render({scene:X})}W=requestAnimationFrame(G),U.appendChild(P.canvas);function Z(k){const V=U.getBoundingClientRect(),fe=(k.clientX-V.left)/V.width,_e=1-(k.clientY-V.top)/V.height;D.current={x:fe,y:_e},A.current=1}function F(){A.current=0}return f&&(U.addEventListener("mousemove",Z),U.addEventListener("mouseleave",F)),()=>{cancelAnimationFrame(W),window.removeEventListener("resize",C),f&&(U.removeEventListener("mousemove",Z),U.removeEventListener("mouseleave",F)),U.removeChild(P.canvas),P.getExtension("WEBGL_lose_context")?.loseContext()}},[r,e,t,i,a,l,c,f,h,d,p,x,v,_,E,S]),qn.jsx("div",{ref:y,className:"galaxy-container",...M})}const sU=({hue:r=230,xOffset:e=0,speed:t=1,intensity:i=1,size:a=1})=>{const l=Le.useRef(null);return Le.useEffect(()=>{const c=l.current;if(!c)return;const f=()=>{c.width=c.clientWidth,c.height=c.clientHeight};f(),window.addEventListener("resize",f);const h=c.getContext("webgl",{alpha:!0,premultipliedAlpha:!1});if(!h){console.error("WebGL not supported");return}const d=`
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,p=`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;

      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));

          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;

          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;

          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          float a = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
          fragColor = vec4(col, a);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `,_=(B,X)=>{const W=h.createShader(X);return W?(h.shaderSource(W,B),h.compileShader(W),h.getShaderParameter(W,h.COMPILE_STATUS)?W:(console.error("Shader compile error:",h.getShaderInfoLog(W)),h.deleteShader(W),null)):null},x=_(d,h.VERTEX_SHADER),v=_(p,h.FRAGMENT_SHADER);if(!x||!v)return;const E=h.createProgram();if(!E)return;if(h.attachShader(E,x),h.attachShader(E,v),h.linkProgram(E),!h.getProgramParameter(E,h.LINK_STATUS)){console.error("Program linking error:",h.getProgramInfoLog(E));return}h.useProgram(E);const S=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),M=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,M),h.bufferData(h.ARRAY_BUFFER,S,h.STATIC_DRAW);const y=h.getAttribLocation(E,"aPosition");h.enableVertexAttribArray(y),h.vertexAttribPointer(y,2,h.FLOAT,!1,0,0);const D=h.getUniformLocation(E,"iResolution"),R=h.getUniformLocation(E,"iTime"),A=h.getUniformLocation(E,"uHue"),L=h.getUniformLocation(E,"uXOffset"),U=h.getUniformLocation(E,"uSpeed"),O=h.getUniformLocation(E,"uIntensity"),P=h.getUniformLocation(E,"uSize"),w=performance.now(),C=()=>{f(),h.viewport(0,0,c.width,c.height),h.uniform2f(D,c.width,c.height);const B=performance.now();h.uniform1f(R,(B-w)/1e3),h.uniform1f(A,r),h.uniform1f(L,e),h.uniform1f(U,t),h.uniform1f(O,i),h.uniform1f(P,a),h.drawArrays(h.TRIANGLES,0,6),requestAnimationFrame(C)};return requestAnimationFrame(C),()=>{window.removeEventListener("resize",f)}},[r,e,t,i,a]),qn.jsx("canvas",{ref:l,className:"lightning-container"})},aU=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,oU=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function lU(r){const{colorStops:e=["#5227FF","#7cff67","#5227FF"],amplitude:t=1,blend:i=.5}=r,a=Le.useRef(r);a.current=r;const l=Le.useRef(null);return Le.useEffect(()=>{const c=l.current;if(!c)return;const f=new Vl({alpha:!0,premultipliedAlpha:!0,antialias:!0}),h=f.gl;h.clearColor(0,0,0,0),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),h.canvas.style.backgroundColor="transparent";let d;function p(){if(!c)return;const M=c.offsetWidth,y=c.offsetHeight;f.setSize(M,y),d&&(d.uniforms.uResolution.value=[M,y])}window.addEventListener("resize",p);const _=new Xl(h);_.attributes.uv&&delete _.attributes.uv;const x=e.map(M=>{const y=new ju(M);return[y.r,y.g,y.b]});d=new Gl(h,{vertex:aU,fragment:oU,uniforms:{uTime:{value:0},uAmplitude:{value:t},uColorStops:{value:x},uResolution:{value:[c.offsetWidth,c.offsetHeight]},uBlend:{value:i}}});const v=new kl(h,{geometry:_,program:d});c.appendChild(h.canvas);let E=0;const S=M=>{E=requestAnimationFrame(S);const{time:y=M*.01,speed:D=1}=a.current;d.uniforms.uTime.value=y*D*.1,d.uniforms.uAmplitude.value=a.current.amplitude??1,d.uniforms.uBlend.value=a.current.blend??i;const R=a.current.colorStops??e;d.uniforms.uColorStops.value=R.map(A=>{const L=new ju(A);return[L.r,L.g,L.b]}),f.render({scene:v})};return E=requestAnimationFrame(S),p(),()=>{cancelAnimationFrame(E),window.removeEventListener("resize",p),c&&h.canvas.parentNode===c&&c.removeChild(h.canvas),h.getExtension("WEBGL_lose_context")?.loseContext()}},[t]),qn.jsx("div",{ref:l,className:"aurora-container"})}const cU="#ffffff",Zy=r=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},Ky=(r,e,t)=>{switch(r){case"top-left":return{anchor:[0,-.2*t],dir:[0,1]};case"top-right":return{anchor:[e,-.2*t],dir:[0,1]};case"left":return{anchor:[-.2*e,.5*t],dir:[1,0]};case"right":return{anchor:[(1+.2)*e,.5*t],dir:[-1,0]};case"bottom-left":return{anchor:[0,(1+.2)*t],dir:[0,-1]};case"bottom-center":return{anchor:[.5*e,(1+.2)*t],dir:[0,-1]};case"bottom-right":return{anchor:[e,(1+.2)*t],dir:[0,-1]};default:return{anchor:[.5*e,-.2*t],dir:[0,1]}}},uU=({raysOrigin:r="top-center",raysColor:e=cU,raysSpeed:t=1,lightSpread:i=1,rayLength:a=2,pulsating:l=!1,fadeDistance:c=1,saturation:f=1,followMouse:h=!0,mouseInfluence:d=.1,noiseAmount:p=0,distortion:_=0,className:x=""})=>{const v=Le.useRef(null),E=Le.useRef(null),S=Le.useRef(null),M=Le.useRef({x:.5,y:.5}),y=Le.useRef({x:.5,y:.5}),D=Le.useRef(null),R=Le.useRef(null),A=Le.useRef(null),[L,U]=Le.useState(!1),O=Le.useRef(null);return Le.useEffect(()=>{if(v.current)return O.current=new IntersectionObserver(P=>{const w=P[0];U(w.isIntersecting)},{threshold:.1}),O.current.observe(v.current),()=>{O.current&&(O.current.disconnect(),O.current=null)}},[]),Le.useEffect(()=>!L||!v.current?void 0:(A.current&&(A.current(),A.current=null),(async()=>{if(!v.current||(await new Promise(fe=>setTimeout(fe,10)),!v.current))return;const w=new Vl({dpr:Math.min(window.devicePixelRatio,2),alpha:!0});S.current=w;const C=w.gl;for(C.canvas.style.width="100%",C.canvas.style.height="100%";v.current.firstChild;)v.current.removeChild(v.current.firstChild);v.current.appendChild(C.canvas);const B=`
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`,X=`precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`,W={iTime:{value:0},iResolution:{value:[1,1]},rayPos:{value:[0,0]},rayDir:{value:[0,1]},raysColor:{value:Zy(e)},raysSpeed:{value:t},lightSpread:{value:i},rayLength:{value:a},pulsating:{value:l?1:0},fadeDistance:{value:c},saturation:{value:f},mousePos:{value:[.5,.5]},mouseInfluence:{value:d},noiseAmount:{value:p},distortion:{value:_}};E.current=W;const G=new Xl(C),Z=new Gl(C,{vertex:B,fragment:X,uniforms:W}),F=new kl(C,{geometry:G,program:Z});R.current=F;const k=()=>{if(!v.current||!w)return;w.dpr=Math.min(window.devicePixelRatio,2);const{clientWidth:fe,clientHeight:_e}=v.current;w.setSize(fe,_e);const I=w.dpr,Y=fe*I,se=_e*I;W.iResolution.value=[Y,se];const{anchor:me,dir:Q}=Ky(r,Y,se);W.rayPos.value=me,W.rayDir.value=Q},V=fe=>{if(!(!S.current||!E.current||!R.current)){W.iTime.value=fe*.001,h&&d>0&&(y.current.x=y.current.x*.92+M.current.x*(1-.92),y.current.y=y.current.y*.92+M.current.y*(1-.92),W.mousePos.value=[y.current.x,y.current.y]);try{w.render({scene:F}),D.current=requestAnimationFrame(V)}catch(_e){console.warn("WebGL rendering error:",_e);return}}};window.addEventListener("resize",k),k(),D.current=requestAnimationFrame(V),A.current=()=>{if(D.current&&(cancelAnimationFrame(D.current),D.current=null),window.removeEventListener("resize",k),w)try{const fe=w.gl.canvas,_e=w.gl.getExtension("WEBGL_lose_context");_e&&_e.loseContext(),fe&&fe.parentNode&&fe.parentNode.removeChild(fe)}catch(fe){console.warn("Error during WebGL cleanup:",fe)}S.current=null,E.current=null,R.current=null}})(),()=>{A.current&&(A.current(),A.current=null)}),[L,r,e,t,i,a,l,c,f,h,d,p,_]),Le.useEffect(()=>{if(!E.current||!v.current||!S.current)return;const P=E.current,w=S.current;P.raysColor.value=Zy(e),P.raysSpeed.value=t,P.lightSpread.value=i,P.rayLength.value=a,P.pulsating.value=l?1:0,P.fadeDistance.value=c,P.saturation.value=f,P.mouseInfluence.value=d,P.noiseAmount.value=p,P.distortion.value=_;const{clientWidth:C,clientHeight:B}=v.current,X=w.dpr,{anchor:W,dir:G}=Ky(r,C*X,B*X);P.rayPos.value=W,P.rayDir.value=G},[e,t,i,r,a,l,c,f,d,p,_]),Le.useEffect(()=>{const P=w=>{if(!v.current||!S.current)return;const C=v.current.getBoundingClientRect(),B=(w.clientX-C.left)/C.width,X=(w.clientY-C.top)/C.height;M.current={x:B,y:X}};if(h)return window.addEventListener("mousemove",P),()=>window.removeEventListener("mousemove",P)},[h]),qn.jsx("div",{ref:v,className:`light-rays-container ${x}`.trim()})},fU=`
  attribute vec2 position;

  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,hU=`
  precision highp float;

  uniform vec2 resolution;
  uniform float time;

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    float orbitTime = time * 0.72;
    vec2 center = vec2(cos(orbitTime) * 2.25, sin(orbitTime) * 1.55);
    float radius = 2.95 + sin(time * 0.37) * 0.2;
    float width = 0.026 * 1.15;
    float chroma = 0.026 * 0.42;

    float r = width / max(abs(length(p - center * (1.0 + chroma)) - radius), 0.003);
    float g = width / max(abs(length(p - center) - radius), 0.003);
    float b = width / max(abs(length(p - center * (1.0 - chroma)) - radius), 0.003);
    vec3 color = vec3(r, g, b) * 1.14;
    float vignette = 1.0 - smoothstep(0.68, 1.9, length(p)) * 0.38;
    gl_FragColor = vec4(color * vignette, 1.0);
  }
`;function Qy(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),r.getShaderParameter(i,r.COMPILE_STATUS)?i:(r.deleteShader(i),null)}function dU(){const r=Le.useRef(null);return Le.useEffect(()=>{const e=r.current,t=e?.getContext("webgl",{antialias:!1,alpha:!1});if(!t)return;const i=Qy(t,t.VERTEX_SHADER,fU),a=Qy(t,t.FRAGMENT_SHADER,hU);if(!i||!a)return;const l=t.createProgram();if(t.attachShader(l,i),t.attachShader(l,a),t.linkProgram(l),!t.getProgramParameter(l,t.LINK_STATUS))return;const c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]),t.STATIC_DRAW);const f=t.getAttribLocation(l,"position"),h=t.getUniformLocation(l,"resolution"),d=t.getUniformLocation(l,"time"),p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _=0;const x=()=>{const E=Math.min(window.devicePixelRatio||1,2),S=Math.max(1,Math.floor(e.clientWidth*E)),M=Math.max(1,Math.floor(e.clientHeight*E));(e.width!==S||e.height!==M)&&(e.width=S,e.height=M,t.viewport(0,0,S,M))},v=E=>{x(),t.useProgram(l),t.bindBuffer(t.ARRAY_BUFFER,c),t.enableVertexAttribArray(f),t.vertexAttribPointer(f,2,t.FLOAT,!1,0,0),t.uniform2f(h,e.width,e.height),t.uniform1f(d,E*.001*.17),t.drawArrays(t.TRIANGLES,0,6),p||(_=requestAnimationFrame(v))};return _=requestAnimationFrame(v),()=>{cancelAnimationFrame(_),t.deleteBuffer(c),t.deleteProgram(l),t.deleteShader(i),t.deleteShader(a)}},[]),qn.jsx("canvas",{ref:r,className:"legacy-band-canvas"})}const vf=[{id:"rays",name:"光线",icon:"fa-sun",Component:uU,props:{raysOrigin:"top-center",raysColor:"#ffffff",raysSpeed:1,lightSpread:.5,rayLength:3,fadeDistance:1,mouseInfluence:.1}},{id:"band",name:"光带",icon:"fa-circle-notch",Component:dU,props:{}},{id:"pixel-blast",name:"Pixel Blast",icon:"fa-braille",Component:NC,props:{color:"#B497CF"}},{id:"color-bends",name:"Color Bends",icon:"fa-wave-square",Component:zC,props:{}},{id:"plasma",name:"Plasma",icon:"fa-fire-flame-curved",Component:cD,props:{color:"#B497CF"}},{id:"liquid-ether",name:"Liquid Ether",icon:"fa-water",Component:uD,props:{}},{id:"liquid-chrome",name:"Liquid Chrome",icon:"fa-droplet",Component:fD,props:{}},{id:"shape-grid",name:"Shape Grid",icon:"fa-grip",Component:hD,props:{borderColor:"#6b7280",hoverFillColor:"#d1d5db",hoverTrailAmount:3}},{id:"ballpit",name:"Ballpit",icon:"fa-circle",Component:TD,props:{}},{id:"dot-grid",name:"Dot Grid",icon:"fa-ellipsis",Component:tU,props:{}},{id:"galaxy",name:"Galaxy",icon:"fa-star",Component:rU,props:{}},{id:"lightning",name:"Lightning",icon:"fa-bolt",Component:sU,props:{}},{id:"aurora",name:"Aurora",icon:"fa-rainbow",Component:lU,props:{}}];function pU(r,e){const t=VE.createRoot(r);let i=e;function a(){const l=vf.find(c=>c.id===i)||vf[0];t.render(qn.jsx(l.Component,{...l.props},l.id))}return a(),{setMode(l){vf.some(c=>c.id===l)&&(i=l,a())},destroy(){t.unmount()}}}window.ReactBitsBackgrounds={modes:vf.map(({Component:r,props:e,...t})=>t),create:pU}})();
