<template>
    <!-- 目的地 -->
    <div class="bourn tab_link" location.href="html/details.html">
        <!-- 目的地头部 -->
        <div class="bourn_head">
            <div class="bourn_head_tofind">景点/酒店/美食/娱乐</div>
            <div class="bourn_head_toinfor"></div>
        </div>
        <!-- 目的地主体 -->
        <div class="bourn_box">
            <!-- 目的地当前地区 -->
            <div class="bourn_area">
                <img src="https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/962bd40735fae6cd6cb152c00fb30f2442a70f0d.jpg" alt="">
                <div class="bourn_area_infor">
                    <p>北京</p>
                    <p>悠悠帝都 文化之都</p>
                    <p><span></span>-8~2℃</p>
                    <div>
                        <span></span>
                        <p>精选图库</p>
                        <div></div>
                    </div>
                </div>
            </div>
            
            <!-- 目的地导航 -->
            <div class="bourn_nav">
                <div class="bourn_nav_list">
                    <div>
                        <span></span>
                        <p>景点</p>
                    </div>
                    <div>
                        <span></span>
                        <p>美食</p>
                    </div>
                    <div>
                        <span></span>
                        <p>当地玩乐</p>
                    </div>
                    <div>
                        <span></span>
                        <p>自由行</p>
                    </div>
                    <div>
                        <span></span>
                        <p>酒店</p>
                    </div>
                </div>

                <div class="bourn_nav_point">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <!-- 目的地大图 -->
            <div class="bourn_banners">
                <div><img src="https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/58ee3d6d55fbb2fb2927a1b34f4a20a44623dc07.jpg"></div>
                <div><img src="https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/6c224f4a20a4462366c65cc39822720e0cf3d707.jpg"></div>
                <div><img src="https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/c995d143ad4bd11352c84e935aafa40f4bfb050d.jpg"></div>
            </div>
            <!-- 热门必去 -->
            <div class="bourn_hotbego">
                <p class="bourn_model_tit">
                    <span>热门必去</span>
                </p>
                <div class="bourn_hotbego_nav">
                    <div>景点</div>
                    <div>美食</div>
                    <div>酒店</div>
                    <div>购物</div>
                    <div>娱乐</div>
                </div>
                <div class="bourn_hotbego_box">
                    <div class="bourn_hotbego_list" v-for="item in jingdian">
                        <img :src="item.cimg">
                        <p>{{item.poiname}}</p>
                    </div>
                </div>
            </div>


            <!-- 当地必玩 -->
            <div class="bourn_beplay">
                <p class="bourn_model_tit">
                    <span>当地必玩</span>
                </p>
                <table>
                    <tr>
                        <td>
                            <p class="bourn_beplay_area">故宫</p>
                            <p class="bourn_beplay_pay">已售11687</p>
                        </td>
                        <td>
                            <p class="bourn_beplay_area">长城</p>
                            <p class="bourn_beplay_pay">已售2540</p>
                        </td>
                        <td>
                            <p class="bourn_beplay_area">鸟巢水立方</p>
                            <p class="bourn_beplay_pay">已售1971</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bourn_beplay_area">颐和园</p>
                            <p class="bourn_beplay_pay">已售1921</p>
                        </td>
                        <td>
                            <p class="bourn_beplay_area">古北水镇</p>
                            <p class="bourn_beplay_pay">已售570</p>
                        </td>
                        <td>
                            <p class="bourn_beplay_area">野生动物园</p>
                            <p class="bourn_beplay_pay">已售560</p>
                        </td>
                    </tr>
                </table>
            </div>


            <!-- 特惠路线 -->
            <div class="bourn_road">
                <p class="bourn_model_tit">
                    <span>特惠路线</span>
                </p>
                <div class="bourn_road_nav">
                    <div>热门</div>
                    <div>自由行</div>
                    <div>跟团游</div>
                </div>
                
                <div class="bourn_road_box">
                    <div class="bourn_road_list" v-for="(item,index) in obj.products">
                        <img :src="item.imgUrl">
                        <div class="bourn_road_list_ri">
                            <p class="bourn_road_box_tit">{{item.fullTitle}}</p>
                            <span class="bourn_road_box_sine"></span>
                            <p class="bourn_road_box_pay">最近有<span>{{item.peopleCount}}</span>人已经购买</p>
                        </div>
                        <div class="bourn_road_list_bot">双十一很划算，5天4夜太值了，满意了，导游很热情</div>
                    </div>

                  
                </div>
            </div>





        </div>
    </div>
<!-- 目的地end -->
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
        obj:[],
        jingdian:[]
    }
  },
  created(){
    // 请求数据
    this.$http("../../static/data.json").then((res)=>{
        this.obj = res.data[0];
    })
    this.$http("../../static/jingdiandata.json").then((res)=>{
        this.jingdian = res.data.data.poilines;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*目的地*/
.bourn{
    position: fixed;
    top: 0;
    bottom: .48rem;
    left: 0;
    width: 100%;
    overflow: auto;
    padding-top: .45rem;
}
/*目的地头部*/
.bourn_head{
    position: absolute;
    top: 0;
    left: 0;
    height: .46rem;
    width: 100%;
    background: #ffc900;
}
.bourn_head_tofind{
    height: .32rem;
    width: 3.11rem;
    background: url(../assets//bourn/搜索.png) .08rem center no-repeat rgba(255,255,255,.9);
    background-size: .18rem .18rem;
    border-radius: 5px;
    position: absolute;
    left: .12rem;
    top: .07rem;
    font-size: .12rem;
    color: #8a8a8a;
    line-height: .32rem;
    padding-left: .28rem;
}
.bourn_head_toinfor{
    height: .24rem;
    width: .24rem;
    position: absolute;
    top: .11rem;
    right: .11rem;
    background: url(../assets//bourn/_消息.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
/*目的地主体*/
.bourn_box{
    position: absolute;
    top: .46rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    background: #f2f3f5;
}
/*目的地当前地区*/
.bourn_area{
    height: 1.5rem;
    width: 100%;
    background: url(../assets//all/ic_alitrip_default_240_240.png) center top no-repeat #f2f3f4;
    background-size: auto 100%;
    position: relative;
}
.bourn_area>img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1
}
.bourn_area_infor{
    height: 1.5rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    padding-left: .15rem;

}
.bourn_area_infor>p:nth-of-type(1){
    height: .35rem;
    line-height: .35rem;
    font-size: .25rem;
    font-weight: bold;
    color: #fff;
    margin-top: .61rem;
}
.bourn_area_infor>p:nth-of-type(2){
    height: .22rem;
    line-height: .22rem;
    font-size: .12rem;
    color: #fff;
}
.bourn_area_infor>p:nth-of-type(3)>span{
    display: block;
    height: .18rem;
    width: .18rem;
    background: url(../assets//bourn/亮度.png) 0 0 no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-top: .01rem;
}
.bourn_area_infor>p:nth-of-type(3){
    height: .22rem;
    line-height: .22rem;
    font-size: .12rem;
    color: #fff;
}
.bourn_area_infor>div{
    height: .45rem;
    width: .87rem;
    background: rgba(0,0,0,.4);
    position: absolute;
    right: 0;
    bottom: .09rem;
    border-radius: .22rem 0 0 .22rem;
}
.bourn_area_infor>div>span{
    display: block;
    width: .21rem;
    height: .21rem;
    background: url(../assets//bourn/拍照2.png) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: .05rem;
    right: .33rem;
}
.bourn_area_infor>div>p{
    font-size: .12rem;
    color: #fff;
    height: .2rem;
    line-height: .2rem;
    margin-top: .23rem;
    padding-left: .18rem;
}
.bourn_area_infor>div>div{
    height: .06rem;
    width: .06rem;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform:rotate(45deg);
    position: absolute;
    top: .31rem;
    right: .15rem;
}
/*目的地导航*/
.bourn_nav{
    height: 1.1rem;
    width: 100%;
    position: relative;
    background: #fff;
}
.bourn_nav_list{
    height: 1.1rem;
    width: 100%;
    display: flex;
    justify-content:space-between;
    position: relative;
}
.bourn_nav_list>div{
    width: .75rem;
    height: .85rem;
}
.bourn_nav_list>div>p{
    text-align: center;
    height: .28rem;
    line-height: .28rem;
    font-size: .12rem;
    color: #303030;
}
.bourn_nav_list>div>span{
    height: .43rem;
    width: .43rem;
    margin: .12rem auto 0;
    display: block;
    border-radius: 50%;
}
.bourn_nav_list>div:nth-of-type(1)>span{
    background: url(../assets//bourn/景点2.png) center center no-repeat #35da7f;
    background-size: .25rem .25rem;
}
.bourn_nav_list>div:nth-of-type(2)>span{
    background: url(../assets//bourn/餐饮2.png) center center no-repeat #fb1395;
    background-size: .25rem .25rem;
}
.bourn_nav_list>div:nth-of-type(3)>span{
    background: url(../assets//bourn/热气球.png) center center no-repeat #35da7f;
    background-size: .25rem .25rem;
}
.bourn_nav_list>div:nth-of-type(4)>span{
    background: url(../assets//bourn/_国际机票.png) center center no-repeat #feaf00;
    background-size: .25rem .25rem;
}
.bourn_nav_list>div:nth-of-type(5)>span{
    background: url(../assets//bourn/_酒店2.png) center center no-repeat #fc376d;
    background-size: .25rem .25rem;
}
.bourn_nav_point{
    width: .27rem;
    position: absolute;
    top: .9rem;
    left: 1.73rem;
    height: .1rem;
    display: flex;
    justify-content:space-between;
}
.bourn_nav_point>span{
    width: .08rem;
    height: .08rem;
    display: block;
    border-radius: 50%;
    background: #dbdbd0;
}
.bourn_nav_point>span:nth-of-type(1){
    background: #ffbb00;
}

/*目的地大图*/
.bourn_banners{
    height: 2.18rem;
    width: 100%;
    padding-left: .15rem;
    margin-bottom: .1rem;
    background: #fff
}
.bourn_banners>div>img{
    width: 100%;
    height: 100%;
}
.bourn_banners>div:nth-of-type(1){
    width: 3.45rem;
    height: .96rem;
    margin-bottom: .03rem;
    background: url(../assets//all/ic_alitrip_default_240_240.png) center top no-repeat #f2f3f4;
    background-size: auto 100%;
}
.bourn_banners>div:nth-of-type(2){
    width: 1.71rem;
    height: .96rem;
    margin-bottom: .03rem;
    background: url(../assets//all/ic_alitrip_default_240_240.png) center top no-repeat #f2f3f4;
    background-size: auto 100%;
    float: left;
    margin-right: .03rem;
}
.bourn_banners>div:nth-of-type(3){
    width: 1.71rem;
    height: .96rem;
    margin-bottom: .03rem;
    background: url(../assets//all/ic_alitrip_default_240_240.png) center top no-repeat #f2f3f4;
    background-size: auto 100%;
    float: left;
}
/*热门必去*/
.bourn_hotbego{
    height: 2.37rem;
    width: 100%;
    background: #fff;
    margin-bottom: .1rem;
}
.bourn_model_tit{
    height: .45rem;
    line-height: .45rem;
    padding-left: .15rem;
}
.bourn_model_tit>span{
    font-size: .16rem;
    color: #030303;
    padding-left: .1rem;
    border-left: 2px solid #fcc80b;
}
.bourn_hotbego_nav{
    height: .42rem;
    width: 3.45rem;
    margin-left: .15rem;
}
.bourn_hotbego_nav>div{
    height: .3rem;
    width: .62rem;
    line-height: .3rem;
    text-align: center;
    color: #191919;
    float: left;
    font-size: .14rem;
    margin-right: .08rem;
    border-radius: 5px;
    border: solid 1px #ededed;
}
.bourn_hotbego_nav>.bourn_hotbego_nav_focus{
    background: #f59504;
    color: #fff;
    border: none;
}
.bourn_hotbego_nav>div:last-of-type{
    margin: 0;
}
.bourn_hotbego_box{
    height: 1.5rem;
    width: 100%;
    overflow: auto;
    font-size: 0;
    white-space: nowrap;
}
.bourn_hotbego_list{
    width: 1.09rem;
    height: 1.5rem;
    margin-right: .09rem;
    display: inline-block;
}
.bourn_hotbego_list:first-of-type{
    margin-left: .15rem;
}
.bourn_hotbego_list>img{
    width: 1.09rem;
    height: 1.09rem;
}
.bourn_hotbego_list>p{
    font-size: .14rem;
    color: #272727;
    line-height: .34rem;
    height: .34rem;
}
.bourn_beplay{
    height: 1.45rem;
    width: 100%;
    background: #fff;
    margin-bottom: .12rem;
}
.bourn_beplay>table{
    width: 100%;
    height: 1rem;
}
.bourn_beplay>table,.bourn_beplay>table td{
    border-collapse: collapse;
}
.bourn_beplay>table td{
    border: solid 1px #f2f2f2;
    width: 1.25rem;
}
.bourn_beplay>table p{
    text-align: center;
}
.bourn_beplay_area{
    color: #181818;
    font-size: .14rem;
}
.bourn_beplay_pay{
    color: #8f8f8f;
    font-size: .1rem;
}



/*特惠路线*/
.bourn_road{
    width: 100%;
    background: #fff;
}
.bourn_road_nav{
    height: .3rem;
    width: 100%;
    font-size: 0;
}
.bourn_road_nav>div{
    height: .3rem;
    line-height: .3rem;
    padding: 0 .17rem;
    color: #191919;
    float: left;
    font-size: .14rem;
    margin-right: .08rem;
    border-radius: 5px;
    border: solid 1px #ededed;
}
.bourn_road_nav>div:first-of-type{
    margin-left: .15rem;
}
.bourn_road_nav>.bourn_road_nav_focus{
    background: #f59504;
    color: #fff;
    border: none;
}
.bourn_road_box{
    width: 100%;
}
.bourn_road_list{
    width: 100%;
    /*height: 1.65rem;*/
    border-bottom: 1px solid #f4f4f4;
    padding: .11rem .15rem 0;
    position: relative;
    overflow: hidden;
}
.bourn_road_list>img{
    height: .8rem;
    width: 1.05rem;
    float: left;
    margin-right: .15rem;
}
.bourn_road_list_ri{
    height: .8rem;
    width: 2.24rem;
    float: left;
}
.bourn_road_box_tit{
    color: #4a4a4a;
    font-size: .13rem;
    line-height: .17rem;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
}
.bourn_road_1212{
    background: #e60300;
    color: #fff;
    display: block;
    border-radius: 3px;
    font-size: .08rem;
    width: .25rem;
    height: .13rem;
    float: left;
    margin-right: .1rem;
}
.bourn_road_box_sine{
    display: block;
    height: .14rem;
    width: 1.23rem;
    background: url(../assets//bourn/aaa.png) 0 0 no-repeat;
    background-size: 100% 100%;
    margin-top: .08rem;
    margin-bottom: .08rem;
}
.bourn_road_box_pay{
    font-size: .12rem;
    color: #a4a4a4;
    line-height: .18rem;
}
.bourn_road_box_pay>span{
    color: #dfbc04;
}
.bourn_road_list_bot{
    height: .4rem;
    border-top: 1px dashed #f4f4f4;
    line-height: .4rem;
    color: #929292;
    font-size: .12rem;
    float: left;
    width: 100%;
    margin-top: .1rem;
}
</style>
