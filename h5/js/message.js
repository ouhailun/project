$(function(){
	$(document).ready(function(){
		var res = Math.floor(Math.random() * 10);
		console.log(res)
		$('.mes>span>img').attr('src','images/entrance'+res+'.jpg');
	})
})