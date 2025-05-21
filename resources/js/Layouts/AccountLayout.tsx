import { Button } from '@/Components/UI/Button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/UI/Select'
import { Separator } from '@/Components/UI/Separator'
import { useLocation } from '@/Hooks/useLocation'
import { cn } from '@/Lib/utils'
import { Link, router } from '@inertiajs/react'
import { LucideIcon } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'

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
]

export default function AccountLayout({ children }: PropsWithChildren) {
    const location = useLocation()
    const [val, setVal] = useState(location.pathname ?? '/profile')

    const currentPath = location.pathname

    const handleSelect = (e: string) => {
        setVal(e)
        router.visit(e)
    }

    return (
        <div className="px-0 py-2 md:px-4">
            <div className="mb-8 space-y-0.5">
                <h2 className="text-xl font-semibold tracking-tight">Profile</h2>
                <p className="text-muted-foreground text-sm">Manage your profile and account settings</p>
            </div>

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
                <aside className="w-full max-w-xl lg:w-48">
                    <div className="md:hidden">
                        <Select value={val} onValueChange={handleSelect}>
                            <SelectTrigger className="h-12 w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                {items.map((item) => (
                                    <SelectItem key={item.href} value={item.href}>
                                        <div className="flex gap-x-4 px-2 py-1">
                                            <span className="text-md">{item.title}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <nav className="flex hidden flex-col space-y-1 space-x-0 md:block">
                        {items.map((item, index) => (
                            <Button
                                key={`${item.href}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted': currentPath === item.href,
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
                    <section className="mt-6 max-w-xl space-y-12 md:mt-0">{children}</section>
                </div>
            </div>
        </div>
    )
}
