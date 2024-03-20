import { Contact } from "@/models";
import IContact from "../IContact";
import {DataTypes, Model, Sequelize} from 'sequelize'
import mariadb from 'mariadb'

let sequelize:Sequelize
class ContactSeq extends Model {}

const {MARIADB_HOST, MARIADB_PORT, DB_NAME, DB_USER, DB_PASS} = process.env

function initSequalize() {
  sequelize = new Sequelize({
    dialect: 'mariadb', 
    dialectModule: mariadb, 
    host: MARIADB_HOST, 
    port: Number(MARIADB_PORT), 
    database: DB_NAME, 
    username: DB_USER, 
    password: DB_PASS
  });
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
    sequelize,
    freezeTableName: true,
    tableName: 'contact',
    modelName: 'ContactSeq',
    timestamps: false
  })
}

class ContactSequalize implements IContact {

  private static _instance: ContactSequalize;

  private constructor() {
    initSequalize();
  }

  public static getInstance(): ContactSequalize {
    if(!this._instance) {
      this._instance = new ContactSequalize();
    }
    return this._instance;
  }

  newMessage(contact: Contact): Promise<Contact> {
    return ContactSeq.create({...contact}).then(c => Promise.resolve(c)) as Promise<Contact>;
  }
}

export default ContactSequalize;