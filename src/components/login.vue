<template>
    <div id="login">
        <ul>
            <li>账号：</li>
            <li>密码：</li>
        </ul>
        <ul>
            <li><input type="text" placeholder="请输入账号" v-model="username"></li>
            <li><input type="password" placeholder="请输入密码" v-model="password"></li>
        </ul>
        <div>
            <button class="btna" @click="getuser">登录</button>
            <button class="btnb" @click="rehister">注册</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>