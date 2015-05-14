/// <reference path="../typings/jquery/jquery.d.ts"/>

"use strict";

$(function () {
	var $slider = $(".slider-slides .container");
	
	$slider.cycle({
		slides: ".slide",
		timeout: 4000,
		speed: 400,
		fx: "tileSlide",
		tileCount: 10,
		pauseOnHover: true,
	});

	$slider.on('cycle-update-view', function (event, opts) {
		$(".slider-thumbnails .item").removeClass("active");
		var currItem = $(".slider-thumbnails .item")[opts.currSlide];
		$(currItem).addClass("active");
	});
	
	$(".slide .controls .next").click(function() {
		$slider.cycle('next');
	});

	$(".slide .controls .prev").click(function() {
		$slider.cycle('prev');
	});

	$(".slider-thumbnails .item").click(function () {
		var itemIndex = $(this).index();
		$slider.cycle('goto', itemIndex);
	});
});