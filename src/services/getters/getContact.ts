'use server'

import { Contact } from "@/models";
import IContact from "../IContact";
import { ContactLocal } from "../local";
import { ContactPrisma } from "../prisma";
import { ContactRest } from "../rest";

function getContact(): IContact {
  let contact: IContact

  switch(process.env.NEXT_PUBLIC_SERVICE) {
    case 'rest':
      contact = ContactRest.getInstance();
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
  return getContact().newMessage(contact);
} 

export {
  newMessage
}