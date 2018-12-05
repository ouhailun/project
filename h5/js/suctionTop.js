$(function(){
	$(window).scroll(function(){
		var height = $('.header').height();
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=height){
			$('.header').css({'position':'fixed','top':'0px','background':'rgba(169,12,11,0.7)'})
		}else{
			$('.header').css({'background':'transparent'});
		}
	})
})