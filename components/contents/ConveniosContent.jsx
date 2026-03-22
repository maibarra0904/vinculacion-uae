import Enlace from "@/components/ui/Enlace";

export default function ConveniosContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Información sobre Convenios
      </h1>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Un convenio, es un acuerdo firmado entre partes interesadas (en este caso la Universidad Agraria del Ecuador y una empresa u organización beneficiaria) que habilita poder realizar una actividad de vinculación. Para el caso de una labor comunitaria estudiantil es un <span className="font-bold text-gray-800 dark:text-gray-100">requisito</span> contar con un convenio aprobado con la empresa u organización donde se realizará la actividad de vinculación, para el caso de una practica preprofesional se puede optar por esta opcion sin ser un requisito explicito. Sea que vaya a realizar una labor comunitaria o practica preprofesional tiene dos opciones:
      </p>

      <div className="space-y-4">
        {/* Option A */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
            <span className="font-extrabold text-green-600">A.</span> Tomar un convenio existente
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Puede optarse por tomar un convenio existente para lo cuál deberá buscar en la{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:x:/g/personal/mibarra_uagraria_edu_ec/EUuzCYrXHr1Ngri1up2M7VUBUCJAg1ab6s9-9M0WXlFx_A?e=Y68wB0" 
              text="Matriz de Convenios de Labores Comunitarias" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            o{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:x:/g/personal/mibarra_uagraria_edu_ec/EYYHBkf11UdHpCsO9GIBdq0Bj7HQZFvIMmd42tsbpfZ50g?e=HvYauI" 
              text="Matriz de Convenios de Prácticas Preprofesionales" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            dependiendo del tipo de actividad a realizar, siempre que el convenio seleccionado se encuentre vigente.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-4 text-sm">
            <span className="font-bold text-yellow-800 dark:text-yellow-400">Notas importantes:</span>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                La vigencia o duración del convenio en la matriz de labor comunitaria se observa en la columna <span className="italic font-medium">"Fecha de Fin de Convenio"</span>.
              </li>
              <li>
                En el caso de la matriz de convenios de practicas esta indicado en la columna <span className="italic font-medium">"VIGENCIA"</span>.
              </li>
              <li>
                Considerar que el hecho de haber sido suscrito un convenio previamente no garantiza la autorización, principalmente por posibles cambios de autoridades que impliquen actualizaciones. El estudiante deberá realizar un acercamiento con la organización previo a decidirse.
              </li>
            </ul>
          </div>
        </div>

        {/* Option B */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
            <span className="font-extrabold text-blue-600">B.</span> Gestionar la aprobación de un nuevo convenio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            El estudiante también puede optar por gestionar la aprobación de un nuevo convenio en caso que ninguno de los convenios disponibles y vigentes le resulte aplicable. En este caso deberá llenar el{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EXFYQ6NZzB5AlDtmHC1KH4gBPdbAV3b3Wj0mVzfrvnh3OA?e=uCobGQ" 
              text="Formato de nuevo convenio de labor comunitaria" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            o{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EewdRI85625LjGp0Meaby2IBR4otipWvVenA5SM4JnAJ8A?e=Bdaym5" 
              text="Formato de nuevo convenio de práctica preprofesional" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            según corresponda. El mismo debe ser <span className="font-semibold text-gray-800 dark:text-white">firmado por el representante legal de la empresa</span> y se adjuntarán su copia de cédula y RUC de la empresa.
          </p>

          <div className="grid gap-3 md:grid-cols-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <span className="font-semibold block mb-1">Labor Comunitaria:</span>
              Entregar el formato de convenio firmado, copia de cedula y nombramiento al departamento de Labor Comunitaria en la sede Guayaquil.
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <span className="font-semibold block mb-1">Práctica Preprofesional:</span>
              Entregar la documentación con adjuntos a secretaría de decanato de Milagro.
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 text-center">
             En ambos casos el estudiante debe tomar un recibido de la instancia donde entrega la documentación para hacer un seguimiento a posterior.
          </p>
        </div>
      </div>
    </div>
  );
}
