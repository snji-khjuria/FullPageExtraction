(function(f){var k=window.AmazonUIPageJS||window.P,p=k._namespace||k.attributeErrors,b=p?p("DetailPageEbooksAssets"):k;b.guardFatal?b.guardFatal(f)(b,window):b.execute(function(){f(b,window)})})(function(f,k,p){f.when("A","jQuery","ebooksImageBlockATF","cf").execute(function(b,a,c){function d(a){"undefined"!=typeof SitbReader&&SitbReader.LightboxActions.openReader(c.litbData.litbReftag)}function f(){var a=y.offset(),b=t.offset(),e=b.top-a.top,a=b.left-a.left,b=t.outerWidth(),d=t.outerHeight(),l=y.outerHeight()-
(y.outerHeight()-t.outerHeight())/2;z.css("top",e+A).css("left",a+b-z.width());q.css("position","absolute").css("top",e).css("left",a).width(b).height(d);t.css("position","absolute").css("top","0").css("left","0");m.height(l);(k.innerWidth||document.body.offsetWidth)<c.windowWidthThreshold&&h()}function h(){var a=k.innerWidth||document.body.offsetWidth;if(!(0>=a))if(a>c.windowWidthThreshold){var a=c.configWidths[1],b=a/c.holderRatio,e=c.frontImageWidth,d=c.frontImageHeight;n(a,b,e,d)}else a<c.windowWidthThreshold&&
(a=c.configWidths[0],b=a/c.holderRatio,c.frontImageAspectRatio>c.holderRatio?(e=a,d=e/c.frontImageAspectRatio):(d=b,e=d*c.frontImageAspectRatio),n(a,b,e,d))}function n(b,e,d,g){if(0<b&&0<e&&0<d&&0<g){w.length&&v.length&&(w.css("margin-left",b+c.centerColMargin).removeClass("centerColumn"),v.width(b));var h=e+c.containerMargin;l.width(b).height(h);t.width(d).height(g);q.width(d).height(g);m.height(e-(e-t.outerHeight())/2);b=(m.outerWidth()-t.outerWidth())/2;e=m.outerHeight()-t.outerHeight();q.css("top",
e).css("left",b);z.css("top",e+A).css("left",b+d-z.width());a(this).trigger("imageResize")}}var l=a("#ebooksImageBlock"),g=a("#ebooksImgBlkFront"),e=a("#ebooksImgBlockInlineVideo"),r=a("#ebooksImgBlockInlineVideoSrc");if(l.length){var y=l.find("#ebooks-img-wrapper"),m=l.find("#ebooksImageBlockContainer"),q=l.find("#ebooks-img-canvas"),t=q.find(".frontImage"),v=a("#leftCol"),w=a("#centerCol"),x=a("#ebooksImageBlockOuter"),z=x.find("#ebooksSitbLogo"),x=x.find("#ebooksSitbLogoImg"),A=parseInt(l.css("margin-top"));
f();q.addClass("image-2d");c&&c.litbData&&c.litbData.hasLitb&&c.litbData.litbReftag&&(x.removeClass("a-hidden"),x.click(d),q.click(d),q.addClass("clickableImage"));a(k).resize(h)}else throw Error("Element with id imageBlock is missing");b.on("a:image:load",function(a){e.length&&r.length&&c.hasCoverImageInlineVideo&&(g.hide(),e.show())});b.loadDynamicImage(g)});f.when("A","jQuery","imageThumbNails","ready").execute(function(b,a,c){function d(){0<e.scrollLeft()&&(A=e.scrollLeft(),A>p?D=e.scrollLeft()-
p:(D=0,setTimeout(function(){l.removeClass("enabled")},750)),h(),g.addClass("enabled"))}function f(){e.scrollLeft()+e.width()<z&&(B=z+x-(e.scrollLeft()+e.width()),B>p?D=e.scrollLeft()+p:(D=e.scrollLeft()+B,setTimeout(function(){g.removeClass("enabled")},750)),h(),l.addClass("enabled"))}function h(){e.animate({scrollLeft:D},750)}function n(){var a=k.navigator.userAgent,c=a.indexOf("MSIE "),b=a.indexOf("Trident/"),a=a.indexOf("Edge/");return 0<c||0<b||0<a}var l=a("#thumbs-left"),g=a("#thumbs-right"),
e=a(".thumbnail-container .a-carousel-viewport");b=a(".thumbnail-container .a-carousel");var r=a("#thumbImage-1"),y=a("#thumbImage-6"),m=a("#ebooksImageBlock"),q=a("#ebooksImgBlkFront"),t=a("#ebooksImgBlockInlineVideo"),v=a("#ebooksImgBlockInlineVideoSrc"),w=a(".thumbnail-container .a-carousel .a-carousel-card img"),x=6*c.thumbInlineVideos.length,z=y.width()*c.thumbInlineVideos.length;if(b.length&&e.length&&q.length&&t.length&&v.length&&m.length){var A=0,B=0,p=e.width(),D=0,C=m.find("#ebooks-img-canvas"),
G=m.find("#ebooks-img-wrapper");C.css("left","0");C.width(G.width());a(k).resize(function(){C.css("left","0");C.width(G.width())});r.addClass("selected-thumb");e.bind("mouseenter",function(){l.show(500);g.show(500);0<e.scrollLeft()&&l.addClass("enabled");e.scrollLeft()+e.width()<z&&g.addClass("enabled")});w.mouseover(function(b){var e=a(".thumbnail-container .a-carousel-card .selected-thumb"),d=a("#"+b.target.id);if(e.length&&e[0]===b.target)return!1;b=b.target.parentElement.attributes.getNamedItem("aria-posinset");
null!==b&&(b=parseInt(b.value),e.removeClass("selected-thumb"),d.addClass("selected-thumb"),q.attr("src",c.thumbImages[b-1]),t.attr("poster",c.thumbImages[b-1]),t.hide(),q.show(),v.attr("src",c.thumbInlineVideos[b-1]),t.load(),n()?setTimeout(function(){q.hide();t.show()},1E3):(q.hide(),t.show()))});l.bind("click",function(a){a.preventDefault();d()});g.bind("click",function(a){a.preventDefault();f()})}});f.when("A","jQuery","Airy","ebookVideoReady","ready").execute(function(b,a,c,d){function f(){g=
c.embed({bindings:{play:function(){d.openVideoInFullScreen&&g.enterFullScreen()}},desiredMode:"html",parentId:"ebook-airy-player-container",streamingUrls:[d.videoSource],swfUrl:d.swfUrl})}function h(){try{g.detach()}catch(a){throw Error(a.message);}g={};setTimeout(function(){f()},100)}function n(c){a.ajax("/gp/digital/fiona/ajax/reftagCall.html/ref="+(d.refTag+c),{method:"get",cache:!1});document.body.style.overflow="hidden";e.removeClass("ebook-video-overlay-hidden");g.play();setTimeout(function(){e.addClass("ebook-overlay-on");
r.addClass("ebook-overlay-on");y.addClass("ebook-overlay-on")},10)}function l(){try{g.pause()}catch(a){throw Error(a.message);}document.body.style.overflow="visible";e.removeClass("ebook-overlay-on");r.removeClass("ebook-overlay-on");y.removeClass("ebook-overlay-on");setTimeout(function(){e.addClass("ebook-video-overlay-hidden");h()},150)}var g,e=a("#ebook-video-overlay"),r=a("#ebook-lightbox"),y=a("#ebook-lightbox-video-close");b=a("#ebooksImageBlock");var m=a("#ebooks-main-image-container");if(!e.length||
"undefined"===typeof d)throw Error("Video player not found");f();a("#ebook-video-play").bind("click",function(a){a.preventDefault();n("_text")});y.bind("click",function(a){a.preventDefault();l()});a("#ebook-lightbox-dark").bind("click",function(){l()});if(b.length){var q=/Edge\/|Trident\/|MSIE /.test(k.navigator.userAgent);d.showVideoPreviewTextOnCoverImageHover&&m.length&&!q&&(m.addClass("ebookPreviewVideo"),m=document.createElement("div"),m.innerHTML=d.watchVideoText,m.setAttribute("class","ebookPreviewVideoText"),
document.getElementById("ebooks-main-image-container").appendChild(m),b.bind("click",function(a){a.preventDefault();n("_img")}))}});f.when("A","jQuery","ebooksBackgroundImageLoad","cf").execute(function(b,a,c){function d(a,c){var b=document.getElementById(a);if("undefined"!==typeof b&&null!==b){var d=b.contentDocument;"undefined"!==typeof d&&null!==d&&(b=d.body,d=d.getElementById(c),"undefined"!==typeof b&&"undefined"!=typeof d&&null!==b&&null!==d&&(b.style.background="transparent",d.allowTransparency=
"true"))}}var f=a("#a-page");f.css("background-size","100%");var h=a(".a-expander-partial-collapse-header"),n=a("#dbs-nav-section");c.displayBackgroundImage?(f.css("background-repeat","no-repeat"),d("bookDesc_iframe","iframeContent"),a(function(){d("product-description-iframe","pdIframeContent");f.css("background-image","url("+c.backgroundImageUrl+")")})):c.displayBackgroundPattern&&(f.css("background-repeat","repeat-y"),f.css("background-image","url("+c.backgroundImageUrl+")"),h.length&&(h.css("background-image",
"url("+c.backgroundImageUrl+")"),h.css("background-size",k.innerWidth+"px"),b=a("#ebooksProductDescriptionExpander"),b=(k.innerWidth-b.width())/2,h.css("background-position","-"+b+"px"),h.css("background-repeat","no-repeat")),n.length&&(n.css("background-image","url("+c.backgroundImageUrl+")"),n.css("background-size","100%")));a(k).resize(function(){c.displayBackgroundImage&&(1E3>k.innerWidth?f.css("background-size","1000px"):f.css("background-size","100%"));h.length&&h.css("background-size",k.innerWidth+
"px");n.length&&h.css("background-size",k.innerWidth+"px")})});f.when("A","jQuery","atf").execute(function(b,a){var c=a("#udpKcpAppAdImage"),d=a("#udpComiXologyAd");c.length&&b.loadHiResImage(c);d.length&&b.loadHiResImage(d)});f.when("A","jQuery","cf").execute(function(b,a){a('a[href^="#kindle-illustrated-learn-more"]').click(function(c){c.preventDefault();var b=this.hash;c=a(b).offset().top-100;a("html, body").stop().animate({scrollTop:c},1200,"swing",function(){k.location.hash=b})})});f.when("A",
"jQuery","contentQualityWidgetReady").execute(function(b,a,c){a.ajax("/gp/digital/fiona/ajax/reftagCall.html/ref="+c.onloadReftag,{method:"get",cache:!1});b.on("a:popover:show:kcqPopverPreload",function(){a.ajax("/gp/digital/fiona/ajax/reftagCall.html/ref="+c.hoverOverReftag,{method:"get",cache:!1})})});f.when("A","jQuery","ready","atf").execute(function(b,a){var c=b.state("goodreadsFacebubblesState");c!==p&&b.ajax("/kindle-dbs/external-service/goodreads-facebubbles",{method:"get",params:{profileId:c.goodreadsProfileId,
asin:c.asin},success:function(c){a("#goodreads-facebubble").append(c)}})});f.when("A","ready").execute(function(b){var a=!1,c=b.state("deliverToState");if(c)b.on(c.deliverToDropdownName,function(c){ue&&ue.count&&!a&&(ue.count("deliverToSelectionCount",1),a=!0)})})});