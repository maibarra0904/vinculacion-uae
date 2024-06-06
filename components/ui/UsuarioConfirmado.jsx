'use client'
import React, { useEffect } from 'react'
import Alerta from './Alerta'
import { useMyContext } from '../context/myContext'
import { redirectToUrl } from '@/utils/redirectToUrl'

const UsuarioConfirmado = () => {

    const {auth, confirmed, loadPage} = useMyContext()

    useEffect(() => {
        
        if(!loadPage && !confirmed) redirectToUrl('/')
    },[])

    useEffect(() => {
      if(auth?.nombre) redirectToUrl('/')
    },[auth])

  return (
    !loadPage &&
    (confirmed ? 
      <Alerta msg={'Usuario Confirmado, ya puedes iniciar sesión'} err={false} />
      :
      <Alerta msg={'Usuario no encontrado'}/>
  ))
}

export default UsuarioConfirmado