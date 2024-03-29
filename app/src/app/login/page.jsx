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
            <section>
                <div>
                    <div className='flex flex-col h-screen justify-around'>
                        <div className='flex justify-center items-center'>
                            <Image
                                src={ LogoImage }
                                alt='logo Mathmania'
                                height={ 25 }
                            />
                        </div>
                        <h1 className='uppercase text-center'>Entrar</h1>
                        <form className={ styles.form }>
                            <div className={ styles.outerInput }>
                                <label htmlFor="email" className={ styles.inputLabel }>
                                    Email
                                </label>
                                <input
                                    className={ styles.input }
                                    type="email"
                                    label="Email"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div className={ styles.outerInput }>
                                <label htmlFor="password" className={ styles.inputLabel }>
                                    Senha
                                </label>
                                <input
                                    className={ styles.input }
                                    type="password"
                                    label="Senha"
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <button
                                className={ styles.button }
                                type="submit"
                                disabled={ !password || !email }
                                onClick={ signInAccountWithEmail }
                            >
                                Continuar
                            </button>
                            <button
                                className={ styles.button }
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
