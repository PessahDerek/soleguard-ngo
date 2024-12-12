import {useEffect} from "react";


export default function usePage() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

}