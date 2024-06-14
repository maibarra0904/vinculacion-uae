'use client'
import { useEffect, useState } from "react"
import { useMyContext } from "../context/myContext"
import axios from "axios"
import Alerta from "../ui/Alerta"
import { redirectToUrl } from "@/utils/redirectToUrl"

const OlvidaPass = () => {

  const [email, guardaEmail] = useState('')

  const { auth, setAuth } = useMyContext()

  const [alerta, setAlerta] = useState(null)

  const [loading, setLoading] = useState('')

  useEffect(() => {
    if(auth?.nombre) {
        redirectToUrl('/')
    }
},[auth])

  const handleChangeEmail = (e) => {
    guardaEmail(e.target.value.trim())
  }

  const handleSubmit = async () => {
    setLoading(true)
    const info = {
      email
    }


    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND}/auth/olvide-password`, info)

    if (data?.msg) {
      setAlerta({ msg: 'Se han enviado las instrucciones a tu correo.', err: false })
      setLoading(false)
      guardaEmail('')
      return
    }

    if (data?.err) {
      setAlerta({ msg: 'No hay un usuario con ese email' })
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