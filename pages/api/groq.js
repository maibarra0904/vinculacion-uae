// pages/api/groq.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.NEXT_PUBLIC_API_GROQ_KEY || process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(401).json({ error: 'API Key de Groq no configurada' });
  }

  const defaultModel = process.env.NEXT_PUBLIC_GROQ_MODEL || process.env.GROQ_MODEL || 'groq/compound-mini';

  try {
    let payload = { ...req.body };
    if (!payload.model || payload.model === 'llama-3.1-8b-instant') {
      payload.model = defaultModel;
    }

    let groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    let data = await groqRes.json();

    // Si el modelo solicitado no existe o no se tiene acceso, reintentar con el modelo por defecto
    if (!groqRes.ok && data?.error?.code === 'model_not_found' && payload.model !== 'groq/compound-mini') {
      payload.model = 'groq/compound-mini';
      groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });
      data = await groqRes.json();
    }

    res.status(groqRes.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con Groq', details: error.message });
  }
}
