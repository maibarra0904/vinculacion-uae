"use client";
import Layout from "@/components/ui/Layout";
import InformeFinal from "../../../components/contents/labor/laborInforme.mdx";
import React from "react";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";

const Informe = () => {
  return (
    <Layout>
      <InformeFinal />

      <EnlacesRelacionados>
        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Ea7ZQHpMKa1PhPccnv6f_SsBbqNapitPEpkglhF3v8qToQ?e=cX92lC"
          }
          text="Formatos para el Informe Final"
          nuevo={true}
          external={true}
        />
        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EdWUpFyqjDRHmMZ_2ogHrmwBQegpZsvtcdFLhGuecYvnTQ?e=RGV2qa"
          }
          text="Carátula para el informe Final"
          nuevo={true}
          external={true}
        />

        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EcdoxZr2DS5NsGp9rYycllgB-Unthxyggcko5ca7Ngl_gw?e=1Vgjkx"
          }
          text="Formato de solicitud de anulación del proyecto"
          nuevo={true}
          external={true}
        />

        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYtTLYvjdhJEgAxZ-pNpauoB9wgtoO9A_m7Ifu2JseQ_Dg?e=0fgxcq"
          }
          text="Formato de solicitud de retiro de estudiantes"
          nuevo={true}
          external={true}
        />

        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Eb5LmD4u6itLiA5CRXYILyIBmm77GwsqpizpksA7SGyHJA?e=sdWwB0"
          }
          text="Formato de solicitud de cambio de cronograma"
          nuevo={true}
          external={true}
        />
      </EnlacesRelacionados>

      <EnlacesRelacionados text="Otros enlaces de Interés">
        <Enlace
          url={"/labor"}
          text="Información general sobre Labores Comunitarias"
        />
        <Enlace url={"/labor/convenio"} text="Información sobre convenios" />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default Informe;
