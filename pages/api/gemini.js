// pages/api/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(401).json({
      error: 'API Key de Google Gemini no configurada',
      details: 'Por favor, añade tu GEMINI_API_KEY en el archivo .env de tu proyecto. Puedes obtenerla gratis en https://aistudio.google.com/app/apikey'
    });
  }

  const { prompt, messages, systemInstruction, model: requestedModel } = req.body || {};
  const modelName = requestedModel || process.env.GEMINI_MODEL || process.env.NEXT_PUBLIC_GEMINI_MODEL || "gemini-2.5-flash";

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    const modelConfig = {
      model: modelName,
    };
    if (systemInstruction) {
      modelConfig.systemInstruction = systemInstruction;
    }

    const model = genAI.getGenerativeModel(modelConfig);

    let contents = [];

    if (Array.isArray(messages) && messages.length > 0) {
      contents = messages.map(msg => ({
        role: (msg.role === 'assistant' || msg.role === 'bot' || msg.type === 'bot') ? 'model' : 'user',
        parts: [{ text: msg.content || msg.text || '' }]
      }));
    } else if (prompt) {
      contents = [{ role: 'user', parts: [{ text: prompt }] }];
    } else {
      return res.status(400).json({ error: 'Debes proporcionar un prompt o lista de mensajes.' });
    }

    const result = await model.generateContent({
      contents,
      generationConfig: {
        maxOutputTokens: 1500,
        temperature: 0.7,
      },
    });

    const responseText = result.response.text();

    return res.status(200).json({
      text: responseText,
      choices: [
        {
          message: {
            role: "assistant",
            content: responseText,
          },
        },
      ],
      model: modelName,
    });
  } catch (error) {
    console.error("Error en Google Gemini API:", error);

    // Intento de fallback automático si el modelo específico no está disponible o hay alta demanda (503/404)
    if (error.message?.includes('not found') || error.status === 404 || error.status === 503 || error.message?.includes('503') || error.message?.includes('high demand')) {
      try {
        const fallbackName = modelName.includes('lite') ? 'gemini-2.5-flash' : 'gemini-2.5-flash-lite';
        const genAI = new GoogleGenerativeAI(apiKey);
        const fallbackModel = genAI.getGenerativeModel({
          model: fallbackName,
          ...(systemInstruction ? { systemInstruction } : {})
        });

        const fallbackContents = Array.isArray(messages) && messages.length > 0
          ? messages.map(msg => ({
              role: (msg.role === 'assistant' || msg.role === 'bot' || msg.type === 'bot') ? 'model' : 'user',
              parts: [{ text: msg.content || '' }]
            }))
          : [{ role: 'user', parts: [{ text: prompt }] }];

        const fallbackResult = await fallbackModel.generateContent({
          contents: fallbackContents,
          generationConfig: { maxOutputTokens: 1500, temperature: 0.7 }
        });

        const fallbackText = fallbackResult.response.text();
        return res.status(200).json({
          text: fallbackText,
          choices: [{ message: { role: "assistant", content: fallbackText } }],
          model: fallbackName
        });
      } catch (fallbackErr) {
        return res.status(500).json({
          error: 'Error al conectar con Google Gemini',
          details: fallbackErr.message || error.message
        });
      }
    }

    return res.status(500).json({
      error: 'Error al conectar con Google Gemini',
      details: error.message || 'Error desconocido'
    });
  }
}
