'use client'
import { useEffect, useState } from "react";
// import { useMyContext } from "../context/myContext"; // No se usa en este componente, se puede quitar si no es necesario
// import Alerta from "./Alerta"; // Asegúrate de que este componente exista y funcione correctamente
// import { enterKey } from "@/utils/enterKey"; // Asegúrate de que esta utilidad exista y funcione correctamente
// import Regresar from "./Regresar"; // Asegúrate de que este componente exista y funcione correctamente

// Componente de Alerta (simplificado para este ejemplo, asegúrate de usar tu implementación real)
const Alerta = ({ msg }) => {
    return (
        <div className="bg-red-500 text-white p-3 rounded-md text-center mb-4">
            {msg}
        </div>
    );
};

// Función enterKey (simplificada para este ejemplo, asegúrate de usar tu implementación real)
const enterKey = (event, buttonId) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Previene el envío del formulario si está dentro de uno
        document.getElementById(buttonId)?.click();
    }
};


const Tema = () => {
    // Estados para los inputs del formulario
    const [tema, guardaTema] = useState('');
    const [beneficiarios, setBeneficiarios] = useState('');
    const [lugar, guardaLugar] = useState('');

    // Estado para las alertas de validación
    const [alerta, setAlerta] = useState({});

    // Estado para el indicador de carga
    const [loading, setLoading] = useState(false);
    // Estado para los puntos del indicador de carga (Generando...)
    const [puntos, setPuntos] = useState(0);

    // Estado para la salida de la idea generada
    const [output, setOutput] = useState('');

    // Estados para el control de límite de solicitudes (rate limiting)
    const [requestCount, setRequestCount] = useState(0);
    const [firstRequestTime, setFirstRequestTime] = useState(0);
    // Nuevo estado para controlar si se puede generar una idea (no está limitado)
    const [canGenerate, setCanGenerate] = useState(true);

    // Constantes para el límite de solicitudes
    const MAX_REQUESTS_PER_MINUTE = 3;
    const ONE_MINUTE_IN_MS = 60 * 1000; // 60 segundos * 1000 ms/segundo

    // Clave API de Groq (se asume que se carga desde una variable de entorno)
    // En un entorno de Canvas, esta clave se inyectaría automáticamente si se deja vacía.
    const apiKey = process.env.NEXT_PUBLIC_API_GROQ_KEY; // Si estás usando Groq, esta clave debe ser tu clave de Groq API.
                       // En un entorno de Canvas, si la dejas vacía, se inyectará una clave por defecto.

    // Efecto para el indicador de carga animado
    useEffect(() => {
        // Iniciar el intervalo para animar los puntos de carga
        const intervalId = setInterval(() => {
            setPuntos((prev) => (prev + 1) % 4); // Alterna entre 0, 1, 2 y 3 puntos
        }, 500); // Actualiza cada 500 ms

        // Limpieza al desmontar el componente para evitar fugas de memoria
        return () => clearInterval(intervalId);
    }, []);

    // Efecto para inicializar y mantener actualizado el estado del límite de solicitudes desde localStorage
    useEffect(() => {
        const checkRateLimitStatus = () => {
            const storedCount = localStorage.getItem('requestCount');
            const storedTime = localStorage.getItem('firstRequestTime');

            const currentTime = Date.now();

            let currentCountFromStorage = storedCount ? parseInt(storedCount, 10) : 0;
            let firstTimeFromStorage = storedTime ? parseInt(storedTime, 10) : 0;

            // Si el tiempo almacenado es de hace más de un minuto, reinicia el contador
            if (firstTimeFromStorage === 0 || (currentTime - firstTimeFromStorage > ONE_MINUTE_IN_MS)) {
                setRequestCount(0);
                setFirstRequestTime(0);
                localStorage.removeItem('requestCount');
                localStorage.removeItem('firstRequestTime');
                setCanGenerate(true); // Se puede generar de nuevo
            } else {
                // Si está dentro del minuto, carga los valores y verifica si se ha excedido el límite
                setRequestCount(currentCountFromStorage);
                setFirstRequestTime(firstTimeFromStorage);
                if (currentCountFromStorage >= MAX_REQUESTS_PER_MINUTE) {
                    setCanGenerate(false); // Límite alcanzado
                } else {
                    setCanGenerate(true); // Todavía se puede generar
                }
            }
        };

        // Ejecuta la verificación inmediatamente al montar el componente
        checkRateLimitStatus();

        // Configura un intervalo para verificar el estado del límite cada segundo
        const intervalId = setInterval(checkRateLimitStatus, 1000);

        // Limpieza al desmontar el componente
        return () => clearInterval(intervalId);
    }, []); // Se ejecuta solo una vez al montar y luego el intervalo se encarga

    // Manejadores de cambio para los inputs del formulario
    const handleChangeTema = (e) => {
        guardaTema(e.target.value);
    };
    const handleChangeLugar = (e) => {
        guardaLugar(e.target.value);
    };
    const handleChangeBeneficiarios = (e) => {
        setBeneficiarios(e.target.value);
    };

    // Manejador para el envío del formulario
    const handleSubmit = async () => {
        // Validación de campos obligatorios
        if (tema === '' || lugar === '') {
            setAlerta({ msg: 'Todos los campos son obligatorios' });
            setTimeout(() => {
                setAlerta({});
            }, 2000); // La alerta desaparece después de 2 segundos
            return;
        }

        const currentTime = Date.now();

        // Lógica de límite de solicitudes (verificación inmediata antes de la llamada a la API)
        let currentCount = requestCount;
        let currentFirstTime = firstRequestTime;

        // Si el tiempo de la primera solicitud es de hace más de un minuto, reinicia el contador
        if (currentFirstTime === 0 || (currentTime - currentFirstTime > ONE_MINUTE_IN_MS)) {
            currentCount = 0;
            currentFirstTime = currentTime; // Establece el nuevo tiempo de inicio del minuto
            setCanGenerate(true); // Si se reinicia, se puede generar
        }

        // Verifica si se ha excedido el límite
        if (currentCount >= MAX_REQUESTS_PER_MINUTE) {
            const timeLeft = Math.ceil((ONE_MINUTE_IN_MS - (currentTime - currentFirstTime)) / 1000);
            setAlerta({ msg: `Has alcanzado el límite de ${MAX_REQUESTS_PER_MINUTE} ideas por minuto. Por favor, espera ${timeLeft} segundos.` });
            setTimeout(() => {
                setAlerta({});
            }, 3000);
            setCanGenerate(false); // Asegura que el estado de generación esté en falso
            return; // Detiene la ejecución si se excede el límite
        }

        setLoading(true); // Activa el indicador de carga
        setOutput(''); // Limpia la salida anterior

        try {
            // Construye el prompt para el modelo de IA
            const prompt = `Muestra una idea de tema de capacitación que contenga sin excepción todas las siguientes temáticas: ${tema} incluyendo el siguiente lugar donde se realizará el proyecto: ${lugar} y también el hecho que la capacitación está dirigida a: ${beneficiarios}, por ultimo la ideas debe decir qué se va a hacer y para qué se va a hacer en el mismo tema, quita comillas, quita asteriscos (*), dos puntos (:) u otros simbolos especiales y dedicate solo a mostrar el tema en un solo parrafo y ninguna cosa mas. Repito no usar (:) sino escribir en un solo parrafo. La extension maxima del tema debe ser de 20 palabras.`;

            // Configuración de la llamada a la API de Groq (Llama 3)
            const payload = {
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                model: "llama-3.1-8b-instant", // Modelo Llama 3 de Groq
            };

            // URL de la API de Groq
            const apiUrl = "/api/groq";

            // Realiza la llamada a la API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`, // Usa la clave API de Groq
                },
                body: JSON.stringify(payload),
            });

            // Verifica si la respuesta fue exitosa
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error de la API: ${response.status} - ${errorData.message || 'Error desconocido'}`);
            }

            const result = await response.json();

            // Extrae el texto generado de la respuesta de Groq
            if (result.choices && result.choices.length > 0 && result.choices[0].message && result.choices[0].message.content) {
                setOutput(result.choices[0].message.content);

                // Actualiza el contador y el tiempo después de una solicitud exitosa
                const newCount = currentCount + 1;
                setRequestCount(newCount);
                setFirstRequestTime(currentFirstTime); // Mantiene el tiempo de la primera solicitud de este minuto
                localStorage.setItem('requestCount', newCount.toString());
                localStorage.setItem('firstRequestTime', currentFirstTime.toString());

                // Si con esta solicitud se alcanza el límite, desactiva la generación
                if (newCount >= MAX_REQUESTS_PER_MINUTE) {
                    setCanGenerate(false);
                }

            } else {
                setOutput('No se pudo generar una idea. Inténtalo de nuevo.');
            }

        } catch (error) {
            console.error("Error al generar la idea:", error);
            setAlerta({ msg: 'Hubo un error al generar la idea. Por favor, inténtalo de nuevo.' });
            setTimeout(() => {
                setAlerta({});
            }, 3000);
            setOutput('');
        } finally {
            setLoading(false); // Desactiva el indicador de carga
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="mb-5 text-2xl font-bold text-gray-800">App: Idea de Tema de Proyecto de Labor Comunitaria con IA</h1>
                {/* Muestra la alerta si hay un mensaje */}
                {alerta?.msg && <Alerta msg={alerta?.msg} />}

                {/* Formulario de entrada de datos */}
                <form
                    className="min-w-70 bg-amber-200 p-5 rounded-lg m-2 w-full max-w-md shadow-lg"
                >
                    <div>
                        <div className="mb-4">
                            <label className="text-indigo-600 text-sm italic mb-1 block" htmlFor="tema">
                                <span className="text-red-500">Nota Aclaratoria:</span> Esta app sirve para cuando el estudiante ha realizado el diagnóstico del proyecto, es decir, tiene clara la herramienta que capacitará, donde lo hará y a quién va dirigido pero quiere ideas para la redacción del tema de labor comunitaria en el perfil del proyecto a presentar.
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-800 font-semibold mb-1 block" htmlFor="tema">
                                Temática:
                            </label>
                            <input
                                id="tema"
                                type="text"
                                className="mt-2 text-gray-800 block w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Ej: Word, Excel, Correo electrónico, etc."
                                name="tema"
                                value={tema}
                                onChange={handleChangeTema}
                                onKeyDown={(event) => enterKey(event, "generarButton")}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-800 font-semibold mb-1 block" htmlFor="lugar">
                                Lugar:
                            </label>
                            <input
                                id="lugar"
                                type="text"
                                className="mt-2 text-gray-800 block w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Nombre de empresa u organización"
                                name="lugar"
                                value={lugar}
                                onChange={handleChangeLugar}
                                maxLength={30}
                                onKeyDown={(event) => enterKey(event, "generarButton")}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-gray-800 font-semibold mb-1 block" htmlFor="beneficiarios">
                                Beneficiarios:
                            </label>
                            <input
                                id="beneficiarios"
                                type="text"
                                className="mt-2 text-gray-800 block w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Ej. Docentes, pobladores, estudiantes, etc."
                                name="beneficiarios"
                                value={beneficiarios}
                                onChange={handleChangeBeneficiarios}
                                maxLength={30}
                                onKeyDown={(event) => enterKey(event, "generarButton")}
                            />
                        </div>

                        <div className="flex">
                            <button
                                type="button"
                                id="generarButton"
                                className="flex justify-center items-center mt-2 w-full p-3 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={handleSubmit}
                                disabled={loading || !canGenerate} // Deshabilita si está cargando o si no se puede generar
                            >
                                {loading ? `Generando${'.'.repeat(puntos)}` : 'Generar Idea'}
                            </button>
                        </div>

                        <p className="mt-4 text-indigo-600 text-sm italic text-center">
                            <span className="text-red-500">Pd.-</span>
                            {canGenerate ? (
                                "Puedes generar varias ideas si deseas"
                            ) : (
                                "Se han completado el máximo de intentos, debes esperar un minuto para generar otras ideas"
                            )}
                        </p>
                    </div>
                </form>

                {/* Formulario de salida de la idea generada */}
                <form
                    className="min-w-70 bg-indigo-200 p-5 rounded-lg m-2 w-full max-w-md shadow-lg mt-6"
                >
                    <div>
                        <div className="flex flex-col mb-4">
                            <label className="text-gray-800 font-semibold mb-1 block" htmlFor="ideaOutput">
                                Idea:
                            </label>
                            <textarea
                                id="ideaOutput"
                                value={output}
                                readOnly
                                className="border border-gray-300 rounded-md p-3 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 text-base"
                                rows={6} // Aumenta las filas iniciales para mejor visibilidad
                                placeholder="Aquí se presentará la idea generada por la IA..."
                                // La altura se ajustará automáticamente con resize-none y un número de rows adecuado
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Tema;