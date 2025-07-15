"use client";
import Layout from "@/components/ui/Layout";
import Inicio from "../../../components/contents/practicas/practicasInicio.mdx";
import Paso1 from "../../../components/contents/practicas/paso1.mdx";
import Paso2 from "../../../components/contents/practicas/paso2.mdx";
import React, { useState } from "react";
import Paginacion from "@/components/ui/Paginacion";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";
import Regresar from "@/components/ui/Regresar";

const InicioPracticas = () => {
  const [page, setPage] = useState(1);
  return (
    <Layout>
      <Regresar />
      <Inicio />

      <Paginacion page={page} setPage={setPage} />

      {page === 1 ? (
        <>
          <Paso1 />

          <EnlacesRelacionados>
            <Enlace
              url={"/convenio"}
              text="Información sobre convenios"
              nuevo={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EVH1EZp0XnRHpK3GAS2YjbkBo54sb3BpFfyuXNqJ4sXGsw?e=3gibyd"
              }
              text="Formato de SOLICITUD CON CONVENIO para iniciar PP"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Ee9o52Qgl0BFiV8rPq2bFtcBydrGI3Qv9hE3SnqZrVJYJA?e=DXQhcM"
              }
              text="(nuevo) Modelo de CARTA DE INTENCIÓN para entregar a empresas antes de empezar la PPP"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EZAFqFqV0pVFoEPefB2VvKwB2CEVpE3jRpdiOZCxnZY1lg?e=lZPJKg"
              }
              text="Formato de SOLICITUD CON CARTA DE INTENCIÓN para iniciar PP"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={"https://planificadorfechasvinculacion.netlify.app/"}
              text="Aplicación para planificar las fechas de vinculación"
              nuevo={true}
              external={true}
              alternative="(nuevo)"
            />
            <Enlace
              url={
                "/oficio"
              }
              text="APLICACIÓN para solicitar número de oficio"
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EbHAM6Tx9rRCmYy5UZjOk10BrfGo9l4Thh3NInDLaJU2Vg?e=R2G9nm"
              }
              text="Modelo de solicitud de OFICIO DE APERTURA"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={"https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/EYRvqBrwcjJNiEkajCWSxKoBY93wICYpN8FFbBG6pYw8uA?e=f30peC"}
              text="Procedimiento para obtener el HISTORIAL DE MATRICULA"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>

          <EnlacesRelacionados text="Otros enlaces de Interés">
            <Enlace
              url={"/practica"}
              text="Información general sobre Prácticas Preprofesionales"
            />
            <Enlace
              url={"https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/Ec4jvOXjUBtLqLTcaA2tF0QBatL05w7dHFg8QdPkWRGcgA?e=UoNQKy"}
              text="Ejemplo de Documentación de Inicio con Convenio"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={"https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/ERhGF0_GeZ5JjV0aCKlcGkoB4M9psk3spbqvUJQLztfnvw?e=OcHBiu"}
              text="Ejemplo de Documentación de Inicio con Carta de Intension"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>
        </>
      ) : (
        <>
          <Paso2 />

          <EnlacesRelacionados>
          <Enlace
              url={
                "/oficio"
              }
              text="APLICACIÓN para solicitar número de oficio"
              nuevo={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EdPkBvc6kpFPpPz4a0ojBy0BH45ISNni-Y8SivIswgTPAQ?e=9A4lFD"
              }
              text="Modelo de OFICIO DE PEDIDO A DECANO"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>

          <EnlacesRelacionados text="Otros enlaces de Interés">
            <Enlace
              url={"/practica"}
              text="Información general sobre Prácticas Preprofesionales"
            />
            <Enlace
              url={"https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/Ec4jvOXjUBtLqLTcaA2tF0QBatL05w7dHFg8QdPkWRGcgA?e=UoNQKy"}
              text="Ejemplo de Documentación de Inicio con Convenio"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={"https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/ERhGF0_GeZ5JjV0aCKlcGkoB4M9psk3spbqvUJQLztfnvw?e=OcHBiu"}
              text="Ejemplo de Documentación de Inicio con Carta de Intension"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>
        </>
      )}
    </Layout>
  );
};

export default InicioPracticas;
