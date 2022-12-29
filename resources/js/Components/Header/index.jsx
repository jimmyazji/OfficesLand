export default function Header({ children }) {
    return (
        <header className={'z-50 sticky top-0 w-full'}>
            {children}
        </header>
    )
}

Header.Container = function HeaderContainer({ children }) {
    return (
        <div className='bg-minorBackground h-14 md:h-16 lg:h-20'>
            {children}
        </div>
    )
}