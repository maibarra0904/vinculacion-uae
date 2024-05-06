"use client";
import Layout from "@/components/ui/Layout";
import Convenios from "../../../components/contents/labor/convenios.mdx";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";

const Convenio = () => {
  return (
    <>
      <Layout>
        <Convenios />

        <EnlacesRelacionados>
          <Enlace
            url={
              "https://uagrariaec.sharepoint.com/:x:/s/VINCULACIN-COMPUTACIN/EeFstLmtMmpJh4Lt1BnTc9ABHlZ1QEAavj_1HSOi3eg0Tg?e=wGT1vU"
            }
            text="Matriz de Convenios Aprobados"
            nuevo={true}
            external={true}
          />
          <Enlace
            url={
              "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EXFYQ6NZzB5AlDtmHC1KH4gBPdbAV3b3Wj0mVzfrvnh3OA?e=uCobGQ"
            }
            text="Formato de nuevo convenio"
            nuevo={true}
            external={true}
          />
          <Enlace
            url={
              "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EUpsYVP5V_JHs6Z8mzJENQwBpR1jqSlh_fQJdK9jRuWUBw?e=bKTAI5"
            }
            text="Modelo de solicitud de aprobación de nuevo convenio"
            nuevo={true}
            external={true}
          />
        </EnlacesRelacionados>
        <EnlacesRelacionados text="Otros enlaces de Interés">
        <Enlace
          url={"/labor"}
          text="Información general sobre Labores Comunitarias"
        />
        <Enlace url={"/labor/perfil"} text="Pasos para elaborar el perfil del proyecto" />
      </EnlacesRelacionados>
      </Layout>
    </>
  );
};

export default Convenio;
