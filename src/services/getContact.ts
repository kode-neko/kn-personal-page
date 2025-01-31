import axios from 'axios';
import { Contact } from '../model';
import { serviceContact } from '../globals';

const {VITE_CONTACT_SEND} = process.env

function sendMsg(contact: Contact) {
  return axios.post(`${VITE_CONTACT_SEND}${serviceContact}`, contact)
}

export {sendMsg}