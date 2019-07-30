<template>
    <div id="collect">
         <div class="nav">
            <div>
            收藏
            <span>&#xe60e;</span>
            </div>
        </div>
            <ul class="inner" v-for="(item,key) in 15" :key="key">
                <li class="inner1"></li>
                <li class="inner2">
                    今天周会微积分就送乌兰饿哦问客服搜啊呢我端接口送礼物咳嗽阿联酋拍呢金佛山我而非妞儿飞牛网给我搜啊接了判断是奥拉夫
                    <p>111<span>222</span></p>
                </li>
            </ul>
        
    </div>
</template>

<script>
    export default {
        name: "collect"
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
            margin: 0 auto;
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
    }

</style>