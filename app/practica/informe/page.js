"use client";

import Layout from "@/components/ui/Layout";
import InformeFinal from "../../../components/contents/practicas/practicasInforme.mdx";
import React from "react";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";
import Regresar from "@/components/ui/Regresar";

const Final = () => {
  return (
    <Layout>
      <Regresar />
      <InformeFinal />
      <EnlacesRelacionados>
        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:f:/g/personal/mibarra_uagraria_edu_ec/EpPp-2chLy9OkJPXOH573e4B1ZFW0lg7WV_Y0fcb8aiGeA?e=j6vbGm"
          }
          text="DOCUMENTACIÓN habilitante para el Cierre de PP"
          nuevo={true}
          external={true}
        />
        <Enlace
              url={
                "/oficio"
              }
              text="APLICACIÓN para solicitar número de oficio"
            />
      </EnlacesRelacionados>
      <EnlacesRelacionados text="Otros enlaces de Interés">
        <Enlace
          url={"https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/EZB6wtSbBT5MvuYWZbaiacUBMfSwqYQuW8pRJezwLFBqIA"}
          text="Ejemplo de informe aprobado"
          nuevo={true}
          external={true}
        />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default Final;
