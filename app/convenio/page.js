"use client";
import Layout from "@/components/ui/Layout";
import Convenios from "../../components/contents/labor/convenios.mdx";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";
import Regresar from "@/components/ui/Regresar";

const Convenio = () => {
  return (
    <>
      <Layout>
        <Regresar />
        <Convenios />

        <EnlacesRelacionados>
          <Enlace
            url={
              "https://uagrariaec-my.sharepoint.com/:x:/g/personal/mibarra_uagraria_edu_ec/ERaxd0GfRRtPl4UZA2NllYoBCheW4ihpL0sQWNgasygCXA?e=XTWxQ5"
            }
            text="Matriz de Convenios de Labores Comunitarias"
            nuevo={true}
            external={true}
          />
          <Enlace
            url={
              "https://uagrariaec-my.sharepoint.com/:x:/g/personal/mibarra_uagraria_edu_ec/EYYHBkf11UdHpCsO9GIBdq0Bj7HQZFvIMmd42tsbpfZ50g?e=HvYauI"
            }
            text="Matriz de Convenios de Prácticas Preprofesionales"
            nuevo={true}
            external={true}
          />
          <Enlace
            url={
              "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EXFYQ6NZzB5AlDtmHC1KH4gBPdbAV3b3Wj0mVzfrvnh3OA?e=uCobGQ"
            }
            text="Formato de nuevo convenio de labor comunitaria"
            nuevo={true}
            external={true}
          />
          <Enlace
            url={
              "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EewdRI85625LjGp0Meaby2IBR4otipWvVenA5SM4JnAJ8A?e=Bdaym5"
            }
            text="Formato de nuevo convenio de práctica preprofesional"
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
