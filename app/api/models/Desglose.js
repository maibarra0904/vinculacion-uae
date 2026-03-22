import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Desglose = sequelize.define('Desglose', {
  student: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  info: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  tableName: 'desgloses',
  timestamps: true
});

export default Desglose;
