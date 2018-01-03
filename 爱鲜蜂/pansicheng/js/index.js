var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}


// tab页面切换
var tablist=[{
	focus:"img/index2.png",
	blur:"img/index.png"
},{
	focus:"img/market2.png",
	blur:"img/market.png"
},{
	focus:"img/shopcar2.png",
	blur:"img/shopcar.png"
},{
	focus:"img/main2.png",
	blur:"img/main.png"
}]
$('.tablist').on('click',function(){
	// console.log(tablist[$(this).index()])
	$('.tab_index').children('span').css({'background':'url('+tablist[$('.tab_index').index()].blur+') 0 0 no-repeat','background-size':"100% 100%"});

	$('.tab_market').children('span').css({'background':'url('+tablist[$('.tab_market').index()].blur+') 0 0 no-repeat','background-size':"100% 100%"});

	$('.tab_shopcar').children('span').css({'background':'url('+tablist[$('.tab_shopcar').index()].blur+') 0 0 no-repeat','background-size':"100% 100%"});

	$('.tab_main').children('span').css({'background':'url('+tablist[$('.tab_main').index()].blur+') 0 0 no-repeat','background-size':"100% 100%"});

	$(this).children('span').css({'background':'url('+tablist[$(this).index()].focus+') 0 0 no-repeat','background-size':"100% 100%"});

	$('.tab_link').eq($(this).index()).show().siblings('.tab_link').hide();

	$(this).index()>1?$('header').hide():$('header').show();
})


// 闪送超市切换页部分
$('.market_box:first').show().siblings().hide();
$('.market_left>ul>li').on('click',function(){
	$(this).children('span').addClass('market_left_focus').parent('li').siblings().children('span').removeClass('market_left_focus');
	$('.market_box').eq($(this).index()).show().siblings().hide();
})


// 去逛逛
$('.shopcar_nothing>span').on('click',function(){
	$('.index').show().siblings('.tab_link').hide();


	$('.tab_index').children('span').css({'background':'url('+tablist[$('.tab_index').index()].focus+') 0 0 no-repeat','background-size':"100% 100%"});

	$('.tab_shopcar').children('span').css({'background':'url('+tablist[$('.tab_shopcar').index()].blur+') 0 0 no-repeat','background-size':"100% 100%"});
	$('header').show();
})


// index懒加载
$('img.lazy').lazyload({
	placeholder:'img/product_default-5fa101a5.png',
	container: $(".tab_link"),
	effect: 'fadeIn',
	threshold: 200
})
$('img.lazy').lazyload({
	placeholder:'img/product_default-5fa101a5.png',
	container: $(".market_right"),
	effect: 'fadeIn',
	threshold: 200
})