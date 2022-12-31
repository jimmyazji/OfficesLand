import Dropdown from '@/Components/Dropdown';

export default function Content({ children }) {
    return (
        <div className='min-h-screen w-full bg-majorBackground'>
            {children}
        </div>
    )
}

Content.Header = function ContentHeader({ children }) {
    return (
        <div className='flex items-center h-10 md:h-12 lg:h-16 bg-minorBackground border-b-2 border-accent'>
            {children}
        </div>
    )
}

Content.Dropdown = function ContentDropdown({ auth, children }) {
    return (
        <Dropdown className={"ml-auto"}>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                        {auth.user.name}

                        <svg
                            className="ml-2 -mr-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content align='right'>
                <Dropdown.Link href={route('logout')} method="post" as="button">
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    )
}

