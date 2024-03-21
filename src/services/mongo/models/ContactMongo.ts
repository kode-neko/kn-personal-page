import {Schema, model} from 'mongoose'

const schema = new Schema({
  name: String,
  main: String,
  msg: String
}, {
  _id: false,
  collection: 'contact'
})

const ContactMongo = model('contact', schema)

export default ContactMongo;
