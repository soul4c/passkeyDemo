var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}

// $(window).on('resize',function(){
// 	if($('header').css('height')>'80px'){
// 		$('header').css('height','80px');
// 		$('.header_city>span').css({'fontSize':'18px','height':'80px','lineHeight':'80px'});
// 		$('.header_city').css('height','80px')
// 	}	

// })



// 打开关闭搜索页面
$('.header_find').on('click',function(){
	$('.find_page').show();
})
$('.find_close').on('click',function(){
	$('.find_page').hide();
})
// 搜索页面搜索模式切换
$('.find_style_list>li').on('click',function(){
	// console.log($(this).text());
	$(this).prop('class','find_style_focus').siblings().prop('class','find_style_blur')
})