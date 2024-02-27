import Image from 'next/image'
import styles from './styles.module.css'
import { avatarPic, socialList } from '@/globals'
import Link from 'next/link'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.left}>
        <h1 className={styles.title}>mainTitle</h1>
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
              <Link
                key={s.id}
                about={s.path}
                href={s.path}
              >
                {s.id}
              </Link>
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