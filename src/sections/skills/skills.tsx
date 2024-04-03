import { listSkill } from '@/globals'
import styles from './styles.module.css'
import { BtnIcon, Icon, SubTitle } from '@/components';
import clsx from 'clsx';
import { t } from '@/actions';

const Techs = ({techs}: {techs: string[]}) => {
  return (
    <ul className={styles.techs}>
      {techs.map(te => (
        <li key={te}>{t(te)}</li>
      ))}
    </ul>
  );
}

const Skills = async () => {
  return (
    <section 
      className={styles.skills}
      id="sectSkills"
    >
      <SubTitle label={await t('opts.skills')} />
      <ul className={styles.areas}>
        {listSkill.map(s => (
          <li key={s.id}>
            <h3>
              <Icon 
                icon={s.icon} 
                className={styles.icon} 
              />
              <span>{t(`skills.${s.id}`)}</span>
            </h3>
            <Techs techs={s.techs} />
          </li>
        ))}
      </ul>
      <div className={clsx(styles.line, styles.line01)} />
      <div className={clsx(styles.line, styles.line02)} />
    </section>
  )
}

export default Skills