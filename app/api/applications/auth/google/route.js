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
     const { email, name, aud } = googleUser;

     // Validar que el token pertenezca a nuestra app
     if (aud !== process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
          return NextResponse.json({ msg: "Audience del Token no coincide" }, { status: 400 });
     }

     if (!email) {
          return NextResponse.json({ msg: "No se pudo recuperar el correo de Google" });
     }

     let usuario = null;

     // Si tenemos Supabase URL y Anon Key, consultar via cliente de Supabase (HTTPS REST)
     if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
         const { data: dbUser, error: findError } = await supabase
             .from('users')
             .select('*')
             .eq('email', email)
             .maybeSingle();

         if (findError) throw new Error(findError.message);
         usuario = dbUser;

         if (!usuario) {
             const randomPass = generarId();
             const newPassword = await hashPassword(randomPass);
             const { data: newUser, error: createError } = await supabase
                 .from('users')
                 .insert([{
                     nombre: name || 'Usuario de Google',
                     email: email,
                     password: newPassword,
                     confirmed: true,
                     token: null
                 }])
                 .select()
                 .single();

             if (createError) throw new Error(createError.message);
             usuario = newUser;
         }
     } else {
         // Fallback a Sequelize
         usuario = await User.findOne({ where: { email } });

         if (!usuario) {
             const randomPass = generarId();
             usuario = await User.create({
                  nombre: name || 'Usuario de Google',
                  email: email,
                  password: await hashPassword(randomPass),
                  confirmed: true,
                  token: null
             });
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
