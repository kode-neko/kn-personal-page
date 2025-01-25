import styles from './styles.module.less'
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubTitle } from '../../atoms';
import { anumSecsRight, listSkill } from '../../../globals';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import Techs from './Techs';
import { motion } from "motion/react"

const SkillsSection = () => {
  const {t} = useTranslation();

  return (
    <motion.section 
      {...anumSecsRight}
      className={styles.skills}
      id="sectSkills"
    >
      <SubTitle label={t('label.skills')} />
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
    </motion.section>
  )
}

export default SkillsSection