"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7799],{9613:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?t.createElement(b,c(c({ref:r},s),{},{components:n})):t.createElement(b,c({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2880:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var t=n(5443),o=n(3010),i=(n(9496),n(9613)),c=["components"],a={},l=void 0,u={unversionedId:"ox_lib/Version/Shared",id:"ox_lib/Version/Shared",title:"Shared",description:"lib.checkDependency",source:"@site/docs/ox_lib/Version/Shared.md",sourceDirName:"ox_lib/Version",slug:"/ox_lib/Version/Shared",permalink:"/docs/ox_lib/Version/Shared",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Version/Shared.md",tags:[],version:"current",lastUpdatedAt:1659813330,formattedLastUpdatedAt:"8/6/2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/Version/Server"},next:{title:"Client",permalink:"/docs/ox_lib/Zones/Client"}},s={},p=[{value:"lib.checkDependency",id:"libcheckdependency",level:3}],d={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"libcheckdependency"},"lib.checkDependency"),(0,i.kt)("p",null,"Check if a resource is using a specified version or higher, allowing for compatibility checks or throwing errors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- resource: string\n-- version: string\nlib.checkDependency(resource, version)\n\nif not lib.checkDependency('ox_lib', '1.5.0') then error() end\n")))}f.isMDXComponent=!0}}]);