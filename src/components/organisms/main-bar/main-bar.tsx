import React from 'react'
import styles from './styles.module.css'
import MainMenu from './main-menu'

const MainBar = () => {
  return (
    <div className={styles.mainBar}> 
      <MainMenu />
    </div>
  )
}

export default MainBar