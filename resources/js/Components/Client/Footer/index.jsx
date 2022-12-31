export default function Footer({ children }) {
    return (
        <section className='w-full h-full bg-minorBackground'>
            {children}
        </section>
    )
}

Footer.Container = function FooterContainer({children}) {
    return (
        <div className="flex flex-col gap-4 items-center max-w-[1240px] mx-auto">
            {children}
        </div>
    )
}
