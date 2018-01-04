var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth/375;
document.documentElement.style.fontSize = per*100 +'px';
window.onresize = function(){
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
		// 计算比例
		var per = clientWidth / 375;
		document.documentElement.style.fontSize = per*100 + "px"
	}



// 加载中
var loading=document.getElementsByClassName('loading')[0];
document.onreadystatechange=function(){
	if(document.readyState=="complete"){
		loading.style.display="none";
	}
}



// 懒加载
$('img.lazy').lazyload({
	container: $(".tab_link"),
	effect: 'fadeIn',
	threshold: 200
})
$("img").lazyload({
	container:$(".headPage_like_list")
})
// tab页切换

$('.tab_link').eq(0).show().siblings('.tab_link').hide();
$("footer div").on("click",function(){
var srcs = ["img/-首页.png","img/-发现.png","img/_目的地.png","img/-行程.png","img/-我的.png","img/-首页1.png","img/发现1.png","img/_目的地1.png","img/-行程1.png","img/-我的1.png"]
	var index = $(this).index();//获取点击的图标的下标
	$('.tab_link').eq(index).show().siblings('.tab_link').hide();//对应的版块显示其他的隐藏
	//图标的更改
	// console.log(srcs[index+5])
	for(var n=0;n<=4;n++){
		$("footer div img").eq(n).attr('src',srcs[n])
	}
	$(this).find("img").attr('src',srcs[index+5]);

})

// 目的地热门必去样式切换
$('.bourn_hotbego_nav>div:first').addClass('bourn_hotbego_nav_focus').siblings().removeClass('bourn_hotbego_nav_focus');
$('.bourn_hotbego_nav>div').on('click',function(){
	$(this).addClass('bourn_hotbego_nav_focus').siblings().removeClass('bourn_hotbego_nav_focus');
})

// 目的地特惠路线样式切换
$('.bourn_road_nav>div:first').addClass('bourn_road_nav_focus').siblings().removeClass('bourn_road_nav_focus');
$('.bourn_road_nav>div').on('click',function(){
	$(this).addClass('bourn_road_nav_focus').siblings().removeClass('bourn_road_nav_focus');
})
// 点击出现搜索页
$(".headPage header input").on("click",function(){
	$(".headPage,footer").hide();
	$(".search").show();
})
//搜索页切换
 $(".searchhead_left_choice1").on("click",function(){
 	$(this).hide().siblings().show();
 })
 //取消返回首页
 $(".searchhead_right").on("click",function(){
	$(".headPage,footer").show();
	$(".search").hide();
})



//点击出现搜索页
$(".myInfo_body_order li").on('click',function(){
	$(".order").show();
	$(".myInfo,footer").hide();
	var index = $(this).index();
	$(".orderInner").eq(index).show().siblings().hide();
	$(".orderNav span").eq(index).addClass('changeColor').parent().siblings().find('span').removeClass();
})
//点击取消订单页
$(".orderHead").on("click",function(){
	$('.order').hide();
	$('.myInfo,footer').show();
})
 // 订单页切换
 $(".orderNav span").on("click",function(){
 	$(this).addClass('changeColor').parent().siblings().find('span').removeClass();
 	var index = $(this).parent().index();
 	$(".orderInner").eq(index).show().siblings().hide();
 })
//点击出现筛选框
$(".orderList span").on("click",function(){
 	$(".orderCancel,.cover").show()	
})

 //刷选订单面
 $(".orderCancel a").on('click',function(){
 	$(this).addClass("change");
 })

 $(".orderCancel b").on("click",function(){
 	$(".orderCancel a").removeClass("change");
 })
  $(".orderCancel .span1,.orderCancel .span2").on("click",function(){
 	$(".orderCancel,.cover").hide()
 })

  //购物车
$('.shopcar').on('click',function(){
  	$('.shopCar').show();
  	$('.myInfo,footer').hide();
  })
$('.shopCar p').on('click',function(){
  	$('.shopCar').hide();
  	$('.myInfo,footer').show();
  })


// 跳转详情页

$('.headerPage_sell_1,.headerPage_sell_2,.headerPage_sell_3,.headPage_like_list_left>li,.bourn_hotbego_list,.bourn_beplay>table td,.bourn_road_list').on('click',function(){
	window.location.href="html/details.html"
})

// 目的地跳转

$('.bourn_hotbego_list,bourn_banners>div,.bourn_beplay td,.bourn_road_list').on('click',function(){
	window.location.href="html/details.html"
})

//点击进入目的地选择界面

$(".headerIcon_3").on("click",function(e){
	e.stopPropagation();
	$(".purpose").show();
	$(".headPage,footer").hide();
})
//点击返回首页
$(".purposeHead_close").on("click",function(){
	$(".purpose").hide();
	$(".headPage,footer").show();	
})

// 理想地点正文
var srcs = ["img/TB2WD5nrVXXXXb8XpXXXXXXXXXX_!!669272-0-travel.jpg","img/TB2Aq_brVXXXXXxXXXXXXXXXXXX_!!669272-0-travel.jpg","img/TB2ZzvXrVXXXXadXXXXXXXXXXXX_!!0-travel.jpg","img/TB2Ma99rVXXXXXUXXXXXXXXXXXX_!!669272-0-travel.jpg","img/TB2Yq15rVXXXXbgXXXXXXXXXXXX_!!0-travel.jpg","img/TB2K_n0sFXXXXckXpXXXXXXXXXX_!!0-travel.jpg","img/TB24jKkrVXXXXbOXpXXXXXXXXXX_!!669272-0-travel.jpg","img/TB2rEyHrVXXXXaRXpXXXXXXXXXX_!!0-travel.jpg"];
for(n=0;n<$(".purposeBody_main_1 li").length;n++){
	$(".purposeBody_main_1 li").eq(n).css({
		background:"url("+srcs[n]+") center center no-repeat",
		backgroundSize:"100%"
		// background:"red"
	})
}


