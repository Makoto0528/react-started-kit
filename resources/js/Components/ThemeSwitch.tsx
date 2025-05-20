import { IconCheck, IconMoon, IconSun } from '@tabler/icons-react'
import { cn } from '@/Lib/utils'
import { Button } from '@/Components/UI/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/Components/UI/DropdownMenu'
import {useTheme} from "@/Contexts/ThemeContext/useTheme";
import {useEffect} from "react";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const themeColor = theme === 'dark' ? '#020817' : '#fff'
        const metaThemeColor = document.querySelector("meta[name='theme-color']")
        if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor)
    }, [theme])


    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='scale-95 rounded-full'>
                    <IconSun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                    <IconMoon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light{' '}
                    <IconCheck
                        size={14}
                        className={cn('ml-auto', theme !== 'light' && 'hidden')}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                    <IconCheck
                        size={14}
                        className={cn('ml-auto', theme !== 'dark' && 'hidden')}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                    <IconCheck
                        size={14}
                        className={cn('ml-auto', theme !== 'system' && 'hidden')}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
