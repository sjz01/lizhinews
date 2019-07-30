<template>
    <div id="news">
    <Navbar/>

        <div>
            <ul v-for="(item,key) in arr" :key="key" @click="isdetails">
                <li class="one">{{item.title}}<p>{{item.pubDate}} <span>{{item.source}}</span></p>
                </li>
                <li v-if="item.imageurls.length==1">
                   
                    <div   v-for="(item,key) in item.imageurls" :key="key">
                        <img :src="item.url" alt="">
                    </div>
                </li>
            </ul>
    </div>
        <Details v-if="$store.state.S.isdetails"/>
    </div>
</template>

<script>
import http from '../../axios/Myapi'
import Navbar from './Navbar'
import Details from './Details'
    export default {
        name: "News",
        data:function() {
          return{
              arr:[]
          }
        },
        components:{
            Navbar,Details
        },
        methods:{
            isdetails:function () {
                this.$store.state.S.isdetails = true;
            }
        },
        created() {
            if (this.$store.state.S.isNews) {
              
                http.Allnews(this,this.$store.state.S.newsId).then((res)=>{
                    this.arr = res.data.showapi_res_body.pagebean.contentlist;
                    console.log(this.arr)
                })
            } else {
                
                http.type(this,'推荐').then((res)=>{
                    console.log(res)
                    this.arr = res.data.showapi_res_body.pagebean.contentlist;
                })
            }

        }
    }
</script>

<style lang="less" scoped>
    #news{
        width: 100%;
        height: 90%;
        margin-top: 50px;
        margin-bottom: 50px;
        overflow: scroll;

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