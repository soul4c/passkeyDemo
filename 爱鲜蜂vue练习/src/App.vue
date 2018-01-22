<template>
  <div id="app">
    <!-- 头部 -->
    <header>
      <p>
        <span class="header_area">北京市政府</span>
        <span></span>
      </p>
      <div>
        <span></span>
        <p>搜索</p>
      </div>
    </header>



    <!-- 底部Tab页 -->
    <div class="tab">
        <router-link to="home" class="tablist tab_index">
          <span></span>
          <p>首页</p>
        </router-link>

        <router-link to="supermarket" class="tablist tab_market">
          <span></span>
          <p>闪送超市</p>
        </router-link>

        <router-link to="cart" class="tablist tab_shopcar">
          <span></span>
          <p>购物车</p>
        </router-link>

        <router-link to="mine" class="tablist tab_mine">
          <span></span>
          <p>我的</p>
        </router-link>
    </div>
    
    <router-view/>
    


  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*统一样式*/
html,header,nav,footer,b,i,div,ul,li,p,span,img,form,input,a,ol,dl,dt,dd,table,tr,td,body{
  margin: 0;
  padding: 0;
  color: #666666;
  font-family: "微软雅黑";
  box-sizing:border-box; 
}
ul,li{
  list-style-type: none;
}
a{
  text-decoration: none;
   -webkit-tap-highlight-color: transparent;
}
html{
  font-size: 100px;
}
body{
  font-size: 16px;
}
::-webkit-scrollbar{
  height: 0;
  width: 0;
}


/*底部Tab页*/
.tab{
  height: .6rem;
  background: rgba(246,243,243,0.9);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
}
.tablist{
  height: .6rem;
  flex:1;
  display: block;
}
.tablist>span{
  height: .25rem;
  width: .25rem;
  display: block;
  margin: .06rem auto;
}
.tab_index>span{
  background: url(./assets/index2.png) 0 0 no-repeat;
  background-size: 100% 100%;
}
.tab_market>span{
  background: url(./assets/market.png) 0 0 no-repeat;
  background-size: 100% 100%;
}
.tab_shopcar>span{
  background: url(./assets/shopcar.png) 0 0 no-repeat;
  background-size: 100% 100%;
}
.tab_mine>span{
  background: url(./assets/mine.png) 0 0 no-repeat;
  background-size: 100% 100%;
}
.tablist>p{
  text-align: center;
  font-size: .12rem;
  color: #7e7e7e;
}



/*头部*/
header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: .55rem;
  background: #ffd600;
  z-index: 998;
}
header>p{
  height: .55rem;
  line-height: .55rem;
  text-align: center;
  font-size: .16rem;
  font-weight: bold;
}
header>p>span:last-of-type{
  height: 0;
  width: 0;
  border-top: .09rem solid #333333;
  border-left: .05rem solid rgba(0,0,0,0);
  border-right: .05rem solid rgba(0,0,0,0);
  position: relative;
  top: .18rem;
}
.header_area{
  color: #333333;
}
header>div{
  width: .47rem;
  height: .55rem;
  position: absolute;
  top: 0;
  right: 0;
}
header>div>span{
  width: .25rem;
  height: .25rem;
  display: block;
  margin: .08rem auto 0;
  background: url(./assets/背景2.png) 0 0 no-repeat;
  background-size: 100% 100%;
}
header>div>p{
  font-size: .11rem;
  color: #333;
  text-align: center;
  height: .18rem;
  line-height: .18rem;
}
</style>
