webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";function t(e,o,n){var t=r.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function s(e,o,n){return r.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=s;var r=[{plugin:n("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-107304763-1"}},{plugin:n("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":n("./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"component---src-templates-blog-post-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-js!./src/templates/blog-post.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"offline-plugin-app-shell-fallback.json":n("./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["tva-bocker.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---tva-bocker!./.cache/json/tva-bocker.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i=n("./node_modules/react/react.js"),u=t(i),c=n("./node_modules/prop-types/index.js"),d=t(c),p=n("./.cache/loader.js"),f=t(p),m=n("./.cache/emitter.js"),h=t(m),g=function(e){var o=e.children;return u.default.createElement("div",null,o())},j=function(e){function o(n){s(this,o);var t=r(this,e.call(this));return t.state={location:n.location,pageResources:f.default.getResourcesForPathname(n.location.pathname)},t}return a(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=f.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):f.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(o){o.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,l({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,l({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(u.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},o.default=j,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),r=t(s),a=(0,r.default)();e.exports=a},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var r=n.slice(o.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var a=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return a=e,s[r]=e,!0}else if((0,t.matchPath)(r,{path:e.path,exact:!0}))return a=e,s[r]=e,!0;return!1}),a}}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xbf4c176e203a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---tva-bocker!./.cache/json/tva-bocker.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x5b0a54d65c30,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/tva-bocker.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"presets":["/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-react/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-es2015/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-stage-1/lib/index.js",["/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-stage-0/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/jesper/Desktop/projects/theresealeklint/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/react/react.js"),r=(t(s),n("./.cache/find-page.js")),a=t(r),l=n("./.cache/emitter.js"),i=t(l),u=void 0,c={},d={},p={},f={},m={},h=[],g=[],j={},b=[],y={},_=function(e){return e&&e.default||e},x=void 0,v=!0;x=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){b=b.filter(function(o){return o!==e}),x.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var k=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},R=function(e,o){return j[e]>j[o]?1:j[e]<j[o]?-1:0},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])o.nextTick(function(){n(null,f[e])});else{var t="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];t(function(o,t){f[e]=t,n(o,t)})}},P=function(e,n){m[e]?o.nextTick(function(){n(null,m[e])}):w(e,function(o,t){if(o)n(o);else{var s=_(t());m[e]=s,n(o,s)}})},E=1,D={empty:function(){g=[],j={},y={},b=[],h=[]},addPagesArray:function(e){h=e;var o="";o="",u=(0,a.default)(e,o)},addDevRequires:function(e){c=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(o){return o.path===e}))return!1;var o=1/E;E+=1,j[e]?j[e]+=1:j[e]=1,D.has(e)||g.unshift(e),g.sort(R);var n=u(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,b.indexOf(n.jsonName)!==-1||f[n.jsonName]||b.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,b.indexOf(n.componentChunkName)!==-1||f[n.jsonName]||b.unshift(n.componentChunkName)),b.sort(k),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return u(e)},has:function(e){return g.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(u(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var s;if(n){if(t>=o.length)break;s=o[t++]}else{if(t=o.next(),t.done)break;s=t.value}var r=s;r.unregister()}window.location.reload()})),v=!1;var t=u(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,p[e])return o.nextTick(function(){n(p[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:p[e]})}),p[e];i.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,a=void 0,l=function(){if(s&&r&&(!t.layoutComponentChunkName||a)){p[e]={component:s,json:r,layout:a};var o={component:s,json:r,layout:a};n(o),i.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return P(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,l()}),P(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),r=o,l()}),void(t.layoutComponentChunkName&&P(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),a=o,l()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=D}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tva-bocker.json",path:"/tva-bocker/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],r=function(){var e=o();e&&(s.push(e),n(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=n("./.cache/api-runner-browser.js"),a=n("./node_modules/react/react.js"),l=t(a),i=n("./node_modules/react-dom/index.js"),u=t(i),c=n("./node_modules/react-router-dom/index.js"),d=n("./node_modules/gatsby-react-router-scroll/index.js"),p=n("./node_modules/history/createBrowserHistory.js"),f=t(p),m=n("./node_modules/domready/ready.js"),h=t(m),g=n("./.cache/emitter.js"),j=t(g),b=n("./.cache/pages.json"),y=t(b),_=n("./.cache/component-renderer.js"),x=t(_),v=n("./.cache/async-requires.js"),k=t(v),R=n("./.cache/loader.js"),w=t(R);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,w.default.addPagesArray(y.default),w.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=w.default,window.matchPath=c.matchPath,(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,r.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===w.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);w.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):j.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t;var i=(0,f.default)();(0,r.apiRunner)("onRouteUpdate",{location:i.location,action:i.action});var p=(0,r.apiRunner)("replaceRouterComponent",{history:i})[0],m=function(e){var o=e.children;return l.default.createElement(c.Router,{history:i},o)};w.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,a.createElement)(p?p:m,null,(0,a.createElement)(d.ScrollContext,{shouldUpdateScroll:o},(0,a.createElement)((0,c.withRouter)(x.default),{layout:!0,children:function(o){return(0,a.createElement)(c.Route,{render:function(n){e(n.history);var t=o?o:n;return w.default.getPage(t.location.pathname)?(0,a.createElement)(x.default,s({page:!0},t)):(0,a.createElement)(x.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,h.default)(function(){return u.default.render(l.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),r=t(s),a="/";a="/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,s="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener(s,e=function(){for(n.removeEventListener(s,e),r=1;e=o.shift();)e()}),function(e){r?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,r=n.s;n.e=function(t,a){var l=!1,i=!0,u=function(e){a&&(a(n,e),a=null)};return!r&&o&&o[t]?void u(!0):(s(t,function(){l||(l=!0,i?setTimeout(function(){u()}):u())}),void(l||(i=!1,e(function(){l||(l=!0,r?r[t]=void 0:(o||(o={}),o[t]=!0),u(!0))}))))}}t()},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,o,n){"use strict";o.onRouteUpdate=function(e){var o=e.location;"function"==typeof ga&&(ga("set","page",(o||{}).pathname),ga("send","pageview"))}},"./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(99219681209289,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,o){"use strict";o.registerServiceWorker=function(){return!0}},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(o){try{return c.call(null,e,0)}catch(o){return c.call(this,e,0)}}}function r(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(o){try{return d.call(null,e)}catch(o){return d.call(this,e)}}}function a(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&l())}function l(){if(!h){var e=s(a);h=!0;for(var o=m.length;o;){for(f=m,m=[];++g<o;)f&&f[g].run();g=-1,o=m.length}f=null,h=!1,r(e)}}function i(e,o){this.fun=e,this.array=o}function u(){}var c,d,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var f,m=[],h=!1,g=-1;p.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];m.push(new i(e,o)),1!==m.length||h||s(l)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"presets":["/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-react/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-es2015/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-stage-1/lib/index.js",["/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-stage-0/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/jesper/Desktop/projects/theresealeklint/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-js!./src/templates/blog-post.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x620f737b6699,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"presets":["/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-react/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-es2015/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-stage-1/lib/index.js",["/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-stage-0/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/jesper/Desktop/projects/theresealeklint/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jesper/Desktop/projects/theresealeklint/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-post.js')})})}}});
//# sourceMappingURL=app-cddad94c98f513f8abf0.js.map