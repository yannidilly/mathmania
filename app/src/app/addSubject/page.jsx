'use client'

import { createSubjectDocument } from "@/database/firebase";
import React, { useState } from "react";

const createSubject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState(false);

  const nameIsValid = (n) => {
    if (n.lenght < 5) return false;
    return true;
  };

  const descriptionIsValid = (d) => {
    if (d.lenght < 100) return false;
    return true;
  };

  const clickToCreate = async () => {
    const nIsValid = nameIsValid(name);
    const dIsValid = descriptionIsValid(description);

    console.log(nIsValid, dIsValid);

    if (nIsValid && dIsValid) {
      await createSubjectDocument(name, description);
      setName('');
      setDescription('');
      return;
    }

    setFormError(true);
  };

  return (
    <div className="bg-black text-white h-screen p-6">
      <h1 className="text-center">Adicionar Matéria</h1>
      <form className="p-6">
        <p className="pb-6 pt-6">Nome:</p>
        <input
          className="text-black"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
        <span>
          {
            (!formError) ? '' : 'nome deve ser maior do que 5 caractéres'
          }
        </span>
        <p className="pb-6 pt-6">Descrição:</p>
        <input
          className="text-black"
          type="text"
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
        />
        <span>
          {
            (!formError) ? '' : 'descrição deve ser maior do que 100 caractéres'
          }
        </span>
      </form>
      <button className="border-2 p-2 ml-6" onClick={ clickToCreate }>Criar Matéria</button>
    </div>
  );
};

export default createSubject;
