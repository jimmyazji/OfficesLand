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
                            <NavBar.Item URL={'/'}>{t('welcome-page.home')}</NavBar.Item>
                            <NavBar.Item URL={'#products'}>{t('welcome-page.products')}</NavBar.Item>
                            <NavBar.Item URL={'#catalog'}>{t('welcome-page.catalog')}</NavBar.Item>
                            <NavBar.Item URL={'#about'}>{t('welcome-page.about')}</NavBar.Item>
                            <NavBar.Item URL={'#contact'}>{t('welcome-page.contact_us')}</NavBar.Item>
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
                                <SlideNav.Item URL={'/'}>{t('welcome-page.home')}</SlideNav.Item>
                                <SlideNav.Item URL={'/about'}>{t('welcome-page.about')}</SlideNav.Item>
                                <SlideNav.Item URL={'/products'}>{t('welcome-page.products')}</SlideNav.Item>
                                <SlideNav.Item URL={'/catalog'}>{t('welcome-page.catalog')}</SlideNav.Item>
                                <SlideNav.Item URL={'/contact'}>{t('welcome-page.contact_us')}</SlideNav.Item>
                            </SlideNav.Label>

                            <SlideNav.SelectLang locale={locale} />
                        </SlideNav.List>
                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}