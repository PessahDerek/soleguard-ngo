import {ErrorComponentProps, Link, useRouter} from "@tanstack/react-router";
import {Button, Image, Title} from "@mantine/core";
import {RxHome, RxReload} from "react-icons/rx";


export default function AppErrorComponent({reset}: ErrorComponentProps) {
    const router = useRouter();
    return (
        <div data-aos={'zoom-in'} data-aos-duration={700} className={"w-full min-h-[calc(100vh-70px)] flex "}>
            <div className={"w-[90%] md:w-1/2 grid gap-4 text-center m-auto"}>
                <Image className={"w-1/3 h-[30vh] object-contain min-w-[200px] m-auto"} src={"/pics/error.svg"}
                       alt={"error"}/>
                <Title className={"text-secondary-900 text-[16px]"}>Sorry, something went wrong, please try again later! We're
                    working to fix it</Title>
                <div className={"w-max gap-4 m-auto grid grid-cols-2 auto-cols-max"}>
                    <Link to={"/"}>
                        <Button rightSection={<RxHome/>}>
                            Home page
                        </Button>
                    </Link>
                    <Button onClick={() => router.load()} variant={"light"} rightSection={<RxReload/>}>
                        Retry
                    </Button>
                </div>
            </div>
        </div>
    )
}

