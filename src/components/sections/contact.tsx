import Image from 'next/image'
import styles from './styles.module.css'

const Field = () => {
  return (
    <div>
      <div>icon</div>
      <div><input /></div>
    </div>
  )
}

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <div>
        <Image />
      </div>
      <div>
        <div>
          <Field />
          <Field />
          <Field />
        </div>
        <div>
          <div>hint</div>
          <div>
            <button>enviar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact