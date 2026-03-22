import Enlace from "@/components/ui/Enlace";

export default function DesgloseContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Proceso de Emisión de Certificado de Desglose
      </h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-none">
        Uno de los requisitos para los estudiantes egresados previa graduación es presentar dentro de su documentación el certificado de desglose. El desglose es un documento que certifica la realización de todas las actividades de vinculación (labores comunitarias y prácticas preprofesionales) del estudiante egresado. Para obtener su certificado debe realizar lo siguiente:
      </p>

      {/* Step ordered list using fancy cards or inline list items with numbers */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mt-6">
        <ul className="space-y-5">
          {/* Step 1 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">1</span>
            <p className="text-gray-700 dark:text-gray-300">
              Descarga y llena la{" "}
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/EUQyAqE0odtGmpXFGSGwAiYB89QF5cLeGJq6oCiXUNgqxA?e=NSKBRx" 
                text="Solicitud de Estudiante" 
                inline={true} 
                external={true} 
                nuevo={true} 
              />.
            </p>
          </li>

          {/* Step 2 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">2</span>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-800 dark:text-white">Consigue la evidencia de tus actividades de vinculación:</span> En labores comunitarias se solicita el oficio de informe final <span className="underline decoration-green-500 font-medium">aprobado</span>. En prácticas preprofesionales el de informe final con <span className="underline decoration-blue-500 font-medium">recibido</span> de decanato. En cursos especializantes, los diplomas de aprobación.
            </p>
          </li>

          {/* Step 3 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">3</span>
            <p className="text-gray-700 dark:text-gray-300">
              Genera el certificado en la{" "}
              <Enlace 
                url="https://desglose.netlify.app/" 
                text="Aplicación para generar el Certificado de Desglose" 
                inline={true} 
                external={true} 
                nuevo={true} 
              />{" "}
              y descarga el archivo pdf.
            </p>
          </li>

          {/* Step 4 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">4</span>
            <p className="text-gray-700 dark:text-gray-300">
              Compra una especie valorada e imprime en el anverso (cara principal) la solicitud de estudiante y en el reverso (parte de atrás) el certificado de desglose.
            </p>
          </li>

          {/* Step 5 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">5</span>
            <p className="text-gray-700 dark:text-gray-300">
              Firma la solicitud e imprime las evidencias.
            </p>
          </li>

          {/* Step 6 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">6</span>
            <p className="text-gray-700 dark:text-gray-300">
              Toma la firma al responsable de vinculación (<span className="font-semibold text-gray-800 dark:text-white">Ing. Mario Ibarra</span>) quien se encargará de revisar la solicitud junto con las evidencias.
            </p>
          </li>

          {/* Step 7 */}
          <li className="flex gap-4">
            <span className="flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 font-bold rounded-full text-sm">7</span>
            <p className="text-gray-700 dark:text-gray-300">
              Como último paso deberás tomarle la firma a las autoridades que se incluyen en el certificado: <span className="font-semibold">Decano y Secretario de CCAA</span>.
            </p>
          </li>
        </ul>
      </div>

    </div>
  );
}
