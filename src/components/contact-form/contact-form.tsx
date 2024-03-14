'use client'

import { ZodError, ZodString, z } from "zod";
import { Field } from '../field'
import { Contact } from '@/models';
import { useState } from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

const schema: {[key: string]: ZodString} = {
  name: z.string().min(1, { message: "El campo es requerido" }),
  mail: z.string().email({message: 'wrong mail'}),
  msg: z.string().min(1, { message: "El campo es requerido" }),
}
const contactSchema = z.object(schema);
const defaultHint: {[key: string]: string} = {
  name: '',
  mail: '',
  msg: ''
}
const defaultDirty: {[key: string]: boolean} = {
  name: false,
  mail: false,
  msg: false
}

interface ContactFormProps {
  initValues: Contact,
  onSubmit: (contact: Contact) => void,
  isSubmit: boolean,
}

const ContactForm = ({initValues, onSubmit, isSubmit}: ContactFormProps) => {
  const [contact, setContact] = useState(initValues);
  const [hint, setHint] = useState(defaultHint)
  const [dirty, setDirty] = useState(defaultDirty)

  const chkData = (field: string, val: string) => {
    let msg = ''
    try {
      schema[field].parse(val)
    } catch(err) {
      msg = (err as ZodError).issues[0].message
    }
    setHint({...hint, [field]: msg})
  }

  const handleChange = (field: string, val: string) => {
    setContact({...contact, [field]: val})
    if(dirty[field] === true) chkData(field, val)
  }

  const setDirtyField = (field: string) => {
    setDirty({...dirty, [field]: true})
    chkData(field, contact[field])
  }

  const isValidForm = (): boolean => {
    const result = contactSchema.safeParse(contact)
    console.log('parsesafe', result)
    return result.success;
  }

  return (
    <form
      action={() => onSubmit(contact)} 
      className={styles.contact}
    >
      <div className={styles.fieldset}>
        <Field
          value={contact.name}
          name='name'
          icon='fa-solid fa-face-smile'
          hint={hint.name}
          placeholder='my name is...'
          onChange={(val) => handleChange('name', val)}
          onBlur={() => setDirtyField('name')}
        />
        <Field
          value={contact.mail}
          name='mail'
          icon='fa-solid fa-envelope'
          hint={hint.mail}
          placeholder='mail@mail.com'
          onChange={(val) => handleChange('mail', val)}
          onBlur={() => setDirtyField('mail')}
        />
        <Field
          value={contact.msg}
          name='msg'
          icon='fa-solid fa-comment-dots'
          hint={hint.msg}
          placeholder='Congrats, critics, bla, bla'
          onChange={(val) => handleChange('msg', val)}
          onBlur={() => setDirtyField('msg')}
        />
      </div>
      <div className={styles.bottom}>
         {/* <p className={styles.hint}>Quis nulla deserunt nostrud anim</p> */}
        <div className={styles.actions}>
          <button 
            type='submit'
            disabled={!isValidForm()}
            onClick={() => onSubmit(contact)}
          >
            { isSubmit ? 
              <Image
                src='/spinner.png'
                alt=''
                width={37}
                height={37}
                className={styles.spinner}
              /> : 
              <span>enviar</span> }
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm