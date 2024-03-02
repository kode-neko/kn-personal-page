import { menuOpts } from "@/globals"
import styles from './styles.module.css'
import Link from "next/link"

const MainMenu = () => {
  return (
    <ul className={styles.mainMenu}>
    {menuOpts.map(o => (
      <li key={o.id}>
        <Link
          about={o.path}
          href={o.path}
        >
          {o.id}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default MainMenu