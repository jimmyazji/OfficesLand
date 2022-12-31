import { Link } from '@inertiajs/inertia-react'
import Dropdown from '@/Components/Dropdown';
import { useLaravelReactI18n } from 'laravel-react-i18n'

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
            className={`flex flex-col justify-between h-screen w-screen fixed right-0 ${isSlideNavOpened ? '' : "translate-x-full"}
            bg-minorBackground transition duration-500 ease-in-out transform`}>
            {children}
        </nav>
    )
}

SlideNav.List = function SlideNavList({ children }) {
    return (
        <ul className='flex flex-col w-[95%] mx-auto h-full justify-start pb-20 mt-4'>
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
        <li className='text-sm text-accent text-right w-full mt-2 pb-2 ease-in-out hover:text-primary border-b-2 border-accent  last-of-type:border-0'>
            <Link href={URL}>
                {children}
            </Link>
        </li>
    )
}

SlideNav.SelectLang = function SlideNavSelectLang({ URL, children }) {
    const { t } = useLaravelReactI18n()
    return (
        <li className='flex flex-row justify-between w-full mt-4 px-2 py-2 bg-majorBackground rounded-lg'>
            <Dropdown className='w-full text-sm text-accent '>
                <Dropdown.Trigger >
                    <button className="inline-flex justify-between items-center w-full border border-transparent hover:text-primary focus:outline-none transition ease-in-out duration-150">
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
                        <p>Ar</p>
                        <p className='ml-auto'>{t('language')}</p>
                    </button>
                </Dropdown.Trigger>

                <Dropdown.Content align='left' className="bg-accent w-full mt-2" width='w-full'>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                        العربية
                    </Dropdown.Link>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                        English
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </li>
    )
}


SlideNav.LoginButton = function SlideNavLoginButton({ URL, children }) {
    return (
        <Link href={URL} className="w-full mt-auto">
            <div className='text-sm py-1 rounded-full border-2 border-accent bg-majorBackground text-accent text-center'>
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
