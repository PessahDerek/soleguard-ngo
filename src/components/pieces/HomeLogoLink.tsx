import {Link} from "@tanstack/react-router";
import {Image, Title} from "@mantine/core";
import {webData} from "../../libs/webData";

export default function () {

    return (
        <Link href={"/"} >
            <span className={"grid grid-flow-col auto-cols-max"}>
                <Image className={'w-[60px] m-auto'} src={"/pics/logo.jpeg"} alt={"logo"}/>
                <Title className={'text-2xl hover:text-primary-400 font-medium m-auto'}>{
                    webData.org_name?.split(" ")[0]
                }</Title>
            </span>
        </Link>
    )
}

