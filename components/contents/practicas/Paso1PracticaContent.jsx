import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function Paso1PracticaContent() {
  return (

    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="flex items-center justify-center px-2.5 py-1 bg-green-600 rounded-full text-white text-xs font-bold shadow-sm">Paso 1</span>
        Preparatorias y Solicitud

      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Step A */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">a. Elección de Vía</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Elegir una de dos vías para realizar su práctica preprofesional: <span className="font-semibold text-gray-800 dark:text-gray-100">Convenio</span> o <span className="font-semibold text-gray-800 dark:text-gray-100">Carta de Intención</span>.
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              - Si opta por un convenio, revise el apartado de{" "}
              <Enlace url="/convenio" text="Información Sobre Convenios" inline={true} />.
          </p>
        </div>

        {/* Step B */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">b. Carta de Intención</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Remitir la{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Ee9o52Qgl0BFiV8rPq2bFtcBydrGI3Qv9hE3SnqZrVJYJA?e=DXQhcM" 
               text="Carta de Intención" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
              a la empresa, luego de que se haya realizado el acercamiento. Debe ir firmada por el Responsable de Vinculación y tomarle un recibido.
          </p>
        </div>

        {/* Step C */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">c. Solicitud</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Adjuntar la{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EVH1EZp0XnRHpK3GAS2YjbkBo54sb3BpFfyuXNqJ4sXGsw?e=3gibyd" 
               text="Solicitud Con Convenio" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             o{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EZAFqFqV0pVFoEPefB2VvKwB2CEVpE3jRpdiOZCxnZY1lg?e=lZPJKg" 
               text="Solicitud Con Carta de Intención" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             dependiendo de la forma como se vaya a realizar la práctica.
          </p>
        </div>

        {/* Step D */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">d. Planificación de Fechas</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Usar la{" "}
             <Enlace 
               url="https://planificadorfechasvinculacion.netlify.app/" 
               text="Aplicación para planificar las fechas" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             a fin de establecer las fechas de inicio y fin. Debe imprimir esta planificación y adjuntarla.
          </p>
        </div>

        {/* Step E */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">e. Solicitud de Oficio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
             Usar la{" "}
             <Enlace url="/oficio" text="Aplicación para solicitar número de Oficio" inline={true} />.
          </p>
          <p className="text-xs text-yellow-600 bg-yellow-50 dark:bg-yellow-900/10 dark:text-yellow-400 px-2 py-1 rounded inline-block">
              * Nota: Colocar <span className="font-semibold">PASO 1 - INICIO PP</span> en "Motivo".
          </p>
        </div>

        {/* Step F */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">f. Oficio de Apertura</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Llenar el{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EbHAM6Tx9rRCmYy5UZjOk10BrfGo9l4Thh3NInDLaJU2Vg?e=R2G9nm" 
               text="Modelo de Oficio de Apertura" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             usando el número anterior, el mismo que deberá ser firmado por el Responsable de Vinculación.
          </p>
        </div>

        {/* Step G */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">g. Historial de Matrícula</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Obtener el{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/EYRvqBrwcjJNiEkajCWSxKoBY93wICYpN8FFbBG6pYw8uA?e=f30peC" 
               text="Historial de Matriculación" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             para comprobar que la práctica corresponde a su período y año de estudio.
          </p>
        </div>
      </div>

      {/* Footer / Instructions */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 p-4 rounded-xl flex items-start gap-3 mt-4 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-blue-800 dark:text-blue-300">
          Entregar toda la documentación a la <span className="font-semibold text-blue-900 dark:text-blue-200">Secretaría de Decanato ({CONTACTOS.SECRETARIA.NOMBRE})</span> y esperar el primer visto bueno del Decano para proceder al Paso 2.
        </p>
      </div>
    </div>
  );
}

