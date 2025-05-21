import {
    ChartNoAxesColumnIcon,
    LayoutDashboardIcon,
    DatabaseIcon,
    FileTextIcon,
    FolderIcon,
    HelpCircleIcon,
    ClipboardListIcon,
    SquaresExcludeIcon,
    SearchIcon,
    CogIcon,
    UsersIcon,
} from 'lucide-react'
import * as React from 'react'

import { NavDocuments } from '@/Components/NavDocuments'
import { NavMain } from '@/Components/NavMain'
import { NavSecondary } from '@/Components/NavSecondary'
import { NavUser } from '@/Components/NavUser'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/Components/UI/Sidebar'
import AppLogoIcon from '@/Components/AppLogoIcon'

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '#',
            icon: LayoutDashboardIcon,
        },
        {
            title: 'Lifecycle',
            url: '#',
            icon: ClipboardListIcon,
        },
        {
            title: 'Analytics',
            url: '#',
            icon: ChartNoAxesColumnIcon,
        },
        {
            title: 'Projects',
            url: '#',
            icon: FolderIcon,
        },
        {
            title: 'Team',
            url: '#',
            icon: UsersIcon,
        },
    ],
    navSecondary: [
        {
            title: 'Settings',
            url: '#',
            icon: CogIcon,
        },
        {
            title: 'Get Help',
            url: '#',
            icon: HelpCircleIcon,
        },
        {
            title: 'Search',
            url: '#',
            icon: SearchIcon,
        },
    ],
    documents: [
        {
            name: 'Data Library',
            url: '#',
            icon: DatabaseIcon,
        },
        {
            name: 'Reports',
            url: '#',
            icon: SquaresExcludeIcon,
        },
        {
            name: 'Word Assistant',
            url: '#',
            icon: FileTextIcon,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <a href="#">
                                <AppLogoIcon className="!size-5 dark:text-white" fill="currentColor" />
                                <span className="text-base font-semibold">React Started Kit</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavDocuments items={data.documents} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
