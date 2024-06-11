'use client'

import { useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import { verifyJWT } from "@/utils/verifyJWT"
import Alerta from "./Alerta"
import Link from "next/link"

const Register = () => {

    const [nombre, guardaNombre] = useState('')
    const [email, guardaEmail] = useState('')
    const [password, guardaPassword] = useState('')
    const [password2, guardaPassword2] = useState('')

    const [loading, setLoading] = useState(false)

    const { auth, setAuth } = useMyContext()

    const [alerta, setAlerta] = useState('')
    
    const handleChangeNombre = (e) => {
        guardaNombre(e.target.value)
    }

    const handleChangeEmail = (e) => {
        guardaEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        guardaPassword(e.target.value)
    }

    const handleChangePassword2 = (e) => {
        guardaPassword2(e.target.value)
    }

    const handleSubmit = async () => {

        setLoading(true)

        if(password !== password2) {
            setAlerta({msg: 'Los Passwords no coinciden'})
            setLoading(false)
            setTimeout(() => {
                setAlerta({})
            }, 2000);
            return
        }

        const info = {
            nombre,
            email,
            password
        }
        

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/register`, info)
            setLoading(false)
            setAlerta({msg: 'Usuario Creado. Confirme su cuenta en el correo registrado. Revise su bandeja de Spam o Correo No Deseado si no le llegó en la Bandeja de entrada. Si tiene problemas de confirmación realícelo desde una PC y no de su smartphone.', err:false})    
        } catch (error) {
            console.log(error)
        }
        
    }
    return (

        <>
            
            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-5 font-bold">Regístrese en la App</h1>
                {
                    alerta?.msg &&
                    <Alerta msg={alerta?.msg} err={alerta?.err} />
                }
            <form
                className="w-96 bg-amber-200 p-5 rounded-lg"
            >
                <div>


                    <div className="mb-4">
                    <label className="text-gray-800" htmlFor="nombre">
                            Nombre y Apellido:
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            className="mt-2 mb-2 text-gray-800 block w-full p-3 bg-gray-50"
                            placeholder="Coloque un nombre y un apellido"
                            name="nombre"
                            value={nombre}
                            onChange={handleChangeNombre}
                            maxLength={30}
                        />
                    
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
                            className="mt-2 block w-full p-3 bg-gray-500 text-white"
                            onClick={handleSubmit}
                        >{loading ? 'Registrando...' : 'Registrar'}</button>
                    </div>

                </div>
            </form>
        </div>
        
        <div className="flex justify-center items-center mt-4">
            <p>Tienes cuenta? <Link href="/login" className="text-blue-600 font-bold uppercase">Inicia Sesión</Link></p>

        </div>
        </>
    )
}

export default Register