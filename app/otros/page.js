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
              url={"/otros/desglose"}
              text="Proceso para solicitar el certificado de desglose (egresados)"
            />
            <Enlace
              url={"/otros/preguntas"}
              text="VinculaBot: Realiza consultas acerca de los procesos de vinculación"
            />
            
          </EnlacesRelacionados>

    </Layout>
    </>
  )
}

export default Otros