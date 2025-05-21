import AppLogoIcon from '@/Components/AppLogoIcon'
import placeholderImage from '@images/auth_aurora_2x.png'
import { Head, Link, usePage } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children, title }: PropsWithChildren<{ title: string }>) {
    const { quote } = usePage().props
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

                    {quote && (
                        <div className="relative z-20 mt-auto">
                            <blockquote className="text-2xl italic">
                                “{quote.phrase}”
                                <footer className="mt-4 text-sm text-gray-600">
                                    — {quote.author}
                                    <span className="block text-xs text-gray-500">{quote.author_info}</span>
                                </footer>
                            </blockquote>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-sm">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
