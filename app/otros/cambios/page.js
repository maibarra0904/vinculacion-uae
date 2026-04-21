"use client";
import Enlace from "@/components/ui/Enlace";
import Layout from "@/components/ui/Layout";
import React from "react";

const CambiosVinculacion = () => {
  return (
    <Layout>
      <h1 className="flex justify-center items-center uppercase mt-2 text-center">
        Gestión de Cambios y Notificaciones en Proyectos
      </h1>
      <h1 className="flex justify-center items-center uppercase text-center">
        de Labor Comunitaria
      </h1>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
        En esta sección encontrará los formatos necesarios para gestionar el retiro o adición de integrantes, 
        cambios en el cronograma y solicitudes de cambio de tutor guía.
      </p>

      <div className="grid gap-6 mt-8 sm:grid-cols-1 lg:grid-cols-2">
        {/* Caso 1: Retiro de Estudiante */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            Retiro de Estudiante
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Utilice estos formatos para notificar la salida de un integrante del grupo.
          </p>
          <div className="space-y-3">
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQCPnkfP0j4USpXGmOBpaAiMAR76UA1mTI4KybxcKx4pToQ?e=vZLqs7" 
              text="1. Solicitud del Estudiante (Firma Estudiante)" 
              external={true} nuevo={true} inline={false} 
            />
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQCBCVv7ZQr4QY69Y6EbOyViAdc79OiZTJQSJ24zAOOtK04?e=rBjtsq" 
              text="2. Formato para Firma del Responsable" 
              external={true} nuevo={true} inline={false} 
            />
          </div>
        </div>

        {/* Caso 2: Adición de Estudiante */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5l-2.25-2.25m0 0L14.5 7.5m2.25-2.25v13.5m-15-11.25l2.25 2.25m0 0L6.25 7.5M3.75 9.75v13.5m15 0H3.75" />
            </svg>
            Adición de Nuevo Estudiante
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Utilice estos formatos si el grupo desea incorporar a un nuevo integrante.
          </p>
          <div className="space-y-3">
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQASFbqvEPeOT7BNEFZC9NphAfUIAgCqOig7JenNu9K0iZ0?e=K7YOJ0" 
              text="1. Solicitud del Estudiante (Dirigida al Responsable)" 
              external={true} nuevo={true} inline={false} 
            />
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQACoU3ihDwqQoRhgahtvVDPAVKgdD1C4oMcEIrKQ2aPkxI?e=F95rQ3" 
              text="2. Formato para Firma del Responsable" 
              external={true} nuevo={true} inline={false} 
            />
          </div>
        </div>

        {/* Caso 3: Cambio de Cronograma */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 11.25h13.5A2.25 2.25 0 0121 11.25v7.5m-18 0h18" />
            </svg>
            Cambio de Cronograma
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Para solicitar una modificación en los plazos o fechas del proyecto.
          </p>
          <div className="space-y-3">
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAvM0TCUwzUSZeeoaGryXovAUN8GQgiLK50pfrsd6UcDFk?e=ao793e" 
              text="1. Solicitud de los Estudiantes" 
              external={true} nuevo={true} inline={false} 
            />
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAKreVFzRgGQLZ_mPdospoIAXp4hZGcDaxRCxA6jpcefSE?e=Znvm9X" 
              text="2. Carta Firmada por Docente Responsable" 
              external={true} nuevo={true} inline={false} 
            />
          </div>
        </div>

        {/* Caso 4: Cambio de Tutor Guía */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            Cambio de Tutor Guía
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Solicitud para cambiar al docente tutor (guía) del proyecto.
          </p>
          <div className="space-y-3">
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQDWd6It4njRS77cC_N9tXmxARqVbB7XuKmuEcLG0k_uKsk?e=O2qidy" 
              text="1. Solicitud de los Estudiantes" 
              external={true} nuevo={true} inline={false} 
            />
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQBAcFW4O58fQZjVyYwWP0diAXjT2WT21M5jVTy4cnRJpyk?e=lsyoW6" 
              text="2. Formato para Firma del Responsable" 
              external={true} nuevo={true} inline={false} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CambiosVinculacion;
