import AccountLayout from '@/Layouts/AccountLayout'
import AppLayout from '@/Layouts/AppLayout'

export default function Security() {
    return (
        <AppLayout title={'Account Settings'}>
            <AccountLayout>Security</AccountLayout>
        </AppLayout>
    )
}
