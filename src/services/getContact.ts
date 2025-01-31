import axios from 'axios';
import { serviceContact } from '../../globals';
import { Contact } from '../../model';

const {VITE_CONTACT_SEND} = process.env

function sendMsg(contact: Contact) {
  return axios.post(`${VITE_CONTACT_SEND}${serviceContact}`, contact)
}

export {sendMsg}