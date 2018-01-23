<template>
   <!-- 发现 -->
    <div class="discover tab_link">
    <!-- 发现标题部分 -->
        <div class="discover_header">发现<a href="javascript:;"></a></div>
        <div class="discover_box">
            <!-- 发现顶部 -->
            <div class="discover_top">
                <!-- 发现导航部分 -->
                <div class="discover_top_nav">
                    <div>
                        <span></span>
                        <p>笔记</p>
                    </div>
                    <div>
                        <span></span>
                        <p>笔记</p>
                    </div>
                    <div>
                        <span></span>
                        <p>笔记</p>
                    </div>
                    <div>
                        <span></span>
                        <p>笔记</p>
                    </div>
                    <div>
                        <span></span>
                        <p>笔记</p>
                    </div>
                </div>
                <!-- 发现大图部分 -->
                <div class="discover_top_ban">
                    <router-link to="details" v-for="item in youji"><img :src="item.imgUrl"></router-link>
                </div>
            </div>
            <!-- 优选推荐 -->
            <div class="discover_rec">
                <p class="discover_rec_tit"><span></span>精选推荐</p>
                <!-- 推荐一楼 -->
                <router-link to="details" class="discover_rec_f1">
                    <p class="discover_rec_title">谢尔盖圣三一修道院</p>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513677472619&di=761ca247177475d79cb87e7dc4f80e6f&imgtype=0&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmiddle%2F69e7ffa7gaf2632ab739e%26690" class="discover_rec_f1_ban">
                    <div class="discover_rec_f1_text">
                        来俄罗斯不来谢尔盖耶夫镇，等于没有来俄罗斯，因为“俄罗斯的历史，一半都跟东正教有关”，而世界文化遗产谢尔盖圣三一修道院而世界文化遗产谢尔盖圣三一修道院
                    </div>
                    <div class="discover_rec_bot">
                        <span class="discover_rec_type">游记</span>
                        <div>
                            <span class="discover_rec_eye"></span>
                            <span>736</span>
                            <span class="discover_rec_great"></span>
                            <span>6</span>
                        </div>
                    </div>
                </router-link>
                <!-- 推荐二楼 -->
                <router-link to="details" class="discover_rec_f2" v-for="item in youji">
                    <p class="discover_rec_title2">{{item.cellContent}}</p>
                    <div class="discover_rec_f2_img"><img :src="item.imgUrl"></div>
                    <div class="discover_rec_bot">
                        <span class="discover_rec_type">游记</span>
                        <div>
                            <span class="discover_rec_eye"></span>
                            <span>{{item.imgH}}</span>
                            <span class="discover_rec_great"></span>
                            <span>{{item.imgW}}</span>
                        </div>
                    </div>
                </router-link>

                <!-- <router-link to="details" class="discover_rec_f2">
                    <p class="discover_rec_title">海牙不可错过的5大经典场景</p>
                    <div class="discover_rec_f2_img"></div>
                    <div class="discover_rec_bot">
                        <span class="discover_rec_type">游记</span>
                        <div>
                            <span class="discover_rec_eye"></span>
                            <span>736</span>
                            <span class="discover_rec_great"></span>
                            <span>6</span>
                        </div>
                    </div> -->
                </router-link>
                




            </div>



        </div>
    </div>
<!-- 发现end -->
</template>

<script>
export default {
  name: 'discover',
  data () {
    return {
        youji:[]
    }
  },
  created(){
    this.$http('../../static/youjidata.json').then((res)=>{
        this.youji = res.data.data.contentCells;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
    发现页面
    anthor:ghost;
*/
.discover{
    position: fixed;
    top: 0;
    bottom: .48rem;
    left: 0;
    width: 100%;
    overflow: auto;
    padding-top: .45rem;
}
/*发现标题部分*/
.discover_header{
    height: .45rem;
    width: 100%;
    background: #ffc900;
    line-height: .45rem;
    text-align: center;
    font-size: .16rem;
    color: #333;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.discover_header>a{
    height: .24rem;
    width: .24rem;
    display: block;
    position: absolute;
    right: .11rem;
    top: .11rem;
    background: url(../assets//discover/xiaoxi.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
.discover_box{
    position: absolute;
    top: .45rem;
    bottom: 0;
    width: 100%;
    overflow: auto;
}
/*发现顶部*/
.discover_top{
    height: 1.95rem;
    width: 100%;
    background: url(../assets//discover/597726_20161107195544364335_1.jpg) 0 0 no-repeat;
    background-size: 100% auto;
}
/*发现导航部分*/
.discover_top_nav{
    height: .93rem;
    width: 100%;
    display: flex;
    justify-content:center;
}
.discover_top_nav>div{
    width: .7rem;
    height: .93rem;
}
.discover_top_nav>div>p{
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    font-size: .12rem;
    color: #fff;
}
.discover_top_nav>div>span{
    height: .277rem;
    width: .277rem;
    display: block;
    margin: .2rem auto 0;
}
.discover_top_nav>div:nth-of-type(1)>span{
    background: url(../assets//discover/拍照.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
.discover_top_nav>div:nth-of-type(2)>span{
    background: url(../assets//discover/头条.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
.discover_top_nav>div:nth-of-type(3)>span{
    background: url(../assets//discover/游记.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
.discover_top_nav>div:nth-of-type(4)>span{
    background: url(../assets//discover/排行.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
.discover_top_nav>div:nth-of-type(5)>span{
    background: url(../assets//discover/结伴.png) 0 0 no-repeat;
    background-size: 100% 100%;
}
/*发现大图部分*/
.discover_top_ban{
    height: 1.03rem;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    font-size: 0;
}
.discover_top_ban>a{
    height: .9rem;
    width: 1.6rem;
    border-radius: 5px;
    display: inline-block;
    background: url(../assets//all/ic_alitrip_default_240_240.png) center 0 no-repeat #f2f3f4;
    background-size: auto 100%;
    margin-left: .08rem;
}
.discover_top_ban>a>img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
/*优选推荐*/
.discover_rec{
    width: 100%;
}
.discover_rec_tit{
    height: .49rem;
    line-height: .49rem;
    border-bottom: 2px solid #f6f6f6;
    font-size: .16rem;
    color: #313131;
}
.discover_rec_tit>span{
    display: block;
    width: 2px;
    height: .16rem;
    float: left;
    background: #313131;
    margin: .17rem .1rem .15rem .15rem;
}
/*推荐一楼*/
.discover_rec_f1{
    display: block;
    height: 1.92rem;
    width: 100%;
    border-bottom: 2px solid #f6f6f6;
    padding-left: .15rem;
    padding-right: .2rem;
}
.discover_rec_title{
    height: .52rem;
    line-height: .52rem;
    color: #000000;
    font-size: .18rem;
    font-weight: bold;
}
.discover_rec_title2{
    height: .52rem;
    line-height: .52rem;
    color: #000000;
    font-size: .18rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    width: 3.46rem;
}
.discover_rec_f1_ban{
    height: .95rem;
    width: 1.25rem;
    float: left;
    margin-right: .13rem;
}
.discover_rec_f1_text{
    height: .87rem;
    width: 2rem;
    overflow: hidden;
    -webkit-box-orient:vertical;
    display: -webkit-box;
     -webkit-line-clamp: 4;
     line-height: .21rem;
     font-size: .13rem;
     margin-bottom: .08rem;
}
.discover_rec_bot{
    padding-top: 0.1px;
    height: .46rem;
    width: 100%;
}
.discover_rec_type{
    width: .45rem;
    height: .21rem;
    display: block;
    background: #f2f3f5;
    color: #88898b;
    text-align: center;
    line-height: .21rem;
    font-size: .12rem;
    margin-top: .12rem;
    float: left;
}
.discover_rec_bot>div{
    float: right;
    height: .45rem;
    line-height: .45rem;
    color: #8a8a8a;
}
.discover_rec_bot>div>span{
    float: left;
}
.discover_rec_eye{
    width: .15rem;
    height: .15rem;
    display: block;
    background: url(../assets//discover/_阅读小.png) 0 0 no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-top: .15rem;
    margin-right: .05rem;
}
.discover_rec_great{
    width: .15rem;
    height: .15rem;
    display: block;
    background: url(../assets//discover/赞.png) 0 0 no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-top: .15rem;
    margin-left: .13rem;
    margin-right: .05rem;
}
/*推荐二楼*/
.discover_rec_f2{
    display: block;
    height: 2.48rem;
    border-bottom: 2px solid #f6f6f6;
    width: 100%;
    padding: 0 .15rem;
}
.discover_rec_f2_img{
    width: 3.46rem;
    height: 1.51rem;
    background: url(../assets//all/ic_alitrip_default_240_240.png) center 0 no-repeat #f2f3f4;
    background-size: auto 100%;
}
.discover_rec_f2_img>img{
    width: 100%;
    height: 100%;
}
</style>
