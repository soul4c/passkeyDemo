<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script type="text/javascript" src="js/jquery-1.11.2.js"></script>
	<title></title>
</head>
<body>
	<input type="text" id = "cityCode">
	<input type="button" id = "search" value="查询">
	<p></p>
</body>
<script type="text/javascript">

  	$('.index-citynames').on('click',function(){
		//创建是js标签
		var script = document.createElement("script");
		//回调函数名
		var fnName = "fn" + Number(new Date);
		//设置请求url
		var cityCode = $(this).prop('code') || "bei_jing";
		var url = "http://bang.360.cn/aj/get_area/?citycode=" + cityCode+ "&callback=" + fnName;
		script.src = url;
		//追加到页面
		document.head.appendChild(script);

		window[fnName] = function(data){
			var str = "";
			for(var n in data.result){
				str += data.result[n] + " ";aq
			}
			document.getElementsByTagName("p")[0].innerHTML = str;
			//销毁一次性对像
			document.head.removeChild(script);
			delete window[fnName];
		}
	});

	//创建回调函数
	function showCity(data){
		var str = "";
		for(var n in data.result){
			var span = $('<span>'+'data.result[n]'+'</span>');
			$('.city-area').append(span)
		}
	}


	$.ajax({
		url: "http://bang.360.cn/aj/get_area/",
		data: {
			citycode: "bei_jing"
		},
		dataType: "jsonp",
		success: function(data){
			console.log(data);
		}
	});
</script>
</html>