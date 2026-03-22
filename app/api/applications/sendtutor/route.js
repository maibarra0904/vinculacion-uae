import { NextResponse } from 'next/server';
import { sendBrevoEmail } from '../../utils/mailing';

export async function POST(req) {
  try {
     const body = await req.json();
     const { email, oficio, fecha, tutor, emailtutor } = body;

     const htmlContent = `
         <p>El numero de oficio es: <strong>${oficio}</strong></p>
         <p>La fecha es: ${fecha}</p>
         <p>El tutor asignado es: ${tutor}</p>
         <p>El email del tutor para contacto es: ${emailtutor}</p>
     `;

     await sendBrevoEmail({
       to: email,
       cc: emailtutor,
       subject: 'Numero de Oficio - Tutor Asignado',
       htmlContent
     });

     return NextResponse.json({ msg: 'Correo enviado correctamente.' });

  } catch (error) {
       return NextResponse.json({ msg: 'Error al enviar', error: error.message });
  }
}
