import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Application = sequelize.define('Application', {
  idApp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  periodo: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  tramite: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: 'utilizado',
  }
}, {
  tableName: 'applications',
  timestamps: true // Sequelize añadecreatedAt y updatedAt por defecto, puedes desactivarlo si en tu DB no están.
});

export default Application;
