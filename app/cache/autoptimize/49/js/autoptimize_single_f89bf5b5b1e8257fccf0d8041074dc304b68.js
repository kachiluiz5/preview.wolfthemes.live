/*!
 * Nu admin JS
 */
/*!
 * Elementor Pgae Settings to Post Meta
 *
 * Wolf Core 1.0.0
 */
var GainlabElementorAdmin=function($){"use strict";return{init:function(){if("undefined"===typeof elementor){return;}
this.blog();},blog:function(){elementorFrontend.hooks.addAction("frontend/element_ready/post-index.default",function($scope){$(".lazyload-bg").removeClass("lazy-hidden");if($scope.find('audio:not(.minimal-player-audio):not(.loop-post-player-audio),video:not(.video-bg)').length){$scope.find('audio:not(.minimal-player-audio):not(.loop-post-player-audio),video:not(.video-bg)').mediaelementplayer();}
if($scope.find('.wolf-playlist').length){if('undefined'!==typeof WPM){WPM.cuePlaylists();}}
setTimeout(function(){if($scope.find('.post-display-masonry').length){GainlabMasonry.init();}},1000);});},portfolio:function(){elementorFrontend.hooks.addAction('frontend/element_ready/work-index.default',function($scope){$(".lazyload-bg").removeClass("lazy-hidden");});},product:function(){elementorFrontend.hooks.addAction('frontend/element_ready/product-index.default',function($scope){$(".lazyload-bg").removeClass("lazy-hidden");});},video:function(){elementorFrontend.hooks.addAction('frontend/element_ready/video-index.default',function($scope){$(".lazyload-bg").removeClass("lazy-hidden");});},release:function(){elementorFrontend.hooks.addAction('frontend/element_ready/release-index.default',function($scope){$(".lazyload-bg").removeClass("lazy-hidden");});},event:function(){elementorFrontend.hooks.addAction('frontend/element_ready/event-index.default',function($scope){$(".lazyload-bg").removeClass("lazy-hidden");});},fullPage:function(){}};}(jQuery);(function($){"use strict";$(window).on('elementor/frontend/init',function(){GainlabElementorAdmin.init();});})(jQuery);