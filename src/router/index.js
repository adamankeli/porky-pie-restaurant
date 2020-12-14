import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table.vue'
import App from './App.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        }
    ]
})