import { NextResponse } from 'next/server';
import { User } from '../../../../models';
import { hashPassword } from '../../../../utils/auth';

export async function GET(req, { params }) {
  try {
     const { token } = await params;

     const usuario = await User.findOne({ where: { token } });
     if (!usuario) {
         return NextResponse.json({ state: false });
     }

     return NextResponse.json({ state: true });

  } catch (error) {
       return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  try {
     const { token } = await params;
     const body = await req.json();
     const { password } = body;

     if (!password || password.length < 6) {
         return NextResponse.json({ msg: 'El Password debe ser de al menos 6 caracteres' });
     }

     const usuario = await User.findOne({ where: { token } });
     if (!usuario) {
         return NextResponse.json({ msg: 'Token no válido o expirado' }, { status: 404 });
     }

     const pass = await hashPassword(password);
     await usuario.update({ confirmed: true, token: null, password: pass });

     return NextResponse.json({ msg: 'Password actualizado correctamente' });

  } catch (error) {
       return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
