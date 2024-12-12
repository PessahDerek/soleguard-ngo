import {Card, Title} from "@mantine/core";
import {BiMobile} from "react-icons/bi";

export default function DonateForm() {

    return (
        <div className={""}>
            <Title className={"text-primary"}>All donations are welcome</Title>
            <Card className={""}>
                <span className={""}>
                    <BiMobile/>
                </span>
            </Card>
        </div>
    )
}


