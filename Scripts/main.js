/*global $, jQuery*/

$(document).ready(function () {
	"use strict";

	var toggleButton = $('.toggle-button'),
        menuWrap = $('.menu-wrapper'),
		sidebarArrow = $('.sidebar-menu-arrow'), 
		mobileNav = $('.mobile-nav-button');
        

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	back_to_top = $('.bw-top');

	// Hamburger button
	toggleButton.on('click', function () {
		$(this).toggleClass('button-open');
		menuWrap.toggleClass('menu-show');
	});
	

	// Sidebar navigation arrows
	sidebarArrow.click(function () {
		$(this).next().slideToggle(300);
	});
	
	// Sticky Nav Transition 
	$('.header-sticky').addClass('hidden');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.header-sticky').removeClass('hidden');
        } else if ($(this).scrollTop() <= 150) {
            $('.main-header').removeClass('hidden');
            $('.header-sticky').addClass('hidden');
        }
	});
	
	//hide or show the "back to top" link
	$(window).scroll(function () {
		($(this).scrollTop() > offset) ? back_to_top.addClass('bw-is-visible') : back_to_top.removeClass('bw-is-visible bw-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			back_to_top.addClass('bw-fade-out');
		}
	});
    
	//smooth scroll to top
	back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0
        }, scroll_top_duration);
	});
	
	// Flexslider 	
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 200,
		itemMargin: 30,
		minItems: 1,
		maxItems: 4
	});
    
    
    // Header Scroll Change
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#body-header").addClass("top-header");
        } else {
            $("#body-header").removeClass("top-header");
        }
	});
});

