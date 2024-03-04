import { Footer, MainBar } from "@/components";
import styles from './styles.module.css'
import { Contact, Portfolio, Skills, Welcome } from "@/sections";

const Home = () => {
  console.log('jelouuuu')
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