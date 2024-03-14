'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { ContactForm, Icon, SubTitle } from '@/components'
import { useState } from 'react'
import { Contact } from '@/models'

const Contact = () => {
  const [contact, setContact] = useState<Contact>({
    name: '',
    mail: '',
    msg: ''
  });

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
          onSubmit={(result) => setContact(result)}
          isSubmit={false}
        />
      </div>                                 
    </section>
  )
}

export default Contact