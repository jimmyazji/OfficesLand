import { Link } from '@inertiajs/inertia-react'

export default function Info({ children }) {
    return (
        <div className="z-20 w-full h-full flex flex-col justify-center items-start max-w-7xl mx-auto">
            {children}
        </div>
    )
}

Info.Container = function InfoContainer({ children }) {
    return (
        <div className="">
            {children}
        </div>
    )
}

Info.Title = function InfoTitle({ children }) {
    return (
        <p className="mb-4 font-bold text-lg md:text-2xl lg:text-4xl text-primary text-right text-shadow-dark">
            {children}
        </p>
    )
}

Info.SubTitle = function InfoSubtitle({ children }) {
    return (
        <p className='mb-4 hidden md:block text-xs md:text-sm lg:text-lg text-right text-accent'>
            {children}
        </p>
    )
}

Info.Button = function InfoButton({ slide_id, children }) {
    return (
        <Link href={`/products/${slide_id}`}>
            <button className='w-20 h-8 bg-minorBackground text-accent rounded-lg hover:opacity-50'>
                {children}
            </button>
        </Link>
    )
}