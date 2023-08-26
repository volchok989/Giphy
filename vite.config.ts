import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/Giphy/' : '',
    appType: 'spa',
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                scope: '/Giphy/',
                start_url: '/Giphy/',
                name: 'Giphy',
                short_name: 'giphy',
                description: 'Search your GIF',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '/Giphy/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/Giphy/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        }),
        vuetify()
    ]
})
