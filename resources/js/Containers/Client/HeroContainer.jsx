import { Hero, Info } from '@/Components/Client'

import { HeroData } from '@/fixtures/WelcomeData'

export default function HeroContainer({ slide_id }) {
    return (
        <Hero>
            <Hero.Container>
                <Hero.Image slide_id={slide_id} />
                <Hero.Shadow />
                <Info>
                    <Info.Container >
                        <Info.Title>{HeroData.title}</Info.Title>
                        <Info.SubTitle>{HeroData.subtitle}</Info.SubTitle>
                        <Info.Button slide_id={slide_id}>{HeroData.buttonText}</Info.Button>
                    </Info.Container>
                </Info>
            </Hero.Container>
        </Hero>
    )
}
