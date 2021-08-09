(self.webpackChunkdev_rev_docs=self.webpackChunkdev_rev_docs||[]).push([[761],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4407:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:5},s="Errors",u={unversionedId:"manage-accounts/errors",id:"manage-accounts/errors",isDocsHomePage:!1,title:"Errors",description:"HTTP Response errors",source:"@site/docs/manage-accounts/errors.md",sourceDirName:"manage-accounts",slug:"/manage-accounts/errors",permalink:"/docs/manage-accounts/errors",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Usage and limits",permalink:"/docs/manage-accounts/usage-and-limits"},next:{title:"Who can access the API",permalink:"/docs/build-banking-apps/"}},c=[{value:"HTTP Response errors",id:"http-response-errors",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("h3",{id:"http-response-errors"},"HTTP Response errors"),(0,o.kt)("p",null,"The API uses the following error codes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CODE"),(0,o.kt)("th",{parentName:"tr",align:null},"MEANING"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"400"),(0,o.kt)("td",{parentName:"tr",align:null},"Bad Request -- Your request is invalid.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},"Unauthorized -- Your access token is wrong.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"403"),(0,o.kt)("td",{parentName:"tr",align:null},"Forbidden -- Access to the requested resource or action is forbidden.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"404"),(0,o.kt)("td",{parentName:"tr",align:null},"Not Found -- The requested resource could not be found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"405"),(0,o.kt)("td",{parentName:"tr",align:null},"Method Not Allowed -- You tried to access an endpoint with an invalid method.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"406"),(0,o.kt)("td",{parentName:"tr",align:null},"Not Acceptable -- You requested a format that isn't JSON.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"409"),(0,o.kt)("td",{parentName:"tr",align:null},"Conflict -- Your request conflicts with current state of a resource.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"429"),(0,o.kt)("td",{parentName:"tr",align:null},"Too Many Requests -- You're sending too many requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"Internal Server Error -- We had a problem with our server. Try again later.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"503"),(0,o.kt)("td",{parentName:"tr",align:null},"Service Unavailable -- We're temporarily offline for maintenance. Please try again later.")))),(0,o.kt)("div",{class:"feedback"}))}d.isMDXComponent=!0}}]);