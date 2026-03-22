import { NextResponse } from 'next/server';
import { User } from '../../../models';
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

     // Buscar o Crear Usuario en la base de datos
     let usuario = await User.findOne({ where: { email } });

     if (!usuario) {
         // Crear usuario nuevo vinculado a Google
         const randomPass = generarId(); // Contraseña bloqueada para login manual
         
         usuario = await User.create({
              nombre: name || 'Usuario de Google',
              email: email,
              password: await hashPassword(randomPass),
              confirmed: true, // Google ya validó el correo!
              token: null
         });
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
       return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
