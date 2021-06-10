function changeContrast(e){"inactivate"===e?$("body").removeClass("contrast-active"):$("body").addClass("contrast-active")}function stickyHeader(){if($(".stricky").length){$(window).width()>767&&($(window).scrollTop()>100?($(".stricky").removeClass("slideIn animated"),$(".stricky").addClass("stricky-fixed slideInDown animated"),$(".scroll-to-top").fadeIn(500)):$(this).scrollTop()<=100&&($(".stricky").removeClass("stricky-fixed slideInDown animated"),$(".stricky").addClass("slideIn animated"),$(".scroll-to-top").fadeOut(500)))}}if($(function(){var e=document.location.origin+"/wp-content/themes/nalco/";$("#contact_form").submit(function(n){n.preventDefault();var o;if(o=$("#contact_form").pkvalidateform({formId:"contact_form"}),$.inArray("false",o)>=0)return console.log("false"),!1;$(".circleGG").fadeIn(),$.ajax({type:"POST",url:e+"process.php",data:new FormData(this),contentType:!1,cache:!1,processData:!1,success:function(e){var n=(a=jQuery.trim(e)).split("-"),o=n[0],a=n[1];$(".circleGG").fadeOut(),"S"==o?($(".result-message").html(a),$(".result-message").slideDown(500),$("form").each(function(){this.reset()})):($(".result-message").html(a),$(".result-message").slideDown(500)),setTimeout(function(){$(".result-message").slideUp(500),location.reload()},8e3)},error:function(e){$(".submit_sucessful").fadeIn(),$(".submit_sucessful #content_cont").html(e)}})}),$("video").length&&$("#vid-overlay").attr("src","https://nalcoindia.com/wp-content/uploads/video/video-poster_refinary_yj0uwn_ac856m.jpg").load(function(){$(".loader").addClass("hideLoader"),setTimeout(function(){$(".loader").fadeOut()},1500)});var n=window.location.href;if($('.inner-sidebar ul li a[href="'+n+'"]').closest("li").addClass("active"),$(".translation-links a").on("click",function(){var e=$(this).attr("data-lang"),n=window.location.href;"English"===e?(n=n.slice(0,-3),window.location.replace(n)):($("body").hasClass("innerpage")?n+="hi/":n+="hn/",window.location.replace(n))}),$(".inner-gallery-section").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}}}),$(".press-clippings-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("alt")}}}),$(".press-clippings-gallery").on("click",function(){$(this).addClass("open")}),$(window).scroll(function(){$(this).scrollTop()>450?$("#gotoTop").fadeIn():$("#gotoTop").fadeOut()}),$("#gotoTop").click(function(){return $("body,html").animate({scrollTop:0},400),!1}),$("#year-filter").on("change",function(){var e=$(this).val(),n=$("#"+e).position().top+$("#"+e).innerHeight();$("body, html").animate({scrollTop:n})}),$("video").length){var o="";if("undefined"!=typeof Storage){sessionStorage.clickcount?sessionStorage.clickcount=Number(sessionStorage.clickcount)+1:sessionStorage.clickcount=1;o=sessionStorage.clickcount}var a="";o%2==0?(a+='<source src="https://nalcoindia.com/wp-content/uploads/video/NALCO-VV1_p6lyll.webm" type="video/webm">',a+='<source src="https://nalcoindia.com/wp-content/uploads/video/NALCO-VV1_baamhc.mp4" type="video/mp4">'):(a+='<source src="https://nalcoindia.com/wp-content/uploads/video/nalco-banner-video-222_rpwann.webm" type="video/webm">',a+='<source src="https://nalcoindia.com/wp-content/uploads/video/NALCO-SECOND2-NEW_mcktfy.mp4" type="video/mp4">'),$("#vv").html(a)}var t=document.location.origin+"/";if($(".numbers-section").length)new Waypoint({element:document.getElementById("twitter-cont"),handler:function(e){"down"===e?$("#twitter-load").load(t+"wp-content/themes/nalco/include/twitter-section.php"):console.log("up")},offset:$(window).height()});if(jQuery(window).on("scroll",function(){jQuery,stickyHeader()}),$(".tooltip-button").on("click",function(){$(".top-right").slideToggle(400)}),$(".theme-switcher").click(function(){$("#theme-options").toggleClass("active")}),$(".theme-switcher-left").click(function(){$("#theme-options-left").toggleClass("active")}),$(".toggle").click(function(){$(".block").toggleClass("expanded"),$(".content").toggleClass("display")}),$("div.holder").jPages({containerID:"newsContainer",perPage:14}),$("div.holder").jPages({containerID:"latestContainer",perPage:3}),$("div.holder").jPages({containerID:"investorcontainer-new",perPage:3}),$("div.holder").jPages({containerID:"investorcontainer",perPage:10}),$("div.holder").jPages({containerID:"press-container",perPage:10}),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}),wow.init(),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:e.offset().top-80},1e3),!1}}),$(".section-heading").length)new Waypoint({element:$(".section-heading"),handler:function(e){$(this.element).addClass("color-border")},offset:"70%"});var i,l=$("section p,section h1,section li,section a");function s(e){l.each(function(){var n=$(this);e>0?n.css("font-size").slice(0,-2)<18&&n.css("font-size",parseInt(n.css("font-size"))+e):n.css("font-size").slice(0,-2)>12&&n.css("font-size",parseInt(n.css("font-size"))+e)})}if(l.each(function(){var e=$(this);e.data("orig-size",e.css("font-size"))}),$("#btn-increase").click(function(){s(1)}),$("#btn-decrease").click(function(){s(-1)}),$("#btn-orig").click(function(){l.each(function(){var e=$(this);e.css("font-size",e.data("orig-size"))})}),$(".search_bar").on("click",function(){$(".search_box").slideToggle(400)}),$(".search_bar").on("click",function(){$("body").addClass("home")}),$(".close_search").on("click",function(){$("body").removeClass("home")}),$(".modal-header .close ").click(function(){$(".add-popup").fadeOut()}),$(".spot_close").click(function(){$(".btn-play").fadeOut()}),$(".press-slider").owlCarousel({loop:!0,margin:30,autoWidth:!1,items:1,autoplay:!0,dots:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,responsiveClass:!0}),$(".main-menu li.dropdown ul").length&&($(".main-menu li.dropdown").append('<div class="dropdown-btn"></div>'),$(".main-menu li.dropdown").on("click",function(){$(this).prev("ul").slideToggle(500)})),$(".hidden-bar-opener").click(function(){console.log("click hela"),$(".menu-overlay").fadeIn()}),$(".hidden-bar-closer").click(function(){$(".menu-overlay").fadeOut()}),$(".menu-overlay").click(function(){$(".menu-overlay").fadeOut()}),$(".site-header .navigation li.dropdown ul").length&&($(".site-header .navigation li.dropdown").append('<div class="dropdown-btn"></div>'),$(".site-header li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}),$(".site-header .navigation li.dropdown > a").on("click",function(e){e.preventDefault()})),$("ul.one-page-nav").length&&$("ul.one-page-nav").onePageNav(),$(".scroll-to-navigation").length&&$(".scroll-to-navigation > li > a").on("click",function(e){var n=$(this).attr("href");e.preventDefault();var o=$(".scroll-to-navigation > li"),a=$(this).parent("li");$("html, body").animate({scrollTop:$(n).offset().top},1e3),o.removeClass("current"),a.addClass("current")}),(i=$(".hidden-bar .side-menu")).find(".dropdown").children("a").append(function(){return'<button type="button" title="" class="btn expander"><i class="fa fa-angle-down"></i><span style="display:none">a</span></button>'}),i.find(".dropdown").children("ul").hide(),i.find(".btn.expander").each(function(){$(this).on("click",function(){return $(this).parent().parent().children("ul").slideToggle(),$(this).closest("li").siblings().children("ul").slideUp(),$(this).closest("li").siblings().find("i").removeClass("fa-angle-up").addClass("fa-angle-down"),$(this).parent().toggleClass("current"),$(this).find("i").toggleClass("fa-angle-up fa-angle-down"),!1})}),$(".hidden-bar").length){var r=$(".hidden-bar"),c=$(".hidden-bar-opener"),d=$(".hidden-bar-closer, .menu-overlay");$(".hidden-bar-wrapper").mCustomScrollbar(),c.on("click",function(){r.addClass("visible-sidebar")}),d.on("click",function(){r.removeClass("visible-sidebar")})}$(".popup-youtube").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){}}});var p=$(".operation-slider");p.owlCarousel({loop:!0,margin:30,autoWidth:!1,items:4,autoplay:!0,dots:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,responsiveClass:!0,navigation:!0,responsive:{0:{items:1,nav:!1,loop:!0},600:{items:2,nav:!1,loop:!0},1000:{items:4,nav:!1,loop:!0}}}),$(".c-navigation .c-preview").click(function(){p.trigger("next.owl.carousel")}),$(".c-navigation .c-next").click(function(){p.trigger("prev.owl.carousel")});var u=$(".news-slider");u.owlCarousel({loop:!0,margin:30,autoWidth:!1,items:1,dots:!1,responsiveClass:!0,navigation:!0,responsive:{0:{items:1,nav:!1,loop:!0},600:{items:1,nav:!1,loop:!0},1000:{items:1,nav:!1,loop:!0}}}),$(".c-navigation .control-icon-preview").click(function(){u.trigger("next.owl.carousel")}),$(".c-navigation .control-icon-next").click(function(){u.trigger("prev.owl.carousel")}),$(".control-icon-playy").on("click",function(){u.trigger("play.owl.autoplay")}),$(".control-icon-pausee").on("click",function(){u.trigger("stop.owl.autoplay")});var m=$(".spotlight-slider");m.owlCarousel({loop:!0,margin:0,autoWidth:!1,items:1,dots:!1,autoplay:!0,autoplayHoverPause:!0,responsiveClass:!0,navigation:!0,responsive:{0:{items:1,nav:!1,loop:!0},600:{items:1,nav:!1,loop:!0},1000:{items:1,nav:!1,loop:!0}}}),$(".slight-right-nav").click(function(){m.trigger("next.owl.carousel")}),$(".slight-left-nav").click(function(){m.trigger("prev.owl.carousel")}),$(".spotlight-slider2").owlCarousel({loop:!0,margin:30,autoWidth:!1,items:1,dots:!1,autoplay:!0,autoplaySpeed:1e3,autoplayHoverPause:!0,responsiveClass:!0,navigation:!0,touchDrag:!1,mouseDrag:!1,animateOut:"fadeOut",animateIn:"slideInUp"});var f=$(".ladlii-slider");f.owlCarousel({loop:!0,margin:0,autoWidth:!1,items:1,dots:!1,autoplay:!1,autoplayHoverPause:!0,responsiveClass:!0,navigation:!0,responsive:{0:{items:1,nav:!1,loop:!0},600:{items:1,nav:!1,loop:!0},1000:{items:1,nav:!1,loop:!0}}}),$(".ladlii-right-nav").click(function(){f.trigger("next.owl.carousel")}),$(".ladlii-left-nav").click(function(){f.trigger("prev.owl.carousel")});var g=$(".cmd-slider");g.owlCarousel({loop:!0,margin:0,autoWidth:!1,items:1,dots:!1,autoplay:!1,autoplayHoverPause:!0,responsiveClass:!0,navigation:!0,responsive:{0:{items:1,nav:!1,loop:!0},600:{items:1,nav:!1,loop:!0},1000:{items:1,nav:!1,loop:!0}}}),$(".pop-box-next").click(function(){g.trigger("next.owl.carousel")}),$(".pop-box-prev").click(function(){g.trigger("prev.owl.carousel")});var h=$(".spot-slider");h.owlCarousel({loop:!0,margin:0,autoWidth:!1,items:1,dots:!1,autoplay:!0,autoplayHoverPause:!0,responsiveClass:!0,nav:!1,dots:!1,animateOut:"fadeOut",navigation:!0,responsive:{0:{items:1,nav:!1,loop:!0},600:{items:1,nav:!1,loop:!0},1000:{items:1,nav:!1,loop:!0}}}),$(".pop-box-next").click(function(){h.trigger("next.owl.carousel")}),$(".pop-box-prev").click(function(){h.trigger("prev.owl.carousel")}),$(".cmd-scroll-pop").slimScroll({height:"225px",position:"right",railVisible:!0,color:"#224e7f",railColor:"#222",railOpacity:.3,wheelStep:10,alwaysVisible:!1});var v=$("#aw-carousel").owlCarousel({loop:!0,margin:10,autoplay:!0,dots:!1,responsiveClass:!0,smartSpeed:1500,responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1000:{items:1,nav:!1,loop:!0}}});$(".awards .box-next").click(function(){v.trigger("next.owl.carousel")}),$(".awards .box-prev").click(function(){v.trigger("prev.owl.carousel")}),$(".control-icon-pause").click(function(){w.marquee("pause")}),$(".control-icon-play").click(function(){w.marquee("resume")}),$(".control-icon-pause-e").click(function(){y.marquee("pause")}),$(".control-icon-play-y").click(function(){y.marquee("resume")});var y=$(".marquee1").marquee({duration:23e3,duplicated:!0}),w=$(".marquee").marquee({duration:3e4,duplicated:!0});if(w.marquee("pause"),$("#journey").length)new Waypoint({element:$("#journey"),handler:function(e){w.marquee("resume")},offset:"80%"});$(".nalco-train-cont").on("mouseenter",function(){w.marquee("pause")}),$(".nalco-train-cont").on("mouseleave",function(){$(".modal-backdrop").hasClass("in")?w.marquee("pause"):w.marquee("resume")}),$(".nalco-train-cont").click(function(){w.marquee("pause")}),$("#year-modal .close").click(function(){w.marquee("resume")}),$(".journey-slider .nalco-train-cont").on("click",function(){var e=$(this).find(".full-content").html(),n=$(this).find(".journey-year").html();$("#year-modal").find(".modal-body").html(e),$("#year-modal").find(".modal-title").html(n)}),$(".team-box .plus").on("click",function(){var e=$(this).closest(".team-box").find(".full-content").html(),n=$(this).closest(".team-box").find(".person-name").html();$("#fromthedesk").find(".modal-body").html(e),$("#fromthedesk").find(".modal-title").html(n)});var b=$("#ac-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,dots:!1,nav:!1,autoplay:!0,smartSpeed:1500,responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1000:{items:1,nav:!1,loop:!0}}});if($(".achievements .box-next").click(function(){b.trigger("next.owl.carousel")}),$(".achievements .box-prev").click(function(){b.trigger("prev.owl.carousel")}),$(".banner-slider2").length)$(".banner-slider2").owlCarousel({loop:!0,margin:0,items:1,dots:!1,animateOut:"fadeOut",autoplay:!0,responsiveClass:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1}}})}),$(window).on("load",function(){$(".marquee1").css({opacity:1}),$("#spotlight1").hasClass("spotlight-on")&&setTimeout(function(){$(".girl-holder a").trigger("click")},3e3),$(".loader").addClass("hideLoader"),setTimeout(function(){$(".loader").fadeOut()},1500),setTimeout(function(){$("#theme-options-left").addClass("active"),$("#theme-options").addClass("active")},15e3),setTimeout(function(){$("#theme-options-left").removeClass("active"),$("#theme-options").removeClass("active")},2e4)}),$(".full-bar-search-toggle").length&&$(document).on("click",".full-bar-search-toggle",function(){$(".full-bar-search-wrap").toggleClass("active")}),$(".demo").length)var waypoint6=new Waypoint({element:$(".demo"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($(".center-heading-zero").length)var waypoint51=new Waypoint({element:$(".center-heading-zero"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($(".center-heading-one").length)var waypoint52=new Waypoint({element:$(".center-heading-one"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($(".center-heading-two").length)var waypoint53=new Waypoint({element:$(".center-heading-two"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($(".center-heading-three").length)var waypoint54=new Waypoint({element:$(".center-heading-three"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($(".center-heading-four").length)var waypoint55=new Waypoint({element:$(".center-heading-four"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($(".center-heading-five").length)waypoint55=new Waypoint({element:$(".center-heading-five"),handler:function(e){$(this.element).addClass("animate-image-overlay")},offset:"70%"});if($("#profile").length)var waypoint7=new Waypoint({element:$("#profile"),handler:function(e){$("#page-nav").attr("class",""),$("#page-nav").addClass("pro")},offset:"50%"});if($("#journey").length)var waypoint8=new Waypoint({element:$("#journey"),handler:function(e){$("#page-nav").attr("class",""),$("#page-nav").addClass("jou")},offset:"50%"});if($("#numbers-speak").length)var waypoint9=new Waypoint({element:$("#numbers-speak"),handler:function(e){$("#page-nav").attr("class",""),$("#page-nav").addClass("num")},offset:"50%"});if($("#our-operation").length)var waypoint10=new Waypoint({element:$("#our-operation"),handler:function(e){$("#page-nav").attr("class",""),$("#page-nav").addClass("ope")},offset:"50%"});if($("#sustainability").length)var waypoint11=new Waypoint({element:$("#sustainability"),handler:function(e){$("#page-nav").attr("class",""),$("#page-nav").addClass("sus")},offset:"50%"});if($("#recentnews").length)var waypoint12=new Waypoint({element:$("#recentnews"),handler:function(e){$("#page-nav").attr("class",""),$("#page-nav").addClass("rec")},offset:"50%"});var snippet={version:"1.3",log:function(e,n){var o=document.createElement(n||"p");o.style.fontFamily="monospace",o.style.margin="2px 0 2px 0",e="[object Array]"===Object.prototype.toString.call(e)?e.join():"object"==typeof e?null===e?"null":JSON.stringify(e):String(e),o.appendChild(document.createTextNode(e)),document.body.appendChild(o)},logHTML:function(e){document.body.insertAdjacentHTML("beforeend",e)}};function stopTrain(e){e.stop()}function startTrain(e){$(".modal-backdrop").hasClass("in")?e.stop():e.start()}





$(function () {
	
	$(".external a").on("click",function(e){
		e.preventDefault();
		var newmessage = "";
		var external_link=$(this).attr("href");
		if(external_link == "https://www.onlinesbi.com/sbicollect/icollecthome.htm"){
			var newmessage = "<p class='addClass'><strong>In Case you have deposited Renewal fess for 2020-21, please use an extra character 'R' after your personal number. Ex: P.no: 00008. Please enter 00008R</strong></p>";
			if($('#external p').hasClass('addClass')){
				
			}else{
				$(newmessage).insertAfter("#external .modal-body p");
			}
		}else{
			$('#external p.addClass').remove();
		}
		$("#external").modal("show");
		$("#external").find("a").attr("href",external_link);	
	});
	
	$("#external a").on("click",function(){
		
		$("#external").modal("hide");
	});
	
	/* Check for external links */
    
    var linkurl;
    /*console.log(baseurl);*/
    $('.js-marquee a').each(function () {
        if (location.hostname === this.hostname || !this.hostname.length) {
            //$(this).addClass('local');
        } else {
            $(this).addClass('external2');
        }
    });
	
	$(".js-marquee .external2").on("click",function(e){
		e.preventDefault();
		var newmessage = "";
		var external_link=$(this).attr("href");
		if(external_link == "https://www.onlinesbi.com/sbicollect/icollecthome.htm"){
			var newmessage = "<p class='addClass'><strong>In Case you have deposited Renewal fess for 2020-21, please use an extra character 'R' after your personal number. Ex: P.no: 00008. Please enter 00008R</strong></p>";
			if($('#external p').hasClass('addClass')){
				
			}else{
				$(newmessage).insertAfter("#external .modal-body p");
			}
		}else{
			$('#external p.addClass').remove();
		}
		$("#external").modal("show");
		$("#external").find("a").attr("href",external_link);	
	});
	

// Menu search option starts
	var menu_array =[];
	var menu_item;
	
	var search_item;
	var goto_link;
	
	
	
 var main_menulink;
	$(".menu a").each(function(){
		main_menulink=$(this);
		if ( $(this).closest("li").hasClass('dropdown') ) {
				main_menulink.attr("href","javascript:void(0)");
		}
	});
	
	
	$("#footer-menu-hidden a").each(function(){
		
		if ( $(this).closest("li").hasClass('dropdown') ) {

		}else{
			menu_item=$(this).html();
			menu_array.push(menu_item);
		}
	});
	
	var myJSON = JSON.stringify(menu_array);
	//console.log(myJSON);
	var options = {
	data: menu_array,
	list: {
		match: {
			enabled: true
		},
		onClickEvent: function() {
			var value = $("#basics").getSelectedItemData();
			console.log(value);
			
				$("#footer-menu-hidden a").each(function(){
		
						if ( $(this).html()==value ) {
							goto_link=$(this).attr("href")
							window.location.href = goto_link;
							//window.open(goto_link, '_blank');
						}
				});
			

		}
	}
};

// Menu search option ends




$("#basics").easyAutocomplete(options);

$(".menu-search-form").on("submit",function(e){
	e.preventDefault();	
	
	$("#footer-menu-hidden a").each(function(){
		
		search_item=$.trim($("#basics").val());
		
		if ( $(this).html()==search_item ) {
			goto_link=$(this).attr("href")
			window.location.href = goto_link;
		}
	});
	
	
	
})
	



// Menu search option ends

$( initlink );

});

function initlink() {
  $('a').attr( 'rel', 'noopener noreferrer' );  
}