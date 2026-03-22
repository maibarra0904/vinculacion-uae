'use client'

import React, { useEffect, useState } from 'react'
import Alerta from '../ui/Alerta'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import { redirectToUrl } from '@/utils/redirectToUrl'
import { useMyContext } from '../context/myContext'

const UpdatePassword = () => {

    const [loading, setLoading] = useState(false)

    const [updated, setUpdated] = useState(false)

    const [userToUpdate, setUserToUpdate] = useState(null)

    const [alerta, setAlerta] = useState({})

    const [password, setPassword] = useState('')

    const [password2, setPassword2] = useState('')

    const params = useParams()

    const token = params.token

    const { setAuth } = useMyContext()

    useEffect(() => {

        setAuth('')
        localStorage?.removeItem('usuario')

        const getUser = async() => {
            try {
                const data = await axios.get(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/actualiza-password/${token}`)
                console.log(data.data.state)
                if(data.data?.state) {

                    setUserToUpdate(true)
                } else {
                    
                    redirectToUrl('/')
                }
                
            } catch (error) {
                console.log(error)
        
            }
            
        }

        getUser()

    
        
    },[])

    const handleChangePassword = (e) => {
        setPassword(e.target.value.trim())
    }

    const handleChangePassword2 = (e) => {
        setPassword2(e.target.value.trim())
    }

    const handleSubmit = async() => {
        setLoading(true)

        
    

        if(password?.length<6) {
            setAlerta({msg: 'El password debe tener al menos 6 caracteres'})
            setLoading(false)
            setTimeout(() => {
                setAlerta({})
            }, 2000);
            return
        }

        if(password !== password2) {
            setAlerta({msg: 'Los Passwords no coinciden'})
            setLoading(false)
            setTimeout(() => {
                setAlerta({})
            }, 2000);
            return
        }

        const info = {password}
        
        
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/actualiza-password/${token}`, info)
            setLoading(false)
            setUpdated(true)
            setAlerta({msg: 'Su password ha sido actualizado.', err:false})    
        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none">
        
        {userToUpdate && (
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100">Crea tu nueva Contraseña</h1>
            <p className="text-sm text-gray-400 mt-1 text-center">Escribe y confirma tu nuevo password de acceso</p>
          </div>
        )}

        {alerta?.msg && <Alerta msg={alerta?.msg} err={alerta?.err} />}

        {!updated && userToUpdate && (
          <form className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="password">
                Nueva Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                placeholder="••••••••"
                name="password"
                value={password}
                onChange={handleChangePassword}
                maxLength={30}
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="password2">
                Confirma la Contraseña
              </label>
              <input
                id="password2"
                type="password"
                className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                placeholder="••••••••"
                name="password2"
                value={password2}
                onChange={handleChangePassword2}
                maxLength={30}
              />
            </div>

            <button
              type="button"
              disabled={loading}
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 mt-2 text-sm disabled:opacity-70 disabled:pointer-events-none"
              onClick={handleSubmit}
            >
              {loading ? 'Validando...' : 'Actualizar Contraseña'}
            </button>
          </form>
        )}

        {updated && (
          <div className="text-center mt-4">
            <Link 
              href="/login" 
              className="inline-block w-full text-center py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/10 active:scale-[0.98] transition-all text-sm"
            >
              Iniciar Sesión
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default UpdatePassword