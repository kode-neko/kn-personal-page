import styles from './styles.module.less'
import MainMenu from './MainMenu'
import { SwLang } from '../../atoms'
import { useAtom } from 'jotai'
import { langAtom } from '../../../store'

const MainBar = () => {
  const [lang, changeLang] = useAtom(langAtom);
  return (
    <div className={styles.mainBar}>
      <div className={styles.left}>
        <SwLang 
          isEn={lang === 'en'} 
          onClick={() => changeLang()} 
        />
      </div>
      <div className={styles.right}><MainMenu /></div>
    </div>
  )
}

export default MainBar