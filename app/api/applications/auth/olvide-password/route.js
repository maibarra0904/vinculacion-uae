import { NextResponse } from 'next/server';
import { User } from '../../../models';
import { generarId } from '../../../utils/auth';

export async function POST(req) {
  try {
     const body = await req.json();
     const { email } = body;

     if (!email) {
         return NextResponse.json({ msg: 'Email es obligatorio' });
     }

     const usuario = await User.findOne({ where: { email } });
     if (!usuario) {
         return NextResponse.json({ err: 'El email no pertenece a ningun usuario' });
     }

     const valueToken = generarId();
     await usuario.update({ confirmed: false, token: valueToken });

     return NextResponse.json({ 
         msg: 'Te hemos enviado un email con las instrucciones', 
         token: valueToken 
     });

  } catch (error) {
       return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
