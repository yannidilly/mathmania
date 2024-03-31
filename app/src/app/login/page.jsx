"use client"; // This is a client component
import React, { useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/Auth';
import Image from 'next/image';
import LogoImage from '../../assets/logo-mathmania.png';
import LogoGoogle from '../../assets/google.png';
import Link from 'next/link';

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
        <main className='font-custom'>
            <section
                className='
                bg-custom-backgroundGray
                mt-[-0.5rem]
                '
                >
                <div>
                    <div className='
                        flex
                        flex-col
                        h-screen
                        justify-around
                        '
                        >
                        <div className='
                            flex
                            justify-center
                            items-center
                            w-full
                            h-32
                            md:mt-40
                            lg:mt-8
                            lg:mb-8
                            xl:mt-16
                            '
                            >
                            <Image
                                className='
                                    lg:h-8 
                                    lg:w-auto
                                    xl:w-auto
                                    '
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
                            mb-8
                            mt-[-2rem]
                            md:mt-[-4rem]
                            lg:mt-[-16rem]
                            lg:text-3xl
                            lg:mb-40
                            text-4xs
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
                            items-center
                            mt-[-4rem]
                            md-mt-[-8rem]
                            lg:mt-[-20rem]
                            lg:mb-12
                            xl:mt-[-24rem]
                            text-sm
                            "
                        >
                            <div
                                className='
                                mb-4
                                '
                                >
                                <label
                                    htmlFor="email"
                                    className="block 
                                    text-custom-secondary 
                                    text-2xs
                                    ">
                                    Email
                                </label>
                                <input
                                    className="
                                    shadow-lg
                                    appearance-none 
                                    border
                                    font-custom
                                    py-3
                                    px-3
                                    w-72
                                    rounded
                                    md:w-96
                                    lg:w-120
                                    xl:w-144
                                    text-custom-secondary  
                                    leading-tight 
                                    focus:outline-none 
                                    focus:shadow-outline
                                    text-sm
                                    "
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
                                    text-2xs
                                    "
                                >
                                    Senha
                                </label>
                                <input
                                    className="
                                    shadow-lg
                                    appearance-none 
                                    border 
                                    rounded 
                                    py-3
                                    px-3
                                    w-72
                                    md:w-96
                                    lg:w-120
                                    xl:w-144
                                    text-custom-secondary  
                                    leading-tight 
                                    focus:outline-none 
                                    focus:shadow-outline
                                    rounded-md
                                    text-sm
                                        "
                                    type="password"
                                    label="Senha"
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <button
                                className='
                                    shadow-lg
                                    bg-custom-primary
                                    hover:bg-custom-hoverBtn
                                    text-white 
                                    py-3
                                    px-5
                                    w-72
                                    md:w-96
                                    lg:w-120
                                    xl:w-144
                                    focus:outline-none
                                    mb-4
                                    mt-6
                                    rounded-md
                                    text-sm
                                    '
                                type="submit"
                                disabled={ !password || !email }
                                onClick={ signInAccountWithEmail }
                            >
                                ENTRAR
                            </button>

                            <span
                                className='
                                text-custom-secondary
                                text-xs
                                '
                            >
                                ou
                            </span>
                            
                            <button
                                
                                className="
                                shadow-lg
                                bg-white
                                text-custom-secondary 
                                py-3
                                px-4
                                w-72
                                mb-4
                                h-10
                                md:w-96
                                lg:w-120
                                xl:w-144
                                focus:outline-none 
                                focus:shadow-outline 
                                flex 
                                items-center
                                justify-center
                                rounded-md
                                mt-4
                                text-sm
                                "
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
                                <span>Entrar com o Google</span>
                            </button>

                        </form>
                        

                        <div
                            className='
                            text-center
                            text-custom-secondary
                            mb-8
                            mt-[-5rem]
                            md:mt-[-8rem]
                            lg:mt-[-12rem]
                            xl:mt-[-16rem]
                            '
                            >
                            <p className='
                            md:mt-[-4rem]
                            lg:mt-[-8rem]
                            lg:mb-[-12rem]
                            xl:mt-[-4rem]
                            text-2xs
                            mt-4
                            lg-4
                            '
                            >
                                Ainda Não Estuda Com a Gente?
                            
                                <div>
                                <button
                                    onClick={() => router.push('/signup')}
                                    className='
                                    text-custom-primary
                                    py-2
                                    px-2
                                    mb-4
                                    text-2Xs
                                    underline
                                    '
                                    >
                                    <Link href="/signup">
                                        Criar Conta
                                    </Link>
                                    </button>
                                </div>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
};
export default Login;
