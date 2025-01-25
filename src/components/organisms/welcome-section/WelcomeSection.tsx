import { useTranslation } from 'react-i18next'
import { animSecsLeft, avatarPic, socialList } from '../../../globals'
import avatar from '../../../../assets/avatar.png'
import { BtnIconTrans } from '../../atoms'
import styles from './styles.module.less'
import { motion } from "motion/react"

const WelcomeSection = () => {
  const {t} = useTranslation();
  return (
    <motion.div
      {...animSecsLeft}
      className={styles.welcome}
      id="sectWelcome"
    >
      <div className={styles.left}>
        <h1 
          className={styles.title} 
          data-test="welcome" 
        >
          {t('label.title')}
        </h1>
        <div className={styles.cont}>
          <div className={styles.desc}>
            <h2>Kodeneko</h2>
            <h3>{t('label.occu')}</h3>
            <p>{t('text.desc')}</p>
          </div>
          <ul className={styles.social}>
            {socialList.map(s => (
              <li key={s.id}>
                <a href={s.path as string}>
                <BtnIconTrans
                  color='blue'
                  size='lg'
                  icon={s.icon as string}
                />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src={avatar}
          alt={avatarPic.id}
          width={avatarPic.width}
          height={avatarPic.height}
          className={styles.pic}
        />
      </div>
    </motion.div>
  )
}

export default WelcomeSection