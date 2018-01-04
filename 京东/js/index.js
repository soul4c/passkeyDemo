var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}

$('.ad_close').on('click',function(){
	$('.ad_download').css('top','-.5rem');
	$('.index_box,header').css('top','0');
})

$('.index_box').on('scroll',function(){
	if($('.index_box').scrollTop()>=100){
		$('header').css('background','rgba(224,39,24,.9)')
	}else if($('.index_box').scrollTop()==0){
		$('header').css('background','none')
	}
})