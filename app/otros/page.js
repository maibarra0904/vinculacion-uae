import Enlace from "@/components/ui/Enlace"
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados"
import Layout from "@/components/ui/Layout"


const Otros = () => {
  return (
    <>
      <Layout>
        <h1>Otras Solicitudes y más</h1>
        <EnlacesRelacionados text="Enlaces Disponibles">
          <Enlace
            url={"/otros/solicitudes"}
            text="Proceso para solicitar impresión o reimpresión de certificados de vinculación (No requerido en procesos ordinarios)"
          />
          <Enlace
              url={"https://planificadorfechasvinculacion.netlify.app/"}
              text="Aplicación para planificar las fechas de vinculación"
              nuevo={true}
              external={true}
          />
          <Enlace
            url={"/chat"}
            text="VinculaBot: Realiza consultas acerca de los procesos de vinculación"
          />
          <Enlace
              url={"https://uagrariaec-my.sharepoint.com/:p:/g/personal/mibarra_uagraria_edu_ec/IQCKJf7L_-N9S77GccFx4XjAAV_xO2e4iC3gRA6K8g_EdFQ?e=OVffXh"}
              text="Presentación de cursos para convalidad LC y PPP - Marzo 2026"
              nuevo={true}
              external={true}
          />
        </EnlacesRelacionados>
      </Layout>
    </>
  );
}

export default Otros