import { Contact } from "@/models";
import IContact from "../IContact";
import { getConnMongo } from "../connection";
import ContactModel from "./models/ContactModel";

class ContactMongo implements IContact {

  private static _instance: ContactMongo;

  constructor() {}

  public static async getInstance() {
    if(!this._instance) {
      await getConnMongo();
      this._instance = new ContactMongo();
    }
    return this._instance
  }

  newMessage(contact: Contact): Promise<Contact> {
    return ContactModel.insertMany([contact])
      .then(res => Promise.resolve(res)) as Promise<Contact>
  }

}

export default ContactMongo