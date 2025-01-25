import styles from './styles.module.css'
import mailBoxAnim from '../../../../assets/mail-box.apng'
import { Contact } from '../../../model'
import useAkNoti from '../notification/useNoti'
import { sendMsg } from '../../../service'
import { SubTitle } from '../../atoms'
import { ContactForm } from '../../molecules'
import { useTranslation } from 'react-i18next'
import {motion} from 'framer-motion'
import { anumSecsRight } from '../../../globals'

const ContactSection = () => {
  const contact = {
    name: '',
    mail: '',
    msg: ''
  };

  const {t} = useTranslation()

  const handleSendMessage = async (contact: Contact) => {
    sendMsg(contact)
      .then(() => useAkNoti({ msg: '😃 Message sended' }))
      .catch(() => useAkNoti({ msg: '☹️ There was an error' }))
  }

  return (
    <motion.section 
      {...anumSecsRight}
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