import { HeaderContainer, FooterContainer } from '@/Containers/Client'

export default function WelcomeLayout({ children, locale, className }) {

    return (
        <div className={`${className}`}>
            <HeaderContainer locale={locale} />
            <main>
                {children}
            </main>
            <FooterContainer />
        </div>
    )
}
