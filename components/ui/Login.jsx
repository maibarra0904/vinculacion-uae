'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useMyContext } from "../context/myContext"
import { useEffect, useState } from "react"
import axios from "axios"
import Alerta from "./Alerta"

const Login = () => {
    const { auth, setAuth } = useMyContext()
    const [alerta, setAlerta] = useState('')
    const [loading, setLoading] = useState(false)
    const [statusText, setStatusText] = useState('Verificando cuenta con Google')
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
            if (typeof window !== 'undefined' && window.history.length > 2 && document.referrer && document.referrer.includes(window.location.host)) {
                window.history.back();
            } else {
                window.location.href = '/general';
            }
        }
    }, [auth]);

    const handleGoogleSuccess = async (response) => {
        setLoading(true);
        setAlerta({});
        setStatusText('Verificando cuenta con Google');
        try {
            const { credential } = response;
            const backendUrl = process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND || '/api/applications';
            const { data } = await axios.post(`${backendUrl}/auth/google`, { idToken: credential });

            if (data?.msg) {
                setAlerta({ msg: data.msg, err: true });
                setTimeout(() => setAlerta({}), 3000);
                setLoading(false);
                return;
            }

            if (data?.data) {
                if (data.isNewUser) {
                    setStatusText('Registrando usuario nuevo e iniciando sesión');
                    setAlerta({ msg: '¡Cuenta registrada exitosamente! Iniciando sesión...', err: false });
                    setTimeout(() => {
                        localStorage.setItem('usuario', JSON.stringify(data.data));
                        setAuth(data.data);
                    }, 900);
                } else {
                    setStatusText('Iniciando sesión');
                    localStorage.setItem('usuario', JSON.stringify(data.data));
                    setAuth(data.data);
                }
            } else {
                setAlerta({ msg: 'Hubo un error del servidor', err: true });
                setLoading(false);
            }
        } catch (error) {
            const errorMsg = error.response?.data?.msg || error.response?.data?.error || error.message || 'Error al conectar con el asistente de Google';
            setAlerta({ msg: errorMsg, err: true });
            console.error("LOGIN_ERROR:", error);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none">
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100">Bienvenido</h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Continúa con tu cuenta de Google para acceder a la plataforma
                    </p>
                </div>

                {alerta?.msg && <Alerta msg={alerta?.msg} err={alerta?.err} />}

                <div className="flex flex-col items-center justify-center my-6 min-h-[56px]">
                    {loading ? (
                        <div className="flex items-center gap-3 py-3 px-5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-semibold">
                            <svg className="animate-spin h-4 w-4 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <span>{`${statusText}${'.'.repeat(puntos)}`}</span>
                        </div>
                    ) : (
                        <GoogleLogin
                            type='standard'
                            theme='outline'
                            width={googleWidth}
                            shape='pill'
                            onSuccess={handleGoogleSuccess}
                            onError={() => {
                                setAlerta({ msg: 'Error de autenticación con Google', err: true });
                            }}
                        />
                    )}
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-5 mt-2">
                    <p className="text-xs text-center text-gray-400 dark:text-gray-500 leading-relaxed">
                        Si es tu primera vez ingresando, tu cuenta será registrada automáticamente con tus datos de Google antes de iniciar sesión.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login