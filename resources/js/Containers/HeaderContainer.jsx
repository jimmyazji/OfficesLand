import React, { useState } from 'react'
import { NavBar, SlideNav, Header } from '../Components'

import { HeaderData } from '../fixtures/WelcomeData'

export default function HeaderContainer(props) {
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)

    return (
        <Header>
            <Header.Container>
                <NavBar>
                    <NavBar.Container>
                        <NavBar.Hamburger
                            isSlideNavOpened={isSlideNavOpened}
                            setIsSlideNavOpened={setIsSlideNavOpened}
                        />
                        <NavBar.Logo />
                        <NavBar.List>
                            <NavBar.Item URL={'/'}>{HeaderData.homeText}</NavBar.Item>
                            <NavBar.Item URL={'/about'}>{HeaderData.aboutusText}</NavBar.Item>
                            <NavBar.Item URL={'/products'}>{HeaderData.productsText}</NavBar.Item>
                            <NavBar.Item URL={'/catalog'}>{HeaderData.catalogText}</NavBar.Item>
                            <NavBar.Item URL={'/contact'}>{HeaderData.contactusText}</NavBar.Item>
                        </NavBar.List>
                        <NavBar.SelectLang />
                        {props.auth.user
                            ?
                            <NavBar.DashboardButton URL={route('login')}>
                                {HeaderData.dashboardText}
                            </NavBar.DashboardButton>
                            :
                            <NavBar.LoginButton URL={route('dashboard')}>
                                {HeaderData.signinText}
                            </NavBar.LoginButton>
                        }
                    </NavBar.Container>
                </NavBar>
                <SlideNav>
                    <SlideNav.Container isSlideNavOpened={isSlideNavOpened}>
                        <SlideNav.List >
                            <SlideNav.Label>
                                <SlideNav.Item URL={'/'}>{HeaderData.homeText}</SlideNav.Item>
                                <SlideNav.Item URL={'/about'}>{HeaderData.aboutusText}</SlideNav.Item>
                                <SlideNav.Item URL={'/products'}>{HeaderData.productsText}</SlideNav.Item>
                                <SlideNav.Item URL={'/catalog'}>{HeaderData.catalogText}</SlideNav.Item>
                                <SlideNav.Item URL={'/contact'}>{HeaderData.contactusText}</SlideNav.Item>
                            </SlideNav.Label>

                            <SlideNav.SelectLang >اللغة</SlideNav.SelectLang>

                            <SlideNav.LoginButton URL={'/login'}>تسجيل الدخول</SlideNav.LoginButton>
                        </SlideNav.List>
                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}
