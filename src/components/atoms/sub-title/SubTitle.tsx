import styles from './styles.module.css'
import clsx from 'clsx'
import SubTitleProps from './types'

const SubTitle = ({label, align = 'center'}: SubTitleProps) => {
  return (
    <h2 className={clsx(styles.title, styles[align])}>{label}</h2>
  )
}

export default SubTitle