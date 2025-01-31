import { useAnimate } from "motion/react";
import { useState } from 'react'
import styles from './styles.module.less'
import InfoPortfolio from "./InfoPortFolio";
import { animSecsPortfolio, listProject } from "../../../globals";
import { SubTitle } from "../../atoms";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
import { BtnBlog } from "../../molecules";
import BtnIcon from "../../atoms/btn-icon/BtnIcon";
import {motion} from 'motion/react'
 
const PortfolioSection = () => {
  const {t} = useTranslation();
  const [scope, animate] = useAnimate()
  const [idProject, setIdProject] = useState<number>(0);

  const handleClickBtn = (moveQty: number) => {
    animate(scope.current, {opacity: 0, transform: 'translateX(-75rem)'}, { duration: 0.4, ease: "easeIn" })
    setTimeout(() => {
      let calcIndex = idProject + moveQty;
      if(calcIndex === listProject.length)
        calcIndex = 0
      else if(calcIndex < 0)
        calcIndex = listProject.length - 1
      setIdProject(calcIndex)
      animate(scope.current, {opacity: 1, transform: 'translateX(0rem)'}, { duration: 0.4, ease: "easeOut" })
    }, 400)
  }

  return (
    <motion.section 
      {...animSecsPortfolio}
      className={styles.portfolio}
      id="sectPortfolio"
    >
      <div className={styles.cont}>
        <div className={styles.header}>
          <div className={styles.title}>
            <SubTitle
              label={t('label.portfolio')}
              align='left'
            />
          </div>
          <div className={styles.actions}>
            <BtnBlog
              size="sm"
              color="blue"
            />
            <div className={styles.arrows}>
              <button onClick={() => handleClickBtn(-1)}>
                <BtnIcon icon={'fa-solid fa-chevron-left' as IconProp} />
              </button>
              <button onClick={() => handleClickBtn(1)}>
                <BtnIcon icon={'fa-solid fa-chevron-right' as IconProp} />
              </button>
            </div>
          </div>
        </div>
        <div 
          ref={scope}
          className={styles.content}
        >
          <InfoPortfolio project={listProject[idProject]} />
        </div>
      </div>
    </motion.section>
  )
}

export default PortfolioSection