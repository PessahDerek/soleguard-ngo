import {Card, Text, Title} from "@mantine/core";
import {BiMobile} from "react-icons/bi";
import {BsBank, BsPaypal} from "react-icons/bs";

export default function DonateForm() {

    return (
        <div className={""}>
            <Title className={"text-primary"}>All donations are welcome</Title>
            <div className={"flex-grid gap-2"}>
                <Card className={"w-max hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all"}>
                    <span className={"w-max flex gap-2"}>
                        <BiMobile className={"m-auto"}/>
                        <Title order={6} className={"text-primary m-auto"}>Mobile money</Title>
                    </span>
                    <div className={"w-full grid grid-cols-2 gap-2"}>
                        <Text className={"text-primary"}>Provider</Text>
                        <Text>Safaricom</Text>
                        <Text className={"text-primary"}>Till number</Text>
                        <Text>47389</Text>
                    </div>
                </Card>
                <Card className={"w-max hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all"}>
                    <span className={"w-max flex gap-2"}>
                        <BsBank className={"m-auto"}/>
                        <Title order={6} className={"text-primary m-auto"}>Bank</Title>
                    </span>
                    <div className={"w-full grid grid-cols-2 gap-2"}>
                        <Text className={"text-primary"}>Provider</Text>
                        <Text>NCBA Bank</Text>
                        <Text className={"text-primary"}>A/c number</Text>
                        <Text>480874123028</Text>
                    </div>
                </Card>
                <Card className={"w-max hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all"}>
                    <span className={"w-max flex gap-2"}>
                        <BsPaypal className={"m-auto text-secondary"}/>
                        <Title order={6} className={"text-primary m-auto"}>Paypal</Title>
                    </span>
                    <div className={"w-full grid grid-cols-2 gap-2"}>
                        <Text className={"text-primary"}>Provider</Text>
                        <Text>Paypal</Text>
                        <Text className={"text-primary"}>Address</Text>
                        <Text>Soleguard Alliance</Text>
                    </div>
                </Card>
            </div>
        </div>
    )
}


