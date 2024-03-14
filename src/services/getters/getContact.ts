import { ContactLocal, ContactRest } from "..";
import IContact from "../IContact";

function getContact(): IContact {
  let contact: IContact

  switch(process.env.SERVICE) {
    case 'rest':
      contact = ContactRest.getInstance();
      break;
    default:
      contact = ContactLocal.getInstance();
  }

  return contact;
}

export default getContact;