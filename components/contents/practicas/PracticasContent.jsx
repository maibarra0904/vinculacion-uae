import Enlace from "@/components/ui/Enlace";

export default function PracticasContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Prácticas Preprofesionales (PP)
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Los estudiantes deben realizar tres (3) prácticas preprofesionales, una en tercer, otra en cuarto y la última en su quinto año de estudios. Cada práctica preprofesional debe cumplir con las siguientes etapas:
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {/* Step 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">1</span>
            Documentos de Inicio
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            Es la primera etapa que debe cumplirse. Se indican la empresa, docente tutor, fechas y cronograma. Puede o no requerir convenio. Debe pasar por un proceso aprobatorio.
          </p>
          <div className="border-t pt-4 mt-auto">
            <Enlace url="/practica/inicio" text="Pasos para Iniciar" inline={false} className="w-full" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">2</span>
            Ejecución
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            Una vez autorizado el inicio por el Decanato se puede empezar la práctica. Se requiere obligatoriamente tomar dos evidencias fotográficas por cada día planificado con la aplicación GPS Map Camera.

          </p>
          <div className="border-t pt-4 mt-auto space-y-2">
            <Enlace 
              url="https://play.google.com/store/apps/details?id=com.gpsmapcamera.geotagginglocationonphoto" 
              text="Descargar para Android" 
              inline={false} 
              external={true} 
              nuevo={true} 
            />
            <Enlace 
              url="https://apps.apple.com/il/app/gps-map-camera-geotag-photos/id1503116917" 
              text="Descargar para iOS" 
              inline={false} 
              external={true} 
              nuevo={true} 
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">3</span>
            Informe Final
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            En esta etapa se presenta el informe de las actividades asociadas a la documentación de inicio, y cuáles fueron los resultados. Debe pasar por un proceso aprobatorio.
          </p>
          <div className="border-t pt-4 mt-auto">
            <Enlace url="/practica/informe" text="Pasos para elaborar Informe" inline={false} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
