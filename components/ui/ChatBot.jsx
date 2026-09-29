'use client'
import { useEffect, useState, useRef } from "react"
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
Eres VinculaBot, el asistente inteligente oficial de la Universidad Agraria del Ecuador (UAE) especializado en la gestión de Vinculación con la Sociedad para la Carrera de Computación en el campus Milagro.

Tu misión es orientar con total precisión a estudiantes y egresados sobre normativas, formatos, trámites y plazos oficiales de Vinculación Comunitaria.

ACTIVIDADES DE VINCULACIÓN OBLIGATORIAS:
- Los estudiantes deben realizar una actividad de vinculación por cada año de estudios.
- LABOR COMUNITARIA ESTUDIANTIL (LCE): Primer y segundo año (72 horas por cada año = 144 horas en total).
- PRÁCTICAS PREPROFESIONALES (PP): Tercero, cuarto y quinto año (80 horas por cada año = 240 horas en total).

============================================================
1. LABOR COMUNITARIA ESTUDIANTIL (LCE)
============================================================
- Objetivo: Contribuir al desarrollo de la comunidad y promover el compromiso social.
- Modalidad: Pueden ser individuales o grupales (máximo 4 estudiantes por grupo).
- Requisito indispensable: Convenio institucional aprobado y vigente con la entidad beneficiaria.
- Beneficiarios mínimos: Se debe acreditar un mínimo de 10 beneficiarios directos. Si asisten menos de 8, debe solicitarse la anulación del proyecto.
- Etapas: 1) Perfil del Proyecto (requiere convenio), 2) Informe Final.
- Reglamentación de arrastre: No se puede arrastrar más de una labor comunitaria. Debe hacerse en el año en curso o máximo el siguiente año, para evitar problemas de matriculación o denegación.

--- A. PERFIL DE LABOR COMUNITARIA (LCE) ---
Secuencia de Formatos (1 al 6):
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
- Mantén un tono amigable, claro, respetuoso, empático y profesional.
- Ofrece información precisa, citando los números de formato exactos (Formato 0 al 11), responsables y lugares de entrega.
- Resalta plazos críticos (ej. los 28 días de entrega de informe final) y advertencias importantes (como no iniciar prácticas sin autorización para evitar anulación).
- Responde de forma estructurada, usando viñetas y pasos numerados fáciles de seguir.
`;
};

// Componente para renderizar formato enriquecido (Markdown ligero)
const FormattedMessage = ({ text }) => {
    if (!text) return null;

    const renderBoldText = (str) => {
        const parts = str.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={index} className="font-semibold text-gray-900 dark:text-gray-100">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    const paragraphs = text.split('\n\n');

    return (
        <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
            {paragraphs.map((para, pIdx) => {
                const lines = para.split('\n');
                return (
                    <div key={pIdx} className="space-y-1">
                        {lines.map((line, lIdx) => {
                            const trimmed = line.trim();

                            if (trimmed.startsWith('### ') || trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
                                const cleanHeader = trimmed.replace(/^#+\s*/, '');
                                return (
                                    <h4 key={lIdx} className="font-bold text-gray-900 dark:text-white text-base mt-2.5 mb-1 flex items-center gap-1.5">
                                        <span className="w-1.5 h-4 bg-emerald-500 rounded-full inline-block"></span>
                                        {cleanHeader}
                                    </h4>
                                );
                            }

                            if (/^[-*•]\s+/.test(trimmed)) {
                                const content = trimmed.replace(/^[-*•]\s+/, '');
                                return (
                                    <div key={lIdx} className="flex items-start space-x-2 pl-2 my-0.5">
                                        <span className="text-emerald-600 dark:text-emerald-400 mt-1 text-xs">•</span>
                                        <span className="flex-1">{renderBoldText(content)}</span>
                                    </div>
                                );
                            }

                            const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
                            if (numberedMatch) {
                                return (
                                    <div key={lIdx} className="flex items-start space-x-2 pl-1.5 my-0.5">
                                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                                            {numberedMatch[1]}
                                        </span>
                                        <span className="flex-1">{renderBoldText(numberedMatch[2])}</span>
                                    </div>
                                );
                            }

                            if (trimmed === '---' || trimmed === '===') {
                                return <hr key={lIdx} className="my-2 border-gray-200 dark:border-gray-700" />;
                            }

                            return <p key={lIdx}>{renderBoldText(line)}</p>;
                        })}
                    </div>
                );
            })}
        </div>
    );
};

const VinculaBot = () => {
    // Estados del chat
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [puntos, setPuntos] = useState(0);
    const [alerta, setAlerta] = useState({});
    const [copiedId, setCopiedId] = useState(null);

    // Control de límite de solicitudes (Google Gemini: 15 req/min)
    const MAX_REQUESTS_PER_MINUTE = 12;
    const ONE_MINUTE_IN_MS = 60 * 1000;
    const [requestCount, setRequestCount] = useState(0);
    const [firstRequestTime, setFirstRequestTime] = useState(0);
    const [canGenerate, setCanGenerate] = useState(true);
    const [timeUntilReset, setTimeUntilReset] = useState(0);

    // Referencias
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Inicializar mensaje de bienvenida
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    type: 'bot',
                    content: '¡Hola! 👋 Soy **VinculaBot**, tu asistente oficial impulsado por **Google Gemini** para la Vinculación con la Sociedad de la UAE (Carrera de Computación - Milagro).\n\nPuedo orientarte con precisión sobre:\n- 📋 **Labor Comunitaria (LCE)**: Formatos 1 al 11, perfiles e informes.\n- 💼 **Prácticas Preprofesionales (PP)**: Formato 0, Carta de Intención, convenios y formalización.\n- ⏳ **Plazos reglamentarios**: Plazo de 28 días y requisitos para evitar anulación.\n- 🎓 **Certificado de Desglose** para egresados.\n\n¿En qué puedo orientarte hoy?',
                    timestamp: new Date()
                }
            ]);
        }
    }, []);

    // Indicador animado de puntos
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPuntos((prev) => (prev + 1) % 4);
        }, 400);
        return () => clearInterval(intervalId);
    }, []);

    // Rate limiting local
    useEffect(() => {
        const checkRateLimitStatus = () => {
            const storedCount = localStorage.getItem('vinculaBotRequestCount');
            const storedTime = localStorage.getItem('vinculaBotFirstRequestTime');
            const currentTime = Date.now();

            let currentCountFromStorage = storedCount ? parseInt(storedCount, 10) : 0;
            let firstTimeFromStorage = storedTime ? parseInt(storedTime, 10) : 0;

            if (firstTimeFromStorage === 0 || (currentTime - firstTimeFromStorage > ONE_MINUTE_IN_MS)) {
                setRequestCount(0);
                setFirstRequestTime(0);
                setTimeUntilReset(0);
                localStorage.removeItem('vinculaBotRequestCount');
                localStorage.removeItem('vinculaBotFirstRequestTime');
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

    // Copiar texto al portapapeles
    const handleCopy = (id, text) => {
        if (!navigator?.clipboard) return;
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Envío del mensaje
    const handleSendMessage = async () => {
        const cleanInput = userInput.trim();
        if (!cleanInput) {
            setAlerta({ msg: 'Por favor, escribe tu consulta.', type: 'error' });
            setTimeout(() => setAlerta({}), 2500);
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
                msg: `Límite de solicitudes alcanzado. Espera ${timeLeft} segundos antes del siguiente mensaje.`,
                type: 'error'
            });
            setTimeout(() => setAlerta({}), 4000);
            return;
        }

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: cleanInput,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setLoading(true);

        try {
            // Historial de conversación formateado
            const history = messages.slice(-8).map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.content
            }));

            // Llamada a la API de Google Gemini
            let response = await fetch('/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        ...history,
                        { role: 'user', content: cleanInput }
                    ],
                    systemInstruction: getKnowledgeContext(),
                }),
            });

            // Si la API de Gemini devuelve 401 (sin API key)
            if (response.status === 401) {
                const errData = await response.json();
                setAlerta({
                    msg: errData.details || 'API Key de Google Gemini no configurada en el archivo .env',
                    type: 'error'
                });
                throw new Error('API Key no configurada');
            }

            // Fallback a /api/groq si la llamada principal a Gemini falla
            if (!response.ok) {
                console.warn("Fallo en /api/gemini, intentando fallback con /api/groq...");
                response = await fetch('/api/groq', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages: [
                            { role: 'system', content: getKnowledgeContext() },
                            ...history,
                            { role: 'user', content: cleanInput }
                        ],
                    }),
                });
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || errorData.details || 'Error desconocido de la API');
            }

            const result = await response.json();
            const replyText = result.text || result.choices?.[0]?.message?.content;

            if (replyText) {
                const botMessage = {
                    id: Date.now() + 1,
                    type: 'bot',
                    content: replyText.trim(),
                    timestamp: new Date(),
                    model: result.model || 'Gemini'
                };

                setMessages(prev => [...prev, botMessage]);

                // Actualizar límite
                const newCount = currentCount + 1;
                setRequestCount(newCount);
                setFirstRequestTime(currentFirstTime);
                localStorage.setItem('vinculaBotRequestCount', newCount.toString());
                localStorage.setItem('vinculaBotFirstRequestTime', currentFirstTime.toString());

                if (newCount >= MAX_REQUESTS_PER_MINUTE) {
                    setCanGenerate(false);
                }
            } else {
                throw new Error('No se recibió texto en la respuesta del asistente.');
            }

        } catch (error) {
            console.error("Error en VinculaBot:", error);
            const errorMessage = {
                id: Date.now() + 1,
                type: 'bot',
                content: '⚠️ No fue posible procesar tu mensaje en este momento. Si eres administrador, asegúrate de haber configurado tu **GEMINI_API_KEY** en el archivo `.env` del servidor y recarga la aplicación.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    // Manejar Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Reiniciar chat
    const clearChat = () => {
        setMessages([
            {
                id: Date.now(),
                type: 'bot',
                content: '¡Conversación reiniciada! 🔄 ¿Qué duda o proceso de vinculación comunitaria deseas consultar?',
                timestamp: new Date()
            }
        ]);
    };

    // Sugerencias rápidas categorizadas
    const quickSuggestions = [
        "📋 Pasos de Inicio de PP",
        "📑 Formato 0 y Carta de Intención",
        "⏳ Plazo de 28 días Informe Final",
        "📝 Pasos de Perfil de Labor Comunitaria",
        "🎓 Certificado de Desglose Egresados",
        "🏢 ¿Dónde se entrega la carpeta física?"
    ];

    return (
        <div className="p-3 sm:p-5 max-w-4xl mx-auto w-full">
            <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all flex flex-col">
                
                {/* Header Premium de VinculaBot */}
                <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-blue-700 text-white p-4 sm:p-5">
                    <div className="flex flex-wrap gap-3 justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner border border-white/20">
                                🤖
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight">VinculaBot</h1>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/20 text-emerald-200 border border-emerald-300/30">
                                        ✨ Gemini AI
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-emerald-100/90 font-medium">
                                    Asistente Oficial de Vinculación Comunitaria • UAE Milagro
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/20 text-xs text-white/90">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span>En línea</span>
                            </div>
                            <button
                                onClick={clearChat}
                                title="Reiniciar chat"
                                className="bg-white/15 hover:bg-white/25 active:scale-95 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all backdrop-blur-sm flex items-center space-x-1 border border-white/20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>Reiniciar</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Banner de alerta */}
                {alerta?.msg && (
                    <div className="p-3 bg-red-50 dark:bg-red-950/40 border-b border-red-200 dark:border-red-900/50">
                        <Alerta msg={alerta.msg} err={alerta.type === 'error'} />
                    </div>
                )}

                {/* Contenedor de Mensajes */}
                <div
                    ref={chatContainerRef}
                    className="h-[430px] sm:h-[480px] overflow-y-auto p-4 sm:p-5 space-y-4 bg-gray-50 dark:bg-gray-950/50"
                >
                    {messages.map((message) => {
                        const isUser = message.type === 'user';
                        return (
                            <div
                                key={message.id}
                                className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                {!isUser && (
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center text-sm shadow-sm flex-shrink-0 mt-0.5">
                                        🤖
                                    </div>
                                )}

                                <div
                                    className={`relative group max-w-[85%] sm:max-w-xl px-4 py-3 rounded-2xl shadow-sm transition-all ${
                                        isUser
                                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-tr-none'
                                            : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-tl-none'
                                    }`}
                                >
                                    {isUser ? (
                                        <p className="text-sm whitespace-pre-wrap font-medium">{message.content}</p>
                                    ) : (
                                        <>
                                            <FormattedMessage text={message.content} />
                                            
                                            {/* Botón copiar en respuestas del bot */}
                                            <div className="mt-2.5 pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400">
                                                <span className="flex items-center gap-1 text-[11px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                                                    Gemini 1.5
                                                </span>
                                                <button
                                                    onClick={() => handleCopy(message.id, message.content)}
                                                    className="inline-flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors px-1.5 py-0.5 rounded"
                                                    title="Copiar respuesta"
                                                >
                                                    {copiedId === message.id ? (
                                                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ Copiado</span>
                                                    ) : (
                                                        <>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                            </svg>
                                                            <span>Copiar</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <div className={`text-[10px] mt-1 text-right ${isUser ? 'text-emerald-100/70' : 'text-gray-400'}`}>
                                        {message.timestamp?.toLocaleTimeString('es-EC', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: false
                                        })}
                                    </div>
                                </div>

                                {isUser && (
                                    <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center text-sm shadow-sm flex-shrink-0 mt-0.5">
                                        👤
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {loading && (
                        <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm shadow-sm">
                                🤖
                            </div>
                            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    VinculaBot está respondiendo{'.'.repeat(puntos)}
                                </span>
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Preguntas frecuentes / Sugerencias rápidas */}
                <div className="p-3 bg-gray-100 dark:bg-gray-900/70 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                        <span>💡</span> Consultas frecuentes:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {quickSuggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setUserInput(suggestion);
                                }}
                                disabled={loading}
                                className="text-xs bg-white dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-gray-200 hover:text-emerald-700 dark:hover:text-emerald-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 px-2.5 py-1 rounded-lg transition-all active:scale-95 disabled:opacity-50"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Entrada de texto */}
                <div className="p-3 sm:p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-end space-x-2">
                        <textarea
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Escribe tu consulta sobre formatos, pasos, fechas, convenios o informe final..."
                            className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 resize-none text-sm text-gray-900 dark:text-white bg-transparent transition-all placeholder:text-gray-400"
                            rows="2"
                            disabled={loading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={loading || !canGenerate || !userInput.trim()}
                            className={`px-4 sm:px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center space-x-1.5 flex-shrink-0 shadow-sm ${
                                !canGenerate
                                    ? 'bg-amber-500 text-white cursor-not-allowed opacity-80'
                                    : loading || !userInput.trim()
                                    ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                                    : 'bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white shadow-emerald-500/20'
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="hidden sm:inline">Enviando</span>
                                </>
                            ) : !canGenerate ? (
                                <span>{timeUntilReset}s</span>
                            ) : (
                                <>
                                    <span className="hidden sm:inline">Enviar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400 px-1">
                        <span>💡 <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">Enter</kbd> para enviar • <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">Shift+Enter</kbd> salto de línea</span>
                        <span>{requestCount}/{MAX_REQUESTS_PER_MINUTE} msgs/min</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VinculaBot;
