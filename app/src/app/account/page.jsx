'use client';
import React from 'react';
import { useAuth } from '../context/Auth';

const Account = () => {
  const { user } = useAuth();
  
  return (
    <main className='text-lg'>        
      <section>
        <h1> Minha conta </h1>                                                                   
        <h2>Email: {user?.email}</h2>
        <h2>{user?.name}</h2>
        
        <a
          href="/account/edit"
          className="text-blue-500 hover:underline mt-4">Editar Informações</a>
        
      </section>
    </main>
  );
};

export default Account;
