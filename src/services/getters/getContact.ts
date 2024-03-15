import IContact from "../IContact";
import { ContactLocal } from "../local";
import { ContactPrisma } from "../prisma";
import { ContactRest } from "../rest";

function getContact(): IContact {
  let contact: IContact

  switch(process.env.SERVICE) {
    case 'rest':
      contact = ContactRest.getInstance();
      break;
    case 'prisma':
      contact = ContactPrisma.getInstance();
      break;
    default:
      contact = ContactLocal.getInstance();
  }

  return contact;
}

export default getContact;