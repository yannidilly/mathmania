"use client"; // This is a client component
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/Auth';
import Image from 'next/image';
import LogoImage from '../../assets/logo-mathmania.png';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [{ user }, { createAccountWithEmail }] = useAuth();

    // Cria a conta de usuário
    const createAccount = async (e) => {
        e.preventDefault();
        await createAccountWithEmail(email, password);
    };

    return (
        <main className="font-custom">
            <section className="flex flex-col justify-around bg-custom-gray1 h-screen">
                <div className="flex flex-col justify-around bg-custom-gray1">
                    <form className="rounded flex flex-col items-center px-4">
                        <div className="flex justify-center items-center mt-8 sm:mt-0 sm:mb-0 md:mt-16 lg:mt-8 mb-8">
                            <Image
                                className="flex items-center w-48 sm:w-60 md:w-64 lg:w-64 xl:w-64 mt-12"
                                src={ LogoImage }
                                alt="logo MathMania"
                                height={ 25 }
                            />
                        </div>
                        <h1 className="uppercase text-text-center text-1xl sm:text-xl md:text-2xl md:mt-12 md:mb-12 lg:text-2xl xl:text-2xl text-custom-gray4 mb-8">
                            Nova Conta
                        </h1>
                        <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
                            <label htmlFor="email" className="block text-custom-gray4 text-xs mb-1">
                                Email
                            </label>
                            <input
                                className="text-custom-gray4 shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded leading-tight focus:outline-none focus:shadow-outline text-sm"
                                type="email"
                                label="Email"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                required
                                placeholder="Digite seu email"
                            />
                        </div>

                        <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
                            <label htmlFor="password" className="block text-custom-gray4 text-xs mb-1">
                                Senha
                            </label>
                            <input
                                className="text-custom-gray4 shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded leading-tight focus:outline-none focus:shadow-outline text-sm"
                                type="password"
                                label="Senha"
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) }
                                required
                                placeholder="Crie uma senha"
                            />
                        </div>

                        <button
                            className="uppercase shadow-lg bg-custom-red hover:bg-custom-hoverBtn text-white py-3 px-2 w-full mt-4 md:w-96 md:mt-6 lg:w-96 xl:w-120 focus:outline-none mb-4 rounded-md text-sm"
                            type="submit"
                            disabled={ !password || !email }
                            onClick={ createAccount }
                        >
                            Criar Conta
                        </button>

                        <div className='uppercase text-custom-gray4 py-2 px-2 mb-4 mt-4 text-xs'>
                            Já Estuda Com a Gente?{ ' ' }
                            <button className='underline text-custom-red text-center mt-4'>
                                <Link href="/login" >
                                    Faça Login
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
};
export default SignUp;
