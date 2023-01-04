import { Head } from '@inertiajs/inertia-react';
import { HeroContainer, ContactUsContainer } from '@/Containers/Client'
import WelcomeLayout from '@/Layouts/WelcomeLayout'

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <WelcomeLayout className="relative min-h-screen bg-minorBackground">
                <HeroContainer slide_id={2} />
                <ContactUsContainer />
            </WelcomeLayout>
        </>
    );
}