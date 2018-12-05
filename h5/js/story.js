$(function(){
	$(document).ready(function(){
		$('.title').eq(0).children('div').slideDown(500);
		$('.img_1 img').slideDown(500);
	})
	$(window).scroll(function(){
		var obj = {
			right:0+'px'
		}
		var obj1 = {
			left:0+'px'
		}
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(scrollTop)
		var height=250;
		var height1=400;
		var height2=600;
		var height3=1100;
		var height4=1300;
		var height5=1700;
		var height6=2100;
		var height7=2600;

		if(scrollTop>=height){
			$('.conclusion div').slideDown(1000);
		}
		if(scrollTop>=height1){
			$('.title').eq(1).children('div').slideDown(500);
		}
		if(scrollTop>=height2){
			$('.img_2 img').slideDown(1000);
		}
		if(scrollTop>=height3){
			$('.title').eq(2).children('div').slideDown(500);
		}
		if(scrollTop>=height4){
			$('.technology1').children('div').animate(obj,1000);
		}
		if(scrollTop>=height5){
			$('.technology2').children('div').animate(obj1,1000);
		}
		if(scrollTop>=height6){
			$('.technology3').children('div').animate(obj,1000);
		}
		if(scrollTop>=height7){
			$('.title').eq(3).children('div').slideDown(500);
		}
	})
})