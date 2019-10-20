import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

class Concept extends Model { }

Concept.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  title: { type: DataTypes.CHAR(20) },
  info: DataTypes.TEXT,
  img: DataTypes.TEXT
}, {
    sequelize,
    modelName: 'concept'
  });

export default Concept;
