interface FieldProps {
  value: string;
  name: string;
  icon: string;
  hint?: string;
  placeholder: string, 
  isTextarea?: boolean,
  onChange: (e: ChangeEvent<unknown>) => void,
  onBlur?: (e: FocusEvent<unknown, Element>) => void;
}

export default FieldProps