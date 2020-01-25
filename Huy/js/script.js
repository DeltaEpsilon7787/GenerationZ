var fixed_menu = true;
window.jQuery = window.$ = jQuery;

/*PRELOADER*/
jQuery(window).load(function () {
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);
});

/*SCROLL*/
jQuery(document).ready(function() {
	jQuery("body").niceScroll({
		cursorcolor:"#333",
		cursorborder:"0px",
		cursorwidth :"8px",
		zindex:"9999"
	});
});

/*FLEXSLIDER*/
jQuery(window).load(function(){
	$('.flexslider.top_slider').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false,
		animationLoop: false,
		slideshow: false,
		prevText: "",
		nextText: "",
		sync: "#carousel"
	});
	$('#carousel').flexslider({
		animation: "fade",
		controlNav: false,
		animationLoop: false,
		directionNav: false,
		slideshow: false,
		itemWidth: 100,
		itemMargin: 5,
		asNavFor: '.top_slider'
	});
	
	homeHeight();
	
	jQuery('.flexslider.top_slider .flex-direction-nav').addClass('container');
	
	$('.flexslider.portfolio_single_slider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: true,
		animationLoop: false,
		slideshow: false,
	});
});

jQuery(window).resize(function(){
	homeHeight();
	
});

jQuery(document).ready(function(){
	homeHeight();
	
});

function homeHeight(){
	var wh = jQuery(window).height() - 80;
	jQuery('.top_slider, .top_slider .slides li').css('height', wh);
}