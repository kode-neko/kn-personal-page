import { Skill } from "@/models";

const frontSkills: Skill = {
  id: 'front',
  techs: [
    'React',
    'Vue',
    'Next',
    'Nuxt',
    'React Native'
  ]
}

const backSkills: Skill = {
  id: 'back',
  techs: [
    'Node',
    'Express/Koa',
    'Mongo',
    'Mongoose'
  ]
}

const designSkills: Skill = {
  id: 'design',
  techs: [
    'Figma',
    'Photoshop',
    'Illustrator'
  ]
}

const toolsSkills: Skill = {
  id: 'tools',
  techs: [
    'Docker',
    'Nginx',
    'Git'
  ]
}

const listSkill = [
  frontSkills,
  backSkills,
  designSkills,
  toolsSkills
]

export {
  frontSkills,
  backSkills,
  designSkills,
  toolsSkills,

  listSkill
}