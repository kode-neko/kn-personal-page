import Image from 'next/image'
import styles from './styles.module.css'

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <div>
        <Image />
      </div>
      <div>
        <div>
          <div>
            <div>icon</div>
            <div><input /></div>
          </div>
          <div>
            <div>icon</div>
            <div><input /></div>
          </div>
          <div>
            <div>icon</div>
            <div><input /></div>
          </div>
          <div>
            <div>hint</div>
            <div>
              <button>enviar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact