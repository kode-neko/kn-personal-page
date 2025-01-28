import BtnBlogProps from './types';
import { BtnSq } from '../../atoms';

const BtnBlog = ({size = 'md', color = 'pink'}: BtnBlogProps) => {
  const {VITE_BLOG_URL} = import.meta.env
  return (
    <BtnSq 
      icon='fa-solid fa-feather' 
      size={size} 
      color={color} 
      onClick={() => window.open(VITE_BLOG_URL)}
    >
    Blog
  </BtnSq>

  )
}

export default BtnBlog