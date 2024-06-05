"use client";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Button from '../button/page';
import { useSubjects } from "../context/Subject";
import Header from "../header/page";
import CardSubject from "./CardSubject";
import TitleSubject from './titleSubject';

const Subjects = () => {
  const [{ getSubjects }] = useSubjects();

  useEffect(() => {
    async () => console.log(getSubjects)();
  }, []);

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
          <Button title='FAZER TREINAMENTO'/>  
    </main>
  );
};

export default Subjects;
