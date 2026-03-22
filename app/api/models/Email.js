import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Email = sequelize.define('Email', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  oficio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tutor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  emailtutor: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  }
}, {
  tableName: 'email',
  timestamps: true
});

export default Email;
