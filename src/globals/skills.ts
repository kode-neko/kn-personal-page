import { Skill } from "../model"

const frontSkills: Skill = {
  id: 'front',
  icon: 'fa-solid fa-desktop',
  techs: [
    'React',
    'Vue',
    'Next',
    'React Native'
  ]
}

const backSkills: Skill = {
  id: 'back',
  icon: 'fa-solid fa-gear',
  techs: [
    'Node',
    'Express/Koa',
    'Mongo',
    'SQL',
    'Prisma'
  ]
}

const designSkills: Skill = {
  id: 'design',
  icon: 'fa-solid fa-paint-roller',
  techs: [
    'Figma',
    'Photoshop'
  ]
}

const toolsSkills: Skill = {
  id: 'tools',
  icon: 'fa-solid fa-screwdriver-wrench',
  techs: [
    'Docker',
    'Nginx',
    'Git'
  ]
}

const listSkill = [
  frontSkills,
  backSkills,
  toolsSkills,
  designSkills
  
]

export {
  frontSkills,
  backSkills,
  designSkills,
  toolsSkills,

  listSkill
}