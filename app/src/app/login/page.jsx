"use client"; // This is a client component
import React, { useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/Auth';
import Image from 'next/image';
import LogoImage from '../../assets/logo-mathmania.png';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [{ user }, { signInWithEmail, signInWithGoogle }] = useAuth();
    const router = useRouter();

    // quando usuário está logado (localStorage) já envia direto para a outra página '/'
    // precisamos de criar uma função para validar o token antes de reencaminhar o usuário

    const signInAccountWithEmail = async (e) => {
        e.preventDefault();
        await signInWithEmail(email, password);
    };

    return (
        <main>
            <section className='bg-gray-200'>
                <div>
                    <div className='flex flex-col h-screen justify-around'>
                        <div className='flex justify-center items-center'>
                            <Image
                                src={ LogoImage }
                                alt='logo MathMania'
                                height={ 25 }
                            />
                        </div>
                        <h1 className='uppercase text-center top 0'>Entrar</h1>
                        <form className="rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-28 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    label="Email"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                    Senha
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-28 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="password"
                                    label="Senha"
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <button
                                className="bg-custom-primary text-white font-bold py-2 px-28 focus:outline-none leading-tight focus:shadow-outline mb-4"
                                type="submit"
                                disabled={ !password || !email }
                                onClick={ signInAccountWithEmail }
                            >
                                ENTRAR
                            </button>
                            
                            <button
                                
                                className="bg-white hover:bg-custom-secondary text-custom-secondary font-bold py-2 px-2 focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={ signInWithGoogle }
                            >
                                Entrar com google
                            </button>

                        </form>

                        <span>Ainda não estuda com a gente?</span>
                        <button onClick={ () => router.push('/signup') }>Criar conta</button>
                    </div>
                </div>
            </section>
        </main>
    )
};
export default Login;
