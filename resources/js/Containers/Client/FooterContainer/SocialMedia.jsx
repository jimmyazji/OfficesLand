import { Link } from '@inertiajs/inertia-react'
import Full_logo from '@/../assets/full_logo.png'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa'

export default function SocialMedia({ children }) {
    return (
        <div className='my-8 w-full h-full'>
            {children}
        </div>
    )
}

SocialMedia.Container = function SocialMediaContainer({ children }) {
    return (
        <div className='flex flex-row items-center justify-center gap-4 md:gap-20'>
            {children}
        </div>
    )
}

SocialMedia.Logo = function SocialMediaLogo({ URL }) {
    return (
        <div className='w-[100px] md:w-[120px] lg:w-[150px]'>
            <Link href={URL} >
                <img className="w-full h-full"
                    src={Full_logo}
                    alt="offices-land-logo"></img>
            </Link>
        </div >
    )
}


SocialMedia.Facebook = function SocialMediaFacebook({ URL }) {
    return (
        <div className='cursor-pointer'>
            <a href={URL}>
                <FaFacebook className='fill-accent hover:fill-primary text-[8vw] sm:text-[40px]' />
            </a>
        </div>
    )
}

SocialMedia.Instagram = function SocialMediaInstagram({ URL }) {
    return (
        <div className='cursor-pointer'>
            <a href={URL}>
                <FaInstagram className='fill-accent hover:fill-primary text-[8vw] sm:text-[40px]' />
            </a>
        </div>
    )
}

SocialMedia.Twitter = function SocialMediaTwitter({ URL }) {
    return (
        <div className='cursor-pointer'>
            <a href={URL}>
                <FaTwitter className='fill-accent hover:fill-primary text-[8vw] sm:text-[40px]' />
            </a>
        </div>
    )
}


SocialMedia.Youtube = function SocialMediaYoutube({ URL }) {
    return (
        <div className='cursor-pointer'>
            <a href={URL}>
                <FaYoutube className='fill-accent hover:fill-primary text-[8vw] sm:text-[40px]' />
            </a>
        </div>
    )
}

SocialMedia.Tiktok = function SocialMediaTiktok({ URL }) {
    return (
        <div className='cursor-pointer'>
            <a href={URL}>
                <FaTiktok className='fill-accent hover:fill-primary text-[8vw] sm:text-[40px]' />
            </a>
        </div>
    )
}
