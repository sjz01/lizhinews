<template>
    <div id="newlines">
        <!-- 顶部样式 没有加滑动效果 -->
        <Navbar />
        <div id="Topbar" >
        <router-link  tag="span"  to="">国内</router-link>
        <router-link  tag="span"  to="">国内</router-link> 
        <router-link  tag="span"  to="">国际</router-link>  
        <router-link  tag="span"  to="">互联网</router-link>   
        <router-link  tag="span"  to="">体育</router-link>   
        <router-link  tag="span"  to="">游戏</router-link>  
        <router-link  tag="span"  to="">金融</router-link>   
        <router-link  tag="span"  to="">娱乐</router-link>  
        <router-link  tag="span"  to=""> 房地产</router-link>  
        </div>
        <Dipc />
    </div>
</template>

<script>

import Navbar from "./Navbar"
import Dipc from "./Dipc"


export default {
  name: "Newlines",
  components:{
    Navbar,Dipc
  }
 
};
</script>

<style lang="less" scoped>
#newlines {
  margin-top: 50px;
  overflow: hidden;

  #Topbar {
    width: 450px;

    background-color: white;

    span{
      display: inline-block;
      height: 50px;
      width: 50px;
      line-height: 50px;
      font-size: 16px;
    }
  }
}
</style>