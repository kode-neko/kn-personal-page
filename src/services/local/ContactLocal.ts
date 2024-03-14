import { Contact } from "@/models";
import IContact from "../IContact";

class ContactLocal implements IContact {

  private static _instance: ContactLocal;

  private constructor() {
  }

  public static getInstance(): ContactLocal {
    if(!this._instance) {
      this._instance = new ContactLocal();
    }
    return this._instance;
  }

  newMesvsage(contact: Contact) : Contact {
    return contact;
  }
}

export default ContactLocal;