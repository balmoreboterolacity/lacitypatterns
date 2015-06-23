$(document).ready(function(){

	// Drop-down menu 

	$(".menu").click (function(){

			var width = $(window).width();
			var height = $(window).height();

		if ($(".drop-down").is(":visible")) {
			$("body").css({"width": "initial", "height": "initial", "overflow": "visible"});
			$(".drop-down").css({"width": width - 17, "height": height, "overflow": "hidden"});
			$(".drop-down").slideUp("slow");
		} else {
			$("body").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").css({"width": width + 17, "height": height, "overflow": "hidden"});
			$(".drop-down").slideDown("slow");

		};

	});

	$(window).resize (function(){
		if ($(".drop-down").is(":visible")) {
			var width = $(window).width();
			var height = $(window).height();
			$("body").css({"width": width, "height": height, "overflow": "hidden"});
			$(".drop-down").css({"width": width + 17, "height": height, "overflow": "hidden"});
		};
	});
	
	//Search Expand
	$('.nav-button.search').click (function() {
		$('.search-form').slideToggle("slow");
	});
	
	$('#slider .fa-camera').click(function() {
      if (!$('.field-caption-content').hasClass('clicked')) {
        $('.field-caption-content').addClass('clicked').css({
          'display': 'block'
        });
        $('#slider .fa-camera').addClass('orange');
      } else {
        $('.field-caption-content').removeClass('clicked').css({
          'display': 'none'
        });
        $('#slider .fa-camera').removeClass('orange');
      }
    });

});