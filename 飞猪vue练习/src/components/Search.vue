<template>
 	<!-- 搜索页 -->
	<div class="search">
	<div class="searchhead">
		<div class="searchhead_left">
			<div class="searchhead_left_choice1">宝贝</div>
			<div style="display:none" class="searchhead_left_choice1">店铺</div>
			<div class="searchhead_left_input">
				<input type="text" placeholder="香山公园的门票">
			</div>
		</div>
		<router-link to="home" class="searchhead_right">取消</router-link>
	</div>
	<div class="searchbottom">
		<h2>搜索·发现</h2>
		<div class="search_find"> 
			<a href="">香山公园的门票</a>
			<a href="">夕阳红</a>
			<a href="">北古水镇一日游</a>
			<a href="">北京三日游</a>
			<a href="">北京私汤</a>
			<a href="">故宫珍宝馆</a>
			<a href="">北京动物园</a>
		</div>
		<h2>十二月大家爱去的目的地</h2>
		<div class="search_person">
			<a href="">北京</a>
			<a href="">上海</a>
			<a href="">广州</a>
			<a href="">泰国</a>
		</div>
	</div>
	</div>
<!-- 搜索页end -->
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
/*搜索页*/
.search{
	width: 100%;
	position: fixed;
	top:0;
	bottom: 0;
	left: 0;
	background: #fff;
	z-index: 800;
}
.searchhead{
	width: 100%;
	height: .44rem;
	display: flex;
	background: #ffcf00;
	padding-top: .06rem;
}
.searchhead_right{
	height: .32rem;
	font-size: .14rem;
	line-height: .32rem;
	margin-left: .1rem;
}
.searchhead_left{
	width: 3.18rem;
	height: .32rem;
	border-radius: .05rem;
	background: #fff7d6;
	padding: .06rem 0 0 0.1rem;
	margin-left: .1rem;
}
.searchhead_left_choice1{
	width: .68rem;
	float: left;
	height: .20rem;
	line-height:.20rem;
	background: url(../assets/h2.png) .47rem .02rem no-repeat ;
	border-right: 1px solid #757471;
	background-size: 20%;
	font-size: .14rem;
}
.searchhead_left_input{
	float: left;
	margin-left: 5px;
	height: 0.2rem;
	background: url(../assets/搜索小.png) 0.03rem center no-repeat;
	background-size: 8%;
}
.searchhead_left_input input{
	height: 0.2rem;
	line-height: .2rem;
	outline: none;
	background: #fff7d6;
	margin-left: .25rem;
	border: none;
	font-size: .14rem;
	position: relative;
	top: -.02rem;
}

.searchbottom{
	width: 100%;
	font-size: .14rem;
	padding: 0 0 0 .12rem;
}
.searchbottom h2{
	height: .32rem;
	line-height: .32rem;
	padding-left: .3rem;
	font-size: .14rem;
	font-weight: normal;
}
.searchbottom h2:first-of-type{
	background: url(../assets/-阅读小.png) left center no-repeat;
	background-size: 5%;
}
.searchbottom h2:last-of-type{
	background: url(../assets/-定位2小.png) left center no-repeat;
	background-size: 5%;
}

.searchbottom a{
	display: inline-block;
	height: .36rem;
	line-height: .36rem;
	padding: 0 .18rem;
	background: #f2f3f4;
	border-radius: .05rem;
	margin: 0 .1rem .1rem 0;
}
</style>
