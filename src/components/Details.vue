<template>
    <div id="details">
        <div class="nav">
            <div @click="isdetails">&#xe60e;</div>
            <div>新闻详情</div>
            <div>&#xe60f;</div>
        </div>

        <!-- 正文 -->

                    <div >
                        <p class="title">{{title}}</p>
                        <div  v-for="(item,key) in allList" :key="key" class="content">
                              <img  v-if="item.url" :src=item.url alt="">
                            <p v-if="item.length>3" class="text">{{item}}</p>
                        </div>
                    </div>
                     
    </div>
</template>

<script>

import http from '../../axios/Myapi'
    export default {
        name: "Details",
        data:function () {
            return{
                title:"",
                allList:[],
                arr:[]
            }
        },
        methods:{
            isdetails:function () {
                this.$store.state.S.isdetails = false;
                this.$store.state.DAI.isnews= true;
                this.$store.state.AI.islupo = false;
                this.$store.state.S.iscect = true;
                this.$store.state.S.isxq = false;
            }
        },
        created() {
            http.details(this,this.$store.state.DAI.Newsid).then((res)=>{
                this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
                this.allList = res.data.showapi_res_body.pagebean.contentlist[0].allList;
            //  console.log(res.data.showapi_res_body.pagebean.contentlist[0].content);
            
            })
        }

    }
</script>

<style lang="less" scoped>
         #details{
            width: 100%;
            height: 100%;
            // position: fixed;
            position: relative;
            top: 0px;
            background-color: #fff;
            z-index: 110;
            font-size: 16px;
            text-align: left;
      
        

        .nav{
            width: 100%;
            height: 80px;
            background-color: rgb(165, 46, 46);
            display: flex;
            align-items: center;
            position: fixed;
            top: 0px;

            div{
                flex-grow: 1;
                font-family: 'myFont';
                font-size: 20px;
                color: #fff;
                 margin-left: 40px;
                
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
            margin:10px 18px;
               

                img{
                    width: 100%;
                    height: 200px;
                }
                .text{
                    text-indent:2rem;
                }
        }
    }

</style>