import {Card, Text, Title} from "@mantine/core";
import {ImpactObj, webData} from "../../libs/webData";


function ImpactCard({impact}: { impact: ImpactObj }) {

    return (
        <Card data-aos={"fade-up"} className={"flex-1 min-w-[300px] grid align-middle content-center items-center"}>
            {impact.numbers &&
                <Text className={"text-[4vmax] text-primary font-medium"}>{impact.numbers.toLocaleString()}</Text>
            }
            <Text>{impact.description}</Text>
        </Card>
    )
}


export default function IndexImpact() {

    return (
        <div id={"impact"} className={"w-[90%] m-auto grid gap-2 pb-5 mt-[3em] "}>
            <Title className={"text-[3vmax] text-primary text-center"}>Impact</Title>
            <div className={"inline-flex gap-2 flex-wrap"}>
                <div className={"flex-1 grid gap-2"}>
                    {webData.impact.filter(f => f.numbers).map((imp, index) =>
                        <ImpactCard impact={imp} key={index}/>
                    )}
                </div>
                {webData.impact.filter(f => !f.numbers).map((imp, index) =>
                    <ImpactCard impact={imp} key={index}/>
                )}
            </div>
        </div>
    )
}

