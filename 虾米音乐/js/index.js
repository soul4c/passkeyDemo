var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}

// 唱片效果函数
	var deg = 0;
	function disc (){
		deg++;
		$('.music_page_body_player').css('transform','rotate('+deg+'deg)');
		$('.music_page_body_player>div').css('transform','rotate(-'+deg+'deg)');
	}
// 获取音频文件
var player = document.getElementById('player');
// 底部音乐播放暂停按钮
$('#tomusic_play').on('click',function(){
	if($(this).prop('class')=='tomusic_play'){
		$(this).prop('class','tomusic_pause');
		// $('#player').attr('pause');
		player.play();
		return false;
	}else{
		$(this).prop('class','tomusic_play');
		// $('#player').attr('play');
		player.pause();
		return false;
	}	

	if($('.music_page_body_player>div').prop('class')=='music_page_body_player_pause'){
		$('.music_page_body_player>div').prop('class','music_page_body_player_play');
		//player.play();
		time=setInterval(disc,50);	

	}else if($('.music_page_body_player>div').prop('class')=='music_page_body_player_play'){
		$('.music_page_body_player>div').prop('class','music_page_body_player_pause');
		//player.pause();
		clearInterval(time),function(){
			time=setInterval(disc,50);
		}
	}
})

// 阻止download冒泡事件
$('.tomusic_download').on('click',function(){
	return false;
})

// 打开音乐页面
$('.tomusic').on('click',function(){
	$('.music').slideDown(70);
})
// 关闭音乐界面
$('.music_title>a').on('click',function(){
	$('.music').hide();
})




// 音乐页面点图片播放暂停
	var time=0;
$('.music_page_body_player').on('click',function(){
	clearInterval(disc);
	if($('.music_page_body_player>div').prop('class')=='music_page_body_player_pause'){
		$('.music_page_body_player>div').prop('class','music_page_body_player_play');
		player.play();
		time=setInterval(disc,50);
		

	}else if($('.music_page_body_player>div').prop('class')=='music_page_body_player_play'){
		$('.music_page_body_player>div').prop('class','music_page_body_player_pause');
		player.pause();
		clearInterval(time),function(){
			time=setInterval(disc,50);
		}
	}


	if($('#tomusic_play').prop('class')=='tomusic_play'){
		$('#tomusic_play').prop('class','tomusic_pause');
		// $('#player').attr('pause');
		player.play();
		// return false;
	}else{
		$('#tomusic_play').prop('class','tomusic_play');
		// $('#player').attr('play');
		player.pause();
		// return false;
	}
})

// 收藏
$('.music_collect').on('click',function(){
	if($(this).css('opacity')=='0.5'){
		$(this).css('opacity','1')
	}else if($(this).css('opacity')=='1'){
		$(this).css('opacity','0.5')
	}
})


// TAB页切换
var div_arr = $('.body_box>div');
$('nav>div').on('click',function(){
	$(this).addClass('nav_focus').siblings().removeClass('nav_focus');
	$(div_arr[parseInt( $(this).prop('id') )]).show().siblings().hide();	
	
})