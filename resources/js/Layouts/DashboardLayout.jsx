import { Head } from '@inertiajs/inertia-react';
import { Header } from '@/Components/Dashboard';
import { useState } from 'react';
import Sidebar from '@/Layouts/Sidebar';

export default function DashboardLayout({ children }) {
    const [isSidebarOpened, setIsSidebarOpened] = useState(true)

    return (
        <>
            <Head title="Dashboard" />
            <div className="relative min-h-screen flex flex-row">

                {isSidebarOpened ?
                    <aside className='z-10 min-h-screen w-2/4 md:w-1/3 bg-minorBackground box-shadow-inset-r-dark'>
                        <Sidebar />
                    </aside>
                    : null
                }

                <main className='absolute md:relative min-h-screen w-full bg-majorBackground'>
                    <Header>
                        <Header.Container>
                            <Header.Hamburger isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />
                            <Header.Dropdown />
                        </Header.Container>
                    </Header>

                    {children}
                </main>
            </div>
        </>
    );
}

