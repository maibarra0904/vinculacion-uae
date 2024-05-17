"use client";
import Layout from "@/components/ui/Layout";
import Paginacion from "@/components/ui/Paginacion";
import React, { useState } from "react";

const Solicitudes = () => {
  
  return (
    <Layout>
        <div className="flex justify-center items-center">
      <h2 className="mt-2 text-lg text-red-500">
          <span className="font-bold">Nota Aclaratoria:</span> Este proceso sólo sirve para estudiantes antiguos que extraviaron su certificado o que nunca solicitaron la impresión del mismo, o también para estudiantes activos o antiguos que en su defecto cuentan con el certificado pero el mismo contiene errores de período, nombre de carrera, nombre del estudiante, nombre de la sede o tipo de actividad de vinculación.
        </h2>
        </div>
      <h1 className="flex justify-center items-center uppercase mt-10">
        Pasos para solicitar la impresión o reimpresión
      </h1>
      <h1 className="flex justify-center items-center uppercase">
        de un certificado de vinculación
      </h1>

      <div>
        
        <h2 className="flex justify-center items-center mt-10 text-lg">
          1. Descargue y llene la solicitud de Estudiante
        </h2>
        <a 
            href="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EWHTsE0nIJNGlwaBRQTBGqoBNiGxYDz4K9fl_BILyoTezw?e=gaX9gc"
            target="_blank"
            className="flex justify-center items-center text-sm text-blue-500 uppercase"
        >   
            Ir a modelo de solicitud
        </a>
        <h2 className="flex justify-center items-center mt-10 text-lg">
          2. Solicite número de oficio en la aplicación
        </h2>
        <h2 className="flex justify-center items-center text-sm">
        (en Motivo seleccione OTRO y luego digite SOLICITUD DE IMPRESION)
        </h2>
        <a 
            href="/oficio"
            target="_blank"
            className="flex justify-center items-center text-sm text-blue-500 uppercase"
        >   
            Aplicación para solicitar número de oficio
        </a>
        <h2 className="flex justify-center items-center mt-10 text-lg">
          3. Descargue y llene la solicitud del Responsable
        </h2>
        <a 
            href="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EQqKMoq2dSVKp2U3ByGBl4kB8f78WSASKIn3W836QV_PAg?e=LaCl55"
            target="_blank"
            className="flex justify-center items-center text-sm text-blue-500 uppercase"
        >   
            Ir a modelo de solicitud
        </a>
        <h2 className="flex justify-center items-center mt-10 text-lg">
          4. Imprima la solicitud de estudiante (1 copia) la solicitud del responsable (2 copias)
        </h2>
        <h2 className="flex justify-center items-center text-lg">
          y sus adjuntos (1 copia)
        </h2>
        <h2 className="flex justify-center items-center mt-10 text-lg">
          5. Firmar la solicitud de estudiante, tomar la firma al responsable 
        </h2>
        <h2 className="flex justify-center items-center text-lg">
        (mostrando el adjunto: evidencia) y entregar a Secretaría del Decanato
        </h2>
        <h2 className="flex justify-center items-center text-lg">
         en sobre manila tomando un recibido en la segunda copia del responsable
        </h2>
        <h2 className="flex justify-center items-center mt-10 text-lg">
          6. Entregar la solicitud con el recibido de Secretaría al responsable de vinculación.
        </h2>
      </div>
    </Layout>
  );
};

export default Solicitudes;
