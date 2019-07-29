<template>
    <div id="newlines">
        <!-- 顶部样式 没有加滑动效果 -->
        <navbar />
        <div id="Topbar" >
        <router-link  tag="span"  to="/news" >国内</router-link>
        <router-link  tag="span"  to="/news">国际</router-link>  
        <router-link  tag="span"  to="/news">IT</router-link>   
        <router-link  tag="span"  to="/news">体育</router-link>   
        <router-link  tag="span"  to="/news">游戏</router-link>  
        <router-link  tag="span"  to="/news">金融</router-link>   
        <router-link  tag="span"  to="/news">娱乐</router-link>  
        </div>
        <Dipc />
        <news />
    </div>
</template>

<script>

import Navbar from "./Navbar"
import Dipc from "./Dipc"
import News from "./News"

export default {
  name: "Newlines",
  components:{
    Navbar,Dipc,News
  }
  ,data() {
    return {
      num:0,
    }
  },
  methods:{

  },
 
};
</script>

<style lang="less" scoped>

#newlines {
  margin-top: 40px;
  overflow: hidden;

  #Topbar {
    width: 100%;
    background-color: white;
    justify-content: space-between;
    display: flex;


    span{
      text-align: center; 
      height: 40px;
      width: 50px;
      line-height:40px;
      font-size: 16px;
    }
  }
}
</style>