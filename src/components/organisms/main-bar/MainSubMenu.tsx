import styles from './styles.module.less'
import { SwLang } from '../../atoms'
import { useAtom } from 'jotai'
import { langAtom } from '../../../store'
import { BtnBlog } from '../../molecules'

const MainSubMenu = () => {
  const [lang, changeLang] = useAtom(langAtom);
  return (
    <div className={styles.mainSubMenu}>
      <SwLang 
        isEn={lang === 'en'} 
        onClick={() => changeLang()} 
      />
      <BtnBlog />
    </div>
  )
}

export default MainSubMenu