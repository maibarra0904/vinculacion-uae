import Enlace from "@/components/ui/Enlace"
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados"
import Layout from "@/components/ui/Layout"


const Otros = () => {
  return (
    <Layout>
         <EnlacesRelacionados text="Trámites Disponibles">
            <Enlace
              url={"/otros/solicitudes"}
              text="Solicitud de impresión o reimpresión de certificados de vinculación (No requerido en procesos ordinarios)"
            />
            <Enlace
              url={"/otros/desglose"}
              text="Solicitud de certificado de desglose (egresados)"
            />
            
          </EnlacesRelacionados>

    </Layout>
  )
}

export default Otros