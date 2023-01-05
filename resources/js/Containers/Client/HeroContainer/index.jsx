import Info from './info'
import slideImage from '@/../assets/products/1.jpg'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function HeroContainer({ slide_id }) {
    const { t } = useLaravelReactI18n()
    
    return (
        <section id='hero' className='bg-minorBackground w-full h-full -mt-20'>
            <div className={`relative w-full h-[400px] md:h-[700px] `}>
                <img className="absolute z-0 top-0 w-full h-full"
                    src={slideImage}
                    alt="" />
                <div className="absolute z-10 h-full w-full hero-shadow">
                </div>
                <Info>
                    <Info.Container >
                        <Info.Title>{t("welcome-page.hero_title")}</Info.Title>
                        <Info.SubTitle>{t("welcome-page.hero_subtitle")}</Info.SubTitle>
                        <Info.Button slide_id={slide_id}>{t("welcome-page.hero_button")}</Info.Button>
                    </Info.Container>
                </Info>
            </div>
        </section>
    )
}
