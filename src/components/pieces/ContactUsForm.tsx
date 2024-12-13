import {Button, Card, Textarea, TextInput, Title} from "@mantine/core";
import {BiPhone} from "react-icons/bi";
import {BsLinkedin, BsTwitterX, BsWhatsapp} from "react-icons/bs";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {MdAccountCircle, MdTextsms} from "react-icons/md";
import React, {useRef, useState} from "react";
import useSendEmail from "../../hooks/useSendEmail";


export default function ContactUsForm() {
    const {sendEmail} = useSendEmail();
    const form = useRef<HTMLFormElement>(null)
    const [load, setLoad] = useState<boolean>(false)
    const handle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        sendEmail(form)
            .then(()=>{
                form.current?.reset()
            })
            .finally(() => {
                setLoad(false)
            })
    }
    return (
        <div data-aos={"slide-up"} data-aos-duration={700} className={"max-w-[500px] grid gap-2"}>
            <Title order={2}
                   className={"text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary"}>Contact
                us</Title>
            <Card className={"grid grid-cols-6 gap-2"}>
                <a href={""} className={"text-center"}>
                    <BiPhone className={"m-auto"}/>
                </a>
                <a href={""}>
                    <BsWhatsapp className={"m-auto"}/>
                </a>
                <a href={"https://x.com/soleguard130274"} target={"_blank"}>
                    <BsTwitterX className={"m-auto"}/>
                </a>
                <a href={"https://www.facebook.com/profile.php?id=61566770416002"} target={"_blank"}>
                    <FaFacebook className={"m-auto"}/>
                </a>
                <a href={"https://www.instagram.com/soleguard2024/profilecard/?igsh=ZXk4djZqNjIyMnVu"}
                   target={"_blank"}>
                    <FaInstagram className={"m-auto"}/>
                </a>
                <a href={"https://www.linkedin.com/company/soleguard-alliance/"} target={"_blank"}>
                    <BsLinkedin className={"m-auto"}/>
                </a>
            </Card>
            <form ref={form} onSubmit={handle} className={"min-w-[300px] bg-white p-4 m-auto grid gap-2"}>
                <TextInput name={'from'} label={"Your name/organization"} leftSection={<MdAccountCircle/>}/>
                <Textarea name={'message'} label={"Write your message"} className={""} autosize leftSection={<MdTextsms/>}/>
                <Button type={'submit'} loading={load} disabled={load}>
                    Send email
                </Button>
            </form>
        </div>
    )
}



