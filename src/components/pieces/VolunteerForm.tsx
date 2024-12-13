import {Button, Text, TextInput, Title} from "@mantine/core";
import {useParallax} from "react-scroll-parallax";
import React, {useRef, useState} from "react";
import useSendEmail from "../../hooks/useSendEmail";


export default function VolunteerForm() {
    const parallax = useParallax({speed: -20})
    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const {sendEmail} = useSendEmail()
    const handle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        sendEmail(formRef)
            .then(() => formRef.current?.reset())
            .finally(() => setLoading(false))
    }

    return (
        // @ts-ignore
        <div ref={parallax.ref} className={" max-w-[500px] p-4 bg-white grid gap-5"}>
            <Title className={"text-center text-primary"} order={3}>Volunteer</Title>
            <Text className={"italic text-[12px]"}>You give but little when you give of your possessions. It is when you
                give of yourself that you truly give ~ John Kahil</Text>
            <form ref={formRef} onSubmit={handle} className={"min-w-[300px] grid gap-2 p-2"}>
                <TextInput name={"subject"} value={"Volunteer request"} hidden onChange={() => {
                }}/>
                <TextInput required placeholder={"Full name"} name={"from"} label={"Your name"}/>
                <TextInput required placeholder={"Email or phone"} name={"message"} label={"Email/Phone"}/>
                <Button type={'submit'} loading={loading} disabled={loading}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

