<template>
    <div id="find">
        <div class="nav">
            <div>
                找回密码
                <span>&#xe60e;</span>
            </div>
        </div>
        <div class="user">
            <span>请输入用户名：</span>
            <input type="text" placeholder="请输入用户名" v-model="username">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Find",
        data:function () {
            return {
                username:''
            }

        }
    }
</script>

<style lang="less" scoped>
    #find{
        width: 100%;
        height: 100%;
        background-color: #cccccc;

        .nav{
            width: 100%;
            height: 80px;
            background-color:rgb(165, 46, 46);
            div{
                width: 100%;
                height: 100%;
                font-size: 20px;
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
        .user{
            width: 100%;
            height: 60px;
            background-color: white;


            input{
                height: 40px;
                font-size: 16px;
                outline: none;
            }
        }
    }
</style>