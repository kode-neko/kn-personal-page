import clsx from 'clsx';
import styles from './styles.module.less'
import BtnIconTransProps from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const BtnIcon = ({icon, size = 'md', color = 'pink'}: BtnIconTransProps) => {
  return (
    <div
      className={clsx(
        styles.btnn,
        styles[size], 
        styles[color]
      )}
    >
      <FontAwesomeIcon
        className={styles.icon}
        icon={icon as IconProp}
      />
    </div>

  )
}

export default BtnIcon