import {Button, Select, TextInput, Title} from "@mantine/core";
import {BiSend} from "react-icons/bi";
import {CgOrganisation, CgProfile} from "react-icons/cg";
import {MdAccountCircle} from "react-icons/md";
import {GrContact, GrContactInfo} from "react-icons/gr";


export default function PartnerForm() {

    return (
        <div className={"max-w-[500px] bg-white grid gap-5 p-4"}>
            <Title
                className={"text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary"}>
                Thank you for showing interest in our work
            </Title>
            <form className={"grid gap-2"}>
                <TextInput leftSection={<MdAccountCircle/>} name={'name'} label={"Name/Organization"} required />
                <TextInput leftSection={<GrContactInfo/>} name={'contact'} label={"Phone/Email"} required />
                <Select leftSection={<CgOrganisation/>} name={'type'} label={"Capacity"} data={['Organization', 'Individual']} required />
                <Button rightSection={<BiSend />}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

