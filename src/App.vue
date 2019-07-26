<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <Navbar /> -->
    <router-view></router-view>
    <Tabbar />
    
    <!-- <p>{{$store.state.DAI.name}}</p> -->
=======
    <router-view></router-view>
    <Tabbar />
>>>>>>> 99cbb1b1cfcc4852ce4db22bea86e617cb27aa94
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

</style>
