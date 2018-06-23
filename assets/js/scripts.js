$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "#5a2ed6");
	  }
	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
	})

	$('.navbar-toggler').click(function(){
		$(this).find('i').toggleClass('fa-times text-white');
	});
})
