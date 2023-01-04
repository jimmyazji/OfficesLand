import { Link } from '@inertiajs/inertia-react'
import { useRef } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaSolarPanel } from 'react-icons/fa'

import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown';
import { useLaravelReactI18n } from 'laravel-react-i18n'

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
                <ApplicationLogo className="ltr:mr-3 rtl:ml-3 h-10 md:h-12 lg:h-16" />
                <div className='flex flex-col items-center'>
                    <p className='text-base md:text-lg lg:text-xl text-primary font-bold uppercase'> Offices Land</p>
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
        <li className='font-semibold text-base lg:text-lg transition duration-150 text-accent hover:text-primary cursor-pointer'>
            <Link href={URL} >
                {children}
            </Link>
        </li>
    )
}

NavBar.Label = function NavBarLabel({ URL, children }) {
    return (
        <div className='flex flex-row items-center gap-4'>
            {children}
        </div>
    )
}

NavBar.SelectLang = function NavBarSelectLang({ locale }) {
    const { t } = useLaravelReactI18n()
    return (
        <Dropdown className='hidden md:block text-xs rounded-full transition bg-minorBackground text-accent'>
            <Dropdown.Trigger>
                <button className="flex flex-row-reverse gap-1 items-center text-lg px-3 py-1 hover:text-primary focus:outline-none transition ease-in-out duration-150">
                    <MdKeyboardArrowDown />
                    <p>{locale == "en" ? "English" : "العربية"}</p>
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content className="bg-minorBackground mt-5 w-40 rtl:left-0 ltr:right-0">
                <Dropdown.Atag href="locale/ar" className="text-right text-accent hover:bg-majorBackground border-t-2 border-accent">
                    العربية
                </Dropdown.Atag>
                <Dropdown.Atag href="locale/en" className="text-right text-accent hover:bg-majorBackground">
                    English
                </Dropdown.Atag>
            </Dropdown.Content>
        </Dropdown>
    )
}

NavBar.LoginButton = function NavBarLoginButton({ URL }) {
    return (
        <button className='hidden md:block' >
            <Link href={URL}>
                <BiLogIn className='text-2xl transition duration-150 text-accent hover:text-primary' />
            </Link>
        </button>
    )
}

NavBar.DashboardButton = function NavBarDashboardButton({ URL }) {
    return (
        <div className='hidden md:block font-semibold text-sm lg:text-base transition duration-150 text-accent hover:text-primary'>
            <Link href={URL}>
                <FaSolarPanel className='text-2xl transition duration-150 text-accent hover:text-primary' />
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
