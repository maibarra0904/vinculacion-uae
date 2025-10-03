'use client'
import { useState } from "react";

const InformeTecnico = () => {
  const [empresa, setEmpresa] = useState("");
  const [actividad, setActividad] = useState("");
  const [orientacion, setOrientacion] = useState("");
  const [secciones, setSecciones] = useState({});
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_API_GROQ_KEY;

  const promptsBase = {
    antecedentes: "Redacta los antecedentes del informe técnico institucional para la creación de un convenio de {orientacion} de la Universidad Agraria del Ecuador con la empresa {empresa} cuya actividad principal de esta ultima es {actividad}. Escribe en dos párrafos sin símbolos especiales ni formato.",
    motivacionJuridica: "Redacta la motivación jurídica del informe técnico institucional, considerando que a la Ley Orgánica de Educación Superior (LOES) quien reconoce la importancia de la vinculación con la sociedad como una de las funciones sustantivas de las universidades y a las Normativas internas de la Universidad Agraria del Ecuador y de la Cooperativa que permiten la suscripción de convenios interinstitucionales en beneficio mutuo. El informe debe motivar la creación de convenios institucionales. Escribe en un dos párrafos sin símbolos especiales ni formato.",
    motivacionTecnica: "Redacta la motivación técnica del informe técnico institucional considerando que la relevancia entre generar un convenio entre la Universidad Agraria del Ecuador y la empresa {empresa} que realiza la siguiente actividad: {actividad}; toma en cuenta adicionalmente que la orientación del convenio es para realizar {orientacion}. El informe debe motivar la creación de convenios institucionales. Escribe en dos a tres párrafos sin símbolos especiales ni formato.",
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
        .replace("{orientacion}", orientacion);

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

      <button
        onClick={generarInforme}
        disabled={loading || !empresa || !actividad || !orientacion}
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
        </div>
      )}
    </div>
  );
};

export default InformeTecnico;