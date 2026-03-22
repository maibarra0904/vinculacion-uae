import { NextResponse } from 'next/server';
import { Desglose } from '../../../models';

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const desglose = await Desglose.findOne({
      where: { id }
    });

    if (!desglose) {
      return NextResponse.json({ error: "Desglose no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ data: desglose });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
