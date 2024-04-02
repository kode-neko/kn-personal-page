'use client'

import { menuOpts } from "@/globals"
import styles from './styles.module.css'
import Link from "next/link"
import { MouseEvent } from "react"
import { t } from "@/actions"

const MainMenu = () => {
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
        <Link
          href={o.path as string}
          onClick={(e: MouseEvent<HTMLAnchorElement>) => handleClick(o.path as string, e)}
        >
          {t(`opts.${o.id}`) }
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default MainMenu