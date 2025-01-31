import styles from './styles.module.css'
import mailBoxAnim from '../../../../assets/mail-box.apng'
import { Contact } from '../../../model'
import sendNoti from '../notification/useNoti'
import { SubTitle } from '../../atoms'
import { ContactForm } from '../../molecules'
import { useTranslation } from 'react-i18next'
import { animSecsRight } from '../../../globals'
import { sendMsg } from '../../../service'
import {motion} from 'motion/react'

const ContactSection = () => {

  const contact = {
    name: '',
    mail: '',
    msg: ''
  };

  const {t} = useTranslation()

  const handleSendMessage = async (contact: Contact) => {
    console.log('Form ok')
    sendMsg(contact)
      .then(() => sendNoti({ msg: '😃 Message sended' }))
      .catch(() => sendNoti({ msg: '☹️ There was an error' }))
  }

  return (
    <motion.section 
      {...animSecsRight}
      className={styles.contact}
      id="sectContact"
    >
      <SubTitle
        label={t('label.contact')}
        align='right'
      />
      <div className={styles.cont}>
        <div className={styles.contPic}>
          <img
            src={mailBoxAnim}
            alt=''
            className={styles.pic}
          />
        </div>
        <div className={styles.contForm}>
          <ContactForm
            initValues={contact} 
            onSubmit={handleSendMessage}
          />
        </div>
      </div>                                 
    </motion.section>
  )
}

export default ContactSection