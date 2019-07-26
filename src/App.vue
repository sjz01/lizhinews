<template>
  <div id="app">
    <!-- <Navbar /> -->
    <router-view></router-view>
    <Tabbar />
    
    <!-- <p>{{$store.state.DAI.name}}</p> -->
  </div>
</template>

<script>
  
  import Tabbar from './components/Tabar'
  import Navbar from  './components/Navbar'
  import Newlines from  './components/Newlines'

  export default {
    name: "APP",
    components:{
      Tabbar,Newlines
    }
  }
</script>
<style lang="less">

</style>
