import { Contact } from "../../../model";
import { UseFormRegister, FieldErrors,FieldNamesMarkedBoolean,FieldNamesMarkedBoolean } from "react-hook-form";

interface FieldProps {
  name: 'name' | 'id' | 'mail' | 'content';
  icon: string;
  placeholder: string;
  isTextarea?: boolean;
  register: UseFormRegister<Contact>;
  errors: FieldErrors<Contact>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<Contact>>>;
  touchedFields: Partial<Readonly<FieldNamesMarkedBoolean<Contact>>>;
}

export default FieldProps