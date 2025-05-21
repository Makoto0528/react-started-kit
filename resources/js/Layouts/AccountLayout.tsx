import { PropsWithChildren, useState } from 'react'
import { Separator } from '@/Components/UI/Separator'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/Components/UI/Button'
import { cn } from '@/Lib/utils'
import { Link, router } from '@inertiajs/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/UI/Select'

type AccountNavigationProps = {
    title: string
    href: string
    icon?: LucideIcon | null
}

const items: AccountNavigationProps[] = [
    {
        title: 'General',
        href: '/profile',
        icon: null,
    },
    {
        title: 'Password',
        href: '/profile/password',
        icon: null,
    },
    {
        title: 'Security',
        href: '/profile/security',
        icon: null,
    },
    {
        title: 'Appearance',
        href: '/profile/appearance',
        icon: null,
    },
    {
        title: 'Notifications',
        href: '/profile/notifications',
        icon: null,
    },
    {
        title: 'Billing',
        href: '/profile/billing',
        icon: null,
    },
    {
        title: 'Integrations',
        href: '/profile/integrations',
        icon: null,
    },
];


export default function AccountLayout({ children }: PropsWithChildren) {
    const [val, setVal] = useState('/profile')

    const currentPath = window.location.pathname;

    const handleSelect = (e: string) => {
        setVal(e)
        router.visit(e)
    }

    return (
        <div className="px-4 py-2">
            <div className="mb-8 space-y-0.5">
                <h2 className="text-xl font-semibold tracking-tight">Settings</h2>
                <p className="text-muted-foreground text-sm">Manage your profile and account settings</p>
            </div>

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
                <aside className="w-full max-w-xl lg:w-48">

                    <div className='md:hidden'>
                        <Select value={val} onValueChange={handleSelect}>
                            <SelectTrigger className='h-12 w-full'>
                                <SelectValue placeholder='Theme'/>
                            </SelectTrigger>
                            <SelectContent>
                                {items.map((item) => (
                                    <SelectItem key={item.href} value={item.href}>
                                        <div className='flex gap-x-4 px-2 py-1'>
                                            <span className='text-md'>{item.title}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <nav className="flex flex-col space-y-1 space-x-0 hidden md:block">

                        {items.map((item, index) => (
                            <Button
                                key={`${item.href}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted': currentPath === item.href
                                })}
                            >
                                <Link href={item.href} prefetch>
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </aside>

                <Separator className="my-0.5 md:hidden" />

                <div className="flex-1 md:max-w-2xl">
                    <section className="max-w-xl mt-6 space-y-12">{children}</section>
                </div>
            </div>
        </div>
    )
}
