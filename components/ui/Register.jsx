'use client'

import { useEffect, useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import Alerta from "./Alerta"
import Link from "next/link"
import { redirectToUrl } from "@/utils/redirectToUrl"
import { enterKey } from "@/utils/enterKey"
import emailService from "../../services/emailService"

const Register = () => {
    const [nombre, guardaNombre] = useState('')
    const [email, guardaEmail] = useState('')
    const [password, guardaPassword] = useState('')
    const [password2, guardaPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const { auth } = useMyContext()
    const [alerta, setAlerta] = useState('')
    const [puntos, setPuntos] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPuntos((prev) => (prev + 1) % 4);
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (auth?.nombre) {
            redirectToUrl('/')
        }
    }, [auth]);

    const handleChangeNombre = (e) => guardaNombre(e.target.value)
    const handleChangeEmail = (e) => guardaEmail(e.target.value.trim())
    const handleChangePassword = (e) => guardaPassword(e.target.value.trim())
    const handleChangePassword2 = (e) => guardaPassword2(e.target.value.trim())

    const handleSubmit = async () => {
        setLoading(true)

        if (password?.length < 6) {
            setAlerta({ msg: 'El password debe tener al menos 6 caracteres' })
            setLoading(false)
            setTimeout(() => setAlerta({}), 2000)
            return
        }

        if (password !== password2) {
            setAlerta({ msg: 'Los Passwords no coinciden' })
            setLoading(false)
            setTimeout(() => setAlerta({}), 2000)
            return
        }

        const info = { nombre, email, password }

        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/register`, info)

            if (data?.msg && data?.token) {
                try {
                    await emailService.sendConfirmationEmail({ toEmail: email, toName: nombre, token: data.token })
                    setAlerta({ msg: 'Usuario Creado. Confirme su cuenta en el correo registrado. Revise Spam.', err: false })
                } catch (mailErr) {
                    setAlerta({ msg: `Usuario creado. Error al enviar email.`, err: true })
                }
                guardaEmail('')
                setLoading(false)
                return
            }

            if (data?.msg && !data?.token) {
                setAlerta({ msg: 'Usuario Creado. Confirme su cuenta en el correo registrado.', err: false })
                guardaEmail('')
                setLoading(false)
                return
            }

            if (data?.err) {
                setAlerta({ msg: 'Ya existe un usuario con ese email.' })
                setLoading(false)
                return
            }
        } catch (error) {
            setAlerta({ msg: 'Error de conexión con el servidor.' })
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100">Crea tu cuenta</h1>
                    <p className="text-sm text-gray-400 mt-1">Regístrate para gestionar tus vinculaciones</p>
                </div>

                {alerta?.msg && <Alerta msg={alerta?.msg} err={alerta?.err} />}

                <form className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="nombre">
                            Nombre y Apellido
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={handleChangeNombre}
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                            placeholder="nombre@ejemplo.com"
                            value={email}
                            onChange={handleChangeEmail}
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                            placeholder="••••••••"
                            value={password}
                            onChange={handleChangePassword}
                            maxLength={30}
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="password2">
                            Confirmar Contraseña
                        </label>
                        <input
                            id="password2"
                            type="password"
                            className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                            placeholder="••••••••"
                            value={password2}
                            onChange={handleChangePassword2}
                            maxLength={30}
                            onKeyDown={(event) => enterKey(event, "registerButton")}
                        />
                    </div>

                    <button
                        type="button"
                        id="registerButton"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 mt-2 text-sm disabled:opacity-70 disabled:pointer-events-none"
                        onClick={handleSubmit}
                    >
                        {loading ? `Registrando${'.'.repeat(puntos)}` : 'Registrar'}
                    </button>
                </form>

                <div className="border-t border-gray-100 dark:border-gray-800 my-6"></div>

                <div className="text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        ¿Ya tienes cuenta?{" "}
                        <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                            Inicia Sesión
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;