// pages/api/groq.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.NEXT_PUBLIC_API_GROQ_KEY || process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(401).json({ error: 'API Key de Groq no configurada' });
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(req.body),
    });
    const data = await groqRes.json();
    res.status(groqRes.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con Groq', details: error.message });
  }
}
