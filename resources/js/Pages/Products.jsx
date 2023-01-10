import WelcomeLayout from "@/Layouts/WelcomeLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Products() {
    console.log("Products Page renderd")

    return (
        <>
            <Head title="Products" />
            <WelcomeLayout>
                <div className="bg-red-600">Products</div>
            </WelcomeLayout>
        </>
    )
}
