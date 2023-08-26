import {createRouter, createWebHistory} from "vue-router"
import {routes} from "./routes.ts"

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/Giphy/' : '/'),
    scrollBehavior() {
        return {top: 0}
    },
    routes
})

router.beforeEach((to) => {
    document.title = `Giphy | ${to.meta?.title}` ?? 'Giphy'
})

export default router
