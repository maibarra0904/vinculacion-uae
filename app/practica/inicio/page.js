'use client'
import Layout from '@/components/ui/Layout'
import Inicio from "../../../components/contents/practicas/practicasInicio.mdx";
import Paso1 from "../../../components/contents/practicas/paso1.mdx";
import Paso2 from "../../../components/contents/practicas/paso2.mdx";
import React, { useState } from 'react'
import Paginacion from '@/components/ui/Paginacion';
import EnlacesRelacionados from '@/components/ui/EnlacesRelacionados';
import Enlace from '@/components/ui/Enlace';

const InicioPracticas = () => {
    const [page, setPage] = useState(1);
  return (
    <Layout>
        <Inicio />

        <Paginacion page={page} setPage={setPage} />

        {page === 1 ? 
        <>
          <Paso1 />

          <EnlacesRelacionados>
          <Enlace
              url={"/convenio"}
              text="Información sobre convenios"
              nuevo={true}
            />
            <Enlace
              url={"https://forms.office.com/r/STqADeUtDd"}
              text="Formulario para solicitar número de oficio"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EbHAM6Tx9rRCmYy5UZjOk10BrfGo9l4Thh3NInDLaJU2Vg?e=R2G9nm"
              }
              text="Modelo de Carta de Apertura"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "http://academico.uagraria.edu.ec/index.php"
              }
              text="Enlace para ingresar al sistema de MATRICULA"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={"/practica/convenio"}
              text="Información sobre convenio o carta de intensión"
            />
          </EnlacesRelacionados>

          <EnlacesRelacionados text="Otros enlaces de Interés">
            <Enlace
              url={"/practica"}
              text="Información general sobre Prácticas Preprofesionales"
            />
          </EnlacesRelacionados>
        
        </> :
        <>
          <Paso2 />

          <EnlacesRelacionados>
            <Enlace
              url={"https://forms.office.com/r/STqADeUtDd"}
              text="Formulario para solicitar número de oficio"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EdPkBvc6kpFPpPz4a0ojBy0BH45ISNni-Y8SivIswgTPAQ?e=9A4lFD"
              }
              text="Modelo de Carta de Pedido a Decano"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>

          <EnlacesRelacionados text="Otros enlaces de Interés">
            <Enlace
              url={"/practica"}
              text="Información general sobre Prácticas Preprofesionales"
            />
          </EnlacesRelacionados>
        </>
}
      
    </Layout>
  )
}

export default InicioPracticas