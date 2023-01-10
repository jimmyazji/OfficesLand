import Info from './info'
import slideImage from '@/../assets/products/1.jpg'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import Slider from '@/Components/Slider'

export default function HeroContainer({ slide_id }) {
    const { t } = useLaravelReactI18n()
    const DUMMY_DATA = [
        {
            id: '1',
            imageURL: slideImage,
        },
        {
            id: '2',
            imageURL: "https://picsum.photos/1200/700?random=2",
        },
        {
            id: '3',
            imageURL: "https://picsum.photos/1200/700?random=3",
        },
    ]

    return (
        <section id='hero' className='bg-minorBackground'>
            <div className='w-full h-[400px] md:h-[700px]'>
                <div className="relative w-full h-full">
                    <Slider className="w-full h-full"
                        DUMMY_DATA={DUMMY_DATA}
                        imageHight="full"
                        pagination={{ clickable: true }}
                        loop={true} >
                        <div className='absolute top-0 h-full w-full hero-top-shadow'>
                            <Info>
                                <Info.Container >
                                    <Info.Title>{t("welcome-page.hero_title")}</Info.Title>
                                    <Info.SubTitle>{t("welcome-page.hero_subtitle")}</Info.SubTitle>
                                    <Info.Button slide_id={slide_id}>{t("welcome-page.hero_button")}</Info.Button>
                                </Info.Container>
                            </Info>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
