"use client"; // This is a client component
import React, { useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/Auth';
import Image from 'next/image';
import LogoImage from '../../assets/logo-mathmania.png';
import LogoGoogle from '../../assets/google.png';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ user }, { signInWithEmail, signInWithGoogle }] = useAuth();
  const router = useRouter();

  // quando usuário está logado (localStorage) já envia direto para a outra página '/'
  // precisamos de criar uma função para validar o token antes de reencaminhar o usuário

  const signInAccountWithEmail = async (e) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  return (
    <main className="bg-custom-gray1 font-custom w-full h-screen">
      <section className="">
        <div className="flex flex-col h-screen justify-around">
          <form className="rounded flex flex-col items-center px-4 md:px-8 lg:px-12 xl:px-16 pt-4 pb-8 sm:mt-8 lg:mt-24">
            <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
              <div className="flex justify-center items-center h-32 mt-8 sm:mt-0 sm:mb-0 md:mt-16 lg:mt-8 mb-8">
                <Image
                  className="flex items-center w-48 sm:w-60 md:w-64 lg:w-64 xl:w-64 mt-12"
                  src={LogoImage}
                  alt="logo MathMania"
                  height={25}
                />
              </div>
              <h1 className="uppercase text-center text-1xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-custom-gray4 mb-8">
                Entrar
              </h1>
              <label htmlFor="email" className="block text-custom-gray4 text-xs mb-1">
                Email
              </label>
              <input
                className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-8 w-full md:w-96 lg:w-120 xl:w-144">
              <label htmlFor="password" className="block text-custom-gray4 text-xs mb-1">
                Senha
              </label>
              <input
                className="shadow-lg appearance-none border rounded py-3 px-3 w-full text-custom-red leading-tight focus:outline-none focus:shadow-outline text-sm mb-4"
                type="password"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>
            <button
              className="shadow-lg bg-custom-red hover:bg-custom-hoverBtn text-white py-3 px-2 w-full md:w-96 lg:w-96 xl:w-120 focus:outline-none mb-4 rounded-md text-sm"
              type="submit"
              disabled={!password || !email}
              onClick={signInAccountWithEmail}
            >
              ENTRAR
            </button>
            <span className="text-custom-gray4 text-xs mb-4">ou</span>
            <button
              className="shadow-lg bg-white text-custom-gray4 py-3 px-5 w-full md:w-96 lg:w-96 xl:w-120 focus:outline-none flex items-center justify-center rounded-md text-sm"
              type="submit"
              onClick={signInWithGoogle}
            >
              <Image
                className="w-8 h-8 mr-2"
                src={LogoGoogle}
                alt="logo Google"
              />
              <span>Entrar com o Google</span>
            </button>
            <div className="text-center text-custom-gray4 mt-4">
              <div className="text-xs mt-0 mb-4">
                Ainda Não Estuda Com a Gente?
                <div>
                  <button
                    onClick={() => router.push('/signup')}
                    className="text-custom-red py-2 px-2 mb-4 mt-4 text-xs"
                  >
                    <Link href="/signup">Criar Conta</Link>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
