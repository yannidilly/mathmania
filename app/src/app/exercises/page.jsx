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
        <section className="flex flex-col items-center justify-center h-full">
        <p className="text-lg text-justify mt-20">
            
            (Enem 2020) Uma torneira está gotejando água <br />
            em um balde com capacidade de 18 litros.<br />
            No instante atual, o balde se encontra com ocupação<br />
            de 50% de sua capacidade.
            A cada segundo caem 5<br />
            gotas de água da torneira,e uma gota é formada, em média,<br />
            por 5×10-2 ml
            de água.
            Quanto tempo, em hora, será necessário<br />
            para encher completamente o balde, <br /> partindo do
            instante atual?<br/>
          </p>
          
          {/* Opções de marcação de múltipla escolha */}
          <div className="mt-4">
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
            className="mt-4 uppercase bg-custom-red text-white py-2 px-4 rounded text-xs"
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
