import styles from './styles.module.less'
import MainMenu from './MainMenu'
import { BtnIcon, SwLang } from '../../atoms'
import { useAtom } from 'jotai';
import { langAtom } from '../../../store';
import { BtnBlog } from '../../molecules';

const MainBarMobile = () => {
  const [lang, changeLang] = useAtom(langAtom);
  return (
    <div className={styles.mainBarMobile}>
      <div className={styles.btnMenu}>
        <BtnIcon icon='fa-solid fa-bars' />
      </div>
      <div className={styles.mainMenuMobile}>
        <div className={styles.header}>
          <div className={styles.left}>
            <BtnBlog color='purple' />
            <SwLang 
              isEn={lang === 'en'} 
              onClick={() => changeLang()} 
            />
          </div>
          <div className={styles.right}>
            <BtnIcon 
              icon='fa-regular fa-circle-xmark' 
              color='light' 
              size='sm' 
            />
          </div>
        </div>
        <MainMenu />
      </div>
    </div>
  )
}

export default MainBarMobile