import { useEffect, useState } from 'react'
import NavBar from './navbar'
import SlideNav from './slideNav'

import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function HeaderContainer({ locale }) {
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)
    const [bg, setBg] = useState(false);
    const { t } = useLaravelReactI18n()

    // toggle backgound color on header when scrolling
    useEffect(() => {
        if (!isSlideNavOpened) {
            window.addEventListener('scroll', () => {
                window.scrollY < 100 ? setBg(false) : setBg(true)
            })
        } else {
            setBg(true)
        }
    })

    return (
        <header id='header'
            className={`${bg ? 'bg-minorBackground' : 'bg-none'}
            fixed top-0 w-full py-3 z-20 transition-all duration-200`}>
            <div className='container mx-auto'>
                <NavBar>
                    <NavBar.Logo />
                    <NavBar.List>
                        <NavBar.Item URL={'/'}>{t('welcome-page.header_home')}</NavBar.Item>
                        <NavBar.Item URL={'#products'}>{t('welcome-page.header_products')}</NavBar.Item>
                        <NavBar.Item URL={'#catalog'}>{t('welcome-page.header_catalog')}</NavBar.Item>
                        <NavBar.Item URL={'#about'}>{t('welcome-page.header_about')}</NavBar.Item>
                        <NavBar.Item URL={'#contact'}>{t('welcome-page.header_contact')}</NavBar.Item>
                    </NavBar.List>

                    <NavBar.Label>
                        <NavBar.SelectLang locale={locale} />
                    </NavBar.Label>

                    <NavBar.Hamburger
                        isSlideNavOpened={isSlideNavOpened}
                        setIsSlideNavOpened={setIsSlideNavOpened}
                    />
                </NavBar>
                <div className={`${isSlideNavOpened ? '' : "translate-x-full rtl:-translate-x-full"}
                    lg:hidden flex flex-col h-full w-screen fixed top-14 right-0 ltr:left-0 transition-all duration-500 ease-in-out transform`}>
                    <SlideNav>
                        <SlideNav.List >
                            <SlideNav.LoginButton URL={'/login'}>{t('welcome-page.header_log_in')}</SlideNav.LoginButton>

                            <SlideNav.Label>
                                <SlideNav.Item URL={'#'}>{t('welcome-page.header_home')}</SlideNav.Item>
                                <SlideNav.Item URL={'#products'}>{t('welcome-page.header_products')}</SlideNav.Item>
                                <SlideNav.Item URL={'#catalog'}>{t('welcome-page.header_catalog')}</SlideNav.Item>
                                <SlideNav.Item URL={'#about'}>{t('welcome-page.header_about')}</SlideNav.Item>
                                <SlideNav.Item URL={'#contact'}>{t('welcome-page.header_contact')}</SlideNav.Item>
                            </SlideNav.Label>

                            <SlideNav.SelectLang locale={locale} languageText={t('welcome-page.header_language')} />
                        </SlideNav.List>
                    </SlideNav>
                </div>
            </div>
        </header>
    )
}