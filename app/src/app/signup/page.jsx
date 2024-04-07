"use client"; // This is a client component
import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { useAuth } from '../context/Auth';

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
    <main className="bg-custom-gray1 font-custom w-full h-screen">        
        <section className="flex flex-col h-screen justify-around">
            <div>
                <div>                  
                    <form className="rounded flex flex-col items-center px-4 md:px-8 lg:px-12 xl:px-16 pt-4 pb-8 sm:mt-8 lg:mt-24">                                                                                            
                          <h1> Matemania </h1>
                          <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
                            <label htmlFor="email" className={styles.inputLabel}>
                                Nome
                            </label>
                            <input
                                className={styles.input}
                                type="email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Digite seu nome"                                
                            />
                        </div>  
                        <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
                            <label htmlFor="email" className={styles.inputLabel}>
                                Email
                            </label>
                            <input
                                className={styles.input}
                                type="email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Digite seu email"                                
                            />
                        </div>

                        <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
                            <label htmlFor="password" className={styles.inputLabel}>
                                Senha
                            </label>
                            <input
                                className={styles.input}
                                type="password"
                                label="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Crie uma senha"              
                            />
                        </div>                                             
                        
                        <button
                            className="shadow-lg bg-custom-red hover:bg-custom-hoverBtn text-white py-3 px-2 w-full md:w-96 lg:w-96 xl:w-120 focus:outline-none mb-4 rounded-md text-sm"
                            type="submit" 
                            disabled={!password || !email}
                            onClick={createAccount}                        
                            >  
                            Cadastrar                               
                        </button>
                        <p>
                            Já possui uma conta?{' '}
                            <Link href="/login" >
                            Entre aqui
                            </Link>
                        </p>
                                                                    
                    </form>
                
                                      
                </div>
            </div>
        </section>
    </main>
  )
};
export default SignUp;
