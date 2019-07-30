<template>
    <div id="mine">
        <Me v-if="$store.state.S.isme"/>
        <Login v-if="$store.state.S.islogin"/>
        <Rehister v-if="$store.state.S.isregister"/>
        <Find v-if="$store.state.S.isfind"/>
        <collect v-if="$store.state.S.iscollect"/>
    </div>
</template>

<script>
    import Me from './Me'
    import Login from './login'
    import Rehister from './Rehister'
    import Find from './Find'
    import collect from './collect'
    export default {
        name: "Mine",
        components:{
            Me,Login,Rehister,Find,collect
        },
        data () {
            return{

            }
        },
        methods:{


        }
    }
</script>

<style lang="less" scoped>
    #mine {
        width: 100%;
        height: 100%;

    }
</style>