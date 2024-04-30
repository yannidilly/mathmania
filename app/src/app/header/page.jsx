'use client';
import React from "react";
import LogoImage from '../../assets/logomarca.png';
import ProfileImage from '../../assets/adicionar-usuario.png';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../context/Auth';

const Header = () => {
  const [{ user }] = useAuth();

  return (
    <div className="bg-custom-red h-20 flex justify-between">
      <Link href="/login" className='flex items-center'>
        <div>
          <Image
            className="p-6 w-40"
            src={LogoImage}
            alt="logo MathMania"
          />
        </div>
      </Link>
      
      {user && (
        <Link href="/editInfo" className='flex items-center'>
          <div className="flex items-center">
            
            <Image
              className="p-6 w-20 rounded-full"
              src={user.avatar || ProfileImage}
              alt="Foto de perfil"
              width={50}
              height={50}
            />
          </div>
        </Link>
      )}
    </div>
  )
}

export default Header;
