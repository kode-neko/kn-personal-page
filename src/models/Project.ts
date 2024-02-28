import Picture from './Picture';
import Link from './Link'

interface Project {
  id: string;
  pic: Picture;
  social: Link[];
  tags: string[];
}

export default Project
