import styles from './styles.module.less'
import MainMenu from './MainMenu'
import MainSubMenu from './MainSubMenu'

const MainBar = () => {
  return (
    <div className={styles.mainBar}>
      <div className={styles.left}>
        <MainSubMenu />
      </div>
      <div className={styles.right}>
        <MainMenu
          onSelected={() => {
          throw new Error('Function not implemented.')
        } } />
      </div>
    </div>
  )
}

export default MainBar