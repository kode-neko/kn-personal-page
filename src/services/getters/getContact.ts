'use server'

import { Contact } from "@/models";
import IContact from "../IContact";
import { ContactLocal } from "../local";
import { ContactPrisma } from "../prisma";
import { ContactSeq } from "../sequalize";
import { ContactMongo } from "../mongo";

async function getContact(): Promise<IContact> {
  let contact: IContact

  switch(process.env.SERVICE_TYPE) {
    case 'sequelize':
      contact = ContactSeq.getInstance();
      break;
    case 'mongo':
      contact = await ContactMongo.getInstance();
      break;
    case 'prisma':
      contact = ContactPrisma.getInstance();
      break;
    default:
      contact = ContactLocal.getInstance();
  }
  return contact
}

function newMessage(contact: Contact): Promise<Contact> {
  return getContact().then(c => c.newMessage(contact));
} 

export {
  newMessage
}