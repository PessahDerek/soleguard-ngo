import emailJs from '@emailjs/browser'
import {RefObject} from "react";

export default function useSendEmail() {

    const sendEmail = (form: RefObject<HTMLFormElement>, templateId: string = 'template_i4flozb') => {
        return new Promise((resolve, reject) => {
            const body = form ? form : ""
            if (typeof body === "string" || !body.current) {
                return alert("Please try again!")
            }
            emailJs
                .sendForm('service_3cwwkyl', templateId, body.current, {
                    publicKey: 'K_4Og_52W4R2cjwQo',
                })
                .then(
                    () => {
                        alert("Message received! We'll get back to you soon!");
                        resolve("Message received! We'll get back to you soon!")
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        alert("Something went wrong! Please try again later.");
                        reject(error)
                    },
                );
        })

    }

    return {sendEmail};

}