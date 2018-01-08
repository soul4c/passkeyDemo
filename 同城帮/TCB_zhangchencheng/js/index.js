//头部城市列表点击事件
$('.cCity').on("click",function(){
	$(".searchcity").show().css({
		left:'50%',
		top:'32px',
		transform:"translateX(-600px)"
	});
	
})
$("#main5t1").on("click",function(){
	$(".searchcity").show().css({
		top:'1487px',
		left:'50%',
		transform:"translateX(-600px)"
	});
})


$('.switch2').on('click',function(e){
	// e.stopPropagation();
	$('.searchcity,.qlist').hide();
})

// 登录点击事件
$('.lLabol2').on('click',function(){
	$('.zz,.msign').show();
	// $().show();
});
// 注册关闭
$('.lLabol').on('click',function(){
	$('.zz,.login').show();
});
// 登录和注册关闭事件
$('.close').on('click',function(){
	$('.login,.zz,.msign').hide();
})


// 地图点击事件
$(".mapb").on("click",function(){
	$('.zz,.map').show();
})
//地图关闭事件
$('.cmap').on('click',function(){
	$('.zz,.map').hide();
})


//热门手机回收
$.ajax({
	url:"/doGetHotHSList",
	type:"get",
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn: 0,
		pagesize: 5		
	},
	success:function(data){
		$.ajax({
			url:"tmps/hotphone.html",
			dataType:"text",
			success:function(tmp){
				$('#HotHSList').html(baidu.template(tmp,data));	
			}
		})
	}
})


//优品精选
$.ajax({
	url:"/dogethotlist",
	type:"get",
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn: 0,
		pagesize: 5		
	},
	success:function(data){
		$.ajax({
			url:"tmps/youpin.html",
			dataType:"text",
			success:function(tmp){
				$('#hotlist').html(baidu.template(tmp,data));	
			}
		})
	}
})

// banner导航栏菜单
//修手机
$.ajax({
	url:"/aj_get_fault_group",
	type:"get",
	dataType:'json',
	success:function(data){
		$.ajax({
			url:"tmps/fixPhone.html",
			dataType:"text",
			success:function(tmp){
				$('.content1').html(baidu.template(tmp,data));	
			}
		})
	}
})
//修电脑
$.ajax({
	url:"/doGetPcFaultList",
	type:"get",
	dataType:'json',
	success:function(data){
		$.ajax({
			url:"tmps/fixPc1.html",
			dataType:"text",
			success:function(tmp){
				$('.content21').html(baidu.template(tmp,data));	
			}
		})
	}
})
$.ajax({
	url:"/doGetPcFaultList",
	type:"get",
	dataType:'json',
	success:function(data){
		$.ajax({
			url:"tmps/fixPc2.html",
			dataType:"text",
			success:function(tmp){
				$('.content22').html(baidu.template(tmp,data));	
			}
		})
	}
})
//买手机
$.ajax({
	url:"/huishou/dogetpinpailist",
	type:"get",
	dataType:'json',
	success:function(data){
		$.ajax({
			url:"tmps/buyPhone.html",
			dataType:"text",
			success:function(tmp){
				$('.content3').html(baidu.template(tmp,data));	
			}
		})
	}
})
//卖手机
$.ajax({
	url:"/youpin/dogetpinpailist",
	type:"get",
	dataType:'json',
	success:function(data){
		$.ajax({
			url:"tmps/sellPhone.html",
			dataType:"text",
			success:function(tmp){
				$('.content4').html(baidu.template(tmp,data));	
			}
		})
	}
})









// 城市列表(头部)
$.ajax({
	url:"/getcitycode",
	type:"get",
	dataType:"json",
	success:function(data){
		$('.hcity2').html(baidu.template("hotcity1",data));
		$('.hcity4').html(baidu.template("hotcity2",data));
		$('.hcity42').hide();
		$('.hcity42:first-of-type').show();
		$(".hcity41>li:first-of-type").prop("class","clickStyle");

		$(".hcity41>li").on("click",function(){
			$(".hcity41>li").removeClass("clickStyle");
			$(this).prop("class","clickStyle");
			$('.hcity42').css("display","none");
			$(".hcity42").eq($(this).index()).css("display","block");
		});
	}
})

	//生成页码
	function pageUtil(pageId,currPage,totalNum,callback){
		//初始化左右功能按钮
		var btns = '<a href="javascript:void(0)">首页</a>'
					+'<a href="javascript:void(0)">上一页</a>'
					+'<a href="javascript:void(0)">下一页</a>'
					+'<a href="javascript:void(0)">尾页</a>';
		//页面生成功能按钮
		$("#"+pageId).html(btns);
		//显示页码起始值
		var startNum = currPage >5 ?currPage-1:1;
		//页码
		var pageStr = "";
		for(var n = 0; n<10 && startNum <= totalNum; n++){
			if (currPage == startNum) {
				pageStr += '<a class="red" href="javascript:void(0)">'+ (startNum++) +'</a>'
			}else{
				pageStr += '<a href="javascript:void(0)">'+ (startNum++) + '</a>';
			}
		}
		//插入页码
		$("#"+pageId).find("a:eq(1)").after(pageStr);

		//添加功能按钮和其他按钮事件处理
		$("#"+pageId).off("click").on("click", "a", function(){
			var btn = $(this).text();
			switch(btn){
				case "首页":
					pageUtil(pageId, 1, totalNum, showShopList);
					break;
				case "上一页":
					pageUtil(pageId, currPage-1, totalNum, showShopList);
					break;
				case "下一页":
					pageUtil(pageId, currPage+1, totalNum, showShopList);
					break;
				case "尾页":
					pageUtil(pageId, totalNum, totalNum, showShopList);
					break;
				default: 
					pageUtil(pageId, parseInt(btn), totalNum, showShopList);
					break;
			}
		});

		//执行回调函数
		callback && callback(currPage-1)
	}


// 点击城市区县联动
	$(".hcity2,.hcity4").on("click","a",function(e){
		//阻止默认程序
		event.preventDefault;
		//点击城市列表更改前面名字，将点击的code赋值给提示文字span
		$(".sct").text($(this).text()).attr('code',$(this).attr('code'));//header的span
		$(".sct2").text($(this).text()).attr('code',$(this).attr('code'));//中间的span
		// $(".sct2").attr("code",$(this).attr("code"));
		$(".sct3").text("选择区县");
		e.stopPropagation();
		$('.searchcity').hide();
		$('.qlist').hide();

		//向区县列表添加名字
		var script = $('<script></script>')
		var fnName = "fn"+Number(new Date);
		var cityCode = $(".sct2").attr("code");
		var url = "http://bang.360.cn/aj/get_area/?citycode=" + cityCode + "&callback="+fnName;
		script.src = url;
		$("head").append(script);
		window[fnName] = function(data){
			$.ajax({
				url:"http://bang.360.cn/aj/get_area/",
				dataType:"jsonp",
				data:{
					citycode:cityCode,
				},
				success:function(data){
					// console.log(data);
					$(".ccdetail").html(baidu.template("addqx",data))
				}
			})

		}

		//获取店铺页面更新并且获取数据总数
		$.ajax({
			url:"/shop",
			type:"get",
			dataType:"json",
			data:{
				city_id: $(".sct2").attr('code'),
				pn: 0,
				pagesize: 5		
			},
			success:function(data){
				$('#shopInfo').html(baidu.template("info",data));
				pageUtil("page",1,Math.ceil(data.page_count/5));
			}
		});
	})

	//查询店铺
	function showShopList(pn){
		$.ajax({
			url:"/shop",
			type:"get",
			dataType:"json",
			data:{
				city_id: $(".sct2").attr('code'),
				area_id:$(".sct3").attr('area'),
				pn: pn || 0,
				pagesize: 5		
			},
			success:function(data){
				$("#shopInfo").html(baidu.template(("info"),data));

			}
		});

	}


//点击显示区县信息
$("#main5t2").on("click",function(){
	$(".qlist").show();
	$.ajax({
		url:"http://bang.360.cn/aj/get_area/",
		dataType:"jsonp",
		data:{
			citycode: $(".sct2").attr("code")
		},
		success:function(data){
			// console.log(data);
			$(".ccdetail").html(baidu.template("addqx",data))
		}
	})

})


//默认店铺信息
$.ajax({
	url:"/shop",
	type:"get",
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn: 0,
		pagesize: 5		
	},
	success:function(data){
		$('#shopInfo').html(baidu.template("info",data));
		pageUtil("page",1,Math.ceil(data.page_count/5));
	}
})


//点击区县更新商铺信息
$('.ccdetail').on('click','a',function(){
	$('.sct3').text($(this).text()).attr("area",$(this).attr('area'));
	$(".qlist").hide();
	$.ajax({
		url:"/shop",
		type:"get",
		dataType:"json",
		data:{
			city_id: $('.sct2').attr('code'),
			area_id: $('.sct3').attr('area'),
			pn: 0,
			pagesize: 5		
		},
		success:function(data){
			$('#shopInfo').html(baidu.template('info',data));
			pageUtil("page",1,Math.ceil(data.page_count/5));
		}
	})
})



