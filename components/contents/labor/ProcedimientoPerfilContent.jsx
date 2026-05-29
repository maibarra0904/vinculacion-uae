import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function ProcedimientoPerfilContent() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
        <span className="flex items-center justify-center p-2 bg-green-600 rounded-xl text-white font-bold shadow-md shadow-green-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24c0-.064.015-.125.042-.18l.005-.012a.25.25 0 0 1 .251-.149h5c.125 0 .237.078.27.19l.005.012c.027.054.043.115.043.18v.75c0 .289-.234.521-.521.521h-5.23A.522.522 0 0 1 10 7.25v-.75Z" />
          </svg>
        </span>
        Pasos del Procedimiento de Perfil
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
              Solicitar Autorización de Inicio de LCE
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite formalmente la autorización para dar inicio a la Labor Comunitaria Estudiantil (LCE) al Responsable de Vinculación (Formato 1).
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAPR6uHFWm-SYYg6UUauaE0Aa_I0iR2R9akYxk2oceUnQg?e=77YOs5" 
                text="Descargar Formato 1" 
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
              Obtener Número de Oficio en la Aplicación
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite y obtenga un número de oficio utilizando el sistema interno para completar el Formato 2.
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="/oficio" 
                text="Solicitar Número de Oficio (Formato 2)" 
                inline={false}
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
              Gestionar la Solicitud de Autorización al Decano
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Haciendo uso del número de oficio obtenido en el paso anterior, complete el oficio de solicitud de autorización dirigido al Decano (Formato 2).
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAx0tBR-3gGTZx1aS8NUanIAUDO8O_7UUdkeMeBzv4gdgg?e=IM3uyk" 
                text="Descargar Formato 2" 
                inline={false} 
                external={true} 
                nuevo={true}
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
              Entregar Documentación al Decanato
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Entregue la documentación física anterior en la Secretaría de Decanato (encargada: <span className="font-semibold text-gray-800 dark:text-white">{CONTACTOS.SECRETARIA.NOMBRE}</span>) y espere el visto bueno formal del Decano (quien colocará su sumilla aprobatoria directamente sobre el Formato 2).
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            5
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Solicitar Asignación de Tutor al Responsable de Vinculación
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Realice la solicitud verbal al <strong>Responsable de Vinculación ({CONTACTOS.RESPONSABLE.NOMBRE})</strong> para que le indique quién será el docente tutor o tutora asignado que guiará el desarrollo de su labor comunitaria. Este paso es un prerrequisito para proceder con el llenado de la documentación siguiente.
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
              Gestionar Designación y Declaración Compromiso del Tutor
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Una vez autorizado, gestione los documentos formales de designación (Formato 3) y la declaración compromiso firmada por el docente tutor asignado (Formato 4).
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-2 text-xs font-semibold">
              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-900/40 flex flex-col justify-between">
                <span className="text-indigo-800 dark:text-indigo-400 block mb-2">Formato 3 (Designación)</span>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQBC6_sVyWm2SLVhzuvakoikAd-o3BUcc7ERCibYdzc3XaM?e=SUy1nV" 
                  text="Descargar Formato 3" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-xl border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                <span className="text-blue-800 dark:text-blue-400 block mb-2">Formato 4 (Declaración Compromiso)</span>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQBwz9xs22GKSaOj1205sTzgAcblglX9agCU06moRyKkLBc?e=A5LwQu" 
                  text="Descargar Formato 4" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 7 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            7
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Elaborar Perfil del Proyecto
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Proceda a estructurar y redactar la propuesta completa y el perfil de su proyecto de labor comunitaria utilizando la plantilla oficial (Formato 5).
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQBUONlf_EIVRK7m0_EQ9nIZAerlW15dIcZjFpoEGxHak0g?e=pY5XW1" 
                text="Descargar Formato 5" 
                inline={false} 
                external={true} 
                nuevo={true}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 8 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            8
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Obtener Número de Oficio en la Aplicación
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite y obtenga un nuevo número de oficio utilizando el sistema interno para completar el Formato 6.
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="/oficio" 
                text="Solicitar Número de Oficio (Formato 6)" 
                inline={false}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 9 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            9
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Gestionar el Oficio de Entrega del Perfil
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Llene y complete el oficio formal de entrega del perfil del proyecto utilizando el número de oficio obtenido en el paso anterior (Formato 6).
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAn_IgJ0PzpQouumehmV7XHAZY-wpolVhRhU1s-BteVGrA?e=odN6E0" 
                text="Descargar Formato 6" 
                inline={false} 
                external={true} 
                nuevo={true}
                className="w-full text-center"
              />
            </div>

            {/* Note Step 9 */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-3.5 rounded-xl border border-blue-100/80 dark:border-blue-900/40 text-xs text-blue-700 dark:text-blue-300 leading-relaxed mt-4">
              <span className="font-bold">Nota:</span> Deben sacarse <span className="font-semibold text-blue-900 dark:text-blue-200">dos (2) copias</span> del oficio (una para que quede archivada en la carpeta física y otra copia adicional para tomar un recibido formal al momento de entregar la carpeta).
            </div>
          </div>
        </div>

        {/* Step 10 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            10
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Organizar y Entregar la Carpeta al Departamento
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Coloque todos los documentos físicos dentro de una <span className="font-semibold text-gray-900 dark:text-white">carpeta de color amarillo</span> respetando estrictamente el siguiente ordenamiento:
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-100/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 leading-relaxed mb-3">
              <ol className="list-decimal pl-4 space-y-1 font-medium">
                <li><span className="font-bold">Formato 6</span> (Oficio de entrega del perfil).</li>
                <li><span className="font-bold">Formato 5</span> (Perfil del proyecto estructurado).</li>
                <li><span className="font-bold">Formato 4</span> (Declaración compromiso del tutor).</li>
                <li><span className="font-bold">Formato 3</span> (Oficio de designación del tutor).</li>
                <li><span className="font-bold">Formato 2</span> (Solicitud de autorización al Decano con la sumilla aprobatoria).</li>
                <li><span className="font-bold">Formato 1</span> (Solicitud de autorización de inicio de LCE).</li>
              </ol>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Proceda a realizar la entrega física de la carpeta organizada en el Departamento de Vinculación (encargada: <span className="font-semibold text-gray-800 dark:text-white">{CONTACTOS.DEPARTAMENTO.NOMBRE}</span>) a la espera de la resolución final y aprobación formal del perfil del proyecto de labor comunitaria.
            </p>

            {/* Note Step 10 */}
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-100/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 mt-4 leading-relaxed">
              <span className="font-bold">Nota de Recibido:</span> En la copia adicional del Formato 6, no olvide tomar el respectivo sello y firma de <span className="font-bold text-amber-950 dark:text-amber-200">recibido</span> por parte del departamento de labor comunitaria.
            </div>
          </div>
        </div>

      </div>

      {/* Importante / Nota Box */}
      <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-5 rounded-2xl text-sm space-y-2 shadow-sm">
        <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376C11.163 17.5 1.5 17 2.18 17h19.64c.68 0 .757.5.157.976l-9.82 11.25a.375.375 0 01-.634 0l-9.82-11.25zM12 15.75h.008v.008H12v-.008z" />
          </svg>
          Información y Notas Importantes
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-semibold text-gray-900 dark:text-white">Remisión Digital de Recibido:</span> Habiendo entregado la carpeta física en el departamento, es de carácter <span className="font-semibold">obligatorio</span> enviar la copia del <span className="font-bold text-amber-800 dark:text-amber-400">Formato 6 escaneada con el sello de recibido</span> al correo electrónico: <span className="font-mono text-xs font-semibold">{CONTACTOS.RESPONSABLE.EMAIL}</span>.
          </li>
        </ul>
      </div>
    </div>
  );
}
