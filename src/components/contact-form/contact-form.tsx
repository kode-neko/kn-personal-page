'use client'

import { useFormState } from 'react-dom';
import { ZodError, ZodString, z } from "zod";
import { Field } from '../field'
import styles from './styles.module.css'
import { Contact } from '@/models';
import { useEffect } from 'react';

const schema: {[key: string]: ZodString} = {
  name: z.string(),
  mail: z.string().email({message: 'wrong mail'}),
  msg: z.string(),
}
const contactSchema = z.object(schema);

function chkData(field: string, val: string) {
  try {
    schema[field].parse(val)
    console.log(field, val)
  } catch(err) {
    console.log((err as ZodError).issues)
  }
}

export async function chkForm( previousState: string | undefined | null, formData: FormData,) {
  const result = {
    name: formData.get("name")?.toString(),
    mail: formData.get("mail")?.toString(),
    msg: formData.get("msg")?.toString(),
  }
  try {
    contactSchema.parse(result);
  } catch(err) {
    console.log((err as ZodError).issues)
  }
  return result;
}

interface ContactFormProps {
  values: Contact,
  onSubmit: (contact: Contact) => void
}

const ContactForm = ({values, onSubmit}: ContactFormProps) => {
  const [state, formAction] = useFormState(chkForm, values);

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
          onChange={(val) => chkData('name', val)}
        />
        <Field
          name='mail'
          icon='fa-solid fa-envelope'
          placeholder='mail@mail.com'
          onChange={(val) => chkData('mail', val)}
        />
        <Field
          name='msg'
          icon='fa-solid fa-comment-dots'
          placeholder='Congrats, critics, bla, bla'
          onChange={() => console.log('cambio msg')}
        />
      </div>
      <div className={styles.bottom}>
         {/* <p className={styles.hint}>Quis nulla deserunt nostrud anim</p> */}
        <div className={styles.actions}>
          <button type='submit'>enviar</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm