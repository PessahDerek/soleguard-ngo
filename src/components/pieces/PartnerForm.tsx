import {Button, Select, TextInput, Title} from "@mantine/core";
import {BiSend} from "react-icons/bi";
import {CgOrganisation} from "react-icons/cg";
import {MdAccountCircle} from "react-icons/md";
import {GrContactInfo} from "react-icons/gr";
import React, {useRef, useState} from "react";
import useSendEmail from "../../hooks/useSendEmail";


export default function PartnerForm() {
    const ref = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const {sendEmail} = useSendEmail()
    const handle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        sendEmail(ref)
            .then(() => ref.current?.reset())
            .finally(() => setLoading(false))
    }
    return (
        <div className={"max-w-[500px] bg-white grid gap-5 p-4"}>
            <Title
                className={"text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary"}>
                Thank you for showing interest in our work
            </Title>
            <form ref={ref} onSubmit={handle} className={"grid gap-2"}>
                <TextInput name={"subject"} value={"Requesting partnership"} hidden onChange={()=>{}} />
                <TextInput leftSection={<MdAccountCircle/>} name={'from'} label={"Name/Organization"} required/>
                <TextInput leftSection={<GrContactInfo/>} name={'email'} label={"Phone/Email"} required/>
                <Select leftSection={<CgOrganisation/>} name={'message'} label={"Capacity"}
                        data={['Organization', 'Individual']} required/>
                <Button type={"submit"} loading={loading} rightSection={<BiSend/>}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

