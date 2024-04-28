import React from "react";

const CardSubject = ({ subject }) => {
  return (
    <div className="mt-4 md:mt-9 ml-4 md:ml-6 space-x-8"> {/* Adicionamos space-x-4 para criar espaço horizontal entre os cards */}
      <div className="bg-custom-white p-4 md:p-6 space-y-2 md:w-72 lg:w-80 rounded-lg flex flex-col justify-center shadow-lg">
        <div className="flex justify-center">
          <h2 className="text-custom-gray4 text-sm md:text-base max-w-full">{subject}</h2>
        </div>
        <div className="flex justify-evenly mt-4 mb-4">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <button className="uppercase bg-custom-red text-white py-2 rounded text-xs md:text-sm mt-8">
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default CardSubject;



