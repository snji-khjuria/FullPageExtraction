(function(h){var n=window.AmazonUIPageJS||window.P,t=n._namespace||n.attributeErrors,b=t?t("CustomerReviewsVotingAssets"):n;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,n,t){h.when("A","vote-model","vote-view","a-modal").register("vote-controller",function(b,a,c,d){function f(a,b){g(a,b);c.showElementByCssSelector(a,b.inFlight)}function g(a,b){c.hideElementByCssSelector(a,b.hideVoteComponents);b.hideAbuseComponents&&c.hideElementByCssSelector(a,b.hideAbuseComponents)}
function e(e,h){h.isReportAbuse&&(e=b.$("#mobile-abuse-"+h.voteInstanceId),d.get(e).hide());f(e,h.cssSelectors);a.submitVote(h.ajaxUrl,h.voteValue,h.voteInstanceId,h.csrfT,h.voteDimension,function(a){if(!0===a){a=e;var b=h.cssSelectors;g(a,b);c.showElementByCssSelector(a,b.onSuccess)}else a=e,b=h.cssSelectors,g(a,b),c.showElementByCssSelector(a,b.onError)},function(){var a=e,b=h.cssSelectors;g(a,b);c.showElementByCssSelector(a,b.onError)})}b.declarative("reviews:vote-action","click",function(a){e(a.$target,
a.data);a.$event.preventDefault()});return{submitVote:e}});h.when("A","cr-ajax-model").register("vote-model",function(b,a){return{submitVote:function(b,d,f,g,e,h,n){a.post(b,{params:{voteInstanceId:f,voteValue:d,csrfT:g,voteDimension:e},attribution:"submitVote",success:h,error:n})}}});h.when("A").register("vote-view",function(b){function a(a,b){return a.closest(".cr-vote").find(b)}return{hideThankYouAlert:function(b){a(b,".cr-vote-success").addClass("aok-hidden")},showThankYouAlert:function(b){a(b,
".cr-vote-success").removeClass("aok-hidden")},showErrorAlert:function(b){a(b,".cr-vote-error").removeClass("aok-hidden")},showFeedback:function(b){a(b,".cr-vote-feedback").removeClass("aok-hidden")},hideFeedback:function(b){a(b,".cr-vote-feedback").addClass("aok-hidden")},hideButtons:function(b){a(b,".cr-vote-buttons").addClass("aok-hidden")},hideElementByCssSelector:function(b,d){a(b,d).addClass("aok-hidden")},showElementByCssSelector:function(b,d){a(b,d).removeClass("aok-hidden")}}})});