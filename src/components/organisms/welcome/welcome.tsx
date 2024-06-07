import Image from 'next/image'
import styles from './styles.module.css'
import { avatarPic, socialList } from '@/globals'
import { BtnIcon } from '@/components'
import { t } from '@/actions'

const Welcome = () => {
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
                <BtnIcon
                  href={s.path as string}
                  color='blue'
                  size='lg'
                  icon={s.icon as string}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={avatarPic.src}
          alt={avatarPic.id}
          width={avatarPic.width}
          height={avatarPic.height}
          className={styles.pic}
        />
      </div>
    </section>
  )
}

export default Welcome