import {ActionIcon, Button, Menu} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {RxHamburgerMenu} from "react-icons/rx";


export default function NavDropDownMobile() {

    return (
        <div className={"mt-auto mb-auto block md:hidden"}>
            <Menu width={200}>
                <Menu.Target>
                    <Button rightSection={<RxHamburgerMenu />}>
                        Menu
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>
                        <Link href={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={"about"}>About</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href={"#impact"}>Impact</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/$action"} params={{action: "contact"}}>Contact us</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={"/blog"}>Blog</Link>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

