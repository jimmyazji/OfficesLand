import { Head } from '@inertiajs/inertia-react';
import { SidebarContainer, UsersContainer, ProductsContainer, PartnersContainer } from '@/Containers/Dashboard'
import { Header } from '@/Components/Dashboard';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Dashboard(props) {
    const [isSidebarOpened, setIsSidebarOpened] = useState(true)

    return (
        <>
            <Head title="Dashboard" />
            <div className="relative min-h-screen flex flex-row">

                {isSidebarOpened ?
                    <aside className='z-10 min-h-screen w-2/4 md:w-1/3 bg-minorBackground box-shadow-inset-r-dark'>
                        <SidebarContainer />
                    </aside>
                    : null
                }

                <main className='absolute md:relative min-h-screen w-full bg-majorBackground'>
                    <Header>
                        <Header.Container>
                            <Header.Hamburger isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} />
                            <Header.Dropdown  {...props} />
                        </Header.Container>
                    </Header>
                    
                    {/* router */}
                    <BrowserRouter>
                        <Routes>
                            <Route path='/dashboard' element={<h1>index</h1>} />
                            <Route path='/dashboard/users' element={<UsersContainer />} />
                            <Route path='/dashboard/products' element={<ProductsContainer />} />
                            <Route path='/dashboard/partners' element={<ProductsContainer />} />
                        </Routes>
                    </BrowserRouter>
                </main>
            </div>
        </>
    );
}