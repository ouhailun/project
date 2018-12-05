$(function(){
	// 轮播图
	var index=0;
	var timer;
	var num=0;
	//轮播图左右键
	$('div.top div.left').click(function(){
		clearInterval(timer);
		if(index == 0){
			index = 0;
		}
		changeImage();	
		timer = setInterval(changeImage,5000);
	})
	$('div.top div.right').click(function(){
		clearInterval(timer);
		changeImage();
		timer = setInterval(changeImage,5000);
	})
	//图片和小圆点自动循环
	timer = setInterval(changeImage,5000);
	var obj = {
		opacity:1
	}
	var obj1 = {
		opacity:0
	}
	function changeImage(){
		if(index>=1){
			index = 0;
			$('.img li').eq(index).animate(obj,2000).siblings().animate(obj1,2000);
			$('.circle li').eq(index).css('background','#fff').siblings().css('background','#999');
			$('.left_img').eq(index).hide().siblings().show();
			$('.right_img').eq(index).hide().siblings().show();
		}else{
			index++;
			$('.img li').eq(index).animate(obj,2000).siblings().animate(obj1,2000);
			$('.circle li').eq(index).css('background','#fff').siblings().css('background','#999');
			$('.left_img').eq(index).hide().siblings().show();
			$('.right_img').eq(index).hide().siblings().show();
		}
	}
	//轮播图小原点
	$('ul.circle li').mouseover(function(){
		clearInterval(timer);
		$(this).css('background','#fff').siblings().css('background','#999');
		index = $(this).index();
		$('.img li').eq(index).animate(obj,500).siblings().animate(obj1,500);
	})
	$('ul.circle li').mouseout(function(){
		timer = setInterval(changeImage,5000);
	})



	var obj_list1 = {
		left:-1292+'px'
	}
	var obj_list2 = {
		left:0+'px'
	}
	console.log($('.foot div span').eq(0));
	$('.foot div span').eq(0).click(function(){
		$('.press_list').animate(obj_list1,1000);
	})
	$('.foot div span').eq(1).click(function(){
		$('.press_list').animate(obj_list2,1000);
	})
})