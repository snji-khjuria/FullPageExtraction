webpackJsonp([23],{"./pages/LoginPage/LoginPage.css":function(e,n){e.exports={"login-page":"uMF2cc","login-wrapper":"_3Nz-h3","left-container":"_2Bol6j"}},"./pages/LoginPage/LoginPage.js":function(e,n,t){"use strict";function o(e,n){var o=n.location.query,i=o.signup,g=o.ret,p=o.__agent,f=o.fromMyOrdersPage,u=o.fromContestPage,y=o.fromNotificationPrefPage,d=function(){window.location.href=t.i(r.c)(g,p)};return a.a.createElement("div",{className:c.a["login-page"]},a.a.createElement(s.a,l({className:c.a["login-wrapper"],viewType:"page",view:i?"signup":"login",leftContainerClass:c.a["left-container"],onLoginSuccess:d},f&&{titleKey:"myOrdersLoginTitle",descKey:"myOrdersLoginDesc"},y&&{titleKey:"notificationprefLoginTitle",descKey:"notificationprefLoginDesc"},u&&{titleKey:"contestLoginTitle",descKey:"contestLoginDesc"})))}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),a=t.n(i),s=t("./components/LoginSignupWidget/LoginSignupWidget.js"),r=t("./utils/urlutils.ts"),g=t("./pages/LoginPage/LoginPage.css"),c=t.n(g),l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};o.contextTypes={location:i.PropTypes.object},n.default=o}});