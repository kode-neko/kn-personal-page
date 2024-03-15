import { Footer, MainBar } from "@/components";
import styles from './styles.module.css'
import { Contact, Portfolio, Skills, Welcome } from "@/sections";
import clsx from "clsx";

const Home = () => {
  return (
    <div className={styles.mainCont}>
      <div className={clsx(styles.round, styles.round01)} />
      <div className={clsx(styles.round, styles.round02)} />
      <header>
        <MainBar />
      </header>
      <main className={styles.main}>
        <Welcome />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home