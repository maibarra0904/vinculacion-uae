'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useMyContext } from "../context/myContext"
import { useEffect, useState } from "react"
import axios from "axios"
import Alerta from "./Alerta"
import Link from "next/link"
import { enterKey } from "@/utils/enterKey"

const Login = () => {
    const [email, guardaEmail] = useState('')
    const [password, guardaPassword] = useState('')
    const { auth, setAuth } = useMyContext()
    const [alerta, setAlerta] = useState('')
    const [loading, setLoading] = useState(false)
    const [puntos, setPuntos] = useState(0)
    const [googleWidth, setGoogleWidth] = useState('320')

    useEffect(() => {
        const updateWidth = () => {
            setGoogleWidth(window.innerWidth < 420 ? '250' : '320');
        };
        if (typeof window !== 'undefined') {
            updateWidth();
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPuntos((prev) => (prev + 1) % 4);
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (auth?.nombre) {
            window.history.back()
        }
    }, [auth]);

    const handleChangeEmail = (e) => guardaEmail(e.target.value.trim())
    const handleChangePassword = (e) => guardaPassword(e.target.value.trim())

    const handleGoogleSuccess = async (response) => {
        setLoading(true);
        try {
            const { credential } = response;
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/google`, { idToken: credential });

            if (data?.msg) {
                setAlerta(data);
                setTimeout(() => setAlerta({}), 2000);
                return;
            }

            if (data?.data) {
                localStorage.setItem('usuario', JSON.stringify(data.data));
                setAuth(data.data);
            } else {
                setAlerta({ msg: 'Hubo un error del servidor' });
            }
        } catch (error) {
            setAlerta({ msg: 'Error al conectar con el asistente de Google' });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        setLoading(true)
        const info = { email, password }

        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/login`, info)
            
            if (data?.msg) {
                setAlerta(data)
                setTimeout(() => setAlerta({}), 2000)
                setLoading(false)
                return
            }

            if (data?.data) {
                localStorage.setItem('usuario', JSON.stringify(data.data))
                setAuth(data.data)
            } else {
                setAlerta({ msg: 'Hubo un error del servidor' })
            }
        } catch (error) {
            setAlerta({ msg: 'Error al conectar con el servidor' })
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100">Bienvenido de nuevo</h1>
                    <p className="text-sm text-gray-400 mt-1">Ingresa tus credenciales para continuar</p>
                </div>

                {alerta?.msg && <Alerta msg={alerta?.msg} />}

                <form className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm"
                            placeholder="nombre@ejemplo.com"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail}
                            onKeyDown={(event) => enterKey(event, "loginButton")}
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
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                            maxLength={30}
                            onKeyDown={(event) => enterKey(event, "loginButton")}
                        />
                    </div>

                    <button
                        type="button"
                        id="loginButton"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 mt-2 text-sm disabled:opacity-70 disabled:pointer-events-none"
                        onClick={handleSubmit}
                    >
                        {loading ? `Validando${'.'.repeat(puntos)}` : 'Ingresar'}
                    </button>
                </form>

                <div className="flex items-center my-4 space-x-2">
                    <div className="flex-1 border-t border-gray-100 dark:border-gray-800"></div>
                    <span className="text-gray-400 text-[11px] uppercase tracking-wider">O inicia con</span>
                    <div className="flex-1 border-t border-gray-100 dark:border-gray-800"></div>
                </div>

                <div className="flex justify-center mb-4">
                    <GoogleLogin
                        type='standard'
                        theme='outline'
                        width={googleWidth}
                        shape='pill'
                        onSuccess={handleGoogleSuccess}
                        onError={() => {
                            setAlerta({ msg: 'Error de autenticación con Google' });
                        }}
                    />
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 my-6"></div>

                <div className="space-y-3 text-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                        ¿No tienes cuenta?{" "}
                        <Link href="/register" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                            Regístrate
                        </Link>
                    </p>
                    <p>
                        <Link href="/actualizar" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:underline text-xs">
                            ¿Olvidaste tu contraseña? Restáurala
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login