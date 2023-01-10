import { HeaderContainer, FooterContainer } from '@/Containers/Client'

export default function WelcomeLayout({ children, locale }) {

    return (
        <div className="relative min-h-screen bg-majorBackground">
            <HeaderContainer locale={locale} />
            <main >
                {children}
            </main>
            <FooterContainer />
        </div>
    )
}
