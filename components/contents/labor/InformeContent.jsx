import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function InformeContent() {
  return (
    <div className="space-y-8">
      {/* Header section matching PerfilHeader styling */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-2xl mb-8 border border-green-100 dark:border-green-900/50">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Procedimiento para el informe final de labor comunitaria
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          El informe final de la labor comunitaria se realiza tras la finalización completa de las actividades y la previa aprobación del perfil del proyecto. Siga los pasos detallados a continuación para gestionar su entrega.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
        <span className="flex items-center justify-center p-2 bg-green-600 rounded-xl text-white font-bold shadow-md shadow-green-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24c0-.064.015-.125.042-.18l.005-.012a.25.25 0 0 1 .251-.149h5c.125 0 .237.078.27.19l.005.012c.027.054.043.115.043.18v.75c0 .289-.234.521-.521.521h-5.23A.522.522 0 0 1 10 7.25v-.75Z" />
          </svg>
        </span>
        Pasos del Procedimiento de Informe Final
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
              Desarrollar el Informe Final
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Proceda a estructurar y redactar la propuesta final y las conclusiones de su labor comunitaria utilizando la plantilla oficial del Informe Final (Formato 7).
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQA3JDawhKMQTp-0-2MBoo_wAe5s8meIjyjwQJpnuSQqkwA?e=6QxPU9" 
                text="Descargar Formato 7" 
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
              Gestionar el Informe Técnico del Tutor
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite y gestione con su docente tutor asignado la redacción y validación del Informe Técnico de tutoría (Formato 8).
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQDogi5fHMQDToE7jd862M8lAXOho1HIC4dhe1LIzRNwRYg?e=WTmCKu" 
                text="Descargar Formato 8" 
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
              Solicitar las Evaluaciones de Tutor y Empresa
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite las evaluaciones de desempeño formal. Requiere tanto la evaluación de parte de su tutor de la UAE (Formato 9) como la del tutor/supervisor encargado en la empresa receptora (Formato 10).
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-2 text-xs font-semibold">
              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-900/40 flex flex-col justify-between">
                <span className="text-indigo-800 dark:text-indigo-400 block mb-2">Formato 9 (Tutor UAE)</span>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAk1RNuFbQLRJyMKPkH8WU5AS2Z7Y0xNTk9J643xNYU-D8?e=nGJQov" 
                  text="Descargar Formato 9" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-xl border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                <span className="text-blue-800 dark:text-blue-400 block mb-2">Formato 10 (Tutor Empresa)</span>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQC0UTwHcPJVRqrP37mlNE0XAfES6s2B8p5hpbqn7bxuhuU?e=qV2ShU" 
                  text="Descargar Formato 10" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
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
              Obtener Número de Oficio en la Aplicación
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite y obtenga un número de oficio utilizando el sistema interno para completar el Formato 11.
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="/oficio" 
                text="Solicitar Número de Oficio (Formato 11)" 
                inline={false}
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
              Gestionar el Oficio de Entrega de Informe Final
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Complete el oficio formal de entrega de informe final utilizando el número de oficio obtenido anteriormente (Formato 11).
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-3.5 rounded-xl border border-blue-100/80 dark:border-blue-900/40 text-xs text-blue-700 dark:text-blue-300 leading-relaxed mb-4">
              <span className="font-bold">Copia del Oficio:</span> Deberá imprimir <span className="font-semibold text-blue-900 dark:text-blue-200">dos (2) copias originales</span> de este oficio (una destinada a quedar archivada dentro de la carpeta física, y la otra para conservar a posterior como el recibido de entrega).
            </div>

            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQBMo_rYcCHXTpJa5dxoowVOAc316qgyCOcRUvb5-AthZH0?e=wFCef2" 
                text="Descargar Formato 11" 
                inline={false} 
                external={true} 
                nuevo={true}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            6
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Organizar la Carpeta Física
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Coloque todos los documentos físicos dentro de una <span className="font-semibold text-gray-900 dark:text-white">carpeta de color AMARILLA</span> respetando de forma estricta el siguiente orden:
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-100/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
              <ol className="list-decimal pl-4 space-y-1 font-semibold">
                <li><span className="font-bold">Formato 11</span> (Oficio de entrega del informe final).</li>
                <li><span className="font-bold">Formato 7</span> (Informe final completo desarrollado).</li>
                <li><span className="font-bold">Formato 8</span> (Informe técnico del tutor UAE).</li>
                <li><span className="font-bold">Formato 9</span> (Evaluación del tutor UAE).</li>
                <li><span className="font-bold">Formato 10</span> (Evaluación empresarial / supervisor).</li>
              </ol>
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
              Entregar Carpeta Física en Coordinación
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Realice la entrega física de la carpeta organizada en el Departamento de Vinculación (encargada: <span className="font-semibold text-gray-800 dark:text-white">{CONTACTOS.DEPARTAMENTO.NOMBRE}</span>). No olvide tomar de forma obligatoria el sello y firma de <span className="font-semibold text-green-600 dark:text-green-400">recibido</span> sobre su copia adicional del Formato 11.
            </p>
          </div>
        </div>

      </div>

      {/* Importante / Nota Box */}
      <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-5 rounded-2xl text-sm space-y-2 shadow-sm mb-6">
        <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376C11.163 17.5 1.5 17 2.18 17h19.64c.68 0 .757.5.157.976l-9.82 11.25a.375.375 0 01-.634 0l-9.82-11.25zM12 15.75h.008v.008H12v-.008z" />
          </svg>
          Información y Consideraciones Clave
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-semibold text-gray-900 dark:text-white">Remisión Digital de Recibido:</span> Habiendo entregado la carpeta física en el departamento, es de carácter <span className="font-semibold">obligatorio</span> enviar la copia del <span className="font-bold text-amber-800 dark:text-amber-400">Formato 11 escaneada con el sello de recibido</span> al correo electrónico: <span className="font-mono text-xs font-semibold">{CONTACTOS.RESPONSABLE.EMAIL}</span>.
          </li>
        </ul>
      </div>

      {/* Exception Section */}
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4 border-l-4 border-yellow-500 pl-2">
        Notas y Eventualidades en la Realización
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Type 1 */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all text-sm flex flex-col justify-between">
          <div>
            <span className="font-extrabold text-red-500 block mb-1">Proyecto No Culminado:</span>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs">
               Si un proyecto de LCE no se pudo ejecutar a cabalidad, los estudiantes del grupo deberán hacer una solicitud de anulación.
            </p>
          </div>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EcdoxZr2DS5NsGp9rYycllgB-Unthxyggcko5ca7Ngl_gw?e=1Vgjkx" 
            text="Solicitud para Anulación" 
            inline={false} 
            external={true} 
            nuevo={true} 
          />
        </div>

        {/* Type 2 */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all text-sm flex flex-col justify-between">
          <div>
            <span className="font-extrabold text-orange-500 block mb-1">Retiro de Estudiante:</span>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs">
               Si un estudiante del grupo no puede cumplir con las actividades, puede solicitar su retiro individual del proyecto.
            </p>
          </div>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYtTLYvjdhJEgAxZ-pNpauoB9wgtoO9A_m7Ifu2JseQ_Dg?e=0fgxcq" 
            text="Solicitud de Retiro" 
            inline={false} 
            external={true} 
            nuevo={true} 
          />
        </div>

        {/* Type 3 */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all text-sm flex flex-col justify-between">
          <div>
            <span className="font-extrabold text-yellow-500 block mb-1">Retrasos Cronograma:</span>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs">
               Si existen retrasos y desfases temporales justificados, se puede solicitar la modificación del cronograma planificado.
            </p>
          </div>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Eb5LmD4u6itLiA5CRXYILyIBmm77GwsqpizpksA7SGyHJA?e=sdWwB0" 
            text="Solicitud de Modificación" 
            inline={false} 
            external={true} 
            nuevo={true} 
          />
        </div>
      </div>

    </div>
  );
}
