import { Sequelize } from 'sequelize';
import pg from 'pg';

let sequelize;

if (!global.sequelize) {
  const isSSL = process.env.DB_SSL !== 'false';

  const dialectOptions = isSSL
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {};

  const commonOptions = {
    dialect: 'postgres',
    dialectModule: pg,
    logging: false,
    dialectOptions,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };

  let initialized = false;

  // Si se define DATABASE_URL, se intenta parsear de manera segura
  if (process.env.DATABASE_URL) {
    try {
      global.sequelize = new Sequelize(process.env.DATABASE_URL, commonOptions);
      initialized = true;
    } catch (err) {
      console.warn("⚠️ Advertencia: No se pudo instanciar Sequelize con DATABASE_URL (caracteres especiales desprotegidos). Usando campos individuales de conexión.", err.message);
    }
  }

  if (!initialized) {
    global.sequelize = new Sequelize({
      ...commonOptions,
      database: process.env.DB_NAME || 'postgres',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    });
  }
}

sequelize = global.sequelize;

export default sequelize;
