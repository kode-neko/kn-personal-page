import spinnerAnimation from '../../../../assets/spinner.png'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { toFormikValidate } from 'zod-formik-adapter';
import { Contact } from '../../../model';
import { contactFormSchema } from '../../../globals';
import { Field } from '../../atoms';
import ContactFormProps from './types';

const ContactForm = ({initValues, onSubmit}: ContactFormProps) => {
  const {t} = useTranslation()

  const {values, handleSubmit, handleChange, handleBlur, touched, errors, isSubmitting} = useFormik({
    initialValues: initValues,
    onSubmit: values => {
      console.log(JSON.stringify(values))
      onSubmit(values as Contact)
    },
    validate: toFormikValidate(contactFormSchema)
  })

  return (
    <form
    onSubmit={handleSubmit}
      data-test="form-contact"
      className={styles.form}
    >
      <div className={styles.fieldset}>
        <Field
          value={values.name}
          name='name'
          icon='fa-solid fa-face-smile'
          hint={(touched.name && errors.name && errors.name) as string}
          placeholder={t('placeH.name')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          value={values.mail}
          name='mail'
          icon='fa-solid fa-envelope'
          hint={(touched.mail && errors.mail && errors.mail) as string}
          placeholder={t('placeH.mail')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          isTextarea
          value={values.msg}
          name='msg'
          icon='fa-solid fa-comment-dots'
          hint={(touched.msg && errors.msg && errors.msg) as string}
          placeholder={t('placeH.msg')}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.actions}>
          <button
            data-test="btn-submit" 
            type='submit'
            disabled={isSubmitting}
          >
            { isSubmitting ? 
              <img
                src={spinnerAnimation}
                alt=''
                width={37}
                height={37}
                className={styles.spinner}
              /> : 
              <span>{t('label.send')}</span> }
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm