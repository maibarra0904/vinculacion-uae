import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function Paso2Content() {

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="flex items-center justify-center px-2.5 py-1 bg-green-600 rounded-full text-white text-xs font-bold shadow-sm">Paso 2</span>
        Aprobación y Formalización

      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Step A */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">a. Tutor</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Luego de haber recibido el visto bueno del Paso 1, debe contactarse con el Responsable de Vinculación ({CONTACTOS.RESPONSABLE.NOMBRE}) para que le asigne el tutor.
          </p>
        </div>


        {/* Step B */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">b. Solicitud de Oficio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Ya con el tutor asignado debe solicitar un segundo número de oficio en la{" "}
            <Enlace url="/oficio" text="Solicitud de Número de Oficio" inline={true} />{" "}
            (En "Motivo" colocar PASO 2 - PERFIL LC).
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
            El numero de oficio le servirá para llenar el{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYJbIxzEjdpPtfBHXfUbemkBfVRZ2bbp2Kn_zlFmZTRdhA?e=MHGYAC" 
              text="Modelo de Oficio de Asignación de Docente Tutor" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            (2 copias, con firmas de Responsable y Coordinador).
          </p>
        </div>

        {/* Step C */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">c. Carta Compromiso</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Llenar la{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EcTzHs3D74JPvt6d6qe72hgB1lLUzEHq6n8yudH7rCz9eA?e=ufZEsK" 
              text="Carta de Compromiso del Docente Guía Asignado" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />.
          </p>
        </div>

        {/* Step D */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">d. Entrega Tutor</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Acercarse al docente tutor y entregarle una copia del oficio de asignación (del literal b.) y tomarle la firma de la carta de compromiso. El estudiante guarda sus copias.
          </p>
        </div>

        {/* Step E */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">e. Carátula y Perfil</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Llenar la{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EUKgwzCjESVPqDD0q_jIZloBe2YiRVcRcPMBHb5b1NZUGQ?e=czsv7i" 
              text="Carta de Carátula" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            y junto con su tutor el{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYN96-zUDMxPjUMC_d1-fdcB57zbeN_-01sMcwBXTXuJCw?e=e8JwyZ" 
              text="Formato de Perfil del Proyecto" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />. Puede planificar sus días en su{" "}
            <Enlace 
              url="https://planificadorfechasvinculacion.netlify.app/" 
              text="Aplicación de Fechas" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />.
          </p>
        </div>

        {/* Step F */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">f. Presentación</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Llenar la{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/ER2iFux3Q5tIuTvLC-6PeTcBF2aXgUDIKci0cCW6jWdmNw?e=oOizlc" 
              text="Carta de Presentación del Perfil" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />. El tutor revisará y <span className="underline">sumillará</span> toda la documentación para firmar dicha carta.
          </p>
        </div>

        {/* Step G */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">g. Orden de Carpeta</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Armar en carpeta <span className="underline font-semibold">AMARILLA</span>: Carta presentación, Oficio asignación, Carta compromiso, Carátula, Formato perfil con adjuntos y Docs de Paso 1.
          </p>
        </div>

        {/* Step H */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">h. Revisión Final</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Mostrar la documentación al Responsable de Vinculación para revisión final y firma de la carta de presentación.
          </p>
        </div>

        {/* Step I */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">i. Lugar de Entrega</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             El lugar de entrega es en el Departamento de Labor Comunitaria <span className="font-semibold">({CONTACTOS.DEPARTAMENTO.NOMBRE})</span>. <span className="font-semibold text-blue-600 dark:text-blue-400">Tomar una copia para recibido como constancia.</span>
          </p>
        </div>

        {/* Step J */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">j. Envío Correo</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Escanear constancia de recibido y enviarlo al correo del responsable de vinculación de carrera: <span className="font-semibold text-green-600 dark:text-green-400 block mt-1">{CONTACTOS.RESPONSABLE.EMAIL}</span>
          </p>
        </div>

      </div>

      {/* Approved / final instructions */}
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 p-5 rounded-xl mt-6">
        <h3 className="text-lg font-extrabold text-green-800 dark:text-green-400 mb-2 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ¡Éxito!
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Luego de haber entregado la carpeta, deberá esperar la aprobación u observaciones de parte de la Coordinación de Labor Comunitaria Estudiantil de Guayaquil, normalmente notificada vía correo electrónico.
        </p>
        <p className="font-bold text-gray-800 dark:text-white mt-2 text-sm">
          Una vez aprobada la carpeta se considera oficialmente aprobado el perfil del proyecto.
        </p>
      </div>
    </div>
  );
}
