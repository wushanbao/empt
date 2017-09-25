import Vue from 'vue'
import Router from 'vue-router'

//home 里的header

import shouye from '../components/shouye/shouye.vue'
import  maoliang from '../components/maoliang/maoliang.vue'
import  yiliao from '../components/yiliao/yiliao.vue'
import  lingshi from '../components/lingshi/lingshi.vue'
import   riyong  from '../components/riyong/riyong.vue'
import   meirong  from '../components/meirong/meirong.vue'
//footer
import home from '../components/home/home.vue'

import classify from '../components/classify/classify.vue'
import shopcard from '../components/shopcard/shopcard.vue'
import mypet from '../components/mypet/mypet.vue'
import register from '../components/register/register.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path:'/home',
      component:home,
      children: [
        {
          path: '/',
          redirect:'/home/shouye',
        },
        {
          path:'shouye',
          component:shouye

        },
        {
          path: 'maoliang',
          component: maoliang,
        },
        {
          path: 'yiliao',
          component: yiliao
        },
        {
          path: 'lingshi',
          component: lingshi
        },
        {
          path: 'riyong',
          component: riyong
        },
        {
          path: 'meirong',
          component: meirong
        }
      ]
    },{
      path: '/classify',
      component: classify
    },
    {
      path: '/shopcard',
      component: shopcard
    },
    {
      path: '/mypet',
      component: mypet
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
