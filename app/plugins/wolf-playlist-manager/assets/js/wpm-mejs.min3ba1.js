/*! Wolf Playlist Wordpress Plugin v1.2.7 */ 
!function(a,b,c){"use strict";b.extend(MediaElementPlayer.prototype,{buildcuebarplayertoggle:function(a,c,d,e){var f=a.options.cuebarInitialState,g=a.cueHistory||null,h=a.options.cueSelectors;g&&(f=g.get("visibility")||f),b(h.playlist).toggleClass("is-closed","closed"===f),b('<div class="mejs-button mejs-toggle-player-button mejs-toggle-player"><button type="button" aria-controls="'+a.id+'" title="'+WPMParams.l10n.togglePlayer+'"></button></div>').appendTo(a.controls).on("click",function(){f="open"===f?"closed":"open",b(this).closest(h.playlist).toggleClass("is-closed","closed"===f),g&&g.set("visibility",f)})}}),b.extend(MediaElementPlayer.prototype,{buildcuebackground:function(a,c,d,e){a.container.append(b("<div />",{"class":"wpm-playlist-background",style:"background-image:url("+a.options.cueBackgroundUrl+");"})).find(".wpm-playlist-background")}})}(this,jQuery);