import React from 'react'
import styles from './styles.module.css'

interface SubTitleProps {
  label: string
}

const SubTitle = ({label}: SubTitleProps) => {
  return (
    <h2 className={styles.title}>{label}</h2>
  )
}

export default SubTitle