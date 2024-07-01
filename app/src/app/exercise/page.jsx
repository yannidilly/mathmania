"use client";
import { useState } from 'react';
import Header from '../../components/Header';

const question = "(Enem 2020) Uma torneira está gotejando água em um balde com capacidade de 18 litros. No instante atual, o balde se encontra com ocupação de 50% de sua capacidade. A cada segundo caem 5 gotas de água da torneira, e uma gota é formada, em média, por 5x10⁻² ml de água. Quanto tempo, em hora, será necessário para encher completamente o balde, partindo do instante atual?";
const alternatives = ['1 x 10⁻³', '2 x 10¹', '1 x 10¹', '2 x 10⁻²', '1 x 10⁻²'];
const correctAlternative = '1 x 10⁻³';

export default function Home() {
  const [selectedAlternative, setSelectedAlternative] = useState('');

  const answerQuestion = () => {
    if (selectedAlternative === correctAlternative) {
      console.log('sucesso');
    }
    else {
      console.log('erro');
    }
  };

  return (
    <main className="p-6">
      <Header />
      <div>
        <button>VOLTAR</button>
        <p>{ question }</p>
        <div>
          {
            alternatives.map((alternative, i) => (
              <>
                <input
                  name='alternative'
                  type="radio"
                  id={ i }
                  onChange={ () => setSelectedAlternative(alternative) }
                />
                <label name='alternative' htmlFor={ i }>{ alternative }</label>
                <br />
              </>
            ))
          }
        </div>
        <button onClick={ answerQuestion }>RESPONDER</button>
      </div>
    </main>

  );
}


/*
'use client';
import React, { useState } from "react";
import Header from "../header/page";
import Button from '../button/page';

const Exercises = () => {
  // Estado para armazenar a opção selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Função para lidar com a seleção de opções
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log('OPÇÃO SELECIONADA: ', event.target.value);
  };

  return (
    <>
      <Header />
      <main className="bg-custom-gray1 w-full min-h-screen font-custom">
        <section className="flex flex-col items-center justify-center h-full p-4">
          <p className="text-lg text-justify mt-20 sm:text-base sm:mt-10">
            (Enem 2020) Uma torneira está gotejando água em um balde com capacidade de 18 litros. No instante atual, o balde se encontra com ocupação de 50% de sua capacidade.
            A cada segundo caem 5 gotas de água da torneira, e uma gota é formada, em média, por 5×10⁻² ml de água. Quanto tempo, em horas, será necessário para encher completamente o balde, partindo do instante atual?
          </p>

          <div className="mt-8">
            <label className="block mb-2">
              <input 
                type="radio" 
                name="option" 
                value="a" 
                checked={selectedOption === "a"} 
                onChange={handleOptionChange} 
              />
              Opção A
            </label>
            <label className="block mb-2">
              <input 
                type="radio" 
                name="option" 
                value="b" 
                checked={selectedOption === "b"} 
                onChange={handleOptionChange} 
              />
              Opção B
            </label>
            <label className="block mb-2">
              <input 
                type="radio" 
                name="option" 
                value="c" 
                checked={selectedOption === "c"} 
                onChange={handleOptionChange} 
              />
              Opção C
            </label>
            <label className="block mb-2">
              <input 
                type="radio" 
                name="option" 
                value="d" 
                checked={selectedOption === "d"} 
                onChange={handleOptionChange} 
              />
              Opção D
            </label>
          </div>

          <button
            className="mt-8 uppercase bg-custom-red text-white py-2 px-4 rounded text-xs"
            onClick={() => console.log('VOCÊ RESPONDEU:  ', selectedOption)}
          >
            Responder
          </button>
          
        </section>
      </main>
    </>
  );
};

export default Exercises;
*/
