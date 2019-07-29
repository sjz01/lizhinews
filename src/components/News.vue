<template>
    <div id="news">
    <Navbar/>

        <div>
            <ul v-for="(item,key) in arr" :key="key" @click="isdetails">
                <li>{{item.title}}</li>
                <li v-if="item.imageurls.length==1">
                    <div v-for="(item,key) in item.imageurls" :key="key">
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
                    this.arr = res.data.showapi_res_body.pagebean.channelList;
                })
            }

        }
    }
</script>

<style lang="less" scoped>
    #news{
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;

        ul{
            width: 90%;
            height: 66px;
            margin: 0 auto;
            // background: navy;
            margin-top: 10px;
            border-bottom: 1px solid #eee;
            display: flex;

            li{
                text-align: left;
                flex-grow: 1;
                font-size: 18px;
            }
        
            
        li:nth-of-type(1){
            // margin-left: 16px;

            height: 100%;
            float: left;
        }
       li:nth-of-type(2){
           margin-left: 20px;
           height: 50px;
           float: left;
           background: pink;

           img{
               width: 60px;
               height: 60px;
           }

       }

    }

    }
  
   
</style>