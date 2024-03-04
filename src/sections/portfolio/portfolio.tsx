'use client'

import { motion, useAnimate } from "framer-motion";
import Image from 'next/image'
import styles from './styles.module.css'
import Project from '@/models/Project'
import { iconProjectDic, listProject } from '@/globals'
import { BtnIcon, Icon, SubTitle, Tag } from '@/components'
import { useEffect, useState } from 'react'

const InfoPortfolio = ({project}: {project: Project}) => {
  const {id, pic: {id: idPic, src, width, height}, social, tags} = project
  return (
    <>
      <Image
        src="/projects/akkaunt.png"
        alt={idPic}
        width={width}
        height={height}
        className={styles.pic}
      />
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{id}</h3>
          <ul className={styles.social}>{social.map(s => (
            <li key={s.id}>
              <BtnIcon
                href={s.path as string}
                color='blue'
                size='sm'
                icon={iconProjectDic[s.id] as string}
              />
            </li>
          ))}</ul>
        </div>
        <p>Anim reprehenderit laboris occaecat laboris velit aliqua nisi minim labore amet irure adipisicing velit nisi. Fugiat dolore ad fugiat commodo voluptate.</p>
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
 
const Portfolio = () => {
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
    <section className={styles.portfolio}>
      <div className={styles.cont}>
        <div className={styles.header}>
          <SubTitle
            label="portfolio"
            align='left'
          />
          <div className={styles.arrows}>
            <button onClick={() => handleClickBtn(-1)}>
              <Icon 
                icon='fa-solid fa-chevron-left'
                className={styles.arrow} 
              />
            </button>
            <button onClick={() => handleClickBtn(1)}>
              <Icon 
                icon='fa-solid fa-chevron-right'
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

export default Portfolio