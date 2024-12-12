import {createFileRoute, useParams} from '@tanstack/react-router'
import usePage from "../hooks/usePage";
import {useMemo} from "react";
import ContactUsForm from "../components/pieces/ContactUsForm";
import DonateForm from "../components/pieces/DonateForm";

export const Route = createFileRoute('/$action')({
    component: RouteComponent,
})

function RouteComponent() {
    usePage()
    const params = useParams({from: "/$action"})

    const action = useMemo(()=>{
        switch (params.action){
            case "contact":
                return <ContactUsForm />
            case "donate":
                return <DonateForm/>
        }
    }, [params])

    return (
        <div className={"w-full h-[calc(100vh-70px)] flex"}>
            <div className={"m-auto grid gap-2"}>
                {action}
            </div>
        </div>
    )
}
