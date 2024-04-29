import Image from "next/image";
import LogoImage from '../assets/logo-mathmania.png';

export default function Header() {
  return (
    <div className="flex justify-between pb-6">
      <Image
        className=""
        src={ LogoImage }
        alt="logo MathMania"
        height={ 25 }
      />
      <p>FOTO DO USUÁRIO</p>
    </div>
  );
};
