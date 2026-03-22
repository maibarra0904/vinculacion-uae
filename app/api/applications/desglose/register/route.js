import { NextResponse } from 'next/server';
import { Desglose } from '../../models';

export async function POST(req) {
  try {
    const body = await req.json();
    
    if (!body?.student || !body?.info) {
      return NextResponse.json({ error: "Campos 'student' e 'info' son obligatorios" }, { status: 400 });
    }

    const desglose = await Desglose.create(body);

    return NextResponse.json({ data: desglose }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
