"use client"; // This is a client component
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LogoImage from '../../assets/logo-mathmania.png';


const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [ ]);

  return (
    <main className='flex items-center justify-center h-screen'>        
        <section>
          <Image
              className="w-60 sm:w-72 md:w-72 lg:w-72 xl:w-72 animate-pulse"
              src={LogoImage}
              lt="logo MathMania"
              height={25}
          />
        </section>
    </main>
  )
};
export default Loading;
