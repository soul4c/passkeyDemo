<template>
    <!-- 购物车 -->
    <div class="shopcar tab_link">
        <div class="shopcar_tit">购物车</div>
        <div class="shopcar_nothing">
            <p>亲，购物车空空的耶~</p>
            <span>去逛逛</span>
        </div>
        <div class="shopcar_have"></div>
    </div>
</template>

<script>
export default {
  name: 'cart',
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
/*购物车*/
.shopcar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: .6rem;
}
.shopcar_tit{
    height: .55rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
    background: #f9fafd;
    font-size: .16rem;
    color: #333333;
    text-align: center;
    line-height: .54rem;
    font-weight: bold;
}
/*购物车无物品页面*/
.shopcar_nothing{
    position: absolute;
    top: .55rem;
    left: 0;
    width: 100%;
    bottom: 0;
    background: url(../assets/empty_addrlist-7b6725e9.png) center .75rem no-repeat #efefef;
    background-size: .96rem .96rem;
}
.shopcar_nothing>p{
    text-align: center;
    margin-top: 1.84rem;
    font-size: .16rem;
    color: #999999;
}
.shopcar_nothing>span{
    border: solid 1px #e0e0e0;
    border-radius: 5px;
    width: 1.23rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    font-size: .16rem;
    color: #999999;
    display: block;
    margin: .22rem auto;
}
</style>
