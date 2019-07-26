<template>
    
        <div id="hot">
            <Navbar />
            
        </div>   
    
</template>

<script>
import Navbar from './Navbar'
        export default {
             name: "Hot",
             components:{
                 Navbar
             }

        };
</script>

<style lang="less" scoped>
        #hot {
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