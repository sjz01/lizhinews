<template>
    
        <div id="hot">
            <div>
                     <Navbar v-if="$store.state.DAI.dj"/>
            <div v-if="$store.state.DAI.dj">
                <ul v-for="(item,key) in arr" :key="key" @click="isdetails(item.id)">
                    <li class="one">{{item.title}}<p>{{item.pubDate}} <span>{{item.source}}</span></p>
                   </li>
                    
                    <li v-if="item.imageurls.length==1">
                        <div v-for="(item,key) in item.imageurls" :key="key">
                            <img :src="item.url" alt="">
                        </div>
                    </li>
                </ul>
        </div>
            <Details  v-if="$store.state.S.isdetails"/>
        </div>  


        <div  v-if="$store.state.DAI.djj">
            <div class="nav">
            <div @click="isdetails">&#xe60e;</div>
            <div>新闻详情</div>
            <div>&#xe60f;</div>
             </div>
        <div class="content">
            <p>{{this.title}}</p>
            <p>{{this.content}}</p>
            
        </div>
        </div>
            </div>
            
    
</template>

<script>
import http from "../../axios/Myapi";
import Navbar from "./Navbar";
import Details from "./Details";
export default {
  name: "Hot",
  data: function() {
    return {
      arr: [],
      title: "",
      content: ""
    };
  },
  components: {
    Navbar,
    Details
  },
  methods: {
    isdetails: function(id) {
      this.$store.state.DAI.dj = false;
      this.$store.state.DAI.djj = true;
      http.details(this, id).then(res => {
        this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
        this.content =
          res.data.showapi_res_body.pagebean.contentlist[0].content;
      });
    }
  },
  created() {
    http.type(this, "热点").then(res => {
      console.log(res);
      this.arr = res.data.showapi_res_body.pagebean.contentlist;
    });
  }
};
</script>

<style lang="less" scoped>
#hot {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  ul {
    width: 90%;
    height: 66px;
    margin: 0 auto;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    .one {
      width: 150px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      p {
        font-size: 12px;
        margin-top: 18px;
        color: #bbb;
        span {
          margin-left: 15px;
        }
      }
    }

    li {
      text-align: left;
      flex-grow: 1;
      font-size: 18px;
    }

    li:nth-of-type(1) {
      // margin-left: 16px;
      width: 72%;
      height: 100%;
      float: left;
    }
    li:nth-of-type(2) {
      margin-left: 20px;
      width: 50px;
      height: 50px;
      float: left;
      //   background: yellow;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  .nav {
    width: 100%;
    height: 80px;
    background-color: rgb(165, 46, 46);
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;

    div {
      flex-grow: 1;
      font-family: "myFont";
      font-size: 20px;
      color: #fff;
    }
  }

  .content {
    margin-top: 80px;
    width: 90%;
    text-align: center;
    p:nth-of-type(1) {
      font-size: 16px;
      font-weight: 800;
      margin-top: 16px;
    }
  }
}
</style>