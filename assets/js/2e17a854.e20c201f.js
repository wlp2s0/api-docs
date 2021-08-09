(self.webpackChunkdev_rev_docs=self.webpackChunkdev_rev_docs||[]).push([[8572],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5160:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Integrating and customising the card field",l={unversionedId:"revolut-checkout-js/integration-examples/integrating-and-customising-the-card-field",id:"revolut-checkout-js/integration-examples/integrating-and-customising-the-card-field",isDocsHomePage:!1,title:"Integrating and customising the card field",description:"This sample shows how to use RevolutCheckout.js with the integrated card field. The hosted version is running in the Sandbox environment \u2014 use one of our test cards to ensure that the widget works properly.",source:"@site/docs/revolut-checkout-js/integration-examples/integrating-and-customising-the-card-field.md",sourceDirName:"revolut-checkout-js/integration-examples",slug:"/revolut-checkout-js/integration-examples/integrating-and-customising-the-card-field",permalink:"/docs/revolut-checkout-js/integration-examples/integrating-and-customising-the-card-field",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"RevolutCheckout",previous:{title:"Integrating the payment pop-up",permalink:"/docs/revolut-checkout-js/integration-examples/integrating-the-payment-pop-up"},next:{title:"3D Secure",permalink:"/docs/revolut-checkout-js/3d-secure"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrating-and-customising-the-card-field"},"Integrating and customising the card field"),(0,a.kt)("p",null,"This sample shows how to use RevolutCheckout.js with the integrated ",(0,a.kt)("a",{parentName:"p",href:"#instance-instance-createcardfield"},"card field"),". The hosted version is running in the Sandbox environment \u2014 use one of our ",(0,a.kt)("a",{href:"https://developer.revolut.codes/docs/accept-payments/#tutorials-tutorials-test-in-the-sandbox-environment-use-test-cards",target:"_blank"},"test cards")," to ensure that the widget works properly."),(0,a.kt)("div",null,(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/revolut-merchant-api-card-field-example-next-js-wyi77?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"480",title:"revolut-merchant-api-card-field-example-next-js",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you fork the example - you will need to create a new ",(0,a.kt)("a",{href:"https://sandbox-business.revolut.com/",target:"_blank"},"Revolut Business Sandbox")," account and set the ",(0,a.kt)("a",{href:"https://sandbox-business.revolut.com/merchant/api",target:"_blank"},"API key")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOLUT_API_KEY")," inside ",(0,a.kt)("a",{href:"https://codesandbox.io/docs/secrets#adding-secrets",target:"_blank"},"CodeSandbox secrets"),"."))))}p.isMDXComponent=!0}}]);