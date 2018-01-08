/*
	遮罩插件
	date: 2017年10月12日
	author：zk
*/

;(function($){
	//扩展遮罩相关接口
	$.extend({
		//显示遮罩
		showLightBox: function(zIndex){
			if($("body #lightBox").size() >0){
				$("#lightBox").show();
			}else{
				//创建遮罩对象
				var element = '<div id = "lightBox" style="position:fixed;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,.6);z-index:3"></div>';

				//添加遮罩到页面
				$("body").append(element);
			}

			//如果自定义层级
			if(zIndex) $("#lightBox").css("zIndex", zIndex);
		},
		//隐藏遮罩
		hideLightBox: function(){
			//恢复层级为默认值
			$("#lightBox").css("zIndex", "3").hide();
		}
	});
})(jQuery);