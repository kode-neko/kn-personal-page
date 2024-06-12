import {z} from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1),
  mail: z.string().email(),
  msg: z.string().min(10)
})

export {
  contactFormSchema
}