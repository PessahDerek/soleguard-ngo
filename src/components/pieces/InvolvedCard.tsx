import {Button, Card, Image, Text, Title} from "@mantine/core";
import {GetInvolvedObj} from "../../libs/webData";
import {Link} from "@tanstack/react-router";

interface props {
    involved: GetInvolvedObj;
    index: number;
}

export default function InvolvedCard({involved, index}: props) {
    const top = `top-[${index * 100}px] mt-[${index * 100}px]`;
    console.log(top);
    return (
        <Card className={`flex-1 min-w-min gap-2`} style={{transform: `translateY(${top}px)`}}>
            <Card.Section>
                <Image className={"w-full h-[15vh]"} src={involved.image} alt={involved.how}/>
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
