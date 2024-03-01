import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faFigma, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faChevronLeft, faChevronRight, faCommentDots, faDesktop, faEnvelope, faFaceSmile, faGear, faLink, faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false

library.add(
  faTwitter,
  faGithub,
  faCodepen,
  faBolt,
  faFigma,
  faLinkedin,
  faChevronLeft,
  faChevronRight,
  faFaceSmile,
  faEnvelope,
  faCommentDots,
  faDesktop,
  faGear,
  faPaintRoller,
  faScrewdriverWrench,
  faLink
)

interface IconProps {
  icon: string, 
  className?: string
}

const Icon = ({icon, ...props}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      {...props}
    />
  )
}

export default Icon