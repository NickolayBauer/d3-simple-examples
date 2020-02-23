import Vue from 'vue'
import Router from 'vue-router'

import Figures from '@/views/Figures/'
import Home from '@/views/Pages/Home.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/3-circle',
            name: '3-circle',
            component: Figures.ThreeCircle
        },
        {
            path: '/Histogram',
            name: 'Histogram',
            component: Figures.Histogram
        },
        {
            path:  '/',
            name: 'Home',
            component: Home
        }
    ],
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
})