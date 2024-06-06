'use client'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Alerta from './Alerta';
import { redirectToUrl } from '@/utils/redirectToUrl';
import { useMyContext } from '../context/myContext';

const Confirmacion = () => {

    const {confirmed, setConfirmed} = useMyContext()

    const params = useParams()
    
    const [respuesta, setRespuesta] = useState({})

    const [error, setError] = useState(null)

    const token = params.token

    useEffect(() => {
        const confirmar = async() => {
            try {
                
                await axios.get(`http://localhost:3000/api/applications/auth/confirmar/${token}`)    
                
                setConfirmed(true)
                
                localStorage.setItem('confirmed', true)

                redirectToUrl('/confirmacion')

            } catch (error) {
                localStorage.setItem('confirmed', false)
                redirectToUrl('/')
            }
            
            
        }
        confirmar()
    },[])

  return (
    
        error ?
        <Alerta msg={error}/> :
        <h2>Espere, estamos validando la información...</h2>
        
  )
}

export default Confirmacion