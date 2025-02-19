import {Link} from "@tanstack/react-router";
import {Button, Image, Text, TextInput, Title} from "@mantine/core";
import {MdEmail} from "react-icons/md";
import React, {useRef, useState} from "react";
import useSendEmail from "../../hooks/useSendEmail";

export default function AppFooter() {
    const newsLetter = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const {sendEmail} = useSendEmail()

    const joinNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        sendEmail(newsLetter, 'template_7m0i4rv')
            .then(() => newsLetter.current?.reset())
            .finally(() => setLoading(false))
    }

    return (
        <footer className={"w-full  min-h-[50vh] p-20  mt-20 text-white grid justify-center !font-light  bg-primary-600"}>
            <div className={"w-full max-w-full grid  gap-10 m-auto"}>
                <div className={"flex m-auto flex-wrap gap-10 justify-around"}>
                    <Link href="/">
                        <Image className={"flex-1 max-w-[100px] rounded-md"} src={"/pics/logo.jpeg"}
                               alt={"Soleguard Alliance Logo"}/>
                    </Link>
                    <div className={"flex-1 grid h-max min-w-[300px] md:w-[300px]"}>
                        <Title order={3}>Sitemap</Title>
                        <div className={"grid gap-4"}>
                            <Link href="/">Home</Link>
                            <Link to="/about">About us</Link>
                            <Link to={"/$action"} params={{action: "contact"}}>Contact</Link>
                            <Link resetScroll={true} to={"/$action"} params={{action: "donate"}}>Donate</Link>
                            <Link to={"/$action"} params={{action: "volunteer"}}>Volunteer</Link>
                            <Link to={"/$action"} params={{action: "partner"}}>Partner with us</Link>
                            <Link to={"/$action"} params={{action: "share"}}>Raise awareness</Link>
                        </div>
                    </div>
                    <div className={"flex-1 md:w-[200px] grid gap-20"}>
                        <div>
                            <Title order={3}>Head office</Title>
                            <Text>P.O BOX 19194-00501 Nairobi - Utawala next to Shell petrol station</Text>
                        </div>
                        <form ref={newsLetter} onSubmit={joinNewsletter} className={"grid gap-2"}>
                            <Title order={3}>News letter</Title>
                            <TextInput name={"email"} label={"Enter your email"} rightSection={<MdEmail/>}/>
                            <Button loading={loading} disabled={loading} type={'submit'}>Submit</Button>
                        </form>
                    </div>
                </div>
                <div className={"w-full flex gap-5 flex-wrap justify-between"}>
                    <Link to="/">
                        info@soleguardagency.org
                    </Link>
                    <Link to="/">
                        (+254) 741 120 439
                    </Link>
                    <Text>
                        &copy;{new Date().getFullYear()} Soleguard Alliance Africa. All rights reserved.
                    </Text>
                </div>
            </div>
        </footer>
    )
}

