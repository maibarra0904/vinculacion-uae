-- Script SQL para creación de tablas en Supabase (SQL Editor)

-- 1. Tabla de usuarios (users)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    confirmed BOOLEAN NOT NULL DEFAULT FALSE,
    token VARCHAR(255),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Tabla de solicitudes (applications)
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    "idApp" INTEGER,
    name VARCHAR(30) NOT NULL,
    periodo VARCHAR(9),
    tramite TEXT NOT NULL,
    status TEXT DEFAULT 'utilizado',
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Tabla de correos y oficios (email)
CREATE TABLE IF NOT EXISTS email (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    oficio VARCHAR(255) NOT NULL,
    fecha VARCHAR(255) NOT NULL,
    tutor VARCHAR(255),
    emailtutor VARCHAR(255),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Tabla de valores iniciales de oficios (initvalues)
CREATE TABLE IF NOT EXISTS initvalues (
    id SERIAL PRIMARY KEY,
    "letterNumber" VARCHAR(255),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Tabla de desgloses de estudiantes (desgloses)
CREATE TABLE IF NOT EXISTS desgloses (
    id SERIAL PRIMARY KEY,
    student TEXT NOT NULL,
    info JSONB NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
