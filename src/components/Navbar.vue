<template>
<div id="navbar">
    <div>
            <h2>历知新闻</h2>
            <span @click="navseach()">&#xe649;</span>
            <input type="text"  v-model="valu"  placeholder="搜索你想看的内容" id="">
    </div>
            <!-- 这是列表页 -->
            <div >
                <div id="news" v-if="!$store.state.AI.OnlyNav">
                      <ul  class="listul" v-for="(item,key) in list" :key="key" v-if="!$store.state.AI.isInfo" >

                         <li class="one" @click="isinfo(item.id)" >{{item.title}}<p>{{item.pubDate}} <span>{{item.source}}</span></p>
                            
                              <li v-if="item.imageurls.length > 1">
                                
                                    <img :src="item.imageurls[0].url" alt="">
                                
                                
                            </li>
                    </ul>
            <!-- 底部导航栏 -->
                </div>

            </div>
            <!-- 这是详情页 -->
            <!-- <div>

                <Detaills/>

            </div> -->
</div>
</template>

<script>
import Detaills from "./Details"
import http from '../../axios/Myapi'
export default {
    name:"navbar",
    components:{
        Detaills,http
    },
    data() {
        return {
            valu:"",
            alllist:[],
            list:[],
        }
    },
    methods:{
        navseach:function(){
                 this. $store.state.AI.OnlyNav= false;
           
                  {
                http.type(this,this.valu).then((res)=>{
                    this.list = res.data.showapi_res_body.pagebean.contentlist;
                })  
             }
        },
        isinfo(id){
            this.$store.state.AI.isInfo = true;
           this.$store.state.AI.newsId = id;
          http.details(this,this.$store.state.AI.newsId).then((res)=>{
              
               this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
      
                this.allList = res.data.showapi_res_body.pagebean.contentlist[0].allList;
                 console.log(res.data.showapi_res_body.pagebean.contentlist[0].allList);

            //   console.log(this.list);
          })
         
        }
    }
}

</script>

<style lang="less" scoped>
#navbar {
            width: 100%;
            height: 44px;
            background: rgb(165, 46, 46);
            position: fixed;
            top: 0;
            z-index: 10;
            span{
                color: #ccc;
                position: absolute;
                font-family: 'Myfont';
                margin-left:180px;
                margin-top: 12px;
            }
            h2 {
                color: white;
                font-size: 18px;
                float: left;
                margin-left: 20px;
                line-height: 44px;
            }
            input {
                height: 26px;
                width: 200px;
                margin-top: 6px;
                border-radius: 5px;
            }
           
        }

</style>