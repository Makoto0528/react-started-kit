import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import ReactDOMServer from 'react-dom/server'
import { type RouteName, route } from 'ziggy-js'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

type RouteParams = Record<string, string | number | (string | number)[]> | undefined

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({ App, props }) => {
            // @ts-expect-error: ziggy property may not exist in page.props
            global.route<RouteName> = (name: string, params?: RouteParams, absolute?: boolean) =>
                route(name, params, absolute, {
                    // @ts-expect-error: ziggy property may not exist in page.props
                    ...page.props.ziggy,
                    // @ts-expect-error: ziggy property may not exist in page.props
                    location: new URL(page.props.ziggy.location),
                })
            return <App {...props} />
        },
    })
)
