!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={isFetching:!1,hasFailed:!1,hasSucceeded:!1,errors:{}};var u={...n,isFetching:!0};var c={...n,hasSucceeded:!0};var s=e=>({...n,isFetching:!1,hasFailed:!0,errors:e});function o(e){const{request:t,success:r,failure:n}={request:e=>{Object.assign(e,u)},success:e=>{Object.assign(e,c)},failure:(e,t)=>{Object.assign(e,s(t))}};return{[e+"Request"]:t,[e+"Success"]:r,[e+"Failure"]:n}}t.default=e=>{const t=Object.keys(e)[0];return{[t]:{state:{...n},actions:{[t]:({commit:r},n)=>(r(t+"Request"),e[t](n).then(({data:e})=>(r(t+"Success"),e)).catch(e=>r(t+"Failure",e)))},mutations:{...o(t)}}}}}]);