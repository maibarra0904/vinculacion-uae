import { NextResponse } from 'next/server';
import { User } from '../../../models';
import { supabase } from '@/utils/supabase';
import { hashPassword, generarId } from '../../../utils/auth';

export async function POST(req) {
  try {
    const body = await req.json();
    const { nombre, email, password } = body;

    if (!nombre || !email || !password) {
       return NextResponse.json({ err: "Faltan campos obligatorios" });
    }

    let existeUsuario = null;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const { data: dbUser, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .maybeSingle();

        if (error) throw new Error(error.message);
        existeUsuario = dbUser;
    } else {
        existeUsuario = await User.findOne({ where: { email } });
    }

    if (existeUsuario) {
        return NextResponse.json({ err: 'Usuario ya Registrado' });
    }

    const pass = await hashPassword(password);
    const token = generarId();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const { error: insertError } = await supabase
            .from('users')
            .insert([{
                nombre,
                email,
                password: pass,
                token,
                confirmed: false
            }]);

        if (insertError) throw new Error(insertError.message);
    } else {
        await User.create({
            nombre,
            email,
            password: pass,
            token
        });
    }

    return NextResponse.json({ msg: 'Usuario creado exitosamente', token });

  } catch (error) {
     return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
