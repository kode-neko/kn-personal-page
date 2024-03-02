import { listSkill } from '@/globals'
import styles from './styles.module.css'

const Techs = ({techs}: {techs: string[]}) => {
  return (
    <ul className={styles.techs}>
      { techs.map(t => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.areas}>
        {listSkill.map(s => (
          <li key={s.id}>
            <h3>{s.id}</h3>
            <Techs techs={s.techs} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills