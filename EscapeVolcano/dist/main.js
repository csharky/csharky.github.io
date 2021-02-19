(()=>{var e={476:function(e,t){!function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function n(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var p=arguments[t],i=0,a=p.length;i<a;i++,r++)o[r]=p[i];return o}function o(e,n){var o,r,p=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var n=null!=t?t:o.next();return r[n]=e,n},resolve:function(e,t,n){var o=r[e];o&&(n(t)?o.resolve(t):o.reject(t),r[e]=null)}});return n((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,n=t.request_id,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["request_id"]);n&&p.resolve(n,o,(function(e){return!("error_type"in e)}))}})),function(n,o){return void 0===o&&(o={}),new Promise((function(r,i){var a=p.add({resolve:r,reject:i},o.request_id);e(n,t(t({},o),{request_id:a}))}))}}var r="undefined"!=typeof window,p=Boolean(r&&window.AndroidBridge),i=Boolean(r&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),a=r&&!p&&!i,u=a&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),s=a?"message":"VKWebAppEvent",d=n(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppSendToClient","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost"],a&&!u?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowSubscriptionBox","VKWebAppShowInstallPushBox","VKWebAppGetFriends"]:[]),l=r?window.AndroidBridge:void 0,b=i?window.webkit.messageHandlers:void 0;function c(e,t){var n=t||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!n.bubbles,!!n.cancelable,n.detail),o}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(c.prototype=Event.prototype,c));var f=function(e){var t=void 0,r=[];function u(e){r.push(e)}function c(){return i||p}function f(){return a&&window.parent!==window}function A(){return c()||f()}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(s,(function(e){if(i||p)return n(r).map((function(t){return t.call(null,e)}));if(a&&e&&e.data){var o=e.data,u=o.type,s=o.data,d=o.frameId;u&&"VKWebAppSettings"===u?t=d:n(r).map((function(e){return e({detail:{type:u,data:s}})}))}}));var w=o((function(e,n){l&&l[e]?l[e](JSON.stringify(n)):b&&b[e]&&"function"==typeof b[e].postMessage?b[e].postMessage(n):a&&parent.postMessage({handler:e,params:n,type:"vk-connect",webFrameId:t,connectVersion:"2.4.0"},"*")}),u);return{send:w,sendPromise:w,subscribe:u,unsubscribe:function(e){var t=r.indexOf(e);-1<t&&r.splice(t,1)},supports:function(e){return p?!(!l||"function"!=typeof l[e]):i?!(!b||!b[e]||"function"!=typeof b[e].postMessage):a&&-1<d.indexOf(e)},isWebView:c,isIframe:f,isEmbedded:A,isStandalone:function(){return!A()}}}();e.applyMiddleware=function e(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.includes(void 0)||n.includes(null)?e.apply(void 0,n.filter((function(e){return"function"==typeof e}))):function(e){if(0===n.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.send.apply(e,t)}};return o=n.filter((function(e){return"function"==typeof e})).map((function(e){return e(r)})).reduce((function(e,t){return function(n){return e(t(n))}}))(e.send),t(t({},e),{send:o})}},e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(476),t=n.n(e);console.log("test"),t().send("VKWebAppInit",{})})()})();