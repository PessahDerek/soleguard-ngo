import {Card, Text, Title} from "@mantine/core";
import {webData} from "../../libs/webData";

export default function IndexPartnership() {

    return (
        <div className={"w-full h-max bg-primary-400 p-10 grid gap-5 text-white"}>
            <Title className={"text-[3vmax] text-white text-center"}>Partnerships</Title>
            <Text>
                We believe that collaboration is key to achieving our mission. Soleguard Alliance works closely with a
                range of partners, including:
            </Text>
            <div className={"flex-grid gap-2"}>
                {webData.partnerships.map((p, index) =>
                    <Card key={index} className={"max-w-[300px] bg-primary-500 text-white"}>
                        <Title className={"text-white"} order={3}>{p.partner}</Title>
                        <Text>{p.description}</Text>
                    </Card>)}
            </div>
        </div>
    )
}

