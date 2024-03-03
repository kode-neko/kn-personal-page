import Icon from '../icon'
import styles from './styles.module.css'

interface FieldProps {
  name: string;
  icon: string, 
  placeholder: string, 
  onChange: () => {}
}

const Field = ({name, icon, placeholder, onChange}: FieldProps) => {
  return (
    <div className={styles.field}>
      <Icon 
        className={styles.icon} 
        icon={icon} 
      />
      <input 
        name={name} 
        placeholder={placeholder} 
      />
    </div>
  )
}

export default Field