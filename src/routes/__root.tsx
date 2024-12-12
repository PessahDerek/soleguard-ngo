import * as React from 'react'
import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Navbar from "../components/ui-blocks/Navbar";
import AppFooter from "../components/ui-blocks/AppFooter";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <AppFooter/>
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    )
}
