<template>
 	<!-- 行程 -->
	<div class="route tab_link">
		<!-- 行程头部 -->
		<div class="route_head">
			<span></span>
			<p>行程</p>
			<span></span>
		</div>

		<!-- 行程主体 -->
		<div class="route_box">
			<!-- 行程主体顶部 -->
			<div class="route_top">
				<div class="route_top_por">
					<img src="../assets/all/photo_select_element_default_avatar.png">
				</div>
				<div class="route_top_login">登录查看行程</div>
				<p>或者探索一段新旅程</p>
			</div>
			<!-- 行程主体第一层 -->
			<div class="route_f1">
				<p class="route_tit">印象旧金山</p>
				<div class="route_textarea">
					与东海岸城市的高楼林立区隔，西海岸的闲适、明媚、舒坦在地中海气候的衬托下，显得轻盈、美妙、并且难能可贵。作为美国公路旅行的首选目的地，加州一号公路在太平洋与层层高山的包裹...
					<span></span>
				</div>
				<div class="route_list" v-for="item in xingcheng">
					<img :src="item.DisplayImg">
					<p class="route_list_tit">{{item.Title}}</p>
					<p class="route_list_text">{{item.Citys}}</p>
					<p class="route_list_type"><span>玩法</span><span>{{item.RecommendNumber}}</span>人已读</p>
				</div>

				<!-- <div class="route_list">
					<img src="../assets/all/ic_alitrip_default_240_240.png">
					<p class="route_list_tit">一路阳光一路海|一号公路5日自驾</p>
					<p class="route_list_text">与东海岸城市的高楼林立区隔，西海岸的闲适、明媚、舒坦在地中海气候的衬托下，显得轻盈、美妙、并且难能可贵。</p>
					<p class="route_list_type"><span>玩法</span><span>8256</span>人已读</p>
				</div>

				<div class="route_list">
					<img src="../assets/all/ic_alitrip_default_240_240.png">
					<p class="route_list_tit">一路阳光一路海|一号公路5日自驾</p>
					<p class="route_list_text">与东海岸城市的高楼林立区隔，西海岸的闲适、明媚、舒坦在地中海气候的衬托下，显得轻盈、美妙、并且难能可贵。</p>
					<p class="route_list_type"><span>玩法</span><span>8256</span>人已读</p>
				</div>

				<div class="route_list">
					<img src="../assets/all/ic_alitrip_default_240_240.png">
					<p class="route_list_tit">一路阳光一路海|一号公路5日自驾</p>
					<p class="route_list_text">与东海岸城市的高楼林立区隔，西海岸的闲适、明媚、舒坦在地中海气候的衬托下，显得轻盈、美妙、并且难能可贵。</p>
					<p class="route_list_type"><span>玩法</span><span>8256</span>人已读</p>
				</div> -->


				<div class="route_list_bot">探索更多<span></span></div>
			</div>

			<div class="route_bot">
				<p>世界这么大，早点去看看</p>
			</div>

		</div>
	</div>
<!-- 行程end -->
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
     	xingcheng:[]
    }
  },
  created(){
  	this.$http("../../static/xingcheng.json").then((res)=>{
  		this.xingcheng = res.data.LogArticleList
  		console.log(this.xingcheng)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*行程*/
.route{
	position: fixed;
	top: 0;
	bottom: .48rem;
	left: 0;
	width: 100%;
	overflow: auto;
	padding-top: .45rem;
}
.route_head{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: .45rem;
	background: #ffc900;
}
.route_head>span:first-of-type{
	position: absolute;
	top: .1rem;
	left: .13rem;
	height: .24rem;
	width: .24rem;
	background: url(../assets/route/历史行程.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.route_head>span:last-of-type{
	position: absolute;
	top: .1rem;
	right: .11rem;
	height: .24rem;
	width: .24rem;
	background: url(../assets/route/xiaoxi.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.route_head>p{
	height: .45rem;
	line-height: .45rem;
	text-align: center;
	font-size: .16rem;
	color: #4b3324;
}
.route_box{
	position: absolute;
	top: .45rem;
	left: 0;
	bottom: 0;
	width: 100%;
	overflow: auto;
}
/*行程主体顶部*/
.route_top{
	height: 1.75rem;
	width: 100%;
	background: url(../assets/route/bg.jpg) 0 0 no-repeat;
	background-size: 100% 100%;
	position: relative;
	padding-top: 0.1px;
}
.route_top_por{
	height: .45rem;
	width: .45rem;
	background: #fff;
	border-radius: 50%;
	position: absolute;
	top: .13rem;
	left: 1.65rem;
}
.route_top_por>img{
	border-radius: 50%;
	height: .39rem;
	width: .39rem;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
.route_top_login{
	height: .32rem;
	width: 1.4rem;
	border-radius: .16rem;
	background: #feca00;
	text-align: center;
	line-height: .32rem;
	font-size: .14rem;
	color: #653f0a;
	position: absolute;
	top: .74rem;
	left: 1.17rem;
}
.route_top>p{
	text-align: center;
	color: #707070;
	font-size: .12rem;
	line-height: .18rem;
	margin-top: 1.47rem;
}
.route_f1{
	width: 100%;
	position: relative;
}
.route_tit{
	font-size: .18rem;
	height: .59rem;
	line-height: .59rem;
	color: #1e1e1e;
	text-align: center;
	font-weight: bold;
}
.route_textarea{
	height: .93rem;
	width: 3.31rem;
	border: solid 2px #f6f6f6;
	margin: 0 auto;
	position: relative;
	line-height: .15rem;
	font-size: .12rem;
	padding: .15rem .25rem;
	color: #969696;
	margin-bottom: .18rem;
}
.route_textarea>span{
	width: .2rem;
	height: .2rem;
	display: block;
	position: absolute;
	top: -.14rem;
	left: -.12rem;
	background: url(../assets/route/双引号.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.route_list{
	width: 3.31rem;
	height: .86rem;
	margin: 0 auto;
	position: relative;
	padding-right: .08rem;
}
.route_list>img{
	width: .61rem;
	height: .61rem;
	float: left;
	margin-right: .08rem;
}
.route_list>p{
	white-space: nowrap;
	overflow: hidden;
	text-overflow:ellipsis;
}
.route_list_tit{
	font-size: .14rem;
	line-height: .2rem;
	height: .2rem;
	color: #565656;
}
.route_list_text{
	font-size: .12rem;
	line-height: .16rem;
	height: .16rem;
	color: #a0a0a0;
	margin-bottom: .1rem;
}
.route_list_type>span:first-of-type{
	font-size: .1rem;
	height: .15rem;
	width: .29rem;
	display: block;
	border-radius: 3px;
	float: left;
	margin-right: .05rem;
	border: solid 1px #d4d4d4;
	text-align: center;
	line-height: .13rem;
	color: #b4b4b4;
}
.route_list_type>span:last-of-type{
	color: #b4b4b4;
}
.route_list_type{
	font-size: .1rem;
	color: #b4b4b4;
	height: .15rem;
	line-height: .15rem;
}
.route_list_bot{
	height: .57rem;
	line-height: .57rem;
	width: 100%;
	text-align: center;
	font-size: .17rem;
	color: #ffc111;
	border-top: 2px solid #fafafa;
	position: relative;
}
.route_list_bot>span{
	 width: .1rem;
	 height: .1rem;
	 display: block;
	 border-top: 1px solid #ffc111;
	 border-right: 1px solid #ffc111;
	 transform:rotate(45deg);
	 position: absolute;
	 top: .24rem;
	 right: 1.47rem;
}
.route_bot{
	height: 1.15rem;
	width: 100%;
	padding-top: 0.1px;
	background: url(../assets/route/bg.jpg) 0 0 no-repeat;
	background-size: 100% auto;
}
.route_bot>p{
	text-align: center;
	margin-top: .16rem;
	color: #fff;
	font-size: .11rem;
}
</style>
