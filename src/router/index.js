import Vue from 'vue'
import Router from "vue-router"

import Home from './Home'
import Detail from './Detail'
import Ecosystem from "./Ecosystem"
import Login from "./Login"
import User from '../lib/User'
import RouterBar from '../components/RouterBar'

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: RouterBar,
        children: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/detail',
                component: Detail
            },
            {
                path: '/ecosystem',
                component: Ecosystem
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
]


const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (!User.getLoginStatus()) {
        if (to.path !== '/login') {
            next('/login')
        } else {
            next()
        }
    } else {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    }
})

export default router

