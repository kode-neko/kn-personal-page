'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { Icon } from '@/components'

interface FieldProps {
  icon: string, 
  placeholder: string, 
  onChange: () => {}
}

const Field = ({icon, placeholder, onChange}: FieldProps) => {
  return (
    <div className={styles.field}>
      <Icon className={styles.icon} icon={icon} />
      <input placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.cont}>
        <div className={styles.contPic}>
          <Image
            src='/mailBox.png'
            alt=''
            width={399}
            height={280}
            className={styles.pic}
          />
        </div>
        <form>
          <div className={styles.fieldset}>
            <Field
              icon='fa-solid fa-face-smile'
              placeholder='my name is...'
              onChange={() => console.log('cambio name')}
            />
            <Field
              icon='fa-solid fa-envelope'
              placeholder='mail@mail.com'
              onChange={() => console.log('cambio mail')}
            />
            <Field
              icon='fa-solid fa-comment-dots'
              placeholder='Congrats, critics, bla, bla'
              onChange={() => console.log('cambio msg')}
            />
          </div>
          <div className={styles.bottom}>
            <p className={styles.hint}>Quis nulla deserunt nostrud anim</p>
            <div className={styles.actions}>
              <button>enviar</button>
            </div>
          </div>
        </form>
      </div>                                 
    </section>
  )
}

export default Contact