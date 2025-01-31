import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import type FieldProps from './types.d.ts'

const Field = ({ name, icon, placeholder, isTextarea = false, register, errors, dirtyFields, touchedFields }: FieldProps) => {
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
              rows={8}
              placeholder={placeholder}
              {...register(name)}
            />
          : <input
              data-test={'field-' + name}
              placeholder={placeholder}
              {...register(name)}
            />
        }
      </div>
      <div className={styles.hint}>{
        (dirtyFields[name] || touchedFields[name]) &&
        errors[name] && errors[name].message
      }</div>
    </div>
  )
}

export default Field