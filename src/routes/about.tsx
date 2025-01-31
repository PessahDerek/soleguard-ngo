import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {Card, Image, List, Space, Text, Title} from "@mantine/core";
import {webData} from "../libs/webData";
import ManagementCard from "../components/pieces/ManagementCard";
import usePage from "../hooks/usePage";
import {useParallax} from "react-scroll-parallax";
import {LuCircleCheck} from "react-icons/lu";
import {GiBullseye} from "react-icons/gi";
import {FaArrowsToEye} from "react-icons/fa6";

export const Route = createFileRoute('/about')({
    component: AboutComponent,
})

function AboutComponent() {
    usePage()
    const title = useParallax({
        speed: 20
    })

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
            <div /**ref={par1.ref}*/ className={"w-[90%] m-auto md:columns-2"}>
                <p>
                    Soleguard Alliance is a Kenyan-based non-governmental organization (NGO) committed to empowering
                    communities through the eradication of jigger infestations and promoting animal welfare. Operating
                    from Utawala, Nairobi, the
                    organization was founded with a vision to build resilient, healthy, and prosperous communities.
                    Soleguard Alliance’s work is driven by the belief that sustainable solutions to community challenges
                    can only be achieved through a combination of public awareness, collaboration, and practical
                    interventions.
                </p>
                <p>
                    Our efforts span {webData.focus.length} interconnected pillars:
                    <List className={"list-disc"}>
                        {webData.focus.map((focus, i) =>
                            <List.Item icon={<LuCircleCheck className={"text-secondary"}/>} key={i}>
                                {focus.area}: {focus.description}
                            </List.Item>)
                        }
                        {/*<li>Jigger Eradication: Combating the debilitating effects of jiggers and promoting public*/}
                        {/*    health.*/}
                        {/*</li>*/}
                        {/*<li>Animal Welfare: Advocating for and promoting the humane treatment of animals.</li>*/}
                        {/*<li>Environmental Conservation: Protecting ecosystems and promoting sustainable environmental*/}
                        {/*    practices.*/}
                        {/*</li>*/}
                        {/*<li>Blue Economy: Supporting communities in harnessing the economic potential of oceans, rivers,*/}
                        {/*    and*/}
                        {/*    coastal resources in a sustainable manner.*/}
                        {/*</li>*/}
                    </List>
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
                <Card>
                    <span className={"w-max flex gap-2 text-primary-300"}>
                        <GiBullseye className={"m-auto text-4xl"}/>
                        <Title className={"text-primary-300"} order={3}>{webData.visionAndMission[0].title}</Title>
                    </span>
                    <Text>{webData.visionAndMission[0].statement}</Text>
                </Card>
                <Card>
                    <span className={"w-max flex gap-2 text-primary-300"}>
                        <FaArrowsToEye className={"m-auto text-4xl"} />
                        <Title className={"text-primary-300"} order={3}>{webData.visionAndMission[1].title}</Title>
                    </span>
                    {webData.visionAndMission[1].statement}
                </Card>
            </div>
        </div>
    )
}
