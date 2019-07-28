<template>
    <div id="rehister">
        <div class="nav">
            <div>
                注册
                <span @click="islogin">&#xe60e;</span>
            </div>
        </div>
        <div class="pic">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564244949149&di=0dcc0781b40a6734883e8478367caa49&imgtype=0&src=http%3A%2F%2Fwww.xinhuanet.com%2Fbook%2F2019-01%2F28%2F1210048977_15486377793141n.jpg" alt="">
        </div>
        <div class="username">
            <span>&#xe620;</span>
            <input type="text" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="password">
            <span>&#xe63b;</span>
            <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="password">
            <span>&#xe63b;</span>
            <input type="password" placeholder="请输入密码" v-model="repeat">
        </div>
        <button class="btn" @click="register">注册</button>
    </div>
</template>

<script>
    export default {
        name: "Rehister",
        data:function () {
            return{
                username:'',
                password:'',
                repeat:''
            }
        },
        methods:{
            register:function () {
                if (this.username&&this.password&&this.repeat&&this.password==this.repeat) {
                    localStorage.username = this.username;
                    localStorage.password = this.password;
                    this.$store.state.S.isnike = true;
                    this.$store.state.S.isregister=false;
                    this.$store.state.S.islogin = false;
                    this.$store.state.S.isme = true;
                } else {
                    alert('账户或者密码不正确！！')
                }
            },
            islogin:function () {
                this.$store.state.S.isregister=false;
                this.$store.state.S.islogin = true;
            }
        }
    }
</script>

<style lang="less" scoped>
#rehister{
    width: 100%;
    height: 100%;
    background-color: #cccccc;

.nav{
    width: 100%;
    height: 80px;
    background-color: deepskyblue;
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
    .pic{
        width: 125px;
        height: 125px;
        border: 1px solid white;
        border-radius: 50%;
        margin: 30px auto;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .username{
        width: 95%;
        height: 60px;
        margin: 10px auto;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 20px;

        span{
            font-family: "Myfont";
            font-size: 24px;
            display: inline-block;
            height: 100%;
            width: 60px;
            text-align: center;
            line-height: 60px;
            float: left;
        }
        input{
            height: 34px;
            display: inline-block;
            float: left;
            border: 0px;
            font-size: 24px;
            outline:none;
        }
    }
    .password{
        width: 95%;
        height: 60px;
        margin: 10px auto;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 20px;

        span{
            font-family: "pwdFont";
            font-size: 24px;
            height: 100%;
            width: 60px;
            text-align: center;
            line-height: 60px;
            float: left;
        }
        input{
            height: 34px;
            display: inline-block;
            float: left;
            border: 0px;
            font-size: 24px;
            outline:none;
        }
    }
    .btn{
        width: 95%;
        height: 65px;
        margin: 20px auto 0;
        background-color: deepskyblue;
        border-radius: 20px;
        border: 0;
        outline: none;
        font-size: 26px;
        color: white;
    }
}
</style>