import { Contact } from "@/models"

interface IContact {
  newMesvsage: (contact: Contact) => Promise<Contact>
}
 
export default IContact 