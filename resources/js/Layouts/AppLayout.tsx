import { AppSidebar } from '@/Components/AppSidebar'
import { SiteHeader } from '@/Components/SiteHeader'
import { SidebarInset, SidebarProvider } from '@/Components/UI/Sidebar'
import * as React from 'react'

import {Head} from "@inertiajs/react";
import { PropsWithChildren } from 'react'

export default function AppLayout({children, title} : PropsWithChildren<{title: string}>) {
    return (
        <>
            <Head title={title} />
            <SidebarProvider
                style={
                    {
                        '--sidebar-width': 'calc(var(--spacing) * 72)',
                        '--header-height': 'calc(var(--spacing) * 12)',
                    } as React.CSSProperties
                }
            >
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader />
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
