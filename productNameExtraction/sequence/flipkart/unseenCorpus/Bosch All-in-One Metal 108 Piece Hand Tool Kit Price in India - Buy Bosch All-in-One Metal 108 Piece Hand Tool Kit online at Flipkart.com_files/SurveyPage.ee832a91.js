webpackJsonp([18],{"./pages/SurveyPage/Questions/GroupedQuestion.css":function(e,t){e.exports={"survey-options":"_1mSpXL","section-title":"_3AhFUj",option:"_2h_9ga","option-title":"vRey4H",dropdown:"_7hdrSB",select:"_2ACjOc","bar-class":"_2SarlH"}},"./pages/SurveyPage/Questions/GroupedQuestion.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g});var s,i,u=n("./node_modules/react/react.js"),l=n.n(u),c=n("./node_modules/lodash/get.js"),p=n.n(c),v=n("./pages/SurveyPage/Questions/GroupedQuestion.css"),f=n.n(v),y=n("./components/Dropdown/Dropdown.js"),m=n("./components/StringWidget/StringWidget.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=(i=s=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleInputChange=function(e){return function(t){var r=Object.assign({},n.state.values);r[e]=t,n.setState({values:r});var a=Object.keys(r).map(function(e){return{node_id:e,response:[r[e]]}});n.props.onValueChange(a)}},n.state={values:n.getLocalAnswers(e),error:null},n}return o(t,e),d(t,[{key:"getLocalAnswers",value:function(e){var t=e.section,n=e.localAnswers,r=e.nodes,a={};return t.nodes.forEach(function(e){var t=p()(n,[e,0])||p()(r,[e,"response",0]);t&&(a[e]=t)}),a}},{key:"componentWillReceiveProps",value:function(e){var t=e.survey,n=e.localAnswer,r=p()(n,[0])||p()(t,["response",0]);this.setState({value:r})}},{key:"render",value:function(){var e=this,t=this.props,r=t.nodes,a=t.section,o=a.nodes.map(function(t){var a=p()(r,[t]),o=p()(e.state,["values",t],"");return l.a.createElement("div",{className:f.a.option,key:t},l.a.createElement("div",{className:f.a["option-title"]},a.text),l.a.createElement(y.a,{value:o,className:f.a.dropdown,contentClassName:f.a.select,barClassName:f.a["bar-class"],onChange:e.handleInputChange(t)},l.a.createElement("option",{value:""},a.hint||n.i(m.a)("surveyGroupedDefault")),a.options&&a.options.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.text)})))});return l.a.createElement("div",{className:f.a["survey-options"]},l.a.createElement("div",{className:f.a["section-title"]},a.name),o)}}]),t}(u.Component),s.propTypes={nodes:u.PropTypes.object,section:u.PropTypes.object,localAnswers:u.PropTypes.object,onValueChange:u.PropTypes.func},i)},"./pages/SurveyPage/Questions/MultiLineTextQuestion.css":function(e,t){e.exports={"survey-options":"nfkWMn",title:"_2D6As5",multiline:"_3lxvY1","multiline-txt":"_17Ulob","error-msg":"_1z58u7"}},"./pages/SurveyPage/Questions/MultiLineTextQuestion.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g});var s,i,u=n("./node_modules/react/react.js"),l=n.n(u),c=n("./pages/SurveyPage/Questions/MultiLineTextQuestion.css"),p=n.n(c),v=n("./node_modules/lodash/get.js"),f=n.n(v),y=n("./components/StringWidget/StringWidget.js"),m=n("./pages/SurveyPage/SurveyConstants.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=(i=s=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleTextChange=function(e){var t=f()(o.props,["survey","id"]),r=f()(e,["target","value"]),a=f()(o.props,["survey","text_constraint"]),s=f()(o.props,["survey","max_text_length"]),i=!1,u=void 0;a===m.b.TEXT&&(i=""!==r.trim()&&(!s||s&&s>r.trim().length),""===r.trim()?u=n.i(y.a)("surveyValidationTxtEmpty"):s&&s<r.trim().length&&(u=n.i(y.a)("surveyValidationTxtMaxLength"))),o.setState({value:r,error:i?null:u}),i?o.props.onValueChange([{node_id:t,response:[r]}]):o.props.onValueChange(null)},o.handleSubmit=function(){o.props.onValueChange([o.state.value])},o.state={value:f()(e,["localAnswer",0])||f()(e,["survey","response",0])||"",error:null},o}return o(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.survey,n=e.localAnswer,r=f()(n,[0])||f()(t,["response",0])||"";this.setState({value:r,error:null})}},{key:"render",value:function(){var e=f()(this.props,["survey","hint"],""),t=f()(this.props,["survey","text"]);return l.a.createElement("div",{className:p.a["survey-options"]},l.a.createElement("div",{className:p.a.title},t),l.a.createElement("div",{className:p.a.multiline},l.a.createElement("textarea",{rows:"6",placeholder:e,className:p.a["multiline-txt"],value:this.state.value,onChange:this.handleTextChange})),this.state.error&&l.a.createElement("div",{className:p.a["error-msg"]},this.state.error))}}]),t}(u.Component),s.propTypes={localAnswer:u.PropTypes.array,survey:u.PropTypes.object},i)},"./pages/SurveyPage/Questions/MultipleChoiceMultipleAnswerQuestion.css":function(e,t){e.exports={"survey-options":"_8PKEmP",title:"_2jxDC-","checkbox-options":"_1UbmNi"}},"./pages/SurveyPage/Questions/MultipleChoiceMultipleAnswerQuestion.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return d});var s,i,u=n("./node_modules/react/react.js"),l=n.n(u),c=n("./node_modules/lodash/get.js"),p=n.n(c),v=n("./pages/SurveyPage/Questions/MultipleChoiceMultipleAnswerQuestion.css"),f=n.n(v),y=n("./components/Checkbox/Checkbox.js"),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(i=s=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.handleChange=function(e){return function(t){var r=n.state.value;t.checked?r.indexOf(e)===-1&&r.push(e):r=n.state.value.filter(function(t){return t!==e}),n.setState({value:r});var a=p()(n.props,["survey","id"]);"function"==typeof n.props.onValueChange&&n.props.onValueChange([{node_id:a,response:r}])}};var o=p()(e,["localAnswer"])||p()(e,["survey","response"])||[];return n.state={value:o,error:null},n}return o(t,e),m(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.survey,n=e.localAnswer,r=p()(n)||p()(t,["response"])||[];this.setState({value:r})}},{key:"render",value:function(){var e=this,t=p()(this.props,["survey","options"]),n=p()(this.props,["survey","text"]);return t&&0!==t.length?l.a.createElement("div",{className:f.a["survey-options"]},l.a.createElement("div",{className:f.a.title},n),t.map(function(t){return l.a.createElement("div",{key:t.id,className:f.a["checkbox-options"]},l.a.createElement(y.a,{label:t.text,onChange:e.handleChange(t.id),key:t.id,checked:e.state.value.indexOf(t.id)>-1}))})):null}}]),t}(u.Component),s.propTypes={localAnswer:u.PropTypes.array,survey:u.PropTypes.object},i)},"./pages/SurveyPage/Questions/MultipleChoiceSingleAnswerQuestion.css":function(e,t){e.exports={"survey-options":"_2t10_K",title:"_2SPIke","image-box":"_2XeVWH",img:"YntNHM","radio-option":"opKXS5"}},"./pages/SurveyPage/Questions/MultipleChoiceSingleAnswerQuestion.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return h});var i=n("./node_modules/react/react.js"),u=n.n(i),l=n("./node_modules/lodash/get.js"),c=n.n(l),p=n("./pages/SurveyPage/Questions/MultipleChoiceSingleAnswerQuestion.css"),v=n.n(p),f=n("./components/Radio/RadioList.js"),y=n("./utils/getImageUrl.js"),m=n("./node_modules/classnames/index.js"),d=n.n(m),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.handleChange=function(e){n.setState({value:e});var t=c()(n.props,["survey","id"]);n.props.onValueChange&&n.props.onValueChange([{node_id:t,response:[e]}])};var r=c()(e,["localAnswer",0])||c()(e,["survey","response",0]);return n.state={value:r,error:null},n}return s(t,e),g(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.survey,n=e.localAnswer,r=c()(n,[0])||c()(t,["response",0]);this.setState({value:r})}},{key:"render",value:function(){var e,t=c()(this.props,["survey","options"]),a=c()(this.props,["survey","text"]),o=c()(this.props,["survey","image_url"]);return t&&0!==t.length?u.a.createElement("div",{className:v.a["survey-options"]},u.a.createElement("div",{className:"row"},o&&u.a.createElement("div",{className:d()("col-6-12",v.a["image-box"])},u.a.createElement("img",{src:n.i(y.a)(o,200),className:v.a.img})),u.a.createElement("div",{className:d()((e={},r(e,v.a["col-6-12"],o),r(e,v.a["col-12-12"],!o),e))},u.a.createElement("div",{className:v.a.title},a),u.a.createElement(f.a,{onChange:this.handleChange,checkedId:this.state.value,name:"radiolist"},t.map(function(e){return u.a.createElement("div",{key:e.id,className:v.a["radio-option"]},e.text)}))))):null}}]),t}(i.Component)},"./pages/SurveyPage/Questions/RatingScaleQuestion.css":function(e,t){e.exports={"survey-options":"ePtdEc",title:"_3oXeiW","select-group":"_2QO9qR","select-btn":"r5m_pO",selected:"_3aM-ZY",hint:"_16abbs",hintLeft:"_3KX3NB",hintRight:"_1I80zF"}},"./pages/SurveyPage/Questions/RatingScaleQuestion.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g});var i=n("./node_modules/react/react.js"),u=n.n(i),l=n("./components/Button/Button.tsx"),c=n("./node_modules/classnames/index.js"),p=n.n(c),v=n("./node_modules/lodash/get.js"),f=n.n(v),y=n("./pages/SurveyPage/Questions/RatingScaleQuestion.css"),m=n.n(y),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.handleSelect=function(e){return function(){var t=f()(n.props,["survey","id"]);n.setState({value:e}),n.props.onValueChange&&n.props.onValueChange([{node_id:t,response:[e]}])}};var r=f()(e,["localAnswer",0])||f()(e,["survey","response",0]);return n.state={value:r,error:null},n}return s(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.survey,n=e.localAnswer,r=f()(n,[0])||f()(t,["response",0]);this.setState({value:r})}},{key:"render",value:function(){var e=this,t=this.props.survey,n=t.options,a=t.text;if(!n||0===n.length)return null;var o=f()(n,[0,"hint"]),s=f()(n,[n.length-1,"hint"]);return u.a.createElement("div",{className:m.a["survey-options"]},u.a.createElement("div",{className:m.a.title},a),u.a.createElement("div",{className:m.a["select-group"]},n.map(function(t,n){return u.a.createElement(l.a,{key:n,primary:!0,className:p()(m.a["select-btn"],r({},m.a.selected,e.state.value&&e.state.value===t.id)),onClick:e.handleSelect(t.id)},t.text)}),o&&s&&u.a.createElement("div",{className:m.a.hint},u.a.createElement("span",{className:m.a.hintLeft},o),u.a.createElement("span",{className:m.a.hintRight},s))))}}]),t}(i.Component)},"./pages/SurveyPage/Questions/TextQuestion.css":function(e,t){e.exports={"survey-options":"_2_mp9n",title:"_3L0ESs"}},"./pages/SurveyPage/Questions/TextQuestion.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g});var s,i,u=n("./node_modules/react/react.js"),l=n.n(u),c=n("./pages/Checkout/TextInput.js"),p=n("./pages/SurveyPage/Questions/TextQuestion.css"),v=n.n(p),f=n("./node_modules/lodash/get.js"),y=n.n(f),m=n("./components/StringWidget/StringWidget.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=(i=s=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTextChange=function(e){n.setState({value:e});var t=y()(n.props,["survey","id"]);"function"==typeof n.props.onValueChange&&n.props.onValueChange([{node_id:t,response:[e]}])},n.state={value:y()(e,["localAnswer",0])||y()(e,["survey","response",0]),error:null},n}return o(t,e),d(t,[{key:"render",value:function(){var e=this.props.survey.text;return l.a.createElement("div",{className:v.a["survey-options"]},l.a.createElement("div",{className:v.a.title},e),l.a.createElement(c.a,{onTextChange:this.handleTextChange,placeholder:n.i(m.a)("surveyCurrencyLabel"),errorMsg:this.state.error,value:this.state.value}))}}]),t}(u.Component),s.propTypes={survey:u.PropTypes.object,localAnswer:u.PropTypes.object,nodes:u.PropTypes.object},i)},"./pages/SurveyPage/Survey.css":function(e,t){e.exports={survey:"_3EtvRk","survey-question":"_20cw99",title:"_1RqNKb","image-box":"_3AdIc9",image:"_1HR_j4"}},"./pages/SurveyPage/Survey.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return w});var s,i,u=n("./node_modules/react/react.js"),l=n.n(u),c=n("./pages/SurveyPage/Survey.css"),p=n.n(c),v=n("./pages/SurveyPage/SurveyConstants.js"),f=n("./node_modules/lodash/get.js"),y=n.n(f),m=n("./pages/SurveyPage/Questions/TextQuestion.js"),d=n("./pages/SurveyPage/Questions/MultipleChoiceSingleAnswerQuestion.js"),g=n("./pages/SurveyPage/Questions/MultiLineTextQuestion.js"),h=n("./pages/SurveyPage/Questions/GroupedQuestion.js"),b=n("./pages/SurveyPage/Questions/MultipleChoiceMultipleAnswerQuestion.js"),_=n("./pages/SurveyPage/Questions/RatingScaleQuestion.js"),S=n("./utils/shallowEqual.js"),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=(i=s=function(e){function t(){var e,n,o,s;r(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.onValueChange=function(e){o.props.onAnswered(e)},o.renderOptions=function(){var e=o.props,t=e.currentItem,n=e.localAnswers,r=e.nodes,a=t.question,s=t.section,i=y()(n,[a]),u=r[a];if("GROUPED"===s.type)return l.a.createElement(h.a,{onValueChange:o.onValueChange,section:s,nodes:r,localAnswers:n});if(y()(u,["preferred_ui_type"]))switch(u.preferred_ui_type){case v.a.TEXTSINGLELINE:return l.a.createElement(m.a,{onValueChange:o.onValueChange,survey:u,localAnswer:i});case v.a.IMAGEWITHOPTIONS:return l.a.createElement(d.a,{onValueChange:o.onValueChange,survey:u,localAnswer:i});case v.a.OPTIONTAGS:return l.a.createElement(b.a,{onValueChange:o.onValueChange,survey:u,localAnswer:i});case v.a["5RATINGSCALE"]:return l.a.createElement(_.a,{onValueChange:o.onValueChange,survey:u,localAnswer:i});case v.a.TEXTMULTIPLELINES:return l.a.createElement(g.a,{onValueChange:o.onValueChange,survey:u,localAnswer:i});default:return null}return null},s=n,a(o,s)}return o(t,e),E(t,[{key:"shouldComponentUpdate",value:function(e,t){return!n.i(S.a)(e,this.props)}},{key:"render",value:function(){return l.a.createElement("div",{className:p.a.survey},this.renderOptions())}}]),t}(u.Component),s.propTypes={currentItem:u.PropTypes.object,localAnswers:u.PropTypes.object,nodes:u.PropTypes.object},i)},"./pages/SurveyPage/SurveyConstants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r={TEXTSINGLELINE:"TEXTSINGLELINE",IMAGEWITHOPTIONS:"IMAGEWITHOPTIONS",TEXTMULTIPLELINES:"TEXTMULTIPLELINES","5RATINGSCALE":"5RATINGSCALE",OPTIONTAGS:"OPTIONTAGS"},a={CURRENCY:"currency",TEXT:"text"}},"./pages/SurveyPage/SurveyPage.css":function(e,t){e.exports={"survey-page":"_34QiuH","lhs-card":"eL8j4V",img:"_31H_8e","survey-page-content":"_3nT66n","next-prev-container":"_77Jk5Q",btn:"_2aVwx0",hasPrev:"UjRU7_",loading:"_2QxBWS",timer:"TZ5dag","timer-label":"_3yXtnN","timer-time":"_3TTkGy",progress:"OwpNG9","progress-outer":"_16aoGg","progress-bar":"_177aB2","btn-left":"peA7gi","btn-right":"GKsoNN","survey-confirmation":"_3FK5Zv",loader:"_1yPwLI",title:"_-5Z_Aq",image:"_9T9ytA","close-btn":"_2-XH6-","error-block":"_1nzrx8","survey-page-loader":"_15sqJz"}},"./pages/SurveyPage/SurveyPage.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("./node_modules/react/react.js"),u=n.n(i),l=n("./node_modules/react-redux/es/index.js"),c=n("./components/Common/Loader/Loader.tsx"),p=n("./pages/SurveyPage/SurveyPage.css"),v=n.n(p),f=n("./utils/asyncStatusHelper.ts"),y=n("./components/Common/Card/index.js"),m=n("./actions/surveyPageActions.js"),d=n("./node_modules/lodash/get.js"),g=n.n(d),h=n("./components/Button/Button.tsx"),b=n("./pages/SurveyPage/Survey.js"),_=n("./components/Error/index.js"),S=n("./components/StringWidget/StringWidget.js"),E=n("./utils/getImageUrl.js"),w=n("./components/Title/Title.js"),j=n("./utils/omnitureHelper.js"),P=n("./node_modules/classnames/index.js"),T=n.n(P),C=n("./components/Timer/Timer.tsx"),O=n("./node_modules/lodash/pick.js"),N=n.n(O),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Q=function(e){function t(e){a(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.getCurrentNode=function(){var e=s.props.surveyState,t=e.currentItem,n=e.surveyData,r=g()(t,["question"]);return g()(n,["nodes",r])},s.isQuestionAnswered=function(){var e=s.props.surveyState,t=e.localAnswers,n=e.currentItem,r=e.surveyData,a=g()(n,["question"]);return null!==(s.state.answers||g()(t,[a])||g()(r,["nodes",a,"response"],null))},s.goToPrev=function(){s.props.goPrevQuestion()},s.goToNext=function(){var e=g()(s.props,["surveyState","hasNext"]),t=s.getSurveyParams(s.props),n=s.state.answers;n?(s.props.saveSurvey(x({},t,{responses:n})),s.setState({answers:null})):s.props.goNextQuestion(),e||s.props.completeSurvey(t)},s.onCompleteSurvey=function(){var e=s.getSurveyParams(s.props);s.props.completeSurvey(e)},s.onAnswered=function(e){s.setState({answers:e})},s.renderCompleted=function(){var e=g()(s.props,["surveyState","thankYouMessage"]);return e?u.a.createElement("div",{className:v.a["survey-confirmation"]},u.a.createElement("img",{className:v.a.image,src:n.i(E.a)(g()(e,["image_url"]),400)}),u.a.createElement("div",{className:v.a.title},e.confirmation_text),u.a.createElement("div",{className:v.a["close-btn"]},e.confirmation_button_text?u.a.createElement(h.a,{primary:!0,onClick:function(){return s.props.router.push("/")}},e.confirmation_button_text):null)):u.a.createElement("div",{className:v.a["survey-confirmation"]},u.a.createElement(c.a,null))},s.renderNavigation=function(){var e=s.props.surveyState,t=e.hasPrev,a=e.hasNext,o=s.getCurrentNode(),i=!!g()(o,["mandatory"])&&!s.isQuestionAnswered(),l=g()(e,["surveyData","timed_survey"]);return u.a.createElement("div",{className:v.a["next-prev-container"]},l?s.renderTimer():s.renderProgress(),t&&u.a.createElement(h.a,{primary:!0,className:v.a.btn,onClick:s.goToPrev},n.i(S.a)("surveyPrev")),u.a.createElement(h.a,{primary:!0,className:T()(v.a.btn,r({},v.a.hasPrev,t)),disabled:i,onClick:s.goToNext},a?n.i(S.a)("surveyNext"):n.i(S.a)("surveyFinish")))},s.renderTimer=function(){var e=s.props.surveyState,t=g()(e,["surveyData","survey_end_time"]),n=(new Date).getTime();return!t||t<n?null:u.a.createElement("div",{className:v.a.timer},u.a.createElement("div",{className:v.a["timer-time"]},u.a.createElement(S.b,{strKey:"surveyTimeRemaining",className:v.a["timer-label"]})," ",u.a.createElement(C.a,{className:v.a["timer-time"],timeRemaining:t-n,onExpiry:s.onCompleteSurvey})))},s.renderProgress=function(){var e=s.props.surveyState,t=g()(e,["progress"],0);return u.a.createElement("div",{className:v.a.progress},u.a.createElement(S.b,{strKey:"surveyProgress",attributes:{progress:t},className:v.a["timer-label"]}),u.a.createElement("div",{className:v.a["progress-outer"]},u.a.createElement("div",{className:v.a["progress-bar"],style:{width:t+"%"}})))},s.renderSurvey=function(){var e=s.props.surveyState,t=e.currentItem,n=e.localAnswers,r=g()(e,["surveyData","nodes"]);return u.a.createElement(b.a,{currentItem:t,localAnswers:n,nodes:r,onAnswered:s.onAnswered})},s.state={answers:null},s}return s(t,e),A(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.userState;this.props.fetchSurveyData(this.getSurveyParams(this.props));var r=Object.assign({},j.a.getBaseOmnitureFields({pageName:"Survey Page",pageType:"Survey Page",location:t,userState:n}),{events:"event1"});j.a.trackOmniturePageView(r)}},{key:"componentWillReceiveProps",value:function(e){var t=e.surveyState;if(n.i(f.f)(t)&&t.error&&401===t.error&&this.props.router.push("/account/login?ret="+encodeURIComponent(e.location.pathname+e.location.search)),(n.i(f.e)(this.props.surveyState)||n.i(f.h)(this.props.surveyState))&&n.i(f.g)(t)&&!t.isCompleted){var r=this.getSurveyParams(e,!0);r.questionId&&r.response&&this.props.saveSurvey(x({},r,{responses:[{node_id:r.questionId,response:[r.response]}],initialResponse:!0}))}}},{key:"getSurveyParams",value:function(e,t){var n=g()(e,["location","query"]),r=N()(n,["id","orderid","order_id","ref","ref_id","question_id","response","sec_acc_id","ts","secReturnId","accountId"]),a={surveyId:r.id,refId:r.ref||r.ref_id,orderId:r.orderid||r.order_id,secAccId:r.sec_acc_id||r.accountId,ts:r.ts,secReturnId:r.secReturnId};return t&&(a.questionId=r.question_id,a.response=r.response),a}},{key:"render",value:function(){var e=this,t=this.props.surveyState;if(n.i(f.f)(t))return u.a.createElement(y.a,{className:v.a["survey-page"]},u.a.createElement("div",{className:v.a["error-block"]},u.a.createElement(_.a,{errorAction:function(){return e.props.router.push("/")},actionButtonText:n.i(S.a)("goToHome")})));if(n.i(f.e)(t)||n.i(f.h)(t))return u.a.createElement(y.a,{className:v.a["survey-page-loader"]},u.a.createElement(c.a,null));var r=g()(t,["contextData","title"]),a=g()(t,["contextData","imageUrl"]);return u.a.createElement("div",{className:v.a["survey-page"]},u.a.createElement(w.a,{title:n.i(S.a)("surveyPageTitle"),overrideServerTitle:!0}),u.a.createElement("div",{className:"row"},r&&u.a.createElement("div",{className:"col-3-12"},u.a.createElement(y.a,{className:v.a["lhs-card"]},u.a.createElement("img",{src:a,className:v.a.img}),u.a.createElement("div",null,r))),u.a.createElement(y.a,{className:T()("col-9-12",v.a["survey-page-content"])},t.isCompleted?this.renderCompleted():this.renderSurvey(),!t.isCompleted&&this.renderNavigation())))}}]),t}(i.Component),k=function(e){return{surveyState:e.surveyState,userState:e.userState}},I={fetchSurveyData:m.h,saveSurvey:m.i,completeSurvey:m.j,goNextQuestion:m.k,goPrevQuestion:m.l};t.default=n.i(l.connect)(k,I)(Q)}});