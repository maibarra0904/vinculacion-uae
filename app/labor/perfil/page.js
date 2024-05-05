'use client'
import Layout from "@/components/ui/Layout"
import Perfil from '../../../components/contents/labor/laborPerfil.mdx'
import Paso1 from '../../../components/contents/labor/paso1.mdx'
import { useState } from "react"
import Paginacion from "@/components/ui/Paginacion"

const PasosPerfil = () => {

    const [page, setPage] = useState(1)



  return (
    <Layout>
        <Perfil />

        <Paginacion setPage={setPage}/>

    </Layout>
  )
}

export default PasosPerfil