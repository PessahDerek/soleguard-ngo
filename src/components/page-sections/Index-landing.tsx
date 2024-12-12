import {Button, Image, Text, Title} from "@mantine/core";
import {AreaOfFocusObj, webData} from "../../libs/webData";
import {useMemo} from "react";
import {Link} from "@tanstack/react-router";
import {FaArrowRight} from "react-icons/fa";


export function FocusCard({aof, index}: { aof: AreaOfFocusObj, index: number }) {
    const colors: { [key: number]: [string, string] } = {
        0: ["bg-primary", "text-white"],
        1: ["bg-accent", "text-white"],
        2: ["bg-secondary", "text-white"],
        3: ["bg-white", "text-primary-700"]
    }
    const color = useMemo(() => {
        return colors[index]
    }, [colors])
    return (
        <div className={`w-full max-w-[150px] min-h-[15vh] p-2 grid align-middle ${color[0]}`}>
            <Image className={"w-full h-[10vmin] object-contain m-auto"} src={`/pics/${aof.image}`} alt={aof.name}/>
            <Text className={`${color[1]}`}>{aof.area}</Text>
        </div>
    )
}

export default function IndexLanding() {
    const areaOfFocus = webData.focus.map((aof, index) =>
        <FocusCard key={index} aof={aof} index={index}/>);

    return (
        <div className={"w-full flex h-[calc(100vh-70px)]"}>
            <Image
                src={"/pics/ocean3.jpg"} alt={"landing"}
                fit={'cover'} className={"w-full h-full object-center filter brightness-[60%] absolute top-0 left-0 "}
                fetchPriority={"high"}/>
            <div
                className={"w-[90%] grid overflow-hidden h-max min-h-[80%] gap-2  text-white ml-auto mr-auto mt-auto text-center "}>
                <span className={"w-full m-auto"}>
                    <Title className={"text-white text-[5vmax] font-medium"}>{webData?.landing_page.headline}</Title>
                    <Text className={"text-white text-[1.5vmax]"}>{webData?.landing_page.descriptive}</Text>
                </span>
                <Link href={""}>
                    <Button w={200} h={50} rightSection={<FaArrowRight/>} radius={'md'} variant={'gradient'}>
                        Get involved
                    </Button>
                </Link>
                <div
                    className={"min-w-1/2 w-max h-max mt-auto ml-auto mr-auto bg-black grid grid-cols-2 md:grid-cols-4"}>
                    {...areaOfFocus}
                </div>
            </div>
        </div>
    )
}