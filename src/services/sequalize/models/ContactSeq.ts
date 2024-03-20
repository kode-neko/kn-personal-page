import { DataTypes, Model } from "sequelize";
import getSequalize from "../connect";

class ContactSeq extends Model {}

ContactSeq.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  msg: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: getSequalize(),
  freezeTableName: true,
  tableName: 'contact',
  modelName: 'ContactSeq',
  timestamps: false
})

export default ContactSeq