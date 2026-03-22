import { Sequelize } from 'sequelize';
import pg from 'pg';

let sequelize;

if (!global.sequelize) {
  global.sequelize = new Sequelize({
    database: 'uae_fasteneddo',
    dialect: 'postgres',
    dialectModule: pg, // Corrige el error "Please install pg package manually" en Next.js
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: 'mcv.h.filess.io',
    port: 5433,
    logging: false, // Desactivar logs en consola de producción para mayor velocidad
    pool: {
      max: 3, // Consumo de conexiones bajo y controlado en función serverless
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

sequelize = global.sequelize;

export default sequelize;
