import { useState } from 'react'
import { ContactUs, SendUs, Address } from '../Components'

export default function ContactUsContainer() {
    const [contactUsData, setContctUsData] = useState({
        name: '',
        phone: '',
        country: {},
        email: '',
        message: '',
    })

    const submitMassage = function (e) {
        e.preventDefault()
        console.log(contactUsData)
    }

    const onChangeForm = function (e, name, phoneValue, phoneCountry, phoneFormattedValue) {
        const { value } = e.target
        setContctUsData({
            ...contactUsData,
            [name]: value
        })
    }

    return (
        <ContactUs>
            <ContactUs.Title>CONTACT US</ContactUs.Title>
            <ContactUs.Container>
                <SendUs>
                    <SendUs.Form onSubmit={submitMassage}>
                        <SendUs.Container>
                            <SendUs.Input
                                type={"text"}
                                label={"Name"}
                                name={"name"}
                                value={contactUsData.name}
                                onChange={onChangeForm} />
                            <SendUs.Input
                                type={"text"}
                                label={"Phone"}
                                name={"phone"}
                                value={contactUsData.phone}
                                onChange={onChangeForm} />
                            {/* <SendUs.Phone
                                type={"phone"}
                                label={"Phone"}
                                name={"phone"}
                                value={contactUsData.phone}
                                onChange={onChangeForm} /> */}
                            <SendUs.Input
                                type={"email"}
                                label={"Email"}
                                name={"email"}
                                value={contactUsData.email}
                                onChange={onChangeForm} />
                            <SendUs.Textarea
                                type={"text"}
                                label={"Message"}
                                name={"message"}
                                value={contactUsData.message}
                                onChange={onChangeForm} />
                            <SendUs.Submit>Submit</SendUs.Submit>
                        </SendUs.Container>
                    </SendUs.Form>
                </SendUs>
                <Address>
                    <Address.Container>
                        <Address.Location>Kingdom of Saudi Arabia - Riyadh - Al Malaz</Address.Location>
                        <Address.Email>info@offices-land.com</Address.Email>
                        <Address.Phone>+966 508-622-000</Address.Phone>
                        <Address.Map />
                    </Address.Container>
                </Address>
            </ContactUs.Container>
        </ContactUs>
    )
}
