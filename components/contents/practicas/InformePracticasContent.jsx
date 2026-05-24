import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function InformePracticasContent() {
  return (
    <div className="space-y-8">
      {/* Header section matching InicioHeader styling but integrated or styled premium */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-2xl mb-8 border border-green-100 dark:border-green-900/50">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Procedimiento para la finalización e informe de prácticas preprofesionales
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          El procedimiento para elaborar y gestionar la documentación del informe final consta de un único flujo unificado. Siga los pasos detallados a continuación para completar su entrega de forma correcta.
        </p>
      </div>

      {/* Warning/Deadline alert */}
      <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-xl text-sm flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-600 dark:text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 18.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <p className="text-gray-800 dark:text-gray-300 font-medium">
          <span className="font-bold text-red-800 dark:text-red-400">¡Atención!:</span> Habiendo culminado el desarrollo de las prácticas preprofesionales, tiene <span className="font-bold">28 días calendario</span> como máximo para cumplir con la entrega. En caso contrario, la práctica quedará <span className="underline decoration-red-500 font-bold text-red-600 dark:text-red-400">ANULADA</span>.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
        <span className="flex items-center justify-center p-2 bg-green-600 rounded-xl text-white font-bold shadow-md shadow-green-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24c0-.064.015-.125.042-.18l.005-.012a.25.25 0 0 1 .251-.149h5c.125 0 .237.078.27.19l.005.012c.027.054.043.115.043.18v.75c0 .289-.234.521-.521.521h-5.23A.522.522 0 0 1 10 7.25v-.75Z" />
          </svg>
        </span>
        Pasos del Procedimiento de Finalización
      </h2>

      {/* Timeline Steps */}
      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-8 pb-4">

        {/* Step 1 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            1
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Gestionar los Documentos Habilitantes (Anexos del Formato 4)
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Gestione los documentos habilitantes necesarios para la entrega de su informe final. Esto incluye todos los anexos del Formato 4 correspondientes al seguimiento y evaluación de la práctica.
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace
                url="https://uagrariaec-my.sharepoint.com/:f:/g/personal/mibarra_uagraria_edu_ec/IgAN50CN8yf5Qai6BEARuhXNAWmlqxTZ98St-X6tzCRbNG0"
                text="Descargar Anexos del Formato 4"
                inline={false}
                external={true}
                nuevo={true}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            2
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Gestionar la Declaración de Revisión del Tutor (Formato 4)
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Gestione la declaración de revisión de su informe final con su docente tutor asignado, adjuntando la carpeta completa de anexos habilitantes obtenidos en el paso anterior (Formato 4).
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-xl border border-indigo-100/80 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300 mb-4 leading-relaxed">
              <span className="font-bold">Nota de Revisión:</span> El docente tutor es el responsable de revisar exhaustivamente los contenidos de toda la documentación. Por ende, <span className="underline">deberá sumillar cada una de las páginas</span> de los Anexos del Formato 4 para validar formalmente dicha revisión (en aquellas hojas que no requieran su firma directa).
            </div>

            <div className="max-w-xs text-xs font-semibold">
              <Enlace
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAn4b5Ub8NTRazyYPPOUHzaAfSNlvNrc6rDkZ9p1zycPWI?e=LEG5xw"
                text="Descargar Formato 4"
                inline={false}
                external={true}
                nuevo={true}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            3
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Obtener un Número de Oficio en la Aplicación
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite y obtenga un número de oficio único utilizando el sistema interno de la aplicación para completar el Formato 5.
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace
                url="/oficio"
                text="Solicitar Número de Oficio (Formato 5)"
                inline={false}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            4
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Ordenar la Carpeta y Gestionar el Oficio del Responsable (Formato 5)
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ordene todos los documentos físicos dentro de una <span className="font-semibold text-gray-900 dark:text-white">carpeta plástica de color AMARILLA</span> y gestione el oficio de entrega de informe del Responsable de Vinculación (Formato 5). Se imprimen dos (2) copias de este formato y, adicionalmente, una (1) copia de la cédula del estudiante.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-xl border border-indigo-100/80 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300 mb-4 leading-relaxed">
              <span className="font-bold block mb-2">Verificación y Orden de la Carpeta Física:</span>
              <p className="mb-2">El responsable de vinculación es quien verificará que la documentación esté completa y realizará observaciones generales si las amerita. El orden riguroso de la carpeta debe ser el siguiente:</p>
              <ol className="list-decimal pl-4 space-y-1 font-semibold text-indigo-950 dark:text-indigo-200">
                <li><span className="font-bold">Formato 5</span> (Oficio de entrega del informe final por el Responsable de Vinculación).</li>
                <li><span className="font-bold">Formato 4</span> (Declaración de revisión del tutor).</li>
                <li><span className="font-bold">Anexos del Formato 4</span> (Seguimiento, evaluaciones y anexos completos).</li>
                <li><span className="font-bold">Documentos de Inicio</span> (Formatos del 1 al 3 correspondientes a la etapa de inicio).</li>
              </ol>
            </div>

            <div className="max-w-xs text-xs font-semibold">
              <Enlace
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQBWUV4Fo1THS7J9cfCTTHNVAVYE2cEH-DYN_t9AVqigfuk?e=odJChD"
                text="Descargar Formato 5"
                inline={false}
                external={true}
                nuevo={true}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            5
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Entregar Documentación a Secretaría de Decanato
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Entregue una (1) copia física del Formato 5 junto con una (1) copia de su cédula a la Secretaría de Decanato (encargada: <span className="font-semibold text-gray-800 dark:text-white">{CONTACTOS.SECRETARIA.NOMBRE}</span>). En la otra copia original del Formato 5, solicite que le coloquen el respectivo sello y firma de <span className="font-semibold text-green-600 dark:text-green-400">recibido</span>.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            6
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Remitir Documentación por Correo Electrónico y de manera Física
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Escanee toda la documentación generada en los pasos anteriores (incluyendo la carpeta de inicio y el Formato 5 con el sello de recibido del Decanato) y envíela por correo a:
            </p>
            <div className="inline-block bg-gray-50 dark:bg-gray-800/60 px-3 py-2 rounded-xl border border-gray-100 dark:border-gray-700/60 font-mono text-xs font-semibold text-green-600 dark:text-green-400">
              {CONTACTOS.RESPONSABLE.EMAIL}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
              * El proceso formal de vinculación culmina de manera oficial una vez que toda la documentación ha sido remitida a este correo y entregada la carpeta de manera física al Responsable de Vinculación.
            </p>

            {/* Document Ordering Note */}
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-100/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 mt-4 leading-relaxed">
              <span className="font-bold block mb-2">Ordenamiento de la Documentación Física en la Carpeta AMARILLA:</span>
              <ol className="list-decimal pl-4 space-y-1 font-medium">
                <li><span className="font-bold">Formato 5 con el recibido de Secretaría</span> (Oficio de entrega de informe final por Responsable de Vinculación).</li>
                <li><span className="font-bold">Formato 4 con Anexos</span> en el orden especificado (Revisión documental del tutor + Anexos del Formato 4).</li>
                <li><span className="font-bold">Documentos de Inicio</span> (Formatos del 1 al 3 correspondientes a la etapa de inicio).</li>
              </ol>
            </div>
          </div>
        </div>

      </div>

      {/* Nota / Consideración Box */}
      <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-5 rounded-2xl text-sm space-y-2 shadow-sm">
        <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376C11.163 17.5 1.5 17 2.18 17h19.64c.68 0 .757.5.157.976l-9.82 11.25a.375.375 0 01-.634 0l-9.82-11.25zM12 15.75h.008v.008H12v-.008z" />
          </svg>
          Información y Consideraciones Clave
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-semibold text-gray-900 dark:text-white">Culminación del Proceso:</span> Recuerde que el trámite no se considera finalizado únicamente con la entrega física en decanato. Es de carácter <span className="font-semibold">obligatorio</span> enviar los respaldos escaneados al correo indicado para asentar la aprobación en los registros de Vinculación.
          </li>
        </ul>
      </div>
    </div>
  );
}
