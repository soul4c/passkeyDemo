<template>
 	<!-- 详情页 -->
	<div class="details">
		<!-- 详情页头部 -->
		<div class="details_head">
			<router-link to="home" class="details_head_back"></router-link>
			<span>商品详情</span>
			<div class="details_head_car"></div>
			<div class="details_head_more"></div>
		</div>

		<!-- 详情页主体 -->
		<div class="details_box">
			<!-- 轮播图 -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
			        <div class="swiper-slide"><img src="../assets/details/xq1.jpg"></div>
			    </div>
			</div>
			<!-- 详情页标题 -->
			<div class="details_tit">北京四天三晚自由行 北京旅游 四星/五星酒店<br/>自由行	4日自由行旅游
				<div>
					<span></span>
					<p>分享</p>
				</div>
			</div>
			<!-- 详情页价格 -->
			<div class="details_price">
				￥698-1299
				<span>促销优惠</span>
			</div>
			<p class="details_volume">价格<span>￥1197-1798</span> 月售12笔</p>

			<!-- 优惠券 -->
			<div class="details_coupon">
				<p><span class="details_coupon_right"></span>承诺不加价<span class="details_coupon_right"></span>出游有保障<span class="details_coupon_right"></span>更改则赔付</p>
				<p>领取店铺10元优惠券</p>
				<p>最多可送649飞猪里程</p>
			</div>

			<!-- 及时确认 -->
			<div class="details_sure">卖家承诺此商品拍下付款后可按期顺利出行，无需等待确认</div>

			<!-- 选择出发地 -->
			<div class="details_choice">
				<p>选择 出发地 套餐类型 出游人群</p>
				<div class="details_choice_box">
					<div class="details_choice_list">
						<p>12-15 周五</p>
						<p>￥698</p>
					</div>

					<div class="details_choice_list">
						<p>12-15 周五</p>
						<p>￥698</p>
					</div>

					<div class="details_choice_list">
						<p>12-15 周五</p>
						<p>￥698</p>
					</div>

					<div class="details_choice_list">
						<p>12-15 周五</p>
						<p>￥698</p>
					</div>

					<div>全部<br/>团期</div>
				</div>
			</div>

			<!-- 评价 -->
			<div class="details_evaluate">
				<p class="details_evaluate_tit">宝贝评价（<span>70</span>）</p>
				<div class="details_evaluate_words">
					<div>住宿环境很好(27)</div>
					<div>风光不错(13)</div>
					<div>价格实惠(13)</div>
					<div>餐饮很棒(13)</div>
					<div>交通不错(9)</div>
					<div>质量好(8)</div>
				</div>
				<div class="details_evaluate_list">
					<div class="details_evaluate_list_user"><span></span>W***4</div>
					<div class="details_evaluate_list_text">囊中羞涩的我这次定了性价比还可以的酒店，价格适中，1间房拍2份很合理，还含2早，和家人一起的。这个酒店还是很不错的，和家人一起的。这个酒店还是很不错的，</div>
					<p class="details_evaluate_list_time">2017-11-29 13:21:19</p>
					<div class="details_evaluate_list_more">查看全部评价</div>
				</div>
			</div>

			<!-- 其他商品链接 -->
			<div class="details_others">
				<div class="details_others_list">
					<img src="../assets/details/xq2.jpg">

					<p class="details_others_tit">北京五天四晚自由行 北京旅游 五星酒店自由行套餐 五星酒店自由行套餐</p>
					<p class="details_others_price">
						<span>￥859</span>
						<span><span>1437</span>人已买</span>
					</p>
				</div>

				<div class="details_others_list">
					<img src="../assets/details/xq2.jpg">

					<p class="details_others_tit">北京五天四晚自由行 北京旅游 五星酒店自由行套餐 五星酒店自由行套餐</p>
					<p class="details_others_price">
						<span>￥859</span>
						<span><span>1437</span>人已买</span>
					</p>
				</div>

				<div class="details_others_list">
					<img src="../assets/details/xq2.jpg">

					<p class="details_others_tit">北京五天四晚自由行 北京旅游 五星酒店自由行套餐 五星酒店自由行套餐</p>
					<p class="details_others_price">
						<span>￥859</span>
						<span><span>1437</span>人已买</span>
					</p>
				</div>

				<div class="details_others_list">
					<img src="../assets/details/xq2.jpg">

					<p class="details_others_tit">北京五天四晚自由行 北京旅游 五星酒店自由行套餐 五星酒店自由行套餐</p>
					<p class="details_others_price">
						<span>￥859</span>
						<span><span>1437</span>人已买</span>
					</p>
				</div>
			</div>

		</div>

		<!-- 底部 -->
		<div class="details_bot">
			<div class="details_bot_list">
				<span></span>
				<p>客服</p>
			</div>
			<div class="details_bot_list">
				<span></span>
				<p>店铺</p>
			</div>
			<div class="details_bot_list">
				<span></span>
				<p>收藏</p>
			</div>
			<div class="details_bot_car">加入购物车</div>
			<div class="details_bot_pay">立即购买</div>
		</div>
	</div>		



</template>

<script>
export default {
  name: 'search',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*详情页头部*/
.details_head{
	height: .46rem;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 500;
}
.details_head>span{
	color: #3a2832;
	font-size: .16rem;
	position: absolute;
	top: 0;
	left: 1.54rem;
	height: .46rem;
	line-height: .46rem;
	display: none;
}
.details_head>div,.details_head>a{
	height: .3rem;
	width: .3rem;
	border-radius: 50%;
	background-color: rgba(255,255,2555,0.9);
}
.details_head_back{
	display: block;
	position: absolute;
	top: .1rem;
	left: .03rem;
	background: url(../assets/details/返回箭头详情页.png) center center no-repeat;
	background-size: .21rem .21rem;
}
.details_head_car{
	position: absolute;
	top: .1rem;
	right: .43rem;
	background: url(../assets/details/_购物车.png) center center no-repeat;
	background-size: .21rem .21rem;
}
.details_head_more{
	position: absolute;
	top: .1rem;
	right: .08rem;
	background: url(../assets/details/更多2.png) center center no-repeat;
	background-size: .21rem .21rem;
}




/*详情页主体*/
.details_box{
	position: fixed;
	top: 0;
	bottom: .47rem;
	left: 0;
	width: 100%;
	overflow: auto;
	background: #f2f3f5;
}
/*轮播图*/
.swiper-container{
	width: 100%;
	height: 3.76rem;
}
.swiper-slide>img{
	width: 100%;
	height: 100%;
}
/*详情页标题*/
.details_tit{
	line-height: .2rem;
	font-size: .14rem;
	color: #5e5e5e;
	height: .53rem;
	padding-top: .12rem;
	padding-left: .12rem;
	width: 100%;
	position: relative;
	background: #fff;
}
.details_tit>div{
	position: absolute;
	top: .14rem;
	right: 0;
	height: .37rem;
	width: .47rem;
}
.details_tit>div>span{
	width: .18rem;
	height: .18rem;
	display: block;
	background: url(../assets/details/分享.png) 0 0 no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
}
.details_tit>div>p{
	text-align: center;
	color: #c2c2c2;
	font-size: .11rem;
	height: .17rem;
	line-height: .17rem;
}
/*详情页价格*/
.details_price{
	height: .46rem;
	line-height: .46rem;
	font-size: .18rem;
	color: #fa3500;
	padding-left: .12rem;
	background: #fff
}
.details_price>span{
	font-size: .09rem;
	color: #ff885e;
	border: 1px solid #ff885e;
	border-radius: 3px;
	padding: 0 2px;
}
.details_volume{
	font-size: .12rem;
	padding-left: .12rem;
	height: .35rem;
	line-height: .18rem;
	color: #b2b2b2;
	background: #fff;
}
.details_volume>span{
	color: #b2b2b2;
	text-decoration: line-through;
}
/*优惠券*/
.details_coupon{
	height: 1.22rem;
	background: #fafafa;
	padding-left: .12rem;
}
.details_coupon>p{
	border-bottom: 1px solid #f2f2f2;
	font-size: .12rem;
	height: .39rem;
	line-height: .39rem;
	color: #8a8a8a;
}
.details_coupon>p:nth-of-type(1){
	border-bottom: 2px solid #f2f2f2;
	height: .46rem;
	line-height: .46rem;
	background: url(../assets/details/logo.png) 0 center no-repeat;
	background-size: auto .21rem;
	padding-left: .7rem;
}
.details_coupon_right{
	display: inline-block;
	width: .16rem;
	height: .16rem;
	background: url(../assets/details/对勾小.png) 0 0 no-repeat;
	background-size: 100% 100%;
	margin-left: .12rem;
	margin-right: .03rem;
}
/*及时确认*/
.details_sure{
	height: .59rem;
	width: 100%;
	background: url(../assets/details/sure.png) 0 0 no-repeat #fff;
	background-size: auto 100%;
	margin-top: .12rem;
	color: #8d8d8d;
	font-size: .12rem;
	line-height: .18rem;
	padding-left: .94rem;
	padding-top: .12rem;
	padding-right: .21rem;
}
/*选择出发地*/
.details_choice{
	height: .98rem;
	width: 100%;
	margin: .12rem 0;
	background: #fff;
}
.details_choice>p{
	padding-left: .12rem;
	font-size: .12rem;
	color: #585858;
	height: .43rem;
	line-height: .43rem;
}
.details_choice_box{
	height: .55rem;
	width: 100%;
	overflow: auto;
	font-size: 0;
	white-space: nowrap;
	position: relative;
}
.details_choice_list{
	width: .66rem;
	height: .43rem;
	border: 2px solid #f8f8f8;
	margin-left: .12rem;
	display: inline-block;
}
.details_choice_list>p{
	text-align: center;
	line-height: .21rem;
	height: .21rem;
	font-size: .1rem;
}
.details_choice_list>p:first-of-type{
	color: #8a8a8a;
}
.details_choice_list>p:last-of-type{
	color: #fe591f
}
.details_choice_box>div:last-of-type{
	height: .43rem;
	width: .26rem;
	color: #df8f00;
	position: absolute;
	right: .18rem;
	top: .04rem;
	font-size: .12rem;
}
/*评价*/
.details_evaluate{
	width: 100%;
	background: #fff;
	overflow: hidden;
}
.details_evaluate_tit{
	height: .45rem;
	line-height: .45rem;
	font-size: .14rem;
	padding-left: .12rem;
}
.details_evaluate_words{
	width: 100%;
	padding: 0 .12rem .08rem .12rem;
}
.details_evaluate_words>div{
	height: .27rem;
	line-height: .27rem;
	border-radius: .13rem;
	padding: 0 .11rem;
	background: #fdf0b9;
	font-size: .11rem;
	color: #675c37;
	float: left;
	margin-right: .09rem;
	margin-bottom: .09rem;
}
.details_evaluate_list{
	height: 1.53rem;
	clear: both;
	border-bottom: 1px solid #fbfbfb;
}
.details_evaluate_list_user{
	height: .26rem;
	line-height: .26rem;
	padding-left: .12rem;
	color: #181818;
	font-size: .1rem;
	margin-bottom: .15rem;
}
.details_evaluate_list_user>span{
	height: .26rem;
	width: .26rem;
	display: block;
	border-radius: 50%;
	background: url(../assets/all/photo_select_element_default_avatar.png) center center no-repeat;
	background-size: 100% 100%;
	margin-right: .08rem;
	float: left;
}
.details_evaluate_list_text{
	padding-left: .12rem;
	padding-right: .12rem;
	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
	font-size: .12rem;
	line-height: .16rem;
	height: .32rem;
	overflow: hidden;
}
.details_evaluate_list_time{
	padding-left: .12rem;
	font-size: .1rem;
	color: #b0b0b0;
	line-height: .16rem;
	height: .16rem;
}
.details_evaluate_list_more{
	width: 1.02rem;
	height: .26rem;
	line-height: .26rem;
	text-align: center;
	color: #efbc27;
	font-size: .12rem;
	border: 1px solid #ebe3a4;
	margin: .14rem auto 0;
}
.details_others{
	width: 100%;
	padding: 0 .12rem;
	margin-top: .12rem;
}
.details_others_list{
	width: 1.73rem;
	height: 2.8rem;
	background: #fff;
	float: left;
	margin-bottom: .03rem;
	position: relative;
}
.details_others_list:nth-of-type(odd){
	margin-right: .05rem;
}
.details_others_list>img{
	width: 100%;
}
.details_others_tit{
	height: .42rem;
	width: 100%;
	padding: .07rem .13rem;
	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
	overflow: hidden;
	font-size: .12rem;
	line-height: .18rem;
	color: #7b7b7b;
}
.details_others_price{
	font-size: .12rem;
	padding: 0 .12rem;
	height: .18rem;
	line-height: .18rem;
	margin-top: .3rem;
}
.details_others_price>span:first-of-type{
	color: #f03800;
}
.details_others_price>span:last-of-type{
	float: right;
	color: #aaaaaa;
}
.details_others_price>span:last-of-type>span{
	color: #aaaaaa;
}









/*底部*/
.details_bot{
	height: .47rem;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	border-top: 1px solid #f5f5f5;
}
.details_bot_list{
	height: .47rem;
	width: .49rem;
	border-right: 1px solid #f5f5f5;
	float: left;
}
.details_bot_list>p{
	height: .21rem;
	line-height: .21rem;
	text-align: center;
	color: #848484;
	font-size: .1rem;
}
.details_bot_list>span{
	display: block;
	height: .2rem;
	width: .2rem;
	margin: .04rem auto 0;
}
.details_bot_list:nth-of-type(1)>span{
	background: url(../assets/details/-旺旺.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.details_bot_list:nth-of-type(2)>span{
	background: url(../assets/details/-店铺.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.details_bot_list:nth-of-type(3)>span{
	background: url(../assets/details/-收藏.png) 0 0 no-repeat;
	background-size: 100% 100%;
}
.details_bot_car{
	color: #fff;
	width: 1.14rem;
	float: left;
	background: #fe9900;
	text-align: center;
	height: .47rem;
	line-height: .47rem;
	font-size: .14rem;
}
.details_bot_pay{
	color: #fff;
	width: 1.14rem;
	float: left;
	background: #ff5000;
	text-align: center;
	height: .47rem;
	line-height: .47rem;
	font-size: .14rem;
}
</style>
