import { Footer, MainBar } from "@/components";
import styles from './styles.module.css'
import { Contact, Portfolio, Skills, Welcome } from "@/sections";

const Home = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.round} />
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