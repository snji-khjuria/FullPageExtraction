!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(require,module,exports){/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * DACX SafeFrame v1.14_FX4 -- 2017-09-28T12:30:04
*/
!function(window,document){function initSafeframe(){function addAdHandler(a,b,c,d){ADS_HANDLERS[a]=ADS_HANDLERS[a]||{},ADS_HANDLERS[a][c]=util.safeFunctionWrapper(d,logError,"Error within ad handler "+c+": "+b)}function initializeAdIds(a,b){AD_IDS[a]={slotId:b,placementDivId:"ape_"+b+"_placement",iframeId:"ape_"+b+"_iframe"}}function openFeedback(a,b){if("function"==typeof window.DA.s)window.DAF=[a,b],window.DA.s(window.DA.f+"-external");else if("function"==typeof window.d16g_showFeedbackDialog){var c={a:b,c:a};window.d16g_showFeedbackDialog(c)}else{var d="Unable to open feedback popover (campaign:"+a+") aanParams: "+b;logError(d)}}function getQueryParams(){var a={};try{for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("="),f=e[0];e.length>1&&0===f.indexOf("sf-")&&(a[f]=e[1])}}catch(a){logError("Error parsing query parameters",a)}return a}function defaultResizeSafeFrameHandler(a){return function(){resizeSafeFrameAd(a.arid,a.size.width,a.size.height,a.maxAdWidth,!0,messenger,AD_IDS)}}function createSafeFrame(a){try{var b,c=JSON.stringify(a),d=document.getElementById(AD_IDS[a.arid].placementDivId);if(/MSIE (6|7|8)/.test(navigator.userAgent))try{b=document.createElement("<iframe name='"+c+"'>")}catch(a){b=createIframeWithName(c)}else b=createIframeWithName(c);b.id=AD_IDS[a.arid].iframeId,b.src=SF_HTML,b.scrolling="no",b.height=a.size.height||"250px",b.width=a.size.width||"300px",b.className=a.iframeClass||"",b.setAttribute("frameborder","0"),b.setAttribute("marginheight","0"),b.setAttribute("marginwidth","0"),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("allowfullscreen",""),b.setAttribute("mozallowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.setAttribute(ARID_ATTR,a.arid),b.style.cssText=a.iframeExtraStyle||"",b.a=a.aanParams||{},b.f=a.feedbackJsUrl||1,b.c=a.campaignId,b.isSafeframeGoldbox="goldbox-ads"==a.slotName,b.boolFeedback=a.boolFeedback,a.iframeSandbox&&(b.sandbox=a.iframeSandbox),a.showInlineFeedback&&(b.ifp=a.inlineFeedbackParams||{}),d.appendChild(b),sendCsmMetric("cf",a.slot),messenger.adMap[a.arid]={slot:d,iframe:b,options:a},adBlockerCSMMediator.adbMap[a.arid]={slot:a.slot,adBlockerIsDisabled:void 0,adImgLoaded:void 0,adImpressionsFired:void 0,adViewabilityFired:void 0}}catch(a){logError("Error creating safeFrame",a)}}function renderViewableAds(a,b){var c=!0;for(var d in VIEWABLE_ADS){if((VIEWABLE_ADS[d].iframe?VIEWABLE_ADS[d].iframe.contentWindow:null)&&!VIEWABLE_ADS[d].alreadyRendered){c=!1;var e=VIEWABLE_ADS[d].slot;viewability.findPercentInView(e)>=a?VIEWABLE_ADS[d].timeout||(VIEWABLE_ADS[d].timeout=setTimeout(renderAdMessage(d),b)):VIEWABLE_ADS[d].timeout&&(clearTimeout(VIEWABLE_ADS[d].timeout),VIEWABLE_ADS[d].timeout=null)}}c&&(util.removeWindowListener("scroll",debouncedViewabilityHandler),util.removeWindowListener("resize",debouncedViewabilityHandler))}function viewabilityHandler(){return renderViewableAds(viewability.PERCENT_VIEWABLE,viewability.DURATION_VIEWABLE)}function renderAdMessage(a){return function(){var b={key:"readyToRender",data:a};messenger.sendMessageToAd(a,"customMessage",b),VIEWABLE_ADS[a].timeout=null,VIEWABLE_ADS[a].alreadyRendered=!0}}function isDfpSimplifiedUrl(a){return a.indexOf("pubads.g.doubleclick.net/gampad")>-1}function sendAjaxRequest(a,b,c,d){try{var e;window.XMLHttpRequest&&(e=new XMLHttpRequest),e&&"withCredentials"in e?(e.onreadystatechange=util.safeFunctionWrapper(function(){if(4==e.readyState)if(200==e.status){var a=e.responseText;a?(d(a),sendCsmCounter(b,"ajax:renderad",1)):(sendCsmCounter(b,"ajax:noad",1),collapseSlot(c))}else sendCsmCounter(b,"ajax:errorstatus",1),sendCsmCounter(b,"ajax:error:"+e.status,1),collapseSlot(c)}),e.open("GET",a,!0),e.withCredentials=!0,e.send(),sendCsmCounter(b,"request",1)):(sendCsmCounter(b,"ajax:xhr2notsupported",1),collapseSlot(c))}catch(a){collapseSlot(c);var f=navigator.userAgent.toLowerCase(),g=f.match(/(firefox(?=\/))\/?\s*(\d+)/i)||[],h=3==g.length?parseInt(g[2],10):0;h>=42?sendCsmCounter(b,"ajax:exception:ff",1):(sendCsmCounter(b,"ajax:exception",1),logError("Error building AJAX request",a))}}function createDfpAjaxRequest(a,b){sendAjaxRequest(a,b.slot,AD_IDS[b.arid].placementDivId,function(c){var d=a.match(/amzn.[a-z\.^\/].+?(?=&)/);b.dfpSiteZone=d?d[0].replace("/","."):"",b.htmlContent=c,createSafeFrame(b)})}function loadAdSequence(a){return function(){var b=AD_IDS[a.arid].placementDivId;if(b){var c=document.getElementById(b);if(c&&!c.innerHTML){var d=a.src;a.htmlContent||a.htmlContentEncoded||!d?createSafeFrame(a):isDfpSimplifiedUrl(d)?createDfpAjaxRequest(d,a):-1!==d.indexOf("xsp")?createXspAjaxRequest(d,a,b,createSafeFrame):createSafeFrame(a)}}}}function appendNewAdFeedbackLink(a,b){if(a&&!a.isFeedbackLoaded&&b.adFeedbackInfo.boolFeedback){a.isFeedbackLoaded=!0;var c=a.parentNode,d=b.slotName,e=b.adFeedbackInfo.slugText,f=b.adFeedbackInfo.endPoint,g=b.advertisementStyle,h=b.feedbackDivStyle,i={adPlacementMetaData:b.adPlacementMetaData,adCreativeMetaData:b.adCreativeMetaData},j=function(a,b){if(a&&b)for(var c in b)a.style[c]=b[c];return a},k=function(a,b,c,d){var e=document.createElement(a);for(var f in b)e.setAttribute(f,b[f]);return j(e,c),d&&d.insertBefore(e,null),e},l=c.getElementsByTagName("div")[0]||k("div",{id:c.id+"_Feedback"},h,c),m=function(){(l.getElementsByTagName("div")[0]||k("div",0,g,l)).innerHTML=e},n=function(a){return encodeURIComponent(JSON.stringify(a))},o=function(a,b,c,d,e,f){try{var g=b.match(/\b(\w)/g).join("")+"_"+c;window[g]=d;var h=document.createElement("script");h.async=!0,h.src=a+(a.indexOf("?")>=0?"&":"?")+"callback="+g,h.onerror=e,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(h)}catch(a){f(a)}},p=f&&f.length?f+"?pl="+n(i):f,q=function(a){try{var b="object"==typeof a&&a;if(b&&"ok"==b.status){if("html"in b&&b.html&&(l.innerHTML=b.html),"script"in b&&b.script){var c=l.getElementsByTagName("script")[0]||k("script",0,null,l);c.innerHTML=b.script}}else m()}catch(a){m()}};p?o(p,d,"addFeedbackLink",q,m,m):m()}}function appendFeedbackLink(a){try{"function"==typeof d16g_addFeedbackLink&&!a.isFeedbackLoaded&&a.boolFeedback&&(a.isFeedbackLoaded=!0,d16g_addFeedbackLink(a))}catch(a){}}function modifyExistingIframes(){for(var a in messenger.adMap){appendFeedbackLink(messenger.adMap[a].iframe)}}function loadAdFeedback(a){try{window.DA=window.DA||[];var b=null;if(a&&(b=a.adFeedbackInfo&&a.adFeedbackInfo.adProgramId||a.adCreativeMetaData&&a.adCreativeMetaData.adProgramId),b){appendNewAdFeedbackLink(messenger.adMap[a.arid].iframe,a)}else a.daJsUrl&&loadScript(a.daJsUrl,function(){appendFeedbackLink(messenger.adMap[a.arid].iframe)})}catch(a){logError("Problem loading ad feedback ",a)}}if(window.DAsf)return void window.DAsf.loadAds();window.DAsf={version:"1.14_FX4"};var SF_TYPE="text/x-dacx-safeframe",SF_DOMAIN=getMediaCentralOrigin(),SF_HTML=SF_DOMAIN+"/images/G/01/ape/sf/desktop/sf-1.14_FX4._V515840210_.html",ARID_ATTR="data-arid",CUSTOM_METRICS={POST_MESSAGE_UNSUPPORTED:"d16g_postMessageUnsupported",POST_MESSAGE_SUPPORTED:"d16g_postMessageSupported"},ADS_HANDLERS={},VIEWABLE_ADS={},AD_IDS={};messenger.supportedCommands={resizeSafeFrameAd:function(a,b){util.addWindowListener("resize",ADS_HANDLERS[a.options.arid].defaultResizeSafeFrameHandler),resizeSafeFrameAd(a.options.arid,a.options.size.width,a.options.size.height,a.options.maxAdWidth,!0,messenger,AD_IDS)},changeSize:function(a,b){var c=a.options.allowedSizes;if(checkAgainstWhitelist(b,c,sizeValidator))a.iframe.height=b.height,a.iframe.width=b.width;else{var d="Size is not whitelisted: "+b.width+" x "+b.height+appendErrorDetails(a.options.arid);logError(d)}},collapseSlot:function(a,b){collapseSlot(AD_IDS[a.options.arid].placementDivId),"nav-sitewide-msg"===a.options.slotName&&delayLoad("amznJQ.available:navbarJSLoaded",function(){void 0!==parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(a,b){var c=a.options.allowedDomains;if(checkAgainstWhitelist(b.src,c,scriptValidator))a.slot=document.getElementById(AD_IDS[a.options.arid].placementDivId),void 0!==a.slot&&appendJsScript(b.src,a.slot,b.charset);else{var d="Domain is not whitelisted: "+b.src+appendErrorDetails(a.options.arid);logError(d)}},adFeedback:function(a,b){openFeedback(a.options.campaignId,a.options.aanParams)},logError:function(a,b){logError(b.message+appendErrorDetails(a.options.arid)+": "+a.options.slot,b.error)},sendMetrics:function(a,b){sendCsmMetric(b.metric,a.options.slot,b.metricMsg)},countMetric:function(a,b){sendCsmCounter(a.options.slot,b.metricMsg,1)},addCsmTag:function(a,b){addCsmTag(b.tag,a.options.slot,b.msg)},fireViewableLatencyMetrics:function(a,b){fireViewableLatencyMetrics(a.options.arid,a.options.slot)},customMessage:function(a,b){messenger.customMessage(b.key,b.body)},adDetails:function(a,b){a.options.aanResponse=b.aanResponse,a.options.extraInfo=util.extend(a.options.extraInfo||{},b.extraInfo),loadAdFeedback(a.options)},getAdInfo:function(a,b){a.options.adCreativeMetaData&&(a.options.adCreativeMetaData.adCreativeDetails=b.adInfo)},notifyWhenViewable:function(a,b){VIEWABLE_ADS[a.options.arid]||(a.rendered=!1,VIEWABLE_ADS[a.options.arid]=a),debouncedViewabilityHandler(),util.addWindowListener("scroll",debouncedViewabilityHandler),util.addWindowListener("resize",debouncedViewabilityHandler)},enableViewabilityTracker:function(a,b){messenger.updateViewability(a.options.arid);var c=util.throttle(messenger.updateViewability,20);addAdHandler(a.options.arid,a.options.slot,"viewabilityTracker",function(){c(a.options.arid)}),util.addWindowListener("scroll",ADS_HANDLERS[a.options.arid].viewabilityTracker),util.addWindowListener("resize",ADS_HANDLERS[a.options.arid].viewabilityTracker),util.addListener(document,"visibilitychange",ADS_HANDLERS[a.options.arid].viewabilityTracker)},loadAdBlockerDetectorScript:function(a,b){var c=getMediaCentralOrigin()+"/images/G/01/ads/advertising/ads._TTH_.js?cachebust="+Math.ceil(99989999*Math.random()+1e4),d=util.safeFunctionWrapper(function(){adBlockerCSMMediator.updateAdBlockerIsDisabled(a.options.arid,!1),messenger.sendMessageToAd(a.options.arid,"forceFallback",{})}),e=function(){adBlockerCSMMediator.updateAdBlockerIsDisabled(a.options.arid,!0)},f=util.createScript(c,"text/javascript","APE_adblockerdetector",d,e),g=document.getElementById(AD_IDS[a.options.arid].placementDivId);g?g.appendChild(f):document.body.appendChild(f)},updateAdImpressionsFired:function(a,b){adBlockerCSMMediator.updateAdImpressionsFired(a.options.arid,b.isImpFired)},updateAdViewabilityFired:function(a,b){adBlockerCSMMediator.updateAdViewabilityFired(a.options.arid,b.isViewed)},updateAdImgLoaded:function(a,b){adBlockerCSMMediator.updateAdImgLoaded(a.options.arid,b.isLoaded)},safeFrameReady:function(a){}},util.addWindowListener("message",messenger.receiveMessage);var debouncedViewabilityHandler=util.safeFunctionWrapper(util.debounce(viewabilityHandler,100));window.DAsf.registerCustomMessageListener=messenger.registerCustomMessageListener,window.DAsf.sendCustomMessage=messenger.sendCustomMessage,window.DAsf.isSafeframeAd=function(a){var b=!1;return"string"==typeof a&&(b=void 0!==messenger.adMap[a]),b},window.DAsf.getAdDetails=function(a){if(!window.DAsf.isSafeframeAd(a))return!1;var b=messenger.adMap[a].options,c=b.aanResponse||{};return{creativeId:c.creativeId||"",adId:c.adId||"",adNetwork:b.adServer||"",hostName:b.hostDomain||"",extraInfo:b.extraInfo||{},iframe:messenger.adMap[a].iframe}},window.DAsf.openAdFeedback=function(a){try{var b=messenger.adMap[a];openFeedback(b.options.campaignId,b.options.aanParams)}catch(a){logError("Error opening feedback",a)}},window.DAsf.loadAds=function(){var indx=0,tag=null,tags=[];if("function"!=typeof document.getElementsByClassName){var divs=document.getElementsByTagName("div"),scripts=document.getElementsByTagName("script"),i=0;for(i=0;i<divs.length;i++)tags[i]=divs[i];for(i=0;i<scripts.length;i++)tags[i+divs.length]=scripts[i]}else tags=document.getElementsByClassName(SF_TYPE);for(0===tags.length&&(tags=document.getElementsByTagName("script"));tag=tags[indx++];)if(("DIV"==tag.tagName&&hasClass(tag,SF_TYPE)||tag.getAttribute("type")==SF_TYPE)&&!tag.getAttribute(ARID_ATTR)){var data=tag.getAttribute("data-ad-details")||tag.text||tag.innerHTML||tag.innerText;try{data=/^\s*\(function\(\)/.test(data)?eval(data):JSON.parse(data),data.arid=data.arid||Math.random().toString(16).slice(2),tag.setAttribute(ARID_ATTR,data.arid),data.hostDomain=location.protocol+"//"+location.host,data.aanParams=decodeURIComponent(data.aanParams),data.allowedSizes="object"==typeof data.allowedSizes&&data.allowedSizes.length>=0?data.allowedSizes.concat(data.size):[data.size];var whitelistedDomains="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(data.allowedDomains="object"==typeof data.allowedDomains&&data.allowedDomains.length>=0?data.allowedDomains.concat(whitelistedDomains):whitelistedDomains,data.productAdsUrl=window.paSearchTowerAdsURL||window.paCusRevAllURL,data.parentLocation=location.origin||location.protocol+location.hostname,data.queryParams=getQueryParams(),data.aPageStart=window.aPageStart,data.adStartTime=window[data.slotName]?window[data.slotName].adStartTime||0:0,addAdHandler(data.arid,data.slot,"defaultResizeSafeFrameHandler",defaultResizeSafeFrameHandler(data)),initializeAdIds(data.arid,data.slot),data.forcePunt){addCsmTag("forcePunt",data.slot),collapseSlot(AD_IDS[data.arid].placementDivId);continue}if(sendCsmMetric("af",data.slot),"function"!=typeof window.postMessage){logCounter(CUSTOM_METRICS.POST_MESSAGE_UNSUPPORTED,1),collapseSlot(AD_IDS[data.arid].placementDivId);continue}logCounter(CUSTOM_METRICS.POST_MESSAGE_SUPPORTED,1),delayLoad(data.loadAfter,loadAdSequence(data),0,tag)}catch(a){data=null,logError("Error parsing sf tag",a)}}},window.DAsf.loadAds()}var msgHandler=require("./components/msgHandler"),adBlockerHandler=require("./components/adBlockerHandler"),util=msgHandler.util,viewability=msgHandler.viewability,messenger=msgHandler.messenger,logError=msgHandler.logError,appendErrorDetails=messenger.appendErrorDetails,loadScript=msgHandler.loadScript,sendCsmMetric=msgHandler.sendCsmMetric,sendCsmCounter=msgHandler.sendCsmCounter,addCsmTag=msgHandler.addCsmTag,fireViewableLatencyMetrics=msgHandler.fireViewableLatencyMetrics,hasClass=msgHandler.hasClass,createIframeWithName=msgHandler.createIframeWithName,logCounter=msgHandler.logCounter,collapseSlot=msgHandler.collapseSlot,resizeSafeFrameAd=msgHandler.resizeSafeFrameAd,delayLoad=msgHandler.delayLoad,getMediaCentralOrigin=msgHandler.getMediaCentralOrigin,scriptValidator=msgHandler.scriptValidator,sizeValidator=msgHandler.sizeValidator,appendJsScript=msgHandler.appendJsScript,checkAgainstWhitelist=msgHandler.checkAgainstWhitelist,createXspAjaxRequest=msgHandler.createXspAjaxRequest,adBlockerCSMMediator=new adBlockerHandler.adBlockerCSMMediator(sendCsmCounter),renderAdPlacement=function(){"undefined"==typeof JSON?loadScript("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",initSafeframe):initSafeframe()};util.safeFunctionWrapper(renderAdPlacement,logError,"Error initializing safeFrame")()}(window,document)},{"./components/adBlockerHandler":2,"./components/msgHandler":3}],2:[function(a,b,c){function d(a,b){var c=this;this.adbMap=b||{};var d=function(b,d,e){var f=c.adbMap;!0!==f[b].adBlockerIsDisabled&&void 0!==f[b].adBlockerIsDisabled&&!1===f[b].adBlockerIsDisabled&&(!1===d?a(f[b].slot,"adblocker:blocked:".concat(e),1):!0===d&&a(f[b].slot,"adblocker:notblocked:".concat(e),1))};this.updateAdBlockerIsDisabled=function(b,e){var f=c.adbMap;f[b]&&(f[b].adBlockerIsDisabled=e,f[b].adBlockerIsDisabled?a(f[b].slot,"adblockernotdetected",1):a(f[b].slot,"adblockerdetected",1),d(b,f[b].adImgLoaded,"adimg"),d(b,f[b].adImpressionsFired,"adimpressions"),d(b,f[b].adViewabilityFired,"adviewability"))},this.updateAdImgLoaded=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImgLoaded&&(e[a].adImgLoaded=b,d(a,e[a].adImgLoaded,"adimg"))},this.updateAdImpressionsFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImpressionsFired&&(e[a].adImpressionsFired=b,d(a,e[a].adImpressionsFired,"adimpressions"))},this.updateAdViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adViewabilityFired&&(e[a].adViewabilityFired=b,d(a,e[a].adViewabilityFired,"adviewability"))}}b.exports.adBlockerCSMMediator=d},{}],3:[function(a,b,c){function d(a,b){b=b||new Error(a),o("","safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(b,{logLevel:A.ERROR,attribution:"APE-safeframe",message:a+" "}):"undefined"!=typeof console&&console.error&&console.error(a,b))}function f(){var a=window.location.host.match(/^.*\.([^.:\/]*)/),b=null;if(a&&a.length>1&&(b=a[1]),!/s/.test(location.protocol))return"cn"===b?"http://g-ec4.images-amazon.com":"http://z-ecx.images-amazon.com";var c="na";return/^(com|ca|mx)$/.test(b)?c="na":/^(uk|de|fr|it|es|in)$/.test(b)?c="eu":/^(jp)$/.test(b)?c="fe":/^(cn)$/.test(b)&&(c="cn"),"https://images-"+c+".ssl-images-amazon.com"}function g(a){return a.replace(/^.{1,5}:\/\/|^\/\//,"")}function h(a,b){var c=document.createElement("script");c.src=a,c.setAttribute("crossorigin","anonymous"),c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!=c.readyState&&"complete"!=c.readyState||(c.onload=c.onreadystatechange=null,b&&"function"==typeof b&&b())},c.onerror=function(a){return d("Error loading script",a),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}function i(a,b,c){var d=document.createElement("script");d.charset=c||"utf-8",d.src=a,b.appendChild(d)}function j(a,b){var c=/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/;return a.match(c)[2]==b}function k(a,b){return a.height==b.height&&a.width==b.width}function l(a,b,c){if(!b||"object"!=typeof b)return!1;for(var d=0,e=b.length;d<e;d++)if(c(a,b[d]))return!0;return!1}function m(a,b,c){var e=this;this.adMap=a||{},this.supportedCommands=b||{},this.msgListeners=c||{};var f=function(a){var b=e.adMap,c=b[a].options;if(b!=={}&&c!=={}){var d="ape_"+c.slot+"_iframe";return b[a].iframe&&(b[a].iframe=b[a].iframe&&b[a].iframe.innerHTML?b[a].iframe:document.getElementById(d)),b[a].iframe}};this.sendMessageToAd=function(a,b,c){var d=f(a),e=d?d.contentWindow:null;if(e){var g={command:b,data:c};g=JSON.stringify(g),e.postMessage(g,"*")}},this.receiveMessage=function(a){var b=e.adMap,c=e.supportedCommands;if(b!=={}){var f,h;try{if(a.data&&a.data.message&&/.*Mash.*/i.test(a.data.message.id))return;if(f=JSON.parse(a.data),!(h=b[f.arid])||g(a.origin)!==g(B)||"object"!=typeof f.data)throw"Invalid Message: "+JSON.stringify(a.data)}catch(b){var i="Received Error: "+a.data;return void 0!==f&&f&&(i+=e.appendErrorDetails(f.arid)),void d(i,b)}h.options.debug&&"undefined"!=typeof console&&console.log(a);try{var j=c[f.command];j&&j(h,f.data)}catch(b){var i="Problem with message: "+a.data;void 0!==f&&(i+=e.appendErrorDetails(f.arid)),d(i,b)}}},this.appendErrorDetails=function(a){var b=e.adMap;if(b!=={}){var c="";if(void 0!==b[a]){var d=b[a].options;void 0!==d.aanResponse&&(c=" Ad Details: "+JSON.stringify(d.aanResponse))}return c}},this.customMessage=function(a,b){var c=e.msgListeners;if(c[a])try{c[a](b)}catch(a){d("Custom Message Error",a)}else d("Unrecognized custom message key: "+a)},this.registerCustomMessageListener=function(a,b,c){var f=!1,g=e.msgListeners;try{if(!g[a]||"function"!=typeof g[a]||c)g[a]=b,f=!0;else{d("Duplicate Key",new Error("Custom message listener already exists for key: "+a))}}catch(a){d("Error registering custom message listener",a)}return f},this.sendCustomMessage=function(a,b){var c=e.adMap,d={key:a,data:b};for(var f in c)e.sendMessageToAd(f,"customMessage",d)},this.updateViewability=function(a){var b=e.adMap,c=b[a].options;if(b!=={}&&c!=={}){var d,g,h;d=f(a),g=b[a].options.viewabilityStandards,h=y.getViewableInfo(d),void 0!==h&&(h.viewabilityStandards=g,e.sendMessageToAd(a,"updateViewability",h))}}}function n(a,b,c){var d=C[a],e=c?c+":":"";"function"==typeof window[d]&&window[d](a,"adplacements:"+e+b.replace(/\_/g,":"),{wb:1})}function o(a,b,c){var d=b&&a?b+":":b,e="adplacements:"+d+a.replace(/\_/g,":");window.ue&&"function"==typeof ue.count&&ue.count(e,c)}function p(a,b,c){window.ue&&ue.tag&&(a=a+":"+b.replace(/\_/g,":")+(c?":"+c:""),ue.tag(a))}function q(a,b){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[a]&&window.apeViewableLatencyTrackers[a].valid&&(window.apeViewableLatencyTrackers[a].loaded=!0,window.apeViewableLatencyTrackers[a].viewed&&(n("ld",b,"viewablelatency"),o(b,"htmlviewed:loaded",1)))}function r(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=a.className;return d&&c.test(d)}function s(a){var b=document.createElement("iframe");return b.name=a,b}function t(a,b){window.ue&&"function"==typeof ue.count&&ue.count(a,b)}function u(a){var b=document.getElementById(a);void 0!==b&&b&&(b.style.display="none")}function v(a,b,c,e,f,g,h){try{var i=document.getElementById(h[a].placementDivId),j=document.getElementById(h[a].wrapperDivId)||i,k=document.getElementById(h[a].iframeId);if(null===j||null===i||null===k)return;var l=c,m=b,n=function(a){l=a*c/b,m=a};if(f){var o=0===j.offsetWidth?window.innerWidth:j.offsetWidth;n(e?window.innerHeight<window.innerWidth?e:o:o)}l=Math.round(l)+"px",m=Math.round(m)+"px",k.style.height=l,k.style.width=m;var p={width:m,height:l};j!=i&&(i.style.height=l,g.sendMessageToAd(a,"resizeCreativeWrapper",p))}catch(b){d("Error resizing ad: "+h[a].slotId,b)}}function w(a,b,c,f){o(b.slot,"ajax:request",1);var g=function(a){if(4==a.readyState)if(200==a.status)try{var d=a.responseText;if(d){var e=JSON.parse(d),g=e.status;switch(g){case"punt":p("aaxPunt",b.slot),o(b.slot,"ajax:punt",1),u(c);break;case"error":o(b.slot,"ajax:error",1),u(c);break;default:b.aaxImpPixelUrl=e.impPixelURL,b.aaxInstrPixelUrl=e.instrPixelURL,b.htmlContent=e.creative,b&&b.adFeedbackInfo&&(b.adFeedbackInfo.adProgramId=e.programId),b&&b.adCreativeMetaData&&(b.adCreativeMetaData.adProgramId=e.programId,b.adCreativeMetaData.adImpressionId=e.impPixelURL,b.adCreativeMetaData.adCreativeId=e.creativeId,b.adCreativeMetaData.adId=e.adId,p("adRender",b.slot),p("adRender",b.slot,"creativeId:"+b.adCreativeMetaData.adCreativeId),p("adRender",b.slot,"programId:"+b.adCreativeMetaData.adProgramId)),f(b),o(b.slot,"ajax:renderad",1)}}else u(c),o(b.slot,"ajax:noad",1)}catch(a){u(c)}else o(b.slot,"ajax:errorstatus",1),u(c)},h=function(){o(b.slot,"ajax:xhrnotsupported",1),u(c)},i=function(){o(b.slot,"ajax:exception",1),d("Error building AJAX request",e),u(c)};z.sendAjaxRequest("GET",a,!0,g,h,i)}function x(a,b,c,d){var e="undefined"!=typeof P,f="undefined"!=typeof amznJQ,g=0!==c?function(){setTimeout(b,c)}:b;if("windowOnLoad"===a)"complete"===document.readyState?g():z.addWindowListener("load",g);else if("spATFEvent"===a)e?P.when("search-page-utilities").execute(function(a){a.afterEvent("spATFEvent",g)}):f?amznJQ.available("search-js-general",function(){SPUtils.afterEvent("spATFEvent",g)}):g();else if("criticalFeature"===a)e?P.when("cf").execute(g):f?amznJQ.onCompletion("amznJQ.criticalFeature",g):g();else if("r2OnLoad"===a)e?P.when("r2Loaded").execute(g):f?amznJQ.onReady("r2Loaded",g):g();else if(a.match("[^:]+:.+")){var h=a.split(":");if(h.length>1){var i=h[0].split("."),j=h[1],k=h.length>2?h[2]:j;e?P.when(k,"A").execute(g):f&&i.length>1?amznJQ[i[1]](j,g):g()}else g()}else if(a.match(/^\d{1,4}px$/g)){var l=!1,m=function(a,b,c){c&&y.findDistanceInView(c)<=parseInt(a,10)&&(b(),l=!0)},n=z.safeFunctionWrapper(z.throttle(function(){m(a,g,d),l&&(z.removeWindowListener("scroll",n),z.removeWindowListener("resize",n))},20));z.addWindowListener("scroll",n),z.addWindowListener("resize",n)}else g()}var y=a("./viewability"),z=a("./util"),A={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},B=f(),C={wb:"ues",bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};b.exports.util=z,b.exports.viewability=y,b.exports.messenger=new m,b.exports.logError=d,b.exports.SF_DOMAIN=B,b.exports.loadScript=h,b.exports.sendCsmMetric=n,b.exports.sendCsmCounter=o,b.exports.addCsmTag=p,b.exports.fireViewableLatencyMetrics=q,b.exports.hasClass=r,b.exports.createIframeWithName=s,b.exports.logCounter=t,b.exports.collapseSlot=u,b.exports.resizeSafeFrameAd=v,b.exports.createXspAjaxRequest=w,b.exports.delayLoad=x,b.exports.getMediaCentralOrigin=f,b.exports.appendJsScript=i,b.exports.scriptValidator=j,b.exports.sizeValidator=k,b.exports.checkAgainstWhitelist=l},{"./util":4,"./viewability":5}],4:[function(a,b,c){function d(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),d<128?(b+=String.fromCharCode(d),c++):d>191&&d<224?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b}function e(a){var b,c,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)f=j.indexOf(a.charAt(l++)),g=j.indexOf(a.charAt(l++)),h=j.indexOf(a.charAt(l++)),i=j.indexOf(a.charAt(l++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,k+=String.fromCharCode(b),64!=h&&(k+=String.fromCharCode(c)),64!=i&&(k+=String.fromCharCode(e));return k=d(k)}/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
b.exports.debounce=function(a,b,c){var d,e,g,h,i,j=function(){var k=f()-h;k<b&&k>=0?d=setTimeout(j,b-k):(d=null,c||(i=a.apply(g,e),d||(g=e=null)))};return function(){g=this,e=arguments,h=f();var k=c&&!d;return d||(d=setTimeout(j,b)),k&&(i=a.apply(g,e),g=e=null),i}},b.exports.throttle=function(a,b,c){var d,e,g,h=null,i=0;c||(c={});var j=function(){i=!1===c.leading?0:f(),h=null,g=a.apply(d,e),h||(d=e=null)};return function(){var k=f();i||!1!==c.leading||(i=k);var l=b-(k-i);return d=this,e=arguments,l<=0||l>b?(h&&(clearTimeout(h),h=null),i=k,g=a.apply(d,e),h||(d=e=null)):h||!1===c.trailing||(h=setTimeout(j,l)),g}};var f=function(){return Date.now?Date.now():(new Date).getTime()};b.exports.addListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):window.attachEvent&&a.attachEvent("on"+b,c)},b.exports.addWindowListener=function(a,c){b.exports.addListener(window,a,c)},b.exports.removeWindowListener=function(a,b){window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b)},b.exports.getQueryString=function(a,b){var c=[];for(var d in a)c.push(d+"="+a[d]);var e=c.join("&");return b?encodeURIComponent(e):e},b.exports.ensureMessageListener=function(a){b.exports.removeWindowListener("message",a),b.exports.addWindowListener("message",a)},b.exports.extend=function(a){for(var b,c,d=1,e=arguments.length;d<e;d++){b=arguments[d];for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&null!==b[c]&&(a[c]=b[c])}return a},b.exports.decodeBase64=e,b.exports.sendAjaxRequest=function(a,b,c,d,e,f){try{var g=null;window.XMLHttpRequest?g=new XMLHttpRequest:window.ActiveXObject&&(g=new ActiveXObject("Microsoft.XMLHTTP")),g?(g.onreadystatechange=function(){d(g)},g.open(a,b,c),g.send()):"function"==typeof failFallback&&e()}catch(a){"function"==typeof errorHandler&&f()}},b.exports.createScript=function(a,b,c,d,e){if(!document.getElementById(c)){var f=document.createElement("script");return f.async=!0,f.setAttribute("crossorigin","anonymous"),f.src=a,f.type=b,f.id=c,f.onerror=d,f.onload=e,f}},b.exports.safeFunctionWrapper=function(a,b,c){return window.P&&"object"==typeof window.P&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",a):function(){try{a.apply(this,arguments)}catch(a){"function"==typeof b&&c&&b(c,a)}}}},{}],5:[function(a,b,c){function d(a,b,c){var d=0;return document.hidden?d:(d=a>0?c-a:b>0?Math.min(b,c):0,Math.min(d,b-a))}function e(){try{var a={};return a.t=window.screenY?window.screenY:window.screenTop,a.l=window.screenX?window.screenX:window.screenLeft,a.w=b.exports.windowWidth(),a.h=b.exports.windowHeight(),a.b=a.t+a.h,a.r=a.l+a.w,a}catch(a){return null}}function f(a){try{var c={},e=a.getBoundingClientRect();c.t=e.top,c.l=e.left,c.r=e.right,c.b=e.bottom,c.w=e.width||c.r-c.l,c.h=e.height||c.b-c.t,c.z=+window.getComputedStyle(a,null).zIndex;var f=b.exports.windowWidth(),g=b.exports.windowHeight(),h=d(e.top,e.bottom,g),i=d(e.left,e.right,f),j=h*i,k=c.h*Math.min(c.w,b.exports.windowWidth());return c.xiv=+Math.min(1,Math.max(0,i/c.w)).toFixed(2),c.yiv=+Math.min(1,Math.max(0,h/c.h)).toFixed(2),c.iv=+Math.min(1,Math.max(0,j/k)).toFixed(2),c}catch(a){return null}}function g(a){try{var c={},d=a.getBoundingClientRect();return c.t=d.top,c.l=d.left,c.r=b.exports.windowWidth()-d.right,c.b=b.exports.windowHeight()-d.bottom,c.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>b.exports.windowWidth()?1:0,c.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>b.exports.windowHeight()?1:0,c}catch(a){return null}}b.exports.PERCENT_VIEWABLE=.5,b.exports.DURATION_VIEWABLE=500,b.exports.findPercentInView=function(a){try{var c=a.getBoundingClientRect(),e=d(c.top,c.bottom,b.exports.windowHeight()),f=d(c.left,c.right,b.exports.windowWidth()),g=e*f,h=(c.bottom-c.top)*Math.min(c.right-c.left,b.exports.windowWidth());return Math.min(1,Math.max(0,g/h))}catch(a){return null}},b.exports.findDistanceInView=function(a){try{return a.getBoundingClientRect().top-b.exports.windowHeight()}catch(a){return null}},b.exports.getViewableInfo=function(a){if(a){var b={},c=e(),d=f(a),h=g(a);if(c&&d&&h)return b.geom={},b.geom.win=c,b.geom.self=d,b.geom.exp=h,b.payload={},b.payload.wh=c.h,b.payload.ww=c.w,b.payload.sx=window.scrollX,b.payload.sy=window.scrollY,b.payload.ah=d.h,b.payload.aw=d.w,b.payload.top=d.t,b.payload.left=d.l,b}},b.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}]},{},[1]);