import Dropdown from '@/Components/Dropdown';
import { useRef } from 'react'

import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaUserCircle } from 'react-icons/fa'

export default function Header({ children }) {
    return (
        <div className=''>
            {children}
        </div>
    )
}

Header.Container = function HeaderContainer({ children }) {
    return (
        <div className='flex justify-between items-center h-12 md:h-16 px-4 bg-minorBackground'>
            {children}
        </div>
    )
}

Header.Dropdown = function HeaderDropdown({ auth }) {
    return (
        <Dropdown >
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md ">
                    <button className="flex items-center text-xl md:text-4xl text-accent py-2 rounded-md hover:text-majorBackground focus:text-majorBackground transition ease-in-out duration-150">
                        <FaUserCircle />
                        <RiArrowDropDownLine />
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content className='bg-minorBackground rounded-b-md border-t-2 border-accent right-0 w-40 '>
                <p className='text-gray-500 cursor-text text-right p-2'> {auth.user.name}</p>
                <Dropdown.Link href={route('logout')} method="post" as="button" className={"text-right rounded-b-md text-accent hover:bg-majorBackground"}>
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    )
}

Header.Hamburger = function HeaderHamburger({ isSidebarOpened, setIsSidebarOpened }) {
    const sliceRef1 = useRef(null)
    const sliceRef2 = useRef(null)
    const sliceRef3 = useRef(null)

    function hamburgerAnimation() {
        setIsSidebarOpened(!isSidebarOpened)
        if (isSidebarOpened) {
            sliceRef1.current.classList.add("opacity-80", "rotate-45", "translate-y-2", "bg-primary")
            sliceRef2.current.classList.add("opacity-0")
            sliceRef3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-2", "bg-primary")
        }
        else {
            sliceRef1.current.classList.remove("opacity-80", "rotate-45", "translate-y-2", "bg-primary")
            sliceRef2.current.classList.remove("opacity-0")
            sliceRef3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-2", "bg-primary")
        }
    }

    return (
        <button className='w-5 h-4 flex flex-col justify-between cursor-pointer transition duration-500 ease-in-out'
            onClick={() => hamburgerAnimation()}>
            <span ref={sliceRef1} className='w-full h-[3px] rounded-full bg-gray-400 transition duration-500 ease-in-out'></span>
            <span ref={sliceRef2} className='w-full h-[3px] rounded-full bg-gray-400 transition duration-500 ease-in-out'></span>
            <span ref={sliceRef3} className='w-full h-[3px] rounded-full bg-gray-400 transition duration-500 ease-in-out'></span>
        </button>
    )
}
