<template>
    <div id="mine">
<!--    <div class="div">-->
<!--        <div class="item">-->
<!--            <div class="itema">-->
<!--                <img src="http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg" alt="">-->
<!--            </div>-->
<!--            <div class="itemb">-->
<!--                <p>Superman</p>-->
<!--            </div>-->
<!--        </div>-->
<!--        <ul class="three">-->
<!--            <li>-->
<!--                <p>&#xe60f;</p>-->
<!--                <p>收藏</p>-->
<!--            </li>-->
<!--            <li>-->
<!--                <p>&#xe718;</p>-->
<!--                <p>历史</p>-->
<!--            </li>-->
<!--            <li>-->
<!--                <p>&#xe670;</p>-->
<!--                <p>消息</p>-->
<!--            </li>-->
<!--        </ul>-->
<!--        <ul class="fruo">-->
<!--            <li>我要爆料</li>-->
<!--            <li>用户反馈</li>-->
<!--            <li>系统设置</li>-->
<!--        </ul>-->
<!--    </div>-->
        <div class="rehister">
            <ul>
                <li>用户名：</li>
                <li>密码：</li>
                <li>确认密码：</li>
            </ul>
            <ul>
                <li><input type="text" placeholder="请输入用户名"></li>
                <li><input type="password" placeholder="请输入密码"></li>
                <li><input type="password" placeholder="请重复密码"></li>
            </ul>
            <button>注册</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        data () {
            return{
            num:0
            }
        }
    }
</script>

<style lang="less" scoped>
    #mine{
        width: 100%;
        height: 100%;



        .item{
            height: 100px;
            width: 100%;
            background-color: #222222;
            border-bottom: #cccccc;
            border-top: #cccccc;
            display: flex;
            align-items: center;
            .itema{
                height: 80%;
                width: 25%;
                border:1px solid white;
                border-radius: 50%;
                overflow: hidden;
                margin: 5px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .itemb{
                height: 80%;
                width: 70%;
                margin: 5px;
                line-height: 80px;
                color: white;
            }
        }
        .three{
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 5px solid #cccccc;
            li{
                float: left;
                font-family: 'Myfont';
                flex-grow: 1;
            }
        }
        .fruo{
            width: 100%;
            li{
                width: 90%;
                height: 50px;
                margin-left: 10%;
                text-align: left;
                line-height: 50px;
            }
            li:nth-of-type(1) {
                border-bottom: 1px solid #cccccc;
            }
            li:nth-of-type(2) {
                border-bottom: 1px solid #cccccc;
            }
        }

    }
    .div{
        width: 100%;
        height: 100%;
    }
    .rehister{
        width: 90%;
        margin: 10% auto;
        overflow: hidden;
    }
    .rehister ul{
        float: left;
    }
    .rehister ul:nth-of-type(1){
        width: 30%;
    }
    .rehister ul:nth-of-type(2){
        width: 70%;
    }
    .rehister li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin: 20px 0;
        font-size: 20px;
    }
    .rehister li input{
        width: 90%;
        height: 40px;
    }
    .rehister button{
        width: 100%;
        height: 40px;
        background-color: deepskyblue;
        margin-top: 80px;
        font-size: 20px;
        color: greenyellow;
    }
</style>