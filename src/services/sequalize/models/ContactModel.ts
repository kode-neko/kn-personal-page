import { getConnSeq } from "@/services/connection";
import { DataTypes, Model } from "sequelize";

class ContactModel extends Model {}

ContactModel.init({
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
  timestamps: false,
})

export default ContactModel