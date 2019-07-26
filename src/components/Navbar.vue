<template>
<div id="navbar">
<h2>历知新闻</h2>
            <span>&#xe649;</span>
            <input type="text" placeholder="        搜索你想看的内容" id=""> 
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#navbar {
            width: 100%;
            height: 44px;
            background: rgb(165, 46, 46);
            span{
                color: #ccc;
                // float: left;
                position: absolute;
                font-family: 'Myfont';
                margin-left:10px;
                margin-top: 12px;
            }
            h2 {
                color: white;
                font-size: 18px;
                float: left;
                margin-left: 20px;
                line-height: 44px;
            }
            input {
                height: 26px;
                width: 200px;
                margin-top: 6px;
                border-radius: 5px;
            }
           
        }

</style>