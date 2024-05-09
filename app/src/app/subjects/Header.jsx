import React from "react";
import LogoImage from '../../assets/logo-mathmania-white.png';
import Image from 'next/image';
import ProfileImage from '../../assets/profilePic.jpeg';
import Link from 'next/link';

const Header = () => {
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
      
      <Link href="/editInfo" className='flex items-center'>
          <div className="flex items-center">
            <Image
              className="p-6 w-20 rounded-full"
              src={ProfileImage}
              alt="Foto de perfil"        
            />
          </div>
      </Link>  
    </div>
  )
}

export default Header;