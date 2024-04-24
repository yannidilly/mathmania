// this is an edit account page.
// it is a form that allows the user to edit their account information.

import React from 'react';

const EditAccount = () => {
  return (
    <main>
      <header>
        Here is header!
      </header>
      <section className="bg-custom-gray1">
        <form action="">
          <h1>Editar informações</h1>
          <div>
            <input type="text" placeholder="Nome" className="shadow-lg" />
            <input type="email" placeholder="Email" className="shadow-lg" />
            <input type="password" placeholder="senha" className="shadow-lg" />
            <button type="submit">Salvar</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default EditAccount;