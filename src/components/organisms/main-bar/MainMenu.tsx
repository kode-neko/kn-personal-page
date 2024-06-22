import { useTranslation } from 'react-i18next';
import { menuOpts } from '../../../globals';
import styles from './styles.module.less'
import { MouseEvent } from "react"

const MainMenu = () => {
  const {t} = useTranslation();

  const handleClick = (eleStr: string, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ele = document.querySelector(eleStr) as HTMLDivElement;
    scroll({
      top: ele.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <ul className={styles.mainMenu}>
      {menuOpts.map(o => (
        <li key={o.id}>
          <a
            href={o.path as string}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => handleClick(o.path as string, e)}
          >
            <span>{t(`menu.${o.id}`)}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MainMenu