/**
 * Created by hp on 2016/7/10.
 */
$(document).ready(function(){
    var w=document.documentElement.clientWidth;
    var imgwidth = (w*0.63-22)+"px";
    $(".work-img").css("width",imgwidth);
	$("#add-mmry").hide();
});


$(function () { $('#jy1').collapse({
		toggle: false
	});
});

// 身份验证
$("#login-btn").click(function(){
	var id = $("#userid").val();
	var name = $("#username").val();
	var drink = $("input[name='drink']:checked").val();
	var dessert = $("input[name='dessert']:checked").val();
	var cat = $("input[name='cat']:checked").val();
	if(id == "walkinblues" && name == "暖脚宝" && drink == "2" && dessert == "3" && cat == "1"){
		alert("Shawn，欢迎来到记忆小径！");
		$('#loginModal').modal('hide');
		$("#mask").remove();
		$("#load-mmry").load("data/mmry.txt");
		$("#add-mmry").show();
	}
	else{
		alert("身份错误！");
	}
});

//添加记忆
$("#add-btn").click(function(){
	
});