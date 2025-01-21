import clsx from 'clsx';
import styles from './styles.module.css'
import BtnIconTransProps from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const BtnIconTrans = ({icon, size = 'md', color = 'pink'}: BtnIconTransProps) => {
  return (
    <FontAwesomeIcon
      className={clsx(
        styles.btn,
        styles[size], 
        styles[color]
      )} 
      icon={icon as IconProp}
    />
  )
}

export default BtnIconTrans