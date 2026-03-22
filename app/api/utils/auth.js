import jwt from 'jsonwebtoken';
// Usamos bcryptjs para evitar errores de binarios nativos en entornos serverless (Netlify/Vercel)
// Si prefieres bcrypt nativo, solo cámbialo, pero bcryptjs es 100% seguro y portable.
import bcrypt from 'bcryptjs'; 

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const checkPassword = async (enteredPassword, storedHash) => {
    return await bcrypt.compare(enteredPassword, storedHash);
};

export const generarJWT = (payload) => {
    const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET || 'palabraSecretA', {
        expiresIn: '180d', // 180 días tal como el backend
    });
    return token;
};

export const generarId = () => Math.random().toString(32).substring(2) + Date.now().toString(32);
