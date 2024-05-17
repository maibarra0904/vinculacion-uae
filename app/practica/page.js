"use client";
import Layout from "@/components/ui/Layout";
import Practicas from "../../components/contents/practicas.mdx";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Enlace from "@/components/ui/Enlace";

const PracticasPreprofesionales = () => {
  return (
    <Layout>
      <Practicas />

      <EnlacesRelacionados>
        <Enlace url={"/convenio"} text="Información sobre convenios" />
        <Enlace
          url={"/practica/inicio"}
          text="Pasos para iniciar una práctica preprofesional (PP)"
        />
        <Enlace
          url={
            "https://play.google.com/store/apps/details?id=com.gpsmapcamera.geotagginglocationonphoto"
          }
          text="Enlace de descarga de aplicación GPS Map Camera para Android"
          nuevo={true}
          external={true}
        />

        <Enlace
          url={
            "https://apps.apple.com/il/app/gps-map-camera-geotag-photos/id1503116917"
          }
          text="Enlace de descarga de aplicación GPS Map Camera para Ios"
          nuevo={true}
          external={true}
        />
        <Enlace
          url={"/practica/informe"}
          text="Pasos para elaboración de informe final de una PP"
        />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default PracticasPreprofesionales;
