"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[521],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(l,".").concat(b)]||d[b]||p[b]||c;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return b}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),o=["components"],i={},l="Cache",u={unversionedId:"ox_lib/Client/cache",id:"ox_lib/Client/cache",title:"Cache",description:"Caches data related to the player and handling some events or statebags.",source:"@site/docs/ox_lib/Client/cache.md",sourceDirName:"ox_lib/Client",slug:"/ox_lib/Client/cache",permalink:"/docs/ox_lib/Client/cache",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Client/cache.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"index",permalink:"/docs/ox_lib/Client/"},next:{title:"Callbacks",permalink:"/docs/ox_lib/Client/callback"}},s={},p=[{value:"States",id:"states",level:2},{value:"lib.onCache",id:"liboncache",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cache"},"Cache"),(0,c.kt)("p",null,"Caches data related to the player and handling some events or statebags.",(0,c.kt)("br",{parentName:"p"}),"\n","An interval runs every 100ms to update data that cannot be checked via handlers.  "),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_lib/blob/master/resource/cache/client.lua"},"https://github.com/overextended/ox_lib/blob/master/resource/cache/client.lua")),(0,c.kt)("h2",{id:"states"},"States"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"cache.ped       -- player entity id\ncache.vehicle   -- vehicle entity id\ncache.seat      -- vehicle seat index\n")),(0,c.kt)("h2",{id:"liboncache"},"lib.onCache"),(0,c.kt)("p",null,"Register a callback function when the value is changed."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"lib.onCache('vehicle', function(value)\n    print('vehicle', value)\nend)\n\nlib.onCache('seat', function(value)\n    print('seat', value)\nend)\n")))}b.isMDXComponent=!0}}]);