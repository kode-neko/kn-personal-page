import spinnerAnimation from '../../../../assets/spinner.png'
import styles from './styles.module.css'
import { useTranslation } from 'react-i18next';
import { contactFormSchema } from '../../../globals';
import { BtnSq, Field } from '../../atoms';
import ContactFormProps from './types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = ({initValues, onSubmit}: ContactFormProps) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isSubmitting, isValid }
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initValues,
    mode: 'onTouched'
  });

  console.log('isSubmitting: ', isSubmitting);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-test="form-contact"
      className={styles.form}
    >
      <div className={styles.fieldset}>
        <Field
          name='name'
          icon='fa-solid fa-face-smile'
          placeholder={t('placeH.name')}
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          dirtyFields={dirtyFields}
        />
        <Field
          name='mail'
          icon='fa-solid fa-envelope'
          placeholder={t('placeH.mail')}
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          dirtyFields={dirtyFields}
        />
        <Field
          isTextarea
          name='content'
          icon='fa-solid fa-comment-dots'
          placeholder={t('placeH.msg')}
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          dirtyFields={dirtyFields}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.actions}>
          <BtnSq
            type='submit'
            size='lg'
            color='pink'
            disabled={!isValid}
          >
            { isSubmitting ? 
              <img
                src={spinnerAnimation}
                alt=''
                width={37}
                height={37}
                className={styles.spinner}
              /> : 
              <span>{t('label.send')}</span>
            }
          </BtnSq>
        </div>
      </div>
    </form>
  )
}

export default ContactForm