'use client'

import { useEffect, useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import Alerta from "./Alerta"
import Link from "next/link"
import { redirectToUrl } from "@/utils/redirectToUrl"
import { enterKey } from "@/utils/enterKey"

const Register = () => {

    const [nombre, guardaNombre] = useState('')
    const [email, guardaEmail] = useState('')
    const [password, guardaPassword] = useState('')
    const [password2, guardaPassword2] = useState('')

    const [loading, setLoading] = useState(false)

    const { auth } = useMyContext()

    const [alerta, setAlerta] = useState('')

    useEffect(() => {
        console.log(auth)
        if(auth?.nombre) {
            redirectToUrl('/')
        }
    },[auth])
    
    const handleChangeNombre = (e) => {
        guardaNombre(e.target.value)
    }

    const handleChangeEmail = (e) => {
        guardaEmail(e.target.value.trim())
    }
    const handleChangePassword = (e) => {
        guardaPassword(e.target.value.trim())
    }

    const handleChangePassword2 = (e) => {
        guardaPassword2(e.target.value.trim())
    }

    const handleSubmit = async () => {

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

        const info = {
            nombre,
            email,
            password
        }
        

        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/register`, info)
            
            if (data?.msg) {
                setAlerta({msg: 'Usuario Creado. Confirme su cuenta en el correo registrado. Revise su bandeja de Spam o Correo No Deseado si no le llegó en la Bandeja de entrada. Si tiene problemas de confirmación realícelo desde una PC y no de su smartphone.', err:false})
                setLoading(false)
                guardaEmail('')
                return
              }
          
              if (data?.err) {
                setAlerta({ msg: 'Ya existe un usuario con ese email. Inicie sesión o restaure su contraseña.' })
                setLoading(false)
                return
          
              }
 
        } catch (error) {
            console.log(error)
        }
        
    }
    return (

        <>
            
            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-5 font-bold">Regístrate en la App</h1>
                {
                    alerta?.msg &&
                    <Alerta msg={alerta?.msg} err={alerta?.err} />
                }
            <form
                className="min-w-70 bg-amber-200 p-5 rounded-lg m-2 md:w-96"
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
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                            //maxLength={30}
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
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                            //maxLength={30}
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
                            onKeyDown={(event) => enterKey(event, "registerButton")}
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
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                        />
                    </div>

                    <div>
                        <button
                            id="registerButton"
                            type="button"
                            className="mt-2 block w-full p-3 bg-gray-500 text-white"
                            onClick={handleSubmit}
                        >{loading ? 'Registrando...' : 'Registrar'}</button>
                    </div>

                </div>
            </form>
        </div>
        
        <div className="flex justify-center items-center mt-4">
            <p>Ya tienes cuenta? <Link href="/login" className="text-blue-600 font-bold uppercase">Inicia Sesión</Link></p>

        </div>
        </>
    )
}

export default Register