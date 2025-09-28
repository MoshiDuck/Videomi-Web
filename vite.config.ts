// Todo : vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Videomi - Media Family App',
                short_name: 'Videomi',
                description: 'Application familiale de gestion de médias',
                theme_color: '#3b82f6',
                background_color: '#0f172a',
                display: 'standalone',
                icons: [
                    {
                        src: '/icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}']
            }
        })
    ],
    base: './',
    build: {
        outDir: 'dist',
        sourcemap: false,
        chunkSizeWarningLimit: 1000
    },
    resolve: {
        alias: {
            '@': '/src',
            '@/components': '/src/components',
            '@/lib': '/src/lib',
            '@/hooks': '/src/hooks'
        }
    }
})