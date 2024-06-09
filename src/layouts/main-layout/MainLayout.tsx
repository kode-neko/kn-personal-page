import styles from './styles.module.css'

const MainLayout = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.mainCont}>
      <header className={styles.mainHeader}></header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.mainFooter}></footer>
    </div>
  )
}

export default MainLayout