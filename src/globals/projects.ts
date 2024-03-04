import Project from "@/models/Project";

const akkountProject: Project = {
  id: 'akkount',
  pic: {
    id: "akkount",
    src: "/project/akkount.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'web',
      path: ''
    },
    {
      id: 'github',
      path: ''
    },
    {
      id: 'figma',
      path: ''
    }
  ],
  tags: ['React Native']
};

const cheettyProject: Project = {
  id: 'cheety',
  pic: {
    id: "cheetty",
    src: "/project/cheetty.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'web',
      path: ''
    },
    {
      id: 'github',
      path: ''
    },
    {
      id: 'figma',
      path: ''
    }
  ],
  tags: ['Vue', "Nuxt", "Pinia", "Node", "Koa", "Mongo"]
};

const codeTestProject: Project = {
  id: 'codetest',
  pic: {
    id: "codeTest",
    src: "/project/code-test.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'codepen',
      path: ''
    },
    {
      id: 'stackblitz',
      path: ''
    }
  ],
  tags: []
};

const iconProjectDic = {
  web: 'fa-solid fa-link',
  github: 'fa-brands fa-github',
  figma: 'fa-brands fa-figma',
  codepen: 'fa-brands fa-codepen',
  stackBlitz: 'fa-solid fa-bolt'
} 

const listProject: Project[] = [
  akkountProject,
  cheettyProject,
  codeTestProject
]

export {
  akkountProject,
  cheettyProject,
  codeTestProject,
  
  listProject,
  iconProjectDic
}