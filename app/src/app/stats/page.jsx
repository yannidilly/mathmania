'use client';
import React from 'react';
import Header from '../header/page';
import Image from 'next/image';
import Trophy from '../../assets/trofeu.png';
import Share from '../../assets/compartilhar.png';
import ArrowLeft from '../../assets/seta-esquerda.png';
import Link from 'next/link';

  const Stats = () => {
    const achievements = [
      { count: 5, description: "revisões realizadas" },
      { count: 10, description: "resposta rápida" },
      { count: 55, description: "memória de elefante" },
      { count: 80, description: "rei da estatística" }
  ];

    return (
        <>
            <Header />
            <main className='flex flex-col justify-center items-center bg-custom-white h-screen'>
              <section className='font-custom mt-4'>
                <div className='flex flex-col'>
                  <p className='flex items-center text-custom-gray4 mb-8 mt-8'>
                      <span className='bg-custom-red h-16 w-16 flex items-center justify-center rounded-full text-custom-white mr-2'>357</span> Questões feitas
                  </p>
                  <p className='flex items-center text-custom-gray4 mb-8'>
                      <span className='bg-custom-red h-16 w-16 flex items-center justify-center rounded-full text-custom-white mr-2'>350</span> Questões respondidas
                  </p>
                  <p className='flex items-center text-custom-gray4 mb-8'>
                      <span className='bg-custom-red h-16 w-16 flex items-center justify-center rounded-full text-custom-white mr-2'>32</span> Questões corretas
                  </p>
                </div>

                  
                  <div className=" text-custom-gray4">
                  <h1 className="text-2xl text-custom-gray4 text-center mb-8 mt-8">Conquistas</h1>
                  {/* Conquistas renderizadas dinamicamente */}
                  {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <Image src={Trophy} alt="Trophy icon" width={24} height={24} className="mr-2 mb-4" />
                    <span className="mr-2 mb-4">{achievement.count}</span>
                    <p className="mr-2 mb-4">{achievement.description}</p>
                    <Image src={Share} alt="Share icon" width={24} height={24} className="ml-auto mb-4" />
                  </div>                  
                  ))}
                  </div>                    
                  <div className="flex items-center">
                      <Link href="/account">
                        <Image
                          src={ArrowLeft} alt="Edit icon" width={20} height={20}
                          className='mb-8 mt-8 cursor-pointer'
                        />
                      </Link>
                  </div>
                  
              </section>
            </main>
        </>
    )
};

export default Stats;
