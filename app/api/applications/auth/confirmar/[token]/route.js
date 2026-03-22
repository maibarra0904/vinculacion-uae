import { NextResponse } from 'next/server';
import { User } from '../../../../models';

export async function GET(req, { params }) {
  try {
     const { token } = await params;

     const usuario = await User.findOne({ where: { token } });
     if (!usuario) {
         return NextResponse.json({ err: 'Usuario No Encontrado' }, { status: 404 });
     }

     await usuario.update({ confirmed: true, token: null });

     return NextResponse.json({ msg: 'Usuario Actualizado' });

  } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
