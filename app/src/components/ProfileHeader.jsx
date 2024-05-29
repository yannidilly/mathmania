import Image from "next/image";
import UserIcon from "../assets/user-icon.png";

export const ProfileHeader = () => {
    return (
        <header className="bg-custom-red h-36 w-full flex flex-col items-center relative">
            <div className="absolute left-4 top-4">
                {/* <Image src={BackIcon} alt="Voltar" width={24} height={24} /> */}
            </div>
            <div className="flex flex-col items-center">
                <p className="text-white text-lg mt-4">Olá, Léo Barbosa!</p>
                <div className="relative mt-4">
                    <Image src={UserIcon} alt="Foto do Perfil" className="rounded-full" width={75} height={75} />
                    <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-custom-red">
                        {/* <Image src="/camera-icon.png" alt="Editar Foto" width={20} height={20} /> */}
                    </div>
                </div>
            </div>
        </header>
    )
}