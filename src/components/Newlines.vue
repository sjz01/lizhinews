<template>
    <div id="newlines">
        <Navbar />
        <!-- 顶部样式 没有加滑动效果 -->
        <div id="Topbar" >
        <router-link  tag="span"  to="/news" v-for="(item,key) in $store.state.S.arr" :key="key"><span @click="isNew(item.id)">{{item.content}}</span></router-link>
        </div>
        <Dipc />
        <news />
    </div>
</template>

<script>
import http from '../../axios/Myapi'
import Navbar from "./Navbar"
import Dipc from "./Dipc"
import News from "./News"

export default {
  name: "Newlines",
    data:function () {
      return{

      }
    },
  components:{
    Navbar,Dipc,News
  }
  ,data() {
    return {
      num:0,
    }
  },
  methods:{
      isNew:function (id) {
          this.$store.state.S.isNews = true;
          this.$store.state.S.newsId = id;
      }
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