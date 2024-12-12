import {ManagementObj} from "../../libs/webData";
import {Card, Image, Text, Title} from "@mantine/core";
import {useMemo} from "react";


interface props {
    manager: ManagementObj
}

export default function ManagementCard({manager}: props) {
    const image = useMemo(() => {
        return manager.image ? manager.image : "/pics/dummy_manager_avi.png";
    }, [manager]);
    return (
        <Card data-aos={"slide-up"} data-aos-duration={500} className={"min-w-[300px] cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all m-auto flex-1"}>
            <Card.Section>
                <Image src={image} alt={manager.name} className={"w-[20vh] h-[20vh] m-auto rounded-full object-contain"} />
            </Card.Section>
            <Title className={"text-primary"} p={5} order={5}>{manager.name}</Title>
            <Title className={"text-primary"} p={5} order={6}>{manager.title}</Title>
            {manager.comment && <Text p={5}>
                {manager.comment}
            </Text>}
        </Card>
    )
}

