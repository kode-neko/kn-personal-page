import { useAnimate } from "framer-motion";
import { useState } from 'react'
import styles from './styles.module.less'
import InfoPortfolio from "./InfoPortFolio";
import { listProject } from "../../../globals";
import { SubTitle } from "../../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
 
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
    <section 
      className={styles.portfolio}
      id="sectPortfolio"
    >
      <div className={styles.cont}>
        <div className={styles.header}>
          <SubTitle
            label={t('label.portfolio')}
            align='left'
          />
          <div className={styles.arrows}>
            <button onClick={() => handleClickBtn(-1)}>
              <FontAwesomeIcon 
                icon={'fa-solid fa-chevron-left' as IconProp}
                className={styles.arrow} 
              />
            </button>
            <button onClick={() => handleClickBtn(1)}>
              <FontAwesomeIcon 
                icon={'fa-solid fa-chevron-right' as IconProp}
                className={styles.arrow} 
              />
            </button>
          </div>
        </div>
        <div 
          ref={scope}
          className={styles.content}
        >
          <InfoPortfolio project={listProject[idProject]} />
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection