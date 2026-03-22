import Enlace from "@/components/ui/Enlace";

export default function Paso2PracticaContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <span className="flex items-center justify-center px-2.5 py-1 bg-green-600 rounded-full text-white text-xs font-bold shadow-sm">Paso 2</span>
        Aprobación y Inicio Formal

      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Step A */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">a. Tutor</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Solicitar un tutor al Ing. Mario Ibarra para poder continuar este paso.
          </p>
        </div>

        {/* Step B */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">b. Notificación</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Llenar la{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQA4IN0xSqLERJcEzDZOQe_-ARnBoUSeWAhkL3g6iEWIixI?e=4PmZVe" 
               text="Carta de Notificación al Tutor" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />, imprimir 2 copias, hacer firmar al Responsable de Vinculación y entregar una copia al tutor y en la otra tomarle un recibido.
          </p>
        </div>

        {/* Step C */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">c. Segundo Oficio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Solicitar luego un nuevo número de oficio en la{" "}
             <Enlace url="/oficio" text="Aplicación para solicitar número de oficio" inline={true} />{" "}
             (En "Motivo" colocar PASO 2 - INICIO PP y en "Tutor" el que le fue asignado)
          </p>
        </div>

        {/* Step D */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">d. Pedido a Decano</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Tomar el número de oficio anterior y habiendo planificado su actividad deberá llenar el{" "}
             <Enlace 
               url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EdPkBvc6kpFPpPz4a0ojBy0BH45ISNni-Y8SivIswgTPAQ?e=9A4lFD" 
               text="Modelo de Oficio de Pedido a Decano" 
               inline={true} 
               external={true} 
               nuevo={true} 
             />{" "}
             y entregarlo junto con la documentación anterior.
          </p>
        </div>

        {/* Step E */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">e. Custodio Docs</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Resguardar la documentación recibida: La respuesta no solo incluye un nuevo visto bueno sino que se da mediante una carta del Decano al representante legal con asunto: <span className="font-semibold text-gray-800 dark:text-white">CARTA DE INICIO</span>. La misma pasa a custodiarse por el propio estudiante.
          </p>
        </div>

        {/* Step F */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">f. Formalización</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             El Decanato emite 2 copias originales de la <span className="font-semibold text-gray-800 dark:text-white">CARTA DE INICIO</span>, una para la empresa y la otra con un *RECIBIDO*. TODA la documentación debe ser escaneada y enviada a <span className="font-semibold">mibarra@uagraria.edu.ec</span>.
          </p>
        </div>
        {/* Step G */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">g. Inicio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
             Desarrollar su práctica preprofesional en la fecha de inicio programada una vez completados todos los pasos.
          </p>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-xl mt-4 text-sm flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-600 dark:text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 18.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-bold text-red-800 dark:text-red-400">Nota Importante:</span> Si el estudiante no cumplió los dos pasos anteriores a cabalidad, <span className="font-bold">NO PUEDE EMPEZAR</span> su práctica preprofesional. La Práctica Preprofesional será <span className="underline decoration-red-600 font-semibold text-red-700 dark:text-red-400">ANULADA</span> si se comienza a realizar sin haber culminado los pasos anteriores.
        </p>
      </div>

    </div>
  );
}
