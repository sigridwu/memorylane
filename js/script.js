/**
 * Created by hp on 2016/7/10.
 */
$(document).ready(function(){
    var w=document.documentElement.clientWidth;
    var imgwidth = (w*0.63-22)+"px";
    $(".work-img").css("width",imgwidth);

});



$(function () { $('#jy1').collapse({
		toggle: false
	})});