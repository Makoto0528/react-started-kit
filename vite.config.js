import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import UnFonts from 'unplugin-fonts/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        UnFonts({
            custom: {
                families: [
                    {
                        name: 'Geist',
                        src: 'resources/fonts/geist/Geist[wght].woff2',
                        fontWeight: '400 700',
                        fontStyle: 'normal',
                        fontDisplay: 'swap',
                        format: 'woff2-variations'
                    },
                ]
            }
        })
    ],
});
