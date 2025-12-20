"use client"
import { useEffect, useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import Alerta from "../ui/Alerta"
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

    <>

      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-5 font-bold">Restaura tu Password</h1>
        {
          alerta?.msg &&
          <Alerta msg={alerta?.msg} err={alerta?.err}/>
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


            <div>
              <button
                type="button"
                className="flex justify-center items-center mt-2 w-full p-3 bg-gray-500 text-white"
                onClick={handleSubmit}
              >{loading ? 'Validando...' : 'Solicitar Cambio'}</button>
            </div>

          </div>
        </form>
      </div>


    </>
  )
}

export default OlvidaPass