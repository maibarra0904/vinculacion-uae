import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const LetterNumber = sequelize.define('LetterNumber', {
  letterNumber: {
    type: DataTypes.STRING,
    allowNull: true // Se asume null si del decorador no especifica allowNull: false
  }
}, {
  tableName: 'initvalues',
  timestamps: true
});

export default LetterNumber;
