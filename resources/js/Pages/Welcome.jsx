import { Head } from '@inertiajs/inertia-react';
import { HeroContainer, ContactUsContainer } from '@/Containers/Client'
import WelcomeLayout from '@/Layouts/WelcomeLayout'

export default function Welcome(props) {
    console.log("Welcome Page renderd")

    return (
        <>
            <Head title="Welcome" />
            <WelcomeLayout {...props} className="relative min-h-screen bg-minorBackground">
                <HeroContainer slide_id={2} />
                <ContactUsContainer />
            </WelcomeLayout>
        </>
    );
}