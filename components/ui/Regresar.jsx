'use client'

const Regresar = () => {

    const handleGoBack = () => {
        // Verifica si hay un historial anterior
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // Redirige a la página principal
            window.location.href = '/'; // Cambia '/' por la ruta de tu página principal si es necesario
        }
    };
    return (
        <div className="flex justify-start mb-2">
        <div 
            className='flex justify-center items-center p-1 bg-white border border-gray-300 text-indigo-800 w-10 rounded-md hover:cursor-pointer'
            onClick={handleGoBack}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>

        </div>
        </div>
    )
}

export default Regresar