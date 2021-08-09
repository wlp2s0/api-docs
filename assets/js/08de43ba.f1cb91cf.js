(self.webpackChunkdev_rev_docs=self.webpackChunkdev_rev_docs||[]).push([[4105],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2300:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],s={sidebar_position:2},c="Accept payments via Revolut Pay",l={unversionedId:"accept-payments/tutorials/accept-payments-via-revolut-pay",id:"accept-payments/tutorials/accept-payments-via-revolut-pay",isDocsHomePage:!1,title:"Accept payments via Revolut Pay",description:"The Revolut Pay payment method enables your users to pay with their Revolut account directly after they authorize this payment method on the Revolut App.",source:"@site/docs/accept-payments/tutorials/accept-payments-via-revolut-pay.md",sourceDirName:"accept-payments/tutorials",slug:"/accept-payments/tutorials/accept-payments-via-revolut-pay",permalink:"/docs/accept-payments/tutorials/accept-payments-via-revolut-pay",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Accept your first card payment",permalink:"/docs/accept-payments/tutorials/accept-your-first-card-payment"},next:{title:"Charge a customer\u2019s saved payment method",permalink:"/docs/accept-payments/tutorials/charge-saved-payment-method"}},p=[{value:"How Revolut Pay works",id:"how-revolut-pay-works",children:[]},{value:"Implement Revolut Pay",id:"implement-revolut-pay",children:[{value:"Calling the widget instance",id:"calling-the-widget-instance",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accept-payments-via-revolut-pay"},"Accept payments via Revolut Pay"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," payment method enables your users to pay with their Revolut account directly after they authorize this payment method on the Revolut App."),(0,r.kt)("p",null,"In this way, you can accept payments without having to ask your users to enter their card details. This improves the checkout experience for your users greatly."),(0,r.kt)("h2",{id:"how-revolut-pay-works"},"How Revolut Pay works"),(0,r.kt)("p",null,"See how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," works the first time a user is directed to a checkout page on a web browser:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The user finds the ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," payment method on the checkout page, and scans the QR code. This starts the authorization process of paying with their Revolut account."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the user doesn't have the Revolut app installed on the phone, the user is redirected to a promotional page to download the app and open an account.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The user receives a notification on their Revolut app to authorize this payment method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the user makes the first payment successfully on the checkout page, the Revolut checkout widget saves a token in local storage of the browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The next time the user visits your site or any other site with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," payment method, the user doesn't need to scan the QR code, and the notification for authorization appears directly on their Revolut app."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"So that the user can skip scanning the QR code, the same phone and/or email used as the first time must be filled in the checkout form."))))),(0,r.kt)("p",null,"You can check the payment process in the following diagram:"),(0,r.kt)("img",{src:"https://assets.revolut.com/business/merchant/docs/pwr-flow%402x.png"}),(0,r.kt)("h2",{id:"implement-revolut-pay"},"Implement Revolut Pay"),(0,r.kt)("p",null,"Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," method is included in the Revolut Checkout Widget, the steps to accept a payment via ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," are similar to those to accept a card payment."),(0,r.kt)("p",null,"Check the following high-level procedure to integrate a Revolut Checkout Widget for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Revolut Pay")," method with the Merchant API:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Server side: ",(0,r.kt)("a",{parentName:"li",href:"/docs/accept-payments/tutorials/accept-your-first-card-payment#1-create-an-order"},"Create an order")," via the Merchant API request"),(0,r.kt)("li",{parentName:"ol"},"Client side: ",(0,r.kt)("a",{parentName:"li",href:"/docs/accept-payments/tutorials/accept-your-first-card-payment#2-install-the-widget"},"Install the widget")," by adding RevolutCheckout to your application"),(0,r.kt)("li",{parentName:"ol"},"Client side: Choose the option to load ",(0,r.kt)("inlineCode",{parentName:"li"},"Revolut Pay")," and call the appropriate ",(0,r.kt)("a",{parentName:"li",href:"/docs/revolut-checkout-js/initialize-widget/instance/instance-revolut-pay"},"widget instance"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As you can see, the only difference is in Step 3 where you need to insert the ",(0,r.kt)("b",null,"Revolut Pay")," button to call the widget instance. Check the following implementation details below."))),(0,r.kt)("h3",{id:"calling-the-widget-instance"},"Calling the widget instance"),(0,r.kt)("p",null,"Insert the ",(0,r.kt)("strong",{parentName:"p"},"Revolut Pay")," button using the code snippet below that contains an example with minimum required parameters, where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RevolutCheckout")," is the widget instance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<PUBLIC_ID>"),"\xa0is the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"public_id"),"\xa0passed as the parameter to call the widget instance. You can find the value of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"public_id"),"\xa0in the\xa0response\xa0that the Merchant API returns when you create an order successfully."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"onSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onError")," options are used to redirect the user to the right pages when the payment has been processed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"<div id='revolut-pay'></div>\n\nRevolutCheckout(\"<PUBLIC_ID>\").then(function(instance) {\n  instance.revolutPay({\n    target: document.getElementById('revolut-pay'),\n    phone: '+441632960022', // recommended\n    onSuccess() {\n      console.log('Payment completed')\n    },\n    onError(error) {\n      console.error('Payment failed: ' + error.message)\n    }\n  })\n})\n")),(0,r.kt)("p",null,"This is what the button looks like:"),(0,r.kt)("img",{src:"https://assets.revolut.com/business/merchant/docs/pwr-screenshot%402x.png"}),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Congratulations"),"! You\u2019ve successfully implemented Revolut Pay and are ready to accept the first payment."))),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"To view the full list of parameters, take a look at the ",(0,r.kt)("a",{href:"/docs/revolut-checkout-js/initialize-widget/instance/instance-revolut-pay",target:"_blank"},"documentation"),"."),(0,r.kt)("div",{class:"feedback"}))}d.isMDXComponent=!0}}]);