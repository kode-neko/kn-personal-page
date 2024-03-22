import {Schema, model} from 'mongoose'

const schema = new Schema({
  name: String,
  main: String,
  msg: String
}, {
  _id: false,
  collection: 'contact'
})

const ContactModel = model('contact', schema)

export default ContactModel;
