import Enlace from "@/components/ui/Enlace"
import Layout from "@/components/ui/Layout"

const LinkCard = ({ title, description, url, external = false, nuevo = false, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
    <div>
      <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
    <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
      <Enlace url={url} text="Acceder ahora" external={external} nuevo={nuevo} inline={false} />
    </div>
  </div>
)

const Otros = () => {
  return (
    <Layout>
      <div className="space-y-6 pb-10">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-8">
          Otras Solicitudes y Recursos
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {/* Card 1: Certificados */}
          <LinkCard 
            title="Certificados de Vinculación"
            description="Procesos para solicitar la rectificación por errores, entrega por pérdida en secretaría, robo, extravío o deterioro de certificados físicos."
            url="/otros/solicitudes"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75v11.25A2.25 2.25 0 006 18.75m3-14.25h6m-6 3h6" />
              </svg>
            }
          />

          {/* Card 2: Planificador de Fechas */}
          <LinkCard 
            title="Planificador de Fechas"
            description="Diseña y organiza la temporalidad de tu proyecto para cuadrar plazos perfectamente."
            url="https://planificadorfechasvinculacion.netlify.app/"
            external={true}
            nuevo={true}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 11.25h13.5A2.25 2.25 0 0121 11.25v7.5m-18 0h18" />
              </svg>
            }
          />

          {/* Card 3: VinculaBot */}
          <LinkCard 
            title="VinculaBot AI"
            description="Chatbot automatizado para formular y despejar cualquier duda en tiempo real acerca de tus procesos."
            url="/chat"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.85-.337 41.1 41.1 0 003.551-.115c1.58-.162 2.784-1.493 2.784-3.085v-2.112c0-1.6-1.204-2.933-2.784-3.095a40.894 40.894 0 00-11.834 0c-1.58.162-2.784 1.495-2.784 3.095v2.112z" />
              </svg>
            }
          />

          {/* Card 5: Gestión de Cambios */}
          <LinkCard 
            title="Gestión de Cambios en Proyectos"
            description="Formatos para retiro/adición de integrantes, cambios de cronograma o de tutor guía en labor comunitaria."
            url="/otros/cambios"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            }
          />
        </div>
      </div>
    </Layout>
  );
}

export default Otros;