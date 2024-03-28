'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Icon } from ".."
import styles from './styles.module.css'

function useVisibilityEle(limitScroll: number) {
  const [visible, setVisible] = useState<boolean>(false);
  document.addEventListener('scroll', (event) => {
    if(window.scrollY > limitScroll)
      setVisible(true)
    else
      setVisible(false)
  })
  return visible;
}

const FooterFloat = () => {
  const visible = useVisibilityEle(400);
  const handleClick = () => scroll({
    top: 0,
    behavior: "smooth"
  })
  return (
    <div className={styles.cont}>
      <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.5 }}
          className={styles.button} 
          onClick={handleClick}
        >
          <Icon 
            icon='fa-solid fa-arrow-up'
            className={styles.arrow} 
          />
        </motion.button> 
      )}
      </AnimatePresence>
    </div>
  )
}

export default FooterFloat