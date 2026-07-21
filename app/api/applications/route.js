import { NextResponse } from 'next/server';
import { Application, LetterNumber } from '../models';
import { supabase } from '@/utils/supabase';

export async function GET() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw new Error(error.message);
      return NextResponse.json({ data });
    }

    const applications = await Application.findAll({
      order: [['id', 'DESC']]
    });
    return NextResponse.json({ data: applications });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, periodo, tramite } = body;

    // Validación básica tal como la tenía el backend
    if (!name?.trim()) {
      return NextResponse.json({ error: "El Nombre de estudiante no puede ir vacio" }, { status: 400 });
    }
    if (!periodo?.trim()) {
      return NextResponse.json({ error: "El periodo no puede ir vacio" }, { status: 400 });
    }
    if (!tramite?.trim()) {
      return NextResponse.json({ error: "El tramite no puede ir vacio" }, { status: 400 });
    }

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      // Usar Supabase REST API
      const { data: apps, error: countErr } = await supabase
        .from('applications')
        .select('id');

      if (countErr) throw new Error(countErr.message);

      const { data: initRow } = await supabase
        .from('initvalues')
        .select('*')
        .eq('id', 1)
        .maybeSingle();

      const initNumber = initRow ? parseInt(initRow.letterNumber) : 1;
      const idApp = (apps?.length || 0) + initNumber;

      const { data: newApp, error: insertErr } = await supabase
        .from('applications')
        .insert([{
          name: body.name,
          periodo: body.periodo,
          tramite: body.tramite,
          status: body.status || 'utilizado',
          idApp: idApp
        }])
        .select()
        .single();

      if (insertErr) throw new Error(insertErr.message);

      return NextResponse.json({ data: newApp }, { status: 201 });
    }

    // Fallback a Sequelize
    const applications = await Application.findAll();
    const registerInitNumber = await LetterNumber.findByPk(1);
    const initNumber = registerInitNumber ? parseInt(registerInitNumber.letterNumber) : 1;

    const idApp = (applications?.length || 0) + initNumber;

    const app = await Application.create({
      ...body,
      idApp
    });

    return NextResponse.json({ data: app }, { status: 201 });
  } catch (error) {
    console.error("APPLICATION_CREATE_ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
