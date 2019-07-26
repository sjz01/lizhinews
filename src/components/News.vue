<template>
    <div id="news">
    <Navbar/>

        <div>
            <ul v-for="(movie,key) in 10" :key="key">
                <li>今天大海口市曾多次农家菜卡鹌鹑蛋能看出寄到你可查看擦不多见日理万列入来哦步履来吃来创建你上次的</li>
                <li></li>
            </ul>
        </div>
       
    </div>
</template>

<script>

import Navbar from './Navbar'
    export default {
        name: "News",
        components:{
            Navbar
        }
    }
</script>

<style lang="less" scoped>
    #news{
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;

        ul{
            width: 90%;
            height: 66px;
            margin: 0 auto;
            // background: navy;
            margin-top: 10px;
            border-bottom: 1px solid #eee;
        
            
        li:nth-of-type(1){
            // margin-left: 16px;
            width: 72%;
            height: 100%;
            float: left;
        }
       li:nth-of-type(2){
           margin-left: 20px;
           width: 50px;
           height: 50px;
           float: left;
           background: pink;

       }

    }

    }
  
   
</style>