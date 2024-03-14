import { Contact } from "@/models";
import IContact from "../IContact";

class ContactLocal implements IContact {
  newMesvsage(contact: Contact) : Contact {
    return contact;
  }
}

export default ContactLocal;