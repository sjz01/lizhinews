<template>
  <div id="app">
    <router-view></router-view>
  
       
   
  </div>
</template>

<script>
  
  import Tabbar from './components/Tabar'


  export default {
    name: "APP",
    components:{
      Tabbar
    }
  }
</script>
<style lang="less">
  html,body{
    width: 100%;
    height: 100%;
  }
</style>
