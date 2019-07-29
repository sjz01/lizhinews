<template>
    <div id="me">
        <div class="nav">
            <div class="pic">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564244949149&di=0dcc0781b40a6734883e8478367caa49&imgtype=0&src=http%3A%2F%2Fwww.xinhuanet.com%2Fbook%2F2019-01%2F28%2F1210048977_15486377793141n.jpg" alt="">
            </div>
            <div class="nike" v-if="$store.state.S.isnike">
                鲁迅
            </div>
            <div class="nike" v-if="!$store.state.S.isnike" @click="islogin">
                请先登录
            </div>
        </div>
        <div class="content">
            <span>
                <p>&#xe60f;</p>
                <p>收藏</p>
                </span><span>
                <p>&#xe718;</p>
                <p>历史</p>
                </span><span>
                <p>&#xe670;</p>
                <p>消息</p>
                </span>
        </div>
        <div class="tab">
            <div><span>我要爆料</span></div>
            <div><span>用户反馈</span></div>
            <div><span>系统设置</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Me",
        data:function () {
            return{

            }
        },
        methods:{
          islogin:function () {
              this.$store.state.S.isme = false;
              this.$store.state.S.islogin = true
          }
        },
        created() {
            if (localStorage.username =='admin' && localStorage.password=='admin'){
                this.$store.state.S.nike =true
            } else {
                this.$store.state.S.nike =false
            }
        }
    }
</script>

<style lang="less" scoped>
    #me{
        width: 100%;
        height: 100%;
        background-color: #cccccc;

        .nav{
            width: 100%;
            height: 180px;
            background-color: rgb(165, 46, 46);
            overflow: hidden;

            .pic{
                width: 80px;
                height: 80px;
                overflow: hidden;
                margin:  20px auto;
                border-radius: 50%;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .nike{
                font-size: 24px;
                color: white;
            }
        }
        .content{
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            margin-top: 10px;

            span{
                flex-grow: 1;

                p:nth-of-type(1){
                    font-family: 'myFont';
                    color: #ff0000;
                    font-size: 18px;
                }
                p:nth-of-type(2){
                    color: white;
                    font-size: 18px;
                }
            }
        }
        .tab{
            width: 100%;
            margin-top: 10px;
            padding-top: 10px;

            div{
                width: 100%;
                height: 60px;
                line-height: 60px;
                text-align: left;
                font-size: 18px;

                span{
                    float: left;
                    margin-left: 10px;
                }
            }
            div:nth-of-type(1){
                border-bottom:1px solid white;
            }
            div:nth-of-type(2){
                border-bottom:1px solid white;
            }
        }
    }
</style>