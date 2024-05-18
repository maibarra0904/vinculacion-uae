"use client";
import Enlace from "@/components/ui/Enlace";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Layout from "@/components/ui/Layout";
import Paginacion from "@/components/ui/Paginacion";
import React, { useState } from "react";

const Solicitudes = () => {
  
  return (
    <Layout>
          
      <h1 className="flex justify-center items-center uppercase mt-2">
        Pasos para solicitar la impresión o reimpresión
      </h1>
      <h1 className="flex justify-center items-center uppercase">
        de un certificado de vinculación
      </h1>

      <h2 className="mt-2 text-lg text-red-500">
          <span className="font-bold">Nota Aclaratoria:</span> Este proceso sólo sirve para estudiantes antiguos que extraviaron su certificado o que nunca solicitaron la impresión del mismo, o también para estudiantes activos o antiguos que en su defecto cuentan con el certificado pero el mismo contiene errores de período, nombre de carrera, nombre del estudiante, nombre de la sede o tipo de actividad de vinculación.
        </h2>

      <div>
        
        <h2 className="flex mt-10 text-lg">
          1. Descargue y llene la solicitud de Estudiante
        </h2>

        <h2 className="flex mt-10 text-lg">
          2. Solicite número de oficio en la aplicación (en Motivo seleccione OTRO y luego Especifique el motivo digitando: SOLICITUD DE IMPRESION)
        </h2>  
        
        <h2 className="flex mt-10 text-lg">
          3. Descargue y llene el oficio del Responsable
        </h2>
        
        <h2 className="flex mt-10 text-lg">
          4. Imprima el oficio del responsable (2 copias), la solicitud de estudiante (1 copia)  y sus adjuntos (1 copia)
        </h2>

        <h2 className="flex mt-10 text-lg">
          5. Firmar la solicitud de estudiante, tomar la firma al responsable (mostrando el adjunto: evidencia) y entregar a Secretaría del Decanato en sobre manila tomando un recibido en la segunda copia del oficio del responsable.
        </h2>
      
        <h2 className="flex mt-10 text-lg">
          6. Entregar el oficio con el recibido de Secretaría al responsable de vinculación.
        </h2>
      </div>

      <EnlacesRelacionados>
        <Enlace
          url={
            "https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EWHTsE0nIJNGlwaBRQTBGqoBNiGxYDz4K9fl_BILyoTezw?e=gaX9gc"
          }
          text="Modelo de solicitud de estudiante"
          nuevo={true}
          external={true}
        />
        <Enlace
              url={
                "/oficio"
              }
              text="Aplicación para solicitar número de oficio"
              nuevo={true}
            />
        <Enlace
          url={"https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EQqKMoq2dSVKp2U3ByGBl4kB8f78WSASKIn3W836QV_PAg?e=LaCl55"}
          text={'Modelo de oficio del responsable'}
          nuevo={true}
          external={true}
        />
      </EnlacesRelacionados>
    </Layout>
  );
};

export default Solicitudes;
