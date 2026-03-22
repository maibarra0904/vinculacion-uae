import { NextResponse } from 'next/server';
import { Application, LetterNumber } from '../models';

export async function GET() {
  try {
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

    // Lógica para auto-incrementar idApp basandose en el contador inicial de la tabla initvalues
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
