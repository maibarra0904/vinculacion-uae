"use client";
import Layout from "@/components/ui/Layout";
import DesglosePage from "../../../components/contents/desglose.mdx";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";

const Desglose = () => {
  return (
    <Layout>
      <DesglosePage />

      <EnlacesRelacionados>
        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EUQyAqE0odtGmpXFGSGwAiYB89QF5cLeGJq6oCiXUNgqxA?e=NSKBRx"
          }
          text="Modelo de solicitud de estudiante"
          nuevo={true}
          external={true}
        />
        <Enlace
          url={"https://desglose.netlify.app/"}
          text={'App para generar el certificado de desglose'}
          nuevo={true}
          external={true}
        />
      </EnlacesRelacionados>

      
    </Layout>
  );
};

export default Desglose;
