import Enlace from "@/components/ui/Enlace";

export default function InformeContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Información sobre Informe Final
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        El informe final del proyecto se realiza después de que un perfil fue aprobado y las actividades asociadas al proyecto fueron realizadas. El procedimiento para realizar el informe final del proyecto de LCE es el siguiente:
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg flex items-center gap-2 border border-gray-100 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.25c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
        </svg>
        <span>
        También puede revisar un{" "}
        <Enlace 
          url="https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/EbFF1wjyWtpDhXe10Jt0GVkBwlRAbas8uCcr3Pn1RKgtWQ?e=O5UDIM" 
          text="Ejemplo de un informe final aprobado" 
          inline={true} 
          external={true} 
          nuevo={true} 
        />{" "}
        para guiarse en su proceso.
        </span>
      </p>


      <div className="space-y-4">
        {/* Step List */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-green-600">a.</span>
              <p className="text-gray-700 dark:text-gray-300">
                Se deberá llenar los{" "}
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Ea7ZQHpMKa1PhPccnv6f_SsBbqNapitPEpkglhF3v8qToQ?e=cX92lC" 
                  text="Formatos de Informe" 
                  inline={true} 
                  external={true} 
                  nuevo={true} 
                />{" "}
                junto con la{" "}
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EdWUpFyqjDRHmMZ_2ogHrmwBQegpZsvtcdFLhGuecYvnTQ?e=RGV2qa" 
                  text="Carátula" 
                  inline={true} 
                  external={true} 
                  nuevo={true} 
                />. 
                La documentación una vez llena, deberá ser revisada y firmada por su tutor en los documentos que correspondan.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-green-600">b.</span>
              <p className="text-gray-700 dark:text-gray-300">
                Adicional a los formatos citados, el estudiante debe anexar a la documentación la copia del <span className="font-medium text-gray-900 dark:text-white">OFICIO DEL PERFIL APROBADO</span> por la coordinación de labor comunitaria, mismo que tuvo que haber llegado a su correo cuando se aprobó el proyecto.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-green-600">c.</span>
              <p className="text-gray-700 dark:text-gray-300">
                Toda la documentación deberá ser insertada en una carpeta plástica de color <span className="underline decoration-yellow-500 font-semibold text-yellow-600 dark:text-yellow-400">amarilla</span> (con vincha plástica) en el orden suministrado en los formatos anteriores.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-green-600">d.</span>
              <p className="text-gray-700 dark:text-gray-300">
                El tutor deberá <span className="underline">revisar y sumillar</span> TODAS las páginas que conforman la documentación.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-green-600">e.</span>
              <p className="text-gray-700 dark:text-gray-300">
                Deberá luego acercarse al responsable de vinculación (Ing. Mario Ibarra), para que le de la última firma a la documentación.
              </p>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-green-600">f.</span>
              <p className="text-gray-700 dark:text-gray-300">
                Esta carpeta, debe ser entregada a la <span className="font-medium text-gray-900 dark:text-white">Secretaría de Decanato (Lcda. Jahely Mora)</span> y deberá tomar un recibido de parte de esta Secretaría. <span className="italic block mt-1 text-xs text-gray-500">(Esta es su constancia, se recomienda escanear y guardar)</span>
              </p>
            </li>
          </ul>
        </div>

        {/* Note Alert */}
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 p-4 rounded-xl text-sm mt-4">
          <p className="text-gray-700 dark:text-gray-300">
            Luego de haber entregado la carpeta, deberá esperar la aprobación u observaciones de parte de la Coordinación de Labor Comunitaria Estudiantil de Guayaquil, normalmente notificada vía correo electrónico.
          </p>
          <p className="font-bold text-green-800 dark:text-green-400 mt-2">
            Una vez aprobada la carpeta se considera oficialmente aprobado el informe del proyecto y culminado satisfactoriamente el proceso.
          </p>
        </div>
      </div>

      {/* Exception Section */}
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4 border-l-4 border-yellow-500 pl-2">
        Notas y Eventualidades en la Realización
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Type 1 */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-t-4 border-red-500 text-sm">
          <span className="font-extrabold text-red-500 block mb-1">Proyecto No Culminado:</span>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
             Si un proyecto de LCE no se pudo ejecutar a cabalidad, los estudiantes del grupo deberán hacer una solicitud.
          </p>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EcdoxZr2DS5NsGp9rYycllgB-Unthxyggcko5ca7Ngl_gw?e=1Vgjkx" 
            text="Solicitud para Anulación" 
            inline={true} 
            external={true} 
            nuevo={true} 
          />
        </div>

        {/* Type 2 */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-t-4 border-orange-500 text-sm">
          <span className="font-extrabold text-orange-500 block mb-1">Retiro de Estudiante:</span>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
             Si un estudiante no puede cumplir con las actividades no es necesario anularlo, sino solicitar el retiro del estudiante.
          </p>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EYtTLYvjdhJEgAxZ-pNpauoB9wgtoO9A_m7Ifu2JseQ_Dg?e=0fgxcq" 
            text="Solicitud de Retiro" 
            inline={true} 
            external={true} 
            nuevo={true} 
          />
        </div>

        {/* Type 3 */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-t-4 border-yellow-500 text-sm">
          <span className="font-extrabold text-yellow-500 block mb-1">Retrasos Cronograma:</span>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
             Si existen retrasos en la realización del proyecto se puede optar por solicitar el cambio de cronograma de actividades.
          </p>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/Eb5LmD4u6itLiA5CRXYILyIBmm77GwsqpizpksA7SGyHJA?e=sdWwB0" 
            text="Solicitud de Modificación" 
            inline={true} 
            external={true} 
            nuevo={true} 
          />
        </div>
      </div>

    </div>
  );
}
