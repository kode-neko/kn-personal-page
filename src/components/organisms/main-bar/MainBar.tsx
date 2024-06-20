import styles from './styles.module.less'
import MainMenu from './MainMenu'
import { BtnSq, SwLang } from '../../atoms'
import { useAtom } from 'jotai'
import { langAtom } from '../../../store'

const MainBar = () => {
  const [lang, changeLang] = useAtom(langAtom);
  const {VITE_BLOG_URL} = import.meta.env
  return (
    <div className={styles.mainBar}>
      <div className={styles.left}>
        <SwLang 
          isEn={lang === 'en'} 
          onClick={() => changeLang()} 
        />
        <BtnSq icon='fa-solid fa-feather' size='sm' onClick={() => window.open(VITE_BLOG_URL, '_blank')}>
          Blog
        </BtnSq>
      </div>
      <div className={styles.right}><MainMenu /></div>
    </div>
  )
}

export default MainBar