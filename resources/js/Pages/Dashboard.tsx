import { ChartAreaInteractive } from '@/Components/ChartAreaInteractive'
import { DataTable } from '@/Components/DataTable'
import { SectionCards } from '@/Components/SectionCards'
import * as React from 'react'

import data from '@/Data/data.json'
import AppLayout from "@/Layouts/AppLayout";

export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">
            <SectionCards />
            <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
        </AppLayout>
    )
}
