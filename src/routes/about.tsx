import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {Image, Space, Title} from "@mantine/core";
import {webData} from "../libs/webData";
import ManagementCard from "../components/pieces/ManagementCard";
import usePage from "../hooks/usePage";
import {useParallax} from "react-scroll-parallax";

export const Route = createFileRoute('/about')({
    component: AboutComponent,
})

function AboutComponent() {
    usePage()
    const title = useParallax({
        speed: 20
    })
    const par1 = useParallax({speed: -10})

    return (
        <div data-aos={"fade-up"} data-aos-duration={700} className="w-full space-y-5">
            {/*@ts-ignore*/}
            <div ref={title.ref} className={"flex m-auto p-5 gap-5 max-w-full w-3/4 flex-wrap justify-center"}>
                <Title
                    className={"text-[5vmax] text-center bg-gradient-to-tr from-primary-400 to-secondary h-max mt-auto mb-auto text-transparent bg-clip-text"}>Big
                    question, who are we?</Title>
                <Image className={"w-[300px] rounded-full"} src={"/pics/logo.jpeg"} alt={"logo"}/>
            </div>
            {/*@ts-ignore*/}
            <div ref={par1.ref} className={"w-[90%] m-auto md:columns-2"}>
                <p>
                    Soleguard Alliance is a Kenyan-based non-governmental organization (NGO) committed to empowering
                    communities through the eradication of jigger infestations, promoting animal welfare, fostering
                    environmental conservation, and advancing the blue economy. Operating from Utawala, Nairobi, the
                    organization was founded with a vision to build resilient, healthy, and prosperous communities.
                    Soleguard Alliance’s work is driven by the belief that sustainable solutions to community challenges
                    can only be achieved through a combination of public awareness, collaboration, and practical
                    interventions.
                </p>
                <p>
                    Our efforts span four interconnected pillars:
                    <ul className={"list-disc"}>
                        <li>Jigger Eradication: Combating the debilitating effects of jiggers and promoting public
                            health.
                        </li>
                        <li>Animal Welfare: Advocating for and promoting the humane treatment of animals.</li>
                        <li>Environmental Conservation: Protecting ecosystems and promoting sustainable environmental
                            practices.
                        </li>
                        <li>Blue Economy: Supporting communities in harnessing the economic potential of oceans, rivers,
                            and
                            coastal resources in a sustainable manner.
                        </li>
                    </ul>
                </p>
            </div>
            <Space h={20}/>
            <div className={"grid gap-5"}>
                <Title className={"text-center text-primary"}>Meet the team behind</Title>
                <div className={"w-[90%] m-auto flex flex-wrap gap-4"}>
                    {webData.management.map((manager, index) =>
                        <ManagementCard manager={manager} key={index}/>)}
                </div>
            </div>
            <Space h={20}/>
            <div className={"w-[90%] grid gap-5 m-auto "}>
                <Title className={"text-center text-primary"}>Our value system</Title>
                <div>
                    <Title className={"text-primary"} order={3}>{webData.visionAndMission[0].title}</Title>
                    {webData.visionAndMission[0].statement}
                </div>
                <div>
                    <Title className={"text-primary"} order={3}>{webData.visionAndMission[1].title}</Title>
                    {webData.visionAndMission[1].statement}
                </div>
            </div>
        </div>
    )
}
