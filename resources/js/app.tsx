import 'unfonts.css'
import '../css/app.css'
import './bootstrap'

import { WrapperTheme } from '@/Components/WrapperTheme'
import { ThemeContext } from '@/Contexts/ThemeContext/ThemeContext'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el)

        root.render(
            <ThemeContext>
                <WrapperTheme>
                    <App {...props} />
                </WrapperTheme>
            </ThemeContext>
        )
    },
    progress: {
        color: '#4B5563',
    },
})
