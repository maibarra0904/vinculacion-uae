import { NextResponse } from 'next/server';
import { User } from '../../../models';
import { checkPassword } from '../../../utils/auth';

export async function POST(req) {
  try {
     const body = await req.json();
     const { email, password } = body;

     if (!email || !password) {
         return NextResponse.json({ msg: 'Email y Password son obligatorios' });
     }

     const usuario = await User.findOne({ where: { email } });
     if (!usuario) {
         return NextResponse.json({ msg: 'No hay un usuario con esas credenciales' });
     }

     if (!usuario.confirmed) {
         return NextResponse.json({ msg: 'Usuario registrado pero no ha confirmado su cuenta' });
     }

     const passVerified = await checkPassword(password, usuario.password);
     if (!passVerified) {
         return NextResponse.json({ msg: 'El password es incorrecto' });
     }

     // Auth Éxito
     const data = { id: usuario.id, nombre: usuario.nombre, email };

     return NextResponse.json({ data });

  } catch (error) {
      console.error("API_LOGIN_ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
