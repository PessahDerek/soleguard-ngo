import {VisionAndMissionObj, webData} from "../../libs/webData";
import {Card, Text, Title} from "@mantine/core";


function MissionAndVisionCard({visionMission: {title, statement}}: { visionMission: VisionAndMissionObj }) {

    return (
        <Card className={"flex-1 w-full min-w-[300px] p-5 grid gap-2 hover:shadow-2xl hover:-top-2 transition-all"}>
            <Title className={"text-primary text-2xl md:text-center"}>{title}</Title>
            <Text>{statement}</Text>
        </Card>
    )
}

export default function IndexMissionVision() {

    return (
        <div className={"w-[95%] h-full p-10 m-auto flex flex-wrap gap-5"}>
            {webData.visionAndMission.map((visMis, index) =>
                <MissionAndVisionCard visionMission={visMis} key={index}/>)}
        </div>
    )
}

