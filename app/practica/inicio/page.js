"use client";
import { useState } from "react";
import Layout from "@/components/ui/Layout";
import InicioHeader from "@/components/contents/practicas/InicioHeader";
import Paso1PracticaContent from "@/components/contents/practicas/Paso1PracticaContent";
import Paso2PracticaContent from "@/components/contents/practicas/Paso2PracticaContent";
import Paginacion from "@/components/ui/Paginacion";
import Enlace from "@/components/ui/Enlace";

const InicioPracticas = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <InicioHeader />

      <Paginacion page={page} setPage={setPage} />

      {page === 1 ? (
        <Paso1PracticaContent />
      ) : (
        <Paso2PracticaContent />
      )}


    </Layout>
  );
};

export default InicioPracticas;

