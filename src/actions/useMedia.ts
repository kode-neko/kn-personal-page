import { useState } from "react";

const MEDIA_LAPTOP = 1920
const MEDIA_TABLET = 1200
const MEDIA_MOBILE = 600

function useMedia(limit: number) {
  const [isMedia, setIsMedia] = useState<boolean>(false);
  const mql = window.matchMedia(`(max-width: ${limit}px)`);
  
  const handleChange = (e: MediaQueryListEvent) => {
    setIsMedia(e.matches)
  }

  mql.addEventListener('change', handleChange)

  return isMedia;
}

export default useMedia
export {
  MEDIA_LAPTOP,
  MEDIA_TABLET,
  MEDIA_MOBILE
}