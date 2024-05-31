"use client";
import React from 'react';
import { useAuth } from '../context/Auth';
import Header from '../header/page';
import ProfileImage from '../../assets/adicionar-usuario.png';
import Image from 'next/image';
import Button from '../button/page';
import EditIcon from '../../assets/editar.png';
import Link from 'next/link';

const Account = () => {
  const [{ user }, { updateAccountInfo }] = useAuth();

  // Verifica se os dados do usuário estão carregados
  const isLoading = !user;

  return (
    <>
      <Header />
      <main className="bg-custom-gray1 flex justify-center items-center h-screen xl:h-screen">
        <section className="bg-white rounded-lg p-8 y-8 shadow-md">
          {isLoading ? (
            <div className="flex flex-col align-middle items-center">
              <Image src={ProfileImage} alt="User profile" width={60} height={60} />
           
              <span className="mb-4 text-left text-1xl text-custom-gray3 ">Carregando usuário logado...</span>
            </div>
          ) : (
            <>
              <div className="flex flex-col align-middle">
                <h1 className="text-left text-1xl text-custom-gray4 font-bold">{user?.name}</h1>
                <span className="text-left text-1xl text-custom-gray3">{user?.email}</span>
              </div>
              <div className="flex flex-col align-middle">   
                <h1 className="mt-6 text-left text-1xl text-custom-gray4 font-bold">Perfil</h1>
                  <span className="flex text-left text-custom-gray3 text-1xl">
                    <Image
                      src={EditIcon} alt="Edit icon" width={20} height={20}
                      className='mr-2'
                    />
                    Editar Informações
                  </span>
                </div>
                
                <div className="flex flex-col align-middle">   
                <h1 className="mt-4 text-left text-1xl text-custom-gray4 font-bold">Trilha de Aprendizado</h1>
                  <span className="flex text-left text-custom-gray3 text-1xl">
                    <Image
                      src={EditIcon} alt="Edit icon" width={20} height={20}
                      className='mr-2'
                    />
                    Enem
                  </span>
              </div>

                <div className="flex align-middle flex-col">
                  <Link href="/upgrade">
                <Button
                  title='UPGRADE'
                  onClick={updateAccountInfo}
                    />
                  </Link>
              </div>

                <div className="flex align-middle flex-col">
                  <Link href="/stats">
                  <Button
                  title='ESTATÍSTICAS'
                  onClick={updateAccountInfo}
                  />
                  </Link>
                </div> 
              
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Account;
