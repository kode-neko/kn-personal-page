'use client'

import { useFormState } from 'react-dom';
import { Field } from '../field'
import styles from './styles.module.css'
import { Contact } from '@/models';
import { useEffect } from 'react';

export async function action( previousState: string | undefined | null, formData: FormData,) {
  console.log("previous recorded state ", previousState);
  return {
    name: formData.get("name")?.toString(),
    mail: formData.get("mail")?.toString(),
    msg: formData.get("msg")?.toString(),
  };
}

interface ContactFormProps {
  values: Contact,
  onSubmit: (contact: Contact) => void
}

const ContactForm = ({values, onSubmit}: ContactFormProps) => {
  const [state, formAction] = useFormState(action, values);

  useEffect(() => {
    onSubmit(state as Contact)
  }, [state])

  return (
    <form 
      action={formAction}
      className={styles.form}
    >
      <div className={styles.fieldset}>
        <Field
          name='name'
          icon='fa-solid fa-face-smile'
          placeholder='my name is...'
          onChange={() => console.log('cambio name')}
        />
        <Field
          name='mail'
          icon='fa-solid fa-envelope'
          placeholder='mail@mail.com'
          onChange={() => console.log('cambio mail')}
        />
        <Field
          name='msg'
          icon='fa-solid fa-comment-dots'
          placeholder='Congrats, critics, bla, bla'
          onChange={() => console.log('cambio msg')}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.hint}>Quis nulla deserunt nostrud anim</p>
        <div className={styles.actions}>
          <button type='submit'>enviar</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm