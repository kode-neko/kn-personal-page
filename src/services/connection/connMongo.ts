import {Mongoose, connect} from 'mongoose';
 
const {MONGO_URL} = process.env;

let conn: Mongoose | undefined

async function getConnMongo(): Promise<Mongoose> {
  if(!conn) {
    conn = await connect(MONGO_URL as string).then();
  }
  return Promise.resolve(conn as Mongoose)
}

function disconnMongo(): Promise<void> {
  if(!conn)
    return Promise.reject();
  return conn.disconnect()
    .then(() => conn = undefined);
}

export {
  getConnMongo,
  disconnMongo
}