import Application from "./Application";
import Email from "./Email";
import LetterNumber from "./LetterNumber";
import User from "./User";
import Desglose from "./Desglose";
import sequelize from "../config/db";

// Auto-sincronizar sólo si la conexión directa a PostgreSQL está activada de forma explícita
if (process.env.DB_AUTO_SYNC === 'true') {
  if (!global.dbSynced) {
    global.dbSynced = sequelize.sync()
      .then(() => {
        console.log('✅ Tablas sincronizadas en la base de datos.');
      })
      .catch((err) => {
        console.error('❌ Error al sincronizar tablas en la base de datos:', err.message);
      });
  }
}

export { Application, User, LetterNumber, Email, Desglose };
