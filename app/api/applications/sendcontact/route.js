import { NextResponse } from 'next/server';
import { sendBrevoEmail } from '../../utils/mailing';

export async function POST(req) {
  try {
     const body = await req.json();
     const { email, nombre, mensaje } = body;

     const htmlContent = `
         <p>Nombre del Contacto: <strong>${nombre}</strong></p>
         <p>Email del Contacto: ${email}</p>
         <p>Mensaje: ${mensaje}</p>
     `;

     await sendBrevoEmail({
       to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'mario.ibarra.86@gmail.com', // Ya definido en tu .env.local
       subject: 'Nuevo Contacto por Servicio Web',
       htmlContent
     });

     return NextResponse.json({ msg: 'Correo enviado correctamente.' });

  } catch (error) {
       return NextResponse.json({ msg: 'Error al enviar', error: error.message });
  }
}
