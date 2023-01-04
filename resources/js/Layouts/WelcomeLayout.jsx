import { HeaderContainer, FooterContainer } from '@/Containers/Client'

export default function WelcomeLayout({ children, props, className }) {
    return (
        <div className={`${className}`}>
            <HeaderContainer {...props} />
            <main>
                {children}
            </main>
            <FooterContainer />
        </div>
    )
}
