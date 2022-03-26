import Vue from 'vue'
import VueRouter from 'vue-router'

// コンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// store をインポートする
import store from './store'

import SystemError from './pages/errors/System.vue'

// ここでVueRouter インスタンスを使えるようにする
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: PhotoList
    },
    {
        path: '/login',
        component: Login,
        beforeEnter(to, from, next) {
            if (store.getters['auth/check']) {
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: '/500',
        component: SystemError
    }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
