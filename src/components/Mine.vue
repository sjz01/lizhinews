<template>
    <div id="mine">
        <Me v-if="$store.state.S.isme"/>
        <Login v-if="$store.state.S.islogin"/>
        <Rehister v-if="$store.state.S.isregister"/>
    </div>
</template>

<script>
    import Me from './Me'
    import Login from './login'
    import Rehister from './Rehister'
    export default {
        name: "Mine",
        components:{
            Me,Login,Rehister
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