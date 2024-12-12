import {Button, Card, Image, Text, Title} from "@mantine/core";
import {GetInvolvedObj} from "../../libs/webData";
import {Link} from "@tanstack/react-router";
import {useCallback, useEffect, useState} from "react";

interface props {
    involved: GetInvolvedObj;
    index: number;
}

export default function InvolvedCard({involved, index}: props) {
    const [greater, setGreater] = useState(true);

    const handleGreaterWidth = useCallback(()=> {
        setGreater(window.innerWidth >= 768);
    }, [])
    useEffect(()=>{
        window.addEventListener("resize", handleGreaterWidth);
        window.addEventListener("loadstart", handleGreaterWidth);
        return () => {
            window.removeEventListener("resize", handleGreaterWidth);
            window.removeEventListener("loadstart", handleGreaterWidth);
        }
    })
    return (
        <Card className={"flex-1 h-full cursor-pointer hover:shadow-2xl transition-all md:h-max min-w-min gap-2"} style={{ marginTop: window.innerWidth >= 768 ? `${index * 50}px` : undefined }} >
            <Card.Section>
                <Image className={"w-full h-[20vh] object-center"} src={involved.image} alt={involved.how}/>
            </Card.Section>
            <Card.Section m={1}>
                <Title className={"text-[28px] text-primary-400"}>{involved.how}</Title>
                <Text>{involved.description}</Text>
            </Card.Section>
            <Link>
                <Button rightSection={<involved.icon />}>
                    {involved.actionText}
                </Button>
            </Link>
        </Card>
    )
}
