"use client"
import { useEffect, useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import Alerta from "../ui/Alerta"
import Link from "next/link"
import { redirectToUrl } from "@/utils/redirectToUrl"
import emailService from "../../services/emailService"

const OlvidaPass = () => {

  const [email, guardaEmail] = useState('')

  const { auth, setAuth } = useMyContext()

  const [alerta, setAlerta] = useState(null)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(auth?.nombre) {
        redirectToUrl('/')
    }
  },[auth])

  const handleChangeEmail = (e) => {
    guardaEmail(e.target.value.trim())
  }

  const handleSubmit = async () => {
    if (!email) {
      setAlerta({ msg: 'Introduce tu email', err: true })
      return
    }

    setLoading(true)
    setAlerta(null)
    const info = { email }

    try {
      // Llamada al backend para generar y almacenar el token
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/olvide-password`, info)

      // Log para diagnóstico
      console.log('[OlvidaPass] backend response:', data)

      // Caso ideal: el backend devuelve { msg: '...', token: '...' , nombre: '...' }
      if (data?.msg && data?.token) {
        try {
          await emailService.sendResetPasswordEmail({ toEmail: email, toName: auth?.nombre || '', token: data.token })
          setAlerta({ msg: 'Se han enviado las instrucciones a tu correo.', err: false })
          guardaEmail('')
        } catch (mailErr) {
          // Mostrar y guardar logs detallados para identificar la falla
          console.error('[OlvidaPass] Error enviando email desde frontend:', mailErr)
          // Si la librería lanzó detalles de Brevo, muéstralos en consola
          if (mailErr?.brevoStatus || mailErr?.brevoText) {
            console.error('[OlvidaPass] Brevo status:', mailErr.brevoStatus, 'text:', mailErr.brevoText)
          }
          // Si axios/vm error con response
          if (mailErr?.response) {
            try {
              const text = await (mailErr.response.text ? mailErr.response.text() : Promise.resolve(JSON.stringify(mailErr.response)))
              console.error('[OlvidaPass] mailErr.response:', text)
            } catch (x) {
              // ignore
            }
          }

          // Informar al usuario con detalle reducido
          setAlerta({ msg: `Token generado. Error al enviar email: ${mailErr?.message || 'ver consola'}`, err: true })
        }
        setLoading(false)
        return
      }

      // Si el backend no devuelve token pero indica msg, informamos al usuario y registramos la respuesta
      if (data?.msg && !data?.token) {
        console.error('[OlvidaPass] backend returned msg but no token:', data)
        setAlerta({ msg: 'Se generó el token en el servidor pero no estaba disponible para enviarlo desde el cliente. Contacta al administrador.', err: true })
        setLoading(false)
        return
      }

      if (data?.err) {
        console.warn('[OlvidaPass] backend returned error:', data)
        setAlerta({ msg: 'No hay un usuario con ese email' })
        setLoading(false)
        return
      }
    } catch (err) {
      console.error('[OlvidaPass] error comunicándose con el backend:', err)
      setAlerta({ msg: 'Error al comunicarse con el servidor', err: true })
      setLoading(false)
      return
    }
  }
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none">
        
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100">Restaura tu Password</h1>
          <p className="text-sm text-gray-400 mt-1 text-center">Ingresa tu correo para recibir las instrucciones de cambio</p>
        </div>

        {alerta?.msg && <Alerta msg={alerta?.msg} err={alerta?.err} />}

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
              maxLength={40}
            />
          </div>

          <button
            type="button"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 mt-2 text-sm disabled:opacity-70 disabled:pointer-events-none"
            onClick={handleSubmit}
          >
            {loading ? 'Validando...' : 'Solicitar Cambio'}
          </button>
        </form>

        <div className="border-t border-gray-100 dark:border-gray-800 my-6"></div>

        <div className="space-y-3 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            ¿Recordaste tu contraseña?{" "}
            <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              Inicia Sesión
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default OlvidaPass