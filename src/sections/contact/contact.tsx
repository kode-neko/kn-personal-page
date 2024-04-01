/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { ContactForm, SubTitle } from '@/components'
import { useState } from 'react'
import { Contact } from '@/models'
import { newMessage } from '@/services'
import useAkNoti from '@/components/notification/useNoti'
import { useMedia, MEDIA_MOBILE, MEDIA_TABLET } from '@/actions'

const Contact = () => {
  const is900 = useMedia(900);
  const isTablet = useMedia(MEDIA_TABLET);
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const contact = {
    name: '',
    mail: '',
    msg: ''
  };

  const handleSendMessage = async (contact: Contact) => {
    setIsSubmit(true);
    newMessage(contact)
      .then(() => useAkNoti({ msg: '😃 Message sended' }))
      .catch(() => useAkNoti({ msg: '☹️ There was an error' }))
      .finally(() => setIsSubmit(false))
  }

  return (
    <section 
      className={styles.contact}
      id="sectContact"
    >
      <SubTitle
        label="contact"
        align='right'
      />
      <div className={styles.cont}>
        <div className={styles.contPic}>
          <Image
            unoptimized={false}
            src='/mail-box.apng'
            alt=''
            width={isTablet ? 399/1.5 : 399}
            height={isTablet ? 280/1.5 : 280}
            className={styles.pic}
          />
        </div>
        <div className={styles.contForm}>
          <ContactForm 
            initValues={contact} 
            onSubmit={handleSendMessage}
            isSubmit={isSubmit}
          />
        </div>
      </div>                                 
    </section>
  )
}

export default Contact