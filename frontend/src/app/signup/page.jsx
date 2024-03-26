"use client"; // This is a client component
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import styles from './styles.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/Auth';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [{ user }, { createAccountWithEmail }] = useAuth();
 
  // Cria a conta de usuário
  const createAccount = async (e) => {
    e.preventDefault();
    await createAccountWithEmail(email, password);
  };

  return (
    <main className={styles.main}>        
        <section className={styles.section}>
            <div>
                <div>                  
                    <h1> Matemania </h1>                                                                            
                    <form className={styles.form}>                                                                                            
                        <div className={styles.outerInput}>
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

                        <div className={styles.outerInput}>
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
                            className={styles.button}
                            type="submit" 
                            disabled={!password || !email}
                            onClick={createAccount}                        
                        >  
                        Cadastrar                               
                        </button>
                                                                    
                    </form>
                
                    <p>
                        Já possui uma conta?{' '}
                        <Link href="/login" >
                        Entre aqui
                        </Link>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
};
export default SignUp;
