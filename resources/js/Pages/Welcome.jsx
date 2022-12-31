import { Head } from '@inertiajs/inertia-react';
import { HeaderContainer, HeroContainer, FooterContainer, ContactUsContainer } from '@/Containers/Client'

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-minorBackground">
                <HeaderContainer {...props} />
                <HeroContainer slide_id={2} />
                <ContactUsContainer />
                <FooterContainer />
            </div>
        </>
    );
}