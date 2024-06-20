
import i18next from 'i18next';
import {atom} from 'jotai'
import { User } from '../model'

const userAtom = atom<User>({
  lang: i18next.language as 'es' | 'en',
  theme: 'dark'
})

const langAtom = atom(
  (get) => get(userAtom).lang,
  (get, set) => {
    const newLang = get(userAtom).lang === 'en' ? 'es' : 'en'
    i18next.changeLanguage(newLang)
    set(userAtom, {...get(userAtom), lang: newLang})
  },
)

export { userAtom, langAtom }