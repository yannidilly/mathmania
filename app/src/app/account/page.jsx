"use client"; // This is a client component
import React from 'react';
import styles from './styles.module.css';
import { useAuth } from '../context/Auth';

const Account = () => {
  const [{ user }] = useAuth();
  return (
    <main className={styles.main}>        
        <section>
              
          <h1> Minha conta </h1>                                                                   <h2>Email: {user.email}</h2>
          <h2>{user.name}</h2>
        </section>
    </main>
  )
};
export default Account;
