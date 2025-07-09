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
            url={"https://poe.com/VinculaBot"}
            text="VinculaBot: Realiza consultas acerca de los procesos de vinculación"
            external={true}
            nuevo={true}
          />
        </EnlacesRelacionados>
      </Layout>
    </>
  );
}

export default Otros