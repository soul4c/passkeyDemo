<template>
 	<!-- 我的 -->
	<div class="myInfo tab_link">
		<div class="myInfo_head">
			<img src="../assets/设置.png" alt="" class="myInfo_head_shezhi">
			<img src="../assets/-消息1.png" alt="" class="myInfo_head_xiaoxi">
		</div>
		<div class="myInfo_body">
			<div class="myInfo_body_top">
				<div class="myInfo_body_top_info">
					<p>我是小透明</p>
					<p>f1会员</p>
				</div>
				<div class="myInfo_body_mencenter">
					<p>会员中心</p>
					<p>经验值0</p>
				</div>
			</div>
			<div class="myInfo_body_order">
				<ul>
					<li><img src="../assets/-订单.png" alt="">全部订单</li>
					<li><img src="../assets/-订单 待付款.png" alt="">待付款</li>
					<li><img src="../assets/-订单 处理中.png" alt="">处理中</li>
					<li><img src="../assets/-订单 已成功.png" alt="">已成功</li>
				</ul>
			</div>
			<div class="myInfo_body_miles">
				<div class="myInfo_body_miles_top">
					<p class="myInfo_body_miles_top_1">里程商城<span>100</span></p>
					<p class="myInfo_body_miles_top_2">今日签到可<span>+1</span>里程 <span>签到</span></p>
				</div>
				<div class="myInfo_body_miles_bottom">
					<img src="../assets/未标题-1.jpg" alt="">
				</div>
			</div>
			<!-- 我的工具 -->
			<div class="myInfo_body_tools">
				<h2><span>常用工具</span></h2>
				<ul class="myInfo_body_tools_spc">
					<li><img src="../assets/-红包.png" alt="">红包优惠券</li>
					<li><img src="../assets/wifi电话卡.png" alt="">流量中心</li>
					<li><img src="../assets/-收藏.png" alt="">我的收藏</li>
					<li class="shopcar"><img src="../assets/-购物车.png" alt="">购物车</li>
					<li><img src="../assets/-常用信息.png" alt="">常用信息</li>
					<li><img src="../assets/-会员卡.png" alt="">我的会员卡</li>
					<li><img src="../assets/目的地2.png" alt="">想去目的地</li>
					<li><img src="../assets/叫醒.png" alt="">机票低价提醒</li>
					<li><img src="../assets/-红包.png" alt="">口令兑换</li>
					<li><img src="../assets/-安全中心.png" alt="">安全中心</li>
					<li><img src="../assets/-消息.png" alt="">我的客服</li>
					<li><img src="../assets/-意见反馈.png" alt="">意见反馈</li>
				</ul>
			</div>
		</div>
	</div>
<!-- 我的end -->
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*我的信息*/
.myInfo{
	width: 100%;
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	bottom: 0.48rem;
	overflow: auto;
	padding-top: .44rem;
}
.myInfo_head{
	width: 100%;
	height: .44rem;
	background: #ffc900;
	padding: .11rem  .13rem ;
	position: fixed;
	top: 0;
	left: 0;
}
/*头部悬浮*/
.myInfo_head img{
	width: .22rem
}
.myInfo_head_shezhi{
	float: left;
}
.myInfo_head_xiaoxi{
	float: right;
}
.myInfo_body{
	width: 100%;
	background: #f2f3f4;
}
.myInfo_body_top{
	width: 100%;
	height: .68rem;
	background:#ffc900;
	padding: 0.01rem 0 0 .12rem;
}
.myInfo_body_top_info{
	width: 1.2rem;
	height: .56rem;
	float: left;
	padding: 0.1rem 0 0 .52rem; 
}
.myInfo_body_top_info p:first-of-type{
	height: .16rem;
	line-height: .16rem;
	width: 1rem;
	font-size: .12rem;
}
.myInfo_body_top_info p:last-of-type{
	height: .2rem;
	line-height: .18rem;
	width: .56rem;
	text-align: center;
	border-radius: .09rem;
	border: 1px solid;
	font-size: .12rem;
	text-align: center;
	margin-top: .02rem;
}
.myInfo_body_mencenter{
	float: right;
	width: 1.04rem;
	height: .36rem;
	background: #ee9900;
	margin-top: .09rem;
	border-radius: .18rem 0 0 .18rem;
}
.myInfo_body_mencenter p:first-of-type{
	height: .2rem;
	color: white;
	font-size: .14rem;
	line-height: .18rem;
	padding-left: .25rem;
}
.myInfo_body_mencenter p:last-of-type{
	height: .12rem;
	color: white;
	font-size: .10rem;
	line-height: .12rem;
	padding-left: .4rem;
}
.myInfo_body_order{
	margin-bottom: .1rem;
}
.myInfo_body_order,.myInfo_body_order ul{
	width: 100%;
	height: .75rem;
	background: white;
}
.myInfo_body_order li{
	float: left;
	width: 25%;
	height: .75rem;
	text-align: center;
	font-size: .14rem;
	padding-top: .18rem;
}
.myInfo_body_order li img{
	display: block;
	margin: 0 auto;
	height: .22rem;
	margin-bottom: .06rem;
}
.myInfo_body_miles{
	width: 100%;
	height: 1.58rem;
	padding: .12rem;
	background: white;
	margin-bottom: .1rem;
}
.myInfo_body_miles_top{
	width:100%;
	height: .22rem;
	font-size: .14rem;
}
.myInfo_body_miles_top_1{
	float: left;
	width: 1.5rem;
	height: .22rem;
}
.myInfo_body_miles_top_1 span{
	display: inline-block;
	width: .80rem;
	/*line-height: .40rem;*/
	margin-left: .05rem;
	background: url(../assets/-里程.png) left bottom no-repeat;
	background-size: 20%;
	padding-left: .15rem;
}
.myInfo_body_miles_top_2{
	float: right;
	width: 1.80rem;
	font-size: .12rem;
	height: .22rem;
	line-height: .22rem;
	background: url(../assets/h1.png) right center no-repeat;
	background-size: 10%;
}
.myInfo_body_miles_top_2 span{
	color: #f0a93f;
}
.myInfo_body_miles_top_2 span:last-of-type{
	display: inline-block;
	margin-left: .05rem;
	width: .58rem;
	height: 0.2rem;
	line-height: .18rem;
	border: 1px solid #f0a93f;
	border-radius: .1rem;
	text-align: center;
}
.myInfo_body_miles_bottom{
	width: 100%;
	height: 1.2rem;
	margin-top: .16rem;
}
.myInfo_body_miles_bottom img{
	height: 1.02rem;
}
/*我的工具*/
.myInfo_body_tools{
	width: 100%;
	height: 2.65rem;
}
.myInfo_body_tools h2{

	height: .38rem;
	line-height: .38rem;
	padding-left: .12rem;
	font-size: .14rem;
	background: white;
	margin-bottom: .02rem;
	overflow: hidden;
}
.myInfo_body_tools h2 span{
	padding-left: .13rem;
	border-left: .03rem solid #ffc200;
}
.myInfo_body_tools_spc{
	width: 100%;
	height: 2.25rem;
	font-size:.11rem;
	background: white;
}
.myInfo_body_tools_spc li{
	float: left;
	width: 25%;
	height: .75rem;
	text-align: center;
	padding-top: .14rem;
}
.myInfo_body_tools_spc img{
	margin: 0 auto;
	display: block;
	margin-bottom: .15rem;
	width: .20rem;
}
</style>
