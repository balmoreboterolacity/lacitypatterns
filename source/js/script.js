$(document).ready(function(){

	var width = $(window).width();
	var height = $(window).height();
	
	// Drop-down menu 

	$(".menu").click (function(){
		if ($(".drop-down").is(":visible")) {
			$("body").css({"width": "initial", "height": "initial", "overflow": "visible"});
			$(".drop-down").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").slideUp("slow");
		} else {
			$("body").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").css({"width": width + 17, "height": height, "overflow": "hidden"});
			$(".drop-down").slideDown("slow");

		};

	})

});