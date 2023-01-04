import { Head } from '@inertiajs/inertia-react';
import { Header } from '@/Components/Dashboard';
import { useState } from 'react';
import { Sidebar } from '@/Components/Dashboard'


export default function Dashboard({ props, children }) {
    console.log("dashboard layout")

    const [isSidebarOpened, setIsSidebarOpened] = useState(false)

    return (
        <>
            <Head title="Dashboard" />
            <div className="relative min-h-screen w-full">

                <div className={`absolute w-full md:relative min-h-screen bg-majorBackground`}>
                    <Header>
                        <Header.Container>
                            <Header.Hamburger isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />
                            <Header.Dropdown  {...props} />
                        </Header.Container>
                    </Header>
                    <main className="w-[90%] mx-auto mt-12 ">
                        {children}
                    </main>
                </div>

                <aside className={`fixed left-0 top-0 min-h-screen w-8/12 md:w-80 bg-minorBackground box-shadow-inset-r-dark transition duration-500 ease-in-out transform ${isSidebarOpened ? "" : "-translate-x-full"} `}>
                    <Sidebar>
                        <Sidebar.Header onclick={() => setIsSidebarOpened(!isSidebarOpened)} />
                        <Sidebar.Body>
                            <Sidebar.List>
                                <Sidebar.Title>Menu</Sidebar.Title>
                                <Sidebar.Item onclick={() => setIsSidebarOpened(!isSidebarOpened)} URL={route('dashboard.users.index')}>
                                    <Sidebar.UserLogo />
                                    <Sidebar.Label name='Users' />
                                </Sidebar.Item>
                                <Sidebar.Item onclick={() => setIsSidebarOpened(!isSidebarOpened)} URL={route('dashboard.products.index')}>
                                    <Sidebar.ProductLogo />
                                    <Sidebar.Label name='Products' />
                                </Sidebar.Item>
                                <Sidebar.Item onclick={() => setIsSidebarOpened(!isSidebarOpened)} URL={route('dashboard.partners.index')}>
                                    <Sidebar.PartnerLogo />
                                    <Sidebar.Label name='Partners' />
                                </Sidebar.Item>
                            </Sidebar.List>
                        </Sidebar.Body>
                    </Sidebar>
                </aside>

            </div>
        </>
    );
}

