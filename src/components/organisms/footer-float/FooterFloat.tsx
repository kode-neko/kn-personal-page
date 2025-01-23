import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import styles from './styles.module.css'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import BtnIcon from "../../atoms/btn-icon/BtnIcon";

const {VITE_BLOG_URL} = import.meta.env

function useVisibilityEle(limitScroll: number) {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVisible(window.scrollY > limitScroll)
    })
  }, [])
  return visible;
}

const FooterFloat = () => {
  const visible = useVisibilityEle(400);
  const handleClickBlog = () => window.open(VITE_BLOG_URL, '_blank')
  const handleClickScroll = () => scroll({
    top: 0,
    behavior: "smooth"
  })

  return (
    <div className={styles.cont}>
      <AnimatePresence>
        {visible && (
          <div className={styles.contBtn}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 0.5 }}
              onClick={handleClickBlog}
            >
              <BtnIcon
                icon={'fa-solid fa-feather' as IconProp}
                color='blue'
                size='sm'
              />
            </motion.button> 
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 0.5 }}
              onClick={handleClickScroll}
            >
              <BtnIcon
                icon={'fa-solid fa-arrow-up' as IconProp}
                color='blue'
                size='sm'
              />
            </motion.button> 
          </div>
      )}
      </AnimatePresence>
    </div>
  )
}

export default FooterFloat