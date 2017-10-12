webpackJsonp([29],{"./pages/QuestionAnswerPages/WriteAnswerPage.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{pageData:e.questionAndAnswer.pageData,userState:e.userState}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/react.js"),u=n.n(i),c=n("./node_modules/react-redux/es/index.js"),l=n("./pages/QuestionAnswerPages/CommonPageWithLayout.js"),p=n("./utils/safeTraverse.ts"),d=n("./actions/productQNAActions.js"),f=n("./components/ProductQnAWidgets/ProductQnATile/ProductQnATile.js"),m=n("./components/Error/Error.js"),y=n("./components/ProductQnAWidgets/QnAInputWidget/index.js"),b=n("./components/ProductGridUnit/SimpleProductGridUnit.js"),w=n("./pages/QuestionAnswerPages/CommonPageWithLayout.css"),g=n.n(w),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),P(t,[{key:"renderComponent",value:function(e,t,r,a){var o=n.i(p.a)(t,["data",0,"value"]);switch(e){case"ProductQuestionDetail":var s=n.i(p.a)(o,["answers",0])||{},i=n.i(p.a)(this.context,["location","query"])||{},c=i.questionId,l=i.source;return u.a.createElement("div",{key:r},n.i(f.a)({title:n.i(p.a)(o,["text"]),className:g.a["question-title"]}),u.a.createElement(y.a,{withInfo:!0,id:c,source:l,text:s.text,anonymous:s.anonymous}));case"ProductSummary":return u.a.createElement(b.a,{key:r,product:n.i(p.a)(t,["data",0]),actualSize:180,size:312,quality:70,view:"compact",showRating:!0,className:a});case"ProductQuestionError":return u.a.createElement("div",{key:r,className:g.a["error-container"]},u.a.createElement(m.a,{errorType:"error404",title:"",subtitleclassName:g.a["error-subtitle"],subtitle:n.i(p.a)(o,["title"])}))}return null}}]),t}(n.i(l.a)({layoutName:"qna-submit-answer",pageName:"Submit Answer",pageType:"Submit Answer"})),j={fetchData:d.B,resetData:d.C};t.default=n.i(c.connect)(s,j)(h)}});