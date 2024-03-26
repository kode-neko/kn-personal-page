import mariadb from 'mariadb'
import { Sequelize } from "sequelize";

let conn:Sequelize

function connection() {
  const {MARIADB_HOST, MARIADB_PORT, DB_NAME, DB_USER, DB_PASS} = process.env
  return new Sequelize({
    dialect: 'mariadb', 
    dialectModule: mariadb, 
    host: MARIADB_HOST, 
    port: Number(MARIADB_PORT), 
    database: DB_NAME, 
    username: DB_USER, 
    password: DB_PASS
  });

}

function getConnSeq(): Sequelize {
  if(!conn) {
    conn = connection()
  }
  return conn
}

export {
  getConnSeq
}