<template>
 	<!-- 我的 -->
	<div class="mine tab_link">
		<div class="mine_tit">
			<img src="../assets/mine_head.png" class="mine_header">
			<p class="mine_username">18341325371</p>
			<div class="mine_vip">V0</div>
			<a href="javascript:;" class="mine_tit_more"></a>
			<div class="mine_collect">
				<a href="javascript:;" class="mine_collect_thing"><span></span>商品收藏</a>
				<a href="javascript:;" class="mine_collect_shop"><span></span>店铺收藏</a>
			</div>
		</div>
		<!-- 买卖状态 -->
		<div class="mine_style">
			<p class="mine_order">
				<span>我的订单</span>
				<span>查看全部订单</span>
				<span></span>
			</p>
			<div class="mine_style_list">
				<div>
					<span></span>
					<p>代付款</p>
				</div>
				<div>
					<span></span>
					<p>待收货</p>
				</div>
				<div>
					<span></span>
					<p>待评价</p>
				</div>
				<div>
					<span></span>
					<p>退货/售后</p>
				</div>
			</div>
		</div>
		<!-- 我的功能栏 -->
		<div class="mine_usefal">
			<div>
				<span></span>
				<p>积分商城</p>
			</div>
			<div>
				<span></span>
				<p>优惠券</p>
			</div>
			<div>
				<span></span>
				<p>收货地址</p>
			</div>
			<div>
				<span></span>
				<p>客服/反馈</p>
			</div>
			<div>
				<span></span>
				<p>关于我们</p>
			</div>
		</div>


	</div>
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
header{
    display: none;
}
/*我的*/
.mine{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: .6rem;
	overflow: auto;
	background: #efefef;
}
.mine_tit{
	height: 1.62rem;
	width: 100%;
	background: #ffd600;
	position: relative;
}
.mine_header{
	width: .72rem;
	height: .72rem;
	position: absolute;
	top: .25rem;
	left: .19rem;
	border-radius: 50%;
}
.mine_username{
	color: #fff;
	font-weight: bold;
	font-size: .18rem;
	position: absolute;
	top: .3rem;
	left: 1.09rem;
	font-family: "黑体";
}
.mine_vip{
	height: .33rem;
	line-height: .33rem;
	color: #e94f1a;
	font-size: .1rem;
	font-weight: bold;
	padding-left: .35rem;
	width: .98rem;
	background: url(../assets/data_image_pngba.png) 0 0 no-repeat;
	background-size: 100% 100%;
	position: absolute;
	top: .58rem;
	left: 1.09rem;
}
.mine_tit_more{
	display: block;
	width: .17rem;
	height: .17rem;
	border-top: solid 2px #fff;
	border-right: solid 2px #fff;
	position: absolute;
	top: .52rem;
	right: .27rem;
	transform:rotate(45deg);
}
.mine_collect{
	height: .42rem;
	width: 100%;
	background: rgba(0,0,0,.06);
	position: absolute;
	left: 0;
	bottom: 0;
}
.mine_collect>a{
	display: block;
	width: 50%;
	border-right: solid 1px #fff;
	height: .26rem;
	float: left;
	margin-top: .08rem;
	color: #fff;
	padding-left: .47rem;
}
.mine_collect>.mine_collect_shop{
	border: none;
}
.mine_collect_thing>span{
	width: .2rem;
	height: .2rem;
	display: block;
	background: url(../assets/背景7.png) 0 0 no-repeat;
	background-size: 100% 100%;
	float: left;
	margin-right: .16rem;
}
.mine_collect_shop>span{
	width: .2rem;
	height: .2rem;
	display: block;
	background: url(../assets/shopcollect.png) 0 0 no-repeat;
	background-size: 100% 100%;
	float: left;
	margin-right: .16rem;
}

/*买卖状态*/
.mine_style{
	height: 1.43rem;
	width: 100%;
	background: #fff;
	margin-top: .12rem;
	position: relative;
}
.mine_order{
	height: .59rem;
	line-height: .59rem;
	border-bottom: 1px solid #e0e0e0;
}
.mine_order>span:first-of-type{
	font-size: .16rem;
	color: #333333;
	margin-left: .18rem;
}
.mine_order>span:nth-of-type(2){
	float: right;
	margin-right: .23rem;
	font-size: .16rem;
	color: #999999;
}
.mine_order>span:last-of-type{
	display: block;
	width: .08rem;
	height: .08rem;
	position: absolute;
	top: .26rem;
	right: .15rem;
	transform:rotate(45deg);
	border-top: solid 1px #7f7f7f;
	border-right: solid 1px #7f7f7f;
}
.mine_style_list{
	height: .84rem;
	width: 100%;
	display: flex;
}
.mine_style_list>div{
	flex:1;
	height: .84rem;
}
.mine_style_list>div>p{
	text-align: center;
	font-size: .14rem;
	margin-top: .1rem;
}
.mine_style_list>div>span{
	width: .21rem;
	height: .21rem;
	margin: .25rem auto 0;
	display: block;
}
.mine_style_list>div:nth-of-type(1)>span{
	background: url(../assets/背景8.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_style_list>div:nth-of-type(2)>span{
	background: url(../assets/daishouhuo.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_style_list>div:nth-of-type(3)>span{
	background: url(../assets/背景9.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_style_list>div:nth-of-type(4)>span{
	background: url(../assets/shouhou.png) 0 0 no-repeat;
	background-size: 100% 100%;
}

/*我的功能栏*/
.mine_usefal{
	margin-top: .12rem;
	height: 2.41rem;
	width: 100%;
	position: relative;
	background: #fff;
	display: flex;
	flex-wrap:wrap;
}
.mine_usefal>div{
	width: 25%;
	height: 1.2rem;
	border-bottom: 1px solid #efefef;
}
.mine_usefal>div>p{
	text-align: center;
	margin-top: .1rem;
	font-size: .14rem;
	color: #333333;
}
.mine_usefal>div>span{
	height: .325rem;
	width: .39rem;
	display: block;
	margin: .345rem auto 0;
}
.mine_usefal>div:nth-of-type(1)>span{
	background: url(../assets/背景10.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_usefal>div:nth-of-type(2)>span{
	background: url(../assets/youhuiquan.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_usefal>div:nth-of-type(3)>span{
	background: url(../assets/背景11.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_usefal>div:nth-of-type(4)>span{
	background: url(../assets/kefu.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_usefal>div:nth-of-type(5)>span{
	background: url(../assets/背景12.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.mine_usefal>div:nth-of-type(5){
	border: none;
}
</style>
