$(document).ready(function(){

	// Drop-down Menu 

	$(".menu").click (function(){

		var height = $("drop-down").height();

		if ($(".drop-down").is(":visible")) {
			$("body").css({"height": "initial", "overflow": "visible"});
			$(".drop-down").slideUp(600);
		} else {
			$("body").css({"height": height, "overflow": "hidden"});
			$(".drop-down").slideDown(600);

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
        $('#slider .fa-camera').addClass('orange');
      } else {
        $('.field-caption-content').removeClass('clicked').css({
          'display': 'none'
        });
        $('#slider .fa-camera').removeClass('orange');
      }
    });

});