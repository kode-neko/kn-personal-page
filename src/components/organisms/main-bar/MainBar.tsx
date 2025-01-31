import styles from './styles.module.less'
import MainMenu from './MainMenu'
import MainSubMenu from './MainSubMenu'
import { motion } from 'motion/react'
import { animMainBar } from '../../../globals/animations'

const MainBar = () => {
  return (
    <motion.div
      {...animMainBar}
      className={styles.mainBar}
    >
      <div className={styles.left}>
        <MainSubMenu />
      </div>
      <div className={styles.right}>
        <MainMenu />
      </div>
    </motion.div>
  )
}

export default MainBar