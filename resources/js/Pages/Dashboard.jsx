import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { SidebarContainer, ContentContainer } from '@/Containers/Dashboard'

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="relative min-h-screen flex flex-row">
                <SidebarContainer />
                <ContentContainer {...props} />
            </div>
        </>
    );
}