import HomePage from "../pages/HomePage.vue"
import GifPage from "../pages/GifPage.vue"
import AuthorPage from "../pages/AuthorPage.vue"

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/gifs/:gifId',
        name: 'SingleGifPage',
        component: GifPage,
        meta: {
            title: 'Gif'
        }
    },
    {
        path: '/authors/:username',
        name: 'SingleAuthorPage',
        component: AuthorPage,
        meta: {
            title: 'Author'
        }
    }
]
