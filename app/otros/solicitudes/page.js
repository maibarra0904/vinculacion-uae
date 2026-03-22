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

      <div className="space-y-6 mt-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">1. Descarga de Solicitud</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Descargue y llene la <Enlace url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EWHTsE0nIJNGlwaBRQTBGqoBNiGxYDz4K9fl_BILyoTezw?e=gaX9gc" text="Solicitud de Estudiante" inline={true} external={true} nuevo={true} />.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">2. Código de Número de Oficio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Solicite número de oficio en la <Enlace url="/oficio" text="Aplicación" inline={true} /> (en Motivo seleccione <span className="font-bold">OTRO</span> y luego Especifique el motivo digitando: <span className="italic">SOLICITUD DE IMPRESION</span>).
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">3. Oficio del Responsable</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Descargue y llene el <Enlace url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EQqKMoq2dSVKp2U3ByGBl4kB8f78WSASKIn3W836QV_PAg?e=LaCl55" text="Oficio del Responsable" inline={true} external={true} nuevo={true} />.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">4. Impresión</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Imprima el oficio del responsable (<span className="font-semibold text-gray-900 dark:text-white">2 copias</span>), la solicitud de estudiante (<span className="font-semibold text-gray-900 dark:text-white">1 copia</span>) y sus adjuntos (<span className="font-semibold text-gray-900 dark:text-white">1 copia</span>).
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">5. Firmas y Entrega</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Firmar la solicitud de estudiante, tomar la firma al responsable (mostrando el adjunto: evidencia) y entregar a Secretaría del Decanato en sobre manila tomando un <span className="font-semibold text-blue-600 dark:text-blue-400">recibido</span> en la segunda copia del oficio del responsable.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">6. Entrega al Responsable</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Entregar el oficio con el recibido de Secretaría al responsable de vinculación.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;
