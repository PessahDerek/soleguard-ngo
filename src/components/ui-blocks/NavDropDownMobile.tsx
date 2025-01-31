import {Button, Menu} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {RxHamburgerMenu} from "react-icons/rx";


export default function NavDropDownMobile() {

    return (
        <div className={"mt-auto mb-auto block md:hidden"}>
            <Menu width={200}>
                <Menu.Target>
                    <Button rightSection={<RxHamburgerMenu/>}>
                        Menu
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Link to={"/"} href={"/"}>
                        <Menu.Item className={"w-full h-[50px]"}>
                            Home
                        </Menu.Item>
                    </Link>
                    <Link to={"/about"} href={"about"}>
                        <Menu.Item className={"w-full h-[50px]"}>
                            About
                        </Menu.Item>
                    </Link>
                    <Link to={"/"} href={"#impact"}  hashScrollIntoView={{behavior: "smooth", block: "nearest"}}>
                        <Menu.Item className={"w-full h-[50px]"}>
                            Impact
                        </Menu.Item>
                    </Link>
                    <Link to={"/showcase"} >
                        <Menu.Item className={"w-full h-[50px]"}>
                            Showcase
                        </Menu.Item>
                    </Link>
                    <Link to={"/$action"} params={{action: "contact"}}>
                        <Menu.Item className={"w-full h-[50px]"}>
                            Contact us
                        </Menu.Item>
                    </Link>
                    <Link to={"/blog"}>
                        <Menu.Item className={"w-full h-[50px]"}>
                            Blog
                        </Menu.Item>
                    </Link>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

