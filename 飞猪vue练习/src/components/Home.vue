<template>
    <!-- 首页 -->
    <div class="headPage tab_link">
        <!-- 页首搜索 -->
        <header>
            <a href="##" class="headerIcon_1"></a>
            <router-link to="search" class="form">
                <input type="text" placeholder="景点/酒店/美食/娱乐">
            </router-link>
            <a href="##" class="headerIcon_2"></a>
            <a href="##" class="headerIcon_3"></a>
        </header>
        <div class="headPage_box">
            <!-- 轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/TB16RsBgsLJ8KJjy0FnXXcFDpXa-750-234.jpg_760x760q75.jpg"></div>
                </div>
            </div>
            <!-- 首页导航 -->
            <nav>
                <a href="##"><img src="../assets/TB1lw9HfgoQMeJjy0FpXXcTxpXa-225-183.png" alt="">机票</a>
                <a href="##"><img src="../assets/TB1KsxcbjihSKJjy0FiXXcuiFXa-225-183.png" alt="">酒店客栈</a>
                <a href="##"><img src="../assets/TB1YxNfbjihSKJjy0FlXXadEXXa-225-183.png" alt="">火车票</a>
                <a href="##"><img src="../assets/TB1A0hdbaagSKJjy0FhXXcrbFXa-225-183.png" alt="">汽车票</a>
                <a href="##"><img src="../assets/TB1G_E.a6ihSKJjy0FeXXbJtpXa-227-183.png" alt="">用车</a>
                <a href="##"><img src="../assets/TB1YhCPfgMPMeJjy1XcXXXpppXa-225-183.png" alt="">旅游线路</a>
                <a href="##"><img src="../assets/TB1NBJibaagSKJjy0FcXXcZeVXa-225-183.png" alt="">周边游</a>
                <a href="##"><img src="../assets/TB1wtlcbjihSKJjy0FfXXbGzFXa-225-183.png" alt="">门票</a>
                <a href="##"><img src="../assets/TB13_9IfgoQMeJjy0FpXXcTxpXa-225-183.png" alt="">领里程</a>
                <a href="##"><img src="../assets/TB1rv1IfgMPMeJjy1XbXXcwxVXa-227-183.png" alt="">全部</a>
                <span class="jp">元旦票</span>
                <span class="jdkz">领红包</span>
            </nav>
            <!-- 出境超市 -->
            <div class="headPage_choice">
                <div class="headPage_choice_top">
                    <div></div>
                    <p>一站汇集全球欢乐</p>
                    <span>更多</span>
                </div>
                <ul class="headPage_choice_bottom">
                    <li>国际机票</li>
                    <li>签证</li>
                    <li>国际酒店</li>
                    <li>国际租车</li>
                    <li>接送机</li>
                    <li>境外上网</li>
                    <li>景点票务</li>
                    <li>当地玩乐</li>
                </ul>
            </div>
            <!-- 旅行头条 -->
            <div class="headPage_travel">
                <div class="headPage_travel_icon"><img src="../assets/TB1OZ0XMpXXXXctXVXXXXXXXXXX-320-240.png_160x160q75.jpg" alt=""></div>
                <div class="headPage_travel_news">
                    <ul>
                        <li>周末汤泡指南:精选10个广东省内优质温泉度假村 <span></span></li>
                        <li>航拍中国,上帝的视角看祖国大好河山<span></span></li>
                    </ul>
                </div>
            </div>
            <!-- 飞猪特卖 -->
            <div class="headerPage_sell">
                <router-link to="details" class="headerPage_sell_1">
                    <div></div>
                    <p class="p1">尾单！上海马来西亚沙巴6日4晚</p>
                    <p class="p2">1699 Go></p>
                </router-link>
                <div class="headerPage_sell_2">
                    <p>冬季出行</p>
                    <p><span>特价一折</span>起</p>
                </div>
                <div class="headerPage_sell_3">
                    <p>吃喝玩乐尽在酒店</p>
                    <p>NEW</p>
                </div>
            </div>
            <!-- 全球第一站 -->
            <div class="headPage_ftour">
                <p>更多></p>
                <div class="headPage_ftour_content">
                    <div class="headPage_ftour_content_1">
                        <img src="../assets/qqdyz1.jpg" alt="">
                        <b>推荐</b>
                        <p>初遇越南，双重美感享不停</p>
                        <p>224人说好</p>
                    </div>
                    <div class="headPage_ftour_content_2">
                        <router-link to="details"><img src="../assets/qqdyz2.jpg" alt="">至纯至真泰，走进泰国<span>泰国</span></router-link>
                        <router-link to="details"><img src="../assets/qqdyz3.jpg" alt="">甜蜜初游马代,浮潜海钓潜水吧<span>马尔代夫</span></router-link>
                        <router-link to="details"><img src="../assets/qqdyz4.jpg" alt="">蜜月行，邂逅马代最美拖尾沙滩<span>马尔代夫</span></router-link>
                    </div>
                </div>
            </div>
            <!-- 猜你喜欢 -->
            <div class="headPage_like">
                <div class="headPage_like_top"></div>
                <div class="headPage_like_list">
                    <ul class="headPage_like_list_left">
                        <li>
                            <img src="../assets/cnxh1.jpg" alt="">
                            <p>飞猪专线全国飞三亚旅游自由行5天4晚含机票酒店等等等等等等等等啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊等等</p>
                            <p>￥<span>2499</span> <a href="##">5710人购买</a></p>
                            <b>三亚|自由行</b>
                        </li>
                        <li>
                            <img src="../assets/cnxh2.jpg" alt="">
                            <p>多地-欧洲旅游俄罗斯摩尔曼斯克背光旅游莫斯科莫斯科莫斯科</p>
                            <p>￥<span>8780</span> <a href="##">507人购买</a></p>
                            <b>莫斯科|跟团游</b>  
                        </li>
                    </ul>
                    <ul class="headPage_like_list_right">
                            <li>
                            <img src="../assets/cnxh3.jpg" alt="">
                            <p>飞猪专线全国飞三亚旅游自由行5天4晚含机票酒店等等等等等等等等等等</p>
                            <p>￥<span>259</span> <a href="##">2.7万人购买</a></p>
                            <b>渭南|跟团游</b>
                        </li>
                        <li>
                            <img src="../assets/cnxh4.jpg" alt="">
                            <p>飞猪专线全国飞三亚旅游自由行5天4晚含机票酒店等等等等等等等等等等</p>
                            <p>￥<span>2499</span> <a href="##">5710人购买</a></p>
                            <b>宁静岛|自由行</b>
                        </li>
                    </ul>                   
                </div>
            </div>
        </div>
    </div>
<!-- 首页end -->
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headPage{
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: .48rem;
    overflow: auto; 
}
/*首页搜索*/
.headPage header{
    width: 100%;
    height: .45rem;
    background: #ffc900;
    position: absolute;
    top:0;
    left: 0;
    padding-top: .07rem;
    display: flex;
    justify-content:space-around;
}
.headPage header .form{
    width: 2.3rem;
    height: .32rem;
    display: block;
    /*background: white;*/
}
.headPage header .form input{
    width: 100%;
    height: 100%;
    line-height: 100%;
    border: none;
    font-size: .15rem;
    border-radius: 3px;
    padding-left: .3rem;
    background:url(../assets/搜索小.png) .09rem center no-repeat white;
    background-size: 7.5%;
    outline: none;
}
.headPage header .headerIcon_2,.headPage header .headerIcon_1,.headPage header .headerIcon_3{
    width: .24rem;
    height: .24rem; 
    margin-top: .04rem;
}
.headPage header .headerIcon_1{
    background: url(../assets/扫一扫.png)  center center no-repeat;
    background-size: 100%;
}
.headPage header .headerIcon_2{
    background: url(../assets/领券中心2.png)  center center no-repeat;
    background-size: 100%;
}
.headPage header .headerIcon_3{
    background: url(../assets/目的地.png)  center center no-repeat;
    background-size: 100%;
}
.headPage_box{
    position: absolute;
    top: .45rem;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: auto;
}
/*首页导航*/
.headPage nav{
    width: 100%;
    overflow: hidden;
    height: 1.54rem;
    font-size: .12rem;
    position: relative;
}
.headPage nav a{
    float: left;
    width: 20%;
    text-align: center;
}
.headPage nav a img{
    display:  block;
    margin: 0 auto;
    height: .61rem;
}
.headPage nav span{
    position: absolute;
    width: .5rem;
    top: .09rem;
    font-size: .1rem;
    height: .18rem;
    line-height: .18rem;
    background: #ff4900;
    color: white;
    text-align: center;
    border-radius: .09rem .09rem .09rem 0;
}
.headPage nav .jp{
    left:.39rem;
}
.headPage nav .jdkz{
    left:1.14rem;
}
/*轮播图*/
.swiper-slide img{
    width: 100%;
    height: 1.22rem;
}
.swiper-container{
    width: 100%;
    height: 1.22rem;
}
/*出境超市*/
.headPage_choice{
    width: 100%;
    height: 1.17rem;
    margin-top: 0.05rem;
}
.headPage_choice_top{
    width: 100%;
    height: .39rem;
    background: url(../assets/TB1YlMoRFXXXXa3XFXXXXXXXXXX-1125-117.png);
    background-size:100%;
    padding: .12rem 0 0 .12rem;
}
.headPage_choice_bottom{
    width: 100%;
    height: .78rem;
    padding-left: .12rem;
    background: url(../assets/TB11klebaagSKJjy0FhXXcrbFXa-1125-234.png);
    background-size: 100%;
}
.headPage_choice_top div{
    float: left;
    width: .64rem;
    height: .14rem;
    background: url(../assets/下载.png) left center no-repeat;
    background-size: 100%;
}
.headPage_choice_top p{
    float: left;
    height: .12rem;
    font-size: .12rem;
    line-height: .12rem;
    margin-left: .08rem;
}
.headPage_choice_top span{
    float: right;
    width: .36rem;
    height: .12rem;
    line-height: .12rem;
    font-size: .12rem;
    margin-right: .12rem;
    background: url(../assets/h1.png) right center no-repeat;
    background-size: 35%;
}
.headPage_choice_bottom li{
    float: left;
    width: .82rem;
    height: .32rem;
    line-height: .3rem;
    text-align: center;
    font-size: .12rem;
    margin: 0 .08rem .08rem  0;
}
/*旅行头条*/
.headPage_travel{
    width: 100%;
    height: .62rem;
    border-top: .06rem solid #f2f3f4;
    border-bottom: .06rem solid #f2f3f4;
    display: flex;
}
.headPage_travel_icon{
    height: .5rem;
    width: .8rem;
}
.headPage_travel_icon img{
    height: .5rem;
}
.headPage_travel_news{
    width: 2.85rem;
    height: .5rem;
    font-size: .12rem;
    padding: 0.05rem  0 ;
}
.headPage_travel_news ul{
    width: 2.85rem; 
}
.headPage_travel_news li{
    height: .21rem;
    line-height: .21rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    padding-left: 0.16rem;
}
.headPage_travel_news li span{
    position: absolute;
    width: .08rem;
    height: .08rem;
    border-radius: 50%;
    background: #ff5038;
    top: 6px;
    left: 5px;
}
/*飞猪特卖*/
.headerPage_sell{
    width: 100%;
    height: 1.52rem;
    display: flex;
    padding: .08rem;
    justify-content: space-between;
}
.headerPage_sell_1{
    width: 1.725rem;
    height: 1.28rem;
    display: block;
    background: url(../assets/TB1qLWybPgy_uJjSZR0SuuK5pXa.jpg_400x400q90.jpg)  left bottom no-repeat;
    background-size: 100%;
}
.headerPage_sell_1>div{
    width: 100%;
    height: .63rem;
    background: url(../assets/TB1hEoaXMvGK1Jjy0FeXXXYupXa-518-384.png);
    background-size: 100%;
}
.headerPage_sell_1 .p1{
    line-height: .24rem;
    height: .48rem;
    font-size: .14rem;
    margin:-.3rem 0 0 .1rem;
    width: 1.22rem;
    color: white
}
.headerPage_sell_1 .p2{
    margin-top: .04rem;
    font-size: .14rem;
    line-height: .24rem;
    height: .24rem;
    width: .8rem;
    background-color: #ff5000;
    border-radius: 0 0 12px 0;
    color: white;
    padding-left: .08rem;
}
.headerPage_sell_2,.headerPage_sell_3{
    width: .83rem;
    height: 1.28rem;
    padding: .4rem 0 0 .05rem;
}
.headerPage_sell_2{
    background: url(../assets/TB1eGFZSFXXXXcdaXXXXXXXXXXX-251-384.png_400x400q90.jpg) no-repeat;
    background-size: 101%;
}
.headerPage_sell_2 p:first-of-type,.headerPage_sell_2 p:last-of-type,.headerPage_sell_3 p:first-of-type,.headerPage_sell_3 p:last-of-type{
    font-size: .14rem;
    color: #333;
}
.headerPage_sell_2 p:last-of-type span,.headerPage_sell_3 p:last-of-type{
    color: #ff5000;

}
.headerPage_sell_3{
    background: url(../assets/TB1jtUISFXXXXcrXFXXXXXXXXXX-249-384.png_400x400q90.jpg) no-repeat;
    background-size: 100%;  
}
/*全球第一站*/
.headPage_ftour{
    width: 100%;
    height: 3rem;
    padding: .05rem 0.08rem 0 0 ;
    border-top: .06rem solid #f2f3f4;
}
.headPage_ftour>p{
    width: 100%;
    height: .39rem;
    line-height: .39rem;
    background: url(../assets/TB1Nw9VfgoQMeJjy0FoXXcShVXa-351-117.png) left center no-repeat;
    background-size: 40%;
    text-align: right;
}
.headPage_ftour_content{
    width: 100%;
    height: 2.55rem;
    padding: 0 0 0 0.08rem;
}
.headPage_ftour_content_1{
    padding: 0 0 0.05rem .05rem;
    background: #f2f3f4;
    font-size: .14rem;
    height: 1.28rem;
}
.headPage_ftour_content_1 img{
    float: right;
    height: 1.2rem;
}
.headPage_ftour_content_1 p{
    width: .92rem;
    height: .42rem;
    margin-top: .1rem;
}
.headPage_ftour_content_1 p:last-of-type{
    font-size: .12rem;
    margin-top: .2rem;
}
.headPage_ftour_content_1 b{
    display: block;
    width: .36rem;
    height: .24rem;
    background: #ffc900;
    margin-top: .05rem;
    text-align: center;
}
.headPage_ftour_content_2{
    padding-left: .08rem;
    width: 100%;
    height: 1.21rem;
    display: flex;
    justify-content:space-between;
    font-size: .12rem;
    color: black;
    padding-top: .05rem;
}
.headPage_ftour_content_2 a{
    width: 1.13rem;
    height: 1.21rem;
    display: block;
    position: relative;
}
.headPage_ftour_content_2 img{
    height: .64rem;
}
.headPage_ftour_content_2 span{
    position: absolute;
    padding: 0 .05rem; 
    height: .24rem;
    line-height: .24rem;
    text-align: center;
    background: rgba(0,0,0,.6);
    left: 0;
    top: .4rem;
    color: white;
}
/*猜你喜欢*/
.headPage_like{
    width: 100%;
}
.headPage_like_top{
    width: 100%;
    height: .39rem;
    background: url(../assets/TB1hO29bMoQMeJjy0FpXXcTxpXa-351-117.png) left center no-repeat;
    background-size: 40%;
    border-top: .06rem solid #f2f3f4;
}
.headPage_like_list{
    width:100%;
    display: flex;
}
.headPage_like_list_left{
    width: 50%;
    padding-left: .08rem;
}
.headPage_like_list_right{
    width: 50%;
    padding-right: .08rem;
}
.headPage_like_list li{
    width: 100%;
    height: 2.5rem;
    position: relative;
}
.headPage_like_list li img{
    width: 1.725rem;
    display: block;
    margin: 0 auto;
}
.headPage_like_list li p{
    width: 90%;
    font-size: .12rem;
    margin-top: .05rem;
    line-height: .2rem;
/*  overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;*/
}
.headPage_like_list li p:first-of-type{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    height:.4rem;
}
.headPage_like_list li p:last-of-type{
    color: #ff5000;
}
.headPage_like_list li p:last-of-type span{
    line-height: .25rem;
    font-size: .18rem;
    color: #ff5000;
}
.headPage_like_list li p:last-of-type a{
    float: right;
    margin-right: .2rem;
    color: #ccc;
    margin-top: .05rem;
}
.headPage_like_list li b{
    position: absolute;
    color: #fff;
    float: left;
    height: .2rem;
    line-height: .2rem;
    border-radius: .08rem 0 .08rem .08rem;
    padding: 0 .1rem;
    background-color: rgba(0,0,0,.6);
    top: 5px;
    left: 5px;
    font-size: .1rem;
}
</style>
