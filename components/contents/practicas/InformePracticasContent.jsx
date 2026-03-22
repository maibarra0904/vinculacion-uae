import Enlace from "@/components/ui/Enlace";
import { CONTACTOS } from "@/utils/constants";

export default function InformePracticasContent() {

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white border-b pb-4 mb-6">
        Pasos para elaborar el Informe Final de PP
      </h1>
      
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Habiendo tenido los vistos buenos en la ETAPA DE INICIO, y culminado el desarrollo de las Prácticas Preprofesionales, se tienen <span className="font-bold">28 días calendario</span> para cumplir con lo siguiente.
      </p>

      {/* Warning alert */}
      <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-xl text-sm flex items-start gap-3 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-600 dark:text-red-400">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 18.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <p className="text-gray-800 dark:text-gray-300 font-medium">
           ¡Atención!: En caso contrario, si no se cumple el plazo la práctica quedará <span className="underline decoration-red-500 font-bold text-red-600 dark:text-red-400">ANULADA</span>.
        </p>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg flex items-center gap-2 border border-gray-100 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.25c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
        </svg>
        <span>
          También puede revisar un{" "}
          <Enlace 
            url="https://uagrariaec-my.sharepoint.com/:b:/g/personal/mibarra_uagraria_edu_ec/IQDCmpdgFunhR5zqkkgNjeojAVhnzYmXlPtOJ2KRlWOg_-A?e=vHIjl0" 
            text="Ejemplo de informe aprobado" 
            inline={true} 
            external={true} 
            nuevo={true} 
          />{" "}
          para guiarse en su proceso.
        </span>
      </p>

      {/* Step List Card */}
      {/* Step List Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Step A */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">a. Informe de Prácticas</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            El estudiante debe gestionar el informe de practicas-cierre de la{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:f:/g/personal/mibarra_uagraria_edu_ec/EpPp-2chLy9OkJPXOH573e4B1ZFW0lg7WV_Y0fcb8aiGeA?e=j6vbGm" 
              text="Documentación habilitante" 
              inline={true} 
              external={true} 
              nuevo={true} 
            /> (formatos del 0 al 7) considerando las firmas y sellos correspondientes tanto del tutor como de parte de la empresa, evidencias fotográficas y documentación de inicio.
          </p>
        </div>

        {/* Step B */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">b. Oficio de Entrega</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Luego gestionará el oficio de entrega del informe (formato 8) de la misma{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:f:/g/personal/mibarra_uagraria_edu_ec/EpPp-2chLy9OkJPXOH573e4B1ZFW0lg7WV_Y0fcb8aiGeA?e=j6vbGm" 
              text="Documentación" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />. El tutor deberá revisar y <span className="underline">sumillar TODAS las páginas</span> para validar la revisión.
          </p>
        </div>

        {/* Step C */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">c. Solicitud de Oficio</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Gestionar el Oficio del informe (formato 9) de la{" "}
            <Enlace 
              url="https://uagrariaec-my.sharepoint.com/:f:/g/personal/mibarra_uagraria_edu_ec/EpPp-2chLy9OkJPXOH573e4B1ZFW0lg7WV_Y0fcb8aiGeA?e=j6vbGm" 
              text="Documentación" 
              inline={true} 
              external={true} 
              nuevo={true} 
            />{" "}
            para lo cual necesitará la{" "}
            <Enlace url="/oficio" text="Aplicación para solicitar número de Oficio" inline={true} />.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg text-xs mt-2 text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-amber-600 dark:text-amber-500">•</span> Colocar documentación en carpeta de color <span className="underline decoration-yellow-500 font-semibold text-yellow-600 dark:text-yellow-400">amarilla</span>: <span className="font-bold text-gray-800 dark:text-gray-200">(a)</span> Oficio Aprobación (formato 9 [<span className="italic">x2 copias</span>] y cédula [<span className="italic">x1 copia</span>]) <span className="font-bold text-gray-800 dark:text-gray-200">(b)</span> Oficio Tutor (formato 8) y <span className="font-bold text-gray-800 dark:text-gray-200">(c)</span> Informe con Anexos.
          </div>
        </div>

        {/* Step D */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">d. Firmas</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            El coordinador de carrera firma los oficios (2 copias del Formato 9) y el estudiante procede a entregar <span className="font-medium text-gray-900 dark:text-white">1 copia del formato 9</span> en Secretaría de Decanato ({CONTACTOS.SECRETARIA.NOMBRE}) y la otra para su <span className="font-semibold text-blue-600 dark:text-blue-400">recibido</span>. <span className="italic block mt-1 text-xs text-gray-500">(El estudiante se queda con la carpeta)</span>
          </p>
        </div>

        {/* Step E */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">e. Escanear y Enviar</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Escanear TODA esta documentación (el formato 9 con recibido) y enviarlo a <span className="font-semibold text-green-600 dark:text-green-400">{CONTACTOS.RESPONSABLE.EMAIL}</span> con copia (cc.) al correo de su tutor.
          </p>
        </div>

        {/* Step F */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm">
          <span className="text-sm font-bold text-green-500 block mb-1">f. Entrega Física</span>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Hacer la entrega de la carpeta física al responsable de vinculación ({CONTACTOS.RESPONSABLE.NOMBRE}).
          </p>
        </div>
      </div>

    </div>
  );
}
