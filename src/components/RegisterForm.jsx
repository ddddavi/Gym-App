import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

const RegisterForm = () => {

    const { register, 
            formState: {errors},
            handleSubmit 
        } = useForm();  

  return (
    <>
        <div className='absolute left-1/2 top-1/2 transform 
        -translate-x-1/2 -translate-y-1/2 z-20 md:w-1/2 w-4/5
        h-2/3 rounded-sm'>

        <form onSubmit={handleSubmit((data) => {
            toast.success('Registrazione avvenuta con successo')
        })}>
        
        <div className='z-40 flex flex-col items-start 
        gap-3 p-6 m-4 text-xl'>
            <input 
            {...register("nome",{required: "Campo obbligatorio *"})}
            className='p-3 w-full' 
            autoComplete='off'
            autoCapitalize='on'
            type="text"
            placeholder='Nome'></input>

            <p 
            className='text-red-600'>
                <ErrorMessage errors={errors} name="nome"/>
            </p>

        <input 
            {...register("cognome", {required: "Campo obbligatorio *"})}
            className='p-3 w-full' 
            autoComplete='off'
            type="text" 
            placeholder='Cognome'></input>

            <p
                className='text-red-600'>
                <ErrorMessage errors={errors} name="cognome"/>
            </p>
        
        <input 
            {...register("email", {required: "Campo obbligatorio *"})}
            className='p-3 w-full' 
            autoComplete='off'
            type="email" 
            placeholder='E-mail'></input>

            <p className='text-red-600'>
                <ErrorMessage errors={errors} name="email"/>
            </p>

        <input 
            {...register("dataNascita", {required: "Campo obbligatorio *"})}
            className='p-3 w-full'
            autoComplete='off'
            type="date" 
            placeholder='Data di nascita'></input>
        
            <p 
                className='text-red-600'>
                <ErrorMessage errors={errors} name="dataNascita"/>
            </p>
        
        <input className="px-5 py-3 cursor-pointer bg-orange 
        border-none rounded-[4px] text-black shadow-sm shadow-orange
        hover:bg-darkGray hover:text-white 
        transition-all duration-200 hover:shadow-none"
        type='submit'></input>

        </div>
        </form>

    </div>
    
    <ToastContainer
    position='top-center'
    autoClose={2000}
    closeOnClick={true}
    theme='dark'
    />
    </>
    
  )
}

export default RegisterForm
