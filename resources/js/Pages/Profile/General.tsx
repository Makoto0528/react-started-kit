import AppLayout from "@/Layouts/AppLayout";
import AccountLayout from "@/Layouts/AccountLayout";

export default function General() {
    return (
        <AppLayout title={'Account Settings'}>
            <AccountLayout>
                General
            </AccountLayout>
        </AppLayout>
    )
}
