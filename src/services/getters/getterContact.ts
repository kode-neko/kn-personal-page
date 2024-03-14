import { ContactLocal, ContactRest } from "..";
import IContact from "../IContact";

function getterContact(): IContact {
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

export default getterContact;