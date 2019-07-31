<template>
    
        <div id="news">
            <div>
                     <Navbar/>
            <div class="toplist" v-if="$store.state.DAI.isnews">
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
            <Details v-if="$store.state.S.isdetails"/>
        <Tabbar  v-if="!$store.state.S.isdetails" />

        </div>  
            </div>
            
    
</template>

<script>
import http from "../../axios/Myapi";
import Navbar from "./Navbar";
import Details from "./Details";
import Tabbar from "./Tabar"
export default {
  name: "News",
  data: function() {
    return {
      arr: [],
      title: "",
      content: ""
    };
  },
  components: {
    Navbar,
    Details,
    Tabbar
  },
  methods: {
    isdetails: function(id) {
      this.$store.state.S.isdetails = true;
      this.$store.state.DAI.Newsid = id;
      this.$store.state.DAI.isnews= false;
      
      http.details(this, id).then(res => {
        this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
        this.content =
          res.data.showapi_res_body.pagebean.contentlist[0].content;
          console.log(res.data.showapi_res_body.pagebean.contentlist[0]);
      });
    }
  },
  created() {
    http.type(this, "推荐").then(res => {
      // console.log(res);
      this.arr = res.data.showapi_res_body.pagebean.contentlist;
    });
  }
};
</script>

<style lang="less" scoped>
    #news{
        width: 100%;
        margin-bottom: 50px;

          .toplist{
              margin-top: 50px;
          }  
        ul{
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

            li{
                text-align: left;
                flex-grow: 1;
                font-size: 18px;
            }
            
            
        li:nth-of-type(1){
            // margin-left: 16px;
            width: 72%;
            height: 100%;
            float: left;
        }
       li:nth-of-type(2){
           margin-left: 20px;
           height: 50px;
           float: left;
        //    background: pink;

           img{
               width: 60px;
               height: 60px;
           }

       }

    }

    }
  
   
</style>