import { Project } from "../../../model";
import styles from './styles.module.less'
import { BtnIconTrans, Tag } from "../../atoms";
import { iconProjectDic } from "../../../globals";
import { useTranslation } from "react-i18next";

const InfoPortfolio = ({project}: {project: Project}) => {
  const {t} = useTranslation();
  const {id, pic: {id: idPic, src}, social, tags} = project
  
  return (
    <>
      <div className={styles.picCont}>
        <img
          src={src}
          alt={idPic}
          className={styles.pic}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{t(`project.${id}.title`)}</h3>
          <ul className={styles.social}>{social.map(s => (
            <li key={s.id}>
              <a href={s.path}>
              <BtnIconTrans
                color='blue'
                size='sm'
                icon={iconProjectDic[s.id as keyof typeof iconProjectDic]}
              />
              </a>
              
            </li>
          ))}</ul>
        </div>
        <p>{t(`project.${id}.desc`)}</p>
        <ul className={styles.tags}>
          {tags.map(t => (
            <li key={t}>
              <Tag label={t} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
 
export default InfoPortfolio