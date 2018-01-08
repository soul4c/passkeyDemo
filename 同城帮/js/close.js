// 切换城市，关闭切换城市
$('#changecity>.close').on('click',function(){
	$('#changecity').css('display','none');
});
$('#index-city>span:last-of-type').on('click',function(){
	if($('.city-box').css('display')=="block"){
		$('.city-box').css('display',"none")
	};
	if($('.province-box').css('display','block')){
		$('.province-box').css('display','none');
	};
	$('#changecity').css('display','block');
});
// 登录界面，关闭登录界面
$('#login').on("click",function(){
	$('#login-page').css('display',"block");
})
$('#login-box-top>.close').on('click',function(){
	$('#login-page').css('display','none');
});
// 登录确定按钮的样式转换
$('[name="login-btn"]').on('mousedown',function(){
	$('[name="login-btn"]').css('backgroundPosition','0 -160px')
});
$('[name="login-btn"]').on('mouseup',function(){
	$('[name="login-btn"]').css('backgroundPosition','0 -120px')
});
// 注册界面，关闭注册界面
$('#logup').on("click",function(){
	$('.logup-page').css('display',"block");
});
$('.logup-box-top>.close').on('click',function(){
	$('.logup-page').css('display','none');
});
// 排序方法切换
$('.shop-choose').on('click',function(){
	if($(this).attr('class') == "shops-title-change2 shop-choose"){
		
	}else{
		$('.shop-choose').each(function(){
			$('.shop-choose').prop('class',"shops-title-change shop-choose");
		})
		$(this).prop('class',"shops-title-change2 shop-choose");
	}
});
// 地图界面，关闭注册界面
$('#f3-map').on('click',function(){
	$('#map-page').css('display','block');
});
$('.map-box>p>.close').on('click',function(){
	$('#map-page').css('display','none');
});
// 店铺换页
$('.shops-ever-pages').on('click',function(){
	if($(this).prop('class') == "shops-ever-pages shops-pages-blur"){
		$('.shops-ever-pages').prop('class','shops-ever-pages shops-pages-blur');
		$(this).prop('class','shops-ever-pages shops-pages-focus');
	}
});
// 点击下一页换页
$('.shops-next-page').on('click',function(){
	// var focus=;
	if($('.shops-ever-pages').index($('.shops-pages-focus'))!=9){
		$('.shops-ever-pages').eq($('.shops-ever-pages').index($('.shops-pages-focus'))+1).prop('class','shops-ever-pages shops-pages-focus');
		$('.shops-ever-pages').eq($('.shops-ever-pages').index($('.shops-pages-focus'))).prop('class','shops-ever-pages shops-pages-blur');
	}else{
		alert("这已经是最后一页！");
	}
})
// 省份,市框出现，消失
$('.f3-province').on('click',function(){
	$('.province-box').css('display','block');
	if($('.city-box').css('display')=="block"){
		$('.city-box').css('display',"none")
	}
	if($('#changecity').css('display')=='block'){
		$('#changecity').hide();
	}
});
$('.province-box>.close').on('click',function(){
	$('.province-box').css("display","none");
});
$('.f3-city').on('click',function(){
	$('.city-box').css('display','block');
	if($('.province-box').css('display','block')){
		$('.province-box').css('display','none');
	};
	if($('#changecity').css('display')=='block'){
		$('#changecity').hide();
	}
})
$('.city-box>.close').on('click',function(){
	$('.city-box').css('display','none');
})

var mySwiper = new Swiper ('.swiper-container', {
	direction: 'horizontal',
	loop: true,

	// 如果需要分页器
	pagination: '.swiper-pagination',

	autoplay: 2000
})  




  	