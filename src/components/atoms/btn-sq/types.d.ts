interface BtnSqProps {
  icon?: string;
  type?: "submit" | "reset" | "button" | undefined;
  size?: 'sm' | 'md' | 'lg';
  color?: 'pink' | 'blue';
  disabled?: boolean;
  onClick?: () => void
}

export default BtnSqProps;