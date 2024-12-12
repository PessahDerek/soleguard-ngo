import HomeLogoLink from "../pieces/HomeLogoLink";
import {Link} from "@tanstack/react-router";
import {Button} from "@mantine/core";
import {FaArrowRight} from "react-icons/fa";


export default function Navbar() {
    return (
        <nav className={"w-full h-[70px] z-40 bg-white sticky top-0 grid"}>
            <div className={"w-[90%] flex justify-between m-auto"}>
                <HomeLogoLink/>

                <div className={"hidden md:flex gap-10 h-max m-auto w-max"}>
                    <Link href={""}>About</Link>
                    <Link href={""}>Impact</Link>
                    <Link href={""}>Contacts</Link>
                    <Link href={""}>Blog</Link>
                </div>

                <Link href={""} className={"mt-auto mb-auto"}>
                    <div
                        className={"w-full bg-gradient-to-tr from-primary-400 to-secondary p-[1.5px] mt-auto mb-auto rounded-[10px]"}>
                        <Button rightSection={<FaArrowRight className={"text-secondary"}/>} variant={'filled'}
                                className={"bg-white"} radius={'md'}>
                            <p className={"primary-text-gradient"}>Get involved</p>
                        </Button>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
