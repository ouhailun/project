$(function(){
	var obj = {
		right:674.5+'px'
	}
	var obj1 = {
		left:674.5+'px'
	}
	var obj2 = {
		left:0+'px'
	}
	var obj3 = {
		right:0+'px'
	}
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(scrollTop)
		var height=1100;
		var height1=1600;
		var height2=2000;
		var height3=2400;
		if(scrollTop>=1100){
			$('.mMain .ago').eq(0).children('.left').animate(obj,1000)
			$('.mMain .ago').eq(0).children('.right').animate(obj1,1000)
		}
		if(scrollTop>=height1){
			$('.mMain .aft').eq(0).children('.left').animate(obj2,1000)
			$('.mMain .aft').eq(0).children('.right').animate(obj3,1000)
		}
		if(scrollTop>=height2){
			$('.mMain .ago').eq(1).children('.left').animate(obj,1000)
			$('.mMain .ago').eq(1).children('.right').animate(obj1,1000)
		}
		if(scrollTop>=height3){
			$('.mMain .aft').eq(1).children('.left').animate(obj2,1000)
			$('.mMain .aft').eq(1).children('.right').animate(obj3,1000)
		}
	})
})