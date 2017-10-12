(function(m,p,x){m.execute(function(){m.when("A","page-refresh-state","web-ajax-utility","alt-page-refresh-measurement").register("page-refresh-handler",function(e,l,k,f){var d={},c=e.$,g=x,b=function(a,b){var d=this;d.clientId=a;d.persistentParams={};d.pageRefreshUrlParams="";d.deviceType="";d.doPageRefresh=function(g,f,l,m){d.persistentParams=c.extend(!0,d.persistentParams,f.Persistent);var p={};c.extend(!0,p,d.persistentParams,f["Non-Persistent"]);f=b;var z=0<=e.contains(f,"?");f=f+(z?"&":"?")+
((g?"asin="+g:"")+(d.pageRefreshUrlParams?d.pageRefreshUrlParams:""));for(var u in p)null!=p[u]&&(g=p[u],z=f.slice(-1),f+="?"===z||"&"===z?"":"&",f+=u+"="+g);k.getInstance(a,f,l,m).getContent()};d.addParams=function(a){d.persistentParams=c.extend(!0,d.persistentParams,a);return!0};d.removeParams=function(a){e.each(a,function(a,b){delete d.persistentParams[a]});return!0};d.createCustomParamsMap=function(a,b){var d={Persistent:{},"Non-Persistent":{}};c.each(a,function(a,b){d.Persistent[a]=b});c.each(b,
function(a,b){d["Non-Persistent"][a]=b});return d};d.startMeasurement=function(a,b,c,d){g&&g.start(a,b,c,d)};d.stampImageLoad=function(a){g&&g.stampImageLoad(a)};d.stampFeature=function(a,b){g&&g.stampFeature(a,b)};(function(){var a=l.pageRefreshData;d.pageRefreshUrlParams=a.pageRefreshUrlParams;d.deviceType=a.deviceType})()};return{getHandlerInstance:function(a,e,h){(null==a||""===a)&&p.ueLogError&&p.ueLogError({message:"Invalid ClientId"},{logLevel:"FATAL",attribution:"PageRefreshAPI",message:"Invalid ClientId passed to getHandlerInstance of dpRefreshHandler"});
d[a]||(d[a]=new b(a,e));g||(e=h.config,g=new f(c,e.atf.marker,e.cf.marker),g.init(h.storeID,h.productGroupID));return d[a]}}});m.when("A","page-refresh-handler").register("dp-refresh-handler",function(e,l){function k(f,d,c){this.featureTriggeringRefresh=f.featureName;this.deviceType=(this.deviceTypeStateData=e.state("detail-page-device-type"))&&this.deviceTypeStateData.deviceType?this.deviceTypeStateData.deviceType:"web";this.pageRefreshUrl=d&&d.pageRefreshUrl?d.pageRefreshUrl:"/gp/twister/ajaxv2";
this.clientId="PageRefresh_"+this.deviceType+"_Client";this.DPRefreshHandler=l.getHandlerInstance(this.clientId,this.pageRefreshUrl,c)}k.prototype={doPageRefresh:function(e,d,c,g){try{this.DPRefreshHandler.doPageRefresh(e,d,c,g)}catch(b){p.ueLogError&&p.ueLogError(b,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the doPageRefresh method triggered by - "+this.featureTriggeringRefresh})}},createCustomParamsMap:function(e,d){var c={};try{c=this.DPRefreshHandler.createCustomParamsMap(e,
d)}catch(g){p.ueLogError&&p.ueLogError(g,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the createCustomParamsMap method triggered by - "+this.featureTriggeringRefresh})}return c},addParams:function(e){return e&&"object"==typeof e?this.DPRefreshHandler.addParams(e):!1},removeParams:function(e){return e&&"object"==typeof e?this.DPRefreshHandler.removeParams(e):!1},startMeasurement:function(e,d,c,g){try{this.DPRefreshHandler.startMeasurement(e,d,c,g)}catch(b){p.ueLogError&&
p.ueLogError(b,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampImageLoad:function(e){try{this.DPRefreshHandler.stampImageLoad(e)}catch(d){p.ueLogError&&p.ueLogError(d,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampFeature:function(e,d){try{this.DPRefreshHandler.stampFeature(e,
d)}catch(c){p.ueLogError&&p.ueLogError(c,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}}};return k});m.when("A","jQuery").register("alt-page-refresh-ajax-scope",function(e,l){return function(e,f,d){this.scopeName=f;this.url=d;ues("t0",f,p.newTwisterInteractionStartTime);ues("ctb",f,"1");this.signalMarker=function(c){!this.markers[c]||0>=this.markers[c].conditions||0===--this.markers[c].conditions&&
"function"==typeof this.markers[c].handler&&this.markers[c].handler()};this.addlongPoleTag=function(c,b){c=c.toLowerCase();this.markers[c]&&0==this.markers[c].conditions&&0==this.markers[c].conditions&&p.ue&&"function"===typeof ue.tag&&ue.tag(b)};this.postData=function(){var c=this.scopeName;e.ajax({url:this.url,dataType:"text",timeout:4E4,error:function(){},success:function(b,a,d){ues("id",c,b);uex("ld",c)}})};var c=this;this.markers={image:{conditions:1,handler:function(){uet("ne",f);c.signalMarker("af")}},
af:{conditions:Twister.atfMarkerCount?Twister.atfMarkerCount:2,handler:function(){uet("af",f);uet("cf",f);c.signalMarker("cf")}},cf:{conditions:Twister.cfMarkerCount?Twister.cfMarkerCount:2,handler:function(){uet("cf",f);c.postData()}}}}});m.when("A","jQuery","alt-page-refresh-ajax-scope").register("alt-page-refresh-measurement",function(e,l,k){return function(e,d,c){this.atfMarker=d;this.cfMarker=c;this.scopeCount={};this.ajaxScopes={};this.url="";this.init=function(c,b){this.url="/gp/twister/dynamic-update/ajax-measurement.html/?s="+
c+"&pgid="+b+"&deviceType="+Twister.deviceType;Twister.isInstaTwisterEnabled&&(this.url+="&ptd="+Twister.productTypeName)};this.start=function(c,b,a,d){if(p.ue){this.scopeCount[c]||(this.scopeCount[c]=0);var h=c+(this.scopeCount[c]+1);this.scopeCount[c]++;var l=this.url;b&&(l+="&dimensionType="+b);"undefined"!==typeof a&&(l+="&dimensionCount="+a);"undefined"!==typeof d&&(l+="&dimensionsDisplayType="+d);this.ajaxScopes[c]=new k(e,h,l)}};this.stampImageLoad=function(c){this.ajaxScopes[c]&&(this.ajaxScopes[c].signalMarker("image"),
Twister.cfImageLongPollTag&&this.ajaxScopes[c].addlongPoleTag("cf",Twister.cfImageLongPollTag))};this.stampFeature=function(c,b){this.ajaxScopes[b]&&(c===this.atfMarker&&this.ajaxScopes[b].signalMarker("af"),c===this.cfMarker&&(this.ajaxScopes[b].signalMarker("cf"),Twister.cfHtmlLongPollTag&&this.ajaxScopes[b].addlongPoleTag("cf",Twister.cfHtmlLongPollTag)))};this.stampCustomMetrics=function(c,b){this.ajaxScopes[b]&&uet(c,this.ajaxScopes[b].scopeName)}}});m.when("A","ready").register("page-refresh-state",
function(e){var l=e.state("page-refresh-data");e=e.state("detail-page-device-type");var k={};"undefined"!==typeof l&&(k.pageRefreshUrlParams=l.pageRefreshUrlParams);"undefined"!==typeof e&&(k.deviceType=e.deviceType);return{pageRefreshData:k}});m.when("A","jQuery","dp-js-logger").register("web-ajax-utility",function(e,l,k){function f(c,d,b,a){this.scope=c;this.url=d;this.options=b;this.status=0;this.selected=!1;this.error=this.successData=this.xhr=this._status=x;this.chunks=[];this.doNotAbort=a||
!1}var d=new k("WebAjaxUtility");f._objects={};f.prototype._callback=function(){var c=arguments[0],d=Array.prototype.slice.call(arguments,1);"function"===typeof c&&c.apply(self,d)};f.prototype._canAbort=function(){return!this.doNotAbort&&1===this.status};f.prototype._isAborted=function(){return 3===this.status};f.prototype._getUrl=function(){return this.url};f.prototype._abort=function(){if(1===this.status)try{this.ajaxRequestRefence.abort(),this.status=3}catch(c){d.logFatal(c,{message:" Could not abort ajax request."})}};
f.prototype._flushChunkData=function(){var c=this;c.chunks.length&&l.map(c.chunks,function(d){c._callback(c.options.chunk,d)})};f.prototype._request=function(){var c=this;c.ajaxRequestRefence=e.get(c.url,{params:c.options.params,success:function(d,b,a){c.status=4;c.successData=d;c._status=b;c.xhr=a;c.selected&&c._callback(c.options.success,d,b,a)},error:function(d,b,a){c.status=2;c.xhr=d;c._status=b;c.error=a;c.selected&&c._callback(c.options.error,d,b,a)},abort:function(d){c.status=3;c.xhr=d;c.selected&&
c._callback(c.options.abort,d)},chunk:function(d){d&&(c.chunks.push(d),c.selected&&c._callback(c.options.chunk,d))},timeout:c.options.timeout||4E4})};f.prototype.getContent=function(){f._abortRequestsExcept(this);this.selected=!0;0===this.status?(this.status=1,this._request()):1===this.status?this._flushChunkData():4===this.status&&(this._flushChunkData(),this._callback(this.options.success,this.successData,this._status,this.xhr),e.trigger("a:pageUpdate"))};f._abortRequestsExcept=function(c){l.each(f._objects[c.scope],
function(d,b){b._canAbort()&&d!==c._getUrl()&&b._abort()})};f.getInstance=function(c,d,b,a){if(!c||!d||"object"!==typeof b)throw"Incorrect parameter passed.";f._objects[c]=f._objects[c]||{};var e=f._objects[c][d];e&&e._isAborted()&&(delete f._objects[c][d],e=x);e||(f._objects[c][d]=new f(c,d,b,a,this));return f._objects[c][d]};return f})})})(function(){var m=window.AmazonUIPageJS||window.P,p=m._namespace||m.attributeErrors;return p?p("PageRefreshAsset"):m}(),window);