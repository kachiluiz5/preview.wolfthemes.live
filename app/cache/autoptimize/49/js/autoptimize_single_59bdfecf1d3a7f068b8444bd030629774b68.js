!function(){"use strict";class e{constructor(){var e=this;window.addEventListener("load",(t=>{e.build()}))}build(){var e=this;document.querySelectorAll(".elementor-widget-image-carousel").forEach((function(t){var r=JSON.parse(t.dataset.settings).navigation,n="both"===r||"arrows"===r||!1,o=t.dataset.arrowsColor||"#333333";n&&(t.querySelector(".elementor-swiper-button-prev").append(e.getArrow(t,"left",o)),t.querySelector(".elementor-swiper-button-next").append(e.getArrow(t,"right",o)))})),document.querySelectorAll(".wolf-core-testimonial-slider").forEach((function(t){var r=t.dataset.navArrows||!1,n=t.dataset.arrowsColor||"#333333";r&&(t.querySelector(".flickity-button.previous").append(e.getArrow(t,"left",n)),t.querySelector(".flickity-button.next").append(e.getArrow(t,"right",n)))}))}getArrow(e,t,r){var n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","path"),s=document.createElementNS("http://www.w3.org/2000/svg","path"),a=document.createElementNS("http://www.w3.org/2000/svg","line");return"left"===t&&n.setAttribute("style","transform:scale(-1, 1)"),n.setAttribute("fill","none"),n.setAttribute("viewBox","0 0 130 77.695"),n.setAttribute("stroke",r),n.setAttribute("width","130"),n.setAttribute("height","77.695"),o.setAttribute("d","M68.325 76.672s-.863-36.907 66.521-37.435"),o.setAttribute("stroke-linecap","round"),s.setAttribute("d","M68.325 1.023s-.863 36.905 66.521 37.434"),s.setAttribute("stroke-linecap","round"),a.setAttribute("x1","0"),a.setAttribute("y1","39"),a.setAttribute("y1","39"),a.setAttribute("x2","1100"),a.setAttribute("y2","39"),n.appendChild(o),n.appendChild(s),n.appendChild(a),e.appendChild(n)}}class t{constructor(){this.elipse=document.querySelectorAll("elipse"),this.index=0,this.maskpath=null,this.pathLength=0,this.svg='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t viewBox="0 0 600 205" style="enable-background:new 0 0 600 205;" xml:space="preserve"><g>\t<path fill="none" stroke-width="10px" stroke="black" d="M256.3,145.8c74.8-1,149.3-10.6,220.4-28.5c16.5-4.1,32.9-8.8,47.3-16.2c11-5.7,21.3-14.4,20.7-24.6\t\tc-0.6-10.4-12.3-18.2-23.8-23.6c-31.4-14.6-68.4-20.2-104.8-23.3c-87.7-7.4-177.3-1.1-261.8,18.5C123,55.4,92.2,64.5,64.6,78\t\tc-20.1,9.8-40.2,24.9-38.4,43.2c1.3,12.9,13.5,23.8,27.4,31.3c27.9,15,62.9,19.6,96.8,22.3c125.7,9.9,256-2.3,369.5-44.9\t\tc20.1-7.6,40.3-16.5,53.3-30.5c4.2-4.6,7.7-9.7,8.5-15.3c1.7-11.4-8-22.4-20.5-28.7s-27.6-8.7-42.3-11"/></g></svg>',this.elipse.forEach((e=>{e.querySelector("svg")||e.append(this.htmlToElement(this.svg))}))}htmlToElement(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}new class{constructor(){this.postId=null,this.addEventListerners()}Elipse(){elementorFrontend.hooks.addAction("frontend/element_ready/heading.default",(function(e){new t}))}ImageCarousel(){elementorFrontend.hooks.addAction("frontend/element_ready/image-carousel.default",(function(t){new e}))}TestimonialCarousel(){elementorFrontend.hooks.addAction("frontend/element_ready/testimonial-slider.default",(function(t){setTimeout((function(){new e}),1e3)}))}addEventListerners(){window.addEventListener("elementor/frontend/init",(e=>{this.ImageCarousel(),this.Elipse(),this.TestimonialCarousel(),this.changeCallback()}))}changeCallback(){"undefined"!=typeof elementor&&void 0!==elementor.settings.page&&elementor.settings.page.addChangeCallback("top_bar_block_id",this.topBarBlockId)}topBarBlockId(e){var t=new FormData;this.postId=elementor.$previewContents.find("body").data("post-id"),t.append("action","gainlab_ajax_update_top_bar_block_id_post_meta"),t.append("security",GainlabParams.ajaxNonce),t.append("postId",this.postId),t.append("topBarBlockId",e),fetch(GainlabParams.ajaxUrl,{method:"POST",body:t}).then((e=>e.text())).then((e=>{"OK"===e&&elementor.reloadPreview()}),(e=>{console.log(e)}))}}}();