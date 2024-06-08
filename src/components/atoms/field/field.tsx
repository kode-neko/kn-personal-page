import { ChangeEvent } from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import FieldProps from './types.d.ts'

const Field = ({value, name, icon, hint='', placeholder, isTextarea = false, onChange, onBlur}: FieldProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.field}>
        <FontAwesomeIcon
    className={styles.icon} 
    icon={icon as IconProp}
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