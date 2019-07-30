<template>
<div id="find">
<div class="nav">
<div>
找回密码
<span>&#xe60e;</span>
</div>
</div>
<div class="user" >
<span>用户名:</span>
<input type="text" placeholder="请输入用户名" v-model="username">
</div>
<div class="question" >
<span style="margin-left:19px">问题:</span>
<select name="" id="" style="margin-left:24px">
<option value="">你喜欢的水果</option>
<option value="">你的生日</option>
<option value="">你喜欢吃的零食</option>
<option value="">你最喜欢的动物</option>
<option value="">你小学老师的名字</option>
<option value="">对你影响最深的人</option>
</select>
<!-- <input style="margin-left:16px" type="text" placeholder="请输入问题" v-model="question"> -->
</div>
<div class="answer" >
<span style="margin-left:19px">答案:</span>
<input style="margin-left:24px" type="text" placeholder="请输入答案" v-model="answer">
</div>
<div class="newpwd" >
<span>新密码:</span>
<input type="text" placeholder="请输入新密码" v-model="newpwd">
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
// height: 100%;
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

.user,.question,.answer,.newpwd{
width: 95%;
height: 60px;
margin: 10px auto;
margin-left: 30px;
display: flex;
align-items: center;
span{
font-size: 20px;
font-weight: 500;
color: rgb(56, 51, 51);
}
input,select{
width: 60%;
color:#777;
height: 50px;
background-color: white;
border-radius: 20px;
font-size: 18px;
margin-left: 26px;
} 
}
}
</style>