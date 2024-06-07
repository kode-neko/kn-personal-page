import { Link } from "@/models";
import { contactPath, portfolioPath, skillsPath, welcomePath } from ".";

const welcomeOpt: Link = {
  id: 'welcome',
  path: welcomePath
}
const skillsOpt: Link = {
  id: 'skills',
  path: skillsPath
}
const portfolioOpt: Link = {
  id: 'portfolio',
  path: portfolioPath
}
const contactOpt: Link = {
  id: 'contact',
  path: contactPath
}

const menuOpts: Link[] = [
  welcomeOpt,
  skillsOpt,
  portfolioOpt,
  contactOpt
]

export {
  welcomeOpt,
  skillsOpt,
  portfolioOpt,
  contactOpt,
  menuOpts
}