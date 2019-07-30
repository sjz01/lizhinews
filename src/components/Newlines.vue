<template>
    <div id="newlines">
        <Navbar />
        <!-- 顶部样式 没有加滑动效果 -->
        <div v-if="$store.state.AI.isData">
        <div id="Topbar" >
        <router-link   tag="span" to=""  v-for="(item,key) in $store.state.S.arr" :key="key"><span :class="activekey == key ? redColor : ''" @click="isNew(item.id,item.content,key)">{{item.content}}</span></router-link>
        </div>


        <Dipc />
        <!-- <news /> -->

          <div id="news">
            <ul class="listul" v-for="(item,key) in list" :key="key" >
              <li class="one">{{item.title}}<p>{{item.pubDate}} <span>{{item.source}}</span></p>
                
                <li v-if="item.imageurls.length > 1">
                    
                        <img :src="item.imageurls[0].url" alt="">
                     
                    
                </li>
            </ul>
          <!-- <ul>
              <li class="listul" v-for="(item,key) in list" :key="key" @click="isdetails">
                 <p>
                     <span>{{item.title}}</span>
                </p> 
                 <div class="ooimg" :style=" 'backgroud-image: url(' + item.img + ')' ">
                     <img :src="item.img" alt="" class="LiImg" width="50" height="50" :style="" > -->
                <!-- </div> 
            </li>
             
          </ul> --> 

        </div>
        </div>
           
    </div>
</template>

<script>
import http from '../../axios/Myapi'
import Navbar from "./Navbar"
import Dipc from "./Dipc"
import News from "./News"
import { close, truncate } from 'fs';

export default {
    name: "Newlines",
    data:function () {
      return{
        list:[],
        activekey: 0,
        redColor: "redColor"
      }
    },
  components:{
    Navbar,Dipc,News
  },
  methods:{
      isNew:function (id,content,key) {
          this.$store.state.S.newsId = id;
          this.$store.state.AI.content = content;
          this.activekey = key;
          console.log(this.$store.state.AI.content);
          http.type(this,this.$store.state.AI.content).then((res)=>{
              this.list = res.data.showapi_res_body.pagebean.contentlist;
              console.log(this.list);
          })
        
      },
     
  },
   created() {
                http.type(this,this.$store.state.AI.content).then((res)=>{
                    this.list = res.data.showapi_res_body.pagebean.contentlist;
                    // this.list.forEach(function(item){
                    //     item.myImg = require(item.img)
                    // })
                    
                   
                   
                   
                })  
             }
};
</script>


<style lang="less" scoped>

.redColor {
    color : #a52e2e;
}
#newlines {
  margin-top: 40px;
  overflow: hidden;

  .ooimg {
      width: 60px;
      height: 60px;
  }

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


#news{
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;

    }

        .listul{
            width: 90%;
            height: 66px;
            margin: 0 auto;
            // background: navy;
            margin-top: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
        }
            li{
                text-align: left;
                flex-grow: 1;
                font-size: 18px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

        
            
        li:nth-of-type(1){
            // margin-left: 16px;
            max-width: 300px;
            height: 100%;  
        }
       li:nth-of-type(2){
           margin-left: 20px;
          //  height: 50px;
   

           img{
               width: 60px;
               height: 60px;
           }
       }
       .LiImg{
         width: 60px;
         height: 60px;
       }

       .one p,span{
            line-height: 60px;
           margin-top: 20;
           font-size: 14px;
       }
</style>