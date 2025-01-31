import axios from 'axios';
import { Contact } from '../model';
import { serviceContact } from '../globals';

const { VITE_CONTACT_SEND } = import.meta.env;

function sendMsg(contact: Contact) {
  console.log(`${VITE_CONTACT_SEND}${serviceContact}`)
  return axios.post(`${VITE_CONTACT_SEND}${serviceContact}`, contact)
}

export {sendMsg}