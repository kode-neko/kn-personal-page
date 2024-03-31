import { ChangeEvent } from 'react';
import Icon from '../icon'
import styles from './styles.module.css'

interface FieldProps {
  value: string;
  name: string;
  icon: string;
  hint?: string;
  placeholder: string, 
  isTextarea?: boolean,
  onChange: (val: string) => void,
  onBlur?: () => void
}

const Field = ({value, name, icon, hint='', placeholder, isTextarea = false, onChange, onBlur}: FieldProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.field}>
        <Icon 
          className={styles.icon} 
          icon={icon} 
        />
        {isTextarea 
          ? <textarea 
              data-test={'field-' + name}
              value={value} 
              name={name} 
              rows={8}
              placeholder={placeholder}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
              onBlur={() => onBlur && onBlur()}
            />
          : <input
              data-test={'field-' + name}
              value={value} 
              name={name} 
              placeholder={placeholder}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
              onBlur={() => onBlur && onBlur()}
            />
        }
      </div>
      <div className={styles.hint}>{hint}</div>
    </div>
  )
}

export default Field