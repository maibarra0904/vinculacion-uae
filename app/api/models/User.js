import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const User = sequelize.define('User', {
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'users',
  timestamps: true
});

export default User;
