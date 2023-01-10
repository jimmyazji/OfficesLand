import { Link } from '@inertiajs/inertia-react'

import Dropdown from '@/Components/Dropdown';
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function SlideNav({ children }) {
    return (
        <div className="bg-minorBackground w-full h-full">
            {children}
        </div>
    )
}

SlideNav.List = function SlideNavList({ children }) {
    return (
        <ul className='flex flex-col text-left rtl:text-right w-[95%] mx-auto h-full mt-4'>
            {children}
        </ul>
    )
}

SlideNav.Label = function SlideNavLabel({ children }) {
    return (
        <div className='flex flex-col rounded-md bg-majorBackground px-2'>
            {children}
        </div>
    )
}

SlideNav.Item = function SlideNavItem({ URL, children }) {
    return (
        <li className='text-sm text-accent w-full mt-2 pb-1 ease-in-out hover:text-primary border-b border-accent last-of-type:border-none'>
            <Link href={URL}>
                {children}
            </Link>
        </li>
    )
}

SlideNav.SelectLang = function SlideNavSelectLang({ locale, languageText }) {
    return (
        <li className='w-full mt-4'>
            <Dropdown className='w-full text-sm text-accent bg-majorBackground rounded-md'>
                <Dropdown.Trigger >
                    <button className="flex justify-between items-center w-full p-2 border border-transparent">
                        <p>{languageText}</p>
                        <p className='flex ltr:flex-row-reverse items-center gap-1 hover:text-primary focus:outline-none transition-all ease-in-out duration-150'>
                            {locale == "ar" ? "العربية" : "English"}
                            <MdKeyboardArrowDown />
                        </p>
                    </button>
                </Dropdown.Trigger>

                <Dropdown.Content className="bg-majorBackground w-full mt-2 text-left rtl:text-right">
                    <Dropdown.Atag href="locale/ar" className='hover:bg-minorBackground border-t border-accent'>
                        العربية
                    </Dropdown.Atag>
                    <Dropdown.Atag href="locale/en" className='hover:bg-minorBackground'>
                        English
                    </Dropdown.Atag>
                </Dropdown.Content>
            </Dropdown>
        </li>
    )
}


SlideNav.LoginButton = function SlideNavLoginButton({ URL, children }) {
    return (
        <Link href={URL} className="w-full mb-6">
            <div className='text-sm py-1 rounded-full border border-accent bg-majorBackground text-accent text-center'>
                {children}
            </div>
        </Link>
    )
}


SlideNav.Title = function SlideNavTitle({ children }) {
    return (
        <div className='text-gray-500 font-semibold text-right mr-4 mb-2'>
            {children}
        </div>
    )
}
