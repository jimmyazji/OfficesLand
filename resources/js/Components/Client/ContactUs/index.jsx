import React from 'react'

export default function ContactUs({ children }) {
    return (
        <section className='w-full h-full bg-majorBackground'>
            {children}
        </section>
    )
}

ContactUs.Title = function ContactUsTitle({ children }) {
    return (
        <h2 className='text-3xl text-accent font-bold text-center pt-8'>
            {children}
        </h2>
    )
}

ContactUs.Container = function ContactUsContainer({ children }) {
    return (
        <div className='flex flex-col-reverse md:flex-row-reverse gap-4 lg:gap-16 max-w-[1040px] h-full w-[95%] mx-auto py-12'>
            {children}
        </div>
    )
}

