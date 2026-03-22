import Enlace from "@/components/ui/Enlace";

export default function InicioHeader() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-2xl mb-8 border border-green-100 dark:border-green-900/50">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
        Pasos para Iniciar una Práctica Preprofesional
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        El procedimiento para gestionar la documentación de inicio del proyecto se resume en 2 pasos. Utilice la paginación para navegar entre ellos.
      </p>

      {/* Examples as quick links inside header for better access */}
      <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
        <div className="bg-white dark:bg-gray-800/80 p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="font-semibold block mb-1 text-gray-800 dark:text-white">Con Convenio:</span>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/Ec4jvOXjUBtLqLTcaA2tF0QBatL05w7dHFg8QdPkWRGcgA?e=UoNQKy" 
            text="Ver Ejemplo de Documentación de Inicio" 
            inline={true} 
            external={true} 
            nuevo={true} 
          />
        </div>
        <div className="bg-white dark:bg-gray-800/80 p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="font-semibold block mb-1 text-gray-800 dark:text-white">Con Carta de Intención:</span>
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/ERhGF0_GeZ5JjV0aCKlcGkoB4M9psk3spbqvUJQLztfnvw?e=OcHBiu" 
            text="Ver Ejemplo de Documentación de Inicio" 
            inline={true} 
            external={true} 
            nuevo={true} 
          />
        </div>
      </div>
    </div>
  );
}
