
"use client";
import Link from 'next/link';
import React from 'react';


const Survey = () => {

  return (
    <>

      <main className="bg-custom-gray1 flex items-start pt-8 justify-center h-screen font-custom">
        <section className='bg-custom-gray1 flex justify-center md:mt-16 lg:mt-20 xl:mt-20'>

          <form className="bg-custom-gray1 rounded px-8 pt-6 pb-8 mb-4 mt-14">
            <div className="mb-4">
              <label className="uppercase block text-custom-gray4 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                className="bg-custom-gray1 shadow-lg appearance-none rounded w-full py-2 px-3 text-custom-gray3 focus:outline-none"
                id="name"
                type="text"

              />
            </div>
            <div className="mb-6">
              <label className="uppercase block text-custom-gray4 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="bg-custom-gray1 shadow-lg appearance-none border rounded w-full py-2 px-3 text-custom-gray3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"

              />
            </div>
            <div className="mb-6">
              <label className="uppercase block text-custom-gray4 text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                className="bg-custom-gray1 shadow-lg appearance-none rounded w-full py-2 px-3 text-custom-gray3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"

              />
            </div>

            <p className="text-center text-custom-gray4 text-xs mb-4">Você Está se Preparando <br /> para Qual Prova?</p>
            <div>
              <label className="block text-custom-gray3 text-sm mb-2" htmlFor="exam">
                Prova
              </label>
              <select
                className="bg-custom-gray1 shadow-lg appearance-none rounded w-full py-2 px-3 text-custom-gray3 focus:outline-none"
                id="exam"
              >
                <option>Enem</option>
                <option>Concurso Nacional Unificado</option>
              </select>
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                className="shadow-lg bg-custom-red hover:bg-custom-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Entrar
              </button>
            </div>
            <Link
              className="block text-center text-custom-red text-xs mt-12"
              href='/login'>Já Tenho Conta!
            </Link>
          </form>
        </section>
      </main></>
  )
};
export default Survey;