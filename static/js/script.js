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


/*MENU*/
function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navmenu').find('.scroll_btn a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.navmenu li.scroll_btn')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})
};

jQuery(document).ready(function() {
	if ($(window).width() < 768){
		jQuery('.menu_block .container').prepend('<a href="javascript:void(0)" class="menu_toggler"><span class="fa fa-align-justify"></span></a>');
		jQuery('header .navmenu').hide();
		jQuery('.menu_toggler, .navmenu ul li a').click(function(){
			jQuery('header .navmenu').slideToggle(300);
		});
	}
		
	if (jQuery("#page").hasClass("single_page")) {			
	}
	else {
		$(window).scroll(function(event) {
			calculateScroll();
		});
		$('.navmenu ul li a, .mobile_menu ul li a, .btn_down').click(function() {  
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 80}, 1000);
			return false;
		});
	};
});


$(document).ready(function() {
    var owl = $(".owl-demo.team_slider");

    owl.owlCarousel({
		navigation: true,
		pagination: false,
		items : 3,
		itemsDesktop : [600,2]
	});
	
	
	
	jQuery('.owl-controls').addClass('container');
	
});