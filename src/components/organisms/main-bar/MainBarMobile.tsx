import styles from './styles.module.less'
import MainMenu from './MainMenu'
import { BtnIconTrans, BtnSq, SwLang } from '../../atoms'
import { useAtom } from 'jotai';
import { langAtom } from '../../../store';
import { BtnBlog } from '../../molecules';
import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react'
import { animOpacity } from '../../../globals';

const MainBarMobile = () => {
  const [lang, changeLang] = useAtom(langAtom);
  const [isVisible, setVisible] = useState<boolean>(false);
  return (
    <div className={styles.mainBarMobile}>
      <motion.div
        {...animOpacity}
        className={styles.btnMenu}
      >
        <BtnSq 
          icon='fa-solid fa-bars' 
          size='lg'
          onClick={() => setVisible(true)}
        />
      </motion.div>
      <div className={clsx(styles.mainMenuMobile, isVisible && styles.visible)}>
        <div className={styles.header}>
          <div className={styles.left}>
            <BtnBlog color='purple' size='lg' />
            <SwLang 
              isEn={lang === 'en'} 
              onClick={() => changeLang()} 
            />
          </div>
          <div className={styles.right}>
            <button onClick={() => setVisible(false)} >
              <BtnIconTrans 
                icon='fa-regular fa-circle-xmark' 
                color='light' 
                size='md'
              />
            </button>
          </div>
        </div>
        <MainMenu onSelected={() => setVisible(false)} />
      </div>
      <div className={clsx(styles.overlay, isVisible && styles.visible)} />
    </div>
  )
}

export default MainBarMobile