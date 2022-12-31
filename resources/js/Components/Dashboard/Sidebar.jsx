import ApplicationLogo from '@/Components/ApplicationLogo'

export default function Sidebar({ children }) {
    return (
        <div className='min-h-screen w-1/6 bg-minorBackground '>
            {children}
        </div>
    )
}

Sidebar.Header = function SidebarHeader({ children }) {
    return (
        <div className='flex flex-row items-center justify-center h-10 md:h-12 lg:h-16 bg-minorBackground border-b-2 border-accent'>
            {children}
        </div>
    )
}

Sidebar.Logo = function SidebarLogo() {
    return (
        <>
            <ApplicationLogo className="h-6 md:h-8 lg:h-10 mr-2" />
            <p className='text-xs md:text-sm lg:text-base text-primary font-bold uppercase'> Offices Land</p>
        </>
    )
}

Sidebar.Body = function SidebarBody({ children }) {
    return (
        <div className='mt-4 mx-4'>
            {children}
        </div>
    )
}

Sidebar.List = function SidebarList({ children }) {
    return (
        <ul>
            {children}
        </ul>
    )
}

Sidebar.Title = function SidebarTitle({ children }) {
    return (
        <p className='font-normal text-primary opacity-80'>
            {children}
        </p>
    )
}

Sidebar.Item = function SidebarItem({ children }) {
    return (
        <li className='flex flex-row items-center gap-2 text-base rounded-lg text-accent cursor-pointer py-1 px-2 mt-2 hover:bg-majorBackground border-b-2 border-majorBackground'>
            {children}
        </li>
    )
}