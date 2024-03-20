import { Contact } from "@/models";
import IContact from "../IContact";
import {DataTypes, Model, Sequelize} from 'sequelize'
import mariadb from 'mariadb'

let sequelize:Sequelize
class ContactSeq extends Model {}

function initSequalize() {
  sequelize = new Sequelize({
    dialect: 'mariadb', 
    dialectModule: mariadb, 
    host: 'localhost', 
    port: 3001, 
    database: 'perpage', 
    username: 'perpage-user', 
    password: 'qwerty'
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