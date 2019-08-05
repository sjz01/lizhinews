<template>
    <div id="me">
        <div class="nav">
            <div class="pic">
                <img src="../../public/img/6FE8ADEE0932903E8A53CE59783D4E95.png" alt="">
            </div>
            <div class="nike">
            {{name}}
            </div>
        </div>
        <div class="content">
            <span @click="iscollect">
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
        <div class="nologin" @click="nologin">
            注销登录
        </div>
    </div>
</template>

<script>
    import http from '../../axios/Myapi'
    export default {
        name: "Me",
        data:function () {
            return{
                name:''
            }
        },
        methods:{
          islogin:function () {
              this.$store.state.S.isme = false;
              this.$store.state.S.islogin = true
          },
          iscollect:function () {
            this.$store.state.S.iscollect = true;
            this.$store.state.S.isme = false;
          },
          nologin:function () {
              localStorage.clear();
              this.$store.state.S.isme = false;
              this.$store.state.S.islogin = true;
          }
        },
        created() {
            // localStorage.clear()
            console.log(localStorage.username)
          if (localStorage.username) {
              this.name = localStorage.username;
          } else {
              this.$store.state.S.isme = false;
              this.$store.state.S.islogin = true;
          }

        }
    }
</script>

<style lang="less" scoped>
    #me{
        width: 100%;
        height: 100%;
        background-color: #F2EFE6;

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
        .nologin{
            width: 80%;
            height: 60px;
            border: 1px solid rgb(165, 46, 46);
            margin: 20px auto 80px;
            border-radius: 40px;
            font-size: 18px;
            line-height: 60px;
        }
    }
</style>