$(document).ready(function() {
  $(window).scroll(function() {
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "#5a2ed6");
	  }
	  else {
		  $(".navbar").css("background" , "transparent");  	
	  }
	})

	$('.navbar-toggler').click(function() {
		$(this).find('i').toggleClass('fa-times text-white');
	})

	$('#what-we-do a.who-are-do_grid').click(function() {
		$(this).find('.more-info').css('display', 'block');
		return false;
	})

	$('.more-info').click(function() {
		$('.more-info').css('display', 'none');
		return false;
	})
})
