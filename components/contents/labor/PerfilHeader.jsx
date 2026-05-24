import Enlace from "@/components/ui/Enlace";

export default function PerfilHeader() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-2xl mb-8 border border-green-100 dark:border-green-900/50">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
        Procedimiento para el perfil de la labor comunitaria
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Debe contar con un convenio aprobado para continuar y haber tenido el acercamiento en el lugar donde se harán las labores comunitarias. En este punto el estudiante debe tener la idea del tema del proyecto a realizar. 
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        Para concretar esa idea en caso que tenga dificultades para redactarla, se pone a disposición una{" "}
        <Enlace 
          url="/tema" 
          text="Aplicación para generar ideas de temas" 
          inline={true} 
          alternative="(nuevo)" 
        />.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
        También puede revisar un{" "}
        <Enlace 
          url="https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/Ee81ntrXu8NAtzSSDxOMkJQBEjMjMVX0H98hNFaVBh6r2Q?e=5NY6rl" 
          text="Ejemplo de un perfil aprobado" 
          inline={true} 
          external={true} 
          nuevo={true} 
        />{" "}
        para guiarse en su proceso.
      </p>
    </div>
  );
}
