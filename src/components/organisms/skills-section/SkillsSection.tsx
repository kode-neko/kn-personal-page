import styles from './styles.module.css'
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubTitle } from '../../atoms';
import { listSkill } from '../../../globals';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import Techs from './Techs';

const SkillsSection = () => {
  const {t} = useTranslation();

  return (
    <section 
      className={styles.skills}
      id="sectSkills"
    >
      <SubTitle label={t('opts.skills')} />
      <ul className={styles.areas}>
        {listSkill.map(s => (
          <li key={s.id}>
            <h3>
              <FontAwesomeIcon 
                icon={s.icon as IconProp} 
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

export default SkillsSection