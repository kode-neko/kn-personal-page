import enImg from '../../../../assets/en.png'
import esImg from '../../../../assets/es.png'
import styles from './styles.module.less'
import SwLangProps from './type'
import clsx from 'clsx'

const SwLang = ({isEn, onClick}: SwLangProps) => {
  return (
    <div className={styles.cont} onClick={onClick}>
      <div className={clsx(styles.lang, !isEn && styles.active)}>
        <img src={esImg} />
      </div>
      <div className={clsx(styles.lang, isEn && styles.active)}>
        <img src={enImg} />
      </div>
    </div>
  )
}

export default SwLang