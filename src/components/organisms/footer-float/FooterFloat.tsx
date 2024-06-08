import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function useVisibilityEle(limitScroll: number) {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      setVisible(window.scrollY > limitScroll)
    })
  }, [])
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
          <FontAwesomeIcon 
            icon={'fa-solid fa-arrow-up' as IconProp} 
            className={styles.arrow} 
          />
        </motion.button> 
      )}
      </AnimatePresence>
    </div>
  )
}

export default FooterFloat