"use client";
import React from 'react';
import { useAuth } from '../context/Auth';
import Header from '../header/page';
import ProfileImage from '../../assets/adicionar-usuario.png';
import Image from 'next/image';
import Button from '../button/page';

const Account = () => {
  const [{ user }, { updateAccountInfo }] = useAuth();

  // Verifica se os dados do usuário estão carregados
  const isLoading = !user;

  return (
    <>
      <Header />
      <main className="bg-custom-gray1 sm:mb-8 flex justify-center items-center h-screen w-auto shadow">
        <section className="bg-white rounded-lg p-8 shadow-md">
          {isLoading ? (
            <div className="flex flex-col align-middle items-center">
              <Image src={ProfileImage} alt="User profile" width={60} height={60} />
           
              <span className="mb-4 text-left text-1xl text-custom-gray3 ">Carregando usuário logado...</span>
            </div>
          ) : (
            <>
              <div className="flex flex-col align-middle">
                <h1 className="text-left text-1xl text-custom-gray4 font-bold">{user?.name}</h1>
                <span className="mb-4 text-left text-1xl text-custom-gray3">{user?.email}</span>
              </div>
              <div className="flex flex-col align-middle">   
                <h1 className="mt-4 text-left text-1xl text-custom-gray4 font-bold">Perfil</h1>
                <span className="text-left text-custom-gray3 text-1xl">Editar Informações</span>
              </div>
              <div className="flex flex-col align-middle">   
                <h1 className="mt-4 text-left text-1xl text-custom-gray4 font-bold">Trilha de Aprendizado</h1>
                <span className="text-left text-custom-gray3 text-1xl">ENEM</span>
              </div>
              <Button
                title='Editar Informações'
                onClick={updateAccountInfo}
              />
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Account;
