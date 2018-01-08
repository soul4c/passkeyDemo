$.ajax({
	url:'/shop',
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn:0,
		pagesize:5
	},
	success:function(data){
		$('#shops-lists').html(baidu.template("shops",data));
	}
});
$.ajax({
	url:'/shop',
	dataType:"json",
	data:{
		city_id:"bei_jing",
		pn:0,
		pagesize:7
	},
	success:function(data){
		$('#rankingshops').html(baidu.template("ranking",data));
	}
});
$.ajax({
	url:"/aj_get_fault_group",
	dataType:"json",
	success:function(data){
		$('.bnav1>table').html(baidu.template("fixtel",data));
	}
});
$.ajax({
	url:"/doGetPcFaultList",
	dataType:"json",
	success:function(data){
		$('#bnav2-top>div').html(baidu.template("bnav2hot",data));
	}
});
$.ajax({
	url:"/doGetPcFaultList",
	dataType:"json",
	success:function(data){
		$(".bnav2-bot>div").html(baidu.template("bnav2other",data));
	}
});
$.ajax({
	url:"/dogetpinpailist",
	dataType:"json",
	success:function(data){
		$('.bnav3-bod').html(baidu.template("bnav3phone",data));
	}
});
$.ajax({
	url:"/youpin/dogetpinpailist",
	dataType:"json",
	success:function(data){
		$(".bnav4-bod").html(baidu.template("bnav4phone",data));
	}
});
$.ajax({
	url:"/doGetHotHsList",
	dataType:"json",
	success:function(data){
		$(".f2-floor1>ul").html(baidu.template("phonereturn",data));
	}
});
$.ajax({
	url:"/dogethotlist",
	dataType:"json",
	success:function(data){
		$(".f2-floor2>ul").html(baidu.template("youpin",data));
	}
});
$.ajax({
	url:"/getcitycode",
	dataType:"json",
	success:function(data){
		$('.city-hot>div').html(baidu.template("cityhotlist",data));
		$('.city-group').html(baidu.template("citynamelist",data));

		$('.index-citynames').on('click',function(){
			$('#index-city>span:first-of-type').text($(this).text());
			$('.f3-province').text($(this).text());
			$('#changecity').css('display','none');
		});

		$('.index-citynames2').on('click',function(){
			$('#index-city>span:first-of-type').text($(this).text());
			$('.f3-province').text($(this).text());
			$('#changecity').css('display','none');
		});

		$('.city-group>p>span:first-of-type').prop("class","city-group-focus")

		
		$('.city-group>div').css('display','none')
		$('.city-group>div:first-of-type').css('display','block');



		$('.city-group>p>span').on('click',function(){
			$('.city-group>p>span').prop("class","city-group-blur");
			$(this).prop("class","city-group-focus");
			$('.city-group>div').hide();
			$('.city-group>div').eq($(this).index()).show();
			$('.city-group2>div').eq($(this).index()).show();
		});

	}
});
$.ajax({
	url:"/getcitycode",
	dataType:"json",
	success:function(data){
		$('.city-hot2>div').html(baidu.template("cityhotlist2",data));
		$('.city-group2').html(baidu.template("citynamelist2",data));

		$('.index-citynames').on('click',function(){
			$('#index-city>span:first-of-type').text($(this).text()).attr('code',$(this).attr('code'));
			$('.f3-province').text($(this).text()).attr('code',$(this).attr('code'));
			$('.province-box').css('display','none');
		});

		$('.index-citynames2').on('click',function(){
			$('#index-city>span:first-of-type').text($(this).text()).attr('code',$(this).attr('code'));
			$('.f3-province').text($(this).text()).attr('code',$(this).attr('code'));
			$('.province-box').css('display','none');
		});


		$('.city-group2>p>span:first-of-type').prop("class","city-group-focus")

		
		$('.city-group2>div').css('display','none')
		$('.city-group2>div:first-of-type').css('display','block');



		$('.city-group2>p>span').on('click',function(){
			$('.city-group2>p>span').prop("class","city-group-blur");
			$(this).prop("class","city-group-focus");
			$('.city-group2>div').hide();
			// $('.city-group>div').eq($(this).index()).show();
			$('.city-group2>div').eq($(this).index()).show();
		});

	}
});






$('.index-citynames,.index-citynames2').on('click',function(e){
		e.stopPropagation();
  		event.preventDefault;
		//创建是js标签
		var script = $('<script></script>');
		//回调函数名
		var fnName = "fn" + Number(new Date);
		//设置请求url
		var cityCode = $('.f3-province').attr('code') || "bei_jing";
		var url = "http://bang.360.cn/aj/get_area/?citycode=" + cityCode+ "&callback=" + fnName;
		script.src = url;
		//追加到页面
		$('head').append(script);

		window[fnName] = function(data){
			$.ajax({
				url:"http://bang.360.cn/aj/get_area/",
				dataType:'jsonp',
				data:{
					citycode:cityCode
				},
				cuccess:function(data){
					$('.city-area').html(baidu.template('cityinner',data))
				}
			})
		}
	// 	$.ajax({
	// 		url:'/shop',
	// 		type:'get',
	// 		dataType:"json",
	// 		data:{
	// 			city_id:$('.f3-province').attr('code') || "bei_jing",
	// 			pn:0,
	// 			pagesize:5
	// 		},
	// 		success:function(data){
	// 			$('#shops-lists').html(baidu.template("shops",data));
	// 		}
	// 	});
	});	
	
	function showShopList(pn){
		$.ajax({
			url:"/shop",
			type:"get",
			dataType:"json",
			data:{
				city_id: $(".f3-province").attr('code'),
				area_id:$(".city-box>p").attr('area'),
				pn: pn || 0,
				pagesize: 5		
			},
			success:function(data){
				$('#shops-lists').html(baidu.template("shops",data))

			}
		})

	}


	// $.ajax({
	// 	url:"http://bang.360.cn/aj/get_area/",
	// 	dataType:"jsonp",
	// 	data:{
	// 		citycode: $(".f3-province").attr("code")
	// 	},
	// 	success:function(data){
	// 		console.log(data);
	// 		$(".city-area").html(baidu.template("cityinner",data))
	// 	}
	// })




	$(".f3-city").on("click",function(){
		$.ajax({
			url:"http://bang.360.cn/aj/get_area/",
			dataType:"jsonp",
			data:{
				citycode: $(".f3-province").attr("code")
			},
			success:function(data){
				// console.log(data);
				$(".city-area").html(baidu.template("cityinner",data))
			}
		})

	})





	// $.ajax({
	// 	url:"/shop",
	// 	type:"get",
	// 	dataType:"json",
	// 	data:{
	// 		city_id:"bei_jing",
	// 		pn: 0,
	// 		pagesize: 5		
	// 	},
	// 	success:function(data){
	// 		$('#shopInfo').html(baidu.template("info",data));
	// 		pageUtil("page",1,Math.ceil(data.page_count/5));
	// 	}
	// })

	//创建回调函数
	// function showCity(data){
	// 	for(var n in data.result){
	// 		var span = $('<span>'+data.result[n]+'</span>');
	// 		$('.city-area').append(span)
	// 	}
	// }


	// $.ajax({
	// 	url: "http://bang.360.cn/aj/get_area/",
	// 	data: {
	// 		citycode: "bei_jing"
	// 	},
	// 	dataType: "jsonp",
	// 	success: function(data){
	// 		console.log(data);
	// 	}
	// });
