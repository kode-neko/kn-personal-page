import { useTranslation } from 'react-i18next'
import { avatarPic, socialList } from '../../../globals'
import avatar from '../../../../assets/avatar.png'
import { BtnIcon } from '../../atoms'
import styles from './styles.module.css'

const WelcomeSection = () => {
  const {t} = useTranslation();
  return (
    <section 
      className={styles.welcome}
      id="sectWelcome"
    >
      <div className={styles.left}>
        <h1 
          className={styles.title} 
          data-test="welcome" 
        >
          {t('mainTitle')}
        </h1>
        <div className={styles.cont}>
          <div className={styles.desc}>
            <h2>Kodeneko</h2>
            <h3>{t('occu')}</h3>
            <p>{t('desc')}</p>
          </div>
          <ul className={styles.social}>
            {socialList.map(s => (
              <li key={s.id}>
                <a href={s.path as string}>
                <BtnIcon
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
    </section>
  )
}

export default WelcomeSection