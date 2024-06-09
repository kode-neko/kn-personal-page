import clsx from 'clsx'
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
      <div className={clsx(styles.round, styles.round01)}></div>
      <div className={clsx(styles.round, styles.round02)}></div>
    </div>
  )
}

export default MainLayout