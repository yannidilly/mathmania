import React from "react";

const CardSubject = ({ title, subject }) => {
  return (
    <main className="mt-9 ml-6 h-40">
      <h2 className="text-custom-gray4">{title}</h2>
      <span>
        <hr className="border-custom-gray3" />
      </span>
      <div className="flex gap-6">
      <div className="bg-custom-white p-4 space-y-2 w-40 rounded-lg mt-6 flex flex-col justify-center shadow-lg">
        <div className="flex justify-center">
          <h2 className="text-custom-gray4 text-sm">{subject}</h2>
        </div>
        <div className="flex justify-evenly">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <button className="uppercase bg-custom-red text-white py-2 px-4 rounded text-xs">
          Iniciar
        </button>
      </div>
      <div className="bg-custom-white p-4 space-y-2 w-40 rounded-lg mt-6 flex flex-col justify-center shadow-lg">
        <div className="flex justify-center">
          <h2 className="text-custom-gray4 text-sm">{subject}</h2>
        </div>
        <div className="flex justify-evenly">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <button className="uppercase bg-custom-red text-white py-2 px-4 rounded text-xs">
          Iniciar
        </button>
      </div>
      </div>
    </main>
  );
};

export default CardSubject;
