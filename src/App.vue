<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
  
  import Tabbar from './components/Tabar'
  import Newlines from  './components/Newlines'

  export default {
    name: "APP",
    components:{
      Tabbar,Newlines
    }
  }
</script>
<style lang="less">
  html,body{
    width: 100%;
    height: 100%;
  }
</style>
