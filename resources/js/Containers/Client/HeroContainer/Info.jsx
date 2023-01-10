import { Link } from '@inertiajs/inertia-react'

export default function Info({ children }) {
    return (
        <div className="flex justify-start items-end h-full">
            {children}
        </div>
    )
}

Info.Container = function InfoContainer({ children }) {
    return (
        <div className="z-10 container mx-auto text-left rtl:text-right mb-16 md:mb-40">
            {children}
        </div>
    )
}

Info.Title = function InfoTitle({ children }) {
    return (
        <p className="font-extrabold text-lg md:text-2xl lg:text-4xl text-primary text-shadow-dark">
            {children}
        </p>
    )
}

Info.SubTitle = function InfoSubtitle({ children }) {
    return (
        <p className='mt-4 block text-sm md:text-lg lg:text-2xl text-accent'>
            {children}
        </p>
    )
}

Info.Button = function InfoButton({ id, children }) {
    return (
        <Link href={`/products/${id}`}>
            <button className='mt-12 px-4 py-1 bg-minorBackground rounded-lg hover:opacity-50'>
                <p className='text-xs md:text-base lg:text-lg text-accent '>
                    {children}
                </p>
            </button>
        </Link>
    )
}