
"use client";
import React from 'react';
import Header from '../header/page';
import Button from '../button/page';
import Link from 'next/link';

const Survey = () => {

  return (
    <>
      <Header />
      <main className="flex items-start pt-8 justify-center h-screen bg-custom-gray1">
        <section className='mt-12'>
          <div className="flex flex-col align-middle mb-8">
            <input className='w-60 h-8 mt-2 bg-custom-gray1 shadow-lg p-2 y-2' type="text" placeholder="Nome" />
            <input className='w-60 h-8 mt-2 bg-custom-gray1 shadow-lg p-2 y-2' type="email" placeholder="Email" />
            <input className='w-60 h-8 mt-2 bg-custom-gray1 shadow-lg p-2 y-2' type="password" placeholder="Senha" />
          </div>
          

          <h1 className='font-bold text-custom-gray4'> Você está se preparando <br /> para qual prova? </h1>
          <div className="flex text-custom-gray4">
            <input type="radio" id="enem" name="prova" value="enem"/>
            <label className='ml-2' for="enem">Enem</label>
          </div>

          <div className="flex  text-custom-gray4">
            <input type="radio" id="enem" name="prova" value="concurso"/>
            <label className='ml-2'for="enem">Concurso Nacional Unificado</label>
          </div>

          <Link href="/subjects">
            <Button title='Entrar' />
          </Link>
          <div className="flex flex-col text-center mt-12">
          <Link href="/login">
            <span className='text-custom-red  font-bold'>Já Tenho Conta</span>
            </Link>
          </div>
    </section>
      </main>
    </>
  )
};
export default Survey;