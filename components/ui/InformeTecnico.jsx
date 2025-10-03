'use client'
import { useState } from "react";
import { useRef } from "react";

const InformeTecnico = () => {
  const [empresa, setEmpresa] = useState("");
  const [actividad, setActividad] = useState("");
  const [orientacion, setOrientacion] = useState("");
  const [representanteLegal, setRepresentanteLegal] = useState("");
  const [cargoRepresentante, setCargoRepresentante] = useState("");
  const [secciones, setSecciones] = useState({});
  const [loading, setLoading] = useState(false);
  const [copiado, setCopiado] = useState(false);


  const apiKey = process.env.NEXT_PUBLIC_API_GROQ_KEY;

  const promptsBase = {
    antecedentes: "Redacta los antecedentes del informe técnico institucional para la creación de un convenio de {orientacion} de la Universidad Agraria del Ecuador con la empresa {empresa} cuya actividad principal de esta ultima es {actividad} incluye aspectos de como nacio este proceso. Escribe en dos párrafos sin símbolos especiales ni formato.",
    motivacionJuridica: "Redacta la motivación jurídica del informe técnico institucional, toma en cuenta que deberas usar como fundamento el siguiente contenido: De la constitución de la República del Ecuador:Art. 39: El Estado garantiza los derechos de los jóvenes y promueve su participación en todos los ámbitos, incluyendo el educativo. Art. 350 y 351: Definen los fines del sistema de educación superior, incluyendo la formación académica, la investigación, la vinculación con la sociedad y la solución de problemas nacionales. De la ley organica de educacion superior (LOES). Art. 87: Establece que, como requisito previo a la obtención del título académico, los estudiantes deben acreditar servicios a la comunidad mediante programas, proyectos de vinculación con la sociedad, con acompañamiento pedagógico. Del reglamento del regimen academico del Consejo de Educacion Superior (CES): Art. 40: Define la vinculación con la sociedad como una función sustantiva de las instituciones de educación superior, orientada a la solución de problemáticas del entorno. De la reglamentacion interna de la Universidad Agraria del Ecuador: Art. 108: Los estudiantes deberán obligatoriamente cumplir con servicios a la comunidad. Escribe en un dos párrafos sin símbolos especiales ni formato.",
    motivacionTecnica:
      `Redacta la motivación técnica del informe técnico institucional para la creación de un convenio entre la Universidad Agraria del Ecuador y la empresa {empresa} cuya actividad principal es {actividad}, orientado a {orientacion}. Estructura la respuesta en los siguientes subtítulos:
      a) Justificación: Explica la razón por la que se propone el convenio, detalla el problema, necesidad u oportunidad detectada y la relevancia de crear el convenio.
      b) Objeto: Define brevemente el objetivo general y los objetivos específicos del convenio.
      c) Tipo de instrumento: Especifica que el tipo de instrumento es un convenio específico, y que depende de la orientación seleccionada ({orientacion}).
      d) Aspectos claves del convenio: Establece las áreas de cooperación, compromisos de cada parte y mecanismos de coordinación.
      e) Beneficios institucionales: Detalla las ventajas que obtiene la UAE en ámbitos académicos, investigativos, de vinculación, tecnológicos, etc.
      f) Resultados esperados: Enumera los logros concretos que se prevé alcanzar.
      g) Tiempo de vigencia: Indica que el convenio tendrá una vigencia de 3 años y menciona las condiciones potenciales de renovación.
      h) Financiamiento: Declara que no aplica, ya que la UAE y la institución no tendrán ningún tipo de compromiso económico.
      i) Datos del representante legal: Nombre: {representanteLegal}, Cargo: {cargoRepresentante}.
      j) Administrador del convenio: Ing. Mario Ibarra, responsable de vinculación en la carrera de computación, Ciudad Universitaria Milagro.
      Escribe cada subtítulo y su contenido en formato texto plano, sin símbolos especiales ni formato.`,
    conclusiones: "Redacta las conclusiones del informe técnico institucional para la creacion de un convenio entre la Universidad Agraria del Ecuador y la empresa {empresa} cuya actividad es {actividad} donde la orientación del convenio es para {orientacion}. Escribe en un solo párrafo sin símbolos especiales ni formato.",
    recomendaciones: "Redacta recomendaciones aplicables del informe técnico institucional para la creacion de un convenio entre la Universidad Agraria del Ecuador y la empresa {empresa} cuya actividad es {actividad} donde la orientación del convenio es para {orientacion}. Escribe en un solo párrafo sin símbolos especiales ni formato.",
  };

  const apiUrl = "/api/groq";

  const fetchSeccion = async (key, prompt) => {
    const payload = {
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      const content = result.choices?.[0]?.message?.content || "";
      setSecciones((prev) => ({ ...prev, [key]: content }));
    } catch (error) {
      console.error(`Error en sección ${key}:`, error);
    }
  };

  const generarInforme = async () => {
    setLoading(true);
    setSecciones({});

    for (const [key, basePrompt] of Object.entries(promptsBase)) {
      const prompt = basePrompt
        .replace("{empresa}", empresa)
        .replace("{actividad}", actividad)
        .replace("{orientacion}", orientacion)
        .replace("{representanteLegal}", representanteLegal)
        .replace("{cargoRepresentante}", cargoRepresentante);

      await fetchSeccion(key, prompt);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Espera 10 segundos
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="uppercase text-2xl font-bold mb-6 text-center">
        Generador de Informe Técnico
      </h1>

      <div className="mb-4">
        <label className="block text-gray-800 font-semibold mb-2">Nombre de la empresa</label>
        <input
          type="text"
          className="w-full p-3 bg-gray-100 rounded"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 font-semibold mb-2">Actividad principal</label>
        <input
          type="text"
          className="w-full p-3 bg-gray-100 rounded"
          value={actividad}
          onChange={(e) => setActividad(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 font-semibold mb-2">Orientación del convenio</label>
        <select
          className="w-full p-3 bg-gray-100 rounded"
          value={orientacion}
          onChange={(e) => setOrientacion(e.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="Labores Comunitarias">Labores Comunitarias</option>
          <option value="Practicas Preprofesionales">Prácticas Preprofesionales</option>
          <option value="Labores Comunitarias y Practicas Preprofesionales">Convenio Marco</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 font-semibold mb-2">Nombre del representante legal</label>
        <input
          type="text"
          className="w-full p-3 bg-gray-100 rounded"
          value={representanteLegal}
          onChange={(e) => setRepresentanteLegal(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold mb-2">Cargo del representante legal</label>
        <input
          type="text"
          className="w-full p-3 bg-gray-100 rounded"
          value={cargoRepresentante}
          onChange={(e) => setCargoRepresentante(e.target.value)}
        />
      </div>

      <button
        onClick={generarInforme}
        disabled={loading || !empresa || !actividad || !orientacion || !representanteLegal || !cargoRepresentante}
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? "Generando informe..." : "Generar Informe"}
      </button>

      {Object.keys(secciones).length > 0 && (
        <div className="mt-8">
          {Object.entries(secciones).map(([key, value]) => (
            <div key={key} className="mb-6">
              <h2 className="font-bold text-lg mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</h2>
              <p className="text-gray-800 whitespace-pre-line">{value}</p>
            </div>
          ))}
          {secciones.recomendaciones && (
            <div className="flex justify-end mt-6 items-center gap-2">
              <button
                title="Copiar informe completo"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                onClick={() => {
                  const texto = Object.entries(secciones)
                    .map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1').toUpperCase()}\n${value}`)
                    .join('\n\n');
                  navigator.clipboard.writeText(texto);
                  setCopiado(true);
                  setTimeout(() => setCopiado(false), 2000);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7.5 3A2.25 2.25 0 005.25 21h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0014.25 7.5h-9A2.25 2.25 0 003 9.75v9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5V5.25A2.25 2.25 0 0015 3h-9A2.25 2.25 0 003.75 5.25v2.25" />
                </svg>
              </button>
              {copiado && (
                <span className="text-green-600 font-semibold">¡Informe copiado!</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InformeTecnico;