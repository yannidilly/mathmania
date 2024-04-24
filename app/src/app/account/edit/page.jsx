// this is an edit account page.
// it is a form that allows the user to edit their account information.

import React from 'react';

const EditAccount = () => {
  return (
    <main>
      <header>
        Here is header!
      </header>
      <section className="bg-custom-gray1 font-custom h-screen ">
        <form action="" className="flex flex-col items-center px-4 md:px-8 lg:px-12 xl:px-16 pt-4 pb-8 sm:mt-8 lg:mt-24 space-y-20">
          <h1 className="text-custom-gray4">EDITAR INFORMAÇÕES</h1>
          <div className="flex flex-col w-full md:w-96 lg:w-120 xl:w-144 py-2 space-y-16">
            <input type="text" placeholder="Nome" className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm" />
            <input type="email" placeholder="Email" className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm" />
            <input type="password" placeholder="Senha" className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm" />
            <button type="submit" className="shadow-lg bg-custom-red hover:bg-custom-hoverBtn text-white py-3 px-2 w-full md:w-96 lg:w-96 xl:w-120 focus:outline-none mb-4 rounded-md text-sm">SALVAR</button>
          </div>
          <button className="text-custom-red py-2 px-2 mb-4 mt-4 text-xs">
            SAIR
          </button>
        </form>
      </section>
    </main>
  )
}

export default EditAccount;