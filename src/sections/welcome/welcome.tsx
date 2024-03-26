import Image from 'next/image'
import styles from './styles.module.css'
import { avatarPic, socialList } from '@/globals'
import { BtnIcon } from '@/components'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.left}>
        <h1 className={styles.title} data-test="welcome">mainTitle</h1>
        <div className={styles.cont}>
          <div className={styles.desc}>
            <h2>Kodeneko</h2>
            <h3>occupation</h3>
            <p>
              Sunt do ad nulla exercitation exercitation eu occaecat ea velit.
            </p>
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