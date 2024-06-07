import React from 'react'
import Icon from '../icon';
import clsx from 'clsx';
import styles from './styles.module.css'
import Link from 'next/link';

interface BtnIconProps {
  icon: string;
  size: 'sm' | 'md' | 'lg';
  color: 'pink' | 'blue';
  href?: string
}

const BtnIcon = ({icon, size = 'md', color = 'pink', href = ''}: BtnIconProps) => {
  return (
    <Link
      href={href}
      type='button'
    >
      <Icon 
        icon={icon} 
        className={clsx(
          styles.btn,
          styles[size], 
          styles[color]
        )} 
      />
    </Link>
  )
}

export default BtnIcon