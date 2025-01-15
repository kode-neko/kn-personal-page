import clsx from 'clsx'
import styles from './styles.module.css'
import TagProps from './types'

const Tag = ({label, color='blue'}: TagProps) => {
  return (
    <div className={clsx(
      styles.tag,
      styles[color]
    )}>
      {label}
    </div>
  )
}

export default Tag