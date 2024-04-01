enum LangSel {
  EN = 'en',
  ES = 'es'
}

let currentLang = LangSel.EN;

function changeLang(lang: LangSel) {
  currentLang = lang
}

function getCurrentLang(): LangSel {
  return currentLang;
}

export {
  LangSel,
  changeLang,
  getCurrentLang
}