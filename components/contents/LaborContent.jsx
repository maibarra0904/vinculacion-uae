import Enlace from "@/components/ui/Enlace";

export default function LaborContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Labor Comunitaria Estudiantil (LCE)
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Los estudiantes deben realizar dos (2) labores comunitarias, una en su primer y otra en su segundo año de estudios. Cada labor comunitaria debe cumplir con las siguientes etapas:
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {/* Step 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">1</span>
            Convenio
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            Un requisito para hacer una labor comunitaria estudiantil es contar con un convenio aprobado, sin este requisito no puede iniciar el proceso.
          </p>
          <div className="border-t pt-4 mt-auto">
            <Enlace url="/convenio" text="Ver Información" inline={false} className="w-full" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">2</span>
            Perfil del Proyecto
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            Es la primera etapa que debe cumplirse. Como requisito deberá contar con un convenio aprobado. Se indican la empresa, integrantes (máx 4), actividades y docente tutor.
          </p>
          <div className="border-t pt-4 mt-auto">
            <Enlace url="/labor/perfil" text="Pasos para elaborar Perfil" inline={false} className="w-full" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">3</span>
            Informe Final
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            En esta etapa se presenta el informe de las actividades indicadas en el perfil y cuáles fueron los resultados. Debe pasar por un proceso aprobatorio.
          </p>
          <div className="border-t pt-4 mt-auto">
            <Enlace url="/labor/informe" text="Pasos para elaborar Informe" inline={false} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
