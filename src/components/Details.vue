<template>
    <div id="details">
        <div class="nav">
            <div @click="isdetails">&#xe60e;</div>
            <div>新闻详情</div>
            <div>&#xe60f;</div>
        </div>
        <div class="content">
            <p>{{this.title}}</p>
            <p>{{this.content}}</p>
            
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
                content:""
            }
        },
        methods:{
            isdetails:function () {
                this.$store.state.S.isdetails = false;
            }
        },
        created() {
            http.details(this,this.$store.state.DAI.Newsid).then((res)=>{
                this.title = res.data.showapi_res_body.pagebean.contentlist[0].title;
                this.content = res.data.showapi_res_body.pagebean.contentlist[0].content;
            //  console.log(res.data.showapi_res_body.pagebean.contentlist[0].content);
            })
        }

    }
</script>

<style lang="less" scoped>
    #details{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        background-color: #fff;
        z-index: 10;

        .nav{
            width: 100%;
            height: 80px;
            background-color: rgb(165, 46, 46);
            display: flex;
            align-items: center;

            div{
                flex-grow: 1;
                font-family: 'myFont';
                font-size: 20px;
                color: #fff;
                
            }
        }
        .content{
            width: 90%;
            text-align: center;
            p:nth-of-type(1){
                font-size: 16px;
                font-weight: 800;
                margin-top: 16px;
            }
            
        }
    }
</style>