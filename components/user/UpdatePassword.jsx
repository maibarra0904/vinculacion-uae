'use client'

import React, { useEffect, useState } from 'react'
import Alerta from '../ui/Alerta'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { redirectToUrl } from '@/utils/redirectToUrl'

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
    <>
            
            <div className="flex flex-col justify-center items-center">
                {
                    userToUpdate && <h1 className="mb-5 font-bold">Cambiar el password</h1>
                }
                
            
                {
                    alerta?.msg &&
                    <Alerta msg={alerta?.msg} err={alerta?.err} />
                }

                {
                    !updated && userToUpdate &&

                    <form
                className="min-w-70 bg-amber-200 p-5 rounded-lg m-2 md:w-96"
            >
                <div>


                <div className="mb-4">
                        <label className="text-gray-800" htmlFor="password">
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                            placeholder="Coloque su password"
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                            maxLength={30}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="password2">
                            Repite Password:
                        </label>
                        <input
                            id="password2"
                            type="password"
                            className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                            placeholder="Confirme su password"
                            name="password2"
                            value={password2}
                            onChange={handleChangePassword2}
                            maxLength={30}
                        />
                    </div>

                    <div>
                        <button
                            type="button"
                            className="flex justify-center items-center mt-2 w-full p-3 bg-gray-500 text-white"
                            onClick={handleSubmit}
                        >{loading ? 'Validando...' :'Actualizar'}</button>
                    </div>

                </div>
            </form>
                }
            
        </div>
        

        </>
  )
}

export default UpdatePassword