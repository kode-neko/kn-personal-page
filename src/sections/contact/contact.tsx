'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { ContactForm, Icon, SubTitle } from '@/components'
import { useState } from 'react'
import { Contact } from '@/models'
import { getContact } from '@/services'

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [contact, setContact] = useState<Contact>({
    name: '',
    mail: '',
    msg: ''
  });

  const handleSendMessage = (contact: Contact) => {
    setIsSubmit(true);
    const contactService = getContact();
    contactService.newMesvsage(contact)
      .then(contact => console.log('message sended'))
      .catch(err => console.log(err))
      .finally(() => setTimeout(() => setIsSubmit(false), 5000))
  }

  return (
    <section className={styles.contact}>
      <SubTitle
        label="contact"
        align='right'
      />
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
        <ContactForm 
          initValues={contact} 
          onSubmit={handleSendMessage}
          isSubmit={isSubmit}
        />
      </div>                                 
    </section>
  )
}

export default Contact