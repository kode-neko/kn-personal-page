import React from 'react'
import Icon from '../icon';
import clsx from 'clsx';
import styles from './styles.module.css'

interface BtnIconProps {
  icon: string;
  size: 'sm' | 'md' | 'lg';
  color: 'pink' | 'blue';
  onClick: () => void
}

const BtnIcon = ({icon, size = 'md', color = 'pink', onClick}: BtnIconProps) => {
  return (
    <button 
      onClick={onClick}
      type='button'
    >
      <Icon 
        icon={icon} 
        className={clsx(
          styles[size], 
          styles[color]
        )} 
      />
    </button>
  )
}

export default BtnIcon