import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path:'/',
        component:() => import('./components/Newlines'),
      },
      {
        path:"/Details",
        comments:() =>import("./components/Details.vue")
    },
        
    
    {
      path:'/Hot',
      component:() => import('./components/Hot')
    },
    {
      path:'/news',
      component:() => import('./components/News')
    },
    {
      path:'/mine',
      component:() => import('./components/Mine'),
      children:[
        {
          path:'login',
          component:()=> import('./components/login')
        },
        {
          path:'rehister',
          component:() => import('./components/Rehister')
        }
      ]
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
