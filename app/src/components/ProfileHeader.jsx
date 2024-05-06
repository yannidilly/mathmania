import Image from "next/image";
import UserIcon from "../assets/user-icon.png";

export const ProfileHeader = () => {
    return (
        <header className="bg-custom-hoverBtn h-15 w-full flex justify-center">
            <div className="h-full">
                <div className="py-2">
                    <p className="text-custom text-custom-white">Olá, Usuário!</p>
                    <Image src={UserIcon} alt="user image" width={75} height={75} />
                </div>
            </div>
        </header>
    )
}