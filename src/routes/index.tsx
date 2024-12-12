import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import IndexLanding from "../components/page-sections/Index-landing";
import IndexMissionVision from "../components/page-sections/Index-Mission-Vision";
import IndexCoreValues from "../components/page-sections/Index-CoreValues";
import IndexImpact from "../components/page-sections/Index-Impact";
import IndexPartnership from "../components/page-sections/Index-Partnership";
import IndexGetInvolved from "../components/page-sections/Index-GetInvolved";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    return (
        <div className="w-full h-max">
            <IndexLanding/>
            <IndexMissionVision/>
            <IndexCoreValues/>
            <IndexImpact/>
            <IndexPartnership/>
            <IndexGetInvolved/>
        </div>
    )
}
