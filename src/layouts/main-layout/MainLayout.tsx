import { MainBar } from '../../components'
import styles from './styles.module.less'

const MainLayout = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.mainCont}>
      <header className={styles.mainHeader}>
        <MainBar></MainBar>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.mainFooter}></footer>
      <div className={styles.round}></div>
    </div>
  )
}

export default MainLayout