$(document).ready(function(){

	// Drop-down Menu 

	$(".menu").click (function(){

		var height = $("drop-down").height();

		if ($(".drop-down").is(":visible")) {
			$("body").css({"height": "initial", "overflow": "visible"});
			$(".drop-down").slideUp(1000);
		} else {
			$("body").css({"height": height, "overflow": "hidden"});
			$(".drop-down").slideDown(1000);

		}

	});
	
	//Search Expand

	$('.nav-button.search').click (function() {
		$('.search-form').slideToggle("slow");
	});
	

	// Gallery

	$('#slider .fa-camera').click(function() {
      if (!$('.field-caption-content').hasClass('clicked')) {
        $('.field-caption-content').addClass('clicked').css({
          'display': 'block'
        });
      } else {
        $('.field-caption-content').removeClass('clicked').css({
          'display': 'none'
        });
      }
    });

});