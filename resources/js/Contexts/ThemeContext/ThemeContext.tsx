import React, { createContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeContext({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme', ...props }: ThemeProviderProps) {
    const [theme, updateTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

    useEffect(() => {
        const root = window.document.documentElement

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const applyTheme = (theme: Theme) => {
            root.classList.remove('light', 'dark')
            const systemTheme = mediaQuery.matches ? 'dark' : 'light'
            const effectiveTheme = theme === 'system' ? systemTheme : theme
            root.classList.add(effectiveTheme)
        }

        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system')
            }
        }

        applyTheme(theme)

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme])

    const setTheme = (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        updateTheme(theme)
    }

    const value = {
        theme,
        setTheme,
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export default ThemeProviderContext
