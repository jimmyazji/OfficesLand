import React, { useState } from 'react'
import { NavBar, SlideNav, Header } from '@/Components/Client'

import { HeaderData } from '@/fixtures/WelcomeData'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function HeaderContainer({locale}) {
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)
    const { t, tChoice } = useLaravelReactI18n()
    return (
        <Header>
            <Header.Container>
                <NavBar>
                    <NavBar.Container>
                        <NavBar.Logo />

                        <NavBar.List>
                            <NavBar.Item URL={'/'}>{HeaderData.homeText}</NavBar.Item>
                            <NavBar.Item URL={'#products'}>{HeaderData.productsText}</NavBar.Item>
                            <NavBar.Item URL={'#catalog'}>{HeaderData.catalogText}</NavBar.Item>
                            <NavBar.Item URL={'#about'}>{HeaderData.aboutusText}</NavBar.Item>
                            <NavBar.Item URL={'#contact'}>{HeaderData.contactusText}</NavBar.Item>
                        </NavBar.List>

                        <NavBar.Label>
                            <NavBar.SelectLang locale={locale} />
                        </NavBar.Label>

                        <NavBar.Hamburger
                            isSlideNavOpened={isSlideNavOpened}
                            setIsSlideNavOpened={setIsSlideNavOpened}
                        />
                    </NavBar.Container>
                </NavBar>
                <SlideNav>
                    <SlideNav.Container isSlideNavOpened={isSlideNavOpened}>
                        <SlideNav.List >
                            <SlideNav.LoginButton URL={'/login'}>تسجيل الدخول</SlideNav.LoginButton>

                            <SlideNav.Label>
                                <SlideNav.Item URL={'/'}>{HeaderData.homeText}</SlideNav.Item>
                                <SlideNav.Item URL={'/about'}>{HeaderData.aboutusText}</SlideNav.Item>
                                <SlideNav.Item URL={'/products'}>{HeaderData.productsText}</SlideNav.Item>
                                <SlideNav.Item URL={'/catalog'}>{HeaderData.catalogText}</SlideNav.Item>
                                <SlideNav.Item URL={'/contact'}>{HeaderData.contactusText}</SlideNav.Item>
                            </SlideNav.Label>

                            <SlideNav.SelectLang locale={locale} />
                        </SlideNav.List>
                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}