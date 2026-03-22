"use client";
import { useState } from "react";
import Layout from "@/components/ui/Layout";
import PerfilHeader from "@/components/contents/labor/PerfilHeader";
import Paso1Content from "@/components/contents/labor/Paso1Content";
import Paso2Content from "@/components/contents/labor/Paso2Content";
import Paginacion from "@/components/ui/Paginacion";
import Enlace from "@/components/ui/Enlace";

const PasosPerfil = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PerfilHeader />

      <Paginacion page={page} setPage={setPage} />

      {page === 1 ? (
        <Paso1Content />
      ) : (
        <Paso2Content />
      )}


    </Layout>
  );
};

export default PasosPerfil;

