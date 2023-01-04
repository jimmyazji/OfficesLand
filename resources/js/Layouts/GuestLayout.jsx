import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children, className }) {
    return (
        <div className={`min-h-screen flex flex-col items-center ` + className}>
            <div className='flex flex-col justify-center items-center w-full '>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current" />
                </Link>
                <main className="w-full max-w-md mt-4 p-6 md:bg-minorBackground rounded-lg md:shadow-xl shadow-majorBackground md:border-2 border-majorBackground">
                    {children}
                </main>
            </div>
        </div>
    );
}
