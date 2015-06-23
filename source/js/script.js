$(document).ready(function(){

	// Drop-down menu 

	$(".menu").click (function(){

		var width = $(window).width();
		var height = $(window).height();

		if ($(".drop-down").is(":visible")) {
			$("body").css({"width": "initial", "height": "initial", "overflow": "visible"});
			$(".drop-down").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").slideUp(800);
		} else {
			$("body").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").slideDown(800);

		};

	});

	$(window).resize (function(){
		if ($(".drop-down").is(":visible")) {
			var width = $(window).width();
			var height = $(window).height();
			$("body").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").css({"width": width, "height": height, "overflow": "hidden"});
		};
	});
	
	//Search Expand
	$('.nav-button.search').click (function() {
		$('.search-form').slideToggle("slow");
	});

});