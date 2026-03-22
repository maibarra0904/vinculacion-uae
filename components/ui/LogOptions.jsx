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
        localStorage.removeItem('fecha')
    }

    return (
        !loadPage && (
            auth?.nombre ?
                <div className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-xl transition-all mx-2 group'>
                    <div className="w-9 h-9 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-sm border border-indigo-100/80 dark:border-indigo-900/40 list-none">
                        {auth?.nombre?.charAt(0).toUpperCase()}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <h4 className='text-gray-800 dark:text-gray-200 font-semibold text-sm truncate'>
                            {auth?.nombre?.toUpperCase()}
                        </h4>
                        <p className='text-gray-400 dark:text-gray-500 text-xs'>Estudiante</p>
                    </div>

                    <button 
                        onClick={handleCerrarSesion} 
                        title='Cerrar Sesión' 
                        className='p-1.5 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
                        </svg>
                    </button>
                </div>
                :
                <div className='flex gap-2 px-4 py-2 mt-3'>
                    <Link href='/login' className='flex-1 text-center py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors'>
                        Login
                    </Link>
                    <Link href='/register' className='flex-1 text-center py-1.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-semibold transition-colors border border-gray-100 dark:border-gray-700'>
                        Registro
                    </Link>
                </div>
        )
    )
}

export default LogOptions