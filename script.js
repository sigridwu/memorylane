/**
 * Created by hp on 2016/7/10.
 */
$(document).ready(function(){
	$("#add-mmry").hide();
	//$("#mask").remove();
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
	var oldmmry = $("#load-mmry").load("data/mmry.txt");
	var bef = "<div class='brief'><i class='fa fa-clock-o'></i>";
	var aft = "</div>"
	var mmry = $("#mmry-data").val();
	var mmrydata = oldmmry + bef + mmry +aft;
	/* 替换文件解决方案 - 自动下载新txt文件*/
	var file = new File([mmrydata],"mmry.txt",{ type: "text/plain;charset=utf-8" });
	saveAs(file);
	
	/* var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	
	$.post("data/mmry.txt",mmrydata,function(){
		alert("更新成功");
	}); */
});