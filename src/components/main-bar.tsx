import { menuOpts } from '@/globals'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const MainMenu = () => {
  return (
    <div className={styles.mainBar}> 
      <ul className={styles.menu}>
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
    </div>
  )
}

export default MainMenu