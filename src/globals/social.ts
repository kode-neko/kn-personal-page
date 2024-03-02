import { Link } from "@/models"
import { codepenPath, figmaPath, githubPath, stackblitzPath, twitterPath } from "./paths"

const twitterLink: Link = {
  id: 'Twitter',
  path: twitterPath,
  icon: 'fa-brands fa-twitter'
}

const githubLink: Link = {
  id: 'Github',
  path: githubPath,
  icon: 'fa-brands fa-github-alt'
}

const codepenLink = {
  id: 'Codepen',
  path: codepenPath,
  icon: 'fa-brands fa-codepen'
}

const stackblitzLink = {
  id: 'StackBlitz',
  path: stackblitzPath,
  icon: 'fa-solid fa-bolt'
}

const figmaLink = {
  id: 'Figma',
  path: figmaPath,
  icon: 'fa-brands fa-figma'
}

const socialList = [
  githubLink,
  codepenLink,
  stackblitzLink,
  figmaLink
]

export {
  githubLink,
  codepenLink,
  stackblitzLink,
  figmaLink,

  socialList
}