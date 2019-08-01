<template>
    <div id="details">
        <div class="nav">
            <div @click="isdetails">&#xe60e;</div>
            <div>新闻详情</div>
            <div class="wsc" @click="updataFavorite($store.state.DAI.Newsid,title,pubDate,source)"  v-if="$store.state.S.isss">&#xe60f;</div>
            <div v-if="$store.state.S.issc" @click="nosc($store.state.DAI.Newsid)" class="ysc">&#xe611;</div>
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
                arr:[],
                source:'',
                pubDate:''

            }
        },
        methods:{
            isdetails:function () {
                this.$store.state.S.isdetails = false;
                this.$store.state.DAI.isnews= true;
                this.$store.state.AI.islupo = false;
                this.$store.state.S.iscect = true;
                this.$store.state.S.isxq = false;
            },
            updataFavorite: function (id, title, pubDate, source) {
                console.log(id,title,pubDate,source, this.$store.state.S.favorite)
                console.log(this.$store.state.DAI.Newsid,'$store.state.DAI.Newsid')
                var i =false
                if (localStorage.question || localStorage.answer || localStorage.username || localStorage.password) {

                    // console.log( this.$store.state.S.favorite)
                    this.$store.state.S.favorite.forEach((item)=>{
                        console.log(item.id)
                        if (item.id == id) {
                            console.log(item.id,id)
                            i =true;
                            return
                        }
                    })
                    if (i) {
                        alert('已经收藏过了哦')
                        return;
                    }
                    this.$store.state.S.favorite.push({
                        id: id,
                        title: title,
                        pubDate: pubDate,
                        source: source,
                    })
                    // this.$store.state.S.favorite = [];
                    // 清空数据库我的收藏
                    // this.$store.state.S.favorite=[]
                    this.jstring = JSON.stringify(this.$store.state.S.favorite)
                    http.updataFavorite(this, localStorage.username, localStorage.password, localStorage.question, localStorage.answer, this.jstring).then((res) => {
                        console.log(res)
                        if (res.data.result){
                            this.$store.state.S.issc = true;
                            this.$store.state.S.isss = false;
                        }
                    })
                } else {
                    alert('要注册才能收藏')
                    return
                }
            },
            nosc:function(id) {
                this.$store.state.S.favorite.forEach((item,key)=>{
                    if (item.id == id){
                        this.$store.state.S.favorite.splice(key,1)
                    }
                })
                this.jstring = JSON.stringify(this.$store.state.S.favorite)
                http.updataFavorite(this, localStorage.username, localStorage.password, localStorage.question,localStorage.answer, this.jstring).then((res)=>{
                    console.log(res)
                })
                console.log(this.$store.state.S.issc,'-------------已经收藏')
                http.getFavorite(this, localStorage.username, localStorage.password)
                    .then((res) => {
                        if (res.data.result){
                            this.$store.state.S.issc = false;
                            this.$store.state.S.isss = true;
                        }
                    })
                console.log(this.$store.state.S.issc,'------------改变标识收藏')
            }
        },
        created() {
            http.details(this,this.$store.state.DAI.Newsid).then((res)=>{
                console.log(this.$store.state.DAI.Newsid,'created')
                this.pubDate = res.data.showapi_res_body.pagebean.contentlist[0].pubDate
                this.source = res.data.showapi_res_body.pagebean.contentlist[0].source
                this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
                this.allList = res.data.showapi_res_body.pagebean.contentlist[0].allList;
            //  console.log(res.data.showapi_res_body.pagebean.contentlist[0].content);
                console.log(this.pubDate,this.source,this.title)
            
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
            .ysc{
                flex-grow: 1;
                font-family: 'ysc';
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