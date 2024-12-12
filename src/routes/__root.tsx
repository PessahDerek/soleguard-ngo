import * as React from 'react'
import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Navbar from "../components/ui-blocks/Navbar";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    )
}
