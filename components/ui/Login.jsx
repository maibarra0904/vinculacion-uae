'use client'

import { useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import { verifyJWT } from "@/utils/verifyJWT"
import Alerta from "./Alerta"
import Image from "next/image"
import Link from "next/link"

const Login = () => {

    const [email, guardaEmail] = useState('')
    const [password, guardaPassword] = useState('')

    const { auth, setAuth } = useMyContext()

    const [alerta, setAlerta] = useState('')

    const [loading, setLoading] = useState('')

        
    

    

    const handleChangeEmail = (e) => {
        guardaEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        guardaPassword(e.target.value)
    }

    const handleSubmit = async () => {
        setLoading(true)
        const info = {
            email,
            password
        }
        

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/login`, info)
        
        if(data?.msg) {
            setAlerta(data)
            setTimeout(() => {
                setAlerta({})
            }, 2000);
            setLoading(false)
            return
        }

        try {
            if(data?.data) {
                //const token = data?.token;
                //const user = verifyJWT(token)
                localStorage.setItem('usuario', JSON.stringify(data.data))
                setAuth(data.data)
                setLoading(false)
                
                window.history.back()
            } else {
                setLoading(false)
                setAlerta({msg: 'Hubo un error'})
            }
            
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }
    return (

            <>
            
            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-5 font-bold">Ingrese a su cuenta</h1>
                {
                    alerta?.msg &&
                    <Alerta msg={alerta?.msg} />
                }
            <form
                className="min-w-70 bg-amber-200 p-5 rounded-lg m-2 md:w-96"
            >
                <div>


                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="email">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="text"
                            className="mt-2 text-gray-800 block w-full p-3 bg-gray-50"
                            placeholder="Coloque su email"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail}
                            maxLength={30}
                        />
                    </div>

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

                    <div>
                        <button
                            type="button"
                            className="flex justify-center items-center mt-2 w-full p-3 bg-gray-500 text-white"
                            onClick={handleSubmit}
                        >{loading ? 'Validando...' :'Ingresar'}</button>
                    </div>

                </div>
            </form>
        </div>
        
        <div className="flex justify-center items-center mt-4">
            <p>No tienes cuenta? <Link href="/register" className="text-blue-600 font-bold uppercase">Regístrate</Link></p>
            
        </div>
        <div className="flex justify-center items-center mt-4">
            
            <p>Si olvidaste tu password, comunícate con el administrador del sitio</p>
        </div>

        </>
    )
}

export default Login