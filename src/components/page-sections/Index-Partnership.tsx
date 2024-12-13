import {Card, Text, Title} from "@mantine/core";
import {webData} from "../../libs/webData";

export default function IndexPartnership() {

    return (
        <div className={"w-full h-max bg-primary-400 z-10 p-10 inline-grid gap-5 text-white"}>
            <div>
                <Title className={"text-[3vmax] text-white text-center"}>Partnerships</Title>
                <Text>
                    We believe that collaboration is key to achieving our mission. Soleguard Alliance works closely with
                    a
                    range of partners, including:
                </Text>
            </div>
            <div className={" w-full grid grid-cols-1 md:grid-cols-5 m-auto gap-2"}>
                {webData.partnerships.map((p, index) =>
                    <Card data-aos={'slide-up'} data-aos-duration={'750'} data-aos-delay={index * 100} key={index}
                          className={"max-w-[300px] h-full bg-primary-500 m-auto text-white"}>
                        <Title className={"text-white"} order={3}>{p.partner}</Title>
                        <Text>{p.description}</Text>
                    </Card>)}
            </div>
        </div>
    )
}

