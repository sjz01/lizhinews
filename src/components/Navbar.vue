<template>
    <div id="navbar">
        <ul>
            <li>历知新闻</li>
            <li><input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="less" scoped>
    #navbar{
        height: 80px;
        width: 100%;
        position: fixed;
        top: 0px;
        background-color: red;


        ul li{
            float: left;
            font-size: 24px;
        }
    }


</style>