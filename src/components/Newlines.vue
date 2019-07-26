<template>
    <div id="newlines">
        <!-- 顶部样式 没有加滑动效果 -->

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
    </div>
</template>

<script>





export default {
  name: "Newlines",
 
};
</script>

<style lang="less" scoped>
#newlines {
  margin-top: 80px;
  background-color: #cccccc;
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