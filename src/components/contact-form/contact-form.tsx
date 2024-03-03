'use client'

import { Field } from '../field'
import styles from './styles.module.css'

const ContactForm = () => {
  return (
    <form className={styles.form}>
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
  )
}

export default ContactForm