/*global $,JQuery,alert*/
$("document").ready(function () {
	
	"use strict";
	$('.carousel').carousel({
        interval: 6000
		
    });
	
	/*tool box*/
	$(".gear-check").click(function () {
		$(".color-option").fadeToggle();
	});
	var colorli = $(".color-option ul li");
	colorli
	    .eq(0).css("backgroundColor", "#E41B17").end()
	    .eq(1).css("backgroundColor", "#c40ae6").end()
	    .eq(2).css("backgroundColor", "#05d0d0").end()
	    .eq(3).css("backgroundColor", "#f7f00d").end()
	    .eq(4).css("backgroundColor", "#2a05f3");
	
	colorli.click(function () {
		$("link[href*='color']").attr("href", $(this).attr("data-value"));
	});
	/*************** scroll-top ******************/
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700)
			$(".scroll-top").show();
		     else 
			     $(".scroll-top").hide();
	})
	$(".scroll-top").click(function()
	{
		$("body,html").animate({scrollTop:0},600);
	});
});

