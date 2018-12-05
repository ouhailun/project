$(function(){
	$(document).ready(function(){
		var obj = {
			opacity:1
		}
		var num = Math.floor(Math.random() * 10);
		$('div.img').animate(obj,2000);
		$('.four>form>div>div>img').attr('src','images/entrance'+num+'.jpg');
	})

	//表单验证
	$("form :input.required").each(function () {
        var required = $("<strong class='high'>*</strong>");
        $(this).parent().append(required);
    })
   //为表单元素添加失去焦点事件
    $("form :input").blur(function(){
        var parent = $(this).parent();
        parent.find(".msg").remove();
        console.log($(this))
        //验证手机
        if($(this).is("#phone")){
            var phoneVal = $.trim(this.value);//$.trim() 函数用于去除字符串两端的空白字符
            var regName = / ^\w{11,}$ /;
            if(phoneVal == "" || phoneVal.length < 11 || regName.test(phoneVal)){
                var errorMsg = "×";
                //class='msg onError' 中间的空格是层叠样式的格式
                parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            }
            else{
                var okMsg="√";
                parent.find(".high").remove();
                parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        //验证邮箱
        if($(this).is("#email")){
            var emailVal = $.trim(this.value);
            var regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;
            if(emailVal== "" || (emailVal != "" && !regEmail.test(emailVal))){
                var errorMsg = "×";
                parent.append("<strong class='msg onError'>" + errorMsg + "</strong>");
            }
            else{
                var okMsg="√";
                parent.find(".high").remove();
                parent.append("<strong class='msg onSuccess'>" + okMsg + "</strong>");
            }
        }
        // 验证码验证
         if($(this).is("#yan")){
            var yanVal = $.trim(this.value);
            var regyan = /^[a-zA-Z]\w{0,9}$/;
            if(yanVal== "" || yanVal.length < 4 || regName.test(yanVal)){
                var errorMsg = "×";
                parent.append("<strong class='msg onError'>" + errorMsg + "</strong>");
            }
            else{
                var okMsg="√";
                parent.find(".high").remove();
                parent.append("<strong class='msg onSuccess'>" + okMsg + "</strong>");
            }
        }

    }).keyup(function(){
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    });
     $("button").click(function(){
        //trigger 事件执行完后，浏览器会为submit按钮获得焦点
        $("form .required:input").trigger("blur"); 
        var numError = $("form .onError").length;
        if(numError){
            return false;
        }
        alert("提交成功！");
    });
})
