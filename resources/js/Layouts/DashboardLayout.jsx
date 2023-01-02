import { Head } from '@inertiajs/inertia-react';
import { Header } from '@/Components/Dashboard';
import { useState } from 'react';
import Sidebar from '@/Layouts/Sidebar';

export default function Dashboard({ props, children }) {
    const [isSidebarOpened, setIsSidebarOpened] = useState(true)
    return (
        <>
            <Head title="Dashboard" />
            <div className="relative min-h-screen flex flex-row">

                {isSidebarOpened ?
                    <aside className='z-10 min-h-screen w-32 md:w-64 bg-minorBackground box-shadow-inset-r-dark'>
                        <Sidebar />
                    </aside>
                    : null
                }

                <div className='absolute md:relative min-h-screen w-full bg-majorBackground'>
                    <Header>
                        <Header.Container>
                            <Header.Hamburger isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />
                            <Header.Dropdown  {...props} />
                        </Header.Container>
                    </Header>
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
}

