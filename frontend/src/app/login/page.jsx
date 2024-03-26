"use client"; // This is a client component
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/Auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [{ user }, { signInWithEmail }] = useAuth();

  // Cria a conta de usuário
  const signInAccount = async (e) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  return (
    <main className={styles.main}>        
        <section className={styles.section}>
            <div>
                <div>                  
                    <h1> Login </h1>                                                                            
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
                            onClick={signInAccount}                        
                        >  
                        Continuar                           
                        </button>
                                                                    
                    </form>                 
                </div>
            </div>
        </section>
    </main>
  )
};
export default Login;
