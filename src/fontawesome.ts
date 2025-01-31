import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faFigma, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp, faBars, faBolt, faChevronLeft, faChevronRight, faCommentDots, faDesktop, faEnvelope, faFaceSmile, faFeather, faGear, faLink, faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

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
  faLink,
  faArrowUp,
  faFeather,
  faCircleXmark,
  faBars
)