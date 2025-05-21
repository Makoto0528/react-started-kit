import AccountLayout from '@/Layouts/AccountLayout'
import AppLayout from '@/Layouts/AppLayout'

export default function General() {
    return (
        <AppLayout title={'Account Settings'}>
            <AccountLayout>General</AccountLayout>
        </AppLayout>
    )
}
