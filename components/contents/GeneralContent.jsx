import Enlace from "@/components/ui/Enlace";

export default function GeneralContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Información General de Vinculación
      </h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Los estudiantes deben realizar una actividad de vinculación por <span className="font-bold">cada año de estudios</span>. Estas actividades se dividen en dos categorías principales:
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Labor Comunitaria */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-transform hover:-translate-y-1">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
             Labor Comunitaria Estudiantil
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
             Su objetivo fundamental es contribuir al desarrollo de la comunidad y promover el compromiso social de los estudiantes. Deben realizarse durante el <span className="font-bold text-gray-800 dark:text-gray-100">primer y segundo año de estudios</span> (72 horas por cada año).
          </p>
          <div className="border-t pt-4">
            <Enlace url="/labor" text="Ir a Labor Comunitaria" inline={false} className="w-full" />
          </div>
        </div>

        {/* Practicas Preprofesionales */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-transform hover:-translate-y-1">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
             Prácticas Preprofesionales
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
             Su objetivo es proporcionar una oportunidad para aplicar conocimientos en un entorno real y preparar para el futuro laboral. Debe realizarse de <span className="font-bold text-gray-800 dark:text-gray-100">tercero a quinto año</span> (80 horas por cada año).
          </p>
          <div className="border-t pt-4">
            <Enlace url="/practica" text="Ir a Prácticas Preprofesionales" inline={false} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
