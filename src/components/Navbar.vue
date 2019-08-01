<template>
<div id="navbar">
    <div class="nav"   v-if="!$store.state.AI.isInfo">
            <h2>历知新闻</h2>
            <span class="font">&#xe649;</span>
            <input type="text"  v-model="valu"  @input="navseach()"  placeholder="搜索你想看的内容" id="">
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
            <!-- <div  >

                    <div id="details" v-if="!$store.state.AI.Navinfo" >
                        <div class="navbar">
                            <div class="font" @click="isdetails">&#xe60e;</div>
                            <div>TBAB新闻详情</div>
                            <div class="font">&#xe60f;</div>
                        </div>
                        <p class="title">{{title}}</p>
                        <div  v-for="(item,key) in allList" :key="key" class="content">
                              <img  v-if="item.url" :src=item.url alt="">
                            <p v-if="item.length>3" class="text">{{item}}</p>
                        </div>
                    </div>

            </div> -->
</div>
</template>

<script>
import Detaills from "./Details"
import http from '../../axios/Myapi'
import { timeout } from 'q';
export default {
    name:"navbar",
    components:{
        Detaills,http
    },
    data() {
        return {
            valu:"",
            allList:[],
            list:[],
         
        }
    },
    methods:{
        navseach:function(){
                 this. $store.state.AI.OnlyNav= false;
                //  this.$store.state.AI.isInfo = true;
                
           
                  {
                http.type(this,this.valu).then((res)=>{
                    this.list = res.data.showapi_res_body.pagebean.contentlist;
                })  
             }
        },
        isinfo(id){
            this. $store.state.AI.OnlyNav= true;
            this.$store.state.AI.Navinfo = false;
           this.$store.state.DAI.Newsid = id;
           this.$store.state.AI.islupo= true;
            this.$store.state.AI.isInfo = false;

             http.details(this,this.$store.state.AI.newsId).then((res)=>{
              
               this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
      
                this.allList = res.data.showapi_res_body.pagebean.contentlist[0].allList;
                 console.log(res.data.showapi_res_body.pagebean.contentlist[0].allList);

            //   console.log(this.list);

                 http.getFavorite(this, localStorage.username, localStorage.password)
                     .then((res) => {
                         if (res.data.user[4].favorite == null){
                             this.$store.state.S.favorite ==[]
                         } else {
                             this.$store.state.S.favorite = res.data.user[4].favorite
                             this.$store.state.S.favorite.forEach((item)=>{

                                 if (item.id == id){
                                     this.$store.state.S.isss = false;
                                     this.$store.state.S.issc = true;
                                 } else {
                                     this.$store.state.S.issc = false;
                                     this.$store.state.S.isss = true;
                                 }
                             })
                         }


                     })
          })
         
        },
        //  isdetails:function () {
        //  this.$store.state.AI.isInfo = false;
        // },
        
    }
}

</script>

<style lang="less" scoped>
#navbar {
            width: 100%;
            position: active;
                .nav{
                    position: fixed;
                     background: rgb(165, 46, 46);
                     width: 100%;
                     top: 0px;
                      height: 44px;
                      z-index: 10;
                      .font{
                          font-family: "myFont";
                          position: absolute;
                              right: 52px;
                            top: 12px;
                      }
                      h2 {
                            color: white;
                            font-size: 18px;
                            float: left;
                            margin-left: 20px;
                            line-height: 44px;
                        }
                }
            span{
                color: #ccc;
                position: absolute;
                font-family:'Myfont';
                margin-left:18px;
                // margin-top: 12px;
            }
           
            input {
                height: 26px;
                width: 200px;
                margin-top: 6px;
                border-radius: 5px;
            }
    #news{
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;
        background-color: white;
        text-align: left;

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
            // line-height: 60px;
           margin-top: 20;
           font-size: 12px;
           color: #ccc;
       }
    }
    /////////////////////////////////////////////////////////
     #details{
            width: 100%;
            height: 100%;
            // position: fixed;
            top: 0px;
            background-color: #fff;
            z-index: 10;
            font-size: 16px;
            text-align: left;
      
        

        .navbar{
            width: 100%;
            height: 80px;
            background-color: rgb(165, 46, 46);
            display: flex;
            align-items: center;
            position: fixed;
            top: 0px;
          
            .font{
                flex-grow: 1;
                  font-family:'myFont';
                font-size: 20px;
                color: #fff;
                 margin-left: 20px;
                
            }
        }
        
        .title{
                    text-align: center;
                    margin-bottom: 20px;
                    font-weight: 800;
                    margin-top: 90px;
                }
        .content{
            width: 90%;
            margin: 0 auto;
               

                img{
                    width: 100%;
                    height: 200px;
                }
                .text{
                    text-indent:2rem;
                }
        }
    }
     
 }
//////////////////////////////////////////////////////////////////////////////

</style>