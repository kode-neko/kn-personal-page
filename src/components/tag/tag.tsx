import clsx from 'clsx'
import styles from './styles.module.css'

interface TagProps {
  label: string,
  color: 'blue' | 'pink'
}

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