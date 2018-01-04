var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}

$('.index_body').on('scroll',function(){
	if($(this).scrollTop()>=150){
		$('header').css({'background':"#39bc30"})
	}else{
		$('header').css({'background':"none"})
	}
	// console.log($(this).scrollTop())
})

$('.close').on('click',function(){
	$('.download').hide();
})