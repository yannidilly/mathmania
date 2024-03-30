"use client"; // This is a client component
import React, { useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/Auth';
import Image from 'next/image';
import LogoImage from '../../assets/logo-mathmania.png';
import LogoGoogle from '../../assets/google.png';

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
            <section
                className='
                bg-custom-backgroundGray
                '
            >
                <div>
                    <div className='flex flex-col h-screen justify-around'>
                        <div className='flex justify-center items-center'>
                            <Image
                                src={ LogoImage }
                                alt='logo MathMania'
                                height={ 25 }
                            />
                        </div>
                        <h1
                            className='
                            uppercase
                            text-center
                            top 0
                            text-custom-secondary 
                            text-2xl
                            '
                        >
                            Entrar
                        </h1>
                        <form
                            className="
                            rounded
                            px-8
                            pt-6
                            pb-8
                            mb-4
                            flex
                            flex-col
                            items-center">
                            <div
                                className='
                                mb-4
                                '
                            >
                                <label
                                    htmlFor="email"
                                    className="block 
                                    text-custom-secondary 
                                    text-sm
                                    font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    className="
                                    shadow 
                                    appearance-none 
                                    border 
                                    rounded 
                                    w-full 
                                    py-2 
                                    px-3
                                    w-72
                                    md:w-96
                                    lg:w-120
                                    text-custom-secondary  
                                    leading-tight 
                                    focus:outline-none 
                                    focus:shadow-outline"
                                    type="email"
                                    label="Email"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div className="
                                        mb-4"
                            >
                                <label
                                    htmlFor="password"
                                    className="
                                    block 
                                    text-custom-secondary 
                                    text-sm
                                    font-bold mb-2">
                                    Senha
                                </label>
                                <input
                                    className="
                                        shadow 
                                        appearance-none 
                                        border-none
                                        rounded w-full 
                                        py-2 
                                        px-3
                                        w-72
                                        md:w-96
                                        lg:w-120
                                        text-custom-secondary 
                                        leading-tight 
                                        focus:outline-none 
                                        focus:shadow-outline
                                        mb-4"
                                    type="password"
                                    label="Senha"
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <button
                                className="
                                    bg-custom-primary 
                                    text-white 
                                    font-bold 
                                    py-2 
                                    px-3
                                    w-72
                                    md:w-96
                                    lg:w-120
                                    focus:outline-none 
                                    leading-tight 
                                    focus:shadow-outline 
                                    mb-4"
                                type="submit"
                                disabled={ !password || !email }
                                onClick={ signInAccountWithEmail }
                            >
                                ENTRAR
                            </button>
                            OU
                            
                            <button
                                
                                className="
                                bg-white
                                hover:bg-custom-secondary
                                text-custom-secondary 
                                font-bold 
                                py-2
                                px-4
                                w-72
                                md:w-96
                                lg:w-120
                                focus:outline-none 
                                focus:shadow-outline 
                                flex 
                                items-center
                                justify-center "
                                type="submit"
                                onClick={ signInWithGoogle }
                            >
                                <Image
                                    
                                    className='
                                    w-8 
                                    h-8 
                                    mr-2
                                    '
                                src={ LogoGoogle }
                                alt='logo Google'
                                
                            />
                                <span>Entrar com Google</span>
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
