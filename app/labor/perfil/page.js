"use client";
import Layout from "@/components/ui/Layout";
import Perfil from "../../../components/contents/labor/laborPerfil.mdx";
import Paso1 from "../../../components/contents/labor/paso1.mdx";
import Paso2 from "../../../components/contents/labor/paso2.mdx";
import { useState } from "react";
import Paginacion from "@/components/ui/Paginacion";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";
import Regresar from "@/components/ui/Regresar";

const PasosPerfil = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <Regresar />
      <Perfil />

      <Paginacion page={page} setPage={setPage} />

      {page === 1 ? (
        <>
          <Paso1 />

          <EnlacesRelacionados>

            <Enlace
              url={
                "/oficio"
              }
              text="Aplicación para solicitar número de oficio"
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EZEAgBCARSdHjtf06-G_KnMBcSQZozfn1Ha4j2PD8-io2w?e=6j1I6H"
              }
              text="Modelo de Solicitud Para Realizar la LCE"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EU7EwKUjTTZMnLAuZE7AyCABfi2Vj6eQOqZvI5cHL7H0_g?e=3acIbN"
              }
              text="Modelo de Carta de Autorización"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>

          <EnlacesRelacionados text="Otros enlaces de Interés">
            <Enlace
              url={"/labor"}
              text="Información general sobre Labores Comunitarias"
            />
            <Enlace
              url={"/labor/convenio"}
              text="Información sobre convenios"
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/Ee81ntrXu8NAtzSSDxOMkJQBEjMjMVX0H98hNFaVBh6r2Q?e=5NY6rl"
              }
              text="Ejemplo de un perfil aprobado"
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
              text="Aplicación para solicitar número de oficio"
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYJbIxzEjdpPtfBHXfUbemkBfVRZ2bbp2Kn_zlFmZTRdhA?e=MHGYAC"
              }
              text="Modelo de Oficio de asignacion de docente tutor"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EcTzHs3D74JPvt6d6qe72hgB1lLUzEHq6n8yudH7rCz9eA?e=ufZEsK"
              }
              text="Modelo de Carta de Compromiso del Tutor"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EUKgwzCjESVPqDD0q_jIZloBe2YiRVcRcPMBHb5b1NZUGQ?e=czsv7i"
              }
              text="Modelo de Carátula"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYN96-zUDMxPjUMC_d1-fdcB57zbeN_-01sMcwBXTXuJCw?e=e8JwyZ"
              }
              text="Formato de Perfil del Proyecto"
              nuevo={true}
              external={true}
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/ER2iFux3Q5tIuTvLC-6PeTcBF2aXgUDIKci0cCW6jWdmNw?e=oOizlc"
              }
              text="Modelo de Carta de Presentación del Perfil"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>

          <EnlacesRelacionados text="Otros enlaces de Interés">
            <Enlace
              url={"/labor"}
              text="Información general sobre Labores Comunitarias"
            />
            <Enlace
              url={"/labor/convenio"}
              text="Información sobre convenios"
            />
            <Enlace
              url={
                "https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/Ee81ntrXu8NAtzSSDxOMkJQBEjMjMVX0H98hNFaVBh6r2Q?e=5NY6rl"
              }
              text="Ejemplo de un perfil aprobado"
              nuevo={true}
              external={true}
            />
          </EnlacesRelacionados>

        </>
      )}
    </Layout>
  );
};

export default PasosPerfil;
