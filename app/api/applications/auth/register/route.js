import { NextResponse } from 'next/server';
import { User } from '../../../models';
import { hashPassword, generarId } from '../../../utils/auth';

export async function POST(req) {
  try {
    const body = await req.json();
    const { nombre, email, password } = body;

    if (!nombre || !email || !password) {
       return NextResponse.json({ err: "Faltan campos obligatorios" });
    }

    const existeUsuario = await User.findOne({ where: { email } });
    if (existeUsuario) {
        return NextResponse.json({ err: 'Usuario ya Registrado' });
    }

    const pass = await hashPassword(password);
    const token = generarId();

    const usuario = await User.create({
        nombre,
        email,
        password: pass,
        token
    });

    return NextResponse.json({ msg: 'Usuario creado exitosamente', token });

  } catch (error) {
     return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
