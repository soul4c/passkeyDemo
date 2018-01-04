var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}


// 滚动褪色/上色
$('.details_box').on('scroll',function(){
	$('.details_head>div').css('backgroundColor',"rgba(255,255,255,"+ (0.9-($('.details_box').scrollTop()/300)) +")")
	$('.details_head').css('backgroundColor',"rgba(255,211,0," + ($('.details_box').scrollTop()/300) + ")")
	$('.details_box').scrollTop()>=300?$('.details_head>span').show():$('.details_head>span').hide();
})


// 返回上一页
$('.details_head_back').on('click',function(){
	window.location.href="../index.html";
})