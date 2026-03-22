import { NextResponse } from 'next/server';
import { sendBrevoEmail } from '../../utils/mailing';

export async function POST(req) {
  try {
     const body = await req.json();
     const { email, oficio, fecha } = body;

     const htmlContent = `
         <p>Tu numero de oficio es: <strong>${oficio}</strong></p>
         <p>La fecha es: ${fecha}</p>
     `;

     await sendBrevoEmail({
       to: email,
       subject: 'Numero de Oficio',
       htmlContent
     });

     return NextResponse.json({ msg: 'Correo enviado correctamente.' });

  } catch (error) {
       return NextResponse.json({ msg: 'Error al enviar', error: error.message });
  }
}
