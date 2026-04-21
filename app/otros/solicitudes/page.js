"use client";
import Enlace from "@/components/ui/Enlace";
import EnlacesRelacionados from "@/components/ui/EnlacesRelacionados";
import Layout from "@/components/ui/Layout";
import Paginacion from "@/components/ui/Paginacion";
import React, { useState } from "react";

const Solicitudes = () => {
  const encargado = process.env.NEXT_PUBLIC_DEPARTAMENTO_ENCARGADO || "Ing. Johanna Ramos";
  
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
          <span className="text-sm font-bold text-green-500 block mb-1">1. Descarga y Llenado de Carta de Solicitud</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Dependiendo de su caso, descargue y llene una de las siguientes cartas:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <Enlace url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQDQfm7XwESRSZiREzmCV7t-AV7Mvl8qOL6OJQ7LBtolEag?e=2rwlfZ" text="Carta para solicitar rectificación del certificado" inline={true} external={true} nuevo={true} />: 
              Se utiliza cuando ha habido algún error en la carrera, sede, nombres o apellidos del estudiante.
            </li>
            <li>
              <Enlace url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQC5WaUFsUrmTY5jJoWBb9TIAQtE6T0cRRq7nhZbP2Hi43I?e=2kWsAI" text="Carta por pérdida en secretaría" inline={true} external={true} nuevo={true} />: 
              Se utiliza cuando el certificado (emitido físicamente) se ha perdido en secretaría.
            </li>
            <li>
              <Enlace url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQB-XnlYpUR-RoKBcMplyx8NAbKM-QHHvyhrYRX1LiwIBOQ?e=skzcb0" text="Carta por extravío, robo o deterioro" inline={true} external={true} nuevo={true} />: 
              Se utiliza cuando el certificado ha sido extraviado, fue objeto de robo o simplemente está en estado deteriorado.
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">2. Revisión del Responsable</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Una vez llena la carta, el estudiante debe solicitar la revisión del responsable de vinculación de su carrera para verificar que la información ingresada sea correcta.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-green-500 block mb-1">3. Firma y Entrega Directa</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Finalmente, tras validar que todo es correcto, el estudiante debe proceder con su firma manual y entregar la carta directamente en el departamento de labor comunitaria (Vinculación) con la <span className="font-bold text-blue-600 dark:text-blue-400">{encargado}</span>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;
