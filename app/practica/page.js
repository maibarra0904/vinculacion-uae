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
        <Enlace
          url={
            "/practica/inicio"
          }
          text="Pasos para iniciar una práctica preprofesional (PP)"
        />
        <Enlace
          url={
            "/practica/informe"
          }
          text="Pasos para elaboración de informe final de una PP"
        />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default PracticasPreprofesionales;
