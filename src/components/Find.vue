<template>
    <div id="find">
        <div class="nav">
            <div>
                找回密码
                <span @click="isfind">&#xe60e;</span>
            </div>
        </div>
        <div class="content">
            <div class="user">
                <input type="text" placeholder="来！输入你那个惊天地泣鬼神的名字！" v-model="username" @change="find(this,username)">
            </div>
            <div class="question">
                <input type="text" placeholder="来！输入你当时设置的那个奇葩问题！" v-model="question">
            </div>
            <div class="answer">
                <input style="margin-left:24px" type="text" placeholder="来！输入你当时设置的那个奇葩答案！" v-model="answer">
            </div>
            <div class="newpwd">
                <input type="text" placeholder="记住你这个新密码" v-model="password">
            </div>
        </div>
        <button class="btn" @click="correct(this,username,password,question,answer)">一定要记住你的新密码！！！</button>
    </div>
</template>

<script>
    import http from '../../axios/Myapi'

    export default {
        name: "Find",
        data: function () {
            return {
                username: '',
                question: '',
                answer: '',
                password: '',
                oldanswer: '',
                correct: false,
                newquestion:'',
                newanswer:''

            }
        },
        methods: {
            find: function () {
                http.find(this, username).then((res) => {
                    if (res.result) {
                        this.correct = true;
                        this.question = localStorage.question;


                        http.correct(this, username).then((res) => {
                            if (res.result) {
                                 res.question = this.newquestion
                                res.answer = this.newanswer
                                this.$store.state.S.isfind = false;
                                this.$store.state.S.islogin = true
                            }else {
                                alert(res.msg)
                            }
                        })
                    } else {
                        alert('用户名不存在，请核对后输入')
                    }
                })
            },
            correct:function(that,username,password,question,answer) {
                http.update(this,username,password,question,answer).then((res)=>{
                    if (res.result) {
                        localStorage.username = res.user;
                        localStorage.password = res.password
                        localStorage.question = res.question;
                        this.$store.state.S.isfind = false;
                        this.$store.state.S.islogin = true
                    }else {
                        alert(res.msg)
                    }
                })
            },
            isfind:function () {
                this.$store.state.S.isfind = false;
                this.$store.state.S.islogin = true
            }
        }
    }
</script>

<style lang="less" scoped>
    #find {
        width: 100%;
        height: 100%;
        background-color: #F2EFE6;

        .nav {
            width: 100%;
            height: 60px;
            background-color: rgb(165, 46, 46);

            div {
                width: 100%;
                height: 100%;
                font-size: 20px;
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

        .content {
            width: 100%;
            height: 100%;
            margin-top: 60px;

            .user {
                width: 80%;
                height: 40px;
                border-bottom: 1px solid black;
                margin: 0px auto;

                input {
                    width: 100%;
                    height: 100%;
                    border: 0px;
                    outline: none;
                    background-color: #F2EFE6;
                    font-size: 18px;
                    text-align: left;
                }
            }

            .question {
                width: 80%;
                height: 40px;
                border-bottom: 1px solid black;
                margin: 40px auto;

                input {
                    width: 100%;
                    height: 100%;
                    border: 0px;
                    outline: none;
                    background-color: #F2EFE6;
                    font-size: 18px;
                    text-align: left;
                }
            }

            .answer {
                width: 80%;
                height: 40px;
                border-bottom: 1px solid black;
                margin: 40px auto;

                input {
                    width: 100%;
                    height: 100%;
                    border: 0px;
                    outline: none;
                    background-color: #F2EFE6;
                    font-size: 18px;
                    text-align: left;
                    margin-left: 0 !important;
                }
            }

            .newpwd {
                width: 80%;
                height: 40px;
                border-bottom: 1px solid black;
                margin: 40px auto;

                input {
                    width: 100%;
                    height: 100%;
                    border: 0px;
                    outline: none;
                    background-color: #F2EFE6;
                    font-size: 18px;
                    text-align: left;
                }
            }
        }

        .btn {
            width: 80%;
            height: 60px;
            background-color: #F2EFE6;
            border: 1px solid rgb(165, 46, 46);
            border-radius: 60px;
            font-size: 18px;
            margin-bottom: 120px;
        }

    }
</style>