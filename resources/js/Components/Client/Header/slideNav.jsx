import { Link } from '@inertiajs/inertia-react'
import { useLaravelReactI18n } from 'laravel-react-i18n'

import Dropdown from '@/Components/Dropdown';
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function SlideNav({ children }) {
    return (
        <div className="md:hidden">
            {children}
        </div>
    )
}

SlideNav.Container = function SlideNavContainer({ children, isSlideNavOpened }) {
    return (
        <nav
            className={`flex flex-col justify-between h-screen w-screen fixed right-0 ltr:left-0 top-14 ${isSlideNavOpened ? '' : "translate-x-full rtl:-translate-x-full"}
            bg-minorBackground transition duration-500 ease-in-out transform`}>
            {children}
        </nav>
    )
}

SlideNav.List = function SlideNavList({ children }) {
    return (
        <ul className='flex flex-col text-left rtl:text-right w-[95%] mx-auto h-full justify-start pb-20 mt-4'>
            {children}
        </ul>
    )
}

SlideNav.Label = function SlideNavLabel({ children }) {
    return (
        <div className='flex flex-col rounded-lg bg-majorBackground px-2'>
            {children}
        </div>
    )
}

SlideNav.Item = function SlideNavItem({ URL, children }) {
    return (
        <li className='text-sm text-accent w-full mt-2 pb-2 ease-in-out hover:text-primary border-b-2 border-accent  last-of-type:border-0'>
            <Link href={URL}>
                {children}
            </Link>
        </li>
    )
}

SlideNav.SelectLang = function SlideNavSelectLang({ locale }) {
    const { t } = useLaravelReactI18n()
    return (
        <li className='flex flex-row justify-between w-full mt-4 px-2 py-2 bg-majorBackground rounded-lg text-right '>
            <Dropdown className='w-full text-sm text-accent '>
                <Dropdown.Trigger >
                    <button className="flex flex-row-reverse justify-between items-center w-full border border-transparent hover:text-primary focus:outline-none transition ease-in-out duration-150">
                        <p className='flex flex-row-reverse items-center gap-1'>
                            <MdKeyboardArrowDown />
                            {locale == "en" ? "English" : "العربية"}
                        </p>
                        <p>{t("welcomePage.language")}</p>
                    </button>
                </Dropdown.Trigger>

                <Dropdown.Content align='left' className="bg-accent w-full mt-2" width='w-full'>
                    <Dropdown.Atag href="locale/ar">
                        العربية
                    </Dropdown.Atag>
                    <Dropdown.Atag href="locale/en" >
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
