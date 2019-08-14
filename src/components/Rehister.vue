<template>
    <div id="rehister">
        <div class="nav">
            <div>
                注册
                <span @click="islogin">&#xe60e;</span>
            </div>
        </div>
        <div class="username">
            <input type="text" placeholder="请输入用户名" v-model="username" maxlength="20">
        </div>
        <div class="password">
            <input type="password" maxlength="20" placeholder="请输入密码" v-model="password">
        </div>
       <div class="question">
           <input type="text" placeholder="定义一个问题吧！" v-model="question">
       </div>
        <div class="answer">
            <input type="password" placeholder="给你苦思冥想的密码一个答案吧！" v-model="answer">
        </div>
        <button class="btn" @click="register">注册</button>
    </div>
</template>

<script>
    import http from "../../axios/Myapi";
    export default {
        name: "Rehister",
        data:function () {
            return{
                username:'',
                password:'',
                question:'',
                answer:''
            }
        },
        methods:{
            register:function () {
                http.register(this,this.username,this.password,this.question,this.answer).then((res)=>{
                    if (res.data.result){
                        console.log(res)
                        localStorage.username = this.username
                        localStorage.password = this.password
                        localStorage.question = this.question
                        localStorage.answer = this.answer;
                        this.$store.state.S.isregister=false;
                        this.$store.state.S.isme = true;
                    } else {
                        console.log(res.data.msg)

                    }
                })
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
    background-color: #F2EFE6;
    position: fixed;
    top: 0;
    z-index: 10;

.nav{
    width: 100%;
    height: 80px;
    background-color: rgb(165, 46, 46);
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
    
    .username{
        width: 80%;
        height: 40px;
        margin: 30px auto;
        background-color: #F2EFE6;
        border-bottom: 1px solid black;

        input{
            width: 100%;
            height: 100%;
            border: 0px;
            font-size: 18px;
            outline:none;
            background-color: #F2EFE6;
        }
    }
    .question{
        width: 80%;
        height: 40px;
        margin: 30px auto;
        background-color: #F2EFE6;
        border-bottom: 1px solid black;

        input{
            width: 100%;
            height: 100%;
            border: 0px;
            font-size: 18px;
            outline:none;
            background-color: #F2EFE6;
        }
    }
    .answer{
        width: 80%;
        height: 40px;
        margin: 30px auto;
        background-color: #F2EFE6;
        border-bottom: 1px solid black;

        input{
            width: 100%;
            height: 100%;
            border: 0px;
            font-size: 18px;
            outline:none;
            background-color: #F2EFE6;
        }
    }

    .password{
        width: 80%;
        height: 40px;
        margin: 30px auto;
        background-color: #F2EFE6;
        border-bottom: 1px solid black;

        input{
            width: 100%;
            height: 100%;
            border: 0px;
            font-size: 18px;
            outline:none;
            background-color: #F2EFE6;
        }
    }
    .btn{
        width: 80%;
        height: 60px;
        margin: 20px auto 0;
        background-color: #F2EFE6;
        border-radius: 20px;
        border: 1px solid rgb(165, 46, 46);
        outline: none;
        font-size: 20px;
        margin-bottom: 70px;
    }
}
</style>