'use client'
import { useEffect, useState, useRef } from "react"
import { useMyContext } from "../context/myContext"
import Alerta from "./Alerta"
import { enterKey } from "@/utils/enterKey"
import Regresar from "./Regresar";

// Contexto de conocimiento actualizado sobre proyectos de vinculación comunitaria
const KNOWLEDGE_CONTEXT = `
Eres un asistente especializado en proyectos de vinculación comunitaria de la Universidad Agraria del Ecuador. Tu conocimiento incluye:

ACTIVIDADES DE VINCULACIÓN OBLIGATORIAS:
- Los estudiantes deben realizar una actividad de vinculación por cada año de estudios
- LABOR COMUNITARIA ESTUDIANTIL (LCE): Primer y segundo año (72 horas por cada año)
- PRÁCTICAS PREPROFESIONALES (PP): Tercero, cuarto y quinto año (80 horas por cada año)

LABOR COMUNITARIA ESTUDIANTIL (LCE):
- Objetivo: Contribuir al desarrollo de la comunidad y promover compromiso social
- Requisitos: Convenio aprobado (obligatorio), máximo 4 estudiantes por grupo
- Etapas: 1) PERFIL DEL PROYECTO (requiere convenio), 2) INFORME FINAL
- Las labores comunitarias pueden ser individuales (un solo estudiante) o ser grupales (máximo 4 estudiantes)
- El plazo para la aprobación del informe final es de 28 días calendario después de la finalización del último día programado de la actividad.
- De acuerdo a la reglamentación interna de la facultad de ciencias agrarias, no se puede arrastrar más de una labor comunitaria, por tanto, debe hacérsele o en el año en curso o máximo el siguiente año. Si no se la hace oportunamente, pueden existir problemas de matriculación o incluso su denegación.

PROCESO DE PERFIL DE LABOR COMUNITARIA ESTUDIANTIL (LCE):
PASO 1:
- Solicitar número de oficio (Motivo: PASO 1 - PERFIL LC)
- Llenar SOLICITUD PARA REALIZAR LA LCE con adjuntos
- Gestionar CARTA DE AUTORIZACIÓN de la entidad beneficiaria
- Entregar a Secretaría de Decanato (Lcda. Jahely Mora)

PASO 2:
- Contactar Responsable de Vinculación (Ing. Mario Ibarra) para asignación de tutor
- Solicitar segundo número de oficio (Motivo: PASO 2 - PERFIL LC)
- Llenar OFICIO DE ASIGNACIÓN DE DOCENTE TUTOR (duplicado)
- Firmas: Responsable Vinculación + Coordinador de Carrera (Ing. Néstor Vera)
- Llenar CARTA DE COMPROMISO del docente guía
- Elaborar CARÁTULA y FORMATO DE PERFIL con tutor
- Llenar CARTA DE PRESENTACIÓN DE PERFIL
- Tutor revisa y llena LISTA DE CHEQUEO PARA REVISIÓN DEL PERFIL
- Carpeta AMARILLA ordenada: Carta presentación, oficio asignación, carta compromiso, carátula, formato perfil, documentos paso 1
- Revisión final Responsable Vinculación
- Entrega en Secretaría Decanato o Departamento Labor Comunitaria Guayaquil

INFORME FINAL DE LABOR COMUNITARIA ESTUDIANTIL (LCE):
- Llenar FORMATOS DE INFORME junto con CARÁTULA
- Adjuntar copia del OFICIO DEL PERFIL APROBADO (llegó por correo)
- Carpeta amarilla con vincha plástica en orden establecido
- Tutor revisa y sumilla TODAS las páginas
- Firma Responsable Vinculación (duplicado para recibido)
- Entrega a Secretaría Decanato (Lcda. Jahely Mora) con recibido
- Eventualidades: SOLICITUD PARA ANULACIÓN, SOLICITUD DE RETIRO, SOLICITUD DE MODIFICACIÓN

PRÁCTICAS PREPROFESIONALES (PP):
- Las practicas preprofesionales son individuales, NO pueden hacerse en grupo.
- Tres prácticas: una en tercer, cuarto y quinto año
- Etapas: 1) DOCUMENTOS DE INICIO, 2) EJECUCIÓN, 3) INFORME FINAL
- Convenio opcional (puede usar carta de intención)
- Evidencias obligatorias: 2 fotos por día con GPS Map Camera
- De acuerdo a la reglamentación interna de la Facultad de Ciencias Agrarias, no se puede arrastrar más de una labor comunitaria, por tanto, debe hacérsele o en el año en curso o máximo el siguiente año. Si no se la hace oportunamente, pueden existir problemas de matriculación o incluso su denegación.

PROCESO DOCUMENTOS INICIO DE PRACTICAS PREPROFESIONALES (PP):
PASO 1:
- Elegir: Convenio existente/nuevo O Carta de Intención
- Si carta intención: firmar con Responsable Vinculación, tomar recibido empresa
- Llenar SOLICITUD CON CONVENIO o SOLICITUD CON CARTA DE INTENCIÓN
- Usar APLICACIÓN PLANIFICAR FECHAS DE VINCULACIÓN
- Solicitar número oficio (Motivo: PASO 1 - INICIO PP)
- Llenar OFICIO DE APERTURA con firma Responsable Vinculación
- Obtener HISTORIAL DE MATRICULACIÓN
- Entregar a Secretaría Decanato (Lcda. Jahely Mora)

PASO 2 PP:
- Solicitar tutor al Ing. Mario Ibarra
- Solicitar nuevo número oficio (Motivo: PASO 2 - INICIO PP)
- Llenar OFICIO DE PEDIDO A DECANO
- Entregar documentación a Secretaría Decanato
- Recibir CARTA DE INICIO del Decano (2 copias originales)
- Entregar una copia a empresa, otra con recibido del representante legal
- Escanear y enviar al correo mibarra@uagraria.edu.ec
- Proceder con inicio en fecha programada

INFORME FINAL DE PRACTICAS PREPROFESIONALES (PP):
- Plazo para la entrega del informe final luego de haber terminado el último día programado de las practicas preprofesionales: 28 días calendario (sino queda ANULADA)
- Llenar formatos de documentación disponibles en este sitio en el apartado correspondiente
- Tutor sumilla todas las páginas
- Carpeta amarilla con documentación de inicio
- Revisión Responsable Vinculación
- Escanear y enviar por correo (asunto: "Informe de Practicas Preprofesionales")
- Llenar formato 8 (solicitar número oficio: INFORME PP)
- 2 copias formato 8: una a Secretaría Decanato + cédula, otra para recibido
- Enviar por correo formato 8 con recibido (asunto: "Aprobación de práctica preprofesional") cc al tutor
- Entrega física al Responsable Vinculación

CERTIFICADO DE DESGLOSE (Para egresados):
- Requisito para graduación
- Certifica realización de todas las actividades de vinculación
- Proceso: 1) SOLICITUD DE ESTUDIANTE, 2) Evidencias (oficios aprobados LC/PP), 3) APLICACIÓN GENERAR CERTIFICADO, 4) Especie valorada, 5) Firmas: estudiante, Responsable Vinculación, Decano, Secretario CCAA

CONVENIOS:
- Acuerdo entre UAE y empresa/organización beneficiaria
- En labor comunitaria es un Requisito obligatorio
- En Práctica Preprofesional es opcional
- Opciones en caso de prácticas preprofesionales: A) Tomar convenio existente vigente, B) Gestionar nuevo convenio
- Matrices: CONVENIOS DE LABORES COMUNITARIAS / CONVENIOS DE PRÁCTICAS PREPROFESIONALES
- Nuevo convenio: Formato firmado por representante legal + cédula + RUC
- Entrega LC: Departamento Labor Comunitaria Guayaquil
- Entrega PP: Secretaría Decanato Milagro

RETRASOS
- Debe de hacer una solicitud de modificación del cronograma al Responsable de Vinculación (Ing. Mario Ibarra).

BENEFICIARIOS
- En caso de labor comunitaria se debe acreditar un mínimo de 10 beneficiarios directos. Si por alguna razón van menos de 8 beneficiarios debe solicitarse la anulación del proyecto. En esta misma aplicación se encuentra el modelo de la solicitud.

SOLICITUDES ESPECIALES
- Se pueden hacer labores comunitarias o practicas preprofesionales hasta por dos periodos consecutivos.
- Cuando se solicite realizar labores comunitarias o practicas preprofesionales por dos periodos, puede ser por atraso y normal, o normal y adelanto.
- Si se puede hacer una practica o labor comunitaria como adelanto.
- En el caso de practicas preprofesionales no se puede adelantar más de 1 periodo académico, es decir, no se puede optar por hacer 2 practicas como adelanto.

PERSONAL CLAVE:
- Responsable de Vinculación de Carrera de Computación en Milagro: Ing. Mario Ibarra (mibarra@uagraria.edu.ec)
- Secretaría Decanato: Lcda. Jahely Mora
- Coordinador de Carrera de Computación: Ing. Paola Grijalva
- Decano de la Facultad de Ciencias Agrarias: Ing. Ahmed El Salous

APLICACIONES DISPONIBLES:
- Solicitar número de oficio
- Planificar fechas de vinculación
- Generar certificado de desglose
- Generar ideas de temas de proyectos (disponible en esta plataforma)

DIRECTRICES PARA RESPUESTAS:
- Usa un tono amigable y profesional
- Proporciona información específica y procedimientos claros
- Considera el contexto académico y normativo de la UAE
- Enfatiza los requisitos obligatorios y documentación necesaria
- Incluye personas responsables y lugares de entrega
- Menciona plazos y consecuencias de incumplimiento
- Responde de manera conversacional y educativa
- Limita las respuestas a máximo 200 palabras
`;

const ChatBotGroq = () => {
    // Estados para el chat
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [puntos, setPuntos] = useState(0);
    const [alerta, setAlerta] = useState({});
    
    // Control de límite de solicitudes
    const [requestCount, setRequestCount] = useState(0);
    const [firstRequestTime, setFirstRequestTime] = useState(0);
    const [canGenerate, setCanGenerate] = useState(true);
    const [timeUntilReset, setTimeUntilReset] = useState(0);
    
    const MAX_REQUESTS_PER_MINUTE = 10;
    const ONE_MINUTE_IN_MS = 60 * 1000;
    
    // Referencias para scroll automático
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);
    
    // Configuración de Groq API
    const apiKey = process.env.NEXT_PUBLIC_API_GROQ_KEY;

    // Efecto para scroll automático al final del chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Efecto para inicializar el mensaje de bienvenida en el cliente
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    type: 'bot',
                    content: '¡Hola! Soy tu asistente especializado en proyectos de vinculación comunitaria de la UAE. Puedo ayudarte con procedimientos completos de LC y PP, informes finales, certificado de desglose, documentación necesaria, convenios, y orientación paso a paso. ¿En qué puedo ayudarte hoy?',
                    timestamp: new Date()
                }
            ]);
        }
    }, []);

    // Efecto para el indicador de carga animado
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPuntos((prev) => (prev + 1) % 4);
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    // Efecto para controlar límite de solicitudes y countdown
    useEffect(() => {
        const checkRateLimitStatus = () => {
            const storedCount = localStorage.getItem('chatGroqRequestCount');
            const storedTime = localStorage.getItem('chatGroqFirstRequestTime');
            const currentTime = Date.now();

            let currentCountFromStorage = storedCount ? parseInt(storedCount, 10) : 0;
            let firstTimeFromStorage = storedTime ? parseInt(storedTime, 10) : 0;

            if (firstTimeFromStorage === 0 || (currentTime - firstTimeFromStorage > ONE_MINUTE_IN_MS)) {
                setRequestCount(0);
                setFirstRequestTime(0);
                setTimeUntilReset(0);
                localStorage.removeItem('chatGroqRequestCount');
                localStorage.removeItem('chatGroqFirstRequestTime');
                setCanGenerate(true);
            } else {
                setRequestCount(currentCountFromStorage);
                setFirstRequestTime(firstTimeFromStorage);
                const timeLeft = Math.ceil((ONE_MINUTE_IN_MS - (currentTime - firstTimeFromStorage)) / 1000);
                setTimeUntilReset(timeLeft);
                setCanGenerate(currentCountFromStorage < MAX_REQUESTS_PER_MINUTE);
            }
        };

        checkRateLimitStatus();
        const intervalId = setInterval(checkRateLimitStatus, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Función para enviar mensaje con Groq API
    const handleSendMessage = async () => {
        if (!userInput.trim()) {
            setAlerta({ msg: 'Por favor, escribe un mensaje', type: 'error' });
            setTimeout(() => setAlerta({}), 2000);
            return;
        }

        if (!apiKey) {
            setAlerta({ msg: 'Error: API key de Groq no configurada. Verifica tu archivo .env.local', type: 'error' });
            setTimeout(() => setAlerta({}), 4000);
            return;
        }

        const currentTime = Date.now();
        let currentCount = requestCount;
        let currentFirstTime = firstRequestTime;

        if (currentFirstTime === 0 || (currentTime - currentFirstTime > ONE_MINUTE_IN_MS)) {
            currentCount = 0;
            currentFirstTime = currentTime;
            setCanGenerate(true);
        }

        if (currentCount >= MAX_REQUESTS_PER_MINUTE) {
            const timeLeft = Math.ceil((ONE_MINUTE_IN_MS - (currentTime - currentFirstTime)) / 1000);
            setAlerta({ 
                msg: `Has alcanzado el límite de ${MAX_REQUESTS_PER_MINUTE} mensajes por minuto. Podrás continuar chateando en ${timeLeft} segundos.`,
                type: 'error'
            });
            setTimeout(() => setAlerta({}), 4000);
            return;
        }

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: userInput,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setLoading(true);

        try {
            // Construir el contexto de la conversación
            const conversationHistory = messages.slice(-6).map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.content
            }));

            const systemPrompt = `${KNOWLEDGE_CONTEXT}

HISTORIAL DE CONVERSACIÓN:
${conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

CONSULTA ACTUAL DEL USUARIO: ${userInput}

INSTRUCCIONES:
- Responde de manera conversacional y útil
- Si el usuario pregunta sobre procedimientos, explica los pasos detalladamente
- Si necesita información sobre documentos, especifica los formatos exactos
- Si solicita orientación sobre convenios, explica las opciones disponibles
- Mantén el enfoque en procesos oficiales de la UAE
- Incluye nombres de responsables y lugares de entrega cuando sea relevante
- Usa un tono amigable y profesional

Respuesta:`;

            // Configuración de la llamada a la API de Groq
            const payload = {
                messages: [
                    {
                        role: "user",
                        content: systemPrompt,
                    },
                ],
                model: "llama-3.1-8b-instant", // Modelo Llama 3 de Groq
                max_tokens: 300,
                temperature: 0.7,
            };

            // Usar fetch para llamar a Groq API
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error de la API: ${response.status} - ${errorData.error?.message || 'Error desconocido'}`);
            }

            const result = await response.json();

            if (result.choices && result.choices.length > 0 && result.choices[0].message?.content) {
                const botMessage = {
                    id: Date.now() + 1,
                    type: 'bot',
                    content: result.choices[0].message.content.trim(),
                    timestamp: new Date()
                };

                setMessages(prev => [...prev, botMessage]);

                // Actualizar contador de solicitudes
                const newCount = currentCount + 1;
                setRequestCount(newCount);
                setFirstRequestTime(currentFirstTime);
                localStorage.setItem('chatGroqRequestCount', newCount.toString());
                localStorage.setItem('chatGroqFirstRequestTime', currentFirstTime.toString());

                if (newCount >= MAX_REQUESTS_PER_MINUTE) {
                    setCanGenerate(false);
                }
            } else {
                throw new Error('No se pudo generar una respuesta');
            }

        } catch (error) {
            console.error("Error al generar respuesta:", error);
            const errorMessage = {
                id: Date.now() + 1,
                type: 'bot',
                content: 'Disculpa, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
            
            setAlerta({ msg: 'Error al conectar con el asistente. Inténtalo de nuevo.', type: 'error' });
            setTimeout(() => setAlerta({}), 3000);
        } finally {
            setLoading(false);
        }
    };

    // Manejar Enter para enviar mensaje
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Limpiar chat
    const clearChat = () => {
        setMessages([
            {
                id: Date.now(),
                type: 'bot',
                content: '¡Hola! Soy tu asistente especializado en proyectos de vinculación comunitaria de la UAE. Puedo ayudarte con todo el proceso completo: perfiles, informes, certificado de desglose y más. ¿En qué puedo ayudarte hoy?',
                timestamp: new Date()
            }
        ]);
    };

    return (
        <>
            <Regresar />
            <div className="flex flex-col justify-center items-center p-4 max-w-4xl mx-auto">
                <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Header del chatbot */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-xl font-bold">VinculaBot</h1>
                                <p className="text-sm opacity-90">Asistente especializado para la Vinculación Computación Milagro</p>
                            </div>
                            <button
                                onClick={clearChat}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-md text-sm transition-colors"
                            >
                                Limpiar Chat
                            </button>
                        </div>
                    </div>

                    {/* Alertas */}
                    {alerta?.msg && (
                        <div className="p-4">
                            <Alerta msg={alerta.msg} err={alerta.type === 'error'} />
                        </div>
                    )}

                    {/* Área de mensajes */}
                    <div 
                        ref={chatContainerRef}
                        className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50"
                    >
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                        message.type === 'user'
                                            ? 'bg-green-600'
                                            : 'bg-white shadow-md border'
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap text-black">{message.content}</p>
                                    <span className="text-xs opacity-70 mt-1 block text-black">
                                        {message.timestamp.toLocaleTimeString('es-ES', { 
                                            hour: '2-digit', 
                                            minute: '2-digit',
                                            hour12: false 
                                        })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-white shadow-md border px-4 py-2 rounded-lg">
                                    <p className="text-sm text-black">Escribiendo{'.'.repeat(puntos)}</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Área de entrada de texto */}
                    <div className="p-4 border-t bg-white">
                        <div className="flex space-x-2">
                            <textarea
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Pregúntame sobre procedimientos LC/PP, informes finales, certificado de desglose, documentos, convenios..."
                                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-black"
                                rows="2"
                                disabled={loading || !canGenerate}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={loading || !canGenerate || !userInput.trim()}
                                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                                    !canGenerate 
                                        ? 'bg-red-500 text-white cursor-not-allowed opacity-75 hover:bg-red-600' 
                                        : loading || !userInput.trim()
                                        ? 'bg-gray-400 text-white cursor-not-allowed opacity-50'
                                        : 'bg-green-600 text-white hover:bg-green-700'
                                }`}
                            >
                                {loading ? (
                                    'Enviando...'
                                ) : !canGenerate ? (
                                    `Espera ${timeUntilReset}s`
                                ) : (
                                    'Enviar'
                                )}
                            </button>
                        </div>
                        
                        {/* Información del límite */}
                        <div className="mt-2 text-xs text-center">
                            {canGenerate ? (
                                <span className="text-gray-500">
                                    {requestCount}/{MAX_REQUESTS_PER_MINUTE} mensajes enviados este minuto
                                </span>
                            ) : (
                                <div className="space-y-1">
                                    <span className="text-red-600 font-medium">
                                        ⏳ Límite alcanzado: {requestCount}/{MAX_REQUESTS_PER_MINUTE} mensajes
                                    </span>
                                    <div className="text-orange-600">
                                        Podrás continuar en {timeUntilReset} segundos
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sugerencias rápidas */}
                    <div className="p-4 bg-gray-100 border-t">
                        <p className="text-sm font-medium text-black mb-2">Sugerencias rápidas:</p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "¿Cómo hago el informe final de Labor Comunitaria?",
                                "¿Cuáles son los pasos para el PASO 2 de PP?",
                                "¿Qué pasa si no termino mi proyecto a tiempo?",
                                "¿Cómo obtengo el certificado de desglose?",
                                "¿Qué documentos necesito para el informe de PP?"
                            ].map((suggestion, index) => (
                                <button
                                    key={index}
                                    onClick={() => setUserInput(suggestion)}
                                    className="text-xs bg-white border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors text-black"
                                    disabled={loading || !canGenerate}
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatBotGroq;
