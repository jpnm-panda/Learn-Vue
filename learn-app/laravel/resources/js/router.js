import Vue from 'vue'
import VueRouter from 'vue-router'

// コンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// ここでVueRouter インスタンスを使えるようにする
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: PhotoList
    },
    {
        path: '/login',
        component: Login
    }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
