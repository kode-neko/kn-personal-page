import { Contact } from "@/models";
import IContact from "../IContact";
import { contactCreateInput } from "@prisma/client";
import { getPrisma } from "../connection";

class ContactPrisma implements IContact {

  private static _instance: ContactPrisma;

  constructor() {}

  public static getInstance() {
    if(!this._instance) {
      this._instance = new ContactPrisma();
    }
    return this._instance
  }

  newMessage(contact: Contact): Promise<Contact> {
    return getPrisma().contact
      .create({ data: contact as contactCreateInput }) as unknown as Promise<Contact>
  }

}

export default ContactPrisma