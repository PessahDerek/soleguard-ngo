import {useEffect} from "react";
import {useLocation} from "@tanstack/react-router";


export default function usePage() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
        window.scroll({top: 0, behavior: 'smooth'})
    }, [pathname])
}