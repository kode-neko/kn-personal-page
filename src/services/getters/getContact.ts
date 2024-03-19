'use server'

import IContact from "../IContact";
import { ContactLocal } from "../local";
import { ContactPrisma } from "../prisma";
import { ContactRest } from "../rest";

function getContact() {
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
  return {
    newMessage: contact.newMessage
  };
}

export default getContact