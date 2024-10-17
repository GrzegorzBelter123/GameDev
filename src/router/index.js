import { createWebHistory, createRouter } from 'vue-router'

import UserList from '../views/UserList.vue'
import UserAdd from '../views/UserAdd.vue'
import UserEdit from '../views/UserEdit.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'UserList',
        component: UserList
    },
    {
        path: '/user-add',
        name: 'UserAdd',
        component: UserAdd
    },
    {
        path: '/user-edit/:id',
        name: 'UserEdit',
        component: UserEdit
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
