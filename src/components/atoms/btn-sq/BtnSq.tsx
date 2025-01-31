import clsx from 'clsx';
import styles from './styles.module.less'
import BtnSqProps from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const BtnSq = ({ children, icon, size = 'md', color = 'pink', type, onClick, disabled = false }: React.PropsWithChildren<BtnSqProps>) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.btn,
        styles[size], 
        styles[color]
      )}
    >
      { icon && 
        <FontAwesomeIcon
          className={styles.icon} 
          icon={icon as IconProp}
        /> 
      }
      <div className={clsx(styles.label, children && styles.sep)}>
        {children}
      </div>
    </button>

  )
}

export default BtnSq