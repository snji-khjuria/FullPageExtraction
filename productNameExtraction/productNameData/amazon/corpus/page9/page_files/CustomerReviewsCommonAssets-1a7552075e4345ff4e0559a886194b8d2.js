(function(k){var m=window.AmazonUIPageJS||window.P,t=m._namespace||m.attributeErrors,b=t?t("CustomerReviewsCommonAssets"):m;b.guardFatal?b.guardFatal(k)(b,window):b.execute(function(){k(b,window)})})(function(k,m,t){k.when("A","cr-log-utils").register("cr-ajax-model",function(b,a){function c(a){e[a]&&(e[a].abort(),delete e[a])}function d(q,l,g,k,n,r,t){var z;z=r?r:h=h++;r=z;n=n?n:l.error||function(){};k=k?k:0;g=g?g:3;var C=l.finallyCallback||function(){};t||(t="reviewsAjax"+f++,m.uet&&m.uet("tc",
t));l.params.scope=t;l.contentType="application/x-www-form-urlencoded;charset=UTF-8";var B=l.success||function(){};l.success=function(a){delete e[r];"function"===typeof B&&B(a);"function"===typeof C&&C(a)};l.error=function(b){c(r);k++;k<g?(a.logError("AJAX Post to "+q+" failed, Attempt: "+k+" out of "+g,"WARN"),d(q,l,g,k,n,r,t)):(a.logError("AJAX Post to "+q+" from "+m.location.href+" failed, exhausted "+g+" attempts","FATAL"),"function"===typeof n&&n(b),"function"===typeof C&&C(b))};e[r]=b.post(q,
l);return r}var f=0,h=1,e={};return{abort:c,post:d}});k.when("A","jQuery").register("cr-A",function(b,a){var c={top:-100,left:-100};b.inView=function(b){b=b||a();if("function"===typeof b.offset){var f=(b.offset()||c).top-a(m).scrollTop();b=0<=f;f=f<a(m).height();return b&&f}return!1};b.onScreenAndVisible=function(){b.onScreen.apply(this,arguments)};return b});k.declare("reviews-constants",{PUSH_STATE:!0,REPLACE_STATE:!1,RATING_SERVICE_CONTEXT_ID:"ReviewsConsumption",data:{REFTAG:"data-reftag",
CSM_COUNTER:"data-csm-counter",getReviews:{STANDARD:"data-reviews-state-param",CHECKED:"data-reviews-param-checked",UNCHECKED:"data-reviews-param-unchecked"}},events:{CONTENT_CHANGED:"reviews:content-changed",RELOAD:"reviews:content-reload",RELOAD_COMPLETE:"reviews:content-reload-complete",AUTOSCROLL_COMPLETE:"reviews:autoscroll-complete",FILTER_FIRE_AGGREGATE:"reviews:filter-action:aggregate:trigger",FILTER_FIRE_UPDATE:"reviews:filter-action:trigger",FILTER_AGGREGATE:"reviews:filter-action:aggregate",
FILTER_PUSH:"reviews:filter-action:push-state",FILTER_REPLACE:"reviews:filter-action:replace-state",PAGINATION:"reviews:page-action",SEARCH_TEXTBOX:"reviews:search-textbox",SEARCH_BUTTON:"reviews:search-button",VOTE:"reviews:vote-action",TOGGLE_CLASS_CLICK:"reviews:toggle-class:click",FILTER_APPLY:"reviews:filter-action:apply",INPUT_COMMENT:"reviews:input-comment",SUBMIT_COMMENT:"reviews:submit-comment",OPEN_SUBMISSION_COMMENT:"reviews:open-comment-submission",SORT_COMMENTS:"reviews:sort-comments",
MORE_COMMENTS:"reviews:more-comments",EDIT_COMMENT:"reviews:edit-comment",CANCEL_EDIT_COMMENT:"reviews:cancel-edit-comment",DELETE_COMMENT:"reviews:delete-comment",SUBMIT_EDIT_COMMENT:"reviews:submit-edit-comment",MODIFY_EDIT_COMMENT:"reviews:modify-edit-comment",INPUT_PRODUCT_LINK:"reviews:input-product-link",SELECT_PRODUCT_LINK:"reviews:select-product-link",FEEDBACK_CLICK:"reviews:skyfall-feedback-click",CLIQUE_CLICK:"reviews:skyfall-clique-click",STAR_RATING_CLICK:"ryp:star-rating-click",STAR_RATING_CLEAR:"ryp:star-rating-clear-click"},
filterOptions:{SORT_KEY:"sortBy",HELPFUL:"helpful",RECENT:"recent",LEGACY_HELPFUL:"byRankDescending",LEGACY_RECENT:"bySubmissionDateDescending",MOBILE_HELPFUL:"sh",MOBILE_RECENT:"sd",STAR_KEY:"filterByStar",ALL_STARS:"all_stars",ONE_STAR:"one_star",TWO_STAR:"two_star",THREE_STAR:"three_star",FOUR_STAR:"four_star",FIVE_STAR:"five_star",POSTIVE:"positive",CRITICAL:"critical",FORMAT_KEY:"formatType",ALL_FORMATS:"all_formats",CURRENT_FORMAT:"current_format",AVP_KEY:"reviewerType",ALL_REVIEWS:"all_reviews",
AVP_ONLY:"avp_only_reviews"},keycodes:{ENTER:13,BACK_SPACE:8,SPACE:32},aui:{HIDDEN:"aok-hidden",NOWRAP:"aok-nowrap"}});k.when("A","cr-string-utils","cr-log-utils").register("cr-popup",function(b,a,c){function d(d){var h={};d&&d.data&&(h=d.data);var e=a.defaultIfBlank(h.url,d.$target.find("a").andSelf().filter("a").attr("href")),q=a.defaultIfBlank(h.title,"CustomerReviews"),q=""+q,l="";b.each({width:"500",height:"500",resizable:"1",scrollbars:"1",toolbar:"0",status:"1"},function(b,c){var d=
a.defaultIfBlank(h[c],b);l+=c+"="+d+","});var l=l.slice(0,-1),g=null;try{(g=m.open(e,q,l))?g.focus():c.logError("Unable to move focus to popup window with data: "+a.stringify(h),"ERROR"),d.$event.preventDefault()}catch(k){c.logError("Unable to open window with parameters: "+a.stringify(h),"FATAL",k)}return g}b.declarative("cr-popup",["click"],c.jsGuard(d));return{popup:d}});k.when("A","jQuery","reviews-constants").register("cr-generic-declarative-actions",function(b,a,c){function d(b){b&&
b.data&&b.data.selector&&b.data.cssClass&&b.$event&&"function"===typeof b.$event.preventDefault&&(a(b.data.selector).toggleClass(b.data.cssClass),b.$event.preventDefault())}b.declarative(c.events.TOGGLE_CLASS_CLICK,"click",d);return{toggleCssClass:d}});k.when("A","ready").register("cr-global-model",function(b){var a=b.state("reviews-page-state");a||(a=b.$("#cr-state-object").data("state"));var c=null;a&&(c=a.customerId);return{generateUrl:function(a,b){var c=a;c&&"/"!==c.charAt(c.length-
1)&&(c+="/");c&&b&&(c=c+"ref="+b);return c},isSignedIn:function(){return c?!0:!1}}});k.when("A","a-expander","jQuery","reviews-constants","cr-string-utils").register("cr-global-view",function(b,a,c,d,f){function h(a){var b="";if(a&&a.closest!==t){var c=a.closest("*["+k.REFTAG+"]");c&&(b=c.attr(k.REFTAG))}f.isBlank(b)&&a&&a.closest!==t&&(a=a.closest("*[rel]"))&&(b=a.attr("rel"));return f.defaultIfBlank(b,"cm_cr_unknown")}function e(a){return a&&"function"===typeof a.is?a.is("*["+k.getReviews.CHECKED+
"]")&&a.is("*["+k.getReviews.UNCHECKED+"]"):!1}function q(a){return a&&a.has!==t&&a.is!==t?0<a.find(":checked").length||a.is(":checked"):!1}function l(a,b){return a&&a.attr!==t&&b?f.parseJSON(a.attr(b))||{}:{}}function g(a){return a!==t}var k=d.data;b.on("a:expander:review_text_read_more:toggle:collapse",function(a){g(a)&&g(a.expander)&&g(a.expander.$expander)&&1===a.expander.$expander.length&&g(a.expander.$expander[0].closest(".review"))&&g(a.expander.$expander[0].closest(".review").offsetTop)&&
(a=a.expander.$expander[0].closest(".review").offsetTop,m.scroll(0,a))});b.on("a:pageUpdate",function(){g(a)&&a.initializeExpanders()});return{getReviewsStateParamsFromElement:function(a){var c=b.reduce(k.getReviews,function(a,b){return a+"*["+b+"],"},"").slice(0,-1),d;c&&a&&a.closest!==t&&(d=a.closest(c));return e(d)?q(d)?l(d,k.getReviews.CHECKED):l(d,k.getReviews.UNCHECKED):l(d,k.getReviews.STANDARD)},getReftag:function(a){var b;a&&a.$target&&(b=a.$target);a&&a.id&&(b=c("#"+a.id));a&&a.expander&&
a.expander.$expander&&(b=a.expander.$expander);b=h(b);"cm_cr_unknown"===b&&a&&a.data&&a.data.reftag&&(b=a.data.reftag);return b},getReftagByDom:h,scrollTo:function(a,b){var d=c(a).offset(),e=b||0,g=c("#cr-state-object").data("state"),g=g!==t&&g.disableScroll;d&&d.top!==t&&!g&&(c("html,body").stop(),c("html,body").animate({scrollTop:d.top-e},{queue:!1,duration:500}))}}});k.when("A").register("cr-log-utils",function(b){function a(a,b,c){m.ueLogError&&("string"!==typeof b&&(b="FATAL"),c?
m.ueLogError(c,{message:a,logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}):m.ueLogError({message:a},{logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}))}function c(a,b){return"string"===typeof b?b+a:"CustomerReviews:"+a}return{logError:a,jsGuard:function(b){if("function"===typeof b)return function(){try{return b.apply(this,arguments)}catch(c){a("Uncaught Error in function","FATAL",c)}};a("Unable to wrap non-function","ERROR");return b},incrementCount:function(a,b){if(m.ue){var h=
c(a,b),e=m.ue.count(h)||0;m.ue.count(h,e+1)}},logCount:function(a,b,h){m.ue&&(a=c(a,h),m.ue.count(a,b))}}});k.register("cr-mash-utils",function(){var b=!1;k.when("mash").execute(function(){b=!0});return{isMash:function(){return b}}});k.when("A","cr-log-utils").register("cr-number-utils",function(b,a){return{convertToInteger:function(b,d){if(b===parseInt(b,10))return b;if(null!==b&&b!==t&&""!==b)return parseInt(b.replace(/[^0-9]/g,""),10);if(d!==t)return d;a.logError("convertToInteger",
"Cannot convert "+b+" to Integer");return 0}}});k.when("cr-A","jQuery","cr-string-utils","afterReady").register("cr-on-view-utils",function(b,a,c){function d(a,c){if(!e[a]){var d=f(a,c)();q[a]=(q[a]||[]).concat(d);b.on.scroll(d)}}function f(c,d){return function n(){b.inView(a(c))&&(h(c,d),b.each(q[c]||[],function(a){b.off("scroll",a)}));return n}}function h(a,c){e[a]||(e[a]=!0,b.post(c.ajaxUrl,{params:c.ajaxParamsMap||{}}))}var e={},q={};b.each(a("*[data-cr-trigger-on-view]"),function(b,
e){var f=a(b),h=f.attr("data-cr-trigger-on-view"),h=c.parseJSON(h);if(null!==h){var q="cr-trigger-on-view-"+e;f.addClass(q);d("."+q,h)}});return{triggerOnScrollIntoView:d,trigger:h}});k.when("A","jQuery").register("cr-streaming-utils",function(b,a){return{appendFadeIn:function(c){if(null!==c&&2<c.length&&null!==c[1]&&null!==c[2]){var d=c[1];c=a(c[2]).hide();a(d).append(c);b.fadeIn(c,500,"ease-in-out",function(){})}}}});k.when("A","cr-log-utils").register("cr-string-utils",
function(b,a){function c(a){return null===a||a===t?!0:0===b.trim(a).length}return{defaultIfBlank:function(a,b){return c(a)?b:a},isBlank:c,parseJSON:function(c){try{return b.parseJSON(c)}catch(f){a.logError("Unable to parse JSON object","ERROR",f)}return null},startsWith:function(a,b){return a===b?!0:null===a||null===b?!1:0===a.indexOf(b)},stringify:function(a){return m.JSON&&m.JSON.stringify?m.JSON.stringify(a):a}}});k.when("A","cr-string-utils","3p-urijs").register("cr-uri-utils",function(b,
a,c){function d(){return c(m.location.href)}function f(){return d().query()}return{getCurrentUri:d,getCurrentQueryString:f,getCurrentQueryParameters:function(){return c.parseQuery(f())},isAmazonDomain:function(b){if("string"===typeof b||b instanceof String)b=c(b);var d=a.startsWith(b.domain(),"amazon");!1===d&&(b=b.hostname(),b=b.substring(b.indexOf(".")+1),d=a.startsWith(b,"amazon"));return d},setQueryParameters:function(d,e){if("string"===typeof d||d instanceof String)d=c(d);b.each(e,function(b,
c){a.isBlank(b)?d.removeSearch(c):d=d.setSearch(c,b)});return d},setReftag:function(b,d){if("string"===typeof b||b instanceof String)b=c(b);for(var f=b.segment(),l=!1,g=f.length-1;0<=g;g--)if(a.startsWith(f[g],"ref=")){l=!0;f[g]="ref="+d;break}l||f.push("ref="+d);b.segment(f);return b}}});k.when("cr-A","jQuery","cr-log-utils","cr-string-utils","afterReady").register("cr-weblab-utils",function(b,a,c,d){function f(d,e,f,m){k[e]||(c.logCount(f,0,m),d=h(a(d),e,f,m)(),l[e]=(l[e]||[]).concat(d),
b.on.scroll(d))}function h(a,c,d,f){return function z(){b.inView(a)&&(e(c,d,f),b.each(l[c]||[],function(a){b.off("scroll",a)}));return z}}function e(a,d,e){k[a]||(k[a]=!0,b.post("/ss/customer-reviews/ajax/weblab-trigger",{params:{weblabId:a}}),c.logCount(d,1,e))}var k={},l={};b.each(a("*[data-cr-weblab-trigger-on-scroll]"),function(b,c){var e=a(b),h=e.attr("data-cr-weblab-trigger-on-scroll"),h=d.parseJSON(h);if(null!==h){var l="cr-weblab-trigger-on-scroll-"+c;e.addClass(l);f("."+l,h.weblabId,h.metricName,
h.prefix)}});return{triggerOnScrollIntoView:f,triggerWeblab:e}});k.when("A").register("histogram-trigger",function(b){function a(){b.onScreen(b.$("#histogramTable"))&&b.trigger("scroll")}b.on.afterLoad(a);return{triggerHistogram:a}})});