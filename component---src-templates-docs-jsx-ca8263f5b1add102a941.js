webpackJsonp([0x61f8012cc7c6],{467:function(e,t){e.exports=[{id:"top"},{id:"drupal-quickstart",label:"Drupal quickstart"},{id:"react-quickstart",label:"React quickstart"},{id:"guides",label:"Guides"},{id:"concepts",label:"Concepts"},{id:"reference",label:"Reference"}]},18:function(e,t){e.exports={title:"Headless Ninja",description:"Uniting the best of Drupal and React in a legendary easy way.",projects:{drupal:{hn:{page:"https://www.drupal.org/project/hn",nid:2887044}},github:{hn:{user:"burst-digital",repo:"hn"}}}}},26:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),d=u(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),i=s.length-1;i>=0;i--)if(s[i]!=d[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!l(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(28),c=n(27),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},27:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},28:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},29:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},31:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),s=r(f),d=n(5),p=r(d),T=n(33),E=r(T),h=n(26),y=r(h),A=n(32),m=n(11),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case m.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case m.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,A.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},g=function(){return null},S=(0,E.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(g),_=b(S);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},11:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},32:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),c=n(20),l=r(c),f=n(11),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,f.TAG_NAMES.TITLE),n=y(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:E([f.TAG_PROPERTIES.HREF],e),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,e),encode:y(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,e),linkTags:h(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:h(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),b=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,_=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,s=e.title,d=e.titleAttributes;S&&b(S),S=m(function(){O(f.TAG_NAMES.BODY,n),O(f.TAG_NAMES.HTML,r),v(s,d);var p={baseTag:w(f.TAG_NAMES.BASE,t),linkTags:w(f.TAG_NAMES.LINK,o),metaTags:w(f.TAG_NAMES.META,i),noscriptTags:w(f.TAG_NAMES.NOSCRIPT,a),scriptTags:w(f.TAG_NAMES.SCRIPT,c),styleTags:w(f.TAG_NAMES.STYLE,l)},T={},E={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=p[e].oldTags)}),S=null,u(e,T,E)})},v=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),O(f.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=i.indexOf(c);s!==-1&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},R=function(e,t,n,r){var o=P(n);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(t,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(t,r)+"</"+e+">"},M=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},N=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),i=C(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,t)]},L=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},j=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return N(e,t.title,t.titleAttributes,n)},toString:function(){return R(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return L(e,t)},toString:function(){return M(e,t,n)}}}},G=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,d=void 0===s?"":s,p=e.titleAttributes;return{base:j(f.TAG_NAMES.BASE,t,r),bodyAttributes:j(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:j(f.ATTRIBUTE_NAMES.HTML,o,r),link:j(f.TAG_NAMES.LINK,i,r),meta:j(f.TAG_NAMES.META,a,r),noscript:j(f.TAG_NAMES.NOSCRIPT,u,r),script:j(f.TAG_NAMES.SCRIPT,c,r),style:j(f.TAG_NAMES.STYLE,l,r),title:j(f.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=I,t.handleClientStateChange=_,t.mapStateOnServer=G,t.reducePropsToState=A,t.requestIdleCallback=m,t.warn=g},33:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(2),c=r(u),l=n(29),f=r(l),s=n(34),d=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function s(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),s()},t.prototype.render=function(){return c.default.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=f.default.canUseDOM,E}}},34:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var f=e[l],s=t[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  height: 100%;\n  padding: 25px;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  height: 100%;\n  padding: 25px;\n"]),l=n(2),f=r(l),s=n(3),d=r(s),p=n(67),T=r(p),E=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return f.default.createElement(h,null,f.default.createElement(T.default,{showLogo:!0}))},t}(f.default.Component),h=d.default.div(c,function(e){return e.theme.backgroundGrey});t.default=E,e.exports=t.default},220:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=o(["\n  padding: ",";\n\n  list-style: none;\n  margin: 0;\n"],["\n  padding: ",";\n\n  list-style: none;\n  margin: 0;\n"]),f=o(["\n  color: ",";\n  margin: 0;\n  font-size: 0.9rem;\n"],["\n  color: ",";\n  margin: 0;\n  font-size: 0.9rem;\n"]),s=o(["\n  list-style: none;\n  line-height: 2;\n  font-size: 0.8rem;\n  margin: 0;\n\n  li {\n    margin: 0;\n\n    a {\n      color: black;\n      background-image: none;\n    }\n    a.stub {\n      color: grey;\n      font-style: italic;\n    }\n\n    a:hover {\n      border-bottom: 1px solid black;\n    }\n  }\n"],["\n  list-style: none;\n  line-height: 2;\n  font-size: 0.8rem;\n  margin: 0;\n\n  li {\n    margin: 0;\n\n    a {\n      color: black;\n      background-image: none;\n    }\n    a.stub {\n      color: grey;\n      font-style: italic;\n    }\n\n    a:hover {\n      border-bottom: 1px solid black;\n    }\n  }\n"]),d=n(2),p=r(d),T=n(15),E=r(T),h=n(3),y=r(h),A=n(467),m=r(A),b=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=m.default.map(function(e){var t=e.id,n=e.label;return{id:t,label:n,posts:[]}});return this.props.docs.forEach(function(t){var n=t.node,r=n.frontmatter,o=n.fields.slug;e.find(function(e){return e.id===r.category}).posts.push(c({slug:o},r))}),p.default.createElement(g,null,e.map(function(e){var t=e.id,n=e.label,r=e.posts;return p.default.createElement("li",{key:t},n&&p.default.createElement(S,null,n),p.default.createElement(_,null,r.map(function(e){return p.default.createElement("li",{key:e.slug},p.default.createElement(E.default,{to:e.slug,className:e.stub?"stub":null},e.title))})))}))},t}(p.default.Component),g=y.default.ul(l,function(e){return e.theme.sitePadding}),S=y.default.span(f,function(e){return e.theme.brand.pink}),_=y.default.ul(s);t.default=b,e.exports=t.default},230:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=o(["\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 75px 1fr;\n  grid-template-columns: 300px 1fr;\n\n  @media screen and (max-width: 600px) {\n    display: flex;\n    flex-direction: column;\n    height: inherit;\n  }\n"],["\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 75px 1fr;\n  grid-template-columns: 300px 1fr;\n\n  @media screen and (max-width: 600px) {\n    display: flex;\n    flex-direction: column;\n    height: inherit;\n  }\n"]),l=o(["\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  overflow: scroll;\n  justify-self: center;\n  width: 100%;\n  padding: ",";\n  @media screen and (max-width: 600px) {\n    order: 2;\n  }\n\n  & > div {\n    max-width: ",";\n    margin: auto;\n  }\n\n  & > h1 {\n    color: ",";\n  }\n"],["\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  overflow: scroll;\n  justify-self: center;\n  width: 100%;\n  padding: ",";\n  @media screen and (max-width: 600px) {\n    order: 2;\n  }\n\n  & > div {\n    max-width: ",";\n    margin: auto;\n  }\n\n  & > h1 {\n    color: ",";\n  }\n"]),f=o(["\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  z-index: 2;\n  @media screen and (max-width: 600px) {\n    order: 1;\n  }\n"],["\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  z-index: 2;\n  @media screen and (max-width: 600px) {\n    order: 1;\n  }\n"]),s=o(["\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background: ",";\n  overflow: scroll;\n  @media screen and (max-width: 600px) {\n    order: 3;\n    overflow: inherit;\n  }\n"],["\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background: ",";\n  overflow: scroll;\n  @media screen and (max-width: 600px) {\n    order: 3;\n    overflow: inherit;\n  }\n"]),d=n(2),p=r(d),T=n(31),E=r(T),h=n(3),y=r(h),A=n(18),m=r(A),b=n(91),g=r(b),S=n(220),_=r(S),v=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.docsItem.frontmatter;return p.default.createElement("div",null,p.default.createElement(E.default,{title:e.title+" | "+m.default.title}),p.default.createElement(O,null,p.default.createElement(P,null,p.default.createElement(g.default,{location:this.props.location})),p.default.createElement(R,null,p.default.createElement(_.default,{docs:this.props.data.allDocs.edges})),p.default.createElement(w,{className:"docsBody"},p.default.createElement("div",null,p.default.createElement("h1",null,e.title),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.data.docsItem.html}})))))},t}(p.default.Component);t.default=v;var O=y.default.div(c),w=y.default.div(l,function(e){return e.theme.sitePadding},function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accentDark}),P=y.default.div(f),R=y.default.div(s,function(e){return e.theme.lightGrey});t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-docs-jsx-ca8263f5b1add102a941.js.map