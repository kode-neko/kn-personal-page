import Icon from '../icon'
import styles from './styles.module.css'

interface FieldProps {
  icon: string, 
  placeholder: string, 
  onChange: () => {}
}

const Field = ({icon, placeholder, onChange}: FieldProps) => {
  return (
    <div className={styles.field}>
      <Icon className={styles.icon} icon={icon} />
      <input placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Field