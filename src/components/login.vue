<template>
    <div id="login">
        <div class="nav">
            <div>
                登录
                <span @click="isme">&#xe60e;</span>
            </div>
        </div>
        <div class="content">
            <div class="username">
                <input type="text" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <button class="btn" @click="login">登录</button>
            <div class="rehister">
                <span @click="find">找回密码</span><span @click="isregister(username,password)">前往注册</span>
            </div>
        </div>
    </div>
</template>

<script>
    import http from "../../axios/Myapi";
    export default {
        name: "login",
        data: function () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                http.login(this,this.username,this.password).then((res)=>{
                    if (res.data.result) {
                        localStorage.username = this.username
                        this.$store.state.S.islogin = false;
                        this.$store.state.S.isme = true;
                    } else {
                        alert(res.data.msg);
                    }
                })
            },
            isregister: function () {
                this.$store.state.S.isregister = true;
                this.$store.state.S.islogin = false;
            },
            isme: function () {
                this.$store.state.S.islogin = false;
                this.$store.state.S.isme = true
            },
            find: function () {
                this.$store.state.S.isfind = true;
                this.$store.state.S.islogin = false;
            }
        },
        created() {
            if (!this.$store.state.S.isme) {
                this.$store.state.S.islogin = true;
            }
        }
    }
</script>

<style lang="less" scoped>
    #login {
        width: 100%;
        height: 100%;
        background-color: #F2EFE6;
        position: fixed;
        top: 0;
        z-index: 10;

        .nav {
            width: 100%;
            height: 80px;
            background-color: rgb(165, 46, 46);

            div {
                width: 100%;
                height: 100%;
                font-size: 30px;
                text-align: center;
                line-height: 80px;
                color: white;

                span {
                    font-family: 'Myfont';
                    margin-left: 10px;
                    font-size: 26px;
                    float: left;
                    height: 100%;
                }
            }
        }
        .content{
            width: 100%;
            height: 100%;
            margin-top: 50px;
        }
        .username {
            width: 80%;
            height: 40px;
            margin: 10px auto;
            background-color: white;
            border-bottom: 1px solid black;
            background-color: #F2EFE6;

            input {
                height: 100%;
                width: 100%;
                border: 0px;
                font-size: 18px;
                outline: none;
                background-color: #F2EFE6;
            }
        }

        .password {
            width: 80%;
            height: 40px;
            margin: 10px auto;
            background-color: white;
            border-bottom: 1px solid black;
            background-color: #F2EFE6;

            input {
                height: 100%;
                width: 100%;
                border: 0px;
                font-size: 18px;
                outline: none;
                background-color: #F2EFE6;
            }
        }

        .btn {
            width: 80%;
            height: 50px;
            margin: 80px auto 0;
            background-color: #F2EFE6;
            border-radius: 20px;
            border: 1px solid rgb(165, 46, 46);
            outline: none;
            font-size: 18px;

        }

        .rehister {
            color: #ee9900;
            font-size: 18px;
            margin: 20px;
            margin-bottom: 80px;
            display: flex;
            justify-content: space-between;


        }
    }
</style>