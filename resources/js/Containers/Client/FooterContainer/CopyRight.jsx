import { BiCopyright } from 'react-icons/bi'

export default function CopyRight({ children }) {
    return (
        <div className='flex justify-center py-4 '>
            {children}
        </div>
    )
}

CopyRight.Container = function CopyRightContainer({ children }) {
    return (
        <div className='text-accent text-base flex flex-row items-center '>
            <p>{children}</p>
            <BiCopyright className='fill-accent ml-2 text-base ' />
        </div>
    )
}

