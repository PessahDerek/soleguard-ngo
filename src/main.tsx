import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'

// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...
import "aos/dist/aos.css"
import "./main.css"
import {MantineProvider} from "@mantine/core"
import myMantineTheme from "./libs/myMantineTheme";
import {ParallaxProvider} from "react-scroll-parallax";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// Set up a Router instance
const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
})

// Register things for type-safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('app')!
const theme = myMantineTheme();
const queryClient = new QueryClient({})

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)

    root.render(
        <MantineProvider theme={theme}>
            <ParallaxProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router}/>
                </QueryClientProvider>
            </ParallaxProvider>
        </MantineProvider>
    )
}
