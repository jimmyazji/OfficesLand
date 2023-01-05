import { useState } from 'react'
import NavBar from './navbar'
import SlideNav from './slideNav'

import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function HeaderContainer({ locale }) {
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)
    const { t } = useLaravelReactI18n()

    return (
        <header id='header' className={'z-50 sticky top-0 w-full'}>
            <div className='bg-minorBackground h-14 md:h-16 lg:h-20'>
                <NavBar>
                    <NavBar.Container>
                        <NavBar.Logo />

                        <NavBar.List>
                            <NavBar.Item URL={'/'}>{t('welcome-page.header_home')}</NavBar.Item>
                            <NavBar.Item URL={'#products'}>{t('welcome-page.header_products')}</NavBar.Item>
                            <NavBar.Item URL={'#catalog'}>{t('welcome-page.header_catalog')}</NavBar.Item>
                            <NavBar.Item URL={'#about'}>{t('welcome-page.header_about')}</NavBar.Item>
                            <NavBar.Item URL={'#contact'}>{t('welcome-page.header_contact_us')}</NavBar.Item>
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
                            <SlideNav.LoginButton URL={'/login'}>{t('welcome-page.header_log_in')}</SlideNav.LoginButton>

                            <SlideNav.Label>
                                <SlideNav.Item URL={'#'}>{t('welcome-page.header_home')}</SlideNav.Item>
                                <SlideNav.Item URL={'#products'}>{t('welcome-page.header_products')}</SlideNav.Item>
                                <SlideNav.Item URL={'#catalog'}>{t('welcome-page.header_catalog')}</SlideNav.Item>
                                <SlideNav.Item URL={'#about'}>{t('welcome-page.header_about')}</SlideNav.Item>
                                <SlideNav.Item URL={'#contact'}>{t('welcome-page.header_contact_us')}</SlideNav.Item>
                            </SlideNav.Label>

                            <SlideNav.SelectLang locale={locale} languageText={t('welcome-page.header_language')} />
                        </SlideNav.List>
                    </SlideNav.Container>
                </SlideNav>
            </div>
        </header>
    )
}