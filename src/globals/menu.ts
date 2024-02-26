import { Option } from "@/models";
import { contactPath, portfolioPath, skillsPath, welcomePath } from ".";

const welcomeOpt: Option = {
  id: 'welcome',
  path: welcomePath
}
const skillsOpt: Option = {
  id: 'skills',
  path: skillsPath
}
const portfolioOpt: Option = {
  id: 'portfolio',
  path: portfolioPath
}
const contactOpt: Option = {
  id: 'contact',
  path: contactPath
}

const menuOpt: Option[] = [
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
  menuOpt
}