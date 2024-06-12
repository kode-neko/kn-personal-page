import clsx from 'clsx';
import styles from './styles.module.css'
import BtnIconProps from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const BtnIcon = ({icon, size = 'md', color = 'pink'}: BtnIconProps) => {
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

export default BtnIcon