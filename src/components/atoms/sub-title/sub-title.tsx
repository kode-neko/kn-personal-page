import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

interface SubTitleProps {
  label: string,
  align?: 'center' | 'left' | 'right'
}

const SubTitle = ({label, align = 'center'}: SubTitleProps) => {
  return (
    <h2 className={clsx(styles.title, styles[align])}>{label}</h2>
  )
}

export default SubTitle