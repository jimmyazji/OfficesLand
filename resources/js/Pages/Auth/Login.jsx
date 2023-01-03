import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout className="bg-majorBackground">
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-700">{status}</div>}

            <div className='-mt-40 flex flex-col justify-center items-center w-full'>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current" />
                </Link>
                <div className="w-full max-w-md mt-6 p-6 bg-minorBackground rounded-lg md:shadow-xl shadow-majorBackground md:border-2 border-majorBackground">
                    <form onSubmit={submit} >
                        <div>
                            <InputLabel forInput="login" value="Email or Username" />
                            <TextInput
                                type="text"
                                name="login"
                                value={data.login}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.login} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="password" value="Password" />
                            <TextInput
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                                <span className="ml-2 text-sm text-accent">Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-accent hover:text-primary">
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ml-4" processing={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
