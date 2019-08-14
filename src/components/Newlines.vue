<template>
    <div id="newlines">


        <div v-if="(!$store.state.AI.isInfo)">
            <Navbar/>

            <div class="Navshode" v-if="$store.state.AI.OnlyNav">
                <div v-if="!$store.state.AI.islupo">


                    <!-- 顶部样式 没有加滑动效果 -->
                    <div v-if="$store.state.AI.isData">
                        <div id="Topbar">
                            <router-link tag="span" to="" v-for="(item,key) in $store.state.S.arr" :key="key"><span
                                    :class="activekey == key ? redColor : ''" @click="isNew(item.id,item.content,key)">{{item.content}}</span>
                            </router-link>
                        </div>
                    </div>
                    <!-- 轮播图 -->

                </div>
                <Dipc/>
                <!-- <news /> -->

                <div id="news" v-if="!$store.state.AI.islupo">
                    <ul class="listul" v-for="(item,key) in list" :key="key" v-if="!$store.state.AI.isInfo">

                        <li class="one" @click="isinfo(item.id)">{{item.title}}<p>{{item.pubDate}}
                            <span>{{item.source}}</span></p>

                        <li v-if="item.imageurls.length > 1">

                            <img :src="item.imageurls[0].url" alt="">


                        </li>
                    </ul>

                    <!-- 底部导航栏 -->
                    <Tabbar/>
                </div>

            </div>
        </div>


        <!-- 底下是详情页 -->


        <div id="details" v-if="$store.state.AI.isInfo">
            <div class="nav">
                <div @click="isdetails">&#xe60e;</div>
                <div>新闻详情</div>
                <div class="wsc" @click="updataFavorite($store.state.AI.newsId,title,pubDate,source)"  v-if="$store.state.S.isss">&#xe60f;</div>
                <div v-if="$store.state.S.issc" @click="nosc($store.state.AI.newsId)" class="ysc">&#xe611;</div>
            </div>
            <p class="title">{{title}}</p>
            <div v-for="(item,key) in allList" :key="key" class="content">
                <img v-if="item.url" :src=item.url alt="">
                <p v-if="item.length>3" class="text">{{item}}</p>
            </div>
        </div>
    </div>


</template>

<script>
    import http from '../../axios/Myapi'
    import Navbar from "./Navbar"
    import Dipc from "./Dipc"
    import News from "./News"
    import Tabbar from "./Tabar"
    import {close, truncate} from 'fs';

    export default {
        name: "Newlines",
        data: function () {
            return {
                list: [],
                infoList: [],
                activekey: 0,
                redColor: "redColor",
                title: "",
                allList: [],
                pubDate: '',
                source: '',
                arr:[],
                jstring:'',


            }
        },
        components: {
            Navbar, Dipc, News, Tabbar
        },
        methods: {
            isNew: function (id, content, key) {
                this.$store.state.AI.newsId = id;
                this.$store.state.AI.content = content;
                this.activekey = key;
                http.type(this, content).then((res) => {
                    this.list = res.data.showapi_res_body.pagebean.contentlist;
                })

            },

            isdetails: function () {
                this.$store.state.AI.isInfo = false;
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
            },
            isinfo(id) {
                this.$store.state.AI.isInfo = true;
                this.$store.state.AI.newsId = id;
                http.details(this, this.$store.state.AI.newsId).then((res) => {

                    this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
                    this.pubDate = res.data.showapi_res_body.pagebean.contentlist[0].pubDate
                    this.source = res.data.showapi_res_body.pagebean.contentlist[0].source
                    this.url = res.data.showapi_res_body.pagebean.contentlist[0].url
                    this.allList = res.data.showapi_res_body.pagebean.contentlist[0].allList;
                   ;
                })
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
            },
            updataFavorite: function (id, title, pubDate, source) {
                var i =false
                if (localStorage.question || localStorage.answer || localStorage.username || localStorage.password) {

                    // console.log( this.$store.state.S.favorite)
                    this.$store.state.S.favorite.forEach((item)=>{
                        if (item.id == id) {
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
            }
        },

        created() {
            http.type(this, this.$store.state.AI.content).then((res) => {
                this.list = res.data.showapi_res_body.pagebean.contentlist;
            })

        },
        destroyed() {
            console.log(this.$store.state.S.favorite)
        }
    }

</script>


<style lang="less" scoped>

    .redColor {
        color: #a52e2e;
    }

    #newlines {

        overflow: hidden;
        margin-bottom: 50px;

        .ooimg {
            width: 60px;
            height: 60px;
        }

        #Topbar {
            margin-top: 50px;
            width: 100%;
            background-color: white;
            justify-content: space-between;
            display: flex;


            span {
                text-align: center;
                height: 40px;
                width: 50px;
                line-height: 40px;
                font-size: 16px;
            }
        }
    }


    #news {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;

    }

    .listul {
        width: 90%;
        height: 66px;
        margin: 0 auto;
        // background: navy;
        margin-top: 10px;
        border-bottom: 1px solid #eee;
        display: flex;
    }

    li {
        text-align: left;
        flex-grow: 1;
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }


    li:nth-of-type(1) {
        // margin-left: 16px;
        max-width: 300px;
        height: 100%;
    }

    li:nth-of-type(2) {
        margin-left: 20px;
        //  height: 50px;


        img {
            width: 60px;
            height: 60px;
        }
    }

    .LiImg {
        width: 60px;
        height: 60px;
    }

    .one p, span {
        line-height: 60px;
        /*margin-top: 20px;*/
        font-size: 12px;
        color: #ccc;
    }

    // ====================================================================================
    #details {
        width: 100%;
        height: 100%;
        // position: fixed;
        top: 0px;
        background-color: #fff;
        z-index: 10;
        font-size: 16px;
        text-align: left;


        .nav {
            width: 100%;
            height: 80px;
            background-color: rgb(165, 46, 46);
            display: flex;
            align-items: center;
            position: fixed;
            top: 0px;

            div {
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
            .wsc:active{
                flex-grow: 1;
                font-family: 'myFont';
                font-size: 20px;
                color: deepskyblue;
                margin-left: 40px;
            }


        }

        .title {
            text-align: center;
            margin-bottom: 20px;
            font-weight: 800;
            margin-top: 90px;
        }

        .content {
            width: 90%;
            margin: 0 auto;
            margin: 10px 18px;


            img {
                width: 100%;
                height: 200px;
            }

            .text {
                text-indent: 2rem;
            }
        }
    }


</style>