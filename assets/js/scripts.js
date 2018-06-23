$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "rgba(90, 46, 214, .80)");
	  }
	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})
