import { Toaster } from '@/Components/UI/Sonner'
import { PropsWithChildren } from 'react'

export function WrapperTheme({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <Toaster richColors position="top-right" closeButton />
        </>
    )
}
