import { NextResponse } from 'next/server';
import { Application } from '../../models';
import { supabase } from '@/utils/supabase';

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { name, periodo, tramite, status, idApp } = body;

    if (!id) {
      return NextResponse.json({ error: "ID de registro no proporcionado" }, { status: 400 });
    }

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const updateData = {};
      if (name !== undefined) updateData.name = name;
      if (periodo !== undefined) updateData.periodo = periodo;
      if (tramite !== undefined) updateData.tramite = tramite;
      if (status !== undefined) updateData.status = status;
      if (idApp !== undefined) updateData.idApp = parseInt(idApp, 10);
      updateData.updatedAt = new Date().toISOString();

      const { data, error } = await supabase
        .from('applications')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return NextResponse.json({ data, msg: "Memorando actualizado correctamente" });
    }

    // Fallback a Sequelize
    const app = await Application.findByPk(id);
    if (!app) {
      return NextResponse.json({ error: "Registro no encontrado" }, { status: 404 });
    }

    await app.update({
      name: name ?? app.name,
      periodo: periodo ?? app.periodo,
      tramite: tramite ?? app.tramite,
      status: status ?? app.status,
      idApp: idApp !== undefined ? parseInt(idApp, 10) : app.idApp
    });

    return NextResponse.json({ data: app, msg: "Memorando actualizado correctamente" });
  } catch (error) {
    console.error("APPLICATION_PUT_ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID de registro no proporcionado" }, { status: 400 });
    }

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', id);

      if (error) throw new Error(error.message);
      return NextResponse.json({ msg: "Memorando eliminado correctamente" });
    }

    // Fallback a Sequelize
    const app = await Application.findByPk(id);
    if (!app) {
      return NextResponse.json({ error: "Registro no encontrado" }, { status: 404 });
    }

    await app.destroy();
    return NextResponse.json({ msg: "Memorando eliminado correctamente" });
  } catch (error) {
    console.error("APPLICATION_DELETE_ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
