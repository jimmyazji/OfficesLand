import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link } from '@inertiajs/inertia-react'
import { BiUser } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
export default function Sidebar({ children }) {
    return (
        <div className='w-full h-full'>
            {children}
        </div>
    )
}

Sidebar.Header = function SidebarHeader({onclick}) {
    return (
        <div className='flex flex-col items-center pt-20 justify-center gap-2'>
            <MdClose className='absolute top-5 left-5 text-4xl text-primary cursor-pointer' onClick={onclick} />
            <ApplicationLogo className="h-14 md:h-16 lg:h-24" />
            <p className='text-lg md:text-xl lg:text-2xl text-primary font-bold uppercase'> Offices Land</p>
        </div>
    )
}


Sidebar.Body = function SidebarBody({ children }) {
    return (
        <div className='mt-10'>
            {children}
        </div>
    )
}

Sidebar.List = function SidebarList({ children }) {
    return (
        <ul className=''>
            {children}
        </ul>
    )
}

Sidebar.Title = function SidebarTitle({ children }) {
    return (
        <p className='mx-2 md:mx-4 lg:mx-4 text-sm font-normal uppercase text-primary opacity-80'>
            {children}
        </p>
    )
}

Sidebar.Item = function SidebarItem({ URL, children }) {
    return (
        <Link href={URL}>
            <li className='flex flex-row items-center gap-2 text-sm md:text-base lg:text-lg text-accent cursor-pointer py-3 px-6 hover:bg-majorBackground '>
                {children}
            </li>
        </Link>
    )
}

Sidebar.Label = function SidebarLabel({ name }) {
    return (
        <p >
            {name}
        </p>
    )
}

Sidebar.UserLogo = function SidebarUserLogo() {
    return (
        <BiUser />
    )
}

Sidebar.ProductLogo = function SidebarProductLogo() {
    return (
        <MdProductionQuantityLimits />
    )
}

Sidebar.PartnerLogo = function SidebarPartnerLogo() {
    return (
        <HiUserGroup />
    )
}