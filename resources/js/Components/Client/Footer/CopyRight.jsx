import React from 'react'
import { BiCopyright } from 'react-icons/bi'

export default function CopyRight({ children }) {
    return (
        <div className='w-full h-full border-t-4 border-majorBackground '>
            {children}
        </div>
    )
}

CopyRight.Container = function CopyRightContainer({ children }) {
    return (
        <div className='flex justify-center w-full h-full max-w-[1240px] mx-auto py-4'>
            {children}
        </div>
    )
}


CopyRight.CompanyName = function CopyRightCompanyName({ children }) {
    return (
        <div className='text-accent text-base flex flex-row items-center '>
            <p>{children}</p>
            <BiCopyright className='fill-accent ml-2 text-base ' />
        </div>
    )
}

