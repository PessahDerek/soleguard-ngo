import {Button, Text, TextInput, Title} from "@mantine/core";
import {useParallax} from "react-scroll-parallax";


export default function VolunteerForm() {
    const parallax = useParallax({speed: -20})
    return (
        // @ts-ignore
        <div ref={parallax.ref} className={" max-w-[500px] p-4 bg-white grid gap-5"}>
            <Title className={"text-center text-primary"} order={3}>Volunteer</Title>
            <Text className={"italic text-[12px]"}>You give but little when you give of your possessions. It is when you give of yourself that you truly give ~ John Kahil</Text>
            <form className={"min-w-[300px] grid gap-2 p-2"}>
                <TextInput required placeholder={"Full name"} name={"name"} label={"Your name"} />
                <TextInput required placeholder={"Email or phone"} name={"contact"} label={"Email/Phone"} type={"email"} />
                <TextInput required placeholder={"Country or town"} name={"country"} label={"Country"} />
                <Button>
                    Submit
                </Button>
            </form>
        </div>
    )
}

