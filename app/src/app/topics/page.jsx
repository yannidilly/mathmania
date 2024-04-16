"use client";
import React from "react";
import Header from "./Header";
import CardSubject from "./CardSubject";
import Button from "./Button";

const Topics = () => {
  return (
    <main className="bg-custom-gray1 w-full h-screen font-custom">
      <div>
        <Header />
        <CardSubject title="Novas Matérias" subject="Geometria" />
        <CardSubject title="Continuar Estudos" subject="Equações" />
        <CardSubject title="Revisão" subject="Trigonometria" />
        <Button />
      </div>
    </main>
  );
};

export default Topics;
