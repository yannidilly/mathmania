"use client";
import React from "react";
import LogoImage from '../../assets/logo-mathmania-white.png';
import Image from 'next/image';
import ProfileImage from '../../assets/profilePic.jpeg';

const Header = () => {
  return (
    <div className="bg-custom-red h-20 flex justify-between">
      <div className="flex items-center">
        <Image
          className="p-6 w-40"
          src={LogoImage}
          alt="logo MathMania"
        />
      </div>
      <div className="flex items-center">
        <Image
          className="p-6 w-20 rounded-full"
          src={ProfileImage}
          alt="Foto de perfil"        
        />
      </div>
    </div>
  )
}

export default Header;