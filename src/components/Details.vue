<template>
    <div id="details">
        <div class="nav">
            <div @click="isdetails">&#xe60e;</div>
            <div>新闻名字</div>
            <div>&#xe60f;</div>
        </div>
        <div class="content">
            这是内容
        </div>
    </div>
</template>

<script>
    export default {
        name: "Details",
        data:function () {
            return{

            }
        },
        methods:{
            isdetails:function () {
                this.$store.state.S.isdetails = false;
            }
        },
        created() {

        }

    }
</script>

<style lang="less" scoped>
    #details{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        background-color: #cccccc;
        z-index: 10;

        .nav{
            width: 100%;
            height: 80px;
            background-color: #ffffff;
            display: flex;
            align-items: center;

            div{
                flex-grow: 1;
                font-family: 'myFont';
                font-size: 20px;
                color: red;
            }
        }
    }
</style>