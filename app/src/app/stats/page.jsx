'use client'; // This is a client component

import Header from '../header/page';
import Link from 'next/link';
import { ChevronLeft, Share2, Trophy } from 'lucide-react';

const Stats = () => {
  return (
    <div>
      <Header />
      <main className="px-8">
        <div className="flex items-center justify-start py-1 mb-[76px] mt-[25px]">
          <Link href="/">
            <ChevronLeft
              strokeWidth={2}
              className="text-custom-gray4"
              size={30}
            />
          </Link>
        </div>
        <section className="font-custom">
          <ul className="flex flex-col gap-8 mb-[60px]">
            <li className="flex items-center gap-5">
              <div className="rounded-full bg-custom-red h-11 w-11 flex justify-center items-center text-white text-xs ">
                357
              </div>
              <p className="text-base text-custom-gray4 ">Questões feitas</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="rounded-full bg-custom-red h-11 w-11 flex justify-center items-center text-white text-xs ">
                357
              </div>
              <p className="text-base text-custom-gray4 ">Questões feitas</p>
            </li>
            <li className="flex items-center gap-5">
              <div className="rounded-full bg-custom-red h-11 w-11 flex justify-center items-center text-white text-xs ">
                357
              </div>
              <p className="text-base text-custom-gray4 ">Questões feitas</p>
            </li>
          </ul>
          <div>
            <h2 className="text-custom-gray4 text-center text-xl mb-5">
              Conquistas
            </h2>
            <ul className="flex flex-col items-center justify-center gap-5">
              <li className="flex items-center justify-start w-full gap-[17px]">
                <Trophy strokeWidth={1} className="text-custom-red" size={28} />
                <p className="text-sm text-custom-gray4">
                  5 revisões realizadas
                </p>
                <Share2
                  strokeWidth={1}
                  className="text-custom-red ml-auto"
                  size={28}
                />
              </li>
              <li className="flex items-center justify-start w-full gap-[17px]">
                <Trophy strokeWidth={1} className="text-custom-red" size={28} />
                <p className="text-sm text-custom-gray4">resposta rápida</p>
                <Share2
                  strokeWidth={1}
                  className="text-custom-red ml-auto"
                  size={28}
                />
              </li>{' '}
              <li className="flex items-center justify-start w-full gap-[17px]">
                <Trophy strokeWidth={1} className="text-custom-red" size={28} />
                <p className="text-sm text-custom-gray4">memoria de elefante</p>
                <Share2
                  strokeWidth={1}
                  className="text-custom-red ml-auto"
                  size={28}
                />
              </li>{' '}
              <li className="flex items-center justify-start w-full gap-[17px]">
                <Trophy strokeWidth={1} className="text-custom-red" size={28} />
                <p className="text-sm text-custom-gray4">rei da estatística</p>
                <Share2
                  strokeWidth={1}
                  className="text-custom-red ml-auto"
                  size={28}
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Stats;
