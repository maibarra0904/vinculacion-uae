const BREVO_API_URL = process.env.NEXT_PUBLIC_BREVO_API_URL || 'https://api.brevo.com/v3/smtp/email'

function getConfig() {
  const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY
  const senderEmail = process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL || process.env.NEXT_PUBLIC_EMAIL_FROM || 'noreply@example.com'
  const senderName = process.env.NEXT_PUBLIC_BREVO_SENDER_NAME || 'Vinculacion'
  return { apiKey, senderEmail, senderName }
}

async function sendRawEmail(emailData) {
  const { apiKey } = getConfig()
  if (!apiKey) {
    throw new Error('Brevo API key not configured. Set NEXT_PUBLIC_BREVO_API_KEY in .env.local')
  }
  try {
    // Log non-sensitive details for troubleshooting
    console.log('[emailService] sending to:', emailData?.to?.[0]?.email, 'subject:', emailData?.subject)

    const res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailData),
    })

    if (!res.ok) {
      const txt = await res.text()
      console.error('[emailService] Brevo responded with error', res.status, txt)
      const err = new Error(`Brevo error: ${res.status} ${txt}`)
      // attach details for consumers
      err.brevoStatus = res.status
      err.brevoText = txt
      throw err
    }

    const json = await res.json()
    console.log('[emailService] Brevo success, message id:', json?.messageId || json?.message_id || null)
    return json
  } catch (err) {
    console.error('[emailService] sendRawEmail failed:', err && err.message ? err.message : err)
    throw err
  }
}

export async function sendResetPasswordEmail(opts = { toEmail: '', toName: '', token: '' }) {
  const { senderEmail, senderName } = getConfig()
  const { toEmail, toName, token } = opts

  if (!toEmail || !token) {
    throw new Error('toEmail and token are required')
  }

  const resetUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/actualizar/${encodeURIComponent(token)}`

  const htmlContent = `
    <html><body>
      <div style="font-family: Arial, sans-serif;">
        <p>Hola ${toName || ''},</p>
        <p>Has solicitado restablecer tu contraseña. Haz clic en el botón para continuar:</p>
        <p style="text-align:center; margin: 20px;"><a href="${resetUrl}" style="display:inline-block;padding:10px 18px;background:#2563eb;color:#fff;border-radius:6px;text-decoration:none;">Reestablecer contraseña</a></p>
        <p>Si el enlace no funciona, copia y pega esta URL en tu navegador:</p>
        <p><small>${resetUrl}</small></p>
        <p>Si no solicitaste este cambio, puedes ignorar este mensaje.</p>
      </div>
    </body></html>`

  const emailData = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: toEmail, name: toName || toEmail }],
    subject: 'Reestablecer contraseña',
    htmlContent,
    textContent: `Visita este enlace para reestablecer tu contraseña: ${resetUrl}`,
  }

  return sendRawEmail(emailData)
}

export async function sendConfirmationEmail(opts = { toEmail: '', toName: '', token: '' }) {
  const { senderEmail, senderName } = getConfig()
  const { toEmail, toName, token } = opts

  if (!toEmail || !token) {
    throw new Error('toEmail and token are required')
  }

  // Build confirmation URLs (include both common patterns)
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const confirmUrlPath = `${origin}/confirmacion/${encodeURIComponent(token)}`

  const htmlContent = `
    <html><body>
      <div style="font-family: Arial, sans-serif;">
        <p>Hola ${toName || ''},</p>
        <p>Gracias por registrarte. Para activar tu cuenta haz clic en el botón siguiente:</p>
        <p style="text-align:center; margin: 20px;"><a href="${confirmUrlPath}" style="display:inline-block;padding:10px 18px;background:#2563eb;color:#fff;border-radius:6px;text-decoration:none;">Confirmar mi cuenta</a></p>
        <p>Si el botón no funciona, copia y pega esta URL en tu navegador:</p>
        <p><small>${confirmUrlPath}</small></p>
        <p>También puedes usar este token de confirmación: <code>${token}</code></p>
      </div>
    </body></html>`

  const emailData = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: toEmail, name: toName || toEmail }],
    subject: 'Confirma tu cuenta',
    htmlContent,
    textContent: `Confirma tu cuenta visitando: ${confirmUrlPath}`,
  }

  return sendRawEmail(emailData)
}

export default {
  sendResetPasswordEmail,
  sendRawEmail,
  sendConfirmationEmail,
}
