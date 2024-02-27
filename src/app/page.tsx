import { Contact, Footer, MainBar, Portfolio, Skills, Welcome } from "@/components";
import '../fontawesome'
import styles from './styles.module.css'

const Home = () => {
  return (
    <div>
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