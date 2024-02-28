import Project from "@/models/Project";

const akkountProject: Project = {
  id: 'akkount',
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

const listProject = [
  akkountProject,
  cheettyProject,
  codeTestProject
]

export {
  akkountProject,
  cheettyProject,
  codeTestProject,
  
  listProject
}