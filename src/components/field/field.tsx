import { ChangeEvent } from 'react';
import Icon from '../icon'
import styles from './styles.module.css'

interface FieldProps {
  name: string;
  icon: string, 
  placeholder: string, 
  onChange: (val: string) => void
}

const Field = ({name, icon, placeholder, onChange}: FieldProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.field}>
        <Icon 
          className={styles.icon} 
          icon={icon} 
        />
        <input 
          name={name} 
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        />
      </div>
      <div className={styles.hint}>hint</div>
    </div>
  )
}

export default Field