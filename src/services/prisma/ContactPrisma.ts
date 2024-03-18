import { Contact } from "@/models";
import IContact from "../IContact";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    return prisma.contact.create({data: contact})
  }

}

export default ContactPrisma