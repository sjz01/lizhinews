<template>

    <div id="news">
        <div>
            <Navbar v-if="$store.state.DAI.isnews"/>
            <div class="topdiv" v-if="$store.state.DAI.isnews">
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
            <Tabbar  v-if="!$store.state.S.isdetails" />
        </div>
    </div>


</template>

<script>
    import http from "../../axios/Myapi";
    import Navbar from "./Navbar";
    import Details from "./Details";
    import Tabbar  from "./Tabar"
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
                console.log(id);
                http.details(this, id).then(res => {
                    this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
                    this.content =res.data.showapi_res_body.pagebean.contentlist[0].content;
                });



                http.getFavorite(this, localStorage.username, localStorage.password)
                    .then((res) => {
                        console.log(res.data.user[4].favorite)
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
                        console.log(this.$store.state.S.favorite,'this.$store.state.S.favorite')


                    })
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
    #news {
        width: 100%;

        margin-bottom: 50px;
        .topdiv{
            margin-top: 50px;
        }
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