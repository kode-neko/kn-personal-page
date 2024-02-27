import Image from 'next/image'
import styles from './styles.module.css'
import { avatarPic } from '@/globals'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.left}>
        <h1 className={styles.title}>mainTitle</h1>
        <div className={styles.cont}>
          <h2 className={styles.subtitle}>Kodeneko</h2>
          <h3 className={styles.ocupation}>occupation</h3>
          <p className={styles.desc}>
            Sunt do ad nulla exercitation exercitation eu occaecat ea velit.
          </p>
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