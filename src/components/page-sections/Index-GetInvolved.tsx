import {Image, Text, Title} from "@mantine/core";
import {GetInvolvedObj} from "../../libs/webData";
import InvolvedCard from "../pieces/InvolvedCard";
import {FaDonate} from "react-icons/fa";
import {CgMail} from "react-icons/cg";
import {IoShareSocial} from "react-icons/io5";
import {useParallax} from "react-scroll-parallax";


export default function IndexGetInvolved() {
    const how: GetInvolvedObj[] = [
        {
            how: "Donate",
            description: "Your contributions help fund our public health, environmental, animal welfare, and blue economy projects.",
            image: "/pics/donate.jpg",
            action: "donate",
            actionText: "Donate",
            icon: FaDonate
        },
        {
            how: "Volunteer",
            description: "Join us on the ground and contribute your skills to one of our many initiatives. ",
            image: "/pics/volunteer.jpg",
            action: "volunteer",
            actionText: "Send email",
            icon: CgMail
        },
        {
            how: "Partner with us",
            description: "We are always looking to build new partnerships that align with our mission and values.",
            image: "/pics/partner.jpg",
            action: "partner",
            actionText: "Send email",
            icon: CgMail
        },
        {
            how: "Raise awareness",
            description: "Spread the word about Soleguard Alliance and the work we do by sharing our mission with your network.",
            image: "/pics/awareness.jpg",
            action: "share",
            actionText: "Share on socials",
            icon: IoShareSocial
        },
    ]
    const parallax = useParallax({speed: -25})
    return (
        <div className={"w-full h-max min-h-[100vh] grid  "}>
            {/*@ts-ignore*/}
            <Image ref={parallax.ref} className={"w-full h-3/4 z-0 absolute cover-this top-0 brightness-75"}
                   src={"/pics/involved.jpg"}
                   alt={"People planting a tree"}/>
            <div className={"w-full h-1/2 absolute top-0 left-0 bg-gradient-to-b from-primary-400 to-transparent"}/>
            <div className={"w-full h-max bottom-0 mt-[20%] grid gap-4"}>
                <span>
                    <Title className={"text-white text-[5vmax] text-center"}>Here is how you can help</Title>
                    <Text className={"text-white text-center text-2xl"}>
                        There are many ways to support Soleguard Alliance and make a difference
                    </Text>
                </span>
                <div className={"w-[90%] ml-auto mr-auto "}>
                    <div className={"w-full flex-grid flex-wrap gap-2"}>
                        {how.map((item, index) => (
                            <InvolvedCard data-scroll involved={item} index={index} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

