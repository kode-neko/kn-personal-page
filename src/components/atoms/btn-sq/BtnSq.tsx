import clsx from 'clsx';
import styles from './styles.module.less'
import BtnISqProps from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const BtnISq = ({icon, label, size = 'md', color = 'pink'}: BtnISqProps) => {
  return (
    <button className={clsx(
      styles.btn,
      styles[size], 
      styles[color]
    )} >
      { icon && <FontAwesomeIcon
        className={styles.icon} 
        icon={icon as IconProp}
      /> }
      <div className={styles.label}>
        {label}
      </div>
    </button>

  )
}

export default BtnISq