import axios from 'axios';
import { Contact } from '../model';

const {VITE_CONTACT_SEND} = import.meta.env

function sendMsg(contact: Contact) {
  return axios.post(VITE_CONTACT_SEND, contact)
}

export {
  sendMsg
}