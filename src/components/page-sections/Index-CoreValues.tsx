import {Image, Text, Title} from "@mantine/core";
import {CoreValueObj, webData} from "../../libs/webData";
import React, {useState} from "react";

interface props {
    coreValue: CoreValueObj;
}

function CoreValueCard({coreValue: {value, description, image}, ...rest}: props) {
    const [active, setActive] = useState(false);

    return (
        <div {...rest} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
             className={"min-w-[300px] min-h-[35vh] hover:scale-[101%] flex-1 gap-2"}>
            <div
                className={`w-[95%] h-[95%] transition-all ${active ? "bg-secondary-900 shadow-2xl" : ""} absolute right-0 bottom-0 ml-auto mt-auto  bg-primary`}>
            </div>

            <div className={"flex gap-2"}>
                <Image className={`w-[100px] object-contain transition-all ${active ? "scale-110" : ""}`} src={image}
                       alt={value}/>
                <Title size={'h3'} className={"text-white mt-auto mb-auto"}>{value}</Title>
            </div>
            <div className={"w-[90%] pl-4 pr-2 pb-4 ml-auto"}>
                <Text className={" text-white"}>{description}</Text>
            </div>
        </div>
    )
}


export default function IndexCoreValues() {

    return (
        <div className={"w-[90%] h-max m-auto pb-10"}>
            <Title className={"text-primary text-center"}>Core values</Title>
            <div className={"w-full flex flex-wrap gap-2"}>
                {
                    webData.coreValues.map((coreValue, index) =>
                        <CoreValueCard coreValue={coreValue} key={index}/>
                    )
                }
            </div>
        </div>
    )
}

