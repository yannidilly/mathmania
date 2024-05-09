"use client";
import React from "react";
import Header from "../header/page";
import Button from '../button/page';
import CardSubject from "./CardSubject";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleSubject from './titleSubject';
import { collection, addDoc } from "firebase/firestore";

const Topics = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <main className="bg-custom-gray1 w-full min-h-screen font-custom">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <TitleSubject title="Novas Matérias" />

        <Slider {...settings}>
          <CardSubject subject="Geometria" />
          <CardSubject subject="Trigonometria" />
          <CardSubject subject="Estatística" />
          <CardSubject subject="Probabilidade" />
        </Slider>
      </div>

      <div className="container mx-auto px-4 py-8">
        <TitleSubject title="Continuar Estudos" />

        <Slider {...settings}>
          <CardSubject subject="Raiz Quadrada" />
          <CardSubject subject="Conjuntos" />
          <CardSubject subject="Equações" />
          <CardSubject subject="Aritimética" />
        </Slider>
      </div>

      <div className="container mx-auto px-4 py-8">
        <TitleSubject title="Revisão" />

        <Slider {...settings}>
          <CardSubject subject="Análise Real" />
          <CardSubject subject="Álgebra Linear" />
          <CardSubject subject="Cálculo" />
          <CardSubject subject="Cálculo Integral" />
        </Slider>
      </div>
          <Button />  
    </main>
  );
};

export default Topics;
