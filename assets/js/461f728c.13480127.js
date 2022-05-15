"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,v=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1795:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},u=void 0,s={unversionedId:"ox_inventory/Functions/Server/Inventory/CustomDrop",id:"ox_inventory/Functions/Server/Inventory/CustomDrop",title:"CustomDrop",description:"Drops can be created from other resources, containing a variety of items and utilising a custom label (instead of 'Drop 32648').",source:"@site/docs/ox_inventory/Functions/Server/Inventory/CustomDrop.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/CustomDrop",permalink:"/docs/ox_inventory/Functions/Server/Inventory/CustomDrop",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/CustomDrop.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ConvertItems",permalink:"/docs/ox_inventory/Functions/Server/Inventory/ConvertItems"},next:{title:"GetCurrentWeapon",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon"}},p={},l=[],m={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Drops can be created from other resources, containing a variety of items and utilising a custom label (instead of 'Drop 32648')."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- prefix: string\n-- items: table\n    -- name: string\n    -- count: number\n    -- metadata: table (optional)\n-- coords: vector3\n-- slots: number (optional)\n-- maxWeight: number (optional)\n-- instance: string | number (optional)\nexports.ox_inventory:CustomDrop(prefix, items, coords, slots, maxWeight, instance)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:CustomDrop('Carcass', {\n    {'meat', 5, { grade = 2, type = 'deer' }},\n    {'hide', 5, { grade = 2, type = 'deer' }}\n}, coords)\n")))}f.isMDXComponent=!0}}]);