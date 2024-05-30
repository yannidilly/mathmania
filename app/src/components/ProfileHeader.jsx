'use client';
import Image from "next/image";
import UserIcon from "../assets/do-utilizador.png";
import { useAuth } from "../app/context/Auth";
import { useRef } from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import Camera from '../assets/camera.png';
import firebase from 'firebase/app';
import 'firebase/storage';

export const ProfileHeader = () => {
    const [{ user, updateAccountInfo }] = useAuth();
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(`avatars/${user.id}`);
            await fileRef.put(file);
            const photoURL = await fileRef.getDownloadURL();

            await updateAccountInfo(user.name, photoURL);
        }
    };

    const handleEditClick = () => {
        fileInputRef.current.click();
    };

    return (
        <header className="bg-custom-red h-36 w-full flex flex-col items-center relative">
            <div className="absolute left-2 top-4">
                <a href="/account">
                <FaRegArrowAltCircleLeft className="text-white cursor-pointer mt-12 ml-6 sm:ml-8 sm:mt-12 md:ml-6 md:mt-12 lg:ml-8 lg:mt-12 xl:ml-8 xl:mt-12" size={22} />
                </a>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-white text-xs mt-12 sm:text-sm sm:mt-16 md:text-base md:mt-14 lg:text-lg lg:mt-12 xl:text-xl xl:mt-12">Olá, {user ? user.name : 'Usuário'}!</p>
                <div className="relative mt-8 sm:mt-8 md:mt-4 lg:mt-4 xl:mt-6">
                    <Image 
                        src={user?.avatar || UserIcon} 
                        alt="Foto do Perfil" 
                        className="rounded-full shadow-xl"    
                        width={100} 
                        height={100} 
                        priority 
                    />
                    <div 
                        className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-custom-red cursor-pointer" 
                        onClick={handleEditClick}
                    >
                        <Image src={Camera} alt="Ícone de Câmera" width={20} height={20} />
                        <input 
                            type="file" 
                            accept="image/*" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ProfileHeader;
