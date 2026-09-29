'use client'
import { useEffect, useState, useRef } from "react"
import { useMyContext } from "../context/myContext"
import Alerta from "./Alerta"
import { enterKey } from "@/utils/enterKey"
import { CONTACTOS } from "@/utils/constants"

// Generador dinámico del contexto de conocimiento sobre proyectos de vinculación comunitaria
const getKnowledgeContext = () => {
    const secretariaNombre = process.env.NEXT_PUBLIC_SECRETARIA_NOMBRE || CONTACTOS?.SECRETARIA?.NOMBRE || "Secretaría de Decanato";
    const responsableNombre = process.env.NEXT_PUBLIC_RESPONSABLE_NOMBRE || CONTACTOS?.RESPONSABLE?.NOMBRE || "Ing. Mario Ibarra";
    const responsableEmail = process.env.NEXT_PUBLIC_RESPONSABLE_EMAIL || CONTACTOS?.RESPONSABLE?.EMAIL || "mibarra@uagraria.edu.ec";
    const deptoEncargado = process.env.NEXT_PUBLIC_DEPARTAMENTO_ENCARGADO || CONTACTOS?.DEPARTAMENTO?.NOMBRE || "Ing. Johanna Ramos";
    const coordinadoraNombre = process.env.NEXT_PUBLIC_COORDINADORA_NOMBRE || "Ing. Laura Ortega";

    return `
Eres un asistente especializado en proyectos de vinculación comunitaria de la Universidad Agraria del Ecuador (Carrera de Computación - Milagro). Tu conocimiento oficial y actualizado incluye:

ACTIVIDADES DE VINCULACIÓN OBLIGATORIAS:
- Los estudiantes deben realizar una actividad de vinculación por cada año de estudios.
- LABOR COMUNITARIA ESTUDIANTIL (LCE): Primer y segundo año (72 horas por cada año = 144 horas en total).
- PRÁCTICAS PREPROFESIONALES (PP): Tercero, cuarto y quinto año (80 horas por cada año = 240 horas en total).

============================================================
1. LABOR COMUNITARIA ESTUDIANTIL (LCE)
============================================================
- Objetivo: Contribuir al desarrollo de la comunidad y promover el compromiso social.
- Modalidad: Pueden ser individuales o grupales (máximo 4 estudiantes por grupo).
- Requisito indispensable: Convenio aprobado y vigente con la entidad beneficiaria.
- Beneficiarios mínimos: Se debe acreditar un mínimo de 10 beneficiarios directos. Si asisten menos de 8, debe solicitarse la anulación del proyecto.
- Etapas: 1) Perfil del Proyecto (requiere convenio), 2) Informe Final.
- Reglamentación de arrastre: No se puede arrastrar más de una labor comunitaria. Debe hacerse en el año en curso o máximo el siguiente año, para evitar problemas de matriculación o denegación.

--- A. PERFIL DE LABOR COMUNITARIA (LCE) ---
El proceso se puede gestionar en 2 pasos generales o siguiendo la secuencia de Formatos (1 al 6):
• PASO 1 (Preparación y Solicitud):
  1. Solicitar número de memorando en la aplicación web (/oficio), colocando en motivo: "PASO 1 - PERFIL LC".
  2. Llenar Formato 1: Solicitud de autorización de inicio de LCE dirigida al Responsable de Vinculación.
  3. Llenar Formato 2: Solicitud de autorización al Decano con el número de memorando obtenido.
  4. Gestionar Carta de Autorización de la entidad beneficiaria.
  5. Entregar documentación a Secretaría de Decanato (${secretariaNombre}) para el visto bueno y sumilla aprobatoria del Decano en el Formato 2.

• PASO 2 (Aprobación, Tutor y Formalización):
  6. Con el visto bueno del Paso 1, contactar al Responsable de Vinculación (${responsableNombre}) para que asigne el docente tutor.
  7. Formato 3: Memorando de designación de docente tutor (firmado por Responsable de Vinculación y Coordinadora de Carrera: ${coordinadoraNombre}).
  8. Formato 4: Carta de Declaración y Compromiso firmada por el docente guía asignado. Entregarle copia del memorando y tomar su firma.
  9. Solicitar segundo número de memorando en la aplicación web (/oficio), colocando en motivo: "PASO 2 - PERFIL LC".
  10. Formato 5: Formato de Perfil del Proyecto estructurado junto con el tutor, incluyendo la Carta de Carátula. Se pueden planificar las fechas con la aplicación web de fechas de vinculación.
  11. Formato 6: Memorando de entrega de perfil del proyecto utilizando el segundo número de memorando. Imprimir 2 copias originales (una para la carpeta física y otra para constancia de recibido).
  12. Revisión del tutor: El tutor revisa y sumilla toda la documentación antes de firmar la carta de presentación.
  13. Revisión del Responsable de Vinculación: Presentar la carpeta al ${responsableNombre} para revisión final y firma.
  14. Carpeta AMARILLA (Orden estricto): Formato 6 (memorando entrega), Formato 5 (perfil estructurado), Formato 4 (compromiso tutor), Formato 3 (designación tutor), Formato 2 (solicitud al Decano con sumilla), Formato 1 (solicitud de inicio).
  15. Entrega física: En el Departamento de Vinculación / Labor Comunitaria con la ${deptoEncargado}. Tomar sello y firma de RECIBIDO en la segunda copia del Formato 6.
  16. Remisión Digital Obligatoria: Escanear la constancia del Formato 6 con sello de recibido y enviarla por correo a: ${responsableEmail}.
  17. Aprobación oficial: Esperar la notificación de aprobación u observaciones de la Coordinación de Labor Comunitaria Estudiantil de Guayaquil.

--- B. INFORME FINAL DE LABOR COMUNITARIA (LCE) ---
- Plazo límite estricto: Máximo 28 días calendario posteriores a la finalización del último día programado de la actividad.
- Pasos y Formatos (7 al 11):
  1. Formato 7: Desarrollar el Informe Final completo de la labor comunitaria ejecutada.
  2. Formato 8: Gestionar el Informe Técnico redactado y validado por el tutor UAE.
  3. Evaluaciones: Formato 9 (Evaluación del tutor UAE) y Formato 10 (Evaluación empresarial por el supervisor de la entidad).
  4. Número de memorando: Solicitar en la aplicación web (/oficio) el número para el Formato 11.
  5. Formato 11: Memorando de entrega del informe final con el número obtenido. Imprimir dos (2) copias originales (una para la carpeta y otra para recibido).
  6. Carpeta AMARILLA (Orden estricto):
     1) Formato 11 (Memorando de entrega de informe final).
     2) Formato 7 (Informe final desarrollado).
     3) Formato 8 (Informe técnico del tutor).
     4) Formato 9 (Evaluación del tutor UAE).
     5) Formato 10 (Evaluación empresarial/supervisor).
  7. Entrega física: Entregar la carpeta física en el Departamento de Vinculación (${deptoEncargado}) y tomar obligatoriamente sello y firma de RECIBIDO en la segunda copia del Formato 11.
  8. Remisión digital obligatoria: Enviar la copia del Formato 11 escaneada con el sello de recibido al correo: ${responsableEmail}.

• Eventualidades en Labor Comunitaria:
  - Proyecto no culminado: Solicitud de anulación del proyecto.
  - Retiro de estudiante: Solicitud de retiro individual de un miembro del grupo.
  - Retrasos de cronograma: Solicitud de modificación de cronograma al Responsable de Vinculación.

============================================================
2. PRÁCTICAS PREPROFESIONALES (PP)
============================================================
- Modalidad: Totalmente INDIVIDUALES (NO pueden hacerse en grupo).
- Requisito: Una práctica por cada año en tercero, cuarto y quinto año (80 horas cada una = 240 horas total).
- Vía de realización: Convenio (existente o nuevo) O Carta de Intención (no requiere convenio previo).
- Evidencias diarias obligatorias durante la ejecución: Dos (2) fotografías por cada día planificado tomadas con la aplicación GPS Map Camera (geolocalización, coordenadas, fecha y hora visibles).
- Reglamentación de arrastre/adelanto: No se puede arrastrar más de una práctica. Se puede realizar adelanto de máximo 1 período académico (no se permite adelantar 2 prácticas a la vez). Se pueden hacer prácticas hasta por 2 periodos consecutivos.

--- A. DOCUMENTOS DE INICIO DE PRÁCTICAS PREPROFESIONALES (PP) ---
• ¡REQUISITO PREVIO CRUCIAL PARA CARTA DE INTENCIÓN!:
  Si el estudiante opta por Carta de Intención, DEBE realizar primero un acercamiento formal con la empresa usando el FORMATO 0 (Carta de Acercamiento) obligatoriamente ANTES de llenar la solicitud. Esto permite obtener la información y documentación de la empresa. Luego, se entrega la Carta de Intención firmada por el Responsable de Vinculación y se toma el recibido de la empresa.

• Pasos para el inicio de PP:
  1. Elección de vía:
     - Vía Convenio: Llenar Formato 1 (Solicitud con convenio).
     - Vía Carta de Intención: Gestionar Formato 0 (Acercamiento) y luego Formato 2 (Solicitud con carta de intención).
  2. Planificación de fechas: Usar la aplicación web (https://planificadorfechasvinculacion.netlify.app/) para establecer fechas de inicio y fin. Imprimir la planificación y adjuntarla.
  3. Asignación de tutor: Contactar al Responsable de Vinculación (${responsableNombre}) para la asignación del docente tutor.
  4. Número de memorando: Solicitar en la aplicación web (/oficio), colocando en motivo: "PASO 1 - INICIO PP" o "PASO 2 - INICIO PP", ingresando obligatoriamente el nombre del tutor asignado.
  5. Formato 3 (Memorando dirigido al docente responsable): Llenar con el número obtenido.
     * REGLA DE IMPRESIÓN (3 copias obligatorias):
       - 1ra copia: Se entrega a Secretaría de Decanato con la documentación y anexos.
       - 2da copia: Se entrega al docente tutor asignado para su registro.
       - 3ra copia (Comprobante del estudiante): En esta única hoja se toma la firma y sello de RECIBIDO tanto de Secretaría de Decanato como del docente tutor.
  6. Historial de matriculación: Adjuntar para verificar período y año de estudio correspondiente.
  7. Entrega en Decanato: Entregar la documentación en Secretaría de Decanato (${secretariaNombre}).
  8. Carta de Inicio del Decano: El Decanato emite dos (2) copias originales de la CARTA DE INICIO firmadas por el Decano. Una se entrega a la empresa y en la otra se toma el sello y firma de RECIBIDO del representante legal.
  9. Custodia: El estudiante es el custodio de la documentación original física hasta culminar sus prácticas.
  10. Remisión digital obligatoria: Escanear TODA la documentación de inicio (incluyendo la Carta de Inicio con recibido de la empresa) y enviarla al correo ${responsableEmail} COMO MÁXIMO HASTA EL DÍA DEL COMIENZO (primer día programado) de la práctica.
  11. ¡ADVERTENCIA VITAL!: Si el estudiante comienza la práctica sin haber completado y formalizado estos pasos de inicio, la práctica será ANULADA.

--- B. INFORME FINAL DE PRÁCTICAS PREPROFESIONALES (PP) ---
- Plazo límite estricto: Máximo 28 días calendario posteriores al último día programado de la práctica. Si no se entrega a tiempo, la práctica queda ANULADA.
- Pasos:
  1. Anexos del Formato 4: Gestionar los documentos habilitantes, bitácoras, control de horas y evaluaciones de desempeño.
  2. Formato 4 (Declaración de revisión del tutor): El tutor docente revisa exhaustivamente y DEBE SUMILLAR CADA UNA DE LAS PÁGINAS de los Anexos del Formato 4.
  3. Número de memorando: Solicitar en la aplicación web (/oficio) el número de memorando para el Formato 5.
  4. Formato 5 (Memorando de entrega de informe final por Responsable de Vinculación): Llenar con el número obtenido. Imprimir 2 copias originales + 1 copia de cédula del estudiante. El Responsable de Vinculación (${responsableNombre}) verifica la carpeta completa.
  5. Entrega en Decanato: Entregar 1 copia del Formato 5 con copia de cédula en Secretaría de Decanato (${secretariaNombre}). En la 2da copia del Formato 5 se toma el sello y firma de RECIBIDO.
  6. Carpeta AMARILLA (Orden estricto):
     1) Formato 5 con sello de RECIBIDO de Secretaría de Decanato.
     2) Formato 4 con Anexos sumillados por el docente tutor.
     3) Documentos de Inicio (Formatos 1 al 3 de la etapa inicial).
  7. Culminación formal: Entregar la carpeta física al Responsable de Vinculación (${responsableNombre}) y enviar toda la documentación escaneada al correo ${responsableEmail}. El proceso NO concluye con la sola entrega en Decanato; debe entregarse al Responsable de Vinculación física y digitalmente.

============================================================
3. CONVENIOS
============================================================
- Acuerdo institucional entre la UAE y una empresa u organización.
- Requisito obligatorio para Labor Comunitaria; opcional para Prácticas Preprofesionales (que pueden usar Carta de Intención).
- Opción A (Convenio existente): Consultar la matriz de convenios de LC o PP para verificar si está vigente (columna "Fecha de Fin de Convenio" en LC o "VIGENCIA" en PP). Realizar un acercamiento previo con la entidad antes de decidir.
- Opción B (Nuevo convenio): Gestionar la firma del formato de nuevo convenio por el representante legal de la empresa + copia de cédula + RUC + nombramiento.
  * LC: Se entrega en el Departamento de Labor Comunitaria en Guayaquil.
  * PP: Se entrega en Secretaría de Decanato (${secretariaNombre}) Milagro.
  * En ambos casos tomar constancia de recibido.

============================================================
4. CERTIFICADO DE DESGLOSE (Para Egresados)
============================================================
- Requisito previo obligatorio para la graduación de estudiantes egresados. Certifica todas las actividades de vinculación (LC y PP).
- Pasos:
  1. Descargar y llenar la Solicitud de Estudiante.
  2. Recopilar evidencias: memorandos de informes finales aprobados de LC, memorandos de informes finales con recibido de Decanato de PP, y diplomas de cursos especializantes.
  3. Generar el certificado en la aplicación web de desglose (https://desglose.netlify.app/) y descargar el archivo PDF.
  4. Comprar una especie valorada e imprimir en el anverso (cara frontal) la solicitud de estudiante y en el reverso (cara posterior) el certificado de desglose generado.
  5. Firmar la solicitud y anexar las evidencias impresas.
  6. Presentar al Responsable de Vinculación (${responsableNombre}) para revisión y firma de la solicitud y evidencias.
  7. Obtener firmas de las autoridades finales en el certificado: Decano de Facultad y Secretario de CCAA.

============================================================
5. GESTIÓN DE CAMBIOS EN PROYECTOS (Solo Labor Comunitaria)
============================================================
- NO aplica para Prácticas Preprofesionales.
- Casos contemplados: Retiro de Estudiante, Adición de Estudiante, Cambio de Cronograma, Cambio de Tutor Guía.
- Requieren solicitud de los integrantes y formato firmado por el Responsable de Vinculación.

============================================================
6. REIMPRESIÓN O RECTIFICACIÓN DE CERTIFICADO DE VINCULACIÓN
============================================================
- Aplica para LC y PP en caso de errores en datos (carrera, sede, nombres), pérdida, robo o deterioro.
- Proceso: Llenar solicitud, revisión informativa con ${responsableNombre}, firma y entrega física en Departamento de Vinculación con la ${deptoEncargado}.

============================================================
PERSONAL CLAVE Y CONTACTOS OFICIALES:
============================================================
- Responsable de Vinculación (Carrera de Computación - Milagro): ${responsableNombre} (correo: ${responsableEmail})
- Secretaría de Decanato (Milagro): ${secretariaNombre}
- Coordinadora de Carrera de Computación: ${coordinadoraNombre}
- Departamento de Vinculación / Labor Comunitaria: ${deptoEncargado}
- Decano de la Facultad de Ciencias Agrarias: Ing. Ahmed El Salous

============================================================
APLICACIONES WEB DISPONIBLES EN EL ECOSISTEMA:
============================================================
- Solicitud de número de memorando: /oficio
- Planificador de fechas de vinculación: https://planificadorfechasvinculacion.netlify.app/
- Generador de Certificado de Desglose: https://desglose.netlify.app/
- Generador de Ideas de Temas con IA (en esta plataforma)
- Redactor de Informes Técnicos Institucionales con IA (en esta plataforma)
- Gestión de cambios y formatos oficiales

DIRECTRICES PARA RESPUESTAS:
- Mantén un tono amigable, claro, respetuoso y profesional.
- Ofrece información precisa, citando los números de formato exactos (Formato 0 al 11), responsables y lugares de entrega.
- Resalta plazos críticos (ej. los 28 días de entrega de informe final) y advertencias importantes (como no iniciar prácticas sin autorización para evitar anulación).
- Responde de forma concisa y estructurada (máximo 250 palabras por respuesta cuando sea posible, usando viñetas claras).
`;
};

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

    // Constantes para el límite de solicitudes
    const MAX_REQUESTS_PER_MINUTE = 6;
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
                msg: `Límite alcanzado: Espera ${timeLeft} segundos antes de enviar otro mensaje`,
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

            const systemPrompt = `${getKnowledgeContext()}

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
                model: process.env.NEXT_PUBLIC_GROQ_MODEL || "qwen/qwen3.8-27b",
                max_tokens: 1000,
                temperature: 0.7,
            };

            // Usar fetch para llamar a Groq API
            const response = await fetch('/api/groq', {
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
        <div className="p-4 max-w-4xl mx-auto w-full">
            <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
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
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.type === 'user'
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
                            className={`px-6 py-2 rounded-md transition-all duration-300 ${!canGenerate
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
    );
}

export default ChatBotGroq;
