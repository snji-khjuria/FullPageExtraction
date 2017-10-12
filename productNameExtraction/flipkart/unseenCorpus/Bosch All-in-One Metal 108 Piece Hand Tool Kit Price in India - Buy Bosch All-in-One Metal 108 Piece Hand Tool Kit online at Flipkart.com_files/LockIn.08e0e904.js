webpackJsonp([27],{"./pages/LockInPage/LockInPage.css":function(e,t){e.exports={"lock-in-page":"_13Adbt","offer-img":"_2rHdzK","reg-section":"_1dEW7G","text-message":"_1n9-PP","text-message-suffix":"_1RidJz","reg-button":"xxR6Ck","cs-button":"hwZjfF","button-disabled":"_1wIM9-","lockIn-tnc":"_3yCZin","tnc-link":"_2FXbR6"}},"./pages/LockInPage/LockInPage.js":function(e,t,a){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,c,i=a("./node_modules/react/react.js"),l=a.n(i),u=a("./node_modules/react-redux/es/index.js"),g=a("./components/Button/index.js"),p=a("./components/Error/Error.js"),f=a("./node_modules/lodash/get.js"),m=a.n(f),d=a("./utils/getImageUrl.js"),E=a("./components/Common/Loader/Loader.tsx"),k=a("./utils/asyncStatusHelper.ts"),b=a("./components/StringWidget/index.js"),h=a("./actions/lockInPageActions.js"),y=a("./pages/LockInPage/LockInPage.css"),T=a.n(y),I=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),v="/viewcart",P=(c=r=function(e){function t(e){s(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleButton=function(e){var t=void 0,a=m()(e,["lockinState"]);switch(a){case"ELIGIBLE":t="REGISTER",o.setState({SuccessToastMessage:m()(e,["registerActionDetails","successResponse","toastMessage"])}),o.setState({FailureToastMessage:m()(e,["registerActionDetails","failureResponse","toastMessage"])});break;case"REGISTERED":t="REDEEM",o.setState({SuccessToastMessage:m()(e,["redeemActionDetails","successResponse","toastMessage"])}),o.setState({FailureToastMessage:m()(e,["redeemActionDetails","failureResponse","toastMessage"])});break;case"REDEEMED":o.handleGoToCart()}var s={lockinActionType:t};"REDEEMED"!==a&&o.props.lockInRegisterAction(s)},o.handleGoToCart=function(){o.context.router.push({pathname:v})},o.handleRedirectHome=function(){o.context.router.push({pathname:"/"})},o.renderErrorPage=function(e){var t=m()(e,["RESPONSE"]);return 500!==m()(e,["STATUS_CODE"])?l.a.createElement("div",null,l.a.createElement("img",{className:T.a["offer-img"],src:a.i(d.a)(t,2500,90)}),l.a.createElement(g.a,{className:T.a["cs-button"],onClick:o.handleRedirectHome},l.a.createElement(b.a,{strKey:"continueShopping"}))):l.a.createElement(p.a,null)},o.renderLockInPage=function(e){var t={},s=m()(e,["displayComponents","widgetDetails"],{}),n=s.messagePrefix,r=s.messageSuffix,c=s.buttonText,i=s.buttonEnabled,u=s.widgetBackgroundColor,p=s.widgetBackgroundImage,f=m()(e,["displayComponents","desktopLayout"]);return p?t.backgroundImage="url("+a.i(d.a)(p,2500,90)+")":u&&(t.backgroundColor=u),l.a.createElement("div",null,f&&f.map(function(s,u){return"LOCKIN_WIDGET"===s?l.a.createElement("div",{key:u,className:T.a["reg-section"],style:t},l.a.createElement("div",{className:T.a["text-message"]},n,l.a.createElement("span",{className:T.a["text-message-suffix"]}," ",r)),l.a.createElement(g.a,{disabled:!i,className:i?T.a["reg-button"]:T.a["button-disabled"],onClick:function(){return o.handleButton(e)}},c)):l.a.createElement("img",{key:u,className:T.a["offer-img"],src:a.i(d.a)(s,2500,90)})}),l.a.createElement("div",{className:T.a["lockIn-tnc"]},l.a.createElement(b.a,{strKey:"festivePass.preTncText"}),l.a.createElement("a",{className:T.a["tnc-link"],href:"/pages/festivepass-tnc",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.a,{strKey:"festivePass.tncText"}))))},o.state={SuccessToastMessage:"",FailureToastMessage:""},o}return o(t,e),I(t,[{key:"componentDidMount",value:function(){this.props.lockInPageDetailsAction()}},{key:"componentWillReceiveProps",value:function(e){var t=e.lockInDetails;a.i(k.g)(t)&&this.state.SuccessToastMessage&&this.context.toast.showSuccess({message:this.state.SuccessToastMessage}),a.i(k.f)(t)&&"Register"===t.actionType&&this.state.FailureToastMessage&&this.context.toast.showError({message:this.state.FailureToastMessage})}},{key:"render",value:function(){var e=this.props.lockInDetails;return l.a.createElement("div",{className:T.a["lock-in-page"]},(a.i(k.h)(e)||a.i(k.e)(e))&&l.a.createElement(E.a,null),a.i(k.f)(e)&&"pageDetails"===e.actionType&&this.renderErrorPage(e),e.actionType&&(!a.i(k.f)(e)||"Register"===e.actionType)&&this.renderLockInPage(e))}}]),t}(i.Component),r.contextTypes={router:i.PropTypes.object.isRequired,toast:i.PropTypes.object.isRequired},c),x=function(e){return{lockInDetails:e.lockInData}},R={lockInPageDetailsAction:h.e,lockInRegisterAction:h.f};t.default=a.i(u.connect)(x,R)(P)}});