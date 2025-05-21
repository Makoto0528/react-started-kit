import AccountLayout from '@/Layouts/AccountLayout'
import AppLayout from '@/Layouts/AppLayout'

export default function Appearance() {
    return (
        <AppLayout title={'Account Settings'}>
            <AccountLayout>Appearance</AccountLayout>
        </AppLayout>
    )
}
