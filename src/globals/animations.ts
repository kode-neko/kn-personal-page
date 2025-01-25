const animSecs = {
  initial: { opacity: 0},
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2 },
  viewport: { once: true, amount: 0.1, delay: 0.2 }
}

const animSecsLeft = {
  ...animSecs,
  initial: { ...animSecs.initial, x: -100},
}

const anumSecsRight = {
  ...animSecs,
  initial: { ...animSecs.initial, x: 100},
}

const animMainBar = {
  initial: { y: -60 },
  whileInView: { y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
  viewport: { once: true }
}

const animFloatBtnsMobile = {
  initial:{ opacity: 0 },
  animate:{ opacity: 1 },
  exit:{ opacity: 0 },
  transition:{ duration: 0.8, delay: 0.2 }
}

const animSecsPortfolio = {
  initial: { opacity: 0},
  whileInView: { opacity: 1 },
  transition: { duration: 0.8, delay: 0.2 },
  viewport: { once: true }
}

export {
  animSecs,
  animSecsLeft,
  anumSecsRight,
  animMainBar,
  animFloatBtnsMobile,
  animSecsPortfolio
}