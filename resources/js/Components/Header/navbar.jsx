import { Link } from '@inertiajs/inertia-react'
import { useRef } from 'react'
import { BiLogIn } from 'react-icons/bi'

import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown';

export default function NavBar({ children }) {
    return (
        <div className='mx-auto max-w-7xl'>
            {children}
        </div>
    )
}

NavBar.Container = function NavBarContainer({ children }) {
    return (
        <nav className='flex flex-row justify-between items-center h-14 md:h-16 lg:h-20 mx-4'>
            {children}
        </nav>
    )
}


NavBar.Logo = function NavBarLogo({ URL }) {
    return (
        <Link href={URL} >
            <div className='flex flex-row items-center'>
                <ApplicationLogo className={"h-12 md:h-16 lg:h-20"} />
                <div className='flex flex-col items-center'>
                    <p className='text-base md:text-xl text-primary font-bold uppercase'> Offices Land</p>
                    <p className='hidden md:block text-xs text-accent font-semibold uppercase'>Your first choice</p>
                </div>
            </div >
        </Link>
    )
}

NavBar.List = function NavBarList({ children }) {
    return (
        <ul className='hidden md:flex flex-row items-center gap-8'>
            {children}
        </ul>
    )
}

NavBar.Item = function NavBarItem({ URL, children }) {
    return (
        <li className='font-semibold text-sm lg:text-base transition duration-150 text-accent hover:text-primary cursor-pointer'>
            <Link href={URL} >
                {children}
            </Link>
        </li>
    )
}

NavBar.Label = function NavBarLabel({ URL, children }) {
    return (
        <div className='flex flex-row'>
            {children}
        </div>
    )
}

NavBar.SelectLang = function NavBarSelectLang({ URL, children }) {
    return (
        <Dropdown className='hidden md:block ml-4 text-xs rounded-full transition bg-minorBackground text-accent'>
            <Dropdown.Trigger>
                <span className="inline-flex ">
                    <button className="inline-flex items-center text-base px-3 py-1 hover:text-primary focus:outline-none transition ease-in-out duration-150">
                        <svg
                            className="mr-2 -ml-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        (العربية)/ اللغة
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content align='right' width='w-40' className="bg-minorBackground mt-3">
                <Dropdown.Link href={route('logout')} method="post" as="button" className="text-right text-accent hover:bg-majorBackground border-t-2 border-accent">
                    العربية
                </Dropdown.Link>
                <Dropdown.Link href={route('logout')} method="post" as="button" className="text-right text-accent hover:bg-majorBackground">
                    English
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    )
}

NavBar.LoginButton = function NavBarLoginButton({ URL }) {
    return (
        <div className='hidden md:block font-semibold text-sm lg:text-base transition duration-150 text-accent hover:text-primary'>
            <Link href={URL}>
                <BiLogIn />
            </Link>
        </div>
    )
}

NavBar.DashboardButton = function NavBarDashboardButton({ URL, children }) {
    return (
        <div className='hidden md:block font-semibold text-sm lg:text-base transition duration-150 text-accent hover:text-primary'>
            <Link href={URL}>
                {children}
            </Link>
        </div>
    )
}

NavBar.Hamburger = function NavBarHamburger({ children, isSlideNavOpened, setIsSlideNavOpened }) {
    const sliceRef1 = useRef(null)
    const sliceRef2 = useRef(null)
    const sliceRef3 = useRef(null)

    function hamburgerAnimation() {
        if (!isSlideNavOpened) {
            sliceRef1.current.classList.add("opacity-80", "rotate-45", "translate-y-2", "bg-primary")
            sliceRef2.current.classList.add("opacity-0")
            sliceRef3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-2", "bg-primary")
        }
        else {
            sliceRef1.current.classList.remove("opacity-80", "rotate-45", "translate-y-2", "bg-primary")
            sliceRef2.current.classList.remove("opacity-0")
            sliceRef3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-2", "bg-primary")
        }
        setIsSlideNavOpened(!isSlideNavOpened)
    }

    return (
        <button className='md:hidden w-6 h-5 flex flex-col justify-between cursor-pointer'
            onClick={() => hamburgerAnimation()}>
            <div ref={sliceRef1} className='w-full h-1 bg-accent rounded-full transition duration-500 ease-in-out'></div>
            <div ref={sliceRef2} className='w-full h-1 bg-accent rounded-full transition duration-500 ease-in-out'></div>
            <div ref={sliceRef3} className='w-full h-1 bg-accent rounded-full transition duration-500 ease-in-out'></div>
        </button>
    )
}



// NavBar.Search = function NavBarSearch() {
//     return (
//         <div className='md:ml-4 mr-0 md:mr-auto cursor-pointer'>
//             <GoSearch className='fill-white hover:fill-hover text-xl' />
//         </div>
//     )
// }


// NavBar.RegisterButton = function NavBarRegisterButton({ URL, children }) {
//     return (
//         <div className='hidden md:block text-base transition duration-300 text-accent  hover:text-primary'>
//             <Link href={URL}>
//                 {children}
//             </Link>
//         </div>
//     )
// }
