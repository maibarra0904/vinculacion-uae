import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function Paso1Content() {

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="flex items-center justify-center px-2.5 py-1 bg-green-600 rounded-full text-white text-xs font-bold shadow-sm">Paso 1</span>
        Preparación y Documentación

      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Step A */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">a. Solicitud de Oficio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Debe solicitar un primer número de oficio en la{" "}
             <Enlace 
               url="/oficio" 
               text="Aplicación para solicitar número de Oficio" 
               inline={true} 
             />.
          </p>
          <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium bg-yellow-50 dark:bg-yellow-900/10 px-2 py-1 rounded mt-2 inline-block">
              * Nota: Colocar <span className="underline">PASO 1 - PERFIL LC</span> en "Motivo".
          </p>
        </div>

        {/* Step B */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">b. Solicitud LCE</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Deberá llenar la{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EZEAgBCARSdHjtf06-G_KnMBcSQZozfn1Ha4j2PD8-io2w?e=6j1I6H" 
               text="Solicitud Para Realizar la LCE" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             con los adjuntos correspondientes.
          </p>
        </div>

        {/* Step C */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">c. Carta de Autorización</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Deberá gestionar la{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EU7EwKUjTTZMnLAuZE7AyCABfi2Vj6eQOqZvI5cHL7H0_g?e=3acIbN" 
               text="Carta de Autorización" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             de parte de la entidad beneficiaria.
          </p>
        </div>
      </div>

      {/* Footer / Instructions */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 p-4 rounded-xl flex items-start gap-3 mt-4 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 dark:text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-blue-800 dark:text-blue-300">
          Esta documentación deberá entregarla a la <span className="font-semibold text-blue-900 dark:text-blue-200">Secretaría de Decanato ({CONTACTOS.SECRETARIA.NOMBRE})</span> y esperar el primer visto bueno del Decano.
        </p>
      </div>
    </div>
  );
}

