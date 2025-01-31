import {z} from 'zod';

const {
  VITE_FORM_MAX_NAME,
  VITE_FORM_MAX_CONTENT
} = import.meta.env

const contactFormSchema = z.object({
  name: z.string().min(1).max(VITE_FORM_MAX_NAME),
  mail: z.string().email().min(1),
  content: z.string().min(1).max(VITE_FORM_MAX_CONTENT)
})

export {
  contactFormSchema
}