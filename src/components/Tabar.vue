<template>
    <div id="tabbar">
        <ul>
            <router-link tag="li" to="/" exact>
                <p>&#xe61b;</p>
                <p>首页</p>
            </router-link>
            <router-link tag="li" to="/Hot">
                <p>&#xe651;</p>
                <p>热点</p>
            </router-link>
            <router-link tag="li" to="/news">
                <p>&#xe731;</p>
                <p>推荐</p>
            </router-link>
                <router-link tag="li" to="/mine" name="/mine">
                    <p>&#xe620;</p>
                    <p>我的</p>
                </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabar"
    }
</script>

<style lang="less" scoped>
    #tabbar{
        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        // margin-top: 50px;
        background-color: #fff;

        ul {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;

                li {
                float: left;
                text-align: center;
                height: 50px;
                flex-grow: 1;
                font-family: 'Myfont';
                font-size: 16px;
                padding-top: 5px;
             }
            
            .router-link-active{
                color: rgb(165, 46, 46);
            }
        }
    }
</style>