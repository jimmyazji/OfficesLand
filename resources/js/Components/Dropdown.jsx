import React, { useState, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

const DropDownContext = React.createContext();

const Dropdown = ({ children, className }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className={`relative ` + className}>{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({ className = '', children }) => {
    const { open, setOpen } = useContext(DropDownContext);

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className={`absolute z-50 mt-2 rounded-b-md shadow-lg ${className}`}
                    onClick={() => setOpen(false)}>
                    <div className={`rounded-b-md ring-1 ring-black ring-opacity-5 `}>
                        {children}
                    </div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ href, method = 'post', as = 'a', children, className }) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={`block w-full px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out ` + className}
        >
            {children}
        </Link>
    );
};

const Atag = ({ href, children, className }) => {
    return (
        <a
            href={href}
            className={`block w-full px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out ` + className}
        >
            {children}
        </a>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
Dropdown.Atag = Atag;

export default Dropdown;
