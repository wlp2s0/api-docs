(self.webpackChunkdev_rev_docs=self.webpackChunkdev_rev_docs||[]).push([[8129],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,d=39;var s=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,s=e.values,p=e.groupId,m=e.className,h=o(),k=h.tabGroupChoices,f=h.setTabGroupChoices,y=(0,a.useState)(r),b=y[0],N=y[1],v=a.Children.toArray(e.children),g=[];if(null!=p){var T=k[p];null!=T&&T!==b&&s.some((function(e){return e.value===T}))&&N(T)}var x=function(e){var t=e.currentTarget,n=g.indexOf(t),a=s[n].value;N(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,r,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},_=function(e){var t,n;switch(e.keyCode){case d:var a=g.indexOf(e.target)+1;n=g[a]||g[0];break;case c:var r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:_,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},9436:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=n(5064),i=n(8215),u=["components"],c={sidebar_position:1},d="1. Create a counterparty",s={unversionedId:"manage-accounts/tutorials/create-a-counterparty",id:"manage-accounts/tutorials/create-a-counterparty",isDocsHomePage:!1,title:"1. Create a counterparty",description:"To make a fund transfer or payment, add the counterparty that you intend to transact with. This is a test",source:"@site/docs/manage-accounts/tutorials/create-a-counterparty.md",sourceDirName:"manage-accounts/tutorials",slug:"/manage-accounts/tutorials/create-a-counterparty",permalink:"/docs/manage-accounts/tutorials/create-a-counterparty",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"3. Make your first API request",permalink:"/docs/manage-accounts/get-started/make-your-firs-api-request"},next:{title:"2. Create a payment",permalink:"/docs/manage-accounts/tutorials/create-a-payment"}},p=[{value:"Add a Revolut counterparty",id:"add-a-revolut-counterparty",children:[]},{value:"Add a UK counterparty",id:"add-a-uk-counterparty",children:[]},{value:"Add an international counterparty",id:"add-an-international-counterparty",children:[{value:"Fields for US USD accounts",id:"fields-for-us-usd-accounts",children:[]},{value:"Fields for IBAN countries",id:"fields-for-iban-countries",children:[]},{value:"Fields for SWIFT",id:"fields-for-swift",children:[]},{value:"Fields for SWIFT MX",id:"fields-for-swift-mx",children:[]},{value:"Fields for IN INR accounts",id:"fields-for-in-inr-accounts",children:[]},{value:"Fields for AU AUD accounts",id:"fields-for-au-aud-accounts",children:[]}]}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-create-a-counterparty"},"1. Create a counterparty"),(0,o.kt)("p",null,"To make a fund transfer or payment, add the counterparty that you intend to transact with. This is a test"),(0,o.kt)("p",null,"Depending on whether a counterparty has a Revolut account and which country a counterparty  account is based on, the fields that you need to specify are different."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are on a freelancer account, to be compliant with PSD2 Strong Customer Authentication regulations, you must manually approve the counterparty with two-factor authentication in the Revolut Business portal before you can make a payment.\nThis can ensure maximum security in case of access token leakages and other fraudulent activities."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is recommended to utilise all available address fields when creating a counterparty and accurately define either ",(0,o.kt)("code",null,"individual_name")," or ",(0,o.kt)("code",null,"company_name"),"  field for individuals and companies respectively. This significantly reduces the risk of any disruption to payments made via API."))),(0,o.kt)("div",{class:"feedback"}),(0,o.kt)("h2",{id:"add-a-revolut-counterparty"},"Add a Revolut counterparty"),(0,o.kt)("p",null,"Add a Revolut user as counterparty"),(0,o.kt)(l.Z,{defaultValue:"prod",values:[{label:"Production",value:"prod"},{label:"Sandbox",value:"sandbox"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"prod",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST https://b2b.revolut.com/api/1.0/counterparty \\\n  -H "Authorization: Bearer <your access token>" \\\n  --data @- << EOF\n\n{\n  "profile_type": "personal",\n  "name": "John Smith",\n  "phone": "+44723456789"\n}\nEOF\n'))),(0,o.kt)(i.Z,{value:"sandbox",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST https://sandbox-b2b.revolut.com/api/1.0/counterparty \\\n  -H "Authorization: Bearer <your access token>" \\\n  --data @- << EOF\n\n{\n  "profile_type": "personal",\n  "name": "John Smith",\n  "phone": "+44723456789"\n}\nEOF\n')))),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "830e79d9-7b0a-45d3-a2a3-c0b291be3bf7",\n  "name": "John Smith",\n  "phone": "+44723456789",\n  "profile_type": "personal",\n  "country": "GB",\n  "state": "created",\n  "created_at": "2017-12-19T15:58:34.485Z",\n  "updated_at": "2017-12-19T15:58:34.485Z"\n}\n')),(0,o.kt)("p",null,"If a counterparty has a Revolut account, you need to only provide the phone number and name, and you don't need full account details to add. However, if you add full account details, this also works."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"from 18th October 2021, when creating a Revolut personal counterparty using a phone number the ",(0,o.kt)("code",null,"name")," field provided on the request must match exactly the name of the user as it is recorded on the user's Revolut profile. For example if the name of the user has ",(0,o.kt)("code",null,"first_name=John"),"  and ",(0,o.kt)("code",null,"last_name=Smith")," on their Revolut personal profile, ",(0,o.kt)("code",null,'"name":"John Smith"')," should be provided on the request. The matching is case insensitive.\nOn the same date, the ability to upload a Revolut Business counterparty using only the ",(0,o.kt)("code",null,"email")," field will be fully deprecated. To pay Revolut Business counterparties via API, you should upload their bank details as a normal counterparty."))),(0,o.kt)("h2",{id:"add-a-uk-counterparty"},"Add a UK counterparty"),(0,o.kt)("p",null,"Add a UK bank account as counterparty:"),(0,o.kt)(l.Z,{defaultValue:"prod",values:[{label:"Production",value:"prod"},{label:"Sandbox",value:"sandbox"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"prod",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST https://b2b.revolut.com/api/1.0/counterparty \\\n  -H "Authorization: Bearer <your access token>" \\\n  --data @- << EOF\n\n{\n  "company_name": "John Smith Co.",\n  "bank_country": "GB",\n  "currency": "GBP",\n  "account_no": "12345678",\n  "sort_code": "223344",\n  "email": "john@smith.co",\n  "phone": "+447771234455",\n  "address": {\n    "street_line1": "1 Canada Square",\n    "street_line2": "Canary Wharf",\n    "region": "East End",\n    "postcode": "E115AB",\n    "city": "London",\n    "country": "GB"\n  }\n}\n\nEOF\n'))),(0,o.kt)(i.Z,{value:"sandbox",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST https://sandbox-b2b.revolut.com/api/1.0/counterparty \\\n  -H "Authorization: Bearer <your access token>" \\\n  --data @- << EOF\n\n{\n  "company_name": "John Smith Co.",\n  "bank_country": "GB",\n  "currency": "GBP",\n  "account_no": "12345678",\n  "sort_code": "223344",\n  "email": "john@smith.co",\n  "phone": "+447771234455",\n  "address": {\n    "street_line1": "1 Canada Square",\n    "street_line2": "Canary Wharf",\n    "region": "East End",\n    "postcode": "E115AB",\n    "city": "London",\n    "country": "GB"\n  }\n}\n\nEOF\n')))),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "97380d65-0478-4673-9e79-21918b4ae93a",\n  "company_name": "Acme Corp.",\n  "state": "created",\n  "created_at": "2017-12-19T16:17:05.141Z",\n  "updated_at": "2017-12-19T16:17:05.141Z",\n  "accounts": [\n    {\n      "id": "4e32d331-68aa-4e4b-a295-3e3d7625819b",\n      "currency": "GBP",\n      "type": "external",\n      "account_no": "12345678",\n      "sort_code": "223344",\n      "email": "acm@me.ccq",\n      "name": "Acme Corp.",\n      "bank_country": "GB",\n      "recipient_charges": "free"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"If a counterparty doesn't have a Revolut account and has a UK account, the following details are required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account_no"),": The bank account number of the counterparty."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sort_code"),": The sort code of the counterparty\u2019s account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address"),": The address of the counterparty.")),(0,o.kt)("div",{class:"feedback"}),(0,o.kt)("h2",{id:"add-an-international-counterparty"},"Add an international counterparty"),(0,o.kt)("p",null,"Add an IBAN bank account as counterparty:"),(0,o.kt)(l.Z,{defaultValue:"prod",values:[{label:"Production",value:"prod"},{label:"Sandbox",value:"sandbox"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"prod",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST https://b2b.revolut.com/api/1.0/counterparty \\\n  -H "Authorization: Bearer <your access token>" \\\n  --data @- << EOF\n\n{\n  "company_name": "John Smith Co.",\n  "bank_country": "FR",\n  "currency": "EUR",\n  "iban": "FR1420041010050500013M02606",\n  "bic": "0500013M026",\n  "email": "john@smith.co",\n  "phone": "+447771234455",\n  "address": {\n    "street_line1": "20 Central Paris",\n    "street_line2": "Champ de Mars",\n    "region": "Paris",\n    "postcode": "75007",\n    "city": "Paris",\n    "country": "FR"\n  }\n}\n\nEOF\n'))),(0,o.kt)(i.Z,{value:"sandbox",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST https://sandbox-b2b.revolut.com/api/1.0/counterparty \\\n  -H "Authorization: Bearer <your access token>" \\\n  --data @- << EOF\n\n{\n  "company_name": "John Smith Co.",\n  "bank_country": "FR",\n  "currency": "EUR",\n  "iban": "FR1420041010050500013M02606",\n  "bic": "0500013M026",\n  "email": "john@smith.co",\n  "phone": "+447771234455",\n  "address": {\n    "street_line1": "20 Central Paris",\n    "street_line2": "Champ de Mars",\n    "region": "Paris",\n    "postcode": "75007",\n    "city": "Paris",\n    "country": "FR"\n  }\n}\n\nEOF\n')))),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "97380d65-0478-4673-9e79-21918b4ae93a",\n  "company_name": "John Smith Co.",\n  "state": "created",\n  "created_at": "2017-12-19T16:17:05.141Z",\n  "updated_at": "2017-12-19T16:17:05.141Z",\n  "accounts": [\n    {\n      "id": "4e32d331-68aa-4e4b-a295-3e3d7625819b",\n      "currency": "EUR",\n      "type": "external",\n      "iban": "FR1420041010050500013M02606",\n      "bic": "0500013M026",\n      "email": "john@smith.co",\n      "name": "John Smith Co..",\n      "bank_country": "FR",\n      "recipient_charges": "free"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"If a counterparty doesn't have a Revolut account and has a non-UK bank account, depending on the country that the account is based on, you must specify the required fields."),(0,o.kt)("p",null,"See the example of an IBAN request on the right."),(0,o.kt)("p",null,"Check the following tables about the different fields required depending on the country:"),(0,o.kt)("h3",{id:"fields-for-us-usd-accounts"},"Fields for US USD accounts"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"account_no"),(0,o.kt)("td",{parentName:"tr",align:null},"bank account number"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"routing_number"),(0,o.kt)("td",{parentName:"tr",align:null},"routing transit number"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")))),(0,o.kt)("h3",{id:"fields-for-iban-countries"},"Fields for IBAN countries"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"iban"),(0,o.kt)("td",{parentName:"tr",align:null},"IBAN"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bic"),(0,o.kt)("td",{parentName:"tr",align:null},"BIC"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")))),(0,o.kt)("h3",{id:"fields-for-swift"},"Fields for SWIFT"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"account_no"),(0,o.kt)("td",{parentName:"tr",align:null},"bank account number"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bic"),(0,o.kt)("td",{parentName:"tr",align:null},"bank BIC"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")))),(0,o.kt)("h3",{id:"fields-for-swift-mx"},"Fields for SWIFT MX"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clabe"),(0,o.kt)("td",{parentName:"tr",align:null},"CLABE"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bic"),(0,o.kt)("td",{parentName:"tr",align:null},"bank BIC"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")))),(0,o.kt)("h3",{id:"fields-for-in-inr-accounts"},"Fields for IN INR accounts"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"account_no"),(0,o.kt)("td",{parentName:"tr",align:null},"bank account number"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ifsc"),(0,o.kt)("td",{parentName:"tr",align:null},"IFSC"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")))),(0,o.kt)("h3",{id:"fields-for-au-aud-accounts"},"Fields for AU AUD accounts"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"account_no"),(0,o.kt)("td",{parentName:"tr",align:null},"bank account number"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bsb_code"),(0,o.kt)("td",{parentName:"tr",align:null},"BSB"),(0,o.kt)("td",{parentName:"tr",align:null},"Text")))),(0,o.kt)("div",{class:"feedback"}))}h.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);