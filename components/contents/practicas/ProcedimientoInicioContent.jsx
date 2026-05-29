import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function ProcedimientoInicioContent() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
        <span className="flex items-center justify-center p-2 bg-green-600 rounded-xl text-white font-bold shadow-md shadow-green-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24c0-.064.015-.125.042-.18l.005-.012a.25.25 0 0 1 .251-.149h5c.125 0 .237.078.27.19l.005.012c.027.054.043.115.043.18v.75c0 .289-.234.521-.521.521h-5.23A.522.522 0 0 1 10 7.25v-.75Z" />
          </svg>
        </span>
        Pasos del Procedimiento de Inicio
      </h2>

      {/* Timeline Steps */}
      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-8 pb-4">
        
        {/* Step 1 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            1
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              Llenar la Solicitud de Inicio
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Llene la solicitud para iniciar las prácticas preprofesionales según sea la modalidad elegida: mediante <span className="font-semibold">convenio</span> o <span className="font-semibold">carta de intención</span>. Tome en cuenta los anexos requeridos según el caso.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-amber-900 dark:text-amber-300 mb-4 leading-relaxed">
              <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">⚠️ REQUISITO PREVIO (Solo para Carta de Intención):</span>
              Si opta por la vía de <strong>Carta de Intención</strong>, debe realizar obligatoriamente el acercamiento inicial con la empresa usando el <strong>Formato 0 (Carta de Acercamiento) antes de proceder a llenar la solicitud</strong>. Este acercamiento le permitirá obtener la información y documentación indispensable de la empresa para completar su solicitud de inicio.
            </div>

            <div className="grid gap-3 sm:grid-cols-3 mt-4 text-xs font-semibold">
              <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-xl border border-amber-100 dark:border-amber-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-amber-800 dark:text-amber-400 block mb-1">Formato 0 (Acercamiento)</span>
                  <span className="text-[10px] text-amber-600 dark:text-amber-500 block mb-2 font-bold">★ Requisito previo obligatorio (con Carta de Intención)</span>
                </div>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQDcsdZn7SfvQ63Q49hP__NPAbrfZq2FxyobrNL75mYwtOI?e=O1CjxZ" 
                  text="Descargar Formato 0" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-emerald-800 dark:text-emerald-400 block mb-1">Formato 1 (Con Convenio)</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400/80 block mb-2 font-normal">Vía Convenio (Tramitación directa)</span>
                </div>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQB1FXZVisOcTbteFU9SrDZrAYDa7_dzRCEncypjov4tJQA?e=4my4jl" 
                  text="Descargar Formato 1" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-xl border border-blue-100 dark:border-blue-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-blue-800 dark:text-blue-400 block mb-1">Formato 2 (Carta de Intención)</span>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400/80 block mb-2 font-normal">Tramitar después del Formato 0</span>
                </div>
                <Enlace 
                  url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQCHSOK70m-yS41R-ZnXlxFOAbN706_Z3jW8y3F2evWp33c?e=ygBiZ7" 
                  text="Descargar Formato 2" 
                  inline={false} 
                  external={true} 
                  nuevo={true}
                  className="mt-1"
                />
              </div>
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
              Solicitar Asignación de Docente Tutor
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Póngase en contacto con el <strong>Responsable de Vinculación ({CONTACTOS.RESPONSABLE.NOMBRE})</strong> para solicitar formalmente la asignación de quién será el docente tutor o tutora que guiará el desarrollo de su práctica preprofesional. Este paso es un requisito indispensable para los registros posteriores.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            3
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Obtener un Número de Oficio
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solicite y obtenga un número de oficio único utilizando el sistema interno de la aplicación. Para este registro, recuerde que <strong>debe ingresar obligatoriamente el nombre del Docente Tutor</strong> asignado en el paso anterior.
            </p>
            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="/oficio" 
                text="Solicitar Número de Oficio" 
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
              Llenar Oficio de Solicitud de Docente Responsable
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Haciendo uso del número de oficio obtenido en el paso anterior, complete el oficio dirigido al docente responsable (<strong>Formato 3</strong>).
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-3 rounded-r-xl text-xs text-blue-900 dark:text-blue-300 mb-4 space-y-2 leading-relaxed">
              <span className="font-bold text-blue-800 dark:text-blue-400 block">🖨️ Instrucciones de Impresión (3 copias obligatorias):</span>
              <p className="mb-1">Deberá obtener <strong>tres (3) copias impresas</strong> de este formato, las cuales se distribuirán de la siguiente manera:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>1ra Copia:</strong> Se incluye en el conjunto documental que entregará en la Secretaría del Decanato junto al resto de la documentación y sus respectivos anexos.</li>
                <li><strong>2da Copia:</strong> Se entregará directamente al docente tutor o tutora asignado para su debido conocimiento y registro.</li>
                <li><strong>3ra Copia (Su Recibido):</strong> Servirá como su comprobante personal de respaldo. En esta única hoja deberá tomar y hacer firmar el <strong>recibido tanto de la Secretaría como del docente tutor</strong> de forma conjunta.</li>
              </ul>
            </div>

            <div className="max-w-xs text-xs font-semibold">
              <Enlace 
                url="https://uagrariaec-my.sharepoint.com/:w:/g/personal/mibarra_uagraria_edu_ec/IQAH6INecGnrTJsPoIsAZoQMAQUMOKJCXTfDx4_URZm5Quw?e=8rHuiE" 
                text="Descargar Formato 3" 
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
              Entregar Documentación al Decanato
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Entregue toda la documentación física a la Secretaría de Decanato (encargada: <span className="font-semibold text-gray-800 dark:text-white">{CONTACTOS.SECRETARIA.NOMBRE}</span>). Una vez revisada y procesada, recibirá la <span className="font-semibold">Carta de Inicio</span> formal debidamente firmada por el Decano.
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
              Obtener el Recibido de la Empresa
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Lleve la Carta de Inicio firmada por Decanato a la institución o empresa receptora y solicite que le pongan el sello y firma de <span className="font-semibold">recibido</span>.
            </p>
          </div>
        </div>

        {/* Step 7 */}
        <div className="relative pl-8 md:pl-10">
          <span className="absolute -left-4 md:-left-5 top-0.5 flex items-center justify-center w-8 h-8 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md shadow-green-500/20">
            7
          </span>
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-md shadow-gray-100/30 dark:shadow-none hover:shadow-lg transition-all">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Remitir Documentación por Correo Electrónico
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Escanee toda la documentación generada en los pasos anteriores (incluyendo obligatoriamente la Carta de Inicio con el sello de recibido de la empresa) y envíela por correo a:
            </p>
            <div className="inline-block bg-gray-50 dark:bg-gray-800/60 px-3 py-2 rounded-xl border border-gray-100 dark:border-gray-700/60 font-mono text-xs font-semibold text-green-600 dark:text-green-400">
              {CONTACTOS.RESPONSABLE.EMAIL}
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
            <span className="font-semibold text-gray-900 dark:text-white">Custodia Física:</span> El custodio definitivo de la documentación física original es el estudiante, quien deberá salvaguardarla de manera responsable hasta la culminación total de sus prácticas preprofesionales.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-white">Plazo de Envío:</span> La documentación escaneada debe ser enviada al correo del docente responsable (<span className="font-mono text-xs">{CONTACTOS.RESPONSABLE.EMAIL}</span>) <span className="font-semibold text-amber-800 dark:text-amber-400">como máximo hasta el día del comienzo (primer día)</span> de la práctica preprofesional planificada.
          </li>
        </ul>
      </div>
    </div>
  );
}
