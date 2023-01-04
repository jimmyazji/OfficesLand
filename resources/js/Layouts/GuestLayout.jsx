import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children, className }) {
    return (
        <div className={`min-h-screen flex flex-col items-center pt-40 ` + className}>
            <div className='flex flex-col justify-center items-center w-full '>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current" />
                </Link>
                {children}
            </div>
        </div>
    );
}
