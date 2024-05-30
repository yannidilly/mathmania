
import React from 'react';
import { useAuth } from '../context/Auth';

const Account = () => {
  const { user , updateAccountInfo } = useAuth();
  // console.log('email: ', user);
  return (
    <main className='text-lg'>        
        <section>
          <h1> Minha conta </h1>                                                                   
          <h2 onClick={updateAccountInfo}>Email: {user?.email}</h2>
          <h2>{user?.name}</h2>
        </section>
    </main>
  )
};
export default Account;
