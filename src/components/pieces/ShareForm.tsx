import {Text, Textarea, Title} from "@mantine/core";
import React, {useState} from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterShareButton, WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import {BsTwitterX} from "react-icons/bs";


export default function ShareForm() {
    const [post, setPost] = useState("Soleguard Alliance: Empowering Kenyan communities 🌍\n" +
        "Battling jigger infections, protecting animals, conserving ecosystems, and advancing blue economy.\n" +
        "Making a difference, one solution at a time. 💪\n" +
        "#SoleguardAlliance #Kenya",
    )


    const [userFocused, setUserFocused] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    }

    return (
        <div className={"bg-white grid p-4"}>
            <Title
                className={"text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary"}>Help
                spread the word
            </Title>
            <div className={"grid gap-2"}>
                <Textarea
                    onFocus={() => setUserFocused(true)}
                    onBlur={() => setUserFocused(false)}
                    value={post} onChange={handleChange} name={'message'} autosize={userFocused} placeholder={"message"}
                    label={"Message"}
                    classNames={{input: "min-h-[20vh]"}}
                />
                <Text>Share on:</Text>
                <div className={"flex w-max gap-4"}>
                    <FacebookShareButton title={post} url={window.location.host}>
                        <FacebookIcon size={32}/>
                    </FacebookShareButton>
                    <TwitterShareButton title={post} url={window.location.host}>
                        <BsTwitterX size={24}/>
                    </TwitterShareButton>
                    <LinkedinShareButton title={post} source={window.location.host} url={window.location.host}>
                        <LinkedinIcon size={32}/>
                    </LinkedinShareButton>
                    <WhatsappShareButton title={post} url={window.location.host}>
                        <WhatsappIcon size={32}/>
                    </WhatsappShareButton>
                </div>
            </div>
        </div>
    )
}

