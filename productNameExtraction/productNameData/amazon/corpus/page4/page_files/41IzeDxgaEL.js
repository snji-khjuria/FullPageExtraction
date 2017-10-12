(function(m,h,x){m.guardFatal(function(){(function(p,k,q){var h=function(f){var d={addToMultiMap:function(a,b,c){(a[b]||(a[b]=[])).push(c)},createTimestamp:function(){return(new Date).valueOf()},inheritsFrom:function(a,b,c){var e=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)};d.mixin(e,a,c||{});c=function(){this.constructor=e};c.prototype=a.prototype;e.prototype=new c;b&&d.mixin(e.prototype,b);e.prototype._super=a.prototype;return e},mixin:function(a){for(var b=
0;b<arguments.length;b++){var c=arguments[b];if(!c)return;for(var e in c)if(c.hasOwnProperty(e))try{a[e]=c[e]}catch(d){}}return a},noop:function(){},wrapWithScope:function(a,b){return function(){return(a||d.noop).apply(b,arguments)}}},g=function(a){a.el?this._setupForEl(a.el):a.id?this._setupForId(a.id):a.tagName&&this._setupForTagName(a.tagName);this._setupEvents(a.events,a.mouseEvents);this.model=a.model;this.config=a;this.initialize()};g.prototype=d.mixin({el:null,$el:null,id:null,_setupForEl:function(a){this.el=
a;this.id=(this.$el=f(a)).attr("id")},_setupForId:function(a){this._setupForEl(p.getElementById(a))},_setupForTagName:function(a){a=this.$el=f("<"+a+"></"+a+">");this.el=a.length?a[0]:x},_setupEvents:function(a,b){a=f.extend({},this.events(),a);b=f.extend({},this.mouseEvents(),b);f.each(a,this.bind);if(this.$el){var c=this;f.each(b,function(a,b){c.$el.bind(a,function(){b.apply(c,arguments)})})}},initialize:d.noop,events:d.noop,mouseEvents:d.noop,forwardDomEvent:function(a){this.trigger(a.type,this.model)}},
{bind:function(a,b,c){if(!a||!b)return this;this._events=this._events||{};d.addToMultiMap(this._events,a,{type:a,callback:b,scope:c||this});return this},trigger:function(a,b){if(!this._events)return this;b=b||{};b.timestamp=b.timestamp||d.createTimestamp();f.each(this._events[a]||[],function(a,e){e.callback.call(e.scope,e.type,b)});return this}});var l=k.Airy=k.Airy||{},h=l.Lightbox=l.Lightbox||{};h.bind=function(a){var b=a.lightboxView||h.createView(a);f.each(a.bindings||{},d.wrapWithScope(b.bind,
b));var c=a.trigger||{};(new w({id:c.id})).bind("click",function(){b.trigger("triggerclicked",c)});return b};h.createView=function(a){var b=a.lightboxView||new m({el:a.el,model:a.model,tagName:"div"});f.each(a.bindings||{},d.wrapWithScope(b.bind,b));return b};var m=d.inheritsFrom(g,{isRendered:!1,isHidden:!0,initialize:function(){this.$el.hide();this.bind("triggerclicked",this.triggerClicked);this._views={}},triggerClicked:function(a,b){this.trigger(this.isRendered?"containerfound":"nocontainerfound")},
hide:function(){this.isHidden||(this.isHidden=!0,this.trigger("beforehide"),this.$el.hide(),this.trigger("hidden"))},show:function(){this.isHidden&&(this.isHidden=!1,this.trigger("beforeshow"),this.$el.show(),this.resize(),this.trigger("shown"))},resize:function(){this._views.modal&&this._views.modal.resize()},setHeaderText:function(a){this._views.header.setHeaderText(a);this.trigger("headertextchanged")},setContainerHtml:function(a){this.isRendered||(a=this.$el.html(a),this.render(),a.appendTo("body"),
this.trigger("containerupdated"))},render:function(){var a=this.$el,b=a.find("#"+this.model.pageBlanketId),b=this._views.pageBlanket=(new y({el:b[0]})).bind("close",this.hide,this),c=a.find("#"+this.model.modalId),c=this._views.modal=new z({el:c[0],model:this.model});this._views.window=(new A({el:k})).bind("resize",b.resize,b).bind("resize",c.resize,c);this._views.document=(new B({el:p})).bind("escapekeyup",this.hide,this);b=a.find(".airy-header");this._views.header=(new C({el:b[0]})).bind("close",
this.hide,this);a=a.find(".airy-modal-content");this._views.modalContent=new g({el:a[0]});this.isRendered=!0;return this},setContentHtml:function(a){this._views.modalContent&&(this._views.modalContent.$el.html(a),this.trigger("contentupdated"))}}),y=d.inheritsFrom(g,{initialize:function(){this.$document=f(p)},mouseEvents:function(){return{click:this.close}},close:function(){this.trigger("close")},resize:function(){this._isIE7AndBelow()},_isIE7AndBelow:function(){return!!p.all&&!k.atob&&!p.addEventListener&&
!p.querySelector}}),C=d.inheritsFrom(g,{initialize:function(){this.$headerText=this.$el.find(".airy-header-text");var a=this.$el.find(".airy-close-button");a.length&&(new w({el:a[0]})).bind("click",this.close,this)},close:function(){this.trigger("close")},setHeaderText:function(a){this.$headerText.html(a)}}),z=d.inheritsFrom(g,{initialize:function(){this.$window=f(k)},mouseEvents:function(){return{click:this.click}},click:function(a){a.stopPropagation()},resize:function(){var a=this.$el.width(),b=
this.$el.height(),c=q.round(a/this.$window.width()*100),e=this.$window.height()*this.model.targetHeightPercent/100,e=b-e;0>=e&&c>=this.model.targetWidthPercent||this.$el.width(q.min((a-a/b*e)/a*c,this.model.targetWidthPercent)+"%")}}),A=d.inheritsFrom(g,{mouseEvents:function(){return{resize:this.forwardDomEvent}}}),B=d.inheritsFrom(g,{mouseEvents:function(){return{keyup:this.keyUp}},keyUp:function(a){27===(a.keyCode||a.which)&&this.trigger("escapekeyup")}}),w=d.inheritsFrom(g,{mouseEvents:function(){return{click:this.forwardDomEvent}}}),
n=k.amznJQ;n&&n.declareAvailable("AiryLightbox");(n=k.P)&&!h.isRegisteredWithAui&&n.register("AiryLightbox",function(){h.isRegisteredWithAui=!0;return h});l.ForesterPublisher=function(a){this._metrics={};this._url=a.url;this._queryString=this._constructQueryString(a.metadataParams)};l.ForesterPublisher.prototype={UNIT_COUNT:"",publish:function(){var a=this._build();if(!a)return this;(new Image).src=a;return this},_build:function(){var a=[this._url];f.each(this._metrics,function(b,c){b=b?":u="+b:"";
f.each(c,function(c,d){a.push(c+"@v="+d+b)})});if(1===a.length)return null;this._clearMetrics();return a.join("/")+"?"+this._queryString},addCountMetric:function(a,b){null===b&&(b=1);this._addMetricToMap(a,b,this.UNIT_COUNT);return this},addPerformanceMetric:function(a,b,c){this._addMetricToMap(a,b,c);return this},_addMetricToMap:function(a,b,c){(this._metrics[c]=this._metrics[c]||{})[a]=b},_clearMetrics:function(){this._metrics={};return this},_constructQueryString:function(a){var b=[];f.each(a,
function(a,e){b.push(encodeURIComponent(a)+"="+encodeURIComponent(e))});return b.join("&")}};l.ItemDetailsMediaFetcher=function(a){this._endpoint=a.endpoint;this._baseQueryParameters=a.baseQueryParameters||{};a.sections&&a.sections.length&&(this._sections=a.sections)};l.ItemDetailsMediaFetcher.prototype={fetch:function(a,b,c){if(a&&a.length){a=this._constructQueryString(a);var e=this;f.ajax({url:this._endpoint+"?"+a}).done(function(a){if((a=a.items)&&a.length){var d={};f.each(a,function(a,b){d[b.id]=
e._getMediaContextFromItem(b)});b(d)}else c()}).fail(c)}else c()},_getMediaContextFromItem:function(a){var b=a.productData,c=this._extractSlateUrl(b);return{comScore:this._extractComScoreReporter(a),contentId:a.id,contentMinAge:this._extractContentMinAge(b),mediaSourceInfo:this._extractMediaSourceInfo(a),slateImages:{preloadSlate:c,postMediaSlate:c}}},_extractComScoreReporter:function(a){a=a.externalMetricsReportersSection;if(!a)return null;if((a=a.reporters)&&a.length)return a.filter(this._comScoreReporterFilter).shift()},
_comScoreReporterFilter:function(a){return"ComscoreReporter"===a.name},_extractContentMinAge:function(a){return null===a.minAgeToViewContent?null:parseInt(a.minAgeToViewContent,10)},_extractSlateUrl:function(a){return(a=a.image)?a.imageUrl:null},_extractMediaSourceInfo:function(a){if(a=a.mediaInfoSection)if(a=a.mediaInfoList){var b=[];f.each(a,function(a,e){b.push({mimeType:e.mimeType,url:e.streamingUrl})});return b}},_constructQueryString:function(a){var b=[];f.each(this._baseQueryParameters,function(a,
e){b.push(encodeURIComponent(a)+"="+encodeURIComponent(e))});f.each(a,function(a,e){b.push("asin="+encodeURIComponent(e))});this._sections&&(a=this._sections.join(","),b.push("sections="+encodeURIComponent(a)));return b.join("&")}};var u=l.VideoSwitcher=l.VideoSwitcher||d.inheritsFrom(g,{initialize:function(){this._isContinuousPlayEnabled=!1;this._metricsPublisher=this.config.metricsPublisher;var a=this._stage=new r({id:this.config.airyStageId,mediaContextFetcher:this.config.mediaContextFetcher,model:this.config.model});
this._setupStageMetrics(a);this._shoveler=(new (this.config.useAui?D:E)({alignmentOffsetPx:this.config.alignmentOffsetPx,el:this.config.shovelerEl,id:this.config.shovelerId,items:this._generateItemList(this.config.model.loadMediaContexts),nextButtonSelector:this.config.nextButtonSelector,backButtonSelector:this.config.backButtonSelector})).bind("selected",a.load,a).bind("selected",this.trigger,this).bind("selectedasync",a.loadAsync,a).bind("selectedasync",function(a,c){this.trigger("selected",c)},
this).bind("prepare",a.prepare,a)},_setupStageMetrics:function(a){if(this._metricsPublisher){var b=new r.MetricsReporter({metricsPublisher:this._metricsPublisher});a.bind("updatingcontext",b.handleUpdatingContext,b).bind("contextupdated",b.handleContextUpdated,b).bind("contextupdatefailed",b.handleContextUpdateFailed,b)}},renderShoveler:function(){this._shoveler.render();return this},enableContinuousPlay:function(){if(!this._isContinuousPlayEnabled)return(new t({model:this.config.model})).bind("selectnextvideo",
this._shoveler.selectNext,this._shoveler).bind("preparenextvideo",this._shoveler.prepareNext,this._shoveler).enableContinuousPlay(),this._setupContinuousPlayMetrics(),this._isContinuousPlayEnabled=!0,this},_setupContinuousPlayMetrics:function(){if(this._metricsPublisher){var a=new t.MetricsReporter({metricsPublisher:this._metricsPublisher});(new F({model:this.config.model})).bind("videoended",a.handleVideoEnded,a).bind("videocanplay",a.handleCanPlay,a).setUp();this._shoveler.bind("selectmanually",
a.clearMetrics,a)}},isContinuousPlayEnabled:function(){return this._isContinuousPlayEnabled},select:function(a,b,c,e){if(null===a)return this;this._shoveler.select(a,b,c,e);return this},getSelectedId:function(){return this._shoveler.getSelectedId()},show:function(){this._stage.show();return this},hide:function(){this._stage.hide();return this},_generateItemList:function(a){var b=[];f.each(a,function(a,e){b.push(new G({id:a,model:e}))});return b}}),F=d.inheritsFrom(g,{setUp:function(){var a=this.model.airyInstance;
a&&(a.bind("ended",this.triggerEnded,this),a.bind("canplay",this.triggerCanPlay,this))},triggerEnded:function(){this._triggerVideoEvent("videoended")},triggerCanPlay:function(){this._triggerVideoEvent("videocanplay")},_triggerVideoEvent:function(a){this.trigger(a,{timestamp:d.createTimestamp()})}}),t=d.inheritsFrom(g,{enableContinuousPlay:function(){var a=this.model.airyInstance;if(a)return a.addCuePoint({callback:this.prepareNextVideo,scope:this,type:"percent",values:"50%"}),a.bind("ended",this.selectNextVideo,
this),this},prepareNextVideo:function(){this.trigger("preparenextvideo")},selectNextVideo:function(){this.trigger("selectnextvideo")},endPlaylist:function(){var a=this.model.airyInstance;if(a)return a.enterNormalScreen(),this}});t.MetricsReporter=d.inheritsFrom(g,{CONTINUOUS_PLAY_END_TO_CAN_PLAY_DURATION:"qos.videoSwitcher.:continuousPlayEndToCanPlayDuration",initialize:function(){this._metricsPublisher=this.config.metricsPublisher;this._reporter=new v(this.config.metricsPublisher,this.CONTINUOUS_PLAY_END_TO_CAN_PLAY_DURATION)},
handleVideoEnded:function(a,b){this._reporter.handleStartEvent(a,b)},handleCanPlay:function(a,b){this._reporter.handleEndEvent(a,b)},clearMetrics:function(){this._reporter.clearMetrics()}});var r=d.inheritsFrom(g,{load:function(a,b){return this._load(b,!1)},loadAsync:function(a,b){return this._load(b,!0)},_load:function(a,b){return this.model.airyInstance?!a.mediaSourceInfo&&this.config.mediaContextFetcher?(this._fetchUpdatedContext(a,function(a){this._loadMedia(a,!0)}),this):this._loadMedia(a,b):
this},prepare:function(a,b){if(b.mediaSourceInfo||!this.config.mediaContextFetcher)return this;this._fetchUpdatedContext(b,function(a){this.trigger("prepared",a)});return this},_fetchUpdatedContext:function(a,b){var c=this,e=a.contentId;this.trigger("updatingcontext");this.config.mediaContextFetcher.fetch([e],function(d){f.extend(a,d[e]);b.call(c,a);c.trigger("contextupdated")},function(){c.trigger("contextupdatefailed")});return this},_loadMedia:function(a,b){var c=this.model.airyInstance;if(!c)return this;
this.model.curLoadMediaContext=a;c.loadMedia(a);c.play({eventTimestamp:a.timestamp,isAsync:b});return this},show:function(){var a=this.model.airyInstance;if(!a)return this;a.loadMedia(this.model.curLoadMediaContext);return this},hide:function(){var a=this.model.airyInstance;if(!a)return this;a.pause();return this}});r.MetricsReporter=d.inheritsFrom(g,{CONTEXT_UPDATE_DURATION:"qos.videoSwitcher.contextUpdate.:requestDuration",CONTEXT_UPDATE_FAILED:"error.videoSwitcher.contextUpdate.:loadCount",initialize:function(){this._metricsPublisher=
this.config.metricsPublisher;this._reporter=new v(this.config.metricsPublisher,this.CONTEXT_UPDATE_DURATION)},handleUpdatingContext:function(a,b){this._reporter.handleStartEvent(a,b)},handleContextUpdated:function(a,b){this._reporter.handleEndEvent(a,b)},handleContextUpdateFailed:function(){this._metricsPublisher.addCountMetric(this.CONTEXT_UPDATE_FAILED).publish();this.clearMetrics()},clearMetrics:function(){this._reporter.clearMetrics()}});var v=function(a,b,c){this._publisher=a;this._metricName=
b;this._metricUnit=c||"ms"};v.prototype={initialize:function(){this._timestamp=null},handleStartEvent:function(a,b){this._timestamp=b.timestamp},handleEndEvent:function(a,b){null!==this._timestamp&&(this._publisher.addPerformanceMetric(this._metricName,b.timestamp-this._timestamp,this._metricUnit).publish(),this.clearMetrics())},clearMetrics:function(){this._timestamp=null}};var l=d.inheritsFrom(g,{_activeItem:null,initialize:function(){f.each(this.config.items,d.wrapWithScope(this._setupItemCallback,
this))},getSelectedId:function(){return this._activeItem?this._activeItem.getContentId():null},selectNext:function(){var a=this._getNextItem();if(!a)return this.trigger("nextnotavailable"),this;this._selectItem(a);return this},prepareNext:function(){var a=this._getNextItem();if(!a)return this;a.prepare();return this},_getNextItem:function(){var a=this._activeItem.getIndex(),b=this.config.items;return a>=b.length?null:b[a+1]},select:function(a,b,c,e){for(var d=0;d<this.config.items.length;d++){var f=
this.config.items[d];if(f.getContentId()===a){f.isActive||this.trigger("selectmanually",a);this._selectItem(f,b,c,e);break}}return this},_selectItem:function(a,b,c,e){this.goToPageWithItem(a,b);a.select(c,e);return this},goToPageWithItem:d.noop,_setupItemCallback:function(a,b){var c=this._createSelectedCallback(b);b.bind("selected",c,this).bind("selected",this.trigger,this).bind("selectedasync",c,this).bind("selectedasync",this.trigger,this).bind("prepare",this.trigger,this);b.isActive&&(this._activeItem=
b)},_createSelectedCallback:function(a){return function(){this._selected(a)}},_selected:function(a){this._activeItem&&this._activeItem.unselect();this._activeItem=a},render:d.noop}),E=d.inheritsFrom(l,{_shoveler:null,goToPageWithItem:function(a){this._shoveler&&(a=a.getIndex(),a=q.floor(a/this._shoveler.numCellsPerPage),a>=this._shoveler.getNumPages()||this._shoveler.gotoPage(a))},render:function(){this._shoveler=this.$el.shoveler(d.noop,this.config.items.length,{cellChangeSpeedInMs:30,horizPadding:10,
preloadNextPage:!0,prevButtonSelector:this.config.backButtonSelector,nextButtonSelector:this.config.nextButtonSelector});return this}}),D=d.inheritsFrom(l,{ANIMATION_DURATION:1E3,goToPageWithItem:function(a,b){var c=a.$el.offset().left,e=a.$el.width(),d=this.$el.scrollLeft(),f=this._getViewportWidth(),g=this.config.alignmentOffsetPx||0;!b&&!this._isWithinRangeForAutoscroll(c,e,f)||this._isAlreadyCompletelyVisible(c,e,f)||this.$el.animate({scrollLeft:c>f-e?d+(c-f+e+g):d+(c-g)},q.abs(this.ANIMATION_DURATION))},
_isWithinRangeForAutoscroll:function(a,b,c){return 0>a?a>=-b:a<=c+b},_isAlreadyCompletelyVisible:function(a,b,c){return 0<=a&&a<=c-b},_getViewportWidth:function(){return q.max(p.documentElement.clientWidth,k.innerWidth||0)}}),G=d.inheritsFrom(g,{initialize:function(){this.isActive=this.$el.hasClass("airy-selected")},getContentId:function(){return this.model.contentId},getIndex:function(){return this.model.index},mouseEvents:function(){return{click:this.click}},click:function(){this.select(!1,(new Date).valueOf())},
select:function(a,b){if(!this.isActive){var c=this.model;null!==b&&(c.timestamp=b);this.trigger(a?"selectedasync":"selected",c);return this._toggle()}},prepare:function(){this.trigger("prepare",this.model);return this},unselect:function(){if(this.isActive)return this._toggle()},_toggle:function(){this.$el.toggleClass("airy-selected");this.isActive=!this.isActive;return this}});(n=k.amznJQ)&&n.declareAvailable("AiryVideoSwitcher");(n=k.P)&&!u.isRegisteredWithAui&&n.register("AiryVideoSwitcher",function(){u.isRegisteredWithAui=
!0;return u})};k.P?m.when("jQuery").execute(h):k.jQuery&&h(jQuery)})(document,h,Math)})()})(function(){var m=window.AmazonUIPageJS||window.P,h=m._namespace||m.attributeErrors;return h?h("VideoAdsAiryPlayerAssets"):m}(),window);