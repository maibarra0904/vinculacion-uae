"use client";
import Layout from "@/components/ui/Layout";
import MyPage from "../../components/contents/labor.mdx";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";

const LaborComunitaria = () => {
  return (
    <Layout>
      <MyPage />

      <EnlacesRelacionados text="Enlaces de interés">
      <Enlace
          url={
            "/labor/convenio"
          }
          text="Información sobre convenios"
        />
        <Enlace
          url={
            "/labor/perfil"
          }
          text="Pasos para elaboración de Perfil de Labor Comunitaria"
        />
        <Enlace
          url={
            "/labor/informe"
          }
          text="Pasos para elaboración de Informe Final de Labor Comunitaria"
        />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default LaborComunitaria;
