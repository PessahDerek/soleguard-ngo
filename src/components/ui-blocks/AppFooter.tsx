import {Link} from "@tanstack/react-router";
import {Button, Image, Text, TextInput, Title} from "@mantine/core";
import {MdEmail} from "react-icons/md";

export default function AppFooter() {

    return (
        <footer className={"w-full  min-h-[50vh] p-20  mt-20 text-white !font-light  bg-primary-600 flex"}>
            <div className={"w-[80%] grid gap-10 m-auto"}>
                <div className={"flex flex-wrap gap-10 justify-between"}>
                    <Link href="/">
                        <Image className={"flex-1 w-[100px] rounded-md"} src={"/pics/logo.jpeg"} alt={"Soleguard Alliance Logo"}/>
                    </Link>
                    <div className={"flex-1 grid h-max min-w-[300px] md:w-[300px]"}>
                        <Title order={3}>Sitemap</Title>
                        <div className={"grid gap-4"}>
                            <Link href="/">Home</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">Contact</Link>
                            <Link href="/">Donate</Link>
                            <Link href="/">Volunteer</Link>
                            <Link href="/">Partner with us</Link>
                            <Link href="/">Raise awareness</Link>
                        </div>
                    </div>
                    <div className={"flex-1 min-w-[300px] md:w-[100px] grid gap-20"}>
                        <div>
                            <Title order={3}>Head office</Title>
                            <Text>P.O BOX 19194-00501 Nairobi - Utawala next to Shell petrol station</Text>
                        </div>
                        <form className={"grid gap-2"}>
                            <Title order={3}>News letter</Title>
                            <TextInput name={"email"} label={"Enter your email"} rightSection={<MdEmail/>}/>
                            <Button>Submit</Button>
                        </form>
                    </div>
                </div>
                <div className={"w-full flex gap-5 flex-wrap justify-between"}>
                    <Link to="/">
                        info@soleguardagency.org
                    </Link>
                    <Link to="/">
                        (+254) 741 120 439
                    </Link>
                    <Text>
                        &copy;{new Date().getFullYear()} Soleguard Alliance Africa. All rights reserved.
                    </Text>
                </div>
            </div>
        </footer>
    )
}

