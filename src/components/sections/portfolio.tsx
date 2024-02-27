import Image from 'next/image'
import styles from './styles.module.css'

const InfoPortfolio = () => {
  return (
    <div>
      <div>
        <h3></h3>
        <ul>social</ul>
      </div>
      <p></p>
      <ul>tags</ul>
    </div>
  )
}
 
const Portfolio = () => {
  return (
    <section>
      <div>
        <h2>portfolio</h2>
        <div>
          <button>izq</button>
          <button>der</button>
        </div>
        <div>
          <Image />
          <InfoPortfolio />
        </div>
      </div>
    </section>
  )
}

export default Portfolio