import { NextResponse } from 'next/server';
import { User } from '../../../models';
import { supabase } from '@/utils/supabase';
import { hashPassword, generarId, generarJWT } from '../../../utils/auth';

export async function POST(req) {
  try {
     const { idToken } = await req.json();

     if (!idToken) {
         return NextResponse.json({ msg: "Token de Google no proveído" }, { status: 400 });
     }

     // Verificar Token con la API de Google
     const googleVerifyRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
     if (!googleVerifyRes.ok) {
         return NextResponse.json({ msg: "Token de Google no válido o expirado" }, { status: 400 });
     }

     const googleUser = await googleVerifyRes.json();
     const { email, name, given_name, family_name, aud } = googleUser;

     // Validar que el token pertenezca a nuestra app
     if (aud !== process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
          return NextResponse.json({ msg: "Audience del Token no coincide" }, { status: 400 });
     }

     if (!email) {
          return NextResponse.json({ msg: "No se pudo recuperar el correo de Google" }, { status: 400 });
     }

     const normalizedEmail = email.trim().toLowerCase();
     const rawName = (name || `${given_name || ''} ${family_name || ''}`.trim() || normalizedEmail.split('@')[0] || 'Usuario de Google').trim();
     const safeName = rawName.slice(0, 30);

     let usuario = null;
     let isNewUser = false;

     // Si tenemos Supabase URL y Anon Key, consultar via cliente de Supabase (HTTPS REST)
     if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
         const { data: dbUsers, error: findError } = await supabase
             .from('users')
             .select('*')
             .ilike('email', normalizedEmail)
             .limit(1);

         if (findError) throw new Error(findError.message);
         usuario = dbUsers?.[0] || null;

         // Si no estaba registrado, se registra primero automáticamente antes de iniciar sesión
         if (!usuario) {
             isNewUser = true;
             const randomPass = generarId();
             const newPassword = await hashPassword(randomPass);
             const { data: newUsers, error: createError } = await supabase
                 .from('users')
                 .insert([{
                     nombre: safeName,
                     email: normalizedEmail,
                     password: newPassword,
                     confirmed: true,
                     token: null
                 }])
                 .select();

             if (createError) throw new Error(createError.message);
             usuario = newUsers?.[0];
         } else if (!usuario.confirmed) {
             // Si existía pero no estaba confirmado, activamos la cuenta automáticamente
             const { data: updatedUsers, error: updateError } = await supabase
                 .from('users')
                 .update({ confirmed: true, token: null })
                 .eq('id', usuario.id)
                 .select();

             if (!updateError && updatedUsers?.[0]) {
                 usuario = updatedUsers[0];
             }
         }
     } else {
         // Fallback a Sequelize
         usuario = await User.findOne({ where: { email: normalizedEmail } });

         if (!usuario) {
             isNewUser = true;
             const randomPass = generarId();
             usuario = await User.create({
                  nombre: safeName,
                  email: normalizedEmail,
                  password: await hashPassword(randomPass),
                  confirmed: true,
                  token: null
             });
         } else if (!usuario.confirmed) {
             usuario.confirmed = true;
             usuario.token = null;
             await usuario.save();
         }
     }

     // Cargar payload para JWT
     const payload = {
         id: usuario.id,
         nombre: usuario.nombre,
         email: usuario.email
     };

     // Generar Token de sesión
     const token = generarJWT(payload);

     return NextResponse.json({ 
         isNewUser,
         data: { 
             id: usuario.id, 
             nombre: usuario.nombre, 
             email: usuario.email,
             token 
         } 
     });

  } catch (error) {
       console.error("GOOGLE_AUTH_ERROR:", error);
       return NextResponse.json({ msg: `Error en el servidor: ${error.message}`, error: error.message }, { status: 500 });
  }
}
