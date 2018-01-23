<template>
    <!-- 页脚 ：菜单切换-->
    <div id="app">
        <footer>
            <router-link to="home" class="home_focuse"><div></div>首页</router-link>
            <router-link to="discover" class="discover_blour"><div></div>发现</router-link>
            <router-link to="bourn" class="bourn_blour"><div></div>目的地</router-link>
            <router-link to="route" class="route_blour"><div></div>行程</router-link>
            <router-link to="mine" class="mine_blour"><div></div>我的</router-link>
        </footer>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return{
            
        }
    }
}

</script>

<style>

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
/*页脚切换菜单*/
footer{
    width: 100%;
    height: .48rem;
    display: flex;
    position: fixed;
    bottom: 0;
    padding-top: .03rem;
    border-top:1px solid #ccc;
}
footer a{
    display: block;
    width:20%;
    text-align: center;
    font-size: .09rem;
}
footer>a>div{
    margin: 0 auto;
    height: .25rem;
    width: 100%;
}

.home_blour>div{
    background: url(./assets/首页.png) center top no-repeat;
    background-size: auto 100%;
}
.discover_blour>div{
    background: url(./assets/发现.png) center top no-repeat;
    background-size: auto 100%;
}
.bourn_blour>div{
    background: url(./assets/目的地.png) center top no-repeat;
    background-size: auto 100%;
}
.route_blour>div{
    background: url(./assets/行程.png) center top no-repeat;
    background-size: auto 100%;
}
.mine_blour>div{
    background: url(./assets/我的.png) center top no-repeat;
    background-size: auto 100%;
}



.home_focuse>div{
    background: url(./assets/首页1.png) center top no-repeat;
    background-size: auto 100%;
}
.discover_focuse>div{
    background: url(./assets/发现1.png) center top no-repeat;
    background-size: auto 100%;
}
.bourn_focuse>div{
    background: url(./assets/目的地1.png) center top no-repeat;
    background-size: auto 100%;
}
.route_focuse>div{
    background: url(./assets/行程1.png) center top no-repeat;
    background-size: auto 100%;
}
.mine_focuse>div{
    background: url(./assets/我的1.png) center top no-repeat;
    background-size: auto 100%;
}
footer img{
    margin: 0 auto;
    height: .25rem;
    display: block;
}
</style>
