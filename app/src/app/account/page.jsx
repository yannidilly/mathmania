"use client";
import React from 'react';
import { useAuth } from '../context/Auth';
import Header from '../header/page';
import ProfileImage from '../../assets/adicionar-usuario.png';
import Image from 'next/image';
import Button from '../button/page';

const Account = () => {
  const [{ user }, { updateAccountInfo }] = useAuth();

  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h1 className="text-center text-2xl font-bold mb-4">Minha conta</h1>
          <h2 className="text-center text-lg mb-4">Informações da conta</h2>
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full"
              src={user?.avatar || ProfileImage}
              alt="Foto de perfil"
              width={100}
              height={100}
              priority
            />
            <h2 className="mt-2">{user?.name}</h2>
            <h2 className="mt-2">{user?.email}</h2>
            <Button
              title='Editar Informações'
              onClick={updateAccountInfo}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Account;
