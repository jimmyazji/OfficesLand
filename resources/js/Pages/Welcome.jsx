import { Head } from '@inertiajs/inertia-react';
import { HeroContainer, ContactUsContainer, ProductsContainer } from '@/Containers/Client'
import WelcomeLayout from '@/Layouts/WelcomeLayout'

export default function Welcome(props) {
    console.log("Welcome Page renderd")

    return (
        <>
            <Head title="Welcome" />
            <WelcomeLayout {...props}>
                <HeroContainer />
                <ProductsContainer />
                <ContactUsContainer />
            </WelcomeLayout>
        </>
    );
}