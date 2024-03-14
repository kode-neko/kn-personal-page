import { Contact } from "@/models";
import IContact from "../IContact";

class ContactRest implements IContact {
  newMesvsage(contact: Contact) : Contact {
    return contact;
  }
}

export default ContactRest;