import { getConnSeq } from "@/services/connection";
import { DataTypes, Model } from "sequelize";

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
  sequelize: getConnSeq(),
  freezeTableName: true,
  tableName: 'contact',
  modelName: 'ContactSeq',
  timestamps: false
})

export default ContactSeq