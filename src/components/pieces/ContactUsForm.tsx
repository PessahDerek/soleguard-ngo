import {Button, Card, Textarea, TextInput, Title} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {BiPhone} from "react-icons/bi";
import {BsLinkedin, BsTwitterX, BsWhatsapp} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {MdAccountCircle, MdTextsms} from "react-icons/md";


export default function ContactUsForm() {

    return (
        <div className={"min-w-[300px] grid gap-2"}>
            <Title order={2} className={"text-center text-primary"}>Contact us</Title>
            <Card className={"grid grid-cols-5 gap-2"}>
                <Link className={"text-center"}>
                    <BiPhone className={"m-auto"}/>
                </Link>
                <Link>
                    <BsWhatsapp className={"m-auto"}/>
                </Link>
                <Link>
                    <BsTwitterX className={"m-auto"}/>
                </Link>
                <Link>
                    <FaFacebook className={"m-auto"}/>
                </Link>
                <Link>
                    <BsLinkedin className={"m-auto"}/>
                </Link>
            </Card>
            <form className={"min-w-[300px] bg-white p-4 m-auto grid gap-2"}>
                <TextInput label={"Your name/organization"} leftSection={<MdAccountCircle/>}/>
                <Textarea label={"Write your message"} className={""} autosize leftSection={<MdTextsms/>}/>
                <Button>
                    Send email
                </Button>
            </form>
        </div>
    )
}



