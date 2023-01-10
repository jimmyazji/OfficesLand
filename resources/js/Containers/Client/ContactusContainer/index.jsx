import { useLaravelReactI18n } from 'laravel-react-i18n'
import { useState } from 'react'
import Address from './Address'
import SendUs from './SendUs'


export default function ContactUsContainer() {
    console.log("contact us section renderd")
    const { t } = useLaravelReactI18n()

    const [contactUsData, setContctUsData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    })

    const submitMassage = function (e) {
        e.preventDefault()
        console.log(contactUsData)
    }

    const onChangeForm = function (e) {
        const { value, name } = e.target
        setContctUsData({
            ...contactUsData,
            [name]: value
        })
    }

    return (
        <section id='contact' className='w-full h-full bg-majorBackground py-12'>
            <h2 className='text-3xl text-accent font-bold text-center'>
                CONTACT US
            </h2>
            <div className='container mx-auto pt-12 flex flex-col-reverse lg:flex-row-reverse gap-16'>
                <SendUs>
                    <SendUs.Form onSubmit={submitMassage}>
                        <SendUs.Container>
                            <SendUs.Input
                                type={"text"}
                                label={t("welcome-page.contact_name")}
                                name={"name"}
                                value={contactUsData.name}
                                onChange={onChangeForm} />
                            <SendUs.Input
                                type={"text"}
                                label={t("welcome-page.contact_phone")}
                                name={"phone"}
                                value={contactUsData.phone}
                                onChange={onChangeForm} />
                            <SendUs.Input
                                type={"email"}
                                label={t("welcome-page.contact_email")}
                                name={"email"}
                                value={contactUsData.email}
                                onChange={onChangeForm} />
                            <SendUs.Textarea
                                type={"text"}
                                label={t("welcome-page.contact_message")}
                                name={"message"}
                                value={contactUsData.message}
                                onChange={onChangeForm} />
                            <SendUs.Submit>{t("welcome-page.contact_submit")}</SendUs.Submit>
                        </SendUs.Container>
                    </SendUs.Form>
                </SendUs>
                <Address>
                    <Address.Container>
                        <Address.Location>{t("welcome-page.contact_company_address")}</Address.Location>
                        <Address.Email>{t("welcome-page.contact_company_email")}</Address.Email>
                        <Address.Phone>{t("welcome-page.contact_company_phone")}</Address.Phone>
                        <Address.Map />
                    </Address.Container>
                </Address>
            </div>
        </section>
    )
}
