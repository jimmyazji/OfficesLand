import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md'

export default function Address({ children }) {
    return (
        <div className='w-full h-full'>
            {children}
        </div>
    )
}

Address.Container = function AddressContainer({ children }) {
    return (
        <div className='flex flex-col justify-between'>
            {children}
        </div>
    )
}

Address.Location = function AddressLocation({ children }) {
    return (
        <div className='flex flex-row items-center mb-4'>
            <MdLocationOn className='mr-4 fill-accent text-2xl' />
            <p className='text-lg lg:text-xl  text-accent'>
                {children}
            </p>
        </div>
    )
}

Address.Email = function AddressEmail({ children }) {
    return (
        <div className='flex flex-row items-center mb-4'>    
            <MdEmail className='mr-4 fill-accent text-2xl' />
            <p className='text-lg lg:text-xl text-accent'>
                {children}
            </p>
        </div>
    )
}

Address.Phone = function AddressEmail({ children }) {
    return (
        <div className='flex flex-row items-center mb-4'>
            <MdPhone className='mr-4 fill-accent text-2xl' />
            <a href={`tel:${children}`}>
                <p className='text-lg lg:text-xl  text-accent'>
                    {children}
                </p>
            </a>
        </div>
    )
}

Address.Map = function AddressMap({ children }) {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24447.472891573718!2d46.70152199910589!3d24.666033769798304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0424ff2e530f%3A0x36529ba249766c8f!2sAl%20Malaz%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1671735465190!5m2!1sen!2s"
                className='w-full h-[340px] bg-accent rounded-lg'
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}