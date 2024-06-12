import { useTranslation } from "react-i18next";
import styles from './styles.module.less'

const Techs = ({techs}: {techs: string[]}) => {
  const {t} = useTranslation();
  return (
    <ul className={styles.techs}>
      {techs.map(te => (
        <li key={te}>{t(te)}</li>
      ))}
    </ul>
  );
}

export default Techs