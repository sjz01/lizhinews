<template>
    <div id="collect">
         <div class="nav">
            <div>
            收藏
            <span @click="iscollect">&#xe60e;</span>
            </div>
        </div>
        <div class="content">


            <ul class="inner" v-for="(item,key) in content" :key="key">
                <li class="inner1">{{item.url}}</li>
                <li class="inner2">
                    {{item.title}}
                    <p>{{item.pubDate}}<span>{{item.source}}</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import http from '../../axios/Myapi'
    export default {
        name: "collect",
        data:function () {
            return {
                content:[]
            }
        },
        methods:{
            iscollect:function () {
                this.$store.state.S.iscollect = false;
                this.$store.state.S.isme = true
            }
        },
        created() {
            console.log(localStorage.username)
            http.getFavorite(this,localStorage.username,localStorage.password)
                .then((res)=>{
                    this.content = res.data.user[4].favorite
                    console.log(res)
                })
        }
    }
</script>

<style lang="less" scoped>
    #collect{
        width: 100%;
        margin-bottom: 50px;
        .nav{
            width: 100%;
            height: 80px;
            background-color:rgb(165, 46, 46);
            position: fixed;
            top: 0;
            z-index: 999;
            div{
                width: 100%;
                height: 100%;
                font-size: 30px;
                text-align: center;
                line-height: 80px;
                color: white;
                span{
                    font-family: 'Myfont';
                    margin-left: 10px;
                    font-size: 26px;
                    float: left;
                    height: 100%;
                }
            }
        }
        .inner{
            width: 95%;
            margin: 0px auto 0px;
            margin-left: 15px;
            height: 80px;
            border-bottom: 1px solid #ddd;
            .inner1{
                width: 50px;
                height: 50px;
                position: absolute;
                margin-top: 15px;
                background: pink;
            }
            .inner2{
                margin-top: 10px;
                width: 75%;
                float: right;
                margin-right: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                p{  
                    color: gray;
                    float: right;
                    margin-right:20px;
                    margin-top: 26px;
                    span{
                        margin-left: 10px;
                    }

                }
            }
        }
        .content{
            width: 100%;
            margin-top: 80px;
        }
    }

</style>