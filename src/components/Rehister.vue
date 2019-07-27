<template>
    <div id="rehister">
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
</template>

<script>
    export default {
        name: "Rehister"
    }
</script>

<style scoped>

</style>