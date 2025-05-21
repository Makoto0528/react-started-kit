import AppLogoIcon from '@/Components/AppLogoIcon'
import placeholderImage from '@images/auth_aurora_2x.png'
import { Head, Link } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children, title }: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <Head title={title} />
            <div className="grid min-h-svh lg:grid-cols-2">
                <div
                    className="bg-muted relative hidden h-full flex-col bg-cover p-10 text-white lg:flex dark:border-r"
                    style={{ backgroundImage: `url(${placeholderImage})` }}
                >
                    <Link href="/" className="relative z-20 flex items-center space-x-2 text-lg font-medium">
                        <AppLogoIcon className="!size-5 dark:text-white" fill="currentColor" />
                        <span className="text-base font-semibold">React Started Kit</span>
                    </Link>

                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-xl">
                                This template has saved me countless hours of work and helped me deliver stunning designs to my clients
                                faster than ever before.
                            </p>
                            <footer className="text-sm">John Doe</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
