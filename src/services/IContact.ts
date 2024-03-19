import { Contact } from "@/models"

interface IContact {
  newMessage: (contact: Contact) => Promise<Contact>
}
 
export default IContact;