// Utilidad para enviar email con la API HTTP de Brevo
export const sendBrevoEmail = async ({ to, subject, htmlContent, fromName, fromEmail, cc }) => {
  const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY; // Ya la tienes en .env.local
  const sender = { 
    name: fromName || process.env.NEXT_PUBLIC_BREVO_SENDER_NAME || 'Mario', 
    email: fromEmail || process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL || 'mibarra@uagraria.edu.ec' 
  };

  const payload = {
    sender,
    to: [{ email: to }],
    subject,
    htmlContent,
    replyTo: { email: sender.email, name: sender.name },
  };

  if (cc) payload.cc = [{ email: cc }];

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error('Error al enviar correo: ' + error);
  }
};
