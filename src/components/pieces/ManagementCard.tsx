import {ManagementObj} from "../../libs/webData";
import {Button, Card, Image, Text, Title} from "@mantine/core";
import {useMemo, useState} from "react";
import {BsArrowDown, BsArrowUp} from "react-icons/bs";
import {useClickOutside} from "@mantine/hooks";


interface props {
    manager: ManagementObj
}

export default function ManagementCard({manager}: props) {
    const image = useMemo(() => {
        return manager.image ? manager.image : "/pics/dummy_manager_avi.png";
    }, [manager]);

    const [readAll, setReadAll] = useState(false);
    const ref = useClickOutside(() => setReadAll(false));


    return (
        <Card ref={ref} /**data-aos={"slide-up"}*/ data-aos-duration={500}
              className={"w-full min-w-[300px] h-full cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all m-auto flex-1"}>
            <Card.Section>
                <Image src={image} alt={manager.name} className={"w-[20vh] h-[20vh] m-auto rounded-full object-cover"}/>
            </Card.Section>
            <Title className={"text-primary"} p={5} order={5}>{manager.name}</Title>
            <Title className={"text-primary"} p={5} order={6}>{manager.title}</Title>
            {manager.comment &&
                <Text className={`${readAll ? '' : 'line-clamp-4'} `} p={5}>
                    {manager.comment}
                </Text>}
            <Button onClick={() => setReadAll(!readAll)} rightSection={
                readAll ? <BsArrowUp/> : <BsArrowDown/>
            } variant={readAll ? "light" : 'outline'}>
                {readAll ? "Show less" : "Read all"}
            </Button>
        </Card>
    )
}

