import clsx from 'clsx'
import { Footer, FooterFloat, MainBar } from '../../components'
import styles from './styles.module.less'
import MainBarMobile from '../../components/organisms/main-bar/MainBarMobile'

const MainLayout = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.mainCont}>
      <header className={styles.mainHeader}>
        <MainBar />
        <MainBarMobile />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.mainFooter}>
        <Footer></Footer>
      </footer>
      <FooterFloat />
      <div className={clsx(styles.round, styles.round01)}></div>
      <div className={clsx(styles.round, styles.round02)}></div>
    </div>
  )
}

export default MainLayout