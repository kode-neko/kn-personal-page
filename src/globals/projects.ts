import { Project } from "../model";

const landRestProject: Project = {
  id: 'landRest',
  pic: {
    id: "landRest",
    src: "/project/landRest.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'web',
      path: 'https://kodeneko.com/landing-restaurant'
    },
    {
      id: 'github',
      path: 'https://github.com/kode-neko/kn-landing-restaurant'
    },
    {
      id: 'figma',
      path: 'https://www.figma.com/proto/AObS4h3kVbla0NXNyMhdbI/Landings?node-id=0-1&t=PhsatdxvRFsYBczH-1'
    }
  ],
  tags: ['Vue', 'Pinia']
};

const landMedProject: Project = {
  id: 'landMed',
  pic: {
    id: "landMed",
    src: "/project/landMed.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'web',
      path: 'https://kodeneko.com/landing-medical'
    },
    {
      id: 'github',
      path: 'https://github.com/kode-neko/kn-landing-medical'
    },
    {
      id: 'figma',
      path: 'https://www.figma.com/proto/AObS4h3kVbla0NXNyMhdbI/Landings?node-id=0-1&t=PhsatdxvRFsYBczH-1'
    }
  ],
  tags: ['React', 'Redux']
};

const lionmissProject: Project = {
  id: 'lionmiss',
  pic: {
    id: "lionmiss",
    src: "/project/lionmiss.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'github',
      path: 'https://github.com/kode-neko/kn-lionmiss-back'
    }
  ],
  tags: ['Node', 'Express', 'Mongo', 'SQL', 'Prisma', 'Jest']
};

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
      path: 'https://kodeneko.com/akkount'
    },
    {
      id: 'github',
      path: 'https://github.com/kode-neko/kn-akkount'
    }
  ],
  tags: ['React Native']
};

const cheettyProject: Project = {
  id: 'cheetty',
  pic: {
    id: "cheetty",
    src: "/project/cheetty.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'web',
      path: 'https://kodeneko.com/cheetty'
    },
    {
      id: 'github',
      path: 'https://github.com/kode-neko/kn-cheety-front-vue'
    },
    {
      id: 'figma',
      path: 'https://www.figma.com/community/file/1461732137306863107'
    }
  ],
  tags: ['Vue', "Pinia", "Node", "Express", "Mongo"]
};

const codeTestProject: Project = {
  id: 'codeTest',
  pic: {
    id: "codeTest",
    src: "/project/code-test.webp",
    width: 450,
    height: 450
  },
  social: [
    {
      id: 'github',
      path: 'https://github.com/kode-neko'
    },
    {
      id: 'codepen',
      path: 'https://codepen.io/kodeneko'
    },
    {
      id: 'stackblitz',
      path: 'https://stackblitz.com/'
    },
    {
      id: 'figma',
      path: 'https://www.figma.com/@kodeneko'
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
  landRestProject,
  landMedProject,
  lionmissProject,
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