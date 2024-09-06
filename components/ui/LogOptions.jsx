'use client'
import React from 'react'
import { useMyContext } from '../context/myContext'
import Link from 'next/link'

const LogOptions = () => {

    const { auth, setAuth, loadPage } = useMyContext()

    const handleCerrarSesion = () => {
        setAuth('')
        localStorage.removeItem('usuario')
        localStorage.removeItem('view')
    }
    return (
        !loadPage &&
        (
            auth?.nombre ?
                <>
                    <div className='flex gap-4 justify-center items-center'>
                        <p className='text-gray-800'>Hola: {auth?.nombre?.toUpperCase()}</p>
                        <button onClick={handleCerrarSesion} title='Cerrar Sesión' className='flex justify-center items-center p-1 m-2 w-10 bg-red-500 text-white rounded-md hover:cursor-pointer'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-logout"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M9 12h12l-3 -3" />
                                <path d="M18 15l3 -3" />
                            </svg>
                        </button>
                    </div>
                </>
                :
                <div className='flex gap-4 justify-center items-center mt-3'>
                    <Link href='/login' className='p-2 bg-indigo-500 hover:cursor-pointer text-white rounded-md'>Login</Link>
                    <Link href='/register' className='p-2 bg-gray-500 hover:cursor-pointer text-white rounded-md'>Register</Link>
                </div>
        )






    )
}

export default LogOptions