'use client';
import { useAuth } from '@/app/context/Auth';
import ProfileHeader from '@/components/ProfileHeader';
import { useForm } from 'react-hook-form';

const EditAccount = () => {
  const [{ user }, { updateAccountInfo }] = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await updateAccountInfo(data);
    console.log(res);
    console.log(user);
  };

  return (
    <>
      <main className="bg-custom-gray1 font-custom h-screen">
        <ProfileHeader />
        <section>
          <form action="#" onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-4 md:px-8 lg:px-12 xl:px-16 pt-4 pb-8 sm:mt-8 lg:mt-24 space-y-20">
            <h1 className="text-custom-gray4 mt-14">EDITAR INFORMAÇÕES</h1>
            <div className="flex flex-col w-full md:w-96 lg:w-120 xl:w-144 py-2 space-y-16">
              <input defaultValue={null} {...register("displayName")} type="text" placeholder="Nome" className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm" />
              <input defaultValue={null} type="email" {...register("email")} placeholder="Email" className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm" />
              <input defaultValue={null} type="password" {...register("password")} placeholder="Senha" className="shadow-lg appearance-none border font-custom py-3 px-3 w-full rounded text-custom-gray2 leading-tight focus:outline-none focus:shadow-outline text-sm" />
              <button type="submit" className="shadow-lg bg-custom-red hover:bg-custom-hoverBtn text-white py-3 px-2 w-full md:w-96 lg:w-96 xl:w-120 focus:outline-none mb-4 rounded-md text-sm">SALVAR</button>
            </div>
            <a
              href="/login"
              className="text-custom-gray3 py-2 px-2 mb-4 mt-4 text-xs">
              SAIR
            </a>
          </form>
        </section>
      </main>
    </>
  )
}

export default EditAccount;
