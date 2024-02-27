import { codepenPath, figmaPath, githubPath, stackblitzPath } from "./paths"


const githubLink = {
  id: 'Github',
  path: githubPath
}

const codepenLink = {
  id: 'Codepen',
  path: codepenPath
}

const stackblitzLink = {
  id: 'StackBlitz',
  path: stackblitzPath
}

const figmaLink = {
  id: 'Figma',
  path: figmaPath
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